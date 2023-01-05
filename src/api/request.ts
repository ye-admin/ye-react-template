// import axios from 'axios'
// import { message } from 'antd';

// // const baseURL = config.realWorldServer

// const instance = axios.create({
//     // baseURL: baseURL,
//     timeout: 15_000
// });


// // 请求拦截
// instance.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     // 是否应该携带token？
//     // const token = store.getState().app.token
//     const iv = Date.now().toString();

//     // token && (config.headers['Authorization-New'] = `Bearer ${encryptToken(token, iv)}`)
//     config.headers["oil-channel"] = "SMARTLINK-THIRD-MERCHANT"
//     config.headers["timestamp"] = iv
//     config.headers["self-test"] = 'aU8$KhHnMdepo9'

//     // LoadingStack.whenRequest(config)

//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     // LoadingStack.whenResponse(error?.config)
//     return Promise.reject(error);
// })

// // 响应拦截
// instance.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     // LoadingStack.whenResponse(response?.config)
//     if (response?.data?.code && response.data.code !== 200) {
//         const result = response.data
//         switch (result.code) {
//             case 401: {
//                 // 跳登陆
//                 // store.dispatch(clearUinfoAndRedirectLogin() as any)
//             } break;
//             case 525: {
//                 // 跳登陆
//                 // store.dispatch(clearUinfoAndRedirectLogin() as any)
//             } break;
//             default: {
//                 message.error(result.message || "Error");
//             } break;
//         }
//     }
//     return response.data;

// }, function (error) {
//     if (error.response.data.code === 525 || error.response.data.code === 401) {
//         // 跳登陆
//         // store.dispatch(clearUinfoAndRedirectLogin() as any)
//     }
//     // 对响应错误做点什么
//     // LoadingStack.whenResponse(error?.config)
//     return Promise.reject(error);
// })

// export default instance
// // const secret = "a0cdeff654dfeb6b";
// // function encryptToken(token: string, iv: string) {
// //     return CryptoJS.AES.encrypt(token, CryptoJS.enc.Utf8.parse(secret), {
// //         iv: CryptoJS.enc.Utf8.parse("000" + iv),
// //         mode: CryptoJS.mode.CBC,
// //         padding: CryptoJS.pad.Pkcs7
// //     }).toString();
// // }