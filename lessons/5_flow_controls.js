//! Conditional statements: if...else, switch...case


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
