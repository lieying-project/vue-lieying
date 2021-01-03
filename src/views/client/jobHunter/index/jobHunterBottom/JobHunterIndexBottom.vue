<template>
    <div class="index-bottom">
        <job-hunter-index-position-reco/>
        <job-hunter-index-position-card/>
    </div>
</template>

<script>
    import JobHunterIndexPositionReco from "./JobHunterIndexPositionReco";
    import JobHunterIndexPositionCard from "./JobHunterIndexPositionCard";
    export default {
        name: "JobHunterIndexBottom",
        components:{
            JobHunterIndexPositionReco,
            JobHunterIndexPositionCard
        }


    }
</script>

<style scoped>
    .index-bottom{
        width: 80%;
        margin: 0 auto;
    }
</style>
