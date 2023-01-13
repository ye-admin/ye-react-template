import TitleNav from '@/layout/TitleNav'
import Footer from '@/layout/Footer'
// import { RouterBeforeEach } from '@/router';
import React, { FC } from 'react'
import "./style.less"
import { Outlet } from 'react-router-dom'

const Main: FC = () => {

    return <div id="layout">
        <div className="main">
            <TitleNav />
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default Main