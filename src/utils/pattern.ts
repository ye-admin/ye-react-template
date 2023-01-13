/**
 * 手机号正则
 */
export const isPhone = (phone: string): boolean => {
  return /^1[3456789]\d{9}$/g.test(phone)
}

/**
 * 身份证号正则
 */
export const isIdentity = (identity: string): boolean => {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(identity)
}

/**
 * 车牌号正则
 */
export const isCarNum = (carNum: string): boolean => {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9]$/.test(carNum)
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(carNum)
}