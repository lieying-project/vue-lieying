<template>
    <div class="education-experience">
        <h3 class="title-wrapper" :style="{display:(isAddEducationFormVisible==true||isEditEducationFormVisible==true)?'none':'flex'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">教育经历</span>
            </div>
            <div class="right-add" @click="isAddEducationFormVisible=true">
                <img src="../../../../../assets/imgs/add.png">
                <span class="text" >添加</span>
            </div>
        </h3>
        <form class="add-education-experience-form" :style="{display:isAddEducationFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加教育经历</h3>
            <div class="form-item">
                <div class="item-label">
                    学校名称
                </div>
                <el-input  placeholder="学校名称" v-model="educationExperience.school"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    学历
                </div>
                <el-input  placeholder="学历" v-model="educationExperience.education"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    专业
                </div>
                <el-input  placeholder="学历" v-model="educationExperience.profession"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item time-quantum">
                    <div class="item-label">
                        时间段
                    </div>
                    <el-select  v-model="educationExperience.startTime">
                        <el-option label="2011" value="2011"/>
                        <el-option label="2012" value="2012"/>
                        <el-option label="2013" value="2013"/>
                    </el-select>
                    至
                    <el-select  v-model="educationExperience.endTime">
                        <el-option label="2014" value="2014"/>

                        <el-option label="2015" value="2015"/>
                        <el-option label="2016" value="2016"/>
                    </el-select>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    在校经历（选填）
                </div>

                <el-input  placeholder="在校经历" v-model="educationExperience.experience" type="textarea" maxlength="300"
                           show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelAddEducationExperience" >取消</el-button>
                <el-button type="primary" @click="addEducationExperience" >保存</el-button>
            </div>
        </form>

        <form class="add-education-experience-form" :style="{display:isEditEducationFormVisible==true?'flex':'none'}">
            <h3 class="edit-title">添加教育经历</h3>
            <div class="form-item">
                <div class="item-label">
                    学校名称
                </div>
                <el-input  placeholder="学校名称" v-model="educationExperience.school"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    学历
                </div>
                <el-input  placeholder="学历" v-model="educationExperience.education"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    专业
                </div>
                <el-input  placeholder="学历" v-model="educationExperience.profession"></el-input>
            </div>
            <div class="form-item-group">
                <div class="form-item time-quantum">
                    <div class="item-label">
                        时间段
                    </div>
                    <el-select  v-model="educationExperience.startTime">
                        <el-option label="2011" value="2011"/>
                        <el-option label="2012" value="2012"/>
                        <el-option label="2013" value="2013"/>
                    </el-select>
                    至
                    <el-select  v-model="educationExperience.endTime">
                        <el-option label="2014" value="2014"/>

                        <el-option label="2015" value="2015"/>
                        <el-option label="2016" value="2016"/>
                    </el-select>
                </div>
            </div>
            <div class="form-item">
                <div class="item-label">
                    在校经历（选填）
                </div>

                <el-input  placeholder="在校经历" v-model="educationExperience.experience" type="textarea" maxlength="300"
                           show-word-limit></el-input>
            </div>
            <div class="form-item op">
                <el-button type="default" @click="cancelAddEducationExperience" >取消</el-button>
                <el-button type="primary" @click="editEducationExperience" >保存</el-button>
            </div>
        </form>
        <ul :style="{display:(isAddEducationFormVisible==true||isEditEducationFormVisible==true)?'none':'flex'}" ref="educationExperience">
            <li v-for="educationExperience1 in resume.educationExperiences" :key="educationExperience1.id">
                <div class="left-content">
                    <div class="info-text">
                        <h4 class="school">
                            <span class="name">{{educationExperience1.school}}</span>
                            <span class="period">{{educationExperience1.startTime}}-{{educationExperience1.endTime}}</span>
                        </h4>
                    </div>
                    <h4 class="education-wrapper">
                        <span class="profession">{{educationExperience1.profession}}</span>
                        |
                        <span class="education">{{educationExperience1.education}}</span>
                    </h4>
                    <div class="experience">
                        {{educationExperience1.experience}}
                    </div>
                </div>
                <div class="op">
                    <div class="delete-op">
                        <img src="../../../../../assets/imgs/delete.png" class="delete-img">
                        <span class="text delete-btn" >删除</span>
                    </div>
                    <div class="edit-op">
                        <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                        <span class="text edit-btn" >编辑</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: "ResumeEducationExperience",
  props: {
    resume: {
    }
  },
  data () {
    return {
      currentEducationExperience: '',
      isAddEducationFormVisible: false,
      educationExperience: {
        id: '',
        school: '',
        education: '',
        profession: '',
        startTime: '',
        endTime: '',
        experience: ''
      },
      currentEditEducationExperienceIndex:0,
      isEditEducationFormVisible: false
    }
  },
  methods: {
    initEducationExperience(){
      this.educationExperience={
        id: '',
        school: '',
        education: '',
        profession: '',
        startTime: '',
        endTime: '',
        experience: ''
      }
    },
    addEducationExperience () {
      var lastIndex=0
      this.resume.educationExperiences.forEach((item,index)=>{
        lastIndex=item.id
      })
      this.educationExperience.id=lastIndex+1
      this.resume.educationExperiences.push(this.educationExperience)
      //console.log(this.resume.educationExperiences)
      this.isAddEducationFormVisible=false
      this.initEducationExperience()
    },
    editEducationExperience(){
      this.resume.educationExperiences[this.currentEditEducationExperienceIndex]=this.educationExperience
      this.initEducationExperience()
      this.isEditEducationFormVisible=false
    },
    cancelAddEducationExperience () {
      this.educationExperience=''
      this.isAddEducationFormVisible=false
      this.isEditEducationFormVisible=false
    },
    setEducationExperience(obj){
      var school= obj.children[0].children[0].children[0].innerText
      var period=obj.children[0].children[0].children[1].innerText
      var profession=obj.children[1].children[0].innerText
      var education=obj.children[1].children[1].innerText
      var experience=obj.children[2].innerText
      var startTime=period.slice(0,4)
      var endTime=period.slice(5,10)
      this.educationExperience={ id: '',
        school: school,
        education: education,
        profession: profession,
        startTime: startTime,
        endTime: endTime,
        experience: experience}
      //console.log(this.educationExperience)
    },
    refreshEducationExperienceList(){
      var _this = this
      var lis=this.$refs.educationExperience.children
      // console.log(lis)
      lis.forEach((li,index) => {
        var leftContent=li.children[0]
        var op=li.children[1]
        var deleteOp=op.children[0]
        var editOp=op.children[1]
        // console.log(op)
        // console.log(deleteOp)
        // console.log(editOp)
        deleteOp.style.display='none'
        editOp.style.display='none'
        li.addEventListener('mouseover',function(){
          this.style.backgroundColor ='#F6F6F8'
          deleteOp.style.display='flex'
          editOp.style.display='flex'
        })
        li.addEventListener('mouseout',function(){
          this.style.backgroundColor='#ffffff'
          deleteOp.style.display='none'
          editOp.style.display='none'
        })
        deleteOp.addEventListener('click',function () {
          _this.openConfirmMessageBox(index)
          //_this.resume.educationExperiences.splice(index,1)
        })
        editOp.addEventListener('click',function () {
          _this.isEditEducationFormVisible=true
           _this.setEducationExperience(leftContent)
           _this.currentEditEducationExperienceIndex=index
        })
      })
    },
    openConfirmMessageBox(index) {
      var _this=this
      this.$confirm('删除后数据将无法恢复，是否删除？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        _this.resume.educationExperiences.splice(index,1)
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
    this.refreshEducationExperienceList()
  },
  updated() {
    this.refreshEducationExperienceList()
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";
    .education-experience {
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;

        .title-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18rem /@font-size;
            font-weight: 400;
            padding: 10rem /@font-size 30rem /@font-size;
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
        .add-education-experience-form {
            display: flex;
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
            .op{
                display: flex;
                justify-content: flex-end;
            }
        }
        ul{
            display: flex;
            flex-flow: column nowrap;
            margin: 0;
            /*padding-left: 0;*/
            list-style-type: none;
            padding:  0 30rem /@font-size 30rem /@font-size 30rem /@font-size;
            li{

                display: flex;
                justify-content: space-between;
                cursor: pointer;
                padding-left: 10rem /@font-size;
                .left-content{
                    .info-text{
                        .name{
                            font-size: 15rem /@font-size;
                            color: #414A60;
                        }
                        .period{
                            color: #9fa3b0;
                            font-size: 12rem /@font-size;
                            margin-left: 30rem /@font-size;
                            font-weight: 400;
                        }
                    }
                    .education-wrapper{
                        font-size: 15rem /@font-size;
                        color: #61687c;
                        .profession{

                        }
                        .education{

                        }
                    }
                    .experience{
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
                    .delete-op{
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
                    .edit-op{
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
