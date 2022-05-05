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

function visit(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (p?.val === q?.val) {
    return visit(p.left, q.left) && visit(p.right, q.right);
  }
  return false
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return visit(p, q);
};