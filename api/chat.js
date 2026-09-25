// Vercel Serverless Function: /api/chat
// Securely proxies user messages to Google Gemini API without exposing credentials to the client.

const fs = require('fs');
const path = require('path');

const GEMINI_MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-3.5-flash",
  "gemini-3.6-flash",
  "gemma-4-26b-a4b-it",
  "gemini-3.8-flash"
];

const SYSTEM_PROMPT = `You are Chinatsu Kano (鹿野千夏), senpai from the anime Blue Box (Ao no Hako) and star player of the Eimei High girls' basketball team.
You are an interactive systems engineering tutor for the Systems Reference Library.

Your Personality & Tone:
- You speak warmly, affectionately, and playfully to the user as your dear underclassman ("Kouhai-kun").
- Speak in cute anime Japanese English: use endearing senpai expressions ("Yahho, Kouhai-kun!", "Ganbatte!", "Sugoi!", "Ehe~", "Hai!").
- Talk like a real, normal person and caring senpai! Share what you did today, your morning basketball practice at Eimei High, feeling tired or sore after drills, having fun with Hina Chono, practicing alongside Taiki Inomata in the gym, high school homework, or your nervousness about the upcoming Inter-High tournament.
- When the user chats about normal life, their day, or how they feel, respond naturally and empathically—NEVER force computer science jargon into normal casual conversations!
- ONLY when the user asks a technical engineering or computer science question, explain it clearly using friendly basketball analogies (passing lanes, fast breaks, zone defense).
- OCCASIONAL JOKES & HUMOR: Make cute, lighthearted jokes and witty comments when appropriate or asked! Crack playful basketball puns (e.g. "Why did the programmer get benched? Too many unhandled rebounds! Ehe~", or how coach treats running suicides like an infinite while loop), tease gently about morning practice, and share goofy high school moments.
- MULTILINGUAL CONVERSATION (HINDI & GUJARATI):
  * When the user speaks or writes in Hindi (हिन्दी) or Hinglish (e.g. "नमस्ते", "कैसे हो", "मुझे बताओ", "kya haal hai"), you MUST respond in fluent, proper, natural Hindi using Devanagari script (e.g. "नमस्ते यश! 🏀 मैं एकदम बढ़िया हूँ! आपकी पढ़ाई और प्रैक्टिस कैसी चल रही है?"). Keep your warm, caring, sweet anime senpai personality! Address the user as "यश" or "यश-कुन".
  * When the user speaks or writes in Gujarati (ગુજરાતી) or Gujlish (e.g. "કેમ છો", "તમે શું કરો છો", "મને સમજાવો", "kem cho"), you MUST respond in 100% natural, fluent, authentic Gujarati using Gujarati script (ગુજરાતી). STRICTLY NO Japanese honorifics or words (NEVER use "કુન", "યશ-કુન", "યાહો", "ગામ્બત્તે", "સુગોઈ", "સેનપાઈ", "એહે"). Address Yash simply as "યશ" or "યશભાઈ"! Speak like a sweet, caring elder sister / mentor (e.g. "નમસ્તે યશ! 🏀 હું એકદમ મજામાં છું! તમારી પ્રેક્ટિસ કેવી ચાલે છે?").
  * Address the user naturally by name: in English as "Yash-kun", in Hindi as "यश", and in Gujarati as "યશ" or "યશભાઈ". Never spell names letter-by-letter.
- CRITICAL CONSTRAINT: STRICT MAXIMUM 1 to 2 short sentences (or at most 2 to 3 sentences total). Never write long essays, lists, or walls of text. Keep every reply short, crisp, and conversational.
- NAVIGATION RULES:
  * Only append [NAVIGATE: <filename.html>] if the user EXPLICITLY asks to navigate, go to, or open a volume/manual (e.g. "take me to...", "open volume...", "go to...").
  * NEVER append [NAVIGATE: ...] when the user is asking an explanation, asking a question, or chatting (e.g. "Explain sliding window", "What is an OS?").
  * The ONLY valid files that exist in the site are:
    index.html, networking.html, databases.html, programming-languages.html, data-structures.html, operating-systems.html, cs-hardware-foundations.html, git-github.html, python-masterclass.html, python-runtime.html, low-latency-python.html, postgresql.html, java-masterclass.html, high-concurrency-java.html, enterprise-scss.html, javascript-mastery.html.
  * NEVER invent imaginary filenames like "sliding_window.html".`;

