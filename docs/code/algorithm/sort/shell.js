const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(8000000);
console.log(arr);
console.time('shell');
//grp 是分为几个组,也相当于步长 '插入法'
/*for (let grp = parseInt((arr.length / 2)); grp > 0; grp = parseInt((grp / 2))) {
    for (let i = grp; i < arr.length; i++) {// 每一组的循环
        for (let j = i - grp; j >= 0; j -= grp) {// 组内循环
            if (arr[j] > arr[j + grp]) {
                [arr[j], arr[j + grp]] = [arr[j + grp], arr[j]];
            }
        }
    }
}*/
//'移位发'
for (let grp = parseInt((arr.length / 2)); grp > 0; grp = parseInt((grp / 2))) {
    for (let i = grp; i < arr.length; i++) {// 每一组的循环
        insertValue = arr[i];// 此次要插入的值
        insertIndex = i;// 最开始要比较的索引
        //1. insertIndex >= 0 在索引范围类
        //2. insertValue < arr[insertIndex] 要插入的值小于比较的值

        while (insertIndex - grp >= 0 && insertValue < arr[insertIndex - grp]) {
            // 比较的值向后移一位,因为要插入的值已经用 insertValue 变量保存起来了,不用担心被覆盖
            arr[insertIndex] = arr[insertIndex - grp];
            //要比较的索引向前-1
            insertIndex -= grp
        }

        // 插入的值大于比较的值 ,就在比较的值后,插入
        arr[insertIndex] = insertValue
    }
}
console.timeEnd('shell');
console.log(arr);
