var dnBrand={id:"0uAK7wv28CxMk2lSBitm9Y",app:"dagensnyheter.se dagens.dn.se se.dn.dnplus dagensnyheter.se-android dagensnyheter.se-app dagensnyheter.se-ios dagensnyheter-prio dn.se-edn-ios dn.se-edn-android".split(" ")},diBrand={id:"5DuzcZz0j8u0zArSNzZgHO",app:"di.se trader.di.se borssnack.di.se di.se-android di.se-edi-android di.se-agenda di.se-edi-ios di.se-iphone di.se-tpn-desktop se.di.ipad".split(" ")},cookieEnabled=navigator.cookieEnabled;
if("undefined"==typeof navigator.cookieEnabled&&!cookieEnabled||""==document.cookie)document.cookie="testcookie",cookieEnabled=-1!=document.cookie.indexOf("testcookie");cookieEnabled||console.log("Please enable the 3rd Cookies in your browser setting!");
var extractParamsFromURIFragment=function(){for(var a={},b,c=/\+/g,d=/([^&;=]+)=?([^&;]*)/g,f=window.location.hash.substring(1);b=d.exec(f);)a[b[1].replace(c," ")]=b[2].replace(c," ");return a},getBrand=function(a){return-1<dnBrand.app.indexOf(a)?dnBrand.id:-1<diBrand.app.indexOf(a)?diBrand.id:""},fragments=extractParamsFromURIFragment(),browserId=fragments.browserId,appId=fragments.appId;window.addEventListener("message",receiveMessage,!1);
var validateMessage=function(a){return cookieEnabled||null!=browserId&&""!=browserId?!0:(a.source.postMessage({status:"op.error",error:"3rd_cookie_disabled",error_description:"Browser disabled 3rd cookie, please enable it!"},a.origin),!1)},read_cookie=function(a){var b;return(b=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"\x3d([^;]*)")).exec(document.cookie))?b[1]:null},get_op_browser_state=function(){try{var a=get_op_identity_browser_state();if("NONE"==a)return"NONE";var b=read_cookie("BIP-AUTH-sso");
if(null!=b&&""!=b)for(var c=b.split("-"),b=0;b<c.length;b++){var d=c[b].split("_");if(1==c.length&&2==d.length||d[1]==a)return d[0]}else{var f=read_cookie("BIP-AUTH-bipsso");if(null!=f&&(c=f.split("_"),2==c.length))return c[0]}}catch(e){}return"NONE"},get_op_identity_browser_state=function(){try{var a=read_cookie("BIP-APP-sso");if(null!=a&&""!=a)for(var b=getBrand(appId),c=a.split("-"),a=0;a<c.length;a++){var d=c[a].split("_");if(d[1]==b&&"1"==d[2])return d[0]}else return get_op_identity_browser_state_if_old_cookie()}catch(f){}return"NONE"},
get_op_identity_browser_state_if_old_cookie=function(){try{var a=read_cookie("BIP-AUTH-bipsso");if(null!=a){var b=a.split("-"),c=b[0].split("_");if(1==b.length&&2==c.length)return c[1]}}catch(d){}return"NONE"},guid=function(){for(var a="",b=0;32>b;b++)a+=Math.floor(15*Math.random()).toString(15);return a};function receiveMessage(a){validateMessage(a)&&(cookieEnabled||null==browserId||""==browserId?postMessageToOrigin(a,get_op_browser_state(),null):processWithoutCookie(a))}
var postMessageToOrigin=function(a,b,c){var d=a.data.split(" ")[0],f=a.data.split(" ")[1],e=null;void 0!=f&&(e=f.split(".")[1]);e=CryptoJS.SHA256(d+" "+a.origin+" "+b+" "+e)+"."+e;f==e?a.source.postMessage("op.unchanged",a.origin):(e=guid(),e=CryptoJS.SHA256(d+" "+a.origin+" "+b+" "+e)+"."+e,"NONE"==b?(b=read_cookie("BIP-AUTH-bip-logout-"+getBrand(appId)),c=read_cookie("BIP-AUTH-bip-logout"),null==b&&null==c||a.source.postMessage({status:"op.logout",session_state:e,cookieEnabled:cookieEnabled},a.origin)):
null!=c?a.source.postMessage({status:"op.login.cookie.disabled",session_state:e,responseObject:c},a.origin):a.source.postMessage({status:"op.login",session_state:e,accountId:get_op_identity_browser_state(),sessionId:get_op_browser_state()},a.origin))},processWithoutCookie=function(a){var b=null,c="NONE";try{if(null!=browserId&&""!=browserId){var d=new XMLHttpRequest,f=window.location.protocol+"//"+window.location.hostname+"/browser-status?browserId\x3d"+browserId+"\x26appId\x3d"+appId;d.onreadystatechange=
function(){d.readyState==XMLHttpRequest.DONE&&(b=JSON.parse(d.responseText),"login"==b.status&&(c=b.authResponse.sessionId),postMessageToOrigin(a,c,b))};d.open("GET",f,!0);d.send(null)}}catch(e){console.log("Exception during get status from server: "+e.message)}return null};