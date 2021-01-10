<template>
    <div class="admin-contanier">
        <el-container>
            <el-header style="height:40px">
                <div class="logo"><img src="~@/assets/icons/logo.png"></div>
                <h2 class="admin-title">猎英网站管理系统</h2>
            </el-header>
            <el-container style="height: 100%">
                <el-aside width="200px">
                    <el-row>
                        <el-col>
                            <el-menu
                                    default-active="/admin/company"
                                    class="el-menu-vertical-demo aside-nav"
                                    background-color="#545c64"
                                    text-color="#fff"
                                    active-text-color="#5dd5c8"
                                    :router="true"
                            >
                                <el-submenu v-for="(item,index) in menuData" :index="item.index" :key="index">
                                    <template slot="title">
                                        <i :class="item.className" style="font-size:16px"></i>
                                        <span>{{item.des}}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item v-for="(childEle,index) in item.child" :index="childEle.index"
                                                      :key="index">{{childEle.des}}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>

                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
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
              index: "",
              des: "发布资讯"
            }
          ]
        }
      ]
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
    .admin-title {
        font-size: 20rem /@font-size;
        letter-spacing: 20px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }

    .logo {
        height: 100%;
        position: relative;

        img {
            position: absolute;
            top: 50%;
            left: 100px;
            margin-top: -17rem /@font-size;
            width: 34rem /@font-size;
            height: 34rem /@font-size;
        }
    }

    .el-header, .el-footer {
        background-color: @primary-theme-color;
        color: #fff;
        text-align: center;
        line-height: 40px;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        display: table;
    }


    .el-aside {
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100vh;
        /*font-size: 16px;*/

        .aside-nav {
            height: 100vh;
        }
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        /*text-align: center;*/
        /*line-height: 160px;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-menu-item {
        /*<!--font-size: 16rem /@font-size;-->*/

    }

    /deep/ .el-submenu__title {
        color: red;
        /*<!--font-size: 14rem /@font-size;-->*/
    }
</style>
