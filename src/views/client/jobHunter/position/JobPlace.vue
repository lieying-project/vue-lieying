<template>
    <div class="job-place">
        <div class="first-city">
            <div>
                <ul class="city-choice-list">
                    <li v-if="hotCities!=null" class="current-city">{{selectedCity}}</li>
                    <li><i class="el-icon-arrow-right"></i></li>
                    <li v-if="hotCities!=null" :style="{color:selectedDistrictIndex==null?'#fc6c38':'#414a60'}">
                        {{selectedDistrict}}
                    </li>
                    <li><i class="el-icon-arrow-right"></i></li>
                </ul>
            </div>
            <div>
                <ul class="hot-city-list">
                    <li>
                        热门城市:
                    </li>
                    <li @click="selectCity(-1)">全国</li>
                    <li v-for="(city,index) in hotCities" @click="selectCity(index)" :key="index">
                        {{city.name}}
                    </li>
                </ul>
            </div>
        </div>
        <el-divider/>
        <div class="second-city">
            <ul class="detail-place-list" v-if="hotCities!=null">

                <li v-for="(district,index) in (hotCities[selectedCityIndex]||{}).districts"
                    @click="selectDistrict(index)">
                    {{(district||{}).name}}
                </li>
            </ul>
        </div>

        <el-divider v-if="selectedCityIndex!=null&&hotCities[selectedCityIndex]!=null&&hotCities[selectedCityIndex].districts!=null"/>
        <div class="third-demand">
            <el-select v-model="experience" placeholder="工作经验" class="select-item" clearable @change="searchPositions">
                <el-option
                        v-for="item in experiences"
                        :key="item.label"
                        :label="item.label"
                        :value="item.label">
                </el-option>
            </el-select>
            <el-select v-model="education" placeholder="学历要求" class="select-item" clearable @change="searchPositions">
                <el-option
                        v-for="item in educations"
                        :key="item.label"
                        :label="item.label"
                        :value="item.label">
                </el-option>
            </el-select>
            <el-select v-model="salary" placeholder="薪资要求" class="select-item" clearable @change="searchPositions">
                <el-option
                        v-for="item in salaries"
                        :key="item.label"
                        :label="item.label"
                        :value="item.label">
                </el-option>
            </el-select>
            <el-select v-model="financingStageId" placeholder="融资阶段" class="select-item" clearable
                       @change="searchPositions">
                <el-option
                        v-for="financingStage in financingStages"
                        :key="financingStage.id"
                        :label="financingStage.name"
                        :value="financingStage.id">
                </el-option>
            </el-select>
            <el-select v-model="companyScaleId" placeholder="公司规模" class="select-item" clearable
                       @change="searchPositions">
                <el-option
                        v-for="companyScale in companyScales"
                        :key="companyScale.id"
                        :label="companyScale.name"
                        :value="companyScale.id">
                </el-option>
            </el-select>
            <el-select v-model="publishTime" placeholder="发布时间" class="select-item" clearable @change="searchPositions">
                <el-option
                        v-for="item in publishTimes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
import JobPlaceHot from "./JobPlaceHot";
import JobPlaceDetail from "./JobPlaceDetail";
import {mapState} from 'vuex'

