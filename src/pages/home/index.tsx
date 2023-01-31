import { Button } from "antd"
import React, { FC, useState } from "react"
import { test } from "@/assets/images"
import { useGoRouter } from "@/utils/uHook"

const Home: FC = () => {
    const goPage = useGoRouter()
    const [value, setValue] = useState(0)
    return (<>
        <div className="home">
            <p>home</p>
            <p>{value}</p>
            <Button onClick={() => setValue(value + 1)}>++</Button>
            <Button onClick={() => {
                localStorage.removeItem('token')
                goPage('/login')
            }}>logout</Button>
            <img src={test} alt="" style={{ width: '600px' }} />
        </div>
    </>)
}

export default Home