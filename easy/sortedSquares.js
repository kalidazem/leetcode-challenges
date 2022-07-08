/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // S1  >>>>>>>>>>>>>>>>>154 ms<<<<
  /**   let j = 0;
    for (let i = 0; i < nums.length; i++) {
      nums[i] = Math.pow(nums[i], 2);
    }
    return nums.sort((a, b) => a - b);
 */
  // S2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>129 ms<<<<<<
//   let j = 0,
//     k = nums.length - 1;
//   let sorted = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let right = Math.abs(nums[k]);
//     let left = Math.abs(nums[j]);
//     if (left >= right) {
//       sorted[i] = Math.pow(left, 2);
//       j++;
//     } else {
//       sorted[i] = Math.pow(right, 2);
//       k--;
//     }
//   }
//   return sorted;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
