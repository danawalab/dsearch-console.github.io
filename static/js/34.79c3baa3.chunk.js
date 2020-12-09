(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[34],{683:function(e,t,a){"use strict";var n=a(0),c=n.createContext();t.a=c},686:function(e,t,a){"use strict";var n=a(0),c=n.createContext();t.a=c},691:function(e,t,a){"use strict";var n=a(1),c=a(6),i=a(0),l=(a(4),a(9)),r=a(12),o=i.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.component,d=void 0===o?"div":o,s=Object(c.a)(e,["classes","className","component"]);return i.createElement(d,Object(n.a)({className:Object(l.a)(a.root,r),ref:t},s))}));t.a=Object(r.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},695:function(e,t,a){"use strict";var n=a(1),c=a(6),i=a(0),l=(a(4),a(9)),r=a(12),o=a(683),d={variant:"head"},s=i.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,u=void 0===s?"thead":s,m=Object(c.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:d},i.createElement(u,Object(n.a)({className:Object(l.a)(a.root,r),ref:t},m)))}));t.a=Object(r.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(s)},699:function(e,t,a){"use strict";var n=a(1),c=a(6),i=a(0),l=(a(4),a(9)),r=a(12),o=a(683),d=a(20),s=i.forwardRef((function(e,t){var a=e.classes,r=e.className,d=e.component,s=void 0===d?"tr":d,u=e.hover,m=void 0!==u&&u,p=e.selected,b=void 0!==p&&p,f=Object(c.a)(e,["classes","className","component","hover","selected"]),g=i.useContext(o.a);return i.createElement(s,Object(n.a)({ref:t,className:Object(l.a)(a.root,r,g&&{head:a.head,footer:a.footer}[g.variant],m&&a.hover,b&&a.selected)},f))}));t.a=Object(r.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(s)},700:function(e,t,a){"use strict";var n=a(6),c=a(1),i=a(0),l=(a(4),a(9)),r=a(12),o=a(686),d=i.forwardRef((function(e,t){var a=e.classes,r=e.className,d=e.component,s=void 0===d?"table":d,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),x=i.useMemo((function(){return{padding:m,size:b,stickyHeader:g}}),[m,b,g]);return i.createElement(o.a.Provider,{value:x},i.createElement(s,Object(c.a)({ref:t,className:Object(l.a)(a.root,r,g&&a.stickyHeader)},h)))}));t.a=Object(r.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},701:function(e,t,a){"use strict";var n=a(1),c=a(6),i=a(0),l=(a(4),a(9)),r=a(12),o=a(683),d={variant:"body"},s=i.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,u=void 0===s?"tbody":s,m=Object(c.a)(e,["classes","className","component"]);return i.createElement(o.a.Provider,{value:d},i.createElement(u,Object(n.a)({className:Object(l.a)(a.root,r),ref:t},m)))}));t.a=Object(r.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(s)},703:function(e,t,a){"use strict";var n=a(6),c=a(1),i=a(0),l=(a(4),a(9)),r=a(12),o=a(16),d=a(20),s=a(686),u=a(683),m=i.forwardRef((function(e,t){var a,r=e.align,d=void 0===r?"inherit":r,m=e.classes,p=e.className,b=e.component,f=e.padding,g=e.scope,h=e.size,x=e.sortDirection,E=e.variant,v=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=i.useContext(s.a),O=i.useContext(u.a);a=b||(O&&"head"===O.variant?"th":"td");var y=g;!y&&O&&"head"===O.variant&&(y="col");var A=f||(j&&j.padding?j.padding:"default"),T=h||(j&&j.size?j.size:"medium"),C=E||O&&O.variant,k=null;return x&&(k="asc"===x?"ascending":"descending"),i.createElement(a,Object(c.a)({ref:t,className:Object(l.a)(m.root,m[C],p,"inherit"!==d&&m["align".concat(Object(o.a)(d))],"default"!==A&&m["padding".concat(Object(o.a)(A))],"medium"!==T&&m["size".concat(Object(o.a)(T))],"head"===C&&j&&j.stickyHeader&&m.stickyHeader),"aria-sort":k,scope:y},v))}));t.a=Object(r.a)((function(e){return{root:Object(c.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(d.i)(Object(d.d)(e.palette.divider,1),.88):Object(d.a)(Object(d.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},983:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(62),i=a(0),l=a.n(i),r=a(38),o=a(14),d=a(722),s=a(100),u=a(624),m=a(693),p=a(382),b=a(671),f=a(691),g=a(700),h=a(695),x=a(699),E=a(703),v=a(701),j=a(622),O=a(629),y=a(698),A=a(593),T=a(660),C=a(670),k=a(754),N=(Object(o.c)(d.a)(A.a,T.a),Object(o.c)(s.a)(A.a,T.a),Object(o.c)(u.a)(A.a,T.a)),w=Object(o.c)(m.a)(A.a,T.a),L=Object(o.c)(p.a)(A.a,T.a),R=Object(o.c)(b.a)(A.a,T.a),z=Object(y.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"}}}));function B(e,t,a){if(a.length>t)return e+"";for(e+="",a+="";e.length<t;)e+=a;return e=e.length>=t?e.substring(0,t):e}t.default=Object(r.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var t=e.dispatch,a=e.authUser,n=e.collection,r=e.history,o=(z(),Object(i.useState)(null)),d=Object(c.a)(o,2),s=d[0],u=d[1],m=Object(i.useState)(0),p=Object(c.a)(m,2),b=p[0],y=p[1],A=Object(i.useState)("ALL"),T=Object(c.a)(A,2),D=T[0],M=T[1];function S(e){u(null===s?e.currentTarget:null)}function H(e,a){y(e),t("ALL"===a?Object(k.l)({indexA:n.indexA.index,indexB:n.indexB.index,size:10,from:e}):Object(k.m)({indexA:n.indexA.index,indexB:n.indexB.index,size:10,from:e,type:a})),u(null)}function P(e){t(Object(k.c)({indexA:n.indexA.index,indexB:n.indexB.index,time:e.getTime()})).then((function(e){y(0),setTimeout((function(){t("ALL"===D?Object(k.l)({indexA:n.indexA.index,indexB:n.indexB.index,size:10,from:0}):Object(k.m)({indexA:n.indexA.index,indexB:n.indexB.index,size:10,from:0,type:D}))}),1e3),S()})).catch((function(e){console.log(e),alert(e),S()}))}if(Object(i.useEffect)((function(){t(Object(k.l)({indexA:n.indexA.index,indexB:n.indexB.index,size:10,from:b}))}),[]),!r.hits)return null;console.log("collection",n),console.log("hits >> ",r.hits);var F=Math.ceil(r.hits.total.value/10),I=Math.ceil(b/10)+1;return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(w,null,l.a.createElement(f.a,null,l.a.createElement(N,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(x.a,null,l.a.createElement(E.a,null,"#"),l.a.createElement(E.a,null,"\uc778\ub371\uc2a4"),l.a.createElement(E.a,null,"\ud0c0\uc785"),l.a.createElement(E.a,null,"\uacb0\uacfc"),l.a.createElement(E.a,null,"\ubb38\uc11c\uc218"),l.a.createElement(E.a,null,"\uc790\ub3d9\uc2e4\ud589"),l.a.createElement(E.a,null,"\uc2dc\uc791"),l.a.createElement(E.a,null,"\uc885\ub8cc"),l.a.createElement(E.a,null,"\uc18c\uc694\uc2dc\uac04"))),l.a.createElement(v.a,null,((r.hits||{}).hits||[]).map((function(e,t){var a=e._source,n="FULL_INDEX"===a.jobType?"\uc804\uccb4\uc0c9\uc778":"DYNAMIC_INDEX"===a.jobType?"\ub3d9\uc801\uc0c9\uc778":"PROPAGATE"===a.jobType?"\uc804\ud30c":"EXPOSE"===a.jobType?"\uad50\uccb4":a.jobType,c=a.autoRun?"\uc790\ub3d9":"\uc218\ub3d9",i=new Date,r=new Date,o="",d=a.docSize;try{d=Number(a.docSize).toLocaleString(),i.setTime(B(a.startTime,13,"0")),r.setTime(B(a.endTime,13,"0"));var s=r.getTime()-i.getTime(),u=Math.floor(s%864e5/36e5),m=Math.floor(s%36e5/6e4),p=Math.floor(s%6e4/1e3);o="".concat(u,"\uc2dc ").concat(m,"\ubd84 ").concat(p,"\ucd08")}catch(f){console.error("err",f),i="",r=""}return l.a.createElement(x.a,{key:e._id},l.a.createElement(E.a,null,b+t+1),l.a.createElement(E.a,null,a.index),l.a.createElement(E.a,null,n),l.a.createElement(E.a,null,a.status),l.a.createElement(E.a,null,d),l.a.createElement(E.a,null,c),l.a.createElement(E.a,null,i.toLocaleString()),l.a.createElement(E.a,null,r.toLocaleString()),l.a.createElement(E.a,null,o))}))))),l.a.createElement("br",null),l.a.createElement(R,{container:!0},l.a.createElement(R,{item:!0,xs:2}),l.a.createElement(R,{item:!0,xs:8},l.a.createElement(N,{align:"center"},l.a.createElement(N,{align:"center"},l.a.createElement(L,{variant:"outlined",disabled:1===I,onClick:function(){return H(10*(I-1)-10,D)}},"\uc774\uc804"),l.a.createElement(N,{component:"span",m:3},I," / ",0===F?1:F),l.a.createElement(L,{variant:"outlined",disabled:I===(0===F?1:F),onClick:function(){return H(10*I,D)}},"\ub2e4\uc74c")))),l.a.createElement(R,{item:!0,xs:2},l.a.createElement(N,{align:"right"},a.role.index?l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{variant:"outlined",onClick:S},"\ub354\ubcf4\uae30",l.a.createElement(C.a,null)),l.a.createElement(j.a,{anchorEl:s,open:Boolean(s),onClose:S},l.a.createElement(O.a,{onClick:function(){M("ALL"),setTimeout((function(){H(0,"ALL")}),500)}},"\uc804\uccb4\ubcf4\uae30"),l.a.createElement(O.a,{onClick:function(){M("FULL_INDEX"),setTimeout((function(){H(0,"FULL_INDEX")}),500)}},"\uc0c9\uc778\ub9cc \ubcf4\uae30"),l.a.createElement(O.a,{onClick:function(){M("PROPAGATE"),setTimeout((function(){H(0,"PROPAGATE")}),500)}},"\uc804\ud30c\ub9cc \ubcf4\uae30"),l.a.createElement(O.a,{onClick:function(){return P(new Date)}},"\ucd08\uae30\ud654"),l.a.createElement(O.a,{onClick:function(){var e=new Date;e.setDate(e.getDate()-7),P(e)}},"7\uc77c\uc774\uc804 \ubaa8\ub450 \uc0ad\uc81c"))," "):l.a.createElement(l.a.Fragment,null)))))))}))}}]);
//# sourceMappingURL=34.79c3baa3.chunk.js.map