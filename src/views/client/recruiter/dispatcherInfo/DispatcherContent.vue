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
                    prop="position"
                    label="职位"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180"
                    align="center">
            </el-table-column>

            <el-table-column
                    prop="educa"
                    label="学历"
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
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    // import {mapActions} from "vuex";
    export default {
        name: "DispatcherContent",
        methods: {
            handleView(index, row) {
                console.log(index, row);
                this.$router.push({
                    path:"/recruiterIndex/dispatcherInfoDetail",
                    query:{

                    }
                })
            }

        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    position: 'ui设计',
                    name: "计算机",
                    educa: '1年'
                }, {
                    date: '2016-05-02',
                    position: 'ui设计',
                    name: "计算机",
                    educa: '1年'
                }, {
                    date: '2016-05-02',
                    position: 'ui设计',
                    name: "计算机",
                    educa: '1年'
                }, {
                    date: '2016-05-02',
                    position: 'ui设计',
                    name: "计算机",
                    educa: '1年'
                }]
            }
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