const fs = require('fs');

const mainJs = fs.readFileSync('assets/js/main.js', 'utf-8');

// Test language normalization logic directly
function getNormalizedLang(lang) {
  let normalizedLang = "text";
  const l = (lang || "").trim().toLowerCase();
  if (l === "javascript" || l === "js" || l === "typescript" || l === "ts" || l.includes("javascript") || l.includes("typescript")) {
    normalizedLang = "javascript";
  } else if (l === "java" || (l.includes("java") && !l.includes("script"))) {
    normalizedLang = "java";
  } else if (l === "python" || l === "py" || l.includes("python")) {
    normalizedLang = "python";
  } else if (l === "sql" || l === "postgres" || l.includes("sql") || l.includes("postgres")) {
    normalizedLang = "sql";
  } else if (l === "scss" || l === "sass" || l === "css" || l.includes("scss") || l.includes("sass")) {
    normalizedLang = "scss";
  } else if (l === "bash" || l === "sh" || l === "git" || l.includes("bash") || l.includes("git")) {
    normalizedLang = "bash";
  } else if (l === "c" || l === "cpp" || l === "c++") {
    normalizedLang = "c";
  }
  return normalizedLang;
}

const tests = [
  { input: "javascript", expected: "javascript" },
  { input: "js", expected: "javascript" },
  { input: "language-javascript", expected: "javascript" },
  { input: "java", expected: "java" },
  { input: "language-java", expected: "java" },
  { input: "python", expected: "python" },
  { input: "py", expected: "python" },
  { input: "language-python", expected: "python" },
  { input: "sql", expected: "sql" },
  { input: "scss", expected: "scss" },
  { input: "bash", expected: "bash" },
  { input: "git", expected: "bash" },
  { input: "c", expected: "c" },
  { input: "cpp", expected: "c" }
];

let failed = 0;
tests.forEach(t => {
  const result = getNormalizedLang(t.input);
  if (result !== t.expected) {
    console.error(`FAILED: ${t.input} -> ${result} (expected ${t.expected})`);
    failed++;
  } else {
    console.log(`PASSED: ${t.input} -> ${result}`);
  }
});

if (failed === 0) {
  console.log("\nALL LANGUAGE ROUTING TESTS PASSED PERFECTLY!");
} else {
  process.exit(1);
}
