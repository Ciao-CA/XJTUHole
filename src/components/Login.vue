<template>
    <div class="box">

        <div class="xjxh">
            <img src="../assets/images/xjtu.png" alt="" >
        </div>
        <h3>XJTUHOLE</h3>
        <el-form ref="loginFormRef" :model="loginForm" label-width="80px" >
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
                <el-button @click="resetlogin">重置</el-button>
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
                }
            }
        },
        methods: {
            onSubmit() {
                setTimeout(()=> {
                    this.$router.push('/home')
                },500)
            },
            resetlogin() {
                this.$refs.loginFormRef.resetFields()
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
    .el-input {
        width: 80%;
    }
    .el-form-item {
        padding-top: 6%;
    }
</style>