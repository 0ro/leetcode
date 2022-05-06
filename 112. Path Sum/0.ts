class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  targetSum -= root.val
  if (!root.right && !root.left) {
    return targetSum === 0 ? true : false;
  }
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};