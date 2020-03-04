const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};
let arr = createArray(8000000);
//console.log(arr);

/**
 * 调整
 * @param i 当前索引
 * @param length 还未调整数组的长度
 */
const adjust = (i, length) => {
    const temp = arr[i];
    // let k 左子节点下标
    for (let k = 2 * i + 1; k < length; k = 2 * k + 1) {
        if (k + 1 < length && arr[k] < arr[k + 1]) {
            k++
        }
        if (arr[k] > temp) { // 如果子节点大于父节点
            arr[i] = arr[k]; // 把较大的值赋值给当前节点
            i = k;
        } else {
            break
        }
    }
    arr[i] = temp;
};

const heapSort = () => {
    // 这个for循环是按照 倒数第二层往上找,逐渐形成大顶堆的过程
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        adjust(i, arr.length)
    }
    // 如果有10个数,只用调整9次,最后一个数,一定会在前面 ,所以是let j = arr.length - 1;
    for (let j = arr.length - 1; j > 0; j--) {
        //进行交换
        // 最大数放在后面
        [arr[0], arr[j]] = [arr[j], arr[0]];
        // 再次进行调整
        adjust(0, j)
    }
};

console.time('heap');
heapSort();
console.timeEnd('heap');
console.log(arr);
