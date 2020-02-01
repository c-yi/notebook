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
                this.$axios.post('https://sm.ms/api/v2/upload_history', {username: 'c-y', password: 's88hPRpgn6vM'}).then(res => {
                    console.log(res.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>
