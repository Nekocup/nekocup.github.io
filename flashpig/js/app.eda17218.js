(function(t){function e(e){for(var r,s,c=e[0],l=e[1],o=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/flashpig/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"435d":function(t,e,n){t.exports=n.p+"img/sidePhone.918ea35f.png"},5309:function(t,e,n){t.exports=n.p+"img/computer.2132ea37.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("Header"),n("Service"),n("Store"),n("Manager"),n("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navigate"},[r("img",{attrs:{src:n("f7e4"),alt:"LOGO",width:"75px",height:"64.6px"}}),r("div",{staticClass:"menu"},[r("img",{attrs:{src:n("ccb7"),alt:"菜單"},on:{click:t.menuDisplay}}),r("ul",{class:{menuOn:t.mobileToggle,menuOff:!t.mobileToggle}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("首頁")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#service"}},[t._v("提供服務")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#store"}},[t._v("實體店面")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#manager"}},[t._v("店長資訊")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#contact"}},[t._v("聯絡我們")])])}],l=n("491f"),o=n.n(l),u={name:"navigate",data:function(){return{mobileToggle:!0}},methods:{menuDisplay:function(){this.mobileToggle=!this.mobileToggle}},mounted:function(){o()('a[href="#"]',{speed:500}),o()('a[href="#service"]',{speed:500,offset:120}),o()('a[href="#store"]',{speed:500,offset:120}),o()('a[href="#manager"]',{speed:500,offset:120}),o()('a[href="#contact"]',{speed:500,offset:120})}},f=u,p=n("2877"),d=Object(p["a"])(f,s,c,!1,null,null,null),m=d.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"banner"},[r("img",{attrs:{src:n("c5dc"),alt:"橫幅式廣告"}}),r("div",{staticClass:"title",class:{headerDisplay:t.headerDisplay},attrs:{id:"home"}},[r("h2",[t._v("最專業最快速的電腦維修")]),r("h6",[t._v("給予顧客最好的服務品質")]),r("h6",[t._v("良心的價格")])])])])},h=[],_={data:function(){return{headerDisplay:!1}},mounted:function(){var t=this;window.onload=function(){t.headerDisplay=!0}}},g=_,b=Object(p["a"])(g,v,h,!1,null,null,null),x=b.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service artPadding"},[r("div",{staticClass:"information"},[r("div",{staticClass:"artTitle"},[r("img",{attrs:{src:n("cbfd"),alt:"icon"}}),r("h2",{attrs:{id:"service"}},[t._v("服務項目及核心介紹")])]),r("ul",[r("li",[r("h4",[t._v("1. 個人電腦設備維修及維護")]),r("h5",[t._v("給予客人最好的服務品質，我們會先幫客人評估檢測，之後一起討論方向，達到客人滿意的需求")])]),r("li",[r("h4",[t._v("2. 費用與諮詢")]),r("h5",[t._v("依維護案件收取相關費用，可事先來電洽詢維修事宜")])]),r("li",[r("h4",[t._v("3. 二手電腦主機及相關設備販售")]),r("h5",[t._v("有需要的設備及零件都歡迎諮詢!")])]),r("li",[r("h4",[t._v("4. 價格親民服務彈性")]),r("h5",[t._v("價位透明，中古電腦享七天個人保固")])])])]),r("img",{attrs:{src:n("bb79"),alt:"背景圖"}}),r("img",{attrs:{src:n("435d"),alt:"背景圖"}})])}],E={name:"service"},C=E,w=Object(p["a"])(C,y,O,!1,null,null,null),S=w.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"store artPadding"},[r("div",{staticClass:"artTitle"},[r("img",{attrs:{src:n("812e"),alt:"icon"}}),r("h2",{attrs:{id:"store"}},[t._v("實體店面")])]),r("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.514931116813!2d119.58092170218708!3d23.5739238690377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c5add83052cdf%3A0x193ce9b9ef27a787!2z5ZyL56uL5r6O5rmW56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1631295291124!5m2!1szh-TW!2stw",width:"100%",height:"450",allowfullscreen:"",loading:"lazy"}}),r("article",[r("section",[r("img",{attrs:{src:n("f016"),alt:"地圖"}})]),r("section",[r("p",[t._v("地點 : 澎湖縣馬公市六合路300號")]),r("p",[t._v("營業時間 : ")]),r("p",[t._v("星期一 10:00 ~ 22:00")]),r("p",[t._v("星期二 10:00 ~ 22:00")]),r("p",[t._v("星期三 10:00 ~ 22:00")]),r("p",[t._v("星期四 10:00 ~ 22:00")]),r("p",[t._v("星期五 10:00 ~ 22:00")]),r("div",{staticClass:"introduction"},[r("p",[t._v("我們位在澎湖科技大學內部，依校園地圖指示就能抵達我們店的位置。")])])])])])}],j={},M=j,P=Object(p["a"])(M,T,$,!1,null,null,null),k=P.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"manager artPadding"},[r("div",{staticClass:"artTitle"},[r("img",{attrs:{src:n("598b"),alt:"icon"}}),r("h2",{attrs:{id:"manager"}},[t._v("關於店長")])]),r("article",[r("section",[r("img",{attrs:{src:n("5309"),alt:"店長"}})]),r("section",[r("ul",[r("li",[r("h4",[t._v("具有五年電腦資訊維修背景")]),r("h5",[t._v("目前擔任宜鼎國際教育基金會電腦維修教學講師輔導高中職學生")])]),r("li",[r("h4",[t._v("安心有保障")]),r("h5",[t._v("具有乙級電腦硬體裝修技術士、CCNA網路證照，並發揮最大專業來服務客戶，讓客戶安心")])])])])])])}],F={},A=F,H=Object(p["a"])(A,L,D,!1,null,null,null),q=H.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("article",[n("section",[n("h6",{attrs:{id:"contact"}},[t._v("聯絡我們")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._m(0),n("input",{attrs:{type:"submit",value:"送出訊息",id:"sendbtn"}}),n("div",{staticClass:"sendStatusMsg"})])]),t._m(1)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputContent"},[n("input",{attrs:{type:"text",name:"name",placeholder:"姓名"}}),n("input",{attrs:{type:"email",name:"email",placeholder:"信箱",id:"InputEM"}}),n("textarea",{attrs:{name:"question",cols:"30",rows:"10",placeholder:"告訴我們你的問題"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("img",{attrs:{src:n("7d43"),alt:"LOGO"}}),r("hr"),r("div",{staticClass:"footerFont"},[t._v("聯絡資訊")]),r("div",{staticClass:"footerFont"},[t._v("電話 : 0934031102")]),r("div",{staticClass:"footerFont"},[t._v("信箱 : bohau888@gmail.com")]),r("img",{attrs:{src:n("cb20"),alt:"QRCODE"}}),r("div",{staticClass:"footerFont "},[t._v("© 2021 FlashPig.All rights reserved.")])])}],G=(n("7db0"),n("f8c5")),N={data:function(){return{}},methods:{sendEmail:function(t){var e=document.getElementById("sendbtn"),r=document.querySelector(".sendStatusMsg"),a=document.querySelector("#InputEM");r.innerHTML="",e.value="送出中 ...";var i=[],s=n("bc3a").default;s.get("https://nekocup.github.io/api/blacklist.json").then((function(t){i=t.data.email})).then((function(){i.find((function(t){return t===a.value}))?(r.innerHTML="送出成功",setTimeout((function(){e.value="送出訊息"}),1e3)):G["a"].sendForm("service_olipqka","template_b9r49t1",t.target,"user_RNeEhedPv8vkcIcx7pdxr").then((function(n){console.log(t),e.value="送出訊息",r.innerHTML="送出成功",console.log("SUCCESS!",n.status,n.text)}),(function(t){e.value="送出訊息",r.innerHTML="送出失敗",console.log("FAILED...",t)}))}))}}},R=N,W=Object(p["a"])(R,I,z,!1,null,null,null),J=W.exports,Q={name:"App",components:{Nav:m,Header:x,Service:S,Store:k,Manager:q,Footer:J}},B=Q,U=(n("5c0b"),Object(p["a"])(B,a,i,!1,null,null,null)),Z=U.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Z)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"598b":function(t,e,n){t.exports=n.p+"img/remember_me_black_24dp.3a10f976.svg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7d43":function(t,e,n){t.exports=n.p+"img/LOGO2.94a096a4.png"},"812e":function(t,e,n){t.exports=n.p+"img/storefront_black_24dp.3ed17a66.svg"},"9c0c":function(t,e,n){},bb79:function(t,e,n){t.exports=n.p+"img/flashPig.a5fb5ae5.png"},c5dc:function(t,e,n){t.exports=n.p+"img/banner.1a12e7eb.png"},cb20:function(t,e,n){t.exports=n.p+"img/QRCODE.9f180d8c.png"},cbfd:function(t,e,n){t.exports=n.p+"img/article_black_24dp.80f609d8.svg"},ccb7:function(t,e,n){t.exports=n.p+"img/menu.20d93753.svg"},f016:function(t,e,n){t.exports=n.p+"img/map.cfd6930a.png"},f7e4:function(t,e,n){t.exports=n.p+"img/LOGO.d006111f.png"}});
//# sourceMappingURL=app.eda17218.js.map