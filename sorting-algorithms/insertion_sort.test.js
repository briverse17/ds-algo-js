
// Packages declaration (if needed)
// ================================================
const sort = require('./insertion_sort');
// ================================================

// Toy data declaration (if needed)
// ================================================
let insertion_sort = sort.InsertionSort;
// ================================================


// Start testing
// ================================================
test('Test case 00 for selection sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    insertion_sort(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});

// End testing
// ================================================




// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020