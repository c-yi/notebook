/*let str = 'This small book contains a fairy tale,a story about many things.First of all,Innocence of Childhood and love.' +
    'The prince loves his roses,but felt disappointed by something the rose said.As doubt grows, he decides to explore other planet.' +
    'The little prince discovers that his rose is not the only one of its kind,there are thousands of them in a garden,' +
    'but then he realizes that his rose is special "because it is she that I have watered; because it is she that I have put under the glass globe; ' +
    'because it is she that I have sheltered behind the screen".The fox teaches the prince "It is only with the heart that one can see rightly;' +
    'what is essential is invisible to the eye "';*/
let str = 'i like like like java do you like a java';
let strObj = {};
str.split('').forEach(beat => {
    let v = beat;
    if (strObj[v]) {
        strObj[v] = strObj[v] + 1
    } else {
        strObj[v] = 1;
    }
});


class Node {
    constructor(data, count) {
        this.data = data;
        this.count = count;
        this.left = null;
        this.right = null;
    }
}

const nodes = [];
Object.keys(strObj).forEach(v => {
    nodes.push(new Node(v, strObj[v]))
});

while (nodes.length > 1) {
    nodes.sort((a, b) => a['count'] - b['count']);
    let leftNode = nodes[0];
    let rightNode = nodes[1];
    let parentsNode = new Node(null, leftNode.count + rightNode.count);
    parentsNode.left = leftNode;
    parentsNode.right = rightNode;
    nodes.splice(0, 2);
    nodes.push(parentsNode)
}
const preOrder = (node) => {
    /*if (node.data) {
        console.log('字符 ' + node.data||' ', ' 权重 ' + node.count);
    }*/
    console.log('字符 ' + node.data, ' 权重 ' + node.count);
    if (node.left) {
        preOrder(node.left)
    }
    if (node.right) {
        preOrder(node.right)
    }
};
preOrder(nodes[0]);
// 生成 01 编码

let huffmanTable = [];
let HuffmanCode = '';
/**
 *
 * @param node 节点
 * @param beat 字母
 * @param path 0 1
 * @param code 已拼接
 */
const encodeHuffman = (node, beat, path, code) => {
    code = code + path;
    if (node.left) {
        encodeHuffman(node.left, beat, '0', code)
    }
    if (node.right) {
        encodeHuffman(node.right, beat, '1', code)
    }
    if (node.data === beat) {
        huffmanTable.push({[beat]: code});
        HuffmanCode = HuffmanCode + code
    }
};
str.split('').forEach(v => {
    encodeHuffman(nodes[0], v, '', '')
});
/**/
console.log(huffmanTable);
console.log(HuffmanCode);

