# Webpack-ftp-upload-plugin

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
        local: '/dist',
        path: '/home/www/demo'
      })
    ]
  }
}
```

## License

This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).
