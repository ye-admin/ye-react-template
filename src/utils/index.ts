export const qsStringify = (data: Record<string, string | number> = {}): string => {
    if (Object.keys(data).length) {
        let str = ''
        Object.entries(data).forEach(e => {
            if (str) str += '&'
            str += e[0]
            str += '='
            str += e[1]
        })
        return str
    }
    return ''
}

/**
 * @param str 不传则使用location.search 传的话前面要加上?
 */
export const qsParse = (str: string = location.search): Record<string, string> => {
    try {
        const list = (str.split('?')[1] || '').split('&')
        if (!list[0]) return {}
        let obj: Record<string, string> = {}
        list.forEach(e => {
            const d = e.split('=')
            obj[d[0]] = d[1]
        })
        return obj
    } catch (error) {
        return {}
    }
}

/**
 * 计算器 加减乘除
 * @param a 被(加|减|乘|除)数
 * @param b (加|减|乘|除)数
 * @param fixed 保留位数 不传则不处理
 */
export const abacus = {
    add: (a: number, b: number, fixed?: number): string => {
        const arg1 = a.toString(), arg2 = b.toString()
        const arg1Arr = arg1.split("."), arg2Arr = arg2.split(".")
        const d1 = arg1Arr.length === 2 ? arg1Arr[1] : ""
        const d2 = arg2Arr.length === 2 ? arg2Arr[1] : ""
        const maxLen = Math.max(d1.length, d2.length)
        const m = Math.pow(10, maxLen)
        const result = ((Number(arg1) * m + Number(arg2) * m) / m).toFixed(fixed || maxLen)
        return result
    },
    sub: (a: number, b: number, fixed?: number): string => {
        return abacus.add(a, -Number(b), fixed)
    },
    mul: (a: number, b: number, fixed?: number): string => {
        const arg1 = a.toString(), arg2 = b.toString()
        const m = (arg1.split(".")[1] ? arg1.split(".")[1].length : 0)
            + (arg2.split(".")[1] ? arg2.split(".")[1].length : 0)
        const result = Number(arg1.replace(".", "")) * Number(arg2.replace(".", ""))
            / Math.pow(10, m)
        return result.toFixed(fixed || m)
    },
    div: (a: number, b: number, fixed?: number): string => {
        const arg1 = a.toString(), arg2 = b.toString()
        const m = (arg2.split(".")[1] ? arg2.split(".")[1].length : 0)
            - (arg1.split(".")[1] ? arg1.split(".")[1].length : 0)
        const result = Number(arg1.replace(".", "")) / Number(arg2.replace(".", ""))
            * Math.pow(10, m)
        return result.toFixed(fixed)
    }
}