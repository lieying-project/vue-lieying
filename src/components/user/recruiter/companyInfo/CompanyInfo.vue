<template>
    <div class="company-info">
        <fieldset class="company-info-fieldset">
            <legend>
                完善信息
            </legend>
            <div class="company-info-form">
                <el-form ref="form" :model="companyInfo" label-width="80px">
                    <el-form-item label="公司名称" required>
                        <el-input v-model="companyInfo.name" placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" required>
                        <el-input v-model="companyInfo.address" placeholder="请输入公司地址"></el-input>
                    </el-form-item>
                    <el-form-item label="法人代表" required>
                        <el-input v-model="companyInfo.person" placeholder="请输入公司的法人代表"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" required>
                        <el-input v-model="companyInfo.phone" placeholder="请输入公司的联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="成立时间">
                        <el-date-picker
                                v-model="companyInfo.time"
                                type="date"
                                placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="注册资本">
                        <el-input v-model="companyInfo.money" placeholder="请输入公司的注册资本">
                            <template slot="append">元</template>
                        </el-input>
                    </el-form-item>

<!--                    标志-->
                    <el-form-item label="标志">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :class="{hide:hideUpload}"
                        >
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>

<!--                    营业执照-->
                    <el-form-item label="营业执照" required>
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>

<!--                    简介-->
                    <el-form-item label="简介">
                        <el-input type="textarea" v-model="companyInfo.desc" placeholder="请输入公司的相关简介"></el-input>
                    </el-form-item>

                    <el-form-item label="经营范围">
                        <el-input v-model="companyInfo.range" placeholder="请输入公司的经营范围"></el-input>
                    </el-form-item>

<!--                    企业文化-->
                    <el-form-item label="企业文化">
                        <el-input type="textarea" v-model="companyInfo.liter" placeholder="请输入公司的企业文化"></el-input>
                    </el-form-item>

<!--                    公司环境上传照片-->
                    <el-form-item label="公司环境">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :on-success="handlePicSuccess"
                                :on-change="handlePicChange"
                                multiple
                        >
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
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "CompanyInfo",
        data() {
            return {
                companyInfo: {
                    name: '',
                    address: '',
                    person: '',
                    phone: '',
                    time: '',
                    money: '',
                    desc: '',
                    range:'',
                    liter:'',
                    imageUrl:''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                hideUpload:false,
                limitCount:1
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            // logo上传方法
            handleAvatarSuccess(res,file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if(!isJPG) {
                    this.$message.error("上传头像图片只能是jpg格式");
                }

                if(!isLt2M) {
                    this.$message.error("上传头像图片大小不能超过2MB");
                }

                return isJPG && isLt2M;
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
<style lang="less">
    .company-info-fieldset {
        margin: 0;
        border: 1px solid #e6e6e6;
        padding: 10px 20px 5px 20px;
        color: #6b6b6b;
        background-color: #ffffff;
    }

    .company-info-form {
        padding-top: 20px;
        width: 75%;
    }

    .company-info {
        width: 90%;
        margin: 20px auto;
    }
    .hide .el-upload--picture-card {
        display: none;
    }
</style>