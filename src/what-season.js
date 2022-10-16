const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments[0] === undefined) {
    return 'Unable to determine the time of year!';
  }

  let errorMessage = Date.parse(date).toString().slice(0, 10) === Date.now().toString().slice(0, 10) || isNaN(Date.parse(date))
  || typeof date === 'string' || Date.parse(date).toString().length < 10 || Array.isArray(date);
  
    if (errorMessage) {
      throw new Error('Invalid date!')
    }

    
    
    

    let month = date.getMonth(); 

    if (month === 0 || month ===1 || month ===11) {
      
      return 'winter'
    }
    if (month === 2 || month ===3 || month ===4) {
      return 'spring'
    }
    if (month === 5 || month ===6 || month ===7) {
      return 'summer'
    }
    if (month === 8 || month ===9 || month ===10) {
      return 'autumn'
    }

    }; 

//console.log(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)));

module.exports = {
  getSeason
};
