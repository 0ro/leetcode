/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let ans = 0;

  let current = n;
  while(current) {
    ans += current & 1;
    current = current >>> 1;
  }

  return ans;
};