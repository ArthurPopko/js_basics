/*
You are given an array prices where prices[i] 
is the price of a given stock on the i-th day.

You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy 
before you sell.
*/
//! O(n):
let prices_1 = [7, 1, 5, 3, 6, 4]
//				   ^           ^
//					  4  2  5  3

var maxProfit = function (prices) {
	let left = 0,
		maxProfit = 0

	for (let right = 1; right < prices.length; right++) {
		if (prices[left] > prices[right]) {
			left = right
		}
		if (prices[right] - prices[left] > maxProfit) {
			maxProfit = prices[right] - prices[left]
		}
	}
	return maxProfit
}

console.log(maxProfit(prices_1))
