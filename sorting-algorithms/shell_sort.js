/**
 * DATA STRUCTURES AND ALGORITHMS IMPLEMENTATION IN JAVASCRIPT
 * Shell sort algorithm
*/

// constant gaps array (Using Marcin Ciura's gap sequence)
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

/**
 * 
 * @param {any} array 
 */
const shell_sort = function (array) {
   gaps.forEach((gap) => {
       for (let i = gap; i < array.length; i++){
           let temp = array[i];

           for (var j = i; j >= gap && array[j - gap] > temp; j -= gap){
               array[j] = array[j - gap];
           }

           array[j] = temp;
       }
   });
};



// ================================================
// Module export
module.exports = {
    ShellSort: shell_sort
};
// ================================================






// ================================================
// Authors: Nhut-Nam Le & Minh-Vu Nguyen
// VNU-HCM, University of Science
// © 2020