import re

with open("assets/css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

pos = css.find(".mobile-nav-drawer")
while pos != -1:
    print("--- FOUND .mobile-nav-drawer at pos", pos, "---")
    print(css[pos:pos+1200])
    print("="*60)
    pos = css.find(".mobile-nav-drawer", pos+1)
