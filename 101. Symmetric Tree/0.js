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
var isSymmetric = function (root) {
  let q = [root];

  while (q.length) {
    if (!isPalindrom(q)) {
      return false;
    }
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (node) {
        q.push(node.left);
        q.push(node.right);
      }
    }
  }

  return true;
};

function isPalindrom(array) {
  let left = 0;
  let right = array.length - 1;


  while (left < right) {
    if (array[left]?.val != array[right]?.val) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}