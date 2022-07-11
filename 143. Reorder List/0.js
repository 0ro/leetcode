/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.


1->4->2>3<-4
p1 l  r  p2

p1.next = p2
p2.next = left;

1 2 3 4
    s   f

1->4

  null<-3 4->5-> null
        p c
3->null

current.next = prev;

 */
var reorderList = function (head) {
  let middleHead = getMiddle(head);

  let prevLeft = head;
  let prevRight = reverse(middleHead);

  let left = prevLeft.next;
  let right = prevRight.next;

  while (left && right) {
    prevLeft.next = prevRight;
    prevRight.next = left;

    prevLeft = left;
    prevRight = right;

    left = left.next;
    right = right.next;
  }
};

function getMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverse(head) {
  let current = head;
  let prev = null;

  while (current) {
    let node = current.next;

    current.next = prev;
    prev = current;
    current = node;
  }

  return prev;
}
