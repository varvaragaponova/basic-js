const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let countDepth = [];
    if (!Array.isArray(arr)) return 0;

    arr.forEach(item => {
      countDepth.push(this.calculateDepth(item));
    });

    return Math.max(0, ...countDepth) + 1;
    // return Array.isArray(arr) ?
    // 1 + Math.max(0, ...arr.map(item => this.calculateDepth(item))) :
    // 0;
  }
}

module.exports = {
  DepthCalculator
};
