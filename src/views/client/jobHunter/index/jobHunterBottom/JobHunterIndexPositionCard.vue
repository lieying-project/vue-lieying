<template>
    <div class="position-card">
        <div class="position-card-item">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span>前端开发工程师</span>
                    <el-button class="position-money" type="text">5-7k</el-button>
                    <div class="position-education">本科</div>
                </div>
                <div class="company-info">
                    <img class="company-img"
                         src="https://img.bosszhipin.com/beijin/app/mobile/normal-0e3f1e4441a21d4874cece3a3d81f0fe.png">
                    <div class="company-name">函子数创</div>
                    <div class="company-location">
                        <span class="el-icon-location-outline "></span>芝罘区 黄务
                    </div>
                </div>
            </el-card>
        </div>
        <div class="position-card-item">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span>前端开发工程师</span>
                    <el-button class="position-money" type="text">5-7k</el-button>
                    <div class="position-education">本科</div>
                </div>
                <div class="company-info">
                    <img class="company-img"
                         src="https://img.bosszhipin.com/beijin/app/mobile/normal-0e3f1e4441a21d4874cece3a3d81f0fe.png">
                    <div class="company-name">函子数创</div>
                    <div class="company-location">
                        <span class="el-icon-location-outline "></span>芝罘区 黄务
                    </div>
                </div>
            </el-card>
        </div>
        <div class="position-card-item">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span>前端开发工程师</span>
                    <el-button class="position-money" type="text">5-7k</el-button>
                    <div class="position-education">本科</div>
                </div>
                <div class="company-info">
                    <img class="company-img"
                         src="https://img.bosszhipin.com/beijin/app/mobile/normal-0e3f1e4441a21d4874cece3a3d81f0fe.png">
                    <div class="company-name">函子数创</div>
                    <div class="company-location">
                        <span class="el-icon-location-outline "></span>芝罘区 黄务
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "JobSeekerIndexPositionCard",
  mounted() {
    console.log("111")
    this.$store.dispatch('getRecommendPositionsAction', this.jobHunter.id)
  },
  computed: {

    ...mapState(['jobHunter'])
  }
}
</script>

<style scoped lang="less">
    .position-card {
        font-size: 15px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .position-card-item {
            width: 30%;
        }
    }

    .position-money {
        float: right;
        padding: 3px 0;
        font-size: 15px;
        color: #fd7240;
    }


    .position-education {
        color: #8d92a1;
        font-size: 13px;
        padding-top: 4px;
    }

    .company-info {
        overflow: hidden;
    }

    .company-img {
        width: 30px;
        height: 30px;
        float: left;
    }

    .company-name {
        font-size: 13px;
        color: #61687c;
        float: left;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
    }

    .company-location {
        font-size: 13px;
        color: #61687c;
        float: right;
        padding: 6px 0;

    }
</style>
