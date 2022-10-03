/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}


__ab__abbbb
   ^ 
       ^


[3,5,10,7,5,3,5,5,4,8,1]
aba_c
  ^ 
   ^

 */
var minCost = function (colors, neededTime) {
  colors = colors.split('');
  let l = 0;
  let r = 1;
  let ans = 0;

  while (r < colors.length) {
    if (colors[l] == 0) {
      do {
        l++;
      } while (colors[l] == 0)
    }
    if (colors[r] == 0) {
      do {
        r++;
      } while (colors[r] == 0)
    }
    if (colors[l] == colors[r]) {
      if (neededTime[l] > neededTime[r]) {
        colors[r] = 0;
        ans += neededTime[r];
        r++
      } else {
        colors[l] = 0;
        ans += neededTime[l];
        l++;
        r++
      }
    } else {
      l++;
      r++;
    }
  }
  return ans;
};