<template>
    <div class="person-info">
        <fieldset class="person-info-fieldset">
            <legend>
                完善信息
            </legend>
            <div class="person-center">
                <el-form label-width="80px" :model="personForm">
                    <el-form-item label="账号" required>
                        <el-input
                                v-model="personForm.count"
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
    export default {
        name:'PersonInfo',
        data() {
            return {
                personForm: {
                    count:'',
                    name: '',
                    position: '',
                    phone: ''
                }
            };
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