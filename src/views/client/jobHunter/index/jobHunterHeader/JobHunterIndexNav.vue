<template>
    <div class="index-nav">
        <el-menu :default-active="this.$route.path"
                 router
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#202329"
                 text-color="#fff"
                 active-text-color="#5dd5c8">
<!--            <el-menu-item><img src="/src/assets/logo.png"></el-menu-item>-->
            <el-menu-item style="color: #5dd5c8"><span class="el-icon-location-outline"></span>
                <span class="text">烟台</span></el-menu-item>
            <el-menu-item index="/jobHunterIndex"><span class="text">首页</span></el-menu-item>
            <el-menu-item index="/position"><span class="text">职位</span></el-menu-item>
            <el-menu-item index="/companies"><span class="text">公司</span></el-menu-item>
            <el-menu-item index="/information"><span class="text">资讯</span></el-menu-item>
            <el-menu-item index="/article/list"><span class="text">文章</span></el-menu-item>
            <el-submenu v-if="jobHunter!=null" index="/" class="right personal-info">
                <template slot="title">
                    <el-avatar :size="30" :src="require(`@/assets/${jobHunter.photo}`)"></el-avatar>
                </template>
                <el-menu-item index="/recruiterIndex">切换为招聘者</el-menu-item>
                <el-menu-item index="/jobHunter/info">个人信息</el-menu-item>
                <el-menu-item @click="logout">退出登录</el-menu-item>
            </el-submenu>
            <el-menu-item index="/userLogin" v-if="jobHunter==null" class="right login">
                <el-button class="login-btn">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/userRegister" v-if="jobHunter==null" class="right register">
                <el-button class="register-btn">注册</el-button>
            </el-menu-item>
            <el-menu-item index="/resume/list" class="right resume" v-if="jobHunter!=null"><span class="text">简历</span></el-menu-item>
            <el-menu-item :index="'/jobHunter/chat/'+jobHunter.id" class="right msg" v-if="jobHunter!=null">
                <el-badge :value=msgNum class="text">消息</el-badge>
            </el-menu-item>
            <el-menu-item index="/article/publish" v-if="jobHunter!=null" class="right ">
                <span class="text">发表文章</span>
            </el-menu-item>
            <el-menu-item index="/jobHunterLogin" v-if="jobHunter==null" class="right login"><span class="text">我要找工作</span>
            </el-menu-item>
            <el-menu-item index="/recruiterLogin" v-if="jobHunter==null" class="right login"><span class="text">我要招聘</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "JobSeekerIndexNav",
  data() {
    return {
      activeIndex: "1",
      msgNum: ""
    }
  },
  methods: {
    handleSelect() {
    },
    logout() {
      localStorage.removeItem("jobHunterId")
      this.$store.dispatch('updateTokenAction', '')
      this.$store.state.jobHunter = null
      this.$router.push("/userLogin")
    }
  },
  computed: {
    ...mapState(['jobHunter', 'jobHunterId'])
  },
  mounted() {
    this.$store.dispatch('getJobHunterAction')
  }
}
</script>

<style scoped lang="less">
    .right{
        float: right !important;
    }

    /* 设置消息上面的数量提示的位置*/
    /deep/ .el-badge__content.is-fixed {
        top: 16rem /@font-size;
    }

    .index-nav {
        background-color: #202329;
        padding: 0 155rem /@font-size;
        font-weight: 500;
    }

    .text {
        font-size: 14rem /@font-size;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;

    }

    .register{
        .register-btn{

        }
    }

    .register,  .login{

        display: flex;
        align-items: center;

        padding:5rem /@font-size 10rem /@font-size 0 10rem /@font-size;
        /deep/ .el-button--default {

            display: flex;

            justify-content: center;
            align-items: center;
            height: 25rem /@font-size;
            background-color: #202329;
            border: 1rem /@font-size solid #5DD5C8;
            color: #ffffff;
            font-size: 14rem /@font-size;

            border-radius: 13rem /@font-size;
        }
        /deep/ &.el-menu-item.is-active {
            /* border-bottom: 0.125rem solid #5dd5c8; */
            color: #303133;
            border-bottom: none;
        }

    }

</style>
