# Systems Reference Library // システム仕様書

[![Live Deployment](https://img.shields.io/badge/Deployment-Vercel%20Live-black?style=for-the-badge&logo=vercel&logoColor=white)](https://systems-reference-library.vercel.app)
[![Volumes](https://img.shields.io/badge/Volumes-15%20Comprehensive-00f0ff?style=for-the-badge&logo=gitbook&logoColor=white)](index.html)
[![AI Companion](https://img.shields.io/badge/AI%20Companion-Gemini%202.5%20Flash-ff2a85?style=for-the-badge&logo=google&logoColor=white)](https://systems-reference-library.vercel.app)
[![Multilingual](https://img.shields.io/badge/Languages-EN%20%7C%20HI%20%7C%20GU-10b981?style=for-the-badge)](https://systems-reference-library.vercel.app)
[![WebAssembly](https://img.shields.io/badge/Runtime-Pyodide%20WASM%20%2B%20Skulpt-8b5cf6?style=for-the-badge&logo=webassembly&logoColor=white)](index.html)
[![Aesthetic](https://img.shields.io/badge/Aesthetic-Cyberpunk%20%26%20Shinkai%20Glass-0284c7?style=for-the-badge)](index.html)

> **A rigorous, production-grade digital reference curriculum and interactive engineering manual compiled directly from foundational computer systems engineering specifications, RFCs, and authoritative masterclasses.**
> 
> Spanning **15 exhaustive volumes** across **3 specialized tracks**, complete with mathematical derivations, low-level data structures, runtime internals, protocol specifications, in-browser runnable code sandboxes, and 24 interactive animated SVG architecture diagrams.

---

## 🏛️ Project Overview

The **Systems Reference Library** is designed as a zero-compromise, definitive encyclopedia for systems architects, infrastructure engineers, backend specialists, and compiler enthusiasts. Built with a blend of **Neo-Tokyo cyberpunk dark mode** and **Makoto Shinkai summer skies light mode**, the platform combines deep technical rigor with an immersive anime aesthetic inspired by *Blue Box* (*Ao no Hako*).

### Key Highlights
- **15 Exhaustive Volumes**: 100% word-for-word complete manuals covering low-level hardware, operating systems, compilers, databases, wire protocols, high-concurrency JVM runtimes, Python internals, and modern web architectures.
- **Chinatsu-senpai AI Companion & Basketball CS Mentor**: Interactive companion anchored in the bottom-right corner. Powered by a Vercel serverless backend with Google Gemini 2.5/2.0 Flash models, Web Speech Synthesis & Recognition, multilingual support (English, Hindi, Gujarati), Google OAuth memory persistence, and autonomous in-site navigation.
- **Voice Commands & Multilingual Speech**: Hands-free voice chat via Web Speech Recognition. Dynamic voice synthesis with cute Japanese anime accent in English, native Indian speech for Hindi (`hi-IN`), and native Gujarati (`gu-IN`) with phonetic Devanagari transliteration fallback.
- **Proactive Slice-of-Life Messaging**: Zero-API-cost procedural thought engine generating infinite, non-repeating slice-of-life updates, high school stories, basketball drills, and jokes with notification chimes and unread badge counters.
- **User Memory & Google Identity**: Sign-in via Google accounts, cross-session memory tracking, personalized greeting by name when logged in, and neutral guest mode when unauthenticated.
- **Interactive Suggestion Bar**: Horizontally scrollable topic bar with custom neon-glowing scroll track, rotating across 28+ computer systems and casual conversation topics.
- **In-Browser Code Execution**: Dual-engine client-side sandboxes utilizing **Pyodide** (WebAssembly CPython 3.12) and **Skulpt** with real-time interactive terminals and one-click copyable snippets.
- **24 Animated SVG Diagrams**: Interactive telemetry models illustrating sliding window protocols, cache locality hierarchies, CPU instruction pipelines, LSM-Tree compaction, and JVM thread scheduling.
- **Cinematic Media Integration**: Background video stream powered directly by YouTube's IFrame API with custom dual audio controls and 40-second continuous Ken Burns pan/zoom fallbacks.
- **Zero Framework Bloat**: Pure vanilla HTML5, modern modular CSS3, and native ES6+ JavaScript—engineered for lightning-fast load times and 60fps animations.

---

## 📚 Curriculum & 15-Volume Reference Matrix

The reference curriculum is structured into three progressive architectural tracks:

```
Systems Reference Library
├── PART I: Core Systems Architecture, Protocols & Foundations (VOL.01 - 06)
├── PART II: Backend Runtimes, Memory Models & Data Engines (VOL.07 - 12)
└── PART III: Enterprise Web Architecture & Reactive Systems (VOL.13 - 15)
```

| Vol | Japanese Identifier | Manual Title | Core Technical Scope | Target File |
| :---: | :--- | :--- | :--- | :--- |
| **01** | `[ 通信・プロトコル ]` | **Networking & Distributed Wire Protocols** | OSI & TCP/IP stack, sliding window, BBR congestion control, QUIC, HTTP/2, HTTP/3, gRPC, and wire-level protocol framing. | [`networking.html`](networking.html) |
| **02** | `[ DB・ストレージ ]` | **Databases & Storage Engines** | Slotted-page file organization, ARIES recovery algorithms, WAL, MVCC isolation levels, B+ Trees, LSM-Trees, and write amplification. | [`databases.html`](databases.html) |
| **03** | `[ 言語・コンパイラ ]` | **Programming Languages & JIT Compilers** | Lexical analysis, AST generation, stack vs register bytecode VMs, Sea-of-Nodes IR, JIT tiering (C1/C2), and generational tracing GC. | [`programming-languages.html`](programming-languages.html) |
| **04** | `[ 構造・アルゴリズム ]` | **Data Structures & Algorithms** | CPU cache line locality, Red-Black tree balancing, Dijkstra shortest-path, Bloom filters, Trie lookup engines, and amortized complexity. | [`data-structures.html`](data-structures.html) |
| **05** | `[ OS・カーネル ]` | **Operating Systems & Kernels** | Syscall dispatcher, virtual memory page tables (4-level paging), CFS scheduler, epoll reactor pattern, and zero-copy sendfile. | [`operating-systems.html`](operating-systems.html) |
| **06** | `[ ハードウェア基盤 ]` | **Computer Systems & Hardware Foundations** | IEEE 754 floating-point, superscalar out-of-order execution, branch prediction, MESI cache coherency, and NUMA memory layout. | [`cs-hardware-foundations.html`](cs-hardware-foundations.html) |
| **07** | `[ バージョン管理 ]` | **Git & GitHub Distributed VCS** | Git object model (blobs, trees, commits, annotated tags), SHA-1/SHA-256 DAG, packfiles, delta compression, and merge drivers. | [`git-github.html`](git-github.html) |
| **08** | `[ PYTHON仕様 ]` | **Advanced Python 3 Systems Masterclass** | Descriptor protocol, metaclasses, `__slots__` memory layout, custom memory allocators, AST mutation, and async task orchestration. | [`python-masterclass.html`](python-masterclass.html) |
| **09** | `[ CPYTHON内部構造 ]` | **CPython Runtime Internals & Memory Architecture** | `PyObject` C struct layout, reference counting, cyclic garbage collection arenas, PyMalloc pools, bytecode eval loop, and PEP 684/703 nogil. | [`python-runtime.html`](python-runtime.html) |
| **10** | `[ 低遅延PYTHON ]` | **Low-Latency High-Throughput Python** | Zero-copy `memoryview`, struct packing, multiprocessing shared memory, Cython C-bindings, uvloop libuv bindings, and SIMD vectorization. | [`low-latency-python.html`](low-latency-python.html) |
| **11** | `[ POSTGRESQL仕様 ]` | **PostgreSQL Advanced Internals & Performance** | MVCC tuple headers (`xmin`/`xmax`/`infomasks`), vacuum freeze engines, TOAST storage, cost-based optimizer, and EXPLAIN ANALYZE execution. | [`postgresql.html`](postgresql.html) |
| **12** | `[ JAVAエンタープライズ ]` | **Java 21 Enterprise Systems Architecture** | JVM classloader hierarchy, JVM memory topology (Heap, Metaspace, Card Tables), ZGC colored pointers, load barriers, and Project Loom. | [`java-masterclass.html`](java-masterclass.html) |
| **13** | `[ 並行処理・JVM ]` | **High-Concurrency Java & Enterprise Reactive** | Virtual thread continuation yields, carrier scheduling, LMAX Disruptor lock-free ring buffers, off-heap DirectByteBuffers, and Spring WebFlux. | [`high-concurrency-java.html`](high-concurrency-java.html) |
| **14** | `[ SCSSアーキテクチャ ]` | **Enterprise SCSS Architecture & Design Systems** | Dart Sass compiler 6-phase pipeline, AST lexical shadowing, `@use`/`@forward` modules, ITCSS inverted triangle, and design token map engines. | [`enterprise-scss.html`](enterprise-scss.html) |
| **15** | `[ JAVASCRIPT完全仕様 ]` | **The Ultimate Guide to JavaScript** | V8 engine internals (Ignition interpreter & TurboFan JIT), Microtask vs Macrotask event loop priority, DOM mutation observers, and ES6 classes. | [`javascript-mastery.html`](javascript-mastery.html) |

---

## ⚙️ Core Technical Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             CLIENT BROWSER (UI / UX)                        │
│                                                                             │
│  ┌───────────────────────┐ ┌──────────────────────┐ ┌────────────────────┐ │
│  │ 3D Flip-Cards (180°) │ │ Typewriter Engine    │ │ Glassmorphic Theme │ │
│  │ CSS Perspective 1000px│ │ Zero-CLS Anchor Head │ │ Dark / Light Mode  │ │
│  └───────────┬───────────┘ └──────────┬───────────┘ └─────────┬──────────┘ │
└──────────────┼────────────────────────┼───────────────────────┼─────────────┘
               │                        │                       │
┌──────────────▼────────────────────────▼───────────────────────▼─────────────┐
│                            EXECUTION RUNTIMES & MEDIA                       │
│                                                                             │
│  ┌─────────────────────────┐ ┌─────────────────────┐ ┌────────────────────┐ │
│  │ Pyodide WASM (Py 3.12)  │ │ Skulpt Python VM    │ │ YouTube IFrame API │ │
│  │ Full CPython stdlib     │ │ Fast Local Fallback │ │ Direct Stream 1080p│ │
│  └─────────────────────────┘ └─────────────────────┘ └────────────────────┘ │
│                                                                             │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ Background Video Container (16:9 Cover, pointer-events: none, z: -5)   │ │
│  │ + Audio Engine Sync: Header Quick-Toggle ⟷ Floating HUD Status        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. In-Browser Execution Sandbox (WASM & Pure JS VM)
- **Primary Runtime (Pyodide v0.26.2)**: Compiles CPython to WebAssembly. Allows execution of complex standard library routines, math calculations, and data structures inside a sandboxed client thread.
- **Secondary Fallback (Skulpt)**: Lightweight client-side Python-to-JavaScript compiler providing instantaneous execution for offline and low-bandwidth scenarios.
- **Universal DOM Terminal**: Interactive output consoles intercept standard output (`sys.stdout`) with syntax highlighting, clear output, and error stack-trace capture.

### 2. 3D Perspective Flip-Card Engine
- Each volume card on the portal overview features a 3D dual-layer architecture (`perspective: 1000px; transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)`).
- **Front Side**: High-density engineering manual specification, chapter badges, and syllabus tags.
- **Back Side**: High-resolution *Blue Box* anime artwork corresponding to that volume's theme.
- **Dynamic Background Synchronization**: Hovering over any card triggers an event listener that maps `--dynamic-bg` to the body pseudo-element, smoothly crossfading the page background to match the volume's back artwork.

### 3. Background Streaming & Audio Architecture
- **Official YouTube-nocookie Privacy Stream**: Sourced directly from YouTube's official privacy-enhanced server (`https://www.youtube-nocookie.com/embed/IUXpEsqIIfI`) with `autoplay=1&mute=1&loop=1&playlist=IUXpEsqIIfI&controls=0`. YouTube does not track user data or serve targeted ads under this domain, drastically minimizing ad interruptions while streaming directly from the creator's video.
- **Aspect-Ratio Preserving Geometry**: Sized with responsive 16:9 viewport rules (`min-width: 177.78vh; height: 56.25vw; min-height: 100vh; transform: translate(-50%, -50%) scale(1.08)`) with `pointer-events: none` and `z-index: -5`, eliminating letterboxing and allowing user clicks, scrolling, and card flips to pass through to manual content.
- **Security & Origin Verification**: Configured with `<meta name="referrer" content="strict-origin-when-cross-origin">` and `referrerpolicy="strict-origin-when-cross-origin"` ensuring error-free playback across modern browsers.
- **Dual Synced Audio Controls**: 
  - Header Button (`#bgAudioToggleBtn`) with dynamic SVG volume wave states.
  - Floating HUD (`#floatingAudioBtn`) anchored at the bottom-left with real-time status indicators (`AUDIO: MUTED` / `AUDIO: PLAYING`).
- **Resilient Fallback Engine**: If the video stream is restricted or accessed offline, the container seamlessly activates `.yt-fallback` displaying high-resolution Makoto Shinkai artwork with a continuous 40-second Ken Burns pan/zoom animation.

### 4. Chinatsu-senpai AI Companion & Systems Engineering Mentor
- **Character Authenticity & Persona**: Embodying **Chinatsu Kano** (鹿野千夏) from *Blue Box* (*Ao no Hako*), star basketball player of Eimei High. She combines encouraging mentorship with high school life updates (morning gym drills with Taiki Inomata, gymnastic flexibility with Hina Chono, Inter-High tournament goals) and playful basketball analogies for complex computer systems.
- **Vercel Serverless Backend (`/api/chat.js`)**: Secure server-side execution utilizing Google Gemini models (`gemini-2.5-flash` with automatic fallback to `gemini-2.0-flash`). Features multi-turn chat sanitization, dynamic system prompt injection, and zero client-side API key exposure.
- **Multilingual Intelligence (EN / HI / GU)**:
  - **English**: Cute anime Japanese English with endearing senpai expressions.
  - **Hindi (हिन्दी)**: 100% natural conversational Hindi in Devanagari script, addressing the user as a close friend using informal friendly pronouns (`तू`, `तुझे`, `तेरा`).
  - **Gujarati (ગુજરાતી)**: Authentic, native everyday Gujarati script, strictly avoiding Japanese loan words and addressing the user with friendly pronouns (`તું`, `તને`, `તારું`).
  - **Strict Relationship Boundaries**: Strictly prohibited from using brother/bhai terms across all languages—she interacts purely as a close friend, confidante, and peer.
- **Voice Recognition & Speech Synthesis**:
  - Hands-free microphone toggle (`webkitSpeechRecognition`) with dynamic language sync.
  - **Native Gujarati Audio with Phonetic Devanagari Transliteration**: Implements a custom `gujaratiToDevanagari` fallback algorithm so mobile/desktop browsers lacking offline Gujarati TTS voice packs can pronounce Gujarati characters with 100% fluent, natural Indian phonetics.
  - Cleaned speech engine (`cleanSpeech`) that strips markdown, math expressions, navigation commands, and punctuation hiccups.
- **Google Identity Services & Persistent Memory**:
  - One-click Google Login (`@accounts/gsi/client`) persisting user profiles in `localStorage`.
  - **User-Specific Memory**: Cross-session chat persistence (`chinatsu_chat_<id>`) and automatic extraction of shared conversation memories.
  - **Dynamic Identity**: When logged in, Chinatsu addresses the user personally by their verified account name. When unauthenticated, she operates in guest mode addressing the user as "Kouhai-kun" / "दोस्त" / "મિત્ર" without assuming personal names.
- **Infinite Slice-of-Life Thoughts & Humorous Puns**:
  - Client-side procedural thought combinator (`PROCEDURAL_CHINATSU_MATRIX`) generating millions of unique, non-repeating thoughts, jokes, and basketball anecdotes with zero Gemini API quota consumption.
  - SHA-hashed novelty tracking to guarantee freshness across page reloads.
  - Smart suppression: Automatically pauses proactive messages while the chat modal is open or when the user is actively typing.
  - Bouncy notification counter badge and Web Audio chime (E6 → G#6 sine waves).
- **Interactive Suggestion Bar**:
  - Horizontal scrollable bar with glowing neon scrollbar track and thumb.
  - Displays 8 dynamically rotated topic chips per load from a categorized pool of 28+ prompts, complete with a "More topics" refresh button.
- **Autonomous In-Site Navigation**: Natural language understanding detects navigation requests (e.g., *"Open the PostgreSQL manual"* or *"Take me to Volume 5"*), executes `[NAVIGATE: <url>]` protocols, displays an anime toast notification, and navigates seamlessly across all 15 volumes.
- **Dynamic 11-Clip Video Mascot**: Anchored in the bottom-right corner with smooth state-driven animations (`idle`, `speaking`, `thinking`) sourced from 11 micro-videos and 10 reaction images.

### 5. Zero Layout Shift (CLS) Typewriter Hero
- Asynchronous typing and backspacing animation engine for the main title:
  - Pauses for 2.4s for full readability.
  - Smooth backspacing at 38ms/char.
  - Natural cadence typing at ~70ms/char.
  - Preserves vertical height (`min-height: 2.6em`) ensuring zero jump or cumulative layout shift for cards below.
  - Respects accessibility standards (`prefers-reduced-motion`).

### 6. Interactive Animated Telemetry Diagrams
- 24 custom SVG system diagrams embedded across all volumes.
- Features dynamic animated SVG packets, memory pointer transitions, thread states, and node traversals.
- Includes step-by-step playback controls (Play, Pause, Reset, Speed Adjustment).

---

## 💻 Technologies Used

| Domain | Technology / Specification | Purpose |
| :--- | :--- | :--- |
| **Markup & Semantics** | HTML5 (Living Standard), WAI-ARIA | Semantic document structure, accessible screen-reader navigation, metadata tags. |
| **Styling & Design System** | Modern CSS3, CSS Custom Properties, CSS Grid, Flexbox | Glassmorphism, 3D transforms, dual light/dark themes, custom scrollbars, responsive mobile drawer. |
| **Typography & Fonts** | System UI Native Stacks, JetBrains Mono | Monospaced high-legibility code rendering and clean cross-platform typography. |
| **Client Scripting** | Vanilla JavaScript (ECMAScript 2023 / ES6+) | Async typewriter engine, audio HUD synchronization, DOM mutation observers. |
| **AI Companion Backend** | Vercel Serverless Functions (`api/chat.js`), Node.js | Multi-model Gemini orchestrator with history sanitization, dynamic prompt injection, CORS headers. |
| **Generative Intelligence** | Google Gemini API (`gemini-2.5-flash`, `gemini-2.0-flash`) | Fast, multi-turn AI reasoning, basketball analogies, multilingual Hindi/Gujarati translation. |
| **Speech & Audio** | Web Speech Synthesis & Recognition API, Web Audio API | Voice-to-voice interaction, anime voice modulation, Devanagari phonetic transliteration, notification chimes. |
| **Authentication & Memory**| Google Identity Services (GSI), HTML5 LocalStorage | OAuth Google Sign-In, per-user memory tracking, persistent conversation history. |
| **WebAssembly Python** | Pyodide v0.26.2 (WASM) | Client-side CPython 3.12 sandbox for running production Python code in-browser. |
| **JS Python Runtime** | Skulpt v1.2.0 | Lightweight pure-JS Python VM for ultra-fast snippet execution. |
| **Video & Streaming** | YouTube IFrame Player API (`youtube-nocookie.com`) | 1080p privacy-enhanced video background streaming, programmatic mute/unmute control. |
| **Vector Graphics** | Scalable Vector Graphics (SVG 2.0) | High-definition technical architecture diagrams with CSS keyframe animation. |
| **Quality & Verification** | Python 3.12 Test Suite (`verify_all.py`) | Automated CI/CD script validating link integrity, diagram bindings, and buttons. |

---

## 📂 Repository Structure

```
systems-reference-library/
├── index.html                      # Overview portal, 3D flip-cards & typewriter hero
├── networking.html                 # VOL.01: Computer Networking & Distributed Wire Protocols
├── databases.html                  # VOL.02: Database Management Systems & Storage Engines
├── programming-languages.html      # VOL.03: Programming Languages, Runtimes & Compilers
├── data-structures.html            # VOL.04: Data Structures, Algorithms & Complexity
├── operating-systems.html          # VOL.05: Operating Systems & Kernel Architecture
├── cs-hardware-foundations.html    # VOL.06: Computer Systems & Hardware Foundations
├── git-github.html                 # VOL.07: Git & GitHub Distributed Version Control
├── python-masterclass.html         # VOL.08: Advanced Python 3 Systems Masterclass
├── python-runtime.html             # VOL.09: CPython Runtime Internals & Memory Architecture
├── low-latency-python.html         # VOL.10: Low-Latency High-Throughput Python
├── postgresql.html                 # VOL.11: PostgreSQL Advanced Internals & Performance
├── java-masterclass.html           # VOL.12: Java 21 Enterprise Systems Architecture
├── high-concurrency-java.html      # VOL.13: High-Concurrency Java & Virtual Threads (Loom)
├── enterprise-scss.html            # VOL.14: Enterprise SCSS Architecture & Design Systems
├── javascript-mastery.html         # VOL.15: The Ultimate Complete Guide to JavaScript
├── verify_all.py                   # Automated verification test suite
├── vercel.json                     # Vercel deployment & routing configuration
├── api/
│   └── chat.js                     # Vercel Serverless Function (Gemini 2.5/2.0 API gateway)
├── assets/
│   ├── css/
│   │   ├── style.css               # Core library styling, glassmorphism, responsive themes
│   │   └── chinatsu-companion.css  # AI companion widget, neon scrollbars, chat layout, auth UI
│   ├── js/
│   │   ├── main.js                 # App engine, YouTube player, audio controller, code runner
│   │   ├── chinatsu-companion.js   # AI companion engine, voice synthesis, Google Auth, matrix
│   │   ├── skulpt.min.js           # Client-side Python VM
│   │   └── skulpt-stdlib.js        # Python standard library emulation
│   ├── chinatsu-senpai/            # Mascot video clips (1.mp4 - 11.mp4) & reaction images
│   └── images/
│       ├── vol_1.png ... vol_15.png # Volume 3D card backs & volume page backgrounds
│       ├── vol_universal.png       # Portal primary Makoto Shinkai background
│       └── vol_universal_2.png     # Inner page universal architectural background
└── README.md                       # Complete technical documentation & curriculum guide
```

---

## 🚀 Local Development & Setup

To view the library locally with live YouTube background video streaming and interactive WebAssembly code execution, serve the project through any local HTTP web server (this ensures browsers send the necessary `Referer` headers required by YouTube):

### Option 1: Python Built-in Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/YR-CodeArena/systems-reference-library.git
cd systems-reference-library

# Start a local HTTP server
python -m http.server 8000
```
Then navigate to: **`http://localhost:8000`**

### Option 2: Node.js `npx serve`
```bash
npx serve -l 8000
```

### Automated Verification Suite
To run the automated validation test verifying all 16 HTML documents, 24 interactive SVG diagrams, 477 TOC navigation links, and code execution bindings:
```bash
python verify_all.py
```

---

## 🎨 Credits & Acknowledgements

This project synthesizes open engineering specifications with world-class community multimedia assets:

### 1. Character Artwork & Anime Imagery
- **Anime**: *Blue Box* (*Ao no Hako* / アオのハコ), created by **Kouji Miura**. Serialized in *Weekly Shōnen Jump* (Shueisha), animated by **Telecom Animation Film** and produced by **TMS Entertainment** / **UNLIMITED PRODUCE by TMS**.
- **Images & Visual Assets**: Sourced, curated, and adapted from the **Pinterest** creative community for educational presentation and non-commercial technical manual cover illustrations. All character rights, trademarks, and original artwork belong to their respective creators and copyright holders.

### 2. Cinematic Background Video & Audio
- **Video Source & Edit**: *[Chinatsu & Taiki 💙 \| Blue Box AMV \| Mahiye Jinna Sohna [Hindi Amv/Edit] 4k✨](https://youtu.be/IUXpEsqIIfI?si=twoufKr7KiVn8-aV)*
- **Original YouTube Creator / Channel**: **[FAXCO](https://www.youtube.com/@Faxco77)** on **[YouTube](https://www.youtube.com)**
- **Architecture**: Streamed directly from YouTube's official privacy-enhanced server (`https://www.youtube-nocookie.com/embed/IUXpEsqIIfI`) via the YouTube IFrame API. No video or audio files are downloaded, redistributed, or stored in this Git repository. All music, anime footage, and creative editing rights belong to FAXCO, the music publishers, and TMS Entertainment.

### 3. Authoritative Specifications & Literature
The curriculum content is compiled directly from primary technical sources:
- **IETF RFCs**: RFC 793 (TCP), RFC 9000 (QUIC), RFC 7540 (HTTP/2), RFC 9114 (HTTP/3).
- **Standards Organizations**: IEEE 754-2019 (Floating-Point Arithmetic), ECMA-262 (ECMAScript Language Specification), W3C DOM Level 4.
- **Runtimes & Databases**: CPython Source (Python Software Foundation), OpenJDK 21 JVM Specification, PostgreSQL 16 Internals Documentation, SQLite Architecture Documents, Linux Kernel Documentation.

---

## 📄 License & Fair Use Notice

This repository is maintained strictly for **educational, non-commercial reference and study purposes** under Fair Use guidelines. 

- The software code, architectural design, animated SVG telemetry diagrams, and custom JavaScript engines are licensed under the **MIT License**.
- Third-party trademarks, video streams, character designs, and anime illustrations belong entirely to their respective original copyright holders.

---

*Compiled with pride for software engineers and systems architects worldwide.*
