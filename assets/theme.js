/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){var r,i,o=(n=n||fe).createElement("script");if(o.text=e,t)for(r in pe)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function r(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?re[ie.call(e)]||"object":typeof e}function i(e){var t=!!e&&"length"in e&&e.length,n=r(e);return!ue(e)&&!ce(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function a(e,t,n){return ue(t)?he.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?he.grep(e,function(e){return e===t!==n}):"string"!=typeof t?he.grep(e,function(e){return-1<ne.call(t,e)!==n}):he.filter(t,e,n)}function s(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e){return e}function u(e){throw e}function c(e,t,n,r){var i;try{e&&ue(i=e.promise)?i.call(e).done(t).fail(n):e&&ue(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function f(){fe.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),he.ready()}function p(e,t){return t.toUpperCase()}function d(e){return e.replace(Pe,"ms-").replace(Ne,p)}function h(){this.expando=he.expando+h.uid++}function g(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(He,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:Le.test(i)?JSON.parse(i):i)}catch(e){}qe.set(e,t,n)}else n=void 0;return n}function m(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return he.css(e,t,"")},l=s(),u=n&&n[3]||(he.cssNumber[t]?"":"px"),c=e.nodeType&&(he.cssNumber[t]||"px"!==u&&+l)&&Oe.exec(he.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;a--;)he.style(e,t,c+u),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),c/=o;c*=2,he.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}function y(e,t){for(var n,r,i,o,a,s,l,u=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(u[c]=De.get(r,"display")||null,u[c]||(r.style.display="")),""===r.style.display&&$e(r)&&(u[c]=(l=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(l=We[s])||(o=a.body.appendChild(a.createElement(s)),l=he.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),We[s]=l)))):"none"!==n&&(u[c]="none",De.set(r,"display",n)));for(c=0;c<f;c++)null!=u[c]&&(e[c].style.display=u[c]);return e}function v(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?he.merge([e],n):n}function b(e,t){for(var n=0,r=e.length;n<r;n++)De.set(e[n],"globalEval",!t||De.get(t[n],"globalEval"))}function x(e,t,n,i,o){for(var a,s,l,u,c,f,p=t.createDocumentFragment(),d=[],h=0,g=e.length;h<g;h++)if((a=e[h])||0===a)if("object"===r(a))he.merge(d,a.nodeType?[a]:a);else if(Ye.test(a)){for(s=s||p.appendChild(t.createElement("div")),l=(_e.exec(a)||["",""])[1].toLowerCase(),u=Ge[l]||Ge._default,s.innerHTML=u[1]+he.htmlPrefilter(a)+u[2],f=u[0];f--;)s=s.lastChild;he.merge(d,s.childNodes),(s=p.firstChild).textContent=""}else d.push(t.createTextNode(a));for(p.textContent="",h=0;a=d[h++];)if(i&&-1<he.inArray(a,i))o&&o.push(a);else if(c=Me(a),s=v(p.appendChild(a),"script"),c&&b(s),n)for(f=0;a=s[f++];)Ue.test(a.type||"")&&n.push(a);return p}function w(){return!0}function T(){return!1}function S(e,t){return e===function(){try{return fe.activeElement}catch(e){}}()==("focus"===t)}function C(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)C(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=T;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return he().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=he.guid++)),e.each(function(){he.event.add(this,t,i,r,n)})}function k(e,t,n){n?(De.set(e,t,!1),he.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=De.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(he.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=K.call(arguments),De.set(this,t,o),r=n(this,t),this[t](),o!==(i=De.get(this,t))||r?De.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i.value}else o.length&&(De.set(this,t,{value:he.event.trigger(he.extend(o[0],he.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===De.get(e,t)&&he.event.add(e,t,w)}function E(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")&&he(e).children("tbody")[0]||e}function A(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function P(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function N(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(De.hasData(e)&&(s=De.get(e).events))for(i in De.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)he.event.add(t,i,s[i][n]);qe.hasData(e)&&(o=qe.access(e),a=he.extend({},o),qe.set(t,a))}}function j(e,t,r,i){t=ee(t);var o,a,s,l,u,c,f=0,p=e.length,d=p-1,h=t[0],g=ue(h);if(g||1<p&&"string"==typeof h&&!le.checkClone&&et.test(h))return e.each(function(n){var o=e.eq(n);g&&(t[0]=h.call(this,n,o.html())),j(o,t,r,i)});if(p&&(a=(o=x(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=a),a||i)){for(l=(s=he.map(v(o,"script"),A)).length;f<p;f++)u=o,f!==d&&(u=he.clone(u,!0,!0),l&&he.merge(s,v(u,"script"))),r.call(e[f],u,f);if(l)for(c=s[s.length-1].ownerDocument,he.map(s,P),f=0;f<l;f++)u=s[f],Ue.test(u.type||"")&&!De.access(u,"globalEval")&&he.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?he._evalUrl&&!u.noModule&&he._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},c):n(u.textContent.replace(tt,""),u,c))}return e}function D(e,t,n){for(var r,i=t?he.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||he.cleanData(v(r)),r.parentNode&&(n&&Me(r)&&b(v(r,"script")),r.parentNode.removeChild(r));return e}function q(e,t,n){var r,i,o,a,s=e.style;return(n=n||rt(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||Me(e)||(a=he.style(e,t)),!le.pixelBoxStyles()&&nt.test(a)&&ot.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function L(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function H(e){return he.cssProps[e]||lt[e]||(e in st?e:lt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=at.length;n--;)if((e=at[n]+t)in st)return e}(e)||e)}function V(e,t,n){var r=Oe.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function O(e,t,n,r,i,o){var a="width"===t?1:0,s=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=he.css(e,n+Fe[a],!0,i)),r?("content"===n&&(l-=he.css(e,"padding"+Fe[a],!0,i)),"margin"!==n&&(l-=he.css(e,"border"+Fe[a]+"Width",!0,i))):(l+=he.css(e,"padding"+Fe[a],!0,i),"padding"!==n?l+=he.css(e,"border"+Fe[a]+"Width",!0,i):s+=he.css(e,"border"+Fe[a]+"Width",!0,i));return!r&&0<=o&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))||0),l}function F(e,t,n){var r=rt(e),i=(!le.boxSizingReliable()||n)&&"border-box"===he.css(e,"boxSizing",!1,r),a=i,s=q(e,t,r),l="offset"+t[0].toUpperCase()+t.slice(1);if(nt.test(s)){if(!n)return s;s="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&o(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===he.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===he.css(e,"boxSizing",!1,r),(a=l in e)&&(s=e[l])),(s=parseFloat(s)||0)+O(e,t,n||(i?"border":"content"),a,r,s)+"px"}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function M(){ht&&(!1===fe.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(M):e.setTimeout(M,he.fx.interval),he.fx.tick())}function I(){return e.setTimeout(function(){dt=void 0}),dt=Date.now()}function $(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Fe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function W(e,t,n){for(var r,i=(z.tweeners[t]||[]).concat(z.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function z(e,t,n){var r,i,o=0,a=z.prefilters.length,s=he.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=dt||I(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;o<a;o++)u.tweens[o].run(r);return s.notifyWith(e,[u,r,n]),r<1&&a?n:(a||s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:he.extend({},t),opts:he.extend(!0,{specialEasing:{},easing:he.easing._default},n),originalProperties:t,originalOptions:n,startTime:dt||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=he.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),c=u.props;for((!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=d(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=he.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing));o<a;o++)if(r=z.prefilters[o].call(u,e,c,u.opts))return ue(r.stop)&&(he._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return he.map(c,W,u),ue(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),he.fx.timer(he.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}function B(e){return(e.match(Ce)||[]).join(" ")}function X(e){return e.getAttribute&&e.getAttribute("class")||""}function _(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Ce)||[]}function U(e,t,n,i){var o;if(Array.isArray(t))he.each(t,function(t,r){n||Nt.test(e)?i(e,r):U(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==r(t))i(e,t);else for(o in t)U(e+"["+o+"]",t[o],n,i)}function G(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ce)||[];if(ue(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Y(e,t,n,r){function i(s){var l;return o[s]=!0,he.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===It;return i(t.dataTypes[0])||!o["*"]&&i("*")}function Q(e,t){var n,r,i=he.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&he.extend(!0,e,r),e}var J=[],Z=Object.getPrototypeOf,K=J.slice,ee=J.flat?function(e){return J.flat.call(e)}:function(e){return J.concat.apply([],e)},te=J.push,ne=J.indexOf,re={},ie=re.toString,oe=re.hasOwnProperty,ae=oe.toString,se=ae.call(Object),le={},ue=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},ce=function(e){return null!=e&&e===e.window},fe=e.document,pe={type:!0,src:!0,nonce:!0,noModule:!0},de="3.5.1",he=function(e,t){return new he.fn.init(e,t)};he.fn=he.prototype={jquery:de,constructor:he,length:0,toArray:function(){return K.call(this)},get:function(e){return null==e?K.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=he.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return he.each(this,e)},map:function(e){return this.pushStack(he.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(K.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(he.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(he.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:te,sort:J.sort,splice:J.splice},he.extend=he.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||ue(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(u&&r&&(he.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||he.isPlainObject(n)?n:{},i=!1,a[t]=he.extend(u,o,r)):void 0!==r&&(a[t]=r));return a},he.extend({expando:"jQuery"+(de+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==ie.call(e)||(t=Z(e))&&("function"!=typeof(n=oe.call(t,"constructor")&&t.constructor)||ae.call(n)!==se))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,r){n(e,{nonce:t&&t.nonce},r)},each:function(e,t){var n,r=0;if(i(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?he.merge(n,"string"==typeof e?[e]:e):te.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ne.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,o,a=0,s=[];if(i(e))for(r=e.length;a<r;a++)null!=(o=t(e[a],a,n))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,n))&&s.push(o);return ee(s)},guid:1,support:le}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=J[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){re["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){function t(e,t,n,r){var i,o,a,s,l,c,p,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&(P(t),t=t||N,D)){if(11!==h&&(l=ge.exec(e)))if(i=l[1]){if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(d&&(a=d.getElementById(i))&&V(t,a)&&a.id===i)return n.push(a),n}else{if(l[2])return Y.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&v.getElementsByClassName&&t.getElementsByClassName)return Y.apply(n,t.getElementsByClassName(i)),n}if(v.qsa&&!z[e+" "]&&(!q||!q.test(e))&&(1!==h||"object"!==t.nodeName.toLowerCase())){if(p=e,d=t,1===h&&(se.test(e)||ae.test(e))){for((d=me.test(e)&&u(t.parentNode)||t)===t&&v.scope||((s=t.getAttribute("id"))?s=s.replace(be,xe):t.setAttribute("id",s=O)),o=(c=T(e)).length;o--;)c[o]=(s?"#"+s:":scope")+" "+f(c[o]);p=c.join(",")}try{return Y.apply(n,d.querySelectorAll(p)),n}catch(t){z(e,!0)}finally{s===O&&t.removeAttribute("id")}}}return C(e.replace(ie,"$1"),t,n,r)}function n(){var e=[];return function t(n,r){return e.push(n+" ")>b.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function r(e){return e[O]=!0,e}function i(e){var t=N.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=M++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,l){var u,c,f,p=[R,s];if(l){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[O]||(t[O]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=c[o])&&u[0]===R&&u[1]===s)return p[2]=u[2];if((c[o]=p)[2]=e(t,n,l))return!0}return!1}}function d(e){return 1<e.length?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function g(e,n,i,o,a,s){return o&&!o[O]&&(o=g(o)),a&&!a[O]&&(a=g(a,s)),r(function(r,s,l,u){var c,f,p,d=[],g=[],m=s.length,y=r||function(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}(n||"*",l.nodeType?[l]:l,[]),v=!e||!r&&n?y:h(y,d,e,l,u),b=i?a||(r?e:m||o)?[]:s:v;if(i&&i(v,b,l,u),o)for(c=h(b,g),o(c,[],l,u),f=c.length;f--;)(p=c[f])&&(b[g[f]]=!(v[g[f]]=p));if(r){if(a||e){if(a){for(c=[],f=b.length;f--;)(p=b[f])&&c.push(v[f]=p);a(null,b=[],c,u)}for(f=b.length;f--;)(p=b[f])&&-1<(c=a?J(r,p):d[f])&&(r[c]=!(s[c]=p))}}else b=h(b===s?b.splice(m,b.length):b),a?a(null,s,b,u):Y.apply(s,b)})}function m(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,l=p(function(e){return e===t},a,!0),u=p(function(e){return-1<J(t,e)},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==k)||((t=n).nodeType?l(e,n,r):u(e,n,r));return t=null,i}];s<i;s++)if(n=b.relative[e[s].type])c=[p(d(c),n)];else{if((n=b.filter[e[s].type].apply(null,e[s].matches))[O]){for(r=++s;r<i&&!b.relative[e[r].type];r++);return g(1<s&&d(c),1<s&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ie,"$1"),n,s<r&&m(e.slice(s,r)),r<i&&m(e=e.slice(r)),r<i&&f(e))}c.push(n)}return d(c)}var y,v,b,x,w,T,S,C,k,E,A,P,N,j,D,q,L,H,V,O="sizzle"+1*new Date,F=e.document,R=0,M=0,I=n(),$=n(),W=n(),z=n(),B=function(e,t){return e===t&&(A=!0),0},X={}.hasOwnProperty,_=[],U=_.pop,G=_.push,Y=_.push,Q=_.slice,J=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",te="\\["+K+"*("+ee+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ee+"))|)"+K+"*\\]",ne=":("+ee+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+te+")*)|.*)\\)|)",re=new RegExp(K+"+","g"),ie=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),oe=new RegExp("^"+K+"*,"+K+"*"),ae=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),se=new RegExp(K+"|>"),le=new RegExp(ne),ue=new RegExp("^"+ee+"$"),ce={ID:new RegExp("^#("+ee+")"),CLASS:new RegExp("^\\.("+ee+")"),TAG:new RegExp("^("+ee+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},fe=/HTML$/i,pe=/^(?:input|select|textarea|button)$/i,de=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\([^\\r\\n\\f])","g"),ve=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},we=function(){P()},Te=p(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{Y.apply(_=Q.call(F.childNodes),F.childNodes),_[F.childNodes.length].nodeType}catch(y){Y={apply:_.length?function(e,t){G.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}for(y in v=t.support={},w=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!fe.test(t||n&&n.nodeName||"HTML")},P=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:F;return r!=N&&9===r.nodeType&&r.documentElement&&(j=(N=r).documentElement,D=!w(N),F!=N&&(n=N.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),v.scope=i(function(e){return j.appendChild(e).appendChild(N.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),v.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),v.getElementsByTagName=i(function(e){return e.appendChild(N.createComment("")),!e.getElementsByTagName("*").length}),v.getElementsByClassName=he.test(N.getElementsByClassName),v.getById=i(function(e){return j.appendChild(e).id=O,!N.getElementsByName||!N.getElementsByName(O).length}),v.getById?(b.filter.ID=function(e){var t=e.replace(ye,ve);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&D){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var t=e.replace(ye,ve);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&D){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=v.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):v.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=v.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&D)return t.getElementsByClassName(e)},L=[],q=[],(v.qsa=he.test(N.querySelectorAll))&&(i(function(e){var t;j.appendChild(e).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+O+"-]").length||q.push("~="),(t=N.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||q.push("\\["+K+"*name"+K+"*="+K+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||q.push(":checked"),e.querySelectorAll("a#"+O+"+*").length||q.push(".#.+[+~]"),e.querySelectorAll("\\\f"),q.push("[\\r\\n\\f]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=N.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),j.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(v.matchesSelector=he.test(H=j.matches||j.webkitMatchesSelector||j.mozMatchesSelector||j.oMatchesSelector||j.msMatchesSelector))&&i(function(e){v.disconnectedMatch=H.call(e,"*"),H.call(e,"[s!='']:x"),L.push("!=",ne)}),q=q.length&&new RegExp(q.join("|")),L=L.length&&new RegExp(L.join("|")),t=he.test(j.compareDocumentPosition),V=t||he.test(j.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!v.sortDetached&&t.compareDocumentPosition(e)===n?e==N||e.ownerDocument==F&&V(F,e)?-1:t==N||t.ownerDocument==F&&V(F,t)?1:E?J(E,e)-J(E,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],l=[t];if(!i||!o)return e==N?-1:t==N?1:i?-1:o?1:E?J(E,e)-J(E,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;s[r]===l[r];)r++;return r?a(s[r],l[r]):s[r]==F?-1:l[r]==F?1:0}),N},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(P(e),v.matchesSelector&&D&&!z[n+" "]&&(!L||!L.test(n))&&(!q||!q.test(n)))try{var r=H.call(e,n);if(r||v.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){z(n,!0)}return 0<t(n,N,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!=N&&P(e),V(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!=N&&P(e);var n=b.attrHandle[t.toLowerCase()],r=n&&X.call(b.attrHandle,t.toLowerCase())?n(e,t,!D):void 0;return void 0!==r?r:v.attributes||!D?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(be,xe)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!v.detectDuplicates,E=!v.sortStable&&e.slice(0),e.sort(B),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return E=null,e},x=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=x(t);return n},(b=t.selectors={cacheLength:50,createPseudo:r,match:ce,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,ve),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,ve),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ce.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,ve).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=I[e+" "];return t||(t=new RegExp("(^|"+K+")"+e+"("+K+"|$)"))&&I(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&-1<o.indexOf(r):"$="===n?r&&o.slice(-r.length)===r:"~="===n?-1<(" "+o.replace(re," ")+" ").indexOf(r):"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s,b=!1;if(m){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(b=(d=(u=(c=(f=(p=m)[O]||(p[O]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===R&&u[1])&&u[2],p=d&&m.childNodes[d];p=++d&&p&&p[g]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){c[e]=[R,d,b];break}}else if(v&&(b=d=(u=(c=(f=(p=t)[O]||(p[O]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===R&&u[1]),!1===b)for(;(p=++d&&p&&p[g]||(b=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++b||(v&&((c=(f=p[O]||(p[O]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[R,b]),p!==t)););return(b-=i)===r||b%r==0&&0<=b/r}}},PSEUDO:function(e,n){var i,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[O]?o(n):1<o.length?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)e[r=J(e,i[a])]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(ie,"$1"));return i[O]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return 0<t(e,n).length}}),contains:r(function(e){return e=e.replace(ye,ve),function(t){return-1<(t.textContent||x(t)).indexOf(e)}}),lang:r(function(e){return ue.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,ve).toLowerCase(),function(t){var n;do{if(n=D?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===j},focus:function(e){return e===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:s(!1),disabled:s(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return de.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[y]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(y);for(y in{submit:!0,reset:!0})b.pseudos[y]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(y);return c.prototype=b.filters=b.pseudos,b.setFilters=new c,T=t.tokenize=function(e,n){var r,i,o,a,s,l,u,c=$[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=b.preFilter;s;){for(a in r&&!(i=oe.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ae.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ie," ")}),s=s.slice(r.length)),b.filter)!(i=ce[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):$(e,l).slice(0)},S=t.compile=function(e,n){var i,o,a,s,l,u,c=[],f=[],p=W[e+" "];if(!p){for(n||(n=T(e)),i=n.length;i--;)(p=m(n[i]))[O]?c.push(p):f.push(p);(p=W(e,(o=f,s=0<(a=c).length,l=0<o.length,u=function(e,n,r,i,u){
var c,f,p,d=0,g="0",m=e&&[],y=[],v=k,x=e||l&&b.find.TAG("*",u),w=R+=null==v?1:Math.random()||.1,T=x.length;for(u&&(k=n==N||n||u);g!==T&&null!=(c=x[g]);g++){if(l&&c){for(f=0,n||c.ownerDocument==N||(P(c),r=!D);p=o[f++];)if(p(c,n||N,r)){i.push(c);break}u&&(R=w)}s&&((c=!p&&c)&&d--,e&&m.push(c))}if(d+=g,s&&g!==d){for(f=0;p=a[f++];)p(m,y,n,r);if(e){if(0<d)for(;g--;)m[g]||y[g]||(y[g]=U.call(i));y=h(y)}Y.apply(i,y),u&&!e&&0<y.length&&1<d+a.length&&t.uniqueSort(i)}return u&&(R=w,k=v),m},s?r(u):u))).selector=e}return p},C=t.select=function(e,t,n,r){var i,o,a,s,l,c="function"==typeof e&&e,p=!r&&T(e=c.selector||e);if(n=n||[],1===p.length){if(2<(o=p[0]=p[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&D&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(ye,ve),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ce.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((l=b.find[s])&&(r=l(a.matches[0].replace(ye,ve),me.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&f(o)))return Y.apply(n,r),n;break}}return(c||S(e,p))(r,t,!D,n,!t||me.test(e)&&u(t.parentNode)||t),n},v.sortStable=O.split("").sort(B).join("")===O,v.detectDuplicates=!!A,P(),v.sortDetached=i(function(e){return 1&e.compareDocumentPosition(N.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),v.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);he.find=ge,he.expr=ge.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=ge.uniqueSort,he.text=ge.getText,he.isXMLDoc=ge.isXML,he.contains=ge.contains,he.escapeSelector=ge.escape;var me=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&he(e).is(n))break;r.push(e)}return r},ye=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},ve=he.expr.match.needsContext,be=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;he.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?he.find.matchesSelector(r,e)?[r]:[]:he.find.matches(e,he.grep(t,function(e){return 1===e.nodeType}))},he.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(he(e).filter(function(){for(t=0;t<r;t++)if(he.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)he.find(e,i[t],n);return 1<r?he.uniqueSort(n):n},filter:function(e){return this.pushStack(a(this,e||[],!1))},not:function(e){return this.pushStack(a(this,e||[],!0))},is:function(e){return!!a(this,"string"==typeof e&&ve.test(e)?he(e):e||[],!1).length}});var xe,we=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(he.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||xe,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:we.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof he?t[0]:t,he.merge(this,he.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:fe,!0)),be.test(r[1])&&he.isPlainObject(t))for(r in t)ue(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=fe.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ue(e)?void 0!==n.ready?n.ready(e):e(he):he.makeArray(e,this)}).prototype=he.fn,xe=he(fe);var Te=/^(?:parents|prev(?:Until|All))/,Se={children:!0,contents:!0,next:!0,prev:!0};he.fn.extend({has:function(e){var t=he(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(he.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&he(e);if(!ve.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&he.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?he.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?ne.call(he(e),this[0]):ne.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(he.uniqueSort(he.merge(this.get(),he(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),he.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return me(e,"parentNode")},parentsUntil:function(e,t,n){return me(e,"parentNode",n)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return me(e,"nextSibling")},prevAll:function(e){return me(e,"previousSibling")},nextUntil:function(e,t,n){return me(e,"nextSibling",n)},prevUntil:function(e,t,n){return me(e,"previousSibling",n)},siblings:function(e){return ye((e.parentNode||{}).firstChild,e)},children:function(e){return ye(e.firstChild)},contents:function(e){return null!=e.contentDocument&&Z(e.contentDocument)?e.contentDocument:(o(e,"template")&&(e=e.content||e),he.merge([],e.childNodes))}},function(e,t){he.fn[e]=function(n,r){var i=he.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=he.filter(r,i)),1<this.length&&(Se[e]||he.uniqueSort(i),Te.test(e)&&i.reverse()),this.pushStack(i)}});var Ce=/[^\x20\t\r\n\f]+/g;he.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},he.each(t.match(Ce)||[],function(e,t){n[t]=!0}),n):he.extend({},e);var i,o,a,s,l=[],u=[],c=-1,f=function(){for(s=s||e.once,a=i=!0;u.length;c=-1)for(o=u.shift();++c<l.length;)!1===l[c].apply(o[0],o[1])&&e.stopOnFalse&&(c=l.length,o=!1);e.memory||(o=!1),i=!1,s&&(l=o?[]:"")},p={add:function(){return l&&(o&&!i&&(c=l.length-1,u.push(o)),function t(n){he.each(n,function(n,i){ue(i)?e.unique&&p.has(i)||l.push(i):i&&i.length&&"string"!==r(i)&&t(i)})}(arguments),o&&!i&&f()),this},remove:function(){return he.each(arguments,function(e,t){for(var n;-1<(n=he.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<he.inArray(e,l):0<l.length},empty:function(){return l&&(l=[]),this},disable:function(){return s=u=[],l=o="",this},disabled:function(){return!l},lock:function(){return s=u=[],o||i||(l=o=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||f()),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!a}};return p},he.extend({Deferred:function(t){var n=[["notify","progress",he.Callbacks("memory"),he.Callbacks("memory"),2],["resolve","done",he.Callbacks("once memory"),he.Callbacks("once memory"),0,"resolved"],["reject","fail",he.Callbacks("once memory"),he.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return he.Deferred(function(t){he.each(n,function(n,r){var i=ue(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ue(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,c=arguments,f=function(){var e,f;if(!(t<a)){if((e=r.apply(s,c))===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,ue(f)?i?f.call(e,o(a,n,l,i),o(a,n,u,i)):(a++,f.call(e,o(a,n,l,i),o(a,n,u,i),o(a,n,l,n.notifyWith))):(r!==l&&(s=void 0,c=[e]),(i||n.resolveWith)(s,c))}},p=i?f:function(){try{f()}catch(e){he.Deferred.exceptionHook&&he.Deferred.exceptionHook(e,p.stackTrace),a<=t+1&&(r!==u&&(s=void 0,c=[e]),n.rejectWith(s,c))}};t?p():(he.Deferred.getStackHook&&(p.stackTrace=he.Deferred.getStackHook()),e.setTimeout(p))}}var a=0;return he.Deferred(function(e){n[0][3].add(o(0,e,ue(i)?i:l,e.notifyWith)),n[1][3].add(o(0,e,ue(t)?t:l)),n[2][3].add(o(0,e,ue(r)?r:u))}).promise()},promise:function(e){return null!=e?he.extend(e,i):i}},o={};return he.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=K.call(arguments),o=he.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=1<arguments.length?K.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(c(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||ue(i[n]&&i[n].then)))return o.then();for(;n--;)c(i[n],a(n),o.reject);return o.promise()}});var ke=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;he.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&ke.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},he.readyException=function(t){e.setTimeout(function(){throw t})};var Ee=he.Deferred();he.fn.ready=function(e){return Ee.then(e).catch(function(e){he.readyException(e)}),this},he.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--he.readyWait:he.isReady)||(he.isReady=!0)!==e&&0<--he.readyWait||Ee.resolveWith(fe,[he])}}),he.ready.then=Ee.then,"complete"===fe.readyState||"loading"!==fe.readyState&&!fe.documentElement.doScroll?e.setTimeout(he.ready):(fe.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f));var Ae=function(e,t,n,i,o,a,s){var l=0,u=e.length,c=null==n;if("object"===r(n))for(l in o=!0,n)Ae(e,t,l,n[l],!0,a,s);else if(void 0!==i&&(o=!0,ue(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(he(e),n)})),t))for(;l<u;l++)t(e[l],n,s?i:i.call(e[l],l,t(e[l],n)));return o?e:c?t.call(e):u?t(e[0],n):a},Pe=/^-ms-/,Ne=/-([a-z])/g,je=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};h.uid=1,h.prototype={cache:function(e){var t=e[this.expando];return t||(t={},je(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[d(t)]=n;else for(r in t)i[d(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][d(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(d):(t=d(t))in r?[t]:t.match(Ce)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||he.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!he.isEmptyObject(t)}};var De=new h,qe=new h,Le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,He=/[A-Z]/g;he.extend({hasData:function(e){return qe.hasData(e)||De.hasData(e)},data:function(e,t,n){return qe.access(e,t,n)},removeData:function(e,t){qe.remove(e,t)},_data:function(e,t,n){return De.access(e,t,n)},_removeData:function(e,t){De.remove(e,t)}}),he.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=qe.get(o),1===o.nodeType&&!De.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=d(r.slice(5)),g(o,r,i[r]));De.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){qe.set(this,e)}):Ae(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=qe.get(o,e))?n:void 0!==(n=g(o,e))?n:void 0;this.each(function(){qe.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){qe.remove(this,e)})}}),he.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=De.get(e,t),n&&(!r||Array.isArray(n)?r=De.access(e,t,he.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=he.queue(e,t),r=n.length,i=n.shift(),o=he._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){he.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return De.get(e,n)||De.access(e,n,{empty:he.Callbacks("once memory").add(function(){De.remove(e,[t+"queue",n])})})}}),he.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?he.queue(this[0],e):void 0===t?this:this.each(function(){var n=he.queue(this,e,t);he._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&he.dequeue(this,e)})},dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=he.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=De.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ve=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Oe=new RegExp("^(?:([+-])=|)("+Ve+")([a-z%]*)$","i"),Fe=["Top","Right","Bottom","Left"],Re=fe.documentElement,Me=function(e){return he.contains(e.ownerDocument,e)},Ie={composed:!0};Re.getRootNode&&(Me=function(e){return he.contains(e.ownerDocument,e)||e.getRootNode(Ie)===e.ownerDocument});var $e=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&Me(e)&&"none"===he.css(e,"display")},We={};he.fn.extend({show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){$e(this)?he(this).show():he(this).hide()})}});var ze,Be,Xe=/^(?:checkbox|radio)$/i,_e=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ue=/^$|^module$|\/(?:java|ecma)script/i;ze=fe.createDocumentFragment().appendChild(fe.createElement("div")),(Be=fe.createElement("input")).setAttribute("type","radio"),Be.setAttribute("checked","checked"),Be.setAttribute("name","t"),ze.appendChild(Be),le.checkClone=ze.cloneNode(!0).cloneNode(!0).lastChild.checked,ze.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!ze.cloneNode(!0).lastChild.defaultValue,ze.innerHTML="<option></option>",le.option=!!ze.lastChild;var Ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td,le.option||(Ge.optgroup=Ge.option=[1,"<select multiple='multiple'>","</select>"]);var Ye=/<|&#?\w+;/,Qe=/^key/,Je=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ze=/^([^.]*)(?:\.(.+)|)/;he.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=De.get(e);if(je(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&he.find.matchesSelector(Re,i),n.guid||(n.guid=he.guid++),(l=m.events)||(l=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){return void 0!==he&&he.event.triggered!==t.type?he.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(Ce)||[""]).length;u--;)d=g=(s=Ze.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=he.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=he.event.special[d]||{},c=he.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&he.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=l[d])||((p=l[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),he.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=De.hasData(e)&&De.get(e);if(m&&(l=m.events)){for(u=(t=(t||"").match(Ce)||[""]).length;u--;)if(d=g=(s=Ze.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=he.event.special[d]||{},p=l[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||he.removeEvent(e,d,m.handle),delete l[d])}else for(d in l)he.event.remove(e,d+t[u],n,r,!0);he.isEmptyObject(l)&&De.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),l=he.event.fix(e),u=(De.get(this,"events")||Object.create(null))[l.type]||[],c=he.event.special[l.type]||{};for(s[0]=l,t=1;t<arguments.length;t++)s[t]=arguments[t];if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){for(a=he.event.handlers.call(this,l,u),t=0;(i=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(r=((he.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,i,o,a,s=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],a={},n=0;n<l;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<he(i,this).index(u):he.find(i,this,null,[u]).length),a[i]&&o.push(r);o.length&&s.push({elem:u,handlers:o})}return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(he.Event.prototype,e,{enumerable:!0,configurable:!0,get:ue(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[he.expando]?e:new he.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Xe.test(t.type)&&t.click&&o(t,"input")&&k(t,"click",w),!1},trigger:function(e){var t=this||e;return Xe.test(t.type)&&t.click&&o(t,"input")&&k(t,"click"),!0},_default:function(e){var t=e.target;return Xe.test(t.type)&&t.click&&o(t,"input")&&De.get(t,"click")||o(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},he.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},he.Event=function(e,t){if(!(this instanceof he.Event))return new he.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?w:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&he.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[he.expando]=!0},he.Event.prototype={constructor:he.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Qe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Je.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},he.event.addProp),he.each({focus:"focusin",blur:"focusout"},function(e,t){he.event.special[e]={setup:function(){return k(this,e,S),!1},trigger:function(){return k(this,e),!0},delegateType:t}}),he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){he.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||he.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),he.fn.extend({on:function(e,t,n,r){return C(this,e,t,n,r)},one:function(e,t,n,r){return C(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,he(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=T),this.each(function(){he.event.remove(this,e,n,t)})}});var Ke=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;he.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,l,u,c=e.cloneNode(!0),f=Me(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||he.isXMLDoc(e)))for(a=v(c),r=0,i=(o=v(e)).length;r<i;r++)s=o[r],l=a[r],"input"===(u=l.nodeName.toLowerCase())&&Xe.test(s.type)?l.checked=s.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=s.defaultValue);if(t)if(n)for(o=o||v(e),a=a||v(c),r=0,i=o.length;r<i;r++)N(o[r],a[r]);else N(e,c);return 0<(a=v(c,"script")).length&&b(a,!f&&v(e,"script")),c},cleanData:function(e){for(var t,n,r,i=he.event.special,o=0;void 0!==(n=e[o]);o++)if(je(n)){if(t=n[De.expando]){if(t.events)for(r in t.events)i[r]?he.event.remove(n,r):he.removeEvent(n,r,t.handle);n[De.expando]=void 0}n[qe.expando]&&(n[qe.expando]=void 0)}}}),he.fn.extend({detach:function(e){return D(this,e,!0)},remove:function(e){return D(this,e)},text:function(e){return Ae(this,function(e){return void 0===e?he.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return j(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||E(this,e).appendChild(e)})},prepend:function(){return j(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(he.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return he.clone(this,e,t)})},html:function(e){return Ae(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ke.test(e)&&!Ge[(_e.exec(e)||["",""])[1].toLowerCase()]){e=he.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(he.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return j(this,arguments,function(t){var n=this.parentNode;he.inArray(this,e)<0&&(he.cleanData(v(this)),n&&n.replaceChild(t,this))},e)}}),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){he.fn[e]=function(e){for(var n,r=[],i=he(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),he(i[a])[t](n),te.apply(r,n.get());return this.pushStack(r)}});var nt=new RegExp("^("+Ve+")(?!px)[a-z%]+$","i"),rt=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},it=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},ot=new RegExp(Fe.join("|"),"i");!function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Re.appendChild(u).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,l=12===n(t.marginLeft),c.style.right="60%",a=36===n(t.right),i=36===n(t.width),c.style.position="absolute",o=12===n(c.offsetWidth/3),Re.removeChild(u),c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,l,u=fe.createElement("div"),c=fe.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===c.style.backgroundClip,he.extend(le,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=fe.createElement("table"),n=fe.createElement("tr"),r=fe.createElement("div"),t.style.cssText="position:absolute;left:-11111px",n.style.height="1px",r.style.height="9px",Re.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),s=3<parseInt(i.height),Re.removeChild(t)),s}}))}();var at=["Webkit","Moz","ms"],st=fe.createElement("div").style,lt={},ut=/^(none|table(?!-c[ea]).+)/,ct=/^--/,ft={position:"absolute",visibility:"hidden",display:"block"},pt={letterSpacing:"0",fontWeight:"400"};he.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=q(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d(t),l=ct.test(t),u=e.style;if(l||(t=H(s)),a=he.cssHooks[t]||he.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];"string"==(o=typeof n)&&(i=Oe.exec(n))&&i[1]&&(n=m(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=i&&i[3]||(he.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,a,s=d(t);return ct.test(t)||(t=H(s)),(a=he.cssHooks[t]||he.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=q(e,t,r)),"normal"===i&&t in pt&&(i=pt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),he.each(["height","width"],function(e,t){he.cssHooks[t]={get:function(e,n,r){if(n)return!ut.test(he.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?F(e,t,r):it(e,ft,function(){return F(e,t,r)})},set:function(e,n,r){var i,o=rt(e),a=!le.scrollboxSize()&&"absolute"===o.position,s=(a||r)&&"border-box"===he.css(e,"boxSizing",!1,o),l=r?O(e,t,r,s,o):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-O(e,t,"border",!1,o)-.5)),l&&(i=Oe.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=he.css(e,t)),V(0,n,l)}}}),he.cssHooks.marginLeft=L(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(q(e,"marginLeft"))||e.getBoundingClientRect().left-it(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),he.each({margin:"",padding:"",border:"Width"},function(e,t){he.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Fe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(he.cssHooks[e+t].set=V)}),he.fn.extend({css:function(e,t){return Ae(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=rt(e),i=t.length;a<i;a++)o[t[a]]=he.css(e,t[a],!1,r);return o}return void 0!==n?he.style(e,t,n):he.css(e,t)},e,t,1<arguments.length)}}),((he.Tween=R).prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||he.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(he.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop];return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop];return this.options.duration?this.pos=t=he.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}}).init.prototype=R.prototype,(R.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=he.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){he.fx.step[e.prop]?he.fx.step[e.prop](e):1!==e.elem.nodeType||!he.cssHooks[e.prop]&&null==e.elem.style[H(e.prop)]?e.elem[e.prop]=e.now:he.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},he.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},he.fx=R.prototype.init,he.fx.step={};var dt,ht,gt,mt,yt=/^(?:toggle|show|hide)$/,vt=/queueHooks$/;he.Animation=he.extend(z,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return m(n.elem,e,Oe.exec(t),n),n}]},tweener:function(e,t){ue(e)?(t=e,e=["*"]):e=e.match(Ce);for(var n,r=0,i=e.length;r<i;r++)n=e[r],z.tweeners[n]=z.tweeners[n]||[],z.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,l,u,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&$e(e),m=De.get(e,"fxshow");for(r in n.queue||(null==(a=he._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,he.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],yt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}d[r]=m&&m[r]||he.style(e,r)}if((l=!he.isEmptyObject(t))||!he.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=m&&m.display)&&(u=De.get(e,"display")),"none"===(c=he.css(e,"display"))&&(u?c=u:(y([e],!0),u=e.style.display||u,c=he.css(e,"display"),y([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===he.css(e,"float")&&(l||(p.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,d)l||(m?"hidden"in m&&(g=m.hidden):m=De.access(e,"fxshow",{display:u}),o&&(m.hidden=!g),g&&y([e],!0),p.done(function(){for(r in g||y([e]),De.remove(e,"fxshow"),d)he.style(e,r,d[r])})),l=W(g?m[r]:0,r,p),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?z.prefilters.unshift(e):z.prefilters.push(e)}}),he.speed=function(e,t,n){var r=e&&"object"==typeof e?he.extend({},e):{complete:n||!n&&t||ue(e)&&e,duration:e,easing:n&&t||t&&!ue(t)&&t};return he.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in he.fx.speeds?r.duration=he.fx.speeds[r.duration]:r.duration=he.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){
ue(r.old)&&r.old.call(this),r.queue&&he.dequeue(this,r.queue)},r},he.fn.extend({fadeTo:function(e,t,n,r){return this.filter($e).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=he.isEmptyObject(e),o=he.speed(t,n,r),a=function(){var t=z(this,he.extend({},e),o);(i||De.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=he.timers,a=De.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&vt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||he.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=De.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=he.timers,a=r?r.length:0;for(n.finish=!0,he.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),he.each(["toggle","show","hide"],function(e,t){var n=he.fn[t];he.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate($(t,!0),e,r,i)}}),he.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){he.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),he.timers=[],he.fx.tick=function(){var e,t=0,n=he.timers;for(dt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||he.fx.stop(),dt=void 0},he.fx.timer=function(e){he.timers.push(e),he.fx.start()},he.fx.interval=13,he.fx.start=function(){ht||(ht=!0,M())},he.fx.stop=function(){ht=null},he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=function(t,n){return t=he.fx&&he.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},gt=fe.createElement("input"),mt=fe.createElement("select").appendChild(fe.createElement("option")),gt.type="checkbox",le.checkOn=""!==gt.value,le.optSelected=mt.selected,(gt=fe.createElement("input")).value="t",gt.type="radio",le.radioValue="t"===gt.value;var bt,xt=he.expr.attrHandle;he.fn.extend({attr:function(e,t){return Ae(this,he.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){he.removeAttr(this,e)})}}),he.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?he.prop(e,t,n):(1===o&&he.isXMLDoc(e)||(i=he.attrHooks[t.toLowerCase()]||(he.expr.match.bool.test(t)?bt:void 0)),void 0!==n?null===n?void he.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=he.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&o(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Ce);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),bt={set:function(e,t,n){return!1===t?he.removeAttr(e,n):e.setAttribute(n,n),n}},he.each(he.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||he.find.attr;xt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=xt[a],xt[a]=i,i=null!=n(e,t,r)?a:null,xt[a]=o),i}});var wt=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;he.fn.extend({prop:function(e,t){return Ae(this,he.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[he.propFix[e]||e]})}}),he.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&he.isXMLDoc(e)||(t=he.propFix[t]||t,i=he.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=he.find.attr(e,"tabindex");return t?parseInt(t,10):wt.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),le.optSelected||(he.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){he.propFix[this.toLowerCase()]=this}),he.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,l=0;if(ue(e))return this.each(function(t){he(this).addClass(e.call(this,t,X(this)))});if((t=_(e)).length)for(;n=this[l++];)if(i=X(n),r=1===n.nodeType&&" "+B(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=B(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,l=0;if(ue(e))return this.each(function(t){he(this).removeClass(e.call(this,t,X(this)))});if(!arguments.length)return this.attr("class","");if((t=_(e)).length)for(;n=this[l++];)if(i=X(n),r=1===n.nodeType&&" "+B(i)+" "){for(a=0;o=t[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=B(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):ue(e)?this.each(function(n){he(this).toggleClass(e.call(this,n,X(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=he(this),a=_(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=X(this))&&De.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":De.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+B(X(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;he.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=ue(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,he(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=he.map(i,function(e){return null==e?"":e+""})),(t=he.valHooks[this.type]||he.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=he.valHooks[i.type]||he.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(St,""):null==n?"":n:void 0}}),he.extend({valHooks:{option:{get:function(e){var t=he.find.attr(e,"value");return null!=t?t:B(he.text(e))}},select:{get:function(e){var t,n,r,i=e.options,a=e.selectedIndex,s="select-one"===e.type,l=s?null:[],u=s?a+1:i.length;for(r=a<0?u:s?a:0;r<u;r++)if(((n=i[r]).selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(t=he(n).val(),s)return t;l.push(t)}return l},set:function(e,t){for(var n,r,i=e.options,o=he.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<he.inArray(he.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),he.each(["radio","checkbox"],function(){he.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<he.inArray(he(e).val(),t)}},le.checkOn||(he.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),le.focusin="onfocusin"in e;var Ct=/^(?:focusinfocus|focusoutblur)$/,kt=function(e){e.stopPropagation()};he.extend(he.event,{trigger:function(t,n,r,i){var o,a,s,l,u,c,f,p,d=[r||fe],h=oe.call(t,"type")?t.type:t,g=oe.call(t,"namespace")?t.namespace.split("."):[];if(a=p=s=r=r||fe,3!==r.nodeType&&8!==r.nodeType&&!Ct.test(h+he.event.triggered)&&(-1<h.indexOf(".")&&(h=(g=h.split(".")).shift(),g.sort()),u=h.indexOf(":")<0&&"on"+h,(t=t[he.expando]?t:new he.Event(h,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:he.makeArray(n,[t]),f=he.event.special[h]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!ce(r)){for(l=f.delegateType||h,Ct.test(l+h)||(a=a.parentNode);a;a=a.parentNode)d.push(a),s=a;s===(r.ownerDocument||fe)&&d.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=d[o++])&&!t.isPropagationStopped();)p=a,t.type=1<o?l:f.bindType||h,(c=(De.get(a,"events")||Object.create(null))[t.type]&&De.get(a,"handle"))&&c.apply(a,n),(c=u&&a[u])&&c.apply&&je(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!je(r)||u&&ue(r[h])&&!ce(r)&&((s=r[u])&&(r[u]=null),he.event.triggered=h,t.isPropagationStopped()&&p.addEventListener(h,kt),r[h](),t.isPropagationStopped()&&p.removeEventListener(h,kt),he.event.triggered=void 0,s&&(r[u]=s)),t.result}},simulate:function(e,t,n){var r=he.extend(new he.Event,n,{type:e,isSimulated:!0});he.event.trigger(r,null,t)}}),he.fn.extend({trigger:function(e,t){return this.each(function(){he.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return he.event.trigger(e,t,n,!0)}}),le.focusin||he.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){he.event.simulate(t,e.target,he.event.fix(e))};he.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=De.access(r,t);i||r.addEventListener(e,n,!0),De.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=De.access(r,t)-1;i?De.access(r,t,i):(r.removeEventListener(e,n,!0),De.remove(r,t))}}});var Et=e.location,At={guid:Date.now()},Pt=/\?/;he.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||he.error("Invalid XML: "+t),n};var Nt=/\[\]$/,jt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,qt=/^(?:input|select|textarea|keygen)/i;he.param=function(e,t){var n,r=[],i=function(e,t){var n=ue(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!he.isPlainObject(e))he.each(e,function(){i(this.name,this.value)});else for(n in e)U(n,e[n],t,i);return r.join("&")},he.fn.extend({serialize:function(){return he.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=he.prop(this,"elements");return e?he.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!he(this).is(":disabled")&&qt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!Xe.test(e))}).map(function(e,t){var n=he(this).val();return null==n?null:Array.isArray(n)?he.map(n,function(e){return{name:t.name,value:e.replace(jt,"\r\n")}}):{name:t.name,value:n.replace(jt,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Vt=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,Rt=/^\/\//,Mt={},It={},$t="*/".concat("*"),Wt=fe.createElement("a");Wt.href=Et.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,he.ajaxSettings),t):Q(he.ajaxSettings,e)},ajaxPrefilter:G(Mt),ajaxTransport:G(It),ajax:function(t,n){function r(t,n,r,s){var u,p,d,x,w,T=n;c||(c=!0,l&&e.clearTimeout(l),i=void 0,a=s||"",S.readyState=0<t?4:0,u=200<=t&&t<300||304===t,r&&(x=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i);break}if(l[0]in n)o=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,S,r)),!u&&-1<he.inArray("script",h.dataTypes)&&(h.converters["text script"]=function(){}),x=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,x,S,u),u?(h.ifModified&&((w=S.getResponseHeader("Last-Modified"))&&(he.lastModified[o]=w),(w=S.getResponseHeader("etag"))&&(he.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=x.state,p=x.data,u=!(d=x.error))):(d=T,!t&&T||(T="error",t<0&&(t=0))),S.status=t,S.statusText=(n||T)+"",u?y.resolveWith(g,[p,T,S]):y.rejectWith(g,[S,T,d]),S.statusCode(b),b=void 0,f&&m.trigger(u?"ajaxSuccess":"ajaxError",[S,h,u?p:d]),v.fireWith(g,[S,T]),f&&(m.trigger("ajaxComplete",[S,h]),--he.active||he.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,l,u,c,f,p,d,h=he.ajaxSetup({},n),g=h.context||h,m=h.context&&(g.nodeType||g.jquery)?he(g):he.event,y=he.Deferred(),v=he.Callbacks("once memory"),b=h.statusCode||{},x={},w={},T="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Ot.exec(a);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)S.always(e[S.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(y.promise(S),h.url=((t||h.url||Et.href)+"").replace(Rt,Et.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ce)||[""],null==h.crossDomain){u=fe.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=u.protocol+"//"+u.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=he.param(h.data,h.traditional)),Y(Mt,h,n,S),c)return S;for(p in(f=he.event&&h.global)&&0==he.active++&&he.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Ft.test(h.type),o=h.url.replace(Ht,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Lt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Pt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Vt,"$1"),d=(Pt.test(o)?"&":"?")+"_="+At.guid+++d),h.url=o+d),h.ifModified&&(he.lastModified[o]&&S.setRequestHeader("If-Modified-Since",he.lastModified[o]),he.etag[o]&&S.setRequestHeader("If-None-Match",he.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&S.setRequestHeader("Content-Type",h.contentType),S.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]),h.headers)S.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,S,h)||c))return S.abort();if(T="abort",v.add(h.complete),S.done(h.success),S.fail(h.error),i=Y(It,h,n,S)){if(S.readyState=1,f&&m.trigger("ajaxSend",[S,h]),c)return S;h.async&&0<h.timeout&&(l=e.setTimeout(function(){S.abort("timeout")},h.timeout));try{c=!1,i.send(x,r)}catch(t){if(c)throw t;r(-1,t)}}else r(-1,"No Transport");return S},getJSON:function(e,t,n){return he.get(e,t,n,"json")},getScript:function(e,t){return he.get(e,void 0,t,"script")}}),he.each(["get","post"],function(e,t){he[t]=function(e,n,r,i){return ue(n)&&(i=i||r,r=n,n=void 0),he.ajax(he.extend({url:e,type:t,dataType:i,data:n,success:r},he.isPlainObject(e)&&e))}}),he.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),he._evalUrl=function(e,t,n){return he.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){he.globalEval(e,t,n)}})},he.fn.extend({wrapAll:function(e){var t;return this[0]&&(ue(e)&&(e=e.call(this[0])),t=he(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ue(e)?this.each(function(t){he(this).wrapInner(e.call(this,t))}):this.each(function(){var t=he(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ue(e);return this.each(function(n){he(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){he(this).replaceWith(this.childNodes)}),this}}),he.expr.pseudos.hidden=function(e){return!he.expr.pseudos.visible(e)},he.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},he.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var zt={0:200,1223:204},Bt=he.ajaxSettings.xhr();le.cors=!!Bt&&"withCredentials"in Bt,le.ajax=Bt=!!Bt,he.ajaxTransport(function(t){var n,r;if(le.cors||Bt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(zt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(i){if(n)throw i}},abort:function(){n&&n()}}}),he.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return he.globalEval(e),e}}}),he.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),he.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=he("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),fe.head.appendChild(t[0])},abort:function(){n&&n()}}});var Xt,_t=[],Ut=/(=)\?(?=&|$)|\?\?/;he.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||he.expando+"_"+At.guid++;return this[e]=!0,e}}),he.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Ut.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ue(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ut,"$1"+i):!1!==t.jsonp&&(t.url+=(Pt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||he.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?he(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,_t.push(i)),a&&ue(o)&&o(a[0]),a=o=void 0}),"script"}),le.createHTMLDocument=((Xt=fe.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Xt.childNodes.length),he.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=fe.implementation.createHTMLDocument("")).createElement("base")).href=fe.location.href,t.head.appendChild(r)):t=fe),o=!n&&[],(i=be.exec(e))?[t.createElement(i[1])]:(i=x([e],t,o),o&&o.length&&he(o).remove(),he.merge([],i.childNodes)));var r,i,o},he.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=B(e.slice(s)),e=e.slice(0,s)),ue(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&he.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?he("<div>").append(he.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},he.expr.pseudos.animated=function(e){return he.grep(he.timers,function(t){return e===t.elem}).length},he.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=he.css(e,"position"),c=he(e),f={};"static"===u&&(e.style.position="relative"),s=c.offset(),o=he.css(e,"top"),l=he.css(e,"left"),("absolute"===u||"fixed"===u)&&-1<(o+l).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),ue(t)&&(t=t.call(e,n,he.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},he.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){he.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===he.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===he.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=he(e).offset()).top+=he.css(e,"borderTopWidth",!0),i.left+=he.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-he.css(r,"marginTop",!0),left:t.left-i.left-he.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===he.css(e,"position");)e=e.offsetParent;return e||Re})}}),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;he.fn[e]=function(r){return Ae(this,function(e,r,i){var o;if(ce(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),he.each(["top","left"],function(e,t){he.cssHooks[t]=L(le.pixelPosition,function(e,n){if(n)return n=q(e,t),nt.test(n)?he(e).position()[t]+"px":n})}),he.each({Height:"height",Width:"width"},function(e,t){he.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){he.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Ae(this,function(t,n,i){var o;return ce(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?he.css(t,n,s):he.style(t,n,i,s)},t,a?i:void 0,a)}})}),he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){he.fn[t]=function(e){return this.on(t,e)}}),he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){he.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;he.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ue(e))return r=K.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(K.call(arguments)))}).guid=e.guid=e.guid||he.guid++,i},he.holdReady=function(e){e?he.readyWait++:he.ready(!0)},he.isArray=Array.isArray,he.parseJSON=JSON.parse,he.nodeName=o,he.isFunction=ue,he.isWindow=ce,he.camelCase=d,he.type=r,he.now=Date.now,he.isNumeric=function(e){var t=he.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},he.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return he});var Yt=e.jQuery,Qt=e.$;return he.noConflict=function(t){return e.$===he&&(e.$=Qt),t&&e.jQuery===he&&(e.jQuery=Yt),he},void 0===t&&(e.jQuery=e.$=he),he}),/*! jQuery UI - v1.12.1 - 2020-02-11
 * http://jqueryui.com
 * Includes: focusable.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){for(var t=e.css("visibility");"inherit"===t;)e=e.parent(),t=e.css("visibility");return"hidden"!==t}e.ui=e.ui||{};e.ui.version="1.12.1";/*!
   * jQuery UI Focusable 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
e.ui.focusable=function(n,r){var i,o,a,s,l,u=n.nodeName.toLowerCase();return"area"===u?(i=n.parentNode,o=i.name,!(!n.href||!o||"map"!==i.nodeName.toLowerCase())&&(a=e("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!n.disabled)&&(l=e(n).closest("fieldset")[0])&&(s=!l.disabled):s="a"===u?n.href||r:r,s&&e(n).is(":visible")&&t(e(n)))},e.extend(e.expr[":"],{focusable:function(t){return e.ui.focusable(t,null!=e.attr(t,"tabindex"))}});e.ui.focusable}),/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";return function(e,t,n,r){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function o(e){return x.isWrapped(e)?e=v.call(e):x.isNode(e)&&(e=[e]),e}function a(e){var t=h.data(e,"velocity");return null===t?r:t}function s(e,t){var n=a(e);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-t+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}function l(e,t){var n=a(e);n&&n.delayTimer&&n.delayPaused&&(n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}function u(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,n,r,i){function o(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,n){return((o(t,n)*e+a(t,n))*e+s(t))*e}function u(e,t,n){return 3*o(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var i=0;i<g;++i){var o=u(n,e,r);if(0===o)return n;n-=(l(n,e,r)-t)/o}return n}function f(){for(var t=0;t<b;++t)S[t]=l(t*x,e,r)}function p(t,n,i){var o,a,s=0;do{a=n+(i-n)/2,o=l(a,e,r)-t,o>0?i=a:n=a}while(Math.abs(o)>y&&++s<v);return a}function d(t){for(var n=0,i=1,o=b-1;i!==o&&S[i]<=t;++i)n+=x;--i;var a=(t-S[i])/(S[i+1]-S[i]),s=n+a*x,l=u(s,e,r);return l>=m?c(t,s):0===l?s:p(t,n,n+x)}function h(){C=!0,e===n&&r===i||f()}var g=4,m=.001,y=1e-7,v=10,b=11,x=1/(b-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var T=0;T<4;++T)if("number"!=typeof arguments[T]||isNaN(arguments[T])||!isFinite(arguments[T]))return!1;e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);var S=w?new Float32Array(b):new Array(b),C=!1,k=function(t){return C||h(),e===n&&r===i?t:0===t?0:1===t?1:l(d(t),n,i)};k.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var E="generateBezier("+[e,n,r,i]+")";return k.toString=function(){return E},k}function f(e,t){var n=e;return x.isString(e)?C.Easings[e]||(n=!1):n=x.isArray(e)&&1===e.length?u.apply(null,e):x.isArray(e)&&2===e.length?k.apply(null,e.concat([t])):!(!x.isArray(e)||4!==e.length)&&c.apply(null,e),!1===n&&(n=C.Easings[C.defaults.easing]?C.defaults.easing:S),n}function p(e){if(e){var t=C.timestamp&&!0!==e?e:y.now(),n=C.State.calls.length;n>1e4&&(C.State.calls=i(C.State.calls),n=C.State.calls.length);for(var o=0;o<n;o++)if(C.State.calls[o]){var s=C.State.calls[o],l=s[0],u=s[2],c=s[3],f=!c,m=null,v=s[5],b=s[6];if(c||(c=C.State.calls[o][3]=t-16),v){if(!0!==v.resume)continue;c=s[3]=Math.round(t-b-16),s[5]=null}b=s[6]=t-c;for(var w=Math.min(b/u.duration,1),T=0,S=l.length;T<S;T++){var k=l[T],A=k.element;if(a(A)){var N=!1;if(u.display!==r&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var j=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];h.each(j,function(e,t){E.setPropertyValue(A,"display",t)})}E.setPropertyValue(A,"display",u.display)}u.visibility!==r&&"hidden"!==u.visibility&&E.setPropertyValue(A,"visibility",u.visibility);for(var D in k)if(k.hasOwnProperty(D)&&"element"!==D){var q,L=k[D],H=x.isString(L.easing)?C.Easings[L.easing]:L.easing;if(x.isString(L.pattern)){var V=1===w?function(e,t,n){var r=L.endValue[t];return n?Math.round(r):r}:function(e,t,n){var r=L.startValue[t],i=L.endValue[t]-r,o=r+i*H(w,u,i);return n?Math.round(o):o};q=L.pattern.replace(/{(\d+)(!)?}/g,V)}else if(1===w)q=L.endValue;else{var O=L.endValue-L.startValue;q=L.startValue+O*H(w,u,O)}if(!f&&q===L.currentValue)continue;if(L.currentValue=q,"tween"===D)m=q;else{var F;if(E.Hooks.registered[D]){F=E.Hooks.getRoot(D);var R=a(A).rootPropertyValueCache[F];R&&(L.rootPropertyValue=R)}var M=E.setPropertyValue(A,D,L.currentValue+(g<9&&0===parseFloat(q)?"":L.unitType),L.rootPropertyValue,L.scrollData);E.Hooks.registered[D]&&(E.Normalizations.registered[F]?a(A).rootPropertyValueCache[F]=E.Normalizations.registered[F]("extract",null,M[1]):a(A).rootPropertyValueCache[F]=M[1]),"transform"===M[0]&&(N=!0)}}u.mobileHA&&a(A).transformCache.translate3d===r&&(a(A).transformCache.translate3d="(0px, 0px, 0px)",N=!0),N&&E.flushTransformCache(A)}}u.display!==r&&"none"!==u.display&&(C.State.calls[o][2].display=!1),u.visibility!==r&&"hidden"!==u.visibility&&(C.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],w,Math.max(0,c+u.duration-t),c,m),1===w&&d(o)}}C.State.isTicking&&P(p)}function d(e,t){if(!C.State.calls[e])return!1;for(var n=C.State.calls[e][0],i=C.State.calls[e][1],o=C.State.calls[e][2],s=C.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var f=n[u].element;t||o.loop||("none"===o.display&&E.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&E.setPropertyValue(f,"visibility",o.visibility));var p=a(f);if(!0!==o.loop&&(h.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(h.queue(f)[1]))&&p){p.isAnimating=!1,p.rootPropertyValueCache={};var d=!1;h.each(E.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=p.transformCache[t];p.transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)&&(d=!0,delete p.transformCache[t])}),o.mobileHA&&(d=!0,delete p.transformCache.translate3d),d&&E.flushTransformCache(f),E.Values.removeClass(f,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}s&&!0!==o.loop&&s(i),p&&!0===o.loop&&!t&&(h.each(p.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0){var n=t.startValue;t.startValue=t.endValue,t.endValue=n}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),C(f,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&h.dequeue(f,o.queue)}C.State.calls[e]=!1;for(var g=0,m=C.State.calls.length;g<m;g++)if(!1!==C.State.calls[g]){l=!0;break}!1===l&&(C.State.isTicking=!1,delete C.State.calls,C.State.calls=[])}var h,g=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return r}(),m=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),y=function(){var e=t.performance||{};if("function"!=typeof e.now){var n=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime();e.now=function(){return(new Date).getTime()-n}}return e}(),v=function(){var e=Array.prototype.slice;try{return e.call(n.documentElement),e}catch(t){return function(t,n){var r=this.length;if("number"!=typeof t&&(t=0),"number"!=typeof n&&(n=r),this.slice)return e.call(this,t,n);var i,o=[],a=t>=0?t:Math.max(0,r+t),s=n<0?r+n:Math.min(n,r),l=s-a;if(l>0)if(o=new Array(l),this.charAt)for(i=0;i<l;i++)o[i]=this.charAt(a+i);else for(i=0;i<l;i++)o[i]=this[a+i];return o}}}(),b=function(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return e.indexOf(t)>=0}:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}},x={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&x.isNumber(e.length)&&!x.isString(e)&&!x.isFunction(e)&&!x.isNode(e)&&(0===e.length||x.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},w=!1;if(e.fn&&e.fn.jquery?(h=e,w=!0):h=t.Velocity.Utilities,g<=8&&!w)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(g<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var T=400,S="swing",C={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),isAndroid:/Android/i.test(t.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(t.navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:h,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:T,easing:S,begin:r,complete:r,progress:r,display:r,visibility:r,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){h.data(e,"velocity",{isSVG:x.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:1},debug:!1,timestamp:!0,pauseAll:function(e){var t=(new Date).getTime();h.each(C.State.calls,function(t,n){if(n){if(e!==r&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]={resume:!1}}}),h.each(C.State.delayedElements,function(e,n){n&&s(n,t)})},resumeAll:function(e){var t=(new Date).getTime();h.each(C.State.calls,function(t,n){if(n){if(e!==r&&(n[2].queue!==e||!1===n[2].queue))return!0;n[5]&&(n[5].resume=!0)}}),h.each(C.State.delayedElements,function(e,n){n&&l(n,t)})}};t.pageYOffset!==r?(C.State.scrollAnchor=t,C.State.scrollPropertyLeft="pageXOffset",C.State.scrollPropertyTop="pageYOffset"):(C.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,C.State.scrollPropertyLeft="scrollLeft",C.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var k=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),a=t(n,.5*r,o),s=t(n,r,a),l=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+l*r,n.v=n.v+u*r,n}return function e(t,r,i){var o,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,i=i||null,l.tension=t,l.friction=r,o=null!==i,o?(c=e(t,r),a=c/i*.016):a=.016;;)if(s=n(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4))break;return o?function(e){return u[e*(u.length-1)|0]}:c}}();C.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},h.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){C.Easings[t[0]]=c.apply(null,t[1])});var E=C.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<E.Lists.colors.length;e++){var t="color"===E.Lists.colors[e]?"0 0 0 1":"255 255 255 1";E.Hooks.templates[E.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,i;if(g)for(n in E.Hooks.templates)if(E.Hooks.templates.hasOwnProperty(n)){r=E.Hooks.templates[n],i=r[0].split(" ");var o=r[1].match(E.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),E.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in E.Hooks.templates)if(E.Hooks.templates.hasOwnProperty(n)){r=E.Hooks.templates[n],i=r[0].split(" ");for(var a in i)if(i.hasOwnProperty(a)){var s=n+i[a],l=a;E.Hooks.registered[s]=[n,l]}}},getRoot:function(e){var t=E.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&b(E.Lists.units,n)?n:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return E.Lists.colorNames.hasOwnProperty(n)?(t||"rgba(")+E.Lists.colorNames[n]+(t?"":",1)"):t+n})},cleanRootPropertyValue:function(e,t){return E.RegEx.valueUnwrap.test(t)&&(t=t.match(E.RegEx.valueUnwrap)[1]),E.Values.isCSSNullValue(t)&&(t=E.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=E.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=E.Hooks.cleanRootPropertyValue(r,t),t.toString().match(E.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=E.Hooks.registered[e];if(r){var i,o=r[0],a=r[1];return n=E.Hooks.cleanRootPropertyValue(o,n),i=n.toString().match(E.RegEx.valueSplit),i[a]=t,i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return E.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(E.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return C.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(g<=8)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){function e(e,t,n){if("border-box"===E.getPropertyValue(t,"boxSizing").toString().toLowerCase()===(n||!1)){var r,i,o=0,a="width"===e?["Left","Right"]:["Top","Bottom"],s=["padding"+a[0],"padding"+a[1],"border"+a[0]+"Width","border"+a[1]+"Width"];for(r=0;r<s.length;r++)i=parseFloat(E.getPropertyValue(t,s[r])),isNaN(i)||(o+=i);return n?-o:o}return 0}function t(t,n){return function(r,i,o){switch(r){case"name":return t;case"extract":return parseFloat(o)+e(t,i,n);case"inject":return parseFloat(o)-e(t,i,n)+"px"}}}g&&!(g>9)||C.State.isGingerbread||(E.Lists.transformsBase=E.Lists.transformsBase.concat(E.Lists.transforms3D));for(var n=0;n<E.Lists.transformsBase.length;n++)!function(){var e=E.Lists.transformsBase[n];E.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return"transform";case"extract":return a(n)===r||a(n).transformCache[e]===r?/^scale/i.test(e)?1:0:a(n).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":C.State.isAndroid&&a(n).transformCache[e]===r&&i<1&&(i=1),o=!/(\d)$/i.test(i);break;case"skew":case"rotate":o=!/(deg|\d)$/i.test(i)}return o||(a(n).transformCache[e]="("+i+")"),a(n).transformCache[e]}}}();for(var i=0;i<E.Lists.colors.length;i++)!function(){var e=E.Lists.colors[i];E.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return e;case"extract":var o;if(E.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==r?s[i]:s.black:E.RegEx.isHex.test(i)?a="rgb("+E.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),o=(a||i).toString().match(E.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!g||g>8)&&3===o.split(" ").length&&(o+=" 1"),o;case"inject":return/^rgb/.test(i)?i:(g<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(g<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();E.Normalizations.registered.innerWidth=t("width",!0),E.Normalizations.registered.innerHeight=t("height",!0),E.Normalizations.registered.outerWidth=t("width"),E.Normalizations.registered.outerHeight=t("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(g||C.State.isAndroid&&!C.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(C.State.prefixMatches[e])return[C.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;n<r;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),x.isString(C.State.prefixElement.style[i]))return C.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(x.isString(e.className))e.className+=(e.className.length?" ":"")+t;else{var n=e.getAttribute(g<=7?"className":"class")||"";e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(x.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{var n=e.getAttribute(g<=7?"className":"class")||"";e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,n,i,o){function s(e,n){var i=0;if(g<=8)i=h.css(e,n);else{var l=!1;/^(width|height)$/.test(n)&&0===E.getPropertyValue(e,"display")&&(l=!0,E.setPropertyValue(e,"display",E.Values.getDisplayType(e)));var u=function(){l&&E.setPropertyValue(e,"display","none")};if(!o){if("height"===n&&"border-box"!==E.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(E.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(E.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(E.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(E.getPropertyValue(e,"paddingBottom"))||0);return u(),c}if("width"===n&&"border-box"!==E.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(E.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(E.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(E.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(E.getPropertyValue(e,"paddingRight"))||0);return u(),f}}var p;p=a(e)===r?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),i=9===g&&"filter"===n?p.getPropertyValue(n):p[n],""!==i&&null!==i||(i=e.style[n]),u()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(n)){var d=s(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(n))&&(i=h(e).position()[n]+"px")}return i}var l;if(E.Hooks.registered[n]){var u=n,c=E.Hooks.getRoot(u);i===r&&(i=E.getPropertyValue(e,E.Names.prefixCheck(c)[0])),E.Normalizations.registered[c]&&(i=E.Normalizations.registered[c]("extract",e,i)),l=E.Hooks.extractValue(u,i)}else if(E.Normalizations.registered[n]){var f,p;f=E.Normalizations.registered[n]("name",e),"transform"!==f&&(p=s(e,E.Names.prefixCheck(f)[0]),E.Values.isCSSNullValue(p)&&E.Hooks.templates[n]&&(p=E.Hooks.templates[n][1])),l=E.Normalizations.registered[n]("extract",e,p)}if(!/^[\d-]/.test(l)){var d=a(e);if(d&&d.isSVG&&E.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=e.getBBox()[n]}catch(e){l=0}else l=e.getAttribute(n);else l=s(e,E.Names.prefixCheck(n)[0])}return E.Values.isCSSNullValue(l)&&(l=0),C.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,r,i,o){var s=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?t.scrollTo(r,o.alternateValue):t.scrollTo(o.alternateValue,r);else if(E.Normalizations.registered[n]&&"transform"===E.Normalizations.registered[n]("name",e))E.Normalizations.registered[n]("inject",e,r),s="transform",r=a(e).transformCache[n];else{if(E.Hooks.registered[n]){var l=n,u=E.Hooks.getRoot(n);i=i||E.getPropertyValue(e,u),r=E.Hooks.injectValue(l,r,i),n=u}if(E.Normalizations.registered[n]&&(r=E.Normalizations.registered[n]("inject",e,r),n=E.Normalizations.registered[n]("name",e)),s=E.Names.prefixCheck(n)[0],g<=8)try{e.style[s]=r}catch(e){C.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else{var c=a(e);c&&c.isSVG&&E.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[s]=r}C.debug>=2&&console.log("Set "+n+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(e){var t="",n=a(e);if((g||C.State.isAndroid&&!C.State.isChrome)&&n&&n.isSVG){var r=function(t){return parseFloat(E.getPropertyValue(e,t))},i={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],rotate:[r("rotateZ"),0,0]};h.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),i[e]&&(t+=e+"("+i[e].join(" ")+") ",delete i[e])})}else{var o,s;h.each(a(e).transformCache,function(n){if(o=a(e).transformCache[n],"transformPerspective"===n)return s=o,!0;9===g&&"rotateZ"===n&&(n="rotate"),t+=n+o+" "}),s&&(t="perspective"+s+" "+t)}E.setPropertyValue(e,"transform",t)}};E.Hooks.register(),E.Normalizations.register(),C.hook=function(e,t,n){var i;return e=o(e),h.each(e,function(e,o){if(a(o)===r&&C.init(o),n===r)i===r&&(i=E.getPropertyValue(o,t));else{var s=E.setPropertyValue(o,t,n);"transform"===s[0]&&C.CSS.flushTransformCache(o),i=s}}),i};var A=function(){function e(){return c?k.promise||null:g}function i(e,i){function o(o){var c,d;if(l.begin&&0===N)try{l.begin.call(y,y)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===q){var g,m,T,S=/^x$/i.test(l.axis)?"Left":"Top",A=parseFloat(l.offset)||0;l.container?x.isWrapped(l.container)||x.isNode(l.container)?(l.container=l.container[0]||l.container,g=l.container["scroll"+S],T=g+h(e).position()[S.toLowerCase()]+A):l.container=null:(g=C.State.scrollAnchor[C.State["scrollProperty"+S]],m=C.State.scrollAnchor[C.State["scrollProperty"+("Left"===S?"Top":"Left")]],T=h(e).offset()[S.toLowerCase()]+A),u={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:T,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:S,alternateValue:m}},element:e},C.debug&&console.log("tweensContainer (scroll): ",u.scroll,e)}else if("reverse"===q){if(!(c=a(e)))return;if(!c.tweensContainer)return void h.dequeue(e,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,w.easing||delete l.easing,w.duration||delete l.duration,l=h.extend({},c.opts,l),d=h.extend(!0,{},c?c.tweensContainer:null);for(var j in d)if(d.hasOwnProperty(j)&&"element"!==j){var D=d[j].startValue;d[j].startValue=d[j].currentValue=d[j].endValue,d[j].endValue=D,x.isEmptyObject(w)||(d[j].easing=l.easing),C.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(d[j]),e)}u=d}else if("start"===q){c=a(e),c&&c.tweensContainer&&!0===c.isAnimating&&(d=c.tweensContainer);var L=function(i,o){var a,f=E.Hooks.getRoot(i),p=!1,g=o[0],m=o[1],y=o[2];if(!(c&&c.isSVG||"tween"===f||!1!==E.Names.prefixCheck(f)[1]||E.Normalizations.registered[f]!==r))return void(C.debug&&console.log("Skipping ["+f+"] due to a lack of browser support."));(l.display!==r&&null!==l.display&&"none"!==l.display||l.visibility!==r&&"hidden"!==l.visibility)&&/opacity|filter/.test(i)&&!y&&0!==g&&(y=0),l._cacheValues&&d&&d[i]?(y===r&&(y=d[i].endValue+d[i].unitType),p=c.rootPropertyValueCache[f]):E.Hooks.registered[i]?y===r?(p=E.getPropertyValue(e,f),y=E.getPropertyValue(e,i,p)):p=E.Hooks.templates[f][1]:y===r&&(y=E.getPropertyValue(e,i));var v,b,w,T=!1,S=function(e,t){var n,r;return r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=E.Values.getUnitType(e)),[r,n]};if(y!==g&&x.isString(y)&&x.isString(g)){a="";var k=0,A=0,P=[],N=[],j=0,D=0,q=0;for(y=E.Hooks.fixColors(y),g=E.Hooks.fixColors(g);k<y.length&&A<g.length;){var L=y[k],H=g[A];if(/[\d\.-]/.test(L)&&/[\d\.-]/.test(H)){for(var V=L,O=H,F=".",M=".";++k<y.length;){if((L=y[k])===F)F="..";else if(!/\d/.test(L))break;V+=L}for(;++A<g.length;){if((H=g[A])===M)M="..";else if(!/\d/.test(H))break;O+=H}var I=E.Hooks.getUnit(y,k),$=E.Hooks.getUnit(g,A);if(k+=I.length,A+=$.length,I===$)V===O?a+=V+I:(a+="{"+P.length+(D?"!":"")+"}"+I,P.push(parseFloat(V)),N.push(parseFloat(O)));else{var W=parseFloat(V),z=parseFloat(O);a+=(j<5?"calc":"")+"("+(W?"{"+P.length+(D?"!":"")+"}":"0")+I+" + "+(z?"{"+(P.length+(W?1:0))+(D?"!":"")+"}":"0")+$+")",W&&(P.push(W),N.push(0)),z&&(P.push(0),N.push(z))}}else{if(L!==H){j=0;break}a+=L,k++,A++,0===j&&"c"===L||1===j&&"a"===L||2===j&&"l"===L||3===j&&"c"===L||j>=4&&"("===L?j++:(j&&j<5||j>=4&&")"===L&&--j<5)&&(j=0),0===D&&"r"===L||1===D&&"g"===L||2===D&&"b"===L||3===D&&"a"===L||D>=3&&"("===L?(3===D&&"a"===L&&(q=1),D++):q&&","===L?++q>3&&(D=q=0):(q&&D<(q?5:4)||D>=(q?4:3)&&")"===L&&--D<(q?5:4))&&(D=q=0)}}k===y.length&&A===g.length||(C.debug&&console.error('Trying to pattern match mis-matched strings ["'+g+'", "'+y+'"]'),a=r),a&&(P.length?(C.debug&&console.log('Pattern found "'+a+'" -> ',P,N,"["+y+","+g+"]"),y=P,g=N,b=w=""):a=r)}a||(v=S(i,y),y=v[0],w=v[1],v=S(i,g),g=v[0].replace(/^([+-\/*])=/,function(e,t){return T=t,""}),b=v[1],y=parseFloat(y)||0,g=parseFloat(g)||0,"%"===b&&(/^(fontSize|lineHeight)$/.test(i)?(g/=100,b="em"):/^scale/.test(i)?(g/=100,b=""):/(Red|Green|Blue)$/i.test(i)&&(g=g/100*255,b="")));if(/[\/*]/.test(T))b=w;else if(w!==b&&0!==y)if(0===g)b=w;else{s=s||function(){var r={myParent:e.parentNode||n.body,position:E.getPropertyValue(e,"position"),fontSize:E.getPropertyValue(e,"fontSize")},i=r.position===R.lastPosition&&r.myParent===R.lastParent,o=r.fontSize===R.lastFontSize;R.lastParent=r.myParent,R.lastPosition=r.position,R.lastFontSize=r.fontSize;var a={};if(o&&i)a.emToPx=R.lastEmToPx,a.percentToPxWidth=R.lastPercentToPxWidth,a.percentToPxHeight=R.lastPercentToPxHeight;else{var s=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");C.init(s),r.myParent.appendChild(s),h.each(["overflow","overflowX","overflowY"],function(e,t){C.CSS.setPropertyValue(s,t,"hidden")}),C.CSS.setPropertyValue(s,"position",r.position),C.CSS.setPropertyValue(s,"fontSize",r.fontSize),C.CSS.setPropertyValue(s,"boxSizing","content-box"),h.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){C.CSS.setPropertyValue(s,t,"100%")}),C.CSS.setPropertyValue(s,"paddingLeft","100em"),a.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(E.getPropertyValue(s,"width",null,!0))||1)/100,a.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(E.getPropertyValue(s,"height",null,!0))||1)/100,a.emToPx=R.lastEmToPx=(parseFloat(E.getPropertyValue(s,"paddingLeft"))||1)/100,r.myParent.removeChild(s)}return null===R.remToPx&&(R.remToPx=parseFloat(E.getPropertyValue(n.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(t.innerWidth)/100,R.vhToPx=parseFloat(t.innerHeight)/100),a.remToPx=R.remToPx,a.vwToPx=R.vwToPx,a.vhToPx=R.vhToPx,C.debug>=1&&console.log("Unit ratios: "+JSON.stringify(a),e),a}();var B=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y";switch(w){case"%":y*="x"===B?s.percentToPxWidth:s.percentToPxHeight;break;case"px":break;default:y*=s[w+"ToPx"]}switch(b){case"%":y*=1/("x"===B?s.percentToPxWidth:s.percentToPxHeight);break;case"px":break;default:y*=1/s[b+"ToPx"]}}switch(T){case"+":g=y+g;break;case"-":g=y-g;break;case"*":g*=y;break;case"/":g=y/g}u[i]={rootPropertyValue:p,startValue:y,currentValue:y,endValue:g,unitType:b,easing:m},a&&(u[i].pattern=a),C.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(u[i]),e)};for(var H in v)if(v.hasOwnProperty(H)){var V=E.Names.camelCase(H),O=function(t,n){var r,o,a;return x.isFunction(t)&&(t=t.call(e,i,P)),x.isArray(t)?(r=t[0],!x.isArray(t[1])&&/^[\d-]/.test(t[1])||x.isFunction(t[1])||E.RegEx.isHex.test(t[1])?a=t[1]:x.isString(t[1])&&!E.RegEx.isHex.test(t[1])&&C.Easings[t[1]]||x.isArray(t[1])?(o=n?t[1]:f(t[1],l.duration),a=t[2]):a=t[1]||t[2]):r=t,n||(o=o||l.easing),x.isFunction(r)&&(r=r.call(e,i,P)),x.isFunction(a)&&(a=a.call(e,i,P)),[r||0,o,a]}(v[H]);if(b(E.Lists.colors,V)){var F=O[0],I=O[1],$=O[2];if(E.RegEx.isHex.test(F)){for(var W=["Red","Green","Blue"],z=E.Values.hexToRgb(F),B=$?E.Values.hexToRgb($):r,X=0;X<W.length;X++){var _=[z[X]];I&&_.push(I),B!==r&&_.push(B[X]),L(V+W[X],_)}continue}}L(V,O)}u.element=e}u.element&&(E.Values.addClass(e,"velocity-animating"),M.push(u),c=a(e),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),N===P-1?(C.State.calls.push([M,y,l,null,k.resolver,null,0]),!1===C.State.isTicking&&(C.State.isTicking=!0,p())):N++)}var s,l=h.extend({},C.defaults,w),u={};switch(a(e)===r&&C.init(e),parseFloat(l.delay)&&!1!==l.queue&&h.queue(e,l.queue,function(t,n){if(!0===n)return!0;C.velocityQueueEntryFlag=!0;var r=C.State.delayedElements.count++;C.State.delayedElements[r]=e;var i=function(e){return function(){C.State.delayedElements[e]=!1,t()}}(r);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(t,parseFloat(l.delay)),next:i}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=T;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}if(!1!==C.mock&&(!0===C.mock?l.duration=l.delay=1:(l.duration*=parseFloat(C.mock)||1,l.delay*=parseFloat(C.mock)||1)),l.easing=f(l.easing,l.duration),l.begin&&!x.isFunction(l.begin)&&(l.begin=null),l.progress&&!x.isFunction(l.progress)&&(l.progress=null),l.complete&&!x.isFunction(l.complete)&&(l.complete=null),l.display!==r&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=C.CSS.Values.getDisplayType(e))),l.visibility!==r&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&C.State.isMobile&&!C.State.isGingerbread,!1===l.queue)if(l.delay){var c=C.State.delayedElements.count++;C.State.delayedElements[c]=e;var d=function(e){return function(){C.State.delayedElements[e]=!1,o()}}(c);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(o,parseFloat(l.delay)),next:d}}else o();else h.queue(e,l.queue,function(e,t){if(!0===t)return k.promise&&k.resolver(y),!0;C.velocityQueueEntryFlag=!0,o(e)});""!==l.queue&&"fx"!==l.queue||"inprogress"===h.queue(e)[0]||h.dequeue(e)}var u,c,g,m,y,v,w,S=arguments[0]&&(arguments[0].p||h.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||x.isString(arguments[0].properties));x.isWrapped(this)?(c=!1,m=0,y=this,g=this):(c=!0,m=1,y=S?arguments[0].elements||arguments[0].e:arguments[0]);var k={promise:null,resolver:null,rejecter:null};if(c&&C.Promise&&(k.promise=new C.Promise(function(e,t){k.resolver=e,k.rejecter=t})),S?(v=arguments[0].properties||arguments[0].p,w=arguments[0].options||arguments[0].o):(v=arguments[m],w=arguments[m+1]),!(y=o(y)))return void(k.promise&&(v&&w&&!1===w.promiseRejectEmpty?k.resolver():k.rejecter()));var P=y.length,N=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(v)&&!h.isPlainObject(w)){var j=m+1;w={};for(var D=j;D<arguments.length;D++)x.isArray(arguments[D])||!/^(fast|normal|slow)$/i.test(arguments[D])&&!/^\d/.test(arguments[D])?x.isString(arguments[D])||x.isArray(arguments[D])?w.easing=arguments[D]:x.isFunction(arguments[D])&&(w.complete=arguments[D]):w.duration=arguments[D]}var q;switch(v){case"scroll":q="scroll";break;case"reverse":q="reverse";break;case"pause":var L=(new Date).getTime();return h.each(y,function(e,t){s(t,L)}),h.each(C.State.calls,function(e,t){var n=!1;t&&h.each(t[1],function(e,i){var o=w===r?"":w;return!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue)||(h.each(y,function(e,r){if(r===i)return t[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),e();case"resume":return h.each(y,function(e,t){l(t,L)}),h.each(C.State.calls,function(e,t){var n=!1;t&&h.each(t[1],function(e,i){var o=w===r?"":w;return!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue)||(!t[5]||(h.each(y,function(e,r){if(r===i)return t[5].resume=!0,n=!0,!1}),!n&&void 0))})}),e();case"finish":case"finishAll":case"stop":h.each(y,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer),"finishAll"!==v||!0!==w&&!x.isString(w)||(h.each(h.queue(t,x.isString(w)?w:""),function(e,t){x.isFunction(t)&&t()}),h.queue(t,x.isString(w)?w:"",[]))});var H=[];return h.each(C.State.calls,function(e,t){t&&h.each(t[1],function(n,i){var o=w===r?"":w;if(!0!==o&&t[2].queue!==o&&(w!==r||!1!==t[2].queue))return!0;h.each(y,function(n,r){if(r===i)if((!0===w||x.isString(w))&&(h.each(h.queue(r,x.isString(w)?w:""),function(e,t){x.isFunction(t)&&t(null,!0)}),h.queue(r,x.isString(w)?w:"",[])),"stop"===v){var s=a(r);s&&s.tweensContainer&&!1!==o&&h.each(s.tweensContainer,function(e,t){t.endValue=t.currentValue}),H.push(e)}else"finish"!==v&&"finishAll"!==v||(t[2].duration=1)})})}),"stop"===v&&(h.each(H,function(e,t){d(t,!0)}),k.promise&&k.resolver(y)),e();default:if(!h.isPlainObject(v)||x.isEmptyObject(v)){if(x.isString(v)&&C.Redirects[v]){u=h.extend({},w);var V=u.duration,O=u.delay||0;return!0===u.backwards&&(y=h.extend(!0,[],y).reverse()),h.each(y,function(e,t){parseFloat(u.stagger)?u.delay=O+parseFloat(u.stagger)*e:x.isFunction(u.stagger)&&(u.delay=O+u.stagger.call(t,e,P)),u.drag&&(u.duration=parseFloat(V)||(/^(callout|transition)/.test(v)?1e3:T),u.duration=Math.max(u.duration*(u.backwards?1-e/P:(e+1)/P),.75*u.duration,200)),C.Redirects[v].call(t,t,u||{},e,P,y,k.promise?k:r)}),e()}var F="Velocity: First argument ("+v+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(F)):t.console&&console.log(F),e()}q="start"}var R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},M=[];h.each(y,function(e,t){x.isNode(t)&&i(t,e)}),u=h.extend({},C.defaults,w),u.loop=parseInt(u.loop,10);var I=2*u.loop-1;if(u.loop)for(var $=0;$<I;$++){var W={delay:u.delay,progress:u.progress};$===I-1&&(W.display=u.display,W.visibility=u.visibility,W.complete=u.complete),A(y,"reverse",W)}return e()};C=h.extend(A,C),C.animate=A;var P=t.requestAnimationFrame||m;if(!C.State.isMobile&&n.hidden!==r){var N=function(){n.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},p()):P=t.requestAnimationFrame||m};N(),n.addEventListener("visibilitychange",N)}return e.Velocity=C,e!==t&&(e.fn.velocity=A,e.fn.velocity.defaults=C.defaults),h.each(["Down","Up"],function(e,t){C.Redirects["slide"+t]=function(e,n,i,o,a,s){var l=h.extend({},n),u=l.begin,c=l.complete,f={},p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===r&&(l.display="Down"===t?"inline"===C.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){0===i&&u&&u.call(a,a);for(var n in p)if(p.hasOwnProperty(n)){f[n]=e.style[n];var r=E.getPropertyValue(e,n);p[n]="Down"===t?[r,0]:[0,r]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)f.hasOwnProperty(t)&&(e.style[t]=f[t]);i===o-1&&(c&&c.call(a,a),s&&s.resolver(a))},C(e,p,l)}}),h.each(["In","Out"],function(e,t){C.Redirects["fade"+t]=function(e,n,i,o,a,s){var l=h.extend({},n),u=l.complete,c={opacity:"In"===t?1:0};0!==i&&(l.begin=null),l.complete=i!==o-1?null:function(){u&&u.call(a,a),s&&s.resolver(a)},l.display===r&&(l.display="In"===t?"auto":"none"),C(this,c,l)}}),C}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)});
(function() {
  var Main, el,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  theme.classes.FrameworkArticle = (function() {
    function FrameworkArticle(root) {
      var _this;
      this.root = root;
      this.initializeDisqus = bind(this.initializeDisqus, this);
      this.hideTagInfo = bind(this.hideTagInfo, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.comments_enabled = _this.root.data('comments-enabled');
      _this.disqus_shortname = _this.root.attr('data-disqus-shortname');
      _this.enable_disqus = _this.root.data('enable-disqus');
      _this.no_tags_displayed = _this.root.find('.article--tag').length === 0 ? true : false;
      _this.load();
    }

    FrameworkArticle.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.no_tags_displayed) {
        _this.hideTagInfo();
      }
      if (_this.enable_disqus && _this.comments_enabled) {
        return _this.initializeDisqus();
      }
    };

    FrameworkArticle.prototype.hideTagInfo = function() {
      var _this;
      _this = this;
      return _this.root.find('.article--tag-info').hide();
    };

    FrameworkArticle.prototype.initializeDisqus = function() {
      var _this;
      _this = this;
      return theme.utils.insertScript("https://" + _this.disqus_shortname + ".disqus.com/embed.js");
    };

    return FrameworkArticle;

  })();

  theme.classes.FrameworkBlog = (function() {
    function FrameworkBlog(root) {
      var _this, enable_masonry;
      this.root = root;
      this.initMasonry = bind(this.initMasonry, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.list = _this.root.find('.blog--list');
      enable_masonry = _this.root.data('columns') !== 1;
      if (enable_masonry) {
        _this.load();
      }
    }

    FrameworkBlog.prototype.load = function() {
      var _this;
      _this = this;
      return theme.utils.insertScript(theme.assets.masonry, function() {
        if (theme.utils.mqs.current_window !== 'small') {
          _this.initMasonry();
        }
        return _this.eventListeners();
      });
    };

    FrameworkBlog.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('theme.utils.mqs.updated', function() {
        var masonry_loaded;
        masonry_loaded = _this.list.data('masonry') ? true : false;
        if (!(theme.utils.mqs.current_window === 'small' || masonry_loaded)) {
          return _this.initMasonry();
        } else if (theme.utils.mqs.current_window === 'small' && masonry_loaded) {
          return _this.list.masonry('destroy');
        }
      });
    };

    FrameworkBlog.prototype.initMasonry = function() {
      var _this;
      _this = this;
      return _this.list.masonry({
        itemSelector: '.blog--list--item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.blog--list--item'
      });
    };

    return FrameworkBlog;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.renderDynamicCheckoutButtons = bind(this.renderDynamicCheckoutButtons, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.updateAllHasItems = bind(this.updateAllHasItems, this);
      this.addItem = bind(this.addItem, this);
      this.swapInImages = bind(this.swapInImages, this);
      this.getHtml = bind(this.getHtml, this);
      this.updateHtml = bind(this.updateHtml, this);
      this.htmlListener = bind(this.htmlListener, this);
      this.updateAllHtml = bind(this.updateAllHtml, this);
      this.updateNote = bind(this.updateNote, this);
      this.noteTypingListener = bind(this.noteTypingListener, this);
      this.updateQuantity = bind(this.updateQuantity, this);
      this.clearRequests = bind(this.clearRequests, this);
      this.toggleLoadingDisplay = bind(this.toggleLoadingDisplay, this);
      this.toggleLoadingOnSubmit = bind(this.toggleLoadingOnSubmit, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeButtonListener = bind(this.removeButtonListener, this);
      this.minusButtonListener = bind(this.minusButtonListener, this);
      this.plusButtonListener = bind(this.plusButtonListener, this);
      this.inputBoxListener = bind(this.inputBoxListener, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.getAjaxUrl = bind(this.getAjaxUrl, this);
      this.getOtherCarts = bind(this.getOtherCarts, this);
      _this = this;
      _this.other_carts = _this.getOtherCarts();
      _this.quantity_request = {};
      _this.quantity_timer = {};
      _this.total_item_count = $('.cart--external--total-items');
      _this.total_price = $('.cart--external--total-price');
      _this.view = _this.root.attr('data-view');
      _this.getAjaxUrl();
      _this.updateTotals();
      _this.htmlListener();
      _this.eventListeners();
      _this.renderDynamicCheckoutButtons();
    }

    FrameworkCart.prototype.getOtherCarts = function() {
      var _this, other_carts;
      _this = this;
      return other_carts = $('[data-js-class="Cart"]').not(_this.root);
    };

    FrameworkCart.prototype.getAjaxUrl = function() {
      var _this;
      _this = this;
      _this.ajax_url = window.location.href;
      _this.ajax_url = _this.ajax_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.cart);
      _this.ajax_url = _this.ajax_url.replace('#', '');
      if (_this.ajax_url.indexOf("?") >= 0) {
        _this.ajax_url = _this.ajax_url + "&";
      } else {
        _this.ajax_url = _this.ajax_url + "?";
      }
      _this.ajax_desktop_url = _this.ajax_url + "view=ajax--desktop";
      return _this.ajax_mobile_url = _this.ajax_url + "view=ajax--mobile";
    };

    FrameworkCart.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.inputBoxListener();
      _this.plusButtonListener();
      _this.minusButtonListener();
      _this.removeButtonListener();
      _this.toggleLoadingOnSubmit();
      return _this.noteTypingListener();
    };

    FrameworkCart.prototype.inputBoxListener = function() {
      var _this, input_box;
      _this = this;
      input_box = _this.root.find('.cart--quantity--input');
      input_box.on('keydown', function(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 37 && event.which !== 39 && event.which !== 9) {
          return event.preventDefault();
        }
      });
      return input_box.on('focusout', function(event) {
        var line_num, quantity;
        line_num = $(this).closest('.cart--item').data('line-num');
        _this.toggleLoadingDisplay(line_num);
        _this.clearRequests(line_num);
        quantity = theme.utils.isNaN(parseInt($(this).val())) ? 1 : parseInt($(this).val());
        if (quantity === 0) {
          return _this.removeItem(line_num);
        } else {
          return _this.updateQuantity(line_num, quantity, 0, function(success) {
            if (success) {
              return _this.updateAllHtml(function() {});
            }
          });
        }
      });
    };

    FrameworkCart.prototype.plusButtonListener = function() {
      var _this, plus_button;
      _this = this;
      plus_button = _this.root.find('.cart--item--quantity .plus');
      return plus_button.on('click', function() {
        var input, line_num, quantity;
        input = $(this).prev('input');
        line_num = $(this).closest('.cart--item').data('line-num');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) + 1;
        input.val(quantity);
        _this.toggleLoadingDisplay(line_num);
        _this.clearRequests(line_num);
        _this.updateQuantity(line_num, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.minusButtonListener = function() {
      var _this, minus_button;
      _this = this;
      minus_button = _this.root.find('.cart--item--quantity .minus');
      return minus_button.on('click', function() {
        var input, line_num, quantity;
        input = $(this).siblings('input');
        line_num = $(this).closest('.cart--item').data('line-num');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) - 1;
        if (quantity < 1) {
          quantity = 1;
        }
        input.val(quantity);
        _this.toggleLoadingDisplay(line_num);
        _this.clearRequests(line_num);
        _this.updateQuantity(line_num, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.removeButtonListener = function() {
      var _this, remove_button;
      _this = this;
      remove_button = _this.root.find('.cart--item--remove');
      return remove_button.on('click', function() {
        var line_num;
        line_num = $(this).closest('.cart--item').data('line-num');
        _this.toggleLoadingDisplay(line_num);
        _this.clearRequests(line_num);
        _this.removeItem(line_num);
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(line_num) {
      var _this;
      _this = this;
      return _this.updateQuantity(line_num, 0, 0, function(success) {
        if (success) {
          return _this.updateAllHtml(function() {});
        }
      });
    };

    FrameworkCart.prototype.toggleLoadingOnSubmit = function() {
      var _this;
      _this = this;
      _this.checkout_button = _this.root.find('.cart--checkout-button button');
      return _this.checkout_button.on('click', function() {
        return $(this).attr('data-loading', true);
      });
    };

    FrameworkCart.prototype.toggleLoadingDisplay = function(line_num) {
      var _this, input;
      _this = this;
      input = _this.root.find(".cart--item[data-line-num='" + line_num + "'] input");
      input.attr('data-loading', 'true');
      _this.checkout_button.attr('disabled', true);
      return _this.root.find('.cart--additional-buttons').css('visibility', 'hidden');
    };

    FrameworkCart.prototype.clearRequests = function(line_num) {
      var _this;
      _this = this;
      if (_this.quantity_request.line_num) {
        _this.quantity_request.line_num.abort();
      }
      if (_this.quantity_timer.line_num) {
        return clearTimeout(_this.quantity_timer.line_num);
      }
    };

    FrameworkCart.prototype.updateQuantity = function(line_num, quantity, time_out, callback) {
      var _this, ajaxQuantity;
      _this = this;
      ajaxQuantity = function() {
        return _this.quantity_request.line_num = $.ajax({
          type: "POST",
          url: "/cart/change.js",
          dataType: "json",
          data: "line=" + line_num + "&quantity=" + quantity
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          return _this.updateTotals();
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
          }
          return callback(false);
        });
      };
      return _this.quantity_timer.line_num = setTimeout(ajaxQuantity, time_out);
    };

    FrameworkCart.prototype.noteTypingListener = function() {
      var _this, note_textbox;
      _this = this;
      note_textbox = _this.root.find('.cart--notes--textarea');
      return note_textbox.on('input', function() {
        if (_this.note_request) {
          _this.note_request.abort();
        }
        if (_this.note_timer) {
          clearTimeout(_this.note_timer);
        }
        return _this.updateNote($(this).val());
      });
    };

    FrameworkCart.prototype.updateNote = function(note) {
      var _this, ajaxNote;
      _this = this;
      ajaxNote = function() {
        return _this.note_request = $.ajax({
          type: "POST",
          url: "/cart/update.js",
          dataType: "json",
          data: {
            note: note
          }
        }).done(function() {
          return _this.other_carts.trigger('update-html');
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            return console.log('Error - ajax update note', JSON.parse(jqXHR.responseText).description);
          }
        });
      };
      return _this.note_timer = setTimeout(ajaxNote, 350);
    };

    FrameworkCart.prototype.updateAllHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      _this.updateHtml(update_all_html_done);
      return _this.other_carts.trigger('update-html');
    };

    FrameworkCart.prototype.htmlListener = function() {
      var _this;
      _this = this;
      return _this.root.on('update-html', function() {
        return _this.updateHtml(function() {});
      });
    };

    FrameworkCart.prototype.updateHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      return _this.getHtml(_this.view, function(new_html) {
        var new_form, old_form;
        old_form = _this.root.find('.cart--form');
        new_form = new_html.find('.cart--form');
        new_form = _this.swapInImages(old_form, new_form);
        old_form.replaceWith(new_form);
        _this.eventListeners();
        update_all_html_done();
        return $(window).trigger('theme.cart.update-complete');
      });
    };

    FrameworkCart.prototype.getHtml = function(view, callback) {
      var _this, url;
      _this = this;
      url = _this.ajax_desktop_url;
      if (view === 'mobile') {
        url = _this.ajax_mobile_url;
      }
      return $.ajax({
        url: url,
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        var cart_html;
        cart_html = $($.parseHTML(data));
        callback(cart_html);
      }).fail(function(jqxhr, textStatus, error) {
        console.log("search.json Request Failed: " + textStatus + ", " + error);
        callback(false);
      });
    };

    FrameworkCart.prototype.swapInImages = function(old_html, new_html) {
      var _this, new_items;
      _this = this;
      new_items = new_html.find('.cart--item');
      new_items.each(function() {
        var new_image, new_instance, old_image, old_item, variant_id;
        variant_id = $(this).attr('data-variant-id');
        new_image = $(this).find('.cart--item--image');
        new_instance = new_html.find("[data-variant-id='" + variant_id + "'] .cart--item--image").index(new_image);
        old_item = old_html.find("[data-variant-id='" + variant_id + "']").eq(new_instance);
        if (old_item.length > 0) {
          old_image = old_item.find('.cart--item--image');
          return new_image.replaceWith(old_image);
        }
      });
      return new_html;
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: form.serialize()
      }).done(function(data, textStatus, jqXHR) {
        callback(true);
        _this.updateAllHasItems(1, true);
        return _this.updateTotals();
      }).fail(function(jqXHR, textStatus) {
        console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
        return callback(false, JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.updateAllHasItems = function(item_count, force_true) {
      var _this, has_items;
      if (force_true == null) {
        force_true = false;
      }
      _this = this;
      has_items = false;
      if (item_count > 0 || force_true) {
        has_items = true;
      }
      _this.root.attr('data-has-items', has_items);
      return _this.other_carts.attr('data-has-items', has_items);
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var count, total_price;
        total_price = theme.utils.formatMoney(data.total_price);
        count = data.item_count;
        _this.updateAllHasItems(count);
        _this.total_price.html(total_price);
        _this.total_item_count.text(count);
        return _this.updateTotalsComplete(count);
      }).fail(function(jqXHR, textStatus) {
        return console.log('Error - ajax updating totals', JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.renderDynamicCheckoutButtons = function() {
      var _this;
      _this = this;
      if (window.location.pathname === theme.urls.cart) {
        $('.off-canvas--right-sidebar .cart--additional-buttons').remove();
        if (theme.utils.mqs.current_window === 'small') {
          return $('[data-view="desktop"] .cart--additional-buttons').remove();
        }
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkContentBlocks = (function() {
    function FrameworkContentBlocks(root) {
      var _this;
      this.root = root;
      _this = this;
    }

    return FrameworkContentBlocks;

  })();

  theme.classes.FrameworkDisclosure = (function() {
    function FrameworkDisclosure(root) {
      var _this;
      this.root = root;
      this.optionChangeCallback = bind(this.optionChangeCallback, this);
      this.configureFormDisplay = bind(this.configureFormDisplay, this);
      this.toggleFormDisplay = bind(this.toggleFormDisplay, this);
      this.setOptionOnClick = bind(this.setOptionOnClick, this);
      this.hideFormWhenFocusOut = bind(this.hideFormWhenFocusOut, this);
      this.showFormWhenClick = bind(this.showFormWhenClick, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_option = _this.root.find('.disclosure--current-option');
      _this.form = _this.root.find('.disclosure--form');
      _this.input = _this.root.find('[data-item="disclosure"]');
      _this.links = _this.root.find('.disclosure--option-link');
      _this.toggle = _this.root.find('.disclosure--toggle');
      _this.type = _this.root.attr('data-type');
      _this.toggle_and_form_gap = 8;
      _this.window_and_form_gap = 32;
      _this.form_space_needed = _this.form.height() + _this.toggle_and_form_gap + _this.window_and_form_gap;
      _this.load();
    }

    FrameworkDisclosure.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      _this.showFormWhenClick();
      _this.hideFormWhenFocusOut();
      _this.setOptionOnClick();
      _this.configureFormDisplay();
      if (_this.type === 'url-redirect' || _this.type === 'localization') {
        return _this.optionChangeCallback();
      }
    };

    FrameworkDisclosure.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.configureFormDisplay();
      }));
    };

    FrameworkDisclosure.prototype.showFormWhenClick = function() {
      var _this;
      _this = this;
      return _this.toggle.on('click keydown', function(event) {
        var aria_expanded;
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        aria_expanded = $(this).attr('aria-expanded') === 'true';
        return _this.toggleFormDisplay(!aria_expanded);
      });
    };

    FrameworkDisclosure.prototype.hideFormWhenFocusOut = function() {
      var _this;
      _this = this;
      _this.toggle.on('focusout', function(event) {
        var form_lost_focus;
        form_lost_focus = _this.root.has(event.relatedTarget).length === 0;
        if (form_lost_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      _this.form.on('focusout', function(event) {
        var child_in_focus, is_visible;
        child_in_focus = $(this).has(event.relatedTarget).length > 0;
        is_visible = _this.toggle.attr('aria-expanded') === 'true';
        if (is_visible && !child_in_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      return _this.root.on('keydown', function(event) {
        if (event.key !== "Escape") {
          return;
        }
        _this.toggleFormDisplay(false);
        return _this.toggle.focus();
      });
    };

    FrameworkDisclosure.prototype.setOptionOnClick = function() {
      var _this;
      _this = this;
      return _this.links.on('click keydown', function(event) {
        var option_selected_name, option_selected_value;
        if (event.key === 'Enter') {
          _this.toggle.focus();
        } else if (event.type === 'keydown') {
          return;
        }
        option_selected_value = $(this).attr('data-value');
        option_selected_name = $(this).text();
        _this.toggleFormDisplay(false);
        _this.current_option.text(option_selected_name);
        _this.links.attr('aria-current', false);
        $(this).attr('aria-current', true);
        _this.input.val(option_selected_value);
        return _this.input.trigger('change');
      });
    };

    FrameworkDisclosure.prototype.toggleFormDisplay = function(open_form) {
      var _this;
      _this = this;
      return _this.toggle.attr('aria-expanded', open_form);
    };

    FrameworkDisclosure.prototype.configureFormDisplay = function() {
      var _this, clearance_height, close_to_bottom, close_to_top, distance_from_bottom, distance_from_top, height_of_canvas, height_of_toggle, max_form_height;
      _this = this;
      height_of_toggle = _this.toggle.outerHeight();
      clearance_height = height_of_toggle + _this.toggle_and_form_gap;
      height_of_canvas = _this.root.closest('[class^=off-canvas]').height();
      distance_from_top = _this.root.offset().top;
      distance_from_bottom = height_of_canvas - distance_from_top - height_of_toggle;
      close_to_bottom = (_this.form_space_needed > distance_from_bottom) && (distance_from_bottom < distance_from_top);
      close_to_top = (_this.form_space_needed > distance_from_top) && (distance_from_bottom > distance_from_top);
      max_form_height = $(window).height() - clearance_height - _this.window_and_form_gap;
      if (close_to_bottom) {
        max_form_height -= distance_from_bottom;
      } else if (close_to_top) {
        max_form_height -= distance_from_top;
      }
      _this.form.css('max-height', max_form_height + "px");
      if (close_to_bottom) {
        return _this.form.css('top', "-" + (_this.form.height() + _this.toggle_and_form_gap) + "px");
      } else {
        return _this.form.css('top', clearance_height + "px");
      }
    };

    FrameworkDisclosure.prototype.optionChangeCallback = function() {
      var _this;
      _this = this;
      return _this.input.on('change', function() {
        if (_this.type === 'url-redirect') {
          return window.location.href = $(this).val();
        } else if (_this.type === 'localization') {
          return $(this).closest('form').submit();
        }
      });
    };

    return FrameworkDisclosure;

  })();

  theme.classes.FrameworkDomElement = (function() {
    function FrameworkDomElement(selector1) {
      this.selector = selector1;
      this.show = bind(this.show, this);
      this.setAttribute = bind(this.setAttribute, this);
      this.on = bind(this.on, this);
      this.off = bind(this.off, this);
      this.hide = bind(this.hide, this);
      this.getAttribute = bind(this.getAttribute, this);
      this.focus = bind(this.focus, this);
      this.find = bind(this.find, this);
      this.css = bind(this.css, this);
      if ((typeof this.selector) === 'string') {
        this.el = document.querySelectorAll(this.selector);
      } else if ((typeof this.selector) === 'object') {
        this.el = new Array(this.selector);
      }
    }

    FrameworkDomElement.prototype.css = function(key, value) {
      return this.el.forEach(function(el) {
        return el.style[key] = value;
      });
    };

    FrameworkDomElement.prototype.find = function(selector) {
      return new theme.classes.FrameworkDomElement(selector);
    };

    FrameworkDomElement.prototype.focus = function() {
      return this.el[0].focus();
    };

    FrameworkDomElement.prototype.getAttribute = function(attribute) {
      return this.el[0].getAttribute(attribute);
    };

    FrameworkDomElement.prototype.hide = function() {
      return this.el.forEach(function(el) {
        return el.style.display = "none";
      });
    };

    FrameworkDomElement.prototype.off = function(type) {
      return this.el.forEach(function(el) {
        return type.split(" ").forEach(function(type) {
          return el.removeEventListener(type);
        });
      });
    };

    FrameworkDomElement.prototype.on = function(type, event_function) {
      return this.el.forEach(function(el) {
        return type.split(" ").forEach(function(type) {
          return el.addEventListener(type, event_function);
        });
      });
    };

    FrameworkDomElement.prototype.setAttribute = function(attribute, value) {
      return this.el.forEach(function(el) {
        return el.setAttribute(attribute, value);
      });
    };

    FrameworkDomElement.prototype.show = function() {
      return this.el.forEach(function(el) {
        return el.style.display = "block";
      });
    };

    return FrameworkDomElement;

  })();

  theme.classes.FrameworkFeaturedBlog = (function() {
    function FrameworkFeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FrameworkFeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedBlog;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.attr('data-text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      if (_this.text_position === 'bottom' || theme.utils.mqs.current_window === 'small') {
        return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
      }
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', '100%');
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedVideo = (function() {
    function FrameworkFeaturedVideo(root) {
      var _this;
      this.root = root;
      this.hideThumbnail = bind(this.hideThumbnail, this);
      this.playButtonListener = bind(this.playButtonListener, this);
      this.disablePlayerFocus = bind(this.disablePlayerFocus, this);
      this.vimeoEvents = bind(this.vimeoEvents, this);
      this.insertVimeoPlayer = bind(this.insertVimeoPlayer, this);
      this.youtubeEvents = bind(this.youtubeEvents, this);
      this.youtubeReady = bind(this.youtubeReady, this);
      this.insertYoutubePlayer = bind(this.insertYoutubePlayer, this);
      this.insertAPIScript = bind(this.insertAPIScript, this);
      this.playerInit = bind(this.playerInit, this);
      this.checkAPIScriptExists = bind(this.checkAPIScriptExists, this);
      _this = this;
      _this.play_buttons = _this.root.find('.feature-video--play svg, .feature-video--play-mobile svg');
      _this.section_id = _this.root.data('sectionId');
      _this.thumbnail = _this.root.data('thumbnail');
      _this.video_type = _this.root.data('videoType');
      _this.video_id = _this.root.data('videoId');
      _this.vimeoVars = {
        id: _this.video_id,
        autopause: 0,
        playsinline: 0,
        title: 0
      };
      _this.youtubeVars = {};
      if (_this.thumbnail) {
        _this.playButtonListener();
      } else {
        _this.checkAPIScriptExists();
      }
    }

    FrameworkFeaturedVideo.prototype.checkAPIScriptExists = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (theme.utils.vimeoScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://player.vimeo.com/api/player.js');
        }
      } else {
        if (theme.utils.youtubeScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://www.youtube.com/iframe_api');
        }
      }
    };

    FrameworkFeaturedVideo.prototype.playerInit = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (_this.thumbnail) {
          return _this.insertVimeoPlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertVimeoPlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertVimeoPlayer();
          });
        }
      } else {
        if (_this.thumbnail) {
          return _this.insertYoutubePlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertYoutubePlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertYoutubePlayer();
          });
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertAPIScript = function(api_url) {
      var _this, script_tag;
      _this = this;
      script_tag = document.createElement('script');
      script_tag.src = api_url;
      if (_this.video_type === 'vimeo') {
        theme.utils.vimeoScriptAdded = true;
        script_tag.onload = function() {
          return _this.insertVimeoPlayer();
        };
      } else {
        theme.utils.youtubeScriptAdded = true;
        $(window).on('theme.utils.youtubeAPIReady', function() {
          return _this.insertYoutubePlayer();
        });
      }
      return document.body.appendChild(script_tag);
    };

    FrameworkFeaturedVideo.prototype.insertYoutubePlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.youtubeVars.enablejsapi = 1;
        _this.youtubeVars.origin = window.location.href;
        _this.youtubeVars.playsinline = 1;
        _this.youtubeVars.fs = 0;
        _this.youtubeVars.loop = 1;
        _this.youtubeVars.playlist = _this.video_id;
      }
      return _this.player = new YT.Player("player-" + _this.section_id, {
        videoId: _this.video_id,
        playerVars: _this.youtubeVars,
        events: {
          'onReady': _this.youtubeReady,
          'onStateChange': _this.youtubeEvents
        }
      });
    };

    FrameworkFeaturedVideo.prototype.youtubeReady = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.player.mute();
        _this.disablePlayerFocus();
      }
      return _this.player.playVideo();
    };

    FrameworkFeaturedVideo.prototype.youtubeEvents = function(event) {
      var YTP, _this, remains;
      _this = this;
      YTP = event.target;
      if (_this.thumbnail) {
        if (event.data === 0) {
          YTP.seekTo(0);
          return YTP.pauseVideo();
        }
      } else {
        if (event.data === 1) {
          remains = YTP.getDuration() - YTP.getCurrentTime();
          if (_this.rewindTO) {
            clearTimeout(_this.rewindTO);
          }
          return _this.rewindTO = setTimeout(function() {
            YTP.seekTo(0);
          }, (remains - 0.1) * 1000);
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertVimeoPlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.vimeoVars.playsinline = 1;
        _this.vimeoVars.muted = 1;
        _this.vimeoVars.background = 1;
        _this.vimeoVars.loop = 1;
      }
      _this.player = new Vimeo.Player("player-" + _this.section_id, _this.vimeoVars);
      if (_this.thumbnail) {
        _this.vimeoEvents();
      } else {
        _this.player.ready().then(function() {
          return _this.disablePlayerFocus();
        });
      }
      return _this.player.play();
    };

    FrameworkFeaturedVideo.prototype.vimeoEvents = function() {
      var _this;
      _this = this;
      _this.player.getDuration().then(function(duration) {
        return _this.player.addCuePoint(duration - 0.3, {});
      });
      return _this.player.on('cuepoint', function() {
        _this.player.setCurrentTime(0);
        return _this.player.pause();
      });
    };

    FrameworkFeaturedVideo.prototype.disablePlayerFocus = function() {
      var _this;
      _this = this;
      return _this.root.find('iframe').attr('tabindex', '-1');
    };

    FrameworkFeaturedVideo.prototype.playButtonListener = function() {
      var _this;
      _this = this;
      _this.play_buttons.attr('tabindex', '0');
      return _this.play_buttons.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.checkAPIScriptExists();
        return _this.hideThumbnail();
      });
    };

    FrameworkFeaturedVideo.prototype.hideThumbnail = function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        return _this.root.find('.feature-video--header, .feature-video--thumbnail, .feature-video--play-mobile').hide();
      }, 350);
    };

    return FrameworkFeaturedVideo;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message > *');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter("[data-message='" + message + "']");
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkFooter = (function() {
    function FrameworkFooter(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkFooter.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    FrameworkFooter.prototype.addListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize', function() {
        return _this.stickyFooter();
      });
      return $(document).on('shopify:section:load', function() {
        return _this.stickyFooter();
      });
    };

    FrameworkFooter.prototype.stickyFooter = function() {
      var _this, reduce_window_by, total_content_height;
      _this = this;
      $('.layout--main-content').css('min-height', 'unset');
      total_content_height = $('.header--root').outerHeight() + $('.layout--main-content').outerHeight() + _this.root.outerHeight();
      if ($('.announcement--root').length > 0) {
        total_content_height += $('.announcement--root').outerHeight();
      }
      if ($(window).outerHeight() > total_content_height) {
        reduce_window_by = total_content_height - $('.layout--main-content').outerHeight();
        return $('.layout--main-content').css({
          'min-height': $(window).outerHeight() - reduce_window_by
        });
      }
    };

    return FrameworkFooter;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_maps_script_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_maps_script_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_maps_script_status = 'loading';
        return $.getScript("https://maps.googleapis.com/maps/api/js?key=" + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_maps_script_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this, previous_window;
      _this = this;
      previous_window = _this.current_window;
      if (window.matchMedia("only screen and (min-width: " + _this.large_screen + "px)").matches) {
        if (_this.current_window !== 'large') {
          _this.current_window = 'large';
        }
      } else if (window.matchMedia("only screen and (min-width: " + _this.medium_screen + "px)").matches) {
        if (_this.current_window !== 'medium') {
          _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          _this.current_window = 'small';
        }
      }
      if (_this.current_window !== previous_window) {
        return $(window).trigger('theme.utils.mqs.updated');
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.fullscreen = _this.root.data('modal-fullscreen') ? true : false;
      if (_this.root.data('modal-custom-close')) {
        _this.custom_close_button = _this.root.data('modal-custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.root.data('force-view');
      _this.view = _this.root.data('modal-view');
      _this.nested_links = _this.root.find('.modal--root .modal--link');
      _this.nested_content = _this.root.find('.modal--root .modal--content');
      _this.links = _this.root.find('.modal--link').not(_this.nested_links);
      _this.content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window = $('.modal--window');
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(event) {
        var clicked_item;
        if (event.type === 'keypress' && theme.utils.a11yClick(event) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (event.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal-fullscreen', _this.fullscreen);
        _this.window.attr('data-modal-custom-close', _this.custom_close_button);
        _this.window.attr('data-modal-view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return "<iframe src='//www.youtube.com/embed/" + id + "?autoplay=1' frameborder='0' allowfullwidth></iframe>";
      } else if (type === "vimeo") {
        return "<iframe src='//player.vimeo.com/video/" + id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
      } else if (type === "kickstarter") {
        return "<iframe src='//www.kickstarter.com/projects/" + id + "/widget/video.html' frameborder='0' webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>";
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(event) {
            if (event.which > 0 || event.type === "mousewheel" || event.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.root.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(event) {
        return event.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.root.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.root);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.closeWithEscKey = bind(this.closeWithEscKey, this);
      this.closeWhenFocusOut = bind(this.closeWhenFocusOut, this);
      this.disableFocusItems = bind(this.disableFocusItems, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.focus_triggers = $('.off-canvas--focus-trigger');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      _this.touchListener();
      _this.disableFocusItems();
      _this.closeWhenFocusOut();
      return _this.closeWithEscKey();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click keydown');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.OffCanvas');
      return $(document).off('touchend.OffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.right_sidebar_view = $(this).data('off-canvas--view');
          _this.right_sidebar.attr('data-active', _this.right_sidebar_view);
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.disableFocusItems = function() {
      var _this;
      _this = this;
      return $(window).on('load', function() {
        _this.left_sidebar.find(':focusable').attr('tabindex', '-1');
        _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
        return _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      });
    };

    FrameworkOffCanvas.prototype.closeWhenFocusOut = function() {
      var _this;
      _this = this;
      return _this.focus_triggers.on('focus', function() {
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.closeWithEscKey = function() {
      var _this;
      _this = this;
      return $(window).on('keydown', function(event) {
        if (event.key !== 'Escape') {
          return;
        }
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.left_sidebar.find('[tabindex="-1"]').not('[data-item="hidden-text"] a').attr('tabindex', '0');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.left_sidebar.css('position', 'relative');
          return _this.left_sidebar.find(":focusable:eq(1):not('.off-canvas--focus-trigger')").focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.right_sidebar.find('[tabindex="-1"]:not(input)').attr('tabindex', '0');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'unset');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.right_sidebar.css('position', 'relative');
          return _this.right_sidebar.find(":focusable:eq(1):not('.off-canvas--focus-trigger')").focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      _this.left_sidebar.find('[tabindex="0"]').attr('tabindex', '-1');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      _this.overlay.velocity('fadeOut');
      return $("[data-off-canvas--open='left-sidebar']").focus();
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!theme.utils.isTouchDevice()) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.OffCanvas', function(event) {
        position.start.x = event.originalEvent.touches[0].clientX;
        position.start.y = event.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.OffCanvas', function(event) {
        position.end.x = event.originalEvent.changedTouches[0].clientX;
        position.end.y = event.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkPasswordPage = (function() {
    function FrameworkPasswordPage(root) {
      var _this;
      this.root = root;
      this.disableSidebars = bind(this.disableSidebars, this);
      this.cancelLoginListener = bind(this.cancelLoginListener, this);
      this.loginFormListener = bind(this.loginFormListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.login_form = _this.root.find('.password--login-form');
      _this.login_cancel = _this.root.find('.password--cancel');
      _this.login_link = _this.root.find('.password--login-link');
      _this.signup_form = _this.root.find('.password--main > *');
      _this.load();
    }

    FrameworkPasswordPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.loginFormListener();
      _this.cancelLoginListener();
      return _this.disableSidebars();
    };

    FrameworkPasswordPage.prototype.loginFormListener = function() {
      var _this;
      _this = this;
      return _this.login_link.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        $(this).css('visibility', 'hidden');
        _this.signup_form.hide();
        _this.login_form.css('visibility', 'visible');
        return _this.login_form.find('input[type="password"]').focus();
      });
    };

    FrameworkPasswordPage.prototype.cancelLoginListener = function() {
      var _this;
      _this = this;
      return _this.login_cancel.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.signup_form.show();
        _this.login_form.css('visibility', 'hidden');
        return _this.login_link.css('visibility', 'visible');
      });
    };

    FrameworkPasswordPage.prototype.disableSidebars = function() {
      var _this;
      _this = this;
      return $('.off-canvas--left-sidebar, .off-canvas--right-sidebar').hide();
    };

    return FrameworkPasswordPage;

  })();

  theme.classes.FrameworkProductModel = (function() {
    function FrameworkProductModel(root) {
      var _this;
      this.root = root;
      this.loadModel = bind(this.loadModel, this);
      this.loadAssets = bind(this.loadAssets, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.key = _this.root.closest('[data-id]').data('id');
      _this.cdn = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui';
      _this.load();
    }

    FrameworkProductModel.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      if (theme.utils.modelScriptAdded) {
        return;
      }
      theme.utils.modelScriptAdded = true;
      return _this.loadAssets();
    };

    FrameworkProductModel.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.root.on('model-ready', function() {
        return _this.loadModel();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadModel();
      });
      _this.root.on('pause-media', function() {
        if (_this.model) {
          return _this.model.pause();
        }
      });
      _this.root.on('play-media', function() {
        if (_this.model) {
          return _this.model.play();
        }
      });
      return $(window).on('resize.ProductModel', theme.utils.debounce(250, function() {
        $('.product-model--root').trigger('pause-media');
        return $('.product-model--root').trigger('model-ready');
      }));
    };

    FrameworkProductModel.prototype.loadAssets = function() {
      var _this;
      _this = this;
      theme.utils.insertStylesheet(_this.cdn + ".css");
      return theme.utils.insertScript(_this.cdn + ".en.js", function() {
        return $('.product-model--root').trigger('model-ready');
      });
    };

    FrameworkProductModel.prototype.loadModel = function() {
      var _this;
      _this = this;
      if (_this.model) {
        return;
      }
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return;
      }
      return _this.model = new Shopify.ModelViewerUI(_this.root.find('model-viewer'));
    };

    return FrameworkProductModel;

  })();

  theme.classes.FrameworkProductRecommendations = (function() {
    function FrameworkProductRecommendations(root) {
      var _this;
      this.root = root;
      this.loadHoverImages = bind(this.loadHoverImages, this);
      this.checkIfEmpty = bind(this.checkIfEmpty, this);
      this.loadProducts = bind(this.loadProducts, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.loadProducts();
      _this.resizeListeners();
    }

    FrameworkProductRecommendations.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.item_container = _this.root.find('.product-recommendations--body');
      _this.items = _this.root.find('.product--root');
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.product--image-wrapper');
    };

    FrameworkProductRecommendations.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    FrameworkProductRecommendations.prototype.loadProducts = function() {
      var _this, max_products, product_id, product_recommendations, request, request_url;
      _this = this;
      product_recommendations = document.getElementsByClassName("product-recommendations--root")[0];
      product_id = product_recommendations.dataset.productId;
      max_products = product_recommendations.dataset.maxProducts;
      request_url = theme.urls.product_recommendations + "?section_id=framework--product-recommendations&limit=" + max_products + "&product_id=" + product_id;
      request = new XMLHttpRequest();
      request.onload = function() {
        var container;
        if (request.status >= 200 && request.status < 300) {
          container = document.createElement("div");
          container.innerHTML = request.response;
          product_recommendations.innerHTML = container.querySelector(".product-recommendations--root").innerHTML;
          _this.matchImageHeights();
          _this.checkIfEmpty();
          return _this.loadHoverImages();
        }
      };
      request.open("GET", request_url);
      return request.send();
    };

    FrameworkProductRecommendations.prototype.checkIfEmpty = function() {
      var _this, empty;
      _this = this;
      empty = $('.product--root').length > 0 ? false : true;
      return $('.product-recommendations--root').attr('data-empty', empty);
    };

    FrameworkProductRecommendations.prototype.loadHoverImages = function() {
      var _this;
      _this = this;
      return $('.product--root[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return FrameworkProductRecommendations;

  })();

  theme.classes.FrameworkProductVideo = (function() {
    function FrameworkProductVideo(root) {
      var _this;
      this.root = root;
      this.skipVideo = bind(this.skipVideo, this);
      this.loadYoutubeVideo = bind(this.loadYoutubeVideo, this);
      this.loadPlyrVideo = bind(this.loadPlyrVideo, this);
      this.loadYoutubeAsset = bind(this.loadYoutubeAsset, this);
      this.loadPlyrAssets = bind(this.loadPlyrAssets, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.youtubeListeners = bind(this.youtubeListeners, this);
      this.plyrListeners = bind(this.plyrListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.type = _this.root.data('type');
      _this.loop_enabled = _this.root.data('loop-enabled');
      _this.load();
    }

    FrameworkProductVideo.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      if (_this.type === 'youtube') {
        _this.id = _this.root.find('.product-video').attr('id');
        _this.video_id = _this.root.data('video-id');
        _this.youtubeListeners();
        return _this.loadYoutubeAsset();
      } else {
        _this.plyr_cdn = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr';
        _this.plyrListeners();
        return _this.loadPlyrAssets();
      }
    };

    FrameworkProductVideo.prototype.plyrListeners = function() {
      var _this;
      _this = this;
      _this.root.on('plyr-video-ready', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('pause-media', function() {
        if (_this.video) {
          return _this.video.pause();
        }
      });
      return _this.root.on('play-media', function() {
        if (_this.video) {
          return _this.video.play();
        }
      });
    };

    FrameworkProductVideo.prototype.youtubeListeners = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.youtubeAPIReady', function() {
        return _this.loadYoutubeVideo();
      });
      return _this.root.on('theme:section:load', function() {
        return _this.loadYoutubeVideo();
      });
    };

    FrameworkProductVideo.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductVideo', theme.utils.debounce(250, function() {
        $('.product-video--root').trigger('pause-media');
        $('.product-video--root').trigger('plyr-video-ready');
        return $('.product-video--root').trigger('theme.utils.youtubeAPIReady');
      }));
    };

    FrameworkProductVideo.prototype.loadPlyrAssets = function() {
      var _this;
      _this = this;
      if (theme.utils.plyrScriptAdded) {
        return;
      }
      theme.utils.plyrScriptAdded = true;
      theme.utils.insertStylesheet(_this.plyr_cdn + ".css");
      return theme.utils.insertScript(_this.plyr_cdn + ".en.js", function() {
        return $('.product-video--root').trigger('plyr-video-ready');
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeAsset = function() {
      var _this;
      _this = this;
      if (theme.utils.youtubeScriptAdded) {
        return;
      }
      theme.utils.youtubeScriptAdded = true;
      return theme.utils.insertScript('https://www.youtube.com/iframe_api');
    };

    FrameworkProductVideo.prototype.loadPlyrVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new Shopify.Plyr(_this.root.find('video'), {
        iconUrl: _this.plyr_cdn + ".svg",
        loop: {
          active: _this.loop_enabled
        }
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new YT.Player(_this.id, {
        videoId: _this.video_id,
        events: {
          onReady: function(event) {
            _this.root.on('pause-media', function() {
              return event.target.pauseVideo();
            });
            return _this.root.on('play-media', function() {
              return event.target.playVideo();
            });
          },
          onStateChange: function(event) {
            if (event.data === 0 && _this.loop_enabled) {
              event.target.seekTo(0);
            }
            if (event.data === 1) {
              return $('.product-media--featured > *').not(_this.root).trigger('pause-media');
            }
          }
        }
      });
    };

    FrameworkProductVideo.prototype.skipVideo = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return true;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return true;
      } else {
        return false;
      }
    };

    return FrameworkProductVideo;

  })();

  theme.classes.FrameworkProduct = (function() {
    function FrameworkProduct(root) {
      var _this;
      this.root = root;
      this.modalCloseListener = bind(this.modalCloseListener, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.getActiveImageId = bind(this.getActiveImageId, this);
      this.imageZoom = bind(this.imageZoom, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updatePrices = bind(this.updatePrices, this);
      this.enableStockForm = bind(this.enableStockForm, this);
      this.enableCartButtons = bind(this.enableCartButtons, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateHistoryState = bind(this.updateHistoryState, this);
      this.optionChangeListener = bind(this.optionChangeListener, this);
      this.updateLowInStock = bind(this.updateLowInStock, this);
      this.sizeChart = bind(this.sizeChart, this);
      this.getProductJson = bind(this.getProductJson, this);
      this.updatePickup = bind(this.updatePickup, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.form_root = _this.root.find('.product-form--root');
      _this.handle = _this.form_root.attr('data-handle');
      _this.thumbs_root = _this.root.find('.product-media--root[data-view="thumbs"]');
      _this.featured_root = _this.root.find('.product-media--root[data-view="featured"]').not('[data-media-size="mobile"]');
      _this.magnify = _this.featured_root.data('magnify');
      _this.main_media = _this.featured_root.find('.product-media--featured');
      _this.media_container = _this.featured_root.closest('.product-media--wrapper');
      _this.thumbs = _this.thumbs_root.find('.product-media--thumb');
      _this.zoom_enabled = _this.featured_root.data('zoom-enabled');
      _this.zoom_images = _this.featured_root.find('.product-media--zoom-image');
      _this.add_to_cart_button = _this.form_root.find('.product-form--add-to-cart');
      _this.pickup_enabled = _this.form_root.data('pickup-enabled');
      _this.button_container = _this.form_root.find('.product-form--button-container');
      _this.button_text_container = _this.form_root.find('.product-form--text');
      _this.callback_enabled = _this.form_root.data('callback-enabled');
      _this.compare_price = _this.form_root.find('.product-form--compare-price');
      _this.form = _this.form_root.find('.product-form--container');
      _this.low_stock_container = _this.form_root.find(".product-form--low-stock");
      _this.low_stock_threshold = _this.form_root.data('low-stock-amount');
      _this.pickup_drawer_container = $('.off-canvas--container[data-view="pickup"]');
      _this.pickup_form_container = _this.root.find('.product-form--pickup');
      _this.price = _this.form_root.find('.product-form--price');
      _this.product_title = _this.form_root.data('title');
      _this.show_low_in_stock = _this.low_stock_threshold === void 0 ? false : true;
      _this.reference_unit = _this.form_root.find('.product-form--reference-unit');
      _this.reference_value = _this.form_root.find('.product-form--reference-value');
      _this.size_chart_enabled = _this.form_root.data('size-chart-enabled');
      _this.size_chart_option = _this.form_root.attr('data-size-chart-option');
      _this.smart_payment_buttons = _this.form_root.find('.product-form--smart-payment-buttons');
      _this.sold_out = _this.form_root.data('sold-out');
      _this.unavailable_container = _this.form_root.find('.product-form--unavailable');
      _this.unavailable_button = _this.unavailable_container.find('[type="submit"]');
      _this.unit_price_container = _this.form_root.find('.product-form--unit-price-container');
      _this.unit_price = _this.form_root.find('.product-form--unit-price');
      _this.variant_container = _this.form_root.find('.product-form--variants');
      _this.variant_listbox = _this.form_root.find('.product-form--variant-select');
      _this.first_variant_id = parseInt(_this.variant_listbox.find('[selected]').val());
      _this.option_inputs = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]');
      _this.load();
    }

    FrameworkProduct.prototype.load = function() {
      var _this;
      _this = this;
      if (!_this.sold_out) {
        if (_this.pickup_enabled) {
          _this.updatePickup(_this.first_variant_id);
        }
        if (_this.handle) {
          _this.getProductJson();
        }
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(_this.first_variant_id);
        }
        if (theme.settings.cart_type === 'drawer') {
          _this.addToCartListener();
        }
      }
      if (_this.zoom_enabled) {
        _this.imageZoom();
        _this.resizeListeners();
        _this.modalCloseListener();
      }
      if (_this.thumbs) {
        return _this.thumbNavigation();
      }
    };

    FrameworkProduct.prototype.updatePickup = function(variant_id) {
      var _this, request;
      _this = this;
      request = new XMLHttpRequest();
      request.onload = function() {
        var drawer_html, form_html, root_html;
        if (request.status >= 200 && request.status < 300) {
          root_html = $($.parseHTML(request.response));
          form_html = root_html.find('.pickup--form--container');
          _this.pickup_form_container.html(form_html);
          drawer_html = root_html.find('.pickup--drawer--container');
          drawer_html.find('.pickup--drawer--product-title').text(_this.product_title);
          _this.pickup_drawer_container.html(drawer_html);
          theme.partials.OffCanvas.unload();
          return theme.partials.OffCanvas.load();
        }
      };
      request.onerror = function() {
        return console.log(request.statusText + ": product pickup request failed!");
      };
      request.open("GET", "/variants/" + variant_id + "/?section_id=framework--pickup");
      return request.send();
    };

    FrameworkProduct.prototype.getProductJson = function() {
      var _this, request;
      _this = this;
      request = new XMLHttpRequest();
      request.onload = function() {
        var product_json;
        product_json = JSON.parse(request.response);
        if (product_json.variants.length > 1) {
          _this.optionChangeListener(product_json.variants);
          if (_this.size_chart_enabled) {
            return _this.sizeChart(product_json.options);
          }
        }
      };
      request.onerror = function() {
        return console.log(request.statusText + ": product.json request failed!");
      };
      request.open("GET", "/products/" + _this.handle + ".js");
      return request.send();
    };

    FrameworkProduct.prototype.sizeChart = function(variant_options) {
      var _this;
      _this = this;
      _this.form_root.find('.disclosure--root, .radios--header').each(function(index) {
        if (variant_options[index].name.toLowerCase() === _this.size_chart_option.toLowerCase()) {
          $(this).append("<div class='product-form--modal-link' data-item='block-link'> <a class='modal--link' href='#'> " + theme.translations.size_chart_label + " </a> </div>");
          return false;
        }
      });
      return new theme.classes.FrameworkModal(_this.form_root.find('[data-js-class="FrameworkModal"]'));
    };

    FrameworkProduct.prototype.updateLowInStock = function(variant_id) {
      var _this, message, quantity;
      _this = this;
      quantity = _this.variant_listbox.find("[value='" + variant_id + "']").data('inventory-quantity');
      if (quantity === void 0) {
        return;
      } else if (quantity === 1) {
        message = theme.translations.low_in_stock.one;
      } else if (quantity > 1) {
        message = theme.translations.low_in_stock.other;
        message = message.replace(/\d+/, quantity);
      }
      return _this.low_stock_container.text(message).show();
    };

    FrameworkProduct.prototype.optionChangeListener = function(variants) {
      var _this, updateVariant;
      _this = this;
      updateVariant = function(variant) {
        if (_this.callback_enabled) {
          _this.updateHistoryState(variant.id);
          return selectCallback(variant);
        } else {
          return _this.variantSelected(variant);
        }
      };
      return _this.option_inputs.on('change', function() {
        var current_options, j, len, options, variant, variant_title;
        current_options = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        for (j = 0, len = variants.length; j < len; j++) {
          variant = variants[j];
          if (variant.title === variant_title) {
            updateVariant(variant);
            return;
          }
        }
        return updateVariant(false);
      });
    };

    FrameworkProduct.prototype.updateHistoryState = function(variant_id) {
      var _this, new_variant_url;
      _this = this;
      new_variant_url = window.location.protocol + "//" + window.location.host + window.location.pathname;
      if (variant_id) {
        new_variant_url += "?variant=" + variant_id;
      }
      return window.history.replaceState({
        path: new_variant_url
      }, '', new_variant_url);
    };

    FrameworkProduct.prototype.variantSelected = function(variant) {
      var _this;
      _this = this;
      _this.form.find('.product-form--error').remove();
      _this.low_stock_container.hide();
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (variant && variant.available) {
        if (_this.pickup_enabled) {
          _this.updatePickup(variant.id);
          _this.pickup_form_container.show();
        }
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
        _this.enableCartButtons(true);
        _this.enableStockForm(false);
        _this.updatePrices(variant);
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(variant.id);
        }
      } else {
        if (_this.pickup_enabled) {
          _this.pickup_form_container.hide();
        }
        _this.enableCartButtons(false);
        _this.enableStockForm(true);
      }
      if (variant.featured_media) {
        return _this.updateVariantMedia(variant.featured_media.id);
      }
    };

    FrameworkProduct.prototype.enableCartButtons = function(enable) {
      var _this;
      _this = this;
      _this.add_to_cart_button.attr('disabled', !enable);
      if (enable) {
        _this.button_text_container.text(theme.translations.add_to_cart);
        return _this.smart_payment_buttons.show();
      } else {
        _this.button_text_container.text(theme.translations.out_of_stock);
        return _this.smart_payment_buttons.hide();
      }
    };

    FrameworkProduct.prototype.enableStockForm = function(enable) {
      var _this;
      _this = this;
      _this.unavailable_button.prop("disabled", !enable);
      if (enable) {
        return _this.unavailable_container.show();
      } else {
        return _this.unavailable_container.hide();
      }
    };

    FrameworkProduct.prototype.updatePrices = function(variant) {
      var _this, compare_price, unit_price, variant_price;
      _this = this;
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.html(variant_price);
      if (variant.compare_at_price > variant.price) {
        compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.html(compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.unit_price_measurement) {
        unit_price = theme.utils.formatMoney(variant.unit_price);
        _this.unit_price.html(unit_price);
        _this.reference_unit.html(variant.unit_price_measurement.reference_unit);
        if (variant.unit_price_measurement.reference_value === 1) {
          _this.reference_value.hide();
        } else {
          _this.reference_value.html(variant.unit_price_measurement.reference_value);
          _this.reference_value.show();
        }
        return _this.unit_price_container.show();
      } else {
        return _this.unit_price_container.hide();
      }
    };

    FrameworkProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.form.on('submit', function() {
          _this.form.find('.product-form--error').remove();
          _this.button_container.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.form.append("<div class='product-form--error' data-item='paragraph'> " + error + " </div>");
              return _this.button_container.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.button_container.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(event) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(event)) {
          current_media = _this.root.find('.product-media--featured[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).attr('data-id');
          clicked_media = _this.root.find(".product-media--featured[data-id='" + clicked_id + "'] > *");
          _this.updateVariantMedia(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().attr('data-media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkProduct.prototype.updateVariantMedia = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_media.attr('data-active', 'false');
      variant_image = _this.main_media.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      variant_thumb.attr('data-active', 'true');
      if (_this.zoom_enabled) {
        return _this.imageZoom();
      }
    };

    FrameworkProduct.prototype.imageZoom = function() {
      var _this, active_zoom_image, left_position, top_position, wrapper_height, wrapper_width, x_ratio, y_ratio;
      _this = this;
      active_zoom_image = _this.zoom_images.filter("[data-id='" + (_this.getActiveImageId()) + "']");
      active_zoom_image.css('display', 'none');
      _this.media_container.off('mouseenter.Product.imageZoom');
      _this.media_container.off('mouseleave.Product.imageZoom');
      if (_this.main_media.length < 1 || theme.utils.mqs.current_window === 'small') {

      } else if (active_zoom_image.length > 0) {
        _this.media_container.attr('data-media-type', 'image');
        wrapper_width = _this.media_container.width();
        wrapper_height = _this.media_container.height();
        active_zoom_image.css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('.image--root').css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('img').addClass('lazypreload');
        top_position = _this.media_container.offset().top;
        left_position = _this.media_container.offset().left;
        x_ratio = (wrapper_width * _this.magnify - wrapper_width) / wrapper_width;
        y_ratio = (wrapper_height * _this.magnify - wrapper_height) / wrapper_height;
        _this.media_container.on('mouseenter.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'block');
        });
        _this.media_container.on('mouseleave.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'none');
        });
        return _this.media_container.on('mousemove', function(event) {
          var relative_left, relative_top;
          relative_left = event.pageX - left_position;
          relative_top = event.pageY - top_position;
          return active_zoom_image.css({
            'left': relative_left * -x_ratio,
            'top': relative_top * -y_ratio
          });
        });
      } else {
        return _this.media_container.attr('data-media-type', '');
      }
    };

    FrameworkProduct.prototype.getActiveImageId = function() {
      var _this, active_image, active_image_id;
      _this = this;
      active_image = _this.main_media.filter('[data-active="true"]');
      return active_image_id = active_image.attr('data-id');
    };

    FrameworkProduct.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Product', theme.utils.debounce(100, function() {
        return _this.imageZoom();
      }));
    };

    FrameworkProduct.prototype.modalCloseListener = function() {
      var _this;
      _this = this;
      return $(window).on('FrameworkModal.afterClose', function() {
        return _this.imageZoom();
      });
    };

    return FrameworkProduct;

  })();

  theme.classes.FrameworkRadios = (function() {
    function FrameworkRadios(root) {
      var _this;
      this.root = root;
      this.setSwatchAppearance = bind(this.setSwatchAppearance, this);
      this.updateLabelOnChange = bind(this.updateLabelOnChange, this);
      this.preventFormSubmitOnEnter = bind(this.preventFormSubmitOnEnter, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_value = _this.root.find('.radios--option-current');
      _this.inputs = _this.root.find('[data-item="radio"]');
      _this.is_swatches = _this.root.data('is-swatches');
      _this.load();
    }

    FrameworkRadios.prototype.load = function() {
      var _this;
      _this = this;
      _this.preventFormSubmitOnEnter();
      if (_this.is_swatches) {
        _this.updateLabelOnChange();
        return _this.setSwatchAppearance();
      }
    };

    FrameworkRadios.prototype.preventFormSubmitOnEnter = function() {
      var _this;
      _this = this;
      return _this.inputs.on('keydown', function(event) {
        if (event.key === 'Enter') {
          return event.preventDefault();
        }
      });
    };

    FrameworkRadios.prototype.updateLabelOnChange = function() {
      var _this;
      _this = this;
      return _this.inputs.on('change', function() {
        return _this.current_value.text($(this).val());
      });
    };

    FrameworkRadios.prototype.setSwatchAppearance = function() {
      var _this;
      _this = this;
      return _this.inputs.each(function() {
        var swatch, swatch_color;
        swatch = $(this).siblings('.radios--swatch-button');
        swatch_color = $(this).val().toLowerCase().replace(/\s+/g, '');
        if (theme.swatches[swatch_color] === void 0) {
          return swatch.css('background-color', swatch_color);
        } else if (theme.swatches[swatch_color].indexOf('cdn.shopify.com') > -1) {
          return swatch.css('background-image', "url(" + theme.swatches[swatch_color] + ")");
        } else {
          return swatch.css('background-color', theme.swatches[swatch_color]);
        }
      });
    };

    return FrameworkRadios;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = theme.partials.OffCanvas;
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $(".off-canvas--main-content a[href='" + theme.urls.search + "']").on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $(".off-canvas--right-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $(".off-canvas--left-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.search);
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + "&";
      } else {
        return _this.search_url = _this.search_url + "?";
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function(event) {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2 && event.type !== 'paste') {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          return console.log("search.json Request Failed: " + textStatus + ", " + error);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.FrameworkSections = (function() {
    function FrameworkSections() {
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    FrameworkSections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    FrameworkSections.prototype.getActiveSection = function(event) {
      var _this, active_section;
      _this = this;
      active_section = $(event.target).find('[data-section-id]');
      return active_section;
    };

    FrameworkSections.prototype.getActiveBlock = function(event) {
      var _this, active_block;
      _this = this;
      active_block = $(event.target);
      return active_block;
    };

    FrameworkSections.prototype.load = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(event) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    FrameworkSections.prototype.unload = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    FrameworkSections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    FrameworkSections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    FrameworkSections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    FrameworkSections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    return FrameworkSections;

  })();

  theme.classes.FrameworkServiceList = (function() {
    function FrameworkServiceList(root) {
      var _this;
      this.root = root;
      this.balanceColumns = bind(this.balanceColumns, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.block_list = _this.root.find('.service-list--blocks');
      _this.blocks = _this.root.find('li');
      _this.blocks_container = _this.root.find('.service-list--container');
      _this.headers = _this.root.find('.service-list--block-header');
      _this.single_column = _this.root.find('.service-list--single-column');
      _this.left_column = _this.root.find('.service-list--left-column');
      _this.right_column = _this.root.find('.service-list--right-column');
      _this.load();
    }

    FrameworkServiceList.prototype.load = function() {
      var _this;
      _this = this;
      return _this.balanceColumns();
    };

    FrameworkServiceList.prototype.balanceColumns = function() {
      var _this, assignLoopList, isTypeHeader, loop_list, offset, thresholdBreached, with_multiple_headers;
      _this = this;
      offset = _this.root.data('service-list--show-descriptions') === true ? 75 : 0;
      with_multiple_headers = _this.block_list.length > 1 ? true : false;
      isTypeHeader = function(item) {
        return item.hasClass('service-list--block-header');
      };
      thresholdBreached = function() {
        var left_column_height, right_column_height, single_column_height;
        single_column_height = _this.single_column.outerHeight();
        left_column_height = _this.left_column.outerHeight();
        right_column_height = _this.right_column.outerHeight();
        return left_column_height >= parseFloat(right_column_height + single_column_height - offset);
      };
      assignLoopList = function() {
        if (with_multiple_headers) {
          _this.root.attr('data-service-list--has-headers', true);
          return _this.block_list;
        } else {
          _this.left_column.append('<ul class="service-list--blocks"></ul>');
          return _this.blocks;
        }
      };
      loop_list = assignLoopList();
      return loop_list.each(function(index) {
        if (thresholdBreached()) {
          _this.single_column.find('.service-list--blocks').appendTo(_this.right_column);
          return;
        } else {
          if (with_multiple_headers) {
            $(this).appendTo(_this.left_column);
          } else {
            if (isTypeHeader($(this))) {
              $(this).find('.service-list--block-header--text').prependTo(_this.blocks_container);
              $(this).remove();
            } else {
              $(this).appendTo(_this.left_column.find('.service-list--blocks'));
            }
          }
        }
        if (index === loop_list.length - 1 && _this.right_column.is(':empty') && _this.headers.length > 1) {
          return _this.left_column.find('.service-list--blocks').last().appendTo(_this.right_column);
        }
      });
    };

    return FrameworkServiceList;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      var _this;
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.pauseMedia = bind(this.pauseMedia, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.checkCarouselStatus = bind(this.checkCarouselStatus, this);
      this.load = bind(this.load, this);
      _this = this;
      this.active_index = 0;
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.autoplay_frequency = 3000;
      this.navigation = this.container.data('navigation') ? true : false;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.owl = this.container.data('owlCarousel');
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.slide_length = this.container.children().length;
      _this.load();
    }

    FrameworkSlider.prototype.load = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.carouselReady', function() {
        _this.createSlider();
        return _this.eventListeners();
      });
      return _this.checkCarouselStatus();
    };

    FrameworkSlider.prototype.checkCarouselStatus = function() {
      var _this;
      _this = this;
      if (theme.utils.carousel_script_status === 'loaded') {
        _this.createSlider();
        return _this.eventListeners();
      } else if (theme.utils.carousel_script_status === null) {
        theme.utils.carousel_script_status = 'loading';
        return theme.utils.insertScript(theme.assets.carousel, function() {
          theme.utils.carousel_script_status = 'loaded';
          return $(window).trigger('theme.utils.carouselReady');
        });
      }
    };

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {
          return $(window).trigger('slider.ready');
        },
        afterAction: function() {
          _this.active_index = _this.getActiveIndex();
          _this.alignPlayButton();
          _this.updateContextMenu(_this.active_index);
          _this.formatPaginationNumbers();
          return _this.pauseMedia();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html('<svg class="icon--root icon--chevron-left" viewBox="0 0 12 20"> <path d="M2.648 10l8.613-8.614L9.99.114.102 10l9.887 9.886 1.272-1.272z" fill-rule="nonzero" /> </svg>');
        slider.find('.owl-next').html('<svg class="icon--root icon--chevron-right" viewBox="0 0 12 20"> <path d="M8.716 10L.102 18.614l1.273 1.272L11.261 10 1.375.114.102 1.386z" fill-rule="nonzero" /> </svg>');
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = "." + (this.container.find('.slide').eq(index).data('feed-type'));
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if ($('body').hasClass('transparent-menu') && $('.header--root').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.pauseMedia = function() {
      var _this;
      _this = this;
      return _this.container.find('.product-video--root, .product-model--root').trigger('pause-media');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (theme.utils.isTouchDevice()) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (theme.utils.mqs.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).on('scroll', function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).on('resize', function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkTabOrder = (function() {
    function FrameworkTabOrder(mobile_order, desktop_order) {
      var _this;
      this.mobile_order = mobile_order;
      this.desktop_order = desktop_order;
      this.resizeListener = bind(this.resizeListener, this);
      this.disableFocus = bind(this.disableFocus, this);
      this.enableCustomFocus = bind(this.enableCustomFocus, this);
      this.updateOrderList = bind(this.updateOrderList, this);
      this.detectTabDirection = bind(this.detectTabDirection, this);
      this.getElementList = bind(this.getElementList, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.tab_forwards = null;
      _this.mobile_order_elements = _this.getElementList(_this.mobile_order);
      _this.desktop_order_elements = _this.getElementList(_this.desktop_order);
      _this.load();
    }

    FrameworkTabOrder.prototype.load = function() {
      var _this;
      _this = this;
      _this.detectTabDirection();
      _this.updateOrderList();
      _this.enableCustomFocus();
      return _this.resizeListener();
    };

    FrameworkTabOrder.prototype.getElementList = function(order_list) {
      var _this, order_list_elements;
      _this = this;
      if (order_list) {
        order_list_elements = [];
        order_list.forEach(function(container_class) {
          if ($(container_class).length > 0) {
            return order_list_elements.push($(container_class).first());
          }
        });
        return order_list_elements;
      } else {
        return false;
      }
    };

    FrameworkTabOrder.prototype.detectTabDirection = function() {
      var _this;
      _this = this;
      return $(document).on("keydown", function(event) {
        _this.tab_forwards = true;
        if (event.which === 9 && event.shiftKey) {
          _this.tab_forwards = false;
        }
        return true;
      });
    };

    FrameworkTabOrder.prototype.updateOrderList = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        _this.current_order_elements = _this.mobile_order_elements;
        return _this.previous_order_elements = _this.desktop_order_elements;
      } else {
        _this.current_order_elements = _this.desktop_order_elements;
        return _this.previous_order_elements = _this.mobile_order_elements;
      }
    };

    FrameworkTabOrder.prototype.enableCustomFocus = function() {
      var _this;
      _this = this;
      if (!_this.current_order_elements) {
        return;
      }
      return _this.current_order_elements.forEach(function(element, index) {
        return element.on('focusout', function(event) {
          var lost_focus, move_to;
          if (!theme.utils.tabbing) {
            return;
          }
          lost_focus = $(this).has(event.relatedTarget).length === 0;
          if (lost_focus && _this.tab_forwards) {
            if ((index + 1) < _this.current_order_elements.length) {
              move_to = _this.current_order_elements[index + 1];
              return move_to.find(':focusable').first().focus();
            }
          } else if (lost_focus) {
            if ((index - 1) >= 0) {
              move_to = _this.current_order_elements[index - 1];
              return move_to.find(':focusable').last().focus();
            }
          }
        });
      });
    };

    FrameworkTabOrder.prototype.disableFocus = function() {
      var _this;
      _this = this;
      if (!_this.previous_order_elements) {
        return;
      }
      return _this.previous_order_elements.forEach(function(element, index) {
        return element.off('focusout');
      });
    };

    FrameworkTabOrder.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('theme.utils.mqs.updated', function() {
        _this.updateOrderList();
        _this.enableCustomFocus();
        return _this.disableFocus();
      });
    };

    return FrameworkTabOrder;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      this.isTouchDevice = bind(this.isTouchDevice, this);
      this.loadJsClasses = bind(this.loadJsClasses, this);
      this.detectTabbing = bind(this.detectTabbing, this);
      var _this;
      _this = this;
      _this.carousel_script_status = null;
      _this.google_maps_script_status = null;
      _this.mqs = new theme.classes.FrameworkMediaQueries();
      _this.detectTabbing();
    }

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.detectTabbing = function() {
      var _this;
      _this = this;
      $(window).on('click load', function() {
        _this.tabbing = false;
        return $('body').attr('data-tabbing', _this.tabbing);
      });
      return $(window).on('keydown', function(event) {
        if (event.which === 9 || event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40 || event.which === 27) {
          _this.tabbing = true;
          return $('body').attr('data-tabbing', _this.tabbing);
        }
      });
    };

    FrameworkUtils.prototype.stylesheetLoaded = function() {
      var stylesheetPromise;
      return stylesheetPromise = new Promise(function(resolve) {
        var link;
        link = document.querySelector("link[href='" + theme.assets.stylesheet + "']");
        if (link.loaded) {
          resolve();
        }
        return link.addEventListener('load', function() {
          return setTimeout(resolve, 0);
        });
      });
    };

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(event) {
        return $(event.target).on('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.loadJsClasses = function() {
      var _this;
      _this = this;
      return $('[data-js-class]').each(function() {
        var js_class, partial_class, vanilla;
        js_class = $(this).attr('data-js-class');
        vanilla = false;
        if (el(this).getAttribute('data-dom-library') === 'vanilla') {
          vanilla = true;
        }
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            if (vanilla) {
              theme.partials[js_class] = new partial_class(el(this));
            } else {
              theme.partials[js_class] = new partial_class($(this));
            }
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + " .image--root").outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ", .placeholder--root").height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    FrameworkUtils.prototype.insertStylesheet = function(src) {
      var _this, stylesheet;
      _this = this;
      stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = src;
      return document.head.appendChild(stylesheet);
    };

    FrameworkUtils.prototype.insertScript = function(src, callback) {
      var _this, script;
      _this = this;
      script = document.createElement('script');
      script.src = src;
      if (callback) {
        script.onload = callback;
      }
      return document.body.appendChild(script);
    };

    FrameworkUtils.prototype.formatMoney = function(raw_amount) {
      var _this, formatWithSeperators, formatted_amount, money_format, regex;
      _this = this;
      regex = /\{\{\s*(\w+)\s*\}\}/;
      money_format = theme.shop.money_format.match(regex)[1];
      formatWithSeperators = function(amount_in_cents, decimal_places, swap_seperators) {
        var amount_components, cents, cents_seperator, dollars, thousand_seperator;
        thousand_seperator = swap_seperators ? '.' : ',';
        cents_seperator = swap_seperators ? ',' : '.';
        amount_components = (amount_in_cents / 100).toFixed(decimal_places).split('.');
        cents = amount_components[1] ? cents_seperator + amount_components[1] : '';
        dollars = amount_components[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousand_seperator);
        return dollars + cents;
      };
      switch (money_format) {
        case 'amount':
          formatted_amount = formatWithSeperators(raw_amount, 2, false);
          break;
        case 'amount_no_decimals':
          formatted_amount = formatWithSeperators(raw_amount, 0, false);
          break;
        case 'amount_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 2, true);
          break;
        case 'amount_no_decimals_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 0, true);
      }
      return theme.shop.money_format.replace(regex, formatted_amount);
    };

    FrameworkUtils.prototype.isTouchDevice = function() {
      var _this;
      _this = this;
      if (window.matchMedia("(pointer: coarse)").matches) {
        return true;
      } else {
        return false;
      }
    };

    FrameworkUtils.prototype.isNaN = function(num) {
      var _this;
      _this = this;
      return num !== num;
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function() {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function() {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function() {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(event) {
        event.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (theme.utils.isTouchDevice() && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').show();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').hide();
        link.closest('.x-menu--level-1--link').find('.icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').hide();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').show();
        link.closest('.x-menu--level-1--link').find('.icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.icon--chevron-right--small').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function() {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.OffCanvas.state === 'left-open') {
            theme.partials.OffCanvas.closeLeft();
          } else if (theme.partials.OffCanvas.state === 'right-open') {
            theme.partials.OffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function() {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function() {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  theme.classes.Article = (function(superClass) {
    extend(Article, superClass);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    return Article;

  })(theme.classes.FrameworkArticle);

  theme.classes.Blog = (function(superClass) {
    extend(Blog, superClass);

    function Blog() {
      return Blog.__super__.constructor.apply(this, arguments);
    }

    return Blog;

  })(theme.classes.FrameworkBlog);

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart() {
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      return Cart.__super__.constructor.apply(this, arguments);
    }

    Cart.prototype.updateTotalsComplete = function(count) {
      var _this;
      _this = this;
      if (count > 0) {
        return $('.header--cart-link').attr('data-has-items', 'true');
      } else {
        return $('.header--cart-link').attr('data-has-items', 'false');
      }
    };

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.Disclosure = (function(superClass) {
    extend(Disclosure, superClass);

    function Disclosure() {
      return Disclosure.__super__.constructor.apply(this, arguments);
    }

    return Disclosure;

  })(theme.classes.FrameworkDisclosure);

  theme.classes.FeaturedVideo = (function(superClass) {
    extend(FeaturedVideo, superClass);

    function FeaturedVideo() {
      return FeaturedVideo.__super__.constructor.apply(this, arguments);
    }

    return FeaturedVideo;

  })(theme.classes.FrameworkFeaturedVideo);

  theme.classes.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    return Footer;

  })(theme.classes.FrameworkFooter);

  theme.classes.Slideshow = (function() {
    function Slideshow(root) {
      var _this, slide_parent;
      this.root = root;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      this.checkCarouselStatus = bind(this.checkCarouselStatus, this);
      this.load = bind(this.load, this);
      _this = this;
      this.el = _this.root.find('.slides');
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.owl = $(".owl-carousel").data('owlCarousel');
      _this.load();
    }

    Slideshow.prototype.load = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.carouselReady', function() {
        return _this.createSlider();
      });
      return _this.checkCarouselStatus();
    };

    Slideshow.prototype.checkCarouselStatus = function() {
      var _this;
      _this = this;
      if (theme.utils.carousel_script_status === 'loaded') {
        return _this.createSlider();
      } else if (theme.utils.carousel_script_status === null) {
        theme.utils.carousel_script_status = 'loading';
        return theme.utils.insertScript(theme.assets.carousel, function() {
          theme.utils.carousel_script_status = 'loaded';
          return $(window).trigger('theme.utils.carouselReady');
        });
      }
    };

    Slideshow.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    Slideshow.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    Slideshow.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    Slideshow.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    Slideshow.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, left_offset, middle_top, slide, slide_height, slide_padding, slide_width, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      slide_height = slide.outerHeight();
      slide_width = slide.outerWidth();
      top_offset = 0;
      if (caption.hasClass('top')) {
        caption.css('top', top_offset + slide_padding);
      } else if (caption.hasClass('middle')) {
        middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
        caption.css('top', middle_top);
      }
      if (caption.hasClass('center')) {
        left_offset = (slide_width - caption_width) / 2;
        caption.css('left', left_offset);
      }
      return caption.css('visibility', 'visible');
    };

    Slideshow.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      play_button.css({
        'margin-top': '-40px',
        'top': '50%'
      });
      return play_button.css('visibility', 'visible');
    };

    Slideshow.prototype.eventListeners = function() {
      var slider;
      slider = this;
      return this.el.find('.owl-pagination .owl-page').on('click', function() {
        if (slider.owl) {
          return slider.owl.stop();
        }
      });
    };

    return Slideshow;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.accelerationState = bind(this.accelerationState, this);
      this.newScrollDetected = bind(this.newScrollDetected, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.touchListener = bind(this.touchListener, this);
      this.scrollListener = bind(this.scrollListener, this);
      this.validScrollZone = bind(this.validScrollZone, this);
      this.detectAndLockHeader = bind(this.detectAndLockHeader, this);
      this.hideFixedHeader = bind(this.hideFixedHeader, this);
      this.closeWhenReady = bind(this.closeWhenReady, this);
      this.showFixedHeader = bind(this.showFixedHeader, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.moveContactButton = bind(this.moveContactButton, this);
      this.moveYMenu = bind(this.moveYMenu, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.container = _this.root.find('.header--container');
      _this.fixed_height = 0;
      _this.scrollings = [];
      _this.prev_time = new Date().getTime();
      _this.prev_acceleration_state = 'decel';
      _this.time_last_scrolled = 0;
      _this.browser_type = null;
      _this.animation_lock = false;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.moveYMenu();
      _this.moveContactButton();
      _this.resizeListeners();
      _this.sectionListeners();
      _this.scrollListener();
      return _this.touchListener();
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.moveContactButton = function() {
      var _this;
      _this = this;
      $('.mobile-nav--contact-button').empty();
      if ($('.header--contact-button-for-off-canvas').length > 0) {
        return $('.header--contact-button-for-off-canvas .contact-modal').appendTo('.mobile-nav--contact-button');
      }
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      _this.root.on('theme:section:load', function() {
        if ($('.modal--window').css('display') === 'block') {
          $('.modal--close').trigger('click');
        }
        theme.partials.OffCanvas.unload();
        return theme.partials.OffCanvas.load();
      });
      return _this.root.on('theme:section:unload', function() {
        return $(window).off('resize.Header');
      });
    };

    Header.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Header', _this.checkOverlap);
    };

    Header.prototype.showFixedHeader = function(from_event) {
      var _this, valid_zone;
      if (from_event == null) {
        from_event = 'scroll';
      }
      _this = this;
      if (from_event === 'add-to-cart') {
        valid_zone = _this.validScrollZone(0);
      } else {
        valid_zone = _this.validScrollZone();
      }
      if (_this.root.attr('data-header--position') === 'fixed' || !valid_zone) {
        return false;
      }
      _this.animation_lock = true;
      _this.root.height(_this.root.height());
      _this.root.attr('data-header--position', 'fixed');
      if (_this.fixed_height === 0) {
        _this.fixed_height = _this.container.outerHeight();
      }
      return _this.container.velocity({
        translateY: [0, -_this.fixed_height]
      }, {
        duration: 500,
        complete: function() {
          _this.animation_lock = false;
          if (from_event === 'add-to-cart') {
            return _this.closeWhenReady();
          }
        }
      });
    };

    Header.prototype.closeWhenReady = function() {
      var _this, timer;
      _this = this;
      timer = setTimeout(function() {
        _this.hideFixedHeader();
        return _this.container.off('mouseenter mouseleave');
      }, 2000);
      _this.container.on('mouseenter', function() {
        return clearTimeout(timer);
      });
      return _this.container.on('mouseleave', function() {
        return timer = setTimeout(function() {
          _this.hideFixedHeader();
          return _this.container.off('mouseenter mouseleave');
        }, 500);
      });
    };

    Header.prototype.hideFixedHeader = function(duration) {
      var _this;
      if (duration == null) {
        duration = 400;
      }
      _this = this;
      if (_this.root.attr('data-header--position') !== 'fixed') {
        return false;
      }
      _this.animation_lock = true;
      _this.container.velocity("stop", true);
      return _this.container.velocity({
        translateY: [-_this.fixed_height, 0]
      }, {
        duration: duration,
        complete: function() {
          _this.root.attr('data-header--position', 'relative');
          _this.container.removeAttr('style');
          _this.root.height('auto');
          return _this.animation_lock = false;
        }
      });
    };

    Header.prototype.detectAndLockHeader = function() {
      var _this, header_offset, scroll_top;
      _this = this;
      if (_this.root.attr('data-header--position') !== 'fixed') {
        return;
      }
      scroll_top = $(window).scrollTop();
      header_offset = _this.root.offset().top;
      if ($('[data-banner-enabled="true"]').length === 0) {
        header_offset += 0;
      }
      if (scroll_top <= header_offset) {
        return _this.hideFixedHeader(0);
      }
    };

    Header.prototype.validScrollZone = function(offset_threshold) {
      var _this, header_offset, scroll_top;
      if (offset_threshold == null) {
        offset_threshold = 600;
      }
      _this = this;
      scroll_top = $(window).scrollTop();
      header_offset = _this.root.offset().top + (_this.root.outerHeight() / 2);
      if (scroll_top > header_offset + offset_threshold) {
        return true;
      } else {
        return false;
      }
    };

    Header.prototype.scrollListener = function() {
      var _this;
      _this = this;
      $(window).on("DOMMouseScroll mousewheel touchmove", function(event) {
        _this.scrollHandler(event);
        return _this.detectAndLockHeader();
      });
      return $(window).on("scroll", function() {
        return _this.detectAndLockHeader();
      });
    };

    Header.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!theme.utils.isTouchDevice()) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchmove', function() {
        return _this.detectAndLockHeader();
      });
      $(document).on('touchstart', function(event) {
        position.start.x = event.originalEvent.touches[0].clientX;
        position.start.y = event.originalEvent.touches[0].clientY;
      });
      return $(document).bind('touchend', function(event) {
        if (_this.animation_lock) {
          return false;
        }
        position.end.x = event.originalEvent.changedTouches[0].clientX;
        position.end.y = event.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.x - position.end.x) > 30) {
          return false;
        }
        if (position.start.y > position.end.y + 5) {
          return _this.hideFixedHeader();
        } else if (position.start.y < position.end.y - 5) {
          return _this.showFixedHeader();
        }
      });
    };

    Header.prototype.scrollHandler = function(event) {
      var _this, delta, e, horizontalDetection, isScrollingVertically, value;
      _this = this;
      if (_this.animation_lock) {
        return false;
      }
      e = event.originalEvent;
      if (typeof e.wheelDelta !== 'undefined') {
        value = e.wheelDelta;
        _this.browser_type = 'webkit';
      } else if (typeof e.detail !== 'undefined') {
        value = -e.detail;
        _this.browser_type = 'firefox';
      }
      delta = Math.max(-1, Math.min(1, value));
      if (_this.scrollings.length > 149) {
        _this.scrollings.shift();
      }
      _this.scrollings.push(Math.abs(value));
      horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
      if (isScrollingVertically) {
        if (_this.newScrollDetected()) {
          if (delta < 0) {
            return _this.hideFixedHeader();
          } else {
            return _this.showFixedHeader();
          }
        }
      }
    };

    Header.prototype.newScrollDetected = function() {
      var _this, acceleration_state, cur_time, scrolled_recently;
      _this = this;
      cur_time = new Date().getTime();
      acceleration_state = _this.accelerationState();
      scrolled_recently = cur_time - _this.time_last_scrolled < 500;
      if (!acceleration_state) {
        return false;
      } else if (acceleration_state === 'accel' && _this.prev_acceleration_state === 'decel' && !scrolled_recently) {
        _this.prev_acceleration_state = acceleration_state;
        return true;
      } else {
        _this.prev_acceleration_state = acceleration_state;
        return false;
      }
    };

    Header.prototype.accelerationState = function() {
      var _this, accel_state, average_end, average_middle, cur_time, getAverage, time_diff;
      _this = this;
      cur_time = new Date().getTime();
      time_diff = cur_time - _this.prev_time;
      _this.prev_time = cur_time;
      if (time_diff > 50) {
        _this.scrollings = [_this.scrollings[_this.scrollings.length - 1]];
        _this.prev_acceleration_state = 'decel';
      }
      getAverage = function(elements, number) {
        var i, lastElements, sum;
        sum = 0;
        lastElements = elements.slice(elements.length - number);
        i = 0;
        while (i < lastElements.length) {
          sum = sum + lastElements[i];
          i++;
        }
        return sum / number;
      };
      average_middle = getAverage(_this.scrollings, Math.ceil(_this.scrollings.length * 0.5));
      average_end = getAverage(_this.scrollings, Math.ceil(_this.scrollings.length * 0.05));
      accel_state = 'decel';
      if (_this.scrollings.length > 1) {
        if (_this.scrollings[0] === 120) {
          accel_state = 'accel';
        } else if (_this.scrollings.length === 2) {
          if (_this.scrollings[0] === 1 && _this.scrollings[1] === 1) {
            accel_state = 'accel';
          }
        } else if (average_end > average_middle) {
          accel_state = 'accel';
        }
      }
      return accel_state;
    };

    return Header;

  })();

  theme.classes.MobileNav = (function() {
    function MobileNav(root) {
      var _this;
      this.root = root;
      this.contactModalTrigger = bind(this.contactModalTrigger, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.modal_content = _this.root.find('.modal--content');
      _this.load();
    }

    MobileNav.prototype.load = function() {
      var _this;
      _this = this;
      return _this.contactModalTrigger();
    };

    MobileNav.prototype.contactModalTrigger = function() {
      var _this, trigger;
      _this = this;
      trigger = $('.mobile-nav--contact-modal-trigger');
      if (trigger.length) {
        return trigger.on("click", function() {
          theme.partials.OffCanvas.closeLeft();
          setTimeout(function() {
            return $('.header--contact-modal .modal--link').trigger('click');
          }, 400);
          return false;
        });
      }
    };

    return MobileNav;

  })();

  theme.classes.OffCanvas = (function(superClass) {
    extend(OffCanvas, superClass);

    function OffCanvas() {
      this.closeRight = bind(this.closeRight, this);
      return OffCanvas.__super__.constructor.apply(this, arguments);
    }

    OffCanvas.prototype.closeRight = function() {
      var _this;
      _this = this;
      OffCanvas.__super__.closeRight.apply(this, arguments);
      if (_this.right_sidebar_view === 'cart') {
        return $("[data-off-canvas--open='right-sidebar'] a").focus();
      } else {
        return $("[data-off-canvas--open='right-sidebar'][data-off-canvas--view='pickup']").focus();
      }
    };

    return OffCanvas;

  })(theme.classes.FrameworkOffCanvas);

  theme.classes.PasswordPage = (function(superClass) {
    extend(PasswordPage, superClass);

    function PasswordPage() {
      return PasswordPage.__super__.constructor.apply(this, arguments);
    }

    return PasswordPage;

  })(theme.classes.FrameworkPasswordPage);

  theme.classes.Popup = (function() {
    function Popup(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.container = _this.root.find('.popup--container');
      _this.open_link = $('.popup--open');
      _this.close_link = _this.root.find('.popup--close');
      _this.show_again_after = _this.root.data('show-again-after');
      _this.mode = _this.root.data('mode');
      _this.newsletter_form = _this.root.find('#contact_form');
      _this.body = $('body');
      _this.eventListeners();
      _this.autoPopup();
    }

    Popup.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.open_link.on('keypress.Popup, click.Popup', function() {
        if (_this.body.hasClass('popup--opened')) {
          _this.close();
        } else {
          _this.open();
        }
        return false;
      });
      _this.close_link.on('keypress.Popup, click.Popup', function() {
        _this.close();
        return false;
      });
      return _this.newsletter_form.on('submit', function(event) {
        var form, form_dom;
        form_dom = this;
        form = $(this);
        form.find('.error, .success').remove();
        event.preventDefault();
        form.find('input[type="email"], input[type="submit"]').hide();
        form.prepend("<p class='success'>" + theme.translations.mailing_list_success_message + "</p>").show();
        setTimeout(function() {
          return form_dom.submit();
        }, 500);
        return false;
      });
    };

    Popup.prototype.open = function(source) {
      var _this;
      _this = this;
      if ($('.template--index .banner').length && source === 'auto') {
        _this.delayUntilValidScrollPosition();
        return false;
      }
      _this.container.removeClass('popup--closed');
      _this.container.velocity({
        translateY: [0, _this.container.outerHeight()]
      }, {
        duration: 300
      });
      _this.body.addClass('popup--opened');
      return setTimeout(function() {
        var offset;
        offset = _this.container.outerHeight();
        if ($('body[data-border="true"]').length > 0) {
          offset = offset - 12;
        }
        return _this.body.css('padding-bottom', offset);
      }, 300);
    };

    Popup.prototype.delayUntilValidScrollPosition = function() {
      var _this;
      _this = this;
      return $(window).on("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup", function() {
        var header_offset, scroll_top;
        header_offset = $('.header--root').offset().top;
        scroll_top = $(window).scrollTop();
        if (scroll_top > header_offset) {
          _this.open();
          return $(window).off("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup");
        }
      });
    };

    Popup.prototype.close = function() {
      var _this;
      _this = this;
      _this.body.removeClass('popup--opened');
      _this.body.velocity({
        paddingBottom: 0
      }, {
        duration: 300
      });
      return _this.container.velocity({
        translateY: [_this.container.outerHeight(), 0]
      }, {
        duration: 300,
        complete: function() {
          return _this.container.addClass('popup--closed');
        }
      });
    };

    Popup.prototype.autoPopup = function() {
      var _this;
      _this = this;
      if (_this.mode === 'manual') {
        return;
      }
      if (!window.localStorage || _this.mode === 'test') {
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (localStorage['troop-themes'] === void 0) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (_this.readyToReset()) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      }
    };

    Popup.prototype.readyToReset = function() {
      var _this, expires, now, troop_local_storage;
      _this = this;
      troop_local_storage = JSON.parse(localStorage['troop-themes']);
      expires = troop_local_storage.popup_expires;
      now = new Date().getTime();
      if (parseFloat(expires - now) <= 0) {
        _this.setResetTime();
        return true;
      }
      return false;
    };

    Popup.prototype.setResetTime = function() {
      var _this, date, expires, object, seconds_from_now;
      _this = this;
      date = new Date();
      seconds_from_now = 1000 * 60 * 60 * 24 * _this.show_again_after;
      expires = date.setTime(date.getTime() + seconds_from_now);
      object = {
        popup_expires: expires
      };
      localStorage['troop-themes'] = JSON.stringify(object);
      return _this;
    };

    return Popup;

  })();

  theme.classes.ProductModel = (function(superClass) {
    extend(ProductModel, superClass);

    function ProductModel() {
      return ProductModel.__super__.constructor.apply(this, arguments);
    }

    return ProductModel;

  })(theme.classes.FrameworkProductModel);

  theme.classes.ProductRecommendations = (function(superClass) {
    extend(ProductRecommendations, superClass);

    function ProductRecommendations() {
      return ProductRecommendations.__super__.constructor.apply(this, arguments);
    }

    return ProductRecommendations;

  })(theme.classes.FrameworkProductRecommendations);

  theme.classes.ProductVideo = (function(superClass) {
    extend(ProductVideo, superClass);

    function ProductVideo() {
      return ProductVideo.__super__.constructor.apply(this, arguments);
    }

    return ProductVideo;

  })(theme.classes.FrameworkProductVideo);

  theme.classes.Product = (function(superClass) {
    extend(Product, superClass);

    function Product(root) {
      var _this;
      this.root = root;
      this.retractDetails = bind(this.retractDetails, this);
      this.setInfoBoxHeights = bind(this.setInfoBoxHeights, this);
      this.expandDetails = bind(this.expandDetails, this);
      this.moreDetailsListener = bind(this.moreDetailsListener, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.initializeSliderMedia = bind(this.initializeSliderMedia, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.close_description = _this.root.find('.product-page--close-description');
      _this.media_slider = _this.root.find('.product-page--slider');
      _this.info_box = _this.root.find('.product-page--info-box--container');
      _this.less_details = _this.root.find('.product-page--less-details');
      _this.more_details = _this.root.find('.product-page--more-details');
      _this.initial_height = 0;
      _this.initial_width = 0;
      _this.expanded_height = 0;
      _this.expanded_width = 700;
      Product.__super__.constructor.apply(this, arguments);
    }

    Product.prototype.load = function() {
      var _this;
      _this = this;
      Product.__super__.load.apply(this, arguments);
      _this.moreDetailsListener();
      return _this.initializeSliderMedia();
    };

    Product.prototype.initializeSliderMedia = function() {
      var _this;
      _this = this;
      return $(window).on('slider.ready', function() {
        var initial_media_slide;
        initial_media_slide = _this.media_slider.find('[data-active="true"]').closest('.owl-item');
        _this.media_slider.find('.owl-carousel').trigger('owl.jumpTo', initial_media_slide.index());
        return _this.media_slider.find('.product-media--featured[data-active="false"]').show();
      });
    };

    Product.prototype.updateVariantMedia = function(variant_id) {
      var _this, new_media_slide;
      _this = this;
      Product.__super__.updateVariantMedia.apply(this, arguments);
      new_media_slide = _this.media_slider.find("[data-id='" + variant_id + "']").closest('.owl-item');
      return _this.media_slider.find('.owl-carousel').trigger('owl.jumpTo', new_media_slide.index());
    };

    Product.prototype.moreDetailsListener = function() {
      var _this;
      _this = this;
      _this.more_details.on('keypress click', function(event) {
        if (theme.utils.a11yClick(event)) {
          _this.expandDetails();
        }
        return false;
      });
      _this.less_details.on('keypress click', function(event) {
        if (theme.utils.a11yClick(event)) {
          _this.retractDetails();
        }
        return false;
      });
      return _this.close_description.on('click', function() {
        return _this.retractDetails();
      });
    };

    Product.prototype.expandDetails = function() {
      var _this;
      _this = this;
      _this.setInfoBoxHeights();
      _this.info_box.height(_this.info_box.height());
      _this.info_box.width(_this.info_box.width());
      _this.info_box.find('> *').hide();
      _this.info_box.find('.product-page--title').show();
      _this.info_box.find('.product-page--close-description').show();
      _this.info_box.find('.product-page--more-details').hide();
      _this.info_box.find('.product-page--less-details').show();
      _this.info_box.find('.product-page--description-toggle').show().css({
        position: 'absolute',
        bottom: '15px'
      });
      _this.info_box.velocity({
        width: _this.expanded_width,
        height: _this.expanded_height
      }, {
        duration: 400
      });
      return _this.info_box.find('.product-page--description').css({
        display: 'block',
        opacity: 0
      }).velocity({
        opacity: 1
      }, {
        delay: 300
      });
    };

    Product.prototype.setInfoBoxHeights = function() {
      var _this, info_box_clone, ratio;
      _this = this;
      if (_this.expanded_height === 0) {
        _this.initial_height = _this.info_box.outerHeight();
        _this.initial_width = _this.info_box.outerWidth();
        info_box_clone = _this.info_box.clone().css({
          visibility: 'hidden',
          width: _this.expanded_width,
          position: 'fixed'
        }).attr('data-show-description', 'true').appendTo(_this.root);
        _this.expanded_height = info_box_clone.outerHeight();
        ratio = _this.expanded_height / _this.expanded_width;
        if (ratio < .65) {
          _this.expanded_width = _this.expanded_height * 1.5;
          info_box_clone.css({
            width: _this.expanded_width
          });
          _this.expanded_height = info_box_clone.outerHeight();
        }
        return info_box_clone.remove();
      }
    };

    Product.prototype.retractDetails = function() {
      var _this;
      _this = this;
      _this.info_box.find('.product-page--more-details').show();
      _this.info_box.find('.product-page--less-details').hide();
      _this.info_box.find('.product-page--close-description').hide();
      _this.info_box.find('.product-page--description').hide();
      _this.info_box.find('.product-page--description-toggle').css({
        bottom: 'auto',
        position: 'relative'
      });
      _this.info_box.velocity({
        width: _this.initial_width,
        height: _this.initial_height
      }, {
        duration: 400,
        complete: function() {
          return _this.info_box.removeAttr('style');
        }
      });
      return _this.info_box.find('.product-page--excerpt, .product-form--root, .product-page--description-toggle, .product-page--social-media').css({
        display: 'block',
        opacity: 0
      }).velocity({
        opacity: 1
      }, {
        delay: 300,
        complete: function() {
          return _this.info_box.find('> *').removeAttr('style');
        }
      });
    };

    return Product;

  })(theme.classes.FrameworkProduct);

  theme.classes.QuickAdd = (function() {
    function QuickAdd(root) {
      var _this;
      this.root = root;
      this.addProductComplete = bind(this.addProductComplete, this);
      this.renderCart = bind(this.renderCart, this);
      this.updatePrices = bind(this.updatePrices, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateVariantOnOptionChange = bind(this.updateVariantOnOptionChange, this);
      this.handleDuplicates = bind(this.handleDuplicates, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.add_button = _this.root.find('.quick-add--add-button');
      _this.cancel_button = _this.root.find('.quick-add--cancel-button');
      _this.cart_form = _this.root.find('.quick-add--cart-form');
      _this.compare_price = _this.root.find('.quick-add--compare-price');
      _this.confirm_button = _this.root.find('.quick-add--confirm-button');
      _this.confirm_text_container = _this.confirm_button.find('.quick-add--text');
      _this.confirm_text = _this.confirm_text_container.text();
      _this.details = _this.root.find('.quick-add--details');
      _this.id = _this.root.attr('data-quick-add-id');
      _this.price = _this.root.find('.quick-add--price');
      _this.reference_unit = _this.root.find('.quick-add--reference-unit');
      _this.reference_value = _this.root.find('.quick-add--reference-value');
      _this.unit_price_container = _this.root.find('.quick-add--unit-price-container');
      _this.unit_price = _this.root.find('.quick-add--unit-price');
      _this.variant_container = _this.root.find('.quick-add--variants');
      _this.variant_listbox = _this.root.find('.quick-add--variant-select');
      _this.index = '';
      _this.variants = theme.products[_this.id].variants;
      _this.option_inputs = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]');
      _this.related_product_details = _this.root.closest('.product--details').find('.product--details--title-row, .product--excerpt, .product--vendor');
      _this.load();
    }

    QuickAdd.prototype.load = function() {
      var _this;
      _this = this;
      _this.handleDuplicates();
      _this.eventListeners();
      if (_this.variants.length > 1) {
        return _this.updateVariantOnOptionChange();
      }
    };

    QuickAdd.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.add_button.on('keypress click', function() {
        if (_this.variants.length > 1) {
          _this.details.show();
          _this.add_button.hide();
          _this.related_product_details.hide();
          $('.disclosure--root').trigger('resize');
        } else {
          _this.cart_form.trigger('submit');
        }
        return false;
      });
      _this.cancel_button.on('keypress click', function(event) {
        if (theme.utils.a11yClick(event)) {
          _this.details.hide();
          _this.add_button.show();
          _this.related_product_details.show();
        }
        return false;
      });
      if (_this.cart_form.length > 0) {
        return _this.cart_form.on('submit', function(event) {
          event.preventDefault();
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          _this.confirm_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              theme.partials.Cart.updateAllHtml(function() {});
              return _this.addProductComplete();
            } else {
              _this.cart_form.append("<div class='quick-add--error error'>" + error + "</div>");
              _this.add_button.attr('data-loading', 'false');
              return _this.confirm_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    QuickAdd.prototype.handleDuplicates = function() {
      var _this, product;
      _this = this;
      product = $("[data-quick-add-id='" + _this.id + "']");
      if (product.length > 1) {
        return product.each(function(index) {
          if (!$(this).data('quick-add-duplicates-processed')) {
            $(this).attr('data-quick-add-duplicates-processed', 'true');
          }
          if ($(this).is(_this.root)) {
            return _this.index = "-" + index;
          }
        });
      }
    };

    QuickAdd.prototype.updateVariantOnOptionChange = function() {
      var _this;
      _this = this;
      return _this.option_inputs.on('change', function() {
        var current_options, j, len, options, ref, variant, variant_title;
        current_options = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        ref = _this.variants;
        for (j = 0, len = ref.length; j < len; j++) {
          variant = ref[j];
          if (variant.title === variant_title) {
            return _this.variantSelected(variant);
          }
        }
        return _this.variantSelected(false);
      });
    };

    QuickAdd.prototype.variantSelected = function(variant) {
      var _this;
      _this = this;
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (variant && variant.available) {
        _this.confirm_text_container.text(_this.confirm_text);
        _this.confirm_button.attr('disabled', false);
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
        return _this.updatePrices(variant);
      } else {
        _this.confirm_text_container.text(theme.translations.sold_out);
        return _this.confirm_button.attr('disabled', true);
      }
    };

    QuickAdd.prototype.updatePrices = function(variant) {
      var _this, compare_price, unit_price, variant_price;
      _this = this;
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.html(variant_price);
      if (variant.compare_at_price > variant.price) {
        compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.html(compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.unit_price_measurement) {
        unit_price = theme.utils.formatMoney(variant.unit_price);
        _this.unit_price.html(unit_price);
        _this.reference_unit.html(variant.unit_price_measurement.reference_unit);
        if (variant.unit_price_measurement.reference_value === 1) {
          _this.reference_value.hide();
        } else {
          _this.reference_value.html(variant.unit_price_measurement.reference_value);
          _this.reference_value.show();
        }
        return _this.unit_price_container.show();
      } else {
        return _this.unit_price_container.hide();
      }
    };

    QuickAdd.prototype.renderCart = function() {
      var _this;
      _this = this;
      return theme.partials.Cart.renderCart(function() {
        return _this.addProductComplete();
      });
    };

    QuickAdd.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      _this.confirm_button.attr('data-loading', 'false');
      _this.details.hide();
      _this.add_button.show();
      _this.related_product_details.show();
      theme.partials.Header.showFixedHeader('add-to-cart');
      return $('.header--cart').find('.cart--external--total-price, .cart--external--total-items').velocity({
        opacity: 0
      }, {
        delay: 500,
        duration: 200
      }).velocity({
        opacity: 1
      }, {
        duration: 500
      });
    };

    return QuickAdd;

  })();

  theme.classes.Radios = (function(superClass) {
    extend(Radios, superClass);

    function Radios() {
      return Radios.__super__.constructor.apply(this, arguments);
    }

    return Radios;

  })(theme.classes.FrameworkRadios);

  theme.classes.Sections = (function(superClass) {
    extend(Sections, superClass);

    function Sections() {
      return Sections.__super__.constructor.apply(this, arguments);
    }

    return Sections;

  })(theme.classes.FrameworkSections);

  theme.classes.ServiceList = (function(superClass) {
    extend(ServiceList, superClass);

    function ServiceList() {
      return ServiceList.__super__.constructor.apply(this, arguments);
    }

    return ServiceList;

  })(theme.classes.FrameworkServiceList);

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.getLongestDropDrown = bind(this.getLongestDropDrown, this);
      this.orientateDropDown = bind(this.orientateDropDown, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.longest_drop_down = _this.getLongestDropDrown();
      _this.bottom_position_for_sub_above = $(window).height() - _this.root.offset().top;
      _this.banner_exists = $('.banner--container').length > 0;
      XMenu.__super__.constructor.apply(this, arguments);
    }

    XMenu.prototype.load = function() {
      var _this;
      _this = this;
      XMenu.__super__.load.apply(this, arguments);
      $(window).on('resize scroll', function() {
        return _this.orientateDropDown();
      });
      return _this.orientateDropDown();
    };

    XMenu.prototype.orientateDropDown = function() {
      var _this, banner_exists;
      _this = this;
      banner_exists = $('.banner--container').length > 0;
      if (banner_exists && $(window).scrollTop() < 50 && _this.longest_drop_down + 150 < $(window).height()) {
        return _this.root.attr('data-x-menu--sub-above', 'true');
      } else {
        return _this.root.attr('data-x-menu--sub-above', 'false');
      }
    };

    XMenu.prototype.getLongestDropDrown = function() {
      var _this, longest, sub_menus;
      _this = this;
      longest = 0;
      sub_menus = _this.root.find('.x-menu--level-2--container');
      sub_menus.each(function() {
        if ($(this).outerHeight() > longest) {
          return longest = $(this).outerHeight();
        }
      });
      return longest;
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.Collection = (function() {
    function Collection(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.collection--grid-view');
      _this.items = _this.root.find('.collection--grid-product');
      if (_this.item_container.length > 0) {
        _this.matchImageHeights();
        _this.resizeListeners();
      }
    }

    Collection.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.product--image');
    };

    Collection.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return Collection;

  })();

  theme.classes.IndexBanner = (function() {
    function IndexBanner(root) {
      var _this;
      this.root = root;
      this.sectionListeners = bind(this.sectionListeners, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.fixContainerHeight = bind(this.fixContainerHeight, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.banner_enabled = _this.root.data('banner-enabled');
      _this.border_enabled = $('body').data('border');
      _this.load();
    }

    IndexBanner.prototype.load = function() {
      var _this;
      _this = this;
      if (!_this.banner_enabled) {
        $('.fullscreen-container').css('min-height', 'unset');
        return;
      }
      _this.fixContainerHeight();
      _this.resizeListener();
      return _this.sectionListeners();
    };

    IndexBanner.prototype.fixContainerHeight = function() {
      var _this, container_height;
      _this = this;
      _this.root.css('height', "unset");
      container_height = window.innerHeight;
      if (_this.border_enabled && theme.utils.mqs.current_window === 'small') {
        container_height -= 8;
      } else if (_this.border_enabled) {
        container_height -= 12;
      }
      return $('.fullscreen-container').css('min-height', container_height + "px");
    };

    IndexBanner.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Banner', theme.utils.debounce(100, function() {
        if ($('.banner--root').data('banner-enabled') && theme.utils.isTouchDevice() === false) {
          return _this.fixContainerHeight();
        }
      }));
    };

    IndexBanner.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        return theme.partials.XMenu.orientateDropDown();
      });
    };

    return IndexBanner;

  })();

  theme.classes.IndexFeaturedCollection = (function() {
    function IndexFeaturedCollection(root) {
      var _this;
      this.root = root;
      this.setGreatestHeight = bind(this.setGreatestHeight, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.items = _this.root.find('.product--root');
      _this.load();
      _this.sectionListeners();
    }

    IndexFeaturedCollection.prototype.load = function() {
      var _this;
      _this = this;
      _this.setGreatestHeight();
      return $(window).on("resize.section-" + _this.section_id, theme.utils.debounce(100, function() {
        return _this.setGreatestHeight();
      }));
    };

    IndexFeaturedCollection.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:unload', function() {
        return $(window).off("resize.section-" + _this.section_id);
      });
    };

    IndexFeaturedCollection.prototype.setGreatestHeight = function() {
      var _this;
      _this = this;
      $('.product--image-wrapper').css('height', 'auto');
      if (theme.utils.mqs.current_window === 'small') {
        return _this.items.find('.product--image').css('height', 'auto');
      } else {
        return theme.utils.matchImageHeights(_this.root, _this.items, '.product--image-wrapper');
      }
    };

    return IndexFeaturedCollection;

  })();

  theme.classes.CollectionListingPage = (function() {
    function CollectionListingPage(root) {
      var _this;
      this.root = root;
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.item_container = _this.root.find('.collection-listing--grid-root');
      _this.items = _this.root.find('.collection-listing--item-container');
      _this.load();
    }

    CollectionListingPage.prototype.load = function() {
      var _this;
      _this = this;
      return _this.matchImageHeights();
    };

    CollectionListingPage.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.collection-listing--item');
    };

    return CollectionListingPage;

  })();

  el = function(selector) {
    return new theme.classes.FrameworkDomElement(selector);
  };

  new (Main = (function() {
    function Main() {
      this.configureLinks = bind(this.configureLinks, this);
      this.sliderFix = bind(this.sliderFix, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      $(function() {
        return _this.load();
      });
    }

    Main.prototype.load = function() {
      var _this;
      _this = this;
      _this.sliderFix();
      _this.configureLinks();
      theme.sections = new theme.classes.Sections();
      theme.utils = new theme.classes.FrameworkUtils();
      return theme.utils.stylesheetLoaded().then(function() {
        theme.utils.loadJsClasses();
        return $('body').attr('data-assets-loaded', 'true');
      });
    };

    Main.prototype.sliderFix = function() {
      return setTimeout(function() {
        return $(".owl-carousel").each(function() {
          return $(this).data('owlCarousel').calculateAll();
        });
      }, 0);
    };

    Main.prototype.configureLinks = function() {
      $('[data-item="hidden-text"] a').attr('tabindex', '-1');
      return $('a').each(function() {
        if (this.host === location.host) {
          return $(this).attr('target', '_self');
        } else {
          return $(this).attr('target', '_blank').attr('rel', 'noopener');
        }
      });
    };

    return Main;

  })());

}).call(this);
