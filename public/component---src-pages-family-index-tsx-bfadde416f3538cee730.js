(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(e,t,n){"use strict";n.r(t);n(23),n(134),n(29),n(30),n(13),n(94),n(135);var o=n(0),a=n(237),r=n.n(a),i=n(209),s=n(276);var c=function(e){var t,n;function a(t){var n;(n=e.call(this,t)||this).max=4;var o=Array.from(new Array(n.max+1).keys());return n.shuffleList=o.sort(function(){return.5-Math.random()}),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;if(!this.shuffleList)return null;return o.createElement(i.b,{name:"family"},o.createElement("div",{className:s.container,onClick:function(){return e.slider.slickNext()}},o.createElement(r.a,Object.assign({ref:function(t){return e.slider=t}},{infinite:!0,speed:500,lazyLoad:!0,slidesToShow:1,slidesToScroll:1,fade:!0}),this.shuffleList.map(function(e){return o.createElement("div",{key:e,className:s.item},o.createElement("img",{className:s.img,src:"../../images/family/"+e+".jpg"}))}))))},a}(o.Component);t.default=c},204:function(e,t,n){var o;e.exports=(o=n(206))&&o.default||o},205:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var o=n(0),a=n.n(o),r=n(66),i=n.n(r);n.d(t,"a",function(){return i.a});n(204),n(7).default.enqueue;var s=a.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,o=e.query,r=e.render,i=n?n.data:t[o]&&t[o].data;return a.a.createElement(a.a.Fragment,null,i&&r(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,o=e.render,r=e.children;return a.a.createElement(s.Consumer,null,function(e){return a.a.createElement(c,{data:t,query:n,render:o||r,staticQueryData:e})})}},206:function(e,t,n){"use strict";n.r(t);n(23);var o=n(0),a=n.n(o),r=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},207:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var o={"zh-CN":{"home.home":"首页","home.blog":"博客","home.image":"摄影","home.about":"关于我","home.frontEnd":"前端渣滓","home.photography":"摄影爱好者","home.swimfan":"游泳爱好者"},"zh-TW":{"home.home":"首頁","home.blog":"博客","home.image":"攝影","home.about":"關於我","home.frontEnd":"前端渣滓","home.photography":"攝影愛好者","home.swimfan":"游泳愛好者"},en:{"home.home":"Home","home.blog":"Blog","home.image":"Image","home.about":"About","home.frontEnd":"Front-end developer","home.photography":"Photography enthusiasts","home.swimfan":"Swimfan"},fr:{"home.home":"Accueil","home.blog":"Blog","home.image":"Image","home.about":"À propos de","home.frontEnd":"Développeur front-end","home.photography":"Les passionnés de photographie","home.swimfan":"Swimfan"},ja:{"home.home":"ホーム","home.blog":"ブログ","home.image":"画像","home.about":"について","home.frontEnd":"フロントエンド開発者","home.photography":"写真愛好家","home.swimfan":"水泳愛好家"},ko:{"home.home":"홈","home.blog":"블로그","home.image":"이미지","home.about":"소개","home.frontEnd":"프론트 엔드 개발자","home.photography":"사진 애호가","home.swimfan":"수영 애호가"}},a={"zh-CN":"简体","zh-TW":"繁體",ja:"日本語",en:"English",ko:"한국어",fr:"français"}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"rayliao",description:"WingRay Liao"}}}}},209:function(e,t,n){"use strict";n(40),n(13),n(38);var o=n(213),a=n.n(o),r=(n(211),n(208)),i=n(205),s=n(0),c=n(210),m=n.n(c),u=n(212),l=(n(214),n(215),n(207)),h=(n(216),n(217),{dark:"DARK",locale:"LOCALE"});function f(e,t,n,o,a,r,i){try{var s=e[r](i),c=s.value}catch(m){return void n(m)}s.done?t(c):Promise.resolve(c).then(o,a)}n.d(t,"a",function(){return d}),n.d(t,"b",function(){return p});var d=s.createContext(null),p=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).transition=!1,n.switchLocale=function(e){n.setState({locale:e}),localStorage.setItem(h.locale,e)},n.switchTheme=function(){n.transition=!0;var e=n.state.dark;n.setState({dark:!e}),localStorage.setItem(h.dark,e?"0":"1"),setTimeout(function(){return n.transition=!1},1e3)},n.state={locale:"en",dark:!0,switchLocale:n.switchLocale,switchTheme:n.switchTheme},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=o.prototype;return c.componentDidMount=function(){var e,t=(e=a.a.mark(function e(){var t,n,o,r,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.dark,o=t.locale,e.next=3,localStorage.getItem(h.dark);case 3:return r=e.sent,e.next=6,localStorage.getItem(h.locale);case 6:i=e.sent,this.setState({dark:r?"1"===r:n,locale:i||o});case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(o,a){var r=e.apply(t,n);function i(e){f(r,o,a,i,s,"next",e)}function s(e){f(r,o,a,i,s,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}(),c.render=function(){var e=this,t=this.props.name,n=this.state,o=n.locale,a=n.dark;return s.createElement(d.Provider,{value:this.state},s.createElement(u.b,{locale:o,messages:l.b[o]},s.createElement(i.b,{query:"2837076469",render:function(n){var r=n.site.siteMetadata.title+(t?" - "+t:"");return s.createElement(s.Fragment,null,s.createElement(m.a,{defaultTitle:r},s.createElement("html",{className:e.transition?"color-theme-in-transition":"",lang:o,"data-theme":a?"dark":"light"}),s.createElement("meta",{content:n.site.siteMetadata.description,name:"description"})),e.props.children)},data:r})))},o}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-family-index-tsx-bfadde416f3538cee730.js.map