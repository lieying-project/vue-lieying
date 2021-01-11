<template>
    <div class="main">
        <div class="job-banner" ref="jobBanner">
            <div class="detail-box">
                <div class="job-info">
<!--                    <span class="job-status">招聘中</span>-->
                    <div class="job-name-wrapper" v-if="position!=null">
                        <span class="job-name">{{position.name}}</span>
                        <span class="job-salary"> {{position.salary}}</span>
                    </div>
                    <p class="text">
                        <a class="text-city" v-if="position.city!=null">{{position.city.name}}</a>
<!--                        <Vdot/>-->
<!--                        5天/周-->
<!--                        <Vdot/>-->
<!--                        6个月-->
                        <Vdot/>
                        {{position.education}}
                    </p>
                    <div class="job-tags">
<!--                        <span>五险一金</span>-->
<!--                        <span>补充医疗保险</span>-->
<!--                        <span>定期体检</span>-->
<!--                        <span>加班补助</span>-->
<!--                        <span>年终奖</span>-->
<!--                        <span>带薪年假</span>-->
<!--                        <span>交通补助</span>-->
<!--                        <span>零食下午茶</span>-->
                    </div>
                </div>
                <div class="job-op">
                    <a class="communicate-btn" @click="chat">立沟即通</a>
                    <div class="op-container">
                        <a class="icon-resume-login">
                            <i class="icon"></i>
                            <span>完善在线简历</span>
                        </a>
                        <a class="icon-upload-login">
                            <i class="icon"></i>
                            <span>上传附件简历</span>
                        </a>

                    </div>
                </div>

            </div>
        </div>
<!--        <transition name="fade">-->
<!--            <div class="small-banner" id="small-banner" v-bind:style="{'display':bannerDisplayed}">-->
<!--                <div class="detail-box">-->
<!--                    <div class="job-info">-->
<!--                        <div class="job-name-wrapper">-->
<!--                            <span class="job-name">数据分析实习生</span>-->
<!--                            <span class="job-salary"> 80-100元/天</span>-->
<!--                        </div>-->
<!--                        <div class="job-tags">-->
<!--                            <span>五险一金</span>-->
<!--                            <span>补充医疗保险</span>-->
<!--                            <span>定期体检</span>-->
<!--                            <span>加班补助</span>-->
<!--                            <span>年终奖</span>-->
<!--                            <span>带薪年假</span>-->
<!--                            <span>交通补助</span>-->
<!--                            <span>零食下午茶</span>-->
<!--                        </div>-->
<!--                        <p class="other-info">-->
<!--                            <span>明略科技</span>-->
<!--                            <a>查看所有职位</a>-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="job-op">-->
<!--                        <a class="communicate-btn" @click="chat">立即沟通</a>-->

<!--                    </div>-->

