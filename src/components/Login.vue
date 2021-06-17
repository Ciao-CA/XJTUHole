<template>
    <div class="box">

        <el-page-header v-if="idx===1" @back="goBack" title="" content="" style="padding: 10px 0 0 5px; border: 0">
        </el-page-header>
        <div class="xjxh">
            <img src="../assets/images/xjtu.png" alt="" >
        </div>
        <h3>XJTUHOLE</h3>
        <el-form v-if="idx===0" ref="loginFormRef" :model="loginForm" label-width="80px" >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"
                          prefix-icon="el-icon-user-solid">用户名</el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"
                          prefix-icon="el-icon-lock"
                          type="password">密码</el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="signup">注册</el-button>
            </el-form-item>
        </el-form>

<!--        注册页-->
        <el-form class="form1" v-if="idx===1" ref="signFormRef" :model="signForm" label-width="80px">
            <el-form-item class="i1" label="账号" prop="username">
                <el-input v-model="signForm.username"
                          prefix-icon="el-icon-user-solid">账号</el-input>
            </el-form-item>
            <el-form-item class="i1" label="密码" prop="password">
                <el-input v-model="signForm.password"
                          prefix-icon="el-icon-lock"
                          type="password">密码</el-input>
            </el-form-item>
            <el-form-item class="i1" label="确认密码" prop="password">
                <el-input v-model="signForm.recheck"
                          prefix-icon="el-icon-lock"
                          type="password">密码</el-input>
            </el-form-item>
            <el-form-item class="i1" label="昵称" prop="nickname">
                <el-input v-model="signForm.nickname"
                          prefix-icon="el-icon-ice-drink">昵称</el-input>
            </el-form-item>
            <el-form-item class="i1">
                <el-button type="primary" @click="enterinfo">确定</el-button>
                <el-button @click="resetinfo">重置</el-button>
            </el-form-item>

        </el-form>


    </div>

</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                signForm: {
                    username: '',
                    password: '',
                    recheck: '',
                    nickname: ''
                },
                idx: 0,
            }
        },
        methods: {
            onSubmit() {
                setTimeout(()=> {
                    this.$router.push('/home')
                },500)
            },
            signup() {
                window.sessionStorage.setItem('login-idx', 1)
                this.idx=1
            },
            resetinfo() {
                this.$refs.signFormRef.resetFields();
            },
            enterinfo() {
                this.onSubmit()
            },
            goBack() {
                // console.log(123)
                window.sessionStorage.setItem('login-idx', 0)
                this.idx=0
            }
        }
    }
</script>

<style scoped>
    .box {
        height: 100%;
        background-color: whitesmoke;
    }
    .xjxh {
        width: 30%;
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .xjxh img {
        width: 100%;
    }
    h3 {
        color: powderblue;
        font-size: 30px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        position: absolute;
        top: 28%;
        left: 50%;
        transform: translateX(-50%);
    }
    .loginview {
        width: 50%;
        height: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #eeeeee;
    }
    .el-form {
        padding-top: 80%;
    }
    .form1 {
        padding-top: 90%;
    }
    .el-input {
        width: 80%;
    }
    .el-form-item {
        padding-top: 6%;
    }
    .i1 {
        padding-top: 0;
    }
    .hidden {
        display: none;
    }

</style>