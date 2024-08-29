/*! For license information please see e21c0f05.50caf69e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[821287],{841587:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(785893),i=s(511151);const o={id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},r=void 0,a={id:"permissions/custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources",source:"@site/../docs/permissions/custom-rules.md",sourceDirName:"permissions",slug:"/permissions/custom-rules",permalink:"/docs/permissions/custom-rules",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/custom-rules.md",tags:[],version:"current",frontMatter:{id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},sidebar:"docs",previous:{title:"Frontend Integration",permalink:"/docs/permissions/frontend-integration"},next:{title:"1. Tutorial setup",permalink:"/docs/permissions/plugin-authors/01-setup"}},c={},l=[{value:"Define a custom rule",id:"define-a-custom-rule",level:2},{value:"Provide the rule during plugin setup",id:"provide-the-rule-during-plugin-setup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This documentation is written for ",(0,t.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,t.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,t.jsx)(n.a,{href:"/docs/permissions/custom-rules--old",children:"its own article"})," instead, and ",(0,t.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,t.jsxs)(n.p,{children:["For some use cases, you may want to define custom ",(0,t.jsx)(n.a,{href:"/docs/references/glossary#rule-permission-plugin",children:"rules"})," in addition to the ones provided by a plugin. In the ",(0,t.jsx)(n.a,{href:"/docs/permissions/writing-a-policy",children:"previous section"})," we used the ",(0,t.jsx)(n.code,{children:"isEntityOwner"})," rule to control access for catalog entities. Let's extend this policy with a custom rule that checks what ",(0,t.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/system-model#system",children:"system"})," an entity is part of."]}),"\n",(0,t.jsx)(n.h2,{id:"define-a-custom-rule",children:"Define a custom rule"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins should export a rule factory that provides type-safety that ensures compatibility with the plugin's backend. The catalog plugin exports ",(0,t.jsx)(n.code,{children:"createCatalogPermissionRule"})," from ",(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend/alpha"})," for this purpose. Note: the ",(0,t.jsx)(n.code,{children:"/alpha"})," path segment is temporary until this API is marked as stable. For this example, we'll define the rule and create a condition in ",(0,t.jsx)(n.code,{children:"packages/backend/src/extensions/permissionsPolicyExtension.ts"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.code,{children:"zod"})," and ",(0,t.jsx)(n.code,{children:"@backstage/catalog-model"})," in our example below. To install them run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add zod @backstage/catalog-model\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/extensions/permissionsPolicyExtension.ts"',children:"...\n\nimport type { Entity } from '@backstage/catalog-model';\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\nimport { z } from 'zod';\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nconst isInSystem = createConditionFactory(isInSystemRule);\n\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a more detailed explanation on defining rules, refer to the ",(0,t.jsx)(n.a,{href:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check#adding-support-for-conditional-decisions",children:"documentation for plugin authors"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Still in the ",(0,t.jsx)(n.code,{children:"packages/backend/src/extensions/permissionsPolicyExtension.ts"})," file, let's use the condition we just created in our ",(0,t.jsx)(n.code,{children:"CustomPermissionPolicy"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/extensions/permissionsPolicyExtension.ts"',children:"...\n/* highlight-remove-next-line */\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\n/* highlight-add-next-line */\nimport { catalogConditions, createCatalogConditionalDecision, createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\n/* highlight-remove-next-line */\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\n/* highlight-add-next-line */\nimport { PermissionPolicy, PolicyQuery, PolicyQueryUser, createConditionFactory } from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport { AuthorizeResult, PolicyDecision, isResourcePermission } from '@backstage/plugin-permission-common';\n/* highlight-add-end */\n...\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nconst isInSystem = createConditionFactory(isInSystemRule);\n\nclass CustomPermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    if (isResourcePermission(request.permission, 'catalog-entity')) {\n      return createCatalogConditionalDecision(\n        request.permission,\n        /* highlight-remove-start */\n        catalogConditions.isEntityOwner({\n          claims: user?.info.ownershipEntityRefs ?? [],\n        }),\n        /* highlight-remove-end */\n        /* highlight-add-start */\n        {\n          anyOf: [\n            catalogConditions.isEntityOwner({\n              claims: user?.info.ownershipEntityRefs ?? [],\n            }),\n            isInSystem({ systemRef: 'interviewing' }),\n          ],\n        },\n        /* highlight-add-end */\n      );\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"provide-the-rule-during-plugin-setup",children:"Provide the rule during plugin setup"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have a custom rule defined and added to our policy, we need provide it to the catalog plugin. This step is important because the catalog plugin will use the rule's ",(0,t.jsx)(n.code,{children:"toQuery"})," and ",(0,t.jsx)(n.code,{children:"apply"})," methods while evaluating conditional authorize results. There's no guarantee that the catalog and permission backends are running on the same server, so we must explicitly link the rule to ensure that it's available at runtime."]}),"\n",(0,t.jsxs)(n.p,{children:["The api for providing custom rules may differ between plugins, but there should typically be an ",(0,t.jsx)(n.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension point"})," that you can use in your created module to add your rule. For the catalog, this extension point is exposed via ",(0,t.jsx)(n.code,{children:"catalogPermissionExtensionPoint"}),". Here's the steps you'll need to take to add the ",(0,t.jsx)(n.code,{children:"isInSystemRule"})," we created above to the catalog:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We will be using the ",(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-node"})," package as it contains the extension point we need. Run this to add it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-node\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Next create a ",(0,t.jsx)(n.code,{children:"catalogPermissionRules.ts"})," file in the ",(0,t.jsx)(n.code,{children:"packages/backend/src/extensions"})," folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Then add this as the contents of the new ",(0,t.jsx)(n.code,{children:"catalogPermissionRules.ts"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="packages/backend/src/extensions/catalogPermissionRules.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport { catalogPermissionExtensionPoint } from '@backstage/plugin-catalog-node/alpha';\nimport { isInSystemRule } from './permissionPolicyExtension';\n\nexport default createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'permission-rules',\n  register(reg) {\n    reg.registerInit({\n      deps: { catalog: catalogPermissionExtensionPoint },\n      async init({ catalog }) {\n        catalog.addPermissionRules(isInSystemRule);\n      },\n    });\n  },\n});\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Next we need to add this to the backend by adding the following line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"// catalog plugin\nbackend.add(import('@backstage/plugin-catalog-backend/alpha'));\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),\n);\n/* highlight-add-next-line */\nbackend.add(import('./extensions/catalogPermissionRules'));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now when you run you Backstage instance - ",(0,t.jsx)(n.code,{children:"yarn dev"})," - the rule will be added to the catalog plugin."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The updated policy will allow catalog entity resource permissions if any of the following are true:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User owns the target entity"}),"\n",(0,t.jsx)(n.li,{children:"Target entity is part of the 'interviewing' system"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,n,s)=>{var t=s(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,o={},l=null,d=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},785893:(e,n,s)=>{e.exports=s(675251)},511151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(667294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);