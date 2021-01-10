<template>
    <div class="company-position">
<!--        <div class="position-category">-->
<!--            <div class="position-filter">-->
<!--                <div class="position-filter-label">-->
<!--                    <span>职位类型:</span>-->
<!--                </div>-->
<!--                <ul class="position-category-items">-->
<!--                    <li class="position-category-item" v-for="(positionCategory,index) in positionCategories"-->
<!--                        :key="index" @click="togglePositionCategory(index)"-->
<!--                        :style="{color: selectPositionCategoryIndex==index?'#18c3b1':'#414a60'}">-->
<!--                        {{positionCategory.name}} ({{positionCategory.num}})-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
<!--            <div class="position-filter">-->
<!--                <div class="position-filter-label">-->
<!--                    <span>筛选职位:</span>-->
<!--                </div>-->
<!--                <el-select v-model="selectedCityId" placeholder="工作城市" class="select-item">-->
<!--                    <el-option-->
<!--                            v-for="item in cities"-->
<!--                            :key="item.id"-->
<!--                            :label="item.name"-->
<!--                            :value="item.id">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--                <el-select v-model="selectedExperienceId" placeholder="经验要求" class="select-item">-->
<!--                    <el-option-->
<!--                            v-for="item in experiences"-->
<!--                            :key="item.id"-->
<!--                            :label="item.name"-->
<!--                            :value="item.id">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--                <el-select v-model="selectedEducationId" placeholder="学历要求" class="select-item">-->
<!--                    <el-option-->
<!--                            v-for="item in educations"-->
<!--                            :key="item.id"-->
<!--                            :label="item.name"-->
<!--                            :value="item.id">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--                <el-select v-model="selectedSalaryId" placeholder="薪资要求" class="select-item">-->
<!--                    <el-option-->
<!--                            v-for="item in salaries"-->
<!--                            :key="item.id"-->
<!--                            :label="item.name"-->
<!--                            :value="item.id">-->
<!--                    </el-option>-->
<!--                </el-select>-->
<!--            </div>-->
<!--        </div>-->
        <div class="position-wrapper">


            <ul class="position-list">
                <li v-for="(position,index) in this.company.positions" :key="index"
                    @mouseover="goToCommunicate(index)"
                    @mouseout="continueView(index)">
                    <div class="position-info">
                        <h3 class="name-wrapper">
                            <span class="name">{{position.name}}</span>
                            <span class="address">[{{company.address}}]</span>
                            <span class="date">发布于[{{position.publishTime | formatDate}}]</span>
                        </h3>
                        <p>
                            <span class="salary">{{position.salary}}</span>
                            <Vdot :color="'#9fa3b0'"/>
                            <span class="experience">{{position.experience}}</span>
                            <Vdot :color="'#9fa3b0'"/>
                            <span class="education" v-if="position.education!=null">{{position.education.name}}</span>
                            <button class="communicate-btn" ref="communicateBtn">立即沟通</button>
                        </p>
                    </div>
<!--                    <div class="recruiter-info" ref="recruiterInfo" >-->

<!--                        <img :src="position.recruiter.photo">-->
<!--                        <Vdot :color="'#9fa3b0'"/>-->
<!--                        <span class="name">{{position.recruiter.name}}</span>-->
<!--                        <Vdot :color="'#9fa3b0'"/>-->
<!--                        <span class="position">{{position.recruiter.position}}</span>-->
<!--                    </div>-->

                </li>
            </ul>
<!--            <div class="seen-position-list">-->
<!--                <div class="title"><span>看过的职位</span></div>-->
<!--                <ul>-->
<!--                    <li v-for="(position,index) in seenPositions" :key="index">-->
<!--                        <h4 class="name-wrapper">-->
<!--                            <span class="name">{{position.name}}</span>-->
<!--                            <span class="salary">{{position.salary}}</span>-->
<!--                        </h4>-->
<!--                        <p v-if="position.company!=null">{{position.company.name}}</p>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import Vdot from "../../../common/Vdot";
import {mapState} from 'vuex'
export default {
  name: "CompanyPosition",
  components: {Vdot},
  data() {
    return {
      selectPositionCategoryIndex: 0,
      selectedCityId: null,
      selectedExperienceId: null,
      selectedEducationId: null,
      selectedSalaryId: null
    }
  },
  props: {
    positionCategories: {
      type: Array,
      default: function () {
        return [
          {
            name: "技术", num: 1550, positions: [
              {
                id: 13,
                name: '软件开发工程师',
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
                  photo: require('../../../../assets/imgs/avatar_11.png'),
                  position: 'HR'
                }
              },
              {
                id: 12,
                name: '测试开发工程师',
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
                  photo: require('../../../../assets/imgs/avatar_11.png'),
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
                  photo: require('../../../../assets/imgs/avatar_11.png'),
                  position: 'HR'
                }
              }
            ]
          },
          {
            name: "销售", num: 117, positions: [
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
                  photo: require('../../../../assets/imgs/avatar_11.png'),
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
                  photo: require('../../../../assets/imgs/avatar_11.png'),
                  position: 'HR'
                }
              },
            ]
          },
          {name: "市场", num: 40, positions: []},
          {name: "服务", num: 38, positions: []},
          {name: "销售", num: 117, positions: []},
          {name: "产品", num: 32, positions: []},
          {name: "生产制造", num: 31, positions: []},
          {name: "设计", num: 9, positions: []},
          {name: "供应链", num: 9, positions: []},
          {name: "采购/贸易", num: 7, positions: []},
          {name: "旅游", num: 2, positions: []}
        ]
      }
    },
    seenPositions: {
      type: Array,
      default: function () {
        return [
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
              photo: require('../../../../assets/imgs/avatar_11.png'),
              position: 'HR'
            },
            company: {
              id: 1,
              name: '阿里巴巴集团'
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
              photo: require('../../../../assets/imgs/avatar_11.png'),
              position: 'HR'
            },
            company: {
              id: 1,
              name: '阿里巴巴集团'
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
              photo: require('../../../../assets/imgs/avatar_11.png'),
              position: 'HR'
            },
            company: {
              id: 1,
              name: '阿里巴巴集团'
            }
          }
        ]
      }
    },
    cities: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            name: '全部'
          },
          {
            id: 1,
            name: '上海'
          }, {
            id: 2,
            name: '北京'
          }
        ]
      }
    },
    experiences:{
      type: Array,
      default: function () {
        return [
          {name:'全部',id:0},
          {name:'在校生',id:1},
          {name:'应届生',id:2},
          {name:'一年以内',id:3}
        ]
      }
    },
    educations:{
      type: Array,
      default: function () {
        return [
          {name:"全部",id:0},
          {name:'高中',id:1},
          {name:'大专',id:2},
          {name:'本科',id:3},
          {name:"硕士",id:4}
        ]
      }
    },
    salaries:{
      type: Array,
      default: function () {
        return [
          {name:"全部",id:0},
          {name:'3-5k',id:1},
          {name:'5-7k',id:2},
          {name:'7-9k',id:3},
          {name:"9-11k",id:4}
        ]
      }
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
    },
    togglePositionCategory(index) {
      this.selectPositionCategoryIndex = index
    }
  },
  computed:{
    ...mapState(['company'])
  }

}
</script>

