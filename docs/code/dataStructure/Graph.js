class Queue {
    constructor() {
        this.queue = []
    }

    push(i) {
        this.queue.push(i)
    }

    shift() {
        if (this.isEmpty()) return;
        this.queue.shift()
    }

    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0
    }
}

class Graph {
    constructor(edges) {
        this.vertexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //顶点集合
        this.edges = edges; // 存储图对应的邻结矩阵
        this.numOfEdges = 0; // 表示边的数量
        this.visited = [];
        this.queue = new Queue()
    }

    // 添加顶点
    insertVertex(vertex) {
        this.vertexList.push(vertex)
    }

    /**
     * 添加边
     * @param {number} v1 横坐标
     * @param {number} v2 纵坐标
     * @param {number} weight 权值
     */
    insertEdge(v1, v2, weight) {
        this.edges[v1][v2] = weight;
        this.edges[v2][v1] = weight;
        this.numOfEdges++
    }

    // 获取边的数目
    getNumOfEdge() {
        return this.numOfEdges
    }

    // 获取顶点的数目
    getNumOfVertex() {
        return this.vertexList.length
    }

    // 返回结点的下标
    getValByIndex(i) {
        return this.vertexList[i]
    }

    // 返回顶点的权值
    getWeight(v1, v2) {
        return this.edges[v1][v2]
    }

    // 显示矩阵
    showGraph() {
        console.error('   ' + this.vertexList.join(',').replace(/,/g, '  '));
        this.edges.forEach((v, i) => {
            console.log(this.vertexList[i] + '  ' + v.join(',').replace(/,/g, '  '));
        })
    }

    //深度遍历优先
    _DFS(idx) {
        let N = this.vertexList.length;//节点个数
        this.visited[idx] = 1;
        console.log('节点', this.vertexList[idx]);
        if (this.visited.length === N) {
            return
        }
        for (let i = 0; i < N; i++) {
            // 如果没有被访问,能走得通
            if (!this.visited[i] && this.edges[idx][i] === 1) {
                console.log([idx, i]);
                this._DFS(i);
            }
        }
        //A=>B  => C => 尝试 => 尝试 =>回溯到B找到D=>0  =>  E 结束
        // [0,1]=>[1,2]=>[2.3]=>[2.4]=>[1,3]=>[3,4]=>[1,4]
    }

    DFS() {// depth first search
        for (let i = 0; i < this.vertexList.length; i++) {
            if (this.visited[i] === 1) continue;//已经遍历过就回溯
            this._DFS(i)
        }
        this.visited = [];
    }

    // 广度优先遍历
    _BFS(idx) {
        for (let i = 0; i < this.vertexList.length; i++) {
            // 如果没有被访问,能走得通
            if (!this.visited[i] && this.edges[idx][i] === 1) {
                // 新节点入队列
                this.queue.push(i);
                console.log('节点入队列 ' + this.vertexList[i], '坐标', [idx, i]);
                //标记访问,
                this.visited[i] = 1;
            }
        }
        // 循环完当前节点所有通路就出队列
        console.log(this.vertexList[this.queue.peek()], '出队列');
        this.queue.shift()
    }

    BFS() {
        for (let i = 0; i < this.vertexList.length; i++) {

            if (this.visited[i] === 1) continue;
            //标记已访问
            this.visited[i] = 1;
            //入队列
            console.log('节点' + (i + 1), this.vertexList[i]);
            this.queue.push(i);
            while (!this.queue.isEmpty()) {
                this._BFS(this.queue.peek());
            }
        }
        console.log(this.queue);
        this.visited = [];
    }
}

let arr = [];

for (let i = 0; i < 5; i++) {
    arr
        [i] = new Array(5).fill(0);
}

arr = [
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
/*arr = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]];*/
const graph1 = new Graph(arr);
// 添加边

graph1.showGraph();
console.log('--------');

graph1.DFS();
//深度遍历结果  节点 A=>B=>D=>H=>E=>C=>F=>G
console.log('=======');
graph1.BFS();
//广度遍历结果  节点 A=>B=>c=>D=>E=>F=>G=>H
