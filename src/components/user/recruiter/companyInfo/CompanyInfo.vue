<template>
    <div class="company-info" v-if="companyInfo">
        <fieldset class="company-info-fieldset">
            <legend>
                完善信息
            </legend>
            <div class="company-info-form">

                <el-form ref="form" :model="companyInfo" label-width="80px" :rules="rules">
                    <div class="form-item">
                        <div>
                            <el-form-item label="公司名称"
                                          prop="name"

                            >
                                <el-input v-model="companyInfo.name" placeholder="请输入公司名称" maxlength=40 show-word-limit></el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="公司地址" prop="address">
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
                            <el-form-item label="联系电话" prop="phone">
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
                        <el-form-item label="注册资本">
                            <el-input  v-model="companyInfo.registerCapital" placeholder="请输入公司的注册资本"></el-input>
                        </el-form-item>
                    </div>

                    <div  class="form-item">
                        <el-form-item label="行业" v-if="companyInfo.industry">
                            <el-select v-model="companyInfo.industry.id" placeholder="请选择">
                                <el-option
                                        v-for="item in industries"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
<!--                            <el-input v-model="companyInfo.industry.name" placeholder="请选择行业"></el-input>-->
                        </el-form-item>

                        <el-form-item label="融资阶段" v-if="companyInfo.financingStage">
                            <el-select v-model="companyInfo.financingStage.id" placeholder="请选择">
                                <el-option
                                        v-for="item in financingStages"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="form-item">

                        <!--                    标志-->
<!--                        <el-form-item label="标志">-->
<!--                            <el-upload-->
<!--                                    action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                                    list-type="picture-card"-->
<!--                                    :on-preview="handlePictureCardPreview"-->
<!--                                    :on-remove="handleRemove"-->
<!--                                    :class="{hide:hideUpload}"-->
<!--                            >-->
<!--                                <i class="el-icon-plus"></i>-->
<!--                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--                            </el-upload>-->
<!--                            <el-dialog :visible.sync="dialogVisible">-->
<!--                                <img width="100%" :src="companyInfo.sign" alt="">-->
<!--                            </el-dialog>-->
<!--                        </el-form-item>-->



                            <el-form-item label="标志"
                                          ref="uploadElement">
                                <img class="sign-img" :src="companyInfo.sign"/>
                                <el-upload ref="upload"
                                           action="#"
                                           accept="image/png,image/gif,image/jpg,image/jpeg"
                                           list-type="picture-card"
                                           :limit='1'
                                           :auto-upload="false"
                                           :on-exceed="handleExceed"
                                           :before-upload="handleBeforeUpload"
                                           :on-preview="handlePictureCardPreview"
                                           :on-remove="handleRemove"
                                           :on-change="imgChange">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%"
                                         :src="dialogImageUrl"
                                         alt="">
                                </el-dialog>
                                <div class="upload-btn">
                                    <el-button size="small"
                                               type="primary"
                                               @click="uploadFile">立即上传</el-button>
                                </div>
                            </el-form-item>


                        <el-form-item label="公司规模" v-if="companyInfo.companyScale">
                            <el-select v-model="companyInfo.companyScale.id" placeholder="请选择">
                                <el-option
                                        v-for="item in companyScales"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </div>

<!--                     员工福利-->
                    <el-form-item label="员工福利">
                        <el-input type="textarea" v-model="companyInfo.employeeWelfare" placeholder="请输入公司相关的员工福利" maxlength=1000 show-word-limit></el-input>
                    </el-form-item>
<!--                    简介-->
                    <el-form-item label="简介">
                        <el-input type="textarea" v-model="companyInfo.intro" placeholder="请输入公司的相关简介" :autosize="{ minRows: 8, maxRows: 80}"></el-input>
                    </el-form-item>

                    <el-form-item label="经营范围">
                        <el-input v-model="companyInfo.businessScope" placeholder="请输入公司的经营范围"></el-input>
                    </el-form-item>

