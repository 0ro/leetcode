/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  s = s.toLowerCase();

  while (l <= r) {
    let leftIsLetter = /[a-z0-9]/.test(s[l]);
    let rightIsLetter = /[a-z0-9]/.test(s[r]);
    if (leftIsLetter && rightIsLetter) {
      if (s[l] == s[r]) {
        l++;
        r--;
      } else {
        return false;
      }
    } else if (leftIsLetter) {
      r--;
    } else {
      l++;
    }
  }

  return true;
};