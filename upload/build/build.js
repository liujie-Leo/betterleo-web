// const config = require('../config/index.js')
const shell = require('shelljs')
const path = require('path')
const Client = require('ssh2-sftp-client')
const consoles = require('./consoles')
// 打包 npm run build
const compileDist = async function (command) {
  if (shell.exec(command).code == 0) {
    consoles.green('打包成功！')
  }
}

const connectSSh = async function (config) {
  const sftp = new Client()
  consoles.white('正在尝试登录SSH服务器...')
  sftp
    .connect({
      host: config.ip, // 服务器 IP
      port: config.port,
      username: config.username,
      password: config.password
    })
    .then(() => {
      consoles.green('SSH服务器登录成功！')
      // 判断要删除的文件是否存在
      return sftp.exists(config.rmpath)
    })
    .then(res => {
      if (res) {
        consoles.white('正在尝试删除服务器原文件...')
        return sftp.rmdir(config.rmpath, true)
      } else {
        return Promise.resolve('not found')
      }
    })
    .then((res) => {
      // 上传文件
      if (res != 'not found') {
        consoles.green('服务器原文件删除成功！')
      }
      consoles.white('正在尝试上传文件...')
      return sftp.uploadDir(path.resolve(__dirname, `../../${config.outputDirName}`), config.path)
    })
    .then(data => {
      consoles.green('文件上传成功！')
      sftp.end()
    })
    .catch(err => {
      consoles.red(err)
      sftp.end()
    })
}
module.exports = {
  compileDist,
  connectSSh
}
