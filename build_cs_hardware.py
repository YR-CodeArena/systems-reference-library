import html

def build_cs_hardware_html():
    content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#080c14" media="(prefers-color-scheme: dark)">
  <title>Computer Science Foundations &amp; Hardware-Level Realities | Systems Reference Manual</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div id="reading-progress"></div>

  <!-- Header -->
  <header class="site-header">
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
          <button type="button" class="nav-dropdown-btn active" aria-expanded="false" aria-haspopup="true">
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
              <a href="networking.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.01</span>
                <div class="card-text">
                  <div class="card-title">Networking &amp; Wire Protocols <span class="card-kanji">[通信]</span></div>
                  <div class="card-sub">OSI &bull; TCP/IP &bull; Sliding Window &bull; BBR &bull; QUIC &bull; gRPC</div>
                </div>
              </a>
              <a href="databases.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.02</span>
                <div class="card-text">
                  <div class="card-title">Databases &amp; Storage Engines <span class="card-kanji">[DB]</span></div>
                  <div class="card-sub">Slotted Pages &bull; ARIES &bull; MVCC &bull; B+ Trees &bull; LSM-Trees</div>
                </div>
              </a>
              <a href="programming-languages.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.03</span>
                <div class="card-text">
                  <div class="card-title">Programming Languages &amp; JIT <span class="card-kanji">[言語]</span></div>
                  <div class="card-sub">Lexing &bull; AST &bull; Bytecode VM &bull; JIT Tiering &bull; GC</div>
                </div>
              </a>
              <a href="data-structures.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.04</span>
                <div class="card-text">
                  <div class="card-title">Data Structures &amp; Algorithms <span class="card-kanji">[構造]</span></div>
                  <div class="card-sub">Cache Locality &bull; Red-Black Trees &bull; Dijkstra &bull; Bloom Filters</div>
                </div>
              </a>
              <a href="operating-systems.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.05</span>
                <div class="card-text">
                  <div class="card-title">Operating Systems &amp; Kernels <span class="card-kanji">[OS]</span></div>
                  <div class="card-sub">Syscalls &bull; Virtual Memory &bull; CFS &bull; Epoll &bull; Zero-Copy</div>
                </div>
              </a>
              <a href="cs-hardware-foundations.html" class="dropdown-card active" role="menuitem">
                <span class="card-vol-tag">VOL.06</span>
                <div class="card-text">
                  <div class="card-title">CS Foundations &amp; Hardware <span class="card-kanji">[ハードウェア]</span></div>
                  <div class="card-sub">Protection Rings &bull; Epoll Kernel &bull; 4-Level Paging &bull; MESI &bull; SPSC</div>
                </div>
              </a>
            </div>
          </div>
        </li>

        <li class="nav-dropdown" id="dropdownBackend">
          <button type="button" class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">
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
              <a href="git-github.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.07</span>
                <div class="card-text">
                  <div class="card-title">Git &amp; GitHub Architecture <span class="card-kanji">[Git]</span></div>
                  <div class="card-sub">SHA-1 DAG &bull; Packfiles &bull; Three-Way Merge &bull; Rebase Mechanics</div>
                </div>
              </a>
              <a href="python-masterclass.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.08</span>
                <div class="card-text">
                  <div class="card-title">Python 3 Masterclass <span class="card-kanji">[Python]</span></div>
                  <div class="card-sub">OOP &bull; Metaclasses &bull; Asyncio &bull; MRO &bull; Pattern Matching</div>
                </div>
              </a>
              <a href="python-runtime.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.09</span>
                <div class="card-text">
                  <div class="card-title">CPython Runtime Internals <span class="card-kanji">[CPython]</span></div>
                  <div class="card-sub">PyObject &bull; GIL &bull; PyEval_EvalFrameDefault &bull; PyMalloc</div>
                </div>
              </a>
              <a href="low-latency-python.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.10</span>
                <div class="card-text">
                  <div class="card-title">Low-Latency Backend Systems <span class="card-kanji">[低遅延]</span></div>
                  <div class="card-sub">PEP 703 Free-Threading &bull; ASGI &bull; Pydantic V2 Rust &bull; SSE</div>
                </div>
              </a>
              <a href="postgresql.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.11</span>
                <div class="card-text">
                  <div class="card-title">PostgreSQL Zero-to-Hero <span class="card-kanji">[PostgreSQL]</span></div>
                  <div class="card-sub">Postmaster &bull; Shared Buffers &bull; WAL &bull; Index Internals &bull; VACUUM</div>
                </div>
              </a>
              <a href="java-masterclass.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.12</span>
                <div class="card-text">
                  <div class="card-title">Java Masterclass Manual <span class="card-kanji">[Java]</span></div>
                  <div class="card-sub">JVM Spec &bull; Memory Model (JMM) &bull; G1/ZGC &bull; Virtual Threads</div>
                </div>
              </a>
            </div>
          </div>
        </li>

        <li class="nav-dropdown" id="dropdownWeb">
          <button type="button" class="nav-dropdown-btn" aria-expanded="false" aria-haspopup="true">
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
              <a href="high-concurrency-java.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.13</span>
                <div class="card-text">
                  <div class="card-title">High-Concurrency Java 21 <span class="card-kanji">[並行性]</span></div>
                  <div class="card-sub">Loom Internals &bull; ZGC Colored Pointers &bull; Disruptor &bull; Reactive</div>
                </div>
              </a>
              <a href="enterprise-scss.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.14</span>
                <div class="card-text">
                  <div class="card-title">Enterprise SCSS Architecture <span class="card-kanji">[SCSS]</span></div>
                  <div class="card-sub">Dart Sass &bull; @use/@forward &bull; ITCSS &bull; Tokens &bull; Compilation AST</div>
                </div>
              </a>
              <a href="javascript-mastery.html" class="dropdown-card" role="menuitem">
                <span class="card-vol-tag">VOL.15</span>
                <div class="card-text">
                  <div class="card-title">The Ultimate Guide to JS <span class="card-kanji">[JS]</span></div>
                  <div class="card-sub">ES6+ &bull; Event Loop &bull; DOM &bull; MVC Architecture &bull; Async/Await</div>
                </div>
              </a>
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
  </header>

  <div class="layout-container">
    <!-- Sidebar Table of Contents -->
    <aside class="sidebar-toc">
      <div class="toc-title">Table of Contents</div>
      <ul class="toc-nav">
        <li><a href="#overview">Overview &amp; Curriculum Scope</a></li>
        <li><a href="#kernel-architecture">1. Operating Systems &amp; Kernel Architecture</a>
          <ul class="toc-subnav">
            <li><a href="#protection-rings">Protection Rings, System Calls &amp; Transitions</a></li>
            <li><a href="#diagram-syscall">Diagram: Protection Rings &amp; SYSCALL Flow</a></li>
            <li><a href="#concurrency-units">Concurrency Units: Processes, Threads &amp; Fibers</a></li>
            <li><a href="#context-switch-cost">Microarchitectural Cost of Context Switching</a></li>
            <li><a href="#epoll-evolution">Non-Blocking I/O: epoll Architecture</a></li>
            <li><a href="#diagram-epoll">Diagram: Linux epoll Kernel Architecture</a></li>
            <li><a href="#code-epoll-server">Python 3.12 Edge-Triggered epoll Server</a></li>
            <li><a href="#code-virtual-threads">Java 21 Virtual Thread Server</a></li>
          </ul>
        </li>
        <li><a href="#virtual-memory">2. Virtual Memory, Paging &amp; Memory Subsystems</a>
          <ul class="toc-subnav">
            <li><a href="#paging-hierarchy">4-Level Paging Hierarchy &amp; Address Translation</a></li>
            <li><a href="#diagram-paging">Diagram: 4-Level Page Table Translation</a></li>
            <li><a href="#page-faults">Minor vs Major Page Faults, kswapd &amp; OOM</a></li>
            <li><a href="#stack-vs-heap">Stack vs Heap Allocation Semantics</a></li>
          </ul>
        </li>
        <li><a href="#networking-protocols">3. Computer Networking &amp; Wire Protocols</a>
          <ul class="toc-subnav">
            <li><a href="#osi-vs-tcpip">OSI Reference vs TCP/IP Implementation</a></li>
            <li><a href="#tcp-mechanics">TCP Mechanics: Handshakes, Flow &amp; Congestion</a></li>
            <li><a href="#diagram-tcp">Diagram: TCP Handshake &amp; Teardown</a></li>
            <li><a href="#http-evolution">Evolution of Application Protocols: HTTP/1.1 to HTTP/3</a></li>
            <li><a href="#real-time-protocols">WebSockets, Server-Sent Events &amp; Long Polling</a></li>
            <li><a href="#code-sse-server">Python 3.12 Asynchronous SSE Server</a></li>
            <li><a href="#rpc-serialization">Remote Procedure Calls &amp; Serialization (Protobuf/gRPC)</a></li>
          </ul>
        </li>
        <li><a href="#data-structures">4. Data Structures &amp; Algorithmic Hardware Realities</a>
          <ul class="toc-subnav">
            <li><a href="#hash-tables-cache">High-Performance Hash Tables &amp; Cache Locality</a></li>
            <li><a href="#tree-topologies">Tree Topologies &amp; Database Indexing Engines</a></li>
            <li><a href="#ring-buffers">Cache-Conscious Ring Buffers &amp; Bitwise Topologies</a></li>
            <li><a href="#diagram-ringbuffer">Diagram: LMAX Disruptor Ring Buffer &amp; Padding</a></li>
            <li><a href="#code-spsc-buffer">Java 21 Cache-Padded SPSC Ring Buffer</a></li>
          </ul>
        </li>
        <li><a href="#tradeoffs">5. Systems Architecture Conclusions &amp; Trade-Offs</a></li>
        <li><a href="#works-cited">6. Works Cited (17 References)</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div class="content-header">
        <span class="doc-badge">Volume 06 &bull; 21 Pages &bull; Hardware Realities</span>
        <h1 class="doc-title">Computer Science Foundations and Hardware-Level Realities: An Architectural Reference Guide</h1>
        <p class="doc-subtitle">Distributed Systems Foundations Curriculum &bull; 100% Exact Complete Content</p>
        <div class="doc-meta-row">
          <span>Author: Distributed Systems Foundations</span>
          <span>Coverage: Kernel Rings, epoll, 4-Level Paging, TCP/QUIC, Cache Lines &amp; SPSC</span>
          <span>Interactive: Runnable Code Blocks + Animated SVG Diagrams</span>
        </div>
      </div>

      <!-- Overview -->
      <section id="overview" class="content-section">
        <h2>Overview &amp; Curriculum Scope</h2>
        <p>Modern distributed architectures, high-throughput streaming runtimes, and real-time artificial intelligence platforms are fundamentally governed by the physical constraints of execution hardware and the operational mechanics of the operating system kernel [cite: 76]. High-level runtime abstractions often obscure these boundaries, yet scalable system engineering requires reconciling algorithmic designs with CPU cache hierarchies, kernel privilege boundaries, memory subsystem limits, and network wire encodings [cite: 76].</p>
      </section>

      <!-- Section 1 -->
      <section id="kernel-architecture" class="content-section">
        <h2>1. Operating Systems and Kernel Architecture</h2>

        <h3 id="protection-rings">Protection Rings, System Calls, and Kernel Transitions</h3>
        <p>Modern microprocessors enforce computational stability and tenant isolation through hardware privilege levels known as protection rings [cite: 76]. Within x86-64 architectures, execution privilege is bifurcated between Ring 0, designated as Kernel Space, and Ring 3, designated as User Space [cite: 76]. Ring 0 execution permits direct access to physical memory mappings, interrupt descriptor tables, device controller registers, and privileged processor control flags [cite: 76]. Ring 3 execution constrains program execution to an isolated virtual address space, preventing user-space instructions from directly addressing peripheral hardware or modifying global page tables [cite: 76].</p>

        <p>When an application executing in user space requires an operating system service—such as reading data from an established network socket or allocating physical execution pages—it must initiate an execution boundary crossing termed a system call (syscall) [cite: 76]. In legacy 32-bit x86 architectures, this privilege shift was orchestrated through software interrupts using the instruction <code>INT 0x80</code> [cite: 76]. This path incurred significant CPU cycle overhead due to interrupt vector lookup, hardware permission checks within the Interrupt Descriptor Table (IDT), and segment register modifications [cite: 76].</p>

        <p>Modern 64-bit platforms replace software interrupts with dedicated processor instructions: <code>SYSCALL</code> for kernel entry and <code>SYSRET</code> for returning to user privilege [cite: 76]. The hardware execution flow follows an optimized, deterministic sequence [cite: 76]:</p>

        <ol>
          <li>The processor saves the 64-bit address of the instruction directly following the system call into the dedicated register <code>RCX</code> [cite: 76].</li>
          <li>The current processor state flags stored in <code>RFLAGS</code> are preserved into register <code>R11</code> [cite: 76].</li>
          <li>The processor loads execution flags from the <code>IA32_FMASK</code> Model-Specific Register (MSR) to disable hardware interrupts, preventing race conditions during context transitions [cite: 76].</li>
          <li>The instruction pointer register <code>RIP</code> is overwritten with the memory address stored in the <code>IA32_LSTAR</code> (Long System Target Address Register) MSR, transferring execution directly to the kernel entry point, such as <code>entry_SYSCALL_64</code> in Linux [cite: 76].</li>
          <li>The CPU executes the privileged <code>SWAPGS</code> instruction, replacing the user-space Thread Local Storage pointer with the per-CPU kernel data structures pointer, thereby retrieving the kernel-space stack pointer for the running task [cite: 76].</li>
          <li>The user stack pointer stored in <code>RSP</code> is swapped for the active thread's kernel task stack pointer [cite: 76].</li>
        </ol>

        <p>Upon transitioning into Ring 0, the kernel builds an in-memory frame known as <code>struct pt_regs</code> on the kernel stack, saving the user-space general-purpose registers (<code>RAX</code>, <code>RBX</code>, <code>RDX</code>, <code>RCX</code>, <code>RBP</code>, <code>RSI</code>, <code>RDI</code>, and <code>R8</code> through <code>R15</code>) to ensure lossless resumption of the user thread [cite: 76]. The kernel evaluates the system call index stored in register <code>RAX</code> and dispatches execution via the global system call dispatch vector <code>sys_call_table</code> [cite: 76].</p>

        <div class="analogy-card">
          <div class="analogy-header">// TACTICAL ANALOGY [戦術的類推] &bull; The Embassy Gate (Ring Crossing)</div>
          <p>Treating user-space application execution like civilian operations outside an embassy: Ring 3 applications cannot enter sovereign vaults directly. Initiating a <code>SYSCALL</code> is presenting identification at the consular security checkpoint. The guard verifies credentials, archives personal belongings (saving registers to <code>struct pt_regs</code>), swaps personal access tokens for diplomatic credentials (<code>SWAPGS</code> and <code>CR3</code> page directory change), executes the verified consular action in Ring 0, and returns the civilian safely back to civilian space with zero privilege retention.</p>
        </div>

        <p>This privilege boundary introduces direct and indirect computational costs [cite: 76]. In addition to register swapping, the kernel validates user-space memory pointers across function boundaries using memory boundary validation functions like <code>copy_from_user()</code> and <code>copy_to_user()</code> [cite: 76]. Furthermore, kernel-level vulnerability mitigations—such as Kernel Page-Table Isolation (KPTI) implemented to prevent speculative side-channel vulnerabilities—force the processor to switch between duplicate page directory roots via the control register <code>CR3</code> on every entry and exit [cite: 76]. This page directory shift invalidates non-global translation caches and introduces translation stalls, elevating baseline syscall latencies to hundreds of nanoseconds [cite: 76].</p>

        <!-- ANIMATED DIAGRAM 1: SYSCALL FLOW -->
        <div id="diagram-syscall" class="diagram-card">
          <div class="diagram-header">
            <div class="diagram-title-group">
              <span class="diagram-badge">⟦ ARCHITECTURAL SPEC // システム仕様図 01 ⟧</span>
              <span class="diagram-title">Hardware Protection Rings &amp; 64-bit SYSCALL / SYSRET Execution Flow</span>
            </div>
            <div class="diagram-controls">
              <button class="diagram-btn play-pause-btn" type="button">⏸ Pause Animation</button>
            </div>
          </div>
          <div class="diagram-canvas-wrap">
            <svg class="diagram-svg" viewBox="0 0 880 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="380" height="290" rx="10" fill="var(--bg-tertiary)" stroke="var(--border-strong)" stroke-width="2"/>
              <text x="40" y="55" fill="var(--accent-secondary)" font-weight="800" font-size="14" letter-spacing="1">USER SPACE (RING 3)</text>
              <rect x="40" y="75" width="340" height="48" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="55" y="104" fill="var(--text-primary)" font-size="12" font-family="monospace">Thread App Code (User Stack RSP)</text>
              <rect x="40" y="140" width="340" height="50" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="55" y="170" fill="var(--text-primary)" font-size="12" font-family="monospace">Instruction: SYSCALL (RAX = sys_read)</text>
              <rect x="40" y="210" width="340" height="75" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="55" y="235" fill="var(--accent-primary)" font-size="11" font-weight="700">Hardware Action:</text>
              <text x="55" y="255" fill="var(--text-secondary)" font-size="11" font-family="monospace">RCX &larr; Next RIP | R11 &larr; RFLAGS</text>
              <text x="55" y="273" fill="var(--text-secondary)" font-size="11" font-family="monospace">RIP &larr; IA32_LSTAR (entry_SYSCALL_64)</text>

              <!-- Privilege Barrier -->
              <line x1="440" y1="20" x2="440" y2="310" stroke="var(--accent-secondary)" stroke-width="3" stroke-dasharray="6 4" class="anim-flow-line"/>
              <text x="445" y="40" fill="var(--accent-secondary)" font-weight="800" font-size="11" transform="rotate(90 445 40)">PRIVILEGE BOUNDARY</text>

              <!-- Kernel Space -->
              <rect x="480" y="20" width="380" height="290" rx="10" fill="var(--bg-tertiary)" stroke="var(--accent-primary)" stroke-width="2"/>
              <text x="500" y="55" fill="var(--accent-primary)" font-weight="800" font-size="14" letter-spacing="1">KERNEL SPACE (RING 0)</text>
              <rect x="500" y="75" width="340" height="52" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="515" y="98" fill="var(--accent-primary)" font-size="11" font-weight="700">1. SWAPGS &amp; Stack Pointer Switch</text>
              <text x="515" y="116" fill="var(--text-secondary)" font-size="11" font-family="monospace">RSP &larr; Kernel Task Stack (task_struct)</text>
              <rect x="500" y="140" width="340" height="52" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="515" y="163" fill="var(--accent-secondary)" font-size="11" font-weight="700">2. Save struct pt_regs Frame</text>
              <text x="515" y="181" fill="var(--text-secondary)" font-size="11" font-family="monospace">Pushed: RAX, RBX, RCX, RBP, R8-R15</text>
              <rect x="500" y="205" width="340" height="85" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="515" y="228" fill="var(--accent-primary)" font-size="11" font-weight="700">3. Dispatch &amp; Return</text>
              <text x="515" y="247" fill="var(--text-secondary)" font-size="11" font-family="monospace">sys_call_table[RAX] &rarr; sys_read()</text>
              <text x="515" y="265" fill="var(--text-secondary)" font-size="11" font-family="monospace">copy_to_user() &bull; CR3 swap (KPTI)</text>
              <text x="515" y="283" fill="var(--accent-cyan)" font-size="11" font-weight="700">SYSRET &rarr; Resumes User Space</text>

              <!-- Animated Transition Pulse -->
              <circle cx="440" cy="165" r="7" fill="var(--accent-secondary)" class="anim-packet-node"/>
            </svg>
          </div>
          <div class="diagram-caption">
            <strong>Figure 6.1:</strong> x86-64 hardware transition from Ring 3 to Ring 0. The CPU executes <code>SYSCALL</code>, preserving user RIP into <code>RCX</code> and RFLAGS into <code>R11</code>, loads the entry point from <code>IA32_LSTAR</code>, executes <code>SWAPGS</code> to retrieve kernel data structures, and pushes <code>struct pt_regs</code> onto the kernel task stack before dispatching to <code>sys_call_table</code>.
          </div>
        </div>

        <h3 id="concurrency-units">Concurrency Execution Units: Processes, Threads, and Fibers</h3>
        <p>Concurrent server design requires choosing between process boundaries, native threads, and user-space green threads or fibers, balancing structural fault isolation against resource overhead [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>ARCHITECTURAL DIMENSION</th>
                <th>HEAVYWEIGHT PROCESS</th>
                <th>KERNEL THREAD / PLATFORM THREAD (POSIX PTHREAD)</th>
                <th>VIRTUAL THREAD / FIBER (JAVA 21 PROJECT LOOM)</th>
                <th>ASYNCHRONOUS COROUTINE (PYTHON 3.12 ASYNCIO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Scheduling Domain</strong></td>
                <td>Operating System Kernel (CFS/EEVDF Scheduler) [cite: 76]</td>
                <td>Operating System Kernel (CFS/EEVDF Scheduler) [cite: 76]</td>
                <td>Hybrid: OS schedules carrier threads; JVM schedules virtual threads [cite: 76]</td>
                <td>Application Runtime (Single-threaded event loop scheduler) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Address Space Isolation</strong></td>
                <td>Fully Isolated (<code>struct mm_struct</code> and dedicated page tables) [cite: 76]</td>
                <td>Shared among peer threads inside parent process [cite: 76]</td>
                <td>Shared among all threads inside the JVM runtime [cite: 76]</td>
                <td>Shared across the process interpreter runtime [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Stack Allocation Strategy</strong></td>
                <td>Contiguous virtual allocation (typically 2MB to 8MB) [cite: 76]</td>
                <td>Fixed contiguous allocation (default 1MB - Xss1m) [cite: 76]</td>
                <td>Dynamic chunked heap allocation (hundreds of bytes to a few KB) [cite: 76]</td>
                <td>Python heap frame object (<code>PyFrameObject</code>, ~200 to 500 bytes) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Switch Latency Range</strong></td>
                <td>1.5 to 5.0 &mu;s (includes full TLB invalidation) [cite: 76]</td>
                <td>1.0 to 2.5 &mu;s (shares page tables and caches) [cite: 76]</td>
                <td>20 to 100 ns (user-space continuation jumps) [cite: 76]</td>
                <td>10 to 50 ns (interpreter frame yield/send) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Fault Isolation Boundary</strong></td>
                <td>Hardware enforced via MMU page access permissions [cite: 76]</td>
                <td>Fault in one thread can terminate the entire process [cite: 76]</td>
                <td>JVM sandboxing; memory violations crash the JVM [cite: 76]</td>
                <td>Single runtime boundary; uncaught exceptions disrupt loop [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Maximum Feasible Scale</strong></td>
                <td>Thousands per host (10^3) [cite: 76]</td>
                <td>Tens of thousands per host (10^4) [cite: 76]</td>
                <td>Millions per host (10^6) [cite: 76]</td>
                <td>Hundreds of thousands per host (10^5) [cite: 76]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>In the Linux kernel, processes and threads are unified under the abstraction of <code>struct task_struct</code> [cite: 76]. Their distinction arises during invocation of the <code>clone()</code> system call [cite: 76]. When creating a traditional process via <code>fork()</code>, the kernel creates a unique <code>struct mm_struct</code>, duplicating the parent's page tables under Copy-On-Write (COW) protection [cite: 76]. When instantiating a native thread via <code>pthread_create()</code>, <code>clone()</code> is invoked with shared operational flags [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">C (Linux Kernel clone Flags)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND | CLONE_THREAD | CLONE_SYSVSEM</code></pre>
        </div>

        <p>These flags ensure that the child execution context shares the exact virtual memory map (<code>CLONE_VM</code>), the working file system pointers (<code>CLONE_FS</code>), the file descriptor table (<code>CLONE_FILES</code>), and signal handling tables (<code>CLONE_SIGHAND</code>) with its parent [cite: 76]. Because each platform thread maps directly to an independent kernel <code>task_struct</code>, the OS must allocate a dedicated stack for each thread (typically 1MB) [cite: 76]. This memory footprint limits scaling, as allocating tens of thousands of platform threads exhausts physical RAM and forces excessive virtual memory mappings [cite: 76].</p>

        <p>Java 21 decouples logical concurrency from OS scheduling via Project Loom, establishing an M:N threading framework where M virtual threads execute over N platform carrier threads [cite: 76]. Under this model, an instance of <code>java.lang.VirtualThread</code> wraps an internal <code>jdk.internal.vm.Continuation</code> [cite: 76].</p>

        <p>When executing application code, the virtual thread is mounted directly onto an underlying carrier thread (a standard <code>ForkJoinWorkerThread</code>) [cite: 76]. If the application issues a blocking call (such as socket reads, database synchronization, or <code>Thread.sleep()</code>), the JVM intercepts the invocation within its networking implementation, such as <code>NioSocketImpl</code> [cite: 76]. Rather than blocking the underlying OS thread, the runtime executes <code>Continuation.yield()</code> [cite: 76]. The thread's stack frames are copied from the native execution stack into heap-allocated <code>StackChunk</code> objects, freeing the carrier thread to execute other waiting virtual tasks [cite: 76].</p>

        <p>When the underlying resource becomes available, the runtime's internal polling infrastructure invokes <code>LockSupport.unpark()</code>, moving the virtual thread back to the scheduler's work-stealing queue [cite: 76]. A carrier thread then re-mounts the continuation, copies the stack frames back onto the native execution stack, and resumes execution seamlessly [cite: 76].</p>

        <p>In contrast, Python 3.12 handles concurrency within a single OS thread via the <code>asyncio</code> event loop [cite: 76]. Functions declared with <code>async def</code> compile into generator-backed coroutine objects represented by <code>PyFrameObject</code> allocations on the heap [cite: 76]. When execution encounters an <code>await</code> expression, the coroutine yields control back to the event loop [cite: 76]. The loop tracks outstanding I/O events using non-blocking primitives like <code>epoll</code> [cite: 76].</p>

        <p>When an I/O event completes, the loop invokes <code>coroutine.send(result)</code>, restoring the interpreter's evaluation loop (<code>_PyEval_EvalFrameDefault</code>) on the heap-allocated frame [cite: 76]. Because Python relies on cooperative user-space multitasking, any CPU-intensive operation will block the entire event loop, preventing all concurrent connections from progressing until the computation yields [cite: 76].</p>

        <h3 id="context-switch-cost">The Microarchitectural Cost of OS Context Switching</h3>
        <p>Context switching is often treated as a negligible constant-time operation, but in high-throughput systems, it introduces significant microarchitectural penalties [cite: 76]. Switching execution units disrupts hardware caches and causes pipeline stalls that extend far beyond direct register swap costs [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>MEMORY HIERARCHY LEVEL</th>
                <th>TYPICAL ACCESS LATENCY (CYCLES)</th>
                <th>APPROXIMATE LATENCY (NANOSECONDS)</th>
                <th>HARDWARE IMPACT AND SWITCH OVERHEAD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CPU Register Read/Write</strong></td>
                <td>1 cycle [cite: 76]</td>
                <td>0.3 - 0.5 ns [cite: 76]</td>
                <td>Direct register operations; zero bus traversal [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>L1 Data Cache Hit</strong></td>
                <td>4 - 5 cycles [cite: 76]</td>
                <td>1.0 - 1.5 ns [cite: 76]</td>
                <td>Core-private cache (32KB to 48KB); lowest latency access path [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>L2 Cache Hit</strong></td>
                <td>12 - 14 cycles [cite: 76]</td>
                <td>3.0 - 4.5 ns [cite: 76]</td>
                <td>Core-private cache (512KB to 1MB); servicing L1 cache misses [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>L3 Cache Hit (Shared LLC)</strong></td>
                <td>38 - 50 cycles [cite: 76]</td>
                <td>10.0 - 15.0 ns [cite: 76]</td>
                <td>Shared cross-core cache; requests traverse internal mesh or ring bus [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>Main Memory (DRAM Access)</strong></td>
                <td>150 - 250 cycles [cite: 76]</td>
                <td>50.0 - 80.0 ns [cite: 76]</td>
                <td>High latency; core stalls waiting for memory bus transactions [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>OS Syscall Transition</strong></td>
                <td>100 - 300 cycles [cite: 76]</td>
                <td>50.0 - 100.0 ns [cite: 76]</td>
                <td>Direct privilege switch, MSR updates, register state saves [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>Thread Context Switch</strong></td>
                <td>3,000 - 10,000 cycles [cite: 76]</td>
                <td>1,000 - 3,000 ns [cite: 76]</td>
                <td>Kernel scheduler execution, runqueue management, stack pointer swap [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>Cold Cache Reload Penalty</strong></td>
                <td>Variable (10^2 - 10^3 cycles) [cite: 76]</td>
                <td>50.0 - 300.0 ns [cite: 76]</td>
                <td>Overhead to reload evicted working set lines from main memory [cite: 76].</td>
              </tr>
              <tr>
                <td><strong>TLB Miss (Hardware Page Walk)</strong></td>
                <td>20 - 100 cycles [cite: 76]</td>
                <td>10.0 - 35.0 ns [cite: 76]</td>
                <td>Hardware MMU traverses multi-tier page tables after translation flush [cite: 76].</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>When the kernel scheduler preempts Thread A to run Thread B, the performance penalty is split into direct and indirect overheads [cite: 76]:</p>

        <ul>
          <li><strong>Direct architectural overhead</strong> includes saving general-purpose registers, floating-point units, and extended SIMD contexts (AVX-512 states can exceed 2KB of register state per thread), evaluating the runqueue, and swapping stack pointers [cite: 76]. This direct phase consumes roughly 1,000 to 3,000 nanoseconds of raw CPU time [cite: 76].</li>
          <li><strong>Indirect microarchitectural overhead</strong> introduces larger, longer-lasting performance degradations [cite: 76]. CPU cores rely on cache locality, retaining active instructions and working datasets within L1 and L2 caches [cite: 76]. When Thread B is scheduled, its memory access patterns displace Thread A's data lines across the set-associative cache structures [cite: 76]. When Thread A resumes execution, it encounters cold cache misses across its execution path, forcing the CPU pipeline to stall while data is fetched from L3 cache or high-latency main memory [cite: 76].</li>
        </ul>

        <p>Context switching between different processes also invalidates the Translation Lookaside Buffer (TLB) [cite: 76]. Although modern CPUs use Process-Context Identifiers (PCID) to tag TLB entries without requiring a full flush on every switch, multi-core memory operations can still trigger TLB shootdowns [cite: 76]. When a thread alters virtual address permissions or frees memory ranges, the kernel must guarantee that no remote CPU core uses stale translations [cite: 76]. The modifying core broadcasts an Inter-Processor Interrupt (IPI) across the bus, pausing target cores to invalidate their local TLB entries [cite: 76]. Under high thread counts, these interrupt synchronization cycles can consume significant CPU time across the entire machine [cite: 76].</p>

        <h3 id="epoll-evolution">Non-Blocking I/O Multiplexing: The Evolution of Event Loops</h3>
        <p>Scalable network runtimes decouple active network connections from underlying OS thread pools to prevent resource exhaustion under heavy concurrency [cite: 76].</p>

        <p>Early UNIX implementations relied on <code>select()</code> and <code>poll()</code> to monitor multiple I/O streams [cite: 76]. However, both mechanisms share architectural limitations that cause performance to degrade linearly with scale [cite: 76]:</p>

        <ul>
          <li><strong>Linear Polling Overhead (O(N) Complexity):</strong> Every invocation requires the kernel to iterate through the entire array of registered file descriptors to evaluate readiness, wasting CPU cycles on idle connections [cite: 76].</li>
          <li><strong>Repeated Memory Copies:</strong> Neither interface maintains state within kernel space [cite: 76]. Applications must serialize their full descriptor lists and copy them across the user/kernel space boundary on every polling call, consuming memory bandwidth [cite: 76].</li>
          <li><strong>Descriptor Bitmask Limits:</strong> The <code>select()</code> API uses a fixed-size bit array bounded by the kernel constant <code>FD_SETSIZE</code> (typically 1024) [cite: 76]. Monitoring higher descriptor values causes silent buffer overflows or undefined behavior [cite: 76].</li>
        </ul>

        <p>Linux introduced <code>epoll</code> to solve these limitations by maintaining the monitoring state directly within kernel memory [cite: 76]. The interface consists of three core system calls [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">C (Linux epoll API)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>int epoll_create1(int flags);
int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
int epoll_wait(int epfd, struct epoll_event *events, int maxevents, int timeout);</code></pre>
        </div>

        <p>When <code>epoll_create1()</code> is called, the kernel instantiates a dedicated <code>struct eventpoll</code> within the virtual file system layer [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">C (Kernel fs/eventpoll.c)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>struct eventpoll {
    spinlock_t lock;
    struct mutex mtx;
    wait_queue_head_t wq;
    wait_queue_head_t poll_wait;
    struct list_head rdllist;
    struct rb_root_cached rbr;
    struct epitem *ovflist;
    struct file *file;
};

struct epitem {
    union {
        struct rb_node rbn;
        struct rcu_head rcu;
    };
    struct list_head rdllink;
    struct epitem *next;
    struct epoll_filefd ffd;
    struct eventpoll *ep;
    struct epoll_event event;
};</code></pre>
        </div>

        <p>This architecture separates descriptor management from event notifications using two primary data structures [cite: 76]:</p>

        <ul>
          <li><strong>A Red-Black Tree (rbr)</strong> organizes registered file descriptors, keyed by the socket descriptor integer [cite: 76]. This guarantees O(log N) time complexity for insertions, updates, and removals (<code>EPOLL_CTL_ADD</code>, <code>EPOLL_CTL_MOD</code>, <code>EPOLL_CTL_DEL</code>), preventing performance degradation as connection counts grow [cite: 76].</li>
          <li><strong>A Doubly-Linked Ready List (rdllist)</strong> tracks descriptors that have pending I/O events [cite: 76]. When an application calls <code>epoll_wait()</code>, the kernel does not scan the full descriptor tree; it evaluates the status of this ready list [cite: 76]. If the list contains entries, they are copied to user space in O(K) time, where K represents the number of active events [cite: 76]. If the list is empty, the thread sleeps on the wait queue <code>wq</code> until an interrupt fires [cite: 76].</li>
        </ul>

        <p>When network packets arrive at the physical network interface card (NIC), the hardware triggers an interrupt [cite: 76]. The kernel network subsystem processes the incoming frame via a software interrupt (<code>ksoftirqd</code>) and places the payload into the socket's receive buffer [cite: 76]. The socket subsystem then invokes the internal callback <code>ep_poll_callback()</code> [cite: 76]. This callback checks if the descriptor's tracking structure (<code>struct epitem</code>) is linked into the eventpoll's ready list (<code>rdllist</code>) [cite: 76]. If unlinked, it appends the item to the list and wakes any threads sleeping on <code>epoll_wait()</code> [cite: 76].</p>

        <!-- ANIMATED DIAGRAM 2: EPOLL ARCHITECTURE -->
        <div id="diagram-epoll" class="diagram-card">
          <div class="diagram-header">
            <div class="diagram-title-group">
              <span class="diagram-badge">⟦ ARCHITECTURAL SPEC // システム仕様図 02 ⟧</span>
              <span class="diagram-title">Linux Kernel epoll Dual Data Structure: Red-Black Tree + Ready List</span>
            </div>
            <div class="diagram-controls">
              <button class="diagram-btn play-pause-btn" type="button">⏸ Pause Animation</button>
            </div>
          </div>
          <div class="diagram-canvas-wrap">
            <svg class="diagram-svg" viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- NIC & Driver Layer -->
              <rect x="20" y="30" width="190" height="260" rx="8" fill="var(--bg-tertiary)" stroke="var(--border-strong)"/>
              <text x="35" y="55" fill="var(--accent-secondary)" font-weight="800" font-size="12">HARDWARE / INTERRUPT</text>
              <rect x="35" y="80" width="160" height="42" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="50" y="106" fill="var(--text-primary)" font-size="11" font-family="monospace">Physical NIC Packet</text>
              <line x1="115" y1="122" x2="115" y2="155" stroke="var(--accent-secondary)" stroke-width="2" class="anim-flow-line"/>
              <rect x="35" y="155" width="160" height="46" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="50" y="178" fill="var(--accent-cyan)" font-size="11" font-weight="700">IRQ &bull; ksoftirqd</text>
              <text x="50" y="193" fill="var(--text-muted)" font-size="10">Socket buffer write</text>
              <line x1="115" y1="201" x2="115" y2="235" stroke="var(--accent-secondary)" stroke-width="2" class="anim-flow-line"/>
              <rect x="35" y="235" width="160" height="42" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="45" y="260" fill="var(--accent-primary)" font-size="11" font-family="monospace">ep_poll_callback()</text>

              <!-- Kernel eventpoll structure -->
              <rect x="250" y="30" width="380" height="260" rx="8" fill="var(--bg-tertiary)" stroke="var(--accent-primary)" stroke-width="2"/>
              <text x="270" y="55" fill="var(--accent-primary)" font-weight="800" font-size="13">KERNEL SPACE: struct eventpoll</text>
              
              <!-- Red-Black Tree Box -->
              <rect x="270" y="75" width="340" height="90" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="285" y="98" fill="var(--accent-secondary)" font-size="11" font-weight="800">Red-Black Tree: rbr [ O(log N) Registration ]</text>
              <circle cx="340" cy="130" r="14" fill="#0c1a2e" stroke="var(--accent-primary)" stroke-width="2"/>
              <text x="330" y="134" fill="#fff" font-size="10" font-family="monospace">fd=4</text>
              <line x1="354" y1="130" x2="390" y2="115" stroke="var(--border-strong)" stroke-width="1.5"/>
              <circle cx="400" cy="115" r="12" fill="#2a1215" stroke="var(--accent-secondary)" stroke-width="2"/>
              <text x="390" y="119" fill="#fff" font-size="9" font-family="monospace">fd=3</text>
              <line x1="354" y1="130" x2="390" y2="145" stroke="var(--border-strong)" stroke-width="1.5"/>
              <circle cx="400" cy="145" r="12" fill="#2a1215" stroke="var(--accent-secondary)" stroke-width="2"/>
              <text x="390" y="149" fill="#fff" font-size="9" font-family="monospace">fd=7</text>
              <circle cx="450" cy="145" r="10" fill="#0c1a2e" stroke="var(--accent-primary)" stroke-width="1.5"/>
              <text x="442" y="148" fill="#fff" font-size="8" font-family="monospace">fd=9</text>

              <!-- Ready List Box -->
              <rect x="270" y="180" width="340" height="95" rx="6" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="285" y="202" fill="var(--accent-cyan)" font-size="11" font-weight="800">Ready List: rdllist [ O(K) Ready Events ]</text>
              <rect x="285" y="215" width="90" height="42" rx="4" fill="#052e16" stroke="#10b981" stroke-width="1.5"/>
              <text x="295" y="235" fill="#4ade80" font-size="10" font-weight="700">epitem fd=3</text>
              <text x="295" y="248" fill="#a7f3d0" font-size="9">EPOLLIN</text>
              <line x1="380" y1="236" x2="415" y2="236" stroke="#10b981" stroke-width="2"/>
              <rect x="420" y="215" width="90" height="42" rx="4" fill="#052e16" stroke="#10b981" stroke-width="1.5"/>
              <text x="430" y="235" fill="#4ade80" font-size="10" font-weight="700">epitem fd=7</text>
              <text x="430" y="248" fill="#a7f3d0" font-size="9">EPOLLOUT</text>

              <!-- Link from callback to ready list -->
              <path d="M 195 256 Q 230 256 280 240" stroke="var(--accent-secondary)" stroke-width="2.5" class="anim-flow-line"/>

              <!-- User Space epoll_wait -->
              <rect x="670" y="30" width="210" height="260" rx="8" fill="var(--bg-tertiary)" stroke="var(--border-strong)"/>
              <text x="685" y="55" fill="var(--accent-primary)" font-weight="800" font-size="12">APPLICATION RUNTIME</text>
              <rect x="685" y="80" width="180" height="60" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="695" y="105" fill="var(--text-primary)" font-size="11" font-family="monospace">epoll_wait(epfd, ...)</text>
              <text x="695" y="125" fill="var(--text-muted)" font-size="10">Sleeping on wq queue</text>
              <line x1="610" y1="236" x2="685" y2="190" stroke="var(--accent-cyan)" stroke-width="2.5" class="anim-flow-line"/>
              <rect x="685" y="170" width="180" height="90" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)"/>
              <text x="695" y="195" fill="var(--accent-cyan)" font-size="11" font-weight="700">WAKENED &rarr; O(K) Copy</text>
              <text x="695" y="215" fill="var(--text-secondary)" font-size="10" font-family="monospace">Only active events copied</text>
              <text x="695" y="235" fill="var(--text-secondary)" font-size="10" font-family="monospace">No full-table iteration!</text>
            </svg>
          </div>
          <div class="diagram-caption">
            <strong>Figure 6.2:</strong> Dual data structure design of Linux <code>struct eventpoll</code>. Sockets are indexed in a Red-Black Tree (<code>rbr</code>) for O(log N) configuration. Hardware NIC interrupts trigger <code>ep_poll_callback()</code>, appending ready descriptors to the doubly-linked list (<code>rdllist</code>), enabling <code>epoll_wait()</code> to return active events in O(K) time without polling idle connections.
          </div>
        </div>

        <p>The <code>epoll</code> interface supports two distinct operational modes [cite: 76]:</p>
        <ul>
          <li><strong>Level-Triggered (LT):</strong> The default operational mode [cite: 76]. The kernel returns a file descriptor on every call to <code>epoll_wait()</code> as long as its underlying buffer condition remains true (such as unread bytes remaining in the socket receive queue) [cite: 76]. If an application reads only 50 bytes from a 100-byte buffer, the next call to <code>epoll_wait()</code> will flag the descriptor again immediately [cite: 76].</li>
          <li><strong>Edge-Triggered (ET):</strong> Configured via the <code>EPOLLET</code> flag [cite: 76]. The kernel notifies the application only when a state change occurs on the descriptor (e.g., when new data arrives from the wire) [cite: 76]. If an application leaves unread data in the buffer, <code>epoll_wait()</code> will not report the socket again until new data arrives, which can stall the connection [cite: 76]. Edge-triggered mode requires non-blocking sockets that are drained in a loop until system calls return <code>EAGAIN</code> or <code>EWOULDBLOCK</code> [cite: 76].</li>
        </ul>

        <p>When multiple worker threads wait on a shared listening socket, incoming connections can trigger a thundering herd: the kernel wakes all waiting threads, even though only one can successfully call <code>accept()</code> [cite: 76]. The remaining threads wake up, fail with <code>EAGAIN</code>, and fall back to sleep, wasting CPU cycles [cite: 76].</p>

        <p>Systems mitigate this using <code>EPOLLEXCLUSIVE</code>, which instructs the kernel to wake only a single waiting thread per incoming event [cite: 76]. Alternatively, applications can use <code>SO_REUSEPORT</code>, allowing multiple independent threads to bind separate sockets to the same port [cite: 76]. The kernel then distributes connections across these sockets using a 4-tuple hash directly within kernel space [cite: 76].</p>

        <h3 id="code-epoll-server">Python 3.12 Edge-Triggered epoll Server Implementation</h3>
        <p>The following production implementation demonstrates an Edge-Triggered event loop built with Python 3.12's low-level <code>select.epoll</code> interface [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">Python 3.12 (Low-Level Edge-Triggered epoll Server)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>import socket
import select
from typing import Dict

def run_edge_triggered_server(host: str = "0.0.0.0", port: int = 9000) -> None:
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind((host, port))
    server_socket.listen(4096)
    server_socket.setblocking(False)

    epoll_instance = select.epoll()
    epoll_instance.register(server_socket.fileno(), select.EPOLLIN | select.EPOLLET)

    connections: Dict[int, socket.socket] = {}
    buffers: Dict[int, bytearray] = {}

    try:
        while True:
            events = epoll_instance.poll()
            for fileno, event in events:
                if fileno == server_socket.fileno():
                    while True:
                        try:
                            client_sock, _ = server_socket.accept()
                            client_sock.setblocking(False)
                            fd = client_sock.fileno()
                            connections[fd] = client_sock
                            buffers[fd] = bytearray()
                            epoll_instance.register(fd, select.EPOLLIN | select.EPOLLET)
                        except BlockingIOError:
                            break
                elif event & select.EPOLLIN:
                    client_sock = connections[fileno]
                    while True:
                        try:
                            chunk = client_sock.recv(4096)
                            if not chunk:
                                epoll_instance.unregister(fileno)
                                client_sock.close()
                                del connections[fileno]
                                del buffers[fileno]
                                break
                            buffers[fileno].extend(chunk)
                            if b"\\n" in buffers[fileno]:
                                epoll_instance.modify(fileno, select.EPOLLOUT | select.EPOLLET)
                                break
                        except BlockingIOError:
                            break
                        except ConnectionResetError:
                            epoll_instance.unregister(fileno)
                            client_sock.close()
                            del connections[fileno]
                            del buffers[fileno]
                            break
                elif event & select.EPOLLOUT:
                    client_sock = connections[fileno]
                    payload = buffers[fileno]
                    while len(payload) > 0:
                        try:
                            bytes_written = client_sock.send(payload)
                            payload = payload[bytes_written:]
                        except BlockingIOError:
                            break
                    buffers[fileno] = payload
                    if len(payload) == 0:
                        epoll_instance.modify(fileno, select.EPOLLIN | select.EPOLLET)
    finally:
        epoll_instance.unregister(server_socket.fileno())
        epoll_instance.close()
        server_socket.close()

if __name__ == "__main__":
    run_edge_triggered_server()</code></pre>
        </div>

        <h3 id="code-virtual-threads">Java 21 High-Throughput Virtual Thread Server</h3>
        <p>In contrast, Java 21 simplifies concurrent network handling by allowing developers to write straightforward, blocking code while the underlying JVM non-blocking poller handles the context switches [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">Java 21 (Virtual Threads &amp; NioSocketImpl)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>package com.systems.concurrency;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class HighThroughputVirtualThreadServer {
    private final int port;

    public HighThroughputVirtualThreadServer(int port) {
        this.port = port;
    }

    public void start() throws IOException {
        try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();
             ServerSocket serverSocket = new ServerSocket()) {
            serverSocket.setReuseAddress(true);
            serverSocket.bind(new InetSocketAddress("0.0.0.0", this.port), 4096);
            while (!serverSocket.isClosed()) {
                Socket clientSocket = serverSocket.accept();
                executor.submit(() -> handleClient(clientSocket));
            }
        }
    }

    private void handleClient(Socket socket) {
        try (socket;
             InputStream in = socket.getInputStream();
             OutputStream out = socket.getOutputStream()) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
                out.flush();
            }
        } catch (IOException ignored) {}
    }

    public static void main(String[] args) throws IOException {
        new HighThroughputVirtualThreadServer(9000).start();
    }
}</code></pre>
        </div>
      </section>

      <!-- Section 2 -->
      <section id="virtual-memory" class="content-section">
        <h2>2. Virtual Memory, Paging, and Memory Subsystems</h2>

        <h3 id="paging-hierarchy">4-Level Paging Hierarchy and Address Translation</h3>
        <p>To keep concurrent execution units stable and secure, the operating system relies on memory virtualization [cite: 76]. Virtual memory abstracts physical memory, ensuring processes cannot access or corrupt each other's memory space [cite: 76].</p>

        <p>Physical RAM is partitioned into fixed-size contiguous blocks known as frames, typically 4KB in size [cite: 76]. The operating system provides each process with an isolated virtual address space, which is translated to physical memory frames via hierarchical page tables [cite: 76]. Address translations are handled in hardware by the Memory Management Unit (MMU) [cite: 76].</p>

        <p>On modern x86-64 architectures, standard 48-bit virtual addresses are mapped to 52-bit physical addresses through a 4-level paging hierarchy [cite: 76]. The translation walks through four distinct structural tables [cite: 76]:</p>

        <ol>
          <li><strong>PML4 (Page Map Level 4):</strong> Bits 47-39 index into the PML4 table, whose physical base address is stored in the CPU control register <code>CR3</code> [cite: 76].</li>
          <li><strong>PDPT (Page Directory Pointer Table):</strong> Bits 38-30 index into the PDPT identified by the PML4 entry [cite: 76].</li>
          <li><strong>PD (Page Directory):</strong> Bits 29-21 index into the Page Directory selected by the PDPT entry [cite: 76].</li>
          <li><strong>PT (Page Table):</strong> Bits 20-12 index into the Page Table selected by the PD entry, retrieving the physical frame address [cite: 76].</li>
          <li><strong>Physical Offset:</strong> Bits 11-0 identify the exact byte within the resolved 4KB physical frame [cite: 76].</li>
        </ol>

        <p>When a virtual address translation is not cached in the TLB, the MMU must walk all 4 levels of the page table in main memory, performing four sequential DRAM reads that can add 30 to 50 nanoseconds of latency per access [cite: 76].</p>

        <!-- ANIMATED DIAGRAM 3: 4-LEVEL PAGING -->
        <div id="diagram-paging" class="diagram-card">
          <div class="diagram-header">
            <div class="diagram-title-group">
              <span class="diagram-badge">⟦ ARCHITECTURAL SPEC // システム仕様図 03 ⟧</span>
              <span class="diagram-title">x86-64 4-Level Paging: 48-bit Virtual Address to 4KB Physical Frame</span>
            </div>
            <div class="diagram-controls">
              <button class="diagram-btn play-pause-btn" type="button">⏸ Pause Animation</button>
            </div>
          </div>
          <div class="diagram-canvas-wrap">
            <svg class="diagram-svg" viewBox="0 0 920 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Virtual Address Deconstruction -->
              <rect x="20" y="20" width="880" height="55" rx="6" fill="var(--bg-tertiary)" stroke="var(--border-strong)"/>
              <text x="35" y="40" fill="var(--accent-secondary)" font-weight="800" font-size="11">48-BIT VIRTUAL ADDRESS DECOMPOSITION</text>
              <rect x="35" y="48" width="160" height="20" fill="#0369a1" rx="3"/><text x="45" y="62" fill="#fff" font-size="10" font-family="monospace">PML4 [47:39] 9b</text>
              <rect x="205" y="48" width="160" height="20" fill="#0d9488" rx="3"/><text x="215" y="62" fill="#fff" font-size="10" font-family="monospace">PDPT [38:30] 9b</text>
              <rect x="375" y="48" width="160" height="20" fill="#d97706" rx="3"/><text x="385" y="62" fill="#fff" font-size="10" font-family="monospace">PD [29:21] 9b</text>
              <rect x="545" y="48" width="160" height="20" fill="#7c3aed" rx="3"/><text x="555" y="62" fill="#fff" font-size="10" font-family="monospace">PT [20:12] 9b</text>
              <rect x="715" y="48" width="170" height="20" fill="#be123c" rx="3"/><text x="725" y="62" fill="#fff" font-size="10" font-family="monospace">Offset [11:0] 12b</text>

              <!-- CR3 Register -->
              <rect x="35" y="110" width="110" height="40" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-primary)" stroke-width="1.5"/>
              <text x="45" y="130" fill="var(--accent-primary)" font-weight="800" font-size="11">CR3 Register</text>
              <text x="45" y="143" fill="var(--text-muted)" font-size="9">PML4 Base Addr</text>

              <!-- 4 Tables -->
              <line x1="145" y1="130" x2="185" y2="130" stroke="var(--accent-primary)" stroke-width="2" class="anim-flow-line"/>
              <rect x="185" y="95" width="115" height="150" rx="5" fill="var(--bg-secondary)" stroke="#0369a1" stroke-width="1.5"/>
              <text x="195" y="115" fill="#0284c7" font-weight="700" font-size="11">PML4 Table</text>
              <line x1="185" y1="125" x2="300" y2="125" stroke="var(--border-subtle)"/>
              <text x="195" y="145" fill="var(--text-muted)" font-size="9">512 Entries (8B)</text>
              <rect x="192" y="160" width="100" height="18" fill="rgba(2,132,199,0.2)" rx="2"/>
              <text x="197" y="173" fill="var(--accent-primary)" font-size="9" font-family="monospace">&rarr; PDPT Ptr</text>

              <line x1="300" y1="169" x2="340" y2="169" stroke="#0d9488" stroke-width="2" class="anim-flow-line"/>
              <rect x="340" y="110" width="115" height="150" rx="5" fill="var(--bg-secondary)" stroke="#0d9488" stroke-width="1.5"/>
              <text x="350" y="130" fill="#0d9488" font-weight="700" font-size="11">PDPT Table</text>
              <line x1="340" y1="140" x2="455" y2="140" stroke="var(--border-subtle)"/>
              <rect x="347" y="175" width="100" height="18" fill="rgba(13,148,136,0.2)" rx="2"/>
              <text x="352" y="188" fill="#14b8a6" font-size="9" font-family="monospace">&rarr; PD Ptr</text>

              <line x1="455" y1="184" x2="495" y2="184" stroke="#d97706" stroke-width="2" class="anim-flow-line"/>
              <rect x="495" y="125" width="115" height="150" rx="5" fill="var(--bg-secondary)" stroke="#d97706" stroke-width="1.5"/>
              <text x="505" y="145" fill="#d97706" font-weight="700" font-size="11">Page Directory</text>
              <line x1="495" y1="155" x2="610" y2="155" stroke="var(--border-subtle)"/>
              <rect x="502" y="190" width="100" height="18" fill="rgba(217,119,6,0.2)" rx="2"/>
              <text x="507" y="203" fill="#f59e0b" font-size="9" font-family="monospace">&rarr; PT Ptr</text>

              <line x1="610" y1="199" x2="650" y2="199" stroke="#7c3aed" stroke-width="2" class="anim-flow-line"/>
              <rect x="650" y="140" width="115" height="150" rx="5" fill="var(--bg-secondary)" stroke="#7c3aed" stroke-width="1.5"/>
              <text x="660" y="160" fill="#7c3aed" font-weight="700" font-size="11">Page Table (PT)</text>
              <line x1="650" y1="170" x2="765" y2="170" stroke="var(--border-subtle)"/>
              <rect x="657" y="205" width="100" height="18" fill="rgba(124,58,237,0.2)" rx="2"/>
              <text x="662" y="218" fill="#a78bfa" font-size="9" font-family="monospace">&rarr; Frame Ptr</text>

              <!-- Final Physical Frame -->
              <line x1="765" y1="214" x2="805" y2="214" stroke="#be123c" stroke-width="2" class="anim-flow-line"/>
              <rect x="805" y="155" width="100" height="135" rx="5" fill="var(--bg-secondary)" stroke="#be123c" stroke-width="2"/>
              <text x="815" y="175" fill="#f43f5e" font-weight="800" font-size="11">4KB Frame</text>
              <text x="815" y="195" fill="var(--text-muted)" font-size="9">Physical DRAM</text>
              <rect x="812" y="235" width="85" height="20" fill="rgba(244,63,94,0.3)" rx="2"/>
              <text x="817" y="249" fill="#fff" font-size="8" font-family="monospace">+ Offset [11:0]</text>
            </svg>
          </div>
          <div class="diagram-caption">
            <strong>Figure 6.3:</strong> x86-64 4-Level Paging Translation. The CPU control register <code>CR3</code> anchors the PML4 root in DRAM. The MMU sequentially reads PML4, PDPT, PD, and PT using 9-bit indices, resolving the physical frame address, and adds the 12-bit physical offset to target the exact byte in DRAM (cost: 30-50ns on TLB miss).
          </div>
        </div>

        <h3 id="page-faults">Minor vs Major Page Faults, kswapd Thrashing and the OOM Killer</h3>
        <p>When an application accesses a virtual page that lacks a valid hardware mapping, the MMU halts execution and triggers a Page Fault (Interrupt Vector 14) [cite: 76]:</p>

        <ul>
          <li><strong>Minor Page Fault:</strong> The requested page resides in physical RAM but lacks an active translation entry in the process page table [cite: 76]. This typically occurs under demand paging: system allocators (<code>malloc()</code>, <code>mmap()</code>) reserve virtual address space immediately but defer allocating physical memory until the memory is first accessed [cite: 76]. The kernel allocates a physical frame, configures the page table entry, and resumes thread execution without reading from disk [cite: 76].</li>
          <li><strong>Major Page Fault:</strong> The requested page has been swapped out to secondary storage or belongs to an unread memory-mapped file [cite: 76]. The kernel suspends the thread while direct memory access (DMA) controllers read the data from disk into a physical frame, introducing a multi-millisecond I/O delay [cite: 76].</li>
        </ul>

        <p>When physical memory is exhausted under high allocation demand, the kernel page-stealing daemon (<code>kswapd</code>) scans pages to reclaim physical frames [cite: 76]. Clean pages backed by storage (such as file-backed memory and read-only executable instructions) are dropped immediately [cite: 76]. Dirty anonymous pages (heap allocations, stack memory) are written out to swap space before being freed [cite: 76].</p>

        <p>If swap I/O cannot keep pace with allocation rates, the system enters a state called thrashing, where CPU time is consumed entirely by moving pages to and from disk [cite: 76].</p>

        <p>If memory exhaustion becomes critical, the kernel activates the Out-Of-Memory (OOM) Killer [cite: 76]. The OOM killer calculates an <code>oom_score</code> for each process based on physical RAM consumption, overall runtime, and process privilege levels, and issues a non-catchable <code>SIGKILL</code> to the process consuming the most memory to prevent a complete system lockup [cite: 76].</p>

        <h3 id="stack-vs-heap">Stack and Heap Allocation Semantics</h3>
        <p>Stack and heap allocations operate under different execution semantics [cite: 76]:</p>
        <ul>
          <li><strong>Stack Allocation:</strong> Managed directly by CPU registers using the stack pointer (<code>RSP</code>) and base pointer (<code>RBP</code>) [cite: 76]. Allocations require only a single register decrement instruction (such as <code>SUB RSP, 32</code>), completing in a fraction of a nanosecond [cite: 76]. Stack data remains cache-local and is reclaimed automatically as function frames return, avoiding garbage collection overhead [cite: 76].</li>
          <li><strong>Heap Allocation:</strong> Managed by runtime allocators (e.g., glibc <code>ptmalloc</code>, <code>jemalloc</code>, or HotSpot memory allocators) [cite: 76]. Allocations require traversing memory pools or size-segregated arenas to locate free blocks, tracking metadata, and managing fragmentation [cite: 76]. If the allocator's free list is exhausted, it must request additional address space from the kernel via <code>brk()</code> or <code>mmap()</code>, making heap allocations significantly more expensive than stack operations [cite: 76].</li>
        </ul>
      </section>

      <!-- Section 3 -->
      <section id="networking-protocols" class="content-section">
        <h2>3. Computer Networking and Distributed Wire Protocols</h2>

        <h3 id="osi-vs-tcpip">Layered Network Models: OSI Reference versus TCP/IP Implementation</h3>
        <p>Distributed systems rely on two common structural models: the theoretical 7-Layer OSI Reference Model and the practical 4-Layer TCP/IP Model [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>LAYER RANK</th>
                <th>OSI REFERENCE MODEL LAYER</th>
                <th>TCP/IP MODEL LAYER</th>
                <th>PRIMARY PROTOCOL EXAMPLES</th>
                <th>ENCAPSULATION UNIT</th>
                <th>PRIMARY HARDWARE / OS DOMAIN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>7, 6</strong></td>
                <td>Application, Presentation [cite: 76]</td>
                <td>Application [cite: 76]</td>
                <td>HTTP/2, HTTP/3, gRPC, DNS, TLS 1.3, Protobuf, ASCII [cite: 76]</td>
                <td>Application Payload [cite: 76]</td>
                <td>User-space runtime application layer, serialization libraries [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>5</strong></td>
                <td>Session [cite: 76]</td>
                <td>Application [cite: 76]</td>
                <td>SOCKS5, RPC Context Sessions [cite: 76]</td>
                <td>Application Payload [cite: 76]</td>
                <td>User-space connection management [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>4</strong></td>
                <td>Transport [cite: 76]</td>
                <td>Transport [cite: 76]</td>
                <td>TCP, UDP, QUIC [cite: 76]</td>
                <td>Segment / Datagram [cite: 76]</td>
                <td>OS Kernel network subsystem / Sockets API [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>3</strong></td>
                <td>Network [cite: 76]</td>
                <td>Internet [cite: 76]</td>
                <td>IPv4, IPv6, ICMP, BGP [cite: 76]</td>
                <td>Packet [cite: 76]</td>
                <td>Kernel routing engine / Network switches [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>2</strong></td>
                <td>Data Link [cite: 76]</td>
                <td>Network Access [cite: 76]</td>
                <td>Ethernet (802.3), Wi-Fi (802.11) [cite: 76]</td>
                <td>Frame [cite: 76]</td>
                <td>Network Interface Card (NIC) / Device Driver [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>1</strong></td>
                <td>Physical [cite: 76]</td>
                <td>Network Access [cite: 76]</td>
                <td>Optical Fiber, Twisted Pair [cite: 76]</td>
                <td>Physical Bitstream [cite: 76]</td>
                <td>Physical transceivers, PHY chips, cables [cite: 76]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>When an application transmits data over the network, the payload moves down through the operating system network stack via progressive encapsulation [cite: 76]:</p>
        <ol>
          <li><strong>Application Layer:</strong> Generates raw message bytes, such as an HTTP/2 data frame [cite: 76].</li>
          <li><strong>Transport Layer (TCP):</strong> Wraps the payload with a 20-to-60-byte TCP header containing source/destination ports, sequence numbers, acknowledgment values, window sizing, and control flags (SYN, ACK, FIN, RST) [cite: 76]. The maximum payload size is bounded by the Maximum Segment Size (MSS), typically 1460 bytes over standard Ethernet [cite: 76].</li>
          <li><strong>Internet Layer (IPv4/IPv6):</strong> Adds an IP header (20 bytes for IPv4, 40 bytes for IPv6) containing source/destination addresses, Time-To-Live (TTL) decrements, and routing flags [cite: 76]. The total packet size is bounded by the Maximum Transmission Unit (MTU), typically 1500 bytes [cite: 76].</li>
          <li><strong>Data Link Layer (Ethernet):</strong> Wraps the IP packet within an Ethernet frame, appending a 14-byte MAC header and a trailing 4-byte Frame Check Sequence (FCS) cyclic redundancy check [cite: 76].</li>
          <li><strong>Physical Layer:</strong> The network controller converts the frame bytes into an electrical, optical, or radio signal sent across the physical medium [cite: 76].</li>
        </ol>

        <p>At the destination host, the process is reversed [cite: 76]. The physical network adapter receives the signal, validates the checksum, strips each header layer by layer via decapsulation, and passes the payload up through the stack to the receiving application [cite: 76].</p>

        <h3 id="tcp-mechanics">Deep Dive into Transmission Control Protocol Mechanics</h3>
        <p>The Transmission Control Protocol (TCP, RFC 793) provides reliable, in-order byte stream delivery over unreliable underlying IP networks [cite: 76].</p>

        <p>Establishing a connection requires a 3-Way Handshake to synchronize sequence numbers between endpoints [cite: 76]:</p>
        <ol>
          <li><strong>SYN:</strong> The client picks an Initial Sequence Number (<code>ISN_c</code>) and sends a segment with the SYN flag enabled [cite: 76].</li>
          <li><strong>SYN-ACK:</strong> The server reads the segment, records <code>ISN_c</code>, picks its own Initial Sequence Number (<code>ISN_s</code>) and returns a segment with both SYN and ACK flags set, where the acknowledgment field is set to <code>ISN_c + 1</code> [cite: 76].</li>
          <li><strong>ACK:</strong> The client sends an acknowledgment segment with the ACK flag enabled and the acknowledgment field set to <code>ISN_s + 1</code> [cite: 76]. The server processes this segment and marks the connection as <code>ESTABLISHED</code> [cite: 76].</li>
        </ol>

        <p>Under high connection churn, servers face a vulnerability known as a SYN Flood [cite: 76]. Attackers transmit high volumes of spoofed SYN segments, forcing the kernel to allocate and retain connection structures (<code>struct inet_request_sock</code>) in the SYN backlog queue while awaiting ACK responses that never arrive [cite: 76].</p>

        <p>To mitigate this, production kernels use SYN Cookies (<code>net.ipv4.tcp_syncookies = 1</code>) [cite: 76]. Instead of allocating memory upon receiving a SYN, the server encodes connection parameters into the sequence number (<code>ISN_s</code>) itself using a cryptographic hash of the client IP, port, and a secret server seed [cite: 76]. The server only allocates connection resources once the client returns a valid ACK containing this encoded sequence number [cite: 76].</p>

        <p>Connection teardown requires a 4-Way Termination handshake to close both directions of the full-duplex stream [cite: 76]:</p>
        <ol>
          <li>Endpoint A transmits a segment with the FIN flag set, signaling it has finished sending data, and enters the <code>FIN_WAIT_1</code> state [cite: 76].</li>
          <li>Endpoint B acknowledges the FIN with an ACK and enters the <code>CLOSE_WAIT</code> state [cite: 76]. Endpoint A transitions to <code>FIN_WAIT_2</code> [cite: 76].</li>
          <li>Endpoint B finishes transmitting its remaining buffered data and sends its own FIN segment, entering the <code>LAST_ACK</code> state [cite: 76].</li>
          <li>Endpoint A receives the FIN, returns an ACK, and enters the <code>TIME_WAIT</code> state [cite: 76]. Endpoint B processes the ACK and closes the connection [cite: 76].</li>
        </ol>

        <p>The initiating endpoint remains in the <code>TIME_WAIT</code> state for a duration equal to 2 &times; MSL (Maximum Segment Lifetime, typically 60 to 120 seconds) [cite: 76]. This delay serves two critical functions [cite: 76]:</p>
        <ul>
          <li><strong>Reliable Final ACK Delivery:</strong> If the final ACK is lost in transit, the remote peer will retransmit its FIN [cite: 76]. If the local endpoint were already closed, it would respond with an unexpected RST flag, breaking the connection teardown for the peer [cite: 76].</li>
          <li><strong>Delayed Packet Drainage:</strong> It ensures that any delayed segments from the connection expire within the network and are not misdelivered to a new connection that happens to bind to the same 4-tuple [cite: 76].</li>
        </ul>

        <div class="formula-card">
          <div class="formula-header">// SYSTEM FORMULA [数理仕様] &bull; Effective Transmission Window</div>
          <p>The sender is permitted to transmit only up to the minimum of the receiver's advertised buffer window (<code>rwnd</code>) and the congestion window (<code>cwnd</code>):</p>
          <div class="formula-math">Effective Window = min(rwnd, cwnd)</div>
          <p>If the receiver consumes data slower than it arrives, its available buffer fills up, and it shrinks the advertised <code>rwnd</code> [cite: 76]. If <code>rwnd</code> reaches zero, the sender stops transmitting data and periodically sends a 1-byte Zero Window Probe to trigger a window update response from the receiver [cite: 76].</p>
        </div>

        <p>While flow control protects the receiving endpoint, Congestion Control prevents aggregate traffic from overwhelming intermediary network infrastructure [cite: 76]:</p>
        <ul>
          <li><strong>Slow Start:</strong> When a connection opens, the sender initializes its congestion window (<code>cwnd</code>) to a small value (typically 10 MSS) [cite: 76]. For every received ACK, the sender increments cwnd by 1 MSS [cite: 76]. This results in exponential growth, doubling the window size every Round-Trip Time (RTT) [cite: 76].</li>
          <li><strong>Congestion Avoidance (AIMD):</strong> Exponential growth continues until cwnd reaches the Slow Start Threshold (<code>ssthresh</code>) [cite: 76]. At this point, the connection switches to Additive Increase Multiplicative Decrease (AIMD) [cite: 76]. The window increases linearly, growing by roughly 1 MSS per RTT to probe for available network bandwidth without causing packet loss [cite: 76].</li>
          <li><strong>Loss Handling:</strong> If the sender detects packet loss via a retransmission timeout (RTO), it assumes severe network congestion [cite: 76]. It sets ssthresh to half of the current cwnd, collapses cwnd back to 1 MSS, and enters the Slow Start phase again [cite: 76]. If loss is detected via Fast Retransmit (receiving three duplicate ACKs without an RTO), modern implementations apply Fast Recovery: they halve ssthresh, scale cwnd to the new threshold, and continue with linear Additive Increase, avoiding the performance penalty of resetting back to 1 MSS [cite: 76].</li>
        </ul>

        <p>Because TCP delivers a reliable, strictly in-order byte stream, packet loss causes Transport-Layer Head-of-Line (HoL) Blocking [cite: 76]. If segments 1, 3, 4, and 5 arrive successfully but segment 2 is dropped, the receiving kernel must buffer segments 3, 4, and 5 without presenting them to the application until segment 2 is retransmitted and acknowledged [cite: 76]. This introduces latency spikes in multi-stream multiplexing protocols like HTTP/2 when operating over lossy networks [cite: 76].</p>

        <h3 id="http-evolution">The Evolution of Application Protocols: HTTP/1.1 to HTTP/3</h3>
        <p>Application layer protocols have evolved to reduce latency, optimize connection utilization, and eliminate Head-of-Line blocking [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>ARCHITECTURAL FEATURE</th>
                <th>HTTP/1.1 (RFC 2616)</th>
                <th>HTTP/2 (RFC 7540)</th>
                <th>HTTP/3 (RFC 9114)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Transport Layer</strong></td>
                <td>TCP (Kernel Space) [cite: 76]</td>
                <td>TCP (Kernel Space) [cite: 76]</td>
                <td>QUIC over UDP (User Space) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Framing Format</strong></td>
                <td>Plaintext ASCII [cite: 76]</td>
                <td>Binary Framing Layer [cite: 76]</td>
                <td>Binary Framing Layer [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Multiplexing Model</strong></td>
                <td>None (Sequential or multiple TCP sockets) [cite: 76]</td>
                <td>Stream Multiplexing over a single TCP connection [cite: 76]</td>
                <td>Stream Multiplexing over independent QUIC streams [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Head-of-Line Blocking</strong></td>
                <td>Application-Layer HoL: Sequential processing stalls queue [cite: 76]</td>
                <td>Transport-Layer HoL: Dropped TCP packet stalls all streams [cite: 76]</td>
                <td>Zero HoL Blocking: Dropped UDP packets stall only the affected stream [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Header Compression</strong></td>
                <td>None (Plaintext headers repeated on each request) [cite: 76]</td>
                <td>HPACK (Static Table, Dynamic Table, Huffman Encoding) [cite: 76]</td>
                <td>QPACK (Optimized for out-of-order stream processing) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Connection Handshake</strong></td>
                <td>1-RTT TCP + 1-2 RTT TLS (Total: 2-3 RTTs) [cite: 76]</td>
                <td>1-RTT TCP + 1-2 RTT TLS (Total: 2-3 RTTs) [cite: 76]</td>
                <td>0-RTT or 1-RTT Combined Handshake (Integrated TLS 1.3) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Connection Migration</strong></td>
                <td>Unsupported (Bound to network 4-tuple) [cite: 76]</td>
                <td>Unsupported (Bound to network 4-tuple) [cite: 76]</td>
                <td>Supported via Connection ID (CID) (Survives IP handovers) [cite: 76]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>HTTP/3 replaces TCP with QUIC (RFC 9000), a transport protocol implemented over UDP [cite: 76]. QUIC moves connection management, loss detection, and congestion control into user space [cite: 76]. Each stream within a QUIC connection maintains independent sequence and offset tracking [cite: 76]. If a UDP packet carrying data for Stream 3 is dropped, the receiving kernel still delivers packets for Stream 5 and Stream 7 to the application without delay [cite: 76]. Only the dropped stream is paused while the missing data is retransmitted, fully resolving Head-of-Line blocking [cite: 76].</p>

        <p>QUIC also integrates TLS 1.3 directly into its transport handshake [cite: 76]:</p>
        <ul>
          <li><strong>1-RTT Handshakes:</strong> Connection negotiation and cryptographic key exchange occur simultaneously in a single round trip [cite: 76].</li>
          <li><strong>0-RTT Handshakes:</strong> Using pre-shared session parameters from earlier sessions, clients can transmit encrypted application data alongside their initial connection packet [cite: 76].</li>
          <li><strong>Connection Migration:</strong> QUIC connections are identified by a 64-bit or 128-bit Connection Identifier (CID) rather than the network 4-tuple [cite: 76]. If a client switches networks (such as transitioning from Wi-Fi to a cellular data link), the client keeps the same CID [cite: 76]. The server accepts packets from the new IP address and resumes the connection without renegotiation [cite: 76].</li>
        </ul>

        <h3 id="real-time-protocols">Real-Time Protocols: WebSockets, Server-Sent Events, and Long Polling</h3>
        <p>Real-time architectures require low-latency communication between clients and backend services [cite: 76]. Choosing the right protocol depends on message frequency, directional requirements, and proxy traversal constraints [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>PROTOCOL CHARACTERISTIC</th>
                <th>HTTP LONG POLLING</th>
                <th>WEBSOCKETS (RFC 6455)</th>
                <th>SERVER-SENT EVENTS (SSE)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Communication Direction</strong></td>
                <td>Unidirectional responses to long-held requests [cite: 76]</td>
                <td>Full-Duplex Bidirectional (Simultaneous read/write) [cite: 76]</td>
                <td>Unidirectional Server-to-Client [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Transport Protocol</strong></td>
                <td>HTTP/1.1 or HTTP/2 [cite: 76]</td>
                <td>TCP (Protocol upgrade over HTTP handshake) [cite: 76]</td>
                <td>Standard HTTP/1.1, HTTP/2, or HTTP/3 [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Framing Overhead</strong></td>
                <td>High: Full HTTP headers sent on every exchange [cite: 76]</td>
                <td>Low: 2 to 10 bytes per binary or text frame [cite: 76]</td>
                <td>Low: Plaintext stream framed by newlines (<code>data: ...</code>) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Connection Setup</strong></td>
                <td>Standard HTTP request overhead on each exchange [cite: 76]</td>
                <td>Protocol Upgrade Handshake (101 Switching Protocols) [cite: 76]</td>
                <td>Standard HTTP request with streaming content header [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Reconnection Support</strong></td>
                <td>Application-managed polling loop [cite: 76]</td>
                <td>Application-managed heartbeat and reconnect logic [cite: 76]</td>
                <td>Native Browser Support (Automatic retry via EventSource) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Data Payload Format</strong></td>
                <td>Text or binary payloads [cite: 76]</td>
                <td>Raw binary bytes and UTF-8 strings [cite: 76]</td>
                <td>UTF-8 text only (Binary requires Base64 encoding) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Proxy Traversal</strong></td>
                <td>Standard HTTP traffic; traverses all firewalls [cite: 76]</td>
                <td>Often blocked or terminated by enterprise proxies [cite: 76]</td>
                <td>Standard HTTP traffic; traverses proxies and WAFs cleanly [cite: 76]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Server-Sent Events (SSE) provide a lightweight, unidirectional channel that pushes events from the server to the client over standard HTTP [cite: 76]. The protocol requires an HTTP request targeting an endpoint configured to return the <code>text/event-stream</code> MIME type, with caching disabled and chunked transfer encoding enabled [cite: 76].</p>

        <p>Modern AI and Large Language Model (LLM) inference runtimes use Server-Sent Events as their primary transport for token streaming [cite: 76]:</p>
        <ol>
          <li><strong>Unidirectional Access Pattern:</strong> Generating inference tokens is inherently unidirectional: the client submits a prompt once, and the model streams tokens back until completion [cite: 76]. Full-duplex protocols like WebSockets add unneeded protocol complexity [cite: 76].</li>
          <li><strong>Native HTTP/2 Multiplexing:</strong> Because SSE runs over standard HTTP, token streams can be multiplexed over a single HTTP/2 connection [cite: 76]. A user interface running multiple concurrent generation streams can multiplex them over one underlying socket without opening multiple TCP connections [cite: 76].</li>
          <li><strong>Infrastructure Compatibility:</strong> SSE traffic uses standard HTTP headers and ports (80/443), allowing it to traverse corporate proxies, API gateways, load balancers, and Web Application Firewalls (WAFs) without the connection drops or custom routing often required for WebSocket upgrades [cite: 76].</li>
          <li><strong>Resilience with Built-in Reconnection:</strong> The native <code>Last-Event-ID</code> mechanism allows clients to recover from transient network drops without complex state-machine tracking at the application layer [cite: 76].</li>
        </ol>

        <h3 id="code-sse-server">Python 3.12 Asynchronous Server-Sent Events Streaming Server</h3>
        <p>The following production implementation demonstrates an asynchronous Server-Sent Events streaming server built with Python 3.12 [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">Python 3.12 (aiohttp Server-Sent Events Streamer)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>import asyncio
import json
import time
from typing import AsyncGenerator
from aiohttp import web

async def mock_llm_token_generator(prompt: str) -> AsyncGenerator[str, None]:
    sample_tokens = [
        "Distributed", " systems", " rely", " fundamentally",
        " on", " consensus", " algorithms,", " and",
        " low-latency", " kernel", " optimizations."
    ]
    for idx, token in enumerate(sample_tokens):
        await asyncio.sleep(0.05)
        payload = {
            "token": token,
            "index": idx,
            "timestamp": time.time()
        }
        yield json.dumps(payload)

async def sse_handler(request: web.Request) -> web.StreamResponse:
    response = web.StreamResponse(
        status=200,
        reason='OK',
        headers={
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        }
    )
    await response.prepare(request)
    prompt = request.query.get("prompt", "default query")
    event_id = 0
    try:
        async for token_json in mock_llm_token_generator(prompt):
            event_id += 1
            sse_frame = (
                "event: token\\n"
                f"id: {event_id}\\n"
                "retry: 3000\\n"
                f"data: {token_json}\\n\\n"
            )
            await response.write(sse_frame.encode('utf-8'))
        terminal_frame = f"event: complete\\nid: {event_id + 1}\\ndata: [DONE]\\n\\n"
        await response.write(terminal_frame.encode('utf-8'))
    except ConnectionResetError:
        pass
    return response

app = web.Application()
app.router.add_get('/v1/chat/completions/stream', sse_handler)

if __name__ == '__main__':
    web.run_app(app, host='0.0.0.0', port=8080)</code></pre>
        </div>

        <h3 id="rpc-serialization">Remote Procedure Calls and Serialization Architectures</h3>
        <p>Remote Procedure Call (RPC) frameworks allow a service to invoke methods on a remote host as if they were local function calls, abstracting network operations behind a generated interface stub [cite: 76].</p>

        <p>RPC frameworks rely on an Interface Definition Language (IDL) to define typed service contracts independent of the target programming language [cite: 76]. Compilers like <code>protoc</code> evaluate these schema files to generate client stubs and server dispatchers [cite: 76]:</p>
        <ul>
          <li><strong>The Client Stub:</strong> Presents a strongly-typed interface to the application [cite: 76]. When a method is called, the stub marshals the arguments into a wire-format payload, wraps it in an RPC frame, and dispatches it across the transport layer [cite: 76].</li>
          <li><strong>The Server Dispatcher:</strong> Receives the incoming frame, unpacks the payload, unmarshals the arguments into memory, and passes them to the actual service method, sending the return values back along the same path [cite: 76].</li>
        </ul>

        <p>The choice of serialization format has a significant impact on network utilization and CPU overhead in high-throughput distributed systems [cite: 76]:</p>
        <p><strong>JSON</strong> is an ASCII-based, schema-free serialization format [cite: 76]. Serializing a JSON payload requires iterating over object structures in memory to convert field names, values, and structural delimiters into ASCII characters [cite: 76]. Converting numbers requires string conversion routines (such as <code>dtoa</code>), which burn CPU cycles converting floating-point values into base-10 strings [cite: 76]. Furthermore, every payload includes redundant field keys ("transaction_id", "timestamp"), inflating message size [cite: 76]. Parsing JSON requires scanning the payload byte by byte to validate syntax, locate delimiters, and allocate memory objects, which incurs high garbage collection and memory overhead [cite: 76].</p>

        <p><strong>Protocol Buffers (Protobuf)</strong> uses a compact, binary, schema-backed wire format that avoids this parsing overhead [cite: 76]:</p>
        <ul>
          <li><strong>Tag-Length-Value (TLV) Binary Encodings:</strong> Protobuf skips string keys entirely, representing fields as an integer key tag that combines the field number and wire type [cite: 76]:<br><code>Tag = (field_number &lt;&lt; 3) | wire_type</code></li>
          <li><strong>Varints (Variable-Length Quantities):</strong> Integers use variable-length encoding (Varints) [cite: 76]. Small integers are encoded using only as many bytes as needed, with the most significant bit (MSB) indicating whether more bytes follow [cite: 76].</li>
          <li><strong>ZigZag Encoding:</strong> Signed integers are mapped to unsigned integers using ZigZag encoding (0 &rarr; 0, -1 &rarr; 1, 1 &rarr; 2, -2 &rarr; 3) [cite: 76]. This ensures negative numbers with leading ones don't consume a full 10 bytes when serialized as standard varints [cite: 76].</li>
          <li><strong>Zero-Copy Parsing:</strong> Because the wire format is strictly typed and predictable, Protobuf deserializers can slice byte arrays directly into existing memory buffers, minimizing object allocations and parsing overhead [cite: 76].</li>
        </ul>

        <p>Every gRPC message is wrapped in a 5-byte Length-Prefixed Framing header before being packed into an HTTP/2 DATA frame [cite: 76]:</p>
        <ul>
          <li><strong>Byte 0 (Compressed-Flag):</strong> 1 bit indicating whether message compression (such as Gzip or Snappy) is enabled [cite: 76].</li>
          <li><strong>Bytes 1-4 (Message Length):</strong> A 32-bit big-endian unsigned integer indicating the length of the serialized Protobuf payload [cite: 76].</li>
        </ul>

        <p>gRPC communicates call status using HTTP/2 Trailing Headers (headers sent after all payload data has been transmitted), including [cite: 76]:</p>
        <ul>
          <li><code>grpc-status</code>: An integer code indicating status (0 = OK, 1 = CANCELLED, 14 = UNAVAILABLE) [cite: 76].</li>
          <li><code>grpc-message</code>: An optional error description [cite: 76].</li>
        </ul>
        <p>Separating status into trailing headers allows servers to stream responses over an open stream and communicate execution errors at the end without having to tear down the underlying HTTP/2 connection [cite: 76].</p>
      </section>

      <!-- Section 4 -->
      <section id="data-structures" class="content-section">
        <h2>4. Data Structures and Algorithmic Hardware Realities</h2>

        <h3 id="hash-tables-cache">High-Performance Hash Tables and Cache Locality</h3>
        <p>Hash tables provide average O(1) time complexity for insertions, updates, and lookups [cite: 76]. However, real-world performance depends heavily on collision resolution strategies and their alignment with the CPU's memory cache line architecture [cite: 76].</p>

        <div class="table-wrapper">
          <table class="reference-table">
            <thead>
              <tr>
                <th>DESIGN ATTRIBUTE</th>
                <th>SEPARATE CHAINING (LINKED LISTS)</th>
                <th>OPEN ADDRESSING (LINEAR PROBING)</th>
                <th>ROBIN HOOD HASHING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Worst-Case Lookup Time</strong></td>
                <td>O(N) [cite: 76]</td>
                <td>O(N) [cite: 76]</td>
                <td>O(N) (Significantly lower variance) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Average Lookup Time</strong></td>
                <td>O(1) [cite: 76]</td>
                <td>O(1) [cite: 76]</td>
                <td>O(1) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Memory Access Pattern</strong></td>
                <td>Non-contiguous (Chases pointers across heap) [cite: 76]</td>
                <td>Contiguous (Sequential cache line loads) [cite: 76]</td>
                <td>Contiguous (Sequential cache line loads) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>L1/L2 Cache Utilization</strong></td>
                <td>Poor (High cache miss rate per probe) [cite: 76]</td>
                <td>High (Loads adjacent slots in 64-byte lines) [cite: 76]</td>
                <td>High (Loads adjacent slots in 64-byte lines) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Allocation Overhead</strong></td>
                <td>High (Requires heap node objects and pointers) [cite: 76]</td>
                <td>None (Flat, contiguous array allocation) [cite: 76]</td>
                <td>None (Flat, contiguous array allocation) [cite: 76]</td>
              </tr>
              <tr>
                <td><strong>Maximum Load Factor (&alpha;)</strong></td>
                <td>Tolerates high load factors (&alpha; &gt; 1.0) [cite: 76]</td>
                <td>Suffers clustering past &alpha; = 0.70 [cite: 76]</td>
                <td>Operates efficiently up to &alpha; = 0.90 [cite: 76]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>In Separate Chaining (used by standard <code>java.util.HashMap</code>), the hash table is an array of references pointing to linked lists (or small red-black trees when collisions exceed 8 nodes) [cite: 76]. When collisions occur, new entries are appended to the list [cite: 76]. While simple to implement, this approach causes frequent CPU cache misses: each node allocation is scattered across the heap, forcing the CPU to chase pointers across random memory locations and stall on main RAM loads [cite: 76].</p>

        <p>In Open Addressing (Linear Probing, Flat Tables), all key-value pairs are stored directly in a single, contiguous array [cite: 76]. When collisions occur, the table probes subsequent slots using an offset function [cite: 76]:<br><code>H(k, i) = (H(k) + i) mod M</code></p>
        <p>This layout takes advantage of hardware prefetchers and cache locality: a single memory access loads a 64-byte cache line containing multiple adjacent slots, allowing subsequent probes to run at register and L1 cache speeds without hitting main memory [cite: 76].</p>

        <p>Under high load factors (&alpha; &gt; 0.8), standard linear probing suffers from primary clustering: colliding elements group into long runs of occupied slots, causing lookup latencies to degrade toward O(N) [cite: 76]. Robin Hood Hashing prevents this by equalizing probe sequence lengths across entries [cite: 76]. Each entry tracks its Probe Sequence Length (PSL)—the distance between its current slot and its optimal hash position [cite: 76].</p>

        <h3 id="tree-topologies">Tree Topologies and Database Indexing Engines</h3>
        <p>Search trees maintain ordered datasets, enabling fast key lookups, range scans, and sorted traversals [cite: 76]. A basic Binary Search Tree (BST) provides no balancing guarantees [cite: 76]. Inserting sorted data causes the tree to degenerate into a linked list, degrading lookup performance from O(log N) to O(N) [cite: 76].</p>

        <p><strong>AVL Trees</strong> are strictly balanced trees where the heights of any two child subtrees differ by at most one [cite: 76]:<br><code>|h_left - h_right| &le; 1</code><br>When mutations violate this invariant, the tree restores balance using tree rotations [cite: 76]. Because of this strict balancing, AVL trees minimize lookup latencies, making them well-suited for read-heavy datasets [cite: 76]. However, insertions and deletions frequently trigger cascading rotations, increasing write overhead [cite: 76].</p>

        <p><strong>Red-Black Trees</strong> (used in <code>java.util.TreeMap</code> and the Linux kernel's <code>struct rb_root</code>) are relaxed balanced trees that color each node red or black, enforcing four structural rules [cite: 76]:</p>
        <ol>
          <li>Every node is either red or black [cite: 76].</li>
          <li>The root node is always black [cite: 76].</li>
          <li>Red nodes cannot have red children (no two adjacent red nodes) [cite: 76].</li>
          <li>Every path from a node to its descendant null links must contain the exact same number of black nodes (the black-height) [cite: 76].</li>
        </ol>
        <p>These invariants guarantee that the longest path from the root to any leaf is no more than twice the length of the shortest path, bounding tree height to <code>h &le; 2 log_2(N + 1)</code> [cite: 76].</p>

        <p>While balanced binary trees work well in memory, relational databases (such as PostgreSQL and MySQL InnoDB) and storage engines avoid them for indexing disk-based data, relying on <strong>B+ Trees</strong> instead [cite: 76]. Modern block storage devices (NVMe SSDs, rotational disks) transfer data in fixed-size blocks, typically 4KB to 16KB pages [cite: 76]. Reading a single byte from disk requires loading the entire 4KB block into memory [cite: 76]. In a binary tree, each node contains a single key, two child pointers, and metadata, occupying only a small fraction of a 4KB block [cite: 76]. Traversing a binary tree with 1,000,000 nodes requires roughly 20 random disk seeks [cite: 76], taking upwards of 200 ms on rotational media.</p>

        <p>B+ Trees solve this by sizing nodes to match the storage subsystem's native page size (typically 16KB, as used by InnoDB) [cite: 76]. An internal node with a 16KB page size can store hundreds of keys alongside its child pointers [cite: 76]. This high branching factor (fan-out, B &ge; 1000) significantly flattens the tree: <code>Height = O(log_B N)</code>. A B+ Tree indexing 1,000,000,000 records requires a tree height of only 3 or 4 levels [cite: 76]. Furthermore, all leaf pages are connected in a doubly-linked list, allowing fast range scans (e.g., <code>WHERE age BETWEEN 25 AND 40</code>) [cite: 76].</p>

        <h3 id="ring-buffers">Cache-Conscious Ring Buffers and Bitwise Ring Topologies</h3>
        <p>A Ring Buffer (or Circular Array) is a fixed-size queue that wraps around when it reaches capacity [cite: 76]. Ring buffers are widely used in low-latency architectures, serving as the backbone for high-performance systems like the LMAX Disruptor, Linux network device ring drivers, and lock-free thread communication channels [cite: 76].</p>

        <p>In a classic circular array, incrementing head and tail indices relies on the modulo operator to wrap around the boundary: <code>index = (index + 1) mod size</code>. At the silicon level, integer division (DIV or IDIV instructions on x86-64) is one of the slowest integer operations, requiring between 15 and 40 CPU clock cycles [cite: 76].</p>

        <div class="formula-card">
          <div class="formula-header">// SYSTEM FORMULA [数理仕様] &bull; Bitwise AND Power-of-Two Indexing</div>
          <p>If the ring buffer's capacity is constrained to a power of two (N = 2^k), the expensive modulo operation can be replaced with a single bitwise AND instruction [cite: 76]:</p>
          <div class="formula-math">index = (index + 1) &amp; (N - 1)</div>
          <p>When N is a power of two, the binary representation of N - 1 consists entirely of ones in the lower bit positions (e.g., for N = 1024 = 2^10, N - 1 = 1023, or binary <code>00000011 11111111</code>) [cite: 76]. Masking the incremented index with this value clears all higher-order overflow bits, wrapping the index back to zero in a single clock cycle [cite: 76].</p>
        </div>

        <p>Modern CPU architectures manage memory coherence using the MESI (Modified, Exclusive, Shared, Invalid) protocol, operating at the granularity of a 64-byte Cache Line [cite: 76].</p>
        <p><strong>False Sharing:</strong> If the head sequence counter (8 bytes) and the tail sequence counter (8 bytes) are stored in adjacent memory locations, they will occupy the same 64-byte physical cache line [cite: 76]. When Core 1 writes to head, its local L1 cache marks the entire 64-byte cache line as Modified [cite: 76]. Under the MESI protocol, this immediately forces the corresponding cache line on Core 2 (which is trying to read or update tail) into the Invalid state [cite: 76]. Core 2 must now stall its execution pipeline and reload the entire cache line across the inter-core interconnect, even though Core 1 never modified tail [cite: 76]. To eliminate false sharing, lock-free data structures insert cache-line padding—adding unused padding fields around critical counters to ensure that independent variables occupy distinct 64-byte cache lines [cite: 76].</p>

        <h3 id="code-spsc-buffer">Single-Producer Single-Consumer (SPSC) Lock-Free Ring Buffer in Java 21</h3>
        <p>The following production implementation demonstrates a Single-Producer Single-Consumer (SPSC) lock-free ring buffer in Java 21 [cite: 76]. It uses power-of-two sizing with bitwise masking, manual memory padding to prevent false sharing, and <code>VarHandle</code> memory barriers to ensure safe visibility across threads [cite: 76]:</p>

        <div class="code-block-wrapper">
          <div class="code-header">
            <span class="code-lang-label">Java 21 (Cache-Padded SPSC Ring Buffer with VarHandle)</span>
            <div class="code-actions">
              <button class="run-btn" type="button" title="Execute Code"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Run // 実行</button>
              <button class="copy-btn" type="button" title="Copy Code">Copy</button>
            </div>
          </div>
          <pre><code>package com.systems.datastructures;

import java.lang.invoke.MethodHandles;
import java.lang.invoke.VarHandle;
import java.util.Objects;

abstract class SPSCPrePad {
    protected long p01, p02, p03, p04, p05, p06, p07, p08;
}

abstract class SPSCHead extends SPSCPrePad {
    protected volatile long head = 0L;
}

abstract class SPSCMidPad extends SPSCHead {
    protected long p09, p10, p11, p12, p13, p14, p15, p16;
}

abstract class SPSCTail extends SPSCMidPad {
    protected volatile long tail = 0L;
}

abstract class SPSCPostPad extends SPSCTail {
    protected long p17, p18, p19, p20, p21, p22, p23, p24;
}

public final class CachePaddedSpscRingBuffer<E> extends SPSCPostPad {
    private final E[] buffer;
    private final int mask;
    private final int capacity;
    private static final VarHandle HEAD_HANDLE;
    private static final VarHandle TAIL_HANDLE;

    static {
        try {
            MethodHandles.Lookup lookup = MethodHandles.lookup();
            HEAD_HANDLE = lookup.findVarHandle(SPSCHead.class, "head", long.class);
            TAIL_HANDLE = lookup.findVarHandle(SPSCTail.class, "tail", long.class);
        } catch (ReflectiveOperationException e) {
            throw new ExceptionInInitializerError(e);
        }
    }

    @SuppressWarnings("unchecked")
    public CachePaddedSpscRingBuffer(int requestedCapacity) {
        if (requestedCapacity < 2) {
            throw new IllegalArgumentException("Capacity must be at least 2");
        }
        this.capacity = 1 << (32 - Integer.numberOfLeadingZeros(requestedCapacity - 1));
        this.mask = this.capacity - 1;
        this.buffer = (E[]) new Object[this.capacity];
    }

    public boolean offer(E element) {
        Objects.requireNonNull(element, "Null elements not supported");
        long currentTail = (long) TAIL_HANDLE.getOpaque(this);
        long currentHead = (long) HEAD_HANDLE.getAcquire(this);

        if (currentTail - currentHead >= capacity) {
            return false;
        }

        int index = (int) (currentTail & mask);
        buffer[index] = element;
        TAIL_HANDLE.setRelease(this, currentTail + 1);
        return true;
    }

    public E poll() {
        long currentHead = (long) HEAD_HANDLE.getOpaque(this);
        long currentTail = (long) TAIL_HANDLE.getAcquire(this);

        if (currentHead >= currentTail) {
            return null;
        }

        int index = (int) (currentHead & mask);
        E element = buffer[index];
        buffer[index] = null;
        HEAD_HANDLE.setRelease(this, currentHead + 1);
        return element;
    }

    public int size() {
        long currentHead = (long) HEAD_HANDLE.getAcquire(this);
        long currentTail = (long) TAIL_HANDLE.getAcquire(this);
        return (int) Math.max(0, currentTail - currentHead);
    }
}</code></pre>
        </div>
      </section>

      <!-- Section 5 -->
      <section id="tradeoffs" class="content-section">
        <h2>5. Systems Architecture Conclusions and Engineering Trade-Offs</h2>
        <p>Architecting high-throughput distributed systems requires balancing engineering trade-offs across every layer of the computing stack [cite: 76]. Optimizations at the application level are ultimately governed by the mechanics of the operating system and underlying hardware [cite: 76]:</p>

        <ol>
          <li><strong>Kernel Boundaries:</strong> System calls are not simple function invocations; they require hardware privilege shifts, register preservation, and TLB flushes [cite: 76]. Applications should minimize boundary crossings through batching, non-blocking multiplexing (epoll), or user-space scheduling models like Java 21 Virtual Threads [cite: 76].</li>
          <li><strong>Execution Units:</strong> Process isolation provides safety at the cost of high context-switch latency and memory overhead [cite: 76]. Kernel threads support preemption and parallel execution across cores, but their scale is bounded by native stack footprint limits [cite: 76]. Virtual threads and coroutines enable massive concurrency by moving stack management to user space, but they require careful handling of blocking native operations and CPU-bound routines to prevent worker starvation [cite: 76].</li>
          <li><strong>Transport Protocols:</strong> While TCP provides reliable in-order byte streams, its single-stream ordering guarantees cause head-of-line blocking in high-multiplexing protocols [cite: 76]. HTTP/3 and QUIC resolve this bottleneck by moving stream isolation down to UDP-backed transport, improving latency resilience on lossy networks [cite: 76].</li>
          <li><strong>Data Topologies and Hardware Realities:</strong> Algorithmic complexity is incomplete without considering cache line layout [cite: 76]. A theoretical O(1) data structure that chases pointers across fragmented heap memory will often perform worse than an O(log N) or open-addressed structure that keeps data aligned with contiguous 64-byte hardware cache lines [cite: 76].</li>
        </ol>
        <p>Reliable, scalable distributed systems are built by aligning application software with the physical constraints of hardware and the structural realities of the operating system kernel [cite: 76].</p>
      </section>

      <!-- Section 6: Works Cited -->
      <section id="works-cited" class="content-section">
        <h2>6. Works Cited</h2>
        <ol style="margin-left: 1.5rem; line-height: 1.8; font-size: 0.92rem; color: var(--text-secondary);">
          <li>Mastering epoll: The Engine Behind High-Performance Linux, <code>https://medium.com/@m-ibrahim.research/mastering-epoll-the-engine-behind-high-performance-linux-networking-85a15e6bde90</code></li>
          <li>Epoll - from the kernel side | PPT - Slideshare, <code>https://www.slideshare.net/slideshow/epoll-from-the-kernel-side/11779840</code></li>
          <li>fs/eventpoll.c - kernel/common - Git at Google - Android GoogleSource, <code>https://android.googlesource.com/kernel/common/+/refs/heads/android-mainline/fs/eventpoll.c</code></li>
          <li>Virtual Threads in Java 21: The End of the Scarcity Era, <code>https://dev.to/dhellano_castro_c5aba0c56/virtual-threads-in-java-21-the-end-of-the-scarcity-era-and-the-pitfalls-that-can-take-you-down-4bml</code></li>
          <li>Java Virtual Threads Fully Explained: A 10-Step Architecture Blueprint, <code>https://medium.com/@ManideepChinthareddy/java-virtual-threads-fully-explained-a-10-step-architecture-blueprint-from-basics-to-internals-ed85c0661d7c</code></li>
          <li>Java Virtual Threads: The Pinning Problem, the Deadlock, and the, <code>https://shbhmrzd.github.io/java/concurrency/virtual-threads/2026/04/25/java-virtual-threads-pinning-and-the-deadlock-problem.html</code></li>
          <li>Virtual Threads - Oracle Help Center, <code>https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html</code></li>
          <li>Java Virtual Thread Pinning - Todd Ginsberg, <code>https://todd.ginsberg.com/post/java/virtual-thread-pinning/</code></li>
          <li>jdk21/src/java.base/share/classes/java/lang/VirtualThread.java - GitHub, <code>https://github.com/openjdk/jdk21/blob/master/src/java.base/share/classes/java/lang/VirtualThread.java</code></li>
          <li>Why are Linux context switches considered faster than thread switches, <code>https://www.quora.com/Why-are-Linux-context-switches-considered-faster-than-thread-switches-on-other-platforms-and-what-benefits-does-this-provide-to-developers</code></li>
          <li>linux - What is the overhead of a context-switch? - Stack Overflow, <code>https://stackoverflow.com/questions/21887797/what-is-the-overhead-of-a-context-switch</code></li>
          <li>What CPU context switch and cache pollution are and how they impact performance, <code>https://andrewpakhomov.com/posts/what-are-context-switches-memory-cache-pollution-and-what-is-their-impact-on-the-performance/</code></li>
          <li>How to Benchmark Kaby Lake &amp; Haswell Memory Latency | Nexthink, <code>https://nexthink.com/blog/smarter-cpu-testing-kaby-lake-haswell-memory</code></li>
          <li>The Implementation of epoll (1) - Datong's Random Thoughts, <code>https://idndx.com/the-implementation-of-epoll-1/</code></li>
          <li>epoll Internals - Linux Kernel Internals, <code>https://kernel-internals.org/net/epoll/</code></li>
          <li>Linux-Kernel Archive: Re: [PATCH v2 2/2] epoll, <code>https://lkml.rescloud.iu.edu/hypermail/linux/kernel/1502.2/01799.html</code></li>
          <li>Java 21 virtual threads make simple blocking code scalable again, <code>https://www.reddit.com/r/java/comments/1ur2x3m/java_21_virtual_threads_make_simple_blocking_code/</code></li>
        </ol>
      </section>

      <!-- Pagination -->
      <div class="page-nav-footer">
        <a href="operating-systems.html" class="nav-card-link prev">
          <span class="nav-direction">&larr; Previous Manual</span>
          <span class="nav-title">Operating Systems &amp; Kernels</span>
        </a>
        <a href="git-github.html" class="nav-card-link next">
          <span class="nav-direction">Next Manual &rarr;</span>
          <span class="nav-title">Git &amp; GitHub Architecture</span>
        </a>
      </div>
    </main>
  </div>

  <button id="back-to-top" class="back-to-top" aria-label="Back to Top" title="Back to Top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>

  <script src="assets/js/main.js"></script>
</body>
</html>
"""
    with open("cs-hardware-foundations.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("Created cs-hardware-foundations.html successfully!")

if __name__ == "__main__":
    build_cs_hardware_html()
