(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _pages = require('./pages');

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  $.fn.ray = function (options) {
    return this.each(function () {
      /**
       * @type {{m:string, options:{}}} data
       */
      var data = $(this).data();
      if (data.m) {
        /** get render */
        var render = _pages2.default[data.m];
        data.$el = $(this);
        /** check render is function */
        if (typeof render == 'function') {
          render(data);
        }
      }
    });
  };
})(jQuery);

$(function () {
  // 页面脚本初始化入口
  $('[data-m]').ray();
});

},{"./pages":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Home Page
 * @class Home
 */
var Home = function () {
    function Home() {
        _classCallCheck(this, Home);
    }

    _createClass(Home, [{
        key: 'init',
        value: function init() {
            var decoLetter = new Letters(document.querySelector('.deco'), {
                size: 1000,
                weight: 5,
                color: '#2B2B2B',
                duration: 2,
                fade: 0,
                easing: d3_ease.easeExpOut
            });

            decoLetter.hideInstantly();

            setTimeout(function () {
                decoLetter.show();
            }, 200);
        }
    }]);

    return Home;
}();

exports.default = function () {
    new Home().init();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    home: _home2.default
};

},{"./home":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXGFwcC5qcyIsImFwcFxcc2NyaXB0c1xccGFnZXNcXGhvbWUuanMiLCJhcHBcXHNjcmlwdHNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVFLFdBQVUsQ0FBVixFQUFhO0FBQ2IsSUFBRSxFQUFGLENBQUssR0FBTCxHQUFXLFVBQVUsT0FBVixFQUFtQjtBQUM1QixXQUFPLEtBQUssSUFBTCxDQUFVLFlBQVk7QUFDM0I7OztBQUdBLFVBQUksT0FBTyxFQUFFLElBQUYsRUFBUSxJQUFSLEVBQVg7QUFDQSxVQUFJLEtBQUssQ0FBVCxFQUFZO0FBQ1Y7QUFDQSxZQUFNLFNBQVMsZ0JBQU0sS0FBSyxDQUFYLENBQWY7QUFDQSxhQUFLLEdBQUwsR0FBVyxFQUFFLElBQUYsQ0FBWDtBQUNBO0FBQ0EsWUFBSSxPQUFPLE1BQVAsSUFBaUIsVUFBckIsRUFBaUM7QUFDL0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRixLQWRNLENBQVA7QUFlRCxHQWhCRDtBQWlCRCxDQWxCQyxFQWtCQSxNQWxCQSxDQUFEOztBQW9CRCxFQUFFLFlBQVk7QUFDWjtBQUNBLElBQUUsVUFBRixFQUFjLEdBQWQ7QUFDRCxDQUhEOzs7Ozs7Ozs7Ozs7O0FDdEJBOzs7O0lBSU0sSTs7Ozs7OzsrQkFDSztBQUNILGdCQUFJLGFBQWEsSUFBSSxPQUFKLENBQVksU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVosRUFBNkM7QUFDMUQsc0JBQU0sSUFEb0Q7QUFFMUQsd0JBQVEsQ0FGa0Q7QUFHMUQsdUJBQU8sU0FIbUQ7QUFJMUQsMEJBQVUsQ0FKZ0Q7QUFLMUQsc0JBQU0sQ0FMb0Q7QUFNMUQsd0JBQVEsUUFBUTtBQU4wQyxhQUE3QyxDQUFqQjs7QUFTQSx1QkFBVyxhQUFYOztBQUVBLHVCQUFXLFlBQVk7QUFDbkIsMkJBQVcsSUFBWDtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0g7Ozs7OztrQkFHVSxZQUFNO0FBQ2pCLFFBQUksSUFBSixHQUFXLElBQVg7QUFDSCxDOzs7Ozs7Ozs7QUN6QkQ7Ozs7OztrQkFFZTtBQUNYO0FBRFcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgcGFnZXMgZnJvbSAnLi9wYWdlcydcclxuXHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuICAkLmZuLnJheSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEB0eXBlIHt7bTpzdHJpbmcsIG9wdGlvbnM6e319fSBkYXRhXHJcbiAgICAgICAqL1xyXG4gICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgpXHJcbiAgICAgIGlmIChkYXRhLm0pIHtcclxuICAgICAgICAvKiogZ2V0IHJlbmRlciAqL1xyXG4gICAgICAgIGNvbnN0IHJlbmRlciA9IHBhZ2VzW2RhdGEubV1cclxuICAgICAgICBkYXRhLiRlbCA9ICQodGhpcylcclxuICAgICAgICAvKiogY2hlY2sgcmVuZGVyIGlzIGZ1bmN0aW9uICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiByZW5kZXIgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcmVuZGVyKGRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufShqUXVlcnkpKVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgLy8g6aG16Z2i6ISa5pys5Yid5aeL5YyW5YWl5Y+jXHJcbiAgJCgnW2RhdGEtbV0nKS5yYXkoKVxyXG59KSIsIi8qKlxyXG4gKiBIb21lIFBhZ2VcclxuICogQGNsYXNzIEhvbWVcclxuICovXHJcbmNsYXNzIEhvbWUge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB2YXIgZGVjb0xldHRlciA9IG5ldyBMZXR0ZXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWNvJyksIHtcclxuICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgd2VpZ2h0OiA1LFxyXG4gICAgICAgICAgICBjb2xvcjogJyMyQjJCMkInLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgZmFkZTogMCxcclxuICAgICAgICAgICAgZWFzaW5nOiBkM19lYXNlLmVhc2VFeHBPdXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkZWNvTGV0dGVyLmhpZGVJbnN0YW50bHkoKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGVjb0xldHRlci5zaG93KClcclxuICAgICAgICB9LCAyMDApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIG5ldyBIb21lKCkuaW5pdCgpXHJcbn1cclxuIiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaG9tZSxcclxufVxyXG4iXX0=
