/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0;
  let newArr = [];
  nums.push('#');
  for (let j = 1; j < nums.length; j++) {
    //difference between two consecutive values and indices should be the same
    if (nums[j] - nums[i] !== j - i) {  
      if (j - i > 1) {
        newArr.push(nums[i] + "->" + nums[j - 1]);
      } else {
        newArr.push(nums[i].toString());
      }
      i = j;
    }
  }
  return newArr;
};
// @lc code=end

console.log(summaryRanges([0,1,2,4,5,7]));
