fruits = ["apple", "orange", "banana", "coconut"]

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
fruits.clear() # Empties entire list
