const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

    // if (this.string == undefined || this.key == undefined) {
    //   throw new Error('Incorrect arguments!')
    // }
const  repeatKeyLength = (key, string) => { //функция повторит наш ключ (удвоит, утроит и т.д.) длина ключа === длина строки
  let resultString = "";
    
  let firstStringLength = key.length;
  let it = 0;
    for (let i = 0; i < string.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += key[it];
        it++;
    }
    return resultString.toUpperCase();
}    

class VigenereCipheringMachine {

  constructor (direction = true) {
    this.direction = direction; 
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';    
  }

  encrypt(string, key) {
    this.string = string;
    this.key = key; 
    
    if (this.string == undefined || this.key == undefined) {
      throw new Error('Incorrect arguments!')
    }
  
  let upperString = this.string.toUpperCase(); // наша строка в верхнем ATTACK AT DAWN!
  
  let thisKey = this.key; // наш ключ в переменной thisKey

  let upperKeyLong = repeatKeyLength(thisKey, upperString)
     
  let encryptArray = []
  let mod = 0
    
  let length = upperString.length;

    for (let i = 0; i < length; i++) {

      if (this.alphabet.includes(upperString[i])) {

        
        let position = this.alphabet.indexOf(upperString[i]) + this.alphabet.indexOf(upperKeyLong[mod]);
        position = position > 25 ? position - 26 : position;
        mod += 1;
        
        encryptArray.push(this.alphabet[position]) 
      }  

      if (!this.alphabet.includes(upperString[i])) {
        encryptArray.push(upperString[i])
      }
      
    }
    
    let encryptKey = this.direction ? encryptArray.join('') : encryptArray.reverse().join("");    
    console.log(encryptKey);
    return encryptKey
  }


  decrypt(string, key) {
    this.string = string;
    this.key = key;
    
    if (this.string == undefined || this.key == undefined) {
      throw new Error('Incorrect arguments!')
    }
    let upperString = string.toUpperCase();
    let thisKey = key;

    

    let upperKeyLong = repeatKeyLength(thisKey, upperString)
    

    let decryptArray = []
    let mod = 0
    
    let length = upperString.length;
  
    for (let i = 0; i < length; i++) {
      

      if (this.alphabet.includes(upperString[i])) {
        let position = this.alphabet.indexOf(upperString[i]) - this.alphabet.indexOf(upperKeyLong[mod]);
        
        position = position < 0 ? 26 - Math.abs(position) : position;
        mod += 1;

        

        decryptArray.push(this.alphabet[position]) 
      }  
      if (!this.alphabet.includes(upperString[i])) {
        decryptArray.push(upperString[i])
      }
      
    }
    
    let decryptKey = this.direction ? decryptArray.join('') : decryptArray.reverse().join("");
    
    console.log(decryptKey);
    return decryptKey

    
    
  }
  
}

const directMachine = new VigenereCipheringMachine();

directMachine.encrypt('attack at dawn!', 'alphonse') 
 
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') 



module.exports = {
  VigenereCipheringMachine
};



