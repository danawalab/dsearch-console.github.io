(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[72],{1100:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(59),r=t(0),c=t.n(r),i=t(36),o=t(87),m=t(11),u=t(170),s=t(674),E=t(607),d=t(648),p=t(598),h=t(675),b=t(718),f=t(597),y=t(604),x=t(686),g=t(687),v=t(685),j=t(684),O=t(609),C=t(703),k=t(661),S=t(620),w=t(647),L=t(1399),R=t(748),N=t(155),z=t(157),W=t(156),A=t(720),B=t(721),I=t(722),_=t(719),D=Object(m.c)(u.a)(k.a,S.a),Y=Object(m.c)(s.a)(k.a,S.a),F=Object(m.c)(E.a)(k.a,S.a),T=Object(m.c)(d.a)(k.a,S.a),U=Object(m.c)(p.a)(k.a,S.a);a.default=Object(i.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var a=e.dispatch,t=e.authUser,n=e.collection,i=Object(o.f)(),m=Object(r.useRef)(null),u=Object(r.useRef)(null),s=Object(r.useRef)(null),E=Object(r.useState)(null),d=Object(l.a)(E,2),p=d[0],k=d[1],S=Object(r.useState)(!1),V=Object(l.a)(S,2),J=V[0],q=V[1],G=Object(r.useState)(!1),H=Object(l.a)(G,2),K=H[0],M=H[1],P=Object(r.useState)(!1),Q=Object(l.a)(P,2),X=Q[0],Z=Q[1],$=Object(r.useState)(n.name),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],ne=Object(r.useState)({}),le=Object(l.a)(ne,2),re=le[0],ce=le[1],ie=Object(r.useState)(!1),oe=Object(l.a)(ie,2),me=oe[0],ue=oe[1];function se(e){k(null===p?e.currentTarget:null)}var Ee=n.indexA,de=n.indexB;return c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(Y,null,c.a.createElement(h.a,null,c.a.createElement(T,{container:!0},c.a.createElement(T,{item:!0,xs:10},c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3},c.a.createElement("b",null,"\uceec\ub809\uc158 \uc774\ub984")),c.a.createElement(T,{item:!0,xs:9},n.name)),c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3},c.a.createElement("b",null,"\uceec\ub809\uc158 \uc544\uc774\ub514")),c.a.createElement(T,{item:!0,xs:9},n.baseId)),c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud15c\ud50c\ub9bf")),c.a.createElement(T,{item:!0,xs:9},c.a.createElement(b.a,{style:{cursor:"pointer"},onClick:function(){i.push("../indices-templates/".concat(n.baseId))}},n.baseId))),c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud328\ud134")),c.a.createElement(T,{item:!0,xs:9},c.a.createElement(b.a,{mx:1,style:{cursor:"pointer",display:n.indexA.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexA.uuid))}},n.indexA.index),c.a.createElement(U,{component:"span",style:{display:n.indexA.uuid?"none":"inline"}},n.indexA.index),",",c.a.createElement(b.a,{mx:1,style:{cursor:"pointer",display:n.indexB.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexB.uuid))}},n.indexB.index),c.a.createElement(U,{component:"span",style:{display:n.indexB.uuid?"none":"inline"}},n.indexB.index))),c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \uc124\uc815")),c.a.createElement(T,{item:!0,xs:9},c.a.createElement(U,{component:"span",style:{display:"inline"}},"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218: ",n.replicas?n.replicas:"1"))),c.a.createElement(T,{container:!0,my:3},c.a.createElement(T,{item:!0,xs:3}),c.a.createElement(T,{item:!0,xs:9},c.a.createElement(U,{component:"span",style:{display:"inline"}},"\ub9ac\ud504\ub808\uc2dc \uc8fc\uae30: ",n.refresh_interval?n.refresh_interval+"s":"1s")))),c.a.createElement(T,{item:!0,xs:2,align:"right"},t.role.index?c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{variant:"outlined",onClick:se},"\ub354\ubcf4\uae30",c.a.createElement(w.a,null)),c.a.createElement(f.a,{anchorEl:p,open:Boolean(p),onClose:se,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(y.a,{onClick:function(){return M(!0)}},"\uceec\ub809\uc158 \uc774\ub984 \ubcc0\uacbd"),c.a.createElement(y.a,{onClick:function(){return Z(!0)}},"\uceec\ub809\uc158 \uc124\uc815 \ubcc0\uacbd"),c.a.createElement(y.a,{style:{backgroundColor:N.a[300]},onClick:function(){return q(!0)}},"\uceec\ub809\uc158 \uc0ad\uc81c"))):c.a.createElement(c.a.Fragment,null),c.a.createElement(U,null))),c.a.createElement(U,{mt:5},c.a.createElement(D,{variant:"h5"},"\uc2a4\uc651 \uc778\ub371\uc2a4")),c.a.createElement(T,{container:!0},c.a.createElement(T,{item:!0,xs:12,md:12,lg:6},c.a.createElement(U,{px:5,py:2},c.a.createElement(x.a,null,c.a.createElement(g.a,null,c.a.createElement(v.a,null,c.a.createElement(j.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},Ee.index,Object.keys(Ee.aliases||{}).find((function(e){return e===n.baseId}))?c.a.createElement(U,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{color:"primary",icon:c.a.createElement(L.a,null),label:"\uc0ac\uc6a9 \uc911"})):Ee.uuid?c.a.createElement(U,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{icon:c.a.createElement(L.a,null),label:"\uc0ac\uc6a9\ud558\uae30",style:{cursor:"pointer"},onClick:function(){ce({alias:n.baseId,add:Ee.index,remove:de.uuid?de.index:null}),ue(!0)}})):null)),c.a.createElement(v.a,{style:{display:Ee.uuid?"none":"table-row"}},c.a.createElement(j.a,{colSpan:4},c.a.createElement(U,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),c.a.createElement(v.a,{style:{display:Ee.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),c.a.createElement(j.a,null,c.a.createElement(U,{style:{backgroundColor:Ee.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),c.a.createElement(U,{style:{marginLeft:"30px"}},"green"===Ee.health?"\uc815\uc0c1":"yellow"===Ee.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)),c.a.createElement(v.a,{style:{display:Ee.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),c.a.createElement(j.a,null,Ee.pri?Number(Ee.pri).toLocaleString():"-"),c.a.createElement(j.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),c.a.createElement(j.a,null,Ee.rep?Number(Ee.rep).toLocaleString():"-")),c.a.createElement(v.a,{style:{display:Ee.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,Ee.docsCount?Number(Ee.docsCount).toLocaleString():"0"),c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,Ee.docsDeleted?Number(Ee.docsDeleted).toLocaleString():"0")),c.a.createElement(v.a,{style:{display:Ee.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),c.a.createElement(j.a,null,Ee.storeSize),c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",c.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),c.a.createElement(j.a,null,Ee.priStoreSize)),c.a.createElement(v.a,{style:{display:Ee.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),c.a.createElement(j.a,null,Object.keys(Ee.aliases||{}).join(",")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)))))),c.a.createElement(T,{item:!0,xs:12,md:12,lg:6},c.a.createElement(U,{px:5,py:2},c.a.createElement(x.a,null,c.a.createElement(g.a,null,c.a.createElement(v.a,null,c.a.createElement(j.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},de.index,Object.keys(de.aliases||{}).find((function(e){return e===n.baseId}))?c.a.createElement(U,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{color:"primary",icon:c.a.createElement(L.a,null),label:"\uc0ac\uc6a9 \uc911"})):de.uuid?c.a.createElement(U,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{icon:c.a.createElement(L.a,null),label:"\uc0ac\uc6a9\ud558\uae30",style:{cursor:"pointer"},onClick:function(){ce({alias:n.baseId,add:de.index,remove:Ee.uuid?Ee.index:null}),ue(!0)}})):null)),c.a.createElement(v.a,{style:{display:de.uuid?"none":"table-row"}},c.a.createElement(j.a,{colSpan:4},c.a.createElement(U,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),c.a.createElement(v.a,{style:{display:de.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),c.a.createElement(j.a,null,c.a.createElement(U,{style:{backgroundColor:de.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),c.a.createElement(U,{style:{marginLeft:"30px"}},"green"===de.health?"\uc815\uc0c1":"yellow"===de.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)),c.a.createElement(v.a,{style:{display:de.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),c.a.createElement(j.a,null,de.pri?Number(Ee.pri).toLocaleString():"-"),c.a.createElement(j.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),c.a.createElement(j.a,null,de.rep?Number(de.rep).toLocaleString():"-")),c.a.createElement(v.a,{style:{display:de.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,de.docsCount?Number(de.docsCount).toLocaleString():"0"),c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,de.docsDeleted?Number(de.docsDeleted).toLocaleString():"0")),c.a.createElement(v.a,{style:{display:de.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),c.a.createElement(j.a,null,de.storeSize),c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",c.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),c.a.createElement(j.a,null,de.priStoreSize)),c.a.createElement(v.a,{style:{display:de.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),c.a.createElement(j.a,null,Object.keys(de.aliases||{}).join(",")),c.a.createElement(j.a,null),c.a.createElement(j.a,null))))))))),c.a.createElement(_.a,{open:J,fullWidth:!0},c.a.createElement(A.a,null,"\uceec\ub799\uc158 \uc0ad\uc81c"),c.a.createElement(B.a,null,c.a.createElement(U,{style:{color:N.a[500]}}," \uc120\ud0dd\ud558\uc2e0 \uceec\ub799\uc158\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? ")),c.a.createElement(I.a,null,c.a.createElement(F,{style:{backgroundColor:N.a[200]},variant:"contained",onClick:function(e){se(e),a(Object(R.b)(n.id)).then((function(e){a(Object(R.l)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc0ad\uc81c"),c.a.createElement(F,{onClick:function(){return q(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(_.a,{open:K,fullWidth:!0},c.a.createElement(A.a,null,"\uceec\ub799\uc158 \uc774\ub984 \ubcc0\uacbd"),c.a.createElement(B.a,null,c.a.createElement(C.a,{value:ae,onChange:function(e){return te(e.target.value)},fullWidth:!0,placeholder:"\ubcc0\uacbd\ud560 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"})),c.a.createElement(I.a,null,c.a.createElement(F,{color:"primary",variant:"contained",onClick:function(e){se(e),n.name=ae,a(Object(R.g)(n.id,n)).then((function(e){a(Object(R.l)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc218\uc815"),c.a.createElement(F,{onClick:function(){return M(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(_.a,{open:X,fullWidth:!0},c.a.createElement(A.a,null,"\ub514\uc11c\uce58 \uc124\uc815"),c.a.createElement(B.a,null,c.a.createElement(U,{flex:!0},c.a.createElement("b",null,"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218 \uc124\uc815"),c.a.createElement(C.a,{fullWidth:!0,defaultValue:n.replicas?n.replicas:1,inputRef:m,placeholder:"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218\ub97c \uc124\uc815\ud574 \uc8fc\uc138\uc694"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"\uc138\uadf8\uba3c\ud2b8 \uc0dd\uc131 \uc8fc\uae30"),c.a.createElement(C.a,{fullWidth:!0,placeholder:"\uc138\uadf8\uba3c\ud2b8 \uc0dd\uc131 \uc8fc\uae30\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",defaultValue:n.refresh_interval?n.refresh_interval:1,inputRef:u}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"\uc5ed\ud560 \ubb34\uc2dc (Y/N)"),c.a.createElement(C.a,{fullWidth:!0,placeholder:"\uc5ed\ud560\uc744 \ubb34\uc2dc\ud560 \uac83\uc778\uc9c0 \uc785\ub825\ud574\uc8fc\uc138\uc694",defaultValue:n.ignoreRoleYn?n.ignoreRoleYn:"N",inputRef:s}))),c.a.createElement(I.a,null,c.a.createElement(F,{style:{backgroundColor:z.a[200]},onClick:function(e){se(e),n.replicas=m.current.value,n.refresh_interval=u.current.value,n.ignoreRoleYn=s.current.value,console.log(n),a(Object(R.g)(n.id,n)).then((function(e){a(Object(R.l)()),Z(!1)})).catch((function(e){console.log(e)}))},variant:"contained"},"\uc218\uc815"),c.a.createElement(F,{onClick:function(){return Z(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(_.a,{open:me,fullWidth:!0,onClose:function(){return ue(!1)}},c.a.createElement(A.a,null,"\ubcc4\uce6d \uad50\uccb4"),c.a.createElement(B.a,null,"\ubcc4\uce6d\uc744 \uad50\uccb4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",c.a.createElement("br",null),c.a.createElement("p",{style:{color:"red"}},"* \uae30\uc874 \uc2a4\uc651\uc778\ub371\uc2a4\uc5d0 \ud560\ub2f9\ub41c \ubcc4\uce6d\uc740 \uc81c\uac70 \ub429\ub2c8\ub2e4.")),c.a.createElement(I.a,null,c.a.createElement(F,{style:{backgroundColor:W.a[200]},onClick:function(){return function(){var e=re.alias,t=re.add,l=re.remove,r=[];r.push({add:{index:t,alias:e}}),l&&r.push({remove:{index:l,alias:e}}),a(Object(R.e)(r)).then((function(e){a(Object(R.i)(n.id)),ue(!1)}))}()},variant:"contained"},"\uad50\uccb4"),c.a.createElement(F,{onClick:function(){return ue(!1)},variant:"contained"},"\ucde8\uc18c"))))}))}}]);
//# sourceMappingURL=72.b740c9ae.chunk.js.map