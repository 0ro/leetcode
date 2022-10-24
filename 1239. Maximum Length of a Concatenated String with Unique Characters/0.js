/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let ans = 0;

  function isValid(str) {
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
      if (set.has(str[i])) {
        return false;
      }
      set.add(str[i])
    }
    return true;
  }

  function track(set, k) {
    let str = set.join('');
    if (isValid(str)) {
      ans = Math.max(ans, str.length);
    }

    for (let i = k; i < arr.length; i++) {
      set.push(arr[i]);
      track(set, i + 1);
      set.pop();
    }
  }

  track([], 0)


  return ans;
};