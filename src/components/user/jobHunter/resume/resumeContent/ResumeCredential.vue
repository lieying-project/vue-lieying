<template>
    <div class="credential">
        <h3 class="title-wrapper">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">资格证书</span>
            </div>
            <div class="right-add" @click="isCredentialFormVisible=true">
<!--                <img src="../../../../../assets/imgs/add.png">-->
                <img src="~@/assets/imgs/add.png">
                <span class="text">添加</span>
            </div>
        </h3>
        <div class="credential-content" :style="{backgroundColor: credentialBgColor}"
             @mouseover="credentialBgColor = '#F6F6F8'" @mouseout="credentialBgColor= '#ffffff'">
            <div class="credential-list" v-if="resume.credentials!=null">
                <span v-for="credential in resume.credentials" :key="credential.id"
                      class="tag">{{credential.name}}</span>
            </div>
            <div class="op" :style="{display:credentialBgColor=='#ffffff'?'none':'flex' }">
                <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                <span>编辑</span>
            </div>
            <el-dialog title="添加资格证书" :visible.sync="isCredentialFormVisible" width="30%">
                <el-input placeholder="请输入资格证书信息(名称、获奖年限)" v-model="currentCredential"></el-input>
                <br/>
                <div class="add-btn">
                    <el-button type="primary" @click="addCredential">添加</el-button>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
export default {
  name: "ResumeCredential",
  props: {
    resume: {
    }
  },
  data() {
    return {
      credentialBgColor: '#ffffff',
      isCredentialFormVisible: false,
      currentCredential: ''
    }
  },
  methods: {
    addCredential() {
      var lastIndex = 0
      this.resume.credentials.forEach((item, index) => {
        lastIndex = index
      })
      var credential = {id: (lastIndex + 2), name: this.currentCredential}
      this.resume.credentials.push(credential)
      this.isCredentialFormVisible = false
      this.currentCredential = ''
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

    .credential {
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;
        padding-bottom: 20rem /@font-size;
        margin: 30rem /@font-size;
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

        .credential-content {
            display: flex;
            padding: 5rem /@font-size 3rem /@font-size 10rem /@font-size 5rem /@font-size;
            justify-content: space-between;

            .credential-list {
                display: flex;

                .tag {
                    display: inline-block;
                    font-size: 12rem /@font-size;
                    font-weight: 400;
                    color: #61687c;
                    white-space: nowrap;
                    height: 23rem /@font-size;
                    line-height: 22rem /@font-size;
                    border-radius: 2rem /@font-size;
                    border: 1rem /@font-size solid #d0d1d6;
                    padding: 0 10rem /@font-size;
                    margin: 5rem /@font-size 10rem /@font-size 5rem /@font-size 0;
                    overflow: hidden;
                    cursor: pointer;
                }
            }

            .op {
                width: 180rem /@font-size;
                //margin-top: 10rem /@font-size;
                display: flex;

                justify-content: flex-end;
                color: #00c2b3;
                align-items: center;
                font-size: 14rem /@font-size;

                .edit-img {
                    width: 18rem /@font-size;
                    height: 18rem /@font-size;
                }

                span {
                    margin-left: 5rem /@font-size;

                    cursor: pointer;

                }
            }

            .add-btn {
                display: flex;
                justify-content: flex-end;
                margin-top: 10rem /@font-size;
            }

        }
    }
</style>
