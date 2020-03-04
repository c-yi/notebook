const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
    }
    return arr;
};

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

//let arr = createArray(8);
let arr = [13, 7, 8, 3, 29, 6, 1];

const huffman = (arr) => {
    let nodes = [];
    const initNodes = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            nodes.push(new Node(arr[i]))
        }
    };
    initNodes(arr);
    const sortNodes = (val) => (a, b) => {
        let v1 = a[val];
        let v2 = b[val];
        return v1 - v2

    };
    const createHuffman = () => {
        while (nodes.length > 1) {
            nodes = nodes.sort(sortNodes('val'));// 排序
            let leftNode = nodes[0];
            let rightNode = nodes[1];
            let parentsNode = new Node(leftNode.val + rightNode.val);
            parentsNode.left = leftNode;
            parentsNode.right = rightNode;
            nodes.shift();
            nodes.shift();
            nodes.push(parentsNode)
        }
    };
    createHuffman();
    return nodes
};

let nodes = huffman(arr);
console.log(nodes);




















