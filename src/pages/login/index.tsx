import { useAppDispatch } from "@/redux/hooks"
import { setToken } from "@/redux/storge"
import { useGoRouter } from "@/utils/uHook"
import { Button } from "antd"
import React, { FC } from "react"

const Login: FC = () => {
    const disPatch = useAppDispatch()
    const goPage = useGoRouter()
    return (<>
        <div className="login">
            <Button onClick={() => {
                disPatch(setToken('1'))
                goPage('/')
            }}>login</Button>
        </div>
    </>)
}

export default Login