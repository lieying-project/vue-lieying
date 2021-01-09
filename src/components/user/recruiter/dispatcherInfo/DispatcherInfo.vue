<template>
    <div class="dispatcher-info">
        <dispatcher-header/>
        <dispatcher-content :tableData="tableData"/>
        <el-divider/>
        <pagination :totalNum="2"/>
    </div>
</template>

<script>
    import DispatcherHeader from "@/views/client/recruiter/dispatcherInfo/DispatcherHeader";
    import DispatcherContent from "@/views/client/recruiter/dispatcherInfo/DispatcherContent";
    import Pagination from "../../../admin/common/Pagination";
    import {mapState} from "vuex";

    export default {
        name: "DispatcherInfo",
        data(){
            return {
                tableData:[],
                position:'',
                page:1,
                searchInfo:{}
            }
        },
        created() {
            console.log('found',this.foundPositionPageInfos);
            if(this.foundPositionPageInfos==="") {
                this.getDispatcherInfo();
            } else {
                const initData = this.foundPositionPageInfos.data.list;

                initData.forEach((item)=>{
                    if(item.resumes&&item.resumes.length!==0) {
                        var arr = item.resumes.map(item1=>{
                            item1.position = item.name;
                            return item1;
                        });

                       this.tableData =  this.tableData.concat(arr);
                    }
                })

                //清洗数据
                this.tableData = this.tableData.map((item)=>{
                    var time = new Date(item.createdTime).toLocaleDateString().replace(/\/(\d+)/g, function (a, b) {
                        return '-' + b.padStart(2, 0)
                    })
                    return {id:item.id,date:time,position:item.position,education:item.jobHunter?item.jobHunter.education:"--",name:item.jobHunter?item.jobHunter.name:'--'}
                })
            }

        },
        computed:{
           ...mapState(['foundPositionPageInfos'])
        },
        methods:{
            getDispatcherInfo() {
                this.$store.dispatch('getPositionsByCriteriaAction',{
                    recruiterId:1,
                    page:this.page,//页码从1开始
                    ...this.searchInfo
                }).then((data)=> {
                    const initData = data.data.list;
                    initData.forEach((item)=>{
                        console.log(item.resumes)
                        if(!item.resumes&&item.resumes.length!==0) {
                            var arr = item.resumes.map(item1=>{
                                item1.position = item.name;
                                return item1;
                            });
                            this.tableData.concat(arr);
                        }
                    })
                })
            }
        },
        components: {DispatcherHeader,DispatcherContent,Pagination}
    }
</script>

<style scoped>
    .dispatcher-info {
        background-color: #ffffff;
        margin: 20px;
    }
</style>