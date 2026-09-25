/**
 * Systems Reference Library - NEETCode 250 Dedicated Practice Arena Controller
 * Includes Pyodide WebAssembly execution, live stopwatch, filtering, and AI Skill Coach & Next Path Guide.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------
  // 1. PRACTICE & SPEED TRACKER
  // -------------------------------------------------------------------
  class ArenaTracker {
    constructor() {
      this.storageKey = 'systems_lib_progress';
      this.state = this.load();
    }

    load() {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            currentStreak: parsed.currentStreak || 0,
            totalSolved: parsed.totalSolved || (parsed.solvedProblemIds ? parsed.solvedProblemIds.length : 0),
            lastSolvedDate: parsed.lastSolvedDate || null,
            solvedProblemIds: parsed.solvedProblemIds || [],
            activityHistory: parsed.activityHistory || {},
            solveStats: parsed.solveStats || {} // problemId -> { timeSpentSeconds, attempts, passedDate, difficulty, category }
          };
        }
      } catch (e) {}

      return {
        currentStreak: 0,
        totalSolved: 0,
        lastSolvedDate: null,
        solvedProblemIds: [],
        activityHistory: {},
        solveStats: {}
      };
    }

    save() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      } catch (e) {}
    }

    getTodayDateString() {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    getYesterdayDateString() {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    isSolved(problemId) {
      return this.state.solvedProblemIds.includes(problemId);
    }

    getStats(problemId) {
      return this.state.solveStats[problemId] || null;
    }

    recordSolve(problem, timeSpentSeconds) {
      const today = this.getTodayDateString();
      const yesterday = this.getYesterdayDateString();
      const pid = problem.id;

      if (!this.state.solvedProblemIds.includes(pid)) {
        this.state.solvedProblemIds.push(pid);
        this.state.totalSolved = this.state.solvedProblemIds.length;
      }

      // Record detailed performance
      const existing = this.state.solveStats[pid] || { attempts: 0 };
      this.state.solveStats[pid] = {
        timeSpentSeconds: timeSpentSeconds,
        attempts: (existing.attempts || 0) + 1,
        passedDate: today,
        difficulty: problem.difficulty,
        category: problem.category,
        title: problem.title
      };

      // Record daily activity
      this.state.activityHistory[today] = (this.state.activityHistory[today] || 0) + 1;

      // Calculate streak
      if (this.state.lastSolvedDate !== today) {
        if (this.state.lastSolvedDate === yesterday) {
          this.state.currentStreak += 1;
        } else if (!this.state.lastSolvedDate) {
          this.state.currentStreak = 1;
        } else {
          this.state.currentStreak = 1;
        }
        this.state.lastSolvedDate = today;
      }

      this.save();
    }
  }

  // -------------------------------------------------------------------
  // 2. AI SKILL COACH & PATH ANALYZER ENGINE
  // -------------------------------------------------------------------
  class AISkillCoach {
    constructor(allProblems, tracker) {
      this.problems = allProblems;
      this.tracker = tracker;
    }

    generateDossier() {
      const stats = this.tracker.state.solveStats;
      const solvedIds = this.tracker.state.solvedProblemIds;
      const totalProblems = this.problems.length;
      const totalSolved = solvedIds.length;

      // 1. Category Distribution & Mastery
      const categoryMap = {};
      this.problems.forEach(p => {
        if (!categoryMap[p.category]) {
          categoryMap[p.category] = { total: 0, solved: 0, totalTime: 0, times: [] };
        }
        categoryMap[p.category].total += 1;
      });

      solvedIds.forEach(id => {
        const prob = this.problems.find(p => p.id === id);
        if (prob && categoryMap[prob.category]) {
          categoryMap[prob.category].solved += 1;
          const st = stats[id];
          if (st && st.timeSpentSeconds) {
            categoryMap[prob.category].totalTime += st.timeSpentSeconds;
            categoryMap[prob.category].times.push(st.timeSpentSeconds);
          }
        }
      });

      // 2. Difficulty Breakdown
      const diffStats = {
        Easy: { total: 0, solved: 0, avgTime: 0, totalTime: 0 },
        Medium: { total: 0, solved: 0, avgTime: 0, totalTime: 0 },
        Hard: { total: 0, solved: 0, avgTime: 0, totalTime: 0 }
      };

      this.problems.forEach(p => {
        if (diffStats[p.difficulty]) diffStats[p.difficulty].total += 1;
      });

      Object.values(stats).forEach(st => {
        if (st.difficulty && diffStats[st.difficulty]) {
          diffStats[st.difficulty].solved += 1;
          diffStats[st.difficulty].totalTime += (st.timeSpentSeconds || 0);
        }
      });

      Object.keys(diffStats).forEach(d => {
        const s = diffStats[d];
        s.avgTime = s.solved > 0 ? Math.round(s.totalTime / s.solved) : 0;
      });

      // 3. Overall Readiness Score (0 to 100)
      const easyWeight = diffStats.Easy.solved * 1;
      const medWeight = diffStats.Medium.solved * 2.5;
      const hardWeight = diffStats.Hard.solved * 5;
      const rawScore = (easyWeight + medWeight + hardWeight);
      const readinessScore = Math.min(100, Math.round((rawScore / (70 * 1 + 140 * 2.5 + 40 * 5)) * 100 * 1.5));

      // 4. Personalized Top 3 Next Recommendations
      const recommendations = this.computeNextRecommendations(categoryMap);

      // 5. Strategic Learning Paths
      const learningPaths = this.computeLearningPaths(categoryMap);

      return {
        totalSolved,
        totalProblems,
        readinessScore,
        categoryMap,
        diffStats,
        recommendations,
        learningPaths
      };
    }

    computeNextRecommendations(categoryMap) {
      const solvedSet = new Set(this.tracker.state.solvedProblemIds);
      const recs = [];

      // Strategy 1: Progress in user's most active category
      let bestActiveCat = null;
      let highestRatio = -1;
      Object.keys(categoryMap).forEach(cat => {
        const c = categoryMap[cat];
        if (c.solved > 0 && c.solved < c.total) {
          const ratio = c.solved / c.total;
          if (ratio > highestRatio && ratio < 1.0) {
            highestRatio = ratio;
            bestActiveCat = cat;
          }
        }
      });

      if (bestActiveCat) {
        const nextInCat = this.problems.find(p => p.category === bestActiveCat && !solvedSet.has(p.id));
        if (nextInCat) {
          recs.push({
            problem: nextInCat,
            type: "Mastery Solidification",
            badge: "Active Category",
            rationale: `You have solved ${categoryMap[bestActiveCat].solved}/${categoryMap[bestActiveCat].total} in ${bestActiveCat}. Solving ${nextInCat.title} will deepen your algorithmic fluency in this core track.`
          });
        }
      }

      // Strategy 2: Bridge into an essential foundational category that has 0 solves
      const foundationalPillars = [
        "Arrays & Hashing", "Two Pointers", "Sliding Window",
        "Stack", "Binary Search", "Trees", "Graphs", "1-D Dynamic Programming"
      ];

      for (const pillar of foundationalPillars) {
        if (categoryMap[pillar] && categoryMap[pillar].solved === 0) {
          const firstProb = this.problems.find(p => p.category === pillar && !solvedSet.has(p.id));
          if (firstProb && !recs.find(r => r.problem.id === firstProb.id)) {
            recs.push({
              problem: firstProb,
              type: "Foundation Bridge",
              badge: "New Skill Pillar",
              rationale: `You haven't tackled ${pillar} yet. Starting with ${firstProb.title} establishes fundamental mental models essential for coding rounds.`
            });
            break;
          }
        }
      }

      // Strategy 3: Difficulty Step-Up Challenge (Medium challenge)
      const mediumCandidate = this.problems.find(p => p.difficulty === "Medium" && !solvedSet.has(p.id) && !recs.find(r => r.problem.id === p.id));
      if (mediumCandidate) {
        recs.push({
          problem: mediumCandidate,
          type: "Difficulty Level-Up",
          badge: "Stretch Drill",
          rationale: `Sharpen your problem-solving velocity under time pressure with ${mediumCandidate.title} (${mediumCandidate.category}).`
        });
      }

      // Fill remaining if needed
      if (recs.length < 3) {
        for (const p of this.problems) {
          if (!solvedSet.has(p.id) && !recs.find(r => r.problem.id === p.id)) {
            recs.push({
              problem: p,
              type: "Recommended Drill",
              badge: p.difficulty,
              rationale: `A high-yield algorithmic drill in ${p.category} testing optimal spatial & time bounds.`
            });
            if (recs.length === 3) break;
          }
        }
      }

      return recs;
    }

    computeLearningPaths(categoryMap) {
      return [
        {
          id: "path-faang",
          title: "FAANG High-Yield Fast Track",
          tag: "Top Interview Priority",
          icon: "⚡",
          description: "Focus on the highest ROI problem archetypes: Hashing, Two Pointers, Sliding Window, and Trees.",
          targetCategories: ["Arrays & Hashing", "Two Pointers", "Sliding Window", "Trees", "Binary Search"],
          progress: this.calculatePathProgress(["Arrays & Hashing", "Two Pointers", "Sliding Window", "Trees", "Binary Search"])
        },
        {
          id: "path-graphs-trees",
          title: "Graph & Hierarchical Architect",
          tag: "Systems & Infrastructure",
          icon: "🌲",
          description: "Master recursive tree traversals, BFS/DFS flood fill, topological sorting, and shortest-path graph algorithms.",
          targetCategories: ["Trees", "Graphs", "Advanced Graphs", "Tries"],
          progress: this.calculatePathProgress(["Trees", "Graphs", "Advanced Graphs", "Tries"])
        },
        {
          id: "path-dp-advanced",
          title: "Dynamic Programming Masterclass",
          tag: "Competitive Algorithms",
          icon: "🎯",
          description: "From 1D state transition equations and Fibonacci memoization to 2D grid alignments and knapsack variants.",
          targetCategories: ["1-D Dynamic Programming", "2-D Dynamic Programming", "Greedy"],
          progress: this.calculatePathProgress(["1-D Dynamic Programming", "2-D Dynamic Programming", "Greedy"])
        },
        {
          id: "path-systems",
          title: "Low-Latency & Memory Bounds",
          tag: "Kernel & Systems Engineering",
          icon: "⚙️",
          description: "In-place array mutations, bitwise flags, monotonic stack boundaries, and O(1) space constraints.",
          targetCategories: ["Bit Manipulation", "Stack", "Intervals", "Math & Geometry"],
          progress: this.calculatePathProgress(["Bit Manipulation", "Stack", "Intervals", "Math & Geometry"])
        }
      ];
    }

    calculatePathProgress(categories) {
      let total = 0;
      let solved = 0;
      const solvedSet = new Set(this.tracker.state.solvedProblemIds);

      this.problems.forEach(p => {
        if (categories.includes(p.category)) {
          total += 1;
          if (solvedSet.has(p.id)) solved += 1;
        }
      });

      return {
        total,
        solved,
        percentage: total > 0 ? Math.round((solved / total) * 100) : 0
      };
    }
  }

  // -------------------------------------------------------------------
  // 3. NEETCODE ARENA UI CONTROLLER
  // -------------------------------------------------------------------
  class NeetcodeArenaApp {
    constructor() {
      this.problems = window.NEETCODE_250_DATA || [];
      this.tracker = new ArenaTracker();
      this.coach = new AISkillCoach(this.problems, this.tracker);

      this.currentProblem = this.problems[0] || null;
      this.currentCategory = "All";
      this.currentDifficulty = "All";
      this.currentStatus = "All";
      this.searchQuery = "";

      // Stopwatch state
      this.timerSeconds = 0;
      this.timerInterval = null;
      this.isTimerRunning = false;
    }

    init() {
      this.bindCategoryTabs();
      this.bindFilters();
      this.bindEditorControls();
      this.bindAICoachModal();
      this.renderProblemList();
      this.loadProblem(this.problems[0] ? this.problems[0].id : null);
      this.updateHeaderStats();
    }

    // Stopwatch logic
    startTimer() {
      if (this.isTimerRunning) return;
      this.isTimerRunning = true;
      const timerVal = document.getElementById('arenaTimerDisplay');
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        if (timerVal) {
          const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
          const s = String(this.timerSeconds % 60).padStart(2, '0');
          timerVal.textContent = `${m}:${s}`;
        }
      }, 1000);
    }

    pauseTimer() {
      this.isTimerRunning = false;
      clearInterval(this.timerInterval);
    }

    resetTimer() {
      this.pauseTimer();
      this.timerSeconds = 0;
      const timerVal = document.getElementById('arenaTimerDisplay');
      if (timerVal) timerVal.textContent = "00:00";
    }

    // Load problem into split-pane
    loadProblem(problemId) {
      const prob = this.problems.find(p => p.id === problemId);
      if (!prob) return;

      this.currentProblem = prob;
      this.resetTimer();
      this.startTimer();

      // Update spec panel
      const idBadge = document.getElementById('specProblemId');
      const diffBadge = document.getElementById('specProblemDiff');
      const catBadge = document.getElementById('specProblemCategory');
      const estBadge = document.getElementById('specProblemEst');
      const titleEl = document.getElementById('specProblemTitle');
      const descEl = document.getElementById('specProblemDesc');
      const leetcodeLink = document.getElementById('specLeetcodeLink');
      const tagsBox = document.getElementById('specProblemTags');
      const casesBox = document.getElementById('specTestCasesList');

      if (idBadge) idBadge.textContent = prob.id;
      if (diffBadge) {
        diffBadge.textContent = prob.difficulty;
        diffBadge.className = `badge-diff diff-${prob.difficulty.toLowerCase()}`;
      }
      if (catBadge) catBadge.textContent = prob.category;
      if (estBadge) estBadge.textContent = `⏱ ~${prob.estimatedMinutes} mins`;
      if (titleEl) titleEl.textContent = prob.title;
      if (descEl) descEl.innerHTML = prob.description;
      if (leetcodeLink) {
        leetcodeLink.href = prob.leetcodeUrl;
        leetcodeLink.style.display = 'inline-flex';
      }

      if (tagsBox) {
        tagsBox.innerHTML = (prob.skills || []).map(s => `<span class="skill-tag">#${s}</span>`).join(' ');
      }

      if (casesBox) {
        casesBox.innerHTML = prob.testCases.map((tc, idx) => `
          <div class="test-case-item">
            <span class="tc-num">Test ${idx + 1}:</span>
            <code>${this.escapeHtml(tc.input)}</code> &rarr; <span class="tc-exp">${this.escapeHtml(tc.expected)}</span>
          </div>
        `).join('');
      }

      // Update Code Input
      const codeInput = document.getElementById('arenaCodeTextarea');
      if (codeInput) {
        codeInput.value = prob.starterCode;
      }

      // Update terminal message
      const term = document.getElementById('arenaPyodideTerminal');
      if (term) {
        const isSolved = this.tracker.isSolved(prob.id);
        const stats = this.tracker.getStats(prob.id);
        if (isSolved && stats) {
          term.innerHTML = `<span class="term-dim">✓ Previously Solved in ${Math.floor(stats.timeSpentSeconds / 60)}m ${stats.timeSpentSeconds % 60}s on ${stats.passedDate}. Press [Run Code Harness] to re-verify.</span>`;
        } else {
          term.innerHTML = `<span class="term-dim">▶ Pyodide WASM Ready. Write your Python 3 solution above and click [Run Verification Harness].</span>`;
        }
      }

      // Highlight active in problem list
      document.querySelectorAll('.problem-list-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-id') === prob.id);
      });
    }

    // Category Tabs & Filtering
    bindCategoryTabs() {
      const tabs = document.querySelectorAll('.cat-tab-btn');
      tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          tabs.forEach(t => t.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.currentCategory = e.currentTarget.getAttribute('data-category');
          this.renderProblemList();
        });
      });
    }

    bindFilters() {
      const searchInput = document.getElementById('arenaSearchInput');
      const diffSelect = document.getElementById('arenaDiffFilter');
      const statusSelect = document.getElementById('arenaStatusFilter');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          this.renderProblemList();
        });
      }

      if (diffSelect) {
        diffSelect.addEventListener('change', (e) => {
          this.currentDifficulty = e.target.value;
          this.renderProblemList();
        });
      }

      if (statusSelect) {
        statusSelect.addEventListener('change', (e) => {
          this.currentStatus = e.target.value;
          this.renderProblemList();
        });
      }

      const randomBtn = document.getElementById('arenaRandomProblemBtn');
      if (randomBtn) {
        randomBtn.addEventListener('click', () => {
          const filtered = this.getFilteredProblems();
          if (filtered.length > 0) {
            const rand = filtered[Math.floor(Math.random() * filtered.length)];
            this.loadProblem(rand.id);
          }
        });
      }
    }

    getFilteredProblems() {
      return this.problems.filter(p => {
        // Category filter
        if (this.currentCategory !== "All" && p.category !== this.currentCategory) return false;
        // Difficulty filter
        if (this.currentDifficulty !== "All" && p.difficulty !== this.currentDifficulty) return false;
        // Status filter
        if (this.currentStatus === "Solved" && !this.tracker.isSolved(p.id)) return false;
        if (this.currentStatus === "Unsolved" && this.tracker.isSolved(p.id)) return false;
        // Search query
        if (this.searchQuery) {
          const matchTitle = p.title.toLowerCase().includes(this.searchQuery);
          const matchId = p.id.toLowerCase().includes(this.searchQuery);
          const matchCategory = p.category.toLowerCase().includes(this.searchQuery);
          const matchTag = (p.skills || []).some(s => s.toLowerCase().includes(this.searchQuery));
          if (!matchTitle && !matchId && !matchCategory && !matchTag) return false;
        }
        return true;
      });
    }

    renderProblemList() {
      const container = document.getElementById('problemListContainer');
      const countEl = document.getElementById('problemListCount');
      if (!container) return;

      const filtered = this.getFilteredProblems();
      if (countEl) countEl.textContent = `${filtered.length} / ${this.problems.length}`;

      if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-list-notice">No problems matched your active filters.</div>`;
        return;
      }

      container.innerHTML = filtered.map(p => {
        const isSolved = this.tracker.isSolved(p.id);
        const isActive = this.currentProblem && this.currentProblem.id === p.id;
        const stats = this.tracker.getStats(p.id);
        const timeBadge = stats ? `<span class="p-time-badge">${Math.floor(stats.timeSpentSeconds / 60)}m</span>` : '';

        return `
          <div class="problem-list-item ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}" data-id="${p.id}">
            <div class="p-status-icon">${isSolved ? '✓' : '○'}</div>
            <div class="p-info">
              <div class="p-id-title">
                <span class="p-id">${p.id}</span>
                <span class="p-title">${p.title}</span>
              </div>
              <div class="p-meta">
                <span class="p-diff diff-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
                <span class="p-cat">${p.category}</span>
                ${timeBadge}
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Click to select
      container.querySelectorAll('.problem-list-item').forEach(el => {
        el.addEventListener('click', () => {
          const pid = el.getAttribute('data-id');
          this.loadProblem(pid);
        });
      });
    }

    bindEditorControls() {
      const codeInput = document.getElementById('arenaCodeTextarea');
      const resetBtn = document.getElementById('arenaResetBtn');
      const copyBtn = document.getElementById('arenaCopyBtn');
      const runBtn = document.getElementById('arenaRunHarnessBtn');

      if (codeInput) {
        codeInput.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
            codeInput.selectionStart = codeInput.selectionEnd = start + 4;
          }
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (this.currentProblem && codeInput) {
            codeInput.value = this.currentProblem.starterCode;
          }
        });
      }

      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          if (codeInput) {
            navigator.clipboard.writeText(codeInput.value).then(() => {
              copyBtn.textContent = '✓ Copied!';
              setTimeout(() => { copyBtn.textContent = '📋 Copy'; }, 2000);
            });
          }
        });
      }

      if (runBtn) {
        runBtn.addEventListener('click', () => this.executePyodideTests());
      }
    }

    async executePyodideTests() {
      const codeInput = document.getElementById('arenaCodeTextarea');
      const term = document.getElementById('arenaPyodideTerminal');
      const runBtn = document.getElementById('arenaRunHarnessBtn');
      const statusText = document.getElementById('arenaRunStatus');

      if (!codeInput || !term || !this.currentProblem) return;

      const userCode = codeInput.value.trim();
      if (!userCode) {
        term.innerHTML = '<span class="term-fail">❌ Code editor is empty. Write your Python solution first.</span>';
        return;
      }

      runBtn.disabled = true;
      if (statusText) statusText.textContent = "⚡ Running Pyodide WASM...";
      term.innerHTML = `⚡ Initializing Python 3.12 WebAssembly sandbox...\n▶ Verifying ${this.currentProblem.id}: ${this.currentProblem.title}...\n\n`;

      try {
        let pyodide = window.pyodideInstance;
        if (!pyodide) {
          term.textContent += '⏳ Loading Pyodide runtime from CDN...\n';
          if (typeof loadPyodide === 'undefined') {
            await new Promise((res, rej) => {
              const s = document.createElement('script');
              s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
              s.onload = res;
              s.onerror = rej;
              document.head.appendChild(s);
            });
          }

          pyodide = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'
          });
          window.pyodideInstance = pyodide;
        }

        // Pass variables safely via pyodide globals
        pyodide.globals.set("__raw_user_code__", userCode);
        pyodide.globals.set("__raw_test_cases__", JSON.stringify(this.currentProblem.testCases));

        const testHarness = `
import sys, io, json, time

__user_stdout = io.StringIO()
__old_stdout = sys.stdout
sys.stdout = __user_stdout

__scope = {}
__exec_error = None
try:
    exec(__raw_user_code__, __scope)
except Exception as e:
    __exec_error = str(e)
finally:
    sys.stdout = __old_stdout

user_prints = __user_stdout.getvalue()

results = []
if __exec_error:
    results.append({"error": __exec_error})
else:
    func_name = None
    for k, v in __scope.items():
        if callable(v) and not k.startswith('_'):
            func_name = k
            break
    
    if not func_name:
        results.append({"error": "No solution function found in code scope."})
    else:
        target_fn = __scope[func_name]
        raw_tests = json.loads(__raw_test_cases__)
        
        for idx, tc in enumerate(raw_tests):
            t_start = time.perf_counter()
            try:
                inp_val = eval(tc["input"])
                if isinstance(inp_val, tuple):
                    res = target_fn(*inp_val)
                else:
                    res = target_fn(inp_val)
                t_end = time.perf_counter()
                
                actual_str = str(res)
                expected_str = tc["expected"].strip()
                passed = (actual_str == expected_str) or (str(bool(res)) == expected_str)
                
                results.append({
                    "case": idx + 1,
                    "input": tc["input"],
                    "expected": expected_str,
                    "actual": actual_str,
                    "passed": passed,
                    "time_ms": round((t_end - t_start) * 1000, 2)
                })
            except Exception as ex:
                results.append({
                    "case": idx + 1,
                    "input": tc["input"],
                    "expected": tc["expected"],
                    "actual": f"Exception: {str(ex)}",
                    "passed": False,
                    "time_ms": 0
                })

json.dumps({"prints": user_prints, "results": results})
`;

        const rawJsonOutput = await pyodide.runPythonAsync(testHarness);
        const parsed = JSON.parse(rawJsonOutput);

        let out = '';
        if (parsed.prints && parsed.prints.trim()) {
          out += `--- User Standard Output (sys.stdout) ---\n${parsed.prints}\n----------------------------------------\n\n`;
        }

        const resList = parsed.results || [];
        if (resList.length > 0 && resList[0].error) {
          out += `❌ Execution Error:\n${resList[0].error}\n`;
          term.innerHTML = `<span class="term-fail">${this.escapeHtml(out)}</span>`;
          if (statusText) statusText.textContent = "❌ Failed";
          return;
        }

        let allPassed = true;
        resList.forEach((tc) => {
          if (tc.passed) {
            out += `✓ Test ${tc.case}: Input ${tc.input} => Output: ${tc.actual} (Expected: ${tc.expected}) [PASS ${tc.time_ms}ms]\n`;
          } else {
            allPassed = false;
            out += `✗ Test ${tc.case}: Input ${tc.input} => Output: ${tc.actual} (Expected: ${tc.expected}) [FAIL]\n`;
          }
        });

        out += `\n======================================================\n`;
        if (allPassed) {
          out += `✨ ALL ${resList.length}/${resList.length} TEST CASES PASSED!\n`;
          out += `⏱ Time spent: ${Math.floor(this.timerSeconds / 60)}m ${this.timerSeconds % 60}s\n`;
          out += `🔥 Solved problem recorded in your persistent streak dossier!`;
          term.innerHTML = `<span class="term-pass">${this.escapeHtml(out)}</span>`;
          if (statusText) statusText.textContent = "✓ Passed All Tests!";

          this.tracker.recordSolve(this.currentProblem, this.timerSeconds);
          this.playChime();
          this.renderProblemList();
          this.updateHeaderStats();
        } else {
          out += `⚠️ SOME TESTS FAILED. Re-evaluate boundary conditions and edge cases.`;
          term.innerHTML = `<span class="term-fail">${this.escapeHtml(out)}</span>`;
          if (statusText) statusText.textContent = "✗ Tests Incomplete";
        }
      } catch (err) {
        term.innerHTML = `<span class="term-fail">❌ Runtime Exception:\n${this.escapeHtml(err.message || String(err))}</span>`;
        if (statusText) statusText.textContent = "❌ Error";
      } finally {
        runBtn.disabled = false;
      }
    }

    playChime() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.85);
      } catch (e) {}
    }

    updateHeaderStats() {
      const streakEl = document.getElementById('arenaHeaderStreak');
      const solvedEl = document.getElementById('arenaHeaderSolved');
      const percentEl = document.getElementById('arenaHeaderPercent');

      if (streakEl) streakEl.textContent = this.tracker.state.currentStreak;
      if (solvedEl) solvedEl.textContent = `${this.tracker.state.totalSolved} / ${this.problems.length}`;
      if (percentEl) {
        const pct = Math.round((this.tracker.state.totalSolved / this.problems.length) * 100);
        percentEl.textContent = `${pct}%`;
      }
    }

    // -------------------------------------------------------------------
    // 4. AI SKILL COACH MODAL BINDINGS & RENDERING
    // -------------------------------------------------------------------
    bindAICoachModal() {
      const openBtn = document.getElementById('openAICoachBtn');
      const closeBtn = document.getElementById('closeAICoachBtn');
      const modal = document.getElementById('aiCoachModal');
      const consultBtn = document.getElementById('aiCoachConsultSenpaiBtn');

      if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
          this.renderAICoachDossier();
          modal.classList.add('active');
        });
      }

      if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
          modal.classList.remove('active');
        });
      }

      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('active');
        });
      }

      if (consultBtn) {
        consultBtn.addEventListener('click', () => this.requestChinatsuDeepPlan());
      }
    }

    renderAICoachDossier() {
      const dossier = this.coach.generateDossier();

      // Readiness meter
      const scoreVal = document.getElementById('coachReadinessVal');
      const scoreBar = document.getElementById('coachReadinessBar');
      if (scoreVal) scoreVal.textContent = `${dossier.readinessScore}/100`;
      if (scoreBar) scoreBar.style.width = `${dossier.readinessScore}%`;

      // Solved breakdown
      const easyEl = document.getElementById('coachEasyCount');
      const medEl = document.getElementById('coachMedCount');
      const hardEl = document.getElementById('coachHardCount');
      if (easyEl) easyEl.textContent = `${dossier.diffStats.Easy.solved}/${dossier.diffStats.Easy.total} (avg ${Math.floor(dossier.diffStats.Easy.avgTime / 60)}m)`;
      if (medEl) medEl.textContent = `${dossier.diffStats.Medium.solved}/${dossier.diffStats.Medium.total} (avg ${Math.floor(dossier.diffStats.Medium.avgTime / 60)}m)`;
      if (hardEl) hardEl.textContent = `${dossier.diffStats.Hard.solved}/${dossier.diffStats.Hard.total} (avg ${Math.floor(dossier.diffStats.Hard.avgTime / 60)}m)`;

      // Recommendations list
      const recsList = document.getElementById('coachRecommendationsList');
      if (recsList) {
        recsList.innerHTML = dossier.recommendations.map(r => `
          <div class="coach-rec-card">
            <div class="rec-header">
              <span class="rec-type-badge">${r.badge}</span>
              <span class="rec-diff diff-${r.problem.difficulty.toLowerCase()}">${r.problem.difficulty}</span>
            </div>
            <div class="rec-title">${r.problem.id}: ${r.problem.title}</div>
            <div class="rec-cat">Category: ${r.problem.category} &bull; Est: ~${r.problem.estimatedMinutes}m</div>
            <p class="rec-rationale">${r.rationale}</p>
            <button class="rec-jump-btn" data-id="${r.problem.id}">Jump into Drill &rarr;</button>
          </div>
        `).join('');

        recsList.querySelectorAll('.rec-jump-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const pid = e.currentTarget.getAttribute('data-id');
            const modal = document.getElementById('aiCoachModal');
            if (modal) modal.classList.remove('active');
            this.loadProblem(pid);
          });
        });
      }

      // Strategic Learning Paths
      const pathsContainer = document.getElementById('coachPathsContainer');
      if (pathsContainer) {
        pathsContainer.innerHTML = dossier.learningPaths.map(p => `
          <div class="coach-path-card">
            <div class="path-header">
              <span class="path-icon">${p.icon}</span>
              <div>
                <div class="path-title">${p.title}</div>
                <div class="path-tag">${p.tag}</div>
              </div>
            </div>
            <p class="path-desc">${p.description}</p>
            <div class="path-progress-bar-wrap">
              <div class="path-progress-bar" style="width: ${p.progress.percentage}%"></div>
            </div>
            <div class="path-meta">
              <span>Progress: ${p.progress.solved} / ${p.progress.total} problems</span>
              <span><strong>${p.progress.percentage}%</strong></span>
            </div>
          </div>
        `).join('');
      }
    }

    async requestChinatsuDeepPlan() {
      const consultBtn = document.getElementById('aiCoachConsultSenpaiBtn');
      const responseArea = document.getElementById('aiCoachLiveResponse');
      if (!consultBtn || !responseArea) return;

      const dossier = this.coach.generateDossier();
      consultBtn.disabled = true;
      consultBtn.innerHTML = '<span>⏳ Consulting Chinatsu Sensei...</span>';
      responseArea.style.display = 'block';
      responseArea.innerHTML = '<div class="coach-typing">Chinatsu-senpai is reviewing your workout metrics and preparing a custom training recommendation...</div>';

      const prompt = `As Chinatsu Kano (Eimei High basketball star and warm senpai), analyze my NEETCode 250 coding metrics:
- Total Solved: ${dossier.totalSolved} / 250 problems
- Readiness Score: ${dossier.readinessScore}/100
- Easy Solved: ${dossier.diffStats.Easy.solved} (avg ${Math.floor(dossier.diffStats.Easy.avgTime / 60)}m)
- Medium Solved: ${dossier.diffStats.Medium.solved} (avg ${Math.floor(dossier.diffStats.Medium.avgTime / 60)}m)
- Hard Solved: ${dossier.diffStats.Hard.solved}
- Top recommendations: ${dossier.recommendations.map(r => r.problem.title).join(', ')}

Please give me your encouraging senpai assessment of my progress, compare my algorithmic training to basketball morning drills, and tell me clearly what to focus on next!`;

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: prompt,
            conversationHistory: []
          })
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        const reply = data.reply || 'Great work on the drills! Keep pushing your boundaries!';
        responseArea.innerHTML = `
          <div class="coach-bubble" style="margin-bottom:0.75rem;">
            <div class="coach-senpai-header">
              <img src="assets/images/neetcode.png" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid #ff2a85;" alt="Hina Chono">
              <span class="senpai-name" style="color:#ff7ebb;">Hina Chono &bull; Rhythm &amp; Drill Coach</span>
            </div>
            <div class="coach-senpai-text">
              Focus on rhythm! Solving <strong>${dossier.totalSolved} / 250</strong> drills with a <strong>${dossier.readinessScore}%</strong> readiness rating is solid progress. Let's tackle <strong>${dossier.recommendations[0] ? dossier.recommendations[0].problem.title : "the next drill"}</strong> to keep your streak hot! 🌸
            </div>
          </div>
          <div class="coach-bubble">
            <div class="coach-senpai-header">
              <span class="senpai-avatar">🏀</span>
              <span class="senpai-name">Chinatsu Kano &bull; Strategy Mentor</span>
            </div>
            <div class="coach-senpai-text">${this.escapeHtml(reply)}</div>
          </div>
        `;
      } catch (err) {
        responseArea.innerHTML = `
          <div class="coach-bubble" style="margin-bottom:0.75rem;">
            <div class="coach-senpai-header">
              <img src="assets/images/neetcode.png" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid #ff2a85;" alt="Hina Chono">
              <span class="senpai-name" style="color:#ff7ebb;">Hina Chono &bull; Rhythm &amp; Drill Coach</span>
            </div>
            <div class="coach-senpai-text">
              Don't let complex test cases break your flow! You've conquered <strong>${dossier.totalSolved} drills</strong> so far. Keep this momentum and your problem-solving will be pure muscle memory! 🌸
            </div>
          </div>
          <div class="coach-bubble fallback">
            <div class="coach-senpai-header">
              <span class="senpai-avatar">🏀</span>
              <span class="senpai-name">Chinatsu Kano &bull; Coaching Strategy</span>
            </div>
            <div class="coach-senpai-text">
              You have completed <strong>${dossier.totalSolved} out of 250</strong> algorithmic drills with an Interview Readiness Rating of <strong>${dossier.readinessScore}%</strong>! Just like shooting morning free throws before anyone else arrives, consistent daily deliberate practice is your greatest superpower.
              <br><br>
              Focus on <strong>${dossier.recommendations[0] ? dossier.recommendations[0].problem.title : "Arrays & Hashing"}</strong> next to build unstoppable confidence! Ganbatte! ✨
            </div>
          </div>
        `;
      } finally {
        consultBtn.disabled = false;
        consultBtn.innerHTML = '<span>✨ Re-consult Chinatsu Sensei</span>';
      }
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

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('neetcode-arena-root')) {
      const app = new NeetcodeArenaApp();
      app.init();
      window.NeetcodeArenaAppInstance = app;
    }
  });

})();
