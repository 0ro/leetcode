/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
    return 0;
  }
  if (s.length == 1) {
    return 1; 
  }
  if (s.length == 2) {
    return s[0] == s[1] ? 1 : 2;
  }
  let l = 0;
  let r = 1;
  let ans = 1;

  while(r != s.length) {
    let str = s.slice(l,r);
    if (str.indexOf(s[r]) != -1) {
      l++;
    } else {
      r++;
      ans = Math.max(ans, str.length+1);
    }
  }
  
  return ans;
};