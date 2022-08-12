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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let ans = true;

  function dfs(node, [min, max]) {
    if (!node || !ans) {
      return;
    }
    if (node.val > min && node.val < max) {
      dfs(node.left, [min, node.val])
      dfs(node.right, [node.val, max])
    } else {
      ans = false;
      return;
    }
  }

  dfs(root, [-Infinity, +Infinity]);

  return ans;
};
