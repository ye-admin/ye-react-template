import React, { lazy } from "react"
// import Main from "@/pages/main"
// import Contact from "@/pages/contact"
// import Login from "@/pages/login"
const Main = lazy(() => import('@/pages/main'))
const Home = lazy(() => import('@/pages/home'))
const Contact = lazy(() => import('@/pages/contact'))
const Login = lazy(() => import('@/pages/login'))
const ErrorPage = lazy(() => import('@/pages/error-page'))

type meta = {
    title?: string
    authority?: string
}
export type MyRouter = {
    path?: string
    id: string
    children?: MyRouter[]
    element?: React.ReactNode | null
    meta?: meta
    showNav?: boolean
}

export const router: MyRouter[] = [
    // 一级路由
    {
        path: '/',
        element: <Main />,
        id: 'main',
        // 二级路由
        children: [
            {
                path: '/',
                element: <Home />,
                id: 'home',
                meta: {
                    title: '首页'
                },
                showNav: true
            },
            {
                path: "contacts",
                element: <Contact />,
                id: 'contacts',
                meta: {
                    title: '联系人'
                },
                showNav: true
            },
            {
                path: "error",
                element: <ErrorPage />,
                id: 'error',
                meta: {
                    title: '错误'
                }
            }
        ]
    },
    {
        path: '/login',
        id: 'login',
        element: <Login />,
        meta: {
            title: '登录'
        }
    }
]