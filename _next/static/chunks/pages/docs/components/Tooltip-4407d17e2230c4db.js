(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{1818:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Tooltip",function(){return n(6559)}])},7531:function(t,e,n){"use strict";n.d(e,{Z:function(){return S}});var o=n(5893),l=n(9140),r=n(5110),i=n(8315),a=n(6328),c=n(2621),u=n(422),d=n(1109),s=n(336),p=n.n(s),m=n(4184),h=n.n(m),k=n(7087),f=n(7294),x=n(1329),v=n(6260),g=n(184);function y(t){if(Array.isArray(t))return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){T(t,e,n[e])}))}return t}function w(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}function j(t,e){return y(t)||function(t,e){var n=[],o=!0,l=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return n}(t,e)||b()}function O(t){return y(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||b()}var Z="DemoBox",D=p()((function(t){var e=t.colors,n=t.darkMode,o=t.swatches,l=t.spacings.spacer,r=t.typography.pxToRem;return{root:{border:"1px solid ".concat(n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:r(.5*l.px)},"& + &":{marginTop:l.rem},"& + p":{marginTop:l.rem}},demoContainer:T({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:r(100),padding:r(2*l.px),backgroundColor:e.background.origin},t.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(e.divider),backgroundColor:e.background.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:r(56),paddingLeft:r(.5*l.px),paddingRight:r(.5*l.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:r(.5*l.px)},expandCode:{},codeContainer:T({},t.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(r(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:o.grey[900],maxHeight:r(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:Z}),A=function(t){var e=O(t),n=e[0],o=e.slice(1);return"".concat(n.toUpperCase()).concat(o.join(""))},I=function(t){var e=t.className,n=t.children,s=t.code,p=t.horizontalAlignment,m=void 0===p?"center":p,f=t.verticalAlignment,y=void 0===f?"center":f,b=t.flexDirection,O=void 0===b?"row":b,Z=w(t,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),I=D(),N=j((0,v.Z)(s||"",{successDuration:1e3}),2),S=N[0],P=N[1],$=(0,x.Z)(),R=$.isExpanded,E=$.setExpanded,B=$.getCollapseProps,_="hAlign".concat(A(m)),M="vAlign".concat(A(y)),H="flexDirection".concat(A(O));return(0,o.jsxs)("div",C({},Z,{className:h()("demo-box",I.root,e,I[_],I[M],I[H],T({},I.expanded,R)),children:[(0,o.jsx)("div",{className:I.demoContainer,children:n}),(0,o.jsxs)("div",{className:I.codeWrapper,children:[(0,o.jsxs)("div",{className:I.codeHeader,children:[!R&&(0,o.jsx)(a.Z,{label:"View Code",variant:"inlined",size:"small",className:I.viewCode,onClick:function(){return E((function(t){return!t}))}}),(0,o.jsx)(c.Z,{text:"Copied to clipboard!",open:S,children:(0,o.jsx)(u.Z,{icon:(0,o.jsx)(l.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:I.copyCode,onClick:function(){return P()}})}),(0,o.jsx)(u.Z,{icon:R?(0,o.jsx)(r.Z,{}):(0,o.jsx)(i.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:I.expandCode,onClick:function(){return E((function(t){return!t}))}})]}),(0,o.jsx)("div",C({},B(),{children:(0,o.jsx)("div",{className:I.codeContainer,children:(0,o.jsx)(k.ZP,C({},k.lG,{code:s||"",language:"tsx",theme:g.Z,children:function(t){var e=t.className,n=t.style,l=t.tokens,r=t.getLineProps,i=t.getTokenProps;return(0,o.jsx)(d.Z,{codeBlock:!0,style:n,className:h()(e,I.codeBlock),children:l.map((function(t,e){var n=e===l.length-1;return(0,o.jsx)("div",C({},r({line:t,key:e}),{children:t.map((function(t,e){return n&&t.empty?null:(0,o.jsx)("span",C({},i({token:t,key:e})),"".concat(t.content,"/").concat(e))}))}),"".concat(t.length,"/").concat(e))}))})}}))})}))]})]}))},N=f.memo(I);N.displayName=Z;var S=N},6559:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P},meta:function(){return N}});var o=n(7294),l=n(3905),r=n(2621),i=n(5048),a=n(3814),c=n(9522),u=n(5893),d=n(281),s=n(454),p=n(7379),m=n(611),h=n(336),k=n.n(h),f=n(4184),x=n.n(f),v=n(7531);function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,l=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=k()((function(t){return{demoRow:{display:"flex","& + &":{marginTop:(0,t.typography.pxToRem)(40)}},placementControl:{alignItems:"center"}}}),{name:"TooltipPlacementDemo"}),T=function(){var t=y(),e=g(o.useState("top"),2),n=e[0],l=e[1],i='<Tooltip\n  text="The informative text!"\n  placement="'.concat(n,'"\n  open={true}\n  tailed\n>\n  <div>Placement (').concat(n,")</div>\n</Tooltip>");return(0,u.jsxs)(v.Z,{code:i,flexDirection:"column",horizontalAlignment:"center",children:[(0,u.jsx)("div",{className:t.demoRow,children:(0,u.jsxs)(d.Z,{className:x()(t.placementControl,"demoSubject"),children:[(0,u.jsx)(s.Z,{htmlFor:"radiogroup-placement",children:"Placement"}),(0,u.jsxs)(p.Z,{title:"Tooltip's placement",id:"radiogroup-placement",defaultValue:"left",layoutDirection:"row",onChange:function(t){l(t)},children:[(0,u.jsx)(m.Z,{inputProps:{id:"radiogroup-placement-top"},label:"top",value:"top"}),(0,u.jsx)(m.Z,{inputProps:{id:"radiogroup-placement-left"},label:"left",value:"left"}),(0,u.jsx)(m.Z,{inputProps:{id:"radiogroup-placement-right"},label:"right",value:"right"}),(0,u.jsx)(m.Z,{inputProps:{id:"radiogroup-placement-bottom"},label:"bottom",value:"bottom"})]})]})}),(0,u.jsx)("div",{className:t.demoRow,children:(0,u.jsx)(r.Z,{text:"The informative text!",placement:n,tailed:!0,open:!0,children:(0,u.jsxs)("div",{children:["Placement (",n,")"]})})})]})};T.displayName="TooltipPlacementDemo";var b=T;function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,l=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(){var t=C(o.useState(!1),2),e=t[0],n=t[1];return(0,u.jsx)(v.Z,{code:'import Tooltip from "@sonnat/ui/Tooltip";\nimport * as React from "react";\n\nconst TooltipControllingDemo = () => {\n  const [isOpen, setOpen] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <Tooltip text="The informative text!" defaultOpen={true}>\n        <small>uncontrolled</small>\n      </Tooltip>\n      <Tooltip\n        text="The informative text!"\n        open={isOpen}\n        onOpen={() => void setOpen(true)}\n        onClose={() => void setOpen(false)}\n      >\n        <small>controlled</small>\n      </Tooltip>\n    </React.Fragment>\n  );\n};\n\nexport default TooltipControllingDemo;',children:(0,u.jsxs)(o.Fragment,{children:[(0,u.jsx)("div",{className:"demoSubject",children:(0,u.jsx)(r.Z,{text:"The informative text!",defaultOpen:!0,children:(0,u.jsx)("small",{children:"uncontrolled"})})}),(0,u.jsx)("div",{className:"demoSubject",children:(0,u.jsx)(r.Z,{text:"The informative text!",open:e,onOpen:function(){n(!0)},onClose:function(){n(!1)},children:(0,u.jsx)("small",{children:"controlled"})})})]})})};w.displayName="TooltipControllingDemo";var j=w,O=n(9008),Z=n(9118),D=n(5175);function A(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}function I(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N={title:"Tooltip",description:"Tooltips display informative text when users hover over, or tap an element.",getLayout:function(){return function(t){return(0,l.kt)(c.Z,{mdxType:"WithSidebar"},t)}}},S={meta:N};function P(t){var e=t.components,n=A(t,["components"]);return(0,l.kt)("wrapper",Object.assign({},S,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(O.default,{mdxType:"Head"},(0,D.aT)("".concat(N.title," | Sonnat Developer Tools, React Components & Resources")),(0,D.u2)(N.description),(0,D.ai)("".concat(Z.z,"/docs/components/").concat(N.title)),(0,D.hL)(I(Z.t).concat(["tooltip","\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0627\u0628\u0632\u0627\u0631"]))),(0,l.kt)("h1",null,(0,l.kt)("span",null,N.title),(0,l.kt)(a.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,l.kt)(i.Z,{href:"pages/docs/components/".concat(N.title,".mdx"),mdxType:"PageEditButton"})),(0,l.kt)("p",null,N.description),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Triggers on Hover"),(0,l.kt)(a.Z,{anchorId:"triggers-on-hover",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Displays the tooltip when users hover over the anchor element. This behaviour is the default behaviour of the tooltips."),(0,l.kt)(v.Z,{code:'<Tooltip text="The informative text!">\n  <div>Hover me!</div>\n</Tooltip>',mdxType:"DemoBox"},(0,l.kt)(r.Z,{text:"The informative text!",mdxType:"Tooltip"},(0,l.kt)("div",null,"Hover me!"))),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Triggers on Click"),(0,l.kt)(a.Z,{anchorId:"triggers-on-click",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Displays the tooltip when users click on the anchor element."),(0,l.kt)(v.Z,{code:'<Tooltip text="The informative text!" triggersOn="click">\n  <div>Click me!</div>\n</Tooltip>',mdxType:"DemoBox"},(0,l.kt)(r.Z,{text:"The informative text!",triggersOn:"click",mdxType:"Tooltip"},(0,l.kt)("div",null,"Click me!"))),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Triggers on MouseMove"),(0,l.kt)(a.Z,{anchorId:"triggers-on-mousemove",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"When mouse enters the anchor element, the tooltip will be displayed and follows the cursor."),(0,l.kt)(v.Z,{code:'<Tooltip text="The informative text!" triggersOn="mouseMove">\n  <div>Tickle me!</div>\n</Tooltip>',mdxType:"DemoBox"},(0,l.kt)(r.Z,{text:"The informative text!",triggersOn:"mouseMove",mdxType:"Tooltip"},(0,l.kt)("div",{id:"tickle-anchor"},"Tickle me!"))),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Arrow Tails"),(0,l.kt)(a.Z,{anchorId:"arrow-tails",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",null,"tailed")," property to give your tooltip an arrow tail indicating which element it refers to."),(0,l.kt)(v.Z,{code:'<Tooltip text="The informative text!" tailed>\n  <div>Tailed tooltip!</div>\n</Tooltip>',mdxType:"DemoBox"},(0,l.kt)(r.Z,{text:"The informative text!",tailed:!0,mdxType:"Tooltip"},(0,l.kt)("div",null,"Tailed tooltip!"))),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Controlled Tooltips"),(0,l.kt)(a.Z,{anchorId:"controlled-tooltips",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",null,"open"),", ",(0,l.kt)("inlineCode",null,"onOpen")," ","and ",(0,l.kt)("inlineCode",null,"onClose")," properties to control the behaviour of the tooltip."),(0,l.kt)(j,{mdxType:"TooltipControllingDemo"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Placement"),(0,l.kt)(a.Z,{anchorId:"placement",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",null,"placement")," property to change the tooltip's placement."),(0,l.kt)(b,{mdxType:"TooltipPlacementDemo"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"API"),(0,l.kt)(a.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Learn more about the properties and the customization points."),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Usage"),(0,l.kt)(a.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,l.kt)("pre",null,(0,l.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import Tooltip from "@sonnat/ui/Tooltip";\n\n//or\nimport { Tooltip } from "@sonnat/ui";\n')),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Properties"),(0,l.kt)(a.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"Tooltip Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children",(0,l.kt)("br",null),(0,l.kt)("mark",null,"required")),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The target element. This element works as an anchor for the tooltip.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"text",(0,l.kt)("br",null),(0,l.kt)("mark",null,"required")),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The text content of the tooltip.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placement"),(0,l.kt)("td",null,'"left"',(0,l.kt)("br",null),'| "right"',(0,l.kt)("br",null),'| "top"',(0,l.kt)("br",null),'| "bottom"'),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The tooltip's placement. It will be auto updated when it collide with the window.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"triggersOn"),(0,l.kt)("td",null,'"click"',(0,l.kt)("br",null),'| "hover"',(0,l.kt)("br",null),'| "mouseMove"'),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The source of the event that will trigger the tooltip.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tailed"),(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,"false"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the tooltip will have an arrow tail.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"open"),(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the tooltip will be open.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"defaultOpen"),(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the tooltip will be open on mount. Use when the component is not controlled.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onOutsideClick"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The callback fires when user has clicked outside of the tooltip.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function(event: MouseEvent) => void"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onOpen"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The callback fires when the component requests to be opened.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function(event: React.SyntheticEvent | Event) => void"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onClose"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The callback fires when the component requests to be closed.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function(event: React.SyntheticEvent | Event) => void")))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}P.isMDXComponent=!0}},function(t){t.O(0,[8242,3768,2389,9774,2888,179],(function(){return e=1818,t(t.s=e);var e}));var e=t.O();_N_E=e}]);