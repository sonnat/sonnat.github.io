(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8185],{7454:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Card",function(){return e(250)}])},7531:function(t,n,e){"use strict";e.d(n,{Z:function(){return S}});var l=e(5893),o=e(9140),r=e(5110),a=e(8315),i=e(6328),d=e(2621),s=e(422),c=e(1109),u=e(336),p=e.n(u),m=e(4184),k=e.n(m),h=e(7087),f=e(7294),x=e(1329),y=e(6260),b=e(184);function C(t){if(Array.isArray(t))return t}function v(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},l=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),l.forEach((function(n){v(t,n,e[n])}))}return t}function A(t,n){if(null==t)return{};var e,l,o=function(t,n){if(null==t)return{};var e,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function T(t,n){return C(t)||function(t,n){var e=[],l=!0,o=!1,r=void 0;try{for(var a,i=t[Symbol.iterator]();!(l=(a=i.next()).done)&&(e.push(a.value),!n||e.length!==n);l=!0);}catch(d){o=!0,r=d}finally{try{l||null==i.return||i.return()}finally{if(o)throw r}}return e}(t,n)||g()}function Z(t){return C(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||g()}var D="DemoBox",w=p()((function(t){var n=t.colors,e=t.darkMode,l=t.swatches,o=t.spacings.spacer,r=t.typography.pxToRem;return{root:{border:"1px solid ".concat(e?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:r(.5*o.px)},"& + &":{marginTop:o.rem},"& + p":{marginTop:o.rem}},demoContainer:v({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:r(100),padding:r(2*o.px),backgroundColor:n.background.origin},t.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(n.divider),backgroundColor:n.background.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:r(56),paddingLeft:r(.5*o.px),paddingRight:r(.5*o.px)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:r(.5*o.px)},expandCode:{},codeContainer:v({},t.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(r(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:l.grey[900],maxHeight:r(500)},expanded:{"& $codeWrapper":{}},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:D}),B=function(t){var n=Z(t),e=n[0],l=n.slice(1);return"".concat(e.toUpperCase()).concat(l.join(""))},N=function(t){var n=t.className,e=t.children,u=t.code,p=t.horizontalAlignment,m=void 0===p?"center":p,f=t.verticalAlignment,C=void 0===f?"center":f,g=t.flexDirection,Z=void 0===g?"row":g,D=A(t,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),N=w(),I=T((0,y.Z)(u||"",{successDuration:1e3}),2),S=I[0],O=I[1],P=(0,x.Z)(),$=P.isExpanded,R=P.setExpanded,E=P.getCollapseProps,H="hAlign".concat(B(m)),L="vAlign".concat(B(C)),M="flexDirection".concat(B(Z));return(0,l.jsxs)("div",j({},D,{className:k()("demo-box",N.root,n,N[H],N[L],N[M],v({},N.expanded,$)),children:[(0,l.jsx)("div",{className:N.demoContainer,children:e}),(0,l.jsxs)("div",{className:N.codeWrapper,children:[(0,l.jsxs)("div",{className:N.codeHeader,children:[!$&&(0,l.jsx)(i.Z,{label:"View Code",variant:"inlined",size:"small",className:N.viewCode,onClick:function(){return R((function(t){return!t}))}}),(0,l.jsx)(d.Z,{text:"Copied to clipboard!",open:S,children:(0,l.jsx)(s.Z,{icon:(0,l.jsx)(o.Z,{}),"aria-label":"Copy the code",variant:"inlined",className:N.copyCode,onClick:function(){return O()}})}),(0,l.jsx)(s.Z,{icon:$?(0,l.jsx)(r.Z,{}):(0,l.jsx)(a.Z,{}),"aria-label":"Expand the codebox",variant:"inlined",className:N.expandCode,onClick:function(){return R((function(t){return!t}))}})]}),(0,l.jsx)("div",j({},E(),{children:(0,l.jsx)("div",{className:N.codeContainer,children:(0,l.jsx)(h.ZP,j({},h.lG,{code:u||"",language:"tsx",theme:b.Z,children:function(t){var n=t.className,e=t.style,o=t.tokens,r=t.getLineProps,a=t.getTokenProps;return(0,l.jsx)(c.Z,{codeBlock:!0,style:e,className:k()(n,N.codeBlock),children:o.map((function(t,n){var e=n===o.length-1;return(0,l.jsx)("div",j({},r({line:t,key:n}),{children:t.map((function(t,n){return e&&t.empty?null:(0,l.jsx)("span",j({},a({token:t,key:n})),"".concat(t.content,"/").concat(n))}))}),"".concat(t.length,"/").concat(n))}))})}}))})}))]})]}))},I=f.memo(N);I.displayName=D;var S=I},250:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return L},meta:function(){return E}});e(7294);var l=e(3905),o=e(5048),r=e(3814),a=e(9522),i=e(7531),d=e(5893),s=e(8952),c=e(9906),u=e(143),p=e(3800),m=e(5267),k=e(7169),h=e(422),f=e(4451),x=e(3532),y=e(4298),b=e(6328),C=e(336),v=e.n(C),g=v()((function(t){return{root:{maxWidth:(0,t.typography.pxToRem)(300)}}})),j=function(){var t=g();return(0,d.jsx)(i.Z,{flexDirection:"column",code:'<Card>\n  <CardMedia>\n    <Image\n      src="https://picsum.photos/300/200?random=1"\n      alt="Random Image"\n      layout="responsive"\n      width="300"\n      height="200"\n    />\n  </CardMedia>\n  <CardHeader\n    action={\n      <IconButton\n        variant="inlined"\n        icon={<DotsVertical />}\n        aria-label="Demo Button"\n      />\n    }\n  >\n    <Text variant="subtitle">This is the header</Text>\n  </CardHeader>\n  <CardBody>\n    <Text variant="body" as="p" color="textSecondary">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde\n      doloribus molestiae fugit molestias.\n    </Text>\n  </CardBody>\n  <CardActionBar>\n    <Button label="Action 1" variant="inlined" />\n    <Button label="Action 2" variant="inlined" />\n    <IconButton\n      style={{ marginLeft: "auto" }}\n      icon={<Heart />}\n      variant="inlined"\n      aria-label="Demo Button"\n    />\n  </CardActionBar>\n</Card>',children:(0,d.jsxs)(u.Z,{className:t.root,children:[(0,d.jsx)(p.Z,{children:(0,d.jsx)(m.Z,{src:"https://picsum.photos/300/200?random=1",alt:"Random Image",layout:"responsive",width:"300",height:"200"})}),(0,d.jsx)(k.Z,{action:(0,d.jsx)(h.Z,{variant:"inlined",icon:(0,d.jsx)(s.Z,{}),"aria-label":"Demo Button"}),children:(0,d.jsx)(f.Z,{variant:"subtitle",children:"This is the header"})}),(0,d.jsx)(x.Z,{children:(0,d.jsx)(f.Z,{variant:"body",as:"p",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloribus molestiae fugit molestias."})}),(0,d.jsxs)(y.Z,{children:[(0,d.jsx)(b.Z,{label:"Action 1",variant:"inlined"}),(0,d.jsx)(b.Z,{label:"Action 2",variant:"inlined"}),(0,d.jsx)(h.Z,{style:{marginLeft:"auto"},icon:(0,d.jsx)(c.Z,{}),variant:"inlined","aria-label":"Demo Button"})]})]})})};j.displayName="CardDemo1";var A=j,T=e(5700),Z=v()((function(t){return{root:{maxWidth:(0,t.typography.pxToRem)(300)}}})),D=function(){var t=Z();return(0,d.jsx)(i.Z,{flexDirection:"column",code:'<Card variant="outlined">\n  <CardHeader\n    action={\n      <IconButton\n        variant="inlined"\n        icon={<DotsVertical />}\n        aria-label="Demo Button"\n      />\n    }\n  >\n    <Text variant="subtitle">This is the header</Text>\n  </CardHeader>\n  <CardActionableArea aria-label="Card\'s Actionable Area">\n    <CardMedia>\n      <Image\n        src="https://picsum.photos/300/200?random=1"\n        alt="Random Image"\n        layout="responsive"\n        width="300"\n        height="200"\n      />\n    </CardMedia>\n    <CardBody>\n      <Text variant="body" as="p" color="textSecondary">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde\n        doloribus molestiae fugit molestias.\n      </Text>\n    </CardBody>\n  </CardActionableArea>\n  <CardActionBar>\n    <Button label="Action 1" variant="inlined" />\n    <Button label="Action 2" variant="inlined" />\n    <IconButton\n      style={{ marginLeft: "auto" }}\n      icon={<Heart />}\n      variant="inlined"\n      aria-label="Demo Button"\n    />\n  </CardActionBar>\n</Card>',children:(0,d.jsxs)(u.Z,{className:t.root,variant:"outlined",children:[(0,d.jsx)(k.Z,{action:(0,d.jsx)(h.Z,{variant:"inlined",icon:(0,d.jsx)(s.Z,{}),"aria-label":"Demo Button"}),children:(0,d.jsx)(f.Z,{variant:"subtitle",children:"This is the header"})}),(0,d.jsxs)(T.Z,{"aria-label":"Card's Actionable Area",children:[(0,d.jsx)(p.Z,{children:(0,d.jsx)(m.Z,{src:"https://picsum.photos/300/200?random=1",alt:"Random Image",layout:"responsive",width:"300",height:"200"})}),(0,d.jsx)(x.Z,{children:(0,d.jsx)(f.Z,{variant:"body",as:"p",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloribus molestiae fugit molestias."})})]}),(0,d.jsxs)(y.Z,{children:[(0,d.jsx)(b.Z,{label:"Action 1",variant:"inlined"}),(0,d.jsx)(b.Z,{label:"Action 2",variant:"inlined"}),(0,d.jsx)(h.Z,{style:{marginLeft:"auto"},icon:(0,d.jsx)(c.Z,{}),variant:"inlined","aria-label":"Demo Button"})]})]})})};D.displayName="CardDemo2";var w=D;var B=v()((function(t){var n,e,l,o=t.breakpoints;return{root:(n={display:"flex",alignItems:"flex-start"},e=o.down("sm"),l={flexDirection:"column"},e in n?Object.defineProperty(n,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[e]=l,n)}})),N=function(){var t=B();return(0,d.jsx)(i.Z,{flexDirection:"column",code:'import { Heart } from "@sonnat/icons";\nimport {\n  Button,\n  Card,\n  CardActionBar,\n  CardBody,\n  CardHeader,\n  IconButton,\n  Text\n} from "@sonnat/ui";\nimport makeStyles from "@sonnat/ui/styles/makeStyles";\nimport * as React from "react";\n\nconst useStyles = makeStyles(({ breakpoints }) => ({\n  root: {\n    display: "flex",\n    alignItems: "flex-start",\n    [breakpoints.down("sm")]: { flexDirection: "column" }\n  }\n}));\n\nconst Demo: React.FC = () => {\n  const classes = useStyles();\n\n  return (\n    <Card className={classes.root}>\n      <CardHeader style={{ flexShrink: 0 }}>\n        <Text display="block" variant="subtitle">\n          This is the title\n        </Text>\n        <Text display="block" variant="caption" color="textSecondary">\n          This is the subtitle\n        </Text>\n      </CardHeader>\n      <div>\n        <CardBody>\n          <Text variant="body" as="p" color="textSecondary">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde\n            doloribus molestiae fugit molestias.\n          </Text>\n        </CardBody>\n        <CardActionBar>\n          <Button label="Action 1" variant="inlined" />\n          <Button label="Action 2" variant="inlined" />\n          <IconButton\n            style={{ marginLeft: "auto" }}\n            icon={<Heart />}\n            variant="inlined"\n            aria-label="Demo Button"\n          />\n        </CardActionBar>\n      </div>\n    </Card>\n  );\n};\n\nexport default Demo;\n',children:(0,d.jsxs)(u.Z,{className:t.root,children:[(0,d.jsxs)(k.Z,{style:{flexShrink:0},children:[(0,d.jsx)(f.Z,{display:"block",variant:"subtitle",children:"This is the title"}),(0,d.jsx)(f.Z,{display:"block",variant:"caption",color:"textSecondary",children:"This is the subtitle"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(x.Z,{children:(0,d.jsx)(f.Z,{variant:"body",as:"p",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloribus molestiae fugit molestias."})}),(0,d.jsxs)(y.Z,{children:[(0,d.jsx)(b.Z,{label:"Action 1",variant:"inlined"}),(0,d.jsx)(b.Z,{label:"Action 2",variant:"inlined"}),(0,d.jsx)(h.Z,{style:{marginLeft:"auto"},icon:(0,d.jsx)(c.Z,{}),variant:"inlined","aria-label":"Demo Button"})]})]})]})})};N.displayName="CardDemo3";var I=N,S=e(9008),O=e(9118),P=e(5175);function $(t,n){if(null==t)return{};var e,l,o=function(t,n){if(null==t)return{};var e,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function R(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var E={title:"Card",description:"Cards are surfaces that display content and actions on a single topic.",getLayout:function(){return function(t){return(0,l.kt)(a.Z,{mdxType:"WithSidebar"},t)}}},H={meta:E};function L(t){var n=t.components,e=$(t,["components"]);return(0,l.kt)("wrapper",Object.assign({},H,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(S.default,{mdxType:"Head"},(0,P.aT)("".concat(E.title," | Sonnat Developer Tools, React Components & Resources")),(0,P.u2)(E.description),(0,P.ai)("".concat(O.z,"/docs/components/").concat(E.title)),(0,P.hL)(R(O.t).concat(["Card"]))),(0,l.kt)("h1",null,(0,l.kt)("span",null,E.title),(0,l.kt)(r.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,l.kt)(o.Z,{href:"pages/docs/components/".concat(E.title,".mdx"),mdxType:"PageEditButton"})),(0,l.kt)("p",null,E.description),(0,l.kt)("p",null,"They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."),(0,l.kt)("h2",null,(0,l.kt)("span",null,"Examples"),(0,l.kt)(r.Z,{anchorId:"examples",mdxType:"AnchorButton"})),(0,l.kt)(A,{mdxType:"CardDemo1"}),(0,l.kt)(w,{mdxType:"CardDemo2"}),(0,l.kt)(I,{mdxType:"CardDemo3"}),(0,l.kt)("h2",null,(0,l.kt)("span",null,"API"),(0,l.kt)(r.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Learn more about the properties and the customization points."),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Usage"),(0,l.kt)(r.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,l.kt)("pre",null,(0,l.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),'import Card, {\n  CardHeader,\n  CardBody,\n  CardMedia,\n  CardActionBar,\n  CardActionableArea\n} from "@sonnat/ui/Card";\n\n//or\nimport {\n  Card,\n  CardHeader,\n  CardBody,\n  CardMedia,\n  CardActionBar,\n  CardActionableArea\n} from "@sonnat/ui";\n')),(0,l.kt)("h3",null,(0,l.kt)("span",null,"Properties"),(0,l.kt)(r.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,l.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"Card")," Properties"),(0,l.kt)(r.Z,{anchorId:"parent-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"Card Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"variant"),(0,l.kt)("td",null,'"outlined"',(0,l.kt)("br",null),'| "elevated"'),(0,l.kt)("td",null,'"elevated"'),(0,l.kt)("td",null,"The variant of the card."))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"CardHeader")," Properties"),(0,l.kt)(r.Z,{anchorId:"card-header-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"CardHeader Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"action"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The main action to display in the header."))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"CardBody")," Properties"),(0,l.kt)(r.Z,{anchorId:"card-body-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"CardBody Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles."))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"CardMedia")," Properties"),(0,l.kt)(r.Z,{anchorId:"card-media-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"CardMedia Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles."))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"CardActionBar")," Properties"),(0,l.kt)(r.Z,{anchorId:"card-actionbar-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"CardActionBar Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles."))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,l.kt)("h4",null,(0,l.kt)("span",null,(0,l.kt)("mark",null,"CardActionableArea")," Properties"),(0,l.kt)(r.Z,{anchorId:"card-actionable-area-properties",mdxType:"AnchorButton"})),(0,l.kt)("table",{cols:4},(0,l.kt)("caption",null,"CardActionableArea Properties"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"node"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"The content of the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"className"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onClick"),(0,l.kt)("td",null,"function"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"Callback fired when the area is clicked.",(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("strong",null,"Signature:"))," ",(0,l.kt)("inlineCode",null,"function(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void")))),(0,l.kt)("tfoot",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"The ",(0,l.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,l.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}L.isMDXComponent=!0}},function(t){t.O(0,[8242,6697,2389,9774,2888,179],(function(){return n=7454,t(t.s=n);var n}));var n=t.O();_N_E=n}]);