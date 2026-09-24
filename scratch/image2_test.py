capitals = {
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
    print(f"The capital of {country} is {capital}")
