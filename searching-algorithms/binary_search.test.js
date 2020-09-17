const search = require('./binary_search');

let binary_search = search.BinarySearch;

let test_arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

test('Testing for binary search using iterative approach', () => {
    expect(binary_search(test_arr, 0, test_arr.length - 1, 30)).toBe(12);
});