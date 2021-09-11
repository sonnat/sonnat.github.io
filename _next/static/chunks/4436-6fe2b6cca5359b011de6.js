"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4436],{4436:function(o,e,r){var a=r(4942),l=r(66),n=r(5987),t=r(7462),c=r(4184),i=r.n(c),d=r(5697),u=r.n(d),h=r(7294),s=r(8683),g=r(4425),p=r(7172),C=r(5604),b=r(8289),k=r(4957),m=r(3901),y=r(1424),f=["className","label","leadingIcon","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onToggle","selected","defaultSelected","variant","size","color","disabled","rounded"],v="ChoiceChip",Z=["filled","outlined"],x=["large","medium","small"],S=["default","primary","secondary"],$=function(o){return o.replace(/-./g,(function(o){return o.toUpperCase()[1]}))},B=(0,g.Z)((function(o){var e=o.colors,r=o.darkMode,a=o.direction,l=o.mixins,n=l.useIconWrapper,c=l.useDisableUserSelect,i=o.typography,d=i.pxToRem,u=i.useText,h=i.fontFamily,g=e.text.secondary,C=r?e.primary.light:e.primary.origin,b=r?e.secondary.light:e.secondary.origin,k={background:{main:g,hover:r?e.createWhiteColor({alpha:.98}):(0,s.Ru)(g,{lightness:12}),active:r?e.createWhiteColor({alpha:.5}):e.createBlackColor({alpha:.6})},text:e.getContrastColorOf(g)},m={background:{main:C,hover:(0,s.Ru)(C,{saturation:-8,lightness:8}),active:(0,s.Ru)(C,{saturation:8,lightness:-4})},text:e.getContrastColorOf(C)},y={background:{main:b,hover:(0,s.Ru)(b,{saturation:-8,lightness:8}),active:(0,s.Ru)(b,{saturation:8,lightness:-4})},text:e.getContrastColorOf(b)};return{root:(0,t.Z)({},u(),c(),{direction:a,fontFamily:h[a],padding:"0 ".concat(d(12)),outline:"none",display:"inline-flex",alignItems:"center",alignSelf:"center",borderRadius:d(2),verticalAlign:"middle",overflow:"hidden",position:"relative",zIndex:"1",flexShrink:"0",cursor:"pointer",transition:"color 360ms ease, background-color 360ms ease, border 360ms ease"}),icon:(0,t.Z)({},n(16),{flexShrink:"0",transition:"color 360ms ease"}),small:{height:d(20),fontSize:d(10),padding:"0 ".concat(d(8)),lineHeight:1.8,"& $icon":(0,t.Z)({},n(14),"rtl"===a?{marginRight:d(-2),marginLeft:d(4)}:{marginLeft:d(-2),marginRight:d(4)})},medium:{height:d(28),fontSize:d(12),lineHeight:1.6666666667,"& $icon":(0,t.Z)({},"rtl"===a?{marginRight:d(-6),marginLeft:d(4)}:{marginLeft:d(-6),marginRight:d(4)})},large:{height:d(32),fontSize:d(14),lineHeight:1.5714285714,"& $icon":(0,t.Z)({},"rtl"===a?{marginRight:d(-4),marginLeft:d(4)}:{marginLeft:d(-4),marginRight:d(4)})},rounded:{borderRadius:d(16)},disabled:{pointerEvents:"none","&:hover":{"@media (hover: none)":{backgroundColor:e.transparent}}},selected:{},filled:{"&$disabled":{"&:not($selected)":{backgroundColor:r?e.pallete.grey[900]:e.pallete.grey[100],color:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.32}),"& $icon":{color:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.32})}},"&$selected":{backgroundColor:r?e.pallete.grey[700]:e.pallete.grey[300],color:r?e.createWhiteColor({alpha:.32}):e.createBlackColor({alpha:.32}),"& $icon":{color:r?e.createWhiteColor({alpha:.32}):e.createBlackColor({alpha:.32})}}}},outlined:{"&$disabled":{backgroundColor:e.transparent}},filledUnselected:{backgroundColor:r?e.createWhiteColor({alpha:.04}):e.createBlackColor({alpha:.04}),color:e.text.secondary,"& $icon":{color:e.text.secondary},"&:hover":{backgroundColor:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.12}),"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:r?e.createWhiteColor({alpha:.24}):e.createBlackColor({alpha:.24})}},outlinedUnselected:{backgroundColor:e.transparent,border:"".concat(d(1)," solid ").concat(e.divider),color:e.text.secondary,"& $icon":{color:e.text.secondary},"&:hover":{backgroundColor:r?e.createWhiteColor({alpha:.04}):e.createBlackColor({alpha:.04}),"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.12})},"&$disabled":{borderColor:e.divider,color:e.text.disabled,"& $icon":{color:e.text.disabled}}},filledDefaultSelected:{backgroundColor:k.background.main,color:k.text,"& $icon":{color:k.text},"&:hover":{backgroundColor:k.background.hover,"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:k.background.active}},filledPrimarySelected:{backgroundColor:m.background.main,color:m.text,"& $icon":{color:m.text},"&:hover":{backgroundColor:m.background.hover,"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:m.background.active}},filledSecondarySelected:{backgroundColor:y.background.main,color:y.text,"& $icon":{color:y.text},"&:hover":{backgroundColor:y.background.hover,"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:y.background.active}},outlinedDefaultSelected:{backgroundColor:r?e.createWhiteColor({alpha:.04}):e.createBlackColor({alpha:.04}),border:"".concat(d(1)," solid ").concat(r?e.createWhiteColor({alpha:.48}):e.createBlackColor({alpha:.48})),color:e.text.secondary,"& $icon":{color:e.text.secondary},"&:hover":{backgroundColor:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.12}),"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:r?e.createWhiteColor({alpha:.24}):e.createBlackColor({alpha:.24})},"&$disabled":{backgroundColor:r?e.pallete.grey[900]:e.pallete.grey[100],color:r?e.createWhiteColor({alpha:.32}):e.createBlackColor({alpha:.32}),"& $icon":{color:r?e.createWhiteColor({alpha:.32}):e.createBlackColor({alpha:.32})},borderColor:r?e.createWhiteColor({alpha:.12}):e.createBlackColor({alpha:.12})}},outlinedPrimarySelected:{backgroundColor:r?(0,s.zX)(e.primary.light,{alpha:.04}):e.createPrimaryColor({alpha:.04}),border:"".concat(d(1)," solid ").concat(r?e.primary.light:e.primary.origin),color:r?e.primary.light:e.primary.origin,"& $icon":{color:r?e.primary.light:e.primary.origin},"&:hover":{backgroundColor:r?(0,s.zX)(e.primary.light,{alpha:.12}):e.createPrimaryColor({alpha:.12}),"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:r?(0,s.zX)(e.primary.light,{alpha:.24}):e.createPrimaryColor({alpha:.24})},"&$disabled":{backgroundColor:r?(0,s.zX)(e.primary.light,{alpha:.12}):e.createPrimaryColor({alpha:.12}),color:r?(0,s.zX)(e.primary.light,{alpha:.32}):e.createPrimaryColor({alpha:.32}),"& $icon":{color:r?(0,s.zX)(e.primary.light,{alpha:.32}):e.createPrimaryColor({alpha:.32})},borderColor:r?(0,s.zX)(e.primary.light,{alpha:.12}):e.createPrimaryColor({alpha:.12})}},outlinedSecondarySelected:{backgroundColor:r?(0,s.zX)(e.secondary.light,{alpha:.04}):e.createSecondaryColor({alpha:.04}),border:"".concat(d(1)," solid ").concat(r?e.secondary.light:e.secondary.origin),color:r?e.secondary.light:e.secondary.origin,"& $icon":{color:r?e.secondary.light:e.secondary.origin},"&:hover":{backgroundColor:r?(0,s.zX)(e.secondary.light,{alpha:.12}):e.createSecondaryColor({alpha:.12}),"@media (hover: none)":{backgroundColor:e.transparent}},"&:active":{backgroundColor:r?(0,s.zX)(e.secondary.light,{alpha:.24}):e.createSecondaryColor({alpha:.24})},"&$disabled":{backgroundColor:r?(0,s.zX)(e.secondary.light,{alpha:.12}):e.createSecondaryColor({alpha:.12}),color:r?(0,s.zX)(e.secondary.light,{alpha:.32}):e.createSecondaryColor({alpha:.32}),"& $icon":{color:r?(0,s.zX)(e.secondary.light,{alpha:.32}):e.createSecondaryColor({alpha:.32})},borderColor:r?(0,s.zX)(e.secondary.light,{alpha:.12}):e.createSecondaryColor({alpha:.12})}},focusVisible:{outline:"2px solid ".concat(r?p.iN[300]:p.iN[500]),outlineOffset:1}}}),{name:"Sonnat".concat(v)}),z=h.memo(h.forwardRef((function(o,e){var r,c=o.className,d=o.label,u=o.leadingIcon,s=o.onClick,g=o.onFocus,p=o.onBlur,z=o.onKeyUp,R=o.onKeyDown,W=o.onToggle,X=o.selected,P=o.defaultSelected,N=o.variant,w=void 0===N?"filled":N,T=o.size,D=void 0===T?"medium":T,F=o.color,K=void 0===F?"default":F,U=o.disabled,I=void 0!==U&&U,L=o.rounded,O=void 0!==L&&L,E=(0,n.Z)(o,f),_=B(),H=h.useRef(null!=X?void 0:null!=P&&P).current,V=(0,y.Z)(X,H,v),q=(0,l.Z)(V,2),A=q[0],M=q[1],j=function(o){W&&W(o,!A),s&&s(o),M(!A)},G=(0,C.Z)(D,"medium",!x.includes(D)),J=(0,C.Z)(K,"default",!S.includes(K)),Q=(0,C.Z)(w,"filled",!Z.includes(w)),Y=(0,m.Z)(),oo=Y.isFocusVisibleRef,eo=Y.onBlur,ro=Y.onFocus,ao=Y.ref,lo=h.useRef(null),no=(0,k.Z)(ao,lo),to=(0,k.Z)(e,no),co=h.useState(!1),io=(0,l.Z)(co,2),uo=io[0],ho=io[1];I&&uo&&ho(!1),h.useEffect((function(){oo.current=uo}),[uo]);var so=(0,b.Z)((function(o){lo.current||(lo.current=o.currentTarget),ro(o),!0===oo.current&&ho(!0),g&&g(o)})),go=(0,b.Z)((function(o){eo(o),!1===oo.current&&ho(!1),p&&p(o)})),po=h.useRef(!1),Co=(0,b.Z)((function(o){!1===po.current&&uo&&" "===o.key&&(po.current=!0),R&&R(o),o.target!==o.currentTarget||"enter"!==o.key.toLowerCase()||I||(o.preventDefault(),j(o))})),bo=(0,b.Z)((function(o){!o.defaultPrevented&&uo&&" "===o.key&&(po.current=!1),z&&z(o),o.target!==o.currentTarget||" "!==o.key||o.defaultPrevented||j(o)}));return d?h.createElement("div",(0,t.Z)({ref:to,role:"button","aria-disabled":I?"true":"false",tabIndex:I?-1:0,onClick:j,onKeyUp:bo,onKeyDown:Co,onFocus:so,onBlur:go,className:i()(c,_.root,_[G],_[Q],(r={},(0,a.Z)(r,_.selected,A),(0,a.Z)(r,_.focusVisible,uo),(0,a.Z)(r,_[$("".concat(Q,"-unselected"))],!A),(0,a.Z)(r,_[$("".concat(Q,"-").concat(J,"-selected"))],A),(0,a.Z)(r,_.rounded,O),(0,a.Z)(r,_.disabled,I),r))},E),u&&h.createElement("i",{className:i()(_.icon)},u),d):null})));z.displayName=v,z.propTypes={label:u().string.isRequired,leadingIcon:u().node,className:u().string,rounded:u().bool,disabled:u().bool,selected:u().bool,defaultSelected:u().bool,size:u().oneOf(x),color:u().oneOf(S),variant:u().oneOf(Z),onToggle:u().func,onClick:u().func,onFocus:u().func,onBlur:u().func,onKeyDown:u().func,onKeyUp:u().func},e.Z=z}}]);