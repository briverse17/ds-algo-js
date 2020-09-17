// Import module from insertion_sort.js
const sort = require('./insertion_sort');

let insertion_sort = sort.InsertionSort;

test('Test case 00 for selection sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    insertion_sort(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});