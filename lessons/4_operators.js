//! arithmetic +,-,*,/,%,**,++,--

//? assignment =, +=, *= ...

// comparison >, <, >=, >=, ==, ===, !==

//! trinary a ? b : c

//? logical &&, ||, !, "credit approve/reject"

let creditHistory = 'good',
	isEmployee = false,
	age = 22

console.log(
	age > 21 && (creditHistory === 'good' || isEmployee === true)
		? 'approve'
		: 'reject'
)

// bitwise |, &

/*
Binary:
	* 1   = 00000001
	* 2   = 00000010
Result:
	* OR  = 00000011
	* AND = 00000000
*/

// console.log(1 | 2)
// console.log(1 & 2)
