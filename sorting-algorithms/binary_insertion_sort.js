/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Binary insertion sort algorithm
*/

// Toy help function 
// ================================================
/**
 * Binary search (Iterative Approach)
 * @param {Array} array is the input array
 * @param {number} low is the start index 
 * @param {number} high is the end index
 * @param {any} value is the value need to find in the array
 * @returns the index of the value in array or -1 when can not found it in the array
*/
let binary_search = function (array, low, high, value) {

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (value < array[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};
// ================================================


/**
 * 
 * @param {any} array 
 */
const binary_insertion_sort = function (array) {
   for (let i = 1; i < array.length; i++) {
       let saved = array[i];

       let position = binary_search(array, 0, i - 1, array[i]);

       for (let j = i - 1; j >= position ; j--){
           array[j + 1] = array[j];
       }

       array[position] = saved;
   }
};


/**
 * 
 */
Array.prototype.binary_insertion_sort = function () {
    binary_insertion_sort(this);
};

module.exports = {
    BinaryInsertionSort: binary_insertion_sort
}

// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020