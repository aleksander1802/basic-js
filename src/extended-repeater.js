const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {  

  let repeatTimes = obj.repeatTimes ? obj.repeatTimes : obj.repeatTimes = 1;
  let addition = obj.addition === null ? obj.addition = 'null' : obj.addition ? obj.addition : obj.addition === false ? obj.addition === 'false'   :  obj.addition = '';
  let separator = obj.separator ? obj.separator : obj.separator = '+';
  let additionRepeatTimes = obj.additionRepeatTimes ? obj.additionRepeatTimes : obj.additionRepeatTimes = 1;
  let additionSeparator = obj.additionSeparator ? obj.additionSeparator : obj.additionSeparator = '|';  
  
  let stringAddition = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    stringAddition.push(addition)
  }

  stringAddition = stringAddition.join(additionSeparator);  

  separator = stringAddition + separator 

  let stringAdditionSeparator = [];

  for (let i = 0; i < repeatTimes; i++) {
    stringAdditionSeparator.push(String(str))
  }

  stringAdditionSeparator = stringAdditionSeparator.join(separator)    

  return stringAdditionSeparator + stringAddition

}

//console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));


module.exports = {
  repeater
};
