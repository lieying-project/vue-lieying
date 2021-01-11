<template>

    <div class="main">
        <div class="personal-info">
            <div class="info-flex" :style="{display:isShowPersonalInfoForm==false?'flex':'none'}">
                <div class="info-flex-item">
                    <h2 class="name-wrapper">
                    <span class="name"
                          v-if="jobHunter!=null">{{jobHunter.name}}</span>
                        <svg id="icon_man" class="icon-man" viewBox="0 0 1024 1024" >
                            <path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0z" fill="#4BA1F1" v-if="jobHunter.sex=='男'"></path>
                            <path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0z" fill="#FF9DC6" v-if="jobHunter.sex=='女'"></path>
                            <path d="M638.4 340.352h-69.248a32 32 0 0 1 0-64h178.496v179.712a32 32 0 1 1-64 0v-70.4l-83.008 82.88a192 192 0 1 1-45.248-45.248l83.008-83.008zM353.6 670.4a128 128 0 1 0 181.056-181.056A128 128 0 0 0 353.6 670.4z"
                                  fill="#FFF"></path>
                        </svg>

                    </h2>
                    <p>
                            <span class="prev-line">
                                <img src="../../../../assets/imgs/identify.png">
                            </span>
                        <Vdot/>
                        |
                        <Vdot/>
                        <span class="prev-line">
                                 <img src="../../../../assets/imgs/education.png">
                                {{jobHunter.education}}</span>
                        <Vdot/>
                        |
                        <Vdot/>
                        <span class="prev-line">
                                <img src="../../../../assets/imgs/user.png">

                        求职状态
                    </span>

                    </p>
                    <p><span class="prev-line" v-if="jobHunter!=null">

                    <img src="../../../../assets/imgs/phone.png">{{jobHunter.phone}}
                    </span></p>
                </div>
                <div class="info-flex-photo-wrapper">
                    <el-avatar :size="80" :src="jobHunter.photo"></el-avatar>
