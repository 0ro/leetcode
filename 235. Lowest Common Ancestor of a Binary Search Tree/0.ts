interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  parent: TreeNode | null
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode | null, parent: TreeNode | null) {
    if (!node) {
      return; 
    }
    node.parent = parent;
    dfs(node.left, node)
    dfs(node.right, node)
  }
  dfs(root, null)

  let current1 = p;
  let arr1 = []
  let current2= q;
  let obj2 = {}

  while(current1 || current2) {
    if (current1) {
      arr1.push(current1);
      current1 = current1.parent;

    }
    if(current2) {
      obj2[current2.val] = current2;
      current2 = current2.parent;
    }
  }

  for(let i = 0; i< arr1.length; i++) {
    const node = arr1[i];

    if(obj2[node.val]) {
      return obj2[node.val];
    }
  }

  return null;
};