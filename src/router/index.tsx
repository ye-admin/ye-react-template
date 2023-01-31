import React, {} from "react"
import ErrorPage from "@/pages/error-page"
import Main from "@/pages/main"
import Home from "@/pages/home"
import Contact from "@/pages/contact"
import Login from "@/pages/login"

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

// 虽然有好几个/ / / 但是实际都是一级路由
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
                element: <div>欢迎</div>,
                id: 'welcome',
                meta: {
                    title: '欢迎'
                },
                showNav: true
            },
            {
                path: '/book',
                element: <Home />,
                id: 'home',
                meta: {
                    title: '首页'
                },
                showNav: true
            },
            {
                path: "/contacts",
                element: <Contact />,
                id: 'contacts',
                meta: {
                    title: '联系人'
                },
                showNav: true
            },
            {
                path: "/ce",
                id: 'contacts',
                meta: {
                    title: '测试'
                },
                showNav: true,
                children: [
                    {
                        path: "/ce/one",
                        element: <div>测试1</div>,
                        id: 'contacts1',
                        meta: {
                            title: '测试1'
                        },
                        showNav: true,
                        children: [
                            {
                                path: "/ce/one/two",
                                element: <div>测试2</div>,
                                id: 'contacts2',
                                meta: {
                                    title: '测试2'
                                },
                                showNav: true
                            },
                        ]
                    },
                    {
                        path: "/ce/five",
                        element: <div>测试5</div>,
                        id: 'contacts5',
                        meta: {
                            title: '测试5'
                        },
                        showNav: true
                    },
                ]
            },
            {
                path: "/error",
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