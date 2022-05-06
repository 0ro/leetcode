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

export function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  let q1 = a === null ? [] : [a];
  let q2 = b === null ? [] : [b];

  if (q1.length !== q2.length) {
    return false;
  }

  while (q1.length && q2.length) {
    let len1 = q1.length;
    let len2 = q2.length;

    for (let i = 0, j = 0; i < len1 && j < len2; i++, j++) {
      let node1 = q1.shift();
      let node2 = q2.shift();

      if (node1?.val !== node2?.val) {
        return false;
      }

      if (node1) {
        q1.push(node1.left)
        q1.push(node1.right)
      }
      if (node2) {
        q2.push(node2.left)
        q2.push(node2.right)
      }
    }
  }

  return true;
};