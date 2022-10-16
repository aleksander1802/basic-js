const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  
  let arr1 = [...array]
  let arr = [];

  arr.push(arr1[0])
  
  for (let i = 1; i < arr1.length; i++) {
    
    for (let j = 0; j < arr1[i].length; j++) {
      
       if (arr1[i-1][j] !== 0 ) {
       arr.push(arr1[i][j])
       
      }
      
    }
  }
  return arr.flat().reduce((a, b) => a + b)
}

//console.log(getMatrixElementsSum(matrix = [[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]]))

module.exports = {
  getMatrixElementsSum
};
