<template>
    <div class="expected-position">

        <h3 class="title-wrapper" :style="{display: isShowEditExpectedPositionForm==false?'flex':'none'}">
            <div class="left-title">
                <span class="title-before"></span>
                <span class="text">期望职位</span>
            </div>

        </h3>
        <ul :style="{display: isShowEditExpectedPositionForm==false?'flex':'none'}">
            <li @mouseover="overPosition" @mouseout="outPosition"
                :style="{backgroundColor: expectedPositionBackgroundColor}">
                <div class="info" v-if="resume.expectedPosition!=null">
                            <span class="prev-line" v-if="resume.expectedPosition.name!=null">
                                <img src="../../../../../assets/imgs/position.png">
                                {{resume.expectedPosition.name}}
                            </span>
                    <Vdot/>
                    |
                    <Vdot/>
                    <span class="prev-line" v-if="resume.expectedPosition.salary!=null">
                                 <img src="../../../../../assets/imgs/salary.png">
                                {{resume.expectedPosition.salary}}</span>
                    <Vdot/>
                    |
                    <Vdot/>
                    <span class="prev-line" v-if="resume.expectedPosition.industry!=null">
                                <img src="../../../../../assets/imgs/industry.png">
                                {{resume.expectedPosition.industry.name}}</span>
                    <Vdot/>
                    |
                    <Vdot/>
                    <span class="prev-line" v-if="resume.expectedPosition.city!=null">
                                <img src="../../../../../assets/imgs/address.png">
                                {{resume.expectedPosition.city.name}}</span>
                </div>

                <div class="op" @click="showEditExpectedPositionForm">
                    <img src="../../../../../assets/imgs/edit.png" class="edit-img">
                    <span>编辑</span>
                </div>

            </li>
        </ul>
        <div class="edit-expected-position-form" :style="{display: isShowEditExpectedPositionForm==true?'flex':'none'}">

            <h3 class="edit-title">编辑期望职位</h3>
            <div class="form">
                <div class="form-item-group">
                    <div class="form-item">
                        <div class="item-label">
                            求职类型
                        </div>
                        <el-select v-model="resume.expectedPosition.type" placeholder="请选择" v-if="resume.expectedPosition!=null">
                            <el-option v-for="positionType in expectedPositionTypes" :key="positionType.id"
                                       :label="positionType.name" :value="positionType.name"/>
                        </el-select>
                    </div>
                    <div class="form-item">
                        <div class="item-label">
                            期望职位
                        </div>
                        <el-cascader v-model="resume.expectedPosition.name" :options="positionTypes" v-if="resume.expectedPosition!=null"/>

                    </div>

                </div>
                <div class="form-item-group">
                    <div class="form-item salary">
                        <div class="item-label">
                            薪资要求
                        </div>

                        <el-select  v-model="resume.salary">
                            <el-option label="4k" value="4k"/>
                            <el-option label="5k" value="5k"/>
                            <el-option label="6k" value="6k"/>
                        </el-select>
                        至
                        <el-select  v-model="resume.salary">
                            <el-option label="7k" value="7k"/>

                            <el-option label="8k" value="8k"/>
                            <el-option label="9k" value="9k"/>
                        </el-select>
                    </div>
                    <div class="form-item">
                        <div class="item-label">
                            行业
                        </div>
                        <el-cascader v-model="resume.expectedPosition.industry.name" :options="industryTypes"
                                     v-if="resume.expectedPosition!=null&&resume.expectedPosition.industry!=null"/>


                    </div>

                </div>
                <div class="form-item-group">
                    <div class="form-item">
                        <div class="item-label">
                            城市
                        </div>

                        <el-cascader v-model="resume.expectedPosition.city.name" :options="provinces"
                                     v-if="resume.expectedPosition!=null&&resume.expectedPosition.city!=null"/>
                    </div>


                </div>
            </div>

            <div class="op">
                <div class="btn-close" @click="cancelPositionForm">取消</div>
                <div class="btn-finish" @click="confirmPositionForm">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vdot from "../../../../common/Vdot";
