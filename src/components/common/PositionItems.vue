<template>
    <ul class="position-items">
        <li v-for="(position,index) in positions" :key="index" @mouseover="goToCommunicate(index)"
            @mouseout="continueView(index)">
            <div class="position-info">
                <h3 class="name-wrapper">
                    <span class="name">{{position.name}}</span>
                    <span class="address">[{{position.address}}]</span>
                    <span class="date">发布于[{{position.publishTime}}]</span>
                </h3>
                <p>
                    <span class="salary">{{position.salary}}</span>
                    <Vdot :color="'#9fa3b0'"/>
                    <span class="experience">{{position.experience}}</span>
                    <Vdot :color="'#9fa3b0'"/>
                    <span class="education" v-if="position.education!=null">{{position.education.name}}</span>
                </p>
            </div>
            <div class="recruiter-info" ref="recruiterInfo" v-if="position.recruiter!=null">
                <img :src="position.recruiter.photo">
                <Vdot :color="'#9fa3b0'"/>
                <span class="name">{{position.recruiter.name}}</span>
                <Vdot :color="'#9fa3b0'"/>
                <span class="position">{{position.recruiter.position}}</span>
            </div>
            <button class="communicate-btn" ref="communicateBtn">立即沟通</button>
        </li>
    </ul>
</template>

<script>
import Vdot from "./Vdot";

export default {
  name: "PositionList",
  components: {Vdot},
  props: {
    positions: {
      type: Array,
      default: () => [
        {
          id: 12,
          name: '销售顾问',
          address: '烟台',
          publishTime: '9月28日',
          salary: '15-30k',
          experience: '3-5年',
          education: {
            id: 1,
            name: '本科'
          },
          recruiter: {
            id: 2,
            name: '王先生',
            photo: require('../../assets/imgs/avatar_11.png'),
            position: 'HR'
          }
        },
        {
          id: 1,
          name: '销售顾问',
          address: '烟台',
          publishTime: '9月28日',
          salary: '15-30k',
          experience: '3-5年',
          education: {
            id: 1,
            name: '本科'
          },
          recruiter: {
            id: 2,
            name: '王先生',
            photo: require('../../assets/imgs/avatar_11.png'),
            position: 'HR'
          }
        },
        {
          id: 13,
          name: '销售顾问',
          address: '烟台',
          publishTime: '9月28日',
          salary: '15-30k',
          experience: '3-5年',
          education: {
            id: 1,
            name: '本科'
          },
          recruiter: {
            id: 2,
            name: '王先生',
            photo: require('../../assets/imgs/avatar_11.png'),
            position: 'HR'
          }
        }
      ]
    }
  },
  methods: {
    goToCommunicate(index) {

      const recruiterInfo = this.$refs.recruiterInfo
      const communicateBtn = this.$refs.communicateBtn
     // console.log(recruiterInfo[index].style)
      recruiterInfo[index].style.display = 'none'
      communicateBtn[index].style.display = 'block'

    },
    continueView(index) {

      const recruiterInfo = this.$refs.recruiterInfo
      const communicateBtn = this.$refs.communicateBtn
      recruiterInfo[index].style.display = 'flex'
      communicateBtn[index].style.display = 'none'
    }
  }

}
</script>

<style scoped lang="less">
    @import "../../assets/styles/variables";

    .position-items{
        margin: 5rem /@font-size 0;
        padding: 0;
        list-style-type: none;

        li {
            position: relative;
            display: flex;
            justify-content: space-between;

            border-bottom: 1rem /@font-size solid #f4f4f6;

            .position-info {
                .name-wrapper {
                    font-weight: 400;

                    .name, .address {
                        font-size: 16rem /@font-size;
                        color: #00c2b3;
                    }

                    .date {
                        font-size: 13rem /@font-size;
                        color: @gray;
                    }

                    :nth-child(2), :nth-child(3) {
                        margin-left: 10rem /@font-size;
                    }
                }

                p {
                    display: flex;
                    font-size: 14rem /@font-size;

                    .salary {
                        color: @salaryColor;
                        font-size: 16rem /@font-size;
                    }

                }

            }

            .recruiter-info {
                display: flex;
                font-size: 14rem /@font-size;
                align-items: center;
                color: #4a4160;

                img {
                    width: 20rem /@font-size;
                    height: 20rem /@font-size;
                    border-radius: 10rem /@font-size;
                }

            }

            .communicate-btn {
                display: none;
                position: absolute;
                top: 40%;
                right: 0;
                width: 100rem /@font-size;
                background-color: #5DD5C8;
                color: #FFFFFF;
                font-size: 17rem /@font-size;
                height: 32rem /@font-size;
                border: none;
            }
        }
    }
</style>
