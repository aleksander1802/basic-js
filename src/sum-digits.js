const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  
  let number = [...num.toString()]
  
  let sum = number.reduce((a, b) => +a + +b) //

  for (let i = 0; i < number.length; i++) {

    if (sum > 9) {
      sum = sum.toString().split('').reduce((a, b) => +a + +b)
    } else {
      return sum
    }

  }
  
}

//console.log(getSumOfDigits(935645456521));

module.exports = {
  getSumOfDigits
};
