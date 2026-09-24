import re
import html

def expand_code_blocks_in_string(text, default_lang='javascript'):
    def code_block(code_content, lang=default_lang, simulated_output=''):
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

    # Find {code_block(...)}
    # Use regex with non-greedy matching or parse arguments
    def replacer(match):
        inner = match.group(1).strip()
        inner = inner.replace("return '';", 'return "";')
        try:
            # Safely evaluate in a local dictionary with code_block available
            return eval(f"code_block({inner})", {"code_block": code_block})
        except Exception as e:
            print(f"Error evaluating code_block: {e}")
            return match.group(0)

    pattern = r'\{code_block\((.*?)\)\}'
    return re.sub(pattern, replacer, text, flags=re.DOTALL)

def fix_all():
    print("Running fix_html_generation...")

    # 1. Update enterprise-scss.html
    with open('enterprise-scss.html', 'r', encoding='utf-8') as f:
        scss_content = f.read()

    expanded_scss = expand_code_blocks_in_string(scss_content, 'scss')

    # Add missing IDs in enterprise-scss.html
    id_replacements = {
        '<h4>Control Flow Directives': '<article class="content-article" id="ch5-control-flow"><h3>5.4 Control Flow Directives</h3>',
        '<h3>6.2 Adapting 7-1': '<article class="content-article" id="ch6-adapting-7-1"><h3>6.2 Adapting 7-1',
        '<h3>6.4 Component-Driven': '<article class="content-article" id="ch6-component-driven"><h3>6.4 Component-Driven',
        '<h3>7.3 Post-Processing': '<article class="content-article" id="ch7-post-processing"><h3>7.3 Post-Processing',
        '<h3>7.4 Source Maps': '<article class="content-article" id="ch7-source-maps"><h3>7.4 Source Maps',
        '<h3>8.2 Mechanics of CSS Bloat': '<article class="content-article" id="ch8-bloat-mechanics"><h3>8.2 Mechanics of CSS Bloat',
        '<h3>8.3 Bundle Optimization': '<article class="content-article" id="ch8-bundle-optimization"><h3>8.3 Bundle Optimization',
        '<h3>8.4 Automated CSS Auditing': '<article class="content-article" id="ch8-auditing-guardrails"><h3>8.4 Automated CSS Auditing',
        '<h3>9.2 The Hybrid Coexistence': '<article class="content-article" id="ch9-hybrid-model"><h3>9.2 The Hybrid Coexistence',
        '<h3>10.2 Step-by-Step Refactoring': '<article class="content-article" id="ch10-refactoring-playbook"><h3>10.2 Step-by-Step Refactoring'
    }

    for target, rep in id_replacements.items():
        if target in expanded_scss:
            expanded_scss = expanded_scss.replace(target, rep)

    with open('enterprise-scss.html', 'w', encoding='utf-8') as f:
        f.write(expanded_scss)
    print("Updated enterprise-scss.html with expanded code blocks & IDs.")

    # 2. Update javascript-mastery.html
    with open('javascript-mastery.html', 'r', encoding='utf-8') as f:
        js_content = f.read()

    expanded_js = expand_code_blocks_in_string(js_content, 'javascript')

    # Add id="lesson-10"
    if 'id="lesson-10"' not in expanded_js:
        expanded_js = expanded_js.replace(
            '<h2 class="section-title">Lesson 9 &amp; 10: Document Object Model (DOM) &amp; HTML Manipulation</h2>',
            '<h2 class="section-title" id="lesson-10">Lesson 9 &amp; 10: Document Object Model (DOM) &amp; HTML Manipulation</h2>'
        )

    with open('javascript-mastery.html', 'w', encoding='utf-8') as f:
        f.write(expanded_js)
    print("Updated javascript-mastery.html with expanded code blocks & IDs.")

    # 3. Fix TOC links in cs-hardware-foundations.html
    with open('cs-hardware-foundations.html', 'r', encoding='utf-8') as f:
        cs_content = f.read()

    cs_content = cs_content.replace('href="#diagram-tcp"', 'href="#tcp-mechanics"')
    cs_content = cs_content.replace('href="#diagram-ringbuffer"', 'href="#ring-buffers"')

    with open('cs-hardware-foundations.html', 'w', encoding='utf-8') as f:
        f.write(cs_content)
    print("Updated cs-hardware-foundations.html TOC links.")

    # 4. Fix TOC link in high-concurrency-java.html
    with open('high-concurrency-java.html', 'r', encoding='utf-8') as f:
        hc_content = f.read()

    hc_content = hc_content.replace('href="#diagram-disruptor-ring"', 'href="#disruptor-internals"')

    with open('high-concurrency-java.html', 'w', encoding='utf-8') as f:
        f.write(hc_content)
    print("Updated high-concurrency-java.html TOC links.")

if __name__ == '__main__':
    fix_all()
