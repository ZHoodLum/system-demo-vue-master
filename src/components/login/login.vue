<template>
  <div class="mainStyle">
    <!--登陆界面样式-->
    <el-card  class="login-container">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px">
        <div style="text-align: center">
          <svg-icon icon-class="login-img" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h5 class="title fontColor">系统登陆</h5>

        <el-form-item prop="userAccount">
          <el-input type="text" v-model="loginForm.userAccount" auto-complete="off" placeholder="账号">
            <span slot="prefix">
            <svg-icon icon-class="user" class="fontColor"></svg-icon>
          </span>
          </el-input>
        </el-form-item>

        <el-form-item prop="userPassword">
          <el-input :type="pwdType" v-model="loginForm.userPassword" placeholder="密码">
             <span slot="prefix">
                <svg-icon icon-class="password" class="fontColor"></svg-icon>
              </span>
            <span slot="suffix" @click="showPwd">
                <svg-icon icon-class="eye" class="fontColor eye-main"></svg-icon>
              </span>
          </el-input>
        </el-form-item>

        <el-checkbox v-model="checked" prop="checked" checked class="remember">记住密码</el-checkbox>

        <el-form-item style="width:100%;text-align: center">
          <el-button type="primary" :plain="true" :loading="loginLoading" style="width:46%;"
                     @click="resetForm('loginForm')">重置
          </el-button>

          <el-button type="primary" :plain="true" :loading="loginLoading" style="width:46%;"
                     @click="submitForm('loginForm')">登录
          </el-button>
        </el-form-item>

      </el-form>
    </el-card >
    <img :src="login_bg" class="login-center-layout">
  </div>


</template>

<script>
  import login_bg from "../../assets/images/login_bg.png"

  export default {
    data: function () {
      return {
        login_bg,
        //是否加载
        loginLoading: false,
        //密码类型
        pwdType: 'password',
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
      resetForm (formName) {
        this.$refs[formName].resetFields()
        this.$message({
          showClose: true,
          message: '重置信息成功！',
          type: 'success'
        })
      },
      showPwd () {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
    }

  }

</script>

<style lang="less" scoped>
  /*输入框表单样式*/
  .login-container {
    /*防止此DIV被上一层div(login-center-layout)覆盖掉*/
    position: relative;
    /*绝对定位*/
    z-index: 1;

    -webkit-border-radius: 8px;
    border-radius: 8px;
    -moz-border-radius: 8px;
    background-clip: padding-box;
    margin: 50px auto;
    width: 150px;
    padding: 5px 15px 5px 15px;
    /*border: 1px solid #eaeaea;*/
    box-shadow: 0 0 25px #cac6c6;
    border-top: 10px solid #409EFF;
    /*background: #cac6c6;*/
    background: white;
  }

  /*标题*/
  .title {
    padding: 5px 0px 5px 0px;
    font-size: 13px;
    margin: 0 auto;
    text-align: center;
    color: #288aff;

  }

  //字体颜色
  .fontColor {
    color: #409EFF;
  }

  /*密码文本框眼睛位置*/
  .eye-main {
    padding-right: 5px;
  }

  /*记住密码*/
  .remember {
    margin: 0px 0px 15px 0px;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    top: 80px;
    /*防止此DIV把上一层div(login-container)覆盖掉*/
    position: absolute;
  }

</style>
