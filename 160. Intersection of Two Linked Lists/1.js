/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while (currentA != currentB) {
    if (currentA == null && currentB == null) {
      return null;
    }
    if (currentA) {
      currentA = currentA.next;
    } else {
      currentA = headB;
    }

    if (currentB) {
      currentB = currentB.next;
    } else {
      currentB = headA;
    }
  }

  return currentA;
};