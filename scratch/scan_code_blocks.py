import glob
import re

html_files = glob.glob("*.html")
total_loose = 0

for fname in sorted(html_files):
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()

    # Find headers with a loose copy-btn directly inside code-header
    loose_matches = re.findall(
        r'<div class="code-header">\s*(?:<span[^>]*>.*?</span>\s*)?<button\b[^>]*class="copy-btn"[^>]*>.*?</button>',
        content,
        re.DOTALL
    )
    if loose_matches:
        print(f"{fname:<30}: {len(loose_matches)} loose copy button(s)")
        total_loose += len(loose_matches)
    else:
        # Check how many code-block-wrappers have code-actions
        wrappers = content.count('class="code-block-wrapper"')
        actions = content.count('class="code-actions"')
        print(f"{fname:<30}: {wrappers} wrappers, {actions} code-actions")

print(f"\nTotal loose copy buttons across files: {total_loose}")
