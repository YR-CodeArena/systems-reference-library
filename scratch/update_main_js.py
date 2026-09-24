import re

with open("assets/js/main.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update the section around ensureSkulptLoaded to include Pyodide and Piston helpers
old_skulpt_section = """    // --- Universal Multi-Language Code Runner Engine ---
    function ensureSkulptLoaded() {
      if (typeof window !== "undefined" && window.Sk && window.Sk.importMainWithBody) {
        return Promise.resolve(window.Sk);
      }
      return new Promise((resolve, reject) => {
        if (typeof document === "undefined") return resolve(null);
        const s1 = document.createElement("script");
        s1.src = "assets/js/skulpt.min.js";
        s1.onload = () => {
          const s2 = document.createElement("script");
          s2.src = "assets/js/skulpt-stdlib.js";
          s2.onload = () => resolve(window.Sk);
          s2.onerror = reject;
          document.head.appendChild(s2);
        };
        s1.onerror = reject;
        document.head.appendChild(s1);
      });
    }"""

new_skulpt_section = """    // --- Universal Multi-Language Code Runner Engine ---
    // 1. Pyodide WebAssembly Python 3.12 Runtime Loader (Runs Client-Side in Browser on GitHub Pages)
    let pyodideInstance = null;
    let pyodideLoadingPromise = null;

    function getPyodideRuntime(statusCallback) {
      if (pyodideInstance) return Promise.resolve(pyodideInstance);
      if (pyodideLoadingPromise) return pyodideLoadingPromise;

      pyodideLoadingPromise = new Promise(async (resolve, reject) => {
        try {
          if (typeof loadPyodide === "undefined") {
            if (statusCallback) statusCallback("Loading Python 3 WebAssembly engine from CDN...");
            await new Promise((res, rej) => {
              const s = document.createElement("script");
              s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
              s.onload = res;
              s.onerror = () => rej(new Error("Failed to load Pyodide CDN"));
              document.head.appendChild(s);
            });
          }
          if (statusCallback) statusCallback("Initializing Python 3 WebAssembly runtime (Pyodide)...");
          const pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
          });
          pyodideInstance = pyodide;
          resolve(pyodide);
        } catch (err) {
          pyodideLoadingPromise = null;
          reject(err);
        }
      });

      return pyodideLoadingPromise;
    }

    // 2. Skulpt Local Engine Loader (Offline fallback)
    function ensureSkulptLoaded() {
      if (typeof window !== "undefined" && window.Sk && window.Sk.importMainWithBody) {
        return Promise.resolve(window.Sk);
      }
      return new Promise((resolve, reject) => {
        if (typeof document === "undefined") return resolve(null);
        const s1 = document.createElement("script");
        s1.src = "assets/js/skulpt.min.js";
        s1.onload = () => {
          const s2 = document.createElement("script");
          s2.src = "assets/js/skulpt-stdlib.js";
          s2.onload = () => resolve(window.Sk);
          s2.onerror = reject;
          document.head.appendChild(s2);
        };
        s1.onerror = reject;
        document.head.appendChild(s1);
      });
    }

    // 3. Multi-Language Execution API (with safe fallback if whitelist/offline)
    async function tryPistonExecute(language, code, stdin = "") {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            language: language,
            version: "*",
            files: [{ content: code }],
            stdin: stdin || ""
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) return null;
        const data = await response.json();
        if (data && data.run && typeof data.run.output === "string") {
          return {
            isSuccess: data.run.code === 0,
            exitCode: data.run.code !== undefined ? data.run.code : 0,
            output: data.run.output.trim()
          };
        }
      } catch (e) {
        return null;
      }
      return null;
    }"""

if old_skulpt_section in content:
    content = content.replace(old_skulpt_section, new_skulpt_section, 1)
    print("Updated skulpt/pyodide/piston loader section.")
else:
    print("Error: old_skulpt_section not found!")

# 2. Update requestTerminalInput to provide intelligent defaults on Enter
old_request_input = """        function submitValue() {
          if (isDone) return;
          isDone = true;
          const val = inputField.value;
          if (liveTag) {
            liveTag.textContent = origTag;
            liveTag.classList.remove("input-wait");
          }
          inputRow.remove();
          resolve(val);
        }"""

new_request_input = """        function submitValue() {
          if (isDone) return;
          isDone = true;
          let val = inputField.value;
          if (val === "" || val === null) {
            const pLower = (promptText || "").toLowerCase();
            if (pLower.includes("name")) val = "Developer";
            else if (pLower.includes("age")) val = "25";
            else if (pLower.includes("item")) val = "Mechanical Keyboard";
            else if (pLower.includes("price") || pLower.includes("radius") || pLower.includes("length") || pLower.includes("width") || pLower.includes("side")) val = "10";
            else if (pLower.includes("unit") || pLower.includes("quantity") || pLower.includes("rows") || pLower.includes("cols") || pLower.includes("divisor") || pLower.includes("number")) val = "2";
            else if (pLower.includes("symbol")) val = "*";
            else if (pLower.includes("letter")) val = "P";
            else val = "5";
          }
          if (liveTag) {
            liveTag.textContent = origTag;
            liveTag.classList.remove("input-wait");
          }
          inputRow.remove();
          resolve(val);
        }"""

if old_request_input in content:
    content = content.replace(old_request_input, new_request_input, 1)
    print("Updated requestTerminalInput defaults.")
else:
    print("Error: old_request_input not found!")

# 3. Update runner call for runSysEngine to await
content = content.replace("result = runSysEngine(codeText);", "result = await runSysEngine(codeText);")
print("Ensured await runSysEngine.")

# 4. Replace runPythonEngine and runJavaEngine and runSysEngine
# Let's find the start of runPythonEngine
python_engine_start = "    // --- Dynamic Native Skulpt Python Engine with Interactive User Input ---"
java_engine_end = "      return {\n        isSuccess: true,\n        exitCode: 0,\n        output: `OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS)\\nCompiled: 1 source file to bytecode.\\n[JIT C2 Compiler] Inlined hot method entry points.\\nExecution finished with exit code 0.`\n      };\n    }"

# Check if these markers exist
idx1 = content.find(python_engine_start)
idx2 = content.find(java_engine_end)
print("python_engine_start idx:", idx1, "java_engine_end idx:", idx2)

with open("scratch/check_indices.txt", "w", encoding="utf-8") as f:
    f.write(f"{idx1}, {idx2}")
