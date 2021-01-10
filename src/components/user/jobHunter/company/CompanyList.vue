<template>
    <div class="main">
        <div class="filter-condition">
            <div class="filter-row location">
                <div class="filter-label">
                    <span>公司地点:</span>
                </div>
                <ul class="filter-items">
                    <li class="filter-item" v-for="city in cities"
                        :key="city.id" :style="{color:selectedCityId==city.id?'#18c3b1':'#61687c'}" @click="setSelectedCityId(city.id)">
                        {{city.name}}
                    </li>
                </ul>
            </div>
            <div class="filter-row industry">
                <div class="filter-label">
                    <span>行业类型:</span>
                </div>
                <ul class="filter-items">
                    <li class="filter-item" v-for="industry in industries"
                        :key="industry.id" :style="{color:selectedIndustryId==industry.id?'#18c3b1':'#61687c'}"
                    @click="setSelectedIndustryId(industry.id)">
                        {{industry.name}}
                    </li>
                </ul>
            </div>
            <div class="filter-row stage">
                <div class="filter-label">
                    <span>融资阶段:</span>
                </div>
                <ul class="filter-items">
                    <li class="filter-item" v-for="financingStage in financingStages"
                        :key="financingStage.id" :style="{color:selectedFinancingStageId==financingStage.id?'#18c3b1':'#61687c'}"
                    @click="setSelectedFinancingStageId(financingStage.id)">
                        {{financingStage.name}}
                    </li>
                </ul>
            </div>
            <div class="filter-row scale">
                <div class="filter-label">
                    <span>公司规模:</span>
                </div>
                <ul class="filter-items">
                    <li class="filter-item" v-for="companyScale in companyScales"
                        :key="companyScale.id" :style="{color:selectedCompanyScaleId==companyScale.id?'#18c3b1':'#61687c'}"
                    @click="setSelectedCompanyScaleId(companyScale.id)">
                        {{companyScale.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="company-box">
            <ul>
                <li v-for="(company,index) in companies" :key="index" @click="toCompany(company)">
                    <a class="company-info">
<!--                        <img :src="require(`@/assets/${company.sign}`)">-->
                        <img :src="company.sign">
                        <div class="company-text">
                            <h4 class="name">{{company.name}}</h4>
                            <p >
                                <span v-if="company.industry!=null" class="industry">{{company.industry.name}}</span>
                                <Vdot :color="'#9fa3b0'"/>
                                <span v-if="company.financingStage!=null" class="industry">{{company.financingStage.name}}</span>
                            </p>
                        </div>
                    </a>
                    <!--<a class="hot-position">
                        <p>
                            <span>热招</span>
                            <span class="position">软件测试</span>
                            <span class="salary">4-6k</span>
                        </p>
                    </a>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vdot from "../../../common/Vdot";
import {mapState} from 'vuex'
export default {
  name: "CompanyList",
  components: {Vdot},
  data() {
    return {
      selectedIndustryId: null,
      selectedCityId: null,
      selectedFinancingStageId: null,
      selectedCompanyScaleId: null
    }
  },
  methods:{
    toCompany(company){
      this.$router.push({
        name:'CompanyDetail',
        params:{
          id:company.id
        }
      })
    },
    setSelectedCityId(cityId){
      if (this.selectedCityId===cityId){
        this.selectedCityId=null
      } else{
        this.selectedCityId=cityId
      }
      this.updateCompanyList()
    },
    setSelectedIndustryId(industryId){
      if (this.selectedIndustryId===industryId){
        this.selectedIndustryId=null
      } else{
        this.selectedIndustryId=industryId
      }
      this.updateCompanyList()
    },
    setSelectedCompanyScaleId(companyScaleId){
      if (this.selectedCompanyScaleId===companyScaleId){
        this.selectedCompanyScaleId=null
      } else{
        this.selectedCompanyScaleId=companyScaleId
      }
      this.updateCompanyList()
    },
    setSelectedFinancingStageId(financingStageId){
      if (this.selectedFinancingStageId===financingStageId){
        this.selectedFinancingStageId=null
      } else{
        this.selectedFinancingStageId=financingStageId
      }
      this.updateCompanyList()
    },
    updateCompanyList(){
      this.$store.dispatch('getCompanyByCriteriaAction',{
        cityId:this.selectedCityId,
        companyScaleId:this.selectedCompanyScaleId,
        industryId:this.selectedIndustryId,
        financingStageId:this.selectedFinancingStageId
      })
      this.$forceUpdate()//强制渲染页面
    }
  },
  created() {
    this.$store.dispatch('getAllCitiesAction')
    this.$store.dispatch('getAllIndustriesAction')
    this.$store.dispatch('getAllFinancingStagesAction')
    this.$store.dispatch('getCompanyScalesAction')
    this.updateCompanyList()
  },
  computed:{
    ...mapState(['companyScales','financingStages','industries','cities','companies'])
  },
  updated() {
  }

}
</script>

<style scoped lang="less">

    @import "../../../../assets/styles/variables";
    .main{
        position: relative;
        width: 100%;
        margin: 0 auto;
        background-color: #FFFFFF;
        .filter-condition{
            width: 1184rem /@font-size;
            margin: 0 auto;
            flex-flow: column wrap;
            color: #414a60;
            padding: 32rem /@font-size 0 15rem /@font-size 30rem /@font-size;
            background-color: #FFFFFF;
            height: auto;
            .filter-row{
                display: flex;
                .filter-label{
                    flex: 0 0 80rem /@font-size;//0:不拉长 0:不缩短 70:固定70
                    font-size: 14rem /@font-size;

                    //height: 24.8rem /@font-size;
                    //margin-right: 15rem /@font-size;
                    margin-top: 3rem /@font-size;
                    //line-height: 40rem /@font-size;
                    //overflow: hidden;
                    vertical-align: top;
                }
                .filter-items{
                    list-style-type: none;
                    display: flex;
                    flex-flow: row wrap;
                    margin: 0;
                    padding: 0;
                    .filter-item{
                        margin: 0 30rem /@font-size 15rem /@font-size 0;
                        line-height: 20rem /@font-size;
                        font-size: 13rem /@font-size;
                        cursor: pointer;
                        color:#61687c;
                        :hover {
                            color: #18c3b1;
                        }
                    }
                }
            }
        }
        .company-box{
            width: 85%;
            padding: 24rem /@font-size 180rem /@font-size;
            margin: 0 auto;
            background-color: #F6F6F8;
            ul{
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-flow: row wrap;
                li{
                    flex: 0 0 250rem /@font-size;
                    align-items: center;
                    display: flex;
                    flex-flow: column nowrap;
                    background-color: #FFFFFF;
                    padding-left: 15rem /@font-size;
                    padding-right: 15rem /@font-size;
                    margin-right: 20rem /@font-size;
                    margin-bottom: 20rem /@font-size;
                    &:hover{
                        cursor: pointer;
                    }
                    .company-info{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: dashed 1rem /@font-size #ededed;
                        img{
                            width: 57rem /@font-size;
                            height: 57rem /@font-size;
                            border-radius: 9rem /@font-size;
                        }
                        .company-text{

                            margin-bottom: 20rem /@font-size;
                            h4{
                                font-size: 16rem /@font-size;
                                font-weight: 400;
                                margin-bottom: 10rem /@font-size;
                                text-align: right;
                            }
                            p{
                                font-size: 12rem /@font-size;
                                color: #898e9d;
                                margin-top: 10rem /@font-size;

                            }
                        }
                    }
                    .hot-position{
                        width: 100%;
                        p{
                            font-size: 12rem /@font-size;
                            color: #8d92a1;
                            .salary{
                                margin-left: 10rem /@font-size;
                                color: #00c2b3;
                            }
                            .position{
                                margin-left: 10rem /@font-size;
                            }
                        }
                    }

                }
            }
        }
    }

</style>
