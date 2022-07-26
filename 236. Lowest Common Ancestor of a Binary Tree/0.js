/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  let ans = null;
  function dfs(node) {
    if (!node) {
      return 0; 
    }
    let a = dfs(node.left);
    let b = dfs(node.right);
    let c = node == p || node == q ? 1 : 0;
    
    if (a + b + c == 2) {
      ans = node;
      return;
    }
    
    return a + b + c == 1 ? 1 : 0;
  }

  dfs(root);
  
  return ans;
};