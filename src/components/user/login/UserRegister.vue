<template>
    <div class="register-container">
        <div class="register-form">
            <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" class="demo-ruleForm"
                     label-width="4rem">
                <el-form-item>
                    <h2 class="title">用户注册</h2>
                </el-form-item>
                <el-form-item prop="phone" label="手机号">
                    <el-input placeholder="请输入手机号" v-model="registerForm.phone" maxlength="20" autocomplete="off"/>
                </el-form-item>

                <el-form-item prop="verifyCode" label="验证码">
                    <el-col :span="17">
                        <el-input type="text" placeholder="请输入验证码" v-model="registerForm.verifyCode" maxlength="18"
                                  autocomplete="off"/>
                    </el-col>
                    <el-col :span="5">
                        <el-button @click="getVerifyCode">获取验证码</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="registerForm.username" maxlength="20" autocomplete="off"/>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input type="password" placeholder="请输入密码" v-model="registerForm.password" maxlength="18"
                              autocomplete="off"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')" class="register-btn">注册</el-button>
                </el-form-item>
            </el-form>
            <div class="login-register">已有账号?<span @click="handleLogin" class="login-register-btn">去登录</span></div>
        </div>
    </div>
</template>

<script>
import request from "../../../../src/api/request";
import api from "../../../../src/api/index";

export default {
  name: "UserRegsiter",
  data() {
    var userNameReg = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    var passwordReg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/; //6到18位
    var verifyCodeReg = /^[0-9]{4}$/
    var phoneReg=/1\d{10}/
    var validateUserName = (rule, value, callback) => {
      console.log(rule, value, callback);
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!userNameReg.test(value)) {
          callback(new Error('用户名格式错误'))
        } else {
          callback();
        }
      }, 1000)
    };
    var validatePwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      setTimeout(() => {
        if (!passwordReg.test(value)) {
          callback(new Error('密码格式错误'))
        } else {
          callback();
        }
      }, 1000)

    };
    var validateVerifyCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }
      setTimeout(() => {
        if (!verifyCodeReg.test(value)) {
          callback(new Error('验证码格式错误'))
        } else {
          callback();
        }
      }, 1000)
    }
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error('手机号格式错误'))
        } else {
          callback();
        }
      }, 1000)
    }
    return {
      registerForm: {
        username: "",
        password: "",
        phone: "",
        verifyCode: ""

      },
      role: "jobSeeker",
      rules: {
        username: [
          {validator: validateUserName, trigger: "blur"}
        ],
        password: [
          {validator: validatePwd, trigger: "blur"}
        ],
        verifyCode:[
          {validator:validateVerifyCode,trigger:'blur'}
        ],
        phone:[
          {validator:validatePhone,trigger:'blur'}
        ]
      }
    }
  },
  methods: {
    //处理提交(验证 跳转)
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
            if (valid) {//表示验证成功
              this.userRegister()
            } else {
              this.$message({
                message: "请检查格式,再提交",
                type: "error"
              })
              return false;
            }
          }
      )
    },
    handleLogin() {
      this.$router.push("/userLogin")
    },
    getVerifyCode() {
      console.log("获取验证码")
    },
    userRegister(){
      this.$store.commit("userRegister",{
        username:this.registerForm.username,
        password:this.registerForm.password,
        phone:this.registerForm.phone
      })
    }
  }
}
</script>

<style scoped lang="less">
    .register-container {
        height: 100vh;
        background: #5dd5c8 url("../../../assets/imgs/newbg.png") center bottom no-repeat;
    }

    .register-form {
        background-color: #fff;
        width: 23%;
        position: relative;
        top: 25%;
        left: 36%;
        padding: 25rem /@font-size 20rem /@font-size 25rem /@font-size 5rem /@font-size;

        .title {
            text-align: center;
        }
    }

    .register-btn {
        width: 100%;
    }

    .radio-group {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .radio-btn {
            width: 40%;
        }

        /deep/ .el-radio {
            display: flex;
            align-items: center;
        }
    }

    //设置注册链接样式
    .login-register {
        text-align: center;

        .login-register-btn {
            color: #5dd5c8;
            padding: 0 4rem /@font-size;
        }

        .login-register-btn:hover {
            border-bottom: 1rem /@font-size solid #5dd5c8;
            cursor: pointer;
        }
    }
</style>
