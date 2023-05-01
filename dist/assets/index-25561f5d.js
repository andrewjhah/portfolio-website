(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $_={exports:{}},Ou={},K_={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),$x=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Zx=Symbol.for("react.context"),Qx=Symbol.for("react.forward_ref"),Jx=Symbol.for("react.suspense"),ey=Symbol.for("react.memo"),ty=Symbol.for("react.lazy"),op=Symbol.iterator;function ny(n){return n===null||typeof n!="object"?null:(n=op&&n[op]||n["@@iterator"],typeof n=="function"?n:null)}var Z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,J_={};function Lo(n,e,t){this.props=n,this.context=e,this.refs=J_,this.updater=t||Z_}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Lo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function eg(){}eg.prototype=Lo.prototype;function Hd(n,e,t){this.props=n,this.context=e,this.refs=J_,this.updater=t||Z_}var Wd=Hd.prototype=new eg;Wd.constructor=Hd;Q_(Wd,Lo.prototype);Wd.isPureReactComponent=!0;var ap=Array.isArray,tg=Object.prototype.hasOwnProperty,Xd={current:null},ng={key:!0,ref:!0,__self:!0,__source:!0};function ig(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tg.call(e,i)&&!ng.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Va,type:n,key:s,ref:o,props:r,_owner:Xd.current}}function iy(n,e){return{$$typeof:Va,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function jd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Va}function ry(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var lp=/\/+/g;function fc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ry(""+n.key):e.toString(36)}function Gl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Va:case jx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+fc(o,0):i,ap(r)?(t="",n!=null&&(t=n.replace(lp,"$&/")+"/"),Gl(r,e,t,"",function(u){return u})):r!=null&&(jd(r)&&(r=iy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ap(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+fc(s,a);o+=Gl(s,e,t,l,r)}else if(l=ny(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+fc(s,a++),o+=Gl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(n,e,t){if(n==null)return n;var i=[],r=0;return Gl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function sy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jt={current:null},Vl={transition:null},oy={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Xd};Ue.Children={map:el,forEach:function(n,e,t){el(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return el(n,function(){e++}),e},toArray:function(n){return el(n,function(e){return e})||[]},only:function(n){if(!jd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ue.Component=Lo;Ue.Fragment=Yx;Ue.Profiler=$x;Ue.PureComponent=Hd;Ue.StrictMode=qx;Ue.Suspense=Jx;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;Ue.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Q_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)tg.call(e,l)&&!ng.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Va,type:n.type,key:r,ref:s,props:i,_owner:o}};Ue.createContext=function(n){return n={$$typeof:Zx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Kx,_context:n},n.Consumer=n};Ue.createElement=ig;Ue.createFactory=function(n){var e=ig.bind(null,n);return e.type=n,e};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(n){return{$$typeof:Qx,render:n}};Ue.isValidElement=jd;Ue.lazy=function(n){return{$$typeof:ty,_payload:{_status:-1,_result:n},_init:sy}};Ue.memo=function(n,e){return{$$typeof:ey,type:n,compare:e===void 0?null:e}};Ue.startTransition=function(n){var e=Vl.transition;Vl.transition={};try{n()}finally{Vl.transition=e}};Ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ue.useCallback=function(n,e){return Jt.current.useCallback(n,e)};Ue.useContext=function(n){return Jt.current.useContext(n)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(n){return Jt.current.useDeferredValue(n)};Ue.useEffect=function(n,e){return Jt.current.useEffect(n,e)};Ue.useId=function(){return Jt.current.useId()};Ue.useImperativeHandle=function(n,e,t){return Jt.current.useImperativeHandle(n,e,t)};Ue.useInsertionEffect=function(n,e){return Jt.current.useInsertionEffect(n,e)};Ue.useLayoutEffect=function(n,e){return Jt.current.useLayoutEffect(n,e)};Ue.useMemo=function(n,e){return Jt.current.useMemo(n,e)};Ue.useReducer=function(n,e,t){return Jt.current.useReducer(n,e,t)};Ue.useRef=function(n){return Jt.current.useRef(n)};Ue.useState=function(n){return Jt.current.useState(n)};Ue.useSyncExternalStore=function(n,e,t){return Jt.current.useSyncExternalStore(n,e,t)};Ue.useTransition=function(){return Jt.current.useTransition()};Ue.version="18.2.0";K_.exports=Ue;var Er=K_.exports;const ay=Xx(Er);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=Er,uy=Symbol.for("react.element"),cy=Symbol.for("react.fragment"),fy=Object.prototype.hasOwnProperty,dy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function rg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fy.call(e,i)&&!hy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uy,type:n,key:s,ref:o,props:r,_owner:dy.current}}Ou.Fragment=cy;Ou.jsx=rg;Ou.jsxs=rg;$_.exports=Ou;var or=$_.exports,wf={},sg={exports:{}},Cn={},og={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,G){var O=L.length;L.push(G);e:for(;0<O;){var re=O-1>>>1,Q=L[re];if(0<r(Q,G))L[re]=G,L[O]=Q,O=re;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var G=L[0],O=L.pop();if(O!==G){L[0]=O;e:for(var re=0,Q=L.length,W=Q>>>1;re<W;){var q=2*(re+1)-1,ie=L[q],oe=q+1,D=L[oe];if(0>r(ie,O))oe<Q&&0>r(D,ie)?(L[re]=D,L[oe]=O,re=oe):(L[re]=ie,L[q]=O,re=q);else if(oe<Q&&0>r(D,O))L[re]=D,L[oe]=O,re=oe;else break e}}return G}function r(L,G){var O=L.sortIndex-G.sortIndex;return O!==0?O:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=L)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(L){if(m=!1,x(L),!v)if(t(l)!==null)v=!0,Z(M);else{var G=t(u);G!==null&&H(S,G.startTime-L)}}function M(L,G){v=!1,m&&(m=!1,f(P),P=-1),p=!0;var O=h;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||L&&!B());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var Q=re(d.expirationTime<=G);G=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var W=!0;else{var q=t(u);q!==null&&H(S,q.startTime-G),W=!1}return W}finally{d=null,h=O,p=!1}}var E=!1,w=null,P=-1,y=5,A=-1;function B(){return!(n.unstable_now()-A<y)}function V(){if(w!==null){var L=n.unstable_now();A=L;var G=!0;try{G=w(!0,L)}finally{G?U():(E=!1,w=null)}}else E=!1}var U;if(typeof g=="function")U=function(){g(V)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,k=F.port2;F.port1.onmessage=V,U=function(){k.postMessage(null)}}else U=function(){_(V,0)};function Z(L){w=L,E||(E=!0,U())}function H(L,G){P=_(function(){L(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,Z(M))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var O=h;h=G;try{return L()}finally{h=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var O=h;h=L;try{return G()}finally{h=O}},n.unstable_scheduleCallback=function(L,G,O){var re=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?re+O:re):O=re,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,L={id:c++,callback:G,priorityLevel:L,startTime:O,expirationTime:Q,sortIndex:-1},O>re?(L.sortIndex=O,e(u,L),t(l)===null&&L===t(u)&&(m?(f(P),P=-1):m=!0,H(S,O-re))):(L.sortIndex=Q,e(l,L),v||p||(v=!0,Z(M))),L},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(L){var G=h;return function(){var O=h;h=G;try{return L.apply(this,arguments)}finally{h=O}}}})(ag);og.exports=ag;var py=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=Er,An=py;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,_a={};function ms(n,e){co(n,e),co(n+"Capture",e)}function co(n,e){for(_a[n]=e,n=0;n<e.length;n++)ug.add(e[n])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,my=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},cp={};function _y(n){return Af.call(cp,n)?!0:Af.call(up,n)?!1:my.test(n)?cp[n]=!0:(up[n]=!0,!1)}function gy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function vy(n,e,t,i){if(e===null||typeof e>"u"||gy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Nt[n]=new en(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Nt[e]=new en(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Nt[n]=new en(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Nt[n]=new en(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Nt[n]=new en(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Nt[n]=new en(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Nt[n]=new en(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Nt[n]=new en(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Nt[n]=new en(n,5,!1,n.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function qd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Yd,qd);Nt[e]=new en(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Yd,qd);Nt[e]=new en(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Yd,qd);Nt[e]=new en(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Nt[n]=new en(n,1,!1,n.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Nt[n]=new en(n,1,!1,n.toLowerCase(),null,!0,!0)});function $d(n,e,t,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vy(e,t,r,i)&&(t=null),i||r===null?_y(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var $i=lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),fp=Symbol.iterator;function Fo(n){return n===null||typeof n!="object"?null:(n=fp&&n[fp]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Object.assign,dc;function $o(n){if(dc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+n}var hc=!1;function pc(n,e){if(!n||hc)return"";hc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{hc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$o(n):""}function xy(n){switch(n.tag){case 5:return $o(n.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return n=pc(n.type,!1),n;case 11:return n=pc(n.type.render,!1),n;case 1:return n=pc(n.type,!0),n;default:return""}}function Lf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ks:return"Fragment";case Os:return"Portal";case Rf:return"Profiler";case Kd:return"StrictMode";case Cf:return"Suspense";case Pf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fg:return(n.displayName||"Context")+".Consumer";case cg:return(n._context.displayName||"Context")+".Provider";case Zd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qd:return e=n.displayName||null,e!==null?e:Lf(n.type)||"Memo";case nr:e=n._payload,n=n._init;try{return Lf(n(e))}catch{}}return null}function yy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sy(n){var e=hg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nl(n){n._valueTracker||(n._valueTracker=Sy(n))}function pg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=hg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function iu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bf(n,e){var t=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function dp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Tr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mg(n,e){e=e.checked,e!=null&&$d(n,"checked",e,!1)}function Df(n,e){mg(n,e);var t=Tr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uf(n,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function hp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uf(n,e,t){(e!=="number"||iu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ko=Array.isArray;function Qs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Tr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function If(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(Ko(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Tr(t)}}function _g(n,e){var t=Tr(e.value),i=Tr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function mp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var il,vg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ga(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},My=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(n){My.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ia[e]=ia[n]})});function xg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ia.hasOwnProperty(n)&&ia[n]?(""+e).trim():e+"px"}function yg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ey=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ff(n,e){if(e){if(Ey[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Of(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function Jd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zf=null,Js=null,eo=null;function _p(n){if(n=Xa(n)){if(typeof zf!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Vu(e),zf(n.stateNode,n.type,e))}}function Sg(n){Js?eo?eo.push(n):eo=[n]:Js=n}function Mg(){if(Js){var n=Js,e=eo;if(eo=Js=null,_p(n),e)for(n=0;n<e.length;n++)_p(e[n])}}function Eg(n,e){return n(e)}function Tg(){}var mc=!1;function wg(n,e,t){if(mc)return n(e,t);mc=!0;try{return Eg(n,e,t)}finally{mc=!1,(Js!==null||eo!==null)&&(Tg(),Mg())}}function va(n,e){var t=n.stateNode;if(t===null)return null;var i=Vu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Bf=!1;if(Vi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Bf=!1}function Ty(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ra=!1,ru=null,su=!1,Gf=null,wy={onError:function(n){ra=!0,ru=n}};function Ay(n,e,t,i,r,s,o,a,l){ra=!1,ru=null,Ty.apply(wy,arguments)}function Ry(n,e,t,i,r,s,o,a,l){if(Ay.apply(this,arguments),ra){if(ra){var u=ru;ra=!1,ru=null}else throw Error(ee(198));su||(su=!0,Gf=u)}}function _s(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ag(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function gp(n){if(_s(n)!==n)throw Error(ee(188))}function Cy(n){var e=n.alternate;if(!e){if(e=_s(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return gp(r),n;if(s===i)return gp(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function Rg(n){return n=Cy(n),n!==null?Cg(n):null}function Cg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Cg(n);if(e!==null)return e;n=n.sibling}return null}var Pg=An.unstable_scheduleCallback,vp=An.unstable_cancelCallback,Py=An.unstable_shouldYield,Ly=An.unstable_requestPaint,ft=An.unstable_now,by=An.unstable_getCurrentPriorityLevel,eh=An.unstable_ImmediatePriority,Lg=An.unstable_UserBlockingPriority,ou=An.unstable_NormalPriority,Dy=An.unstable_LowPriority,bg=An.unstable_IdlePriority,ku=null,vi=null;function Uy(n){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(ku,n,void 0,(n.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Fy,Iy=Math.log,Ny=Math.LN2;function Fy(n){return n>>>=0,n===0?32:31-(Iy(n)/Ny|0)|0}var rl=64,sl=4194304;function Zo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function au(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=t&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ri(e),r=1<<t,i|=n[t],e&=~r;return i}function Oy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Oy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Vf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dg(){var n=rl;return rl<<=1,!(rl&4194240)&&(rl=64),n}function _c(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ha(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ri(e),n[e]=t}function zy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ri(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function th(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ri(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ge=0;function Ug(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ig,nh,Ng,Fg,Og,Hf=!1,ol=[],dr=null,hr=null,pr=null,xa=new Map,ya=new Map,rr=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(n,e){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function ko(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&nh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Gy(n,e,t,i,r){switch(e){case"focusin":return dr=ko(dr,n,e,t,i,r),!0;case"dragenter":return hr=ko(hr,n,e,t,i,r),!0;case"mouseover":return pr=ko(pr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,ko(xa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,ko(ya.get(s)||null,n,e,t,i,r)),!0}return!1}function kg(n){var e=Yr(n.target);if(e!==null){var t=_s(e);if(t!==null){if(e=t.tag,e===13){if(e=Ag(t),e!==null){n.blockedOn=e,Og(n.priority,function(){Ng(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Wf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);kf=i,t.target.dispatchEvent(i),kf=null}else return e=Xa(t),e!==null&&nh(e),n.blockedOn=t,!1;e.shift()}return!0}function yp(n,e,t){Hl(n)&&t.delete(e)}function Vy(){Hf=!1,dr!==null&&Hl(dr)&&(dr=null),hr!==null&&Hl(hr)&&(hr=null),pr!==null&&Hl(pr)&&(pr=null),xa.forEach(yp),ya.forEach(yp)}function zo(n,e){n.blockedOn===e&&(n.blockedOn=null,Hf||(Hf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Vy)))}function Sa(n){function e(r){return zo(r,n)}if(0<ol.length){zo(ol[0],n);for(var t=1;t<ol.length;t++){var i=ol[t];i.blockedOn===n&&(i.blockedOn=null)}}for(dr!==null&&zo(dr,n),hr!==null&&zo(hr,n),pr!==null&&zo(pr,n),xa.forEach(e),ya.forEach(e),t=0;t<rr.length;t++)i=rr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rr.length&&(t=rr[0],t.blockedOn===null);)kg(t),t.blockedOn===null&&rr.shift()}var to=$i.ReactCurrentBatchConfig,lu=!0;function Hy(n,e,t,i){var r=Ge,s=to.transition;to.transition=null;try{Ge=1,ih(n,e,t,i)}finally{Ge=r,to.transition=s}}function Wy(n,e,t,i){var r=Ge,s=to.transition;to.transition=null;try{Ge=4,ih(n,e,t,i)}finally{Ge=r,to.transition=s}}function ih(n,e,t,i){if(lu){var r=Wf(n,e,t,i);if(r===null)Ac(n,e,i,uu,t),xp(n,i);else if(Gy(r,n,e,t,i))i.stopPropagation();else if(xp(n,i),e&4&&-1<By.indexOf(n)){for(;r!==null;){var s=Xa(r);if(s!==null&&Ig(s),s=Wf(n,e,t,i),s===null&&Ac(n,e,i,uu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ac(n,e,i,null,t)}}var uu=null;function Wf(n,e,t,i){if(uu=null,n=Jd(i),n=Yr(n),n!==null)if(e=_s(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ag(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return uu=n,null}function zg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(by()){case eh:return 1;case Lg:return 4;case ou:case Dy:return 16;case bg:return 536870912;default:return 16}default:return 16}}var ar=null,rh=null,Wl=null;function Bg(){if(Wl)return Wl;var n,e=rh,t=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Wl=r.slice(n,1<i?1-i:void 0)}function Xl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function Sp(){return!1}function Pn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:Sp,this.isPropagationStopped=Sp,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=Pn(bo),Wa=rt({},bo,{view:0,detail:0}),Xy=Pn(Wa),gc,vc,Bo,zu=rt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bo&&(Bo&&n.type==="mousemove"?(gc=n.screenX-Bo.screenX,vc=n.screenY-Bo.screenY):vc=gc=0,Bo=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),Mp=Pn(zu),jy=rt({},zu,{dataTransfer:0}),Yy=Pn(jy),qy=rt({},Wa,{relatedTarget:0}),xc=Pn(qy),$y=rt({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Pn($y),Zy=rt({},bo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qy=Pn(Zy),Jy=rt({},bo,{data:0}),Ep=Pn(Jy),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=nS[n])?!!e[n]:!1}function oh(){return iS}var rS=rt({},Wa,{key:function(n){if(n.key){var e=eS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(n){return n.type==="keypress"?Xl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sS=Pn(rS),oS=rt({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Pn(oS),aS=rt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),lS=Pn(aS),uS=rt({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=Pn(uS),fS=rt({},zu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=Pn(fS),hS=[9,13,27,32],ah=Vi&&"CompositionEvent"in window,sa=null;Vi&&"documentMode"in document&&(sa=document.documentMode);var pS=Vi&&"TextEvent"in window&&!sa,Gg=Vi&&(!ah||sa&&8<sa&&11>=sa),wp=String.fromCharCode(32),Ap=!1;function Vg(n,e){switch(n){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function mS(n,e){switch(n){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(Ap=!0,wp);case"textInput":return n=e.data,n===wp&&Ap?null:n;default:return null}}function _S(n,e){if(zs)return n==="compositionend"||!ah&&Vg(n,e)?(n=Bg(),Wl=rh=ar=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!gS[n.type]:e==="textarea"}function Wg(n,e,t,i){Sg(i),e=cu(e,"onChange"),0<e.length&&(t=new sh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var oa=null,Ma=null;function vS(n){t0(n,0)}function Bu(n){var e=Vs(n);if(pg(e))return n}function xS(n,e){if(n==="change")return e}var Xg=!1;if(Vi){var yc;if(Vi){var Sc="oninput"in document;if(!Sc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Sc=typeof Cp.oninput=="function"}yc=Sc}else yc=!1;Xg=yc&&(!document.documentMode||9<document.documentMode)}function Pp(){oa&&(oa.detachEvent("onpropertychange",jg),Ma=oa=null)}function jg(n){if(n.propertyName==="value"&&Bu(Ma)){var e=[];Wg(e,Ma,n,Jd(n)),wg(vS,e)}}function yS(n,e,t){n==="focusin"?(Pp(),oa=e,Ma=t,oa.attachEvent("onpropertychange",jg)):n==="focusout"&&Pp()}function SS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bu(Ma)}function MS(n,e){if(n==="click")return Bu(e)}function ES(n,e){if(n==="input"||n==="change")return Bu(e)}function TS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:TS;function Ea(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Af.call(e,r)||!li(n[r],e[r]))return!1}return!0}function Lp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bp(n,e){var t=Lp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lp(t)}}function Yg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Yg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function qg(){for(var n=window,e=iu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=iu(n.document)}return e}function lh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function wS(n){var e=qg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Yg(t.ownerDocument.documentElement,t)){if(i!==null&&lh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=bp(t,s);var o=bp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var AS=Vi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Xf=null,aa=null,jf=!1;function Dp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jf||Bs==null||Bs!==iu(i)||(i=Bs,"selectionStart"in i&&lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Ea(aa,i)||(aa=i,i=cu(Xf,"onSelect"),0<i.length&&(e=new sh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Bs)))}function ll(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Gs={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Mc={},$g={};Vi&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Gu(n){if(Mc[n])return Mc[n];if(!Gs[n])return n;var e=Gs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $g)return Mc[n]=e[t];return n}var Kg=Gu("animationend"),Zg=Gu("animationiteration"),Qg=Gu("animationstart"),Jg=Gu("transitionend"),e0=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,e){e0.set(n,e),ms(e,[n])}for(var Ec=0;Ec<Up.length;Ec++){var Tc=Up[Ec],RS=Tc.toLowerCase(),CS=Tc[0].toUpperCase()+Tc.slice(1);Pr(RS,"on"+CS)}Pr(Kg,"onAnimationEnd");Pr(Zg,"onAnimationIteration");Pr(Qg,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Jg,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Ip(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ry(i,e,void 0,n),n.currentTarget=null}function t0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,u),s=l}}}if(su)throw n=Gf,su=!1,Gf=null,n}function $e(n,e){var t=e[Zf];t===void 0&&(t=e[Zf]=new Set);var i=n+"__bubble";t.has(i)||(n0(e,n,2,!1),t.add(i))}function wc(n,e,t){var i=0;e&&(i|=4),n0(t,n,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[ul]){n[ul]=!0,ug.forEach(function(t){t!=="selectionchange"&&(PS.has(t)||wc(t,!1,n),wc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ul]||(e[ul]=!0,wc("selectionchange",!1,e))}}function n0(n,e,t,i){switch(zg(e)){case 1:var r=Hy;break;case 4:r=Wy;break;default:r=ih}t=r.bind(null,e,t,n),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ac(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wg(function(){var u=s,c=Jd(t),d=[];e:{var h=e0.get(n);if(h!==void 0){var p=sh,v=n;switch(n){case"keypress":if(Xl(t)===0)break e;case"keydown":case"keyup":p=sS;break;case"focusin":v="focus",p=xc;break;case"focusout":v="blur",p=xc;break;case"beforeblur":case"afterblur":p=xc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lS;break;case Kg:case Zg:case Qg:p=Ky;break;case Jg:p=cS;break;case"scroll":p=Xy;break;case"wheel":p=dS;break;case"copy":case"cut":case"paste":p=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tp}var m=(e&4)!==0,_=!m&&n==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=va(g,f),S!=null&&m.push(wa(g,S,x)))),_)break;g=g.return}0<m.length&&(h=new p(h,v,null,t,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==kf&&(v=t.relatedTarget||t.fromElement)&&(Yr(v)||v[Hi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?Yr(v):null,v!==null&&(_=_s(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(m=Mp,S="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(m=Tp,S="onPointerLeave",f="onPointerEnter",g="pointer"),_=p==null?h:Vs(p),x=v==null?h:Vs(v),h=new m(S,g+"leave",p,t,c),h.target=_,h.relatedTarget=x,S=null,Yr(c)===u&&(m=new m(f,g+"enter",v,t,c),m.target=x,m.relatedTarget=_,S=m),_=S,p&&v)t:{for(m=p,f=v,g=0,x=m;x;x=vs(x))g++;for(x=0,S=f;S;S=vs(S))x++;for(;0<g-x;)m=vs(m),g--;for(;0<x-g;)f=vs(f),x--;for(;g--;){if(m===f||f!==null&&m===f.alternate)break t;m=vs(m),f=vs(f)}m=null}else m=null;p!==null&&Np(d,h,p,m,!1),v!==null&&_!==null&&Np(d,_,v,m,!0)}}e:{if(h=u?Vs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=xS;else if(Rp(h))if(Xg)M=ES;else{M=SS;var E=yS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=MS);if(M&&(M=M(n,u))){Wg(d,M,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Uf(h,"number",h.value)}switch(E=u?Vs(u):window,n){case"focusin":(Rp(E)||E.contentEditable==="true")&&(Bs=E,Xf=u,aa=null);break;case"focusout":aa=Xf=Bs=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Dp(d,t,c);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Dp(d,t,c)}var w;if(ah)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zs?Vg(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Gg&&t.locale!=="ko"&&(zs||P!=="onCompositionStart"?P==="onCompositionEnd"&&zs&&(w=Bg()):(ar=c,rh="value"in ar?ar.value:ar.textContent,zs=!0)),E=cu(u,P),0<E.length&&(P=new Ep(P,n,null,t,c),d.push({event:P,listeners:E}),w?P.data=w:(w=Hg(t),w!==null&&(P.data=w)))),(w=pS?mS(n,t):_S(n,t))&&(u=cu(u,"onBeforeInput"),0<u.length&&(c=new Ep("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}t0(d,e)})}function wa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function cu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(n,t),s!=null&&i.unshift(wa(n,s,r)),s=va(n,e),s!=null&&i.push(wa(n,s,r))),n=n.return}return i}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Np(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=va(t,s),l!=null&&o.unshift(wa(t,l,a))):r||(l=va(t,s),l!=null&&o.push(wa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var LS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function Fp(n){return(typeof n=="string"?n:""+n).replace(LS,`
`).replace(bS,"")}function cl(n,e,t){if(e=Fp(e),Fp(n)!==e&&t)throw Error(ee(425))}function fu(){}var Yf=null,qf=null;function $f(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(n){return Op.resolve(null).then(n).catch(IS)}:Kf;function IS(n){setTimeout(function(){throw n})}function Rc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Sa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Sa(e)}function mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function kp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Do=Math.random().toString(36).slice(2),pi="__reactFiber$"+Do,Aa="__reactProps$"+Do,Hi="__reactContainer$"+Do,Zf="__reactEvents$"+Do,NS="__reactListeners$"+Do,FS="__reactHandles$"+Do;function Yr(n){var e=n[pi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Hi]||t[pi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=kp(n);n!==null;){if(t=n[pi])return t;n=kp(n)}return e}n=t,t=n.parentNode}return null}function Xa(n){return n=n[pi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Vu(n){return n[Aa]||null}var Qf=[],Hs=-1;function Lr(n){return{current:n}}function Ze(n){0>Hs||(n.current=Qf[Hs],Qf[Hs]=null,Hs--)}function qe(n,e){Hs++,Qf[Hs]=n.current,n.current=e}var wr={},Xt=Lr(wr),an=Lr(!1),as=wr;function fo(n,e){var t=n.type.contextTypes;if(!t)return wr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ln(n){return n=n.childContextTypes,n!=null}function du(){Ze(an),Ze(Xt)}function zp(n,e,t){if(Xt.current!==wr)throw Error(ee(168));qe(Xt,e),qe(an,t)}function i0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,yy(n)||"Unknown",r));return rt({},t,i)}function hu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,as=Xt.current,qe(Xt,n),qe(an,an.current),!0}function Bp(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=i0(n,e,as),i.__reactInternalMemoizedMergedChildContext=n,Ze(an),Ze(Xt),qe(Xt,n)):Ze(an),qe(an,t)}var Ni=null,Hu=!1,Cc=!1;function r0(n){Ni===null?Ni=[n]:Ni.push(n)}function OS(n){Hu=!0,r0(n)}function br(){if(!Cc&&Ni!==null){Cc=!0;var n=0,e=Ge;try{var t=Ni;for(Ge=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ni=null,Hu=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(n+1)),Pg(eh,br),r}finally{Ge=e,Cc=!1}}return null}var Ws=[],Xs=0,pu=null,mu=0,In=[],Nn=0,ls=null,ki=1,zi="";function Gr(n,e){Ws[Xs++]=mu,Ws[Xs++]=pu,pu=n,mu=e}function s0(n,e,t){In[Nn++]=ki,In[Nn++]=zi,In[Nn++]=ls,ls=n;var i=ki;n=zi;var r=32-ri(i)-1;i&=~(1<<r),t+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-ri(e)+r|t<<r|i,zi=s+n}else ki=1<<s|t<<r|i,zi=n}function uh(n){n.return!==null&&(Gr(n,1),s0(n,1,0))}function ch(n){for(;n===pu;)pu=Ws[--Xs],Ws[Xs]=null,mu=Ws[--Xs],Ws[Xs]=null;for(;n===ls;)ls=In[--Nn],In[Nn]=null,zi=In[--Nn],In[Nn]=null,ki=In[--Nn],In[Nn]=null}var Tn=null,En=null,Je=!1,ei=null;function o0(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Gp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,En=mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ls!==null?{id:ki,overflow:zi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,En=null,!0):!1;default:return!1}}function Jf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ed(n){if(Je){var e=En;if(e){var t=e;if(!Gp(n,e)){if(Jf(n))throw Error(ee(418));e=mr(t.nextSibling);var i=Tn;e&&Gp(n,e)?o0(i,t):(n.flags=n.flags&-4097|2,Je=!1,Tn=n)}}else{if(Jf(n))throw Error(ee(418));n.flags=n.flags&-4097|2,Je=!1,Tn=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function fl(n){if(n!==Tn)return!1;if(!Je)return Vp(n),Je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!$f(n.type,n.memoizedProps)),e&&(e=En)){if(Jf(n))throw a0(),Error(ee(418));for(;e;)o0(n,e),e=mr(e.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=Tn?mr(n.stateNode.nextSibling):null;return!0}function a0(){for(var n=En;n;)n=mr(n.nextSibling)}function ho(){En=Tn=null,Je=!1}function fh(n){ei===null?ei=[n]:ei.push(n)}var kS=$i.ReactCurrentBatchConfig;function Qn(n,e){if(n&&n.defaultProps){e=rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var _u=Lr(null),gu=null,js=null,dh=null;function hh(){dh=js=gu=null}function ph(n){var e=_u.current;Ze(_u),n._currentValue=e}function td(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function no(n,e){gu=n,dh=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(on=!0),n.firstContext=null)}function Hn(n){var e=n._currentValue;if(dh!==n)if(n={context:n,memoizedValue:e,next:null},js===null){if(gu===null)throw Error(ee(308));js=n,gu.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return e}var qr=null;function mh(n){qr===null?qr=[n]:qr.push(n)}function l0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,mh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Wi(n,i)}function Wi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ir=!1;function _h(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(n,t)}return r=i.interleaved,r===null?(e.next=e,mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(n,t)}function jl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,th(n,t)}}function Hp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function vu(n,e,t,i){var r=n.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,m=a;switch(h=e,p=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=rt({},d,h);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,n.lanes=o,n.memoizedState=d}}function Wp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var c0=new lg.Component().refs;function nd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wu={isMounted:function(n){return(n=n._reactInternals)?_s(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Zt(),r=vr(n),s=Bi(i,r);s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(si(e,n,r,i),jl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Zt(),r=vr(n),s=Bi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(si(e,n,r,i),jl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Zt(),i=vr(n),r=Bi(t,i);r.tag=2,e!=null&&(r.callback=e),e=_r(n,r,i),e!==null&&(si(e,n,i,t),jl(e,n,i))}};function Xp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(t,i)||!Ea(r,s):!0}function f0(n,e,t){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=ln(e)?as:Xt.current,i=e.contextTypes,s=(i=i!=null)?fo(n,r):wr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function jp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wu.enqueueReplaceState(e,e.state,null)}function id(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=c0,_h(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=ln(e)?as:Xt.current,r.context=fo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wu.enqueueReplaceState(r,r.state,null),vu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Go(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===c0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function dl(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Yp(n){var e=n._init;return e(n._payload)}function d0(n){function e(f,g){if(n){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=xr(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,S){return g===null||g.tag!==6?(g=Nc(x,f.mode,S),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,S){var M=x.type;return M===ks?c(f,g,x.props.children,S,x.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nr&&Yp(M)===g.type)?(S=r(g,x.props),S.ref=Go(f,g,x),S.return=f,S):(S=Ql(x.type,x.key,x.props,null,f.mode,S),S.ref=Go(f,g,x),S.return=f,S)}function u(f,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Fc(x,f.mode,S),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function c(f,g,x,S,M){return g===null||g.tag!==7?(g=es(x,f.mode,S,M),g.return=f,g):(g=r(g,x),g.return=f,g)}function d(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nc(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tl:return x=Ql(g.type,g.key,g.props,null,f.mode,x),x.ref=Go(f,null,g),x.return=f,x;case Os:return g=Fc(g,f.mode,x),g.return=f,g;case nr:var S=g._init;return d(f,S(g._payload),x)}if(Ko(g)||Fo(g))return g=es(g,f.mode,x,null),g.return=f,g;dl(f,g)}return null}function h(f,g,x,S){var M=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(f,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:return x.key===M?l(f,g,x,S):null;case Os:return x.key===M?u(f,g,x,S):null;case nr:return M=x._init,h(f,g,M(x._payload),S)}if(Ko(x)||Fo(x))return M!==null?null:c(f,g,x,S,null);dl(f,x)}return null}function p(f,g,x,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(g,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:return f=f.get(S.key===null?x:S.key)||null,l(g,f,S,M);case Os:return f=f.get(S.key===null?x:S.key)||null,u(g,f,S,M);case nr:var E=S._init;return p(f,g,x,E(S._payload),M)}if(Ko(S)||Fo(S))return f=f.get(x)||null,c(g,f,S,M,null);dl(g,S)}return null}function v(f,g,x,S){for(var M=null,E=null,w=g,P=g=0,y=null;w!==null&&P<x.length;P++){w.index>P?(y=w,w=null):y=w.sibling;var A=h(f,w,x[P],S);if(A===null){w===null&&(w=y);break}n&&w&&A.alternate===null&&e(f,w),g=s(A,g,P),E===null?M=A:E.sibling=A,E=A,w=y}if(P===x.length)return t(f,w),Je&&Gr(f,P),M;if(w===null){for(;P<x.length;P++)w=d(f,x[P],S),w!==null&&(g=s(w,g,P),E===null?M=w:E.sibling=w,E=w);return Je&&Gr(f,P),M}for(w=i(f,w);P<x.length;P++)y=p(w,f,P,x[P],S),y!==null&&(n&&y.alternate!==null&&w.delete(y.key===null?P:y.key),g=s(y,g,P),E===null?M=y:E.sibling=y,E=y);return n&&w.forEach(function(B){return e(f,B)}),Je&&Gr(f,P),M}function m(f,g,x,S){var M=Fo(x);if(typeof M!="function")throw Error(ee(150));if(x=M.call(x),x==null)throw Error(ee(151));for(var E=M=null,w=g,P=g=0,y=null,A=x.next();w!==null&&!A.done;P++,A=x.next()){w.index>P?(y=w,w=null):y=w.sibling;var B=h(f,w,A.value,S);if(B===null){w===null&&(w=y);break}n&&w&&B.alternate===null&&e(f,w),g=s(B,g,P),E===null?M=B:E.sibling=B,E=B,w=y}if(A.done)return t(f,w),Je&&Gr(f,P),M;if(w===null){for(;!A.done;P++,A=x.next())A=d(f,A.value,S),A!==null&&(g=s(A,g,P),E===null?M=A:E.sibling=A,E=A);return Je&&Gr(f,P),M}for(w=i(f,w);!A.done;P++,A=x.next())A=p(w,f,P,A.value,S),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?P:A.key),g=s(A,g,P),E===null?M=A:E.sibling=A,E=A);return n&&w.forEach(function(V){return e(f,V)}),Je&&Gr(f,P),M}function _(f,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ks&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:e:{for(var M=x.key,E=g;E!==null;){if(E.key===M){if(M=x.type,M===ks){if(E.tag===7){t(f,E.sibling),g=r(E,x.props.children),g.return=f,f=g;break e}}else if(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nr&&Yp(M)===E.type){t(f,E.sibling),g=r(E,x.props),g.ref=Go(f,E,x),g.return=f,f=g;break e}t(f,E);break}else e(f,E);E=E.sibling}x.type===ks?(g=es(x.props.children,f.mode,S,x.key),g.return=f,f=g):(S=Ql(x.type,x.key,x.props,null,f.mode,S),S.ref=Go(f,g,x),S.return=f,f=S)}return o(f);case Os:e:{for(E=x.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Fc(x,f.mode,S),g.return=f,f=g}return o(f);case nr:return E=x._init,_(f,g,E(x._payload),S)}if(Ko(x))return v(f,g,x,S);if(Fo(x))return m(f,g,x,S);dl(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,x),g.return=f,f=g):(t(f,g),g=Nc(x,f.mode,S),g.return=f,f=g),o(f)):t(f,g)}return _}var po=d0(!0),h0=d0(!1),ja={},xi=Lr(ja),Ra=Lr(ja),Ca=Lr(ja);function $r(n){if(n===ja)throw Error(ee(174));return n}function gh(n,e){switch(qe(Ca,e),qe(Ra,n),qe(xi,ja),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Nf(e,n)}Ze(xi),qe(xi,e)}function mo(){Ze(xi),Ze(Ra),Ze(Ca)}function p0(n){$r(Ca.current);var e=$r(xi.current),t=Nf(e,n.type);e!==t&&(qe(Ra,n),qe(xi,t))}function vh(n){Ra.current===n&&(Ze(xi),Ze(Ra))}var et=Lr(0);function xu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pc=[];function xh(){for(var n=0;n<Pc.length;n++)Pc[n]._workInProgressVersionPrimary=null;Pc.length=0}var Yl=$i.ReactCurrentDispatcher,Lc=$i.ReactCurrentBatchConfig,us=0,it=null,gt=null,At=null,yu=!1,la=!1,Pa=0,zS=0;function Ot(){throw Error(ee(321))}function yh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function Sh(n,e,t,i,r,s){if(us=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=n===null||n.memoizedState===null?HS:WS,n=t(i,r),la){s=0;do{if(la=!1,Pa=0,25<=s)throw Error(ee(301));s+=1,At=gt=null,e.updateQueue=null,Yl.current=XS,n=t(i,r)}while(la)}if(Yl.current=Su,e=gt!==null&&gt.next!==null,us=0,At=gt=it=null,yu=!1,e)throw Error(ee(300));return n}function Mh(){var n=Pa!==0;return Pa=0,n}function di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?it.memoizedState=At=n:At=At.next=n,At}function Wn(){if(gt===null){var n=it.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var e=At===null?it.memoizedState:At.next;if(e!==null)At=e,gt=n;else{if(n===null)throw Error(ee(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},At===null?it.memoizedState=At=n:At=At.next=n}return At}function La(n,e){return typeof e=="function"?e(n):e}function bc(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=gt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((us&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,it.lanes|=c,cs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,it.lanes|=s,cs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Dc(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function m0(){}function _0(n,e){var t=it,i=Wn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Eh(x0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(t.flags|=2048,ba(9,v0.bind(null,t,i,r,e),void 0,null),Rt===null)throw Error(ee(349));us&30||g0(t,e,r)}return r}function g0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function v0(n,e,t,i){e.value=t,e.getSnapshot=i,y0(e)&&S0(n)}function x0(n,e,t){return t(function(){y0(e)&&S0(n)})}function y0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function S0(n){var e=Wi(n,1);e!==null&&si(e,n,1,-1)}function qp(n){var e=di();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},e.queue=n,n=n.dispatch=VS.bind(null,it,n),[e.memoizedState,n]}function ba(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function M0(){return Wn().memoizedState}function ql(n,e,t,i){var r=di();it.flags|=n,r.memoizedState=ba(1|e,t,void 0,i===void 0?null:i)}function Xu(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&yh(i,o.deps)){r.memoizedState=ba(e,t,s,i);return}}it.flags|=n,r.memoizedState=ba(1|e,t,s,i)}function $p(n,e){return ql(8390656,8,n,e)}function Eh(n,e){return Xu(2048,8,n,e)}function E0(n,e){return Xu(4,2,n,e)}function T0(n,e){return Xu(4,4,n,e)}function w0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function A0(n,e,t){return t=t!=null?t.concat([n]):null,Xu(4,4,w0.bind(null,e,n),t)}function Th(){}function R0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function C0(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function P0(n,e,t){return us&21?(li(t,e)||(t=Dg(),it.lanes|=t,cs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=t)}function BS(n,e){var t=Ge;Ge=t!==0&&4>t?t:4,n(!0);var i=Lc.transition;Lc.transition={};try{n(!1),e()}finally{Ge=t,Lc.transition=i}}function L0(){return Wn().memoizedState}function GS(n,e,t){var i=vr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},b0(n))D0(e,t);else if(t=l0(n,e,t,i),t!==null){var r=Zt();si(t,n,i,r),U0(t,e,i)}}function VS(n,e,t){var i=vr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(b0(n))D0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=l0(n,e,r,i),t!==null&&(r=Zt(),si(t,n,i,r),U0(t,e,i))}}function b0(n){var e=n.alternate;return n===it||e!==null&&e===it}function D0(n,e){la=yu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function U0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,th(n,t)}}var Su={readContext:Hn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},HS={readContext:Hn,useCallback:function(n,e){return di().memoizedState=[n,e===void 0?null:e],n},useContext:Hn,useEffect:$p,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ql(4194308,4,w0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ql(4194308,4,n,e)},useInsertionEffect:function(n,e){return ql(4,2,n,e)},useMemo:function(n,e){var t=di();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=di();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=GS.bind(null,it,n),[i.memoizedState,n]},useRef:function(n){var e=di();return n={current:n},e.memoizedState=n},useState:qp,useDebugValue:Th,useDeferredValue:function(n){return di().memoizedState=n},useTransition:function(){var n=qp(!1),e=n[0];return n=BS.bind(null,n[1]),di().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=it,r=di();if(Je){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Rt===null)throw Error(ee(349));us&30||g0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$p(x0.bind(null,i,s,n),[n]),i.flags|=2048,ba(9,v0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=di(),e=Rt.identifierPrefix;if(Je){var t=zi,i=ki;t=(i&~(1<<32-ri(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Pa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=zS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:Hn,useCallback:R0,useContext:Hn,useEffect:Eh,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:bc,useRef:M0,useState:function(){return bc(La)},useDebugValue:Th,useDeferredValue:function(n){var e=Wn();return P0(e,gt.memoizedState,n)},useTransition:function(){var n=bc(La)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:m0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1},XS={readContext:Hn,useCallback:R0,useContext:Hn,useEffect:Eh,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:Dc,useRef:M0,useState:function(){return Dc(La)},useDebugValue:Th,useDeferredValue:function(n){var e=Wn();return gt===null?e.memoizedState=n:P0(e,gt.memoizedState,n)},useTransition:function(){var n=Dc(La)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:m0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1};function _o(n,e){try{var t="",i=e;do t+=xy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Uc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function rd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function I0(n,e,t){t=Bi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Eu||(Eu=!0,pd=i),rd(n,e)},t}function N0(n,e,t){t=Bi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){rd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){rd(n,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Kp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new jS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=oM.bind(null,n,e,t),e.then(n,n))}function Zp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Qp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Bi(-1,1),e.tag=2,_r(t,e,1))),t.lanes|=1),n)}var YS=$i.ReactCurrentOwner,on=!1;function $t(n,e,t,i){e.child=n===null?h0(e,null,t,i):po(e,n.child,t,i)}function Jp(n,e,t,i,r){t=t.render;var s=e.ref;return no(e,r),i=Sh(n,e,t,i,s,r),t=Mh(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xi(n,e,r)):(Je&&t&&uh(e),e.flags|=1,$t(n,e,i,r),e.child)}function em(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Dh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,F0(n,e,s,i,r)):(n=Ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ea,t(o,i)&&n.ref===e.ref)return Xi(n,e,r)}return e.flags|=1,n=xr(s,i),n.ref=e.ref,n.return=e,e.child=n}function F0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ea(s,i)&&n.ref===e.ref)if(on=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(on=!0);else return e.lanes=n.lanes,Xi(n,e,r)}return sd(n,e,t,i,r)}function O0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(qs,yn),yn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,qe(qs,yn),yn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,qe(qs,yn),yn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,qe(qs,yn),yn|=i;return $t(n,e,r,t),e.child}function k0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function sd(n,e,t,i,r){var s=ln(t)?as:Xt.current;return s=fo(e,s),no(e,r),t=Sh(n,e,t,i,s,r),i=Mh(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xi(n,e,r)):(Je&&i&&uh(e),e.flags|=1,$t(n,e,t,r),e.child)}function tm(n,e,t,i,r){if(ln(t)){var s=!0;hu(e)}else s=!1;if(no(e,r),e.stateNode===null)$l(n,e),f0(e,t,i),id(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=ln(t)?as:Xt.current,u=fo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jp(e,o,i,u),ir=!1;var h=e.memoizedState;o.state=h,vu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||ir?(typeof c=="function"&&(nd(e,t,c,i),l=e.memoizedState),(a=ir||Xp(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=ln(t)?as:Xt.current,l=fo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&jp(e,o,i,l),ir=!1,h=e.memoizedState,o.state=h,vu(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||an.current||ir?(typeof p=="function"&&(nd(e,t,p,i),v=e.memoizedState),(u=ir||Xp(e,t,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return od(n,e,t,i,s,r)}function od(n,e,t,i,r,s){k0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bp(e,t,!1),Xi(n,e,s);i=e.stateNode,YS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=po(e,n.child,null,s),e.child=po(e,null,a,s)):$t(n,e,a,s),e.memoizedState=i.state,r&&Bp(e,t,!0),e.child}function z0(n){var e=n.stateNode;e.pendingContext?zp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(n,e.context,!1),gh(n,e.containerInfo)}function nm(n,e,t,i,r){return ho(),fh(r),e.flags|=256,$t(n,e,t,i),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(n){return{baseLanes:n,cachePool:null,transitions:null}}function B0(n,e,t){var i=e.pendingProps,r=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),qe(et,r&1),n===null)return ed(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qu(o,i,0,null),n=es(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ld(t),e.memoizedState=ad,n):wh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=es(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ld(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ad,i}return s=n.child,n=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function wh(n,e){return e=qu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function hl(n,e,t,i){return i!==null&&fh(i),po(e,n.child,null,t),n=wh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function qS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Uc(Error(ee(422))),hl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=qu({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,n.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if(!(e.mode&1))return hl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Uc(s,i,void 0),hl(n,e,o,i)}if(a=(o&n.childLanes)!==0,on||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(n,r),si(i,n,r,-1))}return bh(),i=Uc(Error(ee(421))),hl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=aM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=mr(r.nextSibling),Tn=e,Je=!0,ei=null,n!==null&&(In[Nn++]=ki,In[Nn++]=zi,In[Nn++]=ls,ki=n.id,zi=n.overflow,ls=e),e=wh(e,i.children),e.flags|=4096,e)}function im(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),td(n.return,e,t)}function Ic(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function G0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(n,e,i.children,t),i=et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,t,e);else if(n.tag===19)im(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(qe(et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&xu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ic(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&xu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ic(e,!0,t,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),cs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=xr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function $S(n,e,t){switch(e.tag){case 3:z0(e),ho();break;case 5:p0(e);break;case 1:ln(e.type)&&hu(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;qe(_u,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(qe(et,et.current&1),e.flags|=128,null):t&e.child.childLanes?B0(n,e,t):(qe(et,et.current&1),n=Xi(n,e,t),n!==null?n.sibling:null);qe(et,et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return G0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),qe(et,et.current),i)break;return null;case 22:case 23:return e.lanes=0,O0(n,e,t)}return Xi(n,e,t)}var V0,ud,H0,W0;V0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ud=function(){};H0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,$r(xi.current);var s=null;switch(t){case"input":r=bf(n,r),i=bf(n,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=If(n,r),i=If(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fu)}Ff(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Vo(n,e){if(!Je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function KS(n,e,t){var i=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return ln(e.type)&&du(),kt(e),null;case 3:return i=e.stateNode,mo(),Ze(an),Ze(Xt),xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(gd(ei),ei=null))),ud(n,e),kt(e),null;case 5:vh(e);var r=$r(Ca.current);if(t=e.type,n!==null&&e.stateNode!=null)H0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return kt(e),null}if(n=$r(xi.current),fl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[Aa]=s,n=(e.mode&1)!==0,t){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)$e(Qo[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":dp(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":pp(i,s),$e("invalid",i)}Ff(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,n),r=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(t){case"input":nl(i),hp(i,s,!0);break;case"textarea":nl(i),mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pi]=e,n[Aa]=i,V0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Of(t,i),t){case"dialog":$e("cancel",n),$e("close",n),r=i;break;case"iframe":case"object":case"embed":$e("load",n),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)$e(Qo[r],n);r=i;break;case"source":$e("error",n),r=i;break;case"img":case"image":case"link":$e("error",n),$e("load",n),r=i;break;case"details":$e("toggle",n),r=i;break;case"input":dp(n,i),r=bf(n,i),$e("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),$e("invalid",n);break;case"textarea":pp(n,i),r=If(n,i),$e("invalid",n);break;default:r=i}Ff(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ga(n,l):typeof l=="number"&&ga(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",n):l!=null&&$d(n,s,l,o))}switch(t){case"input":nl(n),hp(n,i,!1);break;case"textarea":nl(n),mp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Tr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)W0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=$r(Ca.current),$r(xi.current),fl(e)){if(i=e.stateNode,t=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:cl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return kt(e),null;case 13:if(Ze(et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&En!==null&&e.mode&1&&!(e.flags&128))a0(),ho(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[pi]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else ei!==null&&(gd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||et.current&1?xt===0&&(xt=3):bh())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return mo(),ud(n,e),n===null&&Ta(e.stateNode.containerInfo),kt(e),null;case 10:return ph(e.type._context),kt(e),null;case 17:return ln(e.type)&&du(),kt(e),null;case 19:if(Ze(et),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vo(s,!1);else{if(xt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=xu(n),o!==null){for(e.flags|=128,Vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return qe(et,et.current&1|2),e.child}n=n.sibling}s.tail!==null&&ft()>go&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304)}else{if(!i)if(n=xu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Je)return kt(e),null}else 2*ft()-s.renderingStartTime>go&&t!==1073741824&&(e.flags|=128,i=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,t=et.current,qe(et,i?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return Lh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ZS(n,e){switch(ch(e),e.tag){case 1:return ln(e.type)&&du(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return mo(),Ze(an),Ze(Xt),xh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return vh(e),null;case 13:if(Ze(et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ho()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ze(et),null;case 4:return mo(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var pl=!1,Gt=!1,QS=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ot(n,e,i)}else t.current=null}function cd(n,e,t){try{t()}catch(i){ot(n,e,i)}}var rm=!1;function JS(n,e){if(Yf=lu,n=qg(),lh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(qf={focusedElem:n,selectionRange:t},lu=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,_=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?m:Qn(e.type,m),_);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){ot(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return v=rm,rm=!1,v}function ua(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&cd(e,t,s)}r=r.next}while(r!==i)}}function ju(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function fd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function X0(n){var e=n.alternate;e!==null&&(n.alternate=null,X0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pi],delete e[Aa],delete e[Zf],delete e[NS],delete e[FS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function j0(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||j0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fu));else if(i!==4&&(n=n.child,n!==null))for(dd(n,e,t),n=n.sibling;n!==null;)dd(n,e,t),n=n.sibling}function hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(hd(n,e,t),n=n.sibling;n!==null;)hd(n,e,t),n=n.sibling}var bt=null,Jn=!1;function Zi(n,e,t){for(t=t.child;t!==null;)Y0(n,e,t),t=t.sibling}function Y0(n,e,t){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(ku,t)}catch{}switch(t.tag){case 5:Gt||Ys(t,e);case 6:var i=bt,r=Jn;bt=null,Zi(n,e,t),bt=i,Jn=r,bt!==null&&(Jn?(n=bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):bt.removeChild(t.stateNode));break;case 18:bt!==null&&(Jn?(n=bt,t=t.stateNode,n.nodeType===8?Rc(n.parentNode,t):n.nodeType===1&&Rc(n,t),Sa(n)):Rc(bt,t.stateNode));break;case 4:i=bt,r=Jn,bt=t.stateNode.containerInfo,Jn=!0,Zi(n,e,t),bt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cd(t,e,o),r=r.next}while(r!==i)}Zi(n,e,t);break;case 1:if(!Gt&&(Ys(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){ot(t,e,a)}Zi(n,e,t);break;case 21:Zi(n,e,t);break;case 22:t.mode&1?(Gt=(i=Gt)||t.memoizedState!==null,Zi(n,e,t),Gt=i):Zi(n,e,t);break;default:Zi(n,e,t)}}function om(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new QS),e.forEach(function(i){var r=lM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Jn=!1;break e;case 3:bt=a.stateNode.containerInfo,Jn=!0;break e;case 4:bt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(bt===null)throw Error(ee(160));Y0(s,o,r),bt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q0(e,n),e=e.sibling}function q0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yn(e,n),ci(n),i&4){try{ua(3,n,n.return),ju(3,n)}catch(m){ot(n,n.return,m)}try{ua(5,n,n.return)}catch(m){ot(n,n.return,m)}}break;case 1:Yn(e,n),ci(n),i&512&&t!==null&&Ys(t,t.return);break;case 5:if(Yn(e,n),ci(n),i&512&&t!==null&&Ys(t,t.return),n.flags&32){var r=n.stateNode;try{ga(r,"")}catch(m){ot(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mg(r,s),Of(a,o);var u=Of(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?yg(r,d):c==="dangerouslySetInnerHTML"?vg(r,d):c==="children"?ga(r,d):$d(r,c,d,u)}switch(a){case"input":Df(r,s);break;case"textarea":_g(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qs(r,!!s.multiple,s.defaultValue,!0):Qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(m){ot(n,n.return,m)}}break;case 6:if(Yn(e,n),ci(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){ot(n,n.return,m)}}break;case 3:if(Yn(e,n),ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(m){ot(n,n.return,m)}break;case 4:Yn(e,n),ci(n);break;case 13:Yn(e,n),ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=ft())),i&4&&om(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Gt=(u=Gt)||c,Yn(e,n),Gt=u):Yn(e,n),ci(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ce=n,c=n.child;c!==null;){for(d=ce=c;ce!==null;){switch(h=ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:ua(4,h,h.return);break;case 1:Ys(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){ot(i,t,m)}}break;case 5:Ys(h,h.return);break;case 22:if(h.memoizedState!==null){lm(d);continue}}p!==null?(p.return=h,ce=p):lm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xg("display",o))}catch(m){ot(n,n.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){ot(n,n.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,n),ci(n),i&4&&om(n);break;case 21:break;default:Yn(e,n),ci(n)}}function ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(j0(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=sm(n);hd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sm(n);dd(n,a,o);break;default:throw Error(ee(161))}}catch(l){ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function eM(n,e,t){ce=n,$0(n)}function $0(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=pl;var u=Gt;if(pl=o,(Gt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?um(r):l!==null?(l.return=o,ce=l):um(r);for(;s!==null;)ce=s,$0(s),s=s.sibling;ce=r,pl=a,Gt=u}am(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):am(n)}}function am(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||ju(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Wp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Gt||e.flags&512&&fd(e)}catch(h){ot(e,e.return,h)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function lm(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function um(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ju(4,e)}catch(l){ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ot(e,r,l)}}var s=e.return;try{fd(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{fd(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var tM=Math.ceil,Mu=$i.ReactCurrentDispatcher,Ah=$i.ReactCurrentOwner,Vn=$i.ReactCurrentBatchConfig,ke=0,Rt=null,mt=null,It=0,yn=0,qs=Lr(0),xt=0,Da=null,cs=0,Yu=0,Rh=0,ca=null,nn=null,Ch=0,go=1/0,Ui=null,Eu=!1,pd=null,gr=null,ml=!1,lr=null,Tu=0,fa=0,md=null,Kl=-1,Zl=0;function Zt(){return ke&6?ft():Kl!==-1?Kl:Kl=ft()}function vr(n){return n.mode&1?ke&2&&It!==0?It&-It:kS.transition!==null?(Zl===0&&(Zl=Dg()),Zl):(n=Ge,n!==0||(n=window.event,n=n===void 0?16:zg(n.type)),n):1}function si(n,e,t,i){if(50<fa)throw fa=0,md=null,Error(ee(185));Ha(n,t,i),(!(ke&2)||n!==Rt)&&(n===Rt&&(!(ke&2)&&(Yu|=t),xt===4&&sr(n,It)),un(n,i),t===1&&ke===0&&!(e.mode&1)&&(go=ft()+500,Hu&&br()))}function un(n,e){var t=n.callbackNode;ky(n,e);var i=au(n,n===Rt?It:0);if(i===0)t!==null&&vp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&vp(t),e===1)n.tag===0?OS(cm.bind(null,n)):r0(cm.bind(null,n)),US(function(){!(ke&6)&&br()}),t=null;else{switch(Ug(i)){case 1:t=eh;break;case 4:t=Lg;break;case 16:t=ou;break;case 536870912:t=bg;break;default:t=ou}t=iv(t,K0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function K0(n,e){if(Kl=-1,Zl=0,ke&6)throw Error(ee(327));var t=n.callbackNode;if(io()&&n.callbackNode!==t)return null;var i=au(n,n===Rt?It:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=wu(n,i);else{e=i;var r=ke;ke|=2;var s=Q0();(Rt!==n||It!==e)&&(Ui=null,go=ft()+500,Jr(n,e));do try{rM();break}catch(a){Z0(n,a)}while(1);hh(),Mu.current=s,ke=r,mt!==null?e=0:(Rt=null,It=0,e=xt)}if(e!==0){if(e===2&&(r=Vf(n),r!==0&&(i=r,e=_d(n,r))),e===1)throw t=Da,Jr(n,0),sr(n,i),un(n,ft()),t;if(e===6)sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!nM(r)&&(e=wu(n,i),e===2&&(s=Vf(n),s!==0&&(i=s,e=_d(n,s))),e===1))throw t=Da,Jr(n,0),sr(n,i),un(n,ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Vr(n,nn,Ui);break;case 3:if(sr(n,i),(i&130023424)===i&&(e=Ch+500-ft(),10<e)){if(au(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Zt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Kf(Vr.bind(null,n,nn,Ui),e);break}Vr(n,nn,Ui);break;case 4:if(sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tM(i/1960))-i,10<i){n.timeoutHandle=Kf(Vr.bind(null,n,nn,Ui),i);break}Vr(n,nn,Ui);break;case 5:Vr(n,nn,Ui);break;default:throw Error(ee(329))}}}return un(n,ft()),n.callbackNode===t?K0.bind(null,n):null}function _d(n,e){var t=ca;return n.current.memoizedState.isDehydrated&&(Jr(n,e).flags|=256),n=wu(n,e),n!==2&&(e=nn,nn=t,e!==null&&gd(e)),n}function gd(n){nn===null?nn=n:nn.push.apply(nn,n)}function nM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(n,e){for(e&=~Rh,e&=~Yu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ri(e),i=1<<t;n[t]=-1,e&=~i}}function cm(n){if(ke&6)throw Error(ee(327));io();var e=au(n,0);if(!(e&1))return un(n,ft()),null;var t=wu(n,e);if(n.tag!==0&&t===2){var i=Vf(n);i!==0&&(e=i,t=_d(n,i))}if(t===1)throw t=Da,Jr(n,0),sr(n,e),un(n,ft()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Vr(n,nn,Ui),un(n,ft()),null}function Ph(n,e){var t=ke;ke|=1;try{return n(e)}finally{ke=t,ke===0&&(go=ft()+500,Hu&&br())}}function fs(n){lr!==null&&lr.tag===0&&!(ke&6)&&io();var e=ke;ke|=1;var t=Vn.transition,i=Ge;try{if(Vn.transition=null,Ge=1,n)return n()}finally{Ge=i,Vn.transition=t,ke=e,!(ke&6)&&br()}}function Lh(){yn=qs.current,Ze(qs)}function Jr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,DS(t)),mt!==null)for(t=mt.return;t!==null;){var i=t;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&du();break;case 3:mo(),Ze(an),Ze(Xt),xh();break;case 5:vh(i);break;case 4:mo();break;case 13:Ze(et);break;case 19:Ze(et);break;case 10:ph(i.type._context);break;case 22:case 23:Lh()}t=t.return}if(Rt=n,mt=n=xr(n.current,null),It=yn=e,xt=0,Da=null,Rh=Yu=cs=0,nn=ca=null,qr!==null){for(e=0;e<qr.length;e++)if(t=qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}qr=null}return n}function Z0(n,e){do{var t=mt;try{if(hh(),Yl.current=Su,yu){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yu=!1}if(us=0,At=gt=it=null,la=!1,Pa=0,Ah.current=null,t===null||t.return===null){xt=1,Da=e,mt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Zp(o);if(p!==null){p.flags&=-257,Qp(p,o,a,s,e),p.mode&1&&Kp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var m=new Set;m.add(l),e.updateQueue=m}else v.add(l);break e}else{if(!(e&1)){Kp(s,u,e),bh();break e}l=Error(ee(426))}}else if(Je&&a.mode&1){var _=Zp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Qp(_,o,a,s,e),fh(_o(l,a));break e}}s=l=_o(l,a),xt!==4&&(xt=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=I0(s,l,e);Hp(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(gr===null||!gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N0(s,a,e);Hp(s,S);break e}}s=s.return}while(s!==null)}ev(t)}catch(M){e=M,mt===t&&t!==null&&(mt=t=t.return);continue}break}while(1)}function Q0(){var n=Mu.current;return Mu.current=Su,n===null?Su:n}function bh(){(xt===0||xt===3||xt===2)&&(xt=4),Rt===null||!(cs&268435455)&&!(Yu&268435455)||sr(Rt,It)}function wu(n,e){var t=ke;ke|=2;var i=Q0();(Rt!==n||It!==e)&&(Ui=null,Jr(n,e));do try{iM();break}catch(r){Z0(n,r)}while(1);if(hh(),ke=t,Mu.current=i,mt!==null)throw Error(ee(261));return Rt=null,It=0,xt}function iM(){for(;mt!==null;)J0(mt)}function rM(){for(;mt!==null&&!Py();)J0(mt)}function J0(n){var e=nv(n.alternate,n,yn);n.memoizedProps=n.pendingProps,e===null?ev(n):mt=e,Ah.current=null}function ev(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ZS(t,e),t!==null){t.flags&=32767,mt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xt=6,mt=null;return}}else if(t=KS(t,e,yn),t!==null){mt=t;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=n}while(e!==null);xt===0&&(xt=5)}function Vr(n,e,t){var i=Ge,r=Vn.transition;try{Vn.transition=null,Ge=1,sM(n,e,t,i)}finally{Vn.transition=r,Ge=i}return null}function sM(n,e,t,i){do io();while(lr!==null);if(ke&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(zy(n,s),n===Rt&&(mt=Rt=null,It=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ml||(ml=!0,iv(ou,function(){return io(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=Ge;Ge=1;var a=ke;ke|=4,Ah.current=null,JS(n,t),q0(t,n),wS(qf),lu=!!Yf,qf=Yf=null,n.current=t,eM(t),Ly(),ke=a,Ge=o,Vn.transition=s}else n.current=t;if(ml&&(ml=!1,lr=n,Tu=r),s=n.pendingLanes,s===0&&(gr=null),Uy(t.stateNode),un(n,ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Eu)throw Eu=!1,n=pd,pd=null,n;return Tu&1&&n.tag!==0&&io(),s=n.pendingLanes,s&1?n===md?fa++:(fa=0,md=n):fa=0,br(),null}function io(){if(lr!==null){var n=Ug(Tu),e=Vn.transition,t=Ge;try{if(Vn.transition=null,Ge=16>n?16:n,lr===null)var i=!1;else{if(n=lr,lr=null,Tu=0,ke&6)throw Error(ee(331));var r=ke;for(ke|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:ua(8,c,s)}var d=c.child;if(d!==null)d.return=c,ce=d;else for(;ce!==null;){c=ce;var h=c.sibling,p=c.return;if(X0(c),c===u){ce=null;break}if(h!==null){h.return=p,ce=h;break}ce=p}}}var v=s.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ce=f;break e}ce=s.return}}var g=n.current;for(ce=g;ce!==null;){o=ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ce=x;else e:for(o=g;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ju(9,a)}}catch(M){ot(a,a.return,M)}if(a===o){ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ce=S;break e}ce=a.return}}if(ke=r,br(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(ku,n)}catch{}i=!0}return i}finally{Ge=t,Vn.transition=e}}return!1}function fm(n,e,t){e=_o(t,e),e=I0(n,e,1),n=_r(n,e,1),e=Zt(),n!==null&&(Ha(n,1,e),un(n,e))}function ot(n,e,t){if(n.tag===3)fm(n,n,t);else for(;e!==null;){if(e.tag===3){fm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){n=_o(t,n),n=N0(e,n,1),e=_r(e,n,1),n=Zt(),e!==null&&(Ha(e,1,n),un(e,n));break}}e=e.return}}function oM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Zt(),n.pingedLanes|=n.suspendedLanes&t,Rt===n&&(It&t)===t&&(xt===4||xt===3&&(It&130023424)===It&&500>ft()-Ch?Jr(n,0):Rh|=t),un(n,e)}function tv(n,e){e===0&&(n.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var t=Zt();n=Wi(n,e),n!==null&&(Ha(n,e,t),un(n,t))}function aM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),tv(n,t)}function lM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),tv(n,t)}var nv;nv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return on=!1,$S(n,e,t);on=!!(n.flags&131072)}else on=!1,Je&&e.flags&1048576&&s0(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$l(n,e),n=e.pendingProps;var r=fo(e,Xt.current);no(e,t),r=Sh(null,e,i,n,r,t);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,hu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_h(e),r.updater=Wu,e.stateNode=r,r._reactInternals=e,id(e,i,n,t),e=od(null,e,i,!0,s,t)):(e.tag=0,Je&&s&&uh(e),$t(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($l(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cM(i),n=Qn(i,n),r){case 0:e=sd(null,e,i,n,t);break e;case 1:e=tm(null,e,i,n,t);break e;case 11:e=Jp(null,e,i,n,t);break e;case 14:e=em(null,e,i,Qn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),sd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),tm(n,e,i,r,t);case 3:e:{if(z0(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u0(n,e),vu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(ee(423)),e),e=nm(n,e,i,t,r);break e}else if(i!==r){r=_o(Error(ee(424)),e),e=nm(n,e,i,t,r);break e}else for(En=mr(e.stateNode.containerInfo.firstChild),Tn=e,Je=!0,ei=null,t=h0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ho(),i===r){e=Xi(n,e,t);break e}$t(n,e,i,t)}e=e.child}return e;case 5:return p0(e),n===null&&ed(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,$f(i,r)?o=null:s!==null&&$f(i,s)&&(e.flags|=32),k0(n,e),$t(n,e,o,t),e.child;case 6:return n===null&&ed(e),null;case 13:return B0(n,e,t);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=po(e,null,i,t):$t(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Jp(n,e,i,r,t);case 7:return $t(n,e,e.pendingProps,t),e.child;case 8:return $t(n,e,e.pendingProps.children,t),e.child;case 12:return $t(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,qe(_u,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!an.current){e=Xi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),td(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),td(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,no(e,t),r=Hn(r),i=i(r),e.flags|=1,$t(n,e,i,t),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),em(n,e,i,r,t);case 15:return F0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),$l(n,e),e.tag=1,ln(i)?(n=!0,hu(e)):n=!1,no(e,t),f0(e,i,r),id(e,i,r,t),od(null,e,i,!0,n,t);case 19:return G0(n,e,t);case 22:return O0(n,e,t)}throw Error(ee(156,e.tag))};function iv(n,e){return Pg(n,e)}function uM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new uM(n,e,t,i)}function Dh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cM(n){if(typeof n=="function")return Dh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zd)return 11;if(n===Qd)return 14}return 2}function xr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ql(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Dh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ks:return es(t.children,r,s,e);case Kd:o=8,r|=8;break;case Rf:return n=kn(12,t,e,r|2),n.elementType=Rf,n.lanes=s,n;case Cf:return n=kn(13,t,e,r),n.elementType=Cf,n.lanes=s,n;case Pf:return n=kn(19,t,e,r),n.elementType=Pf,n.lanes=s,n;case dg:return qu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cg:o=10;break e;case fg:o=9;break e;case Zd:o=11;break e;case Qd:o=14;break e;case nr:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function es(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function qu(n,e,t,i){return n=kn(22,n,i,e),n.elementType=dg,n.lanes=t,n.stateNode={isHidden:!1},n}function Nc(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Fc(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function fM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uh(n,e,t,i,r,s,o,a,l){return n=new fM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(s),n}function dM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function rv(n){if(!n)return wr;n=n._reactInternals;e:{if(_s(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(ln(t))return i0(n,t,e)}return e}function sv(n,e,t,i,r,s,o,a,l){return n=Uh(t,i,!0,n,r,s,o,a,l),n.context=rv(null),t=n.current,i=Zt(),r=vr(t),s=Bi(i,r),s.callback=e??null,_r(t,s,r),n.current.lanes=r,Ha(n,r,i),un(n,i),n}function $u(n,e,t,i){var r=e.current,s=Zt(),o=vr(r);return t=rv(t),e.context===null?e.context=t:e.pendingContext=t,e=Bi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=_r(r,e,o),n!==null&&(si(n,r,o,s),jl(n,r,o)),o}function Au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ih(n,e){dm(n,e),(n=n.alternate)&&dm(n,e)}function hM(){return null}var ov=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nh(n){this._internalRoot=n}Ku.prototype.render=Nh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));$u(n,e,null,null)};Ku.prototype.unmount=Nh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;fs(function(){$u(null,n,null,null)}),e[Hi]=null}};function Ku(n){this._internalRoot=n}Ku.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rr.length&&e!==0&&e<rr[t].priority;t++);rr.splice(t,0,n),t===0&&kg(n)}};function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function pM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Au(o);s.call(u)}}var o=sv(e,i,n,0,null,!1,!1,"",hm);return n._reactRootContainer=o,n[Hi]=o.current,Ta(n.nodeType===8?n.parentNode:n),fs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Au(l);a.call(u)}}var l=Uh(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=l,n[Hi]=l.current,Ta(n.nodeType===8?n.parentNode:n),fs(function(){$u(e,l,t,i)}),l}function Qu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Au(o);a.call(l)}}$u(e,o,n,r)}else o=pM(t,e,n,r,i);return Au(o)}Ig=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Zo(e.pendingLanes);t!==0&&(th(e,t|1),un(e,ft()),!(ke&6)&&(go=ft()+500,br()))}break;case 13:fs(function(){var i=Wi(n,1);if(i!==null){var r=Zt();si(i,n,1,r)}}),Ih(n,1)}};nh=function(n){if(n.tag===13){var e=Wi(n,134217728);if(e!==null){var t=Zt();si(e,n,134217728,t)}Ih(n,134217728)}};Ng=function(n){if(n.tag===13){var e=vr(n),t=Wi(n,e);if(t!==null){var i=Zt();si(t,n,e,i)}Ih(n,e)}};Fg=function(){return Ge};Og=function(n,e){var t=Ge;try{return Ge=n,e()}finally{Ge=t}};zf=function(n,e,t){switch(e){case"input":if(Df(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Vu(i);if(!r)throw Error(ee(90));pg(i),Df(i,r)}}}break;case"textarea":_g(n,t);break;case"select":e=t.value,e!=null&&Qs(n,!!t.multiple,e,!1)}};Eg=Ph;Tg=fs;var mM={usingClientEntryPoint:!1,Events:[Xa,Vs,Vu,Sg,Mg,Ph]},Ho={findFiberByHostInstance:Yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_M={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rg(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||hM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{ku=_l.inject(_M),vi=_l}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(e))throw Error(ee(200));return dM(n,e,null,t)};Cn.createRoot=function(n,e){if(!Fh(n))throw Error(ee(299));var t=!1,i="",r=ov;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uh(n,1,!1,null,null,t,!1,i,r),n[Hi]=e.current,Ta(n.nodeType===8?n.parentNode:n),new Nh(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=Rg(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return fs(n)};Cn.hydrate=function(n,e,t){if(!Zu(e))throw Error(ee(200));return Qu(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!Fh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ov;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=sv(e,null,n,1,t??null,r,!1,s,o),n[Hi]=e.current,Ta(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ku(e)};Cn.render=function(n,e,t){if(!Zu(e))throw Error(ee(200));return Qu(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!Zu(n))throw Error(ee(40));return n._reactRootContainer?(fs(function(){Qu(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1};Cn.unstable_batchedUpdates=Ph;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Zu(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return Qu(n,e,t,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(n){console.error(n)}}av(),sg.exports=Cn;var gM=sg.exports,pm=gM;wf.createRoot=pm.createRoot,wf.hydrateRoot=pm.hydrateRoot;function Ii(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function lv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vo={duration:.5,overwrite:!1,delay:0},Oh,Ht,pt,zn=1e8,Ye=1/zn,vd=Math.PI*2,vM=vd/4,xM=0,uv=Math.sqrt,yM=Math.cos,SM=Math.sin,Pt=function(e){return typeof e=="string"},at=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},kh=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},cn=function(e){return e!==!1},zh=function(){return typeof window<"u"},gl=function(e){return at(e)||Pt(e)},cv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,xd=/(?:-?\.?\d|\.)+/gi,fv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dv=/[+-]=-?[.\d]+/,hv=/[^,'"\[\]\s]+/gi,MM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,Un,yd,Bh,Rn={},Ru={},pv,mv=function(e){return(Ru=ds(e,Rn))&&mn},Gh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Cu=function(e,t){return!t&&console.warn(e)},_v=function(e,t){return e&&(Rn[e]=t)&&Ru&&(Ru[e]=t)||Rn},Ua=function(){return 0},EM={suppressEvents:!0,isStart:!0,kill:!1},Jl={suppressEvents:!0,kill:!1},TM={suppressEvents:!0},Vh={},yr=[],Sd={},gv,Sn={},kc={},mm=30,eu=[],Hh="",Wh=function(e){var t=e[0],i,r;if(Ei(t)||at(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=eu.length;r--&&!eu[r].targetTest(t););i=eu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Gv(e[r],i)))||e.splice(r,1);return e},ts=function(e){return e._gsap||Wh(Bn(e))[0]._gsap},vv=function(e,t,i){return(i=e[t])&&at(i)?e[t]():kh(i)&&e.getAttribute&&e.getAttribute(t)||i},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},ct=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},ro=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},wM=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Pu=function(){var e=yr.length,t=yr.slice(0),i,r;for(Sd={},yr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xv=function(e,t,i,r){yr.length&&!Ht&&Pu(),e.render(t,i,r||Ht&&t<0&&(e._initted||e._startAt)),yr.length&&!Ht&&Pu()},yv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hv).length<2?t:Pt(e)?e.trim():e},Sv=function(e){return e},Xn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},AM=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ds=function(e,t){for(var i in t)e[i]=t[i];return e},_m=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ei(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Lu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},da=function(e){var t=e.parent||tt,i=e.keyframes?AM(Wt(e.keyframes)):Xn;if(cn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},RM=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Mv=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ju=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ar=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},CM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Md=function(e,t,i,r){return e._startAt&&(Ht?e._startAt.revert(Jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},PM=function n(e){return!e||e._ts&&n(e.parent)},gm=function(e){return e._repeat?xo(e._tTime,e=e.duration()+e._rDelay)*e:0},xo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},bu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ec=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},tc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ec(e),i._dirty||ns(i,e)),e},Ev=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=bu(e.rawTime(),t),(!t._dur||Ya(0,t.totalDuration(),i)-t._tTime>Ye)&&t.render(i,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ye}},mi=function(e,t,i,r){return t.parent&&Ar(t),t._start=Dt((ji(i)?i:i||e!==tt?Dn(e,i,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mv(e,t,"_first","_last",e._sort?"_start":0),Ed(t)||(e._recent=t),r||Ev(e,t),e._ts<0&&tc(e,e._tTime),e},Tv=function(e,t){return(Rn.ScrollTrigger||Gh("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},wv=function(e,t,i,r,s){if(jh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gv!==Mn.frame)return yr.push(e),e._lazy=[s,r],1},LM=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Ed=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bM=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&LM(e)&&!(!e._initted&&Ed(e))||(e._ts<0||e._dp._ts<0)&&!Ed(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Ya(0,e._tDur,t),c=xo(l,a),e._yoyo&&c&1&&(o=1-o),c!==xo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ht||r||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&wv(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Ye:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Md(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ar(e,1),!i&&!Ht&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DM=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},yo=function(e,t,i,r){var s=e._repeat,o=Dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&tc(e,e._tTime=e._tDur*a),e.parent&&ec(e),i||ns(e.parent,e),e},vm=function(e){return e instanceof sn?ns(e):yo(e,e._dur)},UM={_start:0,endTime:Ua,totalDuration:Ua},Dn=function n(e,t,i){var r=e.labels,s=e._recent||UM,o=e.duration()>=zn?s.endTime(!1):e._dur,a,l,u;return Pt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Wt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ha=function(e,t,i){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;o.immediateRender=cn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},Dr=function(e,t){return e||e===0?t(e):t},Ya=function(e,t,i){return i<e?e:i>t?t:i},Vt=function(e,t){return!Pt(e)||!(t=MM.exec(e))?"":t[1]},IM=function(e,t,i){return Dr(i,function(r){return Ya(e,t,r)})},Td=[].slice,Av=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==Un},NM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Pt(r)&&!t||Av(r,1)?(s=i).push.apply(s,Bn(r)):i.push(r)})||i},Bn=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Pt(e)&&!i&&(yd||!So())?Td.call((t||Bh).querySelectorAll(e),0):Wt(e)?NM(e,i):Av(e)?Td.call(e,0):e?[e]:[]},wd=function(e){return e=Bn(e)[0]||Cu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bn(t,i.querySelectorAll?i:i===e?Cu("Invalid scope")||Bh.createElement("div"):e)}},Rv=function(e){return e.sort(function(){return .5-Math.random()})},Cv=function(e){if(at(e))return e;var t=Ei(e)?e:{each:e},i=is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Pt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,v){var m=(v||t).length,_=o[m],f,g,x,S,M,E,w,P,y;if(!_){if(y=t.grid==="auto"?0:(t.grid||[1,zn])[1],!y){for(w=-zn;w<(w=v[y++].getBoundingClientRect().left)&&y<m;);y--}for(_=o[m]=[],f=l?Math.min(y,m)*c-.5:r%y,g=y===zn?0:l?m*d/y-.5:r/y|0,w=0,P=zn,E=0;E<m;E++)x=E%y-f,S=g-(E/y|0),_[E]=M=u?Math.abs(u==="y"?S:x):uv(x*x+S*S),M>w&&(w=M),M<P&&(P=M);r==="random"&&Rv(_),_.max=w-P,_.min=P,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:u?u==="y"?m/y:y:Math.max(y,m/y))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=Vt(t.amount||t.each)||0,i=i&&m<0?kv(i):i}return m=(_[h]-_.min)/_.max||0,Dt(_.b+(i?i(m):m)*_.v)+_.u}},Ad=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ji(i)?0:Vt(i))}},Pv=function(e,t){var i=Wt(e),r,s;return!i&&Ei(e)&&(r=i=e.radius||zn,e.values?(e=Bn(e.values),(s=!ji(e[0]))&&(r*=r)):e=Ad(e.increment)),Dr(t,i?at(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||ji(o)?c:c+Vt(o)}:Ad(e))},Lv=function(e,t,i,r){return Dr(Wt(e)?!t:i===!0?!!(i=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},FM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},OM=function(e,t){return function(i){return e(parseFloat(i))+(t||Vt(i))}},kM=function(e,t,i){return Dv(e,t,0,1,i)},bv=function(e,t,i){return Dr(i,function(r){return e[~~t(r)]})},zM=function n(e,t,i){var r=t-e;return Wt(e)?bv(e,n(0,e.length),t):Dr(i,function(s){return(r+(s-e)%r)%r+e})},BM=function n(e,t,i){var r=t-e,s=r*2;return Wt(e)?bv(e,n(0,e.length-1),t):Dr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ia=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?hv:xd),i+=e.substr(t,r-t)+Lv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Dv=function(e,t,i,r,s){var o=t-e,a=r-i;return Dr(s,function(l){return i+((l-e)/o*a||0)})},GM=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Pt(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(v){v*=d;var m=Math.min(h,~~v);return c[m](v-m)},i=t}else r||(e=ds(Wt(e)?[]:{},e));if(!c){for(l in t)Xh.call(a,e,l,"get",t[l]);s=function(v){return $h(v,a)||(o?e.p:e)}}}return Dr(i,s)},xm=function(e,t,i){var r=e.labels,s=zn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],o=pt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&yr.length&&Pu(),a&&(pt=a),c=l?s.apply(u,l):s.call(u),pt=o,c},Jo=function(e){return Ar(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&Gn(e,"onInterrupt"),e},Ks,Uv=[],Iv=function(e){if(!zh()){Uv.push(e);return}e=!e.name&&e.default||e;var t=e.name,i=at(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ua,render:$h,add:Xh,kill:iE,modifier:nE,rawVars:0},o={targetTest:0,get:0,getSetter:qh,aliases:{},register:0};if(So(),e!==r){if(Sn[t])return;Xn(r,Xn(Lu(e,s),o)),ds(r.prototype,ds(s,Lu(e,o))),Sn[r.prop=t]=r,e.targetTest&&(eu.push(r),Vh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_v(t,r),e.register&&e.register(mn,r,dn)},je=255,ea={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},zc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*je+.5|0},Nv=function(e,t,i){var r=e?ji(e)?[e>>16,e>>8&je,e&je]:0:ea.black,s,o,a,l,u,c,d,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])r=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&je,r&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(xd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=zc(l+1/3,s,o),r[1]=zc(l,s,o),r[2]=zc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(fv),i&&r.length<4&&(r[3]=1),r}else r=e.match(xd)||ea.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/je,o=r[1]/je,a=r[2]/je,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Fv=function(e){var t=[],i=[],r=-1;return e.split(Sr).forEach(function(s){var o=s.match($s)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ym=function(e,t,i){var r="",s=(e+r).match(Sr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=Nv(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Fv(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Sr,"1").split($s),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Sr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Sr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),VM=/hsl[a]?\(/,Ov=function(e){var t=e.join(" "),i;if(Sr.lastIndex=0,Sr.test(t))return i=VM.test(t),e[1]=ym(e[1],i),e[0]=ym(e[0],i,Fv(e[1])),!0},Na,Mn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,v=function m(_){var f=n()-r,g=_===!0,x,S,M,E;if(f>e&&(i+=f-t),r+=f,M=r-i,x=M-o,(x>0||g)&&(E=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,o+=x+(x>=s?4:s-x),S=1),g||(l=u(m)),S)for(p=0;p<a.length;p++)a[p](M,h,E,_)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){pv&&(!yd&&zh()&&(Un=yd=window,Bh=Un.document||{},Rn.gsap=mn,(Un.gsapVersions||(Un.gsapVersions=[])).push(mn.version),mv(Ru||Un.GreenSockGlobals||!Un.gsap&&Un||{}),c=Un.requestAnimationFrame,Uv.forEach(Iv)),l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},Na=1,v(2))},sleep:function(){(c?Un.cancelAnimationFrame:clearTimeout)(l),Na=0,u=Ua},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,f,g){var x=f?function(S,M,E,w){_(S,M,E,w),d.remove(x)}:_;return d.remove(_),a[g?"unshift":"push"](x),So(),x},remove:function(_,f){~(f=a.indexOf(_))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),So=function(){return!Na&&Mn.wake()},Ne={},HM=/^[\d.\-M][\d.\-,\s]/,WM=/["']/g,XM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(WM,"").trim():+u,r=l.substr(a+1).trim();return t},jM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},YM=function(e){var t=(e+"").split("("),i=Ne[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[XM(t[1])]:jM(e).split(",").map(yv)):Ne._CE&&HM.test(e)?Ne._CE("",e):i},kv=function(e){return function(t){return 1-e(1-t)}},zv=function n(e,t){for(var i=e._first,r;i;)i instanceof sn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},is=function(e,t){return e&&(at(e)?e:Ne[e]||YM(e))||t},gs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return fn(e,function(a){Ne[a]=Rn[a]=s,Ne[o=a.toLowerCase()]=i;for(var l in s)Ne[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ne[a+"."+l]=s[l]}),s},Bv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bc=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/vd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*SM((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Bv(a);return s=vd/s,l.config=function(u,c){return n(e,u,c)},l},Gc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Bv(i);return r.config=function(s){return n(e,s)},r};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;gs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;gs("Elastic",Bc("in"),Bc("out"),Bc());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});gs("Circ",function(n){return-(uv(1-n*n)-1)});gs("Sine",function(n){return n===1?1:-yM(n*vM)+1});gs("Back",Gc("in"),Gc("out"),Gc());Ne.SteppedEase=Ne.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ye;return function(a){return((r*Ya(0,o,a)|0)+s)*i}}};vo.ease=Ne["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Hh+=n+","+n+"Params,"});var Gv=function(e,t){this.id=xM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vv,this.set=t?t.getSetter:qh},Mo=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yo(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Na||Mn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,yo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(So(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tc(this,i),!s._dp||s.parent||Ev(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ye||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?xo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ye?0:this._rts,this.totalTime(Ya(-Math.abs(this._delay),this._tDur,r),!0),ec(this),CM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(So(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(cn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=TM);var r=Ht;return Ht=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ht=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,vm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Dn(this,i),cn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,cn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ye)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=at(i)?i:Sv,a=function(){var u=r.then;r.then=null,at(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Jo(this)},n}();Xn(Mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var sn=function(n){lv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=cn(i.sortChildren),tt&&mi(i.parent||tt,Ii(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Tv(Ii(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ha(0,arguments,this),this},t.from=function(r,s,o){return ha(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ha(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(r,s,Dn(this,o),1),this},t.call=function(r,s,o){return mi(this,vt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new vt(r,o,Dn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,da(o).immediateRender=cn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,da(a).immediateRender=cn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Dt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,v,m,_,f,g,x,S,M,E,w;if(this!==tt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=Dt(c%_),c===l?(m=this._repeat,h=u):(m=~~(c/_),m&&m===c/_&&(h=u,m--),h>u&&(h=u)),M=xo(this._tTime,_),!a&&this._tTime&&M!==m&&this._tTime-M*_-this._dur<=0&&(M=m),E&&m&1&&(h=u-h,w=1),m!==M&&!this._lock){var P=E&&M&1,y=P===(E&&m&1);if(m<M&&(P=!P),a=P?0:u,this._lock=1,this.render(a||(w?0:Dt(m*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;zv(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=DM(this,Dt(a),Dt(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=-Ye);break}}p=v}else{p=this._last;for(var A=r<0?r:h;p;){if(v=p._prev,(p._act||A<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||Ht&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=A?-Ye:Ye);break}}p=v}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-Ye)._zTime=h>=a?1:-1,this._ts))return this._start=S,ec(this),this.render(r,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ar(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Gn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ji(s)||(s=Dn(this,s,r)),!(r instanceof Mo)){if(Wt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Pt(r))return this.addLabel(r,s);if(at(r))r=vt.delayedCall(0,r);else return this}return this!==r?mi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof vt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Pt(r)?this.removeLabel(r):at(r)?this.killTweensOf(r):(Ju(this,r),r===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Mn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=vt.delayedCall(0,s||Ua,o);return a.data="isPause",this._hasPause=1,mi(this,a,Dn(this,r))},t.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&Ar(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bn(r),l=this._first,u=ji(s),c;l;)l instanceof vt?wM(l._targets,a)&&(u?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,v=vt.to(o,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ye,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==_&&yo(v,_,0,1).render(v._time,!0,!0),p=1}c&&c.apply(v,d||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Xn({startAt:{time:Dn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),xm(this,Dn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),xm(this,Dn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;yo(o,o===tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(tt._ts&&(xv(tt,bu(r,tt)),gv=Mn.frame),Mn.frame>=mm){mm+=wn.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&wn.autoSleep&&Mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mn.sleep()}}},e}(Mo);Xn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qM=function(e,t,i,r,s,o,a){var l=new dn(this._pt,e,t,0,1,Yv,null,s),u=0,c=0,d,h,p,v,m,_,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ia(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Oc)||[];d=Oc.exec(r);)v=d[0],m=r.substring(u,d.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),v!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:_,c:v.charAt(1)==="="?ro(_,v)-_:parseFloat(v)-_,m:p&&p<4?Math.round:0},u=Oc.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(dv.test(r)||f)&&(l.e=0),this._pt=l,l},Xh=function(e,t,i,r,s,o,a,l,u,c){at(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:at(d)?u?e[t.indexOf("set")||!at(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=at(d)?u?JM:Xv:Yh,v;if(Pt(r)&&(~r.indexOf("random(")&&(r=Ia(r)),r.charAt(1)==="="&&(v=ro(h,r)+(Vt(h)||0),(v||v===0)&&(r=v))),!c||h!==r||Rd)return!isNaN(h*r)&&r!==""?(v=new dn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?tE:jv,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Gh(t,r),qM.call(this,e,t,h,r,p,l||wn.stringFilter,u))},$M=function(e,t,i,r,s){if(at(e)&&(e=pa(e,s,t,i,r)),!Ei(e)||e.style&&e.nodeType||Wt(e)||cv(e))return Pt(e)?pa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,i,r);return o},Vv=function(e,t,i,r,s,o){var a,l,u,c;if(Sn[e]&&(a=new Sn[e]).init(s,a.rawVars?t[e]:$M(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new dn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ks))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ur,Rd,jh=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,v=r.keyframes,m=r.autoRevert,_=e._dur,f=e._startAt,g=e._targets,x=e.parent,S=x&&x.data==="nested"?x.vars.targets:g,M=e._overwrite==="auto"&&!Oh,E=e.timeline,w,P,y,A,B,V,U,F,k,Z,H,L,G;if(E&&(!v||!s)&&(s="none"),e._ease=is(s,vo.ease),e._yEase=p?kv(is(p===!0?s:p,vo.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||v&&!r.stagger){if(F=g[0]?ts(g[0]).harness:0,L=F&&r[F.prop],w=Lu(r,Vh),f&&(f._zTime<0&&f.progress(1),t<0&&h&&a&&!m?f.render(-1,!0):f.revert(h&&_?Jl:EM),f._lazy=0),o){if(Ar(e._startAt=vt.set(g,Xn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&cn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!a&&!m)&&e._startAt.revert(Jl),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!f){if(t&&(a=!1),y=Xn({overwrite:!1,data:"isFromStart",lazy:a&&!f&&cn(l),immediateRender:a,stagger:0,parent:x},w),L&&(y[F.prop]=L),Ar(e._startAt=vt.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(Jl):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&cn(l)||l&&!_,P=0;P<g.length;P++){if(B=g[P],U=B._gsap||Wh(g)[P]._gsap,e._ptLookup[P]=Z={},Sd[U.id]&&yr.length&&Pu(),H=S===g?P:S.indexOf(B),F&&(k=new F).init(B,L||w,e,H,S)!==!1&&(e._pt=A=new dn(e._pt,B,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(O){Z[O]=A}),k.priority&&(V=1)),!F||L)for(y in w)Sn[y]&&(k=Vv(y,w,e,H,B,S))?k.priority&&(V=1):Z[y]=A=Xh.call(e,B,y,"get",w[y],H,S,0,r.stringFilter);e._op&&e._op[P]&&e.kill(B,e._op[P]),M&&e._pt&&(ur=e,tt.killTweensOf(B,Z,e.globalTime(t)),G=!e.parent,ur=0),e._pt&&l&&(Sd[U.id]=1)}V&&qv(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!G,v&&t<=0&&E.render(zn,!0,!0)},KM=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Rd=1,e.vars[t]="+=0",jh(e,a),Rd=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=ct(i)+Vt(c.e)),c.b&&(c.b=u.s+Vt(c.b))},ZM=function(e,t){var i=e[0]?ts(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ds({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},QM=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Wt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,i,r,s){return at(e)?e.call(t,i,r,s):Pt(e)&&~e.indexOf("random(")?Ia(e):e},Hv=Hh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wv={};fn(Hv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Wv[n]=1});var vt=function(n){lv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:da(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,m=l.defaults,_=l.scrollTrigger,f=l.yoyoEase,g=r.parent||tt,x=(Wt(i)||cv(i)?ji(i[0]):"length"in r)?[i]:Bn(i),S,M,E,w,P,y,A,B;if(a._targets=x.length?Wh(x):Cu("GSAP target "+i+" not found. https://greensock.com",!wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||h||gl(u)||gl(c)){if(r=a.vars,S=a.timeline=new sn({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:x}),S.kill(),S.parent=S._dp=Ii(a),S._start=0,h||gl(u)||gl(c)){if(w=x.length,A=h&&Cv(h),Ei(h))for(P in h)~Hv.indexOf(P)&&(B||(B={}),B[P]=h[P]);for(M=0;M<w;M++)E=Lu(r,Wv),E.stagger=0,f&&(E.yoyoEase=f),B&&ds(E,B),y=x[M],E.duration=+pa(u,Ii(a),M,y,x),E.delay=(+pa(c,Ii(a),M,y,x)||0)-a._delay,!h&&w===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),S.to(y,E,A?A(M,y,x):0),S._ease=Ne.none;S.duration()?u=c=0:a.timeline=0}else if(v){da(Xn(S.vars.defaults,{ease:"none"})),S._ease=is(v.ease||r.ease||"none");var V=0,U,F,k;if(Wt(v))v.forEach(function(Z){return S.to(x,Z,">")}),S.duration();else{E={};for(P in v)P==="ease"||P==="easeEach"||QM(P,v[P],E,v.easeEach);for(P in E)for(U=E[P].sort(function(Z,H){return Z.t-H.t}),V=0,M=0;M<U.length;M++)F=U[M],k={ease:F.e,duration:(F.t-(M?U[M-1].t:0))/100*u},k[P]=F.v,S.to(x,k,V),V+=k.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!Oh&&(ur=Ii(a),tt.killTweensOf(x),ur=0),mi(g,Ii(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!v&&a._start===Dt(g._time)&&cn(d)&&PM(Ii(a))&&g.data!=="nested")&&(a._tTime=-Ye,a.render(Math.max(0,-c)||0)),_&&Tv(Ii(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Ye&&!c?l:r<Ye?0:r,h,p,v,m,_,f,g,x,S;if(!u)bM(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Dt(d%m),d===l?(v=this._repeat,h=u):(v=~~(d/m),v&&v===d/m&&(h=u,v--),h>u&&(h=u)),f=this._yoyo&&v&1,f&&(S=this._yEase,h=u-h),_=xo(this._tTime,m),h===a&&!o&&this._initted)return this._tTime=d,this;v!==_&&(x&&this._yEase&&zv(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(Dt(m*v),!0).invalidate()._lock=0))}if(!this._initted){if(wv(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(S||this._ease)(h/u),this._from&&(this.ratio=g=1-g),h&&!a&&!s&&!v&&(Gn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:!h&&f?-Ye:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Md(this,r,s,o),Gn(this,"onUpdate")),this._repeat&&v!==_&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Md(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ar(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Gn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Na||Mn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jh(this,l),u=this._ease(l/this._dur),KM(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(tc(this,0),this.parent||Mv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ur&&ur.vars.overwrite!==!0)._first||Jo(this),this.parent&&o!==this.timeline.totalDuration()&&yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bn(r):a,u=this._ptLookup,c=this._pt,d,h,p,v,m,_,f;if((!s||s==="all")&&RM(a,l))return s==="all"&&(this._pt=0),Jo(this);for(d=this._op=this._op||[],s!=="all"&&(Pt(s)&&(m={},fn(s,function(g){return m[g]=1}),s=m),s=ZM(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,v=h,p={}):(p=d[f]=d[f]||{},v=s);for(m in v)_=h&&h[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Ju(this,_,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Jo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ha(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ha(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return tt.killTweensOf(r,s,o)},e}(Mo);Xn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(n){vt[n]=function(){var e=new sn,t=Td.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Yh=function(e,t,i){return e[t]=i},Xv=function(e,t,i){return e[t](i)},JM=function(e,t,i,r){return e[t](r.fp,i)},eE=function(e,t,i){return e.setAttribute(t,i)},qh=function(e,t){return at(e[t])?Xv:kh(e[t])&&e.setAttribute?eE:Yh},jv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yv=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},$h=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},nE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},iE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ju(this,t,"_pt"):t.dep||(i=1),t=r;return!i},rE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},qv=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},dn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||jv,this.d=l||this,this.set=u||Yh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=rE,this.m=i,this.mt=s,this.tween=r},n}();fn(Hh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Vh[n]=1});Rn.TweenMax=Rn.TweenLite=vt;Rn.TimelineLite=Rn.TimelineMax=sn;tt=new sn({sortChildren:!1,defaults:vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=Ov;var Eo=[],tu={},sE=[],Sm=0,Vc=function(e){return(tu[e]||sE).map(function(t){return t()})},Cd=function(){var e=Date.now(),t=[];e-Sm>2&&(Vc("matchMediaInit"),Eo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Un.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Vc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),Sm=e,Vc("matchMedia"))},$v=function(){function n(t,i){this.selector=i&&wd(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){at(i)&&(s=r,r=i,i=at);var o=this,a=function(){var u=pt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=wd(s)),pt=o,d=r.apply(o,arguments),at(d)&&o._r.push(d),pt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===at?a(o):i?o[i]=a:a},e.ignore=function(i){var r=pt;pt=null,i(this),pt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Mo)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=Eo.indexOf(this);~a&&Eo.splice(a,1)}},e.revert=function(i){this.kill(i||{})},n}(),oE=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ei(i)||(i={matches:i});var o=new $v(0,s||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Un.matchMedia(i[u]),l&&(Eo.indexOf(o)<0&&Eo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Cd):l.addEventListener("change",Cd)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Du={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Iv(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Pt(e)&&(e=Bn(e)[0]);var s=ts(e||{}).get,o=i?Sv:yv;return i==="native"&&(i=""),e&&(t?o((Sn[t]&&Sn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Sn[a]&&Sn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bn(e),e.length>1){var r=e.map(function(c){return mn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Sn[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ks._pt=0,d.init(e,i?c+i:c,Ks,0,[e]),d.render(1,d),Ks._pt&&$h(1,Ks)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=mn.to(e,ds((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,vo.ease)),_m(vo,e||{})},config:function(e){return _m(wn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Rn[a]&&Cu(t+" effect requires "+a+" plugin.")}),kc[t]=function(a,l,u){return i(Bn(a),Xn(l||{},s),u)},o&&(sn.prototype[t]=function(a,l,u){return this.add(kc[t](a,Ei(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ne[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):Ne},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new sn(e),r,s;for(i.smoothChildTiming=cn(e.smoothChildTiming),tt.remove(i),i._dp=0,i._time=i._tTime=tt._time,r=tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof vt&&r.vars.onComplete===r._targets[0]))&&mi(i,r,r._start-r._delay),r=s;return mi(tt,i,0),i},context:function(e,t){return e?new $v(e,t):pt},matchMedia:function(e){return new oE(e)},matchMediaRefresh:function(){return Eo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Cd()},addEventListener:function(e,t){var i=tu[e]||(tu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=tu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:zM,wrapYoyo:BM,distribute:Cv,random:Lv,snap:Pv,normalize:kM,getUnit:Vt,clamp:IM,splitColor:Nv,toArray:Bn,selector:wd,mapRange:Dv,pipe:FM,unitize:OM,interpolate:GM,shuffle:Rv},install:mv,effects:kc,ticker:Mn,updateRoot:sn.updateRoot,plugins:Sn,globalTimeline:tt,core:{PropTween:dn,globals:_v,Tween:vt,Timeline:sn,Animation:Mo,getCache:ts,_removeLinkedListItem:Ju,reverting:function(){return Ht},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Oh=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Du[n]=vt[n]});Mn.add(sn.updateRoot);Ks=Du.to({},{duration:0});var aE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},lE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=aE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Hc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Pt(s)&&(l={},fn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}lE(a,s)}}}},mn=Du.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ht?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Hc("roundProps",Ad),Hc("modifiers"),Hc("snap",Pv))||Du;vt.version=sn.version=mn.version="3.11.5";pv=1;zh()&&So();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mm,cr,so,Kh,Kr,Em,Zh,uE=function(){return typeof window<"u"},Yi={},Hr=180/Math.PI,oo=Math.PI/180,xs=Math.atan2,Tm=1e8,Qh=/([A-Z])/g,cE=/(left|right|width|margin|padding|x)/i,fE=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Kv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mE=function(e,t,i){return e.style[t]=i},_E=function(e,t,i){return e.style.setProperty(t,i)},gE=function(e,t,i){return e._gsap[t]=i},vE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},xE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},yE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},nt="transform",oi=nt+"Origin",SE=function n(e,t){var i=this,r=this.target,s=r.style;if(e in Yi){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Fi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Fi(r,e);else return _i.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(nt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},Qv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ME=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zh(),(!s||!s.isStart)&&!i[nt]&&(Qv(i),r.uncache=1)}},Jv=function(e,t){var i={target:e,props:[],revert:ME,save:SE};return e._gsap||mn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},ex,Ld=function(e,t){var i=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return i.style?i:cr.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qh,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,To(t)||t,1)||""},wm="O,Moz,ms,Ms,Webkit".split(","),To=function(e,t,i){var r=t||Kr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wm[o]:"")+e},bd=function(){uE()&&window.document&&(Mm=window,cr=Mm.document,so=cr.documentElement,Kr=Ld("div")||{style:{}},Ld("div"),nt=To(nt),oi=nt+"Origin",Kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ex=!!To("perspective"),Zh=mn.core.reverting,Kh=1)},Wc=function n(e){var t=Ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(so.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),so.removeChild(t),this.style.cssText=s,o},Am=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},tx=function(e){var t;try{t=e.getBBox()}catch{t=Wc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wc||(t=Wc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Am(e,["x","cx","x1"])||0,y:+Am(e,["y","cy","y1"])||0,width:0,height:0}:t},nx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tx(e))},Fa=function(e,t){if(t){var i=e.style;t in Yi&&t!==oi&&(t=nt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Qh,"-$1").toLowerCase())):i.removeAttribute(t)}},fr=function(e,t,i,r,s,o){var a=new dn(e._pt,t,i,0,1,o?Zv:Kv);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Rm={deg:1,rad:1,turn:1},EE={grid:1,flex:1},Rr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Kr.style,l=cE.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",v,m,_,f;return r===o||!s||Rm[r]||Rm[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&nx(e),(p||o==="%")&&(Yi[t]||~t.indexOf("adius"))?(v=f?e.getBBox()[l?"width":"height"]:e[c],ct(p?s/v*d:s/100*v)):(a[l?"width":"height"]=d+(h?o:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===cr||!m.appendChild)&&(m=cr.body),_=m._gsap,_&&p&&_.width&&l&&_.time===Mn.time&&!_.uncache?ct(s/_.width*d):((p||o==="%")&&!EE[yi(m,"display")]&&(a.position=yi(e,"position")),m===e&&(a.position="static"),m.appendChild(Kr),v=Kr[c],m.removeChild(Kr),a.position="absolute",l&&p&&(_=ts(m),_.time=Mn.time,_.width=m[c]),ct(h?v*s/d:v&&s?d/v*s:0))))},Fi=function(e,t,i,r){var s;return Kh||bd(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=ka(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Iu(yi(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Uu[t]&&Uu[t](e,t,i)||yi(e,t)||vv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Rr(e,t,s,i)+i:s},TE=function(e,t,i,r){if(!i||i==="none"){var s=To(t,e,1),o=s&&yi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var a=new dn(this._pt,e.style,t,0,1,Yv),l=0,u=0,c,d,h,p,v,m,_,f,g,x,S,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=yi(e,t)||r,e.style[t]=i),c=[i,r],Ov(c),i=c[0],r=c[1],h=i.match($s)||[],M=r.match($s)||[],M.length){for(;d=$s.exec(r);)_=d[0],g=r.substring(l,d.index),v?v=(v+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(v=1),_!==(m=h[u++]||"")&&(p=parseFloat(m)||0,S=m.substr((p+"").length),_.charAt(1)==="="&&(_=ro(p,_)+S),f=parseFloat(_),x=_.substr((f+"").length),l=$s.lastIndex-x.length,x||(x=x||wn.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Rr(e,t,m,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:f-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Zv:Kv;return dv.test(r)&&(a.e=0),this._pt=a,a},Cm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Cm[i]||i,t[1]=Cm[r]||r,t.join(" ")},AE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Yi[a]&&(l=1,a=a==="transformOrigin"?oi:nt),Fa(i,a);l&&(Fa(i,nt),o&&(o.svg&&i.removeAttribute("transform"),ka(i,1),o.uncache=1,Qv(r)))}},Uu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new dn(e._pt,t,i,0,0,AE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Oa=[1,0,0,1,0,0],ix={},rx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pm=function(e){var t=yi(e,nt);return rx(t)?Oa:t.substr(7).match(fv).map(ct)},Jh=function(e,t){var i=e._gsap||ts(e),r=e.style,s=Pm(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oa:s):(s===Oa&&!e.offsetParent&&e!==so&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,so.appendChild(e)),s=Pm(e),l?r.display=l:Fa(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):so.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Jh(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],v=l[1],m=l[2],_=l[3],f=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,w,P,y;i?l!==Oa&&(w=p*_-v*m)&&(P=S*(_/w)+M*(-m/w)+(m*g-_*f)/w,y=S*(-v/w)+M*(p/w)-(p*g-v*f)/w,S=P,M=y):(E=tx(e),S=E.x+(~x[0].indexOf("%")?S/100*E.width:S),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),r||r!==!1&&a.smooth?(f=S-u,g=M-c,a.xOffset=d+(f*p+g*m)-f,a.yOffset=h+(f*v+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[oi]="0px 0px",o&&(fr(o,a,"xOrigin",u,S),fr(o,a,"yOrigin",c,M),fr(o,a,"xOffset",d,a.xOffset),fr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},ka=function(e,t){var i=e._gsap||new Gv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yi(e,oi)||"0",c,d,h,p,v,m,_,f,g,x,S,M,E,w,P,y,A,B,V,U,F,k,Z,H,L,G,O,re,Q,W,q,ie;return c=d=h=m=_=f=g=x=S=0,p=v=1,i.svg=!!(e.getCTM&&nx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),r.scale=r.rotate=r.translate="none"),w=Jh(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Dd(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,E=i.yOrigin||0,w!==Oa&&(B=w[0],V=w[1],U=w[2],F=w[3],c=k=w[4],d=Z=w[5],w.length===6?(p=Math.sqrt(B*B+V*V),v=Math.sqrt(F*F+U*U),m=B||V?xs(V,B)*Hr:0,g=U||F?xs(U,F)*Hr+m:0,g&&(v*=Math.abs(Math.cos(g*oo))),i.svg&&(c-=M-(M*B+E*U),d-=E-(M*V+E*F))):(ie=w[6],W=w[7],O=w[8],re=w[9],Q=w[10],q=w[11],c=w[12],d=w[13],h=w[14],P=xs(ie,Q),_=P*Hr,P&&(y=Math.cos(-P),A=Math.sin(-P),H=k*y+O*A,L=Z*y+re*A,G=ie*y+Q*A,O=k*-A+O*y,re=Z*-A+re*y,Q=ie*-A+Q*y,q=W*-A+q*y,k=H,Z=L,ie=G),P=xs(-U,Q),f=P*Hr,P&&(y=Math.cos(-P),A=Math.sin(-P),H=B*y-O*A,L=V*y-re*A,G=U*y-Q*A,q=F*A+q*y,B=H,V=L,U=G),P=xs(V,B),m=P*Hr,P&&(y=Math.cos(P),A=Math.sin(P),H=B*y+V*A,L=k*y+Z*A,V=V*y-B*A,Z=Z*y-k*A,B=H,k=L),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,f=180-f),p=ct(Math.sqrt(B*B+V*V+U*U)),v=ct(Math.sqrt(Z*Z+ie*ie)),P=xs(k,Z),g=Math.abs(P)>2e-4?P*Hr:0,S=q?1/(q<0?-q:q):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!rx(yi(e,nt)),H&&e.setAttribute("transform",H))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=ct(p),i.scaleY=ct(v),i.rotation=ct(m)+a,i.rotationX=ct(_)+a,i.rotationY=ct(f)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[oi]=Iu(u)),i.xOffset=i.yOffset=0,i.force3D=wn.force3D,i.renderTransform=i.svg?CE:ex?sx:RE,i.uncache=0,i},Iu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xc=function(e,t,i){var r=Vt(t);return ct(parseFloat(t)+parseFloat(Rr(e,"x",i+"px",r)))+r},RE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sx(e,t)},Fr="0deg",Wo="0px",Or=") ",sx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,m=i.scaleY,_=i.transformPerspective,f=i.force3D,g=i.target,x=i.zOrigin,S="",M=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==Fr||c!==Fr)){var E=parseFloat(c)*oo,w=Math.sin(E),P=Math.cos(E),y;E=parseFloat(d)*oo,y=Math.cos(E),o=Xc(g,o,w*y*-x),a=Xc(g,a,-Math.sin(E)*-x),l=Xc(g,l,P*y*-x+x)}_!==Wo&&(S+="perspective("+_+Or),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||o!==Wo||a!==Wo||l!==Wo)&&(S+=l!==Wo||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Or),u!==Fr&&(S+="rotate("+u+Or),c!==Fr&&(S+="rotateY("+c+Or),d!==Fr&&(S+="rotateX("+d+Or),(h!==Fr||p!==Fr)&&(S+="skew("+h+", "+p+Or),(v!==1||m!==1)&&(S+="scale("+v+", "+m+Or),g.style[nt]=S||"translate(0, 0)"},CE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,m=i.yOrigin,_=i.xOffset,f=i.yOffset,g=i.forceCSS,x=parseFloat(o),S=parseFloat(a),M,E,w,P,y;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=oo,u*=oo,M=Math.cos(l)*d,E=Math.sin(l)*d,w=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=oo,y=Math.tan(u-c),y=Math.sqrt(1+y*y),w*=y,P*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),M*=y,E*=y)),M=ct(M),E=ct(E),w=ct(w),P=ct(P)):(M=d,P=h,E=w=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Rr(p,"x",o,"px"),S=Rr(p,"y",a,"px")),(v||m||_||f)&&(x=ct(x+v-(v*M+m*w)+_),S=ct(S+m-(v*E+m*P)+f)),(r||s)&&(y=p.getBBox(),x=ct(x+r/100*y.width),S=ct(S+s/100*y.height)),y="matrix("+M+","+E+","+w+","+P+","+x+","+S+")",p.setAttribute("transform",y),g&&(p.style[nt]=y)},PE=function(e,t,i,r,s){var o=360,a=Pt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Tm)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Tm)%o-~~(u/o)*o)),e._pt=h=new dn(e._pt,t,i,r,u,dE),h.e=c,h.u="deg",e._props.push(i),h},Lm=function(e,t){for(var i in t)e[i]=t[i];return e},LE=function(e,t,i){var r=Lm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[nt]=t,a=ka(i,1),Fa(i,nt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[nt],o[nt]=t,a=ka(i,1),o[nt]=u);for(l in Yi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Vt(u),v=Vt(c),d=p!==v?Rr(i,l,u,v):parseFloat(u),h=parseFloat(c),e._pt=new dn(e._pt,a,l,d,h-d,Pd),e._pt.u=v||0,e._props.push(l));Lm(a,r)};fn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Uu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(v){return Fi(a,v,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(v,m){return p[v]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,d)}});var ox={name:"css",register:bd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,v,m,_,f,g,x,S,M,E,w,P;Kh||bd(),this.styles=this.styles||Jv(e),P=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Sn[m]&&Vv(m,t,i,r,e,s)))){if(p=typeof c,v=Uu[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ia(c)),v)v(this,e,m,c,i)&&(w=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Sr.lastIndex=0,Sr.test(u)||(_=Vt(u),f=Vt(c)),f?_!==f&&(u=Rr(e,m,u,f)+f):_&&(c+=_),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),P.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Pt(u)&&~u.indexOf("random(")&&(u=Ia(u)),Vt(u+"")||(u+=wn.units[m]||Vt(Fi(e,m))||""),(u+"").charAt(1)==="="&&(u=Fi(e,m))):u=Fi(e,m),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),m in _i&&(m==="autoAlpha"&&(h===1&&Fi(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),fr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=_i[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Yi,x){if(this.styles.save(m),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||ka(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new dn(this._pt,a,nt,0,1,M.renderTransform,M,0,-1),S.dep=1),m==="scale")this._pt=new dn(this._pt,M,"scaleY",M.scaleY,(g?ro(M.scaleY,g+d):d)-M.scaleY||0,Pd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(oi,0,a[oi]),c=wE(c),M.svg?Dd(e,c,0,E,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==M.zOrigin&&fr(this,M,"zOrigin",M.zOrigin,f),fr(this,a,m,Iu(u),Iu(c)));continue}else if(m==="svgOrigin"){Dd(e,c,1,E,0,this);continue}else if(m in ix){PE(this,M,m,h,g?ro(h,g+c):c);continue}else if(m==="smoothOrigin"){fr(this,M,"smooth",M.smooth,c);continue}else if(m==="force3D"){M[m]=c;continue}else if(m==="transform"){LE(this,c,e);continue}}else m in a||(m=To(m)||m);if(x||(d||d===0)&&(h||h===0)&&!fE.test(c)&&m in a)_=(u+"").substr((h+"").length),d||(d=0),f=Vt(c)||(m in wn.units?wn.units[m]:_),_!==f&&(h=Rr(e,m,u,f)),this._pt=new dn(this._pt,x?M:a,m,h,(g?ro(h,g+d):d)-h,!x&&(f==="px"||m==="zIndex")&&t.autoRound!==!1?pE:Pd),this._pt.u=f||0,_!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=hE);else if(m in a)TE.call(this,e,m,u,g?g+c:c);else if(m in e)this.add(e,m,u||e[m],g?g+c:c,r,s);else if(m!=="parseTransform"){Gh(m,c);continue}x||(m in a?P.push(m,0,a[m]):P.push(m,1,u||e[m])),o.push(m)}}w&&qv(this)},render:function(e,t){if(t.tween._time||!Zh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Fi,aliases:_i,getSetter:function(e,t,i){var r=_i[t];return r&&r.indexOf(",")<0&&(t=r),t in Yi&&t!==oi&&(e._gsap.x||Fi(e,"x"))?i&&Em===i?t==="scale"?vE:gE:(Em=i||{})&&(t==="scale"?xE:yE):e.style&&!kh(e.style[t])?mE:~t.indexOf("-")?_E:qh(e,t)},core:{_removeProperty:Fa,_getMatrix:Jh}};mn.utils.checkPrefix=To;mn.core.getStyleSaver=Jv;(function(n,e,t,i){var r=fn(n+","+e+","+t,function(s){Yi[s]=1});fn(e,function(s){wn.units[s]="deg",ix[s]=1}),_i[r[13]]=n+","+e,fn(i,function(s){var o=s.split(":");_i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wn.units[n]="px"});mn.registerPlugin(ox);var ax=mn.registerPlugin(ox)||mn;ax.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="152",bE=0,bm=1,DE=2,lx=1,UE=2,Di=3,Cr=0,Qt=1,Oi=2,Mr=0,ao=1,Ud=2,Dm=3,Um=4,IE=5,Fs=100,NE=101,FE=102,Im=103,Nm=104,OE=200,kE=201,zE=202,BE=203,ux=204,cx=205,GE=206,VE=207,HE=208,WE=209,XE=210,jE=0,YE=1,qE=2,Id=3,$E=4,KE=5,ZE=6,QE=7,fx=0,JE=1,e1=2,Gi=0,t1=1,n1=2,i1=3,r1=4,s1=5,dx=300,wo=301,Ao=302,Nd=303,Fd=304,nc=306,Od=1e3,ni=1001,kd=1002,Kt=1003,Fm=1004,jc=1005,Fn=1006,o1=1007,za=1008,hs=1009,a1=1010,l1=1011,hx=1012,u1=1013,Zr=1014,Qr=1015,Ba=1016,c1=1017,f1=1018,lo=1020,d1=1021,ii=1023,h1=1024,p1=1025,rs=1026,Ro=1027,m1=1028,_1=1029,g1=1030,v1=1031,x1=1033,Yc=33776,qc=33777,$c=33778,Kc=33779,Om=35840,km=35841,zm=35842,Bm=35843,y1=36196,Gm=37492,Vm=37496,Hm=37808,Wm=37809,Xm=37810,jm=37811,Ym=37812,qm=37813,$m=37814,Km=37815,Zm=37816,Qm=37817,Jm=37818,e_=37819,t_=37820,n_=37821,Zc=36492,S1=36283,i_=36284,r_=36285,s_=36286,px=3e3,ss=3001,M1=3200,E1=3201,T1=0,w1=1,os="",Ae="srgb",Ti="srgb-linear",mx="display-p3",Qc=7680,A1=519,o_=35044,a_="300 es",zd=1035;class Uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,Bd=180/Math.PI;function qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function R1(n,e){return(n%e+e)%e}function ef(n,e,t){return(1-t)*n+t*e}function l_(n){return(n&n-1)===0&&n!==0}function C1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],m=r[0],_=r[3],f=r[6],g=r[1],x=r[4],S=r[7],M=r[2],E=r[5],w=r[8];return s[0]=o*m+a*g+l*M,s[3]=o*_+a*x+l*E,s[6]=o*f+a*S+l*w,s[1]=u*m+c*g+d*M,s[4]=u*_+c*x+d*E,s[7]=u*f+c*S+d*w,s[2]=h*m+p*g+v*M,s[5]=h*_+p*x+v*E,s[8]=h*f+p*S+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tf=new Ie;function _x(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const u_={};function ma(n){n in u_||(u_[n]=!0,console.warn(n))}function uo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const P1=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),L1=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function b1(n){return n.convertSRGBToLinear().applyMatrix3(L1)}function D1(n){return n.applyMatrix3(P1).convertLinearToSRGB()}const U1={[Ti]:n=>n,[Ae]:n=>n.convertSRGBToLinear(),[mx]:b1},I1={[Ti]:n=>n,[Ae]:n=>n.convertLinearToSRGB(),[mx]:D1},qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ti},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=U1[e],r=I1[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ys;class gx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Ga("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=uo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(uo(t[i]/255)*255):t[i]=uo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vx{constructor(e=null){this.isSource=!0,this.uuid=qa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rf(r[o].image)):s.push(rf(r[o]))}else s=rf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function rf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N1=0;class hn extends Uo{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=ni,r=ni,s=Fn,o=za,a=ii,l=hs,u=hn.DEFAULT_ANISOTROPY,c=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=qa(),this.name="",this.source=new vx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ss?Ae:os),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?ss:px}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?Ae:os}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=dx;hn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],m=l[2],_=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-m)<.01&&Math.abs(v-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+m)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,M=(f+1)/2,E=(c+h)/4,w=(d+m)/4,P=(v+_)/4;return x>S&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=w/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=P/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=w/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-v)*(_-v)+(d-m)*(d-m)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(_-v)/g,this.y=(d-m)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ps extends Uo{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ss?Ae:os),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Fn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xx extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F1 extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(d!==m||l!==h||u!==p||c!==v){let _=1-a;const f=l*h+u*p+c*v+d*m,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,f*g);_=Math.sin(_*E)/M,a=Math.sin(a*E)/M}const S=a*g;if(l=l*_+h*S,u=u*_+p*S,c=c*_+v*S,d=d*_+m*S,_===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*d+l*p-u*h,e[t+1]=l*v+c*h+u*d-a*p,e[t+2]=u*v+c*p+a*h-l*d,e[t+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(c_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(c_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new z,c_=new $a;class Ka{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Ri.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else r.boundingBox===null&&r.computeBoundingBox(),Ss.copy(r.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),xl.subVectors(this.max,Xo),Ms.subVectors(e.a,Xo),Es.subVectors(e.b,Xo),Ts.subVectors(e.c,Xo),Qi.subVectors(Es,Ms),Ji.subVectors(Ts,Es),kr.subVectors(Ms,Ts);let t=[0,-Qi.z,Qi.y,0,-Ji.z,Ji.y,0,-kr.z,kr.y,Qi.z,0,-Qi.x,Ji.z,0,-Ji.x,kr.z,0,-kr.x,-Qi.y,Qi.x,0,-Ji.y,Ji.x,0,-kr.y,kr.x,0];return!of(t,Ms,Es,Ts,xl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,Ms,Es,Ts,xl))?!1:(yl.crossVectors(Qi,Ji),t=[yl.x,yl.y,yl.z],of(t,Ms,Es,Ts,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new z,new z,new z,new z,new z,new z,new z,new z],Ri=new z,Ss=new Ka,Ms=new z,Es=new z,Ts=new z,Qi=new z,Ji=new z,kr=new z,Xo=new z,xl=new z,yl=new z,zr=new z;function of(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zr.fromArray(n,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=t.dot(zr),c=i.dot(zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const O1=new Ka,jo=new z,af=new z;class ic{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):O1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(af)),this.expandByPoint(jo.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new z,lf=new z,Sl=new z,er=new z,uf=new z,Ml=new z,cf=new z;class yx{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lf.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(lf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=er.dot(this.direction),l=-er.dot(Sl),u=er.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const m=1/c;d*=m,h*=m,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lf).addScaledVector(Sl,h),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){uf.subVectors(t,e),Ml.subVectors(i,e),cf.crossVectors(uf,Ml);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Ml.crossVectors(er,Ml));if(l<0)return null;const u=a*this.direction.dot(uf.cross(er));if(u<0||l+u>o)return null;const c=-a*er.dot(cf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,m,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=m,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+v*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h+m*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,m=u*d;t[0]=h-m*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,m=a*d;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+m,t[1]=l*d,t[5]=m*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=m-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+v,t[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,m=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+m,t[5]=o*c,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*c,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k1,e,z1)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),tr.crossVectors(i,vn),tr.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),tr.crossVectors(i,vn)),tr.normalize(),El.crossVectors(vn,tr),r[0]=tr.x,r[4]=El.x,r[8]=vn.x,r[1]=tr.y,r[5]=El.y,r[9]=vn.y,r[2]=tr.z,r[6]=El.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],m=i[6],_=i[10],f=i[14],g=i[3],x=i[7],S=i[11],M=i[15],E=r[0],w=r[4],P=r[8],y=r[12],A=r[1],B=r[5],V=r[9],U=r[13],F=r[2],k=r[6],Z=r[10],H=r[14],L=r[3],G=r[7],O=r[11],re=r[15];return s[0]=o*E+a*A+l*F+u*L,s[4]=o*w+a*B+l*k+u*G,s[8]=o*P+a*V+l*Z+u*O,s[12]=o*y+a*U+l*H+u*re,s[1]=c*E+d*A+h*F+p*L,s[5]=c*w+d*B+h*k+p*G,s[9]=c*P+d*V+h*Z+p*O,s[13]=c*y+d*U+h*H+p*re,s[2]=v*E+m*A+_*F+f*L,s[6]=v*w+m*B+_*k+f*G,s[10]=v*P+m*V+_*Z+f*O,s[14]=v*y+m*U+_*H+f*re,s[3]=g*E+x*A+S*F+M*L,s[7]=g*w+x*B+S*k+M*G,s[11]=g*P+x*V+S*Z+M*O,s[15]=g*y+x*U+S*H+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],m=e[7],_=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+_*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],m=e[13],_=e[14],f=e[15],g=d*_*u-m*h*u+m*l*p-a*_*p-d*l*f+a*h*f,x=v*h*u-c*_*u-v*l*p+o*_*p+c*l*f-o*h*f,S=c*m*u-v*d*u+v*a*p-o*m*p-c*a*f+o*d*f,M=v*d*l-c*m*l-v*a*h+o*m*h+c*a*_-o*d*_,E=t*g+i*x+r*S+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(m*h*s-d*_*s-m*r*p+i*_*p+d*r*f-i*h*f)*w,e[2]=(a*_*s-m*l*s+m*r*u-i*_*u-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(c*_*s-v*h*s+v*r*p-t*_*p-c*r*f+t*h*f)*w,e[6]=(v*l*s-o*_*s-v*r*u+t*_*u+o*r*f-t*l*f)*w,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*w,e[8]=S*w,e[9]=(v*d*s-c*m*s-v*i*p+t*m*p+c*i*f-t*d*f)*w,e[10]=(o*m*s-v*a*s+v*i*u-t*m*u-o*i*f+t*a*f)*w,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*w,e[12]=M*w,e[13]=(c*m*r-v*d*r+v*i*h-t*m*h-c*i*_+t*d*_)*w,e[14]=(v*a*r-o*m*r-v*i*l+t*m*l+o*i*_-t*a*_)*w,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,m=o*c,_=o*d,f=a*d,g=l*u,x=l*c,S=l*d,M=i.x,E=i.y,w=i.z;return r[0]=(1-(m+f))*M,r[1]=(p+S)*M,r[2]=(v-x)*M,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(h+f))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(v+x)*w,r[9]=(_-g)*w,r[10]=(1-(h+m))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,c=1/o,d=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=c,$n.elements[5]*=c,$n.elements[6]*=c,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,h=(i+r)*u,p=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ws=new z,$n=new Ct,k1=new z(0,0,0),z1=new z(1,1,1),tr=new z,El=new z,vn=new z,f_=new Ct,d_=new $a;class rc{constructor(e=0,t=0,i=0,r=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const h_=new z,As=new $a,Pi=new Ct,Tl=new z,Yo=new z,G1=new z,V1=new $a,p_=new z(1,0,0),m_=new z(0,1,0),__=new z(0,0,1),H1={type:"added"},g_={type:"removed"};class pn extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new z,t=new rc,i=new $a,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ie}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,t){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tl.copy(e):Tl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Yo,Tl,this.up):Pi.lookAt(Tl,Yo,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Pi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(H1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(g_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,G1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,V1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new z(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new z,Li=new z,ff=new z,bi=new z,Rs=new z,Cs=new z,v_=new z,df=new z,hf=new z,pf=new z;let wl=!1;class ti{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Li.subVectors(i,t),ff.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Li),l=Kn.dot(ff),u=Li.dot(Li),c=Li.dot(ff),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,r,s,o,a,l){return wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bi),l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Li.subVectors(e,t),Kn.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Kn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wl=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Cs.subVectors(s,i),df.subVectors(e,i);const l=Rs.dot(df),u=Cs.dot(df);if(l<=0&&u<=0)return t.copy(i);hf.subVectors(e,r);const c=Rs.dot(hf),d=Cs.dot(hf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Rs,o);pf.subVectors(e,s);const p=Rs.dot(pf),v=Cs.dot(pf);if(v>=0&&p<=v)return t.copy(s);const m=p*u-l*v;if(m<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Cs,a);const _=c*v-p*d;if(_<=0&&d-c>=0&&p-v>=0)return v_.subVectors(s,r),a=(d-c)/(d-c+(p-v)),t.copy(r).addScaledVector(v_,a);const f=1/(_+m+h);return o=m*f,a=h*f,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let W1=0;class Za extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=ao,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ux,this.blendDst=cx,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Id,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Al={h:0,s:0,l:0};function mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qn.workingColorSpace){return this.r=e,this.g=t,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qn.workingColorSpace){if(e=R1(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mf(o,s,e+1/3),this.g=mf(o,s,e),this.b=mf(o,s,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ae){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=nf(e.r),this.g=nf(e.g),this.b=nf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return qn.fromWorkingColorSpace(Bt.copy(this),e),Math.round(rn(Bt.r*255,0,255))*65536+Math.round(rn(Bt.g*255,0,255))*256+Math.round(rn(Bt.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qn.workingColorSpace){qn.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qn.workingColorSpace){return qn.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ae){qn.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),Zn.h+=e,Zn.s+=t,Zn.l+=i,this.setHSL(Zn.h,Zn.s,Zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Al);const i=ef(Zn.h,Al.h,t),r=ef(Zn.s,Al.s,t),s=ef(Zn.l,Al.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ke;Ke.NAMES=Mx;class Ex extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,Rl=new Qe;class Si{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=o_,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vl(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vl(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vl(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Tx extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wx extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}}let X1=0;const bn=new Ct,_f=new pn,Ps=new z,xn=new Ka,qo=new Ka,wt=new z;class wi extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?wx:Tx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(xn.min,qo.min),xn.expandByPoint(wt),wt.addVectors(xn.max,qo.max),xn.expandByPoint(wt)):(xn.expandByPoint(qo.min),xn.expandByPoint(qo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(Ps.fromBufferAttribute(e,u),wt.add(Ps)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new z,c[A]=new z;const d=new z,h=new z,p=new z,v=new Qe,m=new Qe,_=new Qe,f=new z,g=new z;function x(A,B,V){d.fromArray(r,A*3),h.fromArray(r,B*3),p.fromArray(r,V*3),v.fromArray(o,A*2),m.fromArray(o,B*2),_.fromArray(o,V*2),h.sub(d),p.sub(d),m.sub(v),_.sub(v);const U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(f.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(U),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(U),u[A].add(f),u[B].add(f),u[V].add(f),c[A].add(g),c[B].add(g),c[V].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,B=S.length;A<B;++A){const V=S[A],U=V.start,F=V.count;for(let k=U,Z=U+F;k<Z;k+=3)x(i[k+0],i[k+1],i[k+2])}const M=new z,E=new z,w=new z,P=new z;function y(A){w.fromArray(s,A*3),P.copy(w);const B=u[A];M.copy(B),M.sub(w.multiplyScalar(w.dot(B))).normalize(),E.crossVectors(P,B);const U=E.dot(c[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=U}for(let A=0,B=S.length;A<B;++A){const V=S[A],U=V.start,F=V.count;for(let k=U,Z=U+F;k<Z;k+=3)y(i[k+0]),y(i[k+1]),y(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),m=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new Si(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x_=new Ct,fi=new yx,Cl=new ic,y_=new z,Ls=new z,bs=new z,Ds=new z,gf=new z,Pl=new z,Ll=new Qe,bl=new Qe,Dl=new Qe,S_=new z,M_=new z,E_=new z,Ul=new z,Il=new z;class gi extends pn{constructor(e=new wi,t=new Ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(gf.fromBufferAttribute(d,e),o?Pl.addScaledVector(gf,c):Pl.addScaledVector(gf.sub(t),c))}t.add(Pl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Cl.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Cl,y_)===null||fi.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),fi.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const m=d[p],_=s[m.materialIndex],f=Math.max(m.start,h.start),g=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=f,S=g;x<S;x+=3){const M=o.getX(x),E=o.getX(x+1),w=o.getX(x+2);i=Nl(this,_,e,fi,l,u,c,M,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=p,_=v;m<_;m+=3){const f=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);i=Nl(this,s,e,fi,l,u,c,f,g,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const m=d[p],_=s[m.materialIndex],f=Math.max(m.start,h.start),g=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=f,S=g;x<S;x+=3){const M=x,E=x+1,w=x+2;i=Nl(this,_,e,fi,l,u,c,M,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=p,_=v;m<_;m+=3){const f=m,g=m+1,x=m+2;i=Nl(this,s,e,fi,l,u,c,f,g,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function j1(n,e,t,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;Il.copy(a),Il.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Il);return u<t.near||u>t.far?null:{distance:u,point:Il.clone(),object:n}}function Nl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ls),n.getVertexPosition(l,bs),n.getVertexPosition(u,Ds);const c=j1(n,e,t,i,Ls,bs,Ds,Ul);if(c){r&&(Ll.fromBufferAttribute(r,a),bl.fromBufferAttribute(r,l),Dl.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(Ul,Ls,bs,Ds,Ll,bl,Dl,new Qe)),s&&(Ll.fromBufferAttribute(s,a),bl.fromBufferAttribute(s,l),Dl.fromBufferAttribute(s,u),c.uv1=ti.getInterpolation(Ul,Ls,bs,Ds,Ll,bl,Dl,new Qe),c.uv2=c.uv1),o&&(S_.fromBufferAttribute(o,a),M_.fromBufferAttribute(o,l),E_.fromBufferAttribute(o,u),c.normal=ti.getInterpolation(Ul,Ls,bs,Ds,S_,M_,E_,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};ti.getNormal(Ls,bs,Ds,d.normal),c.face=d}return c}class Qa extends wi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(c,3)),this.setAttribute("uv",new ai(d,2));function v(m,_,f,g,x,S,M,E,w,P,y){const A=S/w,B=M/P,V=S/2,U=M/2,F=E/2,k=w+1,Z=P+1;let H=0,L=0;const G=new z;for(let O=0;O<Z;O++){const re=O*B-U;for(let Q=0;Q<k;Q++){const W=Q*A-V;G[m]=W*g,G[_]=re*x,G[f]=F,u.push(G.x,G.y,G.z),G[m]=0,G[_]=0,G[f]=E>0?1:-1,c.push(G.x,G.y,G.z),d.push(Q/w),d.push(1-O/P),H+=1}}for(let O=0;O<P;O++)for(let re=0;re<w;re++){const Q=h+re+k*O,W=h+re+k*(O+1),q=h+(re+1)+k*(O+1),ie=h+(re+1)+k*O;l.push(Q,W,ie),l.push(W,q,ie),L+=6}a.addGroup(p,L,y),p+=L,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Co(n[t]);for(const r in i)e[r]=i[r]}return e}function Y1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ax(n){return n.getRenderTarget()===null?n.outputColorSpace:Ti}const q1={clone:Co,merge:qt};var $1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends Rx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Is=1;class Z1 extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new On(Us,Is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new On(Us,Is,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new On(Us,Is,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new On(Us,Is,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new On(Us,Is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new On(Us,Is,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Cx extends hn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?Ae:os),this.texture=new Cx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Mr});s.uniforms.tEquirect.value=t;const o=new gi(r,s),a=t.minFilter;return t.minFilter===za&&(t.minFilter=Fn),new Z1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const vf=new z,J1=new z,eT=new Ie;class Wr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vf.subVectors(i,t).cross(J1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eT.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new ic,Fl=new z;class Px{constructor(e=new Wr,t=new Wr,i=new Wr,r=new Wr,s=new Wr,o=new Wr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],h=i[8],p=i[9],v=i[10],m=i[11],_=i[12],f=i[13],g=i[14],x=i[15];return t[0].setComponents(a-r,d-l,m-h,x-_).normalize(),t[1].setComponents(a+r,d+l,m+h,x+_).normalize(),t[2].setComponents(a+s,d+u,m+p,x+f).normalize(),t[3].setComponents(a-s,d-u,m-p,x-f).normalize(),t[4].setComponents(a-o,d-c,m-v,x-g).normalize(),t[5].setComponents(a+o,d+c,m+v,x+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fl.x=r.normal.x>0?e.max.x:e.min.x,Fl.y=r.normal.y>0?e.max.y:e.min.y,Fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class tp extends wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],v=[],m=[],_=[];for(let f=0;f<c;f++){const g=f*h-o;for(let x=0;x<u;x++){const S=x*d-s;v.push(S,-g,0),m.push(0,0,1),_.push(x/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+u*f,S=g+u*(f+1),M=g+1+u*(f+1),E=g+1+u*f;p.push(x,S,E),p.push(S,M,E)}this.setIndex(p),this.setAttribute("position",new ai(v,3)),this.setAttribute("normal",new ai(m,3)),this.setAttribute("uv",new ai(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.width,e.height,e.widthSegments,e.heightSegments)}}var nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT="vec3 transformed = vec3( position );",uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fT=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,dT=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ET=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
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
}`,BT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,XT=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,ZT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sw=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lw=`#if defined( USE_POINTS_UV )
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
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Fw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,jw=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Yw=`#ifdef USE_UV
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
#endif`,qw=`#ifdef USE_UV
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
#endif`,$w=`#ifdef USE_UV
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
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,rA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,oA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uA=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,dA=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,pA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,_A=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,yA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,MA=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,TA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:aT,begin_vertex:lT,beginnormal_vertex:uT,bsdfs:cT,iridescence_fragment:fT,bumpmap_pars_fragment:dT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:_T,color_fragment:gT,color_pars_fragment:vT,color_pars_vertex:xT,color_vertex:yT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:wT,emissivemap_fragment:AT,emissivemap_pars_fragment:RT,encodings_fragment:CT,encodings_pars_fragment:PT,envmap_fragment:LT,envmap_common_pars_fragment:bT,envmap_pars_fragment:DT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:XT,envmap_vertex:IT,fog_vertex:NT,fog_pars_vertex:FT,fog_fragment:OT,fog_pars_fragment:kT,gradientmap_pars_fragment:zT,lightmap_fragment:BT,lightmap_pars_fragment:GT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:HT,lights_pars_begin:WT,lights_toon_fragment:jT,lights_toon_pars_fragment:YT,lights_phong_fragment:qT,lights_phong_pars_fragment:$T,lights_physical_fragment:KT,lights_physical_pars_fragment:ZT,lights_fragment_begin:QT,lights_fragment_maps:JT,lights_fragment_end:ew,logdepthbuf_fragment:tw,logdepthbuf_pars_fragment:nw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:rw,map_fragment:sw,map_pars_fragment:ow,map_particle_fragment:aw,map_particle_pars_fragment:lw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:cw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:hw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:_w,normal_pars_fragment:gw,normal_pars_vertex:vw,normal_vertex:xw,normalmap_pars_fragment:yw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:Ew,iridescence_pars_fragment:Tw,output_fragment:ww,packing:Aw,premultiplied_alpha_fragment:Rw,project_vertex:Cw,dithering_fragment:Pw,dithering_pars_fragment:Lw,roughnessmap_fragment:bw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Nw,shadowmask_pars_fragment:Fw,skinbase_vertex:Ow,skinning_pars_vertex:kw,skinning_vertex:zw,skinnormal_vertex:Bw,specularmap_fragment:Gw,specularmap_pars_fragment:Vw,tonemapping_fragment:Hw,tonemapping_pars_fragment:Ww,transmission_fragment:Xw,transmission_pars_fragment:jw,uv_pars_fragment:Yw,uv_pars_vertex:qw,uv_vertex:$w,worldpos_vertex:Kw,background_vert:Zw,background_frag:Qw,backgroundCube_vert:Jw,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:uA,linedashed_frag:cA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:_A,meshnormal_vert:gA,meshnormal_frag:vA,meshphong_vert:xA,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:MA,meshtoon_vert:EA,meshtoon_frag:TA,points_vert:wA,points_frag:AA,shadow_vert:RA,shadow_frag:CA,sprite_vert:PA,sprite_frag:LA},se={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaTest:{value:0}}},hi={basic:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:qt([se.points,se.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:qt([se.common,se.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:qt([se.sprite,se.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:qt([se.common,se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:qt([se.lights,se.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};hi.physical={uniforms:qt([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ol={r:0,b:0,g:0};function bA(n,e,t,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(_,f){let g=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),g=!0),n.xr.getEnvironmentBlendMode()){case"opaque":g=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),g=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),g=!0;break}(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===nc)?(c===void 0&&(c=new gi(new Qa(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Co(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ae,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new gi(new tp(2,2),new qi({name:"BackgroundMaterial",uniforms:Co(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function m(_,f){_.getRGB(Ol,Ax(n)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(_,f=1){a.set(_),l=f,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v}}function DA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let u=l,c=!1;function d(F,k,Z,H,L){let G=!1;if(o){const O=m(H,Z,k);u!==O&&(u=O,p(u.object)),G=f(F,H,Z,L),G&&g(F,H,Z,L)}else{const O=k.wireframe===!0;(u.geometry!==H.id||u.program!==Z.id||u.wireframe!==O)&&(u.geometry=H.id,u.program=Z.id,u.wireframe=O,G=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,P(F,k,Z,H),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,k,Z){const H=Z.wireframe===!0;let L=a[F.id];L===void 0&&(L={},a[F.id]=L);let G=L[k.id];G===void 0&&(G={},L[k.id]=G);let O=G[H];return O===void 0&&(O=_(h()),G[H]=O),O}function _(F){const k=[],Z=[],H=[];for(let L=0;L<r;L++)k[L]=0,Z[L]=0,H[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:H,object:F,attributes:{},index:null}}function f(F,k,Z,H){const L=u.attributes,G=k.attributes;let O=0;const re=Z.getAttributes();for(const Q in re)if(re[Q].location>=0){const q=L[Q];let ie=G[Q];if(ie===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;O++}return u.attributesNum!==O||u.index!==H}function g(F,k,Z,H){const L={},G=k.attributes;let O=0;const re=Z.getAttributes();for(const Q in re)if(re[Q].location>=0){let q=G[Q];q===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),L[Q]=ie,O++}u.attributes=L,u.attributesNum=O,u.index=H}function x(){const F=u.newAttributes;for(let k=0,Z=F.length;k<Z;k++)F[k]=0}function S(F){M(F,0)}function M(F,k){const Z=u.newAttributes,H=u.enabledAttributes,L=u.attributeDivisors;Z[F]=1,H[F]===0&&(n.enableVertexAttribArray(F),H[F]=1),L[F]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,k),L[F]=k)}function E(){const F=u.newAttributes,k=u.enabledAttributes;for(let Z=0,H=k.length;Z<H;Z++)k[Z]!==F[Z]&&(n.disableVertexAttribArray(Z),k[Z]=0)}function w(F,k,Z,H,L,G){i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT)?n.vertexAttribIPointer(F,k,Z,L,G):n.vertexAttribPointer(F,k,Z,H,L,G)}function P(F,k,Z,H){if(i.isWebGL2===!1&&(F.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const L=H.attributes,G=Z.getAttributes(),O=k.defaultAttributeValues;for(const re in G){const Q=G[re];if(Q.location>=0){let W=L[re];if(W===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),W!==void 0){const q=W.normalized,ie=W.itemSize,oe=t.get(W);if(oe===void 0)continue;const D=oe.buffer,we=oe.type,Ee=oe.bytesPerElement;if(W.isInterleavedBufferAttribute){const ae=W.data,Se=ae.stride,ze=W.offset;if(ae.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)M(Q.location+_e,ae.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<Q.locationSize;_e++)S(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,D);for(let _e=0;_e<Q.locationSize;_e++)w(Q.location+_e,ie/Q.locationSize,we,q,Se*Ee,(ze+ie/Q.locationSize*_e)*Ee)}else{if(W.isInstancedBufferAttribute){for(let ae=0;ae<Q.locationSize;ae++)M(Q.location+ae,W.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ae=0;ae<Q.locationSize;ae++)S(Q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,D);for(let ae=0;ae<Q.locationSize;ae++)w(Q.location+ae,ie/Q.locationSize,we,q,ie*Ee,ie/Q.locationSize*ae*Ee)}}else if(O!==void 0){const q=O[re];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(Q.location,q);break;case 3:n.vertexAttrib3fv(Q.location,q);break;case 4:n.vertexAttrib4fv(Q.location,q);break;default:n.vertexAttrib1fv(Q.location,q)}}}}E()}function y(){V();for(const F in a){const k=a[F];for(const Z in k){const H=k[Z];for(const L in H)v(H[L].object),delete H[L];delete k[Z]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const k=a[F.id];for(const Z in k){const H=k[Z];for(const L in H)v(H[L].object),delete H[L];delete k[Z]}delete a[F.id]}function B(F){for(const k in a){const Z=a[k];if(Z[F.id]===void 0)continue;const H=Z[F.id];for(const L in H)v(H[L].object),delete H[L];delete Z[F.id]}}function V(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:S,disableUnusedAttributes:E}}function UA(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function IA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=o||e.has("OES_texture_float"),M=x&&S,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function NA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!_)s?c(null):u();else{const g=s?0:i,x=g*4;let S=f.clippingState||null;l.value=S,S=c(v,h,x,p);for(let M=0;M!==x;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,v!==!0||_===null){const f=p+m*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let x=0,S=p;x!==m;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function FA(n){let e=new WeakMap;function t(o,a){return a===Nd?o.mapping=wo:a===Fd&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nd||a===Fd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Q1(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OA extends Rx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,T_=[.125,.215,.35,.446,.526,.582],jr=20,xf=new OA,w_=new Ke;let yf=null;const Xr=(1+Math.sqrt(5))/2,Ns=1/Xr,A_=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Xr,Ns),new z(0,Xr,-Ns),new z(Ns,0,Xr),new z(-Ns,0,Xr),new z(Xr,Ns,0),new z(-Xr,Ns,0)];class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yf),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ba,format:ii,colorSpace:Ti,depthBuffer:!1},r=C_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(s)),this._blurMaterial=zA(s,e,t)}return r}_compileMaterial(e){const t=new gi(this._lodPlanes[0],e);this._renderer.compile(t,xf)}_sceneToCubeUV(e,t,i,r){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(w_),c.toneMapping=Gi,c.autoClear=!1;const p=new Ex({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new gi(new Qa,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(w_),m=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;kl(r,g*x,f>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wo||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=A_[(r-1)%A_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new gi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jr-1),m=s/v,_=isFinite(s)?1+Math.floor(c*m):jr;_>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${jr}`);const f=[];let g=0;for(let w=0;w<jr;++w){const P=w/m,y=Math.exp(-P*P/2);f.push(y),w===0?g+=y:w<_&&(g+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/g;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],M=3*S*(r>x-Zs?r-x+Zs:0),E=4*(this._cubeSize-S);kl(t,M,E,3*S,2*S),l.setRenderTarget(t),l.render(d,xf)}}function kA(n){const e=[],t=[],i=[];let r=n;const s=n-Zs+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Zs?l=T_[o-n+Zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,m=3,_=2,f=1,g=new Float32Array(m*v*p),x=new Float32Array(_*v*p),S=new Float32Array(f*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,P=E>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(y,m*v*E),x.set(h,_*v*E);const A=[E,E,E,E,E,E];S.set(A,f*v*E)}const M=new wi;M.setAttribute("position",new Si(g,m)),M.setAttribute("uv",new Si(x,_)),M.setAttribute("faceIndex",new Si(S,f)),e.push(M),r>Zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function C_(n,e,t){const i=new ps(n,e,t);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zA(n,e,t){const i=new Float32Array(jr),r=new z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function P_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function L_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nd||l===Fd,c=l===wo||l===Ao;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new R_(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new R_(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VA(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const m=p[v];for(let _=0,f=m.length;_<f;_++)e.update(m[_],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let m=0;if(p!==null){const g=p.array;m=p.version;for(let x=0,S=g.length;x<S;x+=3){const M=g[x+0],E=g[x+1],w=g[x+2];h.push(M,E,E,w,w,M)}}else{const g=v.array;m=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const M=x+0,E=x+1,w=x+2;h.push(M,E,E,w,w,M)}}const _=new(_x(h)?wx:Tx)(h,1);_.version=m;const f=s.get(d);f&&e.remove(f),s.set(d,_)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function HA(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,v){if(v===0)return;let m,_;if(r)m=n,_="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,p,a,h*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function WA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function XA(n,e){return n[0]-e[0]}function jA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function YA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(c);if(_===void 0||_.count!==m){let k=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;_!==void 0&&_.texture.dispose();const x=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),M===!0&&(y=3);let A=c.attributes.position.count*y,B=1;A>e.maxTextureSize&&(B=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const V=new Float32Array(A*B*4*m),U=new xx(V,A,B,m);U.type=Qr,U.needsUpdate=!0;const F=y*4;for(let Z=0;Z<m;Z++){const H=E[Z],L=w[Z],G=P[Z],O=A*B*4*Z;for(let re=0;re<H.count;re++){const Q=re*F;x===!0&&(o.fromBufferAttribute(H,re),V[O+Q+0]=o.x,V[O+Q+1]=o.y,V[O+Q+2]=o.z,V[O+Q+3]=0),S===!0&&(o.fromBufferAttribute(L,re),V[O+Q+4]=o.x,V[O+Q+5]=o.y,V[O+Q+6]=o.z,V[O+Q+7]=0),M===!0&&(o.fromBufferAttribute(G,re),V[O+Q+8]=o.x,V[O+Q+9]=o.y,V[O+Q+10]=o.z,V[O+Q+11]=G.itemSize===4?o.w:1)}}_={count:m,texture:U,size:new Qe(A,B)},s.set(c,_),c.addEventListener("dispose",k)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const g=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const v=h===void 0?0:h.length;let m=i[c.id];if(m===void 0||m.length!==v){m=[];for(let S=0;S<v;S++)m[S]=[S,0];i[c.id]=m}for(let S=0;S<v;S++){const M=m[S];M[0]=S,M[1]=h[S]}m.sort(jA);for(let S=0;S<8;S++)S<v&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(XA);const _=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const M=a[S],E=M[0],w=M[1];E!==Number.MAX_SAFE_INTEGER&&w?(_&&c.getAttribute("morphTarget"+S)!==_[E]&&c.setAttribute("morphTarget"+S,_[E]),f&&c.getAttribute("morphNormal"+S)!==f[E]&&c.setAttribute("morphNormal"+S,f[E]),r[S]=w,g+=w):(_&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),f&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const x=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function qA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const bx=new hn,Dx=new xx,Ux=new F1,Ix=new Cx,b_=[],D_=[],U_=new Float32Array(16),I_=new Float32Array(9),N_=new Float32Array(4);function Io(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=b_[r];if(s===void 0&&(s=new Float32Array(r),b_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=D_[e];t===void 0&&(t=new Int32Array(e),D_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function QA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function JA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;N_.set(i),n.uniformMatrix2fv(this.addr,!1,N_),St(t,i)}}function eR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;I_.set(i),n.uniformMatrix3fv(this.addr,!1,I_),St(t,i)}}function tR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;U_.set(i),n.uniformMatrix4fv(this.addr,!1,U_),St(t,i)}}function nR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function rR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function sR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function oR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function lR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function uR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function cR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||bx,r)}function fR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ux,r)}function dR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ix,r)}function hR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dx,r)}function pR(n){switch(n){case 5126:return $A;case 35664:return KA;case 35665:return ZA;case 35666:return QA;case 35674:return JA;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return aR;case 36295:return lR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return hR}}function mR(n,e){n.uniform1fv(this.addr,e)}function _R(n,e){const t=Io(e,this.size,2);n.uniform2fv(this.addr,t)}function gR(n,e){const t=Io(e,this.size,3);n.uniform3fv(this.addr,t)}function vR(n,e){const t=Io(e,this.size,4);n.uniform4fv(this.addr,t)}function xR(n,e){const t=Io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yR(n,e){const t=Io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SR(n,e){const t=Io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MR(n,e){n.uniform1iv(this.addr,e)}function ER(n,e){n.uniform2iv(this.addr,e)}function TR(n,e){n.uniform3iv(this.addr,e)}function wR(n,e){n.uniform4iv(this.addr,e)}function AR(n,e){n.uniform1uiv(this.addr,e)}function RR(n,e){n.uniform2uiv(this.addr,e)}function CR(n,e){n.uniform3uiv(this.addr,e)}function PR(n,e){n.uniform4uiv(this.addr,e)}function LR(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bx,s[o])}function bR(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ux,s[o])}function DR(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ix,s[o])}function UR(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dx,s[o])}function IR(n){switch(n){case 5126:return mR;case 35664:return _R;case 35665:return gR;case 35666:return vR;case 35674:return xR;case 35675:return yR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return wR;case 5125:return AR;case 36294:return RR;case 36295:return CR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return UR}}class NR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=pR(t.type)}}class FR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=IR(t.type)}}class OR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function F_(n,e){n.seq.push(e),n.map[e.id]=e}function kR(n,e,t){const i=n.name,r=i.length;for(Sf.lastIndex=0;;){const s=Sf.exec(i),o=Sf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){F_(t,u===void 0?new NR(a,n,e):new FR(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new OR(a),F_(t,d)),t=d}}}class nu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function O_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let zR=0;function BR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function GR(n){switch(n){case Ti:return["Linear","( value )"];case Ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function k_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+BR(n.getShaderSource(e),o)}else return r}function VR(n,e){const t=GR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function HR(n,e){let t;switch(e){case t1:t="Linear";break;case n1:t="Reinhard";break;case i1:t="OptimizedCineon";break;case r1:t="ACESFilmic";break;case s1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function WR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function XR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ta(n){return n!==""}function z_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(n){return n.replace(YR,qR)}function qR(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gd(t)}const $R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(n){return n.replace($R,KR)}function KR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function V_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===UE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function QR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function eC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fx:e="ENVMAP_BLENDING_MULTIPLY";break;case JE:e="ENVMAP_BLENDING_MIX";break;case e1:e="ENVMAP_BLENDING_ADD";break}return e}function tC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZR(t),u=QR(t),c=JR(t),d=eC(t),h=tC(t),p=t.isWebGL2?"":WR(t),v=XR(s),m=r.createProgram();let _,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[v].filter(ta).join(`
`),_.length>0&&(_+=`
`),f=[p,v].filter(ta).join(`
`),f.length>0&&(f+=`
`)):(_=[V_(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),f=[p,V_(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Gi?HR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,VR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Gd(o),o=z_(o,t),o=B_(o,t),a=Gd(a),a=z_(a,t),a=B_(a,t),o=G_(o),a=G_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=g+_+o,S=g+f+a,M=O_(r,r.VERTEX_SHADER,x),E=O_(r,r.FRAGMENT_SHADER,S);if(r.attachShader(m,M),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(m).trim(),A=r.getShaderInfoLog(M).trim(),B=r.getShaderInfoLog(E).trim();let V=!0,U=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,M,E);else{const F=k_(r,M,"vertex"),k=k_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+F+`
`+k)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||B==="")&&(U=!1);U&&(this.diagnostics={runnable:V,programLog:y,vertexShader:{log:A,prefix:_},fragmentShader:{log:B,prefix:f}})}r.deleteShader(M),r.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new nu(r,m)),w};let P;return this.getAttributes=function(){return P===void 0&&(P=jR(r,m)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=zR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let iC=0;class rC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sC(e),t.set(e,i)),i}}class sC{constructor(e){this.id=iC++,this.code=e,this.usedTimes=0}}function oC(n,e,t,i,r,s,o){const a=new Sx,l=new rC,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function _(y,A,B,V,U){const F=V.fog,k=U.geometry,Z=y.isMeshStandardMaterial?V.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),L=H&&H.mapping===nc?H.image.height:null,G=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=O!==void 0?O.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let W,q,ie,oe;if(G){const We=hi[G];W=We.vertexShader,q=We.fragmentShader}else W=y.vertexShader,q=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const D=n.getRenderTarget(),we=U.isInstancedMesh===!0,Ee=!!y.map,ae=!!y.matcap,Se=!!H,ze=!!y.aoMap,_e=!!y.lightMap,be=!!y.bumpMap,Mt=!!y.normalMap,Lt=!!y.displacementMap,Et=!!y.emissiveMap,_t=!!y.metalnessMap,Be=!!y.roughnessMap,st=y.clearcoat>0,tn=y.iridescence>0,C=y.sheen>0,T=y.transmission>0,X=st&&!!y.clearcoatMap,te=st&&!!y.clearcoatNormalMap,ne=st&&!!y.clearcoatRoughnessMap,le=tn&&!!y.iridescenceMap,Me=tn&&!!y.iridescenceThicknessMap,de=C&&!!y.sheenColorMap,$=C&&!!y.sheenRoughnessMap,pe=!!y.specularMap,ge=!!y.specularColorMap,xe=!!y.specularIntensityMap,fe=T&&!!y.transmissionMap,me=T&&!!y.thicknessMap,Fe=!!y.gradientMap,Ve=!!y.alphaMap,lt=y.alphaTest>0,b=!!y.extensions,j=!!k.attributes.uv1,J=!!k.attributes.uv2,ue=!!k.attributes.uv3;return{isWebGL2:c,shaderID:G,shaderName:y.type,vertexShader:W,fragmentShader:q,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:we,instancingColor:we&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,map:Ee,matcap:ae,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:L,aoMap:ze,lightMap:_e,bumpMap:be,normalMap:Mt,displacementMap:h&&Lt,emissiveMap:Et,normalMapObjectSpace:Mt&&y.normalMapType===w1,normalMapTangentSpace:Mt&&y.normalMapType===T1,metalnessMap:_t,roughnessMap:Be,clearcoat:st,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:ne,iridescence:tn,iridescenceMap:le,iridescenceThicknessMap:Me,sheen:C,sheenColorMap:de,sheenRoughnessMap:$,specularMap:pe,specularColorMap:ge,specularIntensityMap:xe,transmission:T,transmissionMap:fe,thicknessMap:me,gradientMap:Fe,opaque:y.transparent===!1&&y.blending===ao,alphaMap:Ve,alphaTest:lt,combine:y.combine,mapUv:Ee&&m(y.map.channel),aoMapUv:ze&&m(y.aoMap.channel),lightMapUv:_e&&m(y.lightMap.channel),bumpMapUv:be&&m(y.bumpMap.channel),normalMapUv:Mt&&m(y.normalMap.channel),displacementMapUv:Lt&&m(y.displacementMap.channel),emissiveMapUv:Et&&m(y.emissiveMap.channel),metalnessMapUv:_t&&m(y.metalnessMap.channel),roughnessMapUv:Be&&m(y.roughnessMap.channel),clearcoatMapUv:X&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:$&&m(y.sheenRoughnessMap.channel),specularMapUv:pe&&m(y.specularMap.channel),specularColorMapUv:ge&&m(y.specularColorMap.channel),specularIntensityMapUv:xe&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:me&&m(y.thicknessMap.channel),alphaMapUv:Ve&&m(y.alphaMap.channel),vertexTangents:Mt&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:J,vertexUv3s:ue,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ee||Ve),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Gi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oi,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:b&&y.extensions.derivatives===!0,extensionFragDepth:b&&y.extensions.fragDepth===!0,extensionDrawBuffers:b&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:b&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)A.push(B),A.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(g(A,y),x(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const A=v[y.type];let B;if(A){const V=hi[A];B=q1.clone(V.uniforms)}else B=y.uniforms;return B}function M(y,A){let B;for(let V=0,U=u.length;V<U;V++){const F=u[V];if(F.cacheKey===A){B=F,++B.usedTimes;break}}return B===void 0&&(B=new nC(n,A,y,s),u.push(B)),B}function E(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:P}}function aC(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,v,m,_){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:m,group:_},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=m,f.group=_),e++,f}function a(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,m,_){const f=o(d,h,p,v,m,_);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||lC),i.length>1&&i.sort(h||H_),r.length>1&&r.sort(h||H_)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function uC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new W_,n.set(i,[o])):r>=s.length?(o=new W_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function fC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dC=0;function hC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pC(n,e){const t=new cC,i=fC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new Ct,a=new Ct;function l(c,d){let h=0,p=0,v=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let m=0,_=0,f=0,g=0,x=0,S=0,M=0,E=0,w=0,P=0;c.sort(hC);const y=d===!0?Math.PI:1;for(let B=0,V=c.length;B<V;B++){const U=c[B],F=U.color,k=U.intensity,Z=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*k*y,p+=F.g*k*y,v+=F.b*k*y;else if(U.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(U.sh.coefficients[L],k);else if(U.isDirectionalLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){const G=U.shadow,O=i.get(U);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,r.directionalShadow[m]=O,r.directionalShadowMap[m]=H,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=L,m++}else if(U.isSpotLight){const L=t.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(F).multiplyScalar(k*y),L.distance=Z,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,r.spot[f]=L;const G=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,G.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[f]=G.matrix,U.castShadow){const O=i.get(U);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,r.spotShadow[f]=O,r.spotShadowMap[f]=H,E++}f++}else if(U.isRectAreaLight){const L=t.get(U);L.color.copy(F).multiplyScalar(k),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),r.rectArea[g]=L,g++}else if(U.isPointLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*y),L.distance=U.distance,L.decay=U.decay,U.castShadow){const G=U.shadow,O=i.get(U);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,r.pointShadow[_]=O,r.pointShadowMap[_]=H,r.pointShadowMatrix[_]=U.shadow.matrix,M++}r.point[_]=L,_++}else if(U.isHemisphereLight){const L=t.get(U);L.skyColor.copy(U.color).multiplyScalar(k*y),L.groundColor.copy(U.groundColor).multiplyScalar(k*y),r.hemi[x]=L,x++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==m||A.pointLength!==_||A.spotLength!==f||A.rectAreaLength!==g||A.hemiLength!==x||A.numDirectionalShadows!==S||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==w)&&(r.directional.length=m,r.spot.length=f,r.rectArea.length=g,r.point.length=_,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,A.directionalLength=m,A.pointLength=_,A.spotLength=f,A.rectAreaLength=g,A.hemiLength=x,A.numDirectionalShadows=S,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=w,r.version=dC++)}function u(c,d){let h=0,p=0,v=0,m=0,_=0;const f=d.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const S=c[g];if(S.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(S.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),v++}else if(S.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=r.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:l,setupView:u,state:r}}function X_(n,e){const t=new pC(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function mC(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new X_(n,e),t.set(s,[l])):o>=a.length?(l=new X_(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _C extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gC extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yC(n,e,t){let i=new Px;const r=new Qe,s=new Qe,o=new Ut,a=new _C({depthPacking:E1}),l=new gC,u={},c=t.maxTextureSize,d={[Cr]:Qt,[Qt]:Cr,[Oi]:Oi},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:vC,fragmentShader:xC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new gi(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lx;let f=this.type;this.render=function(M,E,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Mr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=f!==Di&&this.type===Di,U=f===Di&&this.type!==Di;for(let F=0,k=M.length;F<k;F++){const Z=M[F],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const L=H.getFrameExtents();if(r.multiply(L),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,H.mapSize.y=s.y)),H.map===null||V===!0||U===!0){const O=this.type!==Di?{minFilter:Kt,magFilter:Kt}:{};H.map!==null&&H.map.dispose(),H.map=new ps(r.x,r.y,O),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const G=H.getViewportCount();for(let O=0;O<G;O++){const re=H.getViewport(O);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(o),H.updateMatrices(Z,O),i=H.getFrustum(),S(E,w,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&g(H,w),H.needsUpdate=!1}f=this.type,_.needsUpdate=!1,n.setRenderTarget(P,y,A)};function g(M,E){const w=e.update(m);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ps(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,w,h,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,w,p,m,null)}function x(M,E,w,P){let y=null;const A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=y.uuid,V=E.uuid;let U=u[B];U===void 0&&(U={},u[B]=U);let F=U[V];F===void 0&&(F=y.clone(),U[V]=F),y=F}if(y.visible=E.visible,y.wireframe=E.wireframe,P===Di?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=w}return y}function S(M,E,w,P,y){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Di)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const V=e.update(M),U=M.material;if(Array.isArray(U)){const F=V.groups;for(let k=0,Z=F.length;k<Z;k++){const H=F[k],L=U[H.materialIndex];if(L&&L.visible){const G=x(M,L,P,y);n.renderBufferDirect(w,null,V,G,M,H)}}}else if(U.visible){const F=x(M,U,P,y);n.renderBufferDirect(w,null,V,F,M,null)}}const B=M.children;for(let V=0,U=B.length;V<U;V++)S(B[V],E,w,P,y)}}function SC(n,e,t){const i=t.isWebGL2;function r(){let b=!1;const j=new Ut;let J=null;const ue=new Ut(0,0,0,0);return{setMask:function(he){J!==he&&!b&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){b=he},setClear:function(he,We,Xe,Ft,Ki){Ki===!0&&(he*=Ft,We*=Ft,Xe*=Ft),j.set(he,We,Xe,Ft),ue.equals(j)===!1&&(n.clearColor(he,We,Xe,Ft),ue.copy(j))},reset:function(){b=!1,J=null,ue.set(-1,0,0,0)}}}function s(){let b=!1,j=null,J=null,ue=null;return{setTest:function(he){he?D(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(he){j!==he&&!b&&(n.depthMask(he),j=he)},setFunc:function(he){if(J!==he){switch(he){case jE:n.depthFunc(n.NEVER);break;case YE:n.depthFunc(n.ALWAYS);break;case qE:n.depthFunc(n.LESS);break;case Id:n.depthFunc(n.LEQUAL);break;case $E:n.depthFunc(n.EQUAL);break;case KE:n.depthFunc(n.GEQUAL);break;case ZE:n.depthFunc(n.GREATER);break;case QE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=he}},setLocked:function(he){b=he},setClear:function(he){ue!==he&&(n.clearDepth(he),ue=he)},reset:function(){b=!1,j=null,J=null,ue=null}}}function o(){let b=!1,j=null,J=null,ue=null,he=null,We=null,Xe=null,Ft=null,Ki=null;return{setTest:function(ut){b||(ut?D(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ut){j!==ut&&!b&&(n.stencilMask(ut),j=ut)},setFunc:function(ut,Ln,ui){(J!==ut||ue!==Ln||he!==ui)&&(n.stencilFunc(ut,Ln,ui),J=ut,ue=Ln,he=ui)},setOp:function(ut,Ln,ui){(We!==ut||Xe!==Ln||Ft!==ui)&&(n.stencilOp(ut,Ln,ui),We=ut,Xe=Ln,Ft=ui)},setLocked:function(ut){b=ut},setClear:function(ut){Ki!==ut&&(n.clearStencil(ut),Ki=ut)},reset:function(){b=!1,j=null,J=null,ue=null,he=null,We=null,Xe=null,Ft=null,Ki=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,m=[],_=null,f=!1,g=null,x=null,S=null,M=null,E=null,w=null,P=null,y=!1,A=null,B=null,V=null,U=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(L)[1]),Z=H>=1):L.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Z=H>=2);let G=null,O={};const re=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),W=new Ut().fromArray(re),q=new Ut().fromArray(Q);function ie(b,j,J,ue){const he=new Uint8Array(4),We=n.createTexture();n.bindTexture(b,We),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<J;Xe++)i&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(j,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(j+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return We}const oe={};oe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),D(n.DEPTH_TEST),l.setFunc(Id),Lt(!1),Et(bm),D(n.CULL_FACE),be(Mr);function D(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function we(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function Ee(b,j){return p[b]!==j?(n.bindFramebuffer(b,j),p[b]=j,i&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=j),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=j)),!0):!1}function ae(b,j){let J=m,ue=!1;if(b)if(J=v.get(j),J===void 0&&(J=[],v.set(j,J)),b.isWebGLMultipleRenderTargets){const he=b.texture;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let We=0,Xe=he.length;We<Xe;We++)J[We]=n.COLOR_ATTACHMENT0+We;J.length=he.length,ue=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,ue=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Se(b){return _!==b?(n.useProgram(b),_=b,!0):!1}const ze={[Fs]:n.FUNC_ADD,[NE]:n.FUNC_SUBTRACT,[FE]:n.FUNC_REVERSE_SUBTRACT};if(i)ze[Im]=n.MIN,ze[Nm]=n.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(ze[Im]=b.MIN_EXT,ze[Nm]=b.MAX_EXT)}const _e={[OE]:n.ZERO,[kE]:n.ONE,[zE]:n.SRC_COLOR,[ux]:n.SRC_ALPHA,[XE]:n.SRC_ALPHA_SATURATE,[HE]:n.DST_COLOR,[GE]:n.DST_ALPHA,[BE]:n.ONE_MINUS_SRC_COLOR,[cx]:n.ONE_MINUS_SRC_ALPHA,[WE]:n.ONE_MINUS_DST_COLOR,[VE]:n.ONE_MINUS_DST_ALPHA};function be(b,j,J,ue,he,We,Xe,Ft){if(b===Mr){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(D(n.BLEND),f=!0),b!==IE){if(b!==g||Ft!==y){if((x!==Fs||E!==Fs)&&(n.blendEquation(n.FUNC_ADD),x=Fs,E=Fs),Ft)switch(b){case ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFunc(n.ONE,n.ONE);break;case Dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Um:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Um:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,M=null,w=null,P=null,g=b,y=Ft}return}he=he||j,We=We||J,Xe=Xe||ue,(j!==x||he!==E)&&(n.blendEquationSeparate(ze[j],ze[he]),x=j,E=he),(J!==S||ue!==M||We!==w||Xe!==P)&&(n.blendFuncSeparate(_e[J],_e[ue],_e[We],_e[Xe]),S=J,M=ue,w=We,P=Xe),g=b,y=!1}function Mt(b,j){b.side===Oi?we(n.CULL_FACE):D(n.CULL_FACE);let J=b.side===Qt;j&&(J=!J),Lt(J),b.blending===ao&&b.transparent===!1?be(Mr):be(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const ue=b.stencilWrite;u.setTest(ue),ue&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Be(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(b){A!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),A=b)}function Et(b){b!==bE?(D(n.CULL_FACE),b!==B&&(b===bm?n.cullFace(n.BACK):b===DE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),B=b}function _t(b){b!==V&&(Z&&n.lineWidth(b),V=b)}function Be(b,j,J){b?(D(n.POLYGON_OFFSET_FILL),(U!==j||F!==J)&&(n.polygonOffset(j,J),U=j,F=J)):we(n.POLYGON_OFFSET_FILL)}function st(b){b?D(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function tn(b){b===void 0&&(b=n.TEXTURE0+k-1),G!==b&&(n.activeTexture(b),G=b)}function C(b,j,J){J===void 0&&(G===null?J=n.TEXTURE0+k-1:J=G);let ue=O[J];ue===void 0&&(ue={type:void 0,texture:void 0},O[J]=ue),(ue.type!==b||ue.texture!==j)&&(G!==J&&(n.activeTexture(J),G=J),n.bindTexture(b,j||oe[b]),ue.type=b,ue.texture=j)}function T(){const b=O[G];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(b){W.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),W.copy(b))}function me(b){q.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),q.copy(b))}function Fe(b,j){let J=d.get(j);J===void 0&&(J=new WeakMap,d.set(j,J));let ue=J.get(b);ue===void 0&&(ue=n.getUniformBlockIndex(j,b.name),J.set(b,ue))}function Ve(b,j){const ue=d.get(j).get(b);c.get(j)!==ue&&(n.uniformBlockBinding(j,ue,b.__bindingPointIndex),c.set(j,ue))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,O={},p={},v=new WeakMap,m=[],_=null,f=!1,g=null,x=null,S=null,M=null,E=null,w=null,P=null,y=!1,A=null,B=null,V=null,U=null,F=null,W.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:D,disable:we,bindFramebuffer:Ee,drawBuffers:ae,useProgram:Se,setBlending:be,setMaterial:Mt,setFlipSided:Lt,setCullFace:Et,setLineWidth:_t,setPolygonOffset:Be,setScissorTest:st,activeTexture:tn,bindTexture:C,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:ge,texImage3D:xe,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:$,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:Me,compressedTexSubImage3D:de,scissor:fe,viewport:me,reset:lt}}function MC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const _=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):Ga("canvas")}function x(C,T,X,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=T?C1:Math.floor,Me=le(ne*C.width),de=le(ne*C.height);m===void 0&&(m=g(Me,de));const $=X?g(Me,de):m;return $.width=Me,$.height=de,$.getContext("2d").drawImage(C,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+de+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return l_(C.width)&&l_(C.height)}function M(C){return a?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==Kt&&C.minFilter!==Fn}function E(C,T){return C.generateMipmaps&&T&&C.minFilter!==Kt&&C.minFilter!==Fn}function w(C){n.generateMipmap(C)}function P(C,T,X,te,ne=!1){if(a===!1)return T;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=T;return T===n.RED&&(X===n.FLOAT&&(le=n.R32F),X===n.HALF_FLOAT&&(le=n.R16F),X===n.UNSIGNED_BYTE&&(le=n.R8)),T===n.RG&&(X===n.FLOAT&&(le=n.RG32F),X===n.HALF_FLOAT&&(le=n.RG16F),X===n.UNSIGNED_BYTE&&(le=n.RG8)),T===n.RGBA&&(X===n.FLOAT&&(le=n.RGBA32F),X===n.HALF_FLOAT&&(le=n.RGBA16F),X===n.UNSIGNED_BYTE&&(le=te===Ae&&ne===!1?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(C,T,X){return E(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){return C===Kt||C===Fm||C===jc?n.NEAREST:n.LINEAR}function B(C){const T=C.target;T.removeEventListener("dispose",B),U(T),T.isVideoTexture&&v.delete(T)}function V(C){const T=C.target;T.removeEventListener("dispose",V),k(T)}function U(C){const T=i.get(C);if(T.__webglInit===void 0)return;const X=C.source,te=_.get(X);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(C),Object.keys(te).length===0&&_.delete(X)}i.remove(C)}function F(C){const T=i.get(C);n.deleteTexture(T.__webglTexture);const X=C.source,te=_.get(X);delete te[T.__cacheKey],o.memory.textures--}function k(C){const T=C.texture,X=i.get(C),te=i.get(T);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,le=T.length;ne<le;ne++){const Me=i.get(T[ne]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(T[ne])}i.remove(T),i.remove(C)}let Z=0;function H(){Z=0}function L(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function G(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function O(C,T){const X=i.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(X,C,T);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function re(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){we(X,C,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function Q(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){we(X,C,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function W(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Ee(X,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const q={[Od]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[kd]:n.MIRRORED_REPEAT},ie={[Kt]:n.NEAREST,[Fm]:n.NEAREST_MIPMAP_NEAREST,[jc]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[o1]:n.LINEAR_MIPMAP_NEAREST,[za]:n.LINEAR_MIPMAP_LINEAR};function oe(C,T,X){if(X?(n.texParameteri(C,n.TEXTURE_WRAP_S,q[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,q[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,q[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ie[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ie[T.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ni||T.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,A(T.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Kt&&T.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Kt||T.minFilter!==jc&&T.minFilter!==za||T.type===Qr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ba&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function D(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",B));const te=T.source;let ne=_.get(te);ne===void 0&&(ne={},_.set(te,ne));const le=G(T);if(le!==C.__cacheKey){ne[le]===void 0&&(ne[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[le].usedTimes++;const Me=ne[C.__cacheKey];Me!==void 0&&(ne[C.__cacheKey].usedTimes--,Me.usedTimes===0&&F(T)),C.__cacheKey=le,C.__webglTexture=ne[le].texture}return X}function we(C,T,X){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const ne=D(C,T),le=T.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+X);const Me=i.get(le);if(le.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=M(T)&&S(T.image)===!1;let $=x(T.image,de,!1,c);$=tn(T,$);const pe=S($)||a,ge=s.convert(T.format,T.colorSpace);let xe=s.convert(T.type),fe=P(T.internalFormat,ge,xe,T.colorSpace);oe(te,T,pe);let me;const Fe=T.mipmaps,Ve=a&&T.isVideoTexture!==!0,lt=Me.__version===void 0||ne===!0,b=y(T,$,pe);if(T.isDepthTexture)fe=n.DEPTH_COMPONENT,a?T.type===Qr?fe=n.DEPTH_COMPONENT32F:T.type===Zr?fe=n.DEPTH_COMPONENT24:T.type===lo?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:T.type===Qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===rs&&fe===n.DEPTH_COMPONENT&&T.type!==hx&&T.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Zr,xe=s.convert(T.type)),T.format===Ro&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,T.type!==lo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=lo,xe=s.convert(T.type))),lt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,fe,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,fe,$.width,$.height,0,ge,xe,null));else if(T.isDataTexture)if(Fe.length>0&&pe){Ve&&lt&&t.texStorage2D(n.TEXTURE_2D,b,fe,Fe[0].width,Fe[0].height);for(let j=0,J=Fe.length;j<J;j++)me=Fe[j],Ve?t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,ge,xe,me.data):t.texImage2D(n.TEXTURE_2D,j,fe,me.width,me.height,0,ge,xe,me.data);T.generateMipmaps=!1}else Ve?(lt&&t.texStorage2D(n.TEXTURE_2D,b,fe,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,ge,xe,$.data)):t.texImage2D(n.TEXTURE_2D,0,fe,$.width,$.height,0,ge,xe,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,b,fe,Fe[0].width,Fe[0].height,$.depth);for(let j=0,J=Fe.length;j<J;j++)me=Fe[j],T.format!==ii?ge!==null?Ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,$.depth,ge,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,fe,me.width,me.height,$.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,$.depth,ge,xe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,fe,me.width,me.height,$.depth,0,ge,xe,me.data)}else{Ve&&lt&&t.texStorage2D(n.TEXTURE_2D,b,fe,Fe[0].width,Fe[0].height);for(let j=0,J=Fe.length;j<J;j++)me=Fe[j],T.format!==ii?ge!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,ge,xe,me.data):t.texImage2D(n.TEXTURE_2D,j,fe,me.width,me.height,0,ge,xe,me.data)}else if(T.isDataArrayTexture)Ve?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,b,fe,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ge,xe,$.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,$.width,$.height,$.depth,0,ge,xe,$.data);else if(T.isData3DTexture)Ve?(lt&&t.texStorage3D(n.TEXTURE_3D,b,fe,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ge,xe,$.data)):t.texImage3D(n.TEXTURE_3D,0,fe,$.width,$.height,$.depth,0,ge,xe,$.data);else if(T.isFramebufferTexture){if(lt)if(Ve)t.texStorage2D(n.TEXTURE_2D,b,fe,$.width,$.height);else{let j=$.width,J=$.height;for(let ue=0;ue<b;ue++)t.texImage2D(n.TEXTURE_2D,ue,fe,j,J,0,ge,xe,null),j>>=1,J>>=1}}else if(Fe.length>0&&pe){Ve&&lt&&t.texStorage2D(n.TEXTURE_2D,b,fe,Fe[0].width,Fe[0].height);for(let j=0,J=Fe.length;j<J;j++)me=Fe[j],Ve?t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,xe,me):t.texImage2D(n.TEXTURE_2D,j,fe,ge,xe,me);T.generateMipmaps=!1}else Ve?(lt&&t.texStorage2D(n.TEXTURE_2D,b,fe,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,xe,$)):t.texImage2D(n.TEXTURE_2D,0,fe,ge,xe,$);E(T,pe)&&w(te),Me.__version=le.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ee(C,T,X){if(T.image.length!==6)return;const te=D(C,T),ne=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);const le=i.get(ne);if(ne.version!==le.__version||te===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Me=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!Me&&!de?$[j]=x(T.image[j],!1,!0,u):$[j]=de?T.image[j].image:T.image[j],$[j]=tn(T,$[j]);const pe=$[0],ge=S(pe)||a,xe=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),me=P(T.internalFormat,xe,fe,T.colorSpace),Fe=a&&T.isVideoTexture!==!0,Ve=le.__version===void 0||te===!0;let lt=y(T,pe,ge);oe(n.TEXTURE_CUBE_MAP,T,ge);let b;if(Me){Fe&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,me,pe.width,pe.height);for(let j=0;j<6;j++){b=$[j].mipmaps;for(let J=0;J<b.length;J++){const ue=b[J];T.format!==ii?xe!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,0,0,ue.width,ue.height,xe,fe,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J,me,ue.width,ue.height,0,xe,fe,ue.data)}}}else{b=T.mipmaps,Fe&&Ve&&(b.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,me,$[0].width,$[0].height));for(let j=0;j<6;j++)if(de){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,$[j].width,$[j].height,xe,fe,$[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,$[j].width,$[j].height,0,xe,fe,$[j].data);for(let J=0;J<b.length;J++){const he=b[J].image[j].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,0,0,he.width,he.height,xe,fe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,me,he.width,he.height,0,xe,fe,he.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,fe,$[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,xe,fe,$[j]);for(let J=0;J<b.length;J++){const ue=b[J];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,0,0,xe,fe,ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J+1,me,xe,fe,ue.image[j])}}}E(T,ge)&&w(n.TEXTURE_CUBE_MAP),le.__version=ne.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ae(C,T,X,te,ne){const le=s.convert(X.format,X.colorSpace),Me=s.convert(X.type),de=P(X.internalFormat,le,Me,X.colorSpace);i.get(T).__hasExternalTextures||(ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,de,T.width,T.height,T.depth,0,le,Me,null):t.texImage2D(ne,0,de,T.width,T.height,0,le,Me,null)),t.bindFramebuffer(n.FRAMEBUFFER,C),Be(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,_t(T)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(C,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=n.DEPTH_COMPONENT16;if(X||Be(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Qr?te=n.DEPTH_COMPONENT32F:ne.type===Zr&&(te=n.DEPTH_COMPONENT24));const le=_t(T);Be(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,te,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,te,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const te=_t(T);X&&Be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):Be(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],Me=s.convert(le.format,le.colorSpace),de=s.convert(le.type),$=P(le.internalFormat,Me,de,le.colorSpace),pe=_t(T);X&&Be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,T.width,T.height):Be(T)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,$,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,ne=_t(T);if(T.depthTexture.format===rs)Be(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ro)Be(T)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function _e(C){const T=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ze(T.__webglFramebuffer,C)}else if(X){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=n.createRenderbuffer(),Se(T.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Se(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(C,T,X){const te=i.get(C);T!==void 0&&ae(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),X!==void 0&&_e(C)}function Mt(C){const T=C.texture,X=i.get(C),te=i.get(T);C.addEventListener("dispose",V),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Me=S(C)||a;if(ne){X.__webglFramebuffer=[];for(let de=0;de<6;de++)X.__webglFramebuffer[de]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const de=C.texture;for(let $=0,pe=de.length;$<pe;$++){const ge=i.get(de[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Be(C)===!1){const de=le?T:[T];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<de.length;$++){const pe=de[$];X.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[$]);const ge=s.convert(pe.format,pe.colorSpace),xe=s.convert(pe.type),fe=P(pe.internalFormat,ge,xe,pe.colorSpace,C.isXRRenderTarget===!0),me=_t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,X.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T,Me);for(let de=0;de<6;de++)ae(X.__webglFramebuffer[de],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de);E(T,Me)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=C.texture;for(let $=0,pe=de.length;$<pe;$++){const ge=de[$],xe=i.get(ge);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),oe(n.TEXTURE_2D,ge,Me),ae(X.__webglFramebuffer,C,ge,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D),E(ge,Me)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,te.__webglTexture),oe(de,T,Me),ae(X.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,de),E(T,Me)&&w(de),t.unbindTexture()}C.depthBuffer&&_e(C)}function Lt(C){const T=S(C)||a,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=X.length;te<ne;te++){const le=X[te];if(E(le,T)){const Me=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(Me,de),w(Me),t.unbindTexture()}}}function Et(C){if(a&&C.samples>0&&Be(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,te=C.height;let ne=n.COLOR_BUFFER_BIT;const le=[],Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){le.push(n.COLOR_ATTACHMENT0+pe),C.depthBuffer&&le.push(Me);const ge=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ge===!1&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),$&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]),ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),$){const xe=i.get(T[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ne,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const ge=i.get(T[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function _t(C){return Math.min(d,C.samples)}function Be(C){const T=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(C){const T=o.render.frame;v.get(C)!==T&&(v.set(C,T),C.update())}function tn(C,T){const X=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.format===zd||X!==Ti&&X!==os&&(X===Ae?a===!1?e.has("EXT_sRGB")===!0&&te===ii?(C.format=zd,C.minFilter=Fn,C.generateMipmaps=!1):T=gx.sRGBToLinear(T):(te!==ii||ne!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=O,this.setTexture2DArray=re,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=be,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Be}function EC(n,e,t){const i=t.isWebGL2;function r(s,o=os){let a;if(s===hs)return n.UNSIGNED_BYTE;if(s===c1)return n.UNSIGNED_SHORT_4_4_4_4;if(s===f1)return n.UNSIGNED_SHORT_5_5_5_1;if(s===a1)return n.BYTE;if(s===l1)return n.SHORT;if(s===hx)return n.UNSIGNED_SHORT;if(s===u1)return n.INT;if(s===Zr)return n.UNSIGNED_INT;if(s===Qr)return n.FLOAT;if(s===Ba)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===d1)return n.ALPHA;if(s===ii)return n.RGBA;if(s===h1)return n.LUMINANCE;if(s===p1)return n.LUMINANCE_ALPHA;if(s===rs)return n.DEPTH_COMPONENT;if(s===Ro)return n.DEPTH_STENCIL;if(s===zd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===m1)return n.RED;if(s===_1)return n.RED_INTEGER;if(s===g1)return n.RG;if(s===v1)return n.RG_INTEGER;if(s===x1)return n.RGBA_INTEGER;if(s===Yc||s===qc||s===$c||s===Kc)if(o===Ae)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Om||s===km||s===zm||s===Bm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Om)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===km)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===y1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gm||s===Vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gm)return o===Ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hm||s===Wm||s===Xm||s===jm||s===Ym||s===qm||s===$m||s===Km||s===Zm||s===Qm||s===Jm||s===e_||s===t_||s===n_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ym)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$m)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Km)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jm)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===e_)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===t_)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===n_)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zc)return o===Ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===S1||s===i_||s===r_||s===s_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===i_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===r_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===s_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class TC extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wC={type:"move"};class Mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,i),f=this._getHandJoint(u,m);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class AC extends hn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:rs,c!==rs&&c!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===rs&&(i=Zr),i===void 0&&c===Ro&&(i=lo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1}}class RC extends Uo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const m=t.getContextAttributes();let _=null,f=null;const g=[],x=[],S=new Set,M=new Map,E=new On;E.layers.enable(1),E.viewport=new Ut;const w=new On;w.layers.enable(2),w.viewport=new Ut;const P=[E,w],y=new TC;y.layers.enable(1),y.layers.enable(2);let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=g[W];return q===void 0&&(q=new Mf,g[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=g[W];return q===void 0&&(q=new Mf,g[W]=q),q.getGripSpace()},this.getHand=function(W){let q=g[W];return q===void 0&&(q=new Mf,g[W]=q),q.getHandSpace()};function V(W){const q=x.indexOf(W.inputSource);if(q===-1)return;const ie=g[q];ie!==void 0&&(ie.update(W.inputSource,W.frame,u||o),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",F);for(let W=0;W<g.length;W++){const q=x[W];q!==null&&(x[W]=null,g[W].disconnect(q))}A=null,B=null,e.setRenderTarget(_),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",U),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),f=new ps(p.framebufferWidth,p.framebufferHeight,{format:ii,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,ie=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?Ro:rs,ie=m.stencil?lo:Zr);const D={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(D),r.updateRenderState({layers:[h]}),f=new ps(h.textureWidth,h.textureHeight,{format:ii,type:hs,depthTexture:new AC(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const we=e.properties.get(f);we.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(W){for(let q=0;q<W.removed.length;q++){const ie=W.removed[q],oe=x.indexOf(ie);oe>=0&&(x[oe]=null,g[oe].disconnect(ie))}for(let q=0;q<W.added.length;q++){const ie=W.added[q];let oe=x.indexOf(ie);if(oe===-1){for(let we=0;we<g.length;we++)if(we>=x.length){x.push(ie),oe=we;break}else if(x[we]===null){x[we]=ie,oe=we;break}if(oe===-1)break}const D=g[oe];D&&D.connect(ie)}}const k=new z,Z=new z;function H(W,q,ie){k.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const oe=k.distanceTo(Z),D=q.projectionMatrix.elements,we=ie.projectionMatrix.elements,Ee=D[14]/(D[10]-1),ae=D[14]/(D[10]+1),Se=(D[9]+1)/D[5],ze=(D[9]-1)/D[5],_e=(D[8]-1)/D[0],be=(we[8]+1)/we[0],Mt=Ee*_e,Lt=Ee*be,Et=oe/(-_e+be),_t=Et*-_e;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(Et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=Ee+Et,st=ae+Et,tn=Mt-_t,C=Lt+(oe-_t),T=Se*ae/st*Be,X=ze*ae/st*Be;W.projectionMatrix.makePerspective(tn,C,T,X,Be,st),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function L(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;y.near=w.near=E.near=W.near,y.far=w.far=E.far=W.far,(A!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,B=y.far);const q=W.parent,ie=y.cameras;L(y,q);for(let oe=0;oe<ie.length;oe++)L(ie[oe],q);ie.length===2?H(y,E,w):y.projectionMatrix.copy(E.projectionMatrix),G(W,y,q)};function G(W,q,ie){ie===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const oe=W.children;for(let D=0,we=oe.length;D<we;D++)oe[D].updateMatrixWorld(!0);W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return S};let O=null;function re(W,q){if(c=q.getViewerPose(u||o),v=q,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let oe=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let D=0;D<ie.length;D++){const we=ie[D];let Ee=null;if(p!==null)Ee=p.getViewport(we);else{const Se=d.getViewSubImage(h,we);Ee=Se.viewport,D===0&&(e.setRenderTargetTextures(f,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(f))}let ae=P[D];ae===void 0&&(ae=new On,ae.layers.enable(D),ae.viewport=new Ut,P[D]=ae),ae.matrix.fromArray(we.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(we.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),D===0&&(y.matrix.copy(ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(ae)}}for(let ie=0;ie<g.length;ie++){const oe=x[ie],D=g[ie];oe!==null&&D!==void 0&&D.update(oe,q,u||o)}if(O&&O(W,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const oe of S)q.detectedPlanes.has(oe)||(ie===null&&(ie=[]),ie.push(oe));if(ie!==null)for(const oe of ie)S.delete(oe),M.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of q.detectedPlanes)if(!S.has(oe))S.add(oe),M.set(oe,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const D=M.get(oe);oe.lastChangedTime>D&&(M.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}v=null}const Q=new Lx;Q.setAnimationLoop(re),this.setAnimationLoop=function(W){O=W},this.dispose=function(){}}}function CC(n,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,Ax(n)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,g,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),d(_,f)):f.isMeshPhongMaterial?(s(_,f),c(_,f)):f.isMeshStandardMaterial?(s(_,f),h(_,f),f.isMeshPhysicalMaterial&&p(_,f,S)):f.isMeshMatcapMaterial?(s(_,f),v(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),m(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,g,x):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Qt&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Qt&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(_.envMap.value=g,_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,g,x){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*g,_.scale.value=x*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),e.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,g){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function m(_,f){const g=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function u(g,x){let S=r[g.id];S===void 0&&(v(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",_));const M=x.program;i.updateUBOMapping(g,M);const E=e.render.frame;s[g.id]!==E&&(h(g),s[g.id]=E)}function c(g){const x=d();g.__bindingPointIndex=x;const S=n.createBuffer(),M=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,M=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=S.length;E<w;E++){const P=S[E];if(p(P,E,M)===!0){const y=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let V=0;V<A.length;V++){const U=A[V],F=m(U);typeof U=="number"?(P.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,y+B,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,B),B+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,S){const M=g.value;if(S[x]===void 0){if(typeof M=="number")S[x]=M;else{const E=Array.isArray(M)?M:[M],w=[];for(let P=0;P<E.length;P++)w.push(E[P].clone());S[x]=w}return!0}else if(typeof M=="number"){if(S[x]!==M)return S[x]=M,!0}else{const E=Array.isArray(S[x])?S[x]:[S[x]],w=Array.isArray(M)?M:[M];for(let P=0;P<E.length;P++){const y=E[P];if(y.equals(w[P])===!1)return y.copy(w[P]),!0}}return!1}function v(g){const x=g.uniforms;let S=0;const M=16;let E=0;for(let w=0,P=x.length;w<P;w++){const y=x[w],A={boundary:0,storage:0},B=Array.isArray(y.value)?y.value:[y.value];for(let V=0,U=B.length;V<U;V++){const F=B[V],k=m(F);A.boundary+=k.boundary,A.storage+=k.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,w>0){E=S%M;const V=M-E;E!==0&&V-A.boundary<0&&(S+=M-E,y.__offset=S)}S+=A.storage}return E=S%M,E>0&&(S+=M-E),g.__size=S,g.__cache={},this}function m(g){const x={boundary:0,storage:0};return typeof g=="number"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function _(g){const x=g.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function LC(){const n=Ga("canvas");return n.style.display="block",n}class Nx{constructor(e={}){const{canvas:t=LC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,v=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ae,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const f=this;let g=!1,x=0,S=0,M=null,E=-1,w=null;const P=new Ut,y=new Ut;let A=null,B=t.width,V=t.height,U=1,F=null,k=null;const Z=new Ut(0,0,B,V),H=new Ut(0,0,B,V);let L=!1;const G=new Px;let O=!1,re=!1,Q=null;const W=new Ct,q=new z,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?U:1}let D=i;function we(R,N){for(let Y=0;Y<R.length;Y++){const I=R[Y],K=t.getContext(I,N);if(K!==null)return K}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ep}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),D===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),D=we(N,R),D===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,ae,Se,ze,_e,be,Mt,Lt,Et,_t,Be,st,tn,C,T,X,te,ne,le,Me,de,$,pe,ge;function xe(){Ee=new GA(D),ae=new IA(D,Ee,e),Ee.init(ae),$=new EC(D,Ee,ae),Se=new SC(D,Ee,ae),ze=new WA(D),_e=new aC,be=new MC(D,Ee,Se,_e,ae,$,ze),Mt=new FA(f),Lt=new BA(f),Et=new tT(D,ae),pe=new DA(D,Ee,Et,ae),_t=new VA(D,Et,ze,pe),Be=new qA(D,_t,Et,ze),le=new YA(D,ae,be),X=new NA(_e),st=new oC(f,Mt,Lt,Ee,ae,pe,X),tn=new CC(f,_e),C=new uC,T=new mC(Ee,ae),ne=new bA(f,Mt,Lt,Se,Be,h,l),te=new yC(f,Be,ae),ge=new PC(D,ze,ae,Se),Me=new UA(D,Ee,ze,ae),de=new HA(D,Ee,ze,ae),ze.programs=st.programs,f.capabilities=ae,f.extensions=Ee,f.properties=_e,f.renderLists=C,f.shadowMap=te,f.state=Se,f.info=ze}xe();const fe=new RC(f,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(B,V,!1))},this.getSize=function(R){return R.set(B,V)},this.setSize=function(R,N,Y=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,V=N,t.width=Math.floor(R*U),t.height=Math.floor(N*U),Y===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(B*U,V*U).floor()},this.setDrawingBufferSize=function(R,N,Y){B=R,V=N,U=Y,t.width=Math.floor(R*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,N,Y,I){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,N,Y,I),Se.viewport(P.copy(Z).multiplyScalar(U).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,N,Y,I){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,N,Y,I),Se.scissor(y.copy(H).multiplyScalar(U).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(R){Se.setScissorTest(L=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){k=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(R=!0,N=!0,Y=!0){let I=0;R&&(I|=D.COLOR_BUFFER_BIT),N&&(I|=D.DEPTH_BUFFER_BIT),Y&&(I|=D.STENCIL_BUFFER_BIT),D.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),C.dispose(),T.dispose(),_e.dispose(),Mt.dispose(),Lt.dispose(),Be.dispose(),pe.dispose(),ge.dispose(),st.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",he),fe.removeEventListener("sessionend",We),Q&&(Q.dispose(),Q=null),Xe.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const R=ze.autoReset,N=te.enabled,Y=te.autoUpdate,I=te.needsUpdate,K=te.type;xe(),ze.autoReset=R,te.enabled=N,te.autoUpdate=Y,te.needsUpdate=I,te.type=K}function Ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const N=R.target;N.removeEventListener("dispose",lt),b(N)}function b(R){j(R),_e.remove(R)}function j(R){const N=_e.get(R).programs;N!==void 0&&(N.forEach(function(Y){st.releaseProgram(Y)}),R.isShaderMaterial&&st.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,Y,I,K,ve){N===null&&(N=ie);const ye=K.isMesh&&K.matrixWorld.determinant()<0,Te=Gx(R,N,Y,I,K);Se.setMaterial(I,ye);let Re=Y.index,Pe=1;I.wireframe===!0&&(Re=_t.getWireframeAttribute(Y),Pe=2);const Le=Y.drawRange,De=Y.attributes.position;let He=Le.start*Pe,jt=(Le.start+Le.count)*Pe;ve!==null&&(He=Math.max(He,ve.start*Pe),jt=Math.min(jt,(ve.start+ve.count)*Pe)),Re!==null?(He=Math.max(He,0),jt=Math.min(jt,Re.count)):De!=null&&(He=Math.max(He,0),jt=Math.min(jt,De.count));const jn=jt-He;if(jn<0||jn===1/0)return;pe.setup(K,I,Te,Y,Re);let Ur,dt=Me;if(Re!==null&&(Ur=Et.get(Re),dt=de,dt.setIndex(Ur)),K.isMesh)I.wireframe===!0?(Se.setLineWidth(I.wireframeLinewidth*oe()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(K.isLine){let Oe=I.linewidth;Oe===void 0&&(Oe=1),Se.setLineWidth(Oe*oe()),K.isLineSegments?dt.setMode(D.LINES):K.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else K.isPoints?dt.setMode(D.POINTS):K.isSprite&&dt.setMode(D.TRIANGLES);if(K.isInstancedMesh)dt.renderInstances(He,jn,K.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ac=Math.min(Y.instanceCount,Oe);dt.renderInstances(He,jn,ac)}else dt.render(He,jn)},this.compile=function(R,N){function Y(I,K,ve){I.transparent===!0&&I.side===Oi&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,Ja(I,K,ve),I.side=Cr,I.needsUpdate=!0,Ja(I,K,ve),I.side=Oi):Ja(I,K,ve)}v=T.get(R),v.init(),_.push(v),R.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(v.pushLight(I),I.castShadow&&v.pushShadow(I))}),v.setupLights(f.useLegacyLights),R.traverse(function(I){const K=I.material;if(K)if(Array.isArray(K))for(let ve=0;ve<K.length;ve++){const ye=K[ve];Y(ye,R,I)}else Y(K,R,I)}),_.pop(),v=null};let J=null;function ue(R){J&&J(R)}function he(){Xe.stop()}function We(){Xe.start()}const Xe=new Lx;Xe.setAnimationLoop(ue),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(R){J=R,fe.setAnimationLoop(R),R===null?Xe.stop():Xe.start()},fe.addEventListener("sessionstart",he),fe.addEventListener("sessionend",We),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,N,M),v=T.get(R,_.length),v.init(),_.push(v),W.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(W),re=this.localClippingEnabled,O=X.init(this.clippingPlanes,re),p=C.get(R,m.length),p.init(),m.push(p),Ft(R,N,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(F,k),O===!0&&X.beginShadows();const Y=v.state.shadowsArray;if(te.render(Y,R,N),O===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,R),v.setupLights(f.useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let K=0,ve=I.length;K<ve;K++){const ye=I[K];Ki(p,R,ye,ye.viewport)}}else Ki(p,R,N);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(f,R,N),pe.resetDefaultState(),E=-1,w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Ft(R,N,Y,I){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){I&&q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(W);const ye=Be.update(R),Te=R.material;Te.visible&&p.push(R,ye,Te,Y,q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==ze.render.frame&&(R.skeleton.update(),R.skeleton.frame=ze.render.frame);const ye=Be.update(R),Te=R.material;if(I&&(ye.boundingSphere===null&&ye.computeBoundingSphere(),q.copy(ye.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(W)),Array.isArray(Te)){const Re=ye.groups;for(let Pe=0,Le=Re.length;Pe<Le;Pe++){const De=Re[Pe],He=Te[De.materialIndex];He&&He.visible&&p.push(R,ye,He,Y,q.z,De)}}else Te.visible&&p.push(R,ye,Te,Y,q.z,null)}}const ve=R.children;for(let ye=0,Te=ve.length;ye<Te;ye++)Ft(ve[ye],N,Y,I)}function Ki(R,N,Y,I){const K=R.opaque,ve=R.transmissive,ye=R.transparent;v.setupLightsView(Y),O===!0&&X.setGlobalState(f.clippingPlanes,Y),ve.length>0&&ut(K,ve,N,Y),I&&Se.viewport(P.copy(I)),K.length>0&&Ln(K,N,Y),ve.length>0&&Ln(ve,N,Y),ye.length>0&&Ln(ye,N,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ut(R,N,Y,I){if(Q===null){const Te=ae.isWebGL2;Q=new ps(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ba:hs,minFilter:za,samples:Te&&a===!0?4:0})}const K=f.getRenderTarget();f.setRenderTarget(Q),f.clear();const ve=f.toneMapping;f.toneMapping=Gi,Ln(R,Y,I),be.updateMultisampleRenderTarget(Q),be.updateRenderTargetMipmap(Q);let ye=!1;for(let Te=0,Re=N.length;Te<Re;Te++){const Pe=N[Te],Le=Pe.object,De=Pe.geometry,He=Pe.material,jt=Pe.group;if(He.side===Oi&&Le.layers.test(I.layers)){const jn=He.side;He.side=Qt,He.needsUpdate=!0,ui(Le,Y,I,De,He,jt),He.side=jn,He.needsUpdate=!0,ye=!0}}ye===!0&&(be.updateMultisampleRenderTarget(Q),be.updateRenderTargetMipmap(Q)),f.setRenderTarget(K),f.toneMapping=ve}function Ln(R,N,Y){const I=N.isScene===!0?N.overrideMaterial:null;for(let K=0,ve=R.length;K<ve;K++){const ye=R[K],Te=ye.object,Re=ye.geometry,Pe=I===null?ye.material:I,Le=ye.group;Te.layers.test(Y.layers)&&ui(Te,N,Y,Re,Pe,Le)}}function ui(R,N,Y,I,K,ve){R.onBeforeRender(f,N,Y,I,K,ve),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(f,N,Y,I,R,ve),K.transparent===!0&&K.side===Oi&&K.forceSinglePass===!1?(K.side=Qt,K.needsUpdate=!0,f.renderBufferDirect(Y,N,I,K,R,ve),K.side=Cr,K.needsUpdate=!0,f.renderBufferDirect(Y,N,I,K,R,ve),K.side=Oi):f.renderBufferDirect(Y,N,I,K,R,ve),R.onAfterRender(f,N,Y,I,K,ve)}function Ja(R,N,Y){N.isScene!==!0&&(N=ie);const I=_e.get(R),K=v.state.lights,ve=v.state.shadowsArray,ye=K.state.version,Te=st.getParameters(R,K.state,ve,N,Y),Re=st.getProgramCacheKey(Te);let Pe=I.programs;I.environment=R.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(R.isMeshStandardMaterial?Lt:Mt).get(R.envMap||I.environment),Pe===void 0&&(R.addEventListener("dispose",lt),Pe=new Map,I.programs=Pe);let Le=Pe.get(Re);if(Le!==void 0){if(I.currentProgram===Le&&I.lightsStateVersion===ye)return ip(R,Te),Le}else Te.uniforms=st.getUniforms(R),R.onBuild(Y,Te,f),R.onBeforeCompile(Te,f),Le=st.acquireProgram(Te,Re),Pe.set(Re,Le),I.uniforms=Te.uniforms;const De=I.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=X.uniform),ip(R,Te),I.needsLights=Hx(R),I.lightsStateVersion=ye,I.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix);const He=Le.getUniforms(),jt=nu.seqWithValue(He.seq,De);return I.currentProgram=Le,I.uniformsList=jt,Le}function ip(R,N){const Y=_e.get(R);Y.outputColorSpace=N.outputColorSpace,Y.instancing=N.instancing,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Gx(R,N,Y,I,K){N.isScene!==!0&&(N=ie),be.resetTextureUnits();const ve=N.fog,ye=I.isMeshStandardMaterial?N.environment:null,Te=M===null?f.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ti,Re=(I.isMeshStandardMaterial?Lt:Mt).get(I.envMap||ye),Pe=I.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Le=!!I.normalMap&&!!Y.attributes.tangent,De=!!Y.morphAttributes.position,He=!!Y.morphAttributes.normal,jt=!!Y.morphAttributes.color,jn=I.toneMapped?f.toneMapping:Gi,Ur=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=Ur!==void 0?Ur.length:0,Oe=_e.get(I),ac=v.state.lights;if(O===!0&&(re===!0||R!==w)){const _n=R===w&&I.id===E;X.setState(I,R,_n)}let Tt=!1;I.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ac.state.version||Oe.outputColorSpace!==Te||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Re||I.fog===!0&&Oe.fog!==ve||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==X.numPlanes||Oe.numIntersection!==X.numIntersection)||Oe.vertexAlphas!==Pe||Oe.vertexTangents!==Le||Oe.morphTargets!==De||Oe.morphNormals!==He||Oe.morphColors!==jt||Oe.toneMapping!==jn||ae.isWebGL2===!0&&Oe.morphTargetsCount!==dt)&&(Tt=!0):(Tt=!0,Oe.__version=I.version);let Ir=Oe.currentProgram;Tt===!0&&(Ir=Ja(I,N,K));let rp=!1,No=!1,lc=!1;const Yt=Ir.getUniforms(),Nr=Oe.uniforms;if(Se.useProgram(Ir.program)&&(rp=!0,No=!0,lc=!0),I.id!==E&&(E=I.id,No=!0),rp||w!==R){if(Yt.setValue(D,"projectionMatrix",R.projectionMatrix),ae.logarithmicDepthBuffer&&Yt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),w!==R&&(w=R,No=!0,lc=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const _n=Yt.map.cameraPosition;_n!==void 0&&_n.setValue(D,q.setFromMatrixPosition(R.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Yt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||K.isSkinnedMesh)&&Yt.setValue(D,"viewMatrix",R.matrixWorldInverse)}if(K.isSkinnedMesh){Yt.setOptional(D,K,"bindMatrix"),Yt.setOptional(D,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(ae.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Yt.setValue(D,"boneTexture",_n.boneTexture,be),Yt.setValue(D,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const uc=Y.morphAttributes;if((uc.position!==void 0||uc.normal!==void 0||uc.color!==void 0&&ae.isWebGL2===!0)&&le.update(K,Y,Ir),(No||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,Yt.setValue(D,"receiveShadow",K.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Nr.envMap.value=Re,Nr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),No&&(Yt.setValue(D,"toneMappingExposure",f.toneMappingExposure),Oe.needsLights&&Vx(Nr,lc),ve&&I.fog===!0&&tn.refreshFogUniforms(Nr,ve),tn.refreshMaterialUniforms(Nr,I,U,V,Q),nu.upload(D,Oe.uniformsList,Nr,be)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(nu.upload(D,Oe.uniformsList,Nr,be),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Yt.setValue(D,"center",K.center),Yt.setValue(D,"modelViewMatrix",K.modelViewMatrix),Yt.setValue(D,"normalMatrix",K.normalMatrix),Yt.setValue(D,"modelMatrix",K.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const _n=I.uniformsGroups;for(let cc=0,Wx=_n.length;cc<Wx;cc++)if(ae.isWebGL2){const sp=_n[cc];ge.update(sp,Ir),ge.bind(sp,Ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ir}function Vx(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function Hx(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,N,Y){_e.get(R.texture).__webglTexture=N,_e.get(R.depthTexture).__webglTexture=Y;const I=_e.get(R);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=Y===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,N){const Y=_e.get(R);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,Y=0){M=R,x=N,S=Y;let I=!0,K=null,ve=!1,ye=!1;if(R){const Re=_e.get(R);Re.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),I=!1):Re.__webglFramebuffer===void 0?be.setupRenderTarget(R):Re.__hasExternalTextures&&be.rebindTextures(R,_e.get(R.texture).__webglTexture,_e.get(R.depthTexture).__webglTexture);const Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);const Le=_e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(K=Le[N],ve=!0):ae.isWebGL2&&R.samples>0&&be.useMultisampledRTT(R)===!1?K=_e.get(R).__webglMultisampledFramebuffer:K=Le,P.copy(R.viewport),y.copy(R.scissor),A=R.scissorTest}else P.copy(Z).multiplyScalar(U).floor(),y.copy(H).multiplyScalar(U).floor(),A=L;if(Se.bindFramebuffer(D.FRAMEBUFFER,K)&&ae.drawBuffers&&I&&Se.drawBuffers(R,K),Se.viewport(P),Se.scissor(y),Se.setScissorTest(A),ve){const Re=_e.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,Y)}else if(ye){const Re=_e.get(R.texture),Pe=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Pe)}E=-1},this.readRenderTargetPixels=function(R,N,Y,I,K,ve,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Se.bindFramebuffer(D.FRAMEBUFFER,Te);try{const Re=R.texture,Pe=Re.format,Le=Re.type;if(Pe!==ii&&$.convert(Pe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ba&&(Ee.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==hs&&$.convert(Le)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Qr&&(ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-I&&Y>=0&&Y<=R.height-K&&D.readPixels(N,Y,I,K,$.convert(Pe),$.convert(Le),ve)}finally{const Re=M!==null?_e.get(M).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(R,N,Y=0){const I=Math.pow(2,-Y),K=Math.floor(N.image.width*I),ve=Math.floor(N.image.height*I);be.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,R.x,R.y,K,ve),Se.unbindTexture()},this.copyTextureToTexture=function(R,N,Y,I=0){const K=N.image.width,ve=N.image.height,ye=$.convert(Y.format),Te=$.convert(Y.type);be.setTexture2D(Y,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,R.x,R.y,K,ve,ye,Te,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,R.x,R.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,I,R.x,R.y,ye,Te,N.image),I===0&&Y.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,N,Y,I,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=R.max.x-R.min.x+1,ye=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,Re=$.convert(I.format),Pe=$.convert(I.type);let Le;if(I.isData3DTexture)be.setTexture3D(I,0),Le=D.TEXTURE_3D;else if(I.isDataArrayTexture)be.setTexture2DArray(I,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const De=D.getParameter(D.UNPACK_ROW_LENGTH),He=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),jn=D.getParameter(D.UNPACK_SKIP_ROWS),Ur=D.getParameter(D.UNPACK_SKIP_IMAGES),dt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?D.texSubImage3D(Le,K,N.x,N.y,N.z,ve,ye,Te,Re,Pe,dt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Le,K,N.x,N.y,N.z,ve,ye,Te,Re,dt.data)):D.texSubImage3D(Le,K,N.x,N.y,N.z,ve,ye,Te,Re,Pe,dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,De),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,jn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ur),K===0&&I.generateMipmaps&&D.generateMipmap(Le),Se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?be.setTextureCube(R,0):R.isData3DTexture?be.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?be.setTexture2DArray(R,0):be.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){x=0,S=0,M=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?ss:px}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?Ae:Ti}}class bC extends Nx{}bC.prototype.isWebGL1Renderer=!0;class DC extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Fx extends Za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const j_=new Ct,Vd=new yx,zl=new ic,Bl=new z;class UC extends pn{constructor(e=new wi,t=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;j_.copy(r).invert(),Vd.copy(e.ray).applyMatrix4(j_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,m=p;v<m;v++){const _=u.getX(v);Bl.fromBufferAttribute(d,_),Y_(Bl,_,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,m=p;v<m;v++)Bl.fromBufferAttribute(d,v),Y_(Bl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Y_(n,e,t,i,r,s,o){const a=Vd.distanceSqToPoint(n);if(a<t){const l=new z;Vd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Nu extends wi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new z,h=new z,p=[],v=[],m=[],_=[];for(let f=0;f<=i;f++){const g=[],x=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const E=M/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),_.push(E+S,1-x),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const x=c[f][g+1],S=c[f][g],M=c[f+1][g],E=c[f+1][g+1];(f!==0||o>0)&&p.push(x,S,E),(f!==i-1||l<Math.PI)&&p.push(S,M,E)}this.setIndex(p),this.setAttribute("position",new ai(v,3)),this.setAttribute("normal",new ai(m,3)),this.setAttribute("uv",new ai(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const q_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class IC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],v=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const NC=new IC;class Ox{constructor(e){this.manager=e!==void 0?e:NC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class FC extends Ox{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=q_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ga("img");function l(){c(),q_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class OC extends Ox{constructor(e){super(e)}load(e,t,i,r){const s=new hn,o=new FC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);const kC="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",zC="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0,0,1));vec3 atmosphere=vec3(.3,.6,1)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1);}",BC="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",GC="varying vec3 vertexNormal;void main(){float dotProduct=dot(vertexNormal,vec3(0,0,1));float intensity=pow(.8-dotProduct,2.);gl_FragColor=vec4(.3,.6,1,1)*intensity;}";function VC(){const n=Er.useRef();return Er.useEffect(()=>{const e=new DC,t=new On(75,innerWidth/innerHeight,.1,1e3),i=new Nx({antialias:!0});i.setSize(innerWidth,innerHeight),i.setPixelRatio(window.devicePixelRatio),n.current.appendChild(i.domElement);const r=new gi(new Nu(5,50,50),new qi({vertexShader:kC,fragmentShader:zC,uniforms:{globeTexture:{value:new OC().load("./assets/earth_map.jpeg")}}})),s=new gi(new Nu(5,50,50),new qi({vertexShader:BC,fragmentShader:GC,blending:Ud,side:Qt}));s.scale.set(1.1,1.1,1.1),e.add(s);const o=new na;o.add(r),e.add(o);const a=new wi,l=new Fx({color:16777215}),u=[];for(let p=0;p<1e4;p++){const v=(Math.random()-.5)*2e3,m=(Math.random()-.5)*2e3,_=-Math.random()*4500;u.push(v,m,_)}a.setAttribute("position",new ai(u,3));const c=new UC(a,l);e.add(c),t.position.z=15;const d={x:0,y:0};addEventListener("mousemove",()=>{d.x=event.clientX/innerWidth*2-1,d.y=-(event.clientY/innerHeight)*2+1});const h=()=>{requestAnimationFrame(h),i.render(e,t),r.rotation.y+=.003,ax.to(o.rotation,{x:-d.y*.3,y:d.x*.5,duration:2})};h()},[]),or.jsx("div",{className:"Space",children:or.jsx("div",{ref:n})})}var kx={},Po={};Object.defineProperty(Po,"__esModule",{value:!0});Po.cssValue=Po.parseLengthAndUnit=void 0;var HC={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function zx(n){if(typeof n=="number")return{value:n,unit:"px"};var e,t=(n.match(/^[0-9.]*/)||"").toString();t.includes(".")?e=parseFloat(t):e=parseInt(t,10);var i=(n.match(/[^0-9]*$/)||"").toString();return HC[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}Po.parseLengthAndUnit=zx;function WC(n){var e=zx(n);return"".concat(e.value).concat(e.unit)}Po.cssValue=WC;var oc={};Object.defineProperty(oc,"__esModule",{value:!0});oc.createAnimation=void 0;var XC=function(n,e,t){var i="react-spinners-".concat(n,"-").concat(t);if(typeof window>"u"||!window.document)return i;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,o=`
    @keyframes `.concat(i,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),i};oc.createAnimation=XC;var Fu=Mi&&Mi.__assign||function(){return Fu=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Fu.apply(this,arguments)},jC=Mi&&Mi.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),YC=Mi&&Mi.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),qC=Mi&&Mi.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&jC(e,n,t);return YC(e,n),e},$C=Mi&&Mi.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};Object.defineProperty(kx,"__esModule",{value:!0});var Ef=qC(Er),Tf=Po,Bx=oc,KC=(0,Bx.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),ZC=(0,Bx.createAnimation)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function QC(n){var e=n.loading,t=e===void 0?!0:e,i=n.color,r=i===void 0?"#000000":i,s=n.speedMultiplier,o=s===void 0?1:s,a=n.cssOverride,l=a===void 0?{}:a,u=n.size,c=u===void 0?60:u,d=$C(n,["loading","color","speedMultiplier","cssOverride","size"]),h=(0,Tf.parseLengthAndUnit)(c),p=h.value,v=h.unit,m=Fu({display:"inherit",width:(0,Tf.cssValue)(c),height:(0,Tf.cssValue)(c),position:"relative"},l),_=function(f){return{position:"absolute",top:"0",left:"0",width:"".concat(p).concat(v),height:"".concat(p).concat(v),border:"".concat(p/10).concat(v," solid ").concat(r),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(f===1?KC:ZC," ").concat(2/o,"s 0s infinite linear")}};return t?Ef.createElement("span",Fu({style:m},d),Ef.createElement("span",{style:_(1)}),Ef.createElement("span",{style:_(2)})):null}var JC=kx.default=QC;function eP(){const[n,e]=Er.useState(!1);return Er.useEffect(()=>{e(!0),setTimeout(()=>{e(!1)},1500)},[]),or.jsx("div",{className:"App",children:n?or.jsx("div",{className:"Loader",children:or.jsx(JC,{color:"#c7e2fe",loading:n,size:30})}):or.jsx(VC,{})})}wf.createRoot(document.getElementById("root")).render(or.jsx(ay.StrictMode,{children:or.jsx(eP,{})}));
