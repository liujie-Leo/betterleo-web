module.exports = {
  prodConfig: {
    ip: '121.4.118.51', // ssh地址
    username: 'root', // ssh 用户名
    port: '22', // 端口
    password: 'Lj416720', // ssh 密码
    path: '/data/dist/', // 操作开始文件夹 可以直接指向配置好的地址
    rmpath: '/data/dist', // 需要删除的文件夹
    outputDirName: 'dist'
  },
  testConfig: {
    ip: '121.4.118.51', // ssh地址
    username: 'root', // ssh 用户名
    port: '22', // 端口
    password: 'Lj416720', // ssh 密码
    path: '/data/dist-test/', // 操作开始文件夹 可以直接指向配置好的地址
    rmpath: '/data/dist-test', // 需要删除的文件夹
    outputDirName: 'dist-test'
  }
}
