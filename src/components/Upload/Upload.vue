<template>
    <div>
        
        <div class="nav-bar">
            <div style="font-weight: 900; cursor: pointer" @click="goback">
                ＜
            </div>
<!--            <el-button size="mini" type="primary" round-->
<!--            style="-->
<!--            margin-left: auto;-->
<!--            cursor: pointer;-->
<!--"-->
<!--            >发布</el-button>-->
        </div>

        <div class="xjxh">
            <img src="../../assets/images/xjtu.png" alt="">
        </div>

        <el-form ref="form" :model="uploadForm" label-width="80px">

            <el-form-item label="标题" prop="title">
                <el-input class="title" v-model="uploadForm.title" placeholder="给你说的话起一个帅气的标题吧"></el-input>
            </el-form-item>
            <el-form-item label="正文" prop="text">
                <el-input class="text" type="textarea" v-model="uploadForm.text" placeholder="在此刻吐露心声吧"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">发表</el-button>
                <el-button @click="resetcomments">重置</el-button>
            </el-form-item>

        </el-form>
    </div>


</template>

<script>
    export default {
        name: "Upload",
        data() {
            return {
                uploadForm: {
                    title: '',
                    text: ''
                }
            }
        },
        methods: {
            resetcomments() {
                this.$refs.form.resetFields()
            },
            goback() {
                setTimeout(()=> {
                    this.$router.back()
                },200)
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        padding-left: 5px;
        padding-right: 5px;
        border-bottom: 0.5px solid whitesmoke;
        box-shadow:2px 2px 10px #06c;
        height: 40px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .el-form {
        position: absolute;
        top: 40%;
        left: -10%;
    }
    .xjxh img{
        width: 180px;
        height: 180px;
        position: absolute;
        top: 22%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>