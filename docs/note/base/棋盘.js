let map = [];
for (let i = 0; i < 8; i++) {
    map[i] = [];
    for (let j = 0; j < 7; j++) {
        if (i === 0 || i === 7 || j === 0 || j === 6) {
            map[i][j] = 1
        } else {
            map[i][j] = 0
        }
    }
}
// 添加墙
map[3][1] = 1;
map[3][2] = 1;
map[2][2] = 1;
map[6][4] = 1;
// 打印地图
let t = 0;
const echoMap = () => {
    map.forEach(v => {
        let n = v.join(',').replace(/,/g, '   ');
        console.log(' ');
        console.log(n);
    });
};
echoMap();


// 定义规则  0是没有走过的路 1 是墙,2是路 3是死路
// 行进规则 下右上左
/**
 * 寻路
 * @param i 开始横坐标
 * @param j 开始纵坐标
 * @returns {boolean}
 */
const find = (i, j) => {
    // 1. 给出跳出递归的条件
    if (map[6][5] === 2) {
        echoMap();
        return true
    } else {
        if (map[i][j] === 0) {
            //假设是可以行的通的,就先把它设置成2
            map[i][j] = 2;
            // 开始我们的寻路规则
            if (find(i + 1, j)) {//向下走
                return true
            } else if (find(i, j + 1)) {//向右走
                return true
            } else if (find(i - 1, j)) {//向上走
                return true
            } else if (find(i, j - 1)) {//向左走
                return true
            } else {
                map[i][j] = 3;
                return false
            }
        } else { //当 map[i][j] !== 0 时她可能为 1,2,3 所以此时 就进入了死路要回退
            return false
        }
    }
}

console.log('----------------');

find(1, 1);

// 1   1   1   1   1   1   1

// 1   2   2   2   0   0   1

// 1   3   1   2   0   0   1

// 1   1   1   2   0   0   1

// 1   3   3   2   0   0   1

// 1   3   3   2   2   2   1

// 1   3   3   3   1   2   1

// 1   1   1   1   1   1   1
