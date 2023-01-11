import dayjs from 'dayjs'

/**
 * 返回格式格式：YYYY-MM-DD HH:mm:ss
 * @参数 Date
 * @返回 24小时制 string
 */
export function customTime(time: Date): string {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}