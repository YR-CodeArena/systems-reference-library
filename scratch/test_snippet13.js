const fs = require('fs');

const code13 = `// Dynamic DOM Class manipulation:
const button = document.createElement('button');
button.textContent = 'Add to Cart';
button.classList.add('js-add-to-cart-btn');

button.addEventListener('click', () => {
  button.classList.toggle('is-added');
  button.textContent = button.classList.contains('is-added') ? 'Added!' : 'Add to Cart';
  console.log('Button state toggled. Active classes:', button.classList);
});

// Trigger programmatic click event:
button.click();`;

const logs = [];
const customConsole = {
  log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
};

const mockDocument = {
  createElement: (tag) => {
    const classes = new Set();
    const el = {
      tagName: tag.toUpperCase(),
      classList: {
        add: (c) => { classes.add(c); logs.push(`[DOM] Added class '${c}' to <${tag}>`); },
        remove: (c) => { classes.delete(c); logs.push(`[DOM] Removed class '${c}' from <${tag}>`); },
        toggle: (c) => {
          if (classes.has(c)) { classes.delete(c); logs.push(`[DOM] Toggled OFF class '${c}' on <${tag}>`); return false; }
          else { classes.add(c); logs.push(`[DOM] Toggled ON class '${c}' on <${tag}>`); return true; }
        },
        contains: (c) => classes.has(c)
      },
      innerHTML: '',
      textContent: '',
      addEventListener: (evt, fn) => {
        el['on' + evt] = fn;
      },
      click: () => {
        logs.push(`[DOM] Simulated click on <${tag}>`);
        if (el.onclick) el.onclick();
      }
    };
    return el;
  }
};

const runner = new Function('console', 'document', `"use strict";\n${code13}`);
runner(customConsole, mockDocument);
console.log(logs.join('\n'));
