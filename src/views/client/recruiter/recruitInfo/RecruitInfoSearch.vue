<template>
    <div>
        <div class="search-container">
            <div class="search-date">
                <div class="date-deal">
                    <el-input
                            v-model="date"
                    >
                        <template slot="prepend">日期</template>
                        <i slot="prefix" class="el-input__icon el-icon-date"></i>
                    </el-input>
                    <el-date-picker
                            v-model="date"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            class="date-choice"
                    >
                    </el-date-picker>
                </div>
            </div>

            <div class="search-position">
                <el-input
                        placeholder="请输入职位名称"
                        v-model="position"
                >
                    <template slot="prepend">职位名称</template>
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div class="search-btn">
                <el-button type="primary" @click="search">搜素</el-button>
            </div>
            <div class="add-btn">
                <el-button type="primary" @click="addPosition">添加职位</el-button>
            </div>
        </div>
        <el-divider class="divider"/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "RecruitInfoSearch",
        data() {
            return {
                date: "",
                position: ""
            }
        },
        methods:{
            ...mapActions(['getPositionsByCriteriaAction']),
            addPosition() {
                this.$router.push({
                    path:"/recruiterIndex/addRecruitInfo"
                })
                // console.log("addPosition的router",this.$router);
            },
            //对于搜索需要进行判断的是,date和position同时存在的话是或查询还是与查询
            search() {

            }
        }
    }
</script>

<style scoped lang="less">
    .search-container {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 200px/ @font-size;
        margin-top: 20px;
        margin-bottom: 40px;
        .search-date,.search-position {
            margin-left: 40px;
            input {
                height: 40px;
                color: red;
            }
        }

        .add-btn {
           margin-left: 40px;
        }

        .search-btn {
            margin-left: 40px;
        }

    }
    .date-deal {
        display: flex;
    }
    .date-choice {
        opacity: 0;
        position: absolute;

        /*display: none;*/
    }
</style>