/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
*/

[]

export function averageOfLevels(root: TreeNode | null): number[] {
  let queue = [root];
  let result = [];
  let level = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      result[level] = result[level] ? { sum: result[level].sum + node.val, count: result[level].count + 1 } : { sum: node.val, count: 1 };
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    level++;
  }
  return result.map((item) => item.sum / item.count);
};