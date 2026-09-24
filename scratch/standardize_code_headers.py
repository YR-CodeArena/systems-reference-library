import glob
import re

html_files = [
    "data-structures.html",
    "databases.html",
    "git-github.html",
    "java-masterclass.html",
    "networking.html",
    "operating-systems.html",
    "postgresql.html",
    "programming-languages.html",
    "python-masterclass.html",
    "python-runtime.html"
]

replacement_actions = """<div class="code-actions">
            <button type="button" class="run-btn" title="Run code and inspect terminal output">
              <span class="btn-icon">▶</span>
              <span class="btn-text">Run // 実行</span>
            </button>
            <button type="button" class="copy-btn" title="Copy snippet to clipboard">
              <span class="btn-icon">📋</span>
              <span class="btn-text">Copy // コピー</span>
            </button>
          </div>"""

pattern = re.compile(
    r'(<div class="code-header">\s*(?:<span[^>]*>.*?</span>\s*)?)<button\b[^>]*class="copy-btn"[^>]*>.*?</button>',
    re.DOTALL
)

for fname in html_files:
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()

    new_content, count = pattern.subn(r'\1' + replacement_actions, content)
    print(f"Updated {fname}: {count} code headers standardized.")

    with open(fname, "w", encoding="utf-8") as f:
        f.write(new_content)

print("[SUCCESS] All code headers standardized!")
