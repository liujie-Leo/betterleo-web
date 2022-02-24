(function () {
  console.log('performance test start on: ' + new Date().getTime())
  console.log(window.performance)
  const pfm = window.performance

  // 时间
  console.log(window.performance.timing)
  const time = pfm.timing
  const times = {
    connectStart: time.connectStart, // 开始建立链接的时间（TCP）
    navigationStart: time.navigationStart, // 准备加载新页面的起始时间
    loadEventEnd: time.loadEventEnd, // 文档触发load事件结束后的时间
    domLoading: time.domLoading,
    secureConnectionStart: time.secureConnectionStart, // https则返回ssl开始握手的时间，否则返回0
    fetchStart: time.fetchStart, // 新资源获取被发起，则返回用户代理开始检查其相关缓存的时间，其他情况返回开始获取该资源的时间
    domContentLoadedEventStart: time.domContentLoadedEventStart, // 返回文档发生DOMContentLoaded的时间
    responseStart: time.responseStart,
    responseEnd: time.responseEnd,
    domInteractive: time.domInteractive, //
    domainLookupEnd: time.domainLookupEnd, // 结束DNS查找的时间
    redirectStart: time.redirectStart,
    requestStart: time.requestStart,
    unloadEventEnd: time.unloadEventEnd,
    unloadEventStart: time.unloadEventStart,
    domComplete: time.domComplete, // 解析DOM树完成的时间
    domainLookupStart: time.domainLookupStart, // 返回开始进行DNS查找的时间
    loadEventStart: time.loadEventStart,
    domContentLoadedEventEnd: time.domContentLoadedEventEnd, // 返回文档的DOMContentLoaded事件的结束时间
    redirectEnd: time.redirectEnd,
    connectEnd: time.connectEnd // 建立链接成功后的时间
  }

  const dnsTime = times.domainLookupEnd - times.domainLookupStart // DNS查询耗时
  const tcpTime = times.connectEnd - times.connectStart // TCP链接耗时
  const requestTime = times.responseEnd - times.responseStart // 请求耗时
  const parseDOMTime = times.domComplete - times.domInteractive // 解析DOM树耗时
  const whiteScreenTime = times.domLoading - times.navigationStart // 白屏时间

  console.log(`DNS查询耗时:  ${dnsTime}`)
  console.log(`TCP链接耗时:  ${tcpTime}`)
  console.log(`请求耗时:  ${requestTime}`)
  console.log(`解析DOM树耗时:  ${parseDOMTime}`)
  console.log(`白屏时间:  ${whiteScreenTime}`)

  // 内存
  const memory = window.performance.memory || {}
  const usedJSHeapSize = memory.usedJSHeapSize // JS堆栈被使用的内存
  const totalJSHeapSize = memory.totalJSHeapSize // 当前堆栈内存总大小 如果使用的内存大于该值，说明有可能出现内存泄露
  const jsHeapSizeLimit = memory.jsHeapSizeLimit // 内存大小限制

  // 内存转化为MB
  const usedJSHeapSizeMB = (usedJSHeapSize / 8 / 1024 / 1024).toFixed(2) + 'MB' // 堆栈使用的内存（单位:MB）
  const totalJSHeapSizeMB = (totalJSHeapSize / 8 / 1024 / 1024).toFixed(2) + 'MB' // 堆栈内存总量（单位:MB）
  const jsHeapSizeLimitMB = (jsHeapSizeLimit / 8 / 1024 / 1024).toFixed(2) + 'MB' // 内存大小限制（单位:MB）
  console.log('内存限制：' + jsHeapSizeLimitMB)
  console.log('应使用内存：' + totalJSHeapSizeMB)
  console.log('实际使用内存：' + usedJSHeapSizeMB)
})()
