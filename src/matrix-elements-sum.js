const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let result = 0;
  for (let i = 0; i < matrix.length; i++) {
  	if (!matrix[i].includes(0)) {
      result += matrix[i].reduce((acc, item) => acc = acc + item, 0);
    } else {
    	for (let j = 0; j < matrix[i].length; j++) {
      	if (matrix[i][j] === 0 && i !== matrix.length - 1) {
      		result += matrix[i].reduce((acc, e) => acc = acc + e, 0);
          result = result - matrix[i++][j];
          }
  		}
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
