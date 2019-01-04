const NodeUpload = require('./lib')
/**
 * webpack plugin apply
 * process.argv 参数里包含 --upload-id 则会自动上传
 */
NodeUpload.prototype.apply = function(compiler) {
  compiler.hooks.done.tapAsync('NodeUpload', (compilation, callback) => {
    callback()
    this.options.handleMode ? this.init(this.options) : process.argv.includes('--upload-id') && this.init(this.options)
  })
}
module.exports = NodeUpload
