<template>
    <div>
        <el-dialog
                title="招聘信息"
                :visible.sync="dialogVisible"
                width="70%"
                :show-close="true"
        >
            <ul class="company-info">
                <li>
                    <label class="company-left">发布时间：</label>
                    <time class="company-right">2016-05-02</time>
                </li>
                <li>
                    <label class="company-left">职位名称:</label>
                    <span class="company-right">我是公司的名称</span>
                </li>
                <li>
                    <label class="company-left">类型:</label>
                    <span class="company-right">职位类型</span>
                </li>
                <li>
                    <label  class="company-left">地点:</label>
                    <span>我是公司地址</span>
                </li>
                <li>
                    <label  class="company-left">经验要求:</label>
                    <span>经验要求</span>
                </li>
                <li>
                    <label  class="company-left">工作制:</label>
                    <span>工作制</span>
                </li>
                <li>
                    <label  class="company-left">待遇:</label>
                    <span>我是待遇</span>
                </li>
                <li>
                    <label  class="company-left">详情:</label>
                    <span>我是招聘信息详情</span>
                </li>
            </ul>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "recruitInfoDetail",
        props:{
            dialogVisible:{
                type:Boolean,
                default(){
                    return false;
                }
            }
        },
        data(){
            return {

            }

        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .company-info{
        list-style: none;
        font-size: 16rem /@font-size;

        li{
            padding: 30px;
            border-bottom: 1px solid #F6F6F8;
        }
    }
    //补充说明
    .company-intr{
        display:flex;
        justify-content: flex-start;
        width: 80%;
        label{
            width: 280px;
        }
    }
    //截图
    .company-img{
        vertical-align: middle;
    }
    label{
        display: inline-block;
        width: 200px;
        font-weight:bold;
    }
</style>