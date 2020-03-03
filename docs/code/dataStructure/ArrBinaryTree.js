/*const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};*/
class ArrBinaryTree {
    constructor() {
        this.root = [];
    }

    _add(v, index) {
        if (!this.root[index] || this.root[index] === v) {
            this.root[index] = v;
            return
        }
        if (v > this.root[index]) {
            this._add(v, 2 * index + 2)
        }
        if (v < this.root[index]) {
            this._add(v, 2 * index + 1)
        }
    }

    add(v) {
        if (this.root.length === 0) {
            this.root[0] = v;
        } else {
            this._add(v, 0)
        }
    }

    _preOrder(index) {
        if (this.root[index]) {
            console.log(this.root[index]);
        }
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let length = this.root.length;
        if (this.root[left] !== null && left <= length) {
            this._preOrder(left)
        }
        if (this.root[right] !== null && (right <= length)) {
            this._preOrder(right)
        }
    }

    preOrder() {
        if (this.root.length !== 0) {
            this._preOrder(0)
        } else {
            console.log('空顺序存储二叉树');
        }
    }
}

let arr = new ArrBinaryTree();
let n = 30;
for (let i = 0; i < n; i++) {
    arr.add(Math.floor(Math.random() * 10 * n))
}
console.log(arr.root.length);
console.log(arr.root.join(',').replace(',', ' '));
arr.preOrder()
