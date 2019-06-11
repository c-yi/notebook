<template>
    <canvas id="myCanvas"></canvas>
</template>

<script>
    export default {
        name: "codeRain",
        data() {
            return {
                flag: true,
                color: `#33ff33`
            }
        },
        mounted() {
            const that = this;
            let canvas = document.getElementById('myCanvas'),
                context = canvas.getContext('2d'),
                //w = canvas.width = window.innerWidth,
                w = canvas.width = 740,
                h = canvas.height = window.innerHeight;

            //初始化
            let clearColor = 'rgba(0, 0, 0, .1)',             //用于绘制渐变阴影
                wordColor = "#33ff33",                         //文字颜色
                words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
                wordsArr = words.split(''),                 //将文字拆分进一个数组
                font_size = 16,  //字体大小
                clomn = w / font_size,                     //文字降落的列数
                drops = [];

            for (let i = 0; i < clomn; i++) {
                drops[i] = 1;
            }

            function draw() {
                context.save();
                // 随机切换颜色
                let b = `#`;
                for (let i = 0; i < 6; i++) {
                    let d = '0123456789abcdef';
                    d.split();
                    let n = Math.floor(Math.random() * 16);
                    b += d[n]
                }
                //
                context.fillStyle = b;
                context.font = font_size + "px arial";
                //核心
                for (let i = 0; i < drops.length; i++) {
                    let text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
                    context.fillText(text, i * font_size, drops[i] * font_size);
                    if (drops[i] * font_size > h && Math.random() > 0.98) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                context.restore();
            }

            //动画循环
            (function drawFrame() {
                window.requestAnimationFrame(drawFrame, canvas);
                context.fillStyle = clearColor;
                context.fillRect(0, 0, w, h);  //注意这
                draw();
            }());
        },
    }
</script>

<style scoped>

</style>