<template>
    <div>
        <div class="show-button" @click="codeShow=!codeShow">
            {{codeShow?'隐藏代码 △ ':'显示代码 ▽ '}}
        </div>
        <div v-show="codeShow">
            <slot></slot>
        </div>
        <div class="show-button" @click="codeShow=!codeShow" v-show="codeShow">
            {{codeShow?'隐藏代码 △ ':'显示代码 ▽ '}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShowCode',
        data() {
            return {
                codeShow: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .show-button {
        width: 100%;
        height: 40px;
        color: orangered;
        font-weight: 700;
        background-color: #EEE;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }

</style>
