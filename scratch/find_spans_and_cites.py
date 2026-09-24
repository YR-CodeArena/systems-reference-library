import glob
import re
from collections import Counter

files = sorted(glob.glob("*.html"))
print(f"Auditing {len(files)} HTML files for cites, works cited, and spans...")

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    
    cite_brackets = re.findall(r'\[cite:[^\]]*\]', content)
    cite_tags = re.findall(r'<cite[^>]*>.*?</cite>', content, re.DOTALL)
    works_cited_sections = re.findall(r'<section[^>]*id=[\"\']works-cited[\"\'][^>]*>.*?</section>', content, re.DOTALL | re.IGNORECASE)
    works_cited_headings = re.findall(r'<h[1-6][^>]*id=[\"\']works-cited[\"\'][^>]*>.*?</h[1-6]>', content, re.DOTALL | re.IGNORECASE)
    
    # Check all span classes
    span_matches = re.findall(r'<span\s+class=[\"\']([^\"\']+)[\"\']', content)
    span_counts = Counter(span_matches)
    
    # Find any spans containing cite or citation
    cite_spans = [s for s in span_matches if any(w in s.lower() for w in ['cite', 'citation', 'ref-num', 'footnote'])]
    
    print(f"\n[{f}]")
    if cite_brackets:
        print(f"  - [cite:...] count: {len(cite_brackets)}")
    if cite_tags:
        print(f"  - <cite> tags: {len(cite_tags)}")
    if works_cited_sections:
        print(f"  - <section id='works-cited'> count: {len(works_cited_sections)}")
    if works_cited_headings:
        print(f"  - <h* id='works-cited'> count: {len(works_cited_headings)}")
    if cite_spans:
        print(f"  - Cite-related spans: {Counter(cite_spans)}")
