module.exports = {
  '/api': {
    // logLevel: 'debug', // 查看代理到的真实地址
    target: 'https://www.betterleo.com:3000',
    // target: 'https://localhost:3000',
    secure: false,
    changeOrigin: true
  }

}
