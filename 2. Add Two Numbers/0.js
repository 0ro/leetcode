/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

   1 1 1 1 1 1 1
 9,9,9,9,9,9,9
 9,9,9,9 0 0 0

 8 9 9 9 0 0 0 1

   1 1
 9 9 
 9 
 8 0 1

 */
var addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;

  let head = new ListNode();
  let ans = head;

  let rest = 0;
  while (current1 || current2) {
    let sum = (current1?.val || 0) + (current2?.val || 0) + rest;

    ans.next = new ListNode(sum % 10)

    if (sum >= 10) {
      rest = 1;
    } else {
      rest = 0;
    }
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
    ans = ans.next;
  }
  if (rest) {
    ans.next = new ListNode(rest);
  }

  return head.next;
};