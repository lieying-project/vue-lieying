<template>
    <div class="content-container">
        <job-hunter-left-menu class="content-left" @positionType="getPosition" @mouseleave.native="dealLeave" :pubVue="pubVue"/>
        <job-hunter-index-right-content class="content-right"
                                       :pubVue="pubVue"/>
        <job-hunter-index-img class="content-img"/>
    </div>
</template>

<script>
import JobHunterLeftMenu from "./JobHunterIndexLeftMenu";
import JobHunterIndexRightContent from "./JobHunterIndexRightCon";
import JobHunterIndexImg from "./JobHunterIndexImg";
import Vue from 'vue'
export default {
  name: "JobSeekerIndexContent",
  data() {
    return {
      isShow: false,
      positionCategoryIndex:null,
      pubVue:new Vue()
    }
  },
  components: {
    JobHunterIndexImg,
    JobHunterIndexRightContent,
    JobHunterLeftMenu
  },
  methods: {
    getPosition() {
      this.isShow = true;
      console.log(this.isShow)
    },
    dealLeave() {
      this.isShow = false;
     /// console.log(this.isShow)
    },
    dealEnter() {
      this.isShow = true;
      //console.log(this.isShow)
    }
  },
  mounted() {
    this.$store.dispatch('getAllPositionCategoriesAction')

  }
}
</script>

<style scoped lang="less">
    .content-container {
        background-color: #ffffff;
        display: flex;
        width: 80%;
        overflow: hidden;
        margin: 0 auto;
        .content-left {
            width: 25%;
            box-shadow: 0 0 2px 0 #61687c;
            margin-right: 10px;
        }
        .content-right {
            width: 60%;
            position: absolute;
            left: 30%;
            box-shadow: 0 0 6px 0 #61687c;
            background-color: #ffffff;
            padding-left: 30px;
        }
        .content-img {
            width: 60%;
        }
    }
</style>
