(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0FX9":function(t,n,e){var r=e("qmMu"),o=e("QUaw"),i=e("OwiN");function a(t,n,e,o,i){var a=arguments.length-1;if(a<2)throw new Error("Too few arguments provided");if(2===a?(i=e,e=n,n=o=void 0):3===a&&(n.getContext&&void 0===i?(i=o,o=void 0):(i=o,o=e,e=n,n=void 0)),"function"!=typeof i)throw new Error("Callback required as last argument");try{var u=r.create(e,o);i(null,t(u,n,o))}catch(l){i(l)}}n.create=r.create,n.toCanvas=a.bind(null,o.render),n.toDataURL=a.bind(null,o.renderToDataURL),n.toString=a.bind(null,(function(t,n,e){return i.render(t,e)})),n.qrcodedraw=function(){return{draw:n.toCanvas}}},"1sBl":function(t,n,e){var r=e("e/Dd").getSymbolSize;n.getRowColCoords=function(t){if(1===t)return[];for(var n=Math.floor(t/7)+2,e=r(t),o=145===e?26:2*Math.ceil((e-13)/(2*n-2)),i=[e-7],a=1;a<n-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},n.getPositions=function(t){for(var e=[],r=n.getRowColCoords(t),o=r.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||e.push([r[i],r[a]]);return e}},"3X7Y":function(t,n,e){var r=e("u/Db");function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var n,e,r;for(n=0;n+3<=this.data.length;n+=3)e=this.data.substr(n,3),r=parseInt(e,10),t.put(r,10);var o=this.data.length-n;o>0&&(e=this.data.substr(n),r=parseInt(e,10),t.put(r,3*o+1))},t.exports=o},"7uVY":function(t,n){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},AZa5:function(t,n,e){var r=e("Wogr"),o=e("u/Db");function i(t){this.mode=o.BYTE,this.data=new r(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var n=0,e=this.data.length;n<e;n++)t.put(this.data[n],8)},t.exports=i},BCVQ:function(t,n){var e="(?:[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uffef]|[\u4e00-\u9faf]|[\u2605-\u2606]|[\u2190-\u2195]|\u203b|[\u2010\u2015\u2018\u2019\u2025\u2026\u201c\u201d\u2225\u2260]|[\u0391-\u0451]|[\xa7\xa8\xb1\xb4\xd7\xf7])+";n.KANJI=new RegExp(e,"g"),n.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+-./:]+","g"),n.BYTE=new RegExp("(?:(?![A-Z0-9 $%*+-./:]|(?:[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uffef]|[\u4e00-\u9faf]|[\u2605-\u2606]|[\u2190-\u2195]|\u203b|[\u2010\u2015\u2018\u2019\u2025\u2026\u201c\u201d\u2225\u2260]|[\u0391-\u0451]|[\xa7\xa8\xb1\xb4\xd7\xf7])+).)+","g"),n.NUMERIC=new RegExp("[0-9]+","g"),n.ALPHANUMERIC=new RegExp("[A-Z $%*+-./:]+","g");var r=new RegExp("^"+e+"$"),o=new RegExp("^[0-9]+$"),i=new RegExp("^[A-Z0-9 $%*+-./:]+$");n.testKanji=function(t){return r.test(t)},n.testNumeric=function(t){return o.test(t)},n.testAlphanumeric=function(t){return i.test(t)}},ELBg:function(t,n,e){"use strict";var r={single_source_shortest_paths:function(t,n,e){var o={},i={};i[n]=0;var a,u,l,s,f,c,h=r.PriorityQueue.make();for(h.push(n,0);!h.empty();)for(l in s=(a=h.pop()).cost,f=t[u=a.value]||{})f.hasOwnProperty(l)&&(c=s+f[l],(void 0===i[l]||i[l]>c)&&(i[l]=c,h.push(l,c),o[l]=u));if(void 0!==e&&void 0===i[e]){var d=["Could not find a path from ",n," to ",e,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(t,n){for(var e=[],r=n;r;)e.push(r),r=t[r];return e.reverse(),e},find_path:function(t,n,e){var o=r.single_source_shortest_paths(t,n,e);return r.extract_shortest_path_from_predecessor_list(o,e)},PriorityQueue:{make:function(t){var n,e=r.PriorityQueue,o={};for(n in t=t||{},e)e.hasOwnProperty(n)&&(o[n]=e[n]);return o.queue=[],o.sorter=t.sorter||e.default_sorter,o},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){this.queue.push({value:t,cost:n}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},"GL/c":function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){return function(){}}(),i=e("pMnS"),a=e("oBZk"),u=e("ZZ/e"),l=e("0FX9"),s=function(){function t(t){this.renderer=t,this.elementType="url",this.cssClass="qrcode",this.value="https://www.techiediaries.com",this.version="",this.errorCorrectionLevel="M"}return t.prototype.ngOnChanges=function(){this.createQRCode()},t.prototype.toDataURL=function(){var t=this;return new Promise((function(n,e){l.toDataURL(t.value,{version:t.version,errorCorrectionLevel:t.errorCorrectionLevel},(function(t,r){t?(console.error(t),e(t)):n(r)}))}))},t.prototype.toCanvas=function(t){var n=this;return new Promise((function(e,r){l.toCanvas(t,n.value,{version:n.version,errorCorrectionLevel:n.errorCorrectionLevel},(function(t){t?r(t):e("success")}))}))},t.prototype.renderElement=function(t){for(var n=0,e=this.qrcElement.nativeElement.childNodes;n<e.length;n++)this.renderer.removeChild(this.qrcElement.nativeElement,e[n]);this.renderer.appendChild(this.qrcElement.nativeElement,t)},t.prototype.createQRCode=function(){var t,n=this;if(this.value)switch(this.elementType){case"canvas":t=this.renderer.createElement("canvas"),this.toCanvas(t).then((function(e){n.renderElement(t)})).catch((function(t){console.error(t)}));break;case"url":case"img":default:t=this.renderer.createElement("img"),this.toDataURL().then((function(e){t.setAttribute("src",e),n.renderElement(t)})).catch((function(t){console.error(t)}))}},t}(),f=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[]}},t}(),c=e("Ip0R"),h=r.rb({encapsulation:2,styles:[],data:{}});function d(t){return r.Pb(0,[r.Lb(402653184,1,{qrcElement:0}),(t()(),r.tb(1,0,[[1,0],["qrcElement",1]],null,0,"div",[],[[8,"className",0]],null,null,null,null))],null,(function(t,n){t(n,1,0,n.component.cssClass)}))}var g=e("gIcY"),p=e("zA0m"),v=function(){function t(t){this.barcodeScanner=t,this.qrData=null,this.createdCode=null,this.scannedCode=null}return t.prototype.createCode=function(){this.createdCode=this.qrData,console.log(this.createdCode)},t.prototype.scanCode=function(){var t=this;this.barcodeScanner.scan().then((function(n){t.scannedCode=n.text}))},t}(),b=r.rb({encapsulation:0,styles:[[""]],data:{}});function w(t){return r.Pb(0,[(t()(),r.tb(0,0,null,null,6,"ion-card",[],null,null,null,a.N,a.d)),r.sb(1,49152,null,0,u.l,[r.h,r.k,r.z],null,null),(t()(),r.tb(2,0,null,0,1,"ngx-qrcode",[],null,null,null,d,h)),r.sb(3,573440,null,0,s,[r.D],{value:[0,"value"]},null),(t()(),r.tb(4,0,null,0,2,"ion-card-content",[],null,null,null,a.J,a.e)),r.sb(5,49152,null,0,u.m,[r.h,r.k,r.z],null,null),(t()(),r.Nb(6,0,[" Value: "," "]))],(function(t,n){t(n,3,0,n.component.createdCode)}),(function(t,n){t(n,6,0,n.component.createdCode)}))}function m(t){return r.Pb(0,[(t()(),r.tb(0,0,null,null,4,"ion-card",[],null,null,null,a.N,a.d)),r.sb(1,49152,null,0,u.l,[r.h,r.k,r.z],null,null),(t()(),r.tb(2,0,null,0,2,"ion-card-content",[],null,null,null,a.J,a.e)),r.sb(3,49152,null,0,u.m,[r.h,r.k,r.z],null,null),(t()(),r.Nb(4,0,[" Result from scan: "," "]))],null,(function(t,n){t(n,4,0,n.component.scannedCode)}))}function y(t){return r.Pb(0,[(t()(),r.tb(0,0,null,null,6,"ion-header",[],null,null,null,a.U,a.o)),r.sb(1,49152,null,0,u.A,[r.h,r.k,r.z],null,null),(t()(),r.tb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.lb,a.F)),r.sb(3,49152,null,0,u.Bb,[r.h,r.k,r.z],null,null),(t()(),r.tb(4,0,null,0,2,"ion-title",[],null,null,null,a.kb,a.E)),r.sb(5,49152,null,0,u.zb,[r.h,r.k,r.z],null,null),(t()(),r.Nb(-1,0,[" QR Code Generator and Scanner "])),(t()(),r.tb(7,0,null,null,21,"ion-content",[],null,null,null,a.P,a.j)),r.sb(8,49152,null,0,u.t,[r.h,r.k,r.z],null,null),(t()(),r.tb(9,0,null,0,19,"div",[["class","ion-padding"]],null,null,null,null,null)),(t()(),r.tb(10,0,null,null,6,"ion-input",[["placeholder","My QR data"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(t,n,e){var o=!0,i=t.component;return"ionBlur"===n&&(o=!1!==r.Fb(t,11)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==r.Fb(t,11)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(i.qrData=e)&&o),o}),a.X,a.r)),r.sb(11,16384,null,0,u.Nb,[r.k],null,null),r.Kb(1024,null,g.b,(function(t){return[t]}),[u.Nb]),r.sb(13,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),r.Kb(2048,null,g.c,null,[g.e]),r.sb(15,16384,null,0,g.d,[[4,g.c]],null,null),r.sb(16,49152,null,0,u.F,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(t()(),r.tb(17,0,null,null,3,"button",[["full",""],["icon-left",""],["ion-button",""]],null,[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.createCode()&&r),r}),null,null)),(t()(),r.tb(18,0,null,null,1,"ion-icon",[["name","barcode"]],null,null,null,a.V,a.p)),r.sb(19,49152,null,0,u.B,[r.h,r.k,r.z],{name:[0,"name"]},null),(t()(),r.Nb(-1,null,["Create "])),(t()(),r.tb(21,0,null,null,3,"button",[["full",""],["icon-left",""],["ion-button",""]],null,[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.scanCode()&&r),r}),null,null)),(t()(),r.tb(22,0,null,null,1,"ion-icon",[["name","qr-scanner"]],null,null,null,a.V,a.p)),r.sb(23,49152,null,0,u.B,[r.h,r.k,r.z],{name:[0,"name"]},null),(t()(),r.Nb(-1,null,["Scan Code "])),(t()(),r.ib(16777216,null,null,1,null,w)),r.sb(26,16384,null,0,c.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(t()(),r.ib(16777216,null,null,1,null,m)),r.sb(28,16384,null,0,c.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,13,0,e.qrData),t(n,16,0,"My QR data","text"),t(n,19,0,"barcode"),t(n,23,0,"qr-scanner"),t(n,26,0,e.createdCode),t(n,28,0,e.scannedCode)}),(function(t,n){t(n,10,0,r.Fb(n,15).ngClassUntouched,r.Fb(n,15).ngClassTouched,r.Fb(n,15).ngClassPristine,r.Fb(n,15).ngClassDirty,r.Fb(n,15).ngClassValid,r.Fb(n,15).ngClassInvalid,r.Fb(n,15).ngClassPending)}))}function E(t){return r.Pb(0,[(t()(),r.tb(0,0,null,null,1,"app-qrscan-new",[],null,null,null,y,b)),r.sb(1,49152,null,0,v,[p.a],null,null)],null,null)}var C=r.pb("app-qrscan-new",v,E,{},{},[]),B=e("ZYCi"),A=function(){return function(){}}();e.d(n,"QrscanNewPageModuleNgFactory",(function(){return P}));var P=r.qb(o,[],(function(t){return r.Cb([r.Db(512,r.j,r.bb,[[8,[i.a,C]],[3,r.j],r.x]),r.Db(4608,c.n,c.m,[r.u,[2,c.y]]),r.Db(4608,g.g,g.g,[]),r.Db(4608,u.b,u.b,[r.z,r.g]),r.Db(4608,u.Gb,u.Gb,[u.b,r.j,r.q]),r.Db(4608,u.Jb,u.Jb,[u.b,r.j,r.q]),r.Db(1073742336,c.c,c.c,[]),r.Db(1073742336,g.f,g.f,[]),r.Db(1073742336,g.a,g.a,[]),r.Db(1073742336,u.Db,u.Db,[]),r.Db(1073742336,B.o,B.o,[[2,B.t],[2,B.m]]),r.Db(1073742336,A,A,[]),r.Db(1073742336,f,f,[]),r.Db(1073742336,o,o,[]),r.Db(1024,B.k,(function(){return[[{path:"",component:v}]]}),[])])}))},JzKC:function(t,n,e){var r=e("Wogr"),o=e("aZ40");n.mul=function(t,n){var e=new r(t.length+n.length-1);e.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<n.length;a++)e[i+a]^=o.mul(t[i],n[a]);return e},n.mod=function(t,n){for(var e=new r(t);e.length-n.length>=0;){for(var i=e[0],a=0;a<n.length;a++)e[a]^=o.mul(n[a],i);for(var u=0;u<e.length&&0===e[u];)u++;e=e.slice(u)}return e},n.generateECPolynomial=function(t){for(var e=new r([1]),i=0;i<t;i++)e=n.mul(e,[1,o.exp(i)]);return e}},Lzq4:function(t,n,e){var r=e("u/Db"),o=e("e/Dd");function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var n;for(n=0;n<this.data.length;n++){var e=o.toSJIS(this.data[n]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[n]+"\nMake sure your charset is UTF-8");e-=49472}t.put(e=192*(e>>>8&255)+(255&e),13)}},t.exports=i},NPxG:function(t,n,e){var r=e("ekOh"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];n.getBlocksCount=function(t,n){switch(n){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},n.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},OwiN:function(t,n,e){var r=e("Rb7d");function o(t){return'fill="rgb('+[t.r,t.g,t.b].join(",")+')" fill-opacity="'+(t.a/255).toFixed(2)+'"'}n.render=function(t,n){var e=r.getOptions(n),i=t.modules.size,a=t.modules.data,u=(i+2*e.margin)*e.scale,l='<?xml version="1.0" encoding="utf-8"?>\n';l+='<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n',l+='<svg version="1.1" baseProfile="full"',l+=' width="'+u+'" height="'+u+'"',l+=' viewBox="0 0 '+u+" "+u+'"',l+=' xmlns="http://www.w3.org/2000/svg"',l+=' xmlns:xlink="http://www.w3.org/1999/xlink"',l+=' xmlns:ev="http://www.w3.org/2001/xml-events">\n',l+='<rect x="0" y="0" width="'+u+'" height="'+u+'" '+o(e.color.light)+" />\n",l+='<defs><rect id="p" width="'+e.scale+'" height="'+e.scale+'" /></defs>\n',l+="<g "+o(e.color.dark)+">\n";for(var s=0;s<i;s++)for(var f=0;f<i;f++)a[s*i+f]&&(l+='<use x="'+(e.margin+f)*e.scale+'" y="'+(e.margin+s)*e.scale+'" xlink:href="#p" />\n');return(l+="</g>\n")+"</svg>"}},QUaw:function(t,n,e){var r=e("Rb7d");n.render=function(t,n,e){var o=e,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);var a=(t.modules.size+2*o.margin)*o.scale,u=i.getContext("2d"),l=u.createImageData(a,a);return r.qrToImageData(l.data,t,o.margin,o.scale,o.color),function(t,n,e){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=e,n.width=e,n.style.height=e+"px",n.style.width=e+"px"}(u,i,a),u.putImageData(l,0,0),i},n.renderToDataURL=function(t,e,r){var o=r;return void 0!==o||e&&e.getContext||(o=e,e=void 0),o||(o={}),n.render(t,e,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},Rb7d:function(t,n){function e(t){if("string"!=typeof t)throw new Error("Color should be defined as hex string");var n=t.slice().replace("#","").split("");if(n.length<3||5===n.length||n.length>8)throw new Error("Invalid hex color: "+t);3!==n.length&&4!==n.length||(n=Array.prototype.concat.apply([],n.map((function(t){return[t,t]})))),6===n.length&&n.push("F","F");var e=parseInt(n.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e}}n.getOptions=function(t){return t||(t={}),t.color||(t.color={}),{scale:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},n.qrToImageData=function(t,n,e,r,o){for(var i=n.modules.size,a=n.modules.data,u=e*r,l=i*r+2*u,s=[o.light,o.dark],f=0;f<l;f++)for(var c=0;c<l;c++){var h=4*(f*l+c),d=o.light;f>=u&&c>=u&&f<l-u&&c<l-u&&(d=s[a[Math.floor((f-u)/r)*i+Math.floor((c-u)/r)]]),t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},V35J:function(t,n,e){var r=e("Wogr");function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new r(t*t),this.data.fill(0),this.reservedBit=new r(t*t),this.reservedBit.fill(0)}o.prototype.set=function(t,n,e,r){var o=t*this.size+n;this.data[o]=e,r&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,n){return this.data[t*this.size+n]},o.prototype.xor=function(t,n,e){this.data[t*this.size+n]^=e},o.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]},t.exports=o},Wogr:function(t,n,e){"use strict";var r=e("7uVY");function o(t,n,e){return"number"==typeof t?u(t):function(t,n,e){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(t,n,e){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(e||0))throw new RangeError("'length' is out of bounds");var r;return(r=void 0===n&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,n):new Uint8Array(t,n,e)).__proto__=o.prototype,r}(t,n,e):"string"==typeof t?function(t){var n=0|f(t),e=a(n),r=e.write(t);return r!==n&&(e=e.slice(0,r)),e}(t):function(t){if(o.isBuffer(t)){var n=0|i(t.length),e=a(n);return 0===e.length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?a(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t)}(t,n,e)}function i(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function a(t){var n=new Uint8Array(t);return n.__proto__=o.prototype,n}function u(t){return a(t<0?0:0|i(t))}function l(t){for(var n=t.length<0?0:0|i(t.length),e=a(n),r=0;r<n;r+=1)e[r]=255&t[r];return e}function s(t,n){var e;n=n||1/0;for(var r=t.length,o=null,i=[],a=0;a<r;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!o){if(e>56319){(n-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(n-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(n-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(n-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((n-=1)<0)break;i.push(e)}else if(e<2048){if((n-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((n-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((n-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function f(t){return o.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:s(t).length)}o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),o.prototype.write=function(t,n,e){void 0===n?(e=this.length,n=0):void 0===e&&"string"==typeof n?(e=this.length,n=0):isFinite(n)&&(n|=0,isFinite(e)?e|=0:e=void 0);var r=this.length-n;if((void 0===e||e>r)&&(e=r),t.length>0&&(e<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,n,e,r){return function(t,n,e,r){for(var o=0;o<r&&!(o+e>=n.length||o>=t.length);++o)n[o+e]=t[o];return o}(s(n,t.length-e),t,e,r)}(this,t,n,e)},o.prototype.slice=function(t,n){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):t>e&&(t=e),(n=void 0===n?e:~~n)<0?(n+=e)<0&&(n=0):n>e&&(n=e),n<t&&(n=t);var r=this.subarray(t,n);return r.__proto__=o.prototype,r},o.prototype.copy=function(t,n,e,r){if(e||(e=0),r||0===r||(r=this.length),n>=t.length&&(n=t.length),n||(n=0),r>0&&r<e&&(r=e),r===e)return 0;if(0===t.length||0===this.length)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-n<r-e&&(r=t.length-n+e);var o,i=r-e;if(this===t&&e<n&&n<r)for(o=i-1;o>=0;--o)t[o+n]=this[o+e];else if(i<1e3)for(o=0;o<i;++o)t[o+n]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),n);return i},o.prototype.fill=function(t,n,e){if("string"==typeof t){if("string"==typeof n?(n=0,e=this.length):"string"==typeof e&&(e=this.length),1===t.length){var r=t.charCodeAt(0);r<256&&(t=r)}}else"number"==typeof t&&(t&=255);if(n<0||this.length<n||this.length<e)throw new RangeError("Out of range index");if(e<=n)return this;var i;if(n>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=n;i<e;++i)this[i]=t;else{var a=o.isBuffer(t)?t:new o(t),u=a.length;for(i=0;i<e-n;++i)this[i+n]=a[i%u]}return this},o.concat=function(t,n){if(!r(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a(null);var e;if(void 0===n)for(n=0,e=0;e<t.length;++e)n+=t[e].length;var i=u(n),l=0;for(e=0;e<t.length;++e){var s=t[e];if(!o.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(i,l),l+=s.length}return i},o.byteLength=f,o.prototype._isBuffer=!0,o.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports=o},aZ40:function(t,n,e){var r=e("Wogr"),o=new r(512),i=new r(256);!function(){for(var t=1,n=0;n<255;n++)o[n]=t,i[t]=n,256&(t<<=1)&&(t^=285);for(n=255;n<512;n++)o[n]=o[n-255]}(),n.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},n.exp=function(t){return o[t]},n.mul=function(t,n){return 0===t||0===n?0:o[i[t]+i[n]]}},"e/Dd":function(t,n){var e,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];n.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},n.getSymbolTotalCodewords=function(t){return r[t]},n.getBCHDigit=function(t){for(var n=0;0!==t;)n++,t>>>=1;return n},n.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');e=t},n.isKanjiModeEnabled=function(){return void 0!==e},n.toSJIS=function(t){return e(t)}},e6BP:function(t,n){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var n=Math.floor(t/8);return 1==(this.buffer[n]>>>7-t%8&1)},put:function(t,n){for(var e=0;e<n;e++)this.putBit(1==(t>>>n-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},t.exports=e},eQOe:function(t,n){function e(t,e,r){switch(t){case n.Patterns.PATTERN000:return(e+r)%2==0;case n.Patterns.PATTERN001:return e%2==0;case n.Patterns.PATTERN010:return r%3==0;case n.Patterns.PATTERN011:return(e+r)%3==0;case n.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case n.Patterns.PATTERN101:return e*r%2+e*r%3==0;case n.Patterns.PATTERN110:return(e*r%2+e*r%3)%2==0;case n.Patterns.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n.getPenaltyN1=function(t){for(var n=t.size,e=0,r=0,o=0,i=null,a=null,u=0;u<n;u++){r=o=0,i=a=null;for(var l=0;l<n;l++){var s=t.get(u,l);s===i?r++:(r>=5&&(e+=r-5+3),i=s,r=1),(s=t.get(l,u))===a?o++:(o>=5&&(e+=o-5+3),a=s,o=1)}r>=5&&(e+=r-5+3),o>=5&&(e+=o-5+3)}return e},n.getPenaltyN2=function(t){for(var n=t.size,e=0,r=0;r<n-1;r++)for(var o=0;o<n-1;o++){var i=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==i&&0!==i||e++}return 3*e},n.getPenaltyN3=function(t){for(var n=t.size,e=0,r=0,o=0,i=0;i<n;i++){r=o=0;for(var a=0;a<n;a++)r=r<<1&2047|t.get(i,a),a>=10&&(1488===r||93===r)&&e++,o=o<<1&2047|t.get(a,i),a>=10&&(1488===o||93===o)&&e++}return 40*e},n.getPenaltyN4=function(t){for(var n=0,e=t.data.length,r=0;r<e;r++)n+=t.data[r];return 10*Math.abs(Math.ceil(100*n/e/5)-10)},n.applyMask=function(t,n){for(var r=n.size,o=0;o<r;o++)for(var i=0;i<r;i++)n.isReserved(i,o)||n.xor(i,o,e(t,i,o))},n.getBestMask=function(t,e){for(var r=Object.keys(n.Patterns).length,o=0,i=1/0,a=0;a<r;a++){e(a),n.applyMask(a,t);var u=n.getPenaltyN1(t)+n.getPenaltyN2(t)+n.getPenaltyN3(t)+n.getPenaltyN4(t);n.applyMask(a,t),u<i&&(i=u,o=a)}return o}},ekOh:function(t,n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2},n.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},n.from=function(t,e){if(n.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(r){return e}}},jSPq:function(t,n,e){var r=e("Wogr"),o=e("JzKC");function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=new r(this.degree);n.fill(0);var e=r.concat([t,n],t.length+this.degree),i=o.mod(e,this.genPoly),a=this.degree-i.length;if(a>0){var u=new r(this.degree);return u.fill(0),i.copy(u,a),u}return i},t.exports=i},"kk9/":function(t,n,e){var r=e("e/Dd").getSymbolSize;n.getPositions=function(t){var n=r(t);return[[0,0],[n-7,0],[0,n-7]]}},lYJp:function(t,n,e){var r=e("e/Dd"),o=r.getBCHDigit(1335);n.getEncodedBits=function(t,n){for(var e=t.bit<<3|n,i=e<<10;r.getBCHDigit(i)-o>=0;)i^=1335<<r.getBCHDigit(i)-o;return 21522^(e<<10|i)}},nZSm:function(t,n,e){var r=e("u/Db"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var e=45*o.indexOf(this.data[n]);e+=o.indexOf(this.data[n+1]),t.put(e,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},t.exports=i},qmMu:function(t,n,e){var r=e("Wogr"),o=e("e/Dd"),i=e("ekOh"),a=e("e6BP"),u=e("V35J"),l=e("1sBl"),s=e("kk9/"),f=e("eQOe"),c=e("NPxG"),h=e("jSPq"),d=e("yKow"),g=e("lYJp"),p=e("u/Db"),v=e("vvrf"),b=e("7uVY");function w(t,n,e){var r,o,i=t.size,a=g.getEncodedBits(n,e);for(r=0;r<15;r++)t.set(r<6?r:r<8?r+1:i-15+r,8,o=1==(a>>r&1),!0),t.set(8,r<8?i-r-1:r<9?15-r-1+1:15-r-1,o,!0);t.set(i-8,8,1,!0)}n.create=function(t,n){if(void 0===t||""===t)throw new Error("No input text");var e,g=i.M;return void 0!==n&&(g=i.from(n.errorCorrectionLevel,i.M),e=d.from(n.version),n.toSJISFunc&&o.setToSJISFunction(n.toSJISFunc)),function(t,n,e){var i;if(b(t))i=v.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var g=n;if(!g){var m=v.rawSplit(t);g=d.getBestVersionForData(m,e)}i=v.fromString(t,g)}var y=d.getBestVersionForData(i,e);if(!y)throw new Error("The amount of data is too big to be stored in a QR Code");if(n){if(n<y)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+y+".\n")}else n=y;var E=function(t,n,e){var i=new a;e.forEach((function(n){i.put(n.mode.bit,4),i.put(n.getLength(),p.getCharCountIndicator(n.mode,t)),n.write(i)}));var u=8*(o.getSymbolTotalCodewords(t)-c.getTotalCodewordsCount(t,n));for(i.getLengthInBits()+4<=u&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);for(var l=(u-i.getLengthInBits())/8,s=0;s<l;s++)i.put(s%2?17:236,8);return function(t,n,e){for(var i=o.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,e),u=c.getBlocksCount(n,e),l=u-i%u,s=Math.floor(i/u),f=Math.floor(a/u),d=f+1,g=s-f,p=new h(g),v=0,b=new Array(u),w=new Array(u),m=0,y=new r(t.buffer),E=0;E<u;E++){var C=E<l?f:d;b[E]=y.slice(v,v+C),w[E]=p.encode(b[E]),v+=C,m=Math.max(m,C)}var B,A,P=new r(i),N=0;for(B=0;B<m;B++)for(A=0;A<u;A++)B<b[A].length&&(P[N++]=b[A][B]);for(B=0;B<g;B++)for(A=0;A<u;A++)P[N++]=w[A][B];return P}(i,t,n)}(n,e,i),C=o.getSymbolSize(n),B=new u(C);!function(t,n){for(var e=t.size,r=s.getPositions(n),o=0;o<r.length;o++)for(var i=r[o][0],a=r[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(var l=-1;l<=7;l++)a+l<=-1||e<=a+l||t.set(i+u,a+l,u>=0&&u<=6&&(0===l||6===l)||l>=0&&l<=6&&(0===u||6===u)||u>=2&&u<=4&&l>=2&&l<=4,!0)}(B,n),function(t){for(var n=t.size,e=8;e<n-8;e++){var r=e%2==0;t.set(e,6,r,!0),t.set(6,e,r,!0)}}(B),function(t,n){for(var e=l.getPositions(n),r=0;r<e.length;r++)for(var o=e[r][0],i=e[r][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)t.set(o+a,i+u,-2===a||2===a||-2===u||2===u||0===a&&0===u,!0)}(B,n),w(B,e,0),n>=7&&function(t,n){for(var e,r,o,i=t.size,a=d.getEncodedBits(n),u=0;u<18;u++)e=Math.floor(u/3),t.set(e,r=u%3+i-8-3,o=1==(a>>u&1),!0),t.set(r,e,o,!0)}(B,n),function(t,n){for(var e=t.size,r=-1,o=e-1,i=7,a=0,u=e-1;u>0;u-=2)for(6===u&&u--;;){for(var l=0;l<2;l++)if(!t.isReserved(o,u-l)){var s=!1;a<n.length&&(s=1==(n[a]>>>i&1)),t.set(o,u-l,s),-1==--i&&(a++,i=7)}if((o+=r)<0||e<=o){o-=r,r=-r;break}}}(B,E);var A=f.getBestMask(B,w.bind(null,B,e));return f.applyMask(A,B),w(B,e,A),{modules:B,version:n,errorCorrectionLevel:e,maskPattern:A,segments:i}}(t,e,g)}},"u/Db":function(t,n,e){var r=e("yKow"),o=e("BCVQ");n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},n.getBestModeForData=function(t){return o.testNumeric(t)?n.NUMERIC:o.testAlphanumeric(t)?n.ALPHANUMERIC:o.testKanji(t)?n.KANJI:n.BYTE},n.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},n.isValid=function(t){return t&&t.bit&&t.ccBits},n.from=function(t,e){if(n.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(r){return e}}},vvrf:function(t,n,e){var r=e("u/Db"),o=e("3X7Y"),i=e("nZSm"),a=e("AZa5"),u=e("Lzq4"),l=e("BCVQ"),s=e("e/Dd"),f=e("ELBg");function c(t){return unescape(encodeURIComponent(t)).length}function h(t,n,e){for(var r,o=[];null!==(r=t.exec(e));)o.push({data:r[0],index:r.index,mode:n,length:r[0].length});return o}function d(t){var n,e,o=h(l.NUMERIC,r.NUMERIC,t),i=h(l.ALPHANUMERIC,r.ALPHANUMERIC,t);return s.isKanjiModeEnabled()?(n=h(l.BYTE,r.BYTE,t),e=h(l.KANJI,r.KANJI,t)):(n=h(l.BYTE_KANJI,r.BYTE,t),e=[]),o.concat(i,n,e).sort((function(t,n){return t.index-n.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,n){switch(n){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return u.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function p(t,n){var e,l=r.getBestModeForData(t);if((e=r.from(n,l))!==r.BYTE&&e.bit<l.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(e)+".\n Suggested mode is: "+r.toString(l));switch(e!==r.KANJI||s.isKanjiModeEnabled()||(e=r.BYTE),e){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new u(t);case r.BYTE:return new a(t)}}n.fromArray=function(t){return t.reduce((function(t,n){return"string"==typeof n?t.push(p(n,null)):n.data&&t.push(p(n.data,n.mode)),t}),[])},n.fromString=function(t,e){for(var o=function(t,n){for(var e={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],l=[],s=0;s<u.length;s++){var f=u[s],c=""+a+s;l.push(c),e[c]={node:f,lastCount:0},o[c]={};for(var h=0;h<i.length;h++){var d=i[h];e[d]&&e[d].node.mode===f.mode?(o[d][c]=g(e[d].lastCount+f.length,f.mode)-g(e[d].lastCount,f.mode),e[d].lastCount+=f.length):(e[d]&&(e[d].lastCount=f.length),o[d][c]=g(f.length,f.mode)+4+r.getCharCountIndicator(f.mode,n))}}i=l}for(h=0;h<i.length;h++)o[i[h]].end=0;return{map:o,table:e}}(function(t){for(var n=[],e=0;e<t.length;e++){var o=t[e];switch(o.mode){case r.NUMERIC:n.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:n.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:n.push([o,{data:o.data,mode:r.BYTE,length:c(o.data)}]);break;case r.BYTE:n.push([{data:o.data,mode:r.BYTE,length:c(o.data)}])}}return n}(d(t,s.isKanjiModeEnabled())),e),i=f.find_path(o.map,"start","end"),a=[],u=1;u<i.length-1;u++)a.push(o.table[i[u]].node);return n.fromArray(a.reduce((function(t,n){var e=t.length-1>=0?t[t.length-1]:null;return e&&e.mode===n.mode?(t[t.length-1].data+=n.data,t):(t.push(n),t)}),[]))},n.rawSplit=function(t){return n.fromArray(d(t,s.isKanjiModeEnabled()))}},yKow:function(t,n,e){var r=e("e/Dd"),o=e("NPxG"),i=e("ekOh"),a=e("u/Db"),u=e("7uVY"),l=r.getBCHDigit(7973);function s(t,n){return a.getCharCountIndicator(t,n)+4}function f(t,n){var e=0;return t.forEach((function(t){var r=s(t.mode,n);e+=r+t.getBitsLength()})),e}n.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40},n.from=function(t,e){return n.isValid(t)?parseInt(t,10):e},n.getCapacity=function(t,e,i){if(!n.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);var u=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(i===a.MIXED)return u;var l=u-s(i,t);switch(i){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},n.getBestVersionForData=function(t,e){var r,o=i.from(e,i.M);if(u(t)){if(t.length>1)return function(t,e){for(var r=1;r<=40;r++)if(f(t,r)<=n.getCapacity(r,e,a.MIXED))return r}(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,e,r){for(var o=1;o<=40;o++)if(e<=n.getCapacity(o,r,t))return o}(r.mode,r.getLength(),o)},n.getEncodedBits=function(t){if(!n.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;r.getBCHDigit(e)-l>=0;)e^=7973<<r.getBCHDigit(e)-l;return t<<12|e}}}]);