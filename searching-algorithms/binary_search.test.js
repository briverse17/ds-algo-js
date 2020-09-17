const search = require('./binary_search');

let binary_search = search.BinarySearch;

let recurive_binary_search = search.RecursiveBinarySearch;

test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, 30)).toBe(12);
});

test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, 30)).toBe(12);
});


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020