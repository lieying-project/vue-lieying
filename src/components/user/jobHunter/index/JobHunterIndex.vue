<template>
    <div class="main">
        <job-hunter-index-search/>
        <job-hunter-index-content/>
        <job-hunter-index-bottom/>
    </div>
</template>

<script>
import JobHunterIndexSearch from "../../../../views/client/jobHunter/index/jobHunterMiddle/JobHunterIndexSearch";
import JobHunterIndexContent from "../../../../views/client/jobHunter/index/jobHunterMiddle/JobHunterIndexContent";
import JobHunterIndexBottom from "../../../../views/client/jobHunter/index/jobHunterBottom/JobHunterIndexBottom";
export default {
  name: "JobHunterIndex",
  components: {
    JobHunterIndexContent,
    JobHunterIndexSearch,
    JobHunterIndexBottom
  }

}
</script>

<style scoped lang="less">
    @import "../../../../assets/styles/variables";
    .main {
        position: relative;
        width: 100%;
        margin: 0 auto;
        background-color: #F6F6F8;

    }
</style>
