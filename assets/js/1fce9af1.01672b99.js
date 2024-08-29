/*! For license information please see 1fce9af1.01672b99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[43460],{711613:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var t=n(785893),a=n(511151);const c={id:"frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"},i=void 0,p={id:"reference/frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()",source:"@site/../docs/reference/frontend-app-api.createspecializedapp.md",sourceDirName:"reference",slug:"/reference/frontend-app-api.createspecializedapp",permalink:"/docs/reference/frontend-app-api.createspecializedapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-app-api.createspecializedapp.md",tags:[],version:"current",frontMatter:{id:"frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"}},o={},s=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-app-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-app-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-app-api.createspecializedapp",children:(0,t.jsx)(r.code,{children:"createSpecializedApp"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Synchronous version of ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-app-api.createapp",children:"createApp()"}),", expecting all features and config to have been loaded already."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createSpecializedApp(options?: {\n    features?: FrontendFeature[];\n    config?: ConfigApi;\n    bindRoutes?(context: {\n        bind: CreateAppRouteBinder;\n    }): void;\n}): {\n    createRoot(): JSX.Element;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["{ features?: ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-app-api.frontendfeature",children:"FrontendFeature"}),"[]; config?: ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.configapi",children:"ConfigApi"}),"; bindRoutes?(context: { bind: ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-app-api.createapproutebinder",children:"CreateAppRouteBinder"}),"; }): void; }"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"{ createRoot(): JSX.Element; }"})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var t=n(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,d=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:d,props:c,_owner:p.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>p,a:()=>i});var t=n(667294);const a={},c=t.createContext(a);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);