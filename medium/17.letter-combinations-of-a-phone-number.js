/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * Second solution  >>>71  ms 42.3 MB<<<
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const mapDigitToLetters = (digit, st = "") => {
    let map1 = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    };
    return map1[digit].map((letter) => {
      return st + letter;
    });
  };
  let arrayOfDigits = Array.from(String(digits), Number);
  let arr = [""];
  for (let i = 0; i < arrayOfDigits.length; i++) {
    let tempArr = [];
    for (let s of arr) {
      tempArr = [...tempArr, ...mapDigitToLetters(arrayOfDigits[i], s)];
    }
    arr = tempArr;
  }

  return arr;
};
 
// @lc code=end
// **  First solution  >>>87 ms 41.6 MB<<<
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function (digits) {
//   if (!digits) return [];
//   const mapDigitsToLetter = (digit, st = "") => {
//     let map1 = {
//       2: ["a", "b", "c"],
//       3: ["d", "e", "f"],
//       4: ["g", "h", "i"],
//       5: ["j", "k", "l"],
//       6: ["m", "n", "o"],
//       7: ["p", "q", "r", "s"],
//       8: ["t", "u", "v"],
//       9: ["w", "x", "y", "z"],
//     };
//     return map1(digit).map((letter) => st + letter);
//   };

//   //S1 >>>87 ms 41.6 MB<<<

//   let map1 = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };
//   //TODO remove
//   digits = Array.from(digits, Number);
//   let digitMap = digits.map((digit) => map1[digit]);
//   //get array of letters for first digit
//   let firstSetOfLetters = digitMap[0];
//   //length if all mapped letters
//   let length = digitMap.length;
//   //start from second item
//   for (let i = 1; i < length; i++) {
//     //get its letter array
//     let tempArray = digitMap[i];
//     let aa = [];
//     //loop through
//     for (let j = 0; j < tempArray.length; j++) {
//       let k = 0; //index for firstSetOfLetters
//       while (k < firstSetOfLetters.length) {
//         aa.push(firstSetOfLetters[k] + tempArray[j]);
//         k++;
//       }
//     }
//     firstSetOfLetters = [...aa];
//   }
//   return firstSetOfLetters;
// };
