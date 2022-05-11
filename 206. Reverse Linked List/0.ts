class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null, prev: ListNode | null = null): ListNode | null {
  if (!head) {
    return prev;
  }

  let node = head;
  let nextElement = head.next;
  node.next = prev;
  prev = node;

  return reverseList(nextElement, prev)
};