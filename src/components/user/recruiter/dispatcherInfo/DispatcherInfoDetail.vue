<template>
    <div class="dispatcher-info-detail" v-if="Object.keys(info).length!==0">
        <div class="info-person">
            <h3 style="font-size:20px">{{info.jobHunter.name}}</h3>
            <ul class="info-person-list">
                <li><i class="el-icon-timer"></i>年龄:<span class="info-span">{{info.age}}</span></li>
                <li><i class="el-icon-female"></i>性别:<span class="info-span">{{info.jobHunter.sex}}</span></li>
                <li><i class="el-icon-notebook-2"></i>学历:<span class="info-span">{{info.jobHunter.education}}</span></li>
                <li><i class="el-icon-mobile-phone"></i>手机号:<span class="info-span">{{info.jobHunter.phone}}</span></li>
                <li><i class="el-icon-message"></i>邮箱:<span class="info-span">{{info.jobHunter.email}}</span></li>
                <li><i class="el-icon-goblet"></i>生日:<span class="info-span">{{info.jobHunter.birthday|formatFilter}}</span></li>
            </ul>
            <div class="info-img">
<!--                <el-avatar :size="'large'" :src="info.jobHunter.photo||'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4273009521,2229329580&fm=11&gp=0.jpg'"></el-avatar>-->
                <img :src="info.jobHunter.photo||'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4273009521,2229329580&fm=11&gp=0.jpg'"/>
            </div>
        </div>

        <el-divider/>

        <div class="info-advantage" v-if="advantageControll">
            <h4>个人优势</h4>
            <section>
                会html js css
                会c语言 java python
                会写需求 写设计文档 写测试文档
                {{info.advantage}}
            </section>
            <el-divider/>
        </div>



        <!--        职位期望-->
        <div class="info-respect">
            <h4>期望职位</h4>
            <ul class="info-respect-list">
                <li>职位:{{info.expectedPosition}}</li>
                <li>工作地点:{{info.workAddress}}</li>
                <li>期望薪资:{{info.expectedSalary}}K</li>
                <li>类别:计算机软件</li>
            </ul>
            <el-divider/>
        </div>



        <!--        项目经历-->
        <div class="project-exer" v-if="projectControll">
            <h4>项目经历</h4>
            <div class="project-info" v-for="(item,index) in info.projectExperiences" :key="index">
                <div>
