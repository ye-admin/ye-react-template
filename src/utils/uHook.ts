import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { qsStringify } from "."
import axios from "axios"
import { errorLog } from "./log"

/**
 * 路由跳转
 */
export const useGoRouter = () => {
  const g = useNavigate()
  return (url: string, params?: Record<string, number | string>) => {
    g(url + (params ? '?' + qsStringify(params) : ''))
  }
}

/**
 * 监听页面尺寸变化
 * @returns width and height
 */
export function useWindowSize() {
  const [size, setSize] = useState<{
    width: number,
    height: number
  }>({
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
 * 监听页面显示隐藏
 * @returns 页面显示返回true 页面隐藏返回false
 */
export function useVisibilitychange() {
  const [visibility, setVisibility] = useState<boolean>(true)
  useEffect(() => {
    const fun = () => {
      const visibility = document.visibilityState
      if (visibility === 'visible') {
        setVisibility(true)
      } else {
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

/**
 * 图片转base64
 * @returns 返回图片路径
 */
export const useImgBase64 = (str: string) => {
  const [img, setImg] = useState('')
  useEffect(() => {
    axios.get(str, { responseType: 'blob' }).then(async (res) => {
      const reader = new FileReader()
      reader.readAsDataURL(new Blob([res.data], { type: 'image/png' }))
      reader.onload = () => {
        setImg(reader.result as string)
      }
    }).catch(error => {
      errorLog('图片下载错误', error)
      setImg(str)
    })
  }, [])
  return img
}