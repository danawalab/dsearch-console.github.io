(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[74],{1004:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(882),r=a(61),c=a(0),o=a.n(c),i=a(14),u=a(99),m=a(618),s=a(684),d=a(378),E=a(665),h=a(683),p=a(690),b=a(691),f=a(689),y=a(692),j=a(723),O=a(707),g=a(883),v=a(623),x=a(668),S=a(580),k=a(218),C=a(724),T=a(725),I=a(726),W=a(727),w=a(688),z=a(588),D=a(654),N=a(39),A=a(746),M=a(980),F=a(868),R=a(772),V=a.n(R),L=a(758),P=a(376),_=a(792),U=a(585),B=a(586),J=a(771),G=a(773),X=a(785),Y=a(982),q=a.n(Y),H=a(981),Q=a.n(H),$=Object(i.c)(m.a)(z.a,D.a),K=Object(i.c)(d.a)(z.a,D.a),Z=Object(i.c)(E.a)(z.a,D.a),ee=(Object(w.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},typography:{padding:e.spacing(2)}}})),["\uc5f0\uc18d\uc2e4\ud589","\uc0c9\uc778\uc2e4\ud589","\uc804\ud30c\uc2e4\ud589","\uad50\uccb4\uc2e4\ud589"]),te=null;var ae=Object(N.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.collection,l=e.job,i=o.a.useState(!1),u=Object(r.a)(i,2),m=u[0],s=u[1],d=o.a.useRef(null),E=Object(c.useState)(!1),h=Object(r.a)(E,2),p=h[0],b=h[1],f=Object(c.useState)(!1),y=Object(r.a)(f,2),j=y[0],O=y[1],g=Object(c.useState)(!1),S=Object(r.a)(g,2),C=S[0],T=S[1],I=Object(c.useState)(""),W=Object(r.a)(I,2),w=W[0],z=W[1],D=!!l.status;Object(c.useEffect)((function(){t(Object(A.h)(n.id));if(null!=te)try{clearTimeout(te),te=null}catch(e){}return te=setTimeout((function(){return function a(){t(Object(A.j)(n.id)).then((function(t){if(b(!0),null!=te)try{clearTimeout(te),te=null}catch(e){}te=setTimeout(a,2e3)})).catch((function(t){if(b(!1),null!=te)try{clearTimeout(te),te=null}catch(e){}te=setTimeout(a,2e3)}))}()}),500),function(){try{clearTimeout(te)}catch(e){}}}),[]);var N=function(e){d.current&&d.current.contains(e.target)||s(!1)};function M(e){O(!0),t(Object(A.d)(n.id,e)).then((function(e){t(Object(A.h)(n.id)),setTimeout((function(){O(!1)}),4e3)})).catch((function(e){console.log(e),z(""+e),T(!0),t(Object(A.h)(n.id)),setTimeout((function(){O(!1)}),4e3)}))}return!1===p?o.a.createElement(Z,{container:!0,my:0,ml:4},o.a.createElement(Z,{item:!0,xs:9,mt:2,style:{alignSelf:"center"}},o.a.createElement($,null,"\uc5f0\uacb0 \uc911..."),o.a.createElement($,null,o.a.createElement(P.a,{m:2,color:"secondary"})))):j?o.a.createElement(Z,{container:!0,my:0,ml:4},o.a.createElement(Z,{item:!0,xs:3},o.a.createElement(Z,{container:!0,my:3},o.a.createElement(Z,{item:!0,xs:3,mt:2},o.a.createElement($,{style:{fontWeight:"bold"}},"\uc2a4\ucf00\uc974")),o.a.createElement(Z,{item:!0,xs:9})),o.a.createElement(Z,{container:!0,my:3},o.a.createElement(Z,{item:!0,xs:3,mt:5,style:{height:"37px"}},o.a.createElement("b",null,"\uc0c1\ud0dc")),o.a.createElement(Z,{item:!0,xs:9}))),o.a.createElement(Z,{item:!0,xs:9,mt:2,style:{alignSelf:"center"}},o.a.createElement($,null,o.a.createElement(P.a,{m:2,color:"secondary"})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{container:!0,my:3,ml:4},o.a.createElement(Z,{item:!0,xs:3,mt:2},o.a.createElement($,{style:{fontWeight:"bold"}},"\uc2a4\ucf00\uc974")),o.a.createElement(Z,{item:!0,xs:9},o.a.createElement(_.a,{onChange:function(e){O(!0),t(Object(A.e)(n.id,e.target.checked)).then((function(e){t(Object(A.h)(n.id)),setTimeout((function(){O(!1)}),2e3)})).catch((function(e){console.log(e),z(""+e),T(!0),t(Object(A.h)(n.id)),setTimeout((function(){O(!1)}),2e3)}))},checked:n.scheduled,disabled:!a.role.index}))),o.a.createElement(Z,{container:!0,my:3,ml:4},o.a.createElement(Z,{item:!0,xs:3,mt:2,style:{height:"40px"}},o.a.createElement("b",null,"\uc0c1\ud0dc")),o.a.createElement(Z,{item:!0,xs:9},o.a.createElement($,{style:{display:!1===D&&!1===n.scheduled?"block":"none"}},o.a.createElement(F.a,{variant:"contained",color:"primary",ref:d},o.a.createElement(K,{disabled:!0,style:{width:"100%",minWidth:"150px",maxWidth:"300px",color:"black"}},"\uc218\ub3d9 \uc2e4\ud589"),a.role.index?o.a.createElement(K,{color:"primary",size:"small",onClick:function(){s((function(e){return!e}))},disabled:!a.role.index},o.a.createElement(V.a,null)):o.a.createElement(o.a.Fragment,null)),o.a.createElement(x.a,{open:m,anchorEl:d.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return o.a.createElement(U.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),o.a.createElement(k.a,null,o.a.createElement(L.a,{onClickAway:N},o.a.createElement(B.a,{id:"split-button-menu"},ee.map((function(e,t){return o.a.createElement(v.a,{key:e,onClick:function(t){return function(e,t,a){"\uc5f0\uc18d\uc2e4\ud589"===t?M("all"):"\uc0c9\uc778\uc2e4\ud589"===t?M("indexing"):"\uc804\ud30c\uc2e4\ud589"===t?M("propagate"):"\uad50\uccb4\uc2e4\ud589"===t&&M("expose"),s(!1)}(0,e)}},e)}))))))}))),o.a.createElement($,{style:{display:!1===D&&!0===n.scheduled?"block":"none",width:"100%",minWidth:"150px",maxWidth:"400px",color:"black"}},o.a.createElement(X.a,{iconMapping:{success:o.a.createElement(Q.a,{fontSize:"inherit"})},severity:"success",style:{display:D?"none":"flex"}},"\uc2a4\ucf00\uc974 \ub300\uae30\uc911")),o.a.createElement($,{style:{display:!0===D&&!1===n.scheduled||!0===D&&!0===n.scheduled?"block":"none",width:"100%",minWidth:"150px",maxWidth:"400px",color:"black"}},o.a.createElement($,{style:{display:"FULL_INDEX"===l.currentStep||"DYNAMIC_INDEX"===l.currentStep?"block":"none"}},o.a.createElement(X.a,{iconMapping:{info:o.a.createElement(q.a,{fontSize:"inherit",style:{alignSelf:"center"}})},severity:"info",action:o.a.createElement(K,{color:"inherit",style:{border:"1px solid silver"},size:"small",onClick:function(){return M("stop_indexing")}}," \uc815\uc9c0 ")},o.a.createElement(J.a,null),o.a.createElement($,{mt:2},"\uc0c9\uc778\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),o.a.createElement($,{style:{display:"PROPAGATE"===l.currentStep?"block":"none"}},o.a.createElement(X.a,{iconMapping:{info:o.a.createElement(q.a,{fontSize:"inherit",style:{alignSelf:"center"}})},severity:"info",action:o.a.createElement(K,{color:"inherit",style:{border:"1px solid silver"},size:"small",onClick:function(){return M("stop_propagation")}}," \ucde8\uc18c ")},o.a.createElement(J.a,null),o.a.createElement($,{mt:2},"\uc804\ud30c\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),o.a.createElement($,{style:{display:"EXPOSE"===l.currentStep?"block":"none"}},o.a.createElement(X.a,{iconMapping:{info:o.a.createElement(q.a,{fontSize:"inherit"})},severity:"info"},o.a.createElement(J.a,null),"\uad50\uccb4\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))))),o.a.createElement(G.a,{anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,open:C,onClose:function(){T(!1)},severity:"error",message:"\uc694\uccad\uc774 \uc2e4\ud328\ub418\uc5c8\uc2b5\ub2c8\ub2e4. "+w,key:"errorSnackbar"}))})),ne=a(750),le=a.n(ne),re=(a(983),a(751),Object(i.c)(u.a)(z.a,D.a)),ce=Object(i.c)(m.a)(z.a,D.a),oe=Object(i.c)(s.a)(z.a,D.a),ie=Object(i.c)(d.a)(z.a,D.a),ue=Object(i.c)(E.a)(z.a,D.a),me=Object(w.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},typography:{padding:e.spacing(2)}}})),se="NO_SELECTED";t.default=Object(N.b)((function(e){return Object(n.a)(Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers),e.jdbcReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.collection,i=e.JdbcList,u=me(),m=Object(c.useState)(null),s=Object(r.a)(m,2),d=s[0],E=s[1],w=Object(c.useState)("VIEW"),z=Object(r.a)(w,2),D=z[0],N=z[1],F=o.a.useState(null),R=Object(r.a)(F,2),V=R[0],L=R[1],P=o.a.useState(null),_=Object(r.a)(P,2),U=_[0],B=_[1],J=o.a.useState(),G=Object(r.a)(J,2),X=G[0],Y=G[1],q=Object(c.useState)(""),H=Object(r.a)(q,2),Q=H[0],$=H[1],K=Object(c.useState)(""),Z=Object(r.a)(K,2),ee=Z[0],te=Z[1],ne=Object(c.useState)(""),de=Object(r.a)(ne,2),Ee=de[0],he=de[1],pe=Object(c.useState)(""),be=Object(r.a)(pe,2),fe=be[0],ye=be[1],je=Object(c.useState)(se),Oe=Object(r.a)(je,2),ge=Oe[0],ve=Oe[1],xe=Object(c.useState)(""),Se=Object(r.a)(xe,2),ke=Se[0],Ce=Se[1],Te=Object(c.useState)({}),Ie=Object(r.a)(Te,2),We=Ie[0],we=Ie[1],ze=Object(c.useRef)(null);function De(e){E(null===d?e.currentTarget:null)}Object(c.useEffect)((function(){we({}),void 0===n.sourceName||null===n.sourceName||""===n.sourceName?(N("FORCE_EDIT"),ze.current.editor.setValue('\n============================= ndjson / csv template\nscheme: http\nhost: localhost\nport: 9200\ntype: ndjson /csv\npath: /data/source/search-prod.ndjson   or   /data/source/search-prod.csv\nencoding: utf-8\nbulkSize: 10000\nreset: false\nthreadSize: 1\n\n============================= rsync template\nscheme: http\nhost: localhost\nport: 9200\ntype: procedure\nbulkSize: 1000\ndriverClassName: "Altibase.jdbc.driver.AltibaseDriver"\nfilterClass: "com.danawa.fastcatx.indexer.filter.DanawaProductFilter"\nurl: "jdbc:Altibase://localhost:20200/DANAWA_ALTI"\nuser: "root"\npassword: "qwerty123456"\nprocedureName: "procedureName1"\ndumpFormat: "konan"\ngroupSeq: 1\nbwlimit: "10240"\npath: "/data/product/VM"\nrsyncIp: "remote server IP"\nrsyncPath: "search_data_alti"\nencoding: CP949\nprocedureSkip: true\nrsyncSkip: true\nthreadSize: 1\n\n============================= DB template\nscheme: http\nhost: localhost\nport: 9200\nbulkSize: 10000\nfetchSize: 10000\ntype: jdbc\npipeLine: "pipeline"\nthreadSize: 1\ndataSQL : "SELECT * FROM myTable"\n')):($(n.sourceName),he((n.launcher||{}).host||""),ye((n.launcher||{}).port||""),ve(""===n.jdbcId?se:n.jdbcId),Ce(n.cron),te((n.launcher||{}).yaml||""),ze.current.editor.setValue((n.launcher||{}).yaml||""),ze.current.editor.clearSelection())}),[]),Object(c.useEffect)((function(){try{"EDIT"===D&&($(n.sourceName),he((n.launcher||{}).host||""),ye((n.launcher||{}).port||""),ve(""===n.jdbcId?se:n.jdbcId),Ce(n.cron),te((n.launcher||{}).yaml||""),ze.current.editor.setValue((n.launcher||{}).yaml||""),ze.current.editor.clearSelection())}catch(e){console.log("change ace editor")}}),[D]);var Ne,Ae=[{id:se,sourceAsMap:{name:"\uc120\ud0dd\uc548\ud568"}}].concat(Object(l.a)((i.hits||{}).hits||[]));return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(oe,null,o.a.createElement(h.a,null,o.a.createElement(ce,{style:{display:"VIEW"===D?"block":"none"}},o.a.createElement(ue,{container:!0},o.a.createElement(ue,{item:!0,xs:10},o.a.createElement(ae,null)),o.a.createElement(ue,{item:!0,xs:2,align:"right"},a.role.index?o.a.createElement(ie,{mx:1,variant:"outlined",onClick:function(){return N("EDIT")}},"\uc218\uc815"):o.a.createElement(o.a.Fragment,null))),o.a.createElement(ue,{container:!0},o.a.createElement(ue,{item:!0,xs:12},o.a.createElement(ce,null,o.a.createElement(p.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud30c\ub77c\ubbf8\ud130"),o.a.createElement(y.a,null,o.a.createElement(j.a,{style:{cursor:"pointer"},onClick:De},"YAML"))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud638\uc2a4\ud2b8"),o.a.createElement(y.a,null,(n.launcher||{}).host)),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud3ec\ud2b8"),o.a.createElement(y.a,null,0===(n.launcher||{}).port?"":(n.launcher||{}).port)),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"JDBC"),o.a.createElement(y.a,null,Ae.filter((function(e){return(""===n.jdbcId?se:n.jdbcId)===e.id})).map((function(e){var t=e.sourceAsMap;return o.a.createElement(o.a.Fragment,{key:t.name},t.name)})))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud06c\ub860\uc8fc\uae30"),o.a.createElement(y.a,null," ",n.cron," ")))))))),o.a.createElement(ce,{style:{display:"EDIT"===D||"FORCE_EDIT"===D?"block":"none"}},o.a.createElement(ue,{container:!0},o.a.createElement(ue,{item:!0,xs:8}),o.a.createElement(ue,{item:!0,xs:4,align:"right"},o.a.createElement(ie,{mx:1,variant:"outlined",onClick:function(){we({});var e={};if(""===Q.trim()&&(e.sourceName=!0),""!==Ee.trim()&&/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gi.test(Ee)||(e.host=!0),""===fe&&(e.port=!0),0==ke.length?Ce("0 0 * * *"):Object(M.isValidCron)(ke)||(e.cron=!0),Object.keys(e).length>0)return we(e),!1;t(Object(A.f)(n.id,{sourceName:Q,cron:0===ke.length?"0 0 * * *":ke,jdbcId:ge===se?"":ge,launcher:{yaml:ze.current.editor.getValue()||"",host:Ee,port:fe}})).then((function(e){t(Object(A.h)(n.id)),N("VIEW")})).catch((function(e){console.log(e),alert(e)}))},style:{display:a.role.index?"inline":"none"}},"\uc800\uc7a5"),o.a.createElement(ie,{style:{display:a.role.index&&"EDIT"===D?"inline":"none"},mx:1,variant:"outlined",onClick:function(){return N("VIEW")}},"\ucde8\uc18c"))),o.a.createElement(ue,{container:!0},o.a.createElement(ue,{item:!0,xs:12},o.a.createElement(ce,{p:5},o.a.createElement(p.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc774\ub984"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:Q,onChange:function(e){return $(e.target.value)},fullWidth:!0,error:We.sourceName||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud30c\ub77c\ubbf8\ud130 YAML"),o.a.createElement(y.a,null,o.a.createElement(le.a,{ref:ze,mode:"yaml",theme:"kuroir",fontSize:"15px",height:"400px",width:"100%",tabSize:2,placeholder:"type: 'jdbc'",setOptions:{useWorker:!1},onChange:function(){var e=ze.current.editor.getValue();ee!==e&&te(e)}}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"JDBC"),o.a.createElement(y.a,null,o.a.createElement(g.a,{value:ge,onChange:function(e){return ve(e.target.value)},style:{minWidth:"100%"},error:We.jdbcId||!1},Ae.map((function(e,t){return o.a.createElement(v.a,{key:t,value:e.id},(e.sourceAsMap||{}).name||"")}))))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud638\uc2a4\ud2b8"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:Ee,onChange:function(e){return he(e.target.value)},fullWidth:!0,placeholder:"127.0.0.1",error:We.host||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud3ec\ud2b8"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:fe,onChange:function(e){return ye(e.target.value)},fullWidth:!0,placeholder:"5005",type:"number",error:We.port||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud06c\ub860\uc8fc\uae30"),o.a.createElement(y.a,null,o.a.createElement(ue,{container:!0},o.a.createElement(ue,{item:!0,xs:11},o.a.createElement(O.a,{value:ke,onChange:function(e){return Ce(e.target.value)},fullWidth:!0,placeholder:"\ubd84 \uc2dc \uc77c \uc6d4 \uc694\uc77c (default: 0 0 * * *)",error:We.cron||!1})),o.a.createElement(ue,{item:!0,xs:1},o.a.createElement(j.a,{onMouseOver:(Ne="top",function(e){L(e.currentTarget),B((function(e){return X!==Ne||!e})),Y(Ne)})},"\uc608\uc81c"),o.a.createElement(x.a,{open:Boolean(U),anchorEl:V,placement:X,transition:!0},(function(e){var t=e.TransitionProps;return o.a.createElement(S.a,Object.assign({},t,{timeout:350}),o.a.createElement(k.a,null,o.a.createElement(re,{className:u.typography},"\uc608\uc81c",o.a.createElement("br",null),"*/1 * * * * : 1\ubd84\ub9c8\ub2e4 \ud55c \ubc88\uc529",o.a.createElement("br",null),"*/5 * * * * : 5\ubd84\ub9c8\ub2e4 \ud55c \ubc88\uc529",o.a.createElement("br",null),"0 5 1 * * : \ub9e4\ub2ec 1\uc77c \uc0c8\ubcbd 5\uc2dc\uc5d0 \uc2e4\ud589.",o.a.createElement("br",null),"0 5,11 * * 0,3 : \ub9e4\uc8fc \uc77c\uc694\uc77c\uacfc \uc218\uc694\uc77c \uc0c8\ubcbd 5\uc2dc\uc640 \ubc24 11\uc2dc.",o.a.createElement("br",null),"0 5,11 * * * : \uc0c8\ubcbd 5\uc2dc\uc640 \ubc24 11\uc2dc")))})))))))))))))),o.a.createElement(C.a,{open:Boolean(d),fullWidth:!0,onClose:De},o.a.createElement(T.a,null,"\uc124\uc815"),o.a.createElement(I.a,null,o.a.createElement("pre",null,(n.launcher||{}).yaml)),o.a.createElement(W.a,null,o.a.createElement(ie,{onClick:De},"\ub2eb\uae30"))))}))}}]);
//# sourceMappingURL=74.bfa70fa3.chunk.js.map