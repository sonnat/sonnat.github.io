(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8081],{7117:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/TextArea",function(){return n(8808)}])},7531:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var l=n(5893),r=n(9140),o=n(5110),a=n(8315),i=n(6328),u=n(2621),d=n(422),c=n(1109),s=n(336),m=n.n(s),p=n(4184),f=n.n(p),k=n(7087),h=n(7294),x=n(1329),y=n(6260),b=n(184);function g(e){if(Array.isArray(e))return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){v(e,t,n[t])}))}return e}function C(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){return g(e)||function(e,t){var n=[],l=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(l=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);l=!0);}catch(u){r=!0,o=u}finally{try{l||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||w()}function j(e){return g(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||w()}var R="DemoBox",D=m()((function(e){var t=e.colors,n=e.darkMode,l=e.swatches,r=e.spacings.spacer,o=e.typography.pxToRem;return{root:{border:"1px solid ".concat(n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:o(.5*r.px)},"& + &":{marginTop:r.rem},"& + p":{marginTop:r.rem}},demoContainer:v({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:o(100),padding:o(2*r.px),backgroundColor:t.background.origin},e.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(t.divider),backgroundColor:t.background.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:o(56),paddingLeft:o(.5*r.px),paddingRight:o(.5*r.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:o(.5*r.px)},expandCode:{},codeContainer:v({},e.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(o(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:l.grey[900],maxHeight:o(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:R}),O=function(e){var t=j(e),n=t[0],l=t.slice(1);return"".concat(n.toUpperCase()).concat(l.join(""))},N=function(e){var t=e.className,n=e.children,s=e.code,m=e.horizontalAlignment,p=void 0===m?"center":m,h=e.verticalAlignment,g=void 0===h?"center":h,w=e.flexDirection,j=void 0===w?"row":w,R=C(e,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),N=D(),S=A((0,y.Z)(s||"",{successDuration:1e3}),2),Z=S[0],I=S[1],$=(0,x.Z)(),E=$.isExpanded,P=$.setExpanded,z=$.getCollapseProps,B="hAlign".concat(O(p)),_="vAlign".concat(O(g)),W="flexDirection".concat(O(j));return(0,l.jsxs)("div",T({},R,{className:f()("demo-box",N.root,t,N[B],N[_],N[W],v({},N.expanded,E)),children:[(0,l.jsx)("div",{className:N.demoContainer,children:n}),(0,l.jsxs)("div",{className:N.codeWrapper,children:[(0,l.jsxs)("div",{className:N.codeHeader,children:[!E&&(0,l.jsx)(i.Z,{label:"View Code",variant:"inlined",size:"small",className:N.viewCode,onClick:function(){return P((function(e){return!e}))}}),(0,l.jsx)(u.Z,{text:"Copied to clipboard!",open:Z,children:(0,l.jsx)(d.Z,{icon:(0,l.jsx)(r.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:N.copyCode,onClick:function(){return I()}})}),(0,l.jsx)(d.Z,{icon:E?(0,l.jsx)(o.Z,{}):(0,l.jsx)(a.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:N.expandCode,onClick:function(){return P((function(e){return!e}))}})]}),(0,l.jsx)("div",T({},z(),{children:(0,l.jsx)("div",{className:N.codeContainer,children:(0,l.jsx)(k.ZP,T({},k.lG,{code:s||"",language:"tsx",theme:b.Z,children:function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return(0,l.jsx)(c.Z,{codeBlock:!0,style:n,className:f()(t,N.codeBlock),children:r.map((function(e,t){var n=t===r.length-1;return(0,l.jsx)("div",T({},o({line:e,key:t}),{children:e.map((function(e,t){return n&&e.empty?null:(0,l.jsx)("span",T({},a({token:e,key:t})),"".concat(e.content,"/").concat(t))}))}),"".concat(e.length,"/").concat(t))}))})}}))})}))]})]}))},S=h.memo(N);S.displayName=R;var Z=S},8808:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v},meta:function(){return b}});var l=n(7294),r=n(3905),o=n(8609),a=n(5048),i=n(3814),u=n(9522),d=n(5893),c=n(7531);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],l=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(l=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);l=!0);}catch(u){r=!0,o=u}finally{try{l||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var e=s(l.useState(""),2),t=e[0],n=e[1];return(0,d.jsx)(c.Z,{flexDirection:"column",code:'import TextArea from "@sonnat/ui/TextArea";\nimport * as React from "react";\n\nconst Demo = () => {\n  const [value, setValue] = React.useState("");\n\n  return (\n    <React.Fragment>\n      <TextArea value={value} onChange={v => void setValue(v)} />\n      <span>The value is {`"${value}"`}</span>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(o.Z,{value:t,onChange:function(e){n(e)}}),(0,d.jsxs)("span",{style:{marginTop:16,whiteSpace:"pre-wrap",textAlign:"center"},children:["The value is",(0,d.jsx)("br",{}),(0,d.jsx)("strong",{style:{paddingTop:8,display:"inline-block"},children:'"'.concat(t,'"')})]})]})})};m.displayName="TextAreaControlledDemo";var p=m,f=n(9008),k=n(9118),h=n(5175);function x(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b={title:"TextArea",description:"TextArea represents a multi-line plain-text editing control.",getLayout:function(){return function(e){return(0,r.kt)(u.Z,{mdxType:"WithSidebar"},e)}}},g={meta:b};function v(e){var t=e.components,n=x(e,["components"]);return(0,r.kt)("wrapper",Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(f.default,{mdxType:"Head"},(0,h.aT)("".concat(b.title," | Sonnat Developer Tools, React Components & Resources")),(0,h.u2)(b.description),(0,h.ai)("".concat(k.z,"/docs/components/").concat(b.title)),(0,h.hL)(y(k.t).concat(["textarea"]))),(0,r.kt)("h1",null,(0,r.kt)("span",null,b.title),(0,r.kt)(i.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,r.kt)(a.Z,{href:"pages/docs/components/".concat(b.title,".mdx"),mdxType:"PageEditButton"})),(0,r.kt)("p",null,b.description),(0,r.kt)("p",null,"Useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Simple TextArea"),(0,r.kt)(i.Z,{anchorId:"simple-textareas",mdxType:"AnchorButton"})),(0,r.kt)(c.Z,{flexDirection:"column",horizontalAlignment:"start",code:'<TextArea\n  name="input"\n  placeholder="Placeholder"\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  readOnly\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  readOnly\n  defaultValue="Default value + read-only"\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  defaultValue="Default value + disabled"\n  disabled\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="Has Error"\n  fluid\n  minRows={4}\n  hasError\n/>\n<TextArea\n  name="input"\n  placeholder="With helper text"\n  fluid\n  minRows={4}\n  helperText="This is an informative helper text."\n/>\n<TextArea\n  name="input"\n  placeholder="Auto Resize"\n  fluid\n  minRows={4}\n  autoResize\n/>',mdxType:"DemoBox"},(0,r.kt)(o.Z,{name:"input",placeholder:"Large",fluid:!0,minRows:4,size:"large",className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"Medium (default)",fluid:!0,minRows:4,size:"medium",className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"Small",fluid:!0,minRows:4,size:"small",className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"read-only",readOnly:!0,fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"read-only",readOnly:!0,defaultValue:"Default value + read-only",fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"read-only",defaultValue:"Default value + disabled",disabled:!0,fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"Has Error",fluid:!0,minRows:4,hasError:!0,className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"With helper text",fluid:!0,minRows:4,helperText:"This is an informative helper text.",className:"demoSubject",mdxType:"TextArea"}),(0,r.kt)(o.Z,{name:"input",placeholder:"Auto Resize",fluid:!0,minRows:4,autoResize:!0,className:"demoSubject",mdxType:"TextArea"})),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Controlled TextArea"),(0,r.kt)(i.Z,{anchorId:"controlled-textarea",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",null,"value"),", and"," ",(0,r.kt)("inlineCode",null,"onChange")," properties to control the behaviour of the textarea."),(0,r.kt)(p,{mdxType:"TextAreaControlledDemo"}),(0,r.kt)("h2",null,(0,r.kt)("span",null,"API"),(0,r.kt)(i.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"Learn more about the properties and the customization points."),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Usage"),(0,r.kt)(i.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import TextArea from "@sonnat/ui/TextArea";\n\n//or\nimport { TextArea } from "@sonnat/ui";\n')),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Properties"),(0,r.kt)(i.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,r.kt)("table",{cols:4},(0,r.kt)("caption",null,"TextArea Properties"),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"className"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"minRows"),(0,r.kt)("td",null,"string | number"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Minimum number of rows to display.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"maxRows"),(0,r.kt)("td",null,"string | number"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Maximum number of rows to display. (works only when ",(0,r.kt)("inlineCode",null,"autoResize={true}"),")")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The name of the textarea.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholder"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The ",(0,r.kt)("inlineCode",null,"placeholder")," property of the textarea.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The value of the textarea. The DOM API casts this to a string.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The default value. Use when the component is not controlled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"helperText"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The helper text content.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"helperIcon"),(0,r.kt)("td",null,"node"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The helper icon element placed before the helper text.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"size"),(0,r.kt)("td",null,'"large"',(0,r.kt)("br",null),'| "medium"',(0,r.kt)("br",null),'| "small"'),(0,r.kt)("td",null,'"medium"'),(0,r.kt)("td",null,"The size of the textarea.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoResize"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will automatically adjust the height.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"resizable"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be vertically resizable.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be disabled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"readOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be readOnly.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"focused"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be focused.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoFocus"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be focused on mount.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"required"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be required.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"hasError"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will indicate invalid input.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fluid"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the textarea will be fluid (max-width: 100%)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"inputProps"),(0,r.kt)("td",null,"object"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The properties applied to the ",(0,r.kt)("inlineCode",null,"textarea")," element.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,"function"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The callback fires when the state has changed.",(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("strong",null,"Signature:"))," ",(0,r.kt)("inlineCode",null,"function(value: string) => void")))),(0,r.kt)("tfoot",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"4"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"The ",(0,r.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,r.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}v.isMDXComponent=!0}},function(e){e.O(0,[8242,4945,2389,9774,2888,179],(function(){return t=7117,e(e.s=t);var t}));var t=e.O();_N_E=t}]);