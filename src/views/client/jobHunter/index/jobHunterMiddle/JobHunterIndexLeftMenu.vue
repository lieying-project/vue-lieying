<template>
    <div class="left-menu">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo">
            <el-menu-item @mouseenter.native="handleHover(index)"
                          v-for="(positionCategory,index) in $store.state.positionCategories" :key="index">
                <b  v-if="positionCategory.fatherPositionCategory==null" class="position-category-name">  {{positionCategory.name}}</b>
                <span class="el-icon-arrow-right right" v-if="positionCategory.fatherPositionCategory==null"></span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "JobHunterLeftMenu",
  props: {
    pubVue: {
      type: Object
    }
  },
  methods: {
    handleHover(index) {
      this.pubVue.$emit("positionCategoryIndex", index)
    }
  }
}
</script>

<style scoped lang="less">
    //设置左箭头的位置
    .left-menu{
        .position-category-name{
            font-size: 13rem /@font-size;
            color: #000000;
        }
        .right {
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
    }



</style>
