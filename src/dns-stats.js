const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};

  return domains.reduce((acc, item) => {
    const domainsSplitted = item.split('.').reverse();

    domainsSplitted.reduce((sum, el) => {
      const domain = `.${el}`;
      sum += domain;
      acc[sum] = acc[sum] ? acc[sum] + 1 : 1;
      return sum;
    }, '');

    return acc;
  }, {});
}

module.exports = {
  getDNSStats
};
