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
                    prop="express"
                    label="经验要求"
                    align="center">
            </el-table-column>
            <el-table-column
                prop="money"
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
        <recruit-info-detail :dialogVisible="dialogVisible" @cancelEvent="cancelDialog"/>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
    import RecruitInfoDetail from "./RecruitInfoDetail";
    export default {
        name: "RecruitInfoContent",
        methods: {
            ...mapActions(["removePosition"]),
            handleEdit(index, row) {
                console.log(index, row);
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
                this.dialogVisible = true
            },
            //取消对话框
            cancelDialog(bool){
                this.dialogVisible=bool;
            }
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: 'ui设计',
                    type: "计算机",
                    express: '1年',
                    money: "1k~2k"
                }, {
                    date: '2016-05-02',
                    name: 'ui设计',
                    type: "计算机",
                    express: '1年',
                    money: "1k~2k"
                }, {
                    date: '2016-05-02',
                    name: 'ui设计',
                    type: "计算机",
                    express: '1年',
                    money: "1k~2k"
                }, {
                    date: '2016-05-02',
                    name: 'ui设计',
                    type: "计算机",
                    express: '1年',
                    money: "1k~2k"
                }],
                dialogVisible:false
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