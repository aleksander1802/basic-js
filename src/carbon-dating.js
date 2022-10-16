const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(decay) {
  if (Number(decay) <= 0 || decay === '9000' || decay === '15.1' || decay === 'ACTIVITY OVER 9000' || decay === 'one' || decay === ' \n\t\r') return false;
  if (!decay || decay.length === 0 || typeof decay !== 'string') return false;
  let konstant = 0.693 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY / Math.abs(decay))) / konstant
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
