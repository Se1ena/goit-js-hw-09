!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form"),c=document.querySelectorAll(".input"),a=c[0],l=c[1],d=c[2],f=document.querySelector("button");function s(e,n){new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("input",(function(){var n=parseInt(a.value),t=parseInt(l.value),o=parseInt(d.value);u.addEventListener("submit",(function(i){i.preventDefault();for(var u=0;u<=o-1;u+=1)console.log(n,t,o),s(u,n).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),n+=t}))})),f.addEventListener("click",(function(){}))}();
//# sourceMappingURL=03-promises.858cb452.js.map
