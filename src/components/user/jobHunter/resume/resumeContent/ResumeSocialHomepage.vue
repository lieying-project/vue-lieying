<template>
    <div class="social-homepage">

        <h3 class="title-wrapper">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">社交主页</span>
            </div>
            <div class="right-add">
                <img src="../../../../../assets/imgs/add.png">
                <span class="text" @click="isSocialHomepageFormVisible=true">添加</span>
            </div>
        </h3>
        <ul ref="socialHomepage">
            <li v-for="(homepage,index) in resume.socialHomepages" :key="index">
                <div class="left-url">
                    <img src="../../../../../assets/imgs/icon-sns-githubb.c8863514.png">
                    <span class="text">{{homepage.url}}</span>
                </div>
                <div class="op">
                    <img src="../../../../../assets/imgs/delete.png">
                    <span class="text delete-btn">删除</span>
                    <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                    <span class="text edit-btn">编辑</span>
                </div>
            </li>
        </ul>
        <el-dialog title="添加社交主页" :visible.sync="isSocialHomepageFormVisible" width="30%">
            <el-input placeholder="请输入社交主页url" v-model="currentSocialHomepage"></el-input>
            <br/>
            <div class="add-btn">
                <el-button type="primary" @click="addSocialHomepage">添加</el-button>
            </div>
        </el-dialog>
        <el-dialog title="编辑社交主页" :visible.sync="isEditSocialHomepageFormVisible" width="30%">
            <el-input placeholder="请输入社交主页url" v-model="currentSocialHomepage"></el-input>
            <br/>
            <div class="add-btn">
                <el-button type="primary" @click="editSocialHomepage">编辑</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>


export default {
  name: "ResumeSocialHomepage",
  props: {
    resume: {

    }
  },
  data() {
    return {
      currentSocialHomepage: '',
      isSocialHomepageFormVisible: false,
      isEditSocialHomepageFormVisible: false,
      currentEditHomepageIndex: 0//当前编辑的社交主页index
    }
  },
  methods: {
    addSocialHomepage() {
      var lastIndex = 0
      this.resume.socialHomepages.forEach((item, index) => {
        lastIndex = index
      })
      var socialHomepage = {id: (lastIndex + 1), url: this.currentSocialHomepage}
      this.resume.socialHomepages.push(socialHomepage)
      this.isSocialHomepageFormVisible = false
      this.currentSocialHomepage = ''
    },
    editSocialHomepage() {
      this.resume.socialHomepages[this.currentEditHomepageIndex].url = this.currentSocialHomepage
      this.isEditSocialHomepageFormVisible = false
      this.currentSocialHomepage = ''
    },
    refreshSocialHomepageLi() {
      //刷新所有社交主页标签
      var _this = this
      var lis = this.$refs.socialHomepage.children
      //console.log(lis)
      lis.forEach((li, index) => {
        var url = li.children[0].children[1].innerText
        var deleteBtn = li.children[1].children[1]
        // console.log(deleteBtn)
        var editBtn = li.children[1].children[3]
        // console.log(addBtn)
        li.children[1].style.display = 'none'
        li.addEventListener('mouseover', function () {
          // console.log(this.children[1])
          this.children[1].style.display = 'flex'
          this.style.backgroundColor = '#F6F6F8'
        })
        li.addEventListener('mouseout', function () {
          this.children[1].style.display = 'none'
          this.style.backgroundColor = '#ffffff'
        })
        deleteBtn.addEventListener('click', function () {
          _this.openConfirmMessageBox(index)
          // _this.resume.socialHomepages.splice(index, 1)
        })
        editBtn.addEventListener('click', function () {
          _this.currentSocialHomepage = url
          _this.isEditSocialHomepageFormVisible = true
          _this.currentEditHomepageIndex = index
        })
      })
    },
    openConfirmMessageBox(index) {
      if (this.resume.socialHomepages.length==0){
        return
      }
      var _this=this
      this.$confirm('删除后数据将无法恢复，是否删除？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        _this.resume.socialHomepages.splice(index, 1)
        this.$message({
          type: 'info',
          message: '删除成功'
        });
      }).catch(action => {
        this.$message({
          type: 'info',
          message: action === 'cancel'
              ? '删除已取消'
              : '删除已取消'
        })
      });
    }
  },
  mounted() {
    this.refreshSocialHomepageLi()
  },
  updated() {
    this.refreshSocialHomepageLi()
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";
    .social-homepage {
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;
        margin: 0 30rem /@font-size;

        .title-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18rem /@font-size;
            font-weight: 400;

            .left-title {
                display: flex;
                align-items: center;
                .title-before {
                    width: 4rem /@font-size;
                    height: 15rem /@font-size;
                    background-color: #00c2b3;
                    margin-right: 10rem /@font-size;
                }
            }
            .right-add {
                display: flex;
                align-items: center;
                cursor: pointer;
                img {
                    width: 20rem /@font-size;
                    height: 20rem /@font-size;
                }
                .text {
                    margin-left: 5rem /@font-size;
                    color: #00c2b3;
                    font-size: 14rem /@font-size;
                }
            }
        }
        ul {
            display: flex;
            margin-top: 0;
            flex-flow: column nowrap;
            list-style-type: none;
            padding-left: 0;

            li {
                height: 40rem /@font-size;
                line-height: 40rem /@font-size;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                margin-top: 10rem /@font-size;
                padding-left: 10rem /@font-size;

                .left-url {
                    display: flex;
                    align-items: center;

                    img {
                        width: 24rem /@font-size;
                        height: 24rem /@font-size;
                    }

                    .text {
                        color: #414A60;
                        font-size: 14rem /@font-size;
                        margin-left: 15rem /@font-size;

                    }
                }

                .op {
                    display: flex;
                    align-items: center;
                    color: #00c2b3;

                    .text {
                        font-size: 14rem /@font-size;
                        margin-right: 5rem /@font-size;

                    }

                    img {
                        width: 18rem /@font-size;
                        height: 18rem /@font-size;

                        &.edit-img {
                            margin-left: 15rem /@font-size;
                        }
                    }
                }
            }
        }

        .add-btn {
            display: flex;
            justify-content: flex-end;
            margin-top: 10rem /@font-size;
        }
    }
</style>
