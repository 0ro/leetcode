class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function removeElements(head: ListNode | null, val: number): ListNode | null {
  let ans = head;
  let current = head;
  let prev = null;
  while (current) {
    if (current.val === val) {
      if (prev) {
        prev.next = current.next
      } else {
        ans = current.next;
      }

    } else {
      prev = current;
    }
    current = current.next;
  }
  return ans;
};