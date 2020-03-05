class Graph {
    constructor(edges) {
        this.vertexList = ['A', 'B', 'C', 'D', 'E']; //顶点集合
        this.edges = edges; // 存储图对应的邻结矩阵
        this.numOfEdges = 0 // 表示边的数量
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
        console.log('   ' + this.vertexList.join(',').replace(/,/g, '  '));
        this.edges.forEach((v, i) => {
            console.log(this.vertexList[i] + '  ' + v.join(',').replace(/,/g, '  '));
        })
    }
}

let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = new Array(5).fill(0);
}

const graph1 = new Graph(arr);
// 添加边
// A-B A-C B-C B-D B-E
graph1.insertEdge(0, 1, 1);
graph1.insertEdge(0, 2, 1);
graph1.insertEdge(1, 2, 1);
graph1.insertEdge(1, 3, 1);
graph1.insertEdge(1, 4, 1);
graph1.showGraph();
