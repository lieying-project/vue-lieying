<template>
    <div class="certify-container">
        <div class="certify-nav">
            <span class="title">猎英网|招聘者</span>
        </div>
        <div class="certify-warn">
            请完成公司公司认证，上传相关资料
        </div>
        <div class="certify-steps">
            <el-steps :active="active" finish-status="success">
                <el-step title="公司信息认证" icon="el-icon-picture"></el-step>
                <el-step title="个人身份认证" icon="el-icon-user"></el-step>
                <el-step title="开始招聘" icon="el-icon-circle-check"></el-step>
            </el-steps>
        </div>
        <el-divider/>

        <div class="certify-content">
            <company-certify @saveCompanyInfo="saveCompanyInfo" v-if="companyControll"/>
            <person-certify @savePersonInfo="savePersonInfo" v-if="personControll"/>
            <recruit-info-add v-if="positionControll"/>
        </div>


    </div>
</template>

<script>
    import CompanyCertify from "@/views/client/recruiter/certify/CompanyCertify";
    import PersonCertify from "@/views/client/recruiter/certify/PersonCertify";
    import RecruitInfoAdd from "../recruitInfo/RecruitInfoAdd";
    export default {
        name: "Certify",
        data() {
            return {
                active:0,
                companyControll:true,
                personControll:false,
                positionControll:false
            }
        },
        methods:{
            saveCompanyInfo(data) {
                this.active++;
                //发起请求，保存公司认证信息

                this.companyControll = false;
                this.personControll  = true;
            },
            savePersonInfo(data) {
                this.active++;
                //发起请求，保存招聘者个人信息

                this.personControll = false;
                this.positionControll = true;

            }
        },
        components:{
            PersonCertify,
            CompanyCertify,
            RecruitInfoAdd
        }
    }
</script>

<style scoped lang="less">
    .certify-container {
        height: 100vh;
        .certify-nav {
            min-width: 1024px;
            height: 54px;
            line-height: 54px;
            border-top: 1px solid #d2d2d2;
            border-bottom: 1px solid #e5e5e5;
            background-color: #fafafa;
            .title {
                height: 54px;
                font-size: 24px;
                color: #00b38a;
                margin: 12px 0 0 12px;
                padding: 0 12px;
            }
        }
    }

    .certify-steps {
        width: 40%;
        margin: 50px auto;
    }

    //设置图标的大小
    .certify-steps /deep/.el-step__icon-inner[class*=el-icon]:not(.is-status) {
        font-size: 24px;
    }

    //设置中心部分的样式
    .certify-content {
        margin: 20px auto;
        width: 40%;
    }

    .certify-warn {
        color:#333;
        margin: 40px auto;
        text-align: center;
        font-weight: bold;
        font-family: HiraginoSansGB-W6;
        font-size: 26px;
        letter-spacing: 1px;
    }
</style>