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
 * @param {number} k
 * @return {boolean}

nlogn

 */
var findTarget = function(root, k) {
  let ans = false; 
  let seen = new Map();
  function dfs(node) {
    if (ans || !node) {
      return; 
    }
    if (seen.has(k - node.val)) {
      ans = true; 
    }
    seen.set(node.val, node.val)
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return ans;
};