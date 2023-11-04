/**
 Write a function that takes a string of parentheses, 
 and determines if the order of the parentheses is valid. 
 The function should return true if the string is valid, and false if it's invalid.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
 */

let str = '(())((()())()(()'
//		   ^^
//todo: unresolved!!!

function validParentheses(parenStr) {
	let parentR = false,
		l = 0,
		r = parenStr.length - 1

	if (!parenStr.length % 0) return false
	if (parenStr[0] === ')' || parenStr[parenStr.length - 1] === '(') return false

	for (let i = 0; i < parenStr.length; i++) {
		if (parenStr[i] === '(') {
			for (let j = i + 1; j < parenStr.length; j++) {
				if (parenStr[j] === ')') {
					parentR = true
					break
				}
				parentR = false
			}
		}
	}
	return parentR
}

console.log('validParentheses(parenStr):', validParentheses(str))
