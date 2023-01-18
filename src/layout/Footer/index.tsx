import React, { FC } from "react"
// import record from '@/assets/images/record.png'
import "./style.less"
import { Space } from "antd"

const Footer: FC = () => {
    return (<>
        <div id="footer">
            <Space>
                <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402012902"
                    style={{ display: 'inline-block', textDecoration: 'none', height: '20px', lineHeight: '20px' }} rel="noreferrer">
                    {/* <img src={record} style={{ float: 'left' }} /> */}
                </a>
                <p>随便写点就行</p>
            </Space>
        </div>
    </>)
}

export default Footer