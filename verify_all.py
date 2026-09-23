import os
import re

html_files = [
    "index.html",
    "networking.html",
    "databases.html",
    "programming-languages.html",
    "data-structures.html",
    "operating-systems.html",
    "git-github.html",
    "python-masterclass.html",
    "python-runtime.html",
    "postgresql.html",
    "java-masterclass.html"
]

def verify_all():
    print("=== STARTING COMPREHENSIVE VERIFICATION SUITE ===")
    total_copy_buttons = 0
    total_toc_links = 0
    all_passed = True

    for fname in html_files:
        if not os.path.exists(fname):
            print(f"[FAIL] Missing file: {fname}")
            all_passed = False
            continue

        with open(fname, "r", encoding="utf-8") as f:
            content = f.read()

        # 1. Header checks
        if '<header class="site-header">' not in content:
            print(f"[FAIL] Missing <header class=\"site-header\"> in {fname}")
            all_passed = False
        if 'class="desktop-nav"' not in content:
            print(f"[FAIL] Missing desktop-nav in {fname}")
            all_passed = False
        if 'id="dropdownCore"' not in content:
            print(f"[FAIL] Missing id=\"dropdownCore\" in {fname}")
            all_passed = False
        if 'id="dropdownRuntimes"' not in content:
            print(f"[FAIL] Missing id=\"dropdownRuntimes\" in {fname}")
            all_passed = False
        if 'class="theme-toggle-btn"' not in content:
            print(f"[FAIL] Missing theme-toggle-btn in {fname}")
            all_passed = False
        if 'class="mobile-menu-btn"' not in content:
            print(f"[FAIL] Missing mobile-menu-btn in {fname}")
            all_passed = False

        # 2. Check active states in header
        if fname == "index.html":
            if 'href="index.html" class="nav-item-btn active"' not in content:
                print(f"[FAIL] Overview active state incorrect in {fname}")
                all_passed = False
        elif fname in ["networking.html", "databases.html", "programming-languages.html", "data-structures.html", "operating-systems.html"]:
            if 'id="dropdownCore"' in content:
                core_block = content.split('id="dropdownCore"')[1].split('id="dropdownRuntimes"')[0]
                if 'nav-dropdown-btn active' not in core_block:
                    print(f"[FAIL] Core Architecture button not active in {fname}")
                    all_passed = False
                if f'href="{fname}" class="dropdown-card active"' not in core_block:
                    print(f"[FAIL] Card for {fname} not active inside dropdownCore in {fname}")
                    all_passed = False
        else: # Runtimes
            if 'id="dropdownRuntimes"' in content:
                runtimes_block = content.split('id="dropdownRuntimes"')[1].split('</nav>')[0]
                if 'nav-dropdown-btn active' not in runtimes_block:
                    print(f"[FAIL] Languages & Runtimes button not active in {fname}")
                    all_passed = False
                if f'href="{fname}" class="dropdown-card active"' not in runtimes_block:
                    print(f"[FAIL] Card for {fname} not active inside dropdownRuntimes in {fname}")
                    all_passed = False

        # 3. Copy buttons check
        copy_btns = re.findall(r'<button class="copy-btn"', content)
        total_copy_buttons += len(copy_btns)

        # 4. TOC Links check
        sidebar_toc = re.search(r'<aside class="sidebar-toc">.*?</aside>', content, re.DOTALL)
        if sidebar_toc:
            toc_content = sidebar_toc.group(0)
            toc_links = re.findall(r'href="#([^"]+)"', toc_content)
            total_toc_links += len(toc_links)
            for target_id in toc_links:
                pattern = f'id="{target_id}"'
                if pattern not in content:
                    print(f"[FAIL] Broken anchor link #{target_id} in {fname}")
                    all_passed = False

        # 5. Check CSS link and JS script tag
        if 'assets/css/style.css' not in content:
            print(f"[FAIL] Missing style.css link in {fname}")
            all_passed = False
        if 'assets/js/main.js' not in content:
            print(f"[FAIL] Missing main.js script tag in {fname}")
            all_passed = False

    print(f"\n[SUMMARY]")
    print(f"Total HTML files checked: {len(html_files)}")
    print(f"Total copy buttons validated: {total_copy_buttons}")
    print(f"Total TOC anchor links validated: {total_toc_links}")
    print(f"Overall status: {'ALL TESTS PASSED 100%' if all_passed else 'SOME TESTS FAILED'}")

if __name__ == "__main__":
    verify_all()
