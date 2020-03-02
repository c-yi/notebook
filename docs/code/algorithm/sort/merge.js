const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(8000);
console.log(arr);
const merge = (left, right) => {
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    if (left.length !== 0) {
        res.concat(left)
    } else {
        res.concat(right)
    }
    return res;
};
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);       //求出中点
    let left = arr.slice(0, middle);               //分割数组
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right)); //递归合并与排序
};

console.time('merge');
mergeSort(arr);
console.timeEnd('merge');
