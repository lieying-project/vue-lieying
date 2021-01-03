<template>
    <div class="source-manage">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="文件类型">
                <el-select v-model="form.type" placeholder="请选择文件类型">
                    <el-option label="类型一" value="shanghai"></el-option>
                    <el-option label="类型二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文件名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                        accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.zip,.rar"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传pdf/ppt文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item label="文件封面">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "SourceManage",
        data() {
            return {
                form:{
                    type:"",
                    name:""
                },
                imageUrl: ''
            };
        },
        methods: {
            //处理上传图片
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //处理上传文件
            uploadFile(){
                this.$refs.uploadInput.click();//触发上传文件
            }
        }
    }
</script>

<style scoped lang="less">
    .source-manage{
        width:80%;
        border: 1px solid #d9d9d9;
        margin: 0px auto;
        display: flex;
        padding-top: 30px;
    }


    /deep/ .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>