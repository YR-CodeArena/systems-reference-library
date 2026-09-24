import re
import html

def make_code_block(code_content, lang='javascript', simulated_output=''):
    c_esc = html.escape(code_content.strip())
    if not simulated_output:
        simulated_output = f"// [{lang.upper()} Engine]\n// Executed successfully with status 0\n// Return: undefined [EXIT 0]"
    o_esc = html.escape(simulated_output.strip())
    icon = '💎' if lang in ['scss', 'sass', 'css'] else ('⚡' if lang in ['js', 'javascript', 'ts', 'typescript'] else '⚙️')
    return f"""<div class="code-block-wrapper">
  <div class="code-header">
    <div class="code-lang-tag">
      <span class="lang-icon">{icon}</span>
      <span>{lang.upper()}</span>
    </div>
    <div class="code-actions">
      <button type="button" class="run-btn" title="Run code and inspect terminal output">
        <span class="btn-icon">▶</span>
        <span class="btn-text">Run // 実行</span>
      </button>
      <button type="button" class="copy-btn" title="Copy snippet to clipboard">
        <span class="btn-icon">📋</span>
        <span class="btn-text">Copy // コピー</span>
      </button>
    </div>
  </div>
  <pre class="code-content"><code class="language-{lang}">{c_esc}</code></pre>
  <div class="code-output-console" style="display: none;">
    <div class="console-header">
      <span class="console-title">⚡ TERMINAL OUTPUT // 実行結果</span>
      <span class="console-live-tag">READY</span>
      <span class="console-status-pill success">EXIT 0</span>
    </div>
    <pre class="console-body">{o_esc}</pre>
  </div>
</div>"""

def fix_remaining_oop():
    with open('javascript-mastery.html', 'r', encoding='utf-8') as f:
        text = f.read()

    target = """{code_block('''class Product {
  id;
  name;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
  }

  getPriceDollars() {
    return (this.priceCents / 100).toFixed(2);
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  size;

  constructor(productDetails) {
    super(productDetails);
    this.size = productDetails.size;
  }

  // Polymorphic method override
  extraInfoHTML() {
    return `<a href="images/clothing-size-chart.png" target="_blank">Size Chart (${this.size})</a>`;
  }
}

const shirt = new Clothing({ id: 's1', name: 'Cotton Polo', priceCents: 2490, size: 'L' });
console.log(`Shirt price: $${shirt.getPriceDollars()}`);
console.log('Shirt info HTML:', shirt.extraInfoHTML());''', 'javascript', '''Shirt price: $24.90
Shirt info HTML: <a href="images/clothing-size-chart.png" target="_blank">Size Chart (L)</a>
Return: undefined [EXIT 0]''')}"""

    code_body = """class Product {
  id;
  name;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
  }

  getPriceDollars() {
    return (this.priceCents / 100).toFixed(2);
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  size;

  constructor(productDetails) {
    super(productDetails);
    this.size = productDetails.size;
  }

  // Polymorphic method override
  extraInfoHTML() {
    return `<a href="images/clothing-size-chart.png" target="_blank">Size Chart (${this.size})</a>`;
  }
}

const shirt = new Clothing({ id: 's1', name: 'Cotton Polo', priceCents: 2490, size: 'L' });
console.log(`Shirt price: $${shirt.getPriceDollars()}`);
console.log('Shirt info HTML:', shirt.extraInfoHTML());"""

    output_body = """Shirt price: $24.90
Shirt info HTML: <a href="images/clothing-size-chart.png" target="_blank">Size Chart (L)</a>
Return: undefined [EXIT 0]"""

    replacement = make_code_block(code_body, 'javascript', output_body)

    if target in text:
        text = text.replace(target, replacement)
        print("Replaced exact target in javascript-mastery.html!")
    else:
        # Regex replacement
        text = re.sub(r'\{code_block\(.*?class Product.*?\x27\x27\x27\)\}', replacement, text, flags=re.DOTALL)
        print("Replaced regex target in javascript-mastery.html!")

    with open('javascript-mastery.html', 'w', encoding='utf-8') as f:
        f.write(text)

    print("Remaining {code_block in javascript-mastery.html:", text.count('{code_block'))

if __name__ == '__main__':
    fix_remaining_oop()
