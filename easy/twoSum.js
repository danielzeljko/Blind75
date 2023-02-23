"use strict";

/**
 * https://leetcode.com/problems/two-sum/submissions/
 */

// O(n)
const twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (seen.hasOwnProperty(diff)) return [i, seen[diff]];
    seen[num] = i;
  }
};

// O(n^2)
const twoSumNaive = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};