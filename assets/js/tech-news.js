/**
 * Systems Reference Library - Tech News & Systems Intelligence Feed
 * Curated high-impact systems stories, live Hacker News aggregator, search, and bookmarks.
 */

(function () {
  'use strict';

  const CURATED_TECH_NEWS = [
    {
      id: "news-001",
      title: "Sam Altman Unveils Next-Gen ChatGPT: Real-Time Voice, Vision, and Reasoning for Everyday Life",
      category: "AI & Visionaries",
      source: "OpenAI",
      date: "2026-09-25",
      readTime: "4 min read",
      summary: "OpenAI CEO Sam Altman announces major intelligence upgrades to ChatGPT, introducing near-instantaneous conversational voice response, live camera vision understanding, and human-like step-by-step reasoning for millions of free and Plus users.",
      insight: "Accessible real-time voice and reasoning make advanced AI intuitive for students, creators, and everyday problem solving.",
      tags: ["#SamAltman", "#OpenAI", "#ChatGPT", "#ArtificialIntelligence"],
      url: "https://openai.com",
      isTrending: true
    },
    {
      id: "news-002",
      title: "Jensen Huang Debuts Blackwell Superchips: 'The Engine Powering the Global AI Revolution'",
      category: "AI & Visionaries",
      source: "NVIDIA Keynote",
      date: "2026-09-24",
      readTime: "5 min read",
      summary: "NVIDIA CEO Jensen Huang took the stage in his iconic leather jacket to announce the Blackwell AI architecture. The breakthrough chips run massive AI models with 25 times less energy consumption, accelerating breakthroughs from climate forecasting to drug discovery.",
      insight: "Lower power consumption and massive compute allow smaller teams to build state-of-the-art AI applications.",
      tags: ["#JensenHuang", "#NVIDIA", "#Blackwell", "#AIChips"],
      url: "https://www.nvidia.com",
      isTrending: true
    },
    {
      id: "news-003",
      title: "Elon Musk Demonstrates Tesla Optimus Humanoid Robots Assisting Around Homes and Factories",
      category: "Robotics & Future",
      source: "Tesla / xAI",
      date: "2026-09-24",
      readTime: "4 min read",
      summary: "Elon Musk presented live demonstrations of Tesla's humanoid robot Optimus walking autonomously, sorting items, handling delicate household tasks, and running real-time multimodal intelligence powered by xAI's Grok reasoning engine.",
      insight: "General-purpose robotics are steadily moving from science fiction into practical factory and home assistance.",
      tags: ["#ElonMusk", "#Tesla", "#Optimus", "#Robotics", "#Grok"],
      url: "https://x.ai",
      isTrending: true
    },
    {
      id: "news-004",
      title: "Mark Zuckerberg Showcases 'Orion' Holographic AR Glasses: The Future Beyond Smartphones",
      category: "Consumer Tech",
      source: "Meta Connect",
      date: "2026-09-23",
      readTime: "5 min read",
      summary: "Meta CEO Mark Zuckerberg unveiled 'Orion', featherlight augmented reality glasses projecting vibrant 3D holograms directly onto the physical world, controlled seamlessly through subtle finger taps and a neural wristband.",
      insight: "Lightweight holographic glasses could eventually replace smartphone screens with natural spatial computing.",
      tags: ["#MarkZuckerberg", "#Meta", "#Orion", "#SmartGlasses", "#AR"],
      url: "https://about.meta.com",
      isTrending: true
    },
    {
      id: "news-005",
      title: "Tim Cook Introduces Apple Intelligence: Personal, Private AI Built Into iPhone, iPad, and Mac",
      category: "Consumer Tech",
      source: "Apple Newsroom",
      date: "2026-09-22",
      readTime: "4 min read",
      summary: "Apple CEO Tim Cook detailed Apple Intelligence, seamlessly integrating helpful writing assistants, smart photo cleanup, priority email sorting, and an upgraded Siri directly into iOS and macOS with an uncompromising focus on user privacy.",
      insight: "Bringing generative intelligence directly onto the device ensures personal data stays private and secure.",
      tags: ["#TimCook", "#Apple", "#iPhone", "#AppleIntelligence", "#Siri"],
      url: "https://www.apple.com",
      isTrending: true
    },
    {
      id: "news-006",
      title: "Sundar Pichai Announces Gemini Era: Transforming Google Search, Android Phones, and Gmail",
      category: "AI & Visionaries",
      source: "Google Blog",
      date: "2026-09-21",
      readTime: "4 min read",
      summary: "Google CEO Sundar Pichai showcased Gemini's direct integration into billions of Android devices, enabling conversational Search overviews, live camera visual search, and automated email drafting to save everyday users hours of tedious work.",
      insight: "Multimodal understanding turns everyday smartphones into interactive, context-aware digital companions.",
      tags: ["#SundarPichai", "#Google", "#Gemini", "#Android", "#Search"],
      url: "https://blog.google",
      isTrending: false
    },
    {
      id: "news-007",
      title: "Demis Hassabis Wins Nobel Prize in Chemistry for AlphaFold: AI Solves 50-Year Biological Mystery",
      category: "AI & Visionaries",
      source: "Nobel Foundation / DeepMind",
      date: "2026-09-20",
      readTime: "5 min read",
      summary: "Google DeepMind co-founder Demis Hassabis was awarded the Nobel Prize in Chemistry for AlphaFold, the revolutionary AI system that successfully predicted the 3D shapes of over 200 million known proteins to accelerate life-saving cures and medicine.",
      insight: "AI is fundamentally accelerating biological research, unlocking cures and new materials in record time.",
      tags: ["#DemisHassabis", "#DeepMind", "#AlphaFold", "#NobelPrize", "#Biotech"],
      url: "https://deepmind.google",
      isTrending: true
    },
    {
      id: "news-008",
      title: "Starlink Direct-to-Cell Connects Ordinary Smartphones to Space: Eliminating Dead Zones Worldwide",
      category: "Space & Satellites",
      source: "SpaceX",
      date: "2026-09-19",
      readTime: "4 min read",
      summary: "SpaceX expanded its Starlink Direct-to-Cell satellite constellation, allowing everyday unmodified smartphones to send text messages and place emergency calls from remote oceans, mountains, and wilderness areas without cellular coverage.",
      insight: "Global satellite connectivity ensures remote travelers and disaster zones maintain critical lifeline communication.",
      tags: ["#ElonMusk", "#SpaceX", "#Starlink", "#Satellite", "#Connectivity"],
      url: "https://starlink.com",
      isTrending: true
    },
    {
      id: "news-009",
      title: "Satya Nadella Launches Copilot+ PCs: Fast, Whisper-Quiet Laptops with Multi-Day Battery Life",
      category: "Consumer Tech",
      source: "Microsoft Stories",
      date: "2026-09-18",
      readTime: "4 min read",
      summary: "Microsoft CEO Satya Nadella revealed the new line of Copilot+ PCs, highlighting snappy ARM-based Windows laptops with over 20 hours of real-world battery life, on-device creative tools, and instant system-wide semantic recall.",
      insight: "Next-gen laptop chips combine extreme battery life with quiet, snappy AI performance for daily work.",
      tags: ["#SatyaNadella", "#Microsoft", "#Windows", "#Copilot", "#Laptops"],
      url: "https://microsoft.com",
      isTrending: false
    },
    {
      id: "news-010",
      title: "AI Pioneer Geoffrey Hinton Receives Nobel Prize in Physics for Founding Artificial Neural Networks",
      category: "AI & Visionaries",
      source: "Nobel Prize Organization",
      date: "2026-09-17",
      readTime: "5 min read",
      summary: "Renowned computer scientist Geoffrey Hinton, known as the 'Godfather of AI', was honored with the Nobel Prize in Physics for his foundational contributions that enabled modern machine learning, speech recognition, and visual perception.",
      insight: "Honors the mathematical foundation of deep learning that made modern speech, vision, and language AI possible.",
      tags: ["#GeoffreyHinton", "#NobelPrize", "#NeuralNetworks", "#Physics"],
      url: "https://nobelprize.org",
      isTrending: false
    },
    {
      id: "news-011",
      title: "Linus Torvalds on Everyday Coding: 'Clear Thinking and Simplicity Outshine Hype Every Single Time'",
      category: "Software & Open Source",
      source: "Linux Foundation",
      date: "2026-09-16",
      readTime: "4 min read",
      summary: "Linux creator Linus Torvalds shared inspiring advice for beginners and seasoned engineers alike, emphasizing that writing readable, uncluttered code that anyone can understand is far more valuable than following the latest short-lived trends.",
      insight: "A timeless reminder that writing simple, maintainable software matters more than chasing fleeting trends.",
      tags: ["#LinusTorvalds", "#Linux", "#OpenSource", "#Programming", "#Simplicity"],
      url: "https://kernel.org",
      isTrending: false
    },
    {
      id: "news-012",
      title: "Amazon Deploys 750,000 Mobile Robots Alongside Warehouse Teams & Expands Clean Energy Cloud",
      category: "Robotics & Future",
      source: "Amazon News",
      date: "2026-09-15",
      readTime: "4 min read",
      summary: "Amazon founder Jeff Bezos and leadership announced the milestone deployment of 750,000 autonomous mobile robots assisting human workers in fulfillment centers, cutting physical strain and speeding package delivery worldwide.",
      insight: "Collaborative robots handle repetitive heavy lifting, showcasing how automation assists human workforces.",
      tags: ["#JeffBezos", "#Amazon", "#Robotics", "#Automation", "#CleanEnergy"],
      url: "https://aboutamazon.com",
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
            category: "Software & Open Source",
            source: "Hacker News Live",
            date: new Date(s.time * 1000).toISOString().split('T')[0],
            readTime: `${Math.max(3, Math.min(10, Math.floor((s.score || 50) / 30)))} min read`,
            summary: `Live discussion on Hacker News with ${s.score || 0} points and ${s.descendants || 0} comments. Community review of active engineering developments.`,
            tags: ["#HackerNews", "#LiveFeed", "#Trending"],
            url: s.url || `https://news.ycombinator.com/item?id=${s.id}`,
            isTrending: (s.score || 0) > 100,
            insight: "Real-time developer community signal tracking emerging tools and industry discussions."
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
            <div style="color:#00f0ff; font-weight:800; font-size:0.85rem; margin-bottom:0.3rem;">💡 Tech Horizon Insight:</div>
            <div style="font-size:0.88rem; line-height:1.6; color:rgba(255,255,255,0.85);">
              ${this.escapeHtml(item.insight || "How leading innovators and breakthroughs are transforming everyday software, hardware, and modern computing experiences.")}
            </div>
          </div>
        `;
      }

      // Related Volume Cross-References
      const volumeMap = {
        "AI & Visionaries": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Consumer Tech": { vol: "VOL.15", title: "The Ultimate Guide to JS & Web", file: "javascript-mastery.html" },
        "Robotics & Future": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Space & Satellites": { vol: "VOL.01", title: "Networking & Wire Protocols", file: "networking.html" },
        "Software & Open Source": { vol: "VOL.05", title: "Operating Systems & Kernels", file: "operating-systems.html" },
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
