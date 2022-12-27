/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, p) {
  let tree = {};

  for (let i = 0; i < numCourses; i++) {
    tree[i] = {
      val: i,
      deps: [],
    }
  }

  for (let i = 0; i < p.length; i++) {
    let [node, dep] = p[i];
    tree[node].deps.push(dep);
  }

  let ans = [];

  function dfs(node, used) {
    let canFinishEvery = true;
    for (let i = 0; i < node.deps.length; i++) {
      let val = node.deps[i];

      if (used.has(val)) {
        return false;
      }

      if (tree[val].canFinish === undefined) {

        used.add(tree[val].val);
        let canFinish = dfs(tree[val], used);
        used.delete(tree[val].val);

        if (!canFinish) {
          canFinishEvery = false;
          break;
        }
      } else if (tree[val].canFinish) {
        continue;
      } else {
        canFinishEvery = false;
        break;
      }
    }

    if (canFinishEvery) {
      node.canFinish = true;
      ans.push(node.val);
    }

    return canFinishEvery;
  }

  for (let i = 0; i < numCourses; i++) {
    if (tree[i].canFinish === undefined) {
      let canFinish = dfs(tree[i], new Set([tree[i].val]));
      if (!canFinish) {
        return [];
      }
    } else if (tree[i].canFinish) {
      continue;
    }
  }

  return ans;
};