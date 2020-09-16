/**
 * Thuật toán tìm kiếm tuần tự (linear/ sequential search)
 */

// Khởi tạo một mảng demo
let arr = [
    1, 5, 7, 10, 12, 14, 15,
    18, 20, 22, 25, 27, 30,
    64, 110, 220];

 // Hàm tìm kiếm tuần tự sử dụng 1 vòng lặp
 // Tư tưởng: lấy từng phần tử trong mảng đem so sánh với giá trị cần tìm
 // Độ phức tạp thuật toán: O(n)
 function linear_search(array, value) {
    // vòng lặp bắt đầu từ 0 (đầu mảng) và kết thúc ở cuối mảng (length -1)
    for (let i = 0; i < array.length; ++i) {
        // nếu gặp được phần tử trùng với value, hàm trả về vị trí (index) của value trong mảng
        if (array[i] === value){
            return i;
        }
    }
    // Nếu sau vòng lặp trên, mà vẫn chưa tìm được vị trí của value thì ta sẽ trả về một giá trị bất hợp lệ -1
    return -1;
}

// Hàm tìm kiếm tuần tự sử dụng giải thuật đệ quy
function recursive_linear_search(array, array_size, value){
    if (array_size < 0) {
        return -1; // Phần dừng: array_size < 0
    }else {
        if (array[array_size] === value) {
            return array_size; // Phần dừng: phần tử tại array_size có giá trị trùng với giá trị cần tìm
        } else {
            return recursive_linear_search(array, array_size - 1, value); // Phần đệ quy
        }
    }
}

// Test
console.log("Looking for 30: " + recursive_linear_search(arr, arr.length - 1, 30));
console.log("Looking for 221: " + recursive_linear_search(arr, arr.length - 1, 221));

// Viết ngắn gọn hơn bằng toán tử ba ngôi
function func(array, array_size, value) {
    return (array_size > 0) ? ((array[array_size] === value) ? array_size : func(array, array_size - 1, value)) : -1;
}
// Test
console.log("Looking for 30: " + func(arr, arr.length, 30));

// Thêm vào prototype một method linear_searching với một parameter: value - giá trị cần tìm, method này trả về true hoặc false
// Bạn có thể thay thế hàm search trong method này bằng recursive_linear_search
Array.prototype.linear_searching = function(value) { return (linear_search(this, value) == -1) ? false : true; };
// Test
console.log("Looking for -1: " + arr.linear_searching(-1));



