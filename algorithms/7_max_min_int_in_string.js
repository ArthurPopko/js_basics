/**
 In this little assignment you are given a string of space separated numbers, 
 and have to return the highest and lowest number.

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */
let numbers = '8 3 -5 -1 42 0 0 -9 4 7 4 -4' // 42 -9

function highAndLow(numbers) {
	let numsArr = numbers.split(' '),
		min = numsArr[0],
		max = numsArr[0]

	for (let i = 0; i < numsArr.length; i++) {
		if (Number(min) > Number(numsArr[i])) min = numsArr[i]
		if (Number(max) < Number(numsArr[i])) max = numsArr[i]
	}
	return `${max} ${min}`
}
console.log('highAndLow:', highAndLow(numbers))
