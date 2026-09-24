import glob
import re
from collections import Counter

files = sorted(glob.glob("*.html"))
all_span_classes = Counter()
span_with_no_class = 0

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    classes = re.findall(r'<span\s+class=[\"\']([^\"\']+)[\"\']', content)
    for c in classes:
        all_span_classes[c] += 1
    no_class = re.findall(r'<span>(.*?)</span>', content)
    span_with_no_class += len(no_class)

print("All span classes found across all HTML files:")
for cls, count in all_span_classes.most_common():
    print(f"  {cls}: {count}")

print(f"\nSpans without class: {span_with_no_class}")
