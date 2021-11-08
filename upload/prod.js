const { prodConfig } = require('./config/index')
const { compileDist, connectSSh } = require('./build/build')

const command = 'npm run build'

async function runTask () {
  await compileDist(command) // 打包完成
  await connectSSh(prodConfig) // 提交上传
}

runTask()
