(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[66],{1028:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(61),r=a(0),c=a.n(r),i=a(39),m=a(14),u=a(134),o=a.n(u),s=a(618),d=a(713),E=a(665),f=a(99),h=a(707),g=a(622),b=a(378),p=a(583),v=a(757),O=a(684),j=a(683),y=a(581),x=a(582),C=a(626),k=a(785),S=a(1029),U=a(1030),w=a(1031),z=a(1032),D=a(337),W=a(588),q=a(655),B=a(656),R=a(653),F=a(652),I=a(162),N=a(219),T=a(215),J=a(712),L=a(750),P=a.n(L),V=(a(740),a(751),Object(m.c)(s.a)(W.a,q.a,B.a,R.a,F.a)),H=Object(m.c)(d.a)(W.a,q.a,B.a,R.a,F.a),M=Object(m.c)(E.a)(W.a,q.a,B.a,R.a,F.a),$=Object(m.c)(f.a)(W.a,q.a,B.a,R.a,F.a),A=Object(m.c)(h.a)(W.a,q.a,B.a,R.a,F.a),G=Object(m.c)(g.a)(W.a,q.a,B.a,R.a,F.a),K=Object(m.c)(b.a)(W.a,q.a,B.a,R.a,F.a),Q=(Object(m.c)(p.a)(W.a,q.a,B.a,R.a,F.a),Object(m.c)(v.a)(W.a,q.a,B.a,R.a,F.a),Object(m.c)(O.a)(W.a,q.a,B.a,R.a,F.a)),X=Object(m.c)(j.a)(W.a,q.a,B.a,R.a,F.a),Y=Object(m.c)(y.a)(W.a,q.a,B.a,R.a,F.a),Z=Object(m.c)(x.a)(W.a,q.a,B.a,R.a,F.a),_=Object(D.a)((function(e){return{warm:{backgroundColor:I.a[500]},textarea:{width:"100%",minHeight:"200px"}}})),ee={query:JSON.stringify({query:{match:{message:{query:"$keyword"}}},aggr:{}},null,4)};function te(e){var t=e.template,a=e.authUser,n=e.templateIndex,i=e.lastTemplateIndex,m=e.onDelete,u=e.onSave,o=e.onUp,s=e.onDown,d=e.disabledSaveButton,E=e.disabledDeleteButton,f=e.disabledOrderButton,h=_(),g=Object(r.useState)(t.name||""),b=Object(l.a)(g,2),p=b[0],v=b[1],O=Object(r.useState)(t.indices||""),j=Object(l.a)(O,2),y=j[0],x=j[1],k=Object(r.useState)(t.query||""),D=Object(l.a)(k,2),W=D[0],q=D[1],B=Object(r.useState)(t.title||""),R=Object(l.a)(B,2),F=R[0],I=R[1],N=Object(r.useState)(t.clickUrl||""),T=Object(l.a)(N,2),J=T[0],L=T[1],H=Object(r.useState)(t.thumbnails||""),te=Object(l.a)(H,2),ae=te[0],ne=te[1],le=Object(r.useState)(t.fields&&0!==t.fields.length?t.fields:[{}]),re=Object(l.a)(le,2),ce=re[0],ie=re[1],me=Object(r.useState)(t.aggs&&0!==t.aggs.length?t.aggs:[{}]),ue=Object(l.a)(me,2),oe=ue[0],se=ue[1],de=Object(r.useState)(!1),Ee=Object(l.a)(de,2),fe=Ee[0],he=Ee[1],ge=Object(r.useRef)(null);function be(e,t,a){var n=ce.slice();n[t][a]=e.target.value,ie(n)}function pe(e,t){"fields"===e?ie([].concat(ce.slice(0,t+1),{label:"",value:""},ce.slice(t+1))):"aggs"===e&&se([].concat(oe.slice(0,t+1),{label:"",value:""},oe.slice(t+1)))}function ve(e,t){if("fields"===e){var a=[].concat(ce.slice(0,t),ce.slice(t+1));0===a.length&&a.push({label:"",value:""}),ie(a)}else if("aggs"===e){var n=[].concat(oe.slice(0,t),oe.slice(t+1));0===n.length&&n.push({label:"",value:""}),se(n)}}function Oe(e,t,a){var n=oe.slice();n[t][a]=e.target.value,se(n)}function je(){u({name:p,indices:y,query:W,title:F,clickUrl:J,thumbnails:ae,id:t.id,order:t.order,fields:ce.filter((function(e){return e.label&&e.value})),aggs:oe.filter((function(e){return e.label&&e.value}))}),he(!1)}return Object(r.useEffect)((function(){ge.current.editor.setValue(t.query||"",0),ge.current.editor.clearSelection()}),[]),c.a.createElement(V,{style:{width:"100%"}},c.a.createElement(Q,null,c.a.createElement(X,null,c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center",mt:2},c.a.createElement($,{variant:"h6",display:"inline"}," \uc601\uc5ed\uc774\ub984"))),c.a.createElement(M,{item:!0,xs:6,md:8,lg:8},c.a.createElement(V,{align:"left"},c.a.createElement(A,{style:{width:"70%"},value:p,onChange:function(e){he(!0),v(e.target.value)}}),c.a.createElement(V,{display:"inline"},c.a.createElement(C.a,{lgUp:!0},c.a.createElement(G,{size:"small",onClick:o,disabled:f||0===n},c.a.createElement(S.a,null)),c.a.createElement(G,{size:"small",onClick:s,disabled:f||n===i},c.a.createElement(U.a,null))),c.a.createElement(C.a,{mdDown:!0},c.a.createElement(G,{onClick:o,disabled:f||0===n},c.a.createElement(S.a,null)),c.a.createElement(G,{onClick:s,disabled:f||n===i},c.a.createElement(U.a,null)))))),c.a.createElement(M,{item:!0,xs:3,md:2,lg:2},c.a.createElement(V,{align:"right"},a.role.search?c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{lgUp:!0},c.a.createElement(K,{size:"small",color:"primary",variant:fe?"contained":"outlined",onClick:je,disabled:d||E,ml:2},"\uc800\uc7a5"),c.a.createElement(K,{size:"small",className:h.warm,variant:"contained",onClick:m,disabled:E,ml:2},"\uc0ad\uc81c")),c.a.createElement(C.a,{mdDown:!0},c.a.createElement(K,{color:"primary",variant:fe?"contained":"outlined",onClick:je,disabled:d||E,mx:2},"\uc800\uc7a5"),c.a.createElement(K,{className:h.warm,variant:"contained",onClick:m,disabled:E},"\uc0ad\uc81c"))):c.a.createElement(c.a.Fragment,null)))),c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uc778\ub371\uc2a4 "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(V,{align:"left"},c.a.createElement(A,{fullWidth:!0,value:y,onChange:function(e){x(e.target.value),he(!0)}})))),c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uac80\uc0c9\ucffc\ub9ac "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(V,{align:"left"},c.a.createElement(P.a,{ref:ge,mode:"json",theme:"kuroir",fontSize:"15px",height:"600px",width:"100%",tabSize:2,placeholder:ee.query,setOptions:{useWorker:!1},onChange:function(e){q(ge.current.editor.getValue()),he(!0)}})))),c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uc81c\ubaa9 "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(V,{align:"left"},c.a.createElement(A,{fullWidth:!0,value:F,onChange:function(e){I(e.target.value),he(!0)}})))),c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \ud074\ub9adURL "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(V,{align:"left"},c.a.createElement(A,{fullWidth:!0,value:J,onChange:function(e){L(e.target.value),he(!0)}})))),c.a.createElement(M,{container:!0,my:5},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uc378\ub124\uc77c "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(V,{align:"left"},c.a.createElement(A,{fullWidth:!0,value:ae,onChange:function(e){ne(e.target.value),he(!0)}})))),c.a.createElement(M,{container:!0,my:10},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uc815\ubcf4 "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(M,{container:!0},c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \ub77c\ubca8\uba85 "))),c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uac12 "))),c.a.createElement(M,{item:!0,xs:2},c.a.createElement(V,{align:"center"}," "))),c.a.createElement(Y,null,ce.map((function(e,t){return c.a.createElement(Z,{key:t},c.a.createElement(M,{container:!0},c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{px:1},c.a.createElement(A,{fullWidth:!0,value:e.label||"",onChange:function(e){be(e,t,"label"),he(!0)}}))),c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{px:1},c.a.createElement(A,{fullWidth:!0,value:e.value||"",onChange:function(e){be(e,t,"value"),he(!0)}}))),c.a.createElement(M,{item:!0,xs:2},c.a.createElement(C.a,{lgUp:!0},c.a.createElement(G,{size:"small",onClick:function(){return pe("fields",t)}},c.a.createElement(w.a,null)),c.a.createElement(G,{size:"small",onClick:function(){return ve("fields",t)}},c.a.createElement(z.a,null))),c.a.createElement(C.a,{mdDown:!0},c.a.createElement(G,{onClick:function(){return pe("fields",t)}},c.a.createElement(w.a,null)),c.a.createElement(G,{onClick:function(){return ve("fields",t)}},c.a.createElement(z.a,null))))))}))))),c.a.createElement(M,{container:!0,my:10},c.a.createElement(M,{item:!0,xs:3,md:2},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uc5b4\uadf8\ub9ac\uac8c\uc774\uc158 "))),c.a.createElement(M,{item:!0,xs:9,md:10},c.a.createElement(M,{container:!0},c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \ub77c\ubca8\uba85 "))),c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{align:"center"},c.a.createElement($,{variant:"h6",display:"inline"}," \uac12 "))),c.a.createElement(M,{item:!0,xs:2},c.a.createElement(V,{align:"center"}," "))),c.a.createElement(Y,null,oe.map((function(e,t){return c.a.createElement(Z,{key:t},c.a.createElement(M,{container:!0},c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{px:1},c.a.createElement(A,{fullWidth:!0,value:e.label||"",onChange:function(e){Oe(e,t,"label"),he(!0)}}))),c.a.createElement(M,{item:!0,xs:5},c.a.createElement(V,{px:1},c.a.createElement(A,{fullWidth:!0,value:e.value||"",onChange:function(e){Oe(e,t,"value"),he(!0)}}))),c.a.createElement(M,{item:!0,xs:2},c.a.createElement(V,{display:"inline"},c.a.createElement(C.a,{lgUp:!0},c.a.createElement(G,{size:"small",onClick:function(){return pe("aggs",t)}},c.a.createElement(w.a,null)),c.a.createElement(G,{size:"small",onClick:function(){return ve("aggs",t)}},c.a.createElement(z.a,null))),c.a.createElement(C.a,{mdDown:!0},c.a.createElement(G,{onClick:function(){return pe("aggs",t)}},c.a.createElement(w.a,null)),c.a.createElement(G,{onClick:function(){return ve("aggs",t)}},c.a.createElement(z.a,null)))))))}))))))))}var ae=!0;function ne(e){var t=e.dispatch,a=e.acUrl,n=Object(r.useState)(a),i=Object(l.a)(n,2),m=i[0],u=i[1],o=Object(r.useState)(!1),s=Object(l.a)(o,2),d=s[0],E=s[1];return ae&&a.length>0&&(u(a),ae=!1),c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{display:"flex",mt:3},c.a.createElement(A,{value:m,style:{width:"90%",marginRight:"10px"},placeholder:"http://auto-complete.danawa.com/q=",onChange:function(e){u(e.target.value)}}),c.a.createElement(K,{style:{width:"10%",marginLeft:"10px"},variant:"outlined",color:"primary",onClick:function(){t(Object(N.d)({url:m})).then((function(){E(!0),setTimeout((function(){E(!1)}),3e3)}))}},"\ub4f1\ub85d")),c.a.createElement(H,{my:6}),d?c.a.createElement(k.a,{severity:"success"}," \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4 "):c.a.createElement(c.a.Fragment,null))}t.default=Object(i.b)((function(e){return Object(n.a)(Object(n.a)({authUser:e.dsearchReducers.authUser},e.referenceSearchReducers),{},{acUrl:e.dsearchPluginReducers.autoCompleteUrl})}))((function(e){var t=e.dispatch,a=e.authUser,n=e.acUrl,i=Object(r.useState)(!1),m=Object(l.a)(i,2),u=m[0],s=m[1],d=Object(r.useState)(!1),E=Object(l.a)(d,2),f=E[0],h=E[1],g=Object(r.useState)(!1),b=Object(l.a)(g,2),p=b[0],v=b[1],O=Object(r.useState)(!1),j=Object(l.a)(O,2),y=j[0],x=j[1],C=Object(r.useState)([]),k=Object(l.a)(C,2),S=k[0],U=k[1];return Object(r.useEffect)((function(){t(Object(N.a)()),t(Object(T.g)()).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"\ub808\ud37c\ub7f0\uc2a4UI"}),c.a.createElement($,{variant:"h3",gutterBottom:!0,display:"inline"},"\ub808\ud37c\ub7f0\uc2a4UI"),c.a.createElement(H,{my:6}),c.a.createElement($,{variant:"h5",gutterBottom:!0,display:"inline"},"\uc790\ub3d9\uc644\uc131 URL"),c.a.createElement(ne,{dispatch:t,acUrl:n}),c.a.createElement(Y,null,S.sort((function(e,t){return Number(e.order)-Number(t.order)})).map((function(e,n){return c.a.createElement(Z,{my:5,p:0,key:e.order},c.a.createElement(te,{authUser:a,template:e,templateIndex:n,disabledSaveButton:p,disabledDeleteButton:f,disabledOrderButton:y,lastTemplateIndex:S.length-1,onUp:function(){return function(e){if(0!==e){var a=S.slice(),n=a[e-1],l=a[e];x(!0),t(Object(T.a)("orders",{orders:[{id:n.id,order:l.order},{id:l.id,order:n.order}]})).then((function(){return J.a.sleep(1e3)})).then((function(){return t(Object(T.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return x(!1)}))}}(n)},onDown:function(){return function(e){if(!(e>=S.length-1)){var a=S.slice(),n=a[e],l=a[e+1];x(!0),t(Object(T.a)("orders",{orders:[{id:n.id,order:l.order},{id:l.id,order:n.order}]})).then((function(){return J.a.sleep(1e3)})).then((function(){return t(Object(T.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return x(!1)}))}}(n)},onDelete:function(){return a=e.id,h(!0),void t(Object(T.d)(a)).then((function(){return J.a.sleep(1e3)})).then((function(){return t(Object(T.g)())})).then((function(e){return U(e.payload)})).catch((function(e){return console.error(e)})).finally((function(){return h(!1)}));var a},onSave:function(e){return function(e,a,n){v(!0),t(Object(T.h)(e,a)).then((function(){return J.a.sleep(1e3)})).finally((function(){return v(!1)}))}(e.id,e)}}))}))),c.a.createElement(M,{container:!0},c.a.createElement(M,{item:!0,xs:12},c.a.createElement(V,{align:"center",mt:5},a.role.search?c.a.createElement(K,{variant:"contained",color:"primary",onClick:function(){s(!0);var e=0;S.forEach((function(t){return e=Math.max(t.order,e)})),t(Object(T.c)({order:e+1})).then((function(){return J.a.sleep(1e3)})).then((function(){return t(Object(T.g)()).then((function(e){return U(e.payload)}))})).catch((function(e){return console.error(e)})).finally((function(){return s(!1)}))},disabled:u},"\uc601\uc5ed \ucd94\uac00"):c.a.createElement(c.a.Fragment,null)))))}))},712:function(e,t,a){"use strict";var n={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=n}}]);
//# sourceMappingURL=66.39cbc32c.chunk.js.map