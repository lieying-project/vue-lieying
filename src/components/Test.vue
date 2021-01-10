<template>

    <div>
        <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
export default {
  name: "Test",
  data () {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods: {
    addPosition() {
      //添加职位
      this.$store.dispatch('savePositionAction', {
        name: "name", salary: "100/天",
        address: "address",
        education: "高中",
        experience: "experience",
        detail: "detail",
        recruiter: {
          id: 1
        },
        positionCategory:{
          id:2
        },
        publishTime:new Date(),

      })
    },
    updatePosition() {
      //更新职位
      this.$store.dispatch('updatePositionAction', {
        id: 46,
        name: "11113name",
        salary: "200/天",
        address: "address",
        education: "1高中",
        experience: "1experience",
        detail: "1detail",
        recruiter: {
          id: 2
        }
      })
    },
    deletePosition() {
      //删除职位
      this.$store.dispatch('deletePositionAction', {
        id: 49
      })
    },
    getRecruiterPositionsByCriteria() {
      //查询某招聘者下的所有职位信息，支持分页
      this.$store.dispatch('getPositionsByCriteriaAction', {
        recruiterId: 1,
        page: 2//页码从1开始
      })
    },
    getPositionsByCriteria(){
      //查询某招聘者下的职位信息，条件可选,下面参数都可选
      this.$store.dispatch('getPositionsByCriteriaAction',{
        recruiterId:1,
        page:2
          // cityId: criteria.cityId,
          // industryId: criteria.industryId,
          // financingStageId: criteria.financingStageId,
          // positionCategoryId: criteria.positionCategoryId,
          // positionEducation: criteria.positionEducation,
          // positionSalary: criteria.positionSalary,
          // positionExperience: criteria.positionExperience,
          // positionPublishTime: criteria.positionPublishTime,
          // keyword: criteria.keyword,
          // recruiterId:criteria.recruiterId
      })
    },
    getRecruiter(){
      //获取招聘者信息
      //需要用户登录，然后获取token中的id，根据id获取招聘者信息，这里招聘者信息和求职者信息我都改成了一模一样(用户名密码手机号等信息)
      //可以查看招聘者的各种信息
      this.$store.dispatch('getRecruiterAction')
    },
    getJobHunterReportsByCriteria(){
      //根据条件查询举报信息，模糊查询，条件可选
      this.$store.dispatch('getJobHunterReportsByCriteriaAction',{
        positionName:'软件',
        jobHunterName:'',
        reportReason:'虚假',
        reportState:'状态1'
      })
    },
    updateJobHunterReport(){
      //更新举报信息,可以修改状态等信息
      this.$store.dispatch('updateJobHunterReportAction',{
       reason: "虚假的信息",
        footnote: "footnote1",
        state:"已经审核",
        evidenceScreenShot:"证据截图1",
        createTime:new Date(),
        jobHunterId: 1,
        positionId:1,
        jobHunterReportId:1

      })


    },
    updateResumeState(){
      //更新简历投递状态
       this.$store.dispatch('updateResumeStateAction',{
         jobHunterId:1,
         positionId:1,
         state:'已沟通'
       })
    },
    getResumeById(){
      // //获取简历详细信息
       this.$store.dispatch('getResumeByIdAction',1)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    updateCompany(){
      //更新公司信息，参数可选
      this.$store.dispatch('updateCompanyAction',{
        id:3,
        industry:{
          id:1
        },
        companyScale:{
          id:1
        },
        financingStage:{
          id:2
        },
        city:{
          id:1
        },
        workTime:new Date(),
        employeeWelfare:"福利",
        businessScope:'经营范围1',
        registerCapital:'3000万元',
        established:new Date(),
        representative:"张xx",
        license:'营业执照路径',
        sign:'公司标志路径',
        culture:'公司文化',
        intro:"公司介绍i",
        phone:"11212222222",
        address:'地址',
        name:'公司名称'
      })
    }
  },
  mounted() {
     this.addPosition()
    //this.updatePosition()
    //this.deletePosition()
    //this.getRecruiterPositionsByCriteria()
    //this.getRecruiter()
   // this.getPositionsByCriteria()
   // this.updateJobHunterReport()
   // this.getJobHunterReportsByCriteria()
   //this.updateResumeState()
   // this.getResumeById()
    //this.updateCompany()


  }
}
</script>

<style scoped lang="less">

</style>
