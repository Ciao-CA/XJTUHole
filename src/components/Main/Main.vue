<template>
    <div class="main" @scroll="getScroll($event)">
        <el-backtop :bottom="100" :right="20">

        </el-backtop>
        <div class="tab-bar">
            动态
        </div>
        <main-item class="subitem" ></main-item>
<!--            这里面用一个v-for,即可实现下拉更新-->

    </div>
</template>

<script>
    import MainItem from "@/components/Main/MainItem";
    export default {
        name: "Main",
        components: {
            MainItem,
        },
        data() {
            return {
                count: 100,
                bottomheight: 0
            }
        },
        methods: {
            load() {
                console.log(123)
            //    这里来实现刷新
            },
            getScroll(event) {
                if(event.target.scrollTop>1000) {
                    this.load()
                }
            }
        },
        mounted() {
            // console.log(this.$el.getScrollHeight());
            // this.bottomheight=this.$el.getScrollHeight()-this.$el.getClientHeight()-this.$el.scrollTop
        }
    }
</script>

<style scoped>
    html,body {
        height: 100%;
    }
    .main {
        height: 590px;
        overflow-y: scroll;
    }
    .tab-bar {
        height: 40px;
        margin-bottom: 4px;
        font-size:20px;
        font-weight: 900;
        line-height: 34px;
        font-family: "Microsoft YaHei UI";
        padding-left: 20px;
        border-bottom: 0.5px solid whitesmoke;
    }
    .subitem {
        cursor: pointer;

    }
</style>