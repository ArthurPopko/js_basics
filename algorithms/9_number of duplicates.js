/**
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */

let text = 'abcdefgh'
//			^  ^
//
//

function duplicateCount(text) {
	let set = new Set(),
		str = text.toLowerCase()

	for (let i = 0; i < str.length - 1; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] == str[j]) {
				set.add(str[j])
				break
			}
		}
	}
	return set.size
}
console.log('duplicateCount(text):', duplicateCount(text))
