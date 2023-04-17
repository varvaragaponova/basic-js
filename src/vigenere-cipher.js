const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    isBasicDirection;
    vigenereTable = [];

    constructor(isBasicDirection = true) {
      this.isBasicDirection = isBasicDirection;
    }

    generateTable() {
      for (let i = 0; i < this.alphabet.length; i++) {
        this.vigenereTable[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
      }
    }

    encrypt(word, key) {
      if (!word || !key) {
        throw new Error('Incorrect arguments!');
      }
      this.generateTable();
      let result = '';
      const newWord = word.toUpperCase();
      const newKey = key.padEnd(newWord.length, key).toUpperCase();
      let skips = 0;

      for (let i = 0; i < newWord.length; i++) {
        if (this.alphabet.indexOf(newWord[i]) === -1) {
          result += newWord[i];
          skips += 1;
        } else {
          result += this.vigenereTable[this.alphabet.indexOf(newWord[i])][this.alphabet.indexOf(newKey[i - skips])];
        }
      }
      return this.isBasicDirection ? result : result.split('').reverse().join('');
    }

    decrypt(cipher, key) {
      if (!cipher || !key) {
        throw new Error('Incorrect arguments!');
      }
      this.generateTable();
      let result = '';
      const newCipher  = cipher.toUpperCase();
      const newKey = key.padEnd(newCipher.length, key).toUpperCase();
      let skips = 0;

      for (let i = 0; i < cipher.length; i++) {
        if (this.alphabet.indexOf(newCipher[i]) === -1) {
          result += newCipher[i];
          skips += 1;
        } else {
          let row = this.alphabet.indexOf(newKey[i - skips]);
          let cell = this.vigenereTable[row].indexOf(newCipher[i]);
          result += this.alphabet[cell];
        }
      }
      return this.isBasicDirection ? result : result.split('').reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
