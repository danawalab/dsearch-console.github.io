(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[71],{997:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(878),r=a(62),c=a(0),o=a.n(c),i=a(14),u=a(178),m=a(615),s=a(685),d=a(624),E=a(664),h=a(686),p=a(693),b=a(694),f=a(692),y=a(691),j=a(720),O=a(710),g=a(786),v=a(696),x=a(879),S=a(621),k=a(667),C=a(576),T=a(176),I=a(721),z=a(722),W=a(723),w=a(724),N=a(695),A=a(676),D=a(636),M=a(39),V=a(747),F=a(973),R=a(865),_=a(793),L=a.n(_),P=a(583),U=a(617),B=a(769),J=a(333),X=a(581),Y=a(770),q=a(670),G=a(673),H=a(975),Q=a.n(H),$=a(974),K=a.n($),Z=Object(i.c)(m.a)(A.a,D.a),ee=Object(i.c)(d.a)(A.a,D.a),te=Object(i.c)(E.a)(A.a,D.a),ae=["\uc5f0\uc18d\uc2e4\ud589","\uc0c9\uc778\uc2e4\ud589","\uc804\ud30c\uc2e4\ud589","\uad50\uccb4\uc2e4\ud589"],ne=null;var le=Object(M.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.collection,l=e.job,i=o.a.useState(!1),u=Object(r.a)(i,2),m=u[0],s=u[1],d=o.a.useRef(null),E=Object(c.useState)(!1),h=Object(r.a)(E,2),p=h[0],b=h[1],f=Object(c.useState)(!1),y=Object(r.a)(f,2),j=y[0],O=y[1],g=Object(c.useState)(!1),v=Object(r.a)(g,2),x=v[0],C=v[1],I=Object(c.useState)(""),z=Object(r.a)(I,2),W=z[0],w=z[1],N=!!l.status;Object(c.useEffect)((function(){t(Object(V.i)(n.id));if(null!=ne)try{clearTimeout(ne),ne=null}catch(e){}return ne=setTimeout((function(){return function a(){t(Object(V.k)(n.id)).then((function(t){if(b(!0),null!=ne)try{clearTimeout(ne),ne=null}catch(e){}ne=setTimeout(a,2e3)})).catch((function(t){if(b(!1),null!=ne)try{clearTimeout(ne),ne=null}catch(e){}ne=setTimeout(a,2e3)}))}()}),500),function(){try{clearTimeout(ne)}catch(e){}}}),[]);var A=function(e){d.current&&d.current.contains(e.target)||s(!1)};function D(e){O(!0),t(Object(V.d)(n.id,e)).then((function(e){t(Object(V.i)(n.id)),setTimeout((function(){O(!1)}),4e3)})).catch((function(e){console.log(e),w(""+e),C(!0),t(Object(V.i)(n.id)),setTimeout((function(){O(!1)}),4e3)}))}return!1===p?o.a.createElement(te,{container:!0,my:0,ml:4},o.a.createElement(te,{item:!0,xs:9,mt:2,style:{alignSelf:"center"}},o.a.createElement(Z,null,"\uc5f0\uacb0 \uc911..."),o.a.createElement(Z,null,o.a.createElement(U.a,{m:2,color:"secondary"})))):j?o.a.createElement(te,{container:!0,my:0,ml:4},o.a.createElement(te,{item:!0,xs:3},o.a.createElement(te,{container:!0,my:3},o.a.createElement(te,{item:!0,xs:3,mt:2},o.a.createElement(Z,{style:{fontWeight:"bold"}},"\uc2a4\ucf00\uc974")),o.a.createElement(te,{item:!0,xs:9})),o.a.createElement(te,{container:!0,my:3},o.a.createElement(te,{item:!0,xs:3,mt:5,style:{height:"37px"}},o.a.createElement("b",null,"\uc0c1\ud0dc")),o.a.createElement(te,{item:!0,xs:9}))),o.a.createElement(te,{item:!0,xs:9,mt:2,style:{alignSelf:"center"}},o.a.createElement(Z,null,o.a.createElement(U.a,{m:2,color:"secondary"})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(te,{container:!0,my:3,ml:4},o.a.createElement(te,{item:!0,xs:3,mt:2},o.a.createElement(Z,{style:{fontWeight:"bold"}},"\uc2a4\ucf00\uc974")),o.a.createElement(te,{item:!0,xs:9},o.a.createElement(B.a,{onChange:function(e){O(!0),t(Object(V.f)(n.id,e.target.checked)).then((function(e){t(Object(V.i)(n.id)),setTimeout((function(){O(!1)}),2e3)})).catch((function(e){console.log(e),w(""+e),C(!0),t(Object(V.i)(n.id)),setTimeout((function(){O(!1)}),2e3)}))},checked:n.scheduled,disabled:!a.role.index}))),o.a.createElement(te,{container:!0,my:3,ml:4},o.a.createElement(te,{item:!0,xs:3,mt:2,style:{height:"40px"}},o.a.createElement("b",null,"\uc0c1\ud0dc")),o.a.createElement(te,{item:!0,xs:9},o.a.createElement(Z,{style:{display:!1===N&&!1===n.scheduled?"block":"none"}},o.a.createElement(R.a,{variant:"contained",color:"primary",ref:d},o.a.createElement(ee,{disabled:!0,style:{width:"100%",minWidth:"150px",maxWidth:"300px",color:"black"}},"\uc218\ub3d9 \uc2e4\ud589"),a.role.index?o.a.createElement(ee,{color:"primary",size:"small",onClick:function(){s((function(e){return!e}))},disabled:!a.role.index},o.a.createElement(L.a,null)):o.a.createElement(o.a.Fragment,null)),o.a.createElement(k.a,{open:m,anchorEl:d.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return o.a.createElement(J.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),o.a.createElement(T.a,null,o.a.createElement(P.a,{onClickAway:A},o.a.createElement(X.a,{id:"split-button-menu"},ae.map((function(e,t){return o.a.createElement(S.a,{key:e,onClick:function(t){return function(e,t,a){"\uc5f0\uc18d\uc2e4\ud589"===t?D("all"):"\uc0c9\uc778\uc2e4\ud589"===t?D("indexing"):"\uc804\ud30c\uc2e4\ud589"===t?D("propagate"):"\uad50\uccb4\uc2e4\ud589"===t&&D("expose"),s(!1)}(0,e)}},e)}))))))}))),o.a.createElement(Z,{style:{display:!1===N&&!0===n.scheduled?"block":"none",width:"100%",minWidth:"150px",maxWidth:"400px",color:"black"}},o.a.createElement(G.a,{iconMapping:{success:o.a.createElement(K.a,{fontSize:"inherit"})},severity:"success",style:{display:N?"none":"flex"}},"\uc2a4\ucf00\uc974 \ub300\uae30\uc911")),o.a.createElement(Z,{style:{display:!0===N&&!1===n.scheduled||!0===N&&!0===n.scheduled?"block":"none",width:"100%",minWidth:"150px",maxWidth:"400px",color:"black"}},o.a.createElement(Z,{style:{display:"FULL_INDEX"===l.currentStep||"DYNAMIC_INDEX"===l.currentStep?"block":"none"}},o.a.createElement(G.a,{iconMapping:{info:o.a.createElement(Q.a,{fontSize:"inherit",style:{alignSelf:"center"}})},severity:"info",action:o.a.createElement(ee,{color:"inherit",style:{border:"1px solid silver"},size:"small",onClick:function(){return D("stop_indexing")}}," \uc815\uc9c0 ")},o.a.createElement(Y.a,null),o.a.createElement(Z,{mt:2},"\uc0c9\uc778\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),o.a.createElement(Z,{style:{display:"PROPAGATE"===l.currentStep?"block":"none"}},o.a.createElement(G.a,{iconMapping:{info:o.a.createElement(Q.a,{fontSize:"inherit",style:{alignSelf:"center"}})},severity:"info",action:o.a.createElement(ee,{color:"inherit",style:{border:"1px solid silver"},size:"small",onClick:function(){return D("stop_propagation")}}," \ucde8\uc18c ")},o.a.createElement(Y.a,null),o.a.createElement(Z,{mt:2},"\uc804\ud30c\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),o.a.createElement(Z,{style:{display:"EXPOSE"===l.currentStep?"block":"none"}},o.a.createElement(G.a,{iconMapping:{info:o.a.createElement(Q.a,{fontSize:"inherit"})},severity:"info"},o.a.createElement(Y.a,null),"\uad50\uccb4\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))))),o.a.createElement(q.a,{anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,open:x,onClose:function(){C(!1)},severity:"error",message:"\uc694\uccad\uc774 \uc2e4\ud328\ub418\uc5c8\uc2b5\ub2c8\ub2e4. "+W,key:"errorSnackbar"}))})),re=a(751),ce=a.n(re),oe=(a(976),a(752),Object(i.c)(u.a)(A.a,D.a)),ie=Object(i.c)(m.a)(A.a,D.a),ue=Object(i.c)(s.a)(A.a,D.a),me=Object(i.c)(d.a)(A.a,D.a),se=Object(i.c)(E.a)(A.a,D.a),de=Object(N.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"},typography:{padding:e.spacing(2)}}})),Ee=["ndjson","csv","file","procedure","database"],he={ndjson:"scheme: http\nhost: localhost\nport: 9200\ntype: ndjson\npath: /data/source/search-prod.ndjson\nencoding: utf-8\nbulkSize: 10000\nreset: true\nthreadSize: 1",csv:"scheme: http\nhost: localhost\nport: 9200\ntype: csv\npath: /data/source/search-prod.csv\nencoding: utf-8\nbulkSize: 10000\nreset: true\nthreadSize: 1",file:'scheme: http\nhost: localhost\nport: 9200\ntype: file\npath: /data/source/prodExt_dump\nencoding: utf-8\nbulkSize: 10000\nreset: true\nthreadSize: 1\nheaderText:"name,color,price"\ndelimiter: "^"',procedure:'scheme: http\nhost: localhost\nport: 9200\ntype: procedure\nbulkSize: 1000\ndriverClassName: "Altibase.jdbc.driver.AltibaseDriver"\nfilterClass: "com.danawa.fastcatx.indexer.filter.DanawaProductFilter"\nurl: "jdbc:Altibase://localhost:20200/DANAWA_ALTI"\nuser: "root"\npassword: "qwerty123456"\nprocedureName: "procedureName1"\ndumpFormat: "konan"\ngroupSeq: 1\nbwlimit: "10240"\npath: "/data/product/VM"\nrsyncIp: "remote server IP"\nrsyncPath: "search_data_alti"\nencoding: CP949\nprocedureSkip: true\nrsyncSkip: true\nthreadSize: 1\n',database:'scheme: http\nhost: localhost\nport: 9200\nbulkSize: 10000\nfetchSize: 10000\ntype: jdbc\npipeLine: "pipeline"\nthreadSize: 1\ndataSQL : "SELECT * FROM myTable"'},pe="NO_SELECTED";t.default=Object(M.b)((function(e){return Object(n.a)(Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers),e.jdbcReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.collection,i=e.JdbcList,u=de(),m=Object(c.useState)(null),s=Object(r.a)(m,2),d=s[0],E=s[1],N=Object(c.useState)("VIEW"),A=Object(r.a)(N,2),D=A[0],M=A[1],R=o.a.useState(null),_=Object(r.a)(R,2),L=_[0],P=_[1],U=o.a.useState(null),B=Object(r.a)(U,2),J=B[0],X=B[1],Y=o.a.useState(),q=Object(r.a)(Y,2),G=q[0],H=q[1],Q=Object(c.useState)(""),$=Object(r.a)(Q,2),K=$[0],Z=$[1],ee=Object(c.useState)(""),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=Object(c.useState)(""),be=Object(r.a)(re,2),fe=be[0],ye=be[1],je=Object(c.useState)(""),Oe=Object(r.a)(je,2),ge=Oe[0],ve=Oe[1],xe=Object(c.useState)(pe),Se=Object(r.a)(xe,2),ke=Se[0],Ce=Se[1],Te=Object(c.useState)(""),Ie=Object(r.a)(Te,2),ze=Ie[0],We=Ie[1],we=Object(c.useState)(Ee[0]),Ne=Object(r.a)(we,2),Ae=Ne[0],De=Ne[1],Me=Object(c.useState)({}),Ve=Object(r.a)(Me,2),Fe=Ve[0],Re=Ve[1],_e=Object(c.useRef)(null);function Le(e){E(null===d?e.currentTarget:null)}Object(c.useEffect)((function(){Re({}),void 0===n.sourceName||null===n.sourceName||""===n.sourceName?(M("FORCE_EDIT"),_e.current.editor.setValue(he[Ee[0]])):(Z(n.sourceName),ye((n.launcher||{}).host||""),ve((n.launcher||{}).port||""),Ce(""===n.jdbcId?pe:n.jdbcId),We(n.cron),ne((n.launcher||{}).yaml||""),_e.current.editor.setValue((n.launcher||{}).yaml||""),_e.current.editor.clearSelection())}),[]),Object(c.useEffect)((function(){try{"EDIT"===D&&(Z(n.sourceName),ye((n.launcher||{}).host||""),ve((n.launcher||{}).port||""),Ce(""===n.jdbcId?pe:n.jdbcId),We(n.cron),ne((n.launcher||{}).yaml||""),_e.current.editor.setValue((n.launcher||{}).yaml||""),_e.current.editor.clearSelection())}catch(e){console.log("change ace editor")}}),[D]);var Pe,Ue=[{id:pe,sourceAsMap:{name:"\uc120\ud0dd\uc548\ud568"}}].concat(Object(l.a)((i.hits||{}).hits||[]));return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(ue,null,o.a.createElement(h.a,null,o.a.createElement(ie,{style:{display:"VIEW"===D?"block":"none"}},o.a.createElement(se,{container:!0},o.a.createElement(se,{item:!0,xs:10},o.a.createElement(le,null)),o.a.createElement(se,{item:!0,xs:2,align:"right"},a.role.index?o.a.createElement(me,{mx:1,variant:"outlined",onClick:function(){return M("EDIT")}},"\uc218\uc815"):o.a.createElement(o.a.Fragment,null))),o.a.createElement(se,{container:!0},o.a.createElement(se,{item:!0,xs:12},o.a.createElement(ie,null,o.a.createElement(p.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud30c\ub77c\ubbf8\ud130"),o.a.createElement(y.a,null,o.a.createElement(j.a,{style:{cursor:"pointer"},onClick:Le},"YAML"))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud638\uc2a4\ud2b8"),o.a.createElement(y.a,null,(n.launcher||{}).host)),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud3ec\ud2b8"),o.a.createElement(y.a,null,0===(n.launcher||{}).port?"":(n.launcher||{}).port)),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"JDBC"),o.a.createElement(y.a,null,Ue.filter((function(e){return(""===n.jdbcId?pe:n.jdbcId)===e.id})).map((function(e){var t=e.sourceAsMap;return o.a.createElement(o.a.Fragment,{key:t.name},t.name)})))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud06c\ub860\uc8fc\uae30"),o.a.createElement(y.a,null," ",n.cron," ")))))))),o.a.createElement(ie,{style:{display:"EDIT"===D||"FORCE_EDIT"===D?"block":"none"}},o.a.createElement(se,{container:!0},o.a.createElement(se,{item:!0,xs:8}),o.a.createElement(se,{item:!0,xs:4,align:"right"},o.a.createElement(me,{mx:1,variant:"outlined",onClick:function(){Re({});var e={};if(""===K.trim()&&(e.sourceName=!0),""!==fe.trim()&&/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gi.test(fe)||(e.host=!0),""===ge&&(e.port=!0),0===ze.length?We("0 0 * * *"):Object(F.isValidCron)(ze)||(e.cron=!0),Object.keys(e).length>0)return Re(e),!1;t(Object(V.g)(n.id,{sourceName:K,cron:0===ze.length?"0 0 * * *":ze,jdbcId:ke===pe?"":ke,launcher:{yaml:_e.current.editor.getValue()||"",host:fe,port:ge}})).then((function(e){t(Object(V.i)(n.id)),M("VIEW")})).catch((function(e){console.log(e),alert(e)}))},style:{display:a.role.index?"inline":"none"}},"\uc800\uc7a5"),o.a.createElement(me,{style:{display:a.role.index&&"EDIT"===D?"inline":"none"},mx:1,variant:"outlined",onClick:function(){return M("VIEW")}},"\ucde8\uc18c"))),o.a.createElement(se,{container:!0},o.a.createElement(se,{item:!0,xs:12},o.a.createElement(ie,{p:5},o.a.createElement(p.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc774\ub984"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:K,onChange:function(e){return Z(e.target.value)},fullWidth:!0,error:Fe.sourceName||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud30c\ub77c\ubbf8\ud130 YAML"),o.a.createElement(y.a,null,o.a.createElement(ie,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:"8px"},o.a.createElement("div",null),o.a.createElement(g.a,{style:{width:"200px"}},o.a.createElement(v.a,{id:"demo-simple-select-label"},"\uc218\uc9d1\uc18c\uc2a4 \ud15c\ud50c\ub9bf"),o.a.createElement(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Ae,onChange:function(e){De(e.target.value),_e.current.editor.setValue(he[e.target.value])}},Ee.map((function(e,t){return o.a.createElement(S.a,{key:t,value:e},e)}))))),o.a.createElement(ce.a,{ref:_e,mode:"yaml",theme:"kuroir",fontSize:"15px",height:"400px",width:"100%",tabSize:2,placeholder:"type: 'jdbc'",setOptions:{useWorker:!1},onChange:function(){var e=_e.current.editor.getValue();ae!==e&&ne(e)}}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"JDBC"),o.a.createElement(y.a,null,o.a.createElement(x.a,{value:ke,onChange:function(e){return Ce(e.target.value)},style:{minWidth:"100%"},error:Fe.jdbcId||!1},Ue.map((function(e,t){return o.a.createElement(S.a,{key:t,value:e.id},(e.sourceAsMap||{}).name||"")}))))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud638\uc2a4\ud2b8"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:fe,onChange:function(e){return ye(e.target.value)},fullWidth:!0,placeholder:"127.0.0.1",error:Fe.host||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\uc2e4\ud589\ud3ec\ud2b8"),o.a.createElement(y.a,null,o.a.createElement(O.a,{value:ge,onChange:function(e){return ve(e.target.value)},fullWidth:!0,placeholder:"5005",type:"number",error:Fe.port||!1}))),o.a.createElement(f.a,null,o.a.createElement(y.a,{variant:"head",component:"th"},"\ud06c\ub860\uc8fc\uae30"),o.a.createElement(y.a,null,o.a.createElement(se,{container:!0},o.a.createElement(se,{item:!0,xs:11},o.a.createElement(O.a,{value:ze,onChange:function(e){return We(e.target.value)},fullWidth:!0,placeholder:"\ubd84 \uc2dc \uc77c \uc6d4 \uc694\uc77c (default: 0 0 * * *)",error:Fe.cron||!1})),o.a.createElement(se,{item:!0,xs:1},o.a.createElement(j.a,{onMouseOver:(Pe="top",function(e){P(e.currentTarget),X((function(e){return G!==Pe||!e})),H(Pe)})},"\uc608\uc81c"),o.a.createElement(k.a,{open:Boolean(J),anchorEl:L,placement:G,transition:!0},(function(e){var t=e.TransitionProps;return o.a.createElement(C.a,Object.assign({},t,{timeout:350}),o.a.createElement(T.a,null,o.a.createElement(oe,{className:u.typography},"\uc608\uc81c",o.a.createElement("br",null),"*/1 * * * * : 1\ubd84\ub9c8\ub2e4 \ud55c \ubc88\uc529",o.a.createElement("br",null),"*/5 * * * * : 5\ubd84\ub9c8\ub2e4 \ud55c \ubc88\uc529",o.a.createElement("br",null),"0 5 1 * * : \ub9e4\ub2ec 1\uc77c \uc0c8\ubcbd 5\uc2dc\uc5d0 \uc2e4\ud589.",o.a.createElement("br",null),"0 5,11 * * 0,3 : \ub9e4\uc8fc \uc77c\uc694\uc77c\uacfc \uc218\uc694\uc77c \uc0c8\ubcbd 5\uc2dc\uc640 \ubc24 11\uc2dc.",o.a.createElement("br",null),"0 5,11 * * * : \uc0c8\ubcbd 5\uc2dc\uc640 \ubc24 11\uc2dc")))})))))))))))))),o.a.createElement(I.a,{open:Boolean(d),fullWidth:!0,onClose:Le},o.a.createElement(z.a,null,"\uc124\uc815"),o.a.createElement(W.a,null,o.a.createElement("pre",null,(n.launcher||{}).yaml)),o.a.createElement(w.a,null,o.a.createElement(me,{onClick:Le},"\ub2eb\uae30"))))}))}}]);
//# sourceMappingURL=71.03bd5972.chunk.js.map