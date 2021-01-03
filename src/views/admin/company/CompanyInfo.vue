<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="公司名称"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="公司地址">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="联系电话">
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
        <company-info-detail :dialogVisible="dialogVisible" @cancelEvent="cancelDialog"/>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
    import CompanyInfoDetail from "./CompanyInfoDetail";
    export default {
        name:"companyInfo",
        components: {CompanyInfoDetail},
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:"17616152324"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    phone:"17616152324"
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    phone:"17616152324"
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone:"17616152324"
                }],
                //控制对话框显示
                dialogVisible: false
            }
        },
        created() {
            // this.getCompanyInfoByStatus("status");
        },
        methods:{
            ...mapActions['getCompanyInfoByStatus'],//将vuex里的getCompanyInfoByStatus映射为this.getCompanyInfoByStatus
            handleClick(row) {
                this.dialogVisible = true
                console.log(row);
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