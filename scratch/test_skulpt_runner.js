const fs = require('fs');

// Mock window and document for Skulpt
global.window = global;
global.document = {
  createElement: () => ({ src: '', onload: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }]
};

// Load Skulpt
require('./skulpt.min.js');
require('./skulpt-stdlib.js');

const codeImage1 = fs.readFileSync('scratch/image1_test.py', 'utf8');
const codeImage2 = fs.readFileSync('scratch/image2_test.py', 'utf8');

function runWithSkulpt(code) {
  let output = '';
  Sk.configure({
    output: (text) => { output += text; },
    read: (x) => {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
        throw "File not found: '" + x + "'";
      }
      return Sk.builtinFiles["files"][x];
    }
  });

  try {
    Sk.importMainWithBody("<stdin>", false, code, true);
    return { success: true, output };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

console.log("=== RUNNING IMAGE 1 WITH SKULPT ===");
const res1 = runWithSkulpt(codeImage1);
console.log(res1);

console.log("\n=== RUNNING IMAGE 2 WITH SKULPT ===");
const res2 = runWithSkulpt(codeImage2);
console.log(res2);
