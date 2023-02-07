import React, { FC, ReactNode, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router, MyRouter } from './router'
import NoFont from "@/pages/noFont"

const REACT_ENV = process.env.REACT_ENV
console.log('REACT_ENV', REACT_ENV)

const App: FC = () => {
    const [list] = useState(router)
    // 鉴权过滤 - 未登录只渲染无需鉴权的路由 登录后根据鉴权过滤路由
    useEffect(() => {
        // setTimeout(() => {
        //     setList([...list])
        // }, 1000);
    }, [])

    return <BrowserRouter>
        <Suspense fallback={<div>loading....</div>}>
            <Routes>
                {list.map(i => renderRoute(i))}
                <Route path='*' element={<NoFont />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
}

export default App

function renderRoute(item: MyRouter): ReactNode {
    return <Route key={item.id} path={item.path} element={item.element}>
        {
            item.children && item.children.map(ele => renderRoute(ele))
        }
    </Route>
}