<template>
    <div class="index-right-content" v-show="positionCategoryIndex!=null">
        <div class="content-header">
            <h4 v-if="positionCategories[positionCategoryIndex]!=null">
                {{positionCategories[positionCategoryIndex].name}}</h4>
        </div>
        <job-hunter-index-right-con-item :positionCategoryIndex="positionCategoryIndex"
                                         v-if="positionCategories[positionCategoryIndex]!=null"/>

    </div>
</template>

<script>
import JobHunterIndexRightConItem from "./JobHunterIndexRightConItem";
import {mapState} from 'vuex'

export default {
  name: "JobHunterIndexRightContent",
  components: {
    JobHunterIndexRightConItem
  },
  props: {
    pubVue: {
      type: Object
    }
  },
  data() {
    return {
      positionCategoryIndex: null,
      isShow: true
    }
  },
  mounted() {
    this.pubVue.$on('positionCategoryIndex', data => {
      this.positionCategoryIndex = data
    })
  },
  computed: {

    ...mapState(['positionCategories'])
  }
}
</script>

<style scoped lang="less">

</style>
