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
  let sizeA = getSize(headA);
  let sizeB = getSize(headB);

  let currentA = headA;
  let currentB = headB;
  if (sizeA > sizeB) {
    let cnt = sizeA - sizeB;
    while (cnt) {
      currentA = currentA.next;
      cnt--;
    }
  } else if (sizeB > sizeA) {
    let cnt = sizeB - sizeA;
    while (cnt) {
      currentB = currentB.next;
      cnt--;
    }
  }

  while (currentA && currentB && currentA != currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return currentA;
};

function getSize(head) {
  let current = head;
  let size = 0;

  while (current) {
    size++;
    current = current.next;
  }

  return size;
}
