(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[71],{1009:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(62),o=a(17),c=a(0),l=a.n(c),s=a(95),i=a(38),u=a(14),m=a(136),h=a.n(m),g=a(384),b=a(179),p=a(624),d=a(100),f=a(762),v=a(694),E=a(761),O=a(748),j=a(727),S=a(671),y=a(595),C=a(113),w=a(3);function I(){var e=Object(o.a)(["\n  padding: ","px;\n\n  "," {\n    padding: ","px;\n  }\n"]);return I=function(){return e},e}var k=Object(u.c)(g.a)(y.a),x=Object(u.c)(b.a)(I(),(function(e){return e.theme.spacing(6)}),(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.spacing(10)}));t.default=Object(i.b)((function(e){return Object(n.a)({},e.dsearchReducers)}))((function(e){var t=e.dispatch,a=Object(s.f)(),n=Object(c.useState)(""),o=Object(r.a)(n,2),i=o[0],u=o[1],m=Object(c.useState)(!1),g=Object(r.a)(m,2),b=g[0],y=g[1],I=Object(c.useState)(""),W=Object(r.a)(I,2),F=W[0],J=W[1],q=Object(c.useState)(""),R=Object(r.a)(q,2),z=R[0],A=R[1],B=Object(c.useState)(!1),K=Object(r.a)(B,2),N=K[0],U=K[1],_=Object(c.useState)(!1),L=Object(r.a)(_,2),T=L[0],D=L[1];function G(){localStorage.removeItem(w.t),0!==F.length&&0!==z.length?(U(!1),H(i,F,z)):U(!0)}function H(e,a,n){e.startsWith("https://")||e.startsWith("http://")||(e="http://"+e),sessionStorage.setItem(w.u,e),t(Object(C.d)({server:e,email:a,password:n})).then((function(t){console.log("sign in success"),U(!1),T&&localStorage.setItem(w.t,JSON.stringify({hash1:T,hash2:btoa(btoa(btoa(e))),hash3:btoa(btoa(btoa(a))),hash4:btoa(btoa(btoa(n)))})),location.replace("/cluster")})).catch((function(e){U(!0),console.log(e)}))}return Object(c.useEffect)((function(){var e=localStorage.getItem(w.u),n=JSON.parse(localStorage.getItem(w.t)||"{}");try{t(Object(C.b)()).then((function(e){console.log("authenticated"),sessionStorage.setItem(w.u,localStorage.getItem(w.u)),a.replace("/cluster")})),n.hash1&&(console.log("auto login"),D(n.hash1),H(atob(atob(atob(n.hash2))),atob(atob(atob(n.hash3))),atob(atob(atob(n.hash4))))),e&&u(e)}catch(r){console.error(r),sessionStorage.removeItem(w.u),localStorage.removeItem(w.u)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null,l.a.createElement(h.a,{title:"\ub85c\uadf8\uc778"}),l.a.createElement(p.a,{align:"center"},l.a.createElement("img",{alt:"dsearch",src:"/static/img/dsearch/danawa_m_login.png"})),l.a.createElement(p.a,{style:{marginTop:"12px"}},l.a.createElement(d.a,{style:{fontSize:"1.45rem"},component:"h1",variant:"h4",align:"center",gutterBottom:!0},"\ub85c\uadf8\uc778")),l.a.createElement("form",null,l.a.createElement(f.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(v.a,{htmlFor:"server"},"\uc11c\ubc84"),l.a.createElement(E.a,{id:"server",name:"server",autoComplete:"server",autoFocus:!0,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){if(0!==i.length){var e=i;i.startsWith("http")||(e="http://"+i),t(Object(C.c)(e)).then((function(e){y(!e)})).catch((function(e){return y(!0)}))}else y(!0)},error:b})),l.a.createElement(f.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(v.a,{htmlFor:"server"},"\uc774\uba54\uc77c"),l.a.createElement(E.a,{id:"email",name:"email",autoComplete:"email",value:F,onChange:function(e){return J(e.target.value)},error:N,onKeyUp:function(e){return 13===e.keyCode?G():null}})),l.a.createElement(f.a,{margin:"normal",required:!0,fullWidth:!0},l.a.createElement(v.a,{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),l.a.createElement(E.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:z,onChange:function(e){return A(e.target.value)},error:N,onKeyUp:function(e){return 13===e.keyCode?G():null}})),l.a.createElement(O.a,{control:l.a.createElement(j.a,{color:"primary",checked:T,onChange:function(){return D(!T)}}),label:"\ub85c\uadf8\uc778 \uc800\uc7a5"}),l.a.createElement(S.a,{container:!0},l.a.createElement(S.a,{item:!0,xs:12},l.a.createElement(p.a,null,l.a.createElement(k,{fullWidth:!0,variant:"contained",color:"primary",mb:2,onClick:G},"\ub85c\uadf8\uc778"))))),l.a.createElement(p.a,{style:{position:"relative",top:"60px",height:"0px",textAlign:"center",fontSize:"0.8em"}},"\xa9 2020. danawa Co., Ltd. All Rights Reserved.")))}))}}]);
//# sourceMappingURL=71.76609df4.chunk.js.map