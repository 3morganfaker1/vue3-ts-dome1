import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { dataType } from "element-plus/es/components/table-v2/src/common";
const service = axios.create({
    baseURL:'https://www.fastmock.site/mock/fcd98b490c5971f685cf4b0c13d6a0ff/serveradmin',
    timeout: 5000,
    headers:{
        "Content-Type": "application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<unknown>=>{
    config.headers = config.headers || {};
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || "";
    }
    return config;
})

//相应拦截
service.interceptors.response.use((res: AxiosResponse): Promise<never>=> {
    const code:number = res.status;
    if(code != 200) {
        return Promise.reject(res.data)
    }
    return res.data;
},(error)=>{
    console.log(error )
})

export default service; 