declare module '*.less'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare namespace ApiType {
    type Pagination = {
        current: number
        pageSize: number
    }
    type PaginationT = {
        total: number
    } & ApiType.Pagination
    type list<T> = {
        code: number
        message: string
        data: {
            list: T[]
        } & ApiType.PaginationT
    }
    type data<T> = {
        code: number
        message: string
        data: T
    }
}
declare interface Window {
    env: string
}