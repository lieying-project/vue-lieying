<template>
    <div>
        <el-divider content-position="center"><span class="recommend">职位推荐</span></el-divider>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#ffffff"
            text-color="#8d92a1"
            active-text-color="#5dd5c8">
            <el-menu-item index="1">推荐职位</el-menu-item>
            <el-menu-item index="2">最新职位</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "PositionReco",
        data(){
            return {
                activeIndex:"1"
            }
        },
        methods:{
            handleSelect(){
                console.log(arguments);
            }
        }
    }
</script>

<style scoped>
    .el-divider__text{
        color:#414a60;
        font-size: 24px;
        background-color: #F6F6F8;
    }
</style>
