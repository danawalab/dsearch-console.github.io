(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[60],{1506:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(59),c=a(0),l=a.n(c),o=a(38),i=a(11),m=a(87),u=a(131),s=a.n(u),d=a(598),p=a(714),b=a(650),E=a(170),g=a(607),h=a(676),f=a(677),y=a(562),v=a(563),x=a(866),j=a(663),w=a(622),O=a(623),k=a(620),S=a(619),C=a(700),I=a(1116),W=(a(1117),Object(I.trackWindowScroll)((function(e){var t=e.image;return l.a.createElement("div",null,l.a.createElement(I.LazyLoadImage,{effect:"blur",alt:t.alt,height:t.height,src:t.src,width:t.width,scrollPosition:window.scrollY,style:{maxWidth:t.maxWidth||"100%"}}))}))),R=a(201),N=Object(i.c)(d.a)(j.a,w.a,O.a,k.a,S.a),_=Object(i.c)(p.a)(j.a,w.a,O.a,k.a,S.a),F=Object(i.c)(b.a)(j.a,w.a,O.a,k.a,S.a),L=Object(i.c)(E.a)(j.a,w.a,O.a,k.a,S.a),M=Object(i.c)(g.a)(j.a,w.a,O.a,k.a,S.a),P=Object(i.c)(h.a)(j.a,w.a,O.a,k.a,S.a),z=Object(i.c)(f.a)(j.a,w.a,O.a,k.a,S.a),T=Object(i.c)(y.a)(j.a,w.a,O.a,k.a,S.a),$=Object(i.c)(v.a)(j.a,w.a,O.a,k.a,S.a);t.default=Object(o.b)((function(e){return Object(n.a)(Object(n.a)(Object(n.a)({},e.referenceSearchReducers),e.dsearchReducers),e.dsearchPluginReducers)}))((function(e){var t=e.resultList,a=e.authUser,n=(e.pluginResponse,Object(o.d)((function(e){return e.referenceSearchReducers.keyword}))),i=Object(m.f)(),u=t.map((function(e){return{label:e.template.name||"\uc774\ub984 \uc5c6\uc74c",component:function(){return function(e,t,a,n){var i=Object(o.c)(),m=Object(c.useState)(!1),u=Object(r.a)(m,2),s=u[0],d=u[1];function p(e,t){var n=String(t).match(/(?<=\$\{).*?(?=\})/g),r=t.toString();return null!==n&&(r=r.replace("${keyword}",a.keyword),n.forEach((function(t){r=r.replace("${"+t+"}",e[t])}))),r}var b=n?l.a.createElement(N,{ml:2,mt:2},"\ucd1d \uac2f\uc218: ".concat(n.totalCount)):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{container:!0},l.a.createElement(F,{item:!0,xs:12},b),l.a.createElement(F,{item:!0,xs:12,md:8,lg:9},l.a.createElement(T,{p:0,pt:4},(e||[]).map((function(e,t){var n=e.sourceAsMap,r=p(n,String(a.title)),c=p(n,String(a.thumbnails)),o=p(n,String(a.clickUrl));return l.a.createElement($,{key:t,py:2,pl:0},l.a.createElement(P,{style:{width:"100%"}},l.a.createElement(z,null,l.a.createElement(N,{style:{width:"100%"}},l.a.createElement(F,{container:!0},l.a.createElement(F,{item:!0,xs:4},l.a.createElement(N,{align:"center",style:{width:"100%",minWidth:"100%"},py:2,px:5},l.a.createElement(W,{image:{src:c,alt:"no image",width:"100%",maxWidth:"130px"}}))),l.a.createElement(F,{item:!0,xs:8},l.a.createElement(N,{style:{width:"100%"}},l.a.createElement(N,{px:3,py:2,style:{backgroundColor:"#F7F9FC",borderRadius:"5px"}},l.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank"},l.a.createElement(L,{variant:"h5",display:"inline"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))),l.a.createElement(N,{px:4,pt:3},l.a.createElement(T,null,a.fields.map((function(e,t){var a=e.label,r=p(n,String(e.value));return l.a.createElement($,{p:1,key:t},l.a.createElement(N,{whiteSpace:"nowrap"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),":",l.a.createElement(N,{ml:2},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))})))))))))))})))),l.a.createElement(F,{item:!0,xs:12,md:4,lg:3,mt:2},a.aggs.map((function(e,a){var n=e.label,r=e.value;return l.a.createElement(P,{key:a,mt:4,pl:2,style:{backgroundColor:x.a[100],width:"100%"}},l.a.createElement(z,null,l.a.createElement(N,null,l.a.createElement(L,{variant:"h5",mt:1}," ",n," "),l.a.createElement(T,null,((t[r]||{}).buckets||[]).map((function(e,t){return l.a.createElement($,{key:t,p:1},l.a.createElement(N,{component:"span"},"- ",e.key),l.a.createElement(N,{component:"span",ml:2},e.docCount))}))))))}))),l.a.createElement(F,{item:!0,xs:12},l.a.createElement(N,{align:"center",mt:5},n&&n.pageNum<n.lastPageNum?l.a.createElement(M,{size:"large",variant:"contained",color:"primary",onClick:function(){d(!0),window.scrollX=0,window.scrollY=0,i(Object(R.b)(n.id,n)).then((function(){d(!1)}))},disabled:s},"\ub354\ubcf4\uae30"):null))))}(e.documents.hits,e.documents.aggregations||{},e.template,{id:e.template.id,keyword:n,pageNum:Number(e.documents.pageNum)+1,rowSize:e.documents.rowSize,totalCount:e.documents.totalCount,lastPageNum:e.documents.lastPageNum})}}}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"\uac80\uc0c9\uacb0\uacfc"}),l.a.createElement(F,{container:!0},l.a.createElement(F,{item:!0,xs:10},l.a.createElement(L,{variant:"h3",display:"inline"},"\ub808\ud37c\ub7f0\uc2a4 UI")),l.a.createElement(F,{item:!0,xs:2},l.a.createElement(N,{align:"right"},l.a.createElement(M,{color:"default",variant:"contained",onClick:function(){i.push("/".concat(a.cluster.id,"/search/reference-ui"))}},"\uc124\uc815")))),u&&u.length>0?l.a.createElement(_,{my:6}):null,l.a.createElement(C.a,{tabs:u,tabIndex:0}))}))},700:function(e,t,a){"use strict";var n=a(59),r=a(0),c=a.n(r),l=a(9),o=a(714),i=a(598),m=a(1468),u=(a(170),a(1498)),s=a(11),d=a(663),p=Object(s.c)(o.a)(d.a),b=Object(s.c)(i.a)(d.a),E=Object(l.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(2),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}),{index:1})((function(e){return c.a.createElement(m.a,Object.assign({disableRipple:!0},e))}));t.a=function(e){var t=e.tabs,a=e.tabIndex,r=void 0===a?0:a,l=e.onChange,o=c.a.useState({tabIndex:r}),i=Object(n.a)(o,2),m=i[0],s=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{value:m.tabIndex,onChange:function(e,t){s({tabIndex:t}),"function"===typeof l&&l(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){return c.a.createElement(E,{key:t,id:t,icon:e.icon,label:e.label||""})}))),c.a.createElement(p,null),t.map((function(e,t){return c.a.createElement(b,{key:t,role:"tabpanel",hidden:m.tabIndex!==t,id:"scrollable-auto-tabpanel-".concat(t),"aria-labelledby":"scrollable-auto-tab-".concat(t)},t===m.tabIndex&&e.component&&c.a.createElement(b,null," ",c.a.createElement(e.component,{tabs:e})," "))})))}}}]);
//# sourceMappingURL=60.67ba8eb0.chunk.js.map