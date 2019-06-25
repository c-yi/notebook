<template>
    <div @dragenter="dragenter"
         @dragleave="dragleave"
         @dragover="dragover"
         @drop="drop"
         @mousemove="mousemove"
         class="drop-field"
         ref="hello">
        <div :key="index+'d'+item"
             @drag="drag"
             @dragend="dragend"
             @dragexit="dragexit"
             @dragstart="dragstart($event, item,index)"
             class="item"
             draggable="true" v-for="(item, index) in it">
            {{item}}
        </div>

        <div class="mouse">鼠标坐标X: {{clientX}} Y:{{clientY}}</div>
    </div>

</template>

<script>
    /* eslint-disable */
    export default {
        name: "drag",
        data() {
            return {
                droppedItem: [],
                it: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                clientX: 0, // 鼠标X坐标
                clientY: 0, // 鼠标Y坐标
                domW: 0, // 被移动的元素 宽
                domH: 0, // 被移动的元素高
            }
        },

        mounted() {
        },
        methods: {
            color() {
                return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
            },
            /*
            * Step1: 拖拽对象的 dropstart；
            * Step2: 拖放区的 drop；
            * Step3：拖拽对象的 dropend；
            * */

            /**
             * 鼠标移动时候的事件对象
             * @param event
             */
            mousemove(event) {
                let dom = this.$refs.hello;
                let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
                this.clientX = event.clientX - dom.offsetLeft;
                this.clientY = event.clientY - dom.offsetTop + scrollTop;
            },
            drop(event) {
                this.mousemove(event);
                //console.log('当元素或选中的文本在可释放目标上被释放时触发', event);
                event.preventDefault();//避免数据被处理
                let data = event.dataTransfer.getData('item'); //接受的数据

                let dom = this.$refs.hello.getBoundingClientRect(); // 父容器
                let bDomW = dom.width;

                // 行数 向下取整
                let row = Math.floor(this.clientY / this.domH);
                //列数 向上取整
                let col = Math.ceil(this.clientX / this.domW);
                // 一行几个
                console.log(bDomW, this.domW);
                let n = Math.floor(bDomW / this.domW);
                // 位置索引
                let index = row * n + col - 1;
                console.log(row, col, n, '行,列,个', index, '位置');
                data = JSON.parse(data);
                //索引 删除个数 ,添加值
                this.it.splice(data.index, 1);
                this.it.splice(index, 0, data.item);

            },
            drag(event) {
                if (this.domW === 0) {
                    let dom = event.target.getBoundingClientRect();
                    this.domH = dom.height + 40;
                    this.domW = dom.width + 40;
                    console.log('子元素宽度', this.domW, '子元素高度', this.domH);
                }
                //console.log('当拖动元素或选中的文本时触发。', event)
            },
            dragover(event) {
                //console.log('当元素或选中的文本被拖到一个可释放目标上时触发（每100毫秒触发一次）。', event);
                event.preventDefault()
            },
            dragenter(event) {
                //console.log('进入可释放元素', event);
            },
            dragexit(event) {
                console.log('当元素变得不再是拖动操作的选中目标时触发', event);
            },
            dragleave(event) {
                //console.log('当拖动元素或选中的文本离开一个可释放目标时触发。', event);
            },
            dragstart(event, item, index) {
                console.log('当用户开始拖动一个元素或选中的文本时触发', event);
                let n = JSON.stringify({index, item});
                console.log(n);
                event.dataTransfer.setData('item', n)

            },
            dragend(event) {
                //console.log('当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)', event);
                event.dataTransfer.clearData()
            }
        }
    }
</script>
<style scoped>
    .mouse {
        position: absolute;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        color: #4428E2;
    }

    .drop-field {
        box-sizing: border-box;
        padding: 1rem;
        background-color: #eee;
        margin-top: 1rem;
    }

    .item {
        display: inline-block;
        width: 300px;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        font-size: .9rem;
        margin: 20px;
        background-color: #4428E2;
        color: white;
    }

    .item:hover {
        cursor: pointer;
    }
</style>
