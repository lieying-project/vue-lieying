<template>
    <div class="main">

        <el-card class="box-card">
            <div slot="header" class="resume-list-header">
                <span class="title">简历信息列表</span>
                <div class="btn-group">
<!--                    <el-button  round class="btn">导入简历</el-button>-->
                    <el-button type="primary" round class="btn">新建简历</el-button>
                </div>
            </div>
            <ul class="resume-list" v-if="jobHunter!=null&&jobHunter.resumes!=null"
             ref="resumeItems">
                <li class="resume-list-item" v-for="(resume,index) in jobHunter.resumes " :key="index"  @click="toDetailResume(index)">
                    <div class="image-box" >
                        <img data-v-38a9cec5="" src="https://z.zhipin.com/H5/images/resume/cv_template_boss@2x.png" class="img">
                    </div>
                    <div class="resume">
                        <div class="desc">
                            <span class="name"> {{resume.name }}</span>
                            <span class="date">{{resume.createdTime | formatDate}}</span>
                        </div>
                        <ul class="operate-list">
                            <li @click="saveResume($event)"><img src="../../../../../assets/imgs/save.png"><el-button  type="text" >保存</el-button></li>
                            <li @click="downloadResume($event)"><img src="../../../../../assets/imgs/download.png"><el-button  type="text" >下载</el-button></li>
                            <li @click="renameResume($event)"><img src="../../../../../assets/imgs/rename.png"><el-button  type="text" >重命名</el-button></li>
                            <li @click="deleteResume($event)"><img src="../../../../../assets/imgs/delete.png"><el-button  type="text">删除</el-button></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "ResumeInfoList",
  computed:{
    ...mapState(['jobHunter'])
  },
  methods:{
    initResumeList(){
     // console.log(this.$refs.resumeItems)
      var lis = this.$refs.resumeItems.children
      lis.forEach((li, index) => {
        var operateList=li.children[1].children[1]
        //console.log(operateList)
        li.addEventListener('mouseover', function () {
          this.style.backgroundColor = '#F6F6F8'
          operateList.style.display = 'flex'
          operateList.style.display = 'flex'
        })
        li.addEventListener('mouseout', function () {
          this.style.backgroundColor = '#ffffff'
          operateList.style.display = 'none'
          operateList.style.display = 'none'
        })
      })
    },
    toDetailResume(index){
      this.$router.push('/resume/'+this.jobHunter.resumes[index].id)
    },
    saveResume(event){
      console.log(event)
      event.cancelBubble=true
      console.log("保存简历")
    },
    downloadResume(event){
      event.cancelBubble=true
      console.log("下载简历")
    },
    renameResume(event){
      event.cancelBubble=true
      console.log("重命名简历")
    },
    deleteResume(event){
      event.cancelBubble=true
      console.log("删除简历")
    }
  },
  mounted() {
    this.initResumeList()
  },
  updated() {
    this.initResumeList()
  }
}
</script>

<style scoped lang="less">

    .main {
        width: 1184rem /@font-size;
        height: auto;
        background-color: #FFFFFF;
        margin: 20rem /@font-size 0 20rem /@font-size 155rem /@font-size;
        .box-card{
            border-radius: 10rem /@font-size;
            padding: 0 20rem /@font-size;
            .resume-list-header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .title{
                    font-size: 18rem /@font-size;
                }
                .btn-group{
                    display: flex;
                    .btn{
                        font-size: 14rem /@font-size;
                    }
                }
            }
            .resume-list{
                display: flex;
                flex-flow: column nowrap;
                list-style-type: none;
                margin: 10rem /@font-size 0;
                padding: 0;
                .resume-list-item{
                    display: flex;
                    justify-content: space-between;
                    padding: 10rem /@font-size ;
                    cursor: pointer;
                    .image-box{
                        width: 100rem /@font-size;
                        height: 141rem /@font-size;
                        border-radius: 4rem /@font-size;
                        border: 1rem /@font-size solid #d1d4db;
                        overflow: hidden;
                        position: relative;
                        .img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .resume{
                        flex: 1;
                        display: flex;
                        flex-flow: column nowrap;
                        margin-left: 20rem /@font-size;
                        justify-content: space-between;
                        .desc{
                            display: flex;
                            justify-content: space-between;
                            height: 16rem /@font-size;
                            font-size: 16rem /@font-size;
                            font-weight: 500;
                            color: #24272e;
                            line-height: 16rem /@font-size;
                            margin-top: 11rem /@font-size;
                            margin-bottom: 13rem /@font-size;

                            .name{
                                flex: 1;
                            }
                            .date{

                            }
                        }
                        .operate-list{
                            display: flex;
                            margin: 0;
                            padding: 0;
                            li{
                                display: flex;
                                align-items: center;
                                list-style-type: none;
                                padding: 12rem /@font-size 12rem /@font-size 12rem /@font-size 0;
                                border-radius: 19rem /@font-size;
                                height: 38rem /@font-size;
                                text-align: center;
                                line-height: 14rem /@font-size;
                                font-size: 14rem /@font-size;
                                font-weight: 400;
                                margin-right: 16rem /@font-size;
                                color: #61687c;
                                cursor: pointer;
                                img{
                                    width: 20rem /@font-size;
                                    height: 20rem /@font-size;
                                }

                            }

                        }





                    }

                }

            }
        }
    }
</style>
