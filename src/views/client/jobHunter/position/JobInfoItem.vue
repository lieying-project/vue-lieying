<template>
    <div class="job-info-item" @click="viewPosition(position.id)">
        <div class="job-primary">
            <div class="info-primary">
                <div class="primary-wrapper">
                    <div class="primary-box">
                        <div class="job-title">
                            <span class="job-name">{{position.name}}</span>
                            <span class="job-name">[{{(position.city||{}).name}} {{(position.district||{}).name}} ]</span>
                            <span class="job-pub-time">发布于 {{timestampToTime(position.publishTime)}}</span>
                        </div>
                        <div class="job-limit clearfix">
                            <span class="red">{{position.salary}}</span>
                            <p>
                                {{position.experience}}
                                <em class="vline"></em>
                                {{position.education}}
                            </p>
                            <div class="info-publis">
                                <h3 class="name">
                                    <img class="icon-chat"
                                         src="https://z.zhipin.com/web/geek/resource/icon-chat-v2.png"/>
                                    <span v-if="position.recruiter!=null">{{position.recruiter.name}}</span>
                                    <em class="vline"></em>

                                    <span v-if="position.recruiter!=null">{{position.recruiter.position}}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-company">
                    <div class="company-text" v-if="position.company!=null">
                        <h3 class="name" v-if="position.company!=null" >{{position.company.name}}</h3>
                        <p>
                            <span v-if="position.company.industry!=null">{{position.company.industry.name}}</span>
                            <em class="vline"></em>
                            <span v-if="position.company.financingStage!=null">{{position.company.financingStage.name}}</span>

                            <em class="vline"></em>

                            <span v-if="position.company.companyScale!=null">{{position.company.companyScale.name}}</span>

                        </p>
                    </div>
                    <img class="company-logo"
                         :src="position.company.sign" alt="" v-if="position.company!=null&&position.company.sign!=null">
                </div>
            </div>
            <div class="info-append clearfix">

<!--                <div class="tags">-->

<!--                                        <span class="tag-item">招聘销售人员</span>-->
<!--                                        <span class="tag-item">储备干部</span>-->
<!--                                        <span class="tag-item">财务情况</span>-->
<!--                                        <span class="tag-item">综合金融</span>-->
<!--                                        <span class="tag-item">管理销售团队</span>-->
<!--                </div>-->
                <div class="info-desc">
                    {{position.detail}}
