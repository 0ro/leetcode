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
var maxProduct = function (root) {
  let totalSum = 0;
  function dfs(node) {
    if (!node) {
      return;
    }
    totalSum += node.val;
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);

  let ans = 0;

  function visit(node) {
    if (!node) {
      return 0;
    }

    let leftSubtree = visit(node.left);
    let rightSubtree = visit(node.right);

    ans = Math.max(ans, leftSubtree * (totalSum - leftSubtree), rightSubtree * (totalSum - rightSubtree));

    return node.val + leftSubtree + rightSubtree;
  }

  visit(root);

  let modulo = Math.pow(10, 9) + 7

  return ans % modulo;
}