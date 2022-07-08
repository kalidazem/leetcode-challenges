/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //S1
  //   let j = 0;
  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] > nums[j]) {
  //       nums[++j] = nums[i];
  //     }
  //   }
  //   return j + 1;

  //S2
  //   let j = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       continue;
  //     } else {
  //       nums[j] = nums[i];
  //       j++;
  //     }
  //   }

  //S3
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }
  return j;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
