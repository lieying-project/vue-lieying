<template>
    <div class="company-intro">
        <div class="hot-position">
<!--            <div class="title-wrapper">-->
<!--                <span>热招职位</span>-->
<!--                <ViewMore :text="'查看全部16个职位'" :font-size="'1.2rem'"/>-->
<!--            </div>-->
<!--            <ul>-->
<!--                <li v-for="i in 3" :key="i">-->
<!--                    <div class="name-wrapper">-->
<!--                        <span class="name">运营总监</span>-->
<!--                        <span class="salary">12-15k</span>-->
<!--                    </div>-->
<!--                    <p class="gray">-->
<!--                        <span>3-5年</span>-->
<!--                        <Vdot/>-->
<!--                        <span>大专</span>-->
<!--                        <Vdot/>-->
<!--                        <span>烟台</span>-->
<!--                    </p>-->
<!--                </li>-->
<!--            </ul>-->
        </div>
        <div class="company-detail">
            <div class="company-detail-left">
                <ContentItem :title="'公司简介'"
                             :desc="$store.state.company.intro"/>
<!--                <div class="product-intro">-->
<!--                    <TitleWrapper title="产品介绍"/>-->
<!--                    <ProductList/>-->
<!--                </div>-->
<!--                <div class="business-info">-->
<!--                    <TitleWrapper title="工商信息"/>-->
<!--                    <div class="business-detail">-->
<!--                        <h4 class="business-name">-->
<!--                            <span>阿里巴巴（中国）有限公司</span>-->
<!--                            <span class="source">来源：企查查</span>-->
<!--                        </h4>-->
<!--                        <ul class="detail-content" :style="{height: isShowBusinessAll?'auto': '3rem'}">-->
<!--                            <li><span class="t">法人代表：</span>张勇</li>-->
<!--                            <li><span class="t">注册资本：</span>15298万美元</li>-->
<!--                            <li><span class="t"> 成立时间：</span>2007-03-26</li>-->
<!--                            <li class="col-auto"><span class="t"> 企业类型：</span>有限责任公司（台港澳法人独资）</li>-->
<!--                            <li class="col-auto"><span class="t"> 经营状态：</span>存续</li>-->
<!--                            <li class="col-auto"><span class="t"> 注册地址：</span>浙江省杭州市滨江区长河街道网商路699号4号楼5楼508室</li>-->
<!--                            <li class="col-auto"><span class="t"> 统一信用代码：</span>91330100799655058B</li>-->
<!--                            <li class="col-auto"><span class="t"> 经营范围：</span>服务：企业管理，计算机系统服务，电脑动画设计，经济信息咨询服务（除商品中介），成年人的非证书劳动职业技能培训和成年人的非文化教育培训（涉及前置审批的项目除外）；生产：计算机软件；销售自产产品。（国家禁止和限制的除外，凡涉及许可证制度的凭证经营）-->
<!--                            </li>-->
<!--                            <div class="show-business-all" @click="handleShowBusinessAll()">-->
<!--                                <span v-show="isShowBusinessAll">收起</span>-->
<!--                                <span v-show="!isShowBusinessAll">展开</span>-->
<!--                                <i class="el-icon-arrow-down" v-show="!isShowBusinessAll"></i>-->
<!--                                <i class="el-icon-arrow-up" v-show="isShowBusinessAll"></i>-->
<!--                            </div>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="company-base-info">
                    <TitleWrapper title="公司信息"/>
                    <ul >
                        <li>       公司地址:{{this.company.address}}</li>
                        <li>       成立时间:{{this.company.established}}</li>
                        <li>        企业法人:{{this.company.representative}}</li>
                        <li>
                            注册资本:{{this.company.registerCapital}}</li>
                        <li>          经营范围:{{this.company.businessScope}}</li>
                        <li></li>
                    </ul>
                </div>
