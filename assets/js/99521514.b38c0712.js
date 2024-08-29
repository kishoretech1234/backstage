/*! For license information please see 99521514.b38c0712.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[985486],{871990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=a(785893),o=a(511151);const r={title:"Introducing Tech Radar for Backstage",author:"Bilawal Hameed, Spotify",authorURL:"http://twitter.com/bilawalhameed",authorImageURL:"https://avatars0.githubusercontent.com/bih"},i=void 0,s={permalink:"/blog/2020/05/14/tech-radar-plugin",source:"@site/blog/2020-05-14-tech-radar-plugin.mdx",title:"Introducing Tech Radar for Backstage",description:"image illustrating the Tech Radar plugin for Backstage",date:"2020-05-14T00:00:00.000Z",tags:[],readingTime:2.77,hasTruncateMarker:!0,authors:[{name:"Bilawal Hameed, Spotify",url:"http://twitter.com/bilawalhameed",imageURL:"https://avatars0.githubusercontent.com/bih",key:null,page:null}],frontMatter:{title:"Introducing Tech Radar for Backstage",author:"Bilawal Hameed, Spotify",authorURL:"http://twitter.com/bilawalhameed",authorImageURL:"https://avatars0.githubusercontent.com/bih"},unlisted:!1,prevItem:{title:"Starting Phase 2: The Service Catalog",permalink:"/blog/2020/05/22/phase-2-service-catalog"},nextItem:{title:"Weaveworks\u2019 COVID-19 app uses Backstage UI",permalink:"/blog/2020/05/14/weaveworks-covid-19-app-uses-backstage-ui"}},c={authorsImageUrls:[void 0]},h=[{value:"What is Tech Radar?",id:"what-is-tech-radar",level:2},{value:"Using the Tech Radar in Backstage",id:"using-the-tech-radar-in-backstage",level:2},{value:"A personal note",id:"a-personal-note",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image illustrating the Tech Radar plugin for Backstage",src:a(948397).Z+"",width:"3274",height:"2178"})}),"\n",(0,n.jsxs)(t.p,{children:["Just a few weeks ago, we released our internal plugin for ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/04/06/lighthouse-plugin",children:"Lighthouse website audits"})," as our first open source plugin, so the whole community could use it. Today, we\u2019re excited to add a new plugin to that list \u2014 say hello to the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/tech-radar/plugins/tech-radar",children:"Tech Radar plugin"}),"!"]}),"\n","\n",(0,n.jsx)(t.h2,{id:"what-is-tech-radar",children:"What is Tech Radar?"}),"\n",(0,n.jsxs)(t.p,{children:["The Technology Radar is a concept created by ",(0,n.jsx)(t.a,{href:"https://www.thoughtworks.com/radar",children:"ThoughtWorks"})," which allows you to visualize the official guidelines of software languages, processes, infrastructure, and platforms at that particular company. The particular visualization above was created by ",(0,n.jsx)(t.a,{href:"https://opensource.zalando.com/tech-radar/",children:"Zalando"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"At Spotify, our central committee of technical architects own the Tech Radar with the input of engineers across the company. Anyone can and is encouraged to give recommendations. We segment entries in our Tech Radar by languages, frameworks, processes, and infrastructure, although you should pick whatever works best for your organization. Each entry in the Tech Radar can have one of the following lifecycle values: Use, Trial, Assess, and Hold."}),"\n",(0,n.jsx)(t.p,{children:"We also assign clear definitions for each lifecycle:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use:"})," This technology is recommended for use by the majority of teams with a specific use case."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trial:"})," This technology has been evaluated for specific use cases and has showed clear benefits. Some teams adopt it in production, although it should be limited to low-impact projects as it might incur a higher risk."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Assess:"})," This technology has the potential to be beneficial for the company. Some teams are evaluating it and using it in experimental projects. Using it in production comes with a high cost and risk due to lack of in-house knowledge, maintenance, and support."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hold:"})," We don't want to further invest in this technology or we evaluated it and we don't see it as beneficial for the company. Teams should not use it in new projects and should plan on migrating to a supported alternative if they use it for historical reasons. For broadly adopted technologies, the Radar should refer to a migration path to a supported alternative."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Since rolling out the Tech Radar, it has become the source of truth when creating, maintaining, or evolving our software ecosystem. Spotify has dozens of entries in our Radar and it can scale quite well whilst being easy for our engineers and engineering managers to consume."}),"\n",(0,n.jsx)(t.h2,{id:"using-the-tech-radar-in-backstage",children:"Using the Tech Radar in Backstage"}),"\n",(0,n.jsxs)(t.p,{children:["To learn about how you can bring the Tech Radar to your Backstage installation, check out ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/tech-radar/plugins/tech-radar",children:"the plugin README on GitHub"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"a-personal-note",children:"A personal note"}),"\n",(0,n.jsx)(t.p,{children:"I want to thank both the Backstage team and Spotify. Firstly, I've been working with our internal version of Backstage for over a year, and the developer experience since open sourcing has been even more of a joy to work with. Secondly, the 10% hack time that Spotify generously provides to all engineers enabled me to open source the Tech Radar plugin."}),"\n",(0,n.jsxs)(t.p,{children:["Since open sourcing it, the community has shown great interest in yet another powerful use case of Backstage. There was also an enthusiastic open source contributor who volunteered to migrate the plugin to TypeScript and React Hooks ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/661",children:"in just 29 minutes"})," of opening the issue!"]}),"\n",(0,n.jsx)(t.p,{children:"I can't wait to see how others benefit from the Tech Radar in their organizations!"})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,a)=>{var n=a(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var n,r={},h=null,l=null;for(n in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:o,type:e,key:h,ref:l,props:r,_owner:s.current}}t.Fragment=r,t.jsx=h,t.jsxs=h},785893:(e,t,a)=>{e.exports=a(675251)},948397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lead-74bcfe9ea9a65303b0dbcc7bc2cb6546.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(667294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);