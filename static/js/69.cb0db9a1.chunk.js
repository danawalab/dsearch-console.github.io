(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[69],{1033:function(e,t,n){"use strict";n.r(t);var a=n(62),r=n(887),c=n(17),l=n(0),i=n.n(l),u=n(14),o=n(4),s=new(n(83).a),m=n(135),d=n.n(m),E=n(95),f=n(770),h=n(685),g=n(715),p=n(664),v=n(692),b=n(691),x=n(686),y=n(178),j=n(693),T=n(694),S=n(615),O=n(720),_=n(687),F=n(676),k=n(638),z=n(637),w=n(695),C=n(12),D=n(20),L=n(39),M=n(888),P=n.n(M);function B(){var e=Object(c.a)(["\n    border: 1px solid rgba(224, 224, 224, 1);\n    padding: 3px;\n"]);return B=function(){return e},e}var I=Object(w.a)((function(e){return{headerField:{fontSize:"1.2em",fontWeight:"bold"},headerValue:{fontSize:"1.2em",fontWeight:"bold"},primaryShard:{border:"1px solid"},replicaShard:{border:"1px dashed"},margin:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),R=Object(C.a)({root:{height:10,backgroundColor:Object(D.i)("#A9D0F5",.5)},bar:{borderRadius:20,backgroundColor:"#013ADF"}})(f.a),N=Object(u.c)(h.a)(F.a,k.a),A=Object(u.c)(g.a)(F.a,k.a),X=Object(u.c)(p.a)(F.a,k.a),U=Object(u.c)(v.a)(F.a,k.a,z.a),W=Object(u.c)(b.a)(B()),G=function(e,t){return((new Date).getTime()-new Date(e).getTime()).valueOf()/t*100},H=function(e){var t=((new Date).getTime()-new Date(e).getTime())/3600/1e3*60,n=Math.floor(t/60),a=Math.floor(t%60);if(n>=720){var r=n/30/24;return Math.ceil(r)+"\uac1c\uc6d4"}if(n>=24){var c=n/24;return Math.ceil(c)+"\uc77c"}return 0!==n&&0!==a?n+"\uc2dc\uac04 "+a+"\ubd84":0!==n&&0===a?n+"\uc2dc\uac04":a+"\ubd84"},J=function(e){e/=1e3;var t=Math.floor(e/3600),n=Math.ceil((e-3600*t)/60);return n>=60&&(t+=1,n=0),0!==t?t+"\uc2dc\uac04 "+n+"\ubd84":n+"\ubd84"};function q(e){var t=e.status,n=e.indices,a=Object(E.f)();var r=[];return Object.values(t).map((function(e){if("green"!==e.health){var t="";Object.values(n).forEach((function(n){n.index===e.index&&(t=n.uuid)}));var a=e;a.uuid=t,r.push(a)}return e})),i.a.createElement(N,null,i.a.createElement(x.a,null,i.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc8fc\uc758\ud560 \uc778\ub371\uc2a4"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement(T.a,null,r.length>0?r.map((function(e){return i.a.createElement(U,{key:e.index},i.a.createElement(W,{align:"center"},i.a.createElement(S.a,{display:"flex",justifyContent:"left",alignItems:"center"},i.a.createElement(P.a,{style:{color:e.health,marginRight:"5px"}}),i.a.createElement(O.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void a.push("./indices/".concat(t));var t}},i.a.createElement(y.a,{variant:"h5"},e.index)))),i.a.createElement(W,{align:"center"},"yellow"===e.health?i.a.createElement("font",{color:"orange"}," \ub808\ud50c\ub9ac\uce74 \uc0e4\ub4dc \uc774\uc0c1 "):i.a.createElement("font",{color:"red"}," \ud504\ub77c\uc774\uba38\ub9ac \uc0e4\ub4dc \uc774\uc0c1 ")))})):i.a.createElement(U,null,i.a.createElement(W,{colSpan:2,style:{border:"0px"}},i.a.createElement(S.a,{align:"center",style:{height:"24px"}})))))))}function V(e){var t=e.result,n=e.running,a=(e.status,e.indices),c=e.indexPercent,l=Object(E.f)(),u=I(),o=[],s={};if(t.hits.hits.length>=0){var m,d=Object(r.a)(t.hits.hits);try{for(d.s();!(m=d.n()).done;){var f=m.value;s[f._source.index]=f._source}}catch(b){d.e(b)}finally{d.f()}}var h=Object.keys(n);if(0!==h.length){var g,p=Object(r.a)(h);try{var v=function(){var e=g.value,t=n[e].server;if(void 0!==t){var r="";Object.values(a).forEach((function(e){e.index===t.index&&(r=e.uuid)}));var c=t.nextStep,l=t.currentStep;if(l="FULL_INDEX"===l?"\uc0c9\uc778":"PROPAGATE"===l?"\uc804\ud30c":"EXPOSE"===l?"\uad50\uccb4":"",void 0!==s[t.index]&&void 0!==s[t.index].endTime&&void 0!==s[t.index].startTime&&void 0!==s[t.index].docSize){var i=s[t.index].endTime-s[t.index].startTime,u=s[t.index].docSize;G(t.startTime,i),o.push({startTime:t.startTime,index:t.index,estimatedTime:i,docSize:u,uuid:r,currentStep:l,nextStep:c})}else o.push({startTime:t.startTime,index:t.index,uuid:r,currentStep:l,nextStep:c})}};for(p.s();!(g=p.n()).done;)v()}catch(b){p.e(b)}finally{p.f()}}return i.a.createElement(N,null,i.a.createElement(x.a,null,i.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uc2e4\ud589\uc911"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement(T.a,null,0===o.length?i.a.createElement(U,null,i.a.createElement(W,{align:"center"}," ",i.a.createElement(S.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",i.a.createElement(y.a,null,"\ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc0c9\uc778 \uc791\uc5c5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")),"  ")):Object.values(o).map((function(e){return i.a.createElement(U,{key:e.index},i.a.createElement(W,{align:"center"},i.a.createElement(O.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void l.push("./indices/".concat(t));var t}},i.a.createElement(y.a,{variant:"h5"},e.index))),i.a.createElement(W,{align:"center"},i.a.createElement(S.a,{display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(S.a,{width:"100%",mr:1},i.a.createElement(R,{className:u.margin,variant:"determinate",color:"secondary",value:Number(G(e.startTime,e.estimatedTime))})),i.a.createElement(S.a,{minWidth:15},i.a.createElement(y.a,{variant:"body2",color:"textSecondary"}," "))),void 0!==e.estimatedTime?i.a.createElement(i.a.Fragment,null," \uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : ",J(e.estimatedTime)," ",i.a.createElement("br",null)," "):i.a.createElement(i.a.Fragment,null,"\uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : - ",i.a.createElement("br",null)),void 0!==e.docSize?i.a.createElement(i.a.Fragment,null," \uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : ",function(e){var t=e+"";if(t.length<=3)return t;for(var n=Math.ceil(t.length/3),a=[],r=0;r<n;r++)a.unshift(t.slice(-3*(r+1),t.length-3*r));return a.join(",")}(e.docSize)," ",i.a.createElement("br",null)," "):i.a.createElement(i.a.Fragment,null,"\uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : - ",i.a.createElement("br",null)),"\uc2dc\uc791\uc2dc\uac04 : ",H(e.startTime)," \uc804 \uc2dc\uc791",i.a.createElement("br",null),"\ud604\uc7ac \uc9c4\ud589\uc911\uc778 \uc0c1\ud0dc :   ",i.a.createElement("b",null,e.currentStep,"\uc804\ud30c"===e.currentStep?i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),c[e.index]," "):i.a.createElement(i.a.Fragment,null," "),"\uc804\ud30c"===e.currentStep?" %":i.a.createElement(i.a.Fragment,null," ")),i.a.createElement("br",null),"\ub2e4\uc74c \uc9c4\ud589 :",void 0===e.nextStep||null===e.nextStep||0===e.nextStep.length?"\uc5c6\uc74c":" "+function(e){var t="";return"FULL_INDEX"===e?t="\uc0c9\uc778":"PROPAGATE"===e?t="\uc804\ud30c":"EXPOSE"===e&&(t="\uad50\uccb4"),t}(e.nextStep[0]),i.a.createElement("br",null)))}))))))}function Y(e){e.dispatch;var t=e.result,n=e.running,a=e.status,r=e.indices,c=e.indexPercent;return i.a.createElement(X,{container:!0,spacing:3},i.a.createElement(X,{item:!0,xs:6},i.a.createElement(V,{result:t,running:n,status:a,indices:r,indexPercent:c})),i.a.createElement(X,{item:!0,xs:6},i.a.createElement(q,{status:a,indices:r})))}function K(e){var t=e.result,n=e.alias,a=e.indices,r=Object(E.f)(),c=[];return Object.values(t.hits.hits).forEach((function(e){var t="";Object.values(n).forEach((function(n){e._source.index===n.index&&(t=n.alias)}));var r="";Object.values(a).forEach((function(t){t.index===e._source.index&&(r=t.uuid)})),c.push({index:e._source.index,alias:t,status:e._source.status,startTime:e._source.startTime,endTime:e._source.endTime,docSize:e._source.docSize,storage:e._source.store,uuid:r})})),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{mt:2,style:{overflow:"auto"}},i.a.createElement(x.a,null,i.a.createElement(y.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uacb0\uacfc"),i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement(_.a,null,i.a.createElement(U,null,i.a.createElement(W,{align:"center"},"\uc0c9\uc778 \uacb0\uacfc"),i.a.createElement(W,{align:"center"},"\uc778\ub371\uc2a4"),i.a.createElement(W,{align:"center"},"\ubcc4\uce6d"),i.a.createElement(W,{align:"center"},"\ucd5c\uadfc \uc131\uacf5"),i.a.createElement(W,{align:"center"},"\uc18c\uc694 \uc2dc\uac04"),i.a.createElement(W,{align:"center"},"\ubb38\uc11c\uc218"),i.a.createElement(W,{align:"center"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"))),i.a.createElement(T.a,null,0===c.length?i.a.createElement(U,null,i.a.createElement(W,{colSpan:7,align:"center"}," ",i.a.createElement(S.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",i.a.createElement(y.a,null,"\uc804\uccb4 \uc0c9\uc778 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))," ")):Object.values(c).sort((function(e,t){return e.endTime>t.endTime?-1:e.endTime===t.endTime?0:1})).map((function(e,t){return i.a.createElement(U,{key:e.index+"_"+t},i.a.createElement(W,{align:"center"},i.a.createElement(S.a,{display:"flex",justifyContent:"left",alignItems:"center"},e.status&&"SUCCESS"===e.status?i.a.createElement(P.a,{color:"primary"}):i.a.createElement(P.a,{style:{color:"red"}}),i.a.createElement(y.a,{style:{marginLeft:"5px"}},e.status))),i.a.createElement(W,{align:"center"},i.a.createElement(O.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void r.push("./indices/".concat(t));var t}},i.a.createElement(y.a,{variant:"h5"},e.index))),i.a.createElement(W,{align:"center"},e.alias),i.a.createElement(W,{align:"center"},i.a.createElement("b",null,H(e.endTime)," \uc804 "),i.a.createElement("br",null),function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}(e.endTime)),i.a.createElement(W,{align:"center"},J(e.endTime-e.startTime)),i.a.createElement(W,{align:"center"},Number(((e||{}).docSize||0).replace(/[^0-9]/gi,"")||0).toLocaleString()),i.a.createElement(W,{align:"center"},e.storage))})))))))}var Q=null;t.default=Object(L.b)((function(e){return{result:e.dashBoardReducers.result,running:e.dashBoardReducers.running,status:e.dashBoardReducers.status,alias:e.dashBoardReducers.alias,indices:e.dashBoardReducers.indices}}))((function(e){var t=e.dispatch,n=e.result,c=e.running,u=e.status,m=e.alias,E=e.indices,f=Object(l.useState)({}),h=Object(a.a)(f,2),g=h[0],p=h[1];function v(){t((function(e){return s.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",data:{query:{bool:{minimum_should_match:1,should:[{term:{jobType:"FULL_INDEX"}},{term:{"jobType.keyword":"FULL_INDEX"}}]}},sort:[{endTime:{order:"desc"}}],size:50}}).then((function(t){return e({type:o.E,payload:t.data})})).catch((function(e){return console.error(e)}))})),b(),Q=setTimeout((function(){v()}),18e4)}function b(){var e=Object.keys(c);if(0!==e.length){var n,a=Object(r.a)(e);try{var l=function(){var e=n.value,a=c[e].server.index;t(function(e){return function(t){return s.call({uri:"/elasticsearch/".concat(e,"/_recovery?format=json&filter_path=**.shards.index.size.percent")})}}(a)).then((function(e){var t=e.data[a].shards,n=0,r=0;t.forEach((function(e){var t=e.index.size.percent;n+=Number(t.substring(0,t.length-1)),r++}));var c=g;c[a]=Math.ceil(n/r),p(c)})).catch((function(e){console.log(e)}))};for(a.s();!(n=a.n()).done;)l()}catch(i){a.e(i)}finally{a.f()}}}return Object(l.useEffect)((function(){return t((function(e){return s.call({uri:"/dashboard/indexing"}).then((function(t){return e({type:o.gb,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return s.call({uri:"/elasticsearch/_cat/indices?format=json"}).then((function(t){return e({type:o.H,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return s.call({uri:"/elasticsearch/_cat/aliases?format=json"}).then((function(t){return e({type:o.y,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return s.call({uri:"/elasticsearch/_cat/indices",params:{format:"json"}}).then((function(t){return e({type:o.p,payload:t.data})})).catch((function(e){return console.error(e)}))})),v(),function(){null!==Q&&clearTimeout(Q)}}),[]),b(),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"\ub300\uc2dc\ubcf4\ub4dc"}),i.a.createElement(y.a,{variant:"h3",gutterBottom:!0,display:"inline"}," \ub300\uc2dc\ubcf4\ub4dc "),i.a.createElement(A,{my:6}),i.a.createElement(Y,{dispatch:t,result:n,running:c,status:u,indices:E,indexPercent:g}),i.a.createElement(K,{result:n,alias:m,status:u,indices:E}))}))}}]);
//# sourceMappingURL=69.cb0db9a1.chunk.js.map