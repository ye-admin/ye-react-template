name: ye-github-deploy

on: 
  push:
    branches: [master]

jobs:
  deploy:
    name: deploy to yeah
    runs-on: macOS-latest #虚拟机环境ubuntu-latest windows-latest macOS-latest
    steps:
      - uses: actions/checkout@v3 #拉取你的最新代码

      - uses: actions/setup-node@v3 # 指定你的node版本
        with:
          node-version: '16'

      - uses: pnpm/action-setup@v2
        with:
          version: 7

      - name: Install
        run: pnpm i

      - name: Build
        run: pnpm build:live

      - name: deploy
        uses: easingthemes/ssh-deploy@main
        with:
          ARGS: -rltgoDzvO --delete
          REMOTE_HOST: 'ye06.vip'
          REMOTE_PORT: ${{secrets.PORT}}
          REMOTE_USER: ${{ secrets.NAME }} #服务器用户名
          SSH_PRIVATE_KEY: ${{ secrets.SSH_RSA }} #秘钥
          SOURCE: "manager" #项目build好的文件的路径,每次服务器上会自动删除对应的文件夹后重新覆盖
          TARGET: ${{ secrets.DIST_PATH }} #把build好的文件夹放到nginx服务器上的什么位置，一般都是nginx配置的站点路径
