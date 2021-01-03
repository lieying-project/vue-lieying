<template>
    <div class="resume-info">
        <ResumeContent :resume="resume" />
        <ResumeUserSider :resume="resume" />
    </div>
</template>

<script>
import ResumeContent from "./resumeContent/ResumeContent";
import ResumeUserSider from "./resumeUserSider/ResumeUserSider";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
export default {
  name: "ResumeInfo",
  components: {ResumeUserSider, ResumeContent},
  data(){
    return {
      // resume:{
      //   updatedTime: '2020.09.30 14:55',
      //   name: '张三',
      //   identify: '21届毕业生',
      //   education: '本科学历',
      //   state: '离校随时到岗',
      //   phone: '17898823212',
      //   advantage: '软件工程专业本科2021应届生；熟悉Java语言、基本的数据结构，了解多线程、JVM垃圾回收机制；熟悉Spring、SpringMVC 、Mybatis、Spring Boot 等开源框架；熟悉MySQL，了解MySQL索引、锁、事务；熟练使用Linux 常用命令；熟练使用Git的基本命令；自学能力较强，适应能力强。',
      //   expectedPosition: {
      //     type: '全职',
      //     name: 'Java',
      //     salary: '7-8k',
      //     city: {
      //       id: 1,
      //       name: '杭州'
      //     },
      //     industry: {
      //       id: 1,
      //       name: '计算机 互联网'
      //     }
      //   },
      //   socialHomepages: [
      //     {id: '1',url: 'https://github.com/codingInfatuation'},
      //     {id: '2',url: 'https://github.com/sssss'},
      //   ],
      //   extraFiles: [//require('../../../../../assets/imgs/icon-file.png')
      //     {id: '1',name:'xxx-Java开发工程师.doc',path: ''}
      //   ],
      //   credentials: [
      //     {id:'1',name:'大学英语四级'},
      //     {id:'2',name:'普通话三级甲等'}
      //   ],
      //   educationExperiences: [
      //     {id:'1',school: '山东工商学院',education:'本科',profession:'软件工程',startTime:'2017',endTime:'2021',experience:'xxxxxxx'},
      //     {id:'2',school: 'xxxxx',education:'硕士',profession:'软件工程',startTime:'2021',endTime:'2024',experience:'xxxxxxxxxx'},
      //   ],
      //   jobHunter: {
      //     id:1,name:'张三',sex:'男',phone:'17898823212',wechat:'xxxxx',email:'xxxx@qq.com',
      //     birthday:'1999-12-13',state:'离校随时到岗',identify:'21届毕业生',
      //     photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
      //   },
      //   volunteerExperiences: [
      //     {id:1,name:'志愿服务1',duration:'23小时',startTime:'2019-12-13',endTime:'2019-12-14',description:'志愿服务描述1'},
      //     {id:2,name:'志愿服务2',duration:'24小时',startTime:'2019-12-23',endTime:'2020-12-24',description:'志愿服务描述2'},
      //   ],
      //   internshipExperiences:[
      //     {id:1,company:'公司1',department:'xx部',positionType:'互联网',technology:'技能1',industry:'行业1',positionName:'positionName1',startTime:'2019-02-12',
      //     endTime:'2019-02-12',jobContent:'工作内容1',jobPerformance:'工作业绩1'},
      //     {id:2,company:'公司3',department:'xx部',positionType:'互联网',technology:'技能2',industry:'行业2',positionName:'positionName2',startTime:'2019-02-12',
      //       endTime:'2019-02-12',jobContent:'工作内容2',jobPerformance:'工作业绩2'},
      //   ],
      //   projectExperiences:[
      //     {id:1,name:'项目1',role:'xxx',url:'ssgfg.com',startTime:'2018-11-12',endTime:'2019-02-12',description:'项目1描述',performance:'项目1业绩'},
      //     {id:2,name:'项目2',role:'xxx',url:'ssgfg.com',startTime:'2018-11-12',endTime:'2019-02-12',description:'项目2描述',performance:'项目2业绩'}
      //   ]
      //
      // }
    }
  },
  methods: {
    ...mapActions(['getJobHunterByIdAction']),
    getJobHunterById(){
      this.getJobHunterByIdAction(1)
    }
  },

  mounted(){
    const resumeId=this.$route.params.id
    // this.getJobHunterById()
    // this.$store.dispatch('getJobHunterByIdAction',1);
    // this.$store.dispatch('getJobHunterResumesByJobHunterIdAction',1);
    this.$store.dispatch('getResumeByIdAction',resumeId)
  },
  computed:{
    ...mapState(['resume'])
  }
}
</script>

<style scoped lang="less">

    .resume-info{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
        background-color: @backgroundColor;


    }
</style>
