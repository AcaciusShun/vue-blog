<template>
  <div class="login">
      <el-card class="box-card">
        <div slot="header">
            <span>MY BLOG</span>
        </div>

        <el-form :model="loginForm" ref="loginForm">
            <el-form-item label="username">
                <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
</el-card>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        loginForm: {
            username : '',
            password : ''
        }
    }
    },
    methods: {
        submitForm(formName) {
            console.log(this.$refs[formName])
            let {model} = this.$refs[formName]
            console.log(model.username);
            console.log(model.password);
            this.$ajax.post(
                '/api/admin',
                model
            ).then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login{

  .box-card {
    width: 480px;
    height: 360px;

    position: absolute;
    top:50%;
    left:50%;
    margin-left:-240px;
    margin-top:-180px;
    text-align: center;
    .el-row{
        margin-bottom: 20px;
    }
  }
}
</style>
