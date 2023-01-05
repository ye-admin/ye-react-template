import Footer from '@/layout/Footer';
import { RouterBeforeEach } from '@/router';
import { Card, Space } from 'antd';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Main: FC = () => {
    const getClassName = ({ isActive, isPending }: {
        isActive: boolean;
        isPending: boolean;
    }) => isActive ? "active" : isPending ? "pending" : ""
    return <>
        <div id="layout">
            <div id="outlet">
                <Card>
                    <Space>
                        <NavLink to={`/`} className={getClassName}>首页</NavLink>
                        <NavLink to={`contacts/1`} className={getClassName}>示例</NavLink>
                        <NavLink to={`error`} className={getClassName}>错误</NavLink>
                    </Space>
                </Card>
                <RouterBeforeEach />
            </div>
            <Footer />
        </div>
    </>
};

export default Main;