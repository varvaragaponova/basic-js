const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = String(n).split('');
  let array = [];

  nArr.forEach((item, index, currentArr) => {
    const num = +currentArr.filter((elem, i) => index != i).join('');
    array.push(num);
  })
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};

