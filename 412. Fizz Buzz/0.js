/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    ans[i - 1] = '';
    if (i % 3 == 0) {
      ans[i - 1] += 'Fizz';
    }
    if (i % 5 == 0) {
      ans[i - 1] += 'Buzz';
    }
    if (!ans[i - 1].length) {
      ans[i - 1] = i.toString();
    }
  }

  return ans;
};