// Import modules from sequential_search.js
const search = require('./sequential_search');

// Declare reference function
let linear_searching = search.LinearSearch;

let recursive_linear_searching = search.RecursiveLinearSearch;

// Test 00
test('Testing for linear search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    expect(linear_searching(test_arr, 30)).toBe(12);
});

// Test 01
test('Testing for linear search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recursive_linear_searching(test_arr, test_arr.length, 30)).toBe(12);
});

// Test 02
test('Testing for linear search using iterative approach', () => {
    let my_colors = [
        'blue',
        'red',
        'green',
        'yellow'
    ];

    expect(linear_searching(my_colors, 'red')).toBe(1);
});

// Test 03
test('Testing for linear search using iterative approach', () => {
    let my_colors = [
        'blue',
        'red',
        'green',
        'yellow'
    ];

    expect(search.Simple(my_colors, my_colors.length - 1, 'red')).toBe(1);
});


// Test 04
test('Testing for linear search using iterative approach', () => {
    const arr = [2, 3, 4, 10, 40, 65, 78, 100];

    expect(search.Simple(arr, arr.length - 1, 100)).toBe(7);
});

// Test 05
test('Testing for linear search using iterative approach', () => {
    const arr = [2, 3, 4, 10, 40, 65, 78, 100];

    expect(search.Simple(arr, arr.length - 1, 200)).toBe(-1);
});


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020