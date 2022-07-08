// 前端监控
// 错误监控
export const errorMonitoring = function () {
  window.addEventListener('error', e => {
    console.log(e)
  })
}
