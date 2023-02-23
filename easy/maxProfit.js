"use strict";

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 *
 * O(n)
 */
const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};

// O(n2)
const maxProfitNaive = function (prices) {
  // make sure this is not -Infinity because min profit possible is 0
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  return maxProfit;
};