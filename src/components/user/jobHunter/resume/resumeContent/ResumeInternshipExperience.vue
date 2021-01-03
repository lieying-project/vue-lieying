<template>
    <div class="internship-experience" >

        <h3 class="title-wrapper" :style="{display: isAddInternshipExperienceFormVisible==false?'flex':'none'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">实习经历</span>
            </div>
            <div class="right-add" @click="goAddInternshipExperience">
                <img src="../../../../../assets/imgs/add.png">
                <span class="text" @click="isInternshipExperienceFormVisible=true">添加</span>
            </div>
        </h3>
        <ul :style="{display:(isAddInternshipExperienceFormVisible==true||isEditInternshipExperienceFormVisible==true)?'none':'flex'}"
            ref="internshipExperience">
            <li v-for="internshipExperience in resume.internshipExperiences" :key="internshipExperience.id">
                <div class="left-content">
                    <div class="info-text">
                        <h4>
                            <span class="name">{{internshipExperience.company}}</span>
                            <span class="period">{{internshipExperience.startTime}}-{{internshipExperience.endTime}}</span>
                        </h4>
                    </div>
                    <h4 class="middle-wrapper">
                        <span class="text">{{internshipExperience.jobPerformance}}</span>
                    </h4>
                    <div class="desc">
                        {{internshipExperience.jobContent}}
                    </div>

                    <div class="other-info" style="display: none">
                        <span>{{internshipExperience.department}}</span>
                        <span>{{internshipExperience.technology}}</span>
                        <span>{{internshipExperience.positionName}}</span>
                        <span>{{internshipExperience.industry}}</span>
                        <span>{{internshipExperience.positionType}}</span>
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


        <form class="form" :style="{display:isAddInternshipExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加实习经历</h3>

            <div class="form-item">
                <div class="item-label">
                    公司
                </div>
                <el-input placeholder="公司" v-model="internshipExperience.company"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    部门
                </div>
                <el-input placeholder="部门" v-model="internshipExperience.department"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    行业
                </div>
                <el-input placeholder="行业" v-model="internshipExperience.industry"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    职位名称
                </div>
                <el-input placeholder="职位名称" v-model="internshipExperience.positionName"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    技能标签
                </div>
                <el-input placeholder="技能标签" v-model="internshipExperience.technology"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="internshipExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="internshipExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    工作内容
                </div>

                <el-input placeholder="工作内容" v-model="internshipExperience.jobContent" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    工作业绩
                </div>

                <el-input placeholder="工作业绩" v-model="internshipExperience.jobPerformance" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelAddInternshipExperience">取消</el-button>
                <el-button type="primary" @click="addInternshipExperience">保存</el-button>
            </div>
        </form>
        <form class="form" :style="{display:isEditInternshipExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">编辑实习经历</h3>

            <div class="form-item">
                <div class="item-label">
                    公司
                </div>
                <el-input placeholder="公司" v-model="internshipExperience.company"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    部门
                </div>
                <el-input placeholder="部门" v-model="internshipExperience.department"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    行业
                </div>
                <el-input placeholder="行业" v-model="internshipExperience.industry"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    职位名称
                </div>
                <el-input placeholder="职位名称" v-model="internshipExperience.positionName"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    技能标签
                </div>
                <el-input placeholder="技能标签" v-model="internshipExperience.technology"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="internshipExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="internshipExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    工作内容
                </div>

                <el-input placeholder="工作内容" v-model="internshipExperience.jobContent" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    工作业绩
                </div>

                <el-input placeholder="工作业绩" v-model="internshipExperience.jobPerformance" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelEditInternshipExperience">取消</el-button>
                <el-button type="primary" @click="editInternshipExperience">保存</el-button>
            </div>
        </form>
    </div>
</template>

<script>
import ResumeTitleWrapper from "../../../../common/ResumeTitleWrapper";

export default {
  name: "ResumeInternshipExperience",
  components: {ResumeTitleWrapper},
  props: {
    resume: {

    }
  },
  data() {
    return {
      isAddInternshipExperienceFormVisible: false,
      isEditInternshipExperienceFormVisible: false,
      internshipExperience: {
        id: '',
        company: '',
        department: '',
        positionType: '',
        technology: '',
        industry: '',
        positionName: '',
        startTime: '',
        endTime: '',
        jobContent: '',
        jobPerformance: ''
      },
      currentEditInternshipExperienceIndex: '',
      primaryInternshipExperience: '',
    }
  },
  methods: {
    refreshInternshipExperienceList() {
      var _this = this
      var lis = this.$refs.internshipExperience.children
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
          _this.setInternshipExperience(leftContent)
          _this.currentEditInternshipExperienceIndex=index
          _this.isEditInternshipExperienceFormVisible=true
        })
      })
    },
    setInternshipExperience(obj) {
      console.log(obj)
      var company = obj.children[0].children[0].children[0].innerText
      var period = obj.children[0].children[0].children[1].innerText
      var jobPerformance = obj.children[1].children[0].innerText
      var jobContent = obj.children[2].innerText
      var department=obj.children[3].children[0].innerText
      var technology=obj.children[3].children[1].innerText
      var positionName=obj.children[3].children[2].innerText
      var industry=obj.children[3].children[3].innerText
      var positionType=obj.children[3].children[4].innerText
      var startTime = period.slice(0, 10)
      var endTime = period.slice(11, 22)


      this.internshipExperience = {
        company: company,
        jobPerformance: jobPerformance,
        startTime: startTime,
        endTime: endTime,
        jobContent: jobContent,
        department:department,
        technology: technology,
        positionName:positionName,
        positionType:positionType,
        industry:industry
      }
      console.log(this.internshipExperience)
    },
    addInternshipExperience() {
      this.internshipExperience.id = this.resume.internshipExperiences.length
      this.resume.internshipExperiences.push(this.internshipExperience)
      this.isAddInternshipExperienceFormVisible = false
      this.internshipExperience=''
    },
    cancelAddInternshipExperience() {
      this.internshipExperience = this.primaryInternshipExperience
      this.isAddInternshipExperienceFormVisible = false
    },
    goAddInternshipExperience() {
      this.primaryInternshipExperience = this.internshipExperience
      this.isAddInternshipExperienceFormVisible = true
    },
    cancelEditInternshipExperience() {
      //this.volunteerExperience = this.primaryVolunteerExperience
      this.internshipExperience = ''
      this.isEditInternshipExperienceFormVisible= false
    },
    editInternshipExperience() {
      var _this = this
      this.internshipExperience.id = this.currentEditInternshipExperienceIndex + 1
      this.resume.internshipExperiences[this.currentEditInternshipExperienceIndex] = this.internshipExperience
      this.isEditInternshipExperienceFormVisible = false
    },
    openConfirmMessageBox(index) {
      var _this = this
      this.$confirm('删除后数据将无法恢复，是否删除？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        _this.resume.internshipExperiences.splice(index, 1)
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
    this.refreshInternshipExperienceList()
  },
  updated() {
    this.refreshInternshipExperienceList()
  }

}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

    .internship-experience {
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
