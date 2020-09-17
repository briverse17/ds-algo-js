/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Exponential search algorithm
*/

/**
 * 
 * @param {any} array 
 * @param {any} value 
 */
let jump_search = (array, value) => {
    let step = Math.floor(Math.sqrt(array.length));

    let lower = 0;

    while (array[Math.min(step, array.length) - 1] < value) {
        lower = step;
        step = -~step;

        if (lower >= array.length) {
            return -1;
        }
    }

    let upper = Math.min(step, array.length);

    while (array[lower] < value) {
        lower++;

        if (lower === upper) {
            return -1;
        }

    }

    if (array[lower] === value) {
        return lower;
    }

    return -1;
};

/**
 * Add method isSorted to array prototype
 * @returns true if array is sorted and false for the opposite case
 */
Array.prototype.is_sorted = function () {
    const length = this.length;
    for (let i = 0; i < length - 1; i++) {
        if (this[i] > this[i + 1]) {
            return false;
        }
    }
    return true;
};

Array.prototype.jump_searching = function (value) {

    // check array is sorted?
    if (this.is_sorted() == true){
        return jump_search(this, value);
    } else {
        console.log(this.is_sorted());
        this.sort();
        console.log("fuck js");
        return jump_search(this, value);
    }
};

// ================================================
// Modules export
// ================================================
module.exports = {
    JumpSearch: jump_search
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

