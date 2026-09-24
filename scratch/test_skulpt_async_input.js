global.window = global;
global.document = {
  createElement: () => ({ src: '', onload: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }]
};
require('./skulpt.min.js');
require('./skulpt-stdlib.js');

async function testInput() {
  let output = '';
  Sk.configure({
    output: (text) => { output += text; },
    read: (x) => Sk.builtinFiles['files'][x],
    inputfun: (prompt) => {
      output += prompt;
      return new Promise((resolve) => {
        setTimeout(() => {
          output += "7\n";
          resolve("7");
        }, 100);
      });
    },
    inputfunTakesPrompt: true
  });

  const code = `
r = float(input("Enter radius: "))
area = 3.14159 * r * r
print("Calculated Area:", round(area, 2))
`;

  try {
    await Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    });
    console.log("Success! Output:\n" + output);
  } catch (err) {
    console.log("Error:", err);
  }
}

testInput();
