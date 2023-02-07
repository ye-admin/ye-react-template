import { Button } from "antd"
import React, { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { jian, addValue, getAsyncInfo } from "@/redux/global"
import { logo } from "@/assets/images"

const Home: FC = () => {
    const goPage = useNavigate()
    const count = useAppSelector(state => state.global.value)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAsyncInfo())
    }, [])

    return (<>
        <div className="home">
            <p>home</p>
            <p>count:{count}</p>
            <Button onClick={() => dispatch(addValue(1))}>++</Button>
            <Button onClick={() => dispatch(jian())}>--</Button>
            <Button onClick={() => {
                localStorage.removeItem('token')
                goPage('/login')
            }}>logout</Button>
            <img src={logo} alt="" style={{ width: '600px' }} />
        </div>
    </>)
}

export default Home