(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[57],{1026:function(e,t,a){"use strict";a.r(t);var r=a(105),n=a(2),l=a(62),c=a(0),i=a.n(c),u=a(14),s=a(63),d=a(38),o=a(136),m=a.n(o),p=a(721),b=a(680),h=a(693),f=a(722),E=a(716),v=a(700),j=a(695),g=a(699),y=a(703),w=a(756),O=a(701),R=a(384),A=a(728),C=a(729),S=a(730),x=a(731),J=a(624),D=a(100),L=a(884),I=a(629),U=a(725),M=a(691),k=a(677),P=a(671),W=a(595),B=a(800),T=["Altibase","Oracle","Mysql"],N={Altibase:"Altibase.jdbc.driver.AltibaseDriver",Oracle:"oracle.jdbc.driver.OracleDriver",Mysql:"com.mysql.cj.jdbc.Driver"},z={Altibase:"jdbc:Altibase://",Oracle:"jdbc:oracle:thin:@",Mysql:"jdbc:mysql://"},_=(i.a.forwardRef((function(e,t){return i.a.createElement(s.c,Object.assign({innerRef:t},e))})),Object(u.c)(h.a)(W.a)),F=Object(u.c)(f.a)(W.a),V=Object(u.c)(E.a)(W.a),q=[{id:"no",label:"#",sorting:!1},{id:"id",label:"\uc544\uc774\ub514",sorting:!0},{id:"name",label:"\uc774\ub984",sorting:!0},{id:"driver",label:"\ub4dc\ub77c\uc774\ubc84",sorting:!0},{id:"url",label:"URL",sorting:!1},{id:"user",label:"\uc0ac\uc6a9\uc790",sorting:!1},{id:"password",label:"\ube44\ubc00\ubc88\ud638",sorting:!1},{id:"test",label:"\ud14c\uc2a4\ud2b8",sorting:!1}];function H(e){var t=e.dispatch,a=e.authUser,u=e.JdbcList,s=e.handleAccessFlag,d=Object(c.useState)(!1),o=Object(l.a)(d,2),m=o[0],p=o[1],b=Object(c.useState)(-1),h=Object(l.a)(b,2),f=h[0],E=h[1],J=Object(c.useState)(!1),D=Object(l.a)(J,2),L=D[0],I=D[1],U=Object(c.useState)(""),M=Object(l.a)(U,2),k=M[0],P=M[1],W=Object(c.useState)("asc"),T=Object(l.a)(W,2),N=T[0],z=T[1],_=Object(c.useRef)(""),V=Object(c.useRef)(""),H=Object(c.useRef)(""),K=Object(c.useRef)(""),Y=Object(c.useRef)(""),Q=Object(c.useRef)(""),X=function(e){p(!1)};var Z=((u.hits||{}).hits||[]).sort((function(e,t){return((e.sourceAsMap||{}).id||"")>((t.sourceAsMap||{}).id||"")?1:((e.sourceAsMap||{}).id||"")<((t.sourceAsMap||{}).id||"")?-1:0})).map((function(e,t){return Object(n.a)(Object(n.a)({},e),{},{no:t})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,null,i.a.createElement("colgroup",null,i.a.createElement("col",{width:"1%"}),i.a.createElement("col",{width:"10%"}),i.a.createElement("col",{width:"13%"}),i.a.createElement("col",{width:"20%"}),i.a.createElement("col",{width:"30%"}),i.a.createElement("col",{width:"10%"}),i.a.createElement("col",{width:"10%"}),i.a.createElement("col",{width:"5%"})),i.a.createElement(j.a,null,i.a.createElement(g.a,null,q.map((function(e){return i.a.createElement(y.a,{align:"center",key:e.id},e.sorting?i.a.createElement(w.a,{active:k===e.id,direction:k===e.id?N:"asc",onClick:function(t){P(e.id);var a=k===e.id&&"asc"===N;z(a?"desc":"asc")}},e.label):e.label)})),a.role.index?i.a.createElement(y.a,{align:"center"}," \uc561\uc158"):null)),i.a.createElement(O.a,null,Z.length>0?Z.sort((function(e,t){if(k&&N){var a=(e.sourceAsMap||{})[k]||"",r=(t.sourceAsMap||{})[k]||"";return"asc"===N?a>r?1:-1:a>r?-1:1}return 0})).map((function(e,n){for(var l=e.sourceAsMap.password,c="",u=0;u<l.length-3;u++)c+="*";return l=l.substring(0,2)+c+l.substring(l.length-1,l.length),i.a.createElement(g.a,{key:e.sourceAsMap.id},i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},e.no+1),i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.id),i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.name),i.a.createElement(y.a,Object(r.a)({style:{whiteSpace:"nowrap"}},"style",{wordBreak:"break-all"}),e.sourceAsMap.driver),i.a.createElement(y.a,Object(r.a)({style:{whiteSpace:"nowrap"}},"style",{wordBreak:"break-all"}),e.sourceAsMap.url),i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.user),i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},l),i.a.createElement(y.a,{style:{whiteSpace:"nowrap"}},i.a.createElement(R.a,{variant:"outlined",color:"primary",disabled:L,onClick:function(){return function(e){I(!0);var a={};a.driver=e.sourceAsMap.driver,a.user=e.sourceAsMap.user,a.password=e.sourceAsMap.password,a.url=e.sourceAsMap.url,t(Object(B.c)(a)),setTimeout((function(){I(!1),s(!0)}),500)}(e)}}," \uc5f0\uacb0\ud14c\uc2a4\ud2b8 ")),a.role.index?i.a.createElement(y.a,null,i.a.createElement(R.a,{variant:"outlined",id:n,color:"primary",style:{whiteSpace:"nowrap"},onClick:function(){return E(n),void p(!0)}},"\uc218\uc815")):i.a.createElement(y.a,null))})):i.a.createElement(g.a,null,i.a.createElement(y.a,{align:"center",colSpan:9},"\ud604\uc7ac \ub4f1\ub85d\ub41c JDBC\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))),i.a.createElement(A.a,{open:m,onClose:X},i.a.createElement(C.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),i.a.createElement(S.a,null,i.a.createElement("label",null,"\uc124\uc815"),i.a.createElement(F,null),i.a.createElement(G,{JdbcList:u,JdbcListIndex:f,editId:_,editName:V,editDriver:H,editUser:K,editPassword:Y,editURL:Q})),i.a.createElement(x.a,null,i.a.createElement(R.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},onClick:function(e){var a=u.hits.hits[f];t(Object(B.b)(a.id)),p(!1)}},"\uc0ad\uc81c"),i.a.createElement("div",{style:{flex:"1 0 0"}}),i.a.createElement(R.a,{variant:"contained",color:"default",onClick:X},"\ub2eb\uae30"),i.a.createElement(R.a,{variant:"contained",color:"primary",onClick:function(e){var a=u.hits.hits[f],r={};r.id=_.current.value,r.name=V.current.value,r.driver=H.current.value,r.user=K.current.value,0!==Y.current.value.length&&(r.password=Y.current.value),r.url=Q.current.value;t(Object(B.e)(a.id,r)),p(!1)}},"\uc800\uc7a5"))))}function G(e){var t=e.JdbcList,a=e.JdbcListIndex,r=e.editId,n=e.editName,l=e.editDriver,c=e.editURL,u=e.editUser,s=e.editPassword,d=t.hits.hits[a];return i.a.createElement(J.a,{p:2},i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),i.a.createElement(V,{placeholder:"ID",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).id,inputRef:r})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc774\ub984"),i.a.createElement(V,{placeholder:"Name",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).name,inputRef:n})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),i.a.createElement(V,{placeholder:"Driver",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).driver,inputRef:l})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"URL"),i.a.createElement(V,{placeholder:"jdbc:Altibase://localhost:3306/",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).url,inputRef:c})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),i.a.createElement(V,{placeholder:"USER",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).user,inputRef:u})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),i.a.createElement(V,{placeholder:"PASSWORD (LEAVE BLANK IF YOU DON'T WANT CHANGE)",fullWidth:!0,variant:"outlined",type:"password",inputRef:s})))}function K(e){var t=e.errorHandleJdbcSource,a=e.jdbcId,r=e.jdbcName,n=e.jdbcDriver,l=e.jdbcAddr,c=e.jdbcPort,u=e.jdbcDB,s=e.jdbcUser,d=e.jdbcPassword,o=e.jdbcParams,m=e.jdbcURL,p=e.setProvider,b=e.handleJdbcURL;return i.a.createElement(J.a,{p:2},i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),i.a.createElement(V,{error:t.id,id:"jdbcSourceId",size:"small",placeholder:"ID",fullWidth:!0,variant:"outlined",inputRef:a})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc774\ub984"),i.a.createElement(V,{error:t.name,id:"jdbcSourceName",size:"small",placeholder:"Name",fullWidth:!0,variant:"outlined",inputRef:r})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"DB\uc81c\uacf5\uc790"),i.a.createElement(L.a,{id:"jdbcSourceDriver",fullWidth:!0,onChange:p,defaultValue:""},T.map((function(e,t){return i.a.createElement(I.a,{key:e,value:e}," ",e," Driver")})))),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),i.a.createElement(V,{error:t.driver,id:"jdbcSourceDbSupport",size:"small",fullWidth:!0,variant:"outlined",inputRef:n,onChange:b})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ud638\uc2a4\ud2b8\uc8fc\uc18c"),i.a.createElement(V,{error:t.address,id:"jdbcSourceHostAddress",size:"small",placeholder:"127.0.0.1",fullWidth:!0,variant:"outlined",inputRef:l,onChange:b})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ud3ec\ud2b8"),i.a.createElement(V,{error:t.port,id:"jdbcSourcePort",size:"small",placeholder:"3306",fullWidth:!0,variant:"outlined",inputRef:c,onChange:b})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"DB\uba85"),i.a.createElement(V,{error:t.db_name,id:"jdbcSourceDbName",size:"small",fullWidth:!0,variant:"outlined",inputRef:u,onChange:b})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),i.a.createElement(V,{error:t.user,id:"jdbcSourceUser",size:"small",placeholder:"USER",fullWidth:!0,variant:"outlined",inputRef:s})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),i.a.createElement(V,{error:t.password,id:"jdbcSourcePassword",type:"password",size:"small",placeholder:"PASSWORD",fullWidth:!0,variant:"outlined",inputRef:d})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"JDBC\ud30c\ub77c\ubbf8\ud130"),i.a.createElement(V,{error:t.params,id:"jdbcSourceParams",size:"small",fullWidth:!0,variant:"outlined",inputRef:o,placeholder:"characterEncoding=utf-8",onChange:b})),i.a.createElement(J.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},i.a.createElement(D.a,{style:{width:"150px"}},"URL"),i.a.createElement(V,{error:t.url,id:"jdbcSourceURL",size:"small",placeholder:"jdbc:mysql://",fullWidth:!0,variant:"outlined",value:m})))}function Y(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,n=e.JdbcAccessTest,u=e.changedJdbcList,s=Object(c.useState)(!1),d=Object(l.a)(s,2),o=d[0],m=d[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),E=f[0],v=f[1],j=Object(c.useState)(!1),g=Object(l.a)(j,2),y=g[0],w=g[1],O=Object(c.useState)({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),D=Object(l.a)(O,2),L=D[0],I=D[1];u&&p.a.sleep(1e3).then((function(){t(Object(B.d)())}));var P=Object(c.useRef)(""),W=Object(c.useRef)(""),T=Object(c.useRef)(""),V=Object(c.useRef)(""),q=Object(c.useRef)(""),G=Object(c.useRef)(""),Y=Object(c.useRef)(""),Q=Object(c.useRef)(""),X=Object(c.useRef)(""),Z=Object(c.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1];function ae(e){w(e)}var re=function(e){m(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{align:"right"},a.role.index?i.a.createElement(U.a,{onClick:function(e){I({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),m(!0)},style:{cursor:"pointer"},color:"primary"},"JDBC \ucd94\uac00"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("br",null),i.a.createElement(_,{mb:6},i.a.createElement(M.a,null,i.a.createElement(H,{dispatch:t,authUser:a,JdbcList:r,handleAccessFlag:ae,changedJdbcList:u}),i.a.createElement(A.a,{open:o,onClose:re},i.a.createElement(C.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),i.a.createElement(S.a,{style:{width:"100%"}},i.a.createElement("label",null,"\uc124\uc815"),i.a.createElement(F,null),i.a.createElement(K,{errorHandleJdbcSource:L,jdbcId:P,jdbcName:W,jdbcDriver:T,handleJdbcURL:function(){var e="";e=null!==X.current.value&&X.current.value.length>0?z[E]+V.current.value+":"+q.current.value+"/"+G.current.value+"?"+X.current.value:z[E]+V.current.value+":"+q.current.value+"/"+G.current.value,te(e)},setProvider:function(e,t){T.current.value=N[e.target.value],v(e.target.value)},jdbcAddr:V,jdbcPort:q,jdbcDB:G,jdbcUser:Y,jdbcPassword:Q,jdbcParams:X,jdbcURL:ee})),i.a.createElement(x.a,null,i.a.createElement(R.a,{variant:"contained",color:"default",onClick:re},"\ub2eb\uae30"),i.a.createElement(R.a,{variant:"outlined",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===P.current.value.length&&(a=!0,r.id=!0),0===W.current.value.length&&(a=!0,r.name=!0),0===T.current.value.length&&(a=!0,r.driver=!0),0===V.current.value.length&&(a=!0,r.address=!0),0===q.current.value.length&&(a=!0,r.port=!0),0===Y.current.value.length&&(a=!0,r.user=!0),0===Q.current.value.length&&(a=!0,r.password=!0),0===G.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)I(r);else{var n={};n.driver=T.current.value,n.user=Y.current.value,n.password=Q.current.value,n.url=ee,t(Object(B.c)(n)).then((function(){w(!0)}))}}},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8"),i.a.createElement(R.a,{variant:"contained",color:"primary",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===P.current.value.length&&(a=!0,r.id=!0),0===W.current.value.length&&(a=!0,r.name=!0),0===T.current.value.length&&(a=!0,r.driver=!0),0===V.current.value.length&&(a=!0,r.address=!0),0===q.current.value.length&&(a=!0,r.port=!0),0===Y.current.value.length&&(a=!0,r.user=!0),0===Q.current.value.length&&(a=!0,r.password=!0),0===G.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)I(r);else{var n={};n.id=P.current.value,n.name=W.current.value,n.provider=E,n.driver=T.current.value,n.address=V.current.value,n.port=q.current.value,n.db_name=G.current.value,n.user=Y.current.value,n.password=Q.current.value,n.params=X.current.value,n.url=ee,m(!1),t(Object(B.a)(n))}}},"\ucd94\uac00"))),i.a.createElement(k.a,{open:y,autoHideDuration:3e3,onClose:function(){ae(!1),n.message=!1}},n.message?i.a.createElement(b.a,{elevation:6,variant:"filled",severity:"info"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc131\uacf5"," "):i.a.createElement(b.a,{elevation:6,variant:"filled",severity:"error"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc2e4\ud328")))))}t.default=Object(d.b)((function(e){return{authUser:e.dsearchReducers.authUser,JdbcList:e.jdbcReducers.JdbcList,JdbcAccessTest:e.jdbcReducers.JdbcAccessTest,changedJdbcList:e.jdbcReducers.changedJdbcList}}))((function(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,n=e.JdbcAccessTest,l=e.changedJdbcList;return Object(c.useEffect)((function(){t(Object(B.d)())}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"JDBC"}),i.a.createElement(D.a,{variant:"h3",gutterBottom:!0,display:"inline"},"JDBC"),i.a.createElement(F,{my:6}),i.a.createElement(P.a,{container:!0,spacing:6},i.a.createElement(P.a,{item:!0,xs:12},i.a.createElement(Y,{dispatch:t,authUser:a,JdbcList:r,JdbcAccessTest:n,changedJdbcList:l}))))}))},721:function(e,t,a){"use strict";var r={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=r},800:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return s}));var r=a(3),n=new(a(75).a),l=function(){return function(e){return n.call({uri:"/jdbc/list",method:"GET"}).then((function(t){return e({type:r.R,payload:t.data})}))}},c=function(e){return function(t){return n.call({uri:"/jdbc/",method:"POST",data:e}).then((function(e){return t({type:r.N,payload:e.data}),console.log(e),!0}))}},i=function(e){return function(t){return n.call({uri:"/jdbc/add",method:"PUT",data:e}).then((function(e){return t({type:r.O,payload:e.data})}))}},u=function(e){return function(t){return n.call({uri:"/jdbc/delete/"+e,method:"DELETE"}).then((function(e){return t({type:r.P,payload:e.data})}))}},s=function(e,t){return function(a){return n.call({uri:"/jdbc/update/"+e,method:"POST",data:t}).then((function(e){return a({type:r.S,payload:e.data})}))}}}}]);
//# sourceMappingURL=57.532ddef1.chunk.js.map