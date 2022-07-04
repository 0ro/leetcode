/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let leftToRight = new Array(ratings.length).fill(1);
  let rightToLeft = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    let prev = ratings[i - 1];
    let curr = ratings[i];
    if (prev < curr) {
      leftToRight[i] = leftToRight[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    let prev = ratings[i + 1];
    let curr = ratings[i];
    if (prev < curr) {
      rightToLeft[i] = rightToLeft[i + 1] + 1;
    }
  }
  let ans = 0;
  for (let i = 0; i < ratings.length; i++) {
    ans += Math.max(leftToRight[i], rightToLeft[i]);
  }

  return ans;
};