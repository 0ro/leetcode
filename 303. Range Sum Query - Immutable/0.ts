class NumArray {
  constructor(private nums: number[]) {
    let sumArray = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      const sum = nums[i] + sumArray[i - 1];
      sumArray.push(sum)
    }
    this.sumValues = sumArray;
  }
  private sumValues: number[];

  sumRange(left: number, right: number): number {
    return this.sumValues[right] - (this.sumValues[left - 1] ?? 0);
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/