<!--                    <span class="project-name">{{item.name}}</span>-->
                    <time class="time">2020.09-2020.12</time>
                </div>
                <div class="role"><span>角色:</span>{{item.role}}</div>
                <div class="content">
                    <span>内容:</span>
                    <div class="des">
                        <el-input type="textarea" autosize :value="item.description"></el-input>
                    </div>
                </div>
            </div>
            <el-divider/>
        </div>



        <!--        教育经历-->
        <div class="education-exer" v-if="educationControll">
            <h4>教育经历</h4>
            <div class="education" v-for="(item,index) in info.educationExperiences" :key="index">
                <div class="school">
                    <span>学校:{{item.school}}</span><time>{{item.timeQuantum}}</time>
                </div>
                <div class="stage">
                    <div>{{item.stage}}</div>
                </div>
            </div>
            <div>

            </div>
            <el-divider/>
        </div>



        <!--        资格证书-->
        <div class="credential" v-if="credentialControll">
            <h4>资格证书</h4>
            <ul>
                <li v-for="(item,index) in info.credentials" :key="index">{{item.name}}</li>
            </ul>
            <el-divider/>
        </div>



        <div class="credential" v-if="internshipControll">
            <h4>实习经验</h4>
            <div class="work" v-for="(item,index) in info.internshipExperiences" :key="index">
                <div class="work-first">
                    <div>
                        <div><span>公司名称:</span>{{item.company}}</div>
                        <div><span>所属部门:</span>{{item.department}}</div>
                        <div><span>所属行业:</span>{{item.industry}}</div>
                    </div>
                    <div>
                        <div><span>职位名称:</span>{{item.positionName}}</div>
                        <div><span>职位类型:</span>{{item.positionCategory}}</div>
                        <div><span>在职时间:</span>{{item.startTime|formatFilter}}至{{item.endTime|formatFilter}}</div>
                    </div>
                </div>
                <div class="work-second">
                    <div class="area">
                        <span class="left">拥有技能:</span>
                        <el-input type="textarea" autosize :value="item.technology"></el-input>
                    </div>
                    <div class="area">
                        <span class="left">工作内容:</span>
                        <el-input type="textarea" autosize :value="item.jobContent"></el-input>
                    </div>
                    <div class="area">
                        <span class="left">工作业绩:</span>
                        <el-input type="textarea" autosize :value="item.jobPerformance"></el-input>
                    </div>
                </div>

            </div>
            <el-divider/>

        </div>

        <div class="credential" v-if="volunteerControll">
            <h4>志愿服务经历</h4>
            <div class="work" v-for="(item,index) in info.internshipExperiences" :key="index">
                <div class="work-first">
                    <div>
                        <div><span>项目名称:</span>{{item.name}}</div>
                        <div><span>总服务时长:</span>{{item.endTime - item.startTime}}</div>
                        <div><span>项目开始时间:</span>{{item.startTime|formatFilter}}</div>
                        <div><span>项目结束时间:</span>{{item.endTime|formatFilter}}</div>
                    </div>
                </div>
                <div class="work-second">
                    <div class="area">
                        <span class="left">项目描述:</span>
                        <el-input type="textarea" autosize :value="item.description"></el-input>
                    </div>
                </div>

            </div>
            <el-divider/>

        </div>


        <div class="btn">
            <el-button type="primary" @click="communicate">沟通</el-button>
            <el-button type="warn" @click="reject">拒绝</el-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "DispatcherInfoDetail",
        data() {
          return {
              info:{},
              internshipControll:false,
              credentialControll:false,
              educationControll:false,
              advantageControll:false,
              projectControll:false,
              volunteerControll:false

          }
        },
        created() {
            const data = this.$route.query;
            console.log('id',this.$route.query);
            this.$store.dispatch('getResumeByIdAction',data.id).then((data)=>{
                console.log('data',data);
                this.info = data.data;
                console.log("jobHunter",this.info.jobHunter);
                const internship = this.info.internshipExperiences;
                const credential = this.info.credentials;
                const education = this.info.educationExperiences;
                const advantage = this.info.advantage;
                const project = this.info.projectExperiences;
                const volunteer = this.info.volunteerExperience;
                if(internship===undefined || internship===null || internship==="");
                else if(internship.length===0);
                else{this.internshipControll = true}

                if(credential===undefined || credential===null || credential==="");
                else if(credential.length===0);
                else{this.credentialControll = true}

                if(education===undefined || education===null || education==="");
                else if(education.length===0);
                else{this.educationControll = true}

                if(advantage===undefined || advantage===null || advantage==="");
                else if(advantage.length===0);
                else{this.advantageControll = true}

                if(project===undefined || project===null || project==="");
                else if(project.length===0);
                else{this.projectControll = true}

                if(volunteer===undefined || volunteer===null || volunteer==="");
                else if(volunteer.length===0);
                else{this.volunteerControll = true}

            })
        },
        methods:{
            communicate() {
               //进入沟通界面

            },
            reject() {
                this.$prompt('', '回馈信息', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        },
        filters:{
            formatFilter(value) {
                return  new Date(value).toLocaleDateString().replace(/\/(\d+)/g, function (a, b) {
                    return '-' + b.padStart(2, 0)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .dispatcher-info-detail {
        width:80%;
        margin: 40px auto;
        font-size: 14px;
        padding: 60px;
        background-color: #ffffff;
    }
    ul {
        list-style: none;
        padding-left: 0;
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

    .info-person-list,.info-respect-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        padding-left:0;
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

    .project-info{
        padding: 20px 0;

        .project-name {
            font-size: 18px;
            font-weight: bold;
            padding-right: 60px;
        }
        .role {
            padding: 12px 0;
            span {
                padding-right: 10px;
                font-weight: bold;
            }
        }
        .content {
            display: flex;
            span{
                padding-right: 10px;
                font-weight: bold;
            }
        }
        .time {
            color: #d9d9d9;
        }
        .des {
            width: 600px;
            input{
                width: 100%;
            }
        }
    }

    //教育经历
    .education {
        padding-bottom: 20px;
        .school {
            span {
                font-size: 20px;
                font-weight: bold;
                padding-right: 20px;
            }
            time {
                color: #d9d9d9;
            }
        }
        .stage {
            padding-top: 10px;
        }
    }

    //实习经历
    .work {
        padding: 20px 20px;
        margin: 10px 0;
        box-shadow: 0 0 12px 0 #F6F6F8;
        border-radius: 10px;
        color: #d9d9d9;
        span {
            color: #000000;
            font-size:20px;
            padding-right: 10px;
        }
        .work-first {
            &>div {
                display: flex;
                justify-content: space-between;
                div {
                    width: 25%;
                }
                padding-bottom: 10px;
            }
        }
        .work-second {
            &>div {
                padding: 20px 0;
            }
            .area {
                display: flex;
                align-items: center;
                width: 800px;
                padding-top: 8px;
                .left{
                    width: 100px;
                }
                input {
                    width: 60%;
                }
            }
        }
    }
</style>