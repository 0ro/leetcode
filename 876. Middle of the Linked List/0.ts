class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let middleNode = null;
  let slow = head;
  let fast = head;


  while (true) {
    if (fast.next === null) {
      middleNode = slow;
      break;
    }
    if (fast.next.next === null) {
      middleNode = slow.next;
      break;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return middleNode;
};