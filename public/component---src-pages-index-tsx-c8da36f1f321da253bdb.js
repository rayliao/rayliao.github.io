(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{203:function(e,t,a){"use strict";a.r(t);var n=a(0),o=(a(29),a(30),a(13),a(50),a(205)),r=a(207),m=a.n(r),c=a(214),l=a(209),i=a(257),s=a(208);var h=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.createElement(l.b,null,n.createElement(m.a,null,n.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"})),n.createElement("div",{className:i.container},n.createElement("div",{className:i.header},n.createElement("div",{className:i.headerLeft},n.createElement("nav",{className:i.nav},n.createElement(o.a,{to:"/"},n.createElement(c.a,{id:"home.home",defaultMessage:"首页"})),n.createElement("a",{href:"/blog"},n.createElement(c.a,{id:"home.blog",defaultMessage:"博客"})),n.createElement(o.a,{to:"/shoot/2018"},n.createElement(c.a,{id:"home.image",defaultMessage:"摄影"})),n.createElement(o.a,{to:"/about"},n.createElement(c.a,{id:"home.about",defaultMessage:"关于我"})))),n.createElement(l.a.Consumer,null,function(e){var t=e.locale,a=e.dark,o=e.switchLocale,r=e.switchTheme;return n.createElement("div",{className:i.headerRight},n.createElement("div",{onClick:r,className:i.theme},a?n.createElement("i",{className:"fa fa-sun-o"}):n.createElement("i",{className:"fa fa-moon-o"})),n.createElement("div",{className:i.language},n.createElement("i",{className:"fa fa-language "+i.languageIcon}),n.createElement("div",{className:i.languageList},Object.keys(s.a).map(function(e){return n.createElement("p",{onClick:function(){return o(e)},className:t===e?"active":"",key:e},s.a[e])}))))})),n.createElement("div",{className:i.main},n.createElement("div",{className:i.glitch},n.createElement("div",{className:i.glitchImg}),n.createElement("div",{className:i.glitchImg}),n.createElement("div",{className:i.glitchImg}),n.createElement("div",{className:i.glitchImg}),n.createElement("div",{className:i.glitchImg})),n.createElement("h1",null,"WingRay Liao"),n.createElement("p",null,n.createElement(c.a,{id:"home.frontEnd",defaultMessage:"前端渣滓"})," / ",n.createElement(c.a,{id:"home.photography",defaultMessage:"摄影爱好者"})," / ",n.createElement(c.a,{id:"home.swimfan",defaultMessage:"游泳爱好者"}))),n.createElement("div",{className:i.sns},n.createElement("a",{href:"https://github.com/rayliao",target:"_blank",rel:"noopener",title:"github"},n.createElement("i",{className:"fa fa-github"})),n.createElement("a",{href:"https://instagram.com/wingrayliao/",target:"_blank",rel:"noopener",title:"instagram"},n.createElement("i",{className:"fa fa-instagram"})),n.createElement("a",{href:"https://www.facebook.com/wingrayliao",target:"_blank",rel:"noopener",title:"facebook"},n.createElement("i",{className:"fa fa-facebook-square"})),n.createElement("a",{href:"http://weibo.com/574954033",target:"_blank",rel:"noopener",title:"weibo"},n.createElement("i",{className:"fa fa-weibo"})),n.createElement("a",{href:"javascript:;",title:"rayliao1989@gmail.com"},n.createElement("i",{className:"fa fa-envelope"})))))},r}(n.Component);a.d(t,"default",function(){return u});var u=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){return n.createElement(h,null)},o}(n.Component)},204:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},205:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),o=a.n(n),r=a(66),m=a.n(r);a.d(t,"a",function(){return m.a});a(204),a(7).default.enqueue;var c=o.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,m=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,m&&r(m),!m&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(c.Consumer,null,function(e){return o.a.createElement(l,{data:t,query:a,render:n||r,staticQueryData:e})})}},206:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),o=a.n(n),r=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});var n={"zh-CN":{"home.home":"首页","home.blog":"博客","home.image":"摄影","home.about":"关于我","home.frontEnd":"前端渣滓","home.photography":"摄影爱好者","home.swimfan":"游泳爱好者"},"zh-TW":{"home.home":"首頁","home.blog":"博客","home.image":"攝影","home.about":"關於我","home.frontEnd":"前端渣滓","home.photography":"攝影愛好者","home.swimfan":"游泳愛好者"},en:{"home.home":"Home","home.blog":"Blog","home.image":"Image","home.about":"About","home.frontEnd":"Front-end developer","home.photography":"Photography enthusiasts","home.swimfan":"Swimfan"},fr:{"home.home":"Accueil","home.blog":"Blog","home.image":"Image","home.about":"À propos de","home.frontEnd":"Développeur front-end","home.photography":"Les passionnés de photographie","home.swimfan":"Swimfan"},ja:{"home.home":"ホーム","home.blog":"ブログ","home.image":"画像","home.about":"について","home.frontEnd":"フロントエンド開発者","home.photography":"写真愛好家","home.swimfan":"水泳愛好家"},ko:{"home.home":"홈","home.blog":"블로그","home.image":"이미지","home.about":"소개","home.frontEnd":"프론트 엔드 개발자","home.photography":"사진 애호가","home.swimfan":"수영 애호가"}},o={"zh-CN":"简体","zh-TW":"繁體",ja:"日本語",en:"English",ko:"한국어",fr:"français"}},209:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return h});a(38);var n=a(210),o=a(205),r=a(0),m=a(207),c=a.n(m),l=a(214),i=(a(215),a(216),a(208));a(217),a(218);var s=r.createContext(null),h=function(e){var t,a;function m(t){var a;return(a=e.call(this,t)||this).transition=!1,a.switchLocale=function(e){a.setState({locale:e})},a.switchTheme=function(){a.transition=!0,a.setState({dark:!a.state.dark}),setTimeout(function(){return a.transition=!1},1e3)},a.state={locale:"en",dark:!0,switchLocale:a.switchLocale,switchTheme:a.switchTheme},a}return a=e,(t=m).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,m.prototype.render=function(){var e=this,t=this.props.name,a=this.state,m=a.locale,h=a.dark;return r.createElement(s.Provider,{value:this.state},r.createElement(l.b,{locale:m,messages:i.b[m]},r.createElement(o.b,{query:"2837076469",render:function(a){var n=a.site.siteMetadata.title+(t?" - "+t:"");return r.createElement(r.Fragment,null,r.createElement(c.a,{defaultTitle:n},r.createElement("html",{className:e.transition?"color-theme-in-transition":"",lang:m,"data-theme":h?"dark":"light"}),r.createElement("meta",{content:a.site.siteMetadata.description,name:"description"})),e.props.children)},data:n})))},m}(r.Component)},210:function(e){e.exports={data:{site:{siteMetadata:{title:"rayliao",description:"WingRay Liao"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c8da36f1f321da253bdb.js.map