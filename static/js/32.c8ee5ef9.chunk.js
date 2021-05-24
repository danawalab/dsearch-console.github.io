(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[32],{1508:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(59),o=t(0),c=t.n(o),i=t(11),l=t(131),s=t.n(l),d=t(714),u=t(1048),m=t(751),p=t(170),v=t(843),f=t(604),g=t(168),b=t(681),h=t(678),j=t(680),y=t(679),O=t(682),E=t(696),x=t(663),k=t(623),N=t(38),w=t(3),C=new(t(76).a),R=Object(i.c)(d.a)(x.a),z=Object(i.c)(u.a)(x.a,k.a),H=Object(i.c)(m.a)(x.a);var A=Object(E.a)((function(e){return{}}));a.default=Object(N.b)((function(e){return Object(n.a)({},e.apiManagementReducers)}))((function(e){var a=e.dispatch,t=e.cat,n=A(),i=c.a.useState("master"),l=Object(r.a)(i,2),d=l[0],u=l[1];Object(o.useEffect)((function(){var e;null!==d&&a((e=d,function(a){return C.call({uri:"/elasticsearch/_cat/".concat(e,"?format=json")}).then((function(e){return a({type:w.d,payload:e.data})})).catch((function(e){return console.error(e)}))}))}),[d]);var m=[];return t.length>0&&(m=Object.keys(t[0])),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"API"}),c.a.createElement(p.a,{variant:"h3",gutterBottom:!0,display:"inline"},"API"),c.a.createElement(R,{my:6}),c.a.createElement("div",{className:n.root},c.a.createElement(v.a,{variant:"outlined",fullWidth:!0},c.a.createElement(z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){u(e.target.value)}},c.a.createElement(f.a,{value:"allocation"},"allocation"),c.a.createElement(f.a,{value:"shards"},"shards"),c.a.createElement(f.a,{value:"master"},"master"),c.a.createElement(f.a,{value:"nodes"},"nodes"),c.a.createElement(f.a,{value:"tasks"},"tasks"),c.a.createElement(f.a,{value:"indices"},"indices"),c.a.createElement(f.a,{value:"segments"},"segments"),c.a.createElement(f.a,{value:"count"},"count"),c.a.createElement(f.a,{value:"recovery"},"recovery"),c.a.createElement(f.a,{value:"health"},"health"),c.a.createElement(f.a,{value:"pending_tasks"},"pending_tasks"),c.a.createElement(f.a,{value:"aliases"},"aliases"),c.a.createElement(f.a,{value:"thread_pool"},"thread_pool"),c.a.createElement(f.a,{value:"plugins"},"plugins"),c.a.createElement(f.a,{value:"fielddata"},"fielddata"),c.a.createElement(f.a,{value:"nodeattrs"},"nodeattrs"),c.a.createElement(f.a,{value:"repositories"},"repositories"),c.a.createElement(f.a,{value:"templates"},"templates"))),c.a.createElement(H,{component:g.a,mt:5},c.a.createElement(b.a,{className:n.table},c.a.createElement(h.a,null,c.a.createElement(j.a,null,m.map((function(e,a){return c.a.createElement(y.a,{key:a}," ",e," ")})))),c.a.createElement(O.a,null,t.map((function(e,a){return c.a.createElement(j.a,{key:a},m.map((function(a,t){return c.a.createElement(y.a,{key:t}," ",e[a]," ")})))})))))))}))},664:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},667:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},678:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),c=(t(4),t(7)),i=t(9),l=t(664),s={variant:"head"},d=o.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(c.a)(t.root,i),ref:a},m)))}));a.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},679:function(e,a,t){"use strict";var n=t(6),r=t(1),o=t(0),c=(t(4),t(7)),i=t(9),l=t(13),s=t(17),d=t(667),u=t(664),m=o.forwardRef((function(e,a){var t,i=e.align,s=void 0===i?"inherit":i,m=e.classes,p=e.className,v=e.component,f=e.padding,g=e.scope,b=e.size,h=e.sortDirection,j=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=o.useContext(d.a),E=o.useContext(u.a);t=v||(E&&"head"===E.variant?"th":"td");var x=g;!x&&E&&"head"===E.variant&&(x="col");var k=f||(O&&O.padding?O.padding:"default"),N=b||(O&&O.size?O.size:"medium"),w=j||E&&E.variant,C=null;return h&&(C="asc"===h?"ascending":"descending"),o.createElement(t,Object(r.a)({ref:a,className:Object(c.a)(m.root,m[w],p,"inherit"!==s&&m["align".concat(Object(l.a)(s))],"default"!==k&&m["padding".concat(Object(l.a)(k))],"medium"!==N&&m["size".concat(Object(l.a)(N))],"head"===w&&O&&O.stickyHeader&&m.stickyHeader),"aria-sort":C,scope:x},y))}));a.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.i)(Object(s.d)(e.palette.divider,1),.88):Object(s.a)(Object(s.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},680:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),c=(t(4),t(7)),i=t(9),l=t(664),s=t(17),d=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,v=void 0!==p&&p,f=Object(r.a)(e,["classes","className","component","hover","selected"]),g=o.useContext(l.a);return o.createElement(d,Object(n.a)({ref:a,className:Object(c.a)(t.root,i,g&&{head:t.head,footer:t.footer}[g.variant],m&&t.hover,v&&t.selected)},f))}));a.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},681:function(e,a,t){"use strict";var n=t(6),r=t(1),o=t(0),c=(t(4),t(7)),i=t(9),l=t(667),s=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,v=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=o.useMemo((function(){return{padding:m,size:v,stickyHeader:g}}),[m,v,g]);return o.createElement(l.a.Provider,{value:h},o.createElement(d,Object(r.a)({ref:a,className:Object(c.a)(t.root,i,g&&t.stickyHeader)},b)))}));a.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},682:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),c=(t(4),t(7)),i=t(9),l=t(664),s={variant:"body"},d=o.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(c.a)(t.root,i),ref:a},m)))}));a.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},696:function(e,a,t){"use strict";var n=t(1),r=t(319),o=t(95);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(n.a)({defaultTheme:o.a},a))}},714:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),c=(t(4),t(7)),i=t(9),l=t(17),s=o.forwardRef((function(e,a){var t=e.absolute,i=void 0!==t&&t,l=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,v=e.light,f=void 0!==v&&v,g=e.orientation,b=void 0===g?"horizontal":g,h=e.role,j=void 0===h?"hr"!==u?"separator":void 0:h,y=e.variant,O=void 0===y?"fullWidth":y,E=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(n.a)({className:Object(c.a)(l.root,s,"fullWidth"!==O&&l[O],i&&l.absolute,p&&l.flexItem,f&&l.light,"vertical"===b&&l.vertical),role:j,ref:a},E))}));a.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},751:function(e,a,t){"use strict";var n=t(1),r=t(6),o=t(0),c=(t(4),t(7)),i=t(9),l=o.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:a,className:Object(c.a)(t.root,i)},d))}));a.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)}}]);
//# sourceMappingURL=32.c8ee5ef9.chunk.js.map