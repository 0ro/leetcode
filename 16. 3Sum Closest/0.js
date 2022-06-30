var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return [];
  }

  let ans = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    let t = target - nums[i];
    while (l < r) {
      if (l > i + 1 && nums[l] == nums[l - 1]) {
        l++;
        continue;
      }
      if (r < nums.length - 1 && nums[r] == nums[r + 1]) {
        r--;
        continue;
      }
      let res = nums[i] + nums[r] + nums[l]
      ans = Math.abs(target - res) < Math.abs(target - ans) ? res : ans;
      if (nums[l] + nums[r] < t) {
        l++;
      } else if (nums[l] + nums[r] > t) {
        r--;
      } else {
        l++;
      }
    }
  }

  return ans;
};