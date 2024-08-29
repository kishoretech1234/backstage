/*! For license information please see acf4ca23.2f2ccd81.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[434375],{414010:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var t=r(785893),i=r(511151);const s={id:"frontend-plugin-api.extensionblueprintparameters",title:"ExtensionBlueprintParameters",description:"API reference for ExtensionBlueprintParameters"},o=void 0,a={id:"reference/frontend-plugin-api.extensionblueprintparameters",title:"ExtensionBlueprintParameters",description:"API reference for ExtensionBlueprintParameters",source:"@site/../docs/reference/frontend-plugin-api.extensionblueprintparameters.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprintparameters",permalink:"/docs/reference/frontend-plugin-api.extensionblueprintparameters",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensionblueprintparameters.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensionblueprintparameters",title:"ExtensionBlueprintParameters",description:"API reference for ExtensionBlueprintParameters"}},c={},p=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprintparameters",children:(0,t.jsx)(n.code,{children:"ExtensionBlueprintParameters"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type ExtensionBlueprintParameters = {\n    kind: string;\n    namespace?: string;\n    name?: string;\n    params?: object;\n    configInput?: {\n        [K in string]: any;\n    };\n    config?: {\n        [K in string]: any;\n    };\n    output?: AnyExtensionDataRef;\n    inputs?: {\n        [KName in string]: ExtensionInput<AnyExtensionDataRef, {\n            optional: boolean;\n            singleton: boolean;\n        }>;\n    };\n    dataRefs?: {\n        [name in string]: AnyExtensionDataRef;\n    };\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninput",children:"ExtensionInput"})]})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var t,s={},p=null,l=null;for(t in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:p,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(667294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);