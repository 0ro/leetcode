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
 var inorderTraversal = function(root) {
  let ans = [];
  function visit(node) {
    if (node.left) {
      visit(node.left);
    }
    ans.push(node.val)
    if (node.right) {
      visit(node.right);
    }
  }
  
  root && visit(root);
  
  return ans;
};