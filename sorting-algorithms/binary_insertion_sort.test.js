// Packages declaration (if needed)
// ================================================
const sort = require('./binary_insertion_sort');
// ================================================

// Toy data declaration (if needed)
// ================================================
let binary_insertion_sort = sort.BinaryInsertionSort;
// ================================================


// Start testing
// ================================================
test('Test case 00 for binary insertion sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    binary_insertion_sort(arr)
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});


test('Test case 03 for binary insertion sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    arr.binary_insertion_sort();
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});

// End testing
// ================================================


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020