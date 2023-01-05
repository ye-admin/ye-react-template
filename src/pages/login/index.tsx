import { Button } from "antd"
import React, { FC } from "react"
import { useNavigate } from "react-router-dom"

const Login: FC = () => {
    const navigate = useNavigate()
    return (<>
        <div className="login">
            <Button onClick={() => {
                localStorage.setItem('token', '1')
                navigate('/')
            }}>login</Button>
        </div>
    </>)
}

export default Login