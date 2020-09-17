// Import modules from binary_search.js
const search = require('./binary_search');

// Declare reference function
let binary_search = search.BinarySearch;

let recurive_binary_search = search.RecursiveBinarySearch;

// ==================================================================
// Testing for binary_search function using iterative approach
// ==================================================================
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

// ==================================================================
// Testing for binary_search function using recursive approach
// ==================================================================
// Test 00
test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, 30)).toBe(12);
});

test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, 22)).toBe(9);
});


test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, 220)).toBe(15);
});


test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, 5)).toBe(1);
});


test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(recurive_binary_search(test_arr, 0, test_arr.length - 1, -16)).toBe(-1);
});

// ==================================================================
// Testing for binary_search function array prototype
// ==================================================================

test('Testing for binary search using recursive approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(test_arr.binary_searching(30)).toBe(true);
});


test('Testing for binary search using iterative approach', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];

    expect(test_arr._binary_searching(30)).toBe(true);
});

// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020