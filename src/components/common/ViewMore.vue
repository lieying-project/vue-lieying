<template>
    <a class="view-more" :href="link" :style="{fontSize: fontSize}">
        <span>{{text}}</span>
        <i class="el-icon-arrow-right"></i>
    </a>
</template>

<script>
export default {
  name: "ViewMore",
  props: {
    text: {
      type:String,
      default: "更多"
    },
    link: {
      type: String,
      default: "/"
    },
    fontSize: {
      type: String,
      default: '1rem'
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../assets/styles/variables";
    .view-more{
        color: @gray;
        text-decoration: none;
        font-weight: 400;
    }
</style>
