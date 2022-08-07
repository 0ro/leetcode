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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let q = [root];

  let ans = [];

  while (q[0]) {
    let values = [];
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
      values.push(node.val);
    }
    ans.push(values);
  }

  return ans;
};