(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ad3":function(t,e,a){"use strict";a("6eae")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),r=a("2106"),o=a.n(r),l=a("5f5b"),c=a("b1e0"),u=a("1321"),d=a.n(u),m=a("ba30"),f=a.n(m),h=a("c1df"),v=a.n(h),b=a("2ead"),p=a.n(b),C=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"btn-group mr-2",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[a("router-link",{attrs:{to:"/about"}},[t._v("一週天氣預報")])],1),a("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[a("router-link",{attrs:{to:"/about2"}},[t._v("縣市預報")])],1),a("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[a("router-link",{attrs:{to:"/about3"}},[t._v("鄉鎮天氣預報")])],1)])]),a("router-view")],1)}),_=[],j={name:"App"},w=j,g=(a("5c0b"),a("2877")),E=Object(g["a"])(w,C,_,!1,null,null,null),y=E.exports,D=a("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"text-center"},[t._v("天氣預報")])])}],B={name:"Home"},T=B,N=(a("21bb"),Object(g["a"])(T,k,x,!1,null,null,null)),A=N.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card-box"},[a("div",{staticClass:"text"},[a("h2",[t._v("一週天氣預報")]),a("div",{staticClass:"content"},[a("p",{staticClass:"time"},[t._v("有效時間: "+t._s(t.getTimeNow)+" ~ "+t._s(t.setLastDate))]),a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){t.celsius=!t.celsius}}},[t._v(" °C "),a("i",{staticClass:"fas fa-exchange-alt"}),t._v(" ℉ ")])])]),a("section",[a("nav",{staticClass:"nav nav-pills nav-fill"},[a("a",{staticClass:"nav-item nav-link",class:{active:-1==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(-1)}}},[t._v("全臺")]),a("a",{staticClass:"nav-item nav-link",class:{active:0==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(0)}}},[t._v("北部")]),a("a",{staticClass:"nav-item nav-link",class:{active:1==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(1)}}},[t._v("中部")]),a("a",{staticClass:"nav-item nav-link",class:{active:2==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(2)}}},[t._v("南部")]),a("a",{staticClass:"nav-item nav-link",class:{active:3==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(3)}}},[t._v("東部")]),a("a",{staticClass:"nav-item nav-link",class:{active:4==t.range},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getArea(4)}}},[t._v("外島")])])]),a("section",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-bordered"},[a("thead",{staticClass:"table-info sticky-top"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("縣市")]),a("th",{attrs:{scope:"col"}},[t._v("時間")]),t._l(t.dayList,(function(e,s){return a("th",{key:s,class:{holiday:e.holiday},attrs:{scope:"col"}},[a("span",[t._v(t._s(e.date))]),a("br"),a("span",[t._v(t._s(e.week))])])}))],2)]),t._l(t.cities,(function(e,s){return a("tbody",{key:s},[a("tr",{staticClass:"day"},[a("th",{staticClass:"table-info",attrs:{scope:"col",rowspan:"3"}},[t._v(" "+t._s(e.locationName)+" ")]),t._m(0,!0),t._l(e.weatherDay,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e.status))]),t.celsius?a("p",[t._v(" "+t._s(e.minCelsius)+" - "+t._s(e.maxCelsius)+" °C ")]):a("p",[t._v(" "+t._s(e.minFahrenheit)+" - "+t._s(e.maxFahrenheit)+" ℉ ")])])}))],2),a("tr",{staticClass:"night"},[a("td",{staticClass:"table-info"},[t._v("晚上")]),t._l(e.weatherNight,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e.status))]),t.celsius?a("p",[t._v(" "+t._s(e.minCelsius)+" - "+t._s(e.maxCelsius)+" °C ")]):a("p",[t._v(" "+t._s(e.minFahrenheit)+" - "+t._s(e.maxFahrenheit)+" ℉ ")])])}))],2),a("tr",{staticClass:"average"},[a("td",{staticClass:"table-info"},[t._v("全天溫度")]),t._l(e.weatherAvg,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e.status))]),t.celsius?a("p",[t._v(" "+t._s(e.minCelsius)+" - "+t._s(e.maxCelsius)+" °C ")]):a("p",[t._v(" "+t._s(e.minFahrenheit)+" - "+t._s(e.maxFahrenheit)+" ℉ ")])])}))],2)])}))],2)])])])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"table-info"},[a("span",[t._v("早上")])])}],F=(a("4de4"),a("7db0"),a("4160"),a("c975"),a("a9e3"),a("b680"),a("159b"),a("b85c")),z="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=MinT,MaxT,T,Wx",V={name:"About",data:function(){return{weatherItems:[],subject:null,celsius:!0,area:[["臺北市","新北市"],["臺中市"],["臺南市","高雄市"],["花蓮縣"],["金門縣"]],range:-1,dayList:[],cities:[],active:!1}},computed:{getTimeNow:function(){var t=v()().format("L hh:mm:ss");return t},setLastDate:function(){var t=v()().add(6,"days").format("L hh:mm:ss");return t},getLocation:function(){var t,e=Object(F["a"])(this.weatherItems);try{for(e.s();!(t=e.n()).done;){var a=t.value;return a.location}}catch(s){e.e(s)}finally{e.f()}}},created:function(){this.getApi()},methods:{getApi:function(){var t=this;this.$http.get(z).then((function(e){t.weatherItems=e.data.records.locations,t.getData()}))},getArea:function(t){this.range=t,this.getData()},getData:function(){var t=this;this.dayList=[];for(var e=0;e<7;e++){var a=v()().add(e,"days"),s=1*a.format("E");this.dayList.push({date:a.format("MM/DD"),d:a.format("YYYY-MM-DD"),week:this.toWeek(1*s),holiday:6===s||7===s})}this.cities=[];var i=this.weatherItems[0].location,n=[];if(-1!=this.range){var r=this.area[this.range];n=i.filter((function(t){return r.indexOf(t.locationName)>=0}))}else n=i;n.forEach((function(e){var a=[],s=[],i=[],n=e.weatherElement[0].time,r=e.weatherElement[1].time,o=e.weatherElement[2].time,l=e.weatherElement[3].time;t.dayList.forEach((function(t){var e=t.d,c=(n.find((function(t){return t.startTime===e+" 06:00:00"||t.startTime===e+" 12:00:00"})),l.find((function(t){return t.startTime===e+" 06:00:00"||t.startTime===e+" 12:00:00"}))),u=o.find((function(t){return t.startTime===e+" 06:00:00"||t.startTime===e+" 12:00:00"})),d=r.find((function(t){return t.startTime===e+" 06:00:00"||t.startTime===e+" 12:00:00"})),m=l.find((function(t){return t.startTime===e+" 18:00:00"||t.startTime===e+" 00:00:00"})),f=o.find((function(t){return t.startTime===e+" 18:00:00"||t.startTime===v()(e).add(1,"days").format("YYYY-MM-DD")+" 00:00:00"})),h=r.find((function(t){return t.startTime===e+" 18:00:00"||t.startTime===v()(e).add(1,"days").format("YYYY-MM-DD")+" 00:00:00"})),b=u?Number(u.elementValue[0].value):"",p=c?Number(c.elementValue[0].value):"",C=f?Number(f.elementValue[0].value):"",_=m?Number(m.elementValue[0].value):"",j="";""!=b&&""!=C&&(j=Math.min(b,C));var w="";""!=p&&""!=_&&(w=Math.max(p,_)),a.push({status:d?d.elementValue[0].value:"",minCelsius:b,maxCelsius:p,minFahrenheit:u?Number(9*u.elementValue[0].value/5+32).toFixed(0):"",maxFahrenheit:c?Number(9*c.elementValue[0].value/5+32).toFixed(0):""}),s.push({status:h?h.elementValue[0].value:"",minCelsius:C,maxCelsius:_,minFahrenheit:f?Number(9*f.elementValue[0].value/5+32).toFixed(0):"",maxFahrenheit:m?Number(9*m.elementValue[0].value/5+32).toFixed(0):""}),i.push({status:h?h.elementValue[0].value:"",minCelsius:j,maxCelsius:w,minFahrenheit:""!=j?(j+32)*1.8.toFixed(0):"",maxFahrenheit:""!=w?(w+32)*1.8.toFixed(0):""})})),t.cities.push({locationName:e.locationName,weatherDay:a,weatherNight:s,weatherAvg:i})}))},toWeek:function(t){switch(t){case 1:return"星期一";case 2:return"星期二";case 3:return"星期三";case 4:return"星期四";case 5:return"星期五";case 6:return"星期六";case 7:return"星期日";default:return""}}}},O=V,W=(a("eb01"),Object(g["a"])(O,M,Y,!1,null,"6a9c979b",null)),L=W.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h2",[t._v("縣市預報")]),a("section",[a("div",{staticClass:"select"},[a("label",[a("p",[t._v("選擇縣市")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?a:a[0]},t.getData]}},t._l(t.getCityName,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])])]),a("section",[a("div",{staticClass:"cards"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t.tomorrow[0]?a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("今晚明晨")]),a("p",[t._v(t._s(t.tomorrow[0].status))]),a("p",[t._v(" "+t._s(t.tomorrow[0].minCelsius)+"-"+t._s(t.tomorrow[0].maxCelsius)+" °C ")]),a("p",[t._v("降雨機率: "+t._s(t.tomorrow[0].rain)+" %")])])]):t._e()]),a("div",{staticClass:"col-sm-4"},[t.tomorrow[1]?a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("明日白天")]),a("p",[t._v(t._s(t.tomorrow[1].status))]),a("p",[t._v(" "+t._s(t.tomorrow[1].minCelsius)+"-"+t._s(t.tomorrow[1].maxCelsius)+" °C ")]),a("p",[t._v("降雨機率: "+t._s(t.tomorrow[1].rain)+" %")])])]):t._e()]),a("div",{staticClass:"col-sm-4"},[t.tomorrow[2]?a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("明日晚上")]),a("p",[t._v(t._s(t.tomorrow[1].status))]),a("p",[t._v(" "+t._s(t.tomorrow[1].minCelsius)+"-"+t._s(t.tomorrow[1].maxCelsius)+" °C ")]),a("p",[t._v("降雨機率: "+t._s(t.tomorrow[1].rain)+" %")])])]):t._e()])])])]),a("section",[a("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[a("b-tab",{attrs:{title:"一週預報",active:""}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-bordered"},[a("thead",{staticClass:"table-info"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" "+t._s(t.selectedCity)+" ")]),t._l(t.dayList,(function(e,s){return a("th",{key:s,class:{holiday:e.holiday},attrs:{scope:"col"}},[a("span",[t._v(t._s(e.date))]),a("br"),a("span",[t._v(t._s(e.week))])])}))],2)]),a("tbody",[a("tr",{staticClass:"day"},[a("th",{staticClass:"table-info"},[t._v("白天")]),t._l(t.weatherDay,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e.status))]),a("p",[t._v(t._s(e.minCelsius)+" - "+t._s(e.maxCelsius)+" °C")])])}))],2),a("tr",{staticClass:"night"},[a("th",{staticClass:"table-info"},[t._v("晚上")]),t._l(t.weatherNight,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e.status))]),a("p",[t._v(t._s(e.minCelsius)+" - "+t._s(e.maxCelsius)+" °C")])])}))],2),a("tr",{staticClass:"rain"},[a("th",{staticClass:"table-info"},[t._v("降雨機率")]),t._l(t.rainProbability,(function(e,s){return a("td",{key:s},[a("span",[t._v(t._s(e)+" %")])])}))],2)])])])]),a("b-tab",{attrs:{title:"一週溫度曲線"}},[a("h4",[t._v(t._s(t.selectedCity))]),a("div",{attrs:{id:"weekTemperature"}},[a("apexchart",{attrs:{type:"line",height:"350",options:t.option1,series:t.series1}})],1)])],1)],1)])])])},I=[],$=(a("d81d"),a("ade3")),H="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=Wx,PoP,MinT,MaxT",S="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=MinT,MaxT,PoP12h,Wx",U={name:"About2",components:{apexchart:d.a},data:function(){var t;return{series1:[],option1:(t={chart:{height:350,type:"line",zoom:{enabled:!1}},colors:["#F4511E","#4DD0E1"],dataLabels:{enabled:!0},stroke:{curve:"straight"}},Object($["a"])(t,"dataLabels",{enabled:!0}),Object($["a"])(t,"markers",{size:2,opacity:.9,colors:["#56c2d6"],strokeColor:"#fff",strokeWidth:2,style:"inverted",hover:{size:7}}),Object($["a"])(t,"title",{text:"一週溫度曲線",align:"left"}),Object($["a"])(t,"grid",{row:{colors:["#fff","#eee"],opacity:.5},borderColor:"#ccc"}),Object($["a"])(t,"xaxis",{title:{text:"日期"},categories:[]}),Object($["a"])(t,"yaxis",{title:{text:"溫度"},min:0,max:40}),t),weatherItems:[],weatherWeekItems:[],weatherDay:[],weatherNight:[],rainProbability:[],status:[],selectedCity:"臺北市",getCityName:["臺北市","新北市","臺中市","臺南市","高雄市","花蓮縣","金門縣"],tomorrow:[],dayList:[],dayTemp:[],nightTemp:[],dateTemp:[]}},computed:{},mounted:function(){this.getApi(),this.getWeek()},methods:{getApi:function(){var t=this;this.$http.get(H).then((function(e){t.weatherItems=e.data.records,t.getWeek()}))},getWeek:function(){var t=this;this.$http.get(S).then((function(e){t.weatherWeekItems=e.data.records,t.getData()}))},getData:function(){this.tomorrow=[],this.weatherItems&&(this.getCardData(" 18:00:00",0),this.getCardData(" 06:00:00",1),this.getCardData(" 18:00:00",2),this.getTableData(),this.getTemperature())},getCardData:function(t,e){var a=this,s=this.weatherItems.location,i=s.find((function(t){return t.locationName===a.selectedCity})),n=i.weatherElement[0].time,r=i.weatherElement[2].time,o=i.weatherElement[3].time,l=i.weatherElement[1].time,c=v()().add(e,"days").format("YYYY-MM-DD"),u=o.find((function(e){return e.startTime===c+t})),d=r.find((function(e){return e.startTime===c+t})),m=n.find((function(e){return e.startTime===c+t})),f=l.find((function(e){return e.startTime===c+t})),h=d?Number(d.parameter.parameterName):"",b=u?Number(u.parameter.parameterName):"";this.tomorrow.push({status:m?m.parameter.parameterName:"",minCelsius:h,maxCelsius:b,rain:f?f.parameter.parameterName:""}),this.cities=[],this.cities.push({locationName:i.locationName})},getTableData:function(){var t=this;this.weatherDay=[],this.weatherNight=[],this.rainProbability=[],this.dayList=[];for(var e=0;e<7;e++){var a=v()().add(e,"days"),s=1*a.format("E");this.dayList.push({date:a.format("MM/DD"),d:a.format("YYYY-MM-DD"),week:this.toWeek(1*s),holiday:6===s||7===s})}var i=this.weatherWeekItems.locations[0],n=i.location.find((function(e){return e.locationName===t.selectedCity}));this.dayList.forEach((function(e){var a=e.d,s=n.weatherElement[0].time,i=n.weatherElement[1].time,r=n.weatherElement[2].time,o=n.weatherElement[3].time,l=o.find((function(t){return t.startTime===a+" 06:00:00"})),c=r.find((function(t){return t.startTime===a+" 06:00:00"})),u=i.find((function(t){return t.startTime===a+" 06:00:00"})),d=o.find((function(t){return t.startTime===a+" 18:00:00"})),m=r.find((function(t){return t.startTime===a+" 18:00:00"})),f=i.find((function(t){return t.startTime===a+" 18:00:00"})),h=s.find((function(t){return t.startTime===a+" 06:00:00"}));s.find((function(t){return t.startTime===a+" 18:00:00"}));t.weatherDay.push({status:u?u.elementValue[0].value:"",minCelsius:c?Number(c.elementValue[0].value):"",maxCelsius:l?Number(l.elementValue[0].value):""}),t.weatherNight.push({status:f?f.elementValue[0].value:"",minCelsius:m?Number(m.elementValue[0].value):"",maxCelsius:d?Number(d.elementValue[0].value):""}),t.rainProbability.push(h?h.elementValue[0].value:"")}))},getTemperature:function(){var t=this;this.tempDay=[],this.tempNight=[],this.series1=[],this.option1={};var e=[];this.tempDateList=[];for(var a=0;a<7;a++){var s=v()().add(a,"days"),i=1*s.format("E");this.tempDateList.push({date:s.format("MM/DD"),d:s.format("YYYY-MM-DD"),week:this.toWeek(1*i),holiday:6===i||7===i}),e.push("".concat(s.format("MM/DD")))}var n=this.weatherWeekItems.locations[0],r=n.location.find((function(e){return e.locationName===t.selectedCity}));this.tempDateList.forEach((function(a){var s=a.d,i=r.weatherElement[1].time,n=r.weatherElement[2].time,o=r.weatherElement[3].time,l=o.find((function(t){return t.startTime===s+" 06:00:00"})),c=n.find((function(t){return t.startTime===s+" 06:00:00"})),u=i.find((function(t){return t.startTime===s+" 06:00:00"})),d=o.find((function(t){return t.startTime===s+" 18:00:00"})),m=n.find((function(t){return t.startTime===s+" 18:00:00"})),f=i.find((function(t){return t.startTime===s+" 18:00:00"}));t.tempDay.push({status:u?u.elementValue[0].value:"",minCelsius:c?Number(c.elementValue[0].value):"",maxCelsius:l?Number(l.elementValue[0].value):""}),t.tempNight.push({status:f?f.elementValue[0].value:"",minCelsius:m?Number(m.elementValue[0].value):"",maxCelsius:d?Number(d.elementValue[0].value):""});var h={series1:[{name:"最高溫",data:t.tempDay.map((function(t){return t.maxCelsius||0}))},{name:"最低溫",data:t.tempNight.map((function(t){return t.minCelsius||0}))}],option1:{xaxis:{categories:[]}}};t.series1=h.series1,t.option1.xaxis={title:{text:"日期"},categories:e}}))},toWeek:function(t){switch(t){case 1:return"星期一";case 2:return"星期二";case 3:return"星期三";case 4:return"星期四";case 5:return"星期五";case 6:return"星期六";case 7:return"星期日";default:return""}}}},q=U,J=(a("0ad3"),Object(g["a"])(q,P,I,!1,null,"6707a987",null)),R=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v("鄉鎮天氣預報")]),a("section",[a("div",{staticClass:"select"},[a("label",[a("p",[t._v("選擇縣市")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?a:a[0]},t.getApi]}},[a("option",{attrs:{value:"null",disabled:""}},[t._v("-- 請選擇城市 --")]),t._l(t.getCityName,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])])]),a("section",[a("div",{staticClass:"cards"},[a("div",{staticClass:"row"},t._l(t.TaiwanCities,(function(e,s){return a("div",{key:s,staticClass:"col-md-4 col-lg-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(" "+t._s(e.locationName)+" ")]),a("p",[t._v("天氣現象："+t._s(e.status))]),a("p",[t._v("平均溫度："+t._s(e.avgTemp)+" °C")]),a("p",[t._v("降雨機率："+t._s(e.rain)+" %")])]),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"statusModal",expression:"'statusModal'"}],staticClass:"btn btn-info",on:{click:function(a){return t.showModal(e)}}},[a("i",{staticClass:"fas fa-bars pr-2"}),a("span",[t._v("更多資訊")])])])])})),0)])]),a("section",[a("b-modal",{attrs:{id:"statusModal","header-bg-variant":"info","header-close-variant":"white"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-white"},[t._v(" "+t._s(t.detail.locationName)+" ")])]),a("ul",{staticClass:"infoModal"},[a("li",[t._v("天氣現象："+t._s(t.detail.status))]),a("li",[t._v("12 小時降雨機率："+t._s(t.detail.rain)+" %")]),a("li",[t._v("平均溫度："+t._s(t.detail.avgTemp)+" °C")]),a("li",[t._v("天氣預報綜合描述："+t._s(t.detail.statusDetail))]),a("li",[t._v("平均相對溼度："+t._s(t.detail.avghumidity)+" %")]),a("li",[t._v("體感溫度："+t._s(t.detail.Feel)+" °C")]),a("li",[t._v("舒適度指數："+t._s(t.detail.comfort))]),a("li",[t._v("最大風速："+t._s(t.detail.maxWindSpeed)+" 公尺 / 秒")]),a("li",[t._v("風向："+t._s(t.detail.windDirection))]),a("li",[t._v("平均露點溫度："+t._s(t.detail.dewPoint)+" °C")]),a("li",[t._v("6 小時降雨機率："+t._s(t.detail.sixHourRain)+" °C")])])],2)],1)])},K=[],Q="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",X="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",Z="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",tt="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",et="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",at="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-041?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",st="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-085?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",it={name:"About3",data:function(){return{selectedCity:"臺北市",getCityName:["臺北市","新北市","臺中市","臺南市","高雄市","花蓮縣","金門縣"],weatherItems:[],allApiUrl:[Q,X,Z,tt,et,at,st],TaiwanCities:[],detail:{cityName:""},modal:!1,changeCity:["臺北市","新北市","臺中市","臺南市","高雄市","花蓮縣","金門縣"]}},computed:{},mounted:function(){this.getApi()},methods:{getApi:function(){var t=this;this.$http.get(this.allApiUrl[this.getCityName.indexOf(this.selectedCity)]).then((function(e){t.weatherItems=e.data.records,t.getData()}))},rainData:function(t,e,a,s,i){var n=t.weatherElement[e].time,r=n.find((function(t){return t[i]===a+s}));return r?r.elementValue[0].value:""},weatherDesc:function(t,e,a,s,i){var n=t.weatherElement[e].time,r=n.find((function(t){return t[i]===a+s}));return r?r.elementValue[0].value:""},getData:function(){var t=this;this.TaiwanCities=[];var e=this.weatherItems.locations[0].location;e.forEach((function(e){e.locationName;var a=e.weatherElement[2].time,s=e.weatherElement[3].time,i=e.weatherElement[4].time,n=e.weatherElement[5].time,r=e.weatherElement[6].time,o=e.weatherElement[7].time,l=e.weatherElement[8].time,c=e.weatherElement[9].time,u=e.weatherElement[10].time,d=v()().format("YYYY-MM-DD"),m=" 06:00:00",f=Number(v()().format("HH")),h=3*Math.ceil(f/3);f>=24?(m=" 00:00:00",d=v()().add(1,"days").format("YYYY-MM-DD")):m=f>=10?" ".concat(h,":00:00"):" 0".concat(h,":00:00");v()().format("YYYY-MM-DD");var b=Number(v()().format("HH"));b>18&&(" 06:00:00",v()().add(1,"days").format("YYYY-MM-DD"));var p=v()().format("YYYY-MM-DD"),C=" 12:00:00",_=Number(v()().format("HH"));_>=12&&(C=" 00:00:00",p=v()().add(1,"days").format("YYYY-MM-DD"));var j=s.find((function(t){return t.dataTime===d+m})),w=i.find((function(t){return t.dataTime===d+m})),g=n.find((function(t){return t.dataTime===d+m})),E=l.find((function(t){return t.dataTime===d+m})),y=a.find((function(t){return t.dataTime===d+m})),D=o.find((function(t){return t.startTime===d+m})),k=r.find((function(t){return t.startTime===d+m})),x=c.find((function(t){return t.dataTime===d+m})),B=u.find((function(t){return t.dataTime===d+m}));t.TaiwanCities.push({locationName:e.locationName,rain:t.rainData(e,0,p,C,"startTime"),status:t.weatherDesc(e,1,d,m,"startTime"),avgTemp:j?j.elementValue[0].value:"",statusDetail:k?k.elementValue[0].value:"",avghumidity:w?w.elementValue[0].value:"",comfort:g?g.elementValue[0].value:"",maxWindSpeed:E?E.elementValue[0].value:"",Feel:y?y.elementValue[0].value:"",windDirection:x?x.elementValue[0].value:"",dewPoint:B?B.elementValue[0].value:"",sixHourRain:D?D.elementValue[0].value:""})}))},showModal:function(t){this.modal=!0,this.detail=t}}},nt=it,rt=(a("672f"),Object(g["a"])(nt,G,K,!1,null,"250f898b",null)),ot=rt.exports;s["default"].use(D["a"]);var lt=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:L},{path:"/about2",name:"About2",component:R},{path:"/about3",name:"About3",component:ot}],ct=new D["a"]({routes:lt}),ut=ct;v.a.locale("zh-tw"),a("90ea"),s["default"].config.productionTip=!1,s["default"].use(o.a,n.a),s["default"].use(l["a"]),s["default"].use(c["a"]),s["default"].use(d.a),s["default"].component("apexchart",d.a,f.a),s["default"].use(p.a,{moment:v.a}),new s["default"]({router:ut,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"672f":function(t,e,a){"use strict";a("bc45")},"6eae":function(t,e,a){},"9c0c":function(t,e,a){},b032:function(t,e,a){},bc45:function(t,e,a){},eb01:function(t,e,a){"use strict";a("b032")}});
//# sourceMappingURL=app.a3925195.js.map