// Test runner extracting and calling execution functions from assets/js/main.js
const fs = require('fs');

const mainJs = fs.readFileSync('assets/js/main.js', 'utf-8');

// Extract runPythonEngine, runJavaEngine, runSqlEngine, runScssEngine, runBashEngine
const runPythonCode = new Function('code', `
  ${mainJs.slice(mainJs.indexOf('function runPythonEngine(code) {'), mainJs.indexOf('// --- Java JVM & Virtual Threads Simulator ---'))}
  return runPythonEngine(code);
`);

const runJavaCode = new Function('code', `
  ${mainJs.slice(mainJs.indexOf('function runJavaEngine(code) {'), mainJs.indexOf('// --- PostgreSQL & SQL Terminal Engine ---'))}
  return runJavaEngine(code);
`);

const runSqlCode = new Function('code', `
  ${mainJs.slice(mainJs.indexOf('function runSqlEngine(code) {'), mainJs.indexOf('// --- Dart Sass SCSS Compiler Engine ---'))}
  return runSqlEngine(code);
`);

console.log("=== TEST PYTHON PIZZA ===");
console.log(runPythonCode(`# This is a single-line comment.
print("I like pizza")
print("It's really good!")`));

console.log("\n=== TEST PYTHON VARIABLES & F-STRINGS ===");
console.log(runPythonCode(`first_name = "Bro"
food = "pizza"
email = "bro123@fake.com"
print(f"Hello {first_name}")
print(f"You like {food}")
print(f"Your email is: {email}")`));

console.log("\n=== TEST PYTHON CALCULATIONS ===");
console.log(runPythonCode(`item = "Pizza"
price = 12.99
quantity = 3
total = price * quantity
print(f"Item: {item}")
print(f"Total: \${total:.2f}")`));

console.log("\n=== TEST JAVA PRINT ===");
console.log(runJavaCode(`public class Main {
    public static void main(String[] args) {
        int count = 5;
        System.out.println("Processing " + count + " items...");
    }
}`));

console.log("\n=== TEST SQL ===");
console.log(runSqlCode(`SELECT emp_id, name, department, salary FROM employee WHERE salary > 60000;`));
