require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({34:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],30:[function(require,module,exports) {
var e=require("./bundle-url");function n(e){var n=e.cloneNode();n.onload=function(){e.remove()},n.href=e.href.split("?")[0]+"?"+Date.now(),e.parentNode.insertBefore(n,e.nextSibling)}var l=null;function r(){l||(l=setTimeout(function(){for(var r=document.querySelectorAll('link[rel="stylesheet"]'),t=0;t<r.length;t++)e.getBaseURL(r[t].href)===e.getBundleURL()&&n(r[t]);l=null},50))}module.exports=r;
},{"./bundle-url":34}],15:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./bg.jpg":32,"_css_loader":30}],36:[function(require,module,exports) {

var e=(0,eval)("this"),r=module.bundle.Module;function o(e){r.call(this,e),this.hot={accept:function(e){this._acceptCallback=e||function(){}},dispose:function(e){this._disposeCallback=e}}}module.bundle.Module=o;var t=module.bundle.parent;if(!(t&&t.isParcelRequire||"undefined"==typeof WebSocket)){var a=location.hostname,n="https:"===location.protocol?"wss":"ws",c=new WebSocket(n+"://"+a+":53674/");c.onmessage=function(r){var o=JSON.parse(r.data);"update"===o.type&&(o.assets.forEach(function(r){i(e.require,r)}),o.assets.forEach(function(r){r.isNew||l(e.require,r.id)})),"reload"===o.type&&(c.close(),c.onclose=function(){location.reload()}),"error-resolved"===o.type&&console.log("[parcel] ✨ Error resolved"),"error"===o.type&&console.error("[parcel] 🚨  "+o.error.message+"\ndata.error.stack")}}function s(e,r){var o=e.modules;if(!o)return[];var t,a,n,c=[];for(t in o)for(a in o[t][1])((n=o[t][1][a])===r||Array.isArray(n)&&n[n.length-1]===r)&&c.push(+t);return e.parent&&(c=c.concat(s(e.parent,r))),c}function i(e,r){var o=e.modules;if(o)if(o[r.id]||!e.parent){var t=new Function("require","module","exports",r.generated.js);r.isNew=!o[r.id],o[r.id]=[t,r.deps]}else e.parent&&i(e.parent,r)}function l(r,o){var t=r.modules;if(t){if(!t[o]&&r.parent)return l(r.parent,o);var a=r.cache[o];return a&&a.hot._disposeCallback&&a.hot._disposeCallback(),delete r.cache[o],r(o),(a=r.cache[o])&&a.hot&&a.hot._acceptCallback?(a.hot._acceptCallback(),!0):s(e.require,o).some(function(r){return l(e.require,r)})}}
},{}],38:[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(e){if("MODULE_NOT_FOUND"===e.code)return new s(function(e,n){t(r).then(e,n)});throw e}}function t(r){var e=r[r.length-1];return Promise.all(r.slice(0,-1).map(u)).then(function(){return require(e)})}var n={};function o(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=o;var i={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),i[e])return i[e];var o=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[o];return u?i[e]=u(r()+e).then(function(r){return r&&(module.bundle.modules[t]=[function(e,t){t.exports=r},{}]),r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return this.promise||(this.promise=new Promise(this.executor).then(r,e))},s.prototype.catch=function(r){return this.promise||(this.promise=new Promise(this.executor).catch(r))};
},{"./bundle-url":34}],0:[function(require,module,exports) {
var b=require(38);b.load([["424082e72cccc38e0b9c085d66e344f9.jpg",32]]);
},{}]},{},[36,0])