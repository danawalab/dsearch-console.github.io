(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[46],{1472:function(e,t,n){"use strict";n.r(t);var a=n(98),l=n.n(a),r=n(133),c=n(59),o=n(0),u=n.n(o),i=n(87),m=n(11),s=n(131),d=n.n(s),p=n(700),f=n(756),E=n(714),b=n(598),h=n(676),g=n(170),y=n(607),v=n(650),j=n(843),O=n(697),k=n(970),x=n(726),_=n(1499),C=n(677),F=n(564),S=n(720),w=n(721),J=n(722),T=n(723),I=n(696),N=n(663),W=n(621),P=n(622),B=n(38),M=n(715),R=n(717),z=Object(I.a)((function(e){return{formControl:{minWidth:250},edit:{width:"100%"}}})),A=Object(m.c)(E.a)(N.a),H=Object(m.c)(b.a)(N.a,W.a),K=Object(m.c)(h.a)(N.a),U=Object(m.c)(g.a)(N.a,W.a),V=Object(m.c)(y.a)(N.a,W.a,P.a),D=[{label:"\ub9e4\ud551"},{label:"\uc14b\ud305"}],G=['{\n    "properties": {\n        "hit": {\n            "type": "double"\n        },\n        "search": {\n            "type": "text"\n        },\n        "range": {\n            "type": "double"\n        },\n        "keyword": {\n            "type": "text"\n        }\n    }\n}','{\n    "refresh_interval": "1s",\n    "number_of_shards": "1",\n    "number_of_replicas": "0"\n}'],L="";t.default=Object(B.b)((function(e){return{templates:e.indexTemplateReducers.templates}}))((function(e){var t=e.dispatch,n=Object(i.f)(),a=z(),m=Object(o.useState)(""),s=Object(c.a)(m,2),E=s[0],b=s[1],h=Object(o.useState)(""),g=Object(c.a)(h,2),y=g[0],I=g[1],N=Object(o.useState)(0),W=Object(c.a)(N,2),P=W[0],B=W[1],$=Object(o.useState)("json"),q=Object(c.a)($,2),Q=q[0],X=q[1],Y=Object(o.useState)("json"),Z=Object(c.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(o.useState)(G[0]),ae=Object(c.a)(ne,2),le=ae[0],re=ae[1],ce=Object(o.useState)(G[1]),oe=Object(c.a)(ce,2),ue=oe[0],ie=oe[1],me=Object(o.useState)(!1),se=Object(c.a)(me,2),de=se[0],pe=se[1],fe=Object(o.useState)({}),Ee=Object(c.a)(fe,2),be=Ee[0],he=Ee[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{title:"\ud15c\ud50c\ub9bf \uc0dd\uc131"}),u.a.createElement(U,{variant:"h3",gutterBottom:!0,display:"inline"},"\ud15c\ud50c\ub9bf \uc0dd\uc131"),u.a.createElement(A,{my:6}),u.a.createElement(v.a,{container:!0},u.a.createElement(v.a,{item:!0,xs:6},u.a.createElement(H,{align:"left"},u.a.createElement(j.a,{className:a.formControl},u.a.createElement(O.a,{label:"\ud15c\ud50c\ub9bf\uba85",value:E,onChange:function(e){return b(e.target.value)},error:be.templateText||!1})))),u.a.createElement(v.a,{item:!0,xs:6},u.a.createElement(H,{align:"right"},u.a.createElement(V,{variant:"outlined",color:"primary",onClick:function(){var e={};if((""===E.trim()||/[^a-z0-9-_]/gi.test(E.trim()))&&(e.templateText=!0),""===y.trim())e.indexPatternText=!0;else{var a=y.split(",");""===a[0]&&1===a.length&&(e.indexPatternText=!0)}try{JSON.parse(""===le?"{}":le)}catch(u){e.mappingsJson=!0}try{JSON.parse(""===ue?"{}":ue)}catch(u){e.settingsJson=!0}if(Object.keys(e).length>0)return he(e),!1;var c=JSON.parse(""===ue?"{}":ue),o=JSON.parse(""===le?"{}":le);o.properties||(o={properties:o}),t(Object(M.b)({template:E,index_patterns:y.split(","),settings:c,mappings:o})).then(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.sleep(500);case 2:n.push("../indices-templates/"+E);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("error",e),L="object"===typeof e?"[\uc0dd\uc131 \uc2e4\ud328]"+JSON.stringify(e):"[\uc0dd\uc131 \uc2e4\ud328]"+e,pe(!0)}))}},"\uc800\uc7a5"),u.a.createElement(V,{variant:"outlined",onClick:function(){return n.push("../indices-templates")},ml:1},"\ucde8\uc18c")))),u.a.createElement(j.a,{className:a.formControl},u.a.createElement(O.a,{label:"\uc778\ub371\uc2a4 \ud328\ud134",value:y,placeholder:"access-log-*,error-log-*",onChange:function(e){return I(e.target.value)},error:be.indexPatternText||!1})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(p.a,{tabs:D,tabIndex:P,onChange:function(e){B(e)},tabClassNames:{borderBottom:"1px solid #f44336"}}),u.a.createElement("br",null),u.a.createElement(H,{display:0===P?"block":"none"},u.a.createElement(j.a,{component:"fieldset"},u.a.createElement(k.a,{row:!0,onChange:function(e){return X(e.target.value)}},u.a.createElement(x.a,{value:"form",checked:"form"===Q,control:u.a.createElement(_.a,{color:"primary"}),label:"\ud3fc"}),u.a.createElement(x.a,{value:"json",checked:"json"===Q,control:u.a.createElement(_.a,{color:"primary"}),label:"json"}))),"form"===Q?u.a.createElement(K,null,u.a.createElement(C.a,{m:0},Object(f.a)({json:le,type:"mappings"}))):u.a.createElement(K,null,u.a.createElement(C.a,null,u.a.createElement(H,null,u.a.createElement(F.a,{style:{minHeight:"200px",border:be.mappingsJson?"1px solid #f44336":"1px solid black"},className:a.edit,value:le,onChange:function(e){return re(e.target.value)},autoFocus:!0}))))),u.a.createElement(H,{display:1===P?"block":"none"},u.a.createElement(j.a,{component:"fieldset"},u.a.createElement(k.a,{row:!0,onChange:function(e){return te(e.target.value)}},u.a.createElement(x.a,{value:"form",checked:"form"===ee,control:u.a.createElement(_.a,{color:"primary"}),label:"\ud3fc"}),u.a.createElement(x.a,{value:"json",checked:"json"===ee,control:u.a.createElement(_.a,{color:"primary"}),label:"json"}))),"form"===ee?u.a.createElement(K,null,u.a.createElement(C.a,{m:0},Object(f.a)({json:ue,type:"settings"}))):u.a.createElement(K,null,u.a.createElement(C.a,null,u.a.createElement(H,null,u.a.createElement(F.a,{style:{minHeight:"200px",border:be.settingsJson?"1px solid #f44336":"1px solid black"},className:a.edit,value:ue,onChange:function(e){return ie(e.target.value)},autoFocus:!0}))))),u.a.createElement(S.a,{open:de},u.a.createElement(w.a,null,"\uc624\ub958"),u.a.createElement(J.a,null,L),u.a.createElement(T.a,null,u.a.createElement(V,{autoFocus:!0,onClick:function(){return pe(!1)}},"\ud655\uc778"))))}))},700:function(e,t,n){"use strict";var a=n(59),l=n(0),r=n.n(l),c=n(9),o=n(714),u=n(598),i=n(1468),m=(n(170),n(1498)),s=n(11),d=n(663),p=Object(s.c)(o.a)(d.a),f=Object(s.c)(u.a)(d.a),E=Object(c.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(2),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}),{index:1})((function(e){return r.a.createElement(i.a,Object.assign({disableRipple:!0},e))}));t.a=function(e){var t=e.tabs,n=e.tabIndex,l=void 0===n?0:n,c=e.onChange,o=r.a.useState({tabIndex:l}),u=Object(a.a)(o,2),i=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{value:i.tabIndex,onChange:function(e,t){s({tabIndex:t}),"function"===typeof c&&c(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){return r.a.createElement(E,{key:t,id:t,icon:e.icon,label:e.label||""})}))),r.a.createElement(p,null),t.map((function(e,t){return r.a.createElement(f,{key:t,role:"tabpanel",hidden:i.tabIndex!==t,id:"scrollable-auto-tabpanel-".concat(t),"aria-labelledby":"scrollable-auto-tab-".concat(t)},t===i.tabIndex&&e.component&&r.a.createElement(f,null," ",r.a.createElement(e.component,{tabs:e})," "))})))}},715:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return s}));var a=n(76),l=n(3),r=new a.a,c=function(){return function(e){return r.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:l.K,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},o=function(e){var t=e.template,n=e.index_patterns,a=e.settings,l=e.mappings;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:n,settings:a,mappings:l}})}},u=function(e){var t=e.template;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},i=function(e){var t=e.template;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(n){return e({type:l.J,payload:n.data[t]})}))}},m=function(){return function(e){return r.call({uri:"/templates/comments",method:"GET"}).then((function(t){if(void 0==t.data||void 0==t.data.hits||0===t.data.hits.hits.length)e({type:l.p,payload:[]});else{var n=t.data.hits.hits.map((function(e){return e}));e({type:l.p,payload:n})}}))}},s=function(e){var t=e.id,n=e.name,a=e.updatedComment;return function(e){return r.call({uri:"/templates/comments",method:"PUT",data:{name:n,id:t,data:a}})}}},717:function(e,t,n){"use strict";var a={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=a},756:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(676),c=n(170),o=n(677),u=n(681),i=n(678),m=n(680),s=n(679),d=n(682),p=n(713),f=n(598),E=n(697),b=n(716),h=n.n(b),g=n(11),y=n(663),v=n(621),j=n(715),O=Object(g.c)(r.a)(y.a),k=Object(g.c)(c.a)(y.a,v.a);t.a=function(e){var t=e.json,n=e.type,a=e.name,r=e.comments,c=e.dispatch,b=e.mode,g=e.detail,y=t;try{"string"===typeof t&&(y=JSON.parse(t))}catch(v){}return y&&"mappings"===n?function(e,t,n,a,r,c){var o={};n&&n.length>0?n.forEach((function(e){e.sourceAsMap.name==t&&(o.id=e.id,o.comments=e.sourceAsMap.comments,o.name=e.sourceAsMap.name)})):o.name=t;var u=[];u="view"!==r||c?[{title:"\ud0c0\uc785",key:"type",component:function(e){return e}},{title:"\uc0c9\uc778",key:"enabled",component:function(e){return void 0!==e&&null!==e&&!1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!1})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!0}))}},{title:"\ubd84\uc11d\uae30",key:"analyzer",component:function(e){return e}},{title:"copy_to",key:"copy_to",component:function(e){return e}},{title:"ignore_above",key:"ignore_above",component:function(e){return e}},{title:"null_value",key:"null_value",component:function(e){return e}},{title:"doc_values",key:"doc_values",component:function(e){return e}},{title:"similarity",key:"similarity",component:function(e){return e||""}},{title:"term_vector",key:"term_vector",component:function(e){return e}},{title:"store",key:"store",component:function(e){return void 0!==e&&null!==e&&!1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!1})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!0}))}}]:[{title:"\ud0c0\uc785",key:"type",component:function(e){return e}},{title:"\uc0c9\uc778",key:"enabled",component:function(e){return void 0!==e&&null!==e&&!1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!1})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{cursor:"default"},checked:!0}))}},{title:"\ubd84\uc11d\uae30",key:"analyzer",component:function(e){return e}}];var i=h()(e.properties?e.properties:e),m={};return Object.keys(i).forEach((function(e){var t=e.replace(/\.properties/gi,""),n=t.substring(0,t.lastIndexOf(".")),a=t.substring(t.lastIndexOf(".")+1);if(m[n]||(m[n]={}),"copy_to"==n.substring(n.lastIndexOf(".")+1)){var l=t.substring(0,n.lastIndexOf(".")),r=m[l].copy_to;m[l].copy_to=null!=r&&void 0!=r?r.substring(0,r.length-2)+", "+i[e]+" ]":"[ "+i[e]+" ]"}else m[n][a]=i[e]})),l.a.createElement("table",{border:1,width:"100%",cellSpacing:0,cellPadding:8},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\uc774\ub984"),u.map((function(e){return l.a.createElement("th",{key:e.title},e.title)})),l.a.createElement("th",null,"\uae30\ud0c0\uc124\uc815"),l.a.createElement("th",null,"\uc124\uba85"))),l.a.createElement("tbody",null,Object.keys(m).filter((function(e){return!e.endsWith(".copy_to")})).map((function(e,n){var c=m[e],i=Object.keys(c).map((function(e){return u.find((function(t){return t.key===e}))?null:e+": "+c[e]})).filter((function(e){return e})),s=e.replace(/\.fields/gi,"");return s.includes("s-prod-v")&&(s="s-prod-v"),l.a.createElement("tr",{key:n},l.a.createElement("td",{align:"center"},n+1),l.a.createElement("td",null,e.replace(/\.fields/gi,"")),u.map((function(e){return l.a.createElement("td",{key:e.title,align:"center"},e.component(c[e.key]))})),l.a.createElement("td",null,i.join(", ")),l.a.createElement("td",null,"view"===r?s.includes(".")||void 0===o.comments||null===o.comments?l.a.createElement(l.a.Fragment,null):l.a.createElement(f.a,{width:"100%"},o.comments[s]):l.a.createElement(l.a.Fragment,null),"edit"===r?s.includes(".")?l.a.createElement(l.a.Fragment,null):void 0===o.comments||null===o.comments?l.a.createElement(E.a,{fullWidth:!0,onKeyPress:function(e){void 0==o.comments&&(o.comments={});var n=s+"";o.comments[n]=e.target.value,console.log(o),a(Object(j.a)({id:null,name:t,updatedComment:o})).then((function(e){a(Object(j.e)())})).catch((function(e){console.log(e)}))},onBlur:function(e){void 0==o.comments&&(o.comments={});var n=s+"";o.comments[n]=e.target.value,console.log(o),a(Object(j.a)({id:null,name:t,updatedComment:o})).then((function(e){a(Object(j.e)())})).catch((function(e){console.log(e)}))},key:s,defaultValue:""}):l.a.createElement(E.a,{fullWidth:!0,onKeyPress:function(e){void 0==o.comments&&(o.comments={});var n=s+"";o.comments[n]=e.target.value,console.log(o),a(Object(j.a)({id:o.id,name:t,updatedComment:o})).then((function(e){a(Object(j.e)())})).catch((function(e){console.log(e)}))},onBlur:function(e){void 0==o.comments&&(o.comments={});var n=s+"";o.comments[n]=e.target.value,console.log(o),a(Object(j.a)({id:null,name:t,updatedComment:o})).then((function(e){a(Object(j.e)())})).catch((function(e){console.log(e)}))},key:s,defaultValue:o.comments[s]}):l.a.createElement(l.a.Fragment,null)))}))))}(y,a,r,c,b,g):y&&"settings"===n?function(e){if(!e)return null;var t=h()(e.settings?e.settings:e);return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null,l.a.createElement(o.a,null,l.a.createElement(k,{variant:"h5",mt:5},"\uc8fc\uc694\ud56d\ubaa9"),l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,"\uc0e4\ub4dc \uac2f\uc218"),l.a.createElement(s.a,null,"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218"),l.a.createElement(s.a,null,"\ub9ac\ud504\ub808\uc26c \uac04\uaca9"))),l.a.createElement(d.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,((e.settings||{}).index||{}).number_of_shards||"-"),l.a.createElement(s.a,null,((e.settings||{}).index||{}).number_of_replicas||"-"),l.a.createElement(s.a,null,((e.defaults||{}).index||{}).refresh_interval||"-")))))),l.a.createElement("br",null),l.a.createElement(O,null,l.a.createElement(o.a,null,l.a.createElement(k,{variant:"h5",mt:5},"\uae30\ud0c0\ud56d\ubaa9"),l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,"\ud0a4"),l.a.createElement(s.a,null,"\uac12"))),l.a.createElement(d.a,null,Object.keys(t||{}).map((function(e){return l.a.createElement(m.a,{key:e},l.a.createElement(s.a,null,e),l.a.createElement(s.a,null,t[e]||""))})))))))}(y):l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{style:{minHeight:"150px"}}))}}}]);
//# sourceMappingURL=46.15e20f78.chunk.js.map