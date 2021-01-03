<template>
    <div class="rely-comment">
         <span class="rely">
                   <el-link class="link" @click="showRelyComment=!showRelyComment">回复</el-link>
        </span>
        <div class="content" v-if="showRelyComment">
            <PublishComment :flag="1" :articleCommentId="articleCommentId"/>
        </div>
    </div>
</template>
<script>
import PublishComment from "./PublishComment";

export default {
  name: "RelyComment",
  components: {PublishComment},
  props: {
    articleCommentId: {}
  },
  data() {
    return {
      showRelyComment: false
    }
  }
}
</script>

<style scoped lang="less">
    .rely-comment {
        .rely {
            margin: 10rem /@font-size 10rem /@font-size 10rem /@font-size 0;

            .link {
                text-decoration: none;

                /deep/ .el-link--inner {
                    font-size: 14rem /@font-size;
                }
            }
        }

        .content {
            padding: 10rem /@font-size 0;
        }
    }
</style>