<!--                </div>-->
<!--            </div>-->
<!--        </transition>-->
        <div class="job-box">
            <div class="job-detail">
                <div class="detail-op">
                    <div class="detail-op-left">
                        <div class="detail-op">
                            <img class="left-img" src="../../../../assets/imgs/avatar_11.png">
                        </div>
                        <div class="job-detail-info">
                            <h2 class="name" v-if="position.recruiter!=null">{{position.recruiter.name}}</h2>
                            <p class="position-info" v-if="position.recruiter!=null">
                                {{position.recruiter.position}}
                                <Vdot :color="'#9fa3af'"/>
                                刚刚在线
                            </p>
                        </div>
                    </div>
                    <div class="detail-op-right" v-if="position.positionCollects!=null">
                        <a class="job-detail-right-op"><i class="icon el-icon-link"></i><span>微信扫码分享 </span></a>
                        <a class="job-detail-right-op"><i
                                :class="showPositionCollect(position.positionCollects).flag?'icon el-icon-star-on':'icon el-icon-star-off'"
                                @click="operatePositionCollect" ref="collectPosition"></i><span>感兴趣  </span></a>
                        <a class="job-detail-right-op"><i class="icon el-icon-warning-outline"
                                                          @click="reportDialogFormVisible=!reportDialogFormVisible"></i><span>举报 </span></a>

                        <el-dialog title="举报招聘信息" :visible.sync="reportDialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="举报原因">
                                    <el-input v-model="form.reason" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="补充说明" required>
                                    <el-input type="textarea" v-model="form.footnote" auto-complete="off"
                                              maxlength="500"
                                              show-word-limit></el-input>
                                </el-form-item>
                                <el-form-item label="证据截图">
                                    <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                        <i slot="default" class="el-icon-plus"></i>
                                        <div slot="file" slot-scope="{file}">
                                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                            <span class="el-upload-list__item-actions">
                                               <span class="el-upload-list__item-preview"
                                                     @click="handlePictureCardPreview(file)">
                                                   <i class="el-icon-zoom-in"></i>
                                               </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                  @click="handleDownload(file)">
                                                <i class="el-icon-download"></i></span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                  @click="handleRemove(file)"><i
                                                    class="el-icon-delete"></i></span></span>
                                        </div>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="reportDialogFormVisible = false">取消</el-button>
                                <el-button type="primary" @click="reportDialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </div>
                </div>
                <div class="job-desc">
                    <ContentItem :title="'职位描述'"
                                 :desc="position.detail"/>
                </div>
                <div class="company-intro">
                    <TitleWrapper :title="'公司介绍'"/>
                    <div class="text" v-if="position.company!=null">
                        {{position.company.intro}}
                    </div>
                    <a class="view-more">查看全部</a>
                </div>
                <div class="business-info">
                    <TitleWrapper :title="'工商信息'"/>
                    <div class="name">北京明略软件系统有限公司</div>
                    <ul class="level-list">
                        <li class="level-list-item">法人代表：宫载军</li>
                        <li class="level-list-item">注册资金：2011.0889万元人民币</li>
                        <li class="level-list-item">成立时间：2014-04-03</li>
                        <li class="level-list-item company-type">企业类型：其他有限责任公司</li>
                        <li class="level-list-item manage-state">经营状态：开业</li>
                    </ul>
                    <a class="view-more">查看全部</a>
                </div>
                <div class="job-address">

                    <TitleWrapper :title="'工作地址'"/>
                    <div class="job-location">
                        <div class="location-address">{{position.company.address}}</div>
<!--                        <div class="location-map"></div>-->
                    </div>
<!--                    <span class="view-map">点击查看地图</span>-->
                </div>
<!--                <div class="job-recommend">-->
<!--                    <h3 class="title">-->
<!--                        <span class="text">看了该职位的人还看了</span>-->
<!--                        <a class="more">更多职位<i class="el-icon-arrow-right"></i></a>-->
<!--                    </h3>-->
<!--                    <ul>-->
<!--                        <li v-for="i in 3" :key="i">-->
<!--                            <a>-->
<!--                                <img class="company-image"-->
<!--                                     src="../../../../assets/imgs/fe06f1bf47e665a75138bfe72f4588cde31cdba4a5477d6038a6f76662743c7f_s.jpg"/>-->
<!--                                <div class="company-info">-->
<!--                                    <div class="name"><b>实习生</b></div>-->
<!--                                    <p class="red">4-6K</p>-->
<!--                                    <p class="gray">-->
<!--                                        山东锐登网络科技-->
<!--                                        <em class="vdot">·</em>-->
<!--                                        烟台-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
            </div>
            <div class="job-sider">
                <div class="sider-company" v-if="position.company!=null">
                    <h3 class="title">公司基本信息</h3>
                    <div class="company-info">
                        <img class="company-image"
                             :src="position.company.sign">
                        <span class="name">{{position.company.name}}</span>
                    </div>
                    <p><i class="el-icon-s-marketing"></i>
                        <span v-if="position.company.financingStage!=null">
                           {{position.company.financingStage.name}}
                        </span></p>
                    <p><i class="el-icon-user">
                    </i>
                        <span v-if="position.company.companyScale!=null">
                         {{position.company.companyScale.name}}
                        </span></p>
                    <p><i class="el-icon-menu"></i>
                        <span v-if="position.company.industry!=null">{{position.company.industry.name}}</span></p>
