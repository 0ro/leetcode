/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
*/
var reverseBetween = function (head, left, right) {
  if (left == right) {
    return head;
  }

  let prevLeft = head;
  let nextRight = head;
  let middle = head;

  let current = head;

  let dummy = new ListNode(0);

  dummy.next = head;
  let prev = dummy;

  let pos = 1;
  while (current) {
    if (pos == left) {
      prevLeft = prev;
      middle = prevLeft.next;
      prevLeft.next = null;
    }
    if (pos == right) {
      nextRight = current.next;
      current.next = null;
    }
    prev = current;
    current = current.next;
    pos++;
  }

  let { start, tail } = reverse(middle);

  if (start != tail) {
    prevLeft.next = start;
    tail.next = nextRight;
  }

  return dummy.next;
};


function reverse(list) {
  let current = list;
  let prev = null;
  let tail = list;

  while (current) {
    let node = current.next;
    current.next = prev;
    prev = current;
    current = node;
  }

  return {
    tail,
    start: prev,
  };
}