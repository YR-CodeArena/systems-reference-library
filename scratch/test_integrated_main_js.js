const fs = require('fs');

// Read main.js
const mainJsCode = fs.readFileSync('assets/js/main.js', 'utf-8');

// Extract the functions runSqlEngine and runJavaEngine from main.js
const sqlEngineMatch = mainJsCode.match(/function runSqlEngine\(code\)\s*\{([\s\S]*?)\n    \}/);
if (!sqlEngineMatch) {
  console.error("Could not extract runSqlEngine!");
  process.exit(1);
}
const runSqlEngine = new Function('code', sqlEngineMatch[1]);

const javaEngineMatch = mainJsCode.match(/async function runJavaEngine\(code, consoleEl\)\s*\{([\s\S]*?)\n    \}/);
if (!javaEngineMatch) {
  console.error("Could not extract runJavaEngine!");
  process.exit(1);
}
// We can wrap with dummy requestTerminalInput and tryPistonExecute
const runJavaEngine = new Function('code', 'consoleEl', 'requestTerminalInput', 'tryPistonExecute', `
  return (async () => {
    ${javaEngineMatch[1]}
  })();
`);

const allSnippets = JSON.parse(fs.readFileSync('scratch/all_snippets.json', 'utf-8'));

async function testAll() {
  console.log("=== 1. TESTING SQL & DATABASE SNIPPETS ===");
  const sqlSnippets = allSnippets.filter(s => s.file === 'postgresql.html' || s.file === 'databases.html');
  let sqlPassed = 0;
  for (const s of sqlSnippets) {
    const res = runSqlEngine(s.code);
    if (!res || !res.output) {
      console.error(`FAIL: Empty output for [${s.file} #${s.index}]`);
      continue;
    }
    if (res.output.includes('Fernando')) {
      console.error(`FAIL: Fernando found in [${s.file} #${s.index}]!`);
      continue;
    }
    sqlPassed++;
  }
  console.log(`SQL Snippets Passed: ${sqlPassed} / ${sqlSnippets.length}`);

  // Test the user's specific screenshot snippet!
  const screenshotSnippet = allSnippets.find(s => s.file === 'postgresql.html' && s.index === 4);
  const screenshotRes = runSqlEngine(screenshotSnippet.code);
  console.log("\n--- USER SCREENSHOT SNIPPET OUTPUT (postgresql.html #4) ---");
  console.log(screenshotRes.output);
  console.log("----------------------------------------------------------\n");

  if (screenshotRes.output.includes('Raju') && screenshotRes.output.includes('Shyam') && screenshotRes.output.includes('city') && !screenshotRes.output.includes('Fernando')) {
    console.log("SUCCESS: User screenshot snippet correctly produces Raju, Shyam, Paul, Alex with id|name|city schema!");
  } else {
    console.error("ERROR: User screenshot snippet output incorrect!");
    process.exit(1);
  }

  console.log("\n=== 2. TESTING JAVA SNIPPETS ===");
  const javaSnippets = allSnippets.filter(s => s.file === 'java-masterclass.html' || s.file === 'high-concurrency-java.html');
  let javaPassed = 0;
  for (const s of javaSnippets) {
    const res = await runJavaEngine(s.code, null, async () => "25", async () => null);
    if (!res || !res.output) {
      console.error(`FAIL: Empty output for [${s.file} #${s.index}]`);
      continue;
    }
    javaPassed++;
  }
  console.log(`Java Snippets Passed: ${javaPassed} / ${javaSnippets.length}`);

  console.log("\n=== ALL DIRECT INTEGRATION TESTS COMPLETED SUCCESSFULLY ===");
}

testAll();
