<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="60%"
                :before-close="handleClose">
            <div>
                <ul class="report-info">
                    <li>
                        <label class="report-left">举报时间:</label>
                        <time class="report-right">2016-05-02</time>
                    </li>
                    <li>
                        <label class="report-left">举报公司名称:</label>
                        <span class="report-right">我是公司的名称</span>
                    </li>
                    <li>
                        <label  class="report-left">举报职位名称:</label>
                        <span>我是职位</span>
                    </li>
                    <li>
                        <label class="report-left">举报原因:</label>
                        <span>暴力</span>
                    </li>
                    <li class="report-intr">
                        <label class="report-left">补充说明:</label>
                        <el-input type="textarea"/>
                    </li>
                    <li>
                        <label class="report-left">证据截图:</label>
<!--                        <img src=""/>-->
                        <el-image
                                class="report-img"
                                style="width: 100px; height: 100px"
                                :src="url"
                                :preview-src-list="srcList">
                        </el-image>
                    </li>
                </ul>
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" @click="">驳 回</el-button>
                    <el-button type="primary" @click="">通 过</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ReportingInfoDetail",
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
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ]
            }

        },
        methods: {
            //点击取消
            closeDialog(){
                this.$emit("cancelEvent",false);
            },
            handleClose() {
                this.$confirm('确认关闭？')
                    .then(() => {
                        console.log("执行关闭");
                        this.$emit("cancelEvent",false)
                    })
                    .catch(() => {});
            }
        }
    }
</script>

<style scoped lang="less">
    .report-info{
        list-style: none;
        font-size: 16rem /@font-size;
        li{
            padding: 30px;
        }
    }
    //补充说明
    .report-intr{
        display:flex;
        justify-content: flex-start;
        width: 80%;
        label{
            width: 280px;
        }
    }
    //截图
    .report-img{
        vertical-align: middle;
    }
    label{
        display: inline-block;
        width: 200px;
    }

</style>