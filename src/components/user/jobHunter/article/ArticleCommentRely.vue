<template>
    <div class="comment-rely" v-if="articleCommentRelies!=null">
        <div class="item" v-for="(articleCommentRely,index) in articleCommentRelies"
             v-if="articleCommentRelies!=null"
             :style="{borderBottom:index==(articleCommentRelies.length-1)?'':'0.078125rem solid #DCDFE6'}">
            <div class="photo"><img :src="articleCommentRely.jobHunter.photo"></div>
            <div class="info">
                <div class="top-info">
                <span class="username">{{articleCommentRely.jobHunter.username}}
                    <span class="text">回复</span> {{jobHunter.username}}
                <span class="text">:</span></span>
                    <span class="date">{{articleCommentRely.createdTime | formatDate}}</span>
                </div>
                <div class="comment-content">
                    <span class="content" v-html="articleCommentRely.content"></span>
                    <!--                    <ViewMoreArticleCommentRely :articleCommentRely="articleCommentRely"/>-->
                    <div class="view-more">
          <span class="rely">
              <el-link class="link" @click="showMore=!showMore;selectedIndex2=index"
                       v-show="articleCommentRely.sonArticleCommentRelies!=null&&articleCommentRely.sonArticleCommentRelies.length!=0">
            {{showMore==true&&selectedIndex2==index?'折叠回复':'展开回复'}}</el-link>

          </span>
                        <span class="rely">
          <el-link class="link" @click="showRelyComment=!showRelyComment;selectedIndex=index">回复</el-link>
        </span>

                        <ArticleCommentRely :articleCommentRelies="articleCommentRely.sonArticleCommentRelies"
                                            :jobHunter="articleCommentRely.jobHunter"
                                            v-if="showMore&&selectedIndex2==index"/>
                        <div class="rely-comment" v-if="showRelyComment&&selectedIndex==index">

                            <PublishComment :flag="2" :parentArticleCommentRelyId="articleCommentRely.id"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PublishComment from "./PublishComment";


export default {
  name: "ArticleCommentRely",
  components: {PublishComment},
  props: {
    articleCommentRelies: {},
    jobHunter: {},

  },
  data() {
    return {
      showMore: true,
      showRelyComment: false,
      selectedIndex: null,
      selectedIndex2: null
    }
  }
}
</script>

<style scoped lang="less">
    .item {

        //border-bottom: 1rem /@font-size solid #DCDFE6;
        padding: 20rem /@font-size 0 10rem /@font-size 0rem /@font-size;

        // display: flex;

        .photo {
            position: absolute;

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
            margin-left: 50rem /@font-size;

            .top-info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10rem /@font-size;

                .username {
                    font-size: 16rem /@font-size;
                    color: #1abc9c;

                    .text {
                        color: #000000;
                    }
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

            .rely {
                margin: 10rem /@font-size 10rem /@font-size 10rem /@font-size 0;

                .link {
                    text-decoration: none;

                    /deep/ .el-link--inner {
                        font-size: 14rem /@font-size;


                    }
                }
            }

        }
    }
</style>