export default {
  name: "JobPlace",
  props: {
    pubVue: {
      type: Object
    }
  },
  data() {
    return {
      experiences: [
        {
          value: "1",
          label: "不限"
        }, {
          value: "2",
          label: "在校生"
        }, {
          value: "3",
          label: "应届生"
        }, {
          value: "4",
          label: "一年以内"
        }, {
          value: "5",
          label: "1-3年"
        }, {
          value: "6",
          label: "3-5年"
        }, {
          value: "7",
          label: "5-10年"
        }, {
          value: "8",
          label: "10年以上"
        }
      ],
      educations: [
        {
          value: "1",
          label: "不限"
        }, {
          value: "2",
          label: "初中及以下"
        }, {
          value: "3",
          label: "中专/中技"
        }, {
          value: "4",
          label: "高中"
        }, {
          value: "5",
          label: "大专"
        }, {
          value: "6",
          label: "本科"
        }, {
          value: "7",
          label: "硕士"
        }, {
          value: "8",
          label: "博士"
        }
      ],
      salaries: [
        {
          value: "1",
          label: "3k以下"
        }, {
          value: "2",
          label: "3-5k"
        }, {
          value: "3",
          label: "5-10k"
        }, {
          value: "4",
          label: "10-15k"
        }, {
          value: "5",
          label: "15-20k"
        }, {
          value: "6",
          label: "20-30k"
        }, {
          value: "7",
          label: "30-50k"
        }, {
          value: "8",
          label: "50k以上"
        }
      ],
      publishTimes: [
        {
          value: "1",
          label: "不限"
        }, {
          value: "2",
          label: "一天以内"
        }, {
          value: "3",
          label: "三天以内"
        }, {
          value: "4",
          label: "七天以内"
        }, {
          value: "5",
          label: "十五天以内"
        }, {
          value: "6",
          label: "一个月以内"
        }
      ],
      selectedCityIndex: null,

      companyScaleId: null,
      selectedDistrictIndex: null,
      financingStageId: null,
      education: null,
      salary: null,
      experience: null,
      publishTime: null,
      searchWay:'select'

    }
  },

  components: {
    JobPlaceHot,
    JobPlaceDetail
  },
  methods: {
    selectCity(index) {
      if (index === -1) {
        this.selectedCityIndex = null
        this.selectedDistrictIndex = null
        /// this.searchPositions()
        return
      }
      this.selectedCityIndex = index
      this.selectedDistrictIndex = null
      //this.searchPositions()
    },
    selectDistrict(index) {
      this.selectedDistrictIndex = index
      //this.searchPositions()
    },
    searchPositions() {
      console.log(this.searchWay)
      // console.log(this.experience)
      // console.log(this.financingStageId)
      // console.log(this.education)
      // console.log(this.salary)
      // console.log(this.publishTime)

      this.$store.dispatch('getPositionsByCriteriaAction', {
        positionExperience: this.experience,
        financingStageId: this.financingStageId,
        positionEducation: this.education,
        positionSalary: this.salary,
        positionPublishTime: this.publishTime,
        keyword: ''
      }).then(() => {
        this.pubVue.$emit('searchWay', 'select')
        this.pubVue.$emit('positionExperience',this.experience)
        this.pubVue.$emit('financingStageId',this.financingStageId)
        this.pubVue.$emit('positionEducation',this.education)
        this.pubVue.$emit('positionSalary',this.salary)
        this.pubVue.$emit('positionPublishTime',this.publishTime)
        this.pubVue.$emit('keyword','')
      })

    }
  },
  mounted() {
    this.$store.dispatch('getHotCitiesAction')
    this.$store.dispatch('getAllFinancingStagesAction')
    this.$store.dispatch('getCompanyScalesAction')
  },
  computed: {
    ...mapState(['hotCities', 'financingStages', 'companyScales']),
    selectedDistrict() {
      if (this.selectedDistrictIndex == null) {
        return "不限"
      } else {
        //console.log(this.hotCities[this.selectedCityIndex])
        return this.hotCities[this.selectedCityIndex].districts[this.selectedDistrictIndex].name
      }
    },
    selectedCity() {
      if (this.selectedCityIndex == null) {
        return "全国"
      } else {
        return this.hotCities[this.selectedCityIndex].name
      }
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../../assets/styles/variables";

    .job-place {
        background-color: #ffffff;
        width: 1184rem /@font-size;
        margin: 0 auto;
    }
    .first-city, .second-city {
        overflow: hidden; //bfc 清除浮动
        ul {
            margin: 0;

            &.city-choice-list {
                .current-city {
                    color: #A8ACB6;
                }
            }
        }

    }

    .hot-city-list, .city-choice-list, .detail-place-list {
        padding-left: 0;
        list-style: none;
        color: #414a60;
        font-size: 12rem/ @font-size;

        li {
            float: left;
            height: 36rem/ @font-size;
            line-height: 36rem/ @font-size;
            padding: 0 10rem/ @font-size;
            cursor: pointer;
        }
    }

    //让element-ui的分隔符的与元素的间距小一点
    /deep/ .el-divider--horizontal {
        margin: 10rem/ @font-size 0;
    }

    //让下拉选择列表的字体为12号
    /deep/ .el-input {
        font-size: 12rem/ @font-size;
    }
    /deep/ .el-divider--horizontal{
        margin: 3rem /@font-size 0;
    }
    .third-demand {
        display: flex;
        justify-content: space-around;
        //padding: 10rem/ @font-size 0;

        /deep/ .el-select {
            width: 120rem /@font-size;

            /deep/ .el-input--suffix .el-input__inner {
                border: none;
                color: #FC6C72;
            }
        }

    }
</style>
