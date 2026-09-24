import glob
import re

files = sorted(glob.glob("*.html"))
print(f"Checking {len(files)} HTML files for script tags and mobile navigation elements...")

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        html = fp.read()
    
    has_main_js = 'src="assets/js/main.js"' in html or 'src="./assets/js/main.js"' in html
    has_menu_btn = 'class="mobile-menu-btn"' in html
    has_nav_drawer = 'mobileNavDrawer' in html
    has_toc = 'class="sidebar-toc"' in html
    
    scripts = re.findall(r'<script[^>]*src=[\"\']([^\"\']+)[\"\']', html)
    print(f"[{f}]: menu_btn={has_menu_btn}, main_js={has_main_js}, scripts={scripts}")
