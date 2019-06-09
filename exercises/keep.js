'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (string) => {
    return string.slice(0 , 2)
}
const keepLast = (string) => {
    return string.slice(-3, -1)
}
const keepFirstLast = (string) => {
    return string.slice(2, 4)
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(keepFirst('bonsoir'), 'bo')
assert.strictEqual(keepLast('bonsoir'), 'ir')
assert.strictEqual(keepFirstLast('bonsoir'), 'so')
assert.fail('You must write your own tests')
// End of tests */
