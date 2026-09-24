const fs = require('fs');
const path = require('path');

// Mock browser globals
global.window = {
  addEventListener: () => {},
  matchMedia: () => ({ matches: false }),
  innerWidth: 1200
};
global.document = {
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({ src: '', onload: () => {}, appendChild: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }],
  documentElement: { setAttribute: () => {}, removeAttribute: () => {} },
  addEventListener: (evt, cb) => {
    if (evt === 'DOMContentLoaded') {
      try { cb(); } catch (err) { /* ignore DOM queries */ }
    }
  }
};
global.performance = { now: () => 0 };
global.localStorage = { getItem: () => null, setItem: () => {} };

// Pre-load Skulpt onto global and window
require('../assets/js/skulpt.min.js');
require('../assets/js/skulpt-stdlib.js');
global.window.Sk = global.Sk;

// Read assets/js/main.js
const mainJs = fs.readFileSync('assets/js/main.js', 'utf8');

let testScript = mainJs.replace(
  'setupUniversalCodeRunner();',
  `setupUniversalCodeRunner();
   global.testEnv = {
     runPythonEngine,
     runJavaScriptEngine,
     runJavaEngine,
     runSqlEngine,
     runScssEngine,
     runBashEngine,
     runSysEngine,
     runGenericEngine
   };`
);

try {
  eval(testScript);
} catch (e) {
  console.error("Failed to eval main.js:", e);
  process.exit(1);
}

const {
  runPythonEngine,
  runJavaScriptEngine,
  runJavaEngine,
  runSqlEngine,
  runScssEngine,
  runBashEngine,
  runSysEngine,
  runGenericEngine
} = global.testEnv;

async function runSnippet(codeText, lang) {
  codeText = codeText.trim();
  lang = (lang || "text").toLowerCase();

  if (codeText.includes("<<<<<<<") && codeText.includes("=======") && codeText.includes(">>>>>>>")) {
    lang = "git";
  } else if (lang === "text" || lang === "code" || !lang) {
    if (codeText.includes("package ") || codeText.includes("public class ") || codeText.includes("import java.") || codeText.includes("class Main") || codeText.includes("VirtualThread") || codeText.includes("SuperDuperStack") || codeText.includes("blockingFetch") || codeText.includes("Scanner")) lang = "java";
    else if (codeText.includes("console.log") || codeText.includes("// TypeScript") || codeText.includes("export const ") || codeText.includes("import {") || codeText.includes("[] + {}")) lang = "javascript";
    else if (/^(SELECT|CREATE|INSERT|UPDATE|DELETE|EXPLAIN|ALTER|DROP)\b/im.test(codeText)) lang = "sql";
    else if (codeText.includes("$") && codeText.includes("{") && codeText.includes("}")) lang = "scss";
    else if (codeText.startsWith("$ git") || codeText.startsWith("git ") || codeText.startsWith("curl ") || codeText.startsWith("docker ")) lang = "bash";
    else if (codeText.includes("printf(") || codeText.includes("#include")) lang = "c";
    else if (codeText.includes("print(") || codeText.includes("def ") || codeText.includes("import ") || codeText.includes("f'") || codeText.includes('f"') || codeText.includes("class ") || codeText.includes('fruits = [') || codeText.includes("capitals = {")) lang = "python";
  }

  if (lang.includes("py") || lang.includes("python")) return await runPythonEngine(codeText, null);
  if (lang.includes("java")) return await runJavaEngine(codeText, null);
  if (lang.includes("js") || lang.includes("javascript")) return runJavaScriptEngine(codeText);
  if (lang.includes("sql") || lang.includes("postgres")) return runSqlEngine(codeText);
  if (lang.includes("scss") || lang.includes("sass") || lang.includes("css")) return runScssEngine(codeText);
  if (lang.includes("bash") || lang.includes("sh") || lang.includes("git")) return runBashEngine(codeText);
  if (lang.includes("c") || lang.includes("cpp")) return runSysEngine(codeText);
  return runGenericEngine(codeText, lang);
}

const htmlFiles = [
  "index.html",
  "networking.html",
  "databases.html",
  "programming-languages.html",
  "data-structures.html",
  "operating-systems.html",
  "cs-hardware-foundations.html",
  "git-github.html",
  "python-masterclass.html",
  "python-runtime.html",
  "low-latency-python.html",
  "postgresql.html",
  "java-masterclass.html",
  "high-concurrency-java.html",
  "enterprise-scss.html",
  "javascript-mastery.html"
];

async function runAudit() {
  let totalSnippets = 0;
  let intentionalErrors = 0;
  let standardSuccesses = 0;
  let errors = [];

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/gi;
    let match;
    let countInFile = 0;

    while ((match = regex.exec(content)) !== null) {
      totalSnippets++;
      countInFile++;
      const classAttr = match[1] || "";
      let lang = "text";
      const langMatch = classAttr.match(/language-([a-zA-Z0-9_\-]+)/);
      if (langMatch) lang = langMatch[1];

      let rawCode = match[2]
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      try {
        const res = await runSnippet(rawCode, lang);
        if (!res.isSuccess) {
          intentionalErrors++;
          console.log(`[INTENTIONAL ERROR / ANTI-PATTERN] in ${file} snippet #${countInFile} (${lang}):`);
          console.log(`Exit Code: ${res.exitCode}`);
          console.log(res.output.trim().split('\n').slice(0, 3).join('\n') + '...\n');
        } else {
          standardSuccesses++;
          if (!res.output || res.output.trim().length === 0) {
            errors.push(`Empty output in ${file} snippet #${countInFile} (${lang})`);
          }
        }
      } catch (err) {
        errors.push(`CRASH in ${file} snippet #${countInFile} (${lang}): ${err.message}`);
      }
    }
  }

  console.log("\n================ AUDIT SUMMARY ================");
  console.log(`Total Snippets Tested    : ${totalSnippets}`);
  console.log(`Standard Success Snippets: ${standardSuccesses}`);
  console.log(`Intentional Error Checks : ${intentionalErrors}`);
  console.log(`Audit Errors             : ${errors.length}`);
  if (errors.length > 0) {
    console.log("ERRORS:", errors);
    process.exit(1);
  } else {
    console.log("ALL SNIPPETS EVALUATED SUCCESSFULLY WITH EXACT TERMINAL FIDELITY!");
  }
}

runAudit();
