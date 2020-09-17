/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Interchange sort algorithm
*/

/**
 * 
 * @param {any} array 
 */
const interchange_sort = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
};

/**
 * 
 */
Array.prototype.interchange_sort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i; j < this.length; j++) {
            if (this[i] > this[j]) {
                [this[i], this[j]] = [this[j], this[i]];
            }
        }
    }
};


module.exports = {
    InterchangeSort: interchange_sort
};


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020