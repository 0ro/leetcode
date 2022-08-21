/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let current = points[0][1];
  let ans = 1;

  for (let i = 1; i < points.length; i++) {
    if (current >= points[i][0]) {
      current = Math.min(current, points[i][1]);
    } else {
      ans++;
      current = points[i][1];
    }
  }

  return ans;

};