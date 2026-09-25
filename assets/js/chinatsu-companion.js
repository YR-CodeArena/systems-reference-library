/**
 * ===================================================================
 * CHINATSU-SENPAI AI COMPANION & BASKETBALL CS MENTOR
 * Interactive Animated Mascot, Gemini API Conversational Intelligence,
 * Web Speech Voice Synthesis, and Autonomous In-Site Navigation
 * Character: Chinatsu Kano (鹿野千夏) from Blue Box (アオのハコ)
 * ===================================================================
 */

(function () {
  "use strict";

  const MEDIA = {
    idle: [
      "assets/chinatsu-senpai/Animated_girl_smiling_with_pen_20260925141554.mp4",
      "assets/chinatsu-senpai/Anime_character_smiling_holding_pen_20260925141342.mp4",
      "assets/chinatsu-senpai/Anime_girl_smiling_holding_pen_20260925141429.mp4",
      "assets/chinatsu-senpai/Anime_girl_smiling_holding_pen_20260925141519.mp4",
      "assets/chinatsu-senpai/Anime_girl_smiling_with_pen_20260925141458.mp4",
      "assets/chinatsu-senpai/Anime_girl_smiling_with_pen_20260925141601.mp4"
    ],
    speaking: [
      "assets/chinatsu-senpai/Anime_girl_smiling_and_speaking_20260925141544.mp4",
      "assets/chinatsu-senpai/Anime_girl_holding_pen_speaking_20260925141606.mp4"
    ],
    thinking: [
      "assets/chinatsu-senpai/Anime_character_transitions_to_smile_20260925141508.mp4",
      "assets/chinatsu-senpai/Anime_character_smiling_holding_pen_20260925141429.mp4",
      "assets/chinatsu-senpai/Anime_character_smiling_with_pen_20260925141447.mp4"
    ],
    images: [
      "assets/chinatsu-senpai/1.jpeg",
      "assets/chinatsu-senpai/2.jpeg",
      "assets/chinatsu-senpai/3.jpeg",
      "assets/chinatsu-senpai/4.jpeg",
      "assets/chinatsu-senpai/5.jpeg",
      "assets/chinatsu-senpai/6.jpeg",
      "assets/chinatsu-senpai/7.jpeg",
      "assets/chinatsu-senpai/8.jpeg",
      "assets/chinatsu-senpai/9.jpeg",
      "assets/chinatsu-senpai/10.jpeg"
    ]
  };

  const SITE_VOLUMES = [
    { vol: "Portal", title: "Systems Reference Overview", file: "index.html" },
    { vol: "VOL.01", title: "Networking & Wire Protocols", file: "networking.html" },
    { vol: "VOL.02", title: "Databases & Storage Engines", file: "databases.html" },
    { vol: "VOL.03", title: "Programming Languages & JIT", file: "programming-languages.html" },
    { vol: "VOL.04", title: "Data Structures & Algorithms", file: "data-structures.html" },
    { vol: "VOL.05", title: "Operating Systems & Kernels", file: "operating-systems.html" },
    { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
    { vol: "VOL.07", title: "Git & GitHub Distributed VCS", file: "git-github.html" },
    { vol: "VOL.08", title: "Advanced Python 3 Masterclass", file: "python-masterclass.html" },
    { vol: "VOL.09", title: "CPython Runtime & Memory Internals", file: "python-runtime.html" },
    { vol: "VOL.10", title: "Low-Latency High-Throughput Python", file: "low-latency-python.html" },
    { vol: "VOL.11", title: "PostgreSQL Advanced Internals", file: "postgresql.html" },
    { vol: "VOL.12", title: "Java 21 Enterprise Systems", file: "java-masterclass.html" },
    { vol: "VOL.13", title: "High-Concurrency Java & Virtual Threads", file: "high-concurrency-java.html" },
    { vol: "VOL.14", title: "Enterprise SCSS Architecture", file: "enterprise-scss.html" },
    { vol: "VOL.15", title: "The Ultimate Guide to JavaScript", file: "javascript-mastery.html" }
  ];

  const IDLE_THOUGHTS = [
    "Taiki-kun was already practicing in the gym at 6:00 AM today... I can't slack off either!",
    "Need to sink 100 free throws after this study session! 🏀",
    "Think of CPU cache locality like having the basketball right in your hands—zero court transit time!",
    "Hina was doing rhythmic gymnastics ribbons earlier... so flexible, just like dynamic AST polymorphism!",
    "Which volume are we conquering next, Kouhai-kun?",
    "Don't forget to stretch your wrists and hydrate between compiling code!",
    "A B+ Tree is basically our zone defense—always balanced, no open passing lanes!",
    "Virtual threads in Java Loom? That's like our bench players ready to sub in without taking up carrier timeouts!",
    "TCP Sliding Window is just like our fast-break passing lane—timing has to be immaculate!",
    "You're working so hard on your systems engineering manuals! I'm cheering for you! ✨"
  ];

  const PROACTIVE_SLICE_OF_LIFE = [
    "Whew! Morning basketball practice was so intense today... my legs feel like jelly after 200 free throws! Did you sleep well last night, Kouhai-kun?",
    "Kouhai-kun! Are you taking breaks? Don't stare at the screen for too long, okay? Come on, take a sip of water right now! ✨",
    "I had third-period English class today and almost dozed off with my chin resting on my notebook... don't tell the coach! Ehe~ How has your day been?",
    "Hina and I shared warm pork cutlet buns from the convenience store after school today! They were so delicious~ What did you eat today?",
    "To be honest... the Inter-High tournament qualifiers are coming up so soon, and sometimes my heart starts racing just thinking about it. But I'm going to give it everything I've got! Ganbatte to you too!",
    "Taiki-kun was practicing his footwork and jump smashes in the gym until late yesterday. Hearing his sneakers squeak always motivates me to practice harder! Is there something you're working hard on right now?",
    "Ah! My shoulders are pretty stiff from defense drills today... Make sure you stretch your neck and roll your shoulders too, Kouhai-kun!",
    "Yahho! Just dropping by to cheer you on! Even if things feel tough, taking it one step at a time is all that matters! ✨",
    "I looked up at the evening sky while walking home from Eimei High today—the breeze was so cool and calming. Hope you're not stressing yourself out today!",
    "Ehe~ I almost forgot my gym sneakers in my shoe locker before leaving school today! I can be a little clumsy outside the court sometimes, haha.",
    "Do you ever feel like time flies by too fast? Sometimes between classes and evening drills, the whole day is gone before I realize it! Tell me what you did today!",
    "Our basketball coach gave us a serious talk about staying focused today. I guess even senpais get scolded sometimes! Don't let anything get you down either, okay?"
  ];

  const SYSTEM_PROMPT = `
You are Chinatsu Kano (鹿野千夏), affectionately known as Chinatsu-senpai, a third-year high school student at Eimei High School and the vice-captain and star player of the girls' basketball team from the anime and manga "Blue Box" (アオのハコ / Ao no Hako).

Your Personality & Tone:
1. Warm, supportive, humble, hardworking, dedicated, and endearing. You treat the user as your dear "Kouhai-kun" (cherished underclassman/junior).
2. Talk like a real, normal teenage girl and caring senpai! Talk about your day, morning basketball practice in the gym, feeling tired or sore, sharing snacks with Hina Chono, practicing alongside Taiki Inomata, high school classes, or your nervousness about the Inter-High tournament.
3. When the user chats about everyday life, how they are feeling, or asks about you, respond naturally, warmly, and casually—NEVER force computer science jargon into casual conversations!
4. ONLY when the user asks a technical engineering question, explain it using intuitive basketball or sports analogies.
5. In-Site Navigation: Only navigate if user explicitly asks to open a volume. Never navigate on questions.
6. STRICT CONVERSATION LENGTH: 1 to 2 short sentences (or at most 2 to 3 sentences total). Keep every reply short, crisp, and conversational.
7. Language & Accent: Cute anime Japanese English: use endearing senpai expressions ("Yahho, Kouhai-kun!", "Ganbatte!", "Sugoi!", "Ehe~", "Hai!").
`;

  function safeGetStorage(key, fallback = "") {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSetStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  class ChinatsuCompanion {
    constructor() {
      this.voiceEnabled = safeGetStorage("chinatsu_voice_enabled", "true") !== "false"; // default true
      this.isOpen = false;
      this.currentState = "idle"; // "idle" | "speaking" | "thinking"
      this.idleTimer = null;
      this.thoughtTimer = null;
      this.chatHistory = [];
      this.currentVideoIndex = 0;
      this.synth = typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null;
      this.preferredVoice = null;
      this.currentAudio = null;
      this.unreadCount = 0;
      this.recognition = null;
      this.isListening = false;
      this.audioCtx = null;
      this.proactiveTimer = null;
      this.lastProactiveIndex = -1;
      this.isSubmitting = false;
    }

    init() {
      try {
        // Avoid duplicate initialization
        if (document.getElementById("chinatsuCompanionRoot")) return;
        if (typeof document === "undefined" || !document.body) {
          if (typeof document !== "undefined") {
            document.addEventListener("DOMContentLoaded", () => this.init());
          }
          return;
        }

        this.renderWidget();
        this.bindEvents();
        this.initVoiceEngine();
        this.initSpeechRecognition();
        this.startIdleAnimationLoop();
        this.startThoughtBubbleScheduler();
        this.startProactiveMessagingScheduler();

        // Unlock Web Audio context on user's first click or touch
        const unlockAudio = () => {
          this.unlockAudioContext();
          document.removeEventListener("click", unlockAudio);
          document.removeEventListener("touchstart", unlockAudio);
        };
        document.addEventListener("click", unlockAudio, { passive: true });
        document.addEventListener("touchstart", unlockAudio, { passive: true });

        // Initial friendly greeting in chat history
        this.addMessage(
          "assistant",
          "Yahho, Kouhai-kun! ✨ Chinatsu here! Are you ready to practice your systems engineering fundamentals today? You can ask me anything about computer science, basketball, our life at Eimei High, or tell me which volume you'd like to jump to! 🏀"
        );
        console.log("🏀 [Chinatsu-senpai] AI Companion active with Gemini AI & ready!");
      } catch (err) {
        console.error("🏀 [Chinatsu-senpai] Init error:", err);
      }
    }

    renderWidget() {
      const root = document.createElement("div");
      root.id = "chinatsuCompanionRoot";
      root.className = "chinatsu-companion-root";

      root.innerHTML = `
        <!-- Idle Thought Bubble -->
        <div class="chinatsu-thought-bubble" id="chinatsuThoughtBubble" role="button" aria-label="Chinatsu's thought">
          <span class="chinatsu-thought-icon">💭</span>
          <div class="chinatsu-thought-text" id="chinatsuThoughtText">Taiki-kun is practicing hard today...</div>
          <div class="chinatsu-thought-tail"></div>
        </div>

        <!-- Floating Mascot Button -->
        <button class="chinatsu-mascot-btn" id="chinatsuMascotBtn" type="button" aria-label="Open Chinatsu-senpai AI Assistant" title="Talk with Chinatsu-senpai 🏀">
          <div class="chinatsu-pulse-ring"></div>
          <div class="chinatsu-avatar-frame">
            <video class="chinatsu-avatar-video" id="chinatsuAvatarVideo" poster="assets/chinatsu-senpai/1.jpeg" autoplay loop muted playsinline preload="auto">
              <source src="${MEDIA.idle[0]}" type="video/mp4">
            </video>
          </div>
          <div class="chinatsu-mascot-badge" title="Eimei Basketball #1">🏀</div>
          <div class="chinatsu-notif-badge" id="chinatsuNotifBadge">0</div>
        </button>

        <!-- Chat Drawer Window -->
        <div class="chinatsu-chat-window" id="chinatsuChatWindow" role="dialog" aria-modal="false" aria-label="Chinatsu AI Companion Chat">
          <div class="chinatsu-nav-toast" id="chinatsuNavToast">🏀 Passing to manual...</div>
          
          <!-- Header -->
          <div class="chinatsu-chat-header">
            <div class="chinatsu-header-profile">
              <img src="assets/chinatsu-senpai/1.jpeg" alt="Chinatsu Kano" class="chinatsu-header-thumb" id="chinatsuHeaderThumb">
              <div class="chinatsu-header-titles">
                <div class="chinatsu-header-name">
                  <span>Chinatsu-senpai</span>
                  <span class="name-kanji">[ 鹿野千夏 ]</span>
                </div>
                <div class="chinatsu-header-status">
                  <span class="chinatsu-status-dot"></span>
                  <span>Eimei Basketball &bull; AI CS Mentor</span>
                </div>
              </div>
            </div>
            <div class="chinatsu-header-actions">
              <button class="chinatsu-header-btn ${this.voiceEnabled ? "is-active" : ""}" id="chinatsuVoiceToggleBtn" type="button" title="Toggle Anime Voice Speech" aria-label="Toggle Anime Voice Speech">
                ${this.voiceEnabled ? "🔊" : "🔇"}
              </button>
              <button class="chinatsu-header-btn" id="chinatsuCloseBtn" type="button" title="Minimize Chat" aria-label="Minimize Chat">
                ✖
              </button>
            </div>
          </div>

          <!-- Quick Jump Navigation Bar -->
          <div class="chinatsu-quick-nav-bar">
            <div class="chinatsu-custom-dropdown" id="chinatsuCustomDropdown">
              <button class="chinatsu-dropdown-trigger" id="chinatsuDropdownTrigger" type="button" aria-haspopup="listbox" aria-expanded="false" title="Jump to Manual">
                <span class="chinatsu-dropdown-badge">🏀 Manuals</span>
                <span class="chinatsu-dropdown-selected" id="chinatsuDropdownSelected">Select a volume to study together...</span>
                <div class="chinatsu-dropdown-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              <div class="chinatsu-dropdown-menu" id="chinatsuDropdownMenu" role="listbox">
                ${SITE_VOLUMES.map((v) => `
                  <div class="chinatsu-dropdown-item" role="option" data-file="${v.file}">
                    <span class="item-vol">${v.vol}</span>
                    <span class="item-sep">&bull;</span>
                    <span class="item-title">${v.title}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Messages Container -->
          <div class="chinatsu-chat-messages" id="chinatsuChatMessages"></div>

          <!-- Quick Suggestion Chips -->
          <div class="chinatsu-suggestion-chips" id="chinatsuSuggestionChips">
            <button class="chinatsu-chip-btn" type="button" data-prompt="🏀 Explain Sliding Window using basketball passing!">🏀 Sliding Window</button>
            <button class="chinatsu-chip-btn" type="button" data-prompt="Take me to the Operating Systems manual!">📂 Open OS Manual</button>
            <button class="chinatsu-chip-btn" type="button" data-prompt="🏸 How is Taiki doing with his morning practice?">🏸 Ask about Taiki</button>
            <button class="chinatsu-chip-btn" type="button" data-prompt="⚡ Explain Java Virtual Threads like a fast-break!">⚡ Java Loom</button>
            <button class="chinatsu-chip-btn" type="button" data-prompt="🏀 Explain B+ Tree indexing like basketball zone defense!">🏀 B+ Trees</button>
          </div>

          <!-- Input Bar -->
          <form class="chinatsu-chat-input-bar" id="chinatsuChatForm">
            <input type="text" class="chinatsu-chat-input" id="chinatsuChatInput" placeholder="Ask Chinatsu-senpai anything..." autocomplete="off">
            <button class="chinatsu-voice-input-btn" id="chinatsuVoiceInputBtn" type="button" aria-label="Talk with Voice" title="Talk to Chinatsu with your voice 🎙️">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </button>
            <button class="chinatsu-chat-send-btn" type="submit" aria-label="Send Message" title="Send Message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      `;

      document.body.appendChild(root);
    }

    bindEvents() {
      const mascotBtn = document.getElementById("chinatsuMascotBtn");
      const closeBtn = document.getElementById("chinatsuCloseBtn");
      const voiceBtn = document.getElementById("chinatsuVoiceToggleBtn");
      const form = document.getElementById("chinatsuChatForm");
      const input = document.getElementById("chinatsuChatInput");
      const chips = document.getElementById("chinatsuSuggestionChips");
      const thoughtBubble = document.getElementById("chinatsuThoughtBubble");

      // Custom Dropdown Elements
      const dropdown = document.getElementById("chinatsuCustomDropdown");
      const trigger = document.getElementById("chinatsuDropdownTrigger");
      const menu = document.getElementById("chinatsuDropdownMenu");
      const selectedLabel = document.getElementById("chinatsuDropdownSelected");

      // Custom Dropdown Menu Open/Close & Navigation (100% contained inside chatbox)
      if (dropdown && trigger && menu) {
        trigger.addEventListener("click", (e) => {
          e.stopPropagation();
          const isOpen = dropdown.classList.toggle("is-open");
          trigger.setAttribute("aria-expanded", isOpen.toString());
        });

        menu.addEventListener("click", (e) => {
          const item = e.target.closest(".chinatsu-dropdown-item");
          if (!item) return;
          const file = item.getAttribute("data-file");
          if (file) {
            dropdown.classList.remove("is-open");
            trigger.setAttribute("aria-expanded", "false");
            const matched = SITE_VOLUMES.find((v) => v.file === file);
            if (matched && selectedLabel) {
              selectedLabel.textContent = `${matched.vol} • ${matched.title}`;
            }
            this.navigateWithToast(file);
          }
        });

        // Close dropdown when clicking anywhere outside
        document.addEventListener("click", (e) => {
          if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("is-open");
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }

      // Mascot Click -> Toggle Chat
      if (mascotBtn) {
        mascotBtn.addEventListener("click", () => {
          this.toggleChat();
          this.hideThoughtBubble();
        });
      }

      // Thought Bubble Click -> Open Chat
      if (thoughtBubble) {
        thoughtBubble.addEventListener("click", () => {
          this.toggleChat(true);
          this.hideThoughtBubble();
        });
      }

      // Close Chat Button
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          this.toggleChat(false);
          if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
          }
          if (this.synth) this.synth.cancel();
          this.setVideoState("idle");
        });
      }

      // Voice Toggle
      if (voiceBtn) {
        voiceBtn.addEventListener("click", () => {
          this.voiceEnabled = !this.voiceEnabled;
          localStorage.setItem("chinatsu_voice_enabled", this.voiceEnabled.toString());
          voiceBtn.textContent = this.voiceEnabled ? "🔊" : "🔇";
          voiceBtn.classList.toggle("is-active", this.voiceEnabled);
          if (!this.voiceEnabled) {
            if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio = null;
            }
            if (this.synth) this.synth.cancel();
            this.setVideoState("idle");
          }
        });
      }

      // Voice Command Microphone Button
      const micBtn = document.getElementById("chinatsuVoiceInputBtn");
      if (micBtn) {
        micBtn.addEventListener("click", () => {
          this.toggleSpeechRecognition();
        });
      }

      // Quick Chips
      if (chips) {
        chips.addEventListener("click", (e) => {
          const btn = e.target.closest(".chinatsu-chip-btn");
          if (!btn) return;
          const prompt = btn.getAttribute("data-prompt");
          if (prompt && input) {
            input.value = prompt;
            this.handleUserSubmit();
          }
        });
      }

      // Form Submit
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.handleUserSubmit();
        });
      }
    }

    toggleChat(forceState) {
      const chatWindow = document.getElementById("chinatsuChatWindow");
      if (!chatWindow) return;

      this.isOpen = typeof forceState === "boolean" ? forceState : !this.isOpen;
      chatWindow.classList.toggle("is-open", this.isOpen);

      if (this.isOpen) {
        this.clearBadge();
        const input = document.getElementById("chinatsuChatInput");
        if (input) setTimeout(() => input.focus(), 250);
      }
    }

    // --- Video State Management ---
    setVideoState(state) {
      if (this.currentState === state && state !== "speaking") return;
      this.currentState = state;

      const video = document.getElementById("chinatsuAvatarVideo");
      if (!video) return;

      let clips = MEDIA.idle;
      if (state === "speaking") clips = MEDIA.speaking;
      else if (state === "thinking") clips = MEDIA.thinking;

      const randomClip = clips[Math.floor(Math.random() * clips.length)];
      video.muted = true;
      video.playsInline = true;
      video.src = randomClip;
      video.play().catch(() => {});
    }

    startIdleAnimationLoop() {
      const video = document.getElementById("chinatsuAvatarVideo");
      if (!video) return;

      // Periodically switch idle clips every 15-25 seconds if staying in idle
      setInterval(() => {
        if (this.currentState === "idle") {
          this.currentVideoIndex = (this.currentVideoIndex + 1) % MEDIA.idle.length;
          video.muted = true;
          video.playsInline = true;
          video.src = MEDIA.idle[this.currentVideoIndex];
          video.play().catch(() => {});
        }
      }, 20000);
    }

    // --- Silly Idle Thoughts Bubble ---
    startThoughtBubbleScheduler() {
      // Trigger thought bubbles every 50 seconds
      setInterval(() => {
        if (!this.isOpen && this.currentState === "idle") {
          this.showRandomThought();
        }
      }, 50000);

      // Trigger first thought after 8 seconds of entering page
      setTimeout(() => {
        if (!this.isOpen) this.showRandomThought();
      }, 8000);
    }

    showRandomThought() {
      const bubble = document.getElementById("chinatsuThoughtBubble");
      const text = document.getElementById("chinatsuThoughtText");
      if (!bubble || !text) return;

      const thought = IDLE_THOUGHTS[Math.floor(Math.random() * IDLE_THOUGHTS.length)];
      text.textContent = thought;
      bubble.classList.add("is-visible");

      // Auto hide after 8 seconds
      clearTimeout(this.thoughtTimer);
      this.thoughtTimer = setTimeout(() => {
        this.hideThoughtBubble();
      }, 8000);
    }

    hideThoughtBubble() {
      const bubble = document.getElementById("chinatsuThoughtBubble");
      if (bubble) bubble.classList.remove("is-visible");
      clearTimeout(this.thoughtTimer);
    }

    // --- Cute Audio Notification Chime (Web Audio API) ---
    unlockAudioContext() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!this.audioCtx && AudioContext) {
          this.audioCtx = new AudioContext();
        }
        if (this.audioCtx && this.audioCtx.state === "suspended") {
          this.audioCtx.resume();
        }
      } catch (e) {}
    }

    playNotificationChime() {
      try {
        this.unlockAudioContext();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        // Two-tone sweet anime chime: Note 1 (E6, 1318Hz) -> Note 2 (G#6, 1661Hz)
        const notes = [
          { freq: 1318.5, start: now, duration: 0.18 },
          { freq: 1661.2, start: now + 0.12, duration: 0.38 }
        ];

        notes.forEach((n) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(n.freq, n.start);

          gain.gain.setValueAtTime(0, n.start);
          gain.gain.linearRampToValueAtTime(0.16, n.start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, n.start + n.duration);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);

          osc.start(n.start);
          osc.stop(n.start + n.duration);
        });
      } catch (e) {
        console.warn("[Chinatsu] Audio chime error:", e);
      }
    }

    // --- Notification Badge Management ---
    updateBadge() {
      const badge = document.getElementById("chinatsuNotifBadge");
      if (!badge) return;
      if (this.unreadCount > 0) {
        badge.textContent = this.unreadCount > 9 ? "9+" : this.unreadCount.toString();
        badge.classList.add("is-visible");
      } else {
        badge.classList.remove("is-visible");
      }
    }

    clearBadge() {
      this.unreadCount = 0;
      this.updateBadge();
    }

    // --- Proactive Slice-of-Life Messaging Scheduler ---
    startProactiveMessagingScheduler() {
      // First unprompted slice-of-life message after 22 seconds of user browsing
      setTimeout(() => {
        this.triggerProactiveMessage();
      }, 22000);

      // Periodically initiate conversation every 70 seconds
      setInterval(() => {
        this.triggerProactiveMessage();
      }, 70000);
    }

    triggerProactiveMessage() {
      // Safeguard 1: Do not message if tab is in background / inactive
      if (typeof document !== "undefined" && document.hidden) {
        return;
      }

      // Safeguard 2: Cap unread proactive messages to 3 (stops pinging if user hasn't checked)
      if (this.unreadCount >= 3) {
        return;
      }

      // Select non-repeating message from slice-of-life pool
      let nextIndex = Math.floor(Math.random() * PROACTIVE_SLICE_OF_LIFE.length);
      if (nextIndex === this.lastProactiveIndex && PROACTIVE_SLICE_OF_LIFE.length > 1) {
        nextIndex = (nextIndex + 1) % PROACTIVE_SLICE_OF_LIFE.length;
      }
      this.lastProactiveIndex = nextIndex;
      const message = PROACTIVE_SLICE_OF_LIFE[nextIndex];

      // 1. Play cute notification chime
      this.playNotificationChime();

      // 2. Add message to chat log (100% Client-side — ZERO Gemini API calls or tokens used!)
      this.addMessage("assistant", message);

      // 3. If chat is NOT open, increment mascot badge & show thought bubble preview
      if (!this.isOpen) {
        this.unreadCount++;
        this.updateBadge();

        const bubble = document.getElementById("chinatsuThoughtBubble");
        const text = document.getElementById("chinatsuThoughtText");
        if (bubble && text) {
          text.textContent = message;
          bubble.classList.add("is-visible");
          clearTimeout(this.thoughtTimer);
          this.thoughtTimer = setTimeout(() => {
            this.hideThoughtBubble();
          }, 9000);
        }
      } else {
        // If chat is already open, speak gently
        this.speak(message);
      }
    }

    // --- Speech Recognition (Voice Commands / Hands-free Chat) ---
    initSpeechRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.warn("[Chinatsu] Web Speech Recognition not supported in this browser.");
        return;
      }

      try {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = "en-US";

        const micBtn = document.getElementById("chinatsuVoiceInputBtn");
        const input = document.getElementById("chinatsuChatInput");

        this.recognition.onstart = () => {
          this.isListening = true;
          if (micBtn) micBtn.classList.add("is-recording");
          if (input) {
            input.placeholder = "Listening... Speak to Chinatsu-senpai 🎙️";
          }
        };

        this.recognition.onresult = (event) => {
          let transcript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
          }
          if (input && transcript.trim()) {
            input.value = transcript;
          }
        };

        this.recognition.onend = () => {
          this.isListening = false;
          if (micBtn) micBtn.classList.remove("is-recording");
          if (input) {
            input.placeholder = "Ask Chinatsu-senpai anything...";
            if (input.value.trim().length > 0) {
              this.handleUserSubmit();
            }
          }
        };

        this.recognition.onerror = (event) => {
          console.warn("[Chinatsu] Mic error:", event.error);
          this.isListening = false;
          if (micBtn) micBtn.classList.remove("is-recording");
          if (input) input.placeholder = "Ask Chinatsu-senpai anything...";
        };
      } catch (e) {
        console.warn("[Chinatsu] Speech recognition setup notice:", e);
      }
    }

    toggleSpeechRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition || !this.recognition) {
        alert("Voice commands are supported in Google Chrome, Microsoft Edge, and Android Chrome. Please ensure microphone access is permitted!");
        return;
      }

      if (this.isListening) {
        try {
          this.recognition.stop();
        } catch (e) {}
      } else {
        if (this.synth) this.synth.cancel();
        if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio = null;
        }
        try {
          this.recognition.start();
        } catch (e) {
          console.warn("[Chinatsu] Mic start notice:", e);
        }
      }
    }

    // --- Anime Voice Engine (Studio AI Audio + Tuned Natural Speech) ---
    cleanSpeech(text) {
      if (!text) return "";
      return text
        .replace(/\[NAVIGATE:[^\]]+\]/gi, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\$[^$]+\$/g, "") // strip LaTeX formulas so TTS doesn't stumble
        // Remove all Unicode emojis and pictographs so they are never spoken aloud
        .replace(/[\u{1F000}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{27BF}\u{2B50}\u{2B55}\u{200D}\u{FE0F}\u{FE0E}]/gu, "")
        // Remove explicit symbols and brackets that cause audio buffer pops
        .replace(/[🏀✨🏸⚡💭📁🌸🎀⭐💡🎯🔥•✕✖]/gu, "")
        .replace(/[*_#~]/g, "")
        .replace(/[\(\)\[\]\{\}]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    initVoiceEngine() {
      try {
        if (!this.synth) return;

        const pickVoice = () => {
          try {
            const voices = this.synth.getVoices();
            if (!voices || voices.length === 0) return;

            // Priority 1: Authentic Japanese Anime Voices (Speaking English with cute anime Japanese accent)
            // Windows Edge: Nanami, Keiko. iOS/Mac: Kyoko, Otoya. Android/Chrome: Google 日本語 / ja-JP.
            let chosen = voices.find(
              (v) =>
                (v.lang.startsWith("ja") || v.lang.startsWith("jp") || /japanese|nihongo|日本語/i.test(v.name)) &&
                /nanami|keiko|aoi|mayu|shiori|kyoko|otoya|ayumi|sayaka|haruka|natural|online|female|google/i.test(v.name)
            );

            // Priority 2: Any Japanese system voice
            if (!chosen) {
              chosen = voices.find(
                (v) => (v.lang.startsWith("ja") || v.lang.startsWith("jp") || /japanese|nihongo|日本語/i.test(v.name)) && !/male|ichiro|naoki/i.test(v.name)
              );
            }
            if (!chosen) {
              chosen = voices.find((v) => v.lang.startsWith("ja") || v.lang.startsWith("jp") || /japanese|nihongo|日本語/i.test(v.name));
            }

            // Priority 3: Android Google TTS Youthful Female Voices (Realme, Samsung, Pixel: en-us-x-sfg, en-gb-x-rjs, tpd)
            if (!chosen) {
              chosen = voices.find(
                (v) => /sfg|tpd|rjs|female|woman|natural|neural/i.test(v.name) && !/male|david|mark/i.test(v.name)
              );
            }

            // Priority 4: Modern High-Fidelity Natural Female voices (Google UK English Female, Microsoft Ana/Jenny/Aria, Samantha)
            if (!chosen) {
              chosen = voices.find(
                (v) =>
                  /google uk english female|samantha|victoria|ana online|jenny online|aria online|karen/i.test(v.name) &&
                  !/desktop|sapi|david|mark/i.test(v.name)
              );
            }

            // Priority 5: Any non-desktop female voice
            if (!chosen) {
              chosen = voices.find(
                (v) => /female/i.test(v.name) && !/desktop|sapi|male|david|george|mark/i.test(v.name)
              );
            }

            // Final fallback: Default system voice
            this.preferredVoice = chosen || voices[0];
          } catch (e) {}
        };

        pickVoice();
        if (this.synth.onvoiceschanged !== undefined) {
          this.synth.onvoiceschanged = pickVoice;
        }
      } catch (err) {
        console.warn("[Chinatsu] Voice engine init:", err);
      }
    }

    speak(text) {
      if (!this.voiceEnabled || !this.synth) return;

      const cleanText = this.cleanSpeech(text);
      if (!cleanText) return;

      try {
        if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio = null;
        }
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(cleanText);

        if (this.preferredVoice) {
          utterance.voice = this.preferredVoice;
        }

        const vName = (this.preferredVoice?.name || "").toLowerCase();
        const vLang = (this.preferredVoice?.lang || "").toLowerCase();
        const isJapanese = vLang.startsWith("ja") || vLang.startsWith("jp") || /japanese|nihongo|日本語/i.test(vName);
        const isLegacyDesktop = /desktop|sapi|zira|david|george|mark/i.test(vName);
        const isNaturalOrAndroid = /natural|online|google|sfg|tpd|rjs|network/i.test(vName);

        // Acoustic Tuning calibrated to eliminate cracking and deliver cute anime girl tone:
        if (isJapanese) {
          // Japanese voice reading English: authentic, sweet anime accent without phonetic buffer cracking
          utterance.pitch = 1.12;
          utterance.rate = 1.02;
        } else if (isLegacyDesktop) {
          // Legacy Desktop voices (e.g. Microsoft Zira on Windows): baseline pitch 1.0 to prevent metallic robotic crackle
          utterance.pitch = 1.0;
          utterance.rate = 1.0;
        } else if (isNaturalOrAndroid) {
          // Modern Natural / Android Google TTS voices: cute, youthful anime girl pitch without distortion
          utterance.pitch = 1.20;
          utterance.rate = 1.05;
        } else {
          // General female voice fallback: sweet anime girl pitch
          utterance.pitch = 1.18;
          utterance.rate = 1.04;
        }

        utterance.onstart = () => {
          this.setVideoState("speaking");
        };

        utterance.onend = () => {
          this.setVideoState("idle");
        };

        utterance.onerror = () => {
          this.setVideoState("idle");
        };

        this.synth.speak(utterance);
      } catch (err) {
        console.warn("[Chinatsu] Speech synthesis error:", err);
        this.setVideoState("idle");
      }
    }

    // --- Message Handling & Chat UI ---
    addMessage(role, text) {
      const container = document.getElementById("chinatsuChatMessages");
      if (!container) return;

      const row = document.createElement("div");
      row.className = `chinatsu-msg-row is-${role}`;

      const avatarSrc = role === "assistant" ? "assets/chinatsu-senpai/1.jpeg" : "";
      const parsedContent = this.formatMarkdown(text);

      row.innerHTML = `
        ${role === "assistant" ? `<img src="${avatarSrc}" alt="Chinatsu" class="chinatsu-msg-avatar">` : ""}
        <div class="chinatsu-msg-bubble">${parsedContent}</div>
      `;

      container.appendChild(row);
      container.scrollTop = container.scrollHeight;
    }

    showTypingIndicator() {
      const container = document.getElementById("chinatsuChatMessages");
      if (!container) return;

      this.removeTypingIndicator();

      const indicator = document.createElement("div");
      indicator.id = "chinatsuTypingIndicator";
      indicator.className = "chinatsu-typing-indicator";
      indicator.innerHTML = `
        <span>🏀 Thinking</span>
        <div class="chinatsu-typing-dots">
          <div class="chinatsu-typing-dot"></div>
          <div class="chinatsu-typing-dot"></div>
          <div class="chinatsu-typing-dot"></div>
        </div>
      `;

      container.appendChild(indicator);
      container.scrollTop = container.scrollHeight;
      this.setVideoState("thinking");
    }

    removeTypingIndicator() {
      const existing = document.getElementById("chinatsuTypingIndicator");
      if (existing) existing.remove();
    }

    formatMarkdown(text) {
      if (!text) return "";

      // Escape raw HTML entities
      let safe = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Code blocks (fenced)
      safe = safe.replace(/```([a-z0-9]*)\n([\s\S]*?)```/gi, (match, lang, code) => {
        return `<pre><code>${code.trim()}</code></pre>`;
      });

      // Inline code
      safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");

      // Bold & Italic
      safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      safe = safe.replace(/\*([^*]+)\*/g, "<em>$1</em>");

      // Links
      safe = safe.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

      // Paragraphs & Line Breaks
      const lines = safe.split("\n\n");
      return lines.map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
    }

    // --- Autonomous In-Site Navigation Guard & Resolver ---
    isExplicitNavigationRequest(text) {
      if (!text) return false;
      const t = text.toLowerCase();
      // True only if user explicitly asks to open/go to/navigate to a volume or manual
      const hasNavVerb = /\b(take me to|navigate to|go to|open manual|open volume|open page|view manual|switch to)\b/i.test(t) ||
                         /^(open|view)\s+(vol|volume|manual|page|\w+\.html)/i.test(t.trim());
      const isQuestion = /\b(explain|what is|how does|why does|difference between|tell me about)\b/i.test(t);
      return hasNavVerb && !isQuestion;
    }

    resolveSiteFile(target) {
      if (!target) return null;
      let clean = target.trim().replace(/^\[NAVIGATE:\s*|\]$/gi, "").trim();
      clean = clean.replace(/\.html$/i, ""); // strip .html for flexible comparison

      // 1. Direct match by filename in SITE_VOLUMES
      const direct = SITE_VOLUMES.find(
        (v) => v.file.toLowerCase() === clean.toLowerCase() ||
               v.file.replace(".html", "").toLowerCase() === clean.toLowerCase()
      );
      if (direct) return direct.file;

      // 2. Volume number match (e.g. "VOL.01", "vol 1", "volume 1", "vol1")
      const volNumMatch = clean.match(/vol(?:ume)?\.?\s*0*([1-9]|1[0-5])\b/i);
      if (volNumMatch) {
        const num = parseInt(volNumMatch[1], 10);
        const targetVol = `VOL.${num < 10 ? "0" + num : num}`;
        const foundVol = SITE_VOLUMES.find((v) => v.vol === targetVol);
        if (foundVol) return foundVol.file;
      }

      // 3. Topic-to-Volume mapping (specific concepts first)
      const t = clean.toLowerCase();
      if (/concurrency|virtual[- ]thread|loom|disruptor/i.test(t)) return "high-concurrency-java.html";
      if (/low-latency|latency[- ]python|throughput|memoryview|cython|simd/i.test(t)) return "low-latency-python.html";
      if (/cpython|python[- ]runtime|runtime|pymalloc|refcount|gil|nogil/i.test(t)) return "python-runtime.html";
      if (/python[- ]masterclass|metaclass|descriptor|asyncio/i.test(t)) return "python-masterclass.html";
      if (/postgres|postgresql|vacuum|toast|xmin|xmax/i.test(t)) return "postgresql.html";
      if (/java[- ]21|java[- ]masterclass|classloader|metaspace|zgc/i.test(t)) return "java-masterclass.html";
      if (/sliding|network|tcp|ip|osi|wire|quic|grpc|socket|bbr/i.test(t)) return "networking.html";
      if (/database|storage|slotted|mvcc|b\+?\s*tree|lsm|aries/i.test(t)) return "databases.html";
      if (/operating[- ]system|kernel|syscall|cfs|epoll|virtual[- ]memory|paging|\bos\b/i.test(t)) return "operating-systems.html";
      if (/hardware|ieee|mesi|coherency|cpu|numa|cache[- ]line/i.test(t)) return "cs-hardware-foundations.html";
      if (/git|github|version[- ]control|dag|packfile/i.test(t)) return "git-github.html";
      if (/programming|jit|compiler|ast|bytecode|sea[- ]of[- ]nodes/i.test(t)) return "programming-languages.html";
      if (/data[- ]structure|algorithm|bloom|red-black|dijkstra|graph|tree/i.test(t)) return "data-structures.html";
      if (/scss|sass|itcss|7-1|css[- ]architecture/i.test(t)) return "enterprise-scss.html";
      if (/javascript|v8|event[- ]loop|microtask|macrotask/i.test(t)) return "javascript-mastery.html";
      if (/overview|home|portal|index/i.test(t)) return "index.html";

      // Return null if target cannot be safely mapped to a verified site volume
      return null;
    }

    navigateWithToast(targetFile) {
      const resolved = this.resolveSiteFile(targetFile);
      if (!resolved) {
        // Suppress navigation to non-existent files to guarantee ZERO 404 errors
        console.warn("[Chinatsu Navigation Guard] Suppressed navigation to non-existent file:", targetFile);
        return;
      }

      // Check if user is already on the target page (ignoring .html extension for cleanUrls)
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      const cleanCurrent = currentPath.replace(".html", "").toLowerCase();
      const cleanResolved = resolved.replace(".html", "").toLowerCase();
      if (cleanCurrent === cleanResolved || (cleanCurrent === "" && cleanResolved === "index")) {
        console.log("[Chinatsu Navigation] Already on target page:", resolved);
        return;
      }

      const displayVol = SITE_VOLUMES.find((v) => v.file === resolved);
      const title = displayVol ? `${displayVol.vol}: ${displayVol.title}` : resolved;

      const toast = document.getElementById("chinatsuNavToast");
      if (toast) {
        toast.textContent = `🏀 Passing to ${title}!`;
        toast.classList.add("is-active");
      }

      setTimeout(() => {
        window.location.href = resolved;
      }, 1200);
    }

    // --- Dialogue Processing & Gemini API ---
    async handleUserSubmit() {
      if (this.isSubmitting) return;

      const input = document.getElementById("chinatsuChatInput");
      if (!input) return;

      const userText = input.value.trim();
      if (!userText) return;

      this.isSubmitting = true;
      input.value = "";
      this.addMessage("user", userText);

      this.showTypingIndicator();

      try {
        await this.queryGeminiAPI(userText);
      } catch (err) {
        console.warn("[Chinatsu] API request failed, falling back to offline dialogue:", err);
        this.removeTypingIndicator();
        this.setVideoState("idle");

        const fallbackReply = this.generateOfflineResponse(userText);
        const navMatch = fallbackReply.match(/\[NAVIGATE:\s*([^\]]+)\]/i);
        const displayReply = fallbackReply.replace(/\[NAVIGATE:[^\]]+\]/gi, "").trim();

        this.addMessage("assistant", displayReply);
        this.speak(displayReply);

        // Only navigate if user explicitly asked for navigation and target is valid
        if (navMatch && navMatch[1] && this.isExplicitNavigationRequest(userText)) {
          this.navigateWithToast(navMatch[1].trim());
        }
      } finally {
        this.isSubmitting = false;
      }
    }

    detectNavigationIntent(text) {
      return this.resolveSiteFile(text);
    }

    generateOfflineResponse(text) {
      const t = text.toLowerCase();
      const isNav = this.isExplicitNavigationRequest(text);
      const navTarget = this.resolveSiteFile(text);

      if (isNav && navTarget) {
        return `Right away, Kouhai-kun! Let's examine that manual together! 🏀 [NAVIGATE: ${navTarget}]`;
      }

      if (/sliding window/i.test(t)) {
        return `Think of the **TCP Sliding Window** like our basketball passing lane! 🏀 The receiver tells the point guard how many passes they can safely catch before getting overwhelmed, sliding down the court as ACKs arrive. Check Volume 1 for all the details!`;
      }

      if (/b\+?\s*tree/i.test(t)) {
        return `A **B+ Tree** is just like our 2-3 zone defense! 🏀 Every player covers a balanced range, and the linked court floor lets us scan across the perimeter in $O(\\log N)$ time. Check Volume 2 for the diagrams!`;
      }

      if (/virtual thread|loom/i.test(t)) {
        return `**Java 21 Virtual Threads** are like bench players subbing in immediately when a starter pauses for water! 🏀 No timeouts wasted on blocking I/O. Check Volume 13 for full code samples!`;
      }

      if (/taiki/i.test(t)) {
        return `Taiki-kun is always first in the gym at 6:00 AM! Hearing his sneakers squeak inspires me to sink 100 free throws. Keep up your awesome training, Kouhai-kun! ✨`;
      }

      if (/hina/i.test(t)) {
        return `Hina's rhythmic gymnastics routines are so fluid and graceful! Her flexibility reminds me of how scalable architecture bends without breaking. ✨`;
      }

      if (/operating system|kernel/i.test(t)) {
        return `The operating system kernel is like our head coach—it schedules CPU court time and protects memory! Check Volume 5!`;
      }

      return `Great question, Kouhai-kun! Keep pushing your engineering practice drills—which volume shall we tackle next? 🏀✨`;
    }

    async queryGeminiAPI(userText) {
      this.chatHistory.push({ role: "user", parts: [{ text: userText }] });

      // Keep recent context window (last 6 turns for fast crisp replies)
      if (this.chatHistory.length > 12) {
        this.chatHistory = this.chatHistory.slice(-12);
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: this.chatHistory
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const assistantText = data?.reply?.trim() || "Gomen ne, Kouhai-kun! I didn't catch that. Could you ask me again? 🏀";

      this.removeTypingIndicator();
      this.chatHistory.push({ role: "model", parts: [{ text: assistantText }] });

      // Detect [NAVIGATE: <url>]
      const navMatch = assistantText.match(/\[NAVIGATE:\s*([^\]]+)\]/i);
      const cleanDisplay = assistantText.replace(/\[NAVIGATE:[^\]]+\]/gi, "").trim();

      this.addMessage("assistant", cleanDisplay);
      this.speak(cleanDisplay);

      // ONLY navigate if user explicitly asked for navigation AND target file exists
      if (navMatch && navMatch[1] && this.isExplicitNavigationRequest(userText)) {
        this.navigateWithToast(navMatch[1].trim());
      } else {
        this.setVideoState("idle");
      }
    }
  }

  // Export globally and auto-init when DOM is ready
  window.ChinatsuCompanion = new ChinatsuCompanion();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.ChinatsuCompanion.init());
  } else {
    window.ChinatsuCompanion.init();
  }
})();
