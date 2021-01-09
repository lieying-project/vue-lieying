<template>
    <div>
        <el-dialog
                title="招聘信息"
                :visible.sync="dialogVisible"
                width="45%"
                :before-close="changeDialogVisible"
        >
            <ul class="company-info">
                <li>
                    <label>发布时间：</label>
                    <el-input class="company-right" type="text" :readonly="true"  :value="data.date"/>
                </li>
                <li>
                    <label>职位名称:</label>
                    <el-input type="text" :readonly="true"  :value="data.name"/>
                </li>
                <li>
                    <label>类型:</label>
                    <el-input type="text" :readonly="true" :value="data.type"/>
                </li>
                <li>
                    <label>地点:</label>
                    <el-input type="text" :readonly="true" :value="data.address || '--'"/>
                </li>
                <li>
                    <label>经验要求:</label>
                    <el-input type="text" :readonly="true" :value="data.experience"/>
                </li>
                <li>
                    <label>学历要求:</label>
                    <el-input  type="text" :readonly="true" :value="data.education"/>
                </li>
                <li>
                    <label>待遇:</label>
                    <el-input type="text" :readonly="true" :value="data.salary"/>
                </li>
                <li>
                    <label>详情:</label>
                    <el-input type="textarea" :readonly="true" autosize :value="data.detail || '--'"/>
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
            },
            data:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
         show(){
             return this.dialogVisible;
         }
        },
        data(){
            return {

            }

        },
        methods: {
            changeDialogVisible() {
                console.log("对话框点击前");
               this.$emit('cancelEvent');
            }

        }
    }
</script>

<style scoped lang="less">
    .company-info{
        list-style: none;
        font-size: 16rem /@font-size;

        li{
            padding: 10px;
            border-bottom: 1px solid #F6F6F8;
            display: flex;
        }
    }
    //补充说明
    .company-intr{
        display:flex;
        justify-content: flex-start;
        width: 80%;
        label{
            width: 220px;
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