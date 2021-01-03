<template>
    <h3 class="title-wrapper" :style="{display:isDisplay==true?'flex':'none'}">
        <div class="left-title">
            <span class="title-before"></span>
            <span class="text">{{text}}</span>
        </div>
        <div class="right-add" :style="{display: this.isDisplayAddBtn==false?'none':'flex'}">
            <img src="../../assets/imgs/add.png">
            <span class="text" @click="add">添加</span>
        </div>
    </h3>
</template>

<script>
export default {
  name: "ResumeTitleWrapper",
  props: {
    text: {
      type: String,
      default: 'title'
    },
    isDisplayAddBtn: {
      type: Boolean,
      default: false
    },
    isDisplay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    add() {
      console.log("子组件add方法")
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../assets/styles/variables";

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18rem /@font-size;
        font-weight: 400;

        .left-title {
            display: flex;
            align-items: center;

            .title-before {
                width: 4rem /@font-size;
                height: 15rem /@font-size;
                background-color: #00c2b3;
                margin-right: 10rem /@font-size;
            }
        }

        .right-add {

            align-items: center;
            cursor: pointer;

            img {
                width: 20rem /@font-size;
                height: 20rem /@font-size;
            }

            .text {
                margin-left: 5rem /@font-size;
                color: #00c2b3;
                font-size: 14rem /@font-size;
            }

        }
    }
</style>
