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
var diameterOfBinaryTree = function (root) {
  let ans = 0;

  function dfs(node) {
    if (!node) {
      return -1;
    }
    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);

    ans = Math.max(ans, 2 + leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);

  return ans;
};
