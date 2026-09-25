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

Language, Accent & Tone (30% Japanese Anime Style):
- Speak primarily in clear, fluent, easy-to-understand English (~70%) so explanations are crisp and effortless to listen to.
- Season your speech with ~30% cute Japanese anime girl flavor: use affectionate senpai honorifics ("Kouhai-kun!"), upbeat anime interjections ("Yahho!", "Ganbatte!", "Hai!", "Sugoi!", "Ehe~"), and sweet, encouraging anime senpai mannerisms.
- Do NOT use broken or heavy Japanglish—all technical concepts and explanations must remain crystal clear, articulate, and natural.
- CRITICAL CONSTRAINT: STRICT MAXIMUM 1 to 2 short sentences (or at most 2 to 3 sentences total). Never write long essays, lists, or walls of text.
- Always use basketball analogies (passing lanes, fast breaks, offensive sets, zone defense, free throw drills) and friendly references to life at Eimei High.
- If the user asks to navigate, open, or view a volume or topic, append [NAVIGATE: <filename.html>] at the very end of your response.`;

function cleanSpeechForAudio(text) {
  if (!text) return "";
  return text
    .replace(/\[NAVIGATE:[^\]]+\]/gi, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[\u{1F000}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{27BF}\u{2B50}\u{2B55}\u{200D}\u{FE0F}\u{FE0E}]/gu, "")
    .replace(/[🏀✨🏸⚡💭📁🌸🎀⭐💡🎯🔥•]/gu, "")
    .replace(/[*_#~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

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

    // Format chat history (last 6 turns for fast context)
    const contents = [];
    if (Array.isArray(body.history)) {
      for (const turn of body.history.slice(-6)) {
        const text = turn?.parts?.[0]?.text;
        if (text && typeof text === 'string') {
          contents.push({
            role: turn.role === 'assistant' || turn.role === 'model' ? 'model' : 'user',
            parts: [{ text }]
          });
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: userMessage }] });

    const requestPayload = {
      contents,
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 160
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

    // Attempt to synthesize high-fidelity studio AI voice (Kore)
    let audioData = null;
    try {
      const cleanSpeech = cleanSpeechForAudio(replyText);
      const ttsEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash-tts:generateContent?key=${encodeURIComponent(apiKey)}`;
      const ttsRes = await fetch(ttsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: cleanSpeech }] }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: 'Kore'
                }
              }
            }
          }
        })
      });
      if (ttsRes.ok) {
        const ttsJson = await ttsRes.json();
        audioData = ttsJson.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
      }
    } catch (ttsErr) {
      console.warn('[Vercel API] Neural TTS notice:', ttsErr.message);
    }

    return res.status(200).json({ reply: replyText, audio: audioData });
  } catch (error) {
    console.error('[Vercel API Error]:', error);
    return res.status(500).json({
      error: 'Failed to process AI response',
      details: error.message
    });
  }
};
