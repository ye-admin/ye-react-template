import React, { FC, useEffect, useState } from 'react'
import { Card, Layout, Menu, MenuProps, Space } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Outlet, useLocation } from 'react-router-dom'
import { MyRouter, router } from "@/router/index"
import "./style.less"
import { useGoRouter } from '@/utils/uHook'
import { useAppSelector } from '@/redux/hooks'

const { Sider, Content, Header } = Layout

const Main: FC = () => {
    const { token } = useAppSelector(data => data.persist)
    const goPage = useGoRouter()
    const { pathname } = useLocation()
    const [items, setItems] = useState<ItemType[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string>(pathname)
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const selectMenu: MenuProps['onSelect'] = e => {
        setSelectedKeys(e.key)
        goPage(e.key)
    }
    const openMenu: MenuProps['onOpenChange'] = e => {
        setOpenKeys(e)
    }
    useEffect(() => {
        // 没有token直接跳登录
        if (!token) {
            goPage('/login')
            return
        } else {// 有token获取权限并验证token是否失效
            console.log('token', token)
        }
        //过滤路由中不可用的menu数据以及分配到的权限
        const arr: ItemType[] = []
        router[0].children.forEach(element => {
            if (element.showNav) {
                arr.push(getItem(element))
            }
        })
        setItems(arr)
        // 刷新后的默认menu
        if (pathname !== '/' && pathname.length - 1 === pathname.lastIndexOf('/')) {
            setSelectedKeys(pathname.slice(0, -1))
        } else {
            setSelectedKeys(pathname)
        }
        // 刷新后的默认打开的menu菜单
        const newOpenKeys: string[] = []
        if (pathname !== '/') {
            const str = pathname.split('/').filter(o => o)
            let a = ''
            str.forEach((e, i) => newOpenKeys[i] = a += ('/' + e))
            setOpenKeys(newOpenKeys)
        }
    }, [])

    return <div id="layout">
        <Layout>
            <Sider className='siderStyle'>
                <Header className='headerStyle'>
                    <Space>
                        <img src="https://s1.ax1x.com/2023/01/20/pS8o3lT.jpg" alt="logo" />
                        <span>ye</span>
                    </Space>
                </Header>
                <Menu
                    theme="light"
                    selectedKeys={[selectedKeys]}
                    onSelect={selectMenu}
                    openKeys={openKeys}
                    onOpenChange={openMenu}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                {/* <Header style={headerStyle}>Header</Header> */}
                <Content className='contentStyle'>
                    <Card>
                        <Outlet />
                    </Card>
                </Content>
                {/* <Footer style={footerStyle}>Footer</Footer> */}
            </Layout>
        </Layout>
    </div>
}

export default Main

function getItem(element: MyRouter): ItemType {
    const { path, meta, children } = element
    if (element.children) {
        const arr: ItemType[] = []
        children.forEach(e => {
            arr.push(getItem(e))
        })
        return { key: path, label: meta.title, children: arr }
    } else {
        return { key: path, label: meta.title }
    }
}