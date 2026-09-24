function runJavaScriptEngine(codeText) {
  let runnableCode = codeText
    .replace(/^export\s+(?:default\s+)?/gm, '')
    .replace(/^import\s+.*$/gm, '')
    .replace(/\/\/ TypeScript.*$/gm, '')
    .replace(/:\s*[A-Za-z0-9_]+<[^>]+>/g, '')
    .replace(/:\s*[A-Za-z0-9_\[\]]+(?=\s*[=,;\)])/g, '')
    .replace(/<[A-Za-z0-9_,\s]+>(?=\s*\()/g, '');

  const logs = [];
  const customConsole = {
    log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    error: (...args) => logs.push('[ERROR] ' + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    warn: (...args) => logs.push('[WARN] ' + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    info: (...args) => logs.push('[INFO] ' + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    table: (data) => logs.push(typeof data === 'object' ? JSON.stringify(data, null, 2) : String(data))
  };

  try {
    const runner = new Function('console', '"use strict";\n' + runnableCode);
    const result = runner(customConsole);
    if (result !== undefined) {
      logs.push('Return: ' + (typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)));
    }
    return { isSuccess: true, exitCode: 0, output: logs.join('\n') };
  } catch (err) {
    return { isSuccess: false, exitCode: 1, output: err.message };
  }
}

const sampleCode = `const items = 2;
const totalDollars = 28.94;
const summary = \`Items (\${items}): \$\${totalDollars}\`;
console.log(summary); // Evaluates to: 'Items (2): $28.94'

// Multi-line template:
const htmlTemplate = \`
  <div class="cart-summary">
    <h2>Order Total</h2>
    <p>Price: \$\${totalDollars}</p>
  </div>
\`;
console.log(htmlTemplate.trim());`;

console.log(runJavaScriptEngine(sampleCode));
