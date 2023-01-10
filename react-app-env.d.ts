import axios from "axios";

declare namespace ApiType {
    export type Pagination = {
        pageNum: number
        pageSize: number
    }
    export type PaginationT = {
        total: number
    } & Pagination
    export type list<T> = {
        code: number
        message: string
        data: {
            list: T[]
        } & PaginationT
    }
    export type data<T> = {
        code: number
        message: string
        data: T
    }
}

declare module 'axios' {
    interface AxiosRequestConfig {
        /**
         * 是否显示loading
         */
        loading?: boolean
    }
}
