// 8 X 8 棋盘中每行只能有一个皇后,不能出现在同列同斜线上有92中摆法!

let arr = [];
let max = 8;
// 放置第n个皇后
let count = 0;
const check = (n) => {
    if (n === max) {// 如果已经放到第max个了,就说明这个已经放置成功了
        count++;
        console.log(arr.join(',').replace(/,/g, ' '));
        return;
    }
    // 依次放入皇后判断是否冲突
    for (let i = 0; i < max; i++) {
        // 把当前皇后 n , 放在该行第 i 列
        arr[n] = i;
        // 判断当放置当前这个皇后到第n列时是否冲突
        if (judge(n)) {// 如果不冲突就放n+1个皇后
            check(n + 1)
        }
        // 否则就尝试下一列 是否合理
        // =========
        // 当第一次满足所有状态之后就会在第8行尝试第二种状态

    }
};
// 判断检测n皇后与前面几个皇后是否冲突 所以是i<n
const judge = (n) => {
    for (let i = 0; i < n; i++) {
        // 判断皇后所在的位置是否合理
        // arr[i] === arr[n]  判断是否在同一列
        // Math.abs(n - i) === Math.abs(arr[n] - arr[i] 判断是否在同一斜线 (列-列 ===行-行)
        if (arr[i] === arr[n] || Math.abs(n - i) === Math.abs(arr[n] - arr[i])) {
            return false
        }
    }
    return true
};

check(0);
console.log(count);
