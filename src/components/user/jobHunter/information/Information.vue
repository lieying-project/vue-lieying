<template>
    <div class="information">

        <div class="main">
            <div class="list-news">
                <ul>
                    <li v-for="(information,index) in  informations" :key="index">
                        <div class="img-wrapper">
                            <a class="img">
                                <img src="../../../../assets/imgs/6c3e59dfa1794fd1ed3f95c33e1bd429cfcd208495d565ef66e7dff9f98764da.png"
                                     @click="viewDetailInformation(information.id)" >
                            </a>

                        </div>
                        <div class="text">
                            <p class="title">
                                <a @click="viewDetailInformation(information.id)"
                                >{{information.title}}</a></p>
                            <div class="content" v-html="information.content"></div>
                            <div class="info">
                                <span>{{information.administrator.username}}</span>
                                ·
                                <span>{{timestampToTime(information.createdTime)}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('getAllInformationsAction')
  },
  computed:{
    ...mapState(['informations'])
  },
  methods:{
    viewDetailInformation(id){
      console.log(id)
      this.$router.push("/information/"+id)
    },
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
  }
};
</script>
<style scoped lang="less">
    .information{
        background-color: #F5F7F9;
        .main{
            width: 1184rem /@font-size;
            margin: 0 auto;
            .list-news{
                background-color: #FFFFFF;
                padding: 25rem /@font-size 100rem /@font-size;
                ul{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-flow:  column nowrap;
                    li{
                        padding: 35rem /@font-size 0;
                        border-bottom: 1rem /@font-size #ededed solid;
                        display: flex;
                        align-items: center;
                        .img-wrapper{
                            .img:hover  img{
                                cursor: pointer;
                                transform: scale(1.05,1.05);
                            }
                            .img{
                                img{
                                    width: 300rem /@font-size;
                                    height: 150rem /@font-size;
                                }


                            }

                        }
                        .text{
                            display: flex;
                            flex-flow: column nowrap;
                            margin-left: 30rem /@font-size;
                            .title{
                                cursor: pointer;
                                :hover {
                                    color: #2ACFC9;
                                }
                                a{
                                    text-decoration: none;

                                    -webkit-transition: all linear .2s;
                                    transition: all linear .2s;
                                    color: #414a60;
                                    font-size: 20rem /@font-size;


                                }
                            }
                            .content{
                                height: 75rem /@font-size;
                                line-height: 25rem /@font-size;
                                color: #666;
                                padding: 20rem /@font-size 0 0;
                                margin-bottom: 15rem /@font-size;
                                overflow: hidden;
                            }
                            .info{
                                color: #999999;
                                font-size: 14rem /@font-size;
                            }
                        }

                    }
                }
            }
        }
    }
</style>
