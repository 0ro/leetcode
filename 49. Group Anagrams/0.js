/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  let hash = {};
  
  for (let i = 0; i < strs.length; i++) {
    let key = sortStr(strs[i]);
    
    if (hash[key]) {
      hash[key].push(strs[i]);
    } else {
      hash[key] = [strs[i]];
    }
  }
  
  return Object.values(hash);
};

function sortStr(str) {
  return str.split('').sort((a, b) => a < b ? 1 : -1).join('');
}