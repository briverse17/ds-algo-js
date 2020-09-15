/**
 * Thuật toán tìm kiếm nhị phân (binary search)
 */

// Khởi tạo một mảng demo
let arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];


let recursive_binary_search = function (array, low, high, value) {
    if (low > high) { return false; }

    else {
        let middle = Math.floor((low + high) / 2);

        if (array[middle] === value) {
            return true;
        }

        if (array[middle] > value) {
            return recursive_binary_search(array, low, middle - 1, value);
        }

        if (array[middle] < value) {
            return recursive_binary_search(array, middle + 1, high, value);
        }
    }

};

let binary_search = function (array, low, high, value) {

    if (low > high) { return -1; }

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (array[middle] === value) {
            return middle;
        }

        if (array[middle] > value) {
            high = middle - 1;
        }

        if (array[middle] < value) {
            low = middle + 1;
        }
    }

    return - 1;
};

console.log(binary_search(arr, 0, arr.length - 1, 30));
console.log(recursive_binary_search(arr, 0, arr.length - 1, 30));

Array.prototype.binary_searching = (value) => {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (this[middle] === value) {
            return true;
        }

        if (this[middle] > value) {
            high = middle - 1;
        }

        if (this[middle] < value) {
            low = middle + 1;
        }
    }

    return false;
};

console.log(arr.binary_searching(30));

console.log(lmao(arr, 30, 0, arr.length - 1));