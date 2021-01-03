<template>
    <div class="resume-user-sider">
        <div class="resume-extra-file sider-box">
            <h3 class="sider-title">附件管理</h3>
            <ul v-if="resume.extraFiles!=null">
                <li v-for="(f,index) in resume.extraFiles" :key="index">
                    <div class="left-area">
                        <img src="../../../../../assets/imgs/icon-file.png">
                        <span class="text">{{f.name}}</span>
                    </div>
                    <img src="../../../../../assets/imgs/delete2.png">
                </li>
            </ul>
            <a class="upload-resume">上传简历</a>
        </div>
        <img src="../../../../../assets/imgs/zhipin-resume_siderbar.22138ff3.png" class="resume-img">
<!--        <div class="resume-settings sider-box">-->

<!--        </div>-->

    </div>
</template>

<script>
export default {
  name: "ResumeUserSider",
  props: {
    resume: {

    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../../../assets/styles/variables";

    .resume-user-sider {

        width: 280rem /@font-size;
        height: 500rem /@font-size;
        //background-color: #FFFFFF;
        margin: 20rem /@font-size 155rem /@font-size 20rem /@font-size  0;

        .sider-box {
            background: #fff;
            padding: 20px 30px;
            margin-bottom: 16px;

            .sider-title {
                height: 20rem /@font-size;
                font-size: 14rem /@font-size;
                font-weight: 500;
                color: #414a60;
                line-height: 20rem /@font-size;
                align-items: center;
                display: flex;
            }
        }

        .resume-extra-file {
            display: flex;
            flex-flow: column nowrap;

            ul {

                display: flex;
                flex-flow: column nowrap;

                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .left-area {
                        display: flex;
                        align-items: center;
                        .text {

                            margin: 0;
                            padding: 0 10rem /@font-size 0 5rem /@font-size;
                            font-size: 14rem /@font-size;
                            color: #414A60;
                        }
                    }


                }
            }
            .upload-resume{
                display: flex;
                justify-content: center;
                align-items: center;
                //width: 296rem /@font-size;
                height: 30rem /@font-size;
                background-color: #5DD5C8;
                color: #FFFFFF;
                font-size: 15rem /@font-size;
                margin-top: 10rem /@font-size;
                cursor: pointer;

            }


        }

        .resume-img {
            width: 284rem /@font-size;
            height: 140rem /@font-size;
        }
    }

</style>
