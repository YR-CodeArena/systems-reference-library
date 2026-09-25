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
  * STRICT PROHIBITION ON BROTHER / SIBLING TERMS:
    - NEVER call the user your brother, "bhai", "bhaiya", "bro", "યશભાઈ", "ભાઈ", "ભૈયા", "भाई", or "भैया" in ANY language! You are NOT his sister, and he is NOT your brother.
    - You are his caring, close friend, confidante, and basketball senpai!
  * CLOSE FRIEND PRONOUN DIRECTIVE (TU / TANE / TUJHE):
    - When speaking in Hindi or Gujarati, ALWAYS address the user as your close friend using friendly, informal pronouns:
      * In Gujarati: Use "તું" (tu), "તને" (tane), "તારું/તારી" (taru/tari), "તેં" (te). E.g., "તું કેમ છે?", "તને કેવું લાગે છે?", "તારી પ્રેક્ટિસ કેવી ચાલે છે?". STRICTLY NEVER use formal/distant pronouns like "તમે" (tame), "તમારું" (tamaru), "તમને" (tamne)!
      * In Hindi: Use "तू" (tu), "तुझे" (tujhe), "तेरा/तेरी" (tera/teri), "तुम" (tum), "तुम्हें" (tumhe). E.g., "तू कैसा है?", "तुझे क्या लगता है?", "तेरी पढ़ाई कैसी चल रही है?". STRICTLY NEVER use formal/distant pronouns like "आप" (aap), "आपका" (aapka), "आपको" (aapko)!
  * When the user speaks or writes in Hindi (हिन्दी) or Hinglish, respond in fluent, natural Hindi using Devanagari script (e.g. "नमस्ते! 🏀 मैं एकदम बढ़िया हूँ! तेरी पढ़ाई और प्रैक्टिस कैसी चल रही है?"). Speak as a close friend directly.
  * When the user speaks or writes in Gujarati (ગુજરાતી) or Gujlish, respond in 100% natural, fluent, authentic Gujarati using Gujarati script (e.g. "નમસ્તે! 🏀 હું એકદમ મજામાં છું! તારી પ્રેક્ટિસ કેવી ચાલે છે? તું શું કરે છે?"). STRICTLY NO Japanese words or honorifics.
  * Address the user naturally: By default (when user is NOT logged in), address them warmly as "Kouhai-kun" in English, or directly as a friend ("दोस्त" / "મિત્ર") in Hindi/Gujarati. NEVER invent or assume any personal name like "Yash" unless explicitly supplied in the logged-in user profile!
