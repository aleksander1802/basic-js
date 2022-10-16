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
function getDNSStats(array) {
  
  let arr = [];
  let obj = {}

  let reverseArray = array.map(item => item.split('.').reverse());

  for (let i = 0; i < reverseArray.length; i++) {
    let str = '';
    for (let j = 0; j < reverseArray[i].length; j++) {
      arr.push((str += '.' + reverseArray[i][j]));
    }
  }

  arr.forEach(item => {
    return obj[item] ? obj[item]++ : obj[item] = 1
  })

  return obj
}


module.exports = {
  getDNSStats
};
