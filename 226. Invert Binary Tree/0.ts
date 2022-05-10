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

export function invertTree(root: TreeNode | null): TreeNode | null {
  function invert(root) {
    if (root) {
      let node = root.left;
      root.left = root.right;
      root.right = node;

      invert(root.left);
      invert(root.right);
    }
  };
  invert(root);
  return root;
};