<template>
    <div class="content-item">
        <div v-for="positionCategory in positionCategories[positionCategoryIndex].sonPositionCategories"
             v-if="positionCategories[positionCategoryIndex]!=null">


            <div class="item-type">
                {{(positionCategory||{}).name}}
            </div>

            <div class="item-info">
                <div class="item-info-single" v-if="positionCategory.sonPositionCategories!=null"
                     v-for="positionCategory2 in positionCategory.sonPositionCategories">
                    {{(positionCategory2||{}).name}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "JobHunterIndexRightContentItem",
  props: {
    positionCategoryIndex: {
      type: Number,
      default: null
    }
  },
  computed:{
    ...mapState(['positionCategories'])
  }
}
</script>

<style scoped lang="less">
    .content-item {
        display: flex;
        font-size: 14px;
        flex-flow: column nowrap;

        .item-info {
            display: flex;
            flex-wrap: wrap;
            padding-left: 30px;

            .item-info-single {
                width: 20%;
                padding: 8px 0;
                color: #61687c;
                cursor: pointer;
            }
        }

        .item-type {
            /*padding: 8px 0 0 0;*/
            color: #9fa3b0;
            margin: 10rem /@font-size 0;
        }
    }


    el-divider {
        margin-top: -10px;
    }
</style>
