(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[44],{1010:function(e,r,t){"use strict";t.r(r);var a=t(17),n=t(0),o=t.n(n),i=t(14),l=t(63),s=t(136),c=t.n(s),d=t(384),m=t(179),u=t(100),p=t(762),f=t(694),b=t(761),h=t(595);function v(){var e=Object(a.a)(["\n  padding: ","px;\n\n  "," {\n    padding: ","px;\n  }\n"]);return v=function(){return e},e}var g=Object(i.c)(d.a)(h.a),O=Object(i.c)(m.a)(v(),(function(e){return e.theme.spacing(6)}),(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.spacing(10)}));r.default=function(){return o.a.createElement(O,null,o.a.createElement(c.a,{title:"Sign Up"}),o.a.createElement(u.a,{component:"h1",variant:"h4",align:"center",gutterBottom:!0},"Get started"),o.a.createElement(u.a,{component:"h2",variant:"body1",align:"center"},"Start creating the best possible user experience for you customers"),o.a.createElement("form",null,o.a.createElement(p.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(f.a,{htmlFor:"name"},"Name"),o.a.createElement(b.a,{id:"name",name:"name",autoFocus:!0})),o.a.createElement(p.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(f.a,{htmlFor:"company"},"Company"),o.a.createElement(b.a,{id:"company",name:"company"})),o.a.createElement(p.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(f.a,{htmlFor:"email"},"Email Address"),o.a.createElement(b.a,{id:"email",name:"email",autoComplete:"email"})),o.a.createElement(p.a,{margin:"normal",required:!0,fullWidth:!0},o.a.createElement(f.a,{htmlFor:"password"},"Password"),o.a.createElement(b.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),o.a.createElement(g,{component:l.b,to:"/",fullWidth:!0,variant:"contained",color:"primary",mt:2},"Sign up")))}},684:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var a=t(0),n=t(188);function o(){return a.useContext(n.a)}},694:function(e,r,t){"use strict";var a=t(1),n=t(6),o=t(0),i=(t(4),t(9)),l=t(230),s=t(684),c=t(12),d=t(702),m=o.forwardRef((function(e,r){var t=e.classes,c=e.className,m=e.disableAnimation,u=void 0!==m&&m,p=(e.margin,e.shrink),f=(e.variant,Object(n.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(s.a)(),h=p;"undefined"===typeof h&&b&&(h=b.filled||b.focused||b.adornedStart);var v=Object(l.a)({props:e,muiFormControl:b,states:["margin","variant"]});return o.createElement(d.a,Object(a.a)({"data-shrink":h,className:Object(i.a)(t.root,c,b&&t.formControl,!u&&t.animated,h&&t.shrink,"dense"===v.margin&&t.marginDense,{filled:t.filled,outlined:t.outlined}[v.variant]),classes:{focused:t.focused,disabled:t.disabled,error:t.error,required:t.required,asterisk:t.asterisk},ref:r},f))}));r.a=Object(c.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(m)},702:function(e,r,t){"use strict";var a=t(6),n=t(1),o=t(0),i=(t(4),t(9)),l=t(230),s=t(684),c=t(16),d=t(12),m=o.forwardRef((function(e,r){var t=e.children,d=e.classes,m=e.className,u=(e.color,e.component),p=void 0===u?"label":u,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(a.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(s.a)(),h=Object(l.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return o.createElement(p,Object(n.a)({className:Object(i.a)(d.root,d["color".concat(Object(c.a)(h.color||"primary"))],m,h.disabled&&d.disabled,h.error&&d.error,h.filled&&d.filled,h.focused&&d.focused,h.required&&d.required),ref:r},f),t,h.required&&o.createElement("span",{className:Object(i.a)(d.asterisk,h.error&&d.error)},"\u2009","*"))}));r.a=Object(d.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(m)},761:function(e,r,t){"use strict";var a=t(1),n=t(6),o=t(0),i=(t(4),t(9)),l=t(669),s=t(12),c=o.forwardRef((function(e,r){var t=e.disableUnderline,s=e.classes,c=e.fullWidth,d=void 0!==c&&c,m=e.inputComponent,u=void 0===m?"input":m,p=e.multiline,f=void 0!==p&&p,b=e.type,h=void 0===b?"text":b,v=Object(n.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return o.createElement(l.a,Object(a.a)({classes:Object(a.a)({},s,{root:Object(i.a)(s.root,!t&&s.underline),underline:null}),fullWidth:d,inputComponent:u,multiline:f,ref:r,type:h},v))}));c.muiName="Input",r.a=Object(s.a)((function(e){var r="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(r),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(r)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}}),{name:"MuiInput"})(c)},762:function(e,r,t){"use strict";var a=t(1),n=t(6),o=t(0),i=(t(4),t(9)),l=t(239),s=t(12),c=t(16),d=t(236),m=t(188),u=o.forwardRef((function(e,r){var t=e.children,s=e.classes,u=e.className,p=e.color,f=void 0===p?"primary":p,b=e.component,h=void 0===b?"div":b,v=e.disabled,g=void 0!==v&&v,O=e.error,x=void 0!==O&&O,j=e.fullWidth,E=void 0!==j&&j,y=e.hiddenLabel,C=void 0!==y&&y,k=e.margin,q=void 0===k?"none":k,S=e.required,W=void 0!==S&&S,$=e.size,w=e.variant,N=void 0===w?"standard":w,B=Object(n.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","hiddenLabel","margin","required","size","variant"]),F=o.useState((function(){var e=!1;return t&&o.Children.forEach(t,(function(r){if(Object(d.a)(r,["Input","Select"])){var t=Object(d.a)(r,["Select"])?r.props.input:r;t&&Object(l.a)(t.props)&&(e=!0)}})),e})),D=F[0],I=F[1],M=o.useState((function(){var e=!1;return t&&o.Children.forEach(t,(function(r){Object(d.a)(r,["Input","Select"])&&Object(l.b)(r.props,!0)&&(e=!0)})),e})),z=M[0],A=M[1],L=o.useState(!1),R=L[0],T=L[1];g&&R&&T(!1);var U=o.useCallback((function(){A(!0)}),[]),X={adornedStart:D,setAdornedStart:I,color:f,disabled:g,error:x,filled:z,focused:R,fullWidth:E,hiddenLabel:C,margin:("small"===$?"dense":void 0)||q,onBlur:function(){T(!1)},onEmpty:o.useCallback((function(){A(!1)}),[]),onFilled:U,onFocus:function(){T(!0)},registerEffect:void 0,required:W,variant:N};return o.createElement(m.a.Provider,{value:X},o.createElement(h,Object(a.a)({className:Object(i.a)(s.root,u,"none"!==q&&s["margin".concat(Object(c.a)(q))],E&&s.fullWidth),ref:r},B),t))}));r.a=Object(s.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,zIndex:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(u)}}]);
//# sourceMappingURL=44.fe59cf2f.chunk.js.map