<template>
    <div class="publish-article">
        <div class="title-wrapper">
            <div class="operate">
                <img src="../../../../assets/imgs/Left.png" class="left-img">
                <span>文章管理</span>
            </div>
            <el-input v-model="title" class="title" placeholder="文章标题"/>
            <el-button-group>
                <el-button @click="publishArticle" class="publish-article-btn">发表文章</el-button>
            </el-button-group>
        </div>
        <div class="content">
            <quill-editor v-model="content" class="editor" :options="editorOption"></quill-editor>
            <div class="display-content" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "PublishArticle",
  data() {
    return {
      title: '',
      content: '',
      editorOption: {
        placeholder: "文章内容"
      }
    }
  },
  computed: {
    ...mapState(['jobHunter'])
  },
  methods: {
   async publishArticle() {
      if (this.jobHunter == null) {
        this.showMessageTip()
        return
      }
      await this.saveArticle()
       await this.toArticleList()
    },
    toArticleList(){
      this.$router.push("/article/list")
    },
    showMessageTip() {
      this.$confirm('请登录后再发表文章', '提示', {
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
    saveArticle() {
      this.$store.dispatch('saveArticleAction', {
        title: this.title,
        content: this.content,
        createdTime: new Date(),
        updatedTime: new Date(),
        jobHunter: {
          id: this.jobHunter.id
        }
      })

      // this.$store.dispatch('saveInformationAction', {
      //   title: this.title,
      //   content: this.content,
      //   createdTime: new Date(),
      //
      //   administrator: {
      //     id: 1
      //   }
      // })
    },

  }

}
</script>

<style scoped lang="less">

    .publish-article {

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

            .publish-article-btn {
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
