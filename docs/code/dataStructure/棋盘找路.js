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
// 寻址 策略:下右左上
const find = (i, j) => {
    if (map[6][5] === 2) {
        echoMap();
        return true
    } else {
        if (map[i][j] === 0) {
            // 默认可以走的通
            map[i][j] = 2;
            if (find(i + 1, j)) {
                return true
            } else if (find(i, j + 1)) {
                return true
            } else if (find(i - 1, j)) {
                return true
            } else if (find(i, j - 1)) {
                return true
            } else {
                map[i][j] = 3;
                return false;
            }
        } else { //如果 map[i][j]!==0 可能是 1 2 3 所以就直接原路返回,说明走不通
            return false
        }
    }
};
console.log('----------------------------');
find(1, 1);

