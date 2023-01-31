import { useGoRouter } from "@/utils/uHook"
import { Button } from "antd"
import React, { FC } from "react"

const Login: FC = () => {
    const goPage = useGoRouter()
    return (<>
        <div className="login">
            <Button onClick={() => {
                localStorage.setItem('token', '1')
                goPage('/')
            }}>login</Button>
        </div>
    </>)
}

export default Login