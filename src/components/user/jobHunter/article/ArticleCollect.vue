<template>
    <p class="collect" v-if="article.articleCollects!=null">

        <img src="../../../../assets/imgs/hasCollected.png" class="collect-img"
             v-if="showArticleCollect(article.articleCollects).flag"
             @click="deleteArticleCollect(showArticleCollect(article.articleCollects).articleCollectId)">

        <img src="../../../../assets/imgs/collect.png" class="collect-img"
             @click="collectArticle(article.id)" v-if="showArticleCollect(article.articleCollects).flag==false">


        <span>{{article.articleCollects.length}}</span>
    </p>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ArticleCollect",
  props:{
    article:{
    }
  },
  computed:{
    ...mapState([ 'jobHunter']),
    showArticleCollect:function () {
      return articleCollects => {
        var obj={flag:false,articleCollectId:null}
        articleCollects.forEach((articleCollect,index)=>{
          if (this.jobHunter==null){
            return obj
          }
          if (this.jobHunter.id===articleCollect.jobHunter.id){
            obj= {flag:true,articleCollectId:articleCollect.id}
            return obj
          }
        })
        return obj
      }
    }
  },
  methods:{
    collectArticle(articleId) {
      if (this.$store.state.jobHunter == null) {
        this.showMessageTip()
        return
      }
      this.$store.dispatch('saveArticleCollectAction', {
        createdTime: new Date(),
        jobHunter: {
          id: this.jobHunter.id
        },
        article: {
          id: articleId
        }
      })
    },
    deleteArticleCollect(id){
      this.$store.dispatch('deleteArticleCollectAction',{
        articleCollectId:id,
        articleId:this.article.id
      })
    },
    showMessageTip(){
        this.$confirm('请登录后再收藏', '提示', {
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
  }
}
</script>

<style scoped lang="less">
    .collect {
        display: flex;
        align-items: center;
        margin-right: 20rem /@font-size;
        cursor: pointer;

        .collect-img {
            width: 20rem /@font-size;
            height: 20rem /@font-size;
        }
    }
</style>
