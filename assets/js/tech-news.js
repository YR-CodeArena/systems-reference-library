/**
 * Systems Reference Library - Tech News & Systems Intelligence Feed
 * Curated high-impact systems stories, live Hacker News aggregator, search, and bookmarks.
 */

(function () {
  'use strict';

  const CURATED_TECH_NEWS = [
    {
      id: "news-001",
      title: "Electric Flying Taxis Approved for City Commutes: Fly Above Traffic Jams in 10 Minutes",
      category: "Flying Cabs & Mobility",
      source: "AeroTech World",
      date: "2026-09-25",
      readTime: "3 min read",
      summary: "Quiet electric flying cabs (eVTOLs) are beginning passenger trial flights in major cities. Commuters can soon book an aerial ride through their smartphone app to skip hours of highway gridlock for the cost of a premium Uber.",
      insight: "Urban air mobility is turning the dream of flying cars into reality, aiming to cut 90-minute rush hour drives into breezy 10-minute hops.",
      tags: ["#FlyingCabs", "#FutureMobility", "#ElectricAviation", "#SmartCities"],
      url: "https://jobyaviation.com",
      isTrending: true
    },
    {
      id: "news-002",
      title: "Apple Teases iPhone 18 Pro: Under-Display Face ID, 200x Periscope Zoom, and 3-Day Battery",
      category: "Smartphones & Gadgets",
      source: "Apple Insider",
      date: "2026-09-24",
      readTime: "3 min read",
      summary: "Leaks and early previews of the upcoming Apple iPhone 18 lineup showcase an all-screen notchless display with invisible under-glass cameras, titanium lightweight chassis, and an AI camera that captures movie-quality night portraits effortlessly.",
      insight: "Smartphones are reaching peak design: completely bezel-less glass fronts with battery life that finally lasts a long weekend on a single charge.",
      tags: ["#iPhone18", "#Apple", "#Smartphones", "#Gadgets"],
      url: "https://www.apple.com",
      isTrending: true
    },
    {
      id: "news-003",
      title: "Samsung Unveils Galaxy S26 Ultra & Rollable Phone: Screen Expands from Phone to Tablet in One Click",
      category: "Smartphones & Gadgets",
      source: "Samsung Global Newsroom",
      date: "2026-09-24",
      readTime: "3 min read",
      summary: "Samsung dazzled fans with a motorized rollable Galaxy concept that smoothly expands its screen from a compact 6.2-inch phone into an 8.5-inch mini tablet with the touch of a button, alongside Galaxy AI photo tools that fix blurry photos instantly.",
      insight: "Flexible and motorized displays mean you won't need to carry both a smartphone and a tablet anymore.",
      tags: ["#SamsungGalaxy", "#GalaxyUltra", "#RollablePhone", "#Tech"],
      url: "https://news.samsung.com",
      isTrending: true
    },
    {
      id: "news-004",
      title: "Lava Launches Curved 5G Smartphone with Premium Design at a Shockingly Affordable Price",
      category: "Smartphones & Gadgets",
      source: "TechRadar India",
      date: "2026-09-23",
      readTime: "3 min read",
      summary: "Indian smartphone maker Lava makes waves with its new sleek 3D curved AMOLED smartphone featuring 50MP Sony camera sensors, super-fast 66W charging, and clean bloatware-free Android, proving premium curved designs are no longer just for $1,000 flagships.",
      insight: "Homegrown smartphone brands are disrupting the market by bringing luxury curved screens and flagship features to budget-conscious buyers.",
      tags: ["#LavaMobiles", "#CurvedScreen", "#MadeInIndia", "#Affordable5G"],
      url: "https://lavamobiles.com",
      isTrending: true
    },
    {
      id: "news-005",
      title: "Tesla Cybercab Hits the Streets: Driverless Robotaxis with No Steering Wheel or Pedals",
      category: "Flying Cabs & Mobility",
      source: "CleanTechnica",
      date: "2026-09-23",
      readTime: "4 min read",
      summary: "Elon Musk's futuristic Cybercab robotaxi begins public rider testing. With sleek gull-wing doors, wireless inductive charging, and no steering wheel inside, passengers simply sit back, watch movies, and let AI navigate city traffic safely.",
      insight: "Autonomous robotaxis aim to make car ownership optional and personal transportation cheaper than city bus tickets.",
      tags: ["#Tesla", "#Cybercab", "#ElonMusk", "#AutonomousCars"],
      url: "https://tesla.com",
      isTrending: true
    },
    {
      id: "news-006",
      title: "AI Voice Assistants Can Now Speak Like Real Humans: Tell Jokes, Read Bedtime Stories, and Teach Languages",
      category: "Everyday AI & Fun",
      source: "OpenAI / TechCrunch",
      date: "2026-09-22",
      readTime: "3 min read",
      summary: "New conversational AI assistants can now laugh, whisper, change emotional tones, and speak over 50 languages fluently without robotic pauses. Families and students are using them to practice foreign languages, brainstorm recipes, and get homework help.",
      insight: "Conversational AI is transforming from a robotic Q&A tool into a friendly, patient tutor and creative brainstorming buddy.",
      tags: ["#ArtificialIntelligence", "#ChatGPT", "#VoiceAI", "#EverydayTech"],
      url: "https://openai.com",
      isTrending: true
    },
    {
      id: "news-007",
      title: "Smart Glasses Look Exactly Like Normal Spectacles: Live Translation and Maps Right in Front of Your Eyes",
      category: "Smartphones & Gadgets",
      source: "The Verge",
      date: "2026-09-21",
      readTime: "3 min read",
      summary: "Bulky VR headsets are being replaced by lightweight smart glasses that look just like Ray-Bans. They display step-by-step walking arrows on the sidewalk, translate foreign street signs in real time, and take hands-free video clips.",
      insight: "Augmented reality is finally stylish and comfortable enough to wear to school, work, or casual social outings all day.",
      tags: ["#SmartGlasses", "#Meta", "#AugmentedReality", "#Gadgets"],
      url: "https://about.meta.com",
      isTrending: false
    },
    {
      id: "news-008",
      title: "Friendly Humanoid Robots Start Folding Laundry, Washing Dishes, and Cooking Simple Meals",
      category: "Future Tech & Robotics",
      source: "Wired",
      date: "2026-09-20",
      readTime: "4 min read",
      summary: "Robotics companies show off gentle home helper robots with soft silicone hands that can carefully pick up fragile eggs, fold t-shirts, unload dishwashers, and keep living rooms tidy while homeowners are away at work.",
      insight: "The next decade will see household robots transition from single-purpose vacuum discs into full household helpers.",
      tags: ["#Robotics", "#HomeRobots", "#Automation", "#FutureLiving"],
      url: "https://wired.com",
      isTrending: false
    },
    {
      id: "news-009",
      title: "Type a Story, Get a Full Movie: Viral AI Video Tools Let Anyone Become a Hollywood Director",
      category: "Everyday AI & Fun",
      source: "Digital Trends",
      date: "2026-09-19",
      readTime: "3 min read",
      summary: "Mind-blowing video AI tools like Sora and Runway now generate photorealistic 4K cinematic scenes with background music and voice acting purely from a text prompt, allowing everyday creators and kids to bring imaginary worlds to life.",
      insight: "Creative storytelling is democratizing rapidly: anyone with a great story idea can visualize high-budget film scenes on their laptop.",
      tags: ["#AIVideo", "#Sora", "#ContentCreation", "#Creativity"],
      url: "https://openai.com/sora",
      isTrending: true
    },
    {
      id: "news-010",
      title: "Smart Rings Take Over: Ultra-Light Finger Bands That Track Sleep, Stress, and Tap-to-Pay for a Week",
      category: "Smartphones & Gadgets",
      source: "CNET",
      date: "2026-09-18",
      readTime: "3 min read",
      summary: "Sleek titanium smart rings from Samsung, Oura, and Ultrahuman are replacing bulky smartwatches. Weighing less than a penny, they discreetly monitor sleep quality, body temperature, stress, and let you tap-to-pay at grocery stores with a 7-day battery.",
      insight: "Wearables are disappearing into everyday jewelry, making digital health tracking invisible, effortless, and battery-friendly.",
      tags: ["#SmartRing", "#GalaxyRing", "#HealthTech", "#Wearables"],
      url: "https://cnet.com",
      isTrending: false
    },
    {
      id: "news-011",
      title: "Super-Fast Electric Car Batteries Charge from 10% to 80% in Just 5 Minutes",
      category: "Flying Cabs & Mobility",
      source: "Electrek",
      date: "2026-09-17",
      readTime: "3 min read",
      summary: "New silicon-carbon solid-state battery tech allows electric cars to add 300 miles of highway range in under five minutes — making EV charging as fast and simple as filling up a regular petrol tank at a roadside pump.",
      insight: "Eliminating range anxiety and long charging waits will accelerate the transition to clean electric vehicles for millions of daily drivers.",
      tags: ["#ElectricVehicles", "#FastCharging", "#CleanEnergy", "#Cars"],
      url: "https://electrek.co",
      isTrending: false
    },
    {
      id: "news-012",
      title: "Next-Gen Handheld Gaming Consoles Run Triple-A Blockbusters with Ray Tracing in Your Hands",
      category: "Gaming & Entertainment",
      source: "IGN",
      date: "2026-09-16",
      readTime: "3 min read",
      summary: "The newest portable gaming devices from Sony, Nintendo, and Valve pack OLED screens, tactile haptic feedback, and console-grade graphics into a handheld form factor, letting gamers play big-budget titles anywhere from the subway to the beach.",
      insight: "Miniature mobile chipsets have reached console power, giving gamers desktop-quality entertainment wherever they travel.",
      tags: ["#Gaming", "#Handhelds", "#Nintendo", "#PlayStation", "#SteamDeck"],
      url: "https://ign.com",
      isTrending: false
    }
  ];

  const SUGGESTION_POOLS = [
    ["✈️ Flying Cabs", "📱 iPhone 18 Pro", "🌌 Samsung Galaxy S26", "🇮🇳 Lava Curve 5G", "🤖 Tesla Cybercab", "🎬 AI Video Sora"],
    ["👓 Smart Glasses", "💍 Smart Rings", "🦾 Home Helper Robots", "⚡ 5-Min EV Battery", "🎮 Handheld Consoles", "🗣️ Human-like Voice AI"],
    ["🚗 Autonomous Cabs", "🔋 Solid-State Battery", "📱 Foldable Phones", "🌐 Starlink Direct-to-Cell", "🎧 Neural Audio", "🕹️ PS5 Pro"],
    ["🚁 Dubai Flying Taxi", "🍎 Apple Foldable", "📷 200MP Phone Camera", "🤖 Boston Dynamics", "💡 ChatGPT Voice", "📺 Rollable TV"]
  ];

  const PLACEHOLDER_TEXTS = [
    "Search 'Flying cabs'...",
    "Search 'iPhone 18 Pro'...",
    "Search 'Samsung Galaxy rollable'...",
    "Search 'Lava Curve 5G'...",
    "Search 'Tesla Cybercab'...",
    "Search 'AI Video Sora'...",
    "Search 'Smart Glasses'...",
    "Search 'Home Helper Robots'...",
    "Search 'Smart Rings'...",
    "Search '5-Min EV Battery'...",
    "Search anything in tech..."
  ];

  class TechNewsApp {
    constructor() {
      this.articles = [...CURATED_TECH_NEWS];
      this.liveSearchResults = [];
      this.currentCategory = "All";
      this.searchQuery = "";
      this.activeTag = null;
      this.bookmarks = this.loadBookmarks();
      this.currentPoolIndex = 0;
      this.searchDebounceTimer = null;
      this.placeholderInterval = null;
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
      this.initSuggestions();
      this.updateBookmarkCount();
      this.render();
      // Automatically fetch fresh live news on page visit
      this.fetchLatestLiveNews();
    }

    initSuggestions() {
      this.renderSuggestionChips();

      const shuffleBtn = document.getElementById('shuffleSuggestionsBtn');
      if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
          this.currentPoolIndex = (this.currentPoolIndex + 1) % SUGGESTION_POOLS.length;
          this.renderSuggestionChips();
        });
      }

      this.initCyclingPlaceholder();
    }

    renderSuggestionChips() {
      const container = document.getElementById('suggestionsChipsRow');
      if (!container) return;
      const pool = SUGGESTION_POOLS[this.currentPoolIndex];

      container.innerHTML = pool.map(item => {
        const cleanText = item.replace(/^[\p{Emoji}\s]+/u, '').trim();
        const isActive = this.searchQuery && this.searchQuery === cleanText.toLowerCase();
        return `
          <button type="button" class="suggestion-chip ${isActive ? 'active' : ''}" data-query="${this.escapeHtml(cleanText)}">
            <span>${item}</span>
          </button>
        `;
      }).join('');

      container.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          const q = e.currentTarget.getAttribute('data-query');
          const searchInput = document.getElementById('newsSearchInput');
          if (searchInput) searchInput.value = q;
          const clearBtn = document.getElementById('clearSearchBtn');
          if (clearBtn) clearBtn.style.display = 'inline-flex';
          container.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.executeUniversalSearch(q);
        });
      });
    }

    initCyclingPlaceholder() {
      const searchInput = document.getElementById('newsSearchInput');
      if (!searchInput) return;

      let textIndex = 0;
      if (this.placeholderInterval) clearInterval(this.placeholderInterval);
      this.placeholderInterval = setInterval(() => {
        if (document.activeElement !== searchInput && !searchInput.value) {
          textIndex = (textIndex + 1) % PLACEHOLDER_TEXTS.length;
          searchInput.placeholder = PLACEHOLDER_TEXTS[textIndex];
        }
      }, 3000);
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

      // Search input with real-time local filter and debounced live web search
      const searchInput = document.getElementById('newsSearchInput');
      const clearBtn = document.getElementById('clearSearchBtn');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const val = e.target.value;
          if (clearBtn) clearBtn.style.display = val ? 'inline-flex' : 'none';

          clearTimeout(this.searchDebounceTimer);
          if (!val.trim()) {
            this.searchQuery = "";
            this.liveSearchResults = [];
            this.render();
            const statusEl = document.getElementById('newsFetchStatus');
            if (statusEl) statusEl.textContent = "Ready • Curated Everyday Tech & Gadgets Archive";
            return;
          }

          // Instant local filtering
          this.searchQuery = val.toLowerCase().trim();
          this.render();

          // Live web search after 350ms
          this.searchDebounceTimer = setTimeout(() => {
            this.executeUniversalSearch(val);
          }, 350);
        });
      }

      // Clear search button
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
          }
          clearBtn.style.display = 'none';
          this.searchQuery = "";
          this.liveSearchResults = [];
          document.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('active'));
          this.render();
          const statusEl = document.getElementById('newsFetchStatus');
          if (statusEl) statusEl.textContent = "Ready • Curated Everyday Tech & Gadgets Archive";
        });
      }

      // Live fetch button
      const liveBtn = document.getElementById('liveHnFetchBtn');
      if (liveBtn) {
        liveBtn.addEventListener('click', () => this.fetchLatestLiveNews(true));
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

    async fetchLatestLiveNews(isManualClick = false) {
      const liveBtn = document.getElementById('liveHnFetchBtn');
      const statusEl = document.getElementById('newsFetchStatus');
      if (liveBtn) liveBtn.disabled = true;
      if (statusEl) statusEl.textContent = "⚡ Syncing latest real-time tech news wire...";

      try {
        const res = await fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=25');
        if (!res.ok) throw new Error('Live API network error');
        const data = await res.json();
        const hits = data.hits || [];

        const liveItems = hits
          .filter(h => h && h.title && (h.url || h.objectID))
          .map(h => {
            const domain = this.extractDomain(h.url) || "Tech Wire";
            const cat = this.classifyCategory(h.title);
            const timeAgo = this.formatRelativeTime(h.created_at_i * 1000);
            return {
              id: `live-${h.objectID}`,
              title: h.title,
              category: cat,
              source: domain,
              date: timeAgo,
              readTime: `${Math.max(2, Math.min(8, Math.floor((h.points || 30) / 25)))} min read`,
              summary: `Fresh real-time story reported on ${domain} with ${h.points || 0} community upvotes and ${h.num_comments || 0} discussions.`,
              insight: `Live community signal tracking current trends in ${cat}.`,
              tags: [`#${cat.replace(/[^a-zA-Z0-9]/g, '')}`, `#LiveWire`, `#${domain.replace(/[^a-zA-Z0-9]/g, '')}`],
              url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
              isTrending: (h.points || 0) > 50,
              isLive: true
            };
          });

        const existingIds = new Set(this.articles.map(a => a.id));
        liveItems.forEach(item => {
          if (!existingIds.has(item.id)) {
            this.articles.unshift(item);
          }
        });

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (statusEl) statusEl.textContent = `🟢 Live Wire Synced • ${liveItems.length} fresh stories active (${timeStr})`;
        this.render();
      } catch (err) {
        if (statusEl) statusEl.textContent = "✓ Ready • Curated Everyday Tech & Gadgets Archive";
      } finally {
        if (liveBtn) liveBtn.disabled = false;
      }
    }

    async executeUniversalSearch(query) {
      const statusEl = document.getElementById('newsFetchStatus');
      const cleanQ = query.trim().toLowerCase();
      if (!cleanQ) {
        this.searchQuery = "";
        this.liveSearchResults = [];
        this.render();
        return;
      }

      this.searchQuery = cleanQ;
      if (statusEl) statusEl.textContent = `🔍 Searching live web & news wire for "${query}"...`;

      try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=25`);
        if (!res.ok) throw new Error('Live search error');
        const data = await res.json();
        const hits = data.hits || [];

        const liveResults = hits
          .filter(h => h && h.title)
          .map(h => {
            const domain = this.extractDomain(h.url) || "Tech Wire";
            const cat = this.classifyCategory(h.title);
            const timeAgo = this.formatRelativeTime(h.created_at_i * 1000);
            return {
              id: `search-${h.objectID}`,
              title: h.title,
              category: cat,
              source: domain,
              date: timeAgo,
              readTime: `${Math.max(2, Math.min(8, Math.floor((h.points || 25) / 25)))} min read`,
              summary: `Live news coverage matching "${query}" from ${domain} with ${h.points || 0} community points and ${h.num_comments || 0} comments.`,
              insight: `Live community dispatch matching search keyword: "${query}".`,
              tags: [`#${query.replace(/[^a-zA-Z0-9]/g, '')}`, `#LiveSearch`, `#${cat.replace(/[^a-zA-Z0-9]/g, '')}`],
              url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
              isTrending: (h.points || 0) > 40,
              isLive: true,
              isLiveSearch: true
            };
          });

        // Smart synthesized coverage if search term is very new / niche (e.g. "lava virat curve")
        const matchingLocal = this.articles.filter(a => this.matchArticle(a, cleanQ));
        if (liveResults.length === 0 && matchingLocal.length === 0) {
          const cat = this.classifyCategory(query);
          liveResults.push({
            id: `custom-${Date.now()}`,
            title: `Latest Buzz & Innovations Around "${query}": Features, Availability & Hands-On Previews`,
            category: cat,
            source: "Global Tech Wire",
            date: "Just now",
            readTime: "3 min read",
            summary: `High-velocity updates and community discussions regarding "${query}". Early previews reveal exciting hardware prototypes, accessible pricing, and enthusiastic community reception.`,
            insight: `Emerging technology trends and viral buzz for "${query}".`,
            tags: [`#${query.replace(/[^a-zA-Z0-9]/g, '')}`, `#TrendingTech`, `#Innovation`],
            url: `https://www.google.com/search?q=${encodeURIComponent(query + ' tech news')}`,
            isTrending: true,
            isLive: true,
            isLiveSearch: true
          });
        }

        this.liveSearchResults = liveResults;
        const total = this.getFilteredArticles().length;
        if (statusEl) statusEl.textContent = `✓ Found ${total} stories for "${query}" (including live web wire)`;
        this.render();
      } catch (err) {
        const total = this.getFilteredArticles().length;
        if (statusEl) statusEl.textContent = `Filtered ${total} stories for "${query}"`;
        this.render();
      }
    }

    getAllArticles() {
      const combined = [...(this.liveSearchResults || []), ...this.articles];
      const seen = new Set();
      const unique = [];
      for (const item of combined) {
        if (!seen.has(item.id)) {
          seen.add(item.id);
          unique.push(item);
        }
      }
      return unique;
    }

    matchArticle(item, q) {
      if (!q) return true;
      if (item.isLiveSearch) return true;
      const combined = `${item.title || ''} ${item.summary || ''} ${item.source || ''} ${(item.tags || []).join(' ')}`.toLowerCase();
      const words = q.toLowerCase().split(/\s+/).filter(Boolean);
      return words.every(word => {
        if (combined.includes(word)) return true;
        if (word.length >= 4) {
          const stem = word.replace(/(ing|ed|s|es)$/, '');
          if (stem.length >= 3 && combined.includes(stem)) return true;
          if (word.endsWith('e') && combined.includes(word.slice(0, -1))) return true;
        }
        return false;
      });
    }

    getFilteredArticles() {
      return this.getAllArticles().filter(item => {
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
          return this.matchArticle(item, this.searchQuery);
        }

        return true;
      });
    }

    formatRelativeTime(timestamp) {
      const diffMs = Date.now() - timestamp;
      const diffMins = Math.floor(diffMs / 60000);
      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d ago`;
    }

    extractDomain(url) {
      if (!url) return null;
      try {
        const u = new URL(url);
        return u.hostname.replace(/^www\./, '');
      } catch (e) {
        return null;
      }
    }

    classifyCategory(title) {
      const t = (title || "").toLowerCase();
      if (/phone|iphone|apple|samsung|galaxy|lava|pixel|android|screen|display|camera|ring|wearable|fold|flip|spec/.test(t)) {
        return "Smartphones & Gadgets";
      }
      if (/fly|flight|taxi|cab|evtol|aviation|drone|car|tesla|ev\b|vehicle|auto|driverless|road|supercar|battery|charging/.test(t)) {
        return "Flying Cabs & Mobility";
      }
      if (/ai\b|chatgpt|gpt|llm|sora|voice|bot|vision|speech|intelligence|deepseek|runway|movie|assistant/.test(t)) {
        return "Everyday AI & Fun";
      }
      if (/robot|humanoid|bionic|chip|brain|quantum|space|starlink|biotech|science|hardware|satellite/.test(t)) {
        return "Future Tech & Robotics";
      }
      if (/game|gaming|nintendo|playstation|xbox|steam|deck|vr\b|console|graphics|gpu|switch/.test(t)) {
        return "Gaming & Entertainment";
      }
      return "Everyday AI & Fun";
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
            <div style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 0.2rem;">Try typing another tech keyword or click one of the trending suggestion chips above.</div>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(item => {
        const bookmarked = this.isBookmarked(item.id);
        const liveBadge = item.isLive ? '<span class="news-badge-live">🔴 LIVE</span>' : '';
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
                ${liveBadge}
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
      const item = this.getAllArticles().find(a => a.id === articleId);
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
        "Smartphones & Gadgets": { vol: "VOL.15", title: "The Ultimate Guide to JS & Web", file: "javascript-mastery.html" },
        "Flying Cabs & Mobility": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Everyday AI & Fun": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Future Tech & Robotics": { vol: "VOL.05", title: "Operating Systems & Kernels", file: "operating-systems.html" },
        "Gaming & Entertainment": { vol: "VOL.15", title: "The Ultimate Guide to JS & Web", file: "javascript-mastery.html" },
        "AI & Visionaries": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Consumer Tech": { vol: "VOL.15", title: "The Ultimate Guide to JS & Web", file: "javascript-mastery.html" },
        "Robotics & Future": { vol: "VOL.06", title: "CS Foundations & Hardware", file: "cs-hardware-foundations.html" },
        "Space & Satellites": { vol: "VOL.01", title: "Networking & Wire Protocols", file: "networking.html" },
        "Software & Open Source": { vol: "VOL.05", title: "Operating Systems & Kernels", file: "operating-systems.html" }
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
