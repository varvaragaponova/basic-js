const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position > this.chains.length || position <= 0 || !parseInt(position) || position % 1 !== 0) {
      this.chains = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chains.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.map((el) => {
      return `( ${el} )`;
    }).join('~~');
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
