<template>
    <div>
        <input type="file" v-on:change="fillFile" ref="imgList" multiple>
        <div class="img-box">
            <!--<div style="width:400px;padding-right: 10px">
                <div>原图</div>
                <div v-for="item in source " :key="source.name">
                    <p class="fileMessage">名称:{{item.name}} 大小: {{item.size|floatSize}}</p>
                    <img :src="item.src" alt="">
                </div>
            </div>-->
            <div id="canvas">
                <div>canvas</div>
                <!--<div v-for="item in source " :key="source.name">
                    <p class="fileMessage">名称:{{item.name}} 大小: {{item.size|floatSize}}</p>
                    <img :src="item.src" alt="">
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    const formate = (size) => {
        if (size / 1024 >= 1024) {
            return (size / 1024 / 1024).toFixed(1) + 'M'
        } else {
            return (size / 1024).toFixed(1) + 'k';
        }
    };
    export default {
        name: 'PerformanceImg',
        props: {
            canvasProp: {
                type: Object,
                default: () => ({
                    canvas_w: 600,
                    canvas_h: 400
                })
            }
        },
        data() {
            return {
                source: [],
                canvas: []
            }
        },
        methods: {
            fillFile() {
                let files = this.$refs.imgList.files;
                console.log(files);
                Array.from(files).forEach(file => {
                    const reader = new FileReader();
                    const {size, name, type} = file;
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        const item = {size, name, type, src: reader.result};
                        this.source.push(item);
                        this.drawImage(item)
                    }
                })
            },
            /**
             * 绘图
             * @param data
             */
            drawImage(data) {
                const {src: dataURI, name, type} = data;
                let img = new Image();   // 创建一个<img>元素
                img.src = dataURI; // 设置图片源地址
                // 只能在onload中获取图片的尺寸,不然可能得到的是 0
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const {w, h} = this.getZoom(img);
                    // 按照缩放比例显示图片
                    canvas.width = w;
                    canvas.height = h;
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);
                    // 对图片进行压缩
                    let newDataURI = canvas.toDataURL(type || 'image/png', 0.8);
                    document.getElementById('canvas').appendChild(canvas);
                    this.download(newDataURI, name, type)
                }
            },
            /**
             * 下载
             */
            download(newDataURI, fileName, type) {
                let a = document.createElement('a');
                a.href = newDataURI;
                a.download = fileName;
                const newBlob = this.b64ToBlob(newDataURI, type);
                a.textContent = '下载' + formate(newBlob.size);
                document.getElementById('canvas').appendChild(a)
            },
            /**
             * 缩放比例
             */
            getZoom(img) {
                const {width: w, height: h} = img;// 原始宽高
                const {canvas_w: c_w, canvas_h: c_h} = this.canvasProp;//默认宽高
                let targetWidth = w, targetHeight = h;// 如果图片没有超多设定阀值,就按照原大小
                if (w > c_w || h > c_h) {
                    if (w / h > c_w / c_h) {
                        // 更宽，按照宽度限定尺寸
                        targetWidth = c_w;
                        targetHeight = Math.round(c_w * (h / w));
                    } else {
                        targetHeight = c_h;
                        targetWidth = Math.round(c_h * (w / h));
                    }
                }
                return {w: targetWidth, h: targetHeight}
            },

            b64ToBlob(dataURI, type) {
                let byteString = atob(dataURI.split(',')[1]);
                let ab = new ArrayBuffer(byteString.length);
                let ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ab], {type: type || 'image/jpeg'});
            }
        },
        filters: {
            // 格式化 图片
            floatSize: formate
        }
    }
</script>

<style scoped lang="scss">
    .fileMessage {
        color: orangered;
    }

    .img-box {
        display: flex;

        div {
            flex-grow: 1;
        }
    }

</style>
