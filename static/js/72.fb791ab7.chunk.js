(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[72],{1042:function(e,t,a){"use strict";a.r(t);var n=a(894),r=a(16),l=a(0),c=a.n(l),i=a(14),u=a(3),o=new(a(71).a),s=a(134),m=a.n(s),d=a(94),E=a(771),f=a(684),h=a(713),g=a(665),p=a(689),v=a(692),b=a(378),x=a(683),y=a(99),j=a(690),T=a(691),O=a(618),S=a(723),_=a(685),w=a(588),k=a(656),z=a(655),C=a(688),F=a(13),D=a(20),B=a(39),M=a(895),I=a.n(M);function R(){var e=Object(r.a)(["\n    min-width: 25px;\n    max-width: 25px;\n    width: 25px;\n    margin: 2px;\n    min-height: 25px;\n    max-height: 25px;\n    height: 25px;\n    font-size: 0.9em;\n    padding: 2px;\n"]);return R=function(){return e},e}function L(){var e=Object(r.a)(["\n    border: 1px solid rgba(224, 224, 224, 1);\n    padding: 3px;\n"]);return L=function(){return e},e}var N=Object(C.a)((function(e){return{headerField:{fontSize:"1.2em",fontWeight:"bold"},headerValue:{fontSize:"1.2em",fontWeight:"bold"},primaryShard:{border:"1px solid"},replicaShard:{border:"1px dashed"},margin:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),A=Object(F.a)({root:{height:10,backgroundColor:Object(D.i)("#A9D0F5",.5)},bar:{borderRadius:20,backgroundColor:"#013ADF"}})(E.a),U=Object(i.c)(f.a)(w.a,k.a),W=Object(i.c)(h.a)(w.a,k.a),J=Object(i.c)(g.a)(w.a,k.a),X=Object(i.c)(p.a)(w.a,k.a,z.a),q=Object(i.c)(v.a)(L()),G=(Object(i.c)(b.a)(R()),function(e,t){return((new Date).getTime()-new Date(e).getTime()).valueOf()/t*100}),H=function(e){var t=((new Date).getTime()-new Date(e).getTime())/3600/1e3*60,a=Math.floor(t/60),n=Math.floor(t%60);if(a>=720){var r=a/30/24;return Math.ceil(r)+"\uac1c\uc6d4"}if(a>=24){var l=a/24;return Math.ceil(l)+"\uc77c"}return 0!==a&&0!==n?a+"\uc2dc\uac04 "+n+"\ubd84":0!==a&&0===n?a+"\uc2dc\uac04":n+"\ubd84"};function V(e){var t=e.status,a=e.indices,n=(N(),Object(d.f)());var r=[];return Object.values(t).map((function(e){if("green"!==e.health){var t="";Object.values(a).forEach((function(a){a.index===e.index&&(t=a.uuid)}));var n=e;n.uuid=t,r.push(n)}})),c.a.createElement(U,null,c.a.createElement(x.a,null,c.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc8fc\uc758\ud560 \uc778\ub371\uc2a4"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(j.a,null,c.a.createElement(T.a,null,r.length>0?r.map((function(e){return c.a.createElement(X,{key:e.index},c.a.createElement(q,{align:"center"},c.a.createElement(O.a,{display:"flex",justifyContent:"left",alignItems:"center"},c.a.createElement(I.a,{style:{color:e.health,marginRight:"5px"}}),c.a.createElement(S.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void n.push("./indices/".concat(t));var t}},c.a.createElement(y.a,{variant:"h5"},e.index)))),c.a.createElement(q,{align:"center"},"yellow"===e.health?c.a.createElement("font",{color:"orange"}," \ub808\ud50c\ub9ac\uce74 \uc0e4\ub4dc \uc774\uc0c1 "):c.a.createElement("font",{color:"red"}," \ud504\ub77c\uc774\uba38\ub9ac \uc0e4\ub4dc \uc774\uc0c1 ")))})):c.a.createElement(X,null,c.a.createElement(q,{colSpan:2,style:{border:"0px"}},c.a.createElement(O.a,{align:"center",style:{height:"24px"}})))))))}function Y(e){var t=e.result,a=e.running,r=(e.status,e.indices),l=Object(d.f)(),i=N(),u=[],o={};if(t.hits.hits.length>=0){var s,m=Object(n.a)(t.hits.hits);try{for(m.s();!(s=m.n()).done;){var E=s.value;o[E._source.index]=E._source}}catch(v){m.e(v)}finally{m.f()}}var f=Object.keys(a);if(0!==f.length){var h,g=Object(n.a)(f);try{var p=function(){var e=h.value,t=a[e].server;if(void 0!==t){var n="";if(Object.values(r).forEach((function(e){e.index===t.index&&(n=e.uuid)})),void 0!==o[t.index]&&void 0!==o[t.index].endTime&&void 0!==o[t.index].startTime&&void 0!==o[t.index].docSize){var l=o[t.index].endTime-o[t.index].startTime,c=o[t.index].docSize;G(t.startTime,l),u.push({startTime:t.startTime,index:t.index,estimatedTime:l,docSize:c,uuid:n})}else u.push({startTime:t.startTime,index:t.index,uuid:n})}};for(g.s();!(h=g.n()).done;)p()}catch(v){g.e(v)}finally{g.f()}}return c.a.createElement(U,null,c.a.createElement(x.a,null,c.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uc2e4\ud589\uc911"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(j.a,null,c.a.createElement(T.a,null,0===u.length?c.a.createElement(X,null,c.a.createElement(q,{align:"center"}," ",c.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",c.a.createElement(y.a,null,"\ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc0c9\uc778 \uc791\uc5c5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")),"  ")):Object.values(u).map((function(e){return c.a.createElement(X,{key:e.index},c.a.createElement(q,{align:"center"},c.a.createElement(S.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void l.push("./indices/".concat(t));var t}},c.a.createElement(y.a,{variant:"h5"},e.index))),c.a.createElement(q,{align:"center"},c.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"},c.a.createElement(O.a,{width:"100%",mr:1},c.a.createElement(A,{className:i.margin,variant:"determinate",color:"secondary",value:Number(G(e.startTime,e.estimatedTime))})),c.a.createElement(O.a,{minWidth:15},c.a.createElement(y.a,{variant:"body2",color:"textSecondary"}," "))),void 0!==e.estimatedTime?c.a.createElement(c.a.Fragment,null," \uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : ",function(e){e/=1e3;var t=Math.floor(e/3600),a=Math.ceil((e-3600*t)/60);return 0!==t?t+"\uc2dc\uac04 "+a+"\ubd84":a+"\ubd84"}(e.estimatedTime)," ",c.a.createElement("br",null)," "):c.a.createElement(c.a.Fragment,null,"\uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : - ",c.a.createElement("br",null)),void 0!==e.docSize?c.a.createElement(c.a.Fragment,null," \uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : ",e.docSize," ",c.a.createElement("br",null)," "):c.a.createElement(c.a.Fragment,null,"\uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : - ",c.a.createElement("br",null)),"\uc2dc\uc791\uc2dc\uac04 : ",H(e.startTime)," \uc804 \uc2dc\uc791",c.a.createElement("br",null)))}))))))}function K(e){var t=e.result,a=e.running,n=e.status,r=e.indices;N();return c.a.createElement(J,{container:!0,spacing:3},c.a.createElement(J,{item:!0,xs:6},c.a.createElement(Y,{result:t,running:a,status:n,indices:r})),c.a.createElement(J,{item:!0,xs:6},c.a.createElement(V,{status:n,indices:r})))}function P(e){var t=e.result,a=e.alias,n=e.indices,r=Object(d.f)(),l=[];return Object.values(t.hits.hits).forEach((function(e){var t="";Object.values(a).forEach((function(a){e._source.index===a.index&&(t=a.alias)}));var r="";Object.values(n).forEach((function(t){t.index===e._source.index&&(r=t.uuid)})),l.push({index:e._source.index,alias:t,status:e._source.status,startTime:e._source.startTime,endTime:e._source.endTime,docSize:e._source.docSize,storage:e._source.store,uuid:r})})),c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{mt:2,style:{overflow:"auto"}},c.a.createElement(x.a,null,c.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uacb0\uacfc"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement(j.a,null,c.a.createElement(_.a,null,c.a.createElement(X,null,c.a.createElement(q,{align:"center"},"\uc0c9\uc778 \uacb0\uacfc"),c.a.createElement(q,{align:"center"},"\uc778\ub371\uc2a4"),c.a.createElement(q,{align:"center"},"\ubcc4\uce6d"),c.a.createElement(q,{align:"center"},"\ucd5c\uadfc \uc131\uacf5"),c.a.createElement(q,{align:"center"},"\uc18c\uc694 \uc2dc\uac04"),c.a.createElement(q,{align:"center"},"\ubb38\uc11c\uc218"),c.a.createElement(q,{align:"center"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"))),c.a.createElement(T.a,null,0===l.length?c.a.createElement(X,null,c.a.createElement(q,{colSpan:7,align:"center"}," ",c.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",c.a.createElement(y.a,null,"\uc804\uccb4 \uc0c9\uc778 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))," ")):Object.values(l).map((function(e){return c.a.createElement(X,{key:e.index},c.a.createElement(q,{align:"center"},c.a.createElement(O.a,{display:"flex",justifyContent:"left",alignItems:"center"},e.status&&"SUCCESS"===e.status?c.a.createElement(I.a,{color:"primary"}):c.a.createElement(I.a,{style:{color:"red"}}),c.a.createElement(y.a,{style:{marginLeft:"5px"}},e.status))),c.a.createElement(q,{align:"center"},c.a.createElement(S.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void r.push("./indices/".concat(t));var t}},c.a.createElement(y.a,{variant:"h5"},e.index))),c.a.createElement(q,{align:"center"},e.alias),c.a.createElement(q,{align:"center"},c.a.createElement("b",null,H(e.endTime)," \uc804 "),c.a.createElement("br",null),function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}(e.endTime)),c.a.createElement(q,{align:"center"},function(e){e/=1e3;var t=Math.floor(e/3600),a=Math.ceil((e-3600*t)/60);return 0!==t?t+"\uc2dc\uac04 "+a+"\ubd84":a+"\ubd84"}(e.endTime-e.startTime)),c.a.createElement(q,{align:"center"},void 0===(t=e.docSize)||null===t?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),c.a.createElement(q,{align:"center"},e.storage));var t})))))))}var Q=null;t.default=Object(B.b)((function(e){return{result:e.dashBoardReducers.result,running:e.dashBoardReducers.running,status:e.dashBoardReducers.status,alias:e.dashBoardReducers.alias,indices:e.dashBoardReducers.indices}}))((function(e){var t=e.dispatch,a=e.result,n=e.running,r=e.status,i=e.alias,s=e.indices;function d(){t((function(e){return o.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",data:{query:{bool:{minimum_should_match:1,should:[{term:{jobType:"FULL_INDEX"}},{term:{"jobType.keyword":"FULL_INDEX"}}]}},sort:[{endTime:{order:"desc"}}],size:50}}).then((function(t){return e({type:u.D,payload:t.data})})).catch((function(e){return console.error(e)}))})),Q=setTimeout((function(){d()}),18e4)}return N(),Object(l.useEffect)((function(){return t((function(e){return o.call({uri:"/dashboard/indexing"}).then((function(t){return e({type:u.fb,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return o.call({uri:"/elasticsearch/_cat/indices?format=json"}).then((function(t){return e({type:u.G,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return o.call({uri:"/elasticsearch/_cat/aliases?format=json"}).then((function(t){return e({type:u.x,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return o.call({uri:"/elasticsearch/_cat/indices",params:{format:"json"}}).then((function(t){return e({type:u.p,payload:t.data})})).catch((function(e){return console.error(e)}))})),d(),function(){null!=Q&&clearTimeout(Q)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"\ub300\uc2dc\ubcf4\ub4dc"}),c.a.createElement(y.a,{variant:"h3",gutterBottom:!0,display:"inline"}," \ub300\uc2dc\ubcf4\ub4dc "),c.a.createElement(W,{my:6}),c.a.createElement(K,{result:a,running:n,status:r,indices:s}),c.a.createElement(P,{result:a,alias:i,status:r,indices:s}))}))}}]);
//# sourceMappingURL=72.fb791ab7.chunk.js.map