const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    
    if (!Array.isArray(arr)) {
      return 0
    }

    if (Array.isArray(arr)) {
      return arr.reduce((x, y) => Math.max(x, this.calculateDepth(y)), 0) + 1 // x - считакм максимальную глубину, y - элемент рекурсии по которому проходим в данный момент
    }
    
  }
}




module.exports = {
  DepthCalculator
};
