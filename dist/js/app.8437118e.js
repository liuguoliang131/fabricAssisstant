!function(){"use strict";var e,n,t,r={5481:function(e,n,t){t(1847);var r=t(7294),o=t(3935),i=t(3379),a=t.n(i),l=t(4229),c={insert:"head",singleton:!1},u=(a()(l.Z,c),l.Z.locals,t(5977)),s=t(71),d=t(710),m={insert:"head",singleton:!1},p=(a()(d.Z,m),d.Z.locals,function(e){var n=e.children,t=localStorage.getItem("userInfo");return(0,r.useEffect)((function(){t||E.push("/")}),[]),r.createElement("div",{className:"layout-root"},r.createElement("div",{className:"layout-main"},n))}),f=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(727),t.e(748),t.e(166)]).then(t.bind(t,3166))})),h=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(202),t.e(748),t.e(42),t.e(842),t.e(841)]).then(t.bind(t,5841))})),b=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(809),t.e(648),t.e(748),t.e(42),t.e(271)]).then(t.bind(t,271))})),g=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(809),t.e(748),t.e(42),t.e(34)]).then(t.bind(t,2034))})),y=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(202),t.e(748),t.e(42),t.e(842),t.e(456)]).then(t.bind(t,1456))})),x=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(47),t.e(825),t.e(42),t.e(573)]).then(t.bind(t,4573))})),v=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(748),t.e(42),t.e(100),t.e(125)]).then(t.bind(t,4125))})),w=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(66),t.e(748),t.e(42),t.e(100),t.e(781)]).then(t.bind(t,9781))})),z=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(47),t.e(748),t.e(42),t.e(357)]).then(t.bind(t,357))})),k=function(){return r.createElement(p,null,r.createElement(r.Suspense,{fallback:r.createElement("div",{className:"webLoading"},"加载中...")},r.createElement(u.rs,null,r.createElement(u.AW,{exact:!0,path:"/appLayout/home",component:f}),r.createElement(u.AW,{path:"/appLayout/order",component:h}),r.createElement(u.AW,{path:"/appLayout/income",component:b}),r.createElement(u.AW,{path:"/appLayout/customer",component:g}),r.createElement(u.AW,{path:"/appLayout/inventory",component:y}),r.createElement(u.AW,{path:"/appLayout/performance",component:v}),r.createElement(u.AW,{path:"/appLayout/performanceDetails/:userId",component:w}),r.createElement(u.AW,{path:"/appLayout/equipment",component:z}),r.createElement(u.AW,{path:"/appLayout/account",component:x}),r.createElement(u.l_,{to:"/appLayout/home"}))))},E=(0,s.lX)(),j=(0,r.lazy)((function(){return Promise.all([t.e(273),t.e(453),t.e(66),t.e(202),t.e(727),t.e(825),t.e(699),t.e(748),t.e(28)]).then(t.bind(t,6028))})),F=(0,r.lazy)((function(){return Promise.all([t.e(42),t.e(812)]).then(t.bind(t,4812))})),P=function(){var e=localStorage.getItem("userInfo");return window.onpopstate=function(n){e||E.push("/")},r.createElement(u.F0,{history:E},r.createElement(r.Suspense,{fallback:r.createElement("div",{className:"webLoading"},"加载中...")},r.createElement(u.rs,null,r.createElement(u.AW,{exact:!0,path:"/",component:j}),r.createElement(u.AW,{path:"/agreement",component:F}),r.createElement(u.AW,{path:"/appLayout",component:k}),r.createElement(u.l_,{to:"/"}))))},L=function(){return r.createElement(P,null)};(e=t.hmd(e))&&e.hot&&e.hot.accept(),o.render(r.createElement(L,null),document.querySelector("#root"))},4229:function(e,n,t){var r=t(3645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'* {\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -moz-user-select: none;\n  -moz-tap-highlight-color: rgba(0, 0, 0, 0);\n  -ms-user-select: none;\n  -ms-tap-highlight-color: rgba(0, 0, 0, 0);\n  -o-user-select: none;\n  -o-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n\nbody {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n  font-family: PingFang SC;\n  color: #404040;\n  -webkit-box-orient: vertical;\n  -webkit-box-align: stretch;\n  display: -moz-box;\n  -moz-box-orient: vertical;\n  -moz-box-align: stretch;\n  -ms-box-orient: vertical;\n  -ms-box-align: stretch;\n  -o-box-orient: vertical;\n  -o-box-align: stretch;\n  display: -webkit-box;\n  box-orient: vertical;\n  box-align: stretch;\n  background: #fff;\n  font-weight: normal;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\ninput,\ntextarea {\n  -webkit-user-select: text;\n  -webkit-appearance: none;\n  -moz-user-select: text;\n  -moz-appearance: none;\n  -ms-user-select: text;\n  -ms-appearance: none;\n  -o-user-select: text;\n  -o-appearance: none;\n  user-select: text;\n  appearance: none;\n}\n\nsection,\nnav,\narticle,\naside,\nhgroup,\nheader,\nfooter {\n  display: block;\n}\n\ninput,\ntextarea,\nselect,\nbutton,\ntable {\n  font-family: inherit;\n  line-height: inherit;\n}\n\nimg,\nfieldset {\n  border: 0;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\ni,\nem,\naddress {\n  font-style: normal;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n#root {\n  width: 100%;\n  max-width: 10rem;\n  height: 100%;\n  margin: 0 auto;\n}\n\n/*Loading 链接进入*/\n\n.webLoading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.32rem;\n}\n\n.title {\n  display: inline-block;\n  font-size: 0.426667rem;\n  font-weight: 500;\n  color: #FFFFFF;\n}\n\n.title:before {\n  content: "";\n  display: inline-block;\n  background: #FFCC00;\n  width: 0.08rem;\n  height: 0.266667rem;\n  margin-right: 0.133333rem;\n}\n\n.title-black {\n  font-size: 0.373333rem;\n  font-weight: bold;\n  color: #333333;\n}\n\n.main {\n  box-sizing: border-box;\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.content {\n  padding: 0 0.4rem;\n  box-sizing: border-box;\n}\n\n.exit {\n  width: 0.613333rem;\n  height: 0.133333rem;\n}\n\n.box {\n  margin: 0.4rem;\n  border-radius: 0.4rem;\n  background: #FFFFFF;\n  padding: 0.4rem;\n  box-sizing: border-box;\n}\n\n.select {\n  width: 2.8rem;\n  border: 0.013333rem solid #999999;\n  border-radius: 0.053333rem;\n}\n\n.select select {\n  width: 2.4rem;\n  min-height: 0.666667rem;\n  height: 100%;\n  border: 0;\n  appearance: none;\n  font-size: 0.32rem;\n  box-sizing: border-box;\n  background-color: transparent;\n  color: #333333;\n  display: inline-block;\n  padding: 0 0.133333rem;\n}\n\n.select span {\n  display: inline-block;\n  width: 0.133333rem;\n  height: 0.133333rem;\n  border-top: 0.026667rem solid #ccc;\n  border-left: 0.026667rem solid #ccc;\n  transform: rotate(-135deg);\n  margin-top: -0.093333rem;\n  vertical-align: middle;\n}\n\n.input {\n  font-size: 0.346667rem;\n  width: 100%;\n  box-sizing: border-box;\n  height: 0.826667rem;\n  border: 0.013333rem solid #999999;\n  border-radius: 0.133333rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 0.133333rem;\n}\n\n.input > input {\n  width: 100%;\n  padding-left: 0.133333rem;\n  box-sizing: border-box;\n  border: 0;\n  font-size: 0.346667rem;\n  border-radius: 0.133333rem;\n}\n\n.searchImg {\n  width: 0.346667rem;\n  height: 0.346667rem;\n}\n\n.noData {\n  width: 100%;\n  height: 1.333333rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.32rem;\n}',""]),n.Z=o},710:function(e,n,t){var r=t(3645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".layout-root {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.layout-root .layout-main {\n  height: 100%;\n  padding: 1.173333rem 0 0;\n  box-sizing: border-box;\n  background: #F5F5F5;\n}",""]),n.Z=o}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e](t,t.exports,i),t.loaded=!0,t.exports}i.m=r,e=[],i.O=function(n,t,r,o){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(l=!1,o<a&&(a=o));l&&(e.splice(u--,1),n=r())}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(n,t){return i.f[t](e,n),n}),[]))},i.u=function(e){return"js/"+e+"."+{28:"5c159864",34:"45c0d2e3",42:"0ea64d53",47:"dffefa67",66:"dcf89ec4",100:"fdbff201",125:"d08682e5",166:"b2304da6",202:"a496eb95",271:"4480e9ae",273:"433ac70b",357:"191e2787",453:"6c7c3d59",456:"95d9eb71",573:"19001aba",648:"12189662",699:"33ec1579",727:"08db46f2",748:"fd2f6e9c",781:"7e2a86e8",809:"5ac6181d",812:"8cca72c6",825:"77e20a24",841:"8bff5a3f",842:"6f834278"}[e]+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="webpack-config:",i.l=function(e,r,o,a){if(n[e])n[e].push(r);else{var l,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+o),l.src=e),n[e]=[r];var m=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",function(){var e={143:0};i.f.j=function(n,t){var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var a=i.p+i.u(n),l=new Error;i.l(a,(function(t){if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}}),"chunk-"+n,n)}},i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,a=t[0],l=t[1],c=t[2],u=0;for(r in l)i.o(l,r)&&(i.m[r]=l[r]);for(c&&c(i),n&&n(t);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;i.O()},t=self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=i.O(void 0,[989],(function(){return i(5481)}));a=i.O(a)}();