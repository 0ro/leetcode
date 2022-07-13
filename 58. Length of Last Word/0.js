/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let ans = 0;
  let hasLettersBefore = false;
  for (let i = s.length -1; i >= 0; i--) {
    if (s.charAt(i) != ' ') {
      ans++; 
      hasLettersBefore = true;
    } else if (hasLettersBefore) {
      return ans;
    }
  }

  return ans;
};