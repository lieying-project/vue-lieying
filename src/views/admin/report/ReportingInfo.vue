<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="举报公司名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="position"
                    label="举报职位名称"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="reason"
                    label="举报原因"
                    width="140">
            </el-table-column>
            <el-table-column
                    prop="detail"
                    label="补充说明">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
                </template>
            </el-table-column>
        </el-table>
        <reporting-info-detail :dialogVisible="dialogVisible" @cancelEvent="cancelDialog" :data="data"/>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
    import ReportingInfoDetail from "./ReportingInfoDetail";
    export default {
        name: "ReportingInfo",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name:"",
                    position:"我是公司的职位",
                    reason: '王小虎',
                    detail: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name:"我是公司的名称",
                    position:"我是公司的职位",
                    reason: '王小虎',
                    detail: '上海市普陀区金沙江路 1517 弄',
                }],
                //控制对话框显示
                dialogVisible: false,
                data:{}
            }
        },
        created() {
            this.getJobHunterReportsByCriteriaAction().then((data)=>{
                //清洗数据
                console.log(data);
                this.tableData = data.data.map((item)=>{
                    var time = new Date(item.createdTime).toLocaleDateString().replace(/\/(\d+)/g, function (a, b) {
                        return '-' + b.padStart(2, 0)
                    })
                    return {id:item.id,date:time,name:item.position.name,position:item.position.name,reason:item.reason,detail:item.footnote}
                })
            })
        },
        components:{
            ReportingInfoDetail
        },
        methods:{
            ...mapActions(['getJobHunterReportsByCriteriaAction']),
            handleClick(row) {
                console.log(row);
                this.data = row;
                this.dialogVisible = true
            },
            //取消对话框
            cancelDialog(bool){
                this.dialogVisible=bool;
            }
        }
    }
</script>

<style scoped>

</style>