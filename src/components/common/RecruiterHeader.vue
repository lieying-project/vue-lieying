<template>
    <div class="index-nav">
        <el-menu :default-active="this.$route.path"
                 router
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#202329"
                 text-color="#fff"
                 active-text-color="#5dd5c8" >
            <el-menu-item ><img class="iconImage" src="@/assets/logo.png"></el-menu-item>
            <el-menu-item index="/recruiterInfo">  <span class="text">招聘信息管理</span></el-menu-item>
            <el-menu-item index="/companyInfo">  <span class="text">公司信息管理</span></el-menu-item>
            <el-menu-item index="/dispatcherInfo">  <span class="text">投递信息管理</span></el-menu-item>
            <el-menu-item index="/personInfo">  <span class="text">个人中心</span></el-menu-item>
            <el-submenu  class="avatar text"  index="/recruiterIndex">
                <template slot="title">
                    梁远
                    <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                </template>
                <el-menu-item index="/jobHunterIndex">切换为求职者</el-menu-item>
            </el-submenu>
            <el-menu-item index="/chat" class="msg">
                <el-badge :value=msgNum class="text">
                    消息
                </el-badge>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "RecruiterHeader",
        data(){
            return {
                activeIndex:"1",
                msgNum:1
            }
        },
        methods:{
            handleSelect() {
            }
        }
    }
</script>

<style scoped lang="less">
    .msg,.resume,.avatar{
        float: right !important;
    }
    /* 设置消息上面的数量提示的位置*/
    /deep/ .el-badge__content.is-fixed{
        top: 16px;
    }
    .index-nav{
        background-color: #202329;
        /*<!--padding: 20rem /@font-size 155rem /@font-size ;-->*/
        font-weight: 500;
    }
    .text{
        font-size: 14px;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;

    }

    .iconImage {
        width:32px;
        height:32px;
    }


</style>


