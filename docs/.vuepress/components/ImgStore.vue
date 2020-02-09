<template>
    <div>
        <div v-on:click="send">发送请求</div>
    </div>
</template>

<script>
    export default {
        name: 'ImgStore',
        data() {
            return {}
        },
        methods: {
            send() {
                console.log('发送');
                let url = 'https://sm.ms/api/v2/upload_history';
                this.$axios.post(url).then(res => {
                    console.log(res.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>
