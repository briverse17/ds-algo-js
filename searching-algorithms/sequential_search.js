/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Binary search algorithm
*/

// Functions definition
// ================================================
/**
 * linear searching with for loop (iterative)
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
 * linear searching with no for loop (recursive)
 * @param {any} array 
 * @param {number} array_size 
 * @param {any} value 
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

/**
 * In short implement for recursive approach using ternary operator
 * @param {any} array 
 * @param {number} array_size 
 * @param {value} value 
 * @returns 
 */
function func(array, array_size, value) {
    return (array_size > 0) ? ((array[array_size] === value) ? array_size : func(array, array_size - 1, value)) : -1;
}


/**
 * Add method linear_searching to array prototype
 * @param {any} value 
 */
Array.prototype.linear_searching = function (value) { return (linear_search(this, value) == -1) ? false : true; };

// ================================================
// Modules export
// ================================================
module.exports = {
    LinearSearch: linear_search,
    RecursiveLinearSearch: recursive_linear_search,
    Simple: func
};

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
