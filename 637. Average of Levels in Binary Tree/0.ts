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


function visit(node: TreeNode | null, res: { sum: number, count: number }[], level: number) {
  if (res[level]) {
    res[level].sum += node.val;
    res[level].count += 1;
  } else {
    res[level] = { sum: node.val, count: 1 }
  }
  level = level + 1;
  if (node.left) visit(node.left, res, level)
  if (node.right) visit(node.right, res, level)
}

function averageOfLevels(root: TreeNode | null): number[] {
  let level = 0;
  const res = [];
  visit(root, res, level)

  return res.map((item) => item.sum / item.count);
};