<!--                    <p><i class="el-icon-c-scale-to-original"></i>-->
<!--                        <span>https://www.mininglamp.com/</span></p>-->
<!--                    <p class="gray">更新于：2020-09-14</p>-->
                </div>
<!--                <div class="promotion-job">-->
<!--                    <h3 class="title">-->
<!--                        <span class="similar-position">相似职位</span>-->
<!--                        <a class="more-position">更多职位<i class="el-icon-arrow-right"></i></a>-->
<!--                    </h3>-->
<!--                    <ul>-->
<!--                        <li v-for="i in 5" :key="i">-->
<!--                            <div class="intro">-->
<!--                                <p class="name-wrapper">-->
<!--                                    <span class="name">行政人事实习生</span>-->
<!--                                    <span class="salary">3-4K</span>-->
<!--                                </p>-->
<!--                                <p class="gray">-->
<!--                                    <span>文多科技</span>-->
<!--                                    <em class="vdot">·</em>-->
<!--                                    <span>烟台</span>-->
<!--                                </p>-->
<!--                            </div>-->
<!--                            <img src="../../../../assets/imgs/0b5314f540499ebb99682329a1f43c78749af8c8538c9f3e9fa8f689fe037fa4.jpg">-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <a class="view-more">-->
<!--                        <span>更多相似职位</span>-->
<!--                        <i class="el-icon-arrow-right"></i>-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class="promotion-img">-->
<!--                    <img src="../../../../assets/imgs/pro-1.png">-->
<!--                </div>-->

            </div>
        </div>
    </div>
</template>

<script>

import Vdot from "../../../common/Vdot";
import ContentItem from "../../../common/ContentItem";
import TitleWrapper from "../../../common/TitleWrapper";
import {mapState} from 'vuex'

