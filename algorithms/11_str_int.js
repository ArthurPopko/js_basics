/*
return sum of numbers divided on number of letters
*/

const str = 'he@#$%l9lo w3or4ld!'

function strInt(str) {
	let int = 0,
		letters = []
	for (let i = 0; i < str.length; i++) {
		if (str[i].match('[A-Za-z]')) letters.push(str[i])
		if (Number(str[i])) int += Number(str[i])
	}
	return int / letters.length
}

console.log(strInt(str))
