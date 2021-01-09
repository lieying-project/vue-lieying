import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index";

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
    role: ''
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
    getAllIndustries(state){
      api.getAllIndustries(state)
    },
    getAllFinancingStages(state){
      api.getAllFinancingStages(state)
    },
    getCompanyScales(state){
      api.getCompanyScales(state)
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
      api.adminLogin(state,data)
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
    }
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
    getAllIndustriesAction({commit}){
      commit('getAllIndustries')
    },
    getAllFinancingStagesAction({commit}){
      commit('getAllFinancingStages')
    },
    getCompanyScalesAction({commit}){
      commit('getCompanyScales')
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
    adminLoginAction({commit},data){
      commit('adminLogin',data)
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
      const data =  await api.getPositionsByCriteria(criteria);
      commit('getPositionsByCriteria',data);
      return data;
      //  console.log('criteria',criteria);

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
      commit('updatePosition',position)
      return data;
    },
    async deletePositionAction({commit},id){
      const data = await api.deletePosition(id);
      commit('deletePosition',id);
      return data;
    },
    async getRecruiterAction({commit}){
      const data = await  api.getRecruiter();
      commit('getRecruiter',data);
      return data;
    },
    getJobHunterReportsByCriteriaAction({commit},criteria){
      commit('getJobHunterReportsByCriteria',criteria)
    }
  },
  modules: {}
})
