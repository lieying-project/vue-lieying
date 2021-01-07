import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './admin'
import jobHunter from "./jobHunter";
import recruiter from "./recruiter";
import Test from "../components/Test";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/jobHunterIndex"
  },
  {
    path:'/test',
    name:'Test',
    component: Test
  },
  ...jobHunter,
  ...recruiter,
  ...admin
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//设置全局路由钩子
// router.beforeEach((to,from,next)=>{
//     //首先判断是否具有token 即判断是否已经登录
//     if(to.path==="/clientLogin") {
//       next();
//       console.log("toClientLogin")
//     } else{
//
//       if(store.getters.getToken) {
//         next();
//         console.log("有token 跳转到next");
//       } else{
//         console.log("没有token 跳转到clientLogin");
//         next("/clientLogin");
//       }
//     }
// })

export default router
