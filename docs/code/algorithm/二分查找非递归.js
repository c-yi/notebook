let arr = [1, 3, 7, 55, 89, 100];

/**
 * 非递归二分查找
 * @param arr 有序数组
 * @param tar 目标值
 * @returns {number} 返回索引,未找到返回 -1;
 */
function binarySearch(arr, tar) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    while (left < right) {
        if (arr[mid] === tar) {
            return mid;
        } else if (arr[mid] > tar) {
            right = mid;
            mid = Math.floor(right / 2)
        } else if (arr[mid] < tar) {
            left = mid;
            mid = Math.floor((right - left) / 2) + left
        }
    }
    return -1;
}

const index = binarySearch(arr, 89);
console.log(index);

