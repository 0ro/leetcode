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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = -Infinity;
  function dfs(node) {
    if (node == null) {
      return 0;
    }
    let leftPathSum = dfs(node.left);
    let rightPathSum = dfs(node.right);

    ans = Math.max(ans, node.val + leftPathSum + rightPathSum, node.val, node.val + Math.max(leftPathSum, rightPathSum));

    return Math.max(node.val + Math.max(leftPathSum, rightPathSum), node.val);
  }

  dfs(root);

  return ans;
};