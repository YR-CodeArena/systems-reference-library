import re
import os

def get_header(active_vol, active_track):
    core_active = ' active' if active_track == 'core' else ''
    backend_active = ' active' if active_track == 'backend' else ''
    web_active = ' active' if active_track == 'web' else ''

    def card(vol, href, title, kanji, sub):
        is_act = ' active' if vol == active_vol else ''
        return f"""              <a href="{href}" class="dropdown-card{is_act}" role="menuitem">
                <span class="card-vol-tag">{vol}</span>
                <div class="card-text">
                  <div class="card-title">{title} <span class="card-kanji">[{kanji}]</span></div>
                  <div class="card-sub">{sub}</div>
                </div>
              </a>"""

    return f"""  <header class="site-header">
    <a href="index.html" class="brand-wrapper" title="Systems Architecture Reference // システム仕様書">
      <div class="brand-icon">SR</div>
      <div class="brand-text-block">
        <div class="brand-title-row">
          <span class="brand-title">Systems Reference</span>
          <span class="brand-status-tag">● ONLINE // 稼働中</span>
        </div>
        <span class="brand-subtitle">システム アーキテクチャ 仕様書 &bull; 15 Volumes</span>
      </div>
    </a>

    <nav class="desktop-nav" aria-label="Main Navigation">
      <ul class="nav-menu">
        <li>
          <a href="index.html" class="nav-item-btn">
            <span>🏛️</span>
            <span>Overview</span>
          </a>
        </li>

        <li class="nav-dropdown" id="dropdownCore">
          <button type="button" class="nav-dropdown-btn{core_active}" aria-expanded="false" aria-haspopup="true">
            <span>🌐</span>
            <span>Core Architecture</span>
            <span class="dropdown-badge">VOL.01–06</span>
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="dropdown-pane" role="menu">
            <div class="dropdown-pane-header">
              <span class="dropdown-group-tag">PART I // 基礎システムアーキテクチャ</span>
            </div>
            <div class="dropdown-grid">
{card('VOL.01', 'networking.html', 'Networking &amp; Wire Protocols', '通信', 'OSI &bull; TCP/IP &bull; Sliding Window &bull; BBR &bull; QUIC &bull; gRPC')}
{card('VOL.02', 'databases.html', 'Databases &amp; Storage Engines', 'DB', 'Slotted Pages &bull; ARIES &bull; MVCC &bull; B+ Trees &bull; LSM-Trees')}
{card('VOL.03', 'programming-languages.html', 'Programming Languages &amp; JIT', '言語', 'Lexing &bull; AST &bull; Bytecode VM &bull; JIT Tiering &bull; GC')}
{card('VOL.04', 'data-structures.html', 'Data Structures &amp; Algorithms', '構造', 'Cache Locality &bull; Red-Black Trees &bull; Dijkstra &bull; Bloom Filters')}
{card('VOL.05', 'operating-systems.html', 'Operating Systems &amp; Kernels', 'OS', 'Syscalls &bull; Virtual Memory &bull; CFS &bull; Epoll &bull; Zero-Copy')}
{card('VOL.06', 'cs-hardware-foundations.html', 'CS Foundations &amp; Hardware', 'ハードウェア', 'Protection Rings &bull; Epoll Kernel &bull; 4-Level Paging &bull; MESI &bull; SPSC')}
            </div>
          </div>
        </li>

        <li class="nav-dropdown" id="dropdownBackend">
          <button type="button" class="nav-dropdown-btn{backend_active}" aria-expanded="false" aria-haspopup="true">
            <span>⚡</span>
            <span>Backend Runtimes</span>
            <span class="dropdown-badge">VOL.07–12</span>
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="dropdown-pane" role="menu">
            <div class="dropdown-pane-header">
              <span class="dropdown-group-tag">PART II // 言語エンジン &amp; 運用基盤</span>
            </div>
            <div class="dropdown-grid">
{card('VOL.07', 'git-github.html', 'Git &amp; GitHub Architecture', 'Git', 'SHA-1 DAG &bull; Packfiles &bull; Three-Way Merge &bull; Rebase Mechanics')}
{card('VOL.08', 'python-masterclass.html', 'Python 3 Masterclass', 'Python', 'OOP &bull; Metaclasses &bull; Asyncio &bull; MRO &bull; Pattern Matching')}
{card('VOL.09', 'python-runtime.html', 'CPython Execution Internals', 'CPython', 'PyObject &bull; GIL &bull; PyArena &bull; CEval Loop &bull; Garbage Collector')}
{card('VOL.10', 'low-latency-python.html', 'Low-Latency Python Systems', '高速化', 'Asyncio Event Loop &bull; Cython &bull; Zero-Copy &bull; Lock-Free Queues')}
{card('VOL.11', 'postgresql.html', 'PostgreSQL Architecture', 'PG', 'Shared Buffers &bull; WAL Pipeline &bull; HOT &bull; Cost-Based Optimizer')}
{card('VOL.12', 'java-masterclass.html', 'Java Masterclass &amp; Bytecode', 'Java', 'Classloader &bull; Bytecode &bull; JVM Stack &bull; JIT Tiering &bull; Concurrency')}
            </div>
          </div>
        </li>

        <li class="nav-dropdown" id="dropdownWeb">
          <button type="button" class="nav-dropdown-btn{web_active}" aria-expanded="false" aria-haspopup="true">
            <span>🎨</span>
            <span>Enterprise Web</span>
            <span class="dropdown-badge">VOL.13–15</span>
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="dropdown-pane" role="menu">
            <div class="dropdown-pane-header">
              <span class="dropdown-group-tag">PART III // エンタープライズ Web &amp; リアクティブ</span>
            </div>
            <div class="dropdown-grid">
{card('VOL.13', 'high-concurrency-java.html', 'High-Concurrency Java 21', '並行性', 'Loom Internals &bull; ZGC Colored Pointers &bull; Disruptor &bull; Reactive')}
{card('VOL.14', 'enterprise-scss.html', 'Enterprise SCSS Architecture', 'SCSS', 'Dart Sass &bull; @use/@forward &bull; ITCSS &bull; Tokens &bull; Compilation AST')}
{card('VOL.15', 'javascript-mastery.html', 'The Ultimate Guide to JS', 'JS', 'ES6+ &bull; Event Loop &bull; DOM &bull; MVC Architecture &bull; Async/Await')}
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <button class="theme-toggle-btn" aria-label="Toggle Dark / Light Theme" title="Toggle theme">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
      <button class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>
    </div>
  </header>"""

