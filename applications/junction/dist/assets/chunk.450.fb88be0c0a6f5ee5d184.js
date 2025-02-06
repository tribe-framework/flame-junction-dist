/*! For license information please see chunk.450.fb88be0c0a6f5ee5d184.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[450],{1404:e=>{window,e.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t,n){window,e.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var i=n(2),o=setTimeout
function r(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function a(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,s._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var i
try{i=n(e._value)}catch(e){return void c(t.promise,e)}l(t.promise,i)}else(1===e._state?l:c)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof s)return e._state=3,e._value=t,void d(e)
if("function"==typeof n)return void h((i=n,o=t,function(){i.apply(o,arguments)}),e)}e._state=1,e._value=t,d(e)}catch(t){c(e,t)}var i,o}function c(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&s._immediateFn((function(){e._handled||s._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t])
e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1
try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return
n=!0,c(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var n=new this.constructor(r)
return a(this,new u(e,t,n)),n},s.prototype.finally=i.a,s.all=function(e){return new s((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array")
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then
if("function"==typeof a)return void a.call(s,(function(t){r(e,t)}),n)}i[e]=s,0==--o&&t(i)}catch(e){n(e)}}for(var s=0;s<i.length;s++)r(s,i[s])}))},s.resolve=function(e){return e&&"object"==typeof e&&e.constructor===s?e:new s((function(t){t(e)}))},s.reject=function(e){return new s((function(t,n){n(e)}))},s.race=function(e){return new s((function(t,n){for(var i=0,o=e.length;i<o;i++)e[i].then(t,n)}))},s._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},s._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=s}).call(this,n(5).setImmediate)},function(e,t,n){"use strict"
t.a=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict"
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4)
var o,r,s,a,l,c,d,u=n(8),h=(r=function(e){return new Promise((function(t,n){e=a(e),(e=l(e)).beforeSend&&e.beforeSend()
var i=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")
i.open(e.method,e.url),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t]
i.setRequestHeader(t,n)}))
var o=e.ratio
i.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),i=Math.ceil(n*o/100)
e.progress(Math.min(i,100))}),!1),i.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),i=Math.ceil(n*(100-o)/100)+o
e.progress(Math.min(i,100))}),!1),i.onreadystatechange=function(){if(4===i.readyState){var e=i.response
try{e=JSON.parse(e)}catch(e){}var o=u.parseHeaders(i.getAllResponseHeaders()),r={body:e,code:i.status,headers:o}
d(i.status)?t(r):n(r)}},i.send(e.data)}))},s=function(e){return e.method="POST",r(e)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string")
if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null")
if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==i(e.headers))throw new Error("`headers` must be an object or null")
if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library")
if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null")
if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number")
if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval")
if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types")
if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false")
if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string")
return e.fieldName=e.fieldName||"files",e},l=function(e){switch(e.method){case"GET":var t=c(e.data,o.URLENCODED)
delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t
break
case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(u.isFormData(e.data)||u.isFormElement(e.data))&&(n=o.FORM),e.data=c(e.data,n),n!==h.contentType.FORM&&(e.headers["content-type"]=n)}return e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return u.urlEncode(e)
case o.JSON:return u.jsonEncode(e)
case o.FORM:return u.formEncode(e)
default:return e}},d=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:r,get:function(e){return e.method="GET",r(e)},post:s,transport:function(e){return e=a(e),u.selectFiles(e).then((function(t){for(var n=new FormData,i=0;i<t.length;i++)n.append(e.fieldName,t[i],t[i].name)
u.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var i=e.data[t]
n.append(t,i)}))
var o=e.beforeSend
return e.beforeSend=function(){return o(t)},e.data=n,s(e)}))},selectFiles:function(e){return delete(e=a(e)).beforeSend,u.selectFiles(e)}})
e.exports=h},function(e,t,n){"use strict"
n.r(t)
var i=n(1)
window.Promise=window.Promise||i.a},function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply
function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e){"use strict"
if(!e.setImmediate){var n,i,o,r,s,a=1,l={},c=!1,d=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e)
u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage
return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(r="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&p(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(r+t,"*")}):e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},n=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,n=function(e){var t=d.createElement("script")
t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):n=function(e){setTimeout(p,0,e)},u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1]
var o={callback:e,args:t}
return l[a]=o,n(a),a++},u.clearImmediate=h}function h(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e)
else{var t=l[e]
if(t){c=!0
try{!function(e){var t=e.callback,n=e.args
switch(n.length){case 0:t()
break
case 1:t(n[0])
break
case 2:t(n[0],n[1])
break
case 3:t(n[0],n[1],n[2])
break
default:t.apply(void 0,n)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,i,o=e.exports={}
function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0)
if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0)
try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}()
var l,c=[],d=!1,u=-1
function h(){d&&l&&(d=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!d){var e=a(h)
d=!0
for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run()
u=-1,t=c.length}l=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e)
if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e)
try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
c.push(new f(e,t)),1!==c.length||d||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var i=n(9)
e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t
return(t=[{key:"urlEncode",value:function(e){return i(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e
if(this.isFormElement(e))return new FormData(e)
if(this.isObject(e)){var t=new FormData
return Object.keys(e).forEach((function(n){var i=e[n]
t.append(n,i)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Promise((function(t,n){var i=document.createElement("INPUT")
i.type="file",e.multiple&&i.setAttribute("multiple","multiple"),e.accept&&i.setAttribute("accept",e.accept),i.style.display="none",document.body.appendChild(i),i.addEventListener("change",(function(e){var n=e.target.files
t(n),document.body.removeChild(i)}),!1),i.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={}
return t.forEach((function(e){var t=e.split(": "),i=t.shift(),o=t.join(": ")
i&&(n[i]=o)})),n}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e,t),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},i=function(e,t,o,r){return t=t||null,o=o||"&",r=r||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n])
return t}(Object.keys(e).map((function(s){var a,l,c=s
if(r&&(c=r+"["+c+"]"),"object"==typeof e[s]&&null!==e[s])a=i(e[s],null,o,c)
else{t&&(l=c,c=!isNaN(parseFloat(l))&&isFinite(l)?t+Number(c):c)
var d=e[s]
d=(d=0===(d=!1===(d=!0===d?"1":d)?"0":d)?"0":d)||"",a=n(c)+"="+n(d)}return a}))).join(o).replace(/[!'()*]/g,""):""}
e.exports=i}])},function(e,t,n){var i=n(2)
"string"==typeof i&&(i=[[e.i,i,""]]),n(4)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".cdx-attaches {\n  --color-line: #EFF0F1;\n  --color-bg: #fff;\n  --color-bg-secondary: #F8F8F8;\n  --color-bg-secondary--hover: #f2f2f2;\n  --color-text-secondary: #707684;\n}\n\n  .cdx-attaches--with-file {\n    display: flex;\n    align-items: center;\n    padding: 10px 12px;\n    border: 1px solid var(--color-line);\n    border-radius: 7px;\n    background: var(--color-bg);\n  }\n\n  .cdx-attaches--with-file .cdx-attaches__file-info {\n      display: grid;\n      grid-gap: 4px;\n      max-width: calc(100% - 80px);\n      margin: auto 0;\n      flex-grow: 2;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button {\n      display: flex;\n      align-items: center;\n      background: var(--color-bg-secondary);\n      padding: 6px;\n      border-radius: 6px;\n      margin: auto 0 auto auto;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button:hover {\n        background: var(--color-bg-secondary--hover);\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button svg {\n        width: 20px;\n        height: 20px;\n        fill: none;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon {\n      position: relative;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n        background-color: #333;\n\n        width: 27px;\n        height: 30px;\n        margin-right: 12px;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n  @supports(-webkit-mask-box-image: url('')){\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n          border-radius: 0;\n          -webkit-mask-box-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10.3872C0 1.83334 1.83334 0 10.3872 0H13.6128C22.1667 0 24 1.83334 24 10.3872V13.6128C24 22.1667 22.1667 24 13.6128 24H10.3872C1.83334 24 0 22.1667 0 13.6128V10.3872Z' fill='black'/%3E%3C/svg%3E%0A\") 48% 41% 37.9% 53.3%\n      };\n        }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-label {\n        position: absolute;\n        left: 3px;\n        top: 11px;\n        background: inherit;\n        text-transform: uppercase;\n        line-height: 1em;\n        color: #fff;\n        padding: 1px 2px;\n        border-radius: 3px;\n        font-size: 10px;\n        font-weight: bold;\n        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.22); */\n        font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n        letter-spacing: 0.02em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon svg {\n        width: 20px;\n        height: 20px;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon path {\n        stroke: #fff;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__size {\n      color: var(--color-text-secondary);\n      font-size: 12px;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__size::after {\n        content: attr(data-size);\n        margin-left: 0.2em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__title {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      outline: none;\n      max-width: 90%;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__title:empty::before {\n      content: attr(data-placeholder);\n      color: #7b7e89;\n    }\n\n  .cdx-attaches--loading .cdx-attaches__title,\n    .cdx-attaches--loading .cdx-attaches__file-icon,\n    .cdx-attaches--loading .cdx-attaches__size,\n    .cdx-attaches--loading .cdx-attaches__download-button,\n    .cdx-attaches--loading .cdx-attaches__button {\n      opacity: 0;\n      font-size: 0;\n    }\n\n  .cdx-attaches__button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #000;\n    border-radius: 7px;\n    font-weight: 500;\n  }\n\n  .cdx-attaches__button svg {\n      margin-top: 0;\n    }\n",""])},function(e,t){e.exports=function(e){var t=[]
return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i=e[1]||"",o=e[3]
if(!o)return i
if(t&&"function"==typeof btoa){var r=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}))
return[i].concat(s).concat([r]).join("\n")}return[i].join("\n")}(t,e)
return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]])
for(var i={},o=0;o<this.length;o++){var r=this[o][0]
"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o]
"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(e){return document.querySelector(e)},l=function(){var e={}
return function(t){if("function"==typeof t)return t()
if(void 0===e[t]){var n=a.call(this,t)
if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,d=0,u=[],h=n(5)
function p(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id]
if(o){o.refs++
for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s])
for(;s<i.parts.length;s++)o.parts.push(y(i.parts[s],t))}else{var a=[]
for(s=0;s<i.parts.length;s++)a.push(y(i.parts[s],t))
r[i.id]={id:i.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]}
i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function m(e,t){var n=l(e.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var i=u[u.length-1]
if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t)
else if("bottom"===e.insertAt)n.appendChild(t)
else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var o=l(e.insertInto+" "+e.insertAt.before)
n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)
var t=u.indexOf(e)
t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,i,o,r
if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){}
e.css=r}if(t.singleton){var s=d++
n=c||(c=b(t)),i=_.bind(null,n,s,!1),o=_.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),i=C.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),i=x.bind(null,n),o=function(){g(n)})
return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom")
var n=f(e,t)
return p(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}for(e&&p(f(e,t),t),o=0;o<i.length;o++){var a
if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]()
delete r[a.id]}}}}
var w,k=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")})
function _(e,t,n,i){var o=n?"":i.css
if(e.styleSheet)e.styleSheet.cssText=k(t,o)
else{var r=document.createTextNode(o),s=e.childNodes
s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function x(e,t){var n=t.css,i=t.media
if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}function C(e,t,n){var i=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(i=h(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */")
var s=new Blob([i],{type:"text/css"}),a=e.href
e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location
if(!t)throw new Error("fixUrls requires window.location")
if(!e||"string"!=typeof e)return e
var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/")
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}))
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return u})),n(1)
var i=n(0),o=n.n(i)
var r=function(){function e(t){var n=t.config,i=t.onUpload,o=t.onError
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.onUpload=i,this.onError=o}var t
return(t=[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview;(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?o.a.selectFiles({accept:this.config.types}).then((function(e){n()
var i,o=t.config.uploader.uploadByFile(e[0])
return(i=o)&&"function"==typeof i.then||console.warn("Custom uploader method uploadByFile should return a Promise"),o})):o.a.transport({url:this.config.endpoint,accept:this.config.types,beforeSend:function(){return n()},fieldName:this.config.field,headers:this.config.additionalRequestHeaders||{}}).then((function(e){return e.body}))).then((function(e){t.onUpload(e)})).catch((function(e){var n=e.body,i=n&&n.message?n.message:t.config.errorMessage
t.onError(i)}))}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}()
function s(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n]
return i}function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e)
for(var r in Array.isArray(n)?(t=o.classList).add.apply(t,function(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n)):n&&o.classList.add(n),i)o[r]=i[r]
return o}function l(e){return 0===Object.keys(e).length}const c='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>'
function d(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t){var n=this,i=t.data,o=t.config,s=t.api,a=t.readOnly
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=s,this.readOnly=a,this.nodes={wrapper:null,button:null,title:null},this._data={file:{},title:""},this.config={endpoint:o.endpoint||"",field:o.field||"file",types:o.types||"*",buttonText:o.buttonText||"Select file to upload",errorMessage:o.errorMessage||"File upload failed",uploader:o.uploader||void 0,additionalRequestHeaders:o.additionalRequestHeaders||{}},void 0===i||l(i)||(this.data=i),this.uploader=new r({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}}),this.enableFileUpload=this.enableFileUpload.bind(this)}var t,n,i
return t=e,i=[{key:"toolbox",get:function(){return{icon:c,title:"Attachment"}}},{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,apiButton:this.api.styles.button,loader:this.api.styles.loader,wrapper:"cdx-attaches",wrapperWithFile:"cdx-attaches--with-file",wrapperLoading:"cdx-attaches--loading",button:"cdx-attaches__button",title:"cdx-attaches__title",size:"cdx-attaches__size",downloadButton:"cdx-attaches__download-button",fileInfo:"cdx-attaches__file-info",fileIcon:"cdx-attaches__file-icon",fileIconBackground:"cdx-attaches__file-icon-background",fileIconLabel:"cdx-attaches__file-icon-label"}}},{key:"EXTENSIONS",get:function(){return{doc:"#1483E9",docx:"#1483E9",odt:"#1483E9",pdf:"#DB2F2F",rtf:"#744FDC",tex:"#5a5a5b",txt:"#5a5a5b",pptx:"#E35200",ppt:"#E35200",mp3:"#eab456",mp4:"#f676a6",xls:"#11AE3D",html:"#2988f0",htm:"#2988f0",png:"#AA2284",jpg:"#D13359",jpeg:"#D13359",gif:"#f6af76",zip:"#4f566f",rar:"#4f566f",exe:"#e26f6f",svg:"#bf5252",key:"#00B2FF",sketch:"#FFC700",ai:"#FB601D",psd:"#388ae5",dmg:"#e26f6f",json:"#2988f0",csv:"#11AE3D"}}},{key:"validate",value:function(e){return!l(e.file)}},{key:"save",value:function(e){if(this.pluginHasData()){var t=e.querySelector(".".concat(this.CSS.title))
t&&Object.assign(this.data,{title:t.innerHTML})}return this.data}},{key:"render",value:function(){var e=a("div",this.CSS.baseClass)
return this.nodes.wrapper=a("div",this.CSS.wrapper),this.pluginHasData()?this.showFileData():this.prepareUploadButton(),e.appendChild(this.nodes.wrapper),e}},{key:"prepareUploadButton",value:function(){this.nodes.button=a("div",[this.CSS.apiButton,this.CSS.button]),this.nodes.button.innerHTML="".concat(c," ").concat(this.config.buttonText),this.readOnly||this.nodes.button.addEventListener("click",this.enableFileUpload),this.nodes.wrapper.appendChild(this.nodes.button)}},{key:"appendCallback",value:function(){this.nodes.button.click()}},{key:"pluginHasData",value:function(){return""!==this.data.title||Object.values(this.data.file).some((function(e){return void 0!==e}))}},{key:"enableFileUpload",value:function(){var e=this
this.uploader.uploadSelectedFile({onPreview:function(){e.nodes.wrapper.classList.add(e.CSS.wrapperLoading,e.CSS.loader)}})}},{key:"onUpload",value:function(e){var t,n,i,o=e
try{o.success&&void 0!==o.file&&!l(o.file)?(this.data={file:o.file,title:o.file.title||""},this.nodes.button.remove(),this.showFileData(),t=this.nodes.title,n=document.createRange(),i=window.getSelection(),n.selectNodeContents(t),n.collapse(!1),i.removeAllRanges(),i.addRange(n),this.removeLoader()):this.uploadingFailed(this.config.errorMessage)}catch(e){console.error("Attaches tool error:",e),this.uploadingFailed(this.config.errorMessage)}this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).dispatchChange()}},{key:"appendFileIcon",value:function(e){var t,n=e.extension||(void 0===(t=e.name)?"":t.split(".").pop()),i=this.EXTENSIONS[n],o=a("div",this.CSS.fileIcon),r=a("div",this.CSS.fileIconBackground)
if(i&&(r.style.backgroundColor=i),o.appendChild(r),n){var s=n
n.length>4&&(s=n.substring(0,4)+"…")
var l=a("div",this.CSS.fileIconLabel,{textContent:s,title:n})
i&&(l.style.backgroundColor=i),o.appendChild(l)}else r.innerHTML=c
this.nodes.wrapper.appendChild(o)}},{key:"removeLoader",value:function(){var e=this
setTimeout((function(){return e.nodes.wrapper.classList.remove(e.CSS.wrapperLoading,e.CSS.loader)}),500)}},{key:"showFileData",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile)
var e=this.data,t=e.file,n=e.title
this.appendFileIcon(t)
var i=a("div",this.CSS.fileInfo)
if(this.nodes.title=a("div",this.CSS.title,{contentEditable:!1===this.readOnly}),this.nodes.title.dataset.placeholder=this.api.i18n.t("File title"),this.nodes.title.textContent=n||"",i.appendChild(this.nodes.title),t.size){var o,r,s=a("div",this.CSS.size)
Math.log10(+t.size)>=6?(o="MiB",r=t.size/Math.pow(2,20)):(o="KiB",r=t.size/Math.pow(2,10)),s.textContent=r.toFixed(1),s.setAttribute("data-size",o),i.appendChild(s)}if(this.nodes.wrapper.appendChild(i),void 0!==t.url){var l=a("a",this.CSS.downloadButton,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',href:t.url,target:"_blank",rel:"nofollow noindex noreferrer"})
this.nodes.wrapper.appendChild(l)}}},{key:"uploadingFailed",value:function(e){this.api.notifier.show({message:e,style:"error"}),this.removeLoader()}},{key:"data",get:function(){return this._data},set:function(e){var t=e.file,n=e.title
this._data={file:t,title:n}}}])&&d(t.prototype,n),i&&d(t,i),e}()}]).default},8149:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
class e{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:t,config:n,api:i,readOnly:o}){this.api=i,this.readOnly=o,this.placeholder=this.api.i18n.t(n.placeholder||e.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.nodes={holder:null,textarea:null},this.data={code:t.code??""},this.nodes.holder=this.drawView()}render(){return this.nodes.holder}save(e){return{code:e.querySelector("textarea").value}}onPaste(e){const t=e.detail
if("data"in t){const e=t.data
this.data={code:e||""}}}get data(){return this._data}set data(e){this._data=e,this.nodes.textarea&&(this.nodes.textarea.value=e.code)}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>',title:"Code"}}static get DEFAULT_PLACEHOLDER(){return"Enter a code"}static get pasteConfig(){return{tags:["pre"]}}static get sanitize(){return{code:!0}}tabHandler(e){e.stopPropagation(),e.preventDefault()
const t=e.target,n=e.shiftKey,i=t.selectionStart,o=t.value
let r
if(n){const e=function(e,t){let n=""
for(;"\n"!==n&&t>0;)t-=1,n=e.substr(t,1)
return"\n"===n&&(t+=1),t}(o,i)
if("  "!==o.substr(e,2))return
t.value=o.substring(0,e)+o.substring(e+2),r=i-2}else r=i+2,t.value=o.substring(0,i)+"  "+o.substring(i)
t.setSelectionRange(r,r)}drawView(){const e=document.createElement("div"),t=document.createElement("textarea")
return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.value=this.data.code,t.placeholder=this.placeholder,this.readOnly&&(t.disabled=!0),e.appendChild(t),t.addEventListener("keydown",(e=>{"Tab"===e.code&&this.tabHandler(e)})),this.nodes.textarea=t,e}}return e}()},6399:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
return class{static get isReadOnlySupported(){return!0}static get contentless(){return!0}constructor({data:e,config:t,api:n}){this.api=n,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._element=this.drawView(),this.data=e}drawView(){let e=document.createElement("div")
return e.classList.add(this._CSS.wrapper,this._CSS.block),e}render(){return this._element}save(e){return{}}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',title:"Delimiter"}}static get pasteConfig(){return{tags:["HR"]}}onPaste(e){this.data={}}}}()},3004:e=>{self,e.exports=(()=>{var e={680:e=>{window,e.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict"
function i(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.r(t)
var r=function(){function e(t){var n=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.commands={},this.keys={},this.name=t.name,this.parseShortcutName(t.name),this.element=t.on,this.callback=t.callback,this.executeShortcut=function(e){n.execute(e)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return o(e,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),o(e,[{key:"parseShortcutName",value:function(t){t=t.split("+")
for(var n=0;n<t.length;n++){t[n]=t[n].toUpperCase()
var i=!1
for(var o in e.supportedCommands)if(e.supportedCommands[o].includes(t[n])){i=this.commands[o]=!0
break}i||(this.keys[t[n]]=!0)}for(var r in e.supportedCommands)this.commands[r]||(this.commands[r]=!1)}},{key:"execute",value:function(t){var n,i={CMD:t.ctrlKey||t.metaKey,SHIFT:t.shiftKey,ALT:t.altKey},o=!0
for(n in this.commands)this.commands[n]!==i[n]&&(o=!1)
var r,s=!0
for(r in this.keys)s=s&&t.keyCode===e.keyCodes[r]
o&&s&&this.callback(t)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),e}()
t.default=r}]).default},700:(e,t)=>{"use strict"
function n(){var e="/home/runner/work/footnotes-tune/footnotes-tune/src/dom.ts",t=new Function("return this")(),i="__coverage__",o=t[i]||(t[i]={})
o[e]&&"46f8d5057a34f7a33376de9026191fd396838084"===o[e].hash||(o[e]={path:"/home/runner/work/footnotes-tune/footnotes-tune/src/dom.ts",statementMap:{0:{start:{line:2,column:0},end:{line:2,column:62}},1:{start:{line:3,column:0},end:{line:3,column:22}},2:{start:{line:14,column:4},end:{line:14,column:51}},3:{start:{line:14,column:33},end:{line:14,column:49}},4:{start:{line:15,column:4},end:{line:15,column:51}},5:{start:{line:15,column:33},end:{line:15,column:49}},6:{start:{line:16,column:13},end:{line:16,column:44}},7:{start:{line:17,column:4},end:{line:22,column:5}},8:{start:{line:18,column:8},end:{line:18,column:54}},9:{start:{line:20,column:9},end:{line:22,column:5}},10:{start:{line:21,column:8},end:{line:21,column:37}},11:{start:{line:23,column:4},end:{line:28,column:5}},12:{start:{line:24,column:8},end:{line:26,column:9}},13:{start:{line:25,column:12},end:{line:25,column:21}},14:{start:{line:27,column:8},end:{line:27,column:44}},15:{start:{line:29,column:4},end:{line:29,column:14}},16:{start:{line:31,column:0},end:{line:31,column:20}}},fnMap:{0:{name:"make",decl:{start:{line:12,column:9},end:{line:12,column:13}},loc:{start:{line:12,column:47},end:{line:30,column:1}},line:12}},branchMap:{0:{loc:{start:{line:14,column:4},end:{line:14,column:51}},type:"if",locations:[{start:{line:14,column:4},end:{line:14,column:51}},{start:{line:14,column:4},end:{line:14,column:51}}],line:14},1:{loc:{start:{line:15,column:4},end:{line:15,column:51}},type:"if",locations:[{start:{line:15,column:4},end:{line:15,column:51}},{start:{line:15,column:4},end:{line:15,column:51}}],line:15},2:{loc:{start:{line:17,column:4},end:{line:22,column:5}},type:"if",locations:[{start:{line:17,column:4},end:{line:22,column:5}},{start:{line:17,column:4},end:{line:22,column:5}}],line:17},3:{loc:{start:{line:20,column:9},end:{line:22,column:5}},type:"if",locations:[{start:{line:20,column:9},end:{line:22,column:5}},{start:{line:20,column:9},end:{line:22,column:5}}],line:20},4:{loc:{start:{line:24,column:8},end:{line:26,column:9}},type:"if",locations:[{start:{line:24,column:8},end:{line:26,column:9}},{start:{line:24,column:8},end:{line:26,column:9}}],line:24}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"46f8d5057a34f7a33376de9026191fd396838084"})
var r=o[e]
return n=function(){return r},r}n(),n().s[0]++,Object.defineProperty(t,"__esModule",{value:!0}),n().s[1]++,t.make=void 0,n().s[16]++,t.make=function(e,t,i){var o
n().f[0]++,n().s[2]++,void 0===t?(n().b[0][0]++,n().s[3]++,t=""):n().b[0][1]++,n().s[4]++,void 0===i?(n().b[1][0]++,n().s[5]++,i={}):n().b[1][1]++
var r=(n().s[6]++,document.createElement(e))
for(var s in n().s[7]++,Array.isArray(t)?(n().b[2][0]++,n().s[8]++,(o=r.classList).add.apply(o,t)):(n().b[2][1]++,n().s[9]++,t?(n().b[3][0]++,n().s[10]++,r.classList.add(t)):n().b[3][1]++),n().s[11]++,i)n().s[12]++,Object.prototype.hasOwnProperty.call(i,s)?(n().b[4][1]++,n().s[14]++,r[s]=i[s]):(n().b[4][0]++,n().s[13]++)
return n().s[15]++,r}},343:function(e,t,n){"use strict"
function i(){var e="/home/runner/work/footnotes-tune/footnotes-tune/src/index.ts",t=new Function("return this")(),n="__coverage__",o=t[n]||(t[n]={})
o[e]&&"b9f80f6f4e85126a66e27af183902862a07d7037"===o[e].hash||(o[e]={path:"/home/runner/work/footnotes-tune/footnotes-tune/src/index.ts",statementMap:{0:{start:{line:2,column:22},end:{line:4,column:1}},1:{start:{line:3,column:4},end:{line:3,column:62}},2:{start:{line:5,column:0},end:{line:5,column:62}},3:{start:{line:6,column:19},end:{line:6,column:59}},4:{start:{line:7,column:12},end:{line:7,column:28}},5:{start:{line:8,column:16},end:{line:8,column:53}},6:{start:{line:9,column:13},end:{line:9,column:47}},7:{start:{line:10,column:25},end:{line:10,column:78}},8:{start:{line:11,column:18},end:{line:11,column:66}},9:{start:{line:15,column:35},end:{line:202,column:3}},10:{start:{line:24,column:19},end:{line:24,column:26}},11:{start:{line:24,column:34},end:{line:24,column:40}},12:{start:{line:24,column:47},end:{line:24,column:56}},13:{start:{line:24,column:67},end:{line:24,column:90}},14:{start:{line:28,column:8},end:{line:28,column:80}},15:{start:{line:32,column:8},end:{line:32,column:80}},16:{start:{line:36,column:8},end:{line:36,column:23}},17:{start:{line:37,column:8},end:{line:37,column:25}},18:{start:{line:38,column:8},end:{line:38,column:23}},19:{start:{line:39,column:8},end:{line:39,column:29}},20:{start:{line:40,column:8},end:{line:40,column:77}},21:{start:{line:45,column:4},end:{line:67,column:6}},22:{start:{line:46,column:20},end:{line:46,column:24}},23:{start:{line:47,column:24},end:{line:47,column:45}},24:{start:{line:48,column:20},end:{line:48,column:77}},25:{start:{line:49,column:26},end:{line:49,column:79}},26:{start:{line:50,column:19},end:{line:52,column:10}},27:{start:{line:53,column:20},end:{line:55,column:10}},28:{start:{line:56,column:8},end:{line:56,column:38}},29:{start:{line:57,column:8},end:{line:57,column:39}},30:{start:{line:58,column:8},end:{line:65,column:9}},31:{start:{line:59,column:12},end:{line:59,column:84}},32:{start:{line:62,column:12},end:{line:64,column:15}},33:{start:{line:63,column:16},end:{line:63,column:37}},34:{start:{line:66,column:8},end:{line:66,column:27}},35:{start:{line:71,column:4},end:{line:74,column:6}},36:{start:{line:72,column:25},end:{line:72,column:121}},37:{start:{line:73,column:8},end:{line:73,column:147}},38:{start:{line:73,column:60},end:{line:73,column:98}},39:{start:{line:73,column:124},end:{line:73,column:143}},40:{start:{line:80,column:4},end:{line:104,column:6}},41:{start:{line:81,column:20},end:{line:81,column:24}},42:{start:{line:82,column:8},end:{line:82,column:63}},43:{start:{line:83,column:8},end:{line:83,column:37}},44:{start:{line:84,column:8},end:{line:87,column:11}},45:{start:{line:88,column:8},end:{line:102,column:11}},46:{start:{line:92,column:32},end:{line:92,column:53}},47:{start:{line:93,column:16},end:{line:95,column:17}},48:{start:{line:94,column:20},end:{line:94,column:27}},49:{start:{line:96,column:28},end:{line:96,column:51}},50:{start:{line:97,column:16},end:{line:99,column:17}},51:{start:{line:98,column:20},end:{line:98,column:27}},52:{start:{line:100,column:16},end:{line:100,column:37}},53:{start:{line:103,column:8},end:{line:103,column:28}},54:{start:{line:108,column:4},end:{line:111,column:6}},55:{start:{line:110,column:8},end:{line:110,column:78}},56:{start:{line:117,column:4},end:{line:123,column:6}},57:{start:{line:118,column:8},end:{line:118,column:30}},58:{start:{line:119,column:19},end:{line:119,column:58}},59:{start:{line:120,column:8},end:{line:120,column:30}},60:{start:{line:121,column:8},end:{line:121,column:32}},61:{start:{line:122,column:8},end:{line:122,column:52}},62:{start:{line:129,column:4},end:{line:137,column:6}},63:{start:{line:130,column:28},end:{line:132,column:10}},64:{start:{line:131,column:12},end:{line:131,column:96}},65:{start:{line:133,column:8},end:{line:135,column:9}},66:{start:{line:134,column:12},end:{line:134,column:55}},67:{start:{line:136,column:8},end:{line:136,column:62}},68:{start:{line:143,column:4},end:{line:162,column:6}},69:{start:{line:144,column:34},end:{line:155,column:10}},70:{start:{line:145,column:27},end:{line:145,column:114}},71:{start:{line:145,column:80},end:{line:145,column:111}},72:{start:{line:146,column:29},end:{line:153,column:14}},73:{start:{line:147,column:16},end:{line:149,column:17}},74:{start:{line:148,column:20},end:{line:148,column:33}},75:{start:{line:150,column:28},end:{line:150,column:62}},76:{start:{line:151,column:16},end:{line:151,column:57}},77:{start:{line:152,column:16},end:{line:152,column:28}},78:{start:{line:154,column:12},end:{line:154,column:42}},79:{start:{line:159,column:8},end:{line:161,column:9}},80:{start:{line:160,column:12},end:{line:160,column:33}},81:{start:{line:166,column:4},end:{line:168,column:6}},82:{start:{line:167,column:8},end:{line:167,column:87}},83:{start:{line:167,column:57},end:{line:167,column:83}},84:{start:{line:174,column:4},end:{line:183,column:6}},85:{start:{line:175,column:20},end:{line:175,column:24}},86:{start:{line:176,column:19},end:{line:176,column:98}},87:{start:{line:177,column:8},end:{line:182,column:11}},88:{start:{line:178,column:23},end:{line:178,column:79}},89:{start:{line:179,column:12},end:{line:179,column:58}},90:{start:{line:180,column:12},end:{line:180,column:49}},91:{start:{line:181,column:12},end:{line:181,column:43}},92:{start:{line:187,column:4},end:{line:187,column:32}},93:{start:{line:191,column:4},end:{line:196,column:6}},94:{start:{line:200,column:4},end:{line:200,column:29}},95:{start:{line:201,column:4},end:{line:201,column:25}},96:{start:{line:203,column:0},end:{line:203,column:32}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:56},end:{line:2,column:57}},loc:{start:{line:2,column:71},end:{line:4,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:15,column:35},end:{line:15,column:36}},loc:{start:{line:15,column:47},end:{line:202,column:1}},line:15},2:{name:"FootnotesTune",decl:{start:{line:23,column:13},end:{line:23,column:26}},loc:{start:{line:23,column:31},end:{line:41,column:5}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:45,column:37},end:{line:45,column:38}},loc:{start:{line:45,column:49},end:{line:67,column:5}},line:45},4:{name:"(anonymous_4)",decl:{start:{line:62,column:50},end:{line:62,column:51}},loc:{start:{line:62,column:62},end:{line:64,column:13}},line:62},5:{name:"(anonymous_5)",decl:{start:{line:71,column:35},end:{line:71,column:36}},loc:{start:{line:71,column:47},end:{line:74,column:5}},line:71},6:{name:"(anonymous_6)",decl:{start:{line:73,column:42},end:{line:73,column:43}},loc:{start:{line:73,column:58},end:{line:73,column:100}},line:73},7:{name:"(anonymous_7)",decl:{start:{line:73,column:106},end:{line:73,column:107}},loc:{start:{line:73,column:122},end:{line:73,column:145}},line:73},8:{name:"(anonymous_8)",decl:{start:{line:80,column:35},end:{line:80,column:36}},loc:{start:{line:80,column:61},end:{line:104,column:5}},line:80},9:{name:"(anonymous_9)",decl:{start:{line:91,column:22},end:{line:91,column:23}},loc:{start:{line:91,column:34},end:{line:101,column:13}},line:91},10:{name:"(anonymous_10)",decl:{start:{line:108,column:38},end:{line:108,column:39}},loc:{start:{line:108,column:50},end:{line:111,column:5}},line:108},11:{name:"(anonymous_11)",decl:{start:{line:117,column:38},end:{line:117,column:39}},loc:{start:{line:117,column:55},end:{line:123,column:5}},line:117},12:{name:"(anonymous_12)",decl:{start:{line:129,column:41},end:{line:129,column:42}},loc:{start:{line:129,column:60},end:{line:137,column:5}},line:129},13:{name:"(anonymous_13)",decl:{start:{line:130,column:58},end:{line:130,column:59}},loc:{start:{line:130,column:74},end:{line:132,column:9}},line:130},14:{name:"(anonymous_14)",decl:{start:{line:143,column:48},end:{line:143,column:49}},loc:{start:{line:143,column:73},end:{line:162,column:5}},line:143},15:{name:"(anonymous_15)",decl:{start:{line:144,column:53},end:{line:144,column:54}},loc:{start:{line:144,column:71},end:{line:155,column:9}},line:144},16:{name:"(anonymous_16)",decl:{start:{line:145,column:62},end:{line:145,column:63}},loc:{start:{line:145,column:78},end:{line:145,column:113}},line:145},17:{name:"(anonymous_17)",decl:{start:{line:146,column:66},end:{line:146,column:67}},loc:{start:{line:146,column:82},end:{line:153,column:13}},line:146},18:{name:"(anonymous_18)",decl:{start:{line:166,column:44},end:{line:166,column:45}},loc:{start:{line:166,column:56},end:{line:168,column:5}},line:166},19:{name:"(anonymous_19)",decl:{start:{line:167,column:36},end:{line:167,column:37}},loc:{start:{line:167,column:55},end:{line:167,column:85}},line:167},20:{name:"(anonymous_20)",decl:{start:{line:174,column:38},end:{line:174,column:39}},loc:{start:{line:174,column:57},end:{line:183,column:5}},line:174},21:{name:"(anonymous_21)",decl:{start:{line:177,column:21},end:{line:177,column:22}},loc:{start:{line:177,column:39},end:{line:182,column:9}},line:177}},branchMap:{0:{loc:{start:{line:2,column:22},end:{line:4,column:1}},type:"binary-expr",locations:[{start:{line:2,column:23},end:{line:2,column:27}},{start:{line:2,column:31},end:{line:2,column:51}},{start:{line:2,column:56},end:{line:4,column:1}}],line:2},1:{loc:{start:{line:3,column:11},end:{line:3,column:61}},type:"cond-expr",locations:[{start:{line:3,column:37},end:{line:3,column:40}},{start:{line:3,column:43},end:{line:3,column:61}}],line:3},2:{loc:{start:{line:3,column:12},end:{line:3,column:33}},type:"binary-expr",locations:[{start:{line:3,column:12},end:{line:3,column:15}},{start:{line:3,column:19},end:{line:3,column:33}}],line:3},3:{loc:{start:{line:24,column:67},end:{line:24,column:90}},type:"cond-expr",locations:[{start:{line:24,column:83},end:{line:24,column:85}},{start:{line:24,column:88},end:{line:24,column:90}}],line:24},4:{loc:{start:{line:48,column:20},end:{line:48,column:77}},type:"cond-expr",locations:[{start:{line:48,column:47},end:{line:48,column:70}},{start:{line:48,column:73},end:{line:48,column:77}}],line:48},5:{loc:{start:{line:58,column:8},end:{line:65,column:9}},type:"if",locations:[{start:{line:58,column:8},end:{line:65,column:9}},{start:{line:58,column:8},end:{line:65,column:9}}],line:58},6:{loc:{start:{line:58,column:12},end:{line:58,column:66}},type:"binary-expr",locations:[{start:{line:58,column:12},end:{line:58,column:18}},{start:{line:58,column:22},end:{line:58,column:66}}],line:58},7:{loc:{start:{line:90,column:18},end:{line:90,column:55}},type:"binary-expr",locations:[{start:{line:90,column:18},end:{line:90,column:38}},{start:{line:90,column:42},end:{line:90,column:55}}],line:90},8:{loc:{start:{line:93,column:16},end:{line:95,column:17}},type:"if",locations:[{start:{line:93,column:16},end:{line:95,column:17}},{start:{line:93,column:16},end:{line:95,column:17}}],line:93},9:{loc:{start:{line:97,column:16},end:{line:99,column:17}},type:"if",locations:[{start:{line:97,column:16},end:{line:99,column:17}},{start:{line:97,column:16},end:{line:99,column:17}}],line:97},10:{loc:{start:{line:110,column:8},end:{line:110,column:77}},type:"cond-expr",locations:[{start:{line:110,column:57},end:{line:110,column:63}},{start:{line:110,column:66},end:{line:110,column:77}}],line:110},11:{loc:{start:{line:110,column:8},end:{line:110,column:54}},type:"binary-expr",locations:[{start:{line:110,column:8},end:{line:110,column:37}},{start:{line:110,column:41},end:{line:110,column:54}}],line:110},12:{loc:{start:{line:133,column:8},end:{line:135,column:9}},type:"if",locations:[{start:{line:133,column:8},end:{line:135,column:9}},{start:{line:133,column:8},end:{line:135,column:9}}],line:133},13:{loc:{start:{line:147,column:16},end:{line:149,column:17}},type:"if",locations:[{start:{line:147,column:16},end:{line:149,column:17}},{start:{line:147,column:16},end:{line:149,column:17}}],line:147},14:{loc:{start:{line:150,column:37},end:{line:150,column:61}},type:"binary-expr",locations:[{start:{line:150,column:37},end:{line:150,column:53}},{start:{line:150,column:57},end:{line:150,column:61}}],line:150},15:{loc:{start:{line:154,column:19},end:{line:154,column:41}},type:"binary-expr",locations:[{start:{line:154,column:19},end:{line:154,column:27}},{start:{line:154,column:31},end:{line:154,column:41}}],line:154},16:{loc:{start:{line:159,column:8},end:{line:161,column:9}},type:"if",locations:[{start:{line:159,column:8},end:{line:161,column:9}},{start:{line:159,column:8},end:{line:161,column:9}}],line:159},17:{loc:{start:{line:179,column:34},end:{line:179,column:56}},type:"binary-expr",locations:[{start:{line:179,column:34},end:{line:179,column:49}},{start:{line:179,column:53},end:{line:179,column:56}}],line:179}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},b:{0:[0,0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b9f80f6f4e85126a66e27af183902862a07d7037"})
var r=o[e]
return i=function(){return r},r}i()
var o=(i().s[0]++,i().b[0][0]++,this&&(i().b[0][1]++,this.__importDefault)||(i().b[0][2]++,function(e){return i().f[0]++,i().s[1]++,i().b[2][0]++,e&&(i().b[2][1]++,e.__esModule)?(i().b[1][0]++,e):(i().b[1][1]++,{default:e})}))
i().s[2]++,Object.defineProperty(t,"__esModule",{value:!0})
var r=(i().s[3]++,o(n(816))),s=(i().s[4]++,n(700)),a=(i().s[5]++,o(n(96))),l=(i().s[6]++,o(n(570))),c=(i().s[7]++,o(n(147))),d=(i().s[8]++,o(n(680))),u=(i().s[9]++,function(){function e(e){i().f[2]++
var t=(i().s[10]++,e.data),n=(i().s[11]++,e.api),o=(i().s[12]++,e.config),l=(i().s[13]++,void 0===o?(i().b[3][0]++,{}):(i().b[3][1]++,o))
i().s[14]++,this.wrapper=s.make("div",r.default["ej-fn-wrapper"]),i().s[15]++,this.observer=new MutationObserver(this.contentDidMutated.bind(this)),i().s[16]++,this.data=[],i().s[17]++,this.data=t,i().s[18]++,this.api=n,i().s[19]++,this.config=l,i().s[20]++,this.popover=new a.default(this.wrapper,n,this.config)}return i().f[1]++,i().s[21]++,e.prototype.render=function(){i().f[3]++
var e=(i().s[22]++,this),t=(i().s[23]++,window.getSelection()),n=(i().s[24]++,t.rangeCount>0?(i().b[4][0]++,t.getRangeAt(0)):(i().b[4][1]++,null)),o=(i().s[25]++,s.make("div",r.default["ej-fn-tune"])),a=(i().s[26]++,s.make("div",r.default["ej-fn-tune__icon"],{innerHTML:c.default})),l=(i().s[27]++,s.make("div",r.default["ej-fn-tune__label"],{innerText:this.api.i18n.t("Footnote")}))
return i().s[28]++,o.appendChild(a),i().s[29]++,o.appendChild(l),i().s[30]++,i().b[6][0]++,n&&(i().b[6][1]++,this.wrapper.contains(n.startContainer))?(i().b[5][1]++,i().s[32]++,o.addEventListener("click",(function(){i().f[4]++,i().s[33]++,e.onClick(n)}))):(i().b[5][0]++,i().s[31]++,o.classList.add(r.default["ej-fn-tune--disabled"])),i().s[34]++,o},i().s[35]++,e.prototype.save=function(){i().f[5]++
var t=(i().s[36]++,Array.from(this.wrapper.querySelectorAll("sup[data-tune="+l.default.dataAttribute+"]")))
return i().s[37]++,e.notes.filter((function(e){return i().f[6]++,i().s[38]++,t.includes(e.node)})).map((function(e){return i().f[7]++,i().s[39]++,e.save()}))},i().s[40]++,e.prototype.wrap=function(e){i().f[8]++
var t=(i().s[41]++,this)
return i().s[42]++,this.wrapper.append(e,this.popover.node),i().s[43]++,this.hydrate(e),i().s[44]++,this.observer.observe(this.wrapper,{childList:!0,subtree:!0}),i().s[45]++,this.shortcut=new d.default({on:this.wrapper,name:(i().b[7][0]++,this.config.shortcut||(i().b[7][1]++,"CMD+SHIFT+F")),callback:function(){i().f[9]++
var e=(i().s[46]++,window.getSelection())
if(i().s[47]++,!e)return i().b[8][0]++,void i().s[48]++
i().b[8][1]++
var n=(i().s[49]++,e.getRangeAt(0))
if(i().s[50]++,!n)return i().b[9][0]++,void i().s[51]++
i().b[9][1]++,i().s[52]++,t.onClick(n)}}),i().s[53]++,this.wrapper},i().s[54]++,e.prototype.destroy=function(){var e
i().f[10]++,i().s[55]++,i().b[11][0]++,null===(e=this.shortcut)||(i().b[11][1]++,void 0===e)?i().b[10][0]++:(i().b[10][1]++,e.remove())},i().s[56]++,e.prototype.onClick=function(e){i().f[11]++,i().s[57]++,e.collapse(!1)
var t=(i().s[58]++,new l.default(e,this.popover))
i().s[59]++,this.insertNote(t),i().s[60]++,this.popover.open(t),i().s[61]++,this.api.toolbar.toggleBlockSettings(!1)},i().s[62]++,e.prototype.insertNote=function(t){i().f[12]++
var n=(i().s[63]++,e.notes.findIndex((function(e){return i().f[13]++,i().s[64]++,-1===t.range.compareBoundaryPoints(Range.START_TO_START,e.range)})))
i().s[65]++,-1===n?(i().b[12][0]++,i().s[66]++,n=e.notes.length):i().b[12][1]++,i().s[67]++,e.notes.splice(n,0,t)},i().s[68]++,e.prototype.contentDidMutated=function(t){i().f[14]++
var n=(i().s[69]++,t.some((function(t){i().f[15]++
var n=(i().s[70]++,Array.from(t.addedNodes).some((function(e){return i().f[16]++,i().s[71]++,"SUP"===e.nodeName}))),o=(i().s[72]++,Array.from(t.removedNodes).some((function(t){if(i().f[17]++,i().s[73]++,"SUP"!==t.nodeName)return i().b[13][0]++,i().s[74]++,!1
i().b[13][1]++
var n=(i().s[75]++,parseInt((i().b[14][0]++,t.textContent||(i().b[14][1]++,"-1"))))
return i().s[76]++,e.notes.splice(n-1,1),i().s[77]++,!0})))
return i().s[78]++,i().b[15][0]++,n||(i().b[15][1]++,o)})))
i().s[79]++,n?(i().b[16][0]++,i().s[80]++,this.updateIndices()):i().b[16][1]++},i().s[81]++,e.prototype.updateIndices=function(){i().f[18]++,i().s[82]++,e.notes.forEach((function(e,t){return i().f[19]++,i().s[83]++,e.index=t+1}))},i().s[84]++,e.prototype.hydrate=function(t){i().f[20]++
var n=(i().s[85]++,this),o=(i().s[86]++,t.querySelectorAll("sup[data-tune="+l.default.dataAttribute+"]"))
i().s[87]++,o.forEach((function(t,o){i().f[21]++
var r=(i().s[88]++,new l.default(t,n.popover,n.data[o].id))
i().s[89]++,r.index=parseInt((i().b[17][0]++,t.textContent||(i().b[17][1]++,"0"))),i().s[90]++,r.content=n.data[o].content,i().s[91]++,e.notes.push(r)}))},i().s[92]++,e.isTune=!0,i().s[93]++,e.sanitize={sup:{"data-tune":l.default.dataAttribute,"data-id":!0}},i().s[94]++,e.notes=[],i().s[95]++,e}())
i().s[96]++,t.default=u},570:function(e,t,n){"use strict"
function i(){var e="/home/runner/work/footnotes-tune/footnotes-tune/src/note.ts",t=new Function("return this")(),n="__coverage__",o=t[n]||(t[n]={})
o[e]&&"a22ead571a2f8ae77df50b87cd7b15e37102a9be"===o[e].hash||(o[e]={path:"/home/runner/work/footnotes-tune/footnotes-tune/src/note.ts",statementMap:{0:{start:{line:2,column:22},end:{line:4,column:1}},1:{start:{line:3,column:4},end:{line:3,column:62}},2:{start:{line:5,column:0},end:{line:5,column:62}},3:{start:{line:6,column:12},end:{line:6,column:28}},4:{start:{line:7,column:18},end:{line:7,column:57}},5:{start:{line:8,column:15},end:{line:8,column:32}},6:{start:{line:12,column:26},end:{line:91,column:3}},7:{start:{line:20,column:20},end:{line:20,column:24}},8:{start:{line:21,column:8},end:{line:21,column:55}},9:{start:{line:21,column:29},end:{line:21,column:53}},10:{start:{line:25,column:8},end:{line:25,column:26}},11:{start:{line:29,column:8},end:{line:29,column:102}},12:{start:{line:33,column:8},end:{line:33,column:24}},13:{start:{line:34,column:8},end:{line:34,column:31}},14:{start:{line:35,column:8},end:{line:35,column:21}},15:{start:{line:36,column:8},end:{line:46,column:9}},16:{start:{line:37,column:12},end:{line:37,column:37}},17:{start:{line:38,column:12},end:{line:38,column:46}},18:{start:{line:41,column:12},end:{line:41,column:36}},19:{start:{line:42,column:12},end:{line:42,column:48}},20:{start:{line:43,column:12},end:{line:43,column:70}},21:{start:{line:44,column:12},end:{line:44,column:37}},22:{start:{line:45,column:12},end:{line:45,column:45}},23:{start:{line:47,column:8},end:{line:47,column:52}},24:{start:{line:48,column:8},end:{line:48,column:39}},25:{start:{line:49,column:8},end:{line:51,column:11}},26:{start:{line:50,column:12},end:{line:50,column:38}},27:{start:{line:53,column:4},end:{line:69,column:7}},28:{start:{line:58,column:12},end:{line:58,column:31}},29:{start:{line:64,column:12},end:{line:64,column:32}},30:{start:{line:65,column:12},end:{line:65,column:59}},31:{start:{line:73,column:4},end:{line:75,column:6}},32:{start:{line:74,column:8},end:{line:74,column:27}},33:{start:{line:79,column:4},end:{line:85,column:6}},34:{start:{line:80,column:8},end:{line:84,column:10}},35:{start:{line:89,column:4},end:{line:89,column:37}},36:{start:{line:90,column:4},end:{line:90,column:16}},37:{start:{line:92,column:0},end:{line:92,column:23}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:56},end:{line:2,column:57}},loc:{start:{line:2,column:71},end:{line:4,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:12,column:26},end:{line:12,column:27}},loc:{start:{line:12,column:38},end:{line:91,column:1}},line:12},2:{name:"Note",decl:{start:{line:19,column:13},end:{line:19,column:17}},loc:{start:{line:19,column:44},end:{line:52,column:5}},line:19},3:{name:"(anonymous_3)",decl:{start:{line:49,column:44},end:{line:49,column:45}},loc:{start:{line:49,column:56},end:{line:51,column:9}},line:49},4:{name:"(anonymous_4)",decl:{start:{line:57,column:13},end:{line:57,column:14}},loc:{start:{line:57,column:25},end:{line:59,column:9}},line:57},5:{name:"(anonymous_5)",decl:{start:{line:63,column:13},end:{line:63,column:14}},loc:{start:{line:63,column:30},end:{line:66,column:9}},line:63},6:{name:"(anonymous_6)",decl:{start:{line:73,column:28},end:{line:73,column:29}},loc:{start:{line:73,column:40},end:{line:75,column:5}},line:73},7:{name:"(anonymous_7)",decl:{start:{line:79,column:26},end:{line:79,column:27}},loc:{start:{line:79,column:38},end:{line:85,column:5}},line:79}},branchMap:{0:{loc:{start:{line:2,column:22},end:{line:4,column:1}},type:"binary-expr",locations:[{start:{line:2,column:23},end:{line:2,column:27}},{start:{line:2,column:31},end:{line:2,column:51}},{start:{line:2,column:56},end:{line:4,column:1}}],line:2},1:{loc:{start:{line:3,column:11},end:{line:3,column:61}},type:"cond-expr",locations:[{start:{line:3,column:37},end:{line:3,column:40}},{start:{line:3,column:43},end:{line:3,column:61}}],line:3},2:{loc:{start:{line:3,column:12},end:{line:3,column:33}},type:"binary-expr",locations:[{start:{line:3,column:12},end:{line:3,column:15}},{start:{line:3,column:19},end:{line:3,column:33}}],line:3},3:{loc:{start:{line:21,column:8},end:{line:21,column:55}},type:"if",locations:[{start:{line:21,column:8},end:{line:21,column:55}},{start:{line:21,column:8},end:{line:21,column:55}}],line:21},4:{loc:{start:{line:36,column:8},end:{line:46,column:9}},type:"if",locations:[{start:{line:36,column:8},end:{line:46,column:9}},{start:{line:36,column:8},end:{line:46,column:9}}],line:36}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a22ead571a2f8ae77df50b87cd7b15e37102a9be"})
var r=o[e]
return i=function(){return r},r}i()
var o=(i().s[0]++,i().b[0][0]++,this&&(i().b[0][1]++,this.__importDefault)||(i().b[0][2]++,function(e){return i().f[0]++,i().s[1]++,i().b[2][0]++,e&&(i().b[2][1]++,e.__esModule)?(i().b[1][0]++,e):(i().b[1][1]++,{default:e})}))
i().s[2]++,Object.defineProperty(t,"__esModule",{value:!0})
var r=(i().s[3]++,n(700)),s=(i().s[4]++,o(n(106))),a=(i().s[5]++,n(373)),l=(i().s[6]++,function(){function e(t,n,o){i().f[2]++
var l=(i().s[7]++,this)
i().s[8]++,void 0===o?(i().b[3][0]++,i().s[9]++,o=a.nanoid(6)):i().b[3][1]++,i().s[10]++,this.content="",i().s[11]++,this.node=r.make("sup",s.default["ej-fn-sup"],{contentEditable:"false"}),i().s[12]++,this._index=0,i().s[13]++,this.popover=n,i().s[14]++,this.id=o,i().s[15]++,t instanceof Range?(i().b[4][0]++,i().s[16]++,this.range=t,i().s[17]++,t.insertNode(this.node)):(i().b[4][1]++,i().s[18]++,this.node=t,i().s[19]++,this.node.contentEditable="false",i().s[20]++,this.node.classList.add(s.default["ej-fn-sup"]),i().s[21]++,this.range=new Range,i().s[22]++,this.range.selectNode(this.node)),i().s[23]++,this.node.dataset.tune=e.dataAttribute,i().s[24]++,this.node.dataset.id=this.id,i().s[25]++,this.node.addEventListener("click",(function(){i().f[3]++,i().s[26]++,l.popover.open(l)}))}return i().f[1]++,i().s[27]++,Object.defineProperty(e.prototype,"index",{get:function(){return i().f[4]++,i().s[28]++,this._index},set:function(e){i().f[5]++,i().s[29]++,this._index=e,i().s[30]++,this.node.textContent=this._index.toString()},enumerable:!1,configurable:!0}),i().s[31]++,e.prototype.remove=function(){i().f[6]++,i().s[32]++,this.node.remove()},i().s[33]++,e.prototype.save=function(){return i().f[7]++,i().s[34]++,{id:this.id,content:this.content,superscript:this.index}},i().s[35]++,e.dataAttribute="footnotes",i().s[36]++,e}())
i().s[37]++,t.default=l},96:function(e,t,n){"use strict"
function i(){var e="/home/runner/work/footnotes-tune/footnotes-tune/src/popover.ts",t=new Function("return this")(),n="__coverage__",o=t[n]||(t[n]={})
o[e]&&"0da5c6cbf153db1ec80db7eb6ed85d81167905dc"===o[e].hash||(o[e]={path:"/home/runner/work/footnotes-tune/footnotes-tune/src/popover.ts",statementMap:{0:{start:{line:2,column:22},end:{line:4,column:1}},1:{start:{line:3,column:4},end:{line:3,column:62}},2:{start:{line:5,column:0},end:{line:5,column:62}},3:{start:{line:6,column:12},end:{line:6,column:28}},4:{start:{line:7,column:21},end:{line:7,column:63}},5:{start:{line:8,column:13},end:{line:8,column:47}},6:{start:{line:9,column:14},end:{line:9,column:32}},7:{start:{line:13,column:29},end:{line:264,column:3}},8:{start:{line:20,column:20},end:{line:20,column:24}},9:{start:{line:24,column:8},end:{line:24,column:79}},10:{start:{line:28,column:8},end:{line:28,column:93}},11:{start:{line:32,column:8},end:{line:32,column:32}},12:{start:{line:38,column:8},end:{line:38,column:29}},13:{start:{line:39,column:8},end:{line:39,column:23}},14:{start:{line:40,column:8},end:{line:40,column:31}},15:{start:{line:41,column:8},end:{line:41,column:47}},16:{start:{line:42,column:8},end:{line:42,column:29}},17:{start:{line:43,column:8},end:{line:43,column:22}},18:{start:{line:47,column:8},end:{line:53,column:17}},19:{start:{line:48,column:12},end:{line:48,column:32}},20:{start:{line:49,column:12},end:{line:51,column:13}},21:{start:{line:50,column:16},end:{line:50,column:23}},22:{start:{line:52,column:12},end:{line:52,column:36}},23:{start:{line:54,column:8},end:{line:54,column:61}},24:{start:{line:56,column:8},end:{line:56,column:76}},25:{start:{line:63,column:4},end:{line:80,column:6}},26:{start:{line:64,column:8},end:{line:68,column:9}},27:{start:{line:65,column:12},end:{line:65,column:25}},28:{start:{line:66,column:12},end:{line:66,column:33}},29:{start:{line:67,column:12},end:{line:67,column:19}},30:{start:{line:69,column:8},end:{line:69,column:32}},31:{start:{line:70,column:8},end:{line:70,column:47}},32:{start:{line:71,column:8},end:{line:71,column:73}},33:{start:{line:72,column:8},end:{line:72,column:70}},34:{start:{line:73,column:8},end:{line:73,column:53}},35:{start:{line:74,column:8},end:{line:74,column:20}},36:{start:{line:75,column:8},end:{line:75,column:81}},37:{start:{line:79,column:8},end:{line:79,column:49}},38:{start:{line:86,column:4},end:{line:102,column:6}},39:{start:{line:87,column:8},end:{line:87,column:70}},40:{start:{line:87,column:43},end:{line:87,column:68}},41:{start:{line:88,column:8},end:{line:88,column:73}},42:{start:{line:89,column:8},end:{line:89,column:56}},43:{start:{line:90,column:8},end:{line:90,column:84}},44:{start:{line:91,column:8},end:{line:91,column:48}},45:{start:{line:92,column:8},end:{line:94,column:9}},46:{start:{line:93,column:12},end:{line:93,column:19}},47:{start:{line:95,column:8},end:{line:97,column:9}},48:{start:{line:96,column:12},end:{line:96,column:38}},49:{start:{line:98,column:8},end:{line:100,column:9}},50:{start:{line:99,column:12},end:{line:99,column:63}},51:{start:{line:101,column:8},end:{line:101,column:32}},52:{start:{line:108,column:4},end:{line:138,column:6}},53:{start:{line:109,column:20},end:{line:109,column:24}},54:{start:{line:110,column:8},end:{line:110,column:53}},55:{start:{line:111,column:8},end:{line:111,column:107}},56:{start:{line:112,column:8},end:{line:112,column:40}},57:{start:{line:113,column:8},end:{line:115,column:9}},58:{start:{line:114,column:12},end:{line:114,column:19}},59:{start:{line:116,column:29},end:{line:116,column:96}},60:{start:{line:117,column:26},end:{line:120,column:10}},61:{start:{line:121,column:27},end:{line:124,column:10}},62:{start:{line:125,column:27},end:{line:127,column:10}},63:{start:{line:128,column:8},end:{line:128,column:85}},64:{start:{line:128,column:60},end:{line:128,column:81}},65:{start:{line:129,column:8},end:{line:135,column:11}},66:{start:{line:130,column:31},end:{line:130,column:102}},67:{start:{line:131,column:12},end:{line:133,column:13}},68:{start:{line:132,column:16},end:{line:132,column:23}},69:{start:{line:134,column:12},end:{line:134,column:30}},70:{start:{line:136,column:8},end:{line:136,column:71}},71:{start:{line:137,column:8},end:{line:137,column:41}},72:{start:{line:142,column:4},end:{line:191,column:6}},73:{start:{line:143,column:8},end:{line:145,column:9}},74:{start:{line:144,column:12},end:{line:144,column:19}},75:{start:{line:146,column:19},end:{line:146,column:40}},76:{start:{line:147,column:24},end:{line:147,column:25}},77:{start:{line:148,column:27},end:{line:148,column:30}},78:{start:{line:150,column:25},end:{line:150,column:41}},79:{start:{line:151,column:27},end:{line:151,column:75}},80:{start:{line:152,column:28},end:{line:152,column:65}},81:{start:{line:153,column:26},end:{line:153,column:62}},82:{start:{line:154,column:19},end:{line:154,column:47}},83:{start:{line:158,column:8},end:{line:158,column:35}},84:{start:{line:162,column:8},end:{line:162,column:81}},85:{start:{line:166,column:8},end:{line:170,column:9}},86:{start:{line:167,column:12},end:{line:167,column:61}},87:{start:{line:168,column:12},end:{line:168,column:39}},88:{start:{line:169,column:12},end:{line:169,column:19}},89:{start:{line:174,column:19},end:{line:174,column:60}},90:{start:{line:178,column:27},end:{line:178,column:70}},91:{start:{line:179,column:28},end:{line:179,column:110}},92:{start:{line:180,column:26},end:{line:180,column:28}},93:{start:{line:184,column:8},end:{line:189,column:9}},94:{start:{line:185,column:12},end:{line:185,column:53}},95:{start:{line:187,column:13},end:{line:189,column:9}},96:{start:{line:188,column:12},end:{line:188,column:54}},97:{start:{line:190,column:8},end:{line:190,column:43}},98:{start:{line:199,column:4},end:{line:231,column:6}},99:{start:{line:203,column:8},end:{line:205,column:9}},100:{start:{line:204,column:12},end:{line:204,column:19}},101:{start:{line:206,column:8},end:{line:206,column:31}},102:{start:{line:210,column:8},end:{line:212,column:9}},103:{start:{line:211,column:12},end:{line:211,column:25}},104:{start:{line:216,column:24},end:{line:216,column:45}},105:{start:{line:217,column:20},end:{line:217,column:97}},106:{start:{line:218,column:8},end:{line:220,column:9}},107:{start:{line:219,column:12},end:{line:219,column:19}},108:{start:{line:221,column:22},end:{line:221,column:49}},109:{start:{line:222,column:8},end:{line:222,column:43}},110:{start:{line:223,column:8},end:{line:223,column:25}},111:{start:{line:224,column:8},end:{line:227,column:9}},112:{start:{line:225,column:12},end:{line:225,column:47}},113:{start:{line:226,column:12},end:{line:226,column:29}},114:{start:{line:228,column:8},end:{line:228,column:90}},115:{start:{line:229,column:8},end:{line:229,column:88}},116:{start:{line:230,column:8},end:{line:230,column:34}},117:{start:{line:237,column:4},end:{line:254,column:6}},118:{start:{line:238,column:30},end:{line:238,column:102}},119:{start:{line:239,column:39},end:{line:239,column:86}},120:{start:{line:240,column:29},end:{line:240,column:83}},121:{start:{line:241,column:8},end:{line:243,column:9}},122:{start:{line:242,column:12},end:{line:242,column:19}},123:{start:{line:247,column:8},end:{line:252,column:9}},124:{start:{line:248,column:12},end:{line:248,column:45}},125:{start:{line:251,column:12},end:{line:251,column:33}},126:{start:{line:253,column:8},end:{line:253,column:21}},127:{start:{line:260,column:4},end:{line:262,column:6}},128:{start:{line:261,column:8},end:{line:261,column:54}},129:{start:{line:263,column:4},end:{line:263,column:19}},130:{start:{line:265,column:0},end:{line:265,column:26}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:56},end:{line:2,column:57}},loc:{start:{line:2,column:71},end:{line:4,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:13,column:29},end:{line:13,column:30}},loc:{start:{line:13,column:41},end:{line:264,column:1}},line:13},2:{name:"Popover",decl:{start:{line:19,column:13},end:{line:19,column:20}},loc:{start:{line:19,column:43},end:{line:57,column:5}},line:19},3:{name:"(anonymous_3)",decl:{start:{line:47,column:46},end:{line:47,column:47}},loc:{start:{line:47,column:59},end:{line:53,column:9}},line:47},4:{name:"(anonymous_4)",decl:{start:{line:63,column:29},end:{line:63,column:30}},loc:{start:{line:63,column:45},end:{line:80,column:5}},line:63},5:{name:"(anonymous_5)",decl:{start:{line:86,column:30},end:{line:86,column:31}},loc:{start:{line:86,column:58},end:{line:102,column:5}},line:86},6:{name:"(anonymous_6)",decl:{start:{line:108,column:31},end:{line:108,column:32}},loc:{start:{line:108,column:43},end:{line:138,column:5}},line:108},7:{name:"(anonymous_7)",decl:{start:{line:128,column:46},end:{line:128,column:47}},loc:{start:{line:128,column:58},end:{line:128,column:83}},line:128},8:{name:"(anonymous_8)",decl:{start:{line:129,column:47},end:{line:129,column:48}},loc:{start:{line:129,column:59},end:{line:135,column:9}},line:129},9:{name:"(anonymous_9)",decl:{start:{line:142,column:29},end:{line:142,column:30}},loc:{start:{line:142,column:41},end:{line:191,column:5}},line:142},10:{name:"(anonymous_10)",decl:{start:{line:199,column:39},end:{line:199,column:40}},loc:{start:{line:199,column:56},end:{line:231,column:5}},line:199},11:{name:"(anonymous_11)",decl:{start:{line:237,column:39},end:{line:237,column:40}},loc:{start:{line:237,column:52},end:{line:254,column:5}},line:237},12:{name:"(anonymous_12)",decl:{start:{line:260,column:32},end:{line:260,column:33}},loc:{start:{line:260,column:44},end:{line:262,column:5}},line:260}},branchMap:{0:{loc:{start:{line:2,column:22},end:{line:4,column:1}},type:"binary-expr",locations:[{start:{line:2,column:23},end:{line:2,column:27}},{start:{line:2,column:31},end:{line:2,column:51}},{start:{line:2,column:56},end:{line:4,column:1}}],line:2},1:{loc:{start:{line:3,column:11},end:{line:3,column:61}},type:"cond-expr",locations:[{start:{line:3,column:37},end:{line:3,column:40}},{start:{line:3,column:43},end:{line:3,column:61}}],line:3},2:{loc:{start:{line:3,column:12},end:{line:3,column:33}},type:"binary-expr",locations:[{start:{line:3,column:12},end:{line:3,column:15}},{start:{line:3,column:19},end:{line:3,column:33}}],line:3},3:{loc:{start:{line:49,column:12},end:{line:51,column:13}},type:"if",locations:[{start:{line:49,column:12},end:{line:51,column:13}},{start:{line:49,column:12},end:{line:51,column:13}}],line:49},4:{loc:{start:{line:64,column:8},end:{line:68,column:9}},type:"if",locations:[{start:{line:64,column:8},end:{line:68,column:9}},{start:{line:64,column:8},end:{line:68,column:9}}],line:64},5:{loc:{start:{line:71,column:40},end:{line:71,column:72}},type:"cond-expr",locations:[{start:{line:71,column:56},end:{line:71,column:63}},{start:{line:71,column:66},end:{line:71,column:72}}],line:71},6:{loc:{start:{line:87,column:8},end:{line:87,column:70}},type:"if",locations:[{start:{line:87,column:8},end:{line:87,column:70}},{start:{line:87,column:8},end:{line:87,column:70}}],line:87},7:{loc:{start:{line:92,column:8},end:{line:94,column:9}},type:"if",locations:[{start:{line:92,column:8},end:{line:94,column:9}},{start:{line:92,column:8},end:{line:94,column:9}}],line:92},8:{loc:{start:{line:95,column:8},end:{line:97,column:9}},type:"if",locations:[{start:{line:95,column:8},end:{line:97,column:9}},{start:{line:95,column:8},end:{line:97,column:9}}],line:95},9:{loc:{start:{line:98,column:8},end:{line:100,column:9}},type:"if",locations:[{start:{line:98,column:8},end:{line:100,column:9}},{start:{line:98,column:8},end:{line:100,column:9}}],line:98},10:{loc:{start:{line:111,column:60},end:{line:111,column:105}},type:"binary-expr",locations:[{start:{line:111,column:60},end:{line:111,column:83}},{start:{line:111,column:87},end:{line:111,column:105}}],line:111},11:{loc:{start:{line:113,column:8},end:{line:115,column:9}},type:"if",locations:[{start:{line:113,column:8},end:{line:115,column:9}},{start:{line:113,column:8},end:{line:115,column:9}}],line:113},12:{loc:{start:{line:126,column:26},end:{line:126,column:55}},type:"cond-expr",locations:[{start:{line:126,column:43},end:{line:126,column:46}},{start:{line:126,column:49},end:{line:126,column:55}}],line:126},13:{loc:{start:{line:131,column:12},end:{line:133,column:13}},type:"if",locations:[{start:{line:131,column:12},end:{line:133,column:13}},{start:{line:131,column:12},end:{line:133,column:13}}],line:131},14:{loc:{start:{line:143,column:8},end:{line:145,column:9}},type:"if",locations:[{start:{line:143,column:8},end:{line:145,column:9}},{start:{line:143,column:8},end:{line:145,column:9}}],line:143},15:{loc:{start:{line:166,column:8},end:{line:170,column:9}},type:"if",locations:[{start:{line:166,column:8},end:{line:170,column:9}},{start:{line:166,column:8},end:{line:170,column:9}}],line:166},16:{loc:{start:{line:184,column:8},end:{line:189,column:9}},type:"if",locations:[{start:{line:184,column:8},end:{line:189,column:9}},{start:{line:184,column:8},end:{line:189,column:9}}],line:184},17:{loc:{start:{line:187,column:13},end:{line:189,column:9}},type:"if",locations:[{start:{line:187,column:13},end:{line:189,column:9}},{start:{line:187,column:13},end:{line:189,column:9}}],line:187},18:{loc:{start:{line:203,column:8},end:{line:205,column:9}},type:"if",locations:[{start:{line:203,column:8},end:{line:205,column:9}},{start:{line:203,column:8},end:{line:205,column:9}}],line:203},19:{loc:{start:{line:210,column:8},end:{line:212,column:9}},type:"if",locations:[{start:{line:210,column:8},end:{line:212,column:9}},{start:{line:210,column:8},end:{line:212,column:9}}],line:210},20:{loc:{start:{line:210,column:12},end:{line:210,column:58}},type:"cond-expr",locations:[{start:{line:210,column:29},end:{line:210,column:42}},{start:{line:210,column:45},end:{line:210,column:58}}],line:210},21:{loc:{start:{line:217,column:20},end:{line:217,column:97}},type:"cond-expr",locations:[{start:{line:217,column:65},end:{line:217,column:71}},{start:{line:217,column:74},end:{line:217,column:97}}],line:217},22:{loc:{start:{line:217,column:20},end:{line:217,column:62}},type:"binary-expr",locations:[{start:{line:217,column:20},end:{line:217,column:38}},{start:{line:217,column:42},end:{line:217,column:62}}],line:217},23:{loc:{start:{line:218,column:8},end:{line:220,column:9}},type:"if",locations:[{start:{line:218,column:8},end:{line:220,column:9}},{start:{line:218,column:8},end:{line:220,column:9}}],line:218},24:{loc:{start:{line:224,column:8},end:{line:227,column:9}},type:"if",locations:[{start:{line:224,column:8},end:{line:227,column:9}},{start:{line:224,column:8},end:{line:227,column:9}}],line:224},25:{loc:{start:{line:228,column:8},end:{line:228,column:89}},type:"cond-expr",locations:[{start:{line:228,column:53},end:{line:228,column:59}},{start:{line:228,column:62},end:{line:228,column:89}}],line:228},26:{loc:{start:{line:228,column:8},end:{line:228,column:50}},type:"binary-expr",locations:[{start:{line:228,column:8},end:{line:228,column:26}},{start:{line:228,column:30},end:{line:228,column:50}}],line:228},27:{loc:{start:{line:229,column:8},end:{line:229,column:87}},type:"cond-expr",locations:[{start:{line:229,column:53},end:{line:229,column:59}},{start:{line:229,column:62},end:{line:229,column:87}}],line:229},28:{loc:{start:{line:229,column:8},end:{line:229,column:50}},type:"binary-expr",locations:[{start:{line:229,column:8},end:{line:229,column:26}},{start:{line:229,column:30},end:{line:229,column:50}}],line:229},29:{loc:{start:{line:241,column:8},end:{line:243,column:9}},type:"if",locations:[{start:{line:241,column:8},end:{line:243,column:9}},{start:{line:241,column:8},end:{line:243,column:9}}],line:241},30:{loc:{start:{line:241,column:12},end:{line:241,column:55}},type:"binary-expr",locations:[{start:{line:241,column:12},end:{line:241,column:27}},{start:{line:241,column:31},end:{line:241,column:55}}],line:241},31:{loc:{start:{line:247,column:8},end:{line:252,column:9}},type:"if",locations:[{start:{line:247,column:8},end:{line:252,column:9}},{start:{line:247,column:8},end:{line:252,column:9}}],line:247},32:{loc:{start:{line:247,column:12},end:{line:247,column:88}},type:"binary-expr",locations:[{start:{line:247,column:12},end:{line:247,column:26}},{start:{line:247,column:30},end:{line:247,column:88}}],line:247}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0,97:0,98:0,99:0,100:0,101:0,102:0,103:0,104:0,105:0,106:0,107:0,108:0,109:0,110:0,111:0,112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,124:0,125:0,126:0,127:0,128:0,129:0,130:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},b:{0:[0,0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0],25:[0,0],26:[0,0],27:[0,0],28:[0,0],29:[0,0],30:[0,0],31:[0,0],32:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0da5c6cbf153db1ec80db7eb6ed85d81167905dc"})
var r=o[e]
return i=function(){return r},r}i()
var o=(i().s[0]++,i().b[0][0]++,this&&(i().b[0][1]++,this.__importDefault)||(i().b[0][2]++,function(e){return i().f[0]++,i().s[1]++,i().b[2][0]++,e&&(i().b[2][1]++,e.__esModule)?(i().b[1][0]++,e):(i().b[1][1]++,{default:e})}))
i().s[2]++,Object.defineProperty(t,"__esModule",{value:!0})
var r=(i().s[3]++,n(700)),s=(i().s[4]++,o(n(712))),a=(i().s[5]++,o(n(570))),l=(i().s[6]++,n(923)),c=(i().s[7]++,function(){function e(e,t,n){i().f[2]++
var o=(i().s[8]++,this)
i().s[9]++,this.node=r.make("div",s.default["ej-fn-popover"]),i().s[10]++,this.textarea=r.make("div",s.default["ej-fn-popover__textarea"]),i().s[11]++,this.currentNote=null,i().s[12]++,this.lastNote=null,i().s[13]++,this.api=t,i().s[14]++,this.wrapper=e,i().s[15]++,this.readOnly=t.readOnly.isEnabled,i().s[16]++,this.config=n,i().s[17]++,this.makeUI(),i().s[18]++,this.node.addEventListener("keydown",(function(e){if(i().f[3]++,i().s[19]++,e.stopPropagation(),i().s[20]++,"Enter"!==e.key)return i().b[3][0]++,void i().s[21]++
i().b[3][1]++,i().s[22]++,o.onEnterPressed(e)}),!0),i().s[23]++,this.onClickOutside=this.onClickOutside.bind(this),i().s[24]++,this.move=l.throttled(150,this.move.bind(this)).bind(this)}return i().f[1]++,i().s[25]++,e.prototype.open=function(e){if(i().f[4]++,i().s[26]++,this.lastNote===e)return i().b[4][0]++,i().s[27]++,this.close(),i().s[28]++,this.lastNote=null,void i().s[29]++
i().b[4][1]++,i().s[30]++,this.currentNote=e,i().s[31]++,this.textarea.innerHTML=e.content,i().s[32]++,this.textarea.contentEditable=this.readOnly?(i().b[5][0]++,"false"):(i().b[5][1]++,"true"),i().s[33]++,document.addEventListener("click",this.onClickOutside,!0),i().s[34]++,window.addEventListener("resize",this.move),i().s[35]++,this.move(),i().s[36]++,this.node.classList.add(s.default["ej-fn-popover--opened"]),i().s[37]++,l.setSelectionAtEnd(this.textarea)},i().s[38]++,e.prototype.close=function(e){if(i().f[5]++,i().s[39]++,void 0===e?(i().b[6][0]++,i().s[40]++,e=!1):i().b[6][1]++,i().s[41]++,document.removeEventListener("click",this.onClickOutside,!0),i().s[42]++,window.removeEventListener("resize",this.move),i().s[43]++,this.node.classList.remove(s.default["ej-fn-popover--opened"]),i().s[44]++,this.textarea.contentEditable="false",i().s[45]++,!this.currentNote)return i().b[7][0]++,void i().s[46]++
i().b[7][1]++,i().s[47]++,e?(i().b[8][0]++,i().s[48]++,this.currentNote.remove()):i().b[8][1]++,i().s[49]++,this.readOnly?i().b[9][1]++:(i().b[9][0]++,i().s[50]++,this.currentNote.content=this.textarea.innerHTML),i().s[51]++,this.currentNote=null},i().s[52]++,e.prototype.makeUI=function(){i().f[6]++
var e=(i().s[53]++,this)
if(i().s[54]++,this.textarea.dataset.inlineToolbar="true",i().s[55]++,this.textarea.dataset.placeholder=this.api.i18n.t((i().b[10][0]++,this.config.placeholder||(i().b[10][1]++,"Write a footnote"))),i().s[56]++,this.node.append(this.textarea),i().s[57]++,this.readOnly)return i().b[11][0]++,void i().s[58]++
i().b[11][1]++
var t=(i().s[59]++,r.make("div",s.default["ej-fn-popover__buttons"])),n=(i().s[60]++,r.make("button",s.default["ej-fn-popover__button"],{textContent:this.api.i18n.t("Apply"),type:"button"})),o=(i().s[61]++,r.make("button",[s.default["ej-fn-popover__button"],s.default["ej-fn-popover__button--right"]],{textContent:this.api.i18n.t("Remove"),type:"button"})),a=(i().s[62]++,r.make("span",s.default["ej-fn-popover__hint"],{textContent:(this.isMacOS()?(i().b[12][0]++,"⌘"):(i().b[12][1]++,"Ctrl"))+" + Enter"}))
i().s[63]++,n.addEventListener("click",(function(){return i().f[7]++,i().s[64]++,e.close()})),i().s[65]++,o.addEventListener("click",(function(){i().f[8]++
var t=(i().s[66]++,confirm(e.api.i18n.t("Are you sure you want to remove this note?")))
if(i().s[67]++,!t)return i().b[13][0]++,void i().s[68]++
i().b[13][1]++,i().s[69]++,e.close(!0)})),i().s[70]++,t.append(n,a,o),i().s[71]++,this.node.append(t)},i().s[72]++,e.prototype.move=function(){if(i().f[9]++,i().s[73]++,!this.currentNote)return i().b[14][0]++,void i().s[74]++
i().b[14][1]++
var e=(i().s[75]++,this.currentNote.node),t=(i().s[76]++,5),n=(i().s[77]++,600),o=(i().s[78]++,n/2),r=(i().s[79]++,this.wrapper.querySelector(".ce-block__content")),s=(i().s[80]++,window.getComputedStyle(r)),a=(i().s[81]++,this.wrapper.getBoundingClientRect()),l=(i().s[82]++,e.getBoundingClientRect())
if(i().s[83]++,this.node.style.width="",i().s[84]++,this.node.style.top=l.bottom-a.top+t+"px",i().s[85]++,a.width<=n)return i().b[15][0]++,i().s[86]++,this.node.style.width=a.width+"px",i().s[87]++,this.node.style.left="0",void i().s[88]++
i().b[15][1]++
var c=(i().s[89]++,l.left-a.left-o),d=(i().s[90]++,parseFloat(s.marginLeft)-c),u=(i().s[91]++,c+n-(a.width-parseFloat(s.marginLeft))),h=(i().s[92]++,35)
i().s[93]++,d>h?(i().b[16][0]++,i().s[94]++,c=c+d-h):(i().b[16][1]++,i().s[95]++,u>h?(i().b[17][0]++,i().s[96]++,c=c-u+h):i().b[17][1]++),i().s[97]++,this.node.style.left=c+"px"},i().s[98]++,e.prototype.onEnterPressed=function(e){if(i().f[10]++,i().s[99]++,e.shiftKey)return i().b[18][0]++,void i().s[100]++
i().b[18][1]++,i().s[101]++,e.preventDefault(),i().s[102]++,(this.isMacOS()?(i().b[20][0]++,e.metaKey):(i().b[20][1]++,e.ctrlKey))?(i().b[19][0]++,i().s[103]++,this.close()):i().b[19][1]++
var t=(i().s[104]++,window.getSelection()),n=(i().s[105]++,i().b[22][0]++,null===t||(i().b[22][1]++,void 0===t)?void i().b[21][0]++:(i().b[21][1]++,t.getRangeAt(0)))
if(i().s[106]++,!n)return i().b[23][0]++,void i().s[107]++
i().b[23][1]++
var o=(i().s[108]++,l.isRangeAtEnd(n))
i().s[109]++,n.insertNode(r.make("br")),i().s[110]++,n.collapse(),i().s[111]++,o?(i().b[24][0]++,i().s[112]++,n.insertNode(r.make("br")),i().s[113]++,n.collapse()):i().b[24][1]++,i().s[114]++,i().b[26][0]++,null===t||(i().b[26][1]++,void 0===t)?i().b[25][0]++:(i().b[25][1]++,t.removeAllRanges()),i().s[115]++,i().b[28][0]++,null===t||(i().b[28][1]++,void 0===t)?i().b[27][0]++:(i().b[27][1]++,t.addRange(n)),i().s[116]++,this.textarea.normalize()},i().s[117]++,e.prototype.onClickOutside=function(e){i().f[11]++
var t=(i().s[118]++,null!==e.target.closest("."+s.default["ej-fn-popover"])),n=(i().s[119]++,null!==e.target.closest(".ce-inline-toolbar")),o=(i().s[120]++,e.target.dataset.tune===a.default.dataAttribute)
if(i().s[121]++,i().b[30][0]++,t||(i().b[30][1]++,n))return i().b[29][0]++,void i().s[122]++
i().b[29][1]++,i().s[123]++,i().b[32][0]++,o&&(i().b[32][1]++,e.target.textContent===this.currentNote.index.toString())?(i().b[31][0]++,i().s[124]++,this.lastNote=this.currentNote):(i().b[31][1]++,i().s[125]++,this.lastNote=null),i().s[126]++,this.close()},i().s[127]++,e.prototype.isMacOS=function(){return i().f[12]++,i().s[128]++,/Mac/.test(window.navigator.userAgent)},i().s[129]++,e}())
i().s[130]++,t.default=c},923:(e,t)=>{"use strict"
function n(){var e="/home/runner/work/footnotes-tune/footnotes-tune/src/utils.ts",t=new Function("return this")(),i="__coverage__",o=t[i]||(t[i]={})
o[e]&&"761fc240f0cf66d5ee0390a784f1563c9e7d443e"===o[e].hash||(o[e]={path:"/home/runner/work/footnotes-tune/footnotes-tune/src/utils.ts",statementMap:{0:{start:{line:2,column:0},end:{line:2,column:62}},1:{start:{line:3,column:0},end:{line:3,column:96}},2:{start:{line:11,column:19},end:{line:11,column:20}},3:{start:{line:12,column:4},end:{line:23,column:6}},4:{start:{line:13,column:19},end:{line:13,column:21}},5:{start:{line:14,column:8},end:{line:16,column:9}},6:{start:{line:14,column:22},end:{line:14,column:23}},7:{start:{line:15,column:12},end:{line:15,column:37}},8:{start:{line:17,column:18},end:{line:17,column:38}},9:{start:{line:18,column:8},end:{line:20,column:9}},10:{start:{line:19,column:12},end:{line:19,column:19}},11:{start:{line:21,column:8},end:{line:21,column:23}},12:{start:{line:22,column:8},end:{line:22,column:38}},13:{start:{line:25,column:0},end:{line:25,column:30}},14:{start:{line:32,column:4},end:{line:34,column:5}},15:{start:{line:33,column:8},end:{line:33,column:21}},16:{start:{line:35,column:4},end:{line:35,column:72}},17:{start:{line:37,column:0},end:{line:37,column:26}},18:{start:{line:45,column:20},end:{line:45,column:49}},19:{start:{line:46,column:4},end:{line:51,column:5}},20:{start:{line:48,column:12},end:{line:48,column:143}},21:{start:{line:50,column:12},end:{line:50,column:100}},22:{start:{line:52,column:4},end:{line:52,column:17}},23:{start:{line:54,column:0},end:{line:54,column:36}},24:{start:{line:61,column:20},end:{line:61,column:41}},25:{start:{line:62,column:16},end:{line:62,column:27}},26:{start:{line:63,column:4},end:{line:63,column:38}},27:{start:{line:64,column:4},end:{line:64,column:21}},28:{start:{line:65,column:4},end:{line:65,column:86}},29:{start:{line:66,column:4},end:{line:66,column:84}},30:{start:{line:68,column:0},end:{line:68,column:46}}},fnMap:{0:{name:"throttled",decl:{start:{line:10,column:9},end:{line:10,column:18}},loc:{start:{line:10,column:30},end:{line:24,column:1}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:12,column:11},end:{line:12,column:12}},loc:{start:{line:12,column:23},end:{line:23,column:5}},line:12},2:{name:"isBrTag",decl:{start:{line:31,column:9},end:{line:31,column:16}},loc:{start:{line:31,column:23},end:{line:36,column:1}},line:31},3:{name:"isRangeAtEnd",decl:{start:{line:43,column:9},end:{line:43,column:21}},loc:{start:{line:43,column:29},end:{line:53,column:1}},line:43},4:{name:"setSelectionAtEnd",decl:{start:{line:60,column:9},end:{line:60,column:26}},loc:{start:{line:60,column:36},end:{line:67,column:1}},line:60}},branchMap:{0:{loc:{start:{line:18,column:8},end:{line:20,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:20,column:9}},{start:{line:18,column:8},end:{line:20,column:9}}],line:18},1:{loc:{start:{line:32,column:4},end:{line:34,column:5}},type:"if",locations:[{start:{line:32,column:4},end:{line:34,column:5}},{start:{line:32,column:4},end:{line:34,column:5}}],line:32},2:{loc:{start:{line:35,column:11},end:{line:35,column:71}},type:"binary-expr",locations:[{start:{line:35,column:11},end:{line:35,column:46}},{start:{line:35,column:50},end:{line:35,column:71}}],line:35},3:{loc:{start:{line:46,column:4},end:{line:51,column:5}},type:"switch",locations:[{start:{line:47,column:8},end:{line:48,column:143}},{start:{line:49,column:8},end:{line:50,column:100}}],line:46},4:{loc:{start:{line:48,column:19},end:{line:48,column:142}},type:"binary-expr",locations:[{start:{line:48,column:19},end:{line:48,column:116}},{start:{line:48,column:120},end:{line:48,column:142}}],line:48},5:{loc:{start:{line:48,column:20},end:{line:48,column:95}},type:"cond-expr",locations:[{start:{line:48,column:77},end:{line:48,column:83}},{start:{line:48,column:86},end:{line:48,column:95}}],line:48},6:{loc:{start:{line:48,column:20},end:{line:48,column:74}},type:"binary-expr",locations:[{start:{line:48,column:20},end:{line:48,column:57}},{start:{line:48,column:61},end:{line:48,column:74}}],line:48},7:{loc:{start:{line:50,column:19},end:{line:50,column:99}},type:"binary-expr",locations:[{start:{line:50,column:19},end:{line:50,column:66}},{start:{line:50,column:70},end:{line:50,column:99}}],line:50},8:{loc:{start:{line:65,column:4},end:{line:65,column:85}},type:"cond-expr",locations:[{start:{line:65,column:49},end:{line:65,column:55}},{start:{line:65,column:58},end:{line:65,column:85}}],line:65},9:{loc:{start:{line:65,column:4},end:{line:65,column:46}},type:"binary-expr",locations:[{start:{line:65,column:4},end:{line:65,column:22}},{start:{line:65,column:26},end:{line:65,column:46}}],line:65},10:{loc:{start:{line:66,column:4},end:{line:66,column:83}},type:"cond-expr",locations:[{start:{line:66,column:49},end:{line:66,column:55}},{start:{line:66,column:58},end:{line:66,column:83}}],line:66},11:{loc:{start:{line:66,column:4},end:{line:66,column:46}},type:"binary-expr",locations:[{start:{line:66,column:4},end:{line:66,column:22}},{start:{line:66,column:26},end:{line:66,column:46}}],line:66}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"761fc240f0cf66d5ee0390a784f1563c9e7d443e"})
var r=o[e]
return n=function(){return r},r}function i(e){return n().f[2]++,n().s[14]++,e?(n().b[1][1]++,n().s[16]++,n().b[2][0]++,e.nodeType===Node.ELEMENT_NODE&&(n().b[2][1]++,"BR"===e.tagName)):(n().b[1][0]++,n().s[15]++,!1)}n(),n().s[0]++,Object.defineProperty(t,"__esModule",{value:!0}),n().s[1]++,t.setSelectionAtEnd=t.isRangeAtEnd=t.isBrTag=t.throttled=void 0,n().s[13]++,t.throttled=function(e,t){n().f[0]++
var i=(n().s[2]++,0)
return n().s[3]++,function(){n().f[1]++
var o=(n().s[4]++,[])
n().s[5]++
for(var r=(n().s[6]++,0);r<arguments.length;r++)n().s[7]++,o[r]=arguments[r]
var s=(n().s[8]++,(new Date).getTime())
return n().s[9]++,s-i<e?(n().b[0][0]++,void n().s[10]++):(n().b[0][1]++,n().s[11]++,i=s,n().s[12]++,t.apply(void 0,o))}},n().s[17]++,t.isBrTag=i,n().s[23]++,t.isRangeAtEnd=function(e){var t
n().f[3]++
var o=(n().s[18]++,e.commonAncestorContainer)
switch(n().s[19]++,o.nodeType){case Node.TEXT_NODE:return n().b[3][0]++,n().s[20]++,n().b[4][0]++,n().b[6][0]++,(null===(t=o.textContent)||(n().b[6][1]++,void 0===t)?void n().b[5][0]++:(n().b[5][1]++,t.length))===e.endOffset&&(n().b[4][1]++,!o.nextSibling)
case Node.ELEMENT_NODE:return n().b[3][1]++,n().s[21]++,n().b[7][0]++,o.childNodes.length===e.endOffset&&(n().b[7][1]++,!i(o.lastChild))}return n().s[22]++,!1},n().s[30]++,t.setSelectionAtEnd=function(e){n().f[4]++
var t=(n().s[24]++,window.getSelection()),i=(n().s[25]++,new Range)
n().s[26]++,i.selectNodeContents(e),n().s[27]++,i.collapse(),n().s[28]++,n().b[9][0]++,null===t||(n().b[9][1]++,void 0===t)?n().b[8][0]++:(n().b[8][1]++,t.removeAllRanges()),n().s[29]++,n().b[11][0]++,null===t||(n().b[11][1]++,void 0===t)?n().b[10][0]++:(n().b[10][1]++,t.addRange(i))}},610:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>r})
var i=n(645),o=n.n(i)()((function(e){return e[1]}))
o.push([e.id,".lSyQzULoORYZbWPw7wpzJ {\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n    padding: 2px 15px 2px 2px;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 100ms ease;\n    will-change: background-color;\n    user-select: none;\n}\n\n    .lSyQzULoORYZbWPw7wpzJ:hover:not(._3tTi7qqKkBGTFy5yt2cwrd) {\n        background: #eff2f5;\n    }\n\n    ._3TAAy9Dl1Ad-v0k7w5cKSU {\n        display: flex;\n        width: 26px;\n        height: 26px;\n        align-items: center;\n        justify-content: center;\n        margin-right: 4px;\n    }\n\n    ._3TAAy9Dl1Ad-v0k7w5cKSU svg {\n            width: 18px;\n            height: 18px;\n        }\n\n    ._361Act7Ei3Dm3WBYLAYZXh {\n        font-size: 14px;\n        line-height: 22px;\n    }\n\n    ._3tTi7qqKkBGTFy5yt2cwrd {\n        opacity: 0.7;\n        cursor: default;\n    }\n\n.Ae8ika_t55WBhIVl-zx22 {\n    position: relative;\n}\n\n",""]),o.locals={"ej-fn-tune":"lSyQzULoORYZbWPw7wpzJ","ej-fn-tune--disabled":"_3tTi7qqKkBGTFy5yt2cwrd","ej-fn-tune__icon":"_3TAAy9Dl1Ad-v0k7w5cKSU","ej-fn-tune__label":"_361Act7Ei3Dm3WBYLAYZXh","ej-fn-wrapper":"Ae8ika_t55WBhIVl-zx22"}
const r=o},104:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>r})
var i=n(645),o=n.n(i)()((function(e){return e[1]}))
o.push([e.id,"._3oDcZXO8E0qraBPo1P_DXj {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 7px 0 5px;\n    padding: 3px 6px;\n    font-size: 12px;\n    line-height: 12px;\n    font-weight: 600;\n    cursor: pointer;\n\n    background: #FFFFFF;\n    border: 1px solid #1D202B;\n    box-shadow: 0 2px 0 0 rgba(29,32,43,0.15), 0 4px 12px -3px rgba(29,32,43,0.15);\n    border-radius: 5px;\n    animation: _1Ep1vWHGVEJcBGR5ZgRHtD 150ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    will-change: transform, opacity;\n\n    user-select: none;\n}\n\n/**\n * Hack for fake cursor\n */\n.codex-editor__fake-cursor {\n    display: inline-block;\n    height: 1.15em;\n    margin-bottom: -3px;\n    margin-right: -1px;\n\n    border-left: 1px solid black;\n\n    animation: _2y50k-2EKjySv-7lnOy5w- 1s steps(2, start) infinite;\n}\n\n@keyframes _2y50k-2EKjySv-7lnOy5w- {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n\n@keyframes _1Ep1vWHGVEJcBGR5ZgRHtD {\n    from {\n        transform: translateY(-5px);\n        opacity: 0;\n    }\n}\n",""]),o.locals={"ej-fn-sup":"_3oDcZXO8E0qraBPo1P_DXj","sup-in":"_1Ep1vWHGVEJcBGR5ZgRHtD",blink:"_2y50k-2EKjySv-7lnOy5w-"}
const r=o},489:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>r})
var i=n(645),o=n.n(i)()((function(e){return e[1]}))
o.push([e.id,"._35XzWAtEYQRy6vt_xvGTEN {\n    position: absolute;\n    z-index: 3;\n    box-sizing: border-box;\n    margin-top: 10px;\n    overflow: hidden;\n\n    width: 600px;\n    overflow-y: auto;\n    padding: 9px 20px 16px 20px;\n    border-radius: 6px;\n    box-shadow: 0 3px 15px -3px rgba(13, 20, 33, 0.13);\n    border: 1px solid #EAEAEA;\n    background-color: #ffffff;\n\n    display: none;\n\n    will-change: opacity, transform;\n}\n\n    ._2IijJMDvmtVFyTKZJn_F4_ {\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: space-between;\n\n        animation: gEvjUwXzc3f-kSuktTDfa 150ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    ._35XzWAtEYQRy6vt_xvGTEN::before {\n        content: '';\n        position: absolute;\n        top: 9px;\n        left: 0;\n        z-index: 1;\n        width: 100%;\n        height: 20px;\n        background: linear-gradient(white, rgba(255, 255, 255, 0));\n\n        pointer-events: none;\n    }\n\n    ._35XzWAtEYQRy6vt_xvGTEN::after {\n        content: '';\n        position: absolute;\n        bottom: 56px;\n        width: 100%;\n        height: 20px;\n        background: linear-gradient(rgba(255, 255, 255, 0), white);\n\n        pointer-events: none;\n    }\n\n    ._1Js4hXahV3qdSHZzQ-GM-M {\n        position: relative;\n\n        min-height: 202px;\n        max-height: 425px;\n\n        align-self: stretch;\n        overflow: auto;\n\n        padding: 8px 0;\n\n        outline: none;\n        font-size: 15px;\n        letter-spacing: -0.04px;\n        line-height: 26px;\n    }\n\n    ._1Js4hXahV3qdSHZzQ-GM-M:empty::before {\n            content: attr(data-placeholder);\n            color: #707684;\n        }\n\n    ._3GCljx1UStSwn5-7a8B3OL {\n        display: flex;\n        flex-flow: row nowrap;\n        align-items: center;\n\n        padding-top: 10px;\n    }\n\n    ._2C1M2x7JQrjyRQWYCbCx1a {\n        padding: 8px 12px;\n        border-radius: 8px;\n        box-shadow: 0 2px 2px 0 rgba(18, 30, 57, 0.04);\n        border: solid 1px #e6e9eb;\n        background-color: #ffffff;\n\n        color: #1d202b;\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1em;\n\n        cursor: pointer;\n    }\n\n    ._33Mm1ls72e74_5NUEilpew {\n            margin-left: auto;\n        }\n\n    ._3QpJbM9Carv9hxUjbUnIGJ {\n        margin-left: 15px;\n\n        color: #7b7e89;\n        font-size: 13px;\n        letter-spacing: -0.08px;\n        text-align: center;\n\n        user-select: none;\n    }\n\n@keyframes gEvjUwXzc3f-kSuktTDfa {\n    from {\n        opacity: 0;\n        transform: translateY(8px);\n    }\n\n    70% {\n        opacity: 1;\n        transform: translateY(-2px);\n    }\n\n    to {\n        transform: translateY(0);\n    }\n}\n",""]),o.locals={"ej-fn-popover":"_35XzWAtEYQRy6vt_xvGTEN","ej-fn-popover--opened":"_2IijJMDvmtVFyTKZJn_F4_","fn-popover-in":"gEvjUwXzc3f-kSuktTDfa","ej-fn-popover__textarea":"_1Js4hXahV3qdSHZzQ-GM-M","ej-fn-popover__buttons":"_3GCljx1UStSwn5-7a8B3OL","ej-fn-popover__button":"_2C1M2x7JQrjyRQWYCbCx1a","ej-fn-popover__button--right":"_33Mm1ls72e74_5NUEilpew","ej-fn-popover__hint":"_3QpJbM9Carv9hxUjbUnIGJ"}
const r=o},645:e=>{"use strict"
e.exports=function(e){var t=[]
return t.toString=function(){return this.map((function(t){var n=e(t)
return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]])
var o={}
if(i)for(var r=0;r<this.length;r++){var s=this[r][0]
null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a])
i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},373:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{customAlphabet:()=>s,customRandom:()=>r,nanoid:()=>a,random:()=>o,urlAlphabet:()=>i})
let i="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",o=e=>crypto.getRandomValues(new Uint8Array(e)),r=(e,t,n)=>{let i=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*i*t/e.length)
return()=>{let r=""
for(;;){let s=n(o),a=o
for(;a--;)if(r+=e[s[a]&i]||"",r.length===t)return r}}},s=(e,t)=>r(e,t,o),a=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e))
for(;e--;){let i=63&n[e]
t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return t}},147:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
const i='<svg width="16" height="16" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">\n    <path d="M200 46h15.46c.68 0 1.353 0 2.019.005l1.98.017 1.942.027c.32.005.639.011.956.018l1.886.043.93.026 1.83.06 1.797.07 1.762.081c.872.043 1.731.09 2.579.142l1.678.108c.277.018.553.038.827.058l1.63.123 1.6.135c.528.046 1.05.095 1.569.145l1.54.155.759.082 1.496.171c.494.059.984.12 1.47.182l1.441.192c6.667.921 12.475 2.183 17.754 3.773l1.123.345c1.302.41 2.571.839 3.815 1.289l1.059.39c.35.132.7.266 1.047.401l1.035.41c.344.139.685.279 1.025.42l1.015.43 1.005.44.997.45.495.229.985.464.979.474.972.483.484.246.964.498.96.508c15.97 8.54 28.504 21.074 37.045 37.045l.508.96.498.964.489.97.24.486.474.979.464.985.455.993c.075.166.15.332.223.499l.44 1.005.43 1.015c.142.34.282.681.42 1.025l.41 1.035c.136.347.27.696.401 1.047l.391 1.06c.45 1.243.88 2.512 1.289 3.814l.345 1.123c1.59 5.279 2.852 11.087 3.773 17.754l.192 1.442.092.73.177 1.484c.028.249.057.5.084.751l.161 1.526c.078.77.152 1.55.221 2.342l.135 1.6.123 1.63c.02.274.04.55.058.827l.108 1.678c.034.565.067 1.136.097 1.711l.087 1.745.04.885.07 1.796.06 1.832.048 1.867.02.948.033 1.923c.004.323.009.648.012.975l.017 1.98.005 2.019v72.92l-.005 2.019-.017 1.98-.027 1.942c-.005.32-.011.639-.018.956l-.043 1.886-.026.93-.06 1.83-.07 1.797-.081 1.762c-.043.872-.09 1.731-.142 2.579l-.108 1.678c-.018.277-.038.553-.058.827l-.123 1.63-.135 1.6c-.046.528-.095 1.05-.145 1.569l-.155 1.54-.082.759-.171 1.496c-.059.494-.12.984-.182 1.47l-.192 1.441c-.921 6.667-2.183 12.475-3.773 17.754l-.345 1.123a94.514 94.514 0 01-1.289 3.815l-.39 1.059c-.132.35-.266.7-.401 1.047l-.41 1.035a93.96 93.96 0 01-.42 1.025l-.43 1.015-.44 1.005-.45.997-.229.495-.464.985-.474.979-.483.972-.246.484-.498.964-.508.96c-8.54 15.97-21.074 28.504-37.045 37.045l-.96.508-.964.498-.97.489-.486.24-.979.474-.985.464-.993.455c-.166.075-.332.15-.499.223l-1.005.44-1.015.43c-.34.142-.681.282-1.025.42l-1.035.41c-.347.136-.696.27-1.047.401l-1.06.391c-1.243.45-2.512.88-3.814 1.289l-1.123.345c-5.279 1.59-11.087 2.852-17.754 3.773l-1.442.192-.73.092-1.484.177c-.249.028-.5.057-.751.084l-1.526.161c-.77.078-1.55.152-2.342.221l-1.6.135-1.63.123c-.274.02-.55.04-.827.058l-1.678.108c-.565.034-1.136.067-1.711.097l-1.745.087-.885.04-1.796.07-1.832.06-1.867.048-.948.02-1.923.033c-.323.004-.648.009-.975.012l-1.98.017-2.019.005h-30.92l-2.019-.005-1.98-.017-1.942-.027c-.32-.005-.639-.011-.956-.018l-1.886-.043-.93-.026-1.83-.06-1.797-.07-1.762-.081c-.872-.043-1.731-.09-2.579-.142l-1.678-.108c-.277-.018-.553-.038-.827-.058l-1.63-.123-1.6-.135a187.24 187.24 0 01-1.569-.145l-1.54-.155-.759-.082-1.496-.171c-.494-.059-.984-.12-1.47-.182l-1.441-.192c-6.667-.921-12.475-2.183-17.754-3.773l-1.123-.345a94.514 94.514 0 01-3.815-1.289l-1.059-.39c-.35-.132-.7-.266-1.047-.401l-1.035-.41a93.948 93.948 0 01-1.025-.42l-1.015-.43-1.005-.44-.997-.45-.495-.229-.985-.464-.979-.474-.972-.483-.484-.246-.964-.498-.96-.508c-15.97-8.54-28.504-21.074-37.045-37.045l-.508-.96-.498-.964-.489-.97-.24-.486-.474-.979-.464-.985-.455-.993a96.91 96.91 0 01-.223-.499l-.44-1.005-.43-1.015c-.142-.34-.282-.681-.42-1.025l-.41-1.035a93.252 93.252 0 01-.401-1.047l-.391-1.06a94.514 94.514 0 01-1.289-3.814l-.345-1.123c-1.59-5.279-2.852-11.087-3.773-17.754l-.192-1.442a157.65 157.65 0 01-.092-.73l-.177-1.484c-.028-.249-.057-.5-.084-.751l-.161-1.526c-.078-.77-.152-1.55-.221-2.342l-.135-1.6-.123-1.63c-.02-.274-.04-.55-.058-.827l-.108-1.678c-.034-.565-.067-1.136-.097-1.711l-.087-1.745a256.59 256.59 0 01-.04-.885l-.07-1.796-.06-1.832-.048-1.867-.02-.948-.033-1.923a336 336 0 01-.012-.975l-.017-1.98c-.001-.333-.005-.668-.005-1.005V197h40v40.661l.008 1.501.013 1.465.02 1.429.026 1.394.033 1.361.04 1.328.046 1.295.026.635.087 1.86.065 1.202.073 1.173.078 1.144.086 1.116.091 1.088.098 1.062.052.521.108 1.024.114.998.12.975c.02.16.042.32.063.478l.13.94.136.918.07.45.147.886.152.865.158.846.165.826.17.809.178.79.183.775c.03.128.062.255.094.381l.192.75.099.37.202.729.208.714.214.702.22.689.226.677.233.667.238.656.245.647.25.638.257.63.262.623.269.617.274.61.28.606.287.601.44.896.302.593.307.592.313.59c5.316 9.942 13.117 17.743 23.058 23.06l.591.312.592.307.593.301.896.441.601.286.606.28.61.275.617.269.623.262.63.257.638.25.647.245.656.238.667.233.677.226.69.22.7.214.715.208.729.202.743.196c.25.064.503.127.758.19l.774.182.791.178.809.17.826.165.846.158.865.152.886.146.907.14.461.067.94.13.963.124.986.117 1.526.164 1.049.101 1.075.095 1.102.089 1.13.082 1.158.075 1.187.07 1.217.062 1.248.056 1.279.05 1.311.043 1.344.036 1.378.03 1.411.023 1.447.017 2.238.012h33.322l1.516-.007 1.479-.013 1.443-.02 1.407-.028 1.373-.033 1.339-.04 1.306-.048 1.274-.054 1.851-.093 1.197-.07 1.166-.077 1.138-.084 1.11-.09.544-.048 1.069-.1 1.042-.107 1.017-.113.992-.12.968-.125.945-.133.922-.139.453-.072.89-.149.87-.155.849-.161.83-.168.812-.174.794-.18.778-.188.761-.193.746-.2.731-.205.718-.212.704-.219.692-.224.68-.23.67-.238.66-.243.65-.25.64-.255.634-.261.627-.268.62-.274.614-.28.913-.43.604-.296.6-.3.6-.308.597-.313.298-.159c9.94-5.316 17.742-13.117 23.058-23.058l.313-.591.307-.592.301-.593.441-.896.286-.601.28-.606.275-.61.269-.617.262-.623.257-.63.25-.638.245-.647.238-.656.233-.667.226-.677.22-.69.214-.7.208-.715.202-.729.196-.743c.064-.25.127-.503.19-.758l.182-.774.178-.791.17-.809.165-.826.158-.846.152-.865.146-.886.14-.907.067-.461.13-.94.124-.963.117-.986.164-1.526.101-1.049.095-1.075.089-1.102.082-1.13.075-1.158.07-1.187.062-1.217.056-1.248.05-1.279.043-1.311.036-1.344.03-1.378.023-1.411.017-1.447.012-2.238V162.34l-.007-1.516-.013-1.479-.02-1.443-.028-1.407-.033-1.373-.04-1.339-.048-1.306-.054-1.274-.093-1.851-.07-1.197-.077-1.166-.084-1.138-.09-1.11-.048-.544-.1-1.069-.107-1.042-.113-1.017-.12-.992-.125-.968-.133-.945-.139-.922a86.304 86.304 0 00-.072-.453l-.149-.89-.155-.87-.161-.849-.168-.83-.174-.812-.18-.794-.188-.778-.193-.761-.2-.746-.205-.731-.212-.718-.219-.704-.224-.692-.23-.68-.238-.67-.243-.66-.25-.65-.255-.64-.261-.634-.268-.627-.274-.62-.28-.614-.43-.913-.296-.604-.3-.6-.308-.6-.313-.597-.159-.298c-5.316-9.94-13.117-17.742-23.058-23.058l-.585-.31-.586-.304-.587-.298-.59-.293-.593-.287-.597-.28-.602-.275-.607-.27a56.729 56.729 0 00-.305-.132l-.617-.26-.623-.255-.314-.125-.635-.246-.32-.12-.65-.237-.658-.231-.333-.113-.674-.222-.686-.216-.699-.21-.711-.204-.726-.198-.74-.192-.375-.094-.763-.182-.779-.177-.796-.17-.814-.165-.832-.159-.423-.076-.86-.15-.882-.143-.902-.136-.923-.131-.946-.124-.969-.119-.992-.112-1.017-.105-1.042-.1-.53-.047-1.081-.09-1.108-.084-.564-.04-1.15-.073-1.177-.068-1.207-.061-1.238-.055-1.268-.05-1.3-.041-1.331-.036-1.365-.03-1.398-.022-1.433-.017-1.467-.01-.763-.002L200 86V46zm-62.705-3.874c5.1 0 7.427 1.052 9.32 3.213 1.821 2.078 2.767 4.91 2.837 8.499l.004.434v90.52c0 10.594-4.054 15.89-12.161 15.89-3.61 0-9.51-1.08-11.7-3.24-2.113-2.087-3.207-5.131-3.28-9.134l-.003-.432V75.934l-1.208.96-1.176.925-1.703 1.328-1.633 1.254-1.565 1.181-1.008.747-.492.361-.965.699-.472.337-.923.65-.897.62-.439.297-.858.571c-.141.093-.28.184-.42.274l-.82.524-.402.25-.785.478c-8.764 5.233-13.075 4.478-17.093-1.39-2.895-4.229 2.834-11.931 10.26-19.34l.918-.906.464-.451.937-.899.948-.891.954-.883.959-.874.48-.432.96-.856.956-.842.952-.827 1.41-1.208.925-.782 1.357-1.134 1.312-1.083 1.259-1.025 1.951-1.57 1.405-1.115 2.744-2.16c4.879-3.841 8.558-5.526 12.052-6.198l.58-.103.58-.086c.384-.05.769-.091 1.153-.122l.578-.04c.29-.017.579-.029.87-.036l.584-.01.294-.001z"/>\n</svg>\n'},816:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var i=n(379),o=n.n(i),r=n(610)
o()(r.Z,{insert:"head",singleton:!1})
const s=r.Z.locals||{}},106:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var i=n(379),o=n.n(i),r=n(104)
o()(r.Z,{insert:"head",singleton:!1})
const s=r.Z.locals||{}},712:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>s})
var i=n(379),o=n.n(i),r=n(489)
o()(r.Z,{insert:"head",singleton:!1})
const s=r.Z.locals||{}},379:(e,t,n)=>{"use strict"
var i,o=function(){var e={}
return function(t){if(void 0===e[t]){var n=document.querySelector(t)
if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[]
function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n
break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=n[l]||0,d="".concat(l," ").concat(c)
n[l]=c+1
var u=s(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:m(h,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{}
if(void 0===i.nonce){var r=n.nc
r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t)
else{var s=o(e.insert||"head")
if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
s.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")})
function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css
if(e.styleSheet)e.styleSheet.cssText=d(t,o)
else{var r=document.createTextNode(o),s=e.childNodes
s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap
if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(i))}}var p=null,f=0
function m(e,t){var n,i,o
if(t.singleton){var r=f++
n=p||(p=l(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=l(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)}(n)}
return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i))
var n=a(e=e||[],t)
return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i])
r[o].references--}for(var l=a(e,t),c=0;c<n.length;c++){var d=s(n[c])
0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=l}}}}},t={}
function n(i){var o=t[i]
if(void 0!==o)return o.exports
var r=t[i]={id:i,exports:{}}
return e[i].call(r.exports,r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(343).default})()},3565:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
return class{constructor({data:e,config:t,api:n,readOnly:i}){this.api=n,this.readOnly=i,this._settings=t,this._data=this.normalizeData(e),this._element=this.getTag()}get _CSS(){return{block:this.api.styles.block,wrapper:"ce-header"}}isHeaderData(e){return void 0!==e.text}normalizeData(e){const t={text:"",level:this.defaultLevel.number}
return this.isHeaderData(e)&&(t.text=e.text||"",void 0!==e.level&&!isNaN(parseInt(e.level.toString()))&&(t.level=parseInt(e.level.toString()))),t}render(){return this._element}renderSettings(){return this.levels.map((e=>({icon:e.svg,label:this.api.i18n.t(`Heading ${e.number}`),onActivate:()=>this.setLevel(e.number),closeOnActivate:!0,isActive:this.currentLevel.number===e.number,render:()=>document.createElement("div")})))}setLevel(e){this.data={level:e,text:this.data.text}}merge(e){this._element.insertAdjacentHTML("beforeend",e.text)}validate(e){return""!==e.text.trim()}save(e){return{text:e.innerHTML,level:this.currentLevel.number}}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{level:!1,text:{}}}static get isReadOnlySupported(){return!0}get data(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data}set data(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){const e=this.getTag()
e.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(e,this._element),this._element=e}void 0!==e.text&&(this._element.innerHTML=this._data.text||"")}getTag(){const e=document.createElement(this.currentLevel.tag)
return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e}get currentLevel(){let e=this.levels.find((e=>e.number===this._data.level))
return e||(e=this.defaultLevel),e}get defaultLevel(){if(this._settings.defaultLevel){const e=this.levels.find((e=>e.number===this._settings.defaultLevel))
if(e)return e
console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}get levels(){const e=[{number:1,tag:"H1",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>'},{number:2,tag:"H2",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>'},{number:3,tag:"H3",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>'},{number:4,tag:"H4",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>'},{number:5,tag:"H5",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>'},{number:6,tag:"H6",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>'}]
return this._settings.levels?e.filter((e=>this._settings.levels.includes(e.number))):e}onPaste(e){const t=e.detail
if("data"in t){const e=t.data
let n=this.defaultLevel.number
switch(e.tagName){case"H1":n=1
break
case"H2":n=2
break
case"H3":n=3
break
case"H4":n=4
break
case"H5":n=5
break
case"H6":n=6}this._settings.levels&&(n=this._settings.levels.reduce(((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e))),this.data={level:n,text:e.innerHTML}}}static get pasteConfig(){return{tags:["H1","H2","H3","H4","H5","H6"]}}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>',title:"Heading"}}}}()},6219:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{display:none!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{display:block}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
const e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>'
function t(e,t=null,n={}){const i=document.createElement(e)
Array.isArray(t)?i.classList.add(...t):null!==t&&i.classList.add(t)
for(const o in n)n.hasOwnProperty(o)&&(i[o]=n[o])
return i}var n,i=((n=i||{}).Empty="empty",n.Uploading="uploading",n.Filled="filled",n)
class o{constructor({api:e,config:n,onSelectFile:i,readOnly:o}){this.api=e,this.config=n,this.onSelectFile=i,this.readOnly=o,this.nodes={wrapper:t("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:t("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:t("div",this.CSS.imagePreloader),caption:t("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}applyTune(e,t){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`,t)}render(e){return void 0===e.file||0===Object.keys(e.file).length?this.toggleStatus("empty"):this.toggleStatus("uploading"),this.nodes.wrapper}showPreloader(e){this.nodes.imagePreloader.style.backgroundImage=`url(${e})`,this.toggleStatus("uploading")}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus("empty")}fillImage(e){const n=/\.mp4$/.test(e)?"VIDEO":"IMG",i={src:e}
let o="load"
"VIDEO"===n&&(i.autoplay=!0,i.loop=!0,i.muted=!0,i.playsinline=!0,o="loadeddata"),this.nodes.imageEl=t(n,this.CSS.imageEl,i),this.nodes.imageEl.addEventListener(o,(()=>{this.toggleStatus("filled"),void 0!==this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}fillCaption(e){void 0!==this.nodes.caption&&(this.nodes.caption.innerHTML=e)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}createFileButton(){const n=t("div",[this.CSS.button])
return n.innerHTML=this.config.buttonContent??`${e} ${this.api.i18n.t("Select an Image")}`,n.addEventListener("click",(()=>{this.onSelectFile()})),n}toggleStatus(e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i[t]}`,e===i[t])}}var r={exports:{}}
!function(e){var t
window,t=function(){return function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch{"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){var i=n(2),o=setTimeout
function r(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function a(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,s._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var i
try{i=n(e._value)}catch(e){return void c(t.promise,e)}l(t.promise,i)}else(1===e._state?l:c)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof s)return e._state=3,e._value=t,void d(e)
if("function"==typeof n)return void h((i=n,o=t,function(){i.apply(o,arguments)}),e)}e._state=1,e._value=t,d(e)}catch(t){c(e,t)}var i,o}function c(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&s._immediateFn((function(){e._handled||s._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t])
e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1
try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return
n=!0,c(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var n=new this.constructor(r)
return a(this,new u(e,t,n)),n},s.prototype.finally=i.a,s.all=function(e){return new s((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array")
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then
if("function"==typeof a)return void a.call(s,(function(t){r(e,t)}),n)}i[e]=s,0==--o&&t(i)}catch(e){n(e)}}for(var s=0;s<i.length;s++)r(s,i[s])}))},s.resolve=function(e){return e&&"object"==typeof e&&e.constructor===s?e:new s((function(t){t(e)}))},s.reject=function(e){return new s((function(t,n){n(e)}))},s.race=function(e){return new s((function(t,n){for(var i=0,o=e.length;i<o;i++)e[i].then(t,n)}))},s._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},s._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=s}).call(this,n(5).setImmediate)},function(e,t,n){t.a=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4)
var o,r,s,a,l,c,d,u=n(8),h=(r=function(e){return new Promise((function(t,n){e=a(e),(e=l(e)).beforeSend&&e.beforeSend()
var i=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")
i.open(e.method,e.url),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t]
i.setRequestHeader(t,n)}))
var o=e.ratio
i.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),i=Math.ceil(n*o/100)
e.progress(Math.min(i,100))}),!1),i.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),i=Math.ceil(n*(100-o)/100)+o
e.progress(Math.min(i,100))}),!1),i.onreadystatechange=function(){if(4===i.readyState){var e=i.response
try{e=JSON.parse(e)}catch{}var o=u.parseHeaders(i.getAllResponseHeaders()),r={body:e,code:i.status,headers:o}
d(i.status)?t(r):n(r)}},i.send(e.data)}))},s=function(e){return e.method="POST",r(e)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string")
if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null")
if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==i(e.headers))throw new Error("`headers` must be an object or null")
if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library")
if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null")
if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number")
if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval")
if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types")
if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false")
if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string")
return e.fieldName=e.fieldName||"files",e},l=function(e){switch(e.method){case"GET":var t=c(e.data,o.URLENCODED)
delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t
break
case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(u.isFormData(e.data)||u.isFormElement(e.data))&&(n=o.FORM),e.data=c(e.data,n),n!==h.contentType.FORM&&(e.headers["content-type"]=n)}return e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return u.urlEncode(e)
case o.JSON:return u.jsonEncode(e)
case o.FORM:return u.formEncode(e)
default:return e}},d=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:r,get:function(e){return e.method="GET",r(e)},post:s,transport:function(e){return e=a(e),u.selectFiles(e).then((function(t){for(var n=new FormData,i=0;i<t.length;i++)n.append(e.fieldName,t[i],t[i].name)
u.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var i=e.data[t]
n.append(t,i)}))
var o=e.beforeSend
return e.beforeSend=function(){return o(t)},e.data=n,s(e)}))},selectFiles:function(e){return delete(e=a(e)).beforeSend,u.selectFiles(e)}})
e.exports=h},function(e,t,n){n.r(t)
var i=n(1)
window.Promise=window.Promise||i.a},function(e,t,n){(function(e){var i=void 0!==e&&e||typeof self<"u"&&self||window,o=Function.prototype.apply
function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate=typeof self<"u"&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate=typeof self<"u"&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e){if(!e.setImmediate){var n,i,o,r,s,a=1,l={},c=!1,d=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e)
u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage
return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(r="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&p(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(r+t,"*")}):e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},n=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,n=function(e){var t=d.createElement("script")
t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):n=function(e){setTimeout(p,0,e)},u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1]
var o={callback:e,args:t}
return l[a]=o,n(a),a++},u.clearImmediate=h}function h(e){delete l[e]}function p(e){if(c)setTimeout(p,0,e)
else{var t=l[e]
if(t){c=!0
try{!function(e){var t=e.callback,n=e.args
switch(n.length){case 0:t()
break
case 1:t(n[0])
break
case 2:t(n[0],n[1])
break
case 3:t(n[0],n[1],n[2])
break
default:t.apply(void 0,n)}}(t)}finally{h(e),c=!1}}}}}(typeof self>"u"?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,i,o=e.exports={}
function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0)
if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0)
try{return n(e,0)}catch{try{return n.call(null,e,0)}catch{return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch{n=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch{i=s}}()
var l,c=[],d=!1,u=-1
function h(){d&&l&&(d=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!d){var e=a(h)
d=!0
for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run()
u=-1,t=c.length}l=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e)
if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e)
try{i(e)}catch{try{return i.call(null,e)}catch{return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
c.push(new f(e,t)),1!==c.length||d||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=n(9)
e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n
return t=e,n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e
if(this.isFormElement(e))return new FormData(e)
if(this.isObject(e)){var t=new FormData
return Object.keys(e).forEach((function(n){var i=e[n]
t.append(n,i)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Promise((function(t,n){var i=document.createElement("INPUT")
i.type="file",e.multiple&&i.setAttribute("multiple","multiple"),e.accept&&i.setAttribute("accept",e.accept),i.style.display="none",document.body.appendChild(i),i.addEventListener("change",(function(e){var n=e.target.files
t(n),document.body.removeChild(i)}),!1),i.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={}
return t.forEach((function(e){var t=e.split(": "),i=t.shift(),o=t.join(": ")
i&&(n[i]=o)})),n}}],n&&i(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},i=function(e,t,o,r){return t=t||null,o=o||"&",r=r||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n])
return t}(Object.keys(e).map((function(s){var a,l,c=s
if(r&&(c=r+"["+c+"]"),"object"==typeof e[s]&&null!==e[s])a=i(e[s],null,o,c)
else{t&&(l=c,c=!isNaN(parseFloat(l))&&isFinite(l)?t+Number(c):c)
var d=e[s]
d=(d=0===(d=!1===(d=!0===d?"1":d)?"0":d)?"0":d)||"",a=n(c)+"="+n(d)}return a}))).join(o).replace(/[!'()*]/g,""):""}
e.exports=i}])},e.exports=t()}(r)
const s=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(r.exports)
function a(e){return void 0!==e&&"function"==typeof e.then}class l{constructor({config:e,onUpload:t,onError:n}){this.config=e,this.onUpload=t,this.onError=n}uploadSelectedFile({onPreview:e}){const t=function(t){const n=new FileReader
n.readAsDataURL(t),n.onload=t=>{e(t.target.result)}}
let n
if(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile){const e=this.config.uploader.uploadByFile
n=s.selectFiles({accept:this.config.types??"image/*"}).then((n=>{t(n[0])
const i=e(n[0])
return a(i)||console.warn("Custom uploader method uploadByFile should return a Promise"),i}))}else n=s.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types??"image/*",headers:this.config.additionalRequestHeaders,beforeSend:e=>{t(e[0])},fieldName:this.config.field??"image"}).then((e=>e.body))
n.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}uploadByUrl(e){let t
this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?(t=this.config.uploader.uploadByUrl(e),a(t)||console.warn("Custom uploader method uploadByUrl should return a Promise")):t=s.post({url:this.config.endpoints.byUrl,data:Object.assign({url:e},this.config.additionalRequestData),type:s.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((e=>e.body)),t.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}uploadByFile(e,{onPreview:t}){const n=new FileReader
let i
if(n.readAsDataURL(e),n.onload=e=>{t(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)i=this.config.uploader.uploadByFile(e),a(i)||console.warn("Custom uploader method uploadByFile should return a Promise")
else{const t=new FormData
t.append(this.config.field??"image",e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((([e,n])=>{t.append(e,n)})),i=s.post({url:this.config.endpoints.byFile,data:t,type:s.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((e=>e.body))}i.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}}class c{constructor({data:e,config:t,api:n,readOnly:i,block:r}){this.api=n,this.block=r,this.config={endpoints:t.endpoints,additionalRequestData:t.additionalRequestData,additionalRequestHeaders:t.additionalRequestHeaders,field:t.field,types:t.types,captionPlaceholder:this.api.i18n.t(t.captionPlaceholder??"Caption"),buttonContent:t.buttonContent,uploader:t.uploader,actions:t.actions,features:t.features||{}},this.uploader=new l({config:this.config,onUpload:e=>this.onUpload(e),onError:e=>this.uploadingFailed(e)}),this.ui=new o({api:n,config:this.config,onSelectFile:()=>{this.uploader.uploadSelectedFile({onPreview:e=>{this.ui.showPreloader(e)}})},readOnly:i}),this._data={caption:"",withBorder:!1,withBackground:!1,stretched:!1,file:{url:""}},this.data=e}static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:e,title:"Image"}}static get tunes(){return[{name:"withBorder",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',title:"With border",toggle:!0},{name:"stretched",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',title:"Stretch image",toggle:!0},{name:"withBackground",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',title:"With background",toggle:!0}]}render(){var e,t,n
return(!0===(null==(e=this.config.features)?void 0:e.caption)||void 0===(null==(t=this.config.features)?void 0:t.caption)||"optional"===(null==(n=this.config.features)?void 0:n.caption)&&this.data.caption)&&this.ui.applyTune("caption",!0),this.ui.render(this.data)}validate(e){return!!e.file.url}save(){const e=this.ui.nodes.caption
return this._data.caption=e.innerHTML,this.data}renderSettings(){var e
const t=c.tunes.concat(this.config.actions||[]),n={border:"withBorder",background:"withBackground",stretch:"stretched",caption:"caption"}
return"optional"===(null==(e=this.config.features)?void 0:e.caption)&&t.push({name:"caption",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>',title:"With caption",toggle:!0}),t.filter((e=>{var t,i
const o=Object.keys(n).find((t=>n[t]===e.name))
return"caption"===o?!1!==(null==(t=this.config.features)?void 0:t.caption):null==o||!1!==(null==(i=this.config.features)?void 0:i[o])})).map((e=>({icon:e.icon,label:this.api.i18n.t(e.title),name:e.name,toggle:e.toggle,isActive:this.data[e.name],onActivate:()=>{"function"!=typeof e.action?this.tuneToggled(e.name):e.action(e.name)}})))}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:[{img:{src:!0}}],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i},files:{mimeTypes:["image/*"]}}}async onPaste(e){switch(e.type){case"tag":{const t=e.detail.data
if(/^blob:/.test(t.src)){const e=await(await fetch(t.src)).blob()
this.uploadFile(e)
break}this.uploadUrl(t.src)
break}case"pattern":{const t=e.detail.data
this.uploadUrl(t)
break}case"file":{const t=e.detail.file
this.uploadFile(t)
break}}}set data(e){this.image=e.file,this._data.caption=e.caption||"",this.ui.fillCaption(this._data.caption),c.tunes.forEach((({name:t})=>{const n=typeof e[t]<"u"&&(!0===e[t]||"true"===e[t])
this.setTune(t,n)}))}get data(){return this._data}set image(e){this._data.file=e||{url:""},e&&e.url&&this.ui.fillImage(e.url)}onUpload(e){e.success&&e.file?this.image=e.file:this.uploadingFailed("incorrect response: "+JSON.stringify(e))}uploadingFailed(e){console.log("Image Tool: uploading failed because of",e),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}tuneToggled(e){this.setTune(e,!this._data[e]),"caption"===e&&!this._data[e]&&(this._data.caption="",this.ui.fillCaption(""))}setTune(e,t){this._data[e]=t,this.ui.applyTune(e,t),"stretched"===e&&Promise.resolve().then((()=>{this.block.stretched=t})).catch((e=>{console.error(e)}))}uploadFile(e){this.uploader.uploadByFile(e,{onPreview:e=>{this.ui.showPreloader(e)}})}uploadUrl(e){this.ui.showPreloader(e),this.uploader.uploadByUrl(e)}}return c}()},6420:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
const e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>',n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>'
var i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o={},r={},s={}
Object.defineProperty(s,"__esModule",{value:!0}),s.allInputsSelector=function(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(e){return'input[type="'.concat(e,'"]')})).join(", ")},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.allInputsSelector=void 0
var t=s
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})}(r)
var a={},l={}
Object.defineProperty(l,"__esModule",{value:!0}),l.isNativeInput=function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNativeInput=void 0
var t=l
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return t.isNativeInput}})}(a)
var c={},d={}
Object.defineProperty(d,"__esModule",{value:!0}),d.append=function(e,t){Array.isArray(t)?t.forEach((function(t){e.appendChild(t)})):e.appendChild(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.append=void 0
var t=d
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return t.append}})}(c)
var u={},h={}
Object.defineProperty(h,"__esModule",{value:!0}),h.blockElements=function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.blockElements=void 0
var t=h
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return t.blockElements}})}(u)
var p={},f={}
Object.defineProperty(f,"__esModule",{value:!0}),f.calculateBaseline=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.fontSize),i=parseFloat(t.lineHeight)||1.2*n,o=parseFloat(t.paddingTop),r=parseFloat(t.borderTopWidth)
return parseFloat(t.marginTop)+r+o+(i-n)/2+.8*n},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateBaseline=void 0
var t=f
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return t.calculateBaseline}})}(p)
var m={},g={},b={},v={}
Object.defineProperty(v,"__esModule",{value:!0}),v.isContentEditable=function(e){return"true"===e.contentEditable},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isContentEditable=void 0
var t=v
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return t.isContentEditable}})}(b),Object.defineProperty(g,"__esModule",{value:!0}),g.canSetCaret=function(e){var t=!0
if((0,y.isNativeInput)(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=(0,w.isContentEditable)(e)
return t}
var y=a,w=b
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.canSetCaret=void 0
var t=g
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return t.canSetCaret}})}(m)
var k={},_={}
function x(){const e={win:!1,mac:!1,x11:!1,linux:!1},t=Object.keys(e).find((e=>-1!==window.navigator.appVersion.toLowerCase().indexOf(e)))
return void 0!==t&&(e[t]=!0),e}function C(e){return null!=e&&""!==e&&("object"!=typeof e||Object.keys(e).length>0)}function E(e){return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function S(e){return"function"===E(e)||"asyncfunction"===E(e)}function T(e){return"object"===E(e)}const O=function(e){if(e.__esModule)return e
var t=e.default
if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}(Object.freeze(Object.defineProperty({__proto__:null,PromiseQueue:class{constructor(){this.completed=Promise.resolve()}add(e){return new Promise(((t,n)=>{this.completed=this.completed.then(e).then(t).catch(n)}))}},beautifyShortcut:function(e){const t=x()
return e=e.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi,"+"),t.mac?e.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):e.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},cacheable:function(e,t,n){const i=void 0!==n.value?"value":"get",o=n[i],r=`#${t}Cache`
if(n[i]=function(...e){return void 0===this[r]&&(this[r]=o.apply(this,e)),this[r]},"get"===i&&n.set){const t=n.set
n.set=function(n){delete e[r],t.apply(this,n)}}return n},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)},copyTextToClipboard:function(e){const t=document.createElement("div")
t.style.position="absolute",t.style.left="-999px",t.style.bottom="-999px",t.innerHTML=e,document.body.appendChild(t)
const n=window.getSelection(),i=document.createRange()
if(i.selectNode(t),null===n)throw new Error("Cannot copy text to clipboard")
n.removeAllRanges(),n.addRange(i),document.execCommand("copy"),document.body.removeChild(t)},debounce:function(e,t,n){let i
return(...o)=>{const r=this,s=!0===n&&void 0!==i
window.clearTimeout(i),i=window.setTimeout((()=>{i=void 0,!0!==n&&e.apply(r,o)}),t),s&&e.apply(r,o)}},deepMerge:function e(t,...n){if(!n.length)return t
const i=n.shift()
if(T(t)&&T(i))for(const o in i)T(i[o])?(void 0===t[o]&&Object.assign(t,{[o]:{}}),e(t[o],i[o])):Object.assign(t,{[o]:i[o]})
return e(t,...n)},deprecationAssert:function(e,t,n){const i=`«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`
e&&console.warn(i)},getUserOS:x,getValidUrl:function(e){try{return new URL(e).href}catch{}return"//"===e.substring(0,2)?window.location.protocol+e:window.location.origin+e},isBoolean:function(e){return"boolean"===E(e)},isClass:function(e){return S(e)&&/^\s*class\s+/.test(e.toString())},isEmpty:function(e){return!C(e)},isFunction:S,isIosDevice:()=>typeof window<"u"&&null!==window.navigator&&C(window.navigator.platform)&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),isNumber:function(e){return"number"===E(e)},isObject:T,isPrintableKey:function(e){return e>47&&e<58||32===e||13===e||229===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223},isPromise:function(e){return Promise.resolve(e)===e},isString:function(e){return"string"===E(e)},isUndefined:function(e){return"undefined"===E(e)},keyCodes:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},mouseButtons:{LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},notEmpty:C,throttle:function(e,t,n=void 0){let i,o,r,s=null,a=0
n||(n={})
const l=function(){a=!1===n.leading?0:Date.now(),s=null,r=e.apply(i,o),null===s&&(i=o=null)}
return function(){const c=Date.now()
!a&&!1===n.leading&&(a=c)
const d=t-(c-a)
return i=this,o=arguments,d<=0||d>t?(s&&(clearTimeout(s),s=null),a=c,r=e.apply(i,o),null===s&&(i=o=null)):!s&&!1!==n.trailing&&(s=setTimeout(l,d)),r}},typeOf:E},Symbol.toStringTag,{value:"Module"})))
Object.defineProperty(_,"__esModule",{value:!0}),_.containsOnlyInlineElements=function(e){var t;(0,M.isString)(e)?(t=document.createElement("div")).innerHTML=e:t=e
var n=function(e){return!(0,A.blockElements)().includes(e.tagName.toLowerCase())&&Array.from(e.children).every(n)}
return Array.from(t.children).every(n)}
var M=O,A=u
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.containsOnlyInlineElements=void 0
var t=_
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return t.containsOnlyInlineElements}})}(k)
var R={},I={},B={},P={}
Object.defineProperty(P,"__esModule",{value:!0}),P.make=function(e,t,n){var i
void 0===t&&(t=null),void 0===n&&(n={})
var o=document.createElement(e)
if(Array.isArray(t)){var r=t.filter((function(e){return void 0!==e}));(i=o.classList).add.apply(i,r)}else null!==t&&o.classList.add(t)
for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])
return o},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.make=void 0
var t=P
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return t.make}})}(B),Object.defineProperty(I,"__esModule",{value:!0}),I.fragmentToString=function(e){var t=(0,L.make)("div")
return t.appendChild(e),t.innerHTML}
var L=B
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fragmentToString=void 0
var t=I
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return t.fragmentToString}})}(R)
var j={},N={}
Object.defineProperty(N,"__esModule",{value:!0}),N.getContentLength=function(e){var t,n
return(0,D.isNativeInput)(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:null!==(n=null===(t=e.textContent)||void 0===t?void 0:t.length)&&void 0!==n?n:0}
var D=a
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContentLength=void 0
var t=N
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return t.getContentLength}})}(j)
var F={},z={},H=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(z,"__esModule",{value:!0}),z.getDeepestBlockElements=function e(t){return(0,U.containsOnlyInlineElements)(t)?[t]:Array.from(t.children).reduce((function(t,n){return H(H([],t,!0),e(n),!0)}),[])}
var U=k
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestBlockElements=void 0
var t=z
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return t.getDeepestBlockElements}})}(F)
var q={},$={},W={},K={}
Object.defineProperty(K,"__esModule",{value:!0}),K.isLineBreakTag=function(e){return["BR","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLineBreakTag=void 0
var t=K
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return t.isLineBreakTag}})}(W)
var V={},Y={}
Object.defineProperty(Y,"__esModule",{value:!0}),Y.isSingleTag=function(e){return["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isSingleTag=void 0
var t=Y
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return t.isSingleTag}})}(V),Object.defineProperty($,"__esModule",{value:!0}),$.getDeepestNode=function e(t,n){void 0===n&&(n=!1)
var i=n?"lastChild":"firstChild",o=n?"previousSibling":"nextSibling"
if(t.nodeType===Node.ELEMENT_NODE&&t[i]){var r=t[i]
if((0,Z.isSingleTag)(r)&&!(0,X.isNativeInput)(r)&&!(0,G.isLineBreakTag)(r))if(r[o])r=r[o]
else{if(null===r.parentNode||!r.parentNode[o])return r.parentNode
r=r.parentNode[o]}return e(r,n)}return t}
var X=a,G=W,Z=V
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestNode=void 0
var t=$
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return t.getDeepestNode}})}(q)
var J={},Q={},ee=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(Q,"__esModule",{value:!0}),Q.findAllInputs=function(e){return Array.from(e.querySelectorAll((0,ie.allInputsSelector)())).reduce((function(e,t){return(0,oe.isNativeInput)(t)||(0,te.containsOnlyInlineElements)(t)?ee(ee([],e,!0),[t],!1):ee(ee([],e,!0),(0,ne.getDeepestBlockElements)(t),!0)}),[])}
var te=k,ne=F,ie=r,oe=a
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.findAllInputs=void 0
var t=Q
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return t.findAllInputs}})}(J)
var re={},se={}
Object.defineProperty(se,"__esModule",{value:!0}),se.isCollapsedWhitespaces=function(e){return!/[^\t\n\r ]/.test(e)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCollapsedWhitespaces=void 0
var t=se
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return t.isCollapsedWhitespaces}})}(re)
var ae={},le={}
Object.defineProperty(le,"__esModule",{value:!0}),le.isElement=function(e){return!(0,ce.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.ELEMENT_NODE}
var ce=O
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isElement=void 0
var t=le
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return t.isElement}})}(ae)
var de={},ue={},he={},pe={}
Object.defineProperty(pe,"__esModule",{value:!0}),pe.isLeaf=function(e){return null!==e&&0===e.childNodes.length},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLeaf=void 0
var t=pe
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return t.isLeaf}})}(he)
var fe={},me={}
Object.defineProperty(me,"__esModule",{value:!0}),me.isNodeEmpty=function(e,t){var n=""
return!((0,ye.isSingleTag)(e)&&!(0,ge.isLineBreakTag)(e))&&((0,be.isElement)(e)&&(0,ve.isNativeInput)(e)?n=e.value:null!==e.textContent&&(n=e.textContent.replace("​","")),void 0!==t&&(n=n.replace(new RegExp(t,"g"),"")),0===n.trim().length)}
var ge=W,be=ae,ve=a,ye=V;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNodeEmpty=void 0
var t=me
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return t.isNodeEmpty}})})(fe),Object.defineProperty(ue,"__esModule",{value:!0}),ue.isEmpty=function(e,t){e.normalize()
for(var n=[e];n.length>0;){var i=n.shift()
if(i){if(e=i,(0,we.isLeaf)(e)&&!(0,ke.isNodeEmpty)(e,t))return!1
n.push.apply(n,Array.from(e.childNodes))}}return!0}
var we=he,ke=fe
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=void 0
var t=ue
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return t.isEmpty}})}(de)
var _e={},xe={}
Object.defineProperty(xe,"__esModule",{value:!0}),xe.isFragment=function(e){return!(0,Ce.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}
var Ce=O
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isFragment=void 0
var t=xe
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return t.isFragment}})}(_e)
var Ee={},Se={}
Object.defineProperty(Se,"__esModule",{value:!0}),Se.isHTMLString=function(e){var t=(0,Te.make)("div")
return t.innerHTML=e,t.childElementCount>0}
var Te=B
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isHTMLString=void 0
var t=Se
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return t.isHTMLString}})}(Ee)
var Oe={},Me={}
Object.defineProperty(Me,"__esModule",{value:!0}),Me.offset=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop,o=t.top+i,r=t.left+n
return{top:o,left:r,bottom:o+t.height,right:r+t.width}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.offset=void 0
var t=Me
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return t.offset}})}(Oe)
var Ae={},Re={}
Object.defineProperty(Re,"__esModule",{value:!0}),Re.prepend=function(e,t){Array.isArray(t)?(t=t.reverse()).forEach((function(t){return e.prepend(t)})):e.prepend(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=void 0
var t=Re
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return t.prepend}})}(Ae),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=e.offset=e.make=e.isLineBreakTag=e.isSingleTag=e.isNodeEmpty=e.isLeaf=e.isHTMLString=e.isFragment=e.isEmpty=e.isElement=e.isContentEditable=e.isCollapsedWhitespaces=e.findAllInputs=e.isNativeInput=e.allInputsSelector=e.getDeepestNode=e.getDeepestBlockElements=e.getContentLength=e.fragmentToString=e.containsOnlyInlineElements=e.canSetCaret=e.calculateBaseline=e.blockElements=e.append=void 0
var t=r
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})
var n=a
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return n.isNativeInput}})
var i=c
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return i.append}})
var o=u
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return o.blockElements}})
var s=p
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return s.calculateBaseline}})
var l=m
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return l.canSetCaret}})
var d=k
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return d.containsOnlyInlineElements}})
var h=R
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return h.fragmentToString}})
var f=j
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return f.getContentLength}})
var g=F
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return g.getDeepestBlockElements}})
var v=q
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return v.getDeepestNode}})
var y=J
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return y.findAllInputs}})
var w=re
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return w.isCollapsedWhitespaces}})
var _=b
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return _.isContentEditable}})
var x=ae
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return x.isElement}})
var C=de
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return C.isEmpty}})
var E=_e
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return E.isFragment}})
var S=Ee
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return S.isHTMLString}})
var T=he
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return T.isLeaf}})
var O=fe
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return O.isNodeEmpty}})
var M=W
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return M.isLineBreakTag}})
var A=V
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return A.isSingleTag}})
var I=B
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return I.make}})
var P=Oe
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return P.offset}})
var L=Ae
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return L.prepend}})}(o)
const Ie="cdx-list",Be={wrapper:Ie,item:`${Ie}__item`,itemContent:`${Ie}__item-content`,itemChildren:`${Ie}__item-children`}
class Pe{static get CSS(){return{...Be,orderedList:`${Ie}-ordered`}}constructor(e,t){this.config=t,this.readOnly=e}renderWrapper(e){let t
return t=!0===e?o.make("ol",[Pe.CSS.wrapper,Pe.CSS.orderedList]):o.make("ol",[Pe.CSS.orderedList,Pe.CSS.itemChildren]),t}renderItem(e,t){const n=o.make("li",Pe.CSS.item),i=o.make("div",Pe.CSS.itemContent,{innerHTML:e,contentEditable:(!this.readOnly).toString()})
return n.appendChild(i),n}getItemContent(e){const t=e.querySelector(`.${Pe.CSS.itemContent}`)
return!t||o.isEmpty(t)?"":t.innerHTML}getItemMeta(){return{}}composeDefaultMeta(){return{}}}class Le{static get CSS(){return{...Be,unorderedList:`${Ie}-unordered`}}constructor(e,t){this.config=t,this.readOnly=e}renderWrapper(e){let t
return t=!0===e?o.make("ul",[Le.CSS.wrapper,Le.CSS.unorderedList]):o.make("ul",[Le.CSS.unorderedList,Le.CSS.itemChildren]),t}renderItem(e,t){const n=o.make("li",Le.CSS.item),i=o.make("div",Le.CSS.itemContent,{innerHTML:e,contentEditable:(!this.readOnly).toString()})
return n.appendChild(i),n}getItemContent(e){const t=e.querySelector(`.${Le.CSS.itemContent}`)
return!t||o.isEmpty(t)?"":t.innerHTML}getItemMeta(){return{}}composeDefaultMeta(){return{}}}function je(e){return e.nodeType===Node.ELEMENT_NODE}var Ne={},De={},Fe={},ze={}
Object.defineProperty(ze,"__esModule",{value:!0}),ze.getContenteditableSlice=function(e,t,n,i,o){var r
void 0===o&&(o=!1)
var s=document.createRange()
if("left"===i?(s.setStart(e,0),s.setEnd(t,n)):(s.setStart(t,n),s.setEnd(e,e.childNodes.length)),!0===o){var a=s.extractContents()
return(0,He.fragmentToString)(a)}var l=s.cloneContents(),c=document.createElement("div")
return c.appendChild(l),null!==(r=c.textContent)&&void 0!==r?r:""}
var He=o
Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.checkContenteditableSliceForEmptiness=function(e,t,n,i){var o=(0,qe.getContenteditableSlice)(e,t,n,i)
return(0,Ue.isCollapsedWhitespaces)(o)}
var Ue=o,qe=ze
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkContenteditableSliceForEmptiness=void 0
var t=Fe
Object.defineProperty(e,"checkContenteditableSliceForEmptiness",{enumerable:!0,get:function(){return t.checkContenteditableSliceForEmptiness}})}(De)
var $e={}
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContenteditableSlice=void 0
var t=ze
Object.defineProperty(e,"getContenteditableSlice",{enumerable:!0,get:function(){return t.getContenteditableSlice}})}($e)
var We={},Ke={}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.focus=function(e,t){var n,i
if(void 0===t&&(t=!0),(0,Ve.isNativeInput)(e)){e.focus()
var o=t?0:e.value.length
e.setSelectionRange(o,o)}else{var r=document.createRange(),s=window.getSelection()
if(!s)return
var a=function(e,t){void 0===t&&(t=!1)
var n=document.createTextNode("")
t?e.insertBefore(n,e.firstChild):e.appendChild(n),r.setStart(n,0),r.setEnd(n,0)},l=function(e){return null!=e},c=e.childNodes,d=t?c[0]:c[c.length-1]
if(l(d)){for(;l(d)&&d.nodeType!==Node.TEXT_NODE;)d=t?d.firstChild:d.lastChild
if(l(d)&&d.nodeType===Node.TEXT_NODE){var u=null!==(i=null===(n=d.textContent)||void 0===n?void 0:n.length)&&void 0!==i?i:0
o=t?0:u,r.setStart(d,o),r.setEnd(d,o)}else a(e,t)}else a(e)
s.removeAllRanges(),s.addRange(r)}}
var Ve=o
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.focus=void 0
var t=Ke
Object.defineProperty(e,"focus",{enumerable:!0,get:function(){return t.focus}})}(We)
var Ye={},Xe={}
Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.getCaretNodeAndOffset=function(){var e=window.getSelection()
if(null===e)return[null,0]
var t=e.focusNode,n=e.focusOffset
return null===t?[null,0]:(t.nodeType!==Node.TEXT_NODE&&t.childNodes.length>0&&(void 0!==t.childNodes[n]?(t=t.childNodes[n],n=0):null!==(t=t.childNodes[n-1]).textContent&&(n=t.textContent.length)),[t,n])},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getCaretNodeAndOffset=void 0
var t=Xe
Object.defineProperty(e,"getCaretNodeAndOffset",{enumerable:!0,get:function(){return t.getCaretNodeAndOffset}})}(Ye)
var Ge={},Ze={}
Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.getRange=function(){var e=window.getSelection()
return e&&e.rangeCount?e.getRangeAt(0):null},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=void 0
var t=Ze
Object.defineProperty(e,"getRange",{enumerable:!0,get:function(){return t.getRange}})}(Ge)
var Je={},Qe={}
Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.isCaretAtEndOfInput=function(e){var t=(0,et.getDeepestNode)(e,!0)
if(null===t)return!0
if((0,et.isNativeInput)(t))return t.selectionEnd===t.value.length
var n=(0,tt.getCaretNodeAndOffset)(),i=n[0],o=n[1]
return null!==i&&(0,nt.checkContenteditableSliceForEmptiness)(e,i,o,"right")}
var et=o,tt=Ye,nt=De
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCaretAtEndOfInput=void 0
var t=Qe
Object.defineProperty(e,"isCaretAtEndOfInput",{enumerable:!0,get:function(){return t.isCaretAtEndOfInput}})}(Je)
var it={},ot={}
Object.defineProperty(ot,"__esModule",{value:!0}),ot.isCaretAtStartOfInput=function(e){var t=(0,rt.getDeepestNode)(e)
if(null===t||(0,rt.isEmpty)(e))return!0
if((0,rt.isNativeInput)(t))return 0===t.selectionEnd
if((0,rt.isEmpty)(e))return!0
var n=(0,st.getCaretNodeAndOffset)(),i=n[0],o=n[1]
return null!==i&&(0,at.checkContenteditableSliceForEmptiness)(e,i,o,"left")}
var rt=o,st=Xe,at=Fe
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCaretAtStartOfInput=void 0
var t=ot
Object.defineProperty(e,"isCaretAtStartOfInput",{enumerable:!0,get:function(){return t.isCaretAtStartOfInput}})}(it)
var lt={},ct={}
Object.defineProperty(ct,"__esModule",{value:!0}),ct.save=function(){var e=(0,ut.getRange)(),t=(0,dt.make)("span")
if(t.id="cursor",t.hidden=!0,e)return e.insertNode(t),function(){var n=window.getSelection()
n&&(e.setStartAfter(t),e.setEndAfter(t),n.removeAllRanges(),n.addRange(e),setTimeout((function(){t.remove()}),150))}}
var dt=o,ut=Ze;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.save=void 0
var t=ct
Object.defineProperty(e,"save",{enumerable:!0,get:function(){return t.save}})})(lt),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.save=e.isCaretAtStartOfInput=e.isCaretAtEndOfInput=e.getRange=e.getCaretNodeAndOffset=e.focus=e.getContenteditableSlice=e.checkContenteditableSliceForEmptiness=void 0
var t=De
Object.defineProperty(e,"checkContenteditableSliceForEmptiness",{enumerable:!0,get:function(){return t.checkContenteditableSliceForEmptiness}})
var n=$e
Object.defineProperty(e,"getContenteditableSlice",{enumerable:!0,get:function(){return n.getContenteditableSlice}})
var i=We
Object.defineProperty(e,"focus",{enumerable:!0,get:function(){return i.focus}})
var o=Ye
Object.defineProperty(e,"getCaretNodeAndOffset",{enumerable:!0,get:function(){return o.getCaretNodeAndOffset}})
var r=Ge
Object.defineProperty(e,"getRange",{enumerable:!0,get:function(){return r.getRange}})
var s=Je
Object.defineProperty(e,"isCaretAtEndOfInput",{enumerable:!0,get:function(){return s.isCaretAtEndOfInput}})
var a=it
Object.defineProperty(e,"isCaretAtStartOfInput",{enumerable:!0,get:function(){return a.isCaretAtStartOfInput}})
var l=lt
Object.defineProperty(e,"save",{enumerable:!0,get:function(){return l.save}})}(Ne)
class ht{static get CSS(){return{...Be,checklist:`${Ie}-checklist`,itemChecked:`${Ie}__checkbox--checked`,noHover:`${Ie}__checkbox--no-hover`,checkbox:`${Ie}__checkbox-check`,checkboxContainer:`${Ie}__checkbox`}}constructor(e,t){this.config=t,this.readOnly=e}renderWrapper(e){let t
return!0===e?(t=o.make("ul",[ht.CSS.wrapper,ht.CSS.checklist]),t.addEventListener("click",(e=>{const t=e.target
if(t){const e=t.closest(`.${ht.CSS.checkboxContainer}`)
e&&e.contains(t)&&this.toggleCheckbox(e)}}))):t=o.make("ul",[ht.CSS.checklist,ht.CSS.itemChildren]),t}renderItem(e,t){const n=o.make("li",[ht.CSS.item,ht.CSS.item]),i=o.make("div",ht.CSS.itemContent,{innerHTML:e,contentEditable:(!this.readOnly).toString()}),r=o.make("span",ht.CSS.checkbox),s=o.make("div",ht.CSS.checkboxContainer)
return!0===t.checked&&s.classList.add(ht.CSS.itemChecked),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>',s.appendChild(r),n.appendChild(s),n.appendChild(i),n}getItemContent(e){const t=e.querySelector(`.${ht.CSS.itemContent}`)
return!t||o.isEmpty(t)?"":t.innerHTML}getItemMeta(e){const t=e.querySelector(`.${ht.CSS.checkboxContainer}`)
return{checked:!!t&&t.classList.contains(ht.CSS.itemChecked)}}composeDefaultMeta(){return{checked:!1}}toggleCheckbox(e){e.classList.toggle(ht.CSS.itemChecked),e.classList.add(ht.CSS.noHover),e.addEventListener("mouseleave",(()=>this.removeSpecialHoverBehavior(e)),{once:!0})}removeSpecialHoverBehavior(e){e.classList.remove(ht.CSS.noHover)}}function pt(e,t="after"){const n=[]
let i
function o(e){switch(t){case"after":return e.nextElementSibling
case"before":return e.previousElementSibling}}for(i=o(e);null!==i;)n.push(i),i=o(i)
return 0!==n.length?n:null}function ft(e,t=!0){let n=e
return e.classList.contains(Be.item)&&(n=e.querySelector(`.${Be.itemChildren}`)),null===n?[]:t?Array.from(n.querySelectorAll(`:scope > .${Be.item}`)):Array.from(n.querySelectorAll(`.${Be.item}`))}function mt(e){return e.querySelector(`.${Be.itemChildren}`)}function gt(e){let t=e
e.classList.contains(Be.item)&&(t=mt(e)),null!==t&&0===ft(t).length&&t.remove()}function bt(e){return e.querySelector(`.${Be.itemContent}`)}function vt(e,t=!0){const n=bt(e)
n&&Ne.focus(n,t)}class yt{get currentItem(){const e=window.getSelection()
if(!e)return null
let t=e.anchorNode
return t&&(je(t)||(t=t.parentNode),t)&&je(t)?t.closest(`.${Be.item}`):null}get currentItemLevel(){const e=this.currentItem
if(null===e)return null
let t=e.parentNode,n=0
for(;null!==t&&t!==this.listWrapper;)je(t)&&t.classList.contains(Be.item)&&(n+=1),t=t.parentNode
return n+1}constructor({data:e,config:t,api:n,readOnly:i,block:o},r){this.config=t,this.data=e,this.readOnly=i,this.api=n,this.block=o,this.renderer=r}render(){return this.listWrapper=this.renderer.renderWrapper(!0),this.data.items.length?this.appendItems(this.data.items,this.listWrapper):this.appendItems([{content:"",meta:{},items:[]}],this.listWrapper),this.readOnly||this.listWrapper.addEventListener("keydown",(e=>{switch(e.key){case"Enter":this.enterPressed(e)
break
case"Backspace":this.backspace(e)
break
case"Tab":e.shiftKey?this.shiftTab(e):this.addTab(e)}}),!1),"start"in this.data.meta&&void 0!==this.data.meta.start&&this.changeStartWith(this.data.meta.start),"counterType"in this.data.meta&&void 0!==this.data.meta.counterType&&this.changeCounters(this.data.meta.counterType),this.listWrapper}save(e){const t=e??this.listWrapper,n=e=>ft(e).map((e=>{const t=mt(e)
return{content:this.renderer.getItemContent(e),meta:this.renderer.getItemMeta(e),items:t?n(t):[]}})),i=t?n(t):[]
let o={style:this.data.style,meta:{},items:i}
return"ordered"===this.data.style&&(o.meta={start:this.data.meta.start,counterType:this.data.meta.counterType}),o}static get pasteConfig(){return{tags:["OL","UL","LI"]}}merge(e){const t=this.block.holder.querySelectorAll(`.${Be.item}`),n=t[t.length-1],i=bt(n)
if(null===n||null===i||(i.insertAdjacentHTML("beforeend",e.items[0].content),void 0===this.listWrapper))return
const o=ft(this.listWrapper)
if(0===o.length)return
let r=mt(o[o.length-1])
const s=e.items.shift()
void 0!==s&&(0!==s.items.length&&(null===r&&(r=this.renderer.renderWrapper(!1)),this.appendItems(s.items,r)),e.items.length>0&&this.appendItems(e.items,this.listWrapper))}onPaste(e){const t=e.detail.data
this.data=this.pasteHandler(t)
const n=this.listWrapper
n&&n.parentNode&&n.parentNode.replaceChild(this.render(),n)}pasteHandler(e){const{tagName:t}=e
let n,i="unordered"
switch(t){case"OL":i="ordered",n="ol"
break
case"UL":case"LI":i="unordered",n="ul"}const o={style:i,meta:{},items:[]}
"ordered"===i&&(this.data.meta.counterType="numeric",this.data.meta.start=1)
const r=e=>Array.from(e.querySelectorAll(":scope > li")).map((e=>{const t=e.querySelector(`:scope > ${n}`),i=t?r(t):[]
return{content:e.innerHTML??"",meta:{},items:i}}))
return o.items=r(e),o}changeStartWith(e){this.listWrapper.style.setProperty("counter-reset","item "+(e-1)),this.data.meta.start=e}changeCounters(e){this.listWrapper.style.setProperty("--list-counter-type",e),this.data.meta.counterType=e}enterPressed(e){var t
const n=this.currentItem
if(e.stopPropagation(),e.preventDefault(),e.isComposing||null===n)return
const i=0===(null==(t=this.renderer)?void 0:t.getItemContent(n).trim().length),o=n.parentNode===this.listWrapper,r=null===n.previousElementSibling,s=this.api.blocks.getCurrentBlockIndex()
if(o&&i)return null!==n.nextElementSibling||function(e){return null!==e.querySelector(`.${Be.itemChildren}`)}(n)?void this.splitList(n):void(r?this.convertItemToDefaultBlock(s,!0):this.convertItemToDefaultBlock())
i?this.unshiftItem(n):this.splitItem(n)}backspace(e){var t
const n=this.currentItem
if(null!==n&&Ne.isCaretAtStartOfInput(n)&&!1!==(null==(t=window.getSelection())?void 0:t.isCollapsed)){if(e.stopPropagation(),n.parentNode===this.listWrapper&&null===n.previousElementSibling)return void this.convertFirstItemToDefaultBlock()
e.preventDefault(),this.mergeItemWithPrevious(n)}}shiftTab(e){e.stopPropagation(),e.preventDefault(),null!==this.currentItem&&this.unshiftItem(this.currentItem)}unshiftItem(e){if(!e.parentNode||!je(e.parentNode))return
const t=e.parentNode.closest(`.${Be.item}`)
if(!t)return
let n=mt(e)
if(null===e.parentElement)return
const i=pt(e)
null!==i&&(null===n&&(n=this.renderer.renderWrapper(!1)),i.forEach((e=>{n.appendChild(e)})),e.appendChild(n)),t.after(e),vt(e,!1),gt(t)}splitList(e){const t=ft(e),n=this.block,i=this.api.blocks.getCurrentBlockIndex()
if(0!==t.length){const n=t[0]
this.unshiftItem(n),vt(e,!1)}if(null===e.previousElementSibling&&e.parentNode===this.listWrapper)return void this.convertItemToDefaultBlock(i)
const o=pt(e)
if(null===o)return
const r=this.renderer.renderWrapper(!0)
o.forEach((e=>{r.appendChild(e)}))
const s=this.save(r)
s.meta.start="ordered"==this.data.style?1:void 0,this.api.blocks.insert(null==n?void 0:n.name,s,this.config,i+1),this.convertItemToDefaultBlock(i+1),r.remove()}splitItem(e){const[t,n]=Ne.getCaretNodeAndOffset()
if(null===t)return
const i=bt(e)
let o
o=null===i?"":Ne.getContenteditableSlice(i,t,n,"right",!0)
const r=mt(e),s=this.renderItem(o)
null==e||e.after(s),r&&s.appendChild(r),vt(s)}mergeItemWithPrevious(e){const t=e.previousElementSibling,n=e.parentNode
if(null===n||!je(n))return
const i=n.closest(`.${Be.item}`)
if(!t&&!i||t&&!je(t))return
let o
if(t){const e=ft(t,!1)
o=0!==e.length&&0!==e.length?e[e.length-1]:t}else o=i
const r=this.renderer.getItemContent(e)
if(!o)return
vt(o,!1)
const s=bt(o)
if(null===s)return
s.insertAdjacentHTML("beforeend",r)
const a=ft(e)
if(0===a.length)return e.remove(),void gt(o)
const l=t||i,c=mt(l)??this.renderer.renderWrapper(!1)
t?a.forEach((e=>{c.appendChild(e)})):a.forEach((e=>{c.prepend(e)})),null===mt(l)&&o.appendChild(c),e.remove()}addTab(e){var t
e.stopPropagation(),e.preventDefault()
const n=this.currentItem
if(!n)return
if(void 0!==(null==(t=this.config)?void 0:t.maxLevel)){const e=this.currentItemLevel
if(null!==e&&e===this.config.maxLevel)return}const i=n.previousSibling
if(null===i||!je(i))return
const o=mt(i)
if(o)o.appendChild(n),ft(n).forEach((e=>{o.appendChild(e)}))
else{const e=this.renderer.renderWrapper(!1)
e.appendChild(n),ft(n).forEach((t=>{e.appendChild(t)})),i.appendChild(e)}gt(n),vt(n,!1)}convertItemToDefaultBlock(e,t){let n
const i=this.currentItem,o=null!==i?this.renderer.getItemContent(i):""
!0===t&&this.api.blocks.delete(),n=void 0!==e?this.api.blocks.insert(void 0,{text:o},void 0,e):this.api.blocks.insert(),null==i||i.remove(),this.api.caret.setToBlock(n,"start")}convertFirstItemToDefaultBlock(){const e=this.currentItem
if(null===e)return
const t=ft(e)
if(0!==t.length){const n=t[0]
this.unshiftItem(n),vt(e)}const n=pt(e),i=this.api.blocks.getCurrentBlockIndex(),o=null===n
this.convertItemToDefaultBlock(i,o)}renderItem(e,t){const n=t??this.renderer.composeDefaultMeta()
switch(!0){case this.renderer instanceof Pe:case this.renderer instanceof Le:}return this.renderer.renderItem(e,n)}appendItems(e,t){e.forEach((e=>{var n
const i=this.renderItem(e.content,e.meta)
if(t.appendChild(i),e.items.length){const t=null==(n=this.renderer)?void 0:n.renderWrapper(!1)
this.appendItems(e.items,t),i.appendChild(t)}}))}}const wt={wrapper:`${Ie}-start-with-field`,input:`${Ie}-start-with-field__input`,startWithElementWrapperInvalid:`${Ie}-start-with-field--invalid`},kt=new Map([["Numeric","numeric"],["Lower Roman","lower-roman"],["Upper Roman","upper-roman"],["Lower Alpha","lower-alpha"],["Upper Alpha","upper-alpha"]]),_t=new Map([["numeric",'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>'],["lower-roman",'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>'],["upper-roman",'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>'],["lower-alpha",'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>'],["upper-alpha",'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>']])
class xt{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return[{icon:t,title:"Unordered List",data:{style:"unordered"}},{icon:n,title:"Ordered List",data:{style:"ordered"}},{icon:e,title:"Checklist",data:{style:"checklist"}}]}static get pasteConfig(){return{tags:["OL","UL","LI"]}}static get conversionConfig(){return{export:e=>xt.joinRecursive(e),import:(e,t)=>({meta:{},items:[{content:e,meta:{},items:[]}],style:void 0!==(null==t?void 0:t.defaultStyle)?t.defaultStyle:"unordered"})}}get listStyle(){return this.data.style||this.defaultListStyle}set listStyle(e){var t
this.data.style=e,this.changeTabulatorByStyle()
const n=this.list.render()
null==(t=this.listElement)||t.replaceWith(n),this.listElement=n}constructor({data:e,config:t,api:n,readOnly:i,block:o}){var r
this.api=n,this.readOnly=i,this.config=t,this.block=o,this.defaultListStyle=(null==(r=this.config)?void 0:r.defaultStyle)||"unordered"
const s={style:this.defaultListStyle,meta:{},items:[]}
this.data=Object.keys(e).length?function(e){const t=[]
return function(e){return"string"==typeof e.items[0]}(e)?(e.items.forEach((e=>{t.push({content:e,meta:{},items:[]})})),{style:e.style,meta:{},items:t}):function(e){return"string"!=typeof e.items[0]&&"text"in e.items[0]&&"checked"in e.items[0]&&"string"==typeof e.items[0].text&&"boolean"==typeof e.items[0].checked}(e)?(e.items.forEach((e=>{t.push({content:e.text,meta:{checked:e.checked},items:[]})})),{style:"checklist",meta:{},items:t}):function(e){return!("meta"in e)}(e)?{style:e.style,meta:{},items:e.items}:e}(e):s,"ordered"===this.listStyle&&void 0===this.data.meta.counterType&&(this.data.meta.counterType="numeric"),this.changeTabulatorByStyle()}static joinRecursive(e){return e.items.map((e=>`${e.content} ${xt.joinRecursive(e)}`)).join("")}render(){return this.listElement=this.list.render(),this.listElement}save(){return this.data=this.list.save(),this.data}merge(e){this.list.merge(e)}renderSettings(){const i=[{label:this.api.i18n.t("Unordered"),icon:t,closeOnActivate:!0,isActive:"unordered"==this.listStyle,onActivate:()=>{this.listStyle="unordered"}},{label:this.api.i18n.t("Ordered"),icon:n,closeOnActivate:!0,isActive:"ordered"==this.listStyle,onActivate:()=>{this.listStyle="ordered"}},{label:this.api.i18n.t("Checklist"),icon:e,closeOnActivate:!0,isActive:"checklist"==this.listStyle,onActivate:()=>{this.listStyle="checklist"}}]
if("ordered"===this.listStyle){const e=function(e,{value:t,placeholder:n,attributes:i,sanitize:r}){const s=o.make("div",wt.wrapper),a=o.make("input",wt.input,{placeholder:n,tabIndex:-1,value:t})
for(const o in i)a.setAttribute(o,i[o])
return s.appendChild(a),a.addEventListener("input",(()=>{void 0!==r&&(a.value=r(a.value))
const t=a.checkValidity()
!t&&!s.classList.contains(wt.startWithElementWrapperInvalid)&&s.classList.add(wt.startWithElementWrapperInvalid),t&&s.classList.contains(wt.startWithElementWrapperInvalid)&&s.classList.remove(wt.startWithElementWrapperInvalid),t&&e(a.value)})),s}((e=>this.changeStartWith(Number(e))),{value:String(this.data.meta.start??1),placeholder:"",attributes:{required:"true"},sanitize:e=>e.replace(/\D+/g,"")}),t=[{label:this.api.i18n.t("Start with"),icon:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',children:{items:[{element:e,type:"html"}]}}],n={label:this.api.i18n.t("Counter type"),icon:_t.get(this.data.meta.counterType),children:{items:[]}}
kt.forEach(((e,t)=>{n.children.items.push({title:this.api.i18n.t(t),icon:_t.get(kt.get(t)),isActive:this.data.meta.counterType===kt.get(t),closeOnActivate:!0,onActivate:()=>{this.changeCounters(kt.get(t))}})})),i.push({type:"separator"},...t,n)}return i}onPaste(e){const{tagName:t}=e.detail.data
switch(t){case"OL":this.listStyle="ordered"
break
case"UL":case"LI":this.listStyle="unordered"}this.list.onPaste(e)}pasteHandler(e){return this.list.pasteHandler(e)}changeCounters(e){var t
null==(t=this.list)||t.changeCounters(e),this.data.meta.counterType=e}changeStartWith(e){var t
null==(t=this.list)||t.changeStartWith(e),this.data.meta.start=e}changeTabulatorByStyle(){switch(this.listStyle){case"ordered":this.list=new yt({data:this.data,readOnly:this.readOnly,api:this.api,config:this.config,block:this.block},new Pe(this.readOnly,this.config))
break
case"unordered":this.list=new yt({data:this.data,readOnly:this.readOnly,api:this.api,config:this.config,block:this.block},new Le(this.readOnly,this.config))
break
case"checklist":this.list=new yt({data:this.data,readOnly:this.readOnly,api:this.api,config:this.config,block:this.block},new ht(this.readOnly,this.config))}}}return xt}()},5105:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
class e{static get CSS(){return"cdx-marker"}constructor({api:e}){this.api=e,this.button=null,this.tag="MARK",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static get isInline(){return!0}render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}surround(t){if(!t)return
let n=this.api.selection.findParentTag(this.tag,e.CSS)
n?this.unwrap(n):this.wrap(t)}wrap(t){let n=document.createElement(this.tag)
n.classList.add(e.CSS),n.appendChild(t.extractContents()),t.insertNode(n),this.api.selection.expandToTag(n)}unwrap(e){this.api.selection.expandToTag(e)
let t=window.getSelection(),n=t.getRangeAt(0),i=n.extractContents()
e.parentNode.removeChild(e),n.insertNode(i),t.removeAllRanges(),t.addRange(n)}checkState(){const t=this.api.selection.findParentTag(this.tag,e.CSS)
this.button.classList.toggle(this.iconClasses.active,!!t)}get toolboxIcon(){return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>'}static get sanitize(){return{mark:{class:e.CSS}}}}return e}()},4809:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
var e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t={},n={},i={}
Object.defineProperty(i,"__esModule",{value:!0}),i.allInputsSelector=function(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(e){return'input[type="'.concat(e,'"]')})).join(", ")},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.allInputsSelector=void 0
var t=i
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})}(n)
var o={},r={}
Object.defineProperty(r,"__esModule",{value:!0}),r.isNativeInput=function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNativeInput=void 0
var t=r
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return t.isNativeInput}})}(o)
var s={},a={}
Object.defineProperty(a,"__esModule",{value:!0}),a.append=function(e,t){Array.isArray(t)?t.forEach((function(t){e.appendChild(t)})):e.appendChild(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.append=void 0
var t=a
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return t.append}})}(s)
var l={},c={}
Object.defineProperty(c,"__esModule",{value:!0}),c.blockElements=function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.blockElements=void 0
var t=c
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return t.blockElements}})}(l)
var d={},u={}
Object.defineProperty(u,"__esModule",{value:!0}),u.calculateBaseline=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.fontSize),i=parseFloat(t.lineHeight)||1.2*n,o=parseFloat(t.paddingTop),r=parseFloat(t.borderTopWidth)
return parseFloat(t.marginTop)+r+o+(i-n)/2+.8*n},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateBaseline=void 0
var t=u
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return t.calculateBaseline}})}(d)
var h={},p={},f={},m={}
Object.defineProperty(m,"__esModule",{value:!0}),m.isContentEditable=function(e){return"true"===e.contentEditable},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isContentEditable=void 0
var t=m
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return t.isContentEditable}})}(f),Object.defineProperty(p,"__esModule",{value:!0}),p.canSetCaret=function(e){var t=!0
if((0,g.isNativeInput)(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=(0,b.isContentEditable)(e)
return t}
var g=o,b=f
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.canSetCaret=void 0
var t=p
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return t.canSetCaret}})}(h)
var v={},y={}
function w(){const e={win:!1,mac:!1,x11:!1,linux:!1},t=Object.keys(e).find((e=>-1!==window.navigator.appVersion.toLowerCase().indexOf(e)))
return void 0!==t&&(e[t]=!0),e}function k(e){return null!=e&&""!==e&&("object"!=typeof e||Object.keys(e).length>0)}function _(e){return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function x(e){return"function"===_(e)||"asyncfunction"===_(e)}function C(e){return"object"===_(e)}const E=function(e){if(e.__esModule)return e
var t=e.default
if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}(Object.freeze(Object.defineProperty({__proto__:null,PromiseQueue:class{constructor(){this.completed=Promise.resolve()}add(e){return new Promise(((t,n)=>{this.completed=this.completed.then(e).then(t).catch(n)}))}},beautifyShortcut:function(e){const t=w()
return e=e.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi,"+"),t.mac?e.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):e.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},cacheable:function(e,t,n){const i=void 0!==n.value?"value":"get",o=n[i],r=`#${t}Cache`
if(n[i]=function(...e){return void 0===this[r]&&(this[r]=o.apply(this,e)),this[r]},"get"===i&&n.set){const t=n.set
n.set=function(n){delete e[r],t.apply(this,n)}}return n},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)},copyTextToClipboard:function(e){const t=document.createElement("div")
t.style.position="absolute",t.style.left="-999px",t.style.bottom="-999px",t.innerHTML=e,document.body.appendChild(t)
const n=window.getSelection(),i=document.createRange()
if(i.selectNode(t),null===n)throw new Error("Cannot copy text to clipboard")
n.removeAllRanges(),n.addRange(i),document.execCommand("copy"),document.body.removeChild(t)},debounce:function(e,t,n){let i
return(...o)=>{const r=this,s=!0===n&&void 0!==i
window.clearTimeout(i),i=window.setTimeout((()=>{i=void 0,!0!==n&&e.apply(r,o)}),t),s&&e.apply(r,o)}},deepMerge:function e(t,...n){if(!n.length)return t
const i=n.shift()
if(C(t)&&C(i))for(const o in i)C(i[o])?(void 0===t[o]&&Object.assign(t,{[o]:{}}),e(t[o],i[o])):Object.assign(t,{[o]:i[o]})
return e(t,...n)},deprecationAssert:function(e,t,n){const i=`«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`
e&&console.warn(i)},getUserOS:w,getValidUrl:function(e){try{return new URL(e).href}catch{}return"//"===e.substring(0,2)?window.location.protocol+e:window.location.origin+e},isBoolean:function(e){return"boolean"===_(e)},isClass:function(e){return x(e)&&/^\s*class\s+/.test(e.toString())},isEmpty:function(e){return!k(e)},isFunction:x,isIosDevice:()=>typeof window<"u"&&null!==window.navigator&&k(window.navigator.platform)&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),isNumber:function(e){return"number"===_(e)},isObject:C,isPrintableKey:function(e){return e>47&&e<58||32===e||13===e||229===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223},isPromise:function(e){return Promise.resolve(e)===e},isString:function(e){return"string"===_(e)},isUndefined:function(e){return"undefined"===_(e)},keyCodes:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},mouseButtons:{LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},notEmpty:k,throttle:function(e,t,n=void 0){let i,o,r,s=null,a=0
n||(n={})
const l=function(){a=!1===n.leading?0:Date.now(),s=null,r=e.apply(i,o),null===s&&(i=o=null)}
return function(){const c=Date.now()
!a&&!1===n.leading&&(a=c)
const d=t-(c-a)
return i=this,o=arguments,d<=0||d>t?(s&&(clearTimeout(s),s=null),a=c,r=e.apply(i,o),null===s&&(i=o=null)):!s&&!1!==n.trailing&&(s=setTimeout(l,d)),r}},typeOf:_},Symbol.toStringTag,{value:"Module"})))
Object.defineProperty(y,"__esModule",{value:!0}),y.containsOnlyInlineElements=function(e){var t;(0,S.isString)(e)?(t=document.createElement("div")).innerHTML=e:t=e
var n=function(e){return!(0,T.blockElements)().includes(e.tagName.toLowerCase())&&Array.from(e.children).every(n)}
return Array.from(t.children).every(n)}
var S=E,T=l
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.containsOnlyInlineElements=void 0
var t=y
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return t.containsOnlyInlineElements}})}(v)
var O={},M={},A={},R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.make=function(e,t,n){var i
void 0===t&&(t=null),void 0===n&&(n={})
var o=document.createElement(e)
if(Array.isArray(t)){var r=t.filter((function(e){return void 0!==e}));(i=o.classList).add.apply(i,r)}else null!==t&&o.classList.add(t)
for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])
return o},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.make=void 0
var t=R
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return t.make}})}(A),Object.defineProperty(M,"__esModule",{value:!0}),M.fragmentToString=function(e){var t=(0,I.make)("div")
return t.appendChild(e),t.innerHTML}
var I=A
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fragmentToString=void 0
var t=M
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return t.fragmentToString}})}(O)
var B={},P={}
Object.defineProperty(P,"__esModule",{value:!0}),P.getContentLength=function(e){var t,n
return(0,L.isNativeInput)(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:null!==(n=null===(t=e.textContent)||void 0===t?void 0:t.length)&&void 0!==n?n:0}
var L=o
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContentLength=void 0
var t=P
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return t.getContentLength}})}(B)
var j={},N={},D=e&&e.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(N,"__esModule",{value:!0}),N.getDeepestBlockElements=function e(t){return(0,F.containsOnlyInlineElements)(t)?[t]:Array.from(t.children).reduce((function(t,n){return D(D([],t,!0),e(n),!0)}),[])}
var F=v
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestBlockElements=void 0
var t=N
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return t.getDeepestBlockElements}})}(j)
var z={},H={},U={},q={}
Object.defineProperty(q,"__esModule",{value:!0}),q.isLineBreakTag=function(e){return["BR","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLineBreakTag=void 0
var t=q
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return t.isLineBreakTag}})}(U)
var $={},W={}
Object.defineProperty(W,"__esModule",{value:!0}),W.isSingleTag=function(e){return["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isSingleTag=void 0
var t=W
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return t.isSingleTag}})}($),Object.defineProperty(H,"__esModule",{value:!0}),H.getDeepestNode=function e(t,n){void 0===n&&(n=!1)
var i=n?"lastChild":"firstChild",o=n?"previousSibling":"nextSibling"
if(t.nodeType===Node.ELEMENT_NODE&&t[i]){var r=t[i]
if((0,Y.isSingleTag)(r)&&!(0,K.isNativeInput)(r)&&!(0,V.isLineBreakTag)(r))if(r[o])r=r[o]
else{if(null===r.parentNode||!r.parentNode[o])return r.parentNode
r=r.parentNode[o]}return e(r,n)}return t}
var K=o,V=U,Y=$
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestNode=void 0
var t=H
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return t.getDeepestNode}})}(z)
var X={},G={},Z=e&&e.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(G,"__esModule",{value:!0}),G.findAllInputs=function(e){return Array.from(e.querySelectorAll((0,ee.allInputsSelector)())).reduce((function(e,t){return(0,te.isNativeInput)(t)||(0,J.containsOnlyInlineElements)(t)?Z(Z([],e,!0),[t],!1):Z(Z([],e,!0),(0,Q.getDeepestBlockElements)(t),!0)}),[])}
var J=v,Q=j,ee=n,te=o
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.findAllInputs=void 0
var t=G
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return t.findAllInputs}})}(X)
var ne={},ie={}
Object.defineProperty(ie,"__esModule",{value:!0}),ie.isCollapsedWhitespaces=function(e){return!/[^\t\n\r ]/.test(e)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCollapsedWhitespaces=void 0
var t=ie
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return t.isCollapsedWhitespaces}})}(ne)
var oe={},re={}
Object.defineProperty(re,"__esModule",{value:!0}),re.isElement=function(e){return!(0,se.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.ELEMENT_NODE}
var se=E
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isElement=void 0
var t=re
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return t.isElement}})}(oe)
var ae={},le={},ce={},de={}
Object.defineProperty(de,"__esModule",{value:!0}),de.isLeaf=function(e){return null!==e&&0===e.childNodes.length},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLeaf=void 0
var t=de
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return t.isLeaf}})}(ce)
var ue={},he={}
Object.defineProperty(he,"__esModule",{value:!0}),he.isNodeEmpty=function(e,t){var n=""
return!((0,ge.isSingleTag)(e)&&!(0,pe.isLineBreakTag)(e))&&((0,fe.isElement)(e)&&(0,me.isNativeInput)(e)?n=e.value:null!==e.textContent&&(n=e.textContent.replace("​","")),void 0!==t&&(n=n.replace(new RegExp(t,"g"),"")),0===n.trim().length)}
var pe=U,fe=oe,me=o,ge=$;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNodeEmpty=void 0
var t=he
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return t.isNodeEmpty}})})(ue),Object.defineProperty(le,"__esModule",{value:!0}),le.isEmpty=function(e,t){e.normalize()
for(var n=[e];n.length>0;){var i=n.shift()
if(i){if(e=i,(0,be.isLeaf)(e)&&!(0,ve.isNodeEmpty)(e,t))return!1
n.push.apply(n,Array.from(e.childNodes))}}return!0}
var be=ce,ve=ue
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=void 0
var t=le
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return t.isEmpty}})}(ae)
var ye={},we={}
Object.defineProperty(we,"__esModule",{value:!0}),we.isFragment=function(e){return!(0,ke.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}
var ke=E
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isFragment=void 0
var t=we
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return t.isFragment}})}(ye)
var _e={},xe={}
Object.defineProperty(xe,"__esModule",{value:!0}),xe.isHTMLString=function(e){var t=(0,Ce.make)("div")
return t.innerHTML=e,t.childElementCount>0}
var Ce=A
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isHTMLString=void 0
var t=xe
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return t.isHTMLString}})}(_e)
var Ee={},Se={}
Object.defineProperty(Se,"__esModule",{value:!0}),Se.offset=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop,o=t.top+i,r=t.left+n
return{top:o,left:r,bottom:o+t.height,right:r+t.width}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.offset=void 0
var t=Se
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return t.offset}})}(Ee)
var Te={},Oe={}
Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.prepend=function(e,t){Array.isArray(t)?(t=t.reverse()).forEach((function(t){return e.prepend(t)})):e.prepend(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=void 0
var t=Oe
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return t.prepend}})}(Te),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=e.offset=e.make=e.isLineBreakTag=e.isSingleTag=e.isNodeEmpty=e.isLeaf=e.isHTMLString=e.isFragment=e.isEmpty=e.isElement=e.isContentEditable=e.isCollapsedWhitespaces=e.findAllInputs=e.isNativeInput=e.allInputsSelector=e.getDeepestNode=e.getDeepestBlockElements=e.getContentLength=e.fragmentToString=e.containsOnlyInlineElements=e.canSetCaret=e.calculateBaseline=e.blockElements=e.append=void 0
var t=n
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})
var i=o
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return i.isNativeInput}})
var r=s
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return r.append}})
var a=l
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return a.blockElements}})
var c=d
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return c.calculateBaseline}})
var u=h
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return u.canSetCaret}})
var p=v
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return p.containsOnlyInlineElements}})
var m=O
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return m.fragmentToString}})
var g=B
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return g.getContentLength}})
var b=j
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return b.getDeepestBlockElements}})
var y=z
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return y.getDeepestNode}})
var w=X
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return w.findAllInputs}})
var k=ne
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return k.isCollapsedWhitespaces}})
var _=f
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return _.isContentEditable}})
var x=oe
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return x.isElement}})
var C=ae
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return C.isEmpty}})
var E=ye
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return E.isFragment}})
var S=_e
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return S.isHTMLString}})
var T=ce
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return T.isLeaf}})
var M=ue
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return M.isNodeEmpty}})
var R=U
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return R.isLineBreakTag}})
var I=$
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return I.isSingleTag}})
var P=A
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return P.make}})
var L=Ee
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return L.offset}})
var N=Te
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return N.prepend}})}(t)
var Me,Ae=((Me=Ae||{}).Left="left",Me.Center="center",Me)
class Re{constructor({data:e,config:t,api:n,readOnly:i,block:o}){const{DEFAULT_ALIGNMENT:r}=Re
this.api=n,this.readOnly=i,this.quotePlaceholder=n.i18n.t((null==t?void 0:t.quotePlaceholder)??Re.DEFAULT_QUOTE_PLACEHOLDER),this.captionPlaceholder=n.i18n.t((null==t?void 0:t.captionPlaceholder)??Re.DEFAULT_CAPTION_PLACEHOLDER),this.data={text:e.text||"",caption:e.caption||"",alignment:Object.values(Ae).includes(e.alignment)?e.alignment:(null==t?void 0:t.defaultAlignment)??r},this.css={baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption"},this.block=o}static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>',title:"Quote"}}static get contentless(){return!0}static get enableLineBreaks(){return!0}static get DEFAULT_QUOTE_PLACEHOLDER(){return"Enter a quote"}static get DEFAULT_CAPTION_PLACEHOLDER(){return"Enter a caption"}static get DEFAULT_ALIGNMENT(){return"left"}static get conversionConfig(){return{import:"text",export:function(e){return e.caption?`${e.text} — ${e.caption}`:e.text}}}get CSS(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption"}}get settings(){return[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>'}]}render(){const e=t.make("blockquote",[this.css.baseClass,this.css.wrapper]),n=t.make("div",[this.css.input,this.css.text],{contentEditable:!this.readOnly,innerHTML:this.data.text}),i=t.make("div",[this.css.input,this.css.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption})
return n.dataset.placeholder=this.quotePlaceholder,i.dataset.placeholder=this.captionPlaceholder,e.appendChild(n),e.appendChild(i),e}save(e){const t=e.querySelector(`.${this.css.text}`),n=e.querySelector(`.${this.css.caption}`)
return Object.assign(this.data,{text:(null==t?void 0:t.innerHTML)??"",caption:(null==n?void 0:n.innerHTML)??""})}static get sanitize(){return{text:{br:!0},caption:{br:!0},alignment:{}}}renderSettings(){const e=e=>e&&e[0].toUpperCase()+e.slice(1)
return this.settings.map((t=>({icon:t.icon,label:this.api.i18n.t(`Align ${e(t.name)}`),onActivate:()=>this._toggleTune(t.name),isActive:this.data.alignment===t.name,closeOnActivate:!0})))}_toggleTune(e){this.data.alignment=e,this.block.dispatchChange()}}return Re}()},6665:function(e){!function(){"use strict"
try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
class e{static get isReadOnlySupported(){return!0}static get displayInToolbox(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>',title:"Raw HTML"}}constructor({data:t,config:n,api:i,readOnly:o}){this.api=i,this.readOnly=o,this.placeholder=i.i18n.t(n.placeholder||e.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-rawtool",textarea:"ce-rawtool__textarea"},this.data={html:t.html||""},this.textarea=null,this.resizeDebounce=null}render(){const e=document.createElement("div")
return this.textarea=document.createElement("textarea"),e.classList.add(this.CSS.baseClass,this.CSS.wrapper),this.textarea.classList.add(this.CSS.textarea,this.CSS.input),this.textarea.textContent=this.data.html,this.textarea.placeholder=this.placeholder,this.readOnly?this.textarea.disabled=!0:this.textarea.addEventListener("input",(()=>{this.onInput()})),e.appendChild(this.textarea),setTimeout((()=>{this.resize()}),100),e}save(e){return{html:e.querySelector("textarea").value}}static get DEFAULT_PLACEHOLDER(){return"Enter HTML code"}static get sanitize(){return{html:!0}}onInput(){this.resizeDebounce&&clearTimeout(this.resizeDebounce),this.resizeDebounce=setTimeout((()=>{this.resize()}),200)}resize(){this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px"}}return e}()},8633:function(e){!function(){var e
try{if(typeof document<"u"){var t=document.createElement("style")
t.nonce=null==(e=document.head.querySelector("meta[property=csp-nonce]"))?void 0:e.content,t.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}(),e.exports=function(){"use strict"
function e(e,t,n={}){const i=document.createElement(e)
Array.isArray(t)?i.classList.add(...t):t&&i.classList.add(t)
for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])
return i}function t(e){const t=e.getBoundingClientRect()
return{y1:Math.floor(t.top+window.pageYOffset),x1:Math.floor(t.left+window.pageXOffset),x2:Math.floor(t.right+window.pageXOffset),y2:Math.floor(t.bottom+window.pageYOffset)}}function n(e,n){const i=t(e),o=t(n)
return{fromTopBorder:o.y1-i.y1,fromLeftBorder:o.x1-i.x1,fromRightBorder:i.x2-o.x2,fromBottomBorder:i.y2-o.y2}}function i(e,t){return t.parentNode.insertBefore(e,t)}function o(e,t=!0){const n=document.createRange(),i=window.getSelection()
n.selectNodeContents(e),n.collapse(t),i.removeAllRanges(),i.addRange(n)}class r{constructor({items:e}){this.items=e,this.wrapper=void 0,this.itemEls=[]}static get CSS(){return{popover:"tc-popover",popoverOpened:"tc-popover--opened",item:"tc-popover__item",itemHidden:"tc-popover__item--hidden",itemConfirmState:"tc-popover__item--confirm",itemIcon:"tc-popover__item-icon",itemLabel:"tc-popover__item-label"}}render(){return this.wrapper=e("div",r.CSS.popover),this.items.forEach(((t,n)=>{const i=e("div",r.CSS.item),o=e("div",r.CSS.itemIcon,{innerHTML:t.icon}),s=e("div",r.CSS.itemLabel,{textContent:t.label})
i.dataset.index=n,i.appendChild(o),i.appendChild(s),this.wrapper.appendChild(i),this.itemEls.push(i)})),this.wrapper.addEventListener("click",(e=>{this.popoverClicked(e)})),this.wrapper}popoverClicked(e){const t=e.target.closest(`.${r.CSS.item}`)
if(!t)return
const n=t.dataset.index,i=this.items[n]
!i.confirmationRequired||this.hasConfirmationState(t)?i.onClick():this.setConfirmationState(t)}setConfirmationState(e){e.classList.add(r.CSS.itemConfirmState)}clearConfirmationState(e){e.classList.remove(r.CSS.itemConfirmState)}hasConfirmationState(e){return e.classList.contains(r.CSS.itemConfirmState)}get opened(){return this.wrapper.classList.contains(r.CSS.popoverOpened)}open(){this.items.forEach(((e,t)=>{"function"==typeof e.hideIf&&this.itemEls[t].classList.toggle(r.CSS.itemHidden,e.hideIf())})),this.wrapper.classList.add(r.CSS.popoverOpened)}close(){this.wrapper.classList.remove(r.CSS.popoverOpened),this.itemEls.forEach((e=>{this.clearConfirmationState(e)}))}}const s='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>'
class l{constructor({api:e,items:t,onOpen:n,onClose:i,cssModifier:o=""}){this.api=e,this.items=t,this.onOpen=n,this.onClose=i,this.cssModifier=o,this.popover=null,this.wrapper=this.createToolbox()}static get CSS(){return{toolbox:"tc-toolbox",toolboxShowed:"tc-toolbox--showed",toggler:"tc-toolbox__toggler"}}get element(){return this.wrapper}createToolbox(){const t=e("div",[l.CSS.toolbox,this.cssModifier?`${l.CSS.toolbox}--${this.cssModifier}`:""])
t.dataset.mutationFree="true"
const n=this.createPopover(),i=this.createToggler()
return t.appendChild(i),t.appendChild(n),t}createToggler(){const t=e("div",l.CSS.toggler,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>'})
return t.addEventListener("click",(()=>{this.togglerClicked()})),t}createPopover(){return this.popover=new r({items:this.items}),this.popover.render()}togglerClicked(){this.popover.opened?(this.popover.close(),this.onClose()):(this.popover.open(),this.onOpen())}show(e){const t=e()
Object.entries(t).forEach((([e,t])=>{this.wrapper.style[e]=t})),this.wrapper.classList.add(l.CSS.toolboxShowed)}hide(){this.popover.close(),this.wrapper.classList.remove(l.CSS.toolboxShowed)}}const c="tc-wrap",d="tc-table",u="tc-row",h="tc-table--heading",p="tc-row--selected",f="tc-cell",m="tc-cell--selected",g="tc-add-row",b="tc-add-row--disabled",v="tc-add-column",y="tc-add-column--disabled"
class w{constructor(e,t,n,i){this.readOnly=e,this.api=t,this.data=n,this.config=i,this.wrapper=null,this.table=null,this.toolboxColumn=this.createColumnToolbox(),this.toolboxRow=this.createRowToolbox(),this.createTableWrapper(),this.hoveredRow=0,this.hoveredColumn=0,this.selectedRow=0,this.selectedColumn=0,this.tunes={withHeadings:!1},this.resize(),this.fill(),this.focusedCell={row:0,column:0},this.documentClicked=e=>{const t=null!==e.target.closest(`.${d}`),n=null===e.target.closest(`.${c}`);(t||n)&&this.hideToolboxes()
const i=e.target.closest(`.${g}`),o=e.target.closest(`.${v}`)
i&&i.parentNode===this.wrapper?(this.addRow(void 0,!0),this.hideToolboxes()):o&&o.parentNode===this.wrapper&&(this.addColumn(void 0,!0),this.hideToolboxes())},this.readOnly||this.bindEvents()}getWrapper(){return this.wrapper}bindEvents(){document.addEventListener("click",this.documentClicked),this.table.addEventListener("mousemove",function(e,t){let n=0
return function(...e){const i=(new Date).getTime()
if(!(i-n<150))return n=i,t(...e)}}(0,(e=>this.onMouseMoveInTable(e))),{passive:!0}),this.table.onkeypress=e=>this.onKeyPressListener(e),this.table.addEventListener("keydown",(e=>this.onKeyDownListener(e))),this.table.addEventListener("focusin",(e=>this.focusInTableListener(e)))}createColumnToolbox(){return new l({api:this.api,cssModifier:"column",items:[{label:this.api.i18n.t("Add column to left"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>',hideIf:()=>this.numberOfColumns===this.config.maxcols,onClick:()=>{this.addColumn(this.selectedColumn,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add column to right"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>',hideIf:()=>this.numberOfColumns===this.config.maxcols,onClick:()=>{this.addColumn(this.selectedColumn+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete column"),icon:s,hideIf:()=>1===this.numberOfColumns,confirmationRequired:!0,onClick:()=>{this.deleteColumn(this.selectedColumn),this.hideToolboxes()}}],onOpen:()=>{this.selectColumn(this.hoveredColumn),this.hideRowToolbox()},onClose:()=>{this.unselectColumn()}})}createRowToolbox(){return new l({api:this.api,cssModifier:"row",items:[{label:this.api.i18n.t("Add row above"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>',hideIf:()=>this.numberOfRows===this.config.maxrows,onClick:()=>{this.addRow(this.selectedRow,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Add row below"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>',hideIf:()=>this.numberOfRows===this.config.maxrows,onClick:()=>{this.addRow(this.selectedRow+1,!0),this.hideToolboxes()}},{label:this.api.i18n.t("Delete row"),icon:s,hideIf:()=>1===this.numberOfRows,confirmationRequired:!0,onClick:()=>{this.deleteRow(this.selectedRow),this.hideToolboxes()}}],onOpen:()=>{this.selectRow(this.hoveredRow),this.hideColumnToolbox()},onClose:()=>{this.unselectRow()}})}moveCursorToNextRow(){this.focusedCell.row!==this.numberOfRows?(this.focusedCell.row+=1,this.focusCell(this.focusedCell)):(this.addRow(),this.focusedCell.row+=1,this.focusCell(this.focusedCell),this.updateToolboxesPosition(0,0))}getCell(e,t){return this.table.querySelectorAll(`.${u}:nth-child(${e}) .${f}`)[t-1]}getRow(e){return this.table.querySelector(`.${u}:nth-child(${e})`)}getRowByCell(e){return e.parentElement}getRowFirstCell(e){return e.querySelector(`.${f}:first-child`)}setCellContent(e,t,n){this.getCell(e,t).innerHTML=n}addColumn(e=-1,t=!1){var n
let r=this.numberOfColumns
if(this.config&&this.config.maxcols&&this.numberOfColumns>=this.config.maxcols)return
for(let a=1;a<=this.numberOfRows;a++){let n
const s=this.createCell()
if(e>0&&e<=r?(n=this.getCell(a,e),i(s,n)):n=this.getRow(a).appendChild(s),1===a){const n=this.getCell(a,e>0?e:r+1)
n&&t&&o(n)}}const s=this.wrapper.querySelector(`.${v}`)
null!=(n=this.config)&&n.maxcols&&this.numberOfColumns>this.config.maxcols-1&&s&&s.classList.add(y),this.addHeadingAttrToFirstRow()}addRow(t=-1,n=!1){let r,s=e("div",u)
this.tunes.withHeadings&&this.removeHeadingAttrFromFirstRow()
let a=this.numberOfColumns
if(this.config&&this.config.maxrows&&this.numberOfRows>=this.config.maxrows&&c)return
r=t>0&&t<=this.numberOfRows?i(s,this.getRow(t)):this.table.appendChild(s),this.fillRow(r,a),this.tunes.withHeadings&&this.addHeadingAttrToFirstRow()
const l=this.getRowFirstCell(r)
l&&n&&o(l)
const c=this.wrapper.querySelector(`.${g}`)
return this.config&&this.config.maxrows&&this.numberOfRows>=this.config.maxrows&&c&&c.classList.add(b),r}deleteColumn(e){for(let n=1;n<=this.numberOfRows;n++){const t=this.getCell(n,e)
if(!t)return
t.remove()}const t=this.wrapper.querySelector(`.${v}`)
t&&t.classList.remove(y)}deleteRow(e){this.getRow(e).remove()
const t=this.wrapper.querySelector(`.${g}`)
t&&t.classList.remove(b),this.addHeadingAttrToFirstRow()}createTableWrapper(){if(this.wrapper=e("div",c),this.table=e("div",d),this.readOnly&&this.wrapper.classList.add("tc-wrap--readonly"),this.wrapper.appendChild(this.toolboxRow.element),this.wrapper.appendChild(this.toolboxColumn.element),this.wrapper.appendChild(this.table),!this.readOnly){const t=e("div",v,{innerHTML:a}),n=e("div",g,{innerHTML:a})
this.wrapper.appendChild(t),this.wrapper.appendChild(n)}}computeInitialSize(){const e=this.data&&this.data.content,t=Array.isArray(e),n=!!t&&e.length,i=t?e.length:void 0,o=n?e[0].length:void 0,r=Number.parseInt(this.config&&this.config.rows),s=Number.parseInt(this.config&&this.config.cols),a=!isNaN(r)&&r>0?r:void 0,l=!isNaN(s)&&s>0?s:void 0
return{rows:i||a||2,cols:o||l||2}}resize(){const{rows:e,cols:t}=this.computeInitialSize()
for(let n=0;n<e;n++)this.addRow()
for(let n=0;n<t;n++)this.addColumn()}fill(){const e=this.data
if(e&&e.content)for(let t=0;t<e.content.length;t++)for(let n=0;n<e.content[t].length;n++)this.setCellContent(t+1,n+1,e.content[t][n])}fillRow(e,t){for(let n=1;n<=t;n++){const t=this.createCell()
e.appendChild(t)}}createCell(){return e("div",f,{contentEditable:!this.readOnly})}get numberOfRows(){return this.table.childElementCount}get numberOfColumns(){return this.numberOfRows?this.table.querySelectorAll(`.${u}:first-child .${f}`).length:0}get isColumnMenuShowing(){return 0!==this.selectedColumn}get isRowMenuShowing(){return 0!==this.selectedRow}onMouseMoveInTable(e){const{row:t,column:n}=this.getHoveredCell(e)
this.hoveredColumn=n,this.hoveredRow=t,this.updateToolboxesPosition()}onKeyPressListener(e){if("Enter"===e.key){if(e.shiftKey)return!0
this.moveCursorToNextRow()}return"Enter"!==e.key}onKeyDownListener(e){"Tab"===e.key&&e.stopPropagation()}focusInTableListener(e){const t=e.target,n=this.getRowByCell(t)
this.focusedCell={row:Array.from(this.table.querySelectorAll(`.${u}`)).indexOf(n)+1,column:Array.from(n.querySelectorAll(`.${f}`)).indexOf(t)+1}}hideToolboxes(){this.hideRowToolbox(),this.hideColumnToolbox(),this.updateToolboxesPosition()}hideRowToolbox(){this.unselectRow(),this.toolboxRow.hide()}hideColumnToolbox(){this.unselectColumn(),this.toolboxColumn.hide()}focusCell(){this.focusedCellElem.focus()}get focusedCellElem(){const{row:e,column:t}=this.focusedCell
return this.getCell(e,t)}updateToolboxesPosition(e=this.hoveredRow,t=this.hoveredColumn){this.isColumnMenuShowing||t>0&&t<=this.numberOfColumns&&this.toolboxColumn.show((()=>({left:`calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${t} - 1) * 2))`}))),this.isRowMenuShowing||e>0&&e<=this.numberOfRows&&this.toolboxRow.show((()=>{const t=this.getRow(e),{fromTopBorder:i}=n(this.table,t),{height:o}=t.getBoundingClientRect()
return{top:`${Math.ceil(i+o/2)}px`}}))}setHeadingsSetting(e){this.tunes.withHeadings=e,e?(this.table.classList.add(h),this.addHeadingAttrToFirstRow()):(this.table.classList.remove(h),this.removeHeadingAttrFromFirstRow())}addHeadingAttrToFirstRow(){for(let e=1;e<=this.numberOfColumns;e++){let t=this.getCell(1,e)
t&&t.setAttribute("heading",this.api.i18n.t("Heading"))}}removeHeadingAttrFromFirstRow(){for(let e=1;e<=this.numberOfColumns;e++){let t=this.getCell(1,e)
t&&t.removeAttribute("heading")}}selectRow(e){const t=this.getRow(e)
t&&(this.selectedRow=e,t.classList.add(p))}unselectRow(){if(this.selectedRow<=0)return
const e=this.table.querySelector(`.${p}`)
e&&e.classList.remove(p),this.selectedRow=0}selectColumn(e){for(let t=1;t<=this.numberOfRows;t++){const n=this.getCell(t,e)
n&&n.classList.add(m)}this.selectedColumn=e}unselectColumn(){if(this.selectedColumn<=0)return
let e=this.table.querySelectorAll(`.${m}`)
Array.from(e).forEach((e=>{e.classList.remove(m)})),this.selectedColumn=0}getHoveredCell(e){let t=this.hoveredRow,n=this.hoveredColumn
const{width:i,height:o,x:r,y:s}=function(e,t){const n=e.getBoundingClientRect(),{width:i,height:o,x:r,y:s}=n,{clientX:a,clientY:l}=t
return{width:i,height:o,x:a-r,y:l-s}}(this.table,e)
return r>=0&&(n=this.binSearch(this.numberOfColumns,(e=>this.getCell(1,e)),(({fromLeftBorder:e})=>r<e),(({fromRightBorder:e})=>r>i-e))),s>=0&&(t=this.binSearch(this.numberOfRows,(e=>this.getCell(e,1)),(({fromTopBorder:e})=>s<e),(({fromBottomBorder:e})=>s>o-e))),{row:t||this.hoveredRow,column:n||this.hoveredColumn}}binSearch(e,t,i,o){let r,s=0,a=e+1,l=0
for(;s<a-1&&l<10;){r=Math.ceil((s+a)/2)
const e=t(r),c=n(this.table,e)
if(i(c))a=r
else{if(!o(c))break
s=r}l++}return r}getData(){const e=[]
for(let t=1;t<=this.numberOfRows;t++){const n=this.table.querySelector(`.${u}:nth-child(${t})`),i=Array.from(n.querySelectorAll(`.${f}`))
i.every((e=>!e.textContent.trim()))||e.push(i.map((e=>e.innerHTML)))}return e}destroy(){document.removeEventListener("click",this.documentClicked)}}return class{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:e,config:t,api:n,readOnly:i,block:o}){this.api=n,this.readOnly=i,this.config=t,this.data={withHeadings:this.getConfig("withHeadings",!1,e),stretched:this.getConfig("stretched",!1,e),content:e&&e.content?e.content:[]},this.table=null,this.block=o}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',title:"Table"}}render(){return this.table=new w(this.readOnly,this.api,this.data,this.config),this.container=e("div",this.api.styles.block),this.container.appendChild(this.table.getWrapper()),this.table.setHeadingsSetting(this.data.withHeadings),this.container}renderSettings(){return[{label:this.api.i18n.t("With headings"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',isActive:this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!0,this.table.setHeadingsSetting(this.data.withHeadings)}},{label:this.api.i18n.t("Without headings"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',isActive:!this.data.withHeadings,closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.withHeadings=!1,this.table.setHeadingsSetting(this.data.withHeadings)}},{label:this.data.stretched?this.api.i18n.t("Collapse"):this.api.i18n.t("Stretch"),icon:this.data.stretched?'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',closeOnActivate:!0,toggle:!0,onActivate:()=>{this.data.stretched=!this.data.stretched,this.block.stretched=this.data.stretched}}]}save(){const e=this.table.getData()
return{withHeadings:this.data.withHeadings,stretched:this.data.stretched,content:e}}destroy(){this.table.destroy()}getConfig(e,t=void 0,n=void 0){const i=this.data||n
return i?i[e]?i[e]:t:this.config&&this.config[e]?this.config[e]:t}static get pasteConfig(){return{tags:["TABLE","TR","TH","TD"]}}onPaste(e){const t=e.detail.data,n=t.querySelector(":scope > thead, tr:first-of-type th"),i=Array.from(t.querySelectorAll("tr")).map((e=>Array.from(e.querySelectorAll("th, td")).map((e=>e.innerHTML))))
this.data={withHeadings:null!==n,content:i},this.table.wrapper&&this.table.wrapper.replaceWith(this.render())}}}()},4624:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>U})
var i=n(3241),o=(n(1603),n(2181))
const r={buildURL:function(e,t,n,i,o){switch(i){case"findRecord":return this.urlForFindRecord(t,e,n)
case"findAll":return this.urlForFindAll(e,n)
case"query":return this.urlForQuery(o||{},e)
case"queryRecord":return this.urlForQueryRecord(o||{},e)
case"findMany":return this.urlForFindMany(t,e,n)
case"findHasMany":return this.urlForFindHasMany(t,e,n)
case"findBelongsTo":return this.urlForFindBelongsTo(t,e,n)
case"createRecord":return this.urlForCreateRecord(e,n)
case"updateRecord":return this.urlForUpdateRecord(t,e,n)
case"deleteRecord":return this.urlForDeleteRecord(t,e,n)
default:return this._buildURL(e,t)}},_buildURL:function(e,t){let n
const i=[],{host:o}=this,r=this.urlPrefix()
e&&(n=this.pathForType(e),n&&i.push(n)),t&&i.push(encodeURIComponent(t)),r&&i.unshift(r)
let s=i.join("/")
return!o&&s&&"/"!==s.charAt(0)&&(s="/"+s),s},urlForFindRecord:function(e,t,n){return this._buildURL(t,e)},urlForFindAll:function(e,t){return this._buildURL(e)},urlForQueryRecord:function(e,t){return this._buildURL(t)},urlForQuery:function(e,t){return this._buildURL(t)},urlForFindMany:function(e,t,n){return this._buildURL(t)},urlForFindHasMany:function(e,t,n){return this._buildURL(t,e)},urlForFindBelongsTo:function(e,t,n){return this._buildURL(t,e)},urlForCreateRecord:function(e,t){return this._buildURL(e)},urlForDeleteRecord:function(e,t,n){return this._buildURL(t,e)},urlForUpdateRecord:function(e,t,n){return this._buildURL(t,e)},urlPrefix:function(e,t){const{namespace:n}=this
let{host:i}=this
if(i&&"/"!==i||(i=""),e)return/^\/\//.test(e)||/http(s)?:\/\//.test(e)?e:"/"===e.charAt(0)?`${i}${e}`:`${t}/${e}`
const o=[]
return i&&o.push(i),n&&o.push(n),o.join("/")},pathForType:function(e){const t=(0,i.PT)(e)
return(0,i.td)(t)}},s=n.n(o)().create(r)
var a=n(1491)
const l=/\r?\n/
function c(e){const t=Object.create(null)
if(!e)return t
const n=e.split(l)
for(let i=0;i<n.length;i++){const e=n[i]
let o=0,r=!1
for(;o<e.length;o++)if(58===e.charCodeAt(o)){r=!0
break}if(!1===r)continue
const s=e.substring(0,o).trim(),a=e.substring(o+1,e.length).trim()
a&&(t[s.toLowerCase()]=a,t[s]=a)}return t}const d=/\[\]$/
function u(e,t,n){let i,o,r
if(e)if(function(e){return Array.isArray(e)}(t))for(i=0,o=t.length;i<o;i++)d.test(e)?h(n,e,t[i]):u(e+"["+("object"==typeof t[i]&&null!==t[i]?i:"")+"]",t[i],n)
else if(function(e){return"[object Object]"===Object.prototype.toString.call(e)}(t))for(r in t)u(e+"["+r+"]",t[r],n)
else h(n,e,t)
else if(function(e){return Array.isArray(e)}(t))for(i=0,o=t.length;i<o;i++)h(n,t[i].name,t[i].value)
else for(r in t)u(r,t[r],n)
return n}function h(e,t,n){void 0!==n&&(null===n&&(n=""),n="function"==typeof n?n():n,e[e.length]=`${encodeURIComponent(t)}=${encodeURIComponent(n)}`)}let p=null
function f(e,t,n,i={includeId:!0}){(0,a.upgradeStore)(e)
const o=e.serializerFor(t.modelName)
if("function"==typeof o.serializeIntoHash){const e={}
return o.serializeIntoHash(e,t,n,i),e}return o.serialize(n,i)}var m=n(2294),g=n(4471),b=n.n(g),v=n(7375)
function y(e,t="Adapter operation failed"){this.isAdapterError=!0
const n=Error.call(this,t)
n&&(this.stack=n.stack,this.description=n.description,this.fileName=n.fileName,this.lineNumber=n.lineNumber,this.message=n.message,this.name=n.name,this.number=n.number),this.errors=e||[{title:"Adapter Error",detail:t}]}y.prototype=Object.create(Error.prototype),y.prototype.code="AdapterError",y.extend=k(y)
const w=(0,v.L1)("AdapterError",y)
function k(e){return function({message:t}={}){return _(e,t)}}function _(e,t){const n=function(n,i){e.call(this,n,i||t)}
return n.prototype=Object.create(e.prototype),n.extend=k(n),n}const x=(0,v.L1)("InvalidError",_(w,"The adapter rejected the commit because it was invalid"))
x.prototype.code="InvalidError"
const C=(0,v.L1)("TimeoutError",_(w,"The adapter operation timed out"))
C.prototype.code="TimeoutError"
const E=(0,v.L1)("AbortError",_(w,"The adapter operation was aborted"))
E.prototype.code="AbortError"
const S=(0,v.L1)("UnauthorizedError",_(w,"The adapter operation is unauthorized"))
S.prototype.code="UnauthorizedError"
const T=(0,v.L1)("ForbiddenError",_(w,"The adapter operation is forbidden"))
T.prototype.code="ForbiddenError"
const O=(0,v.L1)("NotFoundError",_(w,"The adapter could not find the resource"))
O.prototype.code="NotFoundError"
const M=(0,v.L1)("ConflictError",_(w,"The adapter operation failed due to a conflict"))
M.prototype.code="ConflictError"
const A=(0,v.L1)("ServerError",_(w,"The adapter operation failed due to a server error"))
A.prototype.code="ServerError"
var R=n(2735)
const I=new WeakMap
var B=new WeakMap
class P extends(b()){constructor(...e){var t,n
super(...e),t=B,n=void function(e,t){let n=function(e,t){var n
let i=e.prototype
for(;i;){let e=null==(n=I.get(i))?void 0:n.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,n)}findRecord(e,t,n,i){}findAll(e,t,n,i){}query(e,t,n){}queryRecord(e,t,n,i){}serialize(e,t){return e.serialize(t)}createRecord(e,t,n){}updateRecord(e,t,n){}deleteRecord(e,t,n){}get coalesceFindRequests(){const e=this._coalesceFindRequests
return"boolean"==typeof e?e:this._coalesceFindRequests=!0}set coalesceFindRequests(e){this._coalesceFindRequests=e}groupRecordsForFindMany(e,t){return[t]}shouldReloadRecord(e,t){return!1}shouldReloadAll(e,t){return!t.length}shouldBackgroundReloadRecord(e,t){return!0}shouldBackgroundReloadAll(e,t){return!0}}function L(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e,t,n){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let o of n)i=o(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,n){let i=I.get(e)
i||(i=new Map,I.set(e,i)),i.set(t,n)}(e,t,i)}(P.prototype,"store",[R.inject])
class j extends(P.extend(s)){constructor(...e){super(...e),L(this,"useFetch",!0),L(this,"_defaultContentType","application/json; charset=utf-8"),L(this,"maxURLLength",2048)}get fastboot(){return this._fastboot||(this._fastboot=(0,m.getOwner)(this).lookup("service:fastboot"))}set fastboot(e){this._fastboot=e}sortQueryParams(e){const t=Object.keys(e),n=t.length
if(n<2)return e
const i={},o=t.sort()
for(let r=0;r<n;r++)i[o[r]]=e[o[r]]
return i}get coalesceFindRequests(){const e=this._coalesceFindRequests
return"boolean"==typeof e?e:this._coalesceFindRequests=!1}set coalesceFindRequests(e){this._coalesceFindRequests=e}findRecord(e,t,n,i){const o=this.buildURL(t.modelName,n,i,"findRecord"),r=this.buildQuery(i)
return this.ajax(o,"GET",{data:r})}findAll(e,t,n,i){const o=this.buildQuery(i),r=this.buildURL(t.modelName,null,i,"findAll")
return n&&(o.since=n),this.ajax(r,"GET",{data:o})}query(e,t,n){const i=this.buildURL(t.modelName,null,null,"query",n)
return this.sortQueryParams&&(n=this.sortQueryParams(n)),this.ajax(i,"GET",{data:n})}queryRecord(e,t,n,i){const o=this.buildURL(t.modelName,null,null,"queryRecord",n)
return this.sortQueryParams&&(n=this.sortQueryParams(n)),this.ajax(o,"GET",{data:n})}findMany(e,t,n,i){const o=this.buildURL(t.modelName,n,i,"findMany")
return this.ajax(o,"GET",{data:{ids:n}})}findHasMany(e,t,n,i){const o=t.id,r=t.modelName
return n=this.urlPrefix(n,this.buildURL(r,o,t,"findHasMany")),this.ajax(n,"GET")}findBelongsTo(e,t,n,i){const o=t.id,r=t.modelName
return n=this.urlPrefix(n,this.buildURL(r,o,t,"findBelongsTo")),this.ajax(n,"GET")}createRecord(e,t,n){const i=this.buildURL(t.modelName,null,n,"createRecord"),o=f(e,t,n)
return this.ajax(i,"POST",{data:o})}updateRecord(e,t,n){const i=f(e,t,n,{}),o=n.modelName,r=n.id,s=this.buildURL(o,r,n,"updateRecord")
return this.ajax(s,"PUT",{data:i})}deleteRecord(e,t,n){const i=n.modelName,o=n.id
return this.ajax(this.buildURL(i,o,n,"deleteRecord"),"DELETE")}_stripIDFromURL(e,t){const n=t.modelName,i=t.id,o=this.buildURL(n,i,t).split("/"),r=o[o.length-1]
return decodeURIComponent(r)===i?o[o.length-1]="":i&&function(e,t){return"function"!=typeof String.prototype.endsWith?e.includes(t,e.length-t.length):e.endsWith(t)}(r,"?id="+i)&&(o[o.length-1]=r.substring(0,r.length-i.length-1)),o.join("/")}groupRecordsForFindMany(e,t){const n=new Map,i=this.maxURLLength
t.forEach((t=>{const i=this._stripIDFromURL(e,t)
n.has(i)||n.set(i,[]),n.get(i).push(t)}))
const o=[]
return n.forEach(((t,n)=>{const r=function(e,t,n,i){let o=0
const r=t._stripIDFromURL(e,n[0]),s=[[]]
return n.forEach((e=>{const t=encodeURIComponent(e.id).length+11
r.length+o+t>=i&&(o=0,s.push([])),o+=t
const n=s.length-1
s[n].push(e)})),s}(e,this,t,i)
r.forEach((e=>o.push(e)))})),o}handleResponse(e,t,n,i){if(this.isSuccess(e,t,n))return n
if(this.isInvalid(e,t,n))return new x("object"==typeof n&&"errors"in n?n.errors:void 0)
const o=this.normalizeErrorResponse(e,t,n),r=this.generatedDetailedMessage(e,t,n,i)
switch(e){case 401:return new S(o,r)
case 403:return new T(o,r)
case 404:return new O(o,r)
case 409:return new M(o,r)
default:if(e>=500)return new A(o,r)}return new w(o,r)}isSuccess(e,t,n){return e>=200&&e<300||304===e}isInvalid(e,t,n){return 422===e}async ajax(e,t,n={}){const i={url:e,method:t}
if(this.useFetch){const o=this.ajaxOptions(e,t,n),r=await this._fetchRequest(o),s=await function(e,t){return(n=e.text(),Promise.resolve(n).catch((e=>e))).then((n=>function(e,t,n){let i=n,o=null
if(!e.ok)return n
const r=e.status,s=""===n||null===n,a=204===r||205===r||"HEAD"===t.method
if(!e.ok||!a&&!s){try{i=JSON.parse(n)}catch(e){if(!(e instanceof SyntaxError))return e
e.payload=n,o=e}return o||i}}(e,t,n)))
var n}(r,i)
if(!r.ok||s instanceof Error)throw function(e,t,n,i,o){const r=F(n)
return 200===r.status&&t instanceof Error?(r.errorThrown=t,t=r.errorThrown.payload):(r.errorThrown=null,"string"==typeof t&&(t=e.parseErrorResponse(t))),D(e,t,o,r)}(this,s,r,0,i)
return function(e,t,n,i){return N(e,t,i,F(n))}(this,s,r,i)}return function(e,t,n){const i=e.ajaxOptions(t.url,t.method,n)
return new Promise(((n,o)=>{i.success=function(i,o,r){const s=function(e,t,n,i){return N(e,t,i,z(n))}(e,i,r,t)
n(s)},i.error=function(n,i,r){const s=function(e,t,n,i){const o=z(t)
o.errorThrown=n
const r=e.parseErrorResponse(t.responseText)
return D(e,r,i,o)}(e,n,r,t)
o(s)},e._ajax(i)}))}(this,i,n)}_ajaxRequest(e){jQuery.ajax(e)}_fetchRequest(e){const t=function(){if(null!==p)return p()
if("function"==typeof fetch)p=()=>fetch
else if("undefined"!=typeof FastBoot)try{const e=FastBoot.require("node-fetch"),t=/^https?:\/\//,n=/^\/\//
function i(e){if(null===e)throw new Error("Trying to fetch with relative url but the application hasn't finished loading FastBootInfo, see details at https://github.com/ember-cli/ember-fetch#relative-url")
const t="undefined:"===e.protocol?"http:":e.protocol
return[e.get("host"),t]}function o(e){if(n.test(e)){const[t]=i(null)
e=t+e}else if(!t.test(e)){const[t,n]=i(null)
e=n+"//"+t+e}return e}function r(t,n){if(t&&"object"==typeof t&&"href"in t){const i=o(t.href),r=Object.assign({},t,{url:i})
return e(r,n)}if("string"==typeof t){const i=o(t)
return e(i,n)}return e(t,n)}p=()=>r}catch{throw new Error("Unable to create a compatible 'fetch' for FastBoot with node-fetch")}return p()}()
return t(e.url,e)}_ajax(e){this.useFetch?this._fetchRequest(e):this._ajaxRequest(e)}ajaxOptions(e,t,n){let i=Object.assign({url:e,method:t,type:t},n)
void 0!==this.headers?i.headers={...this.headers,...i.headers}:n.headers||(i.headers={})
const o=i.contentType||this._defaultContentType
return this.useFetch?(i.data&&"GET"!==i.type&&i.headers&&(i.headers["Content-Type"]||i.headers["content-type"]||(i.headers["content-type"]=o)),i=function(e){if(e.credentials=e.credentials||"same-origin",e.data)if("GET"===e.method||"HEAD"===e.method){if(Object.keys(e.data).length&&e.url){const n=e.url.includes("?")?"&":"?"
e.url+=`${n}${t=e.data,u("",t,[]).join("&")}`}}else"[object Object]"===Object.prototype.toString.call(e.data)?e.body=JSON.stringify(e.data):e.body=e.data
var t
return e}(i)):(i.data&&"GET"!==i.type&&(i={...i,contentType:o}),i=function(e,t){return e.dataType="json",e.context=t,e.data&&"GET"!==e.type&&(e.data=JSON.stringify(e.data)),e.beforeSend=function(t){e.headers&&Object.keys(e.headers).forEach((n=>{const i=e.headers&&e.headers[n]
"string"==typeof i&&t.setRequestHeader(n,i)}))},e}(i,this)),i.url=this._ajaxURL(i.url),i}_ajaxURL(e){if(this.fastboot?.isFastBoot){const t=/^https?:\/\//,n=/^\/\//,i=this.fastboot.request.protocol,o=this.fastboot.request.host
if(n.test(e))return`${i}${e}`
if(!t.test(e))try{return`${i}//${o}${e}`}catch(e){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+e.message)}}return e}parseErrorResponse(e){let t=e
try{t=JSON.parse(e)}catch{}return t}normalizeErrorResponse(e,t,n){return n&&"object"==typeof n&&"errors"in n&&Array.isArray(n.errors)?n.errors:[{status:`${e}`,title:"The backend responded with an error",detail:"string"==typeof n?n:JSON.stringify(n)}]}generatedDetailedMessage(e,t,n,i){let o
const r=t["content-type"]||"Empty Content-Type"
return o="text/html"===r&&"string"==typeof n&&n.length>250?"[Omitted Lengthy HTML]":"object"==typeof n&&null!==n?JSON.stringify(n,null,2):n,["Ember Data Request "+i.method+" "+i.url+" returned a "+e,"Payload ("+r+")",o].join("\n")}buildQuery(e){const t={}
if(e){const{include:n}=e
n&&(t.include=n)}return t}}function N(e,t,n,i){let o
try{o=e.handleResponse(i.status,i.headers,t,n)}catch(e){return Promise.reject(e)}return o&&o.isAdapterError?Promise.reject(o):o}function D(e,t,n,i){let o
if(i.errorThrown instanceof Error&&""!==t)o=i.errorThrown
else if("timeout"===i.textStatus)o=new C
else if("abort"===i.textStatus||0===i.status)o=function(e,t){const{method:n,url:i,errorThrown:o}=e,{status:r}=t,s=[{title:"Adapter Error",detail:`Request failed: ${n} ${i} ${String(o??"")}`.trim(),status:r}]
return new E(s)}(n,i)
else try{o=e.handleResponse(i.status,i.headers,t||i.errorThrown,n)}catch(e){o=e}return o}function F(e){return{status:e.status,textStatus:e.statusText,headers:H(e.headers)}}function z(e){return{status:e.status,textStatus:e.statusText,headers:c(e.getAllResponseHeaders())}}function H(e){const t={}
return e&&e.forEach(((e,n)=>t[n]=e)),t}!function(e,t,n){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let o of n)i=o(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}(j.prototype,"fastboot",[(0,g.computed)()])
class U extends j{constructor(...e){var t,n,i
super(...e),t=this,i="application/vnd.api+json",(n=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(n="_defaultContentType"))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}ajaxOptions(e,t,n={}){const i=super.ajaxOptions(e,t,n),o=i.headers=i.headers||{}
return o.Accept=o.Accept||"application/vnd.api+json",i}get coalesceFindRequests(){const e=this._coalesceFindRequests
return"boolean"==typeof e?e:this._coalesceFindRequests=!1}set coalesceFindRequests(e){this._coalesceFindRequests=e}findMany(e,t,n,i){const o=this.buildURL(t.modelName,n,i,"findMany")
return this.ajax(o,"GET",{data:{filter:{id:n.join(",")}}})}pathForType(e){const t=(0,i._k)(e)
return(0,i.td)(t)}updateRecord(e,t,n){const i=f(e,t,n),o=n.modelName,r=n.id,s=this.buildURL(o,r,n,"updateRecord")
return this.ajax(s,"PATCH",{data:i})}buildQuery(e){const t={}
if(e){const{include:n}=e,i=Array.isArray(n)?n.join(","):n
i&&(t.include=i)}return t}}},7388:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>m})
var i=n(1389),o=n(1806),r=n.n(o),s=n(123),a=n(2735),l=n(3241),c=n(6730)
const d=new WeakMap,u=new WeakMap
function h(){const e={},t=[],n=(0,c.o)(this),i=this.store.schema.fields(n),o={name:"Attributes",properties:["id"],expand:!0},r=o.properties,s=[o]
for(const a of i.values())switch(a.kind){case"attribute":r.push(a.name)
break
case"belongsTo":case"hasMany":{let n=e[a.kind]
void 0===n&&(n=e[a.kind]=[],s.push({name:a.kind,properties:n,expand:!0})),n.push(a.name),t.push(a.name)
break}}return s.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:s,expensiveProperties:t}}}var p=new WeakMap
class f extends(r()){constructor(...e){var t,n
super(...e),t=p,n=void function(e,t){let n=function(e,t){var n
let i=e.prototype
for(;i;){let e=null==(n=d.get(i))?void 0:n.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,n)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:n}=this,i=function(e){let t=u.get(e)
return void 0===t&&(t=new Map,u.set(e,t)),t}(n),o=n.notifications.subscribe("resource",((o,s)=>{"added"===s&&this.watchTypeIfUnseen(n,i,o.type,e,t,r)})),r=[()=>{n.notifications.unsubscribe(o)}]
Object.keys(n.identifierCache._cache.resourcesByType).forEach((e=>{i.set(e,!1)})),i.forEach(((o,s)=>{this.watchTypeIfUnseen(n,i,s,e,t,r)}))
const s=()=>{r.forEach((e=>e())),i.forEach(((e,t)=>{i.set(t,!1)})),this.releaseMethods.removeObject(s)}
return this.releaseMethods.pushObject(s),s}watchTypeIfUnseen(e,t,n,i,o,r){if(!0!==t.get(n)){const s=e.modelFor(n)
s.prototype._debugInfo=h
const a=this.wrapModelType(s,n)
r.push(this.observeModelType(n,o)),i([a]),t.set(n,!0)}}columnNameToDesc(e){return(0,l.ZH)((0,l.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let n=0
return e.attributes.forEach(((e,i)=>{if(n++>this.attributeLimit)return!1
const o=this.columnNameToDesc(i)
t.push({name:i,desc:o})})),t}getRecords(e,t){if(arguments.length<2){const n=e._debugContainerKey
if(n){const e=n.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const n={id:e.id}
return e.eachAttribute((i=>{if(t++>this.attributeLimit)return!1
n[i]=e[i]})),n}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute((n=>{t.push(e[n])})),(0,i.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const n=[],i=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute((e=>i.push(e))),i.forEach((i=>{const o=()=>{t(this.wrapRecord(e))};(0,s.addObserver)(e,i,o),n.push((function(){(0,s.removeObserver)(e,i,o)}))})),function(){n.forEach((e=>e()))}}}!function(e,t,n){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let o of n)i=o(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,n){let i=d.get(e)
i||(i=new Map,d.set(e,i)),i.set(t,n)}(e,t,i)}(f.prototype,"store",[(0,a.inject)("store")])
const m=f},151:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{graphFor:()=>$,isBelongsTo:()=>d,peekGraph:()=>q})
var i=n(1603),o=n(1274),r=n(7375)
function s(e){return e._store}function a(e,t,n){return(e[t]=e[t]||Object.create(null))[n]}function l(e,t,n,i){(e[t]=e[t]||Object.create(null))[n]=i}function c(e){if(!e.id)return!0
const t=(0,o.oX)(e)
return Boolean(t?.isNew(e))}function d(e){return"belongsTo"===e.definition.kind}function u(e){return e.definition.isImplicit}function h(e){return"hasMany"===e.definition.kind}function p(e,t){if(d(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(h(e)){for(let n=0;n<e.remoteState.length;n++){const i=e.remoteState[n]
t(i)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((n=>{e.localMembers.has(n)||t(n)}))}function f(e,t,n,i){if(d(t))t.remoteState===n&&(t.remoteState=null),t.localState===n&&(t.localState=null,m(e,t.identifier,t.definition.key))
else if(h(t)){t.remoteMembers.delete(n),t.additions?.delete(n)
const i=t.removals?.delete(n),o=t.remoteState.indexOf(n)
if(-1!==o&&t.remoteState.splice(o,1),!i){const i=t.localState?.indexOf(n);-1!==i&&void 0!==i&&(t.localState.splice(i,1),m(e,t.identifier,t.definition.key))}}else t.remoteMembers.delete(n),t.localMembers.delete(n)}function m(e,t,n){t!==e._removing&&e.store.notifyChange(t,"relationships",n)}function g(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const b=null,v=Date.now()
function y(e,t){return`implicit-${e}:${t}${v}`}function w(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit
const n=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=n,t.resetOnRemoteUpdate=n}function k(e){var t
g(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const n={},i=e.options
return n.kind=e.kind,n.key=e.name,n.type=e.type,n.isAsync=i.async,n.isImplicit=!1,n.isCollection="hasMany"===e.kind,n.isPolymorphic=i&&!!i.polymorphic,n.inverseKey=i&&i.inverse||"",n.inverseType="",n.inverseIsAsync=b,n.inverseIsImplicit=i&&null===i.inverse||b,n.inverseIsCollection=b,n.resetOnRemoteUpdate=!!g(e)&&!1!==e.options?.resetOnRemoteUpdate,n}function _(e,t,n){n?function(e,t,n){const o=t.value,r=e.get(t.record,t.field)
n&&e._addToTransaction(r),r.state.hasReceivedData=!0
const{definition:s}=r,{type:a}=r.definition,l=T(o,r,(i=>{a!==i.type&&e.registerPolymorphicType(a,i.type),r.additions?.has(i)?r.additions.delete(i):r.isDirty=!0,x(e,i,s.inverseKey,t.record,n)}),(i=>{r.removals?.has(i)?r.removals.delete(i):r.isDirty=!0,C(e,i,s.inverseKey,t.record,n)}))
if(r.remoteMembers=l.finalSet,r.remoteState=l.finalState,l.changed&&(r.isDirty=!0),r._diff=l,"hasMany"===r.definition.kind&&!1!==r.definition.resetOnRemoteUpdate){const o={removals:[],additions:[],triggered:!1}
r.removals&&(r.isDirty=!0,r.removals.forEach((i=>{o.triggered=!0,o.removals.push(i),x(e,i,s.inverseKey,t.record,n)})),r.removals=null),r.additions&&(r.additions.forEach((i=>{c(i)||(o.triggered=!0,o.additions.push(i),r.isDirty=!0,r.additions.delete(i),C(e,i,s.inverseKey,t.record,n))})),0===r.additions.size&&(r.additions=null)),o.triggered&&(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${r.identifier.type}>.${r.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${o.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${o.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}r.isDirty&&E(e,r)}(e,t,n):function(e,t,n){const i=t.value,o=e.get(t.record,t.field),r=0===o.remoteState.length&&null===o.localState&&!1===o.state.hasReceivedData
o.state.hasReceivedData=!0
const{additions:s,removals:a}=o,{inverseKey:l,type:c}=o.definition,{record:d}=t,u=o.isDirty
o.isDirty=!1
const h=i=>{const r=a?.has(i)
!r&&s?.has(i)||(c!==i.type&&e.registerPolymorphicType(c,i.type),o.isDirty=!0,x(e,i,l,t.record,n),r&&a.delete(i))},p=t=>{const i=s?.has(t)
!i&&a?.has(t)||(o.isDirty=!0,C(e,t,l,d,n),i&&s.delete(t))},f=T(i,o,h,p)
o.isDirty||f.changed,s&&s.size>0&&s.forEach((e=>{f.add.has(e)||p(e)})),a&&a.size>0&&a.forEach((e=>{f.del.has(e)||h(e)})),o.additions=f.add,o.removals=f.del,o.localState=f.finalState,o.isDirty=u,(r||!u)&&m(e,t.record,t.field)}(e,t,n)}function x(e,t,n,i,o){const r=e.get(t,n),{type:s}=r.definition
s!==i.type&&e.registerPolymorphicType(s,i.type),d(r)?(r.state.hasReceivedData=!0,r.state.isEmpty=!1,o&&(e._addToTransaction(r),null!==r.remoteState&&C(e,r.remoteState,r.definition.inverseKey,t,o),r.remoteState=i),r.localState!==i&&(!o&&r.localState&&C(e,r.localState,r.definition.inverseKey,t,o),r.localState=i,m(e,t,n))):h(r)?o?r.remoteMembers.has(i)||(e._addToTransaction(r),r.remoteState.push(i),r.remoteMembers.add(i),r.additions?.has(i)?r.additions.delete(i):(r.isDirty=!0,r.state.hasReceivedData=!0,E(e,r))):O(e,0,r,i,null)&&m(e,t,n):o?r.remoteMembers.has(i)||(r.remoteMembers.add(i),r.localMembers.add(i)):r.localMembers.has(i)||r.localMembers.add(i)}function C(e,t,n,i,o){const r=e.get(t,n)
d(r)?(r.state.isEmpty=!0,o&&(e._addToTransaction(r),r.remoteState=null),r.localState===i&&(r.localState=null,m(e,t,n))):h(r)?o?(e._addToTransaction(r),function(e,t){const{remoteMembers:n,additions:i,removals:o,remoteState:r}=e
if(!n.has(t))return!1
n.delete(t)
let s=r.indexOf(t)
return r.splice(s,1),o?.has(t)?(o.delete(t),!1):(e.localState&&(s=e.localState.indexOf(t),e.localState.splice(s,1)),!0)}(r,i)&&m(e,t,n)):M(r,i)&&m(e,t,n):o?(r.remoteMembers.delete(i),r.localMembers.delete(i)):i&&r.localMembers.has(i)&&r.localMembers.delete(i)}function E(e,t){e._scheduleLocalSync(t)}function S(e,t,n=!1){const o=e.get(t.record,t.field)
n&&e._addToTransaction(o)
const{definition:r,state:s}=o,a=n?"remoteState":"localState",l=o[a]
if(t.value!==l)if(l&&C(e,l,r.inverseKey,t.record,n),o[a]=t.value,s.hasReceivedData=!0,s.isEmpty=null===t.value,s.isStale=!1,s.hasFailedLoadAttempt=!1,t.value&&(r.type!==t.value.type&&e.registerPolymorphicType(r.type,t.value.type),x(e,t.value,r.inverseKey,t.record,n)),n){const{localState:t,remoteState:n}=o
if(t&&c(t)&&!n)return
t!==n&&t===l?(o.localState=n,m(e,o.identifier,o.definition.key)):t!==n&&t!==l&&!1!==o.definition.resetOnRemoteUpdate&&(o.localState=n,(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${o.identifier.type}>.${o.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,o.identifier,o.definition.key))}else m(e,o.identifier,o.definition.key)
else if(s.hasReceivedData=!0,n){const{localState:s}=o
if(s&&c(s)&&!l)return
l&&s===l?function(e,t,n,i,o){const r=e.get(t,n)
h(r)&&o&&r.remoteMembers.has(i)&&m(e,t,n)}(e,l,r.inverseKey,t.record,n):s!==t.value&&!1!==o.definition.resetOnRemoteUpdate&&(o.localState=l,(0,i.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${o.identifier.type}>.${o.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${s?"Added: "+s.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,o.identifier,o.definition.key))}}function T(e,t,n,i){const o=new Set(e),{remoteState:r,remoteMembers:s}=t
if(e.length!==o.size){const{diff:t,duplicates:a}=function(e,t,n,i,o,r){const s=e.length,a=n.length,l=Math.max(s,a)
let c=t.size!==i.size
const d=new Set,u=new Set,h=new Map,p=new Set,f=[]
for(let m=0,g=0;m<l;m++){let l,b=!1
if(m<s)if(l=e[m],p.has(l)){let e=h.get(l)
void 0===e&&(e=[],h.set(l,e)),e.push(m)}else f[g]=l,p.add(l),b=!0,i.has(l)||(c=!0,d.add(l),o(l))
if(m<a){const e=n[m]
l!==n[g]&&(c=!0),t.has(e)||(c=!0,u.add(e),r(e))}else b&&g<a&&l!==n[g]&&(c=!0)
b&&g++}return{diff:{add:d,del:u,finalState:f,finalSet:p,changed:c},duplicates:h}}(e,o,r,s,n,i)
return t}return function(e,t,n,i,o,r){const s=e.length,a=n.length,l=Math.max(s,a),c=s===a
let d=t.size!==i.size
const u=new Set,h=new Set
for(let p=0;p<l;p++){let l
if(p<s&&(l=e[p],i.has(l)||(d=!0,u.add(l),o(l))),p<a){const e=n[p]
c&&l!==e&&(d=!0),t.has(e)||(d=!0,h.add(e),r(e))}}return{add:u,del:h,finalState:e,finalSet:t,changed:d}}(e,o,r,s,n,i)}function O(e,t,n,i,o){const{remoteMembers:r,removals:s}=n
let a=n.additions
if((r.has(i)||a?.has(i))&&!s?.has(i))return!1
if(s?.has(i))s.delete(i)
else{a||(a=n.additions=new Set),n.state.hasReceivedData=!0,a.add(i)
const{type:t}=n.definition
t!==i.type&&e.registerPolymorphicType(i.type,t)}return n.localState&&(null!==o?n.localState.splice(o,0,i):n.localState.push(i)),!0}function M(e,t){const{remoteMembers:n,additions:i}=e
let o=e.removals
if(!n.has(t)&&!i?.has(t)||o?.has(t))return!1
if(i?.has(t)?i.delete(t):(o||(o=e.removals=new Set),o.add(t)),e.localState){const n=e.localState.indexOf(t)
e.localState.splice(n,1)}return!0}function A(e,t,n,i){d(i)?S(e,{op:"replaceRelatedRecord",record:t,field:n,value:i.remoteState},!1):_(e,{op:"replaceRelatedRecords",record:t,field:n,value:i.remoteState.slice()},!1)}function R(e){const t={}
return e.state.hasReceivedData&&(t.data=function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const n=t.indexOf(e)
t.splice(n,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(t.links=e.links),e.meta&&(t.meta=e.meta),t}function I(e,t,n,i,o,r){O(e,0,t,i,o??null)&&x(e,i,t.definition.inverseKey,n,r)}function B(e,t,n,i,o){M(t,i)&&C(e,i,t.definition.inverseKey,n,o)}function P(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function L(e,t){for(let n=0;n<e.length;n++)e[n]=t.upgradeIdentifier(e[n])
return e}const j=(0,r.L1)("Graphs",new Map)
class N{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const n=this.identifiers.get(e)
return!!n&&void 0!==n[t]}getDefinition(e,t){let n=this._metaCache[e.type],i=n?.[t]
if(!i){const o=function(e,t,n){const i=e._definitionCache,o=e.store,r=e._potentialPolymorphicTypes,{type:c}=t
let d=a(i,c,n)
if(void 0!==d)return d
const u=o.schema.fields(t).get(n)
if(!u){if(r[c]){const e=Object.keys(r[c])
for(let t=0;t<e.length;t++){const o=a(i,e[t],n)
if(o)return l(i,c,n,o),o.rhs_modelNames.push(c),o}}return i[c][n]=null,null}const h=k(u)
let p,f
const m=h.type
if(null===h.inverseKey?p=null:(f=function(e,t,n){const i=e.schema.fields(t).get(n)
return i?i.options.inverse:null}(s(o),t,n),p=!f&&h.isPolymorphic&&h.inverseKey?{kind:"belongsTo",key:h.inverseKey,type:c,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:f?k(o.schema.fields({type:m}).get(f)):null),!p){f=y(c,n),p={kind:"implicit",key:f,type:c,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},w(h,p),w(p,h)
const e={lhs_key:`${c}:${n}`,lhs_modelNames:[c],lhs_baseModelName:c,lhs_relationshipName:n,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:p.key,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:p.key,rhs_definition:p,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:c===m,isReflexive:!1}
return l(i,m,f,e),l(i,c,n,e),e}const g=p.type
if(d=a(i,g,n)||a(i,m,f),d)return(d.lhs_baseModelName===g?d.lhs_modelNames:d.rhs_modelNames).push(c),l(i,c,n,d),d
w(h,p),w(p,h)
const b=[c]
c!==g&&b.push(g)
const v=g===m,_={lhs_key:`${g}:${n}`,lhs_modelNames:b,lhs_baseModelName:g,lhs_relationshipName:n,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:`${m}:${f}`,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:f,rhs_definition:p,rhs_isPolymorphic:p.isPolymorphic,hasInverse:!0,isSelfReferential:v,isReflexive:v&&n===f}
return l(i,g,n,_),l(i,c,n,_),l(i,m,f,_),_}(this,e,t)
i=function(e,t,n){const i=e.isSelfReferential
return 1==(n===e.lhs_relationshipName)&&(!0===i||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(o,e.type,t)?o.lhs_definition:o.rhs_definition,n=this._metaCache[e.type]=n||{},n[t]=i}return i}get(e,t){let n=this.identifiers.get(e)
n||(n=Object.create(null),this.identifiers.set(e,n))
let i=n[t]
if(!i){const o=this.getDefinition(e,t)
i="belongsTo"===o.kind?n[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null}}(o,e):"hasMany"===o.kind?n[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!0,transactionRef:0,_diff:void 0}}(o,e):n[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(o,e)}return i}getData(e,t){const n=this.get(e,t)
return d(n)?function(e){let t
const n={}
return e.localState&&(t=e.localState),null===e.localState&&e.state.hasReceivedData&&(t=null),e.links&&(n.links=e.links),void 0!==t&&(n.data=t),e.meta&&(n.meta=e.meta),n}(n):R(n)}registerPolymorphicType(e,t){const n=this._potentialPolymorphicTypes
let i=n[e]
i||(i=n[e]=Object.create(null)),i[t]=!0
let o=n[t]
o||(o=n[t]=Object.create(null)),o[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const n=Object.keys(t)
for(let i=0;i<n.length;i++){const o=t[n[i]]
if(void 0!==o&&o.definition.inverseIsAsync&&!c(e))return!1}return!0}unload(e,t){const n=this.identifiers.get(e)
n&&Object.keys(n).forEach((e=>{const i=n[e]
i&&(function(e,t,n){if(u(t))return void(e.isReleasable(t.identifier)&&z(e,t))
const{identifier:i}=t,{inverseKey:o}=t.definition
t.definition.inverseIsImplicit||p(t,(t=>function(e,t,n,i,o){if(!e.has(t,n))return
const r=e.get(t,n)
d(r)&&r.localState&&i!==r.localState||function(e,t,n,i){if(d(t)){const n=t.localState
!t.definition.isAsync||n&&c(n)?(t.localState===n&&null!==n&&(t.localState=null),t.remoteState===n&&null!==n&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!c(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,i||m(e,t.identifier,t.definition.key)}else!t.definition.isAsync||n&&c(n)?f(e,t,n):t.state.hasDematerializedInverse=!0,i||m(e,t.identifier,t.definition.key)}(e,r,i,o)}(e,t,o,i,n))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,F(t),t.definition.isAsync||n||m(e,t.identifier,t.definition.key))}(this,i,t),u(i)&&(n[e]=void 0))}))}_isDirty(e,t){const n=this.identifiers.get(e)
if(!n)return!1
const i=n[t]
if(!i)return!1
if(d(i))return i.localState!==i.remoteState
if(h(i)){const e=null!==i.additions&&i.additions.size>0,t=null!==i.removals&&i.removals.size>0
return e||t||H(i)}return!1}getChanged(e){const t=this.identifiers.get(e),n=new Map
if(!t)return n
const i=Object.keys(t)
for(let o=0;o<i.length;o++){const e=i[o],r=t[e]
if(r)if(d(r))r.localState!==r.remoteState&&n.set(e,{kind:"resource",remoteState:r.remoteState,localState:r.localState})
else if(h(r)){const t=null!==r.additions&&r.additions.size>0,i=null!==r.removals&&r.removals.size>0,o=H(r);(t||i||o)&&n.set(e,{kind:"collection",additions:new Set(r.additions),removals:new Set(r.removals),remoteState:r.remoteState,localState:R(r).data||[],reordered:o})}}return n}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const n=Object.keys(t)
for(let i=0;i<n.length;i++)if(this._isDirty(e,n[i]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),n=[]
if(!t)return n
const i=Object.keys(t)
for(let o=0;o<i.length;o++){const r=i[o],s=t[r]
s&&this._isDirty(e,r)&&(A(this,e,r,s),n.push(r))}return n}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,n){const i=e[t.kind]=e[t.kind]||new Map
let o=i.get(t.inverseType)
o||(o=new Map,i.set(t.inverseType,o))
let r=o.get(n.field)
r||(r=[],o.set(n.field,r)),r.push(n)}(this._pushedUpdates,t,e)}this._willSyncRemote||(this._willSyncRemote=!0,s(this.store)._schedule("coalesce",(()=>this._flushRemoteQueue())))}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,n){Object.keys(n).forEach((i=>{const o=n[i]
o&&function(e,t,n){n.identifier=t.value,p(n,(i=>{const o=e.get(i,n.definition.inverseKey)
!function(e,t,n){d(t)?function(e,t,n){t.remoteState===n.record&&(t.remoteState=n.value),t.localState===n.record&&(t.localState=n.value,m(e,t.identifier,t.definition.key))}(e,t,n):h(t)?function(e,t,n){if(t.remoteMembers.has(n.record)){t.remoteMembers.delete(n.record),t.remoteMembers.add(n.value)
const e=t.remoteState.indexOf(n.record)
t.remoteState.splice(e,1,n.value),t.isDirty=!0}t.additions?.has(n.record)&&(t.additions.delete(n.record),t.additions.add(n.value),t.isDirty=!0),t.removals?.has(n.record)&&(t.removals.delete(n.record),t.removals.add(n.value),t.isDirty=!0),t.isDirty&&m(e,t.identifier,t.definition.key)}(e,t,n):function(e,t,n){t.remoteMembers.has(n.record)&&(t.remoteMembers.delete(n.record),t.remoteMembers.add(n.value)),t.localMembers.has(n.record)&&(t.localMembers.delete(n.record),t.localMembers.add(n.value))}(0,t,n)}(e,o,t)}))}(e,t,o)}))}(this,e,t)
break}case"updateRelationship":(function(e,t){const n=e.get(t.record,t.field),{definition:o,state:r,identifier:s}=n,{isCollection:a}=o,l=t.value
let c=!1,d=!1
if(l.meta&&(n.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const n=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:s,field:t.field,value:L(l.data,n)},!0)}else e.update({op:"replaceRelatedRecord",record:s,field:t.field,value:l.data?e.store.identifierCache.upgradeIdentifier(l.data):null},!0)
else!1!==o.isAsync||r.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:s,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:s,field:t.field,value:null},!0))
if(l.links){const e=n.links
if(n.links=l.links,l.links.related){const t=P(l.links.related),n=e&&e.related?P(e.related):null,a=n?n.href:null
t&&t.href&&t.href!==a&&((0,i.warn)(`You pushed a record of type '${s.type}' with a relationship '${o.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,o.isAsync||r.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),d=!0)}}if(n.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
n.state.hasReceivedData=!0,n.state.isStale=!1,n.state.hasDematerializedInverse=!1,n.state.isEmpty=e}else d&&(a||!n.state.hasReceivedData||(u=n.transactionRef,h=e._transaction,0===u||null===h||u<h)?(n.state.isStale=!0,m(e,n.identifier,n.definition.key)):n.state.isStale=!1)
var u,h})(this,e)
break
case"deleteRecord":{const t=e.record,n=this.identifiers.get(t)
n&&(Object.keys(n).forEach((e=>{const t=n[e]
t&&(n[e]=void 0,z(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":S(this,e,t)
break
case"addToRelatedRecords":(function(e,t,n){const{record:i,value:o,index:r}=t,s=e.get(i,t.field)
if(Array.isArray(o))for(let a=0;a<o.length;a++)I(e,s,i,o[a],void 0!==r?r+a:r,n)
else I(e,s,i,o,r,n)
m(e,s.identifier,s.definition.key)})(this,e,t)
break
case"removeFromRelatedRecords":(function(e,t,n){const{record:i,value:o}=t,r=e.get(i,t.field)
if(Array.isArray(o))for(let s=0;s<o.length;s++)B(e,r,i,o[s],n)
else B(e,r,i,o,n)
m(e,r.identifier,r.definition.key)})(this,e,t)
break
case"replaceRelatedRecords":_(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,s(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,r.Yj)("transactionRef")??0
this._transaction=++e,(0,r.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:n,hasMany:i,belongsTo:o}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let r=0;r<n.length;r++)this.update(n[r],!0)
i&&D(this,i),o&&D(this,o),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>m(this,e.identifier,e.definition.key)))}destroy(){j.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function D(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let n=0;n<t.length;n++)e.update(t[n],!0)}(e,t)}))}))}function F(e){d(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function z(e,t){const{identifier:n}=t,{inverseKey:i}=t.definition
p(t,(t=>{e.has(t,i)&&f(e,e.get(t,i),n)})),d(t)?(t.definition.isAsync||F(t),t.localState=null):h(t)?t.definition.isAsync||(F(t),m(e,t.identifier,t.definition.key)):(t.remoteMembers.clear(),t.localMembers.clear())}function H(e){if(e.isDirty)return!1
const{remoteState:t,localState:n,additions:i,removals:o}=e
for(let r=0,s=0;r<t.length;r++){const e=t[r],a=n[s]
if(e!==a){if(o&&o.has(e))continue
if(i&&i.has(a)){s++,r--
continue}return!0}s++}return!1}function U(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function q(e){return j.get(U(e))}function $(e){const t=U(e)
let n=j.get(t)
return n||(n=new N(t),j.set(t,n),s(t)._graph=n),n}},7910:(e,t,n)=>{"use strict"
n.d(t,{F:()=>f,S:()=>p,a:()=>c,b:()=>l,c:()=>h,i:()=>d,n:()=>u,u:()=>v})
var i=n(1274),o=n(1603),r=n(6082),s=n(7375),a=n(3193)
class l{constructor(e,t,n={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=n.adapterOptions,this.include=n.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[i.u2].map((t=>e.createSnapshot(t))),this._snapshots}}function c(e){}function d(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function u(e,t,n,i,o,r){return e?e.normalizeResponse(t,n,i,o,r):i}class h{constructor(e,t,n){this._store=n,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const i=!!n._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,i&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,i){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,n=this._store.schema.fields(t),i=this._store.cache
return n.forEach(((n,o)=>{"attribute"===n.kind&&(e[o]=i.getAttr(t,o))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let n=0,i=t.length;n<i;n++){const i=t[n]
e[i]=this._changedAttributes[i].slice()}return e}belongsTo(e,t){const i=!(!t||!t.id)
let o
const r=this._store
if(!0===i&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===i&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
r.schema.fields({type:this.modelName}).get(e)
const s=(0,a.A)(n(151)).graphFor,{identifier:l}=this,c=s(this._store).getData(l,e),d=c&&c.data,u=d?r.identifierCache.getOrCreateRecordIdentifier(d):null
if(c&&void 0!==c.data){const e=r.cache
o=u&&!e.isDeleted(u)?i?u.id:r._fetchManager.createSnapshot(u):null}return i?this._belongsToIds[e]=o:this._belongsToRelationships[e]=o,o}hasMany(e,t){const i=!(!t||!t.ids)
let o
const r=this._hasManyIds[e],s=this._hasManyRelationships[e]
if(!0===i&&e in this._hasManyIds)return r
if(!1===i&&e in this._hasManyRelationships)return s
const l=this._store,c=(l.schema.fields({type:this.modelName}).get(e),(0,a.A)(n(151)).graphFor),{identifier:d}=this,u=c(this._store).getData(d,e)
return u.data&&(o=[],u.data.forEach((e=>{const t=l.identifierCache.getOrCreateRecordIdentifier(e)
l.cache.isDeleted(t)||(i?o.push(t.id):o.push(l._fetchManager.createSnapshot(t)))}))),i?this._hasManyIds[e]=o:this._hasManyRelationships[e]=o,o}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((n,i)=>{"attribute"===n.kind&&e.call(t,i,n)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((n,i)=>{"belongsTo"!==n.kind&&"hasMany"!==n.kind||e.call(t,i,n)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const p=(0,s.L1)("SaveOp",Symbol("SaveOp"))
class f{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new h(t,e,this._store)}scheduleSave(e,t){const n=(0,r.ud)(),i={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},o={snapshot:this.createSnapshot(e,t),resolver:n,identifier:e,options:t,queryRequest:i},s=this.requestCache._enqueue(n.promise,o.queryRequest)
return function(e,t){const{snapshot:n,resolver:i,identifier:o,options:r}=t,s=e.adapterFor(o.type),a=r[p],l=n.modelName,c=e.modelFor(l)
let d=Promise.resolve().then((()=>s[a](e,c,n)))
const h=e.serializerFor(l)
d=d.then((t=>{if(t)return u(h,e,c,t,n.id,a)})),i.resolve(d)}(this._store,o),s}scheduleFetch(e,t,i){const o={data:[{op:"findRecord",recordIdentifier:e,options:t}]},s=this.getPendingFetch(e,t)
if(s)return s
const l=e.type,c=(0,r.ud)(),d={identifier:e,resolver:c,options:t,queryRequest:o},u=c.promise,h=this._store,p=!h._instanceCache.recordIsLoaded(e)
let f=this.requestCache._enqueue(u,d.queryRequest).then((n=>{n.data&&!Array.isArray(n.data)&&(n.data.lid=e.lid)
const i=h._push(n,t.reload)
return i&&!Array.isArray(i)?i:e}),(t=>{const i=h.cache
if(!i||i.isEmpty(e)||p){let t=!0
if(!i){const i=(0,(0,a.A)(n(151)).graphFor)(h)
t=i.isReleasable(e),t||i.unload(e,!0)}(i||t)&&(h._enableAsyncFlush=!0,h._instanceCache.unloadRecord(e),h._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const m=this._pendingFetch
let g=m.get(l)
g||(g=new Map,m.set(l,g))
let b=g.get(e)
return b||(b=[],g.set(e,b)),b.push(d),d.promise=f,f}getPendingFetch(e,t){const n=this._pendingFetch.get(e.type)?.get(e)
if(n){const e=n.find((e=>function(e={},t={}){return n=e.adapterOptions,i=t.adapterOptions,(!n||n===i||0===Object.keys(n).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const n=(Array.isArray(e)?e:e.split(",")).sort(),i=(Array.isArray(t)?t:t.split(",")).sort()
if(n.join(",")===i.join(","))return!0
for(let o=0;o<n.length;o++)if(!i.includes(n[o]))return!1
return!0}(e.include,t.include)
var n,i}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,n)=>function(e,t,n){const i=e.adapterFor(n)
if(i.findMany&&i.coalesceFindRequests){const o=[]
t.forEach(((e,n)=>{e.length>1||(t.delete(n),o.push(e[0]))}))
const r=o.length
if(r>1){const t=new Array(r),s=new Map
for(let n=0;n<r;n++){const i=o[n]
t[n]=e._fetchManager.createSnapshot(i.identifier,i.options),s.set(t[n],i)}let a
a=i.groupRecordsForFindMany?i.groupRecordsForFindMany(e,t):[t]
for(let o=0,r=a.length;o<r;o++)b(e,s,a[o],i,n)}else 1===r&&g(e,i,o[0])}t.forEach((t=>{t.forEach((t=>{g(e,i,t)}))}))}(e,t,n))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},n){const i=function(e,t){const n=e.cache
if(!n)return!0
const i=n.isNew(t),o=n.isDeleted(t),r=n.isEmpty(t)
return(!i||o)&&r}(this._store._instanceCache,e),o=function(e,t){const n=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&n.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let r
return i?(t.reload=!0,r=this.scheduleFetch(e,t,n)):r=o?this.getPendingFetch(e,t):Promise.resolve(e),r}destroy(){this.isDestroyed=!0}}function m(e,t,n){for(let i=0,o=t.length;i<o;i++){const o=t[i],r=e.get(o)
r&&r.resolver.reject(n||new Error(`Expected: '<${o.modelName}:${o.id}>' to be present in the adapter provided payload, but it was not found.`))}}function g(e,t,n){const r=n.identifier,s=r.type,a=e._fetchManager.createSnapshot(r,n.options),l=e.modelFor(r.type),c=r.id
let d=Promise.resolve().then((()=>t.findRecord(e,l,r.id,a)))
d=d.then((t=>{const n=u(e.serializerFor(s),e,l,t,c,"findRecord")
return(0,o.warn)(`You requested a record of type '${s}' with id '${c}' but the adapter returned a payload with primary data having an id of '${n.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,i.pG)(n.data.id)===(0,i.pG)(c),{id:"ds.store.findRecord.id-mismatch"}),n})),n.resolver.resolve(d)}function b(e,t,n,i,r){n.length>1?function(e,t,n,i){const o=e.modelFor(n)
return Promise.resolve().then((()=>{const n=i.map((e=>e.id))
return t.findMany(e,o,n,i)})).then((t=>u(e.serializerFor(n),e,o,t,null,"findMany")))}(e,i,r,n).then((i=>{!function(e,t,n,i){const r=new Map
for(let o=0;o<n.length;o++){const e=n[o].id
let t=r.get(e)
t||(t=[],r.set(e,t)),t.push(n[o])}const s=Array.isArray(i.included)?i.included:[],a=i.data
for(let o=0,c=a.length;o<c;o++){const e=a[o],n=r.get(e.id)
r.delete(e.id),n?n.forEach((n=>{t.get(n).resolver.resolve({data:e})})):s.push(e)}if(s.length>0&&e._push({data:null,included:s},!0),0===r.size)return
const l=[]
r.forEach((e=>{l.push(...e)})),(0,o.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...r.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),m(t,l)}(e,t,n,i)})).catch((e=>{m(t,n,e)})):1===n.length&&g(e,i,t.get(n[0]))}function v(e){}},1491:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{FetchManager:()=>i.F,SaveOp:()=>i.S,Snapshot:()=>i.c,SnapshotRecordArray:()=>i.b,upgradeStore:()=>i.u})
var i=n(7910)},2169:(e,t,n)=>{"use strict"
n.d(t,{i:()=>a,m:()=>c,t:()=>l})
var i=n(2294),o=n(1274),r=n(9438),s=n(311)
function a(e,t){const n=e.type,o={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:d}}
return(0,i.setOwner)(o,(0,i.getOwner)(this)),(0,r.g)(this,n).class.create(o)}function l(e){e.destroy()}function c(e){const t=(0,s.n)(e),n=(0,r.g)(this,t),i=n&&n.class?n.class:null
if(i&&i.isModel&&!this._forceShim)return i}function d(e,t,n,i){(0,o.TP)(e,n),o.i.set(e,i),(0,o.Wz)(e,t)}},6476:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{ModelSchemaProvider:()=>g.M,attr:()=>u,belongsTo:()=>h,default:()=>s.M,hasMany:()=>f,instantiateRecord:()=>m.i,modelFor:()=>m.m,teardownRecord:()=>m.t})
var i=n(4471),o=n(6730),r=n(1274),s=n(311),a=n(1603),l=n(1788),c=n(3241)
function d(e,t){"object"==typeof e?(t=e,e=void 0):t=t||{}
const n={type:e,kind:"attribute",isAttribute:!0,options:t,key:null}
return(0,i.computed)({get(e){if(!this.isDestroyed&&!this.isDestroying)return(0,r.oX)(this).getAttr((0,o.o)(this),e)},set(e,t){const n=(0,o.o)(this),i=(0,r.oX)(this)
if(i.getAttr(n,e)!==t&&(i.setAttr(n,e,t),!this.isValid)){const{errors:t}=this
t.get(e)&&(t.remove(e),this.currentState.cleanErrorRequests())}return t}}).meta(n)}function u(e,t,n){const i=[e,t,n]
return(0,s.k)(i)?d()(...i):d(e,t)}function h(e,t){return function(e,t){const n={type:(0,s.n)(e),options:t,kind:"belongsTo",name:"<Unknown BelongsTo>"}
return(0,i.computed)({get(e){return this.isDestroying||this.isDestroyed?null:(0,s.l)(this).getBelongsTo(e)},set(e,t){const n=(0,s.l)(this)
return this[l.pm]._join((()=>{n.setDirtyBelongsTo(e,t)})),n.getBelongsTo(e)}}).meta(n)}(e,t)}function p(e){{const t=(0,c.ES)((0,c._k)(e))
return(0,a.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function f(e,t){return function(e,t){const n={type:p(e),options:t,kind:"hasMany",name:"<Unknown BelongsTo>"}
return(0,i.computed)({get(e){return this.isDestroying||this.isDestroyed?[]:(0,s.l)(this).getHasMany(e)},set(e,t){const n=(0,s.l)(this),i=n.getManyArray(e)
return this[l.pm]._join((()=>{i.splice(0,i.length,...t)})),n.getHasMany(e)}}).meta(n)}(e,t)}var m=n(2169),g=n(9438)},311:(e,t,n)=>{"use strict"
n.d(t,{M:()=>ye,k:()=>R,l:()=>te,n:()=>I})
var i,o,r,s,a,l=n(1603),c=n(3241),d=n(4471),u=n.n(d),h=n(6730),p=n(1274),f=n(8738),m=n(8146),g=n(1788),b=n(1389),v=n(8410),y=n.n(v),w=n(3991),k=n(1491),_=n(7375),x=n(9280),C=n.n(x),E=n(7104),S=n.n(E),T=n(4666),O=n(3193)
function M(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function A(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){const[t,n,i]=e
return 3===e.length&&("function"==typeof t||"object"==typeof t&&null!==t)&&"string"==typeof n&&("object"==typeof i&&null!==i&&"enumerable"in i&&"configurable"in i||void 0===i)}function I(e){{const t=(0,c._k)(e)
return(0,l.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}class B extends p.oz{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[p.XK](e,t,n,i,o){switch(n){case"length 0":return Reflect.set(e,"length",0),F(this,[],o),!0
case"replace cell":{const[t,n,r]=i
return e[t]=r,function(e,t,n){z(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},n)}(this,{value:r,prior:n,index:t},o),!0}case"push":{const r=P(i)
j(this,e,(e=>e.push(...r)),"Cannot push duplicates to a hasMany's state.")
{const r=new Set(e),s=new Set
i.forEach((e=>{const t=(0,p.o)(e)
r.has(t)||(r.add(t),s.add(e))}))
const a=Array.from(s),l=Reflect.apply(e[n],t,a)
return a.length&&N(this,{value:P(a)},o),l}}case"pop":{const r=Reflect.apply(e[n],t,i)
return r&&D(this,{value:(0,p.o)(r)},o),r}case"unshift":{const r=P(i)
j(this,e,(e=>e.unshift(...r)),"Cannot unshift duplicates to a hasMany's state.")
{const r=new Set(e),s=new Set
i.forEach((e=>{const t=(0,p.o)(e)
r.has(t)||(r.add(t),s.add(e))}))
const a=Array.from(s),l=Reflect.apply(e[n],t,a)
return a.length&&N(this,{value:P(a),index:0},o),l}}case"shift":{const r=Reflect.apply(e[n],t,i)
return r&&D(this,{value:(0,p.o)(r),index:0},o),r}case"sort":{const r=Reflect.apply(e[n],t,i)
return function(e,t,n){z(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},n)}(this,r.map(p.o),o),r}case"splice":{const[r,s,...a]=i
if(0===r&&s===this[p.u2].length){const i=P(a)
j(this,e,(e=>e.splice(r,s,...i)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const i=new Set(a),l=Array.from(i),c=[r,s].concat(l),d=Reflect.apply(e[n],t,c)
return F(this,P(l),o),d}}const l=P(a)
j(this,e,(e=>e.splice(r,s,...l)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const i=e.slice()
i.splice(r,s)
const l=new Set(i),c=[]
a.forEach((e=>{const t=(0,p.o)(e)
l.has(t)||(l.add(t),c.push(e))}))
const d=[r,s,...c],u=Reflect.apply(e[n],t,d)
return s>0&&D(this,{value:u.map(p.o),index:r},o),c.length>0&&N(this,{value:P(c),index:r},o),u}}}}notify(){this[p.To].shouldReset=!0,(0,p.J4)(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,n=t.createRecord(this.modelName,e)
return this.push(n),n}destroy(){super.destroy(!1)}}function P(e){return e.map(L)}function L(e){return(0,p.o)(e)}function j(e,t,n,i){const o=t.slice()
if(n(o),o.length!==new Set(o).size){const t=o.filter(((e,t)=>o.indexOf(e)!==t));(0,l.deprecate)(`${i} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>(0,p.xm)(e)?e.lid:(0,p.o)(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function N(e,t,n){z(e,{op:"addToRelatedRecords",record:e.identifier,field:e.key,...t},n)}function D(e,t,n){z(e,{op:"removeFromRelatedRecords",record:e.identifier,field:e.key,...t},n)}function F(e,t,n){z(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},n)}function z(e,t,n){e._manager.mutate(t),(0,m.RH)(n)}B.prototype.isAsync=!1,B.prototype.isPolymorphic=!1,B.prototype.identifier=null,B.prototype.cache=null,B.prototype._inverseIsAsync=!1,B.prototype.key="",B.prototype.DEPRECATED_CLASS_NAME="ManyArray"
const H=S().extend(C()),U=new WeakMap
function q(e,t,n,i){let o={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(o.initializer=i)
for(let r of n)o=r(e,t,o)||o
void 0===o.initializer?Object.defineProperty(e,t,o):function(e,t,n){let i=U.get(e)
i||(i=new Map,U.set(e,i)),i.set(t,n)}(e,t,o)}function $(e,t,n){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let o of n)i=o(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}function W(e,t){let n=function(e,t){var n
let i=e.prototype
for(;i;){let e=null==(n=U.get(i))?void 0:n.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}const K=Symbol.for("LegacyPromiseProxy"),V=H
class Y extends V{constructor(...e){super(...e),A(this,K,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:n}=this._belongsToState
return await n.reloadBelongsTo(t,e),this}}$((i=Y).prototype,"id",[f.PO]),$(i.prototype,"meta",[(0,d.computed)()])
class X{constructor(e,t){A(this,K,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}$((o=X).prototype,"length",[f.Vv]),$(o.prototype,"links",[f.Vv]),$(o.prototype,"meta",[f.Vv]),(0,m.sg)(X.prototype,"content",null),(0,m.sg)(X.prototype,"isPending",!1),(0,m.sg)(X.prototype,"isRejected",!1),(0,m.sg)(X.prototype,"isFulfilled",!1),(0,m.sg)(X.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,f.Vv)(e),Object.defineProperty(X.prototype,"[]",e)}class G{constructor(e,t,n,i,o){A(this,"___token",void 0),A(this,"___identifier",void 0),A(this,"___relatedTokenMap",void 0),this.graph=t,this.key=o,this.hasManyRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=n,this.___token=e.notifications.subscribe(n,((e,t,n)=>{"relationships"===t&&n===o&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const n=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let i=t.get(n)
return i?t.delete(n):i=this.store.notifications.subscribe(n,((e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++})),this.___relatedTokenMap.set(n,i),n})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:n}=this,i=Array.isArray(e)?{data:e}:e,o=Array.isArray(i.data)&&i.data.length>0&&Z(i.data[0]),r=Array.isArray(i.data)?o?n._push(i,!0):i.data.map((e=>n.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:s}=this.hasManyRelationship,a={}
if(Array.isArray(i.data)&&(a.data=r),"links"in i&&(a.links=i.links),"meta"in i&&(a.meta=i.meta),n._join((()=>{this.graph.push({op:"updateRelationship",record:s,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=ee.get(this.___identifier)
return this._isLoaded()?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=ee.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||oe(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return ee.get(this.___identifier).reloadHasMany(this.key,e)}}function Z(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function J(e){return Boolean(e&&e.links&&e.links.related)}$(G.prototype,"identifiers",[f.Vv,f.PO]),(0,m.sg)(G.prototype,"_ref",0)
class Q{constructor(e,t,n,i,o){this.graph=t,this.key=o,this.belongsToRelationship=i,this.type=i.definition.type,this.store=e,this.___identifier=n,this.___relatedToken=null,this.___token=e.notifications.subscribe(n,((e,t,n)=>{"relationships"===t&&n===o&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(J(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return J(this._resource())?"link":"id"}async push(e,t){const{store:n}=this,i=e.data&&Z(e.data)?n._push(e,!0):e.data?n.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:o}=this.belongsToRelationship,r={}
if((e.data||null===e.data)&&(r.data=i),"links"in e&&(r.links=e.links),"meta"in e&&(r.meta=e.meta),n._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:r})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=ee.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||oe(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return ee.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}$(Q.prototype,"identifier",[f.Vv,f.PO]),(0,m.sg)(Q.prototype,"_ref",0)
const ee=(0,_.L1)("LEGACY_SUPPORT",new Map)
function te(e){const t=(0,p.o)(e)
let n=ee.get(t)
return n||(n=new ne(e),ee.set(t,n),ee.set(e,n)),n}class ne{constructor(e){this.record=e,this.store=(0,p.fV)(e),this.identifier=(0,p.o)(e),this.cache=(0,p.oX)(e)
{const e=(0,O.A)(n(151)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[p.u2],n=this.identifier,[i,o]=this._getCurrentState(n,e.key)
o.meta&&(e.meta=o.meta),o.links&&(e.links=o.links),t.length=0,(0,p.RX)(t,i)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,n,i){return this._findBelongsToByJsonApiResource(t,this.identifier,n,i).then((t=>ie(this,e,n,t)),(t=>ie(this,e,n,null,t)))}reloadBelongsTo(e,t){const n=this._relationshipPromisesCache[e]
if(n)return n
const i=this.graph.get(this.identifier,e),o=this.cache.getRelationship(this.identifier,e)
i.state.hasFailedLoadAttempt=!1,i.state.shouldForceReload=!0
const r=this._findBelongsTo(e,o,i,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:r}):r}getBelongsTo(e,t){const{identifier:n,cache:i}=this,o=i.getRelationship(this.identifier,e),r=o&&o.data?o.data:null,s=this.store,a=this.graph.get(this.identifier,e),l=a.definition.isAsync,c={key:e,store:s,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const n=this._findBelongsTo(e,o,a,t),i=r&&s._instanceCache.recordIsLoaded(r)
return this._updatePromiseProxyFor("belongsTo",e,{promise:n,content:i?s._instanceCache.getRecord(r):null,_belongsToState:c})}return null===r?null:s._instanceCache.getRecord(r)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(n=t,n?(0,p.o)(n):null)},!0)
var n}_getCurrentState(e,t){const n=this.cache.getRelationship(e,t),i=this.store._instanceCache,o=[]
if(n.data)for(let r=0;r<n.data.length;r++){const e=n.data[r]
i.recordIsLoaded(e,!0)&&o.push(e)}return[o,n]}getManyArray(e,t){{let n=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!n){const[i,o]=this._getCurrentState(this.identifier,e)
n=new B({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:i,key:e,meta:o.meta||null,links:o.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=n}return n}}fetchAsyncHasMany(e,t,n,i){{let o=this._relationshipPromisesCache[e]
if(o)return o
const r=this.cache.getRelationship(this.identifier,e),s=this._findHasManyByJsonApiResource(r,this.identifier,t,i)
return s?(o=s.then((()=>ie(this,e,t,n)),(i=>ie(this,e,t,n,i))),this._relationshipPromisesCache[e]=o,o):(n.isLoaded=!0,Promise.resolve(n))}}reloadHasMany(e,t){{const n=this._relationshipPromisesCache[e]
if(n)return n
const i=this.graph.get(this.identifier,e),{definition:o,state:r}=i
r.hasFailedLoadAttempt=!1,r.shouldForceReload=!0
const s=this.getManyArray(e,o),a=this.fetchAsyncHasMany(e,i,s,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const n=this.graph.get(this.identifier,e),{definition:i,state:o}=n,r=this.getManyArray(e,i)
if(i.isAsync){if(o.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this.fetchAsyncHasMany(e,n,r,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:i,content:r})}return r}}_updatePromiseProxyFor(e,t,n){let i=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:o}=n
return i?i._update(e,o):i=this._relationshipProxyCache[t]=new X(e,o),i}if(i){const{promise:e,content:t}=n
void 0!==t&&i.set("content",t),i.set("promise",e)}else i=Y.create(n),this._relationshipProxyCache[t]=i
return i}referenceFor(e,t){let n=this.references[t]
if(!n){const{graph:e,identifier:i}=this,o=e.get(i,t),r=o.definition.kind
"belongsTo"===r?n=new Q(this.store,e,i,o,t):"hasMany"===r&&(n=new G(this.store,e,i,o,t)),this.references[t]=n}return n}_findHasManyByJsonApiResource(e,t,n,i={}){{if(!e)return
const{definition:o,state:r}=n;(0,k.upgradeStore)(this.store)
const s=this.store.adapterFor?.(o.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:d,shouldForceReload:u}=r,h=oe(this.store,e),p=e.data,f=e.links&&e.links.related&&("function"==typeof s?.findHasMany||void 0===p)&&(u||l||a||!h&&!d),m={useLink:f,field:this.store.schema.fields({type:o.inverseType}).get(o.key),links:e.links,meta:e.meta,options:i,record:t}
if(f)return this.store.request({op:"findHasMany",records:p||[],data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
const g=c&&!d,b=l||d&&Array.isArray(p)&&p.length>0,v=!u&&!a&&(g||b)
if(v&&h)return
return v||c&&!d||b?(i.reload=i.reload||!v||void 0,this.store.request({op:"findHasMany",records:p,data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,n,i={}){if(!e)return Promise.resolve(null)
const o=n.definition.key
if(this._pending[o])return this._pending[o]
const r=e.data?e.data:null,{isStale:s,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:d}=n.state,u=oe(this.store,e),h=e.links?.related&&(d||a||s||!u&&!c),p={useLink:h,field:this.store.schema.fields(this.identifier).get(n.definition.key),links:e.links,meta:e.meta,options:i,record:t}
if(h){const e=this.store.request({op:"findBelongsTo",records:r?[r]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
return this._pending[o]=e.then((e=>e.content)).finally((()=>{this._pending[o]=void 0})),this._pending[o]}const f=l&&u&&!c,m=a||c&&e.data,g=!d&&!s&&(f||m)
return g&&!r?Promise.resolve(null):g&&u||null===r?.id?Promise.resolve(r):r?(i.reload=i.reload||!g||void 0,this._pending[o]=this.store.request({op:"findBelongsTo",records:[r],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[o]=void 0})),this._pending[o]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const n=e[t]
n.destroy&&n.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function ie(e,t,n,i,o){delete e._relationshipPromisesCache[t],n.state.shouldForceReload=!1
const r="hasMany"===n.definition.kind
if(r&&i.notify(),o){n.state.hasFailedLoadAttempt=!0
const i=e._relationshipProxyCache[t]
throw i&&!r&&(i.content&&i.content.isDestroying&&i.set("content",null),e.store.notifications._flush()),o}return r?i.isLoaded=!0:e.store.notifications._flush(),n.state.hasFailedLoadAttempt=!1,n.state.isStale=!1,r||!i?i:e.store.peekRecord(i)}function oe(e,t){const n=e._instanceCache,i=t.data
return Array.isArray(i)?i.every((e=>n.recordIsLoaded(e))):!i||n.recordIsLoaded(i)}const re=y()
var se=new WeakMap,ae=new WeakMap
class le extends re{constructor(...e){super(...e),M(this,se,void W(this,"messages")),M(this,ae,void W(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let n=t.get(e)
return void 0===n&&(n=(0,b.A)(),t.set(e,n)),(0,d.get)(n,"[]"),n}get content(){return(0,b.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const n=this._findOrCreateMessages(e,t)
this.addObjects(n),this.errorsFor(e).addObjects(n),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const n=this.errorsFor(e),i=Array.isArray(t)?t:[t],o=new Array(i.length)
for(let r=0;r<i.length;r++){const t=i[r],s=n.findBy("message",t)
o[r]=s||{attribute:e,message:t}}return o}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const n=this.errorsFor(e)
for(let i=0;i<n.length;i++)n[i].attribute===e&&n.replace(i,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,n){t.push(n)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function ce(e,t,n,i){if("belongsTo"===i.kind)n.notifyPropertyChange(t)
else if("hasMany"===i.kind){const o=ee.get(e),r=o&&o._manyArrayCache[t],s=o&&o._relationshipPromisesCache[t]
if(r&&s)return
r&&(r.notify(),i.options.async&&n.notifyPropertyChange(t))}}function de(e,t,n,i){(0,T.cacheFor)(i,n)!==e.cache.getAttr(t,n)&&i.notifyPropertyChange(n)}$((r=le).prototype,"errorsByAttributeName",[(0,d.computed)()]),q(r.prototype,"messages",[(0,w.mapBy)("content","message")]),$(r.prototype,"content",[(0,d.computed)()]),q(r.prototype,"isEmpty",[(0,w.not)("length")])
const ue=/^\/?data\/(attributes|relationships)\/(.*)/,he=/^\/?data/
function pe(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}function fe(e,t,n){const i=n.get,o=n.set
return n.get=function(){const e=(0,m.V1)(this,t,!0)
return(0,m.B1)(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=i.call(this)),e.lastValue},n.set=function(e){(0,m.V1)(this,t,!0),o.call(this,e)},(0,f.Vv)(n),n}function me(e,t){const n=(0,m.i$)(e,t)
n&&(n.shouldReset=!0,(0,m.RH)(n))}class ge{constructor(e){const t=(0,h.fV)(e),n=(0,p.o)(e)
this.identifier=n,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const i=t.getRequestStateService(),o=t.notifications,r=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&pe(e.response.data)||this._errorRequests.push(e),be(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),be(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&pe(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),be(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),be(this),this._errorRequests=[],this._lastError=null}}
i.subscribeForRecord(n,r)
const s=i.getLastRequestForRecord(n)
s&&r(s),this.handler=o.subscribe(n,((e,t,n)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,h.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){me(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let n=0;n<t.length;n++){const i=t[n]
if(i.source&&i.source.pointer){const t=i.source.pointer.match(ue)
let n
if(t?n=t[2]:-1!==i.source.pointer.search(he)&&(n="base"),n){const t=i.detail||i.title
e.add(n,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function be(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function ve(e,t,n){const i=new WeakMap,o=n.get
return n.get=function(){let e=i.get(this)
return e||(e={hasComputed:!1,value:void 0},i.set(this,e)),e.hasComputed||(e.value=o.call(this),e.hasComputed=!0),e.value},n}$((s=ge).prototype,"isLoading",[fe]),$(s.prototype,"isLoaded",[fe]),$(s.prototype,"isSaved",[fe]),$(s.prototype,"isEmpty",[fe]),$(s.prototype,"isNew",[fe]),$(s.prototype,"isDeleted",[fe]),$(s.prototype,"isValid",[fe]),$(s.prototype,"isDirty",[fe]),$(s.prototype,"isError",[fe]),$(s.prototype,"adapterError",[fe]),$(s.prototype,"isPreloaded",[f.PO]),$(s.prototype,"stateName",[f.PO]),$(s.prototype,"dirtyType",[f.PO]),(0,m.sg)(ge.prototype,"isSaving",!1)
class ye extends(u()){init(e){const t=e._createProps,n=e._secretInit
e._createProps=null,e._secretInit=null
const i=this.store=n.store
super.init(e),this[g.pm]=i
const o=n.identifier
n.cb(this,n.cache,o,n.store),this.___recordState=null,this.setProperties(t)
const r=i.notifications
this.___private_notifications=r.subscribe(o,((e,t,n)=>{!function(e,t,n,i,o){if("attributes"===t)n?de(o,e,n,i):i.eachAttribute((t=>{de(o,e,t,i)}))
else if("relationships"===t)if(n){const t=i.constructor.relationshipsByName.get(n)
ce(e,n,i,t)}else i.eachRelationship(((t,n)=>{ce(e,t,i,n)}))
else"identity"===t&&i.notifyPropertyChange("id")}(e,t,n,this,i)}))}destroy(){const e=(0,h.o)(this)
this.___recordState?.destroy(),(0,h.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),ee.get(this)?.destroy(),ee.delete(this),ee.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,h.o)(this).id}set id(e){const t=(0,p.pG)(e),n=(0,h.o)(this),i=t!==n.id
null!==t&&i&&(this.store._instanceCache.setRecordId(n,t),this.store.notifications.notify(n,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new ge(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=le.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){me(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,h.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const n=this.relationshipsByName.get(e)
return n&&t.modelFor(n.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const n=this.inverseMap
if(n[e])return n[e]
{const i=this._findInverseFor(e,t)
return n[e]=i,i}}static _findInverseFor(e,t){const n=this.relationshipsByName.get(e)
if(!n)return null
const{options:i}=n
return null===i.inverse?null:t.schema.hasResource(n)&&t.schema.fields(n).get(i.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:n}=t
e.has(n)||e.set(n,[]),e.get(n).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,n)=>{we(n)&&e[n.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,n=Object.keys(t)
for(let i=0;i<n.length;i++){const o=t[n[i]].type
e.includes(o)||e.push(o)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,n=Object.keys(t)
for(let i=0;i<n.length;i++){const o=t[n[i]]
e.set(o.name,o)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,n)=>{we(n)&&(n.key=t,n.name=t,e[t]=n)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,n)=>{we(n)?e.set(t,n.kind):ke(n)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((n,i)=>{e.call(t,i,n)}))}static eachRelatedType(e,t){const n=this.relatedTypes
for(let i=0;i<n.length;i++){const o=n[i]
e.call(t,o)}}static determineRelationshipType(e,t){const n=e.name,i=e.kind,o=this.inverseFor(n,t)
return o?"belongsTo"===o.kind?"belongsTo"===i?"oneToOne":"manyToOne":"belongsTo"===i?"oneToMany":"manyToMany":"belongsTo"===i?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,n)=>{ke(n)&&(n.key=t,n.name=t,e.set(t,n))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,n)=>{n.type&&e.set(t,n.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((n,i)=>{e.call(t,i,n)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((n,i)=>{e.call(t,i,n)}))}static toString(){return`model:${this.modelName}`}}function we(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function ke(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}$((a=ye).prototype,"isEmpty",[f.Vv]),$(a.prototype,"isLoading",[f.Vv]),$(a.prototype,"isLoaded",[f.Vv]),$(a.prototype,"hasDirtyAttributes",[f.Vv]),$(a.prototype,"isSaving",[f.Vv]),$(a.prototype,"isDeleted",[f.Vv]),$(a.prototype,"isNew",[f.Vv]),$(a.prototype,"isValid",[f.Vv]),$(a.prototype,"dirtyType",[f.Vv]),$(a.prototype,"isError",[f.Vv]),$(a.prototype,"id",[fe]),$(a.prototype,"currentState",[fe]),$(a.prototype,"errors",[ve]),$(a.prototype,"adapterError",[f.Vv]),A(ye,"isModel",!0),A(ye,"modelName",null),$(a,"inverseMap",[ve]),$(a,"relationships",[ve]),$(a,"relationshipNames",[ve]),$(a,"relatedTypes",[ve]),$(a,"relationshipsByName",[ve]),$(a,"relationshipsObject",[ve]),$(a,"fields",[ve]),$(a,"attributes",[ve]),$(a,"transformedAttributes",[ve]),ye.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[g.pm].saveRecord(this,e)),t},ye.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},ye.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[g.pm].unloadRecord(this)},ye.prototype.hasMany=function(e){return te(this).referenceFor("hasMany",e)},ye.prototype.belongsTo=function(e){return te(this).referenceFor("belongsTo",e)},ye.prototype.serialize=function(e){return(0,k.upgradeStore)(this[g.pm]),this[g.pm].serializeRecord(this,e)},ye.prototype._createSnapshot=function(){const e=this[g.pm]
if((0,k.upgradeStore)(e),!e._fetchManager){const t=(0,O.A)(n(1491)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,h.o)(this))},ye.prototype.deleteRecord=function(){this.currentState&&this[g.pm].deleteRecord(this)},ye.prototype.changedAttributes=function(){return(0,p.oX)(this).changedAttrs((0,h.o)(this))},ye.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[g.pm]._join((()=>{(0,p.oX)(this).rollbackAttrs((0,h.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},ye.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,h.o)(this)
return this.isReloading=!0,this[g.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,m.sg)(ye.prototype,"isReloading",!1),ye.prototype._createProps=null,ye.prototype._secretInit=null},9438:(e,t,n)=>{"use strict"
n.d(t,{M:()=>s,b:()=>a,g:()=>l})
var i=n(2294),o=n(1603),r=n(311)
class s{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=(0,r.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),n=t.attributes,i=Object.create(null)
n.forEach(((e,t)=>i[t]=e))
const o=t.relationshipsObject||null,r=new Map
for(const a of Object.values(i))r.set(a.name,a)
for(const a of Object.values(o))r.set(a.name,a)
const s={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(r.values())},attributes:i,relationships:o,fields:r}
return this._schemas.set(e,s),s}fields(e){const t=(0,r.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=(0,r.n)(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===l(this.store,t)&&(this._typeMisses.add(t),1))}}function a(e){return new s(e)}function l(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const n=e._modelFactoryCache
let o=n[t]
if(!o){if(o=(0,i.getOwner)(e).factoryFor(`model:${t}`),o||(o=function(e,t){const n=(0,i.getOwner)(e),o=n.factoryFor(`mixin:${t}`),s=o&&o.class
if(s){const e=r.M.extend(s)
e.__isMixin=!0,e.__mixin=s,n.register(`model:${t}`,e)}return n.factoryFor(`model:${t}`)}(e,t)),!o)return null
const s=o.class
s.isModel&&(s.modelName&&Object.prototype.hasOwnProperty.call(s,"modelName")||Object.defineProperty(s,"modelName",{value:t})),n[t]=o}return o}s.prototype.doesTypeExist=function(e){return(0,o.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},s.prototype.attributesDefinitionFor=function(e){(0,o.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=(0,r.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},s.prototype.relationshipsDefinitionFor=function(e){(0,o.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=(0,r.n)(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}},1678:(e,t,n)=>{"use strict"
n.r(t),n(1603),n(7262)},7262:(e,t,n)=>{"use strict"
n.d(t,{f:()=>g,g:()=>b,h:()=>y,j:()=>v,p:()=>I,s:()=>R})
const i={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class o{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const n=this.doWork(e)
return this.set(e,n),n}set(e,t){if(this.state.size===this.size)for(const[n]of this.state){this.state.delete(n)
break}this.state.set(e,t)}clear(){this.state.clear()}}const r=/[ _]/g,s=/([a-z\d])([A-Z])/g,a=new o((e=>e.replace(s,"$1_$2").toLowerCase().replace(r,"-"))),l=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,d=new o((e=>e.replace(l,((e,t,n)=>n?n.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),u=/([a-z\d])([A-Z]+)/g,h=/\-|\s+/g,p=new o((e=>e.replace(u,"$1_$2").replace(h,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,m=new o((e=>e.replace(f,(e=>e.toUpperCase()))))
function g(e){return a.get(e)}function b(e){return d.get(e)}function v(e){return p.get(e)}function y(e){return m.get(e)}const w=/^\s*$/,k=/([\w/-]+[_/\s-])([a-z\d]+$)/,_=/([\w/\s-]+)([A-Z][a-z\d]*$)/,x=/[A-Z][a-z\d]*$/,C=new o((e=>function(e){return B(e,M,O)}(e))),E=new o((e=>function(e){return B(e,A,T)}(e))),S=new Set(i.uncountable),T=new Map,O=new Map,M=new Map(i.singular.reverse()),A=new Map(i.plurals.reverse())
function R(e){return e?C.get(e):""}function I(e){return e?E.get(e):""}function B(e,t,n){if(!e||w.test(e))return e
const i=e.toLowerCase()
if(S.has(i))return e
const o=k.exec(e)||_.exec(e),r=o?o[2].toLowerCase():null
if(r&&S.has(r))return e
const s=x.test(e)
for(let[a,l]of n)if(i.match(a+"$"))return s&&r&&n.has(r)&&(l=y(l),a=y(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}i.irregularPairs.forEach((e=>{T.set(e[0].toLowerCase(),e[1]),T.set(e[1].toLowerCase(),e[1]),O.set(e[1].toLowerCase(),e[0]),O.set(e[0].toLowerCase(),e[0])}))},3241:(e,t,n)=>{"use strict"
n.d(t,{ES:()=>i.s,PT:()=>i.g,ZH:()=>i.h,_k:()=>i.f,td:()=>i.p,z9:()=>i.j})
var i=n(7262)},3464:(e,t,n)=>{"use strict"
n.d(t,{I:()=>f,b:()=>y,c:()=>u,e:()=>v,f:()=>_,g:()=>h,s:()=>p,u:()=>w})
var i=n(7375),o=n(7648)
function r(e,t){return e.get(s(e,t))}function s(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function a(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=(0,i.vs)("PromiseCache",new WeakMap),c=(0,i.vs)("RequestMap",new Map)
function d(e,t){c.set(e,t)}function u(e){c.delete(e)}function h(e){return c.get(e)}function p(e,t){l.set(e,t)}const f=(0,i.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function m(e){return e&&!0===e[o.k0]}function g(e,t,n){return m(t)?t:n?{[o.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[o.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function b(e){return new DOMException(e||"The user aborted a request.","AbortError")}function v(e,t,n,i){const r=new x(t,i,0===n),s=(a=e[n],0===n&&Boolean(a[f]))
var a
const l=new E(r,s)
let c
try{c=e[n].request(l,(function(t){return r.nextCalled++,v(e,t,n+1,i)})),s&&l._finalize(),c&&s&&(c instanceof Promise||(d(r.requestId,{isError:!1,result:g(r,c,!1)}),c=Promise.resolve(c)))}catch(e){s&&d(r.requestId,{isError:!0,result:g(r,e,!0)}),c=Promise.reject(e)}const u=function(e){const t=y()
let n,{promise:i}=t
return i=i.finally((()=>{e.resolveStream(),n&&n.forEach((e=>e()))})),i.onFinalize=e=>{n=n||[],n.push(e)},i[o.J6]=!0,i.getStream=()=>e.getStream(),i.abort=t=>{e.abort(b(t))},i.id=e.requestId,i.lid=e.god.identifier,t.promise=i,t}(r)
return h=c,Boolean(h&&h instanceof Promise&&!0===h[o.J6])?function(e,t,n){return e.setStream(t.getStream()),t.then((t=>{const i={[o.k0]:!0,request:e.request,response:t.response,content:t.content}
n.resolve(i)}),(t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[o.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,n.reject(t)})),n.promise}(r,c,u):function(e,t,n){return t.then((t=>{if(e.controller.signal.aborted)return void n.reject(b(e.controller.signal.reason))
m(t)&&(e.setStream(e.god.stream),t=t.content)
const i={[o.k0]:!0,request:e.request,response:e.getResponse(),content:t}
n.resolve(i)}),(t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[o.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,n.reject(t)})),n.promise}(r,c,u)
var h}function y(){let e,t
const n=new Promise(((n,i)=>{e=n,t=i}))
return{resolve:e,reject:t,promise:n}}function w(e,t){return e[o.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}function k(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function _(e){const{headers:t,ok:n,redirected:i,status:o,statusText:r,type:s,url:a}=e
return k(t),{headers:t,ok:n,redirected:i,status:o,statusText:r,type:s,url:a}}class x{constructor(e,t,n=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",y()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=n,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let i=Object.assign({signal:this.controller.signal},e)
e.headers&&k(e.headers),this.enhancedRequest=i,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=_(e)
this.response=t,this.god.response=t
const n=e.headers?.get("content-length")
this.stream.promise.sizeHint=n?parseInt(n,10):0}else this.response=e,this.god.response=e}}var C=new WeakMap
class E{constructor(e,t){var n,i;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,C),this.id=e.requestId,i=e,(n=C).set(s(n,this),i),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){r(C,this).setStream(e)}setResponse(e){r(C,this).setResponse(e)}setIdentifier(e){r(C,this).god.identifier=e}get hasRequestedStream(){return r(C,this).hasRequestedStream}_finalize(){this._finalized=!0}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["GET","PUT","PATCH","DELETE","POST","OPTIONS"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,i.L1)("IS_FROZEN",Symbol("FROZEN")),(0,i.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},6082:(e,t,n)=>{"use strict"
n.d(t,{Ay:()=>a,ud:()=>o.b})
var i=n(7375),o=n(3464)
function r(e,t){return e.get(function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}(e,t))}var s=new WeakMap
class a{constructor(e){var t,n
n=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=s),t.set(this,n),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[o.I]=!0,r(s,this).unshift(e),this}use(e){return r(s,this).push(...e),this}request(e){const t=r(s,this),n=e.controller||new AbortController
e.controller&&delete e.controller
const a=(0,i.dN)("REQ_ID")??0;(0,i.ml)("REQ_ID",a+1)
const l={controller:n,response:null,stream:null,hasRequestedStream:!1,id:a,identifier:null},c=(0,o.e)(t,e,0,l),d=(0,o.g)(a),u=(0,o.u)(c.then((e=>((0,o.s)(u,{isError:!1,result:e}),(0,o.c)(a),e)),(e=>{throw(0,o.s)(u,{isError:!0,result:e}),(0,o.c)(a),e})),c)
return d&&(0,o.s)(u,d),u}static create(e){return new this(e)}}},1569:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>m})
var i=n(1603),o=n(3241),r=n(2294),s=n(4471),a=n.n(s),l=n(2735)
const c=new WeakMap
var d=new WeakMap
class u extends(a()){constructor(...e){var t,n
super(...e),t=d,n=void function(e,t){let n=function(e,t){var n
let i=e.prototype
for(;i;){let e=null==(n=c.get(i))?void 0:n.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,n)}normalize(e,t){return t}}function h(e){return null==e||""===e?null:"string"==typeof e?e:"symbol"==typeof e?e.toString():String(e)}!function(e,t,n){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let o of n)i=o(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,n){let i=c.get(e)
i||(i=new Map,c.set(e,i)),i.set(t,n)}(e,t,i)}(u.prototype,"store",[l.inject])
const p=/^\/?data\/(attributes|relationships)\/(.*)/,f=/^\/?data/,m=u.extend({primaryKey:"id",mergedProperties:["attrs"],applyTransforms(e,t){const n=e.attributes
return e.eachTransformedAttribute(((e,i)=>{if(void 0===t[e])return
const o=this.transformFor(i),r=n.get(e)
t[e]=o.deserialize(t[e],r.options)})),t},normalizeResponse(e,t,n,i,o){switch(o){case"findRecord":return this.normalizeFindRecordResponse(...arguments)
case"queryRecord":return this.normalizeQueryRecordResponse(...arguments)
case"findAll":return this.normalizeFindAllResponse(...arguments)
case"findBelongsTo":return this.normalizeFindBelongsToResponse(...arguments)
case"findHasMany":return this.normalizeFindHasManyResponse(...arguments)
case"findMany":return this.normalizeFindManyResponse(...arguments)
case"query":return this.normalizeQueryResponse(...arguments)
case"createRecord":return this.normalizeCreateRecordResponse(...arguments)
case"deleteRecord":return this.normalizeDeleteRecordResponse(...arguments)
case"updateRecord":return this.normalizeUpdateRecordResponse(...arguments)}},normalizeFindRecordResponse(e,t,n,i,o){return this.normalizeSingleResponse(...arguments)},normalizeQueryRecordResponse(e,t,n,i,o){return this.normalizeSingleResponse(...arguments)},normalizeFindAllResponse(e,t,n,i,o){return this.normalizeArrayResponse(...arguments)},normalizeFindBelongsToResponse(e,t,n,i,o){return this.normalizeSingleResponse(...arguments)},normalizeFindHasManyResponse(e,t,n,i,o){return this.normalizeArrayResponse(...arguments)},normalizeFindManyResponse(e,t,n,i,o){return this.normalizeArrayResponse(...arguments)},normalizeQueryResponse(e,t,n,i,o){return this.normalizeArrayResponse(...arguments)},normalizeCreateRecordResponse(e,t,n,i,o){return this.normalizeSaveResponse(...arguments)},normalizeDeleteRecordResponse(e,t,n,i,o){return this.normalizeSaveResponse(...arguments)},normalizeUpdateRecordResponse(e,t,n,i,o){return this.normalizeSaveResponse(...arguments)},normalizeSaveResponse(e,t,n,i,o){return this.normalizeSingleResponse(...arguments)},normalizeSingleResponse(e,t,n,i,o){return this._normalizeResponse(e,t,n,i,o,!0)},normalizeArrayResponse(e,t,n,i,o){return this._normalizeResponse(e,t,n,i,o,!1)},_normalizeResponse(e,t,n,i,o,r){const s={data:null,included:[]},a=this.extractMeta(e,t,n)
if(a&&(s.meta=a),r){const{data:e,included:i}=this.normalize(t,n)
s.data=e,i&&(s.included=i)}else{const e=new Array(n.length)
for(let i=0,o=n.length;i<o;i++){const o=n[i],{data:r,included:a}=this.normalize(t,o)
a&&(s.included=s.included.concat(a)),e[i]=r}s.data=e}return s},normalize(e,t){let n=null
return t&&(this.normalizeUsingDeclaredMapping(e,t),"object"==typeof t.links&&this.normalizeUsingDeclaredMapping(e,t.links),n={id:this.extractId(e,t),type:e.modelName,attributes:this.extractAttributes(e,t),relationships:this.extractRelationships(e,t)},t.lid&&(n.lid=t.lid),this.applyTransforms(e,n.attributes)),{data:n}},extractId(e,t){return h(t[this.primaryKey])},extractAttributes(e,t){let n
const i={}
return e.eachAttribute((e=>{n=this.keyForAttribute(e,"deserialize"),void 0!==t[n]&&(i[e]=t[n])})),i},extractRelationship(e,t){if(!t)return null
if(t&&"object"==typeof t&&!Array.isArray(t)){t.id&&(t.id=h(t.id))
const n=this.store.modelFor(e)
return t.type&&!n.fields.has("type")&&(t.type=this.modelNameFromPayloadKey(t.type)),t}return{id:h(t),type:(0,o._k)((0,o.ES)(e))}},extractPolymorphicRelationship(e,t,n){return this.extractRelationship(e,t)},extractRelationships(e,t){const n={}
return e.eachRelationship(((e,i)=>{let o=null
const r=this.keyForRelationship(e,i.kind,"deserialize")
if(void 0!==t[r]){let n=null
const s=t[r]
if("belongsTo"===i.kind)n=i.options.polymorphic?this.extractPolymorphicRelationship(i.type,s,{key:e,resourceHash:t,relationshipMeta:i}):this.extractRelationship(i.type,s)
else if("hasMany"===i.kind&&s)if(n=new Array(s.length),i.options.polymorphic)for(let o=0,r=s.length;o<r;o++){const r=s[o]
n[o]=this.extractPolymorphicRelationship(i.type,r,{key:e,resourceHash:t,relationshipMeta:i})}else for(let e=0,t=s.length;e<t;e++){const t=s[e]
n[e]=this.extractRelationship(i.type,t)}o={data:n}}const s=this.keyForLink(e,i.kind)
if(t.links&&void 0!==t.links[s]){const e=t.links[s]
o=o||{},o.links={related:e}}o&&(n[e]=o)})),n},modelNameFromPayloadKey:e=>(0,o._k)((0,o.ES)(e)),normalizeRelationships(e,t){let n
this.keyForRelationship&&e.eachRelationship(((e,i)=>{n=this.keyForRelationship(e,i.kind,"deserialize"),e!==n&&void 0!==t[n]&&(t[e]=t[n],delete t[n])}))},normalizeUsingDeclaredMapping(e,t){const n=this.attrs
let i,o
if(n)for(const r in n)i=o=this._getMappedKey(r,e),void 0!==t[o]&&(e.attributes.has(r)&&(i=this.keyForAttribute(r,"deserialize")),e.relationshipsByName.has(r)&&(i=this.keyForRelationship(r,e,"deserialize")),o!==i&&(t[i]=t[o],delete t[o]))},_getMappedKey(e,t){(0,i.warn)("There is no attribute or relationship with the name `"+e+"` on `"+t.modelName+"`. Check your serializers attrs hash.",t.attributes.has(e)||t.relationshipsByName.has(e),{id:"ds.serializer.no-mapped-attrs-key"})
const n=this.attrs
let o
return n&&n[e]&&(o=n[e],o.key&&(o=o.key),"string"==typeof o&&(e=o)),e},_canSerialize(e){const t=this.attrs
return!t||!t[e]||!1!==t[e].serialize},_mustSerialize(e){const t=this.attrs
return t&&t[e]&&!0===t[e].serialize},shouldSerializeHasMany(e,t,n){const i=this.store.modelFor(e.modelName).determineRelationshipType(n,this.store)
return!!this._mustSerialize(t)||this._canSerialize(t)&&("manyToNone"===i||"manyToMany"===i)},serialize(e,t){const n={}
if(t&&t.includeId){const t=e.id
t&&(n[this.primaryKey]=t)}return e.eachAttribute(((t,i)=>{this.serializeAttribute(e,n,t,i)})),e.eachRelationship(((t,i)=>{"belongsTo"===i.kind?this.serializeBelongsTo(e,n,i):"hasMany"===i.kind&&this.serializeHasMany(e,n,i)})),n},serializeIntoHash(e,t,n,i){Object.assign(e,this.serialize(n,i))},serializeAttribute(e,t,n,i){if(this._canSerialize(n)){const o=i.type
let r=e.attr(n)
o&&(r=this.transformFor(o).serialize(r,i.options))
const s=this.store.modelFor(e.modelName)
let a=this._getMappedKey(n,s)
a===n&&this.keyForAttribute&&(a=this.keyForAttribute(n,"serialize")),t[a]=r}},serializeBelongsTo(e,t,n){const i=n.name
if(this._canSerialize(i)){const o=e.belongsTo(i,{id:!0}),r=this.store.modelFor(e.modelName)
let s=this._getMappedKey(i,r)
s===i&&this.keyForRelationship&&(s=this.keyForRelationship(i,"belongsTo","serialize")),t[s]=o||null,n.options.polymorphic&&this.serializePolymorphicType(e,t,n)}},serializeHasMany(e,t,n){const i=n.name
if(this.shouldSerializeHasMany(e,i,n)){const n=e.hasMany(i,{ids:!0})
if(void 0!==n){const o=this.store.modelFor(e.modelName)
let r=this._getMappedKey(i,o)
r===i&&this.keyForRelationship&&(r=this.keyForRelationship(i,"hasMany","serialize")),t[r]=n}}},serializePolymorphicType(){},extractMeta(e,t,n){if(n&&void 0!==n.meta){const e=n.meta
return delete n.meta,e}},extractErrors(e,t,n,i){if(n&&"object"==typeof n&&n.errors){const e={}
return n.errors.forEach((t=>{if(t.source&&t.source.pointer){let n=t.source.pointer.match(p)
n?n=n[2]:-1!==t.source.pointer.search(f)&&(n="base"),n&&(e[n]=e[n]||[],e[n].push(t.detail||t.title))}})),this.normalizeUsingDeclaredMapping(t,e),t.eachAttribute((t=>{const n=this.keyForAttribute(t,"deserialize")
n!==t&&void 0!==e[n]&&(e[t]=e[n],delete e[n])})),t.eachRelationship((t=>{const n=this.keyForRelationship(t,"deserialize")
n!==t&&void 0!==e[n]&&(e[t]=e[n],delete e[n])})),e}return n},keyForAttribute:(e,t)=>e,keyForRelationship:(e,t,n)=>e,keyForLink:(e,t)=>e,transformFor(e,t){return(0,r.getOwner)(this).lookup("transform:"+e)}}).extend({_normalizeDocumentHelper(e){if(Array.isArray(e.data)){const t=new Array(e.data.length)
for(let n=0;n<e.data.length;n++){const i=e.data[n]
t[n]=this._normalizeResourceHelper(i)}e.data=t}else e.data&&"object"==typeof e.data&&(e.data=this._normalizeResourceHelper(e.data))
if(Array.isArray(e.included)){const t=new Array
for(let n=0;n<e.included.length;n++){const i=e.included[n],o=this._normalizeResourceHelper(i)
null!==o&&t.push(o)}e.included=t}return e},_normalizeRelationshipDataHelper(e){return e.type=this.modelNameFromPayloadKey(e.type),e},_normalizeResourceHelper(e){const t=this.modelNameFromPayloadKey(e.type)
if(!this.store.schema.hasResource({type:t}))return(0,i.warn)(this.warnMessageNoModelForType(t,e.type,"modelNameFromPayloadKey"),!1,{id:"ds.serializer.model-for-type-missing"}),null
const n=this.store.modelFor(t),o=this.store.serializerFor(t),{data:r}=o.normalize(n,e)
return r},pushPayload(e,t){const n=this._normalizeDocumentHelper(t)
e.push(n)},_normalizeResponse(e,t,n,i,o,r){return this._normalizeDocumentHelper(n)},normalizeQueryRecordResponse(){return this._super(...arguments)},extractAttributes(e,t){const n={}
return t.attributes&&e.eachAttribute((e=>{const i=this.keyForAttribute(e,"deserialize")
void 0!==t.attributes[i]&&(n[e]=t.attributes[i])})),n},extractRelationship(e){if(Array.isArray(e.data)){const t=new Array(e.data.length)
for(let n=0;n<e.data.length;n++){const i=e.data[n]
t[n]=this._normalizeRelationshipDataHelper(i)}e.data=t}else e.data&&"object"==typeof e.data&&(e.data=this._normalizeRelationshipDataHelper(e.data))
return e},extractRelationships(e,t){const n={}
return t.relationships&&e.eachRelationship(((e,i)=>{const o=this.keyForRelationship(e,i.kind,"deserialize")
if(void 0!==t.relationships[o]){const i=t.relationships[o]
n[e]=this.extractRelationship(i)}})),n},_extractType(e,t){return this.modelNameFromPayloadKey(t.type)},modelNameFromPayloadKey:e=>(0,o._k)((0,o.ES)(e)),payloadKeyFromModelName:e=>(0,o.td)(e),normalize(e,t){t.attributes&&this.normalizeUsingDeclaredMapping(e,t.attributes),t.relationships&&this.normalizeUsingDeclaredMapping(e,t.relationships)
const n={id:this.extractId(e,t),type:this._extractType(e,t),attributes:this.extractAttributes(e,t),relationships:this.extractRelationships(e,t)}
return t.lid&&(n.lid=t.lid),this.applyTransforms(e,n.attributes),{data:n}},keyForAttribute:(e,t)=>(0,o._k)(e),keyForRelationship:(e,t,n)=>(0,o._k)(e),serialize(e,t){const n=this._super(...arguments)
return n.type=this.payloadKeyFromModelName(e.modelName),{data:n}},serializeAttribute(e,t,n,i){const o=i.type
if(this._canSerialize(n)){t.attributes=t.attributes||{}
let r=e.attr(n)
o&&(r=this.transformFor(o).serialize(r,i.options))
const s=this.store.modelFor(e.modelName)
let a=this._getMappedKey(n,s)
a===n&&(a=this.keyForAttribute(n,"serialize")),t.attributes[a]=r}},serializeBelongsTo(e,t,n){const i=n.name
if(this._canSerialize(i)){const n=e.belongsTo(i),o=n&&!n.isNew
if(null===n||o){t.relationships=t.relationships||{}
const o=this.store.modelFor(e.modelName)
let r=this._getMappedKey(i,o)
r===i&&(r=this.keyForRelationship(i,"belongsTo","serialize"))
let s=null
n&&(s={type:this.payloadKeyFromModelName(n.modelName),id:n.id}),t.relationships[r]={data:s}}}},serializeHasMany(e,t,n){const i=n.name
if(this.shouldSerializeHasMany(e,i,n)){const n=e.hasMany(i)
if(void 0!==n){t.relationships=t.relationships||{}
const o=this.store.modelFor(e.modelName)
let r=this._getMappedKey(i,o)
r===i&&this.keyForRelationship&&(r=this.keyForRelationship(i,"hasMany","serialize"))
const s=n.filter((e=>!e.isNew)),a=new Array(s.length)
for(let e=0;e<s.length;e++){const t=n[e],i=this.payloadKeyFromModelName(t.modelName)
a[e]={type:i,id:t.id}}t.relationships[r]={data:a}}}}})},5113:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{BooleanTransform:()=>l,DateTransform:()=>c,NumberTransform:()=>u,StringTransform:()=>h,default:()=>a})
var i=n(4471),o=n.n(i),r=n(1788)
function s(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=o()
class l{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class c{constructor(){s(this,r.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function d(e){return e==e&&e!==1/0&&e!==-1/0}class u{constructor(){s(this,r.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}static create(){return new this}}class h{constructor(){s(this,r.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},1274:(e,t,n)=>{"use strict"
n.d(t,{J4:()=>i.n,RX:()=>i.l,TP:()=>i.o,To:()=>i.A,Wz:()=>i.t,XK:()=>i.M,di:()=>i.u,fV:()=>i.s,i:()=>i.q,o:()=>i.r,oX:()=>i.p,oz:()=>i.I,pG:()=>i.g,u2:()=>i.k,xm:()=>i.i})
var i=n(601)},601:(e,t,n)=>{"use strict"
n.d(t,{A:()=>de,C:()=>Ve,I:()=>be,M:()=>he,S:()=>Pe,g:()=>m,i:()=>C,k:()=>ue,l:()=>_e,n:()=>me,o:()=>V,p:()=>q,q:()=>Y,r:()=>K,s:()=>X,t:()=>H,u:()=>b})
var i=n(1603),o=n(7648),r=n(7375)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const s=Symbol("warpDriveCache")
var a=n(3241),l=n(8146),c=n(1223),d=n(8738),u=n(3193)
function h(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function p(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function f(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){{let t
return t=null==e||""===e?null:String(e),(0,i.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function g(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function b(e){{const t=(0,a._k)(e)
return(0,i.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function v(e){return Boolean(e&&"object"==typeof e)}function y(e,t){return Boolean(v(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function w(e){return y(e,"lid")}function k(e){return y(e,"id")||Boolean(v(e)&&"id"in e&&"number"==typeof e.id)}const _=(0,r.L1)("IDENTIFIERS",new Set),x=(0,r.L1)("DOCUMENTS",new Set)
function C(e){return void 0!==e[s]||_.has(e)}function E(e){return x.has(e)}const S="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,T=new Map
let O=0
function M(e,t,n){"record"===n&&!e.id&&k(t)&&function(e,t,n){let i=e.get(t.type)
i||(i=new Map,e.set(t.type,i)),i.set(n,t.lid)}(T,e,t.id)}function A(e,t){const n=k(e)?m(e.id):null
return{type:function(e){return y(e,"type")}(e)?b(e.type):t?t.type:null,id:n}}function R(e,t){if("record"===t){if(w(e))return e.lid
if(k(e)){const t=b(e.type),n=T.get(t)?.get(e.id)
return n||`@lid:${t}-${e.id}`}return S.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function I(...e){}function B(e,t,n){return e}class P{constructor(){this._generate=(0,r.Yj)("configuredGenerationMethod")||R,this._update=(0,r.Yj)("configuredUpdateMethod")||M,this._forget=(0,r.Yj)("configuredForgetMethod")||I,this._reset=(0,r.Yj)("configuredResetMethod")||I,this._merge=B,this._keyInfoForResource=(0,r.Yj)("configuredKeyInfoMethod")||A,this._id=O++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||B}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(C(e))return e
const n=this._generate(e,"record")
let i=j(this._cache,n)
if(null!==i)return i
if(0!==t){if(2===t)e.lid=n,e[s]=this._id,i=L(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=n,t[s]=this._id,i=L(t)}return N(this._cache,i),i}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let n=this._cache.documents.get(t)
return void 0===n&&(n={lid:t},x.add(n),this._cache.documents.set(t,n)),n}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),n=L({id:e.id||null,type:e.type,lid:t,[s]:this._id})
return N(this._cache,n),n}updateRecordIdentifier(e,t){let n=this.getOrCreateRecordIdentifier(e)
const i=this._keyInfoForResource(t,n)
let o=function(e,t,n,i){const o=t.id,{id:r,type:s,lid:a}=n,l=e.resourcesByType[n.type]
if(null!==r&&r!==o&&null!==o){const e=l&&l.id.get(o)
return void 0!==e&&e}{const n=t.type
if(null!==r&&r===o&&n===s&&w(i)&&i.lid!==a)return j(e,i.lid)||!1
if(null!==r&&r===o&&n&&n!==s&&w(i)&&i.lid===a){const t=e.resourcesByType[n],i=t&&t.id.get(o)
return void 0!==i&&i}}return!1}(this._cache,i,n,t)
const r=w(t)
if(o||n.type!==i.type&&(r&&delete t.lid,o=this.getOrCreateRecordIdentifier(t)),o){const e=n
n=this._mergeRecordIdentifiers(i,e,o,t),r&&(t.lid=n.lid)}const s=n.id;(function(e,t,n,i){i(e,n,"record"),void 0!==n.id&&(e.id=m(n.id))})(n,0,t,this._update)
const a=n.id
if(s!==a&&null!==a){const e=this._cache.resourcesByType[n.type]
e.id.set(a,n),null!==s&&e.id.delete(s)}return n}_mergeRecordIdentifiers(e,t,n,i){const o=this._merge(t,n,i),r=o===t?n:t,s=this._cache.polymorphicLidBackMap.get(r.lid)
s&&this._cache.polymorphicLidBackMap.delete(r.lid),this.forgetRecordIdentifier(r),this._cache.resources.set(r.lid,o)
const a=this._cache.polymorphicLidBackMap.get(o.lid)??[]
return a.push(r.lid),s&&s.forEach((e=>{a.push(e),this._cache.resources.set(e,o)})),this._cache.polymorphicLidBackMap.set(o.lid,a),o}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),n=this._cache.resourcesByType[t.type]
null!==t.id&&n.id.delete(t.id),this._cache.resources.delete(t.lid),n.lid.delete(t.lid)
const i=this._cache.polymorphicLidBackMap.get(t.lid)
i&&(i.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[s]=void 0,_.delete(t),this._forget(t,"record")}destroy(){T.clear(),this._cache.documents.forEach((e=>{x.delete(e)})),this._reset()}}function L(e,t,n){return _.add(e),e}function j(e,t,n){return e.resources.get(t)||null}function N(e,t){e.resources.set(t.lid,t)
let n=e.resourcesByType[t.type]
n||(n={lid:new Map,id:new Map},e.resourcesByType[t.type]=n),n.lid.set(t.lid,t),t.id&&n.id.set(t.id,t)}class D{constructor(e,t){f(this,"___token",void 0),f(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,l.sg)(D.prototype,"_ref")
class F{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let n=this._pendingNotifies.get(e)
n||(n=new Set,this._pendingNotifies.set(e,n)),n.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,n){"relationships"===t&&n?this._scheduleNotification(e,n):this._store.notifications.notify(e,t,n)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}F.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const z=(0,r.L1)("CacheForIdentifierCache",new Map)
function H(e,t){z.set(e,t)}function U(e){z.delete(e)}function q(e){return z.has(e)?z.get(e):null}const $=(0,r.L1)("RecordCache",new Map)
function W(e){return $.get(e)}function K(e){return $.get(e)}function V(e,t){$.set(e,t)}const Y=(0,r.L1)("StoreMap",new Map)
function X(e){return Y.get(e)}class G{constructor(e){f(this,"__instances",{record:new Map,reference:new WeakMap}),this.store=e,this._storeWrapper=new F(this.store),e.identifierCache.__configureMerge(((e,t,n)=>{let i=e
e.id!==t.id?i="id"in n&&e.id===n.id?e:t:e.type!==t.type&&(i="type"in n&&e.type===n.type?e:t)
const o=e===i?t:e,r=this.__instances.record.has(i),s=this.__instances.record.has(o)
if(r&&s&&"id"in n)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(n.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:o,value:i}),this.unloadRecord(o),i}))}peek(e){return this.__instances.record.get(e)}getRecord(e,t){let n=this.__instances.record.get(e)
if(!n){const i=this.store.cache
H(e,i),n=this.store.instantiateRecord(e,t||{}),V(n,e),H(n,i),Y.set(n,this.store),this.__instances.record.set(e,n)}return n}getReference(e){const t=this.__instances.reference
let n=t.get(e)
return n||(n=new D(this.store,e),t.set(e,n)),n}recordIsLoaded(e,t=!1){const n=this.cache
if(!n)return!1
const i=n.isNew(e),o=n.isEmpty(e)
return i?!n.isDeleted(e):!(t&&n.isDeletionCommitted(e)||o)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),U(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),n=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),Y.delete(t),$.delete(t),U(t)),n?(n.unloadRecord(e),U(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const n=t.resourcesByType,i=n[e]?.lid
i&&i.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:n,lid:o}=e,r=e.id
null===r||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:n,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:n,id:t}),this.store.notifications.notify(e,"identity")):(0,i.warn)(`Your ${n} record was saved to the server, but the response does not have an id.`,!(null!==r&&null===t))}}function Z(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:g(e)}:K(e)}const J=(0,r.L1)("AvailableShims",new WeakMap)
class Q{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,n)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(n,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,n)=>{"attribute"===t.kind&&e.set(n,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,n)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(n,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((n,i)=>{"attribute"===n.kind&&e.call(t,i,n)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((n,i)=>{"belongsTo"!==n.kind&&"hasMany"!==n.kind||e.call(t,i,n)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((n,i)=>{if("attribute"===n.kind){const o=n.type
o&&e.call(t,i,o)}}))}}const ee=new Set(["added","removed","state","updated","invalidated"])
function te(e){return ee.has(e)}function ne(){return!!c._backburner.currentInstance&&!0!==c._backburner._autorun}class ie{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map,this._tokens=new Map}subscribe(e,t){let n=this._cache.get(e)
n||(n=new Map,this._cache.set(e,n))
const i={}
return n.set(i,t),this._tokens.set(i,e),i}unsubscribe(e){this.isDestroyed||function(e,t,n){const i=e.get(t)
if(i){e.delete(t)
const o=n.get(i)
o?.delete(t)}}(this._tokens,e,this._cache)}notify(e,t,n){if(!C(e)&&!E(e))return!1
const i=Boolean(this._cache.get(e)?.size)
if(te(t)||i){let i=this._buffered.get(e)
i||(i=[],this._buffered.set(e,i)),i.push([t,n]),this._scheduleNotify()}return i}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
this._hasFlush&&!1!==e&&!ne()||(!e||ne()?this._flush():this._hasFlush=!0)}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))}))),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,n){if(te(t)){const n=this._cache.get(E(e)?"document":"resource")
n&&n.forEach((n=>{n(e,t)}))}const i=this._cache.get(e)
return!(!i||!i.size||(i.forEach((i=>{i(e,t,n)})),0))}destroy(){this.isDestroyed=!0,this._tokens.clear(),this._cache.clear()}}const oe=Proxy,re=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),se=new Set(["push","pop","unshift","shift","splice","sort"]),ae=new Set(["[]","length","links","meta"])
function le(e){return re.has(e)}function ce(e,t){return t in e}const de=(0,r.L1)("#signal",Symbol("#signal")),ue=(0,r.L1)("#source",Symbol("#source")),he=(0,r.L1)("#update",Symbol("#update")),pe=(0,r.L1)("#notify",Symbol("#notify")),fe=(0,r.L1)("IS_COLLECTION",Symbol.for("Collection"))
function me(e){(0,l.RH)(e[de])}function ge(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class be{[pe](){me(this)}destroy(e){this.isDestroying=!e,this[ue].length=0,this[pe](),this.isDestroyed=!e}get length(){return this[ue].length}set length(e){this[ue].length=e}constructor(e){f(this,"isLoaded",!0),f(this,"isDestroying",!1),f(this,"isDestroyed",!1),f(this,"_updatingPromise",null),f(this,fe,!0),f(this,ue,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this[ue]=e.identifiers,this[de]=(0,l.n5)(this,"length")
const n=e.store,i=new Map,o=this[de],r={links:e.links||null,meta:e.meta||null}
let s=!1
const a=new oe(this[ue],{get(a,c,d){const u=ge(c)
if(o.shouldReset&&(null!==u||ae.has(c)||le(c))&&(e.manager._syncArray(d),o.t=!1,o.shouldReset=!1),null!==u){const e=a[u]
return s||(0,l.B1)(o),e&&n._instanceCache.getRecord(e)}if("meta"===c)return(0,l.B1)(o),r.meta
if("links"===c)return(0,l.B1)(o),r.links
if("[]"===c)return(0,l.B1)(o),d
if(le(c)){let e=i.get(c)
return void 0===e&&(e="forEach"===c?function(){(0,l.B1)(o),s=!0
const e=function(e,t,n,i,o){void 0===o&&(o=null)
const r=(t=t.slice()).length
for(let s=0;s<r;s++)i.call(o,n._instanceCache.getRecord(t[s]),s,e)
return e}(d,a,n,arguments[0],arguments[1])
return s=!1,e}:function(){(0,l.B1)(o),s=!0
const e=Reflect.apply(a[c],d,arguments)
return s=!1,e},i.set(c,e)),e}if(function(e){return se.has(e)}(c)){let n=i.get(c)
return void 0===n&&(n=function(){if(!e.allowMutation)return
const n=Array.prototype.slice.call(arguments)
s=!0
const i=t[he](a,d,c,n,o)
return s=!1,i},i.set(c,n)),n}if(ce(t,c)){if(c===pe||c===de||c===ue)return t[c]
let e=i.get(c)
if(e)return e
const n=t[c]
return"function"==typeof n?(e=function(){return(0,l.B1)(o),Reflect.apply(n,d,arguments)},i.set(c,e),e):((0,l.B1)(o),n)}return a[c]},set(n,i,a,l){if("length"===i){if(!s&&0===a)return s=!0,t[he](n,l,"length 0",[],o),s=!1,!0
if(s)return Reflect.set(n,i,a)}if("links"===i)return r.links=a||null,!0
if("meta"===i)return r.meta=a||null,!0
const c=ge(i)
if(null===c||c>n.length){if(null!==c&&s){const e=K(a)
return n[c]=e,!0}return!!ce(t,i)&&(t[i]=a,!0)}if(!e.allowMutation)return!1
const d=n[c],u=(h=a)?K(h):null
var h
return s?n[c]=u:t[he](n,l,"replace cell",[c,d,u],o),!0},deleteProperty:(e,t)=>!!s&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>be.prototype})
return(0,l.zs)(a,o),this[pe]=this[pe].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}!function(e,t,n){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let o of n)i=o(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}(be.prototype,"length",[d.Vv])
const ve={enumerable:!0,configurable:!1,get:function(){return this}};(0,d.Vv)(ve),Object.defineProperty(be.prototype,"[]",ve),(0,l.sg)(be.prototype,"isUpdating",!1)
class ye extends be{constructor(e){super(e),f(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}ye.prototype.query=null
const we=(0,r.L1)("FAKE_ARR",{}),ke=1200
function _e(e,t){let n=0
const i=t.length
for(;i-n>ke;)e.push.apply(e,t.slice(n,n+ke)),n+=ke
e.push.apply(e,t.slice(n))}class xe{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e)
!t||this.isDestroying||this.isDestroyed||(function(e,t,n){const i=e[ue],o=[],r=[]
t.forEach(((e,t)=>{if("add"===e){if(n.has(t))return
o.push(t),n.add(t)}else n.has(t)&&(r.push(t),n.delete(t))})),r.length&&(r.length===i.length?i.length=0:r.forEach((e=>{const t=i.indexOf(e);-1!==t&&(i.splice(t,1),n.delete(e))}))),o.length&&_e(i,o)}(e,t,this._set.get(e)),this._pending.delete(e))}liveArrayFor(e){let t=this._live.get(e)
const n=[],i=this._staged.get(e)
return i&&(i.forEach(((e,t)=>{"add"===e&&n.push(t)})),this._staged.delete(e)),t||(t=new be({type:e,identifiers:n,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(n))),t}createArray(e){const t={type:e.type,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},n=new ye(t)
return this._managed.add(n),this._set.set(n,new Set(t.identifiers||[])),e.identifiers&&Ce(this._identifiers,n,e.identifiers),n}dirtyArray(e,t){if(e===we)return
const n=e[de]
n.shouldReset?t>0&&!n.t&&(0,l.Fe)(e[pe]):(n.shouldReset=!0,(0,l.Fe)(e[pe]))}_getPendingFor(e,t,n){if(this.isDestroying||this.isDestroyed)return
const i=this._live.get(e.type),o=this._pending,r=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=o.get(e)
t||(t=new Map,o.set(e,t)),r.set(e,t)}))}if(i&&0===i[ue].length&&n){const e=o.get(i)
if(!e||0===e.size)return r}if(i){let e=o.get(i)
e||(e=new Map,o.set(i,e)),r.set(i,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),r.set(we,t)}return r}populateManagedArray(e,t,n){this._pending.delete(e)
const i=e[ue],o=i.slice()
i.length=0,_e(i,t),this._set.set(e,new Set(t)),me(e),e.meta=n.meta||null,e.links=n.links||null,e.isLoaded=!0,function(e,t,n){for(let i=0;i<n.length;i++)Ee(e,t,n[i])}(this._identifiers,e,o),Ce(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,n)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(n,t.size))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,n)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(n,t.size))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function Ce(e,t,n){for(let i=0;i<n.length;i++){const o=n[i]
let r=e.get(o)
r||(r=new Set,e.set(o,r)),r.add(t)}}function Ee(e,t,n){const i=e.get(n)
i&&i.delete(t)}const Se=(0,r.L1)("Touching",Symbol("touching")),Te=(0,r.L1)("RequestPromise",Symbol("promise")),Oe=[]
class Me{constructor(e){f(this,"_pending",new Map),f(this,"_done",new Map),f(this,"_subscriptions",new Map),f(this,"_toFlush",[]),f(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const n=t.data[0]
if("recordIdentifier"in n){const i=n.recordIdentifier,o="saveRecord"===n.op?"mutation":"query"
this._pending.has(i)||this._pending.set(i,[])
const r={state:"pending",request:t,type:o}
return r[Se]=[n.recordIdentifier],r[Te]=e,this._pending.get(i).push(r),this._triggerSubscriptions(r),e.then((e=>{this._dequeue(i,r)
const n={state:"fulfilled",request:t,type:o,response:{data:e}}
return n[Se]=r[Se],this._addDone(n),this._triggerSubscriptions(n),e}),(e=>{this._dequeue(i,r)
const n={state:"rejected",request:t,type:o,response:{data:e}}
throw n[Se]=r[Se],this._addDone(n),this._triggerSubscriptions(n),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Se].forEach((t=>{const n=this._subscriptions.get(t)
n&&n.forEach((t=>t(e)))}))}_dequeue(e,t){const n=this._pending.get(e)
this._pending.set(e,n.filter((e=>e!==t)))}_addDone(e){e[Se].forEach((t=>{const n=e.request.data[0].op
let i=this._done.get(t)
i&&(i=i.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==n}))),i=i||[],i.push(e),this._done.set(t,i)}))}subscribeForRecord(e,t){let n=this._subscriptions.get(e)
n||(n=[],this._subscriptions.set(e,n)),n.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Oe}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function Ae(e){return Boolean(e&&"string"==typeof e)}function Re(e,t,n){if("object"==typeof e&&null!==e){const t=e
return C(t)||"id"in t&&(t.id=m(t.id)),t}{const i=m(t)
if(!Ae(i)){if(Ae(n))return{lid:n}
throw new Error("Expected either id or lid to be a valid string")}return Ae(n)?{type:e,id:i,lid:n}:{type:e,id:i}}}const Ie=(0,u.A)(n(4471)),Be=Ie.default?Ie.default:Ie
Be!==class{constructor(e){}}&&(0,i.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
class Pe extends Be{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new P,this.notifications=new ie(this),this.recordArrayManager=new xe({store:this}),this._requestCache=new Me(this),this._instanceCache=new G(this),this._documentCache=new Map,this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[o._q]:!0}
if(e.records){const n=this.identifierCache
t.records=e.records.map((e=>n.getOrCreateRecordIdentifier(e)))}const n=Object.assign({},e,t),i=this.requestManager.request(n)
return i.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),i}modelFor(e){return function(e,t){let n=J.get(e)
n||(n=Object.create(null),J.set(e,n))
let i=n[t]
return void 0===i&&(i=n[t]=new Q(e,t)),i}(this,e)}createRecord(e,t){let n
return this._join((()=>{const i=b(e),o={...t}
let r=null
if(null===o.id||void 0===o.id){const e=this.adapterFor?.(i,!0)
r=e&&e.generateIdForRecord?o.id=m(e.generateIdForRecord(this,i,o)):o.id=null}else r=o.id=m(o.id)
const s={type:i,id:r}
s.id&&this.identifierCache.peekRecordIdentifier(s)
const a=this.identifierCache.createIdentifierForNewRecord(s),l=this.cache,c=function(e,t,n){if(void 0!==n){const{type:i}=t,o=e.schema.fields({type:i})
if(o.size){const e=Object.keys(n)
for(let t=0;t<e.length;t++){const i=e[t],r=o.get(i)
r&&("hasMany"===r.kind?n[i]=n[i].map((e=>je(e))):"belongsTo"===r.kind&&(n[i]=je(n[i])))}}}return n}(this,a,o),d=l.clientDidCreate(a,c)
n=this._instanceCache.getRecord(a,d)})),n}deleteRecord(e){const t=W(e),n=this.cache
this._join((()=>{n.setIsDeleted(t,!0),n.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=W(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,n){Le(e)?n=t:e=Re(b(e),g(t))
const i=this.identifierCache.getOrCreateRecordIdentifier(e)
return(n=n||{}).preload&&(this._instanceCache.recordIsLoaded(i)||(n.reload=!0),this._join((()=>{!function(e,t,n){const i={},o=e.schema.fields(t)
Object.keys(n).forEach((e=>{const t=n[e],r=o.get(e)
!r||"hasMany"!==r.kind&&"belongsTo"!==r.kind?(i.attributes||(i.attributes={}),i.attributes[e]=t):(i.relationships||(i.relationships={}),i.relationships[e]=function(e,t){const n=e.type
return"hasMany"===e.kind?{data:t.map((e=>Z(e,n)))}:{data:t?Z(t,n):null}}(r,t))}))
const r=e.cache,s=Boolean(e._instanceCache.peek(t))
r.upsert(t,i,s)}(this,i,n.preload)}))),this.request({op:"findRecord",data:{record:i,options:n},cacheOptions:{[o.ER]:!0}}).then((e=>e.content))}getReference(e,t){let n
n=1===arguments.length&&Le(e)?e:Re(b(e),g(t))
const i=this.identifierCache.getOrCreateRecordIdentifier(n)
return this._instanceCache.getReference(i)}peekRecord(e,t){if(1===arguments.length&&Le(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const n={type:b(e),id:g(t)},i=this.identifierCache.peekRecordIdentifier(n)
return i&&this._instanceCache.recordIsLoaded(i)?this._instanceCache.getRecord(i):null}query(e,t,n={}){return this.request({op:"query",data:{type:b(e),query:t,options:n},cacheOptions:{[o.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,n){return this.request({op:"queryRecord",data:{type:b(e),query:t,options:n||{}},cacheOptions:{[o.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:b(e),options:t||{}},cacheOptions:{[o.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(b(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(b(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let n
return t&&(this._enableAsyncFlush=!0),this._join((()=>{n=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in n?n.data:null}saveRecord(e,t={}){const n=K(e),i=this.cache
if(!n)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const n=e.cache
return!n||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,n)}(this._instanceCache,n))return Promise.resolve(e)
t||(t={})
let r="updateRecord"
i.isNew(n)?r="createRecord":i.isDeleted(n)&&(r="deleteRecord")
const s={op:r,data:{options:t,record:n},records:[n],cacheOptions:{[o.ER]:!0}}
return this.request(s).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function Le(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function je(e){return e?K(e):null}function Ne(e){return"string"==typeof e?e:e.href}Pe.prototype.getSchemaDefinitionService=function(){return(0,i.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},Pe.prototype.registerSchemaDefinitionService=function(e){(0,i.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},Pe.prototype.registerSchema=function(e){(0,i.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
var De=new WeakMap,Fe=new WeakSet
class ze{constructor(e,t){var n
h(this,n=Fe),n.add(this),function(e,t){h(e,t),t.set(e,void 0)}(this,De),function(e,t,n){e.set(p(e,t),n)}(De,this,e),this.identifier=t}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,p(Fe,this,He).call(this,this.links.related?"related":"self",e)}next(e={}){return p(Fe,this,He).call(this,"next",e)}prev(e={}){return p(Fe,this,He).call(this,"prev",e)}first(e={}){return p(Fe,this,He).call(this,"first",e)}last(e={}){return p(Fe,this,He).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function He(e,t){const n=this.links?.[e]
return n?(t.method=t.method||"GET",Object.assign(t,{url:Ne(n)}),(await(i=De,i.get(p(i,this))).request(t)).content):null
var i}(0,l.sg)(ze.prototype,"data"),(0,l.sg)(ze.prototype,"links"),(0,l.sg)(ze.prototype,"errors"),(0,l.sg)(ze.prototype,"meta")
const Ue=new Set(["createRecord","updateRecord","deleteRecord"])
function qe(e){return Boolean(e.op&&Ue.has(e.op))}function $e(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta),"errors"in t&&(e.errors=t.errors)}function We(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),n=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return n.stack=e.stack,n.error=e.error,Object.assign(n,e),n}function Ke(e,t,n){if(e){const n=t.get(e)
if(n)return n.priority}return n}const Ve={request(e,t){if(!e.request.store||e.request.cacheOptions?.[o.ER])return t(e.request)
const{store:n}=e.request,i=n.identifierCache.getOrCreateDocumentIdentifier(e.request)
i&&e.setIdentifier(i)
const r=n.requestManager._deduped,s=i&&r.get(i),a=i?n.cache.peekRequest(i):null
if(function(e,t,n,i){const{cacheOptions:o}=t
return t.op&&Ue.has(t.op)||o?.reload||!n||!(!e.lifetimes||!i)&&e.lifetimes.isHardExpired(i,e)}(n,e.request,!!a,i)){if(s)return s.priority={blocking:!0},s.promise
let o=Ge(t,e,i,{blocking:!0})
return i&&(o=o.finally((()=>{r.delete(i),n.notifications.notify(i,"state")})),r.set(i,{priority:{blocking:!0},promise:o}),n.notifications.notify(i,"state")),o}if(function(e,t,n,i){const{cacheOptions:o}=t
return o?.backgroundReload||!(!e.lifetimes||!i)&&e.lifetimes.isSoftExpired(i,e)}(n,e.request,0,i)){let o=s?.promise||Ge(t,e,i,{blocking:!1})
i&&!s&&(o=o.finally((()=>{r.delete(i),n.notifications.notify(i,"state")})),r.set(i,{priority:{blocking:!1},promise:o}),n.notifications.notify(i,"state")),n.requestManager._pending.set(e.id,o)}const l=e.request[o._q]||!1
if(e.setResponse(a.response),"error"in a){const e=l?Xe(n,{shouldHydrate:l,identifier:i},a.content,!0):a.content,t=We(a)
throw t.content=e,t}return l?Ye(n,e.request,{shouldHydrate:l,identifier:i},a.content,!0):a.content}}
function Ye(e,t,n,i,o){const{identifier:r}=n
if(!i)return i
if(Array.isArray(i.data)){const{recordArrayManager:s}=e
if(!r){if(!n.shouldHydrate)return i
const o=s.createArray({type:t.url,identifiers:i.data,doc:i,query:t}),r=new ze(e,null)
return r.data=o,r.meta=i.meta,r.links=i.links,r}let a=s._keyedArrays.get(r.lid)
if(a){const t=e._documentCache.get(r)
return o||(s.populateManagedArray(a,i.data,i),t.data=a,t.meta=i.meta,t.links=i.links),n.shouldHydrate?t:i}{a=s.createArray({type:r.lid,identifiers:i.data,doc:i}),s._keyedArrays.set(r.lid,a)
const t=new ze(e,r)
return t.data=a,t.meta=i.meta,t.links=i.links,e._documentCache.set(r,t),n.shouldHydrate?t:i}}{if(!r&&!n.shouldHydrate)return i
const t=i.data?e.peekRecord(i.data):null
let s
return r&&(s=e._documentCache.get(r)),s?o||(s.data=t,$e(s,i)):(s=new ze(e,r),s.data=t,$e(s,i),r&&e._documentCache.set(r,s)),n.shouldHydrate?s:i}}function Xe(e,t,n,i){const{identifier:o}=t
if(!function(e){return"errors"in e}(n)||!o&&!t.shouldHydrate)return n
let r
return o&&(r=e._documentCache.get(o)),r?i||(r.data=void 0,$e(r,n)):(r=new ze(e,o),$e(r,n),o&&e._documentCache.set(o,r)),t.shouldHydrate?r:n}function Ge(e,t,n,i){const{store:r}=t.request,s={shouldHydrate:t.request[o._q]||!1,identifier:n,priority:i}
let a=!1
if(qe(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&r.cache.willCommit(e,t)}r.lifetimes?.willRequest&&r.lifetimes.willRequest(t.request,n,r)
const l=e(t.request).then((e=>function(e,t,n,i){const{request:o}=t
let r
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join((()=>{r=function(e,t,n,i){let o=null
if(qe(t)){const n=t.data?.record||t.records?.[0]
n?o=e.cache.didCommit(n,i):function(e){return!qe(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(i)&&(o=e.cache.put(i))}else o=e.cache.put(i)
return Ye(e,t,n,o,!1)}(e,o,n,i)})),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,n.identifier,e),Ke(n.identifier,e.requestManager._deduped,n.priority).blocking)return r
e.notifications._flush()}(r,t,s,e)),(e=>function(e,t,n,i){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw i
let o
if(e._enableAsyncFlush=!0,e._join((()=>{o=function(e,t,n,i){let o
if(!qe(t.request))return o=e.cache.put(i),Xe(e,n,o,!1)
{const n=i&&i.content&&"object"==typeof i.content&&"errors"in i.content&&Array.isArray(i.content.errors)?i.content.errors:void 0,o=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(o,n)}}(e,t,n,i)})),e._enableAsyncFlush=null,n.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,i.response,n.identifier,e),qe(t.request))throw i
if(Ke(n.identifier,e.requestManager._deduped,n.priority).blocking){const e=We(i)
throw e.content=o,e}e.notifications._flush()}(r,t,s,e)))
if(!a)return l
const c=t.request.data?.record||t.request.records?.[0]
return r._requestCache._enqueue(l,{data:[{op:"saveRecord",recordIdentifier:c,options:void 0}]})}},6730:(e,t,n)=>{"use strict"
n.d(t,{Ay:()=>i.S,fV:()=>i.s,lL:()=>i.C,o:()=>i.r})
var i=n(601)
n(1603),n(3241)},8146:(e,t,n)=>{"use strict"
n.d(t,{B1:()=>l,Fe:()=>d,RH:()=>c,V1:()=>m,i$:()=>g,n5:()=>f,sg:()=>h,zs:()=>p})
var i=n(4463),o=n(5606),r=n(7375)
function s(e){e&&(0,o.consumeTag)(e)}function a(e){e&&(0,o.dirtyTag)(e)}function l(e){const t=(0,r.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(s(e["[]"]),s(e["@length"]),(0,o.consumeTag)(e.tag)):e.ref}function c(e){const t=(0,r.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(a(e["[]"]),a(e["@length"]),(0,o.dirtyTag)(e.tag)):e.ref=null}(e)}function d(e){const t=(0,r.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const u=(0,r.L1)("Signals",Symbol("Signals"))
function h(e,t,n){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[u]=this[u]||new Map,i=e.has(t),o=function(e,t,n){let i=e.get(n)
return i||(i=f(t,n),e.set(n,i)),l(i),i}(e,this,t)
return i||void 0===n||(o.lastValue=n),o.lastValue},set(e){const n=this[u]=this[u]||new Map
let i=n.get(t)
i||(i=f(this,t),n.set(t,i)),i.lastValue!==e&&(i.lastValue=e,c(i))}})}function p(e,t){t["[]"]=(0,i.tagForProperty)(e,"[]"),t["@length"]=(0,i.tagForProperty)(e,"length")}function f(e,t){return{key:t,tag:(0,i.tagForProperty)(e,t),t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function m(e,t,n){let i=e[u]
i||(i=new Map,e[u]=i)
let o=i.get(t)
return o||(o=f(e,t),o.shouldReset=n,i.set(t,o)),o}function g(e,t){const n=e[u]
if(n)return n.get(t)}},8738:(e,t,n)=>{"use strict"
n.d(t,{PO:()=>r,Vv:()=>o.dependentKeyCompat})
var i=n(4217),o=(n(8146),n(394))
function r(e,t,n){const o=new WeakMap,r=n.get
n.get=function(){return o.has(this)||o.set(this,(0,i.createCache)(r.bind(this))),(0,i.getValue)(o.get(this))}}},3193:(e,t,n)=>{"use strict"
function i(e){return e?.__esModule?e:{default:e,...e}}n.d(t,{A:()=>i})},7375:(e,t,n)=>{"use strict"
n.d(t,{L1:()=>l,Yj:()=>c,dN:()=>h,dV:()=>d,ml:()=>p,vs:()=>u})
const i="@warp-drive/core-types",o=globalThis,r=o.__warpDrive_universalCache=o.__warpDrive_universalCache??{}
o[i]=o[i]??{__version:"0.0.0"}
const s=o[i],a=s.__warpDrive_ModuleScopedCaches??{}
if(s.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function d(e,t){return a[`(transient) ${e}`]=t}function u(e,t){return t}function h(e){return r[`(transient) ${e}`]??null}function p(e,t){return r[`(transient) ${e}`]=t}s.__warpDrive_hasOtherCopy=!0},7648:(e,t,n)=>{"use strict"
n.d(t,{ER:()=>o,J6:()=>s,_q:()=>r,k0:()=>a})
var i=n(7375)
const o=(0,i.vs)("SkipCache",Symbol.for("wd:skip-cache")),r=(0,i.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),s=(0,i.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,i.L1)("DOC",Symbol("DOC"))},1788:(e,t,n)=>{"use strict"
n.d(t,{k5:()=>r,pm:()=>o})
var i=n(7375)
const o=(0,i.L1)("Store",Symbol("Store")),r=(0,i.L1)("$type",Symbol("$type"));(0,i.L1)("RequestSignature",Symbol("RequestSignature"))},255:module=>{var factory
window,factory=function(){return function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="./src/Hyperlink.js")}({"./node_modules/css-loader/dist/cjs.js!./src/Hyperlink.css":function(module,exports,__webpack_require__){eval('// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".ce-inline-tool-hyperlink-wrapper {\\r\\n    outline: none;\\r\\n    border: 0;\\r\\n    border-radius: 0 0 4px 4px;\\r\\n    margin: 0;\\r\\n    font-size: 13px;\\r\\n    padding: 10px;\\r\\n    width: 100%;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n    display: none;\\r\\n    font-weight: 500;\\r\\n    border-top: 1px solid rgba(201,201,204,.48);\\r\\n}\\r\\n\\r\\n.ce-inline-tool-hyperlink-wrapper.ce-inline-tool-hyperlink-wrapper--showed {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.ce-inline-tool-hyperlink--input,\\r\\n.ce-inline-tool-hyperlink--select-target,\\r\\n.ce-inline-tool-hyperlink--select-rel {\\r\\n    border: 1px solid rgba(201,201,204,.48);\\r\\n    -webkit-box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\\r\\n    box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\\r\\n    border-radius: 5px;\\r\\n    padding: 5px 8px;\\r\\n    margin-bottom: 10px;\\r\\n    outline: none;\\r\\n    width: 100%;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.ce-inline-tool-hyperlink--select-target,\\r\\n.ce-inline-tool-hyperlink--select-rel {\\r\\n    width: 48%;\\r\\n    display: inline-block;\\r\\n}\\r\\n.ce-inline-tool-hyperlink--select-target {\\r\\n    margin-right: 2%;\\r\\n}\\r\\n.ce-inline-tool-hyperlink--select-rel {\\r\\n    margin-left: 2%;\\r\\n}\\r\\n\\r\\n.ce-inline-tool-hyperlink--button {\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    background-color: #34c38f;\\r\\n    color: #fff;\\r\\n    padding: 7px 0;\\r\\n    border: none;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    font-size: 16px;\\r\\n    border-radius: 5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Hyperlink/./src/Hyperlink.css?./node_modules/css-loader/dist/cjs.js')},"./node_modules/css-loader/dist/runtime/api.js":function(module,exports,__webpack_require__){"use strict"
eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack://Hyperlink/./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module,exports,__webpack_require__){"use strict"
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Hyperlink/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?")},"./src/Hyperlink.css":function(module,exports,__webpack_require__){eval('var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./Hyperlink.css */ "./node_modules/css-loader/dist/cjs.js!./src/Hyperlink.css");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.i, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Hyperlink/./src/Hyperlink.css?')},"./src/Hyperlink.js":function(module,__webpack_exports__,__webpack_require__){"use strict"
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hyperlink; });\n/* harmony import */ var _SelectionUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectionUtils */ \"./src/SelectionUtils.js\");\n/* harmony import */ var _Hyperlink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyperlink.css */ \"./src/Hyperlink.css\");\n/* harmony import */ var _Hyperlink_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Hyperlink_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Hyperlink = /*#__PURE__*/function () {\n  function Hyperlink(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _classCallCheck(this, Hyperlink);\n\n    this.toolbar = api.toolbar;\n    this.inlineToolbar = api.inlineToolbar;\n    this.tooltip = api.tooltip;\n    this.i18n = api.i18n;\n    this.config = config;\n    this.selection = new _SelectionUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.commandLink = 'createLink';\n    this.commandUnlink = 'unlink';\n    this.CSS = {\n      wrapper: 'ce-inline-tool-hyperlink-wrapper',\n      wrapperShowed: 'ce-inline-tool-hyperlink-wrapper--showed',\n      button: 'ce-inline-tool',\n      buttonActive: 'ce-inline-tool--active',\n      buttonModifier: 'ce-inline-tool--link',\n      buttonUnlink: 'ce-inline-tool--unlink',\n      input: 'ce-inline-tool-hyperlink--input',\n      selectTarget: 'ce-inline-tool-hyperlink--select-target',\n      selectRel: 'ce-inline-tool-hyperlink--select-rel',\n      buttonSave: 'ce-inline-tool-hyperlink--button'\n    };\n    this.targetAttributes = this.config.availableTargets || ['_blank', // Opens the linked document in a new window or tab\n    '_self', // Opens the linked document in the same frame as it was clicked (this is default)\n    '_parent', // Opens the linked document in the parent frame\n    '_top' // Opens the linked document in the full body of the window\n    ];\n    this.relAttributes = this.config.availableRels || ['alternate', //Provides a link to an alternate representation of the document (i.e. print page, translated or mirror)\n    'author', //Provides a link to the author of the document\n    'bookmark', //Permanent URL used for bookmarking\n    'external', //Indicates that the referenced document is not part of the same site as the current document\n    'help', //Provides a link to a help document\n    'license', //Provides a link to licensing information for the document\n    'next', //Provides a link to the next document in the series\n    'nofollow', //Links to an unendorsed document, like a paid link. (\"nofollow\" is used by Google, to specify that the Google search spider should not follow that link)\n    'noreferrer', //Requires that the browser should not send an HTTP referer header if the user follows the hyperlink\n    'noopener', //Requires that any browsing context created by following the hyperlink must not have an opener browsing context\n    'prev', //The previous document in a selection\n    'search', //Links to a search tool for the document\n    'tag' //A tag (keyword) for the current document\n    ];\n    this.nodes = {\n      button: null,\n      wrapper: null,\n      input: null,\n      selectTarget: null,\n      selectRel: null,\n      buttonSave: null\n    };\n    this.inputOpened = false;\n  }\n\n  _createClass(Hyperlink, [{\n    key: \"render\",\n    value: function render() {\n      this.nodes.button = document.createElement('button');\n      this.nodes.button.type = 'button';\n      this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);\n      this.nodes.button.appendChild(this.iconSvg('link', 14, 10));\n      this.nodes.button.appendChild(this.iconSvg('unlink', 15, 11));\n      return this.nodes.button;\n    }\n  }, {\n    key: \"renderActions\",\n    value: function renderActions() {\n      var _this = this;\n\n      this.nodes.wrapper = document.createElement('div');\n      this.nodes.wrapper.classList.add(this.CSS.wrapper); // Input\n\n      this.nodes.input = document.createElement('input');\n      this.nodes.input.placeholder = 'https://...';\n      this.nodes.input.classList.add(this.CSS.input);\n      var i; // Target\n\n      this.nodes.selectTarget = document.createElement('select');\n      this.nodes.selectTarget.classList.add(this.CSS.selectTarget);\n      this.addOption(this.nodes.selectTarget, this.i18n.t('Select target'), '');\n\n      for (i = 0; i < this.targetAttributes.length; i++) {\n        this.addOption(this.nodes.selectTarget, this.targetAttributes[i], this.targetAttributes[i]);\n      }\n\n      if (!!this.config.target) {\n        this.nodes.selectTarget.value = this.config.target;\n      } // Rel\n\n\n      this.nodes.selectRel = document.createElement('select');\n      this.nodes.selectRel.classList.add(this.CSS.selectRel);\n      this.addOption(this.nodes.selectRel, this.i18n.t('Select rel'), '');\n\n      for (i = 0; i < this.relAttributes.length; i++) {\n        this.addOption(this.nodes.selectRel, this.relAttributes[i], this.relAttributes[i]);\n      }\n\n      if (!!this.config.rel) {\n        this.nodes.selectRel.value = this.config.rel;\n      } // Button\n\n\n      this.nodes.buttonSave = document.createElement('button');\n      this.nodes.buttonSave.type = 'button';\n      this.nodes.buttonSave.classList.add(this.CSS.buttonSave);\n      this.nodes.buttonSave.innerHTML = this.i18n.t('Save');\n      this.nodes.buttonSave.addEventListener('click', function (event) {\n        _this.savePressed(event);\n      }); // append\n\n      this.nodes.wrapper.appendChild(this.nodes.input);\n      this.nodes.wrapper.appendChild(this.nodes.selectTarget);\n      this.nodes.wrapper.appendChild(this.nodes.selectRel);\n      this.nodes.wrapper.appendChild(this.nodes.buttonSave);\n      return this.nodes.wrapper;\n    }\n  }, {\n    key: \"surround\",\n    value: function surround(range) {\n      if (range) {\n        if (!this.inputOpened) {\n          this.selection.setFakeBackground();\n          this.selection.save();\n        } else {\n          this.selection.restore();\n          this.selection.removeFakeBackground();\n        }\n\n        var parentAnchor = this.selection.findParentTag('A');\n\n        if (parentAnchor) {\n          this.selection.expandToTag(parentAnchor);\n          this.unlink();\n          this.closeActions();\n          this.checkState();\n          this.toolbar.close();\n          return;\n        }\n      }\n\n      this.toggleActions();\n    }\n  }, {\n    key: \"checkState\",\n    value: function checkState() {\n      var selection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var anchorTag = this.selection.findParentTag('A');\n\n      if (anchorTag) {\n        this.nodes.button.classList.add(this.CSS.buttonUnlink);\n        this.nodes.button.classList.add(this.CSS.buttonActive);\n        this.openActions();\n        var hrefAttr = anchorTag.getAttribute('href');\n        var targetAttr = anchorTag.getAttribute('target');\n        var relAttr = anchorTag.getAttribute('rel');\n        this.nodes.input.value = !!hrefAttr ? hrefAttr : '';\n        this.nodes.selectTarget.value = !!targetAttr ? targetAttr : '';\n        this.nodes.selectRel.value = !!relAttr ? relAttr : '';\n        this.selection.save();\n      } else {\n        this.nodes.button.classList.remove(this.CSS.buttonUnlink);\n        this.nodes.button.classList.remove(this.CSS.buttonActive);\n      }\n\n      return !!anchorTag;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.closeActions();\n    }\n  }, {\n    key: \"toggleActions\",\n    value: function toggleActions() {\n      if (!this.inputOpened) {\n        this.openActions(true);\n      } else {\n        this.closeActions(false);\n      }\n    }\n  }, {\n    key: \"openActions\",\n    value: function openActions() {\n      var needFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.nodes.wrapper.classList.add(this.CSS.wrapperShowed);\n\n      if (needFocus) {\n        this.nodes.input.focus();\n      }\n\n      this.inputOpened = true;\n    }\n  }, {\n    key: \"closeActions\",\n    value: function closeActions() {\n      var clearSavedSelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n      if (this.selection.isFakeBackgroundEnabled) {\n        var currentSelection = new _SelectionUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        currentSelection.save();\n        this.selection.restore();\n        this.selection.removeFakeBackground();\n        currentSelection.restore();\n      }\n\n      this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed);\n      this.nodes.input.value = '';\n      this.nodes.selectTarget.value = '';\n      this.nodes.selectRel.value = '';\n\n      if (clearSavedSelection) {\n        this.selection.clearSaved();\n      }\n\n      this.inputOpened = false;\n    }\n  }, {\n    key: \"savePressed\",\n    value: function savePressed(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      event.stopImmediatePropagation();\n      var value = this.nodes.input.value || '';\n      var target = this.nodes.selectTarget.value || '';\n      var rel = this.nodes.selectRel.value || '';\n\n      if (!value.trim()) {\n        this.selection.restore();\n        this.unlink();\n        event.preventDefault();\n        this.closeActions();\n      } // if (!this.validateURL(value)) {\n      //     this.tooltip.show(this.nodes.input, 'Pasted link is not valid.', {\n      //         placement: 'top',\n      //     });\n      //     setTimeout(() => {\n      //         this.tooltip.hide();\n      //     }, 1000);\n      //     return;\n      // }\n\n\n      value = this.prepareLink(value);\n      this.selection.restore();\n      this.selection.removeFakeBackground();\n      this.insertLink(value, target, rel);\n      this.selection.collapseToEnd();\n      this.inlineToolbar.close();\n    }\n  }, {\n    key: \"validateURL\",\n    value: function validateURL(str) {\n      var pattern = new RegExp('^(https?:\\\\/\\\\/)?' + // protocol\n      '((([a-z\\\\d]([a-z\\\\d-]*[a-z\\\\d])*)\\\\.)+[a-z]{2,}|' + // domain name\n      '((\\\\d{1,3}\\\\.){3}\\\\d{1,3}))' + // OR ip (v4) address\n      '(\\\\:\\\\d+)?(\\\\/[-a-z\\\\d%_.~+]*)*' + // port and path\n      '(\\\\?[;&a-z\\\\d%_.~+=-]*)?' + // query string\n      '(\\\\#[-a-z\\\\d_]*)?$', 'i'); // fragment locator\n\n      return !!pattern.test(str);\n    }\n  }, {\n    key: \"prepareLink\",\n    value: function prepareLink(link) {\n      link = link.trim();\n      link = this.addProtocol(link);\n      return link;\n    }\n  }, {\n    key: \"addProtocol\",\n    value: function addProtocol(link) {\n      if (/^(\\w+):(\\/\\/)?/.test(link)) {\n        return link;\n      }\n\n      var isInternal = /^\\/[^/\\s]/.test(link),\n          isAnchor = link.substring(0, 1) === '#',\n          isProtocolRelative = /^\\/\\/[^/\\s]/.test(link);\n\n      if (!isInternal && !isAnchor && !isProtocolRelative) {\n        link = 'http://' + link;\n      }\n\n      return link;\n    }\n  }, {\n    key: \"insertLink\",\n    value: function insertLink(link) {\n      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var rel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n      var anchorTag = this.selection.findParentTag('A');\n\n      if (anchorTag) {\n        this.selection.expandToTag(anchorTag);\n      } else {\n        document.execCommand(this.commandLink, false, link);\n        anchorTag = this.selection.findParentTag('A');\n      }\n\n      if (anchorTag) {\n        if (!!target) {\n          anchorTag['target'] = target;\n        } else {\n          anchorTag.removeAttribute('target');\n        }\n\n        if (!!rel) {\n          anchorTag['rel'] = rel;\n        } else {\n          anchorTag.removeAttribute('rel');\n        }\n      }\n    }\n  }, {\n    key: \"unlink\",\n    value: function unlink() {\n      document.execCommand(this.commandUnlink);\n    }\n  }, {\n    key: \"iconSvg\",\n    value: function iconSvg(name) {\n      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;\n      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 14;\n      var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n      icon.classList.add('icon', 'icon--' + name);\n      icon.setAttribute('width', width + 'px');\n      icon.setAttribute('height', height + 'px');\n      icon.innerHTML = \"<use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"#\".concat(name, \"\\\"></use>\");\n      return icon;\n    }\n  }, {\n    key: \"addOption\",\n    value: function addOption(element, text) {\n      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n      var option = document.createElement('option');\n      option.text = text;\n      option.value = value;\n      element.add(option);\n    }\n  }, {\n    key: \"shortcut\",\n    get: function get() {\n      return this.config.shortcut || 'CMD+L';\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return 'Hyperlink';\n    }\n  }], [{\n    key: \"isInline\",\n    get: function get() {\n      return true;\n    }\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        a: {\n          href: true,\n          target: true,\n          rel: true\n        }\n      };\n    }\n  }]);\n\n  return Hyperlink;\n}();\n\n\n\n//# sourceURL=webpack://Hyperlink/./src/Hyperlink.js?")},"./src/SelectionUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict"
eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectionUtils; });\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SelectionUtils = /*#__PURE__*/function () {\n  function SelectionUtils() {\n    _classCallCheck(this, SelectionUtils);\n\n    this.selection = null;\n    this.savedSelectionRange = null;\n    this.isFakeBackgroundEnabled = false;\n    this.commandBackground = \'backColor\';\n    this.commandRemoveFormat = \'removeFormat\';\n  }\n\n  _createClass(SelectionUtils, [{\n    key: "isElement",\n    value: function isElement(node) {\n      return node && _typeof(node) === \'object\' && node.nodeType && node.nodeType === Node.ELEMENT_NODE;\n    }\n  }, {\n    key: "isContentEditable",\n    value: function isContentEditable(element) {\n      return element.contentEditable === \'true\';\n    }\n  }, {\n    key: "isNativeInput",\n    value: function isNativeInput(target) {\n      var nativeInputs = [\'INPUT\', \'TEXTAREA\'];\n      return target && target.tagName ? nativeInputs.includes(target.tagName) : false;\n    }\n  }, {\n    key: "canSetCaret",\n    value: function canSetCaret(target) {\n      var result = true;\n\n      if (this.isNativeInput(target)) {\n        switch (target.type) {\n          case \'file\':\n          case \'checkbox\':\n          case \'radio\':\n          case \'hidden\':\n          case \'submit\':\n          case \'button\':\n          case \'image\':\n          case \'reset\':\n            result = false;\n            break;\n\n          default:\n        }\n      } else {\n        result = this.isContentEditable(target);\n      }\n\n      return result;\n    }\n  }, {\n    key: "CSS",\n    value: function CSS() {\n      return {\n        editorWrapper: \'codex-editor\',\n        editorZone: \'codex-editor__redactor\'\n      };\n    }\n  }, {\n    key: "anchorNode",\n    value: function anchorNode() {\n      var selection = window.getSelection();\n      return selection ? selection.anchorNode : null;\n    }\n  }, {\n    key: "anchorElement",\n    value: function anchorElement() {\n      var selection = window.getSelection();\n\n      if (!selection) {\n        return null;\n      }\n\n      var anchorNode = selection.anchorNode;\n\n      if (!anchorNode) {\n        return null;\n      }\n\n      if (!this.isElement(anchorNode)) {\n        return anchorNode.parentElement;\n      } else {\n        return anchorNode;\n      }\n    }\n  }, {\n    key: "anchorOffset",\n    value: function anchorOffset() {\n      var selection = window.getSelection();\n      return selection ? selection.anchorOffset : null;\n    }\n  }, {\n    key: "isCollapsed",\n    value: function isCollapsed() {\n      var selection = window.getSelection();\n      return selection ? selection.isCollapsed : null;\n    }\n  }, {\n    key: "isAtEditor",\n    value: function isAtEditor() {\n      var selection = SelectionUtils.get();\n      var selectedNode = selection.anchorNode || selection.focusNode;\n\n      if (selectedNode && selectedNode.nodeType === Node.TEXT_NODE) {\n        selectedNode = selectedNode.parentNode;\n      }\n\n      var editorZone = null;\n\n      if (selectedNode) {\n        editorZone = selectedNode.closest(".".concat(SelectionUtils.CSS.editorZone));\n      }\n\n      return editorZone && editorZone.nodeType === Node.ELEMENT_NODE;\n    }\n  }, {\n    key: "isSelectionExists",\n    value: function isSelectionExists() {\n      var selection = SelectionUtils.get();\n      return !!selection.anchorNode;\n    }\n  }, {\n    key: "get",\n    value: function get() {\n      return window.getSelection();\n    }\n  }, {\n    key: "setCursor",\n    value: function setCursor(element) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var range = document.createRange();\n      var selection = window.getSelection();\n\n      if (this.isNativeInput(element)) {\n        if (!this.canSetCaret(element)) {\n          return;\n        }\n\n        element.focus();\n        element.selectionStart = element.selectionEnd = offset;\n        return element.getBoundingClientRect();\n      }\n\n      range.setStart(element, offset);\n      range.setEnd(element, offset);\n      selection.removeAllRanges();\n      selection.addRange(range);\n      return range.getBoundingClientRect();\n    }\n  }, {\n    key: "removeFakeBackground",\n    value: function removeFakeBackground() {\n      if (!this.isFakeBackgroundEnabled) {\n        return;\n      }\n\n      this.isFakeBackgroundEnabled = false;\n      document.execCommand(this.commandRemoveFormat);\n    }\n  }, {\n    key: "setFakeBackground",\n    value: function setFakeBackground() {\n      document.execCommand(this.commandBackground, false, \'#a8d6ff\');\n      this.isFakeBackgroundEnabled = true;\n    }\n  }, {\n    key: "save",\n    value: function save() {\n      this.savedSelectionRange = SelectionUtils.range;\n    }\n  }, {\n    key: "restore",\n    value: function restore() {\n      if (!this.savedSelectionRange) {\n        return;\n      }\n\n      var sel = window.getSelection();\n      sel.removeAllRanges();\n      sel.addRange(this.savedSelectionRange);\n    }\n  }, {\n    key: "clearSaved",\n    value: function clearSaved() {\n      this.savedSelectionRange = null;\n    }\n  }, {\n    key: "collapseToEnd",\n    value: function collapseToEnd() {\n      var sel = window.getSelection();\n      var range = document.createRange();\n      range.selectNodeContents(sel.focusNode);\n      range.collapse(false);\n      sel.removeAllRanges();\n      sel.addRange(range);\n    }\n  }, {\n    key: "findParentTag",\n    value: function findParentTag(tagName) {\n      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var searchDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n      var selection = window.getSelection();\n      var parentTag = null;\n\n      if (!selection || !selection.anchorNode || !selection.focusNode) {\n        return null;\n      }\n\n      var boundNodes = [selection.anchorNode, selection.focusNode];\n      boundNodes.forEach(function (parent) {\n        var searchDepthIterable = searchDepth;\n\n        while (searchDepthIterable > 0 && parent.parentNode) {\n          if (parent.tagName === tagName) {\n            parentTag = parent;\n\n            if (className && parent.classList && !parent.classList.contains(className)) {\n              parentTag = null;\n            }\n\n            if (parentTag) {\n              break;\n            }\n          }\n\n          parent = parent.parentNode;\n          searchDepthIterable--;\n        }\n      });\n      return parentTag;\n    }\n  }, {\n    key: "expandToTag",\n    value: function expandToTag(element) {\n      var selection = window.getSelection();\n      selection.removeAllRanges();\n      var range = document.createRange();\n      range.selectNodeContents(element);\n      selection.addRange(range);\n    }\n  }], [{\n    key: "range",\n    get: function get() {\n      var selection = window.getSelection();\n      return selection && selection.rangeCount ? selection.getRangeAt(0) : null;\n    }\n  }, {\n    key: "rect",\n    get: function get() {\n      var sel = document.selection,\n          range;\n      var rect = {\n        x: 0,\n        y: 0,\n        width: 0,\n        height: 0\n      };\n\n      if (sel && sel.type !== \'Control\') {\n        range = sel.createRange();\n        rect.x = range.boundingLeft;\n        rect.y = range.boundingTop;\n        rect.width = range.boundingWidth;\n        rect.height = range.boundingHeight;\n        return rect;\n      }\n\n      if (!window.getSelection) {\n        return rect;\n      }\n\n      sel = window.getSelection();\n\n      if (sel.rangeCount === null || isNaN(sel.rangeCount)) {\n        return rect;\n      }\n\n      if (sel.rangeCount === 0) {\n        return rect;\n      }\n\n      range = sel.getRangeAt(0).cloneRange();\n\n      if (range.getBoundingClientRect) {\n        rect = range.getBoundingClientRect();\n      }\n\n      if (rect.x === 0 && rect.y === 0) {\n        var span = document.createElement(\'span\');\n\n        if (span.getBoundingClientRect) {\n          span.appendChild(document.createTextNode("\\u200B"));\n          range.insertNode(span);\n          rect = span.getBoundingClientRect();\n          var spanParent = span.parentNode;\n          spanParent.removeChild(span);\n          spanParent.normalize();\n        }\n      }\n\n      return rect;\n    }\n  }, {\n    key: "text",\n    get: function get() {\n      return window.getSelection ? window.getSelection().toString() : \'\';\n    }\n  }]);\n\n  return SelectionUtils;\n}();\n\n\n\n//# sourceURL=webpack://Hyperlink/./src/SelectionUtils.js?')}}).default},module.exports=factory()},2045:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>W})
var i=n(151)
const o={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class r{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,i.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(y(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,n=t.included
let i,o
const{identifierCache:r}=this._capabilities
if(n)for(i=0,o=n.length;i<o;i++)n[i]=b(this,r,n[i])
if(Array.isArray(t.data)){o=t.data.length
const s=[]
for(i=0;i<o;i++)s.push(b(this,r,t.data[i]))
return this._putDocument(e,s,n)}if(null===t.data)return this._putDocument(e,null,n)
const s=b(this,r,t.data)
return this._putDocument(e,s,n)}_putDocument(e,t,n){const i=y(e)?function(e){const t={}
return e.content&&(w(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},n=e.content
return n&&w(t,n),t}(e)
void 0!==t&&(i.data=t),void 0!==n&&(i.included=n)
const o=e.request,r=o?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(o):null
if(r){i.lid=r.lid,e.content=i
const t=this.__documents.has(r.lid)
this.__documents.set(r.lid,e),this._capabilities.notifyChange(r,t?"updated":"added")}return i}patch(e){if("mergeIdentifiers"===e.op){const t=this.__cache.get(e.record)
t&&(this.__cache.set(e.value,t),this.__cache.delete(e.record)),this.__graph.update(e,!0)}}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:n,id:i,lid:o}=e,r=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),s={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(s[t]=this.__graph.getData(e,t))})),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,n)=>{if(n in r&&void 0!==r[n])return
const i=l(t,e,c)
void 0!==i&&(r[n]=i)})),{type:n,id:i,lid:o,attributes:r,relationships:s}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,n){let i
const o=this.__safePeek(e,!1),r=!!o,s=o||this._createCache(e),a=function(e,t,n){const i=t._store.getRequestStateService()
return!h(e)&&i.getPendingRequestsForRecord(n).some((e=>"query"===e.type))}(o,this._capabilities,e)||!h(o),l=!function(e){if(!e)return!0
const t=e.isNew,n=e.isDeleted,i=u(e)
return(!t||n)&&i}(o)&&!a
return s.isNew&&(s.isNew=!1,this._capabilities.notifyChange(e,"identity"),this._capabilities.notifyChange(e,"state")),n&&(i=r?d(s,t.attributes):Object.keys(t.attributes||{})),s.remoteAttrs=Object.assign(s.remoteAttrs||Object.create(null),t.attributes),s.localAttrs&&g(s)&&this._capabilities.notifyChange(e,"state"),l||this._capabilities.notifyChange(e,"added"),t.id&&(s.id=t.id),t.relationships&&p(this.__graph,this._capabilities,e,t),i&&i.length&&c(this._capabilities,e,i),i}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const n={}
if(void 0!==t){const i=this._capabilities.schema.fields(e),o=this.__graph,r=Object.keys(t)
for(let s=0;s<r.length;s++){const a=r[s],l=t[a]
if("id"===a)continue
const c=i.get(a)
let d
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),n[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),d=o.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),d=o.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
default:n[a]=l}}}return this._capabilities.notifyChange(e,"added"),n}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const n=t.content,i=t.request.op,o=n&&n.data,{identifierCache:r}=this._capabilities,s=e.id,a="deleteRecord"!==i&&o?r.updateRecordIdentifier(e,o):e,l=this.__peek(a,!1)
let u
l.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),l.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed")),l.isNew=!1,o&&(o.id&&!l.id&&(l.id=o.id),a===e&&a.id!==s&&this._capabilities.notifyChange(a,"identity"),o.relationships&&p(this.__graph,this._capabilities,a,o),u=o.attributes)
const h=d(l,u)
l.remoteAttrs=Object.assign(l.remoteAttrs||Object.create(null),l.inflightAttrs,u),l.inflightAttrs=null,g(l),l.errors&&(l.errors=null,this._capabilities.notifyChange(a,"errors")),c(this._capabilities,a,h),this._capabilities.notifyChange(a,"state")
const f=n&&n.included
if(f)for(let c=0,d=f.length;c<d;c++)b(this,r,f[c])
return{data:a}}commitWasRejected(e,t){const n=this.__peek(e,!1)
if(n.inflightAttrs){const e=Object.keys(n.inflightAttrs)
if(e.length>0){const t=n.localAttrs=n.localAttrs||Object.create(null)
for(let i=0;i<e.length;i++)void 0===t[e[i]]&&(t[e[i]]=n.inflightAttrs[e[i]])}n.inflightAttrs=null}t&&(n.errors=t),this._capabilities.notifyChange(e,"errors")}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,i.peekGraph)(t)?.unload(e)
const n=!this.isDeletionCommitted(e)
let o=!1
const r=this.__peek(e,!1)
r.isNew?(0,i.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:!0}):(0,i.peekGraph)(t)?.unload(e),r.localAttrs=null,r.remoteAttrs=null,r.defaultAttrs=null,r.inflightAttrs=null
const s=function(e,t){const n=[],i=[],o=new Set
for(i.push(t);i.length>0;){const r=i.shift()
n.push(r),o.add(r)
const s=v(e,t).iterator()
for(let e=s.next();!e.done;e=s.next()){const t=e.value
t&&!o.has(t)&&(o.add(t),i.push(t))}}return n}(t,e)
if(function(e,t){for(let n=0;n<t.length;++n){const i=t[n]
if(e.hasRecord(i))return!1}return!0}(t,s))for(let i=0;i<s.length;++i){const e=s[i]
t.notifyChange(e,"removed"),o=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,r),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!o&&n&&t.notifyChange(e,"removed")}getAttr(e,t){const n=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),n){const n=t,o=this.__peek(e,!0)
if(!o)return
if(o.localAttrs&&n in o.localAttrs)return o.localAttrs[n]
if(o.inflightAttrs&&n in o.inflightAttrs)return o.inflightAttrs[n]
if(o.remoteAttrs&&n in o.remoteAttrs)return o.remoteAttrs[n]
if(o.defaultAttrs&&n in o.defaultAttrs)return o.defaultAttrs[n]
{const t=this._capabilities.schema.fields(e).get(n)
this._capabilities
const r=l(t,e,this._capabilities._store)
return(i=t)&&a(i.options)&&(o.defaultAttrs=o.defaultAttrs||Object.create(null),o.defaultAttrs[n]=r),r}}var i
const o=t,r=this.__peek(e,!0),s=o[0]
let c=r.localAttrs&&s in r.localAttrs?r.localAttrs[s]:void 0
if(void 0===c&&(c=r.inflightAttrs&&s in r.inflightAttrs?r.inflightAttrs[s]:void 0),void 0===c&&(c=r.remoteAttrs&&s in r.remoteAttrs?r.remoteAttrs[s]:void 0),void 0!==c){for(let e=1;e<o.length;e++)if(c=c[o[e]],void 0===c)return
return c}}setAttr(e,t,n){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=this.__peek(e,!1),o=t,r=i.inflightAttrs&&o in i.inflightAttrs?i.inflightAttrs[o]:i.remoteAttrs&&o in i.remoteAttrs?i.remoteAttrs[o]:void 0
return r!==n?(i.localAttrs=i.localAttrs||Object.create(null),i.localAttrs[o]=n,i.changes=i.changes||Object.create(null),i.changes[o]=[r,n]):i.localAttrs&&(delete i.localAttrs[o],delete i.changes[o]),i.defaultAttrs&&o in i.defaultAttrs&&delete i.defaultAttrs[o],void this._capabilities.notifyChange(e,"attributes",o)}const o=t,r=this.__peek(e,!1),s=o[0],a=r.inflightAttrs&&s in r.inflightAttrs?r.inflightAttrs[s]:r.remoteAttrs&&s in r.remoteAttrs?r.remoteAttrs[s]:void 0
let l
if(a){l=a[o[1]]
for(let e=2;e<o.length;e++)l=l[o[e]]}if(l!==n){r.localAttrs=r.localAttrs||Object.create(null),r.localAttrs[s]=r.localAttrs[s]||structuredClone(a),r.changes=r.changes||Object.create(null)
let e=r.localAttrs[s],t=1
for(;t<o.length-1;)e=e[o[t++]]
e[o[t]]=n,r.changes[s]=[a,r.localAttrs[s]]}else if(r.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(r.localAttrs[s])&&(delete r.localAttrs[s],delete r.changes[s])}catch{}this._capabilities.notifyChange(e,"attributes",s)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let n
return t.isDeleted=!1,null!==t.localAttrs&&(n=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors")),this._capabilities.notifyChange(e,"state"),n&&n.length&&c(this._capabilities,e,n),n||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state")}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let n=this.__cache.get(e)
return!n&&t&&(n=this.__destroyedCache.get(e)),n}__peek(e,t){return this.__safePeek(e,t)}}function s(e){return(0,i.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function a(e){return!!e&&"function"==typeof e.defaultValue}function l(e,t,n){const i=e?.options
if(e&&(i||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(a(i))return i.defaultValue()
if(i&&"defaultValue"in i)return i.defaultValue
if("attribute"!==e.kind&&e.type){const o=n.schema.transformation(e)
if(o?.defaultValue)return o.defaultValue(i||null,t)}}}function c(e,t,n){if(n)for(let i=0;i<n.length;i++)e.notifyChange(t,"attributes",n[i])
else e.notifyChange(t,"attributes")}function d(e,t){const n=[]
if(t){const i=Object.keys(t),o=i.length,r=e.localAttrs,s=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let e=0;e<o;e++){const o=i[e],a=t[o]
r&&void 0!==r[o]||s[o]!==a&&n.push(o)}}return n}function u(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function h(e,t=!1){if(!e)return!1
const n=e.isNew,i=u(e)
return n?!e.isDeleted:!(t&&e.isDeletionCommitted||i)}function p(e,t,n,i){const o=t.schema.fields(n)
for(const[r,s]of o){if(!m(s))continue
const t=i.relationships[r]
t&&e.push({op:"updateRelationship",record:n,field:r,value:t})}}const f=new Set(["hasMany","belongsTo","resource","collection"])
function m(e){return f.has(e.kind)}function g(e){const{localAttrs:t,remoteAttrs:n,inflightAttrs:i,defaultAttrs:o,changes:r}=e
if(!t)return e.changes=null,!1
let s=!1
const a=Object.keys(t)
for(let l=0,c=a.length;l<c;l++){const e=a[l];(i&&e in i?i[e]:n&&e in n?n[e]:void 0)===t[e]&&(s=!0,delete t[e],delete r[e]),o&&e in o&&delete o[e]}return s}function b(e,t,n){let i=t.peekRecordIdentifier(n)
return i=i?t.updateRecordIdentifier(i,n):t.getOrCreateRecordIdentifier(n),e.upsert(i,n,e._capabilities.hasRecord(i)),i}function v(e,t){const n=(0,i.peekGraph)(e),r=n?.identifiers.get(t)
if(!r)return o
const a=[]
Object.keys(r).forEach((e=>{const t=r[e]
t&&!t.definition.isImplicit&&a.push(t)}))
let l=0,c=0,d=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;l<a.length;){for(;c<2;){const t=0===c?(e=a[l],(0,i.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]):s(a[l])
for(;d<t.length;){const e=t[d++]
if(null!==e)return e}d=0,c++}c=0,l++}var e})()
return{value:e,done:void 0===e}}})}}function y(e){return e instanceof Error}function w(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}var k=n(2294),_=n(6730),x=n(1274),C=n(7910)
function E(e,t,n,i){const o=t.data?(0,C.i)(t.data,((t,o)=>{const{id:r,type:s}=t
return function(e,t,n,i){const{id:o,type:r}=e
e.relationships||(e.relationships={})
const{relationships:s}=e,a=function(e,t,n,i){const{name:o}=n,{type:r}=t,s=function(e,t,n){const i=e.schema.fields(t).get(n)
return i?i.options.inverse:null}(e,{type:r},o)
if(s)return{inverseKey:s,kind:e.schema.fields({type:i}).get(s).kind}}(n,t,i,r)
if(a){const{inverseKey:e,kind:n}=a,i=s[e]?.data
"hasMany"===n&&void 0===i||(s[e]=s[e]||{},s[e].data=function(e,t,{id:n,type:i}){const o={id:n,type:i}
let r=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===o.type&&e.id===o.id))||t.push(o),r=t}else{const t=e||{}
Object.assign(t,o),r=t}return r}(i??null,n,t))}}(t,n,e,i),{id:r,type:s}})):null,r={}
"meta"in t&&(r.meta=t.meta),"links"in t&&(r.links=t.links),"data"in t&&(r.data=o)
const s={id:n.id,type:n.type,relationships:{[i.name]:r}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(s),t}const S=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),T={request(e,t){if(e.request.url||!e.request.op||!S.has(e.request.op))return t(e.request)
const{store:n}=e.request
switch(n._fetchManager||(n._fetchManager=new C.F(n)),e.request.op){case"findRecord":return function(e){const{store:t,data:n}=e.request,{record:i,options:o}=n
let r
if(t._instanceCache.recordIsLoaded(i))if(o.reload)(0,C.a)(i),r=t._fetchManager.scheduleFetch(i,o,e.request)
else{let n=null
const s=t.adapterFor(i.type)
void 0===o.reload&&s.shouldReloadRecord&&s.shouldReloadRecord(t,n=t._fetchManager.createSnapshot(i,o))?((0,C.a)(i),o.reload=!0,r=t._fetchManager.scheduleFetch(i,o,e.request)):(!1===o.backgroundReload||!o.backgroundReload&&s.shouldBackgroundReloadRecord&&!s.shouldBackgroundReloadRecord(t,n=n||t._fetchManager.createSnapshot(i,o))||((0,C.a)(i),o.backgroundReload=!0,t._fetchManager.scheduleFetch(i,o,e.request)),r=Promise.resolve(i))}else r=t._fetchManager.fetchDataIfNeededForIdentifier(i,o,e.request)
return r.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:n}=e.request,{type:i,options:o}=n,r=t.adapterFor(i),s=t.recordArrayManager._live.get(i),a=new C.b(t,i,o)
let l
return o.reload||!1!==o.reload&&(r.shouldReloadAll&&r.shouldReloadAll(t,a)||!r.shouldReloadAll&&0===a.length)?(s&&(s.isUpdating=!0),l=M(r,t,i,a,e.request,!0)):(l=Promise.resolve(t.peekAll(i)),(o.backgroundReload||!1!==o.backgroundReload&&(!r.shouldBackgroundReloadAll||r.shouldBackgroundReloadAll(t,a)))&&(s&&(s.isUpdating=!0),M(r,t,i,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:n}=e.request
let{options:i}=n
const{type:o,query:r}=n,s=t.adapterFor(o),a=i._recordArray||t.recordArrayManager.createArray({type:o,query:r})
delete i._recordArray
const l=t.modelFor(o)
return Promise.resolve().then((()=>s.query(t,l,r,a,i))).then((e=>{const n=t.serializerFor(o),i=(0,C.n)(n,t,l,e,null,"query"),r=t._push(i,!0)
return t.recordArrayManager.populateManagedArray(a,r,i),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:n}=e.request,{type:i,query:o,options:r}=n,s=t.adapterFor(i),a=t.modelFor(i)
return Promise.resolve().then((()=>s.queryRecord(t,a,o,r))).then((e=>{const n=t.serializerFor(i),o=(0,C.n)(n,t,a,e,null,"queryRecord"),r=t._push(o,!0)
return r?t.peekRecord(r):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:n,records:i}=e.request,{options:o,record:r,links:s,useLink:a,field:l}=n,c=i?.[0],d=c&&t._fetchManager.getPendingFetch(c,o)
if(d)return d
if(a)return function(e,t,n,i,o){return Promise.resolve().then((()=>{const r=e.adapterFor(t.type),s=e._fetchManager.createSnapshot(t,o),a=n&&"string"!=typeof n?n.href:n
return r.findBelongsTo(e,s,a,i)})).then((n=>{const o=e.modelFor(i.type),r=e.serializerFor(i.type)
let s=(0,C.n)(r,e,o,n,null,"findBelongsTo")
return s.data||s.links||s.meta?(s=E(e,s,t,i),e._push(s,!0)):null}),null)}(t,r,s.related,l,o)
const u=t._fetchManager
return(0,C.a)(c),o.reload?u.scheduleFetch(c,o,e.request):u.fetchDataIfNeededForIdentifier(c,o,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:n,records:i}=e.request,{options:o,record:r,links:s,useLink:a,field:l}=n
if(a)return function(e,t,n,i,o,r){return Promise.resolve().then((()=>{const s=t._fetchManager.createSnapshot(n,r),a=i&&"string"!=typeof i?i.href:i
return e.findHasMany(t,s,a,o)})).then((e=>{const i=t.modelFor(o.type),r=t.serializerFor(o.type)
let s=(0,C.n)(r,t,i,e,null,"findHasMany")
return s=E(t,s,n,o),t._push(s,!0)}),null)}(t.adapterFor(r.type),t,r,s.related,l,o)
const c=new Array(i.length),d=t._fetchManager
for(let u=0;u<i.length;u++){const t=i[u];(0,C.a)(t),c[u]=o.reload?d.scheduleFetch(t,o,e.request):d.fetchDataIfNeededForIdentifier(t,o,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:n,op:i}=e.request,{options:o,record:r}=n
t.cache.willCommit(r,e)
const s=Object.assign({[C.S]:i},o)
return t._fetchManager.scheduleSave(r,s).then((n=>{let o
return t._join((()=>{o=t.cache.didCommit(r,{request:e.request,content:n})})),t.lifetimes?.didRequest&&"createRecord"===i&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(o.data)})).catch((e=>{let n=e
throw e?"string"==typeof e&&(n=new Error(e)):n=new Error("Unknown Error Occurred During Request"),function(e,t,n){if(n&&!0===n.isAdapterError&&"InvalidError"===n.code){const i=e.serializerFor(t.type)
if(i&&"function"==typeof i.extractErrors){const o=i.extractErrors(e,e.modelFor(t.type),n,t.id)
n.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((n=>{const i=(o=e[n],Array.isArray(o)?o:[o])
var o
for(let e=0;e<i.length;e++){let o="Invalid Attribute",r=`/data/attributes/${n}`
n===O&&(o="Invalid Document",r="/data"),t.push({title:o,detail:i[e],source:{pointer:r}})}})),t}(o)}}const i=e.cache
if(n.errors){let e=n.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),i.commitWasRejected(t,e)}else i.commitWasRejected(t)}(t,r,n),n}))}(e)
default:return t(e.request)}}},O="base"
function M(e,t,n,i,o,r){const s=t.modelFor(n)
let a=Promise.resolve().then((()=>e.findAll(t,s,null,i)))
return a=a.then((e=>{const o=t.serializerFor(n),a=(0,C.n)(o,t,s,e,null,"findAll")
return t._push(a,r),i._recordArray.isUpdating=!1,i._recordArray})),a}function A(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const n=(0,x.di)(e),{_adapterCache:i}=this
let o=i[n]
if(o)return o
const r=(0,k.getOwner)(this)
return o=r.lookup(`adapter:${n}`),void 0!==o?(i[n]=o,o):(o=i.application||r.lookup("adapter:application"),void 0!==o?(i[n]=o,i.application=o,o):void 0)}function R(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,x.di)(e),{_serializerCache:n}=this
let i=n[t]
if(i)return i
const o=(0,k.getOwner)(this)
return i=o.lookup(`serializer:${t}`),void 0!==i?(n[t]=i,i):(i=n.application||o.lookup("serializer:application"),void 0!==i?(n[t]=i,n.application=i,i):null)}function I(e,t){const n=(0,x.di)(e),i=this.serializerFor(n),o=this.modelFor(n)
return i.normalize(o,t)}function B(e,t){const n=t||e,i=t?(0,x.di)(e):"application"
this.serializerFor(i).pushPayload(this,n)}function P(e,t){return this._fetchManager||(this._fetchManager=new C.F(this)),this._fetchManager.createSnapshot((0,_.o)(e)).serialize(t)}function L(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var j=n(2169),N=n(9438),D=n(6082),F=n(3464)
const z="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},H=new Set(["updateRecord","createRecord","deleteRecord"]),U=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),q={async request(e){let t
try{t=await z(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const n=!t.ok||t.status>=400,i=e.request.op,o=Boolean(i&&H.has(i))
if(!n&&!o&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const n=(0,F.f)(e)
return new Response(e.body,Object.assign(n,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let r=""
{const n=t.body.getReader(),i=new TextDecoder
let o=e.hasRequestedStream,s=o?new TransformStream:null,a=s?.writable.getWriter()
for(o&&(e.request.signal?.addEventListener("abort",(()=>{o&&(s.writable.abort("Request Aborted"),s.readable.cancel("Request Aborted"))})),e.setStream(s.readable));;){const{done:t,value:l}=await n.read()
if(t){o&&(o=!1,await a.ready,await a.close())
break}if(r+=i.decode(l,{stream:!0}),o)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
o=!0,s=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{o&&(s.writable.abort("Request Aborted"),s.readable.cancel("Request Aborted"))})),e.setStream(s.readable),a=s.writable.getWriter(),await a.ready,await a.write(t.encode(r)),await a.ready,await a.write(l)}}o&&(o=!1,await a.ready,await a.close())}if(n){let n
try{n=JSON.parse(r)}catch{}const i=Array.isArray(n)?n:null!==(s=n)&&"object"==typeof s&&Array.isArray(n.errors)?n.errors:null,o=t.statusText||U.get(t.status)||"Unknown Request Error",a=`[${t.status} ${o}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=i?new AggregateError(i,a):new Error(a)
throw l.status=t.status,l.statusText=o,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=n,l}return JSON.parse(r)
var s}}
function $(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class W extends _.Ay{constructor(e){super(e),$(this,"adapterFor",A),$(this,"serializerFor",R),$(this,"pushPayload",B),$(this,"normalize",I),$(this,"serializeRecord",P),"requestManager"in this||(this.requestManager=new D.Ay,this.requestManager.use([T,q])),this.requestManager.useCache(_.lL)}createSchemaService(){return(0,N.b)(this)}createCache(e){return new r(e)}instantiateRecord(e,t){return j.i.call(this,e,t)}teardownRecord(e){j.t.call(this,e)}modelFor(e){return j.m.call(this,e)||super.modelFor(e)}destroy(){L.call(this),super.destroy()}}},7853:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l,modifier:()=>d})
var i=n(2294),o=n(2377),r=n(1130)
function s(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e){s(this,"capabilities",(0,o.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const i=function(e,t){const n=e
return n.element=t,n}(e,t)
i.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,r.destroy)(e)}}class l{constructor(e,t){(0,i.setOwner)(this,e)}modify(e,t,n){}}(0,o.setModifierManager)((e=>new a(e)),l)
const c=new class{constructor(){s(this,"capabilities",(0,o.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const i=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:o,named:r}=n,s=e.instance(t,o,r)
"function"==typeof s&&(i.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function d(e,t){return e.toString=()=>t?.name||e.name,(0,o.setModifierManager)((()=>c),e)}},81:(e,t,n)=>{"use strict"
function i(e,t,n){return(t="symbol"==typeof(i=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var i}function o(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function r(e,t,n,i,o){var r={}
return Object.keys(i).forEach((function(e){r[e]=i[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce((function(n,i){return i(e,t,n)||n}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}n.d(t,{_:()=>r,a:()=>o,b:()=>i})},5266:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>u})
var i,o,r,s=n(81),a=n(2735),l=n(336),c=n.n(l),d=n(4666)
let u=(i=(0,a.inject)("page-title"),o=class extends(c()){constructor(e){super(e),(0,s.a)(this,"tokens",r,this),(0,s.b)(this,"tokenId",(0,d.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},r=(0,s._)(o.prototype,"tokens",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},3299:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>b})
var i,o,r,s,a,l=n(81),c=n(1223),d=n(2735),u=n.n(d),h=n(9553),p=n(1603)
const f="undefined"!=typeof FastBoot,m="routeDidChange",g=["separator","prepend","replace"]
let b=(i=(0,d.inject)("router"),o=(0,d.inject)("-document"),r=class extends(u()){constructor(e){if(super(e),(0,l.a)(this,"router",s,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
"object"==typeof(t=n)&&null!==t&&"pageTitle"in t&&g.forEach((e=>{if(!(0,h.isEmpty)(n.pageTitle[e])){const t=n.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,n=this._defaultConfig.prepend,i=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const n=this.tokens.indexOf(t),i=[...this.tokens],o=t.previous
return e.previous=o,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(n,1,e),void(this.tokens=i)}const n=this.tokens.slice(-1)[0]
n&&(e.previous=n??null,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:n,previous:i}=t
n&&(n.previous=i),i&&(i.next=n),t.previous=t.next=null
const o=[...this.tokens]
o.splice(o.indexOf(t),1),this.tokens=o}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const n=[]
for(;t--;){const i=e[t]
if(i){if(i.replace){n.unshift(i)
break}n.unshift(i)}}return n}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,n=[]
const i=[n],o=[]
return e.forEach((e=>{if(e.front)o.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],i.push(n))
const o=n[0]
o&&((e={...e}).separator=o.separator),n.unshift(e)}else t||(t=!0,n=[],i.push(n)),n.push(e)})),o.concat(i.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let n=0,i=e.length;n<i;n++){const o=e[n]
o&&o.title&&(t.push(o.title),n+1<i&&t.push(o.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
f?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){f||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!f)return
const t=this.document.head,n=t.childNodes
for(let r=0;r<n.length;r++){const e=n[r]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const i=this.document.createElement("title"),o=this.document.createTextNode(e)
i.appendChild(o),t.appendChild(i)}titleDidUpdate(e){}},s=(0,l._)(r.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(r.prototype,"document",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)},8411:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{ModuleRegistry:()=>g,default:()=>b})
class i{constructor(e,t,n){this.limit=e,this.func=t,this.store=n,this.size=0,this.misses=0,this.hits=0,this.store=n||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const o=/[ _]/g,r=new i(1e3,(e=>{return(t=e,f.get(t)).replace(o,"-")
var t})),s=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new i(1e3,(e=>{const t=(e,t,n)=>n?`_${n.toUpperCase()}`:"",n=(e,t,n,i)=>t+(i?i.toUpperCase():""),i=e.split("/")
for(let o=0;o<i.length;o++)i[o]=i[o].replace(s,t).replace(a,n)
return i.join("/").replace(l,(e=>e.toUpperCase()))})),d=/([a-z\d])([A-Z]+)/g,u=/\-|\s+/g,h=new i(1e3,(e=>e.replace(d,"$1_$2").replace(u,"_").toLowerCase())),p=/([a-z\d])([A-Z])/g,f=new i(1e3,(e=>e.replace(p,"$1_$2").toLowerCase()))
function m(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class b{static create(e){return new this(e)}static withModules(e){var t
return m(t=class extends(this){},"explicitModules",e),t}constructor(e){if(m(this,"moduleBasedResolver",!0),m(this,"_deprecatedPodModulePrefix",!1),m(this,"_normalizeCache",Object.create(null)),m(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new g)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,n,i,o=e.split("@")
if(3===o.length){if(0===o[0].length){t=`@${o[1]}`
let e=o[2].split(":")
n=e[0],i=e[1]}else t=`@${o[1]}`,n=o[0].slice(0,-1),i=o[2]
"template:components"===n&&(i=`components/${i}`,n="template")}else if(2===o.length){let e=o[0].split(":")
if(2===e.length)0===e[1].length?(n=e[0],i=`@${o[1]}`):(t=e[1],n=e[0],i=o[1])
else{let e=o[1].split(":")
t=o[0],n=e[0],i=e[1]}"template"===n&&0===t.lastIndexOf("components/",0)&&(i=`components/${i}`,t=t.slice(11))}else o=e.split(":"),n=o[0],i=o[1]
let r=i,s=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:n}),type:n,fullNameWithoutType:r,name:i,root:s,resolveMethodName:"resolve"+(a=n,c.get(a))}
var a}resolveOther(e){v("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let i=this._extractDefaultExport(t,e)
if(void 0===i)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(i,e)&&(n=i,i={create:e=>"function"==typeof n.extend?n.extend(e):n}),i}var n}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,n=this.parseName(e),i=n.resolveMethodName
return"function"==typeof this[i]&&(t=this[i](n)),null==t&&(t=this.resolveOther(n)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(n=t[1].replace(/\./g,"/"),r.get(n))}return e
var n}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let n=t.fullNameWithoutType
return"template"===t.type&&(n=n.replace(/^components\//,"")),e+"/"+n+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,n=t+"/routes"
if(this._moduleRegistry.has(n)){let e=this._extractDefaultExport(n)
return v(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,n=this.moduleNameLookupPatterns
for(let i=0,o=n.length;i<o;i++){let o=n[i].call(this,e)
if(o&&(o=this.chooseModuleName(o)),o&&this._moduleRegistry.has(o)&&(t=o),t)return t}}chooseModuleName(e){let t=(n=e,h.get(n))
var n
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),n=Object.create(null)
for(let i=0,o=t.length;i<o;i++){let o=t[i],r=this.translateToContainerFullname(e,o)
r&&(n[r]=!0)}return n}translateToContainerFullname(e,t){let n=this.prefix({type:e}),i=n+"/",o="/"+e,r=t.indexOf(i),s=t.indexOf(o)
if(0===r&&s===t.length-o.length&&t.length>i.length+o.length)return e+":"+t.slice(r+i.length,s)
let a=n+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function v(e,t){if(!t)throw new Error(e)}m(b,"moduleBasedResolver",!0)},4963:function(e,t){var n,i
n=function e(){var t,n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{},i=!n.document&&!!n.postMessage,o=n.IS_PAPA_WORKER||!1,r={},s=0,a={}
function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e)
t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){var i=parseInt(this._config.skipFirstNLines)||0
if(this.isFirstChunk&&0<i){let t=this._config.newline
t||(r=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,r)),e=[...e.split(t).slice(i)].join(t)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&void 0!==(r=this._config.beforeFirstChunk(e))&&(e=r),this.isFirstChunk=!1,this._halted=!1,i=this._partialLine+e
var r=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished))
if(!this._handle.paused()&&!this._handle.aborted()){if(e=r.meta.cursor,this._finished||(this._partialLine=i.substring(e-this._baseIndex),this._baseIndex=e),r&&r.data&&(this._rowCount+=r.data.length),i=this._finished||this._config.preview&&this._rowCount>=this._config.preview,o)n.postMessage({results:r,workerId:a.WORKER_ID,finished:i})
else if(k(this._config.chunk)&&!t){if(this._config.chunk(r,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0)
this._completeResults=r=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(r.data),this._completeResults.errors=this._completeResults.errors.concat(r.errors),this._completeResults.meta=r.meta),this._completed||!i||!k(this._config.complete)||r&&r.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||r&&r.meta.paused||this._nextChunk(),r}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):o&&this._config.error&&n.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),l.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded()
else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders
for(e in n)t.setRequestHeader(e,n[e])}var o
this._config.chunkSize&&(o=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+o))
try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(new Error(e))}}function d(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),l.call(this,e)
var t,n,i="undefined"!=typeof FileReader
this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,o=(this._config.chunkSize&&(o=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,o)),t.readAsText(e,this._config.encoding))
i||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function u(e){var t
l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n
if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,""),this._finished=!t,this.parseChunk(n)}}function h(e){l.call(this,e=e||{})
var t=[],n=!0,i=!1
this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=w((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=w((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=w((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=w((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function p(e){var t,n,i,o,r=Math.pow(2,53),s=-r,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,c=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,u=0,h=0,p=!1,g=!1,b=[],v={data:[],errors:[],meta:{}}
function w(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function _(){if(v&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!w(e)}))),x()){if(v)if(Array.isArray(v.data[0])){for(var t=0;x()&&t<v.data.length;t++)v.data[t].forEach(n)
v.data.splice(0,1)}else v.data.forEach(n)
function n(t,n){k(e.transformHeader)&&(t=e.transformHeader(t,n)),b.push(t)}}function o(t,n){for(var i=e.header?{}:[],o=0;o<t.length;o++){var a=o,d=t[o]
d=((t,n)=>(t=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&((e=>{if(l.test(e)&&(e=parseFloat(e),s<e&&e<r))return 1})(n)?parseFloat(n):c.test(n)?new Date(n):""===n?null:n):n)(a=e.header?o>=b.length?"__parsed_extra":b[o]:a,d=e.transform?e.transform(d,a):d),"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(d)):i[a]=d}return e.header&&(o>b.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+b.length+" fields but parsed "+o,h+n):o<b.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+b.length+" fields but parsed "+o,h+n)),i}var d
v&&(e.header||e.dynamicTyping||e.transform)&&(d=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(o),d=v.data.length):v.data=o(v.data,0),e.header&&v.meta&&(v.meta.fields=b),h+=d)}function x(){return e.header&&0===b.length}function C(e,t,n,i){e={type:e,code:t,message:n},void 0!==i&&(e.row=i),v.errors.push(e)}k(e.step)&&(o=e.step,e.step=function(t){v=t,x()?_():(_(),0!==v.data.length&&(u+=t.data.length,e.preview&&u>e.preview?n.abort():(v.data=v.data[0],o(v,d))))}),this.parse=function(o,r,s){var l=e.quoteChar||'"'
return e.newline||(e.newline=this.guessLineEndings(o,l)),i=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(o),v.meta.delimiter=e.delimiter):((l=((t,n,i,o,r)=>{var s,l,c,d
r=r||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP]
for(var u=0;u<r.length;u++){for(var h,p=r[u],f=0,g=0,b=0,v=(c=void 0,new m({comments:o,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)i&&w(v.data[y])?b++:(g+=h=v.data[y].length,void 0===c?c=h:0<h&&(f+=Math.abs(h-c),c=h))
0<v.data.length&&(g/=v.data.length-b),(void 0===l||f<=l)&&(void 0===d||d<g)&&1.99<g&&(l=f,s=p,d=g)}return{successful:!!(e.delimiter=s),bestDelimiter:s}})(o,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=l.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),v.meta.delimiter=e.delimiter),l=y(e),e.preview&&e.header&&l.preview++,t=o,n=new m(l),v=n.parse(t,r,s),_(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,n.abort(),t=k(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){d.streamer._halted?(p=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,n.abort(),v.meta.aborted=!0,k(e.complete)&&e.complete(v),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576),t=new RegExp(f(t)+"([^]*?)"+f(t),"gm")
var n=(e=e.replace(t,"")).split("\r")
if(e=1<(t=e.split("\n")).length&&t[0].length<n[0].length,1===n.length||e)return"\n"
for(var i=0,o=0;o<n.length;o++)"\n"===n[o][0]&&i++
return i>=n.length/2?"\r\n":"\r"}}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t=(e=e||{}).delimiter,n=e.newline,i=e.comments,o=e.step,r=e.preview,s=e.fastMode,l=null,c=!1,d=null==e.quoteChar?'"':e.quoteChar,u=d
if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof t||-1<a.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw new Error("Comment character same as delimiter")
!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n")
var h=0,p=!1
this.parse=function(a,m,g){if("string"!=typeof a)throw new Error("Input must be a string")
var b=a.length,v=t.length,y=n.length,w=i.length,_=k(o),x=[],C=[],E=[],S=h=0
if(!a)return D()
if(s||!1!==s&&-1===a.indexOf(d)){for(var T=a.split(n),O=0;O<T.length;O++){if(E=T[O],h+=E.length,O!==T.length-1)h+=n.length
else if(g)return D()
if(!i||E.substring(0,w)!==i){if(_){if(x=[],P(E.split(t)),F(),p)return D()}else P(E.split(t))
if(r&&r<=O)return x=x.slice(0,r),D(!0)}}return D()}for(var M=a.indexOf(t,h),A=a.indexOf(n,h),R=new RegExp(f(u)+f(d),"g"),I=a.indexOf(d,h);;)if(a[h]===d)for(I=h,h++;;){if(-1===(I=a.indexOf(d,I+1)))return g||C.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:h}),j()
if(I===b-1)return j(a.substring(h,I).replace(R,d))
if(d===u&&a[I+1]===u)I++
else if(d===u||0===I||a[I-1]!==u){-1!==M&&M<I+1&&(M=a.indexOf(t,I+1))
var B=L(-1===(A=-1!==A&&A<I+1?a.indexOf(n,I+1):A)?M:Math.min(M,A))
if(a.substr(I+1+B,v)===t){E.push(a.substring(h,I).replace(R,d)),a[h=I+1+B+v]!==d&&(I=a.indexOf(d,h)),M=a.indexOf(t,h),A=a.indexOf(n,h)
break}if(B=L(A),a.substring(I+1+B,I+1+B+y)===n){if(E.push(a.substring(h,I).replace(R,d)),N(I+1+B+y),M=a.indexOf(t,h),I=a.indexOf(d,h),_&&(F(),p))return D()
if(r&&x.length>=r)return D(!0)
break}C.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:h}),I++}}else if(i&&0===E.length&&a.substring(h,h+w)===i){if(-1===A)return D()
h=A+y,A=a.indexOf(n,h),M=a.indexOf(t,h)}else if(-1!==M&&(M<A||-1===A))E.push(a.substring(h,M)),h=M+v,M=a.indexOf(t,h)
else{if(-1===A)break
if(E.push(a.substring(h,A)),N(A+y),_&&(F(),p))return D()
if(r&&x.length>=r)return D(!0)}return j()
function P(e){x.push(e),S=h}function L(e){return-1!==e&&(e=a.substring(I+1,e))&&""===e.trim()?e.length:0}function j(e){return g||(void 0===e&&(e=a.substring(h)),E.push(e),h=b,P(E),_&&F()),D()}function N(e){h=e,P(E),E=[],A=a.indexOf(n,h)}function D(i){if(e.header&&!m&&x.length&&!c){var o=x[0],r={},s=new Set(o)
let t=!1
for(let n=0;n<o.length;n++){let i=o[n]
if(r[i=k(e.transformHeader)?e.transformHeader(i,n):i]){let e,a=r[i]
for(;e=i+"_"+a,a++,s.has(e););s.add(e),o[n]=e,r[i]++,t=!0,(l=null===l?{}:l)[e]=i}else r[i]=1,o[n]=i
s.add(i)}t&&console.warn("Duplicate headers found and renamed."),c=!0}return{data:x,errors:C,meta:{delimiter:t,linebreak:n,aborted:p,truncated:!!i,cursor:S+(m||0),renamedHeaders:l}}}function F(){o(D()),x=[],C=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return h}}function g(e){var t=e.data,n=r[t.workerId],i=!1
if(t.error)n.userError(t.error,t.file)
else if(t.results&&t.results.data){var o={abort:function(){i=!0,b(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v}
if(k(n.userStep)){for(var s=0;s<t.results.data.length&&(n.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},o),!i);s++);delete t.results}else k(n.userChunk)&&(n.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!i&&b(t.workerId,t.results)}function b(e,t){var n=r[e]
k(n.userComplete)&&n.userComplete(t),n.terminate(),delete r[e]}function v(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e
var t,n=Array.isArray(e)?[]:{}
for(t in e)n[t]=y(e[t])
return n}function w(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return a.parse=function(t,i){var o=(i=i||{}).dynamicTyping||!1
if(k(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!k(i.transform)&&i.transform,!i.worker||!a.WORKERS_SUPPORTED)return o=null,a.NODE_STREAM_INPUT,"string"==typeof t?(t=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(t),o=new(i.download?c:u)(i)):!0===t.readable&&k(t.read)&&k(t.on)?o=new h(i):(n.File&&t instanceof File||t instanceof Object)&&(o=new d(i)),o.stream(t);(o=(()=>{var t
return!!a.WORKERS_SUPPORTED&&(t=(()=>{var t=n.URL||n.webkitURL||null,i=e.toString()
return a.BLOB_URL||(a.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))})(),(t=new n.Worker(t)).onmessage=g,t.id=s++,r[t.id]=t)})()).userStep=i.step,o.userChunk=i.chunk,o.userComplete=i.complete,o.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,o.postMessage({input:t,config:i,workerId:o.id})},a.unparse=function(e,t){var n=!1,i=!0,o=",",r="\r\n",s='"',l=s+s,c=!1,d=null,u=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(o=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(r=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty")
d=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+s),t.escapeFormulae instanceof RegExp?u=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(u=/^[=+\-@\t\r].*$/)}})(),new RegExp(f(s),"g"))
if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,c)
if("object"==typeof e[0])return p(d||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),p(e.fields||[],e.data||[],c)
throw new Error("Unable to serialize unrecognized input")
function p(e,t,n){var s="",a=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),l=!Array.isArray(t[0])
if(a&&i){for(var c=0;c<e.length;c++)0<c&&(s+=o),s+=m(e[c],c)
0<t.length&&(s+=r)}for(var d=0;d<t.length;d++){var u=(a?e:t[d]).length,h=!1,p=a?0===Object.keys(t[d]).length:0===t[d].length
if(n&&!a&&(h="greedy"===n?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===n&&a){for(var f=[],g=0;g<u;g++){var b=l?e[g]:g
f.push(t[d][b])}h=""===f.join("").trim()}if(!h){for(var v=0;v<u;v++){0<v&&!p&&(s+=o)
var y=a&&l?e[v]:v
s+=m(t[d][y],v)}d<t.length-1&&(!n||0<u&&!p)&&(s+=r)}}return s}function m(e,t){var i,r
return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(r=!1,u&&"string"==typeof e&&u.test(e)&&(e="'"+e,r=!0),i=e.toString().replace(h,l),(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0
return!1})(i,a.BAD_DELIMITERS)||-1<i.indexOf(o)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i)}},a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!n.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=p,a.NetworkStreamer=c,a.FileStreamer=d,a.StringStreamer=u,a.ReadableStreamStreamer=h,n.jQuery&&((t=n.jQuery).fn.parse=function(e){var i=e.config||{},o=[]
return this.each((function(e){if("INPUT"!==t(this).prop("tagName").toUpperCase()||"file"!==t(this).attr("type").toLowerCase()||!n.FileReader||!this.files||0===this.files.length)return!0
for(var r=0;r<this.files.length;r++)o.push({file:this.files[r],inputElem:this,instanceConfig:t.extend({},i)})})),r(),this
function r(){if(0===o.length)k(e.complete)&&e.complete()
else{var n,i,r,l=o[0]
if(k(e.before)){var c=e.before(l.file,l.inputElem)
if("object"==typeof c){if("abort"===c.action)return n=l.file,i=l.inputElem,r=c.reason,void(k(e.error)&&e.error({name:"AbortError"},n,i,r))
if("skip"===c.action)return void s()
"object"==typeof c.config&&(l.instanceConfig=t.extend(l.instanceConfig,c.config))}else if("skip"===c)return void s()}var d=l.instanceConfig.complete
l.instanceConfig.complete=function(e){k(d)&&d(e,l.file,l.inputElem),s()},a.parse(l.file,l.instanceConfig)}}function s(){o.splice(0,1),r()}}),o&&(n.onmessage=function(e){e=e.data,void 0===a.WORKER_ID&&e&&(a.WORKER_ID=e.workerId),"string"==typeof e.input?n.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0}):(n.File&&e.input instanceof File||e.input instanceof Object)&&(e=a.parse(e.input,e.config))&&n.postMessage({workerId:a.WORKER_ID,results:e,finished:!0})}),(c.prototype=Object.create(l.prototype)).constructor=c,(d.prototype=Object.create(l.prototype)).constructor=d,(u.prototype=Object.create(u.prototype)).constructor=u,(h.prototype=Object.create(l.prototype)).constructor=h,a},void 0===(i=n.apply(t,[]))||(e.exports=i)},9404:(e,t,n)=>{"use strict"
function i(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n]
return i}function c(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}n.r(t),n.d(t,{MultiDrag:()=>wt,Sortable:()=>He,Swap:()=>ct,default:()=>xt})
var d=c(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=c(/Edge/i),h=c(/firefox/i),p=c(/safari/i)&&!c(/chrome/i)&&!c(/android/i),f=c(/iP(ad|od|hone)/i),m=c(/chrome/i)&&c(/android/i),g={capture:!1,passive:!1}
function b(e,t,n){e.addEventListener(t,n,!d&&g)}function v(e,t,n){e.removeEventListener(t,n,!d&&g)}function y(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t)
if(e.msMatchesSelector)return e.msMatchesSelector(t)
if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function w(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function k(e,t,n,i){if(e){n=n||document
do{if(null!=t&&(">"===t[0]?e.parentNode===n&&y(e,t):y(e,t))||i&&e===n)return e
if(e===n)break}while(e=w(e))}return null}var _,x=/\s+/g
function C(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t)
else{var i=(" "+e.className+" ").replace(x," ").replace(" "+t+" "," ")
e.className=(i+(n?" "+t:"")).replace(x," ")}}function E(e,t,n){var i=e&&e.style
if(i){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t]
t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=n+("string"==typeof n?"":"px")}}function S(e,t){var n=""
if("string"==typeof e)n=e
else do{var i=E(e,"transform")
i&&"none"!==i&&(n=i+" "+n)}while(!t&&(e=e.parentNode))
var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
return o&&new o(n)}function T(e,t,n){if(e){var i=e.getElementsByTagName(t),o=0,r=i.length
if(n)for(;o<r;o++)n(i[o],o)
return i}return[]}function O(){return document.scrollingElement||document.documentElement}function M(e,t,n,i,o){if(e.getBoundingClientRect||e===window){var r,s,a,l,c,u,h
if(e!==window&&e.parentNode&&e!==O()?(s=(r=e.getBoundingClientRect()).top,a=r.left,l=r.bottom,c=r.right,u=r.height,h=r.width):(s=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(t||n)&&e!==window&&(o=o||e.parentNode,!d))do{if(o&&o.getBoundingClientRect&&("none"!==E(o,"transform")||n&&"static"!==E(o,"position"))){var p=o.getBoundingClientRect()
s-=p.top+parseInt(E(o,"border-top-width")),a-=p.left+parseInt(E(o,"border-left-width")),l=s+r.height,c=a+r.width
break}}while(o=o.parentNode)
if(i&&e!==window){var f=S(o||e),m=f&&f.a,g=f&&f.d
f&&(l=(s/=g)+(u/=g),c=(a/=m)+(h/=m))}return{top:s,left:a,bottom:l,right:c,width:h,height:u}}}function A(e,t,n){for(var i=L(e,!0),o=M(e)[t];i;){var r=M(i)[n]
if(!("top"===n||"left"===n?o>=r:o<=r))return i
if(i===O())break
i=L(i,!1)}return!1}function R(e,t,n,i){for(var o=0,r=0,s=e.children;r<s.length;){if("none"!==s[r].style.display&&s[r]!==He.ghost&&(i||s[r]!==He.dragged)&&k(s[r],n.draggable,e,!1)){if(o===t)return s[r]
o++}r++}return null}function I(e,t){for(var n=e.lastElementChild;n&&(n===He.ghost||"none"===E(n,"display")||t&&!y(n,t));)n=n.previousElementSibling
return n||null}function B(e,t){var n=0
if(!e||!e.parentNode)return-1
for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===He.clone||t&&!y(e,t)||n++
return n}function P(e){var t=0,n=0,i=O()
if(e)do{var o=S(e),r=o.a,s=o.d
t+=e.scrollLeft*r,n+=e.scrollTop*s}while(e!==i&&(e=e.parentNode))
return[t,n]}function L(e,t){if(!e||!e.getBoundingClientRect)return O()
var n=e,i=!1
do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=E(n)
if(n.clientWidth<n.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O()
if(i||t)return n
i=!0}}}while(n=n.parentNode)
return O()}function j(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function N(e,t){return function(){if(!_){var n=arguments
1===n.length?e.call(this,n[0]):e.apply(this,n),_=setTimeout((function(){_=void 0}),t)}}}function D(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function F(e){var t=window.Polymer,n=window.jQuery||window.Zepto
return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}function z(e,t){E(e,"position","absolute"),E(e,"top",t.top),E(e,"left",t.left),E(e,"width",t.width),E(e,"height",t.height)}function H(e){E(e,"position",""),E(e,"top",""),E(e,"left",""),E(e,"width",""),E(e,"height","")}function U(e,t,n){var i={}
return Array.from(e.children).forEach((function(o){var r,s,a,l
if(k(o,t.draggable,e,!1)&&!o.animated&&o!==n){var c=M(o)
i.left=Math.min(null!==(r=i.left)&&void 0!==r?r:1/0,c.left),i.top=Math.min(null!==(s=i.top)&&void 0!==s?s:1/0,c.top),i.right=Math.max(null!==(a=i.right)&&void 0!==a?a:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}})),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var q="Sortable"+(new Date).getTime(),$=[],W={initializeByDefault:!0},K={mount:function(e){for(var t in W)W.hasOwnProperty(t)&&!(t in e)&&(e[t]=W[t])
$.forEach((function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")})),$.push(e)},pluginEvent:function(e,t,n){var i=this
this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0}
var r=e+"Global"
$.forEach((function(i){t[i.pluginName]&&(t[i.pluginName][r]&&t[i.pluginName][r](o({sortable:t},n)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](o({sortable:t},n)))}))},initializePlugins:function(e,t,n,i){for(var o in $.forEach((function(i){var o=i.pluginName
if(e.options[o]||i.initializeByDefault){var r=new i(e,t,e.options)
r.sortable=e,r.options=e.options,e[o]=r,a(n,r.defaults)}})),e.options)if(e.options.hasOwnProperty(o)){var r=this.modifyOption(e,o,e.options[o])
void 0!==r&&(e.options[o]=r)}},getEventProperties:function(e,t){var n={}
return $.forEach((function(i){"function"==typeof i.eventProperties&&a(n,i.eventProperties.call(t[i.pluginName],e))})),n},modifyOption:function(e,t,n){var i
return $.forEach((function(o){e[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[t]&&(i=o.optionListeners[t].call(e[o.pluginName],n))})),i}}
function V(e){var t=e.sortable,n=e.rootEl,i=e.name,r=e.targetEl,s=e.cloneEl,a=e.toEl,l=e.fromEl,c=e.oldIndex,h=e.newIndex,p=e.oldDraggableIndex,f=e.newDraggableIndex,m=e.originalEvent,g=e.putSortable,b=e.extraEventProperties
if(t=t||n&&n[q]){var v,y=t.options,w="on"+i.charAt(0).toUpperCase()+i.substr(1)
!window.CustomEvent||d||u?(v=document.createEvent("Event")).initEvent(i,!0,!0):v=new CustomEvent(i,{bubbles:!0,cancelable:!0}),v.to=a||n,v.from=l||n,v.item=r||n,v.clone=s,v.oldIndex=c,v.newIndex=h,v.oldDraggableIndex=p,v.newDraggableIndex=f,v.originalEvent=m,v.pullMode=g?g.lastPutMode:void 0
var k=o(o({},b),K.getEventProperties(i,t))
for(var _ in k)v[_]=k[_]
n&&n.dispatchEvent(v),y[w]&&y[w].call(t,v)}}var Y=["evt"],X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,r=function(e,t){if(null==e)return{}
var n,i,o=function(e,t){if(null==e)return{}
var n,i,o={},r=Object.keys(e)
for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,Y)
K.pluginEvent.bind(He)(e,t,o({dragEl:Z,parentEl:J,ghostEl:Q,rootEl:ee,nextEl:te,lastDownEl:ne,cloneEl:ie,cloneHidden:oe,dragStarted:be,putSortable:de,activeSortable:He.active,originalEvent:i,oldIndex:re,oldDraggableIndex:ae,newIndex:se,newDraggableIndex:le,hideGhostForTarget:Ne,unhideGhostForTarget:De,cloneNowHidden:function(){oe=!0},cloneNowShown:function(){oe=!1},dispatchSortableEvent:function(e){G({sortable:t,name:e,originalEvent:i})}},r))}
function G(e){V(o({putSortable:de,cloneEl:ie,targetEl:Z,rootEl:ee,oldIndex:re,oldDraggableIndex:ae,newIndex:se,newDraggableIndex:le},e))}var Z,J,Q,ee,te,ne,ie,oe,re,se,ae,le,ce,de,ue,he,pe,fe,me,ge,be,ve,ye,we,ke,_e=!1,xe=!1,Ce=[],Ee=!1,Se=!1,Te=[],Oe=!1,Me=[],Ae="undefined"!=typeof document,Re=f,Ie=u||d?"cssFloat":"float",Be=Ae&&!m&&!f&&"draggable"in document.createElement("div"),Pe=function(){if(Ae){if(d)return!1
var e=document.createElement("x")
return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),Le=function(e,t){var n=E(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=R(e,0,t),r=R(e,1,t),s=o&&E(o),a=r&&E(r),l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(o).width,c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+M(r).width
if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
if(o&&s.float&&"none"!==s.float){var d="left"===s.float?"left":"right"
return!r||"both"!==a.clear&&a.clear!==d?"horizontal":"vertical"}return o&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||l>=i&&"none"===n[Ie]||r&&"none"===n[Ie]&&l+c>i)?"vertical":"horizontal"},je=function(e){function t(e,n){return function(i,o,r,s){var a=i.options.group.name&&o.options.group.name&&i.options.group.name===o.options.group.name
if(null==e&&(n||a))return!0
if(null==e||!1===e)return!1
if(n&&"clone"===e)return e
if("function"==typeof e)return t(e(i,o,r,s),n)(i,o,r,s)
var l=(n?i:o).options.group.name
return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var n={},i=e.group
i&&"object"==r(i)||(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},Ne=function(){!Pe&&Q&&E(Q,"display","none")},De=function(){!Pe&&Q&&E(Q,"display","")}
Ae&&!m&&document.addEventListener("click",(function(e){if(xe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),xe=!1,!1}),!0)
var Fe=function(e){if(Z){e=e.touches?e.touches[0]:e
var t=(o=e.clientX,r=e.clientY,Ce.some((function(e){var t=e[q].options.emptyInsertThreshold
if(t&&!I(e)){var n=M(e),i=o>=n.left-t&&o<=n.right+t,a=r>=n.top-t&&r<=n.bottom+t
return i&&a?s=e:void 0}})),s)
if(t){var n={}
for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i])
n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[q]._onDragOver(n)}}var o,r,s},ze=function(e){Z&&Z.parentNode[q]._isOutsideThisEl(e.target)}
function He(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e))
this.el=e,this.options=t=a({},t),e[q]=this
var n,i,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Le(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==He.supportPointer&&"PointerEvent"in window&&(!p||f),emptyInsertThreshold:5}
for(var s in K.initializePlugins(this,e,r),r)!(s in t)&&(t[s]=r[s])
for(var l in je(t),this)"_"===l.charAt(0)&&"function"==typeof this[l]&&(this[l]=this[l].bind(this))
this.nativeDraggable=!t.forceFallback&&Be,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?b(e,"pointerdown",this._onTapStart):(b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Ce.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),a(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(e){if("none"!==E(e,"display")&&e!==He.ghost){i.push({target:e,rect:M(e)})
var t=o({},i[i.length-1].rect)
if(e.thisAnimationDuration){var n=S(e,!0)
n&&(t.top-=n.f,t.left-=n.e)}e.fromRect=t}}))},addAnimationState:function(e){i.push(e)},removeAnimationState:function(e){i.splice(function(e,t){for(var n in e)if(e.hasOwnProperty(n))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[n][i])return Number(n)
return-1}(i,{target:e}),1)},animateAll:function(e){var t=this
if(!this.options.animation)return clearTimeout(n),void("function"==typeof e&&e())
var o=!1,r=0
i.forEach((function(e){var n=0,i=e.target,s=i.fromRect,a=M(i),l=i.prevFromRect,c=i.prevToRect,d=e.rect,u=S(i,!0)
u&&(a.top-=u.f,a.left-=u.e),i.toRect=a,i.thisAnimationDuration&&j(l,a)&&!j(s,a)&&(d.top-a.top)/(d.left-a.left)==(s.top-a.top)/(s.left-a.left)&&(n=function(e,t,n,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-n.top,2)+Math.pow(t.left-n.left,2))*i.animation}(d,l,c,t.options)),j(a,s)||(i.prevFromRect=s,i.prevToRect=a,n||(n=t.options.animation),t.animate(i,d,a,n)),n&&(o=!0,r=Math.max(r,n),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),n),i.thisAnimationDuration=n)})),clearTimeout(n),o?n=setTimeout((function(){"function"==typeof e&&e()}),r):"function"==typeof e&&e(),i=[]},animate:function(e,t,n,i){if(i){E(e,"transition",""),E(e,"transform","")
var o=S(this.el),r=o&&o.a,s=o&&o.d,a=(t.left-n.left)/(r||1),l=(t.top-n.top)/(s||1)
e.animatingX=!!a,e.animatingY=!!l,E(e,"transform","translate3d("+a+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),E(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),E(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout((function(){E(e,"transition",""),E(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1}),i)}}}))}function Ue(e,t,n,i,o,r,s,a){var l,c,h=e[q],p=h.options.onMove
return!window.CustomEvent||d||u?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=n,l.draggedRect=i,l.related=o||t,l.relatedRect=r||M(t),l.willInsertAfter=a,l.originalEvent=s,e.dispatchEvent(l),p&&(c=p.call(h,l,s)),c}function qe(e){e.draggable=!1}function $e(){Oe=!1}function We(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,i=0;n--;)i+=t.charCodeAt(n)
return i.toString(36)}function Ke(e){return setTimeout(e,0)}function Ve(e){return clearTimeout(e)}He.prototype={constructor:He,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(ve=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,Z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,o=i.preventOnFilter,r=e.type,s=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,a=(s||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||a,c=i.filter
if(function(e){Me.length=0
for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var i=t[n]
i.checked&&Me.push(i)}}(n),!Z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!p||!a||"SELECT"!==a.tagName.toUpperCase())&&!((a=k(a,i.draggable,n,!1))&&a.animated||ne===a)){if(re=B(a),ae=B(a,i.draggable),"function"==typeof c){if(c.call(this,e,a,this))return G({sortable:t,rootEl:l,name:"filter",targetEl:a,toEl:n,fromEl:n}),X("filter",t,{evt:e}),void(o&&e.preventDefault())}else if(c&&(c=c.split(",").some((function(i){if(i=k(l,i.trim(),n,!1))return G({sortable:t,rootEl:i,name:"filter",targetEl:a,fromEl:n,toEl:n}),X("filter",t,{evt:e}),!0}))))return void(o&&e.preventDefault())
i.handle&&!k(l,i.handle,n,!1)||this._prepareDragStart(e,s,a)}}},_prepareDragStart:function(e,t,n){var i,o=this,r=o.el,s=o.options,a=r.ownerDocument
if(n&&!Z&&n.parentNode===r){var l=M(n)
if(ee=r,J=(Z=n).parentNode,te=Z.nextSibling,ne=n,ce=s.group,He.dragged=Z,ue={target:Z,clientX:(t||e).clientX,clientY:(t||e).clientY},me=ue.clientX-l.left,ge=ue.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,Z.style["will-change"]="all",i=function(){X("delayEnded",o,{evt:e}),He.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!h&&o.nativeDraggable&&(Z.draggable=!0),o._triggerDragStart(e,t),G({sortable:o,name:"choose",originalEvent:e}),C(Z,s.chosenClass,!0))},s.ignore.split(",").forEach((function(e){T(Z,e.trim(),qe)})),b(a,"dragover",Fe),b(a,"mousemove",Fe),b(a,"touchmove",Fe),s.supportPointer?(b(a,"pointerup",o._onDrop),!this.nativeDraggable&&b(a,"pointercancel",o._onDrop)):(b(a,"mouseup",o._onDrop),b(a,"touchend",o._onDrop),b(a,"touchcancel",o._onDrop)),h&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Z.draggable=!0),X("delayStart",this,{evt:e}),!s.delay||s.delayOnTouchOnly&&!t||this.nativeDraggable&&(u||d))i()
else{if(He.eventCanceled)return void this._onDrop()
s.supportPointer?(b(a,"pointerup",o._disableDelayedDrag),b(a,"pointercancel",o._disableDelayedDrag)):(b(a,"mouseup",o._disableDelayedDrag),b(a,"touchend",o._disableDelayedDrag),b(a,"touchcancel",o._disableDelayedDrag)),b(a,"mousemove",o._delayedDragTouchMoveHandler),b(a,"touchmove",o._delayedDragTouchMoveHandler),s.supportPointer&&b(a,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(i,s.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e
Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Z&&qe(Z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument
v(e,"mouseup",this._disableDelayedDrag),v(e,"touchend",this._disableDelayedDrag),v(e,"touchcancel",this._disableDelayedDrag),v(e,"pointerup",this._disableDelayedDrag),v(e,"pointercancel",this._disableDelayedDrag),v(e,"mousemove",this._delayedDragTouchMoveHandler),v(e,"touchmove",this._delayedDragTouchMoveHandler),v(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?b(document,"pointermove",this._onTouchMove):b(document,t?"touchmove":"mousemove",this._onTouchMove):(b(Z,"dragend",this),b(ee,"dragstart",this._onDragStart))
try{document.selection?Ke((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(_e=!1,ee&&Z){X("dragStarted",this,{evt:t}),this.nativeDraggable&&b(document,"dragover",ze)
var n=this.options
!e&&C(Z,n.dragClass,!1),C(Z,n.ghostClass,!0),He.active=this,e&&this._appendGhost(),G({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(he){this._lastX=he.clientX,this._lastY=he.clientY,Ne()
for(var e=document.elementFromPoint(he.clientX,he.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(he.clientX,he.clientY))!==t;)t=e
if(Z.parentNode[q]._isOutsideThisEl(e),t)do{if(t[q]&&t[q]._onDragOver({clientX:he.clientX,clientY:he.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break
e=t}while(t=w(t))
De()}},_onTouchMove:function(e){if(ue){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,o=e.touches?e.touches[0]:e,r=Q&&S(Q,!0),s=Q&&r&&r.a,a=Q&&r&&r.d,l=Re&&ke&&P(ke),c=(o.clientX-ue.clientX+i.x)/(s||1)+(l?l[0]-Te[0]:0)/(s||1),d=(o.clientY-ue.clientY+i.y)/(a||1)+(l?l[1]-Te[1]:0)/(a||1)
if(!He.active&&!_e){if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return
this._onDragStart(e,!0)}if(Q){r?(r.e+=c-(pe||0),r.f+=d-(fe||0)):r={a:1,b:0,c:0,d:1,e:c,f:d}
var u="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
E(Q,"webkitTransform",u),E(Q,"mozTransform",u),E(Q,"msTransform",u),E(Q,"transform",u),pe=c,fe=d,he=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!Q){var e=this.options.fallbackOnBody?document.body:ee,t=M(Z,!0,Re,!0,e),n=this.options
if(Re){for(ke=e;"static"===E(ke,"position")&&"none"===E(ke,"transform")&&ke!==document;)ke=ke.parentNode
ke!==document.body&&ke!==document.documentElement?(ke===document&&(ke=O()),t.top+=ke.scrollTop,t.left+=ke.scrollLeft):ke=O(),Te=P(ke)}C(Q=Z.cloneNode(!0),n.ghostClass,!1),C(Q,n.fallbackClass,!0),C(Q,n.dragClass,!0),E(Q,"transition",""),E(Q,"transform",""),E(Q,"box-sizing","border-box"),E(Q,"margin",0),E(Q,"top",t.top),E(Q,"left",t.left),E(Q,"width",t.width),E(Q,"height",t.height),E(Q,"opacity","0.8"),E(Q,"position",Re?"absolute":"fixed"),E(Q,"zIndex","100000"),E(Q,"pointerEvents","none"),He.ghost=Q,e.appendChild(Q),E(Q,"transform-origin",me/parseInt(Q.style.width)*100+"% "+ge/parseInt(Q.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,o=n.options
X("dragStart",this,{evt:e}),He.eventCanceled?this._onDrop():(X("setupClone",this),He.eventCanceled||((ie=F(Z)).removeAttribute("id"),ie.draggable=!1,ie.style["will-change"]="",this._hideClone(),C(ie,this.options.chosenClass,!1),He.clone=ie),n.cloneId=Ke((function(){X("clone",n),He.eventCanceled||(n.options.removeCloneOnHide||ee.insertBefore(ie,Z),n._hideClone(),G({sortable:n,name:"clone"}))})),!t&&C(Z,o.dragClass,!0),t?(xe=!0,n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),v(document,"touchend",n._onDrop),v(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",o.setData&&o.setData.call(n,i,Z)),b(document,"drop",n),E(Z,"transform","translateZ(0)")),_e=!0,n._dragStartId=Ke(n._dragStarted.bind(n,t,e)),b(document,"selectstart",n),be=!0,window.getSelection().removeAllRanges(),p&&E(document.body,"user-select","none"))},_onDragOver:function(e){var t,n,i,r,s=this.el,a=e.target,l=this.options,c=l.group,d=He.active,u=ce===c,h=l.sort,p=de||d,f=this,m=!1
if(!Oe){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),a=k(a,l.draggable,s,!0),F("dragOver"),He.eventCanceled)return m
if(Z.contains(e.target)||a.animated&&a.animatingX&&a.animatingY||f._ignoreWhileAnimating===a)return H(!1)
if(xe=!1,d&&!l.disabled&&(u?h||(i=J!==ee):de===this||(this.lastPutMode=ce.checkPull(this,d,Z,e))&&c.checkPut(this,d,Z,e))){if(r="vertical"===this._getDirection(e,a),t=M(Z),F("dragOverValid"),He.eventCanceled)return m
if(i)return J=ee,z(),this._hideClone(),F("revert"),He.eventCanceled||(te?ee.insertBefore(Z,te):ee.appendChild(Z)),H(!0)
var g=I(s,l.draggable)
if(!g||function(e,t,n){var i=M(I(n.el,n.options.draggable)),o=U(n.el,n.options,Q)
return t?e.clientX>o.right+10||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>o.bottom+10||e.clientX>i.right&&e.clientY>i.top}(e,r,this)&&!g.animated){if(g===Z)return H(!1)
if(g&&s===e.target&&(a=g),a&&(n=M(a)),!1!==Ue(ee,s,Z,t,a,n,e,!!a))return z(),g&&g.nextSibling?s.insertBefore(Z,g.nextSibling):s.appendChild(Z),J=s,$(),H(!0)}else if(g&&function(e,t,n){var i=M(R(n.el,0,n.options,!0)),o=U(n.el,n.options,Q)
return t?e.clientX<o.left-10||e.clientY<i.top&&e.clientX<i.right:e.clientY<o.top-10||e.clientY<i.bottom&&e.clientX<i.left}(e,r,this)){var b=R(s,0,l,!0)
if(b===Z)return H(!1)
if(n=M(a=b),!1!==Ue(ee,s,Z,t,a,n,e,!1))return z(),s.insertBefore(Z,b),J=s,$(),H(!0)}else if(a.parentNode===s){n=M(a)
var v,y,w,_=Z.parentNode!==s,x=!function(e,t,n){var i=n?e.left:e.top,o=n?e.right:e.bottom,r=n?e.width:e.height,s=n?t.left:t.top,a=n?t.right:t.bottom,l=n?t.width:t.height
return i===s||o===a||i+r/2===s+l/2}(Z.animated&&Z.toRect||t,a.animated&&a.toRect||n,r),S=r?"top":"left",T=A(a,"top","top")||A(Z,"top","top"),O=T?T.scrollTop:void 0
if(ve!==a&&(y=n[S],Ee=!1,Se=!x&&l.invertSwap||_),v=function(e,t,n,i,o,r,s,a){var l=i?e.clientY:e.clientX,c=i?n.height:n.width,d=i?n.top:n.left,u=i?n.bottom:n.right,h=!1
if(!s)if(a&&we<c*o){if(!Ee&&(1===ye?l>d+c*r/2:l<u-c*r/2)&&(Ee=!0),Ee)h=!0
else if(1===ye?l<d+we:l>u-we)return-ye}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return function(e){return B(Z)<B(e)?1:-1}(t)
return(h=h||s)&&(l<d+c*r/2||l>u-c*r/2)?l>d+c/2?1:-1:0}(e,a,n,r,x?1:l.swapThreshold,null==l.invertedSwapThreshold?l.swapThreshold:l.invertedSwapThreshold,Se,ve===a),0!==v){var P=B(Z)
do{P-=v,w=J.children[P]}while(w&&("none"===E(w,"display")||w===Q))}if(0===v||w===a)return H(!1)
ve=a,ye=v
var L=a.nextElementSibling,j=!1,N=Ue(ee,s,Z,t,a,n,e,j=1===v)
if(!1!==N)return 1!==N&&-1!==N||(j=1===N),Oe=!0,setTimeout($e,30),z(),j&&!L?s.appendChild(Z):a.parentNode.insertBefore(Z,j?L:a),T&&D(T,0,O-T.scrollTop),J=Z.parentNode,void 0===y||Se||(we=Math.abs(y-M(a)[S])),$(),H(!0)}if(s.contains(Z))return H(!1)}return!1}function F(l,c){X(l,f,o({evt:e,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:t,targetRect:n,canSort:h,fromSortable:p,target:a,completed:H,onMove:function(n,i){return Ue(ee,s,Z,t,n,M(n),e,i)},changed:$},c))}function z(){F("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function H(t){return F("dragOverCompleted",{insertion:t}),t&&(u?d._hideClone():d._showClone(f),f!==p&&(C(Z,de?de.options.ghostClass:d.options.ghostClass,!1),C(Z,l.ghostClass,!0)),de!==f&&f!==He.active?de=f:f===He.active&&de&&(de=null),p===f&&(f._ignoreWhileAnimating=a),f.animateAll((function(){F("dragOverAnimationComplete"),f._ignoreWhileAnimating=null})),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(a===Z&&!Z.animated||a===s&&!a.animated)&&(ve=null),l.dragoverBubble||e.rootEl||a===document||(Z.parentNode[q]._isOutsideThisEl(e.target),!t&&Fe(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function $(){se=B(Z),le=B(Z,l.draggable),G({sortable:f,name:"change",toEl:s,newIndex:se,newDraggableIndex:le,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),v(document,"pointermove",this._onTouchMove),v(document,"dragover",Fe),v(document,"mousemove",Fe),v(document,"touchmove",Fe)},_offUpEvents:function(){var e=this.el.ownerDocument
v(e,"mouseup",this._onDrop),v(e,"touchend",this._onDrop),v(e,"pointerup",this._onDrop),v(e,"pointercancel",this._onDrop),v(e,"touchcancel",this._onDrop),v(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options
se=B(Z),le=B(Z,n.draggable),X("drop",this,{evt:e}),J=Z&&Z.parentNode,se=B(Z),le=B(Z,n.draggable),He.eventCanceled||(_e=!1,Se=!1,Ee=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ve(this.cloneId),Ve(this._dragStartId),this.nativeDraggable&&(v(document,"drop",this),v(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),p&&E(document.body,"user-select",""),E(Z,"transform",""),e&&(be&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),Q&&Q.parentNode&&Q.parentNode.removeChild(Q),(ee===J||de&&"clone"!==de.lastPutMode)&&ie&&ie.parentNode&&ie.parentNode.removeChild(ie),Z&&(this.nativeDraggable&&v(Z,"dragend",this),qe(Z),Z.style["will-change"]="",be&&!_e&&C(Z,de?de.options.ghostClass:this.options.ghostClass,!1),C(Z,this.options.chosenClass,!1),G({sortable:this,name:"unchoose",toEl:J,newIndex:null,newDraggableIndex:null,originalEvent:e}),ee!==J?(se>=0&&(G({rootEl:J,name:"add",toEl:J,fromEl:ee,originalEvent:e}),G({sortable:this,name:"remove",toEl:J,originalEvent:e}),G({rootEl:J,name:"sort",toEl:J,fromEl:ee,originalEvent:e}),G({sortable:this,name:"sort",toEl:J,originalEvent:e})),de&&de.save()):se!==re&&se>=0&&(G({sortable:this,name:"update",toEl:J,originalEvent:e}),G({sortable:this,name:"sort",toEl:J,originalEvent:e})),He.active&&(null!=se&&-1!==se||(se=re,le=ae),G({sortable:this,name:"end",toEl:J,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){X("nulling",this),ee=Z=J=Q=te=ie=ne=oe=ue=he=be=se=le=re=ae=ve=ye=de=ce=He.dragged=He.ghost=He.clone=He.active=null,Me.forEach((function(e){e.checked=!0})),Me.length=pe=fe=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e)
break
case"dragenter":case"dragover":Z&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}(e))
break
case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)k(e=n[i],r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||We(e))
return t},sort:function(e,t){var n={},i=this.el
this.toArray().forEach((function(e,t){var o=i.children[t]
k(o,this.options.draggable,i,!1)&&(n[e]=o)}),this),t&&this.captureAnimationState(),e.forEach((function(e){n[e]&&(i.removeChild(n[e]),i.appendChild(n[e]))})),t&&this.animateAll()},save:function(){var e=this.options.store
e&&e.set&&e.set(this)},closest:function(e,t){return k(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options
if(void 0===t)return n[e]
var i=K.modifyOption(this,e,t)
n[e]=void 0!==i?i:t,"group"===e&&je(n)},destroy:function(){X("destroy",this)
var e=this.el
e[q]=null,v(e,"mousedown",this._onTapStart),v(e,"touchstart",this._onTapStart),v(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(e,"dragover",this),v(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(e){e.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Ce.splice(Ce.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!oe){if(X("hideClone",this),He.eventCanceled)return
E(ie,"display","none"),this.options.removeCloneOnHide&&ie.parentNode&&ie.parentNode.removeChild(ie),oe=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(oe){if(X("showClone",this),He.eventCanceled)return
Z.parentNode!=ee||this.options.group.revertClone?te?ee.insertBefore(ie,te):ee.appendChild(ie):ee.insertBefore(ie,Z),this.options.group.revertClone&&this.animate(Z,ie),E(ie,"display",""),oe=!1}}else this._hideClone()}},Ae&&b(document,"touchmove",(function(e){(He.active||_e)&&e.cancelable&&e.preventDefault()})),He.utils={on:b,off:v,css:E,find:T,is:function(e,t){return!!k(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e},throttle:N,closest:k,toggleClass:C,clone:F,index:B,nextTick:Ke,cancelNextTick:Ve,detectDirection:Le,getChild:R,expando:q},He.get=function(e){return e[q]},He.mount=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
t[0].constructor===Array&&(t=t[0]),t.forEach((function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e))
e.utils&&(He.utils=o(o({},He.utils),e.utils)),K.mount(e)}))},He.create=function(e,t){return new He(e,t)},He.version="1.15.6"
var Ye,Xe,Ge,Ze,Je,Qe,et=[],tt=!1
function nt(){et.forEach((function(e){clearInterval(e.pid)})),et=[]}function it(){clearInterval(Qe)}var ot,rt=N((function(e,t,n,i){if(t.scroll){var o,r=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,l=t.scrollSpeed,c=O(),d=!1
Xe!==n&&(Xe=n,nt(),Ye=t.scroll,o=t.scrollFn,!0===Ye&&(Ye=L(n,!0)))
var u=0,h=Ye
do{var p=h,f=M(p),m=f.top,g=f.bottom,b=f.left,v=f.right,y=f.width,w=f.height,k=void 0,_=void 0,x=p.scrollWidth,C=p.scrollHeight,S=E(p),T=p.scrollLeft,A=p.scrollTop
p===c?(k=y<x&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),_=w<C&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(k=y<x&&("auto"===S.overflowX||"scroll"===S.overflowX),_=w<C&&("auto"===S.overflowY||"scroll"===S.overflowY))
var R=k&&(Math.abs(v-r)<=a&&T+y<x)-(Math.abs(b-r)<=a&&!!T),I=_&&(Math.abs(g-s)<=a&&A+w<C)-(Math.abs(m-s)<=a&&!!A)
if(!et[u])for(var B=0;B<=u;B++)et[B]||(et[B]={})
et[u].vx==R&&et[u].vy==I&&et[u].el===p||(et[u].el=p,et[u].vx=R,et[u].vy=I,clearInterval(et[u].pid),0==R&&0==I||(d=!0,et[u].pid=setInterval(function(){i&&0===this.layer&&He.active._onTouchMove(Je)
var t=et[this.layer].vy?et[this.layer].vy*l:0,n=et[this.layer].vx?et[this.layer].vx*l:0
"function"==typeof o&&"continue"!==o.call(He.dragged.parentNode[q],n,t,e,Je,et[this.layer].el)||D(et[this.layer].el,n,t)}.bind({layer:u}),24))),u++}while(t.bubbleScroll&&h!==c&&(h=L(h,!1)))
tt=d}}),30),st=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,o=e.activeSortable,r=e.dispatchSortableEvent,s=e.hideGhostForTarget,a=e.unhideGhostForTarget
if(t){var l=n||o
s()
var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY)
a(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:i,putSortable:n}))}}
function at(){}function lt(){}function ct(){function e(){this.defaults={swapClass:"sortable-swap-highlight"}}return e.prototype={dragStart:function(e){var t=e.dragEl
ot=t},dragOverValid:function(e){var t=e.completed,n=e.target,i=e.onMove,o=e.activeSortable,r=e.changed,s=e.cancel
if(o.options.swap){var a=this.sortable.el,l=this.options
if(n&&n!==a){var c=ot
!1!==i(n)?(C(n,l.swapClass,!0),ot=n):ot=null,c&&c!==ot&&C(c,l.swapClass,!1)}r(),t(!0),s()}},drop:function(e){var t,n,i,o,r,s,a=e.activeSortable,l=e.putSortable,c=e.dragEl,d=l||this.sortable,u=this.options
ot&&C(ot,u.swapClass,!1),ot&&(u.swap||l&&l.options.swap)&&c!==ot&&(d.captureAnimationState(),d!==a&&a.captureAnimationState(),n=ot,r=(t=c).parentNode,s=n.parentNode,r&&s&&!r.isEqualNode(n)&&!s.isEqualNode(t)&&(i=B(t),o=B(n),r.isEqualNode(s)&&i<o&&o++,r.insertBefore(n,r.children[i]),s.insertBefore(t,s.children[o])),d.animateAll(),d!==a&&a.animateAll())},nulling:function(){ot=null}},a(e,{pluginName:"swap",eventProperties:function(){return{swapItem:ot}}})}at.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex
this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable
this.sortable.captureAnimationState(),n&&n.captureAnimationState()
var i=R(this.sortable.el,this.startIndex,this.options)
i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:st},a(at,{pluginName:"revertOnSpill"}),lt.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable||this.sortable
n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:st},a(lt,{pluginName:"removeOnSpill"})
var dt,ut,ht,pt,ft,mt=[],gt=[],bt=!1,vt=!1,yt=!1
function wt(){function e(e){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))
e.options.avoidImplicitDeselect||(e.options.supportPointer?b(document,"pointerup",this._deselectMultiDrag):(b(document,"mouseup",this._deselectMultiDrag),b(document,"touchend",this._deselectMultiDrag))),b(document,"keydown",this._checkKeyDown),b(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,n){var i=""
mt.length&&ut===e?mt.forEach((function(e,t){i+=(t?", ":"")+e.textContent})):i=n.textContent,t.setData("Text",i)}}}return e.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(e){var t=e.dragEl
ht=t},delayEnded:function(){this.isMultiDrag=~mt.indexOf(ht)},setupClone:function(e){var t=e.sortable,n=e.cancel
if(this.isMultiDrag){for(var i=0;i<mt.length;i++)gt.push(F(mt[i])),gt[i].sortableIndex=mt[i].sortableIndex,gt[i].draggable=!1,gt[i].style["will-change"]="",C(gt[i],this.options.selectedClass,!1),mt[i]===ht&&C(gt[i],this.options.chosenClass,!1)
t._hideClone(),n()}},clone:function(e){var t=e.sortable,n=e.rootEl,i=e.dispatchSortableEvent,o=e.cancel
this.isMultiDrag&&(this.options.removeCloneOnHide||mt.length&&ut===t&&(kt(!0,n),i("clone"),o()))},showClone:function(e){var t=e.cloneNowShown,n=e.rootEl,i=e.cancel
this.isMultiDrag&&(kt(!1,n),gt.forEach((function(e){E(e,"display","")})),t(),ft=!1,i())},hideClone:function(e){var t=this,n=(e.sortable,e.cloneNowHidden),i=e.cancel
this.isMultiDrag&&(gt.forEach((function(e){E(e,"display","none"),t.options.removeCloneOnHide&&e.parentNode&&e.parentNode.removeChild(e)})),n(),ft=!0,i())},dragStartGlobal:function(e){e.sortable,!this.isMultiDrag&&ut&&ut.multiDrag._deselectMultiDrag(),mt.forEach((function(e){e.sortableIndex=B(e)})),mt=mt.sort((function(e,t){return e.sortableIndex-t.sortableIndex})),yt=!0},dragStarted:function(e){var t=this,n=e.sortable
if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){mt.forEach((function(e){e!==ht&&E(e,"position","absolute")}))
var i=M(ht,!1,!0,!0)
mt.forEach((function(e){e!==ht&&z(e,i)})),vt=!0,bt=!0}n.animateAll((function(){vt=!1,bt=!1,t.options.animation&&mt.forEach((function(e){H(e)})),t.options.sort&&_t()}))}},dragOver:function(e){var t=e.target,n=e.completed,i=e.cancel
vt&&~mt.indexOf(t)&&(n(!1),i())},revert:function(e){var t=e.fromSortable,n=e.rootEl,i=e.sortable,o=e.dragRect
mt.length>1&&(mt.forEach((function(e){i.addAnimationState({target:e,rect:vt?M(e):o}),H(e),e.fromRect=o,t.removeAnimationState(e)})),vt=!1,function(e,t){mt.forEach((function(n,i){var o=t.children[n.sortableIndex+(e?Number(i):0)]
o?t.insertBefore(n,o):t.appendChild(n)}))}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(e){var t=e.sortable,n=e.isOwner,i=e.insertion,o=e.activeSortable,r=e.parentEl,s=e.putSortable,a=this.options
if(i){if(n&&o._hideClone(),bt=!1,a.animation&&mt.length>1&&(vt||!n&&!o.options.sort&&!s)){var l=M(ht,!1,!0,!0)
mt.forEach((function(e){e!==ht&&(z(e,l),r.appendChild(e))})),vt=!0}if(!n)if(vt||_t(),mt.length>1){var c=ft
o._showClone(t),o.options.animation&&!ft&&c&&gt.forEach((function(e){o.addAnimationState({target:e,rect:pt}),e.fromRect=pt,e.thisAnimationDuration=null}))}else o._showClone(t)}},dragOverAnimationCapture:function(e){var t=e.dragRect,n=e.isOwner,i=e.activeSortable
if(mt.forEach((function(e){e.thisAnimationDuration=null})),i.options.animation&&!n&&i.multiDrag.isMultiDrag){pt=a({},t)
var o=S(ht,!0)
pt.top-=o.f,pt.left-=o.e}},dragOverAnimationComplete:function(){vt&&(vt=!1,_t())},drop:function(e){var t=e.originalEvent,n=e.rootEl,i=e.parentEl,o=e.sortable,r=e.dispatchSortableEvent,s=e.oldIndex,a=e.putSortable,l=a||this.sortable
if(t){var c=this.options,d=i.children
if(!yt)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),C(ht,c.selectedClass,!~mt.indexOf(ht)),~mt.indexOf(ht))mt.splice(mt.indexOf(ht),1),dt=null,V({sortable:o,rootEl:n,name:"deselect",targetEl:ht,originalEvent:t})
else{if(mt.push(ht),V({sortable:o,rootEl:n,name:"select",targetEl:ht,originalEvent:t}),t.shiftKey&&dt&&o.el.contains(dt)){var u=B(dt),h=B(ht)
~u&&~h&&u!==h&&function(){var e,r
h>u?(r=u,e=h):(r=h,e=u+1)
for(var s=c.filter;r<e;r++)~mt.indexOf(d[r])||k(d[r],c.draggable,i,!1)&&(s&&("function"==typeof s?s.call(o,t,d[r],o):s.split(",").some((function(e){return k(d[r],e.trim(),i,!1)})))||(C(d[r],c.selectedClass,!0),mt.push(d[r]),V({sortable:o,rootEl:n,name:"select",targetEl:d[r],originalEvent:t})))}()}else dt=ht
ut=l}if(yt&&this.isMultiDrag){if(vt=!1,(i[q].options.sort||i!==n)&&mt.length>1){var p=M(ht),f=B(ht,":not(."+this.options.selectedClass+")")
if(!bt&&c.animation&&(ht.thisAnimationDuration=null),l.captureAnimationState(),!bt&&(c.animation&&(ht.fromRect=p,mt.forEach((function(e){if(e.thisAnimationDuration=null,e!==ht){var t=vt?M(e):p
e.fromRect=t,l.addAnimationState({target:e,rect:t})}}))),_t(),mt.forEach((function(e){d[f]?i.insertBefore(e,d[f]):i.appendChild(e),f++})),s===B(ht))){var m=!1
mt.forEach((function(e){e.sortableIndex===B(e)||(m=!0)})),m&&(r("update"),r("sort"))}mt.forEach((function(e){H(e)})),l.animateAll()}ut=l}(n===i||a&&"clone"!==a.lastPutMode)&&gt.forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))}},nullingGlobal:function(){this.isMultiDrag=yt=!1,gt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),v(document,"pointerup",this._deselectMultiDrag),v(document,"mouseup",this._deselectMultiDrag),v(document,"touchend",this._deselectMultiDrag),v(document,"keydown",this._checkKeyDown),v(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(e){if(!(void 0!==yt&&yt||ut!==this.sortable||e&&k(e.target,this.options.draggable,this.sortable.el,!1)||e&&0!==e.button))for(;mt.length;){var t=mt[0]
C(t,this.options.selectedClass,!1),mt.shift(),V({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:t,originalEvent:e})}},_checkKeyDown:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(e,{pluginName:"multiDrag",utils:{select:function(e){var t=e.parentNode[q]
t&&t.options.multiDrag&&!~mt.indexOf(e)&&(ut&&ut!==t&&(ut.multiDrag._deselectMultiDrag(),ut=t),C(e,t.options.selectedClass,!0),mt.push(e))},deselect:function(e){var t=e.parentNode[q],n=mt.indexOf(e)
t&&t.options.multiDrag&&~n&&(C(e,t.options.selectedClass,!1),mt.splice(n,1))}},eventProperties:function(){var e,t=this,n=[],i=[]
return mt.forEach((function(e){var o
n.push({multiDragElement:e,index:e.sortableIndex}),o=vt&&e!==ht?-1:vt?B(e,":not(."+t.options.selectedClass+")"):B(e),i.push({multiDragElement:e,index:o})})),{items:(e=mt,function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),clones:[].concat(gt),oldIndicies:n,newIndicies:i}},optionListeners:{multiDragKey:function(e){return"ctrl"===(e=e.toLowerCase())?e="Control":e.length>1&&(e=e.charAt(0).toUpperCase()+e.substr(1)),e}}})}function kt(e,t){gt.forEach((function(n,i){var o=t.children[n.sortableIndex+(e?Number(i):0)]
o?t.insertBefore(n,o):t.appendChild(n)}))}function _t(){mt.forEach((function(e){e!==ht&&e.parentNode&&e.parentNode.removeChild(e)}))}He.mount(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent
this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):this.options.supportPointer?b(document,"pointermove",this._handleFallbackAutoScroll):t.touches?b(document,"touchmove",this._handleFallbackAutoScroll):b(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent
this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):(v(document,"pointermove",this._handleFallbackAutoScroll),v(document,"touchmove",this._handleFallbackAutoScroll),v(document,"mousemove",this._handleFallbackAutoScroll)),it(),nt(),clearTimeout(_),_=void 0},nulling:function(){Je=Xe=Ye=tt=Qe=Ge=Ze=null,et.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var n=this,i=(e.touches?e.touches[0]:e).clientX,o=(e.touches?e.touches[0]:e).clientY,r=document.elementFromPoint(i,o)
if(Je=e,t||this.options.forceAutoScrollFallback||u||d||p){rt(e,this.options,r,t)
var s=L(r,!0)
!tt||Qe&&i===Ge&&o===Ze||(Qe&&it(),Qe=setInterval((function(){var r=L(document.elementFromPoint(i,o),!0)
r!==s&&(s=r,nt()),rt(e,n.options,r,t)}),10),Ge=i,Ze=o)}else{if(!this.options.bubbleScroll||L(r,!0)===O())return void nt()
rt(e,this.options,L(r,!1),!1)}}},a(e,{pluginName:"scroll",initializeByDefault:!0})}),He.mount(lt,at)
const xt=He},5392:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.version=t.validate=t.v7=t.v6ToV1=t.v6=t.v5=t.v4=t.v3=t.v1ToV6=t.v1=t.stringify=t.parse=t.NIL=t.MAX=void 0
var i=n(1026)
Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return i.default}})
var o=n(2459)
Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return o.default}})
var r=n(4243)
Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return r.default}})
var s=n(3149)
Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return s.default}})
var a=n(6431)
Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return a.default}})
var l=n(2234)
Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return l.default}})
var c=n(481)
Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return c.default}})
var d=n(356)
Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return d.default}})
var u=n(6027)
Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return u.default}})
var h=n(8926)
Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return h.default}})
var p=n(2022)
Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return p.default}})
var f=n(8237)
Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return f.default}})
var m=n(4184)
Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return m.default}})
var g=n(6732)
Object.defineProperty(t,"version",{enumerable:!0,get:function(){return g.default}})},1026:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},9448:(e,t)=>{"use strict"
function n(e){return 14+(e+64>>>9<<4)+1}function i(e,t){const n=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,n,o,r,s){return i((a=i(i(t,e),i(o,s)))<<(l=r)|a>>>32-l,n)
var a,l}function r(e,t,n,i,r,s,a){return o(t&n|~t&i,e,t,r,s,a)}function s(e,t,n,i,r,s,a){return o(t&i|n&~i,e,t,r,s,a)}function a(e,t,n,i,r,s,a){return o(t^n^i,e,t,r,s,a)}function l(e,t,n,i,r,s,a){return o(n^(t|~i),e,t,r,s,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(e){const t=new Uint8Array(4*e.length)
for(let n=0;n<4*e.length;n++)t[n]=e[n>>2]>>>n%4*8&255
return t}(function(e,t){const o=new Uint32Array(n(t)).fill(0)
o.set(e),o[t>>5]|=128<<t%32,o[o.length-1]=t,e=o
let c=1732584193,d=-271733879,u=-1732584194,h=271733878
for(let n=0;n<e.length;n+=16){const t=c,o=d,p=u,f=h
c=r(c,d,u,h,e[n],7,-680876936),h=r(h,c,d,u,e[n+1],12,-389564586),u=r(u,h,c,d,e[n+2],17,606105819),d=r(d,u,h,c,e[n+3],22,-1044525330),c=r(c,d,u,h,e[n+4],7,-176418897),h=r(h,c,d,u,e[n+5],12,1200080426),u=r(u,h,c,d,e[n+6],17,-1473231341),d=r(d,u,h,c,e[n+7],22,-45705983),c=r(c,d,u,h,e[n+8],7,1770035416),h=r(h,c,d,u,e[n+9],12,-1958414417),u=r(u,h,c,d,e[n+10],17,-42063),d=r(d,u,h,c,e[n+11],22,-1990404162),c=r(c,d,u,h,e[n+12],7,1804603682),h=r(h,c,d,u,e[n+13],12,-40341101),u=r(u,h,c,d,e[n+14],17,-1502002290),d=r(d,u,h,c,e[n+15],22,1236535329),c=s(c,d,u,h,e[n+1],5,-165796510),h=s(h,c,d,u,e[n+6],9,-1069501632),u=s(u,h,c,d,e[n+11],14,643717713),d=s(d,u,h,c,e[n],20,-373897302),c=s(c,d,u,h,e[n+5],5,-701558691),h=s(h,c,d,u,e[n+10],9,38016083),u=s(u,h,c,d,e[n+15],14,-660478335),d=s(d,u,h,c,e[n+4],20,-405537848),c=s(c,d,u,h,e[n+9],5,568446438),h=s(h,c,d,u,e[n+14],9,-1019803690),u=s(u,h,c,d,e[n+3],14,-187363961),d=s(d,u,h,c,e[n+8],20,1163531501),c=s(c,d,u,h,e[n+13],5,-1444681467),h=s(h,c,d,u,e[n+2],9,-51403784),u=s(u,h,c,d,e[n+7],14,1735328473),d=s(d,u,h,c,e[n+12],20,-1926607734),c=a(c,d,u,h,e[n+5],4,-378558),h=a(h,c,d,u,e[n+8],11,-2022574463),u=a(u,h,c,d,e[n+11],16,1839030562),d=a(d,u,h,c,e[n+14],23,-35309556),c=a(c,d,u,h,e[n+1],4,-1530992060),h=a(h,c,d,u,e[n+4],11,1272893353),u=a(u,h,c,d,e[n+7],16,-155497632),d=a(d,u,h,c,e[n+10],23,-1094730640),c=a(c,d,u,h,e[n+13],4,681279174),h=a(h,c,d,u,e[n],11,-358537222),u=a(u,h,c,d,e[n+3],16,-722521979),d=a(d,u,h,c,e[n+6],23,76029189),c=a(c,d,u,h,e[n+9],4,-640364487),h=a(h,c,d,u,e[n+12],11,-421815835),u=a(u,h,c,d,e[n+15],16,530742520),d=a(d,u,h,c,e[n+2],23,-995338651),c=l(c,d,u,h,e[n],6,-198630844),h=l(h,c,d,u,e[n+7],10,1126891415),u=l(u,h,c,d,e[n+14],15,-1416354905),d=l(d,u,h,c,e[n+5],21,-57434055),c=l(c,d,u,h,e[n+12],6,1700485571),h=l(h,c,d,u,e[n+3],10,-1894986606),u=l(u,h,c,d,e[n+10],15,-1051523),d=l(d,u,h,c,e[n+1],21,-2054922799),c=l(c,d,u,h,e[n+8],6,1873313359),h=l(h,c,d,u,e[n+15],10,-30611744),u=l(u,h,c,d,e[n+6],15,-1560198380),d=l(d,u,h,c,e[n+13],21,1309151649),c=l(c,d,u,h,e[n+4],6,-145523070),h=l(h,c,d,u,e[n+11],10,-1120210379),u=l(u,h,c,d,e[n+2],15,718787259),d=l(d,u,h,c,e[n+9],21,-343485551),c=i(c,t),d=i(d,o),u=i(u,p),h=i(h,f)}return Uint32Array.of(c,d,u,h)}(function(e){if(0===e.length)return new Uint32Array
const t=new Uint32Array(n(8*e.length)).fill(0)
for(let n=0;n<e.length;n++)t[n>>2]|=(255&e[n])<<n%4*8
return t}(e),8*e.length))}},8045:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const n="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)
t.default={randomUUID:n}},2459:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default="00000000-0000-0000-0000-000000000000"},4243:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(4184)
t.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID")
let t
return Uint8Array.of((t=parseInt(e.slice(0,8),16))>>>24,t>>>16&255,t>>>8&255,255&t,(t=parseInt(e.slice(9,13),16))>>>8,255&t,(t=parseInt(e.slice(14,18),16))>>>8,255&t,(t=parseInt(e.slice(19,23),16))>>>8,255&t,(t=parseInt(e.slice(24,36),16))/1099511627776&255,t/4294967296&255,t>>>24&255,t>>>16&255,t>>>8&255,255&t)}},2071:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},1357:(e,t)=>{"use strict"
let n
Object.defineProperty(t,"__esModule",{value:!0})
const i=new Uint8Array(16)
t.default=function(){if(!n){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
n=crypto.getRandomValues.bind(crypto)}return n(i)}},4267:(e,t)=>{"use strict"
function n(e,t,n,i){switch(e){case 0:return t&n^~t&i
case 1:case 3:return t^n^i
case 2:return t&n^t&i^n&i}}function i(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520],r=new Uint8Array(e.length+1)
r.set(e),r[e.length]=128
const s=(e=r).length/4+2,a=Math.ceil(s/16),l=new Array(a)
for(let n=0;n<a;++n){const t=new Uint32Array(16)
for(let i=0;i<16;++i)t[i]=e[64*n+4*i]<<24|e[64*n+4*i+1]<<16|e[64*n+4*i+2]<<8|e[64*n+4*i+3]
l[n]=t}l[a-1][14]=8*(e.length-1)/Math.pow(2,32),l[a-1][14]=Math.floor(l[a-1][14]),l[a-1][15]=8*(e.length-1)&4294967295
for(let c=0;c<a;++c){const e=new Uint32Array(80)
for(let t=0;t<16;++t)e[t]=l[c][t]
for(let t=16;t<80;++t)e[t]=i(e[t-3]^e[t-8]^e[t-14]^e[t-16],1)
let r=o[0],s=o[1],a=o[2],d=o[3],u=o[4]
for(let o=0;o<80;++o){const l=Math.floor(o/20),c=i(r,5)+n(l,s,a,d)+u+t[l]+e[o]>>>0
u=d,d=a,a=i(s,30)>>>0,s=r,r=c}o[0]=o[0]+r>>>0,o[1]=o[1]+s>>>0,o[2]=o[2]+a>>>0,o[3]=o[3]+d>>>0,o[4]=o[4]+u>>>0}return Uint8Array.of(o[0]>>24,o[0]>>16,o[0]>>8,o[0],o[1]>>24,o[1]>>16,o[1]>>8,o[1],o[2]>>24,o[2]>>16,o[2]>>8,o[2],o[3]>>24,o[3]>>16,o[3]>>8,o[3],o[4]>>24,o[4]>>16,o[4]>>8,o[4])}},3149:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.unsafeStringify=void 0
const i=n(4184),o=[]
for(let s=0;s<256;++s)o.push((s+256).toString(16).slice(1))
function r(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}t.unsafeStringify=r,t.default=function(e,t=0){const n=r(e,t)
if(!(0,i.default)(n))throw TypeError("Stringified UUID is invalid")
return n}},6431:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.updateV1State=void 0
const i=n(1357),o=n(3149),r={}
function s(e,t,n){return e.msecs??=-1/0,e.nsecs??=0,t===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):t>e.msecs?e.nsecs=0:t<e.msecs&&(e.node=void 0),e.node||(e.node=n.slice(10,16),e.node[0]|=1,e.clockseq=16383&(n[8]<<8|n[9])),e.msecs=t,e}function a(e,t,n,i,o,r,s=0){if(e.length<16)throw new Error("Random bytes length must be >= 16")
if(r){if(s<0||s+16>r.length)throw new RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`)}else r=new Uint8Array(16),s=0
t??=Date.now(),n??=0,i??=16383&(e[8]<<8|e[9]),o??=e.slice(10,16)
const a=(1e4*(268435455&(t+=122192928e5))+n)%4294967296
r[s++]=a>>>24&255,r[s++]=a>>>16&255,r[s++]=a>>>8&255,r[s++]=255&a
const l=t/4294967296*1e4&268435455
r[s++]=l>>>8&255,r[s++]=255&l,r[s++]=l>>>24&15|16,r[s++]=l>>>16&255,r[s++]=i>>>8|128,r[s++]=255&i
for(let c=0;c<6;++c)r[s++]=o[c]
return r}t.updateV1State=s,t.default=function(e,t,n){let l
const c=e?._v6??!1
if(e){const t=Object.keys(e)
1===t.length&&"_v6"===t[0]&&(e=void 0)}if(e)l=a(e.random??e.rng?.()??(0,i.default)(),e.msecs,e.nsecs,e.clockseq,e.node,t,n)
else{const e=Date.now(),o=(0,i.default)()
s(r,e,o),l=a(o,r.msecs,r.nsecs,c?void 0:r.clockseq,c?void 0:r.node,t,n)}return t?l:(0,o.unsafeStringify)(l)}},2234:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(4243),o=n(3149)
t.default=function(e){const t=(n="string"==typeof e?(0,i.default)(e):e,Uint8Array.of((15&n[6])<<4|n[7]>>4&15,(15&n[7])<<4|(240&n[4])>>4,(15&n[4])<<4|(240&n[5])>>4,(15&n[5])<<4|(240&n[0])>>4,(15&n[0])<<4|(240&n[1])>>4,(15&n[1])<<4|(240&n[2])>>4,96|15&n[2],n[3],n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15]))
var n
return"string"==typeof e?(0,o.unsafeStringify)(t):t}},481:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0
const i=n(9448),o=n(5042)
var r=n(5042)
function s(e,t,n,r){return(0,o.default)(48,i.default,e,t,n,r)}Object.defineProperty(t,"DNS",{enumerable:!0,get:function(){return r.DNS}}),Object.defineProperty(t,"URL",{enumerable:!0,get:function(){return r.URL}}),s.DNS=o.DNS,s.URL=o.URL,t.default=s},5042:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=t.stringToBytes=void 0
const i=n(4243),o=n(3149)
function r(e){e=unescape(encodeURIComponent(e))
const t=new Uint8Array(e.length)
for(let n=0;n<e.length;++n)t[n]=e.charCodeAt(n)
return t}t.stringToBytes=r,t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",t.default=function(e,t,n,s,a,l){const c="string"==typeof n?r(n):n,d="string"==typeof s?(0,i.default)(s):s
if("string"==typeof s&&(s=(0,i.default)(s)),16!==s?.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")
let u=new Uint8Array(16+c.length)
if(u.set(d),u.set(c,d.length),u=t(u),u[6]=15&u[6]|e,u[8]=63&u[8]|128,a){l=l||0
for(let e=0;e<16;++e)a[l+e]=u[e]
return a}return(0,o.unsafeStringify)(u)}},356:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(8045),o=n(1357),r=n(3149)
t.default=function(e,t,n){if(i.default.randomUUID&&!t&&!e)return i.default.randomUUID()
const s=(e=e||{}).random??e.rng?.()??(0,o.default)()
if(s.length<16)throw new Error("Random bytes length must be >= 16")
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){if((n=n||0)<0||n+16>t.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`)
for(let e=0;e<16;++e)t[n+e]=s[e]
return t}return(0,r.unsafeStringify)(s)}},6027:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0
const i=n(4267),o=n(5042)
var r=n(5042)
function s(e,t,n,r){return(0,o.default)(80,i.default,e,t,n,r)}Object.defineProperty(t,"DNS",{enumerable:!0,get:function(){return r.DNS}}),Object.defineProperty(t,"URL",{enumerable:!0,get:function(){return r.URL}}),s.DNS=o.DNS,s.URL=o.URL,t.default=s},8926:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(3149),o=n(6431),r=n(2234)
t.default=function(e,t,n){e??={},n??=0
let s=(0,o.default)({...e,_v6:!0},new Uint8Array(16))
if(s=(0,r.default)(s),t){for(let e=0;e<16;e++)t[n+e]=s[e]
return t}return(0,i.unsafeStringify)(s)}},2022:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(4243),o=n(3149)
t.default=function(e){const t=(n="string"==typeof e?(0,i.default)(e):e,Uint8Array.of((15&n[3])<<4|n[4]>>4&15,(15&n[4])<<4|(240&n[5])>>4,(15&n[5])<<4|15&n[6],n[7],(15&n[1])<<4|(240&n[2])>>4,(15&n[2])<<4|(240&n[3])>>4,16|(240&n[0])>>4,(15&n[0])<<4|(240&n[1])>>4,n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15]))
var n
return"string"==typeof e?(0,o.unsafeStringify)(t):t}},8237:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.updateV7State=void 0
const i=n(1357),o=n(3149),r={}
function s(e,t,n){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=n[6]<<23|n[7]<<16|n[8]<<8|n[9],e.msecs=t):(e.seq=e.seq+1|0,0===e.seq&&e.msecs++),e}function a(e,t,n,i,o=0){if(e.length<16)throw new Error("Random bytes length must be >= 16")
if(i){if(o<0||o+16>i.length)throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`)}else i=new Uint8Array(16),o=0
return t??=Date.now(),n??=127*e[6]<<24|e[7]<<16|e[8]<<8|e[9],i[o++]=t/1099511627776&255,i[o++]=t/4294967296&255,i[o++]=t/16777216&255,i[o++]=t/65536&255,i[o++]=t/256&255,i[o++]=255&t,i[o++]=112|n>>>28&15,i[o++]=n>>>20&255,i[o++]=128|n>>>14&63,i[o++]=n>>>6&255,i[o++]=n<<2&255|3&e[10],i[o++]=e[11],i[o++]=e[12],i[o++]=e[13],i[o++]=e[14],i[o++]=e[15],i}t.updateV7State=s,t.default=function(e,t,n){let l
if(e)l=a(e.random??e.rng?.()??(0,i.default)(),e.msecs,e.seq,t,n)
else{const e=Date.now(),o=(0,i.default)()
s(r,e,o),l=a(o,r.msecs,r.seq,t,n)}return t?l:(0,o.unsafeStringify)(l)}},4184:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(2071)
t.default=function(e){return"string"==typeof e&&i.default.test(e)}},6732:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const i=n(4184)
t.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID")
return parseInt(e.slice(14,15),16)}},4955:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>uo}),function(){try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}()
var i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{}
function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(){}Object.assign(r,{default:r,register:r,revert:function(){},__esModule:!0}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){const t=(this.document||this.ownerDocument).querySelectorAll(e)
let n=t.length
for(;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this
if(!document.documentElement.contains(t))return null
do{if(t.matches(e))return t
t=t.parentElement||t.parentNode}while(null!==t)
return null}),Element.prototype.prepend||(Element.prototype.prepend=function(e){const t=document.createDocumentFragment()
Array.isArray(e)||(e=[e]),e.forEach((e=>{const n=e instanceof Node
t.appendChild(n?e:document.createTextNode(e))})),this.insertBefore(t,this.firstChild)}),Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(e){e=0===arguments.length||!!e
const t=this.parentNode,n=window.getComputedStyle(t,null),i=parseInt(n.getPropertyValue("border-top-width")),o=parseInt(n.getPropertyValue("border-left-width")),r=this.offsetTop-t.offsetTop<t.scrollTop,s=this.offsetTop-t.offsetTop+this.clientHeight-i>t.scrollTop+t.clientHeight,a=this.offsetLeft-t.offsetLeft<t.scrollLeft,l=this.offsetLeft-t.offsetLeft+this.clientWidth-o>t.scrollLeft+t.clientWidth,c=r&&!s;(r||s)&&e&&(t.scrollTop=this.offsetTop-t.offsetTop-t.clientHeight/2-i+this.clientHeight/2),(a||l)&&e&&(t.scrollLeft=this.offsetLeft-t.offsetLeft-t.clientWidth/2-o+this.clientWidth/2),(r||s||a||l)&&!e&&this.scrollIntoView(c)}),window.requestIdleCallback=window.requestIdleCallback||function(e){const t=Date.now()
return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}
var s=(e=>(e.VERBOSE="VERBOSE",e.INFO="INFO",e.WARN="WARN",e.ERROR="ERROR",e))(s||{})
const a=13,l=38,c=40
function d(e,t,n="log",i,o="color: inherit"){if(!("console"in window)||!window.console[n])return
const r=["info","log","warn","error"].includes(n),s=[]
switch(d.logLevel){case"ERROR":if("error"!==n)return
break
case"WARN":if(!["error","warn"].includes(n))return
break
case"INFO":if(!r||e)return}i&&s.push(i)
const a="Editor.js 2.31.0-rc.7"
e&&(r?(s.unshift("line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;",o),t=`%c${a}%c ${t}`):t=`( ${a} )${t}`)
try{r?i?console[n](`${t} %o`,...s):console[n](t,...s):console[n](t)}catch{}}d.logLevel="VERBOSE"
const u=d.bind(window,!1),h=d.bind(window,!0)
function p(e){return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function f(e){return"function"===p(e)||"asyncfunction"===p(e)}function m(e){return"object"===p(e)}function g(e){return"string"===p(e)}function b(e){return"number"===p(e)}function v(e){return"undefined"===p(e)}function y(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function w(e){return e>47&&e<58||32===e||13===e||229===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223}function k(e){return Array.prototype.slice.call(e)}function _(e,t){return function(){const n=this,i=arguments
window.setTimeout((()=>e.apply(n,i)),t)}}function x(e,t,n){let i
return(...o)=>{const r=this,s=n&&!i
window.clearTimeout(i),i=window.setTimeout((()=>{i=null,n||e.apply(r,o)}),t),s&&e.apply(r,o)}}function C(e,t,n=void 0){let i,o,r,s=null,a=0
n||(n={})
const l=function(){a=!1===n.leading?0:Date.now(),s=null,r=e.apply(i,o),s||(i=o=null)}
return function(){const c=Date.now()
!a&&!1===n.leading&&(a=c)
const d=t-(c-a)
return i=this,o=arguments,d<=0||d>t?(s&&(clearTimeout(s),s=null),a=c,r=e.apply(i,o),s||(i=o=null)):!s&&!1!==n.trailing&&(s=setTimeout(l,d)),r}}function E(e){return e[0].toUpperCase()+e.slice(1)}function S(e,...t){if(!t.length)return e
const n=t.shift()
if(m(e)&&m(n))for(const i in n)m(n[i])?(e[i]||Object.assign(e,{[i]:{}}),S(e[i],n[i])):Object.assign(e,{[i]:n[i]})
return S(e,...t)}function T(e){const t=function(){const e={win:!1,mac:!1,x11:!1,linux:!1},t=Object.keys(e).find((e=>-1!==window.navigator.appVersion.toLowerCase().indexOf(e)))
return t&&(e[t]=!0),e}()
return e=e.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t.mac?e.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):e.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")}function O(){return((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),""))(10)}function M(e,t,n){e&&h(`«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`,"warn")}function A(e,t,n){const i=n.value?"value":"get",o=n[i],r=`#${t}Cache`
if(n[i]=function(...e){return void 0===this[r]&&(this[r]=o.apply(this,...e)),this[r]},"get"===i&&n.set){const t=n.set
n.set=function(n){delete e[r],t.apply(this,n)}}return n}function R(){return window.matchMedia("(max-width: 650px)").matches}const I=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1)
class B{static isSingleTag(e){return e.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)}static isLineBreakTag(e){return e&&e.tagName&&["BR","WBR"].includes(e.tagName)}static make(e,t=null,n={}){const i=document.createElement(e)
if(Array.isArray(t)){const e=t.filter((e=>void 0!==e))
i.classList.add(...e)}else t&&i.classList.add(t)
for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])
return i}static text(e){return document.createTextNode(e)}static append(e,t){Array.isArray(t)?t.forEach((t=>e.appendChild(t))):e.appendChild(t)}static prepend(e,t){Array.isArray(t)?(t=t.reverse()).forEach((t=>e.prepend(t))):e.prepend(t)}static swap(e,t){const n=document.createElement("div"),i=e.parentNode
i.insertBefore(n,e),i.insertBefore(e,t),i.insertBefore(t,n),i.removeChild(n)}static find(e=document,t){return e.querySelector(t)}static get(e){return document.getElementById(e)}static findAll(e=document,t){return e.querySelectorAll(t)}static get allInputsSelector(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((e=>`input[type="${e}"]`)).join(", ")}static findAllInputs(e){return k(e.querySelectorAll(B.allInputsSelector)).reduce(((e,t)=>B.isNativeInput(t)||B.containsOnlyInlineElements(t)?[...e,t]:[...e,...B.getDeepestBlockElements(t)]),[])}static getDeepestNode(e,t=!1){const n=t?"lastChild":"firstChild",i=t?"previousSibling":"nextSibling"
if(e&&e.nodeType===Node.ELEMENT_NODE&&e[n]){let o=e[n]
if(B.isSingleTag(o)&&!B.isNativeInput(o)&&!B.isLineBreakTag(o))if(o[i])o=o[i]
else{if(!o.parentNode[i])return o.parentNode
o=o.parentNode[i]}return this.getDeepestNode(o,t)}return e}static isElement(e){return!b(e)&&e&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}static isFragment(e){return!b(e)&&e&&e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isContentEditable(e){return"true"===e.contentEditable}static isNativeInput(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}static canSetCaret(e){let t=!0
if(B.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=B.isContentEditable(e)
return t}static isNodeEmpty(e,t){let n
return!(this.isSingleTag(e)&&!this.isLineBreakTag(e))&&(n=this.isElement(e)&&this.isNativeInput(e)?e.value:e.textContent.replace("​",""),t&&(n=n.replace(new RegExp(t,"g"),"")),0===n.length)}static isLeaf(e){return!!e&&0===e.childNodes.length}static isEmpty(e,t){const n=[e]
for(;n.length>0;)if(e=n.shift()){if(this.isLeaf(e)&&!this.isNodeEmpty(e,t))return!1
e.childNodes&&n.push(...Array.from(e.childNodes))}return!0}static isHTMLString(e){const t=B.make("div")
return t.innerHTML=e,t.childElementCount>0}static getContentLength(e){return B.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}static get blockElements(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]}static containsOnlyInlineElements(e){let t
g(e)?(t=document.createElement("div"),t.innerHTML=e):t=e
const n=e=>!B.blockElements.includes(e.tagName.toLowerCase())&&Array.from(e.children).every(n)
return Array.from(t.children).every(n)}static getDeepestBlockElements(e){return B.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce(((e,t)=>[...e,...B.getDeepestBlockElements(t)]),[])}static getHolder(e){return g(e)?document.getElementById(e):e}static isAnchor(e){return"a"===e.tagName.toLowerCase()}static offset(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop,o=t.top+i,r=t.left+n
return{top:o,left:r,bottom:o+t.height,right:r+t.width}}}function P(e){e.dataset.empty=B.isEmpty(e)?"true":"false"}const L={ui:{blockTunes:{toggler:{"Click to tune":"","or drag to move":""}},inlineToolbar:{converter:{"Convert to":""}},toolbar:{toolbox:{Add:""}},popover:{Filter:"","Nothing found":"","Convert to":""}},toolNames:{Text:"",Link:"",Bold:"",Italic:""},tools:{link:{"Add a link":""},stub:{"The block can not be displayed correctly.":""}},blockTunes:{delete:{Delete:"","Click to delete":""},moveUp:{"Move up":""},moveDown:{"Move down":""}}},j=class e{static ui(t,n){return e._t(t,n)}static t(t,n){return e._t(t,n)}static setDictionary(t){e.currentDictionary=t}static _t(t,n){const i=e.getNamespace(t)
return i&&i[n]?i[n]:n}static getNamespace(t){return t.split(".").reduce(((e,t)=>e&&Object.keys(e).length?e[t]:{}),e.currentDictionary)}}
j.currentDictionary=L
let N=j
class D extends Error{}class F{constructor(){this.subscribers={}}on(e,t){e in this.subscribers||(this.subscribers[e]=[]),this.subscribers[e].push(t)}once(e,t){e in this.subscribers||(this.subscribers[e]=[])
const n=i=>{const o=t(i),r=this.subscribers[e].indexOf(n)
return-1!==r&&this.subscribers[e].splice(r,1),o}
this.subscribers[e].push(n)}emit(e,t){y(this.subscribers)||!this.subscribers[e]||this.subscribers[e].reduce(((e,t)=>{const n=t(e)
return void 0!==n?n:e}),t)}off(e,t){if(void 0!==this.subscribers[e]){for(let n=0;n<this.subscribers[e].length;n++)if(this.subscribers[e][n]===t){delete this.subscribers[e][n]
break}}else console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`)}destroy(){this.subscribers={}}}function z(e){Object.setPrototypeOf(this,{get id(){return e.id},get name(){return e.name},get config(){return e.config},get holder(){return e.holder},get isEmpty(){return e.isEmpty},get selected(){return e.selected},set stretched(t){e.stretched=t},get stretched(){return e.stretched},get focusable(){return e.focusable},call:(t,n)=>e.call(t,n),save:()=>e.save(),validate:t=>e.validate(t),dispatchChange(){e.dispatchChange()},getActiveToolboxEntry:()=>e.getActiveToolboxEntry()})}class H{constructor(){this.allListeners=[]}on(e,t,n,i=!1){const o=function(e=""){return`${e}${Math.floor(1e8*Math.random()).toString(16)}`}("l"),r={id:o,element:e,eventType:t,handler:n,options:i}
if(!this.findOne(e,t,n))return this.allListeners.push(r),e.addEventListener(t,n,i),o}off(e,t,n,i){const o=this.findAll(e,t,n)
o.forEach(((e,t)=>{const n=this.allListeners.indexOf(o[t])
n>-1&&(this.allListeners.splice(n,1),e.element.removeEventListener(e.eventType,e.handler,e.options))}))}offById(e){const t=this.findById(e)
t&&t.element.removeEventListener(t.eventType,t.handler,t.options)}findOne(e,t,n){const i=this.findAll(e,t,n)
return i.length>0?i[0]:null}findAll(e,t,n){let i
const o=e?this.findByEventTarget(e):[]
return i=e&&t&&n?o.filter((e=>e.eventType===t&&e.handler===n)):e&&t?o.filter((e=>e.eventType===t)):o,i}removeAll(){this.allListeners.map((e=>{e.element.removeEventListener(e.eventType,e.handler,e.options)})),this.allListeners=[]}destroy(){this.removeAll()}findByEventTarget(e){return this.allListeners.filter((t=>{if(t.element===e)return t}))}findByType(e){return this.allListeners.filter((t=>{if(t.eventType===e)return t}))}findByHandler(e){return this.allListeners.filter((t=>{if(t.handler===e)return t}))}findById(e){return this.allListeners.find((t=>t.id===e))}}class U{constructor({config:e,eventsDispatcher:t}){if(this.nodes={},this.listeners=new H,this.readOnlyMutableListeners={on:(e,t,n,i=!1)=>{this.mutableListenerIds.push(this.listeners.on(e,t,n,i))},clearAll:()=>{for(const e of this.mutableListenerIds)this.listeners.offById(e)
this.mutableListenerIds=[]}},this.mutableListenerIds=[],new.target===U)throw new TypeError("Constructors for abstract class Module are not allowed.")
this.config=e,this.eventsDispatcher=t}set state(e){this.Editor=e}removeAllNodes(){for(const e in this.nodes){const t=this.nodes[e]
t instanceof HTMLElement&&t.remove()}}get isRtl(){return"rtl"===this.config.i18n.direction}}class q{constructor(){this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}static get CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}static get anchorNode(){const e=window.getSelection()
return e?e.anchorNode:null}static get anchorElement(){const e=window.getSelection()
if(!e)return null
const t=e.anchorNode
return t?B.isElement(t)?t:t.parentElement:null}static get anchorOffset(){const e=window.getSelection()
return e?e.anchorOffset:null}static get isCollapsed(){const e=window.getSelection()
return e?e.isCollapsed:null}static get isAtEditor(){return this.isSelectionAtEditor(q.get())}static isSelectionAtEditor(e){if(!e)return!1
let t=e.anchorNode||e.focusNode
t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode)
let n=null
return t&&t instanceof Element&&(n=t.closest(`.${q.CSS.editorZone}`)),!!n&&n.nodeType===Node.ELEMENT_NODE}static isRangeAtEditor(e){if(!e)return
let t=e.startContainer
t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode)
let n=null
return t&&t instanceof Element&&(n=t.closest(`.${q.CSS.editorZone}`)),!!n&&n.nodeType===Node.ELEMENT_NODE}static get isSelectionExists(){return!!q.get().anchorNode}static get range(){return this.getRangeFromSelection(this.get())}static getRangeFromSelection(e){return e&&e.rangeCount?e.getRangeAt(0):null}static get rect(){let e,t=document.selection,n={x:0,y:0,width:0,height:0}
if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n
if(!window.getSelection)return u("Method window.getSelection is not supported","warn"),n
if(t=window.getSelection(),null===t.rangeCount||isNaN(t.rangeCount))return u("Method SelectionUtils.rangeCount is not supported","warn"),n
if(0===t.rangeCount)return n
if(e=t.getRangeAt(0).cloneRange(),e.getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){const t=document.createElement("span")
if(t.getBoundingClientRect){t.appendChild(document.createTextNode("​")),e.insertNode(t),n=t.getBoundingClientRect()
const i=t.parentNode
i.removeChild(t),i.normalize()}}return n}static get text(){return window.getSelection?window.getSelection().toString():""}static get(){return window.getSelection()}static setCursor(e,t=0){const n=document.createRange(),i=window.getSelection()
return B.isNativeInput(e)?B.canSetCaret(e)?(e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()):void 0:(n.setStart(e,t),n.setEnd(e,t),i.removeAllRanges(),i.addRange(n),n.getBoundingClientRect())}static isRangeInsideContainer(e){const t=q.range
return null!==t&&e.contains(t.startContainer)}static addFakeCursor(){const e=q.range
if(null===e)return
const t=B.make("span","codex-editor__fake-cursor")
t.dataset.mutationFree="true",e.collapse(),e.insertNode(t)}static isFakeCursorInsideContainer(e){return null!==B.find(e,".codex-editor__fake-cursor")}static removeFakeCursor(e=document.body){const t=B.find(e,".codex-editor__fake-cursor")
t&&t.remove()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=q.range}restore(){if(!this.savedSelectionRange)return
const e=window.getSelection()
e.removeAllRanges(),e.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const e=window.getSelection(),t=document.createRange()
t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}findParentTag(e,t,n=10){const i=window.getSelection()
let o=null
return i&&i.anchorNode&&i.focusNode?([i.anchorNode,i.focusNode].forEach((i=>{let r=n
for(;r>0&&i.parentNode&&(i.tagName!==e||(o=i,t&&i.classList&&!i.classList.contains(t)&&(o=null),!o));)i=i.parentNode,r--})),o):null}expandToTag(e){const t=window.getSelection()
t.removeAllRanges()
const n=document.createRange()
n.selectNodeContents(e),t.addRange(n)}}const $="redactor dom changed",W="block changed",K="fake cursor is about to be toggled",V="fake cursor have been set",Y="editor mobile layout toggled"
function X(e,t){if(!e.conversionConfig)return!1
const n=e.conversionConfig[t]
return f(n)||g(n)}function G(e,t){return X(e.tool,t)}function Z(e,t){return Object.entries(e).some((([e,n])=>t[e]&&function(e,t){const n=Array.isArray(e)||m(e),i=Array.isArray(t)||m(t)
return n||i?JSON.stringify(e)===JSON.stringify(t):e===t}(t[e],n)))}async function J(e,t){const n=(await e.save()).data,i=t.find((t=>t.name===e.name))
return void 0===i||X(i,"export")?t.reduce(((t,i)=>{if(!X(i,"import")||void 0===i.toolbox)return t
const o=i.toolbox.filter((t=>{if(y(t)||void 0===t.icon)return!1
if(void 0!==t.data){if(Z(t.data,n))return!1}else if(i.name===e.name)return!1
return!0}))
return t.push({...i,toolbox:o}),t}),[]):[]}function Q(e,t){return!!e.mergeable&&(e.name===t.name||G(t,"export")&&G(e,"import"))}function ee(e,t,n){const i=null==t?void 0:t.import
return f(i)?i(e,n):g(i)?{[i]:e}:(void 0!==i&&u("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),{})}var te=(e=>(e.Default="default",e.Separator="separator",e.Html="html",e))(te||{}),ne=(e=>(e.APPEND_CALLBACK="appendCallback",e.RENDERED="rendered",e.MOVED="moved",e.UPDATED="updated",e.REMOVED="removed",e.ON_PASTE="onPaste",e))(ne||{})
class ie extends F{constructor({id:e=O(),data:t,tool:n,readOnly:i,tunesData:o},r){super(),this.cachedInputs=[],this.toolRenderedElement=null,this.tunesInstances=new Map,this.defaultTunesInstances=new Map,this.unavailableTunesData={},this.inputIndex=0,this.editorEventBus=null,this.handleFocus=()=>{this.dropInputsCache(),this.updateCurrentInput()},this.didMutated=(e=void 0)=>{const t=void 0===e,n=e instanceof InputEvent
let i
!t&&!n&&this.detectToolRootChange(e),i=!(!t&&!n&&e.length>0&&e.every((e=>{const{addedNodes:t,removedNodes:n,target:i}=e
return[...Array.from(t),...Array.from(n),i].some((e=>(B.isElement(e)||(e=e.parentElement),e&&null!==e.closest('[data-mutation-free="true"]'))))}))),i&&(this.dropInputsCache(),this.updateCurrentInput(),this.toggleInputsEmptyMark(),this.call("updated"),this.emit("didMutated",this))},this.name=n.name,this.id=e,this.settings=n.settings,this.config=n.settings.config||{},this.editorEventBus=r||null,this.blockAPI=new z(this),this.tool=n,this.toolInstance=n.create(t,this.blockAPI,i),this.tunes=n.tunes,this.composeTunes(o),this.holder=this.compose(),window.requestIdleCallback((()=>{this.watchBlockMutations(),this.addInputEvents(),this.toggleInputsEmptyMark()}))}static get CSS(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}get inputs(){if(0!==this.cachedInputs.length)return this.cachedInputs
const e=B.findAllInputs(this.holder)
return this.inputIndex>e.length-1&&(this.inputIndex=e.length-1),this.cachedInputs=e,e}get currentInput(){return this.inputs[this.inputIndex]}set currentInput(e){const t=this.inputs.findIndex((t=>t===e||t.contains(e)));-1!==t&&(this.inputIndex=t)}get firstInput(){return this.inputs[0]}get lastInput(){const e=this.inputs
return e[e.length-1]}get nextInput(){return this.inputs[this.inputIndex+1]}get previousInput(){return this.inputs[this.inputIndex-1]}get data(){return this.save().then((e=>e&&!y(e.data)?e.data:{}))}get sanitize(){return this.tool.sanitizeConfig}get mergeable(){return f(this.toolInstance.merge)}get focusable(){return 0!==this.inputs.length}get isEmpty(){const e=B.isEmpty(this.pluginsContent,"/"),t=!this.hasMedia
return e&&t}get hasMedia(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}set selected(e){var t,n
this.holder.classList.toggle(ie.CSS.selected,e)
const i=!0===e&&q.isRangeInsideContainer(this.holder),o=!1===e&&q.isFakeCursorInsideContainer(this.holder);(i||o)&&(null==(t=this.editorEventBus)||t.emit(K,{state:e}),i?q.addFakeCursor():q.removeFakeCursor(this.holder),null==(n=this.editorEventBus)||n.emit(V,{state:e}))}get selected(){return this.holder.classList.contains(ie.CSS.selected)}set stretched(e){this.holder.classList.toggle(ie.CSS.wrapperStretched,e)}get stretched(){return this.holder.classList.contains(ie.CSS.wrapperStretched)}set dropTarget(e){this.holder.classList.toggle(ie.CSS.dropTarget,e)}get pluginsContent(){return this.toolRenderedElement}call(e,t){if(f(this.toolInstance[e])){"appendCallback"===e&&u("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn")
try{this.toolInstance[e].call(this.toolInstance,t)}catch(t){u(`Error during '${e}' call: ${t.message}`,"error")}}}async mergeWith(e){await this.toolInstance.merge(e)}async save(){const e=await this.toolInstance.save(this.pluginsContent),t=this.unavailableTunesData;[...this.tunesInstances.entries(),...this.defaultTunesInstances.entries()].forEach((([e,n])=>{if(f(n.save))try{t[e]=n.save()}catch(e){u(`Tune ${n.constructor.name} save method throws an Error %o`,"warn",e)}}))
const n=window.performance.now()
let i
return Promise.resolve(e).then((e=>(i=window.performance.now(),{id:this.id,tool:this.name,data:e,tunes:t,time:i-n}))).catch((e=>{u(`Saving process for ${this.name} tool failed due to the ${e}`,"log","red")}))}async validate(e){let t=!0
return this.toolInstance.validate instanceof Function&&(t=await this.toolInstance.validate(e)),t}getTunes(){const e=[],t=[],n="function"==typeof this.toolInstance.renderSettings?this.toolInstance.renderSettings():[]
return B.isElement(n)?e.push({type:te.Html,element:n}):Array.isArray(n)?e.push(...n):e.push(n),[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].map((e=>e.render())).forEach((e=>{B.isElement(e)?t.push({type:te.Html,element:e}):Array.isArray(e)?t.push(...e):t.push(e)})),{toolTunes:e,commonTunes:t}}updateCurrentInput(){this.currentInput=B.isNativeInput(document.activeElement)||!q.anchorNode?document.activeElement:q.anchorNode}dispatchChange(){this.didMutated()}destroy(){this.unwatchBlockMutations(),this.removeInputEvents(),super.destroy(),f(this.toolInstance.destroy)&&this.toolInstance.destroy()}async getActiveToolboxEntry(){const e=this.tool.toolbox
if(1===e.length)return Promise.resolve(this.tool.toolbox[0])
const t=await this.data
return null==e?void 0:e.find((e=>Z(e.data,t)))}async exportDataAsString(){return function(e,t){const n=null==t?void 0:t.export
return f(n)?n(e):g(n)?e[n]:(void 0!==n&&u("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),"")}(await this.data,this.tool.conversionConfig)}compose(){const e=B.make("div",ie.CSS.wrapper),t=B.make("div",ie.CSS.content),n=this.toolInstance.render()
e.setAttribute("data-cy","block-wrapper"),e.dataset.id=this.id,this.toolRenderedElement=n,t.appendChild(this.toolRenderedElement)
let i=t
return[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].forEach((e=>{if(f(e.wrap))try{i=e.wrap(i)}catch(t){u(`Tune ${e.constructor.name} wrap method throws an Error %o`,"warn",t)}})),e.appendChild(i),e}composeTunes(e){Array.from(this.tunes.values()).forEach((t=>{(t.isInternal?this.defaultTunesInstances:this.tunesInstances).set(t.name,t.create(e[t.name],this.blockAPI))})),Object.entries(e).forEach((([e,t])=>{this.tunesInstances.has(e)||(this.unavailableTunesData[e]=t)}))}addInputEvents(){this.inputs.forEach((e=>{e.addEventListener("focus",this.handleFocus),B.isNativeInput(e)&&e.addEventListener("input",this.didMutated)}))}removeInputEvents(){this.inputs.forEach((e=>{e.removeEventListener("focus",this.handleFocus),B.isNativeInput(e)&&e.removeEventListener("input",this.didMutated)}))}watchBlockMutations(){var e
this.redactorDomChangedCallback=e=>{const{mutations:t}=e
t.some((e=>function(e,t){const{type:n,target:i,addedNodes:o,removedNodes:r}=e
return("attributes"!==e.type||"data-empty"!==e.attributeName)&&!!(t.contains(i)||"childList"===n&&(Array.from(o).some((e=>e===t))||Array.from(r).some((e=>e===t))))}(e,this.toolRenderedElement)))&&this.didMutated(t)},null==(e=this.editorEventBus)||e.on($,this.redactorDomChangedCallback)}unwatchBlockMutations(){var e
null==(e=this.editorEventBus)||e.off($,this.redactorDomChangedCallback)}detectToolRootChange(e){e.forEach((e=>{if(Array.from(e.removedNodes).includes(this.toolRenderedElement)){const t=e.addedNodes[e.addedNodes.length-1]
this.toolRenderedElement=t}}))}dropInputsCache(){this.cachedInputs=[]}toggleInputsEmptyMark(){this.inputs.forEach(P)}}class oe extends U{static getNamespace(e,t){return t?`blockTunes.${e}`:`tools.${e}`}get methods(){return{t:()=>{h("I18n.t() method can be accessed only from Tools","warn")}}}getMethodsForTool(e,t){return Object.assign(this.methods,{t:n=>N.t(oe.getNamespace(e,t),n)})}}var re={exports:{}}
window,re.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){var i,o
n(1),e.exports=(i=n(6),o=null,{show:function(e){if(e.message){!function(){if(o)return!0
o=i.getWrapper(),document.body.appendChild(o)}()
var t=null,n=e.time||8e3
switch(e.type){case"confirm":t=i.confirm(e)
break
case"prompt":t=i.prompt(e)
break
default:t=i.alert(e),window.setTimeout((function(){t.remove()}),n)}o.appendChild(t),t.classList.add("cdx-notify--bounce-in")}}})},function(e,t,n){var i=n(2)
"string"==typeof i&&(i=[[e.i,i,""]]),n(4)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(e,t){e.exports=function(e){var t=[]
return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i=e[1]||"",o=e[3]
if(!o)return i
if(t&&"function"==typeof btoa){var r=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}))
return[i].concat(s).concat([r]).join("\n")}return[i].join("\n")}(t,e)
return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]])
for(var i={},o=0;o<this.length;o++){var r=this[o][0]
"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o]
"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,o,r,s={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),l=(r={},function(e){if("function"==typeof e)return e()
if(void 0===r[e]){var t=function(e){return document.querySelector(e)}.call(this,e)
if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch{t=null}r[e]=t}return r[e]}),c=null,d=0,u=[],h=n(5)
function p(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=s[i.id]
if(o){o.refs++
for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r])
for(;r<i.parts.length;r++)o.parts.push(y(i.parts[r],t))}else{var a=[]
for(r=0;r<i.parts.length;r++)a.push(y(i.parts[r],t))
s[i.id]={id:i.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]}
i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function m(e,t){var n=l(e.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var i=u[u.length-1]
if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t)
else if("bottom"===e.insertAt)n.appendChild(t)
else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var o=l(e.insertInto+" "+e.insertAt.before)
n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)
var t=u.indexOf(e)
t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,i,o,r,s,a
if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){}
e.css=r}if(t.singleton){var l=d++
n=c||(c=b(t)),i=_.bind(null,n,l,!1),o=_.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=t,a=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",v(a,s.attrs),m(s,a),i=function(e,t,n){var i=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(i=h(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */")
var s=new Blob([i],{type:"text/css"}),a=e.href
e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n=a,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),i=function(e,t){var n=t.css,i=t.media
if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)})
return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
i(e=t)}else o()}}e.exports=function(e,t){if(typeof DEBUG<"u"&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom")
var n=f(e,t)
return p(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}for(e&&p(f(e,t),t),o=0;o<i.length;o++){var a
if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]()
delete s[a.id]}}}}
var w,k=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")})
function _(e,t,n,i){var o=n?"":i.css
if(e.styleSheet)e.styleSheet.cssText=k(t,o)
else{var r=document.createTextNode(o),s=e.childNodes
s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t=typeof window<"u"&&window.location
if(!t)throw new Error("fixUrls requires window.location")
if(!e||"string"!=typeof e)return e
var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/")
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}))
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){var i,o,r,s,a,l
e.exports=(i="cdx-notify",o="cdx-notify__cross",r="cdx-notify__button--confirm",s="cdx-notify__button",a="cdx-notify__btns-wrapper",{alert:l=function(e){var t=document.createElement("DIV"),n=document.createElement("DIV"),r=e.message,s=e.style
return t.classList.add(i),s&&t.classList.add(i+"--"+s),t.innerHTML=r,n.classList.add(o),n.addEventListener("click",t.remove.bind(t)),t.appendChild(n),t},confirm:function(e){var t=l(e),n=document.createElement("div"),i=document.createElement("button"),c=document.createElement("button"),d=t.querySelector("."+o),u=e.cancelHandler,h=e.okHandler
return n.classList.add(a),i.innerHTML=e.okText||"Confirm",c.innerHTML=e.cancelText||"Cancel",i.classList.add(s),c.classList.add(s),i.classList.add(r),c.classList.add("cdx-notify__button--cancel"),u&&"function"==typeof u&&(c.addEventListener("click",u),d.addEventListener("click",u)),h&&"function"==typeof h&&i.addEventListener("click",h),i.addEventListener("click",t.remove.bind(t)),c.addEventListener("click",t.remove.bind(t)),n.appendChild(i),n.appendChild(c),t.appendChild(n),t},prompt:function(e){var t=l(e),n=document.createElement("div"),i=document.createElement("button"),c=document.createElement("input"),d=t.querySelector("."+o),u=e.cancelHandler,h=e.okHandler
return n.classList.add(a),i.innerHTML=e.okText||"Ok",i.classList.add(s),i.classList.add(r),c.classList.add("cdx-notify__input"),e.placeholder&&c.setAttribute("placeholder",e.placeholder),e.default&&(c.value=e.default),e.inputType&&(c.type=e.inputType),u&&"function"==typeof u&&d.addEventListener("click",u),h&&"function"==typeof h&&i.addEventListener("click",(function(){h(c.value)})),i.addEventListener("click",t.remove.bind(t)),n.appendChild(c),n.appendChild(i),t.appendChild(n),t},getWrapper:function(){var e=document.createElement("DIV")
return e.classList.add("cdx-notifies"),e}})}])
const se=o(re.exports)
class ae{show(e){se.show(e)}}var le={exports:{}}
le.exports=function(){function e(e){var t=e.tags
if(!Object.keys(t).map((function(e){return typeof t[e]})).every((function(e){return"object"===e||"boolean"===e||"function"===e})))throw new Error("The configuration was invalid")
this.config=e}var t=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"]
function n(e){return-1!==t.indexOf(e.nodeName)}var i=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"]
function o(e){return-1!==i.indexOf(e.nodeName)}function r(e,t,n){return"function"==typeof e.tags[t]?e.tags[t](n):e.tags[t]}function s(e,t){return typeof t>"u"||"boolean"==typeof t&&!t}function a(e,t,n){var i=e.name.toLowerCase()
return!0!==t&&("function"==typeof t[i]?!t[i](e.value,n):typeof t[i]>"u"||!1===t[i]||"string"==typeof t[i]&&t[i]!==e.value)}return e.prototype.clean=function(e){const t=document.implementation.createHTMLDocument(),n=t.createElement("div")
return n.innerHTML=e,this._sanitize(t,n),n.innerHTML},e.prototype._sanitize=function(e,t){var i=function(e,t){return e.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(e,t),l=i.firstChild()
if(l)do{if(l.nodeType!==Node.TEXT_NODE){if(l.nodeType===Node.COMMENT_NODE){t.removeChild(l),this._sanitize(e,t)
break}var c,d=o(l)
d&&(c=Array.prototype.some.call(l.childNodes,n))
var u=!!t.parentNode,h=n(t)&&n(l)&&u,p=l.nodeName.toLowerCase(),f=r(this.config,p,l)
if(d&&c||s(0,f)||!this.config.keepNestedBlockElements&&h){if("SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName)for(;l.childNodes.length>0;)t.insertBefore(l.childNodes[0],l)
t.removeChild(l),this._sanitize(e,t)
break}for(var m=0;m<l.attributes.length;m+=1){var g=l.attributes[m]
a(g,f,l)&&(l.removeAttribute(g.name),m-=1)}this._sanitize(e,l)}else if(""===l.data.trim()&&(l.previousElementSibling&&n(l.previousElementSibling)||l.nextElementSibling&&n(l.nextElementSibling))){t.removeChild(l),this._sanitize(e,t)
break}}while(l=i.nextSibling())},e}()
const ce=o(le.exports)
function de(e,t){return e.map((e=>{const n=f(t)?t(e.tool):t
return y(n)||(e.data=he(e.data,n)),e}))}function ue(e,t={}){return new ce({tags:t}).clean(e)}function he(e,t){return Array.isArray(e)?function(e,t){return e.map((e=>he(e,t)))}(e,t):m(e)?function(e,t){const n={}
for(const i in e){if(!Object.prototype.hasOwnProperty.call(e,i))continue
const o=e[i],r=pe(t[i])?t[i]:t
n[i]=he(o,r)}return n}(e,t):g(e)?function(e,t){return m(t)?ue(e,t):!1===t?ue(e,{}):e}(e,t):e}function pe(e){return m(e)||function(e){return"boolean"===p(e)}(e)||f(e)}var fe={exports:{}}
!function(e){window,e.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){n.r(t),n.d(t,"default",(function(){return i}))
class i{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.handleWindowScroll=()=>{this.showed&&this.hide(!0)},this.loadStyles(),this.prepare(),window.addEventListener("scroll",this.handleWindowScroll,{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(e,t,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout)
const i=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n)
if(i.hidingDelay&&(this.hidingDelay=i.hidingDelay),this.nodes.content.innerHTML="","string"==typeof t)this.nodes.content.appendChild(document.createTextNode(t))
else{if(!(t instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof t+" given.")
this.nodes.content.appendChild(t)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),i.placement){case"top":this.placeTop(e,i)
break
case"left":this.placeLeft(e,i)
break
case"right":this.placeRight(e,i)
break
default:this.placeBottom(e,i)}i&&i.delay?this.showingTimeout=setTimeout((()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0}),i.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(e=!1){if(this.hidingDelay&&!e)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout((()=>{this.hide(!0)}),this.hidingDelay))
this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(e,t,n){e.addEventListener("mouseenter",(()=>{this.show(e,t,n)})),e.addEventListener("mouseleave",(()=>{this.hide()}))}destroy(){this.nodes.wrapper.remove(),window.removeEventListener("scroll",this.handleWindowScroll)}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const e="codex-tooltips-style"
if(document.getElementById(e))return
const t=n(2),i=this.make("style",null,{textContent:t.toString(),id:e})
this.prepend(document.head,i)}placeBottom(e,t){const n=e.getBoundingClientRect(),i=n.left+e.clientWidth/2-this.nodes.wrapper.offsetWidth/2,o=n.bottom+window.pageYOffset+this.offsetTop+t.marginTop
this.applyPlacement("bottom",i,o)}placeTop(e,t){const n=e.getBoundingClientRect(),i=n.left+e.clientWidth/2-this.nodes.wrapper.offsetWidth/2,o=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop
this.applyPlacement("top",i,o)}placeLeft(e,t){const n=e.getBoundingClientRect(),i=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-t.marginLeft,o=n.top+window.pageYOffset+e.clientHeight/2-this.nodes.wrapper.offsetHeight/2
this.applyPlacement("left",i,o)}placeRight(e,t){const n=e.getBoundingClientRect(),i=n.right+this.offsetRight+t.marginRight,o=n.top+window.pageYOffset+e.clientHeight/2-this.nodes.wrapper.offsetHeight/2
this.applyPlacement("right",i,o)}applyPlacement(e,t,n){this.nodes.wrapper.classList.add(this.CSS.placement[e]),this.nodes.wrapper.style.left=t+"px",this.nodes.wrapper.style.top=n+"px"}make(e,t=null,n={}){const i=document.createElement(e)
Array.isArray(t)?i.classList.add(...t):t&&i.classList.add(t)
for(const o in n)n.hasOwnProperty(o)&&(i[o]=n[o])
return i}append(e,t){Array.isArray(t)?t.forEach((t=>e.appendChild(t))):e.appendChild(t)}prepend(e,t){Array.isArray(t)?(t=t.reverse()).forEach((t=>e.prepend(t))):e.prepend(t)}}},function(e,t){e.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default}(fe)
const me=o(fe.exports)
let ge=null
function be(){ge||(ge=new me)}function ve(e=!1){be(),null==ge||ge.hide(e)}function ye(e,t,n){be(),null==ge||ge.onHover(e,t,n)}const we=function e(t,n){const i={}
return Object.entries(t).forEach((([t,o])=>{if(m(o)){const r=n?`${n}.${t}`:t
Object.values(o).every((e=>g(e)))?i[t]=r:i[t]=e(o,r)}else i[t]=o})),i}(L),ke=class e{constructor(e,t){this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=t}get currentItem(){return-1===this.cursor?null:this.items[this.cursor]}setCursor(e){e<this.items.length&&e>=-1&&(this.dropCursor(),this.cursor=e,this.items[this.cursor].classList.add(this.focusedCssClass))}setItems(e){this.items=e}next(){this.cursor=this.leafNodesAndReturnIndex(e.directions.RIGHT)}previous(){this.cursor=this.leafNodesAndReturnIndex(e.directions.LEFT)}dropCursor(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}leafNodesAndReturnIndex(t){if(0===this.items.length)return this.cursor
let n=this.cursor
return-1===n?n=t===e.directions.RIGHT?-1:0:this.items[n].classList.remove(this.focusedCssClass),n=t===e.directions.RIGHT?(n+1)%this.items.length:(this.items.length+n-1)%this.items.length,B.canSetCaret(this.items[n])&&_((()=>q.setCursor(this.items[n])),50)(),this.items[n].classList.add(this.focusedCssClass),n}}
ke.directions={RIGHT:"right",LEFT:"left"}
let _e=ke
class xe{constructor(e){this.iterator=null,this.activated=!1,this.flipCallbacks=[],this.onKeyDown=e=>{if(this.isEventReadyForHandling(e))switch(xe.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case 9:this.handleTabPress(e)
break
case 37:case l:this.flipLeft()
break
case 39:case c:this.flipRight()
break
case a:this.handleEnterPress(e)}},this.iterator=new _e(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback,this.allowedKeys=e.allowedKeys||xe.usedKeys}get isActivated(){return this.activated}static get usedKeys(){return[9,37,39,a,l,c]}activate(e,t){this.activated=!0,e&&this.iterator.setItems(e),void 0!==t&&this.iterator.setCursor(t),document.addEventListener("keydown",this.onKeyDown,!0)}deactivate(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}focusFirst(){this.dropCursor(),this.flipRight()}flipLeft(){this.iterator.previous(),this.flipCallback()}flipRight(){this.iterator.next(),this.flipCallback()}hasFocus(){return!!this.iterator.currentItem}onFlip(e){this.flipCallbacks.push(e)}removeOnFlip(e){this.flipCallbacks=this.flipCallbacks.filter((t=>t!==e))}dropCursor(){this.iterator.dropCursor()}isEventReadyForHandling(e){return this.activated&&this.allowedKeys.includes(e.keyCode)}handleTabPress(e){switch(e.shiftKey?_e.directions.LEFT:_e.directions.RIGHT){case _e.directions.RIGHT:this.flipRight()
break
case _e.directions.LEFT:this.flipLeft()}}handleEnterPress(e){this.activated&&(this.iterator.currentItem&&(e.stopPropagation(),e.preventDefault(),this.iterator.currentItem.click()),f(this.activateCallback)&&this.activateCallback(this.iterator.currentItem))}flipCallback(){this.iterator.currentItem&&this.iterator.currentItem.scrollIntoViewIfNeeded(),this.flipCallbacks.forEach((e=>e()))}}const Ce='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>',Ee='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>'
function Se(e){return(t,n)=>[[e,t].filter((e=>!!e)).join("__"),n].filter((e=>!!e)).join("--")}const Te=Se("ce-hint"),Oe={root:Te(),alignedStart:Te(null,"align-left"),alignedCenter:Te(null,"align-center"),title:Te("title"),description:Te("description")}
class Me{constructor(e){this.nodes={root:B.make("div",[Oe.root,"center"===e.alignment?Oe.alignedCenter:Oe.alignedStart]),title:B.make("div",Oe.title,{textContent:e.title})},this.nodes.root.appendChild(this.nodes.title),void 0!==e.description&&(this.nodes.description=B.make("div",Oe.description,{textContent:e.description}),this.nodes.root.appendChild(this.nodes.description))}getElement(){return this.nodes.root}}class Ae{constructor(e){this.params=e}get name(){if(void 0!==this.params&&"name"in this.params)return this.params.name}destroy(){ve()}onChildrenOpen(){var e
void 0!==this.params&&"children"in this.params&&"function"==typeof(null==(e=this.params.children)?void 0:e.onOpen)&&this.params.children.onOpen()}onChildrenClose(){var e
void 0!==this.params&&"children"in this.params&&"function"==typeof(null==(e=this.params.children)?void 0:e.onClose)&&this.params.children.onClose()}handleClick(){var e,t
void 0!==this.params&&"onActivate"in this.params&&(null==(t=(e=this.params).onActivate)||t.call(e,this.params))}addHint(e,t){ye(e,new Me(t).getElement(),{placement:t.position,hidingDelay:100})}get children(){var e
return void 0!==this.params&&"children"in this.params&&void 0!==(null==(e=this.params.children)?void 0:e.items)?this.params.children.items:[]}get hasChildren(){return this.children.length>0}get isChildrenOpen(){var e
return void 0!==this.params&&"children"in this.params&&!0===(null==(e=this.params.children)?void 0:e.isOpen)}get isChildrenFlippable(){var e
return!(void 0===this.params||!("children"in this.params)||!1===(null==(e=this.params.children)?void 0:e.isFlippable))}get isChildrenSearchable(){var e
return void 0!==this.params&&"children"in this.params&&!0===(null==(e=this.params.children)?void 0:e.searchable)}get closeOnActivate(){return void 0!==this.params&&"closeOnActivate"in this.params&&this.params.closeOnActivate}get isActive(){return void 0!==this.params&&"isActive"in this.params&&("function"==typeof this.params.isActive?this.params.isActive():!0===this.params.isActive)}}const Re=Se("ce-popover-item"),Ie={container:Re(),active:Re(null,"active"),disabled:Re(null,"disabled"),focused:Re(null,"focused"),hidden:Re(null,"hidden"),confirmationState:Re(null,"confirmation"),noHover:Re(null,"no-hover"),noFocus:Re(null,"no-focus"),title:Re("title"),secondaryTitle:Re("secondary-title"),icon:Re("icon"),iconTool:Re("icon","tool"),iconChevronRight:Re("icon","chevron-right"),wobbleAnimation:Se("wobble")()}
class Be extends Ae{constructor(e,t){super(e),this.params=e,this.nodes={root:null,icon:null},this.confirmationState=null,this.removeSpecialFocusBehavior=()=>{var e
null==(e=this.nodes.root)||e.classList.remove(Ie.noFocus)},this.removeSpecialHoverBehavior=()=>{var e
null==(e=this.nodes.root)||e.classList.remove(Ie.noHover)},this.onErrorAnimationEnd=()=>{var e,t
null==(e=this.nodes.icon)||e.classList.remove(Ie.wobbleAnimation),null==(t=this.nodes.icon)||t.removeEventListener("animationend",this.onErrorAnimationEnd)},this.nodes.root=this.make(e,t)}get isDisabled(){return!0===this.params.isDisabled}get toggle(){return this.params.toggle}get title(){return this.params.title}get isConfirmationStateEnabled(){return null!==this.confirmationState}get isFocused(){return null!==this.nodes.root&&this.nodes.root.classList.contains(Ie.focused)}getElement(){return this.nodes.root}handleClick(){this.isConfirmationStateEnabled&&null!==this.confirmationState?this.activateOrEnableConfirmationMode(this.confirmationState):this.activateOrEnableConfirmationMode(this.params)}toggleActive(e){var t
null==(t=this.nodes.root)||t.classList.toggle(Ie.active,e)}toggleHidden(e){var t
null==(t=this.nodes.root)||t.classList.toggle(Ie.hidden,e)}reset(){this.isConfirmationStateEnabled&&this.disableConfirmationMode()}onFocus(){this.disableSpecialHoverAndFocusBehavior()}make(e,t){var n,i
const o=(null==t?void 0:t.wrapperTag)||"div",r=B.make(o,Ie.container,{type:"button"===o?"button":void 0})
return e.name&&(r.dataset.itemName=e.name),this.nodes.icon=B.make("div",[Ie.icon,Ie.iconTool],{innerHTML:e.icon||'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>'}),r.appendChild(this.nodes.icon),void 0!==e.title&&r.appendChild(B.make("div",Ie.title,{innerHTML:e.title||""})),e.secondaryLabel&&r.appendChild(B.make("div",Ie.secondaryTitle,{textContent:e.secondaryLabel})),this.hasChildren&&r.appendChild(B.make("div",[Ie.icon,Ie.iconChevronRight],{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>'})),this.isActive&&r.classList.add(Ie.active),e.isDisabled&&r.classList.add(Ie.disabled),void 0!==e.hint&&!1!==(null==(n=null==t?void 0:t.hint)?void 0:n.enabled)&&this.addHint(r,{...e.hint,position:(null==(i=null==t?void 0:t.hint)?void 0:i.position)||"right"}),r}enableConfirmationMode(e){if(null===this.nodes.root)return
const t={...this.params,...e,confirmation:"confirmation"in e?e.confirmation:void 0},n=this.make(t)
this.nodes.root.innerHTML=n.innerHTML,this.nodes.root.classList.add(Ie.confirmationState),this.confirmationState=e,this.enableSpecialHoverAndFocusBehavior()}disableConfirmationMode(){if(null===this.nodes.root)return
const e=this.make(this.params)
this.nodes.root.innerHTML=e.innerHTML,this.nodes.root.classList.remove(Ie.confirmationState),this.confirmationState=null,this.disableSpecialHoverAndFocusBehavior()}enableSpecialHoverAndFocusBehavior(){var e,t,n
null==(e=this.nodes.root)||e.classList.add(Ie.noHover),null==(t=this.nodes.root)||t.classList.add(Ie.noFocus),null==(n=this.nodes.root)||n.addEventListener("mouseleave",this.removeSpecialHoverBehavior,{once:!0})}disableSpecialHoverAndFocusBehavior(){var e
this.removeSpecialFocusBehavior(),this.removeSpecialHoverBehavior(),null==(e=this.nodes.root)||e.removeEventListener("mouseleave",this.removeSpecialHoverBehavior)}activateOrEnableConfirmationMode(e){var t
if("confirmation"in e&&void 0!==e.confirmation)this.enableConfirmationMode(e.confirmation)
else try{null==(t=e.onActivate)||t.call(e,e),this.disableConfirmationMode()}catch{this.animateError()}}animateError(){var e,t,n
null!=(e=this.nodes.icon)&&e.classList.contains(Ie.wobbleAnimation)||(null==(t=this.nodes.icon)||t.classList.add(Ie.wobbleAnimation),null==(n=this.nodes.icon)||n.addEventListener("animationend",this.onErrorAnimationEnd))}}const Pe=Se("ce-popover-item-separator"),Le={container:Pe(),line:Pe("line"),hidden:Pe(null,"hidden")}
class je extends Ae{constructor(){super(),this.nodes={root:B.make("div",Le.container),line:B.make("div",Le.line)},this.nodes.root.appendChild(this.nodes.line)}getElement(){return this.nodes.root}toggleHidden(e){var t
null==(t=this.nodes.root)||t.classList.toggle(Le.hidden,e)}}var Ne=(e=>(e.Closed="closed",e.ClosedOnActivate="closed-on-activate",e))(Ne||{})
const De=Se("ce-popover"),Fe={popover:De(),popoverContainer:De("container"),popoverOpenTop:De(null,"open-top"),popoverOpenLeft:De(null,"open-left"),popoverOpened:De(null,"opened"),search:De("search"),nothingFoundMessage:De("nothing-found-message"),nothingFoundMessageDisplayed:De("nothing-found-message","displayed"),items:De("items"),overlay:De("overlay"),overlayHidden:De("overlay","hidden"),popoverNested:De(null,"nested"),getPopoverNestedClass:e=>De(null,`nested-level-${e.toString()}`),popoverInline:De(null,"inline"),popoverHeader:De("header")}
var ze=(e=>(e.NestingLevel="--nesting-level",e.PopoverHeight="--popover-height",e.InlinePopoverWidth="--inline-popover-width",e.TriggerItemLeft="--trigger-item-left",e.TriggerItemTop="--trigger-item-top",e))(ze||{})
const He=Se("ce-popover-item-html"),Ue={root:He(),hidden:He(null,"hidden")}
class qe extends Ae{constructor(e,t){var n,i
super(e),this.nodes={root:B.make("div",Ue.root)},this.nodes.root.appendChild(e.element),e.name&&(this.nodes.root.dataset.itemName=e.name),void 0!==e.hint&&!1!==(null==(n=null==t?void 0:t.hint)?void 0:n.enabled)&&this.addHint(this.nodes.root,{...e.hint,position:(null==(i=null==t?void 0:t.hint)?void 0:i.position)||"right"})}getElement(){return this.nodes.root}toggleHidden(e){var t
null==(t=this.nodes.root)||t.classList.toggle(Ue.hidden,e)}getControls(){const e=this.nodes.root.querySelectorAll(`button, ${B.allInputsSelector}`)
return Array.from(e)}}class $e extends F{constructor(e,t={}){super(),this.params=e,this.itemsRenderParams=t,this.listeners=new H,this.messages={nothingFound:"Nothing found",search:"Search"},this.items=this.buildItems(e.items),e.messages&&(this.messages={...this.messages,...e.messages}),this.nodes={},this.nodes.popoverContainer=B.make("div",[Fe.popoverContainer]),this.nodes.nothingFoundMessage=B.make("div",[Fe.nothingFoundMessage],{textContent:this.messages.nothingFound}),this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage),this.nodes.items=B.make("div",[Fe.items]),this.items.forEach((e=>{const t=e.getElement()
null!==t&&this.nodes.items.appendChild(t)})),this.nodes.popoverContainer.appendChild(this.nodes.items),this.listeners.on(this.nodes.popoverContainer,"click",(e=>this.handleClick(e))),this.nodes.popover=B.make("div",[Fe.popover,this.params.class]),this.nodes.popover.appendChild(this.nodes.popoverContainer)}get itemsDefault(){return this.items.filter((e=>e instanceof Be))}getElement(){return this.nodes.popover}show(){this.nodes.popover.classList.add(Fe.popoverOpened),void 0!==this.search&&this.search.focus()}hide(){this.nodes.popover.classList.remove(Fe.popoverOpened),this.nodes.popover.classList.remove(Fe.popoverOpenTop),this.itemsDefault.forEach((e=>e.reset())),void 0!==this.search&&this.search.clear(),this.emit(Ne.Closed)}destroy(){var e
this.items.forEach((e=>e.destroy())),this.nodes.popover.remove(),this.listeners.removeAll(),null==(e=this.search)||e.destroy()}activateItemByName(e){const t=this.items.find((t=>t.name===e))
this.handleItemClick(t)}buildItems(e){return e.map((e=>{switch(e.type){case te.Separator:return new je
case te.Html:return new qe(e,this.itemsRenderParams[te.Html])
default:return new Be(e,this.itemsRenderParams[te.Default])}}))}getTargetItem(e){return this.items.filter((e=>e instanceof Be||e instanceof qe)).find((t=>{const n=t.getElement()
return null!==n&&e.composedPath().includes(n)}))}handleItemClick(e){if(!("isDisabled"in e)||!e.isDisabled){if(e.hasChildren)return this.showNestedItems(e),void("handleClick"in e&&"function"==typeof e.handleClick&&e.handleClick())
this.itemsDefault.filter((t=>t!==e)).forEach((e=>e.reset())),"handleClick"in e&&"function"==typeof e.handleClick&&e.handleClick(),this.toggleItemActivenessIfNeeded(e),e.closeOnActivate&&(this.hide(),this.emit(Ne.ClosedOnActivate))}}handleClick(e){const t=this.getTargetItem(e)
void 0!==t&&this.handleItemClick(t)}toggleItemActivenessIfNeeded(e){if(e instanceof Be&&(!0===e.toggle&&e.toggleActive(),"string"==typeof e.toggle)){const t=this.itemsDefault.filter((t=>t.toggle===e.toggle))
if(1===t.length)return void e.toggleActive()
t.forEach((t=>{t.toggleActive(t===e)}))}}}var We=(e=>(e.Search="search",e))(We||{})
const Ke=Se("cdx-search-field"),Ve={wrapper:Ke(),icon:Ke("icon"),input:Ke("input")}
class Ye extends F{constructor({items:e,placeholder:t}){super(),this.listeners=new H,this.items=e,this.wrapper=B.make("div",Ve.wrapper)
const n=B.make("div",Ve.icon,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>'})
this.input=B.make("input",Ve.input,{placeholder:t,tabIndex:-1}),this.wrapper.appendChild(n),this.wrapper.appendChild(this.input),this.listeners.on(this.input,"input",(()=>{this.searchQuery=this.input.value,this.emit(We.Search,{query:this.searchQuery,items:this.foundItems})}))}getElement(){return this.wrapper}focus(){this.input.focus()}clear(){this.input.value="",this.searchQuery="",this.emit(We.Search,{query:"",items:this.foundItems})}destroy(){this.listeners.removeAll()}get foundItems(){return this.items.filter((e=>this.checkItem(e)))}checkItem(e){var t,n
const i=(null==(t=e.title)?void 0:t.toLowerCase())||"",o=null==(n=this.searchQuery)?void 0:n.toLowerCase()
return void 0!==o&&i.includes(o)}}var Xe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor
const Ze=class e extends $e{constructor(e,t){super(e,t),this.nestingLevel=0,this.nestedPopoverTriggerItem=null,this.previouslyHoveredItem=null,this.scopeElement=document.body,this.hide=()=>{var e
super.hide(),this.destroyNestedPopoverIfExists(),null==(e=this.flipper)||e.deactivate(),this.previouslyHoveredItem=null},this.onFlip=()=>{const e=this.itemsDefault.find((e=>e.isFocused))
null==e||e.onFocus()},this.onSearch=e=>{var t
const n=""===e.query,i=0===e.items.length
this.items.forEach((t=>{let o=!1
t instanceof Be?o=!e.items.includes(t):(t instanceof je||t instanceof qe)&&(o=i||!n),t.toggleHidden(o)})),this.toggleNothingFoundMessage(i)
const o=""===e.query?this.flippableElements:e.items.map((e=>e.getElement()))
null!=(t=this.flipper)&&t.isActivated&&(this.flipper.deactivate(),this.flipper.activate(o))},void 0!==e.nestingLevel&&(this.nestingLevel=e.nestingLevel),this.nestingLevel>0&&this.nodes.popover.classList.add(Fe.popoverNested),void 0!==e.scopeElement&&(this.scopeElement=e.scopeElement),null!==this.nodes.popoverContainer&&this.listeners.on(this.nodes.popoverContainer,"mouseover",(e=>this.handleHover(e))),e.searchable&&this.addSearch(),!1!==e.flippable&&(this.flipper=new xe({items:this.flippableElements,focusedItemClass:Ie.focused,allowedKeys:[9,l,c,a]}),this.flipper.onFlip(this.onFlip))}hasFocus(){return void 0!==this.flipper&&this.flipper.hasFocus()}get scrollTop(){return null===this.nodes.items?0:this.nodes.items.scrollTop}get offsetTop(){return null===this.nodes.popoverContainer?0:this.nodes.popoverContainer.offsetTop}show(){var e
this.nodes.popover.style.setProperty(ze.PopoverHeight,this.size.height+"px"),this.shouldOpenBottom||this.nodes.popover.classList.add(Fe.popoverOpenTop),this.shouldOpenRight||this.nodes.popover.classList.add(Fe.popoverOpenLeft),super.show(),null==(e=this.flipper)||e.activate(this.flippableElements)}destroy(){this.hide(),super.destroy()}showNestedItems(e){null!==this.nestedPopover&&void 0!==this.nestedPopover||(this.nestedPopoverTriggerItem=e,this.showNestedPopoverForItem(e))}handleHover(e){const t=this.getTargetItem(e)
void 0!==t&&this.previouslyHoveredItem!==t&&(this.destroyNestedPopoverIfExists(),this.previouslyHoveredItem=t,t.hasChildren&&this.showNestedPopoverForItem(t))}setTriggerItemPosition(e,t){const n=t.getElement(),i=(n?n.offsetTop:0)-this.scrollTop,o=this.offsetTop+i
e.style.setProperty(ze.TriggerItemTop,o+"px")}destroyNestedPopoverIfExists(){var e,t
void 0===this.nestedPopover||null===this.nestedPopover||(this.nestedPopover.off(Ne.ClosedOnActivate,this.hide),this.nestedPopover.hide(),this.nestedPopover.destroy(),this.nestedPopover.getElement().remove(),this.nestedPopover=null,null==(e=this.flipper)||e.activate(this.flippableElements),null==(t=this.nestedPopoverTriggerItem)||t.onChildrenClose())}showNestedPopoverForItem(t){var n
this.nestedPopover=new e({searchable:t.isChildrenSearchable,items:t.children,nestingLevel:this.nestingLevel+1,flippable:t.isChildrenFlippable,messages:this.messages}),t.onChildrenOpen(),this.nestedPopover.on(Ne.ClosedOnActivate,this.hide)
const i=this.nestedPopover.getElement()
return this.nodes.popover.appendChild(i),this.setTriggerItemPosition(i,t),i.style.setProperty(ze.NestingLevel,this.nestedPopover.nestingLevel.toString()),this.nestedPopover.show(),null==(n=this.flipper)||n.deactivate(),this.nestedPopover}get shouldOpenBottom(){if(void 0===this.nodes.popover||null===this.nodes.popover)return!1
const e=this.nodes.popoverContainer.getBoundingClientRect(),t=this.scopeElement.getBoundingClientRect(),n=this.size.height,i=e.top+n,o=e.top-n,r=Math.min(window.innerHeight,t.bottom)
return o<t.top||i<=r}get shouldOpenRight(){if(void 0===this.nodes.popover||null===this.nodes.popover)return!1
const e=this.nodes.popover.getBoundingClientRect(),t=this.scopeElement.getBoundingClientRect(),n=this.size.width,i=e.right+n,o=e.left-n,r=Math.min(window.innerWidth,t.right)
return o<t.left||i<=r}get size(){var e
const t={height:0,width:0}
if(null===this.nodes.popover)return t
const n=this.nodes.popover.cloneNode(!0)
n.style.visibility="hidden",n.style.position="absolute",n.style.top="-1000px",n.classList.add(Fe.popoverOpened),null==(e=n.querySelector("."+Fe.popoverNested))||e.remove(),document.body.appendChild(n)
const i=n.querySelector("."+Fe.popoverContainer)
return t.height=i.offsetHeight,t.width=i.offsetWidth,n.remove(),t}get flippableElements(){return this.items.map((e=>e instanceof Be?e.getElement():e instanceof qe?e.getControls():void 0)).flat().filter((e=>null!=e))}addSearch(){this.search=new Ye({items:this.itemsDefault,placeholder:this.messages.search}),this.search.on(We.Search,this.onSearch)
const e=this.search.getElement()
e.classList.add(Fe.search),this.nodes.popoverContainer.insertBefore(e,this.nodes.popoverContainer.firstChild)}toggleNothingFoundMessage(e){this.nodes.nothingFoundMessage.classList.toggle(Fe.nothingFoundMessageDisplayed,e)}};((e,t,n)=>{for(var i,o=Ge(t,n),r=e.length-1;r>=0;r--)(i=e[r])&&(o=i(t,n,o)||o)
o&&Xe(t,n,o)})([A],Ze.prototype,"size")
let Je=Ze
class Qe extends Je{constructor(e){const t=!R()
super({...e,class:Fe.popoverInline},{[te.Default]:{wrapperTag:"button",hint:{position:"top",alignment:"center",enabled:t}},[te.Html]:{hint:{position:"top",alignment:"center",enabled:t}}}),this.items.forEach((e=>{!(e instanceof Be)&&!(e instanceof qe)||e.hasChildren&&e.isChildrenOpen&&this.showNestedItems(e)}))}get offsetLeft(){return null===this.nodes.popoverContainer?0:this.nodes.popoverContainer.offsetLeft}show(){0===this.nestingLevel&&this.nodes.popover.style.setProperty(ze.InlinePopoverWidth,this.size.width+"px"),super.show()}handleHover(){}setTriggerItemPosition(e,t){const n=t.getElement(),i=n?n.offsetLeft:0,o=this.offsetLeft+i
e.style.setProperty(ze.TriggerItemLeft,o+"px")}showNestedItems(e){if(this.nestedPopoverTriggerItem===e)return this.destroyNestedPopoverIfExists(),void(this.nestedPopoverTriggerItem=null)
super.showNestedItems(e)}showNestedPopoverForItem(e){const t=super.showNestedPopoverForItem(e)
return t.getElement().classList.add(Fe.getPopoverNestedClass(t.nestingLevel)),t}handleItemClick(e){var t
e!==this.nestedPopoverTriggerItem&&(null==(t=this.nestedPopoverTriggerItem)||t.handleClick(),super.destroyNestedPopoverIfExists()),super.handleItemClick(e)}}const et=class e{constructor(){this.scrollPosition=null}lock(){I?this.lockHard():document.body.classList.add(e.CSS.scrollLocked)}unlock(){I?this.unlockHard():document.body.classList.remove(e.CSS.scrollLocked)}lockHard(){this.scrollPosition=window.pageYOffset,document.documentElement.style.setProperty("--window-scroll-offset",`${this.scrollPosition}px`),document.body.classList.add(e.CSS.scrollLockedHard)}unlockHard(){document.body.classList.remove(e.CSS.scrollLockedHard),null!==this.scrollPosition&&window.scrollTo(0,this.scrollPosition),this.scrollPosition=null}}
et.CSS={scrollLocked:"ce-scroll-locked",scrollLockedHard:"ce-scroll-locked--hard"}
let tt=et
const nt=Se("ce-popover-header"),it={root:nt(),text:nt("text"),backButton:nt("back-button")}
class ot{constructor({text:e,onBackButtonClick:t}){this.listeners=new H,this.text=e,this.onBackButtonClick=t,this.nodes={root:B.make("div",[it.root]),backButton:B.make("button",[it.backButton]),text:B.make("div",[it.text])},this.nodes.backButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>',this.nodes.root.appendChild(this.nodes.backButton),this.listeners.on(this.nodes.backButton,"click",this.onBackButtonClick),this.nodes.text.innerText=this.text,this.nodes.root.appendChild(this.nodes.text)}getElement(){return this.nodes.root}destroy(){this.nodes.root.remove(),this.listeners.destroy()}}class rt{constructor(){this.history=[]}push(e){this.history.push(e)}pop(){return this.history.pop()}get currentTitle(){return 0===this.history.length?"":this.history[this.history.length-1].title}get currentItems(){return 0===this.history.length?[]:this.history[this.history.length-1].items}reset(){for(;this.history.length>1;)this.pop()}}class st extends $e{constructor(e){super(e,{[te.Default]:{hint:{enabled:!1}},[te.Html]:{hint:{enabled:!1}}}),this.scrollLocker=new tt,this.history=new rt,this.isHidden=!0,this.nodes.overlay=B.make("div",[Fe.overlay,Fe.overlayHidden]),this.nodes.popover.insertBefore(this.nodes.overlay,this.nodes.popover.firstChild),this.listeners.on(this.nodes.overlay,"click",(()=>{this.hide()})),this.history.push({items:e.items})}show(){this.nodes.overlay.classList.remove(Fe.overlayHidden),super.show(),this.scrollLocker.lock(),this.isHidden=!1}hide(){this.isHidden||(super.hide(),this.nodes.overlay.classList.add(Fe.overlayHidden),this.scrollLocker.unlock(),this.history.reset(),this.isHidden=!0)}destroy(){super.destroy(),this.scrollLocker.unlock()}showNestedItems(e){this.updateItemsAndHeader(e.children,e.title),this.history.push({title:e.title,items:e.children})}updateItemsAndHeader(e,t){if(null!==this.header&&void 0!==this.header&&(this.header.destroy(),this.header=null),void 0!==t){this.header=new ot({text:t,onBackButtonClick:()=>{this.history.pop(),this.updateItemsAndHeader(this.history.currentItems,this.history.currentTitle)}})
const e=this.header.getElement()
null!==e&&this.nodes.popoverContainer.insertBefore(e,this.nodes.popoverContainer.firstChild)}this.items.forEach((e=>{var t
return null==(t=e.getElement())?void 0:t.remove()})),this.items=this.buildItems(e),this.items.forEach((e=>{var t
const n=e.getElement()
null!==n&&(null==(t=this.nodes.items)||t.appendChild(n))}))}}var at={exports:{}}
!function(e){window,e.exports=function(e){var t={}
function n(i){if(t[i])return t[i].exports
var o=t[i]={i:i,l:!1,exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e
var i=Object.create(null)
if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o))
return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.r(t)
var r=function(){function e(t){var n=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.commands={},this.keys={},this.name=t.name,this.parseShortcutName(t.name),this.element=t.on,this.callback=t.callback,this.executeShortcut=function(e){n.execute(e)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return o(e,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,".":190}}}]),o(e,[{key:"parseShortcutName",value:function(t){t=t.split("+")
for(var n=0;n<t.length;n++){t[n]=t[n].toUpperCase()
var i=!1
for(var o in e.supportedCommands)if(e.supportedCommands[o].includes(t[n])){i=this.commands[o]=!0
break}i||(this.keys[t[n]]=!0)}for(var r in e.supportedCommands)this.commands[r]||(this.commands[r]=!1)}},{key:"execute",value:function(t){var n,i={CMD:t.ctrlKey||t.metaKey,SHIFT:t.shiftKey,ALT:t.altKey},o=!0
for(n in this.commands)this.commands[n]!==i[n]&&(o=!1)
var r,s=!0
for(r in this.keys)s=s&&t.keyCode===e.keyCodes[r]
o&&s&&this.callback(t)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),e}()
t.default=r}]).default}(at)
const lt=o(at.exports),ct=new class{constructor(){this.registeredShortcuts=new Map}add(e){if(this.findShortcut(e.on,e.name))throw Error(`Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`)
const t=new lt({name:e.name,on:e.on,callback:e.handler}),n=this.registeredShortcuts.get(e.on)||[]
this.registeredShortcuts.set(e.on,[...n,t])}remove(e,t){const n=this.findShortcut(e,t)
if(!n)return
n.remove()
const i=this.registeredShortcuts.get(e)
this.registeredShortcuts.set(e,i.filter((e=>e!==n)))}findShortcut(e,t){return(this.registeredShortcuts.get(e)||[]).find((({name:e})=>e===t))}}
var dt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ht=(e,t,n,i)=>{for(var o,r=i>1?void 0:i?ut(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i?o(t,n,r):o(r))||r)
return i&&r&&dt(t,n,r),r},pt=(e=>(e.Opened="toolbox-opened",e.Closed="toolbox-closed",e.BlockAdded="toolbox-block-added",e))(pt||{})
const ft=class e extends F{constructor({api:t,tools:n,i18nLabels:i}){super(),this.opened=!1,this.listeners=new H,this.popover=null,this.handleMobileLayoutToggle=()=>{this.destroyPopover(),this.initPopover()},this.onPopoverClose=()=>{this.opened=!1,this.emit("toolbox-closed")},this.api=t,this.tools=n,this.i18nLabels=i,this.enableShortcuts(),this.nodes={toolbox:B.make("div",e.CSS.toolbox)},this.initPopover(),this.nodes.toolbox.setAttribute("data-cy","toolbox"),this.api.events.on(Y,this.handleMobileLayoutToggle)}get isEmpty(){return 0===this.toolsToBeDisplayed.length}static get CSS(){return{toolbox:"ce-toolbox"}}getElement(){return this.nodes.toolbox}hasFocus(){if(null!==this.popover)return"hasFocus"in this.popover?this.popover.hasFocus():void 0}destroy(){var e
super.destroy(),this.nodes&&this.nodes.toolbox&&this.nodes.toolbox.remove(),this.removeAllShortcuts(),null==(e=this.popover)||e.off(Ne.Closed,this.onPopoverClose),this.listeners.destroy(),this.api.events.off(Y,this.handleMobileLayoutToggle)}toolButtonActivated(e,t){this.insertNewBlock(e,t)}open(){var e
this.isEmpty||(null==(e=this.popover)||e.show(),this.opened=!0,this.emit("toolbox-opened"))}close(){var e
null==(e=this.popover)||e.hide(),this.opened=!1,this.emit("toolbox-closed")}toggle(){this.opened?this.close():this.open()}initPopover(){var e
const t=R()?st:Je
this.popover=new t({scopeElement:this.api.ui.nodes.redactor,searchable:!0,messages:{nothingFound:this.i18nLabels.nothingFound,search:this.i18nLabels.filter},items:this.toolboxItemsToBeDisplayed}),this.popover.on(Ne.Closed,this.onPopoverClose),null==(e=this.nodes.toolbox)||e.append(this.popover.getElement())}destroyPopover(){null!==this.popover&&(this.popover.hide(),this.popover.off(Ne.Closed,this.onPopoverClose),this.popover.destroy(),this.popover=null),null!==this.nodes.toolbox&&(this.nodes.toolbox.innerHTML="")}get toolsToBeDisplayed(){const e=[]
return this.tools.forEach((t=>{t.toolbox&&e.push(t)})),e}get toolboxItemsToBeDisplayed(){const e=(e,t,n=!0)=>({icon:e.icon,title:N.t(we.toolNames,e.title||E(t.name)),name:t.name,onActivate:()=>{this.toolButtonActivated(t.name,e.data)},secondaryLabel:t.shortcut&&n?T(t.shortcut):""})
return this.toolsToBeDisplayed.reduce(((t,n)=>(Array.isArray(n.toolbox)?n.toolbox.forEach(((i,o)=>{t.push(e(i,n,0===o))})):void 0!==n.toolbox&&t.push(e(n.toolbox,n)),t)),[])}enableShortcuts(){this.toolsToBeDisplayed.forEach((e=>{const t=e.shortcut
t&&this.enableShortcutForTool(e.name,t)}))}enableShortcutForTool(e,t){ct.add({name:t,on:this.api.ui.nodes.redactor,handler:async t=>{t.preventDefault()
const n=this.api.blocks.getCurrentBlockIndex(),i=this.api.blocks.getBlockByIndex(n)
if(i)try{const t=await this.api.blocks.convert(i.id,e)
return void this.api.caret.setToBlock(t,"end")}catch{}this.insertNewBlock(e)}})}removeAllShortcuts(){this.toolsToBeDisplayed.forEach((e=>{const t=e.shortcut
t&&ct.remove(this.api.ui.nodes.redactor,t)}))}async insertNewBlock(e,t){const n=this.api.blocks.getCurrentBlockIndex(),i=this.api.blocks.getBlockByIndex(n)
if(!i)return
const o=i.isEmpty?n:n+1
let r
if(t){const n=await this.api.blocks.composeBlockData(e)
r=Object.assign(n,t)}const s=this.api.blocks.insert(e,r,void 0,o,void 0,i.isEmpty)
s.call(ne.APPEND_CALLBACK),this.api.caret.setToBlock(o),this.emit("toolbox-block-added",{block:s}),this.api.toolbar.close()}}
ht([A],ft.prototype,"toolsToBeDisplayed",1),ht([A],ft.prototype,"toolboxItemsToBeDisplayed",1)
let mt=ft
const gt="block hovered"
var bt=(e=>(e[e.Block=0]="Block",e[e.Inline=1]="Inline",e[e.Tune=2]="Tune",e))(bt||{}),vt=(e=>(e.Shortcut="shortcut",e.Toolbox="toolbox",e.EnabledInlineTools="inlineToolbar",e.EnabledBlockTunes="tunes",e.Config="config",e))(vt||{}),yt=(e=>(e.Shortcut="shortcut",e.SanitizeConfig="sanitize",e))(yt||{}),wt=(e=>(e.IsEnabledLineBreaks="enableLineBreaks",e.Toolbox="toolbox",e.ConversionConfig="conversionConfig",e.IsReadOnlySupported="isReadOnlySupported",e.PasteConfig="pasteConfig",e))(wt||{}),kt=(e=>(e.IsInline="isInline",e.Title="title",e.IsReadOnlySupported="isReadOnlySupported",e))(kt||{}),_t=(e=>(e.IsTune="isTune",e))(_t||{})
class xt{constructor({name:e,constructable:t,config:n,api:i,isDefault:o,isInternal:r=!1,defaultPlaceholder:s}){this.api=i,this.name=e,this.constructable=t,this.config=n,this.isDefault=o,this.isInternal=r,this.defaultPlaceholder=s}get settings(){const e=this.config.config||{}
return this.isDefault&&!("placeholder"in e)&&this.defaultPlaceholder&&(e.placeholder=this.defaultPlaceholder),e}reset(){if(f(this.constructable.reset))return this.constructable.reset()}prepare(){if(f(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings})}get shortcut(){const e=this.constructable.shortcut
return this.config.shortcut||e}get sanitizeConfig(){return this.constructable.sanitize||{}}isInline(){return this.type===bt.Inline}isBlock(){return this.type===bt.Block}isTune(){return this.type===bt.Tune}}function Ct(){const e=window.getSelection()
if(null===e)return[null,0]
let t=e.focusNode,n=e.focusOffset
return null===t?[null,0]:(t.nodeType!==Node.TEXT_NODE&&t.childNodes.length>0&&(t.childNodes[n]?(t=t.childNodes[n],n=0):(t=t.childNodes[n-1],n=t.textContent.length)),[t,n])}function Et(e,t,n,i){const o=document.createRange()
"left"===i?(o.setStart(e,0),o.setEnd(t,n)):(o.setStart(t,n),o.setEnd(e,e.childNodes.length))
const r=o.cloneContents(),s=document.createElement("div")
return s.appendChild(r),function(e){return!/[^\t\n\r ]/.test(e)}(s.textContent||"")}function St(e){const t=B.getDeepestNode(e)
if(null===t||B.isEmpty(e))return!0
if(B.isNativeInput(t))return 0===t.selectionEnd
if(B.isEmpty(e))return!0
const[n,i]=Ct()
return null!==n&&Et(e,n,i,"left")}function Tt(e){const t=B.getDeepestNode(e,!0)
if(null===t)return!0
if(B.isNativeInput(t))return t.selectionEnd===t.value.length
const[n,i]=Ct()
return null!==n&&Et(e,n,i,"right")}var Ot={},Mt={},At={},Rt={},It={},Bt={}
Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.allInputsSelector=function(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(e){return'input[type="'.concat(e,'"]')})).join(", ")},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.allInputsSelector=void 0
var t=Bt
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})}(It)
var Pt={},Lt={}
Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.isNativeInput=function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNativeInput=void 0
var t=Lt
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return t.isNativeInput}})}(Pt)
var jt={},Nt={}
Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.append=function(e,t){Array.isArray(t)?t.forEach((function(t){e.appendChild(t)})):e.appendChild(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.append=void 0
var t=Nt
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return t.append}})}(jt)
var Dt={},Ft={}
Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.blockElements=function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.blockElements=void 0
var t=Ft
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return t.blockElements}})}(Dt)
var zt={},Ht={}
Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.calculateBaseline=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.fontSize),i=parseFloat(t.lineHeight)||1.2*n,o=parseFloat(t.paddingTop),r=parseFloat(t.borderTopWidth)
return parseFloat(t.marginTop)+r+o+(i-n)/2+.8*n},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateBaseline=void 0
var t=Ht
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return t.calculateBaseline}})}(zt)
var Ut={},qt={},$t={},Wt={}
Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.isContentEditable=function(e){return"true"===e.contentEditable},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isContentEditable=void 0
var t=Wt
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return t.isContentEditable}})}($t),Object.defineProperty(qt,"__esModule",{value:!0}),qt.canSetCaret=function(e){var t=!0
if((0,Kt.isNativeInput)(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=(0,Vt.isContentEditable)(e)
return t}
var Kt=Pt,Vt=$t
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.canSetCaret=void 0
var t=qt
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return t.canSetCaret}})}(Ut)
var Yt={},Xt={}
function Gt(){const e={win:!1,mac:!1,x11:!1,linux:!1},t=Object.keys(e).find((e=>-1!==window.navigator.appVersion.toLowerCase().indexOf(e)))
return void 0!==t&&(e[t]=!0),e}function Zt(e){return null!=e&&""!==e&&("object"!=typeof e||Object.keys(e).length>0)}function Jt(e){return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function Qt(e){return"function"===Jt(e)||"asyncfunction"===Jt(e)}function en(e){return"object"===Jt(e)}const tn=Object.freeze(Object.defineProperty({__proto__:null,PromiseQueue:class{constructor(){this.completed=Promise.resolve()}add(e){return new Promise(((t,n)=>{this.completed=this.completed.then(e).then(t).catch(n)}))}},beautifyShortcut:function(e){const t=Gt()
return e=e.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi,"+"),t.mac?e.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):e.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},cacheable:function(e,t,n){const i=void 0!==n.value?"value":"get",o=n[i],r=`#${t}Cache`
if(n[i]=function(...e){return void 0===this[r]&&(this[r]=o.apply(this,e)),this[r]},"get"===i&&n.set){const t=n.set
n.set=function(n){delete e[r],t.apply(this,n)}}return n},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)},copyTextToClipboard:function(e){const t=document.createElement("div")
t.style.position="absolute",t.style.left="-999px",t.style.bottom="-999px",t.innerHTML=e,document.body.appendChild(t)
const n=window.getSelection(),i=document.createRange()
if(i.selectNode(t),null===n)throw new Error("Cannot copy text to clipboard")
n.removeAllRanges(),n.addRange(i),document.execCommand("copy"),document.body.removeChild(t)},debounce:function(e,t,n){let i
return(...o)=>{const r=this,s=!0===n&&void 0!==i
window.clearTimeout(i),i=window.setTimeout((()=>{i=void 0,!0!==n&&e.apply(r,o)}),t),s&&e.apply(r,o)}},deepMerge:function e(t,...n){if(!n.length)return t
const i=n.shift()
if(en(t)&&en(i))for(const o in i)en(i[o])?(void 0===t[o]&&Object.assign(t,{[o]:{}}),e(t[o],i[o])):Object.assign(t,{[o]:i[o]})
return e(t,...n)},deprecationAssert:function(e,t,n){const i=`«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`
e&&console.warn(i)},getUserOS:Gt,getValidUrl:function(e){try{return new URL(e).href}catch{}return"//"===e.substring(0,2)?window.location.protocol+e:window.location.origin+e},isBoolean:function(e){return"boolean"===Jt(e)},isClass:function(e){return Qt(e)&&/^\s*class\s+/.test(e.toString())},isEmpty:function(e){return!Zt(e)},isFunction:Qt,isIosDevice:()=>typeof window<"u"&&null!==window.navigator&&Zt(window.navigator.platform)&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),isNumber:function(e){return"number"===Jt(e)},isObject:en,isPrintableKey:function(e){return e>47&&e<58||32===e||13===e||229===e||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223},isPromise:function(e){return Promise.resolve(e)===e},isString:function(e){return"string"===Jt(e)},isUndefined:function(e){return"undefined"===Jt(e)},keyCodes:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},mouseButtons:{LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},notEmpty:Zt,throttle:function(e,t,n=void 0){let i,o,r,s=null,a=0
n||(n={})
const l=function(){a=!1===n.leading?0:Date.now(),s=null,r=e.apply(i,o),null===s&&(i=o=null)}
return function(){const c=Date.now()
!a&&!1===n.leading&&(a=c)
const d=t-(c-a)
return i=this,o=arguments,d<=0||d>t?(s&&(clearTimeout(s),s=null),a=c,r=e.apply(i,o),null===s&&(i=o=null)):!s&&!1!==n.trailing&&(s=setTimeout(l,d)),r}},typeOf:Jt},Symbol.toStringTag,{value:"Module"})),nn=function(e){if(e.__esModule)return e
var t=e.default
if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}(tn)
Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.containsOnlyInlineElements=function(e){var t;(0,on.isString)(e)?(t=document.createElement("div")).innerHTML=e:t=e
var n=function(e){return!(0,rn.blockElements)().includes(e.tagName.toLowerCase())&&Array.from(e.children).every(n)}
return Array.from(t.children).every(n)}
var on=nn,rn=Dt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.containsOnlyInlineElements=void 0
var t=Xt
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return t.containsOnlyInlineElements}})}(Yt)
var sn={},an={},ln={},cn={}
Object.defineProperty(cn,"__esModule",{value:!0}),cn.make=function(e,t,n){var i
void 0===t&&(t=null),void 0===n&&(n={})
var o=document.createElement(e)
if(Array.isArray(t)){var r=t.filter((function(e){return void 0!==e}));(i=o.classList).add.apply(i,r)}else null!==t&&o.classList.add(t)
for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])
return o},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.make=void 0
var t=cn
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return t.make}})}(ln),Object.defineProperty(an,"__esModule",{value:!0}),an.fragmentToString=function(e){var t=(0,dn.make)("div")
return t.appendChild(e),t.innerHTML}
var dn=ln
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fragmentToString=void 0
var t=an
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return t.fragmentToString}})}(sn)
var un={},hn={}
Object.defineProperty(hn,"__esModule",{value:!0}),hn.getContentLength=function(e){var t,n
return(0,pn.isNativeInput)(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:null!==(n=null===(t=e.textContent)||void 0===t?void 0:t.length)&&void 0!==n?n:0}
var pn=Pt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContentLength=void 0
var t=hn
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return t.getContentLength}})}(un)
var fn={},mn={},gn=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(mn,"__esModule",{value:!0}),mn.getDeepestBlockElements=function e(t){return(0,bn.containsOnlyInlineElements)(t)?[t]:Array.from(t.children).reduce((function(t,n){return gn(gn([],t,!0),e(n),!0)}),[])}
var bn=Yt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestBlockElements=void 0
var t=mn
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return t.getDeepestBlockElements}})}(fn)
var vn={},yn={},wn={},kn={}
Object.defineProperty(kn,"__esModule",{value:!0}),kn.isLineBreakTag=function(e){return["BR","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLineBreakTag=void 0
var t=kn
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return t.isLineBreakTag}})}(wn)
var _n={},xn={}
Object.defineProperty(xn,"__esModule",{value:!0}),xn.isSingleTag=function(e){return["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(e.tagName)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isSingleTag=void 0
var t=xn
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return t.isSingleTag}})}(_n),Object.defineProperty(yn,"__esModule",{value:!0}),yn.getDeepestNode=function e(t,n){void 0===n&&(n=!1)
var i=n?"lastChild":"firstChild",o=n?"previousSibling":"nextSibling"
if(t.nodeType===Node.ELEMENT_NODE&&t[i]){var r=t[i]
if((0,Sn.isSingleTag)(r)&&!(0,Cn.isNativeInput)(r)&&!(0,En.isLineBreakTag)(r))if(r[o])r=r[o]
else{if(null===r.parentNode||!r.parentNode[o])return r.parentNode
r=r.parentNode[o]}return e(r,n)}return t}
var Cn=Pt,En=wn,Sn=_n
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDeepestNode=void 0
var t=yn
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return t.getDeepestNode}})}(vn)
var Tn={},On={},Mn=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o])
return e.concat(i||Array.prototype.slice.call(t))}
Object.defineProperty(On,"__esModule",{value:!0}),On.findAllInputs=function(e){return Array.from(e.querySelectorAll((0,In.allInputsSelector)())).reduce((function(e,t){return(0,Bn.isNativeInput)(t)||(0,An.containsOnlyInlineElements)(t)?Mn(Mn([],e,!0),[t],!1):Mn(Mn([],e,!0),(0,Rn.getDeepestBlockElements)(t),!0)}),[])}
var An=Yt,Rn=fn,In=It,Bn=Pt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.findAllInputs=void 0
var t=On
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return t.findAllInputs}})}(Tn)
var Pn={},Ln={}
Object.defineProperty(Ln,"__esModule",{value:!0}),Ln.isCollapsedWhitespaces=function(e){return!/[^\t\n\r ]/.test(e)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCollapsedWhitespaces=void 0
var t=Ln
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return t.isCollapsedWhitespaces}})}(Pn)
var jn={},Nn={}
Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.isElement=function(e){return!(0,Dn.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.ELEMENT_NODE}
var Dn=nn
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isElement=void 0
var t=Nn
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return t.isElement}})}(jn)
var Fn={},zn={},Hn={},Un={}
Object.defineProperty(Un,"__esModule",{value:!0}),Un.isLeaf=function(e){return null!==e&&0===e.childNodes.length},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isLeaf=void 0
var t=Un
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return t.isLeaf}})}(Hn)
var qn={},$n={}
Object.defineProperty($n,"__esModule",{value:!0}),$n.isNodeEmpty=function(e,t){var n=""
return!((0,Yn.isSingleTag)(e)&&!(0,Wn.isLineBreakTag)(e))&&((0,Kn.isElement)(e)&&(0,Vn.isNativeInput)(e)?n=e.value:null!==e.textContent&&(n=e.textContent.replace("​","")),void 0!==t&&(n=n.replace(new RegExp(t,"g"),"")),0===n.trim().length)}
var Wn=wn,Kn=jn,Vn=Pt,Yn=_n
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isNodeEmpty=void 0
var t=$n
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return t.isNodeEmpty}})}(qn),Object.defineProperty(zn,"__esModule",{value:!0}),zn.isEmpty=function(e,t){e.normalize()
for(var n=[e];n.length>0;){var i=n.shift()
if(i){if(e=i,(0,Xn.isLeaf)(e)&&!(0,Gn.isNodeEmpty)(e,t))return!1
n.push.apply(n,Array.from(e.childNodes))}}return!0}
var Xn=Hn,Gn=qn
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=void 0
var t=zn
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return t.isEmpty}})}(Fn)
var Zn={},Jn={}
Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.isFragment=function(e){return!(0,Qn.isNumber)(e)&&!!e&&!!e.nodeType&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}
var Qn=nn
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isFragment=void 0
var t=Jn
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return t.isFragment}})}(Zn)
var ei={},ti={}
Object.defineProperty(ti,"__esModule",{value:!0}),ti.isHTMLString=function(e){var t=(0,ni.make)("div")
return t.innerHTML=e,t.childElementCount>0}
var ni=ln
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isHTMLString=void 0
var t=ti
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return t.isHTMLString}})}(ei)
var ii={},oi={}
Object.defineProperty(oi,"__esModule",{value:!0}),oi.offset=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop,o=t.top+i,r=t.left+n
return{top:o,left:r,bottom:o+t.height,right:r+t.width}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.offset=void 0
var t=oi
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return t.offset}})}(ii)
var ri={},si={}
Object.defineProperty(si,"__esModule",{value:!0}),si.prepend=function(e,t){Array.isArray(t)?(t=t.reverse()).forEach((function(t){return e.prepend(t)})):e.prepend(t)},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=void 0
var t=si
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return t.prepend}})}(ri),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=e.offset=e.make=e.isLineBreakTag=e.isSingleTag=e.isNodeEmpty=e.isLeaf=e.isHTMLString=e.isFragment=e.isEmpty=e.isElement=e.isContentEditable=e.isCollapsedWhitespaces=e.findAllInputs=e.isNativeInput=e.allInputsSelector=e.getDeepestNode=e.getDeepestBlockElements=e.getContentLength=e.fragmentToString=e.containsOnlyInlineElements=e.canSetCaret=e.calculateBaseline=e.blockElements=e.append=void 0
var t=It
Object.defineProperty(e,"allInputsSelector",{enumerable:!0,get:function(){return t.allInputsSelector}})
var n=Pt
Object.defineProperty(e,"isNativeInput",{enumerable:!0,get:function(){return n.isNativeInput}})
var i=jt
Object.defineProperty(e,"append",{enumerable:!0,get:function(){return i.append}})
var o=Dt
Object.defineProperty(e,"blockElements",{enumerable:!0,get:function(){return o.blockElements}})
var r=zt
Object.defineProperty(e,"calculateBaseline",{enumerable:!0,get:function(){return r.calculateBaseline}})
var s=Ut
Object.defineProperty(e,"canSetCaret",{enumerable:!0,get:function(){return s.canSetCaret}})
var a=Yt
Object.defineProperty(e,"containsOnlyInlineElements",{enumerable:!0,get:function(){return a.containsOnlyInlineElements}})
var l=sn
Object.defineProperty(e,"fragmentToString",{enumerable:!0,get:function(){return l.fragmentToString}})
var c=un
Object.defineProperty(e,"getContentLength",{enumerable:!0,get:function(){return c.getContentLength}})
var d=fn
Object.defineProperty(e,"getDeepestBlockElements",{enumerable:!0,get:function(){return d.getDeepestBlockElements}})
var u=vn
Object.defineProperty(e,"getDeepestNode",{enumerable:!0,get:function(){return u.getDeepestNode}})
var h=Tn
Object.defineProperty(e,"findAllInputs",{enumerable:!0,get:function(){return h.findAllInputs}})
var p=Pn
Object.defineProperty(e,"isCollapsedWhitespaces",{enumerable:!0,get:function(){return p.isCollapsedWhitespaces}})
var f=$t
Object.defineProperty(e,"isContentEditable",{enumerable:!0,get:function(){return f.isContentEditable}})
var m=jn
Object.defineProperty(e,"isElement",{enumerable:!0,get:function(){return m.isElement}})
var g=Fn
Object.defineProperty(e,"isEmpty",{enumerable:!0,get:function(){return g.isEmpty}})
var b=Zn
Object.defineProperty(e,"isFragment",{enumerable:!0,get:function(){return b.isFragment}})
var v=ei
Object.defineProperty(e,"isHTMLString",{enumerable:!0,get:function(){return v.isHTMLString}})
var y=Hn
Object.defineProperty(e,"isLeaf",{enumerable:!0,get:function(){return y.isLeaf}})
var w=qn
Object.defineProperty(e,"isNodeEmpty",{enumerable:!0,get:function(){return w.isNodeEmpty}})
var k=wn
Object.defineProperty(e,"isLineBreakTag",{enumerable:!0,get:function(){return k.isLineBreakTag}})
var _=_n
Object.defineProperty(e,"isSingleTag",{enumerable:!0,get:function(){return _.isSingleTag}})
var x=ln
Object.defineProperty(e,"make",{enumerable:!0,get:function(){return x.make}})
var C=ii
Object.defineProperty(e,"offset",{enumerable:!0,get:function(){return C.offset}})
var E=ri
Object.defineProperty(e,"prepend",{enumerable:!0,get:function(){return E.prepend}})}(Rt)
var ai={}
Object.defineProperty(ai,"__esModule",{value:!0}),ai.getContenteditableSlice=function(e,t,n,i,o){var r
void 0===o&&(o=!1)
var s=document.createRange()
if("left"===i?(s.setStart(e,0),s.setEnd(t,n)):(s.setStart(t,n),s.setEnd(e,e.childNodes.length)),!0===o){var a=s.extractContents()
return(0,li.fragmentToString)(a)}var l=s.cloneContents(),c=document.createElement("div")
return c.appendChild(l),null!==(r=c.textContent)&&void 0!==r?r:""}
var li=Rt
Object.defineProperty(At,"__esModule",{value:!0}),At.checkContenteditableSliceForEmptiness=function(e,t,n,i){var o=(0,di.getContenteditableSlice)(e,t,n,i)
return(0,ci.isCollapsedWhitespaces)(o)}
var ci=Rt,di=ai
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkContenteditableSliceForEmptiness=void 0
var t=At
Object.defineProperty(e,"checkContenteditableSliceForEmptiness",{enumerable:!0,get:function(){return t.checkContenteditableSliceForEmptiness}})}(Mt)
var ui={}
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getContenteditableSlice=void 0
var t=ai
Object.defineProperty(e,"getContenteditableSlice",{enumerable:!0,get:function(){return t.getContenteditableSlice}})}(ui)
var hi={},pi={}
Object.defineProperty(pi,"__esModule",{value:!0}),pi.focus=function(e,t){var n,i
if(void 0===t&&(t=!0),(0,fi.isNativeInput)(e)){e.focus()
var o=t?0:e.value.length
e.setSelectionRange(o,o)}else{var r=document.createRange(),s=window.getSelection()
if(!s)return
var a=function(e){var t=document.createTextNode("")
e.appendChild(t),r.setStart(t,0),r.setEnd(t,0)},l=function(e){return null!=e},c=e.childNodes,d=t?c[0]:c[c.length-1]
if(l(d)){for(;l(d)&&d.nodeType!==Node.TEXT_NODE;)d=t?d.firstChild:d.lastChild
if(l(d)&&d.nodeType===Node.TEXT_NODE){var u=null!==(i=null===(n=d.textContent)||void 0===n?void 0:n.length)&&void 0!==i?i:0
o=t?0:u,r.setStart(d,o),r.setEnd(d,o)}else a(e)}else a(e)
s.removeAllRanges(),s.addRange(r)}}
var fi=Rt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.focus=void 0
var t=pi
Object.defineProperty(e,"focus",{enumerable:!0,get:function(){return t.focus}})}(hi)
var mi={},gi={}
Object.defineProperty(gi,"__esModule",{value:!0}),gi.getCaretNodeAndOffset=function(){var e=window.getSelection()
if(null===e)return[null,0]
var t=e.focusNode,n=e.focusOffset
return null===t?[null,0]:(t.nodeType!==Node.TEXT_NODE&&t.childNodes.length>0&&(void 0!==t.childNodes[n]?(t=t.childNodes[n],n=0):null!==(t=t.childNodes[n-1]).textContent&&(n=t.textContent.length)),[t,n])},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getCaretNodeAndOffset=void 0
var t=gi
Object.defineProperty(e,"getCaretNodeAndOffset",{enumerable:!0,get:function(){return t.getCaretNodeAndOffset}})}(mi)
var bi={},vi={}
Object.defineProperty(vi,"__esModule",{value:!0}),vi.getRange=function(){var e=window.getSelection()
return e&&e.rangeCount?e.getRangeAt(0):null},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=void 0
var t=vi
Object.defineProperty(e,"getRange",{enumerable:!0,get:function(){return t.getRange}})}(bi)
var yi={},wi={}
Object.defineProperty(wi,"__esModule",{value:!0}),wi.isCaretAtEndOfInput=function(e){var t=(0,ki.getDeepestNode)(e,!0)
if(null===t)return!0
if((0,ki.isNativeInput)(t))return t.selectionEnd===t.value.length
var n=(0,_i.getCaretNodeAndOffset)(),i=n[0],o=n[1]
return null!==i&&(0,xi.checkContenteditableSliceForEmptiness)(e,i,o,"right")}
var ki=Rt,_i=mi,xi=Mt
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCaretAtEndOfInput=void 0
var t=wi
Object.defineProperty(e,"isCaretAtEndOfInput",{enumerable:!0,get:function(){return t.isCaretAtEndOfInput}})}(yi)
var Ci={},Ei={}
Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.isCaretAtStartOfInput=function(e){var t=(0,Si.getDeepestNode)(e)
if(null===t||(0,Si.isEmpty)(e))return!0
if((0,Si.isNativeInput)(t))return 0===t.selectionEnd
if((0,Si.isEmpty)(e))return!0
var n=(0,Ti.getCaretNodeAndOffset)(),i=n[0],o=n[1]
return null!==i&&(0,Oi.checkContenteditableSliceForEmptiness)(e,i,o,"left")}
var Si=Rt,Ti=gi,Oi=At
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isCaretAtStartOfInput=void 0
var t=Ei
Object.defineProperty(e,"isCaretAtStartOfInput",{enumerable:!0,get:function(){return t.isCaretAtStartOfInput}})}(Ci)
var Mi={},Ai={}
Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.save=function(){var e=(0,Ii.getRange)(),t=(0,Ri.make)("span")
if(t.id="cursor",t.hidden=!0,e)return e.insertNode(t),function(){var n=window.getSelection()
n&&(e.setStartAfter(t),e.setEndAfter(t),n.removeAllRanges(),n.addRange(e),setTimeout((function(){t.remove()}),150))}}
var Ri=Rt,Ii=vi
!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.save=void 0
var t=Ai
Object.defineProperty(e,"save",{enumerable:!0,get:function(){return t.save}})}(Mi),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.save=e.isCaretAtStartOfInput=e.isCaretAtEndOfInput=e.getRange=e.getCaretNodeAndOffset=e.focus=e.getContenteditableSlice=e.checkContenteditableSliceForEmptiness=void 0
var t=Mt
Object.defineProperty(e,"checkContenteditableSliceForEmptiness",{enumerable:!0,get:function(){return t.checkContenteditableSliceForEmptiness}})
var n=ui
Object.defineProperty(e,"getContenteditableSlice",{enumerable:!0,get:function(){return n.getContenteditableSlice}})
var i=hi
Object.defineProperty(e,"focus",{enumerable:!0,get:function(){return i.focus}})
var o=mi
Object.defineProperty(e,"getCaretNodeAndOffset",{enumerable:!0,get:function(){return o.getCaretNodeAndOffset}})
var r=bi
Object.defineProperty(e,"getRange",{enumerable:!0,get:function(){return r.getRange}})
var s=yi
Object.defineProperty(e,"isCaretAtEndOfInput",{enumerable:!0,get:function(){return s.isCaretAtEndOfInput}})
var a=Ci
Object.defineProperty(e,"isCaretAtStartOfInput",{enumerable:!0,get:function(){return a.isCaretAtStartOfInput}})
var l=Mi
Object.defineProperty(e,"save",{enumerable:!0,get:function(){return l.save}})}(Ot)
class Bi{constructor(e){this.blocks=[],this.workingArea=e}get length(){return this.blocks.length}get array(){return this.blocks}get nodes(){return k(this.workingArea.children)}static set(e,t,n){return isNaN(Number(t))?(Reflect.set(e,t,n),!0):(e.insert(+t,n),!0)}static get(e,t){return isNaN(Number(t))?Reflect.get(e,t):e.get(+t)}push(e){this.blocks.push(e),this.insertToDOM(e)}swap(e,t){const n=this.blocks[t]
B.swap(this.blocks[e].holder,n.holder),this.blocks[t]=this.blocks[e],this.blocks[e]=n}move(e,t){const n=this.blocks.splice(t,1)[0],i=e-1,o=Math.max(0,i),r=this.blocks[o]
e>0?this.insertToDOM(n,"afterend",r):this.insertToDOM(n,"beforebegin",r),this.blocks.splice(e,0,n)
const s=this.composeBlockEvent("move",{fromIndex:t,toIndex:e})
n.call(ne.MOVED,s)}insert(e,t,n=!1){if(!this.length)return void this.push(t)
e>this.length&&(e=this.length),n&&(this.blocks[e].holder.remove(),this.blocks[e].call(ne.REMOVED))
const i=n?1:0
if(this.blocks.splice(e,i,t),e>0){const n=this.blocks[e-1]
this.insertToDOM(t,"afterend",n)}else{const n=this.blocks[e+1]
n?this.insertToDOM(t,"beforebegin",n):this.insertToDOM(t)}}replace(e,t){if(void 0===this.blocks[e])throw Error("Incorrect index")
this.blocks[e].holder.replaceWith(t.holder),this.blocks[e]=t}insertMany(e,t){const n=new DocumentFragment
for(const i of e)n.appendChild(i.holder)
if(this.length>0){if(t>0){const e=Math.min(t-1,this.length-1)
this.blocks[e].holder.after(n)}else 0===t&&this.workingArea.prepend(n)
this.blocks.splice(t,0,...e)}else this.blocks.push(...e),this.workingArea.appendChild(n)
e.forEach((e=>e.call(ne.RENDERED)))}remove(e){isNaN(e)&&(e=this.length-1),this.blocks[e].holder.remove(),this.blocks[e].call(ne.REMOVED),this.blocks.splice(e,1)}removeAll(){this.workingArea.innerHTML="",this.blocks.forEach((e=>e.call(ne.REMOVED))),this.blocks.length=0}insertAfter(e,t){const n=this.blocks.indexOf(e)
this.insert(n+1,t)}get(e){return this.blocks[e]}indexOf(e){return this.blocks.indexOf(e)}insertToDOM(e,t,n){t?n.holder.insertAdjacentElement(t,e.holder):this.workingArea.appendChild(e.holder),e.call(ne.RENDERED)}composeBlockEvent(e,t){return new CustomEvent(e,{detail:t})}}const Pi="block-removed",Li="block-added",ji="block-changed"
class Ni{constructor(){this.completed=Promise.resolve()}add(e){return new Promise(((t,n)=>{this.completed=this.completed.then(e).then(t).catch(n)}))}}class Di extends U{get positions(){return{START:"start",END:"end",DEFAULT:"default"}}static get CSS(){return{shadowCaret:"cdx-shadow-caret"}}setToBlock(e,t=this.positions.DEFAULT,n=0){var i
const{BlockManager:o,BlockSelection:r}=this.Editor
if(r.clearSelection(),!e.focusable)return null==(i=window.getSelection())||i.removeAllRanges(),r.selectBlock(e),void(o.currentBlock=e)
let s
switch(t){case this.positions.START:s=e.firstInput
break
case this.positions.END:s=e.lastInput
break
default:s=e.currentInput}if(!s)return
const a=B.getDeepestNode(s,t===this.positions.END),l=B.getContentLength(a)
switch(!0){case t===this.positions.START:n=0
break
case t===this.positions.END:case n>l:n=l}this.set(a,n),o.setCurrentBlockByChildNode(e.holder),o.currentBlock.currentInput=s}setToInput(e,t=this.positions.DEFAULT,n=0){const{currentBlock:i}=this.Editor.BlockManager,o=B.getDeepestNode(e)
switch(t){case this.positions.START:this.set(o,0)
break
case this.positions.END:this.set(o,B.getContentLength(o))
break
default:n&&this.set(o,n)}i.currentInput=e}set(e,t=0){const{top:n,bottom:i}=q.setCursor(e,t),{innerHeight:o}=window
n<0?window.scrollBy(0,n-30):i>o&&window.scrollBy(0,i-o+30)}setToTheLastBlock(){const e=this.Editor.BlockManager.lastBlock
if(e)if(e.tool.isDefault&&e.isEmpty)this.setToBlock(e)
else{const e=this.Editor.BlockManager.insertAtEnd()
this.setToBlock(e)}}extractFragmentFromCaretPosition(){const e=q.get()
if(e.rangeCount){const t=e.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput
if(t.deleteContents(),n){if(B.isNativeInput(n)){const e=n,t=document.createDocumentFragment(),i=e.value.substring(0,e.selectionStart),o=e.value.substring(e.selectionStart)
return t.textContent=o,e.value=i,t}{const e=t.cloneRange()
return e.selectNodeContents(n),e.setStart(t.endContainer,t.endOffset),e.extractContents()}}}}navigateNext(e=!1){const{BlockManager:t}=this.Editor,{currentBlock:n,nextBlock:i}=t
if(void 0===n)return!1
const{nextInput:o,currentInput:r}=n,s=void 0!==r?Tt(r):void 0
let a=i
const l=e||s||!n.focusable
if(o&&l)return this.setToInput(o,this.positions.START),!0
if(null===a){if(n.tool.isDefault||!l)return!1
a=t.insertAtEnd()}return!!l&&(this.setToBlock(a,this.positions.START),!0)}navigatePrevious(e=!1){const{currentBlock:t,previousBlock:n}=this.Editor.BlockManager
if(!t)return!1
const{previousInput:i,currentInput:o}=t,r=void 0!==o?St(o):void 0,s=e||r||!t.focusable
return i&&s?(this.setToInput(i,this.positions.END),!0):!(null===n||!s||(this.setToBlock(n,this.positions.END),0))}createShadow(e){const t=document.createElement("span")
t.classList.add(Di.CSS.shadowCaret),e.insertAdjacentElement("beforeend",t)}restoreCaret(e){const t=e.querySelector(`.${Di.CSS.shadowCaret}`)
if(!t)return;(new q).expandToTag(t)
const n=document.createRange()
n.selectNode(t),n.extractContents()}insertContentAtCaretPosition(e){const t=document.createDocumentFragment(),n=document.createElement("div"),i=q.get(),o=q.range
n.innerHTML=e,Array.from(n.childNodes).forEach((e=>t.appendChild(e))),0===t.childNodes.length&&t.appendChild(new Text)
const r=t.lastChild
o.deleteContents(),o.insertNode(t)
const s=document.createRange(),a=r.nodeType===Node.TEXT_NODE?r:r.firstChild
null!==a&&null!==a.textContent&&s.setStart(a,a.textContent.length),i.removeAllRanges(),i.addRange(s)}}const Fi=class e extends U{constructor(){super(...arguments),this.MIME_TYPE="application/x-editor-js",this.toolsTags={},this.tagsByTool={},this.toolsPatterns=[],this.toolsFiles={},this.exceptionList=[],this.processTool=e=>{try{const t=e.create({},{},!1)
if(!1===e.pasteConfig)return void this.exceptionList.push(e.name)
if(!f(t.onPaste))return
this.getTagsConfig(e),this.getFilesConfig(e),this.getPatternsConfig(e)}catch(t){u(`Paste handling for «${e.name}» Tool hasn't been set up because of the error`,"warn",t)}},this.handlePasteEvent=async e=>{const{BlockManager:t,Toolbar:n}=this.Editor,i=t.setCurrentBlockByChildNode(e.target)
!i||this.isNativeBehaviour(e.target)&&!e.clipboardData.types.includes("Files")||i&&this.exceptionList.includes(i.name)||(e.preventDefault(),this.processDataTransfer(e.clipboardData),n.close())}}async prepare(){this.processTools()}toggleReadOnly(e){e?this.unsetCallback():this.setCallback()}async processDataTransfer(e,t=!1){const{Tools:n}=this.Editor,i=e.types
if((i.includes?i.includes("Files"):i.contains("Files"))&&!y(this.toolsFiles))return void await this.processFiles(e.files)
const o=e.getData(this.MIME_TYPE),r=e.getData("text/plain")
let s=e.getData("text/html")
if(o)try{return void this.insertEditorJSData(JSON.parse(o))}catch{}t&&r.trim()&&s.trim()&&(s="<p>"+(s.trim()?s:r)+"</p>")
const a=Object.keys(this.toolsTags).reduce(((e,t)=>(e[t.toLowerCase()]=this.toolsTags[t].sanitizationConfig??{},e)),{}),l=ue(s,Object.assign({},a,n.getAllInlineToolsSanitizeConfig(),{br:{}}))
l.trim()&&l.trim()!==r&&B.isHTMLString(l)?await this.processText(l,!0):await this.processText(r)}async processText(e,t=!1){const{Caret:n,BlockManager:i}=this.Editor,o=t?this.processHTML(e):this.processPlain(e)
if(!o.length)return
if(1===o.length)return void(o[0].isBlock?this.processSingleBlock(o.pop()):this.processInlinePaste(o.pop()))
const r=i.currentBlock&&i.currentBlock.tool.isDefault&&i.currentBlock.isEmpty
o.map((async(e,t)=>this.insertBlock(e,0===t&&r))),i.currentBlock&&n.setToBlock(i.currentBlock,n.positions.END)}setCallback(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}unsetCallback(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}processTools(){const e=this.Editor.Tools.blockTools
Array.from(e.values()).forEach(this.processTool)}collectTagNames(e){return g(e)?[e]:m(e)?Object.keys(e):[]}getTagsConfig(e){if(!1===e.pasteConfig)return
const t=e.pasteConfig.tags||[],n=[]
t.forEach((t=>{const i=this.collectTagNames(t)
n.push(...i),i.forEach((n=>{if(Object.prototype.hasOwnProperty.call(this.toolsTags,n))return void u(`Paste handler for «${e.name}» Tool on «${n}» tag is skipped because it is already used by «${this.toolsTags[n].tool.name}» Tool.`,"warn")
const i=m(t)?t[n]:null
this.toolsTags[n.toUpperCase()]={tool:e,sanitizationConfig:i}}))})),this.tagsByTool[e.name]=n.map((e=>e.toUpperCase()))}getFilesConfig(e){if(!1===e.pasteConfig)return
const{files:t={}}=e.pasteConfig
let{extensions:n,mimeTypes:i}=t
!n&&!i||(n&&!Array.isArray(n)&&(u(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`),n=[]),i&&!Array.isArray(i)&&(u(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`),i=[]),i&&(i=i.filter((t=>!!function(e){return/^[-\w]+\/([-+\w]+|\*)$/.test(e)}(t)||(u(`MIME type value «${t}» for the «${e.name}» Tool is not a valid MIME type`,"warn"),!1)))),this.toolsFiles[e.name]={extensions:n||[],mimeTypes:i||[]})}getPatternsConfig(e){!1===e.pasteConfig||!e.pasteConfig.patterns||y(e.pasteConfig.patterns)||Object.entries(e.pasteConfig.patterns).forEach((([t,n])=>{n instanceof RegExp||u(`Pattern ${n} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,"warn"),this.toolsPatterns.push({key:t,pattern:n,tool:e})}))}isNativeBehaviour(e){return B.isNativeInput(e)}async processFiles(e){const{BlockManager:t}=this.Editor
let n
n=await Promise.all(Array.from(e).map((e=>this.processFile(e)))),n=n.filter((e=>!!e))
const i=t.currentBlock.tool.isDefault&&t.currentBlock.isEmpty
n.forEach(((e,n)=>{t.paste(e.type,e.event,0===n&&i)}))}async processFile(e){const t=function(e){return e.name.split(".").pop()}(e),n=Object.entries(this.toolsFiles).find((([n,{mimeTypes:i,extensions:o}])=>{const[r,s]=e.type.split("/"),a=o.find((e=>e.toLowerCase()===t.toLowerCase())),l=i.find((e=>{const[t,n]=e.split("/")
return t===r&&(n===s||"*"===n)}))
return!!a||!!l}))
if(!n)return
const[i]=n
return{event:this.composePasteEvent("file",{file:e}),type:i}}processHTML(e){const{Tools:t}=this.Editor,n=B.make("DIV")
return n.innerHTML=e,this.getNodes(n).map((e=>{let n,i=t.defaultTool,o=!1
switch(e.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:n=B.make("div"),n.appendChild(e)
break
case Node.ELEMENT_NODE:n=e,o=!0,this.toolsTags[n.tagName]&&(i=this.toolsTags[n.tagName].tool)}const{tags:r}=i.pasteConfig||{tags:[]},s=r.reduce(((e,t)=>(this.collectTagNames(t).forEach((n=>{const i=m(t)?t[n]:null
e[n.toLowerCase()]=i||{}})),e)),{}),a=Object.assign({},s,i.baseSanitizeConfig)
if("table"===n.tagName.toLowerCase()){const e=ue(n.outerHTML,a)
n=B.make("div",void 0,{innerHTML:e}).firstChild}else n.innerHTML=ue(n.innerHTML,a)
const l=this.composePasteEvent("tag",{data:n})
return{content:n,isBlock:o,tool:i.name,event:l}})).filter((e=>{const t=B.isEmpty(e.content),n=B.isSingleTag(e.content)
return!t||n}))}processPlain(e){const{defaultBlock:t}=this.config
if(!e)return[]
const n=t
return e.split(/\r?\n/).filter((e=>e.trim())).map((e=>{const t=B.make("div")
t.textContent=e
const i=this.composePasteEvent("tag",{data:t})
return{content:t,tool:n,isBlock:!1,event:i}}))}async processSingleBlock(e){const{Caret:t,BlockManager:n}=this.Editor,{currentBlock:i}=n
i&&e.tool===i.name&&B.containsOnlyInlineElements(e.content.innerHTML)?t.insertContentAtCaretPosition(e.content.innerHTML):this.insertBlock(e,(null==i?void 0:i.tool.isDefault)&&i.isEmpty)}async processInlinePaste(t){const{BlockManager:n,Caret:i}=this.Editor,{content:o}=t
if(n.currentBlock&&n.currentBlock.tool.isDefault&&o.textContent.length<e.PATTERN_PROCESSING_MAX_LENGTH){const e=await this.processPattern(o.textContent)
if(e){const t=n.currentBlock&&n.currentBlock.tool.isDefault&&n.currentBlock.isEmpty,o=n.paste(e.tool,e.event,t)
return void i.setToBlock(o,i.positions.END)}}if(n.currentBlock&&n.currentBlock.currentInput){const e=n.currentBlock.tool.baseSanitizeConfig
document.execCommand("insertHTML",!1,ue(o.innerHTML,e))}else this.insertBlock(t)}async processPattern(e){const t=this.toolsPatterns.find((t=>{const n=t.pattern.exec(e)
return!!n&&e===n.shift()}))
return t?{event:this.composePasteEvent("pattern",{key:t.key,data:e}),tool:t.tool.name}:void 0}insertBlock(e,t=!1){const{BlockManager:n,Caret:i}=this.Editor,{currentBlock:o}=n
let r
if(t&&o&&o.isEmpty)return r=n.paste(e.tool,e.event,!0),void i.setToBlock(r,i.positions.END)
r=n.paste(e.tool,e.event),i.setToBlock(r,i.positions.END)}insertEditorJSData(e){const{BlockManager:t,Caret:n,Tools:i}=this.Editor
de(e,(e=>i.blockTools.get(e).sanitizeConfig)).forEach((({tool:e,data:i},o)=>{let r=!1
0===o&&(r=t.currentBlock&&t.currentBlock.tool.isDefault&&t.currentBlock.isEmpty)
const s=t.insert({tool:e,data:i,replace:r})
n.setToBlock(s,n.positions.END)}))}processElementNode(e,t,n){const i=Object.keys(this.toolsTags),o=e,{tool:r}=this.toolsTags[o.tagName]||{},s=this.tagsByTool[null==r?void 0:r.name]||[],a=i.includes(o.tagName),l=B.blockElements.includes(o.tagName.toLowerCase()),c=Array.from(o.children).some((({tagName:e})=>i.includes(e)&&!s.includes(e))),d=Array.from(o.children).some((({tagName:e})=>B.blockElements.includes(e.toLowerCase())))
return l||a||c?a&&!c||l&&!d&&!c?[...t,n,o]:void 0:(n.appendChild(o),[...t,n])}getNodes(e){const t=Array.from(e.childNodes)
let n
const i=(e,t)=>{if(B.isEmpty(t)&&!B.isSingleTag(t))return e
const o=e[e.length-1]
let r=new DocumentFragment
switch(o&&B.isFragment(o)&&(r=e.pop()),t.nodeType){case Node.ELEMENT_NODE:if(n=this.processElementNode(t,e,r),n)return n
break
case Node.TEXT_NODE:return r.appendChild(t),[...e,r]
default:return[...e,r]}return[...e,...Array.from(t.childNodes).reduce(i,[])]}
return t.reduce(i,[])}composePasteEvent(e,t){return new CustomEvent(e,{detail:t})}}
Fi.PATTERN_PROCESSING_MAX_LENGTH=450
let zi=Fi
class Hi extends U{constructor(){super(...arguments),this.isRectSelectionActivated=!1,this.SCROLL_SPEED=3,this.HEIGHT_OF_SCROLL_ZONE=40,this.BOTTOM_SCROLL_ZONE=1,this.TOP_SCROLL_ZONE=2,this.MAIN_MOUSE_BUTTON=0,this.mousedown=!1,this.isScrolling=!1,this.inScrollZone=null,this.startX=0,this.startY=0,this.mouseX=0,this.mouseY=0,this.stackOfSelected=[],this.listenerIds=[]}static get CSS(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}prepare(){this.enableModuleBindings()}startSelection(e,t){const n=document.elementFromPoint(e-window.pageXOffset,t-window.pageYOffset)
n.closest(`.${this.Editor.Toolbar.CSS.toolbar}`)||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[])
const i=[`.${ie.CSS.content}`,`.${this.Editor.Toolbar.CSS.toolbar}`,`.${this.Editor.InlineToolbar.CSS.inlineToolbar}`],o=n.closest("."+this.Editor.UI.CSS.editorWrapper),r=i.some((e=>!!n.closest(e)))
!o||r||(this.mousedown=!0,this.startX=e,this.startY=t)}endSelection(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}isRectActivated(){return this.isRectSelectionActivated}clearSelection(){this.isRectSelectionActivated=!1}enableModuleBindings(){const{container:e}=this.genHTML()
this.listeners.on(e,"mousedown",(e=>{this.processMouseDown(e)}),!1),this.listeners.on(document.body,"mousemove",C((e=>{this.processMouseMove(e)}),10),{passive:!0}),this.listeners.on(document.body,"mouseleave",(()=>{this.processMouseLeave()})),this.listeners.on(window,"scroll",C((e=>{this.processScroll(e)}),10),{passive:!0}),this.listeners.on(document.body,"mouseup",(()=>{this.processMouseUp()}),!1)}processMouseDown(e){e.button===this.MAIN_MOUSE_BUTTON&&(null!==e.target.closest(B.allInputsSelector)||this.startSelection(e.pageX,e.pageY))}processMouseMove(e){this.changingRectangle(e),this.scrollByZones(e.clientY)}processMouseLeave(){this.clearSelection(),this.endSelection()}processScroll(e){this.changingRectangle(e)}processMouseUp(){this.clearSelection(),this.endSelection()}scrollByZones(e){this.inScrollZone=null,e<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-e<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}genHTML(){const{UI:e}=this.Editor,t=e.nodes.holder.querySelector("."+e.CSS.editorWrapper),n=B.make("div",Hi.CSS.overlay,{}),i=B.make("div",Hi.CSS.overlayContainer,{}),o=B.make("div",Hi.CSS.rect,{})
return i.appendChild(o),n.appendChild(i),t.appendChild(n),this.overlayRectangle=o,{container:t,overlay:n}}scrollVertical(e){if(!this.inScrollZone||!this.mousedown)return
const t=window.pageYOffset
window.scrollBy(0,e),this.mouseY+=window.pageYOffset-t,setTimeout((()=>{this.scrollVertical(e)}),0)}changingRectangle(e){if(!this.mousedown)return
void 0!==e.pageY&&(this.mouseX=e.pageX,this.mouseY=e.pageY)
const{rightPos:t,leftPos:n,index:i}=this.genInfoForMouseSelection(),o=this.startX>t&&this.mouseX>t,r=this.startX<n&&this.mouseX<n
this.rectCrossesBlocks=!(o||r),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),this.Editor.Toolbar.close(),void 0!==i&&(this.trySelectNextBlock(i),this.inverseSelection(),q.get().removeAllRanges())}shrinkRectangleToPoint(){this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`}inverseSelection(){const e=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected
if(this.rectCrossesBlocks&&!e)for(const t of this.stackOfSelected)this.Editor.BlockSelection.selectBlockByIndex(t)
if(!this.rectCrossesBlocks&&e)for(const t of this.stackOfSelected)this.Editor.BlockSelection.unSelectBlockByIndex(t)}updateRectangleSize(){this.mouseY>=this.startY?(this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.mouseY-window.pageYOffset}px`):(this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.top=this.mouseY-window.pageYOffset+"px"),this.mouseX>=this.startX?(this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.right=`calc(100% - ${this.mouseX-window.pageXOffset}px`):(this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`,this.overlayRectangle.style.left=this.mouseX-window.pageXOffset+"px")}genInfoForMouseSelection(){const e=document.body.offsetWidth/2,t=this.mouseY-window.pageYOffset,n=document.elementFromPoint(e,t),i=this.Editor.BlockManager.getBlockByChildNode(n)
let o
void 0!==i&&(o=this.Editor.BlockManager.blocks.findIndex((e=>e.holder===i.holder)))
const r=this.Editor.BlockManager.lastBlock.holder.querySelector("."+ie.CSS.content),s=Number.parseInt(window.getComputedStyle(r).width,10)/2
return{index:o,leftPos:e-s,rightPos:e+s}}addBlockInSelection(e){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(e),this.stackOfSelected.push(e)}trySelectNextBlock(e){const t=this.stackOfSelected[this.stackOfSelected.length-1]===e,n=this.stackOfSelected.length
if(t)return
const i=this.stackOfSelected[n-1]-this.stackOfSelected[n-2]>0
let o=0
n>1&&(o=i?1:-1)
const r=e>this.stackOfSelected[n-1]&&1===o,s=e<this.stackOfSelected[n-1]&&-1===o,a=!(r||s||0===o)
if(!a&&(e>this.stackOfSelected[n-1]||void 0===this.stackOfSelected[n-1])){let t=this.stackOfSelected[n-1]+1||e
for(;t<=e;t++)this.addBlockInSelection(t)
return}if(!a&&e<this.stackOfSelected[n-1]){for(let t=this.stackOfSelected[n-1]-1;t>=e;t--)this.addBlockInSelection(t)
return}if(!a)return
let l,c=n-1
for(l=e>this.stackOfSelected[n-1]?()=>e>this.stackOfSelected[c]:()=>e<this.stackOfSelected[c];l();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[c]),this.stackOfSelected.pop(),c--}}!function(){try{if(typeof document<"u"){var e=document.createElement("style")
e.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")),document.head.appendChild(e)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}()
class Ui{static get DEFAULT_PLACEHOLDER(){return""}constructor({data:e,config:t,api:n,readOnly:i}){this.api=n,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=t.placeholder?t.placeholder:Ui.DEFAULT_PLACEHOLDER,this._data=e??{},this._element=null,this._preserveBlank=t.preserveBlank??!1}onKeyUp(e){if("Backspace"!==e.code&&"Delete"!==e.code||!this._element)return
const{textContent:t}=this._element
""===t&&(this._element.innerHTML="")}drawView(){const e=document.createElement("DIV")
return e.classList.add(this._CSS.wrapper,this._CSS.block),e.contentEditable="false",e.dataset.placeholderActive=this.api.i18n.t(this._placeholder),this._data.text&&(e.innerHTML=this._data.text),this.readOnly||(e.contentEditable="true",e.addEventListener("keyup",this.onKeyUp)),e}render(){return this._element=this.drawView(),this._element}merge(e){if(!this._element)return
this._data.text+=e.text
const t=function(e){const t=document.createElement("div")
t.innerHTML=e.trim()
const n=document.createDocumentFragment()
return n.append(...Array.from(t.childNodes)),n}(e.text)
this._element.appendChild(t),this._element.normalize()}validate(e){return!(""===e.text.trim()&&!this._preserveBlank)}save(e){return{text:e.innerHTML}}onPaste(e){const t={text:e.detail.data.innerHTML}
this._data=t,window.requestAnimationFrame((()=>{this._element&&(this._element.innerHTML=this._data.text||"")}))}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{text:{br:!0}}}static get isReadOnlySupported(){return!0}static get pasteConfig(){return{tags:["P"]}}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>',title:"Text"}}}class qi{constructor(){this.commandName="bold"}static get sanitize(){return{b:{}}}render(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>',name:"bold",onActivate:()=>{document.execCommand(this.commandName)},isActive:()=>document.queryCommandState(this.commandName)}}get shortcut(){return"CMD+B"}}qi.isInline=!0,qi.title="Bold"
class $i{constructor(){this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}static get sanitize(){return{i:{}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>',this.nodes.button}surround(){document.execCommand(this.commandName)}checkState(){const e=document.queryCommandState(this.commandName)
return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}get shortcut(){return"CMD+I"}}$i.isInline=!0,$i.title="Italic"
class Wi{constructor({api:e}){this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=e.toolbar,this.inlineToolbar=e.inlineToolbar,this.notifier=e.notifier,this.i18n=e.i18n,this.selection=new q}static get sanitize(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=Ce,this.nodes.button}renderActions(){return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.enterKeyHint="done",this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(e=>{e.keyCode===this.ENTER_KEY&&this.enterPressed(e)})),this.nodes.input}surround(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save())
const e=this.selection.findParentTag("A")
if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}checkState(){const e=this.selection.findParentTag("A")
if(e){this.nodes.button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions()
const t=e.getAttribute("href")
this.nodes.input.value="null"!==t?t:"",this.selection.save()}else this.nodes.button.innerHTML=Ce,this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive)
return!!e}clear(){this.closeActions()}get shortcut(){return"CMD+K"}toggleActions(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}openActions(e=!1){this.nodes.input.classList.add(this.CSS.inputShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}closeActions(e=!0){if(this.selection.isFakeBackgroundEnabled){const e=new q
e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}enterPressed(e){let t=this.nodes.input.value||""
return t.trim()?this.validateURL(t)?(t=this.prepareLink(t),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(t),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.selection.collapseToEnd(),void this.inlineToolbar.close()):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void u("Incorrect Link pasted","warn",t)):(this.selection.restore(),this.unlink(),e.preventDefault(),void this.closeActions())}validateURL(e){return!/\s/.test(e)}prepareLink(e){return e=e.trim(),this.addProtocol(e)}addProtocol(e){if(/^(\w+):(\/\/)?/.test(e))return e
const t=/^\/[^/\s]/.test(e),n="#"===e.substring(0,1),i=/^\/\/[^/\s]/.test(e)
return!t&&!n&&!i&&(e="http://"+e),e}insertLink(e){const t=this.selection.findParentTag("A")
t&&this.selection.expandToTag(t),document.execCommand(this.commandLink,!1,e)}unlink(){document.execCommand(this.commandUnlink)}}Wi.isInline=!0,Wi.title="Link"
class Ki{constructor({api:e}){this.i18nAPI=e.i18n,this.blocksAPI=e.blocks,this.selectionAPI=e.selection,this.toolsAPI=e.tools,this.caretAPI=e.caret}async render(){const e=q.get(),t=this.blocksAPI.getBlockByElement(e.anchorNode)
if(void 0===t)return[]
const n=this.toolsAPI.getBlockTools(),i=await J(t,n)
if(0===i.length)return[]
const o=i.reduce(((e,n)=>{var i
return null==(i=n.toolbox)||i.forEach((i=>{e.push({icon:i.icon,title:N.t(we.toolNames,i.title),name:n.name,closeOnActivate:!0,onActivate:async()=>{const e=await this.blocksAPI.convert(t.id,n.name,i.data)
this.caretAPI.setToBlock(e,"end")}})})),e}),[]),r=await t.getActiveToolboxEntry(),s=void 0!==r?r.icon:Ee,a=!R()
return{icon:s,name:"convert-to",hint:{title:this.i18nAPI.t("Convert to")},children:{searchable:a,items:o,onOpen:()=>{a&&(this.selectionAPI.setFakeBackground(),this.selectionAPI.save())},onClose:()=>{a&&(this.selectionAPI.restore(),this.selectionAPI.removeFakeBackground())}}}}}Ki.isInline=!0
class Vi{constructor({data:e,api:t}){this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=t,this.title=e.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=e.savedData,this.wrapper=this.make()}render(){return this.wrapper}save(){return this.savedData}make(){const e=B.make("div",this.CSS.wrapper),t=B.make("div",this.CSS.info),n=B.make("div",this.CSS.title,{textContent:this.title}),i=B.make("div",this.CSS.subtitle,{textContent:this.subtitle})
return e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>',t.appendChild(n),t.appendChild(i),e.appendChild(t),e}}Vi.isReadOnlySupported=!0
class Yi extends xt{constructor(){super(...arguments),this.type=bt.Inline}get title(){return this.constructable[kt.Title]}create(){return new this.constructable({api:this.api,config:this.settings})}get isReadOnlySupported(){return this.constructable[kt.IsReadOnlySupported]??!1}}class Xi extends xt{constructor(){super(...arguments),this.type=bt.Tune}create(e,t){return new this.constructable({api:this.api,config:this.settings,block:t,data:e})}}class Gi extends Map{get blockTools(){const e=Array.from(this.entries()).filter((([,e])=>e.isBlock()))
return new Gi(e)}get inlineTools(){const e=Array.from(this.entries()).filter((([,e])=>e.isInline()))
return new Gi(e)}get blockTunes(){const e=Array.from(this.entries()).filter((([,e])=>e.isTune()))
return new Gi(e)}get internalTools(){const e=Array.from(this.entries()).filter((([,e])=>e.isInternal))
return new Gi(e)}get externalTools(){const e=Array.from(this.entries()).filter((([,e])=>!e.isInternal))
return new Gi(e)}}var Zi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Qi=(e,t,n,i)=>{for(var o,r=i>1?void 0:i?Ji(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i?o(t,n,r):o(r))||r)
return i&&r&&Zi(t,n,r),r}
class eo extends xt{constructor(){super(...arguments),this.type=bt.Block,this.inlineTools=new Gi,this.tunes=new Gi}create(e,t,n){return new this.constructable({data:e,block:t,readOnly:n,api:this.api,config:this.settings})}get isReadOnlySupported(){return!0===this.constructable[wt.IsReadOnlySupported]}get isLineBreaksEnabled(){return this.constructable[wt.IsEnabledLineBreaks]}get toolbox(){const e=this.constructable[wt.Toolbox],t=this.config[vt.Toolbox]
if(!y(e)&&!1!==t)return t?Array.isArray(e)?Array.isArray(t)?t.map(((t,n)=>{const i=e[n]
return i?{...i,...t}:t})):[t]:Array.isArray(t)?t:[{...e,...t}]:Array.isArray(e)?e:[e]}get conversionConfig(){return this.constructable[wt.ConversionConfig]}get enabledInlineTools(){return this.config[vt.EnabledInlineTools]||!1}get enabledBlockTunes(){return this.config[vt.EnabledBlockTunes]}get pasteConfig(){return this.constructable[wt.PasteConfig]??{}}get sanitizeConfig(){const e=super.sanitizeConfig,t=this.baseSanitizeConfig
if(y(e))return t
const n={}
for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){const o=e[i]
m(o)?n[i]=Object.assign({},t,o):n[i]=o}return n}get baseSanitizeConfig(){const e={}
return Array.from(this.inlineTools.values()).forEach((t=>Object.assign(e,t.sanitizeConfig))),Array.from(this.tunes.values()).forEach((t=>Object.assign(e,t.sanitizeConfig))),e}}Qi([A],eo.prototype,"sanitizeConfig",1),Qi([A],eo.prototype,"baseSanitizeConfig",1)
class to{constructor(e,t,n){this.api=n,this.config=e,this.editorConfig=t}get(e){const{class:t,isInternal:n=!1,...i}=this.config[e],o=this.getConstructor(t),r=t[_t.IsTune]
return new o({name:e,constructable:t,config:i,api:this.api.getMethodsForTool(e,r),isDefault:e===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:n})}getConstructor(e){switch(!0){case e[kt.IsInline]:return Yi
case e[_t.IsTune]:return Xi
default:return eo}}}class no{constructor({api:e}){this.CSS={animation:"wobble"},this.api=e}render(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',title:this.api.i18n.t("Move down"),onActivate:()=>this.handleClick(),name:"move-down"}}handleClick(){const e=this.api.blocks.getCurrentBlockIndex(),t=this.api.blocks.getBlockByIndex(e+1)
if(!t)throw new Error("Unable to move Block down since it is already the last")
const n=t.holder,i=n.getBoundingClientRect()
let o=Math.abs(window.innerHeight-n.offsetHeight)
i.top<window.innerHeight&&(o=window.scrollY+n.offsetHeight),window.scrollTo(0,o),this.api.blocks.move(e+1),this.api.toolbar.toggleBlockSettings(!0)}}no.isTune=!0
class io{constructor({api:e}){this.api=e}render(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',title:this.api.i18n.t("Delete"),name:"delete",confirmation:{title:this.api.i18n.t("Click to delete"),onActivate:()=>this.handleClick()}}}handleClick(){this.api.blocks.delete()}}io.isTune=!0
class oo{constructor({api:e}){this.CSS={animation:"wobble"},this.api=e}render(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>',title:this.api.i18n.t("Move up"),onActivate:()=>this.handleClick(),name:"move-up"}}handleClick(){const e=this.api.blocks.getCurrentBlockIndex(),t=this.api.blocks.getBlockByIndex(e),n=this.api.blocks.getBlockByIndex(e-1)
if(0===e||!t||!n)throw new Error("Unable to move Block up since it is already the first")
const i=t.holder,o=n.holder,r=i.getBoundingClientRect(),s=o.getBoundingClientRect()
let a
a=s.top>0?Math.abs(r.top)-Math.abs(s.top):Math.abs(r.top)+s.height,window.scrollBy(0,-1*a),this.api.blocks.move(e-1),this.api.toolbar.toggleBlockSettings(!0)}}oo.isTune=!0
var ro=Object.defineProperty,so=Object.getOwnPropertyDescriptor
class ao extends U{constructor(){super(...arguments),this.stubTool="stub",this.toolsAvailable=new Gi,this.toolsUnavailable=new Gi}get available(){return this.toolsAvailable}get unavailable(){return this.toolsUnavailable}get inlineTools(){return this.available.inlineTools}get blockTools(){return this.available.blockTools}get blockTunes(){return this.available.blockTunes}get defaultTool(){return this.blockTools.get(this.config.defaultBlock)}get internal(){return this.available.internalTools}async prepare(){if(this.validateTools(),this.config.tools=S({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||0===Object.keys(this.config.tools).length)throw Error("Can't start without tools")
const e=this.prepareConfig()
this.factory=new to(e,this.config,this.Editor.API)
const t=this.getListOfPrepareFunctions(e)
if(0===t.length)return Promise.resolve()
await async function(e,t=()=>{},n=()=>{}){return e.reduce((async(e,i)=>(await e,async function(e,t,n){try{await e.function(e.data),await t(v(e.data)?{}:e.data)}catch{n(v(e.data)?{}:e.data)}}(i,t,n))),Promise.resolve())}(t,(e=>{this.toolPrepareMethodSuccess(e)}),(e=>{this.toolPrepareMethodFallback(e)})),this.prepareBlockTools()}getAllInlineToolsSanitizeConfig(){const e={}
return Array.from(this.inlineTools.values()).forEach((t=>{Object.assign(e,t.sanitizeConfig)})),e}destroy(){Object.values(this.available).forEach((async e=>{f(e.reset)&&await e.reset()}))}get internalTools(){return{convertTo:{class:Ki,isInternal:!0},link:{class:Wi,isInternal:!0},bold:{class:qi,isInternal:!0},italic:{class:$i,isInternal:!0},paragraph:{class:Ui,inlineToolbar:!0,isInternal:!0},stub:{class:Vi,isInternal:!0},moveUp:{class:oo,isInternal:!0},delete:{class:io,isInternal:!0},moveDown:{class:no,isInternal:!0}}}toolPrepareMethodSuccess(e){const t=this.factory.get(e.toolName)
if(t.isInline()){const e=["render"].filter((e=>!t.create()[e]))
if(e.length)return u(`Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,"warn",e),void this.toolsUnavailable.set(t.name,t)}this.toolsAvailable.set(t.name,t)}toolPrepareMethodFallback(e){this.toolsUnavailable.set(e.toolName,this.factory.get(e.toolName))}getListOfPrepareFunctions(e){const t=[]
return Object.entries(e).forEach((([e,n])=>{t.push({function:f(n.class.prepare)?n.class.prepare:()=>{},data:{toolName:e,config:n.config}})})),t}prepareBlockTools(){Array.from(this.blockTools.values()).forEach((e=>{this.assignInlineToolsToBlockTool(e),this.assignBlockTunesToBlockTool(e)}))}assignInlineToolsToBlockTool(e){if(!1!==this.config.inlineToolbar){if(!0===e.enabledInlineTools)return void(e.inlineTools=new Gi(Array.isArray(this.config.inlineToolbar)?this.config.inlineToolbar.map((e=>[e,this.inlineTools.get(e)])):Array.from(this.inlineTools.entries())))
Array.isArray(e.enabledInlineTools)&&(e.inlineTools=new Gi(["convertTo",...e.enabledInlineTools].map((e=>[e,this.inlineTools.get(e)]))))}}assignBlockTunesToBlockTool(e){if(!1!==e.enabledBlockTunes){if(Array.isArray(e.enabledBlockTunes)){const t=new Gi(e.enabledBlockTunes.map((e=>[e,this.blockTunes.get(e)])))
return void(e.tunes=new Gi([...t,...this.blockTunes.internalTools]))}if(Array.isArray(this.config.tunes)){const t=new Gi(this.config.tunes.map((e=>[e,this.blockTunes.get(e)])))
return void(e.tunes=new Gi([...t,...this.blockTunes.internalTools]))}e.tunes=this.blockTunes.internalTools}}validateTools(){for(const e in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,e)){if(e in this.internalTools)return
const t=this.config.tools[e]
if(!f(t)&&!f(t.class))throw Error(`Tool «${e}» must be a constructor function or an object with function in the «class» property`)}}prepareConfig(){const e={}
for(const t in this.config.tools)m(this.config.tools[t])?e[t]=this.config.tools[t]:e[t]={class:this.config.tools[t]}
return e}}((e,t,n)=>{for(var i,o=so(t,n),r=e.length-1;r>=0;r--)(i=e[r])&&(o=i(t,n,o)||o)
o&&ro(t,n,o)})([A],ao.prototype,"getAllInlineToolsSanitizeConfig")
const lo={BlocksAPI:class extends U{constructor(){super(...arguments),this.insert=(e=this.config.defaultBlock,t={},n={},i,o,r,s)=>new z(this.Editor.BlockManager.insert({id:s,tool:e,data:t,index:i,needToFocus:o,replace:r})),this.composeBlockData=async e=>{const t=this.Editor.Tools.blockTools.get(e)
return new ie({tool:t,api:this.Editor.API,readOnly:!0,data:{},tunesData:{}}).data},this.update=async(e,t,n)=>{const{BlockManager:i}=this.Editor,o=i.getBlockById(e)
if(void 0===o)throw new Error(`Block with id "${e}" not found`)
return new z(await i.update(o,t,n))},this.convert=async(e,t,n)=>{var i,o
const{BlockManager:r,Tools:s}=this.Editor,a=r.getBlockById(e)
if(!a)throw new Error(`Block with id "${e}" not found`)
const l=s.blockTools.get(a.name),c=s.blockTools.get(t)
if(!c)throw new Error(`Block Tool with type "${t}" not found`)
const d=void 0!==(null==(i=null==l?void 0:l.conversionConfig)?void 0:i.export),u=void 0!==(null==(o=c.conversionConfig)?void 0:o.import)
if(d&&u)return new z(await r.convert(a,t,n))
{const e=[!d&&E(a.name),!u&&E(t)].filter(Boolean).join(" and ")
throw new Error(`Conversion from "${a.name}" to "${t}" is not possible. ${e} tool(s) should provide a "conversionConfig"`)}},this.insertMany=(e,t=this.Editor.BlockManager.blocks.length-1)=>{this.validateIndex(t)
const n=e.map((({id:e,type:t,data:n})=>this.Editor.BlockManager.composeBlock({id:e,tool:t||this.config.defaultBlock,data:n})))
return this.Editor.BlockManager.insertMany(n,t),n.map((e=>new z(e)))}}get methods(){return{clear:()=>this.clear(),render:e=>this.render(e),renderFromHTML:e=>this.renderFromHTML(e),delete:e=>this.delete(e),swap:(e,t)=>this.swap(e,t),move:(e,t)=>this.move(e,t),getBlockByIndex:e=>this.getBlockByIndex(e),getById:e=>this.getById(e),getCurrentBlockIndex:()=>this.getCurrentBlockIndex(),getBlockIndex:e=>this.getBlockIndex(e),getBlocksCount:()=>this.getBlocksCount(),getBlockByElement:e=>this.getBlockByElement(e),stretchBlock:(e,t=!0)=>this.stretchBlock(e,t),insertNewBlock:()=>this.insertNewBlock(),insert:this.insert,insertMany:this.insertMany,update:this.update,composeBlockData:this.composeBlockData,convert:this.convert}}getBlocksCount(){return this.Editor.BlockManager.blocks.length}getCurrentBlockIndex(){return this.Editor.BlockManager.currentBlockIndex}getBlockIndex(e){const t=this.Editor.BlockManager.getBlockById(e)
if(t)return this.Editor.BlockManager.getBlockIndex(t)
h("There is no block with id `"+e+"`","warn")}getBlockByIndex(e){const t=this.Editor.BlockManager.getBlockByIndex(e)
if(void 0!==t)return new z(t)
h("There is no block at index `"+e+"`","warn")}getById(e){const t=this.Editor.BlockManager.getBlockById(e)
return void 0===t?(h("There is no block with id `"+e+"`","warn"),null):new z(t)}getBlockByElement(e){const t=this.Editor.BlockManager.getBlock(e)
if(void 0!==t)return new z(t)
h("There is no block corresponding to element `"+e+"`","warn")}swap(e,t){u("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(e,t)}move(e,t){this.Editor.BlockManager.move(e,t)}delete(e=this.Editor.BlockManager.currentBlockIndex){try{const t=this.Editor.BlockManager.getBlockByIndex(e)
this.Editor.BlockManager.removeBlock(t)}catch(e){return void h(e,"warn")}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}async clear(){await this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}async render(e){if(void 0===e||void 0===e.blocks)throw new Error("Incorrect data passed to the render() method")
this.Editor.ModificationsObserver.disable(),await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(e.blocks),this.Editor.ModificationsObserver.enable()}renderFromHTML(e){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(e,!0)}stretchBlock(e,t=!0){M(!0,"blocks.stretchBlock()","BlockAPI")
const n=this.Editor.BlockManager.getBlockByIndex(e)
n&&(n.stretched=t)}insertNewBlock(){u("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()}validateIndex(e){if("number"!=typeof e)throw new Error("Index should be a number")
if(e<0)throw new Error("Index should be greater than or equal to 0")
if(null===e)throw new Error("Index should be greater than or equal to 0")}},CaretAPI:class extends U{constructor(){super(...arguments),this.setToFirstBlock=(e=this.Editor.Caret.positions.DEFAULT,t=0)=>!!this.Editor.BlockManager.firstBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock,e,t),!0),this.setToLastBlock=(e=this.Editor.Caret.positions.DEFAULT,t=0)=>!!this.Editor.BlockManager.lastBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock,e,t),!0),this.setToPreviousBlock=(e=this.Editor.Caret.positions.DEFAULT,t=0)=>!!this.Editor.BlockManager.previousBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock,e,t),!0),this.setToNextBlock=(e=this.Editor.Caret.positions.DEFAULT,t=0)=>!!this.Editor.BlockManager.nextBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock,e,t),!0),this.setToBlock=(e,t=this.Editor.Caret.positions.DEFAULT,n=0)=>{const i=function(e,t){return"number"==typeof e?t.BlockManager.getBlockByIndex(e):"string"==typeof e?t.BlockManager.getBlockById(e):t.BlockManager.getBlockById(e.id)}(e,this.Editor)
return void 0!==i&&(this.Editor.Caret.setToBlock(i,t,n),!0)},this.focus=(e=!1)=>e?this.setToLastBlock(this.Editor.Caret.positions.END):this.setToFirstBlock(this.Editor.Caret.positions.START)}get methods(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}},EventsAPI:class extends U{get methods(){return{emit:(e,t)=>this.emit(e,t),off:(e,t)=>this.off(e,t),on:(e,t)=>this.on(e,t)}}on(e,t){this.eventsDispatcher.on(e,t)}emit(e,t){this.eventsDispatcher.emit(e,t)}off(e,t){this.eventsDispatcher.off(e,t)}},I18nAPI:oe,API:class extends U{get methods(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,tools:this.Editor.ToolsAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods,ui:this.Editor.UiAPI.methods}}getMethodsForTool(e,t){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(e,t)})}},InlineToolbarAPI:class extends U{get methods(){return{close:()=>this.close(),open:()=>this.open()}}open(){this.Editor.InlineToolbar.tryToShow()}close(){this.Editor.InlineToolbar.close()}},ListenersAPI:class extends U{get methods(){return{on:(e,t,n,i)=>this.on(e,t,n,i),off:(e,t,n,i)=>this.off(e,t,n,i),offById:e=>this.offById(e)}}on(e,t,n,i){return this.listeners.on(e,t,n,i)}off(e,t,n,i){this.listeners.off(e,t,n,i)}offById(e){this.listeners.offById(e)}},NotifierAPI:class extends U{constructor({config:e,eventsDispatcher:t}){super({config:e,eventsDispatcher:t}),this.notifier=new ae}get methods(){return{show:e=>this.show(e)}}show(e){return this.notifier.show(e)}},ReadOnlyAPI:class extends U{get methods(){const e=()=>this.isEnabled
return{toggle:e=>this.toggle(e),get isEnabled(){return e()}}}toggle(e){return this.Editor.ReadOnly.toggle(e)}get isEnabled(){return this.Editor.ReadOnly.isEnabled}},SanitizerAPI:class extends U{get methods(){return{clean:(e,t)=>this.clean(e,t)}}clean(e,t){return ue(e,t)}},SaverAPI:class extends U{get methods(){return{save:()=>this.save()}}save(){const e="Editor's content can not be saved in read-only mode"
return this.Editor.ReadOnly.isEnabled?(h(e,"warn"),Promise.reject(new Error(e))):this.Editor.Saver.save()}},SelectionAPI:class extends U{constructor(){super(...arguments),this.selectionUtils=new q}get methods(){return{findParentTag:(e,t)=>this.findParentTag(e,t),expandToTag:e=>this.expandToTag(e),save:()=>this.selectionUtils.save(),restore:()=>this.selectionUtils.restore(),setFakeBackground:()=>this.selectionUtils.setFakeBackground(),removeFakeBackground:()=>this.selectionUtils.removeFakeBackground()}}findParentTag(e,t){return this.selectionUtils.findParentTag(e,t)}expandToTag(e){this.selectionUtils.expandToTag(e)}},ToolsAPI:class extends U{get methods(){return{getBlockTools:()=>Array.from(this.Editor.Tools.blockTools.values())}}},StylesAPI:class extends U{get classes(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}},ToolbarAPI:class extends U{get methods(){return{close:()=>this.close(),open:()=>this.open(),toggleBlockSettings:e=>this.toggleBlockSettings(e),toggleToolbox:e=>this.toggleToolbox(e)}}open(){this.Editor.Toolbar.moveAndOpen()}close(){this.Editor.Toolbar.close()}toggleBlockSettings(e){-1!==this.Editor.BlockManager.currentBlockIndex?e??!this.Editor.BlockSettings.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close():h("Could't toggle the Toolbar because there is no block selected ","warn")}toggleToolbox(e){-1!==this.Editor.BlockManager.currentBlockIndex?e??!this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()):this.Editor.Toolbar.toolbox.close():h("Could't toggle the Toolbox because there is no block selected ","warn")}},TooltipAPI:class extends U{constructor({config:e,eventsDispatcher:t}){super({config:e,eventsDispatcher:t})}get methods(){return{show:(e,t,n)=>this.show(e,t,n),hide:()=>this.hide(),onHover:(e,t,n)=>this.onHover(e,t,n)}}show(e,t,n){!function(e,t,n){be(),null==ge||ge.show(e,t,n)}(e,t,n)}hide(){ve()}onHover(e,t,n){ye(e,t,n)}},UiAPI:class extends U{get methods(){return{nodes:this.editorNodes}}get editorNodes(){return{wrapper:this.Editor.UI.nodes.wrapper,redactor:this.Editor.UI.nodes.redactor}}},BlockSettings:class extends U{constructor(){super(...arguments),this.opened=!1,this.selection=new q,this.popover=null,this.close=()=>{this.opened&&(this.opened=!1,q.isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock),this.eventsDispatcher.emit(this.events.closed),this.popover&&(this.popover.off(Ne.Closed,this.onPopoverClose),this.popover.destroy(),this.popover.getElement().remove(),this.popover=null))},this.onPopoverClose=()=>{this.close()}}get events(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}get CSS(){return{settings:"ce-settings"}}get flipper(){var e
if(null!==this.popover)return"flipper"in this.popover?null==(e=this.popover)?void 0:e.flipper:void 0}make(){this.nodes.wrapper=B.make("div",[this.CSS.settings]),this.nodes.wrapper.setAttribute("data-cy","block-tunes"),this.eventsDispatcher.on(Y,this.close)}destroy(){this.removeAllNodes(),this.listeners.destroy(),this.eventsDispatcher.off(Y,this.close)}async open(e=this.Editor.BlockManager.currentBlock){var t
this.opened=!0,this.selection.save(),this.Editor.BlockSelection.selectBlock(e),this.Editor.BlockSelection.clearCache()
const{toolTunes:n,commonTunes:i}=e.getTunes()
this.eventsDispatcher.emit(this.events.opened)
const o=R()?st:Je
this.popover=new o({searchable:!0,items:await this.getTunesItems(e,i,n),scopeElement:this.Editor.API.methods.ui.nodes.redactor,messages:{nothingFound:N.ui(we.ui.popover,"Nothing found"),search:N.ui(we.ui.popover,"Filter")}}),this.popover.on(Ne.Closed,this.onPopoverClose),null==(t=this.nodes.wrapper)||t.append(this.popover.getElement()),this.popover.show()}getElement(){return this.nodes.wrapper}async getTunesItems(e,t,n){const i=[]
void 0!==n&&n.length>0&&(i.push(...n),i.push({type:te.Separator}))
const o=Array.from(this.Editor.Tools.blockTools.values()),r=(await J(e,o)).reduce(((t,n)=>(n.toolbox.forEach((i=>{t.push({icon:i.icon,title:N.t(we.toolNames,i.title),name:n.name,closeOnActivate:!0,onActivate:async()=>{const{BlockManager:t,Caret:o,Toolbar:r}=this.Editor,s=await t.convert(e,n.name,i.data)
r.close(),o.setToBlock(s,o.positions.END)}})})),t)),[])
return r.length>0&&(i.push({icon:Ee,name:"convert-to",title:N.ui(we.ui.popover,"Convert to"),children:{searchable:!0,items:r}}),i.push({type:te.Separator})),i.push(...t),i.map((e=>this.resolveTuneAliases(e)))}resolveTuneAliases(e){if(e.type===te.Separator||e.type===te.Html)return e
const t=function(e,t){const n={}
return Object.keys(e).forEach((i=>{const o=t[i]
void 0!==o?n[o]=e[i]:n[i]=e[i]})),n}(e,{label:"title"})
return e.confirmation&&(t.confirmation=this.resolveTuneAliases(e.confirmation)),t}},Toolbar:class extends U{constructor({config:e,eventsDispatcher:t}){super({config:e,eventsDispatcher:t}),this.toolboxInstance=null}get CSS(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",openedToolboxHolderModifier:"codex-editor--toolbox-opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",settingsToggler:"ce-toolbar__settings-btn",settingsTogglerHidden:"ce-toolbar__settings-btn--hidden"}}get opened(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}get toolbox(){var e
return{opened:null==(e=this.toolboxInstance)?void 0:e.opened,close:()=>{var e
null==(e=this.toolboxInstance)||e.close()},open:()=>{null!==this.toolboxInstance?(this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.toolboxInstance.open()):u("toolbox.open() called before initialization is finished","warn")},toggle:()=>{null!==this.toolboxInstance?this.toolboxInstance.toggle():u("toolbox.toggle() called before initialization is finished","warn")},hasFocus:()=>{var e
return null==(e=this.toolboxInstance)?void 0:e.hasFocus()}}}get blockActions(){return{hide:()=>{this.nodes.actions.classList.remove(this.CSS.actionsOpened)},show:()=>{this.nodes.actions.classList.add(this.CSS.actionsOpened)}}}get blockTunesToggler(){return{hide:()=>this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),show:()=>this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)}}toggleReadOnly(e){e?(this.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):window.requestIdleCallback((()=>{this.drawUI(),this.enableModuleBindings()}),{timeout:2e3})}moveAndOpen(e=this.Editor.BlockManager.currentBlock){if(null===this.toolboxInstance)return void u("Can't open Toolbar since Editor initialization is not finished yet","warn")
if(this.toolboxInstance.opened&&this.toolboxInstance.close(),this.Editor.BlockSettings.opened&&this.Editor.BlockSettings.close(),!e)return
this.hoveredBlock=e
const t=e.holder,{isMobile:n}=this.Editor.UI
let i
const o=e.firstInput,r=t.getBoundingClientRect(),s=void 0!==o?o.getBoundingClientRect():null,a=null!==s?s.top-r.top:null,l=null!==a?a>20:void 0
if(n)i=t.offsetTop+t.offsetHeight
else if(void 0===o||l){const n=parseInt(window.getComputedStyle(e.pluginsContent).paddingTop)
i=t.offsetTop+n}else{const e=function(e){const t=window.getComputedStyle(e),n=parseFloat(t.fontSize),i=parseFloat(t.lineHeight)||1.2*n,o=parseFloat(t.paddingTop),r=parseFloat(t.borderTopWidth)
return parseFloat(t.marginTop)+r+o+(i-n)/2+.8*n}(o),n=parseInt(window.getComputedStyle(this.nodes.plusButton).height,10),r=8
i=t.offsetTop+e-n+r+a}this.nodes.wrapper.style.top=`${Math.floor(i)}px`,1===this.Editor.BlockManager.blocks.length&&e.isEmpty?this.blockTunesToggler.hide():this.blockTunesToggler.show(),this.open()}close(){var e,t
this.Editor.ReadOnly.isEnabled||(null==(e=this.nodes.wrapper)||e.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),null==(t=this.toolboxInstance)||t.close(),this.Editor.BlockSettings.close(),this.reset())}reset(){this.nodes.wrapper.style.top="unset"}open(e=!0){this.nodes.wrapper.classList.add(this.CSS.toolbarOpened),e?this.blockActions.show():this.blockActions.hide()}async make(){this.nodes.wrapper=B.make("div",this.CSS.toolbar),["content","actions"].forEach((e=>{this.nodes[e]=B.make("div",this.CSS[e])})),B.append(this.nodes.wrapper,this.nodes.content),B.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=B.make("div",this.CSS.plusButton,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>'}),B.append(this.nodes.actions,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(()=>{ve(!0),this.plusButtonClicked()}),!1)
const e=B.make("div")
e.appendChild(document.createTextNode(N.ui(we.ui.toolbar.toolbox,"Add"))),e.appendChild(B.make("div",this.CSS.plusButtonShortcut,{textContent:"/"})),ye(this.nodes.plusButton,e,{hidingDelay:400}),this.nodes.settingsToggler=B.make("span",this.CSS.settingsToggler,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>'}),B.append(this.nodes.actions,this.nodes.settingsToggler)
const t=B.make("div"),n=B.text(N.ui(we.ui.blockTunes.toggler,"Click to tune")),i=await async function(){const e=navigator.keyboard
if(!e)return"/"
try{return(await e.getLayoutMap()).get("Slash")||"/"}catch(e){return console.error(e),"/"}}()
t.appendChild(n),t.appendChild(B.make("div",this.CSS.plusButtonShortcut,{textContent:T(`CMD + ${i}`)})),ye(this.nodes.settingsToggler,t,{hidingDelay:400}),B.append(this.nodes.actions,this.makeToolbox()),B.append(this.nodes.actions,this.Editor.BlockSettings.getElement()),B.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}makeToolbox(){return this.toolboxInstance=new mt({api:this.Editor.API.methods,tools:this.Editor.Tools.blockTools,i18nLabels:{filter:N.ui(we.ui.popover,"Filter"),nothingFound:N.ui(we.ui.popover,"Nothing found")}}),this.toolboxInstance.on(pt.Opened,(()=>{this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(pt.Closed,(()=>{this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(pt.BlockAdded,(({block:e})=>{const{BlockManager:t,Caret:n}=this.Editor,i=t.getBlockById(e.id)
0===i.inputs.length&&(i===t.lastBlock?(t.insertAtEnd(),n.setToBlock(t.lastBlock)):n.setToBlock(t.nextBlock))})),this.toolboxInstance.getElement()}plusButtonClicked(){var e
this.Editor.BlockManager.currentBlock=this.hoveredBlock,null==(e=this.toolboxInstance)||e.toggle()}enableModuleBindings(){this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"mousedown",(e=>{var t
e.stopPropagation(),this.settingsTogglerClicked(),null!=(t=this.toolboxInstance)&&t.opened&&this.toolboxInstance.close(),ve(!0)}),!0),R()||this.eventsDispatcher.on(gt,(e=>{var t
this.Editor.BlockSettings.opened||null!=(t=this.toolboxInstance)&&t.opened||this.moveAndOpen(e.block)}))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}settingsTogglerClicked(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open(this.hoveredBlock)}drawUI(){this.Editor.BlockSettings.make(),this.make()}destroy(){this.removeAllNodes(),this.toolboxInstance&&this.toolboxInstance.destroy()}},InlineToolbar:class extends U{constructor({config:e,eventsDispatcher:t}){super({config:e,eventsDispatcher:t}),this.CSS={inlineToolbar:"ce-inline-toolbar"},this.opened=!1,this.popover=null,this.toolbarVerticalMargin=R()?20:6,this.tools=new Map,window.requestIdleCallback((()=>{this.make()}),{timeout:2e3})}async tryToShow(e=!1){e&&this.close(),this.allowedToShow()&&(await this.open(),this.Editor.Toolbar.close())}close(){var e,t
if(this.opened){for(const[e,t]of this.tools){const n=this.getToolShortcut(e.name)
void 0!==n&&ct.remove(this.Editor.UI.nodes.redactor,n),f(t.clear)&&t.clear()}this.tools=new Map,this.reset(),this.opened=!1,null==(e=this.popover)||e.hide(),null==(t=this.popover)||t.destroy(),this.popover=null}}containsNode(e){return void 0!==this.nodes.wrapper&&this.nodes.wrapper.contains(e)}destroy(){var e
this.removeAllNodes(),null==(e=this.popover)||e.destroy(),this.popover=null}make(){this.nodes.wrapper=B.make("div",[this.CSS.inlineToolbar,...this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]]),this.nodes.wrapper.setAttribute("data-cy","inline-toolbar"),B.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}async open(){var e
if(this.opened)return
this.opened=!0,null!==this.popover&&this.popover.destroy(),this.createToolsInstances()
const t=await this.getPopoverItems()
this.popover=new Qe({items:t,scopeElement:this.Editor.API.methods.ui.nodes.redactor,messages:{nothingFound:N.ui(we.ui.popover,"Nothing found"),search:N.ui(we.ui.popover,"Filter")}}),this.move(this.popover.size.width),null==(e=this.nodes.wrapper)||e.append(this.popover.getElement()),this.popover.show()}move(e){const t=q.rect,n=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),i={x:t.x-n.x,y:t.y+t.height-n.top+this.toolbarVerticalMargin}
i.x+e+n.x>this.Editor.UI.contentRect.right&&(i.x=this.Editor.UI.contentRect.right-e-n.x),this.nodes.wrapper.style.left=Math.floor(i.x)+"px",this.nodes.wrapper.style.top=Math.floor(i.y)+"px"}reset(){this.nodes.wrapper.style.left="0",this.nodes.wrapper.style.top="0"}allowedToShow(){const e=q.get(),t=q.text
if(!e||!e.anchorNode||e.isCollapsed||t.length<1)return!1
const n=B.isElement(e.anchorNode)?e.anchorNode:e.anchorNode.parentElement
if(null===n||null!==e&&["IMG","INPUT"].includes(n.tagName))return!1
const i=this.Editor.BlockManager.getBlock(e.anchorNode)
return!(!i||!1===this.getTools().some((e=>i.tool.inlineTools.has(e.name))))&&null!==n.closest("[contenteditable]")}getTools(){const e=this.Editor.BlockManager.currentBlock
return e?Array.from(e.tool.inlineTools.values()).filter((e=>!(this.Editor.ReadOnly.isEnabled&&!0!==e.isReadOnlySupported))):[]}createToolsInstances(){this.tools=new Map,this.getTools().forEach((e=>{const t=e.create()
this.tools.set(e,t)}))}async getPopoverItems(){const e=[]
let t=0
for(const[n,i]of this.tools){const o=await i.render(),r=this.getToolShortcut(n.name)
if(void 0!==r)try{this.enableShortcuts(n.name,r)}catch{}const s=void 0!==r?T(r):void 0,a=N.t(we.toolNames,n.title||E(n.name));[o].flat().forEach((o=>{var r,l
const c={name:n.name,onActivate:()=>{this.toolClicked(i)},hint:{title:a,description:s}}
if(B.isElement(o)){const t={...c,element:o,type:te.Html}
if(f(i.renderActions)){const e=i.renderActions()
t.children={isOpen:null==(r=i.checkState)?void 0:r.call(i,q.get()),isFlippable:!1,items:[{type:te.Html,element:e}]}}else null==(l=i.checkState)||l.call(i,q.get())
e.push(t)}else if(o.type===te.Html)e.push({...c,...o,type:te.Html})
else if(o.type===te.Separator)e.push({type:te.Separator})
else{const n={...c,...o,type:te.Default}
"children"in n&&0!==t&&e.push({type:te.Separator}),e.push(n),"children"in n&&t<this.tools.size-1&&e.push({type:te.Separator})}})),t++}return e}getToolShortcut(e){const{Tools:t}=this.Editor,n=t.inlineTools.get(e),i=t.internal.inlineTools
return Array.from(i.keys()).includes(e)?this.inlineTools[e][yt.Shortcut]:null==n?void 0:n.shortcut}enableShortcuts(e,t){ct.add({name:t,handler:t=>{var n
const{currentBlock:i}=this.Editor.BlockManager
i&&i.tool.enabledInlineTools&&(t.preventDefault(),null==(n=this.popover)||n.activateItemByName(e))},on:document})}toolClicked(e){var t
const n=q.range
null==(t=e.surround)||t.call(e,n),this.checkToolsState()}checkToolsState(){var e
null==(e=this.tools)||e.forEach((e=>{var t
null==(t=e.checkState)||t.call(e,q.get())}))}get inlineTools(){const e={}
return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((([t,n])=>{e[t]=n.create()})),e}},BlockEvents:class extends U{keydown(e){switch(this.beforeKeydownProcessing(e),e.keyCode){case 8:this.backspace(e)
break
case 46:this.delete(e)
break
case a:this.enter(e)
break
case c:case 39:this.arrowRightAndDown(e)
break
case l:case 37:this.arrowLeftAndUp(e)
break
case 9:this.tabPressed(e)}"/"===e.key&&!e.ctrlKey&&!e.metaKey&&this.slashPressed(e),"Slash"===e.code&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),this.commandSlashPressed())}beforeKeydownProcessing(e){this.needToolbarClosing(e)&&w(e.keyCode)&&(this.Editor.Toolbar.close(),e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||this.Editor.BlockSelection.clearSelection(e))}keyup(e){e.shiftKey||this.Editor.UI.checkEmptiness()}dragOver(e){this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget=!0}dragLeave(e){this.Editor.BlockManager.getBlockByChildNode(e.target).dropTarget=!1}handleCommandC(e){const{BlockSelection:t}=this.Editor
t.anyBlockSelected&&t.copySelectedBlocks(e)}handleCommandX(e){const{BlockSelection:t,BlockManager:n,Caret:i}=this.Editor
t.anyBlockSelected&&t.copySelectedBlocks(e).then((()=>{const o=n.removeSelectedBlocks(),r=n.insertDefaultBlockAtIndex(o,!0)
i.setToBlock(r,i.positions.START),t.clearSelection(e)}))}tabPressed(e){const{InlineToolbar:t,Caret:n}=this.Editor
t.opened||(e.shiftKey?n.navigatePrevious(!0):n.navigateNext(!0))&&e.preventDefault()}commandSlashPressed(){this.Editor.BlockSelection.selectedBlocks.length>1||this.activateBlockSettings()}slashPressed(e){this.Editor.BlockManager.currentBlock.isEmpty&&(e.preventDefault(),this.Editor.Caret.insertContentAtCaretPosition("/"),this.activateToolbox())}enter(e){const{BlockManager:t,UI:n}=this.Editor,i=t.currentBlock
if(void 0===i||i.tool.isLineBreaksEnabled||n.someToolbarOpened&&n.someFlipperButtonFocused||e.shiftKey&&!I)return
let o=i
void 0!==i.currentInput&&St(i.currentInput)&&!i.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):o=i.currentInput&&Tt(i.currentInput)?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex+1):this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(o),this.Editor.Toolbar.moveAndOpen(o),e.preventDefault()}backspace(e){const{BlockManager:t,Caret:n}=this.Editor,{currentBlock:i,previousBlock:o}=t
if(void 0!==i&&q.isCollapsed&&i.currentInput&&St(i.currentInput))if(e.preventDefault(),this.Editor.Toolbar.close(),i.currentInput===i.firstInput){if(null!==o)if(o.isEmpty)t.removeBlock(o)
else if(i.isEmpty){t.removeBlock(i)
const e=t.currentBlock
n.setToBlock(e,n.positions.END)}else Q(o,i)?this.mergeBlocks(o,i):n.setToBlock(o,n.positions.END)}else n.navigatePrevious()}delete(e){const{BlockManager:t,Caret:n}=this.Editor,{currentBlock:i,nextBlock:o}=t
if(q.isCollapsed&&Tt(i.currentInput))if(e.preventDefault(),this.Editor.Toolbar.close(),i.currentInput===i.lastInput){if(null!==o){if(!o.isEmpty)return i.isEmpty?(t.removeBlock(i),void n.setToBlock(o,n.positions.START)):void(Q(i,o)?this.mergeBlocks(i,o):n.setToBlock(o,n.positions.START))
t.removeBlock(o)}}else n.navigateNext()}mergeBlocks(e,t){const{BlockManager:n,Toolbar:i}=this.Editor
void 0!==e.lastInput&&(Ot.focus(e.lastInput,!1),n.mergeBlocks(e,t).then((()=>{i.close()})))}arrowRightAndDown(e){const t=xe.usedKeys.includes(e.keyCode)&&(!e.shiftKey||9===e.keyCode)
if(this.Editor.UI.someToolbarOpened&&t)return
this.Editor.Toolbar.close()
const{currentBlock:n}=this.Editor.BlockManager,i=(void 0!==(null==n?void 0:n.currentInput)?Tt(n.currentInput):void 0)||this.Editor.BlockSelection.anyBlockSelected
e.shiftKey&&e.keyCode===c&&i?this.Editor.CrossBlockSelection.toggleBlockSelectedState():(e.keyCode===c||39===e.keyCode&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?e.preventDefault():(_((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(e))}arrowLeftAndUp(e){if(this.Editor.UI.someToolbarOpened){if(xe.usedKeys.includes(e.keyCode)&&(!e.shiftKey||9===e.keyCode))return
this.Editor.UI.closeAllToolbars()}this.Editor.Toolbar.close()
const{currentBlock:t}=this.Editor.BlockManager,n=(void 0!==(null==t?void 0:t.currentInput)?St(t.currentInput):void 0)||this.Editor.BlockSelection.anyBlockSelected
e.shiftKey&&e.keyCode===l&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):(e.keyCode===l||37===e.keyCode&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?e.preventDefault():(_((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(e))}needToolbarClosing(e){const t=e.keyCode===a&&this.Editor.Toolbar.toolbox.opened,n=e.keyCode===a&&this.Editor.BlockSettings.opened,i=e.keyCode===a&&this.Editor.InlineToolbar.opened,o=9===e.keyCode
return!(e.shiftKey||o||t||n||i)}activateToolbox(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()}activateBlockSettings(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}},BlockManager:class extends U{constructor(){super(...arguments),this._currentBlockIndex=-1,this._blocks=null}get currentBlockIndex(){return this._currentBlockIndex}set currentBlockIndex(e){this._currentBlockIndex=e}get firstBlock(){return this._blocks[0]}get lastBlock(){return this._blocks[this._blocks.length-1]}get currentBlock(){return this._blocks[this.currentBlockIndex]}set currentBlock(e){this.currentBlockIndex=this.getBlockIndex(e)}get nextBlock(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}get nextContentfulBlock(){return this.blocks.slice(this.currentBlockIndex+1).find((e=>!!e.inputs.length))}get previousContentfulBlock(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((e=>!!e.inputs.length))}get previousBlock(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}get blocks(){return this._blocks.array}get isEditorEmpty(){return this.blocks.every((e=>e.isEmpty))}prepare(){const e=new Bi(this.Editor.UI.nodes.redactor)
this._blocks=new Proxy(e,{set:Bi.set,get:Bi.get}),this.listeners.on(document,"copy",(e=>this.Editor.BlockEvents.handleCommandC(e)))}toggleReadOnly(e){e?this.disableModuleBindings():this.enableModuleBindings()}composeBlock({tool:e,data:t={},id:n,tunes:i={}}){const o=this.Editor.ReadOnly.isEnabled,r=this.Editor.Tools.blockTools.get(e),s=new ie({id:n,data:t,tool:r,api:this.Editor.API,readOnly:o,tunesData:i},this.eventsDispatcher)
return o||window.requestIdleCallback((()=>{this.bindBlockEvents(s)}),{timeout:2e3}),s}insert({id:e,tool:t=this.config.defaultBlock,data:n={},index:i,needToFocus:o=!0,replace:r=!1,tunes:s={}}={}){let a=i
void 0===a&&(a=this.currentBlockIndex+(r?0:1))
const l=this.composeBlock({id:e,tool:t,data:n,tunes:s})
return r&&this.blockDidMutated(Pi,this.getBlockByIndex(a),{index:a}),this._blocks.insert(a,l,r),this.blockDidMutated(Li,l,{index:a}),o?this.currentBlockIndex=a:a<=this.currentBlockIndex&&this.currentBlockIndex++,l}insertMany(e,t=0){this._blocks.insertMany(e,t)}async update(e,t,n){if(!t&&!n)return e
const i=await e.data,o=this.composeBlock({id:e.id,tool:e.name,data:Object.assign({},i,t??{}),tunes:n??e.tunes}),r=this.getBlockIndex(e)
return this._blocks.replace(r,o),this.blockDidMutated(ji,o,{index:r}),o}replace(e,t,n){const i=this.getBlockIndex(e)
return this.insert({tool:t,data:n,index:i,replace:!0})}paste(e,t,n=!1){const i=this.insert({tool:e,replace:n})
try{window.requestIdleCallback((()=>{i.call(ne.ON_PASTE,t)}))}catch(t){u(`${e}: onPaste callback call is failed`,"error",t)}return i}insertDefaultBlockAtIndex(e,t=!1){const n=this.composeBlock({tool:this.config.defaultBlock})
return this._blocks[e]=n,this.blockDidMutated(Li,n,{index:e}),t?this.currentBlockIndex=e:e<=this.currentBlockIndex&&this.currentBlockIndex++,n}insertAtEnd(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}async mergeBlocks(e,t){let n
if(e.name===t.name&&e.mergeable){const i=await t.data
if(y(i))return void console.error("Could not merge Block. Failed to extract original Block data.")
const[o]=de([i],e.tool.sanitizeConfig)
n=o}else e.mergeable&&G(t,"export")&&G(e,"import")&&(n=ee(ue(await t.exportDataAsString(),e.tool.sanitizeConfig),e.tool.conversionConfig))
void 0!==n&&(await e.mergeWith(n),this.removeBlock(t),this.currentBlockIndex=this._blocks.indexOf(e))}removeBlock(e,t=!0){return new Promise((n=>{const i=this._blocks.indexOf(e)
if(!this.validateIndex(i))throw new Error("Can't find a Block to remove")
e.destroy(),this._blocks.remove(i),this.blockDidMutated(Pi,e,{index:i}),this.currentBlockIndex>=i&&this.currentBlockIndex--,this.blocks.length?0===i&&(this.currentBlockIndex=0):(this.unsetCurrentBlock(),t&&this.insert()),n()}))}removeSelectedBlocks(){let e
for(let t=this.blocks.length-1;t>=0;t--)this.blocks[t].selected&&(this.removeBlock(this.blocks[t]),e=t)
return e}removeAllBlocks(){for(let e=this.blocks.length-1;e>=0;e--)this._blocks.remove(e)
this.unsetCurrentBlock(),this.insert(),this.currentBlock.firstInput.focus()}split(){const e=this.Editor.Caret.extractFragmentFromCaretPosition(),t=B.make("div")
t.appendChild(e)
const n={text:B.isEmpty(t)?"":t.innerHTML}
return this.insert({data:n})}getBlockByIndex(e){return-1===e&&(e=this._blocks.length-1),this._blocks[e]}getBlockIndex(e){return this._blocks.indexOf(e)}getBlockById(e){return this._blocks.array.find((t=>t.id===e))}getBlock(e){B.isElement(e)||(e=e.parentNode)
const t=this._blocks.nodes,n=e.closest(`.${ie.CSS.wrapper}`),i=t.indexOf(n)
if(i>=0)return this._blocks[i]}setCurrentBlockByChildNode(e){B.isElement(e)||(e=e.parentNode)
const t=e.closest(`.${ie.CSS.wrapper}`)
if(!t)return
const n=t.closest(`.${this.Editor.UI.CSS.editorWrapper}`)
return null!=n&&n.isEqualNode(this.Editor.UI.nodes.wrapper)?(this.currentBlockIndex=this._blocks.nodes.indexOf(t),this.currentBlock.updateCurrentInput(),this.currentBlock):void 0}getBlockByChildNode(e){if(!(e&&e instanceof Node))return
B.isElement(e)||(e=e.parentNode)
const t=e.closest(`.${ie.CSS.wrapper}`)
return this.blocks.find((e=>e.holder===t))}swap(e,t){this._blocks.swap(e,t),this.currentBlockIndex=t}move(e,t=this.currentBlockIndex){isNaN(e)||isNaN(t)?u("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(e)&&this.validateIndex(t)?(this._blocks.move(e,t),this.currentBlockIndex=e,this.blockDidMutated("block-moved",this.currentBlock,{fromIndex:t,toIndex:e})):u("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}async convert(e,t,n){if(!await e.save())throw new Error("Could not convert Block. Failed to extract original Block data.")
const i=this.Editor.Tools.blockTools.get(t)
if(!i)throw new Error(`Could not convert Block. Tool «${t}» not found.`)
let o=ee(ue(await e.exportDataAsString(),i.sanitizeConfig),i.conversionConfig,i.settings)
return n&&(o=Object.assign(o,n)),this.replace(e,i.name,o)}unsetCurrentBlock(){this.currentBlockIndex=-1}async clear(e=!1){const t=new Ni
this.blocks.forEach((e=>{t.add((async()=>{await this.removeBlock(e,!1)}))})),await t.completed,this.unsetCurrentBlock(),e&&this.insert(),this.Editor.UI.checkEmptiness()}async destroy(){await Promise.all(this.blocks.map((e=>e.destroy())))}bindBlockEvents(e){const{BlockEvents:t}=this.Editor
this.readOnlyMutableListeners.on(e.holder,"keydown",(e=>{t.keydown(e)})),this.readOnlyMutableListeners.on(e.holder,"keyup",(e=>{t.keyup(e)})),this.readOnlyMutableListeners.on(e.holder,"dragover",(e=>{t.dragOver(e)})),this.readOnlyMutableListeners.on(e.holder,"dragleave",(e=>{t.dragLeave(e)})),e.on("didMutated",(e=>this.blockDidMutated(ji,e,{index:this.getBlockIndex(e)})))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}enableModuleBindings(){this.readOnlyMutableListeners.on(document,"cut",(e=>this.Editor.BlockEvents.handleCommandX(e))),this.blocks.forEach((e=>{this.bindBlockEvents(e)}))}validateIndex(e){return!(e<0||e>=this._blocks.length)}blockDidMutated(e,t,n){const i=new CustomEvent(e,{detail:{target:new z(t),...n}})
return this.eventsDispatcher.emit(W,{event:i}),t}},BlockSelection:class extends U{constructor(){super(...arguments),this.anyBlockSelectedCache=null,this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1}get sanitizerConfig(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}get allBlocksSelected(){const{BlockManager:e}=this.Editor
return e.blocks.every((e=>!0===e.selected))}set allBlocksSelected(e){const{BlockManager:t}=this.Editor
t.blocks.forEach((t=>{t.selected=e})),this.clearCache()}get anyBlockSelected(){const{BlockManager:e}=this.Editor
return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=e.blocks.some((e=>!0===e.selected))),this.anyBlockSelectedCache}get selectedBlocks(){return this.Editor.BlockManager.blocks.filter((e=>e.selected))}prepare(){this.selection=new q,ct.add({name:"CMD+A",handler:e=>{const{BlockManager:t,ReadOnly:n}=this.Editor
if(n.isEnabled)return e.preventDefault(),void this.selectAllBlocks()
t.currentBlock&&this.handleCommandA(e)},on:this.Editor.UI.nodes.redactor})}toggleReadOnly(){q.get().removeAllRanges(),this.allBlocksSelected=!1}unSelectBlockByIndex(e){const{BlockManager:t}=this.Editor
let n
n=isNaN(e)?t.currentBlock:t.getBlockByIndex(e),n.selected=!1,this.clearCache()}clearSelection(e,t=!1){const{BlockManager:n,Caret:i,RectangleSelection:o}=this.Editor
this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1
const r=e&&e instanceof KeyboardEvent,s=r&&w(e.keyCode)
if(this.anyBlockSelected&&r&&s&&!q.isSelectionExists){const t=n.removeSelectedBlocks()
n.insertDefaultBlockAtIndex(t,!0),i.setToBlock(n.currentBlock),_((()=>{const t=e.key
i.insertContentAtCaretPosition(t.length>1?"":t)}),20)()}this.Editor.CrossBlockSelection.clear(e),this.anyBlockSelected&&!o.isRectActivated()?(t&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}copySelectedBlocks(e){e.preventDefault()
const t=B.make("div")
this.selectedBlocks.forEach((e=>{const n=ue(e.holder.innerHTML,this.sanitizerConfig),i=B.make("p")
i.innerHTML=n,t.appendChild(i)}))
const n=Array.from(t.childNodes).map((e=>e.textContent)).join("\n\n"),i=t.innerHTML
return e.clipboardData.setData("text/plain",n),e.clipboardData.setData("text/html",i),Promise.all(this.selectedBlocks.map((e=>e.save()))).then((t=>{try{e.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(t))}catch{}}))}selectBlockByIndex(e){const{BlockManager:t}=this.Editor,n=t.getBlockByIndex(e)
void 0!==n&&this.selectBlock(n)}selectBlock(e){this.selection.save(),q.get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()}unselectBlock(e){e.selected=!1,this.clearCache()}clearCache(){this.anyBlockSelectedCache=null}destroy(){ct.remove(this.Editor.UI.nodes.redactor,"CMD+A")}handleCommandA(e){if(this.Editor.RectangleSelection.clearSelection(),B.isNativeInput(e.target)&&!this.readyToBlockSelection)return void(this.readyToBlockSelection=!0)
const t=this.Editor.BlockManager.getBlock(e.target),n=t.inputs
n.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==n.length||this.needToSelectAll?this.needToSelectAll?(e.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1):this.readyToBlockSelection&&(e.preventDefault(),this.selectBlock(t),this.needToSelectAll=!0):this.needToSelectAll=!0}selectAllBlocks(){this.selection.save(),q.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},Caret:Di,CrossBlockSelection:class extends U{constructor(){super(...arguments),this.onMouseUp=()=>{this.listeners.off(document,"mouseover",this.onMouseOver),this.listeners.off(document,"mouseup",this.onMouseUp)},this.onMouseOver=e=>{const{BlockManager:t,BlockSelection:n}=this.Editor
if(null===e.relatedTarget&&null===e.target)return
const i=t.getBlockByChildNode(e.relatedTarget)||this.lastSelectedBlock,o=t.getBlockByChildNode(e.target)
if(i&&o&&o!==i){if(i===this.firstSelectedBlock)return q.get().removeAllRanges(),i.selected=!0,o.selected=!0,void n.clearCache()
if(o===this.firstSelectedBlock)return i.selected=!1,o.selected=!1,void n.clearCache()
this.Editor.InlineToolbar.close(),this.toggleBlocksSelectedState(i,o),this.lastSelectedBlock=o}}}async prepare(){this.listeners.on(document,"mousedown",(e=>{this.enableCrossBlockSelection(e)}))}watchSelection(e){if(0!==e.button)return
const{BlockManager:t}=this.Editor
this.firstSelectedBlock=t.getBlock(e.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp)}get isCrossBlockSelectionStarted(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock&&this.firstSelectedBlock!==this.lastSelectedBlock}toggleBlockSelectedState(e=!0){const{BlockManager:t,BlockSelection:n}=this.Editor
this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=t.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,n.clearCache(),q.get().removeAllRanges())
const i=t.blocks.indexOf(this.lastSelectedBlock)+(e?1:-1),o=t.blocks[i]
o&&(this.lastSelectedBlock.selected!==o.selected?(o.selected=!0,n.clearCache()):(this.lastSelectedBlock.selected=!1,n.clearCache()),this.lastSelectedBlock=o,this.Editor.InlineToolbar.close(),o.holder.scrollIntoView({block:"nearest"}))}clear(e){const{BlockManager:t,BlockSelection:n,Caret:i}=this.Editor,o=t.blocks.indexOf(this.firstSelectedBlock),r=t.blocks.indexOf(this.lastSelectedBlock)
if(n.anyBlockSelected&&o>-1&&r>-1&&e&&e instanceof KeyboardEvent)switch(e.keyCode){case c:case 39:i.setToBlock(t.blocks[Math.max(o,r)],i.positions.END)
break
case l:case 37:i.setToBlock(t.blocks[Math.min(o,r)],i.positions.START)
break
default:i.setToBlock(t.blocks[Math.max(o,r)],i.positions.END)}this.firstSelectedBlock=this.lastSelectedBlock=null}enableCrossBlockSelection(e){const{UI:t}=this.Editor
q.isCollapsed||this.Editor.BlockSelection.clearSelection(e),t.nodes.redactor.contains(e.target)?this.watchSelection(e):this.Editor.BlockSelection.clearSelection(e)}toggleBlocksSelectedState(e,t){const{BlockManager:n,BlockSelection:i}=this.Editor,o=n.blocks.indexOf(e),r=n.blocks.indexOf(t),s=e.selected!==t.selected
for(let a=Math.min(o,r);a<=Math.max(o,r);a++){const o=n.blocks[a]
o!==this.firstSelectedBlock&&o!==(s?e:t)&&(n.blocks[a].selected=!n.blocks[a].selected,i.clearCache())}}},DragNDrop:class extends U{constructor(){super(...arguments),this.isStartedAtEditor=!1}toggleReadOnly(e){e?this.disableModuleBindings():this.enableModuleBindings()}enableModuleBindings(){const{UI:e}=this.Editor
this.readOnlyMutableListeners.on(e.nodes.holder,"drop",(async e=>{await this.processDrop(e)}),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",(()=>{this.processDragStart()})),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",(e=>{this.processDragOver(e)}),!0)}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}async processDrop(e){const{BlockManager:t,Paste:n,Caret:i}=this.Editor
e.preventDefault(),t.blocks.forEach((e=>{e.dropTarget=!1})),q.isAtEditor&&!q.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1
const o=t.setCurrentBlockByChildNode(e.target)
if(o)this.Editor.Caret.setToBlock(o,i.positions.END)
else{const e=t.setCurrentBlockByChildNode(t.lastBlock.holder)
this.Editor.Caret.setToBlock(e,i.positions.END)}await n.processDataTransfer(e.dataTransfer,!0)}processDragStart(){q.isAtEditor&&!q.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()}processDragOver(e){e.preventDefault()}},ModificationsObserver:class extends U{constructor({config:e,eventsDispatcher:t}){super({config:e,eventsDispatcher:t}),this.disabled=!1,this.batchingTimeout=null,this.batchingOnChangeQueue=new Map,this.batchTime=400,this.mutationObserver=new MutationObserver((e=>{this.redactorChanged(e)})),this.eventsDispatcher.on(W,(e=>{this.particularBlockChanged(e.event)})),this.eventsDispatcher.on(K,(()=>{this.disable()})),this.eventsDispatcher.on(V,(()=>{this.enable()}))}enable(){this.mutationObserver.observe(this.Editor.UI.nodes.redactor,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.disabled=!1}disable(){this.mutationObserver.disconnect(),this.disabled=!0}particularBlockChanged(e){this.disabled||!f(this.config.onChange)||(this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`,e),this.batchingTimeout&&clearTimeout(this.batchingTimeout),this.batchingTimeout=setTimeout((()=>{let e
e=1===this.batchingOnChangeQueue.size?this.batchingOnChangeQueue.values().next().value:Array.from(this.batchingOnChangeQueue.values()),this.config.onChange&&this.config.onChange(this.Editor.API.methods,e),this.batchingOnChangeQueue.clear()}),this.batchTime))}redactorChanged(e){this.eventsDispatcher.emit($,{mutations:e})}},Paste:zi,ReadOnly:class extends U{constructor(){super(...arguments),this.toolsDontSupportReadOnly=[],this.readOnlyEnabled=!1}get isEnabled(){return this.readOnlyEnabled}async prepare(){const{Tools:e}=this.Editor,{blockTools:t}=e,n=[]
Array.from(t.entries()).forEach((([e,t])=>{t.isReadOnlySupported||n.push(e)})),this.toolsDontSupportReadOnly=n,this.config.readOnly&&n.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly,!0)}async toggle(e=!this.readOnlyEnabled,t=!1){e&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError()
const n=this.readOnlyEnabled
this.readOnlyEnabled=e
for(const o in this.Editor)this.Editor[o].toggleReadOnly&&this.Editor[o].toggleReadOnly(e)
if(n===e)return this.readOnlyEnabled
if(t)return this.readOnlyEnabled
this.Editor.ModificationsObserver.disable()
const i=await this.Editor.Saver.save()
return await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(i.blocks),this.Editor.ModificationsObserver.enable(),this.readOnlyEnabled}throwCriticalError(){throw new D(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`)}},RectangleSelection:Hi,Renderer:class extends U{async render(e){return new Promise((t=>{const{Tools:n,BlockManager:i}=this.Editor
if(0===e.length)i.insert()
else{const t=e.map((({type:e,data:t,tunes:o,id:r})=>{let a
!1===n.available.has(e)&&(h(`Tool «${e}» is not found. Check 'tools' property at the Editor.js config.`,"warn"),t=this.composeStubDataForTool(e,t,r),e=n.stubTool)
try{a=i.composeBlock({id:r,tool:e,data:t,tunes:o})}catch(s){u(`Block «${e}» skipped because of plugins error`,"error",{data:t,error:s}),t=this.composeStubDataForTool(e,t,r),e=n.stubTool,a=i.composeBlock({id:r,tool:e,data:t,tunes:o})}return a}))
i.insertMany(t)}window.requestIdleCallback((()=>{t()}),{timeout:2e3})}))}composeStubDataForTool(e,t,n){const{Tools:i}=this.Editor
let o=e
if(i.unavailable.has(e)){const t=i.unavailable.get(e).toolbox
void 0!==t&&void 0!==t[0].title&&(o=t[0].title)}return{savedData:{id:n,type:e,data:t},title:o}}},Saver:class extends U{async save(){const{BlockManager:e,Tools:t}=this.Editor,n=e.blocks,i=[]
try{n.forEach((e=>{i.push(this.getSavedData(e))}))
const e=await Promise.all(i),o=await de(e,(e=>t.blockTools.get(e).sanitizeConfig))
return this.makeOutput(o)}catch(e){h("Saving failed due to the Error %o","error",e)}}async getSavedData(e){const t=await e.save(),n=t&&await e.validate(t.data)
return{...t,isValid:n}}makeOutput(e){const t=[]
return e.forEach((({id:e,tool:n,data:i,tunes:o,isValid:r})=>{if(!r)return void u(`Block «${n}» skipped because saved data is invalid`)
if(n===this.Editor.Tools.stubTool)return void t.push(i)
const s={id:e,type:n,data:i,...!y(o)&&{tunes:o}}
t.push(s)})),{time:+new Date,blocks:t,version:"2.31.0-rc.7"}}},Tools:ao,UI:class extends U{constructor(){super(...arguments),this.isMobile=!1,this.contentRectCache=null,this.resizeDebouncer=x((()=>{this.windowResize()}),200),this.selectionChangeDebounced=x((()=>{this.selectionChanged()}),180),this.documentTouchedListener=e=>{this.documentTouched(e)}}get CSS(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}get contentRect(){if(null!==this.contentRectCache)return this.contentRectCache
const e=this.nodes.wrapper.querySelector(`.${ie.CSS.content}`)
return e?(this.contentRectCache=e.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}async prepare(){this.setIsMobile(),this.make(),this.loadStyles()}toggleReadOnly(e){e?this.unbindReadOnlySensitiveListeners():window.requestIdleCallback((()=>{this.bindReadOnlySensitiveListeners()}),{timeout:2e3})}checkEmptiness(){const{BlockManager:e}=this.Editor
this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,e.isEditorEmpty)}get someToolbarOpened(){const{Toolbar:e,BlockSettings:t,InlineToolbar:n}=this.Editor
return!!(t.opened||n.opened||e.toolbox.opened)}get someFlipperButtonFocused(){return!!this.Editor.Toolbar.toolbox.hasFocus()||Object.entries(this.Editor).filter((([e,t])=>t.flipper instanceof xe)).some((([e,t])=>t.flipper.hasFocus()))}destroy(){this.nodes.holder.innerHTML="",this.unbindReadOnlyInsensitiveListeners()}closeAllToolbars(){const{Toolbar:e,BlockSettings:t,InlineToolbar:n}=this.Editor
t.close(),n.close(),e.toolbox.close()}setIsMobile(){const e=window.innerWidth<650
e!==this.isMobile&&this.eventsDispatcher.emit(Y,{isEnabled:this.isMobile}),this.isMobile=e}make(){this.nodes.holder=B.getHolder(this.config.holder),this.nodes.wrapper=B.make("div",[this.CSS.editorWrapper,...this.isRtl?[this.CSS.editorRtlFix]:[]]),this.nodes.redactor=B.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper),this.bindReadOnlyInsensitiveListeners()}loadStyles(){const e="editor-js-styles"
if(B.get(e))return
const t=B.make("style",null,{id:e,textContent:':root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}\n'.toString()})
this.config.style&&!y(this.config.style)&&this.config.style.nonce&&t.setAttribute("nonce",this.config.style.nonce),B.prepend(document.head,t)}bindReadOnlyInsensitiveListeners(){this.listeners.on(document,"selectionchange",this.selectionChangeDebounced),this.listeners.on(window,"resize",this.resizeDebouncer,{passive:!0}),this.listeners.on(this.nodes.redactor,"mousedown",this.documentTouchedListener,{capture:!0,passive:!0}),this.listeners.on(this.nodes.redactor,"touchstart",this.documentTouchedListener,{capture:!0,passive:!0})}unbindReadOnlyInsensitiveListeners(){this.listeners.off(document,"selectionchange",this.selectionChangeDebounced),this.listeners.off(window,"resize",this.resizeDebouncer),this.listeners.off(this.nodes.redactor,"mousedown",this.documentTouchedListener),this.listeners.off(this.nodes.redactor,"touchstart",this.documentTouchedListener)}bindReadOnlySensitiveListeners(){this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(e=>{this.redactorClicked(e)}),!1),this.readOnlyMutableListeners.on(document,"keydown",(e=>{this.documentKeydown(e)}),!0),this.readOnlyMutableListeners.on(document,"mousedown",(e=>{this.documentClicked(e)}),!0),this.watchBlockHoveredEvents(),this.enableInputsEmptyMark()}watchBlockHoveredEvents(){let e
this.readOnlyMutableListeners.on(this.nodes.redactor,"mousemove",C((t=>{const n=t.target.closest(".ce-block")
this.Editor.BlockSelection.anyBlockSelected||n&&e!==n&&(e=n,this.eventsDispatcher.emit(gt,{block:this.Editor.BlockManager.getBlockByChildNode(n)}))}),20),{passive:!0})}unbindReadOnlySensitiveListeners(){this.readOnlyMutableListeners.clearAll()}windowResize(){this.contentRectCache=null,this.setIsMobile()}documentKeydown(e){switch(e.keyCode){case a:this.enterPressed(e)
break
case 8:case 46:this.backspacePressed(e)
break
case 27:this.escapePressed(e)
break
default:this.defaultBehaviour(e)}}defaultBehaviour(e){const{currentBlock:t}=this.Editor.BlockManager,n=e.target.closest(`.${this.CSS.editorWrapper}`),i=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey
void 0===t||null!==n?n||t&&i||(this.Editor.BlockManager.unsetCurrentBlock(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(e)}backspacePressed(e){const{BlockManager:t,BlockSelection:n,Caret:i}=this.Editor
if(n.anyBlockSelected&&!q.isSelectionExists){const o=t.removeSelectedBlocks(),r=t.insertDefaultBlockAtIndex(o,!0)
i.setToBlock(r,i.positions.START),n.clearSelection(e),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}}escapePressed(e){this.Editor.BlockSelection.clearSelection(e),this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.toolbox.close(),this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END)):this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}enterPressed(e){const{BlockManager:t,BlockSelection:n}=this.Editor
if(this.someToolbarOpened)return
const i=t.currentBlockIndex>=0
if(n.anyBlockSelected&&!q.isSelectionExists)return n.clearSelection(e),e.preventDefault(),e.stopImmediatePropagation(),void e.stopPropagation()
if(!this.someToolbarOpened&&i&&"BODY"===e.target.tagName){const t=this.Editor.BlockManager.insert()
e.preventDefault(),this.Editor.Caret.setToBlock(t),this.Editor.Toolbar.moveAndOpen(t)}this.Editor.BlockSelection.clearSelection(e)}documentClicked(e){var t,n
if(!e.isTrusted)return
const i=e.target
this.nodes.holder.contains(i)||q.isAtEditor||(this.Editor.BlockManager.unsetCurrentBlock(),this.Editor.Toolbar.close())
const o=null==(t=this.Editor.BlockSettings.nodes.wrapper)?void 0:t.contains(i),r=null==(n=this.Editor.Toolbar.nodes.settingsToggler)?void 0:n.contains(i),s=o||r
if(this.Editor.BlockSettings.opened&&!s){this.Editor.BlockSettings.close()
const e=this.Editor.BlockManager.getBlockByChildNode(i)
this.Editor.Toolbar.moveAndOpen(e)}this.Editor.BlockSelection.clearSelection(e)}documentTouched(e){let t=e.target
if(t===this.nodes.redactor){const n=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,i=e instanceof MouseEvent?e.clientY:e.touches[0].clientY
t=document.elementFromPoint(n,i)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(t)}catch{this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.ReadOnly.isEnabled||this.Editor.Toolbar.moveAndOpen()}redactorClicked(e){if(!q.isCollapsed)return
const t=e.target,n=e.metaKey||e.ctrlKey
if(B.isAnchor(t)&&n){e.stopImmediatePropagation(),e.stopPropagation()
const n=function(e){try{return new URL(e).href}catch{}return"//"===e.substring(0,2)?window.location.protocol+e:window.location.origin+e}(t.getAttribute("href"))
!function(e){window.open(e,"_blank")}(n)}else this.processBottomZoneClick(e)}processBottomZoneClick(e){const t=this.Editor.BlockManager.getBlockByIndex(-1),n=B.offset(t.holder).bottom,i=e.pageY,{BlockSelection:o}=this.Editor
if(e.target instanceof Element&&e.target.isEqualNode(this.nodes.redactor)&&!o.anyBlockSelected&&n<i){e.stopImmediatePropagation(),e.stopPropagation()
const{BlockManager:t,Caret:n,Toolbar:i}=this.Editor;(!t.lastBlock.tool.isDefault||!t.lastBlock.isEmpty)&&t.insertAtEnd(),n.setToTheLastBlock(),i.moveAndOpen(t.lastBlock)}}selectionChanged(){const{CrossBlockSelection:e,BlockSelection:t}=this.Editor,n=q.anchorElement
if(e.isCrossBlockSelectionStarted&&t.anyBlockSelected&&q.get().removeAllRanges(),!n)return void(q.range||this.Editor.InlineToolbar.close())
const i=n.closest(`.${ie.CSS.content}`);(null===i||i.closest(`.${q.CSS.editorWrapper}`)!==this.nodes.wrapper)&&(this.Editor.InlineToolbar.containsNode(n)||this.Editor.InlineToolbar.close(),"true"!==n.dataset.inlineToolbar)||(this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(n),this.Editor.InlineToolbar.tryToShow(!0))}enableInputsEmptyMark(){function e(e){P(e.target)}this.readOnlyMutableListeners.on(this.nodes.wrapper,"input",e),this.readOnlyMutableListeners.on(this.nodes.wrapper,"focusin",e),this.readOnlyMutableListeners.on(this.nodes.wrapper,"focusout",e)}}}
class co{constructor(e){let t,n
this.moduleInstances={},this.eventsDispatcher=new F,this.isReady=new Promise(((e,i)=>{t=e,n=i})),Promise.resolve().then((async()=>{this.configuration=e,this.validate(),this.init(),await this.start(),await this.render()
const{BlockManager:n,Caret:i,UI:o,ModificationsObserver:r}=this.moduleInstances
o.checkEmptiness(),r.enable(),!0===this.configuration.autofocus&&!0!==this.configuration.readOnly&&i.setToBlock(n.blocks[0],i.positions.START),t()})).catch((e=>{u(`Editor.js is not ready because of ${e}`,"error"),n(e)}))}set configuration(e){var t,n
m(e)?this.config={...e}:this.config={holder:e},M(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=s.VERBOSE),function(e){d.logLevel=e}(this.config.logLevel),M(!!this.config.initialBlock,"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300
const i={type:this.config.defaultBlock,data:{}}
this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||(()=>{}),this.config.onChange=this.config.onChange||(()=>{}),this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,(y(this.config.data)||!this.config.data.blocks||0===this.config.data.blocks.length)&&(this.config.data={blocks:[i]}),this.config.readOnly=this.config.readOnly||!1,null!=(t=this.config.i18n)&&t.messages&&N.setDictionary(this.config.i18n.messages),this.config.i18n.direction=(null==(n=this.config.i18n)?void 0:n.direction)||"ltr"}get configuration(){return this.config}validate(){const{holderId:e,holder:t}=this.config
if(e&&t)throw Error("«holderId» and «holder» param can't assign at the same time.")
if(g(t)&&!B.get(t))throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`)
if(t&&m(t)&&!B.isElement(t))throw Error("«holder» value must be an Element node")}init(){this.constructModules(),this.configureModules()}async start(){await["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"].reduce(((e,t)=>e.then((async()=>{try{await this.moduleInstances[t].prepare()}catch(e){if(e instanceof D)throw new Error(e.message)
u(`Module ${t} was skipped because of %o`,"warn",e)}}))),Promise.resolve())}render(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}constructModules(){Object.entries(lo).forEach((([e,t])=>{try{this.moduleInstances[e]=new t({config:this.configuration,eventsDispatcher:this.eventsDispatcher})}catch(t){u("[constructModules]",`Module ${e} skipped because`,"error",t)}}))}configureModules(){for(const e in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,e)&&(this.moduleInstances[e].state=this.getModulesDiff(e))}getModulesDiff(e){const t={}
for(const n in this.moduleInstances)n!==e&&(t[n]=this.moduleInstances[n])
return t}}class uo{static get version(){return"2.31.0-rc.7"}constructor(e){let t=()=>{}
m(e)&&f(e.onReady)&&(t=e.onReady)
const n=new co(e)
this.isReady=n.isReady.then((()=>{this.exportAPI(n),t()}))}exportAPI(e){["configuration"].forEach((t=>{this[t]=e[t]})),this.destroy=()=>{Object.values(e.moduleInstances).forEach((e=>{f(e.destroy)&&e.destroy(),e.listeners.removeAll()})),null==ge||ge.destroy(),ge=null,e=null
for(const e in this)Object.prototype.hasOwnProperty.call(this,e)&&delete this[e]
Object.setPrototypeOf(this,null)},Object.setPrototypeOf(this,e.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((([t,n])=>{Object.entries(n).forEach((([n,i])=>{this[i]=e.moduleInstances.API.methods[t][n]}))}))}}},7472:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{camelize:()=>T,capitalize:()=>A,classify:()=>O,dasherize:()=>S,decamelize:()=>E,getString:()=>a,getStrings:()=>s,htmlSafe:()=>R,isHTMLSafe:()=>I,setStrings:()=>r,underscore:()=>M,w:()=>C})
class i{constructor(e,t,n){this.limit=e,this.func=t,this.store=n,this.size=0,this.misses=0,this.hits=0,this.store=n||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}let o={}
function r(e){o=e}function s(){return o}function a(e){return o[e]}const l=/[ _]/g,c=new i(1e3,(e=>E(e).replace(l,"-"))),d=/(\-|\_|\.|\s)+(.)?/g,u=/(^|\/)([A-Z])/g,h=new i(1e3,(e=>e.replace(d,((e,t,n)=>n?n.toUpperCase():"")).replace(u,(e=>e.toLowerCase())))),p=/^(\-|_)+(.)?/,f=/(.)(\-|\_|\.|\s)+(.)?/g,m=/(^|\/|\.)([a-z])/g,g=new i(1e3,(e=>{const t=(e,t,n)=>n?`_${n.toUpperCase()}`:"",n=(e,t,n,i)=>t+(i?i.toUpperCase():""),i=e.split("/")
for(let o=0;o<i.length;o++)i[o]=i[o].replace(p,t).replace(f,n)
return i.join("/").replace(m,(e=>e.toUpperCase()))})),b=/([a-z\d])([A-Z]+)/g,v=/\-|\s+/g,y=new i(1e3,(e=>e.replace(b,"$1_$2").replace(v,"_").toLowerCase())),w=/(^|\/)([a-z\u00C0-\u024F])/g,k=new i(1e3,(e=>e.replace(w,(e=>e.toUpperCase())))),_=/([a-z\d])([A-Z])/g,x=new i(1e3,(e=>e.replace(_,"$1_$2").toLowerCase()))
function C(e){return e.split(/\s+/)}function E(e){return x.get(e)}function S(e){return c.get(e)}function T(e){return h.get(e)}function O(e){return g.get(e)}function M(e){return y.get(e)}function A(e){return k.get(e)}function R(e){throw new Error("htmlSafe is not implemented in the `@ember/string` package. Please import from `@ember/template` instead.")}function I(e){throw new Error("isHTMLSafe is not implemented in the `@ember/string` package. Please import from `@ember/template` instead.")}},2139:(e,t,n)=>{"use strict"
function i(e,t){let n=e.load(t)
if(!n)throw new Error(t+" must export an initializer.")
let i=n.default
if(!i)throw new Error(t+" must have a default export")
return i.name||(i.name=t.slice(t.lastIndexOf("/")+1)),i}function o(e,t,n){var o=t+"/initializers/",r=t+"/instance-initializers/",s=[],a=[]
let l
l=n?{names:()=>Object.keys(n),load:e=>n[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let i of l.names())i.startsWith(o)&&!i.endsWith("-test")?s.push(i):i.startsWith(r)&&!i.endsWith("-test")&&a.push(i)
!function(e,t,n){for(let o of n)e.initializer(i(t,o))}(e,l,s),function(e,t,n){for(let o of n)e.instanceInitializer(i(t,o))}(e,l,a)}n.r(t),n.d(t,{default:()=>o})},4537:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{prettyPrintJson:()=>i})
const i={version:"3.0.4",toHtml(e,t){const n={indent:3,lineNumbers:!1,linkUrls:!0,linksNewTab:!0,quoteKeys:!1,trailingCommas:!0,...t},i=(e,t)=>t?"<span class=json-"+e+">"+t+"</span>":"",o=(JSON.stringify(e,null,n.indent)||"undefined").replace(/[<>&]|\\"/g,(e=>"<"===e?"&lt;":">"===e?"&gt;":"&"===e?"&amp;":"&bsol;&quot;")).replace(/^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/gm,((e,...t)=>{const o={indent:t[0],key:t[1],value:t[2],end:t[3]},r=n.quoteKeys?/(.*)(): /:/"([\w$]+)": |(.*): /,s=o.indent||"",a=o.key&&o.key.replace(r,"$1$2"),l=o.key?i("key",a)+i("mark",": "):"",c=o.value?(e=>{const t=/^"/.test(e)&&"string",o=(["true","false"].includes(e)?"boolean":"null"===e&&"null")||t||"number",r=n.linksNewTab?" target=_blank":"",s=t&&n.linkUrls?e.replace(/https?:\/\/[^\s"]+/g,(e=>`<a class=json-link href="${e}"${r}>${e}</a>`)):e
return i(o,s)})(o.value):"",d=!o.end||["]","}"].includes(e.at(-1)),u=n.trailingCommas&&" "===e.at(0)&&d
return s+l+c+i("mark",u?(o.end??"")+",":o.end)})),r=e=>`   <li>${e}</li>`
return n.lineNumbers?(e=>["<ol class=json-lines>",...e.split("\n").map(r),"</ol>"].join("\n"))(o):o}}}}])
