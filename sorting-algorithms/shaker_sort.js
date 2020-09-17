/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Shaker sort algorithm
*/

const shaker_sort = function(array) {
    let surface = 0;

    let bottom = array.length - 1;

    let count = array.length - 1;


    while (surface < bottom) {
        for (let j = bottom; j >= surface + 1; j--){
            if (array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                count = j;
            }
        }

        surface = count;

        for (let j = surface; j <= bottom - 1; j++){
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                count = j;
            }
        }

        bottom = count;
    }

};


Array.prototype.shaker_sort = function () {
    shaker_sort(this);
};


module.exports = {
    ShakerSort: shaker_sort
}
// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020