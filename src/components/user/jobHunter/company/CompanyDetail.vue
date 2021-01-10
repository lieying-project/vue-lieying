<template>
    <div class="main">
        <div class="company-banner" ref="companyBanner">
            <div class="info-primary">
                <div class="company-info">
                    <!--                    <img src="../../../../assets/imgs/fe06f1bf47e665a75138bfe72f4588cde31cdba4a5477d6038a6f76662743c7f_s.jpg"-->
                    <!--                         class="company-image">-->
                    <img :src="company.sign" class="company-image">
                    <div class="company-name-wrapper">
                        <span class="name">{{this.$store.state.company.name}}</span>
                        <p v-if="this.$store.state.company!=null&&this.$store.state.company!=''">
                                                <span v-if="this.$store.state.company.financingStage!=null">
                                                    {{this.$store.state.company.financingStage.name}}
                                                </span>
                            <Vdot/>
                            <span v-if="this.$store.state.company.companyScale!=null">
                                                    {{this.$store.state.company.companyScale.name}}
                                                </span>
                            <Vdot/>
                            <span v-if="this.$store.state.company.industry!=null">
                                                    {{this.$store.state.company.industry.name}}
                                                </span>
                        </p>
                    </div>
                </div>
                <div class="company-position-info">
                    <div class="position-info">
                        <a>
                            <b v-if="this.$store.state.company.positions!=null">{{this.$store.state.company.positions.length}}</b>
                            <span> 在招职位</span>
                        </a>
                        <a>
                            <b v-if="this.$store.state.company.recruiters!=null">{{this.$store.state.company.recruiters.length}}</b>
                            <span>位BOSS</span>
                        </a>
                    </div>
<!--                    <div class="op">-->
<!--                        <a>-->
<!--                            <i class="el-icon-postcard"></i>-->
<!--                            <span>完善在线简历</span>-->
<!--                        </a>-->
<!--                        <a>-->
<!--                            <i class="el-icon-upload2"></i>-->
<!--                            <span>上传附件简历</span>-->
<!--                        </a>-->
<!--                    </div>-->
                </div>
            </div>
            <div class="company-tab">
                <a @click="toggle(index)" v-for="(tab,index) in tabs" :key="index"
                   :class="{active:activeIndex==index,activeColor:activeIndex==index}">
                    {{tab.name}}
                    <span class="num" v-if="index==1&&$store.state.company.positions!=null">({{$store.state.company.positions.length}})</span>
                </a>

            </div>
        </div>
        <div class="small-banner" :style="{display:bannerDisplayed}">
            <div class="info-primary">
                <div class="company-info">
                    <img src="../../../../assets/imgs/fe06f1bf47e665a75138bfe72f4588cde31cdba4a5477d6038a6f76662743c7f_s.jpg"
                         class="company-image">
                    <div class="company-name-wrapper">
                        <span class="name">{{this.$store.state.company.name}}</span>
                        <p v-if="this.$store.state.company!=null&&this.$store.state.company!=''">
                                                <span v-if="this.$store.state.company.financingStage!=null">
                                                    {{this.$store.state.company.financingStage.name}}
                                                </span>
                            <Vdot/>
                            <span v-if="this.$store.state.company.companyScale!=null">
                                                    {{this.$store.state.company.companyScale.name}}
                                                </span>
                            <Vdot/>
                            <span v-if="this.$store.state.company.industry!=null">
                                                    {{this.$store.state.company.industry.name}}
                                                </span>
                        </p>
                    </div>
                </div>
                <div class="company-position-info">
<!--                    <div class="op">-->
<!--                        <a>-->
<!--                            <i class="el-icon-postcard"></i>-->
<!--                            <span>完善在线简历</span>-->
<!--                        </a>-->

<!--                        <a>-->
<!--                            <i class="el-icon-upload2"></i>-->
<!--                            <span>上传附件简历</span>-->
<!--                        </a>-->
<!--                    </div>-->
                </div>
            </div>
            <div class="company-tab">
                <a @click="toggle(index)" v-for="(tab,index) in tabs" :key="index"
                   :class="{active:activeIndex==index,activeColor:activeIndex==index}">
                    {{tab.name}}

                    <span class="num" v-if="index==1&&$store.state.company.positions!=null">({{$store.state.company.positions.length}})</span>
                </a>

            </div>
        </div>
        <div v-show="activeIndex==0">
            <CompanyIntro/>
        </div>
        <div v-show="activeIndex==1">
            <CompanyPosition/>
        </div>
    </div>
