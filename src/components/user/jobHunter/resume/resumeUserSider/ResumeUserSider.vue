<template>
    <div class="resume-user-sider">
        <div class="resume-extra-file sider-box">
            <h3 class="sider-title">附件管理</h3>
            <ul v-if="resume.extraFiles!=null">
                <li v-for="(f,index) in resume.extraFiles" :key="index">
                    <div class="left-area">
                        <img src="../../../../../assets/imgs/icon-file.png">
                        <span class="text">{{f.name}}</span>
                    </div>
                    <img src="../../../../../assets/imgs/delete2.png">
                </li>
            </ul>
            <a class="upload-resume" href="javascript:void(0);" @click="dialogVisible2 = !dialogVisible2"
               v-if="this.resume.enclosure==null||this.resume.enclosure==''">上传附件</a>
            <span   v-if="this.resume.enclosure!=null&&this.resume.enclosure!=''">
                <el-button type="success" @click="fileDownload">点击下载简历附件</el-button>

            <el-button type="danger"
            @click="deleteResumeEnclosure">删除简历附件</el-button>
          </span>
            <el-dialog title="上传附件"
                       :visible.sync="dialogVisible2"
                       width="30%">
                <el-form :model="form">
                    <el-form-item :label-width="formLabelWidth"
                                  ref="uploadElement">
                        <el-upload ref="upload"
                                   action="#"
                                   accept="image/png,image/gif,image/jpg,image/jpeg,.docx,.doc,.pdf"
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
                                   @click="uploadFile">立即上传
                        </el-button>
                        <el-button size="small"
                                   @click="tocancel">取消
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
        <img src="../../../../../assets/imgs/zhipin-resume_siderbar.22138ff3.png" class="resume-img">

        <!--        <div class="resume-settings sider-box">-->

        <!--        </div>-->

    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "ResumeUserSider",
  data() {
    return {
      hideUpload: false,
      dialogImageUrl: '',
      dialogVisible: false,//图片预览弹窗
      formLabelWidth: '80px',
      limitNum: 1,
      form: {},
      dialogVisible2: false//弹窗
    }
  },
  computed: {
    ...mapState(['resume'])
  },
  methods: {
    // 上传文件之前的钩子
    handleBeforeUpload(file) {
      console.log(file)
      if (!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        this.$notify.warning({
          title: '警告',
          message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
        })
        return
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
      console.log(fd.get('file'));
      axios({
        url: "/api/file/upload",
        method: "post",
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((data) => {

        console.log(data)
        console.log(this.resume)
        this.resume.enclosure = data.data
        this.$store.dispatch('updateResumeAction', this.resume)
        this.dialogVisible2 = false

      })
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {

    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;

    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadFile() {

      this.$refs.upload.submit()


    },
    imgChange(files, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;
      if (fileList) {
        this.$refs.uploadElement.clearValidate();
      }
    },
    tocancel() {
      this.dialogVisible2 = false
    },
    deleteResumeEnclosure(){
      this.resume.enclosure =''
      this.$store.dispatch('updateResumeAction', this.resume)
      alert('删除成功')
    },
    fileDownload(){
     {
       axios({
         method:'get',
         url:'/api/file/download',
         params:{
           file:this.resume.enclosure
         },
         responseType: 'blob',

       }).then(res =>{
         console.log(res.data)
         // 得到请求到的数据后，对数据进行处理
         let blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' });// 创建一个类文件对象：Blob对象表示一个不可变的、原始数据的类文件对象
         let fileName = decodeURI(res.headers['content-disposition']);// 设置文件名称,decodeURI：可以对后端使用encodeURI() 函数编码过的 URI 进行解码。encodeURI() 是后端为了解决中文乱码问题
         if (fileName){// 根据后端返回的数据处理文件名称
           fileName = fileName.substring(fileName.indexOf('=') + 1);
         }
         const elink = document.createElement('a')// 创建一个a标签
         elink.download = fileName;// 设置a标签的下载属性
         elink.style.display = 'none';// 将a标签设置为隐藏
         elink.href = URL.createObjectURL(blob);// 把之前处理好的地址赋给a标签的href
         document.body.appendChild(elink);// 将a标签添加到body中
         elink.click();// 执行a标签的点击方法
         URL.revokeObjectURL(elink.href) // 下载完成释放URL 对象
         document.body.removeChild(elink)// 移除a标签
       }).catch(err => {
         console.log(err)
       })
     }

    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

    .resume-user-sider {

        width: 280rem /@font-size;
        height: 500rem /@font-size;
        //background-color: #FFFFFF;
        margin: 20rem /@font-size 155rem /@font-size 20rem /@font-size  0;

        .sider-box {
            background: #fff;
            padding: 20px 30px;
            margin-bottom: 16px;

            .sider-title {
                height: 20rem /@font-size;
                font-size: 14rem /@font-size;
                font-weight: 500;
                color: #414a60;
                line-height: 20rem /@font-size;
                align-items: center;
                display: flex;
            }
        }

        .resume-extra-file {
            display: flex;
            flex-flow: column nowrap;

            ul {

                display: flex;
                flex-flow: column nowrap;

                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .left-area {
                        display: flex;
                        align-items: center;

                        .text {

                            margin: 0;
                            padding: 0 10rem /@font-size 0 5rem /@font-size;
                            font-size: 14rem /@font-size;
                            color: #414A60;
                        }
                    }


                }
            }

            .upload-resume {
                display: flex;
                justify-content: center;
                align-items: center;
                //width: 296rem /@font-size;
                height: 30rem /@font-size;
                background-color: #5DD5C8;
                color: #FFFFFF;
                font-size: 15rem /@font-size;
                margin-top: 10rem /@font-size;
                cursor: pointer;

            }


        }

        .resume-img {
            width: 284rem /@font-size;
            height: 140rem /@font-size;
        }
    }

</style>