<!--                    <img :src="jobHunter.photo" class="photo" v-if="jobHunter!=null">-->
                    <div class="op" @click="goUpdateShowPersonalInfoForm">
                        <i class="el-icon-edit-outline"></i>
                        <span>编辑</span>
                    </div>
                </div>
            </div>
            <div class="personal-info-form" :style="{display:isShowPersonalInfoForm==true?'flex':'none'}">
                <h3 class="form-title">
                    <span>编辑个人信息</span>
                    <p>
                        <el-avatar :size="80" :src="jobHunter.photo"></el-avatar>




                        <el-button type="primary"
                                   @click="dialogVisible2 = true">更换头像</el-button>
                        <el-dialog title="上传头像"
                                   :visible.sync="dialogVisible2"
                                   width="30%">
                            <el-form :model="form">
                                <el-form-item :label-width="formLabelWidth"
                                              ref="uploadElement">
                                    <el-upload ref="upload"
                                               action="#"
                                               accept="image/png,image/gif,image/jpg,image/jpeg"
                                               list-type="picture-card"
                                               :limit=limitNum
                                               :auto-upload="false"
                                               :on-exceed="handleExceed"
                                               :before-upload="handleBeforeUpload"
                                               :on-preview="handlePictureCardPreview"
                                               :on-remove="handleRemove"
                                               :on-change="imgChange"
                                               :class="{hide:hideUpload}">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%"
                                             :src="dialogImageUrl"
                                             alt="">
                                    </el-dialog>
                                </el-form-item>
                                <el-form-item>
                                    <el-button size="small"
                                               type="primary"
                                               @click="uploadFile">立即上传</el-button>
                                    <el-button size="small"
                                               @click="tocancel">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </el-dialog>

                    </p>

                </h3>
                <div class="form-item">
                    <div class="item-label">
                        姓名
                    </div>
                    <el-input placeholder="姓名" v-model="jobHunter.name" v-if="jobHunter!=null"></el-input>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        性别
                    </div>
                    <el-select v-model="jobHunter.sex" v-if="jobHunter!=null">
                        <el-option label="男" value="男"/>
                        <el-option label="女" value="女"/>
                    </el-select>
                </div>

                <div class="form-item">
                    <div class="item-label">
                        出生年月
                    </div>
                    <el-date-picker
                            v-model="jobHunter.birthday"
                            type="date"
                            placeholder="选择生日" v-if="jobHunter!=null">
                    </el-date-picker>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        电话
                    </div>
                    <el-input placeholder="电话"  :disabled="false"
                              v-if="jobHunter!=null" disabled="true"/>
                </div>
                <div class="form-item">
                    <div class="item-label">
                        所在地
                    </div>

                    <el-input placeholder="所在地" v-model="jobHunter.address" :disabled="false"
                              v-if="jobHunter!=null" />
                </div>

                <div class="form-item">
                    <div class="item-label">
                        邮箱
                    </div>
                    <el-input placeholder="邮箱 " v-model="jobHunter.email" v-if="jobHunter!=null"/>
                </div>

                <div class="form-item">
                    <div class="item-label">
                        兴趣
                    </div>
                    <el-input placeholder="兴趣" v-model="jobHunter.interest" v-if="jobHunter!=null"/>
                </div>
                <div class="form-item">
                    <div class="op">
                        <div class="btn-close" @click="cancelPersonalInfoForm">取消</div>
                        <div class="btn-finish" @click="confirmPersonalInfoForm">完成</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: "JobHunterInfo",
  data() {
    return {
      isShowPersonalInfoForm: false,
      oldJobHunter: '',
      hideUpload: false,
      dialogImageUrl: '',
      dialogVisible: false,//图片预览弹窗
      formLabelWidth: '80px',
      limitNum: 1,
      form: {},
      dialogVisible2: false//弹窗
    }
  },
  methods: {
    cancelPersonalInfoForm() {
      this.jobHunter = this.oldJobHunter
      this.isShowPersonalInfoForm = false
      console.log(this.isShowPersonalInfoForm)

    },
    confirmPersonalInfoForm() {
      this.$store.dispatch('updateJobHunterAction',this.jobHunter)
      this.isShowPersonalInfoForm = false
    },
    goUpdateShowPersonalInfoForm() {
      this.isShowPersonalInfoForm = true
      this.oldJobHunter = this.jobHunter

    },
    // 上传文件之前的钩子
    handleBeforeUpload (file) {
      if (!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        this.$notify.warning({
          title: '警告',
          message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
        })
      }
      let size = file.size / 1024 / 1024 / 2
      if (size > 2) {
        this.$notify.warning({
          title: '警告',
          message: '图片大小必须小于2M'
        })
      }
      let fd = new FormData();//通过form数据格式来传
      fd.append("file", file); //传文件
      console.log(fd.get('picFile'));
      axios({
        url: "/api/file/upload",
        method: "post",
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((data) => {
        this.jobHunter.photo=data.data
        this.$store.dispatch('updateJobHunterAction',this.jobHunter)
      })
    },
    // 文件超出个数限制时的钩子
    handleExceed (files, fileList) {

    },
    // 文件列表移除文件时的钩子
    handleRemove (file, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;

    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadFile () {
      console.log("111")
      this.$refs.upload.submit()
      console.log("222")
    },
    imgChange (files, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;
      if (fileList) {
        this.$refs.uploadElement.clearValidate();
      }
    },
    tocancel () {
      this.dialogVisible2 = false

    }
  },
  computed: {
    ...mapState(['jobHunter'])
  },
  mounted() {

  }
}
</script>

<style scoped lang="less">
   .main{
       width: 880rem /@font-size;
       height: auto;
       background-color: #FFFFFF;
       margin: 20rem /@font-size 0 20rem /@font-size 155rem /@font-size;
       .personal-info {
           padding-bottom: 10rem /@font-size;
           border-bottom: 1rem /@font-size solid #f2f3f3;

           .info-flex {
               display: flex;
               justify-content: space-between;
               align-items: center;
               margin: 0 30rem /@font-size;

               .info-flex-item {
                   display: flex;
                   flex-flow: column nowrap;

                   .name-wrapper {
                       font-size: 24rem /@font-size;
                       font-weight: 400;
                       margin-bottom: 20rem /@font-size;
                       display: flex;
                       align-items: center;

                       .icon-man {
                           width: 24rem /@font-size;
                           height: 24rem /@font-size;
                           border-radius: 12rem /@font-size;
                           line-height: 24rem /@font-size;
                           margin-left: 10rem /@font-size;
                           margin-top: 5rem /@font-size;
                       }
                   }

                   p {
                       display: flex;
                       color: #414A60;
                       align-items: center;

                       .prev-line {
                           display: flex;
                           align-items: center;
                           color: #414A60;
                           height: 24rem /@font-size;
                           font-size: 14rem /@font-size;
                           //margin-right: 20rem /@font-size;
                           img {
                               width: 20rem /@font-size;
                               height: 20rem /@font-size;
                               margin-right: 8rem /@font-size;
                           }
                       }
                   }


               }

               .info-flex-photo-wrapper {
                   display: flex;
                   flex-flow: column nowrap;

                   .photo {
                       width: 70rem /@font-size;
                       height: 70rem /@font-size;
                       border-radius: 35rem /@font-size;
                   }

                   .op {
                       cursor: pointer;
                       margin-top: 10rem /@font-size;
                       display: flex;
                       justify-content: center;
                       color: #00c2b3;
                       align-items: center;
                       font-size: 14rem /@font-size;

                       span {
                           margin-left: 5rem /@font-size;

                       }
                   }
               }
           }

           .personal-info-form {
               display: flex;
               flex-flow: column nowrap;
               padding: 20rem /@font-size 60rem /@font-size;
               min-height: 80rem /@font-size;
               background-color: #F8F9FB;
               flex-flow: column nowrap;
               margin: 0;
               .form-title{
                   display: flex;
                   justify-content: space-between;
                   align-items: center;
                   p{
                       display: flex;
                       flex-flow: column nowrap;
                       align-items: center;
                   }
               }
               .form-item-title {
                   font-size: 16rem /@font-size;
                   font-weight: 400;
                   margin-top: 0;
                   padding: 0;
                   color: #24272e;

               }

               .form-item {
                   display: flex;
                   flex-flow: column nowrap;
                   margin-bottom: 10rem /@font-size;

                   .item-label {
                       color: #495060;
                       font-size: 14rem /@font-size;
                       margin-bottom: 10rem /@font-size;
                   }

                   .op {

                       display: flex;
                       justify-content: flex-end;
                       margin-top: 20rem /@font-size;

                       .btn-close {
                           width: 80rem /@font-size;
                           padding: 10rem /@font-size;
                           font-size: 14rem /@font-size;
                           color: #414a60;
                           background-color: white;
                           text-align: center;
                           border: 1rem /@font-size solid #F8F9FB;
                           cursor: pointer;
                       }

                       .btn-finish {
                           width: 80rem /@font-size;
                           margin-left: 15rem /@font-size;
                           padding: 10rem /@font-size;
                           font-size: 14rem /@font-size;
                           color: white;
                           background-color: #5dd5c8;
                           text-align: center;
                           cursor: pointer;
                       }
                   }

               }


           }
       }
   }
</style>
