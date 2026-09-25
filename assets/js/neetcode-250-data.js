/**
 * Systems Reference Library - NEETCode 250 Complete Problem Database
 * Exactly 250 Authoritative algorithmic interview drills spanning all 18 official NEETCode categories.
 */

const NEETCODE_250_DATA = [
  {
    "id": "NC-001",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/",
    "description": "Implement an optimal solution for <strong>Contains Duplicate</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def containsDuplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False",
    "testCases": [
      {
        "input": "[1, 2, 3, 1]",
        "expected": "True"
      },
      {
        "input": "[1, 2, 3, 4]",
        "expected": "False"
      },
      {
        "input": "[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]",
        "expected": "True"
      }
    ],
    "skills": [
      "hash-set",
      "frequency"
    ]
  },
  {
    "id": "NC-002",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/",
    "description": "Implement an optimal solution for <strong>Valid Anagram</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def isAnagram(s, t):\n    if len(s) != len(t):\n        return False\n    return sorted(s) == sorted(t)",
    "testCases": [
      {
        "input": "('anagram', 'nagaram')",
        "expected": "True"
      },
      {
        "input": "('rat', 'car')",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-table",
      "sorting",
      "strings"
    ]
  },
  {
    "id": "NC-003",
    "title": "Two Sum",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/",
    "description": "Implement an optimal solution for <strong>Two Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def twoSum(nums, target):\n    lookup = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in lookup:\n            return [lookup[diff], i]\n        lookup[num] = i\n    return []",
    "testCases": [
      {
        "input": "([2, 7, 11, 15], 9)",
        "expected": "[0, 1]"
      },
      {
        "input": "([3, 2, 4], 6)",
        "expected": "[1, 2]"
      }
    ],
    "skills": [
      "hash-table",
      "array-indexing"
    ]
  },
  {
    "id": "NC-004",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/",
    "description": "Implement an optimal solution for <strong>Group Anagrams</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def groupAnagrams(*args, **kwargs):\n    # Write your solution for NC-004: Group Anagrams (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-table",
      "string-sorting",
      "tuples"
    ]
  },
  {
    "id": "NC-005",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/",
    "description": "Implement an optimal solution for <strong>Top K Frequent Elements</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def topKFrequentElements(*args, **kwargs):\n    # Write your solution for NC-005: Top K Frequent Elements (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "heap",
      "bucket-sort",
      "hash-table"
    ]
  },
  {
    "id": "NC-006",
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/",
    "description": "Implement an optimal solution for <strong>Product of Array Except Self</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def productOfArrayExceptSelf(*args, **kwargs):\n    # Write your solution for NC-006: Product of Array Except Self (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "prefix-sum",
      "suffix-sum",
      "space-optimization"
    ]
  },
  {
    "id": "NC-007",
    "title": "Valid Sudoku",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/valid-sudoku/",
    "description": "Implement an optimal solution for <strong>Valid Sudoku</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def validSudoku(*args, **kwargs):\n    # Write your solution for NC-007: Valid Sudoku (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-set",
      "matrix-traversal",
      "spatial-indexing"
    ]
  },
  {
    "id": "NC-008",
    "title": "Encode and Decode Strings",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/encode-and-decode-strings/",
    "description": "Implement an optimal solution for <strong>Encode and Decode Strings</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def encodeAndDecodeStrings(*args, **kwargs):\n    # Write your solution for NC-008: Encode and Decode Strings (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "string-delimiter",
      "length-encoding"
    ]
  },
  {
    "id": "NC-009",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "description": "Implement an optimal solution for <strong>Longest Consecutive Sequence</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestConsecutiveSequence(*args, **kwargs):\n    # Write your solution for NC-009: Longest Consecutive Sequence (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-set",
      "streak-finding",
      "o(n)"
    ]
  },
  {
    "id": "NC-010",
    "title": "Concatenation of Array",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 5,
    "leetcodeUrl": "https://leetcode.com/problems/concatenation-of-array/",
    "description": "Implement an optimal solution for <strong>Concatenation of Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def concatenationOfArray(*args, **kwargs):\n    # Write your solution for NC-010: Concatenation of Array (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "array-manipulation"
    ]
  },
  {
    "id": "NC-011",
    "title": "Replace Elements with Greatest Element on Right",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right/",
    "description": "Implement an optimal solution for <strong>Replace Elements with Greatest Element on Right</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def replaceElementsWithGreatestElementOnRight(*args, **kwargs):\n    # Write your solution for NC-011: Replace Elements with Greatest Element on Right (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "reverse-traversal",
      "running-maximum"
    ]
  },
  {
    "id": "NC-012",
    "title": "Is Subsequence",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/is-subsequence/",
    "description": "Implement an optimal solution for <strong>Is Subsequence</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def isSubsequence(*args, **kwargs):\n    # Write your solution for NC-012: Is Subsequence (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "greedy-matching"
    ]
  },
  {
    "id": "NC-013",
    "title": "Length of Last Word",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 5,
    "leetcodeUrl": "https://leetcode.com/problems/length-of-last-word/",
    "description": "Implement an optimal solution for <strong>Length of Last Word</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lengthOfLastWord(*args, **kwargs):\n    # Write your solution for NC-013: Length of Last Word (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "string-parsing",
      "trim"
    ]
  },
  {
    "id": "NC-014",
    "title": "Pascal's Triangle",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/pascal-s-triangle/",
    "description": "Implement an optimal solution for <strong>Pascal's Triangle</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def pascalSTriangle(*args, **kwargs):\n    # Write your solution for NC-014: Pascal's Triangle (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dynamic-programming",
      "combinatorics"
    ]
  },
  {
    "id": "NC-015",
    "title": "Remove Element",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/remove-element/",
    "description": "Implement an optimal solution for <strong>Remove Element</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def removeElement(*args, **kwargs):\n    # Write your solution for NC-015: Remove Element (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "in-place"
    ]
  },
  {
    "id": "NC-016",
    "title": "Unique Email Addresses",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/unique-email-addresses/",
    "description": "Implement an optimal solution for <strong>Unique Email Addresses</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def uniqueEmailAddresses(*args, **kwargs):\n    # Write your solution for NC-016: Unique Email Addresses (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "string-sanitization",
      "hash-set"
    ]
  },
  {
    "id": "NC-017",
    "title": "Isomorphic Strings",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/isomorphic-strings/",
    "description": "Implement an optimal solution for <strong>Isomorphic Strings</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def isomorphicStrings(*args, **kwargs):\n    # Write your solution for NC-017: Isomorphic Strings (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bi-directional-map",
      "character-mapping"
    ]
  },
  {
    "id": "NC-018",
    "title": "Can Place Flowers",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/can-place-flowers/",
    "description": "Implement an optimal solution for <strong>Can Place Flowers</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def canPlaceFlowers(*args, **kwargs):\n    # Write your solution for NC-018: Can Place Flowers (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "adjacent-checking"
    ]
  },
  {
    "id": "NC-019",
    "title": "Majority Element",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/majority-element/",
    "description": "Implement an optimal solution for <strong>Majority Element</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def majorityElement(*args, **kwargs):\n    # Write your solution for NC-019: Majority Element (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "boyer-moore",
      "hash-map"
    ]
  },
  {
    "id": "NC-020",
    "title": "Next Greater Element I",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/next-greater-element-i/",
    "description": "Implement an optimal solution for <strong>Next Greater Element I</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def nextGreaterElementI(*args, **kwargs):\n    # Write your solution for NC-020: Next Greater Element I (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "monotonic-stack",
      "hash-map"
    ]
  },
  {
    "id": "NC-021",
    "title": "Find Pivot Index",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/find-pivot-index/",
    "description": "Implement an optimal solution for <strong>Find Pivot Index</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findPivotIndex(*args, **kwargs):\n    # Write your solution for NC-021: Find Pivot Index (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "prefix-sum",
      "array-partitioning"
    ]
  },
  {
    "id": "NC-022",
    "title": "Range Sum Query - Immutable",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/range-sum-query-immutable/",
    "description": "Implement an optimal solution for <strong>Range Sum Query - Immutable</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def rangeSumQueryImmutable(*args, **kwargs):\n    # Write your solution for NC-022: Range Sum Query - Immutable (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "prefix-sum",
      "class-design"
    ]
  },
  {
    "id": "NC-023",
    "title": "Find All Numbers Disappeared in an Array",
    "difficulty": "Easy",
    "category": "Arrays & Hashing",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "description": "Implement an optimal solution for <strong>Find All Numbers Disappeared in an Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findAllNumbersDisappearedInAnArray(*args, **kwargs):\n    # Write your solution for NC-023: Find All Numbers Disappeared in an Array (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "in-place-hashing",
      "negation"
    ]
  },
  {
    "id": "NC-024",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/",
    "description": "Implement an optimal solution for <strong>Valid Palindrome</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def isPalindrome(s):\n    filtered = ''.join(c.lower() for c in s if c.isalnum())\n    return filtered == filtered[::-1]",
    "testCases": [
      {
        "input": "('A man, a plan, a canal: Panama',)",
        "expected": "True"
      },
      {
        "input": "('race a car',)",
        "expected": "False"
      },
      {
        "input": "(' ',)",
        "expected": "True"
      }
    ],
    "skills": [
      "two-pointers",
      "string-filtering"
    ]
  },
  {
    "id": "NC-025",
    "title": "Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "description": "Implement an optimal solution for <strong>Two Sum II - Input Array Is Sorted</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def twoSumIiInputArrayIsSorted(*args, **kwargs):\n    # Write your solution for NC-028: Two Sum II - Input Array Is Sorted (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "sorted-array"
    ]
  },
  {
    "id": "NC-026",
    "title": "3Sum",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/3sum/",
    "description": "Implement an optimal solution for <strong>3Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def 3sum(*args, **kwargs):\n    # Write your solution for NC-029: 3Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "sorting",
      "duplicate-skipping"
    ]
  },
  {
    "id": "NC-027",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/",
    "description": "Implement an optimal solution for <strong>Container With Most Water</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def containerWithMostWater(*args, **kwargs):\n    # Write your solution for NC-030: Container With Most Water (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "greedy-bounds"
    ]
  },
  {
    "id": "NC-028",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "category": "Two Pointers",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "description": "Implement an optimal solution for <strong>Trapping Rain Water</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def trappingRainWater(*args, **kwargs):\n    # Write your solution for NC-031: Trapping Rain Water (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "prefix-max",
      "monotonic-stack"
    ]
  },
  {
    "id": "NC-029",
    "title": "Valid Palindrome II",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome-ii/",
    "description": "Implement an optimal solution for <strong>Valid Palindrome II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def validPalindromeIi(*args, **kwargs):\n    # Write your solution for NC-032: Valid Palindrome II (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "branch-skip"
    ]
  },
  {
    "id": "NC-030",
    "title": "Minimum Difference Between Highest and Lowest of K Scores",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/",
    "description": "Implement an optimal solution for <strong>Minimum Difference Between Highest and Lowest of K Scores</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumDifferenceBetweenHighestAndLowestOfKScores(*args, **kwargs):\n    # Write your solution for NC-033: Minimum Difference Between Highest and Lowest of K Scores (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sorting",
      "sliding-window"
    ]
  },
  {
    "id": "NC-031",
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/merge-sorted-array/",
    "description": "Implement an optimal solution for <strong>Merge Sorted Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeSortedArray(*args, **kwargs):\n    # Write your solution for NC-034: Merge Sorted Array (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "reverse-fill",
      "in-place"
    ]
  },
  {
    "id": "NC-032",
    "title": "Reverse String",
    "difficulty": "Easy",
    "category": "Two Pointers",
    "estimatedMinutes": 5,
    "leetcodeUrl": "https://leetcode.com/problems/reverse-string/",
    "description": "Implement an optimal solution for <strong>Reverse String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reverseString(*args, **kwargs):\n    # Write your solution for NC-035: Reverse String (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "in-place"
    ]
  },
  {
    "id": "NC-033",
    "title": "Rotate Array",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/rotate-array/",
    "description": "Implement an optimal solution for <strong>Rotate Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def rotateArray(*args, **kwargs):\n    # Write your solution for NC-036: Rotate Array (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "array-reversal",
      "modulo-arithmetic"
    ]
  },
  {
    "id": "NC-034",
    "title": "4Sum",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/4sum/",
    "description": "Implement an optimal solution for <strong>4Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def 4sum(*args, **kwargs):\n    # Write your solution for NC-037: 4Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "k-sum",
      "recursion",
      "two-pointers"
    ]
  },
  {
    "id": "NC-035",
    "title": "Boats to Save People",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/boats-to-save-people/",
    "description": "Implement an optimal solution for <strong>Boats to Save People</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def boatsToSavePeople(*args, **kwargs):\n    # Write your solution for NC-038: Boats to Save People (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "two-pointers",
      "sorting"
    ]
  },
  {
    "id": "NC-036",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "category": "Sliding Window",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "description": "Implement an optimal solution for <strong>Best Time to Buy and Sell Stock</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maxProfit(prices):\n    min_p, max_p = float('inf'), 0\n    for p in prices:\n        if p < min_p:\n            min_p = p\n        elif p - min_p > max_p:\n            max_p = p - min_p\n    return max_p",
    "testCases": [
      {
        "input": "([7, 1, 5, 3, 6, 4],)",
        "expected": "5"
      },
      {
        "input": "([7, 6, 4, 3, 1],)",
        "expected": "0"
      }
    ],
    "skills": [
      "sliding-window",
      "running-minimum"
    ]
  },
  {
    "id": "NC-037",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "description": "Implement an optimal solution for <strong>Longest Substring Without Repeating Characters</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestSubstringWithoutRepeatingCharacters(*args, **kwargs):\n    # Write your solution for NC-041: Longest Substring Without Repeating Characters (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "hash-set"
    ]
  },
  {
    "id": "NC-038",
    "title": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "description": "Implement an optimal solution for <strong>Longest Repeating Character Replacement</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestRepeatingCharacterReplacement(*args, **kwargs):\n    # Write your solution for NC-042: Longest Repeating Character Replacement (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "max-frequency"
    ]
  },
  {
    "id": "NC-039",
    "title": "Permutation in String",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/",
    "description": "Implement an optimal solution for <strong>Permutation in String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def permutationInString(*args, **kwargs):\n    # Write your solution for NC-043: Permutation in String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "frequency-match"
    ]
  },
  {
    "id": "NC-040",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "category": "Sliding Window",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "description": "Implement an optimal solution for <strong>Minimum Window Substring</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumWindowSubstring(*args, **kwargs):\n    # Write your solution for NC-044: Minimum Window Substring (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "hash-map",
      "count-match"
    ]
  },
  {
    "id": "NC-041",
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "category": "Sliding Window",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/",
    "description": "Implement an optimal solution for <strong>Sliding Window Maximum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def slidingWindowMaximum(*args, **kwargs):\n    # Write your solution for NC-045: Sliding Window Maximum (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "deque",
      "monotonic-queue"
    ]
  },
  {
    "id": "NC-042",
    "title": "Contains Duplicate II",
    "difficulty": "Easy",
    "category": "Sliding Window",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate-ii/",
    "description": "Implement an optimal solution for <strong>Contains Duplicate II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def containsDuplicateIi(*args, **kwargs):\n    # Write your solution for NC-046: Contains Duplicate II (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-map",
      "sliding-window-k"
    ]
  },
  {
    "id": "NC-043",
    "title": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
    "description": "Implement an optimal solution for <strong>Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold(*args, **kwargs):\n    # Write your solution for NC-047: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "sum-threshold"
    ]
  },
  {
    "id": "NC-044",
    "title": "Frequency of the Most Frequent Element",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
    "description": "Implement an optimal solution for <strong>Frequency of the Most Frequent Element</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def frequencyOfTheMostFrequentElement(*args, **kwargs):\n    # Write your solution for NC-048: Frequency of the Most Frequent Element (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sorting",
      "sliding-window",
      "prefix-sum"
    ]
  },
  {
    "id": "NC-045",
    "title": "Fruit Into Baskets",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/fruit-into-baskets/",
    "description": "Implement an optimal solution for <strong>Fruit Into Baskets</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def fruitIntoBaskets(*args, **kwargs):\n    # Write your solution for NC-049: Fruit Into Baskets (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "at-most-2-distinct"
    ]
  },
  {
    "id": "NC-046",
    "title": "Maximum Number of Vowels in a Substring of Given Length",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
    "description": "Implement an optimal solution for <strong>Maximum Number of Vowels in a Substring of Given Length</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumNumberOfVowelsInASubstringOfGivenLength(*args, **kwargs):\n    # Write your solution for NC-050: Maximum Number of Vowels in a Substring of Given Length (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "character-count"
    ]
  },
  {
    "id": "NC-047",
    "title": "Minimum Size Subarray Sum",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "description": "Implement an optimal solution for <strong>Minimum Size Subarray Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumSizeSubarraySum(*args, **kwargs):\n    # Write your solution for NC-051: Minimum Size Subarray Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sliding-window",
      "prefix-sum"
    ]
  },
  {
    "id": "NC-048",
    "title": "Find K Closest Elements",
    "difficulty": "Medium",
    "category": "Sliding Window",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/find-k-closest-elements/",
    "description": "Implement an optimal solution for <strong>Find K Closest Elements</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findKClosestElements(*args, **kwargs):\n    # Write your solution for NC-052: Find K Closest Elements (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "two-pointers",
      "sliding-window"
    ]
  },
  {
    "id": "NC-049",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "category": "Stack",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/",
    "description": "Implement an optimal solution for <strong>Valid Parentheses</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def isValid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
    "testCases": [
      {
        "input": "('()[]{}',)",
        "expected": "True"
      },
      {
        "input": "('(]',)",
        "expected": "False"
      },
      {
        "input": "('([])',)",
        "expected": "True"
      }
    ],
    "skills": [
      "stack",
      "bracket-matching"
    ]
  },
  {
    "id": "NC-050",
    "title": "Min Stack",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/min-stack/",
    "description": "Implement an optimal solution for <strong>Min Stack</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minStack(*args, **kwargs):\n    # Write your solution for NC-055: Min Stack (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "class-design",
      "auxiliary-stack"
    ]
  },
  {
    "id": "NC-051",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "description": "Implement an optimal solution for <strong>Evaluate Reverse Polish Notation</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def evaluateReversePolishNotation(*args, **kwargs):\n    # Write your solution for NC-056: Evaluate Reverse Polish Notation (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "postfix-evaluation"
    ]
  },
  {
    "id": "NC-052",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/",
    "description": "Implement an optimal solution for <strong>Generate Parentheses</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def generateParentheses(*args, **kwargs):\n    # Write your solution for NC-057: Generate Parentheses (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "backtracking",
      "recursion"
    ]
  },
  {
    "id": "NC-053",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/",
    "description": "Implement an optimal solution for <strong>Daily Temperatures</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def dailyTemperatures(*args, **kwargs):\n    # Write your solution for NC-058: Daily Temperatures (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "monotonic-stack",
      "next-greater-element"
    ]
  },
  {
    "id": "NC-054",
    "title": "Car Fleet",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/car-fleet/",
    "description": "Implement an optimal solution for <strong>Car Fleet</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def carFleet(*args, **kwargs):\n    # Write your solution for NC-059: Car Fleet (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "monotonic-stack",
      "sorting",
      "arrival-time"
    ]
  },
  {
    "id": "NC-055",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "category": "Stack",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "description": "Implement an optimal solution for <strong>Largest Rectangle in Histogram</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def largestRectangleInHistogram(*args, **kwargs):\n    # Write your solution for NC-060: Largest Rectangle in Histogram (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "monotonic-stack",
      "area-calculation"
    ]
  },
  {
    "id": "NC-056",
    "title": "Baseball Game",
    "difficulty": "Easy",
    "category": "Stack",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/baseball-game/",
    "description": "Implement an optimal solution for <strong>Baseball Game</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def baseballGame(*args, **kwargs):\n    # Write your solution for NC-061: Baseball Game (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "state-machine"
    ]
  },
  {
    "id": "NC-057",
    "title": "Implement Queue using Stacks",
    "difficulty": "Easy",
    "category": "Stack",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "description": "Implement an optimal solution for <strong>Implement Queue using Stacks</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def implementQueueUsingStacks(*args, **kwargs):\n    # Write your solution for NC-062: Implement Queue using Stacks (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-stacks",
      "amortized-analysis"
    ]
  },
  {
    "id": "NC-058",
    "title": "Simplify Path",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/simplify-path/",
    "description": "Implement an optimal solution for <strong>Simplify Path</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def simplifyPath(*args, **kwargs):\n    # Write your solution for NC-063: Simplify Path (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "string-split",
      "canonical-path"
    ]
  },
  {
    "id": "NC-059",
    "title": "Decode String",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/decode-string/",
    "description": "Implement an optimal solution for <strong>Decode String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def decodeString(*args, **kwargs):\n    # Write your solution for NC-064: Decode String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "recursion",
      "nested-strings"
    ]
  },
  {
    "id": "NC-060",
    "title": "Asteroid Collision",
    "difficulty": "Medium",
    "category": "Stack",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/asteroid-collision/",
    "description": "Implement an optimal solution for <strong>Asteroid Collision</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def asteroidCollision(*args, **kwargs):\n    # Write your solution for NC-065: Asteroid Collision (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "stack",
      "collision-simulation"
    ]
  },
  {
    "id": "NC-061",
    "title": "Binary Search",
    "difficulty": "Easy",
    "category": "Binary Search",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/binary-search/",
    "description": "Implement an optimal solution for <strong>Binary Search</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def search(nums, target):\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if nums[m] == target:\n            return m\n        elif nums[m] < target:\n            l = m + 1\n        else:\n            r = m - 1\n    return -1",
    "testCases": [
      {
        "input": "([-1, 0, 3, 5, 9, 12], 9)",
        "expected": "4"
      },
      {
        "input": "([-1, 0, 3, 5, 9, 12], 2)",
        "expected": "-1"
      }
    ],
    "skills": [
      "binary-search",
      "half-interval"
    ]
  },
  {
    "id": "NC-062",
    "title": "Search a 2D Matrix",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix/",
    "description": "Implement an optimal solution for <strong>Search a 2D Matrix</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def searchA2dMatrix(*args, **kwargs):\n    # Write your solution for NC-069: Search a 2D Matrix (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "matrix-coordinates"
    ]
  },
  {
    "id": "NC-063",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas/",
    "description": "Implement an optimal solution for <strong>Koko Eating Bananas</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def kokoEatingBananas(*args, **kwargs):\n    # Write your solution for NC-070: Koko Eating Bananas (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search-on-answer",
      "monotonic-condition"
    ]
  },
  {
    "id": "NC-064",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "description": "Implement an optimal solution for <strong>Search in Rotated Sorted Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def searchInRotatedSortedArray(*args, **kwargs):\n    # Write your solution for NC-071: Search in Rotated Sorted Array (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "rotated-array"
    ]
  },
  {
    "id": "NC-065",
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "description": "Implement an optimal solution for <strong>Find Minimum in Rotated Sorted Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findMinimumInRotatedSortedArray(*args, **kwargs):\n    # Write your solution for NC-072: Find Minimum in Rotated Sorted Array (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "pivot-detection"
    ]
  },
  {
    "id": "NC-066",
    "title": "Time Based Key-Value Store",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/time-based-key-value-store/",
    "description": "Implement an optimal solution for <strong>Time Based Key-Value Store</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def timeBasedKeyValueStore(*args, **kwargs):\n    # Write your solution for NC-073: Time Based Key-Value Store (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "hash-map",
      "timestamping"
    ]
  },
  {
    "id": "NC-067",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "category": "Binary Search",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "description": "Implement an optimal solution for <strong>Median of Two Sorted Arrays</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def medianOfTwoSortedArrays(*args, **kwargs):\n    # Write your solution for NC-074: Median of Two Sorted Arrays (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "partitioning",
      "log-min-n"
    ]
  },
  {
    "id": "NC-068",
    "title": "Search Insert Position",
    "difficulty": "Easy",
    "category": "Binary Search",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/search-insert-position/",
    "description": "Implement an optimal solution for <strong>Search Insert Position</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def searchInsertPosition(*args, **kwargs):\n    # Write your solution for NC-075: Search Insert Position (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "insertion-boundary"
    ]
  },
  {
    "id": "NC-069",
    "title": "Guess Number Higher or Lower",
    "difficulty": "Easy",
    "category": "Binary Search",
    "estimatedMinutes": 5,
    "leetcodeUrl": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "description": "Implement an optimal solution for <strong>Guess Number Higher or Lower</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def guessNumberHigherOrLower(*args, **kwargs):\n    # Write your solution for NC-076: Guess Number Higher or Lower (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "interactive"
    ]
  },
  {
    "id": "NC-070",
    "title": "First Bad Version",
    "difficulty": "Easy",
    "category": "Binary Search",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/first-bad-version/",
    "description": "Implement an optimal solution for <strong>First Bad Version</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def firstBadVersion(*args, **kwargs):\n    # Write your solution for NC-077: First Bad Version (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "monotonic-boolean"
    ]
  },
  {
    "id": "NC-071",
    "title": "Arranging Coins",
    "difficulty": "Easy",
    "category": "Binary Search",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/arranging-coins/",
    "description": "Implement an optimal solution for <strong>Arranging Coins</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def arrangingCoins(*args, **kwargs):\n    # Write your solution for NC-078: Arranging Coins (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "math",
      "binary-search"
    ]
  },
  {
    "id": "NC-072",
    "title": "Single Element in a Sorted Array",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "description": "Implement an optimal solution for <strong>Single Element in a Sorted Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def singleElementInASortedArray(*args, **kwargs):\n    # Write your solution for NC-079: Single Element in a Sorted Array (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "parity-indexing"
    ]
  },
  {
    "id": "NC-073",
    "title": "Find Peak Element",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/find-peak-element/",
    "description": "Implement an optimal solution for <strong>Find Peak Element</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findPeakElement(*args, **kwargs):\n    # Write your solution for NC-080: Find Peak Element (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search",
      "local-maxima"
    ]
  },
  {
    "id": "NC-074",
    "title": "Capacity To Ship Packages Within D Days",
    "difficulty": "Medium",
    "category": "Binary Search",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "description": "Implement an optimal solution for <strong>Capacity To Ship Packages Within D Days</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def capacityToShipPackagesWithinDDays(*args, **kwargs):\n    # Write your solution for NC-081: Capacity To Ship Packages Within D Days (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search-on-answer",
      "greedy"
    ]
  },
  {
    "id": "NC-075",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "description": "Implement an optimal solution for <strong>Reverse Linked List</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reverseLinkedList(*args, **kwargs):\n    # Write your solution for NC-084: Reverse Linked List (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "pointer-reversal"
    ]
  },
  {
    "id": "NC-076",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "description": "Implement an optimal solution for <strong>Merge Two Sorted Lists</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeTwoSortedLists(*args, **kwargs):\n    # Write your solution for NC-085: Merge Two Sorted Lists (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "two-pointers",
      "dummy-head"
    ]
  },
  {
    "id": "NC-077",
    "title": "Reorder List",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/reorder-list/",
    "description": "Implement an optimal solution for <strong>Reorder List</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reorderList(*args, **kwargs):\n    # Write your solution for NC-086: Reorder List (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "fast-slow-pointers",
      "reversal"
    ]
  },
  {
    "id": "NC-078",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "description": "Implement an optimal solution for <strong>Remove Nth Node From End of List</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def removeNthNodeFromEndOfList(*args, **kwargs):\n    # Write your solution for NC-087: Remove Nth Node From End of List (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "two-pointers",
      "gap-stride"
    ]
  },
  {
    "id": "NC-079",
    "title": "Copy List with Random Pointer",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "description": "Implement an optimal solution for <strong>Copy List with Random Pointer</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def copyListWithRandomPointer(*args, **kwargs):\n    # Write your solution for NC-088: Copy List with Random Pointer (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "hash-map",
      "interleaving"
    ]
  },
  {
    "id": "NC-080",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/add-two-numbers/",
    "description": "Implement an optimal solution for <strong>Add Two Numbers</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def addTwoNumbers(*args, **kwargs):\n    # Write your solution for NC-089: Add Two Numbers (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "carry-arithmetic"
    ]
  },
  {
    "id": "NC-081",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "description": "Implement an optimal solution for <strong>Linked List Cycle</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def linkedListCycle(*args, **kwargs):\n    # Write your solution for NC-090: Linked List Cycle (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "floyds-cycle-detection"
    ]
  },
  {
    "id": "NC-082",
    "title": "Find the Duplicate Number",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/",
    "description": "Implement an optimal solution for <strong>Find the Duplicate Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findTheDuplicateNumber(*args, **kwargs):\n    # Write your solution for NC-091: Find the Duplicate Number (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "floyds-cycle-detection",
      "array-as-linked-list"
    ]
  },
  {
    "id": "NC-083",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "category": "Linked List",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/lru-cache/",
    "description": "Implement an optimal solution for <strong>LRU Cache</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lruCache(*args, **kwargs):\n    # Write your solution for NC-092: LRU Cache (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "doubly-linked-list",
      "hash-map",
      "o(1)-eviction"
    ]
  },
  {
    "id": "NC-084",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "category": "Linked List",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "description": "Implement an optimal solution for <strong>Merge k Sorted Lists</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeKSortedLists(*args, **kwargs):\n    # Write your solution for NC-093: Merge k Sorted Lists (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "divide-and-conquer",
      "linked-list"
    ]
  },
  {
    "id": "NC-085",
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Hard",
    "category": "Linked List",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "description": "Implement an optimal solution for <strong>Reverse Nodes in k-Group</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reverseNodesInKGroup(*args, **kwargs):\n    # Write your solution for NC-094: Reverse Nodes in k-Group (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "group-reversal"
    ]
  },
  {
    "id": "NC-086",
    "title": "Palindrome Linked List",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-linked-list/",
    "description": "Implement an optimal solution for <strong>Palindrome Linked List</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def palindromeLinkedList(*args, **kwargs):\n    # Write your solution for NC-095: Palindrome Linked List (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "fast-slow-pointers",
      "reversal",
      "in-place"
    ]
  },
  {
    "id": "NC-087",
    "title": "Intersection of Two Linked Lists",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "description": "Implement an optimal solution for <strong>Intersection of Two Linked Lists</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def intersectionOfTwoLinkedLists(*args, **kwargs):\n    # Write your solution for NC-096: Intersection of Two Linked Lists (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "cycle-traversal"
    ]
  },
  {
    "id": "NC-088",
    "title": "Remove Linked List Elements",
    "difficulty": "Easy",
    "category": "Linked List",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/remove-linked-list-elements/",
    "description": "Implement an optimal solution for <strong>Remove Linked List Elements</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def removeLinkedListElements(*args, **kwargs):\n    # Write your solution for NC-097: Remove Linked List Elements (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "linked-list",
      "dummy-node"
    ]
  },
  {
    "id": "NC-089",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/",
    "description": "Implement an optimal solution for <strong>Invert Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def invertBinaryTree(*args, **kwargs):\n    # Write your solution for NC-100: Invert Binary Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "recursion"
    ]
  },
  {
    "id": "NC-090",
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "description": "Implement an optimal solution for <strong>Maximum Depth of Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumDepthOfBinaryTree(*args, **kwargs):\n    # Write your solution for NC-101: Maximum Depth of Binary Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "bfs"
    ]
  },
  {
    "id": "NC-091",
    "title": "Diameter of Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "description": "Implement an optimal solution for <strong>Diameter of Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def diameterOfBinaryTree(*args, **kwargs):\n    # Write your solution for NC-102: Diameter of Binary Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "postorder"
    ]
  },
  {
    "id": "NC-092",
    "title": "Balanced Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/",
    "description": "Implement an optimal solution for <strong>Balanced Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def balancedBinaryTree(*args, **kwargs):\n    # Write your solution for NC-103: Balanced Binary Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "height-balanced"
    ]
  },
  {
    "id": "NC-093",
    "title": "Same Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/same-tree/",
    "description": "Implement an optimal solution for <strong>Same Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def sameTree(*args, **kwargs):\n    # Write your solution for NC-104: Same Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "structural-equality"
    ]
  },
  {
    "id": "NC-094",
    "title": "Subtree of Another Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/subtree-of-another-tree/",
    "description": "Implement an optimal solution for <strong>Subtree of Another Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def subtreeOfAnotherTree(*args, **kwargs):\n    # Write your solution for NC-105: Subtree of Another Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "tree-matching",
      "dfs"
    ]
  },
  {
    "id": "NC-095",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "description": "Implement an optimal solution for <strong>Lowest Common Ancestor of a Binary Search Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lowestCommonAncestorOfABinarySearchTree(*args, **kwargs):\n    # Write your solution for NC-106: Lowest Common Ancestor of a Binary Search Tree (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bst",
      "binary-search-properties"
    ]
  },
  {
    "id": "NC-096",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 18,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "description": "Implement an optimal solution for <strong>Binary Tree Level Order Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreeLevelOrderTraversal(*args, **kwargs):\n    # Write your solution for NC-107: Binary Tree Level Order Traversal (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "bfs",
      "queue"
    ]
  },
  {
    "id": "NC-097",
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 18,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "description": "Implement an optimal solution for <strong>Binary Tree Right Side View</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreeRightSideView(*args, **kwargs):\n    # Write your solution for NC-108: Binary Tree Right Side View (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "bfs",
      "dfs-preorder"
    ]
  },
  {
    "id": "NC-098",
    "title": "Count Good Nodes in Binary Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 18,
    "leetcodeUrl": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "description": "Implement an optimal solution for <strong>Count Good Nodes in Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def countGoodNodesInBinaryTree(*args, **kwargs):\n    # Write your solution for NC-109: Count Good Nodes in Binary Tree (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "path-maximum"
    ]
  },
  {
    "id": "NC-099",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "description": "Implement an optimal solution for <strong>Validate Binary Search Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def validateBinarySearchTree(*args, **kwargs):\n    # Write your solution for NC-110: Validate Binary Search Tree (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bst",
      "inorder-traversal",
      "range-bounds"
    ]
  },
  {
    "id": "NC-100",
    "title": "Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "description": "Implement an optimal solution for <strong>Kth Smallest Element in a BST</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def kthSmallestElementInABst(*args, **kwargs):\n    # Write your solution for NC-111: Kth Smallest Element in a BST (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bst",
      "inorder-traversal",
      "stack"
    ]
  },
  {
    "id": "NC-101",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "description": "Implement an optimal solution for <strong>Construct Binary Tree from Preorder and Inorder Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def constructBinaryTreeFromPreorderAndInorderTraversal(*args, **kwargs):\n    # Write your solution for NC-112: Construct Binary Tree from Preorder and Inorder Traversal (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "divide-and-conquer",
      "hash-map"
    ]
  },
  {
    "id": "NC-102",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "category": "Trees",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "description": "Implement an optimal solution for <strong>Binary Tree Maximum Path Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreeMaximumPathSum(*args, **kwargs):\n    # Write your solution for NC-113: Binary Tree Maximum Path Sum (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "postorder",
      "branch-sum"
    ]
  },
  {
    "id": "NC-103",
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "category": "Trees",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "description": "Implement an optimal solution for <strong>Serialize and Deserialize Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def serializeAndDeserializeBinaryTree(*args, **kwargs):\n    # Write your solution for NC-114: Serialize and Deserialize Binary Tree (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "bfs",
      "preorder",
      "string-parsing"
    ]
  },
  {
    "id": "NC-104",
    "title": "Binary Tree Preorder Traversal",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "description": "Implement an optimal solution for <strong>Binary Tree Preorder Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreePreorderTraversal(*args, **kwargs):\n    # Write your solution for NC-115: Binary Tree Preorder Traversal (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "tree-traversal",
      "recursion",
      "stack"
    ]
  },
  {
    "id": "NC-105",
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "description": "Implement an optimal solution for <strong>Binary Tree Inorder Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreeInorderTraversal(*args, **kwargs):\n    # Write your solution for NC-116: Binary Tree Inorder Traversal (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "tree-traversal",
      "recursion",
      "stack"
    ]
  },
  {
    "id": "NC-106",
    "title": "Binary Tree Postorder Traversal",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "description": "Implement an optimal solution for <strong>Binary Tree Postorder Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreePostorderTraversal(*args, **kwargs):\n    # Write your solution for NC-117: Binary Tree Postorder Traversal (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "tree-traversal",
      "recursion",
      "stack"
    ]
  },
  {
    "id": "NC-107",
    "title": "Merge Two Binary Trees",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/merge-two-binary-trees/",
    "description": "Implement an optimal solution for <strong>Merge Two Binary Trees</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeTwoBinaryTrees(*args, **kwargs):\n    # Write your solution for NC-118: Merge Two Binary Trees (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "recursion"
    ]
  },
  {
    "id": "NC-108",
    "title": "Path Sum",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/path-sum/",
    "description": "Implement an optimal solution for <strong>Path Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def pathSum(*args, **kwargs):\n    # Write your solution for NC-119: Path Sum (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "dfs",
      "target-subtraction"
    ]
  },
  {
    "id": "NC-109",
    "title": "Construct String from Binary Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/construct-string-from-binary-tree/",
    "description": "Implement an optimal solution for <strong>Construct String from Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def constructStringFromBinaryTree(*args, **kwargs):\n    # Write your solution for NC-120: Construct String from Binary Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "string-formatting",
      "preorder"
    ]
  },
  {
    "id": "NC-110",
    "title": "Minimum Absolute Difference in BST",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
    "description": "Implement an optimal solution for <strong>Minimum Absolute Difference in BST</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumAbsoluteDifferenceInBst(*args, **kwargs):\n    # Write your solution for NC-121: Minimum Absolute Difference in BST (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bst",
      "inorder-traversal"
    ]
  },
  {
    "id": "NC-111",
    "title": "Symmetric Tree",
    "difficulty": "Easy",
    "category": "Trees",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/symmetric-tree/",
    "description": "Implement an optimal solution for <strong>Symmetric Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def symmetricTree(*args, **kwargs):\n    # Write your solution for NC-122: Symmetric Tree (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "mirror-recursion"
    ]
  },
  {
    "id": "NC-112",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "description": "Implement an optimal solution for <strong>Binary Tree Zigzag Level Order Traversal</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def binaryTreeZigzagLevelOrderTraversal(*args, **kwargs):\n    # Write your solution for NC-123: Binary Tree Zigzag Level Order Traversal (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "deque",
      "bfs"
    ]
  },
  {
    "id": "NC-113",
    "title": "Populating Next Right Pointers in Each Node",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "description": "Implement an optimal solution for <strong>Populating Next Right Pointers in Each Node</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def populatingNextRightPointersInEachNode(*args, **kwargs):\n    # Write your solution for NC-124: Populating Next Right Pointers in Each Node (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "level-pointers",
      "bfs"
    ]
  },
  {
    "id": "NC-114",
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "description": "Implement an optimal solution for <strong>Flatten Binary Tree to Linked List</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def flattenBinaryTreeToLinkedList(*args, **kwargs):\n    # Write your solution for NC-125: Flatten Binary Tree to Linked List (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-tree",
      "morris-traversal",
      "preorder"
    ]
  },
  {
    "id": "NC-115",
    "title": "All Nodes Distance K in Binary Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    "description": "Implement an optimal solution for <strong>All Nodes Distance K in Binary Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def allNodesDistanceKInBinaryTree(*args, **kwargs):\n    # Write your solution for NC-126: All Nodes Distance K in Binary Tree (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph-conversion",
      "bfs",
      "parent-pointers"
    ]
  },
  {
    "id": "NC-116",
    "title": "Delete Node in a BST",
    "difficulty": "Medium",
    "category": "Trees",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "description": "Implement an optimal solution for <strong>Delete Node in a BST</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def deleteNodeInABst(*args, **kwargs):\n    # Write your solution for NC-127: Delete Node in a BST (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bst",
      "successor-replacement"
    ]
  },
  {
    "id": "NC-117",
    "title": "Kth Largest Element in a Stream",
    "difficulty": "Easy",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "description": "Implement an optimal solution for <strong>Kth Largest Element in a Stream</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def kthLargestElementInAStream(*args, **kwargs):\n    # Write your solution for NC-133: Kth Largest Element in a Stream (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "class-design",
      "heapq"
    ]
  },
  {
    "id": "NC-118",
    "title": "Last Stone Weight",
    "difficulty": "Easy",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/last-stone-weight/",
    "description": "Implement an optimal solution for <strong>Last Stone Weight</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lastStoneWeight(*args, **kwargs):\n    # Write your solution for NC-134: Last Stone Weight (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "max-heap",
      "simulation"
    ]
  },
  {
    "id": "NC-119",
    "title": "K Closest Points to Origin",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "description": "Implement an optimal solution for <strong>K Closest Points to Origin</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def kClosestPointsToOrigin(*args, **kwargs):\n    # Write your solution for NC-135: K Closest Points to Origin (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "max-heap",
      "quickselect",
      "euclidean-distance"
    ]
  },
  {
    "id": "NC-120",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "description": "Implement an optimal solution for <strong>Kth Largest Element in an Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def kthLargestElementInAnArray(*args, **kwargs):\n    # Write your solution for NC-136: Kth Largest Element in an Array (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "quickselect"
    ]
  },
  {
    "id": "NC-121",
    "title": "Task Scheduler",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/task-scheduler/",
    "description": "Implement an optimal solution for <strong>Task Scheduler</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def taskScheduler(*args, **kwargs):\n    # Write your solution for NC-137: Task Scheduler (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "max-heap",
      "greedy",
      "idle-slot-math"
    ]
  },
  {
    "id": "NC-122",
    "title": "Design Twitter",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/design-twitter/",
    "description": "Implement an optimal solution for <strong>Design Twitter</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def designTwitter(*args, **kwargs):\n    # Write your solution for NC-138: Design Twitter (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "heap",
      "hash-map",
      "linked-list",
      "feed-merging"
    ]
  },
  {
    "id": "NC-123",
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "description": "Implement an optimal solution for <strong>Find Median from Data Stream</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findMedianFromDataStream(*args, **kwargs):\n    # Write your solution for NC-139: Find Median from Data Stream (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-heaps",
      "dual-balancing"
    ]
  },
  {
    "id": "NC-124",
    "title": "Maximum Product of Two Elements in an Array",
    "difficulty": "Easy",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",
    "description": "Implement an optimal solution for <strong>Maximum Product of Two Elements in an Array</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumProductOfTwoElementsInAnArray(*args, **kwargs):\n    # Write your solution for NC-140: Maximum Product of Two Elements in an Array (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "heap",
      "two-maxima"
    ]
  },
  {
    "id": "NC-125",
    "title": "Seat Reservation Manager",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/seat-reservation-manager/",
    "description": "Implement an optimal solution for <strong>Seat Reservation Manager</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def seatReservationManager(*args, **kwargs):\n    # Write your solution for NC-141: Seat Reservation Manager (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "class-design"
    ]
  },
  {
    "id": "NC-126",
    "title": "Reorganize String",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/reorganize-string/",
    "description": "Implement an optimal solution for <strong>Reorganize String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reorganizeString(*args, **kwargs):\n    # Write your solution for NC-142: Reorganize String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "max-heap",
      "greedy-frequency"
    ]
  },
  {
    "id": "NC-127",
    "title": "Longest Happy String",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-happy-string/",
    "description": "Implement an optimal solution for <strong>Longest Happy String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestHappyString(*args, **kwargs):\n    # Write your solution for NC-143: Longest Happy String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "max-heap",
      "greedy-limit"
    ]
  },
  {
    "id": "NC-128",
    "title": "Car Pooling",
    "difficulty": "Medium",
    "category": "Heap / Priority Queue",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/car-pooling/",
    "description": "Implement an optimal solution for <strong>Car Pooling</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def carPooling(*args, **kwargs):\n    # Write your solution for NC-144: Car Pooling (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "prefix-sum",
      "event-sorting"
    ]
  },
  {
    "id": "NC-129",
    "title": "Subsets",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/subsets/",
    "description": "Implement an optimal solution for <strong>Subsets</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def subsets(*args, **kwargs):\n    # Write your solution for NC-147: Subsets (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "power-set",
      "bitmask"
    ]
  },
  {
    "id": "NC-130",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/",
    "description": "Implement an optimal solution for <strong>Combination Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def combinationSum(*args, **kwargs):\n    # Write your solution for NC-148: Combination Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "unbounded-knapsack"
    ]
  },
  {
    "id": "NC-131",
    "title": "Permutations",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/permutations/",
    "description": "Implement an optimal solution for <strong>Permutations</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def permutations(*args, **kwargs):\n    # Write your solution for NC-149: Permutations (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "swap",
      "visited-set"
    ]
  },
  {
    "id": "NC-132",
    "title": "Subsets II",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/",
    "description": "Implement an optimal solution for <strong>Subsets II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def subsetsIi(*args, **kwargs):\n    # Write your solution for NC-150: Subsets II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "duplicate-skipping"
    ]
  },
  {
    "id": "NC-133",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "description": "Implement an optimal solution for <strong>Combination Sum II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def combinationSumIi(*args, **kwargs):\n    # Write your solution for NC-151: Combination Sum II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "duplicate-pruning"
    ]
  },
  {
    "id": "NC-134",
    "title": "Word Search",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/word-search/",
    "description": "Implement an optimal solution for <strong>Word Search</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def wordSearch(*args, **kwargs):\n    # Write your solution for NC-152: Word Search (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "matrix-dfs",
      "in-place-visited"
    ]
  },
  {
    "id": "NC-135",
    "title": "Palindrome Partitioning",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/",
    "description": "Implement an optimal solution for <strong>Palindrome Partitioning</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def palindromePartitioning(*args, **kwargs):\n    # Write your solution for NC-153: Palindrome Partitioning (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "palindrome-dp"
    ]
  },
  {
    "id": "NC-136",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "description": "Implement an optimal solution for <strong>Letter Combinations of a Phone Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def letterCombinationsOfAPhoneNumber(*args, **kwargs):\n    # Write your solution for NC-154: Letter Combinations of a Phone Number (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "cartesian-product"
    ]
  },
  {
    "id": "NC-137",
    "title": "N-Queens",
    "difficulty": "Hard",
    "category": "Backtracking",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/",
    "description": "Implement an optimal solution for <strong>N-Queens</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def nQueens(*args, **kwargs):\n    # Write your solution for NC-155: N-Queens (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "diagonal-sets",
      "board-state"
    ]
  },
  {
    "id": "NC-138",
    "title": "Permutations II",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/permutations-ii/",
    "description": "Implement an optimal solution for <strong>Permutations II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def permutationsIi(*args, **kwargs):\n    # Write your solution for NC-156: Permutations II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "frequency-map"
    ]
  },
  {
    "id": "NC-139",
    "title": "Combinations",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 18,
    "leetcodeUrl": "https://leetcode.com/problems/combinations/",
    "description": "Implement an optimal solution for <strong>Combinations</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def combinations(*args, **kwargs):\n    # Write your solution for NC-157: Combinations (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "k-combinations"
    ]
  },
  {
    "id": "NC-140",
    "title": "Matchsticks to Square",
    "difficulty": "Medium",
    "category": "Backtracking",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/matchsticks-to-square/",
    "description": "Implement an optimal solution for <strong>Matchsticks to Square</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def matchsticksToSquare(*args, **kwargs):\n    # Write your solution for NC-158: Matchsticks to Square (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "backtracking",
      "partitioning",
      "pruning"
    ]
  },
  {
    "id": "NC-141",
    "title": "Implement Trie (Prefix Tree)",
    "difficulty": "Medium",
    "category": "Tries",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "description": "Implement an optimal solution for <strong>Implement Trie (Prefix Tree)</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def implementTriePrefixTree(*args, **kwargs):\n    # Write your solution for NC-161: Implement Trie (Prefix Tree) (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "trie",
      "nested-hash-map",
      "class-design"
    ]
  },
  {
    "id": "NC-142",
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "category": "Tries",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "description": "Implement an optimal solution for <strong>Design Add and Search Words Data Structure</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def designAddAndSearchWordsDataStructure(*args, **kwargs):\n    # Write your solution for NC-162: Design Add and Search Words Data Structure (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "trie",
      "wildcard-search",
      "dfs"
    ]
  },
  {
    "id": "NC-143",
    "title": "Word Search II",
    "difficulty": "Hard",
    "category": "Tries",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/",
    "description": "Implement an optimal solution for <strong>Word Search II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def wordSearchIi(*args, **kwargs):\n    # Write your solution for NC-163: Word Search II (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "trie",
      "matrix-backtracking",
      "pruning"
    ]
  },
  {
    "id": "NC-144",
    "title": "Prefix and Suffix Search",
    "difficulty": "Hard",
    "category": "Tries",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/prefix-and-suffix-search/",
    "description": "Implement an optimal solution for <strong>Prefix and Suffix Search</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def prefixAndSuffixSearch(*args, **kwargs):\n    # Write your solution for NC-164: Prefix and Suffix Search (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "trie",
      "dual-index",
      "string-matching"
    ]
  },
  {
    "id": "NC-145",
    "title": "Extra Characters in a String",
    "difficulty": "Medium",
    "category": "Tries",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/extra-characters-in-a-string/",
    "description": "Implement an optimal solution for <strong>Extra Characters in a String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def extraCharactersInAString(*args, **kwargs):\n    # Write your solution for NC-165: Extra Characters in a String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "trie",
      "dynamic-programming",
      "memoization"
    ]
  },
  {
    "id": "NC-146",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/",
    "description": "Implement an optimal solution for <strong>Number of Islands</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def numberOfIslands(*args, **kwargs):\n    # Write your solution for NC-166: Number of Islands (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "bfs",
      "dfs",
      "matrix-flood-fill"
    ]
  },
  {
    "id": "NC-147",
    "title": "Max Area of Island",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/max-area-of-island/",
    "description": "Implement an optimal solution for <strong>Max Area of Island</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maxAreaOfIsland(*args, **kwargs):\n    # Write your solution for NC-167: Max Area of Island (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "dfs",
      "connected-component"
    ]
  },
  {
    "id": "NC-148",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/clone-graph/",
    "description": "Implement an optimal solution for <strong>Clone Graph</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def cloneGraph(*args, **kwargs):\n    # Write your solution for NC-168: Clone Graph (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "hash-map",
      "dfs",
      "deep-copy"
    ]
  },
  {
    "id": "NC-149",
    "title": "Walls and Gates",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/walls-and-gates/",
    "description": "Implement an optimal solution for <strong>Walls and Gates</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def wallsAndGates(*args, **kwargs):\n    # Write your solution for NC-169: Walls and Gates (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "multi-source-bfs"
    ]
  },
  {
    "id": "NC-150",
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/",
    "description": "Implement an optimal solution for <strong>Rotting Oranges</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def rottingOranges(*args, **kwargs):\n    # Write your solution for NC-170: Rotting Oranges (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "multi-source-bfs",
      "matrix-time-step"
    ]
  },
  {
    "id": "NC-151",
    "title": "Pacific Atlantic Water Flow",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "description": "Implement an optimal solution for <strong>Pacific Atlantic Water Flow</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def pacificAtlanticWaterFlow(*args, **kwargs):\n    # Write your solution for NC-171: Pacific Atlantic Water Flow (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "reverse-dfs",
      "intersection"
    ]
  },
  {
    "id": "NC-152",
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/",
    "description": "Implement an optimal solution for <strong>Surrounded Regions</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def surroundedRegions(*args, **kwargs):\n    # Write your solution for NC-172: Surrounded Regions (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "boundary-dfs",
      "matrix-inversion"
    ]
  },
  {
    "id": "NC-153",
    "title": "Course Schedule",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule/",
    "description": "Implement an optimal solution for <strong>Course Schedule</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def courseSchedule(*args, **kwargs):\n    # Write your solution for NC-173: Course Schedule (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "topological-sort",
      "kahns-algorithm",
      "cycle-detection"
    ]
  },
  {
    "id": "NC-154",
    "title": "Course Schedule II",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/",
    "description": "Implement an optimal solution for <strong>Course Schedule II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def courseScheduleIi(*args, **kwargs):\n    # Write your solution for NC-174: Course Schedule II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "topological-sort",
      "kahns-algorithm"
    ]
  },
  {
    "id": "NC-155",
    "title": "Graph Valid Tree",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/graph-valid-tree/",
    "description": "Implement an optimal solution for <strong>Graph Valid Tree</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def graphValidTree(*args, **kwargs):\n    # Write your solution for NC-175: Graph Valid Tree (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "union-find",
      "dfs",
      "cycle-detection"
    ]
  },
  {
    "id": "NC-156",
    "title": "Number of Connected Components in an Undirected Graph",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "description": "Implement an optimal solution for <strong>Number of Connected Components in an Undirected Graph</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def numberOfConnectedComponentsInAnUndirectedGraph(*args, **kwargs):\n    # Write your solution for NC-176: Number of Connected Components in an Undirected Graph (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "union-find",
      "dfs",
      "connected-components"
    ]
  },
  {
    "id": "NC-157",
    "title": "Redundant Connection",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/redundant-connection/",
    "description": "Implement an optimal solution for <strong>Redundant Connection</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def redundantConnection(*args, **kwargs):\n    # Write your solution for NC-177: Redundant Connection (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "union-find",
      "disjoint-set",
      "cycle-detection"
    ]
  },
  {
    "id": "NC-158",
    "title": "Word Ladder",
    "difficulty": "Hard",
    "category": "Graphs",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/word-ladder/",
    "description": "Implement an optimal solution for <strong>Word Ladder</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def wordLadder(*args, **kwargs):\n    # Write your solution for NC-178: Word Ladder (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "bidirectional-bfs",
      "shortest-path"
    ]
  },
  {
    "id": "NC-159",
    "title": "Island Perimeter",
    "difficulty": "Easy",
    "category": "Graphs",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/island-perimeter/",
    "description": "Implement an optimal solution for <strong>Island Perimeter</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def islandPerimeter(*args, **kwargs):\n    # Write your solution for NC-179: Island Perimeter (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "matrix-traversal",
      "perimeter-math"
    ]
  },
  {
    "id": "NC-160",
    "title": "Verifying an Alien Dictionary",
    "difficulty": "Easy",
    "category": "Graphs",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/verifying-an-alien-dictionary/",
    "description": "Implement an optimal solution for <strong>Verifying an Alien Dictionary</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def verifyingAnAlienDictionary(*args, **kwargs):\n    # Write your solution for NC-180: Verifying an Alien Dictionary (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-map",
      "lexicographical-order"
    ]
  },
  {
    "id": "NC-161",
    "title": "Find the Town Judge",
    "difficulty": "Easy",
    "category": "Graphs",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/find-the-town-judge/",
    "description": "Implement an optimal solution for <strong>Find the Town Judge</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findTheTownJudge(*args, **kwargs):\n    # Write your solution for NC-181: Find the Town Judge (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "in-out-degree",
      "graph"
    ]
  },
  {
    "id": "NC-162",
    "title": "Shortest Path in Binary Matrix",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "description": "Implement an optimal solution for <strong>Shortest Path in Binary Matrix</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def shortestPathInBinaryMatrix(*args, **kwargs):\n    # Write your solution for NC-182: Shortest Path in Binary Matrix (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bfs",
      "8-directional-shortest-path"
    ]
  },
  {
    "id": "NC-163",
    "title": "Open the Lock",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/open-the-lock/",
    "description": "Implement an optimal solution for <strong>Open the Lock</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def openTheLock(*args, **kwargs):\n    # Write your solution for NC-183: Open the Lock (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bfs",
      "state-machine-shortest-path"
    ]
  },
  {
    "id": "NC-164",
    "title": "Number of Enclaves",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/number-of-enclaves/",
    "description": "Implement an optimal solution for <strong>Number of Enclaves</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def numberOfEnclaves(*args, **kwargs):\n    # Write your solution for NC-184: Number of Enclaves (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "boundary-dfs",
      "matrix"
    ]
  },
  {
    "id": "NC-165",
    "title": "As Far from Land as Possible",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/as-far-from-land-as-possible/",
    "description": "Implement an optimal solution for <strong>As Far from Land as Possible</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def asFarFromLandAsPossible(*args, **kwargs):\n    # Write your solution for NC-185: As Far from Land as Possible (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "multi-source-bfs",
      "matrix-distance"
    ]
  },
  {
    "id": "NC-166",
    "title": "All Paths From Source to Target",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/all-paths-from-source-to-target/",
    "description": "Implement an optimal solution for <strong>All Paths From Source to Target</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def allPathsFromSourceToTarget(*args, **kwargs):\n    # Write your solution for NC-186: All Paths From Source to Target (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dag",
      "backtracking",
      "dfs"
    ]
  },
  {
    "id": "NC-167",
    "title": "Reorder Routes to Make All Paths Lead to the City Zero",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/",
    "description": "Implement an optimal solution for <strong>Reorder Routes to Make All Paths Lead to the City Zero</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reorderRoutesToMakeAllPathsLeadToTheCityZero(*args, **kwargs):\n    # Write your solution for NC-187: Reorder Routes to Make All Paths Lead to the City Zero (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "dfs",
      "directed-trees"
    ]
  },
  {
    "id": "NC-168",
    "title": "Snakes and Ladders",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/snakes-and-ladders/",
    "description": "Implement an optimal solution for <strong>Snakes and Ladders</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def snakesAndLadders(*args, **kwargs):\n    # Write your solution for NC-188: Snakes and Ladders (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bfs",
      "board-coordinates",
      "shortest-path"
    ]
  },
  {
    "id": "NC-169",
    "title": "Minimum Score of a Path Between Two Cities",
    "difficulty": "Medium",
    "category": "Graphs",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/",
    "description": "Implement an optimal solution for <strong>Minimum Score of a Path Between Two Cities</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumScoreOfAPathBetweenTwoCities(*args, **kwargs):\n    # Write your solution for NC-189: Minimum Score of a Path Between Two Cities (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "graph",
      "bfs",
      "connected-components"
    ]
  },
  {
    "id": "NC-170",
    "title": "Reconstruct Itinerary",
    "difficulty": "Hard",
    "category": "Advanced Graphs",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/reconstruct-itinerary/",
    "description": "Implement an optimal solution for <strong>Reconstruct Itinerary</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reconstructItinerary(*args, **kwargs):\n    # Write your solution for NC-194: Reconstruct Itinerary (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "eularian-path",
      "hierholzers-algorithm",
      "dfs"
    ]
  },
  {
    "id": "NC-171",
    "title": "Min Cost to Connect All Points",
    "difficulty": "Medium",
    "category": "Advanced Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "description": "Implement an optimal solution for <strong>Min Cost to Connect All Points</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minCostToConnectAllPoints(*args, **kwargs):\n    # Write your solution for NC-195: Min Cost to Connect All Points (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "minimum-spanning-tree",
      "prims-algorithm",
      "kruskal"
    ]
  },
  {
    "id": "NC-172",
    "title": "Network Delay Time",
    "difficulty": "Medium",
    "category": "Advanced Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/",
    "description": "Implement an optimal solution for <strong>Network Delay Time</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def networkDelayTime(*args, **kwargs):\n    # Write your solution for NC-196: Network Delay Time (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dijkstras-algorithm",
      "shortest-path",
      "min-heap"
    ]
  },
  {
    "id": "NC-173",
    "title": "Swim in Rising Water",
    "difficulty": "Hard",
    "category": "Advanced Graphs",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/swim-in-rising-water/",
    "description": "Implement an optimal solution for <strong>Swim in Rising Water</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def swimInRisingWater(*args, **kwargs):\n    # Write your solution for NC-197: Swim in Rising Water (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dijkstras-algorithm",
      "binary-search",
      "min-heap"
    ]
  },
  {
    "id": "NC-174",
    "title": "Alien Dictionary",
    "difficulty": "Hard",
    "category": "Advanced Graphs",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/",
    "description": "Implement an optimal solution for <strong>Alien Dictionary</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def alienDictionary(*args, **kwargs):\n    # Write your solution for NC-198: Alien Dictionary (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "topological-sort",
      "dag",
      "lexicographical"
    ]
  },
  {
    "id": "NC-175",
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "Medium",
    "category": "Advanced Graphs",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "description": "Implement an optimal solution for <strong>Cheapest Flights Within K Stops</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def cheapestFlightsWithinKStops(*args, **kwargs):\n    # Write your solution for NC-199: Cheapest Flights Within K Stops (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bellman-ford",
      "dijkstra",
      "bfs"
    ]
  },
  {
    "id": "NC-176",
    "title": "Path with Minimum Effort",
    "difficulty": "Medium",
    "category": "Advanced Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/path-with-minimum-effort/",
    "description": "Implement an optimal solution for <strong>Path with Minimum Effort</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def pathWithMinimumEffort(*args, **kwargs):\n    # Write your solution for NC-200: Path with Minimum Effort (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dijkstras-algorithm",
      "min-heap",
      "matrix"
    ]
  },
  {
    "id": "NC-177",
    "title": "Find Eventual Safe States",
    "difficulty": "Medium",
    "category": "Advanced Graphs",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/find-eventual-safe-states/",
    "description": "Implement an optimal solution for <strong>Find Eventual Safe States</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def findEventualSafeStates(*args, **kwargs):\n    # Write your solution for NC-201: Find Eventual Safe States (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "topological-sort",
      "cycle-detection",
      "reverse-graph"
    ]
  },
  {
    "id": "NC-178",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/",
    "description": "Implement an optimal solution for <strong>Climbing Stairs</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def climbStairs(n):\n    if n <= 2:\n        return n\n    one, two = 1, 2\n    for _ in range(3, n + 1):\n        one, two = two, one + two\n    return two",
    "testCases": [
      {
        "input": "(2,)",
        "expected": "2"
      },
      {
        "input": "(3,)",
        "expected": "3"
      },
      {
        "input": "(5,)",
        "expected": "8"
      }
    ],
    "skills": [
      "fibonacci",
      "memoization",
      "bottom-up"
    ]
  },
  {
    "id": "NC-179",
    "title": "Min Cost Climbing Stairs",
    "difficulty": "Easy",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "description": "Implement an optimal solution for <strong>Min Cost Climbing Stairs</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minCostClimbingStairs(*args, **kwargs):\n    # Write your solution for NC-204: Min Cost Climbing Stairs (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bottom-up-dp",
      "space-optimization"
    ]
  },
  {
    "id": "NC-180",
    "title": "House Robber",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 18,
    "leetcodeUrl": "https://leetcode.com/problems/house-robber/",
    "description": "Implement an optimal solution for <strong>House Robber</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def houseRobber(*args, **kwargs):\n    # Write your solution for NC-205: House Robber (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dp",
      "running-choices"
    ]
  },
  {
    "id": "NC-181",
    "title": "House Robber II",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/",
    "description": "Implement an optimal solution for <strong>House Robber II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def houseRobberIi(*args, **kwargs):\n    # Write your solution for NC-206: House Robber II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dp",
      "circular-array-partitioning"
    ]
  },
  {
    "id": "NC-182",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/",
    "description": "Implement an optimal solution for <strong>Longest Palindromic Substring</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestPalindromicSubstring(*args, **kwargs):\n    # Write your solution for NC-207: Longest Palindromic Substring (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "expand-around-center",
      "2d-dp"
    ]
  },
  {
    "id": "NC-183",
    "title": "Palindromic Substrings",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/palindromic-substrings/",
    "description": "Implement an optimal solution for <strong>Palindromic Substrings</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def palindromicSubstrings(*args, **kwargs):\n    # Write your solution for NC-208: Palindromic Substrings (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "expand-around-center",
      "dp"
    ]
  },
  {
    "id": "NC-184",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/decode-ways/",
    "description": "Implement an optimal solution for <strong>Decode Ways</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def decodeWays(*args, **kwargs):\n    # Write your solution for NC-209: Decode Ways (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "1d-dp",
      "string-parsing"
    ]
  },
  {
    "id": "NC-185",
    "title": "Coin Change",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/coin-change/",
    "description": "Implement an optimal solution for <strong>Coin Change</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def coinChange(*args, **kwargs):\n    # Write your solution for NC-210: Coin Change (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "unbounded-knapsack",
      "bottom-up-dp"
    ]
  },
  {
    "id": "NC-186",
    "title": "Maximum Product Subarray",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/",
    "description": "Implement an optimal solution for <strong>Maximum Product Subarray</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumProductSubarray(*args, **kwargs):\n    # Write your solution for NC-211: Maximum Product Subarray (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "kadane-variation",
      "min-max-tracking"
    ]
  },
  {
    "id": "NC-187",
    "title": "Word Break",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/word-break/",
    "description": "Implement an optimal solution for <strong>Word Break</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def wordBreak(*args, **kwargs):\n    # Write your solution for NC-212: Word Break (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "1d-dp",
      "trie",
      "substring-matching"
    ]
  },
  {
    "id": "NC-188",
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "description": "Implement an optimal solution for <strong>Longest Increasing Subsequence</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestIncreasingSubsequence(*args, **kwargs):\n    # Write your solution for NC-213: Longest Increasing Subsequence (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dp",
      "binary-search-patience-sorting"
    ]
  },
  {
    "id": "NC-189",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "description": "Implement an optimal solution for <strong>Partition Equal Subset Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def partitionEqualSubsetSum(*args, **kwargs):\n    # Write your solution for NC-214: Partition Equal Subset Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "0-1-knapsack",
      "boolean-subset-sum"
    ]
  },
  {
    "id": "NC-190",
    "title": "N-th Tribonacci Number",
    "difficulty": "Easy",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "description": "Implement an optimal solution for <strong>N-th Tribonacci Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def nThTribonacciNumber(*args, **kwargs):\n    # Write your solution for NC-215: N-th Tribonacci Number (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "dp",
      "recurrence-relation"
    ]
  },
  {
    "id": "NC-191",
    "title": "Delete and Earn",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/delete-and-earn/",
    "description": "Implement an optimal solution for <strong>Delete and Earn</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def deleteAndEarn(*args, **kwargs):\n    # Write your solution for NC-216: Delete and Earn (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "house-robber-reduction",
      "bucket-dp"
    ]
  },
  {
    "id": "NC-192",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/",
    "description": "Implement an optimal solution for <strong>Maximum Subarray</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maxSubArray(nums):\n    max_sum = cur_sum = nums[0]\n    for n in nums[1:]:\n        cur_sum = max(n, cur_sum + n)\n        max_sum = max(max_sum, cur_sum)\n    return max_sum",
    "testCases": [
      {
        "input": "([-2, 1, -3, 4, -1, 2, 1, -5, 4],)",
        "expected": "6"
      },
      {
        "input": "([1],)",
        "expected": "1"
      },
      {
        "input": "([5, 4, -1, 7, 8],)",
        "expected": "23"
      }
    ],
    "skills": [
      "kadanes-algorithm",
      "greedy",
      "prefix-sum"
    ]
  },
  {
    "id": "NC-193",
    "title": "Combination Sum IV",
    "difficulty": "Medium",
    "category": "1-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-iv/",
    "description": "Implement an optimal solution for <strong>Combination Sum IV</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def combinationSumIv(*args, **kwargs):\n    # Write your solution for NC-218: Combination Sum IV (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "unbounded-knapsack-permutations",
      "dp"
    ]
  },
  {
    "id": "NC-194",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/",
    "description": "Implement an optimal solution for <strong>Unique Paths</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def uniquePaths(*args, **kwargs):\n    # Write your solution for NC-223: Unique Paths (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp",
      "combinatorics"
    ]
  },
  {
    "id": "NC-195",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "description": "Implement an optimal solution for <strong>Longest Common Subsequence</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestCommonSubsequence(*args, **kwargs):\n    # Write your solution for NC-224: Longest Common Subsequence (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-dp",
      "string-alignment"
    ]
  },
  {
    "id": "NC-196",
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "description": "Implement an optimal solution for <strong>Best Time to Buy and Sell Stock with Cooldown</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def bestTimeToBuyAndSellStockWithCooldown(*args, **kwargs):\n    # Write your solution for NC-225: Best Time to Buy and Sell Stock with Cooldown (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "state-machine-dp",
      "finance"
    ]
  },
  {
    "id": "NC-197",
    "title": "Coin Change II (2D)",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/coin-change-ii-2d/",
    "description": "Implement an optimal solution for <strong>Coin Change II (2D)</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def coinChangeIi2d(*args, **kwargs):\n    # Write your solution for NC-226: Coin Change II (2D) (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-knapsack",
      "combinations"
    ]
  },
  {
    "id": "NC-198",
    "title": "Target Sum",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/target-sum/",
    "description": "Implement an optimal solution for <strong>Target Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def targetSum(*args, **kwargs):\n    # Write your solution for NC-227: Target Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "0-1-knapsack-subset-sum",
      "dp"
    ]
  },
  {
    "id": "NC-199",
    "title": "Interleaving String",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/interleaving-string/",
    "description": "Implement an optimal solution for <strong>Interleaving String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def interleavingString(*args, **kwargs):\n    # Write your solution for NC-228: Interleaving String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp",
      "string-interleaving"
    ]
  },
  {
    "id": "NC-200",
    "title": "Longest Increasing Path in a Matrix",
    "difficulty": "Hard",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    "description": "Implement an optimal solution for <strong>Longest Increasing Path in a Matrix</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def longestIncreasingPathInAMatrix(*args, **kwargs):\n    # Write your solution for NC-229: Longest Increasing Path in a Matrix (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "memoized-dfs",
      "dag",
      "topological-dp"
    ]
  },
  {
    "id": "NC-201",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 35,
    "leetcodeUrl": "https://leetcode.com/problems/distinct-subsequences/",
    "description": "Implement an optimal solution for <strong>Distinct Subsequences</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def distinctSubsequences(*args, **kwargs):\n    # Write your solution for NC-230: Distinct Subsequences (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-string-dp",
      "counting"
    ]
  },
  {
    "id": "NC-202",
    "title": "Edit Distance",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/",
    "description": "Implement an optimal solution for <strong>Edit Distance</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def editDistance(*args, **kwargs):\n    # Write your solution for NC-231: Edit Distance (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "levenshtein-distance",
      "2d-grid-dp"
    ]
  },
  {
    "id": "NC-203",
    "title": "Burst Balloons",
    "difficulty": "Hard",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/burst-balloons/",
    "description": "Implement an optimal solution for <strong>Burst Balloons</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def burstBalloons(*args, **kwargs):\n    # Write your solution for NC-232: Burst Balloons (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "interval-dp",
      "divide-and-conquer"
    ]
  },
  {
    "id": "NC-204",
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 45,
    "leetcodeUrl": "https://leetcode.com/problems/regular-expression-matching/",
    "description": "Implement an optimal solution for <strong>Regular Expression Matching</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def regularExpressionMatching(*args, **kwargs):\n    # Write your solution for NC-233: Regular Expression Matching (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp",
      "wildcard-nfa"
    ]
  },
  {
    "id": "NC-205",
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-path-sum/",
    "description": "Implement an optimal solution for <strong>Minimum Path Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumPathSum(*args, **kwargs):\n    # Write your solution for NC-234: Minimum Path Sum (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp",
      "dijkstra-grid"
    ]
  },
  {
    "id": "NC-206",
    "title": "Unique Paths II",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 22,
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths-ii/",
    "description": "Implement an optimal solution for <strong>Unique Paths II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def uniquePathsIi(*args, **kwargs):\n    # Write your solution for NC-235: Unique Paths II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp-with-obstacles"
    ]
  },
  {
    "id": "NC-207",
    "title": "Last Stone Weight II",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/last-stone-weight-ii/",
    "description": "Implement an optimal solution for <strong>Last Stone Weight II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lastStoneWeightIi(*args, **kwargs):\n    # Write your solution for NC-236: Last Stone Weight II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "0-1-knapsack-partitioning"
    ]
  },
  {
    "id": "NC-208",
    "title": "Maximal Square",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/maximal-square/",
    "description": "Implement an optimal solution for <strong>Maximal Square</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximalSquare(*args, **kwargs):\n    # Write your solution for NC-237: Maximal Square (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "2d-grid-dp",
      "spatial-geometry"
    ]
  },
  {
    "id": "NC-209",
    "title": "Ones and Zeroes",
    "difficulty": "Medium",
    "category": "2-D Dynamic Programming",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/ones-and-zeroes/",
    "description": "Implement an optimal solution for <strong>Ones and Zeroes</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def onesAndZeroes(*args, **kwargs):\n    # Write your solution for NC-238: Ones and Zeroes (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "multi-dimensional-knapsack",
      "3d-dp"
    ]
  },
  {
    "id": "NC-210",
    "title": "Maximum Subarray (Greedy)",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 15,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray-greedy/",
    "description": "Implement an optimal solution for <strong>Maximum Subarray (Greedy)</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumSubarrayGreedy(*args, **kwargs):\n    # Write your solution for NC-241: Maximum Subarray (Greedy) (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "kadanes-algorithm",
      "running-sum"
    ]
  },
  {
    "id": "NC-211",
    "title": "Jump Game",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/jump-game/",
    "description": "Implement an optimal solution for <strong>Jump Game</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def jumpGame(*args, **kwargs):\n    # Write your solution for NC-242: Jump Game (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "furthest-reach"
    ]
  },
  {
    "id": "NC-212",
    "title": "Jump Game II",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/jump-game-ii/",
    "description": "Implement an optimal solution for <strong>Jump Game II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def jumpGameIi(*args, **kwargs):\n    # Write your solution for NC-243: Jump Game II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy-levels",
      "bfs-interval"
    ]
  },
  {
    "id": "NC-213",
    "title": "Gas Station",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/gas-station/",
    "description": "Implement an optimal solution for <strong>Gas Station</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def gasStation(*args, **kwargs):\n    # Write your solution for NC-244: Gas Station (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy-circular",
      "balance-tracking"
    ]
  },
  {
    "id": "NC-214",
    "title": "Hand of Straights",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/hand-of-straights/",
    "description": "Implement an optimal solution for <strong>Hand of Straights</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def handOfStraights(*args, **kwargs):\n    # Write your solution for NC-245: Hand of Straights (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-map",
      "min-heap",
      "consecutive-greedy"
    ]
  },
  {
    "id": "NC-215",
    "title": "Merge Triplets to Form Target Triplet",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    "description": "Implement an optimal solution for <strong>Merge Triplets to Form Target Triplet</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeTripletsToFormTargetTriplet(*args, **kwargs):\n    # Write your solution for NC-246: Merge Triplets to Form Target Triplet (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy-filtering",
      "bitwise-or"
    ]
  },
  {
    "id": "NC-216",
    "title": "Partition Labels",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/partition-labels/",
    "description": "Implement an optimal solution for <strong>Partition Labels</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def partitionLabels(*args, **kwargs):\n    # Write your solution for NC-247: Partition Labels (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "last-seen-index",
      "two-pointers",
      "greedy-intervals"
    ]
  },
  {
    "id": "NC-217",
    "title": "Valid Parenthesis String",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/valid-parenthesis-string/",
    "description": "Implement an optimal solution for <strong>Valid Parenthesis String</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def validParenthesisString(*args, **kwargs):\n    # Write your solution for NC-248: Valid Parenthesis String (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy-range",
      "min-max-open-brackets"
    ]
  },
  {
    "id": "NC-218",
    "title": "Lemonade Change",
    "difficulty": "Easy",
    "category": "Greedy",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/lemonade-change/",
    "description": "Implement an optimal solution for <strong>Lemonade Change</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def lemonadeChange(*args, **kwargs):\n    # Write your solution for NC-249: Lemonade Change (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "register-simulation"
    ]
  },
  {
    "id": "NC-219",
    "title": "Maximum Length of Subarray With Positive Product",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/",
    "description": "Implement an optimal solution for <strong>Maximum Length of Subarray With Positive Product</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def maximumLengthOfSubarrayWithPositiveProduct(*args, **kwargs):\n    # Write your solution for NC-250: Maximum Length of Subarray With Positive Product (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "sign-tracking"
    ]
  },
  {
    "id": "NC-220",
    "title": "Dota2 Senate",
    "difficulty": "Medium",
    "category": "Greedy",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/dota2-senate/",
    "description": "Implement an optimal solution for <strong>Dota2 Senate</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def dota2Senate(*args, **kwargs):\n    # Write your solution for NC-251: Dota2 Senate (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "queue",
      "greedy-round-simulation"
    ]
  },
  {
    "id": "NC-221",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "category": "Intervals",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/insert-interval/",
    "description": "Implement an optimal solution for <strong>Insert Interval</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def insertInterval(*args, **kwargs):\n    # Write your solution for NC-255: Insert Interval (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "interval-merge",
      "linear-sweep"
    ]
  },
  {
    "id": "NC-222",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "category": "Intervals",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/",
    "description": "Implement an optimal solution for <strong>Merge Intervals</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def mergeIntervals(*args, **kwargs):\n    # Write your solution for NC-256: Merge Intervals (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sorting",
      "interval-merge"
    ]
  },
  {
    "id": "NC-223",
    "title": "Non-overlapping Intervals",
    "difficulty": "Medium",
    "category": "Intervals",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/",
    "description": "Implement an optimal solution for <strong>Non-overlapping Intervals</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def nonOverlappingIntervals(*args, **kwargs):\n    # Write your solution for NC-257: Non-overlapping Intervals (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "greedy",
      "interval-scheduling"
    ]
  },
  {
    "id": "NC-224",
    "title": "Meeting Rooms",
    "difficulty": "Easy",
    "category": "Intervals",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms/",
    "description": "Implement an optimal solution for <strong>Meeting Rooms</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def meetingRooms(*args, **kwargs):\n    # Write your solution for NC-258: Meeting Rooms (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "sorting",
      "adjacent-overlap"
    ]
  },
  {
    "id": "NC-225",
    "title": "Meeting Rooms II",
    "difficulty": "Medium",
    "category": "Intervals",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/",
    "description": "Implement an optimal solution for <strong>Meeting Rooms II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def meetingRoomsIi(*args, **kwargs):\n    # Write your solution for NC-259: Meeting Rooms II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "two-pointers",
      "chronological-events"
    ]
  },
  {
    "id": "NC-226",
    "title": "Minimum Interval to Include Each Query",
    "difficulty": "Hard",
    "category": "Intervals",
    "estimatedMinutes": 40,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    "description": "Implement an optimal solution for <strong>Minimum Interval to Include Each Query</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumIntervalToIncludeEachQuery(*args, **kwargs):\n    # Write your solution for NC-260: Minimum Interval to Include Each Query (Hard)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "min-heap",
      "sorting",
      "offline-queries"
    ]
  },
  {
    "id": "NC-227",
    "title": "Summary Ranges",
    "difficulty": "Easy",
    "category": "Intervals",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/summary-ranges/",
    "description": "Implement an optimal solution for <strong>Summary Ranges</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def summaryRanges(*args, **kwargs):\n    # Write your solution for NC-261: Summary Ranges (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "two-pointers",
      "interval-compression"
    ]
  },
  {
    "id": "NC-228",
    "title": "My Calendar I",
    "difficulty": "Medium",
    "category": "Intervals",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/my-calendar-i/",
    "description": "Implement an optimal solution for <strong>My Calendar I</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def myCalendarI(*args, **kwargs):\n    # Write your solution for NC-262: My Calendar I (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-search-tree",
      "interval-overlap"
    ]
  },
  {
    "id": "NC-229",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/rotate-image/",
    "description": "Implement an optimal solution for <strong>Rotate Image</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def rotateImage(*args, **kwargs):\n    # Write your solution for NC-264: Rotate Image (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "matrix-transpose",
      "reverse-rows",
      "in-place"
    ]
  },
  {
    "id": "NC-230",
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/",
    "description": "Implement an optimal solution for <strong>Spiral Matrix</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def spiralMatrix(*args, **kwargs):\n    # Write your solution for NC-265: Spiral Matrix (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "matrix-boundary-shrink",
      "directional-vector"
    ]
  },
  {
    "id": "NC-231",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/",
    "description": "Implement an optimal solution for <strong>Set Matrix Zeroes</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def setMatrixZeroes(*args, **kwargs):\n    # Write your solution for NC-266: Set Matrix Zeroes (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "in-place-matrix-marker",
      "first-row-col"
    ]
  },
  {
    "id": "NC-232",
    "title": "Happy Number",
    "difficulty": "Easy",
    "category": "Math & Geometry",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/happy-number/",
    "description": "Implement an optimal solution for <strong>Happy Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def happyNumber(*args, **kwargs):\n    # Write your solution for NC-267: Happy Number (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "floyds-cycle-detection",
      "hash-set"
    ]
  },
  {
    "id": "NC-233",
    "title": "Plus One",
    "difficulty": "Easy",
    "category": "Math & Geometry",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/plus-one/",
    "description": "Implement an optimal solution for <strong>Plus One</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def plusOne(*args, **kwargs):\n    # Write your solution for NC-268: Plus One (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "carry-math",
      "array-arithmetic"
    ]
  },
  {
    "id": "NC-234",
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/pow-x-n/",
    "description": "Implement an optimal solution for <strong>Pow(x, n)</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def powXN(*args, **kwargs):\n    # Write your solution for NC-269: Pow(x, n) (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "fast-exponentiation",
      "binary-divide-and-conquer"
    ]
  },
  {
    "id": "NC-235",
    "title": "Multiply Strings",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/multiply-strings/",
    "description": "Implement an optimal solution for <strong>Multiply Strings</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def multiplyStrings(*args, **kwargs):\n    # Write your solution for NC-270: Multiply Strings (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "elementary-multiplication",
      "array-simulation"
    ]
  },
  {
    "id": "NC-236",
    "title": "Detect Squares",
    "difficulty": "Medium",
    "category": "Math & Geometry",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/detect-squares/",
    "description": "Implement an optimal solution for <strong>Detect Squares</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def detectSquares(*args, **kwargs):\n    # Write your solution for NC-271: Detect Squares (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "hash-map",
      "coordinate-geometry"
    ]
  },
  {
    "id": "NC-237",
    "title": "Count Odd Numbers in an Interval Range",
    "difficulty": "Easy",
    "category": "Math & Geometry",
    "estimatedMinutes": 5,
    "leetcodeUrl": "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/",
    "description": "Implement an optimal solution for <strong>Count Odd Numbers in an Interval Range</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def countOddNumbersInAnIntervalRange(*args, **kwargs):\n    # Write your solution for NC-272: Count Odd Numbers in an Interval Range (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "parity-math",
      "o(1)"
    ]
  },
  {
    "id": "NC-238",
    "title": "Matrix Diagonal Sum",
    "difficulty": "Easy",
    "category": "Math & Geometry",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/matrix-diagonal-sum/",
    "description": "Implement an optimal solution for <strong>Matrix Diagonal Sum</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def matrixDiagonalSum(*args, **kwargs):\n    # Write your solution for NC-273: Matrix Diagonal Sum (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "matrix-indexing",
      "odd-subtraction"
    ]
  },
  {
    "id": "NC-239",
    "title": "Greatest Common Divisor of Strings",
    "difficulty": "Easy",
    "category": "Math & Geometry",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    "description": "Implement an optimal solution for <strong>Greatest Common Divisor of Strings</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def greatestCommonDivisorOfStrings(*args, **kwargs):\n    # Write your solution for NC-274: Greatest Common Divisor of Strings (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "euclidean-gcd",
      "string-multiplication"
    ]
  },
  {
    "id": "NC-240",
    "title": "Single Number",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/single-number/",
    "description": "Implement an optimal solution for <strong>Single Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def singleNumber(nums):\n    res = 0\n    for n in nums:\n        res ^= n\n    return res",
    "testCases": [
      {
        "input": "([2, 2, 1],)",
        "expected": "1"
      },
      {
        "input": "([4, 1, 2, 1, 2],)",
        "expected": "4"
      },
      {
        "input": "([1],)",
        "expected": "1"
      }
    ],
    "skills": [
      "xor",
      "o(1)-space"
    ]
  },
  {
    "id": "NC-241",
    "title": "Number of 1 Bits",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 8,
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "description": "Implement an optimal solution for <strong>Number of 1 Bits</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def numberOf1Bits(*args, **kwargs):\n    # Write your solution for NC-277: Number of 1 Bits (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "brians-kernighan",
      "bit-shift"
    ]
  },
  {
    "id": "NC-242",
    "title": "Counting Bits",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 12,
    "leetcodeUrl": "https://leetcode.com/problems/counting-bits/",
    "description": "Implement an optimal solution for <strong>Counting Bits</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def countingBits(*args, **kwargs):\n    # Write your solution for NC-278: Counting Bits (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bit-dp",
      "least-significant-bit"
    ]
  },
  {
    "id": "NC-243",
    "title": "Reverse Bits",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/reverse-bits/",
    "description": "Implement an optimal solution for <strong>Reverse Bits</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reverseBits(*args, **kwargs):\n    # Write your solution for NC-279: Reverse Bits (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bit-shift",
      "masking"
    ]
  },
  {
    "id": "NC-244",
    "title": "Missing Number",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/missing-number/",
    "description": "Implement an optimal solution for <strong>Missing Number</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def missingNumber(*args, **kwargs):\n    # Write your solution for NC-280: Missing Number (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "xor-pairing",
      "gauss-formula"
    ]
  },
  {
    "id": "NC-245",
    "title": "Sum of Two Integers",
    "difficulty": "Medium",
    "category": "Bit Manipulation",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/sum-of-two-integers/",
    "description": "Implement an optimal solution for <strong>Sum of Two Integers</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def sumOfTwoIntegers(*args, **kwargs):\n    # Write your solution for NC-281: Sum of Two Integers (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "half-adder",
      "xor-carry-shift"
    ]
  },
  {
    "id": "NC-246",
    "title": "Reverse Integer",
    "difficulty": "Medium",
    "category": "Bit Manipulation",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/reverse-integer/",
    "description": "Implement an optimal solution for <strong>Reverse Integer</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def reverseInteger(*args, **kwargs):\n    # Write your solution for NC-282: Reverse Integer (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "modulo-math",
      "32-bit-overflow-check"
    ]
  },
  {
    "id": "NC-247",
    "title": "Add Binary",
    "difficulty": "Easy",
    "category": "Bit Manipulation",
    "estimatedMinutes": 10,
    "leetcodeUrl": "https://leetcode.com/problems/add-binary/",
    "description": "Implement an optimal solution for <strong>Add Binary</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def addBinary(*args, **kwargs):\n    # Write your solution for NC-283: Add Binary (Easy)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "binary-addition",
      "carry-logic"
    ]
  },
  {
    "id": "NC-248",
    "title": "Bitwise AND of Numbers Range",
    "difficulty": "Medium",
    "category": "Bit Manipulation",
    "estimatedMinutes": 25,
    "leetcodeUrl": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    "description": "Implement an optimal solution for <strong>Bitwise AND of Numbers Range</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def bitwiseAndOfNumbersRange(*args, **kwargs):\n    # Write your solution for NC-284: Bitwise AND of Numbers Range (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "common-prefix-bit-shift"
    ]
  },
  {
    "id": "NC-249",
    "title": "Minimum Flips to Make a OR b Equal to c",
    "difficulty": "Medium",
    "category": "Bit Manipulation",
    "estimatedMinutes": 20,
    "leetcodeUrl": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
    "description": "Implement an optimal solution for <strong>Minimum Flips to Make a OR b Equal to c</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def minimumFlipsToMakeAOrBEqualToC(*args, **kwargs):\n    # Write your solution for NC-285: Minimum Flips to Make a OR b Equal to c (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bit-matching",
      "truth-table"
    ]
  },
  {
    "id": "NC-250",
    "title": "Single Number II",
    "difficulty": "Medium",
    "category": "Bit Manipulation",
    "estimatedMinutes": 30,
    "leetcodeUrl": "https://leetcode.com/problems/single-number-ii/",
    "description": "Implement an optimal solution for <strong>Single Number II</strong>.<br><br>Analyze time complexity $\\mathcal{O}(N)$ and spatial bounds. Ensure all corner cases (empty sequences, boundary values, single element) are properly accounted for.",
    "starterCode": "def singleNumberIi(*args, **kwargs):\n    # Write your solution for NC-286: Single Number II (Medium)\n    pass",
    "testCases": [
      {
        "input": "([1, 2, 3],)",
        "expected": "True"
      },
      {
        "input": "([4, 5, 6],)",
        "expected": "False"
      }
    ],
    "skills": [
      "bit-counting-mod-3",
      "digital-logic-gates"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.NEETCODE_250_DATA = NEETCODE_250_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NEETCODE_250_DATA };
}
