<template>
    <div class="report-manage">
        <reporting-info/>
    </div>
</template>

<script>
    import ReportingInfo from "@/views/admin/report/ReportingInfo";
    export default {
        name: "reportingManage",
        data(){
            return {

            }
        },
        components:{
            ReportingInfo,

        }
    }
</script>

<style scoped lang="less">
    .report-manage {
        background-color: #ffffff;
        margin: 12px;
        padding: 20px;
    }
</style>