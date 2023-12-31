/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be 
reached again by continuously following the next pointer. Internally, 
pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const list = {
	head: {
		value: 3,
		next: {
			value: 2,
			next: {
				value: 0,
				next: {
					value: -4,
					next: null,
				},
			},
		},
	},
}

var hasCycle = function (head) {
	if (head === null) return false
	let slow = head,
		fast = head.next
	while (fast !== null && fast.next !== null && slow !== null) {
		if (fast === slow) {
			return true
		}
		slow = slow.next
		fast = fast.next.next
	}
	return false
}

console.log(hasCycle(list.head))
console.log(list.head.next.next.next)
