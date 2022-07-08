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

42135

42    135

4 2   1 35
         3 5

 */
var sortList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let mid = splitInMiddle(head);

  return mergeTwoLists(sortList(head), sortList(mid))
};

function splitInMiddle(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    prev = slow;
    slow = slow.next;
  }

  prev.next = null;

  return slow;
};

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0);
  let ans = dummy;

  let cur1 = list1;
  let cur2 = list2;

  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      ans.next = new ListNode(cur1.val)
      cur1 = cur1.next;
    } else {
      ans.next = new ListNode(cur2.val);
      cur2 = cur2.next;
    }
    ans = ans.next;
  }

  while (cur1) {
    ans.next = new ListNode(cur1.val);
    cur1 = cur1.next;
    ans = ans.next;
  }

  while (cur2) {
    ans.next = new ListNode(cur2.val);
    cur2 = cur2.next;
    ans = ans.next;
  }

  return dummy.next;
};