/**
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) 
and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
https://leetcode.com/problems/container-with-most-water/description/

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
			In this case, the max area of water (blue section) the container 
			can contain is 49.
*/

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
//			     ^                    ^
// 2 pointers, while pointers don't not meet each other, maxVolume, currentVolume

var maxArea = function (height) {
	let left = 0,
		right = height.length - 1,
		maxVolume = 0

	while (left < right) {
		let currentVolume = 0
		if (height[left] < height[right]) {
			currentVolume = height[left] * (right - left)
			left++
		} else {
			currentVolume = height[right] * (right - left)
			right--
		}
		if (maxVolume < currentVolume) {
			maxVolume = currentVolume
		}
	}
	return maxVolume
}

var maxAreaMath = function (height) {
	let left = 0,
		right = height.length - 1,
		maxVolume = 0

	while (left < right) {
		let currentVolume = Math.min(height[left], height[right]) * (right - left)
		maxVolume = Math.max(maxVolume, currentVolume)
		height[left] < height[right] ? left++ : right--
	}
	return maxVolume
}
console.log('maxAreaMath:', maxAreaMath(height))
console.log('maxArea:', maxArea(height))
