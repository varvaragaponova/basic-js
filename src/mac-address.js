const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nToArr = n.split('');
  let arr = [];
  const alphabet = ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	nToArr.forEach(item => {
  	alphabet.forEach(elem => {
    	for (let i = 0; i < alphabet.length; i++) {
  			if (item === elem[i]) {
        	arr.push(item);
        } else {
        	continue;
        }
    	}
    })
  })
	if (arr.length > 0) return false;
  return true;
}

module.exports = {
  isMAC48Address
};
