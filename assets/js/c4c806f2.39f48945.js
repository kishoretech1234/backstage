/*! For license information please see c4c806f2.39f48945.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[629054],{684015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(785893),s=n(511151);const i={id:"catalog-client.catalogclient.getentitiesbyrefs",title:"CatalogClient.getEntitiesByRefs()",description:"API reference for CatalogClient.getEntitiesByRefs()"},c=void 0,a={id:"reference/catalog-client.catalogclient.getentitiesbyrefs",title:"CatalogClient.getEntitiesByRefs()",description:"API reference for CatalogClient.getEntitiesByRefs()",source:"@site/../docs/reference/catalog-client.catalogclient.getentitiesbyrefs.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogclient.getentitiesbyrefs",permalink:"/docs/reference/catalog-client.catalogclient.getentitiesbyrefs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogclient.getentitiesbyrefs.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogclient.getentitiesbyrefs",title:"CatalogClient.getEntitiesByRefs()",description:"API reference for CatalogClient.getEntitiesByRefs()"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogclient",children:(0,r.jsx)(t.code,{children:"CatalogClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogclient.getentitiesbyrefs",children:(0,r.jsx)(t.code,{children:"getEntitiesByRefs"})})]}),"\n",(0,r.jsx)(t.p,{children:"Gets a batch of entities, by their entity refs."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getEntitiesByRefs(request: GetEntitiesByRefsRequest, options?: CatalogRequestOptions): Promise<GetEntitiesByRefsResponse>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"request"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.getentitiesbyrefsrequest",children:"GetEntitiesByRefsRequest"})}),(0,r.jsx)(t.td,{children:"Request parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Additional options"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.getentitiesbyrefsresponse",children:"GetEntitiesByRefsResponse"}),">"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"The output list of entities is of the same size and in the same order as the requested list of entity refs. Entries that are not found are returned as null."})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);