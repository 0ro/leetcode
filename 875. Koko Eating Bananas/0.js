/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
  let min = 0;
  let max = -Infinity;
  for (let i =0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }
  
  function getSum(m) {
    return piles.reduce((acc, item) => {
      return acc + Math.ceil(item / m);
    },0)
  }
  
  function search(l,r) {
    while(l <= r) {
      let middle = Math.floor((r + l)/2);
      let sum = getSum(middle);
      if (sum > h) {
        l = middle + 1;
      } else if (sum <= h) {
        r = middle - 1;       
      }
    }

    return l;
  }

  return search(min, max);
};