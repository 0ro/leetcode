/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head.next;

  while (true) {
    if (fast === null) {
      return null;
    } else {
      if (slow === fast) {
        break;
      }
    }
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  slow = head;
  fast = fast.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};