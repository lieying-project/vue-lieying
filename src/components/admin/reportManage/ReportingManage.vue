<template>
    <div>
        <search :bread-arr="breadArr"/>
        <el-divider/>
        <reporting-info/>
        <pagination/>
    </div>
</template>

<script>
    import ReportingInfo from "@/views/admin/report/ReportingInfo";
    import Search from "../common/Search";
    import Pagination from "../common/Pagination";
    export default {
        name: "reportingManage",
        data(){
            return {
                breadArr: [{
                    name:"首页",
                    path:"/admin"
                },{
                    name:"举报信息管理",
                },{
                    name:"待处理"
                }]
            }
        },
        components:{
            ReportingInfo,
            Search,
            Pagination
        }
    }
</script>

<style scoped lang="less">

</style>