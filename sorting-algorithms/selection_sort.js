/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Selection sort algorithm
*/

/**
 * 
 * @param {any} array 
 */
const selection_sort = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[ min_index]){
                min_index = j;
            }
        }

        if (array[min_index] < array[i]) {
            [array[i], array[min_index]] = [array[min_index], array[i]];
        }
    }

    return array;
};

/**
 * 
 */
Array.prototype.selection_sort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[ min_index]){
                min_index = j;
            }
        }

        if (this[min_index] < this[i]) {
            [this[i], this[min_index]] = [this[min_index], this[i]];
        }
    }
    
};


module.exports = {
    SelectionSort: selection_sort
};


let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];

console.log('Array before sorting: ' + arr);
selection_sort(arr);
console.log('Array after sorting: ' + arr);

arr.selection_sort();
console.log(arr);