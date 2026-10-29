(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var fd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function BS(){if(Gg)return Po;Gg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Vg;function FS(){return Vg||(Vg=1,fd.exports=BS()),fd.exports}var k=FS(),dd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function HS(){if(kg)return se;kg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function _(D,tt,pt){this.props=D,this.context=tt,this.refs=M,this.updater=pt||A}_.prototype.isReactComponent={},_.prototype.setState=function(D,tt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,tt,"setState")},_.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function U(){}U.prototype=_.prototype;function I(D,tt,pt){this.props=D,this.context=tt,this.refs=M,this.updater=pt||A}var C=I.prototype=new U;C.constructor=I,w(C,_.prototype),C.isPureReactComponent=!0;var L=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(D,tt,pt){var At=pt.ref;return{$$typeof:r,type:D,key:tt,ref:At!==void 0?At:null,props:pt}}function V(D,tt){return O(D.type,tt,D.props)}function Y(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function j(D){var tt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pt){return tt[pt]})}var st=/\/+/g;function q(D,tt){return typeof D=="object"&&D!==null&&D.key!=null?j(""+D.key):tt.toString(36)}function K(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(tt){D.status==="pending"&&(D.status="fulfilled",D.value=tt)},function(tt){D.status==="pending"&&(D.status="rejected",D.reason=tt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function B(D,tt,pt,At,Pt){var Gt=typeof D;(Gt==="undefined"||Gt==="boolean")&&(D=null);var $=!1;if(D===null)$=!0;else switch(Gt){case"bigint":case"string":case"number":$=!0;break;case"object":switch(D.$$typeof){case r:case t:$=!0;break;case x:return $=D._init,B($(D._payload),tt,pt,At,Pt)}}if($)return Pt=Pt(D),$=At===""?"."+q(D,0):At,L(Pt)?(pt="",$!=null&&(pt=$.replace(st,"$&/")+"/"),B(Pt,tt,pt,"",function(te){return te})):Pt!=null&&(Y(Pt)&&(Pt=V(Pt,pt+(Pt.key==null||D&&D.key===Pt.key?"":(""+Pt.key).replace(st,"$&/")+"/")+$)),tt.push(Pt)),1;$=0;var vt=At===""?".":At+":";if(L(D))for(var Rt=0;Rt<D.length;Rt++)At=D[Rt],Gt=vt+q(At,Rt),$+=B(At,tt,pt,Gt,Pt);else if(Rt=y(D),typeof Rt=="function")for(D=Rt.call(D),Rt=0;!(At=D.next()).done;)At=At.value,Gt=vt+q(At,Rt++),$+=B(At,tt,pt,Gt,Pt);else if(Gt==="object"){if(typeof D.then=="function")return B(K(D),tt,pt,At,Pt);throw tt=String(D),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return $}function G(D,tt,pt){if(D==null)return D;var At=[],Pt=0;return B(D,At,"","",function(Gt){return tt.call(pt,Gt,Pt++)}),At}function ut(D){if(D._status===-1){var tt=D._result;tt=tt(),tt.then(function(pt){(D._status===0||D._status===-1)&&(D._status=1,D._result=pt)},function(pt){(D._status===0||D._status===-1)&&(D._status=2,D._result=pt)}),D._status===-1&&(D._status=0,D._result=tt)}if(D._status===1)return D._result.default;throw D._result}var at=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},dt={map:G,forEach:function(D,tt,pt){G(D,function(){tt.apply(this,arguments)},pt)},count:function(D){var tt=0;return G(D,function(){tt++}),tt},toArray:function(D){return G(D,function(tt){return tt})||[]},only:function(D){if(!Y(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return se.Activity=S,se.Children=dt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=I,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},se.cache=function(D){return function(){return D.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(D,tt,pt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var At=w({},D.props),Pt=D.key;if(tt!=null)for(Gt in tt.key!==void 0&&(Pt=""+tt.key),tt)!b.call(tt,Gt)||Gt==="key"||Gt==="__self"||Gt==="__source"||Gt==="ref"&&tt.ref===void 0||(At[Gt]=tt[Gt]);var Gt=arguments.length-2;if(Gt===1)At.children=pt;else if(1<Gt){for(var $=Array(Gt),vt=0;vt<Gt;vt++)$[vt]=arguments[vt+2];At.children=$}return O(D.type,Pt,At)},se.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},se.createElement=function(D,tt,pt){var At,Pt={},Gt=null;if(tt!=null)for(At in tt.key!==void 0&&(Gt=""+tt.key),tt)b.call(tt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Pt[At]=tt[At]);var $=arguments.length-2;if($===1)Pt.children=pt;else if(1<$){for(var vt=Array($),Rt=0;Rt<$;Rt++)vt[Rt]=arguments[Rt+2];Pt.children=vt}if(D&&D.defaultProps)for(At in $=D.defaultProps,$)Pt[At]===void 0&&(Pt[At]=$[At]);return O(D,Gt,Pt)},se.createRef=function(){return{current:null}},se.forwardRef=function(D){return{$$typeof:p,render:D}},se.isValidElement=Y,se.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:ut}},se.memo=function(D,tt){return{$$typeof:h,type:D,compare:tt===void 0?null:tt}},se.startTransition=function(D){var tt=z.T,pt={};z.T=pt;try{var At=D(),Pt=z.S;Pt!==null&&Pt(pt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(N,at)}catch(Gt){at(Gt)}finally{tt!==null&&pt.types!==null&&(tt.types=pt.types),z.T=tt}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(D){return z.H.use(D)},se.useActionState=function(D,tt,pt){return z.H.useActionState(D,tt,pt)},se.useCallback=function(D,tt){return z.H.useCallback(D,tt)},se.useContext=function(D){return z.H.useContext(D)},se.useDebugValue=function(){},se.useDeferredValue=function(D,tt){return z.H.useDeferredValue(D,tt)},se.useEffect=function(D,tt){return z.H.useEffect(D,tt)},se.useEffectEvent=function(D){return z.H.useEffectEvent(D)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(D,tt,pt){return z.H.useImperativeHandle(D,tt,pt)},se.useInsertionEffect=function(D,tt){return z.H.useInsertionEffect(D,tt)},se.useLayoutEffect=function(D,tt){return z.H.useLayoutEffect(D,tt)},se.useMemo=function(D,tt){return z.H.useMemo(D,tt)},se.useOptimistic=function(D,tt){return z.H.useOptimistic(D,tt)},se.useReducer=function(D,tt,pt){return z.H.useReducer(D,tt,pt)},se.useRef=function(D){return z.H.useRef(D)},se.useState=function(D){return z.H.useState(D)},se.useSyncExternalStore=function(D,tt,pt){return z.H.useSyncExternalStore(D,tt,pt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.8",se}var Xg;function Vh(){return Xg||(Xg=1,dd.exports=HS()),dd.exports}var di=Vh(),hd={exports:{}},Io={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function GS(){return Wg||(Wg=1,(function(r){function t(B,G){var ut=B.length;B.push(G);t:for(;0<ut;){var at=ut-1>>>1,dt=B[at];if(0<l(dt,G))B[at]=G,B[ut]=dt,ut=at;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],ut=B.pop();if(ut!==G){B[0]=ut;t:for(var at=0,dt=B.length,D=dt>>>1;at<D;){var tt=2*(at+1)-1,pt=B[tt],At=tt+1,Pt=B[At];if(0>l(pt,ut))At<dt&&0>l(Pt,pt)?(B[at]=Pt,B[At]=ut,at=At):(B[at]=pt,B[tt]=ut,at=tt);else if(At<dt&&0>l(Pt,ut))B[at]=Pt,B[At]=ut,at=At;else break t}}return G}function l(B,G){var ut=B.sortIndex-G.sortIndex;return ut!==0?ut:B.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,g=3,y=!1,A=!1,w=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=B)s(h),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(h)}}function L(B){if(w=!1,C(B),!A)if(i(m)!==null)A=!0,N||(N=!0,j());else{var G=i(h);G!==null&&K(L,G.startTime-B)}}var N=!1,z=-1,b=5,O=-1;function V(){return M?!0:!(r.unstable_now()-O<b)}function Y(){if(M=!1,N){var B=r.unstable_now();O=B;var G=!0;try{t:{A=!1,w&&(w=!1,U(z),z=-1),y=!0;var ut=g;try{e:{for(C(B),S=i(m);S!==null&&!(S.expirationTime>B&&V());){var at=S.callback;if(typeof at=="function"){S.callback=null,g=S.priorityLevel;var dt=at(S.expirationTime<=B);if(B=r.unstable_now(),typeof dt=="function"){S.callback=dt,C(B),G=!0;break e}S===i(m)&&s(m),C(B)}else s(m);S=i(m)}if(S!==null)G=!0;else{var D=i(h);D!==null&&K(L,D.startTime-B),G=!1}}break t}finally{S=null,g=ut,y=!1}G=void 0}}finally{G?j():N=!1}}}var j;if(typeof I=="function")j=function(){I(Y)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,q=st.port2;st.port1.onmessage=Y,j=function(){q.postMessage(null)}}else j=function(){_(Y,0)};function K(B,G){z=_(function(){B(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ut=g;g=G;try{return B()}finally{g=ut}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ut=g;g=B;try{return G()}finally{g=ut}},r.unstable_scheduleCallback=function(B,G,ut){var at=r.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?at+ut:at):ut=at,B){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=ut+dt,B={id:x++,callback:G,priorityLevel:B,startTime:ut,expirationTime:dt,sortIndex:-1},ut>at?(B.sortIndex=ut,t(h,B),i(m)===null&&B===i(h)&&(w?(U(z),z=-1):w=!0,K(L,ut-at))):(B.sortIndex=dt,t(m,B),A||y||(A=!0,N||(N=!0,j()))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var G=g;return function(){var ut=g;g=G;try{return B.apply(this,arguments)}finally{g=ut}}}})(md)),md}var qg;function VS(){return qg||(qg=1,pd.exports=GS()),pd.exports}var gd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function kS(){if(Yg)return Un;Yg=1;var r=Vh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return u(m,h,null,x)},Un.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},Un.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Un.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,h){return m(h)},Un.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var Zg;function XS(){if(Zg)return gd.exports;Zg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gd.exports=kS(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function WS(){if(jg)return Io;jg=1;var r=VS(),t=Vh(),i=XS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,R=c.child;R;){if(R===a){v=!0,a=c,o=f;break}if(R===o){v=!0,o=c,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=c;break}if(R===o){v=!0,o=f,a=c;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),I=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case I:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:q(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return q(e(n))}catch{}}return null}var K=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},at=[],dt=-1;function D(e){return{current:e}}function tt(e){0>dt||(e.current=at[dt],at[dt]=null,dt--)}function pt(e,n){dt++,at[dt]=e.current,e.current=n}var At=D(null),Pt=D(null),Gt=D(null),$=D(null);function vt(e,n){switch(pt(Gt,n),pt(Pt,e),pt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ug(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ug(n),e=fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(At),pt(At,e)}function Rt(){tt(At),tt(Pt),tt(Gt)}function te(e){e.memoizedState!==null&&pt($,e);var n=At.current,a=fg(n,e.type);n!==a&&(pt(Pt,e),pt(At,a))}function Lt(e){Pt.current===e&&(tt(At),tt(Pt)),$.current===e&&(tt($),No._currentValue=ut)}var ae,Ze;function ne(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",Ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+Ze}var me=!1;function fe(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ct=ht}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ht){ct=ht}e.call(yt.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var H=v.split(`
`),ot=R.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ot.length&&!ot[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===ot.length)for(o=H.length-1,c=ot.length-1;1<=o&&0<=c&&H[o]!==ot[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==ot[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==ot[c]){var St=`
`+H[o].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=o&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function ce(e,n){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==n&&n!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ne("Activity");default:return""}}function ge(e){try{var n="",a=null;do n+=ce(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,ln=r.unstable_scheduleCallback,Pe=r.unstable_cancelCallback,Ke=r.unstable_shouldYield,Z=r.unstable_requestPaint,Ne=r.unstable_now,be=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,lt=r.unstable_LowPriority,mt=r.unstable_IdlePriority,Ct=r.log,Nt=r.unstable_setDisableYieldValue,gt=null,_t=null;function Dt(e){if(typeof Ct=="function"&&Nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(gt,e)}catch{}}var Ht=Math.clz32?Math.clz32:Et,It=Math.log,Ot=Math.LN2;function Et(e){return e>>>=0,e===0?32:31-(It(e)/Ot|0)|0}var wt=256,Yt=262144,F=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Tt(o):(v&=R,v!==0?c=Tt(v):a||(a=R&~e,a!==0&&(c=Tt(a))))):(R=o&~f,R!==0?c=Tt(R):v!==0?c=Tt(v):a||(a=o&~e,a!==0&&(c=Tt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=F;return F<<=1,(F&62914560)===0&&(F=4194304),e}function Jt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,n,a,o,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ot=e.hiddenUpdates;for(a=v&~a;0<a;){var St=31-Ht(a),yt=1<<St;R[St]=0,H[St]=-1;var ct=ot[St];if(ct!==null)for(ot[St]=null,St=0;St<ct.length;St++){var ht=ct[St];ht!==null&&(ht.lane&=-536870913)}a&=~yt}o!==0&&we(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function we(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ti(e,n){var a=n&-n;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|n))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function Gs(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Bi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Bi,Tn="__reactProps$"+Bi,Wn="__reactContainer$"+Bi,us="__reactEvents$"+Bi,il="__reactListeners$"+Bi,al="__reactHandles$"+Bi,fs="__reactResources$"+Bi,wa="__reactMarker$"+Bi;function Da(e){delete e[fn],delete e[Tn],delete e[us],delete e[il],delete e[al]}function ta(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=vg(e);e!==null;){if(a=e[fn])return a;e=vg(e)}return n}e=a,a=e.parentNode}return null}function ea(e){if(e=e[fn]||e[Wn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Na(e){var n=e[fs];return n||(n=e[fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[wa]=!0}var sl=new Set,qr={};function T(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(qr[e]=n,e=0;e<n.length;e++)sl.add(n[e])}var ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},it={};function Bt(e){return je.call(it,e)?!0:je.call(nt,e)?!1:ft.test(e)?it[e]=!0:(nt[e]=!0,!1)}function Wt(e,n,a){if(Bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jt(e){if(!e._valueTracker){var n=oe(e)?"checked":"value";e._valueTracker=_e(e,n,""+e[n])}}function De(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qe=/[\n"\\]/g;function de(e){return e.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function hn(e,n,a,o,c,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?xn(e,v,Xt(n)):a!=null?xn(e,v,Xt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Xt(R):e.removeAttribute("name")}function qt(e,n,a,o,c,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),jt(e)}function xn(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function he(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function zn(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function ei(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),jt(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ua=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ie(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ua.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tn(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Ie(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Ie(e,f,n[f])}function mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ve=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return Fi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gi(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ks=null;function cp(e){var n=ea(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Tn]||null;if(!c)throw Error(s(90));hn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&De(o)}break t;case"textarea":zn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&he(e,!!a.multiple,n,!1)}}}var cu=!1;function up(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Vs!==null||ks!==null)&&(ql(),Vs&&(n=Vs,e=ks,ks=Vs=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(na)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{uu=!1}var La=null,fu=null,rl=null;function fp(){if(rl)return rl;var e,n=fu,a=n.length,o,c="value"in La?La.value:La.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return rl=c.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function dp(){return!1}function qn(e){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:dp,this.isPropagationStopped=dp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=qn(hs),jr=S({},hs,{view:0,detail:0}),Iv=qn(jr),du,hu,Kr,ul=S({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(du=e.screenX-Kr.screenX,hu=e.screenY-Kr.screenY):hu=du=0,Kr=e),du)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),hp=qn(ul),zv=S({},ul,{dataTransfer:0}),Bv=qn(zv),Fv=S({},jr,{relatedTarget:0}),pu=qn(Fv),Hv=S({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=qn(Hv),Vv=S({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=qn(Vv),Xv=S({},hs,{data:0}),pp=qn(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function mu(){return Zv}var jv=S({},jr,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=qn(jv),Qv=S({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=qn(Qv),Jv=S({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),$v=qn(Jv),tx=S({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=qn(tx),nx=S({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=qn(nx),ax=S({},hs,{newState:0,oldState:0}),sx=qn(ax),rx=[9,13,27,32],gu=na&&"CompositionEvent"in window,Qr=null;na&&"documentMode"in document&&(Qr=document.documentMode);var ox=na&&"TextEvent"in window&&!Qr,gp=na&&(!gu||Qr&&8<Qr&&11>=Qr),_p=" ",vp=!1;function xp(e,n){switch(e){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function lx(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return e=n.data,e===_p&&vp?null:e;default:return null}}function cx(e,n){if(Xs)return e==="compositionend"||!gu&&xp(e,n)?(e=fp(),rl=fu=La=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ux[e.type]:n==="textarea"}function yp(e,n,a,o){Vs?ks?ks.push(o):ks=[o]:Vs=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function fx(e){ag(e,0)}function fl(e){var n=ds(e);if(De(n))return e}function Ep(e,n){if(e==="change")return n}var bp=!1;if(na){var _u;if(na){var vu="oninput"in document;if(!vu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),vu=typeof Tp.oninput=="function"}_u=vu}else _u=!1;bp=_u&&(!document.documentMode||9<document.documentMode)}function Ap(){Jr&&(Jr.detachEvent("onpropertychange",Rp),$r=Jr=null)}function Rp(e){if(e.propertyName==="value"&&fl($r)){var n=[];yp(n,$r,e,lu(e)),up(fx,n)}}function dx(e,n,a){e==="focusin"?(Ap(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl($r)}function px(e,n){if(e==="click")return fl(n)}function mx(e,n){if(e==="input"||e==="change")return fl(n)}function gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:gx;function to(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!je.call(n,c)||!ni(e[c],n[c]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _x=na&&"documentMode"in document&&11>=document.documentMode,Ws=null,Su=null,eo=null,Mu=!1;function Up(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Ws==null||Ws!==Qe(o)||(o=Ws,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=$l(Su,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ws)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},yu={},Lp={};na&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function ms(e){if(yu[e])return yu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return yu[e]=n[a];return e}var Op=ms("animationend"),Pp=ms("animationiteration"),Ip=ms("animationstart"),vx=ms("transitionrun"),xx=ms("transitionstart"),Sx=ms("transitioncancel"),zp=ms("transitionend"),Bp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ci(e,n){Bp.set(e,n),T(n,[e])}var dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],Ys=0,bu=0;function hl(){for(var e=Ys,n=bu=Ys=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var c=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&Fp(a,c,f)}}function pl(e,n,a,o){_i[Ys++]=e,_i[Ys++]=n,_i[Ys++]=a,_i[Ys++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return pl(e,n,a,o),ml(e)}function gs(e,n){return pl(e,null,null,n),ml(e)}function Fp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ht(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<bo)throw bo=0,Pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Mx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new Mx(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,c,f){var v=0;if(o=e,typeof e=="function")Au(e)&&(v=1);else if(typeof e=="string")v=AS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ii(31,a,n,c),e.elementType=O,e.lanes=f,e;case w:return _s(a.children,c,f,n);case M:v=8,c|=24;break;case _:return e=ii(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case L:return e=ii(13,a,n,c),e.elementType=L,e.lanes=f,e;case N:return e=ii(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:v=10;break t;case U:v=9;break t;case C:v=11;break t;case z:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(v,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function _s(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Gp(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function Cu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ge(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:ge(n)}}var js=[],Ks=0,_l=null,no=0,xi=[],Si=0,Oa=null,Hi=1,Gi="";function aa(e,n){js[Ks++]=no,js[Ks++]=_l,_l=e,no=n}function kp(e,n,a){xi[Si++]=Hi,xi[Si++]=Gi,xi[Si++]=Oa,Oa=e;var o=Hi;e=Gi;var c=32-Ht(o)-1;o&=~(1<<c),a+=1;var f=32-Ht(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Hi=1<<32-Ht(n)+c|a<<c|o,Gi=f+e}else Hi=1<<f|a<<c|o,Gi=e}function wu(e){e.return!==null&&(aa(e,1),kp(e,1,0))}function Du(e){for(;e===_l;)_l=js[--Ks],js[Ks]=null,no=js[--Ks],js[Ks]=null;for(;e===Oa;)Oa=xi[--Si],xi[Si]=null,Gi=xi[--Si],xi[Si]=null,Hi=xi[--Si],xi[Si]=null}function Xp(e,n){xi[Si++]=Hi,xi[Si++]=Gi,xi[Si++]=Oa,Hi=n.id,Gi=n.overflow,Oa=e}var An=null,Je=null,Te=!1,Pa=null,Mi=!1,Nu=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(vi(n,e)),Nu}function Wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Tn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)xe(Ao[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),qt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||lg(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=gi),n=!0):n=!1,n||Ia(e,!0)}function qp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:An=An.return}}function Qs(e){if(e!==An)return!1;if(!Te)return qp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Je&&Ia(e),qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=_g(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=_g(e)}else n===27?(n=Je,Ka(e.type)?(e=ed,ed=null,Je=e):Je=n):Je=An?Ei(e.stateNode.nextSibling):null;return!0}function vs(){Je=An=null,Te=!1}function Uu(){var e=Pa;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Pa=null),e}function io(e){Pa===null?Pa=[e]:Pa.push(e)}var Lu=D(null),xs=null,sa=null;function za(e,n,a){pt(Lu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Lu.current,tt(Lu)}function Ou(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Ou(f.return,a,e),o||(v=null);break t}f=R.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ou(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Js(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=c.type;ni(c.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(c===$.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}c=c.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){xs=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Yp(xs,e)}function xl(e,n){return xs===null&&Ss(e),Yp(e,n)}function Yp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var yx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ex=r.unstable_scheduleCallback,bx=r.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new yx,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&Ex(bx,function(){e.controller.abort()})}var so=null,zu=0,$s=0,tr=null;function Tx(e,n){if(so===null){var a=so=[];zu=0,$s=Gf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Zp,Zp),n}function Zp(){if(--zu===0&&so!==null){tr!==null&&(tr.status="fulfilled");var e=so;so=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ax(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var jp=B.S;B.S=function(e,n){U0=Ne(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(e,n),jp!==null&&jp(e,n)};var Ms=D(null);function Bu(){var e=Ms.current;return e!==null?e:Ye.pooledCache}function Sl(e,n){n===null?pt(Ms,Ms.current):pt(Ms,n.pool)}function Kp(){var e=Bu();return e===null?null:{parent:pn._currentValue,pool:e}}var er=Error(s(460)),Fu=Error(s(474)),Ml=Error(s(542)),yl={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(gi,gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(gi,gi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw Es=n,er}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,er):a}}var Es=null;function $p(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function tm(e){if(e===er||e===Ml)throw Error(s(483))}var nr=null,ro=0;function El(e){var n=ro;return ro+=1,nr===null&&(nr=[]),Jp(nr,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){function n(J,W){if(e){var rt=J.deletions;rt===null?(J.deletions=[W],J.flags|=16):rt.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function c(J,W){return J=ia(J,W),J.index=0,J.sibling=null,J}function f(J,W,rt){return J.index=rt,e?(rt=J.alternate,rt!==null?(rt=rt.index,rt<W?(J.flags|=67108866,W):rt):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,rt,Mt){return W===null||W.tag!==6?(W=Ru(rt,J.mode,Mt),W.return=J,W):(W=c(W,rt),W.return=J,W)}function H(J,W,rt,Mt){var $t=rt.type;return $t===w?St(J,W,rt.props.children,Mt,rt.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&ys($t)===W.type)?(W=c(W,rt.props),oo(W,rt),W.return=J,W):(W=gl(rt.type,rt.key,rt.props,null,J.mode,Mt),oo(W,rt),W.return=J,W)}function ot(J,W,rt,Mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=Cu(rt,J.mode,Mt),W.return=J,W):(W=c(W,rt.children||[]),W.return=J,W)}function St(J,W,rt,Mt,$t){return W===null||W.tag!==7?(W=_s(rt,J.mode,Mt,$t),W.return=J,W):(W=c(W,rt),W.return=J,W)}function yt(J,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Ru(""+W,J.mode,rt),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return rt=gl(W.type,W.key,W.props,null,J.mode,rt),oo(rt,W),rt.return=J,rt;case A:return W=Cu(W,J.mode,rt),W.return=J,W;case b:return W=ys(W),yt(J,W,rt)}if(K(W)||j(W))return W=_s(W,J.mode,rt,null),W.return=J,W;if(typeof W.then=="function")return yt(J,El(W),rt);if(W.$$typeof===I)return yt(J,xl(J,W),rt);bl(J,W)}return null}function ct(J,W,rt,Mt){var $t=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return $t!==null?null:R(J,W,""+rt,Mt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===$t?H(J,W,rt,Mt):null;case A:return rt.key===$t?ot(J,W,rt,Mt):null;case b:return rt=ys(rt),ct(J,W,rt,Mt)}if(K(rt)||j(rt))return $t!==null?null:St(J,W,rt,Mt,null);if(typeof rt.then=="function")return ct(J,W,El(rt),Mt);if(rt.$$typeof===I)return ct(J,W,xl(J,rt),Mt);bl(J,rt)}return null}function ht(J,W,rt,Mt,$t){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return J=J.get(rt)||null,R(W,J,""+Mt,$t);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case y:return J=J.get(Mt.key===null?rt:Mt.key)||null,H(W,J,Mt,$t);case A:return J=J.get(Mt.key===null?rt:Mt.key)||null,ot(W,J,Mt,$t);case b:return Mt=ys(Mt),ht(J,W,rt,Mt,$t)}if(K(Mt)||j(Mt))return J=J.get(rt)||null,St(W,J,Mt,$t,null);if(typeof Mt.then=="function")return ht(J,W,rt,El(Mt),$t);if(Mt.$$typeof===I)return ht(J,W,rt,xl(W,Mt),$t);bl(W,Mt)}return null}function Kt(J,W,rt,Mt){for(var $t=null,Ue=null,Qt=W,ue=W=0,Me=null;Qt!==null&&ue<rt.length;ue++){Qt.index>ue?(Me=Qt,Qt=null):Me=Qt.sibling;var Le=ct(J,Qt,rt[ue],Mt);if(Le===null){Qt===null&&(Qt=Me);break}e&&Qt&&Le.alternate===null&&n(J,Qt),W=f(Le,W,ue),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le,Qt=Me}if(ue===rt.length)return a(J,Qt),Te&&aa(J,ue),$t;if(Qt===null){for(;ue<rt.length;ue++)Qt=yt(J,rt[ue],Mt),Qt!==null&&(W=f(Qt,W,ue),Ue===null?$t=Qt:Ue.sibling=Qt,Ue=Qt);return Te&&aa(J,ue),$t}for(Qt=o(Qt);ue<rt.length;ue++)Me=ht(Qt,J,ue,rt[ue],Mt),Me!==null&&(e&&Me.alternate!==null&&Qt.delete(Me.key===null?ue:Me.key),W=f(Me,W,ue),Ue===null?$t=Me:Ue.sibling=Me,Ue=Me);return e&&Qt.forEach(function(es){return n(J,es)}),Te&&aa(J,ue),$t}function ee(J,W,rt,Mt){if(rt==null)throw Error(s(151));for(var $t=null,Ue=null,Qt=W,ue=W=0,Me=null,Le=rt.next();Qt!==null&&!Le.done;ue++,Le=rt.next()){Qt.index>ue?(Me=Qt,Qt=null):Me=Qt.sibling;var es=ct(J,Qt,Le.value,Mt);if(es===null){Qt===null&&(Qt=Me);break}e&&Qt&&es.alternate===null&&n(J,Qt),W=f(es,W,ue),Ue===null?$t=es:Ue.sibling=es,Ue=es,Qt=Me}if(Le.done)return a(J,Qt),Te&&aa(J,ue),$t;if(Qt===null){for(;!Le.done;ue++,Le=rt.next())Le=yt(J,Le.value,Mt),Le!==null&&(W=f(Le,W,ue),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le);return Te&&aa(J,ue),$t}for(Qt=o(Qt);!Le.done;ue++,Le=rt.next())Le=ht(Qt,J,ue,Le.value,Mt),Le!==null&&(e&&Le.alternate!==null&&Qt.delete(Le.key===null?ue:Le.key),W=f(Le,W,ue),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le);return e&&Qt.forEach(function(zS){return n(J,zS)}),Te&&aa(J,ue),$t}function We(J,W,rt,Mt){if(typeof rt=="object"&&rt!==null&&rt.type===w&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var $t=rt.key;W!==null;){if(W.key===$t){if($t=rt.type,$t===w){if(W.tag===7){a(J,W.sibling),Mt=c(W,rt.props.children),Mt.return=J,J=Mt;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&ys($t)===W.type){a(J,W.sibling),Mt=c(W,rt.props),oo(Mt,rt),Mt.return=J,J=Mt;break t}a(J,W);break}else n(J,W);W=W.sibling}rt.type===w?(Mt=_s(rt.props.children,J.mode,Mt,rt.key),Mt.return=J,J=Mt):(Mt=gl(rt.type,rt.key,rt.props,null,J.mode,Mt),oo(Mt,rt),Mt.return=J,J=Mt)}return v(J);case A:t:{for($t=rt.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a(J,W.sibling),Mt=c(W,rt.children||[]),Mt.return=J,J=Mt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}Mt=Cu(rt,J.mode,Mt),Mt.return=J,J=Mt}return v(J);case b:return rt=ys(rt),We(J,W,rt,Mt)}if(K(rt))return Kt(J,W,rt,Mt);if(j(rt)){if($t=j(rt),typeof $t!="function")throw Error(s(150));return rt=$t.call(rt),ee(J,W,rt,Mt)}if(typeof rt.then=="function")return We(J,W,El(rt),Mt);if(rt.$$typeof===I)return We(J,W,xl(J,rt),Mt);bl(J,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a(J,W.sibling),Mt=c(W,rt),Mt.return=J,J=Mt):(a(J,W),Mt=Ru(rt,J.mode,Mt),Mt.return=J,J=Mt),v(J)):a(J,W)}return function(J,W,rt,Mt){try{ro=0;var $t=We(J,W,rt,Mt);return nr=null,$t}catch(Qt){if(Qt===er||Qt===Ml)throw Qt;var Ue=ii(29,Qt,null,J.mode);return Ue.lanes=Mt,Ue.return=J,Ue}finally{}}}var bs=em(!0),nm=em(!1),Ba=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(e),Fp(e,null,a),n}return pl(e,o,n,a),ml(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xn(e,a)}}function Vu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function co(){if(ku){var e=tr;if(e!==null)throw e}}function uo(e,n,a,o){ku=!1;var c=e.updateQueue;Ba=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,ot=H.next;H.next=null,v===null?f=ot:v.next=ot,v=H;var St=e.alternate;St!==null&&(St=St.updateQueue,R=St.lastBaseUpdate,R!==v&&(R===null?St.firstBaseUpdate=ot:R.next=ot,St.lastBaseUpdate=H))}if(f!==null){var yt=c.baseState;v=0,St=ot=H=null,R=f;do{var ct=R.lane&-536870913,ht=ct!==R.lane;if(ht?(Se&ct)===ct:(o&ct)===ct){ct!==0&&ct===$s&&(ku=!0),St!==null&&(St=St.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Kt=e,ee=R;ct=n;var We=a;switch(ee.tag){case 1:if(Kt=ee.payload,typeof Kt=="function"){yt=Kt.call(We,yt,ct);break t}yt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ee.payload,ct=typeof Kt=="function"?Kt.call(We,yt,ct):Kt,ct==null)break t;yt=S({},yt,ct);break t;case 2:Ba=!0}}ct=R.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=c.callbacks,ht===null?c.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:R.tag,payload:R.payload,callback:R.callback,next:null},St===null?(ot=St=ht,H=yt):St=St.next=ht,v|=ct;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,c.lastBaseUpdate=ht,c.shared.pending=null}}while(!0);St===null&&(H=yt),c.baseState=H,c.firstBaseUpdate=ot,c.lastBaseUpdate=St,f===null&&(c.shared.lanes=0),Wa|=v,e.lanes=v,e.memoizedState=yt}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var ir=D(null),Tl=D(0);function sm(e,n){e=ma,pt(Tl,e),pt(ir,n),ma=e|n.baseLanes}function Xu(){pt(Tl,ma),pt(ir,ir.current)}function Wu(){ma=Tl.current,tt(ir),tt(Tl)}var ai=D(null),yi=null;function Ga(e){var n=e.alternate;pt(cn,cn.current&1),pt(ai,e),yi===null&&(n===null||ir.current!==null||n.memoizedState!==null)&&(yi=e)}function qu(e){pt(cn,cn.current),pt(ai,e),yi===null&&(yi=e)}function rm(e){e.tag===22?(pt(cn,cn.current),pt(ai,e),yi===null&&(yi=e)):Va()}function Va(){pt(cn,cn.current),pt(ai,ai.current)}function si(e){tt(ai),yi===e&&(yi=null),tt(cn)}var cn=D(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,le=null,ke=null,mn=null,Rl=!1,ar=!1,Ts=!1,Cl=0,fo=0,sr=null,Rx=0;function sn(){throw Error(s(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,c,f){return oa=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?km:uf,Ts=!1,f=a(o,c),Ts=!1,ar&&(f=lm(n,a,o,c)),om(e),f}function om(e){B.H=mo;var n=ke!==null&&ke.next!==null;if(oa=0,mn=ke=le=null,Rl=!1,fo=0,sr=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&vl(e)&&(gn=!0))}function lm(e,n,a,o){le=e;var c=0;do{if(ar&&(sr=null),fo=0,ar=!1,25<=c)throw Error(s(301));if(c+=1,mn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Xm,f=n(a,o)}while(ar);return f}function Cx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(le.flags|=1024),n}function ju(){var e=Cl!==0;return Cl=0,e}function Ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qu(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}oa=0,mn=ke=le=null,ar=!1,fo=Cl=0,sr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?le.memoizedState=mn=e:mn=mn.next=e,mn}function un(){if(ke===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=mn===null?le.memoizedState:mn.next;if(n!==null)mn=n,ke=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},mn===null?le.memoizedState=mn=e:mn=mn.next=e}return mn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,sr===null&&(sr=[]),e=Jp(sr,e,n),n=le,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?km:uf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===I)return Rn(e)}throw Error(s(438,String(e)))}function Ju(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=V;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=un();return $u(n,ke,e)}function $u(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=v=null,H=null,ot=n,St=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(Se&yt)===yt:(oa&yt)===yt){var ct=ot.revertLane;if(ct===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===$s&&(St=!0);else if((oa&ct)===ct){ot=ot.next,ct===$s&&(St=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},H===null?(R=H=yt,v=f):H=H.next=yt,le.lanes|=ct,Wa|=ct;yt=ot.action,Ts&&a(f,yt),f=ot.hasEagerState?ot.eagerState:a(f,yt)}else ct={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},H===null?(R=H=ct,v=f):H=H.next=ct,le.lanes|=yt,Wa|=yt;ot=ot.next}while(ot!==null&&ot!==n);if(H===null?v=f:H.next=R,!ni(f,e.memoizedState)&&(gn=!0,St&&(a=tr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tf(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);ni(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cm(e,n,a){var o=le,c=un(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ni((ke||c).memoizedState,a);if(v&&(c.memoizedState=a,gn=!0),c=c.queue,af(dm.bind(null,o,c,e),[e]),c.getSnapshot!==n||v||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,rr(9,{destroy:void 0},fm.bind(null,o,c,a,n),null),Ye===null)throw Error(s(349));f||(oa&127)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=wl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,hm(n)&&pm(e)}function dm(e,n,a){return a(function(){hm(n)&&pm(e)})}function hm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function pm(e){var n=gs(e,2);n!==null&&Qn(n,e,2)}function ef(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Ts){Dt(!0);try{a()}finally{Dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,$u(e,ke,typeof o=="function"?o:la)}function wx(e,n,a,o,c){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var R=a(c,o),H=B.S;H!==null&&H(v,R),_m(e,n,R)}catch(ot){nf(e,n,ot)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(c,o),_m(e,n,f)}catch(ot){nf(e,n,ot)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return nf(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function Mm(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var o=le;if(Te){if(Je){e:{for(var c=Je,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ei(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Ei(c.nextSibling),o=c.data==="F!";break t}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,le,o),o.dispatch=a,o=ef(!1),f=cf.bind(null,le,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=wx.bind(null,le,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function ym(e){var n=un();return Em(n,ke,e)}function Em(e,n,a){if(n=$u(e,n,Sm)[0],e=Nl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(v){throw v===er?Ml:v}else o=n;n=un();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,rr(9,{destroy:void 0},Dx.bind(null,c,a),null)),[o,f,e]}function Dx(e,n){e.action=n}function bm(e){var n=un(),a=ke;if(a!==null)return Em(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=wl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Tm(){return un().memoizedState}function Ul(e,n,a,o){var c=Fn();le.flags|=e,c.memoizedState=rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(e,n,a,o){var c=un();o=o===void 0?null:o;var f=c.memoizedState.inst;ke!==null&&o!==null&&Yu(o,ke.memoizedState.deps)?c.memoizedState=rr(n,f,a,o):(le.flags|=e,c.memoizedState=rr(1|n,f,a,o))}function Am(e,n){Ul(8390656,8,e,n)}function af(e,n){Ll(2048,8,e,n)}function Nx(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=wl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=un().memoizedState;return Nx({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Ll(4,2,e,n)}function wm(e,n){return Ll(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nm(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,Dm.bind(null,n,e),a)}function sf(){}function Um(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Lm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=e(),Ts){Dt(!0);try{e()}finally{Dt(!1)}}return a.memoizedState=[o,n],o}function rf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=O0(),le.lanes|=e,Wa|=e,a)}function Om(e,n,a,o){return ni(a,n)?a:ir.current!==null?(e=rf(e,a,o),ni(e,n)||(gn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Se&261930)===0?(gn=!0,e.memoizedState=a):(e=O0(),le.lanes|=e,Wa|=e,n)}function Pm(e,n,a,o,c){var f=G.p;G.p=f!==0&&8>f?f:8;var v=B.T,R={};B.T=R,cf(e,!1,n,a);try{var H=c(),ot=B.S;if(ot!==null&&ot(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var St=Ax(H,o);po(e,n,St,li(e))}else po(e,n,o,li(e))}catch(yt){po(e,n,{then:function(){},status:"rejected",reason:yt},li())}finally{G.p=f,v!==null&&R.types!==null&&(v.types=R.types),B.T=v}}function Ux(){}function of(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Im(e).queue;Pm(e,c,n,ut,a===null?Ux:function(){return zm(e),a(o)})}function Im(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zm(e){var n=Im(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},li())}function lf(){return Rn(No)}function Bm(){return un().memoizedState}function Fm(){return un().memoizedState}function Lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Fa(a);var o=Ha(n,e,a);o!==null&&(Qn(o,n,a),lo(o,n,a)),n={cache:Iu()},e.payload=n;return}n=n.return}}function Ox(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Gm(n,a):(a=Tu(e,n,a,o),a!==null&&(Qn(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=li();po(e,n,a,o)}function po(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Gm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(c.hasEagerState=!0,c.eagerState=R,ni(R,v))return pl(e,n,c,0),Ye===null&&hl(),!1}catch{}finally{}if(a=Tu(e,n,c,o),a!==null)return Qn(a,e,o),Vm(a,n,o),!0}return!1}function cf(e,n,a,o){if(o={lane:2,revertLane:Gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=Tu(e,a,o,2),n!==null&&Qn(n,e,2)}function Ol(e){var n=e.alternate;return e===le||n!==null&&n===le}function Gm(e,n){ar=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xn(e,a)}}var mo={readContext:Rn,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};mo.useEffectEvent=sn;var km={readContext:Rn,use:Dl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(Ts){Dt(!0);try{e()}finally{Dt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(Ts){Dt(!0);try{a(n)}finally{Dt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Ox.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=Hm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=Fn();return rf(a,e,n)},useTransition:function(){var e=ef(!1);return e=Pm.bind(null,le,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,c=Fn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Se&127)!==0||um(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Am(dm.bind(null,o,f,e),[e]),o.flags|=2048,rr(9,{destroy:void 0},fm.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Ye.identifierPrefix;if(Te){var a=Gi,o=Hi;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return Fn().memoizedState=Lx.bind(null,le)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Rn,use:Dl,useCallback:Um,useContext:Rn,useEffect:af,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Lm,useReducer:Nl,useRef:Tm,useState:function(){return Nl(la)},useDebugValue:sf,useDeferredValue:function(e,n){var a=un();return Om(a,ke.memoizedState,e,n)},useTransition:function(){var e=Nl(la)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:lf,useFormState:ym,useActionState:ym,useOptimistic:function(e,n){var a=un();return mm(a,ke,e,n)},useMemoCache:Ju,useCacheRefresh:Fm};uf.useEffectEvent=Rm;var Xm={readContext:Rn,use:Dl,useCallback:Um,useContext:Rn,useEffect:af,useImperativeHandle:Nm,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Lm,useReducer:tf,useRef:Tm,useState:function(){return tf(la)},useDebugValue:sf,useDeferredValue:function(e,n){var a=un();return ke===null?rf(a,e,n):Om(a,ke.memoizedState,e,n)},useTransition:function(){var e=tf(la)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:lf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=un();return ke!==null?mm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Fm};Xm.useEffectEvent=Rm;function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),c=Fa(o);c.payload=n,a!=null&&(c.callback=a),n=Ha(e,c,o),n!==null&&(Qn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),c=Fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ha(e,c,o),n!==null&&(Qn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(e,o,a),n!==null&&(Qn(n,e,a),lo(n,e,a))}};function Wm(e,n,a,o,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(c,f):!0}function qm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function As(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Ym(e){dl(e)}function Zm(e){console.error(e)}function jm(e){dl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function hf(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Qm(e){return e=Fa(e),e.tag=3,e}function Jm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Km(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,o),typeof c!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Px(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Yl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(e,o,c)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(e,o,c)),!1}throw Error(s(435,a.tag))}return Bf(e,o,c),Yl(),!1}if(Te)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Nu&&(e=Error(s(422),{cause:o}),io(vi(e,a)))):(o!==Nu&&(n=Error(s(423),{cause:o}),io(vi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=vi(o,a),c=hf(e.stateNode,o,c),Vu(e,c),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=vi(f,a),Eo===null?Eo=[f]:Eo.push(f),rn!==4&&(rn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=hf(a.stateNode,o,e),Vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Qm(c),Jm(c,e,a,o),Vu(a,c),!1}a=a.return}while(a!==null);return!1}var pf=Error(s(461)),gn=!1;function Cn(e,n,a,o){n.child=e===null?nm(n,null,a,o):bs(n,e.child,a,o)}function $m(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Ss(n),o=Zu(e,n,a,v,f,c),R=ju(),e!==null&&!gn?(Ku(e,n,c),ca(e,n,c)):(Te&&R&&wu(n),n.flags|=1,Cn(e,n,o,c),n.child)}function t0(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,e0(e,n,f,o,c)):(e=gl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!yf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,o)&&e.ref===n.ref)return ca(e,n,c)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function e0(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=f,yf(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,ca(e,n,c)}return mf(e,n,a,o,c)}function n0(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return i0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Xu(),rm(n);else return o=n.lanes=536870912,i0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),sm(n,f),Va(),n.memoizedState=null):(e!==null&&Sl(n,null),Xu(),Va());return Cn(e,n,c,a),n.child}function go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i0(e,n,a,o,c){var f=Bu();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),Xu(),rm(n),e!==null&&Js(e,n,o,!0),n.childLanes=c,null}function Il(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function a0(e,n,a){return bs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function Ix(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,go(null,e);if(qu(n),(e=Je)?(e=gg(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,An=n,Je=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Il(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(qu(n),c)if(n.flags&256)n.flags&=-257,n=a0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||Js(e,n,a,!1),c=(a&e.childLanes)!==0,gn||c){if(o=Ye,o!==null&&(v=ti(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,gs(e,v),Qn(o,e,v),pf;Yl(),n=a0(e,n,a)}else e=f.treeContext,Je=Ei(v.nextSibling),An=n,Te=!0,Pa=null,Mi=!1,e!==null&&Xp(n,e),n=Il(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,o,c){return Ss(n),a=Zu(e,n,a,o,void 0,c),o=ju(),e!==null&&!gn?(Ku(e,n,c),ca(e,n,c)):(Te&&o&&wu(n),n.flags|=1,Cn(e,n,a,c),n.child)}function s0(e,n,a,o,c,f){return Ss(n),n.updateQueue=null,a=lm(n,o,a,c),om(e),o=ju(),e!==null&&!gn?(Ku(e,n,f),ca(e,n,f)):(Te&&o&&wu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function r0(e,n,a,o,c){if(Ss(n),n.stateNode===null){var f=Zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ff(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&df.enqueueReplaceState(f,f.state,null),uo(n,o,f,c),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=As(a,R);f.props=H;var ot=f.context,St=a.contextType;v=Zs,typeof St=="object"&&St!==null&&(v=Rn(St));var yt=a.getDerivedStateFromProps;St=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,St||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ot!==v)&&qm(n,f,o,v),Ba=!1;var ct=n.memoizedState;f.state=ct,uo(n,o,f,c),co(),ot=n.memoizedState,R||ct!==ot||Ba?(typeof yt=="function"&&(ff(n,a,yt,o),ot=n.memoizedState),(H=Ba||Wm(n,a,H,o,ct,ot,v))?(St||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gu(e,n),v=n.memoizedProps,St=As(a,v),f.props=St,yt=n.pendingProps,ct=f.context,ot=a.contextType,H=Zs,typeof ot=="object"&&ot!==null&&(H=Rn(ot)),R=a.getDerivedStateFromProps,(ot=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==yt||ct!==H)&&qm(n,f,o,H),Ba=!1,ct=n.memoizedState,f.state=ct,uo(n,o,f,c),co();var ht=n.memoizedState;v!==yt||ct!==ht||Ba||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof R=="function"&&(ff(n,a,R,o),ht=n.memoizedState),(St=Ba||Wm(n,a,St,o,ct,ht,H)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ht,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ht,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=H,o=St):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=bs(n,e.child,null,c),n.child=bs(n,null,a,c)):Cn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ca(e,n,c),e}function o0(e,n,a,o){return vs(),n.flags|=256,Cn(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:Kp()}}function vf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function l0(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?Ga(n):Va(),(e=Je)?(e=gg(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,An=n,Je=null)):e=null,e===null)throw Ia(n);return td(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Va(),c=n.mode,R=Bl({mode:"hidden",children:R},c),o=_s(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,v,a),n.memoizedState=gf,go(null,o)):(Ga(n),xf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(Va(),n.child=e.child,n.flags|=128,n=null):(Va(),R=o.fallback,c=n.mode,o=Bl({mode:"visible",children:o.children},c),R=_s(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,bs(n,e.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,v,a),n.memoizedState=gf,n=go(null,o));else if(Ga(n),td(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ot=v.dgst;v=ot,o=Error(s(419)),o.stack="",o.digest=v,io({value:o,source:null,stack:null}),n=Sf(e,n,a)}else if(gn||Js(e,n,a,!1),v=(a&e.childLanes)!==0,gn||v){if(v=Ye,v!==null&&(o=ti(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,gs(e,o),Qn(v,e,o),pf;$f(R)||Yl(),n=Sf(e,n,a)}else $f(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Je=Ei(R.nextSibling),An=n,Te=!0,Pa=null,Mi=!1,e!==null&&Xp(n,e),n=xf(n,o.children),n.flags|=4096);return n}return c?(Va(),R=o.fallback,c=n.mode,H=e.child,ot=H.sibling,o=ia(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ot!==null?R=ia(ot,R):(R=_s(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,go(null,o),o=n.child,R=e.child.memoizedState,R===null?R=_f(a):(c=R.cachePool,c!==null?(H=pn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Kp(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=vf(e,v,a),n.memoizedState=gf,go(e.child,o)):(Ga(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function xf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return bs(n,e.child,null,a),e=xf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function c0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ou(e.return,n,a)}function Mf(e,n,a,o,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function u0(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=cn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,pt(cn,v),Cn(e,n,o,a),o=Te?no:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&c0(e,a,n);else if(e.tag===19)c0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Mf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Mf(n,!0,a,null,f,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function zx(e,n,a){switch(n.tag){case 3:vt(n,n.stateNode.containerInfo),za(n,pn,e.memoizedState.cache),vs();break;case 27:case 5:te(n);break;case 4:vt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?l0(e,n,a):(Ga(n),e=ca(e,n,a),e!==null?e.sibling:null);Ga(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return u0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),pt(cn,cn.current),o)break;return null;case 22:return n.lanes=0,n0(e,n,a,n.pendingProps);case 24:za(n,pn,e.memoizedState.cache)}return ca(e,n,a)}function f0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return gn=!1,zx(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Te&&(n.flags&1048576)!==0&&kp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Au(e)?(o=As(e,o),n.tag=1,n=r0(null,n,e,o,a)):(n.tag=0,n=mf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===C){n.tag=11,n=$m(null,n,e,o,a);break t}else if(c===z){n.tag=14,n=t0(null,n,e,o,a);break t}}throw n=q(e)||e,Error(s(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=As(o,n.pendingProps),r0(e,n,o,c,a);case 3:t:{if(vt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Gu(e,n),uo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,za(n,pn,o),o!==f.cache&&Pu(n,[pn],a,!0),co(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=o0(e,n,o,a);break t}else if(o!==c){c=vi(Error(s(424)),n),io(c),n=o0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ei(e.firstChild),An=n,Te=!0,Pa=null,Mi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),o===c){n=ca(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=yg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=tc(Gt.current).createElement(a),o[fn]=n,o[Tn]=e,wn(o,a,e),dn(o),n.stateNode=o):n.memoizedState=yg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Te&&(o=n.stateNode=xg(n.type,n.pendingProps,Gt.current),An=n,Mi=!0,c=Je,Ka(n.type)?(ed=c,Je=Ei(o.firstChild)):Je=c),Cn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=o=Je)&&(o=hS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,An=n,Je=Ei(o.firstChild),Mi=!1,c=!0):c=!1),c||Ia(n)),te(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Kf(c,f)?o=null:v!==null&&Kf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Zu(e,n,Cx,null,null,a),No._currentValue=c),zl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=pS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,An=n,Je=null,e=!0):e=!1),e||Ia(n)),null;case 13:return l0(e,n,a);case 4:return vt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bs(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Ss(n),c=Rn(c),o=o(c),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return t0(e,n,n.type,n.pendingProps,a);case 15:return e0(e,n,n.type,n.pendingProps,a);case 19:return u0(e,n,a);case 31:return Ix(e,n,a);case 22:return n0(e,n,a,n.pendingProps);case 24:return Ss(n),o=Rn(pn),e===null?(c=Bu(),c===null&&(c=Ye,f=Iu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Hu(n),za(n,pn,c)):((e.lanes&a)!==0&&(Gu(e,n),uo(n,null,null,a),co()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),za(n,pn,o)):(o=f.cache,za(n,pn,o),o!==c.cache&&Pu(n,[pn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Ef(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(B0())e.flags|=8192;else throw Es=yl,Fu}else e.flags&=-16777217}function d0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rg(n))if(B0())e.flags|=8192;else throw Es=yl,Fu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,ur|=n)}function _o(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(pn),Rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),$e(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?($e(n),d0(n,f)):($e(n),Ef(n,c,null,o,a))):f?f!==e.memoizedState?(ua(n),$e(n),d0(n,f)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),$e(n),Ef(n,c,e,o,a)),null;case 27:if(Lt(n),a=Gt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=At.current,Qs(n)?Wp(n):(e=xg(c,o,a),n.stateNode=e,ua(n))}return $e(n),null;case 5:if(Lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(f=At.current,Qs(n))Wp(n);else{var v=tc(Gt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[fn]=n,f[Tn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(wn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return $e(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Gt.current,Qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=An,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||lg(e.nodeValue,a)),e||Ia(n,!0)}else e=tc(e).createTextNode(o),e[fn]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Qs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[fn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),$e(n),null);case 4:return Rt(),e===null&&Wf(n.stateNode.containerInfo),$e(n),null;case 10:return ra(n.type),$e(n),null;case 19:if(tt(cn),o=n.memoizedState,o===null)return $e(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)_o(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,_o(o,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return pt(cn,cn.current&1|2),Te&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ne()>Xl&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304)}else{if(!c)if(e=Al(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return $e(n),null}else 2*Ne()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ne(),e.sibling=null,a=cn.current,pt(cn,c?a&1|2:a&1),Te&&aa(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return si(n),Wu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&tt(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(pn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fx(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(pn),Rt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(cn),null;case 4:return Rt(),null;case 10:return ra(n.type),null;case 22:case 23:return si(n),Wu(),e!==null&&tt(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(pn),null;case 25:return null;default:return null}}function h0(e,n){switch(Du(n),n.tag){case 3:ra(pn),Rt();break;case 26:case 27:case 5:Lt(n);break;case 4:Rt();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:tt(cn);break;case 10:ra(n.type);break;case 22:case 23:si(n),Wu(),e!==null&&tt(Ms);break;case 24:ra(pn)}}function vo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(R){Fe(n,n.return,R)}}function ka(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,c=n;var H=a,ot=R;try{ot()}catch(St){Fe(c,H,St)}}}o=o.next}while(o!==f)}}catch(St){Fe(n,n.return,St)}}function p0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(o){Fe(e,e.return,o)}}}function m0(e,n,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Fe(e,n,c)}}function Vi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function g0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function bf(e,n,a){try{var o=e.stateNode;oS(o,e.type,a,n),o[Tn]=n}catch(c){Fe(e,e.return,c)}}function _0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=gi));else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function v0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,a),n[fn]=e,n[Tn]=a}catch(f){Fe(e,e.return,f)}}var fa=!1,_n=!1,Rf=!1,x0=typeof WeakSet=="function"?WeakSet:Set,En=null;function Hx(e,n){if(e=e.containerInfo,Zf=oc,e=Np(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,H=-1,ot=0,St=0,yt=e,ct=null;e:for(;;){for(var ht;yt!==a||c!==0&&yt.nodeType!==3||(R=v+c),yt!==f||o!==0&&yt.nodeType!==3||(H=v+o),yt.nodeType===3&&(v+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ct=yt,yt=ht;for(;;){if(yt===e)break e;if(ct===a&&++ot===c&&(R=v),ct===f&&++St===o&&(H=v),(ht=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ht}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},oc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=As(a.type,c);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Fe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function S0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&vo(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var c=As(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&p0(a),o&512&&xo(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&v0(a);case 26:case 5:ha(e,a),n===null&&o&4&&g0(a),o&512&&xo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&E0(e,a);break;case 13:ha(e,a),o&4&&b0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jx.bind(null,a),mS(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||_n,c=fa;var f=_n;fa=o,(_n=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=c,_n=f}break;case 30:break;default:ha(e,a)}}function M0(e){var n=e.alternate;n!==null&&(e.alternate=null,M0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Da(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Yn=!1;function da(e,n,a){for(a=a.child;a!==null;)y0(e,n,a),a=a.sibling}function y0(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:_n||Vi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Vi(a,n);var o=en,c=Yn;Ka(a.type)&&(en=a.stateNode,Yn=!1),da(e,n,a),Co(a.stateNode),en=o,Yn=c;break;case 5:_n||Vi(a,n);case 6:if(o=en,c=Yn,en=null,da(e,n,a),en=o,Yn=c,en!==null)if(Yn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:en!==null&&(Yn?(e=en,pg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):pg(en,a.stateNode));break;case 4:o=en,c=Yn,en=a.stateNode.containerInfo,Yn=!0,da(e,n,a),en=o,Yn=c;break;case 0:case 11:case 14:case 15:ka(2,a,n),_n||ka(4,a,n),da(e,n,a);break;case 1:_n||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&m0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,da(e,n,a),_n=o;break;default:da(e,n,a)}}function E0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Fe(n,n.return,a)}}}function b0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Fe(n,n.return,a)}}function Gx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new x0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new x0),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=Gx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Kx.bind(null,e,o);o.then(c,c)}})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){en=R.stateNode,Yn=!1;break t}break;case 5:en=R.stateNode,Yn=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,Yn=!0;break t}R=R.return}if(en===null)throw Error(s(160));y0(f,v,c),en=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)T0(n,e),n=n.sibling}var wi=null;function T0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),jn(e),o&4&&(ka(3,e,e.return),vo(3,e),ka(5,e,e.return));break;case 1:Zn(n,e),jn(e),o&512&&(_n||a===null||Vi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=wi;if(Zn(n,e),jn(e),o&512&&(_n||a===null||Vi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[wa]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,o,a),f[fn]=e,dn(f),o=f;break t;case"link":var v=Tg("link","href",c).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=Tg("meta","content",c).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[fn]=e,dn(f),o=f}e.stateNode=o}else Ag(c,e.type,e.stateNode);else e.stateNode=bg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ag(c,e.type,e.stateNode):bg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),jn(e),o&512&&(_n||a===null||Vi(a,a.return)),a!==null&&o&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),jn(e),o&512&&(_n||a===null||Vi(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(Kt){Fe(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,bf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Rf=!0);break;case 6:if(Zn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){Fe(e,e.return,Kt)}}break;case 3:if(ic=null,c=wi,wi=ec(n.containerInfo),Zn(n,e),wi=c,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(Kt){Fe(e,e.return,Kt)}Rf&&(Rf=!1,A0(e));break;case 4:o=wi,wi=ec(e.stateNode.containerInfo),Zn(n,e),jn(e),wi=o;break;case 12:Zn(n,e),jn(e);break;case 31:Zn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 13:Zn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=Ne()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 22:c=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ot=fa,St=_n;if(fa=ot||c,_n=St||H,Zn(n,e),_n=St,fa=ot,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||fa||_n||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=H.stateNode;var yt=H.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;R.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Kt){Fe(H,H.return,Kt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Kt){Fe(H,H.return,Kt)}}}else if(n.tag===18){if(a===null){H=n;try{var ht=H.stateNode;c?mg(ht,!0):mg(H.stateNode,!1)}catch(Kt){Fe(H,H.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(e,a))));break;case 19:Zn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Tf(e);Hl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Bn(v,""),a.flags&=-33);var R=Tf(e);Hl(e,R,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ot=Tf(e);Af(e,ot,H);break;default:throw Error(s(161))}}catch(St){Fe(e,e.return,St)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function A0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;A0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S0(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Rs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&m0(n,n.return,a),Rs(n);break;case 27:Co(n.stateNode);case 26:case 5:Vi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:pa(c,f,a),vo(4,f);break;case 1:if(pa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ot){Fe(o,o.return,ot)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)im(H[c],R)}catch(ot){Fe(o,o.return,ot)}}a&&v&64&&p0(f),xo(f,f.return);break;case 27:v0(f);case 26:case 5:pa(c,f,a),a&&o===null&&v&4&&g0(f),xo(f,f.return);break;case 12:pa(c,f,a);break;case 31:pa(c,f,a),a&&v&4&&E0(c,f);break;case 13:pa(c,f,a),a&&v&4&&b0(c,f);break;case 22:f.memoizedState===null&&pa(c,f,a),xo(f,f.return);break;case 30:break;default:pa(c,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)R0(e,n,a,o),n=n.sibling}function R0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),c&2048&&vo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(c&2048){Di(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Fe(n,n.return,H)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,o):So(e,n):f._visibility&2?Di(e,n,a,o):(f._visibility|=2,or(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Cf(v,n);break;case 24:Di(e,n,a,o),c&2048&&wf(n.alternate,n);break;default:Di(e,n,a,o)}}function or(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,H=o,ot=v.flags;switch(v.tag){case 0:case 11:case 15:or(f,v,R,H,c),vo(8,v);break;case 23:break;case 22:var St=v.stateNode;v.memoizedState!==null?St._visibility&2?or(f,v,R,H,c):So(f,v):(St._visibility|=2,or(f,v,R,H,c)),c&&ot&2048&&Cf(v.alternate,v);break;case 24:or(f,v,R,H,c),c&&ot&2048&&wf(v.alternate,v);break;default:or(f,v,R,H,c)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:So(a,o),c&2048&&Cf(o.alternate,o);break;case 24:So(a,o),c&2048&&wf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function lr(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)C0(e,n,a),e=e.sibling}function C0(e,n,a){switch(e.tag){case 26:lr(e,n,a),e.flags&Mo&&e.memoizedState!==null&&RS(a,wi,e.memoizedState,e.memoizedProps);break;case 5:lr(e,n,a);break;case 3:case 4:var o=wi;wi=ec(e.stateNode.containerInfo),lr(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,lr(e,n,a),Mo=o):lr(e,n,a));break;default:lr(e,n,a)}}function w0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,N0(o,e)}w0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)D0(e),e=e.sibling}function D0(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&ka(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):yo(e);break;default:yo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,N0(o,e)}w0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function N0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var c=o.sibling,f=o.return;if(M0(o),o===a){En=null;break t}if(c!==null){c.return=f,En=c;break t}En=f}}}var Vx={getCacheForType:function(e){var n=Rn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},kx=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,ve=null,Se=0,Be=0,ri=null,Xa=!1,cr=!1,Df=!1,ma=0,rn=0,Wa=0,Cs=0,Nf=0,oi=0,ur=0,Eo=null,Kn=null,Uf=!1,kl=0,U0=0,Xl=1/0,Wl=null,qa=null,Sn=0,Ya=null,fr=null,ga=0,Lf=0,Of=null,L0=null,bo=0,Pf=null;function li(){return(ze&2)!==0&&Se!==0?Se&-Se:B.T!==null?Gf():Wr()}function O0(){if(oi===0)if((Se&536870912)===0||Te){var e=Yt;Yt<<=1,(Yt&3932160)===0&&(Yt=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Qn(e,n,a){(e===Ye&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Za(e,Se,oi,!1)),Zt(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(Cs|=a),rn===4&&Za(e,Se,oi,!1)),ki(e))}function P0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ut(e,n),c=o?qx(e,n):zf(e,n,!0),f=o;do{if(c===0){cr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Xx(a)){c=zf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;c=Eo;var H=R.current.memoizedState.isDehydrated;if(H&&(dr(R,v).flags|=256),v=zf(R,v,!1),v!==2){if(Df&&!H){R.errorRecoveryDisabledLanes|=f,Cs|=f,c=4;break t}f=Kn,Kn=c,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){dr(e,0),Za(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,oi,!Xa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=kl+300-Ne(),10<c)){if(Za(o,n,oi,!Xa),xt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=dg(I0.bind(null,o,a,Kn,Wl,Uf,n,oi,Cs,ur,Xa,f,"Throttled",-0,0),c);break t}I0(o,a,Kn,Wl,Uf,n,oi,Cs,ur,Xa,f,null,-0,0)}}break}while(!0);ki(e)}function I0(e,n,a,o,c,f,v,R,H,ot,St,yt,ct,ht){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gi},C0(n,f,yt);var Kt=(f&62914560)===f?kl-Ne():(f&4194048)===f?U0-Ne():0;if(Kt=CS(yt,Kt),Kt!==null){ga=f,e.cancelPendingCommit=Kt(X0.bind(null,e,n,f,a,o,c,v,R,H,St,yt,null,ct,ht)),Za(e,f,v,!ot);return}}X0(e,n,f,a,o,c,v,R,H)}function Xx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~Nf,n&=~Cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ht(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&we(e,a,n)}function ql(){return(ze&6)===0?(To(0),!1):!0}function If(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,sa=xs=null,Qu(e),nr=null,ro=0,e=ve;for(;e!==null;)h0(e.alternate,e),e=e.return;ve=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,If(),Ye=e,ve=a=ia(e.current,null),Se=n,Be=0,ri=null,Xa=!1,cr=Ut(e,n),Df=!1,ur=oi=Nf=Cs=Wa=rn=0,Kn=Eo=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ht(o),f=1<<c;n|=e[c],o&=~f}return ma=n,hl(),a}function z0(e,n){le=null,B.H=mo,n===er||n===Ml?(n=$p(),Be=3):n===Fu?(n=$p(),Be=4):Be=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,ve===null&&(rn=1,Pl(e,vi(n,e.current)))}function B0(){var e=ai.current;return e===null?!0:(Se&4194048)===Se?yi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===yi:!1}function F0(){var e=B.H;return B.H=mo,e===null?mo:e}function H0(){var e=B.A;return B.A=Vx,e}function Yl(){rn=4,Xa||(Se&4194048)!==Se&&ai.current!==null||(cr=!0),(Wa&134217727)===0&&(Cs&134217727)===0||Ye===null||Za(Ye,Se,oi,!1)}function zf(e,n,a){var o=ze;ze|=2;var c=F0(),f=H0();(Ye!==e||Se!==n)&&(Wl=null,dr(e,n)),n=!1;var v=rn;t:do try{if(Be!==0&&ve!==null){var R=ve,H=ri;switch(Be){case 8:If(),v=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ot=Be;if(Be=0,ri=null,hr(e,R,H,ot),a&&cr){v=0;break t}break;default:ot=Be,Be=0,ri=null,hr(e,R,H,ot)}}Wx(),v=rn;break}catch(St){z0(e,St)}while(!0);return n&&e.shellSuspendCounter++,sa=xs=null,ze=o,B.H=c,B.A=f,ve===null&&(Ye=null,Se=0,hl()),v}function Wx(){for(;ve!==null;)G0(ve)}function qx(e,n){var a=ze;ze|=2;var o=F0(),c=H0();Ye!==e||Se!==n?(Wl=null,Xl=Ne()+500,dr(e,n)):cr=Ut(e,n);t:do try{if(Be!==0&&ve!==null){n=ve;var f=ri;e:switch(Be){case 1:Be=0,ri=null,hr(e,n,f,1);break;case 2:case 9:if(Qp(f)){Be=0,ri=null,V0(n);break}n=function(){Be!==2&&Be!==9||Ye!==e||(Be=7),ki(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Qp(f)?(Be=0,ri=null,V0(n)):(Be=0,ri=null,hr(e,n,f,7));break;case 5:var v=null;switch(ve.tag){case 26:v=ve.memoizedState;case 5:case 27:var R=ve;if(v?Rg(v):R.stateNode.complete){Be=0,ri=null;var H=R.sibling;if(H!==null)ve=H;else{var ot=R.return;ot!==null?(ve=ot,Zl(ot)):ve=null}break e}}Be=0,ri=null,hr(e,n,f,5);break;case 6:Be=0,ri=null,hr(e,n,f,6);break;case 8:If(),rn=6;break t;default:throw Error(s(462))}}Yx();break}catch(St){z0(e,St)}while(!0);return sa=xs=null,B.H=o,B.A=c,ze=a,ve!==null?0:(Ye=null,Se=0,hl(),rn)}function Yx(){for(;ve!==null&&!Ke();)G0(ve)}function G0(e){var n=f0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?Zl(e):ve=n}function V0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=s0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=s0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Qu(n);default:h0(a,n),n=ve=Hp(n,ma),n=f0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?Zl(e):ve=n}function hr(e,n,a,o){sa=xs=null,Qu(n),nr=null,ro=0;var c=n.return;try{if(Px(e,c,n,a,Se)){rn=1,Pl(e,vi(a,e.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;rn=1,Pl(e,vi(a,e.current)),ve=null;return}n.flags&32768?(Te||o===1?e=!0:cr||(Se&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),k0(n,e)):Zl(n)}function Zl(e){var n=e;do{if((n.flags&32768)!==0){k0(n,Xa);return}e=n.return;var a=Bx(n.alternate,n,ma);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);rn===0&&(rn=5)}function k0(e,n){do{var a=Fx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);rn=6,ve=null}function X0(e,n,a,o,c,f,v,R,H){e.cancelPendingCommit=null;do jl();while(Sn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,Ge(e,a,f,v,R,H),e===Ye&&(ve=Ye=null,Se=0),fr=n,Ya=e,ga=a,Lf=f,Of=c,L0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qx(Q,function(){return j0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=G.p,G.p=2,v=ze,ze|=4;try{Hx(e,n,a)}finally{ze=v,G.p=c,B.T=o}}Sn=1,W0(),q0(),Y0()}}function W0(){if(Sn===1){Sn=0;var e=Ya,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var c=ze;ze|=4;try{T0(n,e);var f=jf,v=Np(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Dp(R.ownerDocument.documentElement,R)){if(H!==null&&xu(R)){var ot=H.start,St=H.end;if(St===void 0&&(St=ot),"selectionStart"in R)R.selectionStart=ot,R.selectionEnd=Math.min(St,R.value.length);else{var yt=R.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),Kt=R.textContent.length,ee=Math.min(H.start,Kt),We=H.end===void 0?ee:Math.min(H.end,Kt);!ht.extend&&ee>We&&(v=We,We=ee,ee=v);var J=wp(R,ee),W=wp(R,We);if(J&&W&&(ht.rangeCount!==1||ht.anchorNode!==J.node||ht.anchorOffset!==J.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var rt=yt.createRange();rt.setStart(J.node,J.offset),ht.removeAllRanges(),ee>We?(ht.addRange(rt),ht.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),ht.addRange(rt))}}}}for(yt=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var Mt=yt[R];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}oc=!!Zf,jf=Zf=null}finally{ze=c,G.p=o,B.T=a}}e.current=n,Sn=2}}function q0(){if(Sn===2){Sn=0;var e=Ya,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var c=ze;ze|=4;try{S0(e,n.alternate,n)}finally{ze=c,G.p=o,B.T=a}}Sn=3}}function Y0(){if(Sn===4||Sn===3){Sn=0,Z();var e=Ya,n=fr,a=ga,o=L0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,fr=Ya=null,Z0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(qa=null),Xr(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=G.p,G.p=2,B.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=c}}(ga&3)!==0&&jl(),ki(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Pf?bo++:(bo=0,Pf=e):bo=0,To(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function jl(){return W0(),q0(),Y0(),j0()}function j0(){if(Sn!==5)return!1;var e=Ya,n=Lf;Lf=0;var a=Xr(ga),o=B.T,c=G.p;try{G.p=32>a?32:a,B.T=null,a=Of,Of=null;var f=Ya,v=ga;if(Sn=0,fr=Ya=null,ga=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,D0(f.current),R0(f,f.current,v,a),ze=R,To(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(gt,f)}catch{}return!0}finally{G.p=c,B.T=o,Z0(e,n)}}function K0(e,n,a){n=vi(a,n),n=hf(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(Zt(e,2),ki(e))}function Fe(e,n,a){if(e.tag===3)K0(e,e,a);else for(;n!==null;){if(n.tag===3){K0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=vi(a,e),a=Qm(2),o=Ha(n,a,2),o!==null&&(Jm(a,o,n,e),Zt(o,2),ki(o));break}}n=n.return}}function Bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Df=!0,c.add(a),e=Zx.bind(null,e,n,a),n.then(e,e))}function Zx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Se&a)===a&&(rn===4||rn===3&&(Se&62914560)===Se&&300>Ne()-kl?(ze&2)===0&&dr(e,0):Nf|=a,ur===Se&&(ur=0)),ki(e)}function Q0(e,n){n===0&&(n=bt()),e=gs(e,n),e!==null&&(Zt(e,n),ki(e))}function jx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(e,a)}function Kx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Q0(e,a)}function Qx(e,n){return ln(e,n)}var Kl=null,pr=null,Ff=!1,Ql=!1,Hf=!1,ja=0;function ki(e){e!==pr&&e.next===null&&(pr===null?Kl=pr=e:pr=pr.next=e),Ql=!0,Ff||(Ff=!0,$x())}function To(e,n){if(!Hf&&Ql){Hf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ht(42|e)+1)-1,f&=c&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,eg(o,f))}else f=Se,f=xt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,eg(o,f));o=o.next}while(a);Hf=!1}}function Jx(){J0()}function J0(){Ql=Ff=!1;var e=0;ja!==0&&cS()&&(e=ja);for(var n=Ne(),a=null,o=Kl;o!==null;){var c=o.next,f=$0(o,n);f===0?(o.next=null,a===null?Kl=c:a.next=c,c===null&&(pr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ql=!0)),o=c}Sn!==0&&Sn!==5||To(e),ja!==0&&(ja=0)}function $0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ht(f),R=1<<v,H=c[v];H===-1?((R&a)===0||(R&o)!==0)&&(c[v]=Vt(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Ye,a=Se,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Pe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Pe(o),Xr(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=mt;break;default:a=Q}return o=tg.bind(null,e),a=ln(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Pe(o),e.callbackPriority=2,e.callbackNode=null,2}function tg(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var o=Se;return o=xt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(P0(e,o,n),$0(e,Ne()),e.callbackNode!=null&&e.callbackNode===a?tg.bind(null,e):null)}function eg(e,n){if(jl())return null;P0(e,n,!0)}function $x(){fS(function(){(ze&6)!==0?ln(P,Jx):J0()})}function Gf(){if(ja===0){var e=$s;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),ja=e}return ja}function ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function tS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=ng((c[Tn]||null).action),v=o.submitter;v&&(n=(n=v[Tn]||null)?ng(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new cl("action","action",null,o,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=v?ig(c,v):new FormData(c);of(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=v?ig(c,v):new FormData(c),of(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var Vf=0;Vf<Eu.length;Vf++){var kf=Eu[Vf],eS=kf.toLowerCase(),nS=kf[0].toUpperCase()+kf.slice(1);Ci(eS,"on"+nS)}Ci(Op,"onAnimationEnd"),Ci(Pp,"onAnimationIteration"),Ci(Ip,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(vx,"onTransitionRun"),Ci(xx,"onTransitionStart"),Ci(Sx,"onTransitionCancel"),Ci(zp,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],H=R.instance,ot=R.currentTarget;if(R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=ot;try{f(c)}catch(St){dl(St)}c.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(R=o[v],H=R.instance,ot=R.currentTarget,R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=ot;try{f(c)}catch(St){dl(St)}c.currentTarget=null,f=H}}}}function xe(e,n){var a=n[us];a===void 0&&(a=n[us]=new Set);var o=e+"__bubble";a.has(o)||(sg(n,e,2,!1),a.add(o))}function Xf(e,n,a){var o=0;n&&(o|=4),sg(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[Jl]){e[Jl]=!0,sl.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||Xf(a,!1,e),Xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Xf("selectionchange",!1,n))}}function sg(e,n,a,o){switch(Og(n)){case 2:var c=NS;break;case 8:c=US;break;default:c=rd}a=c.bind(null,n,a,e),c=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function qf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===c)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;R!==null;){if(v=ta(R),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue t}R=R.parentNode}}o=o.return}up(function(){var ot=f,St=lu(a),yt=[];t:{var ct=Bp.get(e);if(ct!==void 0){var ht=cl,Kt=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ht=Kv;break;case"focusin":Kt="focus",ht=pu;break;case"focusout":Kt="blur",ht=pu;break;case"beforeblur":case"afterblur":ht=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=$v;break;case Op:case Pp:case Ip:ht=Gv;break;case zp:ht=ex;break;case"scroll":case"scrollend":ht=Iv;break;case"wheel":ht=ix;break;case"copy":case"cut":case"paste":ht=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=mp;break;case"toggle":case"beforetoggle":ht=sx}var ee=(n&4)!==0,We=!ee&&(e==="scroll"||e==="scrollend"),J=ee?ct!==null?ct+"Capture":null:ct;ee=[];for(var W=ot,rt;W!==null;){var Mt=W;if(rt=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||rt===null||J===null||(Mt=Yr(W,J),Mt!=null&&ee.push(Ro(W,Mt,rt))),We)break;W=W.return}0<ee.length&&(ct=new ht(ct,Kt,null,a,St),yt.push({event:ct,listeners:ee}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&a!==ou&&(Kt=a.relatedTarget||a.fromElement)&&(ta(Kt)||Kt[Wn]))break t;if((ht||ct)&&(ct=St.window===St?St:(ct=St.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?(Kt=a.relatedTarget||a.toElement,ht=ot,Kt=Kt?ta(Kt):null,Kt!==null&&(We=u(Kt),ee=Kt.tag,Kt!==We||ee!==5&&ee!==27&&ee!==6)&&(Kt=null)):(ht=null,Kt=ot),ht!==Kt)){if(ee=hp,Mt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ee=mp,Mt="onPointerLeave",J="onPointerEnter",W="pointer"),We=ht==null?ct:ds(ht),rt=Kt==null?ct:ds(Kt),ct=new ee(Mt,W+"leave",ht,a,St),ct.target=We,ct.relatedTarget=rt,Mt=null,ta(St)===ot&&(ee=new ee(J,W+"enter",Kt,a,St),ee.target=rt,ee.relatedTarget=We,Mt=ee),We=Mt,ht&&Kt)e:{for(ee=aS,J=ht,W=Kt,rt=0,Mt=J;Mt;Mt=ee(Mt))rt++;Mt=0;for(var $t=W;$t;$t=ee($t))Mt++;for(;0<rt-Mt;)J=ee(J),rt--;for(;0<Mt-rt;)W=ee(W),Mt--;for(;rt--;){if(J===W||W!==null&&J===W.alternate){ee=J;break e}J=ee(J),W=ee(W)}ee=null}else ee=null;ht!==null&&rg(yt,ct,ht,ee,!1),Kt!==null&&We!==null&&rg(yt,We,Kt,ee,!0)}}t:{if(ct=ot?ds(ot):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var Ue=Ep;else if(Mp(ct))if(bp)Ue=mx;else{Ue=hx;var Qt=dx}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&mi(ot.elementType)&&(Ue=Ep):Ue=px;if(Ue&&(Ue=Ue(e,ot))){yp(yt,Ue,a,St);break t}Qt&&Qt(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&xn(ct,"number",ct.value)}switch(Qt=ot?ds(ot):window,e){case"focusin":(Mp(Qt)||Qt.contentEditable==="true")&&(Ws=Qt,Su=ot,eo=null);break;case"focusout":eo=Su=Ws=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Up(yt,a,St);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":Up(yt,a,St)}var ue;if(gu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Xs?xp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(gp&&a.locale!=="ko"&&(Xs||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Xs&&(ue=fp()):(La=St,fu="value"in La?La.value:La.textContent,Xs=!0)),Qt=$l(ot,Me),0<Qt.length&&(Me=new pp(Me,e,null,a,St),yt.push({event:Me,listeners:Qt}),ue?Me.data=ue:(ue=Sp(a),ue!==null&&(Me.data=ue)))),(ue=ox?lx(e,a):cx(e,a))&&(Me=$l(ot,"onBeforeInput"),0<Me.length&&(Qt=new pp("onBeforeInput","beforeinput",null,a,St),yt.push({event:Qt,listeners:Me}),Qt.data=ue)),tS(yt,e,ot,a,St)}ag(yt,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Yr(e,a),c!=null&&o.unshift(Ro(e,c,f)),c=Yr(e,n),c!=null&&o.push(Ro(e,c,f))),e.tag===3)return o;e=e.return}return[]}function aS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rg(e,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,H=R.alternate,ot=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ot===null||(H=ot,c?(ot=Yr(a,f),ot!=null&&v.unshift(Ro(a,ot,H))):c||(ot=Yr(a,f),ot!=null&&v.push(Ro(a,ot,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var sS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(sS,`
`).replace(rS,"")}function lg(e,n){return n=og(n),og(e)===n}function Xe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":tn(e,o,f);break;case"data":if(n!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ri(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",c.name,c,null),Xe(e,n,"formEncType",c.formEncType,c,null),Xe(e,n,"formMethod",c.formMethod,c,null),Xe(e,n,"formTarget",c.formTarget,c,null)):(Xe(e,n,"encType",c.encType,c,null),Xe(e,n,"method",c.method,c,null),Xe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ri(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=gi);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ri(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ve.get(a)||a,Wt(e,a,o))}}function Yf(e,n,a,o,c,f){switch(a){case"style":tn(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,v,a,null)}}c&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var R=f=v=c=null,H=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var St=a[o];if(St!=null)switch(o){case"name":c=St;break;case"type":v=St;break;case"checked":H=St;break;case"defaultChecked":ot=St;break;case"value":f=St;break;case"defaultValue":R=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(s(137,n));break;default:Xe(e,n,o,St,a,null)}}qt(e,f,R,H,ot,v,c,!1);return;case"select":xe("invalid",e),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Xe(e,n,c,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?he(e,!!o,n,!1):a!=null&&he(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,v,R,a,null)}ei(e,o,c,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,H,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)xe(Ao[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,ot,o,a,null)}return;default:if(mi(n)){for(St in a)a.hasOwnProperty(St)&&(o=a[St],o!==void 0&&Yf(e,n,St,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function oS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,R=null,H=null,ot=null,St=null;for(ht in a){var yt=a[ht];if(a.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":H=yt;default:o.hasOwnProperty(ht)||Xe(e,n,ht,null,o,yt)}}for(var ct in o){var ht=o[ct];if(yt=a[ct],o.hasOwnProperty(ct)&&(ht!=null||yt!=null))switch(ct){case"type":f=ht;break;case"name":c=ht;break;case"checked":ot=ht;break;case"defaultChecked":St=ht;break;case"value":v=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==yt&&Xe(e,n,ct,ht,o,yt)}}hn(e,v,R,H,ot,St,f,c);return;case"select":ht=v=R=ct=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ht=H;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,H)}for(c in o)if(f=o[c],H=a[c],o.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":ct=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==H&&Xe(e,n,c,f,o,H)}n=R,a=v,o=ht,ct!=null?he(e,!!a,ct,!1):!!o!=!!a&&(n!=null?he(e,!!a,n,!0):he(e,!!a,a?[]:"",!1));return;case"textarea":ht=ct=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ct=c;break;case"defaultValue":ht=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(e,n,v,c,o,f)}zn(e,ct,ht);return;case"option":for(var Kt in a)if(ct=a[Kt],a.hasOwnProperty(Kt)&&ct!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,n,Kt,null,o,ct)}for(H in o)if(ct=o[H],ht=a[H],o.hasOwnProperty(H)&&ct!==ht&&(ct!=null||ht!=null))switch(H){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:Xe(e,n,H,ct,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)ct=a[ee],a.hasOwnProperty(ee)&&ct!=null&&!o.hasOwnProperty(ee)&&Xe(e,n,ee,null,o,ct);for(ot in o)if(ct=o[ot],ht=a[ot],o.hasOwnProperty(ot)&&ct!==ht&&(ct!=null||ht!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Xe(e,n,ot,ct,o,ht)}return;default:if(mi(n)){for(var We in a)ct=a[We],a.hasOwnProperty(We)&&ct!==void 0&&!o.hasOwnProperty(We)&&Yf(e,n,We,void 0,o,ct);for(St in o)ct=o[St],ht=a[St],!o.hasOwnProperty(St)||ct===ht||ct===void 0&&ht===void 0||Yf(e,n,St,ct,o,ht);return}}for(var J in a)ct=a[J],a.hasOwnProperty(J)&&ct!=null&&!o.hasOwnProperty(J)&&Xe(e,n,J,null,o,ct);for(yt in o)ct=o[yt],ht=a[yt],!o.hasOwnProperty(yt)||ct===ht||ct==null&&ht==null||Xe(e,n,yt,ct,o,ht)}function cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,R=c.duration;if(f&&R&&cg(v)){for(v=0,R=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],ot=H.startTime;if(ot>R)break;var St=H.transferSize,yt=H.initiatorType;St&&cg(yt)&&(H=H.responseEnd,v+=St*(H<R?1:(R-ot)/(H-ot)))}if(--o,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,jf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function cS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(dS)}:dg;function dS(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function pg(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),vr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Co(e.ownerDocument.body);a=c}while(a);vr(n)}function mg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function pS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function gg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function _g(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function vg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function xg(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Da(e)}var bi=new Map,Sg=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=G.d;G.d={f:gS,r:_S,D:vS,C:xS,L:SS,m:MS,X:ES,S:yS,M:bS};function gS(){var e=_a.f(),n=ql();return e||n}function _S(e){var n=ea(e);n!==null&&n.tag===5&&n.type==="form"?zm(n):_a.r(e)}var mr=typeof document>"u"?null:document;function Mg(e,n,a){var o=mr;if(o&&typeof n=="string"&&n){var c=de(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Sg.has(c)||(Sg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",e),dn(n),o.head.appendChild(n)))}}function vS(e){_a.D(e),Mg("dns-prefetch",e,null)}function xS(e,n){_a.C(e,n),Mg("preconnect",e,n)}function SS(e,n,a){_a.L(e,n,a);var o=mr;if(o&&e&&n){var c='link[rel="preload"][as="'+de(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+de(a.imageSizes)+'"]')):c+='[href="'+de(e)+'"]';var f=c;switch(n){case"style":f=gr(e);break;case"script":f=_r(e)}bi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(wo(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),wn(n,"link",e),dn(n),o.head.appendChild(n)))}}function MS(e,n){_a.m(e,n);var a=mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_r(e)}if(!bi.has(f)&&(e=S({rel:"modulepreload",href:e},n),bi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),wn(o,"link",e),dn(o),a.head.appendChild(o)}}}function yS(e,n,a){_a.S(e,n,a);var o=mr;if(o&&e){var c=Na(o).hoistableStyles,f=gr(e);n=n||"default";var v=c.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(wo(f)))R.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(f))&&nd(e,a);var H=v=o.createElement("link");dn(H),wn(H,"link",e),H._p=new Promise(function(ot,St){H.onload=ot,H.onerror=St}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},c.set(f,v)}}}function ES(e,n){_a.X(e,n);var a=mr;if(a&&e){var o=Na(a).hoistableScripts,c=_r(e),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(e=S({src:e,async:!0},n),(n=bi.get(c))&&id(e,n),f=a.createElement("script"),dn(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function bS(e,n){_a.M(e,n);var a=mr;if(a&&e){var o=Na(a).hoistableScripts,c=_r(e),f=o.get(c);f||(f=a.querySelector(Do(c)),f||(e=S({src:e,async:!0,type:"module"},n),(n=bi.get(c))&&id(e,n),f=a.createElement("script"),dn(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function yg(e,n,a,o){var c=(c=Gt.current)?ec(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=Na(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var f=Na(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(wo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),f||TS(c,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=Na(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+de(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function Eg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function TS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),dn(n),e.head.appendChild(n))}function _r(e){return'[src="'+de(e)+'"]'}function Do(e){return"script[async]"+e}function bg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),dn(o),wn(o,"style",c),nc(o,a.precedence,e),n.instance=o;case"stylesheet":c=gr(a.href);var f=e.querySelector(wo(c));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=Eg(a),(c=bi.get(c))&&nd(o,c),f=(e.ownerDocument||e).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),wn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=_r(a.src),(c=e.querySelector(Do(f)))?(n.instance=c,dn(c),c):(o=a,(c=bi.get(f))&&(o=S({},a),id(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),dn(c),wn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function Tg(e,n,a){if(ic===null){var o=new Map,c=ic=new Map;c.set(a,o)}else c=ic,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[wa]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Ag(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function AS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gr(o.href),f=n.querySelector(wo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=Eg(o),(c=bi.get(c))&&nd(o,c),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function CS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ad===0&&(ad=62500*lS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(wS,e),sc=null,ac.call(e))}function wS(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=ac.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var No={$$typeof:I,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function DS(e,n,a,o,c,f,v,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jt(0),this.hiddenUpdates=Jt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Cg(e,n,a,o,c,f,v,R,H,ot,St,yt){return e=new DS(e,n,a,v,H,ot,St,yt,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Hu(f),e}function wg(e){return e?(e=Zs,e):Zs}function Dg(e,n,a,o,c,f){c=wg(c),o.context===null?o.context=c:o.pendingContext=c,o=Fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ha(e,o,n),a!==null&&(Qn(a,e,n),lo(a,e,n))}function Ng(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sd(e,n){Ng(e,n),(e=e.alternate)&&Ng(e,n)}function Ug(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&Qn(n,e,67108864),sd(e,67108864)}}function Lg(e){if(e.tag===13||e.tag===31){var n=li();n=kr(n);var a=gs(e,n);a!==null&&Qn(a,e,n),sd(e,n)}}var oc=!0;function NS(e,n,a,o){var c=B.T;B.T=null;var f=G.p;try{G.p=2,rd(e,n,a,o)}finally{G.p=f,B.T=c}}function US(e,n,a,o){var c=B.T;B.T=null;var f=G.p;try{G.p=8,rd(e,n,a,o)}finally{G.p=f,B.T=c}}function rd(e,n,a,o){if(oc){var c=od(o);if(c===null)qf(e,n,o,lc,a),Pg(e,o);else if(OS(c,e,n,a,o))o.stopPropagation();else if(Pg(e,o),n&4&&-1<LS.indexOf(e)){for(;c!==null;){var f=ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Tt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var H=1<<31-Ht(v);R.entanglements[1]|=H,v&=~H}ki(f),(ze&6)===0&&(Xl=Ne()+500,To(0))}}break;case 31:case 13:R=gs(f,2),R!==null&&Qn(R,f,2),ql(),sd(f,2)}if(f=od(o),f===null&&qf(e,n,o,lc,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else qf(e,n,o,null,a)}}function od(e){return e=lu(e),ld(e)}var lc=null;function ld(e){if(lc=null,e=ta(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case P:return 2;case E:return 8;case Q:case lt:return 32;case mt:return 268435456;default:return 32}default:return 32}}var cd=!1,Qa=null,Ja=null,$a=null,Uo=new Map,Lo=new Map,ts=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ea(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function OS(e,n,a,o,c){switch(n){case"focusin":return Qa=Oo(Qa,e,n,a,o,c),!0;case"dragenter":return Ja=Oo(Ja,e,n,a,o,c),!0;case"mouseover":return $a=Oo($a,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Lo.set(f,Oo(Lo.get(f)||null,e,n,a,o,c)),!0}return!1}function Ig(e){var n=ta(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){Lg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){Lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=od(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=ea(a),n!==null&&Ug(n),e.blockedOn=a,!1;n.shift()}return!0}function zg(e,n,a){cc(e)&&a.delete(n)}function PS(){cd=!1,Qa!==null&&cc(Qa)&&(Qa=null),Ja!==null&&cc(Ja)&&(Ja=null),$a!==null&&cc($a)&&($a=null),Uo.forEach(zg),Lo.forEach(zg)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,cd||(cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var fc=null;function Bg(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var f=ea(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vr(e){function n(H){return uc(H,e)}Qa!==null&&uc(Qa,e),Ja!==null&&uc(Ja,e),$a!==null&&uc($a,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[Tn]||null;if(typeof f=="function")v||Bg(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[Tn]||null)R=v.formAction;else if(ld(c)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Bg(a)}}}function Fg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ud(e){this._internalRoot=e}dc.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();Dg(a,o,e,n,null,null)},dc.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dg(e.current,2,null,e,null,null),ql(),n[Wn]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,e),a===0&&Ig(e)}};var Hg=t.version;if(Hg!=="19.2.8")throw Error(s(527,Hg,"19.2.8"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var IS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{gt=hc.inject(IS),_t=hc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Ym,f=Zm,v=jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Cg(e,1,!1,null,null,a,o,null,c,f,v,Fg),e[Wn]=n.current,Wf(e),new ud(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=Ym,v=Zm,R=jm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Cg(e,1,!0,n,a??null,o,c,H,f,v,R,Fg),n.context=wg(null),a=n.current,o=li(),o=kr(o),c=Fa(o),c.callback=null,Ha(a,c,o),a=o,n.current.lanes=a,Zt(n,a),ki(n),e[Wn]=n.current,Wf(e),new dc(n)},Io.version="19.2.8",Io}var Kg;function qS(){if(Kg)return hd.exports;Kg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hd.exports=WS(),hd.exports}var YS=qS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="186",ZS=0,Qg=1,jS=2,Fc=1,KS=2,Wo=3,zs=0,$n=1,Oi=2,Ta=0,Yo=1,Jg=2,$g=3,t_=4,QS=5,Ur=100,JS=101,$S=102,tM=103,eM=104,nM=200,iM=201,aM=202,sM=203,J_=204,$_=205,rM=206,oM=207,lM=208,cM=209,uM=210,fM=211,dM=212,hM=213,pM=214,$d=0,th=1,eh=2,Ko=3,nh=4,ih=5,ah=6,sh=7,Xh=0,mM=1,gM=2,Ki=0,tv=1,ev=2,nv=3,iv=4,av=5,sv=6,rv=7,ov=300,Bs=301,zr=302,_d=303,vd=304,nu=306,rh=1e3,ba=1001,oh=1002,Dn=1003,_M=1004,pc=1005,In=1006,xd=1007,Ps=1008,pi=1009,lv=1010,cv=1011,Qo=1012,Wh=1013,Qi=1014,Zi=1015,Ji=1016,qh=1017,Yh=1018,Jo=1020,uv=35902,fv=35899,dv=1021,hv=1022,Ii=1023,Ca=1026,Is=1027,pv=1028,Zh=1029,Fs=1030,jh=1031,Kh=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37488,gh=37489,Wc=37490,_h=37491,vh=37808,xh=37809,Sh=37810,Mh=37811,yh=37812,Eh=37813,bh=37814,Th=37815,Ah=37816,Rh=37817,Ch=37818,wh=37819,Dh=37820,Nh=37821,Uh=36492,Lh=36494,Oh=36495,Ph=36283,Ih=36284,qc=36285,zh=36286,vM=3200,Bh=0,xM=1,ls="",Ai="srgb",Yc="srgb-linear",Zc="linear",He="srgb",Sd=7680,SM=519,MM=512,yM=513,EM=514,Qh=515,bM=516,TM=517,Jh=518,AM=519,RM=35044,e_="300 es",ji=2e3,$o=2001;function CM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function jc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wM(){const r=jc("canvas");return r.style.display="block",r}const n_={};function i_(...r){const t="THREE."+r.shift();console.log(t,...r)}function mv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ie(...r){r=mv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Oe(...r){r=mv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Pr(...r){const t=r.join(" ");t in n_||(n_[t]=!0,ie(...r))}function DM(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const NM={[$d]:th,[eh]:ah,[nh]:sh,[Ko]:ih,[th]:$d,[ah]:eh,[sh]:nh,[ih]:Ko};class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a_=1234567;const Zo=Math.PI/180,tl=180/Math.PI;function Fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function $h(r,t){return(r%t+t)%t}function UM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function LM(r,t,i){return r!==t?(i-r)/(t-r):0}function jo(r,t,i){return(1-i)*r+i*t}function OM(r,t,i,s){return jo(r,t,1-Math.exp(-i*s))}function PM(r,t=1){return t-Math.abs($h(r,t*2)-t)}function IM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function zM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function BM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function FM(r,t){return r+Math.random()*(t-r)}function HM(r){return r*(.5-Math.random())}function GM(r){r!==void 0&&(a_=r);let t=a_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function VM(r){return r*Zo}function kM(r){return r*tl}function XM(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function WM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function YM(r,t,i,s,l){const u=Math.cos,d=Math.sin,p=u(i/2),m=d(i/2),h=u((t+s)/2),x=d((t+s)/2),S=u((t-s)/2),g=d((t-s)/2),y=u((s-t)/2),A=d((s-t)/2);switch(l){case"XYX":r.set(p*x,m*S,m*g,p*h);break;case"YZY":r.set(m*g,p*x,m*S,p*h);break;case"ZXZ":r.set(m*S,m*g,p*x,p*h);break;case"XZX":r.set(p*x,m*A,m*y,p*h);break;case"YXY":r.set(m*y,p*x,m*A,p*h);break;case"ZYZ":r.set(m*A,m*y,p*x,p*h);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zo={DEG2RAD:Zo,RAD2DEG:tl,generateUUID:Fr,clamp:ye,euclideanModulo:$h,mapLinear:UM,inverseLerp:LM,lerp:jo,damp:OM,pingpong:PM,smoothstep:IM,smootherstep:zM,randInt:BM,randFloat:FM,randFloatSpread:HM,seededRandom:GM,degToRad:VM,radToDeg:kM,isPowerOfTwo:XM,ceilPowerOfTwo:WM,floorPowerOfTwo:qM,setQuaternionFromProperEuler:YM,normalize:Hn,denormalize:Lr},ap=class ap{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ap.prototype.isVector2=!0;let Ee=ap;class Hr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],S=s[l+3],g=u[d+0],y=u[d+1],A=u[d+2],w=u[d+3];if(S!==w||m!==g||h!==y||x!==A){let M=m*g+h*y+x*A+S*w;M<0&&(g=-g,y=-y,A=-A,w=-w,M=-M);let _=1-p;if(M<.9995){const U=Math.acos(M),I=Math.sin(U);_=Math.sin(_*U)/I,p=Math.sin(p*U)/I,m=m*_+g*p,h=h*_+y*p,x=x*_+A*p,S=S*_+w*p}else{m=m*_+g*p,h=h*_+y*p,x=x*_+A*p,S=S*_+w*p;const U=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=U,h*=U,x*=U,S*=U}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],S=u[d],g=u[d+1],y=u[d+2],A=u[d+3];return t[i]=p*A+x*S+m*y-h*g,t[i+1]=m*A+x*g+h*S-p*y,t[i+2]=h*A+x*y+p*g-m*S,t[i+3]=x*A-p*S-m*g-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),S=p(u/2),g=m(s/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=g*x*S+h*y*A,this._y=h*y*S-g*x*A,this._z=h*x*A+g*y*S,this._w=h*x*S-g*y*A;break;case"YXZ":this._x=g*x*S+h*y*A,this._y=h*y*S-g*x*A,this._z=h*x*A-g*y*S,this._w=h*x*S+g*y*A;break;case"ZXY":this._x=g*x*S-h*y*A,this._y=h*y*S+g*x*A,this._z=h*x*A+g*y*S,this._w=h*x*S-g*y*A;break;case"ZYX":this._x=g*x*S-h*y*A,this._y=h*y*S+g*x*A,this._z=h*x*A-g*y*S,this._w=h*x*S+g*y*A;break;case"YZX":this._x=g*x*S+h*y*A,this._y=h*y*S+g*x*A,this._z=h*x*A-g*y*S,this._w=h*x*S-g*y*A;break;case"XZY":this._x=g*x*S-h*y*A,this._y=h*y*S-g*x*A,this._z=h*x*A+g*y*S,this._w=h*x*S+g*y*A;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],g=s+p+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(u-h)*y,this._z=(d-l)*y}else if(s>p&&s>S){const y=2*Math.sqrt(1+s-p-S);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+h)/y}else if(p>S){const y=2*Math.sqrt(1+p-s-S);this._w=(u-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+S-s-p);this._w=(d-l)/y,this._x=(u+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-u*m,this._y=l*x+d*m+u*p-s*h,this._z=u*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),x=2*(p*i-u*l),S=2*(u*s-d*i);return this.x=i+m*h+d*S-p*x,this.y=s+m*x+p*h-u*S,this.z=l+m*S+u*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let et=sp;const Md=new et,s_=new Hr,rp=class rp{constructor(t,i,s,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,m,h)}set(t,i,s,l,u,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],S=s[7],g=s[2],y=s[5],A=s[8],w=l[0],M=l[3],_=l[6],U=l[1],I=l[4],C=l[7],L=l[2],N=l[5],z=l[8];return u[0]=d*w+p*U+m*L,u[3]=d*M+p*I+m*N,u[6]=d*_+p*C+m*z,u[1]=h*w+x*U+S*L,u[4]=h*M+x*I+S*N,u[7]=h*_+x*C+S*z,u[2]=g*w+y*U+A*L,u[5]=g*M+y*I+A*N,u[8]=g*_+y*C+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-s*u*x+s*p*m+l*u*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=x*d-p*h,g=p*m-x*u,y=h*u-d*m,A=i*S+s*g+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(l*h-x*s)*w,t[2]=(p*s-l*d)*w,t[3]=g*w,t[4]=(x*i-l*m)*w,t[5]=(l*u-p*i)*w,t[6]=y*w,t[7]=(s*m-h*i)*w,t[8]=(d*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(t,i)),this}rotate(t){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-t)),this}translate(t,i){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rp.prototype.isMatrix3=!0;let re=rp;const yd=new re,r_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZM(){const r={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===He&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===He&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yc]:{primaries:t,whitePoint:s,transfer:Zc,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:He,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Re=ZM();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class jM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=jc("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Aa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KM=0;class tp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(Ed(l[d].image)):u.push(Ed(l[d]))}else u=Ed(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Ed(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let QM=0;const bd=new et;class Vn extends Hs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ba,l=ba,u=In,d=Ps,p=Ii,m=pi,h=Vn.DEFAULT_ANISOTROPY,x=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Fr(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rh:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rh:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ov;Vn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,h=m[0],x=m[4],S=m[8],g=m[1],y=m[5],A=m[9],w=m[2],M=m[6],_=m[10];if(Math.abs(x-g)<.01&&Math.abs(S-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+w)<.1&&Math.abs(A+M)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,C=(y+1)/2,L=(_+1)/2,N=(x+g)/4,z=(S+w)/4,b=(A+M)/4;return I>C&&I>L?I<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(I),l=N/s,u=z/s):C>L?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=N/l,u=b/l):L<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),s=z/u,l=b/u),this.set(s,l,u,i),this}let U=Math.sqrt((M-A)*(M-A)+(S-w)*(S-w)+(g-x)*(g-x));return Math.abs(U)<.001&&(U=1),this.x=(M-A)/U,this.y=(S-w)/U,this.z=(g-x)/U,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let nn=op;class JM extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new Vn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new tp(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends JM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class gv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $M extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const eu=class eu{constructor(t,i,s,l,u,d,p,m,h,x,S,g,y,A,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,p,m,h,x,S,g,y,A,w,M)}set(t,i,s,l,u,d,p,m,h,x,S,g,y,A,w,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=A,_[11]=w,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),u=1/Sr.setFromMatrixColumn(t,1).length(),d=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(u),S=Math.sin(u);if(t.order==="XYZ"){const g=d*x,y=d*S,A=p*x,w=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=y+A*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=A+y*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,y=m*S,A=h*x,w=h*S;i[0]=g+w*p,i[4]=A*p-y,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=y*p-A,i[6]=w+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,y=m*S,A=h*x,w=h*S;i[0]=g-w*p,i[4]=-d*S,i[8]=A+y*p,i[1]=y+A*p,i[5]=d*x,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,y=d*S,A=p*x,w=p*S;i[0]=m*x,i[4]=A*h-y,i[8]=g*h+w,i[1]=m*S,i[5]=w*h+g,i[9]=y*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,y=d*h,A=p*m,w=p*h;i[0]=m*x,i[4]=w-g*S,i[8]=A*S+y,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=y*S+A,i[10]=g-w*S}else if(t.order==="XZY"){const g=d*m,y=d*h,A=p*m,w=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=g*S+w,i[5]=d*x,i[9]=y*S-A,i[2]=A*S-y,i[6]=p*x,i[10]=w*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ty,t,ey)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ns.crossVectors(s,ci),ns.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ns.crossVectors(s,ci)),ns.normalize(),mc.crossVectors(ci,ns),l[0]=ns.x,l[4]=mc.x,l[8]=ci.x,l[1]=ns.y,l[5]=mc.y,l[9]=ci.y,l[2]=ns.z,l[6]=mc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],S=s[5],g=s[9],y=s[13],A=s[2],w=s[6],M=s[10],_=s[14],U=s[3],I=s[7],C=s[11],L=s[15],N=l[0],z=l[4],b=l[8],O=l[12],V=l[1],Y=l[5],j=l[9],st=l[13],q=l[2],K=l[6],B=l[10],G=l[14],ut=l[3],at=l[7],dt=l[11],D=l[15];return u[0]=d*N+p*V+m*q+h*ut,u[4]=d*z+p*Y+m*K+h*at,u[8]=d*b+p*j+m*B+h*dt,u[12]=d*O+p*st+m*G+h*D,u[1]=x*N+S*V+g*q+y*ut,u[5]=x*z+S*Y+g*K+y*at,u[9]=x*b+S*j+g*B+y*dt,u[13]=x*O+S*st+g*G+y*D,u[2]=A*N+w*V+M*q+_*ut,u[6]=A*z+w*Y+M*K+_*at,u[10]=A*b+w*j+M*B+_*dt,u[14]=A*O+w*st+M*G+_*D,u[3]=U*N+I*V+C*q+L*ut,u[7]=U*z+I*Y+C*K+L*at,u[11]=U*b+I*j+C*B+L*dt,u[15]=U*O+I*st+C*G+L*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],S=t[6],g=t[10],y=t[14],A=t[3],w=t[7],M=t[11],_=t[15],U=m*y-h*g,I=p*y-h*S,C=p*g-m*S,L=d*y-h*x,N=d*g-m*x,z=d*S-p*x;return i*(w*U-M*I+_*C)-s*(A*U-M*L+_*N)+l*(A*I-w*L+_*z)-u*(A*C-w*N+M*z)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],h=t[6],x=t[10];return i*(d*x-p*h)-s*(u*x-p*m)+l*(u*h-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=t[9],g=t[10],y=t[11],A=t[12],w=t[13],M=t[14],_=t[15],U=i*p-s*d,I=i*m-l*d,C=i*h-u*d,L=s*m-l*p,N=s*h-u*p,z=l*h-u*m,b=x*w-S*A,O=x*M-g*A,V=x*_-y*A,Y=S*M-g*w,j=S*_-y*w,st=g*_-y*M,q=U*st-I*j+C*Y+L*V-N*O+z*b;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/q;return t[0]=(p*st-m*j+h*Y)*K,t[1]=(l*j-s*st-u*Y)*K,t[2]=(w*z-M*N+_*L)*K,t[3]=(g*N-S*z-y*L)*K,t[4]=(m*V-d*st-h*O)*K,t[5]=(i*st-l*V+u*O)*K,t[6]=(M*C-A*z-_*I)*K,t[7]=(x*z-g*C+y*I)*K,t[8]=(d*j-p*V+h*b)*K,t[9]=(s*V-i*j-u*b)*K,t[10]=(A*N-w*C+_*U)*K,t[11]=(S*C-x*N-y*U)*K,t[12]=(p*O-d*Y-m*b)*K,t[13]=(i*Y-s*O+l*b)*K,t[14]=(w*I-A*L-M*U)*K,t[15]=(x*L-S*I+g*U)*K,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,p=t.y,m=t.z,h=u*d,x=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,x=d+d,S=p+p,g=u*h,y=u*x,A=u*S,w=d*x,M=d*S,_=p*S,U=m*h,I=m*x,C=m*S,L=s.x,N=s.y,z=s.z;return l[0]=(1-(w+_))*L,l[1]=(y+C)*L,l[2]=(A-I)*L,l[3]=0,l[4]=(y-C)*N,l[5]=(1-(g+_))*N,l[6]=(M+U)*N,l[7]=0,l[8]=(A+I)*z,l[9]=(M-U)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let d=Sr.set(l[0],l[1],l[2]).length();const p=Sr.set(l[4],l[5],l[6]).length(),m=Sr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ni.copy(this);const h=1/d,x=1/p,S=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=S,Ni.elements[9]*=S,Ni.elements[10]*=S,i.setFromRotationMatrix(Ni),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,u,d,p=ji,m=!1){const h=this.elements,x=2*u/(i-t),S=2*u/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let A,w;if(m)A=u/(d-u),w=d*u/(d-u);else if(p===ji)A=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(p===$o)A=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,u,d,p=ji,m=!1){const h=this.elements,x=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let A,w;if(m)A=1/(d-u),w=d/(d-u);else if(p===ji)A=-2/(d-u),w=-(d+u)/(d-u);else if(p===$o)A=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=A,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};eu.prototype.isMatrix4=!0;let an=eu;const Sr=new et,Ni=new an,ty=new et(0,0,0),ey=new et(1,1,1),ns=new et,mc=new et,ci=new et,l_=new an,c_=new Hr;class cs{constructor(t=0,i=0,s=0,l=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return l_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return c_.setFromEuler(this),this.setFromQuaternion(c_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ny=0;const u_=new et,Mr=new Hr,va=new an,gc=new et,Bo=new et,iy=new et,ay=new Hr,f_=new et(1,0,0),d_=new et(0,1,0),h_=new et(0,0,1),p_={type:"added"},sy={type:"removed"},yr={type:"childadded",child:null},Td={type:"childremoved",child:null};class Nn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new et,i=new cs,s=new Hr,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new re}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(f_,t)}rotateY(t){return this.rotateOnAxis(d_,t)}rotateZ(t){return this.rotateOnAxis(h_,t)}translateOnAxis(t,i){return u_.copy(t).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(f_,t)}translateY(t){return this.translateOnAxis(d_,t)}translateZ(t){return this.translateOnAxis(h_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Bo,gc,this.up):va.lookAt(gc,Bo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(va),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p_),yr.child=t,this.dispatchEvent(yr),yr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sy),Td.child=t,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p_),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let d=0,p=u.length;d<p;d++)u[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];u(t.shapes,S)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(t.materials,this.material[m]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),S=d(t.shapes),g=d(t.skeletons),y=d(t.animations),A=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nn.DEFAULT_UP=new et(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pn extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ry={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),_=this._getHandJoint(h,w);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,A=.005;h.inputState.pinching&&g>y+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=y-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Pn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Rd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=$h(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Rd(d,u,t+1/3),this.g=Rd(d,u,t),this.b=Rd(d,u,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function s(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const s=vv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Re.workingToColorSpace(On.copy(this),t),Math.round(ye(On.r*255,0,255))*65536+Math.round(ye(On.g*255,0,255))*256+Math.round(ye(On.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Ai){Re.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(_c);const s=jo(is.h,_c.h,i),l=jo(is.s,_c.s,i),u=jo(is.l,_c.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ce;Ce.NAMES=vv;class oy extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new et,xa=new et,Cd=new et,Sa=new et,Er=new et,br=new et,m_=new et,wd=new et,Dd=new et,Nd=new et,Ud=new nn,Ld=new nn,Od=new nn;class Pi{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ui.subVectors(l,i),xa.subVectors(s,i),Cd.subVectors(t,i);const d=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(Cd),h=xa.dot(xa),x=xa.dot(Cd),S=d*h-p*p;if(S===0)return u.set(0,0,0),null;const g=1/S,y=(h*m-p*x)*g,A=(d*x-p*m)*g;return u.set(1-y-A,A,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,u,d,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Sa.x),m.addScaledVector(d,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return Ud.setScalar(0),Ld.setScalar(0),Od.setScalar(0),Ud.fromBufferAttribute(t,i),Ld.fromBufferAttribute(t,s),Od.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ud,u.x),d.addScaledVector(Ld,u.y),d.addScaledVector(Od,u.z),d}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Pi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,p;Er.subVectors(l,s),br.subVectors(u,s),wd.subVectors(t,s);const m=Er.dot(wd),h=br.dot(wd);if(m<=0&&h<=0)return i.copy(s);Dd.subVectors(t,l);const x=Er.dot(Dd),S=br.dot(Dd);if(x>=0&&S<=x)return i.copy(l);const g=m*S-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Er,d);Nd.subVectors(t,u);const y=Er.dot(Nd),A=br.dot(Nd);if(A>=0&&y<=A)return i.copy(u);const w=y*h-m*A;if(w<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(br,p);const M=x*A-y*S;if(M<=0&&S-x>=0&&y-A>=0)return m_.subVectors(u,l),p=(S-x)/(S-x+(y-A)),i.copy(l).addScaledVector(m_,p);const _=1/(M+w+g);return d=w*_,p=g*_,i.copy(s).addScaledVector(Er,d).addScaledVector(br,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nl{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Li):Li.fromBufferAttribute(u,d),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),xc.subVectors(this.max,Fo),Tr.subVectors(t.a,Fo),Ar.subVectors(t.b,Fo),Rr.subVectors(t.c,Fo),as.subVectors(Ar,Tr),ss.subVectors(Rr,Ar),ws.subVectors(Tr,Rr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-ws.z,ws.y,as.z,0,-as.x,ss.z,0,-ss.x,ws.z,0,-ws.x,-as.y,as.x,0,-ss.y,ss.x,0,-ws.y,ws.x,0];return!Pd(i,Tr,Ar,Rr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Pd(i,Tr,Ar,Rr,xc))?!1:(Sc.crossVectors(as,ss),i=[Sc.x,Sc.y,Sc.z],Pd(i,Tr,Ar,Rr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new et,new et,new et,new et,new et,new et,new et,new et],Li=new et,vc=new nl,Tr=new et,Ar=new et,Rr=new et,as=new et,ss=new et,ws=new et,Fo=new et,xc=new et,Sc=new et,Ds=new et;function Pd(r,t,i,s,l){for(let u=0,d=r.length-3;u<=d;u+=3){Ds.fromArray(r,u);const p=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),h=i.dot(Ds),x=s.dot(Ds);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const vn=new et,Mc=new Ee;let ly=0;class Ra extends Hs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=RM,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class xv extends Ra{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Sv extends Ra{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class on extends Ra{constructor(t,i,s){super(new Float32Array(t),i,s)}}const cy=new nl,Ho=new et,Id=new et;class iu{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(Id)),this.expandByPoint(Ho.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let uy=0;const Ti=new an,zd=new Nn,Cr=new et,ui=new nl,Go=new nl,bn=new et;class kn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CM(t)?Sv:xv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new re().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return zd.lookAt(t),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new on(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,Go.min),ui.expandByPoint(bn),bn.addVectors(ui.max,Go.max),ui.expandByPoint(bn)):(ui.expandByPoint(Go.min),ui.expandByPoint(Go.max))}ui.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Cr.fromBufferAttribute(t,h),bn.add(Cr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ra(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new et,m[b]=new et;const h=new et,x=new et,S=new et,g=new Ee,y=new Ee,A=new Ee,w=new et,M=new et;function _(b,O,V){h.fromBufferAttribute(s,b),x.fromBufferAttribute(s,O),S.fromBufferAttribute(s,V),g.fromBufferAttribute(u,b),y.fromBufferAttribute(u,O),A.fromBufferAttribute(u,V),x.sub(h),S.sub(h),y.sub(g),A.sub(g);const Y=1/(y.x*A.y-A.x*y.y);isFinite(Y)&&(w.copy(x).multiplyScalar(A.y).addScaledVector(S,-y.y).multiplyScalar(Y),M.copy(S).multiplyScalar(y.x).addScaledVector(x,-A.x).multiplyScalar(Y),p[b].add(w),p[O].add(w),p[V].add(w),m[b].add(M),m[O].add(M),m[V].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let b=0,O=U.length;b<O;++b){const V=U[b],Y=V.start,j=V.count;for(let st=Y,q=Y+j;st<q;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const I=new et,C=new et,L=new et,N=new et;function z(b){L.fromBufferAttribute(l,b),N.copy(L);const O=p[b];I.copy(O),I.sub(L.multiplyScalar(L.dot(O))).normalize(),C.crossVectors(N,O);const Y=C.dot(m[b])<0?-1:1;d.setXYZW(b,I.x,I.y,I.z,Y)}for(let b=0,O=U.length;b<O;++b){const V=U[b],Y=V.start,j=V.count;for(let st=Y,q=Y+j;st<q;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new et,u=new et,d=new et,p=new et,m=new et,h=new et,x=new et,S=new et;if(t)for(let g=0,y=t.count;g<y;g+=3){const A=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),x.subVectors(d,u),S.subVectors(l,u),x.cross(S),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,M),p.add(x),m.add(x),h.add(x),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,u),S.subVectors(l,u),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,S=p.normalized,g=new h.constructor(m.length*x);let y=0,A=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*x;for(let _=0;_<x;_++)g[A++]=h[y++]}return new Ra(g,x,S)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let x=0,S=h.length;x<S;x++){const g=h[x],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,g=h.length;S<g;S++){const y=h[S];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const u=t.morphAttributes;for(const h in u){const x=[],S=u[h];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bd=new et,fy=new et,dy=new re;class os{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Bd.subVectors(s,i).cross(fy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Bd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||dy.getNormalMatrix(t),l=this.coplanarPoint(Bd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let hy=0;class Gr extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Yo,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J_,this.blendDst=$_,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sd,this.stencilZFail=Sd,this.stencilZPass=Sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new os().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ee().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new et,Fd=new et,yc=new et,Ec=new et;class Mv{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Fd.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ec.copy(this.origin).sub(Fd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(yc),p=Ec.dot(this.direction),m=-Ec.dot(yc),h=Ec.lengthSq(),x=Math.abs(1-d*d);let S,g,y,A;if(x>0)if(S=d*m-p,g=d*p-m,A=u*x,S>=0)if(g>=-A)if(g<=A){const w=1/x;S*=w,g*=w,y=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=u,S=Math.max(0,-(d*g+p)),y=-S*S+g*(g+2*m)+h;else g=-u,S=Math.max(0,-(d*g+p)),y=-S*S+g*(g+2*m)+h;else g<=-A?(S=Math.max(0,-(-d*u+p)),g=S>0?-u:Math.min(Math.max(-u,-m),u),y=-S*S+g*(g+2*m)+h):g<=A?(S=0,g=Math.min(Math.max(-u,-m),u),y=g*(g+2*m)+h):(S=Math.max(0,-(d*u+p)),g=S>0?u:Math.min(Math.max(-u,-m),u),y=-S*S+g*(g+2*m)+h);else g=d>0?-u:u,S=Math.max(0,-(d*g+p)),y=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Fd).addScaledVector(yc,g),y}intersectSphere(t,i){if(t.radius<0)return null;ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),x>=0?(u=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(u=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,u){const d=this.origin,p=this.direction,m=p.x,h=p.y,x=p.z,S=t.x-d.x,g=t.y-d.y,y=t.z-d.z,A=i.x-d.x,w=i.y-d.y,M=i.z-d.z,_=s.x-d.x,U=s.y-d.y,I=s.z-d.z,C=Math.abs(m),L=Math.abs(h),N=Math.abs(x);let z,b,O,V,Y,j,st,q,K,B,G,ut;if(C>=L&&C>=N?(O=m,j=S,K=A,ut=_,m>=0?(z=h,b=x,V=g,Y=y,st=w,q=M,B=U,G=I):(z=x,b=h,V=y,Y=g,st=M,q=w,B=I,G=U)):L>=N?(O=h,j=g,K=w,ut=U,h>=0?(z=x,b=m,V=y,Y=S,st=M,q=A,B=I,G=_):(z=m,b=x,V=S,Y=y,st=A,q=M,B=_,G=I)):(O=x,j=y,K=M,ut=I,x>=0?(z=m,b=h,V=S,Y=g,st=A,q=w,B=_,G=U):(z=h,b=m,V=g,Y=S,st=w,q=A,B=U,G=_)),O===0)return null;const at=z/O,dt=b/O,D=1/O,tt=V-at*j,pt=Y-dt*j,At=st-at*K,Pt=q-dt*K,Gt=B-at*ut,$=G-dt*ut,vt=Gt*Pt-$*At,Rt=tt*$-pt*Gt,te=At*pt-Pt*tt;if(l){if(vt<0||Rt<0||te<0)return null}else if((vt<0||Rt<0||te<0)&&(vt>0||Rt>0||te>0))return null;const Lt=vt+Rt+te;if(Lt===0)return null;const ae=D*(vt*j+Rt*K+te*ut);return(Lt>0?ae<0:ae>0)?null:this.at(ae/Lt,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Os extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const g_=new an,Ns=new Mv,bc=new iu,__=new et,Tc=new et,Ac=new et,Rc=new et,Hd=new et,Cc=new et,v_=new et,wc=new et;class Ae extends Nn{constructor(t=new kn,i=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){Cc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const x=p[m],S=u[m];x!==0&&(Hd.fromBufferAttribute(S,t),d?Cc.addScaledVector(Hd,x):Cc.addScaledVector(Hd.sub(i),x))}i.add(Cc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(u),Ns.copy(t.ray).recast(t.near),!(bc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(bc,__)===null||Ns.origin.distanceToSquared(__)>(t.far-t.near)**2))&&(g_.copy(u).invert(),Ns.copy(t.ray).applyMatrix4(g_),!(s.boundingBox!==null&&Ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ns)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,x=u.attributes.uv1,S=u.attributes.normal,g=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,w=g.length;A<w;A++){const M=g[A],_=d[M.materialIndex],U=Math.max(M.start,y.start),I=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=U,L=I;C<L;C+=3){const N=p.getX(C),z=p.getX(C+1),b=p.getX(C+2);l=Dc(this,_,t,s,h,x,S,N,z,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=A,_=w;M<_;M+=3){const U=p.getX(M),I=p.getX(M+1),C=p.getX(M+2);l=Dc(this,d,t,s,h,x,S,U,I,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,w=g.length;A<w;A++){const M=g[A],_=d[M.materialIndex],U=Math.max(M.start,y.start),I=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=U,L=I;C<L;C+=3){const N=C,z=C+1,b=C+2;l=Dc(this,_,t,s,h,x,S,N,z,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=A,_=w;M<_;M+=3){const U=M,I=M+1,C=M+2;l=Dc(this,d,t,s,h,x,S,U,I,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function py(r,t,i,s,l,u,d,p){let m;if(t.side===$n?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,t.side===zs,p),m===null)return null;wc.copy(p),wc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(wc);return h<i.near||h>i.far?null:{distance:h,point:wc.clone(),object:r}}function Dc(r,t,i,s,l,u,d,p,m,h){r.getVertexPosition(p,Tc),r.getVertexPosition(m,Ac),r.getVertexPosition(h,Rc);const x=py(r,t,i,s,Tc,Ac,Rc,v_);if(x){const S=new et;Pi.getBarycoord(v_,Tc,Ac,Rc,S),l&&(x.uv=Pi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),u&&(x.uv1=Pi.getInterpolatedAttribute(u,p,m,h,S,new Ee)),d&&(x.normal=Pi.getInterpolatedAttribute(d,p,m,h,S,new et),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new et,materialIndex:0};Pi.getNormal(Tc,Ac,Rc,g.normal),x.face=g,x.barycoord=S}return x}class my extends Vn{constructor(t=null,i=1,s=1,l,u,d,p,m,h=Dn,x=Dn,S,g){super(null,d,p,m,h,x,l,u,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Us=new iu,gy=new Ee(.5,.5),Nc=new et;class ep{constructor(t=new os,i=new os,s=new os,l=new os,u=new os,d=new os){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ji,s=!1){const l=this.planes,u=t.elements,d=u[0],p=u[1],m=u[2],h=u[3],x=u[4],S=u[5],g=u[6],y=u[7],A=u[8],w=u[9],M=u[10],_=u[11],U=u[12],I=u[13],C=u[14],L=u[15];if(l[0].setComponents(h-d,y-x,_-A,L-U).normalize(),l[1].setComponents(h+d,y+x,_+A,L+U).normalize(),l[2].setComponents(h+p,y+S,_+w,L+I).normalize(),l[3].setComponents(h-p,y-S,_-w,L-I).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(h-m,y-g,_-M,L-C).normalize();else if(l[4].setComponents(h-m,y-g,_-M,L-C).normalize(),i===ji)l[5].setComponents(h+m,y+g,_+M,L+C).normalize();else if(i===$o)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);const i=gy.distanceTo(t.center);return Us.radius=.7071067811865476+i,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?t.max.x:t.min.x,Nc.y=l.normal.y>0?t.max.y:t.min.y,Nc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yv extends Gr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new et,Qc=new et,x_=new an,Vo=new Mv,Uc=new iu,Gd=new et,S_=new et;class _y extends Nn{constructor(t=new kn,i=new yv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Kc.distanceTo(Qc);t.setAttribute("lineDistance",new on(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,t.ray.intersectsSphere(Uc)===!1)return;x_.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(x_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const y=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let w=y,M=A-1;w<M;w+=h){const _=x.getX(w),U=x.getX(w+1),I=Lc(this,t,Vo,m,_,U,w);I&&i.push(I)}if(this.isLineLoop){const w=x.getX(A-1),M=x.getX(y),_=Lc(this,t,Vo,m,w,M,A-1);_&&i.push(_)}}else{const y=Math.max(0,d.start),A=Math.min(g.count,d.start+d.count);for(let w=y,M=A-1;w<M;w+=h){const _=Lc(this,t,Vo,m,w,w+1,w);_&&i.push(_)}if(this.isLineLoop){const w=Lc(this,t,Vo,m,A-1,y,A-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Lc(r,t,i,s,l,u,d){const p=r.geometry.attributes.position;if(Kc.fromBufferAttribute(p,l),Qc.fromBufferAttribute(p,u),i.distanceSqToSegment(Kc,Qc,Gd,S_)>s)return;Gd.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Gd);if(!(h<t.near||h>t.far))return{distance:h,point:S_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}class Ev extends Vn{constructor(t=[],i=Bs,s,l,u,d,p,m,h,x){super(t,i,s,l,u,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class el extends Vn{constructor(t,i,s=Qi,l,u,d,p=Dn,m=Dn,h,x=Ca,S=1){if(x!==Ca&&x!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,u,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class vy extends el{constructor(t,i=Qi,s=Bs,l,u,d=Dn,p=Dn,m,h=Ca){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,u,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fi extends kn{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],x=[],S=[];let g=0,y=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(S,2));function A(w,M,_,U,I,C,L,N,z,b,O){const V=C/z,Y=L/b,j=C/2,st=L/2,q=N/2,K=z+1,B=b+1;let G=0,ut=0;const at=new et;for(let dt=0;dt<B;dt++){const D=dt*Y-st;for(let tt=0;tt<K;tt++){const pt=tt*V-j;at[w]=pt*U,at[M]=D*I,at[_]=q,h.push(at.x,at.y,at.z),at[w]=0,at[M]=0,at[_]=N>0?1:-1,x.push(at.x,at.y,at.z),S.push(tt/z),S.push(1-dt/b),G+=1}}for(let dt=0;dt<b;dt++)for(let D=0;D<z;D++){const tt=g+D+K*dt,pt=g+D+K*(dt+1),At=g+(D+1)+K*(dt+1),Pt=g+(D+1)+K*dt;m.push(tt,pt,Pt),m.push(pt,At,Pt),ut+=6}p.addGroup(y,ut,O),y+=ut,g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jn extends kn{constructor(t=1,i=1,s=1,l=32,u=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),u=Math.floor(u);const x=[],S=[],g=[],y=[];let A=0;const w=[],M=s/2;let _=0;U(),d===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new on(S,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(y,2));function U(){const C=new et,L=new et;let N=0;const z=(i-t)/s;for(let b=0;b<=u;b++){const O=[],V=b/u,Y=V*(i-t)+t;for(let j=0;j<=l;j++){const st=j/l,q=st*m+p,K=Math.sin(q),B=Math.cos(q);L.x=Y*K,L.y=-V*s+M,L.z=Y*B,S.push(L.x,L.y,L.z),C.set(K,z,B).normalize(),g.push(C.x,C.y,C.z),y.push(st,1-V),O.push(A++)}w.push(O)}for(let b=0;b<l;b++)for(let O=0;O<u;O++){const V=w[O][b],Y=w[O+1][b],j=w[O+1][b+1],st=w[O][b+1];(t>0||O!==0)&&(x.push(V,Y,st),N+=3),(i>0||O!==u-1)&&(x.push(Y,j,st),N+=3)}h.addGroup(_,N,0),_+=N}function I(C){const L=A,N=new Ee,z=new et;let b=0;const O=C===!0?t:i,V=C===!0?1:-1;for(let j=1;j<=l;j++)S.push(0,M*V,0),g.push(0,V,0),y.push(.5,.5),A++;const Y=A;for(let j=0;j<=l;j++){const q=j/l*m+p,K=Math.cos(q),B=Math.sin(q);z.x=O*B,z.y=M*V,z.z=O*K,S.push(z.x,z.y,z.z),g.push(0,V,0),N.x=K*.5+.5,N.y=B*.5*V+.5,y.push(N.x,N.y),A++}for(let j=0;j<l;j++){const st=L+j,q=Y+j;C===!0?x.push(q,q+1,st):x.push(q+1,q,st),b+=3}h.addGroup(_,b,C===!0?1:2),_+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class au extends kn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,S=t/p,g=i/m,y=[],A=[],w=[],M=[];for(let _=0;_<x;_++){const U=_*g-d;for(let I=0;I<h;I++){const C=I*S-u;A.push(C,-U,0),w.push(0,0,1),M.push(I/p),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<p;U++){const I=U+h*_,C=U+h*(_+1),L=U+1+h*(_+1),N=U+1+h*_;y.push(I,C,N),y.push(C,L,N)}this.setIndex(y),this.setAttribute("position",new on(A,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends kn{constructor(t=.5,i=1,s=32,l=1,u=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],x=[];let S=t;const g=(i-t)/l,y=new et,A=new Ee;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const _=u+M/s*d;y.x=S*Math.cos(_),y.y=S*Math.sin(_),m.push(y.x,y.y,y.z),h.push(0,0,1),A.x=(y.x/i+1)/2,A.y=(y.y/i+1)/2,x.push(A.x,A.y)}S+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let _=0;_<s;_++){const U=_+M,I=U,C=U+s+1,L=U+s+2,N=U+1;p.push(I,C,N),p.push(C,L,N)}}this.setIndex(p),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $c extends kn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const x=[],S=new et,g=new et,y=[],A=[],w=[],M=[];for(let _=0;_<=s;_++){const U=[],I=_/s,C=d+I*p,L=t*Math.cos(C),N=Math.sqrt(t*t-L*L);let z=0;_===0&&d===0?z=.5/i:_===s&&m===Math.PI&&(z=-.5/i);for(let b=0;b<=i;b++){const O=b/i,V=l+O*u;S.x=-N*Math.cos(V),S.y=L,S.z=N*Math.sin(V),A.push(S.x,S.y,S.z),g.copy(S).normalize(),w.push(g.x,g.y,g.z),M.push(O+z,1-I),U.push(h++)}x.push(U)}for(let _=0;_<s;_++)for(let U=0;U<i;U++){const I=x[_][U+1],C=x[_][U],L=x[_+1][U],N=x[_+1][U+1];(_!==0||d>0)&&y.push(I,C,N),(_!==s-1||m<Math.PI)&&y.push(C,L,N)}this.setIndex(y),this.setAttribute("position",new on(A,3)),this.setAttribute("normal",new on(w,3)),this.setAttribute("uv",new on(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tu extends kn{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],x=[],S=[],g=new et,y=new et,A=new et;for(let w=0;w<=s;w++){const M=d+w/s*p;for(let _=0;_<=l;_++){const U=_/l*u;y.x=(t+i*Math.cos(M))*Math.cos(U),y.y=(t+i*Math.cos(M))*Math.sin(U),y.z=i*Math.sin(M),h.push(y.x,y.y,y.z),g.x=t*Math.cos(U),g.y=t*Math.sin(U),A.subVectors(y,g).normalize(),x.push(A.x,A.y,A.z),S.push(_/l),S.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const _=(l+1)*w+M-1,U=(l+1)*(w-1)+M-1,I=(l+1)*(w-1)+M,C=(l+1)*w+M;m.push(_,U,C),m.push(U,I,C)}this.setIndex(m),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Br(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(M_(l))l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(M_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)t[l]=s[l]}return t}function M_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function xy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Tv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const Sy={clone:Br,merge:Gn};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ce().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ee().fromArray(l.value);break;case"v3":this.uniforms[s].value=new et().fromArray(l.value);break;case"v4":this.uniforms[s].value=new nn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new re().fromArray(l.value);break;case"m4":this.uniforms[s].value=new an().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ey extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ea extends Gr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=Xh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class by extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ty extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class np extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Vd=new an,y_=new et,E_=new et;class Av{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(y_),E_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(E_),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(Vd,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,p=l?l.w/u.y:1,m=l?l.x/u.x:0,h=l?l.y/u.y:0;t.coordinateSystem===$o||t.reversedDepth?i.set(.5*d,0,0,.5*d+m,0,.5*p,0,.5*p+h,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+m,0,.5*p,0,.5*p+h,0,0,.5,.5,0,0,0,1),i.multiply(Vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Oc=new et,Pc=new Hr,Xi=new et;class Rv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,Pc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Oc,Pc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new et,b_=new Ee,T_=new Ee;class hi extends Rv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,b_,T_),i.subVectors(T_,b_)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ay extends Av{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class A_ extends np{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ip extends Rv{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ry extends Av{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cy extends np{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Ry}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class wy extends np{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const wr=-90,Dr=1;class Dy extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const u=new hi(wr,Dr,t,i);u.layers=this.layers,this.add(u);const d=new hi(wr,Dr,t,i);d.layers=this.layers,this.add(d);const p=new hi(wr,Dr,t,i);p.layers=this.layers,this.add(p);const m=new hi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const h=new hi(wr,Dr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(t===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$o)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,x]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,g,y),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Ny extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Uy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const lp=class lp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};lp.prototype.isMatrix2=!0;let R_=lp;function C_(r,t,i,s){const l=Ly(s);switch(i){case dv:return r*t;case pv:return r*t/l.components*l.byteLength;case Zh:return r*t/l.components*l.byteLength;case Fs:return r*t*2/l.components*l.byteLength;case jh:return r*t*2/l.components*l.byteLength;case hv:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case Kh:return r*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ch:case fh:return Math.max(r,16)*Math.max(t,8)/4;case lh:case uh:return Math.max(r,8)*Math.max(t,8)/2;case dh:case hh:case mh:case gh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ph:case Wc:case _h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case yh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uh:case Lh:case Oh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ph:case Ih:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qc:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ly(r){switch(r){case pi:case lv:return{byteLength:1,components:1};case Qo:case cv:case Ji:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Qi:case Wh:case Zi:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let r=null,t=!1,i=null,s=null;function l(u,d){s=r.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Oy(r){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,x),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const x=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,x);else{S.sort((y,A)=>y.start-A.start);let g=0;for(let y=1;y<S.length;y++){const A=S[g],w=S[y];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++g,S[g]=w)}S.length=g+1;for(let y=0,A=S.length;y<A;y++){const w=S[y];r.bufferSubData(h,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,CE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:Py,alphahash_pars_fragment:Iy,alphamap_fragment:zy,alphamap_pars_fragment:By,alphatest_fragment:Fy,alphatest_pars_fragment:Hy,aomap_fragment:Gy,aomap_pars_fragment:Vy,batching_pars_vertex:ky,batching_vertex:Xy,begin_vertex:Wy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:Zy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:$y,color_fragment:tE,color_pars_fragment:eE,color_pars_vertex:nE,color_vertex:iE,common:aE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:rE,displacementmap_pars_vertex:oE,displacementmap_vertex:lE,emissivemap_fragment:cE,emissivemap_pars_fragment:uE,colorspace_fragment:fE,colorspace_pars_fragment:dE,envmap_fragment:hE,envmap_common_pars_fragment:pE,envmap_pars_fragment:mE,envmap_pars_vertex:gE,envmap_physical_pars_fragment:RE,envmap_vertex:_E,fog_vertex:vE,fog_pars_vertex:xE,fog_fragment:SE,fog_pars_fragment:ME,gradientmap_pars_fragment:yE,lightmap_pars_fragment:EE,lights_lambert_fragment:bE,lights_lambert_pars_fragment:TE,lights_pars_begin:AE,lights_toon_fragment:CE,lights_toon_pars_fragment:wE,lights_phong_fragment:DE,lights_phong_pars_fragment:NE,lights_physical_fragment:UE,lights_physical_pars_fragment:LE,lights_fragment_begin:OE,lights_fragment_maps:PE,lights_fragment_end:IE,lightprobes_pars_fragment:zE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:WE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:YE,morphinstance_vertex:ZE,morphcolor_vertex:jE,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:tb,normal_pars_fragment:eb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:ob,iridescence_pars_fragment:lb,opaque_fragment:cb,packing:ub,premultiplied_alpha_fragment:fb,project_vertex:db,dithering_fragment:hb,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:vb,shadowmap_vertex:xb,shadowmask_pars_fragment:Sb,skinbase_vertex:Mb,skinning_pars_vertex:yb,skinning_vertex:Eb,skinnormal_vertex:bb,specularmap_fragment:Tb,specularmap_pars_fragment:Ab,tonemapping_fragment:Rb,tonemapping_pars_fragment:Cb,transmission_fragment:wb,transmission_pars_fragment:Db,uv_pars_fragment:Nb,uv_pars_vertex:Ub,uv_vertex:Lb,worldpos_vertex:Ob,background_vert:Pb,background_frag:Ib,backgroundCube_vert:zb,backgroundCube_frag:Bb,cube_vert:Fb,cube_frag:Hb,depth_vert:Gb,depth_frag:Vb,distance_vert:kb,distance_frag:Xb,equirect_vert:Wb,equirect_frag:qb,linedashed_vert:Yb,linedashed_frag:Zb,meshbasic_vert:jb,meshbasic_frag:Kb,meshlambert_vert:Qb,meshlambert_frag:Jb,meshmatcap_vert:$b,meshmatcap_frag:tT,meshnormal_vert:eT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:aT,meshphysical_vert:sT,meshphysical_frag:rT,meshtoon_vert:oT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:fT,shadow_frag:dT,sprite_vert:hT,sprite_frag:pT},Ft={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new et},probesMax:{value:new et},probesResolution:{value:new et}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Yi={basic:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Gn([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Gn([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Gn([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Gn([Ft.lights,Ft.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Yi.physical={uniforms:Gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Ic={r:0,b:0,g:0},mT=new an,wv=new re;wv.set(-1,0,0,0,1,0,0,0,1);function gT(r,t,i,s,l,u){const d=new Ce(0);let p=l===!0?0:1,m,h,x=null,S=0,g=null;function y(U){let I=U.isScene===!0?U.background:null;if(I&&I.isTexture){const C=U.backgroundBlurriness>0;I=t.get(I,C)}return I}function A(U){let I=!1;const C=y(U);C===null?M(d,p):C&&C.isColor&&(M(C,1),I=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(U,I){const C=y(I);C&&(C.isCubeTexture||C.mapping===nu)?(h===void 0&&(h=new Ae(new fi(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Br(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wv),h.material.toneMapped=Re.getTransfer(C.colorSpace)!==He,(x!==C||S!==C.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,x=C,S=C.version,g=r.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ae(new au(2,2),new $i({name:"BackgroundMaterial",uniforms:Br(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Re.getTransfer(C.colorSpace)!==He,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=C,S=C.version,g=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function M(U,I){U.getRGB(Ic,Tv(r)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,I,u)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),p=I,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,M(d,p)},render:A,addToRenderList:w,dispose:_}}function _T(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,d=!1;function p(Y,j,st,q,K){let B=!1;const G=S(Y,q,st,j);u!==G&&(u=G,h(u.object)),B=y(Y,q,st,K),B&&A(Y,q,st,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,C(Y,j,st,q),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function h(Y){return r.bindVertexArray(Y)}function x(Y){return r.deleteVertexArray(Y)}function S(Y,j,st,q){const K=q.wireframe===!0;let B=s[j.id];B===void 0&&(B={},s[j.id]=B);const G=Y.isInstancedMesh===!0?Y.id:0;let ut=B[G];ut===void 0&&(ut={},B[G]=ut);let at=ut[st.id];at===void 0&&(at={},ut[st.id]=at);let dt=at[K];return dt===void 0&&(dt=g(m()),at[K]=dt),dt}function g(Y){const j=[],st=[],q=[];for(let K=0;K<i;K++)j[K]=0,st[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:st,attributeDivisors:q,object:Y,attributes:{},index:null}}function y(Y,j,st,q){const K=u.attributes,B=j.attributes;let G=0;const ut=st.getAttributes();for(const at in ut)if(ut[at].location>=0){const D=K[at];let tt=B[at];if(tt===void 0&&(at==="instanceMatrix"&&Y.instanceMatrix&&(tt=Y.instanceMatrix),at==="instanceColor"&&Y.instanceColor&&(tt=Y.instanceColor)),D===void 0||D.attribute!==tt||tt&&D.data!==tt.data)return!0;G++}return u.attributesNum!==G||u.index!==q}function A(Y,j,st,q){const K={},B=j.attributes;let G=0;const ut=st.getAttributes();for(const at in ut)if(ut[at].location>=0){let D=B[at];D===void 0&&(at==="instanceMatrix"&&Y.instanceMatrix&&(D=Y.instanceMatrix),at==="instanceColor"&&Y.instanceColor&&(D=Y.instanceColor));const tt={};tt.attribute=D,D&&D.data&&(tt.data=D.data),K[at]=tt,G++}u.attributes=K,u.attributesNum=G,u.index=q}function w(){const Y=u.newAttributes;for(let j=0,st=Y.length;j<st;j++)Y[j]=0}function M(Y){_(Y,0)}function _(Y,j){const st=u.newAttributes,q=u.enabledAttributes,K=u.attributeDivisors;st[Y]=1,q[Y]===0&&(r.enableVertexAttribArray(Y),q[Y]=1),K[Y]!==j&&(r.vertexAttribDivisor(Y,j),K[Y]=j)}function U(){const Y=u.newAttributes,j=u.enabledAttributes;for(let st=0,q=j.length;st<q;st++)j[st]!==Y[st]&&(r.disableVertexAttribArray(st),j[st]=0)}function I(Y,j,st,q,K,B,G){G===!0?r.vertexAttribIPointer(Y,j,st,K,B):r.vertexAttribPointer(Y,j,st,q,K,B)}function C(Y,j,st,q){w();const K=q.attributes,B=st.getAttributes(),G=j.defaultAttributeValues;for(const ut in B){const at=B[ut];if(at.location>=0){let dt=K[ut];if(dt===void 0&&(ut==="instanceMatrix"&&Y.instanceMatrix&&(dt=Y.instanceMatrix),ut==="instanceColor"&&Y.instanceColor&&(dt=Y.instanceColor)),dt!==void 0){const D=dt.normalized,tt=dt.itemSize,pt=t.get(dt);if(pt===void 0)continue;const At=pt.buffer,Pt=pt.type,Gt=pt.bytesPerElement,$=Pt===r.INT||Pt===r.UNSIGNED_INT||dt.gpuType===Wh;if(dt.isInterleavedBufferAttribute){const vt=dt.data,Rt=vt.stride,te=dt.offset;if(vt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<at.locationSize;Lt++)_(at.location+Lt,vt.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Lt=0;Lt<at.locationSize;Lt++)M(at.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Lt=0;Lt<at.locationSize;Lt++)I(at.location+Lt,tt/at.locationSize,Pt,D,Rt*Gt,(te+tt/at.locationSize*Lt)*Gt,$)}else{if(dt.isInstancedBufferAttribute){for(let vt=0;vt<at.locationSize;vt++)_(at.location+vt,dt.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let vt=0;vt<at.locationSize;vt++)M(at.location+vt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let vt=0;vt<at.locationSize;vt++)I(at.location+vt,tt/at.locationSize,Pt,D,tt*Gt,tt/at.locationSize*vt*Gt,$)}}else if(G!==void 0){const D=G[ut];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(at.location,D);break;case 3:r.vertexAttrib3fv(at.location,D);break;case 4:r.vertexAttrib4fv(at.location,D);break;default:r.vertexAttrib1fv(at.location,D)}}}}U()}function L(){O();for(const Y in s){const j=s[Y];for(const st in j){const q=j[st];for(const K in q){const B=q[K];for(const G in B)x(B[G].object),delete B[G];delete q[K]}}delete s[Y]}}function N(Y){if(s[Y.id]===void 0)return;const j=s[Y.id];for(const st in j){const q=j[st];for(const K in q){const B=q[K];for(const G in B)x(B[G].object),delete B[G];delete q[K]}}delete s[Y.id]}function z(Y){for(const j in s){const st=s[j];for(const q in st){const K=st[q];if(K[Y.id]===void 0)continue;const B=K[Y.id];for(const G in B)x(B[G].object),delete B[G];delete K[Y.id]}}}function b(Y){for(const j in s){const st=s[j],q=Y.isInstancedMesh===!0?Y.id:0,K=st[q];if(K!==void 0){for(const B in K){const G=K[B];for(const ut in G)x(G[ut].object),delete G[ut];delete K[B]}delete st[q],Object.keys(st).length===0&&delete s[j]}}}function O(){V(),d=!0,u!==l&&(u=l,h(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:U}}function vT(r,t,i){let s;function l(m){s=m}function u(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,x){x!==0&&(r.drawArraysInstanced(s,m,h,x),i.update(h,s,x))}function p(m,h,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,x);let g=0;for(let y=0;y<x;y++)g+=h[y];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function xT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==pi&&z!==Zi&&!b&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ie("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:C,maxSamples:L,samples:N}}function ST(r){const t=this;let i=null,s=0,l=!1,u=!1;const d=new os,p=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||l;return l=g,s=S.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,g){i=x(S,g,0)},this.setState=function(S,g,y){const A=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,_=r.get(S);if(!l||A===null||A.length===0||u&&!M)u?x(null):h();else{const U=u?0:s,I=U*4;let C=_.clippingState||null;m.value=C,C=x(A,g,I,y);for(let L=0;L!==I;++L)C[L]=i[L];_.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,g,y,A){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,A!==!0||M===null){const _=y+w*4,U=g.matrixWorldInverse;p.getNormalMatrix(U),(M===null||M.length<_)&&(M=new Float32Array(_));for(let I=0,C=y;I!==w;++I,C+=4)d.copy(S[I]).applyMatrix4(U,p),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Or=4,MT=6,yT=20,ET=256,ko=new ip,w_=new Ce;let kd=null,Xd=0,Wd=0,qd=!1;const bT=new et,Ls=new et;class D_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=bT}=u;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kd,Xd,Wd),this._renderer.xr.enabled=qd,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Bs||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ji,format:Ii,colorSpace:Yc,depthBuffer:!1},l=N_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=TT(u)),this._blurMaterial=RT(u,t,i),this._ggxMaterial=AT(u,t,i)}return l}_compileMaterial(t){const i=new Ae(new kn,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,u){const m=new hi(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(w_),S.toneMapping=Ki,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new fi,new Os({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let _=!1;const U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,_=!0):(M.color.copy(w_),_=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(m.up.set(0,h[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[I],u.y,u.z)):C===1?(m.up.set(0,0,h[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[I],u.z)):(m.up.set(0,h[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[I]));const L=this._cubeSize;Nr(l,C*L,I>2?L:0,L,L),S.setRenderTarget(l),_&&S.render(w,m),S.render(t,m)}S.toneMapping=y,S.autoClear=g,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Bs||t.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),g=h*1.25,y=S*g,{_lodMax:A}=this,w=this._sizeLods[s],M=3*w*(s>A-Or?s-A+Or:0),_=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=A-i,Nr(u,M,_,3*w,2*w),l.setRenderTarget(u),l.render(p,ko),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Nr(t,M,_,3*w,2*w),l.setRenderTarget(t),l.render(p,ko)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,d),this._blurPass(u,t,s,s,d)}_blurPass(t,i,s,l,u){const d=this._renderer,p=this._blurMaterial,m=this._lodMeshes[l];m.material=p;const h=p.uniforms;h.envMap.value=t.texture,h.sigma.value=u,h.mipInt.value=this._lodMax-s;const x=this._sizeLods[l],S=3*x*(l>this._lodMax-Or?l-this._lodMax+Or:0),g=4*(this._cubeSize-x);Nr(i,S,g,3*x,2*x),d.setRenderTarget(i),d.render(m,ko)}}function TT(r){const t=[],i=[];let s=r;const l=r-Or+1+MT;for(let u=0;u<l;u++){const d=Math.pow(2,s);t.push(d);const p=1/(d-2),m=-p,h=1+p,x=[m,m,h,m,h,h,m,m,h,h,m,h],S=6,g=6,y=3,A=new Float32Array(y*g*S),w=new Float32Array(y*g*S);for(let _=0;_<S;_++){const U=_%3*2/3-1,I=_>2?0:-1,C=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];A.set(C,y*g*_);for(let L=0;L<g;L++){const N=x[L*2]*2-1,z=x[L*2+1]*2-1;_===0?Ls.set(1,z,N):_===1?Ls.set(-N,1,-z):_===2?Ls.set(-N,z,1):_===3?Ls.set(-1,z,-N):_===4?Ls.set(-N,-1,z):Ls.set(N,z,-1),Ls.toArray(w,(_*g+L)*y)}}const M=new kn;M.setAttribute("position",new Ra(A,y)),M.setAttribute("outputDirection",new Ra(w,y)),i.push(new Ae(M,null)),s>Or&&s--}return{lodMeshes:i,sizeLods:t}}function N_(r,t,i){const s=new zi(r,t,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function AT(r,t,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ET,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function RT(r,t,i){return new $i({name:"SphericalGaussianBlur",defines:{SAMPLES:yT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function U_(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function L_(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dv extends zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fi(5,5,5),u=new $i({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ta});u.uniforms.tEquirect.value=i;const d=new Ae(l,u),p=i.minFilter;return i.minFilter===Ps&&(i.minFilter=In),new Dy(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}function CT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):u(g)}function u(g){if(g&&g.isTexture){const y=g.mapping;if(y===_d||y===vd)if(t.has(g)){const A=t.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const w=new Dv(A.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,A=y===_d||y===vd,w=y===Bs||y===zr;if(A||w){let M=i.get(g);const _=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new D_(r)),M=A?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const U=g.image;return A&&U&&U.height>0||w&&U&&m(U)?(s===null&&(s=new D_(r)),M=A?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function p(g,y){return y===_d?g.mapping=Bs:y===vd&&(g.mapping=zr),g}function m(g){let y=0;const A=6;for(let w=0;w<A;w++)g[w]!==void 0&&y++;return y===A}function h(g){const y=g.target;y.removeEventListener("dispose",h);const A=t.get(y);A!==void 0&&(t.delete(y),A.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const A=i.get(y);A!==void 0&&(i.delete(y),A.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function wT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Pr("WebGLRenderer: "+s+" extension not supported."),l}}}function DT(r,t,i,s){const l={},u=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const A in g.attributes)t.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const y=u.get(g);y&&(t.remove(y),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function h(S){const g=[],y=S.index,A=S.attributes.position;let w=0;if(A===void 0)return;if(y!==null){const U=y.array;w=y.version;for(let I=0,C=U.length;I<C;I+=3){const L=U[I+0],N=U[I+1],z=U[I+2];g.push(L,N,N,z,z,L)}}else{const U=A.array;w=A.version;for(let I=0,C=U.length/3-1;I<C;I+=3){const L=I+0,N=I+1,z=I+2;g.push(L,N,N,z,z,L)}}const M=new(A.count>=65535?Sv:xv)(g,1);M.version=w;const _=u.get(S);_&&t.remove(_),u.set(S,M)}function x(S){const g=u.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&h(S)}else h(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function NT(r,t,i){let s;function l(S){s=S}let u,d;function p(S){u=S.type,d=S.bytesPerElement}function m(S,g){r.drawElements(s,g,u,S*d),i.update(g,s,1)}function h(S,g,y){y!==0&&(r.drawElementsInstanced(s,g,u,S*d,y),i.update(g,s,y))}function x(S,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,S,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function UT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(u/3);break;case r.LINES:i.lines+=p*(u/2);break;case r.LINE_STRIP:i.lines+=p*(u-1);break;case r.LINE_LOOP:i.lines+=p*u;break;case r.POINTS:i.points+=p*u;break;default:Oe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(r,t,i){const s=new WeakMap,l=new nn;function u(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let V=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",V)};var y=V;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let C=0;A===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let L=p.attributes.position.count*C,N=1;L>t.maxTextureSize&&(N=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const z=new Float32Array(L*N*4*S),b=new gv(z,L,N,S);b.type=Zi,b.needsUpdate=!0;const O=C*4;for(let Y=0;Y<S;Y++){const j=_[Y],st=U[Y],q=I[Y],K=L*N*4*Y;for(let B=0;B<j.count;B++){const G=B*O;A===!0&&(l.fromBufferAttribute(j,B),z[K+G+0]=l.x,z[K+G+1]=l.y,z[K+G+2]=l.z,z[K+G+3]=0),w===!0&&(l.fromBufferAttribute(st,B),z[K+G+4]=l.x,z[K+G+5]=l.y,z[K+G+6]=l.z,z[K+G+7]=0),M===!0&&(l.fromBufferAttribute(q,B),z[K+G+8]=l.x,z[K+G+9]=l.y,z[K+G+10]=l.z,z[K+G+11]=q.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new Ee(L,N)},s.set(p,g),p.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<h.length;M++)A+=h[M];const w=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function OT(r,t,i,s,l){let u=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,g=t.get(h,S);if(u.get(g)!==x&&(t.update(g),u.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),u.set(h,x))),h.isSkinnedMesh){const y=h.skeleton;u.get(y)!==x&&(y.update(),u.set(y,x))}return g}function p(){u=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const PT={[tv]:"LINEAR_TONE_MAPPING",[ev]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function IT(r,t,i,s,l,u){const d=new zi(t,i,{type:r,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,m=null;const h=new kn;h.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new on([0,2,0,0,2,0],2));const x=new Ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Ae(h,x),g=new ip(-1,1,1,-1,0,1);let y=null,A=null,w=!1,M,_=null,U=[],I=!1;this.setSize=function(C,L){d.setSize(C,L),p!==null&&p.setSize(C,L),m!==null&&m.setSize(C,L);for(let N=0;N<U.length;N++){const z=U[N];z.setSize&&z.setSize(C,L)}},this.setEffects=function(C){U=C,I=U.length>0&&U[0].isRenderPass===!0;const L=d.width,N=d.height;U.length>0&&p===null&&(p=new zi(L,N,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),m=new zi(L,N,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<U.length;z++){const b=U[z];b.setSize&&b.setSize(L,N)}},this.begin=function(C,L){if(w||C.toneMapping===Ki&&U.length===0)return!1;if(_=L,L!==null){const N=L.width,z=L.height;(d.width!==N||d.height!==z)&&this.setSize(N,z)}return I===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=Ki,!0},this.hasRenderPass=function(){return I},this.end=function(C,L){C.toneMapping=M,w=!0;let N=d,z=p;for(let b=0;b<U.length;b++){const O=U[b];O.enabled!==!1&&(O.render(C,z,N,L),O.needsSwap!==!1&&(N=z,z=z===p?m:p))}if(y!==C.outputColorSpace||A!==C.toneMapping){y=C.outputColorSpace,A=C.toneMapping,x.defines={},Re.getTransfer(y)===He&&(x.defines.SRGB_TRANSFER="");const b=PT[A];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(_),C.render(S,g),_=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),m!==null&&m.dispose(),h.dispose(),x.dispose()}}const Nv=new Vn,Fh=new el(1,1),Uv=new gv,Lv=new $M,Ov=new Ev,O_=[],P_=[],I_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function Vr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=O_[l];if(u===void 0&&(u=new Float32Array(l),O_[l]=u),t!==0){s.toArray(u,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(u,p)}return u}function Mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ru(r,t){let i=P_[t];i===void 0&&(i=new Int32Array(t),P_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function zT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Mn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function GT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;B_.set(s),r.uniformMatrix2fv(this.addr,!1,B_),yn(i,s)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;z_.set(s),r.uniformMatrix3fv(this.addr,!1,z_),yn(i,s)}}function kT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;I_.set(s),r.uniformMatrix4fv(this.addr,!1,I_),yn(i,s)}}function XT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function ZT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function JT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Fh.compareFunction=i.isReversedDepthBuffer()?Jh:Qh,u=Fh):u=Nv,i.setTexture2D(t||u,l)}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lv,l)}function t1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ov,l)}function e1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Uv,l)}function n1(r){switch(r){case 5126:return zT;case 35664:return BT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return ZT;case 36294:return jT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}function i1(r,t){r.uniform1fv(this.addr,t)}function a1(r,t){const i=Vr(t,this.size,2);r.uniform2fv(this.addr,i)}function s1(r,t){const i=Vr(t,this.size,3);r.uniform3fv(this.addr,i)}function r1(r,t){const i=Vr(t,this.size,4);r.uniform4fv(this.addr,i)}function o1(r,t){const i=Vr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function l1(r,t){const i=Vr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function c1(r,t){const i=Vr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function u1(r,t){r.uniform1iv(this.addr,t)}function f1(r,t){r.uniform2iv(this.addr,t)}function d1(r,t){r.uniform3iv(this.addr,t)}function h1(r,t){r.uniform4iv(this.addr,t)}function p1(r,t){r.uniform1uiv(this.addr,t)}function m1(r,t){r.uniform2uiv(this.addr,t)}function g1(r,t){r.uniform3uiv(this.addr,t)}function _1(r,t){r.uniform4uiv(this.addr,t)}function v1(r,t,i){const s=this.cache,l=t.length,u=ru(i,l);Mn(s,u)||(r.uniform1iv(this.addr,u),yn(s,u));let d;this.type===r.SAMPLER_2D_SHADOW?d=Fh:d=Nv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,u[p])}function x1(r,t,i){const s=this.cache,l=t.length,u=ru(i,l);Mn(s,u)||(r.uniform1iv(this.addr,u),yn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Lv,u[d])}function S1(r,t,i){const s=this.cache,l=t.length,u=ru(i,l);Mn(s,u)||(r.uniform1iv(this.addr,u),yn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ov,u[d])}function M1(r,t,i){const s=this.cache,l=t.length,u=ru(i,l);Mn(s,u)||(r.uniform1iv(this.addr,u),yn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Uv,u[d])}function y1(r){switch(r){case 5126:return i1;case 35664:return a1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class E1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=n1(i.type)}}class b1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=y1(i.type)}}class T1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(t,i[p.id],s)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function F_(r,t){r.seq.push(t),r.map[t.id]=t}function A1(r,t,i){const s=r.name,l=s.length;for(Yd.lastIndex=0;;){const u=Yd.exec(s),d=Yd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){F_(i,h===void 0?new E1(p,r,t):new b1(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new T1(p),F_(i,S)),i=S}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);A1(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function H_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const R1=37297;let C1=0;function w1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const G_=new re;function D1(r){Re._getMatrix(G_,Re.workingColorSpace,r);const t=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function V_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+w1(r.getShaderSource(t),p)}else return u}function N1(r,t){const i=D1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const U1={[tv]:"Linear",[ev]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[sv]:"AgX",[rv]:"Neutral",[av]:"Custom"};function L1(r,t){const i=U1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new et;function O1(){Re.getLuminanceCoefficients(zc);const r=zc.x.toFixed(4),t=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function I1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function z1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),d=u.name;let p=1;u.type===r.FLOAT_MAT2&&(p=2),u.type===r.FLOAT_MAT3&&(p=3),u.type===r.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function qo(r){return r!==""}function k_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(r){return r.replace(B1,H1)}const F1=new Map;function H1(r,t){let i=pe[t];if(i===void 0){const s=F1.get(t);if(s!==void 0)i=pe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hh(i)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(r){return r.replace(G1,V1)}function V1(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function q_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const k1={[Fc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function X1(r){return k1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const W1={[Bs]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function q1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":W1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y1={[zr]:"ENVMAP_MODE_REFRACTION"};function Z1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Y1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j1={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function K1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":j1[r.combine]||"ENVMAP_BLENDING_NONE"}function Q1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function J1(r,t,i,s){const l=r.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=X1(i),h=q1(i),x=Z1(i),S=K1(i),g=Q1(i),y=P1(i),A=I1(u),w=l.createProgram();let M,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(qo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ki?L1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,N1("linearToOutputTexel",i.outputColorSpace),O1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Hh(d),d=k_(d,i),d=X_(d,i),p=Hh(p),p=k_(p,i),p=X_(p,i),d=W_(d),p=W_(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=U+M+d,C=U+_+p,L=H_(l,l.VERTEX_SHADER,I),N=H_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,L),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(Y){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",st=l.getShaderInfoLog(L)||"",q=l.getShaderInfoLog(N)||"",K=j.trim(),B=st.trim(),G=q.trim();let ut=!0,at=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,L,N);else{const dt=V_(l,L,"vertex"),D=V_(l,N,"fragment");Oe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+dt+`
`+D)}else K!==""?ie("WebGLProgram: Program Info Log:",K):(B===""||G==="")&&(at=!1);at&&(Y.diagnostics={runnable:ut,programLog:K,vertexShader:{log:B,prefix:M},fragmentShader:{log:G,prefix:_}})}l.deleteShader(L),l.deleteShader(N),b=new Xc(l,w),O=z1(l,w)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(w,R1)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=C1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=N,this}let $1=0;class tA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new eA(t),i.set(t,s)),s}}class eA{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}}function nA(r){return r===Fs||r===Wc||r===qc}function iA(r,t,i,s,l,u){const d=new _v,p=new tA,m=new Set,h=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,O,V,Y,j,st){const q=Y.fog,K=j.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ut=t.get(b.envMap||B,G),at=ut&&ut.mapping===nu?ut.image.height:null,dt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ie("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const D=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=D!==void 0?D.length:0;let pt=0;K.morphAttributes.position!==void 0&&(pt=1),K.morphAttributes.normal!==void 0&&(pt=2),K.morphAttributes.color!==void 0&&(pt=3);let At,Pt,Gt,$;if(dt){const Ge=Yi[dt];At=Ge.vertexShader,Pt=Ge.fragmentShader}else{At=b.vertexShader,Pt=b.fragmentShader;const Ge=p.getVertexShaderStage(b),we=p.getFragmentShaderStage(b);p.update(b,Ge,we),Gt=Ge.id,$=we.id}const vt=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),te=j.isInstancedMesh===!0,Lt=j.isBatchedMesh===!0,ae=!!b.map,Ze=!!b.matcap,ne=!!ut,me=!!b.aoMap,fe=!!b.lightMap,ce=!!b.bumpMap&&b.wireframe===!1,ge=!!b.normalMap,je=!!b.displacementMap,ln=!!b.emissiveMap,Pe=!!b.metalnessMap,Ke=!!b.roughnessMap,Z=b.anisotropy>0,Ne=b.clearcoat>0,be=b.dispersion>0,P=b.retroreflectivity>0,E=b.iridescence>0,Q=b.sheen>0,lt=b.transmission>0,mt=Z&&!!b.anisotropyMap,Ct=Ne&&!!b.clearcoatMap,Nt=Ne&&!!b.clearcoatNormalMap,gt=Ne&&!!b.clearcoatRoughnessMap,_t=E&&!!b.iridescenceMap,Dt=E&&!!b.iridescenceThicknessMap,Ht=Q&&!!b.sheenColorMap,It=Q&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,Et=!!b.specularColorMap,wt=!!b.specularIntensityMap,Yt=lt&&!!b.transmissionMap,F=lt&&!!b.thicknessMap,Tt=!!b.gradientMap,xt=!!b.alphaMap,Ut=b.alphaTest>0,Vt=!!b.alphaHash,bt=!!b.extensions;let Jt=Ki;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Jt=r.toneMapping);const Zt={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:Pt,defines:b.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Lt,batchingColor:Lt&&j._colorsTexture!==null,instancing:te,instancingColor:te&&j.instanceColor!==null,instancingMorph:te&&j.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Ze,envMap:ne,envMapMode:ne&&ut.mapping,envMapCubeUVHeight:at,aoMap:me,lightMap:fe,bumpMap:ce,normalMap:ge,displacementMap:je,emissiveMap:ln,normalMapObjectSpace:ge&&b.normalMapType===xM,normalMapTangentSpace:ge&&b.normalMapType===Bh,packedNormalMap:ge&&b.normalMapType===Bh&&nA(b.normalMap.format),metalnessMap:Pe,roughnessMap:Ke,anisotropy:Z,anisotropyMap:mt,clearcoat:Ne,clearcoatMap:Ct,clearcoatNormalMap:Nt,clearcoatRoughnessMap:gt,dispersion:be,retroreflection:P,iridescence:E,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:It,specularMap:Ot,specularColorMap:Et,specularIntensityMap:wt,transmission:lt,transmissionMap:Yt,thicknessMap:F,gradientMap:Tt,opaque:b.transparent===!1&&b.blending===Yo&&b.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ut,alphaHash:Vt,combine:b.combine,mapUv:ae&&A(b.map.channel),aoMapUv:me&&A(b.aoMap.channel),lightMapUv:fe&&A(b.lightMap.channel),bumpMapUv:ce&&A(b.bumpMap.channel),normalMapUv:ge&&A(b.normalMap.channel),displacementMapUv:je&&A(b.displacementMap.channel),emissiveMapUv:ln&&A(b.emissiveMap.channel),metalnessMapUv:Pe&&A(b.metalnessMap.channel),roughnessMapUv:Ke&&A(b.roughnessMap.channel),anisotropyMapUv:mt&&A(b.anisotropyMap.channel),clearcoatMapUv:Ct&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&A(b.sheenRoughnessMap.channel),specularMapUv:Ot&&A(b.specularMap.channel),specularColorMapUv:Et&&A(b.specularColorMap.channel),specularIntensityMapUv:wt&&A(b.specularIntensityMap.channel),transmissionMapUv:Yt&&A(b.transmissionMap.channel),thicknessMapUv:F&&A(b.thicknessMap.channel),alphaMapUv:xt&&A(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ge||Z),vertexNormals:!!K.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(ae||xt),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||K.attributes.normal===void 0&&ge===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Rt,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:pt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:st.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&Re.getTransfer(b.map.colorSpace)===He,decodeVideoTextureEmissive:ln&&b.emissiveMap.isVideoTexture===!0&&Re.getTransfer(b.emissiveMap.colorSpace)===He,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===$n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=m.has(1),Zt.vertexUv2s=m.has(2),Zt.vertexUv3s=m.has(3),m.clear(),Zt}function M(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)O.push(V),O.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(_(O,b),U(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function _(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numSunLights),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numSunLightShadows),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function U(b,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function I(b){const O=y[b.type];let V;if(O){const Y=Yi[O];V=Sy.clone(Y.uniforms)}else V=b.uniforms;return V}function C(b,O){let V=x.get(O);return V!==void 0?++V.usedTimes:(V=new J1(r,O,b,l),h.push(V),x.set(O,V)),V}function L(b){if(--b.usedTimes===0){const O=h.indexOf(b);h[O]=h[h.length-1],h.pop(),x.delete(b.cacheKey),b.destroy()}}function N(b){p.remove(b)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:I,acquireProgram:C,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:z}}function aA(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function sA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Y_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Z_(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,A,w,M,_){let U=r[t];return U===void 0?(U={id:g.id,object:g,geometry:y,material:A,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:_},r[t]=U):(U.id=g.id,U.object=g,U.geometry=y,U.material=A,U.materialVariant=d(g),U.groupOrder=w,U.renderOrder=g.renderOrder,U.z=M,U.group=_),t++,U}function m(g,y,A,w,M,_,U){U.reversedDepth===!0&&(M=-M);const I=p(g,y,A,w,M,_);A.transmission>0?s.push(I):A.transparent===!0?l.push(I):i.push(I)}function h(g,y,A,w,M,_){const U=p(g,y,A,w,M,_);A.transmission>0?s.unshift(U):A.transparent===!0?l.unshift(U):i.unshift(U)}function x(g,y){i.length>1&&i.sort(g||sA),s.length>1&&s.sort(y||Y_),l.length>1&&l.sort(y||Y_)}function S(){for(let g=t,y=r.length;g<y;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:S,sort:x}}function rA(){let r=new WeakMap;function t(s,l){const u=r.get(s);let d;return u===void 0?(d=new Z_,r.set(s,[d])):l>=u.length?(d=new Z_,u.push(d)):d=u[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function oA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function lA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let cA=0;function uA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fA(r){const t=new oA,i=lA(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new et);const l=new et,u=new an,d=new an;function p(h){let x=0,S=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let y=0,A=0,w=0,M=0,_=0,U=0,I=0,C=0,L=0,N=0,z=0,b=0,O=0,V=0;h.sort(uA);for(let j=0,st=h.length;j<st;j++){const q=h[j],K=q.color,B=q.intensity,G=q.distance;let ut=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Fs?ut=q.shadow.map.texture:ut=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)x+=K.r*B,S+=K.g*B,g+=K.b*B;else if(q.isLightProbe){for(let at=0;at<9;at++)s.probe[at].addScaledVector(q.sh.coefficients[at],B);V++}else if(q.isSunLight){const at=t.get(q);if(at.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const dt=q.shadow,D=i.get(q);D.shadowIntensity=dt.intensity,D.shadowBias=dt.bias,D.shadowNormalBias=dt.normalBias,D.shadowRadius=dt.radius,D.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),s.sunShadow[A]=D,s.sunShadowMap[A]=ut;const tt=dt.getViewportCount();for(let pt=0;pt<tt;pt++)s.sunShadowMatrix[w+pt]=dt.getMatrix(pt),s.sunShadowCascade[w+pt]=dt._cascadeData[pt];w+=tt,A++}s.sun[y]=at,y++}else if(q.isDirectionalLight){const at=t.get(q);if(at.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const dt=q.shadow,D=i.get(q);D.shadowIntensity=dt.intensity,D.shadowBias=dt.bias,D.shadowNormalBias=dt.normalBias,D.shadowRadius=dt.radius,D.shadowMapSize=dt.mapSize,s.directionalShadow[M]=D,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=q.shadow.matrix,L++}s.directional[M]=at,M++}else if(q.isSpotLight){const at=t.get(q);at.position.setFromMatrixPosition(q.matrixWorld),at.color.copy(K).multiplyScalar(B),at.distance=G,at.coneCos=Math.cos(q.angle),at.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),at.decay=q.decay,s.spot[U]=at;const dt=q.shadow;if(q.map&&(s.spotLightMap[b]=q.map,b++,dt.updateMatrices(q),q.castShadow&&O++),s.spotLightMatrix[U]=dt.matrix,q.castShadow){const D=i.get(q);D.shadowIntensity=dt.intensity,D.shadowBias=dt.bias,D.shadowNormalBias=dt.normalBias,D.shadowRadius=dt.radius,D.shadowMapSize=dt.mapSize,s.spotShadow[U]=D,s.spotShadowMap[U]=ut,z++}U++}else if(q.isRectAreaLight){const at=t.get(q);at.color.copy(K).multiplyScalar(B),at.halfWidth.set(q.width*.5,0,0),at.halfHeight.set(0,q.height*.5,0),s.rectArea[I]=at,I++}else if(q.isPointLight){const at=t.get(q);if(at.color.copy(q.color).multiplyScalar(q.intensity),at.distance=q.distance,at.decay=q.decay,q.castShadow){const dt=q.shadow,D=i.get(q);D.shadowIntensity=dt.intensity,D.shadowBias=dt.bias,D.shadowNormalBias=dt.normalBias,D.shadowRadius=dt.radius,D.shadowMapSize=dt.mapSize,D.shadowCameraNear=dt.camera.near,D.shadowCameraFar=dt.camera.far,s.pointShadow[_]=D,s.pointShadowMap[_]=ut,s.pointShadowMatrix[_]=q.shadow.matrix,N++}s.point[_]=at,_++}else if(q.isHemisphereLight){const at=t.get(q);at.skyColor.copy(q.color).multiplyScalar(B),at.groundColor.copy(q.groundColor).multiplyScalar(B),s.hemi[C]=at,C++}}I>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const Y=s.hash;(Y.sunLength!==y||Y.directionalLength!==M||Y.pointLength!==_||Y.spotLength!==U||Y.rectAreaLength!==I||Y.hemiLength!==C||Y.numSunShadows!==A||Y.numDirectionalShadows!==L||Y.numPointShadows!==N||Y.numSpotShadows!==z||Y.numSpotMaps!==b||Y.numLightProbes!==V)&&(s.sun.length=y,s.directional.length=M,s.spot.length=U,s.rectArea.length=I,s.point.length=_,s.hemi.length=C,s.sunShadow.length=A,s.sunShadowMap.length=A,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=z,s.spotShadowMap.length=z,s.spotLightMatrix.length=z+b-O,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=V,Y.sunLength=y,Y.directionalLength=M,Y.pointLength=_,Y.spotLength=U,Y.rectAreaLength=I,Y.hemiLength=C,Y.numSunShadows=A,Y.numDirectionalShadows=L,Y.numPointShadows=N,Y.numSpotShadows=z,Y.numSpotMaps=b,Y.numLightProbes=V,s.version=cA++)}function m(h,x){let S=0,g=0,y=0,A=0,w=0,M=0;const _=x.matrixWorldInverse;for(let U=0,I=h.length;U<I;U++){const C=h[U];if(C.isSunLight){const L=s.sun[S];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(_),S++}else if(C.isDirectionalLight){const L=s.directional[g];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),g++}else if(C.isSpotLight){const L=s.spot[A];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),A++}else if(C.isRectAreaLight){const L=s.rectArea[w];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),d.identity(),u.copy(C.matrixWorld),u.premultiply(_),d.extractRotation(u),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),y++}else if(C.isHemisphereLight){const L=s.hemi[M];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(_),M++}}}return{setup:p,setupView:m,state:s}}function j_(r){const t=new fA(r),i=[],s=[],l=[];function u(g){S.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){t.setup(i)}function x(g){t.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:S,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function dA(r){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let p;return d===void 0?(p=new j_(r),t.set(l,[p])):u>=d.length?(p=new j_(r),d.push(p)):p=d[u],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mA=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],gA=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],K_=new an,Xo=new et,Zd=new et;function _A(r,t,i){let s=new ep;const l=new Ee,u=new Ee,d=new nn,p=new by,m=new Ty,h={},x=i.maxTextureSize,S={[zs]:$n,[$n]:zs,[Oi]:Oi},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:hA,fragmentShader:pA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const A=new kn;A.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ae(A,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let _=this.type;this.render=function(N,z,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===KS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fc);const O=r.getRenderTarget(),V=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ta),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const st=_!==this.type;st&&z.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(K=>K.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,K=N.length;q<K;q++){const B=N[q],G=B.shadow;if(G===void 0){ie("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ut=G.getFrameExtents();l.multiply(ut),u.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ut.x),l.x=u.x*ut.x,G.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ut.y),l.y=u.y*ut.y,G.mapSize.y=u.y));const at=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=at,G.map===null||st===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Wo){if(B.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new zi(l.x,l.y,{format:Fs,type:Ji,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new el(l.x,l.y,Zi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ca,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else B.isPointLight?(G.map=new Dv(l.x),G.map.depthTexture=new vy(l.x,Qi)):(G.map=new zi(l.x,l.y),G.map.depthTexture=new el(l.x,l.y,Qi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ca,this.type===Fc?(G.map.depthTexture.compareFunction=at?Jh:Qh,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==l.x||G.map.height!==l.y)&&G.map.setSize(l.x,l.y);const dt=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();B.isPointLight!==!0&&G.updateMatrices(B,b);for(let D=0;D<dt;D++){const tt=G.getCamera(D);if(B.isPointLight){const pt=G.camera,At=G.matrix,Pt=B.distance||pt.far;Pt!==pt.far&&(pt.far=Pt,pt.updateProjectionMatrix()),Xo.setFromMatrixPosition(B.matrixWorld),pt.position.copy(Xo),Zd.copy(pt.position),Zd.add(mA[D]),pt.up.copy(gA[D]),pt.lookAt(Zd),pt.updateMatrixWorld(),At.makeTranslation(-Xo.x,-Xo.y,-Xo.z),K_.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(K_,pt.coordinateSystem,pt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,D),r.clear();else{D===0&&(r.setRenderTarget(G.map),r.clear());const pt=G.getViewport(D);d.set(u.x*pt.x,u.y*pt.y,u.x*pt.z,u.y*pt.w),j.viewport(d)}s=G.getFrustum(D),C(z,b,tt,B,this.type)}G.isPointLightShadow!==!0&&this.type===Wo&&U(G,b),G.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(O,V,Y)};function U(N,z){const b=t.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new zi(l.x,l.y,{format:Fs,type:Ji}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value.set(N.map.width,N.map.height),g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,b,g,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,b,y,w,null)}function I(N,z,b,O){let V=null;const Y=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=b.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=V.uuid,st=z.uuid;let q=h[j];q===void 0&&(q={},h[j]=q);let K=q[st];K===void 0&&(K=V.clone(),q[st]=K,z.addEventListener("dispose",L)),V=K}if(V.visible=z.visible,V.wireframe=z.wireframe,O===Wo?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:S[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const j=r.properties.get(V);j.light=b}return V}function C(N,z,b,O,V){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===Wo)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const st=t.update(N),q=N.material;if(Array.isArray(q)){const K=st.groups;for(let B=0,G=K.length;B<G;B++){const ut=K[B],at=q[ut.materialIndex];if(at&&at.visible){const dt=I(N,at,O,V);N.onBeforeShadow(r,N,z,b,st,dt,ut),r.renderBufferDirect(b,null,st,dt,N,ut),N.onAfterShadow(r,N,z,b,st,dt,ut)}}}else if(q.visible){const K=I(N,q,O,V);N.onBeforeShadow(r,N,z,b,st,K,null),r.renderBufferDirect(b,null,st,K,N,null),N.onAfterShadow(r,N,z,b,st,K,null)}}const j=N.children;for(let st=0,q=j.length;st<q;st++)C(j[st],z,b,O,V)}function L(N){N.target.removeEventListener("dispose",L);for(const b in h){const O=h[b],V=N.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function vA(r,t){function i(){let F=!1;const Tt=new nn;let xt=null;const Ut=new nn(0,0,0,0);return{setMask:function(Vt){xt!==Vt&&!F&&(r.colorMask(Vt,Vt,Vt,Vt),xt=Vt)},setLocked:function(Vt){F=Vt},setClear:function(Vt,bt,Jt,Zt,Ge){Ge===!0&&(Vt*=Zt,bt*=Zt,Jt*=Zt),Tt.set(Vt,bt,Jt,Zt),Ut.equals(Tt)===!1&&(r.clearColor(Vt,bt,Jt,Zt),Ut.copy(Tt))},reset:function(){F=!1,xt=null,Ut.set(-1,0,0,0)}}}function s(){let F=!1,Tt=!1,xt=null,Ut=null,Vt=null;return{setReversed:function(bt){if(Tt!==bt){const Jt=t.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Tt=bt;const Zt=Vt;Vt=null,this.setClear(Zt)}},getReversed:function(){return Tt},setTest:function(bt){bt?vt(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(bt){xt!==bt&&!F&&(r.depthMask(bt),xt=bt)},setFunc:function(bt){if(Tt&&(bt=NM[bt]),Ut!==bt){switch(bt){case $d:r.depthFunc(r.NEVER);break;case th:r.depthFunc(r.ALWAYS);break;case eh:r.depthFunc(r.LESS);break;case Ko:r.depthFunc(r.LEQUAL);break;case nh:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case ah:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=bt}},setLocked:function(bt){F=bt},setClear:function(bt){Vt!==bt&&(Vt=bt,Tt&&(bt=1-bt),r.clearDepth(bt))},reset:function(){F=!1,xt=null,Ut=null,Vt=null,Tt=!1}}}function l(){let F=!1,Tt=null,xt=null,Ut=null,Vt=null,bt=null,Jt=null,Zt=null,Ge=null;return{setTest:function(we){F||(we?vt(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(we){Tt!==we&&!F&&(r.stencilMask(we),Tt=we)},setFunc:function(we,Xn,ti){(xt!==we||Ut!==Xn||Vt!==ti)&&(r.stencilFunc(we,Xn,ti),xt=we,Ut=Xn,Vt=ti)},setOp:function(we,Xn,ti){(bt!==we||Jt!==Xn||Zt!==ti)&&(r.stencilOp(we,Xn,ti),bt=we,Jt=Xn,Zt=ti)},setLocked:function(we){F=we},setClear:function(we){Ge!==we&&(r.clearStencil(we),Ge=we)},reset:function(){F=!1,Tt=null,xt=null,Ut=null,Vt=null,bt=null,Jt=null,Zt=null,Ge=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},g={},y=new WeakMap,A=[],w=null,M=!1,_=null,U=null,I=null,C=null,L=null,N=null,z=null,b=new Ce(0,0,0),O=0,V=!1,Y=null,j=null,st=null,q=null,K=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ut=0;const at=r.getParameter(r.VERSION);at.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(at)[1]),G=ut>=1):at.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),G=ut>=2);let dt=null,D={};const tt=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),At=new nn().fromArray(tt),Pt=new nn().fromArray(pt);function Gt(F,Tt,xt,Ut){const Vt=new Uint8Array(4),bt=r.createTexture();r.bindTexture(F,bt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<xt;Jt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,Vt):r.texImage2D(Tt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Vt);return bt}const $={};$[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),vt(r.DEPTH_TEST),d.setFunc(Ko),ce(!1),ge(Qg),vt(r.CULL_FACE),me(Ta);function vt(F){x[F]!==!0&&(r.enable(F),x[F]=!0)}function Rt(F){x[F]!==!1&&(r.disable(F),x[F]=!1)}function te(F,Tt){return g[F]!==Tt?(r.bindFramebuffer(F,Tt),g[F]=Tt,F===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),F===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Lt(F,Tt){let xt=A,Ut=!1;if(F){xt=y.get(Tt),xt===void 0&&(xt=[],y.set(Tt,xt));const Vt=F.textures;if(xt.length!==Vt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,Jt=Vt.length;bt<Jt;bt++)xt[bt]=r.COLOR_ATTACHMENT0+bt;xt.length=Vt.length,Ut=!0}}else xt[0]!==r.BACK&&(xt[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(xt)}function ae(F){return w!==F?(r.useProgram(F),w=F,!0):!1}const Ze={[Ur]:r.FUNC_ADD,[JS]:r.FUNC_SUBTRACT,[$S]:r.FUNC_REVERSE_SUBTRACT};Ze[tM]=r.MIN,Ze[eM]=r.MAX;const ne={[nM]:r.ZERO,[iM]:r.ONE,[aM]:r.SRC_COLOR,[J_]:r.SRC_ALPHA,[uM]:r.SRC_ALPHA_SATURATE,[lM]:r.DST_COLOR,[rM]:r.DST_ALPHA,[sM]:r.ONE_MINUS_SRC_COLOR,[$_]:r.ONE_MINUS_SRC_ALPHA,[cM]:r.ONE_MINUS_DST_COLOR,[oM]:r.ONE_MINUS_DST_ALPHA,[fM]:r.CONSTANT_COLOR,[dM]:r.ONE_MINUS_CONSTANT_COLOR,[hM]:r.CONSTANT_ALPHA,[pM]:r.ONE_MINUS_CONSTANT_ALPHA};function me(F,Tt,xt,Ut,Vt,bt,Jt,Zt,Ge,we){if(F===Ta){M===!0&&(Rt(r.BLEND),M=!1);return}if(M===!1&&(vt(r.BLEND),M=!0),F!==QS){if(F!==_||we!==V){if((U!==Ur||L!==Ur)&&(r.blendEquation(r.FUNC_ADD),U=Ur,L=Ur),we)switch(F){case Yo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jg:r.blendFunc(r.ONE,r.ONE);break;case $g:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case t_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",F);break}else switch(F){case Yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $g:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",F);break}I=null,C=null,N=null,z=null,b.set(0,0,0),O=0,_=F,V=we}return}Vt=Vt||Tt,bt=bt||xt,Jt=Jt||Ut,(Tt!==U||Vt!==L)&&(r.blendEquationSeparate(Ze[Tt],Ze[Vt]),U=Tt,L=Vt),(xt!==I||Ut!==C||bt!==N||Jt!==z)&&(r.blendFuncSeparate(ne[xt],ne[Ut],ne[bt],ne[Jt]),I=xt,C=Ut,N=bt,z=Jt),(Zt.equals(b)===!1||Ge!==O)&&(r.blendColor(Zt.r,Zt.g,Zt.b,Ge),b.copy(Zt),O=Ge),_=F,V=!1}function fe(F,Tt){F.side===Oi?Rt(r.CULL_FACE):vt(r.CULL_FACE);let xt=F.side===$n;Tt&&(xt=!xt),ce(xt),F.blending===Yo&&F.transparent===!1?me(Ta):me(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),d.setFunc(F.depthFunc),d.setTest(F.depthTest),d.setMask(F.depthWrite),u.setMask(F.colorWrite);const Ut=F.stencilWrite;p.setTest(Ut),Ut&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ln(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){Y!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),Y=F)}function ge(F){F!==ZS?(vt(r.CULL_FACE),F!==j&&(F===Qg?r.cullFace(r.BACK):F===jS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),j=F}function je(F){F!==st&&(G&&r.lineWidth(F),st=F)}function ln(F,Tt,xt){F?(vt(r.POLYGON_OFFSET_FILL),(q!==Tt||K!==xt)&&(q=Tt,K=xt,d.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,xt))):Rt(r.POLYGON_OFFSET_FILL)}function Pe(F){F?vt(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=r.TEXTURE0+B-1),dt!==F&&(r.activeTexture(F),dt=F)}function Z(F,Tt,xt){xt===void 0&&(dt===null?xt=r.TEXTURE0+B-1:xt=dt);let Ut=D[xt];Ut===void 0&&(Ut={type:void 0,texture:void 0},D[xt]=Ut),(Ut.type!==F||Ut.texture!==Tt)&&(dt!==xt&&(r.activeTexture(xt),dt=xt),r.bindTexture(F,Tt||$[F]),Ut.type=F,Ut.texture=Tt)}function Ne(){const F=D[dt];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function be(){try{r.compressedTexImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function E(){try{r.texSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Q(){try{r.texSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function mt(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Ct(){try{r.texStorage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Nt(){try{r.texStorage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function gt(){try{r.texImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function _t(){try{r.texImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Dt(F){return S[F]!==void 0?S[F]:r.getParameter(F)}function Ht(F,Tt){S[F]!==Tt&&(r.pixelStorei(F,Tt),S[F]=Tt)}function It(F){At.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),At.copy(F))}function Ot(F){Pt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Pt.copy(F))}function Et(F,Tt){let xt=h.get(Tt);xt===void 0&&(xt=new WeakMap,h.set(Tt,xt));let Ut=xt.get(F);Ut===void 0&&(Ut=r.getUniformBlockIndex(Tt,F.name),xt.set(F,Ut))}function wt(F,Tt){const Ut=h.get(Tt).get(F);m.get(Tt)!==Ut&&(r.uniformBlockBinding(Tt,Ut,F.__bindingPointIndex),m.set(Tt,Ut))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},S={},dt=null,D={},g={},y=new WeakMap,A=[],w=null,M=!1,_=null,U=null,I=null,C=null,L=null,N=null,z=null,b=new Ce(0,0,0),O=0,V=!1,Y=null,j=null,st=null,q=null,K=null,At.set(0,0,r.canvas.width,r.canvas.height),Pt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:vt,disable:Rt,bindFramebuffer:te,drawBuffers:Lt,useProgram:ae,setBlending:me,setMaterial:fe,setFlipSided:ce,setCullFace:ge,setLineWidth:je,setPolygonOffset:ln,setScissorTest:Pe,activeTexture:Ke,bindTexture:Z,unbindTexture:Ne,compressedTexImage2D:be,compressedTexImage3D:P,texImage2D:gt,texImage3D:_t,pixelStorei:Ht,getParameter:Dt,updateUBOMapping:Et,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:It,viewport:Ot,reset:Yt}}function xA(r,t,i,s,l,u,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return A?new OffscreenCanvas(P,E):jc("canvas")}function M(P,E,Q){let lt=1;const mt=be(P);if((mt.width>Q||mt.height>Q)&&(lt=Q/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ct=Math.floor(lt*mt.width),Nt=Math.floor(lt*mt.height);g===void 0&&(g=w(Ct,Nt));const gt=E?w(Ct,Nt):g;return gt.width=Ct,gt.height=Nt,gt.getContext("2d").drawImage(P,0,0,Ct,Nt),ie("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Ct+"x"+Nt+")."),gt}else return"data"in P&&ie("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),P;return P}function _(P){return P.generateMipmaps}function U(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(P,E,Q,lt,mt,Ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;lt&&(Nt=t.get("EXT_texture_norm16"),Nt||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===r.RED&&(Q===r.FLOAT&&(gt=r.R32F),Q===r.HALF_FLOAT&&(gt=r.R16F),Q===r.UNSIGNED_BYTE&&(gt=r.R8),Q===r.UNSIGNED_SHORT&&Nt&&(gt=Nt.R16_EXT),Q===r.SHORT&&Nt&&(gt=Nt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.R8UI),Q===r.UNSIGNED_SHORT&&(gt=r.R16UI),Q===r.UNSIGNED_INT&&(gt=r.R32UI),Q===r.BYTE&&(gt=r.R8I),Q===r.SHORT&&(gt=r.R16I),Q===r.INT&&(gt=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(gt=r.RG32F),Q===r.HALF_FLOAT&&(gt=r.RG16F),Q===r.UNSIGNED_BYTE&&(gt=r.RG8),Q===r.UNSIGNED_SHORT&&Nt&&(gt=Nt.RG16_EXT),Q===r.SHORT&&Nt&&(gt=Nt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RG16UI),Q===r.UNSIGNED_INT&&(gt=r.RG32UI),Q===r.BYTE&&(gt=r.RG8I),Q===r.SHORT&&(gt=r.RG16I),Q===r.INT&&(gt=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),Q===r.UNSIGNED_INT&&(gt=r.RGB32UI),Q===r.BYTE&&(gt=r.RGB8I),Q===r.SHORT&&(gt=r.RGB16I),Q===r.INT&&(gt=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(gt=r.RGBA32UI),Q===r.BYTE&&(gt=r.RGBA8I),Q===r.SHORT&&(gt=r.RGBA16I),Q===r.INT&&(gt=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGB16_EXT),Q===r.SHORT&&Nt&&(gt=Nt.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(gt=r.R11F_G11F_B10F)),E===r.RGBA){const _t=Ct?Zc:Re.getTransfer(mt);Q===r.FLOAT&&(gt=r.RGBA32F),Q===r.HALF_FLOAT&&(gt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(gt=_t===He?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Nt&&(gt=Nt.RGBA16_EXT),Q===r.SHORT&&Nt&&(gt=Nt.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function L(P,E){let Q;return P?E===null||E===Qi||E===Jo?Q=r.DEPTH24_STENCIL8:E===Zi?Q=r.DEPTH32F_STENCIL8:E===Qo&&(Q=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===Jo?Q=r.DEPTH_COMPONENT24:E===Zi?Q=r.DEPTH_COMPONENT32F:E===Qo&&(Q=r.DEPTH_COMPONENT16),Q}function N(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),O(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&S.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),Y(E)}function O(P){const E=s.get(P);if(E.__webglInit===void 0)return;const Q=P.source,lt=y.get(Q);if(lt){const mt=lt[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&V(P),Object.keys(lt).length===0&&y.delete(Q)}s.remove(P)}function V(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const Q=P.source,lt=y.get(Q);delete lt[E.__cacheKey],d.memory.textures--}function Y(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let mt=0;mt<E.__webglFramebuffer[lt].length;mt++)r.deleteFramebuffer(E.__webglFramebuffer[lt][mt]);else r.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)r.deleteFramebuffer(E.__webglFramebuffer[lt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=P.textures;for(let lt=0,mt=Q.length;lt<mt;lt++){const Ct=s.get(Q[lt]);Ct.__webglTexture&&(r.deleteTexture(Ct.__webglTexture),d.memory.textures--),s.remove(Q[lt])}s.remove(P)}let j=0;function st(){j=0}function q(){return j}function K(P){j=P}function B(){const P=j;return P>=l.maxTextures&&ie("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function G(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ut(P,E){const Q=s.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const lt=P.image;if(lt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(Q,P,E);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function at(P,E){const Q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Rt(Q,P,E);return}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function dt(P,E){const Q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Rt(Q,P,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function D(P,E){const Q=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Q.__version!==P.version){te(Q,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const tt={[rh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[oh]:r.MIRRORED_REPEAT},pt={[Dn]:r.NEAREST,[_M]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},At={[MM]:r.NEVER,[AM]:r.ALWAYS,[yM]:r.LESS,[Qh]:r.LEQUAL,[EM]:r.EQUAL,[Jh]:r.GEQUAL,[bM]:r.GREATER,[TM]:r.NOTEQUAL};function Pt(P,E){if(E.type===Zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===xd||E.magFilter===pc||E.magFilter===Ps||E.minFilter===In||E.minFilter===xd||E.minFilter===pc||E.minFilter===Ps)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,tt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,tt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,tt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,pt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,pt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==pc&&E.minFilter!==Ps||E.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Gt(P,E){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const lt=E.source;let mt=y.get(lt);mt===void 0&&(mt={},y.set(lt,mt));const Ct=G(E);if(Ct!==P.__cacheKey){mt[Ct]===void 0&&(mt[Ct]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),mt[Ct].usedTimes++;const Nt=mt[P.__cacheKey];Nt!==void 0&&(mt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&V(E)),P.__cacheKey=Ct,P.__webglTexture=mt[Ct].texture}return Q}function $(P,E,Q){return Math.floor(Math.floor(P/Q)/E)}function vt(P,E,Q,lt){const Ct=P.updateRanges;if(Ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,lt,E.data);else{Ct.sort((Ht,It)=>Ht.start-It.start);let Nt=0;for(let Ht=1;Ht<Ct.length;Ht++){const It=Ct[Nt],Ot=Ct[Ht],Et=It.start+It.count,wt=$(Ot.start,E.width,4),Yt=$(It.start,E.width,4);Ot.start<=Et+1&&wt===Yt&&$(Ot.start+Ot.count-1,E.width,4)===wt?It.count=Math.max(It.count,Ot.start+Ot.count-It.start):(++Nt,Ct[Nt]=Ot)}Ct.length=Nt+1;const gt=i.getParameter(r.UNPACK_ROW_LENGTH),_t=i.getParameter(r.UNPACK_SKIP_PIXELS),Dt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ht=0,It=Ct.length;Ht<It;Ht++){const Ot=Ct[Ht],Et=Math.floor(Ot.start/4),wt=Math.ceil(Ot.count/4),Yt=Et%E.width,F=Math.floor(Et/E.width),Tt=wt,xt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(r.UNPACK_SKIP_ROWS,F),i.texSubImage2D(r.TEXTURE_2D,0,Yt,F,Tt,xt,Q,lt,E.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,gt),i.pixelStorei(r.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(r.UNPACK_SKIP_ROWS,Dt)}}function Rt(P,E,Q){let lt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=r.TEXTURE_3D);const mt=Gt(P,E),Ct=E.source;i.bindTexture(lt,P.__webglTexture,r.TEXTURE0+Q);const Nt=s.get(Ct);if(Ct.version!==Nt.__version||mt===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=Re.getPrimaries(Re.workingColorSpace),Ut=E.colorSpace===ls?null:Re.getPrimaries(E.colorSpace),Vt=E.colorSpace===ls||xt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let _t=M(E.image,!1,l.maxTextureSize);_t=Ne(E,_t);const Dt=u.convert(E.format,E.colorSpace),Ht=u.convert(E.type);let It=C(E.internalFormat,Dt,Ht,E.normalized,E.colorSpace,E.isVideoTexture);Pt(lt,E);let Ot;const Et=E.mipmaps,wt=E.isVideoTexture!==!0,Yt=Nt.__version===void 0||mt===!0,F=Ct.dataReady,Tt=N(E,_t);if(E.isDepthTexture)It=L(E.format===Is,E.type),Yt&&(wt?i.texStorage2D(r.TEXTURE_2D,1,It,_t.width,_t.height):i.texImage2D(r.TEXTURE_2D,0,It,_t.width,_t.height,0,Dt,Ht,null));else if(E.isDataTexture)if(Et.length>0){wt&&Yt&&i.texStorage2D(r.TEXTURE_2D,Tt,It,Et[0].width,Et[0].height);for(let xt=0,Ut=Et.length;xt<Ut;xt++)Ot=Et[xt],wt?F&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,Dt,Ht,Ot.data):i.texImage2D(r.TEXTURE_2D,xt,It,Ot.width,Ot.height,0,Dt,Ht,Ot.data);E.generateMipmaps=!1}else wt?(Yt&&i.texStorage2D(r.TEXTURE_2D,Tt,It,_t.width,_t.height),F&&vt(E,_t,Dt,Ht)):i.texImage2D(r.TEXTURE_2D,0,It,_t.width,_t.height,0,Dt,Ht,_t.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&Yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,It,Et[0].width,Et[0].height,_t.depth);for(let xt=0,Ut=Et.length;xt<Ut;xt++)if(Ot=Et[xt],E.format!==Ii)if(Dt!==null)if(wt){if(F)if(E.layerUpdates.size>0){const Vt=C_(Ot.width,Ot.height,E.format,E.type);for(const bt of E.layerUpdates){const Jt=Ot.data.subarray(bt*Vt/Ot.data.BYTES_PER_ELEMENT,(bt+1)*Vt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,bt,Ot.width,Ot.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,_t.depth,Dt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xt,It,Ot.width,Ot.height,_t.depth,0,Ot.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?F&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,_t.depth,Dt,Ht,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xt,It,Ot.width,Ot.height,_t.depth,0,Dt,Ht,Ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{wt&&Yt&&i.texStorage2D(r.TEXTURE_2D,Tt,It,Et[0].width,Et[0].height);for(let xt=0,Ut=Et.length;xt<Ut;xt++)Ot=Et[xt],E.format!==Ii?Dt!==null?wt?F&&i.compressedTexSubImage2D(r.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,Dt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,xt,It,Ot.width,Ot.height,0,Ot.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?F&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,Dt,Ht,Ot.data):i.texImage2D(r.TEXTURE_2D,xt,It,Ot.width,Ot.height,0,Dt,Ht,Ot.data)}else if(E.isDataArrayTexture)if(wt){if(Yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,It,_t.width,_t.height,_t.depth),F)if(E.layerUpdates.size>0){const xt=C_(_t.width,_t.height,E.format,E.type);for(const Ut of E.layerUpdates){const Vt=_t.data.subarray(Ut*xt/_t.data.BYTES_PER_ELEMENT,(Ut+1)*xt/_t.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ut,_t.width,_t.height,1,Dt,Ht,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Dt,Ht,_t.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,_t.width,_t.height,_t.depth,0,Dt,Ht,_t.data);else if(E.isData3DTexture)wt?(Yt&&i.texStorage3D(r.TEXTURE_3D,Tt,It,_t.width,_t.height,_t.depth),F&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Dt,Ht,_t.data)):i.texImage3D(r.TEXTURE_3D,0,It,_t.width,_t.height,_t.depth,0,Dt,Ht,_t.data);else if(E.isFramebufferTexture){if(Yt)if(wt)i.texStorage2D(r.TEXTURE_2D,Tt,It,_t.width,_t.height);else{let xt=_t.width,Ut=_t.height;for(let Vt=0;Vt<Tt;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,It,xt,Ut,0,Dt,Ht,null),xt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const xt=r.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),_t.parentNode!==xt){xt.appendChild(_t),S.add(E),xt.onpaint=Ut=>{const Vt=Ut.changedElements;for(const bt of S)Vt.includes(bt.image)&&(bt.needsUpdate=!0)},xt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_t);else{const Vt=r.RGBA,bt=r.RGBA,Jt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Vt,bt,Jt,_t)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Et.length>0){if(wt&&Yt){const xt=be(Et[0]);i.texStorage2D(r.TEXTURE_2D,Tt,It,xt.width,xt.height)}for(let xt=0,Ut=Et.length;xt<Ut;xt++)Ot=Et[xt],wt?F&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Dt,Ht,Ot):i.texImage2D(r.TEXTURE_2D,xt,It,Dt,Ht,Ot);E.generateMipmaps=!1}else if(wt){if(Yt){const xt=be(_t);i.texStorage2D(r.TEXTURE_2D,Tt,It,xt.width,xt.height)}F&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Ht,_t)}else i.texImage2D(r.TEXTURE_2D,0,It,Dt,Ht,_t);_(E)&&U(lt),Nt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function te(P,E,Q){if(E.image.length!==6)return;const lt=Gt(P,E),mt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Q);const Ct=s.get(mt);if(mt.version!==Ct.__version||lt===!0){i.activeTexture(r.TEXTURE0+Q);const Nt=Re.getPrimaries(Re.workingColorSpace),gt=E.colorSpace===ls?null:Re.getPrimaries(E.colorSpace),_t=E.colorSpace===ls||Nt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ht=E.image[0]&&E.image[0].isDataTexture,It=[];for(let bt=0;bt<6;bt++)!Dt&&!Ht?It[bt]=M(E.image[bt],!0,l.maxCubemapSize):It[bt]=Ht?E.image[bt].image:E.image[bt],It[bt]=Ne(E,It[bt]);const Ot=It[0],Et=u.convert(E.format,E.colorSpace),wt=u.convert(E.type),Yt=C(E.internalFormat,Et,wt,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,Tt=Ct.__version===void 0||lt===!0,xt=mt.dataReady;let Ut=N(E,Ot);Pt(r.TEXTURE_CUBE_MAP,E);let Vt;if(Dt){F&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Yt,Ot.width,Ot.height);for(let bt=0;bt<6;bt++){Vt=It[bt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Zt=Vt[Jt];E.format!==Ii?Et!==null?F?xt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Zt.width,Zt.height,Et,Zt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,Yt,Zt.width,Zt.height,0,Zt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Zt.width,Zt.height,Et,wt,Zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,Yt,Zt.width,Zt.height,0,Et,wt,Zt.data)}}}else{if(Vt=E.mipmaps,F&&Tt){Vt.length>0&&Ut++;const bt=be(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Yt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Ht){F?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,It[bt].width,It[bt].height,Et,wt,It[bt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Yt,It[bt].width,It[bt].height,0,Et,wt,It[bt].data);for(let Jt=0;Jt<Vt.length;Jt++){const Ge=Vt[Jt].image[bt].image;F?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Ge.width,Ge.height,Et,wt,Ge.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,Yt,Ge.width,Ge.height,0,Et,wt,Ge.data)}}else{F?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Et,wt,It[bt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Yt,Et,wt,It[bt]);for(let Jt=0;Jt<Vt.length;Jt++){const Zt=Vt[Jt];F?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Et,wt,Zt.image[bt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,Yt,Et,wt,Zt.image[bt])}}}_(E)&&U(r.TEXTURE_CUBE_MAP),Ct.__version=mt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Lt(P,E,Q,lt,mt,Ct){const Nt=u.convert(Q.format,Q.colorSpace),gt=u.convert(Q.type),_t=C(Q.internalFormat,Nt,gt,Q.normalized,Q.colorSpace),Dt=s.get(E),Ht=s.get(Q);if(Ht.__renderTarget=E,!Dt.__hasExternalTextures){const It=Math.max(1,E.width>>Ct),Ot=Math.max(1,E.height>>Ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,Ct,_t,It,Ot,E.depth,0,Nt,gt,null):i.texImage2D(mt,Ct,_t,It,Ot,0,Nt,gt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Ke(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,mt,Ht.__webglTexture,0,Pe(E)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,mt,Ht.__webglTexture,Ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(P,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const lt=E.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,Ct=L(E.stencilBuffer,mt),Nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ke(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe(E),Ct,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe(E),Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,P)}else{const lt=E.textures;for(let mt=0;mt<lt.length;mt++){const Ct=lt[mt],Nt=u.convert(Ct.format,Ct.colorSpace),gt=u.convert(Ct.type),_t=C(Ct.internalFormat,Nt,gt,Ct.normalized,Ct.colorSpace);Ke(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe(E),_t,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe(E),_t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(P,E,Q){const lt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const mt=s.get(E.depthTexture);if(mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),mt.__webglTexture===void 0){mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=u.convert(E.depthTexture.format),Ht=u.convert(E.depthTexture.type);let It;E.depthTexture.format===Ca?It=r.DEPTH_COMPONENT24:E.depthTexture.format===Is&&(It=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,It,E.width,E.height,0,Dt,Ht,null)}}else ut(E.depthTexture,0);const Ct=mt.__webglTexture,Nt=Pe(E),gt=lt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,_t=E.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)Ke(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,gt,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,gt,Ct,0);else if(E.depthTexture.format===Is)Ke(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,gt,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,_t,gt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(P){const E=s.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=lt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let lt=0;lt<6;lt++)Ze(E.__webglFramebuffer[lt],P,lt);else{const lt=P.texture.mipmaps;lt&&lt.length>0?Ze(E.__webglFramebuffer[0],P,0):Ze(E.__webglFramebuffer,P,0)}else if(Q){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=r.createRenderbuffer(),ae(E.__webglDepthbuffer[lt],P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,Ct)}}else{const lt=P.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ae(E.__webglDepthbuffer,P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,Ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function me(P,E,Q){const lt=s.get(P);E!==void 0&&Lt(lt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ne(P)}function fe(P){const E=P.texture,Q=s.get(P),lt=s.get(E);P.addEventListener("dispose",b);const mt=P.textures,Ct=P.isWebGLCubeRenderTarget===!0,Nt=mt.length>1;if(Nt||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=E.version,d.memory.textures++),Ct){Q.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[gt]=[];for(let _t=0;_t<E.mipmaps.length;_t++)Q.__webglFramebuffer[gt][_t]=r.createFramebuffer()}else Q.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)Q.__webglFramebuffer[gt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let gt=0,_t=mt.length;gt<_t;gt++){const Dt=s.get(mt[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Ke(P)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){const _t=mt[gt];Q.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[gt]);const Dt=u.convert(_t.format,_t.colorSpace),Ht=u.convert(_t.type),It=C(_t.internalFormat,Dt,Ht,_t.normalized,_t.colorSpace,P.isXRRenderTarget===!0),Ot=Pe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,It,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(Q.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Lt(Q.__webglFramebuffer[gt][_t],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else Lt(Q.__webglFramebuffer[gt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);_(E)&&U(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let gt=0,_t=mt.length;gt<_t;gt++){const Dt=mt[gt],Ht=s.get(Dt);let It=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(It=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(It,Ht.__webglTexture),Pt(It,Dt),Lt(Q.__webglFramebuffer,P,Dt,r.COLOR_ATTACHMENT0+gt,It,0),_(Dt)&&U(It)}i.unbindTexture()}else{let gt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(gt,lt.__webglTexture),Pt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Lt(Q.__webglFramebuffer[_t],P,E,r.COLOR_ATTACHMENT0,gt,_t);else Lt(Q.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,gt,0);_(E)&&U(gt),i.unbindTexture()}P.depthBuffer&&ne(P)}function ce(P){const E=P.textures;for(let Q=0,lt=E.length;Q<lt;Q++){const mt=E[Q];if(_(mt)){const Ct=I(P),Nt=s.get(mt).__webglTexture;i.bindTexture(Ct,Nt),U(Ct),i.unbindTexture()}}}const ge=[],je=[];function ln(P){if(P.samples>0){if(Ke(P)===!1){const E=P.textures,Q=P.width,lt=P.height;let mt=r.COLOR_BUFFER_BIT;const Ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(P),gt=E.length>1;if(gt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const _t=P.texture.mipmaps;_t&&_t.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Ht=s.get(E[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,mt,r.NEAREST),m===!0&&(ge.length=0,je.length=0,ge.push(r.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ge.push(Ct),je.push(Ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Ht=s.get(E[Dt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,Ht,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Pe(P){return Math.min(l.maxSamples,P.samples)}function Ke(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(P){const E=d.render.frame;x.get(P)!==E&&(x.set(P,E),P.update())}function Ne(P,E){const Q=P.colorSpace,lt=P.format,mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Yc&&Q!==ls&&(Re.getTransfer(Q)===He?(lt!==Ii||mt!==pi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",Q)),E}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=st,this.getTextureUnits=q,this.setTextureUnits=K,this.setTexture2D=ut,this.setTexture2DArray=at,this.setTexture3D=dt,this.setTextureCube=D,this.rebindTextures=me,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SA(r,t){function i(s,l=ls){let u;const d=Re.getTransfer(l);if(s===pi)return r.UNSIGNED_BYTE;if(s===qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lv)return r.BYTE;if(s===cv)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===Qi)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Ji)return r.HALF_FLOAT;if(s===dv)return r.ALPHA;if(s===hv)return r.RGB;if(s===Ii)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===pv)return r.RED;if(s===Zh)return r.RED_INTEGER;if(s===Fs)return r.RG;if(s===jh)return r.RG_INTEGER;if(s===Kh)return r.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(d===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lh||s===ch||s===uh||s===fh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dh||s===hh||s===ph||s===mh||s===gh||s===Wc||s===_h)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===dh||s===hh)return d===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ph)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===mh)return u.COMPRESSED_R11_EAC;if(s===gh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return u.COMPRESSED_RG11_EAC;if(s===_h)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vh||s===xh||s===Sh||s===Mh||s===yh||s===Eh||s===bh||s===Th||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Nh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===vh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Th)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ah)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ch)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===Lh||s===Oh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Uh)return d===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Ih||s===qc||s===zh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ph)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new bv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new $i({vertexShader:MA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ae(new au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Hs{constructor(t,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,g=null,y=null,A=null;const w=typeof XRWebGLBinding<"u",M=new EA,_={},U=i.getContextAttributes();let I=null,C=null;const L=[],N=[],z=new Ee;let b=null,O=null;const V=new hi;V.viewport=new nn;const Y=new hi;Y.viewport=new nn;const j=[V,Y],st=new Ny;let q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let vt=L[$];return vt===void 0&&(vt=new Ad,L[$]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function($){let vt=L[$];return vt===void 0&&(vt=new Ad,L[$]=vt),vt.getGripSpace()},this.getHand=function($){let vt=L[$];return vt===void 0&&(vt=new Ad,L[$]=vt),vt.getHandSpace()};function B($){const vt=N.indexOf($.inputSource);if(vt===-1)return;const Rt=L[vt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,h||d),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",ut);for(let $=0;$<L.length;$++){const vt=N[$];vt!==null&&(N[$]=null,L[$].disconnect(vt))}q=null,K=null,M.reset();for(const $ in _)delete _[$];if(t.setRenderTarget(I),y=null,g=null,S=null,l=null,C=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),O!==null){const $=O.camera;$.fov=O.fov,$.zoom=O.zoom,$.updateProjectionMatrix(),O=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",G),l.addEventListener("inputsourceschange",ut),U.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,te=null,Lt=null;U.depth&&(Lt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=U.stencil?Is:Ca,te=U.stencil?Jo:Qi);const ae={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:u};S=this.getBinding(),g=S.createProjectionLayer(ae),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new zi(g.textureWidth,g.textureHeight,{format:Ii,type:pi,depthTexture:new el(g.textureWidth,g.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Rt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new zi(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut($){for(let vt=0;vt<$.removed.length;vt++){const Rt=$.removed[vt],te=N.indexOf(Rt);te>=0&&(N[te]=null,L[te].disconnect(Rt))}for(let vt=0;vt<$.added.length;vt++){const Rt=$.added[vt];let te=N.indexOf(Rt);if(te===-1){for(let ae=0;ae<L.length;ae++)if(ae>=N.length){N.push(Rt),te=ae;break}else if(N[ae]===null){N[ae]=Rt,te=ae;break}if(te===-1)break}const Lt=L[te];Lt&&Lt.connect(Rt)}}const at=new et,dt=new et;function D($,vt,Rt){at.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(Rt.matrixWorld);const te=at.distanceTo(dt),Lt=vt.projectionMatrix.elements,ae=Rt.projectionMatrix.elements,Ze=Lt[14]/(Lt[10]-1),ne=Lt[14]/(Lt[10]+1),me=(Lt[9]+1)/Lt[5],fe=(Lt[9]-1)/Lt[5],ce=(Lt[8]-1)/Lt[0],ge=(ae[8]+1)/ae[0],je=Ze*ce,ln=Ze*ge,Pe=te/(-ce+ge),Ke=Pe*-ce;if(vt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ke),$.translateZ(Pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Z=Ze+Pe,Ne=ne+Pe,be=je-Ke,P=ln+(te-Ke),E=me*ne/Ne*Z,Q=fe*ne/Ne*Z;$.projectionMatrix.makePerspective(be,P,E,Q,Z,Ne),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,vt){vt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(vt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let vt=$.near,Rt=$.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),st.near=Y.near=V.near=vt,st.far=Y.far=V.far=Rt,(q!==st.near||K!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),q=st.near,K=st.far),st.layers.mask=$.layers.mask|6,V.layers.mask=st.layers.mask&-5,Y.layers.mask=st.layers.mask&-3;const te=$.parent,Lt=st.cameras;tt(st,te);for(let ae=0;ae<Lt.length;ae++)tt(Lt[ae],te);Lt.length===2?D(st,V,Y):st.projectionMatrix.copy(V.projectionMatrix),O===null&&$.isPerspectiveCamera&&(O={camera:$,fov:$.fov,zoom:$.zoom}),pt($,st,te)};function pt($,vt,Rt){Rt===null?$.matrix.copy(vt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(vt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=tl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function($){return _[$]};let At=null;function Pt($,vt){if(x=vt.getViewerPose(h||d),A=vt,x!==null){const Rt=x.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let te=!1;Rt.length!==st.cameras.length&&(st.cameras.length=0,te=!0);for(let ne=0;ne<Rt.length;ne++){const me=Rt[ne];let fe=null;if(y!==null)fe=y.getViewport(me);else{const ge=S.getViewSubImage(g,me);fe=ge.viewport,ne===0&&(t.setRenderTargetTextures(C,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(C))}let ce=j[ne];ce===void 0&&(ce=new hi,ce.layers.enable(ne),ce.viewport=new nn,j[ne]=ce),ce.matrix.fromArray(me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(fe.x,fe.y,fe.width,fe.height),ne===0&&(st.matrix.copy(ce.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),te===!0&&st.cameras.push(ce)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const ne=S.getDepthInformation(Rt[0]);ne&&ne.isValid&&ne.texture&&M.init(ne,l.renderState)}if(Lt&&Lt.includes("camera-access")&&w){t.state.unbindTexture(),S=s.getBinding();for(let ne=0;ne<Rt.length;ne++){const me=Rt[ne].camera;if(me){let fe=_[me];fe||(fe=new bv,_[me]=fe);const ce=S.getCameraImage(me);fe.sourceTexture=ce}}}}for(let Rt=0;Rt<L.length;Rt++){const te=N[Rt],Lt=L[Rt];te!==null&&Lt!==void 0&&Lt.update(te,vt,h||d)}At&&At($,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),A=null}const Gt=new Cv;Gt.setAnimationLoop(Pt),this.setAnimationLoop=function($){At=$},this.dispose=function(){}}}const TA=new an,Pv=new re;Pv.set(-1,0,0,0,1,0,0,0,1);function AA(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Tv(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,U,I,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(M,_):_.isMeshLambertMaterial?(u(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(M,_),S(M,_)):_.isMeshPhongMaterial?(u(M,_),x(M,_),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(M,_),g(M,_),_.isMeshPhysicalMaterial&&y(M,_,C)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),w(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&p(M,_)):_.isPointsMaterial?m(M,_,U,I):_.isSpriteMaterial?h(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===$n&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===$n&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const U=t.get(_),I=U.envMap,C=U.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Pv),M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function p(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,U,I){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*U,M.scale.value=I*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function S(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function g(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,U){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.retroreflectivity>0&&(M.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function w(M,_){const U=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RA(r,t,i,s){let l={},u={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function h(C,L){let N=l[C.id];N===void 0&&(M(C),N=x(C),l[C.id]=N,C.addEventListener("dispose",U));const z=L.program;s.updateUBOMapping(C,z);const b=t.render.frame;u[C.id]!==b&&(g(C),u[C.id]=b)}function x(C){const L=S();C.__bindingPointIndex=L;const N=r.createBuffer(),z=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,z,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function S(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],N=C.uniforms,z=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let b=0,O=N.length;b<O;b++){const V=N[b];if(Array.isArray(V))for(let Y=0,j=V.length;Y<j;Y++)y(V[Y],b,Y,z);else y(V,b,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,N,z){if(w(C,L,N,z)===!0){const b=C.__offset,O=C.value;if(Array.isArray(O)){let V=0;for(let Y=0;Y<O.length;Y++){const j=O[Y],st=_(j);A(j,C.__data,V),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(V+=st.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function A(C,L,N){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,N)}function w(C,L,N,z){const b=C.value,O=L+"_"+N;if(z[O]===void 0)return typeof b=="number"||typeof b=="boolean"?z[O]=b:ArrayBuffer.isView(b)?z[O]=b.slice():z[O]=b.clone(),!0;{const V=z[O];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return z[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(V.equals(b)===!1)return V.copy(b),!0}}return!1}function M(C){const L=C.uniforms;let N=0;const z=16;for(let O=0,V=L.length;O<V;O++){const Y=Array.isArray(L[O])?L[O]:[L[O]];for(let j=0,st=Y.length;j<st;j++){const q=Y[j],K=Array.isArray(q.value)?q.value:[q.value];for(let B=0,G=K.length;B<G;B++){const ut=K[B],at=_(ut),dt=N%z,D=dt%at.boundary,tt=dt+D;N+=D,tt!==0&&z-tt<at.storage&&(N+=z-tt),q.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=at.storage}}}const b=N%z;return b>0&&(N+=z-b),C.__size=N,C.__cache={},this}function _(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",C),L}function U(C){const L=C.target;L.removeEventListener("dispose",U);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function I(){for(const C in l)r.deleteBuffer(l[C]);d=[],l={},u={}}return{bind:m,update:h,dispose:I}}const CA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function wA(){return Wi===null&&(Wi=new my(CA,16,16,Fs,Ji),Wi.name="DFG_LUT",Wi.minFilter=In,Wi.magFilter=In,Wi.wrapS=ba,Wi.wrapT=ba,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class DA{constructor(t={}){const{canvas:i=wM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=pi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const w=y,M=new Set([Kh,jh,Zh]),_=new Set([pi,Qi,Qo,Jo,qh,Yh]),U=new Uint32Array(4),I=new Int32Array(4),C=new et;let L=null,N=null;const z=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let Y=!1,j=null,st=null,q=null,K=null;this._outputColorSpace=Ai;let B=0,G=0,ut=null,at=-1,dt=null;const D=new nn,tt=new nn;let pt=null;const At=new Ce(0);let Pt=0,Gt=i.width,$=i.height,vt=1,Rt=null,te=null;const Lt=new nn(0,0,Gt,$),ae=new nn(0,0,Gt,$);let Ze=!1;const ne=new ep;let me=!1,fe=!1;const ce=new an,ge=new et,je=new nn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ke(){return ut===null?vt:1}let Z=s;function Ne(T,X){return i.getContext(T,X)}let be,P,E,Q,lt,mt,Ct,Nt,gt,_t,Dt,Ht,It,Ot,Et,wt,Yt,F,Tt,xt,Ut,Vt,bt;try{const T={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Ge,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",Xn,!1),Z===null){const X="webgl2";if(Z=Ne(X,T),Z===null)throw Ne(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(T){throw i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Xn,!1),Oe("WebGLRenderer: "+T.message),T}function Jt(){be=new wT(Z),be.init(),Ut=new SA(Z,be),P=new xT(Z,be,t,Ut),E=new vA(Z,be),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),st=Z.createFramebuffer(),q=Z.createFramebuffer(),K=Z.createFramebuffer(),Q=new UT(Z),lt=new aA,mt=new xA(Z,be,E,lt,P,Ut,Q),Ct=new CT(V),Nt=new Oy(Z),Vt=new _T(Z,Nt),gt=new DT(Z,Nt,Q,Vt),_t=new OT(Z,gt,Nt,Vt,Q),F=new LT(Z,P,mt),Et=new ST(lt),Dt=new iA(V,Ct,be,P,Vt,Et),Ht=new AA(V,lt),It=new rA,Ot=new dA(be),Yt=new gT(V,Ct,E,_t,A,m),wt=new _A(V,_t,P),bt=new RA(Z,Q,P,E),Tt=new vT(Z,be,Q),xt=new NT(Z,be,Q),Q.programs=Dt.programs,V.capabilities=P,V.extensions=be,V.properties=lt,V.renderLists=It,V.shadowMap=wt,V.state=E,V.info=Q}w!==pi&&(O=new IT(w,i.width,i.height,p,l,u));const Zt=new bA(V,Z);this.xr=Zt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(T){T!==void 0&&(vt=T,this.setSize(Gt,$,!1))},this.getSize=function(T){return T.set(Gt,$)},this.setSize=function(T,X,ft=!0){if(Zt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=T,$=X,i.width=Math.floor(T*vt),i.height=Math.floor(X*vt),ft===!0&&(i.style.width=T+"px",i.style.height=X+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Gt*vt,$*vt).floor()},this.setDrawingBufferSize=function(T,X,ft){Gt=T,$=X,vt=ft,i.width=Math.floor(T*ft),i.height=Math.floor(X*ft),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(w===pi){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Lt)},this.setViewport=function(T,X,ft,nt){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,X,ft,nt),E.viewport(D.copy(Lt).multiplyScalar(vt).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,X,ft,nt){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,X,ft,nt),E.scissor(tt.copy(ae).multiplyScalar(vt).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){E.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){Rt=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ft=!0){let nt=0;if(T){let it=!1;if(ut!==null){const Bt=ut.texture.format;it=M.has(Bt)}if(it){const Bt=ut.texture.type,Wt=_.has(Bt),zt=Yt.getClearColor(),kt=Yt.getClearAlpha(),Xt=zt.r,oe=zt.g,_e=zt.b;Wt?(U[0]=Xt,U[1]=oe,U[2]=_e,U[3]=kt,Z.clearBufferuiv(Z.COLOR,0,U)):(I[0]=Xt,I[1]=oe,I[2]=_e,I[3]=kt,Z.clearBufferiv(Z.COLOR,0,I))}else nt|=Z.COLOR_BUFFER_BIT}X&&(nt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),j=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Xn,!1),Yt.dispose(),It.dispose(),Ot.dispose(),lt.dispose(),Ct.dispose(),_t.dispose(),Vt.dispose(),bt.dispose(),Dt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",fn),Zt.removeEventListener("sessionend",Tn),Wn.stop()};function Ge(T){T.preventDefault(),i_("WebGLRenderer: Context Lost."),Y=!0}function we(){i_("WebGLRenderer: Context Restored."),Y=!1;const T=Q.autoReset,X=wt.enabled,ft=wt.autoUpdate,nt=wt.needsUpdate,it=wt.type;Jt(),Q.autoReset=T,wt.enabled=X,wt.autoUpdate=ft,wt.needsUpdate=nt,wt.type=it}function Xn(T){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ti(T){const X=T.target;X.removeEventListener("dispose",ti),kr(X)}function kr(T){Xr(T),lt.remove(T)}function Xr(T){const X=lt.get(T).programs;X!==void 0&&(X.forEach(function(ft){Dt.releaseProgram(ft)}),T.isShaderMaterial&&Dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ft,nt,it,Bt){X===null&&(X=ln);const Wt=it.isMesh&&it.matrixWorld.determinantAffine()<0,zt=Na(T,X,ft,nt,it);E.setMaterial(nt,Wt);let kt=ft.index,Xt=1;if(nt.wireframe===!0){if(kt=gt.getWireframeAttribute(ft),kt===void 0)return;Xt=2}const oe=ft.drawRange,_e=ft.attributes.position;let jt=oe.start*Xt,De=(oe.start+oe.count)*Xt;Bt!==null&&(jt=Math.max(jt,Bt.start*Xt),De=Math.min(De,(Bt.start+Bt.count)*Xt)),kt!==null?(jt=Math.max(jt,0),De=Math.min(De,kt.count)):_e!=null&&(jt=Math.max(jt,0),De=Math.min(De,_e.count));const Qe=De-jt;if(Qe<0||Qe===1/0)return;Vt.setup(it,nt,zt,ft,kt);let qe,de=Tt;if(kt!==null&&(qe=Nt.get(kt),de=xt,de.setIndex(qe)),it.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*Ke()),de.setMode(Z.LINES)):de.setMode(Z.TRIANGLES);else if(it.isLine){let hn=nt.linewidth;hn===void 0&&(hn=1),E.setLineWidth(hn*Ke()),it.isLineSegments?de.setMode(Z.LINES):it.isLineLoop?de.setMode(Z.LINE_LOOP):de.setMode(Z.LINE_STRIP)}else it.isPoints?de.setMode(Z.POINTS):it.isSprite&&de.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(be.get("WEBGL_multi_draw"))de.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const hn=it._multiDrawStarts,qt=it._multiDrawCounts,xn=it._multiDrawCount,he=kt?Nt.get(kt).bytesPerElement:1,zn=lt.get(nt).currentProgram.getUniforms();for(let ei=0;ei<xn;ei++)zn.setValue(Z,"_gl_DrawID",ei),de.render(hn[ei]/he,qt[ei])}else if(it.isInstancedMesh)de.renderInstances(jt,Qe,it.count);else if(ft.isInstancedBufferGeometry){const hn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,qt=Math.min(ft.instanceCount,hn);de.renderInstances(jt,Qe,qt)}else de.render(jt,Qe)};function Wr(T,X,ft,nt){j!==null&&T.isNodeMaterial&&j.setObject(nt,T),me===!0&&Et.setState(T,ft,!1),T.transparent===!0&&T.side===Oi&&T.forceSinglePass===!1?(T.side=$n,T.needsUpdate=!0,Da(T,X,nt),T.side=zs,T.needsUpdate=!0,Da(T,X,nt),T.side=Oi):Da(T,X,nt)}this.compile=function(T,X,ft=null){ft===null&&(ft=T),j!==null&&j.renderStart(T,X,ft),N=Ot.get(ft),N.init(X),b.push(N),ft.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),T!==ft&&T.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(N.pushLight(it),it.castShadow&&N.pushShadow(it))}),N.setupLights(),j!==null&&j.updateLights(N.state.lightsArray),fe=this.localClippingEnabled,me=Et.init(this.clippingPlanes,fe),me===!0&&Et.setGlobalState(this.clippingPlanes,X),j!==null&&wt.render(N.state.shadowsArray,ft,X);const nt=new Set;return T.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Bt=it.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const zt=Bt[Wt];Wr(zt,ft,X,it),nt.add(zt)}else Wr(Bt,ft,X,it),nt.add(Bt)}),N=b.pop(),j!==null&&j.renderEnd(),nt},this.compileAsync=function(T,X,ft=null){const nt=this.compile(T,X,ft);return new Promise(it=>{function Bt(){if(nt.forEach(function(Wt){const kt=lt.get(Wt).currentProgram;(kt===void 0||kt.isReady())&&nt.delete(Wt)}),nt.size===0){it(T);return}setTimeout(Bt,10)}be.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Gs=null;function Bi(T){Gs&&Gs(T)}function fn(){Wn.stop()}function Tn(){Wn.start()}const Wn=new Cv;Wn.setAnimationLoop(Bi),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(T){Gs=T,Zt.setAnimationLoop(T),T===null?Wn.stop():Wn.start()},Zt.addEventListener("sessionstart",fn),Zt.addEventListener("sessionend",Tn),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;j!==null&&j.renderStart(T,X);const ft=Zt.enabled===!0&&Zt.isPresenting===!0,nt=O!==null&&(ut===null||ft)&&O.begin(V,ut);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(X),X=Zt.getCamera()),T.isScene===!0&&T.onBeforeRender(V,T,X,ut),N=Ot.get(T,b.length),N.init(X),N.state.textureUnits=mt.getTextureUnits(),b.push(N),ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(ce,ji,X.reversedDepth),fe=this.localClippingEnabled,me=Et.init(this.clippingPlanes,fe),L=It.get(T,z.length),L.init(),z.push(L),Zt.enabled===!0&&Zt.isPresenting===!0){const Wt=V.xr.getDepthSensingMesh();Wt!==null&&us(Wt,X,-1/0,V.sortObjects)}us(T,X,0,V.sortObjects),L.finish(),j!==null&&j.updateLights(N.state.lightsArray),V.sortObjects===!0&&L.sort(Rt,te),Pe=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(L,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Et.beginShadows();const it=N.state.shadowsArray;if(wt.render(it,T,X),me===!0&&Et.endShadows(),(nt&&O.hasRenderPass())===!1){const Wt=L.opaque,zt=L.transmissive;if(N.setupLights(),X.isArrayCamera){const kt=X.cameras;if(zt.length>0)for(let Xt=0,oe=kt.length;Xt<oe;Xt++){const _e=kt[Xt];al(Wt,zt,T,_e)}Pe&&Yt.render(T);for(let Xt=0,oe=kt.length;Xt<oe;Xt++){const _e=kt[Xt];il(L,T,_e,_e.viewport)}}else zt.length>0&&al(Wt,zt,T,X),Pe&&Yt.render(T),il(L,T,X)}ut!==null&&G===0&&(mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut)),nt&&O.end(V),T.isScene===!0&&T.onAfterRender(V,T,X),Vt.resetDefaultState(),at=-1,dt=null,b.pop(),b.length>0?(N=b[b.length-1],mt.setTextureUnits(N.state.textureUnits),me===!0&&Et.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?L=z[z.length-1]:L=null,j!==null&&j.renderEnd()};function us(T,X,ft,nt){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ft=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)N.pushLightProbeGrid(T);else if(T.isLight)N.pushLight(T),T.castShadow&&N.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ne)){nt&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Wt=_t.update(T),zt=T.material;zt.visible&&L.push(T,Wt,zt,ft,je.z,null,X)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ne))){const Wt=_t.update(T),zt=T.material;if(nt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),je.copy(Wt.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(zt)){const kt=Wt.groups;for(let Xt=0,oe=kt.length;Xt<oe;Xt++){const _e=kt[Xt],jt=zt[_e.materialIndex];jt&&jt.visible&&L.push(T,Wt,jt,ft,je.z,_e,X)}}else zt.visible&&L.push(T,Wt,zt,ft,je.z,null,X)}}const Bt=T.children;for(let Wt=0,zt=Bt.length;Wt<zt;Wt++)us(Bt[Wt],X,ft,nt)}function il(T,X,ft,nt){const{opaque:it,transmissive:Bt,transparent:Wt}=T;N.setupLightsView(ft),me===!0&&Et.setGlobalState(V.clippingPlanes,ft),nt&&E.viewport(D.copy(nt)),it.length>0&&fs(it,X,ft),Bt.length>0&&fs(Bt,X,ft),Wt.length>0&&fs(Wt,X,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function al(T,X,ft,nt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[nt.id]===void 0){const jt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[nt.id]=new zi(1,1,{generateMipmaps:!0,type:jt?Ji:pi,minFilter:Ps,samples:Math.max(4,P.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[nt.id],Wt=nt.viewport||D;Bt.setSize(Wt.z*V.transmissionResolutionScale,Wt.w*V.transmissionResolutionScale);const zt=V.getRenderTarget(),kt=V.getActiveCubeFace(),Xt=V.getActiveMipmapLevel();V.setRenderTarget(Bt),V.getClearColor(At),Pt=V.getClearAlpha(),Pt<1&&V.setClearColor(16777215,.5),V.clear(),Pe&&Yt.render(ft);const oe=V.toneMapping;V.toneMapping=Ki;const _e=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),me===!0&&Et.setGlobalState(V.clippingPlanes,nt),fs(T,ft,nt),mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt),be.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let De=0,Qe=X.length;De<Qe;De++){const qe=X[De],{object:de,geometry:hn,material:qt,group:xn}=qe;if(qt.side===Oi&&de.layers.test(nt.layers)){const he=qt.side;qt.side=$n,qt.needsUpdate=!0,wa(de,ft,nt,hn,qt,xn),qt.side=he,qt.needsUpdate=!0,jt=!0}}jt===!0&&(mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt))}V.setRenderTarget(zt,kt,Xt),V.setClearColor(At,Pt),_e!==void 0&&(nt.viewport=_e),V.toneMapping=oe}function fs(T,X,ft){const nt=X.isScene===!0?X.overrideMaterial:null;for(let it=0,Bt=T.length;it<Bt;it++){const Wt=T[it],{object:zt,geometry:kt,group:Xt}=Wt;let oe=Wt.material;oe.allowOverride===!0&&nt!==null&&(oe=nt),zt.layers.test(ft.layers)&&wa(zt,X,ft,kt,oe,Xt)}}function wa(T,X,ft,nt,it,Bt){j!==null&&it.isNodeMaterial&&j.setObject(T,it),T.onBeforeRender(V,X,ft,nt,it,Bt),T.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),it.onBeforeRender(V,X,ft,nt,T,Bt),it.transparent===!0&&it.side===Oi&&it.forceSinglePass===!1?(it.side=$n,it.needsUpdate=!0,V.renderBufferDirect(ft,X,nt,it,T,Bt),it.side=zs,it.needsUpdate=!0,V.renderBufferDirect(ft,X,nt,it,T,Bt),it.side=Oi):V.renderBufferDirect(ft,X,nt,it,T,Bt),T.onAfterRender(V,X,ft,nt,it,Bt)}function Da(T,X,ft){X.isScene!==!0&&(X=ln);const nt=lt.get(T),it=N.state.lights,Bt=N.state.shadowsArray,Wt=it.state.version,zt=Dt.getParameters(T,it.state,Bt,X,ft,N.state.lightProbeGridArray),kt=Dt.getProgramCacheKey(zt);let Xt=nt.programs;nt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;nt.envMap=Ct.get(T.envMap||nt.environment,oe),nt.envMapRotation=nt.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Xt===void 0&&(T.addEventListener("dispose",ti),Xt=new Map,nt.programs=Xt);let _e=Xt.get(kt);if(_e!==void 0){if(nt.currentProgram===_e&&nt.lightsStateVersion===Wt)return ea(T,zt),_e}else zt.uniforms=Dt.getUniforms(T),j!==null&&T.isNodeMaterial&&j.build(T,ft,zt),T.onBeforeCompile(zt,V),_e=Dt.acquireProgram(zt,kt),Xt.set(kt,_e),nt.uniforms=zt.uniforms;const jt=nt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=Et.uniform),ea(T,zt),nt.needsLights=sl(T),nt.lightsStateVersion=Wt,nt.needsLights&&(jt.ambientLightColor.value=it.state.ambient,jt.lightProbe.value=it.state.probe,jt.sunLights.value=it.state.sun,jt.sunLightShadows.value=it.state.sunShadow,jt.directionalLights.value=it.state.directional,jt.directionalLightShadows.value=it.state.directionalShadow,jt.spotLights.value=it.state.spot,jt.spotLightShadows.value=it.state.spotShadow,jt.rectAreaLights.value=it.state.rectArea,jt.ltc_1.value=it.state.rectAreaLTC1,jt.ltc_2.value=it.state.rectAreaLTC2,jt.pointLights.value=it.state.point,jt.pointLightShadows.value=it.state.pointShadow,jt.hemisphereLights.value=it.state.hemi,jt.sunShadowMatrix.value=it.state.sunShadowMatrix,jt.sunShadowCascade.value=it.state.sunShadowCascade,jt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,jt.spotLightMatrix.value=it.state.spotLightMatrix,jt.spotLightMap.value=it.state.spotLightMap,jt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=N.state.lightProbeGridArray.length>0,nt.currentProgram=_e,nt.uniformsList=null,_e}function ta(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Xc.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function ea(T,X){const ft=lt.get(T);ft.outputColorSpace=X.outputColorSpace,ft.batching=X.batching,ft.batchingColor=X.batchingColor,ft.instancing=X.instancing,ft.instancingColor=X.instancingColor,ft.instancingMorph=X.instancingMorph,ft.skinning=X.skinning,ft.morphTargets=X.morphTargets,ft.morphNormals=X.morphNormals,ft.morphColors=X.morphColors,ft.morphTargetsCount=X.morphTargetsCount,ft.numClippingPlanes=X.numClippingPlanes,ft.numIntersection=X.numClipIntersection,ft.vertexAlphas=X.vertexAlphas,ft.vertexTangents=X.vertexTangents,ft.toneMapping=X.toneMapping}function ds(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let ft=0,nt=T.length;ft<nt;ft++){const it=T[ft];if(it.texture!==null&&it.boundingBox.containsPoint(C))return it}return null}function Na(T,X,ft,nt,it){X.isScene!==!0&&(X=ln),mt.resetTextureUnits();const Bt=X.fog,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,zt=ut===null?V.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Re.workingColorSpace,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Xt=Ct.get(nt.envMap||Wt,kt),oe=nt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,_e=!!ft.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),jt=!!ft.morphAttributes.position,De=!!ft.morphAttributes.normal,Qe=!!ft.morphAttributes.color;let qe=Ki;nt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qe=V.toneMapping);const de=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,hn=de!==void 0?de.length:0,qt=lt.get(nt),xn=N.state.lights;if(me===!0&&(fe===!0||T!==dt)){const Ve=T===dt&&nt.id===at;Et.setState(nt,T,Ve)}let he=!1;nt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==xn.state.version||qt.outputColorSpace!==zt||it.isBatchedMesh&&qt.batching===!1||!it.isBatchedMesh&&qt.batching===!0||it.isBatchedMesh&&qt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&qt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&qt.instancing===!1||!it.isInstancedMesh&&qt.instancing===!0||it.isSkinnedMesh&&qt.skinning===!1||!it.isSkinnedMesh&&qt.skinning===!0||it.isInstancedMesh&&qt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&qt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&qt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&qt.instancingMorph===!1&&it.morphTexture!==null||qt.envMap!==Xt||nt.fog===!0&&qt.fog!==Bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Et.numPlanes||qt.numIntersection!==Et.numIntersection)||qt.vertexAlphas!==oe||qt.vertexTangents!==_e||qt.morphTargets!==jt||qt.morphNormals!==De||qt.morphColors!==Qe||qt.toneMapping!==qe||qt.morphTargetsCount!==hn||!!qt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,qt.__version=nt.version);let zn=qt.currentProgram;he===!0&&(zn=Da(nt,X,it),j&&nt.isNodeMaterial&&j.onUpdateProgram(nt,zn,qt));let ei=!1,Bn=!1,Ua=!1;const Ie=zn.getUniforms(),tn=qt.uniforms;if(E.useProgram(zn.program)&&(ei=!0,Bn=!0,Ua=!0),nt.id!==at&&(at=nt.id,Bn=!0),qt.needsLights){const Ve=ds(N.state.lightProbeGridArray,it);qt.lightProbeGrid!==Ve&&(qt.lightProbeGrid=Ve,Bn=!0)}if(ei||dt!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ie.setValue(Z,"projectionMatrix",T.projectionMatrix),Ie.setValue(Z,"viewMatrix",T.matrixWorldInverse);const Fi=Ie.map.cameraPosition;Fi!==void 0&&Fi.setValue(Z,ge.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Ie.setValue(Z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ie.setValue(Z,"isOrthographic",T.isOrthographicCamera===!0),dt!==T&&(dt=T,Bn=!0,Ua=!0)}if(qt.needsLights&&(xn.state.sunShadowMap.length>0&&Ie.setValue(Z,"sunShadowMap",xn.state.sunShadowMap,mt),xn.state.directionalShadowMap.length>0&&Ie.setValue(Z,"directionalShadowMap",xn.state.directionalShadowMap,mt),xn.state.spotShadowMap.length>0&&Ie.setValue(Z,"spotShadowMap",xn.state.spotShadowMap,mt),xn.state.pointShadowMap.length>0&&Ie.setValue(Z,"pointShadowMap",xn.state.pointShadowMap,mt)),it.isSkinnedMesh){Ie.setOptional(Z,it,"bindMatrix"),Ie.setOptional(Z,it,"bindMatrixInverse");const Ve=it.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ie.setValue(Z,"boneTexture",Ve.boneTexture,mt))}it.isBatchedMesh&&(Ie.setOptional(Z,it,"batchingTexture"),Ie.setValue(Z,"batchingTexture",it._matricesTexture,mt),Ie.setOptional(Z,it,"batchingIdTexture"),Ie.setValue(Z,"batchingIdTexture",it._indirectTexture,mt),Ie.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&Ie.setValue(Z,"batchingColorTexture",it._colorsTexture,mt));const mi=ft.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&F.update(it,ft,zn),(Bn||qt.receiveShadow!==it.receiveShadow)&&(qt.receiveShadow=it.receiveShadow,Ie.setValue(Z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(tn.envMapIntensity.value=X.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=wA()),Bn){if(Ie.setValue(Z,"toneMappingExposure",V.toneMappingExposure),qt.needsLights&&dn(tn,Ua),Bt&&nt.fog===!0&&Ht.refreshFogUniforms(tn,Bt),Ht.refreshMaterialUniforms(tn,nt,vt,$,N.state.transmissionRenderTarget[T.id]),qt.needsLights&&qt.lightProbeGrid){const Ve=qt.lightProbeGrid;tn.probesSH.value=Ve.texture,tn.probesMin.value.copy(Ve.boundingBox.min),tn.probesMax.value.copy(Ve.boundingBox.max),tn.probesResolution.value.copy(Ve.resolution)}Xc.upload(Z,ta(qt),tn,mt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Xc.upload(Z,ta(qt),tn,mt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ie.setValue(Z,"center",it.center),Ie.setValue(Z,"modelViewMatrix",it.modelViewMatrix),Ie.setValue(Z,"normalMatrix",it.normalMatrix),Ie.setValue(Z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ve=nt.uniformsGroups;for(let Fi=0,Ri=Ve.length;Fi<Ri;Fi++){const gi=Ve[Fi];bt.update(gi,zn),bt.bind(gi,zn)}}return zn}function dn(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function sl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(T,X,ft){const nt=lt.get(T);nt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),lt.get(T.texture).__webglTexture=X,lt.get(T.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ft,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ft=lt.get(T);ft.__webglFramebuffer=X,ft.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,ft=0){ut=T,B=X,G=ft;let nt=null,it=!1,Bt=!1;if(T){const zt=lt.get(T);if(zt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,zt.__webglFramebuffer),D.copy(T.viewport),tt.copy(T.scissor),pt=T.scissorTest,E.viewport(D),E.scissor(tt),E.setScissorTest(pt),at=-1;return}else if(zt.__webglFramebuffer===void 0)mt.setupRenderTarget(T);else if(zt.__hasExternalTextures)mt.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const oe=T.depthTexture;if(zt.__boundDepthTexture!==oe){if(oe!==null&&lt.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Bt=!0);const Xt=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[X])?nt=Xt[X][ft]:nt=Xt[X],it=!0):T.samples>0&&mt.useMultisampledRTT(T)===!1?nt=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?nt=Xt[ft]:nt=Xt,D.copy(T.viewport),tt.copy(T.scissor),pt=T.scissorTest}else D.copy(Lt).multiplyScalar(vt).floor(),tt.copy(ae).multiplyScalar(vt).floor(),pt=Ze;if(ft!==0&&(nt=st),E.bindFramebuffer(Z.FRAMEBUFFER,nt)&&E.drawBuffers(T,nt),E.viewport(D),E.scissor(tt),E.setScissorTest(pt),it){const zt=lt.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,zt.__webglTexture,ft)}else if(Bt){const zt=X;for(let kt=0;kt<T.textures.length;kt++){const Xt=lt.get(T.textures[kt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+kt,Xt.__webglTexture,ft,zt)}}else if(T!==null&&ft!==0){const zt=lt.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,zt.__webglTexture,ft)}at=-1};function qr(T){const X=lt.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=P.textureFormatReadable(T.format),X.__typeReadable=P.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,ft,nt,it,Bt,Wt,zt=0){if(!(T&&T.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(kt=kt[Wt]),kt){E.bindFramebuffer(Z.FRAMEBUFFER,kt);try{const Xt=T.textures[zt],oe=Xt.format,_e=Xt.type;T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt);const jt=qr(Xt);if(jt.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-nt&&ft>=0&&ft<=T.height-it&&Z.readPixels(X,ft,nt,it,Ut.convert(oe),Ut.convert(_e),Bt)}finally{const Xt=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(T,X,ft,nt,it,Bt,Wt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(kt=kt[Wt]),kt)if(X>=0&&X<=T.width-nt&&ft>=0&&ft<=T.height-it){E.bindFramebuffer(Z.FRAMEBUFFER,kt);const Xt=T.textures[zt],oe=Xt.format,_e=Xt.type;T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt);const jt=qr(Xt);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,De),Z.bufferData(Z.PIXEL_PACK_BUFFER,Bt.byteLength,Z.STREAM_READ),Z.readPixels(X,ft,nt,it,Ut.convert(oe),Ut.convert(_e),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const Qe=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Qe);const qe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await DM(Z,qe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,De),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Bt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(De),Z.deleteSync(qe),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ft=0){const nt=Math.pow(2,-ft),it=Math.floor(T.image.width*nt),Bt=Math.floor(T.image.height*nt),Wt=X!==null?X.x:0,zt=X!==null?X.y:0;mt.setTexture2D(T,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ft,0,0,Wt,zt,it,Bt),E.unbindTexture()},this.copyTextureToTexture=function(T,X,ft=null,nt=null,it=0,Bt=0){let Wt,zt,kt,Xt,oe,_e,jt,De,Qe;const qe=T.isCompressedTexture?T.mipmaps[Bt]:T.image;if(ft!==null)Wt=ft.max.x-ft.min.x,zt=ft.max.y-ft.min.y,kt=ft.isBox3?ft.max.z-ft.min.z:1,Xt=ft.min.x,oe=ft.min.y,_e=ft.isBox3?ft.min.z:0;else{const tn=Math.pow(2,-it);Wt=Math.floor(qe.width*tn),zt=Math.floor(qe.height*tn),T.isDataArrayTexture?kt=qe.depth:T.isData3DTexture?kt=Math.floor(qe.depth*tn):kt=1,Xt=0,oe=0,_e=0}nt!==null?(jt=nt.x,De=nt.y,Qe=nt.z):(jt=0,De=0,Qe=0);const de=Ut.convert(X.format),hn=Ut.convert(X.type);let qt;X.isData3DTexture?(mt.setTexture3D(X,0),qt=Z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(mt.setTexture2DArray(X,0),qt=Z.TEXTURE_2D_ARRAY):(mt.setTexture2D(X,0),qt=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,X.unpackAlignment);const xn=E.getParameter(Z.UNPACK_ROW_LENGTH),he=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),zn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ei=E.getParameter(Z.UNPACK_SKIP_ROWS),Bn=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,qe.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qe.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(Z.UNPACK_SKIP_ROWS,oe),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,_e);const Ua=T.isDataArrayTexture||T.isData3DTexture,Ie=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const tn=lt.get(T),mi=lt.get(X),Ve=lt.get(tn.__renderTarget),Fi=lt.get(mi.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Ve.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ri=0;Ri<kt;Ri++)Ua&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(T).__webglTexture,it,_e+Ri),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(X).__webglTexture,Bt,Qe+Ri)),Z.blitFramebuffer(Xt,oe,Wt,zt,jt,De,Wt,zt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||T.isRenderTargetTexture||lt.has(T)){const tn=lt.get(T),mi=lt.get(X);E.bindFramebuffer(Z.READ_FRAMEBUFFER,q),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,K);for(let Ve=0;Ve<kt;Ve++)Ua?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,tn.__webglTexture,it,_e+Ve):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,tn.__webglTexture,it),Ie?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,mi.__webglTexture,Bt,Qe+Ve):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,mi.__webglTexture,Bt),it!==0?Z.blitFramebuffer(Xt,oe,Wt,zt,jt,De,Wt,zt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ie?Z.copyTexSubImage3D(qt,Bt,jt,De,Qe+Ve,Xt,oe,Wt,zt):Z.copyTexSubImage2D(qt,Bt,jt,De,Xt,oe,Wt,zt);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?Z.texSubImage3D(qt,Bt,jt,De,Qe,Wt,zt,kt,de,hn,qe.data):X.isCompressedArrayTexture?Z.compressedTexSubImage3D(qt,Bt,jt,De,Qe,Wt,zt,kt,de,qe.data):Z.texSubImage3D(qt,Bt,jt,De,Qe,Wt,zt,kt,de,hn,qe):T.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Bt,jt,De,Wt,zt,de,hn,qe.data):T.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Bt,jt,De,qe.width,qe.height,de,qe.data):Z.texSubImage2D(Z.TEXTURE_2D,Bt,jt,De,Wt,zt,de,hn,qe);E.pixelStorei(Z.UNPACK_ROW_LENGTH,xn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,he),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,zn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ei),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Bn),Bt===0&&X.generateMipmaps&&Z.generateMipmap(qt),E.unbindTexture()},this.initRenderTarget=function(T){lt.get(T).__webglFramebuffer===void 0&&mt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?mt.setTextureCube(T,0):T.isData3DTexture?mt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?mt.setTexture2DArray(T,0):mt.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){B=0,G=0,ut=null,E.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const jd=8,Kd=[[0,16,24],[16,13,18],[-16,13,18],[0,26,8]];function NA(r){return r<1.5?"pensando":r<3.4?"agarre":r<5.8?"trayectoria":"realizada"}function UA({alCambiarFase:r,pedidoCamara:t=0,pedidoJugada:i=0}){const s=di.useRef(null),l=di.useRef({camara:()=>{},reiniciar:()=>{}}),u=di.useRef(r);return u.current=r,di.useEffect(()=>{var Ot;const d=s.current;if(!d)return;const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=d.clientWidth||360,h=d.clientHeight||320,x=new oy,S=new hi(40,m/h,.1,1e3),g=new et(...Kd[0]);S.position.copy(g),S.lookAt(0,1.6,.2);let y;try{y=new DA({alpha:!0,antialias:!0})}catch{return}y.setSize(m,h),y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.appendChild(y.domElement),x.add(new wy(16777215,.95*Math.PI));const A=new A_(54015,4*Math.PI,50,0);A.position.set(-14,18,14),x.add(A);const w=new A_(58998,4.5*Math.PI,50,0);w.position.set(14,18,-8),x.add(w);const M=new Cy(16777215,1.2*Math.PI);M.position.set(0,25,5),x.add(M);const _=new Pn;x.add(_);const U=1.6,I=8*U/2-U/2,C=new Ea({color:397083,emissive:136746,specular:54015,shininess:45}),L=new Ea({color:729395,emissive:13096,specular:58998,shininess:60}),N=new Ae(new fi(8*U+1.4,.6,8*U+1.4),new Ea({color:198415,specular:54015,shininess:30}));N.position.y=-.31,_.add(N);const z=new Ae(new fi(8*U+.35,.08,8*U+.35),new Os({color:54015,wireframe:!0}));z.position.y=.02,_.add(z);const b=new fi(U*.94,.2,U*.94);for(let Et=0;Et<8;Et++)for(let wt=0;wt<8;wt++){const Yt=new Ae(b,(Et+wt)%2===1?C:L);Yt.position.set(wt*U-I,0,Et*U-I),_.add(Yt)}const O=new Ea({color:16103168,emissive:3811328,specular:16771720,shininess:90}),V=new Ea({color:1121321,emissive:135458,specular:54015,shininess:85});function Y(Et){const wt=new Pn,Yt=new Ae(new Jn(.42,.52,.3,16),Et);Yt.position.y=.15;const F=new Ae(new Jn(.2,.38,.7,16),Et);F.position.y=.6;const Tt=new Ae(new tu(.24,.05,8,16),Et);Tt.rotation.x=Math.PI/2,Tt.position.y=.95;const xt=new Ae(new $c(.3,16,16),Et);return xt.position.y=1.25,wt.add(Yt,F,Tt,xt),wt}function j(Et){const wt=new Pn,Yt=new Ae(new Jn(.45,.55,.35,16),Et);Yt.position.y=.17;const F=new Ae(new fi(.42,.85,.55),Et);F.position.set(0,.85,.1),F.rotation.x=-.28;const Tt=new Ae(new fi(.36,.38,.42),Et);return Tt.position.set(0,.95,.42),wt.add(Yt,F,Tt),wt}[{f:1,c:1,tipo:Y,mat:V},{f:1,c:2,tipo:Y,mat:V},{f:1,c:5,tipo:Y,mat:V},{f:0,c:1,tipo:j,mat:V},{f:0,c:6,tipo:j,mat:V},{f:6,c:1,tipo:Y,mat:O},{f:6,c:2,tipo:Y,mat:O},{f:6,c:6,tipo:Y,mat:O},{f:7,c:6,tipo:j,mat:O},{f:4,c:2,tipo:j,mat:V}].forEach(({f:Et,c:wt,tipo:Yt,mat:F})=>{const Tt=Yt(F);Tt.position.set(wt*U-I,.1,Et*U-I),_.add(Tt)});const st=Y(O);_.add(st);const q=new et(4*U-I,.1,6*U-I),K=new et(4*U-I,.1,4*U-I),B=new Ae(new Jc(.5,.72,32),new Os({color:58998,side:Oi}));B.rotation.x=-Math.PI/2,B.position.set(K.x,.12,K.z);const G=new Ae(new Jc(.48,.68,32),new Os({color:54015,side:Oi}));G.rotation.x=-Math.PI/2,G.position.set(q.x,.12,q.z),_.add(B,G);const ut=[];for(let Et=0;Et<=30;Et++){const wt=Et/30;ut.push(new et(zo.lerp(q.x,K.x,wt),.2+Math.sin(wt*Math.PI)*2.2,zo.lerp(q.z,K.z,wt)))}_.add(new _y(new kn().setFromPoints(ut),new yv({color:58998})));const at=new Ea({color:15922938,specular:16777215,shininess:90}),dt=new Ea({color:1778738,specular:4674921,shininess:75}),D=new Ea({color:26326,emissive:8772}),tt=new Os({color:54015}),pt=new Os({color:58998}),At=new Pn;At.position.set(0,0,-I-1.8),_.add(At);const Pt=new Ae(new Jn(1.3,1.55,.55,32),dt);Pt.position.y=.28;const Gt=new Ae(new tu(1.32,.045,8,32),tt);Gt.rotation.x=Math.PI/2,Gt.position.y=.55,At.add(Pt,Gt);const $=new Pn;$.position.y=.58,At.add($);const vt=new Ae(new Jn(1.05,1.15,.95,24),at);vt.position.y=.48,$.add(vt);const Rt=new Pn;Rt.position.set(0,.95,0),$.add(Rt);const te=new Ae(new Jn(.58,.58,1.35,20),dt);te.rotation.z=Math.PI/2,te.position.y=.35,Rt.add(te);const Lt=new Pn;Lt.position.set(0,.35,0),Rt.add(Lt);const ae=new Ae(new Jn(.48,.54,4.2,20),at);ae.position.y=2.1;const Ze=new Ae(new Jn(.49,.52,1.2,20),D);Ze.position.y=2.1,Lt.add(ae,Ze);const ne=new Pn;ne.position.set(0,4.1,0),Lt.add(ne);const me=new Ae(new Jn(.52,.52,1.1,20),dt);me.rotation.z=Math.PI/2,ne.add(me);const fe=new Pn;ne.add(fe);const ce=new Ae(new Jn(.42,.48,3.8,20),at);ce.position.y=1.9,fe.add(ce);const ge=new Pn;ge.position.set(0,3.7,0),fe.add(ge),ge.add(new Ae(new Jn(.38,.42,.5,16),dt));const je=new Ae(new fi(.85,.7,.85),dt);je.position.y=-.45;const ln=new Ae(new fi(.48,.42,.42),at);ln.position.set(.46,-.45,.2);const Pe=new Ae(new Jn(.12,.12,.15,16),tt);Pe.rotation.x=Math.PI/2,Pe.position.set(.46,-.45,.42);const Ke=new Ae(new $c(.1,12,12),pt);Ke.position.set(0,-.45,.45),ge.add(je,ln,Pe,Ke);const Z=new Ea({color:13884646,specular:16777215,shininess:80}),Ne=new fi(.12,.85,.24),be=new Pn;be.position.set(-.35,-.8,0);const P=new Pn;P.position.set(.35,-.8,0),[be,P].forEach(Et=>{const wt=new Ae(Ne,Z);wt.position.y=-.4,Et.add(wt),ge.add(Et)});const E=new Uy;let Q=0,lt=null,mt=0,Ct=!0;function Nt(Et){let wt=.36;const Yt=new et(q.x,.1,q.z);if(Et<1.5)$.rotation.y=.26+Math.sin(Et*2.5)*.02,Lt.rotation.x=.95,fe.rotation.x=-1.45,ge.rotation.x=.5,pt.color.setHex(54015);else if(Et<2.6){const F=(Et-1.5)/1.1;$.rotation.y=.26,Lt.rotation.x=.95+F*.35,fe.rotation.x=-1.45-F*.28,ge.rotation.x=.5-F*.07,wt=.36-F*.08,pt.color.setHex(16103168)}else if(Et<3.4){const F=(Et-2.6)/.8;$.rotation.y=.26,Lt.rotation.x=1.3-F*.35,fe.rotation.x=-1.73+F*.28,ge.rotation.x=.43+F*.07,wt=.24,Yt.y=.1+F*1.6,pt.color.setHex(58998)}else if(Et<5.8){const F=(Et-3.4)/2.4,Tt=.5-.5*Math.cos(F*Math.PI);$.rotation.y=zo.lerp(.26,-.18,Tt),Lt.rotation.x=.95+Math.sin(Tt*Math.PI)*.18,fe.rotation.x=-1.45,ge.rotation.x=.5,wt=.24,Yt.set(zo.lerp(q.x,K.x,Tt),Math.sin(Tt*Math.PI)*2.2+1.2,zo.lerp(q.z,K.z,Tt)),pt.color.setHex(58998)}else if(Et<6.8){const F=(Et-5.8)/1;$.rotation.y=-.18,Lt.rotation.x=.95+F*.32,fe.rotation.x=-1.45-F*.25,ge.rotation.x=.5-F*.07,wt=.24+F*.06,Yt.set(K.x,Math.max(.1,1.2-F*1.1),K.z),pt.color.setHex(58998)}else{const F=(Et-6.8)/1.2;$.rotation.y=-.18+F*.44,Lt.rotation.x=1.27-F*.32,fe.rotation.x=-1.7+F*.25,ge.rotation.x=.43+F*.07,Yt.set(K.x,.1,K.z),pt.color.setHex(54015)}be.position.x=-wt,P.position.x=wt,st.position.copy(Yt)}function gt(){var F;const Et=E.getElapsedTime(),wt=((Et-Q)%jd+jd)%jd;_.rotation.y=Math.sin(Et*.2)*.06,_.rotation.x=Math.sin(Et*.15)*.025,Nt(wt),B.scale.setScalar(1+Math.sin(Et*4.5)*.12),G.scale.setScalar(1+Math.cos(Et*4.5)*.12),S.position.lerp(g,.06),S.lookAt(0,1.6,.2),y.render(x,S);const Yt=NA(wt);Yt!==lt&&(lt=Yt,(F=u.current)==null||F.call(u,Yt))}function _t(){mt=requestAnimationFrame(_t),Ct&&gt()}p?(Nt(7.5),y.render(x,S),(Ot=u.current)==null||Ot.call(u,"realizada")):_t(),l.current={camara:Et=>{g.set(...Kd[Et%Kd.length]),p&&(S.position.copy(g),S.lookAt(0,1.6,.2),y.render(x,S))},reiniciar:()=>{Q=E.getElapsedTime()-1.5}};const Dt=()=>{const Et=d.clientWidth,wt=d.clientHeight;!Et||!wt||(S.aspect=Et/wt,S.updateProjectionMatrix(),y.setSize(Et,wt),p&&y.render(x,S))},Ht=new ResizeObserver(Dt);Ht.observe(d);const It=new IntersectionObserver(([Et])=>{Ct=Et.isIntersecting});return It.observe(d),()=>{cancelAnimationFrame(mt),Ht.disconnect(),It.disconnect(),x.traverse(Et=>{Et.geometry&&Et.geometry.dispose(),Et.material&&Et.material.dispose()}),y.dispose(),y.domElement.remove()}},[]),di.useEffect(()=>{t>0&&l.current.camara(t)},[t]),di.useEffect(()=>{i>0&&l.current.reiniciar()},[i]),k.jsx("div",{ref:s,className:"w-full h-full","aria-hidden":"true"})}const LA="59178576780",OA=r=>`https://wa.me/${LA}?text=${encodeURIComponent(r)}`,PA="https://home-lab.tail3b5ebb.ts.net/",Gh="https://chat.whatsapp.com/F3FbfRMJ5kp3J3zHkbCEII?mode=gi_t",IA=Gh,qi={version:"v6",partidas:"35.000",eloPartidas:"2200+",coincidencia:"49 %",eloRed:1355,eloBusqueda:1808,rangoBusqueda:"1737–1878"},Q_=r=>`${Math.round((r-1e3)/1e3*100)}%`,Qd=["Abierta (Open)","Universitarios FICCT","Desafío Blitz vs Dobot CR5"],zA={pensando:{texto:"TURING ESTÁ PENSANDO...",color:"text-cyan-300 border-cyan-400/60",punto:"bg-cyan-400 animate-pulse"},agarre:{texto:"DH-ROBOTICS: AGARRE FIRME PEÓN e7",color:"text-amber-300 border-amber-400/60",punto:"bg-amber-400 animate-ping"},trayectoria:{texto:"TRAYECTORIA CINEMÁTICA: e7 → e5",color:"text-[#00E676] border-emerald-400/60",punto:"bg-[#00E676] animate-pulse"},realizada:{texto:"JUGADA REALIZADA: e7 → e5 ✓",color:"text-[#00E676] border-emerald-400/80",punto:"bg-[#00E676]"}},BA=[{n:"01",titulo:"APRENDE",texto:"Mejora tus conocimientos con análisis de aperturas y asistencia táctica guiada.",verde:!0},{n:"02",titulo:"PRACTICA",texto:"Juega contra la IA adaptativa con distintos niveles de dificultad y estilos de juego."},{n:"03",titulo:"MIDE TU NIVEL",texto:"Descubre tus habilidades con métricas en tiempo real, precisión de jugada y rating ELO."},{n:"04",titulo:"COMPITE",texto:"Participa en torneos oficiales y clasificaciones departamentales abiertas.",verde:!0}],FA=[{titulo:"JUGADOR",texto:"Mueve en tablero físico o pantalla",etiqueta:"INPUT",tono:"neutro"},{titulo:"CHESSIA",texto:"Recibe la jugada en el servidor",etiqueta:"SERVER",tono:"cian"},{titulo:"TURING IA",texto:"Elige la respuesta con su red neuronal propia",etiqueta:"NEURAL",tono:"verde"},{titulo:"DOBOT CR5",texto:"Cinemática inversa y agarre de precisión",etiqueta:"ROBOTIC",tono:"cian"},{titulo:"TABLERO REAL",texto:"Movimiento físico de la pieza de ajedrez",etiqueta:"EXECUTE",tono:"final"}],HA=[{sigla:"UAGRM FICCT",texto:"Facultad de Computación",color:"text-cyan-400"},{sigla:"ADASC",texto:"Ajedrez Santa Cruz",color:"text-[#00E676]"},{sigla:"SCZ GOB.",texto:"Gobernación Auton.",color:"text-amber-400"},{sigla:"DICIT",texto:"Ciencia y Tecnología",color:"text-cyan-300"},{sigla:"DEIS",texto:"Extensión Social",color:"text-emerald-300"},{sigla:"VICERRECT.",texto:"UAGRM Rectorado",color:"text-blue-300"}];function Jd({children:r,className:t=""}){return k.jsx("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-label text-[9px] lg:text-[11px] font-bold tracking-widest uppercase ${t}`,children:r})}function Bc({antetitulo:r,titulo:t,texto:i}){return k.jsxs("div",{className:"text-center",children:[r&&k.jsx("div",{className:"text-[9px] lg:text-[11px] font-mono-label text-cyan-300 font-bold uppercase tracking-widest",children:r}),t&&k.jsx("h2",{className:"text-xl lg:text-3xl font-extrabold uppercase text-white font-mono-label tracking-tight mt-0.5",children:t}),i&&k.jsx("p",{className:"text-xs lg:text-sm text-slate-300 mt-1 max-w-md mx-auto leading-relaxed",children:i})]})}function GA({alRegistrarse:r=null,alIngresar:t=null}){const i=r!=null,[s,l]=di.useState("pensando"),[u,d]=di.useState(0),[p,m]=di.useState(0),[h,x]=di.useState(!1),S=di.useRef(null),[g,y]=di.useState({nombre:"",telefono:"",categoria:Qd[0],elo:""}),A=()=>{var I;return(I=S.current)==null?void 0:I.scrollIntoView({behavior:"smooth",block:"start"})},w=r??(()=>window.open(PA,"_blank","noopener,noreferrer")),M=zA[s],_=I=>{I.preventDefault();const C=["Hola, quiero inscribirme al Torneo de Ajedrez Humano vs. IA.",`Nombre: ${g.nombre.trim()}`,`WhatsApp: ${g.telefono.trim()}`,`Categoría: ${g.categoria}`,g.elo.trim()&&`Nivel / ELO: ${g.elo.trim()}`].filter(Boolean).join(`
`);window.open(OA(C),"_blank","noopener,noreferrer")},U=I=>C=>y(L=>({...L,[I]:C.target.value}));return k.jsxs("div",{className:"landing min-h-dvh text-slate-100 antialiased pb-28 lg:pb-0",children:[k.jsx("header",{className:"sticky top-0 z-50 backdrop-blur-xl bg-[#060d17]/90 border-b border-cyan-500/25 px-3 lg:px-8 py-2 shadow-2xl",children:k.jsxs("div",{className:"max-w-md lg:max-w-6xl mx-auto",children:[k.jsxs("div",{className:"flex items-center justify-between gap-1 pb-1 mb-1.5 border-b border-white/5 text-[8.5px] lg:text-[10px] font-mono-label",children:[k.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00E676]"}),k.jsxs("span",{className:"text-cyan-300 font-bold tracking-wider",children:["TURING ",qi.version.toUpperCase()]})]}),k.jsxs("div",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:"text-cyan-200",children:"DOBOT CR5"}),k.jsx("span",{className:"text-slate-600",children:"•"}),k.jsx("span",{className:"text-[#00E676] font-semibold",children:"VISIÓN POR COMPUTADOR"})]})]}),k.jsxs("div",{className:"flex items-center justify-between gap-2",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsxs("span",{className:"text-base lg:text-xl font-extrabold tracking-wider font-mono-label text-white",children:["CHESS",k.jsx("span",{className:"text-[#00E676]",children:"IA"})]}),k.jsx("span",{className:"hidden sm:inline px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-[#00E676] text-[8px] lg:text-[10px] font-mono-label font-bold uppercase tracking-wider",children:"AI + ROBOTICS LAB"})]}),k.jsxs("div",{className:"flex items-center gap-1.5 lg:gap-3",children:[k.jsxs("div",{className:"flex items-center gap-1 bg-[#0b1523] border border-cyan-500/30 rounded-md px-2 py-1",children:[k.jsx("span",{className:"text-[10px] font-black tracking-tight text-white font-mono-label",children:"UAGRM"}),k.jsx("span",{className:"h-3 w-px bg-cyan-400/30"}),k.jsx("span",{className:"text-[7.5px] font-bold text-cyan-300 uppercase font-mono-label",children:"FICCT"})]}),k.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-[#0b1523] border border-emerald-500/40 rounded-md px-2 py-1",children:[k.jsx("span",{className:"text-[9px] text-emerald-400 leading-none",children:"♟"}),k.jsx("span",{className:"text-[9px] font-black text-emerald-300 tracking-wider font-mono-label",children:"ADASC"})]}),t&&k.jsx("button",{type:"button",onClick:t,className:"lp-boton-secundario px-3 py-1.5 rounded-lg text-[10px] lg:text-xs font-bold uppercase tracking-wider font-mono-label",children:"Ingresar"})]})]})]})}),k.jsxs("main",{className:"max-w-md lg:max-w-6xl mx-auto px-4 lg:px-8 pt-3 lg:pt-10 space-y-6 lg:space-y-16",children:[k.jsxs("div",{className:"lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center space-y-6 lg:space-y-0",children:[k.jsxs("section",{className:"text-center lg:text-left pt-2 space-y-3 lg:space-y-5",children:[k.jsxs(Jd,{className:"bg-slate-900/90 border border-emerald-400/50 text-[#00E676] shadow-lg shadow-emerald-950/40",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping"}),"ROBÓTICA INDUSTRIAL & AJEDREZ COGNITIVO"]}),k.jsxs("div",{className:"space-y-1",children:[k.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight flex items-center justify-center lg:justify-start gap-2 lg:gap-4",children:[k.jsx("span",{className:"text-white tracking-wide",children:"HUMANO"}),k.jsx("span",{className:"text-base lg:text-2xl font-black text-cyan-400 italic",children:"VS."}),k.jsx("span",{className:"text-[#00E676] lp-neon-verde font-black",children:"IA"})]}),k.jsx("p",{className:"text-xs sm:text-sm lg:text-lg font-bold tracking-wider text-cyan-300 uppercase font-mono-label",children:"¿TE ATREVES A JUGAR CONTRA UN ROBOT?"})]}),k.jsx("p",{className:"text-xs lg:text-base text-slate-300 leading-relaxed max-w-sm lg:max-w-lg mx-auto lg:mx-0 px-1 lg:px-0",children:"Enfréntate a un Dobot CR5 controlado por Inteligencia Artificial y juega una partida de ajedrez como nunca antes."}),k.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 pt-1 lg:max-w-lg",children:[k.jsx("button",{type:"button",onClick:w,className:"lp-boton-primario w-full py-3 rounded-xl font-extrabold text-xs lg:text-sm uppercase tracking-wider font-mono-label",children:"[ REGÍSTRATE GRATIS ]"}),k.jsx("a",{href:Gh,target:"_blank",rel:"noopener noreferrer",className:"lp-boton-secundario w-full py-3 rounded-xl font-bold text-xs lg:text-sm uppercase tracking-wider text-center font-mono-label",children:"💬 [ GRUPO DE WHATSAPP ]"})]})]}),k.jsxs("section",{className:"space-y-2.5","aria-label":"Demostración del brazo robótico",children:[k.jsxs("div",{className:"relative w-full rounded-2xl overflow-hidden lp-vidrio border border-emerald-500/35 shadow-2xl bg-gradient-to-b from-[#081322] via-[#050c18] to-black",children:[k.jsx("div",{className:"lp-haz z-10 pointer-events-none"}),k.jsxs("div",{className:"absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none",children:[k.jsxs("div",{role:"status","aria-live":"polite",className:`px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border text-[8.5px] lg:text-[10px] font-mono-label shadow-md flex items-center gap-1.5 transition-all duration-300 ${M.color}`,children:[k.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${M.punto}`}),k.jsx("span",{className:"font-bold",children:M.texto})]}),k.jsx("div",{className:"px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-cyan-400/40 text-[8px] lg:text-[10px] font-mono-label text-cyan-300",children:"IK 6-AXIS"})]}),k.jsxs("div",{className:"absolute bottom-12 inset-x-2.5 z-20 flex items-center justify-between pointer-events-none text-[8px] lg:text-[10px] font-mono-label",children:[k.jsxs("div",{className:"px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-cyan-400/30 text-cyan-200",children:["TURING: ",k.jsxs("strong",{className:"text-[#00E676]",children:["ELO ≈ ",qi.eloBusqueda]})]}),k.jsx("div",{className:"px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-cyan-400/30 text-slate-300",children:"ANIMACIÓN ILUSTRATIVA"})]}),k.jsx("div",{className:"w-full h-80 lg:h-[26rem]",children:k.jsx(UA,{alCambiarFase:l,pedidoCamara:u,pedidoJugada:p})}),h&&k.jsx("div",{className:"absolute inset-x-2.5 bottom-14 z-30 px-3 py-2 rounded-lg bg-black/90 border border-cyan-400/50 text-[10px] lg:text-xs font-mono-label text-cyan-200 text-center",children:"Visión por computador: una cámara sobre el tablero reconoce las piezas y confirma cada jugada."}),k.jsxs("div",{className:"p-2 bg-black/90 backdrop-blur-md border-t border-cyan-500/30 flex items-center justify-between gap-1.5 text-[9.5px] lg:text-xs font-mono-label relative z-20",children:[k.jsx("button",{type:"button",onClick:()=>d(I=>I+1),className:"flex-1 py-1.5 px-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-bold transition active:scale-95",children:"🔄 Perspectiva 3D"}),k.jsx("button",{type:"button",onClick:()=>m(I=>I+1),className:"flex-1 py-1.5 px-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-[#00E676] font-bold transition active:scale-95",children:"⚡ Forzar jugada IA"}),k.jsx("button",{type:"button","aria-pressed":h,onClick:()=>x(I=>!I),className:"flex-1 py-1.5 px-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-600/40 text-slate-200 font-bold transition active:scale-95",children:"👁️ Visión comp."})]})]}),k.jsxs("div",{className:"p-3.5 rounded-xl lp-vidrio border border-cyan-500/30 text-center space-y-1",children:[k.jsx("div",{className:"text-[10px] lg:text-xs font-mono-label font-bold text-[#00E676] tracking-wider",children:"BRAZO ROBÓTICO → TOMA LA PIEZA → LA MUEVE → REALIZA LA JUGADA"}),k.jsx("p",{className:"text-[11px] lg:text-sm text-slate-300 leading-relaxed",children:"Una demostración en vivo de robótica colaborativa Dobot CR5 de 6 ejes con pinza DH-Robotics y visión por computador."})]})]})]}),k.jsxs("section",{className:"lp-vidrio p-4 lg:p-8 rounded-2xl border border-cyan-500/30 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center space-y-3.5 lg:space-y-0",children:[k.jsxs("div",{className:"text-center lg:text-left",children:[k.jsx(Jd,{className:"bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 mb-1",children:"🧠 COGNITIVE CHESS ENGINE"}),k.jsx("h2",{className:"text-xl lg:text-3xl font-extrabold uppercase text-white font-mono-label tracking-wider",children:"CONOCE A TURING"}),k.jsx("p",{className:"text-xs lg:text-base font-semibold text-emerald-400 font-mono-label",children:"La Inteligencia Artificial detrás del tablero."}),k.jsx("p",{className:"text-xs lg:text-sm text-slate-300 mt-1 leading-relaxed",children:"Turing es el modelo propio de ChessIA: una red neuronal entrenada con partidas de maestros que propone jugadas, y una búsqueda de 3 jugadas que evita los errores tácticos."})]}),k.jsxs("dl",{className:"p-3 lg:p-5 rounded-xl bg-black/60 border border-cyan-500/30 font-mono-label text-[10px] lg:text-xs space-y-2.5",children:[k.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-white/10 pb-2",children:[k.jsxs("dt",{className:"text-slate-400 flex items-center gap-1",children:[k.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00E676]"})," MOTOR"]}),k.jsx("dd",{className:"text-[#00E676] font-bold text-right",children:"RED NEURONAL PROPIA + BÚSQUEDA"})]}),k.jsxs("div",{className:"flex items-center justify-between gap-2",children:[k.jsx("dt",{className:"text-slate-400",children:"ENTRENADO CON:"}),k.jsxs("dd",{className:"text-cyan-300 font-bold text-right",children:[qi.partidas," PARTIDAS DE ",qi.eloPartidas]})]}),k.jsxs("div",{className:"flex items-center justify-between gap-2",children:[k.jsx("dt",{className:"text-slate-400",children:"COINCIDE CON EL MAESTRO:"}),k.jsxs("dd",{className:"text-[#00E676] font-bold text-right",children:[qi.coincidencia," DE LAS JUGADAS"]})]}),k.jsxs("div",{className:"pt-1 space-y-2",children:[k.jsxs("div",{className:"space-y-1",children:[k.jsxs("div",{className:"flex justify-between gap-2 text-[9px] lg:text-[11px]",children:[k.jsx("dt",{className:"text-slate-400",children:"RED SOLA:"}),k.jsxs("dd",{className:"text-cyan-300 font-bold",children:["ELO ≈ ",qi.eloRed]})]}),k.jsx("div",{className:"h-2 rounded-full bg-slate-800 overflow-hidden","aria-hidden":"true",children:k.jsx("div",{className:"h-full bg-cyan-400",style:{width:Q_(qi.eloRed)}})})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsxs("div",{className:"flex justify-between gap-2 text-[9px] lg:text-[11px]",children:[k.jsx("dt",{className:"text-slate-400",children:"RED + BÚSQUEDA:"}),k.jsxs("dd",{className:"text-[#00E676] font-bold",children:["ELO ≈ ",qi.eloBusqueda," (",qi.rangoBusqueda,")"]})]}),k.jsx("div",{className:"h-2 rounded-full bg-slate-800 overflow-hidden","aria-hidden":"true",children:k.jsx("div",{className:"h-full bg-[#00E676]",style:{width:Q_(qi.eloBusqueda)}})})]})]}),k.jsxs("p",{className:"text-[9px] lg:text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-white/10",children:["Elo medido contra Stockfish calibrado (no oficial).",i&&k.jsxs(k.Fragment,{children:[" ",k.jsx("a",{href:"#confianza",className:"text-cyan-300 underline underline-offset-2",children:"Cómo se midió"})]})]})]})]}),k.jsxs("section",{className:"space-y-3.5 lg:space-y-6",children:[k.jsx(Bc,{titulo:"MUCHO MÁS QUE UN ROBOT",texto:"ChessIA es una plataforma integral de aprendizaje, práctica y competencia de ajedrez."}),k.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-4",children:BA.map(I=>k.jsxs("div",{className:`p-3.5 lg:p-5 rounded-2xl lp-vidrio border flex flex-col justify-between space-y-2 ${I.verde?"border-emerald-500/30":"border-cyan-500/30"}`,children:[k.jsx("div",{className:`w-8 h-8 rounded-lg font-mono-label font-bold flex items-center justify-center text-xs border ${I.verde?"bg-emerald-500/20 text-[#00E676] border-emerald-500/40":"bg-cyan-500/20 text-cyan-300 border-cyan-500/40"}`,children:I.n}),k.jsxs("div",{children:[k.jsx("h3",{className:`text-xs lg:text-sm font-bold uppercase font-mono-label ${I.verde?"text-[#00E676]":"text-cyan-300"}`,children:I.titulo}),k.jsx("p",{className:"text-[11px] lg:text-sm text-slate-300 mt-1 leading-relaxed",children:I.texto})]})]},I.n))}),k.jsx("div",{className:"pt-1 lg:max-w-sm lg:mx-auto",children:k.jsx("button",{type:"button",onClick:w,className:"lp-boton-primario block w-full py-3 rounded-xl font-extrabold text-xs lg:text-sm uppercase tracking-wider font-mono-label",children:"[ REGÍSTRATE GRATIS ]"})})]}),k.jsxs("section",{className:"lp-vidrio p-4 lg:p-8 rounded-2xl border border-cyan-500/30 space-y-3.5 lg:space-y-6",children:[k.jsx(Bc,{antetitulo:"ECOSISTEMA INTEGRADO",titulo:"DEL DIGITAL AL FÍSICO",texto:"Flujo tecnológico continuo de datos hacia el movimiento real."}),k.jsx("ol",{className:"flex flex-col lg:flex-row lg:items-stretch gap-1.5 lg:gap-2",children:FA.map((I,C)=>{const L={neutro:"border-slate-700/60 bg-black/60",cian:"border-cyan-500/40 bg-black/60",verde:"border-emerald-500/40 bg-black/60",final:"border-emerald-400/50 bg-emerald-950/40"}[I.tono],N=I.tono==="final"?"bg-emerald-500 text-black":I.tono==="verde"?"bg-emerald-950 text-[#00E676]":"bg-cyan-950 text-cyan-300",z=I.tono==="cian"&&C===1?"text-cyan-300":I.tono==="verde"?"text-[#00E676]":"text-white";return k.jsxs("li",{className:"contents",children:[C>0&&k.jsxs("span",{"aria-hidden":"true",className:`text-center text-xs font-mono-label leading-none self-center ${C%2?"text-cyan-400":"text-emerald-400"}`,children:[k.jsx("span",{className:"lg:hidden",children:"↓"}),k.jsx("span",{className:"hidden lg:inline",children:"→"})]}),k.jsxs("div",{className:`p-2.5 lg:p-3 rounded-xl border flex lg:flex-col items-center lg:items-start justify-between gap-2 lg:flex-1 ${L}`,children:[k.jsxs("div",{className:"flex lg:flex-col items-center lg:items-start gap-2.5 lg:gap-2",children:[k.jsx("span",{className:`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono-label font-bold ${N}`,children:C+1}),k.jsxs("div",{children:[k.jsx("div",{className:`text-xs font-bold font-mono-label ${z}`,children:I.titulo}),k.jsx("div",{className:"text-[10px] lg:text-[11px] text-slate-300",children:I.texto})]})]}),k.jsx("span",{className:`font-mono-label text-xs ${I.tono==="neutro"?"text-slate-500":I.tono==="cian"?"text-cyan-300":"text-[#00E676]"}`,children:I.etiqueta})]})]},I.titulo)})})]}),k.jsxs("div",{className:"lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0",children:[k.jsxs("section",{className:"space-y-3.5",children:[k.jsx(Bc,{titulo:"JUEGA. COMPITE. SUPÉRATE.",texto:"Regístrate gratuitamente y sé parte de los torneos de ajedrez más innovadores de Bolivia."}),k.jsxs("div",{className:"lp-vidrio p-4 lg:p-6 rounded-2xl border-2 border-emerald-500/40 shadow-[0_0_25px_rgba(0,230,118,0.45)] space-y-3.5",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx(Jd,{className:"bg-emerald-500/20 text-[#00E676] border border-emerald-500/30 !px-2.5 !py-0.5",children:"TORNEO OFICIAL • EXPO CIENCIA 2026"}),k.jsx("span",{className:"text-xs","aria-hidden":"true",children:"🏆"})]}),k.jsxs("div",{children:[k.jsx("h3",{className:"text-base lg:text-xl font-extrabold uppercase text-white font-mono-label tracking-tight leading-tight",children:"TORNEO DE AJEDREZ HUMANO VS. IA"}),k.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2 font-mono-label",children:[k.jsxs("div",{className:"p-2 rounded-lg bg-black/50 border border-white/10",children:[k.jsx("span",{className:"text-[8.5px] lg:text-[10px] text-slate-400 block uppercase",children:"FECHA"}),k.jsx("span",{className:"text-xs lg:text-sm font-bold text-[#00E676]",children:"28 y 29 Oct 2026"})]}),k.jsxs("div",{className:"p-2 rounded-lg bg-black/50 border border-white/10",children:[k.jsx("span",{className:"text-[8.5px] lg:text-[10px] text-slate-400 block uppercase",children:"LUGAR"}),k.jsx("span",{className:"text-xs lg:text-sm font-bold text-cyan-300",children:"Paraninfo UAGRM"})]})]})]}),k.jsxs("div",{className:"space-y-1",children:[k.jsx("span",{className:"text-[9px] lg:text-[11px] uppercase font-mono-label font-bold text-slate-400",children:"CATEGORÍAS:"}),k.jsx("ul",{className:"grid gap-1 text-[11px] lg:text-sm font-mono-label text-slate-200",children:Qd.map((I,C)=>k.jsxs("li",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:["text-[#00E676]","text-cyan-400","text-amber-400"][C],children:"▪"}),I]},I))})]}),k.jsx("button",{type:"button",onClick:A,className:"lp-boton-primario block w-full py-2.5 rounded-xl font-extrabold text-xs lg:text-sm uppercase tracking-wider font-mono-label",children:"[ PARTICIPAR ]"})]})]}),k.jsxs("section",{ref:S,className:"scroll-mt-24 lp-vidrio p-5 lg:p-6 rounded-2xl border-2 border-[#00E676]/40 shadow-[0_0_25px_rgba(0,230,118,0.45)] space-y-4",children:[k.jsxs("div",{className:"text-center border-b border-white/10 pb-3",children:[k.jsx("span",{className:"text-[9px] lg:text-[11px] font-mono-label uppercase tracking-widest text-cyan-300 font-bold",children:"HUMANO VS. IA"}),k.jsx("h2",{className:"text-xl lg:text-2xl font-extrabold uppercase text-white font-mono-label tracking-tight mt-0.5",children:"¿LISTO PARA JUGAR?"}),k.jsx("p",{className:"text-xs lg:text-sm text-slate-300",children:"Inscríbete gratis al desafío: te confirmamos el horario por WhatsApp."})]}),k.jsxs("form",{className:"space-y-3",onSubmit:_,children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-[9px] lg:text-[11px] font-mono-label uppercase font-bold text-cyan-300 mb-1",htmlFor:"lp-nombre",children:"NOMBRE Y APELLIDO"}),k.jsx("input",{id:"lp-nombre",className:"lp-campo lp-campo-nombre",placeholder:"Ej: Carlos Suárez",required:!0,autoComplete:"name",value:g.nombre,onChange:U("nombre")})]}),g.nombre.trim()&&k.jsxs("div",{className:"lp-certificado","aria-live":"polite",children:[k.jsx("span",{className:"lp-certificado-etiqueta",children:"Invitación a nombre de"}),k.jsx("span",{className:"lp-certificado-nombre",children:g.nombre.trim()}),k.jsx("span",{className:"lp-certificado-linea","aria-hidden":"true"}),k.jsx("span",{className:"lp-certificado-etiqueta",children:"Torneo Humano vs. IA · 28 y 29 Oct 2026"})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-[9px] lg:text-[11px] font-mono-label uppercase font-bold text-cyan-300 mb-1",htmlFor:"lp-telefono",children:"WHATSAPP"}),k.jsx("input",{id:"lp-telefono",type:"tel",inputMode:"tel",className:"lp-campo",placeholder:"Ej: 71234567",required:!0,autoComplete:"tel",value:g.telefono,onChange:U("telefono")})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[9px] lg:text-[11px] font-mono-label uppercase font-bold text-cyan-300 mb-1",htmlFor:"lp-categoria",children:"CATEGORÍA"}),k.jsx("select",{id:"lp-categoria",className:"lp-campo !px-2",value:g.categoria,onChange:U("categoria"),children:Qd.map(I=>k.jsx("option",{children:I},I))})]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[9px] lg:text-[11px] font-mono-label uppercase font-bold text-cyan-300 mb-1",htmlFor:"lp-elo",children:"NIVEL ELO / EXPERIENCIA"}),k.jsx("input",{id:"lp-elo",className:"lp-campo",placeholder:"Ej: 1650 FIDE o Aficionado",value:g.elo,onChange:U("elo")})]}),k.jsx("button",{type:"submit",className:"lp-boton-primario w-full py-3 rounded-xl font-extrabold text-xs lg:text-sm uppercase tracking-wider font-mono-label",children:"[ INSCRIBIRME POR WHATSAPP ]"})]}),k.jsxs("div",{className:"pt-2 text-center space-y-2",children:[k.jsx("a",{href:Gh,target:"_blank",rel:"noopener noreferrer",className:"lp-boton-secundario block w-full py-2.5 px-3 rounded-xl font-bold text-xs lg:text-sm uppercase tracking-wider font-mono-label",children:"💬 [ ÚNETE AL GRUPO DE WHATSAPP ]"}),i&&k.jsxs("p",{className:"text-[10px] lg:text-xs text-slate-400 font-mono-label",children:["¿Quieres jugar en la plataforma?"," ",k.jsx("button",{type:"button",onClick:w,className:"text-[#00E676] underline underline-offset-2 font-bold",children:"Crea tu cuenta"})]})]})]})]}),k.jsxs("section",{className:"space-y-3 lg:space-y-5",children:[k.jsx(Bc,{antetitulo:"INGENIERÍA & INNOVACIÓN CRUCEÑA",texto:"Tecnología, Inteligencia Artificial y ajedrez desarrollados desde Santa Cruz."}),k.jsxs("div",{className:"grid lg:grid-cols-2 gap-3",children:[k.jsxs("div",{className:"lp-vidrio p-3.5 lg:p-5 rounded-xl border-l-4 !border-l-[#00E676]",children:[k.jsx("div",{className:"text-[9px] lg:text-[11px] font-mono-label text-[#00E676] uppercase font-bold tracking-wider mb-0.5",children:"TALENTO UNIVERSITARIO"}),k.jsxs("p",{className:"text-xs lg:text-sm text-slate-200 leading-relaxed",children:["Desarrollado por estudiantes e investigadores de Ingeniería Informática de la ",k.jsx("strong",{className:"text-white font-semibold",children:"UAGRM – FICCT"}),"."]})]}),k.jsxs("div",{className:"lp-vidrio p-3.5 lg:p-5 rounded-xl border-l-4 !border-l-[#00D2FF] flex items-center gap-3",children:[k.jsx("div",{className:"w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-lg text-emerald-400 shrink-0","aria-hidden":"true",children:"♟"}),k.jsxs("p",{className:"text-xs lg:text-sm text-slate-200 leading-relaxed",children:["Con el respaldo oficial de la ",k.jsx("strong",{className:"text-emerald-400 font-semibold",children:"Asociación Departamental de Ajedrez de Santa Cruz (ADASC)"}),"."]})]})]}),k.jsx("ul",{className:"grid grid-cols-3 lg:grid-cols-6 gap-2 text-center pt-1 font-mono-label text-[8px] lg:text-[10px]",children:HA.map(I=>k.jsxs("li",{className:"p-2 rounded-lg bg-black/40 border border-white/10",children:[k.jsx("div",{className:`font-bold text-[10px] lg:text-xs ${I.color}`,children:I.sigla}),k.jsx("span",{className:"text-slate-400 block mt-0.5",children:I.texto})]},I.sigla))})]}),k.jsxs("footer",{className:"pt-2 pb-4 lg:pb-8 text-center text-[8.5px] lg:text-[11px] font-mono-label text-slate-400 space-y-1",children:[k.jsx("div",{children:"© 2026 CHESSIA LAB • ADASC • UAGRM FICCT • 1ª Expo Ciencia Emprende Santa Cruz."}),i&&k.jsxs("div",{className:"space-x-3",children:[k.jsx("a",{href:"#politica",className:"underline underline-offset-2 hover:text-slate-200",children:"Términos y privacidad"}),k.jsx("a",{href:"#confianza",className:"underline underline-offset-2 hover:text-slate-200",children:"Confianza"})]})]})]}),k.jsx("aside",{className:"lg:hidden fixed bottom-0 inset-x-0 z-50 lp-vidrio border-t border-cyan-500/30 p-2.5 backdrop-blur-xl !bg-[#060d17]/95",children:k.jsxs("div",{className:"max-w-md mx-auto flex items-center justify-between gap-3",children:[k.jsxs("div",{className:"leading-tight min-w-0",children:[k.jsx("div",{className:"text-[8.5px] font-bold uppercase text-slate-400 font-mono-label",children:"LUGAR"}),k.jsx("div",{className:"text-[11px] font-extrabold text-cyan-300 font-mono-label truncate",children:"Paraninfo UAGRM"})]}),k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("a",{href:IA,target:"_blank",rel:"noopener noreferrer",className:"whitespace-nowrap px-2.5 py-2 rounded-xl bg-slate-800/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold active:scale-95 transition font-mono-label",children:"💬 WhatsApp"}),k.jsx("button",{type:"button",onClick:w,className:"lp-boton-primario whitespace-nowrap px-3 py-2 rounded-xl font-extrabold text-[11px] uppercase tracking-wide font-mono-label",children:"REGÍSTRATE GRATIS"})]})]})})]})}YS.createRoot(document.getElementById("root")).render(k.jsx(di.StrictMode,{children:k.jsx(GA,{})}));
