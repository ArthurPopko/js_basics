//? object methods

/************/
let person = {
	name: 'Dude',
}
//! Change the name key value
//! Add new properties/keys to the object: age, address and one boolean (e.g. isHuman and set it true)
//! Print in console: all keys, all values and specific value (e.g. name value only)
/************/

//?array methods
/************/
let yearMonths = [
	'January',
	'March',
	'April',
	'May',
	'July',
	'August',
	'October',
	'November',
]
//! How much elements are in the array? (length)
//! Add 'December' to the first position (unshift)
//! Remove 'December' from the 1st position (shift)
//! Add 'December' to the last position (push)
//! Add 'February' and 'June' to the proper positions (splice)
//! Revers the array (reverse)
//! Print each month in console (forEach)
//! Add the year to each month in array and print the result in console (forEach, + )
/************/

//? functions
/************/
let planets = [
	{ name: 'Mercury', radius: 2440, distance: 0.395 },
	{ name: 'Venus', radius: 6052, distance: 0.723 },
	{ name: 'Earth', radius: 6378, distance: 1 },
	{ name: 'Mars', radius: 3396, distance: 1.53 },
	{ name: 'Jupiter', radius: 71492, distance: 5.21 },
	{ name: 'Saturn', radius: 60268, distance: 9.551 },
	{ name: 'Uranus', radius: 25559, distance: 19.213 },
	{ name: 'Neptune', radius: 24764, distance: 30.07 },
]
/*
Create a function addSolarSystem() it should accept an object 
and add a boolean "solar_system" key to an each planet in that array 
and set the value "true" (forEach)
*/
/* 
Create a function printPlanets() it should accept an object 
and print planet data in console as a table (console.table())
*/
/************/

/************/
let personWithNoAge = {
	name: 'Artur',
	birth_year: 1982,
}
/*! Create a function yourAgeIs() it should accept an object "person" 
and print the persons age
expected output: 'Hey, Artur! You are 40 years old'
!*/
/************/
