import glob
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

files = sorted(glob.glob("*.html"))
intentional_errors = []

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        c = fp.read()

    blocks = re.findall(r'<div class="code-block-wrapper">(.*?)</div>\s*<pre\b[^>]*>(?:<code\b[^>]*>)?(.*?)(?:</code>)?</pre>', c, re.DOTALL)
    for header, code in blocks:
        code_clean = code.strip()
        header_clean = header.strip()
        # Look for explicit raises or error demonstrations
        if re.search(r'(Raises:|#\s*Error|TypeError|ValueError|IndexError|NameError|ZeroDivisionError|Anti-Pattern|ANTI-PATTERN|intentional|cannot assign|unexpected indent)', code_clean, re.I) or \
           re.search(r'(Error|Wrong|Invalid|Anti-Pattern|Fault|Guard)', header_clean, re.I):
            label_match = re.search(r'class="(?:code-lang-label|code-lang-tag)"[^>]*>(.*?)</div>' if 'code-lang-tag' in header_clean else r'class="code-lang-label"[^>]*>(.*?)</span>', header_clean, re.DOTALL)
            label = re.sub(r'<[^>]+>', ' ', label_match.group(1)).strip() if label_match else "Snippet"
            intentional_errors.append((f, label, code_clean))

print(f"Total matching intentional error / anti-pattern snippets: {len(intentional_errors)}\n")
for fname, label, code in intentional_errors:
    print(f"[{fname}] {label}")
    # Print the lines mentioning Error or Raises
    error_lines = [l.strip() for l in code.split('\n') if re.search(r'(Raises|Error|Anti-Pattern|Invalid)', l, re.I)]
    print("   Lines: " + " | ".join(error_lines[:3]))
    print("-" * 70)
