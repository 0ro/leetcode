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
  if (root) {
    const leftCopy = root.left;

    root.left = invertTree(root.right);
    root.right = invertTree(leftCopy);

    return root;
  }
  return null;
};