/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    ans.push(getSums(ans[i]));
  }

  function getSums(arr) {
    let res = [];

    for (let i = 0; i <= arr.length; i++) {
      res.push((arr[i] || 0) + (arr[i - 1] || 0));
    }

    return res;
  }


  return ans;
};