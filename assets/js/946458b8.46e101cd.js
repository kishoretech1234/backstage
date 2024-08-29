/*! For license information please see 946458b8.46e101cd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[412677],{146557:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=o(785893),s=o(511151);const t={id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},i=void 0,c={id:"tooling/local-dev/linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo",source:"@site/../docs/tooling/local-dev/linking-local-packages.md",sourceDirName:"tooling/local-dev",slug:"/tooling/local-dev/linking-local-packages",permalink:"/docs/tooling/local-dev/linking-local-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tooling/local-dev/linking-local-packages.md",tags:[],version:"current",frontMatter:{id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/tooling/cli/commands"},next:{title:"Debugging Backstage",permalink:"/docs/tooling/local-dev/debugging"}},r={},l=[{value:"Why?",id:"why",level:2},{value:"Linking in Backstage NPM Packages",id:"linking-in-backstage-npm-packages",level:2},{value:"Making Backstage Changes",id:"making-backstage-changes",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"Backend Issues",id:"backend-issues",level:3},{value:"Typescript Issues",id:"typescript-issues",level:3},{value:"Version Issues",id:"version-issues",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,a.jsx)(n.p,{children:"If you are looking to make changes within the core Backstage repository and test\nthose changes within your Backstage application, you will need to link the two\ntogether:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"~/backstage                // cloned from Github\n~/my-backstage-application // generated using npx\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For example, you might want to make modifications to ",(0,a.jsx)(n.code,{children:"@backstage/core-plugin-api"})," and try them out in your company's\ninstance of Backstage."]}),"\n",(0,a.jsx)(n.h2,{id:"linking-in-backstage-npm-packages",children:"Linking in Backstage NPM Packages"}),"\n",(0,a.jsxs)(n.p,{children:["To link in external packages, add them to your root ",(0,a.jsx)(n.code,{children:"package.json"})," and ",(0,a.jsx)(n.code,{children:"lerna.json"}),"\n",(0,a.jsx)(n.code,{children:'"workspace"'})," paths. These can be either relative or absolute paths with or without\nglobs."]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="/lerna.json"',children:'...\n"packages": [\n  "packages/*",\n  "plugins/*",\n  "../backstage/packages/core-plugin-api", // New path added to work on @backstage/core-plugin-api\n],\n...\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="/package.json"',children:'...\n"workspaces": {\n  "packages": [\n    "packages/*",\n    "plugins/*",\n    "../backstage/packages/core-plugin-api", // New path added to work on @backstage/core-plugin-api\n  ],\n}\n...\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now reinstall all packages from the root to make yarn set up symlinks from your application to the core Backstage clone:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,a.jsx)(n.h2,{id:"making-backstage-changes",children:"Making Backstage Changes"}),"\n",(0,a.jsxs)(n.p,{children:["With this in place you can now modify the ",(0,a.jsx)(n.code,{children:"@backstage/core-plugin-api"})," package\nwithin the main repo, and have those changes be reflected and tested in your\napp. Simply run your app using ",(0,a.jsx)(n.code,{children:"yarn dev"})," (or ",(0,a.jsx)(n.code,{children:"yarn start"})," for just frontend) as\nnormal."]}),"\n",(0,a.jsx)(n.h2,{id:"common-problems",children:"Common Problems"}),"\n",(0,a.jsx)(n.h3,{id:"backend-issues",children:"Backend Issues"}),"\n",(0,a.jsxs)(n.p,{children:["For backend packages you need to make sure that linked packages are\nnot dependencies of any non-linked package. If you for example want to work on\n",(0,a.jsx)(n.code,{children:"@backstage/backend-common"}),", you need to also link in other backend plugins and\npackages that depend on ",(0,a.jsx)(n.code,{children:"@backstage/backend-common"}),", or temporarily disable\nthose plugins in your backend. This is because the transformation of backend\nmodule tree stops whenever a non-local package is encountered, and from that\npoint node will ",(0,a.jsx)(n.code,{children:"require"})," packages directly for that entire module subtree."]}),"\n",(0,a.jsx)(n.h3,{id:"typescript-issues",children:"Typescript Issues"}),"\n",(0,a.jsxs)(n.p,{children:["Type checking can also have issues when linking in external packages, since the\nlinked in packages will use the types in the external project and dependency\nversion mismatches between the two projects may cause errors. To fix any of\nthose errors you need to sync versions of the dependencies in the two projects.\nA simple way to do this can be to copy over ",(0,a.jsx)(n.code,{children:"yarn.lock"})," from the external\nproject and run ",(0,a.jsx)(n.code,{children:"yarn install"}),", although this is quite intrusive and can cause\nother issues in existing projects, so use this method with care. It can often be\nbest to simply ignore the type errors, as app serving will work just fine\nanyway."]}),"\n",(0,a.jsxs)(n.p,{children:["Another issue with type checking is that the incremental type cache doesn't\ninvalidate correctly for the linked in packages, causing type checking to not\nreflect changes made to types. You can work around this by either setting\n",(0,a.jsx)(n.code,{children:"compilerOptions.incremental = false"})," in ",(0,a.jsx)(n.code,{children:"tsconfig.json"}),", or by deleting the\ntypes cache folder ",(0,a.jsx)(n.code,{children:"dist-types"})," before running ",(0,a.jsx)(n.code,{children:"yarn tsc"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"version-issues",children:"Version Issues"}),"\n",(0,a.jsxs)(n.p,{children:["While ",(0,a.jsx)(n.code,{children:"yarn install"})," might not error, it does not mean that the linking worked properly.\nYou will know that linking worked properly when:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Your Backstage application root ",(0,a.jsx)(n.code,{children:"/node_modules/@backstage/[some package]"})," is a symlink"]}),"\n",(0,a.jsxs)(n.li,{children:["Your Backstage application ",(0,a.jsx)(n.code,{children:"/packages/app/node_modules"})," and ",(0,a.jsx)(n.code,{children:"/packages/backend/node_modules"})," does\nnot contain the package you are attempting to link!"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you see Yarn continuing to download the package you are trying to link from NPM, you might need to be\nexplicit in your ",(0,a.jsx)(n.code,{children:"package.json"})," version so that it exactly matches what you have in the cloned Backstage\nrepository on your machine. For example, if you have cloned ",(0,a.jsx)(n.code,{children:"/plugins/catalog"})," with version\n",(0,a.jsx)(n.code,{children:'"version": "1.19.1-next.1"'})," you will need to be explicit in your application to point to ",(0,a.jsx)(n.code,{children:'"1.19.1-next.1"'}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,n,o)=>{var a=o(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var a,t={},l=null,d=null;for(a in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!r.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:s,type:e,key:l,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var a=o(667294);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);