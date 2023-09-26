//! object, keys, values, set, get or delete value

//? array, length, keys, values, methods: forEach, push

// function

let person = {
	birth_year: 1982,
}

function yourAgeIs(person) {
	let age = new Date().getFullYear() - person.birth_year
	console.log(age)
}
yourAgeIs(person)
