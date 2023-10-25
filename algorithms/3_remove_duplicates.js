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
//! O(n^2)
var removeDuplicates_On2 = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			i--
		}
	}
	console.log(nums)
	return nums.length
}

//! O(n)
/*
[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
            l^               r^
l=0
r=1
if arr[l] !== arr[r] => arr[l+1] = arr[r], r++, l++
else l++
 */
var removeDuplicates = function (nums) {
	let left = 0
	for (let right = 1; right < nums.length; right++) {
		if (nums[right] !== nums[left]) {
			nums[++left] = nums[right]
		}
	}
	return ++left
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
