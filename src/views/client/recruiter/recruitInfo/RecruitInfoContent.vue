<template>
    <div class="recruit-content">
        <el-table
                :data="tableData"
                style="width: 80%"
                stripe>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="职位名称"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="experience"
                    label="经验要求"
                    align="center">
            </el-table-column>
            <el-table-column
                prop="salary"
                label="薪资"
                align="center">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleView(scope.$index, scope.row)">
                        查看
                    </el-button>
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <recruit-info-detail :dialogVisible="dialogVisible" :data="data" @cancelEvent="cancelDialog"/>
    </div>
</template>

<script>
    import {mapActions,mapState} from "vuex";
    import RecruitInfoDetail from "./RecruitInfoDetail";
    export default {
        name: "RecruitInfoContent",
        data() {
            return {
                // tableData: [{
                //     date: '2016-05-02',
                //     name: 'ui设计',
                //     type: "计算机",
                //     express: '1年',
                //     money: "1k~2k"
                // }, {
                //     date: '2016-05-02',
                //     name: 'ui设计',
                //     type: "计算机",
                //     express: '1年',
                //     money: "1k~2k"
                // }, {
                //     date: '2016-05-02',
                //     name: 'ui设计',
                //     type: "计算机",
                //     express: '1年',
                //     money: "1k~2k"
                // }, {
                //     date: '2016-05-02',
                //     name: 'ui设计',
                //     type: "计算机",
                //     experience: '1年',
                //     salary: "1k~2k"
                // }],
                tableData:[],
                dialogVisible:false,
                data:{}
            }
        },
        created() {

                this.$store.dispatch('getPositionsByCriteriaAction',{
                    recruiterId:1,
                    page:1//页码从1开始
                }).then((data)=>{
                    //不能使用fill来填充对象,引用的都是同一个地址
                    // const arr = new Array(data.data.list.length).fill(null).map(()=>Object.create({
                    //     date: '',
                    //     name: '',
                    //     type: '',
                    //     experience: '',
                    //     salary:''}));
                    const arr = [];
                    data.data.list.forEach((item)=>{
                        var time = new Date(item.publishTime).toLocaleDateString().replace(/\/(\d+)/g,function(a,b){
                            return '-'+b.padStart(2,0)
                        })
                        arr.push({
                            id:item.id,
                            name:item.name,
                            date:time,
                            type:item.positionCategory.fatherPositionCategory.name,
                            experience:item.experience,
                            salary:item.salary,
                            address:item.address,
                            detail:item.detail,
                            education:item.education
                        })
                    })
                    this.tableData = arr;

                    //有关分页
                    this.eventBus.$emit('getRecruitInfo','data');
                });


        },
        computed:{
          ...mapState(['foundPositionPageInfos'])
        },
        methods: {
            ...mapActions(["removePosition"]),
            handleEdit(index, row) {
                console.log("编辑",index, row);
                this.$router.push({
                    path: "/recruiterIndex/editRecruitInfo",
                    query:{
                        data:row
                    }
                })
            },
            handleDelete(index, row) {
                //处理删除
                this.$confirm("确认删除该职位吗?","提示",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    //进行删除操作
                    // this.removePosition();

                }).catch(()=>{
                    this.$message({
                        type:"info",
                        message:"已取消删除"
                    })
                })
            },
            handleView(index, row) {
                this.dialogVisible = true;
                this.data = row;
                console.log("this.data",this.data);
            },
            //取消对话框
            cancelDialog(){
                this.dialogVisible=false;
            }
        },

        components:{
            RecruitInfoDetail
        }
    }
</script>

<style lang="less">
    .recruit-content {
        font-size: 26px;
        display:flex;
        padding: 0 30px;
        justify-content: center;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>