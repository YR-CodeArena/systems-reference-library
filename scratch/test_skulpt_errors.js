global.window = global;
global.document = {
  createElement: () => ({ src: '', onload: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }]
};
require('./skulpt.min.js');
require('./skulpt-stdlib.js');

function test(code) {
  let output = '';
  Sk.configure({
    output: (text) => { output += text; },
    read: (x) => Sk.builtinFiles['files'][x]
  });
  try {
    Sk.importMainWithBody('<stdin>', false, code, true);
    return { ok: true, output };
  } catch (err) {
    return { ok: false, error: err.toString() };
  }
}

console.log('Test 1 (Strong Typing):', test('value = "5" + 5'));
console.log('Test 2 (Tuple Immutability):', test('coordinates = (10.0, 20.0)\ncoordinates[0] = 15.0'));
console.log('Test 3 (Zero Division):', test('res = 10 / 0'));
