<template>
    <div class="admin-contanier">
        <div class="admin-left">

            <el-menu
                    default-active="/admin/company"
                    class="el-menu-vertical-demo aside-nav"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#5dd5c8"
                    :router="true"
                    :collapse="isCollapse"
            >
                <el-submenu v-for="(item,index) in menuData" :index="item.index" :key="index">
                    <template slot="title">
                        <i :class="item.className" style="font-size:16px"></i>
                        <span>{{item.des}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(childEle,index) in item.child" :index="childEle.index" :key="index">
                            {{childEle.des}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="admin-right">
            <div class="right-nav">
                <div class="nav-fold">
                    <i class="el-icon-s-fold" v-if="!isCollapse" @click="isCollapse=!isCollapse" style="font-size:16px"></i>
                    <i class="el-icon-s-unfold" v-else @click="isCollapse=!isCollapse" style="font-size:16px"></i>
                </div>
                <div class="nav-logo">
                    <img src="@/assets/logo.png"/>
                </div>
                <div class="nav-title">
                    <h4>猎英管理系统</h4>
                </div>
            </div>

            <div>

            </div>
            <router-view></router-view>
        </div>



    </div>
</template>

<script>
    export default {
        name: "AdminIndex",
        data() {
            return {
                menuData: [
                    {
                        index: "/admin/company",
                        des: "公司认证管理",
                        className: "el-icon-s-check",
                        child: [{
                            index: "/admin/company",
                            des: "待处理"
                        },
                            {
                                index: "",
                                des: "已通过"
                            }
                        ]
                    }, {
                        index: "/admin/report",
                        des: "举报信息管理",
                        className: "el-icon-warning",
                        child: [{
                            index: "/admin/report",
                            des: "待处理"
                        },
                            {
                                index: "",
                                des: "已通过"
                            }
                        ]
                    }, {
                        index: "/admin/source",
                        des: "资源信息管理",
                        className: "el-icon-collection",
                        child: [{
                            index: "/admin/source",
                            des: "上传文件"
                        },
                            {
                                index: "/admin/information/publish",
                                des: "发布资讯"
                            }
                        ]
                    }
                ],
                isCollapse: false
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
        }
    }
</script>

<style scoped lang="less">
    .admin-contanier {
        height: 100%;
        display: flex;
        justify-content: start;
        background-color: #F6F6F8;
        .admin-left {
            height: 100%;
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
            width: 100%;
            background-color: #ffffff;
            img {
                width:32px;
                height: 32px;
            }
        }
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
        height:100vh;
    }
</style>
