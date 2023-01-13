import dayjs from 'dayjs'

/**
 * @time dayjs.ConfigType
 * @format 默认格式YYYY-MM-DD HH:mm:ss
 * @returns string 24小时制
 */
export function timeFormat(time: dayjs.ConfigType, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(time).format(format)
}