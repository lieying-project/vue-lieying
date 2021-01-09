<template>
    <div class="person-info" v-if="this.personForm">
        <fieldset class="person-info-fieldset">
            <legend>
                完善信息
            </legend>
            <div class="person-center">
                <el-form label-width="80px" :model="personForm">
                    <el-form-item label="头像" required>
                        <div>
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </div>
                    </el-form-item>
                    <el-form-item label="账号" required>
                        <el-input
                                v-model="personForm.username"
                                prefix-icon="el-icon-postcard"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" required>
                        <el-input
                                v-model="personForm.name"
                                prefix-icon="el-icon-user"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="职位" required>
                        <el-input
                                v-model="personForm.position"
                                prefix-icon="el-icon-s-cooperation"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" required>
                        <el-input
                                v-model="personForm.phone"
                                prefix-icon="el-icon-phone-outline">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="个人介绍" required>
                        <el-input
                                v-model="personForm.intro"
                                type="textarea"
                                autosize>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="savePersonInfo">保存</el-button>
                        <el-button @click="resetForm('personForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </fieldset>
    </div>

</template>


<script>
    import {mapState} from 'vuex';
    export default {
        name:'PersonInfo',
        data() {
            return {
                personForm: {
                    username:'',
                    name: '',
                    position: '',
                    phone: '',
                    intro:''
                }
            };
        },
        created() {
            if(this.recruiter!==null&&this.recruiter!==undefined&&Object.keys(this.recruiter).length!==0) {
                console.log(1);
                this.personForm = this.recruiter;
            } else {
                console.log(2);
                localStorage.setItem('jobHunterId',1);
                this.$store.dispatch('getRecruiterAction').then((data)=>{
                    console.log('data',data);
                    this.personForm = data.data;
                })
            }
            console.log('招聘者信息',this.personForm);

        },
        computed:{
            ...mapState(['recruiter'])
        },
        methods:{
            savePersonInfo() {

                this.$emit('savePersonInfo',this.personForm);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    .person-info {
        background-color: #ffffff;
    }
    .person-info-fieldset {
        margin: 20px auto;
        width:40%;
        border: 1px solid #e6e6e6;
        padding: 10px 20px 5px 20px;
        color: #6b6b6b;
        height: 800px;
    }

    .person-center {
        width: 60%;
        margin: 80px auto;
    }
</style>