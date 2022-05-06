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

export function maxDepth(root: TreeNode | null, level = 0): number {
  if (!root) {
    return level;
  }
  if (!root.left && !root.right) {
    return level + 1;
  }
  const a = maxDepth(root.left, level + 1);
  const b = maxDepth(root.right, level + 1);

  return a > b ? a : b;
};