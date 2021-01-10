<template>
    <div>
        <el-form label-width="80px" :model="personForm">
            <el-form-item label="姓名">
                <el-input v-model="personForm.name"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-input v-model="personForm.position"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="personForm.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="savePersonInfo">保存</el-button>
                <el-button @click="resetForm('personForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    export default {
        name:'PersonCertify',
        data() {
            return {
                personForm: {
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

<style scoped>

</style>