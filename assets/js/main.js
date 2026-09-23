/**
 * Systems Architecture Reference Library
 * Core Interactive Scripts:
 * - Theme Toggle (Dark / Light) with system preference detection
 * - One-Click Copyable Code Snippets with touch support & clipboard fallback
 * - Reading Progress Bar with smooth scroll progress
 * - Back to Top Floating Button with Safe Area Inset support
 * - Table of Contents Scrollspy & Active Section Tracking
 * - Responsive Off-Canvas Mobile Navigation Drawer (Attached to body for clean stacking context)
 * - Dynamic Mobile TOC Bottom Sheet Quick-Jump Engine
 * - Window Resize Manager for dynamic monitor & laptop window resizing
 */

(function () {
  "use strict";

  // --- Theme Management ---
  const STORAGE_KEY = "sysref_theme_pref";
  const root = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      if (theme === "dark") {
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
        btn.setAttribute("title", "Switch to Light Theme");
        btn.setAttribute("aria-label", "Switch to Light Theme");
      } else {
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
        btn.setAttribute("title", "Switch to Dark Theme");
        btn.setAttribute("aria-label", "Switch to Dark Theme");
      }
    });
  }

  // Initialize theme immediately to avoid flash
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle button clicks
    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        const newTheme = isDark ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
      });
    });

    // --- Navigation Dropdowns (Click, Touch, Keyboard Accessibility) ---
    const navDropdowns = document.querySelectorAll(".nav-dropdown");
    navDropdowns.forEach((dropdown) => {
      const btn = dropdown.querySelector(".nav-dropdown-btn");
      if (!btn) return;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains("open");
        // Close other dropdowns
        navDropdowns.forEach((d) => {
          d.classList.remove("open");
          const b = d.querySelector(".nav-dropdown-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          dropdown.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-dropdown")) {
        navDropdowns.forEach((d) => {
          d.classList.remove("open");
          const b = d.querySelector(".nav-dropdown-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });

    // Close dropdowns on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navDropdowns.forEach((d) => {
          d.classList.remove("open");
          const b = d.querySelector(".nav-dropdown-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });

    // --- One-Click Copyable Code Snippets ---
    const copySvg = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>`;
    const checkSvg = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`;

    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const wrapper = btn.closest(".code-block-wrapper");
        if (!wrapper) return;
        const codeElement = wrapper.querySelector("pre code") || wrapper.querySelector("pre");
        if (!codeElement) return;

        const textToCopy = codeElement.innerText;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            // Fallback for non-https or local file environments
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
          }

          // Visual feedback
          btn.classList.add("copied");
          btn.innerHTML = `${checkSvg} Copied!`;

          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `${copySvg} Copy`;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy snippet: ", err);
          btn.innerText = "Error";
          setTimeout(() => {
            btn.innerHTML = `${copySvg} Copy`;
          }, 2000);
        }
      });
    });

    // --- Reading Progress Bar ---
    const progressBar = document.getElementById("reading-progress");
    window.addEventListener("scroll", () => {
      if (!progressBar) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        progressBar.style.width = `${progress}%`;
      }
    }, { passive: true });

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      }, { passive: true });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // --- Dedicated Mobile Navigation Drawer Engine ---
    // Attached directly to document.body to prevent stacking context blur trapped inside site-header
    let openNavDrawerFn = () => {};
    let closeNavDrawerFn = () => {};

    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    if (mobileMenuBtn) {
      // 1. Create or get backdrop in document.body
      let navBackdrop = document.getElementById("mobileNavBackdrop");
      if (!navBackdrop) {
        navBackdrop = document.createElement("div");
        navBackdrop.id = "mobileNavBackdrop";
        navBackdrop.className = "mobile-nav-backdrop";
        document.body.appendChild(navBackdrop);
      }

      // 2. Create dedicated drawer in document.body
      let navDrawer = document.getElementById("mobileNavDrawer");
      if (!navDrawer) {
        navDrawer = document.createElement("aside");
        navDrawer.id = "mobileNavDrawer";
        navDrawer.className = "mobile-nav-drawer";
        navDrawer.setAttribute("role", "dialog");
        navDrawer.setAttribute("aria-modal", "true");
        navDrawer.setAttribute("aria-label", "Site Navigation Curriculum");

        navDrawer.innerHTML = `
          <div class="mobile-drawer-header">
            <div class="mobile-drawer-brand">
              <div class="brand-icon" style="width:36px;height:36px;font-size:0.95rem;">SR</div>
              <div>
                <div class="mobile-drawer-title" style="display:flex;align-items:center;gap:0.4rem;">
                  <span>Systems Reference</span>
                  <span class="brand-status-tag" style="font-size:0.58rem;padding:0.1rem 0.4rem;">ONLINE</span>
                </div>
                <div class="mobile-drawer-sub">システム仕様書 &bull; 10 Volumes</div>
              </div>
            </div>
            <button class="mobile-drawer-close-btn" id="mobileDrawerCloseBtn" type="button" aria-label="Close navigation menu">✕</button>
          </div>
          <div class="mobile-drawer-body">
            <div class="mobile-drawer-group-title">⟦ OVERVIEW // 総合ポータル ⟧</div>
            <ul class="mobile-drawer-links">
              <li><a href="index.html" data-page="index.html"><span class="drawer-icon">🏛️</span> Overview Portal</a></li>
            </ul>

            <div class="mobile-drawer-group-title">⟦ PART I // 基礎システムアーキテクチャ ⟧</div>
            <ul class="mobile-drawer-links">
              <li><a href="networking.html" data-page="networking.html"><span class="drawer-icon">🌐</span> <span>Networking &amp; Wire Protocols <span class="card-kanji">[通信]</span></span></a></li>
              <li><a href="databases.html" data-page="databases.html"><span class="drawer-icon">💾</span> <span>Databases &amp; Storage Engines <span class="card-kanji">[DB]</span></span></a></li>
              <li><a href="programming-languages.html" data-page="programming-languages.html"><span class="drawer-icon">⚙️</span> <span>Programming Languages &amp; JIT <span class="card-kanji">[言語]</span></span></a></li>
              <li><a href="data-structures.html" data-page="data-structures.html"><span class="drawer-icon">🧱</span> <span>Data Structures &amp; Algorithms <span class="card-kanji">[構造]</span></span></a></li>
              <li><a href="operating-systems.html" data-page="operating-systems.html"><span class="drawer-icon">💻</span> <span>Operating Systems &amp; Kernels <span class="card-kanji">[OS]</span></span></a></li>
            </ul>

            <div class="mobile-drawer-group-title">⟦ PART II // 言語エンジン &amp; 運用基盤 ⟧</div>
            <ul class="mobile-drawer-links">
              <li><a href="git-github.html" data-page="git-github.html"><span class="drawer-icon">🌿</span> <span>Git &amp; GitHub Architecture <span class="card-kanji">[Git]</span></span></a></li>
              <li><a href="python-masterclass.html" data-page="python-masterclass.html"><span class="drawer-icon">🐍</span> <span>Python 3 Masterclass <span class="card-kanji">[Python]</span></span></a></li>
              <li><a href="python-runtime.html" data-page="python-runtime.html"><span class="drawer-icon">⚡</span> <span>CPython Runtime Internals <span class="card-kanji">[CPython]</span></span></a></li>
              <li><a href="postgresql.html" data-page="postgresql.html"><span class="drawer-icon">🐘</span> <span>PostgreSQL Zero-to-Hero <span class="card-kanji">[PostgreSQL]</span></span></a></li>
              <li><a href="java-masterclass.html" data-page="java-masterclass.html"><span class="drawer-icon">☕</span> <span>Java Masterclass Manual <span class="card-kanji">[Java]</span></span></a></li>
            </ul>
          </div>
          <div class="mobile-drawer-footer">
            <span style="font-size:0.75rem; color:var(--accent-primary); font-weight:700; letter-spacing:0.04em;">10 Volumes &bull; 100% Word-for-Word Complete</span>
          </div>
        `;
        document.body.appendChild(navDrawer);

        // Highlight active page link
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        navDrawer.querySelectorAll(".mobile-drawer-links a").forEach((a) => {
          const page = a.getAttribute("data-page");
          if (page === currentPath || (currentPath === "" && page === "index.html")) {
            a.classList.add("active");
          }
        });
      }

      const closeDrawerBtn = document.getElementById("mobileDrawerCloseBtn");

      openNavDrawerFn = function () {
        navDrawer.classList.add("active");
        navBackdrop.classList.add("active");
        document.body.classList.add("mobile-nav-open");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      };

      closeNavDrawerFn = function () {
        navDrawer.classList.remove("active");
        navBackdrop.classList.remove("active");
        document.body.classList.remove("mobile-nav-open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      };

      mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (navDrawer.classList.contains("active")) {
          closeNavDrawerFn();
        } else {
          openNavDrawerFn();
        }
      });

      if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", closeNavDrawerFn);
      }
      navBackdrop.addEventListener("click", closeNavDrawerFn);

      // Close on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navDrawer.classList.contains("active")) {
          closeNavDrawerFn();
        }
      });

      // Close when clicking any link inside drawer
      navDrawer.querySelectorAll(".mobile-drawer-links a").forEach((link) => {
        link.addEventListener("click", () => {
          closeNavDrawerFn();
        });
      });
    }

    // --- Dynamic Mobile Table of Contents (TOC) Bottom Sheet Engine ---
    let closeTocSheetFn = () => {};
    let mobileTocCurrentSpan = null;
    let mobileSheetTocLinks = [];

    const sidebarToc = document.querySelector(".sidebar-toc");
    const siteHeader = document.querySelector(".site-header");

    if (sidebarToc && siteHeader) {
      const originalTocNav = sidebarToc.querySelector(".toc-nav");
      if (originalTocNav) {
        const tocItems = Array.from(originalTocNav.querySelectorAll("li a"));

        // 1. Create and inject Sticky Mobile TOC Bar right below site-header
        const mobileTocBar = document.createElement("div");
        mobileTocBar.className = "mobile-toc-bar";
        mobileTocBar.id = "mobileTocBar";
        mobileTocBar.innerHTML = `
          <button class="mobile-toc-toggle-btn" id="mobileTocToggleBtn" type="button" aria-haspopup="dialog" aria-expanded="false" aria-label="Open Table of Contents">
            <div class="mobile-toc-lead">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span class="mobile-toc-current" id="mobileCurrentSection">Table of Contents</span>
            </div>
            <span class="mobile-toc-badge">Contents ▾</span>
          </button>
        `;
        siteHeader.insertAdjacentElement("afterend", mobileTocBar);

        mobileTocCurrentSpan = document.getElementById("mobileCurrentSection");

        // 2. Create Mobile TOC Bottom Sheet Backdrop & Modal
        const mobileTocBackdrop = document.createElement("div");
        mobileTocBackdrop.className = "mobile-toc-backdrop";
        mobileTocBackdrop.id = "mobileTocBackdrop";
        document.body.appendChild(mobileTocBackdrop);

        const mobileTocSheet = document.createElement("div");
        mobileTocSheet.className = "mobile-toc-sheet";
        mobileTocSheet.id = "mobileTocSheet";
        mobileTocSheet.setAttribute("role", "dialog");
        mobileTocSheet.setAttribute("aria-modal", "true");
        mobileTocSheet.setAttribute("aria-label", "Table of Contents");
        mobileTocSheet.innerHTML = `
          <div class="mobile-toc-sheet-drag-handle"></div>
          <div class="mobile-toc-sheet-header">
            <div class="mobile-toc-sheet-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent-primary);">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span>Table of Contents</span>
              <span class="mobile-toc-sheet-count">${tocItems.length} Sections</span>
            </div>
            <button class="mobile-toc-close-btn" id="mobileTocCloseBtn" type="button" aria-label="Close Table of Contents">✕</button>
          </div>
          <div class="mobile-toc-sheet-body" id="mobileTocSheetBody">
            <ul class="toc-nav">
              ${originalTocNav.innerHTML}
            </ul>
          </div>
        `;
        document.body.appendChild(mobileTocSheet);

        mobileSheetTocLinks = Array.from(mobileTocSheet.querySelectorAll(".toc-nav a"));

        const tocToggleBtn = document.getElementById("mobileTocToggleBtn");
        const tocCloseBtn = document.getElementById("mobileTocCloseBtn");

        function openTocSheet() {
          mobileTocSheet.classList.add("active");
          mobileTocBackdrop.classList.add("active");
          document.body.classList.add("mobile-toc-open");
          tocToggleBtn.setAttribute("aria-expanded", "true");

          const activeLink = mobileTocSheet.querySelector(".toc-nav a.active");
          if (activeLink) {
            activeLink.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        }

        closeTocSheetFn = function () {
          mobileTocSheet.classList.remove("active");
          mobileTocBackdrop.classList.remove("active");
          document.body.classList.remove("mobile-toc-open");
          tocToggleBtn.setAttribute("aria-expanded", "false");
        };

        tocToggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (mobileTocSheet.classList.contains("active")) {
            closeTocSheetFn();
          } else {
            openTocSheet();
          }
        });

        tocCloseBtn.addEventListener("click", closeTocSheetFn);
        mobileTocBackdrop.addEventListener("click", closeTocSheetFn);

        // Escape key closes TOC sheet
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && mobileTocSheet.classList.contains("active")) {
            closeTocSheetFn();
          }
        });

        // Smooth scroll to target on mobile link click with header+toc offset
        mobileSheetTocLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
              e.preventDefault();
              closeTocSheetFn();

              const targetEl = document.querySelector(targetId);
              if (targetEl) {
                const headerH = siteHeader.offsetHeight || 68;
                const tocBarH = mobileTocBar.offsetHeight || 44;
                const totalOffset = headerH + tocBarH + 12;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - totalOffset;

                window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
                });

                history.pushState(null, "", targetId);
              }
            }
          });
        });
      }
    }

    // --- Table of Contents Scrollspy & Active Section Sync ---
    const desktopTocLinks = document.querySelectorAll(".sidebar-toc .toc-nav a");
    const trackedSections = Array.from(document.querySelectorAll("section[id], h2[id], h3[id]"));

    if (desktopTocLinks.length > 0 && trackedSections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const targetHref = `#${id}`;
            let activeTitle = "";

            // Update Desktop Sidebar Links
            desktopTocLinks.forEach((link) => {
              if (link.getAttribute("href") === targetHref) {
                link.classList.add("active");
                activeTitle = link.textContent.trim();

                // Auto scroll sidebar to keep active link in view
                const sidebar = document.querySelector(".sidebar-toc");
                if (sidebar) {
                  const linkTop = link.offsetTop - sidebar.offsetTop;
                  if (linkTop < sidebar.scrollTop || linkTop > sidebar.scrollTop + sidebar.clientHeight - 80) {
                    sidebar.scrollTo({ top: linkTop - 120, behavior: "smooth" });
                  }
                }
              } else {
                link.classList.remove("active");
              }
            });

            // Update Mobile Bottom Sheet Links
            if (mobileSheetTocLinks.length > 0) {
              mobileSheetTocLinks.forEach((link) => {
                if (link.getAttribute("href") === targetHref) {
                  link.classList.add("active");
                  if (!activeTitle) activeTitle = link.textContent.trim();
                } else {
                  link.classList.remove("active");
                }
              });
            }

            // Update Sticky Mobile TOC Bar Label
            if (mobileTocCurrentSpan && activeTitle) {
              mobileTocCurrentSpan.textContent = activeTitle;
            }
          }
        });
      }, observerOptions);

      trackedSections.forEach((sec) => observer.observe(sec));
    }

    // --- Window Resize Manager for Monitors, Laptops & Mobile Transitions ---
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        // If window is resized to desktop mode (>= 992px)
        if (width >= 992) {
          closeNavDrawerFn();
        }
        if (width >= 1080) {
          // If resized to dual-column width, close mobile TOC sheet
          closeTocSheetFn();
        }
      }, 100);
    }, { passive: true });
  });
})();
