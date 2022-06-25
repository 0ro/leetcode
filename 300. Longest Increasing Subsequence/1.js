/**
 * @param {number[]} nums
 * @return {number}

[10,9,2,5,3,7,101,18]

[10] => 1 (insert result to some structure that help find with log n)
[10, 9] => 1 
[10, 9, 2] => 1
[10,9,2,5] => 
[10,9,2,5,3] => max()

max(1, try all find all LIS that more than me) => 2


 */
const binarySearch = (array, currVal) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < currVal) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }
  return left
}

var lengthOfLIS = function (nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const currVal = nums[i];
    if (currVal > sub[sub.length - 1]) {
      sub.push(currVal);
    } else {
      const j = binarySearch(sub, currVal)
      sub[j] = currVal
    }
  }
  return sub.length
};