export default {
  name: "ResumeExpectedPosition",
  components: {Vdot},
  props: {
    resume: {

    }
  },
  data() {
    return {
      isShowEditExpectedPositionForm: false,
      primaryPosition: '',
      expectedPositionBackgroundColor: '#ffffff',
      expectedPositionTypes: [
        {id: '全职', name: '全职'},
        {id: '实习', name: '实习'}
      ],
      provinces: [
        {
          value: '浙江', label: '浙江', children: [
            {value: '杭州', label: '杭州'},
            {value: '嘉兴', label: '嘉兴'},
            {value: '宁波', label: '宁波'}
          ]
        },
        {
          value: '山东', label: '山东', children: [
            {value: '济南', label: '济南'},
            {value: '青岛', label: '青岛'},
            {value: '烟台', label: '烟台'}
          ]
        }
      ],
      industryTypes: [
        {
          value: '互联网/IT/电子通信', label: '互联网/IT/电子通信', children: [
            {value: '电子商务', label: '电子商务'},
            {value: '游戏', label: '游戏'},
            {value: '媒体', label: '媒体'}
          ]
        },
        {
          value: '金融', label: '金融', children: [
            {value: 14, label: '银行'},
            {value: '基金', label: '基金'},
            {value: '投资/融资', label: '投资/融资'}
          ]
        }
      ],
      positionTypes: [
        {
          value: '互联网技术', label: '互联网技术', children: [
            {value: '后端开发', label: '后端开发'},
            {value: 'Java', label: 'Java'},
            {value: 'Python', label: 'Python'}
          ]
        },
        {
          value: '互联网产品', label: '互联网产品', children: [
            {value: '产品经经', label: '产品经理'},
            {value: '数据产品经理', label: '数据产品经理'},
            {value: '用户研究', label: '用户研究'}
          ]
        }
      ]


    }
  },
  methods: {
    overPosition() {
      this.expectedPositionBackgroundColor = '#F6F6F8'
    },
    outPosition() {
      this.expectedPositionBackgroundColor = '#ffffff'
    },
    showEditExpectedPositionForm() {
      this.isShowEditExpectedPositionForm = !this.isShowEditExpectedPositionForm
      this.primaryPosition = this.resume.expectedPosition
    },
    confirmPositionForm() {
      this.isShowEditExpectedPositionForm = !this.isShowEditExpectedPositionForm
    },
    cancelPositionForm() {
      this.isShowEditExpectedPositionForm = !this.isShowEditExpectedPositionForm
      this.resume.expectedPosition = this.primaryPosition

    }
  }
}
</script>

<style scoped lang="less">


    .expected-position {
        display: flex;
        flex-flow: column nowrap;
        border-bottom: 1rem /@font-size solid #f2f3f3;
        padding-bottom: 15rem /@font-size;
        .title-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18rem /@font-size;
            font-weight: 400;
            padding: 0 30rem /@font-size;

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

        }
        ul {
            list-style-type: none;
            margin: 0;

            padding:  0 30rem /@font-size 30rem /@font-size 30rem /@font-size;
            li {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                height: 24rem /@font-size;
                padding: 8rem /@font-size 0 8rem /@font-size 15rem /@font-size;
                font-size: 14rem /@font-size;
                color: #61687C;

                line-height: 20rem /@font-size;

                margin: 0;

                cursor: pointer;

                .info {
                    display: flex;
                    align-items: center;

                    .prev-line {
                        display: flex;
                        align-items: center;
                        color: #414A60;
                        height: 24rem /@font-size;
                        font-size: 14rem /@font-size;
                        //margin-right: 20rem /@font-size;
                        img {
                            width: 20rem /@font-size;
                            height: 20rem /@font-size;
                            margin-right: 8rem /@font-size;
                        }
                    }
                }

                .op {

                    display: flex;
                    justify-content: center;
                    color: #00c2b3;
                    align-items: center;
                    font-size: 14rem /@font-size;

                    .edit-img {
                        width: 18rem /@font-size;
                        height: 18rem /@font-size;
                    }

                    span {
                        margin-left: 5rem /@font-size;

                    }
                }


            }
        }

        .edit-expected-position-form {
            display: flex;
            flex-flow: column nowrap;
            padding: 20rem /@font-size 60rem /@font-size;
            min-height: 80rem /@font-size;
            background-color: #F8F9FB;
            flex-flow: column nowrap;

            .edit-title {
                font-size: 16rem /@font-size;
                font-weight: 400;
                margin-top: 0;
                padding: 0;
                color: #24272e;
            }

            .form {
                display: flex;

                .form-item-group {
                    flex: 1;

                    .form-item {
                        margin-bottom: 10rem /@font-size;

                        .item-label {
                            color: #495060;
                            font-size: 14rem /@font-size;
                            margin-bottom: 10rem /@font-size;
                        }

                    }

                    .salary {
                        /deep/ .el-select {
                            /deep/ .el-input--suffix .el-input__inner {
                                width: 80rem /@font-size !important;
                            }
                        }

                    }


                }
            }

            .op {
                display: flex;
                justify-content: flex-end;
                margin-top: 20rem /@font-size;

                .btn-close {
                    width: 80rem /@font-size;
                    padding: 10rem /@font-size;
                    font-size: 14rem /@font-size;
                    color: #414a60;
                    background-color: white;
                    text-align: center;
                    border: 1rem /@font-size solid #F8F9FB;
                    cursor: pointer;
                }

                .btn-finish {
                    width: 80rem /@font-size;
                    margin-left: 15rem /@font-size;
                    padding: 10rem /@font-size;
                    font-size: 14rem /@font-size;
                    color: white;
                    background-color: #5dd5c8;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }
</style>
