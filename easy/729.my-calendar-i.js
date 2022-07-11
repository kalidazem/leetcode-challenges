/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

var MyCalendar = function () {
  this.bookings = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  //   BRUTE FORCE!! BAD
  for (const [existingStart, existingEnd] of this.bookings) {
    if (existingStart < end && start < existingEnd) return false;
  }

  this.bookings.push([start, end]);

  return true;
};
// };
