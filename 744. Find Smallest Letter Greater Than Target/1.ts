export function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (letters[middle] > target && (letters[middle - 1] ?? "a") <= target) {
      return letters[middle];
    } else if (letters[middle] > target) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    } else if (letters[middle] <= target) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }
  }
  return letters[0];
};