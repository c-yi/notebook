const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        //arr.push(Math.floor(Math.random() * n))
        arr.push(2 * i + 2)
    }
    return arr;
};
let arr = createArray(80000);
console.log(arr);

const find = (arr, findVal, low = 0, high = arr.length - 1) => {
    //let mid = Math.floor((low + high)/2); 二分查找
    let mid = Math.floor(low + ((findVal - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (low > high || findVal < arr[0] || findVal > arr[arr.length - 1]) {
        console.log('mid 越界');
        return
    }

    if (findVal > arr[mid]) {
        find(arr, findVal, mid, high)
    } else if (findVal < arr[mid]) {
        find(arr, findVal, low, mid)
    } else if (findVal === arr[mid]) {
        console.log('索引为' + mid);
    } else {
        console.log('不存在');
    }
};


console.time('插值查找');
find(arr, 178);
console.timeEnd('插值查找');
