/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let ans = [];
  let prevEvenSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      prevEvenSum += nums[i];
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let currentVal = nums[queries[i][1]];
    let res = currentVal + queries[i][0];

    if (currentVal % 2 == 0) {
      prevEvenSum -= currentVal;
    }
    if (res % 2 == 0) {
      prevEvenSum += res;
    }

    nums[queries[i][1]] = res;
    ans.push(prevEvenSum);
  }

  return ans;
};