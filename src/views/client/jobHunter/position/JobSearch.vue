<template>
    <div class="job-search">
        <div class="content">
            <el-select v-model="cityId"   placeholder="工作地点" class="selected-item" clearable >
                <el-option
                        v-for="item in cities"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-input v-model="keyword" class="search-content" placeholder="搜索职位、公司"/>
            <el-select v-model="positionCategoryId"   placeholder="职位类型" class="selected-item" clearable >
                <el-option
                        v-for="item in positionCategories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>

            <el-select v-model="industryId"   placeholder="公司行业" class="selected-item" clearable>
                <el-option
                        v-for="item in industries"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-button type="primary" @click="searchPositions"><i class="el-icon-search"></i></el-button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      keyword: '',
      cityId: null,
      searchedCityId:null,
      positionCategoryId: null,
      searchedPositionCategoryId:null,
      industryId: null,
      searchedIndustryId:null,
      searchWay:'search'
    }
  },
  props: {
   pubVue:{
     type:Object
   }
  },
  mounted() {
    this.$store.dispatch('getAllCitiesAction')
    this.$store.dispatch('getAllPositionCategoriesAction')
    this.$store.dispatch('getAllIndustriesAction')
  },
  computed: {
    ...mapState(['cities', 'positionCategories', 'industries'])
  },
  methods:{
    searchPositions(){
      console.log(this.searchWay)
      this.$store.dispatch('getPositionsByCriteriaAction',{
        industryId:this.industryId,
        cityId:this.cityId,
        positionCategoryId:this.positionCategoryId,
        keyword:this.keyword
      }).then(()=>{
        this.pubVue.$emit('searchWay', 'search')
        this.pubVue.$emit('industryId',this.industryId)
        this.pubVue.$emit('positionCategoryId',this.positionCategoryId)
        this.pubVue.$emit('cityId',this.cityId)
        this.pubVue.$emit('keyword',this.keyword)
      })

    }
  }
};
</script>
<style scoped lang="less">
    .job-search {
        background-color: #ffffff;
        width: 1184rem /@font-size;
        margin: 0 auto;
        padding: 20rem /@font-size 0 10rem /@font-size;

        .content {
            width: 80%;
            display: flex;

            .selected-item {
                width: 120rem /@font-size !important;
                /deep/ .el-input__inner {
                    border-radius: 0;
                    height: 45rem /@font-size;
                    font-size: 13rem /@font-size;
                    border-right: none;
                }
            }
            .search-content {
                width: 650rem /@font-size !important;
                font-size: 13rem /@font-size;
                /deep/ .el-input__inner {
                    border-radius: 0;
                    height: 45rem /@font-size;
                    border-right: none;
                }
            }
            /deep/ .el-button {
                border-radius: 0;
            }

            .el-button /deep/ span {
                color: #FFFFFF;
                margin: 0 20rem /@font-size;
                font-size: 20rem /@font-size;
            }

        }


    }
</style>
