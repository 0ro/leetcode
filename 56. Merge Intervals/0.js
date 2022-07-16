/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = ans[ans.length - 1] || [-1, -1];
    let [start2, end2] = intervals[i];

    if (end >= start2) {
      ans[ans.length - 1] = [start, Math.max(end, end2)];
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
};