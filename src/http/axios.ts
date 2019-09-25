import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';

//设置头
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
};

//设置超时时间
axios.defaults.timeout = 5000;

let instance = axios.create();

//请求request
instance.interceptors.request.use((config:any)=>{
    console.info(config)
    return config
},(error:any)=>{
    return Promise.reject(error)
})

//相应
instance.interceptors.response.use((response:any)=>{
    console.info(response.data)
    return response.data;
},(error:any)=>{
    return Promise.reject(error)
})

Vue.prototype.$post =  (url: any, params: any) => {
    return new Promise((resolve, reject) => {
        instance.post(url, qs.stringify(params)).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err);
         });
     });
};

// 将axios 的 get 方法，绑定到 vue 实例上面的 $get
Vue.prototype.$get =  (url: any, params:any={}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params: params }).then((res: any) => {
            resolve(res); // 返回请求成功的数据 data
        }).catch((err: any) => {
            reject(err);
        });
    });
};



