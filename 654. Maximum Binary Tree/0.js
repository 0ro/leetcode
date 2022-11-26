/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    let node = new TreeNode(nums[i]);

    let current = null;
    while (node.val > (stack[stack.length - 1])?.val) {
      current = stack.pop();
    }
    node.left = current;
    if (stack[stack.length - 1]) stack[stack.length - 1].right = node;
    stack.push(node);
  }
  return stack[0];
};
