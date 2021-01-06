<template>

    <div> test</div>
</template>

<script>
export default {
  name: "Test",
  mounted() {

    // //添加职位
    //  this.$store.dispatch('savePositionAction',{
    //    name:"name", salary:"100/天",
    //     address:"address" ,
    //     education:"高中",
    //     experience:"experience",
    //    detail:"detail" ,
    //     recruiter:{
    //       id: 1
    //    }
    //  })

    // //更新职位
    // this.$store.dispatch('updatePositionAction',{
    //   id:46,
    //   name:"11113name",
    //   salary:"200/天",
    //   address:"address" ,
    //   education:"1高中",
    //   experience:"1experience",
    //   detail:"1detail" ,
    //   recruiter:{
    //     id:2
    //   }
    // })

    //删除职位
    /*this.$store.dispatch('deletePositionAction',{
      id:49
    })*/


    // //查询某招聘者下的所有职位信息，支持分页
    // this.$store.dispatch('getPositionsByCriteriaAction',{
    //   recruiterId:1,
    //   page:2//页码从1开始
    // })


    //查询某招聘者下的职位信息，条件可选,下面参数都可选
    // this.$store.dispatch('getPositionsByCriteriaAction',{
    //   recruiterId:1,
    //   page:2,
    //     cityId: criteria.cityId,
    //
    //     industryId: criteria.industryId,
    //     financingStageId: criteria.financingStageId,
    //     positionCategoryId: criteria.positionCategoryId,
    //     positionEducation: criteria.positionEducation,
    //     positionSalary: criteria.positionSalary,
    //     positionExperience: criteria.positionExperience,
    //     positionPublishTime: criteria.positionPublishTime,
    //     keyword: criteria.keyword,
    //
    //     recruiterId:criteria.recruiterId
    // })


    //获取招聘者信息
    //需要用户登录，然后获取token中的id，根据id获取招聘者信息，这里招聘者信息和求职者信息我都改成了一模一样(用户名密码手机号等信息)
    //可以查看招聘者的各种信息
    //this.$store.dispatch('getRecruiterAction')


    // //根据条件查询举报信息，模糊查询，条件可选
    // this.$store.dispatch('getJobHunterReportsByCriteriaAction',{
    //   positionName:'软件',
    //   jobHunterName:'',
    //   reportReason:'虚假',
    //   reportState:'状态1'
    // })


   // //更新举报信息,可以修改状态等信息
   // this.$store.dispatch('updateJobHunterReportAction',{
   //  reason: "虚假的信息",
   //   footnote: "footnote1",
   //   state:"已经审核",
   //   evidenceScreenShot:"证据截图1",
   //   createTime:new Date(),
   //   jobHunterId: 1,
   //   positionId:1,
   //   jobHunterReportId:1
   //
   // })
   //

  //更新简历投递状态
   /* this.$store.dispatch('updateResumeStateAction',{
      jobHunterId:1,
      positionId:1,
      state:'已沟通'
    })*/

   // //获取简历详细信息
   //  this.$store.dispatch('getResumeByIdAction',1)

  }
}
</script>

<style scoped lang="less">

</style>
