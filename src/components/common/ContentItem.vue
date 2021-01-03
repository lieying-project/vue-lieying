<template>
    <div class="content-item">
        <TitleWrapper :title="title"/>
        <div class="desc" v-html="desc">
        </div>
    </div>
</template>
<script>
import TitleWrapper from "./TitleWrapper";
export default {
  name: "ContentItem",
  components: {TitleWrapper},
  props: {
    title: {
      type: String,
      default:"名称"
    },
    desc: {
      type: String,
      default: "描述"
    }
  }
}
</script>
<style scoped lang="less">
    @import "../../assets/styles/variables";
    .desc {
        font-size: 14rem /@font-size;
        color: #61687c;
        line-height: 36rem /@font-size;

    }
</style>
