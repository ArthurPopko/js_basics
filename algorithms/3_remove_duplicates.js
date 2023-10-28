/*Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
you need to do the following things:

Change the array nums such that the first k elements of nums 
contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

//! O(n)
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//			            ^              ^
//			   1  2  3  4
//
var removeDuplicates = function (nums) {
	let left = 0,
		right = 1,
		unique = 0

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[left] === nums[right]) {
			right++
		} else {
			nums[left + 1] = nums[right]
			right++
			left++
			unique = left + 1
		}
	}
	return unique
}

var removeDuplicatesOptimized = function (nums) {
	let left = 0

	for (let right = 1; right < nums.length; right++) {
		if (nums[left] !== nums[right]) {
			nums[left + 1] = nums[right]
			left++
		}
	}
	return left + 1
}

// console.log(removeDuplicates(nums))
console.log(removeDuplicatesOptimized(nums))
