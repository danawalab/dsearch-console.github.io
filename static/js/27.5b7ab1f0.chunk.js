(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[27],{1058:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(56),o=a(0),c=a.n(o),i=a(10),l=a(124),s=a.n(l),d=a(711),u=a(885),p=a(757),m=a(89),f=a(756),v=a(618),b=a(208),h=a(687),g=a(682),j=a(686),O=a(689),y=a(688),E=a(685),x=a(582),k=a(758),w=a(35),N=a(4),C=new(a(64).a),R=Object(i.c)(d.a)(x.a),z=Object(i.c)(u.a)(x.a,k.a),A=Object(i.c)(p.a)(x.a);var H=Object(E.a)((function(e){return{}}));t.default=Object(w.b)((function(e){return Object(r.a)({},e.apiManagementReducers)}))((function(e){var t=e.dispatch,a=e.cat,r=H(),i=c.a.useState("master"),l=Object(n.a)(i,2),d=l[0],u=l[1];Object(o.useEffect)((function(){var e;null!==d&&t((e=d,function(t){return C.call({uri:"/elasticsearch/_cat/".concat(e,"?format=json")}).then((function(e){return t({type:N.d,payload:e.data})})).catch((function(e){return console.error(e)}))}))}),[d]);var p=[];return a.length>0&&(p=Object.keys(a[0])),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"API"}),c.a.createElement(m.a,{variant:"h3",gutterBottom:!0,display:"inline"},"API"),c.a.createElement(R,{my:6}),c.a.createElement("div",{className:r.root},c.a.createElement(f.a,{variant:"outlined",fullWidth:!0},c.a.createElement(z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){u(e.target.value)}},c.a.createElement(v.a,{value:"allocation"},"allocation"),c.a.createElement(v.a,{value:"shards"},"shards"),c.a.createElement(v.a,{value:"master"},"master"),c.a.createElement(v.a,{value:"nodes"},"nodes"),c.a.createElement(v.a,{value:"tasks"},"tasks"),c.a.createElement(v.a,{value:"indices"},"indices"),c.a.createElement(v.a,{value:"segments"},"segments"),c.a.createElement(v.a,{value:"count"},"count"),c.a.createElement(v.a,{value:"recovery"},"recovery"),c.a.createElement(v.a,{value:"health"},"health"),c.a.createElement(v.a,{value:"pending_tasks"},"pending_tasks"),c.a.createElement(v.a,{value:"aliases"},"aliases"),c.a.createElement(v.a,{value:"thread_pool"},"thread_pool"),c.a.createElement(v.a,{value:"plugins"},"plugins"),c.a.createElement(v.a,{value:"fielddata"},"fielddata"),c.a.createElement(v.a,{value:"nodeattrs"},"nodeattrs"),c.a.createElement(v.a,{value:"repositories"},"repositories"),c.a.createElement(v.a,{value:"templates"},"templates"))),c.a.createElement(A,{component:b.a,mt:5},c.a.createElement(h.a,{className:r.table},c.a.createElement(g.a,null,c.a.createElement(j.a,null,p.map((function(e,t){return c.a.createElement(O.a,{key:t}," ",e," ")})))),c.a.createElement(y.a,null,a.map((function(e,t){return c.a.createElement(j.a,{key:t},p.map((function(t,a){return c.a.createElement(O.a,{key:a}," ",e[t]," ")})))})))))))}))},670:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},673:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},674:function(e,t,a){"use strict";var r=a(34),n=a(221);function o(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}t.a=function(e){var t=e.prop,a=e.cssProperty,c=void 0===a?e.prop:a,i=e.themeKey,l=e.transform,s=function(e){if(null==e[t])return null;var a=e[t],s=o(e.theme,i)||{};return Object(n.a)(e,a,(function(e){var t;return"function"===typeof s?t=s(e):Array.isArray(s)?t=s[e]||e:(t=o(s,e)||e,l&&(t=l(t))),!1===c?t:Object(r.a)({},c,t)}))};return s.propTypes={},s.filterProps=[t],s}},675:function(e,t,a){"use strict";a(1);var r=a(127);t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=function(e){return t.reduce((function(t,a){var n=a(e);return n?Object(r.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n}},682:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),c=(a(3),a(7)),i=a(9),l=a(670),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"thead":d,p=Object(n.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(r.a)({className:Object(c.a)(a.root,i),ref:t},p)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},685:function(e,t,a){"use strict";var r=a(1),n=a(328),o=a(93);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(r.a)({defaultTheme:o.a},t))}},686:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),c=(a(3),a(7)),i=a(9),l=a(670),s=a(17),d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,p=void 0!==u&&u,m=e.selected,f=void 0!==m&&m,v=Object(n.a)(e,["classes","className","component","hover","selected"]),b=o.useContext(l.a);return o.createElement(d,Object(r.a)({ref:t,className:Object(c.a)(a.root,i,b&&{head:a.head,footer:a.footer}[b.variant],p&&a.hover,f&&a.selected)},v))}));t.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},687:function(e,t,a){"use strict";var r=a(6),n=a(1),o=a(0),c=(a(3),a(7)),i=a(9),l=a(673),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,p=void 0===u?"default":u,m=e.size,f=void 0===m?"medium":m,v=e.stickyHeader,b=void 0!==v&&v,h=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=o.useMemo((function(){return{padding:p,size:f,stickyHeader:b}}),[p,f,b]);return o.createElement(l.a.Provider,{value:g},o.createElement(d,Object(n.a)({ref:t,className:Object(c.a)(a.root,i,b&&a.stickyHeader)},h)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},688:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),c=(a(3),a(7)),i=a(9),l=a(670),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"tbody":d,p=Object(n.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(r.a)({className:Object(c.a)(a.root,i),ref:t},p)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},689:function(e,t,a){"use strict";var r=a(6),n=a(1),o=a(0),c=(a(3),a(7)),i=a(9),l=a(14),s=a(17),d=a(673),u=a(670),p=o.forwardRef((function(e,t){var a,i=e.align,s=void 0===i?"inherit":i,p=e.classes,m=e.className,f=e.component,v=e.padding,b=e.scope,h=e.size,g=e.sortDirection,j=e.variant,O=Object(r.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=o.useContext(d.a),E=o.useContext(u.a);a=f||(E&&"head"===E.variant?"th":"td");var x=b;!x&&E&&"head"===E.variant&&(x="col");var k=v||(y&&y.padding?y.padding:"default"),w=h||(y&&y.size?y.size:"medium"),N=j||E&&E.variant,C=null;return g&&(C="asc"===g?"ascending":"descending"),o.createElement(a,Object(n.a)({ref:t,className:Object(c.a)(p.root,p[N],m,"inherit"!==s&&p["align".concat(Object(l.a)(s))],"default"!==k&&p["padding".concat(Object(l.a)(k))],"medium"!==w&&p["size".concat(Object(l.a)(w))],"head"===N&&y&&y.stickyHeader&&p.stickyHeader),"aria-sort":C,scope:x},O))}));t.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},711:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),c=(a(3),a(7)),i=a(9),l=a(17),s=o.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,l=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,p=e.flexItem,m=void 0!==p&&p,f=e.light,v=void 0!==f&&f,b=e.orientation,h=void 0===b?"horizontal":b,g=e.role,j=void 0===g?"hr"!==u?"separator":void 0:g,O=e.variant,y=void 0===O?"fullWidth":O,E=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(r.a)({className:Object(c.a)(l.root,s,"fullWidth"!==y&&l[y],i&&l.absolute,m&&l.flexItem,v&&l.light,"vertical"===h&&l.vertical),role:j,ref:t},E))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},757:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),c=(a(3),a(7)),i=a(9),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({ref:t,className:Object(c.a)(a.root,i)},d))}));t.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},758:function(e,t,a){"use strict";var r=a(674),n=a(675);function o(e){return e<=1?"".concat(100*e,"%"):e}var c=Object(r.a)({prop:"width",transform:o}),i=Object(r.a)({prop:"maxWidth",transform:o}),l=Object(r.a)({prop:"minWidth",transform:o}),s=Object(r.a)({prop:"height",transform:o}),d=Object(r.a)({prop:"maxHeight",transform:o}),u=Object(r.a)({prop:"minHeight",transform:o}),p=(Object(r.a)({prop:"size",cssProperty:"width",transform:o}),Object(r.a)({prop:"size",cssProperty:"height",transform:o}),Object(r.a)({prop:"boxSizing"})),m=Object(n.a)(c,i,l,s,d,u,p);t.a=m}}]);
//# sourceMappingURL=27.5b7ab1f0.chunk.js.map