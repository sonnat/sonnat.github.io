(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2601],{2395:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Menu",function(){return t(8035)}])},7531:function(n,e,t){"use strict";t.d(e,{Z:function(){return A}});var l=t(5893),o=t(9140),r=t(5110),i=t(8315),u=t(6328),a=t(2621),c=t(422),s=t(1109),d=t(336),m=t.n(d),k=t(4184),h=t.n(k),p=t(7087),f=t(7294),g=t(1329),x=t(6260),b=t(184);function y(n){if(Array.isArray(n))return n}function v(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function M(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},l=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),l.forEach((function(e){v(n,e,t[e])}))}return n}function w(n,e){if(null==n)return{};var t,l,o=function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function I(n,e){return y(n)||function(n,e){var t=[],l=!0,o=!1,r=void 0;try{for(var i,u=n[Symbol.iterator]();!(l=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return t}(n,e)||C()}function j(n){return y(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||C()}var T="DemoBox",O=m()((function(n){var e=n.colors,t=n.darkMode,l=n.swatches,o=n.spacings.spacer,r=n.typography.pxToRem;return{root:{border:"1px solid ".concat(t?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:r(.5*o.px)},"& + &":{marginTop:o.rem},"& + p":{marginTop:o.rem}},demoContainer:v({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:r(100),padding:r(2*o.px),backgroundColor:e.background.origin},n.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(e.divider),backgroundColor:e.background.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:r(56),paddingLeft:r(.5*o.px),paddingRight:r(.5*o.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:r(.5*o.px)},expandCode:{},codeContainer:v({},n.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(r(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:l.grey[900],maxHeight:r(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:T}),S=function(n){var e=j(n),t=e[0],l=e.slice(1);return"".concat(t.toUpperCase()).concat(l.join(""))},Z=function(n){var e=n.className,t=n.children,d=n.code,m=n.horizontalAlignment,k=void 0===m?"center":m,f=n.verticalAlignment,y=void 0===f?"center":f,C=n.flexDirection,j=void 0===C?"row":C,T=w(n,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),Z=O(),D=I((0,x.Z)(d||"",{successDuration:1e3}),2),A=D[0],R=D[1],E=(0,g.Z)(),N=E.isExpanded,B=E.setExpanded,F=E.getCollapseProps,$="hAlign".concat(S(k)),P="vAlign".concat(S(y)),W="flexDirection".concat(S(j));return(0,l.jsxs)("div",M({},T,{className:h()("demo-box",Z.root,e,Z[$],Z[P],Z[W],v({},Z.expanded,N)),children:[(0,l.jsx)("div",{className:Z.demoContainer,children:t}),(0,l.jsxs)("div",{className:Z.codeWrapper,children:[(0,l.jsxs)("div",{className:Z.codeHeader,children:[!N&&(0,l.jsx)(u.Z,{label:"View Code",variant:"inlined",size:"small",className:Z.viewCode,onClick:function(){return B((function(n){return!n}))}}),(0,l.jsx)(a.Z,{text:"Copied to clipboard!",open:A,children:(0,l.jsx)(c.Z,{icon:(0,l.jsx)(o.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:Z.copyCode,onClick:function(){return R()}})}),(0,l.jsx)(c.Z,{icon:N?(0,l.jsx)(r.Z,{}):(0,l.jsx)(i.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:Z.expandCode,onClick:function(){return B((function(n){return!n}))}})]}),(0,l.jsx)("div",M({},F(),{children:(0,l.jsx)("div",{className:Z.codeContainer,children:(0,l.jsx)(p.ZP,M({},p.lG,{code:d||"",language:"tsx",theme:b.Z,children:function(n){var e=n.className,t=n.style,o=n.tokens,r=n.getLineProps,i=n.getTokenProps;return(0,l.jsx)(s.Z,{codeBlock:!0,style:t,className:h()(e,Z.codeBlock),children:o.map((function(n,e){var t=e===o.length-1;return(0,l.jsx)("div",M({},r({line:n,key:e}),{children:n.map((function(n,e){return t&&n.empty?null:(0,l.jsx)("span",M({},i({token:n,key:e})),"".concat(n.content,"/").concat(e))}))}),"".concat(n.length,"/").concat(e))}))})}}))})}))]})]}))},D=f.memo(Z);D.displayName=T;var A=D},8035:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R},meta:function(){return D}});var l=t(7294),o=t(3905),r=t(5048),i=t(3814),u=t(9522),a=t(5893),c=t(6328),s=t(3308),d=t(945),m=t(7531);function k(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],l=!0,o=!1,r=void 0;try{for(var i,u=n[Symbol.iterator]();!(l=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(){var n=k(l.useState(!1),2),e=n[0],t=n[1],o=l.useRef(null);return(0,a.jsx)(m.Z,{code:'import { Button, Menu, MenuItem } from "@sonnat/ui";\nimport * as React from "react";\n\nconst MenuSimpleDemo = () => {\n  const [isMenuOpen, setMenuOpen] = React.useState(false);\n  const anchorElement = React.useRef();\n\n  return (\n    <React.Fragment>\n      <Button\n        aria-controls="simple-menu-1"\n        ref={anchorElement}\n        size="small"\n        variant="inlined"\n        label="Toggle the menu"\n        onClick={() => void setMenuOpen(o => !o)}\n      />\n      <Menu\n        id="simple-menu-1"\n        open={isMenuOpen}\n        anchorNode={anchorElement.current}\n      >\n        <MenuItem>First item</MenuItem>\n        <MenuItem>Second item</MenuItem>\n        <MenuItem>Third item</MenuItem>\n      </Menu>\n    </React.Fragment>\n  );\n};\n\nexport default MenuSimpleDemo;\n',children:(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(c.Z,{"aria-controls":"simple-menu-1",ref:o,size:"small",variant:"inlined",label:"Toggle the menu",onClick:function(){t((function(n){return!n}))}}),(0,a.jsxs)(s.Z,{id:"simple-menu-1",open:e,anchorNode:o.current,children:[(0,a.jsx)(d.Z,{children:"First item"}),(0,a.jsx)(d.Z,{children:"Second item"}),(0,a.jsx)(d.Z,{children:"Third item"})]})]})})};h.displayName="MenuSimpleDemo";var p=h;function f(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],l=!0,o=!1,r=void 0;try{for(var i,u=n[Symbol.iterator]();!(l=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var n=f(l.useState(!1),2),e=n[0],t=n[1],o=l.useRef(null);return(0,a.jsx)(m.Z,{code:'import { Button, Menu, MenuItem } from "@sonnat/ui";\nimport * as React from "react";\n\nconst MenuOutsideClickDemo = () => {\n  const [isMenuOpen, setMenuOpen] = React.useState(false);\n  const anchorElement = React.useRef();\n\n  return (\n    <React.Fragment>\n      <Button\n        aria-controls="simple-menu-2"\n        ref={anchorElement}\n        size="small"\n        variant="inlined"\n        label="Toggle the menu"\n        onClick={() => void setMenuOpen(o => !o)}\n      />\n      <Menu\n        id="simple-menu-2"\n        open={isMenuOpen}\n        anchorNode={anchorElement.current}\n        onOutsideClick={() => void setMenuOpen(false)}\n      >\n        <MenuItem>First item</MenuItem>\n        <MenuItem>Second item</MenuItem>\n        <MenuItem>Third item</MenuItem>\n      </Menu>\n    </React.Fragment>\n  );\n};\n\nexport default MenuOutsideClickDemo;\n',children:(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(c.Z,{"aria-controls":"simple-menu-2",ref:o,size:"small",variant:"inlined",label:"Toggle the menu",onClick:function(){t((function(n){return!n}))}}),(0,a.jsxs)(s.Z,{id:"simple-menu-2",open:e,anchorNode:o.current,onOutsideClick:function(){t(!1)},children:[(0,a.jsx)(d.Z,{children:"First item"}),(0,a.jsx)(d.Z,{children:"Second item"}),(0,a.jsx)(d.Z,{children:"Third item"})]})]})})};g.displayName="MenuOutsideClickDemo";var x=g,b=t(7045);function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],l=!0,o=!1,r=void 0;try{for(var i,u=n[Symbol.iterator]();!(l=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(){var n=y(l.useState(!1),2),e=n[0],t=n[1],o=l.useRef(null),r=function(){t(!1)};return(0,a.jsx)(m.Z,{code:'import { Button, Menu, MenuItem, MenuItemGroup } from "@sonnat/ui";\nimport * as React from "react";\n\nconst MenuWithGroupedItemsDemo = () => {\n  const [isMenuOpen, setMenuOpen] = React.useState(false);\n  const anchorElement = React.useRef();\n\n  const closeCallback = () => void setMenuOpen(false);\n\n  return (\n    <React.Fragment>\n      <Button\n        aria-controls="with-grouped-items-0"\n        ref={anchorElement}\n        size="small"\n        variant="inlined"\n        label="Toggle the menu"\n        onClick={() => void setMenuOpen(o => !o)}\n      />\n      <Menu\n        id="with-grouped-items-0"\n        open={isMenuOpen}\n        onOutsideClick={closeCallback}\n        anchorNode={anchorElement.current}\n      >\n        <MenuItemGroup title="1st Group">\n          <MenuItem onClick={closeCallback}>First item</MenuItem>\n          <MenuItem onClick={closeCallback}>Second item</MenuItem>\n          <MenuItem onClick={closeCallback}>Third item</MenuItem>\n        </MenuItemGroup>\n        <MenuItemGroup title="2nd Group">\n          <MenuItem onClick={closeCallback}>Fourth item</MenuItem>\n          <MenuItem onClick={closeCallback}>Fifth item</MenuItem>\n          <MenuItem onClick={closeCallback}>Sixth item</MenuItem>\n        </MenuItemGroup>\n        <MenuItem onClick={closeCallback}>Seventh item</MenuItem>\n        <MenuItem onClick={closeCallback}>Eighth item</MenuItem>\n      </Menu>\n    </React.Fragment>\n  );\n};\n\nexport default MenuWithGroupedItemsDemo;\n',children:(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(c.Z,{"aria-controls":"with-grouped-items-0",ref:o,size:"small",variant:"inlined",label:"Toggle the menu",onClick:function(){t((function(n){return!n}))}}),(0,a.jsxs)(s.Z,{id:"with-grouped-items-0",open:e,onOutsideClick:r,anchorNode:o.current,children:[(0,a.jsxs)(b.Z,{title:"1st Group",children:[(0,a.jsx)(d.Z,{onClick:r,children:"First item"}),(0,a.jsx)(d.Z,{onClick:r,children:"Second item"}),(0,a.jsx)(d.Z,{onClick:r,children:"Third item"})]}),(0,a.jsxs)(b.Z,{title:"2nd Group",children:[(0,a.jsx)(d.Z,{onClick:r,children:"Fourth item"}),(0,a.jsx)(d.Z,{onClick:r,children:"Fifth item"}),(0,a.jsx)(d.Z,{onClick:r,children:"Sixth item"})]}),(0,a.jsx)(d.Z,{onClick:r,children:"Seventh item"}),(0,a.jsx)(d.Z,{onClick:r,children:"Eighth item"})]})]})})};v.displayName="MenuWithGroupedItemsDemo";var C=v;function M(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],l=!0,o=!1,r=void 0;try{for(var i,u=n[Symbol.iterator]();!(l=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(a){o=!0,r=a}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(){var n=M(l.useState(!1),2),e=n[0],t=n[1],o=l.useRef(null),r=function(){t(!1)};return(0,a.jsx)(m.Z,{code:'import { Button, Menu, MenuItem } from "@sonnat/ui";\nimport * as React from "react";\n\nconst MenuWithBugWorkaroundDemo = () => {\n  const [isMenuOpen, setMenuOpen] = React.useState(false);\n  const anchorElement = React.useRef();\n\n  const closeCallback = () => void setMenuOpen(false);\n\n  return (\n    <React.Fragment>\n      <Button\n        aria-controls="with-workaround-0"\n        ref={anchorElement}\n        size="small"\n        variant="inlined"\n        label="Toggle the menu"\n        onClick={() => void setMenuOpen(o => !o)}\n      />\n      <Menu\n        id="with-workaround-0"\n        open={isMenuOpen}\n        onOutsideClick={closeCallback}\n        anchorNode={anchorElement.current}\n      >\n        <MenuItem onClick={closeCallback}>First item</MenuItem>\n        <MenuItem onClick={closeCallback}>\n          <span style={{ textOverflow: "ellipsis", overflow: "hidden" }}>\n            Second item longwordlongwordlongword\n          </span>\n        </MenuItem>\n        <MenuItem onClick={closeCallback}>Third item</MenuItem>\n      </Menu>\n    </React.Fragment>\n  );\n};\n\nexport default MenuWithBugWorkaroundDemo;\n',children:(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(c.Z,{"aria-controls":"with-workaround-0",ref:o,size:"small",variant:"inlined",label:"Toggle the menu",onClick:function(){t((function(n){return!n}))}}),(0,a.jsxs)(s.Z,{id:"with-workaround-0",open:e,onOutsideClick:r,anchorNode:o.current,children:[(0,a.jsx)(d.Z,{onClick:r,children:"First item"}),(0,a.jsx)(d.Z,{onClick:r,children:(0,a.jsx)("span",{style:{textOverflow:"ellipsis",overflow:"hidden"},children:"Second item longwordlongwordlongword"})}),(0,a.jsx)(d.Z,{onClick:r,children:"Third item"})]})]})})};w.displayName="MenuWithBugWorkaroundDemo";var I=w,j=t(9008),T=t(9118),O=t(5175);function S(n,e){if(null==n)return{};var t,l,o=function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function Z(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var D={title:"Menu",description:"Displays a list of choices on temporary surfaces.",getLayout:function(){return function(n){return(0,o.kt)(u.Z,{mdxType:"WithSidebar"},n)}}},A={meta:D};function R(n){var e=n.components,t=S(n,["components"]);return(0,o.kt)("wrapper",Object.assign({},A,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(j.default,{mdxType:"Head"},(0,O.aT)("".concat(D.title," | Sonnat Developer Tools, React Components & Resources")),(0,O.u2)(D.description),(0,O.ai)("".concat(T.z,"/docs/components/").concat(D.title)),(0,O.hL)(Z(T.t).concat(["menu","\u0645\u0646\u0648"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,D.title),(0,o.kt)(i.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(r.Z,{href:"pages/docs/components/".concat(D.title,".mdx"),mdxType:"PageEditButton"})),(0,o.kt)("p",null,D.description),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Simple Menu"),(0,o.kt)(i.Z,{anchorId:"simple-menu",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Simple menus open under the anchor element and stick to the left when"," ",(0,o.kt)("inlineCode",null,"theme.direction === 'ltr'")," or to the right when"," ",(0,o.kt)("inlineCode",null,"theme.direction === 'rtl'"),". (you can force the starting point via ",(0,o.kt)("inlineCode",null,"placement")," property)."),(0,o.kt)(p,{mdxType:"MenuSimpleDemo"}),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("strong",null,"outside-click")," callback via"," ",(0,o.kt)("inlineCode",null,"onOutsideClick")," property.",(0,o.kt)("br",null),"You can also pass a ",(0,o.kt)("strong",null,"outside-click detector")," callback (that returns a boolean) via ",(0,o.kt)("inlineCode",null,"outsideClickDetector")," to overwrite the default detection function. This is super useful in the situations you are having complex interactions and you want to fully control the behaviour of your menus."),(0,o.kt)(x,{mdxType:"MenuOutsideClickDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Menus with Grouped Items"),(0,o.kt)(i.Z,{anchorId:"with-grouped-items",mdxType:"AnchorButton"})),(0,o.kt)(C,{mdxType:"MenuWithGroupedItemsDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Text Overflow"),(0,o.kt)(i.Z,{anchorId:"text-overflow",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"There is a"," ",(0,o.kt)("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=327437",target:"_blank",rel:"noopener noreferrer",title:"Flexbox bug docs"},"flexbox bug")," ","that prevents ",(0,o.kt)("inlineCode",null,"text-overflow: ellipsis")," from working in a flexbox layout. You can use the following workaround for this issue:"),(0,o.kt)(I,{mdxType:"MenuWithBugWorkaroundDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"API"),(0,o.kt)(i.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Learn more about the properties and the customization points."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Usage"),(0,o.kt)(i.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import Menu, { MenuItem, MenuItemGroup } from "@sonnat/ui/Menu";\n\n//or\nimport { Menu, MenuItem, MenuItemGroup } from "@sonnat/ui";\n')),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Properties"),(0,o.kt)(i.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"Menu")," Properties"),(0,o.kt)(i.Z,{anchorId:"parent-properties",mdxType:"AnchorButton"})),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"Menu Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"children"),(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The content of the menu.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"anchorNode",(0,o.kt)("br",null),(0,o.kt)("mark",null,"required")),(0,o.kt)("td",null,"null | Element"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"An HTML element. It's used to set the position of the menu.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"placement"),(0,o.kt)("td",null,'"left" | "right"'),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,'The placement of the menu. (start from "left" or "right")')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"minWidth"),(0,o.kt)("td",null,"number"),(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"Sets the minimum width of the menu.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"searchPlaceholder"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The ",(0,o.kt)("inlineCode",null,"placeholder")," property of the search field.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"searchEmptyStatementText"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The empty statement text when search results are empty.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"disabled"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the menu will be searchable.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"searchable"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the menu will be searchable.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"preventPageScrolling"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the menu will block the page's scrolling.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"dense"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the menu will appear denser.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"open"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the menu will be open.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onOpen"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the menu has opened.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function() => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onClose"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the menu has closed.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function() => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onEscapeKeyDown"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the `Escape` key is released.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: KeyboardEvent) => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onOutsideClick"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when user has clicked outside of the menu.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: MouseEvent) => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"outsideClickDetector"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the user has clicked, and determines whether the click occured outside of the menu or not.",(0,o.kt)("br",null),"It only fires when the menu is open!",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.MouseEvent) => boolean")))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"Menu/Item")," Properties"),(0,o.kt)(i.Z,{anchorId:"menu-item-properties",mdxType:"AnchorButton"})),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"Menu/Item Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"children"),(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The content of the menu item.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"disabled"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the item will be hidden.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onClick"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the item has been clicked.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.MouseEvent) => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onFocus"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the item has received focus.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.FocusEvent) => void"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onBlur"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the item has lost focus.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.FocusEvent) => void")))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"Menu/ItemGroup")," Properties"),(0,o.kt)(i.Z,{anchorId:"menu-itemgroup-properties",mdxType:"AnchorButton"})),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"Menu/ItemGroup Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"children"),(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The content of the group.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"titleClassName"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the classNames applied to the title so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"title"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The title of the group."))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}R.isMDXComponent=!0}},function(n){n.O(0,[8242,9290,3049,2389,9774,2888,179],(function(){return e=2395,n(n.s=e);var e}));var e=n.O();_N_E=e}]);