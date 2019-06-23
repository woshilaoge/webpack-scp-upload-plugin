# webpack-scp-upload-plugin

![](https://img.shields.io/npm/v/webpack-scp-upload-plugin.svg)

> A webpack scp upload plugin webpack4.x

## Installation

```bash
npm i -D webpack-scp-upload-plugin
```

## Usage

add following code to your webpack config file.

#### `vuecli3`

```javascript
const WebpackScpUploadPlugin = require('webpack-scp-upload-plugin')
module.exports = {
  ...
  configureWebpack: {
    plugins: [
      new WebpackScpUploadPlugin({
        host: '192.168.123.101',
        password: '****',
        username:'root', // 默认
        local: 'dist', // 默认
        path: '/home/www/demo',
        handleMode: true // 手动模式
      })
    ]
  }
}
```

> 如上配置，给 webpack plugins 设置好后，在 webpack 进行构建完毕后会执行 dist 目录下的文件上传
> 结合 npm scripts 参数，可进行 自动模式的设置 --upload-id

```js
new WebpackScpUploadPlugin({
  host: '192.168.123.101',
  password: '****',
  local: 'dist',
  path: '/home/www/demo'
})
```

```json
"scripts": {
  "dev": "vue-cli-service serve --open",
  "build": "vue-cli-service build",
  "build:id": "vue-cli-service build --upload-id"
}
```

```bash
npm run build:id

# build 完毕后，会自动上传dist 目录到指定server,适合预发环境或者测试环境
npm run build
# build完毕后，则不会自动上传，虽然webpack plugins配置了此插件，但此插件不会执行上传操作
```
####  `在项目上单独使用`
示例
````js
// 1. 在项目任意目录新建任意命名的.js文件 如 /upload.js (根目录 upload.js)
// 2. 编辑 upload.js 

// node upload.js 执行
// 上传 dist目录下文件至192.168.123.101 /home/www/demo 目录 (不需要在堡垒机上创建文件夹 demo，会自动创建)
const ScpUpload = require('webpack-scp-upload-plugin/lib')
new ScpUpload({
  host: '192.168.123.101',
  password: '****',
  local: 'dist',
  path: '/home/www/demo'
}).init()

// 3. 在 scripts 上加入 执行命令

"scripts": {
  ...
  "upload": "node ./upload.js"
}

npm run upload // 执行上传
````
#### `npm bin 运行`
> 安装后会在`node_modules/.bin 注册 webpack-scp-upload` 命令
示例
````bash
"scripts": {
  "upload": "webpack-scp-upload --host=192.168.123.101 --password=124qwe path=/home/www/demo"
}
# 上传本地 dist 目录文件至服务器 /home/www/demo 目录
npm run upload

# 解析命令行参数 使用 yargs 模块 键值对的形式 也支持 --host 192.168.123.101(空格/=)
# https://github.com/yargs/yargs/
````

## License

This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).
