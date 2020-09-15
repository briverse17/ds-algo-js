let arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

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

let exponential_search = function (array, value) {
    if (array[0] === value) {
        return 0;
    }

    let i = 1;
    while (i < array.length && array[i] <= value) {
        i *= 2;
    }

    return binary_search(array, i / 2, Math.min(i, arr.length), value);
};

console.log(exponential_search(arr, 30));