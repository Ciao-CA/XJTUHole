<template>
    <div class="main-item">
        <div class="headbar">
            <img src="../../assets/images/momo.png" alt="">
            <div class="name" v-for="(item,index) in message.name" :key="index">{{item}}</div>
            <div class="time" v-for="(item,index) in message.date" :key="index">{{item}}</div>
        </div>
        <div class="bodybar" @click="commentview">
            <h4 v-for="(item,index) in message.title" :key="index">{{item}}</h4>
            <p v-for="(item,index) in message.passage" :key="index">
                {{item}}
            </p>
        </div>
        <Attitude></Attitude>
    </div>
</template>

<script>
    import Attitude from "@/components/Attitude/Attitude";
    export default {
        name: "MainItem",
        data() {
            return {
                message: {
                    'name': ['带带胖比'],
                    'date': ['2021-6-11'],
                    'title': ['世界缺一个活泼的我'],
                    'passage': ['上班没有人可以说话,下班回家没有人说话,工作不顺,压力大,无处可逃']
                }
            }
        },
        components: {
            Attitude
        },
        methods : {
            commentview() {
                this.$router.push('/comment')
            }
        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .main-item {
        padding-left: 5px;
        padding-right: 5px;
        background-color: #fff;
        border-bottom: 8px solid rgb(249, 249, 250);
        padding-top: 10px;
    }
    .main-item .headbar {
        display: flex;
        justify-content: left;
    }
    .bodybar {
        font-family: "Microsoft YaHei";
        padding-left: 2px;
    }
    .name {
        padding-left: 2%;
    }
    .main-item .headbar .time {
        /*padding-left: 55%;*/
        font-size: 12px;
        margin-left: auto;
    }
    .main-item .headbar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid black;
    }
    h4 {
        font-weight: 500;
        padding-top: 6px;
        padding-bottom: 8px;
    }
    p {
        font-size: 13px;
        color: grey;
        padding-bottom: 12px;
    }
</style>