export class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals: Interval[]): boolean {
    // Write your code hereb
    let ans = true;

    loop1: for (let i = 0; i < intervals.length; i++) {
      const { start, end } = intervals[i]

      for (let j = i + 1; j < intervals.length; j++) {
        const { start: start2, end: end2 } = intervals[j];

        if ((end <= start2 && end < end2) || (end2 <= start && end2 < end)) {
          continue;
        } else {
          ans = false;
          break loop1
        }
      }
    }

    return ans;
  }
}