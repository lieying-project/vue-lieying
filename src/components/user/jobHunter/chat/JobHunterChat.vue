<template>
    <div class="main">
        <div class="chat-container">
            <div class="chat-wrap">
                <div class="title">联系人</div>
                <ul class="chat-user-list">
                    <li class="chat-user" ref="chatUser" v-for="(recruiter,index) in $store.state.chatRecruiters"
                        :key="index"
                        :style="{backgroundColor: currentRecruiter.id==recruiter.id?'#F2F5FA':'#ffffff'}"
                        @click="setCurrentRecruiterIndex(index)" @mouseover="changeUserBackground(index,0)"
                        @mouseout="changeUserBackground(index,1)">
                        <img :src="require(`@/assets/${recruiter.photo}`)">
                        <div class="text">
                            <p class="name-wrap">
                                <span class="name">{{recruiter.name}}</span>
                                <span class="date"></span>
                            </p>
                            <p class="company-wrap">
                                <!--                                <span class="company-name"-->
                                <!--                                      v-if="recruiter.company!=null">{{recruiter.company.name}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;-->
                                <span class="position">招聘者</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chat">
                <div class="title">
                    <p class="fl" v-if="currentRecruiter.id!=0">
                        <span class="name">{{currentRecruiter.name}}</span>
                        <span class="company"
                              v-if="currentRecruiter.company!=null">{{currentRecruiter.company.name}}</span>
                        <span class="position">{{currentRecruiter.position}}</span>
                    </p>
                    <i class="iconfont   icon-zhiding "></i>
                </div>
                <div class="chat-position">
                   <!-- <span>沟通职位</span>
                    <span class="position">python开发工程师(初级)</span>
                    <span class="salary">7-12k</span>
                    <span class="address">烟台</span>-->
                </div>
                <ul class="chat-message-list" v-if="currentRecruiter.id!=0">
                    <li v-for="(chat,index) in  this.$store.state.jobHunterChats" :key="index">
                        <div class="message-publish-time" v-if="chat.recruiter.id==currentRecruiter.id">{{chat.sentDate | formatDate}}</div>
                        <div class="message-text" v-if="chat.senderFlag==false&&chat.recruiter!=null&&chat.recruiter.id==currentRecruiter.id">
                            <img :src="require(`@/assets/${chat.recruiter.photo}`)">
                            <span class="content" v-html="chat.content"></span>
                        </div>
                        <div class="right-message-text"
                             v-if="chat.senderFlag==true&&chat.jobHunter!=null&&chat.recruiter.id==currentRecruiter.id ">
                            <img :src="require(`@/assets/${chat.jobHunter.photo}`)">
                            <span class="content" v-html="chat.content"></span>
                        </div>
                    <li/>
                </ul>
                <div class="send-message">
                    <quill-editor v-model="content" @blur="editorBlur" class="editor"></quill-editor>
                    <el-button type="primary" class="send-btn" @click="sendMessage">发送</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "JobHunterChat",
  data() {
    return {
      recruiters: [
        {
          id: 1,
          name: '彭宇发',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '烟台链家'},
          position: '商圈经理',
          lastRelyDate: '9月13日'
        },
        {
          id: 3,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 4,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 5,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 6,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 7,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 8,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 9,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 10,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 11,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 12,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 13,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        },
        {
          id: 14,
          name: '于腾',
          photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png'),
          company: {id: 1, name: '杨桐'},
          position: 'HR',
          lastRelyDate: '9月12日'
        }
      ],
      currentRecruiterIndex: 0,
      position: {id: 1, name: '市场营销', city: '烟台', salary: '7-12k'},
      chats: [
        {
          id: 1,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          sender: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          receiver: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        },
        {
          id: 2,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          receiver: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          sender: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        },
        {
          id: 3,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          sender: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          receiver: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        },
        {
          id: 4,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          receiver: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          sender: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        },
        {
          id: 5,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          sender: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          receiver: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        },
        {
          id: 6,
          content: '底薪4500+提成+五险一金，公司诚招储备店经理/房产经纪人，看了你的简历非常符合我们在招岗位，请问房产方面的工作考虑吗？',
          publishTime: '9月12日',
          receiver: {
            id: 1,
            name: '王先生',
            role: '招聘者',
            photo: require('../../../../assets/imgs/cb711967d6a627105a813f22f4b090510e342922abe6c27227865159c957b680_s.png')
          },
          sender: {
            id: 1,
            name: '陈xx',
            role: '求职者',
            photo: require('../../../../assets/imgs/ee2d38c0353b7a8896d1091e399a3abb7594a0b2c8ce5b06a274839345755233_s.png')
          }
        }
      ],
      content: '',
      websock: '',
      jobHunterId: '',
      chat: '',
      currentRecruiter: {
        id: 0,
        photo: ''
      }
    }
  },
  methods: {
    setCurrentRecruiterIndex(index) {
      this.currentRecruiter = this.$store.state.chatRecruiters[index]
      console.log(this.currentRecruiterIndex)
    },
    changeUserBackground(index, i) {  //修改用户背景
      if (index == this.currentRecruiter.id) { //如果当前用户被选中,则不修改
        return
      }
      const currentChatUser = this.$refs.chatUser[index] //找到当前被修改的用户
      //console.log(currentChatUser)
      if (i == 0) { //如果鼠标移到上面
        currentChatUser.style.backgroundColor = '#F2F5FA'
      } else if (i == 1) {//如果鼠标离开上面
        currentChatUser.style.backgroundColor = '#ffffff'
      }
    },
    editorBlur() {
      console.log(this.content)
    },
    sendMessage() {
      if (this.currentRecruiter.id == 0) {
        alert('请选择联系人')
        return
      }
      //console.log(this.currentRecruiter)
      this.chat = {
        jobHunter: {
          id: this.jobHunterId,
          photo: this.jobHunter.photo
        },
        recruiter: {
          id: this.currentRecruiter.id,
          photo: this.currentRecruiter.photo
        },
        senderFlag: 1,
        content: this.content,
        sentDate: new Date()
      }
      this.websocketsend(JSON.stringify(this.chat))
    },
    initWebSocket(url) {
      console.log("初始化WebSocket")
      this.websock = new WebSocket(url)
      this.websock.onopen = this.websocketopen
      this.websock.onmessage = this.websocketonmessage
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketopen() { // 连接建立之后执行send方法发送数据
      // this.websocketsend("求职者"+this.jobHunterId+"建立连接")
    },
    websocketonmessage(e) {//数据接收
      console.log("接收到数据:")
      console.log(e.data)
      this.chatData=JSON.parse(e.data)
      if (Array.isArray(this.chatData)) {
        this.$store.state.jobHunterChats = this.chatData
      } else {
        this.$store.state.jobHunterChats.push(this.chatData)
      }
    },
    websocketsend(data) {//发送数据
      console.log("发送数据:")
      console.log(data)
      this.websock.send(data)
    },
    websocketclose(e) {//关闭
      console.log("已关闭连接:" + e)
    },
    websocketonerror() {//错误
      console.log('WebSocket连接失败')
    }
  },
  mounted() {
    this.jobHunterId = this.$route.params.jobHunterId
    this.initWebSocket("ws://localhost:8080/lieying/websocket/" + this.jobHunterId + "/jobHunter")
    this.$store.dispatch("getChatRecruitersByJobHunterIdAction", this.jobHunterId)

  },
  computed: {
    ...mapState(['jobHunter'])
  }
}
</script>

