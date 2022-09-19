/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let hash = new Array(numCourses).fill(1).reduce((acc, item, index) => {
    return {
      ...acc,
      [index]: {
        values: []
      }
    }
  }, {});

  for (let i = 0; i < prerequisites.length; i++) {
    let [course, hasToFinish] = prerequisites[i];

    hash[course].values.push(hasToFinish);
  }

  function dfs(val, set) {
    let { values, canFinish } = val;
    if (canFinish == undefined) {
      let ans = true;
      for (let i = 0; i < values.length; i++) {
        if (!set.has(values[i])) {
          set.add(values[i]);
          let canFinish = dfs(hash[values[i]], set);
          set.delete(values[i]);
          if (!canFinish) {
            ans = false;
          }
        } else {
          ans = false;
        }
      }
      val.canFinish = ans;

      return ans;
    }
    return canFinish;
  }

  for (let prop in hash) {
    let canFinish = dfs(hash[prop], new Set());

    if (!canFinish) {
      return false;
    }
  }

  return true;
};