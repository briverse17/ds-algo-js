// Import module from bubble_sort.js
const sort = require('./bubble_sort');

let bubble_sort = sort.BubbleSort;

let alternative_bubble_sort = sort.AlternativeBubbleSort;

test('Test case 00 for bubble sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    bubble_sort(arr)
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});

test('Test case 01 for bubble sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    alternative_bubble_sort(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});