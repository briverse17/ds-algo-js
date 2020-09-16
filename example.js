/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Basic maths operations
 *  - summation
 *  - subtraction
 *  - multiplication
 *  - division
*/

// Packages declaration (if needed)
// ================================================
const readline = require("readline-sync");
const { sleep }  = require("./utils");
// ================================================

// Toy data declaration (if needed)
// ================================================
// Your code here
// ================================================

// Functions definition
// ================================================
/**
 * Add two numbers
 * @param {number} a the first operand
 * @param {number} b the second operand
 * @returns {number} sum - result of a + b
 */
function sum(a, b) {
    let sum = a + b;
    return sum;
}

/**
 * Subtract a number by another
 * @param {number} a minuend
 * @param {number} b subtrahend
 * @returns {number} sub - result of a - b
 */
function sub(a, b) {
    let sub = a - b;
    return sub;
}

/**
 * Multiply a number by another 
 * @param {number} a the first operand
 * @param {number} b the second operand
 * @returns {number} mul - result of a * b
 */
function mul(a, b) {
    let mul = a * b;
    return mul;
}

/**
 * Divide a number by another
 * @param {number} a dividend
 * @param {number} b divisor
 * @returns {number} div - result of a / b
 */
function div(a, b) {
    let div = a / b;
    return div;
}
// ================================================

// Driver code (if needed)
// ================================================
/**
 * A menu to test the implemented functions
 */
async function run() {
    while (true) {
        console.log("Choose the operation you want to test");
        console.log("   1 - Summation");
        console.log("   2 - Subtraction");
        console.log("   3 - Multiplication");
        console.log("   4 - Division");
        console.log("   0 - Exit");
        let n = parseInt(readline.question("Your choice: "));
        if (n < 0 || n > 4) {
            console.log("Invalid input");
            await sleep(1000);
            console.clear();
        }
        else if (n === 0) {
            return;
        }
        else {
            let a = parseInt(readline.question("a = "));
            let b = parseInt(readline.question("b = "));
            switch (n) {
                case 1: console.log("a + b =", sum(a, b)); await sleep(1000); console.clear(); break;
                case 2: console.log("a - b =", sub(a, b)); await sleep(1000); console.clear(); break;
                case 3: console.log("a * b =", mul(a, b)); await sleep(1000); console.clear(); break;
                case 4: console.log("a / b =", div(a, b)); await sleep(1000); console.clear(); break;
                default: break;
            }
        }
    }
}

run();
// ================================================

// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020