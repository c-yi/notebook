<template>
    <div class="self_container" @mousemove="debounce(showNav,1000)()">
        <header class="self_header">
            <ul class="self_bar" v-for="(item ,index) in getLinks($site.themeConfig.nav)" :key="index+item">
                <li style="font-weight: 700">{{item.text}}</li>
                <li v-for="(link ,i) in item.items" :key="link+i">
                    <router-link :to=link.link>{{link.text}}</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                timer: null,
                once: true,
                hidden: null
            }
        },
        methods: {
            // 防抖
            debounce(func, wait = 50) {
                if (this.hidden) clearTimeout(this.hidden);
                if (this.once) {
                    this.once = null;
                    return func;
                }
                return (...args) => {
                    if (this.timer) clearTimeout(this.timer);

                    this.timer = setTimeout(() => {
                        func.apply(this, args)
                    }, wait)
                }
            },
            //导航栏显示隐藏
            showNav() {
                let container = document.getElementsByClassName('self_header')[0];
                if (container && container.style) {
                    container.style.display = 'flex';
                    this.hidden = setTimeout(() => {
                        container.style.display = 'none';
                        this.once = true
                    }, 3000)
                }
            },
            // 过滤导航链接
            getLinks(links) {
                return links.filter(item => {
                    return !item.hasOwnProperty('link')
                });
            }
        }
    }
</script>
<style scoped lang="scss">
    .self_container {
        padding: 0;
        margin: 0;
        height: 100vh;

        .self_header {
            background-color: rgba(255, 255, 255, .3);
            padding: 15px 200px 0;
            display: none;

            .self_bar {
                flex: 1;
            }
        }
    }

    a {
        color: #8c939d;

        &:hover {
            color: orangered;
        }
    }

    ul {
        text-align: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>
