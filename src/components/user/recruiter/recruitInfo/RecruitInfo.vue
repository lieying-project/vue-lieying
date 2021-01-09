<template>
    <div>
        <div class="recruit-info">
            <recruit-info-search @search="search"></recruit-info-search>
            <recruit-info-content :tableData="tableData"></recruit-info-content>
            <el-divider/>
            <pagination :totalNum="totalNum" @changePage="changePage"/>
        </div>
    </div>
</template>

<script>
    import RecruitInfoContent from "@/views/client/recruiter/recruitInfo/RecruitInfoContent";
    import RecruitInfoSearch from "@/views/client/recruiter/recruitInfo/RecruitInfoSearch";
    import Pagination from "../../../admin/common/Pagination";
    import {mapState} from "vuex";
    export default {
        name: "RecruitInfo",
        data() {
          return {
              tableData:[],
              totalNum:0,
              searchInfo:{},
              page:1
          }
        },
        created() {
            if(this.foundPositionPageInfos === undefined||this.foundPositionPageInfos===null || this.foundPositionPageInfos===""){this.getPositionInfo();}
            else if(Object.keys(this.foundPositionPageInfos)===0);
            else this.getInfo(this.foundPositionPageInfos.data);
        },
        computed:{
          ...mapState(['foundPositionPageInfos'])
        },
        methods:{
            search(data) {
             console.log('search',data);
             if(data.position==''&& data.position=='') {
                 this.searchInfo={};
             }
             else {
                 this.searchInfo = {
                     keyword:data.position
                 };
             }
             this.getPositionInfo();
            },
            getPositionInfo() {
                this.$store.dispatch('getPositionsByCriteriaAction',{
                    recruiterId:1,
                    page:this.page,//页码从1开始
                    ...this.searchInfo
                }).then((data)=> {

                    this.getInfo(data.data);

                })
            },
            getInfo(data) {
                const arr = [];
                data.list.forEach((item) => {
                    console.log("item",item.name);
                    var time = new Date(item.publishTime).toLocaleDateString().replace(/\/(\d+)/g, function (a, b) {
                        return '-' + b.padStart(2, 0)
                    })
                    arr.push({
                        id: item.id,
                        name: item.name||'--',
                        date: time||'--',
                        type: item.positionCategory?(item.positionCategory.fatherPositionCategory?item.positionCategory.fatherPositionCategory.name :item.positionCategory.name||'--'):'--',
                        experience: item.experience||'--',
                        salary: item.salary||'--',
                        address: item.address||'--',
                        detail: item.detail||'--',
                        education: item.education?item.education:'--'
                    })
                })

                this.tableData = arr;
                this.totalNum = data.pages*10;
            },
            changePage(pageNum) {
                this.page = pageNum;
                this.getPositionInfo();
            }
        },
        components: {
            RecruitInfoSearch,
            RecruitInfoContent,
            Pagination
        }
    }
</script>

<style scoped lang="less">
    .recruit-info {
        background-color: #fff;
        margin: 20px;
    }
</style>