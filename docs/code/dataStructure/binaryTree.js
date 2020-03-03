class HeroNode {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 1
    }

    // 添加节点
    add(v) {
        if (!this.root) {
            this.root = v;
            return
        }
        let current = this.root;

        while (current) {
            if (v.id < current.id) {
                current.left ? current = current.left : current.left = v;
            } else if (v.id > current.id) {
                current.right ? current = current.right : current.right = v;
            } else {
                this.size -= 1;
                return;
            }
        }
        this.size += 1
    }

    // 前序遍历
    _preOrder(node) {
        console.log(node.id + node.name);
        if (node.left) {
            this._preOrder(node.left)
        }
        if (node.right) {
            this._preOrder(node.right)
        }
    }

    preOrder() {
        if (this.root) {
            this._preOrder(this.root)
        } else {
            console.log('二叉树为空');

        }
    }

    //中序遍历
    _inFix(node = this.root) {
        if (node.left) {
            this._inFix(node.left)
        }
        console.log(node.id + node.name);
        if (node.right) {
            this._inFix(node.right)
        }
    }

    inFix() {
        if (this.root) {
            this._inFix(this.root)
        } else {
            console.log('二叉树为空');

        }
    }

    //后序遍历
    _postOrder(node = this.root) {
        if (node.left) {
            this._postOrder(node.left)
        }
        if (node.right) {
            this._postOrder(node.right)
        }
        console.log(node.id + node.name);
    }

    postOrder() {
        if (this.root) {
            this._postOrder(this.root)
        } else {
            console.log('二叉树为空');

        }
    }

    // 查找
    // 前序查找
    _preOrderSearch(no, root) {
        if (root.id === no) {
            return root;
        }
        let res;
        if (root.left) {
            res = this._preOrderSearch(no, root.left);
            if (res != null) {
                return res
            }
        }
        if (root.right) {
            return this._preOrderSearch(no, root.right);
        }

    }

    preOrderSearch(no) {
        if (this.root) {
            let res = this._preOrderSearch(no, this.root);
            return res ? res : '没有找到该节点'
        } else {
            return '列表节点为空';
        }
    }
}

const hero = new BinaryTree();
for (let i = 0; i < 5; i++) {
    let id = Math.floor(Math.random() * 10);
    const n = new HeroNode(id, '张' + id);
    hero.add(n)
}
hero.add(new HeroNode(100, '张100'));
hero.add(new HeroNode(20, '张100'));
console.log(hero.root);
//hero.preOrder();
console.log(hero.preOrderSearch(9));
