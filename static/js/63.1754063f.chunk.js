(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[63],{1387:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(58),r=a(0),c=a.n(r),i=a(38),m=a(11),u=a(130),o=a.n(u),s=a(599),d=a(714),E=a(649),f=a(169),h=a(696),g=a(604),b=a(608),p=a(675),v=a(676),O=a(563),j=a(564),y=a(609),x=a(659),C=a(1388),k=a(1389),S=a(1390),U=a(1391),w=a(317),z=a(662),D=a(622),W=a(623),q=a(620),B=a(619),R=a(156),F=a(205),I=a(202),N=a(716),T=a(761),J=a.n(T),L=(a(732),a(762),Object(m.c)(s.a)(z.a,D.a,W.a,q.a,B.a)),P=Object(m.c)(d.a)(z.a,D.a,W.a,q.a,B.a),V=Object(m.c)(E.a)(z.a,D.a,W.a,q.a,B.a),H=Object(m.c)(f.a)(z.a,D.a,W.a,q.a,B.a),M=Object(m.c)(h.a)(z.a,D.a,W.a,q.a,B.a),$=Object(m.c)(g.a)(z.a,D.a,W.a,q.a,B.a),A=Object(m.c)(b.a)(z.a,D.a,W.a,q.a,B.a),G=Object(m.c)(p.a)(z.a,D.a,W.a,q.a,B.a),K=Object(m.c)(v.a)(z.a,D.a,W.a,q.a,B.a),Q=Object(m.c)(O.a)(z.a,D.a,W.a,q.a,B.a),X=Object(m.c)(j.a)(z.a,D.a,W.a,q.a,B.a),Y=Object(w.a)((function(e){return{warm:{backgroundColor:R.a[500]},textarea:{width:"100%",minHeight:"200px"}}})),Z={query:JSON.stringify({query:{match:{message:{query:"$keyword"}}},aggr:{}},null,4)};function _(e){var t=e.template,a=e.authUser,n=e.templateIndex,i=e.lastTemplateIndex,m=e.onDelete,u=e.onSave,o=e.onUp,s=e.onDown,d=e.disabledSaveButton,E=e.disabledDeleteButton,f=e.disabledOrderButton,h=Y(),g=Object(r.useState)(t.name||""),b=Object(l.a)(g,2),p=b[0],v=b[1],O=Object(r.useState)(t.indices||""),j=Object(l.a)(O,2),x=j[0],w=j[1],z=Object(r.useState)(t.query||""),D=Object(l.a)(z,2),W=D[0],q=D[1],B=Object(r.useState)(t.title||""),R=Object(l.a)(B,2),F=R[0],I=R[1],N=Object(r.useState)(t.clickUrl||""),T=Object(l.a)(N,2),P=T[0],_=T[1],ee=Object(r.useState)(t.thumbnails||""),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],le=Object(r.useState)(t.fields&&0!==t.fields.length?t.fields:[{}]),re=Object(l.a)(le,2),ce=re[0],ie=re[1],me=Object(r.useState)(t.aggs&&0!==t.aggs.length?t.aggs:[{}]),ue=Object(l.a)(me,2),oe=ue[0],se=ue[1],de=Object(r.useState)(!1),Ee=Object(l.a)(de,2),fe=Ee[0],he=Ee[1],ge=Object(r.useRef)(null);function be(e,t,a){var n=ce.slice();n[t][a]=e.target.value,ie(n)}function pe(e,t){"fields"===e?ie([].concat(ce.slice(0,t+1),{label:"",value:""},ce.slice(t+1))):"aggs"===e&&se([].concat(oe.slice(0,t+1),{label:"",value:""},oe.slice(t+1)))}function ve(e,t){if("fields"===e){var a=[].concat(ce.slice(0,t),ce.slice(t+1));0===a.length&&a.push({label:"",value:""}),ie(a)}else if("aggs"===e){var n=[].concat(oe.slice(0,t),oe.slice(t+1));0===n.length&&n.push({label:"",value:""}),se(n)}}function Oe(e,t,a){var n=oe.slice();n[t][a]=e.target.value,se(n)}function je(){u({name:p,indices:x,query:W,title:F,clickUrl:P,thumbnails:ae,id:t.id,order:t.order,fields:ce.filter((function(e){return e.label&&e.value})),aggs:oe.filter((function(e){return e.label&&e.value}))}),he(!1)}return Object(r.useEffect)((function(){ge.current.editor.setValue(t.query||"",0),ge.current.editor.clearSelection()}),[]),c.a.createElement(L,{style:{width:"100%"}},c.a.createElement(G,null,c.a.createElement(K,null,c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center",mt:2},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc601\uc5ed\uc774\ub984"))),c.a.createElement(V,{item:!0,xs:6,md:8,lg:8},c.a.createElement(L,{align:"left"},c.a.createElement(M,{style:{width:"70%"},value:p,onChange:function(e){he(!0),v(e.target.value)}}),c.a.createElement(L,{display:"inline"},c.a.createElement(y.a,{lgUp:!0},c.a.createElement($,{size:"small",onClick:o,disabled:f||0===n},c.a.createElement(C.a,null)),c.a.createElement($,{size:"small",onClick:s,disabled:f||n===i},c.a.createElement(k.a,null))),c.a.createElement(y.a,{mdDown:!0},c.a.createElement($,{onClick:o,disabled:f||0===n},c.a.createElement(C.a,null)),c.a.createElement($,{onClick:s,disabled:f||n===i},c.a.createElement(k.a,null)))))),c.a.createElement(V,{item:!0,xs:3,md:2,lg:2},c.a.createElement(L,{align:"right"},a.role.search?c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{lgUp:!0},c.a.createElement(A,{size:"small",color:"primary",variant:fe?"contained":"outlined",onClick:je,disabled:d||E,ml:2},"\uc800\uc7a5"),c.a.createElement(A,{size:"small",className:h.warm,variant:"contained",onClick:m,disabled:E,ml:2},"\uc0ad\uc81c")),c.a.createElement(y.a,{mdDown:!0},c.a.createElement(A,{color:"primary",variant:fe?"contained":"outlined",onClick:je,disabled:d||E,mx:2},"\uc800\uc7a5"),c.a.createElement(A,{className:h.warm,variant:"contained",onClick:m,disabled:E},"\uc0ad\uc81c"))):c.a.createElement(c.a.Fragment,null)))),c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc778\ub371\uc2a4 "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(L,{align:"left"},c.a.createElement(M,{fullWidth:!0,value:x,onChange:function(e){w(e.target.value),he(!0)}})))),c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uac80\uc0c9\ucffc\ub9ac "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(L,{align:"left"},c.a.createElement(J.a,{ref:ge,mode:"json",theme:"kuroir",fontSize:"15px",height:"600px",width:"100%",tabSize:2,placeholder:Z.query,setOptions:{useWorker:!1},onChange:function(e){q(ge.current.editor.getValue()),he(!0)}})))),c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc81c\ubaa9 "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(L,{align:"left"},c.a.createElement(M,{fullWidth:!0,value:F,onChange:function(e){I(e.target.value),he(!0)}})))),c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \ud074\ub9adURL "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(L,{align:"left"},c.a.createElement(M,{fullWidth:!0,value:P,onChange:function(e){_(e.target.value),he(!0)}})))),c.a.createElement(V,{container:!0,my:5},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc378\ub124\uc77c "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(L,{align:"left"},c.a.createElement(M,{fullWidth:!0,value:ae,onChange:function(e){ne(e.target.value),he(!0)}})))),c.a.createElement(V,{container:!0,my:10},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc815\ubcf4 "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \ub77c\ubca8\uba85 "))),c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uac12 "))),c.a.createElement(V,{item:!0,xs:2},c.a.createElement(L,{align:"center"}," "))),c.a.createElement(Q,null,ce.map((function(e,t){return c.a.createElement(X,{key:t},c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{px:1},c.a.createElement(M,{fullWidth:!0,value:e.label||"",onChange:function(e){be(e,t,"label"),he(!0)}}))),c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{px:1},c.a.createElement(M,{fullWidth:!0,value:e.value||"",onChange:function(e){be(e,t,"value"),he(!0)}}))),c.a.createElement(V,{item:!0,xs:2},c.a.createElement(y.a,{lgUp:!0},c.a.createElement($,{size:"small",onClick:function(){return pe("fields",t)}},c.a.createElement(S.a,null)),c.a.createElement($,{size:"small",onClick:function(){return ve("fields",t)}},c.a.createElement(U.a,null))),c.a.createElement(y.a,{mdDown:!0},c.a.createElement($,{onClick:function(){return pe("fields",t)}},c.a.createElement(S.a,null)),c.a.createElement($,{onClick:function(){return ve("fields",t)}},c.a.createElement(U.a,null))))))}))))),c.a.createElement(V,{container:!0,my:10},c.a.createElement(V,{item:!0,xs:3,md:2},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uc5b4\uadf8\ub9ac\uac8c\uc774\uc158 "))),c.a.createElement(V,{item:!0,xs:9,md:10},c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \ub77c\ubca8\uba85 "))),c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{align:"center"},c.a.createElement(H,{variant:"h6",display:"inline"}," \uac12 "))),c.a.createElement(V,{item:!0,xs:2},c.a.createElement(L,{align:"center"}," "))),c.a.createElement(Q,null,oe.map((function(e,t){return c.a.createElement(X,{key:t},c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{px:1},c.a.createElement(M,{fullWidth:!0,value:e.label||"",onChange:function(e){Oe(e,t,"label"),he(!0)}}))),c.a.createElement(V,{item:!0,xs:5},c.a.createElement(L,{px:1},c.a.createElement(M,{fullWidth:!0,value:e.value||"",onChange:function(e){Oe(e,t,"value"),he(!0)}}))),c.a.createElement(V,{item:!0,xs:2},c.a.createElement(L,{display:"inline"},c.a.createElement(y.a,{lgUp:!0},c.a.createElement($,{size:"small",onClick:function(){return pe("aggs",t)}},c.a.createElement(S.a,null)),c.a.createElement($,{size:"small",onClick:function(){return ve("aggs",t)}},c.a.createElement(U.a,null))),c.a.createElement(y.a,{mdDown:!0},c.a.createElement($,{onClick:function(){return pe("aggs",t)}},c.a.createElement(S.a,null)),c.a.createElement($,{onClick:function(){return ve("aggs",t)}},c.a.createElement(U.a,null)))))))}))))))))}var ee=!0;function te(e){var t=e.dispatch,a=e.acUrl,n=Object(r.useState)(a),i=Object(l.a)(n,2),m=i[0],u=i[1],o=Object(r.useState)(!1),s=Object(l.a)(o,2),d=s[0],E=s[1];return ee&&a.length>0&&(u(a),ee=!1),c.a.createElement(c.a.Fragment,null,c.a.createElement(L,{display:"flex",mt:3},c.a.createElement(M,{value:m,style:{width:"90%",marginRight:"10px"},placeholder:"http://auto-complete.danawa.com/q=",onChange:function(e){u(e.target.value)}}),c.a.createElement(A,{style:{width:"10%",marginLeft:"10px"},variant:"outlined",color:"primary",onClick:function(){t(Object(F.d)({url:m})).then((function(){E(!0),setTimeout((function(){E(!1)}),3e3)}))}},"\ub4f1\ub85d")),c.a.createElement(P,{my:6}),d?c.a.createElement(x.a,{severity:"success"}," \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4 "):c.a.createElement(c.a.Fragment,null))}t.default=Object(i.b)((function(e){return Object(n.a)(Object(n.a)({authUser:e.dsearchReducers.authUser},e.referenceSearchReducers),{},{acUrl:e.dsearchPluginReducers.autoCompleteUrl})}))((function(e){var t=e.dispatch,a=e.authUser,n=e.acUrl,i=Object(r.useState)(!1),m=Object(l.a)(i,2),u=m[0],s=m[1],d=Object(r.useState)(!1),E=Object(l.a)(d,2),f=E[0],h=E[1],g=Object(r.useState)(!1),b=Object(l.a)(g,2),p=b[0],v=b[1],O=Object(r.useState)(!1),j=Object(l.a)(O,2),y=j[0],x=j[1],C=Object(r.useState)([]),k=Object(l.a)(C,2),S=k[0],U=k[1];return Object(r.useEffect)((function(){t(Object(F.a)()),t(Object(I.g)()).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"\ub808\ud37c\ub7f0\uc2a4UI"}),c.a.createElement(H,{variant:"h3",gutterBottom:!0,display:"inline"},"\ub808\ud37c\ub7f0\uc2a4UI"),c.a.createElement(P,{my:6}),c.a.createElement(H,{variant:"h5",gutterBottom:!0,display:"inline"},"\uc790\ub3d9\uc644\uc131 URL"),c.a.createElement(te,{dispatch:t,acUrl:n}),c.a.createElement(Q,null,S.sort((function(e,t){return Number(e.order)-Number(t.order)})).map((function(e,n){return c.a.createElement(X,{my:5,p:0,key:e.order},c.a.createElement(_,{authUser:a,template:e,templateIndex:n,disabledSaveButton:p,disabledDeleteButton:f,disabledOrderButton:y,lastTemplateIndex:S.length-1,onUp:function(){return function(e){if(0!==e){var a=S.slice(),n=a[e-1],l=a[e];x(!0),t(Object(I.a)("orders",{orders:[{id:n.id,order:l.order},{id:l.id,order:n.order}]})).then((function(){return N.a.sleep(1e3)})).then((function(){return t(Object(I.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return x(!1)}))}}(n)},onDown:function(){return function(e){if(!(e>=S.length-1)){var a=S.slice(),n=a[e],l=a[e+1];x(!0),t(Object(I.a)("orders",{orders:[{id:n.id,order:l.order},{id:l.id,order:n.order}]})).then((function(){return N.a.sleep(1e3)})).then((function(){return t(Object(I.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return x(!1)}))}}(n)},onDelete:function(){return a=e.id,h(!0),void t(Object(I.d)(a)).then((function(){return N.a.sleep(1e3)})).then((function(){return t(Object(I.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return h(!1)}));var a},onSave:function(e){return function(e,a,n){v(!0),t(Object(I.h)(e,a)).then((function(){return N.a.sleep(1e3)})).finally((function(){return v(!1)}))}(e.id,e)}}))}))),c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:12},c.a.createElement(L,{align:"center",mt:5},a.role.search?c.a.createElement(A,{variant:"contained",color:"primary",onClick:function(){s(!0);var e=0;S.forEach((function(t){return e=Math.max(t.order,e)})),t(Object(I.c)({order:e+1})).then((function(){return N.a.sleep(1e3)})).then((function(){return t(Object(I.g)()).then((function(e){return U(e.payload)}))})).catch((function(e){return console.error(e)})).finally((function(){return s(!1)}))},disabled:u},"\uc601\uc5ed \ucd94\uac00"):c.a.createElement(c.a.Fragment,null)))))}))},716:function(e,t,a){"use strict";var n={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=n}}]);
//# sourceMappingURL=63.1754063f.chunk.js.map