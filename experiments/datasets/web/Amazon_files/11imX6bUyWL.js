(function(h){var d=window.AmazonUIPageJS||window.P,n=d._namespace||d.attributeErrors,a=n?n("RetailWebsiteOverlayAUIAssets",""):d;a.guardFatal?a.guardFatal(h)(a,window):a.execute(function(){h(a,window)})})(function(h,d,n){h.when("A","RWDynamicModalFactory","ready").execute("RWDynamicModalBootstrapper",function(a,p){var k=a.state("rw-dynamic-modal"),e=a.state("rw-dynamic-modal-bootstrap"),c=a.$("#rwol-display-called"),l,g,f=function(){try{d.sessionStorage&&(sessionStorage.setItem("rwolLastPage",d.location.href),
sessionStorage.setItem("rwolLastPageSet",Date.now()))}catch(a){}},q=function(){var b=!1;return function(){b||(b=!0,a.ajax("/gp/overlay/update.html",{method:"post",params:{placementId:l,priority:g}}))}}(),r=function(b){b.pageContent&&a.$("body").append(b.pageContent);b.data&&b.data.tracker?h.when(b.data.tracker).register("RWDynamicModal",function(a){return p(b,a)}):h.register("RWDynamicModal",function(){return p(b)})},n=function(b){if(b&&/\S/.test(b)&&!a.$.isEmptyObject(b))if(l=b.placementId,g=b.priority,
a.$(".nav-input")&&a.$(".nav-input").is(":focus"))a.ajax("/gp/charity/ajax/track.html/ref\x3drwol_"+b.pageType+"_foc_"+l,{method:"post"});else if(d.$Nav&&d.$Nav.getNow("rwOverlaySuppress"))a.ajax("/gp/charity/ajax/track.html/ref\x3drwol_"+b.pageType+"_sup_"+l,{method:"post"});else if(a.$.isPlainObject(b.content))r(b);else if(b.content)try{a.$("body").append(b.content),a.defer(function(){a.trigger("rw:overlay:afterDisplay")}),a.state.parse(),(b.displayLogic||"").match("client")||q()}catch(c){d.ueLogError&&
d.ueLogError(c,{logLevel:"FATAL",attribution:"RetaiWebsiteOverlay",message:"[RWOL][Placement "+b.placementId+"] Failed appending content for placement with error: "})}};a.on("rw:overlay:displayed",function(a){q()});if(k)return f(),r(k);if(e){try{if(d.sessionStorage&&!document.referrer){var m=sessionStorage.getItem("rwolLastPageSet");m&&parseInt(m,10)>Date.now()-3E4&&(e.referrer=sessionStorage.getItem("rwolLastPage"))}}catch(u){}e.referrer=e.referrer||document.referrer;if(e.referrer&&e.referrer.match(/^https?:\/\/([^\/]+\.)?amazon\.com(\/|$)/i))return f();
if(!d.$Nav||!d.$Nav.getNow("rwOverlaySuppress")){if(0<c.length){if("0"!==c.val())return f();c.val(1)}f();if(k=(e.queryString=d.location.search)&&d.location.search.split("?").pop())for(k=k.split("\x26"),c=0;c<k.length;c++)if(f=k[c].split("\x3d"),m=d.decodeURIComponent(f[0]),!e.hasOwnProperty(m))try{var t=d.decodeURIComponent(f[1]);e[m]=t}catch(v){e[m]=f[1]}return a.ajax("/gp/overlay/display.html",{method:"post",params:e,success:n})}}});h.when("A","jQuery","a-modal-factory").register("RWDynamicModalFactory",
function(a,d,k){var e,c,l;return function(g,f){if(g&&!e){var h=d('\x3cspan style\x3d"display:none;"\x3e\x3c/span\x3e');d("body").append(h);e=k.create(h,g);c=g.data||{};if(f){if(c.countRef)a.on("a:popover:show:"+g.name,function(a){f.track(c.countRef,c)});if(c.disButtonRef)a.on("a:popover:dismiss:"+g.name,function(d){f.track(c.disButtonRef,c);l=!0;a.off("a:popover:dismiss:"+g.name)});if(c.disRef)a.on("a:popover:afterHide:"+g.name,function(a){l||f.track(c.disRef,c)});a.declarative("rw-popover-log-close",
"click",function(a){f.track(a.data.disRef,c);l=!0;e.hide()})}a.on("a:popover:afterShow:"+g.name,function(c){a.ajax("/gp/overlay/update.html")});g.autoShow&&e.show();e.attrs("data",c);return e}}})});