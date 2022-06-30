/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

1,2, 3 = 4

                                    f(4)

               1(f3)                2.(f(2))             3(f(1))

     1(f(2))     2(f(1)) 3(f(0))                      1(f(0))    2    3

1(f1) 2(f0) 3(-1)


f(4) = f(3) + f(2) + f(1);

f(3) = f(2) + f(1) + f(0);

f(2) = f(1) + f(0);

f(1) = f(0);

f(0) = 1

 */


var combinationSum4 = function (nums, target) {
  let dp = [1];

  for (let i = 1; i < target + 1; i++) {
    dp[i] = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};
