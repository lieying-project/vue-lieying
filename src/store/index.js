import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index";
import router from "../router";
import request from "../api/request";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: localStorage.getItem("count"),
    token: localStorage.getItem("token") || "",
    jobHunterId:null,
    jobHunter:null,
    cities:'',
    hotCities:'',
    hotCompanies:'',
    companyScales:'',
    industries:'',
    financingStages:'',
    positionCategories:'',
    position:'',
    company:'',
    administrator:'',
    jobHunterReport:'',
    jobHunterReports:'',
    companies:'',
    resume:'',
    chats:'',
    jobHunterChats:[],
    chatRecruiters:'',
    recruiterChats:'',
    chatJobHunters:'',
    foundPositionPageInfos:'',
    information:'',
    informations:'',
    article:'',
    articles:'',
    browsedPositions:'',
    role: '',
    recommendedPositions:''
  },
  getters: {//store中state的一些派生状态
    getToken(state) {
      return state.token;
    }
  },
  mutations: {//更改store中状态的唯一办法
    updateToken(state, payload) {
      localStorage.setItem("token", payload);
    },
    setJobHunterId(state,jobHunterId){
      localStorage.setItem("jobHunterId",jobHunterId)
    },
    jobHunterLogin(state,jobHunter){
      api.jobHunterLogin(state,jobHunter)
    },
    userRegister(state,user){
      //console.log(user)
      request.post('/api/jobHunter/register',user).then(res => {
        if(res.data==false){
          alert("注册失败，用户名或手机号已经存在")
          return
        }
        request.post('/api/recruiter/register',user).then(res =>{
          if(res.data==true){
            alert("注册成功")
          } else if(res.data==false){
            alert("注册失败")
            return
          }
        })
      })
    },
    recruiterLogin(state,recruiter){
      api.recruiterLogin(state,recruiter)
    },
    getJobHunter(state) {
      api.getJobHunter(state)
    },
    getJobHunterResumesByJobHunterId(state, jobHunterId) {
      api.getJobHunterResumesByJobHunterId(jobHunterId)
    },
    getResumeById(state, res) {
      // api.getResumeById(state,id)
      state.resume = res.data;
    },
    getPositionById(state,id){
      api.getPositionById(state,id)
    },
    savePositionCollect(state,positionCollect){
      api.savePositionCollect(state,positionCollect)
    },
    deletePositionCollect(state,data){
      api.deletePositionCollect(state,data)
    },
    savePositionBrowse(state,positionBrowse){
      api.savePositionBrowse(state,positionBrowse)
    },
    getCompanyById(state,id){
      api.getCompanyById(state,id)
    },
    getAllPositionCategories(state){
      api.getAllPositionCategories(state)
    },
    getAllCities(state){
      api.getAllCities(state)
    },
    getHotCities(state){
      api.getHotCities(state)
    },
    getBrowsedPositions(state,){
      api.getBrowsedPositions(state)
    },
    getIndustryById(state,id){
      api.getIndustryById(id)
    },
    getAllIndustries(state,res){
      state.industries = res.data
    },
    getAllFinancingStages(state,res){
        state.financingStages = res.data;
    },
    getCompanyScales(state,res){
        state.companyScales = res.data
    },
    getAdministratorById(state,id){
      api.getAdministratorById(state,id)
    },
    getJobHunterReportByJobHunterIdAndPositionId(state,data){
      api.getJobHunterReportByJobHunterIdAndPositionId(state,data.jobHunterId,data.positionId)
    },
    updateJobHunterReport(state,data){
      //console.log(data)
      api.updateJobHunterReport(state,data)
    },
    saveJobHunterReport(state,jobHunterReport){
      api.saveJobHunterReport(state,jobHunterReport)
    },
    adminLogin(state,data){
        state.administrator = data;
        console.log("administrator",state.administrator);
      },
    updateResumeState(state,data){
      api.updateResumeState(state,data)
    },
    getCompanyByCriteria(state,criteria){
      api.getCompanyByCriteria(state,criteria)
    },
    getChatsByJobHunterIdAndRecruiterId(state,data){
      api.getChatsByJobHunterIdAndRecruiterId(state,data.jobHunterId,data.recruiterId)
    },

    getChatsByRecruiterId(state,recruiterId){
      api.getChatsByRecruiterId(state,recruiterId)
    },
    getChatRecruitersByJobHunterId(state,jobHunterId){
      api.getChatRecruitersByJobHunterId(state,jobHunterId)
    },
    getChatJobHuntersByRecruiterId(state,recruiterId){
      api.getChatJobHuntersByRecruiterId(state,recruiterId)
    },
    //保存获取到的职位信息................................................................................................
    getPositionsByCriteria(state,data){
      state.foundPositionPageInfos = data;
      console.log("mutations输出",state.foundPositionPageInfos)
    },
    getInformationById(state,id){
      api.getInformationById(state,id)
    },
    getAllInformations(state){
      api.getAllInformations(state)
    },
    getAllArticlesByPage(state,page){
      api.getAllArticlesByPage(state,page)
    },
    getArticleById(state,id){
      api.getArticleById(state,id)
    },
    saveArticleComment(state,articleComment){
      api.saveArticleComment(state,articleComment)
    },
    saveArticleCommentRely(state,data){
      api.saveArticleCommentRely(state,data.articleCommentRely,data.articleId)
    },
    saveArticleCollect(state,articleCollect){
      api.saveArticleCollect(state,articleCollect)
    },
    saveArticlePraise(state,articlePraise){
      api.saveArticlePraise(state,articlePraise)
    },
    deleteArticlePraise(state,data){
      api.deleteArticlePraise(state,data)
    },
    deleteArticleCollect(state,data){
      api.deleteArticleCollect(state,data)
    },
    saveInformation(state,information){
      api.saveInformation(state,information)
    },
    saveArticle(state,article){
      api.saveArticle(state,article)
    },
    savePosition(state,position){

    },
    updatePosition(state,position){

    },
    deletePosition(state,id){

    },
    getRecruiter(state,res){
      console.log("res",res);
      state.recruiter = res.data
      console.log("mutationsRecruiter",state.recruiter);
    },
    getJobHunterReportsByCriteria(state,criteria){

      api.getJobHunterReportsByCriteria(state,criteria)
    },
    updateCompany(state,company){
      api.updateCompany(state,company)
    },
    setRecommendedPositions(state){
      api.getRecommendPositions(state)

    },
    getJobHunter1(state) {
      const jobHunterId = localStorage.getItem("jobHunterId")
      if (jobHunterId != null) {
        request.get('/api/jobHunter/' + jobHunterId).then((res) => {
          state.jobHunter = res.data
          console.log(state.jobHunter)
        })
      }


    },


  },
  actions: {//允许异步操作
    updateTokenAction({commit}, payload) {
      commit("updateToken", payload);
    },
    setJobHunterIdAction({commit},jobHunterId){
      commit("setJobHunterId",jobHunterId)
    },
    jobHunterLoginAction({commit},jobHunter){
      commit("jobHunterLogin",jobHunter)
    },
    recruiterLoginAction({commit},recruiter){
      commit('recruiterLogin',recruiter)
    },
    getJobHunterAction({commit}) {
      commit('getJobHunter')
    },
    getJobHunterResumesByJobHunterIdAction({commit}, jobHunterId) {
      commit('getJobHunterResumesByJobHunterId', jobHunterId)
    },
    async getResumeByIdAction({commit}, id) {
      const data = await api.getResumeById(id);
      console.log("action",data);
      commit('getResumeById', data);
      return data;

    },
    getPositionByIdAction({commit},id){
      commit('getPositionById',id)
    },
    savePositionCollectAction({commit},positionCollect){
      commit('savePositionCollect',positionCollect)
    },
    deletePositionCollectAction({commit},data){
      // commit('deletePositionCollect',data)
    },
    savePositionBrowseAction({commit},positionBrowse){
      commit('savePositionBrowse',positionBrowse)
    },
    getCompanyByIdAction({commit},id){
      commit('getCompanyById',id)
    },
    getAllPositionCategoriesAction({commit}){
      commit('getAllPositionCategories')
    },
    getAllCitiesAction({commit}){
      commit('getAllCities')
    },
    getHotCitiesAction({commit}){
      commit('getHotCities')
    },
    getBrowsedPositionsAction({commit}){
      commit('getBrowsedPositions')
    },
    getIndustryByIdAction({commit},id){
      commit('getIndustryById',id)
    },
    async getAllIndustriesAction({commit}){
      const data = await api.getAllIndustries();
      commit('getAllIndustries',data);
      return data;
    },
   async getAllFinancingStagesAction({commit}){
      const data = await api.getAllFinancingStages();
      commit('getAllFinancingStages',data);
     return data;
    },

    async getCompanyScalesAction({commit}){
      const data = await api.getCompanyScales()
      commit('getCompanyScales',data);
      return data;
    },
    getAdministratorByIdAction({commit},id){
      commit('getAdministratorById',id)
    },
    getJobHunterReportByJobHunterIdAndPositionIdAction({commit},data){
      commit('getJobHunterReportByJobHunterIdAndPositionId',data)
    },
    updateJobHunterReportAction({commit},data){
      commit('updateJobHunterReport',data)
    },
    saveJobHunterReportAction({commit},jobHunterReport){
      commit('saveJobHunterReport',jobHunterReport)
    },
    async adminLoginAction({commit},data){
      const data1 =  await api.adminLogin(data);
      if(data.username === "xiaoming" && data.password === "abc123456") {
        commit('adminLogin',data);
      }
      return data1;
    },
    updateResumeStateAction({commit},data){
      commit('updateResumeState',data)
    },
    getCompanyByCriteriaAction({commit},criteria){
      commit('getCompanyByCriteria',criteria)
    },
    getChatsByJobHunterIdAndRecruiterIdAction({commit},data){
      commit('getChatsByJobHunterIdAndRecruiterId',data)
    },
    getChatsByRecruiterIdAction({commit},recruiterId){
      commit('getChatsByRecruiterId',recruiterId)
    },
    getChatRecruitersByJobHunterIdAction({commit},jobHunterId){
      commit('getChatRecruitersByJobHunterId',jobHunterId)
    },
    getChatJobHuntersByRecruiterIdAction({commit},recruiterId){
      commit('getChatJobHuntersByRecruiterId',recruiterId)
    },
    //获取招聘者发布的职位详细........................................................................................
    async getPositionsByCriteriaAction({commit},criteria){

      console.log(criteria)
      const data =  await api.getPositionsByCriteria(criteria);
      commit('getPositionsByCriteria',data.data.list);
      return data;

      // const data =  await api.getPositionsByCriteria(criteria);
      // commit('getPositionsByCriteria',data);
      // return data;
      // //  console.log('criteria',criteria);


    },

    getInformationByIdAction({commit},id){
      commit('getInformationById',id)
    },
    getAllInformationsAction({commit}){
      commit('getAllInformations')
    },
    saveInformationAction({commit},information){
      commit('saveInformation',information)
    },
    getAllArticlesByPageAction({commit},page){
      commit('getAllArticlesByPage',page)
    },
    getArticleByIdAction({commit},id){
      commit('getArticleById',id)
    },
    saveArticleCommentAction({commit},articleComment){
      commit('saveArticleComment',articleComment)
    },
    saveArticleCommentRelyAction({commit},data){
      commit('saveArticleCommentRely',data)
    },
    saveArticleCollectAction({commit},articleCollect){
      commit('saveArticleCollect',articleCollect)
    },
    saveArticlePraiseAction({commit},articlePraise){
      commit('saveArticlePraise',articlePraise)
    },
    deleteArticlePraiseAction({commit},data){
      commit('deleteArticlePraise',data)
    },
    deleteArticleCollectAction({commit},data){
      commit('deleteArticleCollect',data)
    },
    saveArticleAction({commit},article){
      commit('saveArticle',article)
    },
    async savePositionAction({commit},position){

      const data = await api.savePosition(position);
      commit('savePosition',data);
      return data;
    },
    async updatePositionAction({commit},position){
      const data =  await   api.updatePosition(position);

      //commit('updatePosition',position)

      commit('updatePosition',position)

      return data;
    },
    async deletePositionAction({commit},id){
      const data = await api.deletePosition(id);
      commit('deletePosition',id);
      return data;
    },

    getRecruiterAction({commit}){
      //commit('getRecruiter')
      api.getRecruiter()
    },
    getJobHunterReportsByCriteriaAction({commit},criteria){
      commit('getJobHunterReportsByCriteria',criteria)
    },
    updateCompanyAction({commit},company){
      commit('updateCompany',company)
    },
    async updateResumeAction({commit}, resume) {
      const data = await api.updateResume(resume)
      return data;
    },
    async saveCredentialAction({commit},credential){
      const data = await api.saveCredential(credential)
      return data;
    },
    async saveVolunteerExperienceAction({commit},volunteerExperience){
      const data = await api.saveVolunteerExperience(volunteerExperience)
      return data;
    },
    async saveSocialHomepageAction({commit},socialHomepage){
      const data=await api.saveSocialHomepage(socialHomepage)
      return data;
    },
    async updateSocialHomepageAction({commit},socialHomepage){
      const data=await api.updateSocialHomepage(socialHomepage)
      return data;
    },
    async getRecommendPositionsAction({commit}){


      commit('setRecommendedPositions')


    },
    async updateJobHunterAction({commit},jobHunter) {
      const data = await api.updateJobHunter(jobHunter)
      commit('getJobHunter')
      return data
    },
    async saveResumeAction({commit},resume){
      const data= await api.saveResume(resume)


      return data
    },
    async saveChatAction({commit},chat){
      console.log(chat)
      const data= await api.saveChat(chat)
      console.log("chat:"+data)


      return data
    },
    saveEducationExperienceAction({commit},data){
      api.saveEducationExperience(data)
    }
    // async getRecruiterAction({commit}){
    //   const data = await  api.getRecruiter();
    //   commit('getRecruiter',data);
    //   return data;
    // },
    // async getJobHunterReportsByCriteriaAction({commit},criteria){
    //   const data = await api.getJobHunterReportsByCriteria(criteria)
    //   commit('getJobHunterReportsByCriteria',criteria);
    //   return data;
    // },
    // //更新公司信息
    // async updateCompanyAction({commit},company) {
    //   const data = await api.updateCompany(company);
    //   commit('updateCompany',data);
    //
    // }
  },
  modules: {}
})
