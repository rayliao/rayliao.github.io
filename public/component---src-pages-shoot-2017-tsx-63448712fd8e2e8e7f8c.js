(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{190:function(e,t,n){"use strict";n.r(t);var o=n(205),r=n(0),a=n(207),i=n.n(a),l=n(217);t.default=function(e){var t=e.children,n=new Date;return r.createElement("div",{className:"name"},r.createElement(i.a,{defaultTitle:"Photography"},r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),r.createElement("div",{className:l.sidebar},r.createElement("h1",{className:l.title},"copyright© 2011-",n.getFullYear()," RAYLIAO"),r.createElement("div",{className:"menu"},r.createElement("div",null,r.createElement(o.a,{to:"/shoot/2018"},"2018")),r.createElement("div",null,r.createElement(o.a,{to:"/shoot/2017"},"2017")),r.createElement("div",null,r.createElement(o.a,{to:"/shoot/2016"},"2016")),r.createElement("div",null,r.createElement(o.a,{to:"/shoot/undefined"},"undefined")),r.createElement("div",null,r.createElement(o.a,{to:"/shoot/past"},"past"))),r.createElement("div",{className:"nav"},r.createElement("div",null,r.createElement(o.a,{to:"/"},"home")))),r.createElement("div",{className:l.content},t))}},197:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var o=n(0),r=n(212),a=n.n(r),i=n(190),l=n(217);var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.createElement(i.default,null,o.createElement("div",{className:l.item},o.createElement("img",{src:"../../images/2017/0101.jpg"})),o.createElement(a.a,{height:250},o.createElement("div",{className:l.item},o.createElement("img",{src:"../../images/2017/0102.jpg"}))),o.createElement(a.a,{height:250},o.createElement("div",{className:l.item},o.createElement("img",{src:"../../images/2017/0402.jpg"}))),o.createElement(a.a,{height:250},o.createElement("div",{className:l.item},o.createElement("img",{src:"../../images/2017/0403.jpg"}))),o.createElement(a.a,{height:250},o.createElement("div",{className:l.item},o.createElement("img",{src:"../../images/2017/1001.jpg"}))),o.createElement(a.a,{height:250},o.createElement("div",{className:l.item+" "+l.unite},o.createElement("img",{src:"../../images/2017/1002.jpg"}))))},r}(o.Component)},204:function(e,t,n){var o;e.exports=(o=n(206))&&o.default||o},205:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var o=n(0),r=n.n(o),a=n(66),i=n.n(a);n.d(t,"a",function(){return i.a});n(204),n(7).default.enqueue;var l=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,o=e.query,a=e.render,i=n?n.data:t[o]&&t[o].data;return r.a.createElement(r.a.Fragment,null,i&&a(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,o=e.render,a=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:o||a,staticQueryData:e})})}},206:function(e,t,n){"use strict";n.r(t);n(23);var o=n(0),r=n.n(o),a=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";n(39),n(31),n(38),n(67),n(132),n(92),n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=f(r),i=f(n(70)),l=f(n(53)),u=n(213),c=f(n(214)),s=f(n(215)),d=f(n(216));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,y=0,E=0,b=0,g="data-lazyload-listened",w=[],O=[],_=!1;try{var j=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,j)}catch(P){}var N=!!_&&{capture:!1,passive:!0},M=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),o=void 0,r=void 0,a=void 0,l=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,a=u.height,l=u.width}catch(P){o=h,r=y,a=b,l=E}var c=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),f=Math.max(r,0),p=Math.min(c,o+a)-d,m=Math.min(s,r+l)-f,v=void 0,g=void 0,w=void 0,O=void 0;try{var _=n.getBoundingClientRect();v=_.top,g=_.left,w=_.height,O=_.width}catch(P){v=h,g=y,w=b,O=E}var j=v-d,N=g-f,M=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return j-M[0]<=p&&j+w+M[1]>=0&&N-M[0]<=m&&N+O+M[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(P){n=h,o=b}var a=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=a&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){for(var e=0;e<w.length;++e){var t=w[e];M(t)}O.forEach(function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)}),O=[]},D=void 0,T=null,A=function(e){function t(e){p(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return v(t,r.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===D||"debounce"===D&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",T,N),(0,u.off)(window,"resize",T,N),T=null),T||(void 0!==this.props.debounce?(T=(0,s.default)(C,"number"==typeof this.props.debounce?this.props.debounce:300),D="debounce"):void 0!==this.props.throttle?(T=(0,d.default)(C,"number"==typeof this.props.throttle?this.props.throttle:300),D="throttle"):T=C),this.props.overflow){var o=(0,c.default)(i.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(g)+1;1===r&&o.addEventListener("scroll",T,N),o.setAttribute(g,r)}}else if(0===w.length||n){var a=this.props,l=a.scroll,f=a.resize;l&&(0,u.on)(e,"scroll",T,N),f&&(0,u.on)(window,"resize",T,N)}w.push(this),M(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(i.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",T,N),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",T,N),(0,u.off)(window,"scroll",T,N))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();A.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},A.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var L=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){p(this,i);var e=m(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+L(t),e}return v(i,r.Component),o(i,[{key:"render",value:function(){return a.default.createElement(A,e,a.default.createElement(t,this.props))}}]),i}()}},t.default=A,t.forceCheck=C},213:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},214:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,i=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},215:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,a=void 0,i=void 0,l=void 0,u=function u(){var c=+new Date-i;c<t&&c>=0?o=setTimeout(u,t-c):(o=null,n||(l=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var c=n&&!o;return o||(o=setTimeout(u,t)),c&&(l=e.apply(a,r),a=null,r=null),l}}},216:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var a=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(r),r=setTimeout(function(){o=i,e.apply(a,l)},t)):(o=i,e.apply(a,l))}}}}]);
//# sourceMappingURL=component---src-pages-shoot-2017-tsx-63448712fd8e2e8e7f8c.js.map