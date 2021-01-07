<template>
    <div class="dispatcher-info">
        <dispatcher-header/>
        <dispatcher-content/>
        <el-divider/>
        <pagination/>
    </div>
</template>

<script>
    import DispatcherHeader from "@/views/client/recruiter/dispatcherInfo/DispatcherHeader";
    import DispatcherContent from "@/views/client/recruiter/dispatcherInfo/DispatcherContent";
    import Pagination from "../../../admin/common/Pagination";
    export default {
        name: "DispatcherInfo",
        components: {DispatcherHeader,DispatcherContent,Pagination}
    }
</script>

<style scoped>
    .dispatcher-info {
        background-color: #ffffff;
        margin: 20px;
    }
</style>