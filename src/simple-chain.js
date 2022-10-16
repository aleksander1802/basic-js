const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
    
  },
  addLink(link) {
    this.chain.push(`( ${link} )`);
    console.log(this);
    return this;

  },
  removeLink(index) {
    let position = index - 1;
    if (!this.chain[position]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position, 1);
      console.log(this);
      return this;
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    console.log(this);
    return this
    
  },
  finishChain() {
    let final = this.chain.join("~~") ;
    this.chain = [];
    return final;
    
  }
};

module.exports = {
  chainMaker
};
