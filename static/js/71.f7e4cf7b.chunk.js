(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[71],{1502:function(e,t,a){"use strict";a.r(t);var n,r=a(59),l=a(1062),c=a(15),i=a(0),u=a.n(i),o=a(11),s=a(3),m=new(a(76).a),d=a(131),E=a.n(d),f=a(87),h=a(789),g=a(676),p=a(714),v=a(650),b=a(682),y=a(681),x=a(677),j=a(170),T=a(683),S=a(684),O=a(598),_=a(724),F=a(678),k=a(663),z=a(623),w=a(622),C=a(694),D=a(9),I=a(17),L=a(38),M=a(1063),P=a.n(M),B=Object(C.a)((function(e){return{headerField:{fontSize:"1.2em",fontWeight:"bold"},headerValue:{fontSize:"1.2em",fontWeight:"bold"},primaryShard:{border:"1px solid"},replicaShard:{border:"1px dashed"},margin:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),R=Object(D.a)({root:{height:10,backgroundColor:Object(I.i)("#A9D0F5",.5)},bar:{borderRadius:20,backgroundColor:"#013ADF"}})(h.a),A=Object(o.c)(g.a)(k.a,z.a),N=Object(o.c)(p.a)(k.a,z.a),X=Object(o.c)(v.a)(k.a,z.a),U=Object(o.c)(b.a)(k.a,z.a,w.a),G=Object(o.c)(y.a)(n||(n=Object(c.a)(["\n    border: 1px solid rgba(224, 224, 224, 1);\n    padding: 3px;\n"]))),J=function(e,t){return((new Date).getTime()-new Date(e).getTime()).valueOf()/t*100},W=function(e){var t=((new Date).getTime()-new Date(e).getTime())/3600/1e3*60,a=Math.floor(t/60),n=Math.floor(t%60);if(a>=720){var r=a/30/24;return Math.ceil(r)+"\uac1c\uc6d4"}if(a>=24){var l=a/24;return Math.ceil(l)+"\uc77c"}return 0!==a&&0!==n?a+"\uc2dc\uac04 "+n+"\ubd84":0!==a&&0===n?a+"\uc2dc\uac04":n+"\ubd84"},q=function(e){e/=1e3;var t=Math.floor(e/3600),a=Math.ceil((e-3600*t)/60);return a>=60&&(t+=1,a=0),0!==t?t+"\uc2dc\uac04 "+a+"\ubd84":a+"\ubd84"};function H(e){var t=e.status,a=e.indices,n=Object(f.f)();var r=[];return Object.values(t).map((function(e){if("green"!==e.health){var t="";Object.values(a).forEach((function(a){a.index===e.index&&(t=a.uuid)}));var n=e;n.uuid=t,r.push(n)}return e})),u.a.createElement(A,null,u.a.createElement(x.a,null,u.a.createElement(j.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc8fc\uc758\ud560 \uc778\ub371\uc2a4"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(T.a,null,u.a.createElement(S.a,null,r.length>0?r.map((function(e){return u.a.createElement(U,{key:e.index},u.a.createElement(G,{align:"center"},u.a.createElement(O.a,{display:"flex",justifyContent:"left",alignItems:"center"},u.a.createElement(P.a,{style:{color:e.health,marginRight:"5px"}}),u.a.createElement(_.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void n.push("./indices/".concat(t));var t}},u.a.createElement(j.a,{variant:"h5"},e.index)))),u.a.createElement(G,{align:"center"},"yellow"===e.health?u.a.createElement("font",{color:"orange"}," \ub808\ud50c\ub9ac\uce74 \uc0e4\ub4dc \uc774\uc0c1 "):u.a.createElement("font",{color:"red"}," \ud504\ub77c\uc774\uba38\ub9ac \uc0e4\ub4dc \uc774\uc0c1 ")))})):u.a.createElement(U,null,u.a.createElement(G,{colSpan:2,style:{border:"0px"}},u.a.createElement(O.a,{align:"center",style:{height:"24px"}})))))))}function V(e){var t=e.result,a=e.running,n=(e.status,e.indices),r=e.indexPercent,c=Object(f.f)(),i=B(),o=[],s={};if(t.hits.hits.length>=0){var m,d=Object(l.a)(t.hits.hits);try{for(d.s();!(m=d.n()).done;){var E=m.value,h=E._source.index,g=h.substring(0,h.length-2);null!==s[g]&&void 0!==s[g]||(s[g]=E._source)}}catch(F){d.e(F)}finally{d.f()}}var p=Object.keys(a);if(0!==p.length){var v,b=Object(l.a)(p);try{var y=function(){var e=v.value,t=a[e].server;if(void 0!==t){var r=t.collection.baseId,l="";Object.values(n).forEach((function(e){e.index===t.index&&(l=e.uuid)}));var c=t.nextStep,i=t.currentStep;if(i="FULL_INDEX"===i?"\uc0c9\uc778":"PROPAGATE"===i?"\uc804\ud30c":"EXPOSE"===i?"\uad50\uccb4":"",void 0!==s[r]&&void 0!==s[r].endTime&&void 0!==s[r].startTime&&void 0!==s[r].docSize){var u=s[r].endTime-s[r].startTime,m=s[r].docSize;J(t.startTime,u),o.push({startTime:t.startTime,index:t.index,estimatedTime:u,docSize:m,uuid:l,currentStep:i,nextStep:c})}else o.push({startTime:t.startTime,index:t.index,uuid:l,currentStep:i,nextStep:c})}};for(b.s();!(v=b.n()).done;)y()}catch(F){b.e(F)}finally{b.f()}}return u.a.createElement(A,null,u.a.createElement(x.a,null,u.a.createElement(j.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uc2e4\ud589\uc911"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(T.a,null,u.a.createElement(S.a,null,0===o.length?u.a.createElement(U,null,u.a.createElement(G,{align:"center"}," ",u.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",u.a.createElement(j.a,null,"\ud604\uc7ac \uc2e4\ud589\uc911\uc778 \uc0c9\uc778 \uc791\uc5c5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")),"  ")):Object.values(o).map((function(e){return u.a.createElement(U,{key:e.index},u.a.createElement(G,{align:"center"},u.a.createElement(_.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void c.push("./indices/".concat(t));var t}},u.a.createElement(j.a,{variant:"h5"},e.index))),u.a.createElement(G,{align:"center"},u.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"},u.a.createElement(O.a,{width:"100%",mr:1},u.a.createElement(R,{className:i.margin,variant:"determinate",color:"secondary",value:Number(J(e.startTime,e.estimatedTime))})),u.a.createElement(O.a,{minWidth:15},u.a.createElement(j.a,{variant:"body2",color:"textSecondary"}," "))),void 0!==e.estimatedTime?u.a.createElement(u.a.Fragment,null," \uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : ",q(e.estimatedTime)," ",u.a.createElement("br",null)," "):u.a.createElement(u.a.Fragment,null,"\uc608\uc0c1 \uc885\ub8cc \uc2dc\uac04 : - ",u.a.createElement("br",null)),void 0!==e.docSize?u.a.createElement(u.a.Fragment,null," \uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : ",function(e){var t=e+"";if(t.length<=3)return t;for(var a=Math.ceil(t.length/3),n=[],r=0;r<a;r++)n.unshift(t.slice(-3*(r+1),t.length-3*r));return n.join(",")}(e.docSize)," ",u.a.createElement("br",null)," "):u.a.createElement(u.a.Fragment,null,"\uc608\uc0c1 \ucc98\ub9ac \ubb38\uc11c \uac74\uc218 : - ",u.a.createElement("br",null)),"\uc2dc\uc791\uc2dc\uac04 : ",W(e.startTime)," \uc804 \uc2dc\uc791",u.a.createElement("br",null),"\ud604\uc7ac \uc9c4\ud589\uc911\uc778 \uc0c1\ud0dc :   ",u.a.createElement("b",null,e.currentStep,"\uc804\ud30c"===e.currentStep?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),r[e.index]," "):u.a.createElement(u.a.Fragment,null," "),"\uc804\ud30c"===e.currentStep?" %":u.a.createElement(u.a.Fragment,null," ")),u.a.createElement("br",null),"\ub2e4\uc74c \uc9c4\ud589 :",void 0===e.nextStep||null===e.nextStep||0===e.nextStep.length?"\uc5c6\uc74c":" "+function(e){var t="";return"FULL_INDEX"===e?t="\uc0c9\uc778":"PROPAGATE"===e?t="\uc804\ud30c":"EXPOSE"===e&&(t="\uad50\uccb4"),t}(e.nextStep[0]),u.a.createElement("br",null)))}))))))}function Y(e){e.dispatch;var t=e.result,a=e.running,n=e.status,r=e.indices,l=e.indexPercent;return u.a.createElement(X,{container:!0,spacing:3},u.a.createElement(X,{item:!0,xs:6},u.a.createElement(V,{result:t,running:a,status:n,indices:r,indexPercent:l})),u.a.createElement(X,{item:!0,xs:6},u.a.createElement(H,{status:n,indices:r})))}function K(e){var t=e.result,a=e.alias,n=e.indices,r=Object(f.f)(),l=[];return Object.values(t.hits.hits).forEach((function(e){var t="";Object.values(a).forEach((function(a){e._source.index===a.index&&(t=a.alias)}));var r="";Object.values(n).forEach((function(t){t.index===e._source.index&&(r=t.uuid)})),l.length<=50&&l.push({index:e._source.index,alias:t,status:e._source.status,startTime:e._source.startTime,endTime:e._source.endTime,docSize:e._source.docSize,storage:e._source.store,uuid:r})})),u.a.createElement(u.a.Fragment,null,u.a.createElement(A,{mt:2,style:{overflow:"auto"}},u.a.createElement(x.a,null,u.a.createElement(j.a,{variant:"h4",gutterBottom:!0,display:"inline"},"\uc804\uccb4\uc0c9\uc778 \uacb0\uacfc"),u.a.createElement("br",null)," ",u.a.createElement("br",null),u.a.createElement(T.a,null,u.a.createElement(F.a,null,u.a.createElement(U,null,u.a.createElement(G,{align:"center"},"\uc0c9\uc778 \uacb0\uacfc"),u.a.createElement(G,{align:"center"},"\uc778\ub371\uc2a4"),u.a.createElement(G,{align:"center"},"\ubcc4\uce6d"),u.a.createElement(G,{align:"center"},"\ucd5c\uadfc \uc131\uacf5"),u.a.createElement(G,{align:"center"},"\uc18c\uc694 \uc2dc\uac04"),u.a.createElement(G,{align:"center"},"\ubb38\uc11c\uc218"),u.a.createElement(G,{align:"center"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"))),u.a.createElement(S.a,null,0===l.length?u.a.createElement(U,null,u.a.createElement(G,{colSpan:7,align:"center"}," ",u.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center"}," ",u.a.createElement(j.a,null,"\uc804\uccb4 \uc0c9\uc778 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))," ")):Object.values(l).sort((function(e,t){return e.endTime>t.endTime?-1:e.endTime===t.endTime?0:1})).map((function(e,t){return u.a.createElement(U,{key:e.index+"_"+t},u.a.createElement(G,{align:"center"},u.a.createElement(O.a,{display:"flex",justifyContent:"left",alignItems:"center"},e.status&&"SUCCESS"===e.status?u.a.createElement(P.a,{color:"primary"}):u.a.createElement(P.a,{style:{color:"red"}}),u.a.createElement(j.a,{style:{marginLeft:"5px"}},e.status))),u.a.createElement(G,{align:"center"},u.a.createElement(_.a,{style:{cursor:"pointer"},onClick:function(){return t=e.uuid,void r.push("./indices/".concat(t));var t}},u.a.createElement(j.a,{variant:"h5"},e.index))),u.a.createElement(G,{align:"center"},e.alias),u.a.createElement(G,{align:"center"},u.a.createElement("b",null,W(e.endTime)," \uc804 "),u.a.createElement("br",null),function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}(e.endTime)),u.a.createElement(G,{align:"center"},q(e.endTime-e.startTime)),u.a.createElement(G,{align:"center"},Number(((e||{}).docSize||"").replace(/[^0-9]/gi,"")||"0").toLocaleString()),u.a.createElement(G,{align:"center"},e.storage))})))))))}var Q=null;t.default=Object(L.b)((function(e){return{result:e.dashBoardReducers.result,running:e.dashBoardReducers.running,status:e.dashBoardReducers.status,alias:e.dashBoardReducers.alias,indices:e.dashBoardReducers.indices}}))((function(e){var t=e.dispatch,a=e.result,n=e.running,c=e.status,o=e.alias,d=e.indices,f=Object(i.useState)({}),h=Object(r.a)(f,2),g=h[0],p=h[1];function v(){t((function(e){return m.call({uri:"/elasticsearch/.dsearch_index_history/_search",method:"post",data:{query:{bool:{minimum_should_match:1,should:[{term:{jobType:"FULL_INDEX"}},{term:{"jobType.keyword":"FULL_INDEX"}}]}},sort:[{endTime:{order:"desc"}}],size:200}}).then((function(t){return e({type:s.G,payload:t.data})})).catch((function(e){return console.error(e)}))})),b(),Q=setTimeout((function(){v()}),18e4)}function b(){var e=Object.keys(n);if(0!==e.length){var a,r=Object(l.a)(e);try{var c=function(){var e=a.value,r=n[e].server.index;t(function(e){return function(t){return m.call({uri:"/elasticsearch/".concat(e,"/_recovery?format=json&filter_path=**.shards.index.size.percent")})}}(r)).then((function(e){var t=e.data[r].shards,a=0,n=0;t.forEach((function(e){var t=e.index.size.percent;a+=Number(t.substring(0,t.length-1)),n++}));var l=g;l[r]=Math.ceil(a/n),p(l)})).catch((function(e){console.log(e)}))};for(r.s();!(a=r.n()).done;)c()}catch(i){r.e(i)}finally{r.f()}}}return Object(i.useEffect)((function(){return t((function(e){return m.call({uri:"/dashboard/indexing"}).then((function(t){return e({type:s.ib,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return m.call({uri:"/elasticsearch/_cat/indices?format=json"}).then((function(t){return e({type:s.J,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return m.call({uri:"/elasticsearch/_cat/aliases?format=json"}).then((function(t){return e({type:s.A,payload:t.data})})).catch((function(e){return console.error(e)}))})),t((function(e){return m.call({uri:"/elasticsearch/_cat/indices",params:{format:"json"}}).then((function(t){return e({type:s.r,payload:t.data})})).catch((function(e){return console.error(e)}))})),v(),function(){null!==Q&&clearTimeout(Q)}}),[]),b(),u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{title:"\ub300\uc2dc\ubcf4\ub4dc"}),u.a.createElement(j.a,{variant:"h3",gutterBottom:!0,display:"inline"}," \ub300\uc2dc\ubcf4\ub4dc "),u.a.createElement(N,{my:6}),u.a.createElement(Y,{dispatch:t,result:a,running:n,status:c,indices:d,indexPercent:g}),u.a.createElement(K,{result:a,alias:o,status:c,indices:d}))}))}}]);
//# sourceMappingURL=71.f7e4cf7b.chunk.js.map