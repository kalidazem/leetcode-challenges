/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //S1 very bad on large data sets
  // for (let i = 0; i < k; i++) {
  //   let j = nums.length - 1;
  //   let val = nums[j];

  //   while (j > 0) {
  //     nums[j] = nums[j - 1];
  //     j--;
  //   }
  //   nums[j] = val;
  // }
  // return nums;

  nums = nums.reverse().slice(0, k).reverse().push().reverse();
  return nums;
};

// expected [5,6,7,1,2,3,4]

//expected [3,99,-1,-100]

 