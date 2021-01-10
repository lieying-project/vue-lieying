<template>
    <div class="volunteer-experience">

        <h3 class="title-wrapper" :style="{display: isAddVolunteerExperienceFormVisible==false?'flex':'none'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">志愿服务经历</span>
            </div>
            <div class="right-add" @click="goAddVolunteerExperience">
                <img src="../../../../../assets/imgs/add.png">
                <span class="text">添加</span>
            </div>
        </h3>
        <ul :style="{display:(isAddVolunteerExperienceFormVisible==true||isEditVolunteerExperienceFormVisible==true)?'none':'flex'}"
            ref="volunteerExperience">
            <li v-for="volunteerExperience in resume.volunteerExperiences" :key="volunteerExperience.id">
                <div class="left-content">
                    <div class="info-text">
                        <h4>
                            <span class="name">{{volunteerExperience.name}}</span>
                            <span class="period">{{volunteerExperience.startTime}}-{{volunteerExperience.endTime}}</span>
                        </h4>
                    </div>
                    <h4 class="middle-wrapper">
                        <span class="text">{{volunteerExperience.duration}}</span>
                    </h4>
                    <div class="desc">
                        {{volunteerExperience.description}}
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
        <form class="form" :style="{display:isAddVolunteerExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加志愿服务经历</h3>
            <div class="form-item">
                <div class="item-label">
                    项目名称
                </div>
                <el-input placeholder="项目名称" v-model="volunteerExperience.name"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    总服务时长
                </div>
                <el-input placeholder="总服务时长" v-model="volunteerExperience.duration"></el-input>
            </div>

            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="volunteerExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="volunteerExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目描述
                </div>

                <el-input placeholder="项目描述" v-model="volunteerExperience.description" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelAddVolunteerExperience">取消</el-button>
                <el-button type="primary" @click="addVolunteerExperience">保存</el-button>
            </div>
        </form>
        <form class="form" :style="{display:isEditVolunteerExperienceFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加志愿服务经历</h3>
            <div class="form-item">
                <div class="item-label">
                    项目名称
                </div>
                <el-input placeholder="项目名称" v-model="volunteerExperience.name"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    总服务时长
                </div>
                <el-input placeholder="总服务时长" v-model="volunteerExperience.duration"></el-input>
            </div>

            <div class="form-item-group">
                <div class="form-item">
                    <div class="item-label">
                        项目开始时间
                    </div>
                    <el-input placeholder="项目开始时间" v-model="volunteerExperience.startTime"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        项目结束时间
                    </div>
                    <el-input placeholder="项目结束时间" v-model="volunteerExperience.endTime"></el-input>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    项目描述
                </div>

                <el-input placeholder="项目描述" v-model="volunteerExperience.description" type="textarea" maxlength="300"
                          show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelEditVolunteerExperience">取消</el-button>
                <el-button type="primary" @click="editVolunteerExperience">保存</el-button>
            </div>
        </form>
    </div>
</template>

<script>
import ResumeTitleWrapper from "../../../../common/ResumeTitleWrapper";
import {mapState} from 'vuex'
export default {
  name: "ResumeVolunteerExperience",
  components: {ResumeTitleWrapper},
  data() {
    return {
      isAddVolunteerExperienceFormVisible: false,
      isEditVolunteerExperienceFormVisible: false,
      volunteerExperience: {
        id: '',
        name: '',
        duration: '',
        startTime: '',
        endTime: '',
        description: '',
        resume:{
          id:this.resume.id
        }
      },
      primaryVolunteerExperience: {
        id: '',
        name: '',
        duration: '',
        startTime: '',
        endTime: '',
        description: '',
        resume:{
          id:this.resume.id
        }
      },
      currentEditVolunteerExperienceIndex:''
    }
  },
  methods: {
    refreshVolunteerExperienceList() {
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
          //_this.resume.volunteerExperiences.splice(index, 1)
        })
        editOp.addEventListener('click', function () {

          _this.setVolunteerExperience(leftContent)
          _this.currentEditVolunteerExperienceIndex = index
          _this.isEditVolunteerExperienceFormVisible = true
        })
      })
    },
    setVolunteerExperience(obj) {
      //console.log(obj)
      var name = obj.children[0].children[0].children[0].innerText
      var period = obj.children[0].children[0].children[1].innerText
      var duration=obj.children[1].children[0].innerText
      var description=obj.children[2].innerText
      var startTime=period.slice(0,10)
      var endTime=period.slice(11,22)
      this.volunteerExperience = {
        name: name,
        duration: duration,
        startTime: startTime,
        endTime: endTime,
        description: description
      }
      //console.log(this.volunteerExperience)
    },
    addVolunteerExperience() {
      this.volunteerExperience.id = this.resume.volunteerExperiences.length
      this.resume.volunteerExperiences.push(this.volunteerExperience)
      this.isAddVolunteerExperienceFormVisible = false
      this.$store.dispatch('saveVolunteerExperienceAction',this.volunteerExperience)
      this.volunteerExperience= {
        id: '',
        name: '',
        duration: '',
        startTime: '',
        endTime: '',
        description: '',
        resume:{
          id:this.resume.id
        }
      }
    },
    cancelAddVolunteerExperience() {
      this.volunteerExperience = this.primaryVolunteerExperience
      this.isAddVolunteerExperienceFormVisible = false
    },
    goAddVolunteerExperience() {
      this.primaryVolunteerExperience = this.volunteerExperience
      this.isAddVolunteerExperienceFormVisible = true
    },
    cancelEditVolunteerExperience () {
      //this.volunteerExperience = this.primaryVolunteerExperience
      this.volunteerExperience=''
      this.isEditVolunteerExperienceFormVisible= false
    },
    editVolunteerExperience () {
      var _this= this
      this.volunteerExperience.id=this.currentEditVolunteerExperienceIndex+1
      this.resume.volunteerExperiences[this.currentEditVolunteerExperienceIndex]=this.volunteerExperience
      this.isEditVolunteerExperienceFormVisible= false
    },
    openConfirmMessageBox(index) {
      var _this=this
      this.$confirm('删除后数据将无法恢复，是否删除？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        _this.resume.volunteerExperiences.splice(index,1)
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
    this.refreshVolunteerExperienceList()
  },
  updated() {
    this.refreshVolunteerExperienceList()
  },
  computed:{
    ...mapState(['resume'])
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

    .volunteer-experience {
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
    }
</style>
