/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={755:()=>{console.log("components")},520:()=>{let e,t=document.getElementsByClassName("accordeon__btn");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))},317:()=>{document.addEventListener("DOMContentLoaded",(()=>{var e=0;document.querySelector(".primary").addEventListener("click",(function(){e=1,document.querySelectorAll(".preview-remove").forEach((t=>{t.addEventListener("click",(()=>{e=0,console.log("validateClick = "+e)}))})),0==e?(e=0,console.log("validateClick равен 0")):(e=1,console.log("validateClick = "+e))})),document.getElementById("submitButton").addEventListener("click",(function(t){for(var n=document.getElementById("message").value,o=document.getElementsByClassName("text-field__messages"),i=0;i<o.length;i++)o[i].style.display="none";1===e&&""!==n?(document.querySelector(".text-field__submit--success").style.display="block",console.log("Ответ отправлен")):""===n&&0===e?(document.querySelector(".text-field__main--error").style.display="block",console.log("Добавьте сообщение и загрузите изображение")):""===n?(document.querySelector(".text-field__answer--error").style.display="block",console.log("Добавьте сообщение")):0===e&&(document.querySelector(".text-field__img--error").style.display="block",console.log("Загрузите изображение"))})),console.log(e)}))},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function c(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,s;a(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},2:function(e,t,n){var o,i;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),i=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===i&&48<=t&&t<=57||1===i&&48<=t&&t<=57&&45===r?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},r=function(t,n,o,i){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(a)}};return function(s,c){var d,l,u,m,f={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||r("scrollCancel",d)},animateScroll:function(o,s,c){f.cancelScroll();var l=n(d||t,c||{}),v="[object Number]"===Object.prototype.toString.call(o),p=v||!o.tagName?null:o;if(v||p){var h=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var g,y,E,w,b,L,S,A,C=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),M=v?o:function(t,n,o,a){var r=0;if(t.offsetParent)for(;r+=t.offsetTop,t=t.offsetParent;);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,i()-e.innerHeight)),r}(p,C,parseInt("function"==typeof l.offset?l.offset(o,s):l.offset,10),l.clip),O=M-h,x=i(),T=0,q=(g=O,E=(y=l).speedAsDuration?y.speed:Math.abs(g/1e3*y.speed),y.durationMax&&E>y.durationMax?y.durationMax:y.durationMin&&E<y.durationMin?y.durationMin:parseInt(E,10)),N=function(t){var n,i,c;w||(w=t),T+=t-w,L=h+O*(i=b=1<(b=0===q?0:T/q)?1:b,"easeInQuad"===(n=l).easing&&(c=i*i),"easeOutQuad"===n.easing&&(c=i*(2-i)),"easeInOutQuad"===n.easing&&(c=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(c=i*i*i),"easeOutCubic"===n.easing&&(c=--i*i*i+1),"easeInOutCubic"===n.easing&&(c=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(c=i*i*i*i),"easeOutQuart"===n.easing&&(c=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(c=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(c=i*i*i*i*i),"easeOutQuint"===n.easing&&(c=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(c=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(c=n.customEasing(i)),c||i),e.scrollTo(0,Math.floor(L)),function(t,n){var i=e.pageYOffset;if(t==n||i==n||(h<n&&e.innerHeight+i)>=x)return f.cancelScroll(!0),a(o,n,v),r("scrollStop",l,o,s),!(m=w=null)}(L,M)||(m=e.requestAnimationFrame(N),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),S=o,A=l,v||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(M),!1):(r("scrollStart",l,o,s),f.cancelScroll(!0),e.requestAnimationFrame(N))}}},v=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(d.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n,i;try{n=o(decodeURIComponent(l.hash))}catch(t){n=o(l.hash)}if("#"===n){if(!d.topOnEmptyHash)return;i=document.documentElement}else i=document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(d),f.animateScroll(i,l))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(d)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){d&&(document.removeEventListener("click",v,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),m=u=l=d=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),d=n(t,c||{}),u=d.header?document.querySelector(d.header):null,document.addEventListener("click",v,!1),d.updateURL&&d.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(i)}.apply(t,[]),void 0===o||(e.exports=o)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t=n(2),o=n.n(t);n(520);const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;const o=document.createElement(e);return t.length&&o.classList.add(...t),n&&(o.textContent=n),o};n(317),console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),new(o())('a[href*="#statistics"], a[href*="#methods"]'),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];t.onUpload;const o=document.querySelector(e),a=i("div",["preview"]),r=i("div",["btn"]),s=i("button",["btn","primary"],"Загрузить");s.style.display="none",t.accept&&Array.isArray(t.accept)&&o.setAttribute("accept",t.accept.join(",")),o.insertAdjacentElement("afterend",a),o.insertAdjacentElement("afterend",s),o.insertAdjacentElement("afterend",r),r.addEventListener("click",(()=>o.click())),o.addEventListener("change",(e=>{e.target.files.length&&(n=Array.from(e.target.files),a.innerHTML="",s.style.display="inline",n.forEach((e=>{if(!e.type.match("image"))return;const t=new FileReader;t.onload=t=>{const n=t.target.result;a.insertAdjacentHTML("afterbegin",`\n          <div class="preview-image">\n            <div class="preview-remove" data-name="${e.name}">&times;</div>\n            <img src="${n}" alt="${e.name}" />\n            <div class="preview-info">\n              <span>${e.name}</span>\n              ${function(e){if(!e)return"0 Byte";const t=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,t))+" "+["Bytes","KB","MB","GB","TB"][t]}(e.size)}\n            </div>\n          </div>\n        `)},t.readAsDataURL(e)})))})),a.addEventListener("click",(e=>{if(!e.target.dataset.name)return;const{name:t}=e.target.dataset;n=n.filter((e=>e.name!==t)),n.length||(s.style.display="none");const o=a.querySelector(`[data-name="${t}"]`).closest(".preview-image");o.classList.add("removing"),setTimeout((()=>o.remove()),300)}))}("#file",{accept:[".png",".jpg",".jpeg",".gif"],onUpload(e,t){e.forEach(((e,t)=>{storage.ref(`images/${e.name}`)}))}}),n(755)})()})();