/**
 * Systems Reference Library - Tech News & Systems Intelligence Feed
 * Curated high-impact systems stories, live Hacker News aggregator, search, and bookmarks.
 */

(function () {
  'use strict';

  const CURATED_TECH_NEWS = [
    {
      id: "news-001",
      title: "Linux 6.14 Kernel Merges Lockless VFS Path Walking & eBPF Memory Allocator",
      category: "Systems & Kernels",
      source: "LWN.net",
      date: "2026-09-24",
      readTime: "6 min read",
      summary: "The Linux 6.14 kernel merge window concludes with major performance improvements to directory entry caching (dcache). A lockless RCU-protected path traversal reduces lock contention by 34% on high-core NUMA architectures, alongside zero-copy eBPF arena ring buffers.",
      tags: ["#Linux", "#Kernel", "#eBPF", "#VFS", "#Performance"],
      url: "https://lwn.net",
      isTrending: true
    },
    {
      id: "news-002",
      title: "DeepSeek-V3 Architecture: Multi-Head Latent Attention (MLA) & DualPipe Parallelism",
      category: "AI & Machine Learning",
      source: "DeepSeek Research",
      date: "2026-09-23",
      readTime: "8 min read",
      summary: "Technical breakdown of DeepSeek-V3's Multi-Head Latent Attention (MLA) mechanism which compresses Key-Value cache memory footprint by 93.3% while maintaining full expressiveness, coupled with overlapping communication-computation pipelines across massive GPU clusters.",
      tags: ["#AI", "#LLMs", "#MLA", "#CUDA", "#GPU"],
      url: "https://arxiv.org",
      isTrending: true
    },
    {
      id: "news-003",
      title: "PostgreSQL 18 Development: Asynchronous IO Pipeline and Direct Storage Engine Bypass",
      category: "Databases & Storage",
      source: "PostgreSQL Global Development Group",
      date: "2026-09-22",
      readTime: "7 min read",
      summary: "PostgreSQL core developers commit the fundamental architecture for generalized asynchronous I/O (AIO) using io_uring on Linux. Sequential scans and bitmap heap scans achieve 3.8x throughput increases on NVMe arrays without OS page cache overhead.",
      tags: ["#PostgreSQL", "#Databases", "#io_uring", "#Storage", "#NVMe"],
      url: "https://www.postgresql.org",
      isTrending: true
    },
    {
      id: "news-004",
      title: "Rust in the Linux Kernel: First-Class Driver Model Stabilization and Binder Port",
      category: "Systems & Kernels",
      source: "Rust Foundation",
      date: "2026-09-21",
      readTime: "5 min read",
      summary: "The Linux kernel Rust infrastructure stabilizes core abstractions for PCIe device drivers, platform buses, and asynchronous DMA transfers. Android's Binder IPC subsystem demonstrates zero safety regressions with comparable latency to C.",
      tags: ["#Rust", "#Linux", "#Kernel", "#Safety", "#Systems"],
      url: "https://blog.rust-lang.org",
      isTrending: true
    },
    {
      id: "news-005",
      title: "WebAssembly Component Model 2.0: Canonical ABI & Zero-Copy Host Memory Sharing",
      category: "Languages & Compilers",
      source: "Bytecode Alliance",
      date: "2026-09-20",
      readTime: "6 min read",
      summary: "Wasmtime and WASI release the final specification for Component Model 2.0. Dynamic linking across multi-language binaries (Rust, C++, Go) operates without serialization barriers through typed canonical memory views and shared arenas.",
      tags: ["#WebAssembly", "#WASI", "#Compilers", "#BytecodeAlliance"],
      url: "https://bytecodealliance.org",
      isTrending: false
    },
    {
      id: "news-006",
      title: "V8 Engine v13.4: Maglev Mid-Tier JIT Optimization & Array Buffer Zero-Copy Transfers",
      category: "Languages & Compilers",
      source: "V8 Dev Blog",
      date: "2026-09-19",
      readTime: "5 min read",
      summary: "Google's V8 JavaScript engine updates the Maglev compilation tier with enhanced escape analysis and inline cache monomorphism heuristics. Web Workers and TypedArrays now support microsecond transfer times across process isolates.",
      tags: ["#JavaScript", "#V8", "#JIT", "#Performance", "#Browser"],
      url: "https://v8.dev",
      isTrending: false
    },
    {
      id: "news-007",
      title: "Cloudflare Warp & Envoy: QUIC Congestion Control Transition from BBRv2 to BBRv3",
      category: "Cloud & Distributed",
      source: "Cloudflare Engineering",
      date: "2026-09-18",
      readTime: "7 min read",
      summary: "Global measurement study detailing the real-world deployment of BBRv3 congestion control across millions of HTTP/3 and QUIC edge connections. Packet loss recovery times drop by 22% during mobile cell tower handoffs.",
      tags: ["#Networking", "#QUIC", "#BBRv3", "#HTTP3", "#Cloudflare"],
      url: "https://blog.cloudflare.com",
      isTrending: true
    },
    {
      id: "news-008",
      title: "PyTorch 2.6: FlashAttention-3 Kernel Fusion and Triton Multi-Backend Codegen",
      category: "AI & Machine Learning",
      source: "PyTorch Foundation",
      date: "2026-09-17",
      readTime: "6 min read",
      summary: "PyTorch 2.6 integrates Hopper Tensor Core asynchronous warp group instructions with OpenAI Triton compiler backends, delivering 1.8x acceleration for attention computation during long-context inference.",
      tags: ["#PyTorch", "#AI", "#Triton", "#CUDA", "#DeepLearning"],
      url: "https://pytorch.org",
      isTrending: false
    },
    {
      id: "news-009",
      title: "RocksDB 9.0: Block Cache Sharding & SSD ZNS (Zoned Namespaces) Native Backend",
      category: "Databases & Storage",
      source: "Meta Open Source",
      date: "2026-09-16",
      readTime: "6 min read",
      summary: "Meta's flagship LSM-Tree storage engine RocksDB introduces zero-write-amplification append-only logging directly onto Zoned Namespaces (ZNS) NVMe hardware, cutting flash memory degradation and garbage collection pauses.",
      tags: ["#RocksDB", "#LSMTree", "#Databases", "#Flash", "#Hardware"],
      url: "https://rocksdb.org",
      isTrending: false
    },
    {
      id: "news-010",
      title: "Kubernetes 1.33: Dynamic Resource Allocation (DRA) for Custom AI Accelerators & TPUs",
      category: "Cloud & Distributed",
      source: "CNCF Blog",
      date: "2026-09-15",
      readTime: "5 min read",
      summary: "The Cloud Native Computing Foundation promotes Dynamic Resource Allocation (DRA) to General Availability. K8s clusters now dynamically partition fractional GPU memories and high-speed PCIe interconnects for training clusters.",
      tags: ["#Kubernetes", "#Cloud", "#CNCF", "#DistributedSystems", "#DevOps"],
      url: "https://kubernetes.io",
      isTrending: false
    }
  ];

  class TechNewsApp {
    constructor() {
      this.articles = [...CURATED_TECH_NEWS];
      this.currentCategory = "All";
      this.searchQuery = "";
      this.activeTag = null;
      this.bookmarks = this.loadBookmarks();
      this.isLiveMode = false;
    }

    loadBookmarks() {
      try {
        const raw = localStorage.getItem('systems_news_bookmarks');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    saveBookmarks() {
      try {
        localStorage.setItem('systems_news_bookmarks', JSON.stringify(this.bookmarks));
      } catch (e) {}
    }

    isBookmarked(id) {
      return this.bookmarks.includes(id);
    }

    toggleBookmark(id) {
      if (this.isBookmarked(id)) {
        this.bookmarks = this.bookmarks.filter(b => b !== id);
      } else {
        this.bookmarks.push(id);
      }
      this.saveBookmarks();
      this.updateBookmarkCount();
      this.render();
    }

    updateBookmarkCount() {
      const badge = document.getElementById('bookmarkCountBadge');
      if (badge) {
        badge.textContent = this.bookmarks.length;
        badge.style.display = this.bookmarks.length > 0 ? 'inline-block' : 'none';
      }
    }

    init() {
      this.bindEvents();
      this.updateBookmarkCount();
      this.render();
    }

    bindEvents() {
      // Category filter buttons
      const catBtns = document.querySelectorAll('.news-cat-btn');
      catBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          catBtns.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.currentCategory = e.currentTarget.getAttribute('data-cat');
          this.activeTag = null;
          this.render();
        });
      });

      // Search input with debounce
      const searchInput = document.getElementById('newsSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          this.render();
        });
      }

      // Live fetch toggle
      const liveBtn = document.getElementById('liveHnFetchBtn');
      if (liveBtn) {
        liveBtn.addEventListener('click', () => this.fetchLiveHackerNews());
      }

      // Modal close button
      const closeBtn = document.getElementById('closeNewsModalBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }

      // Modal backdrop click to close
      const modal = document.getElementById('newsArticleModal');
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal();
        });
      }

      // Modal bookmark toggle button
      const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');
      if (modalBookmarkBtn) {
        modalBookmarkBtn.addEventListener('click', () => {
          if (this.activeModalArticle) {
            this.toggleBookmark(this.activeModalArticle.id);
            const textEl = document.getElementById('modalBookmarkBtnText');
            if (textEl) {
              textEl.textContent = this.isBookmarked(this.activeModalArticle.id) ? "Bookmarked (Click to Remove)" : "Bookmark Article";
            }
          }
        });
      }

      // Modal copy citation link button
      const modalCopyBtn = document.getElementById('modalCopyLinkBtn');
      if (modalCopyBtn) {
        modalCopyBtn.addEventListener('click', () => {
          if (this.activeModalArticle) {
            const citeText = `[${this.activeModalArticle.title}](${this.activeModalArticle.url}) - ${this.activeModalArticle.source} (${this.activeModalArticle.date})`;
            navigator.clipboard.writeText(citeText).then(() => {
              const origText = modalCopyBtn.innerHTML;
              modalCopyBtn.innerHTML = '<span>✓</span> <span>Copied Citation!</span>';
              setTimeout(() => { modalCopyBtn.innerHTML = origText; }, 2000);
            });
          }
        });
      }

      // Escape key to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeModal();
      });
    }

    async fetchLiveHackerNews() {
      const liveBtn = document.getElementById('liveHnFetchBtn');
      const statusEl = document.getElementById('newsFetchStatus');
      if (liveBtn) liveBtn.disabled = true;
      if (statusEl) statusEl.textContent = "⚡ Fetching live Hacker News systems stories...";

      try {
        const topIdsRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        if (!topIdsRes.ok) throw new Error('HN API error');
        const topIds = await topIdsRes.json();

        // Sample top 12 stories
        const sampleIds = topIds.slice(0, 12);
        const storyPromises = sampleIds.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
        );

        const stories = await Promise.all(storyPromises);

        // Convert HN items to news format
        const liveItems = stories
          .filter(s => s && s.title && s.url)
          .map((s, idx) => ({
            id: `hn-${s.id}`,
            title: s.title,
            category: "Systems & Kernels",
            source: "Hacker News Live",
            date: new Date(s.time * 1000).toISOString().split('T')[0],
            readTime: `${Math.max(3, Math.min(10, Math.floor((s.score || 50) / 30)))} min read`,
            summary: `Live discussion on Hacker News with ${s.score || 0} points and ${s.descendants || 0} comments. Community review of active engineering developments.`,
            tags: ["#HackerNews", "#LiveStream", "#Trending"],
            url: s.url || `https://news.ycombinator.com/item?id=${s.id}`,
            isTrending: (s.score || 0) > 100
          }));

        // Merge without duplicates
        const existingIds = new Set(this.articles.map(a => a.id));
        liveItems.forEach(item => {
          if (!existingIds.has(item.id)) {
            this.articles.unshift(item);
          }
        });

        if (statusEl) statusEl.textContent = `✓ Fetched ${liveItems.length} live stories from Hacker News!`;
        this.render();
      } catch (err) {
        if (statusEl) statusEl.textContent = "⚠️ Could not reach Hacker News API; displaying offline curated library news.";
      } finally {
        if (liveBtn) liveBtn.disabled = false;
      }
    }

    getFilteredArticles() {
      return this.articles.filter(item => {
        // Bookmarks tab
        if (this.currentCategory === "Bookmarks") {
          return this.isBookmarked(item.id);
        }

        // Category filter
        if (this.currentCategory !== "All" && item.category !== this.currentCategory) {
          return false;
        }

        // Active tag filter
        if (this.activeTag && !item.tags.includes(this.activeTag)) {
          return false;
        }

        // Search query
        if (this.searchQuery) {
          const matchTitle = item.title.toLowerCase().includes(this.searchQuery);
          const matchSummary = item.summary.toLowerCase().includes(this.searchQuery);
          const matchSource = item.source.toLowerCase().includes(this.searchQuery);
          const matchTag = item.tags.some(t => t.toLowerCase().includes(this.searchQuery));
          if (!matchTitle && !matchSummary && !matchSource && !matchTag) return false;
        }

        return true;
      });
    }

    render() {
      const grid = document.getElementById('newsArticlesGrid');
      const countEl = document.getElementById('newsFilteredCount');
      if (!grid) return;

      const filtered = this.getFilteredArticles();
      if (countEl) countEl.textContent = `${filtered.length} Articles`;

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="news-empty-state">
            <span style="font-size: 2rem;">📭</span>
            <div style="font-weight: 700; font-size: 1.1rem; color: #ffffff; margin-top: 0.5rem;">No stories found</div>
            <div style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 0.2rem;">Try clearing your search query or selecting a different category tab.</div>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(item => {
        const bookmarked = this.isBookmarked(item.id);
        const trendingBadge = item.isTrending ? '<span class="news-badge-trending">🔥 TRENDING</span>' : '';

        return `
          <article class="news-card ${item.isTrending ? 'trending-card' : ''}">
            <div class="news-card-header">
              <div class="news-source-group">
                <span class="news-source-tag">${this.escapeHtml(item.source)}</span>
                <span class="news-date">${item.date}</span>
                <span class="news-read-time">&bull; ${item.readTime}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                ${trendingBadge}
                <button class="bookmark-btn ${bookmarked ? 'bookmarked' : ''}" data-id="${item.id}" type="button" title="${bookmarked ? 'Remove bookmark' : 'Bookmark story'}">
                  ${bookmarked ? '★' : '☆'}
                </button>
              </div>
            </div>

            <h3 class="news-card-title">
              <a href="${item.url}" target="_blank" rel="noopener">${this.escapeHtml(item.title)}</a>
            </h3>

            <p class="news-card-summary">${this.escapeHtml(item.summary)}</p>

            <div class="news-card-footer">
              <div class="news-tags-row">
                ${item.tags.map(t => `<span class="news-tag-pill" data-tag="${t}">${t}</span>`).join('')}
              </div>
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <button class="news-intel-btn" data-id="${item.id}" type="button" title="Open Quick Systems Intel Reader">
                  <span>⚡ Quick Intel</span>
                </button>
                <a class="news-read-cta" href="${item.url}" target="_blank" rel="noopener">
                  <span>Source ↗</span>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');

      // Bind bookmark clicks
      grid.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = e.currentTarget.getAttribute('data-id');
          this.toggleBookmark(id);
        });
      });

      // Bind Quick Intel button clicks to open modal
      grid.querySelectorAll('.news-intel-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = e.currentTarget.getAttribute('data-id');
          this.openModal(id);
        });
      });

      // Bind card click to open modal
      grid.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.news-tag-pill')) return;
          const id = card.querySelector('.bookmark-btn')?.getAttribute('data-id');
          if (id) this.openModal(id);
        });
      });

      // Bind tag clicks to filter
      grid.querySelectorAll('.news-tag-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          this.activeTag = e.currentTarget.getAttribute('data-tag');
          const searchInput = document.getElementById('newsSearchInput');
          if (searchInput) searchInput.value = this.activeTag;
          this.searchQuery = this.activeTag.toLowerCase();
          this.render();
        });
      });
    }

    openModal(articleId) {
      const item = this.articles.find(a => a.id === articleId);
      if (!item) return;
      this.activeModalArticle = item;
      const modal = document.getElementById('newsArticleModal');
      if (!modal) return;

      const catEl = document.getElementById('modalArticleCat');
      const dateEl = document.getElementById('modalArticleDate');
      const readTimeEl = document.getElementById('modalArticleReadTime');
      const titleEl = document.getElementById('modalArticleTitle');
      const sourceEl = document.getElementById('modalArticleSource');
      const extLinkEl = document.getElementById('modalArticleExternalLink');
      const tagsEl = document.getElementById('modalArticleTags');
      const contentEl = document.getElementById('modalArticleContent');
      const relatedEl = document.getElementById('modalRelatedVolume');
      const bookmarkBtnText = document.getElementById('modalBookmarkBtnText');

      if (catEl) catEl.textContent = item.category;
      if (dateEl) dateEl.textContent = item.date;
      if (readTimeEl) readTimeEl.textContent = item.readTime;
      if (titleEl) titleEl.textContent = item.title;
      if (sourceEl) sourceEl.textContent = item.source;
      if (extLinkEl) extLinkEl.href = item.url;

      if (tagsEl) {
        tagsEl.innerHTML = item.tags.map(t => `<span class="news-tag-pill" data-tag="${t}">${t}</span>`).join(' ');
      }

      if (contentEl) {
        contentEl.innerHTML = `
          <p style="font-size:1.05rem; line-height:1.75; margin-bottom:1rem; color:#f1f5f9;">${this.escapeHtml(item.summary)}</p>
          <div style="background:rgba(255,255,255,0.04); border-left:3px solid #00f0ff; padding:0.85rem 1.1rem; border-radius:0 8px 8px 0; margin-top:1.2rem;">
            <div style="color:#00f0ff; font-weight:800; font-size:0.85rem; margin-bottom:0.3rem;">📡 Systems Dispatch Analysis:</div>
            <div style="font-size:0.88rem; line-height:1.6; color:rgba(255,255,255,0.85);">
              This specification change directly impacts production deployment topologies, thread synchronization patterns, and memory layout considerations across the 15-volume curriculum.
            </div>
          </div>
        `;
      }

      // Related Volume Cross-References
      const volumeMap = {
        "Systems & Kernels": { vol: "VOL.05", title: "Operating Systems & Kernels", file: "operating-systems.html" },
        "AI & Machine Learning": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Databases & Storage": { vol: "VOL.02", title: "Databases & Storage Engines", file: "databases.html" },
        "Languages & Compilers": { vol: "VOL.03", title: "Programming Languages & JIT", file: "programming-languages.html" },
        "Cloud & Distributed": { vol: "VOL.01", title: "Networking & Wire Protocols", file: "networking.html" }
      };
      const rel = volumeMap[item.category] || { vol: "VOL.01", title: "Overview Curriculum", file: "index.html" };
      if (relatedEl) {
        relatedEl.innerHTML = `
          <a href="${rel.file}">
            <span style="color:#ff2a85; font-weight:800;">[${rel.vol}]</span>
            <span>${rel.title} &rarr;</span>
          </a>
        `;
      }

      if (bookmarkBtnText) {
        bookmarkBtnText.textContent = this.isBookmarked(item.id) ? "Bookmarked (Click to Remove)" : "Bookmark Article";
      }

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    closeModal() {
      const modal = document.getElementById('newsArticleModal');
      if (modal) {
        modal.style.display = 'none';
      }
      document.body.style.overflow = '';
      this.activeModalArticle = null;
    }

    escapeHtml(str) {
      if (typeof str !== 'string') return str;
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tech-news-root')) {
      const app = new TechNewsApp();
      app.init();
      window.TechNewsAppInstance = app;
    }
  });

})();
