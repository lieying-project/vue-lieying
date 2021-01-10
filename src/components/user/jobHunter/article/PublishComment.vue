<template>
    <div class="publish-comment">
        <quill-editor v-model="commentContent" class="editor"
                      :options="editorOption"></quill-editor>
        <el-button class="comment-btn" @click="publishComment" :style="{display:flag==0?'block':'none'}">发表评论</el-button>
        <el-button class="comment-btn" @click="publishCommentRely" :style="{display:flag==1?'block':'none'}">发表回复</el-button>
        <el-button class="comment-btn" @click="publishCommentRelyRely" :style="{display:flag==2?'block':'none'}">发表回复</el-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "PublishComment",
  props:{
    flag:{
      default:0
    },
    articleCommentId:{
      default: null
    },
    parentArticleCommentRelyId:{
      default:null
    }

  },
  data() {
    return {
      commentContent: '',
      editorOption: {
        placeholder: '发表你的观点'
      }
    }
  },
  methods: {
    publishComment() {
      if (this.$store.state.jobHunter == null) {
        this.showMessageTip()
        return
      }
      console.log("发布评论")
      if ( this.commentContent==""){
        alert("请输入评论内容")
      }
      this.$store.dispatch('saveArticleCommentAction', {
        createdTime: new Date(),
        jobHunter: {
          id: this.jobHunter.id
        },
        article: {
          id: this.article.id
        },
        content: this.commentContent
      })
    },
    publishCommentRely() {
      if (this.$store.state.jobHunter == null) {
        this.showMessageTip()
        return
      }
      console.log(this.articleCommentId)
      this.$store.dispatch('saveArticleCommentRelyAction', {
        articleCommentRely: {
          createdTime: new Date(),
          updatedTime: new Date(),
          articleComment: {
            id:this.articleCommentId
          },
          jobHunter: {
            id: this.jobHunter.id
          },
          content: this.commentContent
        },
        articleId: this.article.id
      })
    },
    publishCommentRelyRely() {
      if (this.$store.state.jobHunter == null) {
        this.showMessageTip()
        return
      }
      console.log(this.articleCommentId)
      this.$store.dispatch('saveArticleCommentRelyAction', {
        articleCommentRely: {
          createdTime: new Date(),
          updatedTime: new Date(),
          parentArticleCommentRely: {
            id:this.parentArticleCommentRelyId
          },
          jobHunter: {
            id: this.jobHunter.id
          },
          content: this.commentContent
        },
        articleId: this.article.id
      })
    },
    showMessageTip() {
      this.$confirm('请登录后再评论', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '去登录',
        cancelButtonText: '再看一会儿'
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


    }

  },
  computed: {
    ...mapState(['article', 'jobHunter'])
  }
}
</script>

<style scoped lang="less">
    .publish-comment {

        /deep/ .quill-editor .ql-editor {
            height: 100rem /@font-size;
        }

        .comment-btn {

            float: right;
            margin: 10rem /@font-size 0;
        }

    }

</style>
