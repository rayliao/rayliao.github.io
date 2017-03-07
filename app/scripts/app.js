import pages from './pages'

;(function ($) {
  $.fn.ray = function (options) {
    return this.each(function () {
      /**
       * @type {{m:string, options:{}}} data
       */
      var data = $(this).data()
      if (data.m) {
        /** get render */
        const render = pages[data.m]
        data.$el = $(this)
        /** check render is function */
        if (typeof render == 'function') {
          render(data)
        }
      }
    })
  }
}(jQuery))

$(function () {
  // 页面脚本初始化入口
  $('[data-m]').ray()
})