export class JudgeAgent {
  constructor() {
    this.pageEnv = ''
    this.versions = {}
    this.judgeEnv()
  }
  getVersion() {
    const u = navigator.userAgent
    return {
      // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('bearmusic') > -1, //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
    }
  }
  judgeEnv() {
    const versions = this.getVersion()
    this.versions = versions
    if (versions.mobile) {
      var ua = navigator.userAgent.toLowerCase() //获取判断用的对象
      if (
        ua.indexOf('bearmusic') > -1 ||
        ua.indexOf('ArtAiClass') > -1 ||
        ua.indexOf('artaiclass') > -1
      ) {
        this.pageEnv = 'app'
      } else if (ua.match(/MicroMessenger/i) === 'micromessenger') {
        this.pageEnv = 'wx'
      } else if (versions.ios) {
        // 是否在IOS浏览器打开
        this.pageEnv = 'ios'
      } else if (versions.android) {
        // 是否在安卓浏览器打开
        this.pageEnv = 'android'
      }
      // if (ua.match(/WeiBo/i) == "weibo") { // 在新浪微博客户端打开
      //   this.pageEnv = 'weibo'
      // }
      // if (ua.match(/QQ/i) == "qq") { // 在QQ空间打开
      //   this.pageEnv = 'qq'
      // }
      // if (versions.ios) { // 是否在IOS浏览器打开
      //   this.pageEnv = 'ios'
      // }
      // if(versions.android){ // 是否在安卓浏览器打开
      //   this.pageEnv = 'android'
      // }
    } else {
      this.pageEnv = 'pc'
    }
  }
}