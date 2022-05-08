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
var minDepth = function(root) {
  function dfs(node, depth) {
    if (!node) {
      return Infinity;
    }
    if (!node.left && !node.right) {
      return depth + 1;
    }
    return Math.min(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
  }

  return root ? dfs(root, 0) : 0
};