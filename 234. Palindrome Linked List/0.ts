class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function copyList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let current = head;
  let headCopy = null;
  let currentCopy = null;

  while (current) {
    const node = currentCopy || new ListNode(current.val)
    node.next = current.next ? new ListNode(current.next.val) : null;

    currentCopy = node.next;

    if (!headCopy) {
      headCopy = node;
    }

    current = current.next;
  }

  return headCopy;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let prev = null;
  let current = head;

  while (current) {
    const node = current;
    current = current.next;

    node.next = prev
    prev = node;
  }
  return prev;
}

function isPalindrome(head: ListNode | null): boolean {
  const copyHead = copyList(head);
  const reversedHead = reverseList(copyHead);

  let current = head;
  let reversedCurrent = reversedHead;
  let ans = true;

  while (current) {
    if (current.val !== reversedCurrent.val) {
      ans = false;
      break;
    }
    reversedCurrent = reversedCurrent.next;
    current = current.next;
  }

  return ans;
};