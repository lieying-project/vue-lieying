<template>

    <div class="information-detail">
        <div class="main">

            <div class="content-detail">
                <h1 class="title">{{information.title}}</h1>
                <div class="info">

                    <p class="type">{{information.type}}</p>
                    <div class="right-info">
                        <p class="author" v-if="information.administrator!=null">{{information.administrator.username}}</p>
                        ·
                        <p>{{timestampToTime(information.createdTime)}}</p>
                    </div>

                </div>
                <div class="content" v-html="information.content"></div>
            </div>
<!--            <div class="hot-information">-->
<!--                <div class="title-wrapper">-->
<!--                    <div class="line"></div>-->
<!--                    <span class="title">热门资讯</span>-->
<!--                </div>-->
<!--                <ul>-->
<!--                    <li v-for="information in hotInformations">-->
<!--                        <div class="title">-->
<!--                            <a>{{information.title}}</a>-->
<!--                        </div>-->
<!--                        <div class="info">-->
<!--                            <span class="type">{{information.type}}</span>-->
<!--                            <div class="right-info">-->
<!--                                <span>{{information.administrator.username}}</span>-->
<!--                                ·-->
<!--                                <span>{{timestampToTime(information.createdTime)}}</span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                </ul>-->

<!--            </div>-->
        </div>
    </div>
</template>

<script>
import TitleWrapper from "../../../common/TitleWrapper";
import {mapState} from 'vuex'
export default {
  name: "InformationDetail",
  components: {TitleWrapper},
  data() {
    return {
      hotInformations: [
        {id:2,title:'双11企惠季，BOSS直聘X高德地图给你送福利！',content:'今年的双11已经告一段落一夜之间打工人都变成了吃土人何以解忧？唯有努力工作！福利时间到！↓↓↓求职招聘上BOSS直聘企业用车就上高德打车现在用高德打车企业版充1000元返1000元充3000元返300',type:'type',
          photo:require('../../../../assets/imgs/6c3e59dfa1794fd1ed3f95c33e1bd429cfcd208495d565ef66e7dff9f98764da.png',),
          administrator:{id:1,username:'xxx'},
          createdTime:'2019-12-12'},
        {id:23,title:'双11企惠季，BOSS直聘X高德地图给你送福利！',content:'今年的双11已经告一段落一夜之间打工人都变成了吃土人何以解忧？唯有努力工作！福利时间到！↓↓↓求职招聘上BOSS直聘企业用车就上高德打车现在用高德打车企业版充1000元返1000元充3000元返300',type:'type',
          photo:require('../../../../assets/imgs/fb644eaa08bb467392078a23efe0a71bcfcd208495d565ef66e7dff9f98764da.png'),
          administrator:{id:1,username:'xxx'},
          createdTime:'2019-12-12'},
        {id:12,title:'双11企惠季，BOSS直聘X高德地图给你送福利！',content:'今年的双11已经告一段落一夜之间打工人都变成了吃土人何以解忧？唯有努力工作！福利时间到！↓↓↓求职招聘上BOSS直聘企业用车就上高德打车现在用高德打车企业版充1000元返1000元充3000元返300',type:'type',
          photo:require('../../../../assets/imgs/fb644eaa08bb467392078a23efe0a71bcfcd208495d565ef66e7dff9f98764da.png'),
          administrator:{id:1,username:'xxx'},
          createdTime:'2019-12-12'},
      ]
    }
  },
  created() {
    const informationId = this.$route.params.id
    console.log(informationId)
  },
  mounted(){
    const id=this.$route.params.id
    this.$store.dispatch('getInformationByIdAction',id)
  },
  computed:{
    ...mapState(['information']),

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
    }
  }
}
</script>

<style scoped lang="less">

    .information-detail {
        padding-top: 15rem /@font-size;
        background-color: #F5F7F9;

        .main {
            width: 1184rem /@font-size;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .content-detail {
                display: flex;
                flex-flow: column nowrap;
                padding: 35rem /@font-size 45rem /@font-size 45rem /@font-size;
                width: 700rem /@font-size;
                margin-bottom: 50rem /@font-size;
                background-color: #FFFFFF;

                .title {
                    font-size: 30px;
                    line-height: 50px;
                    font-weight: 400;
                }

                .info {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .right-info {
                        display: flex;
                        align-items: center;
                        color: #999999;
                        font-size: 14rem /@font-size;
                    }

                    .type {
                        color: #999999;
                        font-size: 14rem /@font-size;
                    }
                }

                .content {

                }
            }

            .hot-information {
                width: 298rem /@font-size;
                background-color: #FFFFFF;
                margin-bottom: 50rem /@font-size;
                padding: 40rem /@font-size 35rem /@font-size 15rem /@font-size;

                .title-wrapper {
                    display: flex;
                    //flex-flow: column nowrap;
                    height: 50rem /@font-size;
                    margin-top: 10rem /@font-size;

                    .title {
                        font-size: 17rem /@font-size;
                        font-weight: 500;
                        color: #111111;
                        //line-height: 50rem /@font-size;
                        padding: 0;
                        margin-bottom: 0;
                        margin-left: 10rem /@font-size;

                    }

                    .line {
                        padding-top: 10rem /@font-size;
                        display: block;
                        width: 3rem /@font-size;
                        background-color: #5DD5C8;
                        height: 10rem /@font-size;

                    }
                }

                ul {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-flow: column nowrap;

                    li {
                        // padding: 35rem /@font-size 0;
                        border-bottom: 1rem /@font-size #ededed solid;
                        display: flex;
                        flex-flow: column nowrap;

                        //padding: 15rem /@font-size 0;

                        .title {
                            height: 50rem /@font-size;


                            margin: 10rem /@font-size 0;
                            cursor: pointer;

                            :hover {
                                color: #2ACFC9;
                            }

                            a {
                                text-decoration: none;

                                -webkit-transition: all linear .2s;
                                transition: all linear .2s;
                                color: #414a60;
                                font-size: 20rem /@font-size;

                            }
                        }

                        .info {
                            margin-bottom: 10rem /@font-size;
                            color: #999999;
                            font-size: 14rem /@font-size;
                            display: flex;
                            justify-content: space-between;
                            .type{

                            }
                            .right-info{

                            }
                        }

                    }
                }

            }
        }
    }
</style>
