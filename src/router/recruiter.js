import RecruitInfo from "../components/user/recruiter/recruitInfo/RecruitInfo";
import CompanyInfo from "../components/user/recruiter/companyInfo/CompanyInfo";
import PersonInfo from "../components/user/recruiter/personInfo/PersonInfo";
import DispatcherInfo from "../components/user/recruiter/dispatcherInfo/DispatcherInfo";
import DispatcherInfoDetail from "../components/user/recruiter/dispatcherInfo/DispatcherInfoDetail";
import RecruitInfoAdd from "../components/user/recruiter/recruitInfo/RecruitInfoAdd"
import RecruitInfoEdit from "../components/user/recruiter/recruitInfo/RecruitInfoEdit";
import RecruitInfoIndex from "../components/user/recruiter/recruitInfo/RecruitInfoIndex";
import Certify from "../components/user/recruiter/certify/Certify";
import RecruiterChat from "../components/user/jobHunter/chat/RecruiterChat";

export default [
    {
        path: "/recruiterIndex",
        component: RecruitInfoIndex,
        children: [
            {
                path: "/recruiterIndex/recruiterInfo",
                component: RecruitInfo,
                meta: {role: "recruiter"}
            }, {
                path: "/recruiterIndex/companyInfo",
                component: CompanyInfo,
                meta: {role: "recruiter"}
            }, {
                path: "/recruiterIndex/personInfo",
                component: PersonInfo,
                meta: {role: "recruiter"}
            }, {
                path: "/recruiterIndex/dispatcherInfo",
                component: DispatcherInfo,
                meta: {role: "recruiter"}
            }, {
                path: "/recruiterIndex/dispatcherInfoDetail",
                component: DispatcherInfoDetail,
                meta: {role: "recruiter"}
            }, {
                path: "/recruiterIndex/addRecruitInfo",
                component: RecruitInfoAdd,
                meta: {role: "recruiter"}
            },
            {
                path: "/recruiterIndex/editRecruitInfo",
                component: RecruitInfoEdit,
                meta: {role: "recruiter"}
            },
            {
                path: '/recruiter/chat/:recruiterId',
                component: RecruiterChat,
                meta: {
                    title: '招聘者聊天',
                    role:'recruiter'
                }
            },
        ],
        redirect: "/recruiterIndex/recruiterInfo"
    },
    {
        path: "/certify",
        component: Certify
    }
]
