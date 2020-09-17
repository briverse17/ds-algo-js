
// Packages declaration (if needed)
// ================================================
const sort = require('./interchange_sort');
// ================================================

// Toy data declaration (if needed)
// ================================================
let interchange_sort = sort.InterchangeSort;
// ================================================


// Start testing
// ================================================
test('Test case 00 for interchange sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    interchange_sort(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});

test('Test case 00 for interchange sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    arr.interchange_sort();
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});
// End testing
// ================================================


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020