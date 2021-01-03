<template>
    <div class="index-search">
        <div class="search-box">
            <div class="search-position">
                <div class="block">
                    <el-cascader :options="(positionCategories||[])" :props="props" placeholder="职位类型"
                                 v-if="positionCategories!=null" v-model="positionCategoryId" :show-all-levels="false"/>
                </div>
            </div>
            <div class="search-content">
                <el-input type="text" v-model="keyword" class="search-input" maxlength="50" autocomplete="off"
                          placeholder="搜索职位、公司"/>
            </div>
        </div>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="searchPositions">搜索</el-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "JobHunterIndexSearch",
  data() {
    return {
      positionCategoryId: null,
      keyword: "",
      props: {
        value: 'id',
        label: 'name',
        children: 'sonPositionCategories'
      }
    }
  },
  methods: {
    searchPositions() {
      console.log(this.positionCategoryId)
      this.$store.dispatch('getPositionsByCriteriaAction',{
        keyword: this.keyword,
        positionCategoryId:this.positionCategoryId[this.positionCategoryId.length-1]
      }).then(()=>{
        this.$router.push('/position')

      })
    },

  },
  computed: {
    ...mapState(['positionCategories'])
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";
    .index-search {
        margin: 0 auto;
        padding: 20rem /@font-size 0;
        overflow: hidden;
        width: 924rem /@font-size;
        .search-box {
            width: 794rem /@font-size;
            float: left;
            box-shadow: 0 0 6rem /@font-size 0 rgba(0, 0, 0, .13);
            .search-position {
                width: 120rem /@font-size;
                float: left;
                border-color: #fff;
                height: 45rem /@font-size;
                background-color: white;
                .block {
                    height: 100%;
                    line-height: 45rem /@font-size;
                    .selected-item {
                        width: 120rem /@font-size !important;

                        /deep/ .el-input__inner {
                            border-radius: 0;
                            height: 45rem /@font-size;
                            font-size: 13rem /@font-size;
                            border-right: none;
                        }
                    }
                    /deep/ .el-cascader .el-input__inner {
                        height: 45rem /@font-size;
                    }
                }
            }
            .search-content {
                overflow: hidden;
                /deep/ .el-input__inner {
                    border-radius: 0;
                    height: 45rem /@font-size;
                    font-size: 13rem /@font-size;
                }
            }
        }
    }
    .search-btn {
        height: 45rem /@font-size;
        width: 100rem /@font-size;
    }
</style>
