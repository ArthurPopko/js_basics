/**
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//! Solution 1:
// time: O(n^2)
// memory: 0(1)

var twoSumNotEfficient = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				console.log(i, j)
				return [i, j]
			}
		}
	}
}

// console.log(twoSumNotEfficient([3, 3], 6))

//! Solution 2
// time: O(n)
// memory: O(n)

var twoSumEfficient = function (nums, target) {
	const sumMap = {}
	for (let i = 0; i < nums.length; i++) {
		let secondAddend = target - nums[i]
		if (sumMap[secondAddend] !== undefined) {
			return [sumMap[secondAddend], i]
		}
		sumMap[nums[i]] = i
	}
}
// console.log(twoSumEfficient([3, 2, 4], 6))
