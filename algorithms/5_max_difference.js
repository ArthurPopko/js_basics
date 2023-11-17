/**
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/
Given a 0-indexed integer array nums of size n, 
find the maximum difference between nums[i] and nums[j], 
such that 0 <= i < j < n and nums[i] < nums[j].
Return the maximum difference. If no such i and j exists, return -1.

Example 1:

Input: nums = [7,1,5,4]
Output: 4
Explanation:
The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
 */

let nums = [1, 5, 2, 10] // 4
//			   ^  ^
// currentDifference, maxDifference

var maximumDifference = function (nums) {
	let maxDifference = -1

	for (let i = 0; i < nums.length - 1; i++) {
		console.log('i:', i)
		let currentDifference = -1
		for (let j = i + 1; j < nums.length; j++) {
			console.log('j:', j)
			if (nums[i] < nums[j] && currentDifference < nums[j] - nums[i]) {
				currentDifference = nums[j] - nums[i]
			}
		}
		if (maxDifference < currentDifference) {
			maxDifference = currentDifference
		}
	}

	return maxDifference
}
console.log('maximumDifference:', maximumDifference(nums))
