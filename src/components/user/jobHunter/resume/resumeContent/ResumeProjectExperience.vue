<template>
    <div class="project-experience" >

        <h3 class="title-wrapper" :style="{display: isAddProjectExperienceFormVisible==false?'flex':'none'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">项目经历</span>
            </div>
            <div class="right-add" @click="goAddProjectExperience">
                <img src="../../../../../assets/imgs/add.png">
                <span class="text" @click="isAddProjectExperienceFormVisible=true">添加</span>
            </div>
        </h3>
        <ul :style="{display:(isAddProjectExperienceFormVisible==true||isEditProjectExperienceFormVisible==true)?'none':'flex'}"
            ref="volunteerExperience">
            <li v-for="projectExperience in resume.projectExperiences" :key="projectExperience.id">
                <div class="left-content">
                    <div class="info-text">
                        <h4>
                            <span class="name">{{projectExperience.name}}</span>
                            <span class="period">{{projectExperience.startTime}}-{{projectExperience.endTime}}</span>

                        </h4>
                    </div>
                    <h4 class="middle-wrapper">
                        <span class="text">{{projectExperience.performance}}</span>
                    </h4>
                    <div class="desc">
                        {{projectExperience.description}}
                    </div>
                    <div class="other-info" style="display: none">
                        <span>{{projectExperience.role}}</span>
                        <span>{{projectExperience.url}}</span>
                    </div>
                </div>
                <div class="op">
                    <div class="delete-op">
                        <img src="../../../../../assets/imgs/delete.png" class="delete-img">
                        <span class="text delete-btn">删除</span>
                    </div>
                    <div class="edit-op">
                        <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                        <span class="text edit-btn">编辑</span>
                    </div>
                </div>
            </li>
        </ul>


        <form class="form" :style="{display:isAddProjectExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加项目经历</h3>
            <div class="form-item">
                <div class="item-label">
                    项目名称
                </div>
                <el-input placeholder="项目名称" v-model="projectExperience.name"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    角色
                </div>
                <el-input placeholder="角色" v-model="projectExperience.role"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="projectExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="projectExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目描述
                </div>

                <el-input placeholder="项目描述" v-model="projectExperience.description" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目业绩
                </div>

                <el-input placeholder="项目描述" v-model="projectExperience.performance" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelAddProjectExperience">取消</el-button>
                <el-button type="primary" @click="addProjectExperience">保存</el-button>
            </div>
        </form>
        <form class="form" :style="{display:isEditProjectExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">编辑项目经历</h3>
            <div class="form-item">
                <div class="item-label">
                    项目名称
                </div>
                <el-input placeholder="项目名称" v-model="projectExperience.name"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    角色
                </div>
                <el-input placeholder="角色" v-model="projectExperience.role"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="projectExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="projectExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目描述
                </div>

                <el-input placeholder="项目描述" v-model="projectExperience.description" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目业绩
                </div>

                <el-input placeholder="项目描述" v-model="projectExperience.performance" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelEditProjectExperience">取消</el-button>
                <el-button type="primary" @click="editProjectExperience">保存</el-button>
            </div>
        </form>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ResumeProjectExperience",
  data() {
    return {
      isAddProjectExperienceFormVisible: false,
      isEditProjectExperienceFormVisible: false,
      primaryProjectExperience: '',
      projectExperience: {
        id: '',
        name: '',
        role: '',
        url: '',
        startTime: '',
        endTime: '',
        description: '',
        performance: ''
      },
      currentEditProjectExperienceIndex:''
    }
  },
  methods: {
    refreshProjectExperienceList() {
      var _this = this
      var lis = this.$refs.volunteerExperience.children
      //console.log(lis)
      lis.forEach((li, index) => {
        var leftContent = li.children[0]
        var op = li.children[1]
        var deleteOp = op.children[0]
        var editOp = op.children[1]
        // console.log(op)
        // console.log(deleteOp)
        // console.log(editOp)
        deleteOp.style.display = 'none'
        editOp.style.display = 'none'
        li.addEventListener('mouseover', function () {
          this.style.backgroundColor = '#F6F6F8'
          deleteOp.style.display = 'flex'
          editOp.style.display = 'flex'
        })
        li.addEventListener('mouseout', function () {
          this.style.backgroundColor = '#ffffff'
          deleteOp.style.display = 'none'
          editOp.style.display = 'none'
        })
        deleteOp.addEventListener('click', function () {
          _this.openConfirmMessageBox(index)
        })
        editOp.addEventListener('click', function () {

          _this.setProjectExperience(leftContent)
          _this.currentEditProjectExperienceIndex=index
          _this.isEditProjectExperienceFormVisible=true
        })
      })

    },
    setProjectExperience(obj) {
      //console.log(obj)
      var name = obj.children[0].children[0].children[0].innerText
      var period = obj.children[0].children[0].children[1].innerText
      var performance = obj.children[1].children[0].innerText
      var description = obj.children[2].innerText
      var role=obj.children[3].children[0].innerText
      var url=obj.children[3].children[1].innerText
      var startTime = period.slice(0, 10)
      var endTime = period.slice(11, 22)
      this.projectExperience = {
        name: name,
        performance: performance,
        startTime: startTime,
        endTime: endTime,
        description: description,
        role:role,
        url:url
      }
      //console.log(this.projectExperience)
    },
    addProjectExperience() {
      this.projectExperience.id = this.resume.projectExperiences.length
      this.resume.projectExperiences.push(this.projectExperience)
      this.isAddProjectExperienceFormVisible = false
      this.projectExperience=''
    },
    cancelAddProjectExperience() {
      this.projectExperience = this.primaryProjectExperience
      this.isAddProjectExperienceFormVisible = false
    },
    goAddProjectExperience() {
      this.primaryProjectExperience = this.projectExperience
      this.isAddProjectExperienceFormVisible = true
    },
    cancelEditProjectExperience() {
      //this.volunteerExperience = this.primaryVolunteerExperience
      this.projectExperience = ''
      this.isEditProjectExperienceFormVisible = false
    },
    editProjectExperience() {
      var _this = this
      this.projectExperience.id = this.currentEditProjectExperienceIndex + 1
      this.resume.projectExperiences[this.currentEditProjectExperienceIndex] = this.projectExperience
      this.isEditProjectExperienceFormVisible = false
    },
    openConfirmMessageBox(index) {
      var _this = this
      this.$confirm('删除后数据将无法恢复，是否删除？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        _this.resume.projectExperiences.splice(index, 1)
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
    this.refreshProjectExperienceList()
  },
  updated() {
    this.refreshProjectExperienceList()
  },
  computed:{
    ...mapState(['resume'])
  }

}
</script>

<style scoped lang="less">


    .project-experience {
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;

        .title-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18rem /@font-size;
            font-weight: 400;
            padding: 0 30rem /@font-size;

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
            flex-flow: column nowrap;
            margin: 0;
            /*padding-left: 0;*/
            list-style-type: none;
            padding: 0 30rem /@font-size 30rem /@font-size 30rem /@font-size;

            li {

                display: flex;
                justify-content: space-between;
                cursor: pointer;
                padding-left: 10rem /@font-size;

                .left-content {
                    .info-text {
                        .name {
                            font-size: 15rem /@font-size;
                            color: #414A60;
                        }

                        .period {
                            color: #9fa3b0;
                            font-size: 12rem /@font-size;
                            margin-left: 30rem /@font-size;
                            font-weight: 400;
                        }
                    }

                    .middle-wrapper {
                        font-size: 15rem /@font-size;
                        color: #61687c;

                    }

                    .desc {
                        color: #61687c;
                        font-size: 14rem /@font-size;
                        padding: 7rem /@font-size 0 0;
                        margin-bottom: 10rem /@font-size;
                    }
                }

                .op {
                    display: flex;
                    align-items: center;
                    color: #00c2b3;

                    .delete-op {
                        display: flex;
                        align-items: center;

                        .text {
                            font-size: 14rem /@font-size;
                            margin-right: 5rem /@font-size;
                        }

                        .delete-img {
                            width: 18rem /@font-size;
                            height: 18rem /@font-size;
                        }
                    }

                    .edit-op {
                        display: flex;
                        align-items: center;

                        .text {
                            font-size: 14rem /@font-size;
                            margin-right: 5rem /@font-size;
                        }

                        .edit-img {
                            width: 18rem /@font-size;
                            height: 18rem /@font-size;
                            margin-left: 15rem /@font-size;
                        }
                    }


                }


            }
        }
        .form {
            //display: flex;
            flex-flow: column nowrap;
            padding: 20rem /@font-size 60rem /@font-size;
            min-height: 80rem /@font-size;
            background-color: #F8F9FB;
            flex-flow: column nowrap;

            .edit-title {
                font-size: 16rem /@font-size;
                font-weight: 400;
                margin-top: 0;
                padding: 0;
                color: #24272e;
            }

            .form-item {
                margin-bottom: 10rem /@font-size;

                .item-label {
                    color: #495060;
                    font-size: 14rem /@font-size;
                    margin-bottom: 10rem /@font-size;
                }

            }

            .op {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
