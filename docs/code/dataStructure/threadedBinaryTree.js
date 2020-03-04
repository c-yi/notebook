class HeroNode {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.left = null;
        this.right = null;
        // 如果 leftType===0 表示指向左子树, 如果 leftType===1 表示指向前驱结点
        // 如果 rightType ===0 表示指向右子树, 如果 rightType===1 表示指向后继结点
        this.leftType = 0;
        this.rightType = 0;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        // 在递归线索化时总是保留前一个节点
        this.pre = null;//前驱节点
        this.size = 1
    }

    // 线索化二叉树,一下采用中序线索化来处理
    _threadNode(node) {
        if (!node) {// 如果node 为 null 不能线索化
            return
        }
        //1.先线索化左子树
        this._threadNode(node.left);
        //2.再线索化当前节点
        // 前驱结点
        if (node.left === null) {
            // 如果当前节点的左节点为空,
            node.left = this.pre;
            node.leftType = 1;
        }
        // 后继结点, 是在下一次的递归中处理的
        if (this.pre !== null && this.pre.right === null) { // 如果当前节点的左节点为空,
            //让前驱节点右指针指向当前节点
            this.pre.right = node;
            //修改前驱节点的右指针类型
            this.pre.rightType = 1;
        }
        //每处理一个节点后,让当前节点是下一个节点的前驱结点
        this.pre = node;
        //1.再线索化右子树
        this._threadNode(node.right);
    }

    // 重载 _threadNode
    threadNode() {
        this._threadNode(this.root);
    }

    _infixOrder(node) {
        if (!node) {
            return
        }
        if (node.leftType !== 1) {
            this._infixOrder(node.left)
        }
        console.log(`${node.id}  ----  ${node.name}`);

        if (node.rightType !== 1) {
            this._infixOrder(node.right)
        }

    }

    infixOrder() {
        this._infixOrder(this.root)
    }
}

const hero = new BinaryTree();

const n1 = new HeroNode(1, '张1');
const n3 = new HeroNode(3, '张3');
const n6 = new HeroNode(6, '张6');
const n8 = new HeroNode(8, '张8');
const n10 = new HeroNode(10, '张10');
const n14 = new HeroNode(14, '张14');
hero.root = n1;
n1.left = n3;
n3.left = n8;
n3.right = n10;
n1.right = n6;
n6.left = n14;
hero.threadNode();
//console.log(hero.root.left.left.right);
//console.log(hero.preOrderSearch(9));
hero.infixOrder();
