/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Binary search algorithm
*/

// Algorithm requirement: the input array must be a sorted array.

/**If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
 * Otherwise narrow it to the upper half. 
 * Repeatedly check until the value is found or the interval is empty. */

// Create an array
let test_arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

/**
 * Binary search (Recursive Approach)
 * @param {array} 
 * @param {Number} low
 * @param {Number} high
 * @param {any}
 * @returns the index of the value need to find in the array or -1 when it's not found
*/
let recursive_binary_search = function (array, low, high, value) {
    if (low > high) { return -1; }

    else {
        let middle = Math.floor((low + high) / 2);

        if (array[middle] === value) {
            // value found in array => return its index === middle
            return middle;
        }

        if (array[middle] > value) {
            return recursive_binary_search(array, low, middle - 1, value);
        }

        if (array[middle] < value) {
            return recursive_binary_search(array, middle + 1, high, value);
        }
    }

};

/**
 * Binary search (Iterative Approach)
 * @param {Array} array is the input array
 * @param {number} low is the start index 
 * @param {number} high is the end index
 * @param {any} value is the value need to find in the array
 * @returns the index of the value in array or -1 when can not found it in the array
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

    return - 1;
};

// Test
console.log(binary_search(test_arr, 0, test_arr.length - 1, 30));
console.log(recursive_binary_search(test_arr, 0, test_arr.length - 1, 30));

/**
 * Add to Array prototype method
 * @param {any} value is the value need to find in the array
 * @returns the index of the value in array or -1 when can not found it in the array
 */
Array.prototype.binary_searching = (value) => {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (this[middle] === value) {
            return true;
        }

        if (this[middle] > value) {
            high = middle - 1;
        }

        if (this[middle] < value) {
            low = middle + 1;
        }
    }

    return false;
};

/**
 * Add to Array prototype method
 * @param {number} key 
 * @returns true if the key has found in array. Otherwise, return false
 */
Array.prototype._binary_searching = (key) => { return binary_search(this, 0, this.length, key) != -1 ? true : false; };

// Test
console.log(test_arr.binary_searching(30));

// ================================================

// Driver code (if needed)
// ================================================
const run = async () => {

};

// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020
