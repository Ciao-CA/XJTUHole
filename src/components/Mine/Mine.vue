<template>
    <div class="mine-view">
        <div class="tab-bar">
            个人中心
        </div>
        <div class="user-info">
            <img class="photo" src="../../assets/images/momo.png" alt="">
            <div class="name">
                带带胖比
            </div>
            <div class="arrow">
                >
            </div>
        </div>
        <div class="artical-admin">
            <div class="admin-item">
                已发布
            </div>
            <div class="admin-item">
                收藏
            </div>
        </div>
        <el-button type="danger" plain @click="adminexit">退出</el-button>
        <el-button type="danger" plain class="fuli" @click="fulijump">会员福利</el-button>

    </div>
</template>

<script>
    export default {
        name: "Mine",
        methods: {
            adminexit() {
                setTimeout(()=> {
                    this.$router.push('/login')
                },200)
            },
            fulijump() {
                window.location.href = 'https://www.287az.com/Html/84/'
                // window.open()
            }
        }
    }
</script>

<style scoped>
    .mine-view {
        font-family: "Microsoft YaHei";
    }
    .tab-bar {
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 14px;

    }
    .user-info {
        padding-left: 5px;
        padding-right: 5px;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: left;
        vertical-align: center;
        background-color: cadetblue;/*稍后需要调整一下渐变*/
        height: 90px;
        align-items: center;
    }
    .photo {
        width: 50px;
        height: 50px;
    }
    .arrow {
        font-size: 30px;
        margin-left: auto;
    }
    .artical-admin {
        display: flex;
        height: 100px;
        color: gray;
        background-color: white;
        border-bottom: 8px solid whitesmoke;
        justify-content: space-around;
        align-items: center;
    }
    .admin-item {
        cursor: pointer;
    }
    .el-button {
        margin-left: 50%;
        margin-top: 30%;
        transform: translateX(-50%);
    }
    .fuli {
        display: none;
        position: absolute;
        right: 0;
        bottom: 20%;
    }
</style>