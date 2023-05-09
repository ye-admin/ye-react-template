// 普通console.log用于占位(暂未开发的功能，eles，某个功能函数)
/**
 * .catch之类的抛出错误使用
 */
export const errorLog = (key: string, value: any) => {
    console.log('%c[' + key + ']=', 'color: red;font-size:20px', value)
}
/**
 * 便于线上信息查看的配置信息(业务代码不可使用)
 */
export const envLog = (key: string, value: any) => {
    console.log('%c[' + key + ']=', 'color: #1DA57A;font-size:20px', value)
}
/**
 * 本地以及测试环境的业务代码便于调试，用完立即删除(最好不要带入线上)
 */
export const debugLog = (key: string, value: any) => {
    console.log('%c[' + key + ']=', 'color: orange;font-size:20px', value)
}