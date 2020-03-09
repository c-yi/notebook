function hanoiTower(num, a, b, c) {
    if (num === 1) {
        // 如果只有一个盘
        console.log('第1个盘从 ' + a + '=>' + c);
    } else {
        // 如果num>1
        // 把最上面的所有盘从A移动到B
        hanoiTower(num - 1, a, c, b);
        // 把最下面的盘从 A=>C ,移动过程使用到a塔
        console.log('第' + num + '个盘从 ' + a + '=>' + c);
        // 把 B 塔所有盘从 B=>C ,移动过程使用到a塔
        hanoiTower(num - 1, b, a, c);
    }
}

hanoiTower(5, 'A', 'B', 'C');
