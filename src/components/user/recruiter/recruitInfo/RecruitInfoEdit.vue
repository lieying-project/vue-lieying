<template>
    <div class="recruiter-container">
        <fieldset class="add-recruiter">
            <legend>
                编辑招聘信息
            </legend>
            <div class="add-recruiter-form">
                <el-form ref="form" :model="form" label-width="120px" :hide-required-asterisk="false">
                    <el-form-item
                            label="职位名称"
                            :rules="[{ required:true,message:'职位名称不能为空'}]"
                    >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>

                    <el-form-item
                            label="类型"
                            :rules="[{ required:true,message:'类型不能为空'}]"

                    >
                        <el-select v-model="form.type" placeholder="请选择职位类型">
                            <el-option label="前端开发" value="web前端"></el-option>
                            <el-option label="java开发" value="java开发"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                            label="地点"
                    >
                        <el-input v-model="form.place"></el-input>
                    </el-form-item>

                    <el-form-item
                            label="经验要求"
                    >
                        <el-select v-model="form.exercise" placeholder="请选择经验要求">
                            <el-option label="无经验" value="无经验"></el-option>
                            <el-option label="1年以上" value="1年以上"></el-option>
                            <el-option label="2年以上" value="2年以上"></el-option>
                            <el-option label="3年以上" value="3年以上"></el-option>
                            <el-option label="4年以上" value="4年以上"></el-option>
                            <el-option label="5年以上" value="5年以上"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                            label="工作制">
                        <el-input v-model="form.time"></el-input>
                    </el-form-item>

                    <el-form-item
                            label="待遇">
                        <el-input v-model="form.money"></el-input>
                    </el-form-item>


                    <el-form-item label="详情">
                        <el-input type="textarea" v-model="form.detail" aria-placeholder="请补充相关职位要求详情"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button @click="onCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </fieldset>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "RecruitInfoEdit",
        data() {
            return {
                form: {
                    name: '',
                    type: '',
                    place: '',
                    exercise: '',
                    time: '',
                    money: '',
                    detail: ''
                }
            }
        },
        created() {
            //根据传递过来的信息去查找对应的数据 显示到界面上
            console.log(this.$route.query);
        },
        methods: {
            ...mapActions(["updateRecruitInfo"]),
            onSubmit() {
                console.log('submit!');
                //进行数据的更新
                // this.updateRecruitInfo(this.form);
                //根据判断再进行弹框
                // this.$message({
                //     type: 'success',
                //     message: '编辑成功'
                // })
            },
            onCancel() {
                console.log("点击了取消");
                this.$router.back();
            }
        }
    }
</script>

<style scoped lang="less">
    .recruiter-container {
        width: 90%;
        margin: 20px auto;
    }
    .add-recruiter {
        margin: 0;
        border: 1px solid #e6e6e6;
        padding: 10px 20px 5px 20px;
        color: #6b6b6b;
    }

    .add-recruiter-form {
        padding-top: 20px;
        width: 75%;
    }

</style>