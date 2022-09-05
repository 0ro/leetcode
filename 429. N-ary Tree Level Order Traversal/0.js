/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let q = root ? [root] : [];
  let ans = [];

  while (q.length) {
    let len = q.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      arr.push(node.val);
      for (let j = 0; j < node.children.length; j++) {
        if (node.children[j]) {
          q.push(node.children[j]);
        }
      }
    }

    if (arr.length) {
      ans.push(arr);
    }
  }

  return ans;
};