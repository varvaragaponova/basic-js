const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'}) {
  let additionString = String(addition);
  let strToString = String(str);
  let string = [];

  if (repeatTimes === 1) {
    string.push(strToString);
  } else {
    for (let y = 0; y < repeatTimes; y++) {
      string.push(strToString);
    }
  }

  if (additionString === 'undefined') return string.join(separator);

  let additionPlus = '';

  return string.map(item => {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (additionRepeatTimes === 1) {
        additionPlus = additionString;
      } else if (i === additionRepeatTimes - 1) {
        additionPlus += additionString;
      } else {
        additionPlus += additionString + additionSeparator;
      }
      item = item + additionPlus;
      additionPlus = '';
    }
    return item;
  }). join(separator);
}

module.exports = {
  repeater
};
