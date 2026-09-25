import http.server
import socketserver
import threading
import urllib.request
import time
import sys

PORT = 8999

def run_server():
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

def test_pages():
    t = threading.Thread(target=run_server, daemon=True)
    t.start()
    time.sleep(1)

    pages = [
        "",
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
        "javascript-mastery.html",
        "neetcode-arena.html",
        "tech-news.html",
        "assets/images/neetcode.png",
        "assets/images/news.png",
        "assets/css/style.css",
        "assets/css/neetcode-arena.css",
        "assets/css/tech-news.css",
        "assets/js/main.js",
        "assets/js/neetcode-arena.js",
        "assets/js/tech-news.js",
        "assets/js/skulpt.min.js",
        "assets/js/skulpt-stdlib.js"
    ]

    all_ok = True
    print("Testing HTTP endpoints on http://127.0.0.1:" + str(PORT))
    for p in pages:
        url = f"http://127.0.0.1:{PORT}/{p}"
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=5) as response:
                status = response.status
                length = len(response.read())
                print(f"[HTTP {status}] {url:<50} ({length} bytes)")
                if status != 200:
                    all_ok = False
        except Exception as e:
            print(f"[FAIL] {url}: {e}")
            all_ok = False

    if all_ok:
        print("\n[SUCCESS] ALL 19 HTTP ENDPOINTS DELIVERED 200 OK!")
    else:
        print("\n[ERROR] SOME ENDPOINTS FAILED!")
        sys.exit(1)

if __name__ == '__main__':
    test_pages()
