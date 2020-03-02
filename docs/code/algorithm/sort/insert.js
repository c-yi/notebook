const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(80000);
console.log(arr);
console.time('insert');
let insertIndex;
let insertValue;
for (let i = 1; i < arr.length; i++) {
    insertValue = arr[i];// 此次要插入的值
    insertIndex = i - 1;// 最开始要比较的索引
    //1. insertIndex >= 0 在索引范围类
    //2. insertValue < arr[insertIndex] 要插入的值小于比较的值
    while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
        // 比较的值向后移一位,因为要插入的值已经用 insertValue 变量保存起来了,不用担心被覆盖
        arr[insertIndex + 1] = arr[insertIndex];
        //要比较的索引向前-1
        insertIndex--
    }
    // 插入的值大于比较的值 ,就在比较的值后,插入
    arr[insertIndex + 1] = insertValue
}
console.timeEnd('insert');

console.log(arr);
