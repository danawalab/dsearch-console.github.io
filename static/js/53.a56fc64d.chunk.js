(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[53],{1486:function(e,t,a){"use strict";a.r(t);var r=a(59),n=a(0),l=a.n(n),c=a(674),s=a(675),u=a(598),i=a(646),o=a(603),m=a(170),d=a(635),p=a(694),f=a(38),g=a(732),b=Object(p.a)((function(e){return{formControl:{minWidth:150},select:{minWidth:80},form:{padding:"2px 4px",display:"flex",alignItems:"center",width:500},input:{marginLeft:e.spacing(1),flex:1,borderBottom:"1px solid gray","&:hover":{borderBottom:"2px solid black"}},iconButton:{padding:5},divider:{height:28,margin:4},right:{textAlign:"right"}}}));function h(e){var t=e.settings,a=e.searchResult;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){var r=!0,n="";for(var c in a.result)e.id===a.result[c].type&&(r?(n=a.result[c].keyword?a.result[c].value?a.result[c].keyword+", "+a.result[c].value:a.result[c].keyword:a.result[c].value,r=!1):n+=", "+a.result[c].value);return r?l.a.createElement(l.a.Fragment,{key:t}):l.a.createElement("li",{id:t,key:t}," ",e.name," "," : "," ",n)})))}t.default=Object(f.b)((function(e){return{settings:e.dictionaryReducers.settings,searchResult:e.dictionaryReducers.searchResult}}))((function(e){var t=e.dispatch,a=e.settings,p=e.searchResult,f=b();Object(n.useEffect)((function(){t(Object(g.m)()),p.result=[]}),[]);var v=Object(n.useState)(""),E=Object(r.a)(v,2),y=E[0],j=E[1],O=Object(n.useRef)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(c.a,null,l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(i.a,{inputRef:O,className:f.input,placeholder:"\uac80\uc0c9",onKeyPress:function(e){if("Enter"===e.key){if(0===O.current.value.length)return;p.result=[{type:"SYSTEM",posTag:"N",prob:"0"}],t(Object(g.g)({word:O.current.value})),j(O.current.value)}}}),l.a.createElement(o.a,{type:"submit",className:f.iconButton,"aria-label":"search",onClick:function(e){0!==O.current.value.length&&(p.result=[{type:"SYSTEM",posTag:"N",prob:"0"}],t(Object(g.g)({word:O.current.value})),j(O.current.value))}},l.a.createElement(d.a,null))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(m.a,{variant:"h4"},""===y?"\ud604\uc7ac \uc785\ub825\ub41c \ub0b4\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.":y),l.a.createElement("ul",null,0===p.result.length?l.a.createElement("li",null," \ud604\uc7ac \uc785\ub825\ub41c \ub0b4\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. "):p.result.map((function(e){return"SYSTEM"===e.type?l.a.createElement("li",{key:e.type}," ",e.posTag," "," : "," ",e.prob," "):l.a.createElement(l.a.Fragment,null)})),0===p.result.length?l.a.createElement(l.a.Fragment,{key:99999}):l.a.createElement(h,{settings:a,searchResult:p}))))))}))},674:function(e,t,a){"use strict";var r=a(1),n=a(6),l=a(0),c=(a(3),a(7)),s=a(168),u=a(9),i=l.forwardRef((function(e,t){var a=e.classes,u=e.className,i=e.raised,o=void 0!==i&&i,m=Object(n.a)(e,["classes","className","raised"]);return l.createElement(s.a,Object(r.a)({className:Object(c.a)(a.root,u),elevation:o?8:1,ref:t},m))}));t.a=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(i)},675:function(e,t,a){"use strict";var r=a(1),n=a(6),l=a(0),c=(a(3),a(7)),s=a(9),u=l.forwardRef((function(e,t){var a=e.classes,s=e.className,u=e.component,i=void 0===u?"div":u,o=Object(n.a)(e,["classes","className","component"]);return l.createElement(i,Object(r.a)({className:Object(c.a)(a.root,s),ref:t},o))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u)}}]);
//# sourceMappingURL=53.a56fc64d.chunk.js.map