<style scoped lang="less">

    @import "../../../../assets/styles/variables";

    .main {
        width: 100%;
        height: 100%;
        background-color: @backgroundColor;

        .chat-container {
            width: 1184rem /@font-size;
            margin: 0 auto;
            display: flex;

            .chat-wrap {
                width: 333rem /@font-size;
                display: flex;
                flex-flow: column nowrap;
                margin-top: 10rem /@font-size;

                .title {
                    width: 310rem /@font-size;
                    line-height: 44rem /@font-size;
                    height: 46rem /@font-size;
                    color: @gray;
                    border-bottom: 2rem /@font-size solid #f2f2f5;
                    background-color: #fbfbfc;
                    white-space: nowrap;
                    padding-left: 20rem /@font-size;
                    margin-bottom: 3rem /@font-size;
                    font-size: 14rem /@font-size;
                }

                .chat-user-list {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    background-color: #FFFFFF;
                    height: 600rem /@font-size;
                    overflow: auto;

                    :hover {
                        background-color: #F2F5FA;
                        cursor: pointer;
                    }

                    .chat-user {
                        display: flex;
                        align-items: center;
                        padding-left: 10rem /@font-size;
                        height: 50rem /@font-size;
                        padding: 10rem /@font-size 20rem /@font-size;
                        border-bottom: 1rem /@font-size solid #f4f4f6;


                        img {
                            width: 46rem /@font-size;
                            height: 46rem /@font-size;
                            border-radius: 23rem /@font-size;
                        }

                        .text {
                            flex: 1;
                            display: flex;
                            flex-flow: column nowrap;
                            margin-left: 20rem /@font-size;

                            .name-wrap {
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                font-size: 14rem /@font-size;
                                line-height: 20rem /@font-size;
                                margin: 0;

                                .date {
                                    color: @gray;
                                    font-size: 12rem /@font-size;
                                }
                            }

                            .company-wrap {
                                font-size: 12rem /@font-size;
                                color: @gray;
                                margin: 0;
                                line-height: 20rem /@font-size;
                            }
                        }
                    }
                }
            }

            .chat {
                width: 820rem /@font-size;
                //background-color: #4a4e52;
                display: flex;
                flex-flow: column nowrap;
                margin-top: 10rem /@font-size;

                .title {
                    display: flex;
                    justify-content: space-between;
                    line-height: 44rem /@font-size;
                    height: 46rem /@font-size;
                    color: @gray;
                    border-bottom: 2rem /@font-size solid #f2f2f5;
                    background-color: #fbfbfc;
                    white-space: nowrap;
                    padding-left: 30rem /@font-size;
                    padding-right: 20rem /@font-size;
                    margin-bottom: 3rem /@font-size;
                    align-items: center;
                    font-size: 14rem /@font-size;

                    .fl {
                        .name {
                        }

                        .company, .position {
                            margin-left: 15rem /@font-size;
                        }
                    }

                    i {
                        font-size: 30rem /@font-size;
                    }
                }

                .chat-position {
                    display: flex;
                    align-items: center;
                    background-color: #FAFAFA;
                    height: 50rem /@font-size;
                    padding-left: 30rem /@font-size;
                    color: #61687c;

                    .position {
                        color: #00c2b3;
                        padding-left: 15rem /@font-size;
                    }

                    .salary {
                        padding-left: 15rem /@font-size;
                    }

                }

                .chat-message-list {
                    height: 300rem /@font-size;
                    overflow: auto;
                    background-color: #FFFFFF;
                    padding: 24rem /@font-size 0;
                    margin: 0;

                    li {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        .message-publish-time {
                            text-align: center;

                        }

                        .message-text {
                            display: flex;
                            align-items: center;
                            margin-left: 20rem /@font-size;

                            img {
                                width: 36rem /@font-size;
                                height: 36rem /@font-size;
                                border-radius: 18rem /@font-size;

                            }

                            .content {
                                margin-left: 20rem /@font-size;
                                margin-bottom: 10rem /@font-size;
                                margin-top: 10rem /@font-size;
                                padding: 5rem /@font-size 10rem /@font-size;
                                background-color: #F2F5FA;
                                color: #61687c;
                                font-size: 14rem /@font-size;
                                max-width: 400rem /@font-size;
                            }
                        }

                        .right-message-text {
                            display: flex;
                            flex-direction: row-reverse;
                            align-items: center;
                            margin-right: 20rem /@font-size;

                            img {
                                width: 36rem /@font-size;
                                height: 36rem /@font-size;
                                border-radius: 18rem /@font-size;

                            }

                            .content {
                                margin-right: 20rem /@font-size;
                                margin-bottom: 10rem /@font-size;
                                margin-top: 10rem /@font-size;
                                padding: 5rem /@font-size 10rem /@font-size;
                                background-color: #F2F5FA;
                                color: #61687c;
                                font-size: 14rem /@font-size;
                                max-width: 400rem /@font-size;

                            }
                        }
                    }
                }

                .send-message {
                    position: relative;
                    background-color: #FFFFFF;
                    height: 200rem /@font-size;

                    .send-btn {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }

                    .editor {

                        height: 150rem /@font-size !important;
                    }
                }
            }
        }
    }

    //修改滚动条样式
    .chat-user-list::-webkit-scrollbar, .chat-message-list::-webkit-scrollbar {
        width: 7rem /@font-size;
    }

    .chat-user-list::-webkit-scrollbar-track, .chat-message-list::-webkit-scrollbar-track {
        //background-color: red;
        background-color: #F1F1F1;
        -webkit-border-radius: 2rem /@font-size;
        -moz-border-radius: 2rem /@font-size;
        border-radius: 2rem /@font-size;
    }

    .chat-user-list::-webkit-scrollbar-thumb, .chat-message-list::-webkit-scrollbar-thumb {
        background-color: #DDDDDD;
        -webkit-border-radius: 2rem /@font-size;
        -moz-border-radius: 2rem /@font-size;
        border-radius: 2rem /@font-size;
    }
</style>
