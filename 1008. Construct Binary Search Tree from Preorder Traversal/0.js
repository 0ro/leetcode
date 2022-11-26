/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let ans = null;
  let stack = [];
  for (let i = 0; i < preorder.length; i++) {
    let node = new TreeNode(preorder[i]);
    if (i == 0) {
      ans = node;
    }
    let current = null;
    while (node.val > stack[stack.length - 1]?.val) {
      current = stack.pop();
    }
    if (current) {
      current.right = node;
    } else {
      if (stack[stack.length - 1]) {
        stack[stack.length - 1].left = node;
      }
    }
    stack.push(node);
  }

  return ans;
};