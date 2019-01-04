const Client = require('scp2')
const colors = require('colors')
const path = require('path')

class NodeSftp {
  /**
   * host: '',
   * username: 'root',
   * password: '',
   * local: '',  上传的本地文件、文件夹
   * path: '',
   * handleMode: false
   */
  constructor(options = {}) {
    this.options = Object.assign({ port: 22, username: 'root', local: 'dist' }, options)
    this.startTime = null
  }

  init() {
    this.startTime = Date.now()
    console.log(colors.rainbow('\nStart upload, please wait...'))
    this.upload(path.join(__dirname, this.options.local), this.options)
  }

  /**
   * opts
   */
  upload(local, opts) {
    Client.scp(local, opts, err => {
      if (err) throw err
      console.log(colors.green(`Uploaded ${local} successfully in ${Date.now() - this.startTime}ms`))
    })
  }
}

module.exports = NodeSftp
