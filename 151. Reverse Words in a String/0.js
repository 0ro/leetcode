/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function normalize(str) {
    return str.replace(/ +/g, ' ').replace(/^ | $/g, '');
  }

  function reverse(str) {
    let arr = str.split(' ');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let tmp = arr[left];

      arr[left] = arr[right];
      arr[right] = tmp;

      left++;
      right--;
    }
    return arr.join(' ');
  }

  return reverse(normalize(s));
};