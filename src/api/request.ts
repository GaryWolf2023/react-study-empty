import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入

const request = axios.create({
    baseURL: import.meta.env['VITE_BASE_URL'],
    timeout: import.meta.env['VITE_AJAX_TIMEOUT']
})
request.interceptors.request.use((request: AxiosRequestConfig): any => {
    // 添加请求头
    request.headers = {
    }
    return request
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

request.interceptors.response.use((response: AxiosResponse): any => {
    // 处理响应
    return response
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})


type httpObj = {
    method: string,
    url: string,
    data?: any,
    params?: any,
    config?: AxiosRequestConfig
}

const http = (obj: httpObj): any => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        request({
            method: obj.method,
            url: obj.url,
            data: obj.data,
            params: obj.params,
            ...obj.config
        }).then((response: any) => {
            resolve(response.data)
        }).catch((error: any) => {
            reject(error)
        }).finally(() => {
            NProgress.done()
        })
    })
}

export default http