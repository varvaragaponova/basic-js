const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // remove line with error and write your code here
  const logOfTwo = 0.693;
  if (typeof(sampleActivity) === 'string' && Number(sampleActivity)) {
    if (Number(sampleActivity) >= 1 && Number(sampleActivity) <= MODERN_ACTIVITY) {
      const time = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (logOfTwo / HALF_LIFE_PERIOD));
      return time;
    }
    return false;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
