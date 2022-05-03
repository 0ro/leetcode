class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  if (head === head.next) {
    return true;
  }
  if (!head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  let result = false;

  while (true) {
    if (slow === fast) {
      result = true;
      break;
    }
    if (!fast || !fast.next) {
      result = false;
      break;
    }
    slow = slow.next
    fast = fast.next.next
  }
  return result;
};