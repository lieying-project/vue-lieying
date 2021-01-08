import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入Vuex
import store from './store'
//引入ElementUI
import ElementUI from "element-ui"
//引入富文本编辑器
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
//清除初始样式
import './assets/styles/normalize.css'
//使用rem布局
import './assets/js/rem'
//引入svg图标
import './assets/icons'

// import 'element-ui/lib/theme-chalk/index.css'
import request from "./api/request"
// import './assets/styles/variables.less'
import "./assets/styles/element-variables.scss"

// require("./mock.js");
import VueWechatTitle from 'vue-wechat-title'

//引入过滤器
import filters from './assets/js/filter'
Vue.prototype.request = request;
Vue.config.productionTip = false;
//定义一个事件车--处理分页
Vue.prototype.eventBus = new Vue();
Vue.use(ElementUI)
Vue.use(QuillEditor)
Vue.use(VueWechatTitle)
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
