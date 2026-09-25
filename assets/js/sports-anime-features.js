/**
 * Systems Reference Library - Sports Anime Expansion Features
 * Eimei High Pomodoro Mode, Morning Practice Code Arena, NEETCode 250 DB & Practice Tracker
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------
  // FEATURE 4: NEETCODE 250 PROBLEM DATABASE (MORNING DRILLS)
  // -------------------------------------------------------------------
  const NEETCODE_250_DB = [
    {
      id: "NC-001",
      title: "Contains Duplicate",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      description: "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
      starterCode: "def containsDuplicate(nums):\n    # Write your solution here\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False",
      testCases: [
        { input: "[1,2,3,1]", expected: "True" },
        { input: "[1,2,3,4]", expected: "False" },
        { input: "[1,1,1,3,3,4,3,2,4,2]", expected: "True" }
      ]
    },
    {
      id: "NC-002",
      title: "Valid Anagram",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
      starterCode: "def isAnagram(s, t):\n    # Write your solution here\n    if len(s) != len(t):\n        return False\n    return sorted(s) == sorted(t)",
      testCases: [
        { input: "('anagram', 'nagaram')", expected: "True" },
        { input: "('rat', 'car')", expected: "False" }
      ]
    },
    {
      id: "NC-003",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution.",
      starterCode: "def twoSum(nums, target):\n    # Write your solution here\n    lookup = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in lookup:\n            return [lookup[diff], i]\n        lookup[num] = i\n    return []",
      testCases: [
        { input: "([2,7,11,15], 9)", expected: "[0, 1]" },
        { input: "([3,2,4], 6)", expected: "[1, 2]" }
      ]
    },
    {
      id: "NC-004",
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "Two Pointers",
      description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string `s`, return `true` if it is a palindrome.",
      starterCode: "def isPalindrome(s):\n    # Write your solution here\n    filtered = ''.join(c.lower() for c in s if c.isalnum())\n    return filtered == filtered[::-1]",
      testCases: [
        { input: "('A man, a plan, a canal: Panama',)", expected: "True" },
        { input: "('race a car',)", expected: "False" },
        { input: "(' ',)", expected: "True" }
      ]
    },
    {
      id: "NC-005",
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      category: "Sliding Window",
      description: "You are given an array `prices` where `prices[i]` is the price of a given stock on the $i^{\\text{th}}$ day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve.",
      starterCode: "def maxProfit(prices):\n    # Write your solution here\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit",
      testCases: [
        { input: "([7,1,5,3,6,4],)", expected: "5" },
        { input: "([7,6,4,3,1],)", expected: "0" }
      ]
    },
    {
      id: "NC-006",
      title: "Binary Search",
      difficulty: "Easy",
      category: "Binary Search",
      description: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`. You must write an algorithm with $O(\\log n)$ runtime complexity.",
      starterCode: "def search(nums, target):\n    # Write your solution here\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1",
      testCases: [
        { input: "([-1,0,3,5,9,12], 9)", expected: "4" },
        { input: "([-1,0,3,5,9,12], 2)", expected: "-1" }
      ]
    }
  ];

  // -------------------------------------------------------------------
  // FEATURE 5: LOCALSTORAGE DAILY TRACKER & STREAK MANAGER
  // -------------------------------------------------------------------
  class PracticeTracker {
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
            lastSolvedDate: parsed.lastSolvedDate || null,
            currentStreak: parsed.currentStreak || 0,
            totalSolved: parsed.totalSolved || 0,
            solvedProblemIds: Array.isArray(parsed.solvedProblemIds) ? parsed.solvedProblemIds : [],
            activityHistory: parsed.activityHistory || {}
          };
        }
      } catch (e) {
        console.warn('[PracticeTracker] Storage load error:', e);
      }
      return {
        lastSolvedDate: null,
        currentStreak: 0,
        totalSolved: 0,
        solvedProblemIds: [],
        activityHistory: {}
      };
    }

    save() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
      } catch (e) {
        console.warn('[PracticeTracker] Storage save error:', e);
      }
    }

    getTodayDateString() {
      const d = new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    getYesterdayDateString() {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    markSolved(problemId) {
      const today = this.getTodayDateString();
      const yesterday = this.getYesterdayDateString();
      let isNewSolve = false;

      if (!this.state.solvedProblemIds.includes(problemId)) {
        this.state.solvedProblemIds.push(problemId);
        this.state.totalSolved = this.state.solvedProblemIds.length;
        isNewSolve = true;
      }

      // Record daily activity
      this.state.activityHistory[today] = (this.state.activityHistory[today] || 0) + 1;

      // Calculate streak
      if (this.state.lastSolvedDate !== today) {
        if (this.state.lastSolvedDate === yesterday) {
          this.state.currentStreak += 1;
        } else if (!this.state.lastSolvedDate) {
          this.state.currentStreak = 1;
        } else {
          // Missed a day -> reset to 1
          this.state.currentStreak = 1;
        }
        this.state.lastSolvedDate = today;
      }

      this.save();
      this.renderHUD(true); // true triggers pop animation
      return isNewSolve;
    }

    renderHUD(triggerPop = false) {
      const streakEl = document.getElementById('arenaStreakVal');
      const solvedEl = document.getElementById('arenaSolvedVal');
      const dotsContainer = document.getElementById('weekDotsRow');

      if (streakEl) {
        streakEl.textContent = this.state.currentStreak;
        if (triggerPop) {
          streakEl.classList.remove('streak-pop-active');
          void streakEl.offsetWidth; // trigger reflow
          streakEl.classList.add('streak-pop-active');
        }
      }

      if (solvedEl) {
        solvedEl.textContent = `${this.state.totalSolved} / 250`;
      }

      // Render 7-day visualizer
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        const today = new Date();
        const currentDayIndex = (today.getDay() + 6) % 7; // 0 = Mon, 6 = Sun

        for (let i = 0; i < 7; i++) {
          const d = new Date(today);
          d.setDate(today.getDate() - (currentDayIndex - i));
          const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          const isSolved = Boolean(this.state.activityHistory[dateStr]);
          const isToday = i === currentDayIndex;

          const dot = document.createElement('div');
          dot.className = `day-dot ${isSolved ? 'active-dot' : ''} ${isToday ? 'today-dot' : ''}`;
          dot.title = `${dateStr}: ${isSolved ? 'Completed morning practice!' : 'Rest day'}`;
          dot.textContent = dayNames[i];
          dotsContainer.appendChild(dot);
        }
      }
    }
  }

  // -------------------------------------------------------------------
  // FEATURE 1: EIMEI HIGH POMODORO MODE (STUDY FOCUS)
  // -------------------------------------------------------------------
  class PomodoroManager {
    constructor() {
      this.workTime = 25 * 60;
      this.shortBreak = 5 * 60;
      this.longBreak = 15 * 60;
      this.totalTime = this.workTime;
      this.timeLeft = this.workTime;
      this.mode = 'work'; // 'work' | 'shortBreak' | 'longBreak'
      this.isRunning = false;
      this.timerInterval = null;
      this.circumference = 2 * Math.PI * 95; // r=95 for SVG circle
    }

    init() {
      this.injectMarkup();
      this.bindEvents();
      this.updateDisplay();
    }

    injectMarkup() {
      if (document.getElementById('studyModeBgOverlay')) return;

      // Fullscreen Background Layer
      const bg = document.createElement('div');
      bg.id = 'studyModeBgOverlay';
      bg.className = 'study-mode-bg-overlay';
      bg.setAttribute('aria-hidden', 'true');
      document.body.appendChild(bg);

      // Glassmorphic Pomodoro Modal
      const modal = document.createElement('div');
      modal.id = 'pomodoroModal';
      modal.className = 'pomodoro-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-label', 'Eimei High Study Mode Pomodoro Timer');

      modal.innerHTML = `
        <div class="pomodoro-header-badge">
          <span>📚</span>
          <span>Eimei High Library // 放課後自習室</span>
        </div>
        <div class="pomodoro-sub-caption">Golden Hour Deep Work &amp; Systems Architecture Focus</div>

        <div class="pomodoro-mode-switch">
          <button class="pomodoro-mode-btn active" data-mode="work" type="button">Focus (25m)</button>
          <button class="pomodoro-mode-btn" data-mode="shortBreak" type="button">Short Break (5m)</button>
          <button class="pomodoro-mode-btn" data-mode="longBreak" type="button">Long Break (15m)</button>
        </div>

        <div class="pomodoro-timer-circle">
          <svg class="pomodoro-svg-ring" viewBox="0 0 220 220">
            <circle class="pomodoro-ring-bg" cx="110" cy="110" r="95"></circle>
            <circle id="pomodoroRingProgress" class="pomodoro-ring-progress" cx="110" cy="110" r="95"></circle>
          </svg>
          <div class="pomodoro-time-text" id="pomodoroTimeText">25:00</div>
          <div class="pomodoro-status-label" id="pomodoroStatusLabel">READY TO STUDY</div>
        </div>

        <div class="pomodoro-controls">
          <button class="pomodoro-btn-primary" id="pomodoroTogglePlayBtn" type="button">
            <span id="pomodoroPlayIcon">▶</span>
            <span id="pomodoroPlayText">Start Focus</span>
          </button>
          <button class="pomodoro-btn-secondary" id="pomodoroResetBtn" type="button" title="Reset current session">
            ↺ Reset
          </button>
        </div>

        <div>
          <button class="pomodoro-exit-btn" id="pomodoroExitBtn" type="button">
            <span>✕</span>
            <span>Exit Study Mode (Esc)</span>
          </button>
        </div>
      `;

      document.body.appendChild(modal);
    }

    bindEvents() {
      // Header study mode button
      const toggleBtns = document.querySelectorAll('.study-mode-toggle-btn');
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => this.toggleStudyMode());
      });

      // Modal Controls
      const playBtn = document.getElementById('pomodoroTogglePlayBtn');
      const resetBtn = document.getElementById('pomodoroResetBtn');
      const exitBtn = document.getElementById('pomodoroExitBtn');

      if (playBtn) playBtn.addEventListener('click', () => this.toggleTimer());
      if (resetBtn) resetBtn.addEventListener('click', () => this.resetTimer());
      if (exitBtn) exitBtn.addEventListener('click', () => this.exitStudyMode());

      // Mode Switchers
      const modeBtns = document.querySelectorAll('.pomodoro-mode-btn');
      modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetMode = e.currentTarget.getAttribute('data-mode');
          this.switchMode(targetMode);
        });
      });

      // Keyboard Shortcuts: Space to Start/Pause, Esc to Exit
      document.addEventListener('keydown', (e) => {
        if (document.body.classList.contains('study-mode-active')) {
          if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            this.toggleTimer();
          } else if (e.code === 'Escape') {
            this.exitStudyMode();
          }
        }
      });
    }

    toggleStudyMode() {
      const isActive = document.body.classList.contains('study-mode-active');
      if (isActive) {
        this.exitStudyMode();
      } else {
        this.enterStudyMode();
      }
    }

    enterStudyMode() {
      document.body.classList.add('study-mode-active');
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    exitStudyMode() {
      document.body.classList.remove('study-mode-active');
      if (this.isRunning) {
        this.pauseTimer();
      }
    }

    switchMode(mode) {
      this.pauseTimer();
      this.mode = mode;
      if (mode === 'work') this.totalTime = this.workTime;
      else if (mode === 'shortBreak') this.totalTime = this.shortBreak;
      else if (mode === 'longBreak') this.totalTime = this.longBreak;

      this.timeLeft = this.totalTime;

      // Update button active state
      document.querySelectorAll('.pomodoro-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });

      const label = document.getElementById('pomodoroStatusLabel');
      if (label) {
        label.textContent = mode === 'work' ? 'READY TO STUDY' : 'BREAK TIME';
      }

      this.updateDisplay();
    }

    toggleTimer() {
      if (this.isRunning) {
        this.pauseTimer();
      } else {
        this.startTimer();
      }
    }

    startTimer() {
      if (this.isRunning) return;
      this.isRunning = true;

      const playIcon = document.getElementById('pomodoroPlayIcon');
      const playText = document.getElementById('pomodoroPlayText');
      const label = document.getElementById('pomodoroStatusLabel');

      if (playIcon) playIcon.textContent = '⏸';
      if (playText) playText.textContent = 'Pause';
      if (label) label.textContent = this.mode === 'work' ? 'FOCUSING...' : 'RESTING...';

      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.updateDisplay();

        if (this.timeLeft <= 0) {
          this.timerComplete();
        }
      }, 1000);
    }

    pauseTimer() {
      if (!this.isRunning) return;
      this.isRunning = false;
      clearInterval(this.timerInterval);

      const playIcon = document.getElementById('pomodoroPlayIcon');
      const playText = document.getElementById('pomodoroPlayText');
      const label = document.getElementById('pomodoroStatusLabel');

      if (playIcon) playIcon.textContent = '▶';
      if (playText) playText.textContent = 'Resume';
      if (label) label.textContent = 'PAUSED';
    }

    resetTimer() {
      this.pauseTimer();
      this.timeLeft = this.totalTime;
      this.updateDisplay();
      const label = document.getElementById('pomodoroStatusLabel');
      if (label) label.textContent = 'READY TO STUDY';
    }

    timerComplete() {
      this.pauseTimer();
      this.playChime();
      const label = document.getElementById('pomodoroStatusLabel');
      if (label) label.textContent = 'COMPLETE! ✨';

      // Auto switch to break if finished work
      if (this.mode === 'work') {
        setTimeout(() => this.switchMode('shortBreak'), 1500);
      } else {
        setTimeout(() => this.switchMode('work'), 1500);
      }
    }

    updateDisplay() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      const timeText = document.getElementById('pomodoroTimeText');
      if (timeText) timeText.textContent = timeStr;

      // Update ring offset
      const progressRing = document.getElementById('pomodoroRingProgress');
      if (progressRing) {
        const offset = this.circumference * (1 - this.timeLeft / this.totalTime);
        progressRing.style.strokeDashoffset = offset;
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
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.3); // E6
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.85);
      } catch (e) {}
    }
  }

  // -------------------------------------------------------------------
  // FEATURE 2: MORNING PRACTICE CODE ARENA (PYODIDE WASM SPLIT-PANE)
  // -------------------------------------------------------------------
  class MorningPracticeArena {
    constructor(tracker) {
      this.tracker = tracker;
      this.problems = (typeof window !== 'undefined' && window.NEETCODE_250_DATA && window.NEETCODE_250_DATA.length > 0)
        ? window.NEETCODE_250_DATA
        : NEETCODE_250_DB;
      this.currentIndex = 0;
      this.pyodideRuntime = null;
    }

    init() {
      this.bindUI();
      this.loadProblem(0);
      this.tracker.renderHUD();
    }

    bindUI() {
      const prevBtn = document.getElementById('arenaPrevBtn');
      const nextBtn = document.getElementById('arenaNextBtn');
      const randomBtn = document.getElementById('arenaRandomBtn');
      const selectEl = document.getElementById('arenaProblemSelect');
      const runBtn = document.getElementById('arenaRunBtn');
      const resetBtn = document.getElementById('arenaResetCodeBtn');
      const copyBtn = document.getElementById('arenaCopyCodeBtn');
      const codeInput = document.getElementById('arenaCodeInput');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          const newIdx = (this.currentIndex - 1 + this.problems.length) % this.problems.length;
          this.loadProblem(newIdx);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const newIdx = (this.currentIndex + 1) % this.problems.length;
          this.loadProblem(newIdx);
        });
      }

      if (randomBtn) {
        randomBtn.addEventListener('click', () => {
          const randIdx = Math.floor(Math.random() * this.problems.length);
          this.loadProblem(randIdx);
        });
      }

      if (selectEl) {
        // Populate select options
        selectEl.innerHTML = this.problems.map((p, idx) => `
          <option value="${idx}">${p.id}: ${p.title} (${p.difficulty})</option>
        `).join('');

        selectEl.addEventListener('change', (e) => {
          this.loadProblem(parseInt(e.target.value, 10));
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const cur = this.problems[this.currentIndex];
          if (codeInput && cur) {
            codeInput.value = cur.starterCode;
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

      // Allow Tab key indent in textarea
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

      if (runBtn) {
        runBtn.addEventListener('click', () => this.runTestSuite());
      }
    }

    loadProblem(index) {
      this.currentIndex = index;
      const p = this.problems[index];
      if (!p) return;

      const idBadge = document.getElementById('problemIdBadge');
      const diffBadge = document.getElementById('problemDiffBadge');
      const catBadge = document.getElementById('problemCatBadge');
      const titleEl = document.getElementById('problemTitle');
      const descEl = document.getElementById('problemDesc');
      const casesBox = document.getElementById('problemCasesList');
      const codeInput = document.getElementById('arenaCodeInput');
      const selectEl = document.getElementById('arenaProblemSelect');

      if (idBadge) idBadge.textContent = p.id;
      if (diffBadge) {
        diffBadge.textContent = p.difficulty;
        diffBadge.className = `problem-diff-badge diff-${p.difficulty.toLowerCase()}`;
      }
      if (catBadge) catBadge.textContent = p.category;
      if (titleEl) titleEl.textContent = p.title;
      if (descEl) descEl.innerHTML = p.description;
      if (selectEl) selectEl.value = index;

      if (casesBox) {
        casesBox.innerHTML = p.testCases.map((tc, idx) => `
          <div class="problem-case-item">
            <span>Test Case ${idx + 1}:</span> <strong>${tc.input}</strong> &rarr; <code>${tc.expected}</code>
          </div>
        `).join('');
      }

      if (codeInput) {
        codeInput.value = p.starterCode;
      }
    }

    async runTestSuite() {
      const codeInput = document.getElementById('arenaCodeInput');
      const terminal = document.getElementById('arenaTerminalOutput');
      const runBtn = document.getElementById('arenaRunBtn');
      const statusInd = document.getElementById('arenaStatusInd');
      const curProblem = this.problems[this.currentIndex];

      if (!codeInput || !terminal || !curProblem) return;

      const userCode = codeInput.value.trim();
      if (!userCode) {
        terminal.textContent = '❌ Error: Code input is empty. Write your Python solution first.';
        return;
      }

      runBtn.disabled = true;
      if (statusInd) statusInd.innerHTML = '<span>⚡ Running Pyodide WASM...</span>';
      terminal.textContent = `⚡ Initializing Python 3.12 WebAssembly environment...\n▶ Executing ${curProblem.id}: ${curProblem.title}...\n\n`;

      try {
        // Load Pyodide via window.loadPyodide or helper
        let pyodide = window.pyodideInstance;
        if (!pyodide) {
          if (typeof loadPyodide === 'undefined') {
            terminal.textContent += '⏳ Loading Pyodide runtime from CDN...\n';
            await new Promise((res, rej) => {
              const s = document.createElement('script');
              s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
              s.onload = res;
              s.onerror = () => rej(new Error('Failed to load Pyodide script'));
              document.head.appendChild(s);
            });
          }

          terminal.textContent += '⚙️ Bootstrapping CPython 3.12 WebAssembly engine...\n';
          pyodide = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'
          });
          window.pyodideInstance = pyodide;
        }

        // Set variables safely in Pyodide global namespace
        pyodide.globals.set("__raw_user_code__", userCode);
        pyodide.globals.set("__raw_test_cases__", JSON.stringify(curProblem.testCases));

        // Python Test Runner Harness
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
    # Identify function name in scope
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
                # Parse input safely in python
                inp_val = eval(tc["input"])
                if isinstance(inp_val, tuple):
                    res = target_fn(*inp_val)
                else:
                    res = target_fn(inp_val)
                t_end = time.perf_counter()
                
                # Compare as normalized string
                actual_str = str(res)
                expected_str = tc["expected"].strip()
                
                # Check list/bool equivalence
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

        let formattedOutput = '';
        if (parsed.prints && parsed.prints.trim()) {
          formattedOutput += `--- Standard Output (sys.stdout) ---\n${parsed.prints}\n-----------------------------------\n\n`;
        }

        const resList = parsed.results || [];
        if (resList.length > 0 && resList[0].error) {
          formattedOutput += `❌ Execution Error:\n${resList[0].error}\n`;
          terminal.innerHTML = `<span class="terminal-fail">${formattedOutput}</span>`;
          if (statusInd) statusInd.textContent = '❌ Execution Failed';
          return;
        }

        let allPassed = true;
        resList.forEach((tc) => {
          if (tc.passed) {
            formattedOutput += `✓ Test ${tc.case}: Input ${tc.input} => Output: ${tc.actual} (Expected: ${tc.expected}) [PASS ${tc.time_ms}ms]\n`;
          } else {
            allPassed = false;
            formattedOutput += `✗ Test ${tc.case}: Input ${tc.input} => Output: ${tc.actual} (Expected: ${tc.expected}) [FAIL]\n`;
          }
        });

        formattedOutput += `\n======================================================\n`;
        if (allPassed) {
          formattedOutput += `✨ ALL ${resList.length}/${resList.length} TEST CASES PASSED!\n`;
          formattedOutput += `🔥 Morning Practice complete! Streak updated.\n`;
          terminal.innerHTML = `<span class="terminal-pass">${formattedOutput}</span>`;
          if (statusInd) statusInd.textContent = '✓ All Tests Passed!';

          // Mark problem solved in localStorage tracker
          this.tracker.markSolved(curProblem.id);
        } else {
          formattedOutput += `⚠️ SOME TESTS FAILED. Check logic and try again.\n`;
          terminal.innerHTML = `<span class="terminal-fail">${formattedOutput}</span>`;
          if (statusInd) statusInd.textContent = '✗ Tests Incomplete';
        }
      } catch (err) {
        terminal.innerHTML = `<span class="terminal-fail">❌ Runtime Exception:\n${err.message || err}</span>`;
        if (statusInd) statusInd.textContent = '❌ Error';
      } finally {
        runBtn.disabled = false;
      }
    }
  }

  // -------------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // -------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Practice Tracker & HUD
    const tracker = new PracticeTracker();
    window.SystemsPracticeTracker = tracker;

    // 2. Initialize Pomodoro Study Mode
    const pomodoro = new PomodoroManager();
    pomodoro.init();
    window.SystemsPomodoro = pomodoro;

    // 3. Initialize Morning Practice Arena (if section exists in DOM)
    if (document.getElementById('morning-practice-arena')) {
      const arena = new MorningPracticeArena(tracker);
      arena.init();
      window.SystemsMorningArena = arena;
    }
  });

})();
