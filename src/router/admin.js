import AdminLogin from "../components/admin/adminLogin/AdminLogin";
import AdminIndex from "../components/admin/adminIndex/AdminIndex";
import ReportingManage from "../components/admin/reportManage/ReportingManage";
import SourceManage from "../components/admin/sourceManage/SourceManage";
import CompanyManage from "../components/admin/companyManage/CompanyManage";
import PublishInformation from "../components/user/jobHunter/information/PublishInformation";
export default [
    {
        path: '/adminLogin',
        name: 'AdminLogin',
        component: AdminLogin,
        meta:{role:"admin"}
    },
    {
        path: "/admin",
        component: AdminIndex,
        meta:{role:"admin",name:"首页"},
        children:[
            {
                path:"/admin/report",
                name:"ReportingManage",
                component:ReportingManage,
                meta:{role: "admin"}
            },
            {
                path:"/admin/company",
                name:"CompanyManage",
                component:CompanyManage,
                meta:{role:"admin"}
            },{
                path:"/admin/source",
                name:"SourceManage",
                component:SourceManage,
                meta:{role:"admin"}
            },{
                path:"/admin/information/publish",
                name:"PublishInformation",
                component:PublishInformation,
                meta:{role:"admin"}
            }
        ]
    }

]
