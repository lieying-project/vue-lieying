<template>
    <div class="company-manage">
        <search :bread-arr="breadArr"/>
        <el-divider/>
        <div>
            <company-info/>
        </div>
        <pagination/>
    </div>
</template>

<script>
    import Search from "../common/Search";
    import CompanyInfo from "@/views/admin/company/CompanyInfo";
    import Pagination from "../common/Pagination";
    export default {
        name: "CompanyManage",
        components: {CompanyInfo,Search,Pagination},
        data(){
          return {
              breadArr: [{
                  name:"首页",
                  path:"/admin"
              },{
                  name:"公司信息管理",
              },{
                  name:"待处理"
              }]
          }
        },
        methods:{
            getRoutes(){
                console.log(this.$route.matched);
            }
        }
    }
</script>

<style scoped lang="less">
    .company-manage {
        background-color: #ffffff;
        margin: 12px;
        padding: 20px;
    }

</style>