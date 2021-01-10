<template>

    <div class="article">
        <div class="article-detail">
            <el-card class="content-detail">
                <h1 class="title">{{article.title}}</h1>
                <div class="info">
                    <p class="author" v-if="article.jobHunter!=null">
                        <img :src="article.jobHunter.photo"
                             v-if="article.jobHunter!=null" class="user-img"/>
                        <span>{{article.jobHunter.username}}</span>
                    </p>
                    <span class="date">  {{article.createdTime | formatDate}}</span>
                    <ArticlePraise :article="article"/>
                    <ArticleCollect :article="article"/>
                    <p class="comment" v-if="article.articleComments!=null">
                        <img src="../../../../assets/imgs/comment.png" class="comment-img">
                        <span>{{article.articleComments.length}}</span>
                    </p>
                </div>
                <div class="content" v-html="article.content"></div>
            </el-card>
            <ArticleComment />
        </div>
    </div>
</template>

<script>
import TitleWrapper from "../../../common/TitleWrapper";
import {mapState} from 'vuex'
import ArticleComment from "./ArticleComment";
import ArticlePraise from "./ArticlePraise";
import ArticleCollect from "./ArticleCollect";

export default {
  name: "ArticleDetail",
  components: {ArticleCollect, ArticlePraise, ArticleComment, TitleWrapper},
  data() {
    return {
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('getArticleByIdAction', id)
  },
  computed: {
    ...mapState(['article'])
  }
}
</script>

<style scoped lang="less">

    .article {
        padding-top: 15rem /@font-size;
        background-color: #F5F7F9;

        .article-detail {

            width: 1084rem /@font-size;
            margin: 0 auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            .content-detail {
                display: flex;
                flex-flow: column nowrap;
                padding: 35rem /@font-size 45rem /@font-size 45rem /@font-size;
                margin-bottom: 10rem /@font-size;
                background-color: #FFFFFF;
                .title {
                    font-size: 30px;
                    line-height: 50px;
                    font-weight: 400;
                }
                .info {
                    display: flex;
                    align-items: center;
                    color: #999999;
                    font-size: 14rem /@font-size;


                    .author {
                        display: flex;
                        align-items: center;
                        margin-right: 20rem /@font-size;

                        .user-img {
                            width: 30rem /@font-size;
                            height: 30rem /@font-size;
                            border-radius: 15rem /@font-size;
                        }
                    }

                    .date {
                        margin-right: 20rem /@font-size;


                    }

                    .comment {
                        display: flex;
                        align-items: center;
                        margin-right: 20rem /@font-size;
                        cursor: pointer;

                        .comment-img {
                            width: 20rem /@font-size;
                            height: 20rem /@font-size;
                        }
                    }
                }
                .content {

                }

            }



        }
    }
</style>
