/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b);

  for (let i = stones.length - 1; i >= 0; i--) {
    let x = stones[i];
    let y = stones[i-1];

    if (!y) {
      break; 
    }
    if (x == y) {
      stones.pop();
      stones.pop();
    } else if (x > y || x < y) {
      stones.pop();
      stones.pop();
      stones.push(Math.abs(x-y));
      stones.sort((a,b) => a - b);
    }
  }

  return stones[0] ?? 0;
};