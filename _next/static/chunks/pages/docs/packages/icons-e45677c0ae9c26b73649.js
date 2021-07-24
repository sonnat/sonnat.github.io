(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6325],{33:function(e,n,o){"use strict";o.d(n,{Z:function(){return v}});var t=o(5893),a=o(6265),i=o(8740),r=o(5992),s=o(6221),c=o(4425),l=o(4451),d=o(4184),m=o.n(d),p=o(1664),u=o(7294),g="Footer",h=(0,c.Z)((function(e){var n=e.colors,o=e.breakpoints,t=e.typography.pxToRem;return(0,a.Z)({root:{display:"flex",alignItems:"center",height:t(72),marginTop:t(128),justifyContent:"space-between",borderTop:"1px solid ".concat(n.divider)},navigation:{display:"flex",alignItems:"center"},logo:{marginRight:t(16),cursor:"pointer",color:n.text.secondary,transition:["opacity 360ms ease","visibility 360ms ease","color 360ms ease"].join(", "),"&:hover":{color:n.text.primary}},navigationList:{padding:"0",margin:"0",listStyle:"none",display:"flex",alignItems:"center"},navigationItem:{padding:t(8),cursor:"pointer","&:hover > $navigationItemLink":{color:n.text.primary}},navigationItemLink:{color:n.text.secondary,transition:"color 360ms ease"},navigationDivider:{width:t(1),height:t(16),backgroundColor:n.divider},socials:{display:"flex",alignItems:"center"},social:{marginLeft:t(8),cursor:"pointer",transition:"color 360ms ease",color:n.text.secondary,"&:hover":{color:n.text.primary}}},o.down("sm"),{root:{paddingTop:t(16),paddingBottom:t(16),height:"auto",flexDirection:"column"},navigation:{flexDirection:"column"},navigationList:{marginTop:t(16),marginBottom:t(16)},social:{marginLeft:t(8),marginRight:t(8)},logo:{marginRight:0}})}),{name:g}),f=u.memo((function(e){var n=e.className,o=h();return(0,t.jsxs)("footer",{className:m()(o.root,n),children:[(0,t.jsxs)("nav",{className:o.navigation,children:[(0,t.jsx)(p.default,{href:"/",children:(0,t.jsx)("a",{title:"Home",className:o.logo,children:(0,t.jsx)(i.Z,{size:32,title:"Sonnat Design System's Logo"})})}),(0,t.jsxs)("ul",{className:o.navigationList,children:[(0,t.jsx)("li",{className:o.navigationItem,children:(0,t.jsx)(p.default,{href:"/docs/installation",passHref:!0,children:(0,t.jsx)(l.Z,{title:"Documentation",rootNode:"a",variant:"caption",className:o.navigationItemLink,children:"Docs"})})}),(0,t.jsx)("li",{className:o.navigationDivider}),(0,t.jsx)("li",{className:o.navigationItem,children:(0,t.jsx)(p.default,{href:"https://sonnat.design",passHref:!0,children:(0,t.jsx)(l.Z,{title:"Design",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:o.navigationItemLink,children:"Design"})})}),(0,t.jsx)("li",{className:o.navigationDivider}),(0,t.jsx)("li",{className:o.navigationItem,children:(0,t.jsx)(p.default,{href:"https://github.com/sonnat/sonnat-ui/discussions/categories/feedback",passHref:!0,children:(0,t.jsx)(l.Z,{title:"Feedback",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:o.navigationItemLink,children:"Feedback"})})}),(0,t.jsx)("li",{className:o.navigationDivider}),(0,t.jsx)("li",{className:o.navigationItem,children:(0,t.jsx)(p.default,{href:"https://careers.divar.ir/positions#department=Design%20and%20UX",passHref:!0,children:(0,t.jsx)(l.Z,{title:"Careers",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:o.navigationItemLink,children:"Careers"})})})]})]}),(0,t.jsxs)("div",{className:o.socials,children:[(0,t.jsx)(p.default,{href:"https://twitter.com/sonnatdesign",passHref:!0,children:(0,t.jsx)("a",{title:"Twitter",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(r.Z,{size:24,className:o.social})})}),(0,t.jsx)(p.default,{href:"https://github.com/sonnat/sonnat-ui",passHref:!0,children:(0,t.jsx)("a",{title:"GitHub",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(s.Z,{size:24,className:o.social})})})]})]})}));f.displayName=g;var v=f},9568:function(e,n,o){"use strict";o.d(n,{Z:function(){return y}});var t=o(5893),a=o(6265),i=o(5110),r=o(4425),s=o(33),c=o(1369),l=o(4184),d=o.n(l),m=o(3599),p=o(7294),u="Sidebar",g=(0,r.Z)((function(e){var n=e.typography.pxToRem;return{root:function(e){var o=e.scrollBarWidth;return{position:"sticky",top:n(128),paddingBottom:n(32),zIndex:1,"&:after":{marginRight:n(o),content:'""',position:"absolute",left:0,right:0,bottom:n(32),height:n(16)}}},hintText:{marginTop:n(4)}}}),{name:u}),h=p.memo((function(e){var n=e.children,o=e.className,a=(0,m.h)(),i=p.useMemo((function(){return(0,c.Z)()}),[]),r=g({scrollBarWidth:i});return(0,t.jsxs)("aside",{className:d()(o,r.root),children:[a,n]})}));h.displayName=u;var f=h,v="WithSidebar",x=(0,r.Z)((function(e){var n=e.breakpoints,o=e.typography.pxToRem;return{root:{paddingTop:o(64)},container:{display:"flex",paddingTop:o(64)},sidebar:(0,a.Z)({height:"calc(100vh - ".concat(o(192),")"),width:o(256),flexShrink:0},n.down("lg"),{display:"none"}),content:(0,a.Z)({flex:"1 1",minWidth:0},n.up("lg"),{paddingLeft:o(32)}),article:(0,a.Z)({minHeight:"calc(100vh - ".concat(o(328),")")},n.down("sm"),{minHeight:"auto"})}}),{name:v}),j=function(e){var n=e.children,o=x();return(0,t.jsx)("main",{id:"main",className:o.root,children:(0,t.jsxs)(i.Z,{className:o.container,children:[(0,t.jsx)(f,{className:o.sidebar}),(0,t.jsxs)("section",{className:o.content,children:[(0,t.jsx)("article",{className:o.article,children:n}),(0,t.jsx)(s.Z,{})]})]})})};j.displayName=v;var y=j},8111:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return oe},default:function(){return te}});var t=o(5893),a=o(8140),i=o(809),r=o.n(i),s=o(2447),c=o(2292),l=o(6265),d=o(2717),m=o(6221),p=o(1299),u=o(3431),g=o(7913),h=o(4436),f=o(8476),v=o(4512),x=o(5110),j=o(8286),y=o(2943),b=o(5145),N=o(4425),Z=o(4451),k=o(2981),w=o(9568),S=o(4886),C=o(1369),I=o(6096),O=o(4184),T=o.n(O),B=o(7294),D="IconDrawer",R=(0,N.Z)((function(e){var n,o,t,a=e.colors,i=e.zIndexes,r=e.darkMode,s=e.mixins.useIconWrapper,c=e.typography.pxToRem;return{root:{right:0,display:"flex",flexDirection:"column",transform:"translateX(100%)",boxShadow:"-1px 0 2px 0 ".concat(a.createBlackColor({alpha:.12})),position:"fixed",width:c(320),height:"100%",overflow:"auto",top:0,backgroundColor:r?null===(n=a.background.level)||void 0===n?void 0:n[2]:a.white,zIndex:i.drawer,opacity:0,padding:[[0,c(16)]],visibility:"hidden",transition:"transform 360ms ease, opacity 260ms ease, visibility 260ms ease"},showcase:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginBottom:c(16),marginTop:c(16)},iconWrapper:s(64),usage:{paddingTop:c(16)},usageTitle:{marginBottom:c(16)},usageCase:{marginBottom:c(16)},usageCaseCode:{marginBottom:c(24)},topBar:{position:"sticky",top:0,display:"flex",justifyContent:"flex-end",marginRight:c(-16),marginLeft:c(-16),padding:[[c(4),c(16)]],backgroundColor:r?null===(o=a.background.level)||void 0===o?void 0:o[2]:a.white,borderBottom:"1px solid ".concat(a.divider)},bottomBar:{position:"sticky",bottom:0,marginRight:c(-16),marginLeft:c(-16),marginTop:"auto",padding:c(16),backgroundColor:r?null===(t=a.background.level)||void 0===t?void 0:t[2]:a.white,borderTop:"1px solid ".concat(a.divider)},downloadBtn:{width:"100%"},dimmer:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:i.drawer-1,backgroundColor:r?"rgba(0, 0, 0, 0.56)":"rgba(0, 0, 0, 0.26)",visibility:"hidden",opacity:0,transition:"opacity 360ms ease, visibility 360ms ease"},open:{opacity:1,visibility:"visible","&$root":{right:0,transform:"translateX(0)"}}}}),{name:D}),P=B.memo((function(e){var n=e.open,o=void 0!==n&&n,a=e.toggle,i=e.data,r=R(),s=B.useState(!1),m=(0,c.Z)(s,2),p=m[0],u=m[1],h=B.useCallback((function(){a?requestAnimationFrame(a):requestAnimationFrame((function(){return u((function(e){return!e}))}))}),[a]);return B.useEffect((function(){if(requestAnimationFrame((function(){return u(o)})),o){var e=(0,C.Z)();document.body.style.paddingRight="".concat(e,"px"),document.body.style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflow=""}),[o]),(0,t.jsxs)(I.Z,{children:[(0,t.jsxs)("section",{className:T()(r.root,(0,l.Z)({},r.open,p)),children:[(0,t.jsx)("div",{className:r.topBar,children:(0,t.jsx)(g.Z,{"aria-label":"Close the drawer",leadingIcon:(0,t.jsx)(S.Z,{}),variant:"inlined",size:"small",onClick:function(){h()}})}),(0,t.jsxs)("div",{className:r.showcase,children:[(0,t.jsx)("i",{className:r.iconWrapper,children:null===i||void 0===i?void 0:i.component}),(0,t.jsx)(Z.Z,{variant:"bodySmall",color:"textSecondary",children:null===i||void 0===i?void 0:i.kebabCaseName})]}),(0,t.jsxs)("div",{className:r.usage,children:[(0,t.jsx)(Z.Z,{className:r.usageTitle,variant:"h6",rootNode:"strong",display:"block",children:"Usage:"}),(0,t.jsxs)(Z.Z,{className:r.usageCase,variant:"bodySmall",rootNode:"p",children:["To use along with ",(0,t.jsx)(f.Z,{children:"@sonnat/ui"}),": (In this case,"," ",(0,t.jsx)(f.Z,{children:"@sonnat/ui"})," and ",(0,t.jsx)(f.Z,{children:"react"})," are the peer dependencies.)"]}),(0,t.jsx)(f.Z,{className:r.usageCaseCode,codeBlock:!0,children:"import { ".concat(null===i||void 0===i?void 0:i.pascalCaseName,' } from "@sonnat/icons";')}),(0,t.jsxs)(Z.Z,{className:r.usageCase,variant:"bodySmall",rootNode:"p",children:["To only export the SVG paths: (In this case, ",(0,t.jsx)(f.Z,{children:"react"})," ","is the peer dependency.)"]}),(0,t.jsx)(f.Z,{className:r.usageCaseCode,codeBlock:!0,children:"import { ".concat(null===i||void 0===i?void 0:i.pascalCaseName,' } from "@sonnat/icons/paths";')})]}),(0,t.jsx)("div",{className:r.bottomBar,children:(0,t.jsx)(g.Z,{rootNode:"a",className:r.downloadBtn,label:"Download the SVG",leadingIcon:(0,t.jsx)(d.Z,{}),color:"primary",href:null===i||void 0===i?void 0:i.file,download:"".concat(null===i||void 0===i?void 0:i.kebabCaseName,".svg")})})]}),(0,t.jsx)("div",{className:T()(r.dimmer,(0,l.Z)({},r.open,p)),onClick:h})]})}));P.displayName=D;var L=P,_=o(8347);function z(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function A(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?z(Object(o),!0).forEach((function(n){(0,l.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var H="IconSample",F=(0,N.Z)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:e.typography.pxToRem(8),borderRadius:e.typography.pxToRem(4),backgroundColor:e.colors.transparent,transition:"background-color 360ms ease","&:hover":{backgroundColor:e.darkMode?e.colors.createWhiteColor({alpha:.04}):e.colors.createBlackColor({alpha:.04})}},iconWrapper:A(A({},e.mixins.useIconWrapper(40)),{},{marginBottom:e.typography.pxToRem(16),color:e.colors.text.secondary}),iconName:{color:e.colors.text.secondary,textAlign:"center"}}}),{name:H}),W=B.memo((function(e){var n=e.name,o=e.icon,a=e.onSelect,i=e.className,r=(0,_.Z)(e,["name","icon","onSelect","className"]),s=F();return(0,t.jsxs)("article",A(A({className:T()(s.root,i)},r),{},{onClick:a,children:[(0,t.jsx)("i",{className:s.iconWrapper,children:o}),(0,t.jsx)(Z.Z,{variant:"caption",className:s.iconName,children:n})]}))}));W.displayName=H;var E=W,G=o(3096),M=o.n(G),X=o(5152),V=o(9008),q=o(4069),U=o(7210),$=o(164);function J(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function K(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?J(Object(o),!0).forEach((function(n){(0,l.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):J(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var Q="IconsPackagePage",Y=(0,N.Z)((function(e){var n=e.breakpoints,o=e.typography,t=o.pxToRem,a=o.variants;return(0,l.Z)({sectionHead:{},sectionBody:{},heading:{},description:{marginTop:t(16),marginBottom:t(32)},headActionBar:{display:"flex",alignItems:"center",marginBottom:t(32),"& > * + *":{marginLeft:t(8)}},bodyActionBar:{marginTop:t(32),marginBottom:t(32),display:"flex",alignItems:"center"},searchField:{marginRight:t(32)},fieldSeparator:{marginTop:t(8),marginBottom:t(8)},chips:{display:"flex",alignItems:"center",marginLeft:t(64)},filledChip:{marginRight:t(8)},outlinedChip:{},iconSample:{marginBottom:t(16)},emptyState:{display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0"}},n.down("sm"),{heading:{fontSize:a.h4.fontSize},headActionBar:{"& > *":{flexShrink:0,flexGrow:1}},bodyActionBar:{flexDirection:"column",alignItems:"flex-start"},searchField:{marginRight:0,marginBottom:t(16)},chips:{marginLeft:0},fieldSeparator:{display:"none"}})}),{name:Q}),ee=function(e){var n=e.icons,i=e.zipPath,l=Y(),N=B.useState(null),w=(0,c.Z)(N,2),S=w[0],C=w[1],I=B.useState(""),O=(0,c.Z)(I,2),T=O[0],D=O[1],R=B.useState(""),P=(0,c.Z)(R,2),_=P[0],z=P[1],A=B.useState(!1),H=(0,c.Z)(A,2),F=H[0],W=H[1],G=B.useState(!1),J=(0,c.Z)(G,2),Q=J[0],ee=J[1],ne=B.useState(null),oe=(0,c.Z)(ne,2),te=oe[0],ae=oe[1],ie=B.useMemo((function(){return n.allNames.map((function(e){var a=n.byName[e],i=(0,X.default)((0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.e(3313).then(o.bind(o,3313)).then((function(e){return e[a.pascalCaseName]})));case 1:case"end":return e.stop()}}),e)}))),{loadableGenerated:{webpack:function(){return[3313]},modules:["docs/packages/icons.tsx -> @sonnat/icons"]}});return(0,t.jsx)(v.Z,{"data-key":"".concat(a.kebabCaseName),sm:2,all:4,children:(0,t.jsx)(E,{className:l.iconSample,icon:(0,t.jsx)(i,{}),name:a.kebabCaseName,onSelect:function(){!function(e){ae(e),W(!0)}(K(K({},a),{},{component:(0,t.jsx)(i,{color:"textSecondary"})}))}})},a.pascalCaseName)}))}),[]);(0,$.Z)((function(){C(ie)}),[ie]);var re=M()((function(e){var n=e.toLowerCase();if(n&&n.length>=2){var o=ie.filter((function(e){return e.props["data-key"].includes(n)}));C(o)}else C(ie);z(e)}),750),se=B.useMemo((function(){var e,n=S;return"filled"===T?n=null===S||void 0===S?void 0:S.filter((function(e){return!e.props["data-key"].includes("-o")})):"outlined"===T&&(n=null===S||void 0===S?void 0:S.filter((function(e){return e.props["data-key"].includes("-o")}))),0===(null===(e=n)||void 0===e?void 0:e.length)?ee(!0):ee(!1),n}),[T,S]),ce=Q?(0,t.jsx)("div",{className:l.emptyState,children:(0,t.jsx)(Z.Z,{variant:"bodySmall",rootNode:"p",color:"textSecondary",align:"center",children:"No results found for the provided input!"})}):se;return(0,t.jsxs)(B.Fragment,{children:[(0,t.jsxs)(V.default,{children:[(0,U.aT)("Sonnat-Icons | Sonnat Developer Tools, React Components & Resources"),(0,U.u2)("The growing icon collection that allows designers and developers to download or install SVG Icons for any projects."),(0,U.ai)("".concat(q.z,"/docs/packages/icons")),(0,U.hL)([].concat((0,a.Z)(q.t),["sonnat","icons","sonnat-icons","@sonnat/icons","react","svg"]))]}),(0,t.jsxs)("div",{className:l.sectionHead,children:[(0,t.jsx)(Z.Z,{className:l.heading,variant:"h3",rootNode:"h1",children:"Sonnat Icon Set"}),(0,t.jsxs)(Z.Z,{className:l.description,variant:"body",rootNode:"p",children:["The growing icon collection that allows designers and developers to download or install SVG Icons for any projects.",(0,t.jsx)("br",{}),"Start using it in ReactJS projects:"," ",(0,t.jsx)(f.Z,{children:"npm install @sonnat/icons"})," or"," ",(0,t.jsx)(f.Z,{children:"yarn add @sonnat/icons"}),"."]}),(0,t.jsxs)("div",{className:l.headActionBar,children:[(0,t.jsx)(g.Z,{rootNode:"a",download:"sonnat-icons.zip",href:i,label:"Download",leadingIcon:(0,t.jsx)(d.Z,{}),color:"primary"}),(0,t.jsx)(g.Z,{rootNode:"a",href:"https://github.com/sonnat/sonnat-ui/tree/next/packages/sonnat-icons",target:"_blank",rel:"noopener noreferrer",label:"Github",leadingIcon:(0,t.jsx)(m.Z,{}),variant:"inlined"})]}),(0,t.jsx)(j.Z,{})]}),(0,t.jsxs)("div",{className:l.sectionBody,children:[(0,t.jsxs)("div",{className:l.bodyActionBar,children:[(0,t.jsx)(k.Z,{fluid:!0,value:_,onChange:function(e){re(e.target.value)},className:l.searchField,placeholder:"Search for icon",leadingAdornment:(0,t.jsx)(y.Z,{variant:"icon",children:(0,t.jsx)(p.Z,{})}),trailingAdornment:_&&(0,t.jsx)(y.Z,{variant:"icon",onClick:function(){return z(""),ee(!1),void C(ie)},children:(0,t.jsx)(u.Z,{})})}),(0,t.jsx)(j.Z,{vertical:!0,className:l.fieldSeparator}),(0,t.jsxs)("div",{className:l.chips,children:[(0,t.jsx)(h.Z,{className:l.filledChip,label:"Filled",variant:"outlined",rounded:!0,color:"primary",selected:"filled"===T,onToggle:function(e,n){D(n?"filled":"")}}),(0,t.jsx)(h.Z,{className:l.outlinedChip,label:"Outlined",variant:"outlined",rounded:!0,color:"primary",selected:"outlined"===T,onToggle:function(e,n){D(n?"outlined":"")}})]})]}),(0,t.jsx)("div",{className:l.bodyContent,children:(0,t.jsx)(x.Z,{fluid:!0,noPadding:!0,children:(0,t.jsx)(b.Z,{children:ce})})})]}),(0,t.jsx)(L,{data:te,open:F,toggle:function(){W(!F)}})]})},ne=function(e){return(0,t.jsx)(w.Z,{children:e})};ee.getLayout=function(){return ne},ee.displayName=Q;var oe=!0,te=ee},4069:function(e,n,o){"use strict";o.d(n,{t:function(){return t},z:function(){return a}});var t=["dev","develop","developer","development","react","js","reactjs","javascript","design system","sonnat","sonnat-ui","ui","user interface","\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u06af\u0627\u0646","\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc","\u0633\u0646\u062a","\u0633\u0646\u0651\u062a"],a="https://www.sonnat.dev"},1374:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/packages/icons",function(){return o(8111)}])}},function(e){e.O(0,[9774,2981,8867,2888,179],(function(){return n=1374,e(e.s=n);var n}));var n=e.O();_N_E=n}]);