const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strToArray = str.split('');
  let currentLetter = strToArray[0];
  let count = 0;
  let result = '';

  strToArray.forEach((item, index, arr) => {
    if (index === arr.length - 1) {
      if (currentLetter === item) {
        result += `${count === 1 ? '' : ++count}${currentLetter}`;
      } else {
      result += `${count === 1 ? '' : count}${currentLetter}`;
      currentLetter = item;
      count = 1;
      result += `${count === 1 ? '' : count}${currentLetter}`;
      }
    } else if (currentLetter === item) {
      count += 1;
    } else {
      result += `${count === 1 ? '' : count}${currentLetter}`;
      currentLetter = item;
      count = 1;
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