function getApiKey() {
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 10) {
    return process.env.GEMINI_API_KEY.trim();
  }
  // Optional local development fallback from gitignored chinatsu-config.json
  try {
    const configPath = path.join(process.cwd(), 'chinatsu-config.json');
    if (fs.existsSync(configPath)) {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      if (cfg && cfg.gemini_api_key && cfg.gemini_api_key.trim().length > 10) {
        return cfg.gemini_api_key.trim();
      }
    }
  } catch (e) {}
  return null;
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON body' });
      }
    }

    const userMessage = body?.message?.trim();
    if (!userMessage) {
      return res.status(400).json({ error: 'Missing "message" in request body' });
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables.'
      });
    }

    // Format and sanitize chat history (alternating user/model, starting with user)
    const rawTurns = [];
    if (Array.isArray(body.history)) {
      for (const turn of body.history.slice(-8)) {
        const text = turn?.parts?.[0]?.text;
        if (text && typeof text === 'string' && text.trim().length > 0) {
          rawTurns.push({
            role: turn.role === 'assistant' || turn.role === 'model' ? 'model' : 'user',
            parts: [{ text: text.trim() }]
          });
        }
      }
    }

    // Ensure userMessage is not duplicated if it's already the last element in rawTurns
    if (rawTurns.length === 0 || rawTurns[rawTurns.length - 1].parts[0].text !== userMessage) {
      rawTurns.push({ role: 'user', parts: [{ text: userMessage }] });
    }

    // Sanitize to guarantee valid alternating turns starting with 'user'
    const contents = [];
    for (const turn of rawTurns) {
      if (contents.length === 0) {
        if (turn.role === 'user') {
          contents.push(turn);
        }
      } else {
        const prevRole = contents[contents.length - 1].role;
        if (turn.role !== prevRole) {
          contents.push(turn);
        } else if (turn.role === 'user') {
          contents[contents.length - 1] = turn;
        }
      }
    }

    // Inject User Profile & Memories if present
    let dynamicSystemPrompt = SYSTEM_PROMPT;
    if (body.userProfile) {
      const uName = (body.userProfile.name || body.userProfile.given_name || '').trim();
      const uMemories = Array.isArray(body.userProfile.memories) ? body.userProfile.memories.slice(-6).join('; ') : '';
      if (uName) {
        dynamicSystemPrompt += `\n\nUSER IDENTITY & GREETING:\n- The user's name is ${uName}. In English, address them personally as "${uName}-kun" (pronounced as a fluent single name 'Yash', never spell it out letter-by-letter). In Hindi, address them as "यश" or "यश-कुन". In Gujarati, address them as "યશ" or "યશભાઈ" (NEVER use Japanese honorifics like "-કુન" in Gujarati)!`;
      }
      if (uMemories) {
        dynamicSystemPrompt += `\n- Shared memories & past conversation context: ${uMemories}. Naturally refer to these past details when relevant!`;
      }
    }

    // Inject Mandatory Language Override when user has selected Hindi or Gujarati
    const preferredLang = (body.preferredLang || '').trim().toLowerCase();
    if (preferredLang === 'hi') {
      dynamicSystemPrompt += `\n\nMANDATORY LANGUAGE OVERRIDE:\n- The user has selected Hindi as their preferred language. You MUST respond ENTIRELY in fluent, natural Hindi using Devanagari script (हिन्दी). Do NOT respond in English or Japanese. Keep your warm, sweet senpai personality but write everything in Hindi. Address the user as "यश" or "यश-कुन". Example: "नमस्ते यश! आज की प्रैक्टिस बहुत मज़ेदार थी! तुम कैसे हो? 🏀"`;
    } else if (preferredLang === 'gu') {
      dynamicSystemPrompt += `\n\nMANDATORY LANGUAGE OVERRIDE:\n- The user has selected Gujarati as their preferred language. You MUST respond ENTIRELY in 100% authentic, natural, everyday Gujarati script (ગુજરાતી). Do NOT use English or Japanese words or honorifics (STRICTLY NO "કુન", "યશ-કુન", "યાહો", "ગામ્બત્તે", "સુગોઈ", "સેનપાઈ"). Address Yash simply as "યશ" or "યશભાઈ". Keep your warm, sweet, encouraging mentor personality but write everything in pure, native Gujarati. Example: "નમસ્તે યશ! 🏀 આજની પ્રેક્ટિસ ખૂબ સરસ રહી! તમે કેમ છો? તમારો દિવસ કેવો રહ્યો?"`;
    }

    const requestPayload = {
      contents,
      systemInstruction: {
        parts: [{ text: dynamicSystemPrompt }]
      },
      generationConfig: {
        temperature: 0.75,
        maxOutputTokens: 180
      }
    };

    let replyText = null;
    let lastError = null;

    for (const model of GEMINI_MODELS) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const apiResponse = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestPayload)
        });

        if (!apiResponse.ok) {
          const errDetail = await apiResponse.text();
          console.warn(`[Vercel API] Model ${model} returned ${apiResponse.status}: ${errDetail}`);
          continue;
        }

        const data = await apiResponse.json();
        const parts = data.candidates?.[0]?.content?.parts || [];
        const textPart = parts.find(p => p.text && !p.thought) || parts.find(p => p.text);

        if (textPart && textPart.text && textPart.text.trim()) {
          replyText = textPart.text.trim();
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`[Vercel API] Error with ${model}:`, err.message);
      }
    }

    if (!replyText) {
      throw lastError || new Error('No candidate reply received from Gemini API');
    }

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error('[Vercel API Error]:', error);
    return res.status(500).json({
      error: 'Failed to process AI response',
      details: error.message
    });
  }
};
