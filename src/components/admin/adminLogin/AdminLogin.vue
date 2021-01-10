<template>
    <div class="admin-login">
        <div class="login-container">
            <h2>管理员登录</h2>
            <el-form :model="loginForm" status-icon  label-width="60px" class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input type="text" v-model.lazy = "loginForm.username" placeholder="请输入账号"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model.lazy="loginForm.password" placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import { mapActions } from 'vuex';
    export default {
        name: "AdminLogin",
        data(){
            return {
                loginForm:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            ...mapActions(['setUser','adminLoginAction']),
            login(){
                //this.$store.commit("setUser");
                //使用语法糖
                // this.setUser();

                this.adminLoginAction(this.loginForm).then((data)=>{
                    console.log('login',data);
                    if(this.loginForm.username === 'xiaoming' && this.loginForm.password === 'abc123456') {
                        this.$router.replace("/admin")
                    } else {
                        this.$message({
                            type: 'error',
                            message: '账号或密码不对,请检查后再次输入'
                        })
                    }
                });


            }
        }
    }
</script>

<style scoped lang="less">
    .admin-login{
        width: 100%;
        height: 100vh;
        background:#5dd5c8 url("../../../assets/imgs/newbg.png") center bottom no-repeat;
        overflow: hidden;
        font-size: 18px;
    }
    .login-container{
        background-color: white;
        width: 30%;
        margin: 100px auto;
        padding-right: 40px;
        padding: 40px;
        box-shadow: 10px 10px 8px #00c2b3;
        h2{
            letter-spacing: 10px;
            font-size: 32px;
            text-align: center;
        }


    }
</style>