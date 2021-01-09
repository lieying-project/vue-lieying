<template>
    <div class="admin-contanier">
        <div class="admin-left">

            <el-menu
                    default-active="this.$route.path"
                    class="el-menu-vertical-demo aside-nav"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#5dd5c8"
                    :router="true"
                    :collapse="isCollapse"
            >
                <el-menu-item v-for="(item,index) in menuData" :index="item.index"  :key="index">
                    <i :class="item.className" style="font-size:16px"></i>
                    <span slot="title">{{item.des}}</span>
                </el-menu-item>
            </el-menu>
        </div>

        <div class="admin-right">
            <div class="nav">
                <div class="right-nav">
                    <div class="nav-fold">
                        <i class="el-icon-s-fold" v-if="!isCollapse" @click="isCollapse=!isCollapse" style="font-size:16px"></i>
                        <i class="el-icon-s-unfold" v-else @click="isCollapse=!isCollapse" style="font-size:16px"></i>
                    </div>

                    <div class="nav-logo">
                        <img src="@/assets/logo.png"/>
                    </div>

                    <div class="nav-title">
                        <h4>猎英招聘网</h4>
                    </div>
                </div>

                <div class="index-nav">
                    <el-menu :default-active="this.$route.path"
                             router
                             class="el-menu-demo"
                             mode="horizontal"
                             active-text-color="#5dd5c8" >
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
            </div>


            <router-view></router-view>
        </div>



    </div>
</template>

<script>
    export default {
        name: "AdminIndex",
        created() {
          this.$router.push('/recruiterIndex/recruiterInfo')
        },
        data() {
            return {
                menuData: [
                    {
                        index: "/recruiterIndex/recruiterInfo",
                        des: "招聘信息管理",
                        className: "el-icon-edit-outline",
                    }, {
                        index: "/recruiterIndex/companyInfo",
                        des: "公司信息管理",
                        className: "el-icon-office-building",
                    }, {
                        index: "/recruiterIndex/dispatcherInfo",
                        des: "投简信息管理",
                        className: "el-icon-collection",
                    },{
                        index: "/recruiterIndex/personInfo",
                        des: "个人中心管理",
                        className: "el-icon-user",
                    }
                ],
                isCollapse: false,
                msgNum:1,

            }
        },
        created() {
            // this.$store.dispatch('adminLoginAction',{
            //   username:'xiaoming',
            //   password:'111111'
            // })
            // this.$store.dispatch('getAdministratorByIdAction', 1)
            // this.$store.dispatch('getJobHunterReportByJobHunterIdAndPositionIdAction', {jobHunterId: 1, positionId: 1})
            // //更新举报信息
            // this.$store.dispatch('updateJobHunterReportAction',
            //     {
            //       reason: '非法',
            //       footnote: 'footnote',
            //       evidenceScreenShot: 'evidenceScreenShot',
            //       position:{
            //         id:1
            //       },
            //       jobHunter:{
            //         id:1
            //       }
            //     }
            // )

            this.$store.dispatch('updateResumeStateAction', {
                jobHunter: {
                    id: 1
                },
                position: {
                    id: 1
                },
                state: '不符合'
            })
        },
        methods:{

        }

    }
</script>

<style scoped lang="less">
    /*html,body {*/
    /*    height: 100%;*/
    /*}*/
    .admin-contanier {
        display: flex;
        justify-content: start;
        background-color: #F6F6F8;
        height: 100%;

        .admin-left {
            background-color:rgb(84, 92, 100);
            padding-top: 20px;
        }
    }

    .admin-right {
        color: #333;
        width: 100%;
        .right-nav {
            display: flex;
            justify-content: start;
            align-items: center;
            background-color: #ffffff;
            img {
                width:32px;
                height: 32px;
            }
        }
    }
    .nav {
        width: 100%;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-logo,.nav-fold {
        padding-left: 40px;
    }
    .nav-title {
        letter-spacing: 2px;
        font-size: 24px;
    }

    .el-menu {
        border-right: none;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 240px;
        min-height: 100vh;
    }

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
