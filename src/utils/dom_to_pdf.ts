import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { debugLog } from './log'

/**
 * 
 * @param selectors dom选择器如 #root
 * @param name 导出的pdf文件名
 */
export const dom_to_pdf = async (
    selectors: string,
    name: string
) => {
    const dom: HTMLElement = document.querySelector(selectors)
    const domW = dom.offsetWidth
    const domH = dom.offsetHeight
    const domTop = dom.getBoundingClientRect().top
    const domLeft = dom.getBoundingClientRect().left
    const domScrollTop = dom.scrollTop
    const domScrollLeft = dom.scrollLeft
    const domScrollWidth = dom.scrollWidth
    const domScrollHeight = dom.scrollHeight

    const bodyW = document.body.clientWidth
    const bodyH = document.body.clientHeight

    debugLog('dom', dom)
    debugLog('domW', domW)
    debugLog('domH', domH)
    debugLog('domScrollTop', domScrollTop)
    debugLog('domScrollLeft', domScrollLeft)
    debugLog('domScrollWidth', domScrollWidth)
    debugLog('domScrollHeight', domScrollHeight)
    debugLog('domTop', domTop)
    debugLog('domLeft', domLeft)
    debugLog('bodyW', bodyW)
    debugLog('bodyH', bodyH)

    const canvas = await html2canvas(dom, {
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: true,
        scale: 2, // 提升画面质量，但是会增加文件大小
        x: -(domLeft),
        y: -(domTop),
        width: domScrollWidth + 1,
        height: domScrollHeight + 5
    })
    const img = canvas.toDataURL('image/jpeg', 1.0)
    const i = document.createElement('img')
    i.src = img
    const pdf = new jsPDF()
    pdf.addImage({
        imageData: img,
        x: 0,
        y: 0,
        width: domScrollWidth + 1,
        height: domScrollHeight + 5
    })
    pdf.save(`${name}.pdf`)
}