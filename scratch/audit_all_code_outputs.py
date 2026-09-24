import glob
import re
import json

html_files = sorted(glob.glob("*.html"))

all_snippets = []

def decode_html(s):
    return s.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&#x27;', "'").replace('&#39;', "'")

for f in html_files:
    with open(f, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    # Extract any <pre ...><code ...>...</code></pre> or <pre><code>...</code></pre>
    raw_blocks = re.findall(r'<pre\b[^>]*>\s*<code\b([^>]*)>(.*?)</code>\s*</pre>', html, re.DOTALL)
    if not raw_blocks:
        # Check without code tag
        raw_blocks_pre = re.findall(r'<pre class="code-content">(.*?)</pre>', html, re.DOTALL)
        raw_blocks = [("", b) for b in raw_blocks_pre]
    
    print(f"{f}: found {len(raw_blocks)} code blocks")
    for idx, (attrs, code) in enumerate(raw_blocks):
        # find class in attrs
        cls_match = re.search(r'class="([^"]+)"', attrs)
        cls = cls_match.group(1) if cls_match else ""
        all_snippets.append({
            "file": f,
            "index": idx + 1,
            "class": cls,
            "code": decode_html(code.strip())
        })

print(f"\nTOTAL CODE BLOCKS ACROSS ALL 16 FILES: {len(all_snippets)}")

# Save to scratch/all_snippets.json
with open("scratch/all_snippets.json", "w", encoding="utf-8") as out:
    json.dump(all_snippets, out, indent=2)

print("Saved all snippets to scratch/all_snippets.json")
