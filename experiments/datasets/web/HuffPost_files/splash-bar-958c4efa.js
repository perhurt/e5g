!function(){function e(t,n,o){function r(a,i){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!i&&u)return u(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return r(t[a][1][e]||e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}return e}()({"/opt/elections/releases/10b2624093dcb9ca0e162b99797a02e893e130de/assets/javascripts/common/_refresh.js":[function(e,t,n){function o(e){return null!=a?e?a.t("refresh.error countdown"):a.t("refresh.countdown"):(e?"Failed last refresh. ":"")+"Refreshing in"}function r(e){return Math.ceil(e/1e3)}function s(e){switch(Object.prototype.toString.apply(e)){case"[object Array]":case"[object NodeList]":return e;default:return[e]}}var a,i=3e4;t.exports=function(e,t,n,u){function c(){O=!1;for(var e=0;e<w.length;e++)w[e].classList.add("loading");x=new XMLHttpRequest,x.open("GET",t),x.timeout=1e4,x.responseType="text",x.onreadystatechange=function(){if(x.readyState===XMLHttpRequest.DONE){if(200===x.status||304===x.status){var e=JSON.parse(x.responseText);n(e)}else O=!0;x=null;for(var t=0;t<w.length;t++)w[t].classList.remove("loading");d()}},x.send()}function l(){var e=(new Date).valueOf();if(e>=j)j=null,L=null,c();else{for(var t=o(O),n=r(j-e),s=0;s<g.length;s++)g[s].textContent=t;for(var s=0;s<b.length;s++)b[s].textContent=n;L=setTimeout(l,(j-e+1e3)%1e3)}}function f(){for(var e=0;e<v.length;e++)v[e].classList.remove("animating"),v[e].offsetWidth,v[e].classList.add("animating")}function d(){if(null===L){f(),j=(new Date).valueOf()+i;for(var e=o(O),t=r(i),n=0;n<g.length;n++)g[n].textContent=e;for(var n=0;n<b.length;n++)b[n].textContent=t;L=setTimeout(l,1e3)}}function p(e){null===x&&(j=null,clearTimeout(L),L=null,c())}var h,w=s(e),m=u||{};a=m.hasOwnProperty("i18n")?m.i18n:null,window.election2018timers=window.election2018timers||[],window.election2018messages=window.election2018messages||[],window.election2018countdowns=window.election2018countdowns||[];var v=[],g=[],b=[];for(h=0;h<w.length;h++){var y=w[h].querySelector(".timer");y&&!window.election2018timers.some(function(e){return y.isSameNode(e)})&&(v.push(y),window.election2018timers.push(y));var q=w[h].querySelector(".message");q&&!window.election2018messages.some(function(e){return q.isSameNode(e)})&&(g.push(q),window.election2018messages.push(q));var S=w[h].querySelector(".countdown");S&&!window.election2018countdowns.some(function(e){return S.isSameNode(e)})&&(b.push(S),window.election2018countdowns.push(S))}if(0!==v.length||0!==g.length||0!==b.length){var x=null,j=null,L=null,O=!1;for(h=0;h<w.length;h++)w[h].addEventListener("click",p);c()}}},{}],"/opt/elections/releases/10b2624093dcb9ca0e162b99797a02e893e130de/assets/javascripts/splash-bar.js":[function(e,t,n){function o(e){var t=document.querySelector(".power-bar."+e);return{dem:t.querySelector(".dem"),other:t.querySelector(".other"),tossup:t.querySelector(".tossup"),gop:t.querySelector(".gop")}}function r(e,t){["dem","other","tossup","gop"].forEach(function(n){e[n].style.flexGrow=t[n]})}var s=e("./common/_refresh");!function(){function e(e){r(i,e.senate),r(u,e.house)}var t=document.querySelector(".balance-of-power");if(t){var n=t.querySelector(".balance-refresh"),a=t.dataset.url,i=o("senate"),u=o("house");i&&u&&s(n,a,e)}}()},{"./common/_refresh":"/opt/elections/releases/10b2624093dcb9ca0e162b99797a02e893e130de/assets/javascripts/common/_refresh.js"}]},{},["/opt/elections/releases/10b2624093dcb9ca0e162b99797a02e893e130de/assets/javascripts/splash-bar.js"]);