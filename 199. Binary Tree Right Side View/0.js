/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let q = [root];
  let ans = [];

  while (q[0]) {
    let len = q.length;
    let row = [];
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
      row.push(node.val);
    }

    ans.push(row.pop());
  }

  return ans;
};