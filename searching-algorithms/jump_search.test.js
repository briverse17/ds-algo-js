// Import modules from sequential_search.js
const search = require('./jump_search');

// Declare reference function
let jump_search = search.JumpSearch;

// Test 00
test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(jump_search(test_arr, 30)).toBe(12);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(jump_search(test_arr, 22)).toBe(9);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(jump_search(test_arr, 18)).toBe(7);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(jump_search(test_arr, 220)).toBe(15);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(jump_search(test_arr, 1)).toBe(0);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(test_arr.jump_searching(30)).toBe(12);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(test_arr.jump_searching(-16)).toBe(-1);
});


test('Testing for jump search', () => {
    let test_arr = [
        1, 5, 7, 10, 12, 14, 15,
        18, 20, 22, 25, 27, 30,
        64, 110, 220];
    
    expect(test_arr.jump_searching(22)).toBe(9);
});


// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020