import React, { memo } from 'react'
import './style.less'

const Loading = ({
    open,
    margin = '20px auto 0'
}: {
    open: boolean,
    margin?: string
}) => {
    return <>
        {
            open ? <div id='loading' style={{ margin }}>
                <div />
                <div />
                <div />
                <div />
            </div> : null
        }
    </>
}
export default memo(Loading)