import re

def test():
    codes = [
        'name = input("What is your name?: ")\nage = int(input("How old are you?: "))\nlength = float(input("Enter rectangle length (cm): "))\nwidth = float(input("Enter rectangle width (cm): "))',
        'item = input("What item would you like to buy?: ")\nprice = float(input("What is the unit price of the item?: $"))\nquantity = int(input("How many units would you like to purchase?: "))',
        'radius_c = float(input("Enter circle radius (cm): "))\nradius_a = float(input("Enter circle radius for area (cm): "))\nside_a = float(input("Enter length of side A: "))\nside_b = float(input("Enter length of side B: "))',
        'age = int(input("Enter your age: "))',
        'name = input("Enter your name: ")',
        'rows = int(input("Enter number of rows: "))\ncols = int(input("Enter number of columns: "))\nsymbol = input("Enter symbol to use: ")',
        'letter = input("Guess a letter: ").upper()',
        'number = int(input("Enter a divisor number: "))'
    ]
    for i, c in enumerate(codes):
        matches = re.findall(r'input\s*\(\s*(?:f?["\'](.*?)["\'])?\s*\)', c)
        print(f"Snippet {i+1}: {matches}")

if __name__ == "__main__":
    test()
