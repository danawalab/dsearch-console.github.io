(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[54],{1475:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(59),c=n(0),l=n.n(c),i=n(38),o=n(87),u=n(11),s=n(131),d=n.n(s),m=n(713),f=n(170),h=n(598),p=n(607),b=n(648),g=n(718),y=n(749),E=n(168),v=n(681),j=n(676),x=n(680),O=n(679),k=n(763),_=n(682),S=n(719),C=n(720),T=n(721),w=n(703),z=n(722),A=n(694),R=n(661),W=n(620),q=n(755),B=n(734),N=Object(u.c)(m.a)(R.a,W.a),P=Object(u.c)(f.a)(R.a,W.a),U=Object(u.c)(h.a)(R.a,W.a),I=Object(u.c)(p.a)(R.a,W.a),F=Object(u.c)(b.a)(R.a,W.a),J=Object(A.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},link:{cursor:"pointer"},fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}})),L=[{id:"no",label:"#",sorting:!0},{id:"name",label:"\uc774\ub984",sorting:!0},{id:"id",label:"\uc544\uc774\ub514",sorting:!0},{id:"index",label:"\uc120\ud0dd \uc778\ub371\uc2a4",sorting:!0},{id:"shard",label:"\uc0e4\ub4dc",sorting:!0},{id:"docCount",label:"\ubb38\uc11c \uc218",sorting:!0},{id:"size",label:"\uc6a9\ub7c9",sorting:!0},{id:"autoRun",label:"\uc790\ub3d9\uc2dc\uc791",sorting:!0}];t.default=Object(i.b)((function(e){return Object(a.a)(Object(a.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers),e.indexTemplateReducers)}))((function(e){var t=e.dispatch,n=e.authUser,i=e.indexSuffixA,u=e.indexSuffixB,s=e.collectionList,m=e.catIndexTemplateList,f=Object(o.f)(),h=J(),p=Object(c.useState)(!1),b=Object(r.a)(p,2),A=b[0],R=b[1],W=Object(c.useState)(""),Z=Object(r.a)(W,2),D=Z[0],G=Z[1],M=Object(c.useState)(""),H=Object(r.a)(M,2),K=H[0],Q=H[1],V=Object(c.useState)(""),X=Object(r.a)(V,2),Y=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=Object(c.useState)(!1),ce=Object(r.a)(re,2),le=ce[0],ie=ce[1],oe=Object(c.useState)(null),ue=Object(r.a)(oe,2),se=ue[0],de=ue[1],me=Object(c.useState)(!1),fe=Object(r.a)(me,2),he=fe[0],pe=fe[1],be=Object(c.useState)(!0),ge=Object(r.a)(be,2),ye=ge[0],Ee=ge[1],ve=Object(c.useState)(""),je=Object(r.a)(ve,2),xe=je[0],Oe=je[1],ke=Object(c.useState)("asc"),_e=Object(r.a)(ke,2),Se=_e[0],Ce=_e[1];function Te(){Ee(!0),pe(!1),de(null),ae(!1),ie(!1),$(""),G(""),Q(""),R(!A)}function we(e){f.push("./indices-collections/".concat(e))}function ze(e){if(void 0===e||null===e||""===e)return!1;f.push("./indices/".concat(e))}function Ae(e){var t=e+"";if(t.length<=3)return t;for(var n=Math.ceil(t.length/3),a=[],r=0;r<n;r++)a.unshift(t.slice(-3*(r+1),t.length-3*r));return a.join(",")}Object(c.useEffect)((function(){t(Object(q.j)()),t(Object(B.d)()),t(Object(q.l)()),t(Object(q.h)())}),[]);var Re=s.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e,t){return Object(a.a)(Object(a.a)({},e),{},{no:t})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:"\uceec\ub809\uc158"}),l.a.createElement("br",null),l.a.createElement(P,{variant:"h3",gutterBottom:!0,display:"inline"},"\uceec\ub809\uc158"),l.a.createElement(N,{my:6}),l.a.createElement(U,{align:"right"},n.role.index?l.a.createElement(g.a,{className:h.link,onClick:Te,color:"primary"},"\uceec\ub809\uc158 \uc0dd\uc131"):l.a.createElement(l.a.Fragment,null)),l.a.createElement("br",null),l.a.createElement(y.a,{component:E.a},l.a.createElement(v.a,{className:h.table,"aria-label":"simple table"},l.a.createElement(j.a,null,l.a.createElement(x.a,null,L.map((function(e){return l.a.createElement(O.a,{align:"center",key:e.id},e.sorting?l.a.createElement(k.a,{active:xe===e.id,direction:xe===e.id?Se:"asc",onClick:function(t){Oe(e.id);var n=xe===e.id&&"asc"===Se;Ce(n?"desc":"asc")}},e.label):e.label)})))),l.a.createElement(_.a,null,Re.sort((function(e,t){return xe&&Se?"asc"===Se?e[xe]>t[xe]?1:-1:e[xe]>t[xe]?-1:1:0})).map((function(e,t){var n=e.id,a=e.name,r=e.baseId,c=e.indexA||{},i=e.indexB||{},o=c.aliases&&Object.keys(c.aliases).find((function(e){return e===r})),u=void 0!==o&&null!==o,s=i.aliases&&Object.keys(i.aliases).find((function(e){return e===r})),d=void 0!==s&&null!==s;return l.a.createElement(x.a,{key:e.id},l.a.createElement(O.a,{align:"center"},e.no+1),l.a.createElement(O.a,{align:"center"},l.a.createElement(g.a,{className:h.link,onClick:function(){return we(n)}},a)),l.a.createElement(O.a,{align:"center"},l.a.createElement(g.a,{className:h.link,onClick:function(){return we(n)}},r)),l.a.createElement(O.a,{align:"center"},l.a.createElement(g.a,{style:{display:u?"block":"none"},onClick:function(){return ze(c.uuid)},className:h.link},c.index),l.a.createElement(g.a,{style:{display:d?"block":"none"},onClick:function(){return ze(i.uuid)},className:h.link},i.index),l.a.createElement(U,{style:{display:!1===u&&!1===d?"block":"none"}}," - ")),l.a.createElement(O.a,{align:"center"},l.a.createElement(U,{style:{display:u?"block":"none"}},"P[",c.pri||"-","] R[",c.rep||"-","]"),l.a.createElement(U,{style:{display:d?"block":"none"}},"P[",i.pri||"-","] R[",i.rep||"-","]"),l.a.createElement(U,{style:{display:!1===u&&!1===d?"block":"none"}}," - ")),l.a.createElement(O.a,{align:"center"},l.a.createElement(U,{style:{display:u?"block":"none"}},Ae(c.docsCount||"-")),l.a.createElement(U,{style:{display:d?"block":"none"}},Ae(i.docsCount||"-")),l.a.createElement(U,{style:{display:!1===u&&!1===d?"block":"none"}}," - ")),l.a.createElement(O.a,{align:"center"},l.a.createElement(U,{style:{display:u?"block":"none"}},c.storeSize||"-"),l.a.createElement(U,{style:{display:d?"block":"none"}},i.storeSize||"-"),l.a.createElement(U,{style:{display:!1===u&&!1===d?"block":"none"}}," - ")),l.a.createElement(O.a,{align:"center"},l.a.createElement(U,null,e.scheduled?"\ud65c\uc131\ud654 (".concat(e.cron,")"):"\ube44\ud65c\uc131\ud654")))}))))),l.a.createElement(S.a,{open:A,fullWidth:!0,onClose:Te},l.a.createElement(C.a,null,"\uceec\ub809\uc158 \ucd94\uac00"),l.a.createElement(T.a,null,l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4,mt:2},"\uceec\ub809\uc158 \uc774\ub984"),l.a.createElement(F,{item:!0,xs:8},l.a.createElement(w.a,{fullWidth:!0,autoFocus:!0,value:D,onChange:function(e){ae(!1),G(e.target.value),0!==e.target.value.length&&0!==K.length&&!1===le?Ee(!1):Ee(!0)},placeholder:"\uc0c1\ud488\uceec\ub809\uc158",error:ne}))),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4,mt:2},"\uceec\ub809\uc158 \uc544\uc774\ub514"),l.a.createElement(F,{item:!0,xs:8},l.a.createElement(w.a,{fullWidth:!0,value:K,onChange:function(e){ie(!1),Q(e.target.value);var t=!1;if((e.target.value.length>1&&!/^[a-z]+[a-z0-9-_]/g.test(e.target.value)||1===e.target.value.length&&/[0-9]/g.test(e.target.value)||e.target.value.startsWith(".")||/[A-Z]/g.test(e.target.value)||/[\u3131-\u314e\uac00-\ud7a3]/g.test(e.target.value))&&(ie(!0),t=!0),""!==e.target.value){var n=[];m.forEach((function(t){var r=t.index_patterns;(r=r.substring(1,r.length-1).split(", ")).forEach((function(c){var l=new RegExp(c.replace(/\*/gi,"\\S*"),"gi");if(null!==e.target.value.match(l)||e.target.value+i===c||e.target.value+u===c)return n.push(Object(a.a)(Object(a.a)({},t),{},{index_patterns:r})),!1}))})),n.find((function(t){return t.name===e.target.value+i}))||n.push({name:e.target.value+i,index_patterns:[e.target.value+i]}),n.find((function(t){return t.name===e.target.value+u}))||n.push({name:e.target.value+i,index_patterns:[e.target.value+u]}),$(e.target.value),0!==D.trim().length&&!1===t?Ee(!1):Ee(!0)}else Ee(!0),$("")},placeholder:"product-collection",error:le}))),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4},"\uc778\ub371\uc2a4 \ud15c\ud50c\ub9bf"),l.a.createElement(F,{item:!0,xs:8},Y||"")),l.a.createElement(F,{container:!0,my:3},l.a.createElement(F,{item:!0,xs:4},"\uc778\ub371\uc2a4 \ud328\ud134"),l.a.createElement(F,{item:!0,xs:8},""!==K?K+i+", ":"",""!==K?K+u:"")),l.a.createElement(F,{container:!0,my:3,style:{display:se?"none":"block",color:"red",textAlign:"center"}},l.a.createElement(F,{item:!0,xs:12},se))),l.a.createElement(z.a,null,l.a.createElement(I,{onClick:function(){return""===D?(ae(!0),!1):K.length>1&&!/^[a-z]+[a-z0-9-_]/g.test(K)||1===K.length&&/[0-9]/g.test(K)||K.startsWith(".")||/[A-Z]/g.test(K)||/[\u3131-\u314e\uac00-\ud7a3]/g.test(K)?(ie(!0),!1):(pe(!0),void t(Object(q.a)({name:D,baseId:K,refresh_interval:1,replicas:1})).then((function(e){Te(),setTimeout((function(){t(Object(q.l)()),setTimeout((function(){t(Object(q.l)())}),500)}),500),pe(!1)})).catch((function(e){ie(!0),de("\ucd94\uac00 \uc2e4\ud328."),console.log("error",e),pe(!1)})))},disabled:he||ye,variant:"outlined",color:"primary"},"\ucd94\uac00"),l.a.createElement(I,{onClick:Te,variant:"outlined",color:"default"},"\ucde8\uc18c"))))}))},734:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var a=n(76),r=n(4),c=new a.a,l=function(){return function(e){return c.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:r.J,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},i=function(e){var t=e.template,n=e.index_patterns,a=e.settings,r=e.mappings;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:n,settings:a,mappings:r}})}},o=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},u=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(n){return e({type:r.I,payload:n.data[t]})}))}}},755:function(e,t,n){"use strict";n.d(t,"l",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"n",(function(){return m})),n.d(t,"m",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return p})),n.d(t,"k",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return y}));var a=n(4),r=new(n(76).a),c=function(){return function(e){return r.call({uri:"/collections"}).then((function(t){console.log(t.data),e({type:a.o,payload:t.data})}))}},l=function(e){return function(t){return r.call({uri:"/collections",method:"POST",data:e})}},i=function(){return function(e){return r.call({uri:"/collections",params:{action:"indexSuffix"}}).then((function(t){return e({type:a.m,payload:t.data})}))}},o=function(e){return function(t){return r.call({uri:"/collections/".concat(e)}).then((function(e){return t({type:a.k,payload:e.data})}))}},u=function(e){return function(t){return r.call({uri:"/collections/".concat(e),method:"delete"})}},s=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e),method:"put",params:{action:"source"},data:t}).then((function(e){return e.data}))}},d=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e),method:"put",params:{action:"schedule"},data:t}).then((function(e){return e.data}))}},m=function(e){var t=e.indexA,n=e.indexB,c=e.from,l=e.size,i=e.type;return function(e){return r.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",params:{pretty:!0,filter_path:"hits"},data:{query:{bool:{should:[{match:{index:t}},{match:{index:n}},{match:{"index.keyword":t}},{match:{"index.keyword":n}},{match:{"jobType.keyword":i}},{match:{jobType:i}}],minimum_should_match:2}},sort:[{startTime:{order:"desc"},_score:{order:"desc"}}],from:c,size:l}}).then((function(t){return e({type:a.l,payload:t.data})}))}},f=function(e){var t=e.indexA,n=e.indexB,c=e.from,l=e.size;return function(e){return r.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",params:{pretty:!0,filter_path:"hits"},data:{query:{bool:{should:[{term:{index:{value:t}}},{term:{index:{value:n}}},{term:{"index.keyword":{value:t}}},{term:{"index.keyword":{value:n}}}],minimum_should_match:1}},sort:[{startTime:{order:"desc"},_score:{order:"desc"}}],from:c,size:l}}).then((function(t){return e({type:a.l,payload:t.data})}))}},h=function(e){var t=e.indexA,n=e.indexB,a=e.time;return function(e){return r.call({uri:"/elasticsearch/.dsearch_index_history/_delete_by_query",method:"post",data:{query:{bool:{should:[{match:{index:{query:t,boost:1}}},{match:{index:{query:n,boost:1}}}],minimum_should_match:1,filter:{range:{startTime:{lte:a}}}}}}}).then((function(e){return e.data}))}},p=function(){return function(e){return r.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:a.f,payload:t.data})}))}},b=function(e){return function(t){return r.call({uri:"/collections/".concat(e,"/job")}).then((function(e){return e.data?t({type:a.n,payload:e.data}):t({type:a.n,payload:{}}),e.data}))}},g=function(e,t){return function(n){return r.call({uri:"/collections/".concat(e,"/action"),method:"PUT",params:{action:t}}).then((function(e){return e.data}))}},y=function(e){return function(t){return r.call({uri:"/elasticsearch/_aliases",method:"POST",data:{actions:e}}).then((function(e){return e.data}))}}}}]);
//# sourceMappingURL=54.8372f308.chunk.js.map