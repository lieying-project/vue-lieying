//request.js
//通过promise对axios做二次封装,针对用户端参数,做灵活配置
// eslint-disable-next-line no-unused-vars
import {Message,Loading} from "element-ui";
import instance from "./interceptor";
//import axios from "axios"

/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param {url} 请求地址
 * @param {params} 请求参数
 * @param {options} 请求配置，针对当前本次请求；
 * @param loading 是否显示loading
 * @param error 本次是否显示错误
 */

// eslint-disable-next-line no-unused-vars
function request(url,params,options={loading:true,error:true},method) {
    let loadingInstance;
    //请求前loading
    if(options.loading) loadingInstance = Loading.service();
    return new Promise((resolve,reject)=>{
        let data;
        if(method=="get") {
            data = {params}
        } else if(method == "post") {
            data={data:params}
        }
        instance({
            url,
            method,
            ...data
        }).then((res)=>{
            if(res.status === 200) {
                resolve(res);
            } else{
                if (options.error) {
                    Message.error("出错了");
                    reject(res)
                }
            }

        }).catch((error)=>{

            // eslint-disable-next-line no-undef
            Message.error(error.message)
        }).finally(()=>{
            loadingInstance.close();
        })
    })
}
//封装get请求
function get(url,params,options){
    return request(url,params,options,"get");
}
//封装post请求
function post(url,params,options) {
    return request(url,params,options,"post");
}
export default{
    get,post
}
