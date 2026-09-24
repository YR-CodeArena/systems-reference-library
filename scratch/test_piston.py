import urllib.request
import json

def test():
    url = "https://emkc.org/api/v2/piston/execute"
    payload = {
        "language": "python",
        "version": "*",
        "files": [{"content": "print('Hello from Piston Web API!')\nx = 10 + 20\nprint('Result:', x)"}]
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print("Python Success:", data)
    except Exception as e:
        print("Python Failed:", e)

    # Test Java with stdin
    payload_java = {
        "language": "java",
        "version": "*",
        "files": [{"content": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner s = new Scanner(System.in);\n        System.out.println(\"Echo: \" + s.nextLine());\n    }\n}"}],
        "stdin": "Testing 123"
    }
    req_java = urllib.request.Request(url, data=json.dumps(payload_java).encode('utf-8'), headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req_java, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print("Java Success:", data)
    except Exception as e:
        print("Java Failed:", e)

if __name__ == "__main__":
    test()
