<template>
    <em class="vdot" :style="{'color':color}">{{text}}</em>
</template>

<script>
export default {
  name: "Vdot",
  props: {
    text: {
      default: '·',
      type: String
    },
    color: {
      default: 'white'
    }
  }
}
</script>

<style scoped lang="less">

    .vdot {
        display: inline-block;
        padding: 0 10px 0 7px;
    }
</style>
