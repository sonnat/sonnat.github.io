(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{2860:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Snackbar",function(){return e(8146)}])},7531:function(n,t,e){"use strict";e.d(t,{Z:function(){return I}});var r=e(5893),l=e(3828),o=e(5110),a=e(8315),i=e(6328),c=e(2621),u=e(422),s=e(1109),d=e(336),p=e.n(d),m=e(4184),f=e.n(m),k=e(7087),h=e(7294),b=e(1329),g=e(6260),x=e(184);function y(n){if(Array.isArray(n))return n}function v(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){v(n,t,e[t])}))}return n}function w(n,t){if(null==n)return{};var e,r,l=function(n,t){if(null==n)return{};var e,r,l={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(l[e]=n[e]);return l}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(l[e]=n[e])}return l}function S(n,t){return y(n)||function(n,t){var e=[],r=!0,l=!1,o=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(c){l=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return e}(n,t)||C()}function T(n){return y(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||C()}var Z="DemoBox",D=p()((function(n){var t=n.darkMode,e=n.swatches,r=n.colors,l=r.divider,o=r.background,a=n.spacings.spacer,i=n.typography.pxToRem;return{root:{border:"1px solid ".concat(t?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:i(.5*a.px)},"& + &":{marginTop:a.rem},"& + p":{marginTop:a.rem}},demoContainer:v({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:i(100),padding:i(2*a.px),backgroundColor:t?o.dark.origin:o.light.origin},n.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(t?l.light:l.dark),backgroundColor:t?o.dark.origin:o.light.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:i(56),paddingLeft:i(.5*a.px),paddingRight:i(.5*a.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:i(.5*a.px)},expandCode:{},codeContainer:v({},n.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(i(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:e.grey[900],maxHeight:i(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:Z}),A=function(n){var t=T(n),e=t[0],r=t.slice(1);return"".concat(e.toUpperCase()).concat(r.join(""))},O=function(n){var t=n.className,e=n.children,d=n.code,p=n.horizontalAlignment,m=void 0===p?"center":p,h=n.verticalAlignment,y=void 0===h?"center":h,C=n.flexDirection,T=void 0===C?"row":C,Z=w(n,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),O=D(),N=S((0,g.Z)(d||"",{successDuration:1e3}),2),I=N[0],$=N[1],P=(0,b.Z)(),R=P.isExpanded,z=P.setExpanded,E=P.getCollapseProps,B="hAlign".concat(A(m)),_="vAlign".concat(A(y)),L="flexDirection".concat(A(T));return(0,r.jsxs)("div",j({},Z,{className:f()("demo-box",O.root,t,O[B],O[_],O[L],v({},O.expanded,R)),children:[(0,r.jsx)("div",{className:O.demoContainer,children:e}),(0,r.jsxs)("div",{className:O.codeWrapper,children:[(0,r.jsxs)("div",{className:O.codeHeader,children:[!R&&(0,r.jsx)(i.Z,{label:"View Code",variant:"inlined",size:"small",className:O.viewCode,onClick:function(){return z((function(n){return!n}))}}),(0,r.jsx)(c.Z,{text:"Copied to clipboard!",open:I,children:(0,r.jsx)(u.Z,{icon:(0,r.jsx)(l.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:O.copyCode,onClick:function(){return $()}})}),(0,r.jsx)(u.Z,{icon:R?(0,r.jsx)(o.Z,{}):(0,r.jsx)(a.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:O.expandCode,onClick:function(){return z((function(n){return!n}))}})]}),(0,r.jsx)("div",j({},E(),{children:(0,r.jsx)("div",{className:O.codeContainer,children:(0,r.jsx)(k.ZP,j({},k.lG,{code:d||"",language:"tsx",theme:x.Z,children:function(n){var t=n.className,e=n.style,l=n.tokens,o=n.getLineProps,a=n.getTokenProps;return(0,r.jsx)(s.Z,{codeBlock:!0,style:e,className:f()(t,O.codeBlock),children:l.map((function(n,t){var e=t===l.length-1;return(0,r.jsx)("div",j({},o({line:n,key:t}),{children:n.map((function(n,t){return e&&n.empty?null:(0,r.jsx)("span",j({},a({token:n,key:t})),"".concat(n.content,"/").concat(t))}))}),"".concat(n.length,"/").concat(t))}))})}}))})}))]})]}))},N=h.memo(O);N.displayName=Z;var I=N},8146:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return B},meta:function(){return z}});var r=e(7294),l=e(3905),o=e(5048),a=e(3814),i=e(9522),c=e(5893),u=e(6328),s=e(9756),d=e(7531);function p(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,l=!1,o=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(c){l=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var n=p(r.useState(!1),2),t=n[0],e=n[1];return(0,c.jsx)(d.Z,{code:'import { Button, Snackbar } from "@sonnat/ui";\nimport * as React from "react";\n\nconst Demo = () => {\n  const [isOpen, setOpen] = React.useState(false);\n  \n  return (\n    <React.Fragment>\n      <Button\n        label="Toggle Snackbar"\n        variant="outlined"\n        size="small"\n        onClick={() => void setOpen(o => !o)}\n      />\n      <Snackbar\n        text="This is a snackbar!"\n        open={isOpen}\n        closable\n        onClose={() => void setOpen(false)}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default Demo;',children:(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(u.Z,{label:"Toggle Snackbar",variant:"outlined",size:"small",onClick:function(){e((function(n){return!n}))}}),(0,c.jsx)(s.Z,{text:"This is a snackbar!",open:t,closable:!0,onClose:function(){e(!1)}})]})})};m.displayName="SnackbarSimpleDemo";var f=m,k=e(281),h=e(454),b=e(7379),g=e(611),x=e(336),y=e.n(x),v=e(4184),C=e.n(v);function j(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,l=!1,o=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(c){l=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=y()((function(n){return{demoRow:{display:"flex","& + &":{marginTop:n.spacings.spaces[7].rem}},placementControl:{alignItems:"center"}}}),{name:"SnackbarPlacementDemo"}),S=function(){var n=w(),t=j(r.useState("center"),2),e=t[0],l=t[1],o=j(r.useState(!1),2),a=o[0],i=o[1],p='<Snackbar\n  placement="'.concat(e,'"\n/>');return(0,c.jsxs)(d.Z,{code:p,flexDirection:"column",horizontalAlignment:"center",children:[(0,c.jsx)("div",{className:n.demoRow,children:(0,c.jsxs)(k.Z,{className:C()("demoSubject",n.placementControl),children:[(0,c.jsx)(h.Z,{htmlFor:"radiogroup-horizontal-align",children:"Placement"}),(0,c.jsxs)(b.Z,{id:"radiogroup-horizontal-align",defaultValue:"center",layoutDirection:"row",onChange:function(n){l(n)},children:[(0,c.jsx)(g.Z,{inputProps:{id:"radiogroup-horizontal-align-left"},label:"left",value:"left"}),(0,c.jsx)(g.Z,{inputProps:{id:"radiogroup-horizontal-align-center"},label:"center",value:"center"}),(0,c.jsx)(g.Z,{inputProps:{id:"radiogroup-horizontal-align-right"},label:"right",value:"right"})]})]})}),(0,c.jsx)("div",{className:n.demoRow,children:(0,c.jsxs)("div",{className:"demoSubject",children:[(0,c.jsx)(u.Z,{label:"Toggle Snackbar",variant:"outlined",size:"small",onClick:function(){i((function(n){return!n}))}}),(0,c.jsx)(s.Z,{text:"The informative text!",open:a,placement:e},e)]})})]})};S.displayName="SnackbarPlacementDemo";var T=S;function Z(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,l=!1,o=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(c){l=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=y()((function(n){return{demoRow:{display:"flex","& + &":{marginTop:n.spacings.spaces[7].rem}},placementControl:{alignItems:"center"}}}),{name:"SnackbarColorDemo"}),A=function(){var n=D(),t=Z(r.useState("default"),2),e=t[0],l=t[1],o=Z(r.useState(!1),2),a=o[0],i=o[1],p='<Snackbar\n  color="'.concat(e,'"\n/>');return(0,c.jsxs)(d.Z,{code:p,flexDirection:"column",horizontalAlignment:"center",children:[(0,c.jsx)("div",{className:n.demoRow,children:(0,c.jsxs)(k.Z,{className:C()("demoSubject",n.placementControl),children:[(0,c.jsx)(h.Z,{htmlFor:"radiogroup-horizontal-align",children:"Color"}),(0,c.jsxs)(b.Z,{defaultValue:e,layoutDirection:"row",onChange:function(n){l(n)},children:[(0,c.jsx)(g.Z,{label:"default",value:"default"}),(0,c.jsx)(g.Z,{label:"success",value:"success"}),(0,c.jsx)(g.Z,{label:"warning",value:"warning"}),(0,c.jsx)(g.Z,{label:"error",value:"error"}),(0,c.jsx)(g.Z,{label:"info",value:"info"})]})]})}),(0,c.jsx)("div",{className:n.demoRow,children:(0,c.jsxs)("div",{className:"demoSubject",children:[(0,c.jsx)(u.Z,{label:"Toggle Snackbar",variant:"outlined",size:"small",onClick:function(){i((function(n){return!n}))}}),(0,c.jsx)(s.Z,{text:"The informative text!",open:a,color:e})]})})]})};A.displayName="SnackbarColorDemo";var O=A,N=e(9008),I=e(9118),$=e(4765);function P(n,t){if(null==n)return{};var e,r,l=function(n,t){if(null==n)return{};var e,r,l={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(l[e]=n[e]);return l}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(l[e]=n[e])}return l}function R(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var z={title:"Snackbar",description:"Displays an important message globally. The component is also known as a toast.",getLayout:function(){return function(n){return(0,l.kt)(i.Z,{mdxType:"WithSidebar"},n)}}},E={meta:z};function B(n){var t=n.components,e=P(n,["components"]);return(0,l.kt)("wrapper",Object.assign({},E,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(N.default,{mdxType:"Head"},(0,$.aT)("".concat(z.title," | Sonnat Developer Tools, React Components & Resources")),(0,$.u2)(z.description),(0,$.ai)("".concat(I.z,"/docs/components/").concat(z.title)),(0,$.hL)(R(I.t).concat(["snackbar","toast"]))),(0,l.kt)("h1",null,(0,l.kt)("span",null,z.title),(0,l.kt)(a.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,l.kt)(o.Z,{href:"pages/docs/components/".concat(z.title,".mdx"),mdxType:"PageEditButton"})),(0,l.kt)("p",null,z.description),(0,l.kt)("p",null,"Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen.",(0,l.kt)("br",null),"They shouldn\u2019t interrupt the user experience."),(0,l.kt)("p",null,"Only one snackbar may be displayed at a time."),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Simple Snackbars"),(0,l.kt)(a.Z,{anchorId:"simple-snackbars",mdxType:"AnchorButton"})),(0,l.kt)(f,{mdxType:"SnackbarSimpleDemo"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Placement"),(0,l.kt)(a.Z,{anchorId:"placement",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",null,"placement")," property to change the snackbar's horizontal placement."),(0,l.kt)(T,{mdxType:"SnackbarPlacementDemo"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Color"),(0,l.kt)(a.Z,{anchorId:"color",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",null,"color")," property to change the snackbar's color."),(0,l.kt)(O,{mdxType:"SnackbarColorDemo"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"API"),(0,l.kt)(a.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Learn more about the properties and the customization points."),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Usage"),(0,l.kt)(a.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,l.kt)("pre",null,(0,l.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import Snackbar from "@sonnat/ui/Snackbar";\n\n//or\nimport { Snackbar } from "@sonnat/ui";\n')),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Properties"),(0,l.kt)(a.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"Snackbar Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"text",(0,l.kt)("br",null),(0,l.kt)("mark",null,"required")),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The text to display.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"actionLabel"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The text to display on the action button.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"icon"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The leading icon element placed before the text.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"placement"),(0,l.kt)("td",null,'"left"',(0,l.kt)("br",null),'| "center"',(0,l.kt)("br",null),'| "right"'),(0,l.kt)("td",null,'"center"'),(0,l.kt)("td",null,"The horizontal placement of the snackbar.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoHide"),(0,l.kt)("td",null,"boolean",(0,l.kt)("br",null),"| number"),(0,l.kt)("td",null,"false"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the snackbar automatically closes after a calculated time.",(0,l.kt)("br",null),"This calculated time depends on the number of characters in the snackbar's content.",(0,l.kt)("br",null),"If a number is entered, the snackbar will be closed after that amount of time (in miliseconds).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"open"),(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,"false"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the snackbar will be open.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"closable"),(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,"false"),(0,l.kt)("td",null,"If ",(0,l.kt)("inlineCode",null,"true"),", the snackbar will have close button.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"color"),(0,l.kt)("td",null,'"default"',(0,l.kt)("br",null),'| "success"',(0,l.kt)("br",null),'| "warning"',(0,l.kt)("br",null),'| "error"',(0,l.kt)("br",null),'| "info"'),(0,l.kt)("td",null,'"default"'),(0,l.kt)("td",null,"The color of the snackbar.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onClose"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The callback fires when the component has closed.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function() => void"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"actionCallback"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The Callback fires when the action button is clicked.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function() => void")))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}B.isMDXComponent=!0}},function(n){n.O(0,[8242,3107,2389,9774,2888,179],(function(){return t=2860,n(n.s=t);var t}));var t=n.O();_N_E=t}]);