<!--                    企业文化-->
                    <el-form-item label="企业文化">
                        <el-input type="textarea" v-model="companyInfo.culture" placeholder="请输入公司的企业文化" :autosize="{ minRows: 8, maxRows: 80}" maxlength=3000 show-word-limit></el-input>
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
    import axios from 'axios';
    import {mapState,mapActions} from 'vuex';
    export default {
        name: "CompanyInfo",
        data() {
            var checkPhone = (rule, value, callback) => {
                var regExp=/^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;

                if (value === '') {
                    callback(new Error('手机号不能为空'));
                }
                if (regExp.test(value)) {
                    callback()
                } else {
                    callback(new Error('格式错误'));
                }
            };
            return {
                companyInfo: {
                    id:'',
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
                },
                industries:[],
                financingStages:[],
                companyScales:[],
                rules: {
                    name:[
                        { required: true, message: '公司名称不能为空', trigger: 'blur'}
                    ],
                    address:[
                        { required: true, message: '公司地址不能为空', trigger: 'blur'}
                    ],
                    phone: [
                        { validator: checkPhone, trigger: 'blur' }
                    ]
                },
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                dialogImageUrl: '',
                dialogVisible: false,
                hideUpload:false,
                limitCount:1
            }
        },
        computed:{
          ...mapState(['recruiter'])

        },
        created(){
            this.getAllIndustriesAction().then((data)=>{
                console.log('industry',data);
                this.industries = data.data;
            });
            this.getAllFinancingStagesAction().then((data)=>{
                console.log('financingStage',data);
                this.financingStages = data.data;
            });
            this.getCompanyScalesAction().then((data)=>{
                console.log('companyScale',data);
                this.companyScales = data.data;
            })
            if(this.recruiter!==null&&this.recruiter!==undefined&&Object.keys(this.recruiter).length!==0) {
                console.log(1);
                console.log(this.recruiter);
                this.companyInfo = this.recruiter.company;
            } else {
                localStorage.setItem('jobHunterId',1);
                this.$store.dispatch('getRecruiterAction').then((data)=>{
                    console.log('data',data);
                    this.companyInfo = data.data.company;
                    this.fileList = this.companyInfo.companyPictures.map(item=>{
                        return { name:item.name,url:item.path};
                    })
                })
            }

                //更新公司信息，参数可选
                // this.$store.dispatch('updateCompanyAction',{
                //     id:3,
                //     industry:{
                //         id:1
                //     },
                //     companyScale:{
                //         id:1
                //     },
                //     financingStage:{
                //         id:2
                //     },
                //     city:{
                //         id:1
                //     },
                //     workTime:new Date(),
                //     employeeWelfare:"福利",
                //     businessScope:'经营范围1',
                //     registerCapital:'3000万元',
                //     established:new Date(),
                //     representative:"张xx",
                //     license:'营业执照路径',
                //     sign:'公司标志路径',
                //     culture:'公司文化',
                //     intro:"公司介绍i",
                //     phone:"11212222222",
                //     address:'地址',
                //     name:'公司名称'
                // })

        },
        methods: {
            ...mapActions(['getAllIndustriesAction','getAllFinancingStagesAction','getCompanyScalesAction']),
            onSubmit() {
                console.log('submit!');
                this.$store.dispatch('updateCompanyAction',{
                    ...this.companyInfo,
                        industry:{
                            id:this.companyInfo.industry.id
                        },
                        companyScale:{
                            id:this.companyInfo.companyScale.id
                        },
                        financingStage:{
                            id:this.companyInfo.financingStage.id
                        },

                }).then(()=>{
                    this.$message({
                        type: 'success',
                        message: '编辑成功'
                    })
                }).catch(()=>{
                    this.$message({
                        type: 'error',
                        message: '编辑失败'
                    })
                })

            },

            // logo上传方法
            // 上传文件之前的钩子
            handleBeforeUpload (file) {
                console.log('beforeUpload-----------------------------000');
                if (!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
                    this.$notify.warning({
                        title: '警告',
                        message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
                    })
                }
                let size = file.size / 1024 / 1024 / 2
                if (size > 2) {
                    this.$notify.warning({
                        title: '警告',
                        message: '图片大小必须小于2M'
                    })
                }
                let fd = new FormData();//通过form数据格式来传
                fd.append("file", file); //传文件
                console.log(fd.get('picFile'));
                axios({
                    url: "/api/file/upload",
                    method: "post",
                    data: fd,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((data) => {
                    console.log('请求',data);
                    this.companyInfo.sign = data.data;

                })
            },
            // 文件超出个数限制时的钩子
            handleExceed (files, fileList) {

            },
            // 文件列表移除文件时的钩子
            handleRemove (file, fileList) {
                this.hideUpload = fileList.length >= this.limitNum;

            },
            // 点击文件列表中已上传的文件时的钩子
            handlePictureCardPreview (file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadFile () {
                console.log("111")
                this.$refs.upload.submit()
                console.log("222")
            },
            imgChange (files, fileList) {
                this.hideUpload = fileList.length >= this.limitNum;
                if (fileList) {
                    this.$refs.uploadElement.clearValidate();
                }
            },



            handleBeforeUpload1 (file) {
                console.log('beforeUpload-----------------------------000');
                if (!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
                    this.$notify.warning({
                        title: '警告',
                        message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
                    })
                }
                let size = file.size / 1024 / 1024 / 2
                if (size > 2) {
                    this.$notify.warning({
                        title: '警告',
                        message: '图片大小必须小于2M'
                    })
                }
                let fd = new FormData();//通过form数据格式来传
                fd.append("file", file); //传文件
                console.log(fd.get('picFile'));
                axios({
                    url: "/api/file/upload",
                    method: "post",
                    data: fd,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((data) => {
                    console.log('请求',data);

                    this.fileList.splice(this.fileList.length-1,0,data);

                })
            },
            handleExceed1 (files, fileList) {

            },
            // 文件列表移除文件时的钩子
            handleRemove1 (file, fileList) {
                this.hideUpload = fileList.length >= 1;

            },
            // 点击文件列表中已上传的文件时的钩子
            handlePictureCardPreview1 (file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadFile1 () {
                console.log("111")
                this.$refs.upload1.submit()
                console.log("222")
            },
            imgChange1 (files, fileList) {
                this.hideUpload = fileList.length >= 1;
                if (fileList) {
                    this.$refs.uploadElement1.clearValidate();
                }
            },


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
            padding-bottom: 8px;
            width:48%
        }
    }
    .upload-btn{
        padding-top: 10px;
    }
    .sign-img {
        width: 100px;
        height:100px;
    }
</style>