const ScpUpload = require('./lib')
new ScpUpload({
  host: '192.168.123.101',
  password: '****',
  local: 'dist',
  path: '/home/www/demo'
}).init()
