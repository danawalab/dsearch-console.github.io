(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[75],{979:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(61),c=t(0),r=t.n(c),i=t(39),o=t(94),m=t(14),u=t(713),E=t(99),s=t(684),d=t(378),p=t(665),h=t(618),b=t(683),y=t(723),x=t(616),f=t(623),g=t(690),v=t(691),j=t(689),O=t(692),k=t(627),w=t(707),C=t(688),S=t(588),z=t(654),A=t(664),B=t(1036),I=t(746),L=t(161),R=t(725),W=t(726),F=t(727),T=t(724),U=(Object(m.c)(u.a)(S.a,z.a),Object(m.c)(E.a)(S.a,z.a)),D=Object(m.c)(s.a)(S.a,z.a),J=Object(m.c)(d.a)(S.a,z.a),G=Object(m.c)(p.a)(S.a,z.a),q=Object(m.c)(h.a)(S.a,z.a),H=Object(C.a)((function(e){return{formControl:{minWidth:250},root:{flexGrow:1,width:"100%"},edit:{width:"100%"}}}));a.default=Object(i.b)((function(e){return Object(n.a)({authUser:e.dsearchReducers.authUser},e.collectionReducers)}))((function(e){var a=e.dispatch,t=e.authUser,n=e.collection,i=Object(o.f)(),m=(H(),Object(c.useState)(null)),u=Object(l.a)(m,2),E=u[0],s=u[1],d=Object(c.useState)(!1),p=Object(l.a)(d,2),h=p[0],C=p[1],S=Object(c.useState)(!1),z=Object(l.a)(S,2),K=z[0],M=z[1],N=Object(c.useState)(n.name),P=Object(l.a)(N,2),Q=P[0],V=P[1];function X(e){s(null===E?e.currentTarget:null)}var Y=n.indexA,Z=n.indexB;return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(D,null,r.a.createElement(b.a,null,r.a.createElement(G,{container:!0},r.a.createElement(G,{item:!0,xs:10},r.a.createElement(G,{container:!0,my:3},r.a.createElement(G,{item:!0,xs:3},r.a.createElement("b",null,"\uceec\ub809\uc158 \uc774\ub984")),r.a.createElement(G,{item:!0,xs:9},n.name)),r.a.createElement(G,{container:!0,my:3},r.a.createElement(G,{item:!0,xs:3},r.a.createElement("b",null,"\uceec\ub809\uc158 \uc544\uc774\ub514")),r.a.createElement(G,{item:!0,xs:9},n.baseId)),r.a.createElement(G,{container:!0,my:3},r.a.createElement(G,{item:!0,xs:3},r.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud15c\ud50c\ub9bf")),r.a.createElement(G,{item:!0,xs:9},r.a.createElement(y.a,{style:{cursor:"pointer"},onClick:function(){i.push("../indices-templates/".concat(n.baseId))}},n.baseId),",")),r.a.createElement(G,{container:!0,my:3},r.a.createElement(G,{item:!0,xs:3},r.a.createElement("b",null,"\uc778\ub371\uc2a4 \ud328\ud134")),r.a.createElement(G,{item:!0,xs:9},r.a.createElement(y.a,{mx:1,style:{cursor:"pointer",display:n.indexA.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexA.uuid))}},n.indexA.index),r.a.createElement(q,{component:"span",style:{display:n.indexA.uuid?"none":"inline"}},n.indexA.index),",",r.a.createElement(y.a,{mx:1,style:{cursor:"pointer",display:n.indexB.uuid?"inline":"none"},onClick:function(){i.push("../indices/".concat(n.indexB.uuid))}},n.indexB.index),r.a.createElement(q,{component:"span",style:{display:n.indexB.uuid?"none":"inline"}},n.indexB.index)))),r.a.createElement(G,{item:!0,xs:2,align:"right"},t.role.index?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{variant:"outlined",onClick:X},"\ub354\ubcf4\uae30",r.a.createElement(A.a,null)),r.a.createElement(x.a,{anchorEl:E,open:Boolean(E),onClose:X,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(f.a,{onClick:function(){return M(!0)}},"\uceec\ub809\uc158 \uc774\ub984 \ubcc0\uacbd"),r.a.createElement(f.a,{style:{backgroundColor:L.a[300]},onClick:function(){return C(!0)}},"\uceec\ub809\uc158 \uc0ad\uc81c"))):r.a.createElement(r.a.Fragment,null),r.a.createElement(q,null))),r.a.createElement(q,{mt:5},r.a.createElement(U,{variant:"h5"},"\uc2a4\uc651 \uc778\ub371\uc2a4")),r.a.createElement(G,{container:!0},r.a.createElement(G,{item:!0,xs:12,md:12,lg:6},r.a.createElement(q,{px:5,py:2},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},Y.index,Object.keys(Y.aliases||{}).find((function(e){return e===n.baseId}))?r.a.createElement(q,{component:"span",style:{marginLeft:"20px"}},r.a.createElement(k.a,{color:"primary",icon:r.a.createElement(B.a,null),label:"\uc0ac\uc6a9"})):null)),r.a.createElement(j.a,{style:{display:Y.uuid?"none":"table-row"}},r.a.createElement(O.a,{colSpan:4},r.a.createElement(q,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),r.a.createElement(j.a,{style:{display:Y.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),r.a.createElement(O.a,null,r.a.createElement(q,{style:{backgroundColor:Y.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),r.a.createElement(q,{style:{marginLeft:"30px"}},"green"===Y.health?"\uc815\uc0c1":"yellow"===Y.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),r.a.createElement(O.a,null),r.a.createElement(O.a,null)),r.a.createElement(j.a,{style:{display:Y.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),r.a.createElement(O.a,null,Y.pri),r.a.createElement(O.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),r.a.createElement(O.a,null,Y.rep)),r.a.createElement(j.a,{style:{display:Y.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),r.a.createElement(O.a,null,Y.docsCount),r.a.createElement(O.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),r.a.createElement(O.a,null,Y.docsDeleted)),r.a.createElement(j.a,{style:{display:Y.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),r.a.createElement(O.a,null,Y.storeSize),r.a.createElement(O.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",r.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),r.a.createElement(O.a,null,Y.priStoreSize)),r.a.createElement(j.a,{style:{display:Y.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),r.a.createElement(O.a,null,Object.keys(Y.aliases||{}).join(",")),r.a.createElement(O.a,null),r.a.createElement(O.a,null)))))),r.a.createElement(G,{item:!0,xs:12,md:12,lg:6},r.a.createElement(q,{px:5,py:2},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,{variant:"head",component:"th",colSpan:4,style:{fontSize:"1.2em"},align:"center"},Z.index,Object.keys(Z.aliases||{}).find((function(e){return e===n.baseId}))?r.a.createElement(q,{component:"span",style:{marginLeft:"20px"}},r.a.createElement(k.a,{color:"primary",icon:r.a.createElement(B.a,null),label:"\uc0ac\uc6a9"})):null)),r.a.createElement(j.a,{style:{display:Z.uuid?"none":"table-row"}},r.a.createElement(O.a,{colSpan:4},r.a.createElement(q,{align:"center"},"\uc544\uc9c1 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))),r.a.createElement(j.a,{style:{display:Z.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\uc0c1\ud0dc"),r.a.createElement(O.a,null,r.a.createElement(q,{style:{backgroundColor:Z.health,width:"20px",height:"20px",borderRadius:"90px",float:"left"}}," "),r.a.createElement(q,{style:{marginLeft:"30px"}},"green"===Z.health?"\uc815\uc0c1":"yellow"===Z.health?"\uc8fc\uc758":"\uc5d0\ub7ec")),r.a.createElement(O.a,null),r.a.createElement(O.a,null)),r.a.createElement(j.a,{style:{display:Z.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac"),r.a.createElement(O.a,null,Z.pri),r.a.createElement(O.a,{variant:"head",component:"th"},"\ub808\ud50c\ub9ac\uce74"),r.a.createElement(O.a,null,Z.rep)),r.a.createElement(j.a,{style:{display:Z.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ubb38\uc11c \uc218"),r.a.createElement(O.a,null,Z.docsCount),r.a.createElement(O.a,{variant:"head",component:"th"},"\uc0ad\uc81c\ubb38\uc11c \uc218"),r.a.createElement(O.a,null,Z.docsDeleted)),r.a.createElement(j.a,{style:{display:Z.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),r.a.createElement(O.a,null,Z.storeSize),r.a.createElement(O.a,{variant:"head",component:"th"},"\ud504\ub77c\uc774\uba38\ub9ac ",r.a.createElement("br",null)," \uc2a4\ud1a0\ub9ac\uc9c0\uc6a9\ub7c9"),r.a.createElement(O.a,null,Z.priStoreSize)),r.a.createElement(j.a,{style:{display:Z.uuid?"table-row":"none"}},r.a.createElement(O.a,{variant:"head",component:"th"},"\ubcc4\uce6d"),r.a.createElement(O.a,null,Object.keys(Z.aliases||{}).join(",")),r.a.createElement(O.a,null),r.a.createElement(O.a,null))))))))),r.a.createElement(T.a,{open:h,fullWidth:!0},r.a.createElement(R.a,null,"\uceec\ub799\uc158 \uc0ad\uc81c"),r.a.createElement(W.a,null,r.a.createElement(q,{style:{color:L.a[500]}}," \uc120\ud0dd\ud558\uc2e0 \uceec\ub799\uc158\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? ")),r.a.createElement(F.a,null,r.a.createElement(J,{style:{backgroundColor:L.a[200]},variant:"contained",onClick:function(e){X(e),a(Object(I.b)(n.id)).then((function(e){a(Object(I.k)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc0ad\uc81c"),r.a.createElement(J,{onClick:function(){return C(!1)},variant:"contained"},"\ucde8\uc18c"))),r.a.createElement(T.a,{open:K,fullWidth:!0},r.a.createElement(R.a,null,"\uceec\ub799\uc158 \uc774\ub984 \ubcc0\uacbd"),r.a.createElement(W.a,null,r.a.createElement(w.a,{value:Q,onChange:function(e){return V(e.target.value)},fullWidth:!0,placeholder:"\ubcc0\uacbd\ud560 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"})),r.a.createElement(F.a,null,r.a.createElement(J,{color:"primary",variant:"contained",onClick:function(e){X(e),n.name=Q,a(Object(I.f)(n.id,n)).then((function(e){a(Object(I.k)()),setTimeout((function(){return i.push("../indices-collections")}),500)})).catch((function(e){console.log(e)}))}},"\uc218\uc815"),r.a.createElement(J,{onClick:function(){return M(!1)},variant:"contained"},"\ucde8\uc18c"))))}))}}]);
//# sourceMappingURL=75.6d396a01.chunk.js.map