import { useState, useEffect } from "react";

//定义size对象
interface WindowSize {
  width: number,
  height: number
}

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

