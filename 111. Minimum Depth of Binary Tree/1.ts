export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function minDepth(root: TreeNode | null): number {
  let queue = root === null ? [] : [root];
  let ans = 0;

  while (queue.length) {
    let len = queue.length;
    ans++;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) {
        return ans;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return ans;
};