<!--                    带薪年假，晋升空间大，员工旅游，工作环境好，年终奖，补充医疗保险，全勤奖，定期体检，节日福利-->
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: "JobInfoItem",
  props: {
    position: {}
  },
  methods:{
    timestampToTime (timestrap) {
      var date = new Date(timestrap) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() <10?('0'+date.getHours()):date.getHours()
      var m = date.getMinutes()<10?('0'+date.getMinutes()):date.getMinutes()
      var s = date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds()

      return Y+M+D+h + ':'+m + ':'+s
    },
    viewPosition(id){
      this.$router.push("/position/"+id)
    }

  }
}
</script>
<style scoped lang="less">
    @import "../../../../assets/styles/variables";

    .job-info-item {
        cursor: pointer;
        background-color: #ffffff;

        .job-primary {
            color: #414a60;
            margin: 0 15rem /@font-size;
            border-bottom: 1rem /@font-size #f2f2f5 solid;
            position: relative;

            .info-primary {
                width: auto;
                height: 70rem /@font-size;
                padding-top: 20rem /@font-size;
                float: none;

                display: flex;
                align-items: center;
                justify-content: space-between;

                .primary-wrapper {
                    height: 70rem /@font-size;
                    //float: left;
                    width: 460rem /@font-size;
                    vertical-align: top;
                    font-size: 16rem /@font-size;
                    font-weight: 400;
                    line-height: 26rem /@font-size;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    .primary-box {
                        display: inline-block;
                        line-height: 26rem /@font-size;

                        .job-title {
                            font-size: 0;
                            max-width: 460rem /@font-size;
                            color: #00c2b3;
                            font-weight: 400;
                            display: inline-block;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            vertical-align: middle;

                            .job-name {
                                font-size: 16rem /@font-size;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                vertical-align: middle;
                                float: left;
                                margin-right: 10rem /@font-size;
                                display: block;
                            }

                            .job-pub-time {
                                font-size: 13rem /@font-size;
                                color: #8d92a1;
                                overflow: hidden;
                                padding-top: 1rem /@font-size;
                                display: block;
                                text-overflow: ellipsis;
                            }

                        }

                        .job-limit {
                            height: 26rem /@font-size;
                            overflow: hidden;

                            .red {
                                float: left;
                                margin-right: 12rem /@font-size;
                                height: 26rem /@font-size;
                                display: inline-block;
                                line-height: 26rem /@font-size;
                                position: relative;
                                vertical-align: middle;
                                color: #fc703e !important;
                            }

                            .red + p {
                                float: left;
                                font-size: 14rem /@font-size;
                                margin-right: 13rem /@font-size;
                                margin-top: 0;
                                max-width: 169rem /@font-size;
                                color: #61687c;
                            }

                            .info-publis {
                                width: auto;
                                text-align: left;
                                float: left;
                                padding: 0 10rem /@font-size;
                                border: 1rem /@font-size solid #eee;
                                border-radius: 12rem /@font-size;
                                height: 21rem /@font-size;
                                line-height: 21rem /@font-size;
                                margin-top: 1rem /@font-size;

                                .name {
                                    font-weight: 400;
                                    height: 21rem /@font-size;
                                    margin: 0;
                                    line-height: 21rem /@font-size;
                                    max-width: 150rem /@font-size;
                                    color: #6c7388;
                                    font-size: 12rem /@font-size;
                                    display: inline-block;
                                    vertical-align: middle;

                                    .icon-chat {
                                        width: 13rem /@font-size;
                                        height: 13rem /@font-size;
                                        vertical-align: -2rem /@font-size;
                                        margin: 0 6rem /@font-size 0 0;
                                        border-radius: 0;
                                    }
                                }
                            }
                        }

                        .info-detail {
                            position: absolute;
                            white-space: normal;
                            right: -30rem /@font-size;
                            top: 0;
                            width: 500rem /@font-size;
                            height: auto;
                            display: none;
                            padding: 0;
                            color: #abafba;
                            background: rgba(244, 247, 252, 1);
                            box-shadow: 0 4rem /@font-size 8rem /@font-size 0 rgba(65, 74, 96, .2);
                            z-index: 2001;
                        }
                    }
                }

                .info-company {
                    height: 70rem /@font-size;

                    .company-text {
                        width: auto;
                        float: left;
                        display: inline-block;
                        vertical-align: top;

                        .name {
                            margin-top: 0;
                            color: #00c2b3;
                            font-size: 16rem /@font-size;
                            font-weight: 400;
                            margin-bottom: 3rem /@font-size;
                            height: 26rem /@font-size;
                            line-height: 26rem /@font-size;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .name + p {
                            color: #61687c;
                            max-width: 270rem /@font-size;
                            margin-top: 2rem /@font-size;
                            font-size: 12rem /@font-size;
                        }
                    }

                    .company-logo {
                        float: right;
                        width: 54rem /@font-size;
                        height: 54rem /@font-size;
                        border: 1rem /@font-size solid #f3f5fb;
                        border-radius: 9rem /@font-size;
                        vertical-align: top;
                        margin-left: 23rem /@font-size;
                    }
                }

            }

            .info-append {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 40rem /@font-size;
                line-height: 40rem /@font-size;
                margin: 0 -15rem /@font-size;
                padding: 0 30rem /@font-size;
                background: #f8f9fc;

                .tags {

                    //float: left;
                    width: 389rem /@font-size;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 85rem /@font-size;
                    font-size: 0;
                    height: 40rem /@font-size;

                    .tag-item {
                        font-size: 12rem /@font-size;
                        height: 21rem /@font-size;
                        line-height: 21rem /@font-size;
                        padding: 0 8rem /@font-size;
                        border: 1rem /@font-size solid #eee;
                        border-radius: 2rem /@font-size;
                        display: inline-block;
                        margin-right: 10rem /@font-size;
                        margin-top: 9rem /@font-size;
                        color: #61687c;
                    }

                }

                .info-desc {
                    font-size: 13rem /@font-size;
                    float: right;
                    width: 350rem /@font-size;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #61687c;
                }


            }

            .info-append::after {
                content: '';
                display: block;
                overflow: hidden;
                visibility: hidden;
                clear: both;
            }


        }
    }

    .vline {
        display: inline-block;
        width: 1rem /@font-size;
        height: 12rem /@font-size;
        vertical-align: middle;
        background: #e0e0e0;
        margin: 0 10rem /@font-size;
    }


</style>
