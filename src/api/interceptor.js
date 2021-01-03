//interceptor的作用就是拦截,主要针对接口常规报错,网络报错,系统报错,权限认证等做拦截
// eslint-disable-next-line no-unused-vars
import axios from "axios"
import {MessageBox} from "element-ui"
import store from "../store"
import router from "../router"
//创建一个独立的axios实例
let service;
service = axios.create({
  //设置baseUrl地址,如果通过proxy跨域可以直接写base地址
  // baseURL: "http://127.0.0.1:8080/lieying",
  //定义统一的请求头部
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Access-Control-Expose-Headers": "token"
    },
    get: {
      "Access-Control-Expose-Headers": "token"
    }
  },
  //配置请求超时时间
  timeout: 10000,

});

//请求拦截
service.interceptors.request.use(config => {
  //自定义header,可添加项目token
  let token = store.getters.getToken;
  if (token) {
    config.headers.token = token;
  }
  return config
});

//var tokenIndex = 1;
//返回拦截
service.interceptors.response.use((response) => {

  if (response.status === 200) {
    //response.headers['token'] = "token"+tokenIndex;
    //tokenIndex = tokenIndex+1;
    if (response.headers['token'] !== undefined) {
      //将响应带回来的token保存起来
      store.dispatch("updateTokenAction", response.headers["token"]);
    }
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        MessageBox.alert("身份信息已过期,请重新登录", "提示", {
          confirmButtonText: "重新登录",
          showClose: false,
          type: "error",
          callback: () => {
            //清除token
            store.dispatch("updateTokenAction", "");
            //跳转到登录页
            router.replace({
              path: "/userLogin",

            })
          }
        });
        break;
      case 403:
        //console.log("error:" + 403);
        console.log(err)
        break;
      case 404:
        console.log("error:" + 404);
        console.log(err)
        break;
      case 418:
        MessageBox.alert("该求职者已在别处登录,如果不是个人操作，请及时修改密码", "提示", {
          confirmButtonText: "重新登录",
          showClose: false,
          type: "error",
          callback: () => {
            //清除token
            store.dispatch("updateTokenAction", "");
            //跳转到登录页
            router.replace({
              path: "/userLogin",

            })
          }
        });
      case 500:
        console.log("error: " + 500);
        console.log(err)
        break;
    }
    return Promise.reject(err);
  }
})

export default service;
