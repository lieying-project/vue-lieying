<template>
    <div class="pagination">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="80">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped lang="less">
    .pagination{
        padding-top: 20px;
        text-align: center;
    }
</style>