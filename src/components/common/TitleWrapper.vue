<template>
    <div class="title-wrapper">
        <span class="title">{{title}}</span>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  name: "TitleWrapper",
  props: {
    title: {
      type: String,
      default: "名称"
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../assets/styles/variables";
    .title-wrapper{
        display: flex;
        flex-flow: column nowrap;
        height: 50rem /@font-size;
        margin-top: 10rem /@font-size;
        .title {
            font-size: 15rem /@font-size;
            font-weight: 700;
            color: #424a5e;
            //line-height: 50rem /@font-size;
            padding:  0;
            margin-bottom: 0;

        }
        .line{
            padding-top: 10rem /@font-size;
            display: block;
            width: 18rem /@font-size;
            border-bottom: 3rem /@font-size solid #5DD5C8;
            height: 1.8rem /@font-size;
        }
    }

</style>
