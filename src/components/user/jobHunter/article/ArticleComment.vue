<template>
    <el-card class="comment-wrapper">
        <h3 class="title">文章评论</h3>
        <PublishComment/>
        <div class="comments">
            <p v-if="article.articleComments!=null" class="num">共{{article.articleComments.length}}条评论</p>
            <div class="item" v-for="(articleComment,index) in article.articleComments" :key="index"
                 style="border-bottom:0.078125rem solid #DCDFE6">
                <div class="photo"><img :src="articleComment.jobHunter.photo"></div>
                <div class="info">
                    <div class="top-info">
                        <span class="username">{{articleComment.jobHunter.username}}</span>
                        <span class="date">{{articleComment.createdTime | formatDate}}</span>
                    </div>
                    <div class="comment-content">
                        <span class="content" v-html="articleComment.content"></span>
                        <RelyComment :articleCommentId="articleComment.id"/>
                        <ArticleCommentRely
                                :articleCommentRelies="articleComment.articleCommentRelies"
                                :jobHunter="articleComment.jobHunter" />
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
import {mapState} from 'vuex'
import PublishComment from "./PublishComment";
import RelyComment from "./RelyComment";
import ArticleCommentRely from "./ArticleCommentRely";
export default {
  name: "ArticleComment",
  components: {ArticleCommentRely, RelyComment, PublishComment},
  computed: {
    ...mapState(['article', 'jobHunter'])
  }
}
</script>

<style scoped lang="less">
    .comment-wrapper {
        .title {
            margin: 10rem /@font-size 0;
        }
        .comments {
            overflow: hidden;
            clear: both;

            .num {
                font-size: 16rem /@font-size;
            }

            .item {
                padding: 20rem /@font-size 0 20rem /@font-size 10rem /@font-size;
                display: flex;

                .photo {
                    display: flex;
                    flex-flow: column nowrap;
                    margin-right: 10rem /@font-size;

                    img {
                        width: 40rem /@font-size;
                        height: 40rem /@font-size;
                        border-radius: 20rem /@font-size;
                    }

                }

                .info {
                    display: flex;
                    flex-flow: column nowrap;
                    flex: 1;

                    .top-info {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10rem /@font-size;

                        .username {
                            font-size: 16rem /@font-size;
                            color: #1abc9c;
                        }

                        .date {
                            font-size: 14rem /@font-size;
                            color: #999999;
                        }
                    }

                    .content {
                        font-size: 16rem /@font-size;
                        color: #303133;

                    }

                }
            }
        }


    }
</style>
