
// Packages declaration (if needed)
// ================================================
const sort = require('./shaker_sort');

// Toy data declaration (if needed)
// ================================================
let shaker_sort = sort.ShakerSort;

// Start testing
// ================================================
test('Test case 00 for shaker sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    shaker_sort(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});


test('Test case 01 for shaker sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    arr.shaker_sort();
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});


// End testing
// ================================================


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020