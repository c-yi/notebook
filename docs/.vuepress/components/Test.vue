<template>
    <div>哈哈哈哈
        <div @click="show">点我</div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        methods: {
            show() {
                console.log(
                    '测试method'
                )
            }
        },
    }
</script>

<style scoped lang="stylus">
    div
        color: red;

</style>