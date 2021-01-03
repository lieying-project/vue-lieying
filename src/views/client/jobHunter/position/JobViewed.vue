<template>
    <div class="viewed-job">
        <h3 class="viewed-title">
            看过的职位
        </h3>
        <div class="viewed-body" v-for="(position,index) in browsedPositions" :key="index"
        @click="$router.push('/position/'+position.id)">
            <div class="viewed-position">
                {{position.name}}
                <span class="salary">{{position.salary}}</span>
            </div>
            <div class="viewed-company" v-if="position.company!=null">
                {{position.company.name}}
            </div>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "JobViewed",
  mounted() {
    this.$store.dispatch('getBrowsedPositionsAction')
  },
  computed: {
    ...mapState(['browsedPositions'])
  }
}
</script>

<style scoped lang="less">
    .viewed-job {
        width: 300rem /@font-size;
        margin-left: 20rem /@font-size;
        background-color: #FFFFFF;
        display: flex;
        flex-flow: column nowrap;
        .viewed-title {
            height: 45rem /@font-size;
            line-height: 45rem /@font-size;
            font-size: 15rem /@font-size;
            color: #54cbc4;
            padding-left: 30rem /@font-size;
            font-weight: 400;
            border-bottom: solid 2rem /@font-size #f2f2f5;
            margin: 0;
        }

        .viewed-body{
            display: flex;
            flex-flow: column nowrap;
            cursor: pointer;
            .viewed-position {
                font-weight: 400;
                padding-left: 30rem /@font-size;
                padding-right: 90rem /@font-size;
                position: relative;
                font-size: 14rem /@font-size;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-top: 20rem /@font-size;

                .salary {
                    position: absolute;
                    color: #fc6c38;
                    right: 10rem /@font-size;
                }
            }

            .viewed-company {
                line-height: 22rem /@font-size;
                color: #8d92a1;
                font-size: 12rem /@font-size;

                /*padding-left: 30px;*/
                padding: 8rem /@font-size 0 8rem /@font-size 30rem /@font-size;
                border-bottom: solid 2rem /@font-size #f2f2f5;
            }
        }
    }




</style>
