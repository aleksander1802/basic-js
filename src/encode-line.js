const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let num = 0;
  let string = str.split('');

  for (let i = 0; i < string.length; i++) {
    
    if (string[i] === string[i + 1]) {
      num += 1
    } else {
      num += 1
      arr.push(num, string[i])
      num = 0 
    }
    
  }
  
  return arr.filter(item => item !== 1).join('')
}




module.exports = {
  encodeLine
};
