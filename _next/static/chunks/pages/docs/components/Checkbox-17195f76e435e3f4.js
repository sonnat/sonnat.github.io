(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9790],{4602:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Checkbox",function(){return n(7851)}])},7531:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var l=n(5893),o=n(3828),r=n(5110),i=n(8315),a=n(6328),c=n(2621),u=n(422),d=n(1109),s=n(336),k=n.n(s),h=n(4184),p=n.n(h),b=n(7087),m=n(7294),f=n(1329),x=n(6260),C=n(184);function g(e){if(Array.isArray(e))return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){y(e,t,n[t])}))}return e}function T(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){return g(e)||function(e,t){var n=[],l=!0,o=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(l=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);l=!0);}catch(c){o=!0,r=c}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||v()}function Z(e){return g(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||v()}var A="DemoBox",D=k()((function(e){var t=e.darkMode,n=e.swatches,l=e.colors,o=l.divider,r=l.background,i=e.spacings.spacer,a=e.typography.pxToRem;return{root:{border:"1px solid ".concat(t?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:a(.5*i.px)},"& + &":{marginTop:i.rem},"& + p":{marginTop:i.rem}},demoContainer:y({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:a(100),padding:a(2*i.px),backgroundColor:t?r.dark.origin:r.light.origin},e.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(t?o.light:o.dark),backgroundColor:t?r.dark.origin:r.light.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:a(56),paddingLeft:a(.5*i.px),paddingRight:a(.5*i.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:a(.5*i.px)},expandCode:{},codeContainer:y({},e.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(a(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:n.grey[900],maxHeight:a(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:A}),I=function(e){var t=Z(e),n=t[0],l=t.slice(1);return"".concat(n.toUpperCase()).concat(l.join(""))},P=function(e){var t=e.className,n=e.children,s=e.code,k=e.horizontalAlignment,h=void 0===k?"center":k,m=e.verticalAlignment,g=void 0===m?"center":m,v=e.flexDirection,Z=void 0===v?"row":v,A=T(e,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),P=D(),S=j((0,x.Z)(s||"",{successDuration:1e3}),2),O=S[0],N=S[1],$=(0,f.Z)(),B=$.isExpanded,z=$.setExpanded,E=$.getCollapseProps,R="hAlign".concat(I(h)),L="vAlign".concat(I(g)),G="flexDirection".concat(I(Z));return(0,l.jsxs)("div",w({},A,{className:p()("demo-box",P.root,t,P[R],P[L],P[G],y({},P.expanded,B)),children:[(0,l.jsx)("div",{className:P.demoContainer,children:n}),(0,l.jsxs)("div",{className:P.codeWrapper,children:[(0,l.jsxs)("div",{className:P.codeHeader,children:[!B&&(0,l.jsx)(a.Z,{label:"View Code",variant:"inlined",size:"small",className:P.viewCode,onClick:function(){return z((function(e){return!e}))}}),(0,l.jsx)(c.Z,{text:"Copied to clipboard!",open:O,children:(0,l.jsx)(u.Z,{icon:(0,l.jsx)(o.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:P.copyCode,onClick:function(){return N()}})}),(0,l.jsx)(u.Z,{icon:B?(0,l.jsx)(r.Z,{}):(0,l.jsx)(i.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:P.expandCode,onClick:function(){return z((function(e){return!e}))}})]}),(0,l.jsx)("div",w({},E(),{children:(0,l.jsx)("div",{className:P.codeContainer,children:(0,l.jsx)(b.ZP,w({},b.lG,{code:s||"",language:"tsx",theme:C.Z,children:function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,i=e.getTokenProps;return(0,l.jsx)(d.Z,{codeBlock:!0,style:n,className:p()(t,P.codeBlock),children:o.map((function(e,t){var n=t===o.length-1;return(0,l.jsx)("div",w({},r({line:e,key:t}),{children:e.map((function(e,t){return n&&e.empty?null:(0,l.jsx)("span",w({},i({token:e,key:t})),"".concat(e.content,"/").concat(t))}))}),"".concat(e.length,"/").concat(t))}))})}}))})}))]})]}))},S=m.memo(P);S.displayName=A;var O=S},7851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w},meta:function(){return y}});var l=n(7294),o=n(3905),r=n(2673),i=n(1183),a=n(5048),c=n(3814),u=n(9522),d=n(5893),s=n(6328),k=n(7531);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],l=!0,o=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(l=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);l=!0);}catch(c){o=!0,r=c}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(){var e=h(l.useState(!1),2),t=e[0],n=e[1];return(0,d.jsx)(k.Z,{flexDirection:"column",code:'import { Button, Checkbox } from "@sonnat/ui";\nimport * as React from "react";\n\nconst Demo = () => {\n  const [checked, setChecked] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <Button\n        variant="outlined"\n        size="small"\n        label="Toggle the Checkbox"\n        onClick={() => void setChecked(c => !c)}\n      />\n      <Checkbox\n        label="Label"\n        checked={checked}\n        inputProps={{ id: "ch-box-2" }}\n        onChange={() => void setChecked(c => !c)}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(s.Z,{variant:"outlined",size:"small",label:"Toggle the Checkbox",onClick:function(){n((function(e){return!e}))}}),(0,d.jsx)(r.Z,{label:"Label",checked:t,inputProps:{id:"ch-box-2"},onChange:function(){n((function(e){return!e}))}})]})})};p.displayName="CheckboxControlledDemo";var b=p,m=n(9008),f=n(9118),x=n(4765);function C(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y={title:"Checkbox",description:"Checkboxes are used for selecting multiple values from several options.",getLayout:function(){return function(e){return(0,o.kt)(u.Z,{mdxType:"WithSidebar"},e)}}},v={meta:y};function w(e){var t=e.components,n=C(e,["components"]);return(0,o.kt)("wrapper",Object.assign({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m.default,{mdxType:"Head"},(0,x.aT)("".concat(y.title," | Sonnat Developer Tools, React Components & Resources")),(0,x.u2)(y.description),(0,x.ai)("".concat(f.z,"/docs/components/").concat(y.title)),(0,x.hL)(g(f.t).concat(["checkbox","\u0686\u06a9\u200c\u0628\u0627\u06a9\u0633","\u0686\u06a9 \u0628\u0627\u06a9\u0633"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,y.title),(0,o.kt)(c.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(a.Z,{href:"pages/docs/components/".concat(y.title,".mdx"),mdxType:"PageEditButton"})),(0,o.kt)("p",null,y.description),(0,o.kt)("p",null,"If you use only one checkbox, it is the same as using"," ",(0,o.kt)("a",{href:"/docs/components/Switch",title:"Switch documentation"},"Switch")," ","to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Simple Checkboxes"),(0,o.kt)(c.Z,{anchorId:"simple-checkboxes",mdxType:"AnchorButton"})),(0,o.kt)(k.Z,{code:'<Checkbox />\n<Checkbox disabled />\n<Checkbox defaultChecked disabled />\n<Checkbox indeterminated />\n<Checkbox indeterminated disabled />\n<Checkbox inputProps={{ id: "ch-box-0" }} defaultChecked label="Label" />\n<Checkbox\n  inputProps={{ id: "ch-box-1" }}\n  defaultChecked\n  label="Label"\n  disabled\n/>',mdxType:"DemoBox"},(0,o.kt)(r.Z,{mdxType:"Checkbox"}),(0,o.kt)(r.Z,{disabled:!0,mdxType:"Checkbox"}),(0,o.kt)(r.Z,{defaultChecked:!0,disabled:!0,mdxType:"Checkbox"}),(0,o.kt)(r.Z,{indeterminated:!0,mdxType:"Checkbox"}),(0,o.kt)(r.Z,{indeterminated:!0,disabled:!0,mdxType:"Checkbox"}),(0,o.kt)(r.Z,{inputProps:{id:"ch-box-0"},defaultChecked:!0,label:"Label",mdxType:"Checkbox"}),(0,o.kt)(r.Z,{inputProps:{id:"ch-box-1"},defaultChecked:!0,label:"Label",disabled:!0,mdxType:"Checkbox"})),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Sizes"),(0,o.kt)(c.Z,{anchorId:"sizes",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"To have the larger or smaller checkboxes, use the"," ",(0,o.kt)("inlineCode",null,"size")," property."),(0,o.kt)(k.Z,{code:['<Checkbox label="Small" size="small" />','<Checkbox label="Medium (default)" size="medium" />','<Checkbox label="Large" size="large" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)(r.Z,{label:"Small",size:"small",className:"demoSubject",mdxType:"Checkbox"}),(0,o.kt)(r.Z,{label:"Medium (default)",size:"medium",className:"demoSubject",mdxType:"Checkbox"}),(0,o.kt)(r.Z,{label:"Large",size:"large",className:"demoSubject",mdxType:"Checkbox"})),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Controlled Checkboxes"),(0,o.kt)(c.Z,{anchorId:"controlled-checkboxes",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",null,"checked"),", and"," ",(0,o.kt)("inlineCode",null,"onChange")," properties to control the behaviour of the checkbox."),(0,o.kt)(b,{mdxType:"CheckboxControlledDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"With ",(0,o.kt)("mark",null,"CheckGroup")),(0,o.kt)(c.Z,{anchorId:"with-checkgroup",mdxType:"AnchorButton"})),(0,o.kt)("p",null,(0,o.kt)("a",{href:"/docs/components/CheckGroup",title:"CheckGroup documentation"},"CheckGroup")," ","is a helpful wrapper used to group and manage checkbox controls with an easier API. CheckGroup can also be controlled/uncontrolled like the checkboxes.",(0,o.kt)("br",null),"To learn more about ",(0,o.kt)("strong",null,"CheckGroup"),"'s API,"," ",(0,o.kt)("a",{href:"/docs/components/CheckGroup",title:"CheckGroup documentation"},"read it's documentation"),"."),(0,o.kt)(k.Z,{code:'<CheckGroup name="food" defaultValue={["kebab"]}>\n  <Checkbox inputProps={{ id: "ch-box-00" }} label="Burger" value="burger" />\n  <Checkbox inputProps={{ id: "ch-box-01" }} label="Sushi" value="sushi" />\n  <Checkbox inputProps={{ id: "ch-box-02" }} label="Kebab" value="kebab" />\n</CheckGroup>',mdxType:"DemoBox"},(0,o.kt)(i.Z,{name:"food",defaultValue:["kebab"],mdxType:"CheckGroup"},(0,o.kt)(r.Z,{inputProps:{id:"ch-box-00"},label:"Burger",value:"burger",mdxType:"Checkbox"}),(0,o.kt)(r.Z,{inputProps:{id:"ch-box-01"},label:"Sushi",value:"sushi",mdxType:"Checkbox"}),(0,o.kt)(r.Z,{inputProps:{id:"ch-box-02"},label:"Kebab",value:"kebab",mdxType:"Checkbox"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"API"),(0,o.kt)(c.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Learn more about the properties and the customization points."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Usage"),(0,o.kt)(c.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import Checkbox from "@sonnat/ui/Checkbox";\n\n//or\nimport { Checkbox } from "@sonnat/ui";\n')),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Properties"),(0,o.kt)(c.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"Checkbox Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"label"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"label")," was provided, a"," ",(0,o.kt)("inlineCode",null,"<label>")," element will be rendered next to the checkbox.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The name of the checkbox.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"value"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The value of the checkbox. The DOM API casts this to a string.",(0,o.kt)("br",null),"The browser uses ",(0,o.kt)("inlineCode",null,'"on"')," as the default value.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,'"large"',(0,o.kt)("br",null),'| "medium"',(0,o.kt)("br",null),'| "small"'),(0,o.kt)("td",null,'"medium"'),(0,o.kt)("td",null,"The size of the checkbox.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"indeterminated"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will appear indeterminate.",(0,o.kt)("br",null),"This does not set the native input element to indeterminate due to inconsistent behavior across browsers.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"autoFocus"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will be focused automatically.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fluid"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will fill the entire width of the parent.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"readOnly"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will be read-only.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"checked"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will be checked.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"defaultChecked"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The default state of ",(0,o.kt)("inlineCode",null,"checked"),". Use when the component is not controlled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"disabled"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will be disabled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"required"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will be required.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"hasError"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the checkbox will indicate invalid input.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"inputProps"),(0,o.kt)("td",null,"object"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The properties applied to the ",(0,o.kt)("inlineCode",null,"input")," element.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"labelProps"),(0,o.kt)("td",null,"object"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The properties applied to the ",(0,o.kt)("inlineCode",null,"label")," element.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onChange"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the state has changed.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(checkedState: boolean) => void")))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}w.isMDXComponent=!0}},function(e){e.O(0,[8242,7730,2389,9774,2888,179],(function(){return t=4602,e(e.s=t);var t}));var t=e.O();_N_E=t}]);