class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let ans = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummy.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      dummy.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    dummy = dummy.next;
  }
  if (list1) {
    while (list1) {
      dummy.next = new ListNode(list1.val);
      list1 = list1.next;
      dummy = dummy.next
    }
  }
  if (list2) {
    while (list2) {
      dummy.next = new ListNode(list2.val);
      list2 = list2.next;
      dummy = dummy.next
    }
  }
  return ans.next;
};