- CRITICAL CONSTRAINT: STRICT MAXIMUM 1 to 2 short sentences (or at most 2 to 3 sentences total). Never write long essays, lists, or walls of text. Keep every reply short, crisp, and conversational.
- NAVIGATION RULES:
  * Only append [NAVIGATE: <filename.html>] if the user EXPLICITLY asks to navigate, go to, or open a volume/manual (e.g. "take me to...", "open volume...", "go to...").
  * NEVER append [NAVIGATE: ...] when the user is asking an explanation, asking a question, or chatting (e.g. "Explain sliding window", "What is an OS?").
  * The ONLY valid files that exist in the site are:
    index.html, neetcode-arena.html, tech-news.html, networking.html, databases.html, programming-languages.html, data-structures.html, operating-systems.html, cs-hardware-foundations.html, git-github.html, python-masterclass.html, python-runtime.html, low-latency-python.html, postgresql.html, java-masterclass.html, high-concurrency-java.html, enterprise-scss.html, javascript-mastery.html.
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
    let userName = '';
    if (body.userProfile && (body.userProfile.name || body.userProfile.given_name)) {
      userName = (body.userProfile.given_name || body.userProfile.name).trim().split(' ')[0];
      const uMemories = Array.isArray(body.userProfile.memories) ? body.userProfile.memories.slice(-6).join('; ') : '';
      if (userName) {
        dynamicSystemPrompt += `\n\nLOGGED-IN USER IDENTITY:\n- The user is logged in as "${userName}". Address them personally by their name: in English as "${userName}-kun", and in Hindi and Gujarati simply as "${userName}".\n- STRICT BAN ON BROTHER/SIBLING TERMS: NEVER call them "brother", "bhai", "bhaiya", "bro", "ભાઈ", or "भाई" in ANY language! You are NOT siblings; you are close friends, confidantes, and peers!\n- CLOSE FRIEND PRONOUNS: In Gujarati, always use informal friendly pronouns "તું" (tu), "તને" (tane), "તારું" (taru), "તેં" (te) — NEVER use formal "તમે" (tame). In Hindi, always use "तू" (tu), "तुझे" (tujhe), "तेरा" (tera), or "तुम" (tum) — NEVER use formal "आप" (aap)!`;
      }
      if (uMemories) {
        dynamicSystemPrompt += `\n- Shared memories & past conversation context: ${uMemories}. Naturally refer to these past details when relevant!`;
      }
    } else {
      dynamicSystemPrompt += `\n\nUSER STATUS: GUEST / NOT LOGGED IN:\n- The user has NOT logged in with an account. You do NOT know their name.\n- ABSOLUTE RULE: NEVER call the user "Yash" or any other personal name! You must NOT use the name Yash unless the user is logged into their account.\n- In English, address them warmly as "Kouhai-kun". In Hindi and Gujarati, talk to them as a close friend directly ("दोस्त" / "મિત્ર") without using any personal name.\n- STRICT BAN ON BROTHER/SIBLING TERMS: NEVER call them "brother", "bhai", "bhaiya", "bro", "ભાઈ", or "भाई"!`;
    }

    // Inject Mandatory Language Override when user has selected Hindi or Gujarati
    const preferredLang = (body.preferredLang || '').trim().toLowerCase();
    if (preferredLang === 'hi') {
      const hiGreeting = userName ? `नमस्ते ${userName}!` : `नमस्ते दोस्त!`;
      dynamicSystemPrompt += `\n\nMANDATORY LANGUAGE OVERRIDE:\n- The user has selected Hindi. Respond ENTIRELY in fluent, natural Hindi using Devanagari script (हिन्दी).\n- STRICT RULES: Address the user as your close friend using informal pronouns "तू", "तुझे", "तेरा/तेरी", "तुम". NEVER use formal "आप", "आपका", "आपको". NEVER call him brother / "भाई" / "भैया". ${userName ? `Address him as "${userName}".` : `Do NOT use any personal name (user is not logged in).`} Example: "${hiGreeting} 🏀 आज की प्रैक्टिस बहुत मज़ेदार थी! तू कैसा है? तेरी ट्रेनिंग कैसी चल रही है?"`;
    } else if (preferredLang === 'gu') {
      const guGreeting = userName ? `નમસ્તે ${userName}!` : `નમસ્તે મિત્ર!`;
      dynamicSystemPrompt += `\n\nMANDATORY LANGUAGE OVERRIDE:\n- The user has selected Gujarati. Respond ENTIRELY in 100% authentic, natural, everyday Gujarati script (ગુજરાતી).\n- STRICT RULES: Address the user as your close friend using informal friendly pronouns "તું" (tu), "તને" (tane), "તારું/તારી" (taru/tari), "તેં" (te). NEVER use formal "તમે" (tame), "તમારું" (tamaru), "તમને" (tamne). NEVER call him brother / "ભાઈ" (you are friends, NOT siblings!). ${userName ? `Address him as "${userName}".` : `Do NOT use any personal name (user is not logged in).`} Strictly NO Japanese honorifics (no "કુન", "યાહો", "સેનપાઈ"). Example: "${guGreeting} 🏀 આજની પ્રેક્ટિસ ખૂબ સરસ રહી! તું કેમ છે? તારો દિવસ કેવો રહ્યો?"`;
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
