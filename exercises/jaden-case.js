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
const jadenCase = (string) => {
  const words = string.split(' ');
  
  for (let i = 0;i < words.lenght; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  return words.join(' ');
  };

  

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('salut olivier'), 'Salut Olivier')
assert.fail('You must write your own tests')
// End of tests */
