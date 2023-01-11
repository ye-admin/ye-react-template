import React from "react"

type Props = {
    children: React.ReactNode
}

export default class ErrorBoundary extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }
    state: { hasError: boolean } = {
        hasError: false
    }

    static getDerivedStateFromError(error: any) {
        console.log('ErrorBoundary-error', error)
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log('ErrorBoundary-error+errorInfo', error, errorInfo)
        // 你同样可以将错误日志上报给服务器
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>错误边界</h1>
        }

        return this.props.children
    }
}