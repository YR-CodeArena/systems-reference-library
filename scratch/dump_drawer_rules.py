import re

with open("assets/css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

# Find all blocks matching mobile-nav-drawer or mobile-nav-backdrop
rules = re.findall(r'([^{}]*?(?:mobile-nav|mobile-drawer)[^{}]*?\{[^{}]*\})', css, re.DOTALL)
print(f"Found {len(rules)} CSS rules matching mobile-nav or mobile-drawer:")
for r in rules:
    print("-" * 50)
    print(r.strip())
