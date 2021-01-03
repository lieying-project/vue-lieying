<template>
    <div class="personal-info">
        <div class="info-flex" :style="{display:isShowPersonalInfoForm==false?'flex':'none'}">
            <div class="info-flex-item">
                <h2 class="name-wrapper">
                    <span class="name"
                          v-if="resume.jobHunter!=null">{{resume.jobHunter.name}}</span>
                    <svg id="icon_man" class="icon-man" viewBox="0 0 1024 1024">
                        <path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0z" fill="#4BA1F1"></path>
                        <path d="M638.4 340.352h-69.248a32 32 0 0 1 0-64h178.496v179.712a32 32 0 1 1-64 0v-70.4l-83.008 82.88a192 192 0 1 1-45.248-45.248l83.008-83.008zM353.6 670.4a128 128 0 1 0 181.056-181.056A128 128 0 0 0 353.6 670.4z"
                              fill="#FFF"></path>
                    </svg>
                </h2>
                <p>
                            <span class="prev-line">
                                <img src="../../../../../assets/imgs/identify.png">
                                <!--                                {{resume.jobHunter.identify}}-->
                                学生
                            </span>
                    <Vdot/>
                    |
                    <Vdot/>
                    <span class="prev-line">
                                 <img src="../../../../../assets/imgs/education.png">
                                {{resume.education}}</span>
                    <Vdot/>
                    |
                    <Vdot/>
                    <span class="prev-line">
                                <img src="../../../../../assets/imgs/user.png">
                        <!--                                {{resume.jobHunter.state}}-->
                        求职状态
                    </span>

                </p>
                <p><span class="prev-line" v-if="resume.jobHunter!=null">
                    <img src="../../../../../assets/imgs/phone.png">{{resume.jobHunter.phone}}</span></p>
            </div>
            <div class="info-flex-photo-wrapper">
                <img :src="require(`@/assets/${resume.jobHunter.photo}`)" class="photo" v-if="resume.jobHunter!=null">
                <div class="op" @click="goUpdateShowPersonalInfoForm">
                    <i class="el-icon-edit-outline"></i>
                    <span>编辑</span>
                </div>
            </div>
        </div>
        <div class="personal-info-form" :style="{display:isShowPersonalInfoForm==true?'flex':'none'}">
            <h3 class="form-title">编辑个人信息</h3>
            <div class="form-item">
                <div class="item-label">
                    姓名
                </div>
                <el-input placeholder="姓名" v-model="resume.jobHunter.name" v-if="resume.jobHunter!=null"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    性别
                </div>
                <el-select v-model="resume.jobHunter.sex" v-if="resume.jobHunter!=null">
                    <el-option label="男" value="男"/>
                    <el-option label="女" value="女"/>
                </el-select>
            </div>

            <div class="form-item">
                <div class="item-label">
                    生日
                </div>
                <el-date-picker
                        v-model="resume.jobHunter.birthday"
                        type="date"
                        placeholder="选择生日" v-if="resume.jobHunter!=null">
                </el-date-picker>
            </div>
            <div class="form-item">
                <div class="item-label">
                    电话
                </div>
                <el-input placeholder="电话" v-model="resume.jobHunter.phone" :disabled="true"
                          v-if="resume.jobHunter!=null"/>
            </div>
            <div class="form-item">
                <div class="item-label">
                    当前求职状态
                </div>
                <el-input placeholder="当前求职状态"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    身份
                </div>
                <el-input placeholder="身份" :disabled="true"></el-input>
            </div>
            <div class="form-item">
                <div class="item-label">
                    微信号 (选填)
                </div>
                <el-input placeholder="微信号 (选填)" v-model="resume.jobHunter.wechat"
                          v-if="resume.jobHunter!=null"/>
            </div>
            <div class="form-item">
                <div class="item-label">
                    邮箱 (选填)
                </div>
                <el-input placeholder="邮箱 (选填)" v-model="resume.jobHunter.email" v-if="resume.jobHunter!=null"/>
            </div>
            <div class="form-item">
                <div class="op">
                    <div class="btn-close" @click="cancelPersonalInfoForm">取消</div>
                    <div class="btn-finish" @click="confirmPersonalInfoForm">完成</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vdot from "../../../../common/Vdot";

export default {
  name: "ResumePersonalInfo",
  components: {Vdot},
  props: {
    resume: {
    }
  },
  data() {
    return {
      isShowPersonalInfoForm: false,
      oldJobHunter: ''
    }
  },
  methods: {
    cancelPersonalInfoForm() {
      this.resume.jobHunter = this.oldJobHunter
      this.isShowPersonalInfoForm = false

    },
    confirmPersonalInfoForm() {
      this.isShowPersonalInfoForm = false
    },
    goUpdateShowPersonalInfoForm() {
      this.isShowPersonalInfoForm = true
      this.oldJobHunter = this.resume.jobHunter

    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

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
</style>
