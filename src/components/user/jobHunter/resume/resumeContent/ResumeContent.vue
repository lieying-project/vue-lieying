<template>
    <div class="resume-content">
        <div class="resume-content-box">
            <div class="updated-time">
                <span class="time">最后更新 {{resume.updatedTime}} </span>
                <a class="preview">预览简历</a>
            </div>
            <ResumePersonalInfo :resume="resume"/>
            <ResumePersonalAdvantage :resume="resume"/>
            <ResumeExpectedPosition :resume="resume"/>
            <ResumeInternshipExperience :resume="resume"/>
            <ResumeProjectExperience :resume="resume"/>
            <ResumeEducationExperience :resume="resume"/>
            <ResumeCredential :resume="resume"/>
            <ResumeSocialHomepage :resume="resume"/>
            <ResumeVolunteerExperience :resume="resume"/>
        </div>
    </div>
</template>

<script>

import ResumePersonalAdvantage from "./ResumePersonalAdvantage";
import ResumeExpectedPosition from "./ResumeExpectedPosition";
import ResumeProjectExperience from "./ResumeProjectExperience";
import ResumeEducationExperience from "./ResumeEducationExperience";
import ResumeCredential from "./ResumeCredential";
import ResumeSocialHomepage from "./ResumeSocialHomepage";
import ResumeVolunteerExperience from "./ResumeVolunteerExperience";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeInternshipExperience from "./ResumeInternshipExperience";

export default {
  name: "ResumeContent",
  components: {
    ResumeInternshipExperience,
    ResumePersonalInfo,
    ResumeVolunteerExperience,
    ResumeSocialHomepage,
    ResumeCredential,
    ResumeEducationExperience,
    ResumeProjectExperience,
    ResumeExpectedPosition,
    ResumePersonalAdvantage,

  },
  props: {
    resume: {}
  },
  data() {
    return {}
  }
// watch: {
//   'resume.advantage':{
//     handler(newName,oldName){
//
//       console.log("newName："+this.resume.advantage )
//
//     },
//     immediate: true,
//     //deep: true
//   }
// }
}
</script>

<style scoped lang="less">
    .resume-content {
        width: 880rem /@font-size;
        height: auto;
        background-color: #FFFFFF;
        margin: 20rem /@font-size 0 20rem /@font-size 155rem /@font-size;

        .resume-content-box {
            display: flex;
            flex-flow: column nowrap;

            .updated-time {
                display: flex;
                justify-content: space-between;
                //margin-bottom: 10rem /@font-size;
                margin: 30rem /@font-size 30rem /@font-size 10rem /@font-size 30rem /@font-size;

                .time {
                    font-size: 12rem /@font-size;
                    color: #9FA3B0;
                }

                .preview {
                    font-size: 14rem /@font-size;
                    color: #414A60;
                }
            }


        }
    }
</style>
