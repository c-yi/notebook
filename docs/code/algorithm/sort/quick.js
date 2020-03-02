const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(800000);
//console.log(arr);
console.time('quick');
const quick = (arr) => {
    if (arr.length <= 1) {return arr}
    let base = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= base) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quick(left).concat(base, quick(right))
};
let n= quick(arr);
console.timeEnd('quick');
console.log(n);
