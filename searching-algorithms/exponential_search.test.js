// Import modules from exponential_search.js
const search = require('./exponential_search');

// Declare reference function
let exponential_search = search.ExponentialSearch;

let binary_search = search.BinarySearch;

// ================================================
// Testing for binary_search function
// ================================================
// Test 00
test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, 30)).toBe(12);
});

// Test 01
test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, 1)).toBe(0);
});

// Test 02
test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, 220)).toBe(15);
});

// Test 03
test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, 22)).toBe(9);
});

// Test 04
test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(binary_search(test_arr, 0, test_arr.length - 1, -10)).toBe(-1);
});

// ================================================
// Testing for exponential_search function
// ================================================
// Test 00
test('Testing for exponential search using binary search iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(exponential_search(test_arr, 30)).toBe(12);
});

// Test 01
test('Testing for exponential search using binary search iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(exponential_search(test_arr, 5)).toBe(1);
});

// Test 02
test('Testing for exponential search using binary search iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(exponential_search(test_arr, 220)).toBe(15);
});


// Test 03
test('Testing for exponential search using binary search iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(exponential_search(test_arr, 22)).toBe(9);
});

// Test 04
test('Testing for exponential search using binary search iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(exponential_search(test_arr, -15)).toBe(-1);
});

// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020