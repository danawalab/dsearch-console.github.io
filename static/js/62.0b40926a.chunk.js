(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[62],{1469:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(59),c=n(0),i=n.n(c),l=n(87),o=n(38),u=n(11),s=n(131),m=n.n(s),d=n(714),p=n(598),f=n(170),h=n(719),E=n(749),b=n(168),g=n(683),y=n(676),v=n(682),j=n(681),O=n(763),k=n(684),w=n(607),x=n(694),_=n(661),C=n(620),T=n(711),U=Object(x.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"}}})),F=Object(u.c)(d.a)(_.a),J=Object(u.c)(p.a)(_.a,C.a),G=Object(u.c)(f.a)(_.a,C.a),P=[{id:"no",label:"#",sorting:!0},{id:"name",label:"\uc774\ub984",sorting:!0},{id:"id",label:"\uc544\uc774\ub514",sorting:!0},{id:"edit",label:"",sorting:!1}];t.default=Object(o.b)((function(e){return Object(a.a)({authUser:e.dsearchReducers.authUser},e.indexTemplateReducers)}))((function(e){var t=e.dispatch,n=e.authUser,a=e.templates,o=Object(l.f)(),u=U(),s=Object(c.useState)(""),d=Object(r.a)(s,2),p=d[0],f=d[1],x=Object(c.useState)("asc"),_=Object(r.a)(x,2),C=_[0],R=_[1];Object(c.useEffect)((function(){t(Object(T.f)())}),[]);var S=a.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e,t){return{name:e.name,pattern:e.index_patterns,no:t}}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"\ud15c\ud50c\ub9bf"}),i.a.createElement("br",null),i.a.createElement(G,{variant:"h3",gutterBottom:!0,display:"inline"},"\ud15c\ud50c\ub9bf"),i.a.createElement(F,{my:6}),i.a.createElement(J,{align:"right"},n.role.index?i.a.createElement(h.a,{onClick:function(){return o.push("./indices-templates/new")},style:{cursor:"pointer"},color:"primary"},"\ud15c\ud50c\ub9bf \uc0dd\uc131"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("br",null),i.a.createElement(E.a,{component:b.a},i.a.createElement(g.a,{className:u.table,"aria-label":"simple table"},i.a.createElement(y.a,null,i.a.createElement(v.a,null,P.map((function(e){return i.a.createElement(j.a,{align:"center",key:e.id},e.sorting?i.a.createElement(O.a,{active:p===e.id,direction:p===e.id?C:"asc",onClick:function(t){f(e.id);var n=p===e.id&&"asc"===C;R(n?"desc":"asc")}},e.label):e.label)})))),i.a.createElement(k.a,null,S.sort((function(e,t){return p&&C?"asc"===C?e[p]>t[p]?1:-1:e[p]>t[p]?-1:1:0})).map((function(e,t){return i.a.createElement(v.a,{key:e.name},i.a.createElement(j.a,{component:"th",scope:"row",align:"center"},e.no+1),i.a.createElement(j.a,{align:"center"},i.a.createElement(h.a,{onClick:function(){return o.push("./indices-templates/".concat(e.name))},style:{cursor:"pointer"}},e.name)),i.a.createElement(j.a,{align:"center"},e.pattern),i.a.createElement(j.a,{align:"center"},n.role.index?i.a.createElement(w.a,{variant:"outlined",color:"primary",onClick:function(){return o.push("./indices-templates/".concat(e.name,"/edit"))},style:{cursor:"pointer"}},"\uc218\uc815"):i.a.createElement(i.a.Fragment,null)))}))))))}))},711:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return m}));var a=n(76),r=n(3),c=new a.a,i=function(){return function(e){return c.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:r.K,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},l=function(e){var t=e.template,n=e.index_patterns,a=e.settings,r=e.mappings;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:n,settings:a,mappings:r}})}},o=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},u=function(e){var t=e.template;return function(e){return c.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(n){return e({type:r.J,payload:n.data[t]})}))}},s=function(){return function(e){return c.call({uri:"/templates/comments",method:"GET"}).then((function(t){if(void 0==t.data||void 0==t.data.hits||0===t.data.hits.hits.length)e({type:r.p,payload:[]});else{var n=t.data.hits.hits.map((function(e){return e}));e({type:r.p,payload:n})}}))}},m=function(e){var t=e.id,n=e.name,a=e.updatedComment;return function(e){return c.call({uri:"/templates/comments",method:"PUT",data:{name:n,id:t,data:a}})}}}}]);
//# sourceMappingURL=62.0b40926a.chunk.js.map