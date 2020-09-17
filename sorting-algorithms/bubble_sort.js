/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Bubble sort algorithm
*/

/**
 * 
 * @param {any} array 
 */
const bubble_sort = function (array) {

    for (let i = 0; i < array.length - 2; i++) {

        for (let j = array.length - 1; j >= i + 1; j--) {

            if (array[j] < array[j - 1]) {

                [array[j], array[j - 1]] = [array[j - 1], array[j]];

            }
        }
    }
};


const bubble_sort_ver2 = function (array) {
    for (let i = array.length - 2; i >= 0; i--) {

        for (let j = array.length - 1; j > 0; j--) {

            if (array[j] < array[j - 1]) {

                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
};

const bubble_sort_ver3 = function (array) {
    let swapped = true;

    while (swapped) {

        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {

                [array[i], array[i + 1]] = [array[i + 1], array[i]];

                swapped = true;
            }
        }
    }
};


Array.prototype.bubble_sort = function () {
    let swapped = true;

    while (swapped) {

        swapped = false;

        for (let i = 0; i < this.length - 1; i++) {

            if (this[i] > this[i + 1]) {

                [this[i], this[i + 1]] = [this[i + 1], this[i]];

                swapped = true;
            }
        }
    }
};


module.exports = {
    BubbleSort: bubble_sort,
    AlternativeBubbleSort: bubble_sort_ver3
};


let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];

console.log('Array before sorting: ' + arr);
bubble_sort_ver3(arr);
console.log('Array after sorting: ' + arr);