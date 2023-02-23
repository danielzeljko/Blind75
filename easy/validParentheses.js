/**
 * https://leetcode.com/problems/valid-parentheses/
 */

const isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const validBrackets = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  const openingBrackets = ["(", "[", "{"];

  const stack = [];

  for (const char of s) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (validBrackets[char] !== stack.pop()) return false;
  }
  return stack.length === 0;
};
