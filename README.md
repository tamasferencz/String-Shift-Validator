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
