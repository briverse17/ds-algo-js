const search = require('./sequential_search');

let linear_searching = search.LinearSearch;

let recursive_linear_searching = search.RecursiveLinearSearch;

test('Testing for linear search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(linear_searching(test_arr, 30)).toBe(12);
});

test('Testing for linear search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recursive_linear_searching(test_arr, test_arr.length, 30)).toBe(12);
});

test('Testing for linear search using iterative approach', () => {
    let my_colors = [
        'blue',
        'red',
        'green',
        'yellow'
    ];

    expect(linear_searching(my_colors, 'red')).toBe(1);
});

