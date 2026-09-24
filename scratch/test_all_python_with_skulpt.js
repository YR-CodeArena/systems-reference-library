const fs = require('fs');

global.window = global;
global.document = {
  createElement: () => ({ src: '', onload: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }]
};
require('../assets/js/skulpt.min.js');
require('../assets/js/skulpt-stdlib.js');

const htmlFiles = [
  "python-masterclass.html",
  "python-runtime.html",
  "low-latency-python.html",
  "programming-languages.html"
];

function testSnippet(code) {
  let output = '';
  Sk.configure({
    output: (text) => { output += text; },
    read: (x) => {
      if (Sk.builtinFiles && Sk.builtinFiles["files"] && Sk.builtinFiles["files"][x]) {
        return Sk.builtinFiles["files"][x];
      }
      throw "File not found: " + x;
    },
    inputfun: (prompt) => {
      output += prompt + "5\n";
      return Promise.resolve("5");
    },
    inputfunTakesPrompt: true
  });

  try {
    Sk.importMainWithBody('<stdin>', false, code, true);
    return { ok: true, output };
  } catch (err) {
    return { ok: false, error: err.toString() };
  }
}

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/gi;
  let match;
  let count = 0;
  console.log(`\n=== TESTING ${file} ===`);
  while ((match = regex.exec(content)) !== null) {
    count++;
    let rawCode = match[2]
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    const res = testSnippet(rawCode);
    const firstLine = rawCode.trim().split('\n')[0].slice(0, 45);
    if (res.ok) {
      console.log(`  [OK] #${count}: ${firstLine} -> (${res.output.trim().split('\n').length} lines)`);
    } else {
      console.log(`  [ERROR/EXCEPTION] #${count}: ${firstLine} -> ${res.error.split('\n')[0]}`);
    }
  }
});
