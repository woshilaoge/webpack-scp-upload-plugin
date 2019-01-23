# webpack-scp-upload-plugin

![](https://img.shields.io/npm/v/webpack-scp-upload-plugin.svg)

> A webpack scp upload plugin webpack4.x

## Installation

```bash
npm i -D webpack-scp-upload-plugin
```

## Usage

add following code to your webpack config file.

> vuecli3

```javascript
const WebpackScpUploadPlugin = require('webpack-scp-upload-plugin')
module.exports = {
  ...
  configureWebpack: {
    plugins: [
      new WebpackScpUploadPlugin({
        host: '192.168.123.101',
        password: '****',
        local: 'dist',
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

## License

This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).
