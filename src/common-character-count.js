const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let letterCount = 0;
  const s1ToArr = s1.split('');
  const s2ToArr = s2.split('');

  s1ToArr.forEach(item => {
    if (s2ToArr.includes(item)) {
      letterCount += 1;
      s2ToArr.splice(s2ToArr.indexOf(item), 1);
    }
  });
  return letterCount;
}

module.exports = {
  getCommonCharacterCount
};
