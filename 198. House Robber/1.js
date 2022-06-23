var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;
  let current;
  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i] + rob2, rob1);
    rob2 = rob1;
    rob1 = current;
  }
  return current;
};