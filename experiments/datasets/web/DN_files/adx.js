(function(){function a(a,b){var c,d,e=k(window.top);for(c=e.length;c--;)try{if((d=e[c])&&(d=d[a])&&(d=d.shared))return d}catch(p){}return window[a].shared=b}function k(a,b){(b=b||[]).push(a);for(var c=0;c<a.frames.length;c++)k(a.frames[c],b);return b}function d(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function g(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function b(){if(e&&h.postMessage){var b=
window.__cmp;g(window,"message",c);d(window,"message",c);h.postMessage({__cmpCall:{command:"getConsentData",callId:m++}},"*")}else b=h.__cmp||window.__cmp;a("Adform",{});b&&f(function(){return b("getConsentData",null,l)})}function c(a){var b=a.data;"string"===typeof b&&(b=f(function(){return window.JSON.parse(b)}));(b=b&&b.__cmpReturn&&b.__cmpReturn.returnValue)&&null!=b.gdprApplies&&l(function(){var a=b;gdprApplies=a.gdprApplies;consentData=a.consentData;return a}())}function l(b){b=void 0===b?{}:
b;var c=a("Adform",{});c.gdpr=b.gdprApplies;c.gdpr_consent=b.consentData}function f(a){try{return a()}catch(q){}}var h=window.top,e=!f(function(){return!!h.document.getElementById}),m=1;(window.Adform=window.Adform||{}).getConsent=function(){b();var c=a("Adform",{});gdpr=c.gdpr;gdpr_consent=c.gdpr_consent;return c};b()})();
(function(a,k){function d(a){for(var b=0,c=a.length;b<c;b++)M.ontag({data:a[b]})}function g(){var a,b=arguments;for(a=0;a<b.length;a++)if("function"==typeof b[a])try{b[a]()}catch(Z){Q(function(){throw Z;},0)}else b[a]&&b[a].preload&&b[a].preload.length&&d(b[a].preload)}function b(){var b,d,e=u(a.top);for(b=e.length;b--;)try{if((d=e[b])&&(d=d._adform)&&(d=d.master))return d}catch(aa){}return M.master={requestParams:{},add:c}}function c(a){if(w)t([a]);else{var b=(b=a&&a.data.match(W))&&b[1];if(D.length&&
L[b]){D[L[b]-1][b]=a;a=!0;for(var c in D[L[b]-1])a=a&&D[L[b]-1][c];if(a){y[y.length]=[];for(var d in D[L[b]-1])y[y.length-1].push(D[L[b]-1][d])}}else b&&N[b]?y[N[b]].push(a):y[0].push(a);T(H);H=Q(l,100)}}function l(){var a,b=O;var c=y.length;for(a=[];c--;)b&&a.length&&a.length+y[c].length>b?(t(a),a=y[c].slice()):a.push.apply(a,y[c]),y[c].length=0;if(a.length)if(b)for(c=0;c<a.length;c+=b)t(a.slice(c,c+b));else t(a.slice())}function f(){var a=this,b=60,c=a.place;var d=c.ownerDocument;var f=d.body,g=
d.defaultView||d.parentWindow,h=K(function(){--b?q(a):X(h)},200),k=d.createElement("div");k.innerHTML='<div style="position:absolute;top:0"><i>';var l=k.firstChild;d=l.firstChild;a.place=d;a.sc=k;a.se=l;d.setAttribute("data-adfscript",c.getAttribute("data-adfscript"));a.sticky?(k.style.position="relative",c.parentNode.insertBefore(k,c),B.length||(g.addEventListener?g.addEventListener("scroll",r):g.attachEvent("onscroll",r)),B.push(a),B.sort(function(a,b){return q(a).top-q(b).top})):a.floating&&(S.length||
(g.addEventListener?g.addEventListener("resize",e):g.attachEvent("onresize",e)),S.push(a),f.insertBefore(k,f.firstChild))}function h(a){return function(){var b=a.sc,c=a.ov,d,e;if(b){var f=b.getElementsByTagName("iframe");for(d=f.length;d--;)(e=f[d])&&e.parentNode.removeChild(e);b.parentNode.removeChild(b)}c&&c.parentNode.removeChild(c)}}function e(){for(var a=0;a<S.length;a++)m(S[a])}function m(a){var b=a.param.floating,c=a.sc,d=a.place.ownerDocument,e=d.body,f=a.sb&&a.sb.b;a.se.style.position="relative";
c.style.zIndex=b.zIndex||11E3;var g=b.type||"fixed",k=b.position||"MC";var z=c.style;k=k.split("");var l=/[TMB]/.test(k[0])?k[0]:"T";k=/[LCR]/.test(k[1])?k[1]:"L";var m=c.offsetWidth/2,p=c.offsetHeight/2;m=-p+"px "+("R"==k?0:m)+"px "+("B"==l?0:p)+"px "+("L"==k?0:-m)+"px";p={T:{top:"C"==k?p+"px":0},M:{top:"50%",margin:m},B:{bottom:0}};m={L:{left:0},C:{left:"50%",margin:m},R:{right:0}};z.position=g;g=p[l];for(var q in g)z[q]=g[q];q=m[k];for(var r in q)z[r]=q[r];a.destroy=a.destroy||h(a);if(f&&!a._floats&&
10<f.right-f.left&&10<f.bottom-f.top){if(z=b.overlay)z.zIndex=(b.zIndex||11E3)-1,f='<div style="position:fixed;top:0;left:0;right:0;bottom:0;width:200%;height:200%;margin:0;z-index:'+z.zIndex+";opacity:"+(z.opacity||.7)+";background:"+(z.color||"#000")+'">',f=n(d,f),f.onclick=a.destroy,a.ov=f,e.insertBefore(f,e.firstChild);if(b=b.close||!z)e="left"==b.align?"left":"right",b=b.html?b.html:b.url?'<img src="'+b.url+'" style="position:absolute;top:0;'+e+":0;z-index:1;cursor:pointer;width:"+(b.width||
24)+"px;height:"+(b.height||24)+'px;">':'<span style="position:absolute;cursor:pointer;color:black;font:12px/1.2 Helvetica;text-align:center;border-radius:2px;padding:1px 5px;top:0;'+e+':0;z-index:1;background:#fff">'+(b.text||"&times;")+"</span>",b=n(d,b),b.onclick=a.destroy,c.insertBefore(b,c.firstChild);a._floats=!0}}function n(a,b){a=a.createElement("div");a.innerHTML=b;return a.firstChild}function q(a){var b=a.sb,c=+new Date;b||(a.sb=b={t:0});200<c-b.t&&(b.t=c,a.sc.style.height=a.se.offsetHeight+
"px",a.floating&&!a.sticky&&m(a));b.b=a.sc.getBoundingClientRect();return b.b}function r(){var a,b=-1,c=R;for(a=0;a<B.length;a++){var d=B[a];var e=q(d);var f=e.top;d=d.param.sticky.top||0;if(f<d){b=a;var g=d;var k=e.left;var h=e.height}else{var l=f;break}}e=B[c];a=B[b];a!=e&&(e&&(e=e.se.style,e.position="absolute",e.top=0,e.left=0),a&&(a.se.style.position="fixed"));a&&(e=a.se.style,e.top=(l?Math.min(l-h,g):g)+"px",e.left=k+"px");R=b}function t(c){var d,e,g=[],h=0,l=0;l=c.length;var m="_adform_cb_"+
+new Date+"_"+(Math.random()+"").slice(2);var z=!1;var n="",p,q=[],r=b().requestParams;l=(h=a.Adform.getConsent())&&h.gdpr;z=h&&h.gdpr_consent;r.gdpr||null==l||(r.gdpr=[l]);r.gdpr_consent||null==z||(r.gdpr_consent=[h.gdpr_consent]);for(h=0;h<c.length;h++)if(c[h].content){z=!1;for(l=0;l<C.length;l++)if(C[l].data==c[h].data)if(C[l]._result){C[l].place=c[h].place;C[l].content=c[h].content;v(C[l]);C.splice(l,1);z=!0;break}else if(!C[l].content){z=!0;C[l].place=c[h].place;C[l].content=c[h].content;break}z||
q.push(c[h])}else C.push(c[h]),q.push(c[h]);if(q.length){var t=U.createElement("script");var u=U.getElementsByTagName("script")[0];h=0;for(l=q.length;h<l;h++){z=q[h];c=z.data.split("?");var x=c.shift();c=[c.join("?")];var w=(w=c[0].match(W))&&w[1];z.mid=w;if(w=A[w]){z.param=w;for(e=0;e<F.length;e++){var y=F[e];(d=w[y])&&c.unshift(y+"="+(V[y]?d[d.length-1]:d.join(",")))}w.sticky&&(z.sticky=f);w.floating&&(z.floating=f)}g.push(J(c.join("&")))}a[m]=function(b){a[m]=k;for(var c=0,d=b.length,e,f;c<d;c++)f=
b[c].Response||b[c],q[c].isEmpty=!/\S/.test(f),(e=G[q[c].mid])&&e.onLoaded&&e.onLoaded.call(null,q[c]),q[c].content?v(q[c],b[c]):q[c]._result=b[c];q=null};for(y in r)if(r.hasOwnProperty(y)){for(h=0;h<F.length;h++)y!=F[h]||V[y]||(p=!0);n+="&"+y+"="+(p?r[y].join(","):r[y][r[y].length-1]);p=!1}x+="?rp=3"+(ba?"&pv=1":"")+"&"+g.join("&")+n+"&callback="+m;t.type="text/javascript";t.src=E+"//"+x;u.parentNode.insertBefore(t,u)}}function v(b,c){c=c||b._result;var d,e,f=c&&c.Response||c;b.sticky&&b.sticky();
b.floating&&b.floating();if((d=G[b.mid])&&d.onRendered){var g=b.renderCallback="_tag_cb_"+ +new Date+"_"+(Math.random()+"").slice(2);a[g]=p({mid:b.mid},d.onRendered,g)}b.content(f);if(e=c.UnloadParameters)e.DOMNode=b.place,I.push(function(a){a.register(e)})}function p(b,c,d){return function(e){b.ad=e;c(b);delete a[d]}}function u(a,b){try{a.frames}catch(aa){return}(b=b||[]).push(a);for(var c=0;c<a.frames.length;c++)u(a.frames[c],b);return b}function J(a){var b=[],c,d=0;a=a.replace(/\r\n/g,"\n");var e=
"";for(c=0;c<a.length;c++){var f=a.charCodeAt(c);128>f?e+=String.fromCharCode(f):(127<f&&2048>f?e+=String.fromCharCode(f>>6|192):(e+=String.fromCharCode(f>>12|224),e+=String.fromCharCode(f>>6&63|128)),e+=String.fromCharCode(f&63|128))}for(a=e;d<a.length;){var g=a.charCodeAt(d++);e=a.charCodeAt(d++);c=a.charCodeAt(d++);f=g>>2;g=(g&3)<<4|e>>4;var h=(e&15)<<2|c>>6;var k=c&63;isNaN(e)?h=k=64:isNaN(c)&&(k=64);b.push(P[f],P[g]);64!=h&&b.push(P[h]);64!=k&&b.push(P[k])}return b.join("")}var w,P="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=".split(""),
M=a._adform=a._adform||[],T=a.clearTimeout,Q=a.setTimeout,K=a.setInterval,X=a.clearInterval,Y=a.top,U=a.document,E="http:"==a.location.protocol?"http:":"https:",H,A={},F="mkw mkv dpr mcr msw cat cdims".split(" "),V={dpr:1},W=/(?:[?&]|^)mid=(\d+)/i,x=a.adformtag||(a.adformtag=[]),I=a._fscope=a._fscope||[],B=[],R=-1,O=0,N={},y=[[]],G={},S=[],C=[],D=[],L={},ca=[[]];if(!x.setTargeting){try{var ba=a.parent==a||!!Y.document.getElementsByTagName("script")}catch(z){}M.ontag=function(a){b().add(a)};(function(a,
b,c){function d(a){return function(b,c,d){var e=a;b=A[b]||(A[b]={});"spr"==e&&(w=!0);null==d&&("mkv"==e?e="mkw":"mcr"==e?d="":"msw"==e&&(e=""));(b[e]||(b[e]=[])).push(c+(null!=d?":"+d:""));return this}}var e;for(e=0;e<b.length;e++)a[b[e]]=d(c[e])})(x,["setTargeting","setPrice","setCustomData","disableSingleRequest","setSearchWord"],["mkv","dpr","mcr","spr","msw"]);(function(a,b){function c(a){return function(b,c){(G[b]||(G[b]={}))[a]=c;return this}}var d;for(d=0;d<b.length;d++)a[b[d]]=c(b[d])})(x,
["onLoaded","onRendered"]);x.sticky=function(a,b){(A[a]||(A[a]={})).sticky=b||{};return this};x.floating=function(a,b){(A[a]||(A[a]={})).floating=b||{};return this};x.setRequestLimit=function(a){O=a;return this};x.addRequestGroup=function(a){var b;var c=y.push([])-1;for(b=0;b<a.length;b++)N[a[b]]=c;return this};x.addStrictGroup=function(a){var b;D[D.length]={};var c=ca.push([])-1;if(a&&a.length)for(b=0;b<a.length;b++)D[D.length-1][a[b]]=null,L[a[b]]=c;return this};x.resetTargeting=function(a){a=A[a]||
{};for(var b=0;b<F.length;b++)delete a[F[b]];return this};x.setRequestParam=function(a,c){if(a){a=b().requestParams[a+""]=b().requestParams[a+""]||[];c+="";a:{var d=c;if(a.indexOf)d=a.indexOf(d);else{for(var e=0,f=a.length;e<f;e++)if(a[e]===d){d=e;break a}d=-1}}-1===d&&a.push(c)}return this};x.removeRequestParam=function(a){a&&delete b().requestParams[a+""];return this};x.setGlobalSearchWord=function(a,b){null!=b&&this.setRequestParam("msw",a+":"+b);return this};x.setGlobalTargeting=function(a,b){null==
b?this.setRequestParam("mkw",a):this.setRequestParam("mkv",a+":"+b);return this};x.resetGlobalTargeting=function(){for(var a=b().requestParams,c=0;c<F.length;c++)delete a[F[c]];return this};x.push=g;g.apply(null,x)}})(window);
(function(a,k){function d(){n(h);h=m(g,100)}function g(){var a=k.getElementsByTagName("script"),d=k.getElementsByTagName("noscript"),f=[],l=[],m;for(m=a.length;m--;)f.push(a[m]);for(m=d.length;m--;)f.push(d[m]);for(m=f.length;m--;)a=f[m],(d=a.getAttribute("data-adfscript"))&&!a.getAttribute("parsed-adfscript")&&(a.setAttribute("parsed-adfscript",!0),l.push({place:a,data:d,content:b}));for(m=l.length;m--;)if(f=l[m],a="http"!==f.data.slice(0,4),e.ontag&&a)e.ontag(f);else c(f,'<script src="'+t+"//"+
f.data.replace(/^https?:\/\//,"")+'">\x3c/script>');r<+new Date&&(n(h),setTimeout(g,1E3))}function b(a){c(this,a)}function c(b,c){if(/\S/.test(c)){var d=b.place||b,e=b.mid||"",f=q?q.document:k,g;if(q&&(g=a.frameElement)){var h=g.id||"adf_"+Math.round(1E6*Math.random());g.id=h}h=q&&g?"parent.document.getElementById('"+h+"').contentWindow":"parent";var m=(g=v)?"frameElement":"this",n=g?"":' onload="eval('+m+".getAttribute('data-onload'))\"",p=f.createElement("div"),r=!(!a._adform||!a._adform.tagFrame);
var t=d;q&&(d=a.frameElement);b.place&&(b.place=d);if(q&&!r){t=d.offsetWidth;var u=d.offsetHeight}else{var H=t.getAttribute("data-width");var A=t.getAttribute("data-height");t=H||1;u=A||1;r&&(d.height=0,d.width=0)}p.innerHTML='<iframe id="adf_'+Math.round(1E6*Math.random())+'" width="'+t+'" height="'+u+'" src="javascript:\'\';"'+n+' allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" style="vertical-align:middle;'+
(H?"width:"+t+"px;":"")+(A?"height:"+u+"px;":"")+'"></iframe>';p=p.firstChild;p.setAttribute("data-contents","<!doctype html><title>ad</title><style>*{vertical-align:middle;}body{margin:0;padding:0;}</style><body><script>inFIF=true;\x3c/script><script>var _nhide;window._adform=[['on.setup',function(s){_nhide=_nhide||s.options.type!='floating'||!setTimeout(function(){_nhide||(frameElement.style.display='none')},50)}]];window._adform.tagFrame = window."+h+";"+(b.renderCallback?"window.__renderCallback__ = '"+
b.renderCallback+"';":"")+'window.onerror = function (error) {new Image().src = "//track.adform.net/jslog/?src=adxErrors&msg=" + encodeURIComponent(\''+e+" - ' + error);window.onerror = null;return false;};\x3c/script>"+c+'\x3c!-- --\x3e<script>(function(d){var _w, _c=0, _r=("HTMLDocument" in window && document.write !== HTMLDocument.prototype.write);if (window.onload) {_c=1;d.close();}_w = d.write;d.write = function(a){new Image().src = "//track.adform.net/jslog/?src=asyncwrite&msg='+e+':cdw_"+_c+":"+_r;_w.call(d, a);};var c = window._adform.tagFrame[window.__renderCallback__];c && c(window.frameElement);})(document);\x3c/script>');
p.setAttribute("data-onload","("+l+")("+m+","+g+")");d.parentNode&&d.parentNode.insertBefore(p,d);if(g)try{p.onload=p.contentWindow.onload=function(){p.contentWindow.onload=p.onload=null;l(p)}}catch(F){p.src="javascript:void(document.write('<!doctype html><title></title><style>*{vertical-align:middle;}body{margin:0;padding:0;float:left;}</style><body><script>document.domain=\\'"+f.domain+"\\';<\\/script><script>eval("+m+".getAttribute(\\'data-onload\\'))<\\/script>'));"}d.style.display="none"}}function l(a,
b){function c(){b?G.open():G.open("text/html","replace");G.write(N);u.__rendered__=!0;m=a.offsetWidth;n=a.offsetHeight;r=u.document.body;r.style["float"]="left";k=r.offsetWidth;l=r.offsetHeight;p=r.scrollWidth;q=r.scrollHeight;u.adjustFrame=f;x[I]&&(O(x[I]),x[I]=null);x[I]=R(f,50);B(e,3E3)}function d(){B(function(){O(x[I]);x[I]=null},5E3)}function e(){d();G.close()}function f(){var b=0,c=0;k=r.offsetWidth;l=r.offsetHeight;p=r.scrollWidth;q=r.scrollHeight;g=k>p?k:p;h=l>q?l:q;for(var d=0;d<r.childNodes.length;d++){var e=
r.childNodes[d];e.offsetWidth&&(b=Math.max(b,e.offsetWidth),c=Math.max(c,e.offsetHeight))}if(m!=g||n!=h||t!=b||v!=c)b&&c&&b>=k&&c>=l?(y.width=b+"px",y.height=c+"px"):(y.width=g+"px",y.height=h+"px"),m=a.offsetWidth,n=a.offsetHeight;t=b;v=c}var g,h,k,l,m,n,p,q,r,t,v,u=a.contentWindow,x=u.parent,I="_inter_"+a.id,B=x.setTimeout,R=x.setInterval,O=x.clearInterval,N=a.getAttribute("data-contents"),y=a.style,G=u.document;u.__rendered__||(u.__rendered__=!0,b?c():B(c,0))}function f(){function a(){for(var a,
d=c.length;d--;)if(b.test(a=c[d].src))return a}var b=/(\/adx\.js|\/adfscript\.js).*/,c=k.getElementsByTagName("script"),d=k.currentScript,f=d?d.src:a();if(f){var g=f.replace(b,"");d=c[0];var h=k.createElement("script");h.src=g+"/recache/recache.js?"+ +new Date;d.parentNode.insertBefore(h,d);e._rc=function(a,b){"b8799afc80a6f298563ac00d51b2186b"!=a&&b(g,f)}}}var h,e=a._adform=a._adform||[],m=a.setInterval,n=a.clearInterval,q=(a.inDapMgrIf||a.inDapIF||a.inFIF)&&a.parent;try{q.document}catch(p){q=!1}var r=
3E4+ +new Date,t="http:"==a.location.protocol?"http:":"https:",v=/MSIE ([0-9]{1,}[\.0-9]{0,})/i.test(a.navigator.userAgent);if(e._frc)return e._frc("b8799afc80a6f298563ac00d51b2186b");e.readTags?e.readTags():(e.readTags=d,d(),.1>Math.random()&&setTimeout(f,1E4))})(window,document);
(function(){function a(k,d,g){function b(f,h){if(!d[f]){if(!k[f]){var e="function"==typeof require&&require;if(!h&&e)return e(f,!0);if(c)return c(f,!0);h=Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h;}h=d[f]={exports:{}};k[f][0].call(h.exports,function(e){return b(k[f][1][e]||e)},h,h.exports,a,k,d,g)}return d[f].exports}for(var c="function"==typeof require&&require,l=0;l<g.length;l++)b(g[l]);return b}return a})()({1:[function(a,k,d){function g(){b.stick(f,!l[h.property])}var b=
a("./h/weaver");d=a("./h/addEvent");var c=a("./h/vendorProperty"),l=a("./window").document,f={story:[]};k.exports=f;var h=c("hidden",l);d(l,h.prefix+"visibilitychange",g,!1);g()},{"./h/addEvent":16,"./h/vendorProperty":30,"./h/weaver":31,"./window":39}],2:[function(a,k,d){function g(e,a){void 0===e.value&&(e.value=a);return e}function b(e,a,c,f,b){return e&&a&&c&&1!=b}function c(e){if(e)return r.eol(!0)}function l(e){return function(a){return a>=e}}function f(e,a,c,f,b){if(1!=b)return e&&a&&100*c/
a||0}function h(e){if(e)return r.eol(!0)}function e(e,a){e=Math.max(e,Math.round(a));100<e&&(p("bigmaxpercent",e,1),e=100);return 100===e?r.eol(e):e}function m(e){var a=0,c=0;return function(f,b,h,u){b=u?b:h;h=a?b-a:0;a=f?a||b:0;!c&&h<e&&(h=0);!f&&h&&(c+=h,h=0);return c+h}}function n(e){var a=0,c=0;return function(f,b,h,u){b=u?b:h;h=a?b-a:0;a=f?a||b:0;h<e&&(h=0);!f&&h&&(c+=h,h=0);return c+h}}function q(e){var a=0,c=0;return function(b,f,h,u){f=u?f:h;h=a?f-a:0;a=b?a||f:0;h<e&&(h=0);!b&&h&&(c+=1,h=
0);return c+(h?1:0)}}var r=a("./h/weaver"),t=a("./h/interval"),v=a("./h/aggregate"),p=a("./h/log");k.exports=function(a){var p=a.info,d=p.PublisherVisibilityArea||50;p=1E3*(p.PublisherVisibilityTime||0);var u=a.$active,k=a.$boundsArea,T=a.$viewArea,Q=a.$mouse,K=r.timer;a.visibilityPercent={value:0};v(a,{wasActive:[u,h],percent:[u,k,T,f],inview:["percent",l(d)],visibilityPercent:["visibilityPercent","percent",e],visibilityTime:["inview",K,m(p)],impress:["visibilityTime",c],mouse:[Q,"inview","impress",
b],mouseTime:["mouse",K,n(1E3)],mouseCount:["mouse",K,q(1E3)]});t.add(r.poke);g(a.percent,0);g(a.inview,!1);g(a.impress,!1);g(a.mouse,!1);g(a.mouseTime,0);g(a.mouseCount,0);g(a.visibilityTime,0);g(a.wasActive,!1);return a}},{"./h/aggregate":17,"./h/interval":23,"./h/log":24,"./h/weaver":31}],3:[function(a,k,d){function g(a){var c=m(a);a={};if(!c.bounds)return c;var b=e(c.bounds);c=e(c.view);var g=n.view,p=n.bounds;a.client=n.client;f(b,p[0],p[1]);f(c,g[0],g[1]);h(c,g);a.bounds=b;a.view=c;return a}
function b(e){var a=e.pop();e=a.intersectionRect;var b=a.boundingClientRect;a=a.rootBounds;n.client=a?l(a):[0,0,c.outerWidth,c.outerHeight];n.bounds=l(b);n.view=l(e)}var c=a("../h/topAccessible")();d=a("../h/rect");var l=d.fromObject,f=d.moveby,h=d.overlap,e=d.copy;d=a("./intersectionObserver");a=a("./friendly");var m=d?d:a,n={};(d=(a=c.context)&&a.observeIntersection)?(b([a.initialIntersection]),d(b),k.exports=g):k.exports=null},{"../h/rect":25,"../h/topAccessible":28,"./friendly":4,"./intersectionObserver":6}],
4:[function(a,k,d){d=a("../h/rect");var g=a("../rect/client"),b=a("../rect/element"),c=g.size,l=d.moveby,f=d.overlap,h=d.copy;k.exports=function(a){for(var e,g,d,r;a;)e=a.ownerDocument,e=e.defaultView||e.parentWindow,g=c(e),a=b(a),d?(l(d,a[0],a[1]),l(r,a[0],a[1]),f(r,g)):(d=a,r=f(h(a),g)),a=e.frameElement;return{client:g,bounds:d,view:r}}},{"../h/rect":25,"../rect/client":32,"../rect/element":33}],5:[function(a,k,d){function g(a){var f=a.ownerDocument.defaultView;var h=c(a);a=h.bounds;h=h.view;var e=
f.mozInnerScreenX-f.screenX,g=f.mozInnerScreenY-f.screenY;b.moveby(a,e,g);b.moveby(h,e,g);f=[0,0,f.outerWidth,f.outerHeight];h=b.overlap(b.copy(f),h);return{client:f,bounds:a,view:h}}var b=a("../h/rect"),c=a("./top");d=a("../h/accessTop");k.exports=!d&&a("../window").mozInnerScreenX?g:null},{"../h/accessTop":15,"../h/rect":25,"../window":39,"./top":11}],6:[function(a,k,d){function g(a){var b=c(a);b||(b={element:a},m.push(b),q.observe(a));a={};b.client&&(a.client=e(b.client),a.bounds=e(b.bounds),a.view=
e(b.view));return a}function b(a){for(var b=0,g=a.length,p,d,n,m;b<g;b++)p=a[b].target,d=a[b].intersectionRect,n=a[b].boundingClientRect,m=a[b].rootBounds,p=c(p),p.client=m?f(m):[0,0,l.outerWidth,l.outerHeight],p.bounds=f(n),p.view=f(d),d=h(p.view),n=h(p.bounds),d>n&&(p.view=e(p.bounds))}function c(a){for(var e,b=0,c=m.length;b<c;b++)if(m[b].element==a){e=m[b];break}return e}var l=a("../window"),f=a("../h/rect").fromObject,h=a("../h/rect").area,e=a("../h/rect").copy;d=[];var m=[],n=!l.mozInnerScreenX&&
l.IntersectionObserver;if(n){for(a=0;100>=a;a++)d.push(a/100);var q=new n(b,{threshold:d})}k.exports=q?g:null},{"../h/rect":25,"../window":39}],7:[function(a,k,d){d=a("../h/accessTop");a=a("./mraid")||a("./intersectionObserver")||d&&a("./friendly")||a("./safeFrame")||a("./innerScreen")||a("./amp")||a("./raf");k.exports=a},{"../h/accessTop":15,"./amp":3,"./friendly":4,"./innerScreen":5,"./intersectionObserver":6,"./mraid":8,"./raf":9,"./safeFrame":10}],8:[function(a,k,d){function g(a){var b=h(a);if(!b.bounds)return b;
a=b.client;var f=b.bounds;b=b.view;if(e.getScreenSize&&e.getCurrentPosition){var g=e.getScreenSize();var d=e.getCurrentPosition();d&&g||(n[0]&&q.push("no bounds|screen"),n[0]=0);d&&(c.move(f,d.x,d.y),c.move(b,d.x,d.y),d=c.xy(d.x,d.y,d.width,d.height),c.overlap(b,d));g&&(a=c.resize(c(),g.width,g.height),c.overlap(b,a))}else e.getViewablePercentage&&(n[1]&&q.push("percentage"),n[1]=0,g=parseInt(e.getViewablePercentage(),10)/100||1,c.scale(b,g,g));m?(n[2]&&q.push("visibleRectangle"),n[2]=0,c.overlap(b,
c.xy(m.x,m.y,m.width,m.height))):e.isViewable()||(b=c());return{client:a,bounds:f,view:b}}function b(a,e){m=a?e:{x:0,y:0,width:0,height:0}}d=a("../h/log");var c=a("../h/rect"),l=a("./intersectionObserver"),f=a("./friendly"),h=l?l:f,e=a("../h/topAccessible")().mraid,m=null,n=[1,1,1];if(e){var q=d.messages.mraid=[e.getVersion&&e.getVersion()];e.addEventListener("exposureChange",b);k.exports=g}else k.exports=null},{"../h/log":24,"../h/rect":25,"../h/topAccessible":28,"./friendly":4,"./intersectionObserver":6}],
9:[function(a,k,d){function g(a){if(!w){var c=t.body;var f=t.documentElement||c;c=f.scrollWidth||r.innerWidth;f=f.scrollHeight||r.innerHeight;w={x:[],y:[]};var h=w.scanners={x:[{element:m(t,"x"),direction:"left"},{element:m(t,"x"),direction:"left"}],y:[{element:m(t,"y"),direction:"top"},{element:m(t,"y"),direction:"top"}]};e(r,l(h,c,f,b()))}f=(c=w.result)&&Date.now()-c.time>p;if(!c||f)c={rect:n()};c=c.rect;a=q(a);n.move(c,0,0);n.overlap(a.view,c);return a}function b(){return function(){var a=Math.min.apply(null,
w.x)|0,e=Math.min.apply(null,w.y)|0,b=Math.max.apply(null,w.x)|0,c=Math.max.apply(null,w.y)|0;b=b-a||0;c=c-e||0;a={rect:n.xy(a,e,b&&b+2||0,c&&c+2||0),time:Date.now()};w.x=[];w.y=[];w.result=a}}function c(a,e,b,c,f){e=(e-a)/b|0;c=c||[];a+=e;for(var h=1;h<=b;h++,a+=e)c.push(a);f&&c.push.apply(c,f);return c}function l(a,e,b,f){var h=0,g=1,d=a.x,n=a.y,p=e/2|0,m=b/2|0;d[0].points=c(0,p,v,[0,0]);d[1].points=c(p,e,v,null,[e-2,e-2]);n[0].points=c(0,m,v,[0,0]);n[1].points=c(m,b,v,null,[b-2,b-2]);var l=d[0].points.length-
1;return function(){var e;for(e in a){var b=a[e];for(var c=0;c<b.length;c++){var d=b[c];var n=d.points[h];d.element.style[d.direction]=n+"px"}}h===l?g=0:0===h&&(f(),g=1);g?h++:h--}}function f(a,e,b){var c=this.frameElement;a={scanner:c,direction:a};a.value=c[e];b(a)}function h(){return function(a){var e=Date.now(),b=a.direction,c="x"==a.direction?"y":"x";w[b].push(a.value);w["last"+b+f]=e;if(!w["last"+c+f]||100<e-w["last"+c+f]){e=w.scanners[c];for(var f=0;f<e.length;f++)e[f].element.style[u[c]]=a.value+
"px"}}}function e(a,e,b){a.requestAnimationFrame(function K(){e.apply(a,b);a.requestAnimationFrame(K)})}function m(a,b){var c=a.createElement("iframe"),g=c.style;g.top=0;g.left=0;g.position="absolute";g.width="1px";g.height="1px";g.border="1px solid transparent";g.background="transparent";c.onload=function(){e(this.contentWindow,f,[b,J[b],h()])};a.body.appendChild(c);return c}var n=a("../h/rect"),q=a("./friendly"),r=a("../h/topAccessible")();a=a("../h/env");var t=r.document;k.exports=r.requestAnimationFrame&&
a.isSafari?g:null;var v=6,p=800,u={x:"top",y:"left"},J={x:"offsetLeft",y:"offsetTop"},w},{"../h/env":18,"../h/rect":25,"../h/topAccessible":28,"./friendly":4}],10:[function(a,k,d){function g(a){var f=c(a);a=f.bounds;f=f.view;var e=l.geom();if(e.par){var g=b.fromSfObject(e.par);var d=b.fromSfObject(e.self);e=d[0]-g[0];d=d[1]-g[1];b.moveby(a,e,d);b.moveby(f,e,d);g=b.moveby(g,-g[0],-g[1]);f=b.overlap(b.copy(g),f)}else g=b.fromSfObject(e.win),e=e.self,e=b(0,0,e.w*e.xiv,e.h*e.yiv),b.moveby(a,-a[0],-a[1]),
b.moveby(f,-f[0],-f[1]),g=b.moveby(g,-g[0],-g[1]),f=b.overlap(e,f);return{client:g,bounds:a,view:f}}var b=a("../h/rect"),c=a("./top");d=a("../h/accessTop");a=a("../h/topAccessible")();var l;k.exports=!d&&(l=a.$sf)&&(l=l.ext)?g:null},{"../h/accessTop":15,"../h/rect":25,"../h/topAccessible":28,"./top":11}],11:[function(a,k,d){var g=a("../h/rect"),b=a("../rect/client"),c=a("../rect/element");k.exports=function(a){var f=a.ownerDocument;f=f.defaultView||f.parentWindow;a=c(a);f=b.size(f);var d=g.overlap(g.copy(f),
a);return{client:f,bounds:a,view:d}}},{"../h/rect":25,"../rect/client":32,"../rect/element":33}],12:[function(a,k,d){function g(a,e){return a.getElementById(e)}function b(a,e,b){var c=(f.inDapMgrIf||f.inDapIF||f.inFIF)&&f.frameElement;return n(c&&10>c.offsetHeight?c:a,e.width,e.height,b)}function c(a,c,f){m(h(b,c,a,20),1E4,e(h(l,a,c,f||[100,500,1E3,2E3,5E3]),h(q,"fluoroscope","Placement not found "+a.width+"x"+a.height,0)))}function l(a,e,b,f){var g=b.shift();a.callback(null,f);g&&setTimeout(h(c,
a,e,b),g)}var f=a("./window");d=a("./h/func");var h=d.compose,e=d.resolve,m=a("./h/until"),n=a("./h/findPlacement"),q=a("./h/log");k.exports=function(a,b){var d=a.id,n=a.DOMNode;a={width:a.width,height:a.height,callback:b};n?c(a,n):m(h(g,f.document,d),e(h(c,a),h(q,"fluoroscope","Container not found",0)))}},{"./h/findPlacement":19,"./h/func":21,"./h/log":24,"./h/until":29,"./window":39}],13:[function(a,k,d){function g(){r.apply(this,arguments);b(arguments)}function b(a){for(var e=0;e<a.length;e++)if("function"===
typeof a[e])a[e](d)}k=a("./window");var c=k.JSON&&!!a("./driver/loader"),l=k._fscope;if(!(!c||l&&l._active)){var f=a("./registry"),h=a("./track"),e=a("./calc"),m=a("./findPlace"),n=a("./h/weaver");c=a("./h/interval");var q=a("./sender"),r=Array.prototype.push;d.register=function(a){var b=f.get(a.AdSlotId,"ppas");b.info=a;h(b,[]);e(b);m({id:a.AdSlotId,DOMNode:a.DOMNode,width:a.Width,height:a.Height},function(a,e){q.register(b);n.stick(b.$elements,[e])})};d.get=f.get;d.observe=n.observe;d.interval=
c;l?(b(l),l.push=g):(l=[],l.push=g,k._fscope=l);l._active=!0}},{"./calc":2,"./driver/loader":7,"./findPlace":12,"./h/interval":23,"./h/weaver":31,"./registry":35,"./sender":36,"./track":37,"./window":39}],14:[function(a,k,d){k.exports=function(a){for(var b,c=100,g=a.top,f=[!0];--c&&a&&a!=g&&a!=a.parent;){try{b=!!(a=a.parent).Image}catch(h){b=!1}f.push(b)}return f}},{}],15:[function(a,k,d){a=a("../window");d=!1;try{a.top.document.getElementById("_"),a.parent.document.getElementById("_"),d=!0}catch(g){}k.exports=
d},{"../window":39}],16:[function(a,k,d){k.exports=function(a,b,c){function g(){a.removeEventListener?a.removeEventListener(b,f,!1):a.detachEvent&&a.detachEvent("on"+b,f)}function f(){if(Date)return c.apply(this,arguments);g()}a.addEventListener?a.addEventListener(b,f,!1):a.attachEvent&&a.attachEvent("on"+b,f);f.remove=g;return f}},{}],17:[function(a,k,d){var g=a("./weaver");k.exports=function(a,c,d){var b,h=[],e=[];for(b in c)if(c.hasOwnProperty(b)){var m=a[b];m||(m={},a[b]=m);m.story||(h.push(m),
m.story=void 0===m.value?[]:[{value:m.value,timestamp:-1}]);e.push([m,c[b]])}for(c=0;c<e.length;c++){m=e[c][0];var n=e[c][1].slice();var l=n.pop();for(b=0;b<n.length;b++)"string"===typeof n[b]&&(n[b]=a[n[b]]);g.spin(m,n,l)}for(c=0;c<h.length;c++)delete h[c].story;g.poke(d);return a}},{"./weaver":31}],18:[function(a,k,d){d=a("../window").navigator;a=d.userAgent;d=0<=(""+d.vendor).toLowerCase().indexOf("apple computer");a=!/Chrome|CriOS|Skyfire/i.test(a)&&/Safari+\/[\.\d]+$/i.test(a)&&d;k.exports={isApple:d,
isSafari:a}},{"../window":39}],19:[function(a,k,d){function g(a,g,f,d){var e=a.parentNode;for(a=b(a[f],d)||b(a[d],d);!a&&e!==g;)a=b(e[d],d),e=e.parentNode;return a}function b(a,b){for(;a&&1!==a.nodeType;)a=a[b];return a}k.exports=function(a,b,f,d){var e;var c=a.parentNode;var h=e=a;a=[];var l=b,k=f,t=null;for(d=d||0;e||h;)e&&(e=g(e,c,"lastChild","previousSibling"))&&a.push(e),h&&(h=g(h,c,"firstChild","nextSibling"))&&a.push(h);for(c=0;c<a.length;c++){e=a[c];h=Math.abs(b-e.offsetWidth);var v=Math.abs(f-
e.offsetHeight);h+v<l+k&&h<=d&&v<=d&&(l=h,k=v,t=e)}return t}},{}],20:[function(a,k,d){var g=a("./indexOf");d.call=function(a,c){var b;if(a)for(a=a.slice(),b=0;b<a.length;b++)c?a[b].apply(null,c):a[b].call(null)};d.add=function(a,c){a?0>g(a,c)&&a.push(c):a=[c];return a};d.remove=function(a,c){a&&(!a.length||1===a.length&&a[0]===c?(a.length=0,a=null):(c=g(a,c),0<=c&&a.splice(c,1)));return a}},{"./indexOf":22}],21:[function(a,k,d){var g=Array.prototype.slice;d.compose=function(a){var b=g.call(arguments,
1);return function(){var c=arguments;return a.apply(this,c.length?b.concat(g.call(c)):b)}};d.resolve=function(a,c){return function(b,f){null!=b?c&&c(b):a(f)}}},{}],22:[function(a,k,d){k.exports=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=a.length;c--&&a[c]!==b;);return c}},{}],23:[function(a,k,d){function g(){l.length?c.call(l):f&&(b.clearInterval(f),f=null)}d.add=function(a){c.add(l,a);f||(f=b.setInterval(g,100))};d.remove=function(a){c.remove(l,a)};var b=a("../window"),c=a("./flist"),
l=[],f},{"../window":39,"./flist":20}],24:[function(a,k,d){function g(a,b,f){Math.random()<(f||.03)&&((new Image).src=(window.Adform&&window.Adform.host||"//track.adform.net")+"/jslog/?src="+encodeURIComponent(a)+"&msg="+encodeURIComponent(b))}k.exports=g;var b=g.messages={};g.sendAll=function(){for(var a in b)b[a].length&&g(a,b[a].join(" : "),1),b[a]=[]}},{}],25:[function(a,k,d){function g(a,b,c,f){return[a||0,b||0,c||0,f||0]}function b(a){return a[0]>=a[2]||a[1]>=a[3]}function c(a,b,c){a[0]+=b;
a[1]+=c;a[2]+=b;a[3]+=c;return a}function l(a){return a[2]-a[0]}function f(a){return a[3]-a[1]}function h(a,b){a[0]=Math.max(a[0],b[0]);a[1]=Math.max(a[1],b[1]);a[2]=Math.min(a[2],b[2]);a[3]=Math.min(a[3],b[3]);return a}d=k.exports=g;d.xy=function(a,b,c,f){return g(a,b,a+c,b+f)};d.fromObject=function(a){return g(a.left,a.top,a.right,a.bottom)};d.fromSfObject=function(a){return g(+a.l,+a.t,+a.r,+a.b)};d.object=function(a){return{top:a[1],right:a[2],bottom:a[3],left:a[0],width:l(a),height:f(a)}};d.copy=
function(a){return a.slice()};d.normal=function(a){return a[0]<=a[2]&&a[1]<=a[3]};d.empty=b;d.move=function(a,b,f){return c(a,b-a[0],f-a[1])};d.moveby=c;d.resize=function(a,b,c){a[2]=a[0]+b;a[3]=a[1]+c;return a};d.scale=function(a,b,c){a[2]=a[0]+(a[2]-a[0])*b;a[3]=a[1]+(a[3]-a[1])*c;return a};d.width=l;d.height=f;d.area=function(a){return(a[2]-a[0])*(a[3]-a[1])};d.intersect=h;d.overlap=function(a,c){!b(a)&&b(h(a,c))&&(a[0]=a[1]=a[2]=a[3]=0);return a}},{}],26:[function(a,k,d){k.exports=function(a,
b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}},{}],27:[function(a,k,d){k.exports=function(a){var b=Array.prototype,c=b.toJSON;c?(delete b.toJSON,a=JSON.stringify(a),b.toJSON=c):a=JSON.stringify(a);return a}},{}],28:[function(a,k,d){var g=a("./accessFrames"),b=a("../window");k.exports=function(a){for(var c=a=a||b,f=g(a),d=1;d<f.length;d++)a=a.parent,f[d]&&(c=a);return c}},{"../window":39,"./accessFrames":14}],29:[function(a,k,d){k.exports=function(a,
b,c,d){function f(){var h,m;try{for(m=a.length;m--;)null==e[m]&&(e[m]=a[m](),null==e[m]&&(h=!0))}catch(t){var l=t}m=k?e[0]:e;l?d(l):h?new Date-g>c?d(Error("Until timeout"),m):setTimeout(f,b):d(null,m)}var g=new Date,e=[],k="function"==typeof a;a=k?[a]:a;d=d||c||b;d==c?(c=b,b=50):d==b&&(c=1E3,b=50);f()}},{}],30:[function(a,k,d){function g(a,d){var c;for(c=b.length;c--;){var g=a;b[c].length&&(g=b[c]+g.charAt(0).toUpperCase()+g.slice(1));if(g in d){var e={property:g,prefix:b[c]};break}}return e||{property:a,
prefix:""}}var b=["","moz","ms","webkit"];k.exports=g;g.prefixes=b.slice(1)},{}],31:[function(a,k,d){function g(a,c){var e,d,f=[];for(e=0;e<a.length;e++){var g=a[e];for(d=0;d<g.length;d++)f.push({event:g[d],index:e})}f.sort(b);for(e=0;e<f.length;e++)a=f[e],d=a.event,c[a.index](d.value,d.timestamp||-1)}function b(a,b){a=a.event;b=b.event;return(a.timestamp||-1)-(b.timestamp||-1)||(a.gid||0)-(b.gid||0)}function c(a,b,c){r.push([a,b,c]);if(!t){for(t=!0;r.length;){var d=r.shift();b=d[0];c=d[1];d=d[2];
b.value!==c&&void 0!==c&&(d=d||(Date.now?Date.now():+new Date),b.value=c,b.timestamp=d,b.gid=e=(e+1)%9007199254740991,b.story&&b.story.push({value:c,timestamp:d,gid:e}),q(b.observe,[c,d,b]))}t=!1}return a}function l(a,b){a.observe=n(a.observe,b);a.observe||delete a.observe;return a}function f(a,b){return b?{value:a,timestamp:b,gid:e=(e+1)%9007199254740991}:a&&a.timestamp}var h={},e=0;a=a("./flist");var m=a.add,n=a.remove,q=a.call,r=[],t=!1,v=c({},0,-1);d.timer=v;d.stick=c;d.observe=function(a,b){a.observe=
m(a.observe,b);void 0!==a.value&&b(a.value,a.timestamp,a);return a};d.forget=l;d.free=function(a){for(var b=0,c;b<a.length;b++)c=a[b],q(c.free),delete c.observe,delete c.free};d.spin=function(a,b,e){function d(b){return function(d,g){J&&void 0===u[b]&&J--;r<g&&(r=g);u[b]=d;u[q]=r;u[q+1]=b;J||((d=e.apply(null,u))&&d.EOL===h&&(d.timestamp||(d.timestamp=r),k()),f(d)?c(a,d.value,d.timestamp):void 0!==d&&c(a,d,r))}}function k(){for(var a=q,c;a--;)c=b[a],c.free=n(c.free,k),l(c,t[a])}var p,q=b.length,u=
Array(q+3),J=q,r=0,t=Array(q),v=Array(q);u[q+2]=b.concat([a]);a.free=m(a.free,k);for(p=0;p<q;p++){var E=b[p];t[p]=d(p);E.free=m(E.free,k);var H=E.story;v[p]=H?H.slice():void 0!==E.value?[E]:[];E.observe=m(E.observe,t[p])}g(v,t);return a};d.stamped=f;d.eol=function(a,b){return{value:a,timestamp:b||-1,EOL:h}};d.poke=function(a){v.value=a||(Date.now?Date.now():+new Date);q(v.observe,[v.value,v.timestamp,v])}},{"./flist":20}],32:[function(a,k,d){function g(a,c){return b(a,l(a,c))}function b(a,b){var c=
a.document,d=c.documentElement;c=c.body;b=b||f();a.innerWidth?h(b,a.innerWidth,a.innerHeight):h(b,(d||c).clientWidth,(d||c).clientHeight);return b}function c(a,b){var c=a.document;a=c.documentElement;c=c.body;return e(b||f(),a&&a.scrollLeft||c&&c.scrollLeft||0,a&&a.scrollTop||c&&c.scrollTop||0)}function l(a,b){return"pageXOffset"in a?e(b||f(),a.pageXOffset,a.pageYOffset):c(a,b)}var f=a("../h/rect"),h=f.resize,e=f.move;k.exports=g;g.size=b;g.scroll=c;g.offset=l},{"../h/rect":25}],33:[function(a,k,
d){function g(a){return c.fromObject(a.getBoundingClientRect())}function b(a){var b=a.ownerDocument,d=b.defaultView||b.parentWindow;b=l.offset(d);d=l.scroll(d);return c.moveby(g(a),d[0]-b[0],d[1]-b[1])}var c=a("../h/rect"),l=a("./client");k.exports=b;b.bounds=g},{"../h/rect":25,"./client":32}],34:[function(a,k,d){k.exports=function(a){var d,e,f,k=0;for(d=0;d<a.length;d++)if(!c(a[d])){var q=[];k+=g(a[d]);for(e=0;e<d;e++){var r=b(l(a[d]),a[e]);if(!c(r)){k-=g(r);for(f=0;f<q.length;f++)k+=g(b(l(r),q[f]));
q.push(r)}}}return k};a=a("../h/rect");var g=a.area,b=a.overlap,c=a.empty,l=a.copy},{"../h/rect":25}],35:[function(a,k,d){function g(a,d){var e;for(e=0;e<d.length;e++){var f=d[e];"string"===typeof f?(b.call(a,f)||(a===c&&l.push(f),a[f]={$key:f}),a=a[f]):a=f}return a}var b=Object.prototype.hasOwnProperty,c={},l=[];d.get=function(){var a;if(arguments.length)var b=g(c,arguments);else for(b=[],a=0;a<l.length;a++)b.push(c[l[a]]);return b};d.resolve=g},{}],36:[function(a,k,d){function g(){t.length&&(b(t),
r.sendAll())}function b(a){var b,d=a.length,e=a[d-1].info.UnloadHandlerUrl,f=q({c:a[d-1].info.CookieId,t:a[d-1].info.TestId,gdpr:a[d-1].info.Gdpr,gdpr_consent:a[d-1].info.GdprConsent,u:[]}).slice(0,-2),g=1464-f.length,k=0,n=[];for(b=0;b<d;b++){var p=a[b];p=q({v:p.info.SerializedAdxVars,p:{mc:p.mouseCount.value,mt:p.mouseTime.value,vp:p.visibilityPercent.value,vt:Math.round(p.visibilityTime.value),r:h?0:1,a:p.wasActive.value}});k+=p.length+1;k>g&&(n.length&&(k=f+n.join(",")+"]}",c(e+l(k)),n=[]),k=
p.length+1);n.push(p)}a=f+n.join(",")+"]}";c(e+l(a))}function c(a){var b=f.top;(new f.Image).src=a;f!=b&&h&&((new b.Image).src=a)}function l(a){for(var b,c,d,e=0,f=a.length,g="";e<f;)b=a.charCodeAt(e++),c=a.charCodeAt(e++),g+=v[b>>2]+v[(b&3)<<4|c>>4],e<=f&&(d=a.charCodeAt(e++),g+=v[(c&15)<<2|d>>6]),e<=f&&(g+=v[d&63]);return g}var f=a("./window"),h=a("./h/accessTop"),e=a("./h/weaver");d=a("./h/addEvent");var m=a("./activeTab"),n=f.setTimeout,q=a("./h/stringify"),r=a("./h/log");a={register:function(a){a._send||
(a._send=!0,t.push(a),e.observe(a.impress,function M(c,d,f){c&&(e.forget(f,M),b([a]))}),n(function(){b([a])},54E4),/ipad|iphone|android|iemobile/i.test(f.navigator.userAgent)&&n(function(){b([a])},5E3))},send:g};var t=[],v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");d(f,"beforeunload",function(){});d(f,"unload",g);e.observe(m,g);k.exports=a},{"./activeTab":1,"./h/accessTop":15,"./h/addEvent":16,"./h/log":24,"./h/stringify":27,"./h/weaver":31,"./window":39}],37:[function(a,
k,d){function g(a){e.add(function(){var b,c=[],d=[],e=a.$elements.value;for(b=0;b<e.length;b++){var f=v(e[b]);var g=f.client;c.push(f.bounds);d.push(f.view)}g&&h.stick(a.$geom,{client:g,bounds:c,view:d})})}function b(a){function b(b){var g;if(g=e)a:{g=e;var k,n=b.length!=g.length;if(!n)for(k=0;k<b.length;k++)if(0>m(g,b[k])){g=!0;break a}g=n}if(g){for(g=f=0;g<e.length;g++)t(e[g],"mouseenter",c),t(e[g],"mouseleave",d);h.stick(a.$mouse,!1)}for(g=0;g<b.length;g++)r(b[g],"mouseenter",c),r(b[g],"mouseleave",
d);e=b}function c(){f||h.stick(a.$mouse,!0);f++}function d(){f||(f=1);--f||h.stick(a.$mouse,!1)}var e,f=0;h.observe(a.$elements,b);b(a.$elements.value)}function c(a){return n.area(a.client)}function l(a){return q(a.bounds)}function f(a){return q(a.view)}var h=a("./h/weaver"),e=a("./h/interval"),m=a("./h/indexOf"),n=a("./h/rect"),q=a("./rect/union"),r=a("./h/addEvent"),t=a("./h/removeEvent"),v=a("./driver/loader");d=a("./activeTab");a=a("./userInteraction");var p=h.spin({story:[]},[d,a],function(a,
b){return a&&b});k.exports=function(a,d){a.$elements={};a.$geom={};a.$active=p;a.$clientArea={story:[]};a.$boundsArea={story:[]};a.$viewArea={story:[]};a.$mouse={story:[]};h.stick(a.$elements,d);h.spin(a.$clientArea,[a.$geom],c);h.spin(a.$boundsArea,[a.$geom],l);h.spin(a.$viewArea,[a.$geom],f);g(a);b(a);return a}},{"./activeTab":1,"./driver/loader":7,"./h/addEvent":16,"./h/indexOf":22,"./h/interval":23,"./h/rect":25,"./h/removeEvent":26,"./h/weaver":31,"./rect/union":34,"./userInteraction":38}],38:[function(a,
k,d){function g(a){a=a||m.event;var d="mousemove"!=a.type;if(!d){var e=a.screenX;a=a.screenY;d=p!==e||u!==a;p=e;u=a}d&&(v=+new Date,l.stick(t,!0),q&&(c||b()))}function b(){var a=+new Date-v;3E4<a?(l.stick(t,!1),c=!1):c=r(b,3E4-a)}var c,l=a("./h/weaver"),f=a("./activeTab"),h=a("./h/addEvent"),e=a("./window"),m,n=e.document,q=!("ontouchstart"in n||"ontouchstart"in e)&&a("./h/accessTop"),r=e.setTimeout,t={story:[]},v=+new Date,p=-1,u=-1;k.exports=t;(function(){q?(m=e.top,n=m.document,h(m,"scroll",g),
h(n,"mousemove",g),h(n,"mousedown",g),h(n,"mouseup",g),h(n,"keydown",g),l.observe(f,function(){g({})}),b()):l.observe(f,function(){g({})})})()},{"./activeTab":1,"./h/accessTop":15,"./h/addEvent":16,"./h/weaver":31,"./window":39}],39:[function(a,k,d){k.exports=window},{}]},{},[13]);