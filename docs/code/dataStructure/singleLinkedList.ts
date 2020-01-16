export namespace LinkedListPackage {
    interface nodeType {
        next: nodeType;
        data: any;
        prev: nodeType;
    }

    class Node implements nodeType {
        data: any;
        next: nodeType;
        prev: nodeType;

        constructor(data: any) {
            this.next = null;
            this.data = data;
            this.prev = null;
        }
    }

    export class LinkedList {
        size: number;
        head: nodeType;
        end: object;

        constructor() {
            this.size = 0;
            this.head = new Node(null);
            this.end = null;
        }

        isEmpty(): boolean {
            return this.size === 0
        }

        /**
         * 按照索引中找节点
         * @param header 头结点
         * @param index 索引
         * @param currentIndex 当前索引
         */
        find(header, index, currentIndex: number): nodeType {
            // 因为节点不是一个连续存储在内存中的
            if (index === currentIndex) return header;
            return this.find(header.next, index, currentIndex + 1)
        }

        addNode(data, index) {
            let newNode = new Node(data);
            let prev = this.find(this.head, index, 0);
            newNode.next = prev.next;
            //newNode.prev = prev
            prev.next = newNode;
            this.size++;
            return prev.next;
        }

        insertNode(data: any, index: number) {
            this.addNode(data, index)
        }

        addToFirst(data: any) {
            this.addNode(data, 0)
        }

        addToLast(data: any) {
            this.addNode(data, this.size)
        }

        reverse() {
            let newList: nodeType = new Node(null);
            let current = this.head.next;
            let next: nodeType;
            while (current) {
                next = current.next; // 暂存当前节点的下一个节点,后面需要用到
                current.next = newList.next; // 当前current的下一个节点指向新的节点的最前端
                newList.next = current;// 将 current 赋值给新链表
                current = next //链表指针后移
            }
            this.head = newList;
        }

        removeNode(index: number): nodeType {
            let prev = this.find(this.head, index - 1, 0);
            let node = prev.next;
            prev.next = node.next;
            // 清空节点
            node.next = null;
            this.size--;
            return node
        }

        removeFirst(): nodeType {
            return this.removeNode(0)
        }

        removeLast(): nodeType {
            return this.removeNode(this.size)
        }

        showList(): void {
            let temp: nodeType | null = this.head;
            while (temp) {
                console.log(temp.data);
                temp = temp.next
            }
        }
    }
}
