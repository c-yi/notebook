 const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};

let flag = false;
let arr = createArray(80000);
console.time('bubble');
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            flag = true;
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
    }
    if (!flag) {
        break
    } else {
        flag = false
    }
}
console.timeEnd('bubble');

console.log(arr);
