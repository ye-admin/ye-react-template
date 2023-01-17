import { Card, Space } from 'antd'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.less"

const TitleNav: FC = () => {
    const getClassName = ({ isActive, isPending }: {
        isActive: boolean
        isPending: boolean
    }) => isActive ? "active" : isPending ? "pending" : ""
    return <div id='titleNav'>
        <Card>
            <Space>
                <NavLink to={`/`} className={getClassName}>首页</NavLink>
                <NavLink to={`contacts/1`} className={getClassName}>示例</NavLink>
                <NavLink to={`error`} className={getClassName}>错误</NavLink>
            </Space>
        </Card>
    </div>
}

export default TitleNav