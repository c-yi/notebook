board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

let path = [];
// 寻址 策略:下右左上
/**
 *
 * @param i 横坐标
 * @param j 纵坐标
 * @param map 路径
 * @param board 字典
 * @param word 单词
 * @param l 寻找的字母
 * @returns {boolean}
 */
const find = (i, j, map, board, word) => {
    if (map.join(',') === word) {
        return true
    } else {
        if (i < board.length && j < board[i]) {
            // 默认可以走的通
            map.push(word[path.length]);
            if (find(i + 1, j, map, board, word)) {
                return true
            } else if (find(i, j + 1, map, board, word)) {
                return true
            } else if (find(i - 1, j, map, board, word)) {
                return true
            } else if (find(i, j - 1, map, board, word)) {
                return true
            } else {
                map.pop();
                return false;
            }
        } else { //如果 map[i][j]!==0 可能是 1 2 3 所以就直接原路返回,说明走不通
            return false
        }
    }
};

var exist = function (board, word) {
    let flag = false;

    for (let i = 0; i < word.length; i++) {
        flag = find(0, 0, path, board, word)
    }
    return flag
};
console.log(exist(board, 'ABCCED'));
