/**
 * @param {string} s
 * @return {string[][]}

 */
var partition = function (s) {
  let ans = [];
  let set = [];

  function backtracking(start) {
    if (start == s.length) {
      ans.push(set.slice())
      return;
    }

    for (let i = start; i < s.length; i++) {
      let substr = s.slice(start, i + 1);
      if (isPalindrome(substr)) {
        set.push(substr);

        backtracking(i + 1);

        set.pop();
      }
    }
  }

  backtracking(0)

  return ans;
};

function isPalindrome(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}