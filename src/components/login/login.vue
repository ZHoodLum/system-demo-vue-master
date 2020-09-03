<template>
  <div class="login-form-layout">
    <div class="avtar_box">
      <img src="../../assets/companyTitle.png">
    </div>

    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="demo-loginForm login-container">
      <h3 class="title">系统登陆</h3>

      <el-form-item prop="userAccount">
        <el-input type="text" v-model="loginForm.userAccount" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>

      <el-form-item prop="userPassword">
        <el-input type="password" v-model="loginForm.userPassword" auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>

      <el-checkbox v-model="checked" prop="checked" checked class="remember">记住密码</el-checkbox>

      <el-form-item style="width:100%;">
        <el-button type="primary" :plain="true" :loading="loginLoading" style="width:48%;" @click="resetForm('loginForm')">重置
        </el-button>

        <el-button type="primary" :plain="true" :loading="loginLoading" style="width:48%;" @click="submitForm('loginForm')">登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>


</template>

<script>
  export default {
    data: function () {
      return {
        //是否加载
        loginLoading: false,
        //c初始化值
        loginForm: {
          userAccount: '',
          userPassword: ''
        },
        //登陆时检验规则
        rules: {
          userAccount: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          userPassword: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true
      }
    },
    methods: {
      //登陆
      submitForm (formName) {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            // const { data: res } = await this.$http.post('login', this.loginForm)
            // if (res.returnCode !== 200) return this.$message.error(res.returnMsg)
            // this.$message.success(res.returnMsg)
            // // 保存token在客户端的sessionStorage
            // window.sessionStorage.setItem('token', res.data.token)
            // window.sessionStorage.setItem('userId', res.data.user.userId)
            // window.sessionStorage.setItem('nikeName', res.data.user.nikeName)
            // 页面跳转
            this.$router.push('/home')
          } else {
            this.$message.error('error submit!!')
            return false
          }
        })
      },
      //重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$message({
          showClose: true,
          message: '重置信息成功！',
          type: 'success'
        });
      }
    }

  }

</script>

<style  lang="less" scoped>

  /*输入框表单样式*/
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    /*margin: 118px auto 168px auto;*/
    margin: 0 auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    border-top: 15px solid #0754ff;
    background: #cac6c6;
  }

  /*最外层的div样式  整个样式顺序不可以颠倒噢*/
  .login-form-layout {
    width: 100%;
    height: 99.7%;
    background: url("../../assets/background-01.png") no-repeat center center;
    background-size: 100% 100%;
    padding: 150px 0 0 0;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
    /*background: rgba(9, 18, 114, 0.67);*/
  }

  .avtar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  /*标题*/
  .title {
    margin: 50px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  /*记住密码*/
  .remember {
    margin: 0px 0px 35px 0px;
  }

</style>
