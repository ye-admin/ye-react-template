import { useState, useEffect } from "react";

//定义size对象
interface WindowSize {
  width: number,
  height: number
}

/**
 * 
 * @returns 监听页面尺寸变化
 */
export function UseWindowSize() {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  useEffect(() => {
    const fun = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    }
    window.addEventListener('resize', fun)
    return () => {
      window.removeEventListener('resize', fun)
    }
  }, [])
  return size
}

/**
 * 
 * @returns 监听页面显示隐藏
 */
export function UseVisibilitychange() {
  const [visibility, setVisibility] = useState<boolean>(true)
  useEffect(() => {
    const fun = () => {
      const visibility = document.visibilityState
      if (visibility === 'visible') {
        setVisibility(true)
      }else{
        setVisibility(false)
      }
    }
    window.addEventListener('visibilitychange', fun)
    return () => {
      window.removeEventListener('visibilitychange', fun)
    }
  }, [])
  return visibility
}

