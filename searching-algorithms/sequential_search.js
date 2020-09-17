/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Binary search algorithm
*/

// Create an array
let test_arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

let my_colors = [
    'blue',
    'red',
    'green',
    'yellow'
];

/**
 * linear searching with for loop
 * @param {Array} array 
 * @param {any} value 
 * @returns
 */
function linear_search(array, value) {
    // We use a for loop, start at the begin of the array (index = 0), end at the end of the array (index == array.length - 1)
    for (let i = 0; i < array.length; ++i) {
        // Check the value of each element in the array, if it equals to value, return its index (i)
        if (array[i] === value) {
            return i;
        }
    }

    /*
        let i = 0;

        while (i < array.length - 1) {
            if (array[i] === value){
                return i;
            }
        }

        return -1;
    */

    return -1; // return -1 if the array not contain the value
}

/**
 * 
 * @param {*} array 
 * @param {*} array_size 
 * @param {*} value 
 * @returns 
 */
function recursive_linear_search(array, array_size, value) {
    if (array_size < 0) {
        return -1;
    } else {
        if (array[array_size] === value) {
            return array_size;
        } else {
            return recursive_linear_search(array, array_size - 1, value);
        }
    }
}

// Test
// console.log("Looking for 30: " + recursive_linear_search(test_arr, test_arr.length - 1, 30));
// console.log("Looking for 221: " + recursive_linear_search(test_arr, test_arr.length - 1, 221));
// console.log("Looking for red color in colors array: " + (linear_search(my_colors, 'red') == 1 ? 'yes' : 'no'));

/**
 * 
 * @param {*} array 
 * @param {*} array_size 
 * @param {*} value 
 * @returns 
 */
function func(array, array_size, value) {
    return (array_size > 0) ? ((array[array_size] === value) ? array_size : func(array, array_size - 1, value)) : -1;
}

// Test
// console.log("Looking for 30: " + func(test_arr, test_arr.length, 30));


/**
 * 
 * @param {*} value 
 */
Array.prototype.linear_searching = function (value) { return (linear_search(this, value) == -1) ? false : true; };

// Test
// console.log("Looking for -1: " + test_arr.linear_searching(-1));

// ================================================
// Modules export
// ================================================
module.exports = {
    LinearSearch: linear_search,
    RecursiveLinearSearch: recursive_linear_search
}

// ================================================
// Driver code (if needed)
// ================================================
const run = async () => {

    // Coding something here :v

};


// run();

// ================================================
/**
 * Authors: Nhut-Nam Le & Minh-Vu Nguyen
 * VNU-HCM, University of Science
 * © 2020
 */
