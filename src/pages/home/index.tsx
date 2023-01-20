import { Button } from "antd"
import React, { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { test } from "@/assets/images"

const Home: FC = () => {
    const navigator = useNavigate()
    const [value, setValue] = useState(0)
    return (<>
        <div className="home">
            <p>home</p>
            <p>{value}</p>
            <Button onClick={() => setValue(value + 1)}>++</Button>
            <Button onClick={() => {
                localStorage.removeItem('token')
                navigator('/login')
            }}>logout</Button>
            <img src={test} alt="" style={{
                width: '600px'
            }} />
        </div>
    </>)
}

export default Home