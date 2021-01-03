<template>
    <div class="dispatcher-info-detail">

        <div class="info-person">
            <h3 style="font-size:20px">梁远</h3>
            <ul class="info-person-list">
                <li><i class="el-icon-timer"></i>年龄:<span class="info-span">20岁</span></li>
                <li><i class="el-icon-female"></i>性别:<span class="info-span">女</span></li>
                <li><i class="el-icon-notebook-2"></i>学历:<span class="info-span">本科</span></li>
                <li><i class="el-icon-mobile-phone"></i>手机号:<span class="info-span">17616152458</span></li>
                <li><i class="el-icon-chat-round"></i>微信号:<span class="info-span">18819735168</span></li>
            </ul>
            <div class="info-img">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4273009521,2229329580&fm=11&gp=0.jpg"/>
            </div>
        </div>

        <el-divider/>

        <div class="info-advantage">
            <h4>个人优势</h4>
            <section>
                会html js css
                会c语言 java python
                会写需求 写设计文档 写测试文档
            </section>
        </div>

        <el-divider/>

        <!--        职位期望-->
        <div class="info-respect">
            <h4>期望职位</h4>
            <ul class="info-respect-list">
                <li>职位:web前端</li>
                <li>工作地点:广州</li>
                <li>期望薪资:3-7k</li>
                <li>类别:计算机软件</li>
            </ul>
        </div>

        <el-divider/>

        <!--        项目经历-->
        <div class="project-exer">
            <h4>项目经历</h4>
            <div class="project-name">猎英招聘网<time>2020.09-2020.12</time></div>
            <div>前端开发</div>
            <div>内容:功能介绍:.........</div>
        </div>

        <el-divider/>

        <!--        教育经历-->
        <div class="education-exer">
            <h4>教育经历</h4>
            <div>
                山东工商学院<time>2020.09-2020.12</time>
            </div>
            <div>
                <div>软件工程</div>
                <div>本科</div>
            </div>
        </div>

        <el-divider/>

        <!--        资格证书-->
        <div class="credential">
            <h4>资格证书</h4>
            <ul>
                <li>大学英语四级</li>
                <li>大学英语六级</li>
            </ul>
        </div>

        <el-divider/>

        <div class="credential">
            <h4>社交主页</h4>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DispatcherInfoDetail"
    }
</script>

<style scoped lang="less">
    .dispatcher-info-detail {
        width:80%;
        margin: 40px auto;
        font-size: 14px;

    }
    ul {
        list-style: none;
        li {
            padding:10px;
        }
    }
    h4 {
        font-size: 18px;
        position: relative;
    }
    h4::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 16px;
        border-radius: 10px;
        background-color: #53cac3;
        left: -8px;
        -webkit-box-sizing: border-box;
    }

    .info-person-list,.info-respect-list {
        display: flex;
        flex-wrap: wrap;
    }
    .info-span {
        padding-left: 8px;

    }
    .info-person {
        position: relative;
        .info-img {
            position:absolute;
            top:0;
            right: 0;
            display: inline-block;
            width: 80px;
            height: 80px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 40px;
            }
        }
    }

</style>