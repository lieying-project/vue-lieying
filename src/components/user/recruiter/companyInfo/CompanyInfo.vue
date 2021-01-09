<template>
    <div class="company-info">
        <fieldset class="company-info-fieldset">
            <legend>
                完善信息
            </legend>
            <div class="company-info-form">

                <el-form ref="form" :model="companyInfo" label-width="80px" :rules="rules">
                    <div class="form-item">
                        <div>
                            <el-form-item label="公司名称"
                                          :rules="[{ required: true, message: '公司名称不能为空', trigger: 'blur'}]"
                            >
                                <el-input v-model="companyInfo.name" placeholder="请输入公司名称" maxlength=40 show-word-limit></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="公司地址" :rules="[{ required: true, message: '公司地址不能为空', trigger: 'blur'}]">
                                <el-input v-model="companyInfo.address" placeholder="请输入公司地址" maxlength=40 show-word-limit ></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="form-item">
                        <div>
                            <el-form-item label="法人代表" >
                                <el-input v-model="companyInfo.representative" placeholder="请输入公司的法人代表" ></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="联系电话" :rules="[{ required: true, message: '联系电话不能为空', trigger: 'blur'}]">
                                <el-input v-model="companyInfo.phone" placeholder="请输入公司的联系电话"></el-input>
                            </el-form-item>
                        </div>
                    </div>

                    <div  class="form-item">
                        <el-form-item label="成立时间">
                            <el-date-picker
                                    v-model="companyInfo.established"
                                    type="date"
                                    placeholder="选择日期"
                            >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="注册资本"
                                      :rules="[{ type: 'number', message: '注册资本必须为数字值'}]"
                        >
                            <el-input type="number" v-model.number="companyInfo.registerCapital" placeholder="请输入公司的注册资本" min=0>
                                <template slot="append">元</template>
                            </el-input>
                        </el-form-item>
                    </div>

                    <div class="form-item">
                        <div>
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
                        </div>
                        <div>
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
                        </div>
                    </div>



<!--                    简介-->
                    <el-form-item label="简介">
                        <el-input type="textarea" v-model="companyInfo.intro" placeholder="请输入公司的相关简介" maxlength=1000 show-word-limit></el-input>
                    </el-form-item>

                    <el-form-item label="经营范围">
                        <el-input v-model="companyInfo.businessScope" placeholder="请输入公司的经营范围"></el-input>
                    </el-form-item>

<!--                    企业文化-->
                    <el-form-item label="企业文化">
                        <el-input type="textarea" v-model="companyInfo.culture" placeholder="请输入公司的企业文化" maxlength=3000 show-word-limit></el-input>
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
                            <img width="100%" :src="companyInfo.sign" alt="">
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
                    representative: '',
                    phone: '',
                    established: '',
                    registerCapital: '',
                    intro: '',
                    businessScope:'',
                    culture:'',
                    sign:'',
                    imageUrl:'',
                    license:''
                },
                rules:{},
                dialogImageUrl: '',
                dialogVisible: false,
                hideUpload:false,
                limitCount:1
            }
        },
        created(){

                //更新公司信息，参数可选
                this.$store.dispatch('updateCompanyAction',{
                    id:3,
                    industry:{
                        id:1
                    },
                    companyScale:{
                        id:1
                    },
                    financingStage:{
                        id:2
                    },
                    city:{
                        id:1
                    },
                    workTime:new Date(),
                    employeeWelfare:"福利",
                    businessScope:'经营范围1',
                    registerCapital:'3000万元',
                    established:new Date(),
                    representative:"张xx",
                    license:'营业执照路径',
                    sign:'公司标志路径',
                    culture:'公司文化',
                    intro:"公司介绍i",
                    phone:"11212222222",
                    address:'地址',
                    name:'公司名称'
                })

        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            // logo上传方法
            handleAvatarSuccess(res,file) {
                this.companyInfo.sign = URL.createObjectURL(file.raw);
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
        padding-left:40px;
    }

    .company-info {
        width: 90%;
        margin: 20px auto;
    }
    .hide .el-upload--picture-card {
        display: none;
    }
    .form-item {
        display: flex;
        &>div {
            width:48%
        }

    }
</style>