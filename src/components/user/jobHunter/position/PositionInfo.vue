<template>
    <div>
        <JobSearch :pubVue="pubVue"/>
        <JobPlace :pubVue="pubVue"/>
        <div class="position-content">
            <JobInfo :pubVue="pubVue"/>
            <JobViewed />
        </div>
    </div>
</template>
<script>
import JobPlace from "../../../../views/client/jobHunter/position/JobPlace";
import JobInfo from "../../../../views/client/jobHunter/position/JobInfo";
import JobViewed from "../../../../views/client/jobHunter/position/JobViewed";
import JobSearch from "../../../../views/client/jobHunter/position/JobSearch";
import Vue from 'vue'
export default {
  name: "PositionInfo",
  components: {JobSearch, JobViewed, JobInfo, JobPlace},
  data(){
    return {
      pubVue:new Vue()
    }
  },
  mounted() {
    this.$store.dispatch('getPositionsByCriteriaAction',{
      industryId:null,
      cityId:null,
      positionCategoryId:null,
      keyword:""
    })
  }
}
</script>
<style scoped lang="less">
    .position-content {
        //width: 1184rem /@font-size;
        padding: 24rem /@font-size 170rem /@font-size;
        flex-flow: row nowrap;
        background-color: #F6F6F8;
        // width: 1184rem /@font-size;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: relative;
    }



</style>
