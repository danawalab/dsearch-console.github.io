(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[52],{1502:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n(0),l=n.n(r),c=n(38),i=n(27),o=n(11),u=n(131),m=n.n(u),s=n(714),d=n(650),f=n(170),p=n(598),y=n(607),E=n(700),g=n(663),h=n(860),b=n.n(h),O=n(734),v=n(2),x=n(894),C=n(1109),S=n.n(C),j=n(1063),T=n.n(j),k=n(725),w=n(751),N=n(168),_=n(720),M=n(721),Y=n(722),U=n(697),I=n(843),P=n(1048),R=n(604),W=n(723),A=n(696),D=n(36),B=n(156),z=n(567),L=Object(o.c)(s.a)(g.a),F=Object(A.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},link:{cursor:"pointer"},fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}})),H="\uc544\uc774\ub514",G="\uc774\ub984",X="\ud0c0\uc785",J="\ub300/\uc18c\ubb38\uc790\ubb34\uc2dc",Z="\ud1a0\ud070 \ud0c0\uc785",$="\ud544\ub4dc(\uc544\uc774\ub514)",q="\ud544\ub4dc(\ud0a4\uc6cc\ub4dc)",K="\ud544\ub4dc(\uac12)",Q="\uc0ad\uc81c";var V=Object(c.b)((function(e){return{authUser:e.dsearchReducers.authUser,settings:e.dictionaryReducers.settings,active:e.dictionaryReducers.active}}))((function(e){var t=e.dispatch,n=e.authUser;return function(e){var c=F(),i=Object(z.a)(Object(D.a)().breakpoints.down("sm")),o=l.a.useState(e),u=Object(a.a)(o,2),s=u[0],f=u[1],E=l.a.useState(!1),g=Object(a.a)(E,2),h=g[0],b=g[1],C=l.a.useState({}),j=Object(a.a)(C,2),A=j[0],V=j[1],ee=l.a.useState(!1),te=Object(a.a)(ee,2),ne=te[0],ae=te[1],re=l.a.useState({id:"",name:"",type:"",tokenType:"",ignoreCase:"",column_id:"",column_keyword:"",column_value:""}),le=Object(a.a)(re,2),ce=le[0],ie=le[1],oe=l.a.useRef({value:""}),ue=l.a.useRef({value:""}),me=l.a.useRef({value:""}),se=l.a.useRef({value:""}),de=l.a.useRef({value:""}),fe=l.a.useState({}),pe=Object(a.a)(fe,2),ye=pe[0],Ee=pe[1];Object(r.useEffect)((function(){t(Object(O.m)()),console.log(e)}),[]);var ge={onDragEnd:function(e,a){var r=Object(x.a)(s),l=r.splice(e,1)[0];r.splice(a,0,l),f(r),n.role.index&&function(e,n,a){if(n!==a){for(var r=0;r<e.length;r++)e[r].index=r+1;f(e),t(Object(O.p)(e))}}(r,e,a)},nodeSelector:"div",handleSelector:"svg"};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:"\uc0ac\uc804 \uc124\uc815"}),l.a.createElement(p.a,{align:"right"},n.role.index?l.a.createElement(k.a,{className:c.link,onClick:function(){ie({id:"",name:"",type:"",tokenType:"",ignoreCase:"",column_id:"",column_keyword:"",column_value:""}),b(!0)},color:"primary"},"\uc0ac\uc804 \uc0dd\uc131"):l.a.createElement(l.a.Fragment,null)),l.a.createElement("br",null),l.a.createElement(w.a,{component:N.a},l.a.createElement(p.a,{style:{width:"100%",marginTop:"12px",marginBottom:"12px"}},l.a.createElement(p.a,{style:{width:"100%",display:"flex",paddingTop:"8px",paddingBottom:"8px"}},l.a.createElement(p.a,{align:"center",style:{width:"5%"}},l.a.createElement("b",null,"#")),l.a.createElement(p.a,{align:"center",style:{width:"10%"}},l.a.createElement("b",null,H)),l.a.createElement(p.a,{align:"center",style:{width:"15%"}},l.a.createElement("b",null,G)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,X)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,J)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,Z)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,$)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,q)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,K)),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},l.a.createElement("b",null,Q))),l.a.createElement(L,null)),l.a.createElement(T.a,ge,s.map((function(e,t){return l.a.createElement(p.a,{key:t,style:{width:"100%",display:"flex",marginTop:"8px",marginBottom:"8px",paddingTop:"12px",paddingBottom:"12px"}},l.a.createElement(S.a,{style:{cursor:"move",width:"5%"}}),l.a.createElement(p.a,{align:"center",style:{width:"10%"}},e.id),l.a.createElement(p.a,{align:"center",style:{width:"15%"}},e.name),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.type),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.ignoreCase),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.tokenType),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.columns.filter((function(e){return"id"===e.type})).map((function(e){return e.label})).join("")),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.columns.filter((function(e){return"keyword"===e.type})).map((function(e){return e.label})).join("")),l.a.createElement(p.a,{align:"center",style:{width:"10%",margin:"4px"}},e.columns.filter((function(e){return"value"===e.type})).map((function(e){return e.label})).join("")),l.a.createElement(p.a,{align:"center",style:{width:"10%"}},n.role.index?l.a.createElement(y.a,{size:"small",variant:"outlined",style:{color:B.a[400]},onClick:function(){return V(e),void ae(!0)}},"\uc0ad\uc81c"):l.a.createElement(y.a,{size:"small",variant:"outlined",style:{color:B.a[400]},disabled:!0},"\uc0ad\uc81c")))})))),l.a.createElement(_.a,{open:h,fullWidth:!0,fullScreen:i,onClose:function(){return b(!1)}},l.a.createElement(M.a,null,"\uc0ac\uc804 \ucd94\uac00"),l.a.createElement(Y.a,null,l.a.createElement(p.a,null,l.a.createElement(p.a,null,l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\uc544\uc774\ub514"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(U.a,{fullWidth:!0,autoFocus:!0,placeholder:"Synonym",inputRef:oe,error:ye.id,helperText:ye.id||""})))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\uc774\ub984"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(U.a,{fullWidth:!0,placeholder:"\ub3d9\uc758\uc5b4 \uc0ac\uc804",inputRef:ue,error:ye.name,helperText:ye.name||""})))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\ud0c0\uc785"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(I.a,{className:c.select,fullWidth:!0},l.a.createElement(P.a,{placeholder:"SYNONYM",value:ce.type,onChange:function(e){ie(Object(v.a)(Object(v.a)({},ce),{},{column_id:"",column_keyword:"",column_value:"",type:e.target.value}))},error:ye.type},l.a.createElement(R.a,{value:"",disabled:!0},"\uc120\ud0dd\ud558\uc138\uc694."),l.a.createElement(R.a,{value:"SET"},"SET"),l.a.createElement(R.a,{value:"SYNONYM"},"SYNONYM"),l.a.createElement(R.a,{value:"SPACE"},"SPACE"),l.a.createElement(R.a,{value:"COMPOUND"},"COMPOUND"),l.a.createElement(R.a,{value:"SYNONYM_2WAY"},"SYNONYM_2WAY"),l.a.createElement(R.a,{value:"CUSTOM"},"CUSTOM")))))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\ud1a0\ud070 \ud0c0\uc785"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(I.a,{className:c.select,fullWidth:!0},l.a.createElement(P.a,{placeholder:"MAX",value:ce.tokenType,onChange:function(e){console.log(e.target.value),ie(Object(v.a)(Object(v.a)({},ce),{},{tokenType:e.target.value}))},error:ye.tokenType},l.a.createElement(R.a,{value:"",disabled:!0},"\uc120\ud0dd\ud558\uc138\uc694."),l.a.createElement(R.a,{value:"MAX"},"MAX"),l.a.createElement(R.a,{value:"MIN"},"MIN"),l.a.createElement(R.a,{value:"MID"},"MID"),l.a.createElement(R.a,{value:"HIGH"},"HIGH"),l.a.createElement(R.a,{value:"NONE"},"NONE")))))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\ub300/\uc18c\ubb38\uc790 \ubb34\uc2dc"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(I.a,{className:c.select,fullWidth:!0},l.a.createElement(P.a,{value:ce.ignoreCase,onChange:function(e){console.log(e.target.value),ie(Object(v.a)(Object(v.a)({},ce),{},{ignoreCase:e.target.value}))},error:ye.ignoreCase},l.a.createElement(R.a,{value:"",disabled:!0},"\uc120\ud0dd\ud558\uc138\uc694."),l.a.createElement(R.a,{value:"true"},"true"),l.a.createElement(R.a,{value:"false"},"false")))))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\ud544\ub4dc"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\uc544\uc774\ub514"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(U.a,{fullWidth:!0,inputRef:me,placeholder:"",style:{backgroundColor:["CUSTOM"].includes(ce.type)?null:"#bdbdbd"},disabled:!["CUSTOM"].includes(ce.type),error:ye.columns_id,helperText:ye.column_id||""})))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\ud0a4\uc6cc\ub4dc"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(U.a,{fullWidth:!0,placeholder:"",inputRef:se,style:{backgroundColor:["SET","SYNONYM","SPACE","COMPOUND","CUSTOM"].includes(ce.type)?null:"#bdbdbd"},disabled:!["SET","SYNONYM","SPACE","COMPOUND","CUSTOM"].includes(ce.type),error:ye.column_keyword,helperText:ye.column_keyword||""})))),l.a.createElement(p.a,{my:3},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:3,style:{alignItems:"center",justifyContent:"center",display:"flex"}},"\uac12"),l.a.createElement(d.a,{item:!0,xs:9},l.a.createElement(U.a,{fullWidth:!0,placeholder:"",inputRef:de,style:{backgroundColor:["SYNONYM","COMPOUND","SYNONYM_2WAY","CUSTOM"].includes(ce.type)?null:"#bdbdbd"},disabled:!["SYNONYM","COMPOUND","SYNONYM_2WAY","CUSTOM"].includes(ce.type),error:ye.column_value,helperText:ye.column_value||""})))))))))),l.a.createElement(W.a,null,l.a.createElement(p.a,{mx:3},l.a.createElement(y.a,{variant:"contained",color:"primary",style:{marginRight:"5px"},onClick:function(){console.log(ce);var n=ce;n.id=oe.current.value,n.name=ue.current.value,n.column_id=me.current.value,n.column_keyword=se.current.value,n.column_value=de.current.value,ie(n),console.log(ce);var a={};if((""===ce.id.trim()||/[^a-z0-9_]+/gi.test(ce.id.trim()))&&(a.id="\uc544\uc774\ub514\ub97c \ud655\uc778\ud558\uc138\uc694. (a-zA-Z0-9_ \uae00\uc790\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.)"),""===ce.name.trim()&&(a.name="\uc774\ub984\ub97c \ud655\uc778\ud558\uc138\uc694."),""===ce.type&&(a.type="\ud0c0\uc785\uc744 \uc120\ud0dd\ud558\uc138\uc694."),""===ce.tokenType&&(a.tokenType="\ud1a0\ud070\ud0c0\uc785\uc744 \uc120\ud0dd\ud558\uc138\uc694."),""===ce.ignoreCase&&(a.ignoreCase="\ub300/\uc18c\ubb38\uc790 \ubb34\uc2dc\ub97c \uc120\ud0dd\ud558\uc138\uc694."),ce.type){var r=ce.type;["CUSTOM"].includes(r)&&""===String(ce.column_id||"").trim()&&(a.column_id="\ud544\ub4dc \uc544\uc774\ub514\ub97c \ud655\uc778\ud558\uc138\uc694."),["SET","SYNONYM","SPACE","COMPOUND","CUSTOM"].includes(r)&&""===String(ce.column_keyword||"").trim()&&(a.column_keyword="\ud544\ub4dc\uc758 \ud0a4\uc6cc\ub4dc\ub97c \ud655\uc778\ud558\uc138\uc694."),["SYNONYM","COMPOUND","SYNONYM_2WAY","CUSTOM"].includes(r)&&""===String(ce.column_value||"").trim()&&(a.column_value="\ud544\ub4dc\uc758 \uac12\ub97c \ud655\uc778\ud558\uc138\uc694.")}if(Object.keys(a).length>0)return console.log(a),void Ee(a);t(Object(O.j)({id:ce.id,name:ce.name,ignoreCase:ce.ignoreCase,type:ce.type,tokenType:ce.tokenType,columns_id:ce.column_id,columns_keyword:ce.column_keyword,columns_value:ce.column_value})).then((function(n){var a=[];""!=ce.column_id&&a.push({type:"id",label:ce.column_id}),""!=ce.column_keyword&&a.push({type:"keyword",label:ce.column_keyword}),""!=ce.column_value&&a.push({type:"value",label:ce.column_value}),f(s.concat({id:ce.id,name:ce.name,ignoreCase:ce.ignoreCase,type:ce.type,tokenType:ce.tokenType,index:e.length,columns:a})),setTimeout((function(){t(Object(O.m)()),b(!1)}),1e3)}))}},"\ucd94\uac00"),l.a.createElement(y.a,{variant:"outlined",onClick:function(){return b(!1)},style:{marginLeft:"5px"}},"\ub2eb\uae30")))),l.a.createElement(_.a,{open:ne,fullWidth:!0,fullScreen:i,onClose:function(){return ae(!1)}},l.a.createElement(M.a,null,"\uc0ac\uc804 \uc0ad\uc81c"),l.a.createElement(Y.a,null,A.name||""," \uc0ac\uc804\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),l.a.createElement(W.a,null,l.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){t(Object(O.e)(A.documentId)).then((function(e){var n=s,a=n.findIndex((function(e){return e.documentId===A.documentId}));n.splice(a,1),f(n),setTimeout((function(){t(Object(O.m)()),ae(!1)}),1e3)}))}},"\uc0ad\uc81c"),l.a.createElement(y.a,{variant:"outlined",onClick:function(){return ae(!1)}},"\ucde8\uc18c"))))}(e.settings)})),ee=Object(o.c)(s.a)(g.a),te=[{icon:l.a.createElement(b.a,null),component:Object(i.a)((function(){return n.e(54).then(n.bind(null,1488))}),{time:0})},{label:"\uac1c\uc694",component:Object(i.a)((function(){return Promise.all([n.e(33),n.e(61)]).then(n.bind(null,1489))}))}];t.default=Object(c.b)((function(e){return{authUser:e.dsearchReducers.authUser,settings:e.dictionaryReducers.settings,active:e.dictionaryReducers.active}}))((function(e){var t=e.dispatch,c=e.authUser,o=e.settings,u=e.active,s=(e.totalCount,l.a.useState(!1)),g=Object(a.a)(s,2),h=g[0],b=g[1],v=l.a.useState({}),x=Object(a.a)(v,2),C=x[0],S=x[1],j=te.concat(o.map((function(e){return{label:e.name,component:Object(i.a)((function(){return Promise.all([n.e(23),n.e(62)]).then(n.bind(null,1497))}))}})));return Object(r.useEffect)((function(){t(Object(O.m)()),t(Object(O.l)()).then((function(e){S(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:"\uc0ac\uc804"}),l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:10},l.a.createElement(f.a,{variant:"h3",gutterBottom:!0,display:"inline"},"\uc0ac\uc804 ",h?"\uc124\uc815":""),l.a.createElement(p.a,{style:{fontSize:"0.9em"},mt:3},C.remote&&!0===C.remote?"\uc0ac\uc804\uc18c\uc2a4\uc815\ubcf4: ".concat(C.host||"",":").concat(C.port||""):"")),l.a.createElement(d.a,{item:!0,xs:2},l.a.createElement(p.a,{align:"right"},l.a.createElement(y.a,{color:"primary",variant:"outlined",onClick:function(){return b(!h)}},h?"\ub2eb\uae30":"\uc124\uc815")))),l.a.createElement(ee,{my:6}),h?l.a.createElement(V,null):l.a.createElement(d.a,{container:!0,spacing:6},l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(E.a,{authUser:c,tabs:j,tabIndex:u,onChange:function(e){t(Object(O.i)(e-te.length))}}))))}))},700:function(e,t,n){"use strict";var a=n(59),r=n(0),l=n.n(r),c=n(9),i=n(714),o=n(598),u=n(1468),m=(n(170),n(1498)),s=n(11),d=n(663),f=Object(s.c)(i.a)(d.a),p=Object(s.c)(o.a)(d.a),y=Object(c.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(2),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}),{index:1})((function(e){return l.a.createElement(u.a,Object.assign({disableRipple:!0},e))}));t.a=function(e){var t=e.tabs,n=e.tabIndex,r=void 0===n?0:n,c=e.onChange,i=l.a.useState({tabIndex:r}),o=Object(a.a)(i,2),u=o[0],s=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{value:u.tabIndex,onChange:function(e,t){s({tabIndex:t}),"function"===typeof c&&c(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){return l.a.createElement(y,{key:t,id:t,icon:e.icon,label:e.label||""})}))),l.a.createElement(f,null),t.map((function(e,t){return l.a.createElement(p,{key:t,role:"tabpanel",hidden:u.tabIndex!==t,id:"scrollable-auto-tabpanel-".concat(t),"aria-labelledby":"scrollable-auto-tab-".concat(t)},t===u.tabIndex&&e.component&&l.a.createElement(p,null," ",l.a.createElement(e.component,{tabs:e})," "))})))}},734:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"m",(function(){return i})),n.d(t,"p",(function(){return o})),n.d(t,"k",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"o",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"n",(function(){return y})),n.d(t,"a",(function(){return E})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"l",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"f",(function(){return v}));var a=n(76),r=n(3),l=new a.a,c=function(e){return function(t){return t({type:r.c,payload:e})}},i=function(){return function(e){return l.call({uri:"/dictionaries/settings"}).then((function(t){var n=t.data;e({type:r.kb,payload:n.sort((function(e,t){return e.index-t.index}))})})).catch((function(e){return console.error(e)}))}},o=function(e){return function(t){return l.call({uri:"/dictionaries/settings/updateList",method:"POST",data:e}).then((function(){console.log("success")})).catch((function(e){console.log(e)}))}},u=function(e,t,n,a,c,i){return function(o){return l.call({uri:"/dictionaries/".concat(e),params:{pageNum:t,rowSize:n,isMatch:a,value:c,searchColumns:i}}).then((function(t){return o({type:r.s,dictionary:e,payload:t.data})})).catch((function(e){return console.error(e)}))}},m=function(e){return l.call({uri:"/dictionaries/".concat(e,"/download"),responseType:"blob"}).then((function(t){var n=document.createElement("a");n.href=window.URL.createObjectURL(new Blob([t.data],{type:t.headers["content-type"]})),n.setAttribute("download","".concat(e,".txt")),document.body.appendChild(n),n.click()}))},s=function(e,t){return l.call({uri:"/dictionaries/".concat(e,"/").concat(t),method:"DELETE"})},d=function(e,t){return l.call({uri:"/dictionaries/".concat(e),method:"POST",data:t}).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))},f=function(e,t,n){return l.call({uri:"/dictionaries/".concat(e,"/").concat(t),method:"PUT",data:n}).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))},p=function(e){return function(t){return l.call({uri:"/dictionaries/find-dict",method:"POST",data:e}).then((function(e){return t({type:r.t,payload:e.data})}))}},y=function(){return function(e){return l.call({uri:"/dictionaries/summary"}).then((function(t){return e({type:r.mb,payload:t.data})}))}},E=function(e){return function(t){return l.call({uri:"/dictionaries/compile-dict",method:"POST",data:e}).then((function(e){return t({type:r.r,payload:e.data})}))}},g=function(e){var t=e.id,n=e.name,a=e.type,r=e.tokenType,c=e.ignoreCase,i=e.columns_id,o=e.columns_keyword,u=e.columns_value;return function(e){return l.call({uri:"/dictionaries/settings",method:"POST",data:{id:t,name:n,type:a,tokenType:r,ignoreCase:c,columns:[i.length>0?{type:"id",label:i}:null,o.length>0?{type:"keyword",label:o}:null,u.length>0?{type:"value",label:u}:null]}}).then((function(e){return e.data}))}},h=function(e){return function(t){return l.call({uri:"/dictionaries/settings/"+e,method:"DELETE"}).then((function(e){return e.data}))}},b=function(){return function(e){return l.call({uri:"/dictionaries/remote"}).then((function(e){return e.data})).catch((function(e){return console.error(e)}))}},O=function(e){return function(t){return l.call({uri:"/dictionaries/fileUpload",method:"POST",data:e,headers:{"Content-type":"multipart/form-data"}})}},v=function(e){return function(t){return l.call({uri:"/dictionaries/resetDict",method:"POST",data:e})}}}}]);
//# sourceMappingURL=52.916c4150.chunk.js.map