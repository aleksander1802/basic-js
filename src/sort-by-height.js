const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let arr = [...array]
  let sort = arr.sort((a, b) => a - b).filter(item => item !== -1)

  

  
   for (let i = 0, index = 0; i < array.length; i++) {
    if (array[i] === -1) continue;

    array[i] = sort[index]
    index+=1
   }

  return array
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight
};
