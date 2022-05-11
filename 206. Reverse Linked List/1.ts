export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while(current) {
    let node = current;

    current = current.next;
    node.next = prev;
    prev = node;
  }

  return prev;
};
