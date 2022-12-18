/**
 * @param {number[]} temperatures
 * @return {number[]}


73 1 =0
74 1 =1
75,71,69  72
2. 3. 4    5 
 */
var dailyTemperatures = function (temps) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < temps.length; i++) {
    while (temps[i] > temps[stack[stack.length - 1]]) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }

  while (stack.length) {
    ans[stack.pop()] = 0;
  }

  return ans;
}
