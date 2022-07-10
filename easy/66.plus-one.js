/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //S1
  //   const length = digits.length - 1;
  //   digits[length]++;
  //   //typo instead of digits[i], I put i!! stupid!!
  //   for (let i = length; i > 0 && digits[i] === 10; i--) {
  //     digits[i] = 0;
  //     digits[i - 1]++;
  //   }

  //   if (digits[0] === 10) {
  //     digits[0] = 0; //replaces [10] with [0]
  //     digits.unshift(1); //adds 1 to the beginning of digits[]
  //   }

  //S2
  return Array.from((BigInt(digits.join("")) + 1n).toString(), Number);
};

// @lc code=end
