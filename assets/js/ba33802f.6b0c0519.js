/*! For license information please see ba33802f.6b0c0519.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[917334],{871906:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=n(785893),o=n(511151);const c={id:"core-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc"},a=void 0,s={id:"reference/core-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc",source:"@site/../docs/reference/core-plugin-api.routefunc.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.routefunc",permalink:"/docs/reference/core-plugin-api.routefunc",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.routefunc.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc"}},i={},u=[{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routefunc",children:(0,t.jsx)(r.code,{children:"RouteFunc"})})]}),"\n",(0,t.jsx)(r.p,{children:"TS magic for handling route parameters."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type RouteFunc<Params extends AnyParams> = (...[params]: Params extends undefined ? readonly [] : readonly [Params]) => string;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.anyparams",children:"AnyParams"})]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"The extra TS magic here is to require a single params argument if the RouteRef had at least one param defined, but require 0 arguments if there are no params defined. Without this we'd have to pass in empty object to all parameter-less RouteRefs just to make TypeScript happy, or we would have to make the argument optional in which case you might forget to pass it in when it is actually required."})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},675251:(e,r,n)=>{var t=n(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,c={},u=null,p=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:p,props:c,_owner:s.current}}r.Fragment=c,r.jsx=u,r.jsxs=u},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>a});var t=n(667294);const o={},c=t.createContext(o);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);