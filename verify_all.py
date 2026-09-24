import os
import re

html_files = [
    "index.html",
    "networking.html",
    "databases.html",
    "programming-languages.html",
    "data-structures.html",
    "operating-systems.html",
    "cs-hardware-foundations.html",
    "git-github.html",
    "python-masterclass.html",
    "python-runtime.html",
    "low-latency-python.html",
    "postgresql.html",
    "java-masterclass.html",
    "high-concurrency-java.html",
    "enterprise-scss.html",
    "javascript-mastery.html"
]

def verify_all():
    print("=== STARTING 15-VOLUME SYSTEM VERIFICATION SUITE ===")
    total_copy_buttons = 0
    total_run_buttons = 0
    total_diagram_cards = 0
    total_toc_links = 0
    all_passed = True

    for fname in html_files:
        if not os.path.exists(fname):
            print(f"[FAIL] Missing file: {fname}")
            all_passed = False
            continue

        size = os.path.getsize(fname)
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
        if 'id="dropdownBackend"' not in content:
            print(f"[FAIL] Missing id=\"dropdownBackend\" in {fname}")
            all_passed = False
        if 'id="dropdownWeb"' not in content:
            print(f"[FAIL] Missing id=\"dropdownWeb\" in {fname}")
            all_passed = False
        if 'class="theme-toggle-btn"' not in content:
            print(f"[FAIL] Missing theme-toggle-btn in {fname}")
            all_passed = False
        if 'class="mobile-menu-btn"' not in content:
            print(f"[FAIL] Missing mobile-menu-btn in {fname}")
            all_passed = False

        # 2. Check Assets
        if 'assets/css/style.css' not in content:
            print(f"[FAIL] Missing style.css in {fname}")
            all_passed = False
        if 'assets/js/main.js' not in content:
            print(f"[FAIL] Missing main.js in {fname}")
            all_passed = False

        # 3. Diagrams & Code Blocks
        diagrams_in_file = content.count('class="diagram-card"')
        copy_btns = content.count('class="copy-btn"') + content.count("class='copy-btn'")
        run_btns = content.count('class="run-btn"') + content.count("class='run-btn'")

        total_diagram_cards += diagrams_in_file
        total_copy_buttons += copy_btns
        total_run_buttons += run_btns

        # Volume pages should have at least 1 diagram
        if fname != "index.html":
            if diagrams_in_file == 0:
                print(f"[WARN] No diagram-card in {fname}")
                all_passed = False

        # 4. Check TOC links if page has sidebar
        if 'class="sidebar-toc"' in content:
            toc_matches = re.findall(r'<a\s+href="(#[a-zA-Z0-9\-_]+)"', content)
            file_ids = set(re.findall(r'id="([a-zA-Z0-9\-_]+)"', content))
            for href in toc_matches:
                target_id = href[1:]
                total_toc_links += 1
                if target_id not in file_ids:
                    print(f"[WARN] Broken TOC link in {fname}: {href}")

        print(f"[OK] {fname:<30} ({size:>7} B) | Diagrams: {diagrams_in_file:>2} | Copy: {copy_btns:>2} | Run: {run_btns:>2}")

    print("\n--- AGGREGATE METRICS ---")
    print(f"Total HTML Files Checked : {len(html_files)}")
    print(f"Total Animated Diagrams   : {total_diagram_cards}")
    print(f"Total Copy Buttons (HTML) : {total_copy_buttons} (Plus auto-injected by main.js)")
    print(f"Total Run Buttons (HTML)  : {total_run_buttons} (Plus universal runner in main.js)")
    print(f"Total TOC Internal Links  : {total_toc_links}")
    print("-------------------------")
    if all_passed:
        print("[SUCCESS] ALL VERIFICATION CHECKS PASSED PERFECTLY!\n")
    else:
        print("[ERROR] SOME VERIFICATION CHECKS FAILED!\n")

if __name__ == "__main__":
    verify_all()
