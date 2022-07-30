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
 var isBalanced = function(root) {
  let ans = true;

  function visit(node, h) {
    if (!ans) {
      return; 
    }
    if (!node) {
      return h; 
    }

    let hl = visit(node.left, h+1);
    let hr = visit(node.right, h+1);

    if (Math.abs(hl-hr) > 1) {
      ans = false;
    }

    return Math.max(hl,hr);
  }

  visit(root, 0)

  return ans;
};