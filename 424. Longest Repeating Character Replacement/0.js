/**
 * @param {string} s
 * @param {number} k
 * @return {number}


2
ABABBA
 l 
       r

ans=5

5 - 3 <= 2

{
  A: 2
  B: 3
}


 */
var characterReplacement = function (s, k) {
  let ans = 0;
  let l = 0;
  let r = 0;

  let stat = {
    [s[l]]: 1
  };

  while (r < s.length) {
    if ((r - l + 1 - Math.max(...Object.values(stat))) <= k) {
      ans = Math.max(r - l + 1, ans);
      r++;
      stat[s[r]] = stat[s[r]] ? stat[s[r]] + 1 : 1;
    } else {
      stat[s[l]] -= 1;
      l++;
    }
  }

  return ans;
};