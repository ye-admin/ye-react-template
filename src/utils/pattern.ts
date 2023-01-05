/**
 * 
 * @param phone string
 * @returns boolean
 */
export const isPhone = (phone: string): boolean => {
  return /^1[3456789]\d{9}$/g.test(phone);
}