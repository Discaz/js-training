'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
// function jadenCase (string){
//   const words = string.split(' ');
  
//   for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//   const jaden = words.join(' ')
//   console.log(jaden)
//   return jaden; 
  
//   };
  
  

// //* Begin of tests
// const assert = require('assert')

// assert.strictEqual(jadenCase('salut olivier comment va?'), 'Salut Olivier Comment Va?')
// assert.fail('You must write your own tests')
// // End of tests */

function jadenCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
      let firstLetterSplit = words[i].split('');
      firstLetterSplit[0] = firstLetterSplit[0].toUpperCase();
      words[i] = firstLetterSplit.join('');
  }
  words = words.join(' ');
  return words;
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('how are you ?'), 'How Are You ?');