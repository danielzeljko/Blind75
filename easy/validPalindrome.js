/**
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * @param {string} s
 * @return {boolean}
 */

// Space O(n) time O(n)
const isPalindrome = function(s) {
  if(s.length === 1) return true;

  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while(left < right){
      if(s[left] !== s[right]) return false;
      left++;
      right--;
  }

  return true;
};