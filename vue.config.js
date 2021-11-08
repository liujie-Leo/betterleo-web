const proxy = require('./server/proxy')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: '/',
  outputDir: process.env.OUTPUT_DIR,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: {
    performance: {
      hints: false
    }
    // plugins: process.env.NODE_ENV === 'production' ? [
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, './dist'),
    //     routes: ['/'],
    //     renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
    //       injectProperty: '__PRERENDER_INJECTED',
    //       inject: {},
    //       renderAfterDocumentEvent: 'render-event'
    //     })
    //   })
    // ] : []
  },
  productionSourceMap: false,
  devServer: {
    // port: 80,
    disableHostCheck: true,
    proxy
  }
}
