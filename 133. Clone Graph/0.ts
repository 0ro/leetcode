export class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}

export function cloneGraph(node: Node | null): Node | null {
  let visited = new Map();

  function visit(node) {
    if (!node) {
      return null;
    }
    if (visited.has(node.val)) {
      return visited.get(node.val);
    }
    let clone = new Node(node.val);
    visited.set(node.val, clone);
    for (let i = 0; i < node.neighbors.length; i++) {
      let n = visit(node.neighbors[i]);
      clone.neighbors.push(n);
    }

    return clone;
  }

  return visit(node);
};