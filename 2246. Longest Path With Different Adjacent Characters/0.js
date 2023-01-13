/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  let ans = 1;
  let tree = new Array(parent.length).fill(0).map(() => []);

  for (let i = 1; i < parent.length; i++) {
    let p = parent[i];

    tree[p].push(i);
  }

  function visit(node) {
    let twoMaximums = [0, 0];
    for (let i = 0; i < tree[node].length; i++) {
      let n = tree[node][i];
      let max = visit(tree[node][i]);

      if (s[node] != s[n]) {
        let [a, b] = twoMaximums;
        if (max >= a || max >= b) {
          if (a <= b) {
            twoMaximums[0] = max;
          } else {
            twoMaximums[1] = max;
          }
        }
      }
    }

    ans = Math.max(ans, twoMaximums[0] + twoMaximums[1] + 1);

    return Math.max(...twoMaximums) + 1;
  }

  visit(0);

  return ans;
}