/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let ans = 0;
  let cache = new Map();

  function track(pos, diff, set) {
    if (typeof diff == 'number' && cache.get(`${pos}-${diff}`)) {
      return cache.get(`${pos}-${diff}`);
    }
    let res = typeof diff == 'number' ? 1 : 0;

    for (let i = pos; i < nums.length; i++) {
      let d = set.length > 1 ? set[set.length - 1] - set[set.length - 2] : null;
      if (d == null || nums[i] - set[set.length - 1] == d) {
        set.push(nums[i]);
        res += track(i + 1, d, set);
        set.pop();
      }
    }
    if (typeof diff == 'number') {
      cache.set(`${pos}-${diff}`, res);
    }
    return res;
  }

  return track(0, null, []);
};