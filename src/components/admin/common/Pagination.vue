<template>
    <div class="pagination">
        <el-pagination
                background
                layout="prev,pager,next"
                :total="totalNum"
                @current-change="getnextPageData">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:['totalNum'],
        methods: {
            getnextPageData(pageNow) {
                console.log('page',pageNow);
                this.$emit('changePage',pageNow);
            }
        }
    }
</script>

<style scoped lang="less">
    .pagination{
        padding: 20px 0;
        text-align: center;
    }
</style>