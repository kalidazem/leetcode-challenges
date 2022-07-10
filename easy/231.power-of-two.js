/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //forgot to add this edge case
  if (n === 0) return false;
  //2^x = 16 ===> what is x ?
  //BITWISE
  //1= 1
  //2=10
  //4=1000
  //8=10000
  //16=100000
  return (n & (n - 1)) === 0 && n > 0;
};
// @lc code=end
//3
//in bits
// 3 =    011
//3-1= 2  010

//4
//in bits
// 4   =  100
// 4-1 =  011
