(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[55],{1384:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(59),l=a(0),c=a.n(l),i=a(11),u=a(38),s=a(131),d=a.n(s),o=a(713),m=a(658),p=a(674),b=a(712),h=a(695),f=a(686),E=a(680),v=a(685),j=a(684),g=a(757),y=a(687),w=a(607),O=a(718),R=a(719),A=a(720),C=a(721),x=a(598),S=a(170),J=a(999),D=a(604),L=a(717),I=a(675),U=a(654),M=a(648),k=a(661),P=a(833),W=["Altibase","Oracle","Mysql"],B={Altibase:"Altibase.jdbc.driver.AltibaseDriver",Oracle:"oracle.jdbc.driver.OracleDriver",Mysql:"com.mysql.cj.jdbc.Driver"},T={Altibase:"jdbc:Altibase://",Oracle:"jdbc:oracle:thin:@",Mysql:"jdbc:mysql://"},N=Object(i.c)(p.a)(k.a),z=Object(i.c)(b.a)(k.a),_=Object(i.c)(h.a)(k.a),F=[{id:"no",label:"#",sorting:!1},{id:"id",label:"\uc544\uc774\ub514",sorting:!0},{id:"name",label:"\uc774\ub984",sorting:!0},{id:"driver",label:"\ub4dc\ub77c\uc774\ubc84",sorting:!0},{id:"url",label:"URL",sorting:!1},{id:"user",label:"\uc0ac\uc6a9\uc790",sorting:!1},{id:"password",label:"\ube44\ubc00\ubc88\ud638",sorting:!1},{id:"test",label:"\ud14c\uc2a4\ud2b8",sorting:!1}];function V(e){var t=e.dispatch,a=e.authUser,i=e.JdbcList,u=e.handleAccessFlag,s=Object(l.useState)(!1),d=Object(n.a)(s,2),o=d[0],m=d[1],p=Object(l.useState)(-1),b=Object(n.a)(p,2),h=b[0],x=b[1],S=Object(l.useState)(!1),J=Object(n.a)(S,2),D=J[0],L=J[1],I=Object(l.useState)(""),U=Object(n.a)(I,2),M=U[0],k=U[1],W=Object(l.useState)("asc"),B=Object(n.a)(W,2),T=B[0],N=B[1],_=Object(l.useRef)(""),V=Object(l.useRef)(""),H=Object(l.useRef)(""),G=Object(l.useRef)(""),K=Object(l.useRef)(""),Y=Object(l.useRef)(""),Q=function(e){m(!1)};var X=((i.hits||{}).hits||[]).sort((function(e,t){return((e.sourceAsMap||{}).id||"")>((t.sourceAsMap||{}).id||"")?1:((e.sourceAsMap||{}).id||"")<((t.sourceAsMap||{}).id||"")?-1:0})).map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{no:t})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null,c.a.createElement("colgroup",null,c.a.createElement("col",{width:"1%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"13%"}),c.a.createElement("col",{width:"20%"}),c.a.createElement("col",{width:"30%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"10%"}),c.a.createElement("col",{width:"5%"})),c.a.createElement(E.a,null,c.a.createElement(v.a,null,F.map((function(e){return c.a.createElement(j.a,{align:"center",key:e.id},e.sorting?c.a.createElement(g.a,{active:M===e.id,direction:M===e.id?T:"asc",onClick:function(t){k(e.id);var a=M===e.id&&"asc"===T;N(a?"desc":"asc")}},e.label):e.label)})),a.role.index?c.a.createElement(j.a,{align:"center"}," \uc561\uc158"):null)),c.a.createElement(y.a,null,X.length>0?X.sort((function(e,t){if(M&&T){var a=(e.sourceAsMap||{})[M]||"",r=(t.sourceAsMap||{})[M]||"";return"asc"===T?a>r?1:-1:a>r?-1:1}return 0})).map((function(e,r){for(var n=e.sourceAsMap.password,l="",i=0;i<n.length-3;i++)l+="*";return n=n.substring(0,2)+l+n.substring(n.length-1,n.length),c.a.createElement(v.a,{key:e.sourceAsMap.id},c.a.createElement(j.a,{style:{whiteSpace:"nowrap"}},e.no+1),c.a.createElement(j.a,{style:{wordBreak:"break-word"}},e.sourceAsMap.id),c.a.createElement(j.a,{style:{wordBreak:"break-word"}},e.sourceAsMap.name),c.a.createElement(j.a,{style:{wordBreak:"break-all"}},e.sourceAsMap.driver),c.a.createElement(j.a,{style:{wordBreak:"break-all"}},e.sourceAsMap.url),c.a.createElement(j.a,{style:{whiteSpace:"nowrap"}},e.sourceAsMap.user),c.a.createElement(j.a,{style:{whiteSpace:"nowrap"}},n),c.a.createElement(j.a,{style:{whiteSpace:"nowrap"}},c.a.createElement(w.a,{variant:"outlined",color:"primary",disabled:D,onClick:function(){return function(e){L(!0);var a={};a.driver=e.sourceAsMap.driver,a.user=e.sourceAsMap.user,a.password=e.sourceAsMap.password,a.url=e.sourceAsMap.url,t(Object(P.c)(a)),setTimeout((function(){L(!1),u(!0)}),500)}(e)}}," \uc5f0\uacb0\ud14c\uc2a4\ud2b8 ")),a.role.index?c.a.createElement(j.a,null,c.a.createElement(w.a,{variant:"outlined",id:r,color:"primary",style:{whiteSpace:"nowrap"},onClick:function(){return x(r),void m(!0)}},"\uc218\uc815")):c.a.createElement(j.a,null))})):c.a.createElement(v.a,null,c.a.createElement(j.a,{align:"center",colSpan:9},"\ud604\uc7ac \ub4f1\ub85d\ub41c JDBC\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")))),c.a.createElement(O.a,{open:o,onClose:Q},c.a.createElement(R.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),c.a.createElement(A.a,null,c.a.createElement("label",null,"\uc124\uc815"),c.a.createElement(z,null),c.a.createElement(q,{JdbcList:i,JdbcListIndex:h,editId:_,editName:V,editDriver:H,editUser:G,editPassword:K,editURL:Y})),c.a.createElement(C.a,null,c.a.createElement(w.a,{variant:"contained",style:{backgroundColor:"red",color:"white"},onClick:function(e){var a=i.hits.hits[h];t(Object(P.b)(a.id)),m(!1)}},"\uc0ad\uc81c"),c.a.createElement("div",{style:{flex:"1 0 0"}}),c.a.createElement(w.a,{variant:"contained",color:"default",onClick:Q},"\ub2eb\uae30"),c.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(e){var a=i.hits.hits[h],r={};r.id=_.current.value,r.name=V.current.value,r.driver=H.current.value,r.user=G.current.value,0!==K.current.value.length&&(r.password=K.current.value),r.url=Y.current.value;t(Object(P.e)(a.id,r)),m(!1)}},"\uc800\uc7a5"))))}function q(e){var t=e.JdbcList,a=e.JdbcListIndex,r=e.editId,n=e.editName,l=e.editDriver,i=e.editURL,u=e.editUser,s=e.editPassword,d=t.hits.hits[a];return c.a.createElement(x.a,{p:2},c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),c.a.createElement(_,{placeholder:"ID",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).id,inputRef:r})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc774\ub984"),c.a.createElement(_,{placeholder:"Name",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).name,inputRef:n})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),c.a.createElement(_,{placeholder:"Driver",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).driver,inputRef:l})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"URL"),c.a.createElement(_,{placeholder:"jdbc:Altibase://localhost:3306/",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).url,inputRef:i})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),c.a.createElement(_,{placeholder:"USER",fullWidth:!0,variant:"outlined",defaultValue:((d||{}).sourceAsMap||{}).user,inputRef:u})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),c.a.createElement(_,{placeholder:"PASSWORD (LEAVE BLANK IF YOU DON'T WANT CHANGE)",fullWidth:!0,variant:"outlined",type:"password",inputRef:s})))}function H(e){var t=e.errorHandleJdbcSource,a=e.jdbcId,r=e.jdbcName,n=e.jdbcDriver,l=e.jdbcAddr,i=e.jdbcPort,u=e.jdbcDB,s=e.jdbcUser,d=e.jdbcPassword,o=e.jdbcParams,m=e.jdbcURL,p=e.setProvider,b=e.handleJdbcURL;return c.a.createElement(x.a,{p:2},c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc544\uc774\ub514"),c.a.createElement(_,{error:t.id,id:"jdbcSourceId",size:"small",placeholder:"ID",fullWidth:!0,variant:"outlined",inputRef:a})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc774\ub984"),c.a.createElement(_,{error:t.name,id:"jdbcSourceName",size:"small",placeholder:"Name",fullWidth:!0,variant:"outlined",inputRef:r})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"DB\uc81c\uacf5\uc790"),c.a.createElement(J.a,{id:"jdbcSourceDriver",fullWidth:!0,onChange:p,defaultValue:""},W.map((function(e,t){return c.a.createElement(D.a,{key:e,value:e}," ",e," Driver")})))),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ub4dc\ub77c\uc774\ubc84"),c.a.createElement(_,{error:t.driver,id:"jdbcSourceDbSupport",size:"small",fullWidth:!0,variant:"outlined",inputRef:n,onChange:b})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ud638\uc2a4\ud2b8\uc8fc\uc18c"),c.a.createElement(_,{error:t.address,id:"jdbcSourceHostAddress",size:"small",placeholder:"127.0.0.1",fullWidth:!0,variant:"outlined",inputRef:l,onChange:b})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ud3ec\ud2b8"),c.a.createElement(_,{error:t.port,id:"jdbcSourcePort",size:"small",placeholder:"3306",fullWidth:!0,variant:"outlined",inputRef:i,onChange:b})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"DB\uba85"),c.a.createElement(_,{error:t.db_name,id:"jdbcSourceDbName",size:"small",fullWidth:!0,variant:"outlined",inputRef:u,onChange:b})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\uc0ac\uc6a9\uc790"),c.a.createElement(_,{error:t.user,id:"jdbcSourceUser",size:"small",placeholder:"USER",fullWidth:!0,variant:"outlined",inputRef:s})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"\ube44\ubc00\ubc88\ud638"),c.a.createElement(_,{error:t.password,id:"jdbcSourcePassword",type:"password",size:"small",placeholder:"PASSWORD",fullWidth:!0,variant:"outlined",inputRef:d})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"JDBC\ud30c\ub77c\ubbf8\ud130"),c.a.createElement(_,{error:t.params,id:"jdbcSourceParams",size:"small",fullWidth:!0,variant:"outlined",inputRef:o,placeholder:"characterEncoding=utf-8",onChange:b})),c.a.createElement(x.a,{display:"flex",m:3,alignItems:"center",justifyContent:"right"},c.a.createElement(S.a,{style:{width:"150px"}},"URL"),c.a.createElement(_,{error:t.url,id:"jdbcSourceURL",size:"small",placeholder:"jdbc:mysql://",fullWidth:!0,variant:"outlined",value:m})))}function G(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,i=e.JdbcAccessTest,u=e.changedJdbcList,s=Object(l.useState)(!1),d=Object(n.a)(s,2),p=d[0],b=d[1],h=Object(l.useState)(""),f=Object(n.a)(h,2),E=f[0],v=f[1],j=Object(l.useState)(!1),g=Object(n.a)(j,2),y=g[0],S=g[1],J=Object(l.useState)({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),D=Object(n.a)(J,2),M=D[0],k=D[1];u&&o.a.sleep(1e3).then((function(){t(Object(P.d)())}));var W=Object(l.useRef)(""),_=Object(l.useRef)(""),F=Object(l.useRef)(""),q=Object(l.useRef)(""),G=Object(l.useRef)(""),K=Object(l.useRef)(""),Y=Object(l.useRef)(""),Q=Object(l.useRef)(""),X=Object(l.useRef)(""),Z=Object(l.useState)(""),$=Object(n.a)(Z,2),ee=$[0],te=$[1];function ae(e){S(e)}var re=function(e){b(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{align:"right"},a.role.index?c.a.createElement(L.a,{onClick:function(e){k({id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1}),b(!0)},style:{cursor:"pointer"},color:"primary"},"JDBC \ucd94\uac00"):c.a.createElement(c.a.Fragment,null)),c.a.createElement("br",null),c.a.createElement(N,{mb:6},c.a.createElement(I.a,null,c.a.createElement(V,{dispatch:t,authUser:a,JdbcList:r,handleAccessFlag:ae,changedJdbcList:u}),c.a.createElement(O.a,{open:p,onClose:re},c.a.createElement(R.a,{id:"dialog-title"},"JDBC \uc18c\uc2a4"),c.a.createElement(A.a,{style:{width:"100%"}},c.a.createElement("label",null,"\uc124\uc815"),c.a.createElement(z,null),c.a.createElement(H,{errorHandleJdbcSource:M,jdbcId:W,jdbcName:_,jdbcDriver:F,handleJdbcURL:function(){var e="";e=null!==X.current.value&&X.current.value.length>0?T[E]+q.current.value+":"+G.current.value+"/"+K.current.value+"?"+X.current.value:T[E]+q.current.value+":"+G.current.value+"/"+K.current.value,te(e)},setProvider:function(e,t){F.current.value=B[e.target.value],v(e.target.value)},jdbcAddr:q,jdbcPort:G,jdbcDB:K,jdbcUser:Y,jdbcPassword:Q,jdbcParams:X,jdbcURL:ee})),c.a.createElement(C.a,null,c.a.createElement(w.a,{variant:"contained",color:"default",onClick:re},"\ub2eb\uae30"),c.a.createElement(w.a,{variant:"outlined",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===W.current.value.length&&(a=!0,r.id=!0),0===_.current.value.length&&(a=!0,r.name=!0),0===F.current.value.length&&(a=!0,r.driver=!0),0===q.current.value.length&&(a=!0,r.address=!0),0===G.current.value.length&&(a=!0,r.port=!0),0===Y.current.value.length&&(a=!0,r.user=!0),0===Q.current.value.length&&(a=!0,r.password=!0),0===K.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)k(r);else{var n={};n.driver=F.current.value,n.user=Y.current.value,n.password=Q.current.value,n.url=ee,t(Object(P.c)(n)).then((function(){S(!0)}))}}},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8"),c.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(e){var a=!1,r={id:!1,name:!1,driver:!1,address:!1,port:!1,db_name:!1,user:!1,password:!1,params:!1,url:!1};if(0===W.current.value.length&&(a=!0,r.id=!0),0===_.current.value.length&&(a=!0,r.name=!0),0===F.current.value.length&&(a=!0,r.driver=!0),0===q.current.value.length&&(a=!0,r.address=!0),0===G.current.value.length&&(a=!0,r.port=!0),0===Y.current.value.length&&(a=!0,r.user=!0),0===Q.current.value.length&&(a=!0,r.password=!0),0===K.current.value.length&&(a=!0,r.db_name=!0),0===ee.length&&(a=!0,r.url=!0),a)k(r);else{var n={};n.id=W.current.value,n.name=_.current.value,n.provider=E,n.driver=F.current.value,n.address=q.current.value,n.port=G.current.value,n.db_name=K.current.value,n.user=Y.current.value,n.password=Q.current.value,n.params=X.current.value,n.url=ee,b(!1),t(Object(P.a)(n))}}},"\ucd94\uac00"))),c.a.createElement(U.a,{open:y,autoHideDuration:3e3,onClose:function(){ae(!1),i.message=!1}},i.message?c.a.createElement(m.a,{elevation:6,variant:"filled",severity:"info"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc131\uacf5"," "):c.a.createElement(m.a,{elevation:6,variant:"filled",severity:"error"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 \uc2e4\ud328")))))}t.default=Object(u.b)((function(e){return{authUser:e.dsearchReducers.authUser,JdbcList:e.jdbcReducers.JdbcList,JdbcAccessTest:e.jdbcReducers.JdbcAccessTest,changedJdbcList:e.jdbcReducers.changedJdbcList}}))((function(e){var t=e.dispatch,a=e.authUser,r=e.JdbcList,n=e.JdbcAccessTest,i=e.changedJdbcList;return Object(l.useEffect)((function(){t(Object(P.d)())}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{title:"JDBC"}),c.a.createElement(S.a,{variant:"h3",gutterBottom:!0,display:"inline"},"JDBC"),c.a.createElement(z,{my:6}),c.a.createElement(M.a,{container:!0,spacing:6},c.a.createElement(M.a,{item:!0,xs:12},c.a.createElement(G,{dispatch:t,authUser:a,JdbcList:r,JdbcAccessTest:n,changedJdbcList:i}))))}))},713:function(e,t,a){"use strict";var r={sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};t.a=r},833:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return s}));var r=a(4),n=new(a(76).a),l=function(){return function(e){return n.call({uri:"/jdbc/list",method:"GET"}).then((function(t){return e({type:r.R,payload:t.data})}))}},c=function(e){return function(t){return n.call({uri:"/jdbc/",method:"POST",data:e}).then((function(e){return t({type:r.N,payload:e.data}),console.log(e),!0}))}},i=function(e){return function(t){return n.call({uri:"/jdbc/add",method:"PUT",data:e}).then((function(e){return t({type:r.O,payload:e.data})}))}},u=function(e){return function(t){return n.call({uri:"/jdbc/delete/"+e,method:"DELETE"}).then((function(e){return t({type:r.P,payload:e.data})}))}},s=function(e,t){return function(a){return n.call({uri:"/jdbc/update/"+e,method:"POST",data:t}).then((function(e){return a({type:r.S,payload:e.data})}))}}}}]);
//# sourceMappingURL=55.1b6f5dd9.chunk.js.map