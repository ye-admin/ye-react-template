import axios from 'axios'
import { message } from 'antd'
import { openLoading, closeLoading } from "@/components/GlobalLoading"

// const baseURL = config.realWorldServer

const request = axios.create({
    baseURL: location.origin,
    timeout: 10000
})
// 请求拦截
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 是否应该携带token？
    // const token = store.getState().app.token
    const time = Date.now().toString()
    // console.log(config.loading)
    // token && (config.headers['Authorization-New'] = `Bearer ${encryptToken(token, iv)}`)
    config.headers["timestamp"] = time

    openLoading(config?.loading)
    return config
}, function (error) {
    // 对请求错误做些什么
    closeLoading(error?.config?.loading)
    return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // LoadingStack.whenResponse(response?.config)
    if (response?.data?.code !== 200) {
        const result = response.data
        switch (result.code) {
            case 401: {
                // 跳登陆
                // store.dispatch(clearUinfoAndRedirectLogin() as any)
            } break
            case 525: {
                // 跳登陆
                // store.dispatch(clearUinfoAndRedirectLogin() as any)
            } break
            default: {
                message.error(result.message || "Error")
            } break
        }
    }
    return response

}, function (error) {
    if (error.response?.data.code === 525 || error.response?.data.code === 401) {
        // 跳登陆
        // store.dispatch(clearUinfoAndRedirectLogin() as any)
    }
    // 对响应错误做点什么
    closeLoading(error?.config?.loading)
    return Promise.reject(error)
})

export default request