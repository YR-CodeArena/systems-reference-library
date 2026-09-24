const fs = require('fs');

global.window = {
  addEventListener: () => {},
  matchMedia: () => ({ matches: false }),
  innerWidth: 1200
};
global.document = {
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createElement: () => ({ src: '', onload: () => {}, appendChild: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }],
  documentElement: { setAttribute: () => {}, removeAttribute: () => {} },
  addEventListener: (evt, cb) => { if (evt === 'DOMContentLoaded') cb(); }
};
global.performance = { now: () => 0 };
global.localStorage = { getItem: () => null, setItem: () => {} };

require('../assets/js/skulpt.min.js');
require('../assets/js/skulpt-stdlib.js');
global.window.Sk = global.Sk;

const mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
let testScript = mainJs.replace(
  'setupUniversalCodeRunner();',
  `setupUniversalCodeRunner();
   global.testEnv = { runPythonEngine };`
);
eval(testScript);

const { runPythonEngine } = global.testEnv;

async function testUserImages() {
  console.log("=== VERIFYING EXACT CODE FROM USER IMAGE 1 ===");
  const code1 = `fruits = ["apple", "orange", "banana", "coconut"]

# Accessing Elements by Index
print(fruits[0]) # Output: "apple"
print(fruits[-1]) # Output: "coconut"

# Modifying List Elements
fruits[0] = "pineapple"

# Core List Methods
fruits.append("kiwi") # Appends element to end of list
fruits.insert(1, "mango") # Inserts "mango" at index 1
fruits.remove("banana") # Removes first matching occurrence of "banana"
popped_item = fruits.pop() # Removes and returns last element
fruits.sort() # Sorts list elements alphabetically / numerically in place
fruits.reverse() # Reverses list order in place
print(fruits.index("orange")) # Returns index of "orange"
print(fruits.count("apple")) # Returns count of occurrences
fruits.clear() # Empties entire list`;

  const res1 = await runPythonEngine(code1, null);
  console.log("Exit Code:", res1.exitCode);
  console.log("Stdout:\n" + res1.output);

  console.log("\n=== VERIFYING EXACT CODE FROM USER IMAGE 2 ===");
  const code2 = `capitals = {
    "USA": "Washington D.C.",
    "India": "New Delhi",
    "China": "Beijing",
    "Russia": "Moscow"
}

# Safe Access via get() Method (Avoids KeyError if key is missing!)
print(capitals.get("USA")) # Output: "Washington D.C."
print(capitals.get("Japan")) # Output: None (Does not crash program!)

# Updating & Inserting Pairs
capitals.update({"Germany": "Berlin"}) # Inserts new key-value pair
capitals.update({"USA": "Detroit"}) # Overwrites existing key value

# Removing Pairs
capitals.pop("China") # Removes "China" key-value pair
capitals.popitem() # Removes last inserted key-value pair

# Extracting Keys, Values, and Items
print(capitals.keys()) # Returns dict_keys object
print(capitals.values()) # Returns dict_values object

# Iterating over Key-Value Pairs using items()
for country, capital in capitals.items():
    print(f"The capital of {country} is {capital}")`;

  const res2 = await runPythonEngine(code2, null);
  console.log("Exit Code:", res2.exitCode);
  console.log("Stdout:\n" + res2.output);
}

testUserImages();
