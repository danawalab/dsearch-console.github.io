(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[74],{1194:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(59),r=t(0),c=t.n(r),i=t(38),o=t(87),m=t(11),u=t(170),s=t(676),E=t(607),d=t(650),p=t(598),h=t(677),b=t(724),f=t(597),y=t(604),x=t(683),v=t(684),g=t(682),j=t(681),O=t(609),C=t(697),k=t(843),S=t(1048),w=t(663),L=t(621),R=t(649),N=t(1495),W=t(757),z=t(156),A=t(158),B=t(157),I=t(718),_=t(719),D=t(720),Y=t(717),F=Object(m.c)(u.a)(w.a,L.a),T=Object(m.c)(s.a)(w.a,L.a),U=Object(m.c)(E.a)(w.a,L.a),V=Object(m.c)(d.a)(w.a,L.a),J=Object(m.c)(p.a)(w.a,L.a);a.default=Object(i.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var a=e.dispatch,t=e.authUser,n=e.collection,i=Object(o.f)(),m=Object(r.useRef)(null),u=Object(r.useRef)(null),s=Object(r.useRef)(null),E=Object(r.useState)(null),d=Object(l.a)(E,2),p=d[0],w=d[1],L=Object(r.useState)(!1),q=Object(l.a)(L,2),G=q[0],H=q[1],K=Object(r.useState)(!1),M=Object(l.a)(K,2),P=M[0],Q=M[1],X=Object(r.useState)(!1),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],ae=Object(r.useState)(n.name),te=Object(l.a)(ae,2),ne=te[0],le=te[1],re=Object(r.useState)({}),ce=Object(l.a)(re,2),ie=ce[0],oe=ce[1],me=Object(r.useState)(!1),ue=Object(l.a)(me,2),se=ue[0],Ee=ue[1];function de(e){w(null===p?e.currentTarget:null)}var pe=n.indexA,he=n.indexB;return c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(T,null,c.a.createElement(h.a,null,c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:10},c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3},c.a.createElement("b",null,"\uceec\ub809\uc158 \uc774\ub984")),c.a.createElement(V,{item:!0,xs:9},n.name)),c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3},c.a.createElement("b",null,"\uceec\ub809\uc158 \uc544\uc774\ub514")),c.a.createElement(V,{item:!0,xs:9},n.baseId)),c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud15c\ud50c\ub9bf")),c.a.createElement(V,{item:!0,xs:9},c.a.createElement(b.a,{style:{cursor:"pointer"},onClick:function(){i.push("../indices-templates/".concat(n.baseId))}},n.baseId))),c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud328\ud134")),c.a.createElement(V,{item:!0,xs:9},c.a.createElement(b.a,{mx:1,style:{cursor:"pointer",display:n.indexA.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexA.uuid))}},n.indexA.index),c.a.createElement(J,{component:"span",style:{display:n.indexA.uuid?"none":"inline"}},n.indexA.index),",",c.a.createElement(b.a,{mx:1,style:{cursor:"pointer",display:n.indexB.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexB.uuid))}},n.indexB.index),c.a.createElement(J,{component:"span",style:{display:n.indexB.uuid?"none":"inline"}},n.indexB.index))),c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3},c.a.createElement("b",null,"\uc778\ub371\uc2a4 \uc124\uc815")),c.a.createElement(V,{item:!0,xs:9},c.a.createElement(J,{component:"span",style:{display:"inline"}},"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218: ",null!==n.replicas&&void 0!==n.replicas?n.replicas:"1"))),c.a.createElement(V,{container:!0,my:3},c.a.createElement(V,{item:!0,xs:3}),c.a.createElement(V,{item:!0,xs:9},c.a.createElement(J,{component:"span",style:{display:"inline"}},"\ub9ac\ud504\ub808\uc2dc \uc8fc\uae30: ",n.refresh_interval?n.refresh_interval+"s":"1s")))),c.a.createElement(V,{item:!0,xs:2,align:"right"},t.role.index?c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{variant:"outlined",onClick:de},"\ub354\ubcf4\uae30",c.a.createElement(R.a,null)),c.a.createElement(f.a,{anchorEl:p,open:Boolean(p),onClose:de,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(y.a,{onClick:function(){return Q(!0)}},"\uceec\ub809\uc158 \uc774\ub984 \ubcc0\uacbd"),c.a.createElement(y.a,{onClick:function(){return ee(!0)}},"\uceec\ub809\uc158 \uc124\uc815 \ubcc0\uacbd"),c.a.createElement(y.a,{style:{backgroundColor:z.a[300]},onClick:function(){return H(!0)}},"\uceec\ub809\uc158 \uc0ad\uc81c"))):c.a.createElement(c.a.Fragment,null),c.a.createElement(J,null))),c.a.createElement(J,{mt:5},c.a.createElement(F,{variant:"h5"},"\uc2a4\uc651 \uc778\ub371\uc2a4")),c.a.createElement(V,{container:!0},c.a.createElement(V,{item:!0,xs:12,md:12,lg:6},c.a.createElement(J,{px:5,py:2},c.a.createElement(x.a,null,c.a.createElement(v.a,null,c.a.createElement(g.a,null,c.a.createElement(j.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},pe.index,Object.keys(pe.aliases||{}).find((function(e){return e===n.baseId}))?c.a.createElement(J,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{color:"primary",icon:c.a.createElement(N.a,null),label:"\uc0ac\uc6a9 \uc911"})):pe.uuid?c.a.createElement(J,{component:"span",style:{marginLeft:"20px"}},t.role.index?c.a.createElement(O.a,{icon:c.a.createElement(N.a,null),label:"\uc0ac\uc6a9\ud558\uae30",style:{cursor:"pointer"},onClick:function(){oe({alias:n.baseId,add:pe.index,remove:he.uuid?he.index:null}),Ee(!0)}}):c.a.createElement(O.a,{icon:c.a.createElement(N.a,null),label:"\uc0ac\uc6a9\ud558\uae30",style:{cursor:"pointer"},disabled:!0})):null)),c.a.createElement(g.a,{style:{display:pe.uuid?"none":"table-row"}},c.a.createElement(j.a,{colSpan:4},c.a.createElement(J,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),c.a.createElement(g.a,{style:{display:pe.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),c.a.createElement(j.a,null,c.a.createElement(J,{style:{backgroundColor:pe.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),c.a.createElement(J,{style:{marginLeft:"30px"}},"green"===pe.health?"\uc815\uc0c1":"yellow"===pe.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)),c.a.createElement(g.a,{style:{display:pe.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),c.a.createElement(j.a,null,pe.pri?Number(pe.pri).toLocaleString():"-"),c.a.createElement(j.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),c.a.createElement(j.a,null,pe.rep?Number(pe.rep).toLocaleString():"-")),c.a.createElement(g.a,{style:{display:pe.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,pe.docsCount?Number(pe.docsCount).toLocaleString():"0"),c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,pe.docsDeleted?Number(pe.docsDeleted).toLocaleString():"0")),c.a.createElement(g.a,{style:{display:pe.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),c.a.createElement(j.a,null,pe.storeSize),c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",c.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),c.a.createElement(j.a,null,pe.priStoreSize)),c.a.createElement(g.a,{style:{display:pe.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),c.a.createElement(j.a,null,Object.keys(pe.aliases||{}).join(",")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)))))),c.a.createElement(V,{item:!0,xs:12,md:12,lg:6},c.a.createElement(J,{px:5,py:2},c.a.createElement(x.a,null,c.a.createElement(v.a,null,c.a.createElement(g.a,null,c.a.createElement(j.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},he.index,Object.keys(he.aliases||{}).find((function(e){return e===n.baseId}))?c.a.createElement(J,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{color:"primary",icon:c.a.createElement(N.a,null),label:"\uc0ac\uc6a9 \uc911"})):he.uuid?c.a.createElement(J,{component:"span",style:{marginLeft:"20px"}},c.a.createElement(O.a,{icon:c.a.createElement(N.a,null),label:"\uc0ac\uc6a9\ud558\uae30",style:{cursor:"pointer"},onClick:function(){oe({alias:n.baseId,add:he.index,remove:pe.uuid?pe.index:null}),Ee(!0)}})):null)),c.a.createElement(g.a,{style:{display:he.uuid?"none":"table-row"}},c.a.createElement(j.a,{colSpan:4},c.a.createElement(J,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),c.a.createElement(g.a,{style:{display:he.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),c.a.createElement(j.a,null,c.a.createElement(J,{style:{backgroundColor:he.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),c.a.createElement(J,{style:{marginLeft:"30px"}},"green"===he.health?"\uc815\uc0c1":"yellow"===he.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),c.a.createElement(j.a,null),c.a.createElement(j.a,null)),c.a.createElement(g.a,{style:{display:he.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),c.a.createElement(j.a,null,he.pri?Number(pe.pri).toLocaleString():"-"),c.a.createElement(j.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),c.a.createElement(j.a,null,he.rep?Number(he.rep).toLocaleString():"-")),c.a.createElement(g.a,{style:{display:he.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,he.docsCount?Number(he.docsCount).toLocaleString():"0"),c.a.createElement(j.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),c.a.createElement(j.a,null,he.docsDeleted?Number(he.docsDeleted).toLocaleString():"0")),c.a.createElement(g.a,{style:{display:he.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),c.a.createElement(j.a,null,he.storeSize),c.a.createElement(j.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",c.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),c.a.createElement(j.a,null,he.priStoreSize)),c.a.createElement(g.a,{style:{display:he.uuid?"table-row":"none"}},c.a.createElement(j.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),c.a.createElement(j.a,null,Object.keys(he.aliases||{}).join(",")),c.a.createElement(j.a,null),c.a.createElement(j.a,null))))))))),c.a.createElement(Y.a,{open:G,fullWidth:!0},c.a.createElement(I.a,null,"\uceec\ub799\uc158 \uc0ad\uc81c"),c.a.createElement(_.a,null,c.a.createElement(J,{style:{color:z.a[500]}}," \uc120\ud0dd\ud558\uc2e0 \uceec\ub799\uc158\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? ")),c.a.createElement(D.a,null,c.a.createElement(U,{style:{backgroundColor:z.a[200]},variant:"contained",onClick:function(e){de(e),a(Object(W.b)(n.id)).then((function(e){a(Object(W.l)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc0ad\uc81c"),c.a.createElement(U,{onClick:function(){return H(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(Y.a,{open:P,fullWidth:!0},c.a.createElement(I.a,null,"\uceec\ub799\uc158 \uc774\ub984 \ubcc0\uacbd"),c.a.createElement(_.a,null,c.a.createElement(C.a,{value:ne,onChange:function(e){return le(e.target.value)},fullWidth:!0,placeholder:"\ubcc0\uacbd\ud560 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"})),c.a.createElement(D.a,null,c.a.createElement(U,{color:"primary",variant:"contained",onClick:function(e){de(e),n.name=ne,a(Object(W.g)(n.id,n)).then((function(e){a(Object(W.l)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc218\uc815"),c.a.createElement(U,{onClick:function(){return Q(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(Y.a,{open:$,fullWidth:!0},c.a.createElement(I.a,null,"\ub514\uc11c\uce58 \uc124\uc815"),c.a.createElement(_.a,null,c.a.createElement(J,null,c.a.createElement("b",null,"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218 \uc124\uc815"),c.a.createElement(C.a,{fullWidth:!0,type:"number",defaultValue:n.replicas?n.replicas:1,inputRef:m,placeholder:"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218\ub97c \uc124\uc815\ud574 \uc8fc\uc138\uc694"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"\uc138\uadf8\uba3c\ud2b8 \uc0dd\uc131 \uc8fc\uae30"),c.a.createElement(C.a,{fullWidth:!0,placeholder:"\uc138\uadf8\uba3c\ud2b8 \uc0dd\uc131 \uc8fc\uae30\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",defaultValue:n.refresh_interval?n.refresh_interval:1,inputRef:u}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"\uc5ed\ud560 \ubb34\uc2dc (\uae30\ubcf8 \uac12: allocation \uc0ac\uc6a9)"),c.a.createElement("br",null),c.a.createElement(J,null,c.a.createElement(k.a,{fullWidth:!0},c.a.createElement(S.a,{fullWidth:!0,defaultValue:n.ignoreRoleYn?n.ignoreRoleYn:"N",inputRef:s},c.a.createElement(y.a,{value:"Y"},"\uc0ac\uc6a9"),c.a.createElement(y.a,{value:"N"},"\uc0ac\uc6a9\uc548\ud568")))))),c.a.createElement(D.a,null,c.a.createElement(U,{style:{backgroundColor:A.a[200]},onClick:function(e){de(e),n.replicas=m.current.value,n.refresh_interval=u.current.value,n.ignoreRoleYn=s.current.value,a(Object(W.g)(n.id,n)).then((function(e){a(Object(W.l)()),ee(!1)})).catch((function(e){console.log(e)}))},variant:"contained"},"\uc218\uc815"),c.a.createElement(U,{onClick:function(){return ee(!1)},variant:"contained"},"\ucde8\uc18c"))),c.a.createElement(Y.a,{open:se,fullWidth:!0,onClose:function(){return Ee(!1)}},c.a.createElement(I.a,null,"\ubcc4\uce6d \uad50\uccb4"),c.a.createElement(_.a,null,"\ubcc4\uce6d\uc744 \uad50\uccb4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",c.a.createElement("br",null),c.a.createElement("p",{style:{color:"red"}},"* \uae30\uc874 \uc2a4\uc651\uc778\ub371\uc2a4\uc5d0 \ud560\ub2f9\ub41c \ubcc4\uce6d\uc740 \uc81c\uac70 \ub429\ub2c8\ub2e4.")),c.a.createElement(D.a,null,c.a.createElement(U,{style:{backgroundColor:B.a[200]},onClick:function(){return function(){var e=ie.alias,t=ie.add,l=ie.remove,r=[];r.push({add:{index:t,alias:e}}),l&&r.push({remove:{index:l,alias:e}}),a(Object(W.e)(r)).then((function(e){a(Object(W.i)(n.id)),Ee(!1)}))}()},variant:"contained"},"\uad50\uccb4"),c.a.createElement(U,{onClick:function(){return Ee(!1)},variant:"contained"},"\ucde8\uc18c"))))}))}}]);
//# sourceMappingURL=74.fab0f1dc.chunk.js.map