/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}



d -> 1 -> 2 -> 3 -> 4
^    ^.   ^
p    c    n

d -> 2 -> 1 -> 
p    n    c
          p   c
c.next = n.next
p.next = n
n.next = c

p = c
n = c.next.next
c = c.next

 */
var swapPairs = function (head) {
  let dummy = new ListNode();

  dummy.next = head;
  let prev = dummy;
  let current = head;
  let next = head?.next ?? null;

  while (next) {
    current.next = next.next;
    prev.next = next;
    next.next = current;


    prev = current;
    current = current.next;
    next = current?.next ?? null;
  }


  return dummy.next;
};