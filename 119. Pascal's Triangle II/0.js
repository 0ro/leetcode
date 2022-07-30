/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let prev = [1];

  for (let i = 0; i < rowIndex; i++) {
    prev = getSums(prev);
  }
  
  function getSums(arr) {
    let res = [];
    
    for (let i = 0; i <= arr.length; i++) {
     res.push((arr[i] || 0) + (arr[i-1] || 0));
    }
    
    return res;
  }
  
  
  return prev;
};