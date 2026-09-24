// Test input extraction and preparation logic
const testCodes = [
  `# Basic Text Input
name = input("What is your name?: ")
print(f"Hello {name}!")

age = int(input("How old are you?: "))
age += 1
print(f"Next year you will be {age} years old.")`,

  `item = input("What item would you like to buy?: ")
price = float(input("What is the unit price of the item?: $"))
quantity = int(input("How many units would you like to purchase?: "))
total = price * quantity
print(f"Total: {total}")`,

  `value = "5" + 5
print(value)`
];

function extractPrompts(code) {
  const inputRegex = /input\s*\(\s*(?:f?["'](.*?)["'])?\s*\)/g;
  const prompts = [];
  let match;
  while ((match = inputRegex.exec(code)) !== null) {
    prompts.push(match[1] || "Enter input: ");
  }
  return prompts;
}

testCodes.forEach((code, idx) => {
  console.log(`Snippet #${idx + 1}:`);
  const prompts = extractPrompts(code);
  console.log(`Prompts found (${prompts.length}):`, prompts);
});
