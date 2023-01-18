import { Spin } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'

const style: React.CSSProperties = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default function GlobalLoading() {
    return <div onClick={e => e.stopPropagation()} style={style}>
        <Spin size="large" />
    </div>
}

let loadCount = 0
let lodingRoot: ReactDOM.Root

/**
 * @param isLoad 是否打开全局loading
 * @param domId 打开位置 默认 #yeLoading
 */
export function openLoading(isLoad: boolean = false, domId: string = '#yeLoading') {
    if (isLoad) loadCount++
    if (loadCount !== 1) return
    lodingRoot = ReactDOM.createRoot(document.querySelector(domId))
    lodingRoot.render(<GlobalLoading />)
}

/**
 * @param isLoad 关闭全局loading
 * @param closeAll 是否立刻关闭全局loading
 */
export function closeLoading(isLoad: boolean = false, closeAll: boolean = false) {
    if (closeAll) {
        loadCount = 0
        lodingRoot?.unmount?.()
        return
    }
    if (isLoad) loadCount--
    if (loadCount === 0) {
        lodingRoot?.unmount?.()
    }
}

// 监听history pop事件
window.addEventListener('popstate', () => {
    loadCount = 0
    lodingRoot?.unmount?.()
})