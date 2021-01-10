<template>
    <p class="praise" v-if="article.articlePraises!=null">
        <img src="../../../../assets/imgs/hasAgreed.png" class="agree-img" v-if="showArticlePraise(article.articlePraises).flag"
                @click="deleteArticlePraise(showArticlePraise(article.articlePraises).articlePraiseId)"/>
        <img src="../../../../assets/imgs/agree.png" class="agree-img"
             @click="praiseArticle()" v-if="showArticlePraise(article.articlePraises).flag==false">
        <span>{{article.articlePraises.length}}</span>
    </p>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ArticlePraise",
  props:{
    article:{
    }
  },
  computed: {
    ...mapState(['jobHunter']),
    showArticlePraise:function () {
      return articlePraises => {
        var obj={flag:false,articlePraiseId:null}
        articlePraises.forEach((articlePraise,index)=>{
          if (this.jobHunter==null){
            return obj
          }
          if (this.jobHunter.id==articlePraise.jobHunter.id){
            obj= {flag:true,articlePraiseId:articlePraise.id}
            return obj
          }
        })
        return obj
      }
    }
  },
  methods:{
    praiseArticle() {

      if (this.$store.state.jobHunter == null) {
        this.showMessageTip()
        return
      }
      this.$store.dispatch('saveArticlePraiseAction', {
        createdTime: new Date(),
        jobHunter: {
          id: this.jobHunter.id
        },
        article: {
          id: this.article.id
        }
      })
    },
    deleteArticlePraise(id){
      this.$store.dispatch('deleteArticlePraiseAction',{
        articlePraiseId:id,
        articleId:this.article.id
      })
    },
    showMessageTip(){

        this.$confirm('请登录后再点赞', '提示', {
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
    .praise {
        display: flex;
        align-items: center;
        margin-right: 20rem /@font-size;
        cursor: pointer;
        .agree-img {
            width: 20rem /@font-size;
            height: 20rem /@font-size;
        }
    }

</style>
