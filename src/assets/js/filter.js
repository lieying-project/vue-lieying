//配置全局过滤器
const filters = {
  //日期格式化
  formatDate: function (timestrap) {
    var date = new Date(timestrap) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
    var m = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
    var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
    return Y + M + D + h + ':' + m + ':' + s
  }
}
export default filters
