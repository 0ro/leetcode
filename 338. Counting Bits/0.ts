export function countBits(n: number): number[] {
  const result = [0];
  for (let i = 1; i <= n; i++) {
    const sum = result[i >> 1] + (i & 1);
    result.push(sum)
  }
  return result;
};