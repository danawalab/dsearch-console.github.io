(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[68],{1501:function(e,t,a){"use strict";a.r(t);var l=a(59),n=a(0),r=a.n(n),c=a(11),u=a(38),i=a(131),s=a.n(i),o=a(694),m=a(4),E=new(a(76).a),d=function(){return function(e){return E.call({uri:"/elasticsearch/_all/_settings"}).then((function(t){return e({type:m.mb,payload:t.data})}))}},f=function(){return function(e){return E.call({uri:"/tools/plugins"}).then((function(t){return e({type:m.pb,payload:t.data})}))}},h=a(674),v=a(713),y=a(703),p=a(681),b=a(682),g=a(680),k=a(679),L=a(170),O=a(675),j=a(598),_=a(841),T=a(968),z=a(730),M=a(1497),S=a(712),B=a(1046),w=a(604),x=a(607),D=a(648),H=a(661),I=Object(o.a)((function(e){return{formControl:{minWidth:250},select:{minWidth:120,marginLeft:e.spacing(1),flex:1,borderBottom:"1px solid gray","&:hover":{borderBottom:"1px solid black"}}}})),P=Object(c.c)(h.a)(H.a),C=Object(c.c)(v.a)(H.a),R=Object(c.c)(y.a)(H.a);function Y(e){var t=e.resultBrief,a=[];if(t.tokens)for(var l=0;l<t.tokens.length;l++)l%5===0&&a.push([]),a[a.length-1].push(t.tokens[l].token);return r.a.createElement(p.a,null,r.a.createElement("colgroup",null,r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"})),r.a.createElement(b.a,null,a.length>0?a.map((function(e,t){return r.a.createElement(g.a,{hover:!0,key:t},e.map((function(e){return r.a.createElement(k.a,null," ",e)})))})):r.a.createElement(g.a,{hover:!0,key:"nothing"},r.a.createElement(k.a,null,"\uac80\uc0c9\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"))))}function F(e){var t=e.resultDetail;if(!t.result)return r.a.createElement(p.a,{key:"empltyDetail"},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(k.a,null,"\uac80\uc0c9\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))));var a=t.result[2].value;return a=a.split(/\(|\)/),t.result[4].value.length>0?t.result[4].value+=", "+a[1]:t.result[4].value+=a[1],r.a.createElement(p.a,{key:"detailResult"},r.a.createElement(b.a,null,r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"1. ",t.result[2].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[2].value}}))),r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"2. ",t.result[3].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[3].value}}))),r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"3. ",t.result[4].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[4].value}}))),r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"4. ",t.result[5].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[5].value}}))),r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"5. ",t.result[6].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[6].value}}))),r.a.createElement(g.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"6. ",t.result[7].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[7].value}})))))}function W(e){var t=e.dispatch,a=e.analyzerList,c=e.pluginList,u=e.resultBrief,i=e.resultDetail,s=r.a.useRef({value:""}),o=Object(n.useState)("EMPTY"),h=Object(l.a)(o,2),v=h[0],y=h[1],p=Object(n.useState)("detail"),b=Object(l.a)(p,2),g=b[0],k=b[1],D=I(),H=Object(n.useState)(!0),C=Object(l.a)(H,2),W=C[0],J=C[1],K=Object(n.useState)((c||{}).plugins||[]),N=Object(l.a)(K,2),Q=N[0],V=N[1];Object(n.useEffect)((function(){"detail"===g&&(V((c||{}).plugins||[]),Q.length>0&&y(Q[0]))}),[g,c,Q]);var q=[];void 0!==a&&null!==a&&Object.keys(a).filter((function(e){return!e.startsWith(".")})).map((function(e){var t=a[e].settings.index.analysis;return void 0!==t&&void 0!==t.analyzer&&Object.keys(t.analyzer).map((function(t){return q.push(e+"/"+t)})),r.a.createElement(r.a.Fragment,null)}));var A=function(){var e=s.current.value,a=document.getElementById("analyzer_select"),l={};if("brief"===g){var n=a.innerHTML.split("/");if(n&&2===n.length){var r=n[0].replace(" ",""),c=n[1].replace(" ","");l.text=e,l.analyzer=c,t(function(e,t){return function(a){return E.call({uri:"/elasticsearch/"+e+"/_analyze",method:"POST",data:t}).then((function(e){return a({type:m.nb,payload:e.data})}))}}(r,l)).catch((function(e){console.log(e)}))}else console.error("err",n)}else{var u=a.innerHTML;u=u.replace(/ /gi,""),l.useForQuery=W,l.plugin=u,l.text=e,t(function(e){return function(t){return E.call({uri:"/tools/detail/analysis",method:"POST",data:e}).then((function(e){t({type:m.ob,payload:e.data})}))}}(l))}};return r.a.createElement(P,{mb:6},r.a.createElement(O.a,null,r.a.createElement(R,{label:"\ubd84\uc11d\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",inputRef:s,variant:"outlined",fullWidth:!0,onKeyPress:function(e){"Enter"===e.key&&A()}}),r.a.createElement(j.a,{display:"flex",alignItems:"center",justifyContent:"left"},r.a.createElement(j.a,{p:3},r.a.createElement(_.a,null,r.a.createElement(T.a,{value:g,row:!0,onChange:function(e){"brief"===g?(0!==((c||{}).plugins||[]).length?y(((c||{}).plugins||[])[0]):y("EMPTY"),t(d())):(0!==q.length?y(q[0]):y("EMPTY"),t(f())),k(e.target.value)}},r.a.createElement(z.a,{value:"brief",control:r.a.createElement(M.a,{size:"small"}),label:"\uac04\ub7b5"}),r.a.createElement(z.a,{value:"detail",control:r.a.createElement(M.a,{size:"small"}),label:"\uc0c1\uc138"}),"brief"===g?r.a.createElement(r.a.Fragment,null):r.a.createElement(z.a,{control:r.a.createElement(S.a,{checked:W,onClick:function(){J(!W)}}),label:"\ucffc\ub9ac\uc6a9\ub3c4"})))),r.a.createElement(j.a,{p:3},r.a.createElement(_.a,{className:D.formControl},r.a.createElement(B.a,{id:"analyzer_select",value:v,onChange:function(e){y(e.target.value)},defaultValue:"",displayEmpty:!0},"brief"===g?0===q.length?r.a.createElement(w.a,{key:"no",selected:!0,disabled:!0,value:"EMPTY"}," \ubd84\uc11d\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "):q.map((function(e,t){return 0===t?r.a.createElement(w.a,{key:e,selected:!0,value:e}," ",e," "):r.a.createElement(w.a,{key:e,value:e}," ",e," ")})):0===Q.length?r.a.createElement(w.a,{key:"no",selected:!0,disabled:!0,value:"EMPTY"}," \ubd84\uc11d\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "):Q.map((function(e,t){return 0===t?r.a.createElement(w.a,{key:e,selected:!0,value:e}," ",e," "):r.a.createElement(w.a,{key:e,value:e}," ",e," ")}))))),r.a.createElement(x.a,{variant:"outlined",color:"secondary",onClick:A},"\ubd84\uc11d")),r.a.createElement(j.a,{m:2},r.a.createElement(L.a,{variant:"h4",display:"inline"},"\ubd84\uc11d \uacb0\uacfc")),r.a.createElement(j.a,{p:2},"brief"===g?r.a.createElement(Y,{resultBrief:u}):r.a.createElement(F,{resultDetail:i}))))}t.default=Object(u.b)((function(e){return{pluginList:e.toolsReducers.pluginList,analyzerList:e.toolsReducers.analyzerList,resultBrief:e.toolsReducers.resultBrief,resultDetail:e.toolsReducers.resultDetail}}))((function(e){var t=e.dispatch,a=e.analyzerList,l=e.pluginList,c=e.resultBrief,u=e.resultDetail;return Object(n.useEffect)((function(){t(d()),t(f())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"\ubd84\uc11d\ub3c4\uad6c"}),r.a.createElement(L.a,{variant:"h3",display:"inline"},"\ubd84\uc11d\ub3c4\uad6c"),r.a.createElement(C,{my:6}),r.a.createElement(D.a,{container:!0,spacing:6},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(W,{dispatch:t,analyzerList:a,pluginList:l,resultBrief:c,resultDetail:u}))))}))}}]);
//# sourceMappingURL=68.8e89a5a6.chunk.js.map