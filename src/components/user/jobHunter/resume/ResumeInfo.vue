<template>
    <div class="resume-info">
        <ResumeContent  />
        <ResumeUserSider  />
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
    }
  },
  methods: {
   /* ...mapActions(['getJobHunterByIdAction']),
    getJobHunterById(){
      this.getJobHunterByIdAction(1)
    }*/
  },

  mounted(){
    const resumeId=this.$route.params.id
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
