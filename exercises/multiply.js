'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */



// Your code :
const multiply = (numb1, numb2) =>{
    if (numb1 === 0 || numb2 ===0) {
        return 0
    } else if (numb1 < 0 && numb2 > 0) {
        numb1 = -numb1
        somme = 0
        while ( i <= numb2) {
            somme = somme + numb1
        }
        somme = -somme
        return somme
    } else if (numb1 > 0 && numb2 < 0) {
        numb2 = -numb2
        somme = 0
        while ( i <= numb2) {
            somme = somme + numb1
        }
        somme = -somme
        return somme
    } else if (numb1 > 0 && numb2 < 0) {
        numb2 = -numb2
        numb1 = -numb1
        somme = 0
        while ( i <= numb2) {
            somme = somme + numb1
        }
        
        return somme
    } else {
        somme = 0
        while ( i <= numb2) {
            somme = somme + numb1
        }
        
        return somme
    }


}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
