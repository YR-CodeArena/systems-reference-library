import glob
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

files = sorted(glob.glob("*.html"))
all_blocks = []

for f in files:
    if f == "index.html": continue
    with open(f, "r", encoding="utf-8") as fp:
        c = fp.read()

    blocks = re.findall(r'<div class="code-block-wrapper">(.*?)</div>\s*<pre\b[^>]*>(?:<code\b[^>]*>)?(.*?)(?:</code>)?</pre>', c, re.DOTALL)
    for i, (hdr, code) in enumerate(blocks):
        code_str = code.strip()
        label_match = re.search(r'class="(?:code-lang-label|code-lang-tag)"[^>]*>(.*?)</div>' if 'code-lang-tag' in hdr else r'class="code-lang-label"[^>]*>(.*?)</span>', hdr, re.DOTALL)
        label = re.sub(r'<[^>]+>', ' ', label_match.group(1)).strip() if label_match else "Code"
        all_blocks.append({
            "file": f,
            "index": i + 1,
            "label": label,
            "code": code_str
        })

print(f"Total code blocks extracted: {len(all_blocks)}")

# Search for any code block mentioning error, raises, anti-pattern, exception, invalid, fault
interesting = []
for b in all_blocks:
    c = b["code"]
    l = b["label"]
    if re.search(r'(#\s*(?:Raises|Error)|//\s*(?:Anti-Pattern|Error)|TypeError|ValueError|IndexError|ZeroDivisionError|Traceback|SyntaxError|NameError|KeyError|Invalid|Hazard|Pinning)', c, re.I) or \
       re.search(r'(Error|Hazard|Anti-Pattern|Guard|Trap)', l, re.I):
        interesting.append(b)

print(f"Total intentional error / guard / warning snippets: {len(interesting)}")
for b in interesting:
    first_two = [line.strip() for line in b["code"].split('\n') if line.strip()][:2]
    print(f"[{b['file']} #{b['index']}] {b['label']}")
    print(f"   Code: {' | '.join(first_two)}")
