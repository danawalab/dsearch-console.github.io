(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[59],{1065:function(e,t,a){"use strict";a.r(t);var r=a(106),n=a(62),l=a(0),c=a.n(l),i=a(14),u=a(63),d=a(39),s=a(139),o=a.n(s),m=a(753),p=a(825),h=a(725),f=a(754),b=a(748),E=a(731),v=a(726),j=a(730),g=a(733),y=a(732),w=a(397),O=a(765),R=a(766),C=a(767),x=a(768),S=a(659),A=a(102),J=a(923),D=a(664),L=a(764),I=a(724),U=a(813),M=a(706),W=a(629),P=a(837),k=["Altibase","Oracle","Mysql"],B={Altibase:"Altibase.jdbc.driver.AltibaseDriver",Oracle:"oracle.jdbc.driver.OracleDriver",Mysql:"com.mysql.cj.jdbc.Driver"},T={Altibase:"jdbc:Altibase://",Oracle:"jdbc:oracle:thin:@",Mysql:"jdbc:mysql://"},N=(c.a.forwardRef((function(e,t){return c.a.createElement(u.c,Object.assign({innerRef:t},e))})),Object(i.c)(h.a)(W.a)),z=Object(i.c)(f.a)(W.a),_=Object(i.c)(b.a)(W.a);function F(e){var t=e.dispatch,a=e.authUser,i=e.JdbcList,u=e.handleAccessFlag,d=Object(l.useState)(!1),s=Object(n.a)(d,2),o=s[0],m=s[1],p=Object(l.useState)(-1),h=Object(n.a)(p,2),f=h[0],b=h[1],S=Object(l.useState)(!1),A=Object(n.a)(S,2),J=A[0],D=A[1],L=Object(l.useRef)(""),I=Object(l.useRef)(""),U=Object(l.useRef)(""),M=Object(l.useRef)(""),W=Object(l.useRef)(""),k=Object(l.useRef)(""),B=function(e){m(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement("colgroup",null,c.a.createElement("col",{width:"1%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"13%"}),c.a.createElement("col",{width:"20%"}),c.a.createElement("col",{width:"30%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"5%"})),c.a.createElement(v.a,null,c.a.createElement(j.a,null,c.a.createElement(g.a,null,"#"),c.a.createElement(g.a,null,"\uc544\uc774\ub514"),c.a.createElement(g.a,null,"\uc774\ub984"),c.a.createElement(g.a,null,"\ub4dc\ub77c\uc774\ubc84"),c.a.createElement(g.a,null,"URL"),c.a.createElement(g.a,null,"\uc0ac\uc6a9\uc790"),c.a.createElement(g.a,null,"\ube44\ubc00\ubc88\ud638"),c.a.createElement(g.a,{align:"center"},"\ud14c\uc2a4\ud2b8"),a.role.index?c.a.createElement(g.a,{align:"center"}," \uc561\uc158"):null)),c.a.createElement(y.a,null,i.hits.hits.length>0?i.hits.hits.map((function(e,n){for(var l=e.sourceAsMap.password,i="",d=0;d<l.length-3;d++)i+="*";return l=l.substring(0,2)+i+l.substring(l.length-1,l.length),c.a.createElement(j.a,{key:e.sourceAsMap.id},c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},n+1),c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.id),c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.name),c.a.createElement(g.a,Object(r.a)({style:{whiteSpace:"nowrap"}},"style",{wordBreak:"break-all"}),e.sourceAsMap.driver),c.a.createElement(g.a,Object(r.a)({style:{whiteSpace:"nowrap"}},"style",{wordBreak:"break-all"}),e.sourceAsMap.url),c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.user),c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},l),c.a.createElement(g.a,{style:{whiteSpace:"nowrap"}},c.a.createElement(w.a,{variant:"outlined",color:"primary",disabled:J,onClick:function(){return function(e){D(!0);var a={};a.driver=e.sourceAsMap.driver,a.user=e.sourceAsMap.user,a.password=e.sourceAsMap.password,a.url=e.sourceAsMap.url,t(Object(P.c)(a)),setTimeout((function(){D(!1),u(!0)}),500)}(e)}}," \uc5f0\uacb0\ud14c\uc2a4\ud2b8 ")),a.role.index?c.a.createElement(g.a,null,c.a.createElement(w.a,{variant:"outlined",id:n,color:"primary",style:{whiteSpace:"nowrap"},onClick:function(){return b(n),void m(!0)}},"\uc218\uc815")):c.a.createElement(g.a,null))})):c.a.createElement(j.a,null,c.a.createElement(g.a,{align:"center",colSpan:9},"\ud604\uc7ac \ub4f1\ub85d\ub41c JDBC\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))),c.a.createElement(O.a,{open:o,onClose:B},c.a.createElement(R.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),c.a.createElement(C.a,null,c.a.createElement("label",null,"\uc124\uc815"),c.a.createElement(z,null),c.a.createElement(V,{JdbcList:i,JdbcListIndex:f,editId:L,editName:I,editDriver:U,editUser:M,editPassword:W,editURL:k})),c.a.createElement(x.a,null,c.a.createElement(w.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},onClick:function(e){var a=i.hits.hits[f];t(Object(P.b)(a.id)),m(!1)}},"\uc0ad\uc81c"),c.a.createElement("div",{style:{flex:"1 0 0"}}),c.a.createElement(w.a,{variant:"contained",color:"default",onClick:B},"\ub2eb\uae30"),c.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(e){var a=i.hits.hits[f],r={};r.id=L.current.value,r.name=I.current.value,r.driver=U.current.value,r.user=M.current.value,0!==W.current.value.length&&(r.password=W.current.value),r.url=k.current.value;t(Object(P.e)(a.id,r)),m(!1)}},"\uc800\uc7a5"))))}function V(e){var t=e.JdbcList,a=e.JdbcListIndex,r=e.editId,n=e.editName,l=e.editDriver,i=e.editURL,u=e.editUser,d=e.editPassword,s=t.hits.hits[a];return c.a.createElement(S.a,{p:2},c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),c.a.createElement(_,{placeholder:"ID",fullWidth:!0,variant:"outlined",defaultValue:((s||{}).sourceAsMap||{}).id,inputRef:r})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc774\ub984"),c.a.createElement(_,{placeholder:"Name",fullWidth:!0,variant:"outlined",defaultValue:((s||{}).sourceAsMap||{}).name,inputRef:n})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),c.a.createElement(_,{placeholder:"Driver",fullWidth:!0,variant:"outlined",defaultValue:((s||{}).sourceAsMap||{}).driver,inputRef:l})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"URL"),c.a.createElement(_,{placeholder:"jdbc:Altibase://localhost:3306/",fullWidth:!0,variant:"outlined",defaultValue:((s||{}).sourceAsMap||{}).url,inputRef:i})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),c.a.createElement(_,{placeholder:"USER",fullWidth:!0,variant:"outlined",defaultValue:((s||{}).sourceAsMap||{}).user,inputRef:u})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),c.a.createElement(_,{placeholder:"PASSWORD (LEAVE BLANK IF YOU DON'T WANT CHANGE)",fullWidth:!0,variant:"outlined",type:"password",inputRef:d})))}function q(e){var t=e.errorHandleJdbcSource,a=e.jdbcId,r=e.jdbcName,n=e.jdbcDriver,l=e.jdbcAddr,i=e.jdbcPort,u=e.jdbcDB,d=e.jdbcUser,s=e.jdbcPassword,o=e.jdbcParams,m=e.jdbcURL,p=e.setProvider,h=e.handleJdbcURL;return c.a.createElement(S.a,{p:2},c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),c.a.createElement(_,{error:t.id,id:"jdbcSourceId",size:"small",placeholder:"ID",fullWidth:!0,variant:"outlined",inputRef:a})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc774\ub984"),c.a.createElement(_,{error:t.name,id:"jdbcSourceName",size:"small",placeholder:"Name",fullWidth:!0,variant:"outlined",inputRef:r})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"DB\uc81c\uacf5\uc790"),c.a.createElement(J.a,{id:"jdbcSourceDriver",fullWidth:!0,onChange:p,defaultValue:""},k.map((function(e,t){return c.a.createElement(D.a,{key:e,value:e}," ",e," Driver")})))),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),c.a.createElement(_,{error:t.driver,id:"jdbcSourceDbSupport",size:"small",fullWidth:!0,variant:"outlined",inputRef:n,onChange:h})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ud638\uc2a4\ud2b8\uc8fc\uc18c"),c.a.createElement(_,{error:t.address,id:"jdbcSourceHostAddress",size:"small",placeholder:"127.0.0.1",fullWidth:!0,variant:"outlined",inputRef:l,onChange:h})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ud3ec\ud2b8"),c.a.createElement(_,{error:t.port,id:"jdbcSourcePort",size:"small",placeholder:"3306",fullWidth:!0,variant:"outlined",inputRef:i,onChange:h})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"DB\uba85"),c.a.createElement(_,{error:t.db_name,id:"jdbcSourceDbName",size:"small",fullWidth:!0,variant:"outlined",inputRef:u,onChange:h})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),c.a.createElement(_,{error:t.user,id:"jdbcSourceUser",size:"small",placeholder:"USER",fullWidth:!0,variant:"outlined",inputRef:d})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),c.a.createElement(_,{error:t.password,id:"jdbcSourcePassword",type:"password",size:"small",placeholder:"PASSWORD",fullWidth:!0,variant:"outlined",inputRef:s})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"JDBC\ud30c\ub77c\ubbf8\ud130"),c.a.createElement(_,{error:t.params,id:"jdbcSourceParams",size:"small",fullWidth:!0,variant:"outlined",inputRef:o,placeholder:"characterEncoding=utf-8",onChange:h})),c.a.createElement(S.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(A.a,{style:{width:"150px"}},"URL"),c.a.createElement(_,{error:t.url,id:"jdbcSourceURL",size:"small",placeholder:"jdbc:mysql://",fullWidth:!0,variant:"outlined",value:m})))}function H(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,i=e.JdbcAccessTest,u=e.changedJdbcList,d=Object(l.useState)(!1),s=Object(n.a)(d,2),o=s[0],h=s[1],f=Object(l.useState)(""),b=Object(n.a)(f,2),E=b[0],v=b[1],j=Object(l.useState)(!1),g=Object(n.a)(j,2),y=g[0],A=g[1],J=Object(l.useState)({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),D=Object(n.a)(J,2),M=D[0],W=D[1];u&&m.a.sleep(1e3).then((function(){t(Object(P.d)())}));var k=Object(l.useRef)(""),_=Object(l.useRef)(""),V=Object(l.useRef)(""),H=Object(l.useRef)(""),G=Object(l.useRef)(""),K=Object(l.useRef)(""),Q=Object(l.useRef)(""),Y=Object(l.useRef)(""),X=Object(l.useRef)(""),Z=Object(l.useState)(""),$=Object(n.a)(Z,2),ee=$[0],te=$[1];function ae(e){A(e)}var re=function(e){h(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{align:"right"},a.role.index?c.a.createElement(L.a,{onClick:function(e){W({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),h(!0)},style:{cursor:"pointer"},color:"primary"},"JDBC \ucd94\uac00"):c.a.createElement(c.a.Fragment,null)),c.a.createElement("br",null),c.a.createElement(N,{mb:6},c.a.createElement(I.a,null,c.a.createElement(F,{dispatch:t,authUser:a,JdbcList:r,handleAccessFlag:ae,changedJdbcList:u}),c.a.createElement(O.a,{open:o,onClose:re},c.a.createElement(R.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),c.a.createElement(C.a,{style:{width:"100%"}},c.a.createElement("label",null,"\uc124\uc815"),c.a.createElement(z,null),c.a.createElement(q,{errorHandleJdbcSource:M,jdbcId:k,jdbcName:_,jdbcDriver:V,handleJdbcURL:function(){var e="";e=null!==X.current.value&&X.current.value.length>0?T[E]+H.current.value+":"+G.current.value+"/"+K.current.value+"?"+X.current.value:T[E]+H.current.value+":"+G.current.value+"/"+K.current.value,te(e)},setProvider:function(e,t){V.current.value=B[e.target.value],v(e.target.value)},jdbcAddr:H,jdbcPort:G,jdbcDB:K,jdbcUser:Q,jdbcPassword:Y,jdbcParams:X,jdbcURL:ee})),c.a.createElement(x.a,null,c.a.createElement(w.a,{variant:"contained",color:"default",onClick:re},"\ub2eb\uae30"),c.a.createElement(w.a,{variant:"outlined",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===k.current.value.length&&(a=!0,r.id=!0),0===_.current.value.length&&(a=!0,r.name=!0),0===V.current.value.length&&(a=!0,r.driver=!0),0===H.current.value.length&&(a=!0,r.address=!0),0===G.current.value.length&&(a=!0,r.port=!0),0===Q.current.value.length&&(a=!0,r.user=!0),0===Y.current.value.length&&(a=!0,r.password=!0),0===K.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)W(r);else{var n={};n.driver=V.current.value,n.user=Q.current.value,n.password=Y.current.value,n.url=ee,t(Object(P.c)(n)).then((function(){A(!0)}))}}},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8"),c.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===k.current.value.length&&(a=!0,r.id=!0),0===_.current.value.length&&(a=!0,r.name=!0),0===V.current.value.length&&(a=!0,r.driver=!0),0===H.current.value.length&&(a=!0,r.address=!0),0===G.current.value.length&&(a=!0,r.port=!0),0===Q.current.value.length&&(a=!0,r.user=!0),0===Y.current.value.length&&(a=!0,r.password=!0),0===K.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)W(r);else{var n={};n.id=k.current.value,n.name=_.current.value,n.provider=E,n.driver=V.current.value,n.address=H.current.value,n.port=G.current.value,n.db_name=K.current.value,n.user=Q.current.value,n.password=Y.current.value,n.params=X.current.value,n.url=ee,h(!1),t(Object(P.a)(n))}}},"\ucd94\uac00"))),c.a.createElement(U.a,{open:y,autoHideDuration:3e3,onClose:function(){ae(!1),i.message=!1}},i.message?c.a.createElement(p.a,{elevation:6,variant:"filled",severity:"info"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc131\uacf5"," "):c.a.createElement(p.a,{elevation:6,variant:"filled",severity:"error"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc2e4\ud328")))))}t.default=Object(d.b)((function(e){return{authUser:e.dsearchReducers.authUser,JdbcList:e.jdbcReducers.JdbcList,JdbcAccessTest:e.jdbcReducers.JdbcAccessTest,changedJdbcList:e.jdbcReducers.changedJdbcList}}))((function(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,n=e.JdbcAccessTest,i=e.changedJdbcList;return Object(l.useEffect)((function(){t(Object(P.d)())}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"JDBC"}),c.a.createElement(A.a,{variant:"h3",gutterBottom:!0,display:"inline"},"JDBC"),c.a.createElement(z,{my:6}),c.a.createElement(M.a,{container:!0,spacing:6},c.a.createElement(M.a,{item:!0,xs:12},c.a.createElement(H,{dispatch:t,authUser:a,JdbcList:r,JdbcAccessTest:n,changedJdbcList:i}))))}))},753:function(e,t,a){"use strict";var r={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=r},837:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return d}));var r=a(3),n=new(a(72).a),l=function(){return function(e){return n.call({uri:"/jdbc/list",method:"GET"}).then((function(t){return e({type:r.Q,payload:t.data})}))}},c=function(e){return function(t){return n.call({uri:"/jdbc/",method:"POST",data:e}).then((function(e){return t({type:r.M,payload:e.data}),console.log(e),!0}))}},i=function(e){return function(t){return n.call({uri:"/jdbc/add",method:"PUT",data:e}).then((function(e){return t({type:r.N,payload:e.data})}))}},u=function(e){return function(t){return n.call({uri:"/jdbc/delete/"+e,method:"DELETE"}).then((function(e){return t({type:r.O,payload:e.data})}))}},d=function(e,t){return function(a){return n.call({uri:"/jdbc/update/"+e,method:"POST",data:t}).then((function(e){return a({type:r.R,payload:e.data})}))}}}}]);
//# sourceMappingURL=59.10f6de79.chunk.js.map