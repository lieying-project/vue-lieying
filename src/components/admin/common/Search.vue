<template>
    <div class="header">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb" v-if="breadArr.length">
            <el-breadcrumb-item v-for="item in breadArr">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!--            <button @click="getRoutes">点击</button>-->
        <div class="search">
            <el-input placeholder="请输入内容" v-model="searchInfo" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        props:{
          breadArr:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        data(){
            return {
                searchInfo:""
            }
        }
    }
</script>

<style scoped lang="less">
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
    .header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .search{
            /*font-size: 20px;*/
            font-size:20rem /@font-size;
            padding-left: 400px;
        }
    }

</style>