define("@ta/platform.runtime",["@ta/page-manifest","@ta/common.global"],function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/components/dist/",n(n.s="./packages/platform/runtime/runtime.jsx")}({"./node_modules/react-dom/index.js":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./node_modules/react-dom/index.js")},"./node_modules/react-redux/es/index.js":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")},"./node_modules/react/index.js":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./node_modules/react/index.js")},"./packages/common/api/api.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/api/api.jsx")},"./packages/common/error-handling/ErrorBoundary.jsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./packages/common/state/state.jsx"),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=void 0;var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.logError=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ErrorBoundary";if(c&&n.props.shouldRecord){var r=Object(o.getStore)().getState().auth,a={isLoggedInMember:(r=void 0===r?{}:r).isMember},i=n.props.jiraOwner;i&&(a.jiraOwner=i),c.captureException(e,{tags:a,logger:t})}},n.state={caughtError:!1,error:null,info:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),a(t,[{key:"componentDidCatch",value:function(e,t){try{this.setState({caughtError:!0,error:e,info:t}),this.logError(e)}catch(e){this.logError(e,"ErrorBoundaryCatchFail")}}},{key:"render",value:function(){try{var e=this.props.errorRenderer,t=this.state,n=t.caughtError,r=t.error,o=t.info;return n?e?e(r,o):null:this.props.children}catch(e){return this.logError(e,"ErrorBoundaryRenderFail"),null}}}]),t}();i.defaultProps={errorRenderer:void 0,shouldRecord:!0,jiraOwner:void 0},t.a=i},"./packages/common/features/features.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")},"./packages/common/global/global.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/global/global.jsx")},"./packages/common/i18n/i18n.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")},"./packages/common/imports/imports.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/imports/imports.jsx")},"./packages/common/logging/logging.jsx":function(e,t,n){"use strict";var r=1;t.a={error:function(){var e;r<1||(e=console).error.apply(e,arguments)},warn:function(){var e;r<2||(e=console).warn.apply(e,arguments)},dir:function(){var e;r<3||(e=console).dir.apply(e,arguments)},info:function(){var e;r<3||(e=console).info.apply(e,arguments)},log:function(){var e;r<3||(e=console).log.apply(e,arguments)},debug:function(){var e;r<4||(e=console).info.apply(e,arguments)},setLevel:function(e){console.info("Set logging level to ",r),r=e}}},"./packages/common/logging/performance.jsx":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r=function(e){window.performance&&performance.mark&&performance.mark("components-"+e+"-start")},o=function(e){if(window.performance&&performance.mark&&performance.measure){performance.mark("components-"+e+"-end");var t="👷 "+e;performance.measure(t,"components-"+e+"-start","components-"+e+"-end")}}},"./packages/common/routing/routing.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")},"./packages/common/state/state.jsx":function(e,t,n){e.exports=n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")},"./packages/platform/runtime/runtime.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./packages/common/i18n/i18n.jsx"),o=n("./packages/common/features/features.jsx"),a=n("./packages/common/imports/imports.jsx"),c=n("./packages/common/logging/performance.jsx"),i=n("./packages/common/logging/logging.jsx"),u=n("./packages/common/state/state.jsx"),l=n("./node_modules/react/index.js"),s=n.n(l),f=n("./node_modules/react-dom/index.js"),p=n("./node_modules/react-redux/es/index.js"),m=n("@ta/page-manifest"),d=n.n(m),g=n("./packages/common/global/global.jsx"),b=n("./packages/common/api/api.jsx"),y=n("./packages/common/routing/routing.jsx"),h=n("./packages/common/error-handling/ErrorBoundary.jsx"),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(e){var t=e.rootElement,n=e.rootContext,r=[];return function e(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];try{if(Array.isArray(t))return void t.forEach(function(t){return e(t,n,r,o)});if(!t)return;if(function(e){return!!e.type}(t))if("function"==typeof t.type){var a=t.type,c=j({},a.defaultProps,function(e){return e.props||e.attributes}(t)),i=n,u=void 0;if(function(e){return e.prototype&&(e.prototype.render||e.prototype.isReactComponent)}(a)){var l=new a(c,n);if(l.props=l.props||c,l.context=l.context||n,l.state=l.state||null,l.setState=function(e){var t=e;"function"==typeof e&&(t=e(l.state,l.props,l.context)),l.state=j({},l.state,t)},l.componentWillMount&&l.componentWillMount(),function(e){return!!e.getChildContext}(l)&&(i=j({},n,l.getChildContext())),!1===r(t,l,n,i))return;u=l.render()}else{if(!1===r(t,null,n))return;u=a(c,n)}u&&(Array.isArray(u)?u.forEach(function(t){return e(t,i,r,o)}):e(u,i,r,o))}else if(t.type._context||t.type.Consumer){if(!1===r(t,null,n))return;var f=void 0;t.type._context?(t.type._context._currentValue=t.props.value,f=t.props.children):f=t.props.children(t.type._currentValue),f&&(Array.isArray(f)?f.forEach(function(t){return e(t,n,r)}):e(f,n,r))}else{if(!1===r(t,null,n))return;t.props&&t.props.children&&s.a.Children.forEach(t.props.children,function(t){t&&e(t,n,r,o)})}else"string"!=typeof t&&"number"!=typeof t||r(t,null,n)}catch(e){console.log("Caught error while walking tree: ",e)}}(t,void 0===n?{}:n,function(e,t,n,o){if(t&&function(e){return"function"==typeof e.fetchData}(t)&&t.context&&t.getQueryResult){var a=t.fetchData();if(function(e){return"function"==typeof e.then}(a))return r.push({promise:a,context:o||n,instance:t}),!1}}),r};function x(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n.d(t,"createRoot",function(){return R}),n.d(t,"destroyRoot",function(){return S}),n.d(t,"hydrateRoot",function(){return B}),n.d(t,"importBundle",function(){return I}),n.d(t,"getDataForComponent",function(){return L}),n.d(t,"pageManifestComponents",function(){return q}),Object(c.b)("Components Initialization"),Object(c.b)("Components Bundle Load");var O={};d.a.bundles.forEach(function(e){O[e]=new Promise(function(t){require([e],t)})}),Promise.all(Object.values(O)).then(function(){Object(c.a)("Components Bundle Load")});var E={};d.a.assets.forEach(function(e){E[e]=Promise.resolve(!0)}),Object(r.loadMessages)(d.a.messages),Object(o.loadFeatures)(d.a.features);var k=Object(u.initializeStore)(d.a.redux),w=k.getState().auth.csrfToken,_=new g.DummyCache;d.a.apolloCache&&_.restore(d.a.apolloCache);var C=Object(g.buildClient)(_,w);window.__APOLLO_CLIENT__=C;var A=function(e){return l.createElement(h.a,null,l.createElement(g.Root,{store:k,apolloClient:C},e))},P=l.createElement(h.a,null,l.createElement(p.Provider,{store:k},l.createElement(y.Router,null,l.createElement(y.History,null)))),M="data-component-init";Object(c.b)("Loadables");t.default=new Promise(function(e){require(d.a.lazyLoadedModules,function(){e()})}).finally(function(){Object(c.a)("Loadables"),Object(c.b)("Hydration");var e=[];return d.a.hydrations.forEach(function(t){var n=document.getElementById(t.id);null===n||n.getAttribute(M)||(n.setAttribute(M,M),e.push(new Promise(function(e){require([t.package],function(r){Object(c.b)(t.package+" Hydration"),new b.ApiMonitor(k,r.default).stage(),Object(f.hydrate)(A(l.createElement(r.default,t.props)),n,function(){Object(c.a)(t.package+" Hydration"),e()})})})))}),Promise.all(e)}).finally(function(){Object(c.a)("Hydration"),Object(u.storeResizeHandler)(),Object(c.b)("Render");var e=[];d.a.renders.forEach(function(t){var n=document.getElementById(t.id);null===n||n.getAttribute(M)||(n.setAttribute(M,M),e.push(new Promise(function(e){require([t.package],function(r){new b.ApiMonitor(k,r.default).reload(),Object(f.render)(A(l.createElement(r.default,t.props)),n,e)})})))});var t=document.body,n=document.createElement("div");n.id="historyApi",t&&(t.appendChild(n),Object(f.render)(P,n)),Promise.all(e).finally(function(){Object(c.a)("Render"),Object(c.a)("Components Initialization")}),requestIdleCallback(function(){return Object(g.replaceCache)(!0)})});var R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.getElementById(e);null!==r?r.getAttribute(M)||(r.setAttribute(M,M),require([t],function(e){new b.ApiMonitor(k,e.default).reload(),Object(f.render)(A(l.createElement(e.default,n)),r)})):i.a.error("Unable to find DOM element with id = "+e)},S=function(e){var t=document.getElementById(e);null!==t&&Object(f.unmountComponentAtNode)(t)},B=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.getElementById(e);null!==r?r.getAttribute(M)||(r.setAttribute(M,M),require([t],function(e){new b.ApiMonitor(k,e.default).stage(),Object(f.hydrate)(A(l.createElement(e.default,n)),r)})):i.a.error("Unable to find DOM element with id = "+e)},I=function(e){return e in O||(O[e]=fetch("/data/1.0/bundle?name="+e,{credentials:"same-origin"}).then(function(e){return e.json()}).then(function(e){return Object(r.loadMessages)(e.messages),Object(o.loadFeatures)(e.features),Promise.all([].concat(x(e.css.map(function(e){return e in E||(E[e]=Object(a.importCss)("/components/dist/"+e)),E[e]})),x(e.js.map(function(e){return e in E||(E[e]=Object(a.importScript)("/components/dist/"+e)),E[e]}))))})),O[e]},L=function(e,t,n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=v({rootElement:e,rootContext:t});if(!n.length)return Promise.resolve();var r=[],o=n.map(function(e){var t=e.promise;return e.context,e.instance,t.catch(function(e){return r.push(e)})});return Promise.all(o).then(function(){if(r.length>0){var e=1===r.length?r[0]:new Error(r.length+" errors were thrown when executing your fetchData functions.");throw e.queryErrors=r,e}})}(l.createElement(g.Apollo,{client:Object(g.buildClient)(null,null,n)},l.createElement(e,t)))},q=d.a.hydrations.concat(d.a.renders).reduce(function(e,t){return e[t.id]=t.props,e},{})},"@ta/page-manifest":function(t,n){t.exports=e},"dll-reference @ta/common.global":function(e,n){e.exports=t}})});