# Dictionary of diagrams for each file
DIAGRAMS = {
    'networking.html': """<div class="diagram-card" id="diagram-tcp-window">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 1.1 // WIRE PROTOCOLS</span>
      <h3 class="diagram-title">TCP 3-Way Handshake &amp; Sliding Window Wire Pipeline</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-tcp" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-tcp" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-tcp" class="diagram-svg" viewBox="0 0 940 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="netArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#06b6d4"/>
        </marker>
        <marker id="netArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
        </marker>
      </defs>
      <line x1="160" y1="40" x2="160" y2="280" stroke="#374151" stroke-width="2"/>
      <line x1="780" y1="40" x2="780" y2="280" stroke="#374151" stroke-width="2"/>
      <rect x="80" y="20" width="160" height="35" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="160" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#67e8f9">CLIENT (Initiator)</text>
      <rect x="700" y="20" width="160" height="35" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="780" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#6ee7b7">SERVER (Listener)</text>
      <!-- Step 1: SYN -->
      <path d="M 160 80 L 780 110" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line" marker-end="url(#netArrow)"/>
      <text x="470" y="90" text-anchor="middle" font-size="11" fill="#67e8f9" font-family="monospace">1. SYN (seq=1000, MSS=1460, WScale=7)</text>
      <circle cx="470" cy="95" r="4" fill="#06b6d4" class="anim-packet-node"/>
      <!-- Step 2: SYN-ACK -->
      <path d="M 780 130 L 160 160" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line" marker-end="url(#netArrowGreen)"/>
      <text x="470" y="140" text-anchor="middle" font-size="11" fill="#6ee7b7" font-family="monospace">2. SYN-ACK (seq=5000, ack=1001, win=65535)</text>
      <circle cx="470" cy="145" r="4" fill="#10b981" class="anim-packet-node"/>
      <!-- Step 3: ACK -->
      <path d="M 160 180 L 780 210" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line" marker-end="url(#netArrow)"/>
      <text x="470" y="190" text-anchor="middle" font-size="11" fill="#67e8f9" font-family="monospace">3. ACK (seq=1001, ack=5001) [ESTABLISHED]</text>
      <circle cx="470" cy="195" r="4" fill="#06b6d4" class="anim-packet-node"/>
      <!-- Sliding window pipeline -->
      <path d="M 160 230 L 780 260" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" class="anim-flow-line"/>
      <text x="470" y="240" text-anchor="middle" font-size="11" fill="#fde68a" font-family="monospace">4. Data Segment PSH-ACK [Sliding Window in Flight: 64KB CWND]</text>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 1.1 TCP Wire Mechanics:</strong> Complete state transition sequence for connection establishment and steady-state sliding window data transmission. Handshake negotiates MSS and window scale options before BBR/CUBIC congestion control drives maximum pipe capacity.
  </div>
</div>""",

    'databases.html': """<div class="diagram-card" id="diagram-slotted-pages">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 2.1 // STORAGE ENGINE</span>
      <h3 class="diagram-title">Relational Database Slotted Page &amp; Buffer Pool Architecture</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-db" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-db" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-db" class="diagram-svg" viewBox="0 0 940 320" xmlns="http://www.w3.org/2000/svg">
      <!-- Buffer Pool -->
      <g transform="translate(40, 40)">
        <rect width="320" height="240" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="160" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">BUFFER POOL (Shared Memory Array)</text>
        <rect x="20" y="45" width="280" height="35" rx="4" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
        <text x="160" y="67" text-anchor="middle" font-size="10" fill="#60a5fa">Frame 0: Page 104 [Pin: 2, Dirty: 0]</text>
        <rect x="20" y="90" width="280" height="35" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="160" y="112" text-anchor="middle" font-size="10" fill="#34d399">Frame 1: Page 402 [Pin: 1, Dirty: 1 (HOT)]</text>
        <rect x="20" y="135" width="280" height="35" rx="4" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
        <text x="160" y="157" text-anchor="middle" font-size="10" fill="#60a5fa">Frame 2: Page 892 [Clock Hand -> Evictable]</text>
        <rect x="20" y="180" width="280" height="35" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="160" y="202" text-anchor="middle" font-size="10" fill="#94a3b8">Frame 3: Empty Free Frame</text>
      </g>
      <!-- Slotted Page Internals -->
      <g transform="translate(480, 40)">
        <rect width="420" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="210" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#a7f3d0">8KB SLOTTED PAGE TOPOLOGY</text>
        <!-- Header -->
        <rect x="20" y="45" width="380" height="30" rx="4" fill="#065f46" stroke="#34d399" stroke-width="1"/>
        <text x="210" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="#ecfdf5">Page Header (LSN, Checksum, Free Start / End Pointers)</text>
        <!-- Slot array -->
        <rect x="20" y="85" width="180" height="40" rx="4" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1"/>
        <text x="110" y="102" text-anchor="middle" font-size="9" fill="#dbeafe">Slot Array [Offset, Len]</text>
        <text x="110" y="117" text-anchor="middle" font-size="8" fill="#93c5fd">Grows Downward &darr;</text>
        <!-- Free Space -->
        <rect x="20" y="135" width="380" height="35" rx="4" fill="#111827" stroke="#374151" stroke-dasharray="4,2"/>
        <text x="210" y="157" text-anchor="middle" font-size="10" fill="#6b7280">&harr; Contiguous Free Space &harr;</text>
        <!-- Tuples -->
        <rect x="220" y="180" width="180" height="45" rx="4" fill="#78350f" stroke="#fbbf24" stroke-width="1"/>
        <text x="310" y="200" text-anchor="middle" font-size="9" fill="#fef3c7">Tuple Heap Storage</text>
        <text x="310" y="215" text-anchor="middle" font-size="8" fill="#fde68a">Grows Upward &uarr;</text>
      </g>
      <!-- Connection line -->
      <path d="M 360 160 L 480 160" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line"/>
      <circle cx="420" cy="160" r="4" fill="#10b981" class="anim-packet-node"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 2.1 Storage Topology:</strong> In-memory Buffer Pool frames cache 8KB slotted database pages loaded from disk. Slotted page architecture decouples physical tuple offsets from external Record IDs (RID/TID), allowing in-page compaction and HOT updates without updating secondary B+ Tree indexes.
  </div>
</div>""",

    'programming-languages.html': """<div class="diagram-card" id="diagram-jit-tiering">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 3.1 // COMPILER ARCHITECTURE</span>
      <h3 class="diagram-title">Multi-Tier JIT Compilation Engine &amp; Deoptimization Pipeline</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-jit" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-jit" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-jit" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 80)">
        <rect width="180" height="120" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="90" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">INTERPRETER (Tier 0)</text>
        <text x="90" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">Bytecode Dispatch</text>
        <text x="90" y="75" text-anchor="middle" font-size="9" fill="#60a5fa">Profiling Invocation Counters</text>
        <text x="90" y="95" text-anchor="middle" font-size="9" fill="#60a5fa">Type Feedback Collection</text>
      </g>
      <g transform="translate(360, 80)">
        <rect width="200" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
        <text x="100" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#fde68a">BASELINE JIT (Tier 1)</text>
        <text x="100" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">Fast Compilation</text>
        <text x="100" y="75" text-anchor="middle" font-size="9" fill="#fbbf24">Direct Machine Code</text>
        <text x="100" y="95" text-anchor="middle" font-size="9" fill="#fbbf24">Inline Caches (IC)</text>
      </g>
      <g transform="translate(710, 80)">
        <rect width="200" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="100" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#a7f3d0">OPTIMIZING JIT (Tier 2)</text>
        <text x="100" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">SSA / TurboFan / C2</text>
        <text x="100" y="75" text-anchor="middle" font-size="9" fill="#34d399">Aggressive Inlining</text>
        <text x="100" y="95" text-anchor="middle" font-size="9" fill="#34d399">Escape Analysis &amp; Vectorization</text>
      </g>
      <path d="M 210 140 L 360 140" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line"/>
      <path d="M 560 140 L 710 140" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line"/>
      <!-- Deopt Bailout path -->
      <path d="M 780 80 C 780 20, 120 20, 120 80" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3" class="anim-flow-line"/>
      <text x="470" y="25" text-anchor="middle" font-size="10" fill="#fca5a5" font-weight="700">Deoptimization Bailout (Speculation Failed &rarr; Return to Interpreter)</text>
      <circle cx="285" cy="140" r="4" fill="#3b82f6" class="anim-packet-node"/>
      <circle cx="635" cy="140" r="4" fill="#f59e0b" class="anim-packet-node"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 3.1 JIT Tiering Flow:</strong> Modern virtual machines (V8, JVM HotSpot, CPython 3.13) utilize multi-tiered execution pipelines. Methods start in the low-overhead interpreter; hot methods compile via Tier 1 baseline JIT; and ultra-hot paths undergo speculative optimization. If speculative type assumptions fail, execution safely bails out back to the interpreter.
  </div>
</div>""",

    'data-structures.html': """<div class="diagram-card" id="diagram-rb-tree">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 4.1 // ALGORITHMIC TOPOLOGY</span>
      <h3 class="diagram-title">Red-Black Tree Balancing &amp; Cache-Line Locality</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-rb" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-rb" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-rb" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Tree Node Root (Black) -->
      <g transform="translate(470, 40)">
        <circle cx="0" cy="0" r="24" fill="#111827" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">20 [B]</text>
      </g>
      <!-- Left Child (Red) -->
      <g transform="translate(320, 120)">
        <circle cx="0" cy="0" r="24" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5"/>
        <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700" fill="#fecaca">10 [R]</text>
      </g>
      <!-- Right Child (Black) -->
      <g transform="translate(620, 120)">
        <circle cx="0" cy="0" r="24" fill="#111827" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">30 [B]</text>
      </g>
      <!-- Tree links -->
      <line x1="450" y1="55" x2="335" y2="105" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" class="anim-flow-line"/>
      <line x1="490" y1="55" x2="605" y2="105" stroke="#3b82f6" stroke-width="2"/>
      <!-- Cache Line Structure -->
      <g transform="translate(120, 200)">
        <rect width="700" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="350" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#6ee7b7">CPU L1 CACHE LINE (64 Bytes Continuous Spatial Allocation)</text>
        <rect x="20" y="35" width="150" height="25" rx="3" fill="#0f172a" stroke="#374151"/><text x="95" y="52" text-anchor="middle" font-size="9" fill="#9ca3af">Header (8B)</text>
        <rect x="180" y="35" width="150" height="25" rx="3" fill="#0f172a" stroke="#ef4444"/><text x="255" y="52" text-anchor="middle" font-size="9" fill="#fca5a5">Left / Right Pointers (16B)</text>
        <rect x="340" y="35" width="150" height="25" rx="3" fill="#0f172a" stroke="#3b82f6"/><text x="415" y="52" text-anchor="middle" font-size="9" fill="#93c5fd">Key &bull; Value Payload (16B)</text>
        <rect x="500" y="35" width="180" height="25" rx="3" fill="#0f172a" stroke="#10b981"/><text x="590" y="52" text-anchor="middle" font-size="9" fill="#6ee7b7">Cache Padding &bull; Alignment (24B)</text>
      </g>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 4.1 Memory &amp; Tree Topology:</strong> Red-Black self-balancing invariants guarantee O(log N) worst-case search and insertion. Cache-conscious design optimizes node struct layouts to fit within single 64-byte L1 CPU cache lines, eliminating multiple memory bus hops during tree traversal.
  </div>
</div>""",

    'operating-systems.html': """<div class="diagram-card" id="diagram-kernel-irq">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 5.1 // KERNEL ARCHITECTURE</span>
      <h3 class="diagram-title">Linux Kernel Interrupt &amp; Non-Blocking epoll Flow</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-irq" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-irq" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-irq" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 80)">
        <rect width="180" height="130" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.8"/>
        <text x="90" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#fbcfe8">HARDWARE (NIC)</text>
        <text x="90" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">Packet Arrival</text>
        <text x="90" y="75" text-anchor="middle" font-size="9" fill="#f472b6">DMA Transfer to Ring</text>
        <text x="90" y="95" text-anchor="middle" font-size="9" fill="#f472b6">Assert HardIRQ</text>
      </g>
      <g transform="translate(360, 80)">
        <rect width="220" height="130" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.8"/>
        <text x="110" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#ede9fe">KERNEL SPACE (Ring 0)</text>
        <text x="110" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">NAPI Polling Loop</text>
        <text x="110" y="75" text-anchor="middle" font-size="9" fill="#c4b5fd">sk_buff Packet Allocation</text>
        <text x="110" y="95" text-anchor="middle" font-size="9" fill="#c4b5fd">TCP Stack &bull; Wakeup Ready List</text>
      </g>
      <g transform="translate(730, 80)">
        <rect width="180" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="90" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#a7f3d0">USER SPACE (Ring 3)</text>
        <text x="90" y="55" text-anchor="middle" font-size="10" fill="#9ca3af">epoll_wait() Awakens</text>
        <text x="90" y="75" text-anchor="middle" font-size="9" fill="#6ee7b7">Zero-Copy Read</text>
        <text x="90" y="95" text-anchor="middle" font-size="9" fill="#6ee7b7">Event Loop Dispatch</text>
      </g>
      <path d="M 210 145 L 360 145" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line"/>
      <path d="M 580 145 L 730 145" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4" class="anim-flow-line"/>
      <circle cx="285" cy="145" r="4" fill="#ec4899" class="anim-packet-node"/>
      <circle cx="655" cy="145" r="4" fill="#10b981" class="anim-packet-node"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 5.1 Kernel Event Path:</strong> When network frames arrive at the NIC, DMA places them into host memory and triggers a HardIRQ. The Linux kernel disables interrupts on that core and uses NAPI SoftIRQ polling to process packets, queuing ready socket descriptors directly onto the epoll ready list for instantaneous user-space event consumption.
  </div>
</div>""",

    'git-github.html': """<div class="diagram-card" id="diagram-git-dag">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 7.1 // VCS ARCHITECTURE</span>
      <h3 class="diagram-title">Git Content-Addressable Object Directed Acyclic Graph (DAG)</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-git" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-git" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-git" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <!-- HEAD pointer -->
      <g transform="translate(40, 50)">
        <rect width="130" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="65" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#fde68a">HEAD &rarr; main</text>
      </g>
      <!-- Commit Object -->
      <g transform="translate(230, 40)">
        <rect width="180" height="85" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#93c5fd">COMMIT: a4f18c</text>
        <text x="90" y="44" text-anchor="middle" font-size="9" fill="#9ca3af">Tree: 7b92e1</text>
        <text x="90" y="60" text-anchor="middle" font-size="9" fill="#9ca3af">Parent: 3c809a</text>
      </g>
      <!-- Root Tree -->
      <g transform="translate(480, 40)">
        <rect width="180" height="95" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#6ee7b7">TREE (Root): 7b92e1</text>
        <text x="90" y="44" text-anchor="middle" font-size="9" fill="#9ca3af">100644 blob e84920 (README)</text>
        <text x="90" y="60" text-anchor="middle" font-size="9" fill="#9ca3af">040000 tree 9f1042 (src/)</text>
      </g>
      <!-- Blobs -->
      <g transform="translate(730, 25)">
        <rect width="170" height="50" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="85" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#fbcfe8">BLOB: e84920</text>
        <text x="85" y="40" text-anchor="middle" font-size="9" fill="#9ca3af">README.md (Zlib)</text>
      </g>
      <g transform="translate(730, 95)">
        <rect width="170" height="50" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="85" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#fbcfe8">BLOB: 4182cc</text>
        <text x="85" y="40" text-anchor="middle" font-size="9" fill="#9ca3af">main.py (Zlib)</text>
      </g>
      <!-- Connections -->
      <path d="M 170 70 L 230 70" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M 410 80 L 480 80" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,3" class="anim-flow-line"/>
      <path d="M 660 65 L 730 50" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,2"/>
      <path d="M 660 95 L 730 115" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,2"/>
      <circle cx="445" cy="80" r="4" fill="#3b82f6" class="anim-packet-node"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 7.1 Git Object Graph:</strong> Git operates as an immutable, content-addressable key-value object store. Every commit points to a cryptographic root tree, which hierarchically references sub-trees and blobs indexed by their 40-character SHA-1 hashes.
  </div>
</div>""",

    'python-masterclass.html': """<div class="diagram-card" id="diagram-python-mro">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 8.1 // OOP INTERNALS</span>
      <h3 class="diagram-title">Python Method Resolution Order (MRO) C3 Linearization</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-mro" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-mro" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-mro" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(470, 30)">
        <rect x="-80" y="0" width="160" height="40" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="0" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#a7f3d0">object (Root)</text>
      </g>
      <g transform="translate(320, 100)">
        <rect x="-70" y="0" width="140" height="40" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="0" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">Class B</text>
      </g>
      <g transform="translate(620, 100)">
        <rect x="-70" y="0" width="140" height="40" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="0" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">Class C</text>
      </g>
      <g transform="translate(470, 180)">
        <rect x="-90" y="0" width="180" height="45" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="0" y="27" text-anchor="middle" font-size="12" font-weight="700" fill="#fbcfe8">Class D(B, C)</text>
      </g>
      <!-- Inheritance arrows -->
      <line x1="420" y1="180" x2="340" y2="140" stroke="#ec4899" stroke-width="1.8" stroke-dasharray="4,2"/>
      <line x1="520" y1="180" x2="600" y2="140" stroke="#ec4899" stroke-width="1.8" stroke-dasharray="4,2"/>
      <line x1="330" y1="100" x2="440" y2="70" stroke="#3b82f6" stroke-width="1.8"/>
      <line x1="610" y1="100" x2="500" y2="70" stroke="#3b82f6" stroke-width="1.8"/>
      <!-- Linear order flow -->
      <text x="470" y="265" text-anchor="middle" font-size="12" font-family="monospace" fill="#fde68a">
        RESOLVED C3 MRO: [D &rarr; B &rarr; C &rarr; object]
      </text>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 8.1 C3 Linearization:</strong> Python uses the C3 Superclass Linearization algorithm to determine method resolution order across complex multiple inheritance diamonds, guaranteeing monotonicity and preserving local precedence order.
  </div>
</div>""",

    'python-runtime.html': """<div class="diagram-card" id="diagram-cpython-ceval">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 9.1 // RUNTIME ENGINE</span>
      <h3 class="diagram-title">CPython CEval Loop &amp; GIL Execution Mutex</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-ceval" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-ceval" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-ceval" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <!-- GIL Mutex Center -->
      <g transform="translate(470, 70)">
        <circle cx="0" cy="0" r="45" fill="#111827" stroke="#ef4444" stroke-width="2.5" class="anim-packet-node"/>
        <text x="0" y="-5" text-anchor="middle" font-size="11" font-weight="800" fill="#fca5a5">GIL MUTEX</text>
        <text x="0" y="12" text-anchor="middle" font-size="8" fill="#f87171" font-family="monospace">LOCKED</text>
      </g>
      <!-- Thread 1 (Holding GIL) -->
      <g transform="translate(120, 50)">
        <rect width="240" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="120" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#6ee7b7">THREAD 1 (RUNNING)</text>
        <text x="120" y="45" text-anchor="middle" font-size="9" fill="#9ca3af">_PyEval_EvalFrameDefault()</text>
        <rect x="20" y="60" width="200" height="30" rx="3" fill="#0f172a" stroke="#10b981"/>
        <text x="120" y="78" text-anchor="middle" font-size="9" font-family="monospace" fill="#34d399">LOAD_FAST 0 (x)</text>
        <rect x="20" y="100" width="200" height="30" rx="3" fill="#0f172a" stroke="#10b981"/>
        <text x="120" y="118" text-anchor="middle" font-size="9" font-family="monospace" fill="#34d399">BINARY_OP +</text>
      </g>
      <!-- Thread 2 (Waiting) -->
      <g transform="translate(580, 50)">
        <rect width="240" height="150" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.8"/>
        <text x="120" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#94a3b8">THREAD 2 (BLOCKED)</text>
        <text x="120" y="45" text-anchor="middle" font-size="9" fill="#9ca3af">Waiting on GIL Condvar</text>
        <rect x="20" y="60" width="200" height="70" rx="3" fill="#0f172a" stroke="#374151" stroke-dasharray="4,2"/>
        <text x="120" y="98" text-anchor="middle" font-size="10" fill="#6b7280">Suspended OS Thread</text>
      </g>
      <path d="M 360 120 L 425 85" fill="none" stroke="#10b981" stroke-width="2" class="anim-flow-line"/>
      <path d="M 515 85 L 580 120" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 9.1 CEval Interpreter Architecture:</strong> CPython's CEval frame loop evaluates bytecode opcodes sequentially. The Global Interpreter Lock (GIL) serializes thread execution, ensuring thread-safe reference counting at the expense of true multi-core CPU parallelism (unlocked in Python 3.13 free-threaded mode via PEP 703).
  </div>
</div>""",

    'postgresql.html': """<div class="diagram-card" id="diagram-pg-arch">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 11.1 // DATABASE ARCHITECTURE</span>
      <h3 class="diagram-title">PostgreSQL Shared Memory &amp; WAL Checkpointer Pipeline</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-pg" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-pg" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-pg" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 40)">
        <rect width="180" height="90" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="90" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#93c5fd">BACKEND WORKER</text>
        <text x="90" y="48" text-anchor="middle" font-size="9" fill="#9ca3af">Dedicated Process</text>
        <text x="90" y="66" text-anchor="middle" font-size="9" fill="#9ca3af">Per-Client Forked Process</text>
      </g>
      <g transform="translate(320, 20)">
        <rect width="300" height="250" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#67e8f9">SHARED MEMORY (IPC Area)</text>
        <rect x="20" y="45" width="260" height="80" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1"/>
        <text x="150" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="#cffafe">Shared Buffers (shared_buffers)</text>
        <text x="150" y="88" text-anchor="middle" font-size="9" fill="#9ca3af">Clock Sweep Buffer Management</text>
        <text x="150" y="104" text-anchor="middle" font-size="9" fill="#9ca3af">Dirty Page Marking</text>
        <rect x="20" y="145" width="260" height="80" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
        <text x="150" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="#fde68a">WAL Buffers (wal_buffers)</text>
        <text x="150" y="188" text-anchor="middle" font-size="9" fill="#9ca3af">Write-Ahead Redo Log Ring</text>
        <text x="150" y="204" text-anchor="middle" font-size="9" fill="#9ca3af">Pre-Commit Persistence Gate</text>
      </g>
      <g transform="translate(730, 140)">
        <rect width="180" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
        <text x="90" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#a7f3d0">DISK STORAGE (pg_wal)</text>
        <text x="90" y="46" text-anchor="middle" font-size="9" fill="#9ca3af">Sequential 16MB WAL Files</text>
        <text x="90" y="62" text-anchor="middle" font-size="9" fill="#9ca3af">Crash Recovery Foundation</text>
      </g>
      <path d="M 210 85 L 320 85" fill="none" stroke="#3b82f6" stroke-width="2" class="anim-flow-line"/>
      <path d="M 580 185 L 730 185" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3" class="anim-flow-line"/>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 11.1 PostgreSQL Memory Topology:</strong> Forked backend workers communicate through shared memory containing Shared Buffers and WAL Buffers. Changes write immediately to WAL for durability before Checkpointer lazily flushes dirty shared pages to tablespace files.
  </div>
</div>""",

    'java-masterclass.html': """<div class="diagram-card" id="diagram-jvm-classloader">
  <div class="diagram-header">
    <div class="diagram-title-group">
      <span class="diagram-badge">FIGURE 12.1 // JVM RUNTIME</span>
      <h3 class="diagram-title">JVM Classloader Hierarchy &amp; Delegation Architecture</h3>
    </div>
    <div class="diagram-controls">
      <button type="button" class="diagram-btn play-pause-btn" data-target="svg-classloader" aria-label="Pause animation">
        <span class="btn-icon">⏸</span>
        <span class="btn-text">Pause</span>
      </button>
      <button type="button" class="diagram-btn reset-btn" data-target="svg-classloader" aria-label="Reset animation">
        <span class="btn-icon">↺</span>
        <span class="btn-text">Reset</span>
      </button>
    </div>
  </div>
  <div class="diagram-viewport">
    <svg id="svg-classloader" class="diagram-svg" viewBox="0 0 940 300" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(470, 30)">
        <rect x="-140" y="0" width="280" height="45" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="0" y="27" text-anchor="middle" font-size="12" font-weight="700" fill="#fbcfe8">Bootstrap ClassLoader (C++ Native)</text>
      </g>
      <g transform="translate(470, 105)">
        <rect x="-140" y="0" width="280" height="45" rx="6" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.8"/>
        <text x="0" y="27" text-anchor="middle" font-size="12" font-weight="700" fill="#ede9fe">Platform ClassLoader (Java Modules)</text>
      </g>
      <g transform="translate(470, 180)">
        <rect x="-140" y="0" width="280" height="45" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="0" y="27" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">Application ClassLoader (App Classpath)</text>
      </g>
      <!-- Delegation arrows -->
      <line x1="470" y1="180" x2="470" y2="150" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2" class="anim-flow-line"/>
      <line x1="470" y1="105" x2="470" y2="75" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,2" class="anim-flow-line"/>
      <text x="590" y="165" font-size="10" fill="#60a5fa">1. Delegates Parent First &uarr;</text>
      <text x="590" y="90" font-size="10" fill="#c4b5fd">2. Delegates Root First &uarr;</text>
    </svg>
  </div>
  <div class="diagram-caption">
    <strong>Figure 12.1 Classloader Delegation:</strong> The Java Virtual Machine enforces strict parent-delegation: when a class is requested, loaders delegate upwards to the Bootstrap loader before attempting to load classes locally, guaranteeing core JDK class security.
  </div>
</div>"""
}

