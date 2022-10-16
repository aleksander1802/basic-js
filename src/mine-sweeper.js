const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} array
 * @return {Array<Array>}
 *
 * @example
 * array = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(array) {

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let string = [];

    for (let j = 0; j < array[i].length; j++) {
      let count = 0;

      if(array[i - 1]) { 

        array[i - 1][j - 1]  && array[i - 1][j - 1] ? count += 1 : count; 
        array[i - 1][j] && array[i - 1][j] ? count += 1 : count; 
        array[i - 1][j + 1] && array[i - 1][j + 1] ?  count += 1 : count; 

      }

      array[i][j - 1] && array[i][j - 1] ? count += 1 : count; 

      array[i][j + 1] && array[i][j + 1] ? count += 1 : count;
      

      if(array[i + 1]) {

        array[i + 1][j - 1] && array[i + 1][j - 1] ?  count += 1 : count;
        array[i + 1][j] && array[i + 1][j] ?  count += 1 : count;
        array[i + 1][j + 1] && array[i + 1][j + 1] ?  count += 1 : count;

      }
      
      string.push(count);
      //console.log([array[i][j],[i],[j], count]);  
    }

    result.push(string);
  }

  return result;

  
}

 //console.log(minesweeper(array = [    [true, false, false],  [false, true, false],    [false, false, false]  ]));

module.exports = {
  minesweeper
};
