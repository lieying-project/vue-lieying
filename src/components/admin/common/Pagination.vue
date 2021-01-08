<template>
    <div class="pagination">
<!--        <el-pagination-->
<!--                background-->
<!--                layout="prev, pager, next"-->
<!--                :total="80">-->
<!--        </el-pagination>-->
        <el-pagination
                background
                layout="prev,pager,next"
                :total="foundPositionPageInfos.pages*10"
                @current-change="search" v-if="foundPositionPageInfos!=''&&foundPositionPageInfos.total!=0">
        </el-pagination>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Pagination",
        data(){
          return {
              searchWay:'data'
          }
        },
        mounted() {
            this.eventBus.$on('getRecruitInfo',(data)=>{
                console.log('pagination',data);

            })
        },
        computed:{
          ...mapState(['foundPositionPageInfos'])
        },
        methods: {
            search(pageNow) {
                // console.log(this.searchWay)
                // if (this.searchWay==='search'){
                //     this.$store.dispatch('getPositionsByCriteriaAction', {
                //         page: pageNow,
                //         industryId:this.industryId,
                //         positionCategoryId:this.positionCategoryId,
                //         cityId:this.cityId,
                //         keyword:this.keyword
                //     })
                // } else{
                //     this.$store.dispatch('getPositionsByCriteriaAction', {
                //         positionExperience: this.experience,
                //         financingStageId: this.financingStageId,
                //         positionEducation: this.education,
                //         positionSalary: this.salary,
                //         positionPublishTime: this.publishTime,
                //         keyword: ''
                //     })
                // }

            }
        }
    }
</script>

<style scoped lang="less">
    .pagination{
        padding-top: 20px;
        text-align: center;
    }
</style>