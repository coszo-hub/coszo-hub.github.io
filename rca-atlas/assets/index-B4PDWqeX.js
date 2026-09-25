var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N={current:null},P={transition:null},te={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:P,ReactCurrentOwner:C};function ne(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,e.act=ne,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ee}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},e.unstable_act=ne,e.useCallback=function(e,t){return N.current.useCallback(e,t)},e.useContext=function(e){return N.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return N.current.useDeferredValue(e)},e.useEffect=function(e,t){return N.current.useEffect(e,t)},e.useId=function(){return N.current.useId()},e.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return N.current.useMemo(e,t)},e.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},e.useRef=function(e){return N.current.useRef(e)},e.useState=function(e){return N.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return N.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,M(x);else{var t=n(l);t!==null&&ee(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ee(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function M(e){C=e,S||(S=!0,k())}function ee(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,M(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ee(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,M(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),N=Symbol.for(`react.memo`),P=Symbol.for(`react.lazy`),te=Symbol.for(`react.offscreen`),ne=Symbol.iterator;function F(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var I=Object.assign,L;function R(e){if(L===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||``}return`
`+L+e}var z=!1;function B(e,t){if(!e||z)return``;z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?R(e):``}function re(e){switch(e.tag){case 5:return R(e.type);case 16:return R(`Lazy`);case 13:return R(`Suspense`);case 19:return R(`SuspenseList`);case 0:case 2:case 15:return e=B(e.type,!1),e;case 11:return e=B(e.type.render,!1),e;case 1:return e=B(e.type,!0),e;default:return``}}function ie(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case M:return`Suspense`;case ee:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case N:return t=e.displayName||null,t===null?ie(e.type)||`Memo`:t;case P:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ie(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function oe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ce(e){var t=se(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function le(e){e._valueTracker||=ce(e)}function V(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=se(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function ue(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function de(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=oe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function H(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function pe(e,t){H(e,t);var n=oe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?U(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&U(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function me(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function U(e,t,n){(t!==`number`||ue(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var he=Array.isArray;function W(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+oe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function G(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return I({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function ge(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(he(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:oe(n)}}function _e(e,t){var n=oe(t.value),r=oe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function ve(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function ye(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function be(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?ye(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var xe,Se=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(xe||=document.createElement(`div`),xe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=xe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(we).forEach(function(e){Te.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),we[t]=we[e]})});function Ee(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||we.hasOwnProperty(e)&&we[e]?(``+t).trim():t+`px`}function De(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ee(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Oe=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(e,t){if(t){if(Oe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ae(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var je=null;function Me(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ne=null,Pe=null,Fe=null;function Ie(e){if(e=Ni(e)){if(typeof Ne!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Fi(t),Ne(e.stateNode,e.type,t))}}function Le(e){Pe?Fe?Fe.push(e):Fe=[e]:Pe=e}function Re(){if(Pe){var e=Pe,t=Fe;if(Fe=Pe=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function ze(e,t){return e(t)}function Be(){}var Ve=!1;function He(e,t,n){if(Ve)return e(t,n);Ve=!0;try{return ze(e,t,n)}finally{Ve=!1,(Pe!==null||Fe!==null)&&(Be(),Re())}}function Ue(e,t){var n=e.stateNode;if(n===null)return null;var i=Fi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var We=!1;if(c)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){We=!0}}),window.addEventListener(`test`,Ge,Ge),window.removeEventListener(`test`,Ge,Ge)}catch{We=!1}function Ke(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var qe=!1,Je=null,Ye=!1,Xe=null,Ze={onError:function(e){qe=!0,Je=e}};function Qe(e,t,n,r,i,a,o,s,c){qe=!1,Je=null,Ke.apply(Ze,arguments)}function $e(e,t,n,i,a,o,s,c,l){if(Qe.apply(this,arguments),qe){if(qe){var u=Je;qe=!1,Je=null}else throw Error(r(198));Ye||(Ye=!0,Xe=u)}}function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nt(e){if(et(e)!==e)throw Error(r(188))}function rt(e){var t=e.alternate;if(!t){if(t=et(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return nt(a),e;if(o===i)return nt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function it(e){return e=rt(e),e===null?null:at(e)}function at(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=at(e);if(t!==null)return t;e=e.sibling}return null}var ot=n.unstable_scheduleCallback,st=n.unstable_cancelCallback,ct=n.unstable_shouldYield,lt=n.unstable_requestPaint,ut=n.unstable_now,dt=n.unstable_getCurrentPriorityLevel,ft=n.unstable_ImmediatePriority,pt=n.unstable_UserBlockingPriority,mt=n.unstable_NormalPriority,ht=n.unstable_LowPriority,gt=n.unstable_IdlePriority,_t=null,vt=null;function yt(e){if(vt&&typeof vt.onCommitFiberRoot==`function`)try{vt.onCommitFiberRoot(_t,e,void 0,(e.current.flags&128)==128)}catch{}}var bt=Math.clz32?Math.clz32:Ct,xt=Math.log,St=Math.LN2;function Ct(e){return e>>>=0,e===0?32:31-(xt(e)/St|0)|0}var wt=64,Tt=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Et(a))):r=Et(s)}else o=n&~i,o===0?a!==0&&(r=Et(a)):r=Et(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ot(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-bt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function At(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function jt(){var e=wt;return wt<<=1,!(wt&4194240)&&(wt=64),e}function Mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Pt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function q(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var It,Lt,Rt,zt,Bt,Vt=!1,Ht=[],Ut=null,Wt=null,Gt=null,Kt=new Map,qt=new Map,Jt=[],Yt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function Xt(e,t){switch(e){case`focusin`:case`focusout`:Ut=null;break;case`dragenter`:case`dragleave`:Wt=null;break;case`mouseover`:case`mouseout`:Gt=null;break;case`pointerover`:case`pointerout`:Kt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:qt.delete(t.pointerId)}}function Zt(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Lt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qt(e,t,n,r,i){switch(t){case`focusin`:return Ut=Zt(Ut,e,t,n,r,i),!0;case`dragenter`:return Wt=Zt(Wt,e,t,n,r,i),!0;case`mouseover`:return Gt=Zt(Gt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Kt.set(a,Zt(Kt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,qt.set(a,Zt(qt.get(a)||null,e,t,n,r,i)),!0}return!1}function $t(e){var t=Mi(e.target);if(t!==null){var n=et(t);if(n!==null){if(t=n.tag,t===13){if(t=tt(n),t!==null){e.blockedOn=t,Bt(e.priority,function(){Rt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function en(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Y(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);je=r,n.target.dispatchEvent(r),je=null}else return t=Ni(n),t!==null&&Lt(t),e.blockedOn=n,!1;t.shift()}return!0}function tn(e,t,n){en(e)&&n.delete(t)}function nn(){Vt=!1,Ut!==null&&en(Ut)&&(Ut=null),Wt!==null&&en(Wt)&&(Wt=null),Gt!==null&&en(Gt)&&(Gt=null),Kt.forEach(tn),qt.forEach(tn)}function rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nn)))}function an(e){function t(t){return rn(t,e)}if(0<Ht.length){rn(Ht[0],e);for(var n=1;n<Ht.length;n++){var r=Ht[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&rn(Ut,e),Wt!==null&&rn(Wt,e),Gt!==null&&rn(Gt,e),Kt.forEach(t),qt.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)$t(n),n.blockedOn===null&&Jt.shift()}var J=C.ReactCurrentBatchConfig,on=!0;function sn(e,t,n,r){var i=K,a=J.transition;J.transition=null;try{K=1,ln(e,t,n,r)}finally{K=i,J.transition=a}}function cn(e,t,n,r){var i=K,a=J.transition;J.transition=null;try{K=4,ln(e,t,n,r)}finally{K=i,J.transition=a}}function ln(e,t,n,r){if(on){var i=Y(e,t,n,r);if(i===null)ii(e,t,r,un,n),Xt(e,r);else if(Qt(i,e,t,n,r))r.stopPropagation();else if(Xt(e,r),t&4&&-1<Yt.indexOf(e)){for(;i!==null;){var a=Ni(i);if(a!==null&&It(a),a=Y(e,t,n,r),a===null&&ii(e,t,r,un,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var un=null;function Y(e,t,n,r){if(un=null,e=Me(r),e=Mi(e),e!==null){if(t=et(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return un=e,null}function dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(dt()){case ft:return 1;case pt:return 4;case mt:case ht:return 16;case gt:return 536870912;default:return 16}default:return 16}}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=I({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=I({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(I({},Dn,{dataTransfer:0})),An=yn(I({},Sn,{relatedTarget:0})),jn=yn(I({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(I({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(I({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(I({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(I({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(I({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(I({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(I({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=[9,13,27,32],Gn=c&&`CompositionEvent`in window,Kn=null;c&&`documentMode`in document&&(Kn=document.documentMode);var qn=c&&`TextEvent`in window&&!Kn,Jn=c&&(!Gn||Kn&&8<Kn&&11>=Kn),Yn=` `,Xn=!1;function Zn(e,t){switch(e){case`keyup`:return Wn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var $n=!1;function er(e,t){switch(e){case`compositionend`:return Qn(t);case`keypress`:return t.which===32?(Xn=!0,Yn):null;case`textInput`:return e=t.data,e===Yn&&Xn?null:e;default:return null}}function tr(e,t){if($n)return e===`compositionend`||!Gn&&Zn(e,t)?(e=hn(),mn=pn=fn=null,$n=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Jn&&t.locale!==`ko`?null:t.data;default:return null}}var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!nr[e.type]:t===`textarea`}function ir(e,t,n,r){Le(r),t=oi(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){Qr(e,0)}function cr(e){if(V(Pi(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(c){var dr;if(c){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){ar&&(ar.detachEvent(`onpropertychange`,hr),or=ar=null)}function hr(e){if(e.propertyName===`value`&&cr(or)){var t=[];ir(t,or,e,Me(e)),He(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),ar=t,or=n,ar.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(or)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(){for(var e=window,t=ue();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ue(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Or(e){var t=Er(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tr(n.ownerDocument.documentElement,n)){if(r!==null&&Dr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=wr(n,a);var o=wr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kr=c&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==ue(r)||(r=Ar,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Sr(Mr,r)||(Mr=r,r=oi(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};c&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionend`),Wr=new Map,Gr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Kr(e,t){Wr.set(e,t),o(t,[e])}for(var qr=0;qr<Gr.length;qr++){var Jr=Gr[qr];Kr(Jr.toLowerCase(),`on`+(Jr[0].toUpperCase()+Jr.slice(1)))}Kr(Br,`onAnimationEnd`),Kr(Vr,`onAnimationIteration`),Kr(Hr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Ur,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Yr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Xr=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Yr));function Zr(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,$e(r,t,void 0,e),e.currentTarget=null}function Qr(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function $r(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+`__bubble`;n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti=`_reactListening`+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,i.forEach(function(t){t!==`selectionchange`&&(Xr.has(t)||ei(t,!1,e),ei(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,ei(`selectionchange`,!1,t))}}function ri(e,t,n,r){switch(dn(t)){case 1:var i=sn;break;case 4:i=cn;break;default:i=ln}n=i.bind(null,t,n,e),i=void 0,!We||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ii(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}He(function(){var r=a,i=Me(n),o=[];a:{var s=Wr.get(e);if(s!==void 0){var c=xn,l=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:c=zn;break;case`focusin`:l=`focus`,c=An;break;case`focusout`:l=`blur`,c=An;break;case`beforeblur`:case`afterblur`:c=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Vn;break;case Br:case Vr:case Hr:c=jn;break;case Ur:c=Hn;break;case`scroll`:c=Cn;break;case`wheel`:c=Un;break;case`copy`:case`cut`:case`paste`:c=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Bn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ue(p,f),h!=null&&u.push(ai(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==je&&(l=n.relatedTarget||n.fromElement)&&(Mi(l)||l[Oi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mi(l):null,l!==null&&(d=et(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=On,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Bn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Pi(c),m=l==null?s:Pi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Mi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=si(m))p++;for(m=0,h=f;h;h=si(h))m++;for(;0<p-m;)u=si(u),p--;for(;0<m-p;)f=si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=si(u),f=si(f)}u=null}else u=null;c!==null&&ci(o,s,c,u,!1),l!==null&&d!==null&&ci(o,d,l,u,!0)}}a:{if(s=r?Pi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=lr;else if(rr(s)){if(ur)g=yr;else{g=_r;var _=gr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=vr);if(g&&=g(e,r)){ir(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&U(s,`number`,s.value)}switch(_=r?Pi(r):window,e){case`focusin`:(rr(_)||_.contentEditable===`true`)&&(Ar=_,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(o,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(o,n,i)}var v;if(Gn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else $n?Zn(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(Jn&&n.locale!==`ko`&&($n||y!==`onCompositionStart`?y===`onCompositionEnd`&&$n&&(v=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,$n=!0)),_=oi(r,y),0<_.length&&(y=new Nn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=Qn(n),v!==null&&(y.data=v)))),(v=qn?er(e,n):tr(e,n))&&(r=oi(r,`onBeforeInput`),0<r.length&&(i=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}Qr(o,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ue(e,n),a!=null&&r.unshift(ai(e,a,i)),a=Ue(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ue(n,a),c!=null&&o.unshift(ai(n,c,s))):i||(c=Ue(n,a),c!=null&&o.push(ai(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return(typeof e==`string`?e:``+e).replace(li,`
`).replace(ui,``)}function fi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(r(425))}function pi(){}var mi=null,hi=null;function gi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout==`function`?setTimeout:void 0,vi=typeof clearTimeout==`function`?clearTimeout:void 0,yi=typeof Promise==`function`?Promise:void 0,bi=typeof queueMicrotask==`function`?queueMicrotask:yi===void 0?_i:function(e){return yi.resolve(null).then(e).catch(xi)};function xi(e){setTimeout(function(){throw e})}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),an(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);an(t)}function Ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ei=`__reactFiber$`+Ti,Di=`__reactProps$`+Ti,Oi=`__reactContainer$`+Ti,ki=`__reactEvents$`+Ti,Ai=`__reactListeners$`+Ti,ji=`__reactHandles$`+Ti;function Mi(e){var t=e[Ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oi]||n[Ei]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Ei])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[Ei]||e[Oi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Fi(e){return e[Di]||null}var Ii=[],Li=-1;function Ri(e){return{current:e}}function zi(e){0>Li||(e.current=Ii[Li],Ii[Li]=null,Li--)}function X(e,t){Li++,Ii[Li]=e.current,e.current=t}var Z={},Bi=Ri(Z),Vi=Ri(!1),Hi=Z;function Ui(e,t){var n=e.type.contextTypes;if(!n)return Z;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wi(e){return e=e.childContextTypes,e!=null}function Gi(){zi(Vi),zi(Bi)}function Ki(e,t,n){if(Bi.current!==Z)throw Error(r(168));X(Bi,t),X(Vi,n)}function qi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ae(e)||`Unknown`,a));return I({},n,i)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Z,Hi=Bi.current,X(Bi,e),X(Vi,Vi.current),!0}function Yi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=qi(e,t,Hi),i.__reactInternalMemoizedMergedChildContext=e,zi(Vi),zi(Bi),X(Bi,e)):zi(Vi),X(Vi,n)}var Xi=null,Zi=!1,Qi=!1;function $i(e){Xi===null?Xi=[e]:Xi.push(e)}function ea(e){Zi=!0,$i(e)}function ta(){if(!Qi&&Xi!==null){Qi=!0;var e=0,t=K;try{var n=Xi;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xi=null,Zi=!1}catch(t){throw Xi!==null&&(Xi=Xi.slice(e+1)),ot(ft,ta),t}finally{K=t,Qi=!1}}return null}var na=[],ra=0,ia=null,aa=0,oa=[],sa=0,ca=null,la=1,ua=``;function da(e,t){na[ra++]=aa,na[ra++]=ia,ia=e,aa=t}function fa(e,t,n){oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,ca=e;var r=la;e=ua;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,la=1<<32-bt(t)+i|n<<i|r,ua=a+e}else la=1<<a|n<<i|r,ua=e}function pa(e){e.return!==null&&(da(e,1),fa(e,1,0))}function ma(e){for(;e===ia;)ia=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null;for(;e===ca;)ca=oa[--sa],oa[sa]=null,ua=oa[--sa],oa[sa]=null,la=oa[--sa],oa[sa]=null}var ha=null,ga=null,_a=!1,va=null;function ya(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,ha=e,ga=Ci(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,ha=e,ga=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ca===null?null:{id:la,overflow:ua},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ha=e,ga=null,!0);default:return!1}}function xa(e){return!!(e.mode&1)&&!(e.flags&128)}function Sa(e){if(_a){var t=ga;if(t){var n=t;if(!ba(e,t)){if(xa(e))throw Error(r(418));t=Ci(n.nextSibling);var i=ha;t&&ba(e,t)?ya(i,n):(e.flags=e.flags&-4097|2,_a=!1,ha=e)}}else{if(xa(e))throw Error(r(418));e.flags=e.flags&-4097|2,_a=!1,ha=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ha=e}function wa(e){if(e!==ha)return!1;if(!_a)return Ca(e),_a=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!gi(e.type,e.memoizedProps)),t&&=ga){if(xa(e))throw Ta(),Error(r(418));for(;t;)ya(e,t),t=Ci(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ga=Ci(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ga=null}}else ga=ha?Ci(e.stateNode.nextSibling):null;return!0}function Ta(){for(var e=ga;e;)e=Ci(e.nextSibling)}function Ea(){ga=ha=null,_a=!1}function Da(e){va===null?va=[e]:va.push(e)}var Oa=C.ReactCurrentBatchConfig;function ka(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function ja(e){var t=e._init;return t(e._payload)}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Xl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===P&&ja(i)===t.type)?(r=a(t,n.props),r.ref=ka(e,t,n),r.return=e,r):(r=Zl(n.type,n.key,n.props,null,e.mode,r),r.ref=ka(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ql(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=eu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Zl(t.type,t.key,t.props,null,e.mode,n),n.ref=ka(e,null,t),n.return=e,n;case T:return t=tu(t,e.mode,n),t.return=e,t;case P:var r=t._init;return f(e,r(t._payload),n)}if(he(t)||F(t))return t=Ql(t,e.mode,n,null),t.return=e,t;Aa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case P:return i=n._init,p(e,t,i(n._payload),r)}if(he(n)||F(n))return i===null?d(e,t,n,r,null):null;Aa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case P:var a=r._init;return m(e,t,n,a(r._payload),i)}if(he(r)||F(r))return e=e.get(n)||null,d(t,e,r,i,null);Aa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),_a&&da(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return _a&&da(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),_a&&da(r,h),l}function g(a,s,c,l){var u=F(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),_a&&da(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return _a&&da(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),_a&&da(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===P&&ja(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=ka(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=Ql(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Zl(i.type,i.key,i.props,null,e.mode,o),o.ref=ka(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=tu(i,e.mode,o),r.return=e,e=r}return s(e);case P:return l=i._init,_(e,r,l(i._payload),o)}if(he(i))return h(e,r,i,o);if(F(i))return g(e,r,i,o);Aa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=eu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Na=Ma(!0),Pa=Ma(!1),Fa=Ri(null),Ia=null,La=null,Ra=null;function za(){Ra=La=Ia=null}function Ba(e){var t=Fa.current;zi(Fa),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ha(e,t){Ia=e,Ra=La=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ms=!0),e.firstContext=null)}function Ua(e){var t=e._currentValue;if(Ra!==e){if(e={context:e,memoizedValue:t,next:null},La===null){if(Ia===null)throw Error(r(308));La=e,Ia.dependencies={lanes:0,firstContext:e}}else La=La.next=e}return t}var Wa=null;function Ga(e){Wa===null?Wa=[e]:Wa.push(e)}function Ka(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,qa(e,r)}function qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Za(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Vc&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,qa(e,n)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ft(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=I({},d,f);break a;case 2:Ja=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function no(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var ro={},io=Ri(ro),ao=Ri(ro),oo=Ri(ro);function so(e){if(e===ro)throw Error(r(174));return e}function co(e,t){switch(X(oo,t),X(ao,e),X(io,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:be(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=be(t,e)}zi(io),X(io,t)}function lo(){zi(io),zi(ao),zi(oo)}function uo(e){so(oo.current);var t=so(io.current),n=be(t,e.type);t!==n&&(X(ao,e),X(io,n))}function fo(e){ao.current===e&&(zi(io),zi(ao))}var po=Ri(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function go(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var _o=C.ReactCurrentDispatcher,vo=C.ReactCurrentBatchConfig,yo=0,bo=null,xo=null,So=null,Co=!1,wo=!1,To=0,Eo=0;function Do(){throw Error(r(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function ko(e,t,n,i,a,o){if(yo=o,bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?fs:ps,e=n(i,a),wo){o=0;do{if(wo=!1,To=0,25<=o)throw Error(r(301));o+=1,So=xo=null,t.updateQueue=null,_o.current=ms,e=n(i,a)}while(wo)}if(_o.current=ds,t=xo!==null&&xo.next!==null,yo=0,So=xo=bo=null,Co=!1,t)throw Error(r(300));return e}function Ao(){var e=To!==0;return To=0,e}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return So===null?bo.memoizedState=So=e:So=So.next=e,So}function Mo(){if(xo===null){var e=bo.alternate;e=e===null?null:e.memoizedState}else e=xo.next;var t=So===null?bo.memoizedState:So.next;if(t!==null)So=t,xo=e;else{if(e===null)throw Error(r(310));xo=e,e={memoizedState:xo.memoizedState,baseState:xo.baseState,baseQueue:xo.baseQueue,queue:xo.queue,next:null},So===null?bo.memoizedState=So=e:So=So.next=e}return So}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=xo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((yo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,bo.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,xr(i,t.memoizedState)||(Ms=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,bo.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(Ms=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Io(){}function Lo(e,t){var n=bo,i=Mo(),a=t(),o=!xr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ms=!0),i=i.queue,Yo(Bo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||So!==null&&So.memoizedState.tag&1){if(n.flags|=2048,Wo(9,zo.bind(null,n,i,a,t),void 0,null),Hc===null)throw Error(r(349));yo&30||Ro(n,t,a)}return a}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Ho(e){var t=qa(e,1);t!==null&&hl(t,e,1,-1)}function Uo(e){var t=jo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=ss.bind(null,bo,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Go(){return Mo().memoizedState}function Ko(e,t,n,r){var i=jo();bo.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=void 0;if(xo!==null){var o=xo.memoizedState;if(a=o.destroy,r!==null&&Oo(r,o.deps)){i.memoizedState=Wo(t,n,a,r);return}}bo.flags|=e,i.memoizedState=Wo(1|t,n,a,r)}function Jo(e,t){return Ko(8390656,8,e,t)}function Yo(e,t){return qo(2048,8,e,t)}function Xo(e,t){return qo(4,2,e,t)}function Zo(e,t){return qo(4,4,e,t)}function Qo(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $o(e,t,n){return n=n==null?null:n.concat([e]),qo(4,4,Qo.bind(null,t,e),n)}function es(){}function ts(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ns(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rs(e,t,n){return yo&21?(xr(n,t)||(n=jt(),bo.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ms=!0),e.memoizedState=n)}function is(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{K=n,vo.transition=r}}function as(){return Mo().memoizedState}function os(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cs(e))ls(t,n);else if(n=Ka(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),us(n,t,r)}}function ss(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ga(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ka(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),us(n,t,r))}}function cs(e){var t=e.alternate;return e===bo||t!==null&&t===bo}function ls(e,t){wo=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function us(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ft(e,n)}}var ds={readContext:Ua,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useInsertionEffect:Do,useLayoutEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useMutableSource:Do,useSyncExternalStore:Do,useId:Do,unstable_isNewReconciler:!1},fs={readContext:Ua,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:Ua,useEffect:Jo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Ko(4194308,4,Qo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=jo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=os.bind(null,bo,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:Uo,useDebugValue:es,useDeferredValue:function(e){return jo().memoizedState=e},useTransition:function(){var e=Uo(!1),t=e[0];return e=is.bind(null,e[1]),jo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=bo,a=jo();if(_a){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Hc===null)throw Error(r(349));yo&30||Ro(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Jo(Bo.bind(null,i,o,e),[e]),i.flags|=2048,Wo(9,zo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=jo(),t=Hc.identifierPrefix;if(_a){var n=ua,r=la;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=To++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Eo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ps={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Po,useRef:Go,useState:function(){return Po(No)},useDebugValue:es,useDeferredValue:function(e){return rs(Mo(),xo.memoizedState,e)},useTransition:function(){return[Po(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1},ms={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Fo,useRef:Go,useState:function(){return Fo(No)},useDebugValue:es,useDeferredValue:function(e){var t=Mo();return xo===null?t.memoizedState=e:rs(t,xo.memoizedState,e)},useTransition:function(){return[Fo(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1};function hs(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:I({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=Za(r,i);a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(hl(t,e,i,r),$a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=Za(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(hl(t,e,i,r),$a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=Za(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qa(e,i,r),t!==null&&(hl(t,e,r,n),$a(t,e,r))}};function vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function ys(e,t,n){var r=!1,i=Z,a=t.contextType;return typeof a==`object`&&a?a=Ua(a):(i=Wi(t)?Hi:Bi.current,r=t.contextTypes,a=(r=r!=null)?Ui(e,i):Z),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ya(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ua(a):(a=Wi(t)?Hi:Bi.current,i.context=Ui(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(gs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&_s.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ss(e,t){try{var n=``,r=t;do n+=re(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ts=typeof WeakMap==`function`?WeakMap:Map;function Es(e,t,n){n=Za(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),ws(e,t)},n}function Ds(e,t,n){n=Za(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ws(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ws(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ts;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function As(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Za(-1,1),t.tag=2,Qa(n,t,1))),n.lanes|=1),e)}var js=C.ReactCurrentOwner,Ms=!1;function Ns(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function Ps(e,t,n,r,i){n=n.render;var a=t.ref;return Ha(t,i),r=ko(e,t,n,r,a,i),n=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&n&&pa(t),t.flags|=1,Ns(e,t,r,i),t.child)}function Fs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Is(e,t,a,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return ec(e,t,i)}return t.flags|=1,e=Xl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Is(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref){if(Ms=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ms=!0);else return t.lanes=e.lanes,ec(e,t,i)}}return zs(e,t,n,r,i)}function Ls(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Kc,Gc),Gc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Kc,Gc),Gc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,X(Kc,Gc),Gc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),X(Kc,Gc),Gc|=r;return Ns(e,t,i,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,i){var a=Wi(n)?Hi:Bi.current;return a=Ui(t,a),Ha(t,i),n=ko(e,t,n,r,a,i),r=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&r&&pa(t),t.flags|=1,Ns(e,t,n,i),t.child)}function Bs(e,t,n,r,i){if(Wi(n)){var a=!0;Ji(t)}else a=!1;if(Ha(t,i),t.stateNode===null)$s(e,t),ys(t,n,r),xs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ua(l):(l=Wi(n)?Hi:Bi.current,l=Ui(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&bs(t,o,r,l),Ja=!1;var f=t.memoizedState;o.state=f,to(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Vi.current||Ja?(typeof u==`function`&&(gs(t,n,u,r),c=t.memoizedState),(s=Ja||vs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xa(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:hs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ua(c):(c=Wi(n)?Hi:Bi.current,c=Ui(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&bs(t,o,r,c),Ja=!1,f=t.memoizedState,o.state=f,to(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Vi.current||Ja?(typeof p==`function`&&(gs(t,n,p,r),m=t.memoizedState),(l=Ja||vs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,a,i)}function Vs(e,t,n,r,i,a){Rs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&Yi(t,n,!1),ec(e,t,a);r=t.stateNode,js.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Na(t,e.child,null,a),t.child=Na(t,null,s,a)):Ns(e,t,s,a),t.memoizedState=r.state,i&&Yi(t,n,!0),t.child}function Hs(e){var t=e.stateNode;t.pendingContext?Ki(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(e,t.context,!1),co(e,t.containerInfo)}function Us(e,t,n,r,i){return Ea(),Da(i),t.flags|=256,Ns(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ks(e,t,n){var r=t.pendingProps,i=po.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(po,i&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=$l(o,r,0,null),e=Ql(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Gs(n),t.memoizedState=Ws,e):qs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ys(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Ql(a,o,n,null),a.flags|=2):a=Xl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Gs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return a=e.child,e=a.sibling,r=Xl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=$l({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&Da(r),Na(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ys(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Cs(Error(r(422))),Js(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=$l({mode:`visible`,children:i.children},a,0,null),o=Ql(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Na(t,e.child,null,s),t.child.memoizedState=Gs(s),t.memoizedState=Ws,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Js(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Cs(o,i,void 0),Js(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ms||c){if(i=Hc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,qa(e,a),hl(i,e,a,-1))}return kl(),i=Cs(Error(r(421))),Js(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ga=Ci(a.nextSibling),ha=t,_a=!0,va=null,e!==null&&(oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,la=e.id,ua=e.overflow,ca=t),t=qs(t,i.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function Zs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ns(e,t,r.children,n),r=po.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(po,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zs(t,!0,n,null,a);break;case`together`:Zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Xl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tc(e,t,n){switch(t.tag){case 3:Hs(t),Ea();break;case 5:uo(t);break;case 1:Wi(t.type)&&Ji(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(X(po,po.current&1),e=ec(e,t,n),e===null?null:e.sibling):Ks(e,t,n):(X(po,po.current&1),t.flags|=128,null);X(po,po.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(po,po.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return ec(e,t,n)}var nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,so(io.current);var o=null;switch(n){case`input`:i=de(e,i),r=de(e,r),o=[];break;case`select`:i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),o=[];break;case`textarea`:i=G(e,i),r=G(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=pi)}ke(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&$r(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function ac(e,t){if(!_a)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sc(e,t,n){var i=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oc(t),null;case 1:return Wi(t.type)&&Gi(),oc(t),null;case 3:return i=t.stateNode,lo(),zi(Vi),zi(Bi),go(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,va!==null&&(yl(va),va=null))),oc(t),null;case 5:fo(t);var o=so(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return oc(t),null}if(e=so(io.current),wa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ei]=t,i[Di]=s,e=!!(t.mode&1),n){case`dialog`:$r(`cancel`,i),$r(`close`,i);break;case`iframe`:case`object`:case`embed`:$r(`load`,i);break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],i);break;case`source`:$r(`error`,i);break;case`img`:case`image`:case`link`:$r(`error`,i),$r(`load`,i);break;case`details`:$r(`toggle`,i);break;case`input`:fe(i,s),$r(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},$r(`invalid`,i);break;case`textarea`:ge(i,s),$r(`invalid`,i)}for(var c in ke(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&$r(`scroll`,i)}switch(n){case`input`:le(i),me(i,s,!0);break;case`textarea`:le(i),ve(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=pi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=ye(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ei]=t,e[Di]=i,nc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ae(n,i),n){case`dialog`:$r(`cancel`,e),$r(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:$r(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],e);o=i;break;case`source`:$r(`error`,e),o=i;break;case`img`:case`image`:case`link`:$r(`error`,e),$r(`load`,e),o=i;break;case`details`:$r(`toggle`,e),o=i;break;case`input`:fe(e,i),o=de(e,i),$r(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=I({},i,{value:void 0}),$r(`invalid`,e);break;case`textarea`:ge(e,i),o=G(e,i),$r(`invalid`,e);break;default:o=i}for(s in ke(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?De(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Se(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ce(e,u):typeof u==`number`&&Ce(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&$r(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:le(e),me(e,i,!1);break;case`textarea`:le(e),ve(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+oe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&W(e,!!i.multiple,i.defaultValue,!0):W(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=pi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oc(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=so(oo.current),so(io.current),wa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ei]=t,(s=i.nodeValue!==n)&&(e=ha,e!==null))switch(e.tag){case 3:fi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&fi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=t,t.stateNode=i}return oc(t),null;case 13:if(zi(po),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_a&&ga!==null&&t.mode&1&&!(t.flags&128))Ta(),Ea(),t.flags|=98560,s=!1;else if(s=wa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ei]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oc(t),s=!1}else va!==null&&(yl(va),va=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||po.current&1?qc===0&&(qc=3):kl())),t.updateQueue!==null&&(t.flags|=4),oc(t),null);case 4:return lo(),e===null&&ni(t.stateNode.containerInfo),oc(t),null;case 10:return Ba(t.type._context),oc(t),null;case 17:return Wi(t.type)&&Gi(),oc(t),null;case 19:if(zi(po),s=t.memoizedState,s===null)return oc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)ac(s,!1);else{if(qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=mo(e),c!==null){for(t.flags|=128,ac(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(po,po.current&1|2),t.child}e=e.sibling}s.tail!==null&&ut()>tl&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}}else{if(!i){if(e=mo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ac(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!_a)return oc(t),null}else 2*ut()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(oc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ut(),t.sibling=null,n=po.current,X(po,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gc&1073741824&&(oc(t),t.subtreeFlags&6&&(t.flags|=8192)):oc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function cc(e,t){switch(ma(t),t.tag){case 1:return Wi(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),zi(Vi),zi(Bi),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(zi(po),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zi(po),null;case 4:return lo(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var lc=!1,uc=!1,dc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function fc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){zl(e,t,n)}else n.current=null}}function pc(e,t,n){try{n()}catch(n){zl(e,t,n)}}var mc=!1;function hc(e,t){if(mi=on,e=Er(),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},on=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:hs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){zl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return h=mc,mc=!1,h}function gc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pc(t,n,a)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ei],delete t[Di],delete t[ki],delete t[Ai],delete t[ji])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}var wc=null,Tc=!1;function Ec(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount==`function`)try{vt.onCommitFiberUnmount(_t,n)}catch{}switch(n.tag){case 5:uc||fc(n,t);case 6:var r=wc,i=Tc;wc=null,Ec(e,t,n),wc=r,Tc=i,wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wc.removeChild(n.stateNode));break;case 18:wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),an(e)):Si(wc,n.stateNode));break;case 4:r=wc,i=Tc,wc=n.stateNode.containerInfo,Tc=!0,Ec(e,t,n),wc=r,Tc=i;break;case 0:case 11:case 14:case 15:if(!uc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pc(n,t,o),i=i.next}while(i!==r)}Ec(e,t,n);break;case 1:if(!uc&&(fc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){zl(n,t,e)}Ec(e,t,n);break;case 21:Ec(e,t,n);break;case 22:n.mode&1?(uc=(r=uc)||n.memoizedState!==null,Ec(e,t,n),uc=r):Ec(e,t,n);break;default:Ec(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dc),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function kc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:wc=c.stateNode,Tc=!1;break a;case 3:wc=c.stateNode.containerInfo,Tc=!0;break a;case 4:wc=c.stateNode.containerInfo,Tc=!0;break a}c=c.return}if(wc===null)throw Error(r(160));Dc(o,s,a),wc=null,Tc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){zl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kc(t,e),jc(e),i&4){try{gc(3,e,e.return),_c(3,e)}catch(t){zl(e,e.return,t)}try{gc(5,e,e.return)}catch(t){zl(e,e.return,t)}}break;case 1:kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return);break;case 5:if(kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return),e.flags&32){var a=e.stateNode;try{Ce(a,``)}catch(t){zl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&H(a,o),Ae(c,s);var u=Ae(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?De(a,f):d===`dangerouslySetInnerHTML`?Se(a,f):d===`children`?Ce(a,f):S(a,d,f,u)}switch(c){case`input`:pe(a,o);break;case`textarea`:_e(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?W(a,!!o.multiple,o.multiple?[]:``,!1):W(a,!!o.multiple,o.defaultValue,!0)):W(a,!!o.multiple,m,!1)}a[Di]=o}catch(t){zl(e,e.return,t)}}break;case 6:if(kc(t,e),jc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){zl(e,e.return,t)}}break;case 3:if(kc(t,e),jc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{an(t.containerInfo)}catch(t){zl(e,e.return,t)}break;case 4:kc(t,e),jc(e);break;case 13:kc(t,e),jc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=ut())),i&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(uc=(u=uc)||d,kc(t,e),uc=u):kc(t,e),jc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:gc(4,p,p.return);break;case 1:fc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){zl(i,n,e)}}break;case 5:fc(p,p.return);break;case 22:if(p.memoizedState!==null){Fc(f);continue}}m===null?Fc(f):(m.return=p,Q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ee(`display`,s))}catch(t){zl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){zl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kc(t,e),jc(e),i&4&&Oc(e);break;case 21:break;default:kc(t,e),jc(e)}}function jc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(bc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ce(a,``),i.flags&=-33),Cc(e,xc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Sc(e,xc(e),o);break;default:throw Error(r(161))}}catch(t){zl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mc(e,t,n){Q=e,Nc(e,t,n)}function Nc(e,t,n){for(var r=!!(e.mode&1);Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||uc;s=lc;var l=uc;if(lc=o,(uc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Ic(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Nc(a,t,n),a=a.sibling;Q=i,lc=s,uc=l}Pc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Pc(e,t,n)}}function Pc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:uc||_c(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!uc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:hs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&no(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}no(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&an(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}uc||t.flags&512&&vc(t)}catch(e){zl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Fc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ic(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(e){zl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){zl(t,i,e)}}var a=t.return;try{vc(t)}catch(e){zl(t,a,e)}break;case 5:var o=t.return;try{vc(t)}catch(e){zl(t,o,e)}}}catch(e){zl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var Lc=Math.ceil,Rc=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,Bc=C.ReactCurrentBatchConfig,Vc=0,Hc=null,Uc=null,Wc=0,Gc=0,Kc=Ri(0),qc=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return Vc&6?ut():dl===-1?dl=ut():dl}function ml(e){return e.mode&1?Vc&2&&Wc!==0?Wc&-Wc:Oa.transition===null?(e=K,e===0?(e=window.event,e=e===void 0?16:dn(e.type),e):e):(fl===0&&(fl=jt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Nt(e,n,i),(!(Vc&2)||e!==Hc)&&(e===Hc&&(!(Vc&2)&&(Xc|=n),qc===4&&xl(e,Wc)),gl(e,i),n===1&&Vc===0&&!(t.mode&1)&&(tl=ut()+500,Zi&&ta()))}function gl(e,t){var n=e.callbackNode;kt(e,t);var r=Dt(e,e===Hc?Wc:0);if(r===0)n!==null&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&st(n),t===1)e.tag===0?ea(Sl.bind(null,e)):$i(Sl.bind(null,e)),bi(function(){!(Vc&6)&&ta()}),n=null;else{switch(q(r)){case 1:n=ft;break;case 4:n=pt;break;case 16:n=mt;break;case 536870912:n=gt;break;default:n=mt}n=Gl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,Vc&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Dt(e,e===Hc?Wc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=Vc;Vc|=2;var o=Ol();(Hc!==e||Wc!==t)&&(nl=null,tl=ut()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);za(),Rc.current=o,Vc=a,Uc===null?(Hc=null,Wc=0,t=qc):t=0}if(t!==0){if(t===2&&(a=At(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,ut()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=At(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,ut()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-ut(),10<t)){if(Dt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_i(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-bt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lc(i/1960))-i,10<i){e.timeoutHandle=_i(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,ut()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(Vc&6)throw Error(r(327));Ll();var t=Dt(e,0);if(!(t&1))return gl(e,ut()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=At(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,ut()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,ut()),null}function Cl(e,t){var n=Vc;Vc|=1;try{return e(t)}finally{Vc=n,Vc===0&&(tl=ut()+500,Zi&&ta())}}function wl(e){sl!==null&&sl.tag===0&&!(Vc&6)&&Ll();var t=Vc;Vc|=1;var n=Bc.transition,r=K;try{if(Bc.transition=null,K=1,e)return e()}finally{K=r,Bc.transition=n,Vc=t,!(Vc&6)&&ta()}}function Tl(){Gc=Kc.current,zi(Kc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vi(n)),Uc!==null)for(n=Uc.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:lo(),zi(Vi),zi(Bi),go();break;case 5:fo(r);break;case 4:lo();break;case 13:zi(po);break;case 19:zi(po);break;case 10:Ba(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Hc=e,Uc=e=Xl(e.current,null),Wc=Gc=t,qc=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,Wa!==null){for(t=0;t<Wa.length;t++)if(n=Wa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wa=null}return e}function Dl(e,t){do{var n=Uc;try{if(za(),_o.current=ds,Co){for(var i=bo.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Co=!1}if(yo=0,So=xo=bo=null,wo=!1,To=0,zc.current=null,n===null||n.return===null){qc=1,Jc=t,Uc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Wc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ks(s);if(m!==null){m.flags&=-257,As(m,s,c,o,t),m.mode&1&&Os(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Os(o,u,t),kl();break a}l=Error(r(426))}else if(_a&&c.mode&1){var _=ks(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),As(_,s,c,o,t),Da(Ss(l,c));break a}}o=l=Ss(l,c),qc!==4&&(qc=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Es(o,l,t);eo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ds(o,c,t);eo(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Uc===n&&n!==null&&(Uc=n=n.return);continue}break}while(1)}function Ol(){var e=Rc.current;return Rc.current=ds,e===null?ds:e}function kl(){(qc===0||qc===3||qc===2)&&(qc=4),Hc===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Hc,Wc)}function Al(e,t){var n=Vc;Vc|=2;var i=Ol();(Hc!==e||Wc!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(za(),Vc=n,Rc.current=i,Uc!==null)throw Error(r(261));return Hc=null,Wc=0,qc}function jl(){for(;Uc!==null;)Nl(Uc)}function Ml(){for(;Uc!==null&&!ct();)Nl(Uc)}function Nl(e){var t=Wl(e.alternate,e,Gc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Uc=t,zc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cc(n,t),n!==null){n.flags&=32767,Uc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qc=6,Uc=null;return}}else if(n=sc(n,t,Gc),n!==null){Uc=n;return}if(t=t.sibling,t!==null){Uc=t;return}Uc=t=e}while(t!==null);qc===0&&(qc=5)}function Fl(e,t,n){var r=K,i=Bc.transition;try{Bc.transition=null,K=1,Il(e,t,n,r)}finally{Bc.transition=i,K=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(Vc&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pt(e,o),e===Hc&&(Uc=Hc=null,Wc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Gl(mt,function(){return Ll(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Bc.transition,Bc.transition=null;var s=K;K=1;var c=Vc;Vc|=4,zc.current=null,hc(e,n),Ac(n,e),Or(hi),on=!!mi,hi=mi=null,e.current=n,Mc(n,e,a),lt(),Vc=c,K=s,Bc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),yt(n.stateNode,i),gl(e,ut()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,ta(),null}function Ll(){if(sl!==null){var e=q(cl),t=Bc.transition,n=K;try{if(Bc.transition=null,K=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,Vc&6)throw Error(r(331));var a=Vc;for(Vc|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:gc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(yc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else b:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break b}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else b:for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_c(9,c)}}catch(e){zl(c,c.return,e)}if(c===s){Q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break b}Q=c.return}}if(Vc=a,ta(),vt&&typeof vt.onPostCommitFiberRoot==`function`)try{vt.onPostCommitFiberRoot(_t,e)}catch{}i=!0}return i}finally{K=n,Bc.transition=t}}return!1}function Rl(e,t,n){t=Ss(n,t),t=Es(e,t,1),e=Qa(e,t,1),t=pl(),e!==null&&(Nt(e,1,t),gl(e,t))}function zl(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=Ss(n,e),e=Ds(t,e,1),t=Qa(t,e,1),e=pl(),t!==null&&(Nt(t,1,e),gl(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Hc===e&&(Wc&n)===n&&(qc===4||qc===3&&(Wc&130023424)===Wc&&500>ut()-el?El(e,0):Zc|=n),gl(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=Tt,Tt<<=1,!(Tt&130023424)&&(Tt=4194304)):t=1);var n=pl();e=qa(e,t),e!==null&&(Nt(e,t,n),gl(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Vi.current)Ms=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ms=!1,tc(e,t,n);Ms=!!(e.flags&131072)}}else Ms=!1,_a&&t.flags&1048576&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;$s(e,t),e=t.pendingProps;var a=Ui(t,Bi.current);Ha(t,n),a=ko(null,t,i,e,a,n);var o=Ao();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(i)?(o=!0,Ji(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ya(t),a.updater=_s,t.stateNode=a,a._reactInternals=t,xs(t,i,e,n),t=Vs(null,t,i,!0,o,n)):(t.tag=0,_a&&o&&pa(t),Ns(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch($s(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Yl(i),e=hs(i,e),a){case 0:t=zs(null,t,i,e,n);break a;case 1:t=Bs(null,t,i,e,n);break a;case 11:t=Ps(null,t,i,e,n);break a;case 14:t=Fs(null,t,i,hs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),zs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Bs(e,t,i,a,n);case 3:a:{if(Hs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Xa(e,t),to(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ss(Error(r(423)),t),t=Us(e,t,i,n,a);break a}if(i!==a){a=Ss(Error(r(424)),t),t=Us(e,t,i,n,a);break a}for(ga=Ci(t.stateNode.containerInfo.firstChild),ha=t,_a=!0,va=null,n=Pa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ea(),i===a){t=ec(e,t,n);break a}Ns(e,t,i,n)}t=t.child}return t;case 5:return uo(t),e===null&&Sa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,gi(i,a)?s=null:o!==null&&gi(i,o)&&(t.flags|=32),Rs(e,t),Ns(e,t,s,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Ks(e,t,n);case 4:return co(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Na(t,null,i,n):Ns(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Ps(e,t,i,a,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:return Ns(e,t,t.pendingProps.children,n),t.child;case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,X(Fa,i._currentValue),i._currentValue=s,o!==null){if(xr(o.value,s)){if(o.children===a.children&&!Vi.current){t=ec(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Za(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Va(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Va(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Ns(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ha(t,n),a=Ua(a),i=i(a),t.flags|=1,Ns(e,t,i,n),t.child;case 14:return i=t.type,a=hs(i,t.pendingProps),a=hs(i.type,a),Fs(e,t,i,a,n);case 15:return Is(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),$s(e,t),t.tag=1,Wi(i)?(e=!0,Ji(t)):e=!1,Ha(t,n),ys(t,i,a),xs(t,i,a,n),Vs(null,t,i,!0,e,n);case 19:return Qs(e,t,n);case 22:return Ls(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return ot(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yl(e){if(typeof e==`function`)return+!!Jl(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===N)return 14}return 2}function Xl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Jl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Ql(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=ql(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case M:return e=ql(13,n,t,a),e.elementType=M,e.lanes=o,e;case ee:return e=ql(19,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return $l(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case N:s=14;break a;case P:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Ql(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=ql(22,e,r,t),e.elementType=te,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mt(0),this.expirationTimes=Mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,s,c){return e=new nu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(a),e}function iu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function au(e){if(!e)return Z;e=e._reactInternals;a:{if(et(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Wi(n))return qi(e,n,t)}return t}function ou(e,t,n,r,i,a,o,s,c){return e=ru(n,r,!0,e,i,a,o,s,c),e.context=au(null),n=e.current,r=pl(),i=ml(n),a=Za(r,i),a.callback=t??null,Qa(n,a,i),e.current.lanes=i,Nt(e,i,r),gl(e,r),e}function su(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=au(n),t.context===null?t.context=n:t.pendingContext=n,t=Za(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qa(i,t,o),e!==null&&(hl(e,i,o,a),$a(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function du(){return null}var fu=typeof reportError==`function`?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}mu.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));su(e,t,null,null)},mu.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){su(null,e,null,null)}),t[Oi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&$t(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function _u(){}function vu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=cu(o);a.call(e)}}var o=ou(t,r,e,0,null,!1,!1,``,_u);return e._reactRootContainer=o,e[Oi]=o.current,ni(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=cu(c);s.call(e)}}var c=ru(e,0,!1,null,null,!1,!1,``,_u);return e._reactRootContainer=c,e[Oi]=c.current,ni(e.nodeType===8?e.parentNode:e),wl(function(){su(t,c,n,r)}),c}function yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=cu(o);s.call(e)}}su(t,o,e,i)}else o=vu(n,t,e,i,r);return cu(o)}It=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);n!==0&&(Ft(t,n|1),gl(t,ut()),!(Vc&6)&&(tl=ut()+500,ta()))}break;case 13:wl(function(){var t=qa(e,1);t!==null&&hl(t,e,1,pl())}),uu(e,1)}},Lt=function(e){if(e.tag===13){var t=qa(e,134217728);t!==null&&hl(t,e,134217728,pl()),uu(e,134217728)}},Rt=function(e){if(e.tag===13){var t=ml(e),n=qa(e,t);n!==null&&hl(n,e,t,pl()),uu(e,t)}},zt=function(){return K},Bt=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},Ne=function(e,t,n){switch(t){case`input`:if(pe(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Fi(i);if(!a)throw Error(r(90));V(i),pe(i,a)}}}break;case`textarea`:_e(e,n);break;case`select`:t=n.value,t!=null&&W(e,!!n.multiple,t,!1)}},ze=Cl,Be=wl;var bu={usingClientEntryPoint:!1,Events:[Ni,Pi,Fi,Le,Re,Cl]},xu={findFiberByHostInstance:Mi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Su={bundleType:xu.bundleType,version:xu.version,rendererPackageName:xu.rendererPackageName,rendererConfig:xu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=it(e),e===null?null:e.stateNode},findFiberByHostInstance:xu.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{_t=Cu.inject(Su),vt=Cu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(t))throw Error(r(200));return iu(e,t,null,n)},e.createRoot=function(e,t){if(!hu(e))throw Error(r(299));var n=!1,i=``,a=fu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,i,a),e[Oi]=t.current,ni(e.nodeType===8?e.parentNode:e),new pu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=it(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!hu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=fu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ou(t,null,e,1,n??null,a,!1,o,s),e[Oi]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new mu(t)},e.render=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!gu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Oi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return yu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u(),1),_=h(),v=`PYTHONPATH=src .venv/bin/python -m atlas_map_data.build_atlas_bundle`,y=e=>`./atlas/${e.replace(/^\/+/,``)}`,b=class extends Error{constructor(){super(`The atlas data bundle is missing. Build it with: ${v}`),this.name=`BundleMissingError`}};async function x(e,t){let n=()=>t.endsWith(`manifest.json`)?new b:Error(`The atlas data bundle is incomplete: ${t} is missing or not JSON. Rebuild it with: ${v}`),r=await e(t);if(!r.ok)throw r.status===404?n():Error(`Could not load ${t} (HTTP ${r.status})`);let i=r.headers?.get(`content-type`);if(i!=null&&!i.includes(`json`))throw n();try{return await r.json()}catch{throw n()}}async function S(e=fetch){let t=await x(e,y(`manifest.json`)),[n,r,i,a,o,s,c]=await Promise.all([`families`,`sensors`,`sites`,`regions`,`cable`,`das`,`terrain/terrain`].map(t=>x(e,y(`${t}.json`))));return{manifest:t,families:n.families,familyByKey:Object.fromEntries(n.families.map(e=>[e.key,e])),sensors:r.sensors,sensorById:Object.fromEntries(r.sensors.map(e=>[e.id,e])),unplaced:r.unplaced,sites:i.sites,siteById:Object.fromEntries(i.sites.map(e=>[e.id,e])),regions:a.regions,overview:a.overview,cable:o,das:s,terrainMeta:c}}var C={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},w={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T=1e3,E=1001,D=1002,O=1003,k=1004,A=1005,j=1006,M=1007,ee=1008,N=1009,P=1010,te=1011,ne=1012,F=1013,I=1014,L=1015,R=1016,z=1017,B=1018,re=1020,ie=35902,ae=1021,oe=1022,se=1023,ce=1024,le=1025,V=1026,ue=1027,de=1028,fe=1029,H=1030,pe=1031,me=1033,U=33776,he=33777,W=33778,G=33779,ge=35840,_e=35841,ve=35842,ye=35843,be=36196,xe=37492,Se=37496,Ce=37808,we=37809,Te=37810,Ee=37811,De=37812,Oe=37813,ke=37814,Ae=37815,je=37816,Me=37817,Ne=37818,Pe=37819,Fe=37820,Ie=37821,Le=36492,Re=36494,ze=36495,Be=36283,Ve=36284,He=36285,Ue=36286,We=2300,Ge=2301,Ke=2302,qe=2400,Je=2401,Ye=2402,Xe=3200,Ze=3201,Qe=`srgb`,$e=`srgb-linear`,et=`display-p3`,tt=`display-p3-linear`,nt=`linear`,rt=`srgb`,it=`rec709`,at=7680,ot=35044,st=2e3,ct=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},lt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ut=1234567,dt=Math.PI/180,ft=180/Math.PI;function pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lt[e&255]+lt[e>>8&255]+lt[e>>16&255]+lt[e>>24&255]+`-`+lt[t&255]+lt[t>>8&255]+`-`+lt[t>>16&15|64]+lt[t>>24&255]+`-`+lt[n&63|128]+lt[n>>8&255]+`-`+lt[n>>16&255]+lt[n>>24&255]+lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]).toLowerCase()}function mt(e,t,n){return Math.max(t,Math.min(n,e))}function ht(e,t){return(e%t+t)%t}function gt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function _t(e,t,n){return e===t?0:(n-e)/(t-e)}function vt(e,t,n){return(1-n)*e+n*t}function yt(e,t,n,r){return vt(e,t,1-Math.exp(-n*r))}function bt(e,t=1){return t-Math.abs(ht(e,t*2)-t)}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wt(e,t){return e+Math.random()*(t-e)}function Tt(e){return e*(.5-Math.random())}function Et(e){e!==void 0&&(ut=e);let t=ut+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dt(e){return e*dt}function Ot(e){return e*ft}function kt(e){return!(e&e-1)&&e!==0}function At(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Ft={DEG2RAD:dt,RAD2DEG:ft,generateUUID:pt,clamp:mt,euclideanModulo:ht,mapLinear:gt,inverseLerp:_t,lerp:vt,damp:yt,pingpong:bt,smoothstep:xt,smootherstep:St,randInt:Ct,randFloat:wt,randFloatSpread:Tt,seededRandom:Et,degToRad:Dt,radToDeg:Ot,isPowerOfTwo:kt,ceilPowerOfTwo:At,floorPowerOfTwo:jt,setQuaternionFromProperEuler:Mt,normalize:Pt,denormalize:Nt},K=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},q=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(It.makeScale(e,t)),this}rotate(e){return this.premultiply(It.makeRotation(-e)),this}translate(e,t){return this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new q;function Lt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function zt(){let e=Rt(`canvas`);return e.style.display=`block`,e}var Bt={};function Vt(e){e in Bt||(Bt[e]=!0,console.warn(e))}function Ht(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Ut(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt=new q().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kt=new q().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qt={[$e]:{transfer:nt,primaries:it,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Qe]:{transfer:rt,primaries:it,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[tt]:{transfer:nt,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Kt),fromReference:e=>e.applyMatrix3(Gt)},[et]:{transfer:rt,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Kt),fromReference:e=>e.applyMatrix3(Gt).convertLinearToSRGB()}},Jt=new Set([$e,tt]),Yt={enabled:!0,_workingColorSpace:$e,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Jt.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=qt[t].toReference,i=qt[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return qt[e].primaries},getTransfer:function(e){return e===``?nt:qt[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(qt[t].luminanceCoefficients)}};function Xt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Qt,$t=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qt===void 0&&(Qt=Rt(`canvas`)),Qt.width=e.width,Qt.height=e.height;let n=Qt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Xt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Xt(t[e]/255)*255):t[e]=Xt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},en=0,tn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:en++}),this.uuid=pt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(nn(r[t].image)):e.push(nn(r[t]))}else e=nn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function nn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?$t.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var rn=0,an=class e extends ct{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=E,i=E,a=j,o=ee,s=se,c=N,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=pt(),this.name=``,this.source=new tn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case T:e.x-=Math.floor(e.x);break;case E:e.x=e.x<0?0:1;break;case D:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case T:e.y-=Math.floor(e.y);break;case E:e.y=e.y<0?0:1;break;case D:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null,an.DEFAULT_MAPPING=300,an.DEFAULT_ANISOTROPY=1;var J=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},on=class extends ct{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new J(0,0,e,t),this.scissorTest=!1,this.viewport=new J(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:j,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new tn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},un=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dn.copy(this).projectOnVector(e),this.sub(dn)}reflect(e){return this.sub(dn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dn=new Y,fn=new un,pn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,hn):hn.fromBufferAttribute(r,t),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),gn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),gn.copy(e.boundingBox)),gn.applyMatrix4(e.matrixWorld),this.union(gn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cn),wn.subVectors(this.max,Cn),_n.subVectors(e.a,Cn),vn.subVectors(e.b,Cn),yn.subVectors(e.c,Cn),bn.subVectors(vn,_n),xn.subVectors(yn,vn),Sn.subVectors(_n,yn);let t=[0,-bn.z,bn.y,0,-xn.z,xn.y,0,-Sn.z,Sn.y,bn.z,0,-bn.x,xn.z,0,-xn.x,Sn.z,0,-Sn.x,-bn.y,bn.x,0,-xn.y,xn.x,0,-Sn.y,Sn.x,0];return!Dn(t,_n,vn,yn,wn)||(t=[1,0,0,0,1,0,0,0,1],!Dn(t,_n,vn,yn,wn))?!1:(Tn.crossVectors(bn,xn),t=[Tn.x,Tn.y,Tn.z],Dn(t,_n,vn,yn,wn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],hn=new Y,gn=new pn,_n=new Y,vn=new Y,yn=new Y,bn=new Y,xn=new Y,Sn=new Y,Cn=new Y,wn=new Y,Tn=new Y,En=new Y;function Dn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){En.fromArray(e,a);let o=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),s=t.dot(En),c=n.dot(En),l=r.dot(En);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var On=new pn,kn=new Y,An=new Y,jn=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?On.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kn.subVectors(e,this.center);let t=kn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(An.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kn.copy(e.center).add(An)),this.expandByPoint(kn.copy(e.center).sub(An))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new Y,Nn=new Y,Pn=new Y,Fn=new Y,In=new Y,Ln=new Y,Rn=new Y,zn=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nn.copy(e).add(t).multiplyScalar(.5),Pn.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Nn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Pn),o=Fn.dot(this.direction),s=-Fn.dot(Pn),c=Fn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nn).addScaledVector(Pn,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);let n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,i){In.subVectors(t,e),Ln.subVectors(n,e),Rn.crossVectors(In,Ln);let a=this.direction.dot(Rn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);let s=o*this.direction.dot(Ln.crossVectors(Fn,Ln));if(s<0)return null;let c=o*this.direction.dot(In.cross(Fn));if(c<0||s+c>a)return null;let l=-o*Fn.dot(Rn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Vn.setFromMatrixColumn(e,0).length(),i=1/Vn.setFromMatrixColumn(e,1).length(),a=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Un,e,Wn)}lookAt(e,t,n){let r=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Gn.crossVectors(n,qn),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Gn.crossVectors(n,qn)),Gn.normalize(),Kn.crossVectors(qn,Gn),r[0]=Gn.x,r[4]=Kn.x,r[8]=qn.x,r[1]=Gn.y,r[5]=Kn.y,r[9]=qn.y,r[2]=Gn.z,r[6]=Kn.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Vn.set(r[0],r[1],r[2]).length(),a=Vn.set(r[4],r[5],r[6]).length(),o=Vn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let s=1/i,c=1/a,l=1/o;return Hn.elements[0]*=s,Hn.elements[1]*=s,Hn.elements[2]*=s,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=l,Hn.elements[9]*=l,Hn.elements[10]*=l,t.setFromRotationMatrix(Hn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=st){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=st){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vn=new Y,Hn=new Bn,Un=new Y(0,0,0),Wn=new Y(1,1,1),Gn=new Y,Kn=new Y,qn=new Y,Jn=new Bn,Yn=new un,Xn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yn.setFromEuler(this),this.setFromQuaternion(Yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER=`XYZ`;var Zn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Qn=0,$n=new Y,er=new un,tr=new Bn,nr=new Y,rr=new Y,ir=new Y,ar=new un,or=new Y(1,0,0),sr=new Y(0,1,0),cr=new Y(0,0,1),lr={type:`added`},ur={type:`removed`},dr={type:`childadded`,child:null},fr={type:`childremoved`,child:null},pr=class e extends ct{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qn++}),this.uuid=pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Xn,r=new un,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bn},normalMatrix:{value:new q}}),this.matrix=new Bn,this.matrixWorld=new Bn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(or,e)}rotateY(e){return this.rotateOnAxis(sr,e)}rotateZ(e){return this.rotateOnAxis(cr,e)}translateOnAxis(e,t){return $n.copy(e).applyQuaternion(this.quaternion),this.position.add($n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(or,e)}translateY(e){return this.translateOnAxis(sr,e)}translateZ(e){return this.translateOnAxis(cr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(rr,nr,this.up):tr.lookAt(nr,rr,this.up),this.quaternion.setFromRotationMatrix(tr),r&&(tr.extractRotation(r.matrixWorld),er.setFromRotationMatrix(tr),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lr),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ur),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lr),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,ir),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,ar,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};pr.DEFAULT_UP=new Y(0,1,0),pr.DEFAULT_MATRIX_AUTO_UPDATE=!0,pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mr=new Y,hr=new Y,gr=new Y,_r=new Y,vr=new Y,yr=new Y,br=new Y,xr=new Y,Sr=new Y,Cr=new Y,wr=new J,Tr=new J,Er=new J,Dr=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mr.subVectors(e,t),r.cross(mr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){mr.subVectors(r,t),hr.subVectors(n,t),gr.subVectors(e,t);let a=mr.dot(mr),o=mr.dot(hr),s=mr.dot(gr),c=hr.dot(hr),l=hr.dot(gr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_r)!==null&&_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,_r)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,_r.x),s.addScaledVector(a,_r.y),s.addScaledVector(o,_r.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return wr.setScalar(0),Tr.setScalar(0),Er.setScalar(0),wr.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Er.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wr,i.x),a.addScaledVector(Tr,i.y),a.addScaledVector(Er,i.z),a}static isFrontFacing(e,t,n,r){return mr.subVectors(n,t),hr.subVectors(e,t),mr.cross(hr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mr.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),mr.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;vr.subVectors(r,n),yr.subVectors(i,n),xr.subVectors(e,n);let s=vr.dot(xr),c=yr.dot(xr);if(s<=0&&c<=0)return t.copy(n);Sr.subVectors(e,r);let l=vr.dot(Sr),u=yr.dot(Sr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(vr,a);Cr.subVectors(e,i);let f=vr.dot(Cr),p=yr.dot(Cr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(yr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return br.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(br,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Or={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function jr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Mr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=ht(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jr(i,r,e+1/3),this.g=jr(i,r,e),this.b=jr(i,r,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){let n=Or[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}copyLinearToSRGB(e){return this.r=Zt(e.r),this.g=Zt(e.g),this.b=Zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Yt.fromWorkingColorSpace(Nr.copy(this),e),Math.round(mt(Nr.r*255,0,255))*65536+Math.round(mt(Nr.g*255,0,255))*256+Math.round(mt(Nr.b*255,0,255))}getHexString(e=Qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Nr.copy(this),t);let n=Nr.r,r=Nr.g,i=Nr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Nr.copy(this),t),e.r=Nr.r,e.g=Nr.g,e.b=Nr.b,e}getStyle(e=Qe){Yt.fromWorkingColorSpace(Nr.copy(this),e);let t=Nr.r,n=Nr.g,r=Nr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Ar);let n=vt(kr.h,Ar.h,t),r=vt(kr.s,Ar.s,t),i=vt(kr.l,Ar.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nr=new Mr;Mr.NAMES=Or;var Pr=0,Fr=class extends ct{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=at,this.stencilZFail=at,this.stencilZPass=at,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},Ir=class extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Mr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lr=new Y,Rr=new K,zr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ot,this.updateRanges=[],this.gpuType=L,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix4(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyNormalMatrix(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.transformDirection(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Br=class extends zr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vr=class extends zr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Hr=class extends zr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ur=0,Wr=new Bn,Gr=new pr,Kr=new Y,qr=new pn,Jr=new pn,Yr=new Y,Xr=class e extends ct{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Lt(e)?Vr:Br)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wr.makeRotationFromQuaternion(e),this.applyMatrix4(Wr),this}rotateX(e){return Wr.makeRotationX(e),this.applyMatrix4(Wr),this}rotateY(e){return Wr.makeRotationY(e),this.applyMatrix4(Wr),this}rotateZ(e){return Wr.makeRotationZ(e),this.applyMatrix4(Wr),this}translate(e,t,n){return Wr.makeTranslation(e,t,n),this.applyMatrix4(Wr),this}scale(e,t,n){return Wr.makeScale(e,t,n),this.applyMatrix4(Wr),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Hr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(this.boundingBox.min,qr.min),this.boundingBox.expandByPoint(Yr),Yr.addVectors(this.boundingBox.max,qr.max),this.boundingBox.expandByPoint(Yr)):(this.boundingBox.expandByPoint(qr.min),this.boundingBox.expandByPoint(qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(qr.min,Jr.min),qr.expandByPoint(Yr),Yr.addVectors(qr.max,Jr.max),qr.expandByPoint(Yr)):(qr.expandByPoint(Jr.min),qr.expandByPoint(Jr.max))}qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yr.fromBufferAttribute(a,t),o&&(Kr.fromBufferAttribute(e,t),Yr.add(Kr)),r=Math.max(r,n.distanceToSquared(Yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new zr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new K,f=new K,p=new K,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new zr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yr.fromBufferAttribute(e,t),Yr.normalize(),e.setXYZ(t,Yr.x,Yr.y,Yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new zr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zr=new Bn,Qr=new zn,$r=new jn,ei=new Y,ti=new Y,ni=new Y,ri=new Y,ii=new Y,ai=new Y,oi=new Y,si=new Y,ci=class extends pr{constructor(e=new Xr,t=new Ir){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),!($r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2))&&(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new Y;Dr.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=Dr.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Dr.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Dr.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Dr.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class e extends Xr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Hr(c,3)),this.setAttribute(`normal`,new Hr(l,3)),this.setAttribute(`uv`,new Hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function pi(e){let t={};for(let n=0;n<e.length;n++){let r=fi(e[n]);for(let e in r)t[e]=r[e]}return t}function mi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var gi={clone:fi,merge:pi},_i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_i,this.fragmentShader=vi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=mi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bi=class extends pr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Bn,this.projectionMatrix=new Bn,this.projectionMatrixInverse=new Bn,this.coordinateSystem=st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new Y,Si=new K,Ci=new K,wi=class extends bi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ft*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ft*2*Math.atan(Math.tan(dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Si,Ci),t.subVectors(Ci,Si)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ei=1,Di=class extends pr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wi(Ti,Ei,e,t);r.layers=this.layers,this.add(r);let i=new wi(Ti,Ei,e,t);i.layers=this.layers,this.add(i);let a=new wi(Ti,Ei,e,t);a.layers=this.layers,this.add(a);let o=new wi(Ti,Ei,e,t);o.layers=this.layers,this.add(o);let s=new wi(Ti,Ei,e,t);s.layers=this.layers,this.add(s);let c=new wi(Ti,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oi=class extends an{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oi(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?j:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new di(5,5,5),i=new yi({name:`CubemapFromEquirect`,uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=j),new Di(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ai=new Y,ji=new Y,Mi=new q,Ni=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ai.subVectors(n,t).cross(ji.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ai),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mi.getNormalMatrix(e),r=this.coplanarPoint(Ai).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new jn,Fi=new Y,Ii=class{constructor(e=new Ni,t=new Ni,n=new Ni,r=new Ni,i=new Ni,a=new Ni){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=st){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Fi.x=r.normal.x>0?e.max.x:e.min.x,Fi.y=r.normal.y>0?e.max.y:e.min.y,Fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Li(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ri(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zi=class e extends Xr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Hr(p,3)),this.setAttribute(`normal`,new Hr(m,3)),this.setAttribute(`uv`,new Hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <alphahash_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new Mr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Mr(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Bi={basic:{uniforms:pi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:pi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Mr(0)}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:pi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Mr(0)},specular:{value:new Mr(1118481)},shininess:{value:30}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:pi([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Mr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:pi([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Mr(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:pi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:pi([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:pi([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:pi([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:pi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:pi([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distanceRGBA:{uniforms:pi([Z.common,Z.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distanceRGBA_vert,fragmentShader:X.distanceRGBA_frag},shadow:{uniforms:pi([Z.lights,Z.fog,{color:{value:new Mr(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Bi.physical={uniforms:pi([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Mr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Mr(0)},specularColor:{value:new Mr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Vi={r:0,b:0,g:0},Hi=new Xn,Ui=new Bn;function Wi(e,t,n,r,i,a,o){let s=new Mr(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new ci(new di(1,1,1),new yi({name:`BackgroundCubeMaterial`,uniforms:fi(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hi.copy(n.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ui.makeRotationFromEuler(Hi)),u.material.toneMapped=Yt.getTransfer(r.colorSpace)!==rt,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new ci(new zi(2,2),new yi({name:`BackgroundMaterial`,uniforms:fi(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(r.colorSpace)!==rt,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Vi,hi(e)),r.buffers.color.setClear(Vi.r,Vi.g,Vi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Gi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ki(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function qi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ji(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ni,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Yi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ki(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Xi=class extends bi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zi=4,Qi=[.125,.215,.35,.446,.526,.582],$i=20,ea=new Xi,ta=new Mr,na=null,ra=0,ia=0,aa=!1,oa=(1+Math.sqrt(5))/2,sa=1/oa,ca=[new Y(-oa,sa,0),new Y(oa,sa,0),new Y(-sa,0,oa),new Y(sa,0,oa),new Y(0,oa,-sa),new Y(0,oa,sa),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],la=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){na=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ra,ia),this._renderer.xr.enabled=aa,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:j,minFilter:j,generateMipmaps:!1,type:R,format:se,colorSpace:$e,depthBuffer:!1},r=da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ua(r)),this._blurMaterial=pa(r,e,t)}return r}_compileMaterial(e){let t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,r){let i=new wi(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(ta),s.toneMapping=0,s.autoClear=!1;let u=new Ir({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new ci(new di,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(ta),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;fa(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ma());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new ci(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;fa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=ca[(r-t-1)%ca.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new ci(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):$i;m>$i&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);let h=[],g=0;for(let e=0;e<$i;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];fa(t,3*v*(r>_-Zi?r-_+Zi:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ea)}};function ua(e){let t=[],n=[],r=[],i=e,a=e-Zi+1+Qi.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Zi?s=Qi[o-e+Zi-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Xr;h.setAttribute(`position`,new zr(f,3)),h.setAttribute(`uv`,new zr(p,2)),h.setAttribute(`faceIndex`,new zr(m,1)),t.push(h),i>Zi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function da(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function fa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function pa(e,t,n){let r=new Float32Array($i),i=new Y(0,1,0);return new yi({name:`SphericalGaussianBlur`,defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ma(){return new yi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ha(){return new yi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function _a(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new la(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new la(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function va(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Vt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function ya(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Lt(n)?Vr:Br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ba(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xa(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Sa(e,t,n){let r=new WeakMap,i=new J;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=L,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ca(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var wa=class extends an{constructor(e,t,n,r,i,a,o,s,c,l=V){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=I),n===void 0&&l===1027&&(n=re),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?O:o,this.minFilter=s===void 0?O:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ta=new an,Ea=new wa(1,1),Da=new cn,Oa=new ln,ka=new Oi,Aa=[],ja=[],Ma=new Float32Array(16),Na=new Float32Array(9),Pa=new Float32Array(4);function Fa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Aa[i];if(a===void 0&&(a=new Float32Array(i),Aa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ia(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function La(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ra(e,t){let n=ja[t];n===void 0&&(n=new Int32Array(t),ja[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function za(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ia(n,t))return;e.uniform2fv(this.addr,t),La(n,t)}}function Va(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ia(n,t))return;e.uniform3fv(this.addr,t),La(n,t)}}function Ha(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ia(n,t))return;e.uniform4fv(this.addr,t),La(n,t)}}function Ua(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ia(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),La(n,t)}else{if(Ia(n,r))return;Pa.set(r),e.uniformMatrix2fv(this.addr,!1,Pa),La(n,r)}}function Wa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ia(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),La(n,t)}else{if(Ia(n,r))return;Na.set(r),e.uniformMatrix3fv(this.addr,!1,Na),La(n,r)}}function Ga(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ia(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),La(n,t)}else{if(Ia(n,r))return;Ma.set(r),e.uniformMatrix4fv(this.addr,!1,Ma),La(n,r)}}function Ka(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ia(n,t))return;e.uniform2iv(this.addr,t),La(n,t)}}function Ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ia(n,t))return;e.uniform3iv(this.addr,t),La(n,t)}}function Ya(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ia(n,t))return;e.uniform4iv(this.addr,t),La(n,t)}}function Xa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Za(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ia(n,t))return;e.uniform2uiv(this.addr,t),La(n,t)}}function Qa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ia(n,t))return;e.uniform3uiv(this.addr,t),La(n,t)}}function $a(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ia(n,t))return;e.uniform4uiv(this.addr,t),La(n,t)}}function eo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ea.compareFunction=515,a=Ea):a=Ta,n.setTexture2D(t||a,i)}function to(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Oa,i)}function no(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ka,i)}function ro(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Da,i)}function io(e){switch(e){case 5126:return za;case 35664:return Ba;case 35665:return Va;case 35666:return Ha;case 35674:return Ua;case 35675:return Wa;case 35676:return Ga;case 5124:case 35670:return Ka;case 35667:case 35671:return qa;case 35668:case 35672:return Ja;case 35669:case 35673:return Ya;case 5125:return Xa;case 36294:return Za;case 36295:return Qa;case 36296:return $a;case 35678:case 36198:case 36298:case 36306:case 35682:return eo;case 35679:case 36299:case 36307:return to;case 35680:case 36300:case 36308:case 36293:return no;case 36289:case 36303:case 36311:case 36292:return ro}}function ao(e,t){e.uniform1fv(this.addr,t)}function oo(e,t){let n=Fa(t,this.size,2);e.uniform2fv(this.addr,n)}function so(e,t){let n=Fa(t,this.size,3);e.uniform3fv(this.addr,n)}function co(e,t){let n=Fa(t,this.size,4);e.uniform4fv(this.addr,n)}function lo(e,t){let n=Fa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function uo(e,t){let n=Fa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fo(e,t){let n=Fa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function po(e,t){e.uniform1iv(this.addr,t)}function mo(e,t){e.uniform2iv(this.addr,t)}function ho(e,t){e.uniform3iv(this.addr,t)}function go(e,t){e.uniform4iv(this.addr,t)}function _o(e,t){e.uniform1uiv(this.addr,t)}function vo(e,t){e.uniform2uiv(this.addr,t)}function yo(e,t){e.uniform3uiv(this.addr,t)}function bo(e,t){e.uniform4uiv(this.addr,t)}function xo(e,t,n){let r=this.cache,i=t.length,a=Ra(n,i);Ia(r,a)||(e.uniform1iv(this.addr,a),La(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ta,a[e])}function So(e,t,n){let r=this.cache,i=t.length,a=Ra(n,i);Ia(r,a)||(e.uniform1iv(this.addr,a),La(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Oa,a[e])}function Co(e,t,n){let r=this.cache,i=t.length,a=Ra(n,i);Ia(r,a)||(e.uniform1iv(this.addr,a),La(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ka,a[e])}function wo(e,t,n){let r=this.cache,i=t.length,a=Ra(n,i);Ia(r,a)||(e.uniform1iv(this.addr,a),La(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Da,a[e])}function To(e){switch(e){case 5126:return ao;case 35664:return oo;case 35665:return so;case 35666:return co;case 35674:return lo;case 35675:return uo;case 35676:return fo;case 5124:case 35670:return po;case 35667:case 35671:return mo;case 35668:case 35672:return ho;case 35669:case 35673:return go;case 5125:return _o;case 36294:return vo;case 36295:return yo;case 36296:return bo;case 35678:case 36198:case 36298:case 36306:case 35682:return xo;case 35679:case 36299:case 36307:return So;case 35680:case 36300:case 36308:case 36293:return Co;case 36289:case 36303:case 36311:case 36292:return wo}}var Eo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=io(t.type)}},Do=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=To(t.type)}},Oo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ko=/(\w+)(\])?(\[|\.)?/g;function Ao(e,t){e.seq.push(t),e.map[t.id]=t}function jo(e,t,n){let r=e.name,i=r.length;for(ko.lastIndex=0;;){let a=ko.exec(r),o=ko.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ao(n,l===void 0?new Eo(s,e,t):new Do(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Oo(s),Ao(n,e)),n=e}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function No(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Po=37297,Fo=0;function Io(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Lo(e){let t=Yt.getPrimaries(Yt.workingColorSpace),n=Yt.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case $e:case tt:return[r,`LinearTransferOETF`];case Qe:case et:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Ro(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Io(e.getShaderSource(t),r)}return i}function zo(e,t){let n=Lo(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Bo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Vo=new Y;function Ho(){return Yt.getLuminanceCoefficients(Vo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Vo.x.toFixed(4)}, ${Vo.y.toFixed(4)}, ${Vo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Uo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ko).join(`
`)}function Wo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Go(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ko(e){return e!==``}function qo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yo=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(e){return e.replace(Yo,Qo)}var Zo=new Map;function Qo(e,t){let n=X[t];if(n===void 0){let e=Zo.get(t);if(e!==void 0)n=X[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Xo(n)}var $o=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function es(e){return e.replace($o,ts)}function ts(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ns(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function rs(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function is(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function as(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function os(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function ss(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function cs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=rs(n),l=is(n),u=as(n),d=os(n),f=ss(n),p=Uo(n),m=Wo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ko).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(g=[ns(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ko).join(`
`),_=[ns(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Bo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,zo(`linearToOutputTexel`,n.outputColorSpace),Ho(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ko).join(`
`)),o=Xo(o),o=qo(o,n),o=Jo(o,n),s=Xo(s),s=qo(s,n),s=Jo(s,n),o=es(o),s=es(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=No(i,i.VERTEX_SHADER,y),S=No(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ro(i,x,`vertex`),r=Ro(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Mo(i,h),T=Go(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Po)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ls=0,us=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ds(e),t.set(e,n)),n}},ds=class{constructor(e){this.id=ls++,this.code=e,this.usedTimes=0}};function fs(e,t,n,r,i,a,o){let s=new Zn,c=new us,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=Bi[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),ee=v.isInstancedMesh===!0,N=v.isBatchedMesh===!0,P=!!a.map,te=!!a.matcap,ne=!!S,F=!!a.aoMap,I=!!a.lightMap,L=!!a.bumpMap,R=!!a.normalMap,z=!!a.displacementMap,B=!!a.emissiveMap,re=!!a.metalnessMap,ie=!!a.roughnessMap,ae=a.anisotropy>0,oe=a.clearcoat>0,se=a.dispersion>0,ce=a.iridescence>0,le=a.sheen>0,V=a.transmission>0,ue=ae&&!!a.anisotropyMap,de=oe&&!!a.clearcoatMap,fe=oe&&!!a.clearcoatNormalMap,H=oe&&!!a.clearcoatRoughnessMap,pe=ce&&!!a.iridescenceMap,me=ce&&!!a.iridescenceThicknessMap,U=le&&!!a.sheenColorMap,he=le&&!!a.sheenRoughnessMap,W=!!a.specularMap,G=!!a.specularColorMap,ge=!!a.specularIntensityMap,_e=V&&!!a.transmissionMap,ve=V&&!!a.thicknessMap,ye=!!a.gradientMap,be=!!a.alphaMap,xe=a.alphaTest>0,Se=!!a.alphaHash,Ce=!!a.extensions,we=0;a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(we=e.toneMapping);let Te={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:N,batchingColor:N&&v._colorsTexture!==null,instancing:ee,instancingColor:ee&&v.instanceColor!==null,instancingMorph:ee&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:$e,alphaToCoverage:!!a.alphaToCoverage,map:P,matcap:te,envMap:ne,envMapMode:ne&&S.mapping,envMapCubeUVHeight:C,aoMap:F,lightMap:I,bumpMap:L,normalMap:R,displacementMap:p&&z,emissiveMap:B,normalMapObjectSpace:R&&a.normalMapType===1,normalMapTangentSpace:R&&a.normalMapType===0,metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:ue,clearcoat:oe,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:se,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:le,sheenColorMap:U,sheenRoughnessMap:he,specularMap:W,specularColorMap:G,specularIntensityMap:ge,transmission:V,transmissionMap:_e,thicknessMap:ve,gradientMap:ye,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:be,alphaTest:xe,alphaHash:Se,combine:a.combine,mapUv:P&&g(a.map.channel),aoMapUv:F&&g(a.aoMap.channel),lightMapUv:I&&g(a.lightMap.channel),bumpMapUv:L&&g(a.bumpMap.channel),normalMapUv:R&&g(a.normalMap.channel),displacementMapUv:z&&g(a.displacementMap.channel),emissiveMapUv:B&&g(a.emissiveMap.channel),metalnessMapUv:re&&g(a.metalnessMap.channel),roughnessMapUv:ie&&g(a.roughnessMap.channel),anisotropyMapUv:ue&&g(a.anisotropyMap.channel),clearcoatMapUv:de&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:U&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(a.sheenRoughnessMap.channel),specularMapUv:W&&g(a.specularMap.channel),specularColorMapUv:G&&g(a.specularColorMap.channel),specularIntensityMapUv:ge&&g(a.specularIntensityMap.channel),transmissionMapUv:_e&&g(a.transmissionMap.channel),thicknessMapUv:ve&&g(a.thicknessMap.channel),alphaMapUv:be&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(R||ae),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(P||be),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:we,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&Yt.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ce&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ce&&a.extensions.multiDraw===!0||N)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=Bi[t];n=gi.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new cs(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function ps(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ms(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||ms),r.length>1&&r.sort(t||hs),i.length>1&&i.sort(t||hs)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function _s(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new gs,e.set(t,[i])):n>=r.length?(i=new gs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function vs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Y,color:new Mr};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new Mr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new Mr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new Mr,groundColor:new Mr};break;case`RectAreaLight`:n={color:new Mr,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function ys(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var bs=0;function xs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ss(e){let t=new vs,n=ys(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Bn,o=new Bn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(xs);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=bs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Cs(e){let t=new Ss(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function ws(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Cs(e),t.set(n,[a])):r>=i.length?(a=new Cs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ts=class extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Xe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Es=class extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ds=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Os=`uniform sampler2D shadow_pass;
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
}`;function ks(e,t,n){let r=new Ii,i=new K,a=new K,o=new J,s=new Ts({depthPacking:Ze}),c=new Es,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Ds,fragmentShader:Os}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Xr;m.setAttribute(`position`,new zr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ci(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:O,magFilter:O};d.map!==null&&d.map.dispose(),d.map=new sn(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new sn(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var As={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function js(e){function t(){let t=!1,n=new J,r=null,i=new J(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?z(e.DEPTH_TEST):B(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=As[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):B(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new Mr(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=M>=1);let N=null,P={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),F=new J().fromArray(te),I=new J().fromArray(ne);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let R={};R[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),R[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),R[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(e.DEPTH_TEST),a.setFunc(3),V(!1),ue(1),z(e.CULL_FACE),ce(0);function z(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function B(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function re(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ie(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ae(t){return p!==t&&(e.useProgram(t),p=t,!0)}let oe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};oe[103]=e.MIN,oe[104]=e.MAX;let se={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(t,n,r,i,a,o,s,c,l,u){if(t===0){m===!0&&(B(e.BLEND),m=!1);return}if(m===!1&&(z(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(oe[n],oe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(se[r],se[i],se[o],se[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function le(t,n){t.side===2?B(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),V(r),t.blending===1&&t.transparent===!1?ce(0):ce(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),fe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):B(e.SAMPLE_ALPHA_TO_COVERAGE)}function V(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function ue(t){t===0?B(e.CULL_FACE):(z(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function de(t){t!==D&&(j&&e.lineWidth(t),D=t)}function fe(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):B(e.POLYGON_OFFSET_FILL)}function H(t){t?z(e.SCISSOR_TEST):B(e.SCISSOR_TEST)}function pe(t){t===void 0&&(t=e.TEXTURE0+A-1),N!==t&&(e.activeTexture(t),N=t)}function me(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+A-1:N);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||R[t]),i.type=t,i.texture=n)}function U(){let t=P[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function W(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function G(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(t){F.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),F.copy(t))}function we(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function Te(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ee(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},N=null,P={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new Mr(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,F.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:z,disable:B,bindFramebuffer:re,drawBuffers:ie,useProgram:ae,setBlending:ce,setMaterial:le,setFlipSided:V,setCullFace:ue,setLineWidth:de,setPolygonOffset:fe,setScissorTest:H,activeTexture:pe,bindTexture:me,unbindTexture:U,compressedTexImage2D:he,compressedTexImage3D:W,texImage2D:xe,texImage3D:Se,updateUBOMapping:Te,uniformBlockBinding:Ee,texStorage2D:ye,texStorage3D:be,texSubImage2D:G,texSubImage3D:ge,compressedTexSubImage2D:_e,compressedTexSubImage3D:ve,scissor:Ce,viewport:we,reset:De}}function Ms(e,t,n,r){let i=Ns(r);switch(n){case ae:return e*t;case ce:return e*t;case le:return e*t*2;case de:return e*t/i.components*i.byteLength;case fe:return e*t/i.components*i.byteLength;case H:return e*t*2/i.components*i.byteLength;case pe:return e*t*2/i.components*i.byteLength;case oe:return e*t*3/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case me:return e*t*4/i.components*i.byteLength;case U:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case W:case G:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:case ye:return Math.max(e,16)*Math.max(t,8)/4;case ge:case ve:return Math.max(e,8)*Math.max(t,8)/2;case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ie:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Le:case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Be:case Ve:return Math.ceil(e/4)*Math.ceil(t/4)*8;case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ns(e){switch(e){case N:case P:return{byteLength:1,components:1};case ne:case te:case R:return{byteLength:2,components:1};case z:case B:return{byteLength:2,components:4};case I:case F:case L:return{byteLength:4,components:1};case ie:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function Ps(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):Rt(`canvas`)}function h(e,t,n){let r=1,i=ye(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function _(t){e.generateMipmap(t)}function v(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?nt:Yt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function y(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function b(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function x(e){let t=e.target;t.removeEventListener(`dispose`,x),C(t),t.isVideoTexture&&u.delete(t)}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),N(t)}function C(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&w(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function w(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function N(t){let n=r.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let P=0;function te(){P=0}function ne(){let e=P;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function F(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,i){let a=r.get(t);if(t.isVideoTexture&&_e(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function R(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function z(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let B={[T]:e.REPEAT,[E]:e.CLAMP_TO_EDGE,[D]:e.MIRRORED_REPEAT},re={[O]:e.NEAREST,[k]:e.NEAREST_MIPMAP_NEAREST,[A]:e.NEAREST_MIPMAP_LINEAR,[j]:e.LINEAR,[M]:e.LINEAR_MIPMAP_NEAREST,[ee]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,B[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,B[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,B[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,x));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=F(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&w(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Yt.getPrimaries(Yt.workingColorSpace),r=o.colorSpace===``?null:Yt.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=ve(o,p);let m=a.convert(o.format,o.colorSpace),x=a.convert(o.type),S=v(o.internalFormat,m,x,o.colorSpace,o.isVideoTexture);ae(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=b(o,p);if(o.isDepthTexture)S=y(o.format===ue,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,x,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=Ms(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a,0,0)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data,0,0)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,x,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,x,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=Ms(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,x,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,x,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,x,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,x,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=ye(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,x,C):n.texImage2D(e.TEXTURE_2D,t,S,m,x,C);o.generateMipmaps=!1}else if(T){if(E){let t=ye(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,x,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,x,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Yt.getPrimaries(Yt.workingColorSpace),r=o.colorSpace===``?null:Yt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ve(o,m[e]);let y=m[0],x=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=v(o.internalFormat,x,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=b(o,y);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,y.width,y.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,x,S,i.data):x===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ye(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,x,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,x,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,x,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,x,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,x,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,x,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,x,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=v(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ge(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,0,G(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function V(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=y(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=G(n);ge(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=v(o.internalFormat,c,l,o.colorSpace),d=G(n);r&&ge(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):ge(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),I(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=G(i);if(i.depthTexture.format===1026)ge(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)ge(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);de(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),V(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),V(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,S);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ge(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=v(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=G(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),V(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),ae(e.TEXTURE_2D,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function me(t){let i=t.textures;for(let a=0,o=i.length;a<o;a++){let o=i[a];if(g(o)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(o).__webglTexture;n.bindTexture(i,a),_(i),n.unbindTexture()}}}let U=[],he=[];function W(t){if(t.samples>0){if(ge(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(U.length=0,he.length=0,U.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(U.push(l),he.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,he)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function G(e){return Math.min(i.maxSamples,e.samples)}function ge(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function _e(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ve(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ye(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=te,this.setTexture2D=I,this.setTexture2DArray=L,this.setTexture3D=R,this.setTextureCube=z,this.rebindTextures=H,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ge}function Fs(e,t){function n(n,r=``){let i,a=Yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Is=class extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ls=class extends pr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Rs={type:`move`},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vs=`
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

}`,Hs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new an,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:Bs,fragmentShader:Vs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Us=class extends ct{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new Hs,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new K,x=null,S=new wi;S.layers.enable(1),S.viewport=new J;let C=new wi;C.layers.enable(2),C.viewport=new J;let w=[S,C],T=new Is;T.layers.enable(1),T.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new zs,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new zs,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new zs,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new sn(f.framebufferWidth,f.framebufferHeight,{format:se,type:N,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?ue:V,a=h.stencil?re:I);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new sn(d.textureWidth,d.textureHeight,{format:se,type:N,depthTexture:new wa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let j=new Y,M=new Y;function ee(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far);let i=e.parent,a=T.cameras;P(T,i);for(let e=0;e<a.length;e++)P(a[e],i);a.length===2?ee(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),te(e,T,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ne=null;function F(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new wi,o.layers.enable(r),o.viewport=new J,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let L=new Li;L.setAnimationLoop(F),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Ws=new Xn,Gs=new Bn;function Ks(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,hi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ws.copy(o),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),e.envMapRotation.value.setFromMatrix4(Gs.makeRotationFromEuler(Ws)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function qs(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Js=class{constructor(e={}){let{canvas:t=zt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new J,E=new J,D=null,O=new Mr(0),k=0,A=t.width,j=t.height,M=1,P=null,te=null,ne=new J(0,0,A,j),F=new J(0,0,A,j),I=!1,L=new Ii,z=!1,B=!1,re=new Bn,ie=new Bn,ae=new Y,oe=new J,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function le(){return S===null?M:1}let V=n;function ue(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,Ne,!1),t.addEventListener(`webglcontextrestored`,Pe,!1),t.addEventListener(`webglcontextcreationerror`,Fe,!1),V===null){let t=`webgl2`;if(V=ue(t,e),V===null)throw ue(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let de,fe,H,pe,me,U,he,W,G,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae;function je(){de=new va(V),de.init(),Oe=new Fs(V,de),fe=new qi(V,de,e,Oe),H=new js(V),fe.reverseDepthBuffer&&H.buffers.depth.setReversed(!0),pe=new xa(V),me=new ps,U=new Ps(V,de,H,me,fe,Oe,pe),he=new Yi(v),W=new _a(v),G=new Ri(V),ke=new Gi(V,G),ge=new ya(V,G,pe,ke),_e=new Ca(V,ge,G,pe),Te=new Sa(V,fe,U),Se=new Ji(me),ve=new fs(v,he,W,de,fe,ke,Se),ye=new Ks(v,me),be=new _s,xe=new ws(de),we=new Wi(v,he,W,H,_e,d,s),Ce=new ks(v,_e,fe),Ae=new qs(V,pe,fe,H),Ee=new Ki(V,de,pe),De=new ba(V,de,pe),pe.programs=ve.programs,v.capabilities=fe,v.extensions=de,v.properties=me,v.renderLists=be,v.shadowMap=Ce,v.state=H,v.info=pe}je();let Me=new Us(v,V);this.xr=Me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=de.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=de.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){if(Me.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(ne)},this.setViewport=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),H.viewport(T.copy(ne).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(F)},this.setScissor=function(e,t,n,r){e.isVector4?F.set(e.x,e.y,e.z,e.w):F.set(e,t,n,r),H.scissor(E.copy(F).multiplyScalar(M).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(e){H.setScissorTest(I=e)},this.setOpaqueSort=function(e){P=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=we.getClearColor(),r=we.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,V.clearBufferuiv(V.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,V.clearBufferiv(V.COLOR,0,p))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,V.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ne,!1),t.removeEventListener(`webglcontextrestored`,Pe,!1),t.removeEventListener(`webglcontextcreationerror`,Fe,!1),be.dispose(),xe.dispose(),me.dispose(),he.dispose(),W.dispose(),_e.dispose(),ke.dispose(),Ae.dispose(),ve.dispose(),Me.dispose(),Me.removeEventListener(`sessionstart`,He),Me.removeEventListener(`sessionend`,Ue),We.stop()};function Ne(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Pe(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=pe.autoReset,t=Ce.enabled,n=Ce.autoUpdate,r=Ce.needsUpdate,i=Ce.type;je(),pe.autoReset=e,Ce.enabled=t,Ce.autoUpdate=n,Ce.needsUpdate=r,Ce.type=i}function Fe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ie(e){let t=e.target;t.removeEventListener(`dispose`,Ie),Le(t)}function Le(e){Re(e),me.remove(e)}function Re(e){let t=me.get(e).programs;t!==void 0&&(t.forEach(function(e){ve.releaseProgram(e)}),e.isShaderMaterial&&ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=tt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ke.setup(i,r,s,n,c);let h,g=Ee;if(c!==null&&(h=G.get(c),g=De,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*le()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*le()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(de.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?G.get(c).bytesPerElement:1,o=me.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ze(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Xe(e,t,n),e.side=0,e.needsUpdate=!0,Xe(e,t,n),e.side=2):Xe(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=xe.get(n),h.init(t),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ze(a,n,e),r.add(a)}else ze(t,n,e),r.add(t)}}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){me.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}de.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Be=null;function Ve(e){Be&&Be(e)}function He(){We.stop()}function Ue(){We.start()}let We=new Li;We.setAnimationLoop(Ve),typeof self<`u`&&We.setContext(self),this.setAnimationLoop=function(e){Be=e,Me.setAnimationLoop(e),e===null?We.stop():We.start()},Me.addEventListener(`sessionstart`,He),Me.addEventListener(`sessionend`,Ue),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(t),t=Me.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=xe.get(e,_.length),h.init(t),_.push(h),ie.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),L.setFromProjectionMatrix(ie),B=this.localClippingEnabled,z=Se.init(this.clippingPlanes,B),m=be.get(e,g.length),m.init(),g.push(m),Me.enabled===!0&&Me.isPresenting===!0){let e=v.xr.getDepthSensingMesh();e!==null&&Ge(e,t,-1/0,v.sortObjects)}Ge(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(P,te),ce=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ce&&we.addToRenderList(m,e),this.info.render.frame++,z===!0&&Se.beginShadows();let n=h.state.shadowsArray;Ce.render(n,e,t),z===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=m.opaque,i=m.transmissive;if(h.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];qe(r,i,e,a)}ce&&we.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ke(m,e,r,r.viewport)}}else i.length>0&&qe(r,i,e,t),ce&&we.render(e),Ke(m,e,t);S!==null&&(U.updateMultisampleRenderTarget(S),U.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),ke.resetDefaultState(),C=-1,w=null,_.pop(),_.length>0?(h=_[_.length-1],z===!0&&Se.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,g.pop(),m=g.length>0?g[g.length-1]:null};function Ge(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||L.intersectsSprite(e)){r&&oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);let t=_e.update(e),i=e.material;i.visible&&m.push(e,t,i,n,oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||L.intersectsObject(e))){let t=_e.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere.center)),oe.applyMatrix4(e.matrixWorld).applyMatrix4(ie)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,oe.z,o)}}else i.visible&&m.push(e,t,i,n,oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ge(i[e],t,n,r)}function Ke(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),z===!0&&Se.setGlobalState(v.clippingPlanes,n),r&&H.viewport(T.copy(r)),i.length>0&&Je(i,t,n),a.length>0&&Je(a,t,n),o.length>0&&Je(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function qe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[r.id]===void 0&&(h.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:de.has(`EXT_color_buffer_half_float`)||de.has(`EXT_color_buffer_float`)?R:N,minFilter:ee,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let a=h.state.transmissionRenderTarget[r.id],o=r.viewport||T;a.setSize(o.z,o.w);let s=v.getRenderTarget();v.setRenderTarget(a),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),ce&&we.render(n);let c=v.toneMapping;v.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),h.setupLightsView(r),z===!0&&Se.setGlobalState(v.clippingPlanes,r),Je(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),de.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Ye(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}v.setRenderTarget(s),v.setClearColor(O,k),l!==void 0&&(r.viewport=l),v.toneMapping=c}function Je(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ye(o,t,n,s,c,l)}}function Ye(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function Xe(e,t,n){t.isScene!==!0&&(t=se);let r=me.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=ve.getParameters(e,i.state,a,t,n),c=ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?W:he).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ie),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return et(e,s),u}else s.uniforms=ve.getUniforms(e),e.onBeforeCompile(s,v),u=ve.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Se.uniform),et(e,s),r.needsLights=rt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Ze(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Mo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function et(e,t){let n=me.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function tt(e,t,n,r,i){t.isScene!==!0&&(t=se),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:$e,c=(r.isMeshStandardMaterial?W:he).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=me.get(r),b=h.state.lights;if(z===!0&&(B===!0||e!==w)){let t=e===w&&r.id===C;Se.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Se.numPlanes||y.numIntersection!==Se.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=Xe(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(H.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){fe.reverseDepthBuffer?(re.copy(e.projectionMatrix),Ut(re),Wt(re),k.setValue(V,`projectionMatrix`,re)):k.setValue(V,`projectionMatrix`,e.projectionMatrix),k.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(V,ae.setFromMatrixPosition(e.matrixWorld)),fe.logarithmicDepthBuffer&&k.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(V,i,`bindMatrix`),k.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(V,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(k.setOptional(V,i,`batchingTexture`),k.setValue(V,`batchingTexture`,i._matricesTexture,U),k.setOptional(V,i,`batchingIdTexture`),k.setValue(V,`batchingIdTexture`,i._indirectTexture,U),k.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(V,`batchingColorTexture`,i._colorsTexture,U));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Te.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(V,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&nt(A,O),a&&r.fog===!0&&ye.refreshFogUniforms(A,a),ye.refreshMaterialUniforms(A,r,M,j,h.state.transmissionRenderTarget[e.id]),Mo.upload(V,Ze(y),A,U)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Mo.upload(V,Ze(y),A,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(V,`center`,i.center),k.setValue(V,`modelViewMatrix`,i.modelViewMatrix),k.setValue(V,`normalMatrix`,i.normalMatrix),k.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ae.update(n,T),Ae.bind(n,T)}}return T}function nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function rt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){me.get(e.texture).__webglTexture=t,me.get(e.depthTexture).__webglTexture=n;let r=me.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||de.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=me.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=me.get(e);if(s.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(V.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(s.__hasExternalTextures)U.rebindTextures(e,me.get(e.texture).__webglTexture,me.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&me.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=me.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&U.useMultisampledRTT(e)===!1?me.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(ne).multiplyScalar(M).floor(),E.copy(F).multiplyScalar(M).floor(),D=I;if(H.bindFramebuffer(V.FRAMEBUFFER,i)&&r&&H.drawBuffers(e,i),H.viewport(T),H.scissor(E),H.setScissorTest(D),a){let r=me.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=me.get(e.texture),i=t||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){H.bindFramebuffer(V.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!fe.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!fe.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Oe.convert(s),Oe.convert(c),a)}finally{let e=S===null?null:me.get(S).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!fe.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!fe.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,s);let e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,e),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Oe.convert(c),Oe.convert(l),0);let o=S===null?null:me.get(S).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,o);let u=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ht(V,u,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.deleteBuffer(e),V.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Vt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Vt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Oe.convert(t.format),f=Oe.convert(t.type);U.setTexture2D(t,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let p=V.getParameter(V.UNPACK_ROW_LENGTH),m=V.getParameter(V.UNPACK_IMAGE_HEIGHT),h=V.getParameter(V.UNPACK_SKIP_PIXELS),g=V.getParameter(V.UNPACK_SKIP_ROWS),_=V.getParameter(V.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,v.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,v.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,s),V.pixelStorei(V.UNPACK_SKIP_ROWS,c),e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):V.texSubImage2D(V.TEXTURE_2D,i,l,u,a,o,d,f,v),V.pixelStorei(V.UNPACK_ROW_LENGTH,p),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,m),V.pixelStorei(V.UNPACK_SKIP_PIXELS,h),V.pixelStorei(V.UNPACK_SKIP_ROWS,g),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Vt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Oe.convert(t.format),g=Oe.convert(t.type),_;if(t.isData3DTexture)U.setTexture3D(t,0),_=V.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)U.setTexture2DArray(t,0),_=V.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let v=V.getParameter(V.UNPACK_ROW_LENGTH),y=V.getParameter(V.UNPACK_IMAGE_HEIGHT),b=V.getParameter(V.UNPACK_SKIP_PIXELS),x=V.getParameter(V.UNPACK_SKIP_ROWS),S=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,m.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,m.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,c),V.pixelStorei(V.UNPACK_SKIP_ROWS,l),V.pixelStorei(V.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?V.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):V.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),V.pixelStorei(V.UNPACK_ROW_LENGTH,v),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,y),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b),V.pixelStorei(V.UNPACK_SKIP_ROWS,x),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&V.generateMipmap(_),H.unbindTexture()},this.initRenderTarget=function(e){me.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,H.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return st}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Yt.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},Ys=class extends pr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ot,this.updateRanges=[],this.version=0,this.uuid=pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zs=new Y,Qs=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix4(e),this.setXYZ(t,Zs.x,Zs.y,Zs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyNormalMatrix(e),this.setXYZ(t,Zs.x,Zs.y,Zs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.transformDirection(e),this.setXYZ(t,Zs.x,Zs.y,Zs.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new zr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$s=class extends an{constructor(e=null,t=1,n=1,r,i,a,o,s,c=O,l=O,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ec=class extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Mr(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tc=new Y,nc=new Y,rc=new Bn,ic=new zn,ac=new jn,oc=new Y,sc=new Y,cc=class extends pr{constructor(e=new Xr,t=new ec){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)tc.fromBufferAttribute(t,e-1),nc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=tc.distanceTo(nc);e.setAttribute(`lineDistance`,new Hr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),ac.radius+=i,e.ray.intersectsSphere(ac)===!1)return;rc.copy(r).invert(),ic.copy(e.ray).applyMatrix4(rc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=lc(this,e,ic,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=lc(this,e,ic,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=lc(this,e,ic,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=lc(this,e,ic,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function lc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(tc.fromBufferAttribute(o,i),nc.fromBufferAttribute(o,a),n.distanceSqToSegment(tc,nc,oc,sc)>r)return;oc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(oc);if(!(s<t.near||s>t.far))return{distance:s,point:sc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var uc=class extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Mr(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dc=new Bn,Q=new zn,fc=new jn,pc=new Y,mc=class extends pr{constructor(e=new Xr,t=new uc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(r),fc.radius+=i,e.ray.intersectsSphere(fc)===!1)return;dc.copy(r).invert(),Q.copy(e.ray).applyMatrix4(dc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);pc.fromBufferAttribute(l,n),hc(pc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)pc.fromBufferAttribute(l,a),hc(pc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hc(e,t,n,r,i,a,o){let s=Q.distanceSqToPoint(e);if(s<n){let n=new Y;Q.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gc=class extends Xr{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new Y,i=new Y;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),_c(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),_c(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new Hr(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function _c(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}var vc=class extends ec{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function yc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function bc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var xc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Sc=class extends xc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qe,endingEnd:qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Je:i=e,o=2*t-n;break;case Ye:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Je:a=e,s=2*n-t;break;case Ye:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Cc=class extends xc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},wc=class extends xc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Tc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case We:t=this.InterpolantFactoryMethodDiscrete;break;case Ge:t=this.InterpolantFactoryMethodLinear;break;case Ke:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return We;case this.InterpolantFactoryMethodLinear:return Ge;case this.InterpolantFactoryMethodSmooth:return Ke}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&bc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Tc.prototype.TimeBufferType=Float32Array,Tc.prototype.ValueBufferType=Float32Array,Tc.prototype.DefaultInterpolation=Ge;var Ec=class extends Tc{constructor(e,t,n){super(e,t,n)}};Ec.prototype.ValueTypeName=`bool`,Ec.prototype.ValueBufferType=Array,Ec.prototype.DefaultInterpolation=We,Ec.prototype.InterpolantFactoryMethodLinear=void 0,Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Tc{};Dc.prototype.ValueTypeName=`color`;var Oc=class extends Tc{};Oc.prototype.ValueTypeName=`number`;var kc=class extends xc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)un.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ac=class extends Tc{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Ac.prototype.ValueTypeName=`quaternion`,Ac.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Tc{constructor(e,t,n){super(e,t,n)}};jc.prototype.ValueTypeName=`string`,jc.prototype.ValueBufferType=Array,jc.prototype.DefaultInterpolation=We,jc.prototype.InterpolantFactoryMethodLinear=void 0,jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Tc{};Mc.prototype.ValueTypeName=`vector`;var Nc=class extends Xr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Pc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fc(){return performance.now()}var Ic=`\\[\\]\\.:\\/`,Lc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Rc=`[^\\[\\]\\.:\\/]`,zc=`[^`+Ic.replace(`\\.`,``)+`]`,Bc=`((?:WC+[\\/:])*)`.replace(`WC`,Rc),Vc=`(WCOD+)?`.replace(`WCOD`,zc),Hc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Rc),Uc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Rc),Wc=RegExp(`^`+Bc+Vc+Hc+Uc+`$`),Gc=[`material`,`materials`,`bones`,`map`],Kc=class{constructor(e,t,n){let r=n||qc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Lc,``)}static parseTrackName(e){let t=Wc.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Gc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qc.Composite=Kc,qc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qc.prototype.GetterByBindingType=[qc.prototype._getValue_direct,qc.prototype._getValue_array,qc.prototype._getValue_arrayElement,qc.prototype._getValue_toArray],qc.prototype.SetterByBindingTypeAndVersioning=[[qc.prototype._setValue_direct,qc.prototype._setValue_direct_setNeedsUpdate,qc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qc.prototype._setValue_array,qc.prototype._setValue_array_setNeedsUpdate,qc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qc.prototype._setValue_arrayElement,qc.prototype._setValue_arrayElement_setNeedsUpdate,qc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qc.prototype._setValue_fromArray,qc.prototype._setValue_fromArray_setNeedsUpdate,qc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jc=class extends Xs{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Yc=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Xc=new Y,Zc=new Y,Qc=class{constructor(e=new Y,t=new Y){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xc.subVectors(e,this.start),Zc.subVectors(this.end,this.start);let n=Zc.dot(Zc),r=Zc.dot(Xc)/n;return t&&(r=mt(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},$c=class extends ct{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`169`);var el={type:`change`},tl={type:`start`},nl={type:`end`},rl=new zn,il=new Ni,al=Math.cos(70*Ft.DEG2RAD),ol=new Y,sl=2*Math.PI,cl={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ll=1e-6,ul=class extends $c{constructor(e,t=null){super(e,t),this.state=cl.NONE,this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:C.ROTATE,MIDDLE:C.DOLLY,RIGHT:C.PAN},this.touches={ONE:w.ROTATE,TWO:w.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new un,this._lastTargetPosition=new Y,this._quat=new un().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yc,this._sphericalDelta=new Yc,this._scale=1,this._panOffset=new Y,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new Y,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fl.bind(this),this._onPointerDown=dl.bind(this),this._onPointerUp=pl.bind(this),this._onContextMenu=bl.bind(this),this._onMouseWheel=gl.bind(this),this._onKeyDown=_l.bind(this),this._onTouchStart=vl.bind(this),this._onTouchMove=yl.bind(this),this._onMouseDown=ml.bind(this),this._onMouseMove=hl.bind(this),this._interceptControlDown=xl.bind(this),this._interceptControlUp=Sl.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(el),this.update(),this.state=cl.NONE}update(e=null){let t=this.object.position;ol.copy(t).sub(this.target),ol.applyQuaternion(this._quat),this._spherical.setFromVector3(ol),this.autoRotate&&this.state===cl.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=sl:n>Math.PI&&(n-=sl),r<-Math.PI?r+=sl:r>Math.PI&&(r-=sl),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(ol.setFromSpherical(this._spherical),ol.applyQuaternion(this._quatInverse),t.copy(this.target).add(ol),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=ol.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new Y(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new Y(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=ol.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<al?this.object.lookAt(this.target):(il.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(il,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ll||this._lastTargetPosition.distanceToSquared(this.target)>ll?(this.dispatchEvent(el),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?sl/60/60*this.autoRotateSpeed:sl/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ol.setFromMatrixColumn(t,0),ol.multiplyScalar(-e),this._panOffset.add(ol)}_panUp(e,t){this.screenSpacePanning===!0?ol.setFromMatrixColumn(t,1):(ol.setFromMatrixColumn(t,0),ol.crossVectors(this.object.up,ol)),ol.multiplyScalar(e),this._panOffset.add(ol)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ol.copy(r).sub(this.target);let i=ol.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sl*this._rotateDelta.x/t.clientHeight),this._rotateUp(sl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(sl*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-sl*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(sl*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-sl*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sl*this._rotateDelta.x/t.clientHeight),this._rotateUp(sl*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dl(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function fl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function pl(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(nl),this.state=cl.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ml(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case C.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=cl.DOLLY;break;case C.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=cl.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=cl.ROTATE}break;case C.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=cl.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=cl.PAN}break;default:this.state=cl.NONE}this.state!==cl.NONE&&this.dispatchEvent(tl)}function hl(e){switch(this.state){case cl.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case cl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case cl.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function gl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===cl.NONE&&(e.preventDefault(),this.dispatchEvent(tl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(nl))}function _l(e){this.enabled!==!1&&this.enablePan!==!1&&this._handleKeyDown(e)}function vl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case w.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=cl.TOUCH_ROTATE;break;case w.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=cl.TOUCH_PAN;break;default:this.state=cl.NONE}break;case 2:switch(this.touches.TWO){case w.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=cl.TOUCH_DOLLY_PAN;break;case w.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=cl.TOUCH_DOLLY_ROTATE;break;default:this.state=cl.NONE}break;default:this.state=cl.NONE}this.state!==cl.NONE&&this.dispatchEvent(tl)}function yl(e){switch(this._trackPointer(e),this.state){case cl.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case cl.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case cl.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case cl.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=cl.NONE}}function bl(e){this.enabled!==!1&&e.preventDefault()}function xl(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Sl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Cl=new pn,wl=new Y,Tl=class extends Nc{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new Hr([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new Hr([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Jc(t,6,1);return this.setAttribute(`instanceStart`,new Qs(n,3,0)),this.setAttribute(`instanceEnd`,new Qs(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Jc(t,6,1);return this.setAttribute(`instanceColorStart`,new Qs(n,3,0)),this.setAttribute(`instanceColorEnd`,new Qs(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new gc(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Cl.setFromBufferAttribute(t),this.boundingBox.union(Cl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)wl.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(wl)),wl.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(wl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}};Z.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new K(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Bi.line={uniforms:gi.merge([Z.common,Z.fog,Z.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var El=class extends yi{constructor(e){super({type:`LineMaterial`,uniforms:gi.clone(Bi.line.uniforms),vertexShader:Bi.line.vertexShader,fragmentShader:Bi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Dl=new J,Ol=new Y,kl=new Y,Al=new J,jl=new J,Ml=new J,Nl=new Y,Pl=new Bn,Fl=new Qc,Il=new Y,Ll=new pn,Rl=new jn,zl=new J,Bl,Vl;function Hl(e,t,n){return zl.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),zl.multiplyScalar(1/zl.w),zl.x=Vl/n.width,zl.y=Vl/n.height,zl.applyMatrix4(e.projectionMatrixInverse),zl.multiplyScalar(1/zl.w),Math.abs(Math.max(zl.x,zl.y))}function Ul(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Fl.start.fromBufferAttribute(i,r),Fl.end.fromBufferAttribute(a,r),Fl.applyMatrix4(n);let o=new Y,s=new Y;Bl.distanceSqToSegment(Fl.start,Fl.end,s,o),s.distanceTo(o)<Vl*.5&&t.push({point:s,pointOnLine:o,distance:Bl.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function Wl(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Bl.at(1,Ml),Ml.w=1,Ml.applyMatrix4(t.matrixWorldInverse),Ml.applyMatrix4(r),Ml.multiplyScalar(1/Ml.w),Ml.x*=i.x/2,Ml.y*=i.y/2,Ml.z=0,Nl.copy(Ml),Pl.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Al.fromBufferAttribute(s,t),jl.fromBufferAttribute(c,t),Al.w=1,jl.w=1,Al.applyMatrix4(Pl),jl.applyMatrix4(Pl),Al.z>u&&jl.z>u)continue;if(Al.z>u){let e=Al.z-jl.z,t=(Al.z-u)/e;Al.lerp(jl,t)}else if(jl.z>u){let e=jl.z-Al.z,t=(jl.z-u)/e;jl.lerp(Al,t)}Al.applyMatrix4(r),jl.applyMatrix4(r),Al.multiplyScalar(1/Al.w),jl.multiplyScalar(1/jl.w),Al.x*=i.x/2,Al.y*=i.y/2,jl.x*=i.x/2,jl.y*=i.y/2,Fl.start.copy(Al),Fl.start.z=0,Fl.end.copy(jl),Fl.end.z=0;let o=Fl.closestPointToPointParameter(Nl,!0);Fl.at(o,Il);let l=Ft.lerp(Al.z,jl.z,o),d=l>=-1&&l<=1,f=Nl.distanceTo(Il)<Vl*.5;if(d&&f){Fl.start.fromBufferAttribute(s,t),Fl.end.fromBufferAttribute(c,t),Fl.start.applyMatrix4(a),Fl.end.applyMatrix4(a);let r=new Y,i=new Y;Bl.distanceSqToSegment(Fl.start,Fl.end,i,r),n.push({point:i,pointOnLine:r,distance:Bl.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Gl=class extends ci{constructor(e=new Tl,t=new El({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Ol.fromBufferAttribute(t,e),kl.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Ol.distanceTo(kl);let i=new Jc(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Qs(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Qs(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Bl=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Vl=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Rl.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Vl*.5:Hl(r,Math.max(r.near,Rl.distanceToPoint(Bl.origin)),s.resolution),Rl.radius+=c,Bl.intersectsSphere(Rl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ll.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Vl*.5:Hl(r,Math.max(r.near,Ll.distanceToPoint(Bl.origin)),s.resolution),Ll.expandByScalar(l),Bl.intersectsBox(Ll)!==!1&&(n?Ul(this,t):Wl(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Dl),this.material.uniforms.resolution.value.set(Dl.z,Dl.w))}},Kl=class extends Tl{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},ql=class extends Gl{constructor(e=new Kl,t=new El({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Jl=-127.15,Yl=45.15,Xl=111.32*Math.cos(Yl*Math.PI/180),Zl=111.13,Ql=e=>(e-Jl)*Xl,$l=e=>-(e-Yl)*Zl,eu=e=>e/Xl+Jl,tu=e=>-e/Zl+Yl;function nu(e,t){let{ncols:n,nrows:r,west:i,south:a,cellsize:o}=e,s=new Int16Array(t),c=(e,t)=>s[Math.min(r-1,Math.max(0,e))*n+Math.min(n-1,Math.max(0,t))];return{meta:e,heights:s,H:c,sample:(e,t)=>{let s=(e-i)/o-.5,l=r-(t-a)/o-.5;if(s<-.5||l<-.5||s>n-.5||l>r-.5)return null;let u=Math.floor(s),d=Math.floor(l),f=s-u,p=l-d,m=c(d,u)*(1-f)+c(d,u+1)*f,h=c(d+1,u)*(1-f)+c(d+1,u+1)*f;return m*(1-p)+h*p},box:[Ql(i),Ql(i+n*o),$l(a+r*o),$l(a)]}}var ru=e=>(t,n)=>{for(let r of e){let e=r.sample(t,n);if(e!==null)return e}return-2500};function iu(e,t=1){let{ncols:n,nrows:r,west:i,south:a,cellsize:o}=e.meta,s=e.H,c=n*r,l=o*Xl,u=o*Zl,d=t,f=new Float32Array(c*3),p=new Float32Array(c),m=new Float32Array(c*2);for(let t=0,c=0;t<r;t++)for(let h=0;h<n;h++,c++)f[c*3]=Ql(i+(h+.5)*o),f[c*3+2]=$l(a+(r-t-.5)*o),p[c]=e.heights[c],m[c*2]=(s(t,h+d)-s(t,h-d))/(2*d*l),m[c*2+1]=(s(t+d,h)-s(t-d,h))/(2*d*u);let h=new Uint32Array((n-1)*(r-1)*6),g=0;for(let e=0;e<r-1;e++)for(let t=0;t<n-1;t++){let r=e*n+t,i=r+1,a=r+n,o=a+1;h.set([r,a,i,i,a,o],g),g+=6}return{positions:f,elev:p,grad:m,index:h}}async function au(e,t=fetch){let n={};return await Promise.all(Object.entries(e.grids).map(async([e,r])=>{let i=y(`terrain/${e}.bin`),a=e=>Error(`The atlas terrain is incomplete: ${i} ${e}. Rebuild it with: ${v}`),o=await t(i);if(!o.ok)throw o.status===404?a(`is missing`):Error(`Could not load ${i} (HTTP ${o.status})`);if(o.headers?.get(`content-type`)?.includes(`html`))throw a(`is missing`);let s=await o.arrayBuffer(),c=r.ncols*r.nrows*2;if(s.byteLength!==c)throw a(`has ${s.byteLength} bytes; expected ${c}`);n[e]=nu(r,s)})),n}var ou=`
  attribute float elev; attribute vec2 grad;
  attribute float drop;   // meters to lower a vertex without changing its color (tile skirts); 0 when absent
  uniform float uExag, uFlat;
  uniform sampler2D uMask; uniform float uMaskOn; uniform vec4 uMaskRect;
  varying float vElev; varying vec3 vPos; varying vec3 vN; varying float vHidden;
  // Where a finer level's tile is showing (the coverage mask), this level sinks 25 m beneath it, in 2D too.
  // Sinking rather than discarding keeps a sloped rim at the edge of the finer tiles, so a step up to this
  // level behind them is always covered (a discard left hairline cracks of background there).
  float sunk(vec2 xz) {
    if (uMaskOn < 0.5) return 0.0;
    vec2 muv = (xz - uMaskRect.xy) / (uMaskRect.zw - uMaskRect.xy);
    return muv.x >= 0.0 && muv.x <= 1.0 && muv.y >= 0.0 && muv.y <= 1.0 && texture2D(uMask, muv).r > 0.5 ? 25.0 : 0.0;
  }
  void main() {
    float s = 0.001 * uExag * (1.0 - uFlat);
    float sn = 0.001 * uExag;
    float under = sunk((modelMatrix * vec4(position, 1.0)).xz);
    vec3 p = position; p.y = (elev - drop) * s - under * sn;
    vHidden = max(drop, under);   // skirts and sunk levels: covered when opaque, but they would show through glass
    vElev = elev; vN = normalize(vec3(-grad.x * sn, 1.0, -grad.y * sn));
    vec4 wp = modelMatrix * vec4(p, 1.0); vPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,su=`
  uniform float uMode, uFlat, uLines, uMute, uInterval;
  uniform vec4 uHoleA, uHoleB; uniform float uHoles;
  uniform vec4 uHoleC; uniform float uHoleCOn; uniform vec4 uClip; uniform float uClipOn;
  uniform float uSee; uniform vec3 uGlass;   // subsurface view: the seafloor turns to glass within uGlass (x, z, radius)
  varying float vElev; varying vec3 vPos; varying vec3 vN; varying float vHidden;
  vec3 depthRamp(float d) {
    vec3 c0 = vec3(0.86, 0.86, 0.80), c1 = vec3(0.62, 0.71, 0.69), c2 = vec3(0.38, 0.51, 0.53),
         c3 = vec3(0.21, 0.31, 0.35), c4 = vec3(0.12, 0.16, 0.19);
    if (d < 700.0) return mix(c0, c1, d / 700.0);
    if (d < 2000.0) return mix(c1, c2, (d - 700.0) / 1300.0);
    if (d < 3000.0) return mix(c2, c3, (d - 2000.0) / 1000.0);
    return mix(c3, c4, clamp((d - 3000.0) / 1800.0, 0.0, 1.0));
  }
  bool inBox(vec4 b) { return vPos.x > b.x && vPos.x < b.y && vPos.z > b.z && vPos.z < b.w; }
  float contour(float interval, float width) {
    float v = vElev / interval; float f = abs(fract(v - 0.5) - 0.5); float w = fwidth(v) * width;
    return 1.0 - smoothstep(0.0, w, f);
  }
  void main() {
    if (uHoles > 0.5 && (inBox(uHoleA) || inBox(uHoleB))) discard;
    if (uHoleCOn > 0.5 && inBox(uHoleC)) discard;
    if (uClipOn > 0.5 && !inBox(uClip)) discard;
    float glass = uSee * (1.0 - smoothstep(uGlass.z * 0.7, uGlass.z, distance(vPos.xz, uGlass.xy)));
    if (glass > 0.01 && vHidden > 0.0) discard;
    vec3 n = normalize(vN);
    float shade = clamp(dot(n, normalize(vec3(-0.8, 1.0, -0.9))), 0.0, 1.0);
    float hill = mix(0.38, 1.1, shade);
    float depth = -vElev;
    vec3 base;
    if (vElev > 0.0) base = uMode < 0.5 ? mix(vec3(0.44, 0.43, 0.40), vec3(0.60, 0.59, 0.55), clamp(vElev / 900.0, 0.0, 1.0)) : vec3(0.36);
    else if (uMode < 0.5) base = depthRamp(depth);
    else base = vec3(mix(0.70, 0.16, clamp(depth / 4800.0, 0.0, 1.0)));
    vec3 col = base * hill;
    float minor = contour(uInterval, 1.0), major = contour(uInterval * 5.0, 1.5);
    float coast = step(-80.0, vElev) * step(vElev, 80.0) * contour(160.0, 1.8);
    col = mix(col, col * 0.62, (0.18 * minor + 0.4 * major) * (1.0 - uLines));
    vec3 lineCol = uMode < 0.5 ? mix(base, vec3(1.0), 0.35) : vec3(0.88);
    vec3 lineFill = (vec3(0.085) + base * 0.07) * mix(1.0, mix(0.55, 1.6, shade), 1.0 - uFlat);
    lineFill = mix(lineFill, lineCol * 0.6, minor * 0.5);
    lineFill = mix(lineFill, lineCol, major * 0.9);
    col = mix(col, lineFill, uLines);
    col = mix(col, vec3(0.93, 0.91, 0.86), coast * mix(0.5, 0.9, uLines));
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(lum) * 0.5, uMute * 0.8);
    // Over Axial's subsurface the seafloor turns to glass; its contours stay more opaque, so the surface still reads.
    gl_FragColor = vec4(col, 1.0 - glass * (1.0 - mix(0.35, 0.8, max(0.5 * minor, major))));
  }`,cu=new $s(new Uint8Array([0]),1,1,de);cu.needsUpdate=!0;function lu(e,t,n,r={}){return new yi({vertexShader:ou,fragmentShader:su,uniforms:{uExag:e.exag,uFlat:e.flat,uLines:e.lines,uMode:e.mode,uMute:e.mute,uInterval:{value:t},uHoles:{value:+!!n},uHoleA:{value:e.holeA},uHoleB:{value:e.holeB},uHoleC:{value:r.holeC??new J},uHoleCOn:{value:+!!r.holeC},uClip:{value:r.clip??new J},uClipOn:{value:+!!r.clip},uSee:e.see??{value:0},uGlass:e.glass??{value:new Y(0,0,0)},uMask:{value:r.mask??cu},uMaskOn:{value:+!!r.mask},uMaskRect:{value:r.maskRect??new J}}})}function uu(e,t,n,r){let i=new Float32Array(t*t);for(let a=0;a<t;a++){let o=0;for(let s=0;s<t;s++)o+=e[a*t+s],i[a*t+s]=o/n+r}return i}function du(e,t,n,r){let i=[new Set(e[0].have),new Set,new Set],a=(e,n,i)=>{let[a,o]=r(e,n);return Math.hypot(a-t.x,o-t.z)<i};if(n<4){let t=Math.min(1.2,Math.max(.35,n*.35));for(let n of e[2].have)if(a(2,n,t)){i[2].add(n);let[e,t]=n.split(`_`).map(Number);i[1].add(`${Math.floor(e/4)}_${Math.floor(t/4)}`)}}if(n<25){let t=Math.min(4,Math.max(1.5,n*.5));for(let n of e[1].have)a(1,n,t)&&i[1].add(n)}return i}function fu(e,t,n,r,i){let a=i*Xl,o=i*Zl,s=t*t,c=4*(t-1),l=(n,r)=>e[Math.min(t-1,Math.max(0,n))*t+Math.min(t-1,Math.max(0,r))],u=new Float32Array((s+c)*3),d=new Float32Array(s+c),f=new Float32Array((s+c)*2),p=new Float32Array(s+c);for(let s=0,c=0;s<t;s++)for(let p=0;p<t;p++,c++){u[c*3]=Ql(n+(p+.5)*i),u[c*3+2]=$l(r-(s+.5)*i),d[c]=e[c];let m=Math.min(p+1,t-1)-Math.max(p-1,0),h=Math.min(s+1,t-1)-Math.max(s-1,0);f[c*2]=(l(s,p+1)-l(s,p-1))/(m*a),f[c*2+1]=(l(s+1,p)-l(s-1,p))/(h*o)}let m=[];for(let e=0;e<t-1;e++)for(let n=0;n<t-1;n++){let r=e*t+n,i=r+1,a=r+t,o=a+1;m.push(r,a,i,i,a,o)}let h=[];for(let e=0;e<t-1;e++)h.push(e);for(let e=0;e<t-1;e++)h.push(e*t+t-1);for(let e=t-1;e>0;e--)h.push((t-1)*t+e);for(let e=t-1;e>0;e--)h.push(e*t);h.forEach((e,t)=>{let n=s+t;u[n*3]=u[e*3],u[n*3+2]=u[e*3+2],d[n]=d[e],f[n*2]=f[e*2],f[n*2+1]=f[e*2+1],p[n]=25});for(let e=0;e<h.length;e++){let t=h[e],n=h[(e+1)%h.length],r=s+e,i=s+(e+1)%h.length;m.push(t,r,n,n,r,i)}return{positions:u,elev:d,grad:f,drop:p,index:new Uint32Array(m)}}function pu(e,t,n,r,i,a,o,s){let{west:c,east:l,north:u,south:d}=a;for(let a=0,f=0;a<t;a++)for(let p=0;p<t;p++,f++){let t=n+(p+.5)*i,m=r-(a+.5)*i,h=Math.min((t-c)*Xl,(l-t)*Xl,(u-m)*Zl,(m-d)*Zl);if(h>=s)continue;let g=o(t,m);if(g==null)continue;let _=Math.max(0,h/s),v=_*_*(3-2*_);e[f]=g+(e[f]-g)*v}return e}function mu(e,t,n,r,i,a){let o=e+n/2,s=t-n/2;return[o,s,o+i*r,s-a*r]}var hu=[50,20,10],gu=3e4,_u=.5;async function vu(e,t,n,r){let i=await fetch(e);if(!i.ok)throw Error(`${e}: HTTP ${i.status}`);if(i.headers?.get(`content-type`)?.includes(`html`))throw Error(`${e} is missing`);let a=new Uint8Array(await i.arrayBuffer()),o=a[0]===31&&a[1]===139?new Uint8Array(await new Response(new Blob([a]).stream().pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer()):a;if(o.byteLength!==t*t*2)throw Error(`${e} has ${o.byteLength} bytes; expected ${t*t*2}`);return uu(new Int16Array(o.buffer,o.byteOffset,t*t),t,n,r)}var yu=class e{static async create(t,n,r,i=y(`auv/`),a=null){let o;try{let e=await fetch(i+`index.json`);if(!e.ok)return null;o=await e.json()}catch{return null}let s=new e(t,n,r,i,o,a);try{await s._loadBase()}catch(e){return s.dispose(),console.warn(`Axial summit detail is unavailable: ${e.message}`),null}return s}constructor(e,t,n,r,i,a=null){Object.assign(this,{scene3d:e,base:r,index:i,ground:a,S:i.tileCells+1,credit:i.credit,last:0,pending:new Set,cache:new Map,cacheMax:160,failed:new Map});let{west:o,north:s}=i;this.levels=i.levels.map(e=>({...e,tileDeg:e.cellDeg*i.tileCells,have:new Set(e.tiles.map(([e,t])=>`${e}_${t}`))})),this.masks=this.levels.map(e=>{let t=new $s(new Uint8Array(e.tilesX*e.tilesY),e.tilesX,e.tilesY,de);t.magFilter=t.minFilter=O,t.needsUpdate=!0;let[n,r,i,a]=mu(o,s,e.cellDeg,e.tileDeg,e.tilesX,e.tilesY);return{t,rect:new J(Ql(n),$l(r),Ql(i),$l(a))}});let c=this.east=o+i.nx*i.cellDeg,l=this.south=s-i.ny*i.cellDeg,u=.04;this.clip=new J(Ql(o),Ql(c),$l(s),$l(l)),this.box=new J(this.clip.x+u,this.clip.y-u,this.clip.z+u,this.clip.w-u),this.mats=this.levels.map((e,r)=>n(t,hu[r],!1,{clip:this.clip,...this.masks[r+1]?{mask:this.masks[r+1].t,maskRect:this.masks[r+1].rect}:{}})),this.shown=this.levels.map(()=>new Map),this.heights=new Map}origin(e,t,n){return{lon0:this.index.west+n*e.tileDeg,lat0:this.index.north-t*e.tileDeg}}center=(e,t)=>{let n=this.levels[e],[r,i]=t.split(`_`).map(Number),a=this.origin(n,r,i);return[Ql(a.lon0+n.tileDeg/2),$l(a.lat0-n.tileDeg/2)]};async _geometry(e,t){let n=`${e}:${t}`;if(this.cache.has(n)){let e=this.cache.get(n);return this.cache.delete(n),this.cache.set(n,e),e}if(this.pending.has(n)||this.failed.get(n)>performance.now())return null;this.pending.add(n);try{let r=this.levels[e],[i,a]=t.split(`_`).map(Number),o=this.origin(r,i,a),s=await vu(`${this.base}L${e}/${t}.bin.gz`,this.S,this.index.zScale,this.index.zOffset);this.ground&&pu(s,this.S,o.lon0,o.lat0,r.cellDeg,{west:this.index.west,east:this.east,north:this.index.north,south:this.south},this.ground,_u),e===0&&this.heights.set(t,s);let c=fu(s,this.S,o.lon0,o.lat0,r.cellDeg),l=new Xr;return l.setAttribute(`position`,new zr(c.positions,3)),l.setAttribute(`elev`,new zr(c.elev,1)),l.setAttribute(`grad`,new zr(c.grad,2)),l.setAttribute(`drop`,new zr(c.drop,1)),l.setIndex(new zr(c.index,1)),e>0&&(this.cache.set(n,l),this._evict()),l}catch(e){throw this.failed.set(n,performance.now()+gu),e}finally{this.pending.delete(n)}}_evict(){for(let[e,t]of this.cache){if(this.cache.size<=this.cacheMax)return;let[n,r]=e.split(`:`);this.shown[+n].has(r)||(this.cache.delete(e),t.dispose())}}_setMask(e,t,n){let r=this.levels[e],[i,a]=t.split(`_`).map(Number);this.masks[e].t.image.data[i*r.tilesX+a]=n?255:0,this.masks[e].t.needsUpdate=!0}_show(e,t,n){if(this.disposed){n.dispose();return}if(this.shown[e].has(t))return;let r=new ci(n,this.mats[e]);r.frustumCulled=!1,this.scene3d.add(r),this.shown[e].set(t,r),this._setMask(e,t,!0)}_hide(e,t){let n=this.shown[e].get(t);n&&(this.scene3d.remove(n),this.shown[e].delete(t),this._setMask(e,t,!1))}async _loadBase(){let e=(await Promise.allSettled([...this.levels[0].have].map(async e=>this._show(0,e,await this._geometry(0,e))))).find(e=>e.status===`rejected`);if(e)throw e.reason}dispose(){this.disposed=!0;for(let e=0;e<this.shown.length;e++)for(let[t,n]of[...this.shown[e]])this._hide(e,t),e===0&&n.geometry.dispose();for(let e of this.cache.values())e.dispose();this.cache.clear();for(let e of this.mats)e.dispose?.();for(let{t:e}of this.masks)e.dispose()}sample(e,t){let n=this.levels[0],r=this.index.tileCells,i=this.S,a=(e-this.index.west)/n.cellDeg-.5,o=(this.index.north-t)/n.cellDeg-.5;if(a<0||o<0||e>this.east||t<this.south)return null;let s=Math.floor(a/r),c=Math.floor(o/r),l=this.heights.get(`${c}_${s}`);if(!l)return null;let u=a-s*r,d=o-c*r,f=Math.floor(u),p=Math.floor(d),m=u-f,h=d-p,g=(e,t)=>l[Math.min(i-1,e)*i+Math.min(i-1,t)];return(g(p,f)*(1-m)+g(p,f+1)*m)*(1-h)+(g(p+1,f)*(1-m)+g(p+1,f+1)*m)*h}update(e,t,n){if(n-this.last<200)return;this.last=n;let r=du(this.levels,e,t,this.center);for(let n of[2,1]){for(let e of[...this.shown[n].keys()])r[n].has(e)||this._hide(n,e);let i=performance.now(),a=e=>!this.pending.has(`${n}:${e}`)&&!(this.failed.get(`${n}:${e}`)>i),o=[...r[n]].filter(e=>!this.shown[n].has(e)&&this.levels[n].have.has(e)&&a(e)).map(t=>{let[r,i]=this.center(n,t);return[Math.hypot(r-e.x,i-e.z),t]}).sort((e,t)=>e[0]-t[0]).slice(0,Math.max(0,6-this.pending.size));for(let[,r]of o)this._geometry(n,r).then(i=>{i&&this._parentShown(n,r)&&du(this.levels,this._lastTarget??e,this._lastDist??t,this.center)[n].has(r)&&this._show(n,r,i)},e=>console.warn(`Axial summit tile L${n}/${r} failed: ${e.message}`))}this._lastTarget={x:e.x,z:e.z},this._lastDist=t}_parentShown(e,t){if(e<2)return!0;let[n,r]=t.split(`_`).map(Number);return this.shown[1].has(`${Math.floor(n/4)}_${Math.floor(r/4)}`)}finest(){return this.shown[2].size?`1 m`:this.shown[1].size?`4 m`:`16 m`}stats(){return{L0:this.shown[0].size,L1:this.shown[1].size,L2:this.shown[2].size}}};function bu(e){let t=e.rows.length,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t);return e.rows.forEach(([t,a,o,s],c)=>{n[c*3]=Ql(e.lon0+t*e.scale),n[c*3+2]=$l(e.lat0+a*e.scale),r[c]=-o,i[c]=s}),{positions:n,elev:r,day:i}}function xu({rows:e,cols:t,points:n}){let r=new Float32Array(e*t*3),i=new Float32Array(e*t),a=[];n.forEach((e,t)=>{e&&(r[t*3]=Ql(e[0]),r[t*3+2]=$l(e[1]),i[t]=e[2])});for(let r=0;r<e-1;r++)for(let e=0;e<t-1;e++){let i=r*t+e,o=i+1,s=i+t,c=s+1;n[i]&&n[o]&&n[s]&&n[c]&&a.push(i,s,o,o,s,c)}return{positions:r,elev:i,index:new Uint32Array(a)}}function Su(e,t){let n=Date.parse(`${e}T00:00:00Z`),r=new Date(n),i=[];for(let e=r.getUTCFullYear(),a=r.getUTCMonth();;a++){let r=(Date.UTC(e,a+1,1)-n)/864e5;if(i.push({label:new Date(Date.UTC(e,a,1)).toISOString().slice(0,7),end:r}),r>t)return i}}function Cu(e,t){let n=0,r=e.length;for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function wu(e,t=1.2){let n=1/0,r=-1/0,i=1/0,a=-1/0,o=[];for(let t of e.surfaces)for(let e of t.points)e&&o.push([Ql(e[0]),$l(e[1]),!0]);let s=e.earthquakes;for(let[e,t]of s.rows)o.push([Ql(s.lon0+e*s.scale),$l(s.lat0+t*s.scale),!1]);for(let[e,t]of o)n=Math.min(n,e),r=Math.max(r,e),i=Math.min(i,t),a=Math.max(a,t);let c=(n+r)/2,l=(i+a)/2,u=o.filter(e=>!e[2]).map(([e,t])=>Math.hypot(e-c,t-l)).sort((e,t)=>e-t),d=u.length?u[Math.floor(.98*(u.length-1))]:0;for(let[e,t,n]of o)n&&(d=Math.max(d,Math.hypot(e-c,t-l)));return{x:c,z:l,r:d+t}}var Tu={quakes:-3,surface:-2,ghost:4},Eu=.3,Du={amc:{color:[.8,.39,.25],fill:.4,line:.8},wall:{color:[.93,.92,.88],fill:.07,line:.3}},Ou=`
  attribute float elev; attribute float day;
  uniform float uExag, uFlat, uThrough, uShow, uPx;
  varying float vAge;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vAge = uThrough - day;
    float fresh = 1.0 - smoothstep(0.0, 60.0, vAge);
    gl_PointSize = (vAge < 0.0 || uShow < 0.01) ? 0.0 : uPx * mix(2.0, 3.4, fresh) * clamp(14.0 / -mv.z, 0.8, 2.0);
  }`,ku=`
  uniform float uShow, uGhost, uHistory;
  varying float vAge;
  void main() {
    if (vAge < 0.0) discard;
    if (length(gl_PointCoord - 0.5) > 0.5) discard;
    float fresh = 1.0 - smoothstep(0.0, 60.0, vAge);
    vec3 col = mix(vec3(0.66, 0.65, 0.61), vec3(1.0, 0.80, 0.52), fresh);
    gl_FragColor = vec4(col, mix(0.55, 1.0, fresh) * uShow * uGhost * uHistory);
  }`,Au=`
  attribute float elev;
  uniform float uExag, uFlat;
  varying float vElev; varying vec3 vPos;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat);
    vElev = elev; vec4 wp = modelMatrix * vec4(p, 1.0); vPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,ju=`
  uniform vec3 uColor; uniform float uFill, uLine, uShow, uGhost;
  varying float vElev; varying vec3 vPos;
  void main() {
    vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
    float shade = mix(0.55, 1.1, abs(dot(n, normalize(vec3(-0.8, 1.0, -0.9)))));
    float v = vElev / 100.0, f = abs(fract(v - 0.5) - 0.5), line = 1.0 - smoothstep(0.0, fwidth(v) * 1.2, f);
    gl_FragColor = vec4(uColor * shade, mix(uFill, uLine, line) * uShow * uGhost);
  }`;async function Mu(e=fetch){try{let t=await e(y(`subsurface.json`));return!t.ok||t.headers?.get(`content-type`)?.includes(`html`)?null:await t.json()}catch{return null}}var Nu=class{constructor(e,t,n){this.data=n,this.credit=n.credit;let r=n.earthquakes,i=bu(r);this.days=i.day,this.months=Su(r.day0,i.day[i.day.length-1]),this.window=wu(n),this.show=t.see,this.through={value:this.months[this.months.length-1].end},this.history={value:1},this.objects=[];let a=(t,n)=>{t.renderOrder=n,t.frustumCulled=!1,t.visible=!1,e.add(t),this.objects.push(t)},o=[[1,!1],[Eu,!0]],s=new Xr;s.setAttribute(`position`,new zr(i.positions,3)),s.setAttribute(`elev`,new zr(i.elev,1)),s.setAttribute(`day`,new zr(i.day,1));for(let[e,n]of o)a(new mc(s,new yi({vertexShader:Ou,fragmentShader:ku,transparent:!0,depthWrite:!n,depthFunc:n?6:3,uniforms:{uExag:t.exag,uFlat:t.flat,uThrough:this.through,uShow:t.see,uGhost:{value:e},uHistory:this.history,uPx:{value:Math.min(devicePixelRatio,2)}}})),n?Tu.ghost:Tu.quakes);for(let e of n.surfaces){let n=xu(e),r=new Xr,i=Du[e.key]??Du.wall;r.setAttribute(`position`,new zr(n.positions,3)),r.setAttribute(`elev`,new zr(n.elev,1)),r.setIndex(new zr(n.index,1));for(let[e,n]of o)a(new ci(r,new yi({vertexShader:Au,fragmentShader:ju,transparent:!0,depthWrite:!1,side:2,depthFunc:n?6:3,uniforms:{uExag:t.exag,uFlat:t.flat,uShow:t.see,uGhost:{value:e},uColor:{value:new Y(...i.color)},uFill:{value:i.fill},uLine:{value:i.line}}})),n?Tu.ghost:Tu.surface)}this.rimMat=new El({color:15526886,linewidth:1.2,dashed:!0,dashSize:.12,gapSize:.09,transparent:!0,opacity:0}),this.rim=new ql(new Kl,this.rimMat),a(this.rim,6)}countThrough(e){return Cu(this.days,this.months[e].end)}setThrough(e){this.through.value=this.months[e].end}update(e,t){let n=this.show.value;for(let e of this.objects)e.visible=n>.001;if(this.rimMat.opacity=.7*n,n>.001&&this._rimE!==e){let n=[];for(let[r,i]of[...this.data.rim,this.data.rim[0]])n.push(Ql(r),t(r,i)*e+.02,$l(i));this.rim.geometry.dispose(),this.rim.geometry=new Kl,this.rim.geometry.setPositions(n),this.rim.computeLineDistances(),this._rimE=e}}},Pu=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function Fu(e,t){let[n,r]=e.ll,i=[Ql(n),t(n,r)*.001*e.exag,$l(r)],a=Math.sin(e.polar),o=Math.cos(e.polar),s=[e.dist*a*Math.sin(e.az),e.dist*o,e.dist*a*Math.cos(e.az)];return{pos:[i[0]+s[0],i[1]+s[1],i[2]+s[2]],target:i}}function Iu(e,t,n,r){let i=n[0]-t[0],a=n[2]-t[2],o=Math.hypot(i,a)||1;i/=o,a/=o;let s=-a,c=i,l=0,u=0;e.has(`ArrowUp`)&&(l+=i,u+=a),e.has(`ArrowDown`)&&(l-=i,u-=a),e.has(`ArrowRight`)&&(l+=s,u+=c),e.has(`ArrowLeft`)&&(l-=s,u-=c);let d=Math.hypot(l,u);if(!d)return[0,0,0];let f=.3*Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])*r/d;return[l*f,0,u*f]}var Lu=e=>!!e&&(e.isContentEditable||e.contentEditable===`true`||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)),Ru=e=>Math.min(1,Math.max(.2,Math.sqrt(e/30))),zu=(e,t)=>t?0:e,Bu=(e,t,n,r,i)=>i?t:e+(t-e)*Math.min(1,n*r),Vu=e=>!!e?.closest?.(`.panel, aside`),Hu=e=>!!e.key?.startsWith(`Arrow`)&&!(e.metaKey||e.ctrlKey||e.altKey)&&!Lu(e.target)&&!Vu(e.target),Uu=(e,t)=>(e-t)/2,Wu=(e,t,n,r)=>e*Math.max(1,(t-32)/Math.max(320,t-n-r)),Gu=class{constructor(e,t,n,{onFrame:r}={}){this.bundle=t,this.onFrame=r,this.flight=null,this.held=new Set,this.targets={flat:0,lines:0,mode:0,mute:0,see:0},this._view=`3d`,this.insets=[16,16],this.framed=!1,this._shift=[0,0],this._shiftTo=[0,0],this._motion=typeof matchMedia==`function`?matchMedia(`(prefers-reduced-motion: reduce)`):null,this.elevAt=ru([n.axial,n.hydrate,n.overview]);let i=this.renderer=new Js({canvas:e,antialias:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setSize(innerWidth,innerHeight),this.scene=new Ys,this.scene.background=new Mr(`#121211`),this.camera=new wi(30,innerWidth/innerHeight,.05,6e3);let a=(e,t)=>new J(e[0]+t,e[1]-t,e[2]+t,e[3]-t);this.U={exag:{value:6},flat:{value:0},lines:{value:0},mode:{value:0},mute:{value:0},see:{value:0},glass:{value:new Y},holeA:a(n.axial.box,.35),holeB:a(n.hydrate.box,.35)},this.terrainMats=[],this.ready=(async()=>{let e=Mu(),t=ru([n.axial,n.hydrate,n.overview]);this.auv=await yu.create(this.scene,this.U,lu,void 0,t),this.auv&&this.terrainMats.push(...this.auv.mats),this._addTerrain(n.overview,100,!0,1),this._addTerrain(n.axial,50,!1,3,this.auv?{holeC:this.auv.box}:{}),this._addTerrain(n.hydrate,50,!1,3);let r=await e;if(r){this.subsurface=new Nu(this.scene,this.U,r);let e=this.subsurface.window;this.U.glass.value.set(e.x,e.z,e.r)}this.elevAt=(e,n)=>this.auv?.sample(e,n)??t(e,n)})();let o=this.controls=new ul(this.camera,e);o.enableDamping=!this.reducedMotion,o.dampingFactor=.08,o.screenSpacePanning=!1,o.zoomToCursor=!0,o.maxPolarAngle=Math.PI*.46,o.minDistance=2,o.maxDistance=1400,o.mouseButtons={LEFT:C.PAN,MIDDLE:C.DOLLY,RIGHT:C.ROTATE},o.touches={ONE:w.PAN,TWO:w.DOLLY_ROTATE},o.addEventListener(`start`,()=>{this.flight=null}),this._onContext=e=>e.preventDefault(),e.addEventListener(`contextmenu`,this._onContext),this._onKeyDown=e=>{Hu(e)&&(e.preventDefault(),this.held.add(e.key),this.flight=null)},this._onKeyUp=e=>e.key===`Meta`?this.held.clear():this.held.delete(e.key),this._onBlur=()=>this.held.clear(),this._onResize=()=>{i.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this._applyShift(),this._resolution(),this.onResize?.()},addEventListener(`keydown`,this._onKeyDown),addEventListener(`keyup`,this._onKeyUp),addEventListener(`blur`,this._onBlur),addEventListener(`resize`,this._onResize),this.jumpTo(t.overview),this.clock=new Pc,this._v=new Y,this.frame={},this._raf=requestAnimationFrame(this._tick)}_addTerrain(e,t,n,r,i={}){let a=iu(e,r),o=new Xr;o.setAttribute(`position`,new zr(a.positions,3)),o.setAttribute(`elev`,new zr(a.elev,1)),o.setAttribute(`grad`,new zr(a.grad,2)),o.setIndex(new zr(a.index,1));let s=lu(this.U,t,n,i);this.terrainMats.push(s),n||(s.polygonOffset=!0,s.polygonOffsetFactor=-2,s.polygonOffsetUnits=-2),this.scene.add(new ci(o,s))}addCable(e){let t={transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-60};this.mats={cable:new El({color:15526886,linewidth:1.5,opacity:.95,...t}),casing:new El({color:723722,linewidth:3.8,opacity:.55,...t}),approx:new El({color:15526886,linewidth:1.5,opacity:.8,dashed:!0,dashSize:1.2,gapSize:.9,...t}),range:new El({color:15526886,linewidth:3,transparent:!0,opacity:.95})},this.cableLines=[];for(let t of e.lines){let e=Ku(t.coords);for(let n of[this.mats.casing,t.accuracy===`approximate`?this.mats.approx:this.mats.cable]){let r=new ql(new Kl,n);r.userData={pts:e,info:n===this.mats.casing?null:t},r.renderOrder=n===this.mats.casing?5:6,this.scene.add(r),this.cableLines.push(r)}}this._resolution(),this.updateLines()}addDas(e){let t={transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-70};this.dasShown=!1,this.dasKinds=new Map,this.dasLines=(e?.layers||[]).map(e=>{this.dasKinds.set(e.kind,!0);let n=new El({color:e.color,linewidth:e.kind===`multidas`?4.2:2.7,opacity:.95,dashed:e.kind===`optodas`,dashSize:.7,gapSize:.45,...t}),r=new ql(new Kl,n);return r.visible=!1,r.userData={pts:Ku(e.coords),info:e},r.renderOrder=7,this.scene.add(r),r}),this.updateLines()}setDasVisible(e){this.dasShown=e;for(let t of this.dasLines??[])t.visible=e&&this.dasKinds.get(t.userData.info.kind)!==!1}setDasKindVisible(e,t){this.dasKinds.set(e,t);for(let n of this.dasLines??[])n.userData.info.kind===e&&(n.visible=this.dasShown&&t)}addMoorings(e){this.moorings=[];let t=this.mats.mast=new vc({color:15526886,transparent:!0,opacity:.35,dashSize:.12,gapSize:.1});for(let n of e.filter(e=>e.column.length)){let e=new cc(new Xr,t),r=n.column.map(e=>{let t=new ql(new Kl,this.mats.range);return t.userData=e,this.scene.add(t),t});this.scene.add(e),this.moorings.push({site:n,mast:e,ranges:r})}this.updateLines()}updateLines(){let e=this.e;for(let t of this.cableLines??[]){let n=[];for(let[r,i]of t.userData.pts)n.push(Ql(r),Math.min(this.elevAt(r,i),0)*e+.03+.012*this.U.exag.value,$l(i));t.geometry.dispose(),t.geometry=new Kl,t.geometry.setPositions(n),t.material.dashed&&t.computeLineDistances()}for(let t of this.dasLines??[]){let n=[];for(let[r,i]of t.userData.pts)n.push(Ql(r),Math.min(this.elevAt(r,i),0)*e+.05+.018*this.U.exag.value,$l(i));t.geometry.dispose(),t.geometry=new Kl,t.geometry.setPositions(n),t.material.dashed&&t.computeLineDistances()}for(let t of this.moorings??[]){let n=Ql(t.site.lon),r=$l(t.site.lat),i=-t.site.seafloor*e;t.mast.geometry.setFromPoints([new Y(n,i,r),new Y(n,0,r)]),t.mast.computeLineDistances();for(let i of t.ranges){let t=i.userData,a=-t.a*e,o=t.a===t.b?a-1e-4-.02*this.U.exag.value:-t.b*e;i.geometry.dispose(),i.geometry=new Kl,i.geometry.setPositions([n,a,r,n,o,r])}}this._lastLayout=[this.U.exag.value,this.U.flat.value]}_resolution(){for(let e of[...Object.values(this.mats??{}),this.subsurface?.rimMat])e?.resolution?.set(innerWidth,innerHeight)}get reducedMotion(){return!!this._motion?.matches}get e(){return this.U.exag.value*.001*(1-this.U.flat.value)}yFor(e,t,n){return(n??this.elevAt(e,t))*this.e}project(e,t,n){let r=this._v.set(e,t,n).project(this.camera);return[(r.x+1)/2*innerWidth,(1-r.y)/2*innerHeight,r.z]}jumpTo(e){this.setExag(e.exag);let t=Fu(e,this.elevAt);this.camera.position.set(...t.pos),this.controls.target.set(...t.target)}flyTo(e){let t=Fu(e,this.elevAt);this._fly(new Y(...t.pos),new Y(...t.target),e.exag,1800)}flyToPoint(e,t,n=6,r){let i=new Y(Ql(e),this.yFor(e,t,r),$l(t)),a=this.camera.position.clone().sub(this.controls.target).normalize();this._fly(i.clone().add(a.multiplyScalar(n)),i,this.U.exag.value,1300)}_fly(e,t,n,r){this.flight={t0:performance.now(),dur:zu(r,this.reducedMotion),fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),fromExag:this.U.exag.value,toExag:n,pos:e,target:t}}setInsets(e,t,n=!1){this.framed=!0,this.insets=[e,t],this._shiftTo[0]=Uu(e,t),(n||this.reducedMotion)&&(this._shift[0]=this._shiftTo[0]),this._applyShift()}setInsetsY(e,t){this.insetsY=[e,t],this._shift[1]=this._shiftTo[1]=Uu(e,t),this._applyShift()}fit(e){return{...e,dist:Wu(e.dist,innerWidth,...this.insets)}}_applyShift(){this.camera.setViewOffset(innerWidth,innerHeight,-this._shift[0],-this._shift[1],innerWidth,innerHeight)}setExag(e){this.U.exag.value=e,this.onExag?.(e)}setStyle(e){this.targets.lines=+(e===`contours`)}setColor(e){this.targets.mode=+(e===`mono`)}setMute(e){this.targets.mute=e}setSubsurface(e){this.targets.see=+!!e;let t=this.subsurface?.window;if(!e||!t)return;this._resolution();let n=this.controls.target,r=this.camera.position.clone().sub(n);if(Math.hypot(n.x-t.x,n.z-t.z)<t.r&&r.length()<t.r*5)return;let i=this.U.exag.value,a=t.r*3.2,o=Math.atan2(r.x,r.z),s=new Y(t.x,-2600*i*.001,t.z),c=s.clone().add(new Y().setFromSphericalCoords(a,.85,o));this._fly(c,s,i,1800)}setQuakesThrough(e){this.subsurface?.setThrough(e)}setView(e){if(e===this._view)return;this._view=e;let t=e===`2d`;this.targets.flat=+!!t;let n=new Yc().setFromVector3(this.camera.position.clone().sub(this.controls.target));t&&(this._savedPolar=n.phi),n.phi=t?.001:this._savedPolar??.9,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=t?.001:Math.PI*.46,this._fly(this.controls.target.clone().add(new Y().setFromSpherical(n)),this.controls.target.clone(),this.U.exag.value,900)}_tick=()=>{let e=performance.now(),t=Math.min(this.clock.getDelta(),.05),n=this.flight;if(n){let t=n.dur>0?Math.min(1,(e-n.t0)/n.dur):1,r=Pu(t);this.camera.position.lerpVectors(n.fromPos,n.pos,r),this.controls.target.lerpVectors(n.fromTarget,n.target,r),n.target.equals(n.fromTarget)||(this.camera.position.y+=Math.sin(Math.PI*r)*n.fromPos.distanceTo(n.pos)*.15),n.toExag!==n.fromExag&&this.setExag(n.fromExag+(n.toExag-n.fromExag)*r),t>=1&&(this.flight=null)}if(this.held.size){let e=Iu(this.held,this.camera.position.toArray(),this.controls.target.toArray(),t);this.camera.position.x+=e[0],this.camera.position.z+=e[2],this.controls.target.x+=e[0],this.controls.target.z+=e[2]}let r=this.reducedMotion;this.controls.enableDamping=!r,this.controls.rotateSpeed=Ru(this.camera.position.distanceTo(this.controls.target)),this.controls.update(),this.auv?.update(this.controls.target,this.camera.position.distanceTo(this.controls.target),e);for(let[e,n]of[[`flat`,5],[`lines`,6],[`mode`,8],[`mute`,8]])this.U[e].value=Bu(this.U[e].value,this.targets[e],t,n,r);this._see=Bu(this._see??0,this.targets.see,t,5,r),this.U.see.value=this._see<.001?0:this._see*Math.max(0,1-this.U.flat.value*3);let i=this.U.see.value>0;if(i!==this._glassy){this._glassy=i;for(let e of this.terrainMats)e.transparent=i}this.subsurface?.update(this.e,this.elevAt),(this._shift[0]!==this._shiftTo[0]||this._shift[1]!==this._shiftTo[1])&&(this._shift=this._shift.map((e,n)=>{let i=this._shiftTo[n];return Math.abs(i-e)<.5?i:Bu(e,i,t,10,r)}),this._applyShift());let[a,o]=this._lastLayout??[];if((a!==this.U.exag.value||Math.abs((o??0)-this.U.flat.value)>1e-4)&&this.updateLines(),this.mats){let e=Math.max(0,1-this.U.flat.value*3);this.mats.range.opacity=.95*e,this.mats.mast.opacity=.35*e}this.camera.updateMatrixWorld();let s=this.camera.position.distanceTo(this.controls.target);this.frame={dist:s,regionMode:s>160,flat:this.U.flat.value,exag:this.U.exag.value,e:this.e},this.onFrame?.(this),this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(this._tick)};dispose(){cancelAnimationFrame(this._raf),removeEventListener(`keydown`,this._onKeyDown),removeEventListener(`keyup`,this._onKeyUp),removeEventListener(`blur`,this._onBlur),removeEventListener(`resize`,this._onResize),this.renderer.domElement.removeEventListener(`contextmenu`,this._onContext),this.controls.dispose(),this.renderer.dispose()}};function Ku(e,t=.3){let n=[];for(let r=0;r<e.length-1;r++){let[i,a]=[e[r],e[r+1]],o=Math.max(1,Math.ceil(Math.hypot((a[0]-i[0])*Xl,(a[1]-i[1])*Zl)/t));for(let e=0;e<o;e++)n.push([i[0]+(a[0]-i[0])*e/o,i[1]+(a[1]-i[1])*e/o])}return n.push(e[e.length-1]),n}function qu(e,t,n,r=48){for(let i=1;i<r;i++){let a=i/r;if(a>.97)break;let o=e[0]+(t[0]-e[0])*a;if(e[1]+(t[1]-e[1])*a<n(o,e[2]+(t[2]-e[2])*a)-.02)return!0}return!1}var Ju={OPERATIONAL:`Operating`,PARTIALLY_FUNCTIONAL:`Partially functional`,NOT_DEPLOYED:`Not deployed`,RETIRED:`Retired`,SUPERSEDED:`Superseded`,RECOVERED:`Recovered`,UNCABLED:`Uncabled`,PLANNED:`Planned (COSZO)`,UNKNOWN:`Status unknown`},Yu={OPERATIONAL:`operating`,PARTIALLY_FUNCTIONAL:`operating`,NOT_DEPLOYED:`offline`,RETIRED:`offline`,SUPERSEDED:`offline`,RECOVERED:`offline`,UNCABLED:`offline`,PLANNED:`planned`,UNKNOWN:`unknown`},Xu=e=>Math.round(e).toLocaleString(`en-US`),Zu=e=>e==null?`—`:`${Xu(e)} m`,Qu=(e,t)=>e==null||t==null?`—`:e===t?`${Xu(e)} m`:`${Xu(e)}–${Xu(t)} m`,$u=e=>Ju[e]??e,ed=e=>Yu[e]??`unknown`,td=e=>{let t=e?new Date(e):null;return t&&!Number.isNaN(t.getTime())?t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`,timeZone:`UTC`}):`unknown date`};function nd(e,t,n,r=7){let i=null,a=r;for(let{info:r,pts:o}of n)for(let n=0;n<o.length-1;n++){let[s,c]=o[n],[l,u]=o[n+1],d=l-s,f=u-c,p=d*d+f*f||1,m=Math.max(0,Math.min(1,((e-s)*d+(t-c)*f)/p)),h=Math.hypot(e-s-m*d,t-c-m*f);h<a&&(a=h,i=r)}return i}function rd(e){let t=[],n=[];for(let r of e)r[2]<1?n.push(r):(n.length>1&&t.push(n),n=[]);return n.length>1&&t.push(n),t}function id(e){let t=[],n=new Set;for(let r of[...e].sort((e,t)=>t.priority-e.priority)){let e=[r.x,r.y-r.h/2,r.x+r.w,r.y+r.h/2];t.some(t=>!(e[2]<t[0]||e[0]>t[2]||e[3]<t[1]||e[1]>t[3]))||(n.add(r.id),t.push(e))}return n}function ad(e,t,n,r=6){let i=[],a=new Map;for(let o of[...e].sort((e,t)=>t.priority-e.priority)){let e=t,s;for(let t=0;t<=r&&(s=[o.x-o.w/2,o.y-e-o.h,o.x+o.w/2,o.y-e],i.some(e=>!(s[2]<e[0]||s[0]>e[2]||s[3]<e[1]||s[1]>e[3])));t++,e+=o.h+n);i.push(s),a.set(o.id,Math.min(e,t+r*(o.h+n)))}return a}var od={operating:0,offline:1,planned:2,unknown:3},sd=e=>e>6?30:e>2?24:18;function cd(e,t,n,r){let i=Object.fromEntries(Object.keys(n).map((e,t)=>[e,t])),a=e.sensorIds.map(e=>t[e]).sort((e,t)=>i[e.family]-i[t.family]||od[ed(e.status)]-od[ed(t.status)]),o=a.length,s=r/2-2.5,c=r/2,l=o>1?Math.min(.22,1.4/o):0,u=e=>`${(c+s*Math.cos(e)).toFixed(2)} ${(c+s*Math.sin(e)).toFixed(2)}`,d=a.map((e,t)=>{let r=ed(e.status),i=n[e.family].color,a=t/o*Math.PI*2-Math.PI/2+l/2,d=(t+1)/o*Math.PI*2-Math.PI/2-l/2,f=o===1?`M ${c-s} ${c} a ${s} ${s} 0 1 0 ${2*s} 0 a ${s} ${s} 0 1 0 ${-2*s} 0`:`M ${u(a)} A ${s} ${s} 0 ${+(d-a>Math.PI)} 1 ${u(d)}`,p=r===`operating`||r===`offline`?3.2:1.3,m=(r===`offline`?` opacity="0.3"`:``)+(r===`unknown`?` stroke-dasharray="1.6 1.4"`:``);return`<path class="seg" data-fam="${e.family}" d="${f}" fill="none" stroke="${i}" stroke-width="${p}"${m}/>`}).join(``);return`<svg width="${r}" height="${r}" viewBox="0 0 ${r} ${r}" aria-hidden="true">${a.some(e=>ed(e.status)===`operating`)?`<circle class="halo" cx="${c}" cy="${c}" r="${s+4}" fill="none" stroke="#ecebe6" stroke-width="1"/>`:``}<circle cx="${c}" cy="${c}" r="${s+2.2}" fill="rgba(12,12,11,0.72)"/>${d}<circle cx="${c}" cy="${c}" r="1.8" fill="#ecebe6"/></svg>`}var ld=[{t:`Newport`,lon:-124.05,lat:44.63},{t:`Pacific City`,lon:-123.96,lat:45.2}],ud=class{constructor(e,t,n,r){this.c=e,this.b=t,this.scene=n,this.h=r,this.focus=new Set,this.selected=null;let i=(t,n)=>{let r=document.createElement(`div`);return r.className=t,r.innerHTML=n,e.appendChild(r),r},a=t.sensors.filter(e=>e.lat!=null);this.regions=t.regions.filter(e=>a.some(t=>t.region===e.key)).map(e=>{let t=a.filter(t=>t.region===e.key),n=t.reduce((e,t)=>e+t.lon,0)/t.length,o=t.reduce((e,t)=>e+t.lat,0)/t.length,s=i(`rlabel`,`<div class="card"><b>${e.label}</b><span class="mono">${t.length}</span></div><div class="stem"></div><div class="foot"></div>`);return s.onclick=()=>r.onRegionClick?.(e.key),{d:s,lon:n,lat:o,n:t.length,card:s.querySelector(`.card`),stem:s.querySelector(`.stem`)}}),this.sites=t.sites.map(e=>{let n=sd(e.sensorIds.length),a=i(`site`,cd(e,t.sensorById,t.familyByKey,n)+`<div class="name">${e.label}<span class="mono">${e.sensorIds.length}</span></div>`),o=e.sensorIds.length;a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,`${e.label}, ${o} sensor${o===1?``:`s`}`),a.tabIndex=-1;let s=t=>{this._hovered=e.id,r.onSiteHover?.(e,t)};return a.onmouseenter=s,a.onmousemove=s,a.onmouseleave=()=>{this._hovered=null,r.onSiteHover?.(e,null)},a.onclick=()=>r.onSiteClick?.(e),a.onkeydown=t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),r.onSiteClick?.(e))},{site:e,d:a,name:a.querySelector(`.name`),size:n,inFocus:!0}}),this.columns=t.sites.filter(e=>e.column.length).map(e=>({site:e,d:i(`clabel`,`<div class="surface">Sea surface <span class="mono">0 m</span></div>`+e.column.map(e=>`<div>${e.kind} <span class="mono">${Qu(e.a,e.b)}</span></div>`).join(``)+`<div class="floor">Seafloor <span class="mono">${Zu(e.seafloor)}</span></div>`)})),this.nodes=t.cable.nodes.map(e=>{let t=i(`pnode`,`<i></i><span class="mono">${e.code}</span>`);return t.onmouseenter=t=>r.onNodeHover?.(e,t),t.onmousemove=t=>r.onNodeHover?.(e,t),t.onmouseleave=()=>r.onNodeHover?.(e,null),t.onclick=()=>r.onNodeClick?.(e),{node:e,d:t,code:t.querySelector(`span`)}}),this.places=ld.map(e=>({...e,d:i(`place`,e.t)})),this._clearCable=()=>{n.renderer.domElement.style.cursor=``,r.onCableHover?.(null,null)},this._onMove=e=>{if(e.buttons)return;let t=(n.cableLines??[]).filter(e=>e.userData.info&&e.userData.proj).flatMap(e=>rd(e.userData.proj).map(t=>({info:e.userData.info,pts:t}))),i=nd(e.clientX,e.clientY,t);n.renderer.domElement.style.cursor=i?`help`:``,r.onCableHover?.(i,i?e:null)},n.renderer.domElement.addEventListener(`pointermove`,this._onMove),n.renderer.domElement.addEventListener(`pointerleave`,this._clearCable),n.renderer.domElement.addEventListener(`pointerdown`,this._clearCable)}setFocus(e){this.focus=e;for(let t of this.sites){for(let n of t.d.querySelectorAll(`path.seg`))n.style.opacity=e.size&&!e.has(n.dataset.fam)?.07:``;t.inFocus=!e.size||t.site.sensorIds.some(t=>e.has(this.b.sensorById[t].family))}}setEvidence(e){this.evidence=e}setSelected(e){this.selected=e;for(let t of this.sites)t.d.classList.toggle(`selected`,t.site.id===e)}update(){let e=this.scene,{dist:t,regionMode:n,e:r,flat:i}=e.frame,a=e.camera.position.toArray(),o=(t,n)=>Math.min(0,e.elevAt(eu(t),tu(n)))*r,s=[];for(let t of this.regions){let[r,i,a]=e.project(Ql(t.lon),e.yFor(t.lon,t.lat)+.3,$l(t.lat));Object.assign(t.d.style,{left:`${r}px`,top:`${i+3}px`,opacity:n&&a<1?1:0,pointerEvents:n?`auto`:`none`}),!t.w&&t.card.offsetWidth&&(t.w=t.card.offsetWidth,t.h=t.card.offsetHeight),n&&a<1&&s.push({id:t,x:r,y:i+3,w:t.w??0,h:t.h??0,priority:t.n})}let c=ad(s,26,6);for(let e of this.regions){let t=`${c.get(e)??26}px`;e.stem.style.height!==t&&(e.stem.style.height=t)}let l=[];for(let t of this.sites){let i=Ql(t.site.lon),s=-t.site.seafloor*r,c=$l(t.site.lat),[u,d,f]=e.project(i,s,c),p=!n&&f<1&&u>-40&&u<innerWidth+40&&d>-40&&d<innerHeight+40;t.hidden=p&&qu(a,[i,s+.01,c],o);let m=p&&!t.hidden;!m&&this._hovered===t.site.id&&(this._hovered=null,this.h.onSiteHover?.(t.site,null));let h=!this.evidence||this.evidence.has(t.site.id);Object.assign(t.d.style,{left:`${u}px`,top:`${d}px`,opacity:p?t.hidden?.12:h?t.inFocus?1:.25:.2:0,pointerEvents:m?`auto`:`none`});let g=m?0:-1;t.d.tabIndex!==g&&(t.d.tabIndex=g),m&&t.inFocus&&h&&l.push({id:t.site.id,x:u-t.size/2,y:d,w:t.size+12+t.site.label.length*6.4,h:18,priority:t.site.sensorIds.length}),t._x=u,t._y=d}let u=id(l);for(let e of this.sites)e.name.style.opacity=+!!u.has(e.site.id);let d=Math.max(0,1-i*3);for(let r of this.columns){let i=Ql(r.site.lon),s=$l(r.site.lat),[c,l,u]=e.project(i,0,s),f=d>.5&&!n&&u<1&&t<90&&!qu(a,[i,0,s],o);Object.assign(r.d.style,{left:`${c}px`,top:`${l}px`,opacity:+!!f})}for(let t of this.nodes){let[i,a,o]=e.project(Ql(t.node.lon),Math.min(e.elevAt(t.node.lon,t.node.lat),0)*r+.05,$l(t.node.lat));Object.assign(t.d.style,{left:`${i}px`,top:`${a}px`,opacity:o<1?n?.75:.9:0}),t.code.style.opacity=+!!n}for(let t of this.places){let[n,r,i]=e.project(Ql(t.lon),.3,$l(t.lat));Object.assign(t.d.style,{left:`${n}px`,top:`${r}px`,opacity:+(i<1)})}for(let t of e.cableLines??[])t.userData.info&&(t.userData.proj=t.userData.pts.filter((e,t)=>t%3==0).map(([t,n])=>e.project(Ql(t),Math.min(e.elevAt(t,n),0)*r,$l(n))))}dispose(){let e=this.scene.renderer.domElement;e.removeEventListener(`pointermove`,this._onMove),e.removeEventListener(`pointerleave`,this._clearCable),e.removeEventListener(`pointerdown`,this._clearCable),this.c.innerHTML=``}},dd=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),$=o(((e,t)=>{t.exports=dd()}))(),fd={circle:e=>(0,$.jsx)(`circle`,{cx:`6`,cy:`6`,r:`4.6`,fill:e}),triangle:e=>(0,$.jsx)(`polygon`,{points:`6,1.2 10.8,10 1.2,10`,fill:e}),square:e=>(0,$.jsx)(`rect`,{x:`1.8`,y:`1.8`,width:`8.4`,height:`8.4`,fill:e}),diamond:e=>(0,$.jsx)(`polygon`,{points:`6,0.8 11.2,6 6,11.2 0.8,6`,fill:e}),hexagon:e=>(0,$.jsx)(`polygon`,{points:`6,0.9 10.6,3.5 10.6,8.5 6,11.1 1.4,8.5 1.4,3.5`,fill:e}),bar:e=>(0,$.jsx)(`rect`,{x:`0.8`,y:`4.3`,width:`10.4`,height:`3.4`,fill:e})};function pd({glyph:e,color:t,size:n=11}){return(0,$.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 12 12`,"aria-hidden":`true`,style:{flex:`none`},children:fd[e](t)})}function md(e,t=!1){let n=`atlas.min.${e}`,[r,i]=(0,g.useState)(()=>{let e=localStorage.getItem(n);return e==null?t:e===`true`});return(0,g.useEffect)(()=>{localStorage.setItem(n,String(r))},[n,r]),[r,i]}function hd({label:e,onClick:t}){return(0,$.jsx)(`button`,{className:`min-btn`,"aria-label":`Minimize ${e}`,"aria-expanded":`true`,onClick:t,children:`–`})}function gd({children:e,className:t=``,onClick:n,title:r}){return(0,$.jsx)(`button`,{className:`panel hud-toggle ${t}`,"aria-expanded":`false`,title:r,onClick:n,children:e})}function _d({families:e,sensors:t,focus:n,onChange:r}){let i=t.filter(e=>e.lat!=null),a=e=>i.filter(t=>t.family===e).length,o=(e,t)=>{if(t){let t=new Set(n);t.has(e)?t.delete(e):t.add(e),r(t)}else r(n.size===1&&n.has(e)?new Set:new Set([e]))},[s,c]=md(`families`);return(0,$.jsx)(`div`,{className:`panel families${s?` minimized`:``}`,role:`group`,"aria-label":`Sensor families`,children:s?(0,$.jsxs)(`button`,{className:`families-tab`,"aria-expanded":`false`,onClick:()=>c(!1),children:[`Sensor families`,n.size?(0,$.jsxs)(`span`,{className:`n mono`,children:[n.size,` selected`]}):null]}):(0,$.jsxs)($.Fragment,{children:[e.filter(e=>a(e.key)>0).map(e=>(0,$.jsxs)(`button`,{className:n.size&&!n.has(e.key)?`muted`:``,"aria-pressed":n.has(e.key),onClick:t=>o(e.key,t.shiftKey),children:[(0,$.jsx)(pd,{glyph:e.glyph,color:e.color}),(0,$.jsx)(`span`,{children:e.label}),(0,$.jsx)(`span`,{className:`n mono`,children:a(e.key)})]},e.key)),(0,$.jsx)(hd,{label:`sensor families`,onClick:()=>c(!0)})]})})}function vd(e,t,n=8){let r=t.trim().toLowerCase();if(!r)return[];let i=e=>{let t=e.filter(Boolean).map(e=>String(e).toLowerCase());return t.some(e=>e.startsWith(r))?2:+!!t.some(e=>e.includes(r))},a=[];for(let t of e.sites){let e=i([t.name,t.label]);e&&a.push({kind:`site`,id:t.id,title:t.name,sub:t.label,located:!0,sc:e+.5})}for(let t of e.sensors){let n=i([t.name,t.type.replaceAll(`_`,` `),t.refdes,t.id,...t.aliases||[]]);if(!n)continue;let r=e.siteById[t.site]?.label,o=t.lat!=null;a.push({kind:`sensor`,id:t.id,title:t.name,located:o,sub:o?r??``:[r,`no recorded position`].filter(Boolean).join(` · `),sc:o?n:n-.25})}return a.sort((e,t)=>t.sc-e.sc||e.title.localeCompare(t.title)).slice(0,n).map(({sc:e,...t})=>t)}function yd({bundle:e,onPick:t}){let[n,r]=(0,g.useState)(``),[i,a]=(0,g.useState)(0),o=(0,g.useMemo)(()=>vd(e,n),[e,n]),s=(0,g.useRef)(null),c=e=>{t(e),r(``),s.current?.blur()};return(0,$.jsxs)(`div`,{className:`search`,children:[(0,$.jsx)(`input`,{ref:s,type:`search`,placeholder:`Search sensors and sites`,value:n,"aria-label":`Search sensors and sites`,onChange:e=>{r(e.target.value),a(0)},onKeyDown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),a(e=>Math.min(e+1,o.length-1))),e.key===`ArrowUp`&&(e.preventDefault(),a(e=>Math.max(e-1,0))),e.key===`Enter`&&o[i]&&c(o[i]),e.key===`Escape`&&r(``)}}),o.length>0&&(0,$.jsx)(`ul`,{role:`listbox`,children:o.map((e,t)=>(0,$.jsxs)(`li`,{role:`option`,"aria-selected":t===i,className:e.located===!1?`unlocated`:void 0,onMouseDown:t=>{t.preventDefault(),c(e)},children:[(0,$.jsx)(`span`,{children:e.title}),(0,$.jsx)(`span`,{className:`sub`,children:e.sub})]},`${e.kind}-${e.id}`))})]})}function bd({bundle:e,onPick:t}){let n=e.sensors.filter(e=>e.lat!=null),r=n.filter(e=>e.statusGroup===`operating`).length,[i,a]=md(`header`);return i?(0,$.jsx)(gd,{className:`header-toggle`,title:`Show the title, counts, and search`,onClick:()=>a(!1),children:`Cascadia Offshore Sensor Atlas`}):(0,$.jsxs)(`header`,{className:`panel header`,children:[(0,$.jsxs)(`div`,{className:`panel-head`,children:[(0,$.jsx)(`h1`,{children:`Cascadia Offshore Sensor Atlas`}),(0,$.jsx)(hd,{label:`title and search`,onClick:()=>a(!0)})]}),(0,$.jsx)(`p`,{children:`OOI Regional Cabled Array and COSZO sensors, offshore Oregon.`}),(0,$.jsxs)(`div`,{className:`stats`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{className:`mono`,children:n.length}),(0,$.jsx)(`span`,{children:`Sensors`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{className:`mono`,children:r}),(0,$.jsx)(`span`,{children:`Operating`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{className:`mono`,children:e.sites.length}),(0,$.jsx)(`span`,{children:`Sites`})]})]}),(0,$.jsx)(yd,{bundle:e,onPick:t})]})}function xd({label:e,options:t,value:n,onChange:r}){return(0,$.jsxs)(`div`,{className:`ctl-row`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:e}),(0,$.jsx)(`div`,{className:`seg`,role:`group`,"aria-label":e,children:t.map(([e,t])=>(0,$.jsx)(`button`,{"aria-pressed":n===e,onClick:()=>{e!==n&&r(e)},children:t},e))})]})}function Sd({scene:e,sub:t}){let n=t.months.length-1,[r,i]=(0,g.useState)(n),[a,o]=(0,g.useState)(!1);(0,g.useEffect)(()=>{e.setQuakesThrough(r)},[e,r]),(0,g.useEffect)(()=>{if(!a)return;let e=setInterval(()=>i(e=>Math.min(n,e+1)),140);return()=>clearInterval(e)},[a,n]),(0,g.useEffect)(()=>{r===n&&o(!1)},[r,n]);let s=t.months[r].label,c=t.countThrough(r).toLocaleString(`en-US`);return(0,$.jsxs)(`div`,{className:`timeline`,children:[(0,$.jsxs)(`div`,{className:`ctl-row`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Earthquakes`}),(0,$.jsxs)(`span`,{className:`mono readout`,children:[`to `,s,` · `,c]})]}),(0,$.jsxs)(`div`,{className:`ctl-row`,children:[(0,$.jsx)(`button`,{className:`play`,"aria-label":a?`Pause`:`Play month by month`,onClick:()=>{!a&&r===n&&i(0),o(!a)},children:(0,$.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,"aria-hidden":`true`,children:a?(0,$.jsx)(`path`,{d:`M2 1h2v8H2zM6 1h2v8H6z`,fill:`currentColor`}):(0,$.jsx)(`path`,{d:`M2 1l7 4-7 4z`,fill:`currentColor`})})}),(0,$.jsx)(`input`,{type:`range`,min:`0`,max:n,step:`1`,value:r,"aria-label":`Earthquakes through month`,"aria-valuetext":`Through ${s}: ${c} earthquakes`,onChange:e=>{o(!1),i(+e.target.value)}})]})]})}function Cd({scene:e,deep:t=!1,onDeep:n}){let r=e?.subsurface,[i,a]=(0,g.useState)(`3d`),[o,s]=(0,g.useState)(`relief`),[c,l]=(0,g.useState)(`depth`),[u,d]=(0,g.useState)(e?.U?.exag?.value??6);(0,g.useEffect)(()=>(e&&(e.onExag=e=>d(e)),()=>{e&&(e.onExag=null)}),[e]);let[f,p]=(0,g.useState)(`16 m`),[m,h]=(0,g.useState)(!1),[_,v]=(0,g.useState)({conventional:!0,multidas:!0,optodas:!0});return(0,g.useEffect)(()=>{let t=setInterval(()=>e?.auv&&p(e.auv.finest()),250);return()=>clearInterval(t)},[e]),(0,$.jsxs)(`div`,{className:`panel controls`,children:[(0,$.jsx)(`div`,{className:`panel-head`,children:(0,$.jsx)(`span`,{className:`eyebrow`,children:`Terrain`})}),(0,$.jsx)(xd,{label:`View`,options:[[`3d`,`3D`],[`2d`,`2D`]],value:i,onChange:t=>{a(t),e.setView(t)}}),(0,$.jsx)(xd,{label:`Style`,options:[[`relief`,`Relief`],[`contours`,`Contours`]],value:o,onChange:t=>{s(t),e.setStyle(t)}}),(0,$.jsx)(xd,{label:`Color`,options:[[`depth`,`Depth`],[`mono`,`Mono`]],value:c,onChange:t=>{l(t),e.setColor(t)}}),(0,$.jsxs)(`div`,{className:`ctl-row`,children:[(0,$.jsxs)(`label`,{className:`eyebrow`,htmlFor:`exag`,children:[`Vertical `,(0,$.jsxs)(`span`,{className:`mono`,children:[`×`,Number(u).toFixed(1)]})]}),(0,$.jsx)(`input`,{id:`exag`,type:`range`,min:`1`,max:`12`,step:`0.1`,value:u,disabled:i===`2d`,"aria-label":`Vertical exaggeration`,onChange:t=>{let n=+t.target.value;d(n),e.flight=null,e.setExag(n)}})]}),e?.auv&&(0,$.jsxs)(`div`,{className:`ctl-row`,children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Axial detail`}),(0,$.jsx)(`span`,{className:`mono`,"aria-live":`polite`,children:f})]}),e?.dasLines?.length>0&&(0,$.jsx)(xd,{label:`DAS coverage`,options:[[`on`,`On`],[`off`,`Off`]],value:m?`on`:`off`,onChange:t=>{let n=t===`on`;h(n),e.setDasVisible(n)}}),e?.dasLines?.length>0&&m&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(xd,{label:`2021 conventional`,options:[[`on`,`On`],[`off`,`Off`]],value:_.conventional?`on`:`off`,onChange:t=>{let n=t===`on`;v(e=>({...e,conventional:n})),e.setDasKindVisible(`conventional`,n)}}),(0,$.jsx)(xd,{label:`2025–26 MultiDAS`,options:[[`on`,`On`],[`off`,`Off`]],value:_.multidas?`on`:`off`,onChange:t=>{let n=t===`on`;v(e=>({...e,multidas:n})),e.setDasKindVisible(`multidas`,n)}}),(0,$.jsx)(xd,{label:`2025–26 OptoDAS`,options:[[`on`,`On`],[`off`,`Off`]],value:_.optodas?`on`:`off`,onChange:t=>{let n=t===`on`;v(e=>({...e,optodas:n})),e.setDasKindVisible(`optodas`,n)}})]}),r&&(0,$.jsx)(xd,{label:`Subsurface`,options:[[`off`,`Off`],[`on`,`On`]],value:t?`on`:`off`,onChange:t=>{n?.(t===`on`),e.setSubsurface(t===`on`)}}),r&&t&&(0,$.jsx)(Sd,{scene:e,sub:r})]})}function wd({credit:e,auv:t=!1,subsurface:n=null}){let r=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{let e=r.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect(),n=document.querySelector(`.families`)?.getBoundingClientRect(),r=n&&n.width&&n.right>t.left&&n.left<t.right;e.style.maxHeight=`${Math.max(120,(r?n.top-8:innerHeight-16)-t.top)}px`};t(),addEventListener(`resize`,t),addEventListener(`animationend`,t);let n=typeof ResizeObserver==`function`?new ResizeObserver(t):null,i=document.querySelector(`.families`),a=[...e.closest(`.dock-pops`)?.children??[]].filter(t=>!t.contains(e));if(n)for(let e of[i,...a].filter(Boolean))n.observe(e);return()=>{removeEventListener(`resize`,t),removeEventListener(`animationend`,t),n?.disconnect()}},[]),(0,$.jsxs)(`div`,{className:`panel legend`,ref:r,children:[(0,$.jsx)(`div`,{className:`panel-head`,children:(0,$.jsx)(`span`,{className:`eyebrow`,children:`Legend`})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Site marker`}),(0,$.jsx)(`div`,{className:`row`,children:`One segment per sensor, colored by family`}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M1 6h10`,style:{stroke:`var(--text-secondary)`},strokeWidth:`3`})}),`Operating`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M1 6h10`,style:{stroke:`var(--text-secondary)`},strokeWidth:`3`,opacity:`0.28`})}),`Not deployed / retired`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M1 6h10`,style:{stroke:`var(--text-secondary)`},strokeWidth:`1.2`})}),`Planned (COSZO)`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M1 6h10`,style:{stroke:`var(--text-secondary)`},strokeWidth:`1.2`,strokeDasharray:`1.6 1.4`})}),`Status unknown`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Water column`}),(0,$.jsx)(`div`,{className:`row`,children:`Mooring above a seafloor site; solid where sensors sample`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Cable`}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M0 6h12`,stroke:`#ecebe6`,strokeWidth:`1.5`})}),`Charted or mapped route`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`rect`,{x:`3`,y:`3`,width:`6`,height:`6`,fill:`#121211`,stroke:`#ecebe6`,strokeWidth:`1.5`})}),`Primary node`]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`DAS coverage`}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M0 6h12`,stroke:`#a98cff`,strokeWidth:`2.5`})}),`2021 conventional OptaSense geometry`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M0 6h12`,stroke:`#ffbd59`,strokeWidth:`4`})}),`2025–2026 MultiDAS unmasked span`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M0 6h12`,stroke:`#62d7d2`,strokeWidth:`2.5`,strokeDasharray:`2 1.4`})}),`2025–2026 OptoDAS first south span`]}),(0,$.jsx)(`div`,{className:`row`,children:`Gold and cyan extents are schematic where their exact channel coordinates are unpublished.`})]}),n&&(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Beneath Axial`}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`circle`,{cx:`6`,cy:`6`,r:`2.2`,fill:`#a8a69d`})}),`Earthquake, 2015–2021`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`circle`,{cx:`6`,cy:`6`,r:`3`,fill:`#ffcc85`})}),`Within 60 days of the slider month`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`rect`,{x:`1`,y:`2`,width:`14`,height:`8`,rx:`1`,fill:`#cc6340`,opacity:`0.75`})}),`Magma chamber (AMC) top`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`rect`,{x:`1.5`,y:`2.5`,width:`13`,height:`7`,rx:`1`,fill:`#edebe0`,fillOpacity:`0.12`,stroke:`#edebe0`,strokeOpacity:`0.5`})}),`Caldera-wall faults`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`svg`,{className:`glyph`,children:(0,$.jsx)(`path`,{d:`M0 6h12`,stroke:`#ecebe6`,strokeWidth:`1.2`,strokeDasharray:`2 1.6`})}),`Caldera rim`]}),(0,$.jsx)(`div`,{className:`row`,children:`Lines every 100 m of depth; the seafloor above turns to glass`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Seafloor depth`}),(0,$.jsx)(`div`,{className:`ramp`}),(0,$.jsxs)(`div`,{className:`ramp-labels mono`,children:[(0,$.jsx)(`span`,{children:`0 m`}),(0,$.jsx)(`span`,{children:`1,500`}),(0,$.jsx)(`span`,{children:`3,000`}),(0,$.jsx)(`span`,{children:`4,800`})]})]}),(0,$.jsxs)(`div`,{className:`attribution`,children:[`Bathymetry: `,e,`.`,t&&` Axial summit: MBARI AUV survey (cruise V2506), 1 m.`,` Cable: NOAA/BOEM Marine Cadastre, OOI mariner notices; west of the US EEZ and at Axial, ooi_cables.csv (M. Kidiwela). Status: Nereus.`,n&&` ${n}.`]})]})}var Td={terrain:(0,$.jsx)(`path`,{d:`M1.5 13.5 6 6l2.6 4 1.9-2.6 4 6.1z`}),legend:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`rect`,{x:`1.8`,y:`3`,width:`2.4`,height:`2.4`}),(0,$.jsx)(`rect`,{x:`1.8`,y:`10.6`,width:`2.4`,height:`2.4`}),(0,$.jsx)(`path`,{d:`M7 4.2h7.2M7 8h7.2M7 11.8h7.2M1.8 8h2.4`})]}),help:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`}),(0,$.jsx)(`path`,{d:`M6.1 6.3a1.95 1.95 0 1 1 2.7 1.8c-.5.2-.8.6-.8 1.1v.7`}),(0,$.jsx)(`circle`,{cx:`8`,cy:`11.6`,r:`.4`,fill:`currentColor`})]})},Ed=[[`terrain`,`Terrain controls`],[`legend`,`Legend`],[`help`,`Help`]];function Dd(){return(0,$.jsxs)(`div`,{className:`panel help`,children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:`Moving the map`}),(0,$.jsxs)(`div`,{className:`hint`,children:[`Drag to move · `,(0,$.jsx)(`kbd`,{children:`Ctrl`}),`-drag to rotate · Scroll to zoom · `,(0,$.jsx)(`kbd`,{children:`←`}),(0,$.jsx)(`kbd`,{children:`↑`}),(0,$.jsx)(`kbd`,{children:`↓`}),(0,$.jsx)(`kbd`,{children:`→`}),` to move · Hover the cable or a node for details`]})]})}function Od({scene:e,deep:t=!1,onDeep:n,credit:r,auv:i=!1,subsurface:a=null}){let[o,s]=(0,g.useState)(()=>new Set),c=e=>s(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}),l=e=>`hud-pop-${e}`;return(0,$.jsxs)(`div`,{className:`hud-dock`,children:[(0,$.jsx)(`div`,{className:`dock-bar`,children:Ed.map(([e,t])=>(0,$.jsx)(`button`,{className:`panel dock-btn`,"aria-label":t,title:t,"aria-expanded":o.has(e),"aria-controls":e===`terrain`||o.has(e)?l(e):void 0,onClick:()=>c(e),children:(0,$.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Td[e]})},e))}),(0,$.jsxs)(`div`,{className:`dock-pops`,children:[(0,$.jsx)(`div`,{id:l(`terrain`),className:`dock-pop`,role:`group`,"aria-label":`Terrain controls`,hidden:!o.has(`terrain`),children:(0,$.jsx)(Cd,{scene:e,deep:t,onDeep:n})}),o.has(`legend`)&&(0,$.jsx)(`div`,{id:l(`legend`),className:`dock-pop`,role:`group`,"aria-label":`Legend`,children:(0,$.jsx)(wd,{credit:r,auv:i,subsurface:a})}),o.has(`help`)&&(0,$.jsx)(`div`,{id:l(`help`),className:`dock-pop`,role:`group`,"aria-label":`Help`,children:(0,$.jsx)(Dd,{})})]})]})}function kd({regions:e,sensors:t,active:n,onSelect:r,unplaced:i=0,unplacedOpen:a=!1,onUnplaced:o}){let s=t.filter(e=>e.lat!=null),c=[[`overview`,`Full array`,s.length],...e.map(e=>[e.key,e.label,s.filter(t=>t.region===e.key).length])],[l,u]=md(`regions`);if(l){let e=c.find(([e])=>e===n)?.[1];return(0,$.jsxs)(gd,{className:`regions-toggle`,onClick:()=>u(!1),children:[`Regions`,e?` · ${e}`:``]})}return(0,$.jsxs)(`nav`,{className:`panel regions`,"aria-label":`Regions`,children:[(0,$.jsxs)(`div`,{className:`panel-head`,style:{padding:`2px 4px 4px 10px`},children:[(0,$.jsx)(`span`,{className:`eyebrow`,children:`Regions`}),(0,$.jsx)(hd,{label:`regions`,onClick:()=>u(!0)})]}),c.map(([e,t,i])=>(0,$.jsxs)(`button`,{"aria-pressed":n===e,onClick:()=>r(e),children:[t,(0,$.jsx)(`span`,{className:`n mono`,children:i})]},e)),i>0&&o&&(0,$.jsxs)(`button`,{className:`unplaced`,"aria-pressed":a,onClick:o,title:`Sensors with no recorded position and no catalogued site`,children:[`Unplaced sensors`,(0,$.jsx)(`span`,{className:`n mono`,children:i})]})]})}function Ad({credit:e,auv:t=!1,subsurface:n=!1}){return(0,$.jsxs)(`div`,{className:`credit`,"aria-label":`Map credits`,children:[`Bathymetry: `,e??`GMRT, Ryan et al. (2009), CC BY 4.0`,t&&` · Axial summit: MBARI AUV survey, 1 m`,n&&` · Subsurface: M. Kidiwela, axial_visuals`]})}function jd(e,t,n=new Date){if(e.kind===`erddap`)return{label:`Python (erddapy)`,code:`from erddapy import ERDDAP

e = ERDDAP(server="https://erddap.dataexplorer.oceanobservatories.org/erddap", protocol="tabledap")
e.dataset_id = "${e.datasetId}"
e.constraints = {"time>=": "now-7days"}
df = e.to_pandas()   # ${t.name}`};if(e.kind===`earthscope`){let t=e.channel??`HHZ`,r=e=>e.toISOString().slice(0,19),i=new Date(Math.floor(n.getTime()/1e3)*1e3);return{label:`FDSN dataselect (MiniSEED, the last hour, UTC)`,code:`curl -o ${e.network}.${e.station}.mseed "https://service.earthscope.org/fdsnws/dataselect/1/query?net=${e.network}&sta=${e.station}&cha=${t}&loc=--&starttime=${r(new Date(i.getTime()-36e5))}&endtime=${r(i)}"`}}return e.kind===`pi_portal`?{label:`List files`,code:`curl -s "${e.url}"`}:null}function Md({sensor:e}){let[t,n]=(0,g.useState)(null);return e.access.length?(0,$.jsxs)(`section`,{className:`gtd`,children:[(0,$.jsx)(`h3`,{children:`Get this data`}),e.access.map((r,i)=>{let a=jd(r,e);return(0,$.jsxs)(`div`,{className:`route`,children:[(0,$.jsx)(`a`,{href:r.url,target:`_blank`,rel:`noreferrer`,children:r.label}),(0,$.jsx)(`p`,{children:r.how}),a&&(0,$.jsxs)(`div`,{className:`snippet`,children:[(0,$.jsxs)(`div`,{className:`snip-head`,children:[(0,$.jsx)(`span`,{children:a.label}),(0,$.jsx)(`button`,{onClick:()=>{navigator.clipboard?.writeText(a.code),n(i)},children:t===i?`Copied`:`Copy`})]}),(0,$.jsx)(`pre`,{className:`mono`,children:a.code})]})]},i)})]}):(0,$.jsxs)(`section`,{className:`gtd`,children:[(0,$.jsx)(`h3`,{children:`Get this data`}),(0,$.jsx)(`p`,{className:`muted`,children:`No access route is documented for this sensor yet.`})]})}var Nd={404:`notfound`,422:`bad`,502:`upstream`,503:`busy`,504:`timeout`},Pd=`https://rca-atlas.quakehunt.workers.dev`,Fd=`${Pd}/v1/live`;async function Id(e,{signal:t,method:n=`GET`,body:r,fetchImpl:i=fetch}={}){let a;try{a=await i(`${Fd}${e}`,{signal:t,method:n,headers:r?{"Content-Type":`application/json`}:void 0,body:r?JSON.stringify(r):void 0})}catch(e){if(e?.name===`AbortError`)throw e;return{ok:!1,kind:`unreachable`,source:`gateway`,message:`The live data service is not running.`}}let o;try{o=await a.json()}catch{o=null}return a.ok?{ok:!0,data:o}:o?.error?{ok:!1,kind:Nd[a.status]??`upstream`,source:o.error.source,message:o.error.message}:{ok:!1,kind:`unreachable`,source:`gateway`,message:`The live data service is not running.`}}var Ld=e=>new URLSearchParams(Object.entries(e).filter(([,e])=>e!=null&&e!==``)).toString(),Rd=(e,t)=>Id(`/status/${encodeURIComponent(e)}`,t),zd=(e,t)=>Id(`/series/${encodeURIComponent(e)}/variables`,t),Bd=(e,t,n)=>Id(`/series/${encodeURIComponent(e)}?${Ld(t)}`,n),Vd=(e,t)=>Id(`/plots/${encodeURIComponent(e)}`,t),Hd=(e,t,n,r)=>Id(`/waveform/${e}?${Ld({minutes:t,channel:n})}`,r),Ud=(e,t,n)=>Id(`/waveform/${e}/health?${Ld({channel:t})}`,n),Wd=(e,t,n,r)=>Id(`/files/${encodeURIComponent(e)}?${Ld({endpoint:t,path:n})}`,r),Gd=e=>({key:e,state:e?`loading`:`idle`,data:null,error:null});function Kd(e,t){let[n,r]=(0,g.useState)(()=>Gd(e)),[i,a]=(0,g.useState)(0);(0,g.useEffect)(()=>{if(r(Gd(e)),!e)return;let n=!0,i=new AbortController;return t({signal:i.signal}).then(t=>{n&&r(t.ok?{key:e,state:`ok`,data:t.data,error:null}:{key:e,state:`error`,data:null,error:t})},t=>{n&&t?.name!==`AbortError`&&r({key:e,state:`error`,data:null,error:{kind:`unreachable`,source:`gateway`,message:String(t)}})}),()=>{n=!1,i.abort()}},[e,i]);let o=(0,g.useCallback)(()=>a(e=>e+1),[]),{key:s,...c}=n.key===e?n:Gd(e);return{...c,retry:o}}function qd({sensor:e,manifest:t}){let n=Kd(e.refdes?`status:${e.refdes}`:null,t=>Rd(e.refdes,t)),r=e.refdes?null:e.access.find(e=>e.kind===`earthscope`),i=Kd(r?`wave-health:${r.network}.${r.station}:${r.channel}`:null,e=>Ud(`${r.network}.${r.station}`,r.channel,e)),a=`${$u(e.status)}${e.statusSource?` · ${e.statusSource}`:``}`;if(r)return i.state===`idle`||i.state===`loading`?(0,$.jsx)(`div`,{className:`live-status`,children:`Checking recent EarthScope waveform…`}):i.state===`ok`?(0,$.jsxs)(`div`,{className:`live-status`,children:[i.data.recording?`Waveform available`:`No waveform in the recent window`,` · EarthScope checked live`]}):i.error.kind===`unreachable`?(0,$.jsxs)(`div`,{className:`live-status degraded`,children:[`EarthScope live check unavailable `,(0,$.jsx)(`button`,{onClick:i.retry,children:`Retry`})]}):(0,$.jsxs)(`div`,{className:`live-status degraded`,children:[`EarthScope: `,i.error.message,` `,(0,$.jsx)(`button`,{onClick:i.retry,children:`Retry`})]});if(!e.refdes||n.state===`idle`)return(0,$.jsx)(`div`,{className:`live-status`,children:a});if(n.state===`loading`)return(0,$.jsxs)(`div`,{className:`live-status`,children:[a,` · checking live…`]});if(n.state===`ok`){let e=n.data,t=!e.evidenceMode||e.evidenceMode===`live`?`checked live`:e.evidenceMode===`snapshot`?`from Nereus snapshot`:`from Nereus (${e.evidenceMode})`;return(0,$.jsxs)(`div`,{className:`live-status`,children:[$u(e.status??`UNKNOWN`),` · `,t,e.data?.checkedAt?`, data ${e.data.code} at ${new Date(e.data.checkedAt).toUTCString().slice(17,22)} UTC`:``]})}return n.error.kind===`unreachable`?(0,$.jsxs)(`div`,{className:`live-status degraded`,children:[(0,$.jsxs)(`span`,{children:[`Live data unavailable. Showing snapshot from `,td(e.statusAsOf??t?.corpusSnapshot),`.`]}),(0,$.jsx)(`button`,{onClick:n.retry,children:`Retry`})]}):n.error.kind===`notfound`?(0,$.jsxs)(`div`,{className:`live-status`,children:[a,` · `,n.error.source===`Nereus`?`not tracked live by Nereus`:`${n.error.source}: ${n.error.message}`]}):(0,$.jsxs)(`div`,{className:`live-status degraded`,children:[a,` · `,n.error.source,` failed: `,n.error.message,` `,(0,$.jsx)(`button`,{onClick:n.retry,children:`Retry`})]})}function Jd({error:e,retry:t}){return(0,$.jsxs)(`p`,{className:`degraded`,children:[e.kind===`unreachable`?`Live data unavailable: the live data service is not running.`:`${e.source}: ${e.message}`,(0,$.jsx)(`button`,{onClick:t,children:`Retry`})]})}function Yd({route:e}){let[t,n]=(0,g.useState)(``),r=Kd(`files:${e.instrumentKey}:${e.endpointId}:${t}`,n=>Wd(e.instrumentKey,e.endpointId,t,n)),i=t.split(`/`).filter(Boolean).slice(0,-1).join(`/`);return(0,$.jsxs)(`div`,{className:`files`,children:[(0,$.jsxs)(`div`,{className:`mono crumbs`,children:[e.label,` / `,t||``,t&&(0,$.jsx)(`button`,{onClick:()=>n(i?`${i}/`:``),children:`Up`})]}),r.state===`loading`&&(0,$.jsx)(`p`,{className:`muted`,children:`Listing files…`}),r.state===`error`&&(0,$.jsx)(Jd,{error:r.error,retry:r.retry}),r.state===`ok`&&(0,$.jsxs)(`ul`,{children:[r.data.entries.map(e=>(0,$.jsx)(`li`,{children:e.kind===`directory`?(0,$.jsxs)(`button`,{onClick:()=>n(e.path),children:[e.name,`/`]}):(0,$.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,children:e.name})},e.path)),r.data.message?(0,$.jsx)(`li`,{className:`muted`,children:r.data.message}):r.data.truncated&&(0,$.jsx)(`li`,{className:`muted`,children:`Showing the newest 200 entries.`})]})]})}function Xd({refdes:e}){let t=Kd(`plots:${e}`,t=>Vd(e,t)),[n,r]=(0,g.useState)(null);if(t.state===`loading`)return(0,$.jsx)(`p`,{className:`muted`,children:`Loading recent plots…`});if(t.state===`error`)return(0,$.jsx)(Jd,{error:t.error,retry:t.retry});let i=[...new Set(t.data.plots.map(e=>e.variable))];if(!i.length)return(0,$.jsx)(`p`,{className:`muted`,children:`The RCA QA/QC site has no recent plots for this sensor.`});let a=n??i[0],o=t.data.plots.filter(e=>e.variable===a).slice(0,4);return(0,$.jsxs)(`div`,{className:`plots`,children:[(0,$.jsx)(`select`,{"aria-label":`Plotted variable`,value:a,onChange:e=>r(e.target.value),children:i.map(e=>(0,$.jsx)(`option`,{children:e},e))}),o.map(e=>(0,$.jsxs)(`figure`,{children:[(0,$.jsx)(`img`,{src:e.url,alt:`${a}, ${e.timeSpan}`,loading:`lazy`}),(0,$.jsxs)(`figcaption`,{children:[e.timeSpan,` · `,e.dataRange]})]},e.url))]})}var Zd=!0,Qd=`uplot`,$d=`u-hz`,ef=`u-vt`,tf=`u-title`,nf=`u-wrap`,rf=`u-under`,af=`u-over`,of=`u-axis`,sf=`u-off`,cf=`u-select`,lf=`u-cursor-x`,uf=`u-cursor-y`,df=`u-cursor-pt`,ff=`u-legend`,pf=`u-live`,mf=`u-inline`,hf=`u-series`,gf=`u-marker`,_f=`u-label`,vf=`u-value`,yf=`width`,bf=`height`,xf=`top`,Sf=`bottom`,Cf=`left`,wf=`right`,Tf=`#000`,Ef=`#0000`,Df=`mousemove`,Of=`mousedown`,kf=`mouseup`,Af=`mouseenter`,jf=`mouseleave`,Mf=`dblclick`,Nf=`resize`,Pf=`scroll`,Ff=`change`,If=`dppxchange`,Lf=`--`,Rf=typeof window<`u`,zf=Rf?document:null,Bf=Rf?window:null,Vf=Rf?navigator:null,Hf,Uf;function Wf(){let e=devicePixelRatio;Hf!=e&&(Hf=e,Uf&&ap(Ff,Uf,Wf),Uf=matchMedia(`(min-resolution: ${Hf-.001}dppx) and (max-resolution: ${Hf+.001}dppx)`),ip(Ff,Uf,Wf),Bf.dispatchEvent(new CustomEvent(If)))}function Gf(e,t){if(t!=null){let n=e.classList;!n.contains(t)&&n.add(t)}}function Kf(e,t){let n=e.classList;n.contains(t)&&n.remove(t)}function qf(e,t,n){e.style[t]=n+`px`}function Jf(e,t,n,r){let i=zf.createElement(e);return t!=null&&Gf(i,t),n?.insertBefore(i,r),i}function Yf(e,t){return Jf(`div`,e,t)}var Xf=new WeakMap;function Zf(e,t,n,r,i){let a=`translate(`+t+`px,`+n+`px)`;a!=Xf.get(e)&&(e.style.transform=a,Xf.set(e,a),t<0||n<0||t>r||n>i?Gf(e,sf):Kf(e,sf))}var Qf=new WeakMap;function $f(e,t,n){let r=t+n;r!=Qf.get(e)&&(Qf.set(e,r),e.style.background=t,e.style.borderColor=n)}var ep=new WeakMap;function tp(e,t,n,r){let i=t+``+n;i!=ep.get(e)&&(ep.set(e,i),e.style.height=n+`px`,e.style.width=t+`px`,e.style.marginLeft=r?-t/2+`px`:0,e.style.marginTop=r?-n/2+`px`:0)}var np={passive:!0},rp={...np,capture:!0};function ip(e,t,n,r){t.addEventListener(e,n,r?rp:np)}function ap(e,t,n,r){t.removeEventListener(e,n,np)}Rf&&Wf();function op(e,t,n,r){let i;n||=0,r||=t.length-1;let a=r<=2147483647;for(;r-n>1;)i=a?n+r>>1:Op((n+r)/2),t[i]<e?n=i:r=i;return e-t[n]<=t[r]-e?n:r}function sp(e){return(t,n,r)=>{let i=-1,a=-1;for(let a=n;a<=r;a++)if(e(t[a])){i=a;break}for(let i=r;i>=n;i--)if(e(t[i])){a=i;break}return[i,a]}}var cp=e=>e!=null,lp=e=>e!=null&&e>0,up=sp(cp),dp=sp(lp);function fp(e,t,n,r=0,i=!1){let a=i?dp:up,o=i?lp:cp;[t,n]=a(e,t,n);let s=e[t],c=e[t];if(t>-1){if(r==1)s=e[t],c=e[n];else if(r==-1)s=e[n],c=e[t];else for(let r=t;r<=n;r++){let t=e[r];o(t)&&(t<s?s=t:t>c&&(c=t))}}return[s??zp,c??-zp]}function pp(e,t,n,r){let i=Pp(e),a=Pp(t);e==t&&(i==-1?(e*=n,t/=n):(e/=n,t*=n));let o=n==10?Fp:Ip,s=i==1?Op:Ap,c=a==1?Ap:Op,l=s(o(Dp(e))),u=c(o(Dp(t))),d=Np(n,l),f=Np(n,u);return n==10&&(l<0&&(d=tm(d,-l)),u<0&&(f=tm(f,-u))),r||n==2?(e=d*i,t=f*a):(e=em(e,d),t=$p(t,f)),[e,t]}function mp(e,t,n,r){let i=pp(e,t,n,r);return e==0&&(i[0]=0),t==0&&(i[1]=0),i}var hp=.1,gp={mode:3,pad:hp},_p={pad:0,soft:null,mode:0},vp={min:_p,max:_p};function yp(e,t,n,r){return fm(n)?Sp(e,t,n):(_p.pad=n,_p.soft=r?0:null,_p.mode=r?3:0,Sp(e,t,vp))}function bp(e,t){return e??t}function xp(e,t,n){for(t=bp(t,0),n=bp(n,e.length-1);t<=n;){if(e[t]!=null)return!0;t++}return!1}function Sp(e,t,n){let r=n.min,i=n.max,a=bp(r.pad,0),o=bp(i.pad,0),s=bp(r.hard,-zp),c=bp(i.hard,zp),l=bp(r.soft,zp),u=bp(i.soft,-zp),d=bp(r.mode,0),f=bp(i.mode,0),p=t-e,m=Fp(p),h=Mp(Dp(e),Dp(t)),g=Dp(Fp(h)-m);(p<1e-24||g>10)&&(p=0,(e==0||t==0)&&(p=1e-24,d==2&&l!=zp&&(a=0),f==2&&u!=-zp&&(o=0)));let _=p||h||1e3,v=Np(10,Op(Fp(_))),y=tm(em(e-_*(p==0?e==0?.1:1:a),v/10),24),b=e>=l&&(d==1||d==3&&y<=l||d==2&&y>=l)?l:zp,x=Mp(s,y<b&&e>=b?b:jp(b,y)),S=tm($p(t+_*(p==0?t==0?.1:1:o),v/10),24),C=t<=u&&(f==1||f==3&&S>=u||f==2&&S<=u)?u:-zp,w=jp(c,S>C&&t<=C?C:Mp(C,S));return x==w&&x==0&&(w=100),[x,w]}var Cp=new Intl.NumberFormat(Rf?Vf.language:`en-US`),wp=e=>Cp.format(e),Tp=Math,Ep=Tp.PI,Dp=Tp.abs,Op=Tp.floor,kp=Tp.round,Ap=Tp.ceil,jp=Tp.min,Mp=Tp.max,Np=Tp.pow,Pp=Tp.sign,Fp=Tp.log10,Ip=Tp.log2,Lp=(e,t=1)=>Tp.sinh(e)*t,Rp=(e,t=1)=>Tp.asinh(e/t),zp=1/0;function Bp(e){return(Fp((e^e>>31)-(e>>31))|0)+1}function Vp(e,t,n){return jp(Mp(e,t),n)}function Hp(e){return typeof e==`function`}function Up(e){return Hp(e)?e:()=>e}var Wp=()=>{},Gp=e=>e,Kp=(e,t)=>t,qp=e=>null,Jp=e=>!0,Yp=(e,t)=>e==t,Xp=/\.\d*?(?=9{6,}|0{6,})/gm,Zp=e=>{if(lm(e)||nm.has(e))return e;let t=`${e}`,n=t.match(Xp);if(n==null)return e;let r=n[0].length-1;if(t.indexOf(`e-`)!=-1){let[e,n]=t.split(`e`);return+`${Zp(e)}e${n}`}return tm(e,r)};function Qp(e,t){return Zp(tm(Zp(e/t))*t)}function $p(e,t){return Zp(Ap(Zp(e/t))*t)}function em(e,t){return Zp(Op(Zp(e/t))*t)}function tm(e,t=0){if(lm(e))return e;let n=10**t;return kp(e*n*(1+2**-52))/n}var nm=new Map;function rm(e){return((``+e).split(`.`)[1]||``).length}function im(e,t,n,r){let i=[],a=r.map(rm);for(let o=t;o<n;o++){let t=Dp(o),n=tm(Np(e,o),t);for(let s=0;s<r.length;s++){let c=e==10?+`${r[s]}e${o}`:r[s]*n,l=(o>=0?0:t)+(o>=a[s]?0:a[s]),u=e==10?c:tm(c,l);i.push(u),nm.set(u,l)}}return i}var am={},om=[],sm=[null,null],cm=Array.isArray,lm=Number.isInteger,um=e=>e===void 0;function dm(e){return typeof e==`string`}function fm(e){let t=!1;if(e!=null){let n=e.constructor;t=n==null||n==Object}return t}function pm(e){return typeof e==`object`&&!!e}var mm=Object.getPrototypeOf(Uint8Array),hm=`__proto__`;function gm(e,t=fm){let n;if(cm(e)){let r=e.find(e=>e!=null);if(cm(r)||t(r)){n=Array(e.length);for(let r=0;r<e.length;r++)n[r]=gm(e[r],t)}else n=e.slice()}else if(e instanceof mm)n=e.slice();else if(t(e)){n={};for(let r in e)r!=hm&&(n[r]=gm(e[r],t))}else n=e;return n}function _m(e){let t=arguments;for(let n=1;n<t.length;n++){let r=t[n];for(let t in r)t!=hm&&(fm(e[t])?_m(e[t],gm(r[t])):e[t]=gm(r[t]))}return e}var vm=0,ym=1,bm=2;function xm(e,t,n){for(let r=0,i,a=-1;r<t.length;r++){let o=t[r];if(o>a){for(i=o-1;i>=0&&e[i]==null;)e[i--]=null;for(i=o+1;i<n&&e[i]==null;)e[a=i++]=null}}}function Sm(e,t){if(Tm(e)){let t=e[0].slice();for(let n=1;n<e.length;n++)t.push(...e[n].slice(1));return Em(t[0])||(t=wm(t)),t}let n=new Set;for(let t=0;t<e.length;t++){let r=e[t][0],i=r.length;for(let e=0;e<i;e++)n.add(r[e])}let r=[Array.from(n).sort((e,t)=>e-t)],i=r[0].length,a=new Map;for(let e=0;e<i;e++)a.set(r[0][e],e);for(let n=0;n<e.length;n++){let o=e[n],s=o[0];for(let e=1;e<o.length;e++){let c=o[e],l=Array(i).fill(void 0),u=t?t[n][e]:ym,d=[];for(let e=0;e<c.length;e++){let t=c[e],n=a.get(s[e]);t===null?u!=vm&&(l[n]=t,u==bm&&d.push(n)):l[n]=t}xm(l,d,i),r.push(l)}}return r}var Cm=typeof queueMicrotask>`u`?e=>Promise.resolve().then(e):queueMicrotask;function wm(e){let t=e[0],n=t.length,r=Array(n);for(let e=0;e<r.length;e++)r[e]=e;r.sort((e,n)=>t[e]-t[n]);let i=[];for(let t=0;t<e.length;t++){let a=e[t],o=Array(n);for(let e=0;e<n;e++)o[e]=a[r[e]];i.push(o)}return i}function Tm(e){let t=e[0][0],n=t.length;for(let r=1;r<e.length;r++){let i=e[r][0];if(i.length!=n)return!1;if(i!=t){for(let e=0;e<n;e++)if(i[e]!=t[e])return!1}}return!0}function Em(e,t=100){let n=e.length;if(n<=1)return!0;let r=0,i=n-1;for(;r<=i&&e[r]==null;)r++;for(;i>=r&&e[i]==null;)i--;if(i<=r)return!0;let a=Mp(1,Op((i-r+1)/t));for(let t=e[r],n=r+a;n<=i;n+=a){let r=e[n];if(r!=null){if(r<=t)return!1;t=r}}return!0}var Dm=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],Om=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];function km(e){return e.slice(0,3)}var Am=Om.map(km),jm={MMMM:Dm,MMM:Dm.map(km),WWWW:Om,WWW:Am};function Mm(e){return(e<10?`0`:``)+e}function Nm(e){return(e<10?`00`:e<100?`0`:``)+e}var Pm={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+``).slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>Mm(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>Mm(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>Mm(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return t==0?12:t>12?t-12:t},AA:e=>e.getHours()>=12?`PM`:`AM`,aa:e=>e.getHours()>=12?`pm`:`am`,a:e=>e.getHours()>=12?`p`:`a`,mm:e=>Mm(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>Mm(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>Nm(e.getMilliseconds())};function Fm(e,t){t||=jm;let n=[],r=/\{([a-z]+)\}|[^{]+/gi,i;for(;i=r.exec(e);)n.push(i[0][0]==`{`?Pm[i[1]]:i[0]);return e=>{let r=``;for(let i=0;i<n.length;i++)r+=typeof n[i]==`string`?n[i]:n[i](e,t);return r}}var Im=new Intl.DateTimeFormat().resolvedOptions().timeZone;function Lm(e,t){let n;return t==`UTC`||t==`Etc/UTC`?n=new Date(+e+e.getTimezoneOffset()*6e4):t==Im?n=e:(n=new Date(e.toLocaleString(`en-US`,{timeZone:t})),n.setMilliseconds(e.getMilliseconds())),n}var Rm=e=>e%1==0,zm=[1,2,2.5,5],Bm=im(10,-32,0,zm),Vm=im(10,0,32,zm),Hm=Vm.filter(Rm),Um=Bm.concat(Vm),Wm=`
`,Gm=`{YYYY}`,Km=Wm+Gm,qm=`{M}/{D}`,Jm=Wm+qm,Ym=Jm+`/{YY}`,Xm=`{aa}`,Zm=`{h}:{mm}`+Xm,Qm=Wm+Zm,$m=`:{ss}`,eh=null;function th(e){let t=e*1e3,n=t*60,r=n*60,i=r*24,a=i*30,o=i*365,s=(e==1?im(10,0,3,zm).filter(Rm):im(10,-3,0,zm)).concat([t,t*5,t*10,t*15,t*30,n,n*5,n*10,n*15,n*30,r,r*2,r*3,r*4,r*6,r*8,r*12,i,i*2,i*3,i*4,i*5,i*6,i*7,i*8,i*9,i*10,i*15,a,a*2,a*3,a*4,a*6,o,o*2,o*5,o*10,o*25,o*50,o*100]),c=[[o,Gm,eh,eh,eh,eh,eh,eh,1],[i*28,`{MMM}`,Km,eh,eh,eh,eh,eh,1],[i,qm,Km,eh,eh,eh,eh,eh,1],[r,`{h}`+Xm,Ym,eh,Jm,eh,eh,eh,1],[n,Zm,Ym,eh,Jm,eh,eh,eh,1],[t,$m,Ym+` `+Zm,eh,Jm+` `+Zm,eh,Qm,eh,1],[e,$m+`.{fff}`,Ym+` `+Zm,eh,Jm+` `+Zm,eh,Qm,eh,1]];function l(t){return(s,c,l,u,d,f)=>{let p=[],m=d>=o,h=d>=a&&d<o,g=t(l),_=tm(g*e,3),v=dh(g.getFullYear(),m?0:g.getMonth(),h||m?1:g.getDate()),y=tm(v*e,3);if(h||m){let n=h?d/a:0,r=m?d/o:0,i=_==y?_:tm(dh(v.getFullYear()+r,v.getMonth()+n,1)*e,3),s=new Date(kp(i/e)),c=s.getFullYear(),l=s.getMonth();for(let a=0;i<=u;a++){let o=dh(c+r*a,l+n*a,1),s=o-t(tm(o*e,3));i=tm((+o+s)*e,3),i<=u&&p.push(i)}}else{let a=d>=i?i:d,o=y+(Op(l)-Op(_))+$p(_-y,a);p.push(o);let m=t(o),h=m.getHours()+m.getMinutes()/n+m.getSeconds()/r,g=d/r,v=f/s.axes[c]._space;for(;o=tm(o+d,e==1?0:3),!(o>u);)if(g>1){let e=Op(tm(h+g,6))%24,n=t(o).getHours()-e;n>1&&(n=-1),o-=n*r,h=(h+g)%24;let i=p[p.length-1];tm((o-i)/d,3)*v>=.7&&p.push(o)}else p.push(o)}return p}}return[s,c,l]}var[nh,rh,ih]=th(1),[ah,oh,sh]=th(.001);im(2,-53,53,[1]);function ch(e,t){return e.map(e=>e.map((n,r)=>r==0||r==8||n==null?n:t(r==1||e[8]==0?n:e[1]+n)))}function lh(e,t){return(n,r,i,a,o)=>{let s=t.find(e=>o>=e[0])||t[t.length-1],c,l,u,d,f,p;return r.map(t=>{let n=e(t),r=n.getFullYear(),i=n.getMonth(),a=n.getDate(),o=n.getHours(),m=n.getMinutes(),h=n.getSeconds(),g=r!=c&&s[2]||i!=l&&s[3]||a!=u&&s[4]||o!=d&&s[5]||m!=f&&s[6]||h!=p&&s[7]||s[1];return c=r,l=i,u=a,d=o,f=m,p=h,g(n)})}}function uh(e,t){let n=Fm(t);return(t,r,i,a,o)=>r.map(t=>n(e(t)))}function dh(e,t,n){return new Date(e,t,n)}function fh(e,t){return t(e)}var ph=`{YYYY}-{MM}-{DD} {h}:{mm}{aa}`;function mh(e,t){return(n,r,i,a)=>a==null?Lf:t(e(r))}function hh(e,t){let n=e.series[t];return n.width?n.stroke(e,t):n.points.width?n.points.stroke(e,t):null}function gh(e,t){return e.series[t].fill(e,t)}var _h={show:!0,live:!0,isolate:!1,mount:Wp,markers:{show:!0,width:2,stroke:hh,fill:gh,dash:`solid`},idx:null,idxs:null,values:[]};function vh(e,t){let n=e.cursor.points,r=Yf(),i=n.size(e,t);qf(r,yf,i),qf(r,bf,i);let a=i/-2;qf(r,`marginLeft`,a),qf(r,`marginTop`,a);let o=n.width(e,t,i);return o&&qf(r,`borderWidth`,o),r}function yh(e,t){let n=e.series[t].points;return n._fill||n._stroke}function bh(e,t){let n=e.series[t].points;return n._stroke||n._fill}function xh(e,t){return e.series[t].points.size}var Sh=[0,0];function Ch(e,t,n){return Sh[0]=t,Sh[1]=n,Sh}function wh(e,t,n,r=!0){return e=>{e.button==0&&(!r||e.target==t)&&n(e)}}function Th(e,t,n,r=!0){return e=>{(!r||e.target==t)&&n(e)}}var Eh={show:!0,x:!0,y:!0,lock:!1,move:Ch,points:{one:!1,show:vh,size:xh,width:0,stroke:bh,fill:yh},bind:{mousedown:wh,mouseup:wh,click:wh,dblclick:wh,mousemove:Th,mouseleave:Th,mouseenter:Th},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,n,r,i)=>r-i,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Dh={show:!0,stroke:`rgba(0,0,0,0.07)`,width:2},Oh=_m({},Dh,{filter:Kp}),kh=_m({},Oh,{size:10}),Ah=_m({},Dh,{show:!1}),jh=`12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,Mh=`bold `+jh,Nh=1.5,Ph={show:!0,scale:`x`,stroke:Tf,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Mh,side:2,grid:Oh,ticks:kh,border:Ah,font:jh,lineGap:Nh,rotate:0},Fh=`Value`,Ih=`Time`,Lh={show:!0,scale:`x`,auto:!1,sorted:1,min:zp,max:-1/0,idxs:[]};function Rh(e,t,n,r,i){return t.map(e=>e==null?``:wp(e))}function zh(e,t,n,r,i,a,o){let s=[],c=nm.get(i)||0;n=o?n:tm($p(n,i),c);for(let e=n;e<=r;e=tm(e+i,c))s.push(Object.is(e,-0)?0:e);return s}function Bh(e,t,n,r,i,a,o){let s=[],c=e.scales[e.axes[t].scale].log;i=Np(c,Op((c==10?Fp:Ip)(n))),c==10&&(i=Um[op(i,Um)]);let l=n,u=i*c;c==10&&(u=Um[op(u,Um)]);do s.push(l),l+=i,c==10&&!nm.has(l)&&(l=tm(l,nm.get(i))),l>=u&&(i=l,u=i*c,c==10&&(u=Um[op(u,Um)]));while(l<=r);return s}function Vh(e,t,n,r,i,a,o){let s=e.scales[e.axes[t].scale].asinh,c=r>s?Bh(e,t,Mp(s,n),r,i):[s],l=r>=0&&n<=0?[0]:[];return(n<-s?Bh(e,t,Mp(s,-r),-n,i):[s]).reverse().map(e=>-e).concat(l,c)}var Hh=/./,Uh=/[12357]/,Wh=/[125]/,Gh=/1/,Kh=(e,t,n,r)=>e.map((e,i)=>t==4&&e==0||i%r==0&&n.test(e.toExponential()[+(e<0)])?e:null);function qh(e,t,n,r,i){let a=e.axes[n],o=a.scale,s=e.scales[o],c=e.valToPos,l=a._space,u=c(10,o),d=c(9,o)-u>=l?Hh:c(7,o)-u>=l?Uh:c(5,o)-u>=l?Wh:Gh;if(d==Gh){let e=Dp(c(1,o)-u);if(e<l)return Kh(t.slice().reverse(),s.distr,d,Ap(l/e)).reverse()}return Kh(t,s.distr,d,1)}function Jh(e,t,n,r,i){let a=e.axes[n],o=a.scale,s=a._space,c=e.valToPos,l=Dp(c(1,o)-c(2,o));return l<s?Kh(t.slice().reverse(),3,Hh,Ap(s/l)).reverse():t}function Yh(e,t,n,r){return r==null?Lf:t==null?``:wp(t)}var Xh={show:!0,scale:`y`,stroke:Tf,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Mh,side:3,grid:Oh,ticks:kh,border:Ah,font:jh,lineGap:Nh,rotate:0};function Zh(e,t){return tm((3+(e||1)*2)*t,3)}function Qh(e,t){let{scale:n,idxs:r}=e.series[0],i=e._data[0],a=e.valToPos(i[r[0]],n,!0),o=Dp(e.valToPos(i[r[1]],n,!0)-a)/(e.series[t].points.space*Hf);return r[1]-r[0]<=o}var $h={scale:null,auto:!0,sorted:0,min:zp,max:-1/0},eg=(e,t,n,r,i)=>i,tg={show:!0,auto:!0,sorted:0,gaps:eg,alpha:1,facets:[_m({},$h,{scale:`x`}),_m({},$h,{scale:`y`})]},ng={scale:`y`,auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:eg,alpha:1,points:{show:Qh,filter:null},values:null,min:zp,max:-1/0,idxs:[],path:null,clip:null};function rg(e,t,n,r,i){return n/10}var ig={time:Zd,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},ag=_m({},ig,{time:!1,ori:1}),og={};function sg(e,t){let n=og[e];return n||(n={key:e,plots:[],sub(e){n.plots.push(e)},unsub(e){n.plots=n.plots.filter(t=>t!=e)},pub(e,t,r,i,a,o,s){for(let c=0;c<n.plots.length;c++)n.plots[c]!=t&&n.plots[c].pub(e,t,r,i,a,o,s)}},e!=null&&(og[e]=n)),n}var cg=1,lg=2;function ug(e,t,n){let r=e.mode,i=e.series[t],a=r==2?e._data[t]:e._data,o=e.scales,s=e.bbox,c=a[0],l=r==2?a[1]:a[t],u=r==2?o[i.facets[0].scale]:o[e.series[0].scale],d=r==2?o[i.facets[1].scale]:o[i.scale],f=s.left,p=s.top,m=s.width,h=s.height,g=e.valToPosH,_=e.valToPosV;return u.ori==0?n(i,c,l,u,d,g,_,f,p,m,h,yg,xg,Cg,Tg,Dg):n(i,c,l,u,d,_,g,p,f,h,m,bg,Sg,wg,Eg,Og)}function dg(e,t){let n=0,r=0,i=bp(e.bands,om);for(let e=0;e<i.length;e++){let a=i[e];a.series[0]==t?n=a.dir:a.series[1]==t&&(a.dir==1?r|=1:r|=2)}return[n,r==1?-1:r==2?1:r==3?2:0]}function fg(e,t,n,r,i){let a=e.mode,o=e.series[t],s=a==2?o.facets[1].scale:o.scale,c=e.scales[s];return i==-1?c.min:i==1?c.max:c.distr==3?c.dir==1?c.min:c.max:0}function pg(e,t,n,r,i,a){return ug(e,t,(e,t,o,s,c,l,u,d,f,p,m)=>{let h=e.pxRound,g=s.dir*(s.ori==0?1:-1),_=s.ori==0?xg:Sg,v,y;g==1?(v=n,y=r):(v=r,y=n);let b=h(l(t[v],s,p,d)),x=h(u(o[v],c,m,f)),S=h(l(t[y],s,p,d)),C=h(u(a==1?c.max:c.min,c,m,f)),w=new Path2D(i);return _(w,S,C),_(w,b,C),_(w,b,x),w})}function mg(e,t,n,r,i,a){let o=null;if(e.length>0){o=new Path2D;let s=t==0?Cg:wg,c=n;for(let t=0;t<e.length;t++){let n=e[t];if(n[1]>n[0]){let e=n[0]-c;e>0&&s(o,c,r,e,r+a),c=n[1]}}let l=n+i-c;l>0&&s(o,c,r-5,l,r+a+10)}return o}function hg(e,t,n){let r=e[e.length-1];r&&r[0]==t?r[1]=n:e.push([t,n])}function gg(e,t,n,r,i,a,o){let s=[],c=e.length;for(let l=i==1?n:r;l>=n&&l<=r;l+=i)if(t[l]===null){let u=l,d=l;if(i==1)for(;++l<=r&&t[l]===null;)d=l;else for(;--l>=n&&t[l]===null;)d=l;let f=a(e[u]),p=d==u?f:a(e[d]),m=u-i;f=o<=0&&m>=0&&m<c?a(e[m]):f;let h=d+i;p=o>=0&&h>=0&&h<c?a(e[h]):p,p>=f&&s.push([f,p])}return s}function _g(e){return e==0?Gp:e==1?kp:t=>Qp(t,e)}function vg(e){let t=e==0?yg:bg,n=e==0?(e,t,n,r,i,a)=>{e.arcTo(t,n,r,i,a)}:(e,t,n,r,i,a)=>{e.arcTo(n,t,i,r,a)},r=e==0?(e,t,n,r,i)=>{e.rect(t,n,r,i)}:(e,t,n,r,i)=>{e.rect(n,t,i,r)};return(e,i,a,o,s,c=0,l=0)=>{c==0&&l==0?r(e,i,a,o,s):(c=jp(c,o/2,s/2),l=jp(l,o/2,s/2),t(e,i+c,a),n(e,i+o,a,i+o,a+s,c),n(e,i+o,a+s,i,a+s,l),n(e,i,a+s,i,a,l),n(e,i,a,i+o,a,c),e.closePath())}}var yg=(e,t,n)=>{e.moveTo(t,n)},bg=(e,t,n)=>{e.moveTo(n,t)},xg=(e,t,n)=>{e.lineTo(t,n)},Sg=(e,t,n)=>{e.lineTo(n,t)},Cg=vg(0),wg=vg(1),Tg=(e,t,n,r,i,a)=>{e.arc(t,n,r,i,a)},Eg=(e,t,n,r,i,a)=>{e.arc(n,t,r,i,a)},Dg=(e,t,n,r,i,a,o)=>{e.bezierCurveTo(t,n,r,i,a,o)},Og=(e,t,n,r,i,a,o)=>{e.bezierCurveTo(n,t,i,r,o,a)};function kg(e){return(e,t,n,r,i)=>ug(e,t,(t,a,o,s,c,l,u,d,f,p,m)=>{let{pxRound:h,points:g}=t,_,v;s.ori==0?(_=yg,v=Tg):(_=bg,v=Eg);let y=tm(g.width*Hf,3),b=(g.size-g.width)/2*Hf,x=tm(b*2,3),S=new Path2D,C=new Path2D,{left:w,top:T,width:E,height:D}=e.bbox;Cg(C,w-x,T-x,E+x*2,D+x*2);let O=e=>{if(o[e]!=null){let t=h(l(a[e],s,p,d)),n=h(u(o[e],c,m,f));_(S,t+b,n),v(S,t,n,b,0,Ep*2)}};if(i)i.forEach(O);else for(let e=n;e<=r;e++)O(e);return{stroke:y>0?S:null,fill:S,clip:C,flags:3}})}function Ag(e){return(t,n,r,i,a,o)=>{r!=i&&(a!=r&&o!=r&&e(t,n,r),a!=i&&o!=i&&e(t,n,i),e(t,n,o))}}var jg=Ag(xg),Mg=Ag(Sg);function Ng(e){let t=bp(e?.alignGaps,0);return(e,n,r,i)=>ug(e,n,(a,o,s,c,l,u,d,f,p,m,h)=>{[r,i]=up(s,r,i);let g=a.pxRound,_=e=>g(u(e,c,m,f)),v=e=>g(d(e,l,h,p)),y,b;c.ori==0?(y=xg,b=jg):(y=Sg,b=Mg);let x=c.dir*(c.ori==0?1:-1),S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:cg},C=S.stroke,w=!1;if(i-r>=m*4){let t=t=>e.posToVal(t,c.key,!0),n=null,a=null,l,u,d,f=_(o[x==1?r:i]),p=_(o[r]),m=_(o[i]),h=t(x==1?p+1:m-1);for(let e=x==1?r:i;e>=r&&e<=i;e+=x){let r=o[e],i=(x==1?r<h:r>h)?f:_(r),c=s[e];i==f?c==null?c===null&&(w=!0):(u=c,n==null?(y(C,i,v(u)),l=n=a=u):u<n?n=u:u>a&&(a=u)):(n!=null&&b(C,f,v(n),v(a),v(l),v(u)),c==null?(n=a=null,c===null&&(w=!0)):(u=c,y(C,i,v(u)),n=a=l=u),f=i,h=t(f+x))}n!=null&&n!=a&&d!=f&&b(C,f,v(n),v(a),v(l),v(u))}else for(let e=x==1?r:i;e>=r&&e<=i;e+=x){let t=s[e];t===null?w=!0:t!=null&&y(C,_(o[e]),v(t))}let[T,E]=dg(e,n);if(a.fill!=null||T!=0){let t=S.fill=new Path2D(C),s=v(a.fillTo(e,n,a.min,a.max,T)),c=_(o[r]),l=_(o[i]);x==-1&&([l,c]=[c,l]),y(t,l,s),y(t,c,s)}if(!a.spanGaps){let l=[];w&&l.push(...gg(o,s,r,i,x,_,t)),S.gaps=l=a.gaps(e,n,r,i,l),S.clip=mg(l,c.ori,f,p,m,h)}return E!=0&&(S.band=E==2?[pg(e,n,r,i,C,-1),pg(e,n,r,i,C,1)]:pg(e,n,r,i,C,E)),S})}function Pg(e){let t=bp(e.align,1),n=bp(e.ascDesc,!1),r=bp(e.alignGaps,0),i=bp(e.extend,!1);return(e,a,o,s)=>ug(e,a,(c,l,u,d,f,p,m,h,g,_,v)=>{[o,s]=up(u,o,s);let y=c.pxRound,{left:b,width:x}=e.bbox,S=e=>y(p(e,d,_,h)),C=e=>y(m(e,f,v,g)),w=d.ori==0?xg:Sg,T={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:cg},E=T.stroke,D=d.dir*(d.ori==0?1:-1),O=C(u[D==1?o:s]),k=S(l[D==1?o:s]),A=k,j=k;i&&t==-1&&(j=b,w(E,j,O)),w(E,k,O);for(let e=D==1?o:s;e>=o&&e<=s;e+=D){let n=u[e];if(n==null)continue;let r=S(l[e]),i=C(n);t==1?w(E,r,O):w(E,A,i),w(E,r,i),O=i,A=r}let M=A;i&&t==1&&(M=b+x,w(E,M,O));let[ee,N]=dg(e,a);if(c.fill!=null||ee!=0){let t=T.fill=new Path2D(E),n=C(c.fillTo(e,a,c.min,c.max,ee));w(t,M,n),w(t,j,n)}if(!c.spanGaps){let i=[];i.push(...gg(l,u,o,s,D,S,r));let f=c.width*Hf/2,p=n||t==1?f:-f,m=n||t==-1?-f:f;i.forEach(e=>{e[0]+=p,e[1]+=m}),T.gaps=i=c.gaps(e,a,o,s,i),T.clip=mg(i,d.ori,h,g,_,v)}return N!=0&&(T.band=N==2?[pg(e,a,o,s,E,-1),pg(e,a,o,s,E,1)]:pg(e,a,o,s,E,N)),T})}function Fg(e,t,n,r,i,a,o=zp){if(e.length>1){let s=null;for(let c=0,l=1/0;c<e.length;c++)if(t[c]!==void 0){if(s!=null){let t=Dp(e[c]-e[s]);t<l&&(l=t,o=Dp(n(e[c],r,i,a)-n(e[s],r,i,a)))}s=c}}return o}function Ig(e){e||=am;let t=bp(e.size,[.6,zp,1]),n=e.align||0,r=e.gap||0,i=e.radius;i=i==null?[0,0]:typeof i==`number`?[i,0]:i;let a=Up(i),o=1-t[0],s=bp(t[1],zp),c=bp(t[2],1),l=bp(e.disp,am),u=bp(e.each,e=>{}),{fill:d,stroke:f}=l;return(e,t,i,p)=>ug(e,t,(m,h,g,_,v,y,b,x,S,C,w)=>{let T=m.pxRound,E=n,D=r*Hf,O=s*Hf,k=c*Hf,A,j;_.ori==0?[A,j]=a(e,t):[j,A]=a(e,t);let M=_.dir*(_.ori==0?1:-1),ee=_.ori==0?Cg:wg,N=_.ori==0?u:(e,t,n,r,i,a,o)=>{u(e,t,n,i,r,o,a)},P=bp(e.bands,om).find(e=>e.series[0]==t),te=P==null?0:P.dir,ne=m.fillTo(e,t,m.min,m.max,te),F=T(b(ne,v,w,S)),I,L,R,z=C,B=T(m.width*Hf),re=!1,ie=null,ae=null,oe=null,se=null;d!=null&&(B==0||f!=null)&&(re=!0,ie=d.values(e,t,i,p),ae=new Map,new Set(ie).forEach(e=>{e!=null&&ae.set(e,new Path2D)}),B>0&&(oe=f.values(e,t,i,p),se=new Map,new Set(oe).forEach(e=>{e!=null&&se.set(e,new Path2D)})));let{x0:ce,size:le}=l;if(ce!=null&&le!=null){E=1,h=ce.values(e,t,i,p),ce.unit==2&&(h=h.map(t=>e.posToVal(x+t*C,_.key,!0)));let n=le.values(e,t,i,p);L=le.unit==2?n[0]*C:y(n[0],_,C,x)-y(0,_,C,x),z=Fg(h,g,y,_,C,x,z),R=z-L+D}else z=Fg(h,g,y,_,C,x,z),R=z*o+D,L=z-R;R<1&&(R=0),B>=L/2&&(B=0),R<5&&(T=Gp);let V=R>0,ue=z-R-(V?B:0);L=T(Vp(ue,k,O)),I=(E==0?L/2:E==M?0:L)-E*M*((E==0?D/2:0)+(V?B/2:0));let de={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},fe=re?null:new Path2D,H=null;if(P!=null)H=e.data[P.series[1]];else{let{y0:n,y1:r}=l;n!=null&&r!=null&&(g=r.values(e,t,i,p),H=n.values(e,t,i,p))}let pe=A*L,me=j*L;for(let n=M==1?i:p;n>=i&&n<=p;n+=M){let r=g[n];if(r==null)continue;if(H!=null){let e=H[n]??0;if(r-e==0)continue;F=b(e,v,w,S)}let i=y(_.distr!=2||l!=null?h[n]:n,_,C,x),a=b(bp(r,ne),v,w,S),o=T(i-I),s=T(Mp(a,F)),c=T(jp(a,F)),u=s-c;if(r!=null){let i=r<0?me:pe,a=r<0?pe:me;re?(B>0&&oe[n]!=null&&ee(se.get(oe[n]),o,c+Op(B/2),L,Mp(0,u-B),i,a),ie[n]!=null&&ee(ae.get(ie[n]),o,c+Op(B/2),L,Mp(0,u-B),i,a)):ee(fe,o,c+Op(B/2),L,Mp(0,u-B),i,a),N(e,t,n,o-B/2,c,L+B,u)}}return B>0?de.stroke=re?se:fe:re||(de._fill=m.width==0?m._fill:m._stroke??m._fill,de.width=0),de.fill=re?ae:fe,de})}function Lg(e,t){let n=bp(t?.alignGaps,0);return(t,r,i,a)=>ug(t,r,(o,s,c,l,u,d,f,p,m,h,g)=>{[i,a]=up(c,i,a);let _=o.pxRound,v=e=>_(d(e,l,h,p)),y=e=>_(f(e,u,g,m)),b,x,S;l.ori==0?(b=yg,S=xg,x=Dg):(b=bg,S=Sg,x=Og);let C=l.dir*(l.ori==0?1:-1),w=v(s[C==1?i:a]),T=w,E=[],D=[];for(let e=C==1?i:a;e>=i&&e<=a;e+=C)if(c[e]!=null){let t=s[e],n=v(t);E.push(T=n),D.push(y(c[e]))}let O={stroke:e(E,D,b,S,x,_),fill:null,clip:null,band:null,gaps:null,flags:cg},k=O.stroke,[A,j]=dg(t,r);if(o.fill!=null||A!=0){let e=O.fill=new Path2D(k),n=y(o.fillTo(t,r,o.min,o.max,A));S(e,T,n),S(e,w,n)}if(!o.spanGaps){let e=[];e.push(...gg(s,c,i,a,C,v,n)),O.gaps=e=o.gaps(t,r,i,a,e),O.clip=mg(e,l.ori,p,m,h,g)}return j!=0&&(O.band=j==2?[pg(t,r,i,a,k,-1),pg(t,r,i,a,k,1)]:pg(t,r,i,a,k,j)),O})}function Rg(e){return Lg(zg,e)}function zg(e,t,n,r,i,a){let o=e.length;if(o<2)return null;let s=new Path2D;if(n(s,e[0],t[0]),o==2)r(s,e[1],t[1]);else{let n=Array(o),r=Array(o-1),a=Array(o-1),c=Array(o-1);for(let n=0;n<o-1;n++)a[n]=t[n+1]-t[n],c[n]=e[n+1]-e[n],r[n]=a[n]/c[n];n[0]=r[0];for(let e=1;e<o-1;e++)r[e]===0||r[e-1]===0||r[e-1]>0!=r[e]>0?n[e]=0:(n[e]=3*(c[e-1]+c[e])/((2*c[e]+c[e-1])/r[e-1]+(c[e]+2*c[e-1])/r[e]),isFinite(n[e])||(n[e]=0));n[o-1]=r[o-2];for(let r=0;r<o-1;r++)i(s,e[r]+c[r]/3,t[r]+n[r]*c[r]/3,e[r+1]-c[r]/3,t[r+1]-n[r+1]*c[r]/3,e[r+1],t[r+1])}return s}var Bg=new Set;function Vg(){for(let e of Bg)e.syncRect(!0)}Rf&&(ip(Nf,Bf,Vg),ip(Pf,Bf,Vg,!0),ip(If,Bf,()=>{r_.pxRatio=Hf}));var Hg=Ng(),Ug=kg();function Wg(e,t,n,r){return(r?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((e,r)=>Kg(e,r,t,n))}function Gg(e,t){return e.map((e,n)=>n==0?{}:_m({},t,e))}function Kg(e,t,n,r){return _m({},t==0?n:r,e)}function qg(e,t,n){return t==null?sm:[t,n]}var Jg=qg;function Yg(e,t,n){return t==null?sm:yp(t,n,hp,!0)}function Xg(e,t,n,r){return t==null?sm:pp(t,n,e.scales[r].log,!1)}var Zg=Xg;function Qg(e,t,n,r){return t==null?sm:mp(t,n,e.scales[r].log,!1)}var $g=Qg;function e_(e,t,n,r,i){let a=Mp(Bp(e),Bp(t)),o=t-e,s=op(i/r*o,n);do{let e=n[s],t=r*e/o;if(t>=i&&a+(e<5?nm.get(e):0)<=17)return[e,t]}while(++s<n.length);return[0,0]}function t_(e){let t,n;return e=e.replace(/(\d+)px/,(e,r)=>(t=kp((n=+r)*Hf))+`px`),[e,t,n]}function n_(e){e.show&&[e.font,e.labelFont].forEach(e=>{let t=tm(e[2]*Hf,1);e[0]=e[0].replace(/[0-9.]+px/,t+`px`),e[1]=t})}function r_(e,t,n){let r={mode:bp(e.mode,1)},i=r.mode;function a(e,t,n,r){let i=t.valToPct(e);return r+n*(t.dir==-1?1-i:i)}function o(e,t,n,r){let i=t.valToPct(e);return r+n*(t.dir==-1?i:1-i)}function s(e,t,n,r){return t.ori==0?a(e,t,n,r):o(e,t,n,r)}r.valToPosH=a,r.valToPosV=o;let c=!1;r.status=0;let l=r.root=Yf(Qd);if(e.id!=null&&(l.id=e.id),Gf(l,e.class),e.title){let t=Yf(tf,l);t.textContent=e.title}let u=Jf(`canvas`),d=r.ctx=u.getContext(`2d`),f=Yf(nf,l);ip(`click`,f,e=>{e.target===m&&(en!=Xt||tn!=Zt)&&rn.click(r,e)},!0);let p=r.under=Yf(rf,f);f.appendChild(u);let m=r.over=Yf(af,f);e=gm(e);let h=+bp(e.pxAlign,1),g=_g(h);(e.plugins||[]).forEach(t=>{t.opts&&(e=t.opts(r,e)||e)});let _=e.ms||.001,v=r.series=i==1?Wg(e.series||[],Lh,ng,!1):Gg(e.series||[null],tg),y=r.axes=Wg(e.axes||[],Ph,Xh,!0),b=r.scales={},x=r.bands=e.bands||[];x.forEach(e=>{e.fill=Up(e.fill||null),e.dir=bp(e.dir,-1)});let S=i==2?v[1].facets[0].scale:v[0].scale,C={axes:K,series:Tt},w=(e.drawOrder||[`axes`,`series`]).map(e=>C[e]);function T(e){let t=e.distr==3?t=>Fp(t>0?t:e.clamp(r,t,e.min,e.max,e.key)):e.distr==4?t=>Rp(t,e.asinh):e.distr==100?t=>e.fwd(t):e=>e;return n=>{let r=t(n),{_min:i,_max:a}=e,o=a-i;return(r-i)/o}}function E(t){let n=b[t];if(n==null){let r=(e.scales||am)[t]||am;if(r.from!=null){E(r.from);let e=_m({},b[r.from],r,{key:t});e.valToPct=T(e),b[t]=e}else{n=b[t]=_m({},t==S?ig:ag,r),n.key=t;let e=n.time,a=n.range,o=cm(a);if((t!=S||i==2&&!e)&&(o&&(a[0]==null||a[1]==null)&&(a={min:a[0]==null?gp:{mode:1,hard:a[0],soft:a[0]},max:a[1]==null?gp:{mode:1,hard:a[1],soft:a[1]}},o=!1),!o&&fm(a))){let e=a;a=(t,n,r)=>n==null?sm:yp(n,r,e)}n.range=Up(a||(e?Jg:t==S?n.distr==3?Zg:n.distr==4?$g:qg:n.distr==3?Xg:n.distr==4?Qg:Yg)),n.auto=Up(!o&&n.auto),n.clamp=Up(n.clamp||rg),n._min=n._max=null,n.valToPct=T(n)}}}E(`x`),E(`y`),i==1&&v.forEach(e=>{E(e.scale)}),y.forEach(e=>{E(e.scale)});for(let t in e.scales)E(t);let D=b[S],O=D.distr,k,A;D.ori==0?(Gf(l,$d),k=a,A=o):(Gf(l,ef),k=o,A=a);let j={};for(let e in b){let t=b[e];(t.min!=null||t.max!=null)&&(j[e]={min:t.min,max:t.max},t.min=t.max=null)}let M=e.tzDate||(e=>new Date(kp(e/_))),ee=e.fmtDate||Fm,N=_==1?ih(M):sh(M),P=lh(M,ch(_==1?rh:oh,ee)),te=mh(M,fh(ph,ee)),ne=[],F=r.legend=_m({},_h,e.legend),I=r.cursor=_m({},Eh,{drag:{y:i==2}},e.cursor),L=F.show,R=I.show,z=F.markers;F.idxs=ne,z.width=Up(z.width),z.dash=Up(z.dash),z.stroke=Up(z.stroke),z.fill=Up(z.fill);let B,re,ie,ae=[],oe=[],se,ce=!1,le={};if(F.live){let e=v[1]?v[1].values:null;ce=e!=null,se=ce?e(r,1,0):{_:0};for(let e in se)le[e]=Lf}if(L){if(B=Jf(`table`,ff,l),ie=Jf(`tbody`,null,B),F.mount(r,B),ce){re=Jf(`thead`,null,B,ie);let e=Jf(`tr`,null,re);for(var V in Jf(`th`,null,e),se)Jf(`th`,_f,e).textContent=V}else Gf(B,mf),F.live&&Gf(B,pf)}let ue={show:!0},de={show:!1};function fe(e,t){if(t==0&&(ce||!F.live||i==2))return sm;let n=[],a=Jf(`tr`,hf,ie,ie.childNodes[t]);Gf(a,e.class),e.show||Gf(a,sf);let o=Jf(`th`,null,a);if(z.show){let e=Yf(gf,o);if(t>0){let n=z.width(r,t);n&&(e.style.border=n+`px `+z.dash(r,t)+` `+z.stroke(r,t)),e.style.background=z.fill(r,t)}}let s=Yf(_f,o);for(var c in e.label instanceof HTMLElement?s.appendChild(e.label):s.textContent=e.label,t>0&&(z.show||(s.style.color=e.width>0?z.stroke(r,t):z.fill(r,t)),pe(`click`,o,t=>{if(I._lock)return;Re(t);let n=v.indexOf(e);if((t.ctrlKey||t.metaKey)!=F.isolate){let e=v.some((e,t)=>t>0&&t!=n&&e.show);v.forEach((t,r)=>{r>0&&Y(r,e?r==n?ue:de:ue,!0,Yn.setSeries)})}else Y(n,{show:!e.show},!0,Yn.setSeries)},!1),Ve&&pe(Af,o,t=>{I._lock||(Re(t),Y(v.indexOf(e),vn,!0,Yn.setSeries))},!1)),se){let e=Jf(`td`,vf,a);e.textContent=`--`,n.push(e)}return[a,n]}let H=new Map;function pe(e,t,n,i=!0){let a=H.get(t)||{},o=I.bind[e](r,t,n,i);o&&(ip(e,t,a[e]=o),H.set(t,a))}function me(e,t,n){let r=H.get(t)||{};for(let n in r)(e==null||n==e)&&(ap(n,t,r[n]),delete r[n]);e??H.delete(t)}let U=0,he=0,W=0,G=0,ge=0,_e=0,ve=ge,ye=_e,be=W,xe=G,Se=0,Ce=0,we=0,Te=0;r.bbox={};let Ee=!1,De=!1,Oe=!1,ke=!1,Ae=!1,je=!1;function Me(e,t,n){(n||e!=r.width||t!=r.height)&&Ne(e,t),q(!1),Oe=!0,De=!0,Bt()}function Ne(e,t){r.width=U=W=e,r.height=he=G=t,ge=_e=0,Ie(),Le();let n=r.bbox;Se=n.left=Qp(ge*Hf,.5),Ce=n.top=Qp(_e*Hf,.5),we=n.width=Qp(W*Hf,.5),Te=n.height=Qp(G*Hf,.5)}function Pe(){let e=!1,t=0;for(;!e;){t++;let n=Pt(t),i=Ft(t);e=t==3||n&&i,e||(Ne(r.width,r.height),De=!0)}}function Fe({width:e,height:t}){Me(e,t)}r.setSize=Fe;function Ie(){let e=!1,t=!1,n=!1,r=!1;y.forEach((i,a)=>{if(i.show&&i._show){let{side:a,_size:o}=i,s=a%2,c=o+(i.label==null?0:i.labelSize);c>0&&(s?(W-=c,a==3?(ge+=c,r=!0):n=!0):(G-=c,a==0?(_e+=c,e=!0):t=!0))}}),Xe[0]=e,Xe[1]=n,Xe[2]=t,Xe[3]=r,W-=et[1]+et[3],ge+=et[3],G-=et[2]+et[0],_e+=et[0]}function Le(){let e=ge+W,t=_e+G,n=ge,r=_e;function i(i,a){switch(i){case 1:return e+=a,e-a;case 2:return t+=a,t-a;case 3:return n-=a,n+a;case 0:return r-=a,r+a}}y.forEach((e,t)=>{if(e.show&&e._show){let t=e.side;e._pos=i(t,e._size),e.label!=null&&(e._lpos=i(t,e.labelSize))}})}if(I.dataIdx==null){let e=I.hover,n=e.skip=new Set(e.skip??[]);n.add(void 0);let r=e.prox=Up(e.prox),i=e.bias??=0;I.dataIdx=(e,a,o,s)=>{if(a==0)return o;let c=o,l=r(e,a,o,s)??zp,u=l>=0&&l<zp,d=D.ori==0?W:G,f=I.left,p=t[0],m=t[a];if(n.has(m[o])){c=null;let e=null,t=null,r;if(i==0||i==-1)for(r=o;e==null&&r-->0;)n.has(m[r])||(e=r);if(i==0||i==1)for(r=o;t==null&&r++<m.length;)n.has(m[r])||(t=r);if(e!=null||t!=null){if(u){let n=e==null?-1/0:k(p[e],D,d,0),r=t==null?1/0:k(p[t],D,d,0),i=f-n,a=r-f;i<=a?i<=l&&(c=e):a<=l&&(c=t)}else c=t==null?e:e==null?t:o-e<=t-o?e:t}}else u&&Dp(f-k(p[o],D,d,0))>l&&(c=null);return c}}let Re=e=>{I.event=e};I.idxs=ne,I._lock=!1;let ze=I.points;ze.show=Up(ze.show),ze.size=Up(ze.size),ze.stroke=Up(ze.stroke),ze.width=Up(ze.width),ze.fill=Up(ze.fill);let Be=r.focus=_m({},e.focus||{alpha:.3},I.focus),Ve=Be.prox>=0,He=Ve&&ze.one,Ue=[],We=[],Ge=[];function Ke(e,t){let n=ze.show(r,t);if(n instanceof HTMLElement)return Gf(n,df),Gf(n,e.class),Zf(n,-10,-10,W,G),m.insertBefore(n,Ue[t]),n}function qe(e,t){if(i==1||t>0){let t=i==1&&b[e.scale].time,n=e.value;e.value=t?dm(n)?mh(M,fh(n,ee)):n||te:n||Yh,e.label=e.label||(t?Ih:Fh)}if(He||t>0){e.width=e.width==null?1:e.width,e.paths=e.paths||Hg||qp,e.fillTo=Up(e.fillTo||fg),e.pxAlign=+bp(e.pxAlign,h),e.pxRound=_g(e.pxAlign),e.stroke=Up(e.stroke||null),e.fill=Up(e.fill||null),e._stroke=e._fill=e._paths=e._focus=null;let t=Zh(Mp(1,e.width),1),n=e.points=_m({},{size:t,width:Mp(1,t*.2),stroke:e.stroke,space:t*2,paths:Ug,_stroke:null,_fill:null},e.points);n.show=Up(n.show),n.filter=Up(n.filter),n.fill=Up(n.fill),n.stroke=Up(n.stroke),n.paths=Up(n.paths),n.pxAlign=e.pxAlign}if(L){let n=fe(e,t);ae.splice(t,0,n[0]),oe.splice(t,0,n[1]),F.values.push(null)}if(R){ne.splice(t,0,null);let n=null;He?t==0&&(n=Ke(e,t)):t>0&&(n=Ke(e,t)),Ue.splice(t,0,n),We.splice(t,0,0),Ge.splice(t,0,0)}qn(`addSeries`,t)}function Je(e,t){t??=v.length,e=i==1?Kg(e,t,Lh,ng):Kg(e,t,{},tg),v.splice(t,0,e),qe(v[t],t)}r.addSeries=Je;function Ye(e){if(v.splice(e,1),L){F.values.splice(e,1),oe.splice(e,1);let t=ae.splice(e,1)[0];me(null,t.firstChild),t.remove()}R&&(ne.splice(e,1),Ue.splice(e,1)[0].remove(),We.splice(e,1),Ge.splice(e,1)),qn(`delSeries`,e)}r.delSeries=Ye;let Xe=[!1,!1,!1,!1];function Ze(e,t){if(e._show=e.show,e.show){let n=e.side%2,i=b[e.scale];i??=(e.scale=n?v[1].scale:S,b[e.scale]);let a=i.time;e.size=Up(e.size),e.space=Up(e.space),e.rotate=Up(e.rotate),cm(e.incrs)&&e.incrs.forEach(e=>{!nm.has(e)&&nm.set(e,rm(e))}),e.incrs=Up(e.incrs||(i.distr==2?Hm:a?_==1?nh:ah:Um)),e.splits=Up(e.splits||(a&&i.distr==1?N:i.distr==3?Bh:i.distr==4?Vh:zh)),e.stroke=Up(e.stroke),e.grid.stroke=Up(e.grid.stroke),e.ticks.stroke=Up(e.ticks.stroke),e.border.stroke=Up(e.border.stroke);let o=e.values;e.values=cm(o)&&!cm(o[0])?Up(o):a?cm(o)?lh(M,ch(o,ee)):dm(o)?uh(M,o):o||P:o||Rh,e.filter=Up(e.filter||(i.distr>=3&&i.log==10?qh:i.distr==3&&i.log==2?Jh:Kp)),e.font=t_(e.font),e.labelFont=t_(e.labelFont),e._size=e.size(r,null,t,0),e._space=e._rotate=e._incrs=e._found=e._splits=e._values=null,e._size>0&&(Xe[t]=!0,e._el=Yf(of,f))}}function Qe(e,t,n,r){let[i,a,o,s]=n,c=t%2,l=0;return c==0&&(s||a)&&(l=t==0&&!i||t==2&&!o?kp(Ph.size/3):0),c==1&&(i||o)&&(l=t==1&&!a||t==3&&!s?kp(Xh.size/2):0),l}let $e=r.padding=(e.padding||[Qe,Qe,Qe,Qe]).map(e=>Up(bp(e,Qe))),et=r._padding=$e.map((e,t)=>e(r,t,Xe,0)),tt,nt=null,rt=null,it=i==1?v[0].idxs:null,at=null,ot=!1;function st(e,n){if(t=e??[],r.data=r._data=t,i==2){tt=0;for(let e=1;e<v.length;e++)tt+=t[e][0].length}else{t.length==0&&(r.data=r._data=t=[[]]),at=t[0],tt=at.length;let e=t;if(O==2){e=t.slice();let n=e[0]=Array(tt);for(let e=0;e<tt;e++)n[e]=e}r._data=t=e}if(q(!0),qn(`setData`),O==2&&(Oe=!0),n!==!1){let e=D;e.auto(r,ot)?ct():un(S,e.min,e.max),ke||=I.left>=0,je=!0,Bt()}}r.setData=st;function ct(){ot=!0;let e,n;i==1&&(tt>0?(nt=it[0]=0,rt=it[1]=tt-1,e=t[0][nt],n=t[0][rt],O==2?(e=nt,n=rt):e==n&&(O==3?[e,n]=pp(e,e,D.log,!1):O==4?[e,n]=mp(e,e,D.log,!1):D.time?n=e+kp(86400/_):[e,n]=yp(e,n,hp,!0))):(nt=it[0]=e=null,rt=it[1]=n=null)),un(S,e,n)}let lt,ut,dt,ft,pt,mt,ht,gt,_t,vt;function yt(e,t,n,r,i,a){e??=Ef,n??=om,r??=`butt`,i??=Ef,a??=`round`,e!=lt&&(d.strokeStyle=lt=e),i!=ut&&(d.fillStyle=ut=i),t!=dt&&(d.lineWidth=dt=t),a!=pt&&(d.lineJoin=pt=a),r!=mt&&(d.lineCap=mt=r),n!=ft&&d.setLineDash(ft=n)}function bt(e,t,n,r){t!=ut&&(d.fillStyle=ut=t),e!=ht&&(d.font=ht=e),n!=gt&&(d.textAlign=gt=n),r!=_t&&(d.textBaseline=_t=r)}function xt(e,t,n,i,a=0){if(i.length>0&&e.auto(r,ot)&&(t==null||t.min==null)){let t=bp(nt,0),r=bp(rt,i.length-1),o=n.min==null?fp(i,t,r,a,e.distr==3):[n.min,n.max];e.min=jp(e.min,n.min=o[0]),e.max=Mp(e.max,n.max=o[1])}}let St={min:null,max:null};function Ct(){for(let e in b){let t=b[e];j[e]==null&&(t.min==null||j[S]!=null&&t.auto(r,ot))&&(j[e]=St)}for(let e in b){let t=b[e];j[e]==null&&t.from!=null&&j[t.from]!=null&&(j[e]=St)}j[S]!=null&&q(!0);let e={};for(let t in j){let n=j[t];if(n!=null){let a=e[t]=gm(b[t],pm);if(n.min!=null)_m(a,n);else if(t!=S||i==2){if(tt==0&&a.from==null){let e=a.range(r,null,null,t);a.min=e[0],a.max=e[1]}else a.min=zp,a.max=-1/0}}}if(tt>0){v.forEach((n,a)=>{if(i==1){let i=n.scale,o=j[i];if(o==null)return;let s=e[i];if(a==0){let e=s.range(r,s.min,s.max,i);s.min=e[0],s.max=e[1],nt=op(s.min,t[0]),rt=op(s.max,t[0]),rt-nt>1&&(t[0][nt]<s.min&&nt++,t[0][rt]>s.max&&rt--),n.min=at[nt],n.max=at[rt]}else n.show&&n.auto&&xt(s,o,n,t[a],n.sorted);n.idxs[0]=nt,n.idxs[1]=rt}else if(a>0&&n.show&&n.auto){let[r,i]=n.facets,o=r.scale,s=i.scale,[c,l]=t[a],u=e[o],d=e[s];u!=null&&xt(u,j[o],r,c,r.sorted),d!=null&&xt(d,j[s],i,l,i.sorted),n.min=i.min,n.max=i.max}});for(let t in e){let n=e[t],i=j[t];if(n.from==null&&(i==null||i.min==null)){let e=n.range(r,n.min==zp?null:n.min,n.max==-1/0?null:n.max,t);n.min=e[0],n.max=e[1]}}}for(let t in e){let n=e[t];if(n.from!=null){let i=e[n.from];if(i.min==null)n.min=n.max=null;else{let e=n.range(r,i.min,i.max,t);n.min=e[0],n.max=e[1]}}}let n={},a=!1;for(let t in e){let r=e[t],i=b[t];if(i.min!=r.min||i.max!=r.max){i.min=r.min,i.max=r.max;let e=i.distr;i._min=e==3?Fp(i.min):e==4?Rp(i.min,i.asinh):e==100?i.fwd(i.min):i.min,i._max=e==3?Fp(i.max):e==4?Rp(i.max,i.asinh):e==100?i.fwd(i.max):i.max,n[t]=a=!0}}if(a){v.forEach((e,t)=>{i==2?t>0&&n.y&&(e._paths=null):n[e.scale]&&(e._paths=null)});for(let e in n)Oe=!0,qn(`setScale`,e);R&&I.left>=0&&(ke=je=!0)}for(let e in j)j[e]=null}function wt(e){let t=Vp(nt-1,0,tt-1),n=Vp(rt+1,0,tt-1);for(;e[t]==null&&t>0;)t--;for(;e[n]==null&&n<tt-1;)n++;return[t,n]}function Tt(){if(tt>0){let e=v.some(e=>e._focus)&&vt!=Be.alpha;e&&(d.globalAlpha=vt=Be.alpha),v.forEach((e,n)=>{if(n>0&&e.show&&(Et(n,!1),Et(n,!0),e._paths==null)){let a=vt;vt!=e.alpha&&(d.globalAlpha=vt=e.alpha);let o=i==2?[0,t[n][0].length-1]:wt(t[n]);e._paths=e.paths(r,n,o[0],o[1]),vt!=a&&(d.globalAlpha=vt=a)}}),v.forEach((e,t)=>{if(t>0&&e.show){let n=vt;vt!=e.alpha&&(d.globalAlpha=vt=e.alpha),e._paths!=null&&Dt(t,!1);{let n=e._paths==null?null:e._paths.gaps,i=e.points.show(r,t,nt,rt,n),a=e.points.filter(r,t,i,n);(i||a)&&(e.points._paths=e.points.paths(r,t,nt,rt,a),Dt(t,!0))}vt!=n&&(d.globalAlpha=vt=n),qn(`drawSeries`,t)}}),e&&(d.globalAlpha=vt=1)}}function Et(e,t){let n=t?v[e].points:v[e];n._stroke=n.stroke(r,e),n._fill=n.fill(r,e)}function Dt(e,t){let n=t?v[e].points:v[e],{stroke:r,fill:i,clip:a,flags:o,_stroke:s=n._stroke,_fill:c=n._fill,_width:l=n.width}=n._paths;l=tm(l*Hf,3);let u=null,f=l%2/2;t&&c==null&&(c=l>0?`#fff`:s);let p=n.pxAlign==1&&f>0;if(p&&d.translate(f,f),!t){let e=Se-l/2,t=Ce-l/2,n=we+l,r=Te+l;u=new Path2D,u.rect(e,t,n,r)}t?kt(s,l,n.dash,n.cap,c,r,i,o,a):Ot(e,s,l,n.dash,n.cap,c,r,i,o,u,a),p&&d.translate(-f,-f)}function Ot(e,n,i,a,o,s,c,l,u,d,f){let p=!1;u!=0&&x.forEach((m,h)=>{if(m.series[0]==e){let e=v[m.series[1]],g=t[m.series[1]],_=(e._paths||am).band;cm(_)&&(_=m.dir==1?_[0]:_[1]);let y,b=null;e.show&&_&&xp(g,nt,rt)?(b=m.fill(r,h)||s,y=e._paths.clip):_=null,kt(n,i,a,o,b,c,l,u,d,f,y,_),p=!0}}),p||kt(n,i,a,o,s,c,l,u,d,f)}function kt(e,t,n,r,i,a,o,s,c,l,u,f){yt(e,t,n,r,i),(c||l||f)&&(d.save(),c&&d.clip(c),l&&d.clip(l)),f?(s&3)==3?(d.clip(f),u&&d.clip(u),jt(i,o),At(e,a,t)):s&lg?(jt(i,o),d.clip(f),At(e,a,t)):s&cg&&(d.save(),d.clip(f),u&&d.clip(u),jt(i,o),d.restore(),At(e,a,t)):(jt(i,o),At(e,a,t)),(c||l||f)&&d.restore()}function At(e,t,n){n>0&&(t instanceof Map?t.forEach((e,t)=>{d.strokeStyle=lt=t,d.stroke(e)}):t!=null&&e&&d.stroke(t))}function jt(e,t){t instanceof Map?t.forEach((e,t)=>{d.fillStyle=ut=t,d.fill(e)}):t!=null&&e&&d.fill(t)}function Mt(e,t,n,i){let a=y[e],o;if(i<=0)o=[0,0];else{let s=a._space=a.space(r,e,t,n,i);o=e_(t,n,a._incrs=a.incrs(r,e,t,n,i,s),i,s)}return a._found=o}function Nt(e,t,n,r,i,a,o,s,c,l){let u=o%2/2;h==1&&d.translate(u,u),yt(s,o,c,l,s),d.beginPath();let f,p,m,g,_=i+(r==0||r==3?-a:a);n==0?(p=i,g=_):(f=i,m=_);for(let r=0;r<e.length;r++)t[r]!=null&&(n==0?f=m=e[r]:p=g=e[r],d.moveTo(f,p),d.lineTo(m,g));d.stroke(),h==1&&d.translate(-u,-u)}function Pt(e){let t=!0;return y.forEach((n,i)=>{if(!n.show)return;let a=b[n.scale];if(a.min==null){n._show&&(t=!1,n._show=!1,q(!1));return}n._show||(t=!1,n._show=!0,q(!1));let o=n.side,s=o%2,{min:c,max:l}=a,[u,d]=Mt(i,c,l,s==0?W:G);if(d==0)return;let f=a.distr==2,p=n._splits=n.splits(r,i,c,l,u,d,f),m=a.distr==2?p.map(e=>at[e]):p,h=a.distr==2?at[p[1]]-at[p[0]]:u,g=n._values=n.values(r,n.filter(r,m,i,d,h),i,d,h);n._rotate=o==2?n.rotate(r,g,i,d):0;let _=n._size;n._size=Ap(n.size(r,g,i,e)),_!=null&&n._size!=_&&(t=!1)}),t}function Ft(e){let t=!0;return $e.forEach((n,i)=>{let a=n(r,i,Xe,e);a!=et[i]&&(t=!1),et[i]=a}),t}function K(){for(let e=0;e<y.length;e++){let t=y[e];if(!t.show||!t._show)continue;let n=t.side,i=n%2,a,o,c=t.stroke(r,e),l=n==0||n==3?-1:1,[u,f]=t._found;if(t.label!=null){let s=t.labelGap*l,p=kp((t._lpos+s)*Hf);bt(t.labelFont[0],c,`center`,n==2?xf:Sf),d.save(),i==1?(a=o=0,d.translate(p,kp(Ce+Te/2)),d.rotate((n==3?-Ep:Ep)/2)):(a=kp(Se+we/2),o=p);let m=Hp(t.label)?t.label(r,e,u,f):t.label;d.fillText(m,a,o),d.restore()}if(f==0)continue;let p=b[t.scale],m=i==0?we:Te,h=i==0?Se:Ce,_=t._splits,v=p.distr==2?_.map(e=>at[e]):_,x=p.distr==2?at[_[1]]-at[_[0]]:u,S=t.ticks,C=t.border,w=S.show?S.size:0,T=kp(w*Hf),E=kp((t.alignTo==2?t._size-w-t.gap:t.gap)*Hf),D=t._rotate*-Ep/180,O=g(t._pos*Hf),k=O+(T+E)*l;o=i==0?k:0,a=i==1?k:0;let A=t.font[0];bt(A,c,t.align==1?Cf:t.align==2?wf:D>0?Cf:D<0?wf:i==0?`center`:n==3?wf:Cf,D||i==1?`middle`:n==2?xf:Sf);let j=t.font[1]*t.lineGap,M=_.map(e=>g(s(e,p,m,h))),ee=t._values;for(let e=0;e<ee.length;e++){let t=ee[e];if(t!=null){i==0?a=M[e]:o=M[e],t=``+t;let n=t.indexOf(`
`)==-1?[t]:t.split(/\n/gm);for(let e=0;e<n.length;e++){let t=n[e];D?(d.save(),d.translate(a,o+e*j),d.rotate(D),d.fillText(t,0,0),d.restore()):d.fillText(t,a,o+e*j)}}}S.show&&Nt(M,S.filter(r,v,e,f,x),i,n,O,T,tm(S.width*Hf,3),S.stroke(r,e),S.dash,S.cap);let N=t.grid;N.show&&Nt(M,N.filter(r,v,e,f,x),i,i==0?2:1,i==0?Ce:Se,i==0?Te:we,tm(N.width*Hf,3),N.stroke(r,e),N.dash,N.cap),C.show&&Nt([O],[1],+(i==0),i==0?1:2,i==1?Ce:Se,i==1?Te:we,tm(C.width*Hf,3),C.stroke(r,e),C.dash,C.cap)}qn(`drawAxes`)}function q(e){v.forEach((t,n)=>{n>0&&(t._paths=null,e&&(i==1?(t.min=null,t.max=null):t.facets.forEach(e=>{e.min=null,e.max=null})))})}let It=!1,Lt=!1,Rt=[];function zt(){Lt=!1;for(let e=0;e<Rt.length;e++)qn(...Rt[e]);Rt.length=0}function Bt(){It||=(Cm(Ht),!0)}function Vt(e,t=!1){It=!0,Lt=t,e(r),Ht(),t&&Rt.length>0&&queueMicrotask(zt)}r.batch=Vt;function Ht(){if(Ee&&=(Ct(),!1),Oe&&=(Pe(),!1),De){if(qf(p,Cf,ge),qf(p,xf,_e),qf(p,yf,W),qf(p,bf,G),qf(m,Cf,ge),qf(m,xf,_e),qf(m,yf,W),qf(m,bf,G),qf(f,yf,U),qf(f,bf,he),u.width=kp(U*Hf),u.height=kp(he*Hf),y.forEach(({_el:e,_show:t,_size:n,_pos:r,side:i})=>{if(e!=null){if(t){let t=i===3||i===0?n:0,a=i%2==1;qf(e,a?`left`:`top`,r-t),qf(e,a?`width`:`height`,n),qf(e,a?`top`:`left`,a?_e:ge),qf(e,a?`height`:`width`,a?G:W),Kf(e,sf)}else Gf(e,sf)}}),lt=ut=dt=pt=mt=ht=gt=_t=ft=null,vt=1,jn(!0),ge!=ve||_e!=ye||W!=be||G!=xe){q(!1);let e=W/be,t=G/xe;if(R&&!ke&&I.left>=0){I.left*=e,I.top*=t,Kt&&Zf(Kt,kp(I.left),0,W,G),qt&&Zf(qt,0,kp(I.top),W,G);for(let n=0;n<Ue.length;n++){let r=Ue[n];r!=null&&(We[n]*=e,Ge[n]*=t,Zf(r,Ap(We[n]),Ap(Ge[n]),W,G))}}if(on.show&&!Ae&&on.left>=0&&on.width>0){on.left*=e,on.width*=e,on.top*=t,on.height*=t;for(let e in Pn)qf(sn,e,on[e])}ve=ge,ye=_e,be=W,xe=G}qn(`setSize`),De=!1}U>0&&he>0&&(d.clearRect(0,0,u.width,u.height),qn(`drawClear`),w.forEach(e=>e()),qn(`draw`)),on.show&&Ae&&(cn(on),Ae=!1),R&&ke&&(kn(null,!0,!1),ke=!1),F.show&&F.live&&je&&(Dn(),je=!1),c||(c=!0,r.status=1,qn(`ready`)),ot=!1,It=!1}r.redraw=(e,t)=>{Oe=t||!1,e===!1?Bt():un(S,D.min,D.max)};function Ut(e,n){let i=b[e];if(i.from==null){if(tt==0){let t=i.range(r,n.min,n.max,e);n.min=t[0],n.max=t[1]}if(n.min>n.max){let e=n.min;n.min=n.max,n.max=e}if(tt>1&&n.min!=null&&n.max!=null&&n.max-n.min<1e-16)return;e==S&&i.distr==2&&tt>0&&(n.min=op(n.min,t[0]),n.max=op(n.max,t[0]),n.min==n.max&&n.max++),j[e]=n,Ee=!0,Bt()}}r.setScale=Ut;let Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn=!1,rn=I.drag,an=rn.x,J=rn.y;R&&(I.x&&(Wt=Yf(lf,m)),I.y&&(Gt=Yf(uf,m)),D.ori==0?(Kt=Wt,qt=Gt):(Kt=Gt,qt=Wt),en=I.left,tn=I.top);let on=r.select=_m({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),sn=on.show?Yf(cf,on.over?m:p):null;function cn(e,t){if(on.show){for(let t in e)on[t]=e[t],t in Pn&&qf(sn,t,e[t]);t!==!1&&qn(`setSelect`)}}r.setSelect=cn;function ln(e){if(v[e].show)L&&Kf(ae[e],sf);else if(L&&Gf(ae[e],sf),R){let t=He?Ue[0]:Ue[e];t!=null&&Zf(t,-10,-10,W,G)}}function un(e,t,n){Ut(e,{min:t,max:n})}function Y(e,t,n,a){t.focus!=null&&yn(e),t.show!=null&&v.forEach((n,r)=>{r>0&&(e==r||e==null)&&(n.show=t.show,ln(r),i==2?(un(n.facets[0].scale,null,null),un(n.facets[1].scale,null,null)):un(n.scale,null,null),Bt())}),n!==!1&&qn(`setSeries`,e,t),a&&Qn(`setSeries`,r,e,t)}r.setSeries=Y;function dn(e,t){_m(x[e],t)}function fn(e,t){e.fill=Up(e.fill||null),e.dir=bp(e.dir,-1),t??=x.length,x.splice(t,0,e)}function pn(e){e==null?x.length=0:x.splice(e,1)}r.addBand=fn,r.setBand=dn,r.delBand=pn;function mn(e,t){v[e].alpha=t,R&&Ue[e]!=null&&(Ue[e].style.opacity=t),L&&ae[e]&&(ae[e].style.opacity=t)}let hn,gn,_n,vn={focus:!0};function yn(e){if(e!=_n){let t=e==null,n=Be.alpha!=1;v.forEach((r,a)=>{if(i==1||a>0){let i=t||a==0||a==e;r._focus=t?null:i,n&&mn(a,i?1:Be.alpha)}}),_n=e,n&&Bt()}}L&&Ve&&pe(jf,B,e=>{I._lock||(Re(e),_n!=null&&Y(null,vn,!0,Yn.setSeries))});function bn(e,t,n){let r=b[t];n&&(e=e/Hf-(r.ori==1?_e:ge));let i=W;r.ori==1&&(i=G,e=i-e),r.dir==-1&&(e=i-e);let a=r._min,o=r._max,s=e/i,c=a+(o-a)*s,l=r.distr;return l==3?Np(10,c):l==4?Lp(c,r.asinh):l==100?r.bwd(c):c}function xn(e,n){return op(bn(e,S,n),t[0],nt,rt)}r.valToIdx=e=>op(e,t[0]),r.posToIdx=xn,r.posToVal=bn,r.valToPos=(e,t,n)=>b[t].ori==0?a(e,b[t],n?we:W,n?Se:0):o(e,b[t],n?Te:G,n?Ce:0),r.setCursor=(e,t,n)=>{en=e.left,tn=e.top,kn(null,t,n)};function Sn(e,t){qf(sn,Cf,on.left=e),qf(sn,yf,on.width=t)}function Cn(e,t){qf(sn,xf,on.top=e),qf(sn,bf,on.height=t)}let wn=D.ori==0?Sn:Cn,Tn=D.ori==1?Sn:Cn;function En(){if(L&&F.live)for(let e=+(i==2);e<v.length;e++){if(e==0&&ce)continue;let t=F.values[e],n=0;for(let r in t)oe[e][n++].firstChild.nodeValue=t[r]}}function Dn(e,t){if(e!=null&&(e.idxs?e.idxs.forEach((e,t)=>{ne[t]=e}):um(e.idx)||ne.fill(e.idx),F.idx=ne[0]),L&&F.live){for(let e=0;e<v.length;e++)(e>0||i==1&&!ce)&&On(e,ne[e]);En()}je=!1,t!==!1&&qn(`setLegend`)}r.setLegend=Dn;function On(e,n){let i=v[e],a=e==0&&O==2?at:t[e],o;ce?o=i.values(r,e,n)??le:(o=i.value(r,n==null?null:a[n],e,n),o=o==null?le:{_:o}),F.values[e]=o}function kn(e,n,a){Qt=en,$t=tn,[en,tn]=I.move(r,en,tn),I.left=en,I.top=tn,R&&(Kt&&Zf(Kt,kp(en),0,W,G),qt&&Zf(qt,0,kp(tn),W,G));let o,s=nt>rt;hn=zp,gn=null;let c=D.ori==0?W:G,l=D.ori==1?W:G;if(en<0||tt==0||s){o=I.idx=null;for(let e=0;e<v.length;e++){let t=Ue[e];t!=null&&Zf(t,-10,-10,W,G)}Ve&&Y(null,vn,!0,e==null&&Yn.setSeries),F.live&&(ne.fill(o),je=!0)}else{let e,n,a;i==1&&(e=D.ori==0?en:tn,n=bn(e,S),o=I.idx=op(n,t[0],nt,rt),a=k(t[0][o],D,c,0));let s=-10,u=-10,d=0,f=0,p=!0,m=``,h=``;for(let e=+(i==2);e<v.length;e++){let g=v[e],_=ne[e],y=_==null?null:i==1?t[e][_]:t[e][1][_],x=I.dataIdx(r,e,o,n),S=x==null?null:i==1?t[e][x]:t[e][1][x];if(je=je||S!=y||x!=_,ne[e]=x,e>0&&g.show){let n=x==null?-10:x==o?a:k(i==1?t[0][x]:t[e][0][x],D,c,0),_=S==null?-10:A(S,i==1?b[g.scale]:b[g.facets[1].scale],l,0);if(Ve&&S!=null){let t=D.ori==1?en:tn,n=Dp(Be.dist(r,e,x,_,t));if(n<hn){let r=Be.bias;if(r!=0){let i=bn(t,g.scale),a=S>=0?1:-1,o=i>=0?1:-1;o==a&&(o==1?r==1?S>=i:S<=i:r==1?S<=i:S>=i)&&(hn=n,gn=e)}else hn=n,gn=e}}if(je||He){let t,i;D.ori==0?(t=n,i=_):(t=_,i=n);let a,o,c,l,g,v,y=!0,b=ze.bbox;if(b!=null){y=!1;let t=b(r,e);c=t.left,l=t.top,a=t.width,o=t.height}else c=t,l=i,a=o=ze.size(r,e);if(v=ze.fill(r,e),g=ze.stroke(r,e),He)e==gn&&hn<=Be.prox&&(s=c,u=l,d=a,f=o,p=y,m=v,h=g);else{let t=Ue[e];t!=null&&(We[e]=c,Ge[e]=l,tp(t,a,o,y),$f(t,v,g),Zf(t,Ap(c),Ap(l),W,G))}}}}if(He){let e=Be.prox;if(je||(_n==null?hn<=e:hn>e||gn!=_n)){let e=Ue[0];e!=null&&(We[0]=s,Ge[0]=u,tp(e,d,f,p),$f(e,m,h),Zf(e,Ap(s),Ap(u),W,G))}}}if(on.show&&nn){if(e!=null){let[t,n]=Yn.scales,[r,i]=Yn.match,[a,o]=e.cursor.sync.scales,s=e.cursor.drag;if(an=s._x,J=s._y,an||J){let{left:s,top:u,width:d,height:f}=e.select,p=e.scales[a].ori,m=e.posToVal,h,g,_,v,y,x=t!=null&&r(t,a),S=n!=null&&i(n,o);x&&an?(p==0?(h=s,g=d):(h=u,g=f),_=b[t],v=k(m(h,a),_,c,0),y=k(m(h+g,a),_,c,0),wn(jp(v,y),Dp(y-v))):wn(0,c),S&&J?(p==1?(h=s,g=d):(h=u,g=f),_=b[n],v=A(m(h,o),_,l,0),y=A(m(h+g,o),_,l,0),Tn(jp(v,y),Dp(y-v))):Tn(0,l)}else Fn()}else{let e=Dp(Qt-Jt),t=Dp($t-Yt);if(D.ori==1){let n=e;e=t,t=n}an=rn.x&&e>=rn.dist,J=rn.y&&t>=rn.dist;let n=rn.uni;n==null?rn.x&&rn.y&&(an||J)&&(an=J=!0):an&&J&&(an=e>=n,J=t>=n,!an&&!J&&(t>e?J=!0:an=!0));let r,i;an&&(D.ori==0?(r=Xt,i=en):(r=Zt,i=tn),wn(jp(r,i),Dp(i-r)),J||Tn(0,l)),J&&(D.ori==1?(r=Xt,i=en):(r=Zt,i=tn),Tn(jp(r,i),Dp(i-r)),an||wn(0,c)),!an&&!J&&(wn(0,0),Tn(0,0))}}if(rn._x=an,rn._y=J,e==null){if(a){if(Xn!=null){let[e,t]=Yn.scales;Yn.values[0]=e==null?null:bn(D.ori==0?en:tn,e),Yn.values[1]=t==null?null:bn(D.ori==1?en:tn,t)}Qn(Df,r,en,tn,W,G,o)}if(Ve){let e=a&&Yn.setSeries,t=Be.prox;_n==null?hn<=t&&Y(gn,vn,!0,e):hn>t?Y(null,vn,!0,e):gn!=_n&&Y(gn,vn,!0,e)}}je&&(F.idx=o,Dn()),n!==!1&&qn(`setCursor`)}let An=null;Object.defineProperty(r,"rect",{get(){return An??jn(!1),An}});function jn(e=!1){e?An=null:(An=m.getBoundingClientRect(),qn(`syncRect`,An))}function Mn(e,t,n,r,i,a,o){I._lock||nn&&e!=null&&e.movementX==0&&e.movementY==0||(Nn(e,t,n,r,i,a,o,!1,e!=null),e==null?kn(t,!0,!1):kn(null,!0,!0))}function Nn(e,t,n,i,a,o,c,l,u){if(An??jn(!1),Re(e),e!=null)n=e.clientX-An.left,i=e.clientY-An.top;else{if(n<0||i<0){en=-10,tn=-10;return}let[e,r]=Yn.scales,c=t.cursor.sync,[l,u]=c.values,[d,f]=c.scales,[p,m]=Yn.match,h=t.axes[0].side%2==1,g=D.ori==0?W:G,_=D.ori==1?W:G,v=h?o:a,y=h?a:o,x=h?i:n,S=h?n:i;if(n=d==null?x/v*g:p(e,d)?s(l,b[e],g,0):-10,i=f==null?S/y*_:m(r,f)?s(u,b[r],_,0):-10,D.ori==1){let e=n;n=i,i=e}}u&&(t==null||t.cursor.event.type==Df)&&((n<=1||n>=W-1)&&(n=Qp(n,W)),(i<=1||i>=G-1)&&(i=Qp(i,G))),l?(Jt=n,Yt=i,[Xt,Zt]=I.move(r,n,i)):(en=n,tn=i)}let Pn={width:0,height:0,left:0,top:0};function Fn(){cn(Pn,!1)}let In,Ln,Rn,zn;function Bn(e,t,n,i,a,o,s){nn=!0,an=J=rn._x=rn._y=!1,Nn(e,t,n,i,a,o,s,!0,!1),e!=null&&(pe(kf,zf,Vn,!1),Qn(Of,r,Xt,Zt,W,G,null));let{left:c,top:l,width:u,height:d}=on;In=c,Ln=l,Rn=u,zn=d}function Vn(e,t,n,i,a,o,s){nn=rn._x=rn._y=!1,Nn(e,t,n,i,a,o,s,!1,!0);let{left:c,top:l,width:u,height:d}=on,f=u>0||d>0,p=In!=c||Ln!=l||Rn!=u||zn!=d;if(f&&p&&cn(on),rn.setScale&&f&&p){let e=c,t=u,n=l,r=d;if(D.ori==1&&(e=l,t=d,n=c,r=u),an&&un(S,bn(e,S),bn(e+t,S)),J)for(let e in b){let t=b[e];e!=S&&t.from==null&&t.min!=zp&&un(e,bn(n+r,e),bn(n,e))}Fn()}else I.lock&&(I._lock=!I._lock,kn(t,!0,e!=null));e!=null&&(me(kf,zf),Qn(kf,r,en,tn,W,G,null))}function Hn(e,t,n,r,i,a,o){if(I._lock)return;Re(e);let s=nn;if(nn){let e=!0,t=!0,n,r;D.ori==0?(n=an,r=J):(n=J,r=an),n&&r&&(e=en<=10||en>=W-10,t=tn<=10||tn>=G-10),n&&e&&(en=en<Xt?0:W),r&&t&&(tn=tn<Zt?0:G),kn(null,!0,!0),nn=!1}en=-10,tn=-10,ne.fill(null),kn(null,!0,!0),s&&(nn=s)}function Un(e,t,n,i,a,o,s){I._lock||(Re(e),ct(),Fn(),e!=null&&Qn(Mf,r,en,tn,W,G,null))}function Wn(){y.forEach(n_),Me(r.width,r.height,!0)}ip(If,Bf,Wn);let Gn={};Gn.mousedown=Bn,Gn.mousemove=Mn,Gn.mouseup=Vn,Gn.dblclick=Un,Gn.setSeries=(e,t,n,i)=>{let a=Yn.match[2];n=a(r,t,n),n!=-1&&Y(n,i,!0,!1)},R&&(pe(Of,m,Bn),pe(Df,m,Mn),pe(Af,m,e=>{Re(e),jn(!1)}),pe(jf,m,Hn),pe(Mf,m,Un),Bg.add(r),r.syncRect=jn);let Kn=r.hooks=e.hooks||{};function qn(e,t,n){Lt?Rt.push([e,t,n]):e in Kn&&Kn[e].forEach(e=>{e.call(null,r,t,n)})}(e.plugins||[]).forEach(e=>{for(let t in e.hooks)Kn[t]=(Kn[t]||[]).concat(e.hooks[t])});let Jn=(e,t,n)=>n,Yn=_m({key:null,setSeries:!1,filters:{pub:Jp,sub:Jp},scales:[S,v[1]?v[1].scale:null],match:[Yp,Yp,Jn],values:[null,null]},I.sync);Yn.match.length==2&&Yn.match.push(Jn),I.sync=Yn;let Xn=Yn.key,Zn=sg(Xn);function Qn(e,t,n,r,i,a,o){Yn.filters.pub(e,t,n,r,i,a,o)&&Zn.pub(e,t,n,r,i,a,o)}Zn.sub(r);function $n(e,t,n,r,i,a,o){Yn.filters.sub(e,t,n,r,i,a,o)&&Gn[e](null,t,n,r,i,a,o)}r.pub=$n;function er(){Zn.unsub(r),Bg.delete(r),H.clear(),ap(If,Bf,Wn),l.remove(),B?.remove(),qn(`destroy`)}r.destroy=er;function tr(){qn(`init`,e,t),st(t||e.data,!1),j[S]?Ut(S,j[S]):ct(),Ae=on.show&&(on.width>0||on.height>0),ke=je=!0,Me(e.width,e.height)}return v.forEach(qe),y.forEach(Ze),n?n instanceof HTMLElement?(n.appendChild(l),tr()):n(r,tr):tr(),r}r_.assign=_m,r_.fmtNum=wp,r_.rangeNum=yp,r_.rangeLog=pp,r_.rangeAsinh=mp,r_.orient=ug,r_.pxRatio=Hf,r_.join=Sm,r_.fmtDate=Fm,r_.tzDate=Lm,r_.sync=sg;{r_.addGap=hg,r_.clipGaps=mg;let e=r_.paths={points:kg};e.linear=Ng,e.stepped=Pg,e.bars=Ig,e.spline=Rg}var i_={stroke:`#a8a69d`,grid:{stroke:`rgba(255,255,255,0.06)`},ticks:{stroke:`rgba(255,255,255,0.12)`}};function a_({points:e,unit:t,label:n}){let r=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let i=r.current,a=[e.map(e=>e[0]/1e3),e.map(e=>e[1])],o=new r_({width:i.clientWidth||400,height:200,cursor:{drag:{x:!0,y:!1}},scales:{x:{time:!0}},tzDate:e=>r_.tzDate(new Date(e*1e3),`Etc/UTC`),axes:[{...i_},{...i_,label:t??``,size:56}],series:[{label:`UTC`},{label:n??`value`,stroke:`#ecebe6`,width:1.5}]},a,i);return()=>o.destroy()},[e,t,n]),(0,$.jsx)(`div`,{ref:r,className:`chart`})}var o_={CTDPF:`sea_water_temperature`,DOSTA:`moles_of_oxygen_per_unit_mass_in_sea_water`,DOFST:`moles_of_oxygen_per_unit_mass_in_sea_water`,PHSEN:`sea_water_ph_reported_on_total_scale`,FLORT:`mass_concentration_of_chlorophyll_a_in_sea_water`,FLORD:`mass_concentration_of_chlorophyll_a_in_sea_water`,FLNTU:`mass_concentration_of_chlorophyll_a_in_sea_water`,FLCDR:`concentration_of_colored_dissolved_organic_matter`,NUTNR:`mole_concentration_of_nitrate_in_sea_water`,PCO2W:`partial_pressure_of_carbon_dioxide_in_sea_water`,PARAD:`downwelling_photosynthetic_photon_flux_in_sea_water`,SPKIR:`spectir_490nm`,VEL3D:`eastward_sea_water_velocity`,VELPT:`eastward_sea_water_velocity`,VADCP:`eastward_sea_water_velocity`,PREST:`sea_water_pressure_at_sea_floor`,BOTPT:`botpres`,TRHPH:`trhphte_abs`,THSPH:`thsphte_th`,TMPSF:`tempsfl_01`};function s_(e,t){let n=o_[(e??``).split(`-`)[3]?.slice(0,5)];return(n&&t.find(e=>e.startsWith(n)))??(t.includes(`sea_water_temperature`)?`sea_water_temperature`:t[0])}var c_=e=>e.toISOString().replace(/\.\d{3}Z$/,`Z`),l_=26784e5;function u_(e,t=new Date,n=null){let r=n?new Date(n):null,i=new Date(r&&!isNaN(r)&&r<t?r:t);i.setUTCSeconds(0,0);let a={"24h":864e5,"7d":6048e5,"30d":2592e6}[e];return{start:c_(new Date(i-a)),end:c_(i)}}function d_(e,t){let n=new Date(`${e}:00Z`),r=new Date(`${t}:00Z`);return isNaN(n)||isNaN(r)?{ok:!1,message:`Enter both times.`}:r<=n?{ok:!1,message:`End must be after start.`}:r-n>l_?{ok:!1,message:`Ranges are limited to 31 days per request. Pick a shorter range or download the data from ERDDAP.`}:{ok:!0,start:c_(n),end:c_(r)}}function f_({refdes:e}){let t=Kd(`vars:${e}`,t=>zd(e,t)),[n,r]=(0,g.useState)(null),[i,a]=(0,g.useState)(`24h`),[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)({from:``,to:``}),[u,d]=(0,g.useState)(null),f=t.data?.variables??[],p=n??s_(e,f.map(e=>e.name)),m=t.data?.coverage?.end??null,h=(0,g.useMemo)(()=>i===`custom`?null:u_(i,new Date,m),[i,m]),_=h&&Date.now()-Date.parse(h.end)>108e5,v=i===`custom`?o:h,y=Kd(p&&v?`series:${e}:${p}:${v.start}:${v.end}`:null,t=>Bd(e,{var:p,start:v.start,end:v.end},t));if(t.state===`loading`)return(0,$.jsx)(`p`,{className:`muted`,children:`Loading variables…`});if(t.state===`error`)return(0,$.jsx)(Jd,{error:t.error,retry:t.retry});let b=t.data?.variables??[];if(!b.length)return(0,$.jsx)(`p`,{className:`muted`,children:`This dataset lists no plottable measurements.`});let x=b.find(e=>e.name===p);return(0,$.jsxs)(`div`,{className:`series`,children:[(0,$.jsxs)(`div`,{className:`series-bar`,children:[(0,$.jsx)(`select`,{"aria-label":`Measurement`,value:p,onChange:e=>r(e.target.value),children:b.map(e=>(0,$.jsxs)(`option`,{value:e.name,children:[e.longName??e.name,e.units?` (${e.units})`:``]},e.name))}),(0,$.jsxs)(`div`,{className:`seg`,role:`group`,"aria-label":`Time range`,children:[[`24h`,`7d`,`30d`].map(e=>(0,$.jsx)(`button`,{"aria-pressed":i===e,onClick:()=>a(e),children:e},e)),(0,$.jsx)(`button`,{"aria-pressed":i===`custom`,onClick:()=>a(`custom`),children:`Custom`})]})]}),i===`custom`&&(0,$.jsxs)(`div`,{className:`custom-range`,children:[(0,$.jsxs)(`label`,{children:[`From `,(0,$.jsx)(`input`,{type:`datetime-local`,"aria-label":`From`,value:c.from,onChange:e=>l({...c,from:e.target.value})})]}),(0,$.jsxs)(`label`,{children:[`To `,(0,$.jsx)(`input`,{type:`datetime-local`,"aria-label":`To`,value:c.to,onChange:e=>l({...c,to:e.target.value})})]}),(0,$.jsx)(`button`,{onClick:()=>{let e=d_(c.from,c.to);e.ok?(s(e),d(null)):d(e.message)},children:`Apply`}),(0,$.jsx)(`span`,{className:`muted`,children:`Times in UTC.`}),u&&(0,$.jsx)(`p`,{className:`degraded`,children:u})]}),_&&(0,$.jsxs)(`p`,{className:`muted`,children:[`The newest reading is from `,td(m),`; the `,i,` window ends there.`]}),y.state===`loading`&&(0,$.jsx)(`p`,{className:`muted`,children:`Loading readings…`}),y.state===`error`&&(0,$.jsx)(Jd,{error:y.error,retry:y.retry}),y.state===`ok`&&(y.data.points.length?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(a_,{points:y.data.points,unit:y.data.units,label:x?.longName??p}),(0,$.jsxs)(`p`,{className:`chart-foot mono`,children:[y.data.rawCount.toLocaleString(`en-US`),` readings`,y.data.rawCount>y.data.points.length?`, shown as ${y.data.points.length.toLocaleString(`en-US`)}`:``,` · drag to zoom, double-click to reset · `,(0,$.jsx)(`a`,{href:y.data.downloadUrl,target:`_blank`,rel:`noreferrer`,children:`Download this range (CSV)`})]})]}):(0,$.jsxs)(`p`,{className:`muted`,children:[`No readings in this range.`,t.data?.coverage?.end?` The data runs to ${td(t.data.coverage.end)}.`:``]}))]})}function p_({route:e}){let[t,n]=(0,g.useState)(10),r=`${e.network}.${e.station}`,i=Kd(`wave:${r}:${e.channel}:${t}`,n=>Hd(r,t,e.channel,n));return(0,$.jsxs)(`div`,{className:`waveform`,children:[(0,$.jsx)(`div`,{className:`seg`,role:`group`,"aria-label":`Window`,children:[1,5,10,30,60].map(e=>(0,$.jsxs)(`button`,{"aria-pressed":t===e,onClick:()=>n(e),children:[e,` min`]},e))}),i.state===`loading`&&(0,$.jsx)(`p`,{className:`muted`,children:`Loading the recording…`}),i.state===`error`&&(0,$.jsx)(Jd,{error:i.error,retry:i.retry}),i.state===`ok`&&(i.data.points.length?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(a_,{points:i.data.points,unit:`counts`,label:`${r} ${i.data.channel}`}),(0,$.jsxs)(`p`,{className:`chart-foot mono`,children:[i.data.channel,` · `,i.data.rate,` samples/s · ends 2 minutes ago · drag to zoom, double-click to reset`]})]}):(0,$.jsx)(`p`,{className:`muted`,children:i.data.message??`No recording in this window.`}))]})}function m_({sensor:e}){let t=t=>e.access.find(e=>e.kind===t),n=t(`erddap`),r=t(`earthscope`),i=t(`qaqc`),a=e.access.filter(e=>e.kind===`pi_portal`);return(0,$.jsxs)(`section`,{className:`live-data`,children:[(0,$.jsx)(`h3`,{children:`Live data`}),n?(0,$.jsx)(f_,{refdes:e.refdes}):r?(0,$.jsx)(p_,{route:r}):i?(0,$.jsx)(Xd,{refdes:e.refdes}):null,n&&i&&(0,$.jsx)(h_,{refdes:e.refdes}),a.map(e=>(0,$.jsx)(Yd,{route:e},e.endpointId??e.url))]})}function h_({refdes:e}){let[t,n]=(0,g.useState)(!1);return(0,$.jsxs)(`details`,{onToggle:e=>e.currentTarget.open&&n(!0),children:[(0,$.jsx)(`summary`,{children:`Recent QA/QC plots`}),t&&(0,$.jsx)(Xd,{refdes:e})]})}function g_({sensor:e,bundle:t,onBack:n,backLabel:r}){let i=t.familyByKey[e.family],a=e.access.some(e=>[`erddap`,`earthscope`,`qaqc`,`pi_portal`].includes(e.kind));return(0,$.jsxs)(`div`,{className:`sensor-detail`,children:[(0,$.jsxs)(`button`,{className:`back`,onClick:n,children:[`← `,r??t.siteById[e.site]?.label??`Back`]}),(0,$.jsxs)(`h2`,{children:[(0,$.jsx)(pd,{glyph:i.glyph,color:i.color,size:13}),` `,e.name]}),(0,$.jsxs)(`div`,{className:`meta mono`,children:[e.type.replaceAll(`_`,` `),` · `,e.depthRange?Qu(...e.depthRange):Zu(e.depth),e.manufacturer?` · ${e.manufacturer}${e.model?` `+e.model:``}`:``]}),e.lat==null&&(0,$.jsx)(`div`,{className:`meta`,children:`No recorded position, so it is not drawn on the map.`}),(0,$.jsx)(qd,{sensor:e,manifest:t.manifest}),a?(0,$.jsx)(m_,{sensor:e}):(0,$.jsxs)(`section`,{className:`no-feed`,children:[(0,$.jsx)(`h3`,{children:`Live data`}),(0,$.jsxs)(`p`,{children:[`No live feed. `,e.statusGroup===`planned`?`This sensor is planned for COSZO; its data will appear here once it is deployed and publishing.`:`No public data service is known for this sensor.`]})]}),(0,$.jsx)(Md,{sensor:e}),(e.sources.length>0||e.corrections.length>0)&&(0,$.jsxs)(`section`,{className:`sources`,children:[(0,$.jsx)(`h3`,{children:`Sources`}),e.sources.map(e=>(0,$.jsx)(`a`,{href:e,target:`_blank`,rel:`noreferrer`,children:e},e)),e.corrections.map(e=>(0,$.jsxs)(`p`,{className:`correction`,children:[`Corrected in the atlas: `,e]},e))]})]})}function __(e,t){let n=e.seafloor+50;if(e.seafloor<600||!e.column.length){let e=e=>e/n*t;return{y:e,ticks:v_(0,n,n>2e3?500:n>600?200:50).map(t=>({depth:t,y:e(t)})),breakAt:null}}let r=Math.max(300,e.seafloor-300),i=t*.3,a=t*.15,o=t-i-a,s=e=>e<=300?e/300*i:e<=r?i+(e-300)/Math.max(1,r-300)*a:i+a+(e-r)/(n-r)*o,c=[...v_(0,300,100),...v_(Math.ceil(r/100)*100,n,100)];return{y:s,ticks:[...new Set(c)].map(e=>({depth:e,y:s(e)})),breakAt:i+a/2}}var v_=(e,t,n)=>{let r=[];for(let i=e;i<=t;i+=n)r.push(i);return r};function y_(e,t,n=81){let r=1/Xl;return Array.from({length:n},(i,a)=>{let o=a/(n-1);return{x:o,depth:-t(e.lon-r+2*r*o,e.lat)}})}function b_(e,t){let n=Math.min(1,Math.max(0,t))*(e.length-1),r=Math.min(e.length-2,Math.floor(n));return e[r].depth+(e[r+1].depth-e[r].depth)*(n-r)}var x_=(e,t)=>!!e.depthRange||e.depth!=null&&e.depth<t-60,S_=[.08,.92];function C_(e,t,n,r,i,a=null){let o=__(e,i),s=[...t].sort((e,t)=>n[e.family]-n[t.family]||e.id.localeCompare(t.id)),c=r*S_[0],l=r*S_[1],u=s.length;return s.map((t,n)=>{let i=u===1?r/2:c+(l-c)*n/(u-1);if(t.depthRange&&t.depthRange[0]!==t.depthRange[1])return{id:t.id,family:t.family,x:i,y:o.y(t.depthRange[0]),y2:o.y(t.depthRange[1])};let s=t.depthRange?t.depthRange[0]:t.depth??null;return a&&a.length>1&&!x_(t,e.seafloor)?{id:t.id,family:t.family,x:i,y:o.y(Math.max(0,b_(a,i/r)))}:{id:t.id,family:t.family,x:i,y:o.y(s??e.seafloor)}})}var w_=408,T_=320,E_=36,D_=15,O_={min:14,max:32,tall:32,pad:12};function k_({site:e,bundle:t,elevAt:n,onSensor:r}){let[i,a]=(0,g.useState)(null),o=(0,g.useMemo)(()=>Object.fromEntries(t.families.map((e,t)=>[e.key,t])),[t]),s=e.sensorIds.map(e=>t.sensorById[e]),c=y_(e,n),l=__(e,T_),u=C_(e,s,o,372,T_,c),d=u.length>1?Math.abs(u[1].x-u[0].x):O_.max,f=Math.min(O_.max,Math.max(O_.min,d)),p=`M `+c.map(e=>`${E_+e.x*372} ${l.y(Math.max(0,e.depth))}`).join(` L `)+` L ${w_} ${T_} L ${E_} ${T_} Z`;return(0,$.jsxs)(`figure`,{className:`depth-section`,"aria-label":`Depth cross-section of ${e.name}`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 -10 ${w_} 338`,width:`100%`,children:[(0,$.jsx)(`line`,{x1:E_,x2:w_,y1:`0`,y2:`0`,className:`surface-line`}),l.ticks.map(e=>(0,$.jsxs)(`g`,{children:[(0,$.jsx)(`line`,{x1:32,x2:E_,y1:e.y,y2:e.y,className:`tick`}),(0,$.jsx)(`text`,{x:29,y:e.y+3,className:`tick-label mono`,children:e.depth.toLocaleString(`en-US`)})]},e.depth)),l.breakAt!=null&&(0,$.jsx)(`path`,{d:`M 28 ${l.breakAt-3} l 8 -3 M 28 ${l.breakAt+3} l 8 -3`,className:`axis-break`}),(0,$.jsx)(`path`,{d:p,className:`seafloor`,pathLength:`1`}),u.map(e=>{let n=t.sensorById[e.id],i=t.familyByKey[n.family],s=ed(n.status),c={"--delay":`${500+o[n.family]*60}ms`},l=E_+e.x;return(0,$.jsxs)(`g`,{className:`sensor ${s}`,style:c,onMouseEnter:()=>a(e.id),onMouseLeave:()=>a(null),onClick:()=>r(e.id),children:[(0,$.jsx)(`rect`,{className:`hit`,x:l-f/2,width:f,y:e.y2==null?e.y-O_.tall/2:e.y-O_.pad,height:e.y2==null?O_.tall:e.y2-e.y+2*O_.pad}),e.y2!=null&&(0,$.jsx)(`line`,{x1:l,x2:l,y1:e.y,y2:e.y2,stroke:i.color,strokeWidth:`3`,opacity:s===`offline`?.3:.9}),(0,$.jsx)(`svg`,{className:`mark`,x:l-D_/2,y:e.y-D_/2,width:D_,height:D_,viewBox:`0 0 12 12`,overflow:`visible`,opacity:s===`offline`?.3:1,children:(0,$.jsx)(`g`,{stroke:i.color,strokeWidth:`1.6`,strokeDasharray:s===`unknown`?`2 1.5`:void 0,children:fd[i.glyph](s===`planned`||s===`unknown`?`none`:i.color)})})]},e.id)})]}),i&&(()=>{let e=t.sensorById[i];return(0,$.jsxs)(`figcaption`,{className:`ds-tip`,children:[(0,$.jsx)(`b`,{children:e.name}),` · `,e.type.replaceAll(`_`,` `),` · `,e.depthRange?Qu(...e.depthRange):Zu(e.depth),` · `,$u(e.status),e.access.some(e=>[`erddap`,`earthscope`,`qaqc`,`pi_portal`].includes(e.kind))?` · live data`:``]})})()]})}function A_({label:e,eyebrow:t,title:n,sub:r,closeLabel:i,onClose:a,onBack:o,inDetail:s,minimized:c=!1,onMinimize:l,children:u}){return(0,g.useEffect)(()=>{let e=e=>{c||e.key!==`Escape`||e.target?.closest?.(`input, textarea`)||(s&&o?o():a())};return addEventListener(`keydown`,e),()=>removeEventListener(`keydown`,e)},[a,o,s,c]),c?(0,$.jsxs)(`div`,{className:`panel side-tab`,role:`region`,"aria-label":e,children:[(0,$.jsx)(`button`,{className:`restore`,"aria-expanded":`false`,title:`Show ${n}`,onClick:()=>l?.(!1),children:n}),(0,$.jsx)(`button`,{className:`close`,"aria-label":i,onClick:a,children:`×`})]}):(0,$.jsxs)(`aside`,{className:`panel side-panel`,"aria-label":e,children:[(0,$.jsxs)(`div`,{className:`sp-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`eyebrow`,children:t}),(0,$.jsx)(`h2`,{children:n}),(0,$.jsx)(`div`,{className:`sub mono`,children:r})]}),(0,$.jsxs)(`div`,{className:`sp-actions`,children:[l&&(0,$.jsx)(hd,{label:e,onClick:()=>l(!0)}),(0,$.jsx)(`button`,{className:`close`,"aria-label":i,onClick:a,children:`×`})]})]}),u]})}function j_({site:e,bundle:t,elevAt:n,onClose:r,onBack:i,onSensor:a,minimized:o,onMinimize:s,children:c}){let l=c!=null&&c!==!1,u=e.sensorIds.map(e=>t.sensorById[e]),d=[t.regions.find(t=>t.key===e.region)?.label,e.label===e.name?null:e.label].filter(Boolean).join(` · `);return(0,$.jsx)(A_,{label:`${e.label} site`,eyebrow:d,title:e.name,closeLabel:`Close site panel`,sub:`${u.length} sensors · seafloor ${Zu(e.seafloor)}`,onClose:r,onBack:i,inDetail:l,minimized:o,onMinimize:s,children:l?c:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(k_,{site:e,bundle:t,elevAt:n,onSensor:a}),t.families.map(e=>{let t=u.filter(t=>t.family===e.key);return t.length?(0,$.jsxs)(`section`,{className:`sp-family`,children:[(0,$.jsxs)(`h3`,{children:[(0,$.jsx)(pd,{glyph:e.glyph,color:e.color}),` `,e.label]}),t.map(e=>(0,$.jsxs)(`button`,{className:`sp-row`,onClick:()=>a(e.id),"aria-label":`${e.name}, ${$u(e.status)}`,children:[(0,$.jsx)(`span`,{className:`nm`,children:e.name}),(0,$.jsxs)(`span`,{className:`mono d`,children:[$u(e.status),` · `,e.depthRange?Qu(...e.depthRange):Zu(e.depth)]})]},e.id))]},e.key):null}),e.unlocatedIds.length>0&&(0,$.jsxs)(`section`,{className:`sp-family`,children:[(0,$.jsx)(`h3`,{children:`Also at this site`}),e.unlocatedIds.map(e=>t.sensorById[e]).filter(Boolean).map(e=>(0,$.jsxs)(`button`,{className:`sp-row`,onClick:()=>a(e.id),"aria-label":`${e.name}, location not recorded`,children:[(0,$.jsx)(`span`,{className:`nm`,children:e.name}),(0,$.jsx)(`span`,{className:`d`,children:`location not recorded`})]},e.id))]})]})})}function M_({bundle:e,onClose:t,onBack:n,onSensor:r,minimized:i,onMinimize:a,children:o}){let s=o!=null&&o!==!1,c=e.unplaced.map(t=>e.sensorById[t]).filter(Boolean);return(0,$.jsx)(A_,{label:`Unplaced sensors`,eyebrow:`Not on the map`,title:`Unplaced sensors`,closeLabel:`Close unplaced sensors`,sub:`${c.length} sensor${c.length===1?``:`s`} · no recorded position`,onClose:t,onBack:n,inDetail:s,minimized:i,onMinimize:a,children:s?o:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`p`,{className:`sp-note`,children:`These sensors have no usable position and name no catalogued site, so the map cannot draw them.`}),e.families.map(e=>{let t=c.filter(t=>t.family===e.key);return t.length?(0,$.jsxs)(`section`,{className:`sp-family`,children:[(0,$.jsxs)(`h3`,{children:[(0,$.jsx)(pd,{glyph:e.glyph,color:e.color}),` `,e.label]}),t.map(e=>(0,$.jsxs)(`button`,{className:`sp-row`,onClick:()=>r(e.id),"aria-label":`${e.name}, ${$u(e.status)}, no recorded position`,children:[(0,$.jsx)(`span`,{className:`nm`,children:e.name}),(0,$.jsx)(`span`,{className:`mono d`,children:$u(e.status)})]},e.id))]},e.key):null})]})})}var N_={chat:412,side:472,none:16},P_=(e,t)=>Math.max(0,...[e,t].filter(Boolean).map(e=>e.getBoundingClientRect().bottom)),F_=6371.0088,I_=e=>e*Math.PI/180;function L_(e,t,n,r){let i=Math.sin(I_(r-t)/2)**2+Math.cos(I_(t))*Math.cos(I_(r))*Math.sin(I_(n-e)/2)**2;return 2*F_*Math.asin(Math.min(1,Math.sqrt(i)))}function R_(e,t,n,r=30){return e.map(e=>({site:e,km:L_(t,n,e.lon,e.lat)})).filter(e=>e.km<=r).sort((e,t)=>e.km-t.km)}var z_={charted:`Charted route, traced from the NOAA/BOEM Marine Cadastre cable protection zone (public domain, not for navigation).`,approximate:`Approximate route. No public chart exists beyond the US Exclusive Economic Zone, so this is drawn straight between known points and could be off by a few km.`,mapped:`Mapped route from ooi_cables.csv (M. Kidiwela, CascadiaEarthquakes). It matches the NOAA/BOEM chart within metres where both exist; beyond the US EEZ its points are sparse.`},B_=14,V_=12,H_={charted:`OOI mariner safety notices and COSZO cruise records, on the charted cable route`,approximate:`no published node coordinates; placed from OOI records`};function U_({node:e,bundle:t}){let n=R_(t.sites,e.lon,e.lat,30),r=e.source??H_[e.accuracy]??`OOI records`;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`t-name`,children:e.name}),(0,$.jsx)(`div`,{className:`t-sub`,children:e.description}),(0,$.jsxs)(`div`,{className:`t-list`,children:[(0,$.jsx)(`div`,{className:`t-head`,children:`Catalogued sites within 30 km`}),n.length===0&&(0,$.jsx)(`div`,{className:`t-none`,children:`None.`}),n.slice(0,V_).map(({site:e,km:t})=>(0,$.jsxs)(`div`,{className:`t-site`,children:[(0,$.jsx)(`span`,{title:e.name,children:e.label}),(0,$.jsxs)(`span`,{className:`d mono`,children:[e.sensorIds.length,` sensor`,e.sensorIds.length===1?``:`s`,` · `,t<10?t.toFixed(1):Math.round(t),` km`]})]},e.id))]}),n.length>V_&&(0,$.jsxs)(`div`,{className:`t-more`,children:[`+`,n.length-V_,` more within 30 km.`]}),(0,$.jsxs)(`div`,{className:`t-more`,children:[`Position `,e.accuracy,`. Source: `,r,`.`,e.note?` ${e.note}`:``]})]})}function W_({site:e,bundle:t}){let n=t.familyByKey,r=e.sensorIds.map(e=>t.sensorById[e]),i=t.families.map(e=>[e,r.filter(t=>t.family===e.key).length]).filter(([,e])=>e),a=[],o=0;for(let t of e.parts){let i=r.filter(n=>(n.location??e.name)===t).slice(0,B_-o);if(i.length){e.parts.length>1&&a.push((0,$.jsx)(`div`,{className:`t-head`,children:t},`h-${t}`));for(let e of i)a.push((0,$.jsxs)(`div`,{className:`t-item`,children:[(0,$.jsx)(pd,{glyph:n[e.family].glyph,color:n[e.family].color}),(0,$.jsx)(`span`,{title:e.name,children:e.name}),(0,$.jsxs)(`span`,{className:`d mono`,children:[$u(e.status),` · `,e.depthRange?Qu(...e.depthRange):Zu(e.depth)]})]},e.id));o+=i.length}}let s=r.length-o,c=e.unlocatedIds.length;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`t-name`,children:e.name}),(0,$.jsxs)(`div`,{className:`t-sub`,children:[r.length,` sensor`,r.length===1?``:`s`,` · seafloor `,Zu(e.seafloor),` · `,i.map(([e,t])=>`${t} ${e.label.toLowerCase()}`).join(`, `)]}),e.column.length>0&&(0,$.jsx)(`div`,{className:`t-col`,children:e.column.map(e=>(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:e.kind}),` `,Qu(e.a,e.b),` `]},e.kind))}),(0,$.jsx)(`div`,{className:`t-list`,children:a}),s>0&&(0,$.jsxs)(`div`,{className:`t-more`,children:[`+`,s,` more. Click to open the depth section.`]}),c>0&&(0,$.jsxs)(`div`,{className:`t-more`,children:[c,` more sensor`,c>1?`s have`:` has`,` no recorded position.`]})]})}function G_({hover:e,bundle:t}){let n=(0,g.useRef)(null);if((0,g.useLayoutEffect)(()=>{let t=n.current;if(!t||!e)return;let r=t.offsetHeight,i=e.y+18+r<=innerHeight-8;t.style.top=`${i?Math.min(e.y+18,innerHeight-240):Math.max(8,e.y-18-r)}px`}),!e)return null;let{kind:r,item:i,x:a,y:o}=e,s={left:Math.min(a+18,innerWidth-400),top:Math.min(o+18,innerHeight-240)};return(0,$.jsxs)(`div`,{ref:n,className:`tip`,style:s,role:`tooltip`,children:[r===`site`&&(0,$.jsx)(W_,{site:i,bundle:t}),r===`node`&&(0,$.jsx)(U_,{node:i,bundle:t}),r===`cable`&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`t-name`,children:i.kind}),(0,$.jsxs)(`div`,{className:`t-sub`,children:[i.route,i.lengthKm?` · ${Math.round(i.lengthKm)} km`:``]}),(0,$.jsx)(`div`,{className:`t-col`,children:z_[i.accuracy]}),t.sensors.some(e=>e.family===`fiber`&&e.lat==null)&&(0,$.jsxs)(`div`,{className:`t-col`,children:[`Fiber-optic sensing experiments on the cable (exact positions not recorded): `,t.sensors.filter(e=>e.family===`fiber`&&e.lat==null).map(e=>e.name).join(`; `),`.`]}),(0,$.jsx)(`div`,{className:`t-more`,children:`Two backbone cables run from the Pacific City shore station: the south line to Hydrate Ridge and the Oregon shelf, the north line past the Mid-Plate node to Axial Seamount.`})]})]})}var K_=`#ecebe6`,q_=[{id:`das25-multidas`,url:/\/das25\/data\/multidas/i,text:/\bmulti[\s-]?(?:das|span)\b/i,kinds:[`multidas`],code:`MultiDAS`,where:`North & south`,label:`DAS25 MultiDAS, 2025–26`},{id:`das25-optodas`,url:/\/das25\/data\/optodas/i,text:/\boptodas\b/i,kinds:[`optodas`],code:`OptoDAS`,where:`South, first span`,label:`DAS25 OptoDAS, 2025–26`},{id:`das25`,url:/\/das25\//i,kinds:[`multidas`,`optodas`],code:`DAS25`,where:`North & south`,label:`DAS25 fibre sensing, 2025–26`},{id:`das24`,url:/\/das24\//i,layers:[`optodas-south-first-span`],code:`DAS24`,where:`South, first span`,label:`DAS24 RAPID, 2024`},{id:`das21-north`,url:/\/das\/.*north ?cable/i,layers:[`conventional-north`],code:`DAS21`,where:`North cable`,label:`2021 DAS community test, north cable`},{id:`das21-south`,url:/\/das\/.*south ?cable/i,layers:[`conventional-south`],code:`DAS21`,where:`South cable`,label:`2021 DAS community test, south cable`},{id:`das21`,url:/piweb\.ooirsn\.uw\.edu\/das\//i,kinds:[`conventional`],code:`DAS21`,where:`North & south`,label:`2021 DAS community test`}],J_=[`Instrument`,`Canonical identifier`,`Type`,`Projects`,`Location`,`Status`,`Deployment state`,`Aliases`,`Sensor components`,`Manufacturer`,`Model`,`Notes`,`Measurement roles`],Y_=new WeakMap;function X_(e){if(Y_.has(e))return Y_.get(e);let t=new Map,n=new Map,r=new Map,i=new Map;for(let a of e.sensors??[]){t.set(a.instrumentId,a),a.arcadaId&&n.set(a.arcadaId,a);for(let e of[a.id,a.refdes])e&&r.set(e.toUpperCase(),a);for(let e of new Set([...a.sources??[],...(a.access??[]).map(e=>e.url)])){if(!e)continue;let t=Z_(e);i.set(t,[...i.get(t)??[],a])}}let a=new Map;for(let t of e.sites??[])for(let e of[t.name,t.label?.split(` · `)[0]]){if(!e||e.length<8)continue;let n=e.toLowerCase(),r=a.get(n);(!r||t.sensorIds.length>r.sensorIds.length)&&a.set(n,t)}let o={byInstrument:t,byArcada:n,byCode:r,byUrl:i,siteNames:[...a].sort((e,t)=>t[0].length-e[0].length)};return Y_.set(e,o),o}var Z_=e=>String(e).trim().toLowerCase().replace(/^https?:\/\//,``).replace(/\/+$/,``),Q_=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);function $_(e,t){let n=e=>(e.citations??[]).map(t=>`${t.source_id||e.chunk_id}|${t.url||``}`),r=t.filter(t=>n(t).includes(`${e.id}|${e.url||``}`));return r.length?r:t.filter(t=>(t.citations??[]).some(n=>(n.source_id||t.chunk_id)===e.id))}function ev(e,t){let n=[],r=e=>{e&&!n.includes(e)&&n.push(e)};for(let n of e.matchAll(/station_([A-Z0-9]{2})_([A-Z0-9]{3,6})\b|\/mda\/([A-Z0-9]{2})\/([A-Z0-9]{3,6})\b|[A-Z0-9]+(?:-[A-Z0-9]+){1,4}/gi))n[1]||n[3]?r(t.byCode.get(`EARTHSCOPE-${n[1]??n[3]}-${n[2]??n[4]}`.toUpperCase())):r(t.byCode.get(n[0].toUpperCase()));return n}function tv(e,t){if(!e.length)return null;let n=new Set(e.map(e=>e.site));return e.length>1&&n.size===1&&e[0].site?av(t.siteById[e[0].site]):iv(e[0],t)}function nv(e,t){return q_.find(t=>e.some(e=>t.url.test(e)))??q_.find(e=>e.text&&t.some(t=>e.text.test(t)))??null}function rv(e,t){let n=(t.das?.layers??[]).filter(t=>e.layers?.includes(t.id)||e.kinds?.includes(t.kind));if(!n.length)return null;let r=e=>e.coords.slice(1).reduce((t,n,r)=>t+Math.hypot(n[0]-e.coords[r][0],n[1]-e.coords[r][1]),0),i=n.reduce((e,t)=>r(t)>r(e)?t:e),[a,o]=i.coords[Math.floor(i.coords.length/2)];return{kind:`cable`,id:e.id,layers:n.map(e=>e.id),lon:a,lat:o,depth:null,family:`fiber`,color:n[0].color,code:e.code,label:e.label,site:e.where,siteId:null,refdes:null}}function iv(e,t){let n=e.site?t.siteById[e.site]:null;if(e.lat==null&&!n){let n=e.family===`fiber`&&nv([...e.sources??[],...(e.access??[]).map(e=>e.url).filter(Boolean)],[e.name]);return n?rv(n,t):null}return{kind:`sensor`,id:e.id,lon:e.lon??n.lon,lat:e.lat??n.lat,depth:e.depth??e.waterDepth??n?.seafloor??null,family:e.family,color:t.familyByKey?.[e.family]?.color??`#ecebe6`,code:sv(e),label:e.name,site:n?cv(n.label):``,siteId:n?.id??null,refdes:e.refdes??e.id}}function av(e){return e?{kind:`site`,id:e.id,lon:e.lon,lat:e.lat,depth:e.seafloor??null,family:null,color:K_,code:`Site`,label:e.name,site:cv(e.label),siteId:e.id,refdes:null}:null}var ov=e=>[[e.manufacturer,e.model].filter(Boolean).join(` `),e.type?.replaceAll(`_`,` `)].filter(Boolean).join(` · `),sv=e=>(e.refdes??e.id).split(`-`).pop();function cv(e=``){let t=e.split(` · `)[0].replace(/^Axial Seamount /,`Axial `).replace(/^Southern Hydrate Ridge/,`Hydrate Ridge`).replace(`International`,`Intl`).replace(`Hydrothermal Field`,`Vent Field`);return/^Axial /.test(t)&&t!==`Axial Base`&&(t=t.replace(/^Axial /,``)),t}var lv=e=>e.replace(/\s*[([]\s*(?:https?:\/\/|www\.)[^\s)\]]*\s*[)\]]/gi,``).replace(/(?:https?:\/\/|www\.)\S*[^\s.,;:!?)\]]/gi,``).replace(/\s+([,.;:!?…])/g,`$1`).replace(/\s{2,}/g,` `).replace(/^[\s,.;:]+/,``).trim();function uv(e){let t=String(e??``).trim();if(!t)return{excerpt:``,quote:!1};if(!/^Instrument: /.test(t)){let e=lv(t);return{excerpt:e,quote:!!e}}let n=RegExp(`(${J_.map(Q_).join(`|`)}): `,`g`),r={},i=[...t.matchAll(n)];i.forEach((e,n)=>{r[e[1]]=t.slice(e.index+e[0].length,i[n+1]?.index??t.length).replace(/[…\s]+$/,``).trim()});let a=e=>e&&!/^(none|not separately enumerated)$/i.test(e);return{excerpt:[[r.Manufacturer,r.Model].filter(a).join(` `),r.Type?.replaceAll(`_`,` `),r[`Measurement roles`],r[`Sensor components`]].filter(a).join(` · `),quote:!1}}function dv(e,t,n,r){for(let i of[e.id,...t.flatMap(e=>[e.chunk_id,...(e.citations??[]).map(e=>e.source_id)])]){let e=/^(ARCADA-)?INSTRUMENT-(?:CHUNK-)?([0-9a-f]+)$/i.exec(i??``),t=e&&(e[1]?n.byArcada.get(`ARCADA-INSTRUMENT-${e[2]}`):n.byInstrument.get(`INSTRUMENT-${e[2].slice(0,18)}`));if(t)return iv(t,r)}let i=[e.url,...t.flatMap(e=>(e.citations??[]).map(e=>e.url))].filter(Boolean),a=[e.title,...t.map(e=>e.title)].filter(Boolean),o=[...a,...t.flatMap(e=>[JSON.stringify(e.metadata??{}),e.excerpt])].filter(Boolean),s=tv(ev([...o,...i].join(`
`),n),r);if(s)return s;let c=nv(i,a);if(c)return rv(c,r);for(let e of i){let t=n.byUrl.get(Z_(e))??[],i=tv(t,r);if(i&&(t.length===1||i.kind===`site`))return i}for(let e of o){let t=null;for(let[r,i]of n.siteNames){let n=e.search(RegExp(`\\b${Q_(r)}\\b`,`i`));n>=0&&(!t||n<t.at)&&(t={at:n,site:i})}if(t)return av(t.site)}return null}function fv(e){return Array.isArray(e)?e.filter(e=>Number.isFinite(e?.lat)&&Number.isFinite(e?.lon)&&e.time).sort((e,t)=>e.time<t.time?-1:+(e.time>t.time)).map((e,t)=>({n:t+1,time:e.time,lat:e.lat,lon:e.lon,depth_km:Number.isFinite(e.depth_km)?e.depth_km:null,mag:Number.isFinite(e.mag)?e.mag:null})):null}function pv(e,t){let n=(e.tool_hints??[]).find(e=>e.name===`axial_count_events`);if(!n)return null;let r=/There (?:were|have been) ([\d,]+) /.exec(e.answer??``),i=n.input_schema??{};return{day:i.day??null,tz:i.tz??`UTC`,today:!!i.today,n:t?t.length:r?+r[1].replaceAll(`,`,``):null}}function mv(e,t){if(!e||typeof e!=`object`)return{located:[],documents:[],events:null,count:null};let n=X_(t),r=Array.isArray(e.hits)?e.hits:[],i=[],a=[];(e.answer_citations??[]).forEach((e,o)=>{let s=o+1,c=$_(e,r),l=e.title||c[0]?.title||e.id,{excerpt:u,quote:d}=uv(c.map(e=>e.excerpt).find(Boolean)),f=dv(e,c,n,t);f?.kind===`sensor`&&!d&&({excerpt:u,quote:d}={excerpt:ov(t.sensorById[f.id])||u,quote:!1}),f?i.push({n:s,...f,title:l,excerpt:u,quote:d,sourceUrl:e.url||null}):a.push({n:s,title:l,url:e.url||null,excerpt:u,quote:d})});let o=fv(e.events);return{located:i,documents:a,events:o?.length?o:null,count:pv(e,o)}}var hv=e=>e?.located?.length?e.located:e?.events??[],gv=`${Pd}/v1/answer`,_v=[[`auto`,`Auto`],[`gemini-2.5-flash`,`Gemini 2.5 Flash`],[`gemini-3.5-flash-lite`,`Gemini 3.5 Flash-Lite`],[`groq-gpt-oss-120b`,`GPT-OSS 120B`],[`groq-gpt-oss-20b`,`GPT-OSS 20B`],[`groq-qwen3-8-27b`,`Qwen3 27B`],[`gpt-5.4-mini`,`GPT-5.4 mini`]],vv={"axial_count_events (live catalog)":`live catalog`,"RCA Atlas graph route":`graph route`,"RCA Atlas graph evidence (no LLM)":`no LLM`,"RCA Atlas evidence routing":`evidence route`},yv=e=>vv[e]??e??``,bv=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||void 0}catch{return}};async function xv(e,{model:t=`auto`,tz:n=bv(),signal:r,fetchImpl:i=fetch,now:a=()=>performance.now()}={}){let o=a(),s;try{s=await i(gv,{method:`POST`,signal:r,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e,answer_mode:`evidence`,model:t,tz:n})})}catch(e){if(e?.name===`AbortError`)throw e;return{ok:!1,message:`The Atlas answer service could not be reached.`}}let c;try{c=await s.json()}catch{return{ok:!1,message:`The Atlas answer service did not respond (HTTP ${s.status}).`}}if(!s.ok){let e=typeof c?.error==`string`?c.error:c?.error?.message;return{ok:!1,message:e?`${e[0].toUpperCase()}${e.slice(1).replace(/[.\s]+$/,``)} (HTTP ${s.status}).`:`The Atlas answer service failed (HTTP ${s.status}).`}}return c?.answer?{ok:!0,data:c,ms:a()-o}:{ok:!1,message:`The Atlas returned no answer.`}}var Sv=/^(\s*)[-*•]\s+(.*)$/,Cv=/\s*\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g;function wv(e){return e.split(/\s*,\s*/).flatMap(e=>{let[t,n]=e.split(/\s*[–-]\s*/).map(Number);return n>t&&n-t<50?n-t>=2?[{n:t,to:n}]:[{n:t},{n}]:[{n:t}]})}var Tv=e=>e.to?Array.from({length:e.to-e.n+1},(t,n)=>e.n+n):[e.n];function Ev(e,t){let n=[],r=(e,t)=>{if(!t)return;let r=n[n.length-1];e===`text`&&r?.t===`text`?r.v+=t:n.push({t:e,v:t})};return e.split(/\*\*(.+?)\*\*/).forEach((e,i)=>{if(i%2)return r(`b`,e);let a=0;for(let i of e.matchAll(Cv)){let o=wv(i[1]);if(r(`text`,e.slice(a,i.index)),o.flatMap(Tv).every(e=>t.has(e)))for(let e of o)n.push({t:`cite`,...e});else r(`text`,i[0]);a=i.index+i[0].length}r(`text`,e.slice(a))}),n}function Dv(e,t=new Set){let n=String(e??``).split(/\r?\n/),r=[],i=null,a=[],o=()=>{i&&r.push({type:`p`,parts:Ev(i.join(` `),t)}),i=null},s=e=>{for(;a.length&&a[a.length-1]>e;)a.pop();return(!a.length||a[a.length-1]<e)&&a.push(e),Math.min(2,a.length-1)},c=e=>n.slice(e+1).find(e=>e.trim());return n.forEach((e,n)=>{let l=e.trim();if(!l||/^-{3,}$/.test(l))return a=[],o();let u=Sv.exec(e);if(u){o(),r.push({type:`li`,level:s(u[1].replace(/\t/g,`    `).length),parts:Ev(u[2].trim(),t)});return}let d=/^\*\*([^*]+)\*\*:?$/.exec(l),f=d||l.length<=60&&!/[.?!;,]$/.test(l)&&Sv.test(c(n)??``);if(a=[],f){o(),r.push({type:`h`,parts:Ev((d?d[1]:l).replace(/:$/,``),t)});return}(i??=[]).push(l)}),o(),r}var Ov=`atlas.chat.open`,kv=()=>localStorage.getItem(Ov)!==`false`,Av=[`What instruments are on Southern Hydrate Ridge?`,`Which instruments measure dissolved oxygen?`,`How do I get the DAS data?`,`How many earthquakes at Axial today?`],jv=`#8d8b84`,Mv=e=>e==null?`—`:`${Math.round(e).toLocaleString(`en-US`)} m`,Nv=(e,t,n=`${t}s`)=>`${e} ${e===1?t:n}`,Pv=(e,t=`UTC`)=>new Intl.DateTimeFormat(`en-GB`,{timeZone:t,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`}).format(new Date(e)),Fv=(e,t=`UTC`)=>new Intl.DateTimeFormat(`en-CA`,{timeZone:t,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date(e)),Iv=(e=`UTC`,t=new Date)=>e===`UTC`?`UTC`:new Intl.DateTimeFormat(`en-US`,{timeZone:e,timeZoneName:`short`}).formatToParts(t).find(e=>e.type===`timeZoneName`)?.value??e,Lv=e=>e==null?`—`:`M ${(Math.abs(e)<.05?0:e).toFixed(1)}`,Rv=e=>e==null?`—`:`${e.toFixed(2)} km`,zv=(e,t)=>[`${Fv(e.time,t)} ${Pv(e.time,t)} ${Iv(t,new Date(e.time))}`,Lv(e.mag),e.depth_km!=null&&`${Rv(e.depth_km)} below datum`,`${e.lat.toFixed(3)}° N, ${Math.abs(e.lon).toFixed(3)}° W`].filter(Boolean).join(` · `),Bv=e=>Lu(e)||!!e?.closest?.(`[role="slider"], [contenteditable="true"]`);function Vv(e){let{ev:t,data:n,ms:r}=e,i=`${(r/1e3).toFixed(1)} s`,a=yv(n.answer_model);if(t.count){let{n:e,day:n,tz:r,today:o}=t.count;return[e!=null&&`${Nv(e,`earthquake`)}${o?` so far`:``}`,n&&`${n} ${Iv(r,new Date(`${n}T12:00:00Z`))}`,i,a].filter(Boolean).join(` · `)}return[`${t.located.length} on the map`,Nv(t.documents.length,`document`),i,a].filter(Boolean).join(` · `)}function Hv({bundle:e,evidence:t,activeN:n,hoverN:r,panelOpen:i=!1,onShow:a,onHover:o,onSelect:s,onOpenChange:c}){let[l,u]=(0,g.useState)(kv),[d,f]=(0,g.useState)([]),[p,m]=(0,g.useState)(``),[h,_]=(0,g.useState)(`auto`),v=d.some(e=>e.status===`pending`),y=(0,g.useRef)(null),b=(0,g.useRef)(null),x=(0,g.useRef)(1);(0,g.useLayoutEffect)(()=>{localStorage.setItem(Ov,String(l));let e=document.documentElement.style;e.setProperty(`--left-inset`,l?`412px`:`16px`),e.setProperty(`--strip-reserve`,l?`0px`:`132px`),c?.(l)},[l,c]),(0,g.useEffect)(()=>()=>b.current?.abort(),[]);let S=async(t,n,r)=>{b.current?.abort();let i=b.current=new AbortController,o;try{o=await xv(n,{model:r,signal:i.signal})}catch{return}let s=o.ok?{id:t,...mv(o.data,e)}:null;f(e=>e.map(e=>e.id===t?o.ok?{...e,status:`ok`,data:o.data,ms:o.ms,ev:s}:{...e,status:`error`,message:o.message}:e)),s&&a(s)},C=e=>{let t=e.trim();if(t.length<2||v)return;let n=x.current++;f(e=>[...e,{id:n,q:t,model:h,status:`pending`}]),m(``),S(n,t,h)},w=e=>{f(t=>t.map(t=>t.id===e.id?{...t,status:`pending`}:t)),S(e.id,e.q,e.model)},T=d[d.length-1];(0,g.useEffect)(()=>{(y.current?.querySelector(`[data-entry="${T?.id}"]`))?.scrollIntoView?.({block:`start`,behavior:`smooth`})},[T?.id,T?.status]);let E=(0,g.useMemo)(()=>hv(t),[t]),D=e=>{if(!E.length)return;let t=E.findIndex(e=>e.n===n);s(E[t<0?e>0?0:E.length-1:(t+e+E.length)%E.length].n)},O=(0,g.useRef)();if(O.current={evidence:t,activeN:n,panelOpen:i,step:D,onSelect:s,onShow:a},(0,g.useEffect)(()=>{let e=e=>{let t=O.current;if(!t.evidence||e.metaKey||e.ctrlKey||e.altKey)return;let n=e.target?.dataset?.askComposer!=null&&!e.target.value;if(!Bv(e.target)||n){if(e.key===`Escape`){if(t.panelOpen)return;t.activeN==null?t.onShow(null):t.onSelect(null);return}(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&t.activeN!=null&&(e.preventDefault(),e.stopPropagation(),t.step(e.key===`ArrowRight`?1:-1))}};return addEventListener(`keydown`,e,!0),()=>removeEventListener(`keydown`,e,!0)},[]),!l)return(0,$.jsx)(`button`,{className:`ask-tab panel`,"aria-label":`Open Ask Atlas`,onClick:()=>u(!0),children:`Ask Atlas`});let k=r??n;return(0,$.jsxs)(`aside`,{className:`panel ask`,"aria-label":`Ask Atlas`,children:[(0,$.jsxs)(`div`,{className:`ask-head`,children:[(0,$.jsx)(`span`,{children:`Ask Atlas`}),(0,$.jsxs)(`span`,{className:`ask-head-r`,children:[`RCA · COSZO`,(0,$.jsx)(hd,{label:`Ask Atlas`,onClick:()=>u(!1)})]})]}),(0,$.jsxs)(`div`,{className:`ask-thread`,ref:y,"aria-live":`polite`,children:[d.length===0&&(0,$.jsxs)(`div`,{className:`ask-empty`,children:[(0,$.jsx)(`p`,{children:`Ask about the Regional Cabled Array and COSZO. Answers cite their sources, and the map shows where that evidence was measured.`}),(0,$.jsx)(`div`,{className:`ask-label`,children:(0,$.jsx)(`span`,{children:`Try`})}),Av.map(e=>(0,$.jsx)(`button`,{className:`ask-suggest`,onClick:()=>C(e),children:e},e))]}),d.map(e=>(0,$.jsx)(Uv,{e,shown:t?.id===e.id&&e.status===`ok`,hl:k,activeN:n,tour:E,onShow:a,onHover:o,onSelect:s,onStep:D,onRetry:()=>w(e)},e.id))]}),(0,$.jsxs)(`form`,{className:`ask-composer`,onSubmit:e=>{e.preventDefault(),C(p)},children:[(0,$.jsx)(`textarea`,{"data-ask-composer":``,"aria-label":`Ask a question`,rows:`1`,value:p,placeholder:d.length?`Ask a follow-up…`:`Ask the Atlas…`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),C(p))}}),(0,$.jsxs)(`label`,{className:`ask-model`,children:[(0,$.jsx)(`span`,{className:`sr-only`,children:`Answer model`}),(0,$.jsx)(`select`,{"aria-label":`Answer model`,value:h,onChange:e=>_(e.target.value),children:_v.map(([e,t])=>(0,$.jsx)(`option`,{value:e,children:t},e))})]}),(0,$.jsx)(`button`,{type:`submit`,"aria-label":`Ask`,disabled:v,children:`↵`})]})]})}function Uv({e,shown:t,hl:n,activeN:r,tour:i,onShow:a,onHover:o,onSelect:s,onStep:c,onRetry:l}){let u=e.ev,d=(0,g.useMemo)(()=>new Map([...(u?.located??[]).map(e=>[e.n,e]),...(u?.documents??[]).map(e=>[e.n,{...e,doc:!0}])]),[u]),f=(0,g.useMemo)(()=>e.data?Dv(e.data.answer,new Set(d.keys())):[],[e.data,d]),p=t,m=i.findIndex(e=>e.n===r),h=e=>p&&o(e),_=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(p&&r!=null)for(let e of _.current?.querySelectorAll(`tr.active, tr.active + tr.ex`)??[])e.scrollIntoView?.({block:`nearest`})},[p,r]);let v=(e,t,r)=>{if(r){let i=Array.from({length:r-e+1},(t,n)=>e+n),a=i.find(e=>!d.get(e).doc)??e,o=d.get(a);return(0,$.jsx)(`sup`,{children:(0,$.jsxs)(`button`,{className:`cite${p&&i.includes(n)?` on`:``}`,style:{"--c":o.doc?jv:o.color},"aria-label":`Sources ${e}–${r}: ${o.label??o.title} and others`,onMouseEnter:()=>h(a),onMouseLeave:()=>h(null),onClick:()=>p&&!o.doc&&s(a),children:[e,`–`,r]})},t)}let i=d.get(e),a=p&&n===e;return i.doc?(0,$.jsx)(`sup`,{children:(0,$.jsx)(`a`,{className:`cite${a?` on`:``}`,style:{"--c":jv},href:i.url||void 0,target:`_blank`,rel:`noreferrer`,"aria-label":`Source ${e}: ${i.title}`,onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),children:e})},t):(0,$.jsx)(`sup`,{children:(0,$.jsx)(`button`,{className:`cite${a?` on`:``}`,style:{"--c":i.color},"aria-label":`Source ${e}: ${i.label}`,onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:()=>p&&s(e),children:e})},t)},y=e=>{let t=[];return e.forEach((n,r)=>n.t===`cite`&&e[r-1]?.t===`cite`?t[t.length-1].cites.push({...n,i:r}):t.push(n.t===`cite`?{cites:[{...n,i:r}],i:r}:{...n,i:r})),t.map(e=>e.cites?(0,$.jsx)(`span`,{className:`cites`,children:e.cites.map(e=>v(e.n,e.i,e.to))},e.i):e.t===`b`?(0,$.jsx)(`strong`,{children:e.v},e.i):(0,$.jsx)(g.Fragment,{children:e.v},e.i))},b=(e,t,i,a)=>{let o=p&&n===e,c=p&&r===e;return(0,$.jsxs)(g.Fragment,{children:[(0,$.jsxs)(`tr`,{className:`${o?`on`:``}${c?` active`:``}`,style:{"--c":i},tabIndex:p?0:-1,onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:()=>p&&s(e),onKeyDown:t=>{p&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),s(e))},children:[(0,$.jsx)(`td`,{className:`i`,children:e}),t]}),c&&a&&(0,$.jsxs)(`tr`,{className:`ex`,children:[(0,$.jsx)(`td`,{}),(0,$.jsx)(`td`,{colSpan:3,children:a})]})]},e)},x=p&&i.length>0&&(0,$.jsxs)(`span`,{className:`ask-step`,children:[(0,$.jsx)(`button`,{"aria-label":`Previous evidence`,onClick:()=>c(-1),children:`←`}),(0,$.jsxs)(`span`,{className:`mono`,children:[m<0?`–`:m+1,` / `,i.length]}),(0,$.jsx)(`button`,{"aria-label":`Next evidence`,onClick:()=>c(1),children:`→`})]});return(0,$.jsxs)(`article`,{ref:_,className:`ask-entry${p||e.status!==`ok`?``:` past`}`,"data-entry":e.id,onClick:t=>{e.status===`ok`&&!p&&!t.target.closest(`a, button`)&&a(u)},children:[(0,$.jsx)(`h2`,{className:`ask-q`,children:e.status===`ok`&&!p?(0,$.jsx)(`button`,{className:`ask-reshow`,"aria-label":`Show the evidence for: ${e.q}`,onClick:()=>a(u),children:e.q}):e.q}),e.status===`ok`&&(0,$.jsx)(`div`,{className:`ask-stats mono`,children:Vv(e)}),e.status===`pending`&&(0,$.jsx)(`p`,{className:`ask-wait`,children:`Reading the corpus…`}),e.status===`error`&&(0,$.jsxs)(`p`,{className:`ask-error`,children:[e.message,` `,(0,$.jsx)(`button`,{onClick:l,children:`Retry`})]}),e.status===`ok`&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`ask-answer`,children:f.map((e,t)=>e.type===`h`?(0,$.jsx)(`h3`,{children:y(e.parts)},t):e.type===`li`?(0,$.jsx)(`p`,{className:`li l${e.level}`,children:y(e.parts)},t):(0,$.jsx)(`p`,{children:y(e.parts)},t))}),u.located.length>0&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`ask-label`,children:[(0,$.jsx)(`span`,{id:`ev-${e.id}`,children:`Evidence on the map`}),x]}),(0,$.jsxs)(`table`,{className:`ask-table`,"aria-labelledby":`ev-${e.id}`,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`#`}),(0,$.jsx)(`th`,{children:`Instrument`}),(0,$.jsx)(`th`,{children:`Site`}),(0,$.jsx)(`th`,{className:`r`,children:`Depth`})]})}),(0,$.jsx)(`tbody`,{children:u.located.map(e=>b(e.n,(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`td`,{className:e.kind===`site`?`k-site`:void 0,children:e.kind===`site`?`site`:e.code}),(0,$.jsx)(`td`,{children:e.site}),(0,$.jsx)(`td`,{className:`r`,children:Mv(e.depth)})]}),e.color,e.excerpt&&(e.quote?(0,$.jsx)(`q`,{children:e.excerpt}):e.excerpt)))})]})]}),u.events&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`ask-label`,children:[(0,$.jsx)(`span`,{id:`ev-${e.id}`,children:`Earthquakes on the map`}),x]}),(0,$.jsx)(`div`,{className:`ask-scroll`,children:(0,$.jsxs)(`table`,{className:`ask-table`,"aria-labelledby":`ev-${e.id}`,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`#`}),(0,$.jsxs)(`th`,{children:[`Time `,Iv(u.count?.tz,new Date(u.events[0]?.time??Date.now()))]}),(0,$.jsx)(`th`,{children:`Mag`}),(0,$.jsx)(`th`,{className:`r`,children:`Depth`})]})}),(0,$.jsx)(`tbody`,{children:u.events.map(e=>b(e.n,(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`td`,{children:Pv(e.time,u.count?.tz)}),(0,$.jsx)(`td`,{children:Lv(e.mag)}),(0,$.jsx)(`td`,{className:`r`,children:Rv(e.depth_km)})]}),`#ffcc66`,zv(e,u.count?.tz)))})]})})]}),!u.located.length&&!u.events&&(0,$.jsx)(`p`,{className:`ask-note`,children:u.count?`This answer has the day's count but not its hypocentres.`:`No mapped instruments in this answer.`}),u.documents.length>0&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`ask-label`,children:(0,$.jsx)(`span`,{children:`Further reading`})}),(0,$.jsx)(`ul`,{className:`ask-reading`,children:u.documents.map(e=>(0,$.jsxs)(`li`,{className:p&&n===e.n?`on`:``,children:[(0,$.jsx)(`span`,{className:`mono`,children:e.n}),e.url?(0,$.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,title:e.quote?e.excerpt:void 0,children:[e.title,` ↗`]}):(0,$.jsx)(`span`,{children:e.title})]},e.n))})]})]})]})}var Wv=(e,t,n)=>Math.min(n,Math.max(t,e)),Gv=e=>1-(1-e)**3,Kv=(e,t=!1)=>Wv(e*.085,.12,70)*(t?1.8:1),qv=(e,t,n=!1,r=120,i=600)=>n?1:Gv(Wv((e-t*r)/i,0,1)),Jv=(e,t=!1,n=300)=>t?0:1-Gv(Wv(e/n,0,1)),Yv=(e,t=1500)=>-(t+(e??0)*1e3),Xv=e=>7+6*Wv((e??-1)+1,0,4);function Zv([e,t,n],r,i=18){let a=n>1;if(!a&&e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom)return null;let o=(r.left+r.right)/2,s=(r.top+r.bottom)/2,c=e-o,l=t-s;a&&(c=-c,l=-l),!c&&!l&&(l=1);let u=(r.right-r.left)/2-i,d=(r.bottom-r.top)/2-i,f=Math.min(c?u/Math.abs(c):1/0,l?d/Math.abs(l):1/0);return{x:Math.round(o+c*f),y:Math.round(s+l*f),angle:Math.atan2(l,c)}}function Qv(e){let t=[],n=new Map,r=[];for(let i of e){if(i.kind===`cable`){r.push(i);continue}let e=`${i.lon.toFixed(4)},${i.lat.toFixed(4)}`,a=n.get(e);a||(a={key:e,ns:[],items:[],lon:i.lon,lat:i.lat,color:i.color,kind:i.kind},n.set(e,a),t.push(a)),a.ns.push(i.n),a.items.push(i)}return{spikes:t,cables:r}}function $v(e,{az:t,exag:n,polar:r=.8}){let i=e.map(e=>e[0]),a=e.map(e=>e[1]),[o,s,c,l]=[Math.min(...i),Math.max(...i),Math.min(...a),Math.max(...a)],u=Math.hypot((s-o)*Xl,(l-c)*Zl);return{ll:[(o+s)/2,(c+l)/2],dist:Math.max(9,u*2.4),polar:r,az:t,exag:n}}var ey=300,ty=3e3,ny=30,ry=12,iy=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ay=`
  attribute vec2 corner;
  uniform vec3 uBase; uniform float uHeight, uWidth; uniform vec2 uRes;
  varying vec2 vC;
  void main() {
    vec4 b = projectionMatrix * viewMatrix * vec4(uBase, 1.0);
    vec4 t = projectionMatrix * viewMatrix * vec4(uBase + vec3(0.0, uHeight, 0.0), 1.0);
    vec2 d = (t.xy / t.w - b.xy / b.w) * uRes;
    float len = length(d);
    vec2 dir = len > 1e-3 ? d / len : vec2(0.0, 1.0);
    vec4 p = mix(b, t, corner.y);
    p.xy += vec2(-dir.y, dir.x) * corner.x * uWidth / uRes * p.w;   // a constant width in pixels
    gl_Position = p; vC = corner;
  }`,oy=`
  uniform vec3 uColor; uniform float uGlow, uAlpha;
  varying vec2 vC;
  void main() {
    float x = abs(vC.x);
    float core = 1.0 - smoothstep(0.03, 0.12, x);                            // a hot line ~3 px wide
    float glow = exp(-x * x * 50.0) * 0.8 + exp(-x * x * 8.0) * 0.25;        // tight bloom, then a wide haze
    float along = pow(1.0 - vC.y, 0.7) * smoothstep(0.0, 0.04, 1.0 - vC.y);  // bright at the seafloor, fading to the tip
    vec3 col = mix(uColor * 1.25, vec3(1.0, 0.96, 0.86), core * (uGlow > 1.2 ? 0.6 : 0.3));   // the family colour, hot at the core
    gl_FragColor = vec4(col, (core * 0.95 + glow * uGlow) * along * uAlpha);
  }`,sy=`
  attribute float size, fade;
  uniform float uPx;
  varying float vFade;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vFade = fade; gl_PointSize = size * uPx;
  }`,cy=`
  uniform vec3 uColor;
  varying float vFade;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0 || vFade <= 0.0) discard;
    float a = ((1.0 - smoothstep(0.0, 0.5, r)) + exp(-r * r * 4.0) * 0.5) * vFade;
    gl_FragColor = vec4(mix(uColor, vec3(1.0), (1.0 - smoothstep(0.0, 0.35, r)) * 0.7), a);
  }`,ly=`
  attribute float elev, order, size, idx;
  uniform float uExag, uFlat, uT, uActive, uPx, uDur;
  varying float vFresh, vOn;
  void main() {
    vec3 p = position; p.y = elev * 0.001 * uExag * (1.0 - uFlat);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float age = uT - order * uDur;
    vOn = abs(idx - uActive) < 0.5 ? 1.0 : 0.0;
    vFresh = age < 0.0 ? -1.0 : exp(-age * 2.2);
    gl_PointSize = age < 0.0 ? 0.0 : uPx * size * (1.0 + vFresh * 1.5 + vOn * 1.2);
  }`,uy=`
  uniform float uAlpha;
  varying float vFresh, vOn;
  void main() {
    if (vFresh < -0.5) discard;
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    float core = 1.0 - smoothstep(0.1, 0.5, r), glow = exp(-r * r * 3.0) * 0.6;
    vec3 col = mix(vec3(1.0, 0.62, 0.22), vec3(1.0, 0.95, 0.8), core);
    col = mix(col, vec3(1.0), vOn * 0.6);
    gl_FragColor = vec4(col, min(1.0, (core + glow) * (0.75 + vFresh * 0.7 + vOn * 0.5)) * uAlpha);
  }`,dy={transparent:!0,depthTest:!1,depthWrite:!1,blending:2};function fy(e,t=.3){let n=[];for(let r=0;r<e.length-1;r++){let[i,a]=[e[r],e[r+1]],o=Math.max(1,Math.ceil(Math.hypot((a[0]-i[0])*Xl,(a[1]-i[1])*Zl)/t));for(let e=0;e<o;e++)n.push([i[0]+(a[0]-i[0])*e/o,i[1]+(a[1]-i[1])*e/o])}return n.push(e[e.length-1]),n}var py=class{constructor(e,t,n,r={}){this.c=e,this.sc=t,this.b=n,this.h=r,this.sets=[],this.active=null,this.hover=null,this._geo=new Xr,this._geo.setAttribute(`position`,new Hr(new Float32Array(12),3)),this._geo.setAttribute(`corner`,new Hr([-1,0,1,0,-1,1,1,1],2)),this._geo.setIndex([0,1,2,2,1,3]),this._last=performance.now()}_el(e,t,n=this.c){let r=document.createElement(`div`);return r.className=e,r.innerHTML=t,n.appendChild(r),r}get current(){return this.sets.find(e=>!e.sinkT0)??null}show(e){let t=performance.now(),n=this.sc.reducedMotion,r=0;for(let e of this.sets)e.sinkT0||(e.sinkT0=t,e.hasItems&&(r=n?0:ey));if(this.active=null,this.hover=null,!e)return;let i={ev:e,t0:t+r,spikes:[],cables:[],quakes:null},{spikes:a,cables:o}=Qv(e.located);a.forEach((e,t)=>i.spikes.push(this._spike(e,t))),o.forEach((e,t)=>i.cables.push(this._cable(e,a.length+t))),e.events?.length&&(i.quakes=this._quakes(e.events)),i.hasItems=i.spikes.length+i.cables.length>0||!!i.quakes,this.sets.push(i)}clear(){this.show(null)}setActive(e){this.active=e}setHover(e){this.hover=e}_spike(e,t){let n=new yi({vertexShader:ay,fragmentShader:oy,...dy,side:2,uniforms:{uBase:{value:new Y},uHeight:{value:0},uWidth:{value:10},uRes:{value:new K(innerWidth,innerHeight)},uColor:{value:new Mr(e.color)},uGlow:{value:1},uAlpha:{value:1}}}),r=new ci(this._geo,n);r.frustumCulled=!1,r.renderOrder=ny,this.sc.scene.add(r);let i=e.ns.length>3?`${e.ns.slice(0,2).join(`·`)} +${e.ns.length-2}`:e.ns.join(`·`),a={hit:this._el(`ev-hit`,``),halo:this._el(`ev-halo`,`<i></i><i></i>`),base:this._el(`ev-base`,``),tag:this._el(`ev-tag`,`<span>${iy(i)}</span>`),chip:this._el(`ev-chip`,`<b>${iy(i)}</b><span>${iy(e.items[0].kind===`site`?e.items[0].site:e.items[0].code)}</span><i>→</i>`)};for(let t of Object.values(a))t.style.setProperty(`--c`,e.color);return this._wire(a,e.ns),{...e,i:t,mesh:r,mat:n,dom:a,label:i,grow:1,vary:.8+.4*(t*.618034%1)}}_wire(e,t){let n=()=>t.includes(this.active)?t[(t.indexOf(this.active)+1)%t.length]:t[0];for(let r of[e.hit,e.base,e.tag,e.chip].filter(Boolean))r.addEventListener(`mouseenter`,()=>this.h.onHover?.(t.includes(this.active)?this.active:t[0])),r.addEventListener(`mouseleave`,()=>this.h.onHover?.(null)),r.addEventListener(`click`,e=>{e.stopPropagation(),this.h.onSelect?.(n())})}_cable(e,t){let n=e.layers.map(e=>this.b.das?.layers?.find(t=>t.id===e)).filter(Boolean).map((t,n)=>{let r={color:e.color,transparent:!0,depthTest:!1,depthWrite:!1},i=new ql(new Kl,new El({...r,linewidth:11,opacity:.3})),a=new ql(new Kl,new El({...r,linewidth:3,opacity:1})),o=new Float32Array(66),s=new Float32Array(22),c=new Float32Array(22),l=new Xr;l.setAttribute(`position`,new zr(o,3)),l.setAttribute(`size`,new zr(s,1)),l.setAttribute(`fade`,new zr(c,1));let u=new mc(l,new yi({vertexShader:sy,fragmentShader:cy,...dy,uniforms:{uPx:{value:Math.min(devicePixelRatio,2)},uColor:{value:new Mr(e.color)}}}));for(let e of[i,a,u])e.renderOrder=28,e.frustumCulled=!1,this.sc.scene.add(e);return{lonlat:fy(t.coords),glow:i,core:a,pulse:u,phase:n*.37,world:null}}),r={base:this._el(`ev-base cable`,``),halo:this._el(`ev-halo`,`<i></i><i></i>`),tag:this._el(`ev-tag`,`<span>${iy(e.n)}</span>`),chip:this._el(`ev-chip`,`<b>${iy(e.n)}</b><span>${iy(e.code)}</span><i>→</i>`)};for(let t of Object.values(r))t.style.setProperty(`--c`,e.color);return this._wire(r,[e.n]),{item:e,ns:[e.n],lon:e.lon,lat:e.lat,i:t,paths:n,dom:r,label:String(e.n),grow:1}}_quakes(e){let t=e.length,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),s=this.sc.subsurface?.data?.datumM,c=Date.parse(e[0].time),l=Math.max(1,Date.parse(e[t-1].time)-c);e.forEach((e,t)=>{n[t*3]=Ql(e.lon),n[t*3+2]=$l(e.lat),r[t]=Yv(e.depth_km,s),i[t]=(Date.parse(e.time)-c)/l,a[t]=Xv(e.mag),o[t]=t});let u=new Xr;for(let[e,t,s]of[[`position`,n,3],[`elev`,r,1],[`order`,i,1],[`size`,a,1],[`idx`,o,1]])u.setAttribute(e,new zr(t,s));let d=this.sc.U,f=new yi({vertexShader:ly,fragmentShader:uy,...dy,uniforms:{uExag:d.exag,uFlat:d.flat,uT:{value:0},uActive:{value:-1},uPx:{value:Math.min(devicePixelRatio,2)},uDur:{value:ty/1e3},uAlpha:{value:1}}}),p=new mc(u,f);return p.frustumCulled=!1,p.renderOrder=29,this.sc.scene.add(p),{pts:p,mat:f,events:e,halo:this._el(`ev-halo quake`,`<i></i><i></i>`)}}_rect(){let[e,t]=this.sc.insets??[16,16],n=this.sc.insetsY?.[1]??16;return{left:e,right:innerWidth-t,top:16,bottom:innerHeight-n}}update(e=performance.now()){let t=this.sc,n=Math.min(.05,(e-this._last)/1e3),r=t.reducedMotion,i=t.e;this._last=e;let a=t.frame?.dist??50,o=this._rect(),s=this.hover??this.active,c=(e,n)=>Math.min(0,t.elevAt(e,n))*i;for(let i of[...this.sets]){let l=e-i.t0,u=i.sinkT0!=null,d=u?Jv(e-i.sinkT0,r):1;if(u&&d<=0){this._dispose(i);continue}let f=!u&&s!=null&&i.ev.located.some(e=>e.n===s),p=[],m=[];for(let h of[...i.spikes,...i.cables]){let i=!u&&h.ns.includes(s);h.grow=Bu(h.grow,i?1.8:1,n,9,r);let g=(u?d:qv(l,h.i,r))||0,_=Ql(h.lon),v=$l(h.lat),y=c(h.lon,h.lat),[b,x,S]=t.project(_,y,v),C=S<1,w=[b,x];if(h.mesh){let e=Kv(a)*h.grow*(i?1:h.vary)*g,n=h.mat.uniforms;n.uBase.value.set(_,y,v),n.uHeight.value=e,n.uRes.value.set(innerWidth,innerHeight),n.uWidth.value=i?44:28,n.uGlow.value=i?1.6:1,n.uColor.value.set(i&&h.items.find(e=>e.n===s)?.color||h.color),n.uAlpha.value=(f&&!i?.45:1)*(u?d:Math.min(1,g*3)),h.mesh.visible=C&&g>.001;let r=t.project(_,y+e,v);w=[r[0],r[1]]}else this._updateCable(h,e,i,f,u?d:Math.min(1,g*2),r,c);let T=C&&g>.02,E=h.dom,D=f&&!i,O=(e,t,n,r)=>{e.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px)`,e.style.opacity=r?D?.55:1:0,e.style.pointerEvents=r?`auto`:`none`};O(E.base,b,x,T);let k=i&&h.ns.length>1?`${s} +${h.ns.length-1}`:h.label;if(E.tag.textContent!==k&&(E.tag.firstChild.textContent=k),m.push({d:E.tag,x:w[0],y:w[1],w:12+7*k.length,vis:T&&g>.3,place:O}),E.halo.style.transform=`translate(${b.toFixed(1)}px, ${x.toFixed(1)}px)`,E.halo.classList.toggle(`on`,i&&T),E.tag.classList.toggle(`on`,i),E.base.classList.toggle(`on`,i),E.hit){let e=Math.hypot(w[0]-b,w[1]-x),t=Math.atan2(w[1]-x,w[0]-b)-Math.PI/2;E.hit.style.transform=`translate(${b.toFixed(1)}px, ${x.toFixed(1)}px) rotate(${t.toFixed(3)}rad) translateY(${ry}px)`,E.hit.style.height=`${Math.max(0,e-ry).toFixed(1)}px`,E.hit.style.pointerEvents=T?`auto`:`none`}let A=!u&&g>.5?Zv([b,x,S],o):null;E.chip.style.display=A?`flex`:`none`,A&&p.push({d:E.chip,chip:A,s:h})}m.sort((e,t)=>e.y-t.y),m.forEach((e,t)=>{for(let n=!0,r=0;n&&r<8;r++){n=!1;for(let r of m.slice(0,t))r.vis&&e.vis&&Math.abs(r.x-e.x)<(r.w+e.w)/2+2&&Math.abs(r.y-e.y)<20&&(e.y=r.y-21,n=!0)}e.place(e.d,e.x,e.y,e.vis)}),p.sort((e,t)=>e.chip.y-t.chip.y||e.chip.x-t.chip.x);let h=null;for(let e of p){h&&Math.abs(h.chip.x-e.chip.x)<120&&e.chip.y-h.chip.y<24&&(e.chip.y=h.chip.y+24);let t=e.d.offsetWidth||90,n=Math.min(o.right-t-6,Math.max(o.left+6,e.chip.x-t/2));e.d.style.transform=`translate(${n.toFixed(0)}px, ${(e.chip.y-10).toFixed(0)}px)`,e.d.querySelector(`i`).style.transform=`rotate(${e.chip.angle.toFixed(3)}rad)`,e.d.classList.toggle(`on`,e.s.ns.includes(s)),h=e}i.chipsShown=p.map(e=>({ns:e.s.ns,x:e.chip.x,y:e.chip.y})),i.quakes&&this._updateQuakes(i,l,u?d:1,s,r)}let l=t.subsurface;l?.history&&(l.history.value=Bu(l.history.value,this.current?.quakes?.15:1,n,4,r))}_updateCable(e,t,n,r,i,a,o){let s=this.sc.e,c=.07+.022*this.sc.U.exag.value;for(let l of e.paths){if(!l.world||l.e!==s){l.world=l.lonlat.map(([e,t])=>[Ql(e),o(e,t)+c,$l(t)]),l.cum=[0];for(let e=1;e<l.world.length;e++)l.cum.push(l.cum[e-1]+Math.hypot(l.world[e][0]-l.world[e-1][0],l.world[e][2]-l.world[e-1][2]));let e=l.world.flat();for(let t of[l.glow,l.core])t.geometry.dispose(),t.geometry=new Kl,t.geometry.setPositions(e);l.e=s}for(let e of[l.glow,l.core])e.material.resolution.set(innerWidth,innerHeight);let e=r&&!n?.4:1;l.glow.material.opacity=(n?.42:.28)*i*e,l.glow.material.linewidth=n?16:11,l.core.material.opacity=.95*i*e;let u=l.cum[l.cum.length-1],d=l.pulse.geometry.attributes.position,f=l.pulse.geometry.attributes.size,p=l.pulse.geometry.attributes.fade;if(l.pulse.visible=!a&&i>.05&&u>0,!l.pulse.visible)continue;let m=(t/1e3/3.1+l.phase)%1*u*1.15,h=u*.011;for(let t=0;t<d.count;t++){let r=m-t*h,a=r>=0&&r<=u,o=1;for(;o<l.cum.length-1&&l.cum[o]<r;)o++;let s=l.world[o-1],c=l.world[o],g=a?(r-l.cum[o-1])/Math.max(1e-6,l.cum[o]-l.cum[o-1]):0;d.setXYZ(t,s[0]+(c[0]-s[0])*g,s[1]+(c[1]-s[1])*g+.01,s[2]+(c[2]-s[2])*g),f.setX(t,(n?22:16)*(1-t/d.count*.75)),p.setX(t,a?(1-t/d.count)*i*e:0)}d.needsUpdate=f.needsUpdate=p.needsUpdate=!0}}_updateQuakes(e,t,n,r,i){let a=e.quakes,o=a.mat.uniforms;o.uT.value=i?1e6:Math.max(0,t/1e3),o.uAlpha.value=n;let s=r!=null&&e.ev.events?e.ev.events.findIndex(e=>e.n===r):-1;o.uActive.value=s;let c=s>=0?e.ev.events[s]:null;if(c){let e=this.sc.project(Ql(c.lon),Yv(c.depth_km,this.sc.subsurface?.data?.datumM)*this.sc.e,$l(c.lat));a.halo.style.transform=`translate(${e[0].toFixed(1)}px, ${e[1].toFixed(1)}px)`}a.halo.classList.toggle(`on`,!!c&&n>.5)}snapshot(){let e=this.current;if(!e)return{shown:!1,spikes:[],cables:[],chips:[],quakes:0};let t=e=>{let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,visible:e.style.opacity!==`0`&&e.style.display!==`none`}};return{shown:!0,active:this.active,hover:this.hover,spikes:e.spikes.map(e=>({ns:e.ns,kind:e.kind,height:e.mat.uniforms.uHeight.value,tag:t(e.dom.tag),base:t(e.dom.base)})),cables:e.cables.map(e=>({ns:e.ns,layers:e.item.layers,tag:t(e.dom.tag)})),chips:e.chipsShown??[],quakes:e.quakes?.events.length??0}}_dispose(e){for(let t of e.spikes)this.sc.scene.remove(t.mesh),t.mat.dispose();for(let t of e.cables)for(let e of t.paths)for(let t of[e.glow,e.core,e.pulse])this.sc.scene.remove(t),t.geometry.dispose(),t.material.dispose();for(let t of[...e.spikes,...e.cables])for(let e of Object.values(t.dom))e.remove();e.quakes&&(this.sc.scene.remove(e.quakes.pts),e.quakes.pts.geometry.dispose(),e.quakes.mat.dispose(),e.quakes.halo.remove()),this.sets=this.sets.filter(t=>t!==e)}dispose(){for(let e of[...this.sets])this._dispose(e);this._geo.dispose(),this.c.innerHTML=``}};function my(){let[e,t]=(0,g.useState)(null),[n,r]=(0,g.useState)(null);return(0,g.useEffect)(()=>{S().then(t,r)},[]),n?(0,$.jsx)(`div`,{className:`app-message`,role:`alert`,children:(0,$.jsxs)(`div`,{children:[n instanceof b?`The atlas data bundle has not been built yet.`:n.message,n instanceof b&&(0,$.jsx)(`code`,{children:`PYTHONPATH=src .venv/bin/python -m atlas_map_data.build_atlas_bundle`})]})}):e?(0,$.jsx)(hy,{bundle:e,onError:r}):(0,$.jsx)(`div`,{className:`app-message`,children:`Loading the atlas…`})}function hy({bundle:e,onError:t}){let n=(0,g.useRef)(null),r=(0,g.useRef)(null),i=(0,g.useRef)(null),a=(0,g.useRef)(null),o=(0,g.useRef)(null),s=(0,g.useRef)(null),c=(0,g.useRef)(null),[l,u]=(0,g.useState)(null),[d,f]=(0,g.useState)(`overview`),[p,m]=(0,g.useState)(new Set),[h,_]=(0,g.useState)(null),[v,y]=(0,g.useState)(null),[b,x]=(0,g.useState)(null),[S,C]=(0,g.useState)(!1),[w,T]=(0,g.useState)(!1),[E,D]=(0,g.useState)(kv),[O,k]=(0,g.useState)({evidence:null,activeN:null,hoverN:null}),[A,j]=(0,g.useState)(!1),M=(0,g.useRef)(!1),ee=(0,g.useCallback)(e=>{y(e.id),C(!1),x(null),T(!1),_(null),i.current?.setSelected(e.id)},[]),N=(0,g.useCallback)((e,t)=>{ee(e),t.flyToPoint(e.lon,e.lat,6)},[ee]),P=(0,g.useCallback)(()=>{y(null),x(null),i.current?.setSelected(null)},[]),te=(0,g.useCallback)(()=>{P(),C(!0),T(!1)},[P]),ne=(0,g.useCallback)(()=>{C(!1),x(null)},[]),F=(0,g.useCallback)(t=>{let n=e.sensorById[t],r=n&&e.siteById[n.site];return n?(r?ee(r):te(),x(t),!0):!1},[e,ee,te]),I=(0,g.useCallback)((t,n)=>{if(!F(t))return!1;let r=e.sensorById[t],i=e.siteById[r.site];return i&&r.lat!=null&&n.flyToPoint(i.lon,i.lat,6),!0},[e,F]),L=(0,g.useCallback)((t,n)=>{f(t),n.flyTo(n.fit(t===`overview`?e.overview:e.regions.find(e=>e.key===t).view))},[e]);(0,g.useEffect)(()=>{let a,o,l,d=!1;return au(e.terrainMeta).then(async t=>{if(d||(a=new Gu(n.current,e,t),await a.ready,d))return;a.addCable(e.cable),a.addDas(e.das),a.addMoorings(e.sites);let f=e=>({x:e.clientX,y:e.clientY});o=new ud(r.current,e,a,{onRegionClick:e=>L(e,a),onSiteClick:e=>N(e,a),onSiteHover:(e,t)=>_(t?{kind:`site`,item:e,...f(t)}:null),onNodeHover:(e,t)=>_(t?{kind:`node`,item:e,...f(t)}:null),onNodeClick:e=>a.flyToPoint(e.lon,e.lat,30),onCableHover:(e,t)=>_(n=>t?{kind:`cable`,item:e,...f(t)}:n?.kind===`cable`?null:n)}),i.current=o,l=new py(s.current,a,e,{onHover:e=>k(t=>({...t,hoverN:e})),onSelect:e=>re.current.select(e)}),c.current=l,a.onFrame=()=>{o.update(),l.update()},window.__atlas={scene:a,layer:o,flyTo:e=>a.flyTo(e),lod:()=>a.auv?.stats(),evidence:()=>({...l.snapshot(),located:re.current.evidence?.located??[]}),open:t=>e.sensorById[t]?I(t,a):e.siteById[t]?(N(e.siteById[t],a),!0):!1},u(a)}).catch(e=>{d||t?.(e)}),()=>{d=!0,l?.dispose(),o?.dispose(),a?.dispose()}},[e,N,I,L,t]);let R=E?O.evidence:null,z=(0,g.useRef)(null),B=!!(R?.located.length||R?.events);(0,g.useEffect)(()=>{l&&(i.current?.setFocus(p),l.setMute(p.size||B?.55:0))},[p,l,B]),(0,g.useEffect)(()=>{if(!l)return;let e=R;if(c.current?.show(e),i.current?.setEvidence(e?.located.length?new Set(e.located.map(e=>e.siteId).filter(Boolean)):null),e?.events&&l.subsurface?(A||(M.current=!0,j(!0)),l.setSubsurface(!0)):M.current&&(M.current=!1,j(!1),l.setSubsurface(!1)),e?.located.length&&z.current!==e){z.current=e;let t=l.camera.position.clone().sub(l.controls.target),n=l.U.flat.value>.5?.001:Math.min(.95,Math.max(.6,Math.acos(t.y/t.length())));l.flyTo(l.fit($v(e.located.map(e=>[e.lon,e.lat]),{az:Math.atan2(t.x,t.z),exag:l.U.exag.value,polar:n})))}},[R,l]),(0,g.useEffect)(()=>{c.current?.setActive(O.activeN)},[O.activeN,l]),(0,g.useEffect)(()=>{c.current?.setHover(O.hoverN)},[O.hoverN,l]);let re=(0,g.useRef)({});re.current={evidence:O.evidence,select:t=>{k(e=>({...e,activeN:t}));let n=t==null?null:hv(O.evidence).find(e=>e.n===t);if(!n||!l)return;let r=n.time?Yv(n.depth_km,l.subsurface?.data?.datumM):void 0,i=n.kind===`cable`?70:n.time?Math.min(25,Math.max(12,l.frame.dist??12)):7;if(l.flyToPoint(n.lon,n.lat,i,r),!(n.kind===`sensor`&&F(n.id))){if(n.kind===`site`&&e.siteById[n.id])return ee(e.siteById[n.id]);P(),C(!1)}}};let ie=(!!v||S)&&!w;(0,g.useLayoutEffect)(()=>{let e=document.documentElement.style;e.setProperty(`--right-inset`,`${ie?N_.side:N_.none}px`),e.setProperty(`--side-reserve`,w?`284px`:`0px`)},[ie,w]),(0,g.useLayoutEffect)(()=>{let e=a.current,t=o.current;if(!l||!e)return;let n=document.querySelector(`.families`),r=e.parentElement,i=()=>l.setInsetsY(P_(e,t),n?innerHeight-n.getBoundingClientRect().top:N_.none);i();let s=new ResizeObserver(i);for(let i of[e,t,r,n])i&&s.observe(i);return addEventListener(`resize`,i),()=>{s.disconnect(),removeEventListener(`resize`,i)}},[l]),(0,g.useLayoutEffect)(()=>{if(!l)return;let t=!l.framed;l.setInsets(E?N_.chat:N_.none,ie?N_.side:N_.none,t),t&&l.jumpTo(l.fit(e.overview))},[l,E,ie,e]);let ae=v?e.siteById[v]:null,oe=b?e.sensorById[b]:null,se=t=>oe&&(0,$.jsx)(g_,{sensor:oe,bundle:e,backLabel:t,onBack:()=>x(null)},b);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`canvas`,{ref:n,className:`atlas-scene`,"aria-label":`3D map of the seafloor off Oregon`}),(0,$.jsx)(`div`,{id:`atlas-overlay`,ref:r}),(0,$.jsx)(`div`,{id:`atlas-evidence`,ref:s}),l&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`hud-top`,children:[(0,$.jsxs)(`div`,{className:`left-stack`,ref:a,children:[(0,$.jsx)(bd,{bundle:e,onPick:t=>t.kind===`site`?N(e.siteById[t.id],l):I(t.id,l)}),(0,$.jsx)(kd,{regions:e.regions,sensors:e.sensors,active:d,onSelect:e=>L(e,l),unplaced:e.unplaced?.length??0,unplacedOpen:S,onUnplaced:()=>S?ne():te()})]}),(0,$.jsx)(`div`,{className:`right-stack`,ref:o,children:(0,$.jsx)(Od,{scene:l,deep:A,onDeep:j,credit:e.terrainMeta.credit,auv:!!l.auv,subsurface:A?l.subsurface?.credit:null})})]}),(0,$.jsx)(Ad,{credit:e.terrainMeta.credit,auv:!!l.auv,subsurface:A}),(0,$.jsx)(_d,{families:e.families,sensors:e.sensors,focus:p,onChange:m}),(0,$.jsx)(G_,{hover:h,bundle:e}),(0,$.jsx)(Hv,{bundle:e,evidence:R,activeN:O.activeN,hoverN:O.hoverN,panelOpen:ie,onShow:e=>k({evidence:e,activeN:null,hoverN:null}),onHover:e=>k(t=>({...t,hoverN:e})),onSelect:e=>re.current.select(e),onOpenChange:D}),ae&&(0,$.jsx)(j_,{site:ae,bundle:e,elevAt:l.elevAt,onClose:P,onBack:()=>x(null),onSensor:x,minimized:w,onMinimize:T,children:se(ae.label)},v),!ae&&S&&(0,$.jsx)(M_,{bundle:e,onClose:ne,onBack:()=>x(null),onSensor:x,minimized:w,onMinimize:T,children:se(`Unplaced sensors`)})]})]})}(0,_.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(my,{}));