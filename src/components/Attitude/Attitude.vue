<template>
    <div>
        <div class="attitude">
            <i class="el-icon-message-solid" :class="num1===1?'colorred':''" @click="praise">
                {{num1}}
            </i>
            <i class="el-icon-s-comment"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Attitude",
        data() {
            return {
                idx: 0,
                num1: 0,
                num2: 0,
            }
        },
        methods: {
            praise() {
                if(this.idx===0){
                    this.idx= 1
                    this.num1++
                }
                else {
                    this.idx=0
                    this.num1--
                }
            },
        }
    }
</script>

<style scoped>
    .attitude {
        display: flex;
        justify-content: space-around;
    }
    .colorred {
        color: red;
    }
</style>