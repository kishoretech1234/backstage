/*! For license information please see ed9012ec.03dbda22.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[611384],{521506:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(785893),s=t(511151);const o={id:"core-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()"},c=void 0,i={id:"reference/core-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()",source:"@site/../docs/reference/core-plugin-api.userouteref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.userouteref",permalink:"/docs/reference/core-plugin-api.userouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.userouteref.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()"}},a={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.userouteref",children:(0,n.jsx)(r.code,{children:"useRouteRef"})})]}),"\n",(0,n.jsx)(r.p,{children:"React hook for constructing URLs to routes."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function useRouteRef<Optional extends boolean, Params extends AnyParams>(routeRef: ExternalRouteRef<Params, Optional>): Optional extends true ? RouteFunc<Params> | undefined : RouteFunc<Params>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"routeRef"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.externalrouteref",children:"ExternalRouteRef"}),"<Params, Optional>"]}),(0,n.jsx)(r.td,{children:"The ref to route that should be converted to URL."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Optional extends true ? ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routefunc",children:"RouteFunc"}),"<Params> | undefined : ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routefunc",children:"RouteFunc"}),"<Params>"]}),"\n",(0,n.jsxs)(r.p,{children:["A function that will in turn return the concrete URL of the ",(0,n.jsx)(r.code,{children:"routeRef"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,d=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:d,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>c});var n=t(667294);const s={},o=n.createContext(s);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);