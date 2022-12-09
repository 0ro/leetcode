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
var maxAncestorDiff = function (root) {
  let ans = 0;

  function visit(node, interval) {
    if (!node) {
      return;
    }

    let newInterval = [...interval];

    if (node.val >= (newInterval[1] ?? 0)) {
      if (newInterval[0] == undefined) {
        newInterval[0] = newInterval[1];
      }
      newInterval[1] = node.val;
    } else if (node.val <= (newInterval[0] ?? Infinity)) {
      newInterval[0] = node.val
    }

    if (newInterval[1] != undefined && newInterval[0] != undefined) {
      ans = Math.max(ans, newInterval[1] - newInterval[0]);
    }

    visit(node.left, newInterval);
    visit(node.right, newInterval);
  }

  visit(root, []);

  return ans;
}