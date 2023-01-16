import { AxiosRequestConfig } from 'axios'
declare module 'axios' {
    interface AxiosRequestConfig {
        /**
         * 是否显示loading
         */
        loading?: boolean
    }
}
