/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Insertion sort algorithm
*/

const insertion_sort = function(array) {
    let saved;

    for (let i = 1; i < array.length; i++) {
        saved = array[i];

        let j;

        for (j = i; j > 0 && saved < array[j - 1]; j--){

            array[j] = array[j - 1];
        }

        array[j] = saved;
    }
};

module.exports = {
    InsertionSort: insertion_sort
};

let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];

console.log('Array before sorting: ' + arr);
insertion_sort(arr);
console.log('Array after sorting: ' + arr);