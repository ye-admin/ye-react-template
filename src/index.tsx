import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
// 错误边界
// import ErrorBoundary from './layout/ErrorBoundary';
// 全局样式文件
import 'antd/dist/reset.css'
import './config/css/index.less'
// 设置主题
import { ConfigProvider, theme } from 'antd'
// 设置语言
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
dayjs.locale('zh')
// redux
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.querySelector('#root'))
root.render(
    // <ErrorBoundary>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize: 16,
                        colorPrimary: '#1DA57A'
                    },
                    algorithm: theme.defaultAlgorithm,
                }}
                locale={zhCN}>
                <App />
            </ConfigProvider>
        </PersistGate>
    </Provider>
    // </ErrorBoundary>
)