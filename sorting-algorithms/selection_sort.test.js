// Import module from selection_sort.js
const sort = require('./selection_sort');

let selection_sort = sort.SelectionSort;

test('Test case 00 for selection sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    selection_sort(arr);
    expect(selection_sort(arr)).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});