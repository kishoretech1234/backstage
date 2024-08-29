/*! For license information please see 5209255f.b2f9249f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[438429],{502521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(785893),o=n(511151);const r={id:"backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath"},c=void 0,s={id:"reference/backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath",source:"@site/../docs/reference/backend-openapi-utils.internal.templatetodocpath.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.templatetodocpath",permalink:"/docs/reference/backend-openapi-utils.internal.templatetodocpath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.templatetodocpath.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath"}},p={},i=[{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils",children:(0,a.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,a.jsx)(t.code,{children:"internal"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.templatetodocpath",children:(0,a.jsx)(t.code,{children:"TemplateToDocPath"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Extract path as specified in OpenAPI ",(0,a.jsx)(t.code,{children:"Doc"})," based on request path"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export type TemplateToDocPath<Doc extends PathDoc, Path extends DocPathTemplate<Doc>> = ValueOf<{\n    [Template in DocPath<Doc>]: Path extends PathTemplate<Template> ? Template : never;\n}>;\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"References:"})," ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathdoc",children:"PathDoc"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpathtemplate",children:"DocPathTemplate"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.valueof",children:"ValueOf"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathtemplate",children:"PathTemplate"})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'const spec = {\n  paths: {\n      "/posts/{postId}/comments/{commentId}": {},\n      "/posts/comments": {},\n  }\n};\nconst specPathWithParams: DocPath<typeof spec, "/posts/:postId/comments/:commentId"> = "/posts/{postId}/comments/{commentId}";\nconst specPathWithoutParams: DocPath<typeof spec, "/posts/comments"> = "/posts/comments";\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var a=n(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,r={},i=null,l=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!p.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:s.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var a=n(667294);const o={},r=a.createContext(o);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);