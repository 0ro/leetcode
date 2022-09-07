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
 * @return {string}
 */
 var tree2str = function(root) {
  let ans = "";
  function visit(node) {
    if (!node) {
      return; 
    }
    if (node) {
      ans+= node.val;
    }
    if (node.left || node.right) {
      ans+="(" 
      visit(node.left)
      ans+=")" 
    }
    if (node.right) {
      ans+="(" 
      visit(node.right)
      ans+=")" 
    }
  }

  visit(root);

  return ans;
};