<!--                <div class="recruiting-position">-->
<!--                    <TitleWrapper title="在招职位"/>-->
<!--                    <PositionList/>-->
<!--                </div>-->
            </div>
            <div class="company-condition">
                <div class="leader-intro">
                    <span class="title">高管介绍</span>
                    <div class="slider-dot" v-if="$store.state.company.recruiters!=null">
                        <span class="dot" v-for="i in $store.state.company.recruiters.length" :key="i"
                              :style="{backgroundColor:currentDot==i?'#62d5c8':'#9fa3b0'}"
                              @click="toggleRecruiter(i)"></span>
                    </div>
                    <ul>
                        <li v-for="(recruiter,index) in $store.state.company.recruiters" :key="index"
                            :style="{display:currentDot==(index+1)?'block':'none'}">
                            <div class="user-base-info">
                                <img :src="recruiter.photo" class="photo">
                                <p>
                                    <span class="name">{{recruiter.name}}</span>
                                    <span class="title">{{recruiter.position}}</span>
                                </p>
                            </div>
                            <div class="user-desc" ref="userDesc"
                                 :style="{height: isShowRecruiterAll?'auto': '7.6rem'}">
                                <span v-html="recruiter.intro"></span>
                                <a class="view-more" @click="handleShowRecruiterAll" ref="viewMore">
                                    <span v-show="isShowRecruiterAll">收起</span>
                                    <span v-show="!isShowRecruiterAll">展开</span>
                                    <i class="el-icon-arrow-down" v-show="!isShowRecruiterAll"></i>
                                    <i class="el-icon-arrow-up" v-show="isShowRecruiterAll"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
<!--                <div class="company-environment">-->
<!--                    <TitleWrapper title="公司环境"/>-->
<!--                    <a class="btn-prev" id="btn-prev" href="javascript:void(0);" @click="prevPicture"><i-->
<!--                            class="el-icon-arrow-left"></i></a>-->
<!--                    <a class="btn-next" id="btn-next" href="javascript:void(0);" @click="nextPicture"><i-->
<!--                            class="el-icon-arrow-right"></i></a>-->
<!--                    <ul>-->
<!--                        <li v-for="(companyPicture,index) in $store.state.company.companyPictures" :key="index"-->
<!--                            v-show="currentCompanyPictureIndex==index">-->
<!--                            <img :src="require(`@/assets/${companyPicture.path}`)" @mouseover="displayPageBtn" @mouseleave="hidePageBtn">-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
                <div class="company-position">
                    <TitleWrapper title="招聘职位"/>
<!--                    <ul v-if="$store.state.company.positions!=null">-->
<!--                        <li v-for="(position,index) in $store.state.company.positions" :key="index">-->
<!--                            <img :src="require(`@/assets/${position.recruiter.photo}`)" >-->
<!--                            <div class="text">-->
<!--                                <p class="name-wrapper">-->
<!--                                    <span class="name" v-if="position.recruiter!=null">{{position.recruiter.name}}</span>-->
<!--                                    <Vdot :color="'#9fa3b0'"/>-->
<!--                                    <span class="title">{{position.recruiter.position}}</span>-->
<!--                                </p>-->
<!--                                <p class="desc">正在招聘 “测试开发高级专家” 等 8 个职位</p>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
                    <a class="view-more">
                        <span>查看所有Boss的在招职位</span>
                        <i class="el-icon-arrow-right"></i>
                    </a>