export default {
  name: "PositionDetail",
  components: {TitleWrapper, ContentItem, Vdot},
  data() {
    return {
      bannerDisplayed: "none",
      positionId: '',
      list: [],
      reportDialogFormVisible: false,
      form: {
        reason: '',
        footnote: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var jobBanner = this.$refs.jobBanner
      if (jobBanner !== undefined) {
        var jobBannerHeight = jobBanner.offsetHeight
        //console.log("scrollTop："+scrollTop+"jobBannerClientHeight:"+jobBannerClientHeight)
        if (scrollTop > jobBannerHeight) {
          this.bannerDisplayed = "block"
        } else {
          this.bannerDisplayed = "none"
        }
      }

    },
    async chat() {
      console.log("chat")
      await this.$store.dispatch('saveChatAction',{
        jobHunter: {
          id: this.jobHunter.id,
        },
        recruiter: {
          id: this.position.recruiter.id,
        },
        senderFlag: 1,
        content: "Hello",
        sentDate: new Date()
      })
      await   this.$router.push('/jobHunter/chat/'+this.jobHunter.id)
    },
    getPositionInfo() {
      this.$store.dispatch('getPositionByIdAction', this.positionId)
    },
    timer() {
    },
    operatePositionCollect() {
      var element = this.$refs.collectPosition
      if (element.className == 'icon el-icon-star-off') {
        this.$store.dispatch('savePositionCollectAction', {
          position: {
            id: this.position.id,
          },
          jobHunter: {
            id: this.jobHunter.id
          },
          createdTime: new Date()
        })
        console.log('add')
      } else if (element.className == 'icon el-icon-star-on') {
        var positionCollectId = null
        var obj = this.showPositionCollect(this.position.positionCollects)
        if (obj != null) {
          positionCollectId = obj.positionCollectId
        }
        console.log(positionCollectId)

        this.$store.dispatch('deletePositionCollectAction', {
          positionId: this.position.id,
          positionCollectId: positionCollectId
        })
        console.log('delete')
      }
    }
  },
  mounted() {
    this.positionId = this.$route.params.id
    //console.log(this.positionId)
    this.getPositionInfo()
    this.timer = setInterval(() => {
      setTimeout(this.getPositionInfo, 0)
    }, 60000)
  },
  computed: {
    ...mapState(['position', 'jobHunterId', "jobHunter"]),
    showPositionCollect: function () {
      return positionCollects => {
        var obj = {flag: false, positionCollectId: null}
        positionCollects.forEach((positionCollect, index) => {
          if (this.jobHunter == null) {
            //console.log(obj.flag)
            return obj
          }
          if (this.jobHunter.id === positionCollect.jobHunter.id) {
            obj = {flag: true, positionCollectId: positionCollect.id}
            //console.log(obj.flag)
            return obj
          }
        })
        console.log(obj.flag)
        return obj
      }
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  },
  watch: {},
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<style scoped lang="less">
    @import "../../../../assets/styles/variables";

    .main {
        position: relative;
        width: 100%;
        margin: 0 auto;
        background-color: #FFFFFF;

        .job-banner {
            width: 100%;
            padding: 24rem /@font-size 0;
            flex-flow: row nowrap;
            background-color: #424A61;

            .detail-box {
                position: relative;
                width: 1184rem /@font-size;
                margin: 0 auto;

                .job-info {
                    width: 800rem /@font-size;
                    /*flex: 7;*/
                    display: flex;
                    flex-flow: column nowrap;
                    // position: relative;
                    .job-status {
                        //width: 42rem /@font-size;
                        //height: 20rem /@font-size;
                        font-size: 14rem /@font-size;
                        color: #ffffffb3;
                    }

                    .job-name-wrapper {
                        display: flex;
                        flex-flow: row nowrap;
                        height: 70rem /@font-size;
                        line-height: 70rem /@font-size;

                        .job-name {
                            color: #FFFFFF;
                            font-size: 32rem /@font-size;
                        }

                        .job-salary {
                            margin-left: 20rem /@font-size;
                            font-size: 30rem /@font-size;
                            color: #fa6a43;
                            font-weight: 600;
                        }
                    }

                    .text {
                        color: #ffffffb3;
                        margin-top: 0;

                    }

                    .job-tags {
                        padding-top: 8rem /@font-size;
                        margin-bottom: 10rem /@font-size;
                        display: flex;
                        flex-flow: row wrap;

                        span {
                            font-size: 12rem /@font-size;
                            color: #5ed5c8;
                            border: 1rem /@font-size solid #5ed5c8;
                            border-radius: 13rem /@font-size;
                            padding: 3rem /@font-size 15rem /@font-size;
                            margin: 0 10rem /@font-size 10rem /@font-size 0;
                        }
                    }
                }

                .job-op {
                    /*flex: 3;*/

                    width: 296rem /@font-size;
                    position: absolute;
                    right: 10rem /@font-size;
                    top: 50%;
                    bottom: 0;
                    margin-top: -47em /@font-size;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-around;

                    .communicate-btn {

                        width: 296rem /@font-size;
                        height: 45rem /@font-size;
                        background-color: #5DD5C8;
                        color: #FFFFFF;
                        line-height: 45rem /@font-size;
                        text-align: center;
                        font-size: 17rem /@font-size;

                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .op-container {
                        display: flex;
                        justify-content: space-between;

                        a {
                            height: 17rem /@font-size;
                            line-height: 17rem /@font-size;
                            font-size: 17rem /@font-size;

                            span {
                                color: #5ed5c8;
                            }

                            &.icon-resume-login {
                                display: flex;

                                i {
                                    width: 36rem /@font-size;
                                    background: url("../../../../assets/imgs/icon-resume-login.png") center center no-repeat;
                                    background-size: contain;
                                }
                            }

                            &.icon-upload-login {
                                display: flex;

                                i {
                                    width: 36rem /@font-size;
                                    background: url("../../../../assets/imgs/icon-upload-login.png") center center no-repeat;
                                    background-size: contain;
                                }
                            }
                        }
                    }

                }
            }

        }

        .small-banner {
            top: 0;
            position: fixed;
            width: 100%;
            flex-flow: row nowrap;
            background-color: #424A61;
            z-index: 1000;

            .detail-box {
                width: 1184rem /@font-size;
                margin: 0 auto;
                position: relative;

                .job-info {
                    width: 800rem /@font-size;
                    /*flex: 7;*/
                    display: flex;
                    flex-flow: column nowrap;
                    // position: relative;
                    .job-status {
                        //width: 42rem /@font-size;
                        //height: 20rem /@font-size;
                        font-size: 14rem /@font-size;
                        color: #ffffffb3;
                    }

                    .job-name-wrapper {
                        display: flex;
                        flex-flow: row nowrap;
                        height: 70rem /@font-size;
                        line-height: 70rem /@font-size;

                        .job-name {
                            color: #FFFFFF;
                            font-size: 32rem /@font-size;
                        }

                        .job-salary {
                            margin-left: 20rem /@font-size;
                            font-size: 30rem /@font-size;
                            color: #fa6a43;
                            font-weight: 600;
                        }
                    }


                    .job-tags {
                        display: flex;
                        flex-flow: row wrap;

                        span {
                            font-size: 12rem /@font-size;
                            color: #5ed5c8;
                            border: 1rem /@font-size solid #5ed5c8;
                            border-radius: 13rem /@font-size;
                            padding: 3rem /@font-size 15rem /@font-size;
                            margin: 0 10rem /@font-size 10rem /@font-size 0;
                        }

                    }

                    .other-info {
                        font-size: 14rem /@font-size;

                        span {
                            color: #FFFFFF;
                        }

                        a {
                            margin-left: 20rem /@font-size;
                            color: #5dd5c8;
                            text-decoration: underline;
                        }
                    }
                }

                .job-op {
                    /*flex: 3;*/

                    width: 296rem /@font-size;
                    position: absolute;
                    right: 10rem /@font-size;
                    top: 40%;
                    bottom: 0;
                    margin-top: -47em /@font-size;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-around;

                    .communicate-btn {

                        width: 296rem /@font-size;
                        height: 45rem /@font-size;
                        background-color: #5DD5C8;
                        color: #FFFFFF;
                        line-height: 45rem /@font-size;
                        text-align: center;
                        font-size: 17rem /@font-size;

                        &:hover {
                            cursor: pointer;
                        }
                    }


                }
            }

        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity .5s
        }

        .fade-enter,
        .fade-leave-active {
            opacity: 0
        }

        .job-box {
            width: 1184rem /@font-size;
            display: flex;
            padding-top: 30rem /@font-size;
            margin: 0 auto;

            .job-detail {
                flex: 6;
                display: flex;
                flex-flow: column nowrap;
                padding-right: 25rem /@font-size;
                border-right: 1rem /@font-size #f5f7f9 solid;

                .detail-op {
                    display: flex;
                    //height: 60rem /@font-size;
                    align-items: center;
                    justify-content: space-between;

                    .detail-op-left {
                        display: flex;
                        //height: 60rem /@font-size;
                        align-items: center;

                        .left-img {
                            margin-right: 20rem /@font-size;
                            width: 60rem /@font-size;
                            height: 60rem /@font-size;
                            border-radius: 100%;
                            vertical-align: top;
                        }

                        .job-detail-info {
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;

                            .name {
                                font-size: 20rem /@font-size;
                                color: #424a5e;
                                font-weight: 400;
                                margin: 3rem /@font-size;


                            }

                            .position-info {
                                color: #9fa3af;
                                margin: 3rem /@font-size;
                                font-size: 14rem /@font-size;
                            }
                        }
                    }

                    .detail-op-right {
                        margin-left: 250rem /@font-size;

                        color: #9fa3b0;

                        .job-detail-right-op {
                            margin-left: 10rem /@font-size;
                            cursor: pointer;

                            span {
                                font-size: 14rem /@font-size;
                            }

                        }
                    }
                }

                .job-desc {
                    display: flex;
                    flex-flow: column nowrap;
                }

                .company-intro {
                    position: relative;
                    display: flex;
                    flex-flow: column nowrap;

                    .text {
                        font-size: 14rem /@font-size;
                        color: #61687c;
                        line-height: 36rem /@font-size;

                    }

                    .view-more {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        color: #5dd5c8;
                        font-size: 14rem /@font-size;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                .business-info {
                    position: relative;
                    display: flex;
                    flex-flow: column nowrap;

                    .name {
                        font-size: 14rem /@font-size;
                    }

                    .level-list {
                        padding: 0;

                        list-style-type: none;
                        display: flex;
                        flex-flow: row wrap;
                        font-size: 14rem /@font-size;
                        line-height: 36rem /@font-size;
                        margin-top: 5rem /@font-size;
                        height: 66rem /@font-size;

                        .level-list-item {


                            padding: 0;
                            display: inline-block;
                            width: 246rem /@font-size;
                            margin-top: 5rem /@font-size;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            &.company-type {
                                width: 350px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }

                            &.manage-state {
                                width: 230px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }


                        }
                    }

                    .view-more {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        color: #5dd5c8;
                        font-size: 14rem /@font-size;

                        &:hover {
                            cursor: pointer;
                        }


                    }
                }

                .job-address {
                    position: relative;
                    display: flex;
                    flex-flow: column nowrap;

                    .job-location {

                        margin-top: 20rem /@font-size;
                        font-size: 13rem /@font-size;
                        /*display: flex;*/
                        /*flex-flow: column nowrap;*/
                        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .1);

                        .location-address {

                            display: block;
                            color: #62687a;
                            padding: 13rem /@font-size 15rem /@font-size 11rem /@font-size 35rem /@font-size;
                            font-size: 15rem /@font-size;
                            border-bottom: 1rem /@font-size #ecedef solid;
                        }

                        .location-map {

                            margin: 0 auto;
                            width: 836rem /@font-size;
                            height: 250rem /@font-size;
                            background: url("../../../../assets/imgs/staticmap.png") center center no-repeat;

                        }
                    }

                    .view-map {
                        position: absolute;
                        right: 40rem /@font-size;
                        bottom: 20rem /@font-size;
                        font-size: 14rem /@font-size;
                        cursor: pointer;
                        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                        background-color: #FFFFFF;
                        padding: 5rem /@font-size;
                        border-radius: 2rem /@font-size;

                    }

                }

                .job-recommend {
                    margin-top: 30rem /@font-size;
                    padding-top: 25rem /@font-size;
                    border-top: 1px #f5f7f9 solid;
                    display: flex;
                    flex-flow: column nowrap;

                    h3 {
                        display: flex;
                        justify-content: space-between;
                        color: #4a4e52;
                        font-size: 16rem /@font-size;
                        font-weight: 400;
                        margin-bottom: 24rem /@font-size;

                        a {
                            display: flex;
                            align-items: center;
                            font-size: 14rem /@font-size;
                            color: #9fa3b0;
                            margin-right: 10rem /@font-size;
                        }
                    }

                    ul {
                        display: flex;
                        flex-flow: row wrap;
                        list-style-type: none;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        font-size: 0;
                        white-space: nowrap;
                        overflow: hidden;

                        li {
                            flex: 1;
                            width: 269em /@font-size;
                            margin-right: 14em /@font-size;
                            display: inline-block;
                            font-size: 14px;

                            :nth-child(3) {
                                margin-right: 0;
                            }

                            a {
                                display: flex;
                                padding: 15px 11px;
                                border: 1px #e3e7ed solid;
                                align-items: center;

                                .company-image {
                                    width: 62rem /@font-size;
                                    height: 62rem /@font-size;
                                }

                                .company-info {
                                    display: flex;
                                    flex-flow: column nowrap;
                                    justify-content: center;
                                    padding: 0 15rem /@font-size;
                                    font-size: 14rem /@font-size;

                                    .name {
                                        height: 22rem /@font-size;

                                        b {

                                            font-weight: 400;

                                        }
                                    }

                                    p {
                                        margin: 0;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        height: 22rem /@font-size;
                                        display: flex;
                                        align-items: center;

                                        &.red {
                                            color: #fc703e !important;
                                        }

                                        &.gray {
                                            color: #9fa3af;
                                        }

                                        .vdot {
                                            display: inline-block;
                                            padding: 0 0.625rem 0 0.4375rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .job-sider {
                flex: 2;
                display: flex;
                flex-flow: column nowrap;
                padding: 0 35rem /@font-size;

                .sider-company {
                    display: flex;
                    flex-flow: column nowrap;
                    font-size: 15rem /@font-size;
                    font-weight: 400;

                    .title {
                        line-height: 25rem /@font-size;
                        margin-bottom: 25rem /@font-size;
                        font-weight: 400;
                        color: #414a60;
                    }

                    .company-info {

                        display: flex;
                        flex-flow: row nowrap;
                        align-items: center;
                        margin-bottom: 10rem /@font-size;

                        .name {
                            text-decoration: none;
                            color: #414a60;
                            cursor: pointer;

                        }

                        .company-image {
                            width: 60rem /@font-size;
                            height: 60rem /@font-size;
                            border-radius: 12rem /@font-size;
                            margin-right: 18rem /@font-size;

                        }

                    }

                    p {
                        line-height: 20rem /@font-size;
                        margin-bottom: 2rem /@font-size;
                        font-size: 14rem /@font-size;
                        font-weight: 400;
                        color: #414a60;
                        display: flex;
                        align-items: center;
                        height: 28rem /@font-size;

                        :nth-child(0) {
                            margin-top: 40rem /@font-size;
                        }

                        span {
                            margin-left: 10rem /@font-size;
                        }

                        &.gray {
                            color: #d0d4da;
                        }
                    }
                }

                .promotion-job {
                    margin-top: 10rem /@font-size;
                    display: flex;
                    flex-flow: column nowrap;

                    .title {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: space-between;
                        //font-size: 0;
                        .similar-position {
                            color: #424a5e;
                            font-weight: 400;
                            font-size: 15rem /@font-size;

                        }

                        .more-position {
                            font-weight: 400;
                            color: #9fa3b0;
                            cursor: pointer;
                            font-size: 15rem /@font-size;
                        }

                    }

                    ul {
                        list-style-type: none;
                        padding: 0;

                        li {
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;

                            .intro {
                                display: flex;
                                flex-flow: column nowrap;
                                font-size: 15rem /@font-size;
                                justify-content: center;

                                .name-wrapper {
                                    color: #424a5e;

                                    .name {

                                    }

                                    .salary {
                                        margin-left: 10rem /@font-size;
                                        color: #fc703e;
                                    }
                                }

                                .gray {
                                    color: #9fa3af;
                                    font-weight: 400;

                                    .vdot {
                                        display: inline-block;
                                        padding: 0 0.625rem 0 0.4375rem;
                                    }

                                }
                            }

                            img {
                                width: 62rem /@font-size;
                                height: 62rem /@font-size;
                                border-radius: 10rem /@font-size;
                            }

                        }
                    }

                    .view-more {
                        border: 1rem /@font-size #e3e7ed solid;
                        height: 40rem /@font-size;
                        line-height: 40rem /@font-size;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        span {
                            color: #9fa3af;

                            &:hover {
                                cursor: pointer;
                                color: #8d92a1;
                            }
                        }
                    }
                }

                .promotion-img {
                    margin-top: 20rem /@font-size;

                    img {
                        width: 284rem /@font-size;
                    }
                }

            }
        }
    }
</style>
