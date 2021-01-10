import request from "./request";
import {removeEmptyField} from "../assets/js/util";

export default {

  //求职者登录
  jobHunterLogin(state, jobHunter) {
    request.post('/api/jobHunter/login', jobHunter).then(res => {
      localStorage.setItem("jobHunterId", res.data.id)
      if (res.data != null) {
        console.log("res.data:")
        console.log(res.data)
        if(res.data=="") {
          alert('用户名或密码错误')
          return
        }
        //获取求职者信息
        this.getJobHunter(state)
        alert('登录成功')
      } else {
        alert('用户名或密码错误')
      }
    })
  },
  //招聘者登录
  recruiterLogin(state, recruiter) {
    request.post('/api/recruiter/login', recruiter).then(res => {
      console.log(res.data)
      state.administrator = res.data
      if (res.data != null) {
        alert('登录成功')
      } else {
        alert('用户名或密码错误')
      }
    })
  },
  // 根据求职者id获取求职者信息
  getJobHunter(state) {
    const jobHunterId = localStorage.getItem("jobHunterId")
    if (jobHunterId != null) {
      request.get('/api/jobHunter/' + jobHunterId).then((res) => {
        state.jobHunter = res.data
        console.log(state.jobHunter)
      })
    }
  },
  //根据招聘者id获取招聘者信息
  getRecruiter(){
    const jobHunterId = localStorage.getItem("jobHunterId")
    if (jobHunterId != null) {

      const data= request.get('/api/recruiter/' + jobHunterId)
      console.log(data)
      this.recruiter=data.data
      console.log(this.recruiter)
      return data
    }
  },
  //根据求职者id获取所有求职者的简历
  getJobHunterResumesByJobHunterId(jobHunterId) {
    request.get('/api/jobHunter/' + jobHunterId + '/resumes').then((res) => {
      console.log(res.data)
    })
  },
  //根据简历id获取简历信息
  // getResumeById(state, id) {
  //   request.get('/api/jobHunter/resume/' + id).then((res) => {
  //     console.log(res.data)
  //     state.resume = res.data
  //   })
  // },
  getResumeById(id) {

    return request.get('/api/jobHunter/resume/' + id);
  },
  //根据职位id获取职位信息
  getPositionById(state, id) {
    request.get('/api/position/' + id)
        .then(res => {
          state.position = res.data
          console.log(state.position)
          const jobHunterId=localStorage.getItem("jobHunterId")
          this.savePositionBrowse(state,{
            position:{
              id:state.position.id
            },
            jobHunter:{
              id:jobHunterId
            },
            createdTime:new Date()
          })

        })
  },
  //根据求职者id获取浏览的职位信息
  getBrowsedPositions(state){

    const jobHunterId=localStorage.getItem("jobHunterId")
    if(jobHunterId==null||jobHunterId==''){
      return
    }
    console.log("jobHunterId:"+jobHunterId)
    request.get("/api/position/browse/"+jobHunterId).then(res => {
      state.browsedPositions=res.data

      console.log(state.browsedPositions)
    })
  },
  //保存职位收藏信息
  savePositionCollect(state, positionCollect) {
    request.post("/api/position/collect/save", positionCollect).then(res => {
      console.log(res.data)
      this.getPositionById(state,positionCollect.position.id)
    })
  },
  deletePositionCollect(state,data){
    console.log(data.positionCollectId)
    request.post('/api/position/collect/delete/'+data.positionCollectId).then(res => {
      console.log(res.data)
      this.getPositionById(state,data.positionId)
    })
  },
  //保存职位浏览信息
  savePositionBrowse(state, positionBrowse) {
    request.post("/api/position/browse/save", positionBrowse).then(res => {
      console.log(res.data)
    })
  },
  //保存职位信息
  // savePosition(state,position){
  //
  //   request.post("/api/position/save", position).then(res => {
  //     console.log("savePosition",res.data)
  //   })
  // },
  //保存职位信息
  savePosition(position){
    return request.post("/api/position/save", position);
  },


  //更新职位
  // updatePosition(state,position){
  //   request.post("/api/position/update", position).then(res => {
  //     console.log(res.data)
  //   })
  // },
  updatePosition(position){
    return request.post("/api/position/update", position);
  },
  deletePosition(state,id){
    return request.get("/api/position/delete", id);
  },
  //获取所有城市信息
  getAllCities(state) {
    request.get('/api/city/all').then(res => {
      console.log(res.data)
      state.cities = res.data
    })
  },
  //根据多个拼首字母查询城市信息
  getCitiesByFirstCharacter(characters) {
    request.get('/api/city/characters/' + characters).then(res => {
      console.log(res.data)
    })
  },
  //获取热门城市信息
  getHotCities(state) {
    request.get('/api/city/hot').then(res => {
      console.log(res.data)
      state.hotCities = res.data
    })
  },
  //根据公司id查询公司信息
  getCompanyById(state, id) {
    request.get('/api/company/' + id).then(res => {
      console.log(res.data)
      state.company = res.data
    })
  },
  //获取热门城市信息
  getHotCompanies(state) {
    request.get('/api/company/hot').then(res => {
      console.log(res.data)
      state.hotCompanies = res.data
    })
  },
  //获取文章id获取文章信息
  getArticleById(state, id) {
    request.get('/api/article/' + id).then(res => {
      state.article = res.data
      console.log(state.article)
    })
  },
  //获取文章列表
  getAllArticlesByPage(state, page) {
    let url = "/api/article/list"
    if (page != null) {
      url = url + "?page=" + page
    }
    request.get(url).then(res => {
      state.articles = res.data
      console.log(state.articles)
    })
  },

  //根据求职者id获取所有求职者文章信息
  getArticlesByJobHunterId(state, jobHunterId) {
    request.get('/api/article/list/' + jobHunterId).then(res => {
      console.log(res.data)
    })
  },
  //保存文章评论
  saveArticleComment(state, articleComment) {
    request.post("/api/article/comment/save", articleComment).then(res => {
      console.log(res.data)
      //重新获取文章信息
      this.getArticleById(state, articleComment.article.id)
    })
  },
  //保存文章评论回复
  saveArticleCommentRely(state, articleCommentRely, articleId) {
    console.log(articleCommentRely)
    request.post("/api/article/comment/rely/save", articleCommentRely).then(res => {
      console.log(res.data)
      //重新获取文章信息
      this.getArticleById(state, articleId)

    })
  },
  //保存文章收藏信息
  saveArticleCollect(state, articleCollect) {
    request.post("/api/article/collect/save", articleCollect).then(res => {
      console.log(res.data)
      this.getAllArticlesByPage(state)
      this.getArticleById(state, articleCollect.article.id)
    })
  },
  //保存文章点赞信息
  saveArticlePraise(state, articlePraise) {
    request.post("/api/article/praise/save", articlePraise).then(res => {
      console.log(res.data)
      this.getAllArticlesByPage(state)
      this.getArticleById(state, articlePraise.article.id)
    })
  },
  //删除文章点赞信息
  deleteArticlePraise(state, data) {
    request.post("/api/article/praise/delete/" + data.articlePraiseId).then(res => {
      console.log(res.data)
      this.getAllArticlesByPage(state)
      this.getArticleById(state, data.articleId)
    })
  },
  //删除文章收藏信息
  deleteArticleCollect(state, data) {
    request.post("/api/article/collect/delete/" + data.articleCollectId).then(res => {
      console.log(res.data)
      this.getAllArticlesByPage(state)
      this.getArticleById(state, data.articleId)
    })
  },
  //保存文章信息
  saveArticle(state, article) {
    request.post("/api/article/save", article).then(res => {
      console.log(res.data)

    })
  },
  //查询所有职位分类信息
  getAllPositionCategories(state) {
    request.get('/api/position/category/all').then(res => {
      state.positionCategories = res.data
      console.log(state.positionCategories)
    }).then(() => {
      state.positionCategories = removeEmptyField(state.positionCategories)
    })
  },
//查询所有行业信息
  getAllIndustries() {
   return  request.get('/api/company/industry/all')
  },
//查询所有融资阶段信息
  getAllFinancingStages() {
    return request.get('/api/company/financingStage/all')
  },
//查询所有公司规模信息
  getCompanyScales() {
    return request.get('/api/company/scale/all')
  },
//管理员登录
  adminLogin(administrator) {
    return request.post('/api/admin/login', administrator)
  },
//根据管理员id查询管理员信息
  getAdministratorById(state, id) {
    request.get('/api/admin/' + id).then(res => {
      console.log(res.data)
      state.administrator = res.data
      //state.companyScales=res.data
      //console.log(this.$store.state.companyScales)
    })
  },
//根据求职者id和职位id查询求职者举报信息
  getJobHunterReportByJobHunterIdAndPositionId(state, jobHunterId, positionId) {
    request.get('/api/jobHunter/report/' + jobHunterId + "/" + positionId).then(res => {

      state.jobHunterReport = res.data
      console.log(state.jobHunterReport)
      //state.companyScales=res.data
      //console.log(this.$store.state.companyScales)
    })
  },
  //保存举报信息
  saveJobHunterReport(state,jobHunterReport){
    request.post("/api/jobHunter/report/save",jobHunterReport).then(res => {
      console.log(res.data)
    })
  },
//更新举报信息
  updateJobHunterReport(state, criteria) {
    request.post("/api/jobHunter/report/update",{
      reason:criteria.reason,
      footnote: criteria.footnote,
      state:criteria.state,
      evidenceScreenShot:criteria.evidenceScreenShot,
      createTime:criteria.createdTime,
      jobHunter:{
        id:criteria.jobHunterId
      },
      position:{
        id:criteria.positionId
      },
      id:criteria.jobHunterReportId
    }).then(res => {
      console.log(res.data)
      state.jobHunterReports=res.data
    })
  },

//更新简历状态
  updateResumeState(state, criteria){
    request.post("/api/admin/resume/update",{
      jobHunter:{
        id:criteria.jobHunterId
      },
      position:{
        id:criteria.positionId
      },
      state:criteria.state
    }).then(res => {
      console.log(res.data)
    })
  },
//根据条件搜索公司信息
  getCompanyByCriteria(state, criteria) {
    request.get('/api/company', {
      cityId: criteria.cityId,
      companyScaleId: criteria.companyScaleId,
      industryId: criteria.industryId,
      financingStageId: criteria.financingStageId
    }).then(res => {
      state.companies = res.data
      console.log(criteria)
      console.log('companies:')
      console.log(state.companies)
      //state.companyScales=res.data
      //console.log(this.$store.state.companyScales)
    })
  },
//根据条件搜索职位
//   getPositionsByCriteria(state, criteria) {
//     request.get("/api/position", {
//       cityId: criteria.cityId,
//       // companyScaleId: criteria.companyScaleId,
//       industryId: criteria.industryId,
//       financingStageId: criteria.financingStageId,
//       positionCategoryId: criteria.positionCategoryId,
//       positionEducation: criteria.positionEducation,
//       positionSalary: criteria.positionSalary,
//       positionExperience: criteria.positionExperience,
//       positionPublishTime: criteria.positionPublishTime,
//       keyword: criteria.keyword,
//       page: criteria.page,
//       recruiterId:criteria.recruiterId
//     }).then(res => {
//       state.foundPositionPageInfos = res.data
//       console.log("index.js输出",state.foundPositionPageInfos)
//     })
//   },
  //................................................测试修改dispatch异步问题.........................................

  getPositionsByCriteria(criteria) {
    return request.get("/api/position", {
      cityId: criteria.cityId,
      // companyScaleId: criteria.companyScaleId,
      industryId: criteria.industryId,
      financingStageId: criteria.financingStageId,
      positionCategoryId: criteria.positionCategoryId,
      positionEducation: criteria.positionEducation,
      positionSalary: criteria.positionSalary,
      positionExperience: criteria.positionExperience,
      positionPublishTime: criteria.positionPublishTime,
      keyword: criteria.keyword,
      page: criteria.page,
      recruiterId:criteria.recruiterId
    })
  },

   // getPositionsByCriteria(criteria) {
   //    return request.get("/api/position", {
   //      cityId: criteria.cityId,
   //      // companyScaleId: criteria.companyScaleId,
   //      industryId: criteria.industryId,
   //      financingStageId: criteria.financingStageId,
   //      positionCategoryId: criteria.positionCategoryId,
   //      positionEducation: criteria.positionEducation,
   //      positionSalary: criteria.positionSalary,
   //      positionExperience: criteria.positionExperience,
   //      positionPublishTime: criteria.positionPublishTime,
   //      keyword: criteria.keyword,
   //      page: criteria.page,
   //      recruiterId:criteria.recruiterId
   //    })
   //  },

//根据求职者id和招聘者id获取聊天信息
  getChatsByJobHunterIdAndRecruiterId(state, jobHunterId, recruiterId) {
    request.get('/api/chat/' + jobHunterId + "/" + recruiterId)
        .then(res => {
          state.chats = res.data
          console.log(state.chats)
          //state.companyScales=res.data
          //console.log(this.$store.state.companyScales)
        })
  },

//根据招聘者id获取聊天信息
  getChatsByRecruiterId(state, recruiterId) {
    request.get('/api/chat/recruiter/' + recruiterId).then(res => {

      state.recruiterChats = res.data
      console.log(state.recruiterChats)

    })
  },
//根据求职者id获取聊天招聘者信息
  getChatRecruitersByJobHunterId(state, jobHunterId) {
    request.get('/api/chat/jobHunter/' + jobHunterId + "/recruiters").then(res => {
      state.chatRecruiters = res.data
      console.log(state.chatRecruiters)
    })
  },
//根据招聘者id获取聊天求职者信息
  getChatJobHuntersByRecruiterId(state, recruiterId) {
    request.get('/api/chat/recruiter/' + recruiterId + "/jobHunters").then(res => {
      state.chatJobHunters = res.data
      console.log(state.chatJobHunters)
    })
  },
//获取所有资讯信息
  getAllInformations(state) {
    request.get("/api/information/all")
        .then(res => {
          state.informations = res.data
          console.log(state.informations)
        })
  },
  //根据资讯id获取资讯信息
  getInformationById(state, id) {
    request.get("/api/information/" + id)
        .then(res => {
          state.information = res.data
          console.log(res.data)
        })
  },
  //保存资讯信息
  saveInformation(state, information) {
    request.post("/api/information/save", information).then(res => {
      console.log(res.data)
      this.getAllInformations(state)
    })
  },
  //查询所有举报信息

  getJobHunterReportsByCriteria(state,criteria){
    request.get("/api/admin/reports",{
      positionName:criteria.positionName,
      jobHunterName:criteria.jobHunterName,
      reportReason:criteria.reportReason,
      reportState:criteria.reportState
    }).then(res => {
      console.log(res.data)
      state.jobHunterReports=res.data
    })
  },
  //更新公司信息
  updateCompany(state, company) {
    request.post("/api/company/update", company).then(res => {
      console.log(res.data)
    })
  },
  //添加简历
  saveResume(state,resume){
    request.post("/api/jobHunter/resume/add", resume).then(res => {
      console.log(res.data)
    })
  },
  //更新简历
  updateResume(resume){
    request.post("/api/jobHunter/resume/update", resume).then(res => {
      console.log(res.data)
    })
  },
  //添加志愿服务经历
  saveVolunteerExperience(state,volunteerExperience){
    request.post("/api/jobHunter/resume/volunteer/save", volunteerExperience).then(res => {
      console.log(res.data)
    })
  },
  //更新志愿经历
  updateVolunteerExperience(state,volunteerExperience){
    request.post("/api/jobHunter/resume/volunteer/update", volunteerExperience).then(res => {
      console.log(res.data)
    })
  },
  //添加实习经历
  saveInternshipExperience(state,data){
    request.post("/api/jobHunter/resume/internship/save", data).then(res => {
      console.log(res.data)
    })
  },
  //更新实习经历
  updateInternshipExperience(state,data){
    request.post("/api/jobHunter/resume/internship/update", data).then(res => {
      console.log(res.data)
    })
  },
  //添加资格证书
  saveCredential(data){
    request.post("/api/jobHunter/resume/credential/save", data).then(res => {
      console.log(res.data)
    })
  },
  //更新资格证书
  updateCredential(state,data){
    request.post("/api/jobHunter/resume/credential/update", data).then(res => {
      console.log(res.data)
    })
  },
  //添加项目经历
  saveProjectExperience(state,data){
    request.post("/api/jobHunter/resume/project/save", data).then(res => {
      console.log(res.data)
    })
  },
  //更新项目经历
  updateProjectExperience(state,data){
    request.post("/api/jobHunter/resume/project/update", data).then(res => {
      console.log(res.data)
    })
  },
  //添加教育经历
  saveEducationExperience(state,data){
    request.post("/api/jobHunter/resume/education/save", data).then(res => {
      console.log(res.data)
    })
  },
  //更新教育经历
  updateEducationExperience(state,data){
    request.post("/api/jobHunter/resume/education/update", data).then(res => {
      console.log(res.data)
    })
  },
  //添加社交主页
  saveSocialHomepage(data){
    request.post("/api/jobHunter/resume/socialHomepage/save", data).then(res => {
      console.log(res.data)
    })
  },
  //更新社交主页
  updateSocialHomepage(data){
    request.post("/api/jobHunter/resume/socialHomepage/update", data).then(res => {
      console.log(res.data)
    })
  },
  //文件上传
  uploadFile(formData,config){
   this.$axios.post("/api/file/upload",formData,config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  //推荐职位
  getRecommendPositions(jobHunterId){
    console.log("recommend")
    request.get("/api/position/recommend",{
      jobHunterId:3
    }).then(res => {
      console.log(res.data)
    })
  },
  //更新求职者信息
  updateJobHunter(jobHunter) {
    request.post("/api/jobHunter/update", jobHunter).then(res => {
      console.log(res.data)
    })
  },
  // getJobHunterReportsByCriteria(criteria){
  //   if(!criteria) {
  //     return request.get("/api/admin/reports");
  //   } else {
  //     return request.get("/api/admin/reports",{
  //       positionName:criteria.positionName,
  //       jobHunterName:criteria.jobHunterName,
  //       reportReason:criteria.reportReason,
  //       reportState:criteria.reportState
  //     })
  //   }
  // },
// /api/company/update
//
//更新公司信息
//   updateCompany(company){
//     return request.post("/api/company/update",company);
//
//   }
}
