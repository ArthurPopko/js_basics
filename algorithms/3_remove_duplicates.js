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

let numsBruteForce = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let numsOptimized = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//			            ^              ^
//			   1  2  3  4
//

//! O(n^2), O(n)
var removeDuplicatesBruteForce = function (nums) {
	let unique = []
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		count++
		for (let j = i + 1; j < nums.length; j++) {
			count++
			if (nums[i] === nums[j]) {
				i++
			}
		}
		unique.push(nums[i])
	}
	console.log('count:', count)
	return unique.length
}

//! O(n), O(1)
var removeDuplicates = function (nums) {
	let left = 0,
		right = 1,
		unique = 0

	for (let i = 0; i < nums.length - 1; i++) {
		console.log('i:', i)
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
		console.log('right:', right)
		if (nums[left] !== nums[right]) {
			nums[left + 1] = nums[right]
			left++
		}
	}
	return left + 1
}
// console.log(
// 	'removeDuplicatesBruteForce:',
// 	removeDuplicatesBruteForce(numsBruteForce)
// )
console.log(
	'removeDuplicatesOptimized:',
	removeDuplicatesOptimized(numsOptimized)
)
// console.log('removeDuplicates:', removeDuplicates(nums))
