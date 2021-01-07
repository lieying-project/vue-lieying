<template>
    <div class="company-certify">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>

            <el-form-item label="营业执照">
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :on-success="handlePicSuccess"
                        :on-change="handlePicChange">
                    <i class="el-icon-plus"></i>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "CompanyCertify",
        data() {
            return {
                form: {
                    name: '',
                    address: '',
                    phone: '',
                },
                dialogImageUrl: '',
                dialogVisible: false,
                hideUpload:false,
            }
        },
        methods:{
            onSubmit() {
              this.$emit('saveCompanyInfo',this.form);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.hideUpload = fileList.length >= this.limitCount;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handlePicSuccess() {
                console.log("上传成功");
                this.bool = false;
            },
            handlePicChange(file,fileList) {
                this.hideUpload = fileList.length >= this.limitCount;
            }
        }
    }
</script>

<style scoped>

</style>