const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error ("\'arr\' parameter must be an instance of the Array!");
  const commands = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  let arrTransform = arr.slice(0);

  const notIncludes = arrTransform.every(el => !commands.includes(el));

  if (notIncludes) return arrTransform;

  arr.forEach((item, index) => {
    if ((
      (item === commands[0] || item === commands[2]) && index === 0)
      || ((item === commands[1] || item === commands[3]) && index === arr.length - 1)) {
        arrTransform.splice(index, 1);
      } else if (item === commands[0]) {
        if (arrTransform[index - 1] === 'deleted') {
          arrTransform.splice(index - 2, 3);
        } else {
          arrTransform.splice(index - 1, 2);
        }
      } else if (item === commands[1]) {
        if (arrTransform[index + 2].includes('-prev')) {
          arrTransform[index + 1] = 'deleted';
        } else {
          arrTransform.splice(index, 2);
        }
      } else if (item === commands[2]) {
        if (arrTransform[index - 1] === 'deleted') {
          arrTransform.splice(index - 2, 3);
        } else {
          const inserted = arrTransform[index - 1];
          arrTransform.splice(index, 1, inserted);
        }
      } else if (item === commands[3]) {
        const inserted = arrTransform[index + 1];
        arrTransform.splice(index, 1, inserted);
      } else if (item === 'deleted') console.log(1);
  });

  return arrTransform;
}

module.exports = {
  transform
};
