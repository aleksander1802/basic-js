const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  
  let string =  str.split('@')[1];

  return string.includes('.un') ? string.replace('.un', '') : string

}

//console.log(getEmailDomain('prettyandsimple@.example.com'));

module.exports = {
  getEmailDomain
};
