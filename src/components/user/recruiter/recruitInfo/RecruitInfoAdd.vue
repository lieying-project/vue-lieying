<template>
    <div class="recruiter-container">
        <fieldset class="add-recruiter">
            <legend>
                添加招聘信息
            </legend>
            <div class="add-recruiter-form">
                <el-form ref="form" :model="form" label-width="120px" :hide-required-asterisk="false">
                    <el-form-item
                            label="职位名称"
                            :rules="[{ required:true,message:'职位名称不能为空'}]"
                    >
                        <el-input v-model="form.name" maxlength=15 show-word-limit aria-placeholder="请输入职位名称,注意不要输入特殊符号"></el-input>
                    </el-form-item>

                    <el-form-item
                            label="类型"
                            :rules="[{ required:true,message:'类型不能为空'}]"

                    >
                        <el-select v-model="value" placeholder="请选择职位类型" @change="getType">
                            <el-option v-for="item in positionCategories" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                            label="地点"
                    >
                        <el-input v-model="form.address"></el-input>
<!--                        <el-cascader :options="options">-->
<!--                            <template slot-scope="{ node, data }">-->
<!--                                <span>{{ data.label }}</span>-->
<!--                                <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>-->
<!--                            </template>-->
<!--                        </el-cascader>-->
                    </el-form-item>

                    <el-form-item
                            label="经验要求"
                    >
                        <el-select v-model="form.experience" placeholder="请选择经验要求">
                            <el-option label="无经验" value="无经验"></el-option>
                            <el-option label="1年以上" value="1年以上"></el-option>
                            <el-option label="2年以上" value="2年以上"></el-option>
                            <el-option label="3年以上" value="3年以上"></el-option>
                            <el-option label="4年以上" value="4年以上"></el-option>
                            <el-option label="5年以上" value="5年以上"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                            label="学历要求"
                    >
                        <el-select v-model="form.education" placeholder="请选择学历要求">
                            <el-option label="不限" value="不限"></el-option>
                            <el-option label="大专" value="大专"></el-option>
                            <el-option label="本科" value="本科"></el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                            <el-option label="博士" value="博士"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                            label="待遇">
                        <el-input v-model="form.money" maxlength=40 show-word-limit></el-input>
                    </el-form-item>


                    <el-form-item label="详情">
                        <el-input type="textarea" v-model="form.detail" placeholder="请补充相关职位要求详情,例如:
1.需要较强的沟通能力;
2.性格开朗;
3.抗压能力强" maxlength=1000 show-word-limit   :autosize="{ minRows: 4}"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button @click="onCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </fieldset>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    let id = 0;
    export default {
        name: "RecruitInfoAdd",
        data() {
            return {
                options: [{
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }]
                    }],
                form: {
                    name: '',
                    positionCategory:{
                      id:0
                    },
                    address: '',
                    experience: '',
                    salary: '',
                    detail: '',
                    education:'',
                },
                value:''
            }
        },
        created(){
            if(this.positionCategories==='') {
                this.getAllPositionCategoriesAction();
            }
        },
        computed:{
          ...mapState(['positionCategories'])
        },
        methods: {
            ...mapActions(["savePositionAction","getAllPositionCategoriesAction"]),
            getType(data) {
                console.log('获取data',data);
                this.form.positionCategory.id = data;
            },
            onSubmit() {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                this.savePositionAction({...this.form,recruiter:{id:1},publishTime:new Date()}).then((data)=>{
                    console.log('data',data);
                    if(data.status == 200) {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: '添加失败'
                        })
                    }

                    this.$router.back();
                })
                 // this.$store.dispatch('savePositionAction',{
                 //   name:"name",
                 //     salary:"100/天",
                 //    address:"address" ,
                 //    education:"高中",
                 //    experience:"experience",
                 //   detail:"detail" ,
                 //    recruiter:{
                 //      id: 1
                 //   },
                 //     positionCategory:{
                 //       id:2
                 //     }
                 // })
                //this.addRecruitInfo(this.form);
                //根据判断再进行弹框

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
        background-color: #ffffff;
    }

    .add-recruiter-form {
        padding-top: 20px;
        width: 75%;
    }

</style>