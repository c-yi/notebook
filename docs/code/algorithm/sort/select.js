const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(80000);
console.log(arr);
let min;
let minIndex;
console.time('select');

for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (min > arr[j]) {
            flag = true;
            min = arr[j];
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
console.timeEnd('select');
console.log(arr);
