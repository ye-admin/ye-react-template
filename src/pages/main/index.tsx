import TitleNav from '@/layout/TitleNav';
import Footer from '@/layout/Footer';
// import { RouterBeforeEach } from '@/router';
import React, { FC } from 'react';
import "./style.less";
import { Outlet } from 'react-router-dom';

const REACT_ENV = process.env.REACT_ENV

const Main: FC = () => {
    console.log(REACT_ENV);
    console.error('1')

    return <div id="layout">
        <div className="main">
            <TitleNav />
            <Outlet />
        </div>
        <Footer />
    </div>
};

export default Main;