<!--                    <span class="updated-time">更新时间:2020-07-31</span>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ViewMore from "../../../common/ViewMore";
import Vdot from "../../../common/Vdot";
import ContentItem from "../../../common/ContentItem";
import TitleWrapper from "../../../common/TitleWrapper";
import ProductList from "../../../common/ProductList";
import PositionList from "../../../common/PositionItems";
import {mapState} from 'vuex'
export default {
  name: "CompanyIntro",
  components: {PositionList, ProductList, TitleWrapper, ContentItem, Vdot, ViewMore},
  data() {
    return {
      isShowBusinessAll: false,
      isShowRecruiterAll: false,
      currentDot: 1,
      currentCompanyPictureIndex: 0
    }
  },
  methods: {
    handleShowBusinessAll() {
      this.isShowBusinessAll = !this.isShowBusinessAll
    },
    handleShowRecruiterAll() {
      this.isShowRecruiterAll = !this.isShowRecruiterAll
    },
    toggleRecruiter(index) {
      this.currentDot = index
    },
    changeRecruiter() {
      if (this.currentDot < this.$store.state.company.recruiters.length) {
        this.currentDot += 1
      } else {
        this.currentDot = 1
      }
    },
    prevPicture() {
      if (this.currentCompanyPictureIndex == 0) {
        this.currentCompanyPictureIndex = this.$store.state.company.companyPictures.length - 1
      } else {
        this.currentCompanyPictureIndex -= 1
      }
    },
    nextPicture() {
      if (this.currentCompanyPictureIndex == this.$store.state.company.companyPictures.length - 1) {
        this.currentCompanyPictureIndex = 0
      } else {
        this.currentCompanyPictureIndex += 1
      }
    },
    displayPageBtn() {
      var btnPrev = document.querySelector("#btn-prev")
      var btnNext = document.querySelector("#btn-next")
      btnPrev.style.display = 'block'
      btnNext.style.display = 'block'
    },
    hidePageBtn() {
      var btnPrev = document.querySelector("#btn-prev")
      var btnNext = document.querySelector("#btn-next")
      btnPrev.style.display = 'none'
      btnNext.style.display = 'none'
    }
  },
  mounted() {
    setInterval(this.changeRecruiter, 5000)
    setInterval(this.nextPicture, 5000)
    var userDesc = this.$refs.userDesc
    var viewMore = this.$refs.viewMore

    if (userDesc!==undefined&&viewMore!==undefined){
      if (userDesc.clientHeight <= 80) {
        viewMore.style.display = "none"
      }
      this.$forceUpdate()
    }
  },
  computed:{
    ...mapState(['company'])
  }
}
</script>
<style scoped lang="less">
    @import "../../../../assets/styles/variables";
    .company-intro {
        display: flex;
        flex-flow: column nowrap;
        .hot-position {
            display: flex;
            flex-flow: column nowrap;
            padding: 20rem /@font-size 165rem /@font-size 0 165rem /@font-size;
            background-color: #f2f2f5;
            .title-wrapper {
                display: flex;
                justify-content: space-between;
                padding-bottom: 20rem /@font-size;

                span {
                    font-weight: 400;
                    font-size: 16rem /@font-size;

                }
            }
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;

                li {
                    flex: 1;
                    margin-right: 20rem /@font-size;
                    margin-bottom: 20rem /@font-size;
                    background-color: @white;
                    padding: 20rem /@font-size;

                    &:nth-child(3) {
                        margin-right: 0;
                    }

                    .name-wrapper {
                        display: flex;
                        justify-content: space-between;

                        span {
                            font-size: 16rem /@font-size;

                            &.salary {
                                color: @salaryColor;
                            }

                            &.name {
                                line-height: 30rem /@font-size;
                            }
                        }


                    }

                    .gray {
                        font-size: 14rem /@font-size;
                        color: @gray;
                    }
                }
            }
        }
        .company-detail {
            display: flex;
            width: 1184rem /@font-size;
            margin: 0 auto;
            padding-top: 20rem /@font-size;
            background-color: @white;

            .company-detail-left {
                border-right: 1rem /@font-size #f5f7f9 solid;
                flex: 247;
                padding-right: 20rem /@font-size;
                .business-info {
                    display: flex;
                    flex-flow: column nowrap;
                    .business-detail {
                        display: flex;
                        flex-flow: column nowrap;
                        font-size: 0;
                        .business-name {
                            display: flex;
                            font-size: 16rem /@font-size;
                            font-weight: 400;
                            line-height: 36rem /@font-size;
                            color: #424a5e;
                            margin-top: 0;
                            justify-content: space-between;
                            .source {
                                color: @gray;
                            }
                        }
                        .detail-content {
                            position: relative;
                            font-size: 14rem /@font-size;
                            border: 1rem /@font-size #d9dadf solid;
                            padding: 15rem /@font-size 25rem /@font-size;
                            padding-right: 12rem /@font-size;
                            margin: 0;
                            overflow: hidden;

                            li {
                                display: inline-block;
                                vertical-align: top;
                                width: 220rem /@font-size;
                                font-size: 14rem /@font-size;
                                padding: 10rem /@font-size 0;
                                line-height: 20rem /@font-size;

                                &.col-auto {
                                    width: auto;
                                    display: block;
                                }
                                .t {
                                    color: @gray;
                                }
                            }
                            .show-business-all {
                                position: absolute;
                                right: 20rem /@font-size;
                                top: 20rem /@font-size;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .company-base-info{
                    ul{
                        display:flex;
                        flex-flow: column nowrap;
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        line-height: 30rem /@font-size;
                    }
                }
            }

            .company-condition {
                flex: 85;
                display: flex;
                flex-flow: column nowrap;
                padding-left: 30rem /@font-size;

                .leader-intro {
                    display: flex;
                    flex-flow: column nowrap;

                    .title {
                        font-size: 15rem /@font-size;
                        font-weight: 700;
                        color: #424a5e;
                        //line-height: 50rem /@font-size;
                        padding: 0;
                        margin-bottom: 15rem /@font-size;

                    }

                    .slider-dot {
                        display: flex;
                        margin-left: 0;

                        .dot {
                            cursor: pointer;
                            display: block;
                            width: 15rem /@font-size;
                            height: 3rem /@font-size;
                            margin-left: 10rem /@font-size;

                            &:nth-child(1) {
                                margin-left: 0;
                            }
                        }

                    }

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        li {
                            .user-base-info {
                                display: flex;
                                align-items: center;

                                .photo {
                                    width: 60rem /@font-size;
                                    height: 60rem /@font-size;
                                    border-radius: 30rem /@font-size;
                                }

                                p {
                                    margin-left: 20rem /@font-size;
                                    display: flex;
                                    flex-flow: column nowrap;
                                    justify-content: center;

                                    .name {
                                        font-size: 20rem /@font-size;
                                        margin-bottom: 5rem /@font-size;

                                    }

                                    .title {
                                        font-size: 16rem /@font-size;

                                    }
                                }
                            }

                            .user-desc {
                                position: relative;
                                color: #61687c;
                                font-size: 14rem /@font-size;
                                line-height: 36rem /@font-size;
                                height: 72rem /@font-size;
                                overflow: hidden;
                            }

                            .view-more {
                                cursor: pointer;
                                width: 50rem /@font-size;
                                height: 25rem /@font-size;
                                background-color: #ffffff;
                                position: absolute;
                                right: 0;
                                bottom: 0;
                                display: block;
                                z-index: 1000;
                            }
                        }
                    }

                }

                .company-environment {
                    position: relative;

                    .btn-prev {
                        display: none;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        width: 50rem /@font-size;
                        height: 50rem /@font-size;
                        line-height: 50rem /@font-size;
                        text-align: center;
                        background-color: #0C0C0C;
                        color: #ffffff;
                        font-size: 16rem /@font-size;
                    }

                    .btn-next {
                        display: none;
                        font-size: 16rem /@font-size;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        width: 50rem /@font-size;
                        height: 50rem /@font-size;
                        line-height: 50rem /@font-size;
                        text-align: center;
                        background-color: #0C0C0C;
                        color: #ffffff;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;

                        li {
                            img {
                                width: 298rem /@font-size;
                                height: 170rem /@font-size;
                                transition: .5s;
                            }
                        }
                    }
                }

                .company-position {
                    display: flex;
                    flex-flow: column wrap;
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style-type: none;

                        li {
                            display: flex;
                            align-items: center;
                            height: 90rem /@font-size;
                            border-bottom: 1rem /@font-size solid @borderColor;

                            img {
                                width: 60rem /@font-size;
                                height: 60rem /@font-size;
                                border-radius: 30rem /@font-size;
                            }

                            .text {
                                padding-left: 15rem /@font-size;
                                margin: 0;
                                display: flex;
                                flex-flow: column wrap;

                                .name-wrapper {
                                    margin: 0;

                                    .name, .title {
                                        font-size: 16rem /@font-size;
                                    }
                                }

                                .desc {
                                    margin: 0;
                                    padding-top: 10rem /@font-size;
                                    font-size: 14rem /@font-size;
                                    line-height: 20rem /@font-size;
                                    color: #61687c;
                                }
                            }
                        }
                    }
                    .view-more{
                        height: 40rem /@font-size;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14rem /@font-size;
                        border: 2rem /@font-size solid #e3e7ed;
                        color: #9fa3b0;
                        cursor:pointer;
                        :hover{
                            color: #4a4e52;
                        }
                    }
                    .updated-time{
                        color: @gray;
                        font-size: 14rem /@font-size;
                        line-height: 20rem /@font-size;
                        margin-top: 20rem /@font-size;
                    }
                }
            }
        }

    }
</style>
