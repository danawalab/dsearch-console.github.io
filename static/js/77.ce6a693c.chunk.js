(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[77],{1509:function(e,a,t){"use strict";t.r(a);var n=t(98),l=t.n(n),r=t(133),c=t(59),o=t(0),m=t.n(o),i=t(11),u=t(131),s=t.n(u),E=t(714),d=t(650),p=t(170),h=t(598),g=t(607),b=t(681),f=t(678),v=t(680),y=t(679),j=t(682),k=t(656),S=t(720),_=t(721),w=t(722),O=t(726),C=t(713),x=t(723),F=t(769),T=t(663),H=t(38),L=t(660),I=new(t(76).a),M=Object(i.c)(E.a)(T.a);a.default=Object(H.b)((function(e){return{authUser:e.dsearchReducers.authUser}}))((function(e){var a=e.authUser,t=Object(H.c)(),n=m.a.useState(!0),o=Object(c.a)(n,2),i=o[0],u=o[1],E=m.a.useState(!0),T=Object(c.a)(E,2),B=T[0],D=T[1],J=m.a.useState(!0),R=Object(c.a)(J,2),U=R[0],P=R[1],A=m.a.useState(!0),N=Object(c.a)(A,2),W=N[0],q=N[1],z=m.a.useState(""),G=Object(c.a)(z,2),K=G[0],Q=G[1],V=m.a.useState(""),X=Object(c.a)(V,2),Y=X[0],Z=X[1],$=m.a.useState(null),ee=Object(c.a)($,2),ae=ee[0],te=ee[1],ne=m.a.useState(!1),le=Object(c.a)(ne,2),re=le[0],ce=le[1],oe=m.a.useState(!1),me=Object(c.a)(oe,2),ie=me[0],ue=me[1],se=m.a.useState(null),Ee=Object(c.a)(se,2),de=Ee[0],pe=Ee[1],he=m.a.useState(!1),ge=Object(c.a)(he,2),be=ge[0],fe=ge[1],ve=m.a.useState(!1),ye=Object(c.a)(ve,2),je=ye[0],ke=ye[1],Se=m.a.useState(""),_e=Object(c.a)(Se,2),we=_e[0],Oe=_e[1],Ce=m.a.useState("info"),xe=Object(c.a)(Ce,2),Fe=xe[0],Te=xe[1];function He(){var e,a=new FormData;a.append("pipeline",i),a.append("templates",B),a.append("collection",U),a.append("jdbc",W),(e=a,I.call({uri:"/migration/download",method:"POST",headers:{"Content-type":"application/json"},data:e})).then((function(e){console.log(e);var a=e.data;Q(a.result),te(null);var t=JSON.parse(sessionStorage.getItem("SET_DSEARCH_AUTH_USER")),n=document.createElement("a");n.href=window.URL.createObjectURL(new Blob([JSON.stringify(e.data)],{type:"text/plain"})),n.setAttribute("download","dsearch-".concat(t.cluster.name,"-backup.json")),document.body.appendChild(n),n.click()})).catch((function(e){console.log(e)})),ce(!1)}function Le(){var e=new FormData;e.append("filename",de),Z(""),fe(!0),t(function(e){return function(a){return I.call({uri:"/migration/upload",method:"POST",data:e,headers:{"Content-type":"multipart/form-data"}})}}(e)).then(function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ke(!0),Q(""),a.data.result?(te(a.data),Te("info"),Oe(a.data.message),ue(!1)):(Te("error"),te(null),Oe("\uc2e4\ud328"),Z(a.data.message),ue(!1)),pe(null),fe(!1);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch(function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),Z("\uc5d0\ub7ec \ubc1c\uc0dd"),ke(!0),Te("error"),Oe("\uc2e4\ud328"),fe(!1),pe(null);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}return m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,{title:"\ub9c8\uc774\uadf8\ub808\uc774\uc158"}),m.a.createElement(d.a,{container:!0},m.a.createElement(d.a,{item:!0,xs:6},m.a.createElement(p.a,{variant:"h3",gutterBottom:!0,display:"inline"},"\ub9c8\uc774\uadf8\ub808\uc774\uc158")),m.a.createElement(M,{my:6})),m.a.createElement(h.a,{style:{backgroundColor:"white",padding:"15px",marginBottom:"20px"}},m.a.createElement(p.a,{variant:"h5",style:{margin:"8px"}},"\ub2e4\uc6b4\ub85c\ub4dc"),m.a.createElement(h.a,{ml:2,mt:4,mb:2},"\uc774 \ud074\ub7ec\uc2a4\ud130\uc758 \ubc31\uc5c5 \ub370\uc774\ud130\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4"),m.a.createElement(g.a,{style:{margin:"8px"},variant:"outlined",color:"primary",onClick:function(){ce(!0)}},"\ub2e4\uc6b4\ub85c\ub4dc")),m.a.createElement(h.a,{style:{backgroundColor:"white",padding:"15px",marginBottom:"20px"}},m.a.createElement(p.a,{variant:"h5",style:{margin:"8px"}},"\uc5c5\ub85c\ub4dc"),m.a.createElement(h.a,{ml:2,mt:4,mb:2},"\ubc31\uc5c5 \ub370\uc774\ud130\ub85c \ud074\ub7ec\uc2a4\ud130\ub97c \uc14b\ud305 \ud569\ub2c8\ub2e4."),a.role.manage?m.a.createElement(g.a,{style:{margin:"8px"},variant:"outlined",color:"primary",onClick:function(){ue(!0)}},"\uc5c5\ub85c\ub4dc"):m.a.createElement(g.a,{style:{margin:"8px"},variant:"outlined",color:"primary",disabled:!0},"\uc5c5\ub85c\ub4dc")),m.a.createElement(h.a,{width:"100%"},0===K.length?m.a.createElement(m.a.Fragment,null):m.a.createElement(b.a,{key:"detailResult"},m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h4"},"\ub2e4\uc6b4\ub85c\ub4dc \uacb0\uacfc")))),m.a.createElement(j.a,null,m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"\ud30c\uc774\ud504\ub77c\uc778 \ub2e4\uc6b4\ub85c\ub4dc \uac2f\uc218: ",!0===K.pipeline.result?K.pipeline.count:0),m.a.createElement("br",null),K.pipeline.list.length>0?K.pipeline.list.map((function(e){return m.a.createElement("div",{key:e+"_pipeline_download",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"\uceec\ub809\uc158 \ub2e4\uc6b4\ub85c\ub4dc \uac2f\uc218: ",!0===K.collection.result?K.collection.count:0),m.a.createElement("br",null),K.collection.list.length>0?K.collection.list.map((function(e){return m.a.createElement("div",{key:e+"_collection_download",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"JDBC \ub2e4\uc6b4\ub85c\ub4dc \uac2f\uc218: ",!0===K.jdbc.result?K.jdbc.count:0),m.a.createElement("br",null),K.jdbc.list.length>0?K.jdbc.list.map((function(e){return m.a.createElement("div",{key:e+"_jdbc_download",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"\ud15c\ud50c\ub9bf \ub2e4\uc6b4\ub85c\ub4dc \uac2f\uc218: ",!0===K.templates.result?K.templates.count:0),m.a.createElement("br",null),K.templates.list.length>0?K.templates.list.map((function(e){return m.a.createElement("div",{key:e+"_templates_download",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))))),0===Y.length?m.a.createElement(m.a.Fragment,null):m.a.createElement(h.a,null,m.a.createElement(p.a,{variant:"h4",color:"red",style:{margin:"20px 0 8px 4px"}},"\uc5c5\ub85c\ub4dc \uc5d0\ub7ec"),m.a.createElement(h.a,{m:2,border:"1px solid red",p:3},Y)),null==ae?m.a.createElement(m.a.Fragment,null):m.a.createElement(b.a,{key:"detailResult"},m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h4"},"\uc5c5\ub85c\ub4dc \uacb0\uacfc")))),m.a.createElement(j.a,null,m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"[\ud30c\uc774\ud504\ub77c\uc778] \ucd1d \uac2f\uc218: ",ae.pipeline.length),m.a.createElement("br",null),ae.pipeline.length>0?ae.pipeline.map((function(e){return m.a.createElement("div",{key:e+"_pipeline",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"[\uceec\ub809\uc158] \ucd1d \uac2f\uc218: ",ae.collection.length),m.a.createElement("br",null),ae.collection.length>0?ae.collection.map((function(e){return m.a.createElement("div",{key:e+"_collection",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"[JDBC] \ucd1d \uac2f\uc218: ",ae.jdbc.length),m.a.createElement("br",null),ae.jdbc.length>0?ae.jdbc.map((function(e){return m.a.createElement("div",{key:e+"_jdbc",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null))),m.a.createElement(v.a,{hover:!0},m.a.createElement(y.a,null,m.a.createElement(p.a,{variant:"h5"},"[\ud15c\ud50c\ub9bf] \ucd1d \uac2f\uc218: ",ae.templates.length),m.a.createElement("br",null),ae.templates.length>0?ae.templates.map((function(e){return m.a.createElement("div",{key:e+"_templates",dangerouslySetInnerHTML:{__html:" - "+e}})})):m.a.createElement(m.a.Fragment,null)))))),m.a.createElement(k.a,{open:je,autoHideDuration:3e3,onClose:function(){ke(!1),Oe("")}},m.a.createElement(L.a,{elevation:6,variant:"filled",severity:Fe}," ",we," ")),m.a.createElement(S.a,{open:re,fullWidth:!0,onClose:function(){return ce(!1)}},m.a.createElement(_.a,null,"\ub370\uc774\ud130 \ubc31\uc5c5"),m.a.createElement(w.a,null,m.a.createElement(h.a,null,m.a.createElement(O.a,{control:m.a.createElement(C.a,{color:"primary",checked:i,onChange:function(e){u(e.target.checked)}}),label:"\ud30c\uc774\ud504\ub77c\uc778",labelPlacement:"end"}),m.a.createElement(O.a,{control:m.a.createElement(C.a,{color:"primary",checked:B,onChange:function(e){D(e.target.checked)}}),label:"\ud15c\ud50c\ub9bf",labelPlacement:"end"}),m.a.createElement(O.a,{control:m.a.createElement(C.a,{color:"primary",checked:U,onChange:function(e){P(e.target.checked)}}),label:"\uceec\ub809\uc158",labelPlacement:"end"}),m.a.createElement(O.a,{control:m.a.createElement(C.a,{color:"primary",checked:W,onChange:function(e){q(e.target.checked)}}),label:"JDBC",labelPlacement:"end"})),"\uc774 \ud074\ub7ec\uc2a4\ud130\uc758 \ub370\uc774\ud130\ub97c \ubc31\uc5c5 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? (json \ud30c\uc77c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4.)"),m.a.createElement(x.a,null,m.a.createElement(g.a,{variant:"outlined",style:{whiteSpace:"nowrap"},onClick:function(){return He()}},"\ubc31\uc5c5"),m.a.createElement(g.a,{onClick:function(){return ce(!1)}},"\ub2eb\uae30"))),m.a.createElement(S.a,{open:ie,fullWidth:!0,onClose:function(){return ue(!1)}},m.a.createElement(_.a,null,"\ub370\uc774\ud130 \uc5c5\ub85c\ub4dc"),m.a.createElement(w.a,null,m.a.createElement("input",{type:"file",onChange:function(e){pe(e.target.files[0])}}),m.a.createElement(h.a,{m:2},be?m.a.createElement(F.a,null):m.a.createElement(m.a.Fragment,null))),m.a.createElement(x.a,null,m.a.createElement(g.a,{variant:"outlined",style:{whiteSpace:"nowrap"},onClick:function(){return Le()}},"\uc5c5\ub85c\ub4dc"),m.a.createElement(g.a,{onClick:function(){return ue(!1)}},"\ub2eb\uae30"))))}))}}]);
//# sourceMappingURL=77.ce6a693c.chunk.js.map