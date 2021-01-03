<template>
    <div class="publish-information">
        <div class="title-wrapper">
            <div class="operate">
                <img src="../../../../assets/imgs/Left.png" class="left-img">
                <span>资讯管理</span>
            </div>
            <el-input v-model="title" class="title" placeholder="资讯标题"/>
            <el-button-group>
                <el-button @click="publishInformation" class="publish-information-btn">发表资讯</el-button>
            </el-button-group>
        </div>
        <div class="content">
            <quill-editor v-model="content" class="editor" :options="editorOption"></quill-editor>
            <div class="display-content" v-html="content"></div>
        </div>
    </div>
</template>

<script>


export default {
  name: "PublishInformation",
  data() {
    return {
      title: '',
      content: '',
      editorOption: {
        placeholder: "资讯内容"
      }
    }
  },
  computed: {
  },
  methods: {
    showMessageTip() {
      this.$confirm('请登录后再发表资讯', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '去登录',
        cancelButtonText: '等等'
      }).then(() => {
        this.$router.replace({
          path: "/userLogin",
        })
      }).catch(action => {
        this.$message({
          type: 'info',
          message: action === 'cancel'
              ? '操作已取消'
              : '正在前往登录页面，请稍后...'
        })
      });
    },
    publishInformation() {
      this.$store.dispatch('saveInformationAction', {
        title: this.title,
        content: this.content,
        createdTime: new Date(),
        administrator: {
          id: 1
        }
      })
    },

  }

}
</script>

<style scoped lang="less">

    .publish-information {
        .title-wrapper {
            display: flex;

            margin: 10rem /@font-size 0;

            .operate {
                display: flex;
                align-items: center;

                margin: 0 10rem /@font-size;

                .left-img {
                    width: 20rem /@font-size;
                    height: 20rem /@font-size;
                    cursor: pointer;
                }

                span {
                    display: block;
                    width: 70rem /@font-size;
                    font-size: 15rem /@font-size;
                    color: #6B6B6B;
                    cursor: pointer;
                }
            }

            .title {
                border-color: #ffffff;

                /deep/ .el-input__inner {
                    height: 40rem /@font-size;
                }

            }

            .publish-information-btn {
                background-color: #b60b14;
                color: #ffffff;
                height: 40rem /@font-size;
            }
        }

        .content {
            position: relative;

            /deep/ .quill-editor .ql-editor {
                height: 500rem /@font-size;
                width: 650rem /@font-size;
                background-color: #F5F5F5;
            }

            .display-content {
                position: absolute;
                top: 30rem /@font-size;
                left: 670rem /@font-size;
                width: 650rem /@font-size;
            }
        }
    }
</style>
