/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let str = ''+n;
  let memo = {};

  while(str != '1') {
    if (memo[str]) {
      return false; 
    }
    memo[str] = 1;
    
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      let num = +str[i];

      res+=Math.pow(num, 2);
    }

    str = res+'';
  }

  return true;
};
