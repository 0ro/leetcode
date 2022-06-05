/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let ans = [];

  let pairs = ["(", ")"];

  function isValid(set) {
    let sum = 0;
    for (let i = 0; i < set.length; i++) {
      if (sum < 0) {
        return false;
      }
      if (set[i] == "(") {
        sum += 1;
      } else {
        sum -= 1;
      }
    }

    return sum == 0 ? true : false;
  }

  function track(set) {
    if (set.length == (n * 2)) {
      if (isValid(set)) {
        ans.push(set.slice().join(""));
      }
      return;
    }

    for (let i = 0; i < pairs.length; i++) {
      set.push(pairs[i]);
      track(set, i + 1);
      set.pop();
    }
  }

  track([]);

  return ans;
};