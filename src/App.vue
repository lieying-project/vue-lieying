<template>
  <div id="app">
    <job-hunter-index-nav v-if="this.$route.meta.role === 'jobHunter'"/>
<!--    <recruiter-header v-if="this.$route.meta.role === 'recruiter'"/>-->
    <div class="main">
      <router-view v-wechat-title="$route.meta.title"/>
    </div>
    <JobHunterFooter v-if="this.$route.meta.role === 'jobHunter'"/>
    <LinkedFriend v-if="this.$route.meta.role === 'jobHunter'"/>
  </div>
</template>
<script>
  import JobHunterIndexNav from "./views/client/jobHunter/index/jobHunterHeader/JobHunterIndexNav";
  import JobHunterFooter from "./components/user/jobHunter/index/JobHunterFooter";
  import LinkedFriend from "./components/user/jobHunter/index/LinkedFriend";
  // import RecruiterHeader from "./components/common/RecruiterHeader";
  export default {
    name:"App",
    components:{
      LinkedFriend,
      JobHunterFooter,
      JobHunterIndexNav,
      // RecruiterHeader
    },
    mounted() {
      //console.log(this.$route.meta.role)
      //this.$store.state.role=this.$route.meta.role
    }
  }
</script>
<style scoped lang="less">
  html {
    height: 100%;
    display: table;
  }
  body{
    margin:0;
    background-color:rgb(246,246,248);
    height: 100%;
    display: table-cell;
  }
  .app {
    height: 100%;
  }
  .main{
    margin-bottom: 10rem /@font-size;
    height: 100%;
  }

</style>
