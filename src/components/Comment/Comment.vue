<template>
    <div>
        <el-page-header @back="goBack"
                        title="" content=""
                        style="padding: 10px 0 0 5px; border: 0">
        </el-page-header>
        <main-item></main-item>
        <div class="pinglun">评论</div>
        <main-item></main-item>
        <main-item></main-item>
        <main-item></main-item>
        <div>1</div>
        <div>1</div>
        <div>1</div>
    </div>
</template>

<script>
    import MainItem from "@/components/Main/MainItem";
    export default {
        name: "Comment",
        components: {
            MainItem,
        },
        methods: {
            goBack() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .pinglun {
        width: 100%;
        border-bottom: 0.5px solid whitesmoke;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
        color: gray;
        font-family: "Microsoft YaHei";
    }
</style>