<template>
    <div class="login-container">
        <div class="login-form">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
                <el-form-item>
                    <h2 class="title">用户登录</h2>
                    <!--<el-radio-group v-model="role" class="radio-group">
                        <el-radio label="jobSeeker" border class="radio-btn">求职者</el-radio>
                        <el-radio label="recruiter" border class="radio-btn">招聘者</el-radio>
                    </el-radio-group>-->
                </el-form-item>
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="loginForm.username" maxlength="20" autocomplete="off"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" maxlength="18"
                              autocomplete="off"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" class="login-btn">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="login-register">还没有账号?<span @click="handleRegister" class="login-register-btn">免费注册</span></div>
        </div>
    </div>
</template>

<script>
import request from "../../../../src/api/request";
import api from "../../../../src/api/index";
export default {
  name: "UserLogin",
  data() {
    var userNameReg = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    var passwordReg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/; //6到18位
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
    return {
      loginForm: {
        username: "",
        password: ""
      },
      role: "jobSeeker",
      rules: {
        username: [
          {validator: validateUserName, trigger: "blur"}
        ],
        password: [
          {validator: validatePwd, trigger: "blur"}
        ]
      }
    }
  },
  methods: {
    //处理提交(验证 跳转)
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
            if (valid) {//表示验证成功
                this.jobHunterLogin()
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
    async jobHunterLogin() {
      request.post('/api/jobHunter/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
      ).then(res => {
        localStorage.setItem("jobHunterId", res.data.id)
        if (res.data != null) {
          console.log("res.data:")
          console.log(res.data)
          if (res.data == "") {
            alert('用户名或密码错误')
            return
          } else {
            //获取求职者信息
            api.getJobHunter(this.$store.state)
            this.$router.push("/jobHunterIndex")
          }
        } else {
          alert('用户名或密码错误')
        }
      })
    },
    handleRegister() {
      this.$router.push("/userRegister")
    }
  }
}
</script>

<style scoped lang="less">
    .login-container {
        height: 100vh;
        background: #5dd5c8 url("../../../assets/imgs/newbg.png") center bottom no-repeat;
    }
    .login-form {
        background-color: #fff;
        width: 23%;
        position: relative;
        top: 30%;
        left: 36%;
        padding: 25rem /@font-size 20rem /@font-size;
        .title{
            text-align: center;
        }
    }
    .login-btn {
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
