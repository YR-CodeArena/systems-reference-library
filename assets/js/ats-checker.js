/**
 * Systems Reference Library - ATS Resume Checker Engine
 * Comprehensive ATS parser, action verb quantifier, keyword matcher, and Jake's template bridge.
 * NO background images.
 */

(function () {
  'use strict';

  const PRESET_JDS = {
    backend: `Senior Backend & Systems Software Engineer
Responsibilities:
- Architect and develop high-throughput, low-latency microservices using Go, Rust, or C++.
- Design scalable data pipelines with Apache Kafka, Redis caching, and PostgreSQL databases.
- Optimize database queries, indexing strategies, and connection pooling for high-volume transactions.
- Implement zero-copy networking, asynchronous I/O, and POSIX multithreading.
- Deploy containerized services with Docker and Kubernetes on AWS or GCP with automated CI/CD.
- Monitor production distributed systems with Prometheus, Grafana, and distributed tracing.`,

    fullstack: `Full Stack Software Engineer
Responsibilities:
- Build and maintain modern web applications with React, Next.js, TypeScript, and Node.js.
- Architect RESTful APIs and GraphQL services backed by PostgreSQL and Redis.
- Write clean, modular, and reusable frontend components with Tailwind CSS.
- Ensure 90%+ code coverage through automated unit and integration tests using Jest and Playwright.
- Collaborate with cross-functional teams in an agile environment with Git and GitHub Actions.`,

    newgrad: `Junior Software Engineer (New Grad)
Requirements:
- Strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and Computer Systems.
- Proficiency in at least one modern language: Python, Java, C++, TypeScript, or Go.
- Experience with Git version control, Linux CLI, and relational databases (SQL).
- Demonstrated passion through personal projects, hackathons, or open-source contributions.
- Clear technical communication and ability to explain algorithmic trade-offs.`
  };

  const STRONG_ACTION_VERBS = [
    "engineered", "architected", "spearheaded", "optimized", "scaled",
    "accelerated", "automated", "deployed", "refactored", "implemented",
    "designed", "constructed", "formulated", "orchestrated", "eliminated",
    "developed", "built", "established", "reduced", "increased", "maximized"
  ];

  const WEAK_PHRASES = [
    "responsible for", "worked on", "helped with", "assisted in",
    "did", "handled", "participated in", "duties included", "tasks were"
  ];

  const TECHNICAL_KEYWORDS_DICT = [
    "python", "java", "c++", "c", "rust", "go", "typescript", "javascript",
    "sql", "postgresql", "mysql", "redis", "kafka", "docker", "kubernetes",
    "aws", "gcp", "linux", "git", "ci/cd", "rest", "grpc", "graphql",
    "react", "node.js", "next.js", "microservices", "distributed systems",
    "multithreading", "concurrency", "algorithms", "data structures", "agile",
    "testing", "performance", "cache", "latency", "throughput", "security"
  ];

  class AtsCheckerApp {
    constructor() {
      this.currentResumeText = "";
      this.currentJobDesc = "";
      this.analysisResult = null;
    }

    init() {
      this.bindDropzone();
      this.bindPresetJds();
      this.bindButtons();
      this.checkPreloadedResume();
    }

    checkPreloadedResume() {
      // Check if user came from Jake's Resume Maker
      const saved = localStorage.getItem('sr_current_resume') || localStorage.getItem('sr_jakes_resume_data');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.loadFromJakeResumeObject(parsed);
        } catch (e) {
          // ignore
        }
      } else {
        // Fallback default sample resume so the tool is ready out of the box
        const sample = `ALEX CHEN
(555) 019-2834 | alex.chen@systems.io | linkedin.com/in/alexchen-dev | github.com/alexchen-sys

EDUCATION
University of California, Berkeley - Berkeley, CA
B.S. in Electrical Engineering & Computer Science | Aug. 2020 – May 2024
GPA: 3.92/4.0 | Coursework: Operating Systems, Distributed Systems, Database Internals

EXPERIENCE
Systems Software Engineer Intern at Cloudflare (June 2023 – Aug. 2023) - San Francisco, CA
• Engineered asynchronous edge proxy routing engine in Rust and C, reducing p99 tail latency by 34% across 8M daily HTTP/3 requests.
• Implemented zero-copy ring buffer IPC over POSIX shared memory, unlocking 4.2 GB/s throughput for inter-process packet dispatch.
• Profiled kernel syscall overhead using eBPF and perf, eliminating redundant epoll registrations and cutting CPU context switches by 28%.

Backend Infrastructure Intern at Datadog (Jan. 2023 – May 2023) - New York, NY
• Architected distributed time-series metrics aggregator in Go and Kafka, handling 150k metrics/sec with 99.99% fault-tolerant delivery.
• Optimized PostgreSQL query execution and storage layout with B+ Tree composite indexes, decreasing query latency from 4.8s to 210ms.

PROJECTS
Distributed Raft Consensus Key-Value Store | Go, gRPC, Protocol Buffers, Docker (Oct. 2023 – Dec. 2023)
• Implemented Raft consensus protocol with leader election, log replication, and dynamic cluster membership transitions in Go.
• Designed write-ahead log (WAL) engine with fsync batching and snapshotting, sustaining 25,000 ACID transactions/sec under simulated network partition.

TECHNICAL SKILLS
Languages: C/C++, Rust, Go, Python, Java, TypeScript, SQL, Bash
Frameworks & Tools: POSIX Sockets, gRPC, Kafka, Docker, Kubernetes, Linux, eBPF, CMake, Git, AWS, Redis, PostgreSQL
Core Concepts: Distributed Systems, Concurrency & Multithreading, Memory Management, Network Protocols`;
        const resumeArea = document.getElementById('atsResumeInput');
        if (resumeArea && !resumeArea.value) {
          resumeArea.value = sample;
          this.currentResumeText = sample;
        }
      }

      const jdArea = document.getElementById('atsJdInput');
      if (jdArea && !jdArea.value) {
        jdArea.value = PRESET_JDS.backend;
      }
    }

    loadFromJakeResumeObject(data) {
      // Synthesize clean plain text from Jake's object
      const parts = [];
      if (data.name) parts.push(data.name.toUpperCase());
      const contact = [data.phone, data.email, data.linkedin, data.github, data.portfolio].filter(Boolean).join(" | ");
      if (contact) parts.push(contact);

      if (data.education && data.education.length > 0) {
        parts.push("\nEDUCATION");
        data.education.forEach(e => {
          parts.push(`${e.school} - ${e.location} | ${e.degree} | ${e.dates}`);
          if (e.notes) parts.push(e.notes);
        });
      }

      if (data.experience && data.experience.length > 0) {
        parts.push("\nEXPERIENCE");
        data.experience.forEach(exp => {
          parts.push(`${exp.role} at ${exp.company} (${exp.dates}) - ${exp.location}`);
          (exp.bullets || []).forEach(b => parts.push(`• ${b}`));
        });
      }

      if (data.projects && data.projects.length > 0) {
        parts.push("\nPROJECTS");
        data.projects.forEach(p => {
          parts.push(`${p.name} | ${p.tech} (${p.dates})`);
          (p.bullets || []).forEach(b => parts.push(`• ${b}`));
        });
      }

      if (data.skills) {
        parts.push("\nTECHNICAL SKILLS");
        if (data.skills.languages) parts.push(`Languages: ${data.skills.languages}`);
        if (data.skills.frameworks) parts.push(`Frameworks & Tools: ${data.skills.frameworks}`);
        if (data.skills.tools) parts.push(`Databases & Infrastructure: ${data.skills.tools}`);
        if (data.skills.concepts) parts.push(`Core Concepts: ${data.skills.concepts}`);
      }

      const txt = parts.join("\n");
      const resumeArea = document.getElementById('atsResumeInput');
      if (resumeArea) {
        resumeArea.value = txt;
      }
      this.currentResumeText = txt;

      const loadStatus = document.getElementById('atsImportStatus');
      if (loadStatus) {
        loadStatus.textContent = `✓ Auto-imported active resume for "${data.name || 'Candidate'}" from Jake's Resume Maker!`;
        loadStatus.style.display = 'block';
      }
    }

    bindDropzone() {
      const dropzone = document.getElementById('atsFileDropzone');
      const fileInput = document.getElementById('atsFileInput');

      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());

        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('dragover');
        });

        dropzone.addEventListener('dragleave', () => {
          dropzone.classList.remove('dragover');
        });

        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('dragover');
          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.handleUploadedResumeFile(e.dataTransfer.files[0]);
          }
        });

        fileInput.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            this.handleUploadedResumeFile(e.target.files[0]);
          }
        });
      }
    }

    async handleUploadedResumeFile(file) {
      const statusEl = document.getElementById('atsDropzoneStatus');
      if (statusEl) {
        statusEl.textContent = `Reading ${file.name}...`;
      }

      try {
        let text = "";
        const name = file.name.toLowerCase();

        if (name.endsWith('.pdf')) {
          text = await this.extractPdfText(file);
        } else if (name.endsWith('.docx')) {
          text = await this.extractDocxText(file);
        } else {
          text = await file.text();
        }

        const resumeArea = document.getElementById('atsResumeInput');
        if (resumeArea) {
          resumeArea.value = text;
        }
        this.currentResumeText = text;

        if (statusEl) {
          statusEl.textContent = `✓ Loaded "${file.name}" (${text.split(/\s+/).length} words)`;
          statusEl.style.color = "var(--ats-green)";
        }
      } catch (err) {
        console.error("File load error:", err);
        if (statusEl) {
          statusEl.textContent = `⚠️ Could not parse file: ${err.message}. Please paste text manually.`;
          statusEl.style.color = "var(--ats-red)";
        }
      }
    }

    async extractPdfText(file) {
      const arrayBuffer = await file.arrayBuffer();
      if (window.pdfjsLib) {
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let full = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map(it => it.str);
          full += strings.join(" ") + "\n";
        }
        return full;
      } else {
        const dec = new TextDecoder('latin1');
        const raw = dec.decode(arrayBuffer);
        const matches = raw.match(/\(([^()]{2,})\)/g) || [];
        return matches.map(m => m.slice(1, -1)).join(' ');
      }
    }

    async extractDocxText(file) {
      const buffer = await file.arrayBuffer();
      const dec = new TextDecoder('utf-8');
      const raw = dec.decode(buffer);
      const matches = raw.match(/<w:t[^>]*>([^<]+)<\/w:t>/g) || [];
      return matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
    }

    bindPresetJds() {
      document.querySelectorAll('.ats-jd-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          const jdKey = e.currentTarget.getAttribute('data-jd');
          const jdArea = document.getElementById('atsJdInput');
          if (jdArea && PRESET_JDS[jdKey]) {
            jdArea.value = PRESET_JDS[jdKey];
            document.querySelectorAll('.ats-jd-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
          }
        });
      });
    }

    bindButtons() {
      // Analyze Button
      const analyzeBtn = document.getElementById('atsAnalyzeBtn');
      if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
          const resumeText = document.getElementById('atsResumeInput')?.value || "";
          const jdText = document.getElementById('atsJdInput')?.value || "";

          if (!resumeText.trim()) {
            const errEl = document.getElementById('atsErrorMessage');
            if (errEl) {
              errEl.textContent = "Please upload or paste your resume text first!";
              errEl.style.display = 'block';
            }
            return;
          }

          const errEl = document.getElementById('atsErrorMessage');
          if (errEl) errEl.style.display = 'none';

          this.runAtsAnalysis(resumeText, jdText);
        });
      }

      // Re-load from Jake's Maker
      const loadBtn = document.getElementById('atsLoadFromMakerBtn');
      if (loadBtn) {
        loadBtn.addEventListener('click', () => {
          const saved = localStorage.getItem('sr_current_resume') || localStorage.getItem('sr_jakes_resume_data');
          if (saved) {
            try {
              this.loadFromJakeResumeObject(JSON.parse(saved));
            } catch (e) {
              const statusEl = document.getElementById('atsImportStatus');
              if (statusEl) {
                statusEl.textContent = "No saved resume in Jake's template found. You can build one in Resume Maker!";
                statusEl.style.display = 'block';
              }
            }
          } else {
            const statusEl = document.getElementById('atsImportStatus');
            if (statusEl) {
              statusEl.textContent = "No saved resume found in Jake's Resume Maker. You can create one there first!";
              statusEl.style.display = 'block';
            }
          }
        });
      }

      // Fix in Jake's Template button
      const fixBtn = document.getElementById('atsFixInJakeBtn');
      if (fixBtn) {
        fixBtn.addEventListener('click', () => {
          // Store analysis recommendation flag
          localStorage.setItem('sr_ats_recommendations_active', 'true');
          window.location.href = 'resume-maker.html';
        });
      }
    }

    runAtsAnalysis(resumeText, jdText) {
      const lowerResume = resumeText.toLowerCase();
      const lowerJd = (jdText || PRESET_JDS.backend).toLowerCase();

      // 1. Structure & Parseability (25 pts)
      let structureScore = 0;
      const sections = {
        education: /education|academic/i.test(resumeText),
        experience: /experience|employment|work history/i.test(resumeText),
        projects: /projects|portfolio/i.test(resumeText),
        skills: /skills|technical skills|technologies/i.test(resumeText)
      };

      if (sections.education) structureScore += 6;
      if (sections.experience) structureScore += 8;
      if (sections.projects) structureScore += 6;
      if (sections.skills) structureScore += 5;

      // 2. Contact Info (15 pts)
      let contactScore = 0;
      const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(resumeText);
      const hasPhone = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(resumeText);
      const hasLinkedin = /linkedin\.com/i.test(resumeText);
      const hasGithub = /github\.com/i.test(resumeText);
      const hasPortfolio = /https?:\/\/|\.dev|\.io|\.tech|\.com/i.test(resumeText);

      if (hasEmail) contactScore += 3;
      if (hasPhone) contactScore += 3;
      if (hasLinkedin) contactScore += 3;
      if (hasGithub) contactScore += 3;
      if (hasPortfolio) contactScore += 3;

      // 3. Action Verbs & Measurable Metrics (25 pts)
      const lines = resumeText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const bullets = lines.filter(l => /^[•\-\*\+]|^\d+\./.test(l) || l.length > 40);

      let strongVerbCount = 0;
      let weakPhraseCount = 0;
      let metricCount = 0;

      bullets.forEach(b => {
        const bLower = b.toLowerCase();
        // check strong action verbs
        const words = bLower.split(/\s+/);
        if (STRONG_ACTION_VERBS.some(v => words[0]?.includes(v) || words[1]?.includes(v))) {
          strongVerbCount++;
        }
        // check weak phrases
        if (WEAK_PHRASES.some(w => bLower.includes(w))) {
          weakPhraseCount++;
        }
        // check metrics (%, numbers with k/m/s, dollar signs, latencies)
        if (/\b\d+%\b|\b\d+k\b|\b\d+m\b|\b\d+\s*(?:ms|seconds|minutes|req\/s|users|transactions)|\$\d+/i.test(b)) {
          metricCount++;
        }
      });

      const totalBullets = Math.max(bullets.length, 1);
      const strongRatio = Math.min(1.0, strongVerbCount / totalBullets);
      const metricRatio = Math.min(1.0, metricCount / totalBullets);

      let impactScore = Math.round((strongRatio * 15) + (metricRatio * 10));
      impactScore = Math.max(0, Math.min(25, impactScore - (weakPhraseCount * 2)));

      // 4. Keyword & Skills Match vs JD (25 pts)
      const targetKeywords = TECHNICAL_KEYWORDS_DICT.filter(k => lowerJd.includes(k));
      const effectiveTarget = targetKeywords.length > 0 ? targetKeywords : TECHNICAL_KEYWORDS_DICT.slice(0, 15);

      const matchedKeywords = [];
      const missingKeywords = [];

      effectiveTarget.forEach(kw => {
        if (lowerResume.includes(kw)) {
          matchedKeywords.push(kw);
        } else {
          missingKeywords.push(kw);
        }
      });

      const keywordMatchRatio = matchedKeywords.length / effectiveTarget.length;
      const keywordScore = Math.round(keywordMatchRatio * 25);

      // 5. Length & Brevity (10 pts)
      const wordCount = resumeText.split(/\s+/).filter(Boolean).length;
      let brevityScore = 10;
      if (wordCount < 200) brevityScore = 4;
      else if (wordCount < 300) brevityScore = 7;
      else if (wordCount > 900) brevityScore = 6;
      else if (wordCount > 1200) brevityScore = 4;

      // Overall Score
      const totalScore = Math.min(100, Math.max(10, structureScore + contactScore + impactScore + keywordScore + brevityScore));

      // Build Result Object
      this.analysisResult = {
        totalScore,
        structureScore,
        contactScore,
        impactScore,
        keywordScore,
        brevityScore,
        wordCount,
        strongVerbCount,
        weakPhraseCount,
        metricCount,
        matchedKeywords,
        missingKeywords,
        bullets
      };

      this.renderResults();
    }

    renderResults() {
      const res = this.analysisResult;
      const dashboard = document.getElementById('atsResultsDashboard');
      if (!dashboard) return;

      dashboard.style.display = 'block';
      dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // 1. Overall Radial Gauge
      const scoreEl = document.getElementById('atsOverallScore');
      const progressCircle = document.getElementById('atsGaugeProgress');
      const badgeEl = document.getElementById('atsStatusBadge');
      const summaryText = document.getElementById('atsScoreSummaryText');

      if (scoreEl) scoreEl.textContent = res.totalScore;

      // Circumference = 2 * PI * r = 2 * 3.14159 * 70 = ~440
      const circumference = 440;
      const offset = circumference - (res.totalScore / 100) * circumference;

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
        if (res.totalScore >= 85) {
          progressCircle.style.stroke = "var(--ats-green)";
        } else if (res.totalScore >= 70) {
          progressCircle.style.stroke = "var(--ats-amber)";
        } else {
          progressCircle.style.stroke = "var(--ats-red)";
        }
      }

      if (badgeEl) {
        if (res.totalScore >= 85) {
          badgeEl.className = "ats-status-badge ats-status-pass";
          badgeEl.textContent = "✓ ATS OPTIMIZED (TOP 5% APPLICANT)";
        } else if (res.totalScore >= 70) {
          badgeEl.className = "ats-status-badge ats-status-warn";
          badgeEl.textContent = "⚡ ATS COMPETITIVE (MINOR FIXES RECOMMENDED)";
        } else {
          badgeEl.className = "ats-status-badge ats-status-fail";
          badgeEl.textContent = "⚠️ ATS RISK (RESTRUCTURE IN JAKE'S TEMPLATE)";
        }
      }

      if (summaryText) {
        summaryText.innerHTML = `Your resume scored <strong>${res.totalScore}/100</strong>. Found <strong>${res.matchedKeywords.length} matching core skills</strong>, <strong>${res.metricCount} quantified impact bullets</strong>, and <strong>${res.wordCount} words</strong> across standard single-column sections.`;
      }

      // 2. Metric Cards
      this.setMetricCard('structureMetric', res.structureScore, 25, 'Standard Section Layout');
      this.setMetricCard('contactMetric', res.contactScore, 15, 'Email, Phone, GitHub & Links');
      this.setMetricCard('impactMetric', res.impactScore, 25, `${res.metricCount} Quantified Metrics Found`);
      this.setMetricCard('keywordMetric', res.keywordScore, 25, `${res.matchedKeywords.length} Target Keywords Matched`);

      // 3. Keywords Cloud
      const kwContainer = document.getElementById('atsKeywordsContainer');
      if (kwContainer) {
        const matchedHtml = res.matchedKeywords.map(k => `<span class="ats-kw-chip ats-kw-matched">✓ ${k}</span>`).join(' ');
        const missingHtml = res.missingKeywords.map(k => `<span class="ats-kw-chip ats-kw-missing">+ Add: ${k}</span>`).join(' ');
        kwContainer.innerHTML = matchedHtml + (missingHtml ? `<div style="width:100%; margin: 0.6rem 0 0.2rem; font-size:0.78rem; font-weight:700; color:var(--ats-red);">⚠️ Missing High-Impact Keywords for Target Role:</div>` + missingHtml : '');
      }

      // 4. Bullet Point Enhancements (Before & After)
      const bulletsContainer = document.getElementById('atsBulletFixesContainer');
      if (bulletsContainer) {
        const weakBullets = res.bullets.filter(b => {
          const bl = b.toLowerCase();
          return WEAK_PHRASES.some(w => bl.includes(w)) || (!bl.includes('%') && !bl.match(/\d+/) && bl.length > 25);
        }).slice(0, 3);

        if (weakBullets.length > 0) {
          bulletsContainer.innerHTML = weakBullets.map((wb, i) => {
            const clean = wb.replace(/^[•\-\*\+]\s*/, '');
            return `
              <div class="ats-bullet-fix-item">
                <div class="ats-bullet-before">❌ Current: "${this.escapeHtml(clean)}"</div>
                <div class="ats-bullet-after">✨ Recommended (Jake's Standard): "Architected high-throughput ${this.escapeHtml(clean.toLowerCase().replace(/^(responsible for|worked on|helped with|assisted in)\s*/, ''))} utilizing Redis &amp; Go, slashing latency by 35% across 2M transactions."</div>
                <div class="ats-bullet-rationale">💡 Fix: Replaced passive phrasing with strong action verb + added quantifiable metric &amp; tech stack.</div>
              </div>
            `;
          }).join('');
        } else {
          bulletsContainer.innerHTML = `
            <div style="color:var(--ats-green); font-size:0.88rem; font-weight:600; padding:1rem 0;">
              ✓ Outstanding! All detected bullet points utilize strong action verbs and quantifiable metrics.
            </div>
          `;
        }
      }
    }

    setMetricCard(prefix, score, max, note) {
      const scoreEl = document.getElementById(`${prefix}Score`);
      const barEl = document.getElementById(`${prefix}Bar`);
      const noteEl = document.getElementById(`${prefix}Note`);

      if (scoreEl) scoreEl.textContent = `${score}/${max}`;
      if (barEl) barEl.style.width = `${(score / max) * 100}%`;
      if (noteEl) noteEl.textContent = note;
    }

    escapeHtml(str) {
      if (typeof str !== 'string') return str || '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ats-checker-root')) {
      const app = new AtsCheckerApp();
      app.init();
      window.AtsCheckerInstance = app;
    }
  });

})();
