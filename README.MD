# 分支说明
* master:基础分支，所有分支的底层(h5以及官网)
* pc: 增加了redux(后台管理)
* electron: 开发中(pc软件)
## 功能点
* 自动部署
* 分包(路由懒加载)
* js，css压缩
* gzip压缩
* hash缓存
* 代码规范以及代码提示

## 自动部署说明
* .github>workflows>deploy.yaml
* 脚本监听了master分支的push操作所以仓库里面后缀是MD
* 需要使用自动部署的改一下后缀名即可
* 脚本详细使用方法在[ye](https://ye06.vip)

### 路由重点
* 二级路由放在main下
* 路由传参使用search方式


### 问题
* 1.路径别名不提示目录下的less文件以及图片文件
* 2.路由优化空间