<style scoped lang="less">
    @import "../../../../assets/styles/variables";

    .company-position {
        position: relative;
        background-color: #F6F6F8;
        padding: 0 155rem /@font-size;
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        height: 800rem /@font-size;

        .position-category {
            display: flex;
            flex-flow: column wrap;
            color: #414a60;
            padding: 20rem /@font-size 0 15rem /@font-size 30rem /@font-size;
            background-color: #FFFFFF;
            height: auto;

            .position-filter {
                display: flex;
                //align-items: center;

                .position-filter-label {
                    font-size: 14rem /@font-size;
                    width: 90rem /@font-size;
                    height: 40rem /@font-size;
                    line-height: 40rem /@font-size;
                    overflow: hidden;
                }

                .position-category-items {
                    list-style-type: none;
                    display: flex;
                    flex-flow: row wrap;
                    margin: 0 0 0 15rem /@font-size;
                    padding: 0;

                    .position-category-item {
                        margin: 0 50rem /@font-size 5rem /@font-size 0;
                        line-height: 40rem /@font-size;
                        font-size: 14rem /@font-size;
                        cursor: pointer;

                        :hover {

                            color: #18c3b1;
                        }
                    }
                }
                .select-item{
                    width: 88rem /@font-size !important;
                    margin:5rem /@font-size 20rem /@font-size  0 0 !important ;
                    /deep/ .el-input .el-input__inner {
                        border-radius: 0;
                        border: none;
                    }
                }

            }


        }

        .position-wrapper {
            display: flex;
            justify-content: space-between;

            .position-list {
                flex: 17;
                //width: 900rem /@font-size;
                margin: 5rem /@font-size 0;
                padding: 0;
                list-style-type: none;

                margin-top: 18rem /@font-size;

                li {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    padding: 20rem /@font-size;
                    background-color: #FFFFFF;
                    margin-bottom: 10rem /@font-size;

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
                        right: 20rem /@font-size;
                        width: 100rem /@font-size;
                        background-color: #5DD5C8;
                        color: #FFFFFF;
                        font-size: 17rem /@font-size;
                        height: 32rem /@font-size;
                        border: none;
                    }
                }
            }

            .seen-position-list {
                margin-left: 20rem /@font-size;
                flex: 5;
                // width: 284rem /@font-size;
                .title {
                    height: 47rem /@font-size;
                    line-height: 47rem /@font-size;
                    margin-top: 18rem /@font-size;
                    background-color: #FFFFFF;
                    color: #00c2b3;
                    padding-left: 25rem /@font-size;
                    margin-bottom: 5rem /@font-size;
                }

                ul {
                    background-color: #FFFFFF;
                    margin: 0;
                    padding: 0;
                    list-style-type: none;

                    li {
                        display: flex;
                        flex-flow: column wrap;
                        justify-content: center;
                        border-bottom: 1rem /@font-size solid #eef0f4;
                        padding: 10rem /@font-size 25rem /@font-size;

                        .name-wrapper {
                            display: flex;
                            justify-content: space-between;
                            font-size: 14rem /@font-size;
                            margin: 0;
                            padding: 0;
                            padding-top: 10rem /@font-size;

                            .name {
                                color: #414a60;
                                font-weight: 400;


                            }

                            .salary {
                                color: #fc6f3b;
                                font-weight: 400;
                            }
                        }

                        p {
                            font-size: 12rem /@font-size;
                            color: #8d92a1;
                        }
                    }
                }

            }
        }
    }
</style>
