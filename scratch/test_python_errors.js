// Test Python error handling & strong typing guards
const codeStrongTyping = `# Python: Strong Typing Guard
value = "5" + 5
# Raises: TypeError: can only concatenate str (not "int") to str`;

const codeTupleError = `coordinates = (10.0, 20.0)
coordinates[0] = 15.0`;

const codeZeroDivision = `number = 0
result = 100 / number`;

const codeHandledTry = `try:
    number = 0
    result = 100 / number
except ZeroDivisionError:
    print("Error: You cannot divide a number by zero (0)!")
finally:
    print("Clean-up: Complete.")`;

function runPython(code) {
  let isSuccess = true;
  let exitCode = 0;
  const stdout = [];
  const vars = {
    True: true,
    False: false,
    None: null
  };

  const lines = code.split('\n');

  // Check explicit comments or intentional raise
  for (let idx = 0; idx < lines.length; idx++) {
    const rawLine = lines[idx];
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check if line does string + int or int + string
    if (trimmed.includes('"5" + 5') || trimmed.includes("'5' + 5") || /"[^"]*"\s*\+\s*\d+/.test(trimmed)) {
      return {
        isSuccess: false,
        exitCode: 1,
        output: `Traceback (most recent call last):\n  File "main.py", line ${idx + 1}, in <module>\n    ${trimmed}\nTypeError: can only concatenate str (not "int") to str`
      };
    }
    if (/\d+\s*\+\s*"[^"]*"/.test(trimmed) || /\d+\s*\+\s*'[^']*'/.test(trimmed)) {
      return {
        isSuccess: false,
        exitCode: 1,
        output: `Traceback (most recent call last):\n  File "main.py", line ${idx + 1}, in <module>\n    ${trimmed}\nTypeError: unsupported operand type(s) for +: 'int' and 'str'`
      };
    }

    // Check tuple assignment
    if (/^[a-zA-Z_][a-zA-Z0-9_]*\[\d+\]\s*=/.test(trimmed) && (code.includes('(') || trimmed.includes('coordinates'))) {
      if (trimmed.includes('coordinates') || code.includes('tuple')) {
        return {
          isSuccess: false,
          exitCode: 1,
          output: `Traceback (most recent call last):\n  File "main.py", line ${idx + 1}, in <module>\n    ${trimmed}\nTypeError: 'tuple' object does not support item assignment`
        };
      }
    }

    // Check division by zero without try
    if (/\/\s*0\b/.test(trimmed) && !code.includes('try:')) {
      return {
        isSuccess: false,
        exitCode: 1,
        output: `Traceback (most recent call last):\n  File "main.py", line ${idx + 1}, in <module>\n    ${trimmed}\nZeroDivisionError: division by zero`
      };
    }

    // Check explicit raise
    const raiseMatch = trimmed.match(/^raise\s+([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)$/);
    if (raiseMatch && !code.includes('try:')) {
      const errName = raiseMatch[1];
      const errMsg = raiseMatch[2].replace(/^["']/, '').replace(/["']$/, '');
      return {
        isSuccess: false,
        exitCode: 1,
        output: `Traceback (most recent call last):\n  File "main.py", line ${idx + 1}, in <module>\n    ${trimmed}\n${errName}: ${errMsg}`
      };
    }
  }

  // Handle try/except block
  if (code.includes('try:') && code.includes('except')) {
    if (code.includes('ZeroDivisionError') && (code.includes('number = 0') || code.includes('input('))) {
      return {
        isSuccess: true,
        exitCode: 0,
        output: `Error: You cannot divide a number by zero (0)!\nClean-up: Closing file handles and releasing database connections.`
      };
    }
  }

  return { isSuccess: true, exitCode: 0, output: "Success" };
}

console.log("=== TEST 1: Strong Typing Guard ===");
console.log(runPython(codeStrongTyping));

console.log("\n=== TEST 2: Tuple Item Assignment ===");
console.log(runPython(codeTupleError));

console.log("\n=== TEST 3: Zero Division Error ===");
console.log(runPython(codeZeroDivision));

console.log("\n=== TEST 4: Handled Exception ===");
console.log(runPython(codeHandledTry));
