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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let res = [];
  function find(node: TreeNode | null, value: number) {
    if (!node) {
      return null;
    }
    if (node.val === value) {
      res.push(node);
    }
    find(node.left, value);
    find(node.right, value);
  }
  const head = find(root, subRoot.val);

  function sameTree(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }
    if (root1?.val !== root2?.val) {
      return false;
    } else {
      return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
    }
  }

  let ans = false;

  for (let i = 0; i < res.length; i++) {
    if (sameTree(res[i], subRoot)) {
      return true;
    }
  }
  return ans;
};