(function(){function n(i){var r,u;(i=i||window.event,r=i.target||i.srcElement,t("b_notificationContainer",r)||t("thp_notf_div",r)||t("bnp_ttc_div",r))||(u=_w.consentcookiename,sj_cook.setNoCrumbs(u,"1",!0,"/",561600),window.Log&&Log.Log&&Log.Log("ClientCookieConsent","CI","compliance",!0,"successful consent"),sj_ue(_d,"click",n,!0),sj_ue(_d,"keypress",n,!0))}function t(n,t){var i=document.getElementById(n);return i&&i.contains(t)?!0:!1}function i(){var t=_w.consentcookiename;sj_cook.get(t)==null&&sb_st(function(){sj_be(_d,"click",n,!0);sj_be(_d,"keypress",n,!0)},0)}sj_evt.bind("onP1",function(){sj_evt.bind("bnp.notif.shown",i,!0);sj_evt.bind("bnp.embed.ready",i,!0)},!0)})()