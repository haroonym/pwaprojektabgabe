(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89648ef2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"27e3":function(e,t,r){},"4ca7":function(e,t,r){"use strict";r("27e3")},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"networkAddress",(function(){return oe}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{color:"white accent-4",dark:"",app:""}},[n("v-toolbar-title",[n("v-img",{staticClass:"mr-3",attrs:{src:r("c82a"),width:"50px"}})],1),n("h3",{staticClass:"font-weight-light black--text"},[e._v("iManager")]),n("v-spacer"),n("v-btn",{staticStyle:{color:"#f1333f"},attrs:{outlined:""},on:{click:function(t){return e.subscribe()}}},[e._v("Subscribe")])],1),n("v-main",{staticStyle:{position:"relative"}},[1==this.offline?n("div",{staticClass:"grey text-center mx-auto white--text",staticStyle:{width:"100%"},attrs:{role:"alert"}},[e._v(" You are offline... ")]):e._e(),n("v-container",[n("router-view",{attrs:{products:e.products},on:{deleteProduct:e.deleteProduct,refreshProducts:e.getProducts}})],1)],1),n("v-bottom-navigation",{staticClass:".align-self-center",attrs:{grow:""}},[n("v-btn",{staticClass:"my-auto",attrs:{to:"/"}},[n("span",[e._v("Home")])]),n("v-btn",{staticClass:"my-auto",attrs:{to:"/scan"}},[n("span",[e._v("Scan")])]),n("v-btn",{staticClass:"my-auto",attrs:{to:"/inventory"}},[n("span",[e._v("Inventar")])])],1)],1)},o=[],i=r("1da1"),s=(r("96cf"),r("38cf"),r("ac1f"),r("5319"),r("d3b7"),r("5cc6"),r("907a"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("99af"),r("bc3a")),c=r.n(s),u={created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),this.getProducts(),window.addEventListener("online",(function(){return e.offline=!1})),window.addEventListener("offline",(function(){return e.offline=!0}))},data:function(){return{products:[],serverAddress:"",once:!1,offline:!1,publicVapidKey:"BPnQ7MhOCQMWSooLtVkAkIUbZxEPq5dSGM2gNFh5zL4RXFruMkfh7dgLG4DVo3_F28Mb1e5J7-u5y7mWAcvSFWI"}},methods:{updateAvailable:function(){alert("Update vorhanden, bitte App neu starten!")},urlBase64ToUint8Array:function(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(r),a=new Uint8Array(n.length),o=0;o<n.length;++o)a[o]=n.charCodeAt(o);return a},subscribe:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("serviceWorker"in navigator){t.next=3;break}return console.log("no service worker!"),t.abrupt("return");case 3:return t.next=5,navigator.serviceWorker.ready;case 5:return r=t.sent,t.next=8,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e.urlBase64ToUint8Array(e.publicVapidKey)});case 8:return n=t.sent,t.next=11,c.a.post("".concat(e.serverAddress,"/#/subscribe"),n);case 11:case"end":return t.stop()}}),t)})))()},getProducts:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c()({url:e.serverAddress+"/products",method:"GET"});case 3:r=t.sent,n=r.data,e.products=n,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},deleteProduct:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,console.log(e),r.next=4,c()({url:"".concat(t.serverAddress,"/products/").concat(e),method:"DELETE"});case 4:t.getProducts(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}},l=u,d=r("2877"),f=r("6544"),v=r.n(f),b=r("7496"),A=r("40dc"),p=r("b81c"),g=r("8336"),h=r("a523"),m=r("adda"),k=r("f6c4"),C=r("2fa4"),w=r("2a7f"),x=Object(d["a"])(l,a,o,!1,null,null,null),B=x.exports;v()(x,{VApp:b["a"],VAppBar:A["a"],VBottomNavigation:p["a"],VBtn:g["a"],VContainer:h["a"],VImg:m["a"],VMain:k["a"],VSpacer:C["a"],VToolbarTitle:w["a"]});r("3ca3"),r("ddb0");var y=r("8c4f"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("p",{staticClass:"font-weight-bold text-h5 text-center mt-2",staticStyle:{color:"#f1333f"}},[e._v(" Willkommen zu Ihrem iManager ")]),n("p",{staticClass:"font-weight-light text-center mt-2",staticStyle:{color:"#f1333f"}},[e._v(" Der iManager ist eine mobile Applikation, in der man einfach und komfortabel das Inventar eines Haushaltes erfassen und pflegen kann. ")]),n("v-btn",{staticClass:"mx-auto",staticStyle:{left:"50%",transform:"translateX(-50%)","text-align":"center",color:"#f1333f"},attrs:{outlined:""},on:{click:function(t){return e.readout()}}},[e._v("Beschreibung anhören")]),n("div",{staticClass:"mb-5",staticStyle:{position:"absolute",bottom:"0",left:"50%",transform:"translateX(-50%)","text-align":"center"}},[n("v-btn",{staticClass:"mt-5 mx-auto",staticStyle:{color:"#f1333f"},attrs:{outlined:"",height:"125px",width:"250px",to:"/scan"}},[n("p",{staticClass:"font-weight-bold text-h3 mt-auto",staticStyle:{color:"#f1333f"}},[e._v("SCAN")]),n("v-img",{staticClass:"ml-2",attrs:{width:"0px",src:r("7b55")}})],1),n("v-btn",{staticClass:"mt-5 mx-auto",staticStyle:{color:"#f1333f"},attrs:{outlined:"",height:"125px",width:"350px",to:"/inventory"}},[n("p",{staticClass:"font-weight-bold text-h3 mt-auto",staticStyle:{color:"#f1333f"}},[e._v("INVENTAR")]),n("v-img",{staticClass:"ml-2",attrs:{width:"0px",src:r("fa43")}})],1)],1)],1)],1)},E=[],I={name:"Home",methods:{readout:function(){var e=new SpeechSynthesisUtterance;e.text="Willkommen zu Ihrem iManager! Der iManager ist eine mobile Applikation, in der man einfach und komfortabel das Inventar eines Haushaltes erfassen und pflegen kann.",window.speechSynthesis.speak(e)}}},L=I,P=Object(d["a"])(L,Q,E,!1,null,null,null),F=P.exports;v()(P,{VBtn:g["a"],VContainer:h["a"],VImg:m["a"]});var S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("p",{staticClass:"font-weight-bold text-h5 text-center mt-2 red--text"},[e._v("Inventar")]),r("v-data-table",{staticClass:"elevation-4 mt-5",staticStyle:{color:"#f1333f"},attrs:{"max-width":"100px",headers:e.headers,items:e.products,"item-key":"barcode"},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[r("v-icon",{attrs:{small:"",color:"red darken-2"},on:{click:function(t){return e.deleteProduct(n.barcode)}}},[e._v(e._s(e.icons.mdiDelete)+" ")])]}}])})],1)],1)},W=[],Y=r("94ed"),M={name:"Products",props:{products:{type:Array}},data:function(){return{icons:{mdiDelete:Y["a"]},headers:[{text:"Barcode",align:"start",value:"barcode",sortable:!1},{text:"Marke",value:"marke"},{text:"Produktname",value:"produktname"},{text:"Beschreibung",value:"beschreibung",sortable:!1},{text:"Ablaufdatum",value:"ablaufdatum"},{text:"Actions",value:"actions",sortable:!1}]}},methods:{deleteProduct:function(e){return this.$emit("deleteProduct",e)}}},V=M,q=r("8fea"),O=r("132d"),G=Object(d["a"])(V,S,W,!1,null,"b894bcfa",null),z=G.exports;v()(G,{VContainer:h["a"],VDataTable:q["a"],VIcon:O["a"]});var D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-quagga",{staticClass:"mx-auto",staticStyle:{"padding-top":"500px"},attrs:{onDetected:e.logIt,readerTypes:["ean_reader"]}}),r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{staticClass:"mt-5",attrs:{clearable:"",color:"#F1333F",label:"Barcode",hint:"wird automatisch ausgefüllt",required:"","error-messages":e.barcodeRules},on:{input:function(t){return e.$v.code.$touch()},blur:function(t){return e.$v.code.$touch()}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[e._v(e._s(e.code))]),r("v-text-field",{staticClass:"mt-5",attrs:{color:"#F1333F",hint:"z.B. Coca Cola",clearable:"",label:"Marke",required:"","error-messages":e.markeRules},on:{input:function(t){return e.$v.marke.$touch()},blur:function(t){return e.$v.marke.$touch()}},model:{value:e.marke,callback:function(t){e.marke=t},expression:"marke"}}),r("v-text-field",{staticClass:"mt-5",attrs:{color:"#F1333F",hint:"z.B. Coca Cola Zero Zucker",clearable:"",label:"Produkttitel",required:"","error-messages":e.titelRules},on:{input:function(t){return e.$v.produkttitel.$touch()},blur:function(t){return e.$v.produkttitel.$touch()}},model:{value:e.produkttitel,callback:function(t){e.produkttitel=t},expression:"produkttitel"}}),r("v-text-field",{staticClass:"mt-5",attrs:{color:"#F1333F",hint:"z.B. koffeinhaltiges Erfrischungsgetränk",clearable:"",label:"Produktbeschreibung",required:"","error-messages":e.beschreibungRules},on:{input:function(t){return e.$v.produktbeschreibung.$touch()},blur:function(t){return e.$v.produktbeschreibung.$touch()}},model:{value:e.produktbeschreibung,callback:function(t){e.produktbeschreibung=t},expression:"produktbeschreibung"}}),r("v-text-field",{staticClass:"mt-5",attrs:{color:"#F1333F",type:"date",hint:"z.B 01.01.2023",clearable:"",label:"Ablaufdatum",required:"","error-messages":e.datumRules},on:{input:function(t){return e.$v.ablaufdatum.$touch()},blur:function(t){return e.$v.ablaufdatum.$touch()}},model:{value:e.ablaufdatum,callback:function(t){e.ablaufdatum=t},expression:"ablaufdatum"}})],1),r("v-btn",{staticClass:"mt-5 mx-auto text-h5",staticStyle:{left:"50%",transform:"translateX(-50%)","text-align":"center",color:"#f1333f"},attrs:{outlined:"",height:"50px",width:"250px",type:"submit"},on:{click:function(t){e.postProduct(),e.submit,e.vibrateSimple()}}},[e._v("Speichern")]),r("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[r("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)],1)},T=[],j=(r("4de4"),r("1dce")),R=r("b5ae"),N={name:"Scan",props:{products:{type:Array}},mixins:[j["validationMixin"]],validations:{code:{required:R["required"]},marke:{required:R["required"]},produkttitel:{required:R["required"]},produktbeschreibung:{required:R["required"]},ablaufdatum:{required:R["required"]}},data:function(){return{code:"",marke:"S Budget",produkttitel:"Schokobutterkekse Zartbitterschokolade",produktbeschreibung:"Kekse mit Zartbitterschokolade",ablaufdatum:"2022-11-01",detecteds:[],readerTypes:["code_128_reader","ean_reader","ean_8_reader","code_39_reader"],snackbar:!1,text:"",valid:!1,serverAddress:""}},computed:{barcodeRules:function(){var e=[];return this.$v.code.$dirty?(!this.$v.code.required&&e.push("Barcode is required"),e):e},titelRules:function(){var e=[];return this.$v.produkttitel.$dirty?(!this.$v.produkttitel.required&&e.push("Title is required"),e):e},markeRules:function(){var e=[];return this.$v.marke.$dirty?(!this.$v.marke.required&&e.push("Brand is required"),e):e},beschreibungRules:function(){var e=[];return this.$v.produktbeschreibung.$dirty?(!this.$v.produktbeschreibung.required&&e.push("Description is required"),e):e},datumRules:function(){var e=[];return this.$v.ablaufdatum.$dirty?(!this.$v.ablaufdatum.required&&e.push("Date is required"),e):e}},methods:{vibrateSimple:function(){navigator.vibrate(2e3)},logIt:function(e){this.code=e.codeResult.code,console.log("detected",e)},submit:function(){this.$v.$touch()},postProduct:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(1==e.valid&&e.code.length>0)){t.next=19;break}if(0!=e.products.filter((function(t){return t.barcode==e.code}))){t.next=15;break}return t.next=4,c()({url:e.serverAddress+"/products",method:"POST",contentType:"application/json",data:{barcode:e.code,marke:e.marke,produktname:e.produkttitel,beschreibung:e.produktbeschreibung,ablaufdatum:e.ablaufdatum}});case 4:r=t.sent,n=r.data,console.log(n),e.snackbar=!0,e.text="Das Produkt mit dem Barcode ".concat(e.code," wurde erfolgreich erstellt"),e.$refs.form.reset(),e.$v.$reset(),e.code="",e.$emit("refreshProducts"),t.next=17;break;case 15:e.snackbar=!0,e.text="Das Produkt mit dem Barcode ".concat(e.code," existiert bereits, bitte versuchen Sie es mit einem anderen Produkt");case 17:t.next=21;break;case 19:e.snackbar=!0,e.text="Bitte scannen Sie ein Produkt ein oder überprüfen Sie, ob Sie alle Felder ausgefüllt haben!";case 21:case"end":return t.stop()}}),t)})))()}}},U=N,H=(r("4ca7"),r("4bd4")),K=r("2db4"),X=r("8654"),_=Object(d["a"])(U,D,T,!1,null,"3bbffda7",null),$=_.exports;v()(_,{VBtn:g["a"],VContainer:h["a"],VForm:H["a"],VSnackbar:K["a"],VTextField:X["a"]}),n["a"].use(y["a"]);var Z=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/inventory",name:"Inventory",component:z},{path:"/scan",name:"Scan",component:$}],J=new y["a"]({base:"/",routes:Z}),ee=J,te=r("f309");n["a"].use(te["a"]);var re=new te["a"]({}),ne=r("9483");Object(ne["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ae=r("8179");n["a"].config.productionTip=!1,n["a"].use(ae["a"]);var oe="http://127.0.0.1:3000";new n["a"]({router:ee,vuetify:re,render:function(e){return e(B)}}).$mount("#app")},"7b55":function(e,t,r){e.exports=r.p+"img/scan-svgrepo-com.66aadf14.svg"},c82a:function(e,t){e.exports="data:image/png;base64,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"},fa43:function(e,t,r){e.exports=r.p+"img/stock-svgrepo-com.e31ca510.svg"}});
//# sourceMappingURL=app.ee845230.js.map