import RecruiterIndex from "../components/user/recruiter/RecruiterIndex";
import RecruitInfo from "../components/user/recruiter/recruitInfo/RecruitInfo";
import CompanyInfo from "../components/user/recruiter/companyInfo/CompanyInfo";
import PersonInfo from "../components/user/recruiter/personInfo/PersonInfo";
import DispatcherInfo from "../components/user/recruiter/dispatcherInfo/DispatcherInfo";
import DispatcherInfoDetail from "../components/user/recruiter/dispatcherInfo/DispatcherInfoDetail";
import RecruitInfoAdd from "../components/user/recruiter/recruitInfo/RecruitInfoAdd"
import RecruitInfoEdit from "../components/user/recruiter/recruitInfo/RecruitInfoEdit";

export default [
  {
    path: "/recruiterIndex",
    component: RecruiterIndex,
    meta: {role: "recruiter"}
  }, {
    path: "/recruiterInfo",
    component: RecruitInfo,
    meta: {role: "recruiter"}
  }, {
    path: "/companyInfo",
    component: CompanyInfo,
    meta: {role: "recruiter"}
  }, {
    path: "/personInfo",
    component: PersonInfo,
    meta: {role: "recruiter"}
  }, {
    path: "/dispatcherInfo",
    component: DispatcherInfo,
    meta: {role: "recruiter"}
  }, {
    path: "/addRecruitInfo",
    component: RecruitInfoAdd,
    meta: {role: "recruiter"}
  }, {
    path: "/editRecruitInfo",
    component: RecruitInfoEdit,
    meta: {role: "recruiter"}
  }, {
    path: "/dispatcherInfoDetail",
    component: DispatcherInfoDetail,
    meta: {role: "recruiter"}
  }
]
