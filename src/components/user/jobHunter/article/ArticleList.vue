<template>
    <div class="articles">
        <div class="main">
            <el-card class="list-article">
                <ul>
                    <li v-for="(article,index) in  articles.list" :key="index">

                        <div class="text">
                            <p class="title">
                                <a @click="viewDetailArticle(article.id)">{{article.title}}</a></p>
                            <div class="content" v-html="article.content"></div>
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
                        </div>
                    </li>
                </ul>
                <el-pagination
                        background
                        layout="prev,pager,next"
                        :total="articles.pages*10"
                        @current-change="searchArticles" v-if="articles!=''&&articles.total!=0" class="pages">
                </el-pagination>
            </el-card>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import ArticleCollect from "./ArticleCollect";
import ArticlePraise from "./ArticlePraise";

export default {
  name: 'ArticleList',
  components: {ArticlePraise, ArticleCollect},
  mounted() {
    this.$store.dispatch('getAllArticlesByPageAction')
  },
  computed: {
    ...mapState(['articles', 'jobHunter']),
  },
  methods: {
    viewDetailArticle(id) {
      this.$router.push("/article/" + id)
    },
    searchArticles(pageNow) {
      this.$store.dispatch('getAllArticlesByPageAction', pageNow)
    },
  }

};
</script>
<style scoped lang="less">
    .articles {
        background-color: #F5F7F9;

        padding: 15rem /@font-size;

        .main {

            width: 1184rem /@font-size;
            margin: 0 auto;
            background-color: #FFFFFF;

            .list-article {

                display: flex;
                flex-flow: column nowrap;
                align-items: center;

                padding: 25rem /@font-size 100rem /@font-size;

                ul {

                    padding: 0;
                    display: flex;
                    flex-flow: column nowrap;

                    li {
                        width: 950rem /@font-size;
                        border-bottom: 1rem /@font-size #ededed solid;
                        display: flex;
                        align-items: center;


                        .text {
                            display: flex;
                            flex-flow: column nowrap;
                            margin-left: 30rem /@font-size;

                            .title {
                                cursor: pointer;

                                :hover {
                                    color: #2ACFC9;
                                }

                                a {
                                    text-decoration: none;

                                    -webkit-transition: all linear .2s;
                                    transition: all linear .2s;
                                    color: #414a60;
                                    font-size: 20rem /@font-size;


                                }
                            }

                            .content {
                                height: 25rem /@font-size;

                                line-height: 25rem /@font-size;
                                color: #666;
                                padding: 20rem /@font-size 0 0;
                                margin-bottom: 15rem /@font-size;
                                overflow: hidden;
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
                        }

                    }
                }

                .pages {
                    padding: 10rem /@font-size 0;

                    text-align: center;
                }
            }
        }
    }
</style>
