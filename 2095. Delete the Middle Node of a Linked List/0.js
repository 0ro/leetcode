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
 */
var deleteMiddle = function (head) {
  function findMiddle(node) {
    let slow = node;
    let fast = node;

    while (fast?.next?.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function deleteNode(node) {
    node.next = node?.next?.next || null;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let node = findMiddle(dummy);


  deleteNode(node);

  return dummy.next;
};