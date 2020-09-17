/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Exponential search algorithm
*/

/**
 * Binary Search
 * @param {any} array 
 * @param {number} low 
 * @param {number} high 
 * @param {any} value 
 */    
let binary_search = function (array, low, high, value) {

    if (low > high) { return -1; }

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (array[middle] === value) {
            return middle;
        }

        if (array[middle] > value) {
            high = middle - 1;
        }

        if (array[middle] < value) {
            low = middle + 1;
        }
    }

    return -1;
};

/**
 * 
 * @param {any} array is the input array
 * @param {any} value is thing need to find in the array
 * @returns the value's index in array. Otherwise, -1 is returned if the array does not contain the lookup value
 */
let exponential_search = (array, value) => {
    // Step 01: Check the first element in the array
    if (array[0] === value) {
        return 0;
    }

    let i = 1;

    while (i < array.length && array[i] <= value) {
        i *= 2;
    }

    // Use binary search
    return binary_search(array, i / 2, Math.min(i, array.length), value);
};

// ================================================
// Modules export
// ================================================
module.exports = {
    BinarySearch: binary_search,
    ExponentialSearch: exponential_search
};

// Driver code (if needed)
// ================================================
const run = async () => {

};

// ================================================
/**
 * Authors: Nhut-Nam Le & Minh-Vu Nguyen
 * VNU-HCM, University of Science
 * © 2020
 */