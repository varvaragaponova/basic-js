const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] < 0) {
     continue;
   }
   for (let j = i; j < arr.length; j++) {
     if (arr[j] < 0) continue;
     let minNum = Math.min(arr[i],arr[j]);
     arr[j] = Math.max(arr[i],arr[j]);
     arr[i] = minNum;
   }
 }
 return arr;
}

module.exports = {
  sortByHeight
};
