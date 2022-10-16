const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(num) {
    let number = [];
    
    let strNum = num.toString().split('');
    for (let i = 0; i < strNum.length; i++) {
      
    let str = [...strNum]
      str.splice(i, 1)
       
      number.push(str.join(''))
      
     }
     return Math.max(...number)
    
}




module.exports = {
  deleteDigit
};
