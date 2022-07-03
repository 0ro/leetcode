/**
 * @param {number[]} nums
 * @return {number}

[1,17,5,10,13,15,10,5,16,8]

 */
var wiggleMaxLength = function (nums) {
  let len = 1;
  let prevSign = null;

  for (let i = 1; i < nums.length; i++) {
    const sign = Math.sign(nums[i] - nums[i - 1]);

    switch (sign) {
      case 0: {
        // ignore equality case
        break;
      }
      case 1:
      case -1: {
        if (prevSign !== sign) {
          prevSign = sign;
          len += 1;
        }
        break;
      }
    }
  }

  return len;
};