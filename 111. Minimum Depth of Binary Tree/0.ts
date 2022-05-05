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

// first node where left and right are null
function visit(node: TreeNode | null, level: number): number {
  if (!node) {
    return level;
  }
  level++;
  if (!node.left && !node.right) {
    return level;
  }
  let a = Infinity;
  let b = Infinity;
  if (node.left) {
    a = visit(node.left, level);
  }
  if (node.right) {
    b = visit(node.right, level);
  }
  return a < b ? a : b;
}

export function minDepth(root: TreeNode | null): number {
  let level = 0;

  return visit(root, level);
};