# Target file metadata: active volume & track
TARGET_FILES = {
    'networking.html': ('VOL.01', 'core'),
    'databases.html': ('VOL.02', 'core'),
    'programming-languages.html': ('VOL.03', 'core'),
    'data-structures.html': ('VOL.04', 'core'),
    'operating-systems.html': ('VOL.05', 'core'),
    'git-github.html': ('VOL.07', 'backend'),
    'python-masterclass.html': ('VOL.08', 'backend'),
    'python-runtime.html': ('VOL.09', 'backend'),
    'postgresql.html': ('VOL.11', 'backend'),
    'java-masterclass.html': ('VOL.12', 'backend'),
}

def update_file(filename):
    if not os.path.exists(filename):
        print(f"File not found: {filename}")
        return

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    vol, track = TARGET_FILES[filename]
    new_header = get_header(vol, track)

    # 1. Replace <header class="site-header">...</header>
    header_pattern = r'<header class="site-header">.*?</header>'
    if re.search(header_pattern, content, re.DOTALL):
        content = re.sub(header_pattern, new_header, content, flags=re.DOTALL)
        print(f"[{filename}] Header replaced successfully.")
    else:
        print(f"[{filename}] Warning: Header not matched.")

    # 2. Inject Diagram Card if not already present
    diagram_html = DIAGRAMS.get(filename)
    if diagram_html and 'diagram-card' not in content:
        # Inject diagram inside the first major section after the first </article> or </h2>
        first_section_match = re.search(r'(</article>\s*(?:<article|\Z))', content)
        if first_section_match:
            insert_pos = first_section_match.start(1) + len('</article>\n\n')
            content = content[:insert_pos] + diagram_html + '\n\n' + content[insert_pos:]
            print(f"[{filename}] Diagram injected after first article.")
        else:
            # Fallback: inject after first </h2>
            h2_match = re.search(r'</h2>', content)
            if h2_match:
                insert_pos = h2_match.end()
                content = content[:insert_pos] + '\n\n' + diagram_html + '\n\n' + content[insert_pos:]
                print(f"[{filename}] Diagram injected after h2.")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[{filename}] Updated successfully!")

def main():
    for fn in TARGET_FILES:
        update_file(fn)

if __name__ == '__main__':
    main()