</template>
<script>
import Vdot from "../../../common/Vdot";
import CompanyIntro from "./CompanyIntro";
import CompanyPosition from "./CompanyPosition";
import {mapState} from 'vuex'
export default {
  name: "CompanyDetail",
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {name: '公司简介'},
        {name: '招聘职位'}
      ],
      bannerDisplayed: "none"
    }
  },
  components: {CompanyPosition, CompanyIntro, Vdot},
  methods: {
    toggle(index) {
      this.activeIndex = index
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var companyBanner = this.$refs.companyBanner
      if (companyBanner !== undefined) {//等待该dom初始化完成
        var companyBannerHeight = companyBanner.offsetHeight
        if (scrollTop > companyBannerHeight) {
          this.bannerDisplayed = "block"
        } else {
          this.bannerDisplayed = "none"
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  created() {
    const companyId = this.$route.params.id
    this.$store.dispatch('getCompanyByIdAction', companyId)
    this.$store.dispatch('getAllPositionCategoriesAction')
  },
  computed: {
    ...mapState(['company'])
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

        .company-banner {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            padding: 24rem /@font-size 0 0 0;
            flex-flow: column nowrap;
            background-color: #424A61;

            .info-primary {
                margin: 0 auto;
                width: 1184rem /@font-size;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                padding-bottom: 20rem /@font-size;
                align-items: center;

                .company-info {
                    display: flex;

                    .company-image {
                        width: 80rem /@font-size;
                        height: 80rem /@font-size;
                        border-radius: 12rem /@font-size;

                    }

                    .company-name-wrapper {
                        display: flex;
                        flex-flow: column nowrap;
                        margin-left: 20rem /@font-size;
                        justify-content: center;

                        .name {
                            color: #FFFFFF;
                            font-size: 32rem /@font-size;
                        }

                        p {
                            span {
                                color: #ffffffb3;
                                font-size: 14rem /@font-size;
                            }
                        }
                    }

                }

                .company-position-info {
                    .position-info {
                        color: #ffffff;
                        display: flex;
                        width: 300rem /@font-size;
                        margin-bottom: 25rem /@font-size;

                        a {

                            flex: 1;
                            display: flex;
                            flex-flow: column nowrap;
                            font-size: 16rem /@font-size;

                            b {

                                font-size: 28rem /@font-size;
                                line-height: 50rem /@font-size;

                                text-align: right;
                                margin-right: 32rem /@font-size;
                            }

                            span {
                                text-align: right;
                                margin-right: 30rem /@font-size;
                            }

                        }
                    }

                    .op {
                        display: flex;

                        color: #5ed5c8;
                        font-size: 16rem /@font-size;

                        a {
                            flex: 1;

                            span {
                                margin-left: 10rem /@font-size;
                            }
                        }

                    }

                }
            }

            .company-tab {
                margin: 0 auto;
                width: 1184rem /@font-size;
                display: flex;
                font-size: 16rem /@font-size;

                a {
                    padding-bottom: 15rem /@font-size;
                    height: 16rem /@font-size;
                    line-height: 16rem /@font-size;
                    color: #FFFFFF;
                    cursor: pointer;

                    &:nth-child(2) {
                        margin-left: 20rem /@font-size;
                    }

                    &.active {
                        border-bottom: 2rem /@font-size solid #00c2b3;
                    }

                    &.activeColor {
                        color: #00c2b3;
                    }

                }
            }
        }

        .small-banner {
            top: 0;
            position: fixed;
            z-index: 1000;
            width: 100%;
            padding: 20rem /@font-size 0 0 0;
            flex-flow: column nowrap;
            background-color: #424A61;

            .info-primary {
                margin: 0 auto;
                width: 1184rem /@font-size;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                padding-bottom: 20rem /@font-size;

                .company-info {
                    display: flex;

                    .company-image {
                        width: 80rem /@font-size;
                        height: 80rem /@font-size;
                        border-radius: 12rem /@font-size;

                    }

                    .company-name-wrapper {
                        display: flex;
                        flex-flow: column nowrap;
                        margin-left: 20rem /@font-size;
                        justify-content: center;

                        .name {
                            color: #FFFFFF;
                            font-size: 32rem /@font-size;
                        }

                        p {
                            span {
                                color: #ffffffb3;
                                font-size: 14rem /@font-size;
                            }
                        }
                    }

                }

                .company-position-info {
                    display: flex;
                    align-items: center;

                    .op {

                        display: flex;
                        color: #5ed5c8;
                        font-size: 16rem /@font-size;

                        a {
                            flex: 1;

                            span {
                                margin-left: 10rem /@font-size;
                            }
                        }

                    }

                }
            }

            .company-tab {
                margin: 0 auto;
                width: 1184rem /@font-size;

                display: flex;
                font-size: 16rem /@font-size;


                a {
                    padding-bottom: 15rem /@font-size;
                    height: 16rem /@font-size;
                    line-height: 16rem /@font-size;
                    color: #FFFFFF;
                    cursor: pointer;

                    &:nth-child(2) {
                        margin-left: 20rem /@font-size;
                    }

                    &.active {
                        border-bottom: 2rem /@font-size solid #00c2b3;
                    }

                    &.activeColor {
                        color: #00c2b3;
                    }

                }
            }
        }
    }
</style>
