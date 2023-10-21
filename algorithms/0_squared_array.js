//! Given an integer array sorted in non-decreasing order,
//! return an array of the squares of each number sorted in non-decreasing order.
let arr = [-1, 0, 9]

function sqArr(arr) {
	let newArr = [],
		left = 0,
		right = arr.length - 1,
		count = arr.length - 1

	while (left <= right) {
		if (Math.abs(arr[left]) < Math.abs(arr[right])) {
			newArr[count] = arr[right] ** 2
			right--
			count--
		} else {
			newArr[count] = arr[left] ** 2
			left++
			count--
		}
	}
	return newArr
}
console.log(sqArr(arr))
