<template>
    <div>
        <div class="recruit-info">
            <recruit-info-search></recruit-info-search>
            <recruit-info-content></recruit-info-content>
            <el-divider/>
            <pagination/>
        </div>
    </div>
</template>

<script>
    import RecruitInfoContent from "@/views/client/recruiter/recruitInfo/RecruitInfoContent";
    import RecruitInfoSearch from "@/views/client/recruiter/recruitInfo/RecruitInfoSearch";
    import Pagination from "../../../admin/common/Pagination";
    export default {
        name: "RecruitInfo",
        components: {
            RecruitInfoSearch,
            RecruitInfoContent,
            Pagination
        }
    }
</script>

<style scoped lang="less">
    .recruit-info {
        height: 100vh;
        /*background-color: #F2F2F2;*/
    }
</style>