(function(t){function e(e){for(var a,o,b=e[0],f=e[1],i=e[2],s=0,l=[];s<b.length;s++)o=b[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(t[a]=f[a]);u&&u(e);while(l.length)l.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,b=1;b<n.length;b++){var f=n[b];0!==c[f]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/yuri/";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],f=b.push.bind(b);b.push=e,b=b.slice();for(var i=0;i<b.length;i++)e(b[i]);var u=f;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01a3":function(t,e,n){t.exports=n.p+"img/blob3.f46d99be.svg"},"0be6":function(t,e,n){},"0d9f":function(t,e,n){},"1a3b":function(t,e,n){"use strict";n("84a1")},2688:function(t,e,n){"use strict";n("0be6")},"3e87":function(t,e,n){t.exports=n.p+"img/blob2.3d18f669.svg"},"3f06":function(t,e,n){"use strict";n("0d9f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"container"};function r(t,e,n,r,o,b){var f=Object(a["u"])("NavBar"),i=Object(a["u"])("Home"),u=Object(a["u"])("router-view");return Object(a["o"])(),Object(a["d"])("div",c,[Object(a["f"])(f),Object(a["f"])(u,null,{default:Object(a["z"])((function(){return[Object(a["f"])(i)]})),_:1})])}var o=Object(a["A"])("data-v-28a110de");Object(a["r"])("data-v-28a110de");var b={class:"nav-bar"},f=Object(a["f"])("div",{class:"spacer-fg5"},null,-1),i={class:"nav-item"},u=Object(a["e"])("Home"),s={class:"nav-item"},l=Object(a["e"])("About"),d={class:"nav-item"},O=Object(a["e"])("Blog"),j={class:"nav-item"},v=Object(a["e"])("Contact");Object(a["p"])();var p=o((function(t,e,n,c,r,p){var m=Object(a["u"])("router-link");return Object(a["o"])(),Object(a["d"])("div",b,[f,Object(a["f"])("div",i,[Object(a["f"])(m,{to:"/"},{default:o((function(){return[u]})),_:1})]),Object(a["f"])("div",s,[Object(a["f"])(m,{to:"/About"},{default:o((function(){return[l]})),_:1})]),Object(a["f"])("div",d,[Object(a["f"])(m,{to:"/Blog"},{default:o((function(){return[O]})),_:1})]),Object(a["f"])("div",j,[Object(a["f"])(m,{to:"/Contact"},{default:o((function(){return[v]})),_:1})])])})),m={name:"NavBar"};n("e8f0");m.render=p,m.__scopeId="data-v-28a110de";var g=m,h=n("bb51"),y={name:"App",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{NavBar:g,Home:h["default"]}};n("1a3b");y.render=r;var w=y,_=n("6c02"),N=[{path:"/",component:n("bb51"),name:"Home"},{path:"/about",component:n("f820"),name:"About"},{path:"/Blog",component:n("fd3f"),name:"blog"},{path:"/Contact",component:n("b8fa"),name:"Contact"}],S=Object(_["a"])({history:Object(_["b"])("/yuri/"),routes:N}),x=S;Object(a["c"])(w).use(x).mount("#app")},"6bc9":function(t,e,n){},"84a1":function(t,e,n){},9073:function(t,e,n){},b8fa:function(t,e,n){"use strict";n.r(e);const a={};e["default"]=a},bb51:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"homepage"};function r(t,e,n,r,o,b){var f=Object(a["u"])("TitleName"),i=Object(a["u"])("SideBlobs");return Object(a["o"])(),Object(a["d"])("div",c,[Object(a["f"])(f,{firstName:"Lorem",lastName:"Ipsum",subtitle:"Writer, Dreamer, Creator"}),Object(a["f"])(i)])}var o=Object(a["A"])("data-v-4ba01fb7");Object(a["r"])("data-v-4ba01fb7");var b={class:"big-name",id:"first-name"},f={class:"overlay"},i={class:"shadow"},u={class:"big-name",id:"last-name"},s={class:"overlay"},l={class:"shadow"},d={class:"subtitle"};Object(a["p"])();var O=o((function(t,e,n,c,r,o){return Object(a["o"])(),Object(a["d"])(a["a"],null,[Object(a["f"])("div",b,[Object(a["f"])("div",f,[Object(a["f"])("h1",null,Object(a["w"])(n.firstName),1)]),Object(a["f"])("div",i,[Object(a["f"])("h1",null,Object(a["w"])(n.firstName),1)])]),Object(a["f"])("div",u,[Object(a["f"])("div",s,[Object(a["f"])("h1",null,Object(a["w"])(n.lastName),1)]),Object(a["f"])("div",l,[Object(a["f"])("h1",null,Object(a["w"])(n.lastName),1)])]),Object(a["f"])("div",d,Object(a["w"])(n.subtitle),1)],64)})),j={name:"TitleName",props:{subtitle:String,firstName:String,lastName:String}};n("dffa");j.render=O,j.__scopeId="data-v-4ba01fb7";var v=j,p=n("ef71"),m=n.n(p),g=n("3e87"),h=n.n(g),y=n("01a3"),w=n.n(y),_=Object(a["A"])("data-v-6a8211e5");Object(a["r"])("data-v-6a8211e5");var N={class:"side-blobs"},S=Object(a["f"])("div",{id:"blob-1"},[Object(a["f"])("img",{src:m.a,alt:"blob1"})],-1),x=Object(a["f"])("div",{id:"blob-2"},[Object(a["f"])("img",{src:h.a,alt:"blob2"})],-1),B=Object(a["f"])("div",{id:"blob-3"},[Object(a["f"])("img",{src:w.a,alt:"blob3"})],-1);Object(a["p"])();var A=_((function(t,e,n,c,r,o){return Object(a["o"])(),Object(a["d"])("div",N,[S,x,B])})),P={name:"SideBlobs"};n("3f06");P.render=A,P.__scopeId="data-v-6a8211e5";var C=P,H={name:"Home",components:{TitleName:v,SideBlobs:C}};n("2688");H.render=r;e["default"]=H},dffa:function(t,e,n){"use strict";n("6bc9")},e8f0:function(t,e,n){"use strict";n("9073")},ef71:function(t,e,n){t.exports=n.p+"img/blob1.502df280.svg"},f820:function(t,e,n){"use strict";n.r(e);const a={};e["default"]=a},fd3f:function(t,e,n){"use strict";n.r(e);const a={};e["default"]=a}});
//# sourceMappingURL=app.001be747.js.map