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
 * @return {TreeNode}


  0
0   0 

 */
var pruneTree = function(root) {

  function containNull(node) {
    if (!node) {
      return true; 
    }
    let left = containNull(node.left);
    let right = containNull(node.right);

    if (left) {
      node.left = null; 
    }
    if (right) {
      node.right = null; 
    }

    return node.val == 0 && left && right;
  }

  containNull(root);

  if (root.val == 0 && root.left == root.right) {
    return null; 
  }  

  return root;
};