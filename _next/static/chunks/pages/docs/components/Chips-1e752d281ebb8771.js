(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7166],{1792:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Chips",function(){return n(8579)}])},7531:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var l=n(5893),o=n(3828),i=n(5110),r=n(8315),a=n(6328),c=n(2621),d=n(422),u=n(1109),s=n(336),p=n.n(s),m=n(4184),h=n.n(m),k=n(7087),f=n(7294),b=n(1329),y=n(6260),C=n(184);function v(e){if(Array.isArray(e))return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){x(e,t,n[t])}))}return e}function j(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e,t){return v(e)||function(e,t){var n=[],l=!0,o=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(l=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(c){o=!0,i=c}finally{try{l||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||g()}function w(e){return v(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||g()}var Z="DemoBox",A=p()((function(e){var t=e.darkMode,n=e.swatches,l=e.colors,o=l.divider,i=l.background,r=e.spacings.spacer,a=e.typography.pxToRem;return{root:{border:"1px solid ".concat(t?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:a(.5*r.px)},"& + &":{marginTop:r.rem},"& + p":{marginTop:r.rem}},demoContainer:x({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:a(100),padding:a(2*r.px),backgroundColor:t?i.dark.origin:i.light.origin},e.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(t?o.light:o.dark),backgroundColor:t?i.dark.origin:i.light.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:a(56),paddingLeft:a(.5*r.px),paddingRight:a(.5*r.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:a(.5*r.px)},expandCode:{},codeContainer:x({},e.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(a(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:n.grey[900],maxHeight:a(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:Z}),N=function(e){var t=w(e),n=t[0],l=t.slice(1);return"".concat(n.toUpperCase()).concat(l.join(""))},R=function(e){var t=e.className,n=e.children,s=e.code,p=e.horizontalAlignment,m=void 0===p?"center":p,f=e.verticalAlignment,v=void 0===f?"center":f,g=e.flexDirection,w=void 0===g?"row":g,Z=j(e,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),R=A(),D=S((0,y.Z)(s||"",{successDuration:1e3}),2),I=D[0],O=D[1],B=(0,b.Z)(),$=B.isExpanded,P=B.setExpanded,E=B.getCollapseProps,z="hAlign".concat(N(m)),_="vAlign".concat(N(v)),H="flexDirection".concat(N(w));return(0,l.jsxs)("div",T({},Z,{className:h()("demo-box",R.root,t,R[z],R[_],R[H],x({},R.expanded,$)),children:[(0,l.jsx)("div",{className:R.demoContainer,children:n}),(0,l.jsxs)("div",{className:R.codeWrapper,children:[(0,l.jsxs)("div",{className:R.codeHeader,children:[!$&&(0,l.jsx)(a.Z,{label:"View Code",variant:"inlined",size:"small",className:R.viewCode,onClick:function(){return P((function(e){return!e}))}}),(0,l.jsx)(c.Z,{text:"Copied to clipboard!",open:I,children:(0,l.jsx)(d.Z,{icon:(0,l.jsx)(o.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:R.copyCode,onClick:function(){return O()}})}),(0,l.jsx)(d.Z,{icon:$?(0,l.jsx)(i.Z,{}):(0,l.jsx)(r.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:R.expandCode,onClick:function(){return P((function(e){return!e}))}})]}),(0,l.jsx)("div",T({},E(),{children:(0,l.jsx)("div",{className:R.codeContainer,children:(0,l.jsx)(k.ZP,T({},k.lG,{code:s||"",language:"tsx",theme:C.Z,children:function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,r=e.getTokenProps;return(0,l.jsx)(u.Z,{codeBlock:!0,style:n,className:h()(t,R.codeBlock),children:o.map((function(e,t){var n=t===o.length-1;return(0,l.jsx)("div",T({},i({line:e,key:t}),{children:e.map((function(e,t){return n&&e.empty?null:(0,l.jsx)("span",T({},r({token:e,key:t})),"".concat(e.content,"/").concat(t))}))}),"".concat(e.length,"/").concat(t))}))})}}))})}))]})]}))},D=f.memo(R);D.displayName=Z;var I=D},8579:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S},meta:function(){return T}});var l=n(7294),o=n(3905),i=n(4101),r=n.n(i),a=n(2862),c=n(3486),d=n(5447),u=n(5048),s=n(3814),p=n(9522),m=n(7531),h=n(5893);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],l=!0,o=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(l=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(c){o=!0,i=c}finally{try{l||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){var e=k(l.useState(!1),2),t=e[0],n=e[1];return(0,h.jsx)(m.Z,{code:'import ChoiceChip from "@sonnat/ui/ChoiceChip";\nimport * as React from "react";\n\nconst ChipControllingDemo = () => {\n  const [isSelected, setSelected] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <ChoiceChip label="uncontrolled" defaultSelected={true} />\n      <ChoiceChip\n        label="controlled"\n        selected={isSelected}\n        onToggle={() => void setSelected(s => !s)}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default ChipControllingDemo;',children:(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)("div",{className:"demoSubject",children:(0,h.jsx)(c.Z,{label:"uncontrolled",defaultSelected:!0})}),(0,h.jsx)("div",{className:"demoSubject",children:(0,h.jsx)(c.Z,{label:"controlled",selected:t,onToggle:function(){n((function(e){return!e}))}})})]})})};f.displayName="ChipControllingDemo";var b=f,y=n(9008),C=n(9118),v=n(4765);function x(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T={title:"Chips",description:"Chips are compact components that represent discrete information.",getLayout:function(){return function(e){return(0,o.kt)(p.Z,{mdxType:"WithSidebar"},e)}}},j={meta:T};function S(e){var t=e.components,n=x(e,["components"]);return(0,o.kt)("wrapper",Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(y.default,{mdxType:"Head"},(0,v.aT)("".concat(T.title," | Sonnat Developer Tools, React Components & Resources")),(0,v.u2)(T.description),(0,v.ai)("".concat(C.z,"/docs/components/").concat(T.title)),(0,v.hL)(g(C.t).concat(["chips","\u0686\u06cc\u067e\u0633"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,T.title),(0,o.kt)(s.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(u.Z,{href:"pages/docs/components/".concat(T.title,".mdx"),mdxType:"PageEditButton"})),(0,o.kt)("p",null,T.description),(0,o.kt)("p",null,"Chips allow users to enter information, make selections, filter content, or trigger actions. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple interactive elements.",(0,o.kt)("br",null),"The most common use will be in some form of input, so some of the behaviour demonstrated here is not shown in context."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"ActionChips"),(0,o.kt)(s.Z,{anchorId:"action-chips",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Action chips trigger actions related to primary content.",(0,o.kt)("br",null),"Despite that buttons are an alternative to action chips, there is an important difference between them. Buttons should appear persistently and consistently, while action buttons should appear dynamically and contextually."),(0,o.kt)(m.Z,{code:['<ActionChip label="default" color="default" />','<ActionChip label="primary" color="primary" />','<ActionChip label="secondary" color="secondary" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"default",color:"default",mdxType:"ActionChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"primary",color:"primary",mdxType:"ActionChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"secondary",color:"secondary",mdxType:"ActionChip"}))),(0,o.kt)("p",null,"You can declare the desired action with the ",(0,o.kt)("inlineCode",null,"onClick")," ","property."),(0,o.kt)(m.Z,{code:['<ActionChip\n  label="with onClick"\n  color="default"\n  onClick={() => {\n    alert("tryin to do something!")\n  }}\n/>'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"with onClick",color:"default",onClick:function(){alert("tryin to do something!")},mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"RemovableChips"),(0,o.kt)(s.Z,{anchorId:"removable-chips",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Removable chips represent information used in fields, and they can be removed with the help of a remove button.",(0,o.kt)("br",null),"They enable user input and verify that input by converting text into chips."),(0,o.kt)(m.Z,{code:['<RemovableChip label="default" color="default" />','<RemovableChip label="primary" color="primary" />','<RemovableChip label="secondary" color="secondary" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"default",color:"default",mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"primary",color:"primary",mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"secondary",color:"secondary",mdxType:"RemovableChip"}))),(0,o.kt)("p",null,"You can declare the desired remove action with the"," ",(0,o.kt)("inlineCode",null,"onRemove")," property."),(0,o.kt)(m.Z,{code:['<RemovableChip\n  label="with onRemove"\n  color="default"\n  onRemove={() => {\n    alert("tryin to remove!");\n  }}\n/>'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"with onRemove",color:"default",onRemove:function(){alert("tryin to remove!")},mdxType:"RemovableChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"ChoiceChips"),(0,o.kt)(s.Z,{anchorId:"choice-chips",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Choice chips represent a selection / filters for a collection.",(0,o.kt)("br",null),"They are a good alternative to toggle buttons, radio buttons, checkboxes, and select menus."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="default" color="default" />','<ChoiceChip label="primary" color="primary" />','<ChoiceChip label="secondary" color="secondary" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"default",color:"default",mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"primary",color:"primary",mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"secondary",color:"secondary",mdxType:"ChoiceChip"}))),(0,o.kt)("p",null,"Choice chips can be controlled or uncontrolled.",(0,o.kt)("br",null),"To set the default state of the uncontrolled choice chips, use"," ",(0,o.kt)("inlineCode",null,"defaultSelected")," property with a boolean value.",(0,o.kt)("br",null),"To control the state of the controlled choice chips, use"," ",(0,o.kt)("inlineCode",null,"selected={boolean}")," and"," ",(0,o.kt)("inlineCode",null,"onToggle")," properties."),(0,o.kt)(b,{mdxType:"ChipControllingDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Disabled"),(0,o.kt)(s.Z,{anchorId:"disabled",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Disabled chips do not respond to any action."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="default" color="default" disabled />','<RemovableChip label="primary" color="primary" disabled />','<ActionChip label="secondary" color="secondary" disabled />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"default",color:"default",disabled:!0,mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"primary",color:"primary",disabled:!0,mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"secondary",color:"secondary",disabled:!0,mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Rounded"),(0,o.kt)(s.Z,{anchorId:"rounded",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"To have a rounded version of chips use ",(0,o.kt)("inlineCode",null,"rounded")," ","property."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="default" color="default" rounded />','<RemovableChip label="primary" color="primary" rounded />','<ActionChip label="secondary" color="secondary" rounded />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"default",color:"default",rounded:!0,mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"primary",color:"primary",rounded:!0,mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"secondary",color:"secondary",rounded:!0,mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Size"),(0,o.kt)(s.Z,{anchorId:"size",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"To have the larger or smaller chips, use the ",(0,o.kt)("inlineCode",null,"size")," ","property."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="Large" color="default" size="Large" />','<RemovableChip label="Medium (default)" color="primary" size="medium" />','<ActionChip label="Small" color="secondary" size="small" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"Large",color:"default",size:"large",mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"Medium (default)",color:"primary",size:"medium",mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"Small",color:"secondary",size:"small",mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Outlined"),(0,o.kt)(s.Z,{anchorId:"outlined",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Outlined chips offer an alternative style."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="default" color="default" variant="outlined" />','<RemovableChip label="primary" color="primary" variant="outlined" />','<ActionChip label="secondary" color="secondary" variant="outlined" />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"default",color:"default",variant:"outlined",mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"primary",color:"primary",variant:"outlined",mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"secondary",color:"secondary",variant:"outlined",mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"With Leading Icon"),(0,o.kt)(s.Z,{anchorId:"with-leading-icon",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Sometimes you might want to have icons for certain chips to enhance the UX of the application as we recognize imagery more easily than plain text."),(0,o.kt)(m.Z,{code:['<ChoiceChip label="default" color="default" leadingIcon={<Heart />} />','<RemovableChip label="primary" color="primary" leadingIcon={<Heart />} />','<ActionChip label="secondary" color="secondary" leadingIcon={<Heart />} />'].join("\n"),mdxType:"DemoBox"},(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(c.Z,{label:"default",color:"default",leadingIcon:(0,o.kt)(r(),{mdxType:"Heart"}),mdxType:"ChoiceChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(d.Z,{label:"primary",color:"primary",leadingIcon:(0,o.kt)(r(),{mdxType:"Heart"}),mdxType:"RemovableChip"})),(0,o.kt)("div",{className:"demoSubject"},(0,o.kt)(a.Z,{label:"secondary",color:"secondary",leadingIcon:(0,o.kt)(r(),{mdxType:"Heart"}),mdxType:"ActionChip"}))),(0,o.kt)("h2",null,(0,o.kt)("span",null,"API"),(0,o.kt)(s.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Learn more about the properties and the customization points."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Usage"),(0,o.kt)(s.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import ActionChip from "@sonnat/ui/ActionChip";\nimport RemovableChip from "@sonnat/ui/RemovableChip";\nimport ChoiceChip from "@sonnat/ui/ChoiceChip";\n\n//or\nimport { ActionChip, RemovableChip, ChoiceChip } from "@sonnat/ui";\n')),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Properties"),(0,o.kt)(s.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,o.kt)("h4",null,(0,o.kt)("span",null,"Shared Properties"),(0,o.kt)(s.Z,{anchorId:"shared-properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"The properties that are common to choice, action, and removable chips."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"Chips Shared Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"label",(0,o.kt)("br",null),(0,o.kt)("mark",null,"required")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The content of the chip.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"rounded"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the chip will be rounded.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"disabled"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the chip will be disabled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,'"large"',(0,o.kt)("br",null),'| "medium"',(0,o.kt)("br",null),'| "small"'),(0,o.kt)("td",null,'"medium"'),(0,o.kt)("td",null,"The size of the chip.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"color"),(0,o.kt)("td",null,'"default"',(0,o.kt)("br",null),'| "primary"',(0,o.kt)("br",null),'| "secondary"'),(0,o.kt)("td",null,'"default"'),(0,o.kt)("td",null,"The color of the chip.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"variant"),(0,o.kt)("td",null,'"filled"',(0,o.kt)("br",null),'| "outlined"'),(0,o.kt)("td",null,'"filled"'),(0,o.kt)("td",null,"The variant of the chip.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"leadingIcon"),(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The leading icon element placed before the label."))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"ActionChip")," Specific Properties"),(0,o.kt)(s.Z,{anchorId:"actionchip-specific-properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"The properties that are only available to action chips."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"ActionChip Specific Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"onClick"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Callback fired when the action chip is clicked.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.MouseEvent) => void"))))),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"RemovableChip")," Specific Properties"),(0,o.kt)(s.Z,{anchorId:"removablechip-specific-properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"The properties that are only available to removable chips."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"RemovableChip Specific Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"onRemove"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Callback fired when the remove button is clicked.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.MouseEvent) => void"))))),(0,o.kt)("h4",null,(0,o.kt)("span",null,(0,o.kt)("mark",null,"ChoiceChip")," Specific Properties"),(0,o.kt)(s.Z,{anchorId:"choicechip-specific-properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"The properties that are only available to choice chips."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"ChoiceChip Specific Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"selected"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the chip will be selected.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"defaultSelected"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"The default state of ",(0,o.kt)("inlineCode",null,"selected"),". Use when the component is not controlled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onToggle"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Callback fired when the chip is selected/unselected.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(isSelected: boolean) => void"))))))}S.isMDXComponent=!0}},function(e){e.O(0,[8242,2666,2389,9774,2888,179],(function(){return t=1792,e(e.s=t);var t}));var t=e.O();_N_E=t}]);