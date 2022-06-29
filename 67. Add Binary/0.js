/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(x, y) {
  let ans = '';
  let a = reverse(x);
  let b = reverse(y);
  let rest = '0';
  
  let map = {
    '00': '0',
    '01': '1',
    '10': '1',
    '11': '10',
    '100': '10',
    '101': '11'
  }

  let len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    let first = a[i] === undefined ? '0' : a[i];
    let second = b[i] === undefined ? '0' : b[i];

    let sum = map[map[first+second] + rest];
    
    if (sum.length > 1) {
      rest = '1';
    } else {
      rest = '0';
    }

    ans = i === len - 1 ? sum + ans : sum[sum.length-1] + ans;
  }

  return ans;
};

function reverse(str) {
  return str.split('').reverse().join('');
}