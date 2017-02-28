function Letters(e,i){this.el=e,this.text=e.innerHTML.toLowerCase(),e.innerHTML='<span style="position: absolute; visibility: hidden;">'+this.text+"</span>",this.init(i)}Letters.prototype={init:function(e){this.size=e&&e.hasOwnProperty("size")?e.size:100,this.weight=e&&e.hasOwnProperty("weight")?e.weight:1,this.rounded=!(!e||!e.hasOwnProperty("rounded"))&&e.rounded,this.color=e&&e.hasOwnProperty("color")?e.color:"#5F6062",this.duration=e&&e.hasOwnProperty("duration")?e.duration:1,this.delay=e&&e.hasOwnProperty("delay")?e.delay:[0,.05],this.fade=e&&e.hasOwnProperty("fade")?e.fade:.5,this.easing=e&&e.hasOwnProperty("easing")?e.easing:d3_ease.easeCubicInOut,this.individualDelays=!(!e||!e.hasOwnProperty("individualDelays"))&&e.individualDelays,this.visible=!1,this._svgNS="http://www.w3.org/2000/svg",this.svgs=[],this.timer=[],this.segments=[],this.drawText()},drawText:function(){this.letters=this.text.replace(/[^a-z ]/g,"").split("");var e=this,i="number"==typeof e.size?e.size:e.size[0],n="number"==typeof e.weight?e.weight:e.weight[0],t="boolean"==typeof e.rounded?e.rounded:e.rounded[0],a="string"==typeof e.color?e.color:e.color[0],s="number"==typeof e.fade?e.fade:e.fade[0];e.renderAlphabet="number"!=typeof e.weight||"boolean"!=typeof e.rounded||e.initAlphabet(n,t)&&!1;var d=0;this.letters.forEach(function(g,l){i="number"==typeof e.size[l]?e.size[l]:i,n="number"==typeof e.weight[l]?e.weight[l]:n,t="boolean"==typeof e.rounded[l]?e.rounded[l]:t,a="string"!=typeof e.color&&"string"==typeof e.color[l]?e.color[l]:a,s="number"==typeof e.fade[l]?e.fade[l]:s,e.renderAlphabet&&e.initAlphabet(n,t)," "===g?(e.drawLetter(g,l,i),d++):e.segments[l-d]=e.drawLetter(g,l-d,i,n,t,a,s)}),this.letters=this.text.replace(/[^a-z]/g,"").split("")},drawLetter:function(e,i,n,t,a,s,d){if(" "!==e){var g,l,r=this.createSVG(this.alphabet[e].svg,e,i,n,d),h=[],o=this.alphabet[e].paths,b=this.alphabet[e].initial,p=this;return o.forEach(function(e,i){g=document.createElementNS(p._svgNS,"path"),g.setAttribute("d",e),g.setAttribute("stroke-width",t),g.setAttribute("stroke-linecap",a?"round":"butt"),g.setAttribute("stroke",s),g.setAttribute("fill","none"),l=new Segment(g,b[i].begin,b[i].end,(!0)),h.push(l),r.appendChild(g)}),h}this.createSVG(this.alphabet[e].svg,"space",i,n)},createSVG:function(e,i,n,t,a){var s=document.createElementNS(this._svgNS,"svg");s.setAttribute("aria-hidden","true"),s.setAttribute("role","img"),s.setAttribute("viewBox","0 0 "+e.width+" "+e.height),s.setAttribute("height",t+"px");var d=t*(e.width/e.height);if(s.setAttribute("width",Math.ceil(d)+"px"),s.setAttribute("class","letter letter-"+i+("space"!==i?" letter-"+(n+1):"")),this.el.appendChild(s),"space"!==i)return this.svgs[n]=s,a&&(s.style.opacity=0,this.setupFade(a,n)),s},setupFade:function(e,i){var n=this.svgs[i];e?(n.style.transition=e+"s opacity",n.style.webkitTransition=e+"s opacity"):n.style.transition=null},show:function(e){this.visible=!0,this.clear();var i,n,t=e&&e.hasOwnProperty("duration")?e.duration:this.duration,a=e&&e.hasOwnProperty("delay")?e.delay:this.delay,s=e&&e.hasOwnProperty("fade")?e.fade:this.fade,d=e&&e.hasOwnProperty("easing")?e.easing:this.easing,g=e&&e.hasOwnProperty("individualDelays")?e.individualDelays:this.individualDelays,l=0,r=0,h="number"==typeof t?t:t[0],o="number"==typeof s?s:s[0],b="function"==typeof d?d:d[0],p=this;p.renderAlphabet&&(i="number"==typeof p.weight?p.weight:p.weight[0],n="boolean"==typeof p.rounded?p.rounded:p.rounded[0]);var f=this.letters.length;this.letters.forEach(function(u,y){h="number"==typeof t[y]?t[y]:h,o="number"==typeof s[y]?s[y]:o,b="function"==typeof d[y]?d[y]:b,"number"==typeof a?l=g?a:l+a:(r="number"==typeof a[y]?a[y]:r,l=g?r:l+r),l?p.timer[y]=setTimeout(function(){p.setupFade(o,y),p.svgs[y].style.opacity=1,p.el.offsetHeight},1e3*l):(p.setupFade(o,y),p.svgs[y].style.opacity=1,p.el.offsetHeight),p.renderAlphabet&&(i="number"==typeof p.weight[y]?p.weight[y]:i,n="boolean"==typeof p.rounded[y]?p.rounded[y]:n,p.initAlphabet(i,n));var c=y===f-1&&e&&e.hasOwnProperty("callback")?e.callback:null,v=p.alphabet[u].final,w=p.segments[y];w.forEach(function(e,i){e.draw(v[i].begin,v[i].end,h,{delay:l,circular:!0,easing:b,callback:c}),c=null})})},hide:function(e){this.visible=!1,this.clear();var i=e&&e.hasOwnProperty("duration")?e.duration:this.duration,n=e&&e.hasOwnProperty("delay")?e.delay:this.delay,t=e&&e.hasOwnProperty("fade")?e.fade:this.fade,a=e&&e.hasOwnProperty("easing")?e.easing:this.easing,s=e&&e.hasOwnProperty("individualDelays")?e.individualDelays:this.individualDelays,d=0,g=0,l="number"==typeof i?i:i[0],r="number"==typeof t?t:t[0],h="function"==typeof a?a:a[0],o=this,b=this.letters.length;this.letters.forEach(function(p,f){l="number"==typeof i[f]?i[f]:l,r="number"==typeof t[f]?t[f]:r,h="function"==typeof a[f]?a[f]:h,"number"==typeof n?d=s?n:d+n:(g="number"==typeof n[f]?n[f]:g,d=s?g:d+g),o.setupFade(r,f);var u=1e3*(l-r+d);u?o.timer[f]=setTimeout(function(){o.svgs[f].style.opacity=0,o.el.offsetHeight},u):(o.svgs[f].style.opacity=0,o.el.offsetHeight);var y=f===b-1&&e&&e.hasOwnProperty("callback")?e.callback:null,c=o.alphabet[p].initial,v=o.segments[f];v.forEach(function(e,i){e.draw(c[i].begin,c[i].end,l,{delay:d,circular:!0,easing:h,callback:y}),y=null})})},toggle:function(e){this.visible?this.hide(e):this.show(e)},showInstantly:function(){this.show({duration:0,delay:0,fade:0})},hideInstantly:function(){this.hide({duration:0,delay:0,fade:0})},toggleInstantly:function(){this.toggle({duration:0,delay:0,fade:0})},clear:function(){var e=this;this.letters.forEach(function(i,n){clearTimeout(e.timer[n])})},initAlphabet:function(e,i){var n=44+e,t=94+2*e,a=20,s=i?0:e/2,d="m 0 -"+a+" a "+a+" "+a+" 0 1 1 0 "+2*a+" a "+a+" "+a+" 0 1 1 0 -"+2*a,g="m "+n/2+" "+t/2+" "+d,l="m "+n/2+" "+t/2+" "+d,r="m "+(n/2+2*a)+" "+t/2+" "+d,h="m "+n/2+" "+(t/2-12)+" "+d,o="m "+n/2+" "+(t/2+e/2)+" "+d,b="m "+n/2+" "+(t/2+a+s)+" "+d,p="m "+(n/2-a-s)+" "+(t/2+a+s)+" "+d,f="m "+(n/2-a-s)+" "+t/2+" "+d,u="m "+(n/2+a-s)+" "+t/2+" "+d,y="m "+(n/2-a)+" 0 l 0 "+t,c="m "+(n/2-a)+" 0 l 0 "+t,v="m "+(n/2+a)+" 0 l 0 "+t,w="m "+(n/2+3*a)+" 0 l 0 "+t,m="m "+(n/2-a)+" 0 l 0 "+t,O="m 0 "+(t/2+s+(s?0:1))+" l "+n+" 0",P="m "+(n/2-s)+" 0 l 0 "+t,A="m 0 "+(t/2-a)+" l "+n+" 0",k={width:n,height:t},z={width:n+2*a,height:t},x={width:n-a-s,height:t},D={width:n-2*s,height:t},E="50% + "+(a+s),S="50% - "+(a+s),L="50% - "+a,T="50% - "+(a+s+12);this.alphabet={a:{svg:k,paths:[g,v],initial:[{begin:"5%",end:"5%"},{begin:"90%",end:"90%"}],final:[{begin:"50%",end:"125% + 1"},{begin:"50%",end:E}]},b:{svg:k,paths:[g,y],initial:[{begin:"-125%",end:"-125%"},{begin:"5%",end:"5%"}],final:[{begin:"-125%",end:"-50%"},{begin:T,end:E}]},c:{svg:k,paths:[g],initial:[{begin:"105%",end:"105%"}],final:[{begin:"-50%",end:"25%"}]},d:{svg:k,paths:[g,v],initial:[{begin:"125%",end:"125%"},{begin:"5%",end:"5%"}],final:[{begin:"50%",end:"125%"},{begin:T,end:E}]},e:{svg:k,paths:[g,O],initial:[{begin:"-105%",end:"-105%"},{begin:"5%",end:"5%"}],final:[{begin:"50%",end:"125% + 1"},{begin:"50%",end:E}]},f:{svg:x,paths:[h,o,y],initial:[{begin:"-25%",end:"-25%"},{begin:"1",end:"1"},{begin:"50% - 13",end:"50% - 13"}],final:[{begin:"-25%",end:"1"},{begin:"-25%",end:"1"},{begin:"50% - 13",end:E}]},g:{svg:k,paths:[g,b,v],initial:[{begin:"25%",end:"25%"},{begin:"-10%",end:"-10%"},{begin:"50%",end:"50%"}],final:[{begin:"-50%",end:"25% + 1"},{begin:"-75% - 1",end:"-50%"},{begin:"50%",end:E}]},h:{svg:k,paths:[g,y,v],initial:[{begin:"-25%",end:"-25%"},{begin:"10%",end:"10%"},{begin:"90%",end:"90%"}],final:[{begin:"-150%",end:"-75% + 1"},{begin:T,end:"50%"},{begin:"50%",end:E}]},i:{svg:{width:n-2*a,height:t},paths:[m],initial:[{begin:"50%",end:"50%"}],final:[{begin:S,end:E}]},j:{svg:x,paths:[p,P],initial:[{begin:"5%",end:"5%"},{begin:S,end:S}],final:[{begin:"25% - 1",end:"50%"},{begin:S,end:E}]},k:{svg:k,paths:[g,y],initial:[{begin:"50%",end:"50%"},{begin:"80%",end:"80%"}],final:[{begin:"25%",end:"100%"},{begin:T,end:E}]},l:{svg:{width:n-2*a,height:t},paths:[m],initial:[{begin:"50%",end:"50%"}],final:[{begin:T,end:E}]},m:{svg:z,paths:[l,r,c],initial:[{begin:"90%",end:"90%"},{begin:"90%",end:"90%"},{begin:"90%",end:"90%"}],final:[{begin:"-25%",end:"50%"},{begin:"-25%",end:"50%"},{begin:S,end:E}]},n:{svg:k,paths:[g,y],initial:[{begin:"-60%",end:"-60%"},{begin:"90%",end:"90%"}],final:[{begin:"-25%",end:"50%"},{begin:S,end:E}]},o:{svg:k,paths:[g],initial:[{begin:"-150%",end:"-150%"}],final:[{begin:"2%",end:"98%"}]},p:{svg:k,paths:[g,y],initial:[{begin:"25%",end:"25%"},{begin:E,end:E}],final:[{begin:"-25% - 1",end:"50%"},{begin:"50%",end:"50% + 46"}]},q:{svg:k,paths:[g,v],initial:[{begin:"-25%",end:"-25%"},{begin:E,end:E}],final:[{begin:"-50%",end:"25% + 1"},{begin:"50%",end:"50% + 46"}]},r:{svg:x,paths:[g,y],initial:[{begin:"-25% - 1",end:"-25% - 1"},{begin:"50%",end:"50%"}],final:[{begin:"-25% - 1",end:"1"},{begin:"50%",end:E}]},s:{svg:D,paths:[f,u],initial:[{begin:"50%",end:"50%"},{begin:"1",end:"1"}],final:[{begin:"25%",end:"50%"},{begin:"-25% - 1",end:"1"}]},t:{svg:x,paths:[g,y,A],initial:[{begin:"50%",end:"50%"},{begin:"5%",end:"5%"},{begin:"50%",end:"50%"}],final:[{begin:"50%",end:"75% + 1"},{begin:T,end:"50%"},{begin:L,end:"50%"}]},u:{svg:k,paths:[g,v],initial:[{begin:"50%",end:"50%"},{begin:"80%",end:"80%"}],final:[{begin:"25%",end:"100%"},{begin:S,end:E}]},v:{svg:k,paths:[g,v],initial:[{begin:"10%",end:"10%"},{begin:"20%",end:"20%"}],final:[{begin:"25% - 1",end:"100%"},{begin:S,end:"50%"}]},w:{svg:z,paths:[l,r,w],initial:[{begin:"10%",end:"10%"},{begin:"10%",end:"10%"},{begin:"20%",end:"20%"}],final:[{begin:"25%",end:"100%"},{begin:"25% - 1",end:"100%"},{begin:S,end:"50%"}]},x:{svg:D,paths:[f,u],initial:[{begin:"50%",end:"50%"},{begin:"1",end:"1"}],final:[{begin:"0",end:"50%"},{begin:"-50%",end:"1"}]},y:{svg:k,paths:[g,b,v],initial:[{begin:"1",end:"1"},{begin:"1",end:"1"},{begin:S,end:S}],final:[{begin:"-75%",end:"1"},{begin:"25% - 1",end:"50%"},{begin:S,end:E}]},z:{svg:D,paths:[f,u],initial:[{begin:"25%",end:"25%"},{begin:"75%",end:"75%"}],final:[{begin:"0",end:"25% + 1"},{begin:"50%",end:"75%"}]}," ":{svg:k}}}};