/*! For license information please see 75c448d8.fe7d6c31.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[82596],{684919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var r=n(824246),o=n(511151);const c={id:"frontend-plugin-api.createextensionoptions.configschema",title:"CreateExtensionOptions.configSchema",description:"API reference for CreateExtensionOptions.configSchema"},i=void 0,u={id:"reference/frontend-plugin-api.createextensionoptions.configschema",title:"CreateExtensionOptions.configSchema",description:"API reference for CreateExtensionOptions.configSchema",source:"@site/../docs/reference/frontend-plugin-api.createextensionoptions.configschema.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createextensionoptions.configschema",permalink:"/docs/reference/frontend-plugin-api.createextensionoptions.configschema",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createextensionoptions.configschema.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createextensionoptions.configschema",title:"CreateExtensionOptions.configSchema",description:"API reference for CreateExtensionOptions.configSchema"}},s={},a=[];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createextensionoptions",children:(0,r.jsx)(t.code,{children:"CreateExtensionOptions"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.createextensionoptions.configschema",children:(0,r.jsx)(t.code,{children:"configSchema"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["use ",(0,r.jsx)(t.code,{children:"config.schema"})," instead"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"configSchema?: PortableSchema<TConfig>;\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,c={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:f,props:c,_owner:u.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=_.prototype;var v=b.prototype=new g;v.constructor=b,h(v,_.prototype),v.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,c={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!k.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];c.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:u,props:c,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,c,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===c?"."+O(s,0):c,x(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),t.push(i)),1;if(s=0,c=""===c?".":c+":",x(e))for(var a=0;a<e.length;a++){var f=c+O(u=e[a],a);s+=R(u,t,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)s+=R(u=u.value,t,o,f=c+O(u,a++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)S.call(t,a)&&!k.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:n,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>i});var r=n(667294);const o={},c=r.createContext(o);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);