<template>
    <div class="homeview">

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <div class="navbar">
            <div class="item" @click="choose1">
                <div class="el-icon-house" :class="idx===0?'active':''"></div>
                <div>首页</div>
            </div>
            <div class="item">
                <div class="el-icon-circle-plus" :class="idx===2?'active':''" @click="upload"></div>
            </div>
            <div class="item" @click="choose2">
                <div class="el-icon-user" :class="idx===1?'active':''"></div>
                <div>我的</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {

            }
        },
        computed: {
            idx() {
                if(this.$route.path.toString()==='/main')
                    return 0
                else if(this.$route.path.toString()==='/mine')
                    return 1
                else return 2
             }
         },
        methods: {
            choose1() {

                this.$router.push('/main')
                console.log(this.$route.path)
            },
            choose2() {

                this.$router.push('/mine')
                console.log(this.$route.path)
            },
            upload() {
                this.$router.push('/upload')
            }
        }
    }
</script>

<style scoped>

    .homeview {
        overflow: hidden;
        width: 100%;
    }
    .navbar {
        background-color: #fff;
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 60px;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid rgb(210, 216, 222);
        box-shadow: 10px 10px 2px #888888;
    }
    .el-icon-circle-plus {
        font-size: 45px;
    }
    .item {
        cursor:pointer;
    }
    .el-icon-house {
        transform: translateX(5%);
        font-size: 30px;
    }
    .el-icon-user {
        transform: translateX(5%);
        font-size: 30px;
    }
    .active {
        color: deepskyblue;
    }
    /*.router-link-active {*/
    /*    color: red;*/
    /*}*/

</style>