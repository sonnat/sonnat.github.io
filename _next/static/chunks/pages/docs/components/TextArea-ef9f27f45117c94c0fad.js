(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8081],{2550:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return A},meta:function(){return g}});var n=l(2809),a=l(7841),u=l(3464),r=l(7294),o=l(3905),d=l(3763),i=l(8055),s=l(1786),k=l(9568),c=l(5893),p=l(9961),m=l(1600),h=function(){var t=r.useState(""),e=(0,p.Z)(t,2),l=e[0],n=e[1];return(0,c.jsx)(m.Z,{flexDirection:"column",code:'import TextArea from "@sonnat/ui/TextArea";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [value, setValue] = React.useState("");\n\n  return (\n    <React.Fragment>\n      <TextArea\n        value={value}\n        onChange={e => void setValue(e.target.value)}\n      />\n      <span>The value is {`"${value}"`}</span>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(d.Z,{value:l,onChange:function(t){n(t.target.value)}}),(0,c.jsxs)("span",{style:{marginTop:16,whiteSpace:"pre-wrap",textAlign:"center"},children:["The value is",(0,c.jsx)("br",{}),(0,c.jsx)("strong",{style:{paddingTop:8,display:"inline-block"},children:'"'.concat(l,'"')})]})]})})};h.displayName="TextAreaControlledDemo";var f=h,x=l(9008),T=l(4069),b=l(7210);function y(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function w(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?y(Object(l),!0).forEach((function(e){(0,n.Z)(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):y(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var g={title:"TextArea",description:"TextArea represents a multi-line plain-text editing control.",getLayout:function(){return function(t){return(0,o.kt)(k.Z,{mdxType:"WithSidebar"},t)}}},v={meta:g};function A(t){var e=t.components,l=(0,u.Z)(t,["components"]);return(0,o.kt)("wrapper",w(w(w({},v),l),{},{components:e,mdxType:"MDXLayout"}),(0,o.kt)(x.default,{mdxType:"Head"},(0,b.aT)("".concat(g.title," | Sonnat Developer Tools, React Components & Resources")),(0,b.u2)(g.description),(0,b.ai)("".concat(T.z,"/docs/components/").concat(g.title)),(0,b.hL)([].concat((0,a.Z)(T.t),["textarea"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,g.title),(0,o.kt)(s.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(i.Z,{href:"pages/docs/components/".concat(g.title,".mdx"),mdxType:"PageEditButton"})),(0,o.kt)("p",null,g.description),(0,o.kt)("p",null,"Useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Simple TextArea"),(0,o.kt)(s.Z,{anchorId:"simple-textareas",mdxType:"AnchorButton"})),(0,o.kt)(m.Z,{flexDirection:"column",horizontalAlignment:"start",code:'<TextArea\n  name="input"\n  placeholder="Placeholder"\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  readOnly\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  readOnly\n  defaultValue="Default value + read-only"\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="read-only"\n  defaultValue="Default value + disabled"\n  disabled\n  fluid\n  minRows={4}\n/>\n<TextArea\n  name="input"\n  placeholder="Has Error"\n  fluid\n  minRows={4}\n  hasError\n/>\n<TextArea\n  name="input"\n  placeholder="With helper text"\n  fluid\n  minRows={4}\n  helperText="This is an informative helper text."\n/>\n<TextArea\n  name="input"\n  placeholder="Auto Resize"\n  fluid\n  minRows={4}\n  autoResize\n/>',mdxType:"DemoBox"},(0,o.kt)(d.Z,{name:"input",placeholder:"Large",fluid:!0,minRows:4,size:"large",className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"Medium (default)",fluid:!0,minRows:4,size:"medium",className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"Small",fluid:!0,minRows:4,size:"small",className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"read-only",readOnly:!0,fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"read-only",readOnly:!0,defaultValue:"Default value + read-only",fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"read-only",defaultValue:"Default value + disabled",disabled:!0,fluid:!0,minRows:4,className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"Has Error",fluid:!0,minRows:4,hasError:!0,className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"With helper text",fluid:!0,minRows:4,helperText:"This is an informative helper text.",className:"demoSubject",mdxType:"TextArea"}),(0,o.kt)(d.Z,{name:"input",placeholder:"Auto Resize",fluid:!0,minRows:4,autoResize:!0,className:"demoSubject",mdxType:"TextArea"})),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Controlled TextArea"),(0,o.kt)(s.Z,{anchorId:"controlled-textarea",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",null,"value"),", and"," ",(0,o.kt)("inlineCode",null,"onChange")," properties to control the behaviour of the textarea."),(0,o.kt)(f,{mdxType:"TextAreaControlledDemo"}),(0,o.kt)("h2",null,(0,o.kt)("span",null,"API"),(0,o.kt)(s.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Learn more about the properties and the customization points."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Usage"),(0,o.kt)(s.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,o.kt)("pre",null,(0,o.kt)("code",w({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport TextArea from "@sonnat/ui/TextArea";\n\n//or\nimport { TextArea } from "@sonnat/ui";\n')),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Properties"),(0,o.kt)(s.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,o.kt)("table",{cols:4},(0,o.kt)("caption",null,"TextArea Properties"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"className"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"minRows"),(0,o.kt)("td",null,"string | number"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Minimum number of rows to display.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"maxRows"),(0,o.kt)("td",null,"string | number"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"Maximum number of rows to display. (works only when ",(0,o.kt)("inlineCode",null,"autoResize={true}"),")")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The name of the textarea.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"placeholder"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The ",(0,o.kt)("inlineCode",null,"placeholder")," property of the textarea.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"value"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The value of the textarea. The DOM API casts this to a string.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"defaultValue"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The default value. Use when the component is not controlled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"helperText"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The helper text content.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"helperIcon"),(0,o.kt)("td",null,"node"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The helper icon element placed before the helper text.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,'"large"',(0,o.kt)("br",null),'| "medium"',(0,o.kt)("br",null),'| "small"'),(0,o.kt)("td",null,'"medium"'),(0,o.kt)("td",null,"The size of the textarea.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"autoResize"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will automatically adjust the height.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"resizable"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be vertically resizable.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"disabled"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be disabled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"readOnly"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be readOnly.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"focused"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be focused.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"autoFocus"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be focused on mount.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"required"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be required.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"hasError"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will indicate invalid input.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fluid"),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"If ",(0,o.kt)("inlineCode",null,"true"),", the textarea will be fluid (max-width: 100%)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"inputProps"),(0,o.kt)("td",null,"object"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The properties applied to the ",(0,o.kt)("inlineCode",null,"textarea")," element.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onChange"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null,"-"),(0,o.kt)("td",null,"The callback fires when the state has changed.",(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Signature:"))," ",(0,o.kt)("inlineCode",null,"function(event: React.ChangeEvent, value: string) => void"),(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("strong",null,"Note:"))," ","You can also pull out the current value by accessing"," ",(0,o.kt)("inlineCode",null,"event.target.value")," (string)."))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:"4"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"The ",(0,o.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,o.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}A.isMDXComponent=!0},7117:function(t,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/TextArea",function(){return l(2550)}])}},function(t){t.O(0,[2423,6590,5725,9774,2888,179],(function(){return e=7117,t(t.s=e);var e}));var e=t.O();_N_E=e}]);