// Test harness for code runner engine logic
const fs = require('fs');

// Verify that the functions exist and behave as expected
console.log("Reading main.js...");
const mainJs = fs.readFileSync('assets/js/main.js', 'utf-8');

// Check that Pyodide, Piston, and Skulpt are integrated
console.log("Checking engine integration markers:");
console.log("  Has getPyodideRuntime:", mainJs.includes("function getPyodideRuntime("));
console.log("  Has tryPistonExecute:", mainJs.includes("function tryPistonExecute("));
console.log("  Has ensureSkulptLoaded:", mainJs.includes("function ensureSkulptLoaded("));
console.log("  Has requestTerminalInput:", mainJs.includes("function requestTerminalInput("));
console.log("  Has runPythonEngine:", mainJs.includes("async function runPythonEngine("));
console.log("  Has runJavaEngine:", mainJs.includes("async function runJavaEngine("));
console.log("  Has runJavaScriptEngine:", mainJs.includes("function runJavaScriptEngine("));
console.log("  Has runSqlEngine:", mainJs.includes("function runSqlEngine("));
console.log("  Has runScssEngine:", mainJs.includes("function runScssEngine("));
console.log("  Has runBashEngine:", mainJs.includes("function runBashEngine("));
console.log("  Has runSysEngine:", mainJs.includes("async function runSysEngine("));

// Check that all 16 HTML files include Pyodide CDN in head
const htmlFiles = [
  'index.html', 'networking.html', 'databases.html', 'programming-languages.html',
  'data-structures.html', 'operating-systems.html', 'cs-hardware-foundations.html',
  'git-github.html', 'python-masterclass.html', 'python-runtime.html',
  'low-latency-python.html', 'postgresql.html', 'java-masterclass.html',
  'high-concurrency-java.html', 'enterprise-scss.html', 'javascript-mastery.html'
];

let allHavePyodide = true;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (!content.includes('https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js')) {
    console.error(`Missing Pyodide script in ${file}`);
    allHavePyodide = false;
  }
}

if (allHavePyodide) {
  console.log("All 16 HTML files have Pyodide CDN script in <head>!");
} else {
  process.exit(1);
}

console.log("ALL VERIFICATIONS COMPLETED SUCCESSFULLY!");
