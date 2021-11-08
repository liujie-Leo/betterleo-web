const { testConfig } = require('./config/index')
const { compileDist, connectSSh } = require('./build/build')

const command = 'npm run build-test'

async function runTask () {
  await compileDist(command) // 打包完成
  await connectSSh(testConfig) // 提交上传
}

runTask()
