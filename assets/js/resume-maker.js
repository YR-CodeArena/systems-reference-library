/**
 * Systems Reference Library - Jake's Resume Maker Engine
 * Interactive form builder, live Jake's LaTeX-faithful preview, PDF upload parser, LaTeX generator.
 * NO background images.
 */

(function () {
  'use strict';

  // Preset Data Sets
  const PRESETS = {
    systems: {
      name: "Alex Chen",
      phone: "(555) 019-2834",
      email: "alex.chen@systems.io",
      linkedin: "linkedin.com/in/alexchen-dev",
      github: "github.com/alexchen-sys",
      portfolio: "alexchen.dev",
      education: [
        {
          school: "University of California, Berkeley",
          location: "Berkeley, CA",
          degree: "B.S. in Electrical Engineering & Computer Science",
          dates: "Aug. 2020 – May 2024",
          notes: "GPA: 3.92/4.0 | Coursework: Operating Systems, Distributed Systems, Computer Architecture, Database Internals"
        }
      ],
      experience: [
        {
          role: "Systems Software Engineer Intern",
          company: "Cloudflare",
          location: "San Francisco, CA",
          dates: "June 2023 – Aug. 2023",
          bullets: [
            "Engineered asynchronous edge proxy routing engine in Rust and C, reducing p99 tail latency by 34% across 8M daily HTTP/3 requests.",
            "Implemented zero-copy ring buffer IPC over POSIX shared memory, unlocking 4.2 GB/s throughput for inter-process packet dispatch.",
            "Profiled kernel syscall overhead using eBPF and perf, eliminating redundant epoll registrations and cutting CPU context switches by 28%."
          ]
        },
        {
          role: "Backend Infrastructure Intern",
          company: "Datadog",
          location: "New York, NY",
          dates: "Jan. 2023 – May 2023",
          bullets: [
            "Architected distributed time-series metrics aggregator in Go and Kafka, handling 150k metrics/sec with 99.99% fault-tolerant delivery.",
            "Optimized PostgreSQL query execution and storage layout with B+ Tree composite indexes, decreasing query latency from 4.8s to 210ms.",
            "Constructed automated CI/CD load testing pipeline with k6 and Docker, simulating 50k concurrent virtual users."
          ]
        }
      ],
      projects: [
        {
          name: "Distributed Raft Consensus Key-Value Store",
          tech: "Go, gRPC, Protocol Buffers, Docker",
          linkText: "GitHub",
          linkUrl: "https://github.com",
          dates: "Oct. 2023 – Dec. 2023",
          bullets: [
            "Implemented Raft consensus protocol with leader election, log replication, and dynamic cluster membership transitions in Go.",
            "Designed write-ahead log (WAL) engine with fsync batching and snapshotting, sustaining 25,000 ACID transactions/sec under simulated network partition."
          ]
        },
        {
          name: "High-Performance C++ HTTP/1.1 Web Server",
          tech: "C++20, Linux epoll, POSIX Sockets, CMake",
          linkText: "GitHub",
          linkUrl: "https://github.com",
          dates: "Feb. 2023 – Apr. 2023",
          bullets: [
            "Built non-blocking event-driven web server leveraging Linux epoll and thread pool, achieving 180,000 req/s on standard quad-core benchmark.",
            "Engineered custom fixed-size memory pool allocator, eliminating heap fragmentation and reducing allocation latency by 65%."
          ]
        }
      ],
      skills: {
        languages: "C/C++, Rust, Go, Python, Java, TypeScript, SQL, Bash",
        frameworks: "POSIX Sockets, gRPC, Kafka, Docker, Kubernetes, Linux, eBPF, CMake",
        tools: "Git, AWS (EC2, S3), Redis, PostgreSQL, GDB, Valgrind, perf, Linux CLI",
        concepts: "Distributed Systems, Concurrency & Multithreading, Memory Management, Network Protocols"
      }
    },
    fullstack: {
      name: "Marcus Vance",
      phone: "(555) 342-9180",
      email: "marcus.vance@techdev.net",
      linkedin: "linkedin.com/in/marcusvance",
      github: "github.com/mvance-fullstack",
      portfolio: "marcusvance.io",
      education: [
        {
          school: "Georgia Institute of Technology",
          location: "Atlanta, GA",
          degree: "B.S. in Computer Science (Concentration in Systems & Info)",
          dates: "Aug. 2019 – Dec. 2023",
          notes: "GPA: 3.85/4.0 | Dean's List (All Semesters)"
        }
      ],
      experience: [
        {
          role: "Full Stack Software Engineer",
          company: "FinTech Scaleup",
          location: "San Francisco, CA",
          dates: "Jan. 2024 – Present",
          bullets: [
            "Architected real-time payment reconciliation dashboard using React, Next.js, and Node.js, servicing 40,000 active business merchants.",
            "Engineered event-driven microservices with RabbitMQ and Redis caching, cutting checkout checkout API response time from 650ms to 95ms.",
            "Designed end-to-end automated testing suite with Playwright and Jest, increasing code coverage from 62% to 94% across core checkout flows."
          ]
        },
        {
          role: "Frontend Engineer Intern",
          company: "SaaS Enterprise",
          location: "Remote",
          dates: "May 2023 – Aug. 2023",
          bullets: [
            "Developed responsive data visualization modules using TypeScript and D3.js, rendering 100k data points with 60 FPS fluid interactions.",
            "Migrated legacy monolithic UI components to atomic design system with Tailwind CSS, reducing bundle size by 38%."
          ]
        }
      ],
      projects: [
        {
          name: "Collaborative Code Editor & Sandbox",
          tech: "TypeScript, React, WebSockets, WebAssembly, Node.js",
          linkText: "Live Demo",
          linkUrl: "https://github.com",
          dates: "Sept. 2023 – Dec. 2023",
          bullets: [
            "Built Google Docs-style real-time collaborative code editor supporting CRDTs (Conflict-free Replicated Data Types) with <15ms latency.",
            "Integrated isolated WebAssembly JavaScript runner allowing users to execute untrusted code safely client-side in sub-milliseconds."
          ]
        }
      ],
      skills: {
        languages: "TypeScript, JavaScript, Python, Go, SQL, HTML5/CSS3",
        frameworks: "React, Next.js, Node.js, Express, FastAPI, Tailwind CSS, Jest, Playwright",
        tools: "Docker, PostgreSQL, Redis, RabbitMQ, Git, GitHub Actions, AWS, Vercel",
        concepts: "REST APIs, GraphQL, Microservices, CI/CD Pipelines, System Architecture"
      }
    },
    newgrad: {
      name: "David Kim",
      phone: "(555) 782-1144",
      email: "david.kim.cs@gmail.com",
      linkedin: "linkedin.com/in/davidkim-cs",
      github: "github.com/dkim-code",
      portfolio: "davidkim.tech",
      education: [
        {
          school: "University of Washington",
          location: "Seattle, WA",
          degree: "B.S. in Computer Science",
          dates: "Sept. 2021 – June 2025 (Expected)",
          notes: "GPA: 3.88/4.0 | Coursework: Algorithms, Web Systems, Systems Programming, Machine Learning"
        }
      ],
      experience: [
        {
          role: "Software Engineering Fellow",
          company: "Major League Hacking (MLH)",
          location: "Remote",
          dates: "June 2024 – Aug. 2024",
          bullets: [
            "Collaborated with 4 fellows on open-source distributed tracing libraries, authoring 18 merged pull requests to OpenTelemetry repositories.",
            "Identified and patched memory leak in Go trace collector, improving memory efficiency by 22% during peak stress benchmarks."
          ]
        }
      ],
      projects: [
        {
          name: "NeetCode 250 Interactive Algorithm Visualizer",
          tech: "JavaScript, HTML5 Canvas, CSS Grid, Algorithms",
          linkText: "GitHub",
          linkUrl: "https://github.com",
          dates: "Jan. 2024 – Mar. 2024",
          bullets: [
            "Created interactive algorithm step-by-step visualizer for 18 core interview patterns, including Two Pointers, Graph BFS/DFS, and Dynamic Programming.",
            "Implemented variable execution speed controls and custom memory stack diagram rendering with zero external charting libraries."
          ]
        },
        {
          name: "Smart Resume ATS Scanner & Parser",
          tech: "Python, FastAPI, Regex, PDF Parsing, Tailwind CSS",
          linkText: "Live App",
          linkUrl: "https://github.com",
          dates: "Oct. 2023 – Dec. 2023",
          bullets: [
            "Developed rule-based ATS resume scoring engine comparing resume keyword density against job descriptions with 96% classification accuracy.",
            "Engineered fast text tokenization pipeline processing standard multi-page PDFs in under 120ms."
          ]
        }
      ],
      skills: {
        languages: "Python, Java, C++, JavaScript, TypeScript, SQL",
        frameworks: "FastAPI, React, Node.js, Spring Boot, Git",
        tools: "Docker, Linux, PostgreSQL, GitHub Actions, Postman",
        concepts: "Data Structures & Algorithms, Object-Oriented Design, Agile Methodology"
      }
    }
  };

  const ACTION_VERBS = [
    "Engineered", "Architected", "Spearheaded", "Optimized", "Scaled", 
    "Accelerated", "Automated", "Deployed", "Refactored", "Implemented", 
    "Designed", "Constructed", "Formulated", "Orchestrated", "Eliminated"
  ];

  class ResumeMakerApp {
    constructor() {
      this.state = this.loadInitialState();
      this.zoomLevel = 1.0;
      this.fontFamily = "serif"; // "serif" or "sans"
    }

    loadInitialState() {
      const saved = localStorage.getItem('sr_jakes_resume_data');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.warn("Could not parse saved resume, loading default preset", e);
        }
      }
      return JSON.parse(JSON.stringify(PRESETS.systems));
    }

    saveState() {
      localStorage.setItem('sr_jakes_resume_data', JSON.stringify(this.state));
      // Also update cross-page sync for ATS checker
      localStorage.setItem('sr_current_resume', JSON.stringify(this.state));
    }

    init() {
      this.bindToolbar();
      this.bindPresets();
      this.bindUploadDropzone();
      this.populateForm();
      this.bindFormEvents();
      this.renderJakeResume();
    }

    bindToolbar() {
      // Print / PDF Button
      const printBtn = document.getElementById('rmPrintPdfBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }

      // LaTeX Export Button
      const latexBtn = document.getElementById('rmExportLatexBtn');
      if (latexBtn) {
        latexBtn.addEventListener('click', () => this.openLatexModal());
      }

      // ATS Checker Bridge Button
      const atsBtn = document.getElementById('rmCheckAtsBtn');
      if (atsBtn) {
        atsBtn.addEventListener('click', () => {
          this.saveState();
          window.location.href = 'ats-checker.html';
        });
      }

      // Reset / Clear Button
      const resetBtn = document.getElementById('rmResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm("Reset resume to empty template? All unsaved edits will be cleared.")) {
            this.state = {
              name: "",
              phone: "",
              email: "",
              linkedin: "",
              github: "",
              portfolio: "",
              education: [],
              experience: [],
              projects: [],
              skills: { languages: "", frameworks: "", tools: "", concepts: "" }
            };
            this.saveState();
            this.populateForm();
            this.renderJakeResume();
          }
        });
      }

      // View switcher for mobile
      const editViewBtn = document.getElementById('rmViewEdit');
      const previewViewBtn = document.getElementById('rmViewPreview');
      const workspace = document.querySelector('.rm-workspace');

      if (editViewBtn && previewViewBtn && workspace) {
        editViewBtn.addEventListener('click', () => {
          workspace.classList.remove('show-preview');
          editViewBtn.classList.add('active');
          previewViewBtn.classList.remove('active');
        });
        previewViewBtn.addEventListener('click', () => {
          workspace.classList.add('show-preview');
          previewViewBtn.classList.add('active');
          editViewBtn.classList.remove('active');
        });
      }

      // Zoom Controls
      const zoomInBtn = document.getElementById('rmZoomIn');
      const zoomOutBtn = document.getElementById('rmZoomOut');
      const zoomResetBtn = document.getElementById('rmZoomReset');
      const sheet = document.getElementById('jakeResumeSheet');

      if (zoomInBtn && zoomOutBtn && zoomResetBtn && sheet) {
        zoomInBtn.addEventListener('click', () => {
          this.zoomLevel = Math.min(1.4, this.zoomLevel + 0.1);
          sheet.style.transform = `scale(${this.zoomLevel})`;
        });
        zoomOutBtn.addEventListener('click', () => {
          this.zoomLevel = Math.max(0.6, this.zoomLevel - 0.1);
          sheet.style.transform = `scale(${this.zoomLevel})`;
        });
        zoomResetBtn.addEventListener('click', () => {
          this.zoomLevel = 1.0;
          sheet.style.transform = `scale(1)`;
        });
      }

      // Font Toggle (Classic Serif vs Modern Sans)
      const fontToggleBtn = document.getElementById('rmFontToggle');
      if (fontToggleBtn && sheet) {
        fontToggleBtn.addEventListener('click', () => {
          if (this.fontFamily === "serif") {
            this.fontFamily = "sans";
            sheet.classList.add('font-sans');
            fontToggleBtn.textContent = "Font: Clean Sans";
          } else {
            this.fontFamily = "serif";
            sheet.classList.remove('font-sans');
            fontToggleBtn.textContent = "Font: Jake's Serif";
          }
        });
      }
    }

    bindPresets() {
      document.querySelectorAll('.rm-preset-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          const presetKey = e.currentTarget.getAttribute('data-preset');
          if (PRESETS[presetKey]) {
            this.state = JSON.parse(JSON.stringify(PRESETS[presetKey]));
            this.saveState();
            this.populateForm();
            this.renderJakeResume();

            document.querySelectorAll('.rm-preset-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
          }
        });
      });
    }

    bindUploadDropzone() {
      const dropzone = document.getElementById('rmUploadDropzone');
      const fileInput = document.getElementById('rmResumeFileInput');
      const uploadBtn = document.getElementById('rmUploadTriggerBtn');
      const pasteTriggerBtn = document.getElementById('rmPasteTriggerBtn');

      if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => fileInput.click());
      }

      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) this.handleUploadedFile(file);
        });
      }

      if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('drag-over');
        });
        dropzone.addEventListener('dragleave', () => {
          dropzone.classList.remove('drag-over');
        });
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('drag-over');
          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.handleUploadedFile(e.dataTransfer.files[0]);
          }
        });
      }

      if (pasteTriggerBtn) {
        pasteTriggerBtn.addEventListener('click', () => {
          this.openPasteResumeModal();
        });
      }
    }

    async handleUploadedFile(file) {
      const dropzoneStatus = document.getElementById('rmUploadStatus');
      if (dropzoneStatus) {
        dropzoneStatus.textContent = `Analyzing & converting "${file.name}" to Jake's Template...`;
        dropzoneStatus.style.color = "var(--rm-accent-cyan)";
      }

      const fileName = file.name.toLowerCase();
      try {
        let textContent = "";

        if (fileName.endsWith('.json')) {
          const jsonText = await file.text();
          const parsedJson = JSON.parse(jsonText);
          this.applyParsedJson(parsedJson);
          return;
        } else if (fileName.endsWith('.txt') || fileName.endsWith('.md')) {
          textContent = await file.text();
        } else if (fileName.endsWith('.pdf')) {
          textContent = await this.extractTextFromPdf(file);
        } else if (fileName.endsWith('.docx')) {
          textContent = await this.extractTextFromDocx(file);
        } else {
          // Fallback text read
          textContent = await file.text();
        }

        if (textContent.trim()) {
          this.parseAndApplyRawResumeText(textContent, file.name);
        } else {
          throw new Error("No readable text found in document.");
        }
      } catch (err) {
        console.error("Upload error:", err);
        if (dropzoneStatus) {
          dropzoneStatus.textContent = `⚠️ Error parsing file: ${err.message}. Try "Paste Text" instead!`;
          dropzoneStatus.style.color = "#ff4444";
        }
      }
    }

    async extractTextFromPdf(file) {
      // Use PDF.js if available on window, or fast client-side stream reader
      const arrayBuffer = await file.arrayBuffer();
      if (window.pdfjsLib) {
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageStrings = textContent.items.map(item => item.str);
          fullText += pageStrings.join(" ") + "\n";
        }
        return fullText;
      } else {
        // Fallback: decode text chunks from buffer
        const dec = new TextDecoder('latin1');
        const raw = dec.decode(arrayBuffer);
        const matches = raw.match(/\(([^()]{2,})\)/g) || [];
        return matches.map(m => m.slice(1, -1)).join(' ');
      }
    }

    async extractTextFromDocx(file) {
      const buffer = await file.arrayBuffer();
      const dec = new TextDecoder('utf-8');
      const raw = dec.decode(buffer);
      // Fast XML regex stripper for docx word/document.xml chunks
      const matches = raw.match(/<w:t[^>]*>([^<]+)<\/w:t>/g) || [];
      return matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
    }

    parseAndApplyRawResumeText(rawText, sourceName = "Uploaded Resume") {
      const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) return;

      const parsed = {
        name: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        portfolio: "",
        education: [],
        experience: [],
        projects: [],
        skills: { languages: "", frameworks: "", tools: "", concepts: "" }
      };

      // 1. Contact Info Extraction
      const fullText = rawText;
      const emailMatch = fullText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) parsed.email = emailMatch[0];

      const phoneMatch = fullText.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
      if (phoneMatch) parsed.phone = phoneMatch[0];

      const linkedinMatch = fullText.match(/(?:linkedin\.com\/in\/|linkedin:\s*)([a-zA-Z0-9\-_]+)/i);
      if (linkedinMatch) parsed.linkedin = `linkedin.com/in/${linkedinMatch[1]}`;

      const githubMatch = fullText.match(/(?:github\.com\/|github:\s*)([a-zA-Z0-9\-_]+)/i);
      if (githubMatch) parsed.github = `github.com/${githubMatch[1]}`;

      // Name guess: first non-empty line that isn't email, phone, or generic heading
      for (const line of lines.slice(0, 5)) {
        if (!line.includes('@') && !line.match(/\d{3}/) && line.length < 40 && !/resume|curriculum|cv/i.test(line)) {
          parsed.name = line;
          break;
        }
      }
      if (!parsed.name) parsed.name = "Candidate Name";

      // 2. Section Partitioning
      let currentSection = "";
      const sectionBuckets = {
        education: [],
        experience: [],
        projects: [],
        skills: []
      };

      lines.forEach(line => {
        const lower = line.toLowerCase();
        if (/^(education|academic background)/i.test(line)) {
          currentSection = "education";
          return;
        }
        if (/^(experience|work experience|employment|professional experience)/i.test(line)) {
          currentSection = "experience";
          return;
        }
        if (/^(projects|technical projects|personal projects)/i.test(line)) {
          currentSection = "projects";
          return;
        }
        if (/^(skills|technical skills|technologies|proficiencies)/i.test(line)) {
          currentSection = "skills";
          return;
        }

        if (currentSection && sectionBuckets[currentSection]) {
          sectionBuckets[currentSection].push(line);
        }
      });

      // 3. Populate Experience
      if (sectionBuckets.experience.length > 0) {
        let currentJob = null;
        sectionBuckets.experience.forEach(line => {
          const isDateLine = /\b(19\d\d|20\d\d|present|current|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i.test(line);
          const isBullet = /^[•\-\*\+]|^\d+\./.test(line);

          if (!isBullet && isDateLine && !currentJob) {
            currentJob = {
              role: line.split(/[,|–-]/)[0] || "Software Engineer",
              company: "Technology Company",
              location: "City, State",
              dates: line.match(/\b(?:19|20)\d{2}.*/)?.[0] || "2023 – Present",
              bullets: []
            };
          } else if (isBullet && currentJob) {
            currentJob.bullets.push(line.replace(/^[•\-\*\+]\s*/, ''));
          } else if (!isBullet && !currentJob) {
            currentJob = {
              role: line,
              company: "Technology Firm",
              location: "Location",
              dates: "2023 – Present",
              bullets: []
            };
          } else if (isBullet && !currentJob) {
            // First job fallback
            currentJob = {
              role: "Software Engineer",
              company: "Engineering Team",
              location: "Remote",
              dates: "2023 – Present",
              bullets: [line.replace(/^[•\-\*\+]\s*/, '')]
            };
          }
        });
        if (currentJob) parsed.experience.push(currentJob);
      }

      // If experience empty, keep at least 1 skeleton
      if (parsed.experience.length === 0) {
        parsed.experience = PRESETS.systems.experience;
      }

      // 4. Populate Projects
      if (sectionBuckets.projects.length > 0) {
        let currentProj = null;
        sectionBuckets.projects.forEach(line => {
          const isBullet = /^[•\-\*\+]|^\d+\./.test(line);
          if (!isBullet && !currentProj) {
            currentProj = {
              name: line.split(/[|–-]/)[0].trim(),
              tech: line.includes('|') ? line.split('|')[1].trim() : "Python, TypeScript, SQL",
              linkText: "GitHub",
              linkUrl: "https://github.com",
              dates: "Recent",
              bullets: []
            };
          } else if (isBullet && currentProj) {
            currentProj.bullets.push(line.replace(/^[•\-\*\+]\s*/, ''));
          }
        });
        if (currentProj) parsed.projects.push(currentProj);
      }
      if (parsed.projects.length === 0) {
        parsed.projects = PRESETS.systems.projects;
      }

      // 5. Populate Education
      if (sectionBuckets.education.length > 0) {
        parsed.education.push({
          school: sectionBuckets.education[0] || "University Name",
          location: "City, State",
          degree: sectionBuckets.education[1] || "B.S. in Computer Science",
          dates: "2020 – 2024",
          notes: sectionBuckets.education.slice(2).join(' • ')
        });
      } else {
        parsed.education = PRESETS.systems.education;
      }

      // 6. Populate Skills
      if (sectionBuckets.skills.length > 0) {
        const fullSkillStr = sectionBuckets.skills.join(' ');
        parsed.skills.languages = fullSkillStr.slice(0, 120);
        parsed.skills.frameworks = "React, Node.js, Next.js, FastAPI, Docker";
        parsed.skills.tools = "Git, Linux, AWS, PostgreSQL, Redis, CI/CD";
        parsed.skills.concepts = "Distributed Systems, Microservices, Algorithms";
      } else {
        parsed.skills = PRESETS.systems.skills;
      }

      this.state = parsed;
      this.saveState();
      this.populateForm();
      this.renderJakeResume();

      const dropzoneStatus = document.getElementById('rmUploadStatus');
      if (dropzoneStatus) {
        dropzoneStatus.textContent = `✓ Successfully imported "${sourceName}" into Jake's Template!`;
        dropzoneStatus.style.color = "var(--rm-accent-green)";
      }
    }

    applyParsedJson(json) {
      if (json && json.name) {
        this.state = Object.assign(this.state, json);
        this.saveState();
        this.populateForm();
        this.renderJakeResume();
      }
    }

    populateForm() {
      // Personal Info
      const s = this.state;
      this.setVal('rmName', s.name);
      this.setVal('rmPhone', s.phone);
      this.setVal('rmEmail', s.email);
      this.setVal('rmLinkedin', s.linkedin);
      this.setVal('rmGithub', s.github);
      this.setVal('rmPortfolio', s.portfolio);

      // Skills
      this.setVal('rmSkillsLanguages', s.skills?.languages || '');
      this.setVal('rmSkillsFrameworks', s.skills?.frameworks || '');
      this.setVal('rmSkillsTools', s.skills?.tools || '');
      this.setVal('rmSkillsConcepts', s.skills?.concepts || '');

      // Dynamic Education Container
      this.renderEducationFormItems();

      // Dynamic Experience Container
      this.renderExperienceFormItems();

      // Dynamic Projects Container
      this.renderProjectsFormItems();
    }

    setVal(id, val) {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    }

    bindFormEvents() {
      // Personal Info inputs
      ['rmName', 'rmPhone', 'rmEmail', 'rmLinkedin', 'rmGithub', 'rmPortfolio'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', (e) => {
            const prop = id.replace('rm', '').toLowerCase();
            this.state[prop] = e.target.value;
            this.saveState();
            this.renderJakeResume();
          });
        }
      });

      // Skills inputs
      ['rmSkillsLanguages', 'rmSkillsFrameworks', 'rmSkillsTools', 'rmSkillsConcepts'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', (e) => {
            const key = id.replace('rmSkills', '').toLowerCase();
            if (!this.state.skills) this.state.skills = {};
            this.state.skills[key] = e.target.value;
            this.saveState();
            this.renderJakeResume();
          });
        }
      });

      // Add Buttons
      const addEduBtn = document.getElementById('rmAddEducationBtn');
      if (addEduBtn) {
        addEduBtn.addEventListener('click', () => {
          this.state.education.push({
            school: "New University / College",
            location: "City, State",
            degree: "Degree, Major",
            dates: "Month Year – Month Year",
            notes: ""
          });
          this.saveState();
          this.renderEducationFormItems();
          this.renderJakeResume();
        });
      }

      const addExpBtn = document.getElementById('rmAddExperienceBtn');
      if (addExpBtn) {
        addExpBtn.addEventListener('click', () => {
          this.state.experience.push({
            role: "Software Engineer",
            company: "Company Name",
            location: "City, State",
            dates: "Month Year – Present",
            bullets: [
              "Engineered high-throughput API microservice in Go, reducing processing latency by 35% across 2M daily requests."
            ]
          });
          this.saveState();
          this.renderExperienceFormItems();
          this.renderJakeResume();
        });
      }

      const addProjBtn = document.getElementById('rmAddProjectBtn');
      if (addProjBtn) {
        addProjBtn.addEventListener('click', () => {
          this.state.projects.push({
            name: "New Software Project",
            tech: "Languages & Frameworks",
            linkText: "GitHub",
            linkUrl: "https://github.com",
            dates: "Month Year – Month Year",
            bullets: [
              "Architected end-to-end fullstack platform serving 5,000 active users with automated CI/CD pipeline."
            ]
          });
          this.saveState();
          this.renderProjectsFormItems();
          this.renderJakeResume();
        });
      }

      // Section accordions collapsible
      document.querySelectorAll('.rm-section-header').forEach(header => {
        header.addEventListener('click', () => {
          const box = header.closest('.rm-section-box');
          if (box) box.classList.toggle('is-collapsed');
        });
      });
    }

    renderEducationFormItems() {
      const container = document.getElementById('rmEducationItemsContainer');
      if (!container) return;

      container.innerHTML = this.state.education.map((item, idx) => `
        <div class="rm-item-card" data-idx="${idx}">
          <div class="rm-item-card-header">
            <span class="rm-item-card-title">Education #${idx + 1}</span>
            <button class="rm-remove-btn" type="button" data-type="education" data-idx="${idx}">Remove</button>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">School / University</label>
              <input type="text" class="rm-form-input edu-input" data-idx="${idx}" data-field="school" value="${this.escapeHtml(item.school)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Location</label>
              <input type="text" class="rm-form-input edu-input" data-idx="${idx}" data-field="location" value="${this.escapeHtml(item.location)}">
            </div>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">Degree &amp; Major</label>
              <input type="text" class="rm-form-input edu-input" data-idx="${idx}" data-field="degree" value="${this.escapeHtml(item.degree)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Dates</label>
              <input type="text" class="rm-form-input edu-input" data-idx="${idx}" data-field="dates" value="${this.escapeHtml(item.dates)}">
            </div>
          </div>
          <div class="rm-form-group">
            <label class="rm-form-label">GPA, Coursework &amp; Honors</label>
            <input type="text" class="rm-form-input edu-input" data-idx="${idx}" data-field="notes" value="${this.escapeHtml(item.notes || '')}">
          </div>
        </div>
      `).join('');

      // Bind input events
      container.querySelectorAll('.edu-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          const field = e.target.getAttribute('data-field');
          this.state.education[idx][field] = e.target.value;
          this.saveState();
          this.renderJakeResume();
        });
      });

      // Bind remove buttons
      container.querySelectorAll('.rm-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          this.state.education.splice(idx, 1);
          this.saveState();
          this.renderEducationFormItems();
          this.renderJakeResume();
        });
      });
    }

    renderExperienceFormItems() {
      const container = document.getElementById('rmExperienceItemsContainer');
      if (!container) return;

      container.innerHTML = this.state.experience.map((item, expIdx) => `
        <div class="rm-item-card" data-idx="${expIdx}">
          <div class="rm-item-card-header">
            <span class="rm-item-card-title">Experience #${expIdx + 1}: ${this.escapeHtml(item.company || 'Job')}</span>
            <button class="rm-remove-btn" type="button" data-type="experience" data-idx="${expIdx}">Remove</button>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">Role / Job Title</label>
              <input type="text" class="rm-form-input exp-input" data-idx="${expIdx}" data-field="role" value="${this.escapeHtml(item.role)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Location</label>
              <input type="text" class="rm-form-input exp-input" data-idx="${expIdx}" data-field="location" value="${this.escapeHtml(item.location)}">
            </div>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">Company / Organization</label>
              <input type="text" class="rm-form-input exp-input" data-idx="${expIdx}" data-field="company" value="${this.escapeHtml(item.company)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Date Range</label>
              <input type="text" class="rm-form-input exp-input" data-idx="${expIdx}" data-field="dates" value="${this.escapeHtml(item.dates)}">
            </div>
          </div>

          <div class="rm-bullets-group">
            <label class="rm-form-label">Bullet Points (Action Verb + Quantifiable Impact)</label>
            ${(item.bullets || []).map((b, bIdx) => `
              <div class="rm-bullet-row">
                <textarea class="rm-bullet-input exp-bullet-input" data-exp="${expIdx}" data-bullet="${bIdx}">${this.escapeHtml(b)}</textarea>
                <div class="rm-bullet-actions">
                  <button type="button" class="rm-bullet-verb-btn verb-suggest-btn" data-exp="${expIdx}" data-bullet="${bIdx}" title="Cycle Action Verb">⚡ Verb</button>
                  <button type="button" class="rm-remove-btn remove-bullet-btn" data-exp="${expIdx}" data-bullet="${bIdx}" title="Delete Bullet">✕</button>
                </div>
              </div>
            `).join('')}
            <button type="button" class="rm-add-item-btn add-bullet-btn" data-exp="${expIdx}">+ Add Bullet Point</button>
          </div>
        </div>
      `).join('');

      // Bind input events
      container.querySelectorAll('.exp-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          const field = e.target.getAttribute('data-field');
          this.state.experience[idx][field] = e.target.value;
          this.saveState();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.exp-bullet-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const expIdx = parseInt(e.target.getAttribute('data-exp'));
          const bIdx = parseInt(e.target.getAttribute('data-bullet'));
          this.state.experience[expIdx].bullets[bIdx] = e.target.value;
          this.saveState();
          this.renderJakeResume();
        });
      });

      // Bind Action Verb cycler
      container.querySelectorAll('.verb-suggest-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const expIdx = parseInt(e.currentTarget.getAttribute('data-exp'));
          const bIdx = parseInt(e.currentTarget.getAttribute('data-bullet'));
          const cur = this.state.experience[expIdx].bullets[bIdx] || "";
          const randVerb = ACTION_VERBS[Math.floor(Math.random() * ACTION_VERBS.length)];
          // Replace first word or prepend
          const words = cur.trim().split(/\s+/);
          words[0] = randVerb;
          this.state.experience[expIdx].bullets[bIdx] = words.join(" ");
          this.saveState();
          this.renderExperienceFormItems();
          this.renderJakeResume();
        });
      });

      // Bind add bullet
      container.querySelectorAll('.add-bullet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const expIdx = parseInt(e.currentTarget.getAttribute('data-exp'));
          const randVerb = ACTION_VERBS[Math.floor(Math.random() * ACTION_VERBS.length)];
          this.state.experience[expIdx].bullets.push(`${randVerb} scalable features with quantifiable performance gains.`);
          this.saveState();
          this.renderExperienceFormItems();
          this.renderJakeResume();
        });
      });

      // Bind remove bullet
      container.querySelectorAll('.remove-bullet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const expIdx = parseInt(e.currentTarget.getAttribute('data-exp'));
          const bIdx = parseInt(e.currentTarget.getAttribute('data-bullet'));
          this.state.experience[expIdx].bullets.splice(bIdx, 1);
          this.saveState();
          this.renderExperienceFormItems();
          this.renderJakeResume();
        });
      });

      // Bind remove experience
      container.querySelectorAll('.rm-remove-btn[data-type="experience"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          this.state.experience.splice(idx, 1);
          this.saveState();
          this.renderExperienceFormItems();
          this.renderJakeResume();
        });
      });
    }

    renderProjectsFormItems() {
      const container = document.getElementById('rmProjectsItemsContainer');
      if (!container) return;

      container.innerHTML = this.state.projects.map((item, pIdx) => `
        <div class="rm-item-card" data-idx="${pIdx}">
          <div class="rm-item-card-header">
            <span class="rm-item-card-title">Project #${pIdx + 1}: ${this.escapeHtml(item.name || 'Project')}</span>
            <button class="rm-remove-btn" type="button" data-type="project" data-idx="${pIdx}">Remove</button>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">Project Name</label>
              <input type="text" class="rm-form-input proj-input" data-idx="${pIdx}" data-field="name" value="${this.escapeHtml(item.name)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Date Range</label>
              <input type="text" class="rm-form-input proj-input" data-idx="${pIdx}" data-field="dates" value="${this.escapeHtml(item.dates)}">
            </div>
          </div>
          <div class="rm-form-row">
            <div class="rm-form-group">
              <label class="rm-form-label">Technologies Used</label>
              <input type="text" class="rm-form-input proj-input" data-idx="${pIdx}" data-field="tech" value="${this.escapeHtml(item.tech)}">
            </div>
            <div class="rm-form-group">
              <label class="rm-form-label">Link Label &amp; URL</label>
              <div style="display:flex; gap:0.4rem;">
                <input type="text" style="width:70px;" class="rm-form-input proj-input" data-idx="${pIdx}" data-field="linkText" value="${this.escapeHtml(item.linkText || 'GitHub')}">
                <input type="text" class="rm-form-input proj-input" data-idx="${pIdx}" data-field="linkUrl" value="${this.escapeHtml(item.linkUrl || '')}">
              </div>
            </div>
          </div>

          <div class="rm-bullets-group">
            <label class="rm-form-label">Project Bullet Points</label>
            ${(item.bullets || []).map((b, bIdx) => `
              <div class="rm-bullet-row">
                <textarea class="rm-bullet-input proj-bullet-input" data-proj="${pIdx}" data-bullet="${bIdx}">${this.escapeHtml(b)}</textarea>
                <div class="rm-bullet-actions">
                  <button type="button" class="rm-bullet-verb-btn proj-verb-btn" data-proj="${pIdx}" data-bullet="${bIdx}" title="Cycle Action Verb">⚡ Verb</button>
                  <button type="button" class="rm-remove-btn remove-proj-bullet-btn" data-proj="${pIdx}" data-bullet="${bIdx}" title="Delete Bullet">✕</button>
                </div>
              </div>
            `).join('')}
            <button type="button" class="rm-add-item-btn add-proj-bullet-btn" data-proj="${pIdx}">+ Add Bullet Point</button>
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.proj-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          const field = e.target.getAttribute('data-field');
          this.state.projects[idx][field] = e.target.value;
          this.saveState();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.proj-bullet-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const pIdx = parseInt(e.target.getAttribute('data-proj'));
          const bIdx = parseInt(e.target.getAttribute('data-bullet'));
          this.state.projects[pIdx].bullets[bIdx] = e.target.value;
          this.saveState();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.proj-verb-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const pIdx = parseInt(e.currentTarget.getAttribute('data-proj'));
          const bIdx = parseInt(e.currentTarget.getAttribute('data-bullet'));
          const cur = this.state.projects[pIdx].bullets[bIdx] || "";
          const randVerb = ACTION_VERBS[Math.floor(Math.random() * ACTION_VERBS.length)];
          const words = cur.trim().split(/\s+/);
          words[0] = randVerb;
          this.state.projects[pIdx].bullets[bIdx] = words.join(" ");
          this.saveState();
          this.renderProjectsFormItems();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.add-proj-bullet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const pIdx = parseInt(e.currentTarget.getAttribute('data-proj'));
          const randVerb = ACTION_VERBS[Math.floor(Math.random() * ACTION_VERBS.length)];
          this.state.projects[pIdx].bullets.push(`${randVerb} architecture with high-efficiency resource utilization.`);
          this.saveState();
          this.renderProjectsFormItems();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.remove-proj-bullet-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const pIdx = parseInt(e.currentTarget.getAttribute('data-proj'));
          const bIdx = parseInt(e.currentTarget.getAttribute('data-bullet'));
          this.state.projects[pIdx].bullets.splice(bIdx, 1);
          this.saveState();
          this.renderProjectsFormItems();
          this.renderJakeResume();
        });
      });

      container.querySelectorAll('.rm-remove-btn[data-type="project"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.getAttribute('data-idx'));
          this.state.projects.splice(idx, 1);
          this.saveState();
          this.renderProjectsFormItems();
          this.renderJakeResume();
        });
      });
    }

    renderJakeResume() {
      const sheet = document.getElementById('jakeResumeSheet');
      if (!sheet) return;

      const s = this.state;

      // Contact bar tokens
      const contactItems = [];
      if (s.phone) contactItems.push(`<span>${this.escapeHtml(s.phone)}</span>`);
      if (s.email) contactItems.push(`<a href="mailto:${s.email}">${this.escapeHtml(s.email)}</a>`);
      if (s.linkedin) contactItems.push(`<a href="https://${s.linkedin.replace(/^https?:\/\//, '')}" target="_blank" rel="noopener">${this.escapeHtml(s.linkedin)}</a>`);
      if (s.github) contactItems.push(`<a href="https://${s.github.replace(/^https?:\/\//, '')}" target="_blank" rel="noopener">${this.escapeHtml(s.github)}</a>`);
      if (s.portfolio) contactItems.push(`<a href="https://${s.portfolio.replace(/^https?:\/\//, '')}" target="_blank" rel="noopener">${this.escapeHtml(s.portfolio)}</a>`);

      const contactsHtml = contactItems.join(` <span class="jake-sep">|</span> `);

      // Education HTML
      const educationHtml = (s.education || []).map(edu => `
        <div class="jake-entry">
          <div class="jake-row">
            <span class="jake-left-bold">${this.escapeHtml(edu.school)}</span>
            <span class="jake-right-text">${this.escapeHtml(edu.location)}</span>
          </div>
          <div class="jake-row">
            <span class="jake-left-italic">${this.escapeHtml(edu.degree)}</span>
            <span class="jake-right-text">${this.escapeHtml(edu.dates)}</span>
          </div>
          ${edu.notes ? `<div style="font-size: 8.8pt; color: #333333; margin-top: 0.1rem;">${this.escapeHtml(edu.notes)}</div>` : ''}
        </div>
      `).join('');

      // Experience HTML
      const experienceHtml = (s.experience || []).map(exp => `
        <div class="jake-entry">
          <div class="jake-row">
            <span class="jake-left-bold">${this.escapeHtml(exp.role)}</span>
            <span class="jake-right-text">${this.escapeHtml(exp.location)}</span>
          </div>
          <div class="jake-row">
            <span class="jake-left-italic">${this.escapeHtml(exp.company)}</span>
            <span class="jake-right-text">${this.escapeHtml(exp.dates)}</span>
          </div>
          <ul class="jake-bullet-list">
            ${(exp.bullets || []).map(b => `<li>${this.escapeHtml(b)}</li>`).join('')}
          </ul>
        </div>
      `).join('');

      // Projects HTML
      const projectsHtml = (s.projects || []).map(proj => {
        const link = proj.linkUrl ? `<span class="jake-project-links"><a href="${proj.linkUrl}" target="_blank" rel="noopener">[${this.escapeHtml(proj.linkText || 'Link')}]</a></span>` : '';
        return `
          <div class="jake-entry">
            <div class="jake-row">
              <span class="jake-project-heading">
                <span class="jake-project-name">${this.escapeHtml(proj.name)}</span>
                ${proj.tech ? ` <span class="jake-sep">|</span> <span class="jake-project-tech">${this.escapeHtml(proj.tech)}</span>` : ''}
                ${link}
              </span>
              <span class="jake-right-text">${this.escapeHtml(proj.dates)}</span>
            </div>
            <ul class="jake-bullet-list">
              ${(proj.bullets || []).map(b => `<li>${this.escapeHtml(b)}</li>`).join('')}
            </ul>
          </div>
        `;
      }).join('');

      // Skills HTML
      const sk = s.skills || {};
      const skillsHtml = `
        <ul class="jake-skills-list">
          ${sk.languages ? `<li class="jake-skills-item"><span class="jake-skills-category">Languages:</span> ${this.escapeHtml(sk.languages)}</li>` : ''}
          ${sk.frameworks ? `<li class="jake-skills-item"><span class="jake-skills-category">Frameworks &amp; Developer Tools:</span> ${this.escapeHtml(sk.frameworks)}</li>` : ''}
          ${sk.tools ? `<li class="jake-skills-item"><span class="jake-skills-category">Databases &amp; Infrastructure:</span> ${this.escapeHtml(sk.tools)}</li>` : ''}
          ${sk.concepts ? `<li class="jake-skills-item"><span class="jake-skills-category">Core Systems &amp; Competencies:</span> ${this.escapeHtml(sk.concepts)}</li>` : ''}
        </ul>
      `;

      sheet.innerHTML = `
        <!-- Jake's Header -->
        <header class="jake-header">
          <h1 class="jake-name">${this.escapeHtml(s.name || 'YOUR NAME')}</h1>
          <div class="jake-contacts">
            ${contactsHtml || '<span>Phone &bull; Email &bull; LinkedIn &bull; GitHub</span>'}
          </div>
        </header>

        <!-- Education -->
        ${(s.education && s.education.length > 0) ? `
          <section class="jake-section">
            <h2 class="jake-section-title">Education</h2>
            ${educationHtml}
          </section>
        ` : ''}

        <!-- Experience -->
        ${(s.experience && s.experience.length > 0) ? `
          <section class="jake-section">
            <h2 class="jake-section-title">Experience</h2>
            ${experienceHtml}
          </section>
        ` : ''}

        <!-- Projects -->
        ${(s.projects && s.projects.length > 0) ? `
          <section class="jake-section">
            <h2 class="jake-section-title">Projects</h2>
            ${projectsHtml}
          </section>
        ` : ''}

        <!-- Technical Skills -->
        <section class="jake-section">
          <h2 class="jake-section-title">Technical Skills</h2>
          ${skillsHtml}
        </section>
      `;
    }

    generateLatexSource() {
      const s = this.state;
      const esc = (str) => {
        if (!str) return "";
        return str
          .replace(/\\/g, '\\textbackslash{}')
          .replace(/%/g, '\\%')
          .replace(/\$/g, '\\$')
          .replace(/&/g, '\\&')
          .replace(/#/g, '\\#')
          .replace(/_/g, '\\_')
          .replace(/\{/g, '\\{')
          .replace(/\}/g, '\\}');
      };

      const phone = s.phone ? esc(s.phone) : "";
      const email = s.email ? `\\href{mailto:${esc(s.email)}}{\\underline{${esc(s.email)}}}` : "";
      const linkedin = s.linkedin ? `\\href{https://${esc(s.linkedin.replace(/^https?:\/\//, ''))}}{\\underline{${esc(s.linkedin)}}}` : "";
      const github = s.github ? `\\href{https://${esc(s.github.replace(/^https?:\/\//, ''))}}{\\underline{${esc(s.github)}}}` : "";

      let contactRow = [phone, email, linkedin, github].filter(Boolean).join(" $|$ ");

      let eduLatex = (s.education || []).map(edu => `
    \\resumeSubheading
      {${esc(edu.school)}}{${esc(edu.location)}}
      {${esc(edu.degree)}}{${esc(edu.dates)}}
      ${edu.notes ? `\\resumeItem{${esc(edu.notes)}}` : ''}
      `).join('\n');

      let expLatex = (s.experience || []).map(exp => `
    \\resumeSubheading
      {${esc(exp.role)}}{${esc(exp.location)}}
      {${esc(exp.company)}}{${esc(exp.dates)}}
      \\resumeItemListStart
        ${(exp.bullets || []).map(b => `\\resumeItem{${esc(b)}}`).join('\n        ')}
      \\resumeItemListEnd
      `).join('\n');

      let projLatex = (s.projects || []).map(proj => `
    \\resumeProjectHeading
      {\\textbf{${esc(proj.name)}} $|$ \\emph{${esc(proj.tech)}}}${proj.linkUrl ? ` $|$ \\href{${esc(proj.linkUrl)}}{\\underline{${esc(proj.linkText || 'Link')}}}` : ''}{${esc(proj.dates)}}
      \\resumeItemListStart
        ${(proj.bullets || []).map(b => `\\resumeItem{${esc(b)}}`).join('\n        ')}
      \\resumeItemListEnd
      `).join('\n');

      const sk = s.skills || {};

      return `%-------------------------
% Resume in Latex - Jake's Template
% Systems Reference Library Generator
% Compatible with Overleaf & TeX Live
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape ${esc(s.name || 'YOUR NAME')}} \\\\ \\vspace{1pt}
    \\small ${contactRow}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
${eduLatex}
  \\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
${expLatex}
  \\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
  \\resumeSubHeadingListStart
${projLatex}
  \\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     ${sk.languages ? `\\textbf{Languages}{: ${esc(sk.languages)}} \\\\` : ''}
     ${sk.frameworks ? `\\textbf{Frameworks \\& Tools}{: ${esc(sk.frameworks)}} \\\\` : ''}
     ${sk.tools ? `\\textbf{Databases \\& Infrastructure}{: ${esc(sk.tools)}} \\\\` : ''}
     ${sk.concepts ? `\\textbf{Core Systems}{: ${esc(sk.concepts)}}` : ''}
    }}
 \\end{itemize}

\\end{document}
`;
    }

    openLatexModal() {
      const modal = document.getElementById('rmLatexModal');
      const codeEl = document.getElementById('rmLatexCodeBlock');
      if (!modal || !codeEl) return;

      const latex = this.generateLatexSource();
      codeEl.textContent = latex;
      modal.style.display = 'flex';

      const copyBtn = document.getElementById('rmCopyLatexBtn');
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(latex).then(() => {
            const prev = copyBtn.textContent;
            copyBtn.textContent = "✓ Copied to Clipboard!";
            setTimeout(() => { copyBtn.textContent = prev; }, 2000);
          });
        };
      }

      const downloadBtn = document.getElementById('rmDownloadLatexBtn');
      if (downloadBtn) {
        downloadBtn.onclick = () => {
          const blob = new Blob([latex], { type: 'text/x-tex' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${(this.state.name || 'resume').toLowerCase().replace(/\s+/g, '_')}_jakes_resume.tex`;
          a.click();
          URL.revokeObjectURL(url);
        };
      }

      const closeBtn = document.getElementById('rmCloseLatexModalBtn');
      if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = 'none'; };
      }
    }

    openPasteResumeModal() {
      const text = prompt("Paste your existing resume text below (from PDF, Word, or LinkedIn). We will instantly parse and convert it into Jake's Template:");
      if (text && text.trim()) {
        this.parseAndApplyRawResumeText(text, "Pasted Resume Text");
      }
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
    if (document.getElementById('resume-maker-root')) {
      const app = new ResumeMakerApp();
      app.init();
      window.ResumeMakerInstance = app;
    }
  });

})();
