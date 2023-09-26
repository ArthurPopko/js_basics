//! Conditional statements: if...else, switch...case

function calc(number1, number2, sign) {
	if (typeof number1 === 'number' && typeof number2 === 'number') {
		switch (sign) {
			case '+':
				return number1 + number2
			case '-':
				return number1 - number2
			case '*':
				return number1 * number2
			case '/':
				return number1 / number2
			default:
				return 'Error! Wrong sign!!! I know only "+,-,/,*"'
		}
	} else {
		return 'Error! Please input a numbers!!!!'
	}
}

// function welcomeAgeGender(person) {} - if, switch

//! Loops for, while, for...in, for...of + infinite loops!!!

// function welcomeByName() {} - for...i, for...in - obj, for...of - arr

names = ['Art', 'Rom', 'Helen', 'Herman']
person = {
	name: 'Art',
	age: 40,
	gender: 'male',
}
function hey(name) {
	for (key in person) {
		console.log(key)
		console.log(`Welcome ${person[key]}`)
	}
}
hey(names)
