const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(8000000);
//let arr = [8, 17, 125];
//console.log(arr);
let bucket = [];
for (let i = 0; i < 10; i++) {
    bucket[i] = []
}
const radix = (arr, n) => {
    let temp = [];
    for (let mod = 0; mod < n; mod++) {
        for (let i = 0; i < arr.length; i++) {
            let sub = (Math.floor(arr[i] / Math.pow(10, mod))) % 10;
            bucket[sub].push(arr[i])
        }
        for (let i = 0; i < 10; i++) {
            temp = [...temp, ...bucket[i]];
            bucket[i] = []
        }
        arr = temp;
        temp = []
    }
    return arr;
};


console.time('radix');
const res = radix(arr, 7);
console.log(res);

console.timeEnd('radix');
