# String Shift Validator

## Overview
This repository contains an algorithmic implementation to check if a specific string (orig) can be transformed into a target string (final). The transformation is valid if it can be achieved through a series of character shifts, where the leftmost character is moved to the rightmost position.

## Technical Constraints
* Both orig and final strings consist strictly of lowercase English letters.
* String lengths are bounded between 1 and 100 characters

## Examples
The algorithm correctly handles cases such as:
  - Input: orig = "details", final = "tailsde" | Output: true
  - Input: orig = "limits", final = "litims" | Output: false

## Approach and Solutions

To demonstrate different problem-solving strategies, I have provided two distinct implementations for this string validation task:

### 1. Algorithmic Simulation (`stringShiftValidator`)
This approach takes a literal interpretation of the problem statement. It converts the string into an array and iteratively shifts the leftmost character to the rightmost position, checking for a match at each step.
* **Focus:** Readability and logical step-by-step simulation.
* **Trade-off:** Due to array mutation and string joining in a loop, it has a higher time complexity, making it less optimal for very large strings (though perfectly fine for the maximum constraint of 100 characters).

### 2. Concatenation Method (`stringShiftValidator2`)
This is an optimized, language-feature-heavy approach. It leverages the mathematical property of string rotation: if a string `orig` can be shifted to become `final`, then `final` will always be a substring of `orig + orig`.
* **Focus:** Performance and conciseness.
* **Advantage:** By checking the length equality and utilizing the built-in `.includes()` method on the concatenated string, this solution significantly reduces the time complexity and avoids iterative array manipulation.