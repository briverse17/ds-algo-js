let arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

let jump_search = (array, value) => {
    let step = Math.floor(Math.sqrt(array.length));

    let lower = 0;

    while (array[Math.min(step, array.length) -1] < value) {
        lower = step;
        step = -~step;

        if (lower >= array.length) {
            return -1;
        }
    }

    let upper = Math.min(step, array.length) 
    while(array[lower] < value) {
        lower++;

        if (lower === upper){
            return -1;
        }

    }

    if (array[lower] === value) {
        return lower;
    }

    return -1;
};

console.log(jump_search(arr, 30));