/*! For license information please see efee3184.45f96803.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983410],{57667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(785893),i=t(511151);const a={id:"naming-patterns",title:"Frontend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the frontend system"},r=void 0,d={id:"frontend-system/architecture/naming-patterns",title:"Frontend System Naming Patterns",description:"Naming patterns in the frontend system",source:"@site/../docs/frontend-system/architecture/50-naming-patterns.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/naming-patterns",permalink:"/docs/frontend-system/architecture/naming-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/50-naming-patterns.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"naming-patterns",title:"Frontend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the frontend system"},sidebar:"docs",previous:{title:"Routes",permalink:"/docs/frontend-system/architecture/routes"},next:{title:"Migrations",permalink:"/docs/frontend-system/architecture/migrations"}},o={},c=[{value:"Plugins",id:"plugins",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Extension Data",id:"extension-data",level:2},{value:"Standalone Extension Data",id:"standalone-extension-data",level:4},{value:"Grouped Extension Data",id:"grouped-extension-data",level:4},{value:"Extension Creator Extension Data",id:"extension-creator-extension-data",level:4},{value:"Extension Inputs",id:"extension-inputs",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These are the naming patterns to adhere to within the frontend system. They help us keep exports and IDs consistent across packages and make it easier to understand the usage and intent of exports and IDs."}),"\n",(0,s.jsx)(n.p,{children:"As a rule, all names should be camel case, with the exceptions of plugin and extension IDs, which should use kebab case."}),"\n",(0,s.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Examples"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ID"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'<id>'"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"'catalog'"}),", ",(0,s.jsx)(n.code,{children:"'user-settings'"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Symbol"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<id>Plugin"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"catalogPlugin"}),", ",(0,s.jsx)(n.code,{children:"userSettingsPlugin"})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// This declaration is only for internal usage in tests. This could also be a direct default export.\nexport const userSettingsPlugin = createFrontendPlugin({\n  id: 'user-settings',\n  ...\n})\n\n// The plugin instance should be the default export of the package, typically this is placed in src/index.ts\nexport { userSettingsPlugin as default } from './plugin';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that while we use this naming pattern for the plugin instance this is only for internal usage within the package. Plugins are always exported as the default export of the plugin package."}),"\n",(0,s.jsx)(n.h2,{id:"extensions",children:"Extensions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Examples"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blueprint"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<Kind>Blueprint"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"PageBlueprint"}),", ",(0,s.jsx)(n.code,{children:"EntityCardBlueprint"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ID"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[<kind>:]<namespace>[/<name>]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"'core.nav'"}),", ",(0,s.jsx)(n.code,{children:"'page:user-settings'"}),", ",(0,s.jsx)(n.code,{children:"'entity-card:catalog/about'"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Symbol"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<namespace>[<Name>][<Kind>]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"coreNav"}),", ",(0,s.jsx)(n.code,{children:"userSettingsPage"}),", ",(0,s.jsx)(n.code,{children:"catalogAboutEntityCard"})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When you create a new extension you never provide the ID directly. Instead, you indirectly or directly provide the kind, namespace, and name parts that make up the ID. The kind is always provided by the extension blueprint, the only exception is if you use ",(0,s.jsx)(n.code,{children:"createExtension"})," directly. Any extension that is provided by a plugin will by default have its namespace set to the plugin ID, so you generally only need to provide an explicit namespace if you want to override an existing extension. The name is also optional, and primarily used to distinguish between multiple extensions of the same kind and namespace. If a plugin doesn't need to distinguish between different extensions of the same kind, the name can be omitted."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// This is an extension blueprint that is used to create an extension of the 'page' kind.\nexport const PageBlueprint = createExtensionBlueprint({\n  kind: 'page',\n  // ...\n});\n\n// The namespace is inferred from the plugin ID, in this case 'catalog'\n// The final ID for this extension will be 'page:catalog/entity'\nconst catalogEntityPage = PageBlueprint.make({\n  name: 'entity',\n  // ...\n});\n\n// The name is omitted, because the catalog plugin only provides a single extension of this kind\n// The final ID for this extension will be 'search-result-list-item:catalog'\nconst catalogSearchResultListItem = SearchResultListItemBlueprint.make({\n  // ...\n});\n\n// Note that the extensions themselves are not exported, only the plugin instance\nexport const catalogPlugin = createFrontendPlugin({\n  id: 'catalog',\n  extensions: [catalogEntityPage, catalogSearchResultListItem /* ... */],\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"extension-data",children:"Extension Data"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Pattern"}),(0,s.jsx)(n.th,{children:"Examples"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Interface"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<Name>ExtensionData"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SearchResultItemExtensionData"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Standalone Reference"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<name>ExtensionDataRef"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"searchResultItemExtensionDataRef"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Standalone ID"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<namespace>.<name>"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'search.search-result-item'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Grouped Reference"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<group>ExtensionData.<name>"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"coreExtensionData.reactElement"}),", ",(0,s.jsx)(n.code,{children:"catalogFilterExtensionData.functionFilter"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Grouped ID"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<group>.<name>"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"'core.react-element'"}),", ",(0,s.jsx)(n.code,{children:"'catalog-filter.function-filter'"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Creator Reference"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"create<Kind>Extension.<name>DataRef"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"createGraphiQLEndpointExtension.endpointDataRef"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Creator ID"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<namespace>.<kind>.<name>"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'graphiql.graphiql-endpoint.endpoint'"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Extension data references can be defined in a couple of different ways, depending on the intended usage, all of which are covered below."}),"\n",(0,s.jsx)(n.h4,{id:"standalone-extension-data",children:"Standalone Extension Data"}),"\n",(0,s.jsx)(n.p,{children:"The most simple way of defining extension data is a standalone reference. This is useful when you want to export a single reference that isn't closely tied to a specific kind of extension. Because this creates an extra export for each reference, the two other ways of defining extension data are preferred when possible."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// A separate named type declaration is only needed for bespoke complex extension data types\nexport interface SearchResultItemExtensionData {\n  /* ... */\n}\n\nexport const searchResultItemExtensionDataRef =\n  createExtensionDataRef<SearchResultItemExtensionData>().with({\n    id: 'search.search-result-item',\n  });\n"})}),"\n",(0,s.jsx)(n.h4,{id:"grouped-extension-data",children:"Grouped Extension Data"}),"\n",(0,s.jsx)(n.p,{children:"This way of defining extension data is similar to the standalone way, but it used when you want to export multiple pieces of grouped extension data for general use. This avoids separate exports and helps make related extension data references easier to discover. The name of the group should generally by the same as the namespace of the exporting package, typically the plugin ID. If the group needs to be more specific it should be prefixed with the namespace."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const coreExtensionData = {\n  reactElement: createExtensionDataRef<ReactElement>().with({\n    id: 'core.react-element',\n  }),\n  routePath: createExtensionDataRef<string>().with({\n    id: 'core.route-path',\n  }),\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"extension-creator-extension-data",children:"Extension Creator Extension Data"}),"\n",(0,s.jsx)(n.p,{children:"This is a convenient way of defining extension data when that data is only meant to be produced by a specific extension creator. It avoids additional exports and clearly signals that this piece of data belongs to this particular kind of extension."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export function createGraphiQLEndpointExtension(options) {\n  /* ... */\n}\n\n// Use a TypeScript namespace to merge the extension data references with the extension creator\nexport namespace createGraphiQLEndpointExtension {\n  export const endpointDataRef = createExtensionDataRef</* ... */>().with({\n    id: 'graphiql.graphiql-endpoint.endpoint',\n  });\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"extension-inputs",children:"Extension Inputs"}),"\n",(0,s.jsx)(n.p,{children:"Extension inputs do not have naming patterns for all types of input, but there are some specific use-cases where we encourage using a recognizable input name."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsxs)(n.td,{children:["An extension input that accepts ",(0,s.jsx)(n.code,{children:"coreExtensionData.reactElement"})," data and nothing else, used in a way that is equivalent of the ",(0,s.jsx)(n.code,{children:"children"})," property in React."]})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var s=t(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,a={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:l,props:a,_owner:d.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(667294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);