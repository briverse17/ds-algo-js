
// Packages declaration (if needed)
// ================================================
const sort = require('./bubble_sort');
// ================================================


// Toy data declaration (if needed)
// ================================================
let bubble_sort = sort.BubbleSort;

let bubble_sort2 = sort.BubbleSort2;

let alternative_bubble_sort = sort.AlternativeBubbleSort;
// ================================================


// Start testing
// ================================================
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

test('Test case 02 for bubble sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    bubble_sort2(arr);
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});


test('Test case 03 for bubble sort', () => {
    let arr = [23, 17, 97, 44, 35, 10, 12, 8, 5, 78];
    arr.bubble_sort();
    expect(arr).toEqual([ 5,  8, 10, 12, 17, 23, 35, 44, 78, 97]);
});

// End testing
// ================================================



// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020