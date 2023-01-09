import React, { } from "react";
// import {
//     Outlet,
//     useLocation,
//     useNavigate
// } from "react-router-dom";
import ErrorPage from "@/pages/error-page";
import Main from "@/pages/main";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Login from "@/pages/login";

type meta = {
    title?: string;
    authority?: string
}
export type MyRouter = {
    path?: string;
    id: string;
    index?: boolean;
    children?: MyRouter[];
    element?: React.ReactNode | null;
    meta?: meta;
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
                index: true,
                element: <Home />,
                id: 'home',
                meta: {
                    title: '首页'
                }
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
                id: 'contacts',
                meta: {
                    title: '联系人'
                }
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

// 后台管理项目路由守卫-localStorage或者redux
// export const RouterBeforeEach = () => {
//     const location = useLocation()
//     const navigator = useNavigate()
//     const token = localStorage.getItem('token')
//     if (!token && location.pathname !== '/login') {
//         navigator('/login')
//     }
//     return <Outlet />
// }