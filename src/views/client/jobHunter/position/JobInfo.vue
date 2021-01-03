<template>
    <div class="job-info" >
        <div class="job-info-items" v-for="position in foundPositionPageInfos.list">
            <job-info-item :position="position"/>
        </div>
        <el-pagination
                background
                layout="prev,pager,next"
                :total="foundPositionPageInfos.pages*10"
                @current-change="searchPositions" v-if="foundPositionPageInfos!=''&&foundPositionPageInfos.total!=0">
        </el-pagination>

        <el-card class="position-not-found" v-if="foundPositionPageInfos.total==0">未查询到相关职位信息</el-card>
    </div>
</template>

<script>
import JobInfoItem from "./JobInfoItem";
import {mapState} from 'vuex'

export default {
  name: "JobInfo",
  components: {
    JobInfoItem,
  },
  data(){
    return {
      cityId: null,
      positionCategoryId: null,
      industryId: null,
      financingStageId: null,
      education: null,
      salary: null,
      experience: null,
      publishTime: null,
      keyword:'',
      searchWay:'search'
    }
  },
  props: {
    pubVue:{
      type:Object
    }
  },
  mounted() {
    // if (this.$store.state.foundPositionPageInfos==''){
    //
    // }
    this.pubVue.$on('cityId',data =>{
      this.cityId=data
    })
    this.pubVue.$on('positionCategoryId',data =>{
      this.positionCategoryId=data
    })
    this.pubVue.$on('industryId',data =>{
      this.industryId=data
    })
    this.pubVue.$on('positionExperience',data =>{
      this.experience=data
    })
    this.pubVue.$on('financingStageId',data =>{
      this.financingStageId=data
    })
    this.pubVue.$on('positionEducation',data =>{
      this.education=data
    })
    this.pubVue.$on('positionSalary',data =>{
      this.salary=data
    })
    this.pubVue.$on('positionPublishTime',data =>{
      this.positionPublishTime=data
    })
    this.pubVue.$on('keyword',data =>{
      this.keyword=data
    })
    this.pubVue.$on('searchWay',data =>{
      this.searchWay=data
    })
  },
  computed: {
    ...mapState(['foundPositionPageInfos']),
    getCityId(){
      return this.cityId
    }
  },
  methods: {
    searchPositions(pageNow) {
      console.log(this.searchWay)
      if (this.searchWay==='search'){
        this.$store.dispatch('getPositionsByCriteriaAction', {
          page: pageNow,
          industryId:this.industryId,
          positionCategoryId:this.positionCategoryId,
          cityId:this.cityId,
          keyword:this.keyword
        })
      } else{
        this.$store.dispatch('getPositionsByCriteriaAction', {
          positionExperience: this.experience,
          financingStageId: this.financingStageId,
          positionEducation: this.education,
          positionSalary: this.salary,
          positionPublishTime: this.publishTime,
          keyword: ''
        })
      }

    }
  }

}
</script>

<style scoped lang="less">


    .job-info {
        //width: 800rem /@font-size;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        //margin-top: 20rem /@font-size;
        margin-right: 10rem /@font-size;

        .job-info-items {
            display: flex;
            flex-flow: column nowrap;
        }

        /deep/ .el-pagination {

            padding: 12rem /@font-size 0;
        }

        /deep/ .el-pagination .btn-prev {
            background-color: #FFFFFF;
            width: 30rem /@font-size;
            height: 26rem /@font-size;
        }

        /deep/ .el-pagination .btn-next {
            background-color: #FFFFFF;
            width: 30rem /@font-size;
            height: 26rem /@font-size;
        }

        /deep/ .el-pager .number {
            background-color: #FFFFFF;
            width: 30rem /@font-size;
            height: 26rem /@font-size;
            line-height: 26rem /@font-size;

        }

        .position-not-found{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 800rem /@font-size;
            height: 50rem /@font-size;
            text-align: center;

        }
    }
</style>
