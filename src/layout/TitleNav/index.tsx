import { Card, Space } from 'antd'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { router } from "@/router"
import "./style.less"

const TitleNav: FC = () => {
    const getClassName = ({ isActive, isPending }: {
        isActive: boolean
        isPending: boolean
    }) => isActive ? "active" : isPending ? "pending" : ""

    const routerList = router[0].children.filter(item => item.showNav)

    return <div id='titleNav'>
        <Card>
            <Space>
                {
                    routerList.map(item => {
                        return <NavLink key={item.id} to={item.path || '/'} className={getClassName}>{item.meta.title}</NavLink>
                    })
                }
            </Space>
        </Card>
    </div>
}

export default TitleNav