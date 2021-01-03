<template>
    <div class="personal-advantage">
        <h3 class="title-wrapper" :style="{display:isShowEditAdvantageForm==false?'flex':'none'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">个人优势</span>
            </div>

        </h3>

        <div class="primary-info"
             :style="{display:isShowEditAdvantageForm==false?'flex':'none',backgroundColor:advantageBackgroundColor}"
             @mouseover="overAdvantage" @mouseout="outAdvantage">
            <div class="advantage-text">
                {{resume.advantage}}
            </div>
            <div class="op">
                <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                <span @click="showEditAdvantageForm">编辑</span>
            </div>
        </div>
        <div class="edit-advantage-form" :style="{display:isShowEditAdvantageForm==true?'flex':'none'}">
            <h3 class="edit-title">编辑个人优势</h3>
            <textarea v-model="resume.advantage" class="text" v-if="resume!=null"></textarea>
            <span class="advantage-text-num">{{advantageTextNum}}/140</span>
            <div class="op">
                <div class="btn-close" @click="cancelEditAdvantageForm">取消</div>
                <div class="btn-finish" @click="confirmEditAdvantageForm">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import ResumeTitleWrapper from "../../../../common/ResumeTitleWrapper";
export default {
  name: "ResumePersonalAdvantage",
  components: {ResumeTitleWrapper},
  props: {
    resume: {}
  },
  data () {
    return {
      isShowEditAdvantageForm: false,
      primaryAdvantage: '',
      advantageBackgroundColor: '#ffffff',
    }
  },
  methods: {
    showEditAdvantageForm() {
      this.isShowEditAdvantageForm = true
      this.primaryAdvantage = this.resume.advantage
    },
    confirmEditAdvantageForm() {
      this.isShowEditAdvantageForm = false
    },
    cancelEditAdvantageForm() {

      this.resume.advantage = this.primaryAdvantage
      console.log(this.resume.advantage.length)
      this.isShowEditAdvantageForm = false
    },
    overAdvantage() {
      this.advantageBackgroundColor = '#F6F6F8'
    },
    outAdvantage() {
      this.advantageBackgroundColor = '#ffffff'
    },
  },
  computed: {
    advantageTextNum: {
      get: function () {
        if (this.resume==""||this.resume.advantage==null){
          return null
        }
          var len = 0
          for (let ch of this.resume.advantage) {
            if (ch.match(/[a-zA-Z]/) != null) {
              len += 0.5
            } else if (ch.match(/[\u4E00-\u9FA5]/) != null) {
              len += 1
            } else if (ch.match(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/)) {
              len += 1
            } else if (ch.match(/[0-9]/)) {
              len += 0.5
            }
          }
          len = Math.floor(len)
          //console.log(len)
          return len
        }



    }
  },
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";
    .personal-advantage {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;
        //padding-bottom: 20rem /@font-size;
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

        }
        .primary-info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color: white;
            margin: 0  30rem /@font-size 10rem /@font-size 30rem /@font-size;
            .advantage-text {

                //margin:0 30rem /@font-size;
                font-size: 14rem /@font-size;
                color: #61687C;

                line-height: 20rem /@font-size;

                margin: 10rem /@font-size 15rem /@font-size;

                padding: 0 10rem /@font-size 0 0;
                cursor: pointer;

            }

            .op {
                width: 180rem /@font-size;
                //margin-top: 10rem /@font-size;
                display: flex;

                justify-content: flex-end;
                color: #00c2b3;
                align-items: center;
                font-size: 14rem /@font-size;
                .edit-img{
                    width: 18rem /@font-size;
                    height: 18rem /@font-size;
                }

                span {
                    margin-left: 5rem /@font-size;

                    cursor: pointer;

                }
            }
        }

        .edit-advantage-form {


            padding: 20rem /@font-size 60rem /@font-size;
            min-height: 80rem /@font-size;
            background-color: #F8F9FB;
            flex-flow: column nowrap;


            .edit-title {
                font-size: 16rem /@font-size;
                font-weight: 400;
                margin: 0;
                padding: 0;
                color: #24272e;
            }

            .text {
                margin-top: 20rem /@font-size;
                height: 122rem /@font-size;
                color: #414a60;
                line-height: 20rem /@font-size;
                outline-color: #5dd5c8;
                border: 1rem /@font-size solid #e3e7ed;
                outline-width: 0.5rem /@font-size;

            }

            .advantage-text-num {
                position: absolute;
                bottom: 80rem /@font-size;
                right: 68rem /@font-size;
                color: #9fa3b0;
                font-size: 12rem /@font-size;
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

</style>
