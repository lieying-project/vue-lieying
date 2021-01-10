import UserLogin from "../components/user/login/UserLogin"
import PositionInfo from "../components/user/jobHunter/position/PositionInfo"
import PositionDetail from "../components/user/jobHunter/position/PositionDetail";
import CompanyDetail from "../components/user/jobHunter/company/CompanyDetail";
import CompanyList from "../components/user/jobHunter/company/CompanyList";
import ResumeInfo from "../components/user/jobHunter/resume/ResumeInfo";
import JobHunterIndex from "../components/user/jobHunter/index/JobHunterIndex";
import JobHunterChat from "../components/user/jobHunter/chat/JobHunterChat";
import RecruiterChat from "../components/user/jobHunter/chat/RecruiterChat";
import Information from "../components/user/jobHunter/information/Information";
import InformationDetail from "../components/user/jobHunter/information/InformationDetail";
import ArticleList from "../components/user/jobHunter/article/ArticleList";
import ArticleDetail from "../components/user/jobHunter/article/ArticleDetail";
import PublishArticle from "../components/user/jobHunter/article/PublishArticle";
import JobHunterInfo from "../components/user/jobHunter/personalInfo/JobHunterInfo";
import UserRegister from "../components/user/login/UserRegister";
import ResumeInfoList from "../components/user/jobHunter/resume/ResumeInfoList/ResumeInfoList";
export default[
  {
    path: '/',
    redirect: "/jobHunterIndex",
    meta: {
      role:'jobHunter'
    }
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: UserLogin,
    meta: {
      title: '用户登录',
      role:'jobHunter'
    }
  },
  {
    path: '/userRegister',
    name: 'UserRegister',
    component: UserRegister,
    meta: {
      title: '用户注册',
      role:'jobHunter'
    }
  },
  {
    path:'/jobHunter/info',
    name: 'JobHunterInfo',
    component:JobHunterInfo,
    meta: {
      title: '求职者个人信息',
      role:'jobHunter'
    }
  },
  {
    path: "/jobHunterIndex",
    component: JobHunterIndex,
    meta: {
      title: '求职者主页',
      role:'jobHunter'
    }
  },

  {
    path: "/position",
    component: PositionInfo,
    meta: {
      title: '职位信息',
      role:'jobHunter'
    }
  },
  {
    path: '/position/:id',
    name: 'PositionDetail',
    component: PositionDetail,
    meta: {
      title: '职位详情',
      role:'jobHunter'
    }
  },
  {
    path: '/company/:id',
    name: 'CompanyDetail',
    component: CompanyDetail,
    meta: {
      title: '公司详情',
      role:'jobHunter'
    }
  },
  {
    path: '/companies',
    component: CompanyList,
    meta: {
      title: '公司列表',
      role:'jobHunter'
    }
  },
  {
    path: '/jobHunter/chat/:jobHunterId',
    component: JobHunterChat,
    meta: {
      title: '求职者聊天',
      role:'jobHunter'
    }
  },

  {
    path:'/resume/list',
    component: ResumeInfoList,
    meta: {
      title: '简历信息列表',
      role:'jobHunter'
    }
  },
  {
    path: '/resume/:id',
    component: ResumeInfo,
    meta: {
      title: '简历信息',
      role:'jobHunter'
    }
  },
  {
    path: '/information',
    component: Information,
    meta: {
      title: '资讯信息',
      role:'jobHunter'
    }
  },
  {
    path: '/information/:id',
    component: InformationDetail,
    meta: {
      title: '资讯详情',
      role:'jobHunter'
    }
  },
  {
    path: '/article/list',
    component: ArticleList,
    meta: {
      title: '文章列表',
      role:'jobHunter'
    }
  },
  {
    path: '/article/publish',
    component: PublishArticle,
    meta: {
      title: '发表文章',
      role:'jobHunter'
    }
  },
  {
    path: '/article/:id',
    component: ArticleDetail,
    meta: {
      title: '文章详情',
      role:'jobHunter'
    }
  }
]
