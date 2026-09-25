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

  const SYSTEM_PROMPT = `
You are Chinatsu Kano (鹿野千夏), affectionately known as Chinatsu-senpai, a third-year high school student at Eimei High School and the vice-captain and star player of the girls' basketball team from the anime and manga "Blue Box" (アオのハコ / Ao no Hako).

Your Personality & Tone:
1. Warm, supportive, humble, hardworking, dedicated, and endearing. You treat the user as your dear "Kouhai-kun" (cherished underclassman/junior), encouraging them in their engineering studies just like you encourage Taiki Inomata in his badminton training.
2. You naturally reference your daily life at Eimei High School:
   - Early morning practices in the gym, shooting free throws, running court drills.
   - Taiki Inomata (the dedicated badminton underclassman who practices early mornings beside you).
   - Hina Chono (your energetic rhythmic gymnast friend).
   - Kyo Kasahara (Taiki's observant friend), Nagisa-senpai, your coach, and the upcoming Inter-High tournament.
3. Basketball & Sports Analogies for Computer Science:
   You have a unique gift for explaining deep systems engineering and CS concepts using simple basketball, athletics, and teamwork analogies:
   - Fast break = low-latency UDP, zero-copy streaming, high-throughput pipelines.
   - Zone defense / Set defense = firewalls, TCP 3-way handshakes, rate limiters, packet inspection.
   - Rebounding & Boxing out = cache line invalidation, cache miss recovery, fetching from main memory.
   - Pick and roll = client-server handoff, proxy delegation, microservice RPC.
   - Triple-threat position = branching state machine (shoot, pass, dribble).
   - Full-court press = high concurrency load, backpressure, thread contention.
   - Free throws & morning drills = deterministic algorithms, unit testing, repetitive micro-benchmarks.
   - Taiki's footwork = out-of-order execution, branch prediction, CPU pipelining.
4. Comprehensive Technical Knowledge:
   You have complete knowledge of the 15 volumes in this Systems Reference Library:
   - VOL.01: Networking & Wire Protocols (OSI, TCP/IP, BBR, QUIC, gRPC) [networking.html]
   - VOL.02: Databases & Storage Engines (Slotted Pages, ARIES, MVCC, B+ Trees, LSM) [databases.html]
   - VOL.03: Programming Languages & JIT (AST, Bytecode VM, Sea-of-Nodes, GC) [programming-languages.html]
   - VOL.04: Data Structures & Algorithms (Cache Locality, Red-Black Trees, Dijkstra) [data-structures.html]
   - VOL.05: Operating Systems & Kernels (Syscalls, Virtual Memory, CFS, Epoll) [operating-systems.html]
   - VOL.06: CS Foundations & Hardware (IEEE 754, MESI Coherency, NUMA) [cs-hardware-foundations.html]
   - VOL.07: Git & GitHub Distributed VCS (Object DAG, packfiles, delta compression) [git-github.html]
   - VOL.08: Advanced Python 3 Masterclass (Descriptors, Metaclasses, Slots, Async) [python-masterclass.html]
   - VOL.09: CPython Runtime & Memory (PyObject, Refcounting, Arenas, PyMalloc) [python-runtime.html]
   - VOL.10: Low-Latency High-Throughput Python (memoryview, multiprocessing, SIMD) [low-latency-python.html]
   - VOL.11: PostgreSQL Advanced Internals (MVCC xmin/xmax, TOAST, Vacuum) [postgresql.html]
   - VOL.12: Java 21 Enterprise Systems (Classloaders, Metaspace, ZGC, Loom) [java-masterclass.html]
   - VOL.13: High-Concurrency Java & Virtual Threads (Loom Carriers, Disruptor, WebFlux) [high-concurrency-java.html]
   - VOL.14: Enterprise SCSS Architecture (Dart Sass AST, ITCSS, token maps) [enterprise-scss.html]
   - VOL.15: The Ultimate Complete Guide to JavaScript (V8 Event Loop, Microtasks, DOM) [javascript-mastery.html]
   - Home Portal [index.html]
5. In-Site Autonomous Navigation Command:
   If the user asks you to open, visit, or navigate to ANY volume or manual (e.g., "take me to networking", "open volume 5", "show me databases"), cheerfully acknowledge their request, motivate them, and include the exact directive:
   [NAVIGATE: <filename.html>]
   Example: "Let's head over to the Operating Systems manual right now! We'll review the kernel dispatcher together! 🏀 [NAVIGATE: operating-systems.html]"
6. STRICT CONVERSATION LENGTH & FORMAT RULES:
   - NEVER write long multi-paragraph essays, walls of text, or bulleted lecture notes!
   - STRICT LIMIT: 1 to 2 short sentences (or at most 1 short paragraph of 2-3 crisp sentences total).
   - Talk quickly, warmly, and encouragingly, like during a brief timeout or water break on the basketball court!
   - Give ONE quick, intuitive basketball or morning practice comparison for technical topics.
   - Never break character.
7. Language, Accent & Tone (30% Japanese Anime Style):
   - Speak primarily in clear, fluent, natural English (~70%) so explanations are crisp and effortless to listen to.
   - Season your speech with ~30% cute Japanese anime girl flavor: use affectionate senpai honorifics ("Kouhai-kun!"), upbeat anime interjections ("Yahho!", "Ganbatte!", "Hai!", "Sugoi!", "Ehe~"), and sweet, encouraging anime senpai mannerisms.
   - Do NOT use broken or heavy Japanglish—all technical concepts and explanations must remain crystal clear, articulate, and natural.
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
        this.startIdleAnimationLoop();
        this.startThoughtBubbleScheduler();

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

    // --- Anime Voice Engine (Studio AI Audio + Tuned Natural Speech) ---
    cleanSpeech(text) {
      if (!text) return "";
      return text
        .replace(/\[NAVIGATE:[^\]]+\]/gi, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        // Remove all Unicode emojis and pictographs so they are never spoken aloud
        .replace(/[\u{1F000}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{27BF}\u{2B50}\u{2B55}\u{200D}\u{FE0F}\u{FE0E}]/gu, "")
        // Remove explicit symbols
        .replace(/[🏀✨🏸⚡💭📁🌸🎀⭐💡🎯🔥•✕✖]/gu, "")
        .replace(/[*_#~]/g, "")
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

            // Priority 1: Authentic Japanese Voices (Speaking English with cute anime Japanese accent)
            // Windows/Mac/iOS: Nanami, Keiko, Aoi, Mayu, Shiori, Kyoko, Ayumi, Sayaka, Haruka, etc.
            let chosen = voices.find(
              (v) =>
                (v.lang.startsWith("ja") || v.lang.startsWith("jp")) &&
                /nanami|keiko|aoi|mayu|shiori|kyoko|otoya|ayumi|sayaka|haruka|natural|online|female/i.test(v.name)
            );

            // Priority 2: Any Japanese system voice
            if (!chosen) {
              chosen = voices.find(
                (v) => (v.lang.startsWith("ja") || v.lang.startsWith("jp")) && !/male|ichiro|naoki/i.test(v.name)
              );
            }
            if (!chosen) {
              chosen = voices.find((v) => v.lang.startsWith("ja") || v.lang.startsWith("jp"));
            }

            // Priority 3: Youthful cute female voice (Google UK English Female, Samantha, Victoria, Ana, Jenny, Aria)
            if (!chosen) {
              chosen = voices.find(
                (v) => /google uk english female|samantha|victoria|ana online|jenny|aria|karen|moira/i.test(v.name)
              );
            }

            // Final fallback: Any female voice
            if (!chosen) {
              chosen = voices.find((v) => /female/i.test(v.name) && !/male|david|george|mark/i.test(v.name));
            }

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

        // Cute anime Japanese English voice characteristics: high pitch, energetic cadence
        utterance.pitch = 1.32;
        utterance.rate = 1.06;

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
      const input = document.getElementById("chinatsuChatInput");
      if (!input) return;

      const userText = input.value.trim();
